import { o as __toESM } from "../_runtime.mjs";
import { r as levelOf, t as CATEGORIES } from "./scoring-CpLvIBOI.mjs";
import { a as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as storage } from "./storage-CKF6nif6.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { C as Activity, g as ChevronDown, y as CalendarDays } from "../_libs/lucide-react.mjs";
import { t as RiskBloom } from "./RiskBloom-BTdgMS86.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-BYaMpYWw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HistoryPage() {
	const assessments = storage.getAssessments().sort((a, b) => b.savedAt - a.savedAt);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	if (assessments.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] flex-col items-center justify-center px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-panel max-w-md p-10 relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-gold-soft to-accent-rose" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-hairline/50 mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-7 w-7 text-accent-gold-soft" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl mb-3",
					children: "No History Yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mb-8 leading-relaxed",
					children: "You haven't completed any assessments yet. Take your first assessment to start building your health timeline."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/assessment",
					className: "btn-primary-glow inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold",
					children: "Take Assessment"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "eyebrow justify-center",
					children: "Your Timeline"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 },
					className: "mt-4 font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-accent-gold-soft to-accent-rose pb-2",
					children: "Assessment History"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .2 },
					className: "mt-2 text-muted-foreground",
					children: "Track your cycle risk scores over time."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 space-y-4",
			children: assessments.map((a, i) => {
				const date = new Date(a.savedAt).toLocaleDateString("en-US", {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric"
				});
				const overall = levelOf((a.scores.irregularity + a.scores.pcos + a.scores.dysmenorrhea + a.scores.anaemia + a.scores.stress) / 5);
				const isOpen = openId === a.savedAt;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: i * .1 },
					className: "glass-panel overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpenId(isOpen ? null : a.savedAt),
						className: "flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-white/[0.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white/5 border border-hairline/50 text-accent-gold-soft sm:flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl",
								children: date
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-2 w-2 rounded-full",
									style: {
										background: overall.hex,
										boxShadow: `0 0 10px ${overall.hex}88`
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono uppercase tracking-widest text-muted-foreground",
									children: ["Overall: ", overall.label]
								})]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { rotate: isOpen ? 180 : 0 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5 text-muted-foreground" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							height: 0,
							opacity: 0
						},
						animate: {
							height: "auto",
							opacity: 1
						},
						exit: {
							height: 0,
							opacity: 0
						},
						transition: {
							type: "spring",
							bounce: .2,
							duration: .6
						},
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-hairline/50 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center bg-black/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-none scale-90 md:scale-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBloom, { scores: a.scores })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 w-full grid gap-4 sm:grid-cols-2",
								children: CATEGORIES.map((c) => {
									const s = a.scores[c.key];
									const lvl = levelOf(s);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-card p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-2 flex items-start justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-serif text-sm",
												children: c.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-lg font-semibold",
												style: { color: lvl.hex },
												children: s
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-1 overflow-hidden rounded-full bg-white/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: { width: 0 },
												animate: { width: `${s}%` },
												transition: {
													delay: .2,
													duration: .8
												},
												className: "h-full rounded-full",
												style: { background: lvl.hex }
											})
										})]
									}, c.key);
								})
							})]
						})
					}) })]
				}, a.savedAt);
			})
		})]
	});
}
//#endregion
export { HistoryPage as component };
