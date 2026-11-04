import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/kebijakan-privasi" },
  title: "Kebijakan privasi",
  description: "Cara Layes Konsultan mengumpulkan, memakai, menyimpan dan melindungi data pribadi Anda sesuai UU Pelindungan Data Pribadi.",
};

export default function PrivasiPage() {
  return (
    <LegalPage
      crumb="Kebijakan privasi"
      title="Kebijakan privasi"
      lead={`Kebijakan ini menjelaskan bagaimana ${site.legalName} memproses data pribadi Anda, mengikuti UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi.`}
      sections={[
        {
          h: "Siapa kami",
          p: [`${site.legalName} adalah pengendali data pribadi untuk data yang Anda berikan lewat situs ini, WhatsApp, email dan pertemuan. Alamat: ${site.address}. Email: ${site.email}.`],
        },
        {
          h: "Data yang kami kumpulkan",
          ul: [
            "Saat Anda menghubungi kami: nama, kota, nomor WhatsApp atau email, jenis wajib pajak dan layanan yang Anda butuhkan.",
            "Setelah surat penugasan ditandatangani: dokumen dan data perpajakan yang diperlukan untuk pekerjaan, termasuk identitas wajib pajak.",
            "Saat Anda membuka situs: data teknis seperti jenis perangkat dan halaman yang dibuka. Alat analitik hanya aktif bila Anda menyetujuinya.",
          ],
          p: ["Formulir di situs ini tidak meminta NPWP, NIK atau dokumen keuangan. Jangan kirim data tersebut lewat formulir."],
        },
        {
          h: "Untuk apa data dipakai",
          ul: [
            "Menjawab pertanyaan dan mengirim penawaran, atas dasar persetujuan Anda.",
            "Menjalankan pekerjaan yang Anda tugaskan, atas dasar perjanjian di surat penugasan.",
            "Memenuhi kewajiban hukum, misalnya pelaporan ke Direktorat Jenderal Pajak atas nama Anda dan penyimpanan dokumen.",
          ],
        },
        {
          h: "Kepada siapa data dibagikan",
          ul: [
            "Direktorat Jenderal Pajak dan instansi berwenang, sebatas yang diperlukan untuk pekerjaan Anda atau diwajibkan hukum.",
            "Penyedia layanan yang membantu kami, seperti layanan pesan, email dan hosting situs, dengan kewajiban menjaga kerahasiaan.",
          ],
          p: ["Kami tidak menjual data pribadi Anda."],
        },
        {
          h: "Berapa lama data disimpan",
          p: [
            "Data dari pertanyaan yang tidak berlanjut menjadi penugasan kami hapus setelah tidak diperlukan lagi. Dokumen pekerjaan perpajakan disimpan selama jangka waktu yang diwajibkan peraturan perpajakan, lalu dimusnahkan dengan aman.",
          ],
        },
        {
          h: "Hak Anda",
          ul: [
            "Mendapat informasi tentang pemrosesan data Anda dan meminta salinannya.",
            "Memperbaiki data yang tidak akurat.",
            "Meminta penghapusan atau penghentian pemrosesan, sepanjang tidak bertentangan dengan kewajiban hukum kami.",
            "Menarik persetujuan yang sudah Anda berikan.",
          ],
          p: [`Kirim permintaan ke ${site.email} atau WhatsApp ${site.phone}. Kami menanggapinya dalam jangka waktu yang ditetapkan UU Pelindungan Data Pribadi.`],
        },
        {
          h: "Keamanan",
          p: ["Dokumen pajak hanya diterima lewat saluran yang kami sepakati, akses dibatasi pada orang yang menangani pekerjaan Anda, dan konsultan terikat kewajiban kerahasiaan profesi."],
        },
        {
          h: "Perubahan kebijakan",
          p: ["Bila kebijakan ini berubah, versi terbaru dan tanggal berlakunya kami tampilkan di halaman ini."],
        },
      ]}
    />
  );
}
