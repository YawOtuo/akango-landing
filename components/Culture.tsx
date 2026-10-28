import { Quote } from "./icons";

export function Culture() {
  return (
    <section id="culture" className="section relative overflow-hidden">
      <div className="glow-blob -right-20 top-24 h-72 w-72 bg-gold/10" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <span className="eyebrow">Culture, not just vocabulary</span>
          <h2 className="h2 mt-5">Learn the words. Keep the meaning.</h2>
          <p className="lead mt-5 max-w-lg">
            A proverb is not a vocabulary list. Akango pairs each saying with a
            translation, an explanation, and the context for when it is used.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Unity", "Wisdom", "Family", "Work", "Community"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            <div className="bg-ink px-5 py-4">
              <p className="font-display text-2xl font-bold text-gold">13</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                proverbs
              </p>
            </div>
            <div className="bg-ink px-5 py-4">
              <p className="font-display text-2xl font-bold text-primary-light">
                8
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                idioms
              </p>
            </div>
          </div>
        </div>

        <figure className="relative">
          <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-gold/15 via-transparent to-primary/20 blur-2xl" />

          <div className="card relative overflow-hidden p-7 sm:p-10">
            <Quote className="h-10 w-10 text-gold/40" />

            <blockquote className="mt-5">
              <p className="font-display text-2xl font-semibold leading-snug text-white sm:text-[1.7rem]">
                Prayɛ, sɛ woyi baako a na ebu; wokabomu a emmu.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                &ldquo;When you pull one out, it breaks; when you pull together,
                it does not.&rdquo;
              </p>
              <p className="mt-4 border-l-2 border-gold/40 pl-4 text-sm leading-6 text-white/70">
                Unity is strength. A single broomstick snaps; a bundle holds.
              </p>
            </blockquote>

            <figcaption className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              <span>Twi proverb</span>
              <span className="text-gold/80">Community · Unity</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
