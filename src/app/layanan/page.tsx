import type { Metadata } from "next";
import Link from "next/link";
import { ServiceGroups } from "@/components/home/services";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/layanan" },
  title: "Layanan konsultan pajak",
  description:
    "SPT Tahunan, SPT Masa, PPN dan PKP, PPh 21, aktivasi Coretax, pendampingan pemeriksaan dan kuasa hukum Pengadilan Pajak di Jabodetabek. Harga mulai dari tertulis.",
};

export default function LayananPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Layanan" }]}
        title="Layanan konsultan pajak di Jabodetabek"
        lead="Untuk perusahaan dan pribadi, dari laporan rutin sampai sengketa. Setiap layanan punya harga mulai dari, dan harga final selalu ditulis sebelum pekerjaan dimulai."
      >
        <div className="flex flex-wrap gap-3 max-sm:[&>*]:flex-[1_1_100%]">
          <a href={waLink("Halo Layes Konsultan, saya ingin tahu layanan yang cocok untuk saya.")} target="_blank" rel="noopener" className="btn btn-wa">
            <WhatsAppIcon />
            Tanya layanan yang cocok
          </a>
          <Link href="/#kontak" className="btn btn-ghost">
            Minta penawaran
          </Link>
        </div>
      </PageHeader>
      <section aria-label="Daftar layanan" className="py-16 sm:py-24">
        <div className="wrap">
          <ServiceGroups />
        </div>
      </section>
    </>
  );
}
