import Link from "next/link";
import { waLink } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-25 flex gap-2.5 bg-card shadow-[0_-4px_16px_rgb(3_15_30/0.12)] px-4 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom,0px))] sm:hidden">
      <a href={waLink()} target="_blank" rel="noopener" className="btn btn-wa min-h-12 flex-1 px-3 text-sm whitespace-nowrap">
        Chat WhatsApp
      </a>
      <Link href="/#kontak" className="btn btn-line min-h-12 flex-1 px-3 text-sm whitespace-nowrap">
        Jadwalkan
      </Link>
    </div>
  );
}
