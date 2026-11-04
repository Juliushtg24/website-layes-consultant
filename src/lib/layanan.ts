import { site } from "./site";

// Data layanan untuk beranda, /layanan dan /layanan/[slug].
// Isi pajak (tenggat, aturan) wajib ditinjau konsultan sebelum terbit.
export type Kelompok = "perusahaan" | "pribadi" | "sengketa";

export const kelompok: Record<Kelompok, string> = {
  perusahaan: "Untuk perusahaan (PT/CV)",
  pribadi: "Untuk pribadi",
  sengketa: "Pemeriksaan dan sengketa",
};

type Langkah = { title: string; text: string; time: string };
type Tanya = { q: string; a: string };

export type Layanan = {
  slug: string;
  group: Kelompok;
  title: string;
  summary: string;
  price: string;
  priceNote: string;
  waText: string;
  h1: string;
  lead: string;
  problems: { title: string; text: string }[];
  includes: string[];
  excludes: string[];
  priceFactors: string[];
  documents: string[];
  process: Langkah[];
  deadline: string;
  faq: Tanya[];
  regulations: string[];
  related: string[];
};

const UU_KUP = "UU No. 6 Tahun 1983 tentang Ketentuan Umum dan Tata Cara Perpajakan beserta perubahannya";
const UU_PPH = "UU No. 7 Tahun 1983 tentang Pajak Penghasilan beserta perubahannya";
const UU_PPN = "UU No. 8 Tahun 1983 tentang PPN dan PPnBM beserta perubahannya";
const UU_HPP = "UU No. 7 Tahun 2021 tentang Harmonisasi Peraturan Perpajakan";
const PMK_CORETAX = "PMK No. 81 Tahun 2024 tentang ketentuan perpajakan dalam rangka pelaksanaan sistem inti administrasi perpajakan (Coretax)";

