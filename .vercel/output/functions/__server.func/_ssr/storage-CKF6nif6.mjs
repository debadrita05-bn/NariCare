//#region node_modules/.nitro/vite/services/ssr/assets/storage-CKF6nif6.js
var KEYS = {
	assessment: "naricare:assessment",
	tracker: "naricare:tracker",
	threads: "naricare:threads",
	quickThreadId: "naricare:quick-thread-id"
};
function isBrowser() {
	return typeof window !== "undefined";
}
function read(key, fallback) {
	if (!isBrowser()) return fallback;
	try {
		const raw = window.localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function write(key, value) {
	if (!isBrowser()) return;
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
var storage = {
	getAssessments: () => {
		const raw = read(KEYS.assessment, []);
		if (Array.isArray(raw)) return raw;
		if (raw && typeof raw === "object") return [raw];
		return [];
	},
	setAssessments: (a) => write(KEYS.assessment, a),
	getTracker: () => read(KEYS.tracker, []),
	setTracker: (e) => write(KEYS.tracker, e),
	getThreads: () => read(KEYS.threads, []),
	setThreads: (t) => write(KEYS.threads, t),
	getQuickThreadId: () => read(KEYS.quickThreadId, null),
	setQuickThreadId: (id) => write(KEYS.quickThreadId, id)
};
function newId() {
	if (isBrowser() && "randomUUID" in crypto) return crypto.randomUUID();
	return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
//#endregion
export { storage as n, newId as t };
