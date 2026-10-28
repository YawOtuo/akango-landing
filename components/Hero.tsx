import { ArrowRight, Check } from "./icons";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24">
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="glow-blob -left-24 top-10 h-72 w-72 bg-primary/25" />
      <div className="glow-blob -right-16 top-40 h-80 w-80 bg-gold/10" />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="animate-rise">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Built in Ghana · Twi for beginners
          </span>

          <h1 className="mt-6 font-display text-[2.9rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[3.6rem] xl:text-[4.2rem]">
            Learn Twi.
            <br />
            <span className="text-gradient">One small lesson</span>
            <br />
            at a time.
          </h1>

          <p className="lead mt-6 max-w-xl">
            Akango turns Akan into a daily habit with bite-sized lessons,
            listening and translation practice, and the proverbs that carry the
            culture — not just the vocabulary.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#waitlist" className="btn btn-primary">
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#curriculum" className="btn btn-ghost">
              Explore the curriculum
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted">
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-mint" />
              Early access
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-mint" />
              6 units · 41 lessons
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-mint" />
              No spam
            </span>
          </div>
        </div>

        <div className="relative animate-rise [animation-delay:120ms]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
