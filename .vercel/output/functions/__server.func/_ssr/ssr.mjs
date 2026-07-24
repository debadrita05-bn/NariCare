//#region node_modules/.nitro/vite/services/ssr/index.js
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
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-0bXXJCjG.mjs").then((m) => m.default ?? m);
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
export { server_default as default, renderErrorPage as t };
