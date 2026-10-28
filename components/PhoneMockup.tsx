import {
  Compass,
  Home,
  Sparkles,
  Star,
  Treasure,
  User,
  Users,
} from "./icons";

type NodeState = "done" | "current" | "locked";

function LessonNode({
  state,
  offset,
}: {
  state: NodeState;
  offset: string;
}) {
  const styles =
    state === "done"
      ? "bg-primary text-white border-primary-light/40 shadow-glow"
      : state === "current"
        ? "bg-gold text-ink border-gold/60 shadow-gold animate-pulse-soft"
        : "bg-white/[0.06] text-white/30 border-white/10";

  return (
    <div className={`relative flex w-full justify-center ${offset}`}>
      {state === "current" && (
        <span className="absolute inset-0 m-auto h-14 w-14 rounded-full border border-gold/30" />
      )}
      <div
        className={`relative grid h-11 w-11 place-items-center rounded-full border ${styles}`}
      >
        <Star filled className="h-5 w-5" />
        {state === "done" && (
          <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-mint text-[9px] font-bold text-ink">
            ✓
          </span>
        )}
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[272px] sm:w-[330px]">
      <div className="absolute -inset-10 rounded-[5rem] bg-primary/20 blur-3xl" />
      <div className="absolute inset-x-8 -bottom-6 h-24 rounded-full bg-gold/10 blur-2xl" />

      <div className="relative animate-float rounded-[3.2rem] border border-white/15 bg-[#05050d] p-2.5 shadow-phone">
        <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-[#0F0F23]">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[10px] font-semibold text-white/70">
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <span className="flex items-end gap-[2px]">
                <span className="h-1.5 w-[3px] rounded-sm bg-white/70" />
                <span className="h-2 w-[3px] rounded-sm bg-white/70" />
                <span className="h-2.5 w-[3px] rounded-sm bg-white/70" />
                <span className="h-3 w-[3px] rounded-sm bg-white/40" />
              </span>
              <span className="h-2.5 w-3.5 rounded-[3px] border border-white/50 p-[1px]">
                <span className="block h-full w-2/3 rounded-[1px] bg-white/70" />
              </span>
            </span>
          </div>

          <div className="px-5 pb-4 pt-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold/80">
                  Akwaaba
                </p>
                <p className="font-display text-lg font-bold text-white">
                  Akango
                </p>
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-primary/20 text-primary-light">
                <User className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-semibold text-white">
                  Unit 1 · Basic Greetings
                </span>
                <span className="text-white/45">3/6</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary-light to-gold" />
              </div>
            </div>

            <div className="relative mt-5 flex flex-col items-center gap-4 pb-2">
              <div className="absolute left-1/2 top-3 h-[calc(100%-1.5rem)] w-px -translate-x-1/2 border-l border-dashed border-white/10" />

              <LessonNode state="done" offset="-translate-x-12" />
              <LessonNode state="current" offset="translate-x-10" />

              <div className="relative flex w-full justify-center -translate-x-8">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-gold/30 bg-gold/15 text-gold">
                  <Treasure className="h-5 w-5" />
                </div>
              </div>

              <LessonNode state="locked" offset="-translate-x-12" />
              <LessonNode state="locked" offset="translate-x-10" />
            </div>

            <div className="mt-4 grid grid-cols-5 gap-1 rounded-2xl border border-white/[0.06] bg-black/20 px-2 py-2.5">
              {[
                { icon: Home, label: "Home", active: true },
                { icon: Users, label: "Community", active: false },
                { icon: Sparkles, label: "AI", active: false },
                { icon: Compass, label: "Explore", active: false },
                { icon: User, label: "Profile", active: false },
              ].map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`flex flex-col items-center gap-1 ${
                    active ? "text-primary-light" : "text-white/35"
                  }`}
                >
                  <Icon className="h-[17px] w-[17px]" />
                  <span className="text-[7px] font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-32 top-40 hidden w-36 animate-float rounded-2xl border border-white/10 bg-surface/90 p-3 shadow-xl backdrop-blur xl:block [animation-delay:-2s]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-mint">
          Vocab
        </p>
        <p className="mt-1 font-display text-lg font-bold text-white">Maakye</p>
        <p className="text-[11px] text-muted">hello</p>
      </div>

      <div className="absolute -right-32 bottom-36 hidden w-36 animate-float rounded-2xl border border-gold/20 bg-gold/[0.08] p-3 shadow-xl backdrop-blur xl:block [animation-delay:-4s]">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gold/20 text-gold">
            <Star filled className="h-4 w-4" />
          </span>
          <div>
            <p className="font-display text-sm font-bold text-white">+10</p>
            <p className="text-[10px] text-muted">points earned</p>
          </div>
        </div>
      </div>
    </div>
  );
}
