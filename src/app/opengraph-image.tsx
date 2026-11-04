import { ogImage, ogSize } from "@/lib/og";

export const alt = "Layes Konsultan, konsultan pajak Jabodetabek";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage("Urusan pajak perusahaan dan pribadi, beres sebelum tenggat.", "Konsultan pajak berizin di Jabodetabek. Harga ditulis di depan.");
}
