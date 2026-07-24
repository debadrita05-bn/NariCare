import { o as __toESM } from "../_runtime.mjs";
import { a as require_react, i as streamText, r as convertToModelMessages } from "../_libs/@ai-sdk/react+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as SYSTEM_PROMPT, t as Route$8 } from "./ask._threadId-CoUvzW3R.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as X, u as Menu } from "../_libs/lucide-react.mjs";
import { t as flower_default } from "./flower-B06oMxf0.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-w7euNC2O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Cs2lpabF.css";
var logo_default = "/assets/logo-DpPLcrum.png";
function AnimatedBackground() {
	const ghosts = (0, import_react.useMemo)(() => {
		const rand = (min, max) => Math.random() * (max - min) + min;
		return Array.from({ length: 6 }, (_, i) => ({
			id: i,
			left: `${rand(-8, 90)}%`,
			top: `${rand(-6, 88)}%`,
			size: Math.round(rand(220, 460)),
			opacity: rand(.05, .11),
			blur: Math.round(rand(2, 8)),
			delay: rand(0, 8),
			duration: rand(28, 46),
			drift: rand(18, 40),
			rotate: rand(-75, 75)
		}));
	}, []);
	const pollen = (0, import_react.useMemo)(() => {
		const rand = (min, max) => Math.random() * (max - min) + min;
		return Array.from({ length: 22 }, (_, i) => ({
			id: 100 + i,
			left: `${rand(0, 100)}%`,
			top: `${rand(0, 100)}%`,
			size: Math.round(rand(2, 5)),
			delay: rand(0, 10),
			duration: rand(14, 26),
			drift: rand(30, 80)
		}));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(1200px 700px at 82% -10%, rgba(240,201,137,0.22), transparent 60%), radial-gradient(900px 600px at -10% 110%, rgba(227,168,87,0.18), transparent 60%), radial-gradient(700px 500px at 50% 120%, rgba(198,91,124,0.18), transparent 65%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute -top-32 right-[-8%] h-[520px] w-[520px] rounded-full",
				style: {
					background: "radial-gradient(circle, rgba(240,201,137,0.28) 0%, transparent 65%)",
					filter: "blur(6px)"
				},
				animate: {
					x: [
						0,
						30,
						-10,
						0
					],
					y: [
						0,
						20,
						-15,
						0
					]
				},
				transition: {
					duration: 30,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute -bottom-40 -left-24 h-[560px] w-[560px] rounded-full",
				style: {
					background: "radial-gradient(circle, rgba(198,91,124,0.22) 0%, transparent 65%)",
					filter: "blur(8px)"
				},
				animate: {
					x: [
						0,
						-20,
						15,
						0
					],
					y: [
						0,
						-15,
						20,
						0
					]
				},
				transition: {
					duration: 34,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			ghosts.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: flower_default,
				alt: "",
				"aria-hidden": true,
				draggable: false,
				className: "absolute select-none object-contain",
				style: {
					left: g.left,
					top: g.top,
					width: g.size,
					height: g.size,
					opacity: g.opacity,
					filter: `blur(${g.blur}px) saturate(0.7) hue-rotate(-8deg)`,
					mixBlendMode: "screen"
				},
				initial: { rotate: g.rotate },
				animate: {
					y: [
						0,
						-g.drift,
						g.drift * .6,
						0
					],
					x: [
						0,
						g.drift * .4,
						-g.drift * .3,
						0
					],
					rotate: [
						g.rotate,
						g.rotate + 12,
						g.rotate - 6,
						g.rotate
					],
					scale: [
						1,
						1.04,
						.98,
						1
					]
				},
				transition: {
					duration: g.duration,
					delay: g.delay,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}, g.id)),
			pollen.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "absolute rounded-full",
				style: {
					left: p.left,
					top: p.top,
					width: p.size,
					height: p.size,
					background: "rgba(240,201,137,0.85)",
					boxShadow: "0 0 8px rgba(240,201,137,0.7)",
					mixBlendMode: "screen"
				},
				animate: {
					y: [
						0,
						-p.drift,
						-p.drift * .4,
						-p.drift * 1.2,
						0
					],
					x: [
						0,
						p.drift * .3,
						-p.drift * .2,
						p.drift * .4,
						0
					],
					opacity: [
						.15,
						.9,
						.4,
						.7,
						.15
					]
				},
				transition: {
					duration: p.duration,
					delay: p.delay,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}, p.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse at center, transparent 40%, rgba(28,18,32,0.55) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.05] mix-blend-overlay",
				style: { backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var links = [
	{
		to: "/assessment",
		label: "Assessment"
	},
	{
		to: "/tracker",
		label: "Tracker"
	},
	{
		to: "/history",
		label: "History"
	},
	{
		to: "/doctor",
		label: "Doctor visit"
	},
	{
		to: "/ask",
		label: "Ask Nari"
	}
];
function SiteHeader() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-hairline bg-[#1c1220]/60 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 items-center px-6 py-4 md:grid-cols-[1fr_auto_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-4 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "NariCare logo",
							width: 56,
							height: 56,
							className: "h-10 w-10 shrink-0 rounded-xl object-cover ring-1 ring-hairline/50 transition-transform group-hover:scale-105 group-hover:ring-accent-gold-soft/50 shadow-lg shadow-accent-gold-soft/10",
							draggable: false
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-lg font-semibold tracking-tight",
								children: "NariCare"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Cycle · Health · Care"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center justify-center gap-1 text-sm font-medium text-muted-foreground md:flex bg-white/[0.03] border border-white/10 rounded-full px-2 py-1.5 shadow-sm backdrop-blur-md",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "rounded-full px-4 py-2 transition-all hover:bg-white/10 hover:text-accent-gold-soft",
						activeProps: { className: "bg-white/10 text-accent-gold-soft shadow-inner" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/assessment",
						className: "hidden btn-primary-glow items-center rounded-full px-5 py-2.5 text-sm font-semibold md:inline-flex",
						children: "Begin assessment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open: isOpen,
						onOpenChange: setIsOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-surface-light hover:text-foreground md:hidden transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Open menu"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							side: "right",
							className: "glass-panel w-[85vw] max-w-[320px] !border-r-0 !border-t-0 !border-b-0 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "sr-only",
								children: "Navigation Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-6",
								children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: l.to,
									onClick: () => setIsOpen(false),
									className: "text-lg font-medium text-muted-foreground transition-colors hover:text-accent-gold-soft",
									activeProps: { className: "text-accent-gold-soft font-semibold" },
									children: l.label
								}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 pt-6 border-t border-hairline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/assessment",
										onClick: () => setIsOpen(false),
										className: "btn-primary-glow inline-flex w-full justify-center items-center rounded-full px-5 py-3 text-sm font-semibold",
										children: "Begin assessment"
									})
								})]
							})]
						})]
					})]
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-hairline bg-background/60 py-12 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-3xl flex-col items-center justify-center gap-5 px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-serif text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 28 28",
						className: "h-6 w-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "14",
							cy: "14",
							r: "12",
							fill: "none",
							stroke: "#e3a857",
							strokeWidth: "1.4"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M14 4 A10 10 0 0 1 14 24 A5 5 0 0 0 14 4",
							fill: "#c65b7c"
						})]
					}), "NariCare"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-16 bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "Runs in your browser · Your answers stay on your device · Not a substitute for professional medical advice. In an emergency, contact your doctor."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground/70",
					children: "Made with care for every Nari."
				})
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20,
				scale: .96
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: {
				duration: .5,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-7xl text-accent-gold-soft",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-serif text-xl",
					children: "This page slipped through the cycle."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-primary-glow inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		console.error("[NariCare Error Boundary]", error);
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20,
				scale: .96
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: {
				duration: .5,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-2xl text-destructive",
					children: "Oops!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-base font-medium text-foreground",
					children: "Something went wrong with this response"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 rounded-xl border border-hairline bg-surface p-4 text-left shadow-inner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-mono text-muted-foreground break-words",
						children: error.message || "Unknown error occurred"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary-glow inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent-gold-soft hover:text-accent-gold-soft transition-colors",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "NariCare — AI-powered women's cycle & health companion" },
			{
				name: "description",
				content: "NariCare is an AI-powered menstrual & reproductive health hub for women. Run a 3-min risk assessment, track your cycle, ask Nari — your private AI health companion."
			},
			{
				name: "author",
				content: "NariCare"
			},
			{
				property: "og:title",
				content: "NariCare — AI-powered women's cycle & health companion"
			},
			{
				property: "og:description",
				content: "Run a private risk assessment, track your cycle, chat with Nari the AI companion."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "/og-image.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: "/social-banner.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: logo_default,
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,450;0,9..144,600;1,9..144,450&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
/** Page transition variants */
var pageVariants = {
	initial: {
		opacity: 0,
		y: 6,
		filter: "blur(4px)"
	},
	enter: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: .35,
			ease: [
				.16,
				1,
				.3,
				1
			]
		}
	},
	exit: {
		opacity: 0,
		y: -4,
		filter: "blur(2px)",
		transition: {
			duration: .2,
			ease: [
				.4,
				0,
				1,
				1
			]
		}
	}
};
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: pageVariants,
							initial: "initial",
							animate: "enter",
							exit: "exit",
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
						}, location.pathname)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-RolP9kxz.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "NariCare — A gentle AI health companion for every Nari" }, {
		name: "description",
		content: "Understand your cycle, track your body, and talk to Nari — a warm AI companion trained on women's health. Private, personal, and always by your side."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./assessment-MqAixKMR.mjs");
var Route$5 = createFileRoute("/assessment")({
	head: () => ({ meta: [
		{ title: "Cycle Risk Assessment · NariCare" },
		{
			name: "description",
			content: "A 3-minute private assessment of your menstrual health across 5 clinically-informed patterns: irregularity, PCOS, pain, anaemia risk, and stress load."
		},
		{
			property: "og:title",
			content: "Cycle Risk Assessment · NariCare"
		},
		{
			property: "og:description",
			content: "Answer 18 short questions, get a personal risk snapshot in under 3 minutes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./doctor-pvTJ7te_.mjs");
var Route$4 = createFileRoute("/doctor")({
	head: () => ({ meta: [{ title: "Doctor Visit Prep · NariCare" }, {
		name: "description",
		content: "A personalized checklist of tests, questions, and cycle data to bring to your gynaecologist — built from your NariCare assessment."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./history-BYaMpYWw.mjs");
var Route$3 = createFileRoute("/history")({
	head: () => ({ meta: [{ title: "Assessment History · NariCare" }, {
		name: "description",
		content: "View your past cycle risk assessments and track your health journey over time."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./tracker-C_br0LS9.mjs");
var Route$2 = createFileRoute("/tracker")({
	head: () => ({ meta: [
		{ title: "Cycle Tracker · NariCare" },
		{
			name: "description",
			content: "Log your periods, flow, pain and mood. See patterns and next-period predictions — all private, all in your browser."
		},
		{
			property: "og:title",
			content: "Cycle Tracker · NariCare"
		},
		{
			property: "og:description",
			content: "Log periods and see your patterns, privately."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Route$1 = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	const body = await request.json();
	const messages = body.messages;
	if (!Array.isArray(messages)) return new Response("messages required", { status: 400 });
	const apiKey = process.env.GROQ_API_KEY;
	if (!apiKey) return new Response("Missing GROQ_API_KEY", { status: 500 });
	const groq = createOpenAICompatible({
		name: "groq",
		baseURL: "https://api.groq.com/openai/v1",
		apiKey
	});
	const system = body.healthContext ? `${SYSTEM_PROMPT}\n\n=== HEALTH CONTEXT (user's own data) ===\n${body.healthContext}\n=== END CONTEXT ===` : SYSTEM_PROMPT;
	return streamText({
		model: groq("llama-3.3-70b-versatile"),
		system,
		messages: convertToModelMessages(messages),
		temperature: .6
	}).toUIMessageStreamResponse();
} } } });
var $$splitComponentImporter = () => import("./ask.index-BGQF82DQ.mjs");
var Route = createFileRoute("/ask/")({
	head: () => ({ meta: [
		{ title: "Ask Nari · Your AI health companion" },
		{
			name: "description",
			content: "Chat with Nari, an AI trained on women's cycle and reproductive health. Personalized to your NariCare assessment and cycle log."
		},
		{
			property: "og:title",
			content: "Ask Nari · Your AI health companion"
		},
		{
			property: "og:description",
			content: "Chat with an AI that knows your cycle context."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AssessmentRoute = Route$5.update({
	id: "/assessment",
	path: "/assessment",
	getParentRoute: () => Route$7
});
var DoctorRoute = Route$4.update({
	id: "/doctor",
	path: "/doctor",
	getParentRoute: () => Route$7
});
var HistoryRoute = Route$3.update({
	id: "/history",
	path: "/history",
	getParentRoute: () => Route$7
});
var TrackerRoute = Route$2.update({
	id: "/tracker",
	path: "/tracker",
	getParentRoute: () => Route$7
});
var ApiChatRoute = Route$1.update({
	id: "/api/chat",
	path: "/api/chat",
	getParentRoute: () => Route$7
});
var AskIndexRoute = Route.update({
	id: "/ask/",
	path: "/ask/",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute,
	AssessmentRoute,
	DoctorRoute,
	HistoryRoute,
	TrackerRoute,
	ApiChatRoute,
	AskThreadIdRoute: Route$8.update({
		id: "/ask/$threadId",
		path: "/ask/$threadId",
		getParentRoute: () => Route$7
	}),
	AskIndexRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