export const layanan: Layanan[] = [
  {
    slug: "spt-tahunan-badan",
    group: "perusahaan",
    title: "SPT Tahunan Badan",
    summary: "Laporan pajak tahunan PT dan CV, dari rekonsiliasi fiskal sampai bukti lapor.",
    price: site.prices["spt-tahunan-badan"],
    priceNote: "mulai dari, per tahun",
    waText: "Halo Layes Konsultan, saya butuh bantuan SPT Tahunan Badan.",
    h1: "Jasa SPT Tahunan Badan untuk PT dan CV di Jabodetabek",
    lead: "Untuk perusahaan yang ingin SPT Tahunan PPh Badan dihitung benar, diperiksa bersama, dan dilapor sebelum 30 April.",
    problems: [
      { title: "Laporan keuangan sudah ada, koreksi fiskal belum", text: "Laba komersial perlu dikoreksi menjadi laba fiskal sebelum PPh Badan bisa dihitung." },
      { title: "Tim internal tidak sempat", text: "Akuntan Anda sibuk tutup buku, sementara tenggat 30 April makin dekat." },
      { title: "SPT tahun lalu terasa janggal", text: "Ada kelebihan atau kekurangan bayar yang belum jelas asalnya dan perlu ditelusuri." },
      { title: "Pertama kali lapor lewat Coretax", text: "Formulir dan alur pelaporan di sistem baru DJP berbeda dari e-Form lama." },
    ],
    includes: [
      "Rekonsiliasi fiskal dari laporan keuangan",
      "Perhitungan PPh Badan terutang dan kredit pajak",
      "Perhitungan angsuran PPh Pasal 25 tahun berikutnya",
      "Penyusunan lampiran SPT, termasuk daftar penyusutan",
      "Pelaporan di Coretax dan bukti penerimaan elektronik",
    ],
    excludes: [
      "Penyusunan pembukuan atau laporan keuangan dari nol",
      "Audit laporan keuangan oleh akuntan publik",
      "Pembetulan SPT tahun-tahun sebelumnya (ditawarkan terpisah)",
    ],
    priceFactors: ["Omzet dan jumlah transaksi", "Kerapian laporan keuangan", "Jumlah koreksi fiskal dan aset yang disusutkan"],
    documents: [
      "Laporan keuangan tahun pajak (neraca dan laba rugi)",
      "Rekap SPT Masa setahun dan bukti setor",
      "Bukti potong PPh dari pihak lain",
      "Daftar aset tetap dan penyusutan",
      "SPT Tahunan Badan tahun sebelumnya",
    ],
    process: [
      { title: "Konsultasi dan penawaran", text: "Kami lihat skala usaha Anda lalu kirim surat penugasan.", time: "1 hari kerja" },
      { title: "Pengumpulan dokumen", text: "Anda kirim dokumen lewat saluran yang kami sepakati.", time: "Sesuai kesiapan Anda" },
      { title: "Rekonsiliasi dan draf SPT", text: "Kami susun koreksi fiskal dan draf SPT untuk Anda periksa.", time: "5 sampai 10 hari kerja" },
      { title: "Persetujuan dan pelaporan", text: "Setelah Anda setuju, SPT dilapor dan bukti lapor dikirim.", time: "Sebelum 30 April" },
    ],
    deadline: "SPT Tahunan PPh Badan dilapor paling lambat 4 bulan setelah akhir tahun buku, yaitu 30 April untuk tahun buku kalender.",
    faq: [
      { q: "Kapan batas lapor SPT Tahunan Badan?", a: "Paling lambat 4 bulan setelah tahun buku berakhir. Untuk tahun buku Januari sampai Desember, batasnya 30 April." },
      { q: "Apa denda bila terlambat lapor?", a: "Keterlambatan SPT Tahunan Badan dikenai denda administrasi Rp1.000.000, di luar bunga bila ada pajak yang kurang bayar." },
      { q: "Perusahaan kami belum punya laporan keuangan rapi. Bisa dibantu?", a: "Bisa, tetapi penyusunan pembukuan dihitung sebagai pekerjaan tambahan. Kami tawarkan tertulis setelah melihat kondisinya." },
      { q: "Perusahaan rugi. Tetap wajib lapor?", a: "Tetap wajib. Kerugian fiskal yang dilaporkan dengan benar bisa dikompensasikan ke tahun-tahun berikutnya." },
      { q: "Berapa lama prosesnya?", a: "Umumnya 5 sampai 10 hari kerja setelah dokumen lengkap. Mulai sejak Februari supaya ada waktu memeriksa draf." },
    ],
    regulations: [UU_KUP, UU_PPH, UU_HPP, PMK_CORETAX],
    related: ["spt-masa", "pph-21-payroll", "pendampingan-pemeriksaan"],
  },
  {
    slug: "spt-masa",
    group: "perusahaan",
    title: "SPT Masa bulanan",
    summary: "PPh 21, 23, 4(2), 25 dan PPN dilaporkan tepat waktu tiap bulan, dengan retainer.",
    price: site.prices["spt-masa"],
    priceNote: "mulai dari, per bulan",
    waText: "Halo Layes Konsultan, saya butuh bantuan SPT Masa bulanan.",
    h1: "Jasa SPT Masa bulanan untuk perusahaan di Jabodetabek",
    lead: "Untuk PT dan CV yang ingin setor dan lapor pajak bulanan beres tiap bulan tanpa harus mengingat tanggal.",
    problems: [
      { title: "Sering mepet tanggal 20", text: "Pelaporan dikerjakan di menit terakhir dan rawan salah atau terlambat." },
      { title: "Tidak ada staf pajak", text: "Pemilik atau admin keuangan merangkap mengurus pajak bulanan." },
      { title: "Bukti potong menumpuk", text: "PPh 23 dan 4(2) dari vendor belum dicatat dan dibuat bukti potongnya." },
      { title: "Peralihan ke Coretax", text: "Bukti potong dan SPT Masa sekarang dibuat di sistem yang berbeda dari sebelumnya." },
    ],
    includes: [
      "Perhitungan PPh 21, 23, 4(2), 25 dan PPN setiap bulan",
      "Pembuatan bukti potong di Coretax",
      "Kode billing dan pengingat tanggal setor",
      "Pelaporan SPT Masa dan arsip bukti lapor",
      "Rekap bulanan yang siap dipakai untuk SPT Tahunan",
    ],
    excludes: [
      "Pembukuan dan penyusunan laporan keuangan",
      "Penyetoran pajak atas nama perusahaan (dilakukan oleh Anda)",
      "Pembetulan masa pajak sebelum kontrak dimulai",
    ],
    priceFactors: ["Jenis pajak yang dikelola", "Jumlah karyawan dan vendor", "Jumlah faktur pajak per bulan"],
    documents: [
      "Daftar gaji dan karyawan bulan berjalan",
      "Daftar pembayaran ke vendor yang dipotong PPh",
      "Faktur pajak keluaran dan masukan (bila PKP)",
      "Akses atau kuasa Coretax perusahaan",
    ],
    process: [
      { title: "Kick-off", text: "Kami petakan jenis pajak dan jadwal bulanan perusahaan Anda.", time: "Minggu pertama" },
      { title: "Kirim data bulanan", text: "Anda kirim data transaksi paling lambat awal bulan berikutnya.", time: "Tanggal 1 sampai 5" },
      { title: "Hitung dan setor", text: "Kami hitung pajak dan kirim kode billing untuk disetor.", time: "Sebelum tanggal 15" },
      { title: "Lapor", text: "SPT Masa dilapor dan bukti lapor diarsipkan.", time: "Sebelum tanggal 20" },
    ],
    deadline: "Sejak Coretax, pajak bulanan disetor paling lambat tanggal 15 dan SPT Masa dilapor paling lambat tanggal 20 bulan berikutnya.",
    faq: [
      { q: "Kapan batas setor dan lapor SPT Masa?", a: "Setor paling lambat tanggal 15 dan lapor paling lambat tanggal 20 bulan berikutnya. Bila jatuh pada hari libur, ikuti ketentuan hari kerja berikutnya." },
      { q: "Bulan tanpa transaksi tetap harus lapor?", a: "Untuk SPT Masa tertentu tetap perlu lapor nihil. Kami petakan mana yang wajib saat kick-off." },
      { q: "Apakah kontraknya bulanan atau tahunan?", a: "Retainer berjalan bulanan dengan masa minimum yang ditulis di surat penugasan." },
      { q: "Siapa yang menyetor pajak?", a: "Anda menyetor dari rekening perusahaan memakai kode billing dari kami, supaya uang perusahaan tetap di tangan Anda." },
      { q: "Bisa sekaligus SPT Tahunan?", a: "Bisa. Klien retainer mendapat rekap bulanan yang memudahkan SPT Tahunan Badan, dan harganya kami tawarkan bersamaan." },
    ],
    regulations: [UU_KUP, UU_PPH, UU_PPN, PMK_CORETAX],
    related: ["pph-21-payroll", "ppn-dan-pkp", "spt-tahunan-badan"],
  },
  {
    slug: "ppn-dan-pkp",
    group: "perusahaan",
    title: "PPN dan pengukuhan PKP",
    summary: "Pengukuhan PKP, e-Faktur di Coretax, dan pelaporan PPN.",
    price: site.prices["ppn-dan-pkp"],
    priceNote: "mulai dari",
    waText: "Halo Layes Konsultan, saya butuh bantuan PPN dan pengukuhan PKP.",
    h1: "Jasa pengukuhan PKP dan PPN untuk perusahaan di Jabodetabek",
    lead: "Untuk usaha yang omzetnya mendekati batas pengusaha kecil, atau yang diminta klien untuk menerbitkan faktur pajak.",
    problems: [
      { title: "Omzet melewati Rp4,8 miliar", text: "Usaha wajib dikukuhkan sebagai PKP dan mulai memungut PPN." },
      { title: "Klien besar minta faktur pajak", text: "Pembeli korporat hanya mau bekerja sama dengan vendor yang sudah PKP." },
      { title: "Baru jadi PKP", text: "Belum terbiasa membuat faktur, mengkreditkan pajak masukan, dan lapor SPT Masa PPN." },
      { title: "Faktur di Coretax", text: "Pembuatan faktur pajak sekarang lewat Coretax dengan alur yang berbeda." },
    ],
    includes: [
      "Pemeriksaan kewajiban atau kelayakan menjadi PKP",
      "Pengajuan pengukuhan PKP sampai terbit",
      "Pendampingan bila ada verifikasi lokasi usaha",
      "Pelatihan singkat pembuatan faktur pajak di Coretax",
      "Pelaporan SPT Masa PPN bulan pertama",
    ],
    excludes: [
      "Pelaporan SPT Masa PPN bulan-bulan berikutnya (lihat retainer SPT Masa)",
      "Restitusi PPN (ditawarkan terpisah)",
    ],
    priceFactors: ["Bentuk usaha dan kelengkapan legalitas", "Kebutuhan verifikasi lokasi", "Volume faktur per bulan"],
    documents: ["Akta pendirian dan perubahan terakhir", "NIB dan izin usaha", "Bukti tempat usaha (sewa atau milik)", "Data pengurus perusahaan"],
    process: [
      { title: "Cek kelayakan", text: "Kami cek omzet, legalitas dan kesiapan tempat usaha.", time: "1 hari kerja" },
      { title: "Pengajuan", text: "Permohonan pengukuhan PKP diajukan lewat Coretax.", time: "1 sampai 3 hari kerja" },
      { title: "Verifikasi", text: "Kami dampingi bila kantor pajak melakukan verifikasi.", time: "Sesuai jadwal KPP" },
      { title: "Siap menerbitkan faktur", text: "Anda dilatih membuat faktur dan kami lapor PPN bulan pertama.", time: "Setelah PKP terbit" },
    ],
    deadline: "Pengusaha wajib melaporkan usahanya untuk dikukuhkan sebagai PKP paling lambat akhir bulan berikutnya setelah omzet melewati batas pengusaha kecil.",
    faq: [
      { q: "Berapa batas omzet wajib PKP?", a: "Rp4,8 miliar dalam satu tahun buku. Di bawah batas itu, usaha boleh memilih dikukuhkan secara sukarela." },
      { q: "Apa untung ruginya PKP sukarela?", a: "Anda bisa menerbitkan faktur dan mengkreditkan pajak masukan, tetapi wajib lapor SPT Masa PPN setiap bulan. Kami hitung dulu bersama Anda." },
      { q: "Berapa lama PKP terbit?", a: "Tergantung kelengkapan dokumen dan verifikasi kantor pajak. Kami beri perkiraan setelah memeriksa data Anda." },
      { q: "Apakah faktur pajak sekarang dibuat di Coretax?", a: "Ya. Faktur pajak dibuat di Coretax. Kami latih tim Anda sampai bisa membuatnya sendiri." },
      { q: "Kantor kami virtual office. Bisa jadi PKP?", a: "Bisa dalam kondisi tertentu, tergantung ketentuan dan verifikasi KPP. Ceritakan kondisinya, kami cek dulu." },
    ],
    regulations: [UU_KUP, UU_PPN, UU_HPP, PMK_CORETAX],
    related: ["spt-masa", "coretax", "spt-tahunan-badan"],
  },
  {
    slug: "pph-21-payroll",
    group: "perusahaan",
    title: "PPh 21 karyawan",
    summary: "Hitung PPh 21 skema TER dan bukti potong untuk seluruh karyawan.",
    price: site.prices["pph-21-payroll"],
    priceNote: "mulai dari, per bulan",
    waText: "Halo Layes Konsultan, saya butuh bantuan PPh 21 karyawan.",
    h1: "Jasa hitung PPh 21 karyawan skema TER di Jabodetabek",
    lead: "Untuk perusahaan yang ingin potongan PPh 21 tiap bulan benar dan bukti potong karyawan terbit tepat waktu.",
    problems: [
      { title: "Bingung tarif efektif rata-rata", text: "Skema TER memakai tabel kategori yang berbeda menurut status karyawan." },
      { title: "Hitungan Desember selisih", text: "Di masa pajak terakhir PPh 21 dihitung ulang setahun dan sering muncul kurang atau lebih potong." },
      { title: "Karyawan minta bukti potong", text: "Bukti potong 1721-A1 dibutuhkan karyawan untuk SPT Tahunan pribadinya." },
      { title: "Banyak jenis penghasilan", text: "Bonus, THR, lembur dan honor tenaga lepas punya perlakuan berbeda." },
    ],
    includes: [
      "Perhitungan PPh 21 bulanan dengan skema TER",
      "Perhitungan ulang setahun di masa pajak terakhir",
      "Bukti potong bulanan dan tahunan karyawan",
      "PPh 21 tenaga lepas dan bukan pegawai",
      "Pelaporan SPT Masa PPh 21",
    ],
    excludes: ["Penggajian (transfer gaji) dan BPJS", "Penyusunan kebijakan remunerasi"],
    priceFactors: ["Jumlah karyawan", "Jumlah tenaga lepas dan bukan pegawai", "Variasi komponen gaji"],
    documents: ["Data karyawan dan status PTKP", "Rekap gaji, tunjangan, bonus dan THR", "Daftar pembayaran ke tenaga lepas"],
    process: [
      { title: "Pemetaan karyawan", text: "Kami cocokkan status PTKP dan kategori TER tiap karyawan.", time: "Bulan pertama" },
      { title: "Hitung bulanan", text: "Anda kirim rekap gaji, kami kirim hitungan PPh 21.", time: "Setiap bulan" },
      { title: "Setor dan lapor", text: "Kode billing dikirim dan SPT Masa dilapor.", time: "Tanggal 15 dan 20" },
      { title: "Tutup tahun", text: "Perhitungan setahun dan bukti potong tahunan untuk karyawan.", time: "Januari" },
    ],
    deadline: "PPh 21 disetor paling lambat tanggal 15 dan dilapor paling lambat tanggal 20 bulan berikutnya. Bukti potong tahunan dibutuhkan karyawan sebelum 31 Maret.",
    faq: [
      { q: "Apa itu skema TER?", a: "Tarif efektif rata-rata dipakai untuk memotong PPh 21 bulanan. Di masa pajak terakhir, PPh 21 dihitung ulang dengan tarif Pasal 17 untuk setahun." },
      { q: "Kenapa PPh 21 Desember bisa besar?", a: "Karena selisih antara potongan TER setahun dan hitungan tarif Pasal 17 dibebankan di masa pajak terakhir." },
      { q: "Apakah THR dan bonus kena PPh 21?", a: "Ya, keduanya termasuk penghasilan dan dipotong pada bulan dibayarkan." },
      { q: "Bisa untuk perusahaan dengan sedikit karyawan?", a: "Bisa. Harga mengikuti jumlah karyawan, jadi usaha kecil membayar lebih sedikit." },
      { q: "Apakah karyawan bisa minta bukti potong langsung?", a: "Bukti potong diterbitkan atas nama perusahaan dan kami kirim ke Anda untuk dibagikan." },
    ],
    regulations: [UU_PPH, "PP No. 58 Tahun 2023 tentang tarif pemotongan PPh Pasal 21", "PMK No. 168 Tahun 2023 tentang petunjuk pelaksanaan pemotongan PPh Pasal 21", PMK_CORETAX],
    related: ["spt-masa", "spt-tahunan-pribadi", "spt-tahunan-badan"],
  },
  {
    slug: "spt-tahunan-pribadi",
    group: "pribadi",
    title: "SPT Tahunan Pribadi",
    summary: "Untuk karyawan, pemilik usaha, dan freelancer.",
    price: site.prices["spt-tahunan-pribadi"],
    priceNote: "mulai dari, per tahun",
    waText: "Halo Layes Konsultan, saya butuh bantuan SPT Tahunan Pribadi.",
    h1: "Jasa lapor SPT Tahunan Pribadi di Jabodetabek",
    lead: "Untuk karyawan, pemilik usaha dan pekerja bebas yang ingin SPT-nya benar tanpa harus mempelajari aturan sendiri.",
    problems: [
      { title: "Lebih dari satu pemberi kerja", text: "Pindah kerja atau punya dua sumber gaji sering membuat SPT kurang bayar." },
      { title: "Punya usaha sampingan", text: "Penghasilan usaha atau freelance perlu dihitung dengan norma atau pembukuan." },
      { title: "Harta belum pernah dilaporkan", text: "Daftar harta dan utang perlu dirapikan supaya tidak dipertanyakan." },
      { title: "SPT lebih bayar", text: "Ada potongan pajak berlebih dan perlu dipilih: dikembalikan atau dikompensasikan." },
    ],
    includes: [
      "Perhitungan penghasilan dari semua sumber",
      "Penyusunan daftar harta dan utang",
      "Pengisian SPT di Coretax",
      "Pelaporan dan bukti penerimaan elektronik",
    ],
    excludes: ["Pembetulan SPT tahun-tahun sebelumnya (ditawarkan terpisah)", "Pembukuan usaha bulanan"],
    priceFactors: ["Jumlah sumber penghasilan", "Ada atau tidaknya usaha", "Jumlah harta yang dilaporkan"],
    documents: [
      "Bukti potong 1721-A1 dari kantor",
      "Bukti potong lain dari klien atau pemberi kerja",
      "Daftar harta dan utang akhir tahun",
      "Data tanggungan keluarga",
      "Catatan omzet atau pembukuan (bila punya usaha)",
    ],
    process: [
      { title: "Ceritakan kondisi Anda", text: "Lewat WhatsApp kami tanya sumber penghasilan dan harta.", time: "Hari ini" },
      { title: "Kirim dokumen", text: "Kirim bukti potong dan daftar harta lewat saluran yang aman.", time: "1 sampai 2 hari" },
      { title: "Periksa draf", text: "Kami kirim ringkasan SPT untuk Anda setujui.", time: "2 sampai 3 hari kerja" },
      { title: "Lapor", text: "SPT dilapor dan bukti lapor dikirim ke Anda.", time: "Sebelum 31 Maret" },
    ],
    deadline: "SPT Tahunan PPh orang pribadi dilapor paling lambat 3 bulan setelah akhir tahun pajak, yaitu 31 Maret.",
    faq: [
      { q: "Kapan batas lapor SPT Tahunan Pribadi?", a: "Paling lambat 31 Maret tahun berikutnya." },
      { q: "Apa denda bila terlambat?", a: "Denda administrasi Rp100.000 untuk keterlambatan SPT Tahunan orang pribadi, di luar bunga bila ada kurang bayar." },
      { q: "Penghasilan saya di bawah PTKP. Tetap lapor?", a: "Bila sudah punya NPWP atau NIK yang aktif sebagai NPWP, umumnya tetap wajib lapor. Kami bantu cek apakah Anda termasuk yang dikecualikan." },
      { q: "Saya pindah kerja tahun lalu. Apa yang dibutuhkan?", a: "Bukti potong dari setiap pemberi kerja. Penghasilannya digabung sehingga bisa muncul kurang bayar." },
      { q: "Apakah bisa sekaligus untuk pasangan?", a: "Bisa. Bila pisah harta atau istri memilih menjalankan kewajiban sendiri, perhitungannya kami sesuaikan." },
    ],
    regulations: [UU_KUP, UU_PPH, UU_HPP, PMK_CORETAX],
    related: ["coretax", "pph-21-payroll", "pendampingan-pemeriksaan"],
  },
  {
    slug: "coretax",
    group: "pribadi",
    title: "Aktivasi Coretax",
    summary: "Aktivasi akun dan sertifikat elektronik, dibantu sampai bisa dipakai.",
    price: site.prices.coretax,
    priceNote: "mulai dari",
    waText: "Halo Layes Konsultan, saya butuh bantuan aktivasi Coretax.",
    h1: "Jasa aktivasi akun Coretax di Jabodetabek",
    lead: "Untuk Anda yang belum bisa masuk ke Coretax, lupa kata sandi, atau perlu kode otorisasi untuk menandatangani SPT.",
    problems: [
      { title: "Belum pernah aktivasi", text: "Akun DJP Online lama perlu diaktifkan ulang di Coretax." },
      { title: "Email atau nomor HP lama", text: "Data kontak di DJP sudah tidak aktif sehingga kode verifikasi tidak masuk." },
      { title: "Belum punya kode otorisasi", text: "SPT tidak bisa ditandatangani tanpa kode otorisasi atau sertifikat elektronik." },
      { title: "Pengurus perusahaan berganti", text: "Akun badan perlu dihubungkan ke penanggung jawab yang baru." },
    ],
    includes: [
      "Aktivasi akun Coretax",
      "Pembaruan email dan nomor ponsel",
      "Pembuatan kode otorisasi atau sertifikat elektronik",
      "Panduan singkat menu yang Anda butuhkan",
    ],
    excludes: ["Pelaporan SPT (ditawarkan terpisah)", "Pengurusan NPWP baru"],
    priceFactors: ["Akun pribadi atau badan", "Perlu atau tidaknya pembaruan data kontak"],
    documents: ["KTP", "Email dan nomor ponsel aktif", "Akses ke email untuk menerima kode verifikasi"],
    process: [
      { title: "Cek status akun", text: "Kami tanyakan kondisi akun Anda lewat WhatsApp.", time: "Hari ini" },
      { title: "Aktivasi bersama", text: "Lewat panggilan video atau di kantor, akun diaktifkan bersama Anda.", time: "30 sampai 60 menit" },
      { title: "Kode otorisasi", text: "Kode otorisasi dibuat supaya Anda bisa menandatangani SPT.", time: "Di sesi yang sama" },
    ],
    deadline: "Aktivasi sebaiknya selesai jauh sebelum tenggat SPT Tahunan, karena antrean bantuan biasanya padat di bulan Maret.",
    faq: [
      { q: "Apakah kata sandi saya disimpan?", a: "Tidak. Aktivasi dilakukan bersama Anda, dan kata sandi Anda yang membuat dan simpan sendiri." },
      { q: "Bisa dilakukan online?", a: "Bisa, lewat panggilan video. Anda yang memasukkan data, kami yang memandu." },
      { q: "Apa beda kode otorisasi dan sertifikat elektronik?", a: "Keduanya dipakai untuk menandatangani dokumen secara elektronik di Coretax. Kami bantu pilih yang sesuai kebutuhan Anda." },
      { q: "Akun perusahaan juga bisa?", a: "Bisa. Penanggung jawab perusahaan perlu ikut dalam sesi aktivasi." },
      { q: "Setelah aktif, apakah bisa sekalian lapor SPT?", a: "Bisa. Pelaporan SPT dihitung sebagai layanan terpisah dan kami tawarkan langsung di sesi yang sama." },
    ],
    regulations: [UU_KUP, PMK_CORETAX],
    related: ["spt-tahunan-pribadi", "ppn-dan-pkp", "spt-masa"],
  },
  {
    slug: "pendampingan-pemeriksaan",
    group: "sengketa",
    title: "Pendampingan pemeriksaan",
    summary: "Tanggapan SP2DK, pemeriksaan, dan keberatan sebagai kuasa wajib pajak.",
    price: "Sesuai kasus",
    priceNote: "ditulis setelah konsultasi",
    waText: "Halo Layes Konsultan, saya butuh pendampingan SP2DK atau pemeriksaan pajak.",
    h1: "Pendampingan SP2DK dan pemeriksaan pajak di Jabodetabek",
    lead: "Untuk wajib pajak yang menerima surat dari kantor pajak dan ingin menjawabnya dengan tenang, lengkap dan tepat waktu.",
    problems: [
      { title: "Menerima SP2DK", text: "Kantor pajak meminta penjelasan atas data yang dianggap belum dilaporkan." },
      { title: "Diperiksa", text: "Ada surat perintah pemeriksaan dan permintaan dokumen yang harus dipenuhi." },
      { title: "Ketetapan terasa tidak tepat", text: "Surat ketetapan pajak terbit dan Anda ingin mengajukan keberatan." },
      { title: "Takut salah menjawab", text: "Jawaban yang tergesa-gesa bisa memperburuk posisi Anda." },
    ],
    includes: [
      "Analisis surat dan data yang dipermasalahkan",
      "Penyusunan tanggapan SP2DK dan dokumen pendukung",
      "Pendampingan atau mewakili Anda sebagai kuasa saat pemeriksaan",
      "Penyusunan surat keberatan",
    ],
    excludes: ["Banding dan gugatan di Pengadilan Pajak (lihat layanan kuasa hukum)", "Pembayaran pajak dan sanksi"],
    priceFactors: ["Jenis surat dan tahap sengketa", "Jumlah tahun dan jenis pajak", "Volume dokumen yang perlu ditelaah"],
    documents: ["Surat dari kantor pajak yang Anda terima", "SPT tahun yang dipermasalahkan", "Dokumen transaksi terkait"],
    process: [
      { title: "Kirim surat yang Anda terima", text: "Kami baca dan jelaskan risikonya dengan bahasa sederhana.", time: "1 hari kerja" },
      { title: "Penawaran tertulis", text: "Cakupan dan biaya ditulis di surat penugasan dan surat kuasa.", time: "1 sampai 2 hari kerja" },
      { title: "Susun tanggapan", text: "Kami siapkan penjelasan dan dokumen pendukung bersama Anda.", time: "Sesuai batas waktu surat" },
      { title: "Dampingi sampai selesai", text: "Kami hadir di pertemuan dengan kantor pajak sebagai kuasa Anda.", time: "Sampai ada hasil" },
    ],
    deadline: "Setiap surat punya batas waktu sendiri. Keberatan diajukan paling lambat 3 bulan sejak surat ketetapan dikirim, jadi segera hubungi kami setelah surat diterima.",
    faq: [
      { q: "Apakah SP2DK berarti saya diperiksa?", a: "Belum. SP2DK adalah permintaan penjelasan. Tanggapan yang baik bisa menyelesaikan masalah di tahap ini." },
      { q: "Berapa lama waktu menanggapi SP2DK?", a: "Batas waktunya tertulis di surat. Kirim surat ke kami secepatnya supaya ada waktu menyiapkan jawaban." },
      { q: "Bisakah Anda mewakili saya?", a: "Bisa, dengan surat kuasa khusus. Konsultan kami memegang izin praktik sehingga bisa bertindak sebagai kuasa wajib pajak." },
      { q: "Apa risiko mengajukan keberatan?", a: "Bila keberatan ditolak, ada sanksi denda atas pajak yang belum dibayar. Karena itu kami nilai dulu peluangnya sebelum Anda memutuskan." },
      { q: "Kenapa biayanya sesuai kasus?", a: "Setiap sengketa berbeda luasnya. Setelah membaca surat Anda, kami tulis biayanya sebelum pekerjaan dimulai." },
    ],
    regulations: [UU_KUP, UU_HPP, PMK_CORETAX, "PMK No. 55 Tahun 2026 tentang konsultan pajak"],
    related: ["kuasa-hukum-pengadilan-pajak", "spt-tahunan-badan", "spt-tahunan-pribadi"],
  },
  {
    slug: "kuasa-hukum-pengadilan-pajak",
    group: "sengketa",
    title: "Kuasa hukum Pengadilan Pajak",
    summary: "Banding dan gugatan oleh kuasa hukum berizin.",
    price: "Sesuai kasus",
    priceNote: "ditulis setelah konsultasi",
    waText: "Halo Layes Konsultan, saya butuh kuasa hukum untuk banding atau gugatan pajak.",
    h1: "Kuasa hukum Pengadilan Pajak untuk banding dan gugatan",
    lead: "Untuk wajib pajak yang keberatannya ditolak atau ingin menggugat tindakan penagihan, dan butuh kuasa hukum berizin.",
    problems: [
      { title: "Keberatan ditolak", text: "Keputusan keberatan tidak sesuai harapan dan Anda ingin banding." },
      { title: "Tindakan penagihan", text: "Ada surat paksa atau penyitaan yang menurut Anda tidak tepat." },
      { title: "Butuh kuasa berizin", text: "Di Pengadilan Pajak, hanya kuasa hukum yang memiliki izin yang boleh mewakili Anda." },
    ],
    includes: [
      "Telaah peluang banding atau gugatan",
      "Penyusunan surat banding atau gugatan",
      "Mewakili Anda di persidangan",
      "Penyusunan bukti dan kesimpulan",
    ],
    excludes: ["Biaya dan pembayaran pajak yang disengketakan", "Upaya hukum peninjauan kembali (ditawarkan terpisah)"],
    priceFactors: ["Nilai sengketa", "Jumlah perkara dan tahun pajak", "Kompleksitas pembuktian"],
    documents: ["Keputusan keberatan atau surat yang digugat", "Berkas keberatan dan pemeriksaan sebelumnya", "Dokumen transaksi pendukung"],
    process: [
      { title: "Telaah perkara", text: "Kami baca berkas dan jelaskan peluang serta risikonya.", time: "2 sampai 3 hari kerja" },
      { title: "Penugasan dan kuasa", text: "Biaya ditulis di surat penugasan, lalu surat kuasa ditandatangani.", time: "1 hari kerja" },
      { title: "Ajukan banding atau gugatan", text: "Surat disusun dan diajukan sebelum batas waktu.", time: "Sesuai batas waktu" },
      { title: "Sidang", text: "Kami mewakili Anda sampai putusan.", time: "Sesuai jadwal pengadilan" },
    ],
    deadline: "Banding diajukan paling lambat 3 bulan sejak keputusan keberatan diterima. Batas waktu gugatan lebih pendek, jadi hubungi kami segera.",
    faq: [
      { q: "Siapa yang boleh menjadi kuasa di Pengadilan Pajak?", a: "Kuasa hukum yang memenuhi persyaratan dan memiliki izin kuasa hukum Pengadilan Pajak. Nomor izin kami tercantum di halaman legalitas." },
      { q: "Apa beda banding dan gugatan?", a: "Banding diajukan atas keputusan keberatan. Gugatan diajukan atas tindakan atau keputusan lain, misalnya pelaksanaan penagihan." },
      { q: "Berapa lama proses di Pengadilan Pajak?", a: "Umumnya berbulan-bulan, tergantung jadwal persidangan. Kami beri perkiraan setelah menelaah perkara Anda." },
      { q: "Apa risiko bila banding ditolak?", a: "Ada sanksi denda atas pajak yang belum dibayar. Karena itu kami nilai peluangnya dengan jujur sebelum Anda memutuskan." },
      { q: "Apakah saya harus hadir di sidang?", a: "Tidak selalu. Sebagai kuasa, kami yang hadir, kecuali majelis meminta kehadiran Anda." },
    ],
    regulations: [UU_KUP, UU_HPP, "UU No. 14 Tahun 2002 tentang Pengadilan Pajak", "PMK No. 184/PMK.01/2017 tentang persyaratan kuasa hukum pada Pengadilan Pajak"],
    related: ["pendampingan-pemeriksaan", "spt-tahunan-badan", "spt-masa"],
  },
];

/** Kalimat harga untuk deskripsi: "Mulai dari Rp…" atau catatan bila harga sesuai kasus. */
export const priceLine = (l: Layanan) => (l.price.startsWith("Rp") ? `Mulai dari ${l.price}.` : `Biaya ${l.price.toLowerCase()}, ${l.priceNote}.`);

/** "Jasa …" dengan huruf awal kecil kecuali singkatan (SPT, PPN, PPh). */
export const jasaTitle = (l: Layanan) => `Jasa ${/^[A-Z][a-z]/.test(l.title) ? l.title[0].toLowerCase() + l.title.slice(1) : l.title}`;

export const findLayanan = (slug: string) => layanan.find((l) => l.slug === slug);
