import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const nav = [
  { href: "/layanan", label: "Layanan" },
  { href: "/biaya", label: "Biaya" },
  { href: "/tim", label: "Tim" },
  { href: "/kredensial", label: "Kredensial" },
  { href: "/kontak", label: "Kontak" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-navy text-on-navy">
      <div className="wrap flex h-16 items-center gap-3 sm:h-[72px] sm:gap-8">
        <Link href="/" className="flex-none" aria-label={`${site.legalName}, ke beranda`}>
          <Image
            src="/logo/logo-layes-putih.png"
            alt=""
            width={774}
            height={160}
            priority
            className="h-9 w-auto sm:h-12"
          />
        </Link>
        <nav aria-label="Menu utama" className="ml-auto hidden gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-on-navy-muted transition-colors hover:text-on-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          className="btn btn-wa ml-auto min-h-11 w-11 px-0 text-sm sm:w-auto sm:px-[18px] lg:ml-0"
        >
          <WhatsAppIcon />
          <span className="max-sm:sr-only">Chat WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
