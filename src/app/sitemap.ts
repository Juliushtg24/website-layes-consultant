import type { MetadataRoute } from "next";
import { layanan } from "@/lib/layanan";
import { site } from "@/lib/site";
import { tim } from "@/lib/tim";
import { wilayah } from "@/lib/wilayah";

const statis = ["", "/layanan", "/biaya", "/tim", "/kredensial", "/kalender-pajak", "/kontak", "/wilayah", "/kebijakan-privasi", "/syarat-layanan", "/pengaduan"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...statis,
    ...layanan.map((l) => `/layanan/${l.slug}`),
    ...wilayah.map((w) => `/wilayah/${w.slug}`),
    ...tim.map((t) => `/tim/${t.slug}`),
  ].map((path) => ({ url: `${site.url}${path || "/"}` }));
}
