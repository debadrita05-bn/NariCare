import { o as __toESM } from "../_runtime.mjs";
import { a as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { n as storage } from "./storage-CKF6nif6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useAssessment-DoSaFQSy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useAssessment() {
	const [assessments, setAssessments] = (0, import_react.useState)([]);
	const [assessment, setAssessment] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const all = storage.getAssessments();
		setAssessments(all);
		setAssessment(all.length > 0 ? all[0] : null);
		setReady(true);
	}, []);
	const save = (a) => {
		const next = [a, ...storage.getAssessments()];
		storage.setAssessments(next);
		setAssessments(next);
		setAssessment(a);
	};
	return {
		assessment,
		assessments,
		save,
		ready
	};
}
//#endregion
export { useAssessment as t };
