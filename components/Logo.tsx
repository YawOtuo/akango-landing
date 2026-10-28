import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
      aria-label="Akango home"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary-light to-primary-dark shadow-glow transition group-hover:-rotate-6">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          aria-hidden="true"
        >
          <path
            d="M12 2.6l2.3 6.1 6.5.5-5 4.2 1.6 6.3L12 16.2 6.6 19.7l1.6-6.3-5-4.2 6.5-.5L12 2.6z"
            fill="currentColor"
          />
        </svg>
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-ink" />
      </span>
      <span className="font-display text-xl font-bold tracking-[-0.03em] text-white">
        Akango
      </span>
    </Link>
  );
}
