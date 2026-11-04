import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./json-ld";

type Crumb = { href?: string; label: string };

/** Kepala halaman navy dengan breadcrumb, H1 dan subjudul. Dipakai halaman selain beranda. */
export function PageHeader({ crumbs, title, lead, children }: { crumbs: Crumb[]; title: string; lead: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy pt-8 pb-14 text-on-navy sm:pt-10 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-30 -right-45 size-155 rounded-full border-[90px] border-accent/7"
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="wrap relative">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-on-navy-muted">
          <ol className="flex flex-wrap gap-2">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex gap-2">
                {i > 0 && <span aria-hidden="true">›</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-on-navy">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-on-navy">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="rv mb-5 max-w-[24ch] text-hero font-extrabold">{title}</h1>
        <p className="rv max-w-[56ch] text-lg text-on-navy-muted [animation-delay:80ms]">{lead}</p>
        {children && <div className="rv mt-8 [animation-delay:160ms]">{children}</div>}
      </div>
    </section>
  );
}
