import { units } from "@/lib/content";
import { Book, Star } from "./icons";

export function Curriculum() {
  return (
    <section id="curriculum" className="section relative overflow-hidden">
      <div className="glow-blob -right-24 top-16 h-72 w-72 bg-primary/15" />

      <div className="container-page relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">The curriculum</span>
            <h2 className="h2 mt-5">
              Six units from &ldquo;Akwaaba&rdquo; to getting around town.
            </h2>
            <p className="lead mt-5">
              Every unit has a clear theme, a short sequence of lessons, and a
              vocabulary treasure at the end.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-muted">
            <Book className="h-4 w-4 text-primary-light" />
            41 lessons · 132 exercises
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((unit, index) => (
            <article
              key={unit.number}
              className="card group relative flex flex-col p-6 transition hover:-translate-y-1 hover:border-primary/30"
            >
              {index === 0 && (
                <span className="absolute right-5 top-5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                  Start here
                </span>
              )}

              <span className="font-display text-xs font-bold tracking-[0.22em] text-primary-light/80">
                UNIT {unit.number}
              </span>

              <h3 className="mt-4 max-w-[85%] font-display text-xl font-semibold leading-tight text-white">
                {unit.title}
              </h3>

              <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-muted">
                <Star filled className="h-3.5 w-3.5 text-gold/70" />
                {unit.lessons} lessons
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-5">
                {unit.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2.5 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light/60" />
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Lessons are in Twi. The app interface is in English for now.
        </p>
      </div>
    </section>
  );
}
