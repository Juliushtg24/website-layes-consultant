import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terima kasih",
  robots: { index: false, follow: false },
};

// Tujuan formulir setelah pengiriman ke email dipasang di Fase 6.
export default function TerimaKasihPage() {
  return (
    <PageHeader
      crumbs={[{ href: "/", label: "Beranda" }, { label: "Terima kasih" }]}
      title="Terima kasih, pesan Anda sudah kami terima"
      lead={`Kami membalas di jam kerja (${site.hours}) dengan pertanyaan lanjutan atau penawaran tertulis. Butuh jawaban lebih cepat? Chat kami langsung.`}
    >
      <div className="flex flex-wrap gap-3 max-sm:[&>*]:flex-[1_1_100%]">
        <a href={waLink()} target="_blank" rel="noopener" className="btn btn-wa">
          <WhatsAppIcon />
          Chat WhatsApp
        </a>
        <Link href="/kalender-pajak" className="btn btn-ghost">
          Lihat kalender pajak
        </Link>
      </div>
    </PageHeader>
  );
}
