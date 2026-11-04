import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/accordion";
import { Block, Check } from "@/components/block";
import { ConsultantCard } from "@/components/consultant-card";
import { WhatsAppIcon } from "@/components/icons";
import { LeadForm } from "@/components/lead-form";
import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { findLayanan, jasaTitle, kelompok, layanan, priceLine } from "@/lib/layanan";
import { serviceSchema } from "@/lib/schema";
import { site, waLink } from "@/lib/site";

export function generateStaticParams() {
  return layanan.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/layanan/[slug]">): Promise<Metadata> {
  const item = findLayanan((await params).slug);
  if (!item) return {};
  return {
    title: `${jasaTitle(item)} di Jabodetabek`,
    description: `${item.lead} ${priceLine(item)}`,
    alternates: { canonical: `/layanan/${item.slug}` },
  };
}

const jump = [
  { id: "cakupan", label: "Cakupan" },
  { id: "biaya", label: "Biaya" },
  { id: "dokumen", label: "Dokumen" },
  { id: "proses", label: "Proses" },
  { id: "faq", label: "FAQ" },
];

export default async function LayananDetail({ params }: PageProps<"/layanan/[slug]">) {
  const item = findLayanan((await params).slug);
  if (!item) notFound();
  const related = item.related.map(findLayanan).filter((l) => l !== undefined);

  return (
    <>
      <JsonLd data={serviceSchema(item)} />
      {/* 1-4: breadcrumb, H1, CTA ganda, tautan lompat */}
      <PageHeader
        crumbs={[{ href: "/", label: "Beranda" }, { href: "/layanan", label: "Layanan" }, { label: item.title }]}
        title={item.h1}
        lead={item.lead}
      >
        <div className="flex flex-wrap gap-3 max-sm:[&>*]:flex-[1_1_100%]">
          <a href={waLink(item.waText)} target="_blank" rel="noopener" className="btn btn-wa">
            <WhatsAppIcon />
            Tanya via WhatsApp
          </a>
          <Link href="#formulir" className="btn btn-ghost">
            Jadwalkan konsultasi
          </Link>
        </div>
        <nav aria-label="Di halaman ini" className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {jump.map((j) => (
              <li key={j.id}>
                <Link href={`#${j.id}`} className="inline-block rounded-full bg-white/8 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/14">
                  {j.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {/* 5: masalah yang diselesaikan */}
      <Block id="masalah" title="Kapan Anda membutuhkan layanan ini">
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {item.problems.map((p) => (
            <li key={p.title} className="border-l-4 border-accent pl-5">
              <h3 className="mb-1.5 text-lg font-extrabold">{p.title}</h3>
              <p className="text-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </Block>

      {/* 6: cakupan */}
      <Block id="cakupan" title="Cakupan pekerjaan" surface>
        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <div className="rounded-panel bg-card p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-extrabold">Termasuk</h3>
            <ul className="grid gap-3">
              {item.includes.map((x) => (
                <li key={x} className="flex gap-3">
                  <Check />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-panel border border-line p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-extrabold">Tidak termasuk</h3>
            <ul className="grid gap-3 text-muted">
              {item.excludes.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true">–</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Block>

      {/* 7: paket dan biaya */}
      <Block id="biaya" title="Biaya">
        <div className="grid items-start gap-6 md:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div className="rounded-panel bg-navy p-7 text-on-navy sm:p-9">
            <p className="text-sm text-on-navy-muted">{item.title}</p>
            <p className="mt-2 mb-1 font-display text-[clamp(2rem,1.6rem+1.6vw,2.75rem)] leading-none font-extrabold">{item.price}</p>
            <p className="mb-7 text-sm text-on-navy-muted">{item.priceNote}</p>
            <a href={waLink(`${item.waText} Mohon perkiraan biayanya.`)} target="_blank" rel="noopener" className="btn btn-wa w-full">
              <WhatsAppIcon />
              Minta perkiraan biaya
            </a>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-extrabold">Yang menentukan harga final</h3>
            <ul className="mb-5 grid gap-2.5">
              {item.priceFactors.map((x) => (
                <li key={x} className="flex gap-3">
                  <Check />
                  {x}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">
              Konsultasi awal gratis. Harga final, cakupan dan tenggat ditulis di surat penugasan sebelum pekerjaan
              dimulai. Pekerjaan tambahan selalu ditawarkan tertulis lebih dulu.
            </p>
          </div>
        </div>
      </Block>

      {/* 8: dokumen */}
      <Block id="dokumen" title="Dokumen yang perlu disiapkan" surface>
        <div className="grid items-start gap-6 md:grid-cols-[1.3fr_1fr] lg:gap-14">
          <ul className="grid gap-3 rounded-panel bg-card p-6 sm:p-8">
            {item.documents.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 size-4 flex-none rounded border-2 border-accent" />
                {d}
              </li>
            ))}
          </ul>
          <div>
            <p className="mb-5 text-muted">
              Dokumen diminta setelah surat penugasan ditandatangani, lewat saluran yang aman. Jangan kirim NPWP, NIK atau
              dokumen keuangan lewat formulir website.
            </p>
            {/* shortcut: daftar dikirim lewat WhatsApp, bukan PDF unduhan; buat PDF bila diminta. */}
            <a
              href={waLink(`Halo Layes Konsultan, tolong kirim daftar dokumen untuk ${item.title}.`)}
              target="_blank"
              rel="noopener"
              className="btn btn-line"
            >
              Kirim daftar ini ke WhatsApp saya
            </a>
          </div>
        </div>
      </Block>

      {/* 9: proses dan waktu */}
      <Block id="proses" title="Proses dan waktu">
        <ol className="mb-8 grid gap-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {item.process.map((s, i) => (
            <li key={s.title} className="relative pt-14">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 grid size-10 place-items-center rounded-full bg-navy font-display font-extrabold text-on-navy"
              >
                {i + 1}
              </span>
              <h3 className="mb-2 text-lg font-extrabold">{s.title}</h3>
              <p className="text-sm text-muted">{s.text}</p>
              <p className="mt-3 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent-ink">{s.time}</p>
            </li>
          ))}
        </ol>
        <p className="rounded-card bg-accent-soft px-5 py-4 text-ink">
          <b>Tenggat terkait: </b>
          {item.deadline}
        </p>
      </Block>

      {/* 10: konsultan penanggung jawab */}
      <Block id="konsultan" title="Konsultan penanggung jawab" surface>
        <div className="max-w-3xl">
          <ConsultantCard />
        </div>
      </Block>

      {/* 11: FAQ */}
      <Block id="faq" title={`Tanya jawab ${item.title}`}>
        <div className="max-w-3xl">
          <Accordion items={item.faq} />
        </div>
      </Block>

      {/* 12: dasar regulasi */}
      <Block id="regulasi" title="Dasar regulasi" surface>
        <ul className="mb-6 grid max-w-3xl list-disc gap-2 pl-5 text-muted">
          {item.regulations.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {/* shortcut: tanggal tinjau masih isian, ganti setelah konsultan memeriksa isi halaman. */}
        <p className="text-sm text-muted">
          Ditinjau oleh {site.consultant.name}, {site.consultant.degrees} · diperbarui [tanggal tinjau]
        </p>
      </Block>

      {/* 13: formulir bertahap */}
      <section id="formulir" aria-labelledby="formulir-h" className="scroll-mt-20 bg-navy py-14 text-on-navy sm:py-20">
        <div className="wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 id="formulir-h" className="mb-4 text-xl font-extrabold">
              Minta penawaran {item.title}
            </h2>
            <p className="max-w-[44ch] text-on-navy-muted">
              Isi tiga pertanyaan singkat. Kami balas di jam kerja ({site.hours}) dengan penawaran tertulis.
            </p>
          </div>
          <LeadForm defaultLayanan={item.title} defaultJenis={item.group === "pribadi" ? "Pribadi" : "Perusahaan"} />
        </div>
      </section>

      {/* 14: layanan terkait */}
      <Block id="terkait" title="Layanan terkait">
        <ul className="grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/layanan/${r.slug}`}
                className="flex h-full flex-col gap-2 rounded-card border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-navy"
              >
                <span className="text-xs font-bold text-muted">{kelompok[r.group]}</span>
                <b className="font-display text-lg">{r.title}</b>
                <span className="text-sm text-muted">{r.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Block>
    </>
  );
}
