import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.mjs";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-C9wDpzQ-.mjs";
import { t as useNavigate } from "./useNavigate-BsrQZntG.mjs";
import { n as storage } from "./storage-CKF6nif6.mjs";
import { n as useThreads, t as ChatLockdown } from "./ChatLockdown-CggWb8U2.mjs";
import { t as ChatSkeleton } from "./page-skeleton-CGquuatn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask.index-BSIUMGzw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AskIndex() {
	const { threads, ready, create } = useThreads();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		if (storage.getAssessments().length === 0) return;
		if (threads.length > 0) navigate({
			to: "/ask/$threadId",
			params: { threadId: threads[0].id },
			replace: true
		});
		else {
			const t = create();
			navigate({
				to: "/ask/$threadId",
				params: { threadId: t.id },
				replace: true
			});
		}
	}, [ready]);
	if (ready && storage.getAssessments().length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatLockdown, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatSkeleton, {});
}
//#endregion
export { AskIndex as component };
