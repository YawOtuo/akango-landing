import { Check, Star, Treasure, Volume } from "./icons";

const steps = [
  {
    title: "Pick your unit",
    body: "Start at greetings, or jump to food and directions. Every unit has one clear theme.",
  },
  {
    title: "Complete the lesson",
    body: "Answer a handful of exercises. You get instant feedback, not a wall of text.",
  },
  {
    title: "Unlock the next star",
    body: "Finish a lesson to open the next one on the path. Small wins keep you moving.",
  },
  {
    title: "Open the treasure",
    body: "Collect the vocabulary from the unit, with translations and example sentences.",
  },
];

const options = [
  { text: "maakye", correct: true },
  { text: "maame", correct: false },
  { text: "y3", correct: false },
  { text: "s3n", correct: false },
];

export function PathSection() {
  return (
    <section
      id="path"
      className="section relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015]"
    >
      <div className="glow-blob -left-24 top-24 h-72 w-72 bg-primary/15" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="eyebrow">The path</span>
          <h2 className="h2 mt-5">Small lessons. Real progress.</h2>
          <p className="lead mt-5 max-w-lg">
            The path is the product. Each unit is a short sequence of lessons,
            and each lesson is a handful of exercises you can finish in one
            sitting.
          </p>

          <ol className="mt-9 space-y-6">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/15 font-display text-xs font-bold text-primary-light">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-primary/20 via-transparent to-gold/10 blur-2xl" />

          <div className="card relative p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Unit 1 · Lesson 1.1
                </p>
                <p className="mt-1 font-display text-sm font-semibold text-white">
                  Basic Greetings
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold text-muted">
                4 of 8
              </span>
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary-light to-gold" />
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Multiple choice
              </p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug text-white">
                How do you say &quot;hello&quot; in Twi?
              </p>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {options.map((option) => (
                  <div
                    key={option.text}
                    className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm ${
                      option.correct
                        ? "border-mint/40 bg-mint/10 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/70"
                    }`}
                  >
                    <span className="font-medium">{option.text}</span>
                    {option.correct && <Check className="h-4 w-4 text-mint" />}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-mint">
                  <Check className="h-3.5 w-3.5" />
                  Correct
                </span>
                <span className="rounded-full bg-gold px-4 py-2 text-[11px] font-bold text-ink">
                  Check answer
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-gold/20 bg-gold/[0.06] p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <Treasure className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-sm font-semibold text-white">
                    Treasure unlocked
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold/80">
                    4 words
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
                  {[
                    ["maakye", "hello"],
                    ["medaase", "thank you"],
                    ["ɛte sɛn?", "how are you?"],
                    ["me ho yɛ", "I am fine"],
                  ].map(([twi, english]) => (
                    <div key={twi} className="rounded-lg bg-black/20 px-2.5 py-2">
                      <p className="font-semibold text-white">{twi}</p>
                      <p className="text-muted">{english}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-muted">
              <Volume className="h-3.5 w-3.5 text-primary-light" />
              Most words include pronunciation audio
              <Star filled className="ml-auto h-3.5 w-3.5 text-gold/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
