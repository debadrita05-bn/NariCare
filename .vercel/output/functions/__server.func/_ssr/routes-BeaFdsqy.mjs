import { o as __toESM } from "../_runtime.mjs";
import { r as levelOf, t as CATEGORIES } from "./scoring-CpLvIBOI.mjs";
import { a as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, o as motion, r as useTransform, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { b as BookOpen, f as Heart, h as ClipboardCheck, i as ShieldCheck, l as MessageCircle, p as Flower2, r as Sparkles, v as CalendarHeart, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as useAssessment } from "./useAssessment-DoSaFQSy.mjs";
import { t as useTracker } from "./useTracker-BlGiOe5d.mjs";
import { t as flower_default } from "./flower-B06oMxf0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BeaFdsqy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Subtle mouse-driven tilt for hero visuals.
* Returns spring-smoothed rotateX/rotateY motion values.
* Disabled on reduced-motion and touch devices.
*/
function useMouseTilt(strength = 6) {
	const reduce = useReducedMotion();
	const rx = useMotionValue(0);
	const ry = useMotionValue(0);
	const rxs = useSpring(rx, {
		stiffness: 80,
		damping: 20,
		mass: .6
	});
	const rys = useSpring(ry, {
		stiffness: 80,
		damping: 20,
		mass: .6
	});
	(0, import_react.useEffect)(() => {
		if (reduce) return;
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const onMove = (e) => {
			const x = e.clientX / window.innerWidth * 2 - 1;
			const y = e.clientY / window.innerHeight * 2 - 1;
			ry.set(x * strength);
			rx.set(-y * strength);
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, [
		reduce,
		rx,
		ry,
		strength
	]);
	return {
		rx: rxs,
		ry: rys
	};
}
/**
* Static gerbera daisy hero visual with gentle idle sway,
* mouse-driven parallax tilt, and orbiting golden pollen.
*/
function CycleWheel({ size = 780 }) {
	const reduce = useReducedMotion();
	const { rx, ry } = useMouseTilt(4);
	const orbits = [
		{
			r: size * .46,
			dur: 26,
			delay: 0,
			dot: 6
		},
		{
			r: size * .52,
			dur: 34,
			delay: 2,
			dot: 4
		},
		{
			r: size * .4,
			dur: 22,
			delay: 4,
			dot: 5
		},
		{
			r: size * .5,
			dur: 30,
			delay: 6,
			dot: 3
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative hidden items-center justify-center md:flex",
		style: {
			width: size,
			height: size,
			perspective: 1200
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute inset-0 rounded-full",
				style: {
					background: "conic-gradient(from 0deg, rgba(240,201,137,0.18), rgba(198,91,124,0.15), rgba(240,201,137,0.05), rgba(198,91,124,0.18), rgba(240,201,137,0.18))",
					filter: "blur(60px)"
				},
				animate: reduce ? {} : { rotate: 360 },
				transition: {
					duration: 60,
					repeat: Infinity,
					ease: "linear"
				}
			}),
			!reduce && orbits.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute left-1/2 top-1/2",
				style: {
					width: o.r * 2,
					height: o.r * 2,
					marginLeft: -o.r,
					marginTop: -o.r
				},
				animate: { rotate: i % 2 === 0 ? 360 : -360 },
				transition: {
					duration: o.dur,
					delay: o.delay,
					repeat: Infinity,
					ease: "linear"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute rounded-full",
					style: {
						width: o.dot,
						height: o.dot,
						top: -o.dot / 2,
						left: `calc(50% - ${o.dot / 2}px)`,
						background: "rgba(240,201,137,0.9)",
						boxShadow: "0 0 12px rgba(240,201,137,0.9)"
					}
				})
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: flower_default,
				alt: "Gerbera daisy",
				width: size,
				height: size,
				style: {
					width: size,
					height: size,
					rotateX: reduce ? 0 : rx,
					rotateY: reduce ? 0 : ry,
					transformStyle: "preserve-3d"
				},
				className: "relative z-10 select-none object-contain drop-shadow-[0_36px_100px_rgba(168,68,106,0.5)]",
				draggable: false,
				animate: reduce ? {} : {
					rotate: [
						-2,
						2,
						-2
					],
					scale: [
						1,
						1.015,
						1
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				}
			})
		]
	});
}
function daysBetween(a, b) {
	return Math.round((a.getTime() - b.getTime()) / 864e5);
}
function useNextPeriod() {
	const { entries } = useTracker();
	return (0, import_react.useMemo)(() => {
		const flowDays = entries.filter((e) => e.flow !== "none").map((e) => e.date).sort();
		if (flowDays.length === 0) return null;
		const groups = [];
		for (const d of flowDays) {
			const last = groups[groups.length - 1];
			if (!last) {
				groups.push([d]);
				continue;
			}
			if ((new Date(d).getTime() - new Date(last[last.length - 1]).getTime()) / 864e5 <= 2) last.push(d);
			else groups.push([d]);
		}
		const starts = groups.map((g) => new Date(g[0]));
		if (starts.length < 2) return { lastLog: flowDays[flowDays.length - 1] };
		const gaps = [];
		for (let i = 1; i < starts.length; i++) gaps.push(daysBetween(starts[i], starts[i - 1]));
		const avg = Math.round(gaps.reduce((a, b) => a + b, 0) / gaps.length);
		const next = new Date(starts[starts.length - 1].getTime() + avg * 864e5);
		const diff = daysBetween(next, /* @__PURE__ */ new Date());
		return {
			nextDate: next.toISOString().slice(0, 10),
			inDays: diff,
			avg
		};
	}, [entries]);
}
function TodayForYou() {
	const { assessment, ready: aReady } = useAssessment();
	const { ready: tReady } = useTracker();
	const nextPeriod = useNextPeriod();
	if (!aReady || !tReady) return null;
	const topScore = assessment ? CATEGORIES.map((c) => ({
		name: c.name,
		score: assessment.scores[c.key]
	})).sort((a, b) => b.score - a.score)[0] : null;
	const level = topScore ? levelOf(topScore.score) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .6,
			delay: .3
		},
		className: "mx-auto max-w-7xl px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card relative overflow-hidden p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-1.5 w-1.5 animate-pulse rounded-full",
					style: { background: "var(--accent-gold-soft)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-accent-gold-soft",
					children: "Today for you"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarHeart, { className: "h-4 w-4" }),
						title: "Your cycle",
						body: nextPeriod?.inDays !== void 0 ? nextPeriod.inDays >= 0 ? `Next period expected in ~${nextPeriod.inDays} day${nextPeriod.inDays === 1 ? "" : "s"} (${nextPeriod.avg}-day cycle average).` : `You're ${Math.abs(nextPeriod.inDays)} day${Math.abs(nextPeriod.inDays) === 1 ? "" : "s"} past the expected date — log today to keep the rhythm.` : nextPeriod?.lastLog ? "Log another period start so Nari can learn your rhythm." : "Log your first period to start seeing gentle predictions.",
						cta: "Open tracker",
						to: "/tracker"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
						title: "Your check-in",
						body: topScore && level ? `Highest signal: ${topScore.name} — ${level.label.toLowerCase()}. Tap to revisit or ask Nari.` : "Take a 3-minute check-in so Nari can personalize every answer to you.",
						cta: assessment ? "Revisit results" : "Begin check-in",
						to: "/assessment",
						accent: level?.hex
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
						title: "Talk to Nari",
						body: topScore ? `Curious about your ${topScore.name.toLowerCase()} signal? Ask Nari for what it means and what to do next.` : "A warm AI companion who knows women's health. Ask anything you'd whisper to a wise sister.",
						cta: "Chat with Nari",
						to: "/ask"
					})
				]
			})]
		})
	});
}
function Card({ icon, title, body, cta, to, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group relative flex flex-col gap-3 rounded-2xl border border-hairline bg-bg-alt/50 p-5 transition hover:border-accent-gold-soft/60 hover:bg-bg-alt/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-rose/25 to-accent-gold/20",
					style: accent ? { color: accent } : { color: "var(--accent-gold-soft)" },
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-base",
					children: title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "flex-1 text-sm leading-relaxed text-muted-foreground",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs font-semibold uppercase tracking-[0.14em] text-accent-gold-soft opacity-70 transition group-hover:opacity-100",
				children: [cta, " →"]
			})
		]
	});
}
var EASE = [
	.16,
	1,
	.3,
	1
];
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .8,
			ease: EASE,
			staggerChildren: .1
		}
	}
};
var itemFade = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .8,
			ease: EASE
		}
	}
};
function FloatingOrbs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden pointer-events-none z-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				y: [
					0,
					-20,
					0
				],
				x: [
					0,
					15,
					0
				],
				opacity: [
					.3,
					.5,
					.3
				]
			},
			transition: {
				duration: 8,
				repeat: Infinity,
				ease: "easeInOut"
			},
			className: "absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-accent-gold-soft/10 blur-[80px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				y: [
					0,
					30,
					0
				],
				x: [
					0,
					-20,
					0
				],
				opacity: [
					.2,
					.4,
					.2
				]
			},
			transition: {
				duration: 10,
				repeat: Infinity,
				ease: "easeInOut",
				delay: 1
			},
			className: "absolute bottom-[20%] right-[5%] h-[500px] w-[500px] rounded-full bg-accent-rose/10 blur-[100px]"
		})]
	});
}
function Home() {
	const { scrollYProgress } = useScroll();
	const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingOrbs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 overflow-hidden min-h-[90vh] flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: heroY },
					className: "mx-auto w-full grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						animate: "show",
						variants: fadeUp,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemFade,
								className: "eyebrow mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " For every Nari, with love"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: itemFade,
								className: "font-serif text-5xl leading-[1.05] md:text-7xl tracking-tight",
								children: [
									"Your body has a story. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-transparent bg-clip-text bg-gradient-to-r from-accent-gold-soft to-accent-rose pb-2 pr-2",
										children: "Nari"
									}),
									" ",
									"helps you listen."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: itemFade,
								className: "mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed",
								children: "A gentle, private space to understand your cycle, log your days, and ask the questions you'd whisper to a wise older sister. Nari is your AI companion — she knows your context and answers with warmth, not jargon."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemFade,
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/assessment",
									className: "btn-primary-glow group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold",
									children: [
										"Begin my check-in",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/ask",
									className: "group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-gold-soft/50 transition-all duration-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-accent-gold-soft/0 to-accent-gold-soft/0 group-hover:from-accent-gold-soft/10 group-hover:to-accent-rose/10 transition-all duration-500" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-accent-gold-soft" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative z-10",
											children: "Talk to Nari"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
								variants: itemFade,
								className: "mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-accent-gold-soft" }),
									"No sign-up",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent-gold-soft/30",
										children: "·"
									}),
									"Stays in your browser",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent-gold-soft/30",
										children: "·"
									}),
									"Private"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8,
							filter: "blur(20px)"
						},
						animate: {
							opacity: 1,
							scale: 1,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1.5,
							ease: "easeOut",
							delay: .3
						},
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-accent-rose/20 to-accent-gold-soft/20 blur-[100px] rounded-full z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 drop-shadow-[0_0_40px_rgba(240,201,137,0.15)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CycleWheel, {})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 pb-16 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayForYou, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 border-y border-hairline/50 bg-black/20 backdrop-blur-3xl py-24 md:py-32 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold-soft/20 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "eyebrow justify-center",
								children: "Everything Nari holds for you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: .1 },
								className: "mt-6 font-serif text-4xl md:text-5xl leading-tight",
								children: [
									"A quiet toolkit for the questions",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-accent-gold-soft",
										children: "no one told us"
									}),
									" to ask."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: .2 },
								className: "mt-6 text-lg text-muted-foreground",
								children: "Every corner is designed to be gentle, personal, and honest — never clinical, never scary."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "h-6 w-6" }),
								title: "The Check-in",
								desc: "18 kind questions. Five clear signals — irregularity, PCOS, pain, anaemia, stress. No black boxes.",
								to: "/assessment",
								cta: "Take my check-in",
								span: "md:col-span-2 lg:col-span-2"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-6 w-6" }),
								title: "Cycle Tracker",
								desc: "Log flow, pain and mood. Watch your rhythm appear and see when your next bloom is due.",
								to: "/tracker",
								cta: "Log today",
								span: "md:col-span-1 lg:col-span-1"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6" }),
								title: "Ask Nari",
								desc: "A warm AI companion who reads your context. Ask about symptoms, remedies, or next steps.",
								to: "/ask",
								cta: "Open chat",
								span: "md:col-span-1 lg:col-span-1"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-6 w-6" }),
								title: "Learn Hub",
								desc: "Plain-language guides on PCOS, endometriosis, anaemia and mental wellbeing.",
								to: "/history",
								cta: "View history",
								span: "md:col-span-2 lg:col-span-2"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "h-6 w-6" }),
								title: "Doctor Companion",
								desc: "A personalized list of tests and questions to carry into your gynaecologist visit.",
								to: "/doctor",
								cta: "Prepare my visit",
								span: "md:col-span-2 lg:col-span-3"
							}
						].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-50px"
							},
							transition: {
								delay: i * .1,
								duration: .6,
								ease: "easeOut"
							},
							className: `glass-panel group relative flex flex-col p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 overflow-hidden ${f.span}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-gold-soft/0 to-transparent transition-all duration-500 group-hover:via-accent-gold-soft/50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-rose/10 to-accent-gold/10 text-accent-gold-soft border border-white/5 shadow-[0_0_20px_rgba(240,201,137,0.1)] group-hover:scale-110 transition-transform duration-500 ease-out",
									children: f.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative z-10 font-serif text-2xl text-foreground/90",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative z-10 mt-3 flex-1 text-base text-muted-foreground/80 leading-relaxed",
									children: f.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: f.to,
									className: "relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-accent-gold-soft border border-white/5 transition-all group-hover:bg-accent-gold-soft group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(240,201,137,0.3)]",
									children: [
										f.cta,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})
							]
						}, f.title))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl text-center mx-auto mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "eyebrow justify-center",
							children: "The gentle process"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: .1 },
							className: "mt-6 font-serif text-4xl md:text-5xl",
							children: "Three soft steps, one clearer picture."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-3 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-hairline to-transparent -translate-y-1/2 z-0" }), [
							{
								n: "01",
								h: "Share honestly",
								p: "18 short questions, grouped into 5 kind steps. Skip anything that feels too much."
							},
							{
								n: "02",
								h: "Nari listens",
								p: "A clinically-informed engine reads your answers and shapes them into 5 clear signals."
							},
							{
								n: "03",
								h: "Understand & act",
								p: "See your bloom, chat with Nari, and carry a personalized checklist to your doctor."
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								delay: i * .2,
								duration: .6
							},
							className: "relative z-10 glass-panel p-8 md:p-10 flex flex-col items-center text-center overflow-hidden group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-8 -top-12 text-[120px] font-serif italic font-light text-white/[0.02] pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:text-accent-gold-soft/[0.03]",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-background border border-hairline shadow-xl mb-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif italic text-2xl text-accent-gold-soft",
										children: s.n
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative text-xl font-serif",
									children: s.h
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-3 text-sm text-muted-foreground leading-relaxed",
									children: s.p
								})
							]
						}, s.n))]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 pb-24 md:pb-32 px-4 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .95,
							y: 40
						},
						whileInView: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							ease: "easeOut"
						},
						className: "relative overflow-hidden rounded-[2.5rem] border border-hairline/50 p-12 md:p-24 text-center shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-surface to-background z-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { backgroundPosition: [
									"0% 50%",
									"100% 50%",
									"0% 50%"
								] },
								transition: {
									duration: 15,
									repeat: Infinity,
									ease: "linear"
								},
								className: "absolute inset-0 z-0 opacity-40",
								style: {
									backgroundImage: "radial-gradient(circle at center, rgba(198,91,124,0.15) 0%, rgba(240,201,137,0.05) 50%, transparent 100%)",
									backgroundSize: "200% 200%"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { className: "mx-auto mb-6 h-10 w-10 text-accent-gold-soft opacity-80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-4xl md:text-6xl text-foreground",
										children: "Ready when you are, Nari."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground/90 leading-relaxed",
										children: "Take three quiet minutes. Nari will remember what you share and use it to answer every question that follows."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 flex flex-wrap justify-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/assessment",
											className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold",
											children: "Begin my check-in"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/ask",
											className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-accent-gold-soft/50 transition-all duration-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-accent-gold-soft" }), " Talk to Nari"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-muted-foreground/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-accent-gold-soft/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/80 font-medium",
									children: "Only yours."
								}), " Every entry stays inside your browser."] })]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { Home as component };
