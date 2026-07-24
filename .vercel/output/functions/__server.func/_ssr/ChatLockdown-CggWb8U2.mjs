import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.mjs";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-C9wDpzQ-.mjs";
import { t as Link } from "./link-BUYuhDlp.mjs";
import { b as motion, l as createLucideIcon } from "./createLucideIcon-DHTKS07v.mjs";
import { n as storage, t as newId } from "./storage-CKF6nif6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ChatLockdown-CggWb8U2.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lock = createLucideIcon("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react());
function useThreads() {
	const [threads, setThreads] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setThreads(storage.getThreads());
		setReady(true);
	}, []);
	const persist = (0, import_react.useCallback)((next) => {
		storage.setThreads(next);
		setThreads(next);
	}, []);
	return {
		threads,
		ready,
		create: (0, import_react.useCallback)((title = "New conversation") => {
			const t = {
				id: newId(),
				title,
				updatedAt: Date.now(),
				messages: []
			};
			persist([t, ...threads]);
			return t;
		}, [threads, persist]),
		remove: (0, import_react.useCallback)((id) => persist(threads.filter((t) => t.id !== id)), [threads, persist]),
		rename: (0, import_react.useCallback)((id, title) => persist(threads.map((t) => t.id === id ? {
			...t,
			title,
			updatedAt: Date.now()
		} : t)), [threads, persist]),
		setMessages: (0, import_react.useCallback)((id, messages) => {
			const current = storage.getThreads();
			const idx = current.findIndex((t) => t.id === id);
			let next;
			const firstUser = messages.find((m) => m.role === "user");
			const title = firstUser ? firstUser.content.slice(0, 48) : "New conversation";
			if (idx === -1) next = [{
				id,
				title,
				updatedAt: Date.now(),
				messages
			}, ...current];
			else next = [{
				...current[idx],
				messages,
				updatedAt: Date.now(),
				title: current[idx].title === "New conversation" ? title : current[idx].title
			}, ...current.filter((t) => t.id !== id)];
			persist(next);
		}, [persist])
	};
}
var import_jsx_runtime = require_jsx_runtime();
function ChatLockdown() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "glass-panel max-w-md text-center p-10 relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-gold-soft to-accent-rose" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-hairline/50 mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-7 w-7 text-accent-gold-soft" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl mb-3",
					children: "Unlock Nari"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mb-8 leading-relaxed",
					children: "To provide you with safe, personalized, and highly accurate guidance, Nari needs a baseline understanding of your cycle. Please take the 3-minute health assessment to unlock your private AI companion."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/assessment",
					className: "btn-primary-glow inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold",
					children: "Take the assessment"
				})
			]
		})
	});
}
//#endregion
export { useThreads as n, ChatLockdown as t };
