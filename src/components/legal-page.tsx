import { PageHeader } from "./page-header";

export type LegalSection = { h: string; p?: string[]; ul?: string[] };

/** Halaman legal: kepala halaman lalu teks berpasal. */
export function LegalPage({ title, lead, crumb, sections }: { title: string; lead: string; crumb: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHeader crumbs={[{ href: "/", label: "Beranda" }, { label: crumb }]} title={title} lead={lead} />
      <article className="wrap max-w-3xl py-14 sm:py-20">
        {/* shortcut: tanggal berlaku masih isian; isi setelah teks ditinjau penasihat hukum. */}
        <p className="mb-10 text-sm text-muted">Berlaku sejak [tanggal berlaku]</p>
        {sections.map((s) => (
          <section key={s.h} className="mb-10">
            <h2 className="mb-4 text-lg font-extrabold">{s.h}</h2>
            {s.p?.map((t) => (
              <p key={t} className="mb-3">
                {t}
              </p>
            ))}
            {s.ul && (
              <ul className="grid list-disc gap-2 pl-5">
                {s.ul.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </>
  );
}
