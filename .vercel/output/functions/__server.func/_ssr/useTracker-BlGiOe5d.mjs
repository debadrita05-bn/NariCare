import { o as __toESM } from "../_runtime.mjs";
import { a as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { n as storage, t as newId } from "./storage-CKF6nif6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useTracker-BlGiOe5d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useTracker() {
	const [entries, setEntries] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setEntries(storage.getTracker());
		setReady(true);
	}, []);
	const add = (partial) => {
		const entry = {
			...partial,
			id: newId()
		};
		const next = [...entries.filter((e) => e.date !== entry.date), entry].sort((a, b) => a.date.localeCompare(b.date));
		storage.setTracker(next);
		setEntries(next);
	};
	const remove = (id) => {
		const next = entries.filter((e) => e.id !== id);
		storage.setTracker(next);
		setEntries(next);
	};
	return {
		entries,
		add,
		remove,
		ready
	};
}
//#endregion
export { useTracker as t };
