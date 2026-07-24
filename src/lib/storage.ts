// Typed localStorage helpers. All keys namespaced under `naricare:`.

export type Symptom =
  | "acne"
  | "hirsutism"
  | "weightGain"
  | "hairThin"
  | "fatigue"
  | "dizziness"
  | "moodSwings"
  | "bloating"
  | "breastTender"
  | "headache";

export type AssessmentRaw = {
  age: number;
  cycleLength: number;
  periodLength: number;
  variation: number;
  missed: number;
  pregnancyContext: "none" | "protected" | "unprotected" | "undisclosed" | null;
  flow: number;
  clots: number;
  painLevel: number;
  painInterference: number;
  stressLevel: number;
  sleep: number;
  exercise: number;
  sym: Record<Symptom, boolean>;
};

export type AssessmentScores = {
  irregularity: number;
  pcos: number;
  dysmenorrhea: number;
  anaemia: number;
  stress: number;
  pregnancyFlag: boolean;
  pregnancyWatch: boolean;
  ageNote: string | null;
};

export type SavedAssessment = {
  savedAt: number;
  raw: AssessmentRaw;
  scores: AssessmentScores;
};

export type TrackerEntry = {
  id: string;
  date: string; // ISO date YYYY-MM-DD
  flow: "none" | "light" | "moderate" | "heavy";
  pain: number; // 0-10
  mood: "great" | "good" | "meh" | "low" | "awful";
  symptoms: string[];
  note?: string;
};

export type ThreadMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: number;
};

export type ChatThread = {
  id: string;
  title: string;
  updatedAt: number;
  messages: ThreadMessage[];
};

const KEYS = {
  assessment: "naricare:assessment",
  tracker: "naricare:tracker",
  threads: "naricare:threads",
  quickThreadId: "naricare:quick-thread-id",
} as const;

function isBrowser() {
  return typeof window !== "undefined";
}

function read<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota / private mode — silent */
  }
}

export const storage = {
  getAssessments: (): SavedAssessment[] => {
    // Handle migration from single object to array
    const raw = read<SavedAssessment | SavedAssessment[]>(KEYS.assessment, []);
    if (Array.isArray(raw)) return raw;
    if (raw && typeof raw === "object") return [raw];
    return [];
  },
  setAssessments: (a: SavedAssessment[]) => write(KEYS.assessment, a),

  getTracker: (): TrackerEntry[] => read(KEYS.tracker, [] as TrackerEntry[]),
  setTracker: (e: TrackerEntry[]) => write(KEYS.tracker, e),

  getThreads: (): ChatThread[] => read(KEYS.threads, [] as ChatThread[]),
  setThreads: (t: ChatThread[]) => write(KEYS.threads, t),

  getQuickThreadId: (): string | null => read(KEYS.quickThreadId, null),
  setQuickThreadId: (id: string) => write(KEYS.quickThreadId, id),
};

export function newId() {
  if (isBrowser() && "randomUUID" in crypto) return crypto.randomUUID();
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
