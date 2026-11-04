import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Block } from "@/components/block";
import { About } from "@/components/home/about";
import { JsonLd } from "@/components/json-ld";
import { kelompok, layanan } from "@/lib/layanan";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { findAnggota, tim } from "@/lib/tim";

export function generateStaticParams() {
  return tim.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tim/[slug]">): Promise<Metadata> {
  const t = findAnggota((await params).slug);
  if (!t) return {};
  return {
    title: `${t.name}, ${t.degrees}`,
    description: `${t.name}, ${t.role} di Layes Konsultan.`,
    alternates: { canonical: `/tim/${t.slug}` },
  };
}

// shortcut: About menampilkan site.consultant; buat profil per anggota saat tim bertambah.
export default async function AnggotaPage({ params }: PageProps<"/tim/[slug]">) {
  const t = findAnggota((await params).slug);
  if (!t) notFound();

  return (
    <>
      <JsonLd data={personSchema(t.slug)} />
      <JsonLd
        data={breadcrumbSchema([{ href: "/", label: "Beranda" }, { href: "/tim", label: "Tim" }, { label: t.name }])}
      />
      <About as="h1" title={t.name} />
      <Block id="layanan" title="Layanan yang ditangani" surface>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {layanan.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/layanan/${l.slug}`}
                className="flex h-full flex-col gap-1 rounded-card border border-line bg-card p-5 transition hover:-translate-y-0.5 hover:border-navy"
              >
                <span className="text-xs font-bold text-muted">{kelompok[l.group]}</span>
                <b className="font-display">{l.title}</b>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link href="/tim" className="font-bold text-navy underline dark:text-accent">
            ← Kembali ke tim
          </Link>
        </p>
      </Block>
    </>
  );
}
