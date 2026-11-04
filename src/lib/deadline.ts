// Logika alat "Kapan tenggat Anda?". Fungsi murni supaya bisa dites tanpa browser.
import { isHoliday } from "./libur.ts";

export const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

export type Profil = "badan" | "karyawan" | "usaha";

export const profil: Record<Profil, { tab: string; what: string; month: number; day: number; label: string; docs: string[] }> = {
  badan: {
    tab: "Perusahaan",
    what: "SPT Tahunan Badan",
    month: 3,
    day: 30,
    label: "perusahaan",
    docs: ["Laporan keuangan tahun lalu", "Rekap SPT Masa dan bukti potong", "Daftar aset dan penyusutan"],
  },
  karyawan: {
    tab: "Karyawan",
    what: "SPT Tahunan Pribadi",
    month: 2,
    day: 31,
    label: "karyawan",
    docs: ["Bukti potong 1721-A1 dari kantor", "Daftar harta dan utang akhir tahun", "Data tanggungan keluarga"],
  },
  usaha: {
    tab: "Usaha / profesi",
    what: "SPT Tahunan Pribadi",
    month: 2,
    day: 31,
    label: "usaha / pekerja bebas",
    docs: ["Catatan omzet atau pembukuan", "Bukti potong dari klien", "Daftar harta dan utang akhir tahun"],
  },
};

/** Tenggat tahunan berikutnya: tahun ini, atau tahun depan bila sudah lewat. Tanggal tenggat sendiri masih dihitung. */
export function nextAnnual(today: Date, month: number, day: number) {
  const t = workday(new Date(today.getFullYear(), month, day));
  return t < today ? workday(new Date(today.getFullYear() + 1, month, day)) : t;
}

/** SPT Masa: tanggal 20 bulan ini, atau bulan depan bila sudah lewat. */
export function nextMasa(today: Date) {
  const t = workday(new Date(today.getFullYear(), today.getMonth(), 20));
  return t < today ? workday(new Date(today.getFullYear(), today.getMonth() + 1, 20)) : t;
}

/** Geser ke hari kerja berikutnya bila jatuh pada Sabtu, Minggu atau hari libur. */
export function workday(d: Date) {
  const t = new Date(d);
  while (t.getDay() === 0 || t.getDay() === 6 || isHoliday(t)) t.setDate(t.getDate() + 1);
  return t;
}

export function daysBetween(from: Date, to: Date) {
  return Math.round((to.getTime() - from.getTime()) / 86_400_000);
}

export function shortDate(t: Date) {
  return `${t.getDate()} ${bulan[t.getMonth()]} ${t.getFullYear()}`;
}

/** Status tiap bulan untuk bar 12 bulan di kartu. */
export function monthStates(today: Date, due: Date) {
  return bulan.map((_, i) => {
    if (i === due.getMonth()) return "due";
    if (i === today.getMonth()) return "now";
    if (due.getFullYear() === today.getFullYear() && i < today.getMonth()) return "past";
    return "";
  });
}
