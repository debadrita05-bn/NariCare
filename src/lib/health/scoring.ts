import type { AssessmentRaw, AssessmentScores } from "../storage";

const clamp = (v: number) => Math.max(0, Math.min(100, Math.round(v)));

function ageContext(age: number) {
  if (age < 18) {
    return {
      pcosMult: 0.7,
      irregularityMult: 0.8,
      anaemiaMult: 1.0,
      note: "Cycles are often naturally irregular for the first couple of years after your first period — irregularity alone is weighted a little lower at your age.",
    };
  }
  if (age >= 41) {
    return {
      pcosMult: 0.6,
      irregularityMult: 1.15,
      anaemiaMult: 1.1,
      note: "In your 40s, irregular or heavier cycles are more commonly linked to perimenopause or fibroids than new-onset PCOS — still worth confirming with a doctor.",
    };
  }
  return { pcosMult: 1, irregularityMult: 1, anaemiaMult: 1, note: null as string | null };
}

export function computeScores(r: AssessmentRaw): AssessmentScores {
  const ctx = ageContext(r.age);

  let irregularity = 0;
  if (r.cycleLength < 21 || r.cycleLength > 35) irregularity += 35;
  else if (r.cycleLength < 24 || r.cycleLength > 32) irregularity += 15;
  irregularity += r.variation * 14;
  irregularity += r.missed * 12;
  irregularity = clamp(irregularity * ctx.irregularityMult);

  let pcos = 0;
  if (r.cycleLength > 35) pcos += 22;
  pcos += r.variation * 8;
  pcos += r.missed * 10;
  if (r.sym.acne) pcos += 10;
  if (r.sym.hirsutism) pcos += 16;
  if (r.sym.weightGain) pcos += 12;
  if (r.sym.hairThin) pcos += 10;
  pcos = clamp(pcos * ctx.pcosMult);

  let dysmenorrhea = 0;
  dysmenorrhea += r.painLevel * 7;
  dysmenorrhea += r.painInterference * 14;
  dysmenorrhea += r.clots * 8;
  if (r.sym.headache) dysmenorrhea += 5;
  dysmenorrhea = clamp(dysmenorrhea);

  let anaemia = 0;
  anaemia += r.flow * 15;
  anaemia += r.clots * 10;
  if (r.periodLength > 7) anaemia += 20;
  else if (r.periodLength > 5) anaemia += 8;
  if (r.sym.fatigue) anaemia += 14;
  if (r.sym.dizziness) anaemia += 16;
  anaemia = clamp(anaemia * ctx.anaemiaMult);

  let stress = 0;
  stress += r.stressLevel * 6;
  stress += r.sleep * 9;
  stress += r.exercise === 2 ? 10 : r.exercise === 3 ? 8 : 0;
  if (r.sym.moodSwings) stress += 12;
  if (r.sym.bloating) stress += 6;
  if (r.sym.breastTender) stress += 4;
  stress += r.missed * 6;
  stress = clamp(stress);

  const pregnancyFlag = r.missed >= 1 && r.pregnancyContext === "unprotected";
  const pregnancyWatch = r.missed >= 1 && r.pregnancyContext === "protected";

  return {
    irregularity,
    pcos,
    dysmenorrhea,
    anaemia,
    stress,
    pregnancyFlag,
    pregnancyWatch,
    ageNote: ctx.note,
  };
}

export function levelOf(score: number) {
  if (score < 34) return { label: "Low", hex: "#7fb88b" };
  if (score < 64) return { label: "Moderate", hex: "#e3a857" };
  return { label: "High", hex: "#d9536b" };
}

export const CATEGORIES = [
  { key: "irregularity" as const, name: "Cycle Irregularity" },
  { key: "pcos" as const, name: "PCOS Indicators" },
  { key: "dysmenorrhea" as const, name: "Period Pain" },
  { key: "anaemia" as const, name: "Anaemia Risk" },
  { key: "stress" as const, name: "Stress Load" },
];
