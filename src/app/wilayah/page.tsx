import type { Metadata } from "next";
import Link from "next/link";
import { Block } from "@/components/block";
import { PageHeader } from "@/components/page-header";
import { wilayah } from "@/lib/wilayah";

export const metadata: Metadata = {
  alternates: { canonical: "/wilayah" },
  title: "Area layanan Jabodetabek",
  description: "Layes Konsultan melayani perusahaan dan pribadi di Jakarta, Bogor, Depok, Tangerang dan Bekasi, online maupun tatap muka.",
};

export default function WilayahPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Wilayah" }]}
        title="Konsultan pajak untuk seluruh Jabodetabek"
        lead="Kantor kami di Bekasi Selatan. Klien di kota lain kami layani online, dengan kunjungan terjadwal bila dibutuhkan."
      />
      <Block id="kota" title="Pilih kota Anda">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wilayah.map((w) => (
            <li key={w.slug}>
              <Link
                href={`/wilayah/${w.slug}`}
                className="flex h-full flex-col gap-2 rounded-card border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-navy"
              >
                <b className="font-display text-lg">Konsultan pajak {w.name}</b>
                <span className="text-sm text-muted">{w.how}</span>
                {w.hasOffice && <span className="mt-1 text-xs font-bold text-accent-ink">Lokasi kantor kami</span>}
              </Link>
            </li>
          ))}
        </ul>
      </Block>
    </>
  );
}
