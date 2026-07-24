import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-skeleton-HN2_d5b_.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Animated shimmer skeleton block.
* Accepts className for sizing/layout and optional `rounded` for shape.
*/
function Bone({ className = "", rounded = "rounded-lg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `skeleton-shimmer bg-white/[0.06] ${rounded} ${className}`,
		"aria-hidden": true
	});
}
/** Skeleton for a page header: eyebrow + title + subtitle */
function PageHeaderSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		className: "flex flex-col items-center gap-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
				className: "h-3 w-32",
				rounded: "rounded-full"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
				className: "h-10 w-72 md:w-96",
				rounded: "rounded-xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
				className: "h-4 w-48",
				rounded: "rounded-full"
			})
		]
	});
}
/** Skeleton for a list of entries */
function ListSkeleton({ rows = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				x: -12
			},
			animate: {
				opacity: 1,
				x: 0
			},
			transition: { delay: i * .06 },
			className: "flex items-center gap-4 rounded-2xl border border-hairline/30 bg-white/[0.03] px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
					className: "h-4 w-20",
					rounded: "rounded-md"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
						className: "h-3.5 w-3/4",
						rounded: "rounded-md"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
						className: "h-2.5 w-1/2",
						rounded: "rounded-md"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
					className: "h-8 w-8",
					rounded: "rounded-full"
				})
			]
		}, i))
	});
}
/** Skeleton for the "Today For You" panel with 3 cards */
function TodayForYouSkeleton() {
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
			duration: .5,
			delay: .3
		},
		className: "mx-auto max-w-7xl px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
					className: "h-1.5 w-1.5",
					rounded: "rounded-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
					className: "h-3 w-24",
					rounded: "rounded-md"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					0,
					1,
					2
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline/30 bg-bg-alt/50 p-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
								className: "h-8 w-8",
								rounded: "rounded-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
								className: "h-4 w-24",
								rounded: "rounded-md"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
							className: "h-3 w-full",
							rounded: "rounded-md"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
							className: "h-3 w-4/5",
							rounded: "rounded-md"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
							className: "h-3 w-16",
							rounded: "rounded-md"
						})
					]
				}, i))
			})]
		})
	});
}
/** Skeleton for the chat loading state */
function ChatSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		className: "flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-rose/20 to-accent-gold/20 border border-hairline/30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: 360 },
				transition: {
					duration: 2,
					repeat: Infinity,
					ease: "linear"
				},
				className: "h-6 w-6 rounded-full border-2 border-accent-gold-soft/30 border-t-accent-gold-soft"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
				className: "mx-auto h-4 w-40",
				rounded: "rounded-md"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
				className: "mx-auto h-3 w-28",
				rounded: "rounded-md"
			})]
		})]
	});
}
/** Skeleton for the doctor page checklist panels */
function DoctorSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [0, 1].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { delay: i * .1 },
			className: "glass-panel p-7 relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full skeleton-shimmer bg-white/[0.06]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
						className: "h-10 w-10",
						rounded: "rounded-xl"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
						className: "h-6 w-36",
						rounded: "rounded-md"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: Array.from({ length: 3 }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
							className: "h-5 w-5 flex-none",
							rounded: "rounded-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bone, {
							className: "h-4 flex-1",
							rounded: "rounded-md"
						})]
					}, j))
				})
			]
		}, i))
	});
}
//#endregion
export { TodayForYouSkeleton as a, PageHeaderSkeleton as i, DoctorSkeleton as n, ListSkeleton as r, ChatSkeleton as t };
