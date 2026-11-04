import { SectionHead } from "./section-head";

type Status = "ok" | "wait" | "soon";

const pill: Record<Status, string> = {
  ok: "bg-tint text-navy dark:text-ink",
  wait: "bg-accent-soft text-accent-ink",
  soon: "bg-surface text-muted",
};

type Row = { lead: string; sub?: string; text: string; status: Status; label: string };

const panels = [
  {
    title: "Perusahaan",
    text: "PT dan CV yang ingin kewajiban bulanan dan tahunannya berjalan tanpa harus mengingat tanggal.",
    navy: true,
    sheet: "Kalender kepatuhan",
    sheetNote: "Contoh PT · November",
    rows: [
      { lead: "15 Nov", sub: "Setor", text: "PPh 21 & 23 Oktober", status: "ok", label: "Selesai" },
      { lead: "20 Nov", sub: "Lapor", text: "SPT Masa PPN & PPh", status: "wait", label: "Draf diperiksa" },
      { lead: "30 Nov", sub: "Siapkan", text: "Rekap faktur pajak", status: "soon", label: "Dijadwalkan" },
    ] as Row[],
    checks: ["Laporan bulanan dan tahunan dalam satu jadwal", "Pendampingan saat ada SP2DK atau pemeriksaan"],
  },
  {
    title: "Pribadi",
    text: "Karyawan, pengusaha dan pekerja bebas yang ingin SPT-nya benar tanpa repot belajar aturan.",
    navy: false,
    sheet: "Dokumen yang kami minta",
    sheetNote: "SPT Tahunan pribadi",
    rows: [
      { lead: "1", text: "Bukti potong 1721-A1 dari kantor", status: "ok", label: "Ada" },
      { lead: "2", text: "Daftar harta dan utang akhir tahun", status: "wait", label: "Dilengkapi" },
      { lead: "3", text: "Kartu keluarga untuk tanggungan", status: "ok", label: "Ada" },
    ] as Row[],
    checks: ["Lebih dari satu pemberi kerja atau ada usaha sampingan", "SPT kurang bayar, lebih bayar atau perlu pembetulan"],
  },
];

export function Audience() {
  return (
    <section id="klien" aria-labelledby="klien-h" className="bg-surface py-16 sm:py-24">
      <div className="wrap">
        <SectionHead id="klien-h" kicker="Untuk siapa" title="Satu tim untuk pajak usaha dan pajak pribadi Anda">
          Banyak pemilik usaha kami urus dua-duanya, supaya data perusahaan dan pribadi tidak saling bertabrakan.
        </SectionHead>
        <div className="grid gap-6 md:grid-cols-2">
          {panels.map((p) => (
            <div
              key={p.title}
              className={`grid content-start gap-6 rounded-panel px-[22px] py-7 sm:p-10 ${
                p.navy ? "bg-navy text-on-navy" : "border border-line bg-card"
              }`}
            >
              <h3 className="text-xl font-extrabold">{p.title}</h3>
              <p className={p.navy ? "text-on-navy-muted" : "text-muted"}>{p.text}</p>
              <div aria-label={`Contoh ${p.sheet.toLowerCase()}`} className="rounded-card border border-line bg-card p-5 text-ink">
                <h4 className="mb-3 flex justify-between gap-3 text-sm font-extrabold">
                  {p.sheet} <span className="font-sans font-semibold text-muted">{p.sheetNote}</span>
                </h4>
                {p.rows.map((r) => (
                  <div
                    key={r.text}
                    className="grid grid-cols-[56px_minmax(0,1fr)] items-center gap-x-3 gap-y-1.5 border-t border-line py-2.5 text-sm first-of-type:border-t-0 sm:grid-cols-[72px_1fr_auto]"
                  >
                    <span className="font-extrabold tabular-nums">
                      {r.lead}
                      {r.sub && <small className="block text-[0.6875rem] font-semibold text-muted">{r.sub}</small>}
                    </span>
                    <span>{r.text}</span>
                    <span
                      className={`justify-self-start rounded-full px-2.5 py-0.5 text-xs font-bold whitespace-nowrap max-sm:col-start-2 ${pill[r.status]}`}
                    >
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
              <ul className="grid gap-2.5">
                {p.checks.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span aria-hidden="true" className={`font-extrabold ${p.navy ? "text-accent" : "text-navy dark:text-accent"}`}>
                      ✓
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
