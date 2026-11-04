// Hari libur nasional dan cuti bersama, format "YYYY-MM-DD".
// Tenggat pajak yang jatuh pada Sabtu, Minggu, libur nasional atau cuti bersama bergeser ke hari kerja berikutnya (PMK 81/2024).
// Tanggal tetap sudah diisi. Libur yang berpindah (Imlek, Nyepi, Idul Fitri, Idul Adha, Waisak, Kenaikan, Wafat Isa Almasih,
// Tahun Baru Islam, Maulid, Isra Mikraj) dan cuti bersama WAJIB ditambahkan dari SKB 3 Menteri setiap tahun.
const tetap = ["01-01", "05-01", "06-01", "08-17", "12-25"];

const berpindah: string[] = [
  // Contoh: "2027-03-10", isi dari SKB 3 Menteri tentang hari libur nasional dan cuti bersama 2027.
];

export function isHoliday(d: Date) {
  const mmdd = `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return tetap.includes(mmdd) || berpindah.includes(`${d.getFullYear()}-${mmdd}`);
}
