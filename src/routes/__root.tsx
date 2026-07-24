import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

import appCss from "../styles.css?url";
import logoUrl from "@/assets/logo.png";
import { reportLovableError } from "../lib/errors/reporting";
import { AnimatedBackground } from "@/components/visuals/AnimatedBackground";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-accent-gold-soft">404</h1>
        <h2 className="mt-4 font-serif text-xl">This page slipped through the cycle.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-primary-glow inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-destructive">Oops!</h1>
        <p className="mt-2 text-base font-medium text-foreground">
          something error happend with this response
        </p>
        <div className="mt-4 rounded-xl border border-hairline bg-surface p-4 text-left shadow-inner">
          <p className="text-xs font-mono text-muted-foreground break-words">
            {error.message || "Unknown error occurred"}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary-glow inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent-gold-soft hover:text-accent-gold-soft"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NariCare — AI-powered women's cycle & health companion" },
      {
        name: "description",
        content:
          "NariCare is an AI-powered menstrual & reproductive health hub for women. Run a 3-min risk assessment, track your cycle, ask Nari — your private AI health companion.",
      },
      { name: "author", content: "NariCare" },
      { property: "og:title", content: "NariCare — AI-powered women's cycle & health companion" },
      {
        property: "og:description",
        content:
          "Run a private risk assessment, track your cycle, chat with Nari the AI companion.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/social-banner.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoUrl, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,450;0,9..144,600;1,9..144,450&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatedBackground />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 relative">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, filter: "blur(8px)", scale: 0.98 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
