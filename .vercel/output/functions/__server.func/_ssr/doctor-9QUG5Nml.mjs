import { o as __toESM } from "../_runtime.mjs";
import { t as CATEGORIES } from "./scoring-CpLvIBOI.mjs";
import { a as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { _ as Check, l as MessageCircle, m as ClipboardList, r as Sparkles } from "../_libs/lucide-react.mjs";
import { t as useAssessment } from "./useAssessment-DoSaFQSy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctor-9QUG5Nml.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckableItem({ text, index, isQuestion = false }) {
	const [checked, setChecked] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { delay: index * .05 },
		onClick: () => setChecked(!checked),
		className: `group relative flex w-full items-start gap-3 rounded-xl p-3 text-left transition-all duration-300 ${checked ? "bg-white/5 opacity-60" : "hover:bg-white/5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border transition-colors ${checked ? "border-accent-gold-soft bg-accent-gold-soft text-primary" : isQuestion ? "border-accent-rose bg-accent-rose/10 text-accent-rose" : "border-muted-foreground/50 text-transparent group-hover:border-accent-gold-soft"}`,
			children: checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : isQuestion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-bold",
				children: "?"
			}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-sm transition-all duration-300 ${checked ? "text-muted-foreground" : "text-foreground"}`,
				children: text
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: checked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { scaleX: 0 },
				animate: { scaleX: 1 },
				exit: { scaleX: 0 },
				transition: {
					duration: .3,
					ease: "circOut"
				},
				className: "absolute left-0 top-1/2 h-px w-full origin-left bg-accent-gold-soft shadow-[0_0_8px_rgba(240,201,137,0.8)]"
			}) })]
		})]
	});
}
function DoctorPage() {
	const { assessment, ready } = useAssessment();
	const tests = [];
	const questions = [];
	const bring = ["Your cycle tracker log (from NariCare or a paper diary)"];
	if (assessment) {
		const { scores, raw } = assessment;
		if (scores.pregnancyFlag) {
			tests.push("Urine or blood pregnancy test (β-hCG)");
			questions.push("Given my missed period and possibility of pregnancy, what's the safest first step?");
		}
		if (scores.anaemia >= 34) {
			tests.push("Full blood count (CBC)");
			tests.push("Serum ferritin (iron stores)");
			questions.push("My periods are heavy and I'm often tired — could I be iron-deficient?");
		}
		if (scores.pcos >= 34) {
			tests.push("Pelvic ultrasound (transabdominal or transvaginal)");
			tests.push("Hormone panel: LH, FSH, testosterone, SHBG, prolactin, TSH");
			tests.push("Fasting glucose & HbA1c (insulin resistance is common with PCOS)");
			questions.push("My cycle length is " + raw.cycleLength + " days with variation — could this be PCOS?");
		}
		if (scores.dysmenorrhea >= 64) {
			tests.push("Pelvic ultrasound to look for structural causes");
			questions.push("My period pain stops me from normal activities — could this be endometriosis?");
			questions.push("What options do I have beyond over-the-counter painkillers?");
		}
		if (scores.irregularity >= 34) questions.push("Given my cycle variation, is there a hormonal cause worth investigating?");
		if (scores.stress >= 64) questions.push("Could stress and sleep be significantly affecting my cycle — and what do you recommend?");
		bring.push(`Note: your last assessment showed ${CATEGORIES.filter((c) => scores[c.key] >= 64).map((c) => c.name).join(", ") || "no high-risk patterns"}`);
	} else {
		questions.push("General cycle-health check-up");
		tests.push("Full blood count + ferritin (baseline)");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						children: "Doctor visit prep"
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
						className: "mt-4 font-serif text-3xl md:text-4xl",
						children: "Walk in prepared. Walk out with answers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .2 },
						className: "mt-3 text-muted-foreground",
						children: assessment ? "Based on your latest scores, here is an interactive checklist for your next appointment." : "Take the assessment first for a personalized checklist. General guidance below meanwhile."
					})
				]
			}),
			ready && !assessment && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				className: "mx-auto mt-6 max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/assessment",
					className: "btn-primary-glow flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold",
					children: "Take the 3-min assessment"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 },
					className: "glass-panel p-7 relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-gold-soft to-accent-rose opacity-50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gold-soft/10 text-accent-gold-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: "Tests to Request"
							})]
						}),
						tests.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1",
							children: tests.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckableItem, {
								text: t,
								index: i
							}, t))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground p-3 bg-white/5 rounded-xl",
							children: "No specific tests flagged — a routine check is fine."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .2 },
					className: "glass-panel p-7 relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-rose to-accent-gold-soft opacity-50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-rose/10 text-accent-rose",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: "Questions to Ask"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1",
							children: questions.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckableItem, {
								text: q,
								index: i,
								isQuestion: true
							}, q))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .3 },
				className: "mt-6 glass-panel p-7 flex flex-col md:flex-row md:items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-serif text-xl flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-accent-gold-soft" }), "What to bring"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: bring.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-gold-soft" }), b]
					}, b))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ask",
					className: "btn-primary-glow flex-none inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Ask Nari to expand"]
				})]
			})
		]
	});
}
//#endregion
export { DoctorPage as component };
