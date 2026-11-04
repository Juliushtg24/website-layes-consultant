import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { today } from "@/lib/today";
import { wilayah } from "@/lib/wilayah";

const columns = [
  {
    title: "Layanan",
    links: [
      { href: "/layanan/spt-tahunan-badan", label: "SPT Tahunan Badan" },
      { href: "/layanan/spt-masa", label: "SPT Masa PPN & PPh" },
      { href: "/layanan/spt-tahunan-pribadi", label: "SPT Tahunan Pribadi" },
      { href: "/layanan/pendampingan-pemeriksaan", label: "Sengketa pajak" },
      { href: "/layanan", label: "Semua layanan" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { href: "/tim", label: "Tim" },
      { href: "/kredensial", label: "Legalitas" },
      { href: "/biaya", label: "Biaya" },
      { href: "/kalender-pajak", label: "Kalender pajak" },
      { href: "/kontak", label: "Kontak" },
    ],
  },
  {
    title: "Wilayah",
    links: wilayah.map((w) => ({ href: `/wilayah/${w.slug}`, label: `Konsultan pajak ${w.name}` })),
  },
];

const legal = [
  { href: "/kebijakan-privasi", label: "Kebijakan privasi" },
  { href: "/syarat-layanan", label: "Syarat layanan" },
  { href: "/pengaduan", label: "Pengaduan" },
];

export async function Footer() {
  const year = new Date(await today()).getFullYear();
  return (
    // Di ponsel, ruang bawah ekstra supaya baris terakhir tidak tertutup MobileBar.
    <footer className="bg-navy-2 pt-14 pb-8 text-sm text-on-navy-muted max-sm:pb-28">
      <div className="wrap grid gap-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="mb-3 inline-block" aria-label={`${site.legalName}, ke beranda`}>
            <Image src="/logo/logo-layes-putih.png" alt="" width={774} height={160} className="h-12 w-auto" />
          </Link>
          <p>{site.description}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="mb-3 text-sm text-on-navy">{col.title}</h2>
            <ul>
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-0.5 transition-colors hover:text-on-navy">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="mb-3 text-sm text-on-navy">Kontak</h2>
          <address className="not-italic">
            {site.phone}
            <br />
            {site.email}
            <br />
            {site.address}
            <br />
            {site.hours}
          </address>
        </div>
        <div className="col-span-full mt-8 flex flex-wrap justify-between gap-3 text-xs">
          <span>
            © {year} {site.legalName} · Izin praktik No. {site.license.practiceNumber} · NIB {site.nib}
          </span>
          <span className="flex flex-wrap gap-x-3">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-on-navy">
                {l.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
