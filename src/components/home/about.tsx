import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink } from "@/lib/site";

const { consultant, license } = site;

const credentials = [
  { label: "Izin praktik konsultan pajak", value: `Sertifikat ${license.practiceClass}`, note: `No. ${license.practiceNumber}` },
  { label: "Kuasa hukum Pengadilan Pajak", value: "Berizin", note: `No. ${license.legalCounselNumber}` },
  { label: "Anggota asosiasi", value: license.association, note: "Asosiasi konsultan pajak dan akuntan" },
];

/** Profil konsultan. Di /tim dipakai sebagai konten utama dengan H1. */
export function About({ as: Heading = "h2", title = "Pajak Anda ditangani langsung oleh konsultan berizin" }: { as?: "h1" | "h2"; title?: string }) {
  return (
    <section id="tentang" aria-labelledby="tentang-h" className="relative overflow-hidden bg-navy text-on-navy">
      <div className="wrap grid items-end gap-10 pt-16 sm:pt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:pb-24">
          <p className="mb-3 text-sm font-bold text-accent">Tentang konsultan</p>
          <Heading id="tentang-h" className={`mb-5 font-extrabold ${Heading === "h1" ? "text-hero" : "text-xl"}`}>
            {title}
          </Heading>
          <p className="mb-8 max-w-[52ch] text-on-navy-muted">
            {consultant.name} memegang izin praktik konsultan pajak dan izin kuasa hukum Pengadilan Pajak, dengan latar
            belakang akuntansi. Di Layes, setiap klien ditangani langsung olehnya, dari konsultasi pertama sampai bukti
            lapor.
          </p>

          {/* Di halaman profil, nama sudah menjadi H1; cukup tampilkan gelar. */}
          <p className="mb-6">
            {title !== consultant.name && <b className="block font-display text-lg">{consultant.name}</b>}
            <span className="text-sm text-on-navy-muted">{consultant.degrees}</span>
          </p>

          <dl className="mb-9 grid max-w-[560px] gap-2">
            {credentials.map((c) => (
              <div key={c.label} className="grid gap-x-4 rounded-card bg-white/6 px-5 py-3.5 sm:grid-cols-[1fr_auto] sm:items-center">
                <dt className="text-sm text-on-navy-muted">
                  {c.label}
                  <span className="block text-xs tabular-nums">{c.note}</span>
                </dt>
                <dd className="font-display font-extrabold text-accent max-sm:mt-1">{c.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3 max-sm:[&>*]:flex-[1_1_100%]">
            <a href={waLink("Halo Layes Konsultan, saya ingin konsultasi langsung dengan konsultan.")} target="_blank" rel="noopener" className="btn btn-wa">
              <WhatsAppIcon />
              Konsultasi langsung
            </a>
            <Link href="/kredensial" className="btn btn-ghost">
              Cek legalitas
            </Link>
          </div>
        </div>

        {/* Foto tanpa latar berdiri di tepi bawah bagian, dengan cincin teal dari bentuk logo di belakangnya. */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute top-[6%] left-1/2 aspect-square w-[88%] -translate-x-1/2 rounded-full border-[28px] border-accent/15 sm:border-[40px]"
          />
          <Image
            src={consultant.photo}
            alt={`${consultant.name}, konsultan pajak Layes Konsultan`}
            width={900}
            height={1221}
            sizes="(min-width: 1024px) 480px, 420px"
            className="relative mx-auto h-auto w-full max-w-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
