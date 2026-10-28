import { Check, Star } from "./icons";
import { WaitlistForm } from "./WaitlistForm";

const perks = [
  "Early access to the Android build",
  "Launch updates as new units are added",
  "No spam, no daily emails",
];

export function Waitlist() {
  return (
    <section id="waitlist" className="section relative overflow-hidden">
      <div className="glow-blob left-1/2 top-10 h-80 w-80 -translate-x-1/2 bg-primary/20" />

      <div className="container-page relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-surface via-[#12102a] to-[#0c0b1c] p-7 sm:p-12 lg:p-14">
          <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-gold" />
                Early access
              </span>

              <h2 className="h2 mt-5">
                Be first in line for <span className="text-gradient">Akango</span>.
              </h2>
              <p className="lead mt-5 max-w-lg">
                Join the list and we&apos;ll send you a link when the first build
                is ready. Until then, we&apos;ll share what we are building and
                the lessons as they go live.
              </p>

              <ul className="mt-7 space-y-3">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                      <Check className="h-3 w-3" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                <Star filled className="h-3.5 w-3.5 text-gold" />
                Join the early-access list
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
