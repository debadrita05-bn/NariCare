import { o as __toESM } from "../_runtime.mjs";
import { a as require_react, n as DefaultChatTransport, t as useChat } from "../_libs/@ai-sdk/react+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as buildHealthContext, t as Route } from "./ask._threadId-CoUvzW3R.mjs";
import { n as storage } from "./storage-CKF6nif6.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as Send, c as MessageSquare, n as Trash2, r as Sparkles, s as Plus } from "../_libs/lucide-react.mjs";
import { n as useThreads, t as ChatLockdown } from "./ChatLockdown-DDeTeKj_.mjs";
import { t as useAssessment } from "./useAssessment-DoSaFQSy.mjs";
import { t as useTracker } from "./useTracker-BlGiOe5d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask._threadId-95gZHD43.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function toUIMessages(msgs) {
	return msgs.map((m) => ({
		id: m.id,
		role: m.role,
		parts: [{
			type: "text",
			text: m.content
		}]
	}));
}
function fromUIMessages(msgs) {
	return msgs.filter((m) => m.role === "user" || m.role === "assistant").map((m) => {
		const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("");
		return {
			id: m.id,
			role: m.role,
			content: text,
			createdAt: Date.now()
		};
	});
}
function renderMarkdownLite(text) {
	return `<p>${text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/^\s*[-*]\s+(.*)$/gm, "<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul class="list-disc pl-5 my-2">${m}</ul>`).replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br/>")}</p>`;
}
var SUGGESTIONS = [
	"Explain my latest scores to me",
	"Is this much pain normal?",
	"Which blood tests should I ask my doctor for?",
	"Could my symptoms point to PCOS?",
	"Gentle remedies to ease my cramps tonight?"
];
function ChatWindow({ thread, compact = false, onMessagesChanged, onFirstMessage }) {
	const { assessments } = useAssessment();
	const { entries } = useTracker();
	const healthContext = (0, import_react.useMemo)(() => buildHealthContext(assessments, entries), [assessments, entries]);
	const transport = (0, import_react.useMemo)(() => new DefaultChatTransport({
		api: "/api/chat",
		prepareSendMessagesRequest: ({ messages, body }) => ({ body: {
			messages,
			healthContext,
			...body
		} })
	}), [healthContext]);
	const initialMessages = (0, import_react.useMemo)(() => toUIMessages(thread.messages), [thread.id]);
	const { messages, sendMessage, status } = useChat({
		id: thread.id,
		messages: initialMessages,
		transport
	});
	const [input, setInput] = (0, import_react.useState)("");
	const scrollRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const lastCountRef = (0, import_react.useRef)(-1);
	(0, import_react.useEffect)(() => {
		if (lastCountRef.current === messages.length && status !== "streaming") return;
		lastCountRef.current = messages.length;
		onMessagesChanged?.(fromUIMessages(messages));
	}, [
		messages,
		status,
		onMessagesChanged
	]);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, status]);
	(0, import_react.useEffect)(() => {
		inputRef.current?.focus();
	}, [thread.id]);
	const isBusy = status === "submitted" || status === "streaming";
	const send = (text) => {
		const t = text.trim();
		if (!t || isBusy) return;
		if (messages.length === 0) onFirstMessage?.(t);
		sendMessage({ text: t });
		setInput("");
		setTimeout(() => inputRef.current?.focus(), 0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex flex-col overflow-hidden ${compact ? "h-[520px]" : "h-full"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { backgroundPosition: [
					"0% 0%",
					"100% 100%",
					"0% 0%"
				] },
				transition: {
					duration: 20,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute inset-0 opacity-[0.03] pointer-events-none",
				style: {
					backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, transparent 50%)",
					backgroundSize: "200% 200%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "relative z-10 flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-hide",
				children: [
					messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-lg text-center pt-12 pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									scale: .8,
									opacity: 0
								},
								animate: {
									scale: 1,
									opacity: 1
								},
								transition: {
									type: "spring",
									duration: .8
								},
								className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-rose to-accent-gold shadow-[0_0_30px_rgba(240,201,137,0.4)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 28 28",
									className: "h-8 w-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M14 4 A10 10 0 0 1 14 24 A5 5 0 0 0 14 4",
										fill: "#fff"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h3, {
								initial: {
									y: 10,
									opacity: 0
								},
								animate: {
									y: 0,
									opacity: 1
								},
								transition: { delay: .1 },
								className: "font-serif text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70",
								children: "Hi love, I'm Nari."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									y: 10,
									opacity: 0
								},
								animate: {
									y: 0,
									opacity: 1
								},
								transition: { delay: .2 },
								className: "text-sm text-muted-foreground leading-relaxed px-4",
								children: "Ask me anything — about a symptom that's been on your mind, or what to raise at your next doctor visit."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: { delay: .4 },
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-gold-soft/80 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Gentle openings"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap justify-center gap-2",
									children: SUGGESTIONS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
										initial: {
											opacity: 0,
											scale: .9
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										transition: { delay: .5 + i * .05 },
										onClick: () => send(s),
										className: "rounded-full border border-hairline/50 bg-white/5 backdrop-blur-sm px-4 py-2 text-xs text-foreground/80 transition-all hover:border-accent-gold-soft/50 hover:bg-white/10 hover:text-accent-gold-soft hover:shadow-[0_0_15px_rgba(240,201,137,0.15)]",
										children: s
									}, s))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: messages.map((m) => {
							const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("");
							const isUser = m.role === "user";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 10,
									scale: .98
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								transition: {
									type: "spring",
									stiffness: 400,
									damping: 30
								},
								className: `flex ${isUser ? "justify-end" : "justify-start"}`,
								children: isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-primary to-primary/80 px-4 py-3 text-sm text-primary-foreground shadow-lg backdrop-blur-md",
									children: text
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-w-[85%] rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 px-5 py-4 text-sm text-foreground/95 leading-relaxed shadow-lg backdrop-blur-md [&_p]:mb-3 [&_p:last-child]:mb-0 [&_strong]:text-accent-gold-soft [&_li]:mb-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: { __html: renderMarkdownLite(text) } })
								})
							}, m.id);
						})
					}),
					status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						className: "flex items-center gap-3 px-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs italic text-muted-foreground/80",
								children: "Nari is thinking…"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t border-hairline/50 bg-black/20 backdrop-blur-xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						send(input);
					},
					className: "flex items-end gap-3 max-w-4xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							ref: inputRef,
							value: input,
							onChange: (e) => setInput(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									send(input);
								}
							},
							rows: 1,
							placeholder: "Ask Nari anything about your cycle…",
							className: "w-full resize-none rounded-2xl border border-hairline/50 bg-white/5 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-accent-gold-soft/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent-gold-soft/20 scrollbar-hide",
							style: { maxHeight: 140 }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: isBusy || !input.trim(),
						className: "btn-primary-glow flex h-12 w-12 flex-none items-center justify-center rounded-full disabled:opacity-40 transition-transform active:scale-95",
						"aria-label": "Send",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 flex flex-wrap items-center justify-center gap-2 text-center text-[10px] font-medium text-muted-foreground/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 inline mr-1 opacity-50" }), "Nari is AI"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Not medical advice" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "See a doctor for anything urgent" })
					]
				})]
			})
		]
	});
}
function AskThread() {
	const { threadId } = Route.useParams();
	const { threads, ready, create, remove, setMessages } = useThreads();
	const navigate = useNavigate();
	const thread = (0, import_react.useMemo)(() => threads.find((t) => t.id === threadId) ?? {
		id: threadId,
		title: "New conversation",
		updatedAt: Date.now(),
		messages: []
	}, [threads, threadId]);
	const handleMessages = (0, import_react.useCallback)((msgs) => {
		if (msgs.length === 0) return;
		setMessages(threadId, msgs);
	}, [threadId, setMessages]);
	const newThread = () => {
		const t = create();
		navigate({
			to: "/ask/$threadId",
			params: { threadId: t.id }
		});
	};
	const deleteThread = (id) => {
		remove(id);
		if (id === threadId) {
			const rest = threads.filter((t) => t.id !== id);
			if (rest.length) navigate({
				to: "/ask/$threadId",
				params: { threadId: rest[0].id }
			});
			else {
				const t = create();
				navigate({
					to: "/ask/$threadId",
					params: { threadId: t.id }
				});
			}
		}
	};
	if (ready && storage.getAssessments().length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatLockdown, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow justify-center",
				children: "Ask Nari"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-accent-gold-soft to-accent-rose pb-1",
				children: "Your private AI health companion"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-[260px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "glass-card flex flex-col overflow-hidden md:h-[640px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-hairline/50 p-4 bg-black/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: newThread,
						className: "btn-primary-glow flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-transform active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New chat"]
					})
				}), ready && threads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-4 text-xs text-muted-foreground",
					children: "No conversations yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide",
					children: threads.map((t) => {
						const active = t.id === threadId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `group flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-300 ${active ? "bg-accent-gold-soft/10 border border-accent-gold-soft/20 shadow-[0_0_15px_rgba(240,201,137,0.05)]" : "border border-transparent hover:bg-white/5 hover:border-white/10"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/ask/$threadId",
								params: { threadId: t.id },
								className: "flex min-w-0 flex-1 items-center gap-3 text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors ${active ? "bg-accent-gold-soft/20 text-accent-gold-soft" : "bg-white/5 text-muted-foreground group-hover:text-foreground"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `truncate transition-colors ${active ? "text-accent-gold-soft font-medium" : "text-muted-foreground group-hover:text-foreground"}`,
									children: t.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => deleteThread(t.id),
								className: "flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground/50 opacity-0 transition-all hover:bg-destructive/20 hover:text-destructive group-hover:opacity-100",
								"aria-label": "Delete thread",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						}) }, t.id);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass-card overflow-hidden md:h-[640px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWindow, {
					thread,
					onMessagesChanged: handleMessages
				})
			})]
		})]
	});
}
//#endregion
export { AskThread as component };
