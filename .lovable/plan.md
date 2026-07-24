## Goal
Take the site from "working" to "smooth and polished" on both mobile and desktop. Fix the real bugs first (SSR hydration mismatch, mobile layout hazards), then a focused motion + layout polish pass. No new features, no content rewrites.

## 1. Bug fixes (highest priority)

**Hydration mismatch in `AnimatedBackground`** (visible in console logs)
- `Math.random()` runs on server and client, producing different `left/top/rotate/opacity/…` for every ghost gerbera and pollen dot → React warns and skips patching.
- Fix: seed the randomness deterministically OR only render the randomized layer after mount (`useHydrated` / `useEffect` gate). Keep a static gradient/vignette layer for SSR so there's no visual pop.

**Ask Nari route robustness**
- Verify `/ask` and `/ask/$threadId` still work after recent changes; add a defensive redirect from `/ask` when a thread already exists.

**Mobile layout audit** (current viewport 570px)
- `SiteHeader`: ensure logo + nav + CTA use the responsive grid pattern (`grid-cols-[minmax(0,1fr)_auto]` + `min-w-0` + `shrink-0` + `truncate`) so nothing clips at ≤380px. Collapse nav into a compact menu on `<sm`.
- Home hero: verify the gerbera image stays `hidden md:flex` and headline sizes step down cleanly (`text-4xl sm:text-5xl md:text-6xl`).
- `TodayForYou`, assessment wizard, tracker, doctor, history: check card padding, button wrap, and long-text truncation on 360–430px widths.
- `FloatingChat`: ensure bubble does not cover the primary CTA on mobile; add safe-area offset for iOS.

**Reduced-motion pass**
- Confirm every `motion.*` in `AnimatedBackground`, `CycleWheel`, hero, and chat honors `useReducedMotion()` (skip drift/orbit/shimmer). Pollen + ghost flowers must go static.

## 2. Animation smoothing

- Replace CPU-heavy repeated `filter: blur()` animations with static blur + animated `opacity/transform` only (GPU-friendly). Ghost gerberas keep `transform` + `opacity` transitions, no filter changes per frame.
- Add `will-change: transform, opacity` on the long-running motion layers; remove `mix-blend-mode` from the highest-count elements on mobile (perf).
- Reduce ghost count from 6 → 4 and pollen from 22 → 12 on `<md` screens.
- Standardize easings: use `[0.16, 1, 0.3, 1]` (expo-out) for entrances and `easeInOut` for loops. Stagger hero entrance with a single `staggerChildren` container instead of hand-tuned delays.
- Route transition: add a subtle fade/slide on `<Outlet />` via `AnimatePresence` in `__root.tsx` (respect reduced-motion).
- Chat: smooth message enter (fade + 4px rise), auto-scroll with `behavior: "smooth"` capped so it doesn't fight the user.

## 3. Layout + component polish

- Apply the required responsive header pattern (grid → flex at `sm:`) to any multi-item row that currently uses bare `flex flex-wrap`.
- Card system: unify radius (`rounded-2xl`), border (`border-hairline`), and hover (`-translate-y-0.5` + soft shadow) across Home feature cards, TodayForYou, Learn, Doctor.
- Buttons: single source of truth for primary/secondary/ghost variants using existing `.btn-primary-glow` + shadcn `Button` variants; no ad-hoc button classes.
- Focus-visible: verify the golden ring shows on all interactive elements (links, chips, cards acting as buttons).
- Empty states: assessment/tracker/history — friendlier copy + a single clear CTA.

## 4. Verification

- `bun run build` + `tsgo` clean.
- Playwright screenshot pass at 375, 768, 1280 for `/`, `/assessment`, `/tracker`, `/ask`, `/doctor`, `/history`.
- Check browser console: zero hydration warnings, zero React key warnings.
- Lighthouse quick check on `/`: CLS < 0.05, no long tasks from the background layer.

## Files likely touched

- `src/components/visuals/AnimatedBackground.tsx` (hydration fix, perf)
- `src/components/visuals/CycleWheel.tsx` (reduced-motion, easing)
- `src/components/layout/SiteHeader.tsx` (mobile grid)
- `src/components/layout/SiteFooter.tsx` (spacing)
- `src/components/chat/ChatWindow.tsx`, `FloatingChat.tsx` (mobile safe-area, smoothing)
- `src/components/home/TodayForYou.tsx`
- `src/routes/__root.tsx` (route transition)
- `src/routes/index.tsx`, `assessment.tsx`, `tracker.tsx`, `doctor.tsx`, `history.tsx`, `ask.*` (responsive polish)
- `src/styles.css` (motion utilities, will-change helpers)
- new: `src/hooks/useHydrated.ts`

## Out of scope
- No content/copy rewrites.
- No new pages or features.
- No backend/schema changes.
