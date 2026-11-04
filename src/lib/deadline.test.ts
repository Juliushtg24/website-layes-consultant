import assert from "node:assert/strict";
import { test } from "node:test";
import { daysBetween, monthStates, nextAnnual, nextMasa, workday } from "./deadline.ts";

const d = (y: number, m: number, day: number) => new Date(y, m - 1, day);

test("tenggat tahunan: tahun ini, hari-H, lalu tahun depan", () => {
  assert.deepEqual(nextAnnual(d(2026, 3, 1), 2, 31), d(2026, 3, 31));
  assert.deepEqual(nextAnnual(d(2026, 3, 31), 2, 31), d(2026, 3, 31));
  assert.deepEqual(nextAnnual(d(2026, 4, 1), 2, 31), d(2027, 3, 31));
});

test("SPT Masa: tanggal 20, pindah bulan dan tahun, geser dari akhir pekan", () => {
  assert.deepEqual(nextMasa(d(2026, 11, 20)), d(2026, 11, 20));
  // 20 Des 2026 hari Minggu, jadi tenggatnya Senin 21 Des
  assert.deepEqual(nextMasa(d(2026, 11, 21)), d(2026, 12, 21));
  assert.deepEqual(nextMasa(d(2026, 12, 21)), d(2026, 12, 21));
  assert.deepEqual(nextMasa(d(2026, 12, 22)), d(2027, 1, 20));
});

test("hari kerja: akhir pekan dan libur nasional tetap", () => {
  assert.deepEqual(workday(d(2026, 11, 15)), d(2026, 11, 16));
  assert.deepEqual(workday(d(2026, 12, 25)), d(2026, 12, 28));
  assert.deepEqual(workday(d(2027, 4, 30)), d(2027, 4, 30));
});

test("selisih hari", () => {
  assert.equal(daysBetween(d(2026, 11, 1), d(2027, 4, 30)), 180);
  assert.equal(daysBetween(d(2026, 4, 30), d(2026, 4, 30)), 0);
});

test("bar bulan", () => {
  const s = monthStates(d(2026, 2, 10), d(2026, 4, 30));
  assert.deepEqual(s.slice(0, 5), ["past", "now", "", "due", ""]);
  assert.ok(!monthStates(d(2026, 11, 1), d(2027, 4, 30)).includes("past"));
});
