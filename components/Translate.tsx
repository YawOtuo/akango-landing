import { translationLanguages } from "@/lib/content";
import { ArrowRight, Translate as TranslateIcon, Volume } from "./icons";

export function Translate() {
  return (
    <section
      id="translate"
      className="section relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015]"
    >
      <div className="glow-blob -left-20 top-24 h-64 w-64 bg-primary/15" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="eyebrow">Language tools</span>
          <h2 className="h2 mt-5">When you need a word right now.</h2>
          <p className="lead mt-5 max-w-lg">
            Translation is a helper, not the whole lesson. Look up English or
            Twi in the moment, then hear Twi spoken aloud.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {translationLanguages.map((language) => (
              <span
                key={language}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                  language === "Twi"
                    ? "border-gold/30 bg-gold/10 text-gold"
                    : "border-white/10 bg-white/[0.04] text-muted"
                }`}
              >
                {language}
              </span>
            ))}
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted">
              +4 more
            </span>
          </div>

          <p className="mt-6 max-w-md text-xs leading-5 text-muted">
            Translation and text-to-speech are powered by GhanaNLP. Lessons are
            Twi; the translation tool covers additional Ghanaian and African
            languages.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-primary/20 via-transparent to-gold/10 blur-2xl" />

          <div className="card relative p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl border border-primary/25 bg-primary/15 text-primary-light">
                  <TranslateIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    Translate
                  </p>
                  <p className="text-[11px] text-muted">English → Twi</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                GhanaNLP
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                English
              </p>
              <p className="mt-2 font-display text-lg font-medium text-white">
                Hello, how are you?
              </p>
            </div>

            <div className="my-3 flex justify-center">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted">
                <ArrowRight className="h-4 w-4 rotate-90" />
              </span>
            </div>

            <div className="rounded-2xl border border-gold/25 bg-gold/[0.06] p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                  Twi
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold text-gold">
                  <Volume className="h-3.5 w-3.5" />
                  Listen
                </span>
              </div>
              <p className="mt-2 font-display text-2xl font-semibold text-white">
                Ɛte sɛn?
              </p>
              <p className="mt-1 text-xs text-muted">
                Literally: how is your body?
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between text-[11px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                Translation ready
              </span>
              <span>Swap languages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
