import { DocCheckIcon, IconBox, PersonIcon, ScaleIcon } from "@/components/icons";
import { site } from "@/lib/site";

const points = [
  {
    icon: <DocCheckIcon />,
    title: "Surat penugasan untuk setiap pekerjaan",
    text: "Cakupan, harga dan tenggat ditulis dan Anda tanda tangani.",
  },
  {
    icon: <ScaleIcon />,
    title: "Kuasa hukum di Pengadilan Pajak",
    text: "Bisa mewakili Anda dari keberatan sampai banding.",
  },
  {
    icon: <PersonIcon />,
    title: "Konsultan yang sama dari awal",
    text: "Namanya ada di surat penugasan dan bisa dihubungi langsung.",
  },
];

const { license } = site;
const data = [
  ["Konsultan", `${site.consultant.name}, ${site.consultant.degrees}`],
  ["Izin praktik", `No. ${license.practiceNumber} · Sertifikat ${license.practiceClass}`],
  ["Izin kuasa hukum", `No. ${license.legalCounselNumber}`],
  ["Asosiasi", license.association],
  ["Badan usaha", `NIB ${site.nib}`],
];

export function Legal() {
  return (
    <section id="legalitas" aria-labelledby="legalitas-h" className="py-16 sm:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>
          <p className="mb-3 text-sm font-bold text-accent-ink">Legalitas</p>
          <h2 id="legalitas-h" className="mb-4 text-xl font-extrabold">
            Konsultan resmi yang izinnya bisa Anda cek sendiri
          </h2>
          <p className="mb-7 max-w-[46ch] text-muted">
            Sejak PMK 55/2026, izin praktik konsultan pajak mencantumkan kelas A, B atau C yang menentukan klien apa saja
            yang boleh dilayani. Kami cantumkan semuanya di sini.
          </p>
          <ul className="grid gap-[18px]">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <IconBox>{p.icon}</IconBox>
                <span>
                  <b className="block">{p.title}</b>
                  <span className="text-sm text-muted">{p.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-panel border border-line bg-card">
          <div className="flex items-center justify-between gap-4 bg-navy p-5 text-on-navy sm:px-7 sm:py-[22px]">
            <p>
              <b className="block text-lg">{site.legalName}</b>
              <span className="text-xs text-on-navy-muted">Data legalitas resmi</span>
            </p>
            <span
              aria-hidden="true"
              className="grid size-14 flex-none place-items-center rounded-full border-2 border-accent text-center text-[0.6875rem] leading-tight font-extrabold text-accent"
            >
              TER
              <br />
              DAFTAR
            </span>
          </div>
          <dl className="grid grid-cols-[auto_1fr] px-5 pt-1 pb-4 text-sm sm:px-7 sm:pt-2 sm:pb-6">
            {data.map(([term, value], i) => (
              <div key={term} className={`col-span-2 grid grid-cols-subgrid py-3.5 ${i ? "border-t border-line" : ""}`}>
                <dt className="text-muted">{term}</dt>
                <dd className="pl-6 text-right font-bold tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mx-5 mb-5 rounded-field bg-surface px-4 py-3.5 text-sm text-muted sm:mx-7 sm:mb-7">
            <b className="text-ink">Cara cek:</b> cocokkan nama dan nomor izin di atas dengan daftar konsultan pajak resmi di
            situs Kementerian Keuangan.
          </p>
        </div>
      </div>
    </section>
  );
}
