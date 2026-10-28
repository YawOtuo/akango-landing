import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function Star({
  filled = false,
  ...props
}: IconProps & { filled?: boolean }) {
  return (
    <svg
      {...base}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      {...props}
    >
      <path d="M12 2.8l2.35 6.1 6.55.5-5.02 4.23 1.58 6.37L12 16.35 6.54 20l1.58-6.37L3.1 9.4l6.55-.5L12 2.8z" />
    </svg>
  );
}

export function Treasure(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" />
      <path d="M4 10V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      <path d="M9 14h6" />
      <path d="M12 14v6" />
    </svg>
  );
}

export function Home(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

export function Users(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8" />
      <path d="M17.5 14.2A5.5 5.5 0 0 1 21 20" />
    </svg>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l1.7 4.9L18.6 9.6l-4.9 1.7L12 16.2l-1.7-4.9L5.4 9.6l4.9-1.7L12 3z" />
      <path d="M19 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" />
    </svg>
  );
}

export function Compass(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2z" />
    </svg>
  );
}

export function User(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function Volume(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9.5h3l4-3.5v12l-4-3.5H4v-5z" />
      <path d="M15.5 9a4.2 4.2 0 0 1 0 6" />
      <path d="M18 6.5a8 8 0 0 1 0 11" />
    </svg>
  );
}

export function Translate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 5.5h7" />
      <path d="M7 3.5v2" />
      <path d="M9.8 5.5c-.7 3.2-2.6 5.6-5.3 7.1" />
      <path d="M5.2 8.4c1.2 1.8 2.9 3.1 5.1 3.9" />
      <path d="M14 20l3.2-8 3.2 8" />
      <path d="M15.2 17.2h4" />
    </svg>
  );
}

export function Book(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      <path d="M8 7h8" />
    </svg>
  );
}

export function Map(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.3 4 5.5 4 9s-1.5 6.7-4 9c-2.5-2.3-4-5.5-4-9s1.5-6.7 4-9z" />
    </svg>
  );
}

export function Shield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function Trophy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4z" />
      <path d="M8 5H5v2a3 3 0 0 0 3 3" />
      <path d="M16 5h3v2a3 3 0 0 1-3 3" />
      <path d="M12 12v4" />
      <path d="M9 20h6" />
      <path d="M10 20v-2h4v2" />
    </svg>
  );
}

export function Flame(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c1.4 2.8-1 4.3-1 6.7a4 4 0 0 0 8 0c0-1.4-.5-2.4-1-3.4 2 1.5 3 3.5 3 5.7a7 7 0 1 1-14 0c0-3 2-5.2 5-9z" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M9.5 6C6.5 7.2 4.8 9.6 4.8 12.6c0 2.6 1.5 4.4 3.7 4.4 2 0 3.5-1.5 3.5-3.5 0-1.9-1.3-3.2-3.1-3.2-.4 0-.8 0-1.1.1.5-1.4 1.6-2.5 3.2-3.2L9.5 6zm9 0c-3 1.2-4.7 3.6-4.7 6.6 0 2.6 1.5 4.4 3.7 4.4 2 0 3.5-1.5 3.5-3.5 0-1.9-1.3-3.2-3.1-3.2-.4 0-.8 0-1.1.1.5-1.4 1.6-2.5 3.2-3.2L18.5 6z" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function Lock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" />
    </svg>
  );
}

const iconMap = {
  path: Compass,
  practice: Sparkles,
  treasure: Treasure,
  translate: Translate,
  globe: Globe,
  star: Star,
  map: Map,
  book: Book,
  shield: Shield,
  trophy: Trophy,
  flame: Flame,
  users: Users,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  ...props
}: IconProps & { name: IconName }) {
  const Component = iconMap[name];
  return <Component {...props} />;
}
