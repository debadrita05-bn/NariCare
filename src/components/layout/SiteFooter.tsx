export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-background/60 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-5 px-6 text-center">
        <div className="flex items-center gap-2 font-serif text-lg">
          <svg viewBox="0 0 28 28" className="h-6 w-6">
            <circle cx="14" cy="14" r="12" fill="none" stroke="#e3a857" strokeWidth="1.4" />
            <path d="M14 4 A10 10 0 0 1 14 24 A5 5 0 0 0 14 4" fill="#c65b7c" />
          </svg>
          NariCare
        </div>

        <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent-gold/60 to-transparent" />

        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Runs in your browser · Your answers stay on your device · Not a substitute for
          professional medical advice. In an emergency, contact your doctor.
        </p>

        <p className="text-xs text-muted-foreground/70">Made with care for every Nari.</p>
      </div>
    </footer>
  );
}
