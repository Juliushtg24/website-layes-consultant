import assert from "node:assert/strict";
import { test } from "node:test";
import { annualRows, icsFile, kalenderPdf, masaRows } from "./kalender.ts";

test("12 masa pajak mulai dari bulan lalu, lintas tahun", () => {
  const rows = masaRows(new Date(2026, 10, 1));
  assert.equal(rows.length, 12);
  assert.equal(rows[0].masa, "Oktober 2026");
  assert.equal(rows[0].lapor.label, "20 Nov 2026");
  assert.equal(rows[2].masa, "Desember 2026");
  assert.equal(rows[2].setor.label, "15 Jan 2027");
});

test("tenggat tahunan berikutnya", () => {
  assert.deepEqual(annualRows(new Date(2026, 10, 1)).map((r) => r.label), ["31 Mar 2027", "30 Apr 2027"]);
});

test("ics memakai CRLF dan berisi tenggat yang sudah digeser", () => {
  const ics = icsFile(new Date(2026, 10, 1));
  assert.ok(ics.startsWith("BEGIN:VCALENDAR\r\n"));
  assert.equal(ics.match(/BEGIN:VEVENT/g)?.length, 26);
  assert.ok(ics.includes("DTSTART;VALUE=DATE:20261221"));
  assert.ok(!/[^\r]\n/.test(ics));
});

test("tenggat yang jatuh di akhir pekan diberi tanggal asal", () => {
  const nov = masaRows(new Date(2026, 10, 1))[0];
  assert.equal(nov.setor.label, "16 Nov 2026");
  assert.equal(nov.setor.from, "15 Nov 2026");
  assert.equal(nov.lapor.from, null);
});

test("pdf: offset xref menunjuk ke setiap objek", () => {
  const pdf = kalenderPdf(new Date(2026, 10, 1), { name: "Layes", phone: "+62", email: "a@b.c" });
  assert.ok(pdf.startsWith("%PDF-1.4"));
  const xref = Number(pdf.match(/startxref\n(\d+)/)?.[1]);
  assert.ok(pdf.slice(xref).startsWith("xref"));
  const offsets = [...pdf.slice(xref).matchAll(/^(\d{10}) 00000 n $/gm)].map((m) => Number(m[1]));
  offsets.forEach((o, i) => assert.ok(pdf.slice(o).startsWith(`${i + 1} 0 obj`)));
  assert.ok(/^[\x00-\x7f]*$/.test(pdf));
});
