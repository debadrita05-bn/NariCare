import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.mjs";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-C9wDpzQ-.mjs";
import { t as Link } from "./link-BUYuhDlp.mjs";
import { n as computeScores, r as levelOf, t as CATEGORIES } from "./scoring-CpLvIBOI.mjs";
import { b as motion, l as createLucideIcon } from "./createLucideIcon-DHTKS07v.mjs";
import { t as AnimatePresence } from "./AnimatePresence-B9Axl5Sg.mjs";
import { n as storage } from "./storage-CKF6nif6.mjs";
import { t as useAssessment } from "./useAssessment-Ch_uBqv-.mjs";
import { t as ArrowRight } from "./arrow-right-DjwPKPHk.mjs";
import { t as MessageCircle } from "./message-circle-BhkYRiiN.mjs";
import { t as RiskBloom } from "./RiskBloom-BpgTysnJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assessment--1kf992X.js
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEP_NAMES = [
	"Basics",
	"Regularity",
	"Flow & pain",
	"Symptoms",
	"Lifestyle"
];
var SYMPTOMS = [
	{
		key: "acne",
		label: "Persistent acne"
	},
	{
		key: "hirsutism",
		label: "Excess facial/body hair"
	},
	{
		key: "weightGain",
		label: "Unexplained weight gain"
	},
	{
		key: "hairThin",
		label: "Hair thinning"
	},
	{
		key: "fatigue",
		label: "Frequent fatigue"
	},
	{
		key: "dizziness",
		label: "Dizziness / breathlessness"
	},
	{
		key: "moodSwings",
		label: "Mood swings"
	},
	{
		key: "bloating",
		label: "Bloating"
	},
	{
		key: "breastTender",
		label: "Breast tenderness"
	},
	{
		key: "headache",
		label: "Recurring headaches"
	}
];
var emptyRaw = {
	age: 24,
	cycleLength: 28,
	periodLength: 5,
	variation: -1,
	missed: -1,
	pregnancyContext: null,
	flow: -1,
	clots: -1,
	painLevel: 3,
	painInterference: -1,
	stressLevel: 4,
	sleep: -1,
	exercise: -1,
	sym: {
		acne: false,
		hirsutism: false,
		weightGain: false,
		hairThin: false,
		fatigue: false,
		dizziness: false,
		moodSwings: false,
		bloating: false,
		breastTender: false,
		headache: false
	}
};
function AssessmentPage() {
	const { assessment, save } = useAssessment();
	const [showResults, setShowResults] = (0, import_react.useState)(!!assessment);
	const [raw, setRaw] = (0, import_react.useState)(assessment?.raw ?? emptyRaw);
	const [step, setStep] = (0, import_react.useState)(1);
	const [err, setErr] = (0, import_react.useState)(null);
	const set = (k, v) => setRaw((r) => ({
		...r,
		[k]: v
	}));
	const validate = (n) => {
		if (n === 1) {
			if (!raw.age || raw.age < 10 || raw.age > 60 || !Number.isInteger(raw.age)) return "Please enter an age between 10 and 60.";
		}
		if (n === 2) {
			if (raw.variation < 0) return "Pick how much your cycle varies.";
			if (raw.missed < 0) return "Pick how many periods you missed.";
			if (!raw.pregnancyContext) return "Pick a pregnancy-possibility option.";
		}
		if (n === 3) {
			if (raw.flow < 0) return "Pick your flow level.";
			if (raw.clots < 0) return "Pick a clots option.";
			if (raw.painInterference < 0) return "Pick a pain-interference option.";
		}
		if (n === 5) {
			if (raw.sleep < 0) return "Pick a sleep option.";
			if (raw.exercise < 0) return "Pick an exercise option.";
		}
		return null;
	};
	const next = () => {
		const e = validate(step);
		if (e) {
			setErr(e);
			return;
		}
		setErr(null);
		if (step < 5) setStep(step + 1);
		else {
			const scores = computeScores(raw);
			save({
				savedAt: Date.now(),
				raw,
				scores
			});
			setShowResults(true);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
	};
	const retake = () => {
		setRaw(emptyRaw);
		setStep(1);
		setShowResults(false);
		setErr(null);
	};
	if (showResults) {
		const all = storage.getAssessments();
		const saved = all.length > 0 ? all[0] : null;
		if (!saved) {
			setShowResults(false);
			return null;
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {
			saved,
			onRetake: retake
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-6 py-16 overflow-x-hidden",
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
					children: "Assessment"
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
					children: "Tell us about your last few cycles."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .2 },
					className: "mt-2 text-muted-foreground",
					children: "Estimates are fine — just go with your best recollection."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 glass-panel p-6 md:p-10 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1 overflow-hidden rounded-full bg-surface-light",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "h-full bg-gradient-to-r from-accent-gold to-accent-rose",
						initial: false,
						animate: { width: `${step / 5 * 100}%` },
						transition: { duration: .4 }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Step ",
						step,
						" of 5"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: STEP_NAMES[step - 1] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 40
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: -40
						},
						transition: {
							type: "spring",
							bounce: .2,
							duration: .6
						},
						className: "mt-10",
						children: [
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step1, {
								raw,
								set
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step2, {
								raw,
								set
							}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step3, {
								raw,
								set
							}),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step4, {
								raw,
								set
							}),
							step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step5, {
								raw,
								set
							})
						]
					}, step)
				}),
				err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-high",
					children: err
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-between border-t border-hairline pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setStep(Math.max(1, step - 1));
							setErr(null);
						},
						className: `inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold hover:border-accent-gold-soft ${step === 1 ? "invisible" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: next,
						className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold",
						children: [
							step === 5 ? "See my results" : "Continue",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})]
				})
			]
		})]
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mb-2 block text-sm font-semibold",
				children: label
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs text-muted-foreground",
				children: hint
			}),
			children
		]
	});
}
function Choices({ options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
		children: options.map((o) => {
			const selected = value === o.value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				type: "button",
				whileHover: { scale: 1.02 },
				whileTap: { scale: .97 },
				onClick: () => onChange(o.value),
				className: `relative rounded-2xl border px-4 py-4 text-sm transition-colors ${selected ? "border-transparent bg-gradient-to-br from-primary to-[#a8446a] font-semibold text-white shadow-lg shadow-primary/30" : "border-hairline/50 bg-white/5 hover:bg-white/10 text-muted-foreground"}`,
				children: o.label
			}, String(o.value));
		})
	});
}
function Range({ min, max, value, onChange, suffix }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min,
			max,
			value,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "flex-1 accent-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-14 rounded-lg border border-hairline bg-bg-alt px-3 py-1.5 text-center font-mono text-sm",
			children: [value, suffix ?? ""]
		})]
	});
}
function Step1({ raw, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "The basics"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "A few numbers to anchor everything else."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Your age",
			hint: "Between 10 and 60 — the reproductive age range this tool is built for.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "number",
				min: 10,
				max: 60,
				value: raw.age || "",
				onChange: (e) => set("age", Number(e.target.value)),
				placeholder: "e.g. 24",
				className: "w-full rounded-xl border border-hairline bg-bg-alt px-4 py-3 text-base focus:border-accent-gold-soft focus:outline-none"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Average cycle length (day 1 to day 1)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				min: 15,
				max: 60,
				value: raw.cycleLength,
				onChange: (v) => set("cycleLength", v),
				suffix: " days"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Average period duration",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				min: 1,
				max: 14,
				value: raw.periodLength,
				onChange: (v) => set("periodLength", v),
				suffix: " days"
			})
		})
	] });
}
function Step2({ raw, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "Regularity"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "How predictable has your cycle been lately?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "How much does your cycle length vary month to month?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.variation,
				onChange: (v) => set("variation", v),
				options: [
					{
						value: 0,
						label: "Almost never (±0–2 days)"
					},
					{
						value: 1,
						label: "A little (±3–7 days)"
					},
					{
						value: 2,
						label: "Noticeably (±8–14 days)"
					},
					{
						value: 3,
						label: "A lot (14+ days)"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "In the last 6 months, how many periods did you miss entirely?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.missed,
				onChange: (v) => set("missed", v),
				options: [
					{
						value: 0,
						label: "0"
					},
					{
						value: 1,
						label: "1"
					},
					{
						value: 2,
						label: "2–3"
					},
					{
						value: 3,
						label: "4+"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Are you sexually active in a way that could result in pregnancy?",
			hint: "This matters because a missed period can mean pregnancy, not just irregularity.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.pregnancyContext,
				onChange: (v) => set("pregnancyContext", v),
				options: [
					{
						value: "none",
						label: "Not sexually active"
					},
					{
						value: "protected",
						label: "Yes — reliable contraception"
					},
					{
						value: "unprotected",
						label: "Yes — no / inconsistent contraception"
					},
					{
						value: "undisclosed",
						label: "Prefer not to say"
					}
				]
			})
		})
	] });
}
function Step3({ raw, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "Flow & pain"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "Details about bleeding and discomfort."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "How would you describe your flow?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.flow,
				onChange: (v) => set("flow", v),
				options: [
					{
						value: 0,
						label: "Light"
					},
					{
						value: 1,
						label: "Moderate"
					},
					{
						value: 2,
						label: "Heavy"
					},
					{
						value: 3,
						label: "Very heavy"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Do you regularly pass large clots?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.clots,
				onChange: (v) => set("clots", v),
				options: [
					{
						value: 0,
						label: "No"
					},
					{
						value: 1,
						label: "Occasionally"
					},
					{
						value: 2,
						label: "Every cycle"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Period pain level (0 = none, 10 = unbearable)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				min: 0,
				max: 10,
				value: raw.painLevel,
				onChange: (v) => set("painLevel", v)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Does the pain stop you from your normal daily activities?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.painInterference,
				onChange: (v) => set("painInterference", v),
				options: [
					{
						value: 0,
						label: "Never"
					},
					{
						value: 1,
						label: "Sometimes"
					},
					{
						value: 2,
						label: "Most cycles"
					}
				]
			})
		})
	] });
}
function Step4({ raw, set }) {
	const toggle = (k) => set("sym", {
		...raw.sym,
		[k]: !raw.sym[k]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "Other symptoms"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "Select anything you've noticed regularly — not just during your period."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: SYMPTOMS.map((s) => {
				const on = raw.sym[s.key];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					type: "button",
					whileHover: { scale: 1.02 },
					whileTap: { scale: .97 },
					onClick: () => toggle(s.key),
					className: `flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm transition-colors ${on ? "border-transparent bg-gradient-to-br from-primary/90 to-[#a8446a]/90 text-white shadow-lg shadow-primary/20" : "border-hairline/50 bg-white/5 hover:bg-white/10 text-muted-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `flex h-5 w-5 flex-none items-center justify-center rounded-md transition-colors ${on ? "bg-white text-primary shadow-sm" : "border border-hairline/50 bg-black/20"}`,
						children: on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[12px] font-bold",
							children: "✓"
						})
					}), s.label]
				}, s.key);
			})
		})
	] });
}
function Step5({ raw, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "Lifestyle"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "Context that shapes hormonal balance."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Day-to-day stress level",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				min: 0,
				max: 10,
				value: raw.stressLevel,
				onChange: (v) => set("stressLevel", v)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Average sleep per night",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.sleep,
				onChange: (v) => set("sleep", v),
				options: [
					{
						value: 0,
						label: "7–9 hrs"
					},
					{
						value: 1,
						label: "6–7 hrs"
					},
					{
						value: 2,
						label: "Under 6 hrs"
					},
					{
						value: 3,
						label: "Irregular / shift"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "How often do you exercise?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.exercise,
				onChange: (v) => set("exercise", v),
				options: [
					{
						value: 0,
						label: "Most days"
					},
					{
						value: 1,
						label: "A few times a week"
					},
					{
						value: 2,
						label: "Rarely"
					},
					{
						value: 3,
						label: "Intense training"
					}
				]
			})
		})
	] });
}
function Results({ saved, onRetake }) {
	const { scores } = saved;
	const overall = levelOf((scores.irregularity + scores.pcos + scores.dysmenorrhea + scores.anaemia + scores.stress) / 5);
	const highs = CATEGORIES.filter((c) => scores[c.key] >= 64).map((c) => c.name);
	const summary = highs.length === 0 ? "Nothing here crosses into the high-risk range. Keep tracking your cycle month to month." : highs.length === 1 ? `Everything looks steady except one area — ${highs[0]} — worth a conversation with a doctor.` : `${highs.length} areas scored in the high range: ${highs.join(", ")}. A solid checklist for your next doctor's visit.`;
	const recs = [];
	if (scores.pregnancyFlag) recs.push("Take a home pregnancy test first, then see a doctor regardless of result.");
	else if (scores.pregnancyWatch) recs.push("Rule out pregnancy with a home test before acting on the irregularity score.");
	if (scores.irregularity >= 34) recs.push("Track cycle start dates for 3 months and bring the log to your appointment.");
	if (scores.pcos >= 64) recs.push("Ask about a pelvic ultrasound and hormone panel (LH, FSH, testosterone).");
	else if (scores.pcos >= 34) recs.push("Mention skin/hair symptoms alongside cycle length at your next check-up.");
	if (scores.dysmenorrhea >= 64) recs.push("Persistent disruptive pain can indicate endometriosis — discuss directly.");
	if (scores.anaemia >= 64) recs.push("Ask for a haemoglobin / ferritin blood test.");
	else if (scores.anaemia >= 34) recs.push("Consider iron-rich foods and monitor fatigue during heavier days.");
	if (scores.stress >= 64) recs.push("Sleep and stress load are high enough to be affecting your cycle.");
	if (!recs.length) recs.push("No urgent flags — a routine annual check-up is still a good idea.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-6 py-16",
		children: [
			scores.pregnancyFlag && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 rounded-2xl border border-accent-gold/50 bg-accent-gold/10 p-6 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: "Possible pregnancy — please check this first."
					}),
					" ",
					"You reported a missed period and sexual activity without reliable contraception. Take a home pregnancy test now, and see a doctor regardless of the result."
				]
			}),
			!scores.pregnancyFlag && scores.pregnancyWatch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 rounded-2xl border border-hairline bg-bg-alt p-6 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: "Quick note:"
				}), " You reported a missed period. Rule out pregnancy with a home test before reading the irregularity score below as a cycle-disorder signal."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBloom, { scores })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest",
						style: { borderColor: overall.hex },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: { background: overall.hex }
							}),
							"Overall: ",
							overall.label,
							" attention"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif text-3xl md:text-4xl",
						children: "Your cycle risk snapshot"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: summary
					}),
					scores.ageNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-accent-gold-soft",
						children: ["Age context: ", scores.ageNote]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/ask",
							className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Ask Nari about my results"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/doctor",
							className: "inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold hover:border-accent-gold-soft hover:text-accent-gold-soft",
							children: "Prepare for a doctor visit"
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2",
				children: CATEGORIES.map((c, i) => {
					const s = scores[c.key];
					const lvl = levelOf(s);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .1 + i * .07 },
						className: "glass-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-2xl font-semibold",
									style: { color: lvl.hex },
									children: s
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-3 inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest",
								style: {
									background: `${lvl.hex}22`,
									color: lvl.hex,
									borderColor: `${lvl.hex}55`
								},
								children: [lvl.label, " risk"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 overflow-hidden rounded-full bg-surface-light",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									animate: { width: `${s}%` },
									transition: {
										delay: .3 + i * .07,
										duration: .8
									},
									className: "h-full rounded-full",
									style: { background: lvl.hex }
								})
							})
						]
					}, c.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl border border-hairline bg-surface p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl",
					children: "Worth raising with a doctor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 pl-5 text-sm text-muted-foreground [&>li]:list-disc",
					children: recs.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl border border-high/40 bg-high/10 p-6 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: "This is not a medical diagnosis."
				}), " NariCare estimates likelihood patterns from self-reported answers. It cannot replace a consultation, ultrasound, or blood test. If any score reads \"High,\" or you're in pain right now, please speak with a gynaecologist."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onRetake,
					className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), " Retake assessment"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ask",
					className: "inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold hover:border-accent-gold-soft hover:text-accent-gold-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Discuss with Nari"]
				})]
			})
		]
	});
}
//#endregion
export { AssessmentPage as component };
