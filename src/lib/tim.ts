import { site } from "./site";

// Anggota tim untuk /tim dan /tim/[slug]. Tambah anggota baru di sini.
export const tim = [
  {
    slug: "layon-hocben-hutagaol",
    ...site.consultant,
    role: "Konsultan pajak dan kuasa hukum Pengadilan Pajak",
  },
];

export const findAnggota = (slug: string) => tim.find((t) => t.slug === slug);
