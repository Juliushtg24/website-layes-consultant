import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const { consultant, license } = site;

export function ConsultantCard() {
  return (
    <div className="flex flex-col gap-6 rounded-panel bg-navy p-6 text-on-navy sm:flex-row sm:items-center sm:p-8">
      <div className="size-28 flex-none overflow-hidden rounded-full bg-white/8 sm:size-32">
        <Image src={consultant.photo} alt={consultant.name} width={900} height={1221} sizes="210px" className="mt-[6%] -ml-[18%] w-[164%] max-w-none" />
      </div>
      <div className="grid gap-3">
        <p>
          <b className="block font-display text-lg">{consultant.name}</b>
          <span className="text-sm text-on-navy-muted">{consultant.degrees}</span>
        </p>
        <ul className="grid gap-1 text-sm text-on-navy-muted">
          <li>
            Izin praktik konsultan pajak No. {license.practiceNumber} · Sertifikat {license.practiceClass}
          </li>
          <li>Izin kuasa hukum Pengadilan Pajak No. {license.legalCounselNumber}</li>
          <li>Anggota {license.association}</li>
        </ul>
        <Link href="/kredensial" className="text-sm font-bold text-accent hover:underline">
          Cara cek legalitas →
        </Link>
      </div>
    </div>
  );
}
