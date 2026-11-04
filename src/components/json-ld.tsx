/** Menyisipkan JSON-LD. `<` di-escape supaya isi data tidak bisa menutup tag script. */
export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
