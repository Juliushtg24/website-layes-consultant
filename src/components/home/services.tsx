import Link from "next/link";
import { kelompok, layanan, type Kelompok, type Layanan } from "@/lib/layanan";
import { waLink } from "@/lib/site";
import { SectionHead } from "./section-head";

function Card({ item }: { item: Layanan }) {
  return (
    <article className="relative flex flex-col gap-3 rounded-card border border-line bg-card p-7 transition hover:-translate-y-0.5 hover:border-navy">
      <h4 className="text-lg font-extrabold">
        <Link href={`/layanan/${item.slug}`} className="hover:underline">
          {item.title}
        </Link>
      </h4>
      <p className="text-sm text-muted">{item.summary}</p>
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-[18px]">
        <p className="font-display text-lg font-extrabold">
          {item.price}
          <small className="block font-sans text-xs font-semibold text-muted">{item.priceNote}</small>
        </p>
        <a
          href={waLink(item.waText)}
          target="_blank"
          rel="noopener"
          aria-label={`Tanya ${item.title} via WhatsApp`}
          className="text-sm font-bold whitespace-nowrap text-navy hover:underline dark:text-accent"
        >
          Tanya →
        </a>
      </div>
    </article>
  );
}

function Group({ id, cols }: { id: Kelompok; cols: string }) {
  return (
    <div className="grid gap-4">
      <h3 className="font-sans text-sm font-bold text-muted">{kelompok[id]}</h3>
      <div className={`grid gap-4 ${cols}`}>
        {layanan
          .filter((item) => item.group === id)
          .map((item) => (
            <Card key={item.slug} item={item} />
          ))}
      </div>
    </div>
  );
}

/** Tiga kelompok kartu layanan. Dipakai di beranda dan /layanan. */
export function ServiceGroups() {
  return (
    <>
      <Group id="perusahaan" cols="sm:grid-cols-2 lg:grid-cols-4" />
      <div className="mt-9 grid gap-9 lg:grid-cols-2 lg:gap-4">
        <Group id="pribadi" cols="sm:grid-cols-2" />
        <Group id="sengketa" cols="sm:grid-cols-2" />
      </div>
      <p className="mt-5 text-xs text-muted">Harga final selalu ditulis di surat penugasan sebelum pekerjaan dimulai.</p>
    </>
  );
}

export function Services() {
  return (
    <section id="layanan" aria-labelledby="layanan-h" className="py-16 sm:py-24">
      <div className="wrap">
        <SectionHead id="layanan-h" kicker="Layanan" title="Layanan pajak kami">
          Harga mulai dari tercantum di setiap layanan. Harga final kami konfirmasi tertulis sebelum pekerjaan dimulai.
        </SectionHead>
        <ServiceGroups />
      </div>
    </section>
  );
}
