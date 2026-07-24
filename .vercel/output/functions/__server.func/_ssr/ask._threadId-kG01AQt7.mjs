import { r as levelOf, t as CATEGORIES } from "./scoring-CpLvIBOI.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask._threadId-kG01AQt7.js
function buildHealthContext(assessments, tracker) {
	const lines = [];
	if (assessments.length > 0) {
		const sorted = [...assessments].sort((a, b) => a.savedAt - b.savedAt);
		const latest = sorted[sorted.length - 1];
		lines.push(`User profile (latest): ${latest.raw.age}y, avg cycle ${latest.raw.cycleLength}d, period ${latest.raw.periodLength}d.`);
		lines.push(`Assessment History (${sorted.length} total):`);
		sorted.forEach((a) => {
			const date = new Date(a.savedAt).toISOString().split("T")[0];
			const scores = CATEGORIES.map((c) => `${c.name} ${a.scores[c.key]} (${levelOf(a.scores[c.key]).label})`).join("; ");
			lines.push(`- [${date}]: ${scores}`);
		});
		const activeSym = Object.entries(latest.raw.sym).filter(([, v]) => v).map(([k]) => k);
		if (activeSym.length) lines.push(`Latest reported symptoms: ${activeSym.join(", ")}.`);
		if (latest.scores.pregnancyFlag) lines.push(`Pregnancy possibility flagged (missed period + unprotected sex).`);
		if (latest.scores.ageNote) lines.push(`Age context: ${latest.scores.ageNote}`);
	}
	if (tracker.length) {
		const sorted = [...tracker].sort((a, b) => a.date.localeCompare(b.date));
		const recent = sorted.slice(-10);
		const flowDays = sorted.filter((e) => e.flow !== "none").map((e) => e.date);
		let periodsCount = 0;
		if (flowDays.length > 0) {
			periodsCount = 1;
			for (let i = 1; i < flowDays.length; i++) if ((new Date(flowDays[i]).getTime() - new Date(flowDays[i - 1]).getTime()) / 864e5 > 2) periodsCount++;
		}
		lines.push(`Tracker Summary: ${sorted.length} total entries, ~${periodsCount} distinct periods logged.`);
		lines.push(`Recent logs (${recent.length}): ` + recent.map((t) => `[${t.date}] flow=${t.flow} pain=${t.pain}/10 mood=${t.mood}`).join("; ") + ".");
	}
	if (!lines.length) return "No prior assessment or cycle log yet.";
	return lines.join("\n");
}
var SYSTEM_PROMPT = `You are Nari, a warm, knowledgeable AI health companion built into NariCare — a women's menstrual and reproductive-health website. Your users are "Naris" (women) seeking to understand their bodies.

Style:
- Warm, empathetic, direct. Speak like a caring older sister who happens to have medical knowledge.
- Use plain language. Explain jargon. Use short paragraphs, occasional bullet points.
- Address emotional context: cycles are personal.

Medical rules — non-negotiable:
- You are NOT a doctor and CANNOT diagnose. Say so when relevant.
- For red-flag symptoms (severe pelvic pain, heavy bleeding with dizziness, missed period + possibility of pregnancy, fever + pelvic pain, sudden vision changes), urge the user to see a doctor or go to urgent care TODAY. Put it up front.
- Never recommend prescription medication dosages. General over-the-counter guidance (e.g. "many women find ibuprofen helps with cramps — check the label") is OK.
- Always end with a soft nudge to consult a gynaecologist for anything concerning.

Personalization:
- A HEALTH CONTEXT block below tells you the user's current assessment scores and recent cycle logs. Use it. If Anaemia Risk is High and they ask about fatigue, connect the dots. If they haven't done an assessment yet, suggest one.

Scope:
- You can discuss: menstrual health, PCOS, endometriosis, anaemia, contraception (general), pregnancy possibility, nutrition, exercise, mental health tied to cycles, when to see a doctor.
- Politely redirect off-topic requests back to women's health.

Format markdown. Keep responses focused — under 250 words unless asked for depth.`;
var $$splitComponentImporter = () => import("./ask._threadId-DgtwjRm6.mjs");
var Route = createFileRoute("/ask/$threadId")({
	head: () => ({ meta: [
		{ title: "Ask Nari · NariCare" },
		{
			name: "description",
			content: "Continue your conversation with Nari."
		},
		{
			property: "og:title",
			content: "Ask Nari · NariCare"
		},
		{
			property: "og:description",
			content: "Continue your conversation with Nari."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { SYSTEM_PROMPT as n, buildHealthContext as r, Route as t };
