/**
 * Subtle animated hero backdrop: a faint grid, two slowly drifting cyan
 * gradient blobs and an animated conic sheen — all CSS-driven and masked so
 * they fade toward the edges. Purely decorative.
 */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Grid */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-70" />

      {/* Animated gradient wash */}
      <div
        className="absolute inset-0 opacity-[0.5] animate-gradient-pan mask-radial"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(34,211,238,0.14), transparent 60%), radial-gradient(40% 40% at 80% 20%, rgba(6,182,212,0.10), transparent 60%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Drifting blobs */}
      <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div
        className="absolute right-[8%] top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Bottom fade into the page background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base" />
    </div>
  );
}
