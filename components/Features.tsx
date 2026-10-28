import { features } from "@/lib/content";
import { Icon, type IconName } from "./icons";

const accents = {
  primary: "border-primary/25 bg-primary/15 text-primary-light",
  mint: "border-mint/25 bg-mint/10 text-mint",
  gold: "border-gold/25 bg-gold/10 text-gold",
} as const;

export function Features() {
  return (
    <section id="why" className="section relative overflow-hidden">
      <div className="glow-blob -right-32 top-20 h-64 w-64 bg-primary/15" />

      <div className="container-page relative">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Akango</span>
          <h2 className="h2 mt-5">
            A language app that feels like a game — and a culture lesson.
          </h2>
          <p className="lead mt-5">
            Most Twi resources stop at a phrasebook. Akango gives you a path,
            practice that makes you think, and the meaning behind the words.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:border-white/15 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border ${
                    accents[feature.accent as keyof typeof accents]
                  }`}
                >
                  <Icon
                    name={feature.icon as IconName}
                    className="h-5 w-5"
                  />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {feature.body}
                  </p>
                </div>
              </div>
              <span className="pointer-events-none absolute -right-6 -top-6 font-display text-7xl font-extrabold text-white/[0.025]">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
