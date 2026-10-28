import { navLinks } from "@/lib/content";
import { ArrowRight } from "./icons";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink/75 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-white focus:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist"
          className="btn btn-primary !px-5 !py-2.5 text-[13px]"
        >
          Join the waitlist
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
