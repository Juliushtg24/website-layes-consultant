import { Accordion } from "@/components/accordion";
import { waLink } from "@/lib/site";

// Dipakai ulang untuk schema FAQPage di Fase 5.
export const faq = [
  {
    q: "Berapa biaya konsultasi awal?",
    a: "Konsultasi awal gratis, lewat WhatsApp atau pertemuan singkat. Setelah itu kami kirim penawaran tertulis, dan Anda bebas memutuskan.",
  },
  {
    q: "Apakah ada biaya tersembunyi?",
    a: "Tidak. Harga final ditulis di surat penugasan sebelum pekerjaan dimulai. Pekerjaan tambahan selalu ditawarkan tertulis lebih dulu.",
  },
  {
    q: "Bagaimana cara memastikan konsultan pajak itu resmi?",
    a: "Cocokkan nama dan nomor izin praktiknya di daftar resmi Kementerian Keuangan. Sejak PMK 55/2026 izin juga mencantumkan kelas A, B atau C.",
  },
  {
    q: "Bagaimana data dan dokumen saya dijaga?",
    a: "Kami tidak meminta NPWP, NIK atau dokumen keuangan lewat formulir website. Dokumen diminta setelah surat penugasan, lewat saluran yang aman.",
  },
  {
    q: "Saya terlambat lapor SPT. Masih bisa dibantu?",
    a: "Bisa. Kami hitung sanksi yang mungkin timbul, laporkan secepatnya, dan bantu bila ada surat teguran dari kantor pajak.",
  },
];

export function Faq() {
  return (
    <section id="tanya" aria-labelledby="tanya-h" className="py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <p className="mb-3 text-sm font-bold text-accent-ink">Tanya jawab</p>
          <h2 id="tanya-h" className="mb-4 text-xl font-extrabold">
            Yang paling sering ditanyakan
          </h2>
          <p className="mb-6 text-muted">Pertanyaan Anda tidak ada di sini? Tanyakan langsung, kami balas di jam kerja.</p>
          <a href={waLink("Halo Layes Konsultan, saya punya pertanyaan pajak.")} target="_blank" rel="noopener" className="btn btn-line">
            Tanya via WhatsApp
          </a>
        </div>
        <Accordion items={faq} />
      </div>
    </section>
  );
}
