type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4l3 3v3h-7" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5.5c0 4.2 2.8 7.6 7 9.5 4.2-1.9 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ReturnIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10a8 8 0 1 1 2 8" />
      <path d="M4 4v6h6" />
    </svg>
  );
}

export function CardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 10h18M7 15h4" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 5 5.2 2 2 0 0 1 7 3Z" />
    </svg>
  );
}

export function ScopeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h4M17 12h4" />
      <rect x="6" y="9" width="12" height="6" rx="2" />
      <path d="M12 9V6M12 18v-3" />
      <circle cx="12" cy="12" r="1.4" />
    </svg>
  );
}

export function MountIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18h18" />
      <path d="M7 18v-5h4v5M13 18v-5h4v5" />
      <path d="M6 13a3 3 0 0 1 6 0M12 13a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15.5 4.5a4.5 4.5 0 0 0-6 6L4 16v4h4l5.5-5.5a4.5 4.5 0 0 0 6-6L16 12l-4-4 3.5-3.5Z" />
    </svg>
  );
}

export function JacketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4 4 6v6l3 1v7h10v-7l3-1V6l-4-2-4 3-4-3Z" />
      <path d="M12 7v13M9 4.5 12 7l3-2.5" />
    </svg>
  );
}

export function BackpackIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9a6 6 0 0 1 12 0v11H6V9Z" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2M9 14h6v6H9z" />
      <path d="M4 12v4M20 12v4" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6L3.2 9.4l6.1-.9L12 3Z" />
    </svg>
  );
}

export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden {...props}>
      <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeWidth="1.2" opacity=".55" />
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 2v8M16 22v8M2 16h8M22 16h8" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}
