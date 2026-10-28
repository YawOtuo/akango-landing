import { stats } from "@/lib/content";

export function StatsBar() {
  return (
    <section
      aria-label="Akango at a glance"
      className="border-y border-white/[0.06] bg-white/[0.015]"
    >
      <div className="container-page grid grid-cols-2 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-7 text-center sm:py-9 ${
              index % 2 === 1 ? "border-l border-white/[0.06]" : ""
            } ${index >= 2 ? "border-t border-white/[0.06] sm:border-t-0" : ""} ${
              index > 0 ? "sm:border-l sm:border-white/[0.06]" : ""
            }`}
          >
            <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
