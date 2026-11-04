import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/syarat-layanan" },
  title: "Syarat layanan",
  description: "Ketentuan penggunaan situs dan layanan konsultasi pajak Layes Konsultan.",
};

export default function SyaratPage() {
  return (
    <LegalPage
      crumb="Syarat layanan"
      title="Syarat layanan"
      lead={`Ketentuan ini berlaku untuk penggunaan situs dan layanan ${site.legalName}. Untuk setiap pekerjaan, surat penugasan yang Anda tandatangani yang berlaku utama.`}
      sections={[
        {
          h: "Informasi di situs ini",
          p: [
            "Artikel, kalender dan alat di situs ini adalah informasi umum, bukan nasihat pajak untuk kondisi Anda. Aturan pajak bisa berubah. Untuk keputusan yang menyangkut kewajiban pajak Anda, konsultasikan lebih dulu dengan kami.",
          ],
        },
        {
          h: "Konsultasi awal",
          p: ["Konsultasi awal gratis dan tidak mengikat. Hubungan kerja baru dimulai setelah surat penugasan ditandatangani kedua pihak."],
        },
        {
          h: "Surat penugasan",
          ul: [
            "Memuat cakupan pekerjaan, harga, cara pembayaran, tenggat dan konsultan penanggung jawab.",
            "Pekerjaan di luar cakupan ditawarkan tertulis lebih dulu.",
            "Tidak ada laporan yang dikirim ke Direktorat Jenderal Pajak sebelum Anda menyetujui drafnya.",
          ],
        },
        {
          h: "Tanggung jawab Anda",
          ul: [
            "Memberikan data dan dokumen yang benar, lengkap dan tepat waktu.",
            "Menyetor pajak memakai kode billing yang kami kirimkan sebelum batas waktunya.",
            "Memberi tahu kami bila ada perubahan usaha, penghasilan atau surat dari kantor pajak.",
          ],
        },
        {
          h: "Kerahasiaan",
          p: ["Kami menjaga kerahasiaan data dan dokumen Anda sesuai kode etik profesi konsultan pajak dan kebijakan privasi kami."],
        },
        {
          h: "Batas tanggung jawab",
          p: [
            "Kami bekerja berdasarkan data yang Anda berikan. Hasil keberatan, banding atau gugatan diputuskan oleh instansi atau pengadilan yang berwenang, sehingga kami tidak dapat menjamin hasil tertentu.",
          ],
        },
        {
          h: "Hukum yang berlaku",
          p: ["Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diselesaikan lebih dulu secara musyawarah, termasuk lewat prosedur pengaduan kami."],
        },
      ]}
    />
  );
}
