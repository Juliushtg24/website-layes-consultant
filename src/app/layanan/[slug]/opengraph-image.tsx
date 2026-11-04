import { findLayanan, jasaTitle, layanan, priceLine } from "@/lib/layanan";
import { ogImage, ogSize } from "@/lib/og";

export const alt = "Layanan Layes Konsultan";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return layanan.map((l) => ({ slug: l.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const item = findLayanan((await params).slug);
  return ogImage(item ? jasaTitle(item) : "Layanan pajak", item ? `${item.summary} ${priceLine(item)}` : "Layes Konsultan");
}
