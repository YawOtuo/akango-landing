import { navLinks } from "@/lib/content";
import { Logo } from "./Logo";

const buildStack = ["Flutter", "Firebase", "Sanity", "GhanaNLP"];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07070f]">
      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              A gamified Twi learning app built in Ghana. Learn the words, keep
              the culture.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#waitlist"
                  className="text-sm text-gold transition hover:text-gold-deep"
                >
                  Join the waitlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              The build
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {buildStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-muted">
              Akango is in early access. There is no public download yet.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Akango. Made in Ghana.</p>
          <p>Learn Akan. Go further.</p>
        </div>
      </div>
    </footer>
  );
}
