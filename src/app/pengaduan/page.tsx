import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/pengaduan" },
  title: "Pengaduan",
  description: "Cara menyampaikan pengaduan atas layanan Layes Konsultan dan bagaimana kami menanganinya.",
};

export default function PengaduanPage() {
  return (
    <LegalPage
      crumb="Pengaduan"
      title="Pengaduan layanan"
      lead="Bila layanan kami tidak sesuai harapan, sampaikan kepada kami. Setiap pengaduan dicatat dan ditanggapi tertulis."
      sections={[
        {
          h: "Cara menyampaikan pengaduan",
          ul: [
            `Email ke ${site.email} dengan judul "Pengaduan".`,
            `WhatsApp ke ${site.phone}.`,
            `Surat atau datang ke kantor: ${site.address}.`,
          ],
          p: ["Sertakan nama Anda, layanan yang dimaksud, apa yang terjadi, dan penyelesaian yang Anda harapkan. Jangan kirim NPWP atau NIK lewat email biasa."],
        },
        {
          h: "Cara kami menangani",
          ul: [
            "Kami konfirmasi penerimaan pengaduan paling lambat 1 hari kerja.",
            "Pengaduan ditelaah oleh konsultan penanggung jawab.",
            "Kami kirim tanggapan tertulis dan usulan penyelesaian paling lambat 14 hari kerja.",
          ],
        },
        {
          h: "Bila Anda belum puas",
          p: [
            `Anda dapat menyampaikan pengaduan atas perilaku profesi konsultan kepada asosiasi tempat konsultan kami bernaung (${site.license.association}), atau kepada Pusat Pembinaan Profesi Keuangan Kementerian Keuangan sebagai pembina konsultan pajak.`,
          ],
        },
      ]}
    />
  );
}
