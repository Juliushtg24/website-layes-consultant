import { bulan, nextAnnual, workday } from "./deadline.ts";
import { pdfDocument, type PdfRect, type PdfText } from "./pdf.ts";

const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

const label = (d: Date) => `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;

/** Tenggat hari kerja, ditambah tanggal asal bila bergeser karena libur. */
function due(year: number, month: number, day: number) {
  const raw = new Date(year, month, day);
  const date = workday(raw);
  return { date, label: label(date), from: date.getTime() === raw.getTime() ? null : label(raw) };
}

/** Tenggat SPT Masa 12 masa pajak ke depan, mulai dari masa bulan lalu. */
export function masaRows(today: Date) {
  return Array.from({ length: 12 }, (_, i) => {
    const masa = new Date(today.getFullYear(), today.getMonth() - 1 + i, 1);
    const y = masa.getFullYear();
    const m = masa.getMonth() + 1;
    return { masa: `${namaBulan[masa.getMonth()]} ${y}`, setor: due(y, m, 15), lapor: due(y, m, 20) };
  });
}

export function annualRows(today: Date) {
  const op = nextAnnual(today, 2, 31);
  const badan = nextAnnual(today, 3, 30);
  return [
    { what: `SPT Tahunan orang pribadi, tahun pajak ${op.getFullYear() - 1}`, ...due(op.getFullYear(), 2, 31) },
    { what: `SPT Tahunan badan, tahun buku ${badan.getFullYear() - 1}`, ...due(badan.getFullYear(), 3, 30) },
  ];
}

const ymd = (d: Date) => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;

/** File iCalendar berisi tenggat 12 bulan ke depan, sudah digeser ke hari kerja. */
export function icsFile(today: Date) {
  const events = [
    ...masaRows(today).flatMap((r) => [
      { date: r.setor.date, summary: `Batas setor pajak masa ${r.masa}` },
      { date: r.lapor.date, summary: `Batas lapor SPT Masa ${r.masa}` },
    ]),
    ...annualRows(today).map((a) => ({ date: a.date, summary: `Batas lapor ${a.what}` })),
  ].filter((e) => e.date >= today);

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Layes Konsultan//Kalender Pajak//ID",
    "X-WR-CALNAME:Kalender pajak Layes Konsultan",
    ...events.map((e) =>
      [
        "BEGIN:VEVENT",
        `UID:${ymd(e.date)}-${e.summary.length}@layeskonsultan`,
        `DTSTAMP:${ymd(today)}T000000Z`,
        `DTSTART;VALUE=DATE:${ymd(e.date)}`,
        `SUMMARY:${e.summary}`,
        "DESCRIPTION:Pengingat dari Layes Konsultan.",
        "END:VEVENT",
      ].join("\r\n"),
    ),
    "END:VCALENDAR",
    "",
  ].join("\r\n");
}

const NAVY: [number, number, number] = [13, 48, 97];
const TEAL: [number, number, number] = [20, 196, 191];
const MUTED: [number, number, number] = [74, 90, 112];
const SURFACE: [number, number, number] = [243, 247, 250];

/** PDF kalender pajak 12 bulan ke depan untuk dicetak atau disimpan. */
export function kalenderPdf(today: Date, contact: { name: string; phone: string; email: string }) {
  const texts: PdfText[] = [
    { x: 40, y: 790, text: "Kalender pajak 12 bulan ke depan", size: 20, bold: true, color: [255, 255, 255] },
    { x: 40, y: 768, text: `${contact.name} | WhatsApp ${contact.phone} | ${contact.email}`, size: 9, color: [184, 198, 220] },
    { x: 40, y: 715, text: "SPT Tahunan", size: 13, bold: true },
  ];
  const rects: PdfRect[] = [{ x: 0, y: 745, w: 595, h: 97, color: NAVY }];

  annualRows(today).forEach((a, i) => {
    const y = 690 - i * 20;
    texts.push({ x: 40, y, text: a.what, size: 10 }, { x: 400, y, text: a.label, size: 10, bold: true, color: NAVY });
  });

  let y = 620;
  texts.push({ x: 40, y, text: "SPT Masa bulanan", size: 13, bold: true });
  y -= 28;
  rects.push({ x: 32, y: y - 6, w: 531, h: 20, color: SURFACE });
  texts.push(
    { x: 40, y, text: "Masa pajak", size: 9, bold: true, color: MUTED },
    { x: 220, y, text: "Batas setor", size: 9, bold: true, color: MUTED },
    { x: 400, y, text: "Batas lapor", size: 9, bold: true, color: MUTED },
  );
  for (const r of masaRows(today)) {
    y -= 24;
    texts.push(
      { x: 40, y, text: r.masa, size: 10, bold: true },
      { x: 220, y, text: r.setor.label + (r.setor.from ? "*" : ""), size: 10 },
      { x: 400, y, text: r.lapor.label + (r.lapor.from ? "*" : ""), size: 10, bold: true, color: NAVY },
    );
  }
  y -= 34;
  rects.push({ x: 32, y: y - 30, w: 4, h: 42, color: TEAL });
  texts.push(
    { x: 44, y, text: "* Bergeser ke hari kerja berikutnya karena jatuh pada akhir pekan atau hari libur.", size: 9, color: MUTED },
    { x: 44, y: y - 14, text: "Dasar: PMK 81/2024. Libur nasional yang berpindah tanggal mengikuti SKB 3 Menteri; cek ulang menjelang tenggat.", size: 9, color: MUTED },
    { x: 44, y: y - 28, text: "Informasi umum, bukan nasihat pajak untuk kondisi Anda.", size: 9, color: MUTED },
  );
  return pdfDocument(texts, rects);
}
