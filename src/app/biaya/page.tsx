import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { Block, Check } from "@/components/block";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { layanan } from "@/lib/layanan";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/biaya" },
  title: "Biaya jasa konsultan pajak",
  description: "Harga mulai dari untuk SPT Tahunan, SPT Masa, PPN, PPh 21 dan Coretax. Harga final ditulis di surat penugasan sebelum pekerjaan dimulai.",
};

const factors = [
  "Omzet dan jumlah transaksi",
  "Jumlah karyawan, vendor dan faktur pajak",
  "Kerapian pembukuan dan dokumen yang tersedia",
  "Tenggat: pekerjaan mendadak menjelang batas lapor butuh tenaga tambahan",
];

const faq = [
  { q: "Apakah konsultasi awal dikenai biaya?", a: "Tidak. Konsultasi awal lewat WhatsApp atau pertemuan singkat gratis dan tidak mengikat." },
  { q: "Kenapa harganya \"mulai dari\"?", a: "Karena beban kerja setiap klien berbeda. Setelah melihat kondisi Anda, kami tulis harga final di surat penugasan." },
  { q: "Kapan pembayaran dilakukan?", a: "Ketentuan pembayaran ditulis di surat penugasan. Untuk retainer bulanan, tagihan dikirim setiap bulan." },
  { q: "Bagaimana bila ada pekerjaan tambahan?", a: "Kami tawarkan tertulis lebih dulu. Tidak ada biaya yang muncul tanpa persetujuan Anda." },
];

export default function BiayaPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Biaya" }]}
        title="Biaya jasa konsultan pajak"
        lead="Harga mulai dari untuk setiap layanan. Harga final, cakupan dan tenggat selalu ditulis di surat penugasan sebelum pekerjaan dimulai."
      >
        <a href={waLink("Halo Layes Konsultan, saya ingin perkiraan biaya jasa pajak.")} target="_blank" rel="noopener" className="btn btn-wa max-sm:w-full">
          <WhatsAppIcon />
          Minta perkiraan biaya
        </a>
      </PageHeader>

      <Block id="harga" title="Harga mulai dari per layanan">
        <div className="overflow-x-auto rounded-panel border border-line">
          <table className="w-full min-w-[560px] text-left">
            <caption className="sr-only">Harga mulai dari setiap layanan</caption>
            <thead className="bg-surface text-sm text-muted">
              <tr>
                <th scope="col" className="px-5 py-3.5 font-semibold">Layanan</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Mulai dari</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {layanan.map((l) => (
                <tr key={l.slug} className="border-t border-line">
                  <th scope="row" className="px-5 py-4 font-bold">
                    <Link href={`/layanan/${l.slug}#biaya`} className="hover:underline">
                      {l.title}
                    </Link>
                  </th>
                  <td className="px-5 py-4 font-display font-extrabold whitespace-nowrap">{l.price}</td>
                  <td className="px-5 py-4 text-sm text-muted">{l.priceNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block id="faktor" title="Yang menentukan harga final" surface>
        <ul className="grid max-w-3xl gap-3">
          {factors.map((f) => (
            <li key={f} className="flex gap-3">
              <Check />
              {f}
            </li>
          ))}
        </ul>
      </Block>

      <Block id="faq" title="Tanya jawab biaya">
        <div className="max-w-3xl">
          <Accordion items={faq} />
        </div>
      </Block>
    </>
  );
}
