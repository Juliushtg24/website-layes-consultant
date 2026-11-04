import type { ReactNode } from "react";

/** Bagian halaman dengan judul H2. `surface` memberi latar selang-seling. */
export function Block({ id, title, surface, children }: { id: string; title: string; surface?: boolean; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className={`scroll-mt-20 py-14 sm:py-20 ${surface ? "bg-surface" : ""}`}>
      <div className="wrap">
        <h2 id={`${id}-h`} className="mb-8 max-w-[30ch] text-xl font-extrabold sm:mb-10">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export const Check = () => (
  <span aria-hidden="true" className="font-extrabold text-navy dark:text-accent">
    ✓
  </span>
);
