import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Block } from "@/components/block";
import { PageHeader } from "@/components/page-header";
import { tim } from "@/lib/tim";

export const metadata: Metadata = {
  alternates: { canonical: "/tim" },
  title: "Tim konsultan",
  description: "Konsultan pajak berizin di Layes Konsultan, lengkap dengan nomor izin praktik dan izin kuasa hukum.",
};

export default function TimPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Tim" }]}
        title="Konsultan yang menangani pajak Anda"
        lead="Di Layes Konsultan, Anda bekerja langsung dengan konsultan berizin, bukan dengan staf yang berganti-ganti."
      />
      <Block id="anggota" title="Tim kami">
        <ul className="grid max-w-4xl gap-6">
          {tim.map((t) => (
            <li key={t.slug}>
              <Link href={`/tim/${t.slug}`} className="group grid overflow-hidden rounded-panel bg-navy text-on-navy sm:grid-cols-[300px_1fr] sm:items-center">
                <div className="relative h-80 overflow-hidden sm:h-96">
                  <div aria-hidden="true" className="absolute top-8 left-1/2 size-64 -translate-x-1/2 rounded-full border-[28px] border-accent/15" />
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={900}
                    height={1221}
                    sizes="360px"
                    className="relative mx-auto w-[78%] pt-6 transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-10">
                  <b className="block font-display text-xl">{t.name}</b>
                  <span className="block text-sm text-on-navy-muted">{t.degrees}</span>
                  <span className="mt-2 block text-sm text-accent">{t.role}</span>
                  <span className="mt-6 inline-block text-sm font-bold group-hover:underline">Lihat profil →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Block>
    </>
  );
}
