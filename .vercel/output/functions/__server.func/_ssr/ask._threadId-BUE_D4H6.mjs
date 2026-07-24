import { o as __toESM, t as __commonJSMin } from "./rolldown-runtime-CE-6LUnI.mjs";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-C9wDpzQ-.mjs";
import { t as Link } from "./link-BUYuhDlp.mjs";
import { t as useNavigate } from "./useNavigate-BsrQZntG.mjs";
import { a as Route, n as DefaultChatTransport, p as buildHealthContext, t as AbstractChat } from "./ask._threadId-Kr5r3fuw.mjs";
import { b as motion, l as createLucideIcon } from "./createLucideIcon-DHTKS07v.mjs";
import { t as AnimatePresence } from "./AnimatePresence-B9Axl5Sg.mjs";
import { n as storage } from "./storage-CKF6nif6.mjs";
import { n as useThreads, t as ChatLockdown } from "./ChatLockdown-CggWb8U2.mjs";
import { n as Trash2, t as Plus } from "./trash-2-CB3tm0Wj.mjs";
import { t as Sparkles } from "./sparkles-DILMdVbP.mjs";
import { t as useAssessment } from "./useAssessment-Ch_uBqv-.mjs";
import { t as useTracker } from "./useTracker-DPBNh0SV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask._threadId-BUE_D4H6.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MessageSquare = createLucideIcon("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
var require_throttleit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function throttle(function_, wait) {
		if (typeof function_ !== "function") throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`);
		let timeoutId;
		let lastCallTime = 0;
		return function throttled(...arguments_) {
			clearTimeout(timeoutId);
			const now = Date.now();
			const delayForNextCall = wait - (now - lastCallTime);
			if (delayForNextCall <= 0) {
				lastCallTime = now;
				function_.apply(this, arguments_);
			} else timeoutId = setTimeout(() => {
				lastCallTime = Date.now();
				function_.apply(this, arguments_);
			}, delayForNextCall);
		};
	}
	module.exports = throttle;
}));
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_throttleit = /* @__PURE__ */ __toESM(require_throttleit(), 1);
var __accessCheck = (obj, member, msg) => {
	if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
	__accessCheck(obj, member, "read from private field");
	return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
	if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
	member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
	__accessCheck(obj, member, "write to private field");
	setter ? setter.call(obj, value) : member.set(obj, value);
	return value;
};
function throttle(fn, waitMs) {
	return waitMs != null ? (0, import_throttleit.default)(fn, waitMs) : fn;
}
var _messages;
var _status;
var _error;
var _messagesCallbacks;
var _statusCallbacks;
var _errorCallbacks;
var _callMessagesCallbacks;
var _callStatusCallbacks;
var _callErrorCallbacks;
var ReactChatState = class {
	constructor(initialMessages = []) {
		__privateAdd(this, _messages, void 0);
		__privateAdd(this, _status, "ready");
		__privateAdd(this, _error, void 0);
		__privateAdd(this, _messagesCallbacks, /* @__PURE__ */ new Set());
		__privateAdd(this, _statusCallbacks, /* @__PURE__ */ new Set());
		__privateAdd(this, _errorCallbacks, /* @__PURE__ */ new Set());
		this.pushMessage = (message) => {
			__privateSet(this, _messages, __privateGet(this, _messages).concat(message));
			__privateGet(this, _callMessagesCallbacks).call(this);
		};
		this.popMessage = () => {
			__privateSet(this, _messages, __privateGet(this, _messages).slice(0, -1));
			__privateGet(this, _callMessagesCallbacks).call(this);
		};
		this.replaceMessage = (index, message) => {
			__privateSet(this, _messages, [
				...__privateGet(this, _messages).slice(0, index),
				this.snapshot(message),
				...__privateGet(this, _messages).slice(index + 1)
			]);
			__privateGet(this, _callMessagesCallbacks).call(this);
		};
		this.snapshot = (value) => structuredClone(value);
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => {
			const callback = throttleWaitMs ? throttle(onChange, throttleWaitMs) : onChange;
			__privateGet(this, _messagesCallbacks).add(callback);
			return () => {
				__privateGet(this, _messagesCallbacks).delete(callback);
			};
		};
		this["~registerStatusCallback"] = (onChange) => {
			__privateGet(this, _statusCallbacks).add(onChange);
			return () => {
				__privateGet(this, _statusCallbacks).delete(onChange);
			};
		};
		this["~registerErrorCallback"] = (onChange) => {
			__privateGet(this, _errorCallbacks).add(onChange);
			return () => {
				__privateGet(this, _errorCallbacks).delete(onChange);
			};
		};
		__privateAdd(this, _callMessagesCallbacks, () => {
			__privateGet(this, _messagesCallbacks).forEach((callback) => callback());
		});
		__privateAdd(this, _callStatusCallbacks, () => {
			__privateGet(this, _statusCallbacks).forEach((callback) => callback());
		});
		__privateAdd(this, _callErrorCallbacks, () => {
			__privateGet(this, _errorCallbacks).forEach((callback) => callback());
		});
		__privateSet(this, _messages, initialMessages);
	}
	get status() {
		return __privateGet(this, _status);
	}
	set status(newStatus) {
		__privateSet(this, _status, newStatus);
		__privateGet(this, _callStatusCallbacks).call(this);
	}
	get error() {
		return __privateGet(this, _error);
	}
	set error(newError) {
		__privateSet(this, _error, newError);
		__privateGet(this, _callErrorCallbacks).call(this);
	}
	get messages() {
		return __privateGet(this, _messages);
	}
	set messages(newMessages) {
		__privateSet(this, _messages, [...newMessages]);
		__privateGet(this, _callMessagesCallbacks).call(this);
	}
};
_messages = /* @__PURE__ */ new WeakMap();
_status = /* @__PURE__ */ new WeakMap();
_error = /* @__PURE__ */ new WeakMap();
_messagesCallbacks = /* @__PURE__ */ new WeakMap();
_statusCallbacks = /* @__PURE__ */ new WeakMap();
_errorCallbacks = /* @__PURE__ */ new WeakMap();
_callMessagesCallbacks = /* @__PURE__ */ new WeakMap();
_callStatusCallbacks = /* @__PURE__ */ new WeakMap();
_callErrorCallbacks = /* @__PURE__ */ new WeakMap();
var _state;
var Chat = class extends AbstractChat {
	constructor({ messages, ...init }) {
		const state = new ReactChatState(messages);
		super({
			...init,
			state
		});
		__privateAdd(this, _state, void 0);
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => __privateGet(this, _state)["~registerMessagesCallback"](onChange, throttleWaitMs);
		this["~registerStatusCallback"] = (onChange) => __privateGet(this, _state)["~registerStatusCallback"](onChange);
		this["~registerErrorCallback"] = (onChange) => __privateGet(this, _state)["~registerErrorCallback"](onChange);
		__privateSet(this, _state, state);
	}
};
_state = /* @__PURE__ */ new WeakMap();
function useChat({ experimental_throttle: throttleWaitMs, resume = false, ...options } = {}) {
	const chatRef = (0, import_react.useRef)("chat" in options ? options.chat : new Chat(options));
	if ("chat" in options && options.chat !== chatRef.current || "id" in options && chatRef.current.id !== options.id) chatRef.current = "chat" in options ? options.chat : new Chat(options);
	const messages = (0, import_react.useSyncExternalStore)((0, import_react.useCallback)((update) => chatRef.current["~registerMessagesCallback"](update, throttleWaitMs), [throttleWaitMs, chatRef.current.id]), () => chatRef.current.messages, () => chatRef.current.messages);
	const status = (0, import_react.useSyncExternalStore)(chatRef.current["~registerStatusCallback"], () => chatRef.current.status, () => chatRef.current.status);
	const error = (0, import_react.useSyncExternalStore)(chatRef.current["~registerErrorCallback"], () => chatRef.current.error, () => chatRef.current.error);
	const setMessages = (0, import_react.useCallback)((messagesParam) => {
		if (typeof messagesParam === "function") messagesParam = messagesParam(chatRef.current.messages);
		chatRef.current.messages = messagesParam;
	}, [chatRef]);
	(0, import_react.useEffect)(() => {
		if (resume) chatRef.current.resumeStream();
	}, [resume, chatRef]);
	return {
		id: chatRef.current.id,
		messages,
		setMessages,
		sendMessage: chatRef.current.sendMessage,
		regenerate: chatRef.current.regenerate,
		clearError: chatRef.current.clearError,
		stop: chatRef.current.stop,
		error,
		resumeStream: chatRef.current.resumeStream,
		status,
		/**
		* @deprecated Use `addToolOutput` instead.
		*/
		addToolResult: chatRef.current.addToolOutput,
		addToolOutput: chatRef.current.addToolOutput
	};
}
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
