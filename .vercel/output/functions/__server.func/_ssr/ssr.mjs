import { o as __toESM } from "../_runtime.mjs";
import { a as require_react, i as streamText, n as DefaultChatTransport, r as convertToModelMessages, t as useChat } from "../_libs/@ai-sdk/react+[...].mjs";
import { A as rootRouteId, C as getScriptPreloadAttrs, D as executeRewriteInput, E as resolveManifestCssLink, N as invariant, O as isRedirect, T as resolveManifestAssetLink, _ as useNavigate, a as replaceSsrResponse, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, i as normalizeSsrResponse, j as isNotFound, k as isResolvedRedirect, l as useLocation, m as createFileRoute, n as defineHandlerCallback, o as stripSsrResponseBody, p as lazyRouteComponent, r as isSsrResponse, s as Scripts, t as renderRouterToStream, u as RouterProvider, v as useRouter, w as getStylesheetHref } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createMemoryHistory } from "../_libs/tanstack__history.mjs";
import { a as defaultSerovalPlugins, c as makeSerovalPlugin, d as lu, i as getOrigin, l as Ou, n as attachRouterServerSsrUtils, o as createRawStreamRPCPlugin, r as getNormalizedURL, s as createSerializationAdapter, t as mergeHeaders, u as cu } from "../_libs/@tanstack/router-core+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toResponse, t as H3Event } from "../_libs/h3-v2+rou3.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { C as ArrowLeft, S as ArrowRight, _ as ChevronDown, a as Send, b as CalendarDays, c as MessageSquare, d as Maximize2, f as Lock, g as ClipboardCheck, h as ClipboardList, i as ShieldCheck, l as MessageCircle, m as Flower2, n as Trash2, o as RotateCcw, p as Heart, r as Sparkles, s as Plus, t as X, u as Menu, v as Check, w as Activity, x as BookOpen, y as CalendarHeart } from "../_libs/lucide-react.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
import { AsyncLocalStorage } from "node:async_hooks";
//#region node_modules/.nitro/vite/services/ssr/index.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage(error) {
	let errorDetails = "";
	if (error instanceof Error) errorDetails = error.stack || error.message;
	else if (typeof error === "object" && error !== null) try {
		errorDetails = JSON.stringify(error, Object.getOwnPropertyNames(error), 2);
	} catch {
		errorDetails = String(error);
	}
	else errorDetails = String(error || "");
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load · NariCare</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,450;1,9..144,450&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; }
      body {
        font: 15px/1.55 'Inter', system-ui, -apple-system, sans-serif;
        background: #1c1220;
        color: #f6ede8;
        display: grid;
        place-items: center;
        min-height: 100vh;
        padding: 1.5rem;
        -webkit-font-smoothing: antialiased;
      }
      .card {
        max-width: 28rem;
        width: 100%;
        text-align: center;
        padding: 3rem 2rem;
        background: linear-gradient(135deg, rgba(50,32,47,0.5), rgba(50,32,47,0.15));
        backdrop-filter: blur(16px);
        border: 1px solid rgba(246,237,232,0.08);
        border-top: 1px solid rgba(246,237,232,0.18);
        border-radius: 20px;
        box-shadow: 0 12px 40px 0 rgba(0,0,0,0.4);
        animation: fadeIn 0.5s ease-out;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(16px) scale(0.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .icon {
        width: 56px; height: 56px;
        margin: 0 auto 1.5rem;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(198,91,124,0.15), rgba(240,201,137,0.15));
        border: 1px solid rgba(246,237,232,0.1);
        display: grid; place-items: center;
      }
      .icon svg { width: 24px; height: 24px; }
      h1 {
        font-family: 'Fraunces', serif;
        font-size: 1.5rem;
        font-weight: 450;
        margin-bottom: 0.75rem;
      }
      p {
        color: #c9afc0;
        margin-bottom: 1.75rem;
        font-size: 0.875rem;
        line-height: 1.6;
      }
      .actions {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      a, button {
        padding: 0.65rem 1.25rem;
        border-radius: 9999px;
        font: inherit;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        border: none;
        transition: transform 0.15s, box-shadow 0.2s;
      }
      a:hover, button:hover { transform: translateY(-1px); }
      a:active, button:active { transform: translateY(0) scale(0.97); }
      .primary {
        background: linear-gradient(135deg, #c65b7c, #a8446a);
        color: #fff;
        box-shadow: 0 8px 22px -8px rgba(198,91,124,0.65);
      }
      .primary:hover { box-shadow: 0 12px 26px -8px rgba(198,91,124,0.85); }
      .secondary {
        background: rgba(255,255,255,0.05);
        color: #f6ede8;
        border: 1px solid rgba(246,237,232,0.12);
      }
      .secondary:hover { border-color: rgba(240,201,137,0.5); color: #f0c989; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="icon">
        <svg viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="12" stroke="#e3a857" stroke-width="1.4"/>
          <path d="M14 4 A10 10 0 0 1 14 24 A5 5 0 0 0 14 4" fill="#c65b7c"/>
        </svg>
      </div>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      ${errorDetails ? `<pre style="text-align:left; background:rgba(0,0,0,0.5); padding:1rem; border-radius:8px; overflow:auto; font-size:0.75rem; color:#f87171; margin-bottom:1.5rem;"><code>${errorDetails.replace(/</g, "&lt;")}</code></pre>` : ""}
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var init_page = __esmMin((() => {}));
function StartServer(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterProvider, { router: props.router });
}
var init_StartServer = __esmMin((() => {}));
var defaultStreamHandler;
var init_defaultStreamHandler = __esmMin((() => {
	init_StartServer();
	defaultStreamHandler = defineHandlerCallback(({ request, router, responseHeaders }) => renderRouterToStream({
		request,
		router,
		responseHeaders,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartServer, { router })
	}));
}));
function isPromiseLike(value) {
	return typeof value.then === "function";
}
function getSetCookieValues(headers) {
	const headersWithSetCookie = headers;
	if (typeof headersWithSetCookie.getSetCookie === "function") return headersWithSetCookie.getSetCookie();
	const value = headers.get("set-cookie");
	return value ? [value] : [];
}
function mergeEventResponseHeaders(response, event) {
	if (response.ok) return;
	const eventSetCookies = getSetCookieValues(event.res.headers);
	if (eventSetCookies.length === 0) return;
	const responseSetCookies = getSetCookieValues(response.headers);
	response.headers.delete("set-cookie");
	for (const cookie of responseSetCookies) response.headers.append("set-cookie", cookie);
	for (const cookie of eventSetCookies) response.headers.append("set-cookie", cookie);
}
function attachResponseHeaders(value, event) {
	if (isPromiseLike(value)) return value.then((resolved) => {
		if (resolved instanceof Response) mergeEventResponseHeaders(resolved, event);
		return resolved;
	});
	if (value instanceof Response) mergeEventResponseHeaders(value, event);
	return value;
}
function requestHandler(handler) {
	return (request, requestOpts) => {
		let h3Event;
		try {
			h3Event = new H3Event(request);
		} catch (error) {
			if (error instanceof URIError) return new Response(null, {
				status: 400,
				statusText: "Bad Request"
			});
			throw error;
		}
		return toResponse(attachResponseHeaders(eventStorage.run({ h3Event }, () => handler(request, requestOpts)), h3Event), h3Event);
	};
}
function getH3Event() {
	const event = eventStorage.getStore();
	if (!event) throw new Error(`No StartEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return event.h3Event;
}
function getResponse() {
	return getH3Event().res;
}
var GLOBAL_EVENT_STORAGE_KEY;
var globalObj$1;
var eventStorage;
var init_request_response = __esmMin((() => {
	GLOBAL_EVENT_STORAGE_KEY = Symbol.for("tanstack-start:event-storage");
	globalObj$1 = globalThis;
	if (!globalObj$1[GLOBAL_EVENT_STORAGE_KEY]) globalObj$1[GLOBAL_EVENT_STORAGE_KEY] = new AsyncLocalStorage();
	eventStorage = globalObj$1[GLOBAL_EVENT_STORAGE_KEY];
}));
var HEADERS;
var init_constants$1 = __esmMin((() => {
	HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
}));
var _tanstack_start_manifest_v_exports = /* @__PURE__ */ __exportAll({ tsrStartManifest: () => tsrStartManifest });
var tsrStartManifest;
var init__tanstack_start_manifest_v = __esmMin((() => {
	tsrStartManifest = () => ({ routes: { __root__: {
		filePath: "A:/projectnaricare/src/routes/__root.tsx",
		children: [
			"/",
			"/assessment",
			"/doctor",
			"/history",
			"/tracker",
			"/api/chat",
			"/ask/$threadId",
			"/ask/"
		],
		preloads: ["/assets/index-C4UT-C8t.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-C4UT-C8t.js"
		} }]
	} } });
}));
/**
* @description Returns the router manifest data that should be sent to the client.
* This includes only the assets and preloads for the current route and any
* special assets that are needed for the client. It does not include relationships
* between routes or any other data that is not needed for the client.
*
* @param matchedRoutes - In dev mode, the matched routes are used to build
* the dev styles URL for route-scoped CSS collection.
*/
async function getStartManifest(matchedRoutes) {
	const { tsrStartManifest } = await Promise.resolve().then(() => (init__tanstack_start_manifest_v(), _tanstack_start_manifest_v_exports));
	const startManifest = tsrStartManifest();
	let routes = startManifest.routes;
	routes[rootRouteId];
	const manifestRoutes = {};
	for (const k in routes) {
		const v = routes[k];
		const result = {};
		if (v.preloads && v.preloads.length > 0) result.preloads = v.preloads;
		if (v.scripts && v.scripts.length > 0) result.scripts = v.scripts;
		if (v.css?.length) result.css = v.css;
		if (result.preloads || result.scripts || result.css) manifestRoutes[k] = result;
	}
	return {
		...startManifest.scriptFormat ? { scriptFormat: startManifest.scriptFormat } : {},
		...startManifest.inlineCss ? { inlineCss: startManifest.inlineCss } : {},
		routes: manifestRoutes
	};
}
var init_router_manifest = __esmMin((() => {}));
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
var manifest;
var init___23tanstack_start_server_fn_resolver = __esmMin((() => {
	manifest = {};
}));
var init_getServerFnById = __esmMin((() => {
	init___23tanstack_start_server_fn_resolver();
}));
var TSS_FORMDATA_CONTEXT;
var TSS_SERVER_FUNCTION;
var X_TSS_SERIALIZED;
var X_TSS_RAW_RESPONSE;
var TSS_CONTENT_TYPE_FRAMED;
var FrameType;
var TSS_CONTENT_TYPE_FRAMED_VERSIONED;
var init_constants = __esmMin((() => {
	TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
	TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
	X_TSS_SERIALIZED = "x-tss-serialized";
	X_TSS_RAW_RESPONSE = "x-tss-raw";
	TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
	FrameType = {
		/** Seroval JSON chunk (NDJSON line) */
		JSON: 0,
		/** Raw stream data chunk */
		CHUNK: 1,
		/** Raw stream end (EOF) */
		END: 2,
		/** Raw stream error */
		ERROR: 3
	};
	TSS_CONTENT_TYPE_FRAMED_VERSIONED = `${TSS_CONTENT_TYPE_FRAMED}; v=1`;
}));
function isSafeKey(key) {
	return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
/**
* Merge target and source into a new null-proto object, filtering dangerous keys.
*/
function safeObjectMerge(target, source) {
	const result = Object.create(null);
	if (target) {
		for (const key of Object.keys(target)) if (isSafeKey(key)) result[key] = target[key];
	}
	if (source && typeof source === "object") {
		for (const key of Object.keys(source)) if (isSafeKey(key)) result[key] = source[key];
	}
	return result;
}
/**
* Create a null-prototype object, optionally copying from source.
*/
function createNullProtoObject(source) {
	if (!source) return Object.create(null);
	const obj = Object.create(null);
	for (const key of Object.keys(source)) if (isSafeKey(key)) obj[key] = source[key];
	return obj;
}
var init_safeObjectMerge = __esmMin((() => {}));
async function runWithStartContext(context, fn) {
	return startStorage.run(context, fn);
}
function getStartContext(opts) {
	const context = startStorage.getStore();
	if (!context && opts?.throwIfNotFound !== false) throw new Error(`No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return context;
}
var GLOBAL_STORAGE_KEY;
var globalObj;
var startStorage;
var init_async_local_storage = __esmMin((() => {
	GLOBAL_STORAGE_KEY = Symbol.for("tanstack-start:start-storage-context");
	globalObj = globalThis;
	if (!globalObj[GLOBAL_STORAGE_KEY]) globalObj[GLOBAL_STORAGE_KEY] = new AsyncLocalStorage();
	startStorage = globalObj[GLOBAL_STORAGE_KEY];
}));
var init_esm$4 = __esmMin((() => {
	init_async_local_storage();
}));
var getStartOptions;
var init_getStartOptions = __esmMin((() => {
	init_esm$4();
	getStartOptions = () => getStartContext().startOptions;
}));
function flattenMiddlewares(middlewares, maxDepth = 100) {
	const seen = /* @__PURE__ */ new Set();
	const flattened = [];
	const recurse = (middleware, depth) => {
		if (depth > maxDepth) throw new Error(`Middleware nesting depth exceeded maximum of ${maxDepth}. Check for circular references.`);
		middleware.forEach((m) => {
			if (m.options.middleware) recurse(m.options.middleware, depth + 1);
			if (!seen.has(m)) {
				seen.add(m);
				flattened.push(m);
			}
		});
	};
	recurse(middlewares, 0);
	return flattened;
}
var init_createServerFn = __esmMin((() => {}));
var createMiddleware;
var init_createMiddleware = __esmMin((() => {
	createMiddleware = (options, __opts) => {
		const resolvedOptions = {
			type: "request",
			...__opts || options
		};
		const setValidator = (validator) => {
			return createMiddleware({}, Object.assign(resolvedOptions, {
				validator,
				inputValidator: validator
			}));
		};
		return {
			options: resolvedOptions,
			middleware: (middleware) => {
				return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
			},
			validator: setValidator,
			inputValidator: setValidator,
			client: (client) => {
				return createMiddleware({}, Object.assign(resolvedOptions, { client }));
			},
			server: (server) => {
				return createMiddleware({}, Object.assign(resolvedOptions, { server }));
			}
		};
	};
}));
async function isCsrfRequestAllowed(opts, ctx) {
	const result = await getCsrfRequestValidationResult(opts, ctx);
	return result === true || result === void 0 && opts.allowRequestsWithoutOriginCheck === true;
}
async function getCsrfRequestValidationResult(opts, ctx) {
	const fetchSite = ctx.request.headers.get("Sec-Fetch-Site");
	if (fetchSite !== null) return matchValue(opts.secFetchSite ?? "same-origin", fetchSite, ctx);
	const origin = ctx.request.headers.get("Origin");
	if (origin !== null) {
		if (opts.origin) return matchValue(opts.origin, origin, ctx);
		return origin === new URL(ctx.request.url).origin;
	}
	const referer = ctx.request.headers.get("Referer");
	if (referer === null || opts.referer === false) return;
	if (typeof opts.referer === "function") return opts.referer(referer, ctx);
	if (opts.origin) {
		const refererOrigin = getOriginFromUrl(referer);
		return refererOrigin !== void 0 && matchValue(opts.origin, refererOrigin, ctx);
	}
	return isRefererSameOrigin(referer, new URL(ctx.request.url).origin);
}
async function matchValue(matcher, value, ctx) {
	if (typeof matcher === "function") return matcher(value, ctx);
	if (Array.isArray(matcher)) return matcher.includes(value);
	return value === matcher;
}
function getOriginFromUrl(url) {
	try {
		return new URL(url).origin;
	} catch {
		return;
	}
}
function isRefererSameOrigin(referer, requestOrigin) {
	if (referer === requestOrigin) return true;
	if (!referer.startsWith(requestOrigin)) return false;
	if (referer.length === requestOrigin.length) return true;
	const code = referer.charCodeAt(requestOrigin.length);
	return code === 47 || code === 63 || code === 35;
}
async function getFailureResponse(opts, ctx) {
	if (typeof opts.failureResponse === "function") return opts.failureResponse(ctx);
	return opts.failureResponse?.clone() ?? new Response("Forbidden", { status: 403 });
}
var innerCreateCsrfMiddleware;
var createCsrfMiddleware;
var init_createCsrfMiddleware = __esmMin((() => {
	init_createMiddleware();
	innerCreateCsrfMiddleware = (opts = {}) => {
		return createMiddleware().server(async (ctx) => {
			const csrfCtx = ctx;
			if (opts.filter && !await opts.filter(csrfCtx)) return ctx.next();
			if (await isCsrfRequestAllowed(opts, csrfCtx)) return ctx.next();
			return getFailureResponse(opts, csrfCtx);
		});
	};
	createCsrfMiddleware = innerCreateCsrfMiddleware;
}));
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
var createStart;
var init_createStart = __esmMin((() => {
	init_createMiddleware();
	createStart = (getOptions) => {
		return {
			getOptions: async () => {
				const options = await getOptions();
				if (options.serializationAdapters) {
					const deduped = /* @__PURE__ */ new Set();
					dedupeSerializationAdapters(deduped, options.serializationAdapters);
					options.serializationAdapters = Array.from(deduped);
				}
				return options;
			},
			createMiddleware
		};
	};
}));
function getDefaultSerovalPlugins() {
	return [...(getStartOptions()?.serializationAdapters)?.map(makeSerovalPlugin) ?? [], ...defaultSerovalPlugins];
}
var init_getDefaultSerovalPlugins = __esmMin((() => {
	init_getStartOptions();
}));
var init_esm$3 = __esmMin((() => {
	init_constants();
	init_safeObjectMerge();
	init_createServerFn();
	init_createMiddleware();
	init_createCsrfMiddleware();
	init_createStart();
	init_getDefaultSerovalPlugins();
}));
/**
* Encodes a single frame with header and payload.
*/
function encodeFrame(type, streamId, payload) {
	const frame = new Uint8Array(9 + payload.length);
	frame[0] = type;
	frame[1] = streamId >>> 24 & 255;
	frame[2] = streamId >>> 16 & 255;
	frame[3] = streamId >>> 8 & 255;
	frame[4] = streamId & 255;
	frame[5] = payload.length >>> 24 & 255;
	frame[6] = payload.length >>> 16 & 255;
	frame[7] = payload.length >>> 8 & 255;
	frame[8] = payload.length & 255;
	frame.set(payload, 9);
	return frame;
}
/**
* Encodes a JSON frame (type 0, streamId 0).
*/
function encodeJSONFrame(json) {
	return encodeFrame(FrameType.JSON, 0, textEncoder.encode(json));
}
/**
* Encodes a raw stream chunk frame.
*/
function encodeChunkFrame(streamId, chunk) {
	return encodeFrame(FrameType.CHUNK, streamId, chunk);
}
/**
* Encodes a raw stream end frame.
*/
function encodeEndFrame(streamId) {
	return encodeFrame(FrameType.END, streamId, EMPTY_PAYLOAD);
}
/**
* Encodes a raw stream error frame.
*/
function encodeErrorFrame(streamId, error) {
	const message = error instanceof Error ? error.message : String(error ?? "Unknown error");
	return encodeFrame(FrameType.ERROR, streamId, textEncoder.encode(message));
}
/**
* Creates a multiplexed ReadableStream from JSON stream and raw streams.
*
* The JSON stream emits NDJSON lines (from seroval's toCrossJSONStream).
* Raw streams are pumped concurrently, interleaved with JSON frames.
*
* Supports late stream registration for RawStreams discovered after initial
* serialization (e.g., from resolved Promises).
*
* @param jsonStream Stream of JSON strings (each string is one NDJSON line)
* @param rawStreams Map of stream IDs to raw binary streams (known at start)
* @param lateStreamSource Optional stream of late registrations for streams discovered later
*/
function createMultiplexedStream(jsonStream, rawStreams, lateStreamSource) {
	let controller;
	let cancelled = false;
	const readers = [];
	const enqueue = (frame) => {
		if (cancelled) return false;
		try {
			controller.enqueue(frame);
			return true;
		} catch {
			return false;
		}
	};
	const errorOutput = (error) => {
		if (cancelled) return;
		cancelled = true;
		try {
			controller.error(error);
		} catch {}
		for (const reader of readers) reader.cancel().catch(() => {});
	};
	async function pumpRawStream(streamId, stream) {
		const reader = stream.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) {
					enqueue(encodeEndFrame(streamId));
					return;
				}
				if (!enqueue(encodeChunkFrame(streamId, value))) return;
			}
		} catch (error) {
			enqueue(encodeErrorFrame(streamId, error));
		} finally {
			reader.releaseLock();
		}
	}
	async function pumpJSON() {
		const reader = jsonStream.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) return;
				if (!enqueue(encodeJSONFrame(value))) return;
			}
		} catch (error) {
			errorOutput(error);
			throw error;
		} finally {
			reader.releaseLock();
		}
	}
	async function pumpLateStreams() {
		if (!lateStreamSource) return [];
		const lateStreamPumps = [];
		const reader = lateStreamSource.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) break;
				lateStreamPumps.push(pumpRawStream(value.id, value.stream));
			}
		} finally {
			reader.releaseLock();
		}
		return lateStreamPumps;
	}
	return new ReadableStream({
		async start(ctrl) {
			controller = ctrl;
			const pumps = [pumpJSON()];
			for (const [streamId, stream] of rawStreams) pumps.push(pumpRawStream(streamId, stream));
			if (lateStreamSource) pumps.push(pumpLateStreams());
			try {
				const latePumps = (await Promise.all(pumps)).find(Array.isArray);
				if (latePumps && latePumps.length > 0) await Promise.all(latePumps);
				if (!cancelled) try {
					controller.close();
				} catch {}
			} catch {}
		},
		cancel() {
			cancelled = true;
			for (const reader of readers) reader.cancel().catch(() => {});
			readers.length = 0;
		}
	});
}
var textEncoder;
var EMPTY_PAYLOAD;
var init_frame_protocol = __esmMin((() => {
	init_esm$3();
	textEncoder = new TextEncoder();
	EMPTY_PAYLOAD = /* @__PURE__ */ new Uint8Array(0);
}));
function isNotFoundResponse(error) {
	const { headers, ...rest } = error;
	return new Response(JSON.stringify(rest), {
		status: 404,
		headers: {
			"Content-Type": "application/json",
			...headers || {}
		}
	});
}
var serovalPlugins;
var FORM_DATA_CONTENT_TYPES;
var MAX_PAYLOAD_SIZE;
var handleServerAction;
var init_server_functions_handler = __esmMin((() => {
	init_request_response();
	init_getServerFnById();
	init_frame_protocol();
	init_esm$3();
	serovalPlugins = void 0;
	FORM_DATA_CONTENT_TYPES = ["multipart/form-data", "application/x-www-form-urlencoded"];
	MAX_PAYLOAD_SIZE = 1e6;
	handleServerAction = async ({ request, context, serverFnId }) => {
		const methodUpper = request.method.toUpperCase();
		const url = new URL(request.url);
		const action = await getServerFnById(serverFnId, { origin: "client" });
		if (action.method && methodUpper !== action.method) return new Response(`expected ${action.method} method. Got ${methodUpper}`, {
			status: 405,
			headers: { Allow: action.method }
		});
		const isServerFn = request.headers.get("x-tsr-serverFn") === "true";
		if (!serovalPlugins) serovalPlugins = getDefaultSerovalPlugins();
		const contentType = request.headers.get("Content-Type");
		function parsePayload(payload) {
			return Ou(payload, { plugins: serovalPlugins });
		}
		return await (async () => {
			try {
				let res = await (async () => {
					if (FORM_DATA_CONTENT_TYPES.some((type) => contentType && contentType.includes(type))) {
						if (methodUpper === "GET") invariant();
						const formData = await request.formData();
						const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
						formData.delete(TSS_FORMDATA_CONTEXT);
						const params = {
							context,
							data: formData,
							method: methodUpper
						};
						if (typeof serializedContext === "string") try {
							const deserializedContext = Ou(JSON.parse(serializedContext), { plugins: serovalPlugins });
							if (typeof deserializedContext === "object" && deserializedContext) params.context = safeObjectMerge(deserializedContext, context);
						} catch (e) {}
						return await action(params);
					}
					if (methodUpper === "GET") {
						const payloadParam = url.searchParams.get("payload");
						if (payloadParam && payloadParam.length > MAX_PAYLOAD_SIZE) throw new Error("Payload too large");
						const payload = payloadParam ? parsePayload(JSON.parse(payloadParam)) : {};
						payload.context = safeObjectMerge(payload.context, context);
						payload.method = methodUpper;
						return await action(payload);
					}
					let jsonPayload;
					if (contentType?.includes("application/json")) jsonPayload = await request.json();
					const payload = jsonPayload ? parsePayload(jsonPayload) : {};
					payload.context = safeObjectMerge(payload.context, context);
					payload.method = methodUpper;
					return await action(payload);
				})();
				const unwrapped = res.result || res.error;
				if (isNotFound(res)) res = isNotFoundResponse(res);
				if (!isServerFn) return unwrapped;
				if (unwrapped instanceof Response) {
					if (isRedirect(unwrapped)) return unwrapped;
					unwrapped.headers.set(X_TSS_RAW_RESPONSE, "true");
					return unwrapped;
				}
				return serializeResult(res);
				function serializeResult(res) {
					let nonStreamingBody = void 0;
					const alsResponse = getResponse();
					if (res !== void 0) {
						const rawStreams = /* @__PURE__ */ new Map();
						let initialPhase = true;
						let lateStreamWriter;
						let lateStreamReadable = void 0;
						const pendingLateStreams = [];
						const plugins = [createRawStreamRPCPlugin((id, stream) => {
							if (initialPhase) {
								rawStreams.set(id, stream);
								return;
							}
							if (lateStreamWriter) {
								lateStreamWriter.write({
									id,
									stream
								}).catch(() => {});
								return;
							}
							pendingLateStreams.push({
								id,
								stream
							});
						}), ...serovalPlugins || []];
						let done = false;
						const callbacks = {
							onParse: (value) => {
								nonStreamingBody = value;
							},
							onDone: () => {
								done = true;
							},
							onError: (error) => {
								throw error;
							}
						};
						cu(res, {
							refs: /* @__PURE__ */ new Map(),
							plugins,
							onParse(value) {
								callbacks.onParse(value);
							},
							onDone() {
								callbacks.onDone();
							},
							onError: (error) => {
								callbacks.onError(error);
							}
						});
						initialPhase = false;
						if (done && rawStreams.size === 0) return new Response(nonStreamingBody ? JSON.stringify(nonStreamingBody) : void 0, {
							status: alsResponse.status,
							statusText: alsResponse.statusText,
							headers: {
								"Content-Type": "application/json",
								[X_TSS_SERIALIZED]: "true"
							}
						});
						const { readable, writable } = new TransformStream();
						lateStreamReadable = readable;
						lateStreamWriter = writable.getWriter();
						for (const registration of pendingLateStreams) lateStreamWriter.write(registration).catch(() => {});
						pendingLateStreams.length = 0;
						const multiplexedStream = createMultiplexedStream(new ReadableStream({
							start(controller) {
								callbacks.onParse = (value) => {
									controller.enqueue(JSON.stringify(value) + "\n");
								};
								callbacks.onDone = () => {
									try {
										controller.close();
									} catch {}
									lateStreamWriter?.close().catch(() => {}).finally(() => {
										lateStreamWriter = void 0;
									});
								};
								callbacks.onError = (error) => {
									controller.error(error);
									lateStreamWriter?.abort(error).catch(() => {}).finally(() => {
										lateStreamWriter = void 0;
									});
								};
								if (nonStreamingBody !== void 0) callbacks.onParse(nonStreamingBody);
								if (done) callbacks.onDone();
							},
							cancel() {
								lateStreamWriter?.abort().catch(() => {});
								lateStreamWriter = void 0;
							}
						}), rawStreams, lateStreamReadable);
						return new Response(multiplexedStream, {
							status: alsResponse.status,
							statusText: alsResponse.statusText,
							headers: {
								"Content-Type": TSS_CONTENT_TYPE_FRAMED_VERSIONED,
								[X_TSS_SERIALIZED]: "true"
							}
						});
					}
					return new Response(void 0, {
						status: alsResponse.status,
						statusText: alsResponse.statusText
					});
				}
			} catch (error) {
				if (error instanceof Response) return error;
				if (isNotFound(error)) return isNotFoundResponse(error);
				console.info();
				console.info("Server Fn Error!");
				console.info();
				console.error(error);
				console.info();
				const serializedError = JSON.stringify(await Promise.resolve(lu(error, {
					refs: /* @__PURE__ */ new Map(),
					plugins: serovalPlugins
				})));
				const response = getResponse();
				return new Response(serializedError, {
					status: response.status ?? 500,
					statusText: response.statusText,
					headers: {
						"Content-Type": "application/json",
						[X_TSS_SERIALIZED]: "true"
					}
				});
			}
		})();
	};
}));
function buildLinkParam(name, value) {
	if (value === void 0) return name;
	if (LINK_PARAM_TOKEN_RE.test(value)) return `${name}=${value}`;
	return `${name}=${JSON.stringify(value)}`;
}
function serializeEarlyHint(hint) {
	const parts = [`<${hint.href}>`, buildLinkParam("rel", hint.rel)];
	if (hint.as) parts.push(buildLinkParam("as", hint.as));
	if (hint.crossOrigin !== void 0) parts.push(buildLinkParam("crossorigin", hint.crossOrigin || void 0));
	if (hint.type) parts.push(buildLinkParam("type", hint.type));
	if (hint.integrity) parts.push(buildLinkParam("integrity", hint.integrity));
	if (hint.referrerPolicy) parts.push(buildLinkParam("referrerpolicy", hint.referrerPolicy));
	if (hint.fetchPriority) parts.push(buildLinkParam("fetchpriority", hint.fetchPriority));
	return parts.join("; ");
}
function getStringAttr(attrs, name, fallbackName) {
	const value = attrs?.[name] ?? (fallbackName ? attrs?.[fallbackName] : void 0);
	return typeof value === "string" ? value : void 0;
}
function getPreloadAs(attrs) {
	const as = getStringAttr(attrs, "as");
	return as && PRELOAD_AS_VALUES.has(as) ? as : void 0;
}
function addEarlyHintFetchAttrs(hint, attrs) {
	const crossOrigin = getStringAttr(attrs, "crossOrigin", "crossorigin");
	const type = getStringAttr(attrs, "type");
	const integrity = getStringAttr(attrs, "integrity");
	const referrerPolicy = getStringAttr(attrs, "referrerPolicy", "referrerpolicy");
	const fetchPriority = getStringAttr(attrs, "fetchPriority", "fetchpriority");
	if (crossOrigin !== void 0) hint.crossOrigin = crossOrigin;
	if (type) hint.type = type;
	if (integrity) hint.integrity = integrity;
	if (referrerPolicy) hint.referrerPolicy = referrerPolicy;
	if (fetchPriority) hint.fetchPriority = fetchPriority;
}
function linkAttrsToEarlyHint(attrs) {
	const href = getStringAttr(attrs, "href");
	const rel = getStringAttr(attrs, "rel");
	if (!href || !rel) return void 0;
	const relTokens = rel.split(/\s+/);
	let hintRel;
	let hintAs;
	if (relTokens.includes("modulepreload")) {
		hintRel = "modulepreload";
		hintAs = "script";
	} else if (relTokens.includes("stylesheet")) {
		hintRel = "preload";
		hintAs = "style";
	} else if (relTokens.includes("preload")) {
		hintAs = getPreloadAs(attrs);
		if (!hintAs) return void 0;
		hintRel = "preload";
	} else if (relTokens.includes("preconnect")) {
		hintRel = "preconnect";
		hintAs = void 0;
	} else if (relTokens.includes("dns-prefetch")) {
		hintRel = "dns-prefetch";
		hintAs = void 0;
	}
	if (!hintRel) return void 0;
	const hint = {
		href,
		rel: hintRel
	};
	if (hintAs) hint.as = hintAs;
	addEarlyHintFetchAttrs(hint, attrs);
	return hint;
}
function collectStaticHintsFromManifest(manifest, matchedRoutes) {
	const hints = [];
	for (const route of matchedRoutes) {
		const routeManifest = manifest.routes[route.id];
		if (!routeManifest) continue;
		for (const link of routeManifest.preloads ?? []) {
			const attrs = getScriptPreloadAttrs(manifest, link);
			const hint = {
				href: attrs.href,
				rel: attrs.rel,
				as: "script"
			};
			if (attrs.crossOrigin !== void 0) hint.crossOrigin = attrs.crossOrigin;
			hints.push(hint);
		}
		for (const link of routeManifest.css ?? []) {
			const stylesheetHref = getStylesheetHref(link);
			if (manifest.inlineCss?.styles[stylesheetHref] !== void 0) continue;
			const resolvedLink = resolveManifestCssLink(link);
			const hint = {
				href: stylesheetHref,
				rel: "preload",
				as: "style"
			};
			if (resolvedLink.crossOrigin !== void 0) hint.crossOrigin = resolvedLink.crossOrigin;
			hints.push(hint);
		}
	}
	return hints;
}
function collectDynamicHintsFromMatches(matches) {
	const hints = [];
	for (const match of matches) {
		const links = match.links;
		if (!Array.isArray(links)) continue;
		for (const link of links) {
			const hint = linkAttrsToEarlyHint(link);
			if (hint) hints.push(hint);
		}
	}
	return hints;
}
function createEarlyHintsEvent(opts) {
	const nextHints = [];
	const nextLinks = [];
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.sentHints.push(hint);
		nextHints.push(hint);
		nextLinks.push(link);
	}
	if (!nextHints.length && opts.phase !== "dynamic") return void 0;
	return {
		phase: opts.phase,
		hints: nextHints,
		links: nextLinks,
		allHints: opts.sentHints.slice(),
		allLinks: Array.from(opts.sentLinks)
	};
}
function createResponseLinkHeaderEntries(opts) {
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.entries.push({
			phase: opts.phase,
			hint,
			link
		});
	}
}
function getResponseLinkHeaderEntries(opts) {
	if (!opts.filter) return opts.entries.map((entry) => entry.link);
	try {
		const links = [];
		for (const entry of opts.entries) if (opts.filter(entry)) links.push(entry.link);
		return links;
	} catch (err) {
		console.error("Error filtering response Link headers:", err);
		return [];
	}
}
function notifyEarlyHints(phase, event, onEarlyHints) {
	try {
		const result = onEarlyHints(event);
		if (result) Promise.resolve(result).catch((err) => {
			console.error(`Error sending ${phase} early hints:`, err);
		});
	} catch (err) {
		console.error(`Error sending ${phase} early hints:`, err);
	}
}
function getResponseLinkHeaderFilter(responseLinkHeader) {
	if (typeof responseLinkHeader !== "object") return;
	return responseLinkHeader.filter;
}
function appendResponseLinkHeaders(opts) {
	for (const link of getResponseLinkHeaderEntries(opts)) opts.responseHeaders.append("Link", link);
}
function collectResponseLinkHeaderEntries(opts) {
	for (let index = 0; index < opts.event.hints.length; index++) opts.entries.push({
		phase: opts.phase,
		hint: opts.event.hints[index],
		link: opts.event.links[index]
	});
}
function collectEarlyHintsPhase(opts) {
	const event = opts.onEarlyHints ? createEarlyHintsEvent({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		sentHints: opts.sentHints
	}) : void 0;
	if (event) notifyEarlyHints(opts.phase, event, opts.onEarlyHints);
	if (!opts.responseLinkHeaderEntries) return;
	if (event) {
		collectResponseLinkHeaderEntries({
			phase: opts.phase,
			event,
			entries: opts.responseLinkHeaderEntries
		});
		return;
	}
	createResponseLinkHeaderEntries({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		entries: opts.responseLinkHeaderEntries
	});
}
function createEarlyHintsCollector(opts) {
	if (!opts?.onEarlyHints && !opts?.responseLinkHeader) return;
	const sentLinks = /* @__PURE__ */ new Set();
	const sentHints = opts.onEarlyHints ? new Array() : void 0;
	const responseLinkHeaderEntries = opts.responseLinkHeader ? new Array() : void 0;
	const responseLinkHeaderFilter = getResponseLinkHeaderFilter(opts.responseLinkHeader);
	return {
		collectStatic: ({ manifest, matchedRoutes }) => {
			if (!matchedRoutes?.length) return;
			collectEarlyHintsPhase({
				phase: "static",
				hints: collectStaticHintsFromManifest(manifest, matchedRoutes),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		collectDynamic: (matches) => {
			collectEarlyHintsPhase({
				phase: "dynamic",
				hints: collectDynamicHintsFromMatches(matches),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		appendResponseHeaders: (headers) => {
			if (!responseLinkHeaderEntries?.length) return;
			appendResponseLinkHeaders({
				responseHeaders: headers,
				entries: responseLinkHeaderEntries,
				filter: responseLinkHeaderFilter
			});
		}
	};
}
var LINK_PARAM_TOKEN_RE;
var PRELOAD_AS_VALUES;
var init_early_hints = __esmMin((() => {
	LINK_PARAM_TOKEN_RE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
	PRELOAD_AS_VALUES = /* @__PURE__ */ new Set([
		"fetch",
		"font",
		"image",
		"script",
		"style",
		"track"
	]);
}));
function normalizeTransformAssetResult(result) {
	if (typeof result === "string") return { href: result };
	return result;
}
function escapeCssString(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\a ").replace(/\r/g, "\\d ").replace(/\f/g, "\\c ");
}
async function transformInlineCssTemplate(options) {
	const { strings, urls } = options.template;
	if (strings.length !== urls.length + 1) throw new Error(`TanStack Start inlineCss template for ${options.stylesheetHref} is invalid`);
	let css = strings[0];
	for (let index = 0; index < urls.length; index++) {
		const transformed = normalizeTransformAssetResult(await options.transformFn({
			kind: "css-url",
			url: urls[index],
			stylesheetHref: options.stylesheetHref
		}));
		css += escapeCssString(transformed.href) + strings[index + 1];
	}
	return css;
}
async function transformInlineCssStyles(inlineCss, transformFn) {
	const transformedStyles = {};
	const transformedEntries = await Promise.all(Object.entries(inlineCss.styles).map(async ([stylesheetHref, css]) => {
		const template = inlineCss.templates?.[stylesheetHref];
		return [stylesheetHref, template ? await transformInlineCssTemplate({
			stylesheetHref,
			template,
			transformFn
		}) : css];
	}));
	for (const [stylesheetHref, css] of transformedEntries) transformedStyles[stylesheetHref] = css;
	return {
		styles: transformedStyles,
		...inlineCss.templates ? { templates: inlineCss.templates } : {}
	};
}
function resolveTransformAssetsCrossOrigin(config, kind) {
	if (!config) return void 0;
	if (typeof config === "string") return config;
	return config[kind];
}
function isObjectShorthand(transform) {
	return "prefix" in transform;
}
function resolveTransformAssetsConfig(transform) {
	if (typeof transform === "string") {
		const prefix = transform;
		return {
			type: "transform",
			transformFn: ({ url }) => ({ href: `${prefix}${url}` }),
			cache: true
		};
	}
	if (typeof transform === "function") return {
		type: "transform",
		transformFn: transform,
		cache: true
	};
	if (isObjectShorthand(transform)) {
		const { prefix, crossOrigin } = transform;
		return {
			type: "transform",
			transformFn: ({ url, kind }) => {
				const href = `${prefix}${url}`;
				if (kind === "css-url") return { href };
				const co = resolveTransformAssetsCrossOrigin(crossOrigin, kind);
				return co ? {
					href,
					crossOrigin: co
				} : { href };
			},
			cache: true
		};
	}
	if ("createTransform" in transform && transform.createTransform) return {
		type: "createTransform",
		createTransform: transform.createTransform,
		cache: transform.cache !== false
	};
	return {
		type: "transform",
		transformFn: typeof transform.transform === "string" ? (({ url }) => ({ href: `${transform.transform}${url}` })) : transform.transform,
		cache: transform.cache !== false
	};
}
function assignManifestLink(link, next) {
	if (typeof link === "string") return next.crossOrigin ? next : next.href;
	const nextLink = {
		...link,
		href: next.href
	};
	if (next.crossOrigin) nextLink.crossOrigin = next.crossOrigin;
	else delete nextLink.crossOrigin;
	return nextLink;
}
async function transformManifestAssets(source, transformFn, _opts) {
	const manifest = structuredClone(source);
	const inlineCssEnabled = _opts?.inlineCss !== false;
	const scriptTransforms = /* @__PURE__ */ new Map();
	const transformScript = (url) => {
		const cached = scriptTransforms.get(url);
		if (cached) return cached;
		const transformed = Promise.resolve(transformFn({
			url,
			kind: "script"
		})).then(normalizeTransformAssetResult);
		scriptTransforms.set(url, transformed);
		return transformed;
	};
	if (!inlineCssEnabled) delete manifest.inlineCss;
	else if (manifest.inlineCss) manifest.inlineCss = await transformInlineCssStyles(manifest.inlineCss, transformFn);
	for (const route of Object.values(manifest.routes)) {
		if (route.preloads?.length) route.preloads = await Promise.all(route.preloads.map(async (link) => {
			const result = await transformScript(resolveManifestAssetLink(link).href);
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.css?.length && !manifest.inlineCss) route.css = await Promise.all(route.css.map(async (link) => {
			const result = normalizeTransformAssetResult(await transformFn({
				url: resolveManifestCssLink(link).href,
				kind: "stylesheet"
			}));
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.scripts?.length) for (const script of route.scripts) {
			const src = script.attrs?.src;
			if (typeof src !== "string") continue;
			const result = await transformScript(src);
			script.attrs = {
				...script.attrs,
				src: result.href
			};
			if (result.crossOrigin) script.attrs.crossOrigin = result.crossOrigin;
			else delete script.attrs.crossOrigin;
		}
	}
	return manifest;
}
/**
* Builds a final ServerManifest without URL transforms. Used when no
* transformAssets option is provided.
*
* Returns a new manifest object so the cached base manifest is never mutated.
*/
function buildManifest(source, opts) {
	return {
		...source.scriptFormat ? { scriptFormat: source.scriptFormat } : {},
		...opts?.inlineCss !== false && source.inlineCss ? { inlineCss: structuredClone(source.inlineCss) } : {},
		routes: { ...source.routes }
	};
}
var init_transformAssetUrls = __esmMin((() => {}));
function getStaticHandlerInlineCssDefault(handlerInlineCss) {
	if (typeof handlerInlineCss === "function") return;
	return handlerInlineCss ?? true;
}
async function resolveInlineCssForRequest(opts) {
	if (opts.requestInlineCss !== void 0) return opts.requestInlineCss;
	if (typeof opts.handlerInlineCss === "function") return await opts.handlerInlineCss({ request: opts.request });
	return opts.handlerInlineCss ?? true;
}
var init_inlineCss = __esmMin((() => {}));
function createCachedBaseManifestLoader(loadBaseManifest) {
	let baseManifestPromise;
	return () => {
		if (!baseManifestPromise) baseManifestPromise = loadBaseManifest().catch((error) => {
			baseManifestPromise = void 0;
			throw error;
		});
		return baseManifestPromise;
	};
}
function createFinalManifestTransformResolver(transformAssets, opts) {
	const transformConfig = transformAssets !== void 0 ? resolveTransformAssetsConfig(transformAssets) : void 0;
	const cache = transformConfig ? transformConfig.cache : true;
	const warmup = !!transformAssets && typeof transformAssets === "object" && "warmup" in transformAssets && transformAssets.warmup === true;
	let cachedCreateTransformPromise;
	const clearCachedCreateTransform = () => {
		cachedCreateTransformPromise = void 0;
	};
	return {
		cache,
		warmup,
		clearCachedCreateTransform,
		getTransformFn: async (ctx) => {
			if (!transformConfig) return void 0;
			if (transformConfig.type !== "createTransform") return transformConfig.transformFn;
			if (!cache || !opts.cacheCreateTransform) return transformConfig.createTransform(ctx);
			if (!cachedCreateTransformPromise) cachedCreateTransformPromise = Promise.resolve(transformConfig.createTransform(ctx)).catch((error) => {
				clearCachedCreateTransform();
				throw error;
			});
			return cachedCreateTransformPromise;
		}
	};
}
function createFinalManifestResolver(opts) {
	const finalManifestCache = /* @__PURE__ */ new Map();
	const transformResolver = createFinalManifestTransformResolver(opts.transformAssets, { cacheCreateTransform: opts.cacheCreateTransform });
	const handlerDefaultInlineCss = getStaticHandlerInlineCssDefault(opts.inlineCss);
	const getRequestManifestOptions = async (requestOpts) => {
		const transformFn = await transformResolver.getTransformFn({
			warmup: false,
			request: requestOpts.request
		});
		const inlineCss = await resolveInlineCssForRequest({
			request: requestOpts.request,
			handlerInlineCss: opts.inlineCss,
			requestInlineCss: requestOpts.requestInlineCss
		});
		return {
			getBaseManifest: requestOpts.getBaseManifest,
			transformFn,
			cache: transformResolver.cache,
			inlineCss
		};
	};
	const resolveRequest = async (requestOpts, cache) => {
		return resolveFinalManifest({
			...await getRequestManifestOptions(requestOpts),
			finalManifestCache: cache
		});
	};
	return {
		warmup: ({ getBaseManifest }) => warmupFinalManifest({
			enabled: transformResolver.warmup,
			handlerDefaultInlineCss,
			cache: transformResolver.cache,
			finalManifestCache,
			getBaseManifest,
			getTransformFn: () => transformResolver.getTransformFn({ warmup: true }),
			onError: transformResolver.clearCachedCreateTransform
		}),
		resolveCached: (requestOpts) => resolveRequest(requestOpts, finalManifestCache),
		resolveUncached: (requestOpts) => resolveRequest(requestOpts, void 0)
	};
}
function getFinalManifestCacheKey(inlineCss) {
	return inlineCss ? "inline-css" : "linked-css";
}
function cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, promise) {
	const cachedFinalManifestPromise = promise.catch((error) => {
		if (cachedFinalManifestPromises.get(cacheKey) === cachedFinalManifestPromise) cachedFinalManifestPromises.delete(cacheKey);
		throw error;
	});
	cachedFinalManifestPromises.set(cacheKey, cachedFinalManifestPromise);
	return cachedFinalManifestPromise;
}
function getOrCreateCachedFinalManifestPromise(cachedFinalManifestPromises, cacheKey, computeFinalManifest) {
	const cachedFinalManifestPromise = cachedFinalManifestPromises.get(cacheKey);
	if (cachedFinalManifestPromise) return cachedFinalManifestPromise;
	return cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, Promise.resolve().then(computeFinalManifest));
}
async function buildFinalManifest(opts) {
	return opts.transformFn ? await transformManifestAssets(opts.base, opts.transformFn, { inlineCss: opts.inlineCss }) : buildManifest(opts.base, { inlineCss: opts.inlineCss });
}
async function resolveFinalManifest(opts) {
	const computeFinalManifest = async () => {
		return buildFinalManifest({
			base: await opts.getBaseManifest(),
			transformFn: opts.transformFn,
			inlineCss: opts.inlineCss
		});
	};
	if (opts.finalManifestCache && (!opts.transformFn || opts.cache)) return getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(opts.inlineCss), computeFinalManifest);
	return computeFinalManifest();
}
function warmupFinalManifest(opts) {
	if (!opts.enabled || opts.handlerDefaultInlineCss === void 0 || !opts.cache) return;
	const inlineCss = opts.handlerDefaultInlineCss;
	const warmupPromise = getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(inlineCss), async () => {
		const [base, transformFn] = await Promise.all([opts.getBaseManifest(), opts.getTransformFn()]);
		return buildFinalManifest({
			base,
			transformFn,
			inlineCss
		});
	});
	if (opts.onError) warmupPromise.catch(opts.onError);
	return warmupPromise;
}
var init_finalManifest = __esmMin((() => {
	init_transformAssetUrls();
	init_inlineCss();
}));
var ServerFunctionSerializationAdapter;
var init_ServerFunctionSerializationAdapter = __esmMin((() => {
	init_getServerFnById();
	init_esm$3();
	ServerFunctionSerializationAdapter = createSerializationAdapter({
		key: "$TSS/serverfn",
		test: (v) => {
			if (typeof v !== "function") return false;
			if (!(TSS_SERVER_FUNCTION in v)) return false;
			return !!v[TSS_SERVER_FUNCTION];
		},
		toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
		fromSerializable: ({ functionId }) => {
			const fn = async (opts, signal) => {
				return (await (await getServerFnById(functionId, { origin: "client" }))(opts ?? {}, signal)).result;
			};
			return fn;
		}
	});
}));
var init_styles$1 = __esmMin((() => {}));
var styles_default;
var init_styles = __esmMin((() => {
	init_styles$1();
	styles_default = "/assets/styles-Dhu7OKXn.css";
}));
var logo_default;
var init_logo = __esmMin((() => {
	logo_default = "/assets/logo-DpPLcrum.png";
}));
var flower_default;
var init_flower = __esmMin((() => {
	flower_default = "/assets/flower-DR390tnz.png";
}));
/**
* Returns true after the component has hydrated on the client.
* Use this to gate render output that depends on Math.random(), Date.now(),
* localStorage, or window — anything that would otherwise cause a
* hydration mismatch between the SSR HTML and the first client render.
*/
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
var init_useHydrated = __esmMin((() => {}));
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
var MOBILE_BREAKPOINT;
var init_use_mobile = __esmMin((() => {
	MOBILE_BREAKPOINT = 768;
}));
function AnimatedBackground() {
	const hydrated = useHydrated();
	const reduce = useReducedMotion();
	const isMobile = useIsMobile();
	const ghostCount = isMobile ? 3 : 6;
	const pollenCount = isMobile ? 10 : 22;
	const ghosts = (0, import_react.useMemo)(() => {
		if (!hydrated) return [];
		const rand = (min, max) => Math.random() * (max - min) + min;
		return Array.from({ length: ghostCount }, (_, i) => ({
			id: i,
			left: `${rand(-8, 90)}%`,
			top: `${rand(-6, 88)}%`,
			size: Math.round(rand(220, 460)),
			opacity: rand(.05, .11),
			blur: Math.round(rand(2, 8)),
			delay: rand(0, 8),
			duration: rand(28, 46),
			drift: rand(18, 40),
			rotate: rand(-75, 75)
		}));
	}, [hydrated, ghostCount]);
	const pollen = (0, import_react.useMemo)(() => {
		if (!hydrated) return [];
		const rand = (min, max) => Math.random() * (max - min) + min;
		return Array.from({ length: pollenCount }, (_, i) => ({
			id: 100 + i,
			left: `${rand(0, 100)}%`,
			top: `${rand(0, 100)}%`,
			size: Math.round(rand(2, 5)),
			delay: rand(0, 10),
			duration: rand(14, 26),
			drift: rand(30, 80)
		}));
	}, [hydrated, pollenCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(1200px 700px at 82% -10%, rgba(240,201,137,0.22), transparent 60%), radial-gradient(900px 600px at -10% 110%, rgba(227,168,87,0.18), transparent 60%), radial-gradient(700px 500px at 50% 120%, rgba(198,91,124,0.18), transparent 65%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute -top-32 right-[-8%] h-[520px] w-[520px] rounded-full",
				style: {
					background: "radial-gradient(circle, rgba(240,201,137,0.28) 0%, transparent 65%)",
					filter: "blur(6px)",
					willChange: "transform"
				},
				animate: reduce ? void 0 : {
					x: [
						0,
						30,
						-10,
						0
					],
					y: [
						0,
						20,
						-15,
						0
					]
				},
				transition: {
					duration: 30,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute -bottom-40 -left-24 h-[560px] w-[560px] rounded-full",
				style: {
					background: "radial-gradient(circle, rgba(198,91,124,0.22) 0%, transparent 65%)",
					filter: "blur(8px)",
					willChange: "transform"
				},
				animate: reduce ? void 0 : {
					x: [
						0,
						-20,
						15,
						0
					],
					y: [
						0,
						-15,
						20,
						0
					]
				},
				transition: {
					duration: 34,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			ghosts.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: flower_default,
				alt: "",
				"aria-hidden": true,
				draggable: false,
				className: "absolute select-none object-contain",
				style: {
					left: g.left,
					top: g.top,
					width: g.size,
					height: g.size,
					opacity: g.opacity,
					filter: `blur(${g.blur}px) saturate(0.7) hue-rotate(-8deg)`,
					mixBlendMode: isMobile ? "normal" : "screen",
					willChange: "transform"
				},
				initial: {
					rotate: g.rotate,
					x: 0,
					y: 0
				},
				animate: reduce ? void 0 : {
					y: [
						0,
						-g.drift,
						g.drift * .6,
						0
					],
					x: [
						0,
						g.drift * .4,
						-g.drift * .3,
						0
					],
					rotate: [
						g.rotate,
						g.rotate + 12,
						g.rotate - 6,
						g.rotate
					],
					scale: [
						1,
						1.04,
						.98,
						1
					]
				},
				transition: {
					duration: g.duration,
					delay: g.delay,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}, g.id)),
			pollen.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "absolute rounded-full",
				style: {
					left: p.left,
					top: p.top,
					width: p.size,
					height: p.size,
					background: "rgba(240,201,137,0.85)",
					boxShadow: "0 0 8px rgba(240,201,137,0.7)",
					mixBlendMode: "screen",
					willChange: "transform, opacity"
				},
				animate: reduce ? void 0 : {
					y: [
						0,
						-p.drift,
						-p.drift * .4,
						-p.drift * 1.2,
						0
					],
					x: [
						0,
						p.drift * .3,
						-p.drift * .2,
						p.drift * .4,
						0
					],
					opacity: [
						.15,
						.9,
						.4,
						.7,
						.15
					]
				},
				transition: {
					duration: p.duration,
					delay: p.delay,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}, p.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse at center, transparent 40%, rgba(28,18,32,0.55) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.05] mix-blend-overlay",
				style: { backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }
			})
		]
	});
}
var init_AnimatedBackground = __esmMin((() => {
	init_flower();
	init_useHydrated();
	init_use_mobile();
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var init_utils = __esmMin((() => {}));
var Sheet;
var SheetTrigger;
var SheetPortal;
var SheetOverlay;
var sheetVariants;
var SheetContent;
var SheetHeader;
var SheetFooter;
var SheetTitle;
var SheetDescription;
var init_sheet = __esmMin((() => {
	init_utils();
	Sheet = Dialog;
	SheetTrigger = DialogTrigger;
	SheetPortal = DialogPortal;
	SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
		className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props,
		ref
	}));
	SheetOverlay.displayName = DialogOverlay.displayName;
	sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
		variants: { side: {
			top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
			bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
			left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
			right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
		} },
		defaultVariants: { side: "right" }
	});
	SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		ref,
		className: cn(sheetVariants({ side }), className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		}), children]
	})] }));
	SheetContent.displayName = DialogContent.displayName;
	SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
		...props
	});
	SheetHeader.displayName = "SheetHeader";
	SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
		...props
	});
	SheetFooter.displayName = "SheetFooter";
	SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		ref,
		className: cn("text-lg font-semibold text-foreground", className),
		...props
	}));
	SheetTitle.displayName = DialogTitle.displayName;
	SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
		ref,
		className: cn("text-sm text-muted-foreground", className),
		...props
	}));
	SheetDescription.displayName = DialogDescription.displayName;
}));
function SiteHeader() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-hairline bg-[#1c1220]/60 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 md:grid-cols-[1fr_auto_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-0 items-center justify-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "NariCare logo",
							width: 56,
							height: 56,
							className: "h-10 w-10 shrink-0 rounded-xl object-cover ring-1 ring-hairline/50 shadow-lg shadow-accent-gold-soft/10 transition-transform group-hover:scale-105 group-hover:ring-accent-gold-soft/50",
							draggable: false
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-serif text-base sm:text-lg font-semibold tracking-tight",
								children: "NariCare"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Cycle · Health · Care"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center justify-center gap-1 text-sm font-medium text-muted-foreground md:flex bg-white/[0.03] border border-white/10 rounded-full px-2 py-1.5 shadow-sm backdrop-blur-md",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "rounded-full px-4 py-2 transition-all hover:bg-white/10 hover:text-accent-gold-soft",
						activeProps: { className: "bg-white/10 text-accent-gold-soft shadow-inner" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/assessment",
						className: "hidden btn-primary-glow items-center rounded-full px-5 py-2.5 text-sm font-semibold md:inline-flex",
						children: "Begin assessment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open: isOpen,
						onOpenChange: setIsOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-surface-light hover:text-foreground md:hidden transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Open menu"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							side: "right",
							className: "glass-panel w-[85vw] max-w-[320px] !border-r-0 !border-t-0 !border-b-0 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "sr-only",
								children: "Navigation Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-6",
								children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: l.to,
									onClick: () => setIsOpen(false),
									className: "text-lg font-medium text-muted-foreground transition-colors hover:text-accent-gold-soft",
									activeProps: { className: "text-accent-gold-soft font-semibold" },
									children: l.label
								}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 pt-6 border-t border-hairline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/assessment",
										onClick: () => setIsOpen(false),
										className: "btn-primary-glow inline-flex w-full justify-center items-center rounded-full px-5 py-3 text-sm font-semibold",
										children: "Begin assessment"
									})
								})]
							})]
						})]
					})]
				})
			]
		})
	});
}
var links;
var init_SiteHeader = __esmMin((() => {
	init_logo();
	init_sheet();
	links = [
		{
			to: "/assessment",
			label: "Assessment"
		},
		{
			to: "/tracker",
			label: "Tracker"
		},
		{
			to: "/history",
			label: "History"
		},
		{
			to: "/doctor",
			label: "Doctor visit"
		},
		{
			to: "/ask",
			label: "Ask Nari"
		}
	];
}));
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
function pruneAssessments(a) {
	return a.sort((a, b) => b.savedAt - a.savedAt).slice(0, MAX_ASSESSMENTS);
}
function pruneThreads(t) {
	return t.sort((a, b) => b.updatedAt - a.updatedAt).slice(0, MAX_THREADS);
}
function pruneTracker(e) {
	return e.sort((a, b) => b.date.localeCompare(a.date)).slice(0, MAX_TRACKER_ENTRIES);
}
function newId() {
	if (isBrowser() && "randomUUID" in crypto) return crypto.randomUUID();
	return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
var KEYS;
var MAX_ASSESSMENTS;
var MAX_THREADS;
var MAX_TRACKER_ENTRIES;
var storage;
var init_storage = __esmMin((() => {
	KEYS = {
		assessment: "naricare:assessment",
		tracker: "naricare:tracker",
		threads: "naricare:threads",
		quickThreadId: "naricare:quick-thread-id"
	};
	MAX_ASSESSMENTS = 20;
	MAX_THREADS = 50;
	MAX_TRACKER_ENTRIES = 500;
	storage = {
		getAssessments: () => {
			const raw = read(KEYS.assessment, []);
			if (Array.isArray(raw)) return raw;
			if (raw && typeof raw === "object") return [raw];
			return [];
		},
		setAssessments: (a) => write(KEYS.assessment, pruneAssessments(a)),
		getTracker: () => read(KEYS.tracker, []),
		setTracker: (e) => write(KEYS.tracker, pruneTracker(e)),
		getThreads: () => read(KEYS.threads, []),
		setThreads: (t) => write(KEYS.threads, pruneThreads(t)),
		getQuickThreadId: () => read(KEYS.quickThreadId, null),
		setQuickThreadId: (id) => write(KEYS.quickThreadId, id),
		exportData: () => {
			const payload = {};
			for (const [key, lsKey] of Object.entries(KEYS)) payload[key] = read(lsKey, null);
			return JSON.stringify(payload, null, 2);
		},
		importData: (json) => {
			try {
				const payload = JSON.parse(json);
				for (const [key, lsKey] of Object.entries(KEYS)) if (key in payload) write(lsKey, payload[key]);
				return true;
			} catch {
				return false;
			}
		},
		clearAll: () => {
			for (const lsKey of Object.values(KEYS)) {
				if (!isBrowser()) return;
				try {
					window.localStorage.removeItem(lsKey);
				} catch {}
			}
		},
		getStorageSize: () => {
			const total = 5 * 1024 * 1024;
			let used = 0;
			if (!isBrowser()) return {
				used: 0,
				total,
				percent: 0
			};
			try {
				for (const lsKey of Object.values(KEYS)) {
					const raw = window.localStorage.getItem(lsKey);
					if (raw) used += raw.length * 2;
				}
			} catch {}
			return {
				used,
				total,
				percent: Math.round(used / total * 100)
			};
		}
	};
}));
function SiteFooter() {
	const [showData, setShowData] = (0, import_react.useState)(false);
	const [clearing, setClearing] = (0, import_react.useState)(false);
	const importRef = (0, import_react.useRef)(null);
	const handleExport = () => {
		const json = storage.exportData();
		const blob = new Blob([json], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `naricare-data-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
		a.click();
		URL.revokeObjectURL(url);
		toast.success("Data exported", { description: "Your NariCare data has been downloaded." });
	};
	const handleImport = () => {
		importRef.current?.click();
	};
	const onFileSelected = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			if (storage.importData(reader.result)) {
				toast.success("Data imported", { description: "Refresh the page to see your restored data." });
				window.location.reload();
			} else toast.error("Import failed", { description: "The file format was not valid." });
		};
		reader.readAsText(file);
		e.target.value = "";
	};
	const handleClear = () => {
		setClearing(true);
	};
	const confirmClear = () => {
		storage.clearAll();
		toast.success("All data cleared", { description: "Your NariCare data has been removed. The page will refresh." });
		setClearing(false);
		setShowData(false);
		setTimeout(() => window.location.reload(), 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-hairline bg-background/60 py-12 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref: importRef,
			type: "file",
			accept: ".json",
			onChange: onFileSelected,
			className: "hidden",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-3xl flex-col items-center justify-center gap-5 px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-serif text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 28 28",
						className: "h-6 w-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "14",
							cy: "14",
							r: "12",
							fill: "none",
							stroke: "#e3a857",
							strokeWidth: "1.4"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M14 4 A10 10 0 0 1 14 24 A5 5 0 0 0 14 4",
							fill: "#c65b7c"
						})]
					}), "NariCare"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-16 bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "Runs in your browser · Your answers stay on your device · Not a substitute for professional medical advice. In an emergency, contact your doctor."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground/70",
					children: "Made with care for every Nari."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-center gap-2 pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowData(!showData),
						className: "rounded-full border border-hairline/30 px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70 transition hover:border-accent-gold-soft/50 hover:text-accent-gold-soft",
						children: showData ? "Hide data settings" : `Data (${storage.getStorageSize().percent}% used)`
					})
				}),
				showData && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-2 pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleExport,
							className: "rounded-full border border-hairline/30 px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70 transition hover:border-accent-gold-soft/50 hover:text-accent-gold-soft",
							children: "Export data"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleImport,
							className: "rounded-full border border-hairline/30 px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70 transition hover:border-accent-gold-soft/50 hover:text-accent-gold-soft",
							children: "Import data"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleClear,
							className: "rounded-full border border-high/30 px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest text-high/70 transition hover:border-high hover:text-high",
							children: "Clear all data"
						})
					]
				}),
				clearing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel max-w-sm p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl mb-3",
								children: "Clear all data?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mb-6 leading-relaxed",
								children: "This will permanently delete all your assessments, cycle logs, and chat conversations. This action cannot be undone."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setClearing(false),
									className: "rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent-gold-soft transition-colors",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: confirmClear,
									className: "rounded-full bg-destructive px-5 py-2.5 text-sm font-semibold text-white hover:bg-destructive/80 transition-colors",
									children: "Yes, clear everything"
								})]
							})
						]
					})
				})
			]
		})]
	});
}
var init_SiteFooter = __esmMin((() => {
	init_storage();
}));
function bySavedAtDesc(a, b) {
	return b.savedAt - a.savedAt;
}
function load() {
	const all = storage.getAssessments().sort(bySavedAtDesc);
	return {
		all,
		latest: all.length > 0 ? all[0] : null
	};
}
function useAssessment() {
	const [assessments, setAssessments] = (0, import_react.useState)([]);
	const [latest, setLatest] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const { all, latest } = load();
		setAssessments(all);
		setLatest(latest);
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if (e.key === KEYS.assessment) {
				const { all, latest } = load();
				setAssessments(all);
				setLatest(latest);
			}
		};
		window.addEventListener("storage", handler);
		return () => window.removeEventListener("storage", handler);
	}, []);
	return {
		assessment: latest,
		assessments,
		latest,
		save: (0, import_react.useCallback)((a) => {
			const next = [a, ...storage.getAssessments()].sort(bySavedAtDesc);
			storage.setAssessments(next);
			setAssessments(next);
			setLatest(a);
		}, []),
		ready
	};
}
var init_useAssessment = __esmMin((() => {
	init_storage();
}));
function useTracker() {
	const [entries, setEntries] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setEntries(storage.getTracker());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if (e.key === KEYS.tracker) setEntries(storage.getTracker());
		};
		window.addEventListener("storage", handler);
		return () => window.removeEventListener("storage", handler);
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
var init_useTracker = __esmMin((() => {
	init_storage();
}));
function useThreads() {
	const [threads, setThreads] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setThreads(storage.getThreads());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if (e.key === KEYS.threads) setThreads(storage.getThreads());
		};
		window.addEventListener("storage", handler);
		return () => window.removeEventListener("storage", handler);
	}, []);
	const persist = (0, import_react.useCallback)((next) => {
		storage.setThreads(next);
		setThreads(next);
	}, []);
	return {
		threads,
		ready,
		create: (0, import_react.useCallback)((title = "New conversation") => {
			const t = {
				id: newId(),
				title,
				updatedAt: Date.now(),
				messages: []
			};
			persist([t, ...threads]);
			return t;
		}, [threads, persist]),
		remove: (0, import_react.useCallback)((id) => persist(threads.filter((t) => t.id !== id)), [threads, persist]),
		rename: (0, import_react.useCallback)((id, title) => persist(threads.map((t) => t.id === id ? {
			...t,
			title,
			updatedAt: Date.now()
		} : t)), [threads, persist]),
		setMessages: (0, import_react.useCallback)((id, messages) => {
			const current = storage.getThreads();
			const idx = current.findIndex((t) => t.id === id);
			let next;
			const firstUser = messages.find((m) => m.role === "user");
			const title = firstUser ? firstUser.content.slice(0, 48) : "New conversation";
			if (idx === -1) next = [{
				id,
				title,
				updatedAt: Date.now(),
				messages
			}, ...current];
			else next = [{
				...current[idx],
				messages,
				updatedAt: Date.now(),
				title: current[idx].title === "New conversation" ? title : current[idx].title
			}, ...current.filter((t) => t.id !== id)];
			persist(next);
		}, [persist])
	};
}
var init_useThreads = __esmMin((() => {
	init_storage();
}));
function ageContext(age) {
	if (age < 18) return {
		pcosMult: .7,
		irregularityMult: .8,
		anaemiaMult: 1,
		note: "Cycles are often naturally irregular for the first couple of years after your first period — irregularity alone is weighted a little lower at your age."
	};
	if (age >= 41) return {
		pcosMult: .6,
		irregularityMult: 1.15,
		anaemiaMult: 1.1,
		note: "In your 40s, irregular or heavier cycles are more commonly linked to perimenopause or fibroids than new-onset PCOS — still worth confirming with a doctor."
	};
	return {
		pcosMult: 1,
		irregularityMult: 1,
		anaemiaMult: 1,
		note: null
	};
}
function computeScores(r) {
	const ctx = ageContext(r.age);
	let irregularity = 0;
	if (r.cycleLength < 21 || r.cycleLength > 38) irregularity += 30;
	else if (r.cycleLength < 24 || r.cycleLength > 35) irregularity += 15;
	irregularity += r.variation * 12;
	irregularity += r.missed * 14;
	if (r.sym.spotting) irregularity += 12;
	irregularity = clamp(irregularity * ctx.irregularityMult);
	let pcos = 0;
	if (r.cycleLength > 35) pcos += 18;
	pcos += Math.min(r.variation * 7, 21);
	pcos += Math.min(r.missed * 9, 27);
	if (r.sym.hirsutism) pcos += 20;
	if (r.sym.acne) pcos += 10;
	if (r.sym.hairThin) pcos += 12;
	if (r.sym.weightGain) pcos += 8;
	if (r.familyPCOS) pcos += 10;
	if (r.sym.weightGain && r.exercise === 2 && r.variation >= 2) pcos += 5;
	pcos = clamp(pcos * ctx.pcosMult);
	let dysmenorrhea = 0;
	dysmenorrhea += r.painLevel * 6;
	dysmenorrhea += r.painInterference * 16;
	dysmenorrhea += r.clots * 6;
	if (r.sym.headache) dysmenorrhea += 4;
	if (r.sym.nausea) dysmenorrhea += 8;
	if (r.sym.backPain) dysmenorrhea += 6;
	if (r.sym.legPain) dysmenorrhea += 5;
	if (r.sym.painBowel) dysmenorrhea += 8;
	if (r.sym.painIntercourse) dysmenorrhea += 8;
	dysmenorrhea = clamp(dysmenorrhea);
	let anaemia = 0;
	anaemia += r.flow * 10;
	anaemia += Math.min(r.flowObjective * 3, 18);
	anaemia += r.clots * 8;
	if (r.periodLength > 7) anaemia += 18;
	else if (r.periodLength > 5) anaemia += 8;
	if (r.sym.fatigue) anaemia += 12;
	if (r.sym.dizziness) anaemia += 14;
	if (r.sym.pallor) anaemia += 8;
	if (r.sym.coldIntolerance) anaemia += 6;
	if (r.sym.pica) anaemia += 10;
	if (r.flow >= 2 && r.sym.fatigue && r.sym.dizziness) anaemia += 8;
	anaemia = clamp(anaemia * ctx.anaemiaMult);
	let stress = 0;
	stress += r.stressLevel * 6;
	stress += r.sleep * 10;
	stress += r.exercise === 2 ? 10 : r.exercise === 3 ? 6 : r.exercise === 0 ? -4 : 0;
	if (r.sym.moodSwings) stress += 10;
	if (r.sym.bloating) stress += 5;
	if (r.sym.breastTender) stress += 3;
	stress += r.missed * 8;
	stress = clamp(stress);
	let endometriosis = 0;
	endometriosis += r.painLevel * 6;
	endometriosis += r.painInterference * 12;
	if (r.sym.backPain) endometriosis += 6;
	if (r.sym.legPain) endometriosis += 5;
	if (r.sym.painBowel) endometriosis += 10;
	if (r.sym.painIntercourse) endometriosis += 10;
	if (r.sym.nausea) endometriosis += 6;
	if (r.familyEndo) endometriosis += 12;
	if (r.clots >= 1) endometriosis += 5;
	endometriosis = clamp(endometriosis);
	const pregnancyFlag = r.missed >= 1 && r.pregnancyContext === "unprotected";
	const pregnancyWatch = r.missed >= 1 && r.pregnancyContext === "protected";
	return {
		irregularity,
		pcos,
		dysmenorrhea,
		anaemia,
		stress,
		endometriosis,
		pregnancyFlag,
		pregnancyWatch,
		ageNote: ctx.note
	};
}
function levelOf(score) {
	if (score < 34) return {
		label: "Low",
		hex: "#7fb88b"
	};
	if (score < 64) return {
		label: "Moderate",
		hex: "#e3a857"
	};
	return {
		label: "High",
		hex: "#d9536b"
	};
}
var clamp;
var CATEGORIES;
var init_scoring = __esmMin((() => {
	clamp = (v) => Math.max(0, Math.min(100, Math.round(v)));
	CATEGORIES = [
		{
			key: "irregularity",
			name: "Cycle Irregularity"
		},
		{
			key: "pcos",
			name: "PCOS Indicators"
		},
		{
			key: "dysmenorrhea",
			name: "Period Pain"
		},
		{
			key: "anaemia",
			name: "Anaemia Risk"
		},
		{
			key: "stress",
			name: "Stress Load"
		}
	];
}));
function buildHealthContext(assessments, tracker, pastThreads = [], currentThreadId) {
	const lines = [];
	if (assessments.length > 0) {
		const sorted = [...assessments].sort((a, b) => a.savedAt - b.savedAt);
		const latest = sorted[sorted.length - 1];
		lines.push(`User profile (latest): ${latest.raw.age}y, avg cycle ${latest.raw.cycleLength}d, period ${latest.raw.periodLength}d.`);
		lines.push(`Assessment History (${sorted.length} total, most recent first):`);
		[...sorted].reverse().forEach((a) => {
			const date = new Date(a.savedAt).toISOString().split("T")[0];
			const scores = CATEGORIES.map((c) => `${c.name} ${a.scores[c.key]} (${levelOf(a.scores[c.key]).label})`).join("; ");
			lines.push(`- [${date}]: ${scores}`);
		});
		const activeSym = Object.entries(latest.raw.sym).filter(([, v]) => v).map(([k]) => k);
		if (activeSym.length) lines.push(`Latest reported symptoms: ${activeSym.join(", ")}.`);
		if (latest.scores.pregnancyFlag) lines.push(`Pregnancy possibility flagged (missed period + unprotected sex).`);
		if (latest.scores.ageNote) lines.push(`Age context: ${latest.scores.ageNote}`);
		if (latest.scores.endometriosis >= 34) lines.push(`Endometriosis likelihood score: ${latest.scores.endometriosis} (${levelOf(latest.scores.endometriosis).label}) — consider if pelvic pain + GI symptoms + family history align.`);
		if (sorted.length >= 2) {
			const oldest = sorted[0];
			const newest = sorted[sorted.length - 1];
			const deltas = CATEGORIES.map((c) => {
				const diff = newest.scores[c.key] - oldest.scores[c.key];
				if (Math.abs(diff) >= 10) return `${c.name} ${diff > 0 ? "+" : ""}${diff} pts`;
				return null;
			}).filter(Boolean);
			if (deltas.length) lines.push(`Score trend (earliest → latest): ${deltas.join(", ")}.`);
		}
	}
	if (tracker.length) {
		const sorted = [...tracker].sort((a, b) => a.date.localeCompare(b.date));
		const recent = sorted.slice(-14);
		const flowDays = sorted.filter((e) => e.flow !== "none").map((e) => e.date);
		let periodsCount = 0;
		if (flowDays.length > 0) {
			periodsCount = 1;
			for (let i = 1; i < flowDays.length; i++) if ((new Date(flowDays[i]).getTime() - new Date(flowDays[i - 1]).getTime()) / 864e5 > 2) periodsCount++;
		}
		const painScores = sorted.filter((e) => e.flow !== "none").map((e) => e.pain);
		const avgPain = painScores.length ? (painScores.reduce((a, b) => a + b, 0) / painScores.length).toFixed(1) : null;
		const flowValues = sorted.filter((e) => e.flow !== "none").map((e) => e.flow);
		const heavyCount = flowValues.filter((f) => f === "heavy").length;
		const moderateCount = flowValues.filter((f) => f === "moderate").length;
		const lightCount = flowValues.filter((f) => f === "light").length;
		const flowProfile = heavyCount + moderateCount + lightCount > 0 ? `(${lightCount} light, ${moderateCount} moderate, ${heavyCount} heavy)` : "";
		const symptomFrequency = {};
		for (const e of sorted) for (const s of e.symptoms) symptomFrequency[s] = (symptomFrequency[s] || 0) + 1;
		const topSymptoms = Object.entries(symptomFrequency).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([s, c]) => `${s} (${c}x)`);
		const moodCounts = {};
		for (const e of sorted) moodCounts[e.mood] = (moodCounts[e.mood] || 0) + 1;
		const dominantMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0];
		lines.push(`Tracker: ${sorted.length} entries, ~${periodsCount} periods logged. Avg period pain ${avgPain ?? "?"}/10. Flow profile ${flowProfile}.`);
		if (topSymptoms.length) lines.push(`Most logged symptoms: ${topSymptoms.join(", ")}.`);
		if (dominantMood) lines.push(`Dominant mood: "${dominantMood[0]}" reported ${dominantMood[1]}x.`);
		lines.push(`Recent logs (${recent.length}): ` + recent.map((t) => `[${t.date}] flow=${t.flow} pain=${t.pain}/10 mood=${t.mood}${t.symptoms.length ? ` sym:${t.symptoms.join(",")}` : ""}`).join("; ") + ".");
	}
	if (pastThreads.length > 0) {
		const previous = pastThreads.filter((t) => t.id !== currentThreadId && t.messages.length > 0);
		if (previous.length > 0) {
			lines.push(`Previous Conversations (${previous.length} total, last 5 shown):`);
			[...previous].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 5).forEach((t) => {
				const date = new Date(t.updatedAt).toISOString().split("T")[0];
				lines.push(`- [${date}] Topic: "${t.title}"`);
				t.messages.slice(-2).forEach((m) => {
					const role = m.role === "user" ? "User" : "Nari";
					const snippet = m.content.length > 100 ? m.content.slice(0, 100) + "..." : m.content;
					lines.push(`  * ${role}: ${snippet}`);
				});
			});
		}
	}
	if (!lines.length) return "No prior assessment, cycle log, or past conversation yet.";
	return lines.join("\n");
}
function buildContextDepHash(assessments, tracker, threads) {
	return `${assessments.length ? `${assessments.length}:${assessments[0]?.savedAt ?? 0}:${assessments[assessments.length - 1]?.savedAt ?? 0}` : "0"}|${tracker.length ? `${tracker.length}:${tracker[0]?.date ?? ""}:${tracker[tracker.length - 1]?.date ?? ""}` : "0"}|${threads.length ? `${threads.length}:${threads[0]?.updatedAt ?? 0}` : "0"}`;
}
var SYSTEM_PROMPT;
var init_context = __esmMin((() => {
	init_scoring();
	SYSTEM_PROMPT = `You are Nari, a warm, knowledgeable AI health companion built into NariCare — a women's menstrual and reproductive-health website. Your users are women seeking to understand their bodies.

Style:
- Warm, empathetic, direct. Speak like a caring older sister who happens to have medical knowledge.
- Use plain language. Explain jargon. Use short paragraphs, occasional bullet points.
- Address emotional context: cycles are personal and can be confusing or scary.
- Use "you" and speak directly to the user.

Medical rules — non-negotiable:
- You are NOT a doctor and CANNOT diagnose. Say this clearly when relevant.
- For red-flag symptoms (severe pelvic pain, heavy bleeding with dizziness, missed period + possibility of pregnancy, fever + pelvic pain, sudden vision changes, bleeding after menopause), urge the user to see a doctor or go to urgent care TODAY. Put this warning up front.
- Never recommend prescription medication dosages. General over-the-counter guidance (e.g. "many women find ibuprofen helps with cramps — check the label") is OK.
- Always end with a gentle nudge to consult a gynaecologist for anything concerning.

Understanding Scores (given in HEALTH CONTEXT):
Each category scores 0-100. Low <34, Moderate 34-63, High >=64.

1. Cycle Irregularity: Higher = more erratic cycles. Factors: cycle length outside 21-35d, variation, missed periods. Age matters: teens often have natural irregularity; women 40+ may have perimenopause-related changes.

2. PCOS Indicators: Higher = more features consistent with PCOS. Factors: long cycles (>35d), variation, missed periods, acne, hirsutism (excess hair), weight gain, hair thinning. Uses Rotterdam-like criteria weighting. NOT a diagnosis — only an ultrasound + blood tests can confirm.

3. Period Pain (Dysmenorrhea): Higher = more severe pain. Factors: pain level (0-10), how often it interferes with daily life, clot size/frequency, headaches. Pain that regularly stops normal activities at score >=64 may suggest endometriosis — encourage discussion with a gynaecologist.

4. Anaemia Risk: Higher = greater risk of iron deficiency. Factors: flow heaviness, clots, period length >5d, fatigue, dizziness. Heavy bleeding + fatigue + dizziness together are strong signals.

5. Stress Load: Higher = lifestyle factors affecting cycle. Factors: stress level, sleep quality, exercise frequency, mood swings, bloating. Chronic high stress can suppress ovulation (hypothalamic amenorrhea).

How to use scores:
- Connect the dots across categories: high PCOS + high Anaemia = suggest iron panel too; high Stress + high Irregularity = lifestyle interventions may help regulate cycles.
- If scores changed between assessments, acknowledge the trajectory ("Your Irregularity score has dropped 15 points since last time — that's great progress").
- Be specific: reference actual score numbers and category names from the context.

Personalization:
- A HEALTH CONTEXT block is provided with the user's assessment scores, cycle tracker logs, and past conversation history. Reference it directly.
- If they haven't done an assessment, suggest it gently.
- If they have tracker data, reference patterns you see ("I notice your last 3 cycles averaged heavier flow").

Scope:
- Discuss: menstrual health, PCOS, endometriosis, adenomyosis, fibroids, anaemia, contraception (general info), pregnancy possibility, nutrition for cycle health, exercise, mental health tied to cycles, when to see a doctor.
- Politely redirect off-topic requests back to women's health.
- If asked about specific medications by name, provide general information (class, common uses) but never recommend a specific dose or say "you should take this."

Format markdown. Keep responses focused — under 250 words unless asked for depth. Use bullet points for lists. Use **bold** for emphasis on important points.`;
}));
function toUIMessages(msgs) {
	return msgs.map((m) => ({
		id: m.id,
		role: m.role,
		parts: [{
			type: "text",
			text: m.content
		}]
	}));
}
function fromUIMessages(msgs) {
	return msgs.filter((m) => m.role === "user" || m.role === "assistant").map((m) => {
		const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("");
		return {
			id: m.id,
			role: m.role,
			content: text,
			createdAt: Date.now()
		};
	});
}
function renderMarkdownLite(text) {
	return `<p>${text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/^\s*[-*]\s+(.*)$/gm, "<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul class="list-disc pl-5 my-2">${m}</ul>`).replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br/>")}</p>`;
}
function ChatWindow({ thread, compact = false, onMessagesChanged, onFirstMessage }) {
	const { assessments } = useAssessment();
	const { entries } = useTracker();
	const { threads } = useThreads();
	const healthContext = (0, import_react.useMemo)(() => buildHealthContext(assessments, entries, threads, thread.id), [(0, import_react.useMemo)(() => buildContextDepHash(assessments, entries, threads), [
		assessments,
		entries,
		threads
	]), thread.id]);
	const healthContextRef = (0, import_react.useRef)(healthContext);
	(0, import_react.useEffect)(() => {
		healthContextRef.current = healthContext;
	}, [healthContext]);
	const transport = (0, import_react.useMemo)(() => new DefaultChatTransport({
		api: "/api/chat",
		prepareSendMessagesRequest: ({ messages, body }) => ({ body: {
			messages,
			healthContext: healthContextRef.current,
			...body
		} })
	}), []);
	const initialMessages = (0, import_react.useMemo)(() => toUIMessages(thread.messages), [thread.id]);
	const { messages, sendMessage, status, error } = useChat({
		id: thread.id,
		initialMessages,
		transport
	});
	const [input, setInput] = (0, import_react.useState)("");
	const scrollRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const lastCountRef = (0, import_react.useRef)(-1);
	(0, import_react.useEffect)(() => {
		if (lastCountRef.current === messages.length && status !== "streaming") return;
		lastCountRef.current = messages.length;
		onMessagesChanged?.(fromUIMessages(messages));
	}, [
		messages,
		status,
		onMessagesChanged
	]);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, status]);
	(0, import_react.useEffect)(() => {
		inputRef.current?.focus();
	}, [thread.id]);
	const isBusy = status === "submitted" || status === "streaming";
	const send = (text) => {
		const t = text.trim();
		if (!t || isBusy) return;
		if (messages.length === 0) onFirstMessage?.(t);
		sendMessage({ text: t });
		setInput("");
		setTimeout(() => inputRef.current?.focus(), 0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative flex flex-col overflow-hidden ${compact ? "h-[520px]" : "h-full"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { backgroundPosition: [
					"0% 0%",
					"100% 100%",
					"0% 0%"
				] },
				transition: {
					duration: 20,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute inset-0 opacity-[0.03] pointer-events-none",
				style: {
					backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, transparent 50%)",
					backgroundSize: "200% 200%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "relative z-10 flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-hide",
				children: [
					messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-lg text-center pt-12 pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									scale: .8,
									opacity: 0
								},
								animate: {
									scale: 1,
									opacity: 1
								},
								transition: {
									type: "spring",
									duration: .8
								},
								className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-rose to-accent-gold shadow-[0_0_30px_rgba(240,201,137,0.4)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 28 28",
									className: "h-8 w-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M14 4 A10 10 0 0 1 14 24 A5 5 0 0 0 14 4",
										fill: "#fff"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h3, {
								initial: {
									y: 10,
									opacity: 0
								},
								animate: {
									y: 0,
									opacity: 1
								},
								transition: { delay: .1 },
								className: "font-serif text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70",
								children: "Hi love, I'm Nari."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									y: 10,
									opacity: 0
								},
								animate: {
									y: 0,
									opacity: 1
								},
								transition: { delay: .2 },
								className: "text-sm text-muted-foreground leading-relaxed px-4",
								children: "Ask me anything — about a symptom that's been on your mind, or what to raise at your next doctor visit."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: { delay: .4 },
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-gold-soft/80 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Gentle openings"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap justify-center gap-2",
									children: SUGGESTIONS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
										initial: {
											opacity: 0,
											scale: .9
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										transition: { delay: .5 + i * .05 },
										onClick: () => send(s),
										className: "rounded-full border border-hairline/50 bg-white/5 backdrop-blur-sm px-4 py-2 text-xs text-foreground/80 transition-all hover:border-accent-gold-soft/50 hover:bg-white/10 hover:text-accent-gold-soft hover:shadow-[0_0_15px_rgba(240,201,137,0.15)]",
										children: s
									}, s))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: messages.map((m) => {
							const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("");
							const isUser = m.role === "user";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 10,
									scale: .98
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								transition: {
									type: "spring",
									stiffness: 400,
									damping: 30
								},
								className: `flex ${isUser ? "justify-end" : "justify-start"}`,
								children: isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-primary to-primary/80 px-4 py-3 text-sm text-primary-foreground shadow-lg backdrop-blur-md",
									children: text
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-w-[85%] rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 px-5 py-4 text-sm text-foreground/95 leading-relaxed shadow-lg backdrop-blur-md [&_p]:mb-3 [&_p:last-child]:mb-0 [&_strong]:text-accent-gold-soft [&_li]:mb-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: { __html: renderMarkdownLite(text) } })
								})
							}, m.id);
						})
					}),
					status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						className: "flex items-center gap-3 px-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs italic text-muted-foreground/80",
								children: "Nari is thinking…"
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "mx-auto max-w-md rounded-2xl border border-high/40 bg-high/10 p-5 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-foreground/90 mb-3",
							children: ["Nari stumbled. ", error.message || "Something went wrong with the response."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								const userMsgs = messages.filter((m) => m.role === "user");
								const lastUser = userMsgs[userMsgs.length - 1];
								if (lastUser) {
									const text = lastUser.parts.map((p) => p.type === "text" ? p.text ?? "" : "").join("");
									sendMessage({ text });
								}
							},
							className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold",
							children: "Try again"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t border-hairline/50 bg-black/20 backdrop-blur-xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						send(input);
					},
					className: "flex items-end gap-3 max-w-4xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							ref: inputRef,
							value: input,
							onChange: (e) => setInput(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									send(input);
								}
							},
							rows: 1,
							placeholder: "Ask Nari anything about your cycle…",
							className: "w-full resize-none rounded-2xl border border-hairline/50 bg-white/5 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-accent-gold-soft/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent-gold-soft/20 scrollbar-hide",
							style: { maxHeight: 140 }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: isBusy || !input.trim(),
						className: "btn-primary-glow flex h-12 w-12 flex-none items-center justify-center rounded-full disabled:opacity-40 transition-transform active:scale-95",
						"aria-label": "Send",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 flex flex-wrap items-center justify-center gap-2 text-center text-[10px] font-medium text-muted-foreground/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 inline mr-1 opacity-50" }), "Nari is AI"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Not medical advice" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-muted-foreground/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "See a doctor for anything urgent" })
					]
				})]
			})
		]
	});
}
var SUGGESTIONS;
var init_ChatWindow = __esmMin((() => {
	init_useAssessment();
	init_useTracker();
	init_useThreads();
	init_context();
	SUGGESTIONS = [
		"Explain my latest scores to me",
		"Is this much pain normal?",
		"Which blood tests should I ask my doctor for?",
		"Could my symptoms point to PCOS?",
		"Gentle remedies to ease my cramps tonight?"
	];
}));
function FloatingChat() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [thread, setThread] = (0, import_react.useState)(null);
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		let id = storage.getQuickThreadId();
		if (!id) {
			id = newId();
			storage.setQuickThreadId(id);
		}
		const all = storage.getThreads();
		let t = all.find((x) => x.id === id);
		if (!t) {
			t = {
				id,
				title: "Quick chat",
				updatedAt: Date.now(),
				messages: []
			};
			storage.setThreads([t, ...all]);
		}
		setThread(t);
	}, []);
	if (location.pathname.startsWith("/ask")) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && thread && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 20,
			scale: .95
		},
		transition: { duration: .2 },
		className: "glass-panel fixed bottom-[calc(env(safe-area-inset-bottom,0)+5.5rem)] right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)] overflow-hidden sm:right-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-hairline/50 bg-gradient-to-r from-accent-rose/20 to-accent-gold/20 px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-rose to-accent-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 28 28",
						className: "h-5 w-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M14 4 A10 10 0 0 1 14 24 A5 5 0 0 0 14 4",
							fill: "#fff"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-sm",
						children: "Ask Nari"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
						children: "AI health companion"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ask",
					className: "rounded-full p-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-foreground",
					"aria-label": "Open full chat",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					className: "rounded-full p-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-foreground",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			})]
		}), storage.getAssessments().length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center p-8 text-center flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-hairline/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-6 w-6 text-accent-gold-soft" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg mb-2",
					children: "Unlock Nari"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mb-6 leading-relaxed max-w-xs",
					children: "Take the 3-minute health assessment so Nari knows your context."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/assessment",
					onClick: () => setOpen(false),
					className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
					children: "Take assessment"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWindow, {
			thread,
			compact: true,
			onMessagesChanged: (msgs) => {
				const all = storage.getThreads();
				const existing = all.find((t) => t.id === thread.id);
				const title = msgs.find((m) => m.role === "user")?.content.slice(0, 40) ?? "Quick chat";
				const base = existing ?? thread;
				const updated = {
					...base,
					messages: msgs,
					updatedAt: Date.now(),
					title: base.title === "New conversation" ? title : base.title
				};
				const idx = all.findIndex((t) => t.id === thread.id);
				if (idx === -1) storage.setThreads([updated, ...all]);
				else {
					const next = [...all];
					next[idx] = updated;
					storage.setThreads(next);
				}
			}
		})]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		initial: { scale: 0 },
		animate: { scale: 1 },
		transition: {
			delay: .5,
			type: "spring",
			stiffness: 200
		},
		onClick: () => setOpen((v) => !v),
		className: "btn-primary-glow fixed bottom-[calc(env(safe-area-inset-bottom,0)+1rem)] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full sm:right-6 sm:bottom-6",
		"aria-label": open ? "Close chat" : "Open chat with Nari",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					rotate: -90,
					opacity: 0
				},
				animate: {
					rotate: 0,
					opacity: 1
				},
				exit: {
					rotate: 90,
					opacity: 0
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
			}, "close") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					rotate: 90,
					opacity: 0
				},
				animate: {
					rotate: 0,
					opacity: 1
				},
				exit: {
					rotate: -90,
					opacity: 0
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
			}, "open")
		})
	})] });
}
var init_FloatingChat = __esmMin((() => {
	init_ChatWindow();
	init_storage();
}));
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20,
				scale: .96
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: {
				duration: .5,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-7xl text-accent-gold-soft",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-serif text-xl",
					children: "This page slipped through the cycle."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-primary-glow inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		console.error("[NariCare Error Boundary]", error);
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20,
				scale: .96
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: {
				duration: .5,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-2xl text-destructive",
					children: "Oops!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-base font-medium text-foreground",
					children: "Something went wrong with this response"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 rounded-xl border border-hairline bg-surface p-4 text-left shadow-inner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-mono text-muted-foreground break-words",
						children: error.message || "Unknown error occurred"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary-glow inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent-gold-soft hover:text-accent-gold-soft transition-colors",
						children: "Go home"
					})]
				})
			]
		})
	});
}
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				toastOptions: { style: {
					background: "#2a1d2a",
					color: "#f6ede8",
					border: "1px solid rgba(246,237,232,0.1)"
				} }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1 relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: pageVariants,
								initial: "initial",
								animate: "enter",
								exit: "exit",
								className: "h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
							}, location.pathname)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChat, {})
				]
			})
		]
	});
}
var Route$8;
var pageVariants;
var init___root = __esmMin((() => {
	init_styles();
	init_logo();
	init_AnimatedBackground();
	init_SiteHeader();
	init_SiteFooter();
	init_FloatingChat();
	Route$8 = createRootRouteWithContext()({
		head: () => ({
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: "NariCare — AI-powered women's cycle & health companion" },
				{
					name: "description",
					content: "NariCare is an AI-powered menstrual & reproductive health hub for women. Run a 3-min risk assessment, track your cycle, ask Nari — your private AI health companion."
				},
				{
					name: "author",
					content: "NariCare"
				},
				{
					property: "og:title",
					content: "NariCare — AI-powered women's cycle & health companion"
				},
				{
					property: "og:description",
					content: "Run a private risk assessment, track your cycle, chat with Nari the AI companion."
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:image",
					content: "/og-image.png"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:image",
					content: "/social-banner.png"
				}
			],
			links: [
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "icon",
					href: logo_default,
					type: "image/png"
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,450;0,9..144,600;1,9..144,450&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
				}
			]
		}),
		shellComponent: RootShell,
		component: RootComponent,
		notFoundComponent: NotFoundComponent,
		errorComponent: ErrorComponent
	});
	pageVariants = {
		initial: {
			opacity: 0,
			y: 8
		},
		enter: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .32,
				ease: [
					.16,
					1,
					.3,
					1
				]
			}
		},
		exit: {
			opacity: 0,
			y: -4,
			transition: {
				duration: .18,
				ease: [
					.4,
					0,
					1,
					1
				]
			}
		}
	};
}));
/**
* Subtle mouse-driven tilt for hero visuals.
* Returns spring-smoothed rotateX/rotateY motion values.
* Disabled on reduced-motion and touch devices.
*/
function useMouseTilt(strength = 6) {
	const reduce = useReducedMotion();
	const rx = useMotionValue(0);
	const ry = useMotionValue(0);
	const rxs = useSpring(rx, {
		stiffness: 80,
		damping: 20,
		mass: .6
	});
	const rys = useSpring(ry, {
		stiffness: 80,
		damping: 20,
		mass: .6
	});
	(0, import_react.useEffect)(() => {
		if (reduce) return;
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const onMove = (e) => {
			const x = e.clientX / window.innerWidth * 2 - 1;
			const y = e.clientY / window.innerHeight * 2 - 1;
			ry.set(x * strength);
			rx.set(-y * strength);
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, [
		reduce,
		rx,
		ry,
		strength
	]);
	return {
		rx: rxs,
		ry: rys
	};
}
var init_useMouseTilt = __esmMin((() => {}));
/**
* Static gerbera daisy hero visual with gentle idle sway,
* mouse-driven parallax tilt, and orbiting golden pollen.
*/
function CycleWheel({ size = 780 }) {
	const reduce = useReducedMotion();
	const { rx, ry } = useMouseTilt(4);
	const orbits = [
		{
			r: size * .46,
			dur: 26,
			delay: 0,
			dot: 6
		},
		{
			r: size * .52,
			dur: 34,
			delay: 2,
			dot: 4
		},
		{
			r: size * .4,
			dur: 22,
			delay: 4,
			dot: 5
		},
		{
			r: size * .5,
			dur: 30,
			delay: 6,
			dot: 3
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative hidden items-center justify-center md:flex",
		style: {
			width: size,
			height: size,
			perspective: 1200
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute inset-0 rounded-full",
				style: {
					background: "conic-gradient(from 0deg, rgba(240,201,137,0.18), rgba(198,91,124,0.15), rgba(240,201,137,0.05), rgba(198,91,124,0.18), rgba(240,201,137,0.18))",
					filter: "blur(60px)"
				},
				animate: reduce ? {} : { rotate: 360 },
				transition: {
					duration: 60,
					repeat: Infinity,
					ease: "linear"
				}
			}),
			!reduce && orbits.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute left-1/2 top-1/2",
				style: {
					width: o.r * 2,
					height: o.r * 2,
					marginLeft: -o.r,
					marginTop: -o.r
				},
				animate: { rotate: i % 2 === 0 ? 360 : -360 },
				transition: {
					duration: o.dur,
					delay: o.delay,
					repeat: Infinity,
					ease: "linear"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute rounded-full",
					style: {
						width: o.dot,
						height: o.dot,
						top: -o.dot / 2,
						left: `calc(50% - ${o.dot / 2}px)`,
						background: "rgba(240,201,137,0.9)",
						boxShadow: "0 0 12px rgba(240,201,137,0.9)"
					}
				})
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: flower_default,
				alt: "Gerbera daisy",
				width: size,
				height: size,
				style: {
					width: size,
					height: size,
					rotateX: reduce ? 0 : rx,
					rotateY: reduce ? 0 : ry,
					transformStyle: "preserve-3d"
				},
				className: "relative z-10 select-none object-contain drop-shadow-[0_36px_100px_rgba(168,68,106,0.5)]",
				draggable: false,
				animate: reduce ? {} : {
					rotate: [
						-2,
						2,
						-2
					],
					scale: [
						1,
						1.015,
						1
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				}
			})
		]
	});
}
var init_CycleWheel = __esmMin((() => {
	init_flower();
	init_useMouseTilt();
}));
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
var init_page_skeleton = __esmMin((() => {}));
function daysBetween(a, b) {
	return Math.round((a.getTime() - b.getTime()) / 864e5);
}
function useNextPeriod() {
	const { entries } = useTracker();
	return (0, import_react.useMemo)(() => {
		const flowDays = entries.filter((e) => e.flow !== "none").map((e) => e.date).sort();
		if (flowDays.length === 0) return null;
		const groups = [];
		for (const d of flowDays) {
			const last = groups[groups.length - 1];
			if (!last) {
				groups.push([d]);
				continue;
			}
			if ((new Date(d).getTime() - new Date(last[last.length - 1]).getTime()) / 864e5 <= 2) last.push(d);
			else groups.push([d]);
		}
		const starts = groups.map((g) => new Date(g[0]));
		if (starts.length < 2) return { lastLog: flowDays[flowDays.length - 1] };
		const gaps = [];
		for (let i = 1; i < starts.length; i++) gaps.push(daysBetween(starts[i], starts[i - 1]));
		const avg = Math.round(gaps.reduce((a, b) => a + b, 0) / gaps.length);
		const next = new Date(starts[starts.length - 1].getTime() + avg * 864e5);
		const diff = daysBetween(next, /* @__PURE__ */ new Date());
		return {
			nextDate: next.toISOString().slice(0, 10),
			inDays: diff,
			avg
		};
	}, [entries]);
}
function TodayForYou() {
	const { assessment, ready: aReady } = useAssessment();
	const { ready: tReady } = useTracker();
	const nextPeriod = useNextPeriod();
	if (!aReady || !tReady) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayForYouSkeleton, {});
	const topScore = assessment ? CATEGORIES.map((c) => ({
		name: c.name,
		score: assessment.scores[c.key]
	})).sort((a, b) => b.score - a.score)[0] : null;
	const level = topScore ? levelOf(topScore.score) : null;
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
			duration: .6,
			delay: .3
		},
		className: "mx-auto max-w-7xl px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card relative overflow-hidden p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-1.5 w-1.5 animate-pulse rounded-full",
					style: { background: "var(--accent-gold-soft)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-accent-gold-soft",
					children: "Today for you"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarHeart, { className: "h-4 w-4" }),
						title: "Your cycle",
						body: nextPeriod?.inDays !== void 0 ? nextPeriod.inDays >= 0 ? `Next period expected in ~${nextPeriod.inDays} day${nextPeriod.inDays === 1 ? "" : "s"} (${nextPeriod.avg}-day cycle average).` : `You're ${Math.abs(nextPeriod.inDays)} day${Math.abs(nextPeriod.inDays) === 1 ? "" : "s"} past the expected date — log today to keep the rhythm.` : nextPeriod?.lastLog ? "Log another period start so Nari can learn your rhythm." : "Log your first period to start seeing gentle predictions.",
						cta: "Open tracker",
						to: "/tracker"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
						title: "Your check-in",
						body: topScore && level ? `Highest signal: ${topScore.name} — ${level.label.toLowerCase()}. Tap to revisit or ask Nari.` : "Take a 3-minute check-in so Nari can personalize every answer to you.",
						cta: assessment ? "Revisit results" : "Begin check-in",
						to: "/assessment",
						accent: level?.hex
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
						title: "Talk to Nari",
						body: topScore ? `Curious about your ${topScore.name.toLowerCase()} signal? Ask Nari for what it means and what to do next.` : "A warm AI companion who knows women's health. Ask anything you'd whisper to a wise sister.",
						cta: "Chat with Nari",
						to: "/ask"
					})
				]
			})]
		})
	});
}
function Card({ icon, title, body, cta, to, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group relative flex flex-col gap-3 rounded-2xl border border-hairline bg-bg-alt/50 p-5 transition hover:border-accent-gold-soft/60 hover:bg-bg-alt/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-rose/25 to-accent-gold/20",
					style: accent ? { color: accent } : { color: "var(--accent-gold-soft)" },
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-base",
					children: title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "flex-1 text-sm leading-relaxed text-muted-foreground",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs font-semibold uppercase tracking-[0.14em] text-accent-gold-soft opacity-70 transition group-hover:opacity-100",
				children: [cta, " →"]
			})
		]
	});
}
var init_TodayForYou = __esmMin((() => {
	init_page_skeleton();
	init_useAssessment();
	init_useTracker();
	init_scoring();
}));
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function FloatingOrbs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden pointer-events-none z-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				y: [
					0,
					-20,
					0
				],
				x: [
					0,
					15,
					0
				],
				opacity: [
					.3,
					.5,
					.3
				]
			},
			transition: {
				duration: 8,
				repeat: Infinity,
				ease: "easeInOut"
			},
			className: "absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-accent-gold-soft/10 blur-[80px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				y: [
					0,
					30,
					0
				],
				x: [
					0,
					-20,
					0
				],
				opacity: [
					.2,
					.4,
					.2
				]
			},
			transition: {
				duration: 10,
				repeat: Infinity,
				ease: "easeInOut",
				delay: 1
			},
			className: "absolute bottom-[20%] right-[5%] h-[500px] w-[500px] rounded-full bg-accent-rose/10 blur-[100px]"
		})]
	});
}
function Home() {
	const { scrollYProgress } = useScroll();
	const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingOrbs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 overflow-hidden min-h-[90vh] flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: heroY },
					className: "mx-auto w-full grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						animate: "show",
						variants: fadeUp,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemFade,
								className: "eyebrow mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " For every Nari, with love"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: itemFade,
								className: "font-serif text-5xl leading-[1.05] md:text-7xl tracking-tight",
								children: [
									"Your body has a story. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-transparent bg-clip-text bg-gradient-to-r from-accent-gold-soft to-accent-rose pb-2 pr-2",
										children: "Nari"
									}),
									" ",
									"helps you listen."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: itemFade,
								className: "mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed",
								children: "A gentle, private space to understand your cycle, log your days, and ask the questions you'd whisper to a wise older sister. Nari is your AI companion — she knows your context and answers with warmth, not jargon."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemFade,
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/assessment",
									className: "btn-primary-glow group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold",
									children: [
										"Begin my check-in",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/ask",
									className: "group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-gold-soft/50 transition-all duration-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-accent-gold-soft/0 to-accent-gold-soft/0 group-hover:from-accent-gold-soft/10 group-hover:to-accent-rose/10 transition-all duration-500" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-accent-gold-soft" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative z-10",
											children: "Talk to Nari"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
								variants: itemFade,
								className: "mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 shrink-0 text-accent-gold-soft" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No sign-up" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent-gold-soft/30",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stays in your browser" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent-gold-soft/30",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Private" })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8,
							filter: "blur(20px)"
						},
						animate: {
							opacity: 1,
							scale: 1,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1.5,
							ease: "easeOut",
							delay: .3
						},
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-accent-rose/20 to-accent-gold-soft/20 blur-[100px] rounded-full z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 drop-shadow-[0_0_40px_rgba(240,201,137,0.15)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CycleWheel, {})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 pb-16 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayForYou, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 border-y border-hairline/50 bg-black/20 backdrop-blur-3xl py-24 md:py-32 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold-soft/20 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "eyebrow justify-center",
								children: "Everything Nari holds for you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: .1 },
								className: "mt-6 font-serif text-4xl md:text-5xl leading-tight",
								children: [
									"A quiet toolkit for the questions",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-accent-gold-soft",
										children: "no one told us"
									}),
									" to ask."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: .2 },
								className: "mt-6 text-lg text-muted-foreground",
								children: "Every corner is designed to be gentle, personal, and honest — never clinical, never scary."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "h-6 w-6" }),
								title: "The Check-in",
								desc: "18 kind questions. Five clear signals — irregularity, PCOS, pain, anaemia, stress. No black boxes.",
								to: "/assessment",
								cta: "Take my check-in",
								span: "md:col-span-2 lg:col-span-2"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-6 w-6" }),
								title: "Cycle Tracker",
								desc: "Log flow, pain and mood. Watch your rhythm appear and see when your next bloom is due.",
								to: "/tracker",
								cta: "Log today",
								span: "md:col-span-1 lg:col-span-1"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6" }),
								title: "Ask Nari",
								desc: "A warm AI companion who reads your context. Ask about symptoms, remedies, or next steps.",
								to: "/ask",
								cta: "Open chat",
								span: "md:col-span-1 lg:col-span-1"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-6 w-6" }),
								title: "Learn Hub",
								desc: "Plain-language guides on PCOS, endometriosis, anaemia and mental wellbeing.",
								to: "/history",
								cta: "View history",
								span: "md:col-span-2 lg:col-span-2"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "h-6 w-6" }),
								title: "Doctor Companion",
								desc: "A personalized list of tests and questions to carry into your gynaecologist visit.",
								to: "/doctor",
								cta: "Prepare my visit",
								span: "md:col-span-2 lg:col-span-3"
							}
						].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-50px"
							},
							transition: {
								delay: i * .1,
								duration: .6,
								ease: "easeOut"
							},
							className: `glass-panel group relative flex flex-col p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 overflow-hidden ${f.span}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-gold-soft/0 to-transparent transition-all duration-500 group-hover:via-accent-gold-soft/50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-rose/10 to-accent-gold/10 text-accent-gold-soft border border-white/5 shadow-[0_0_20px_rgba(240,201,137,0.1)] group-hover:scale-110 transition-transform duration-500 ease-out",
									children: f.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative z-10 font-serif text-2xl text-foreground/90",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative z-10 mt-3 flex-1 text-base text-muted-foreground/80 leading-relaxed",
									children: f.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: f.to,
									className: "relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-accent-gold-soft border border-white/5 transition-all group-hover:bg-accent-gold-soft group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(240,201,137,0.3)]",
									children: [
										f.cta,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})
							]
						}, f.title))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl text-center mx-auto mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "eyebrow justify-center",
							children: "The gentle process"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: .1 },
							className: "mt-6 font-serif text-4xl md:text-5xl",
							children: "Three soft steps, one clearer picture."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-3 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-hairline to-transparent -translate-y-1/2 z-0" }), [
							{
								n: "01",
								h: "Share honestly",
								p: "18 short questions, grouped into 5 kind steps. Skip anything that feels too much."
							},
							{
								n: "02",
								h: "Nari listens",
								p: "A clinically-informed engine reads your answers and shapes them into 5 clear signals."
							},
							{
								n: "03",
								h: "Understand & act",
								p: "See your bloom, chat with Nari, and carry a personalized checklist to your doctor."
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								delay: i * .2,
								duration: .6
							},
							className: "relative z-10 glass-panel p-8 md:p-10 flex flex-col items-center text-center overflow-hidden group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-8 -top-12 text-[120px] font-serif italic font-light text-white/[0.02] pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:text-accent-gold-soft/[0.03]",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-background border border-hairline shadow-xl mb-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif italic text-2xl text-accent-gold-soft",
										children: s.n
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative text-xl font-serif",
									children: s.h
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-3 text-sm text-muted-foreground leading-relaxed",
									children: s.p
								})
							]
						}, s.n))]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 pb-24 md:pb-32 px-4 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .95,
							y: 40
						},
						whileInView: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							ease: "easeOut"
						},
						className: "relative overflow-hidden rounded-[2.5rem] border border-hairline/50 p-12 md:p-24 text-center shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-surface to-background z-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { backgroundPosition: [
									"0% 50%",
									"100% 50%",
									"0% 50%"
								] },
								transition: {
									duration: 15,
									repeat: Infinity,
									ease: "linear"
								},
								className: "absolute inset-0 z-0 opacity-40",
								style: {
									backgroundImage: "radial-gradient(circle at center, rgba(198,91,124,0.15) 0%, rgba(240,201,137,0.05) 50%, transparent 100%)",
									backgroundSize: "200% 200%"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { className: "mx-auto mb-6 h-10 w-10 text-accent-gold-soft opacity-80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-4xl md:text-6xl text-foreground",
										children: "Ready when you are, Nari."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground/90 leading-relaxed",
										children: "Take three quiet minutes. Nari will remember what you share and use it to answer every question that follows."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 flex flex-wrap justify-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/assessment",
											className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold",
											children: "Begin my check-in"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/ask",
											className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-accent-gold-soft/50 transition-all duration-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-accent-gold-soft" }), " Talk to Nari"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-muted-foreground/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-accent-gold-soft/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/80 font-medium",
									children: "Only yours."
								}), " Every entry stays inside your browser."] })]
							})
						]
					})
				})
			})
		]
	});
}
var EASE;
var fadeUp;
var itemFade;
var init_routes$1 = __esmMin((() => {
	init_CycleWheel();
	init_TodayForYou();
	EASE = [
		.16,
		1,
		.3,
		1
	];
	fadeUp = {
		hidden: {
			opacity: 0,
			y: 30
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .8,
				ease: EASE,
				staggerChildren: .1
			}
		}
	};
	itemFade = {
		hidden: {
			opacity: 0,
			y: 20
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .8,
				ease: EASE
			}
		}
	};
}));
var $$splitComponentImporter$6;
var Route$7;
var init_routes = __esmMin((() => {
	$$splitComponentImporter$6 = () => Promise.resolve().then(() => (init_routes$1(), routes_exports));
	Route$7 = createFileRoute("/")({
		head: () => ({ meta: [{ title: "NariCare — A gentle AI health companion for every Nari" }, {
			name: "description",
			content: "Understand your cycle, track your body, and talk to Nari — a warm AI companion trained on women's health. Private, personal, and always by your side."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$6, "component")
	});
}));
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
var init_RiskBloom = __esmMin((() => {
	init_scoring();
}));
var assessment_exports = /* @__PURE__ */ __exportAll({ component: () => AssessmentPage });
function AssessmentPage() {
	const { assessment, save } = useAssessment();
	const [showResults, setShowResults] = (0, import_react.useState)(!!assessment);
	const [raw, setRaw] = (0, import_react.useState)(assessment?.raw ?? emptyRaw);
	const [step, setStep] = (0, import_react.useState)(1);
	const [err, setErr] = (0, import_react.useState)(null);
	const set = (k, v) => setRaw((r) => ({
		...r,
		[k]: v
	}));
	const validate = (n) => {
		if (n === 1) {
			if (!raw.age || raw.age < 10 || raw.age > 60 || !Number.isInteger(raw.age)) return "Please enter an age between 10 and 60.";
		}
		if (n === 2) {
			if (raw.variation < 0) return "Pick how much your cycle varies.";
			if (raw.missed < 0) return "Pick how many periods you missed.";
			if (!raw.pregnancyContext) return "Pick a pregnancy-possibility option.";
		}
		if (n === 3) {
			if (raw.flow < 0) return "Pick your flow level.";
			if (raw.flowObjective < 0) return "Estimate how many pads/tampons you use.";
			if (raw.clots < 0) return "Pick a clots option.";
			if (raw.painInterference < 0) return "Pick a pain-interference option.";
		}
		if (n === 5) {
			if (raw.sleep < 0) return "Pick a sleep option.";
			if (raw.exercise < 0) return "Pick an exercise option.";
		}
		return null;
	};
	const next = () => {
		const e = validate(step);
		if (e) {
			setErr(e);
			return;
		}
		setErr(null);
		if (step < 5) setStep(step + 1);
		else {
			const scores = computeScores(raw);
			save({
				savedAt: Date.now(),
				raw,
				scores
			});
			toast.success("Assessment saved", { description: "Your results are ready below." });
			setShowResults(true);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
	};
	const retake = () => {
		setRaw(emptyRaw);
		setStep(1);
		setShowResults(false);
		setErr(null);
	};
	if (showResults) {
		const all = storage.getAssessments();
		const saved = all.length > 0 ? all[0] : null;
		if (!saved) {
			setShowResults(false);
			return null;
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {
			saved,
			onRetake: retake
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-6 py-16 overflow-x-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "eyebrow justify-center",
					children: "Assessment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 },
					className: "mt-4 font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-accent-gold-soft to-accent-rose pb-2",
					children: "Tell us about your last few cycles."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .2 },
					className: "mt-2 text-muted-foreground",
					children: "Estimates are fine — just go with your best recollection."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 glass-panel p-6 md:p-10 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1 overflow-hidden rounded-full bg-surface-light",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "h-full bg-gradient-to-r from-accent-gold to-accent-rose",
						initial: false,
						animate: { width: `${step / 5 * 100}%` },
						transition: { duration: .4 }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Step ",
						step,
						" of 5"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: STEP_NAMES[step - 1] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 40
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: -40
						},
						transition: {
							type: "spring",
							bounce: .2,
							duration: .6
						},
						className: "mt-10",
						children: [
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step1, {
								raw,
								set
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step2, {
								raw,
								set
							}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step3, {
								raw,
								set
							}),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step4, {
								raw,
								set
							}),
							step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step5, {
								raw,
								set
							})
						]
					}, step)
				}),
				err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-high",
					children: err
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-between border-t border-hairline pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setStep(Math.max(1, step - 1));
							setErr(null);
						},
						className: `inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold hover:border-accent-gold-soft ${step === 1 ? "invisible" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: next,
						className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold",
						children: [
							step === 5 ? "See my results" : "Continue",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})]
				})
			]
		})]
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mb-2 block text-sm font-semibold",
				children: label
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs text-muted-foreground",
				children: hint
			}),
			children
		]
	});
}
function Choices({ options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
		children: options.map((o) => {
			const selected = value === o.value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				type: "button",
				whileHover: { scale: 1.02 },
				whileTap: { scale: .97 },
				onClick: () => onChange(o.value),
				className: `relative rounded-2xl border px-4 py-4 text-sm transition-colors ${selected ? "border-transparent bg-gradient-to-br from-primary to-[#a8446a] font-semibold text-white shadow-lg shadow-primary/30" : "border-hairline/50 bg-white/5 hover:bg-white/10 text-muted-foreground"}`,
				children: o.label
			}, String(o.value));
		})
	});
}
function Range({ min, max, value, onChange, suffix }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min,
			max,
			value,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "flex-1 accent-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-14 rounded-lg border border-hairline bg-bg-alt px-3 py-1.5 text-center font-mono text-sm",
			children: [value, suffix ?? ""]
		})]
	});
}
function Step1({ raw, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "The basics"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "A few numbers to anchor everything else."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Your age",
			hint: "Between 10 and 60 — the reproductive age range this tool is built for.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "number",
				min: 10,
				max: 60,
				value: raw.age || "",
				onChange: (e) => {
					const v = Number(e.target.value);
					if (v >= 0) set("age", v);
				},
				onBlur: () => {
					if (raw.age < 10) set("age", 10);
					else if (raw.age > 60) set("age", 60);
				},
				placeholder: "e.g. 24",
				className: "w-full rounded-xl border border-hairline bg-bg-alt px-4 py-3 text-base focus:border-accent-gold-soft focus:outline-none"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Height (cm, optional)",
				hint: "For BMI context — skip if unsure.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					min: 100,
					max: 250,
					value: raw.height > 0 ? raw.height : "",
					onChange: (e) => set("height", Number(e.target.value)),
					placeholder: "e.g. 165",
					className: "w-full rounded-xl border border-hairline bg-bg-alt px-4 py-3 text-base focus:border-accent-gold-soft focus:outline-none"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Weight (kg, optional)",
				hint: "Rough estimate is fine.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					min: 30,
					max: 250,
					value: raw.weight > 0 ? raw.weight : "",
					onChange: (e) => set("weight", Number(e.target.value)),
					placeholder: "e.g. 65",
					className: "w-full rounded-xl border border-hairline bg-bg-alt px-4 py-3 text-base focus:border-accent-gold-soft focus:outline-none"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Average cycle length (day 1 to day 1)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				min: 15,
				max: 60,
				value: raw.cycleLength,
				onChange: (v) => set("cycleLength", v),
				suffix: " days"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Average period duration",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				min: 1,
				max: 14,
				value: raw.periodLength,
				onChange: (v) => set("periodLength", v),
				suffix: " days"
			})
		})
	] });
}
function Step2({ raw, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "Regularity"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "How predictable has your cycle been lately?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "How much does your cycle length vary month to month?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.variation,
				onChange: (v) => set("variation", v),
				options: [
					{
						value: 0,
						label: "Almost never (±0–2 days)"
					},
					{
						value: 1,
						label: "A little (±3–7 days)"
					},
					{
						value: 2,
						label: "Noticeably (±8–14 days)"
					},
					{
						value: 3,
						label: "A lot (14+ days)"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "In the last 6 months, how many periods did you miss entirely?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.missed,
				onChange: (v) => set("missed", v),
				options: [
					{
						value: 0,
						label: "0"
					},
					{
						value: 1,
						label: "1"
					},
					{
						value: 2,
						label: "2–3"
					},
					{
						value: 3,
						label: "4+"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Are you sexually active in a way that could result in pregnancy?",
			hint: "This matters because a missed period can mean pregnancy, not just irregularity.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.pregnancyContext,
				onChange: (v) => set("pregnancyContext", v),
				options: [
					{
						value: "none",
						label: "Not sexually active"
					},
					{
						value: "protected",
						label: "Yes — reliable contraception"
					},
					{
						value: "unprotected",
						label: "Yes — no / inconsistent contraception"
					},
					{
						value: "undisclosed",
						label: "Prefer not to say"
					}
				]
			})
		})
	] });
}
function Step3({ raw, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "Flow & pain"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "Details about bleeding and discomfort."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "How would you describe your flow?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.flow,
				onChange: (v) => set("flow", v),
				options: [
					{
						value: 0,
						label: "Light"
					},
					{
						value: 1,
						label: "Moderate"
					},
					{
						value: 2,
						label: "Heavy"
					},
					{
						value: 3,
						label: "Very heavy"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "On heavy days, how many pads or tampons do you use?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.flowObjective,
				onChange: (v) => set("flowObjective", v),
				options: [
					{
						value: 0,
						label: "0–3 per day"
					},
					{
						value: 1,
						label: "4–6 per day"
					},
					{
						value: 2,
						label: "7–9 per day"
					},
					{
						value: 3,
						label: "10+ per day"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Do you regularly pass large clots?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.clots,
				onChange: (v) => set("clots", v),
				options: [
					{
						value: 0,
						label: "No"
					},
					{
						value: 1,
						label: "Occasionally"
					},
					{
						value: 2,
						label: "Every cycle"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Period pain level (0 = none, 10 = unbearable)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				min: 0,
				max: 10,
				value: raw.painLevel,
				onChange: (v) => set("painLevel", v)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Does the pain stop you from your normal daily activities?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.painInterference,
				onChange: (v) => set("painInterference", v),
				options: [
					{
						value: 0,
						label: "Never"
					},
					{
						value: 1,
						label: "Sometimes"
					},
					{
						value: 2,
						label: "Most cycles"
					}
				]
			})
		})
	] });
}
function Step4({ raw, set }) {
	const toggle = (k) => set("sym", {
		...raw.sym,
		[k]: !raw.sym[k]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "Other symptoms"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "Select anything you've noticed regularly — not just during your period."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: SYMPTOMS$1.map((s) => {
				const on = raw.sym[s.key];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					type: "button",
					whileHover: { scale: 1.02 },
					whileTap: { scale: .97 },
					onClick: () => toggle(s.key),
					className: `flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm transition-colors ${on ? "border-transparent bg-gradient-to-br from-primary/90 to-[#a8446a]/90 text-white shadow-lg shadow-primary/20" : "border-hairline/50 bg-white/5 hover:bg-white/10 text-muted-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `flex h-5 w-5 flex-none items-center justify-center rounded-md transition-colors ${on ? "bg-white text-primary shadow-sm" : "border border-hairline/50 bg-black/20"}`,
						children: on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[12px] font-bold",
							children: "✓"
						})
					}), s.label]
				}, s.key);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 border-t border-hairline/30 pt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Family history",
				hint: "Select any that apply — genetics play a role in many cycle conditions.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [{
						key: "familyPCOS",
						label: "PCOS (mother / sister)"
					}, {
						key: "familyEndo",
						label: "Endometriosis (mother / sister)"
					}].map((f) => {
						const on = raw[f.key];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							type: "button",
							whileHover: { scale: 1.02 },
							whileTap: { scale: .97 },
							onClick: () => set(f.key, !on),
							className: `flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm transition-colors ${on ? "border-transparent bg-gradient-to-br from-primary/90 to-[#a8446a]/90 text-white shadow-lg shadow-primary/20" : "border-hairline/50 bg-white/5 hover:bg-white/10 text-muted-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `flex h-5 w-5 flex-none items-center justify-center rounded-md transition-colors ${on ? "bg-white text-primary shadow-sm" : "border border-hairline/50 bg-black/20"}`,
								children: on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[12px] font-bold",
									children: "✓"
								})
							}), f.label]
						}, f.key);
					})
				})
			})
		})
	] });
}
function Step5({ raw, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 font-serif text-2xl",
			children: "Lifestyle"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-sm text-muted-foreground",
			children: "Context that shapes hormonal balance."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Day-to-day stress level",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {
				min: 0,
				max: 10,
				value: raw.stressLevel,
				onChange: (v) => set("stressLevel", v)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Average sleep per night",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.sleep,
				onChange: (v) => set("sleep", v),
				options: [
					{
						value: 0,
						label: "7–9 hrs"
					},
					{
						value: 1,
						label: "6–7 hrs"
					},
					{
						value: 2,
						label: "Under 6 hrs"
					},
					{
						value: 3,
						label: "Irregular / shift"
					}
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "How often do you exercise?",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choices, {
				value: raw.exercise,
				onChange: (v) => set("exercise", v),
				options: [
					{
						value: 0,
						label: "Most days"
					},
					{
						value: 1,
						label: "A few times a week"
					},
					{
						value: 2,
						label: "Rarely"
					},
					{
						value: 3,
						label: "Intense training"
					}
				]
			})
		})
	] });
}
function Results({ saved, onRetake }) {
	const { scores } = saved;
	const overall = levelOf((scores.irregularity + scores.pcos + scores.dysmenorrhea + scores.anaemia + scores.stress) / 5);
	const highs = CATEGORIES.filter((c) => scores[c.key] >= 64).map((c) => c.name);
	const summary = highs.length === 0 ? "Nothing here crosses into the high-risk range. Keep tracking your cycle month to month." : highs.length === 1 ? `Everything looks steady except one area — ${highs[0]} — worth a conversation with a doctor.` : `${highs.length} areas scored in the high range: ${highs.join(", ")}. A solid checklist for your next doctor's visit.`;
	const recs = [];
	if (scores.pregnancyFlag) recs.push("Take a home pregnancy test first, then see a doctor regardless of result.");
	else if (scores.pregnancyWatch) recs.push("Rule out pregnancy with a home test before acting on the irregularity score.");
	if (scores.irregularity >= 34) recs.push("Track cycle start dates for 3 months and bring the log to your appointment.");
	if (scores.pcos >= 64) recs.push("Ask about a pelvic ultrasound and hormone panel (LH, FSH, testosterone).");
	else if (scores.pcos >= 34) recs.push("Mention skin/hair symptoms alongside cycle length at your next check-up.");
	if (scores.dysmenorrhea >= 64) recs.push("Persistent disruptive pain can indicate endometriosis — discuss directly.");
	if (scores.anaemia >= 64) recs.push("Ask for a haemoglobin / ferritin blood test.");
	else if (scores.anaemia >= 34) recs.push("Consider iron-rich foods and monitor fatigue during heavier days.");
	if (scores.stress >= 64) recs.push("Sleep and stress load are high enough to be affecting your cycle.");
	if (!recs.length) recs.push("No urgent flags — a routine annual check-up is still a good idea.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-6 py-16",
		children: [
			scores.pregnancyFlag && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 rounded-2xl border border-accent-gold/50 bg-accent-gold/10 p-6 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: "Possible pregnancy — please check this first."
					}),
					" ",
					"You reported a missed period and sexual activity without reliable contraception. Take a home pregnancy test now, and see a doctor regardless of the result."
				]
			}),
			!scores.pregnancyFlag && scores.pregnancyWatch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 rounded-2xl border border-hairline bg-bg-alt p-6 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: "Quick note:"
				}), " You reported a missed period. Rule out pregnancy with a home test before reading the irregularity score below as a cycle-disorder signal."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBloom, { scores })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest",
						style: { borderColor: overall.hex },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: { background: overall.hex }
							}),
							"Overall: ",
							overall.label,
							" attention"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif text-3xl md:text-4xl",
						children: "Your cycle risk snapshot"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: summary
					}),
					scores.ageNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-accent-gold-soft",
						children: ["Age context: ", scores.ageNote]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/ask",
							className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Ask Nari about my results"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/doctor",
							className: "inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold hover:border-accent-gold-soft hover:text-accent-gold-soft",
							children: "Prepare for a doctor visit"
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-2",
				children: CATEGORIES.map((c, i) => {
					const s = scores[c.key];
					const lvl = levelOf(s);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .1 + i * .07 },
						className: "glass-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-2xl font-semibold",
									style: { color: lvl.hex },
									children: s
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-3 inline-block rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest",
								style: {
									background: `${lvl.hex}22`,
									color: lvl.hex,
									borderColor: `${lvl.hex}55`
								},
								children: [lvl.label, " risk"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 overflow-hidden rounded-full bg-surface-light",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									animate: { width: `${s}%` },
									transition: {
										delay: .3 + i * .07,
										duration: .8
									},
									className: "h-full rounded-full",
									style: { background: lvl.hex }
								})
							})
						]
					}, c.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl border border-hairline bg-surface p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl",
					children: "Worth raising with a doctor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 pl-5 text-sm text-muted-foreground [&>li]:list-disc",
					children: recs.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r }, r))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl border border-high/40 bg-high/10 p-6 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: "This is not a medical diagnosis."
				}), " NariCare estimates likelihood patterns from self-reported answers. It cannot replace a consultation, ultrasound, or blood test. If any score reads \"High,\" or you're in pain right now, please speak with a gynaecologist."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onRetake,
					className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), " Retake assessment"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ask",
					className: "inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold hover:border-accent-gold-soft hover:text-accent-gold-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Discuss with Nari"]
				})]
			})
		]
	});
}
var STEP_NAMES;
var SYMPTOMS$1;
var emptyRaw;
var init_assessment$1 = __esmMin((() => {
	init_RiskBloom();
	init_scoring();
	init_storage();
	init_useAssessment();
	STEP_NAMES = [
		"Basics",
		"Regularity",
		"Flow & pain",
		"Symptoms",
		"Lifestyle"
	];
	SYMPTOMS$1 = [
		{
			key: "acne",
			label: "Persistent acne"
		},
		{
			key: "hirsutism",
			label: "Excess facial/body hair"
		},
		{
			key: "weightGain",
			label: "Unexplained weight gain"
		},
		{
			key: "hairThin",
			label: "Hair thinning"
		},
		{
			key: "fatigue",
			label: "Frequent fatigue"
		},
		{
			key: "dizziness",
			label: "Dizziness / breathlessness"
		},
		{
			key: "moodSwings",
			label: "Mood swings"
		},
		{
			key: "bloating",
			label: "Bloating"
		},
		{
			key: "breastTender",
			label: "Breast tenderness"
		},
		{
			key: "headache",
			label: "Recurring headaches"
		},
		{
			key: "nausea",
			label: "Nausea / vomiting during period"
		},
		{
			key: "backPain",
			label: "Lower back pain during period"
		},
		{
			key: "legPain",
			label: "Leg pain during period"
		},
		{
			key: "painBowel",
			label: "Pain during bowel movements"
		},
		{
			key: "painIntercourse",
			label: "Pain during intercourse"
		},
		{
			key: "pallor",
			label: "Pale skin / pale nails"
		},
		{
			key: "coldIntolerance",
			label: "Feeling unusually cold"
		},
		{
			key: "pica",
			label: "Craving ice / non-food items"
		},
		{
			key: "spotting",
			label: "Spotting between periods"
		}
	];
	emptyRaw = {
		age: 24,
		cycleLength: 28,
		periodLength: 5,
		variation: -1,
		missed: -1,
		pregnancyContext: null,
		flow: -1,
		flowObjective: -1,
		clots: -1,
		painLevel: 3,
		painInterference: -1,
		stressLevel: 4,
		sleep: -1,
		exercise: -1,
		height: -1,
		weight: -1,
		familyPCOS: false,
		familyEndo: false,
		sym: {
			acne: false,
			hirsutism: false,
			weightGain: false,
			hairThin: false,
			fatigue: false,
			dizziness: false,
			moodSwings: false,
			bloating: false,
			breastTender: false,
			headache: false,
			nausea: false,
			backPain: false,
			legPain: false,
			painBowel: false,
			painIntercourse: false,
			pallor: false,
			coldIntolerance: false,
			pica: false,
			spotting: false
		}
	};
}));
var $$splitComponentImporter$5;
var Route$6;
var init_assessment = __esmMin((() => {
	$$splitComponentImporter$5 = () => Promise.resolve().then(() => (init_assessment$1(), assessment_exports));
	Route$6 = createFileRoute("/assessment")({
		head: () => ({ meta: [
			{ title: "Cycle Risk Assessment · NariCare" },
			{
				name: "description",
				content: "A 3-minute private assessment of your menstrual health across 5 clinically-informed patterns: irregularity, PCOS, pain, anaemia risk, and stress load."
			},
			{
				property: "og:title",
				content: "Cycle Risk Assessment · NariCare"
			},
			{
				property: "og:description",
				content: "Answer 18 short questions, get a personal risk snapshot in under 3 minutes."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$5, "component")
	});
}));
var doctor_exports = /* @__PURE__ */ __exportAll({ component: () => DoctorPage });
function CheckableItem({ text, index, isQuestion = false }) {
	const [checked, setChecked] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { delay: index * .05 },
		onClick: () => setChecked(!checked),
		className: `group relative flex w-full items-start gap-3 rounded-xl p-3 text-left transition-all duration-300 ${checked ? "bg-white/5 opacity-60" : "hover:bg-white/5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border transition-colors ${checked ? "border-accent-gold-soft bg-accent-gold-soft text-primary" : isQuestion ? "border-accent-rose bg-accent-rose/10 text-accent-rose" : "border-muted-foreground/50 text-transparent group-hover:border-accent-gold-soft"}`,
			children: checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : isQuestion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-bold",
				children: "?"
			}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-sm transition-all duration-300 ${checked ? "text-muted-foreground" : "text-foreground"}`,
				children: text
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: checked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { scaleX: 0 },
				animate: { scaleX: 1 },
				exit: { scaleX: 0 },
				transition: {
					duration: .3,
					ease: "circOut"
				},
				className: "absolute left-0 top-1/2 h-px w-full origin-left bg-accent-gold-soft shadow-[0_0_8px_rgba(240,201,137,0.8)]"
			}) })]
		})]
	});
}
function DoctorPage() {
	const { assessment, ready } = useAssessment();
	const cached = !ready ? storage.getAssessments() : null;
	const a = ready ? assessment : cached && cached.length > 0 ? cached[0] : null;
	if (!ready && !a) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeaderSkeleton, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorSkeleton, {})
		})]
	});
	const tests = [];
	const questions = [];
	const bring = ["Your cycle tracker log (from NariCare or a paper diary)"];
	if (a) {
		const { scores, raw } = a;
		if (scores.pregnancyFlag) {
			tests.push("Urine or blood pregnancy test (β-hCG)");
			questions.push("Given my missed period and possibility of pregnancy, what's the safest first step?");
		}
		if (scores.anaemia >= 34) {
			tests.push("Full blood count (CBC)");
			tests.push("Serum ferritin (iron stores)");
			questions.push("My periods are heavy and I'm often tired — could I be iron-deficient?");
		}
		if (scores.pcos >= 34) {
			tests.push("Pelvic ultrasound (transabdominal or transvaginal)");
			tests.push("Hormone panel: LH, FSH, testosterone, SHBG, prolactin, TSH");
			tests.push("Fasting glucose & HbA1c (insulin resistance is common with PCOS)");
			questions.push("My cycle length is " + raw.cycleLength + " days with variation — could this be PCOS?");
		}
		if (scores.dysmenorrhea >= 64) {
			tests.push("Pelvic ultrasound to look for structural causes");
			questions.push("My period pain stops me from normal activities — could this be endometriosis?");
			questions.push("What options do I have beyond over-the-counter painkillers?");
		}
		if (scores.irregularity >= 34) questions.push("Given my cycle variation, is there a hormonal cause worth investigating?");
		if (scores.stress >= 64) questions.push("Could stress and sleep be significantly affecting my cycle — and what do you recommend?");
		bring.push(`Note: your last assessment showed ${CATEGORIES.filter((c) => scores[c.key] >= 64).map((c) => c.name).join(", ") || "no high-risk patterns"}`);
	} else {
		questions.push("General cycle-health check-up");
		tests.push("Full blood count + ferritin (baseline)");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: -10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "eyebrow justify-center",
						children: "Doctor visit prep"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: {
							opacity: 0,
							y: -10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .1 },
						className: "mt-4 font-serif text-3xl md:text-4xl",
						children: "Walk in prepared. Walk out with answers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .2 },
						className: "mt-3 text-muted-foreground",
						children: a ? "Based on your latest scores, here is an interactive checklist for your next appointment." : "Take the assessment first for a personalized checklist. General guidance below meanwhile."
					})
				]
			}),
			!a && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				className: "mx-auto mt-6 max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/assessment",
					className: "btn-primary-glow flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold",
					children: "Take the 3-min assessment"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 },
					className: "glass-panel p-7 relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-gold-soft to-accent-rose opacity-50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gold-soft/10 text-accent-gold-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: "Tests to Request"
							})]
						}),
						tests.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1",
							children: tests.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckableItem, {
								text: t,
								index: i
							}, t))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground p-3 bg-white/5 rounded-xl",
							children: "No specific tests flagged — a routine check is fine."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .2 },
					className: "glass-panel p-7 relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-rose to-accent-gold-soft opacity-50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-rose/10 text-accent-rose",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: "Questions to Ask"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1",
							children: questions.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckableItem, {
								text: q,
								index: i,
								isQuestion: true
							}, q))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: .3 },
				className: "mt-6 glass-panel p-7 flex flex-col md:flex-row md:items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-serif text-xl flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-accent-gold-soft" }), "What to bring"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: bring.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-gold-soft" }), b]
					}, b))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ask",
					className: "btn-primary-glow flex-none inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Ask Nari to expand"]
				})]
			})
		]
	});
}
var init_doctor$1 = __esmMin((() => {
	init_useAssessment();
	init_scoring();
	init_storage();
	init_page_skeleton();
}));
var $$splitComponentImporter$4;
var Route$5;
var init_doctor = __esmMin((() => {
	$$splitComponentImporter$4 = () => Promise.resolve().then(() => (init_doctor$1(), doctor_exports));
	Route$5 = createFileRoute("/doctor")({
		head: () => ({ meta: [{ title: "Doctor Visit Prep · NariCare" }, {
			name: "description",
			content: "A personalized checklist of tests, questions, and cycle data to bring to your gynaecologist — built from your NariCare assessment."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$4, "component")
	});
}));
var history_exports = /* @__PURE__ */ __exportAll({ component: () => HistoryPage });
function HistoryPage() {
	const [assessments, setAssessments] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setAssessments(storage.getAssessments().sort((a, b) => b.savedAt - a.savedAt));
		setReady(true);
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-4xl px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListSkeleton, { rows: 4 })
		})
	});
	if (assessments.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] flex-col items-center justify-center px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-panel max-w-md p-10 relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-gold-soft to-accent-rose" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-hairline/50 mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-7 w-7 text-accent-gold-soft" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl mb-3",
					children: "No History Yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mb-8 leading-relaxed",
					children: "You haven't completed any assessments yet. Take your first assessment to start building your health timeline."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/assessment",
					className: "btn-primary-glow inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold",
					children: "Take Assessment"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "eyebrow justify-center",
					children: "Your Timeline"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 },
					className: "mt-4 font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-accent-gold-soft to-accent-rose pb-2",
					children: "Assessment History"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .2 },
					className: "mt-2 text-muted-foreground",
					children: "Track your cycle risk scores over time."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 space-y-4",
			children: assessments.map((a, i) => {
				const date = new Date(a.savedAt).toLocaleDateString("en-US", {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric"
				});
				const overall = levelOf((a.scores.irregularity + a.scores.pcos + a.scores.dysmenorrhea + a.scores.anaemia + a.scores.stress) / 5);
				const isOpen = openId === a.savedAt;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: i * .1 },
					className: "glass-panel overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpenId(isOpen ? null : a.savedAt),
						className: "flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-white/[0.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden h-12 w-12 flex-none items-center justify-center rounded-2xl bg-white/5 border border-hairline/50 text-accent-gold-soft sm:flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl",
								children: date
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-2 w-2 rounded-full",
									style: {
										background: overall.hex,
										boxShadow: `0 0 10px ${overall.hex}88`
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono uppercase tracking-widest text-muted-foreground",
									children: ["Overall: ", overall.label]
								})]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { rotate: isOpen ? 180 : 0 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5 text-muted-foreground" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							height: 0,
							opacity: 0
						},
						animate: {
							height: "auto",
							opacity: 1
						},
						exit: {
							height: 0,
							opacity: 0
						},
						transition: {
							type: "spring",
							bounce: .2,
							duration: .6
						},
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-hairline/50 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center bg-black/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-none scale-90 md:scale-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBloom, { scores: a.scores })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 w-full grid gap-4 sm:grid-cols-2",
								children: CATEGORIES.map((c) => {
									const s = a.scores[c.key];
									const lvl = levelOf(s);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass-card p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-2 flex items-start justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-serif text-sm",
												children: c.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-lg font-semibold",
												style: { color: lvl.hex },
												children: s
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-1 overflow-hidden rounded-full bg-white/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: { width: 0 },
												animate: { width: `${s}%` },
												transition: {
													delay: .2,
													duration: .8
												},
												className: "h-full rounded-full",
												style: { background: lvl.hex }
											})
										})]
									}, c.key);
								})
							})]
						})
					}) })]
				}, a.savedAt);
			})
		})]
	});
}
var init_history$1 = __esmMin((() => {
	init_storage();
	init_scoring();
	init_RiskBloom();
	init_page_skeleton();
}));
var $$splitComponentImporter$3;
var Route$4;
var init_history = __esmMin((() => {
	$$splitComponentImporter$3 = () => Promise.resolve().then(() => (init_history$1(), history_exports));
	Route$4 = createFileRoute("/history")({
		head: () => ({ meta: [{ title: "Assessment History · NariCare" }, {
			name: "description",
			content: "View your past cycle risk assessments and track your health journey over time."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$3, "component")
	});
}));
var tracker_exports = /* @__PURE__ */ __exportAll({ component: () => TrackerPage });
function today() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function TrackerPage() {
	const { entries, add, remove, ready } = useTracker();
	const [date, setDate] = (0, import_react.useState)(today());
	const [flow, setFlow] = (0, import_react.useState)("light");
	const [pain, setPain] = (0, import_react.useState)(2);
	const [mood, setMood] = (0, import_react.useState)("good");
	const [symptoms, setSymptoms] = (0, import_react.useState)([]);
	const [note, setNote] = (0, import_react.useState)("");
	const periods = (0, import_react.useMemo)(() => {
		const flowDays = entries.filter((e) => e.flow !== "none").map((e) => e.date).sort();
		const groups = [];
		for (const d of flowDays) {
			const last = groups[groups.length - 1];
			if (!last) {
				groups.push([d]);
				continue;
			}
			const prev = new Date(last[last.length - 1]);
			if ((new Date(d).getTime() - prev.getTime()) / 864e5 <= 2) last.push(d);
			else groups.push([d]);
		}
		return groups;
	}, [entries]);
	const nextPeriod = (0, import_react.useMemo)(() => {
		if (periods.length < 2) return null;
		const starts = periods.map((g) => new Date(g[0]));
		const gaps = [];
		for (let i = 1; i < starts.length; i++) gaps.push((starts[i].getTime() - starts[i - 1].getTime()) / 864e5);
		const avg = gaps.reduce((a, b) => a + b, 0) / gaps.length;
		const last = starts[starts.length - 1];
		return {
			date: new Date(last.getTime() + avg * 864e5).toISOString().slice(0, 10),
			avg: Math.round(avg)
		};
	}, [periods]);
	const submit = () => {
		add({
			date,
			flow,
			pain,
			mood,
			symptoms,
			note: note || void 0
		});
		toast.success("Entry saved", { description: `${date} — ${flow} flow, pain ${pain}/10` });
		setNote("");
		setSymptoms([]);
	};
	const toggleSym = (s) => setSymptoms((cur) => cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "eyebrow justify-center",
					children: "Cycle Tracker"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 },
					className: "mt-4 font-serif text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-accent-gold-soft to-accent-rose pb-2",
					children: "Log today. See tomorrow."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .2 },
					className: "mt-2 text-muted-foreground",
					children: "Everything is stored on this device only."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "glass-panel p-7 md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-xl",
					children: "Log an entry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: date,
							onChange: (e) => setDate(e.target.value),
							className: "w-full rounded-xl border border-hairline/50 bg-white/5 px-4 py-3 text-sm focus:border-accent-gold-soft focus:outline-none focus:ring-1 focus:ring-accent-gold-soft transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Flow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-2",
							children: FLOW_OPTIONS.map((f) => {
								const active = flow === f;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileHover: { scale: 1.03 },
									whileTap: { scale: .95 },
									onClick: () => setFlow(f),
									className: `relative rounded-xl px-2 py-3 text-xs capitalize transition-colors ${active ? "bg-gradient-to-br from-primary to-[#a8446a] text-white shadow-lg shadow-primary/30" : "bg-white/5 hover:bg-white/10 text-muted-foreground border border-hairline/30"}`,
									children: f
								}, f);
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: [
								"Pain (",
								pain,
								"/10)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 10,
							value: pain,
							onChange: (e) => setPain(Number(e.target.value)),
							className: "w-full accent-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Mood"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-5 gap-2",
							children: MOOD_OPTIONS.map((m) => {
								const active = mood === m;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileHover: { scale: 1.03 },
									whileTap: { scale: .95 },
									onClick: () => setMood(m),
									className: `relative rounded-xl px-2 py-3 text-xs capitalize transition-colors ${active ? "bg-gradient-to-br from-accent-gold to-accent-gold-soft text-surface font-semibold shadow-lg shadow-accent-gold/30" : "bg-white/5 hover:bg-white/10 text-muted-foreground border border-hairline/30"}`,
									children: m
								}, m);
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Symptoms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: SYMPTOMS.map((s) => {
								const active = symptoms.includes(s);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileHover: { scale: 1.03 },
									whileTap: { scale: .95 },
									onClick: () => toggleSym(s),
									className: `rounded-full border px-4 py-1.5 text-xs transition-colors ${active ? "border-transparent bg-primary text-white shadow-md shadow-primary/20" : "border-hairline hover:border-accent-gold-soft/50 text-muted-foreground bg-white/5"}`,
									children: s
								}, s);
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Note (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: note,
							onChange: (e) => setNote(e.target.value),
							rows: 2,
							className: "w-full resize-none rounded-xl border border-hairline/50 bg-white/5 px-4 py-3 text-sm focus:border-accent-gold-soft focus:outline-none focus:ring-1 focus:ring-accent-gold-soft transition-all",
							placeholder: "Anything else?"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: submit,
							className: "btn-primary-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Save entry"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .1,
							duration: .5,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "glass-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }), " Periods logged"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-serif text-4xl",
								children: periods.length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Total distinct cycles recorded"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .2,
							duration: .5,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "glass-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5" }), " Next predicted"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-serif text-2xl",
								children: nextPeriod ? nextPeriod.date : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: nextPeriod ? `Avg cycle ${nextPeriod.avg} days` : "Log 2+ periods to predict"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg",
						children: "Recent entries"
					}), !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListSkeleton, { rows: 4 })
					}) : entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "No entries yet. Add today's to get started."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
						layout: true,
						className: "mt-4 space-y-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							initial: false,
							children: [...entries].reverse().slice(0, 12).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								layout: true,
								initial: {
									opacity: 0,
									x: -20,
									height: 0
								},
								animate: {
									opacity: 1,
									x: 0,
									height: "auto"
								},
								exit: {
									opacity: 0,
									scale: .8,
									height: 0
								},
								transition: {
									type: "spring",
									bounce: .3
								},
								className: "flex items-center justify-between rounded-2xl border border-hairline/50 bg-white/5 px-5 py-4 text-sm backdrop-blur-sm overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-xs uppercase tracking-widest text-accent-gold-soft",
										children: e.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 font-medium text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "capitalize",
												children: [e.flow, " flow"]
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground px-1",
												children: "•"
											}),
											" Pain ",
											e.pain,
											"/10",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground px-1",
												children: "•"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "capitalize",
												children: e.mood
											})
										]
									}),
									e.symptoms.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 text-[11px] text-muted-foreground/80",
										children: e.symptoms.join(", ")
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									whileHover: {
										scale: 1.1,
										rotate: 10
									},
									whileTap: { scale: .9 },
									onClick: () => remove(e.id),
									className: "rounded-full p-2.5 text-muted-foreground hover:bg-destructive/20 hover:text-destructive transition-colors",
									"aria-label": "Delete",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})]
							}, e.id))
						})
					})]
				})]
			})]
		})]
	});
}
var FLOW_OPTIONS;
var MOOD_OPTIONS;
var SYMPTOMS;
var init_tracker$1 = __esmMin((() => {
	init_useTracker();
	init_page_skeleton();
	FLOW_OPTIONS = [
		"none",
		"light",
		"moderate",
		"heavy"
	];
	MOOD_OPTIONS = [
		"great",
		"good",
		"meh",
		"low",
		"awful"
	];
	SYMPTOMS = [
		"cramps",
		"bloating",
		"headache",
		"fatigue",
		"mood swings",
		"acne",
		"breast tenderness"
	];
}));
var $$splitComponentImporter$2;
var Route$3;
var init_tracker = __esmMin((() => {
	$$splitComponentImporter$2 = () => Promise.resolve().then(() => (init_tracker$1(), tracker_exports));
	Route$3 = createFileRoute("/tracker")({
		head: () => ({ meta: [
			{ title: "Cycle Tracker · NariCare" },
			{
				name: "description",
				content: "Log your periods, flow, pain and mood. See patterns and next-period predictions — all private, all in your browser."
			},
			{
				property: "og:title",
				content: "Cycle Tracker · NariCare"
			},
			{
				property: "og:description",
				content: "Log periods and see your patterns, privately."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$2, "component")
	});
}));
var Route$2;
var init_chat = __esmMin((() => {
	init_context();
	Route$2 = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
		try {
			const body = await request.json();
			const messages = body.messages;
			if (!Array.isArray(messages)) return new Response(JSON.stringify({ error: "messages required" }), {
				status: 400,
				headers: { "content-type": "application/json" }
			});
			const apiKey = process.env.GROQ_API_KEY;
			if (!apiKey) return new Response(JSON.stringify({ error: "Nari's AI engine isn't configured yet. The developer needs to add a GROQ_API_KEY environment variable." }), {
				status: 503,
				headers: { "content-type": "application/json" }
			});
			const groq = createOpenAICompatible({
				name: "groq",
				baseURL: "https://api.groq.com/openai/v1",
				apiKey
			});
			const system = body.healthContext ? `${SYSTEM_PROMPT}\n\n=== HEALTH CONTEXT (user's own data) ===\n${body.healthContext}\n=== END CONTEXT ===` : SYSTEM_PROMPT;
			return streamText({
				model: groq("llama-3.3-70b-versatile"),
				system,
				messages: convertToModelMessages(messages),
				temperature: .6
			}).toUIMessageStreamResponse();
		} catch (err) {
			const message = err instanceof Error ? err.message : "Unexpected error";
			return new Response(JSON.stringify({ error: `Nari hit an error: ${message}. Please try again.` }), {
				status: 500,
				headers: { "content-type": "application/json" }
			});
		}
	} } } });
}));
function ChatLockdown() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "glass-panel max-w-md text-center p-10 relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-gold-soft to-accent-rose" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-hairline/50 mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-7 w-7 text-accent-gold-soft" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl mb-3",
					children: "Unlock Nari"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mb-8 leading-relaxed",
					children: "To provide you with safe, personalized, and highly accurate guidance, Nari needs a baseline understanding of your cycle. Please take the 3-minute health assessment to unlock your private AI companion."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/assessment",
					className: "btn-primary-glow inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold",
					children: "Take the assessment"
				})
			]
		})
	});
}
var init_ChatLockdown = __esmMin((() => {}));
var ask_index_exports = /* @__PURE__ */ __exportAll({ component: () => AskIndex });
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
var init_ask_index$1 = __esmMin((() => {
	init_useThreads();
	init_storage();
	init_ChatLockdown();
	init_page_skeleton();
}));
var $$splitComponentImporter$1;
var Route$1;
var init_ask_index = __esmMin((() => {
	$$splitComponentImporter$1 = () => Promise.resolve().then(() => (init_ask_index$1(), ask_index_exports));
	Route$1 = createFileRoute("/ask/")({
		head: () => ({ meta: [
			{ title: "Ask Nari · Your AI health companion" },
			{
				name: "description",
				content: "Chat with Nari, an AI trained on women's cycle and reproductive health. Personalized to your NariCare assessment and cycle log."
			},
			{
				property: "og:title",
				content: "Ask Nari · Your AI health companion"
			},
			{
				property: "og:description",
				content: "Chat with an AI that knows your cycle context."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$1, "component")
	});
}));
var ask_$threadId_exports = /* @__PURE__ */ __exportAll({ component: () => AskThread });
function AskThread() {
	const { threadId } = Route.useParams();
	const { threads, ready, create, remove, setMessages } = useThreads();
	const navigate = useNavigate();
	const thread = (0, import_react.useMemo)(() => threads.find((t) => t.id === threadId) ?? {
		id: threadId,
		title: "New conversation",
		updatedAt: Date.now(),
		messages: []
	}, [threads, threadId]);
	const handleMessages = (0, import_react.useCallback)((msgs) => {
		if (msgs.length === 0) return;
		setMessages(threadId, msgs);
	}, [threadId, setMessages]);
	const newThread = () => {
		const t = create();
		navigate({
			to: "/ask/$threadId",
			params: { threadId: t.id }
		});
	};
	const deleteThread = (id) => {
		remove(id);
		if (id === threadId) {
			const rest = threads.filter((t) => t.id !== id);
			if (rest.length) navigate({
				to: "/ask/$threadId",
				params: { threadId: rest[0].id }
			});
			else {
				const t = create();
				navigate({
					to: "/ask/$threadId",
					params: { threadId: t.id }
				});
			}
		}
	};
	if (ready && storage.getAssessments().length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatLockdown, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow justify-center",
				children: "Ask Nari"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-accent-gold-soft to-accent-rose pb-1",
				children: "Your private AI health companion"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-[260px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "glass-card flex flex-col overflow-hidden md:h-[640px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-hairline/50 p-4 bg-black/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: newThread,
						className: "btn-primary-glow flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-transform active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New chat"]
					})
				}), ready && threads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-4 text-xs text-muted-foreground",
					children: "No conversations yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide",
					children: threads.map((t) => {
						const active = t.id === threadId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `group flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-300 ${active ? "bg-accent-gold-soft/10 border border-accent-gold-soft/20 shadow-[0_0_15px_rgba(240,201,137,0.05)]" : "border border-transparent hover:bg-white/5 hover:border-white/10"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/ask/$threadId",
								params: { threadId: t.id },
								className: "flex min-w-0 flex-1 items-center gap-3 text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors ${active ? "bg-accent-gold-soft/20 text-accent-gold-soft" : "bg-white/5 text-muted-foreground group-hover:text-foreground"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `truncate transition-colors ${active ? "text-accent-gold-soft font-medium" : "text-muted-foreground group-hover:text-foreground"}`,
									children: t.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => deleteThread(t.id),
								className: "flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground/50 opacity-0 transition-all hover:bg-destructive/20 hover:text-destructive group-hover:opacity-100",
								"aria-label": "Delete thread",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						}) }, t.id);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass-card overflow-hidden md:h-[640px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWindow, {
					thread,
					onMessagesChanged: handleMessages
				}, thread.id)
			})]
		})]
	});
}
var init_ask_$threadId$1 = __esmMin((() => {
	init_useThreads();
	init_ChatWindow();
	init_ChatLockdown();
	init_storage();
	init_ask_$threadId();
}));
var $$splitComponentImporter;
var Route;
var init_ask_$threadId = __esmMin((() => {
	$$splitComponentImporter = () => Promise.resolve().then(() => (init_ask_$threadId$1(), ask_$threadId_exports));
	Route = createFileRoute("/ask/$threadId")({
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
}));
var IndexRoute;
var AssessmentRoute;
var DoctorRoute;
var HistoryRoute;
var TrackerRoute;
var ApiChatRoute;
var AskIndexRoute;
var rootRouteChildren;
var routeTree;
var init_routeTree_gen = __esmMin((() => {
	init___root();
	init_routes();
	init_assessment();
	init_doctor();
	init_history();
	init_tracker();
	init_chat();
	init_ask_index();
	init_ask_$threadId();
	IndexRoute = Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	});
	AssessmentRoute = Route$6.update({
		id: "/assessment",
		path: "/assessment",
		getParentRoute: () => Route$8
	});
	DoctorRoute = Route$5.update({
		id: "/doctor",
		path: "/doctor",
		getParentRoute: () => Route$8
	});
	HistoryRoute = Route$4.update({
		id: "/history",
		path: "/history",
		getParentRoute: () => Route$8
	});
	TrackerRoute = Route$3.update({
		id: "/tracker",
		path: "/tracker",
		getParentRoute: () => Route$8
	});
	ApiChatRoute = Route$2.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$8
	});
	AskIndexRoute = Route$1.update({
		id: "/ask/",
		path: "/ask/",
		getParentRoute: () => Route$8
	});
	rootRouteChildren = {
		IndexRoute,
		AssessmentRoute,
		DoctorRoute,
		HistoryRoute,
		TrackerRoute,
		ApiChatRoute,
		AskThreadIdRoute: Route.update({
			id: "/ask/$threadId",
			path: "/ask/$threadId",
			getParentRoute: () => Route$8
		}),
		AskIndexRoute
	};
	routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
}));
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter;
var init_router = __esmMin((() => {
	init_routeTree_gen();
	getRouter = () => {
		return createRouter({
			routeTree,
			context: { queryClient: new QueryClient() },
			scrollRestoration: true,
			defaultPreloadStaleTime: 0
		});
	};
}));
var init_esm$2 = __esmMin((() => {
	init_esm$3();
	init_esm$3();
}));
var start_exports = /* @__PURE__ */ __exportAll({ startInstance: () => startInstance });
var errorMiddleware;
var startInstance;
var init_start = __esmMin((() => {
	init_esm$2();
	init_page();
	errorMiddleware = createMiddleware().server(async ({ next }) => {
		try {
			return await next();
		} catch (error) {
			if (error instanceof Response) throw error;
			if (isRedirect(error) || isNotFound(error)) throw error;
			if (error != null && typeof error === "object" && "statusCode" in error) throw error;
			console.error(error);
			return new Response(renderErrorPage(error), {
				status: 500,
				headers: { "content-type": "text/html; charset=utf-8" }
			});
		}
	});
	startInstance = createStart(() => ({ requestMiddleware: [errorMiddleware] }));
}));
var empty_plugin_adapters_exports = /* @__PURE__ */ __exportAll({
	hasPluginAdapters: () => false,
	pluginSerializationAdapters: () => pluginSerializationAdapters
});
var pluginSerializationAdapters;
var init_empty_plugin_adapters = __esmMin((() => {
	pluginSerializationAdapters = [];
}));
function getStartResponseHeaders(opts) {
	return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ...opts.router.stores.matches.get().map((match) => {
		return match.headers;
	}));
}
async function loadEntries() {
	const [routerEntry, startEntry, pluginAdapters] = await Promise.all([
		Promise.resolve().then(() => (init_router(), router_exports)),
		Promise.resolve().then(() => (init_start(), start_exports)),
		Promise.resolve().then(() => (init_empty_plugin_adapters(), empty_plugin_adapters_exports))
	]);
	return {
		routerEntry,
		startEntry,
		pluginAdapters
	};
}
function getEntries() {
	if (!entriesPromise) entriesPromise = loadEntries();
	return entriesPromise;
}
function throwRouteHandlerError() {
	throw new Error(ERR_NO_RESPONSE);
}
function throwIfMayNotDefer() {
	throw new Error(ERR_NO_DEFER);
}
/**
* Check if a value is a special response (Response or Redirect)
*/
function isSpecialResponse(value) {
	return value instanceof Response || isRedirect(value);
}
/**
* Normalize middleware result to context shape
*/
function handleCtxResult(result) {
	if (isSsrResponse(result) || isSpecialResponse(result)) return { response: result };
	return result;
}
/**
* Execute a middleware chain
*/
async function executeMiddleware(middlewares, ctx) {
	let index = -1;
	let streamResponse;
	const setResponse = (response) => {
		if (isSsrResponse(response)) {
			if (response.serverSsrCleanup === "stream") streamResponse = response;
			ctx.response = response.response;
			return;
		}
		ctx.response = response;
	};
	const disposeStreamResponse = async (reason) => {
		const response = streamResponse;
		if (!response) return;
		streamResponse = void 0;
		const currentResponse = ctx.response;
		if (currentResponse === response.response || currentResponse instanceof Response && response.response.body !== null && currentResponse.body === response.response.body) ctx.response = void 0;
		await response.dispose(reason);
	};
	const getFinalResponse = async () => {
		const response = ctx.response;
		if (!response) throwRouteHandlerError();
		if (!streamResponse) return response;
		if (response === streamResponse.response) return streamResponse;
		if (streamResponse.response.body !== null && response.body === streamResponse.response.body) return {
			...streamResponse,
			response
		};
		await disposeStreamResponse("middleware response replaced");
		return response;
	};
	const next = async (nextCtx) => {
		if (nextCtx) {
			if (nextCtx.context) ctx.context = safeObjectMerge(ctx.context, nextCtx.context);
			for (const key of Object.keys(nextCtx)) if (key === "response") setResponse(nextCtx.response);
			else if (key !== "context") ctx[key] = nextCtx[key];
		}
		index++;
		const middleware = middlewares[index];
		if (!middleware) return ctx;
		let result;
		try {
			result = await middleware({
				...ctx,
				next
			});
		} catch (err) {
			if (isSpecialResponse(err)) {
				setResponse(err);
				return ctx;
			}
			await disposeStreamResponse("middleware error");
			throw err;
		}
		const normalized = handleCtxResult(result);
		if (normalized) {
			if (normalized.response !== void 0) setResponse(normalized.response);
			if (normalized.context) ctx.context = safeObjectMerge(ctx.context, normalized.context);
		}
		return ctx;
	};
	await next();
	return {
		ctx,
		response: await getFinalResponse()
	};
}
/**
* Wrap a route handler as middleware
*/
function handlerToMiddleware(handler, mayDefer = false) {
	if (mayDefer) return handler;
	return async (ctx) => {
		const response = await handler({
			...ctx,
			next: throwIfMayNotDefer
		});
		if (!response) throwRouteHandlerError();
		return response;
	};
}
/**
* Creates the TanStack Start request handler.
*
* @example Backwards-compatible usage (handler callback only):
* ```ts
* export default createStartHandler(defaultStreamHandler)
* ```
*
* @example With CDN URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: 'https://cdn.example.com',
* })
* ```
*
* @example With per-request URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: {
*     transform: ({ url }) => {
*       const cdnBase = getRequest().headers.get('x-cdn-base') || ''
*       return { href: `${cdnBase}${url}` }
*     },
*     cache: false,
*   },
* })
* ```
*/
function createStartHandler(cbOrOptions) {
	const handlerOptions = typeof cbOrOptions === "function" ? {} : cbOrOptions;
	const cb = typeof cbOrOptions === "function" ? cbOrOptions : cbOrOptions.handler;
	const finalManifestResolver = createFinalManifestResolver({
		...handlerOptions,
		cacheCreateTransform: true
	});
	const resolveManifestForRequest = finalManifestResolver.resolveCached;
	finalManifestResolver.warmup({ getBaseManifest: () => getBaseManifest(void 0) });
	const startRequestResolver = async (request, requestOpts) => {
		let router = null;
		let responseOwnsCleanup = false;
		try {
			const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);
			const href = url.pathname + url.search + url.hash;
			const origin = getOrigin(request);
			if (handledProtocolRelativeURL) return Response.redirect(url, 308);
			const entries = await getEntries();
			const hasStartInstance = !!entries.startEntry.startInstance;
			const startOptions = await entries.startEntry.startInstance?.getOptions() || {};
			const { hasPluginAdapters, pluginSerializationAdapters } = entries.pluginAdapters;
			const serializationAdapters = [
				...startOptions.serializationAdapters || [],
				...hasPluginAdapters ? pluginSerializationAdapters : [],
				ServerFunctionSerializationAdapter
			];
			const requestStartOptions = {
				...startOptions,
				requestMiddleware: hasStartInstance ? startOptions.requestMiddleware : [defaultCsrfMiddleware],
				serializationAdapters
			};
			const flattenedRequestMiddlewares = requestStartOptions.requestMiddleware ? flattenMiddlewares(requestStartOptions.requestMiddleware) : [];
			const executedRequestMiddlewares = new Set(flattenedRequestMiddlewares);
			const getRouter = async () => {
				if (router) return router;
				router = await entries.routerEntry.getRouter();
				let isShell = IS_SHELL_ENV;
				if (IS_PRERENDERING && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
				const history = createMemoryHistory({ initialEntries: [href] });
				router.update({
					history,
					isShell,
					isPrerendering: IS_PRERENDERING,
					origin: router.options.origin ?? origin,
					defaultSsr: requestStartOptions.defaultSsr,
					serializationAdapters: [...requestStartOptions.serializationAdapters, ...router.options.serializationAdapters || []],
					basepath: ROUTER_BASEPATH
				});
				return router;
			};
			if (SERVER_FN_BASE && url.pathname.startsWith(SERVER_FN_BASE)) {
				const serverFnId = url.pathname.slice(SERVER_FN_BASE.length).split("/")[0];
				if (!serverFnId) throw new Error("Invalid server action param for serverFnId");
				const serverFnHandler = async ({ context }) => {
					return runWithStartContext({
						getRouter,
						startOptions: requestStartOptions,
						contextAfterGlobalMiddlewares: context,
						request,
						executedRequestMiddlewares,
						handlerType: "serverFn"
					}, () => handleServerAction({
						request,
						context: requestOpts?.context,
						serverFnId
					}));
				};
				const { response: middlewareResponse } = await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), serverFnHandler], {
					request,
					pathname: url.pathname,
					handlerType: "serverFn",
					context: createNullProtoObject(requestOpts?.context)
				});
				const result = await handleRedirectResponse(middlewareResponse, request, getRouter);
				responseOwnsCleanup = result.serverSsrCleanup === "stream";
				return result.response;
			}
			const executeRouter = async (serverContext, matchedRoutes) => {
				const acceptParts = (request.headers.get("Accept") || "*/*").split(",");
				if (!["*/*", "text/html"].some((mimeType) => acceptParts.some((part) => part.trim().startsWith(mimeType)))) return normalizeSsrResponse(Response.json({ error: "Only HTML requests are supported here" }, { status: 500 }));
				const manifest = await resolveManifestForRequest({
					request,
					requestInlineCss: requestOpts?.inlineCss,
					getBaseManifest: () => getBaseManifest(matchedRoutes)
				});
				const earlyHints = createEarlyHintsForRequest({
					onEarlyHints: requestOpts?.onEarlyHints,
					responseLinkHeader: requestOpts?.responseLinkHeader
				});
				earlyHints?.collectStatic({
					manifest,
					matchedRoutes
				});
				const routerInstance = await getRouter();
				attachRouterServerSsrUtils({
					router: routerInstance,
					manifest,
					getRequestAssets: () => getStartContext({ throwIfNotFound: false })?.requestAssets
				});
				routerInstance.options.additionalContext = { serverContext };
				await routerInstance.load();
				if (routerInstance.state.redirect) return normalizeSsrResponse(routerInstance.state.redirect);
				earlyHints?.collectDynamic(routerInstance.stores.matches.get());
				const ctx = getStartContext({ throwIfNotFound: false });
				await routerInstance.serverSsr.dehydrate({ requestAssets: ctx?.requestAssets });
				const responseHeaders = getStartResponseHeaders({ router: routerInstance });
				earlyHints?.appendResponseHeaders(responseHeaders);
				return normalizeSsrResponse(await cb({
					request,
					router: routerInstance,
					responseHeaders
				}));
			};
			const requestHandlerMiddleware = async ({ context }) => {
				return runWithStartContext({
					getRouter,
					startOptions: requestStartOptions,
					contextAfterGlobalMiddlewares: context,
					request,
					executedRequestMiddlewares,
					handlerType: "router"
				}, async () => {
					try {
						return await handleServerRoutes({
							getRouter,
							request,
							url,
							executeRouter,
							context,
							executedRequestMiddlewares
						});
					} catch (err) {
						if (err instanceof Response) return err;
						throw err;
					}
				});
			};
			const { response: middlewareResponse } = await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), requestHandlerMiddleware], {
				request,
				pathname: url.pathname,
				handlerType: "router",
				context: createNullProtoObject(requestOpts?.context)
			});
			const response = await handleRedirectResponse(middlewareResponse, request, getRouter);
			responseOwnsCleanup = response.serverSsrCleanup === "stream";
			return response.response;
		} finally {
			if (router?.serverSsr && !responseOwnsCleanup) router.serverSsr.cleanup();
			router = null;
		}
	};
	return requestHandler(startRequestResolver);
}
async function handleRedirectResponse(response, request, getRouter) {
	const ssrResponse = normalizeSsrResponse(response);
	if (!isRedirect(ssrResponse.response)) return ssrResponse;
	if (isResolvedRedirect(ssrResponse.response)) {
		if (request.headers.get("x-tsr-serverFn") === "true") return replaceSsrResponse(ssrResponse, Response.json({
			...ssrResponse.response.options,
			isSerializedRedirect: true
		}, { headers: ssrResponse.response.headers }), "redirect response replaced");
		return ssrResponse;
	}
	const opts = ssrResponse.response.options;
	if (opts.to && typeof opts.to === "string" && !opts.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(opts)}`);
	if ([
		"params",
		"search",
		"hash"
	].some((d) => typeof opts[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(opts).filter((d) => typeof opts[d] === "function").map((d) => `"${d}"`).join(", ")}`);
	const redirect = (await getRouter()).resolveRedirect(ssrResponse.response);
	if (request.headers.get("x-tsr-serverFn") === "true") return replaceSsrResponse(ssrResponse, Response.json({
		...ssrResponse.response.options,
		isSerializedRedirect: true
	}, { headers: ssrResponse.response.headers }), "redirect response replaced");
	return replaceSsrResponse(ssrResponse, redirect, "redirect response replaced");
}
async function handleServerRoutes({ getRouter, request, url, executeRouter, context, executedRequestMiddlewares }) {
	const router = await getRouter();
	const pathname = executeRewriteInput(router.rewrite, url).pathname;
	const { matchedRoutes, foundRoute, routeParams } = router.getMatchedRoutes(pathname);
	const isExactMatch = foundRoute && routeParams["**"] === void 0;
	const routeMiddlewares = [];
	for (const route of matchedRoutes) {
		const serverMiddleware = route.options.server?.middleware;
		if (serverMiddleware) {
			const flattened = flattenMiddlewares(serverMiddleware);
			for (const m of flattened) if (!executedRequestMiddlewares.has(m)) routeMiddlewares.push(m.options.server);
		}
	}
	const server = foundRoute?.options.server;
	let isHeadFallback = false;
	if (server?.handlers && isExactMatch) {
		const handlers = typeof server.handlers === "function" ? server.handlers({ createHandlers: (d) => d }) : server.handlers;
		const requestMethod = request.method.toUpperCase();
		const handler = requestMethod === "HEAD" ? handlers["HEAD"] ?? handlers["GET"] ?? handlers["ANY"] : handlers[requestMethod] ?? handlers["ANY"];
		isHeadFallback = requestMethod === "HEAD" && handler !== void 0 && !handlers["HEAD"];
		if (handler) {
			const mayDefer = !!foundRoute.options.component;
			if (typeof handler === "function") routeMiddlewares.push(handlerToMiddleware(handler, mayDefer));
			else {
				if (handler.middleware?.length) {
					const handlerMiddlewares = flattenMiddlewares(handler.middleware);
					for (const m of handlerMiddlewares) routeMiddlewares.push(m.options.server);
				}
				if (handler.handler) routeMiddlewares.push(handlerToMiddleware(handler.handler, mayDefer));
			}
		}
	}
	routeMiddlewares.push(((ctx) => executeRouter(ctx.context, matchedRoutes)));
	const { ctx, response } = await executeMiddleware(routeMiddlewares, {
		request,
		context,
		params: routeParams,
		pathname,
		handlerType: "router"
	});
	if (isHeadFallback) {
		if (!ctx.response) throwRouteHandlerError();
		return stripSsrResponseBody(await handleRedirectResponse(response, request, getRouter), "HEAD body stripped");
	}
	return normalizeSsrResponse(response);
}
var entriesPromise;
var defaultCsrfMiddleware;
var getCachedBaseManifest;
var getProdBaseManifest;
var getBaseManifest;
var createEarlyHintsForRequest;
var ROUTER_BASEPATH;
var SERVER_FN_BASE;
var IS_PRERENDERING;
var IS_SHELL_ENV;
var IS_DEV;
var ERR_NO_RESPONSE;
var ERR_NO_DEFER;
var init_createStartHandler = __esmMin((() => {
	init_request_response();
	init_router_manifest();
	init_server_functions_handler();
	init_early_hints();
	init_finalManifest();
	init_constants$1();
	init_ServerFunctionSerializationAdapter();
	init_esm$3();
	init_esm$4();
	defaultCsrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
	getCachedBaseManifest = createCachedBaseManifestLoader(() => getStartManifest());
	getProdBaseManifest = () => getCachedBaseManifest();
	getBaseManifest = getProdBaseManifest;
	createEarlyHintsForRequest = createEarlyHintsCollector;
	ROUTER_BASEPATH = "/";
	SERVER_FN_BASE = "/_serverFn/";
	IS_PRERENDERING = process.env.TSS_PRERENDERING === "true";
	IS_SHELL_ENV = process.env.TSS_SHELL === "true";
	IS_DEV = false;
	ERR_NO_RESPONSE = IS_DEV ? `It looks like you forgot to return a response from your server route handler. If you want to defer to the app router, make sure to have a component set in this route.` : "Internal Server Error";
	ERR_NO_DEFER = IS_DEV ? `You cannot defer to the app router if there is no component defined on this route.` : "Internal Server Error";
}));
var init_esm$1 = __esmMin((() => {
	init_createStartHandler();
}));
var init_esm = __esmMin((() => {
	init_defaultStreamHandler();
	init_esm$1();
}));
var init_server$1 = __esmMin((() => {
	init_esm();
}));
var server_exports = /* @__PURE__ */ __exportAll({
	createServerEntry: () => createServerEntry,
	default: () => server_default$1
});
function createServerEntry(entry) {
	return { async fetch(...args) {
		return await entry.fetch(...args);
	} };
}
var fetch;
var server_default$1;
var init_server = __esmMin((() => {
	init_server$1();
	fetch = createStartHandler(defaultStreamHandler);
	server_default$1 = createServerEntry({ fetch });
}));
init_page();
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = Promise.resolve().then(() => (init_server(), server_exports)).then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	const swallowedError = consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`);
	console.error(swallowedError);
	return new Response(renderErrorPage(swallowedError), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(error), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default };
