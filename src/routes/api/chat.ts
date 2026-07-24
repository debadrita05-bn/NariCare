import { createFileRoute } from "@tanstack/react-router";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { SYSTEM_PROMPT } from "@/lib/health/context";

type ChatBody = {
  messages?: UIMessage[];
  healthContext?: string;
};

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as ChatBody;
        const messages = body.messages;
        if (!Array.isArray(messages)) {
          return new Response("messages required", { status: 400 });
        }

        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
          return new Response("Missing GROQ_API_KEY", { status: 500 });
        }

        const groq = createOpenAICompatible({
          name: "groq",
          baseURL: "https://api.groq.com/openai/v1",
          apiKey,
        });

        const system = body.healthContext
          ? `${SYSTEM_PROMPT}\n\n=== HEALTH CONTEXT (user's own data) ===\n${body.healthContext}\n=== END CONTEXT ===`
          : SYSTEM_PROMPT;

        const result = streamText({
          model: groq("llama-3.3-70b-versatile"),
          system,
          messages: convertToModelMessages(messages),
          temperature: 0.6,
        });

        return result.toUIMessageStreamResponse();
      },
    },
  },
});
