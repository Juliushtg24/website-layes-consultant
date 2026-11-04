import { ClockIcon, DocIcon, IconBox, LockIcon, ShieldIcon } from "@/components/icons";

const items = [
  { icon: <ShieldIcon />, title: "Izin bisa dicek", text: "Nomor izin tercantum di bawah" },
  { icon: <DocIcon />, title: "Harga tertulis", text: "Di surat penugasan, sebelum mulai" },
  { icon: <ClockIcon />, title: "Lapor tepat waktu", text: "Pengingat tenggat untuk setiap klien" },
  { icon: <LockIcon />, title: "Data dijaga", text: "Dokumen hanya lewat saluran aman" },
];

export function TrustStrip() {
  return (
    <div className="border-b border-line">
    <ul aria-label="Alasan memilih Layes" className="wrap grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.title} className="flex items-center gap-3.5 text-sm leading-snug text-muted">
          <IconBox>{item.icon}</IconBox>
          <span>
            <b className="block text-ink">{item.title}</b>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
    </div>
  );
}
