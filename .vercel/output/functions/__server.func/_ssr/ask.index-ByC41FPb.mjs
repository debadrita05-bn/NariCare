import { o as __toESM } from "../_runtime.mjs";
import { a as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as storage } from "./storage-CKF6nif6.mjs";
import { n as useThreads, t as ChatLockdown } from "./ChatLockdown-DDeTeKj_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask.index-ByC41FPb.js
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center text-muted-foreground",
		children: "Opening your chat…"
	});
}
//#endregion
export { AskIndex as component };
