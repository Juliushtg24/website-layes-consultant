import type { ReactNode } from "react";

export function SectionHead({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
      <div>
        <p className="mb-3 text-sm font-bold text-accent-ink">{kicker}</p>
        <h2 id={id} className="max-w-[26ch] text-xl font-extrabold">
          {title}
        </h2>
      </div>
      <p className="max-w-[44ch] text-muted">{children}</p>
    </div>
  );
}
