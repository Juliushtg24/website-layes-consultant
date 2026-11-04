// Halaman /wilayah/[kota]. Setiap kota ditulis tersendiri, bukan template ganti nama.
export type Wilayah = {
  slug: string;
  name: string;
  kanwil: string;
  intro: string;
  how: string;
  industry: string[];
  services: string[];
  hasOffice: boolean;
};

export const wilayah: Wilayah[] = [
  {
    slug: "bekasi",
    name: "Bekasi",
    kanwil: "Kanwil DJP Jawa Barat III",
    intro:
      "Kantor kami ada di Bekasi Selatan, jadi untuk klien di Kota dan Kabupaten Bekasi pertemuan tatap muka paling mudah diatur, baik di kantor kami maupun di tempat Anda.",
    how: "Datang ke kantor di Grand Galaxy, kami yang berkunjung, atau sepenuhnya online.",
    industry: [
      "Pabrik dan pemasok di kawasan industri Cikarang dan sekitarnya, dengan PPh 21 karyawan dalam jumlah besar dan PPN atas penjualan antarperusahaan",
      "Usaha jasa, kontraktor dan toko di Kota Bekasi yang mulai menjadi PKP",
      "Karyawan yang bekerja di Jakarta tetapi tinggal di Bekasi",
    ],
    services: ["pph-21-payroll", "ppn-dan-pkp", "spt-masa"],
    hasOffice: true,
  },
  {
    slug: "jakarta",
    name: "Jakarta",
    kanwil: "beberapa Kanwil DJP di Jakarta",
    intro:
      "Banyak kantor pusat, perusahaan jasa dan perdagangan terdaftar di Jakarta. Kami melayani klien di seluruh DKI Jakarta secara online, dan menjadwalkan kunjungan bila diperlukan.",
    how: "Sebagian besar pekerjaan online. Kunjungan ke kantor Anda bisa dijadwalkan, dan pendampingan ke KPP dilakukan langsung.",
    industry: [
      "Perusahaan jasa dan perdagangan dengan SPT Masa bulanan yang padat",
      "Perusahaan yang menghadapi SP2DK atau pemeriksaan di KPP Jakarta",
      "Profesional dan pemilik usaha dengan beberapa sumber penghasilan",
    ],
    services: ["spt-masa", "pendampingan-pemeriksaan", "spt-tahunan-badan"],
    hasOffice: false,
  },
  {
    slug: "bogor",
    name: "Bogor",
    kanwil: "Kanwil DJP Jawa Barat III",
    intro:
      "Untuk usaha dan perorangan di Kota dan Kabupaten Bogor, kami bekerja online dan bertemu tatap muka sesuai jadwal yang Anda pilih.",
    how: "Online lewat WhatsApp dan panggilan video, dengan kunjungan terjadwal bila dokumen perlu diperiksa bersama.",
    industry: [
      "Usaha kuliner, penginapan dan pariwisata yang omzetnya mulai mendekati batas PKP",
      "Usaha agribisnis dan UMKM yang perlu merapikan pelaporan pajaknya",
      "Karyawan komuter yang SPT Tahunannya cukup diurus online",
    ],
    services: ["ppn-dan-pkp", "spt-tahunan-pribadi", "coretax"],
    hasOffice: false,
  },
  {
    slug: "depok",
    name: "Depok",
    kanwil: "Kanwil DJP Jawa Barat III",
    intro:
      "Depok banyak dihuni karyawan, dosen, dan pekerja bebas yang bekerja di Jakarta. Kebutuhan pajaknya kebanyakan pribadi, dan hampir semuanya bisa selesai online.",
    how: "Online dari awal sampai bukti lapor. Pertemuan tatap muka tersedia bila Anda lebih nyaman.",
    industry: [
      "Karyawan dengan lebih dari satu pemberi kerja dalam setahun",
      "Dosen, peneliti dan pekerja bebas dengan honor dari banyak pihak",
      "UMKM yang baru memakai Coretax",
    ],
    services: ["spt-tahunan-pribadi", "coretax", "pph-21-payroll"],
    hasOffice: false,
  },
  {
    slug: "tangerang",
    name: "Tangerang",
    kanwil: "Kanwil DJP Banten",
    intro:
      "Untuk perusahaan dan perorangan di Kota Tangerang, Tangerang Selatan dan Kabupaten Tangerang, kami bekerja online dan berkunjung sesuai jadwal.",
    how: "Online, dengan kunjungan terjadwal ke kantor Anda untuk pekerjaan tahunan atau pendampingan pemeriksaan.",
    industry: [
      "Perusahaan logistik dan pergudangan dengan banyak transaksi PPN",
      "Pengembang dan usaha properti dengan PPh final Pasal 4 ayat (2)",
      "Profesional dan pemilik usaha di kawasan perumahan besar",
    ],
    services: ["spt-masa", "ppn-dan-pkp", "spt-tahunan-badan"],
    hasOffice: false,
  },
];

export const findWilayah = (slug: string) => wilayah.find((w) => w.slug === slug);
