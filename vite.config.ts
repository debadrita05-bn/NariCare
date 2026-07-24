import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig(({ command, mode }) => {
  const plugins = [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
  ];

  // Only include Nitro for production builds (Cloudflare target)
  if (command === "build") {
    plugins.push(
      nitro({
        preset: "cloudflare-pages",
      }),
    );
  }

  return {
    plugins,
    resolve: {
      dedupe: ["react", "react-dom", "@tanstack/react-router"],
    },
  };
});
