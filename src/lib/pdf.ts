// PDF satu halaman A4 berisi teks, ditulis langsung tanpa pustaka.
// shortcut: hanya ASCII dan font standar Helvetica; pakai pustaka PDF bila butuh gambar atau banyak halaman.
export type PdfText = { x: number; y: number; text: string; size?: number; bold?: boolean; color?: [number, number, number] };
export type PdfRect = { x: number; y: number; w: number; h: number; color: [number, number, number] };

const ascii = (s: string) => s.replace(/[–—]/g, "-").replace(/·/g, "|").replace(/[^\x20-\x7e]/g, "");
const esc = (s: string) => ascii(s).replace(/[\\()]/g, "\\$&");
const rgb = ([r, g, b]: [number, number, number]) => `${(r / 255).toFixed(3)} ${(g / 255).toFixed(3)} ${(b / 255).toFixed(3)}`;

export function pdfDocument(texts: PdfText[], rects: PdfRect[] = []) {
  const stream = [
    ...rects.map((r) => `${rgb(r.color)} rg ${r.x} ${r.y} ${r.w} ${r.h} re f`),
    ...texts.map((t) => `BT ${rgb(t.color ?? [15, 33, 59])} rg /${t.bold ? "F2" : "F1"} ${t.size ?? 10} Tf ${t.x} ${t.y} Td (${esc(t.text)}) Tj ET`),
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ];

  let out = "%PDF-1.4\n";
  const offsets = objects.map((body, i) => {
    const at = out.length;
    out += `${i + 1} 0 obj\n${body}\nendobj\n`;
    return at;
  });
  const xref = out.length;
  out += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  out += offsets.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("");
  out += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return out;
}
