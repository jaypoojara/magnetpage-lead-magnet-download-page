export function Book3D({
  title = "The B2B Content Marketing Playbook",
  subtitle = "147 Proven Strategies",
  author = "Sarah Chen",
  badge = "FREE GUIDE",
}: {
  title?: string;
  subtitle?: string;
  author?: string;
  badge?: string;
}) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      <div className="relative book-float">
        {/* Page edge layers (behind the cover) */}
        <div
          className="absolute top-[3px] -right-[4px] bottom-[3px] left-[3px] rounded-r-md bg-[#d6cec4]"
          style={{ transform: "translateZ(-8px)" }}
        />
        <div
          className="absolute top-[6px] -right-[7px] bottom-[6px] left-[6px] rounded-r-md bg-[#c9c0b5]"
          style={{ transform: "translateZ(-14px)" }}
        />

        {/* Right edge — page stack */}
        <div className="absolute top-[6px] -right-[6px] bottom-[6px] w-[8px] rounded-r-sm">
          <div className="h-full w-full rounded-r-sm bg-gradient-to-r from-[#f0ebe4] via-[#e8e0d6] to-[#d6cec4]" />
          {/* Individual page lines */}
          <div className="absolute inset-0 flex flex-col justify-evenly px-[1px]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-[1px] bg-[#ccc3b8]/60" />
            ))}
          </div>
        </div>

        {/* Bottom edge — page stack */}
        <div className="absolute -bottom-[5px] left-[6px] right-[2px] h-[6px]">
          <div className="h-full w-full rounded-b-sm bg-gradient-to-b from-[#f0ebe4] via-[#e8e0d6] to-[#d6cec4]" />
        </div>

        {/* Front Cover */}
        <div className="relative aspect-[3/4] w-[240px] overflow-hidden rounded-r-lg sm:w-[280px]">
          {/* Cover background */}
          <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[var(--secondary)] via-[var(--secondary)] to-[#3B0E7A] p-6 sm:p-8">
            {/* Badge */}
            {badge && (
              <span className="inline-block self-start rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">
                {badge}
              </span>
            )}

            {/* Title area */}
            <div>
              {/* Decorative line */}
              <div className="mb-4 h-[2px] w-12 bg-[var(--accent)]" />

              <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold leading-tight text-white sm:text-2xl">
                {title}
              </h3>

              {subtitle && (
                <p className="mb-6 text-xs tracking-wide text-white/60 sm:text-sm">
                  {subtitle}
                </p>
              )}

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-6 bg-white/25" />
                <span className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                  {author}
                </span>
              </div>
            </div>
          </div>

          {/* Spine shadow on left edge */}
          <div className="absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-black/25 to-transparent" />

          {/* Top glare reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

          {/* Cover shadow */}
          <div
            className="absolute inset-0 rounded-r-lg"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0,0,0,0.35), 0 12px 24px -8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
