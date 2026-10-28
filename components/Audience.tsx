import { personas } from "@/lib/content";
import { Icon, type IconName } from "./icons";

export function Audience() {
  return (
    <section
      id="who"
      className="section border-y border-white/[0.06] bg-white/[0.015]"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Who it is for</span>
          <h2 className="h2 mt-5">
            Built for the way people actually learn Twi.
          </h2>
          <p className="lead mt-5">
            Some people start from zero. Some grew up hearing the language but
            never learned to speak it. Akango meets both at the same path.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona) => (
            <article
              key={persona.title}
              className="card group p-6 transition hover:-translate-y-1 hover:border-white/15"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-primary/25 bg-primary/15 text-primary-light">
                <Icon
                  name={persona.icon as IconName}
                  className="h-5 w-5"
                />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-white">
                {persona.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {persona.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
