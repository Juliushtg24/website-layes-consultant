import type { Metadata } from "next";
import { Block } from "@/components/block";
import { ConsultantCard } from "@/components/consultant-card";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/kredensial" },
  title: "Cek legalitas kami",
  description: "Izin praktik konsultan pajak, izin kuasa hukum Pengadilan Pajak, asosiasi dan NIB Layes Konsultan, beserta cara memverifikasinya sendiri.",
};

const { license, consultant } = site;

const data = [
  { term: "Badan usaha", value: site.legalName, how: "NIB bisa dicek di sistem OSS (oss.go.id).", detail: `NIB ${site.nib}` },
  {
    term: "Izin praktik konsultan pajak",
    value: `${consultant.name}, Besertifikat ${license.practiceClass}`,
    detail: `No. ${license.practiceNumber}`,
    how: "Cari nama atau nomor izin di Sistem Informasi Konsultan Pajak Kementerian Keuangan.",
    url: "https://sikop.kemenkeu.go.id",
  },
  {
    term: "Izin kuasa hukum Pengadilan Pajak",
    value: consultant.name,
    detail: `No. ${license.legalCounselNumber}`,
    how: "Cocokkan dengan daftar kuasa hukum di situs Sekretariat Pengadilan Pajak.",
    url: "https://setpp.kemenkeu.go.id",
  },
  { term: "Asosiasi", value: license.association, detail: "Asosiasi Konsultan Pajak Publik Indonesia dan Ikatan Akuntan Indonesia", how: "Keanggotaan bisa ditanyakan ke asosiasi masing-masing." },
];

export default function KredensialPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Kredensial" }]}
        title="Cek legalitas kami sendiri"
        lead="Konsultan pajak wajib memiliki izin praktik dari Kementerian Keuangan. Semua nomor izin kami tercantum di sini beserta cara memeriksanya."
      />

      <Block id="data" title="Data legalitas">
        <dl className="grid gap-4 md:grid-cols-2">
          {data.map((d) => (
            <div key={d.term} className="flex flex-col gap-2 rounded-panel border border-line bg-card p-6 sm:p-7">
              <dt className="text-sm font-bold text-accent-ink">{d.term}</dt>
              <dd className="font-display text-lg font-extrabold">{d.value}</dd>
              <dd className="tabular-nums">{d.detail}</dd>
              <dd className="mt-auto pt-3 text-sm text-muted">
                {d.how}{" "}
                {d.url && (
                  <a href={d.url} target="_blank" rel="noopener" className="font-bold text-navy underline dark:text-accent">
                    Buka situsnya
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block id="kelas" title="Tentang kelas izin" surface>
        <div className="grid max-w-3xl gap-4 text-muted">
          <p>
            Sejak PMK 55/2026, izin praktik konsultan pajak mencantumkan kelas A, B atau C yang menentukan jenis wajib pajak
            yang boleh dilayani. Kartu izin praktik kami mencantumkan sertifikat {license.practiceClass}.
          </p>
          <p>
            Untuk sengketa di Pengadilan Pajak, wajib pajak hanya bisa diwakili kuasa hukum yang memiliki izin kuasa hukum.
            Izin itu terpisah dari izin praktik konsultan pajak, dan kami memiliki keduanya.
          </p>
        </div>
      </Block>

      <Block id="penanggung-jawab" title="Konsultan penanggung jawab">
        <div className="max-w-3xl">
          <ConsultantCard />
        </div>
      </Block>
    </>
  );
}
