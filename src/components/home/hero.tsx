import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink } from "@/lib/site";
import { DeadlineCard } from "./deadline-card";

const proof = [
  { title: "Perusahaan & pribadi", text: "PT, CV, karyawan, pengusaha dan pekerja bebas" },
  { title: "Online atau tatap muka", text: site.areas.join(", ") },
  { title: "Siap Coretax", text: "Pelaporan lewat sistem baru DJP" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-h" className="relative overflow-hidden bg-navy pt-10 pb-14 text-on-navy sm:pt-18 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-30 -right-45 size-155 rounded-full border-[90px] border-accent/7"
      />
      <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="rv mb-6 inline-flex items-center gap-2 rounded-full bg-white/8 py-1.5 pr-3.5 pl-2 text-sm font-semibold">
            <span aria-hidden="true" className="grid size-[22px] place-items-center rounded-full bg-accent text-xs font-extrabold text-navy-2">
              ✓
            </span>
            Izin praktik konsultan pajak · Kuasa hukum pajak
          </p>
          <h1 id="hero-h" className="rv mb-5 text-hero font-extrabold [animation-delay:80ms]">
            Urusan pajak perusahaan dan pribadi, <span className="text-accent">beres sebelum tenggat.</span>
          </h1>
          <p className="rv mb-8 max-w-[46ch] text-lg text-on-navy-muted [animation-delay:160ms] lg:max-w-[34ch]">
            Konsultan pajak terdaftar di Jabodetabek untuk SPT Tahunan, SPT Masa, PPN dan PPh. Harga ditulis di depan,
            laporan Anda periksa dulu sebelum dikirim.
          </p>
          <div className="rv flex flex-wrap gap-3 [animation-delay:240ms] max-sm:[&>*]:flex-[1_1_100%]">
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-wa">
              <WhatsAppIcon />
              Konsultasi via WhatsApp
            </a>
            <Link href="#kontak" className="btn btn-ghost">
              Jadwalkan pertemuan
            </Link>
          </div>
          <ul className="rv mt-11 grid gap-3 border-t border-white/12 pt-7 [animation-delay:240ms] sm:grid-cols-3 sm:gap-5">
            {proof.map((item) => (
              <li key={item.title}>
                <b className="block">{item.title}</b>
                <span className="block text-xs leading-snug text-on-navy-muted">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <DeadlineCard />
      </div>
    </section>
  );
}
