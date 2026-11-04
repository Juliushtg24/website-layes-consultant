import type { ReactNode } from "react";

function Stroke({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {children}
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.3z" />
    </svg>
  );
}

export const ShieldIcon = () => (
  <Stroke>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </Stroke>
);

export const DocIcon = () => (
  <Stroke>
    <path d="M6 3h9l4 4v14H6z" />
    <path d="M9 12h7M9 16h7M9 8h3" />
  </Stroke>
);

export const DocCheckIcon = () => (
  <Stroke>
    <path d="M6 3h9l4 4v14H6z" />
    <path d="M9 13l2 2 4-4" />
  </Stroke>
);

export const ClockIcon = () => (
  <Stroke>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Stroke>
);

export const LockIcon = () => (
  <Stroke>
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </Stroke>
);

export const ScaleIcon = () => (
  <Stroke>
    <path d="M12 3v18M5 7h14M7 7l-3 7a3 3 0 0 0 6 0zM17 7l-3 7a3 3 0 0 0 6 0z" />
  </Stroke>
);

export const PersonIcon = () => (
  <Stroke>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
  </Stroke>
);

export const CalendarIcon = () => (
  <Stroke>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </Stroke>
);

export const PinIcon = () => (
  <Stroke>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </Stroke>
);

/** Kotak ikon 44px dari mockup. */
export function IconBox({ children, className = "bg-surface text-navy dark:text-accent" }: { children: ReactNode; className?: string }) {
  return <span className={`grid size-11 flex-none place-items-center rounded-xl [&_svg]:size-[22px] ${className}`}>{children}</span>;
}
