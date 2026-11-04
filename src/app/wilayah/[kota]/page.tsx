import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Block, Check } from "@/components/block";
import { WhatsAppIcon } from "@/components/icons";
import { OfficeMap } from "@/components/office-map";
import { PageHeader } from "@/components/page-header";
import { findLayanan } from "@/lib/layanan";
import { site, waLink } from "@/lib/site";
import { findWilayah, wilayah } from "@/lib/wilayah";

export function generateStaticParams() {
  return wilayah.map((w) => ({ kota: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/wilayah/[kota]">): Promise<Metadata> {
  const w = findWilayah((await params).kota);
  if (!w) return {};
  return { title: `Konsultan pajak di ${w.name}`, description: w.intro, alternates: { canonical: `/wilayah/${w.slug}` } };
}

export default async function KotaPage({ params }: PageProps<"/wilayah/[kota]">) {
  const w = findWilayah((await params).kota);
  if (!w) notFound();
  const services = w.services.map(findLayanan).filter((l) => l !== undefined);

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Beranda" }, { href: "/wilayah", label: "Wilayah" }, { label: w.name }]}
        title={`Konsultan pajak di ${w.name}`}
        lead={w.intro}
      >
        <div className="flex flex-wrap gap-3 max-sm:[&>*]:flex-[1_1_100%]">
          <a href={waLink(`Halo Layes Konsultan, saya dari ${w.name} dan ingin konsultasi pajak.`)} target="_blank" rel="noopener" className="btn btn-wa">
            <WhatsAppIcon />
            Konsultasi via WhatsApp
          </a>
          <Link href="/kontak" className="btn btn-ghost">
            Jadwalkan pertemuan
          </Link>
        </div>
      </PageHeader>

      <Block id="cara" title={`Cara kami melayani klien di ${w.name}`}>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-14">
          <p className="text-lg">{w.how}</p>
          <p className="text-muted">
            Wajib pajak di {w.name} terdaftar di KPP Pratama di bawah {w.kanwil}. Bila Anda belum tahu KPP tempat Anda
            terdaftar, kami bantu mengeceknya saat konsultasi awal.
          </p>
        </div>
      </Block>

      <Block id="klien" title={`Kebutuhan pajak yang sering kami temui di ${w.name}`} surface>
        <ul className="grid max-w-3xl gap-3">
          {w.industry.map((i) => (
            <li key={i} className="flex gap-3">
              <Check />
              {i}
            </li>
          ))}
        </ul>
      </Block>

      <Block id="layanan" title="Layanan yang paling relevan">
        <ul className="grid gap-4 sm:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/layanan/${s.slug}`}
                className="flex h-full flex-col gap-2 rounded-card border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-navy"
              >
                <b className="font-display text-lg">{s.title}</b>
                <span className="text-sm text-muted">{s.summary}</span>
                <span className="mt-auto pt-2 font-display font-extrabold">
                  {s.price} <small className="font-sans text-xs font-semibold text-muted">{s.priceNote}</small>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Block>

      {w.hasOffice && (
        <Block id="kantor" title={`Kantor kami di ${w.name}`} surface>
          <div className="grid items-start gap-8 md:grid-cols-2 lg:gap-14">
            <div className="grid gap-3">
              <p className="text-lg">{site.address}</p>
              <p className="text-muted">{site.hours}</p>
            </div>
            <OfficeMap />
          </div>
        </Block>
      )}
    </>
  );
}
