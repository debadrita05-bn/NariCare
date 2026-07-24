import { o as __toESM } from "../_runtime.mjs";
import { a as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as Trash2, s as Plus, y as CalendarDays } from "../_libs/lucide-react.mjs";
import { t as useTracker } from "./useTracker-BlGiOe5d.mjs";
import { r as ListSkeleton } from "./page-skeleton-HN2_d5b_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tracker-C_br0LS9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FLOW_OPTIONS = [
	"none",
	"light",
	"moderate",
	"heavy"
];
var MOOD_OPTIONS = [
	"great",
	"good",
	"meh",
	"low",
	"awful"
];
var SYMPTOMS = [
	"cramps",
	"bloating",
	"headache",
	"fatigue",
	"mood swings",
	"acne",
	"breast tenderness"
];
function today() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function TrackerPage() {
	const { entries, add, remove, ready } = useTracker();
	const [date, setDate] = (0, import_react.useState)(today());
	const [flow, setFlow] = (0, import_react.useState)("light");
	const [pain, setPain] = (0, import_react.useState)(2);
	const [mood, setMood] = (0, import_react.useState)("good");
	const [symptoms, setSymptoms] = (0, import_react.useState)([]);
	const [note, setNote] = (0, import_react.useState)("");
	const periods = (0, import_react.useMemo)(() => {
		const flowDays = entries.filter((e) => e.flow !== "none").map((e) => e.date).sort();
		const groups = [];
		for (const d of flowDays) {
			const last = groups[groups.length - 1];
			if (!last) {
				groups.push([d]);
				continue;
			}
			const prev = new Date(last[last.length - 1]);
			if ((new Date(d).getTime() - prev.getTime()) / 864e5 <= 2) last.push(d);
			else groups.push([d]);
		}
		return groups;
	}, [entries]);
	const nextPeriod = (0, import_react.useMemo)(() => {
		if (periods.length < 2) return null;
		const starts = periods.map((g) => new Date(g[0]));
		const gaps = [];
		for (let i = 1; i < starts.length; i++) gaps.push((starts[i].getTime() - starts[i - 1].getTime()) / 864e5);
		const avg = gaps.reduce((a, b) => a + b, 0) / gaps.length;
		const last = starts[starts.length - 1];
		return {
			date: new Date(last.getTime() + avg * 864e5).toISOString().slice(0, 10),
			avg: Math.round(avg)
		};
	}, [periods]);
	const submit = () => {
		add({
			date,
			flow,
			pain,
			mood,
			symptoms,
			note: note || void 0
		});
		setNote("");
		setSymptoms([]);
	};
	const toggleSym = (s) => setSymptoms((cur) => cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-6 py-16",
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
					children: "Cycle Tracker"
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
					children: "Log today. See tomorrow."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .2 },
					className: "mt-2 text-muted-foreground",
					children: "Everything is stored on this device only."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "glass-panel p-7 md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-xl",
					children: "Log an entry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: date,
							onChange: (e) => setDate(e.target.value),
							className: "w-full rounded-xl border border-hairline/50 bg-white/5 px-4 py-3 text-sm focus:border-accent-gold-soft focus:outline-none focus:ring-1 focus:ring-accent-gold-soft transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Flow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-2",
							children: FLOW_OPTIONS.map((f) => {
								const active = flow === f;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileHover: { scale: 1.03 },
									whileTap: { scale: .95 },
									onClick: () => setFlow(f),
									className: `relative rounded-xl px-2 py-3 text-xs capitalize transition-colors ${active ? "bg-gradient-to-br from-primary to-[#a8446a] text-white shadow-lg shadow-primary/30" : "bg-white/5 hover:bg-white/10 text-muted-foreground border border-hairline/30"}`,
									children: f
								}, f);
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: [
								"Pain (",
								pain,
								"/10)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 10,
							value: pain,
							onChange: (e) => setPain(Number(e.target.value)),
							className: "w-full accent-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Mood"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-5 gap-2",
							children: MOOD_OPTIONS.map((m) => {
								const active = mood === m;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileHover: { scale: 1.03 },
									whileTap: { scale: .95 },
									onClick: () => setMood(m),
									className: `relative rounded-xl px-2 py-3 text-xs capitalize transition-colors ${active ? "bg-gradient-to-br from-accent-gold to-accent-gold-soft text-surface font-semibold shadow-lg shadow-accent-gold/30" : "bg-white/5 hover:bg-white/10 text-muted-foreground border border-hairline/30"}`,
									children: m
								}, m);
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Symptoms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: SYMPTOMS.map((s) => {
								const active = symptoms.includes(s);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileHover: { scale: 1.03 },
									whileTap: { scale: .95 },
									onClick: () => toggleSym(s),
									className: `rounded-full border px-4 py-1.5 text-xs transition-colors ${active ? "border-transparent bg-primary text-white shadow-md shadow-primary/20" : "border-hairline hover:border-accent-gold-soft/50 text-muted-foreground bg-white/5"}`,
									children: s
								}, s);
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Note (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: note,
							onChange: (e) => setNote(e.target.value),
							rows: 2,
							className: "w-full resize-none rounded-xl border border-hairline/50 bg-white/5 px-4 py-3 text-sm focus:border-accent-gold-soft focus:outline-none focus:ring-1 focus:ring-accent-gold-soft transition-all",
							placeholder: "Anything else?"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: submit,
							className: "btn-primary-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Save entry"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .1,
							duration: .5,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "glass-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }), " Periods logged"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-serif text-4xl",
								children: periods.length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Total distinct cycles recorded"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .2,
							duration: .5,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "glass-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }), " Next predicted"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-serif text-2xl",
								children: nextPeriod ? nextPeriod.date : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: nextPeriod ? `Avg cycle ${nextPeriod.avg} days` : "Log 2+ periods to predict"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg",
						children: "Recent entries"
					}), !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListSkeleton, { rows: 4 })
					}) : entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "No entries yet. Add today's to get started."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
						layout: true,
						className: "mt-4 space-y-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							children: [...entries].reverse().slice(0, 12).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								layout: true,
								initial: {
									opacity: 0,
									x: -20,
									height: 0
								},
								animate: {
									opacity: 1,
									x: 0,
									height: "auto"
								},
								exit: {
									opacity: 0,
									scale: .8,
									height: 0
								},
								transition: {
									type: "spring",
									bounce: .3
								},
								className: "flex items-center justify-between rounded-2xl border border-hairline/50 bg-white/5 px-5 py-4 text-sm backdrop-blur-sm overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-xs uppercase tracking-widest text-accent-gold-soft",
										children: e.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 font-medium text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "capitalize",
												children: [e.flow, " flow"]
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground px-1",
												children: "•"
											}),
											" Pain ",
											e.pain,
											"/10",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground px-1",
												children: "•"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "capitalize",
												children: e.mood
											})
										]
									}),
									e.symptoms.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 text-[11px] text-muted-foreground/80",
										children: e.symptoms.join(", ")
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileHover: {
										scale: 1.1,
										rotate: 10
									},
									whileTap: { scale: .9 },
									onClick: () => remove(e.id),
									className: "rounded-full p-2.5 text-muted-foreground hover:bg-destructive/20 hover:text-destructive transition-colors",
									"aria-label": "Delete",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})]
							}, e.id))
						})
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { TrackerPage as component };
