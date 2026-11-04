// Semua data bisnis ada di sini. Nilai dalam [kurung] belum dikonfirmasi pemilik.
export const site = {
  // Isi NEXT_PUBLIC_SITE_URL dengan domain final (tanpa garis miring di akhir) sebelum build produksi.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  name: "Layes Konsultan",
  legalName: "PT Layes Konsultan Solusindo",
  description:
    "Konsultan pajak untuk perusahaan dan pribadi di Jakarta, Bogor, Depok, Tangerang dan Bekasi.",
  whatsapp: "6281224847886",
  phone: "+62 812-2484-7886",
  email: "ptlayeskonsultansolusindo@gmail.com",
  address:
    "Ruko Rose Garden No. 10 Blok RRG 8, Grand Galaxy, RT.003/RW.017, Jaka Setia, Bekasi Selatan, Kota Bekasi, Jawa Barat 17147",
  // Alamat terpisah untuk schema PostalAddress.
  postal: {
    street: "Ruko Rose Garden No. 10 Blok RRG 8, Grand Galaxy, RT.003/RW.017, Jaka Setia, Bekasi Selatan",
    city: "Kota Bekasi",
    region: "Jawa Barat",
    code: "17147",
  },
  mapsUrl: "https://share.google/1CCRqHixEiPdAltl7",
  hours: "Senin–Jumat, 09.00–17.00 WIB",
  replyTime: "[target waktu balas]",
  areas: ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"],
  consultant: {
    name: "Layon Hocben Hutagaol",
    degrees: "SE, M.Ak, BKP, CA",
    photo: "/tim/layon-hocben-hutagaol.webp",
  },
  license: {
    // Dari Kartu Izin Praktik (docs/KIP 2024), berlaku sampai 23-06-2026. NPWP sengaja tidak dicantumkan.
    practiceNumber: "KEP-288/SJ/PPPK/2024",
    practiceClass: "A",
    legalCounselNumber: "KHP-00508",
    association: "AKP2I, IAI",
  },
  nib: "2312250086614",
  // Harga contoh dari mockup, belum final.
  prices: {
    "spt-tahunan-badan": "Rp3,5 jt",
    "spt-masa": "Rp1 jt/bulan",
    "ppn-dan-pkp": "Rp1,5 jt",
    "pph-21-payroll": "Rp750 rb/bulan",
    "spt-tahunan-pribadi": "Rp500 rb",
    coretax: "Rp250 rb",
  },
} as const;

export function waLink(text = "Halo Layes Konsultan, saya ingin konsultasi pajak.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
