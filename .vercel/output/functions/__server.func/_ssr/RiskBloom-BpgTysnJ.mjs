import { t as require_jsx_runtime } from "./jsx-runtime-C9wDpzQ-.mjs";
import { r as levelOf, t as CATEGORIES } from "./scoring-CpLvIBOI.mjs";
import { b as motion } from "./createLucideIcon-DHTKS07v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RiskBloom-BpgTysnJ.js
var import_jsx_runtime = require_jsx_runtime();
function RiskBloom({ scores, size = 340 }) {
	const cx = 160;
	const cy = 160;
	const maxR = 118;
	const minR = 30;
	const n = CATEGORIES.length;
	const petals = CATEGORIES.map((c, i) => {
		const score = scores[c.key];
		const r = minR + score / 100 * (maxR - minR);
		const angle = Math.PI * 2 / n * i - Math.PI / 2;
		const nextAngle = Math.PI * 2 / n * (i + 1) - Math.PI / 2;
		const midAngle = (angle + nextAngle) / 2;
		const x1 = cx + r * Math.cos(angle);
		const y1 = cy + r * Math.sin(angle);
		const x2 = cx + r * Math.cos(nextAngle);
		const y2 = cy + r * Math.sin(nextAngle);
		const cxr = cx + r * 1.12 * Math.cos(midAngle);
		const cyr = cy + r * 1.12 * Math.sin(midAngle);
		const color = levelOf(score).hex;
		const lx = cx + 148 * Math.cos(midAngle);
		const ly = cy + 148 * Math.sin(midAngle);
		const anchor = Math.cos(midAngle) > .3 ? "start" : Math.cos(midAngle) < -.3 ? "end" : "middle";
		return {
			c,
			color,
			d: `M${cx} ${cy} L${x1.toFixed(1)} ${y1.toFixed(1)} Q${cxr.toFixed(1)} ${cyr.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)} Z`,
			lx,
			ly,
			anchor
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 320 320",
		children: [
			[
				minR,
				148 / 2,
				maxR
			].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx,
				cy,
				r,
				fill: "none",
				stroke: "rgba(246,237,232,0.08)"
			}, r)),
			petals.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: p.d,
				fill: p.color,
				stroke: p.color,
				strokeWidth: 1.5,
				initial: {
					opacity: 0,
					scale: 0
				},
				animate: {
					opacity: .6,
					scale: 1
				},
				transition: {
					delay: .1 + i * .12,
					duration: .7,
					ease: "easeOut"
				},
				style: { transformOrigin: `${cx}px ${cy}px` }
			}, p.c.key)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx,
				cy,
				r: minR - 6,
				fill: "#251729",
				stroke: "rgba(246,237,232,0.12)"
			}),
			petals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: p.lx.toFixed(1),
				y: p.ly.toFixed(1),
				textAnchor: p.anchor,
				fontFamily: "IBM Plex Mono, monospace",
				fontSize: "8.5",
				fill: "#c9afc0",
				letterSpacing: "1",
				children: p.c.name.split(" ")[0].toUpperCase()
			}, `${p.c.key}-label`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: cx,
				y: cy - 4,
				textAnchor: "middle",
				fontFamily: "Fraunces, serif",
				fontSize: "16",
				fill: "#f6ede8",
				children: "Risk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: cx,
				y: 174,
				textAnchor: "middle",
				fontFamily: "Fraunces, serif",
				fontSize: "16",
				fill: "#f6ede8",
				children: "Bloom"
			})
		]
	});
}
//#endregion
export { RiskBloom as t };
