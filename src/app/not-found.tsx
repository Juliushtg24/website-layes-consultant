import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export default function NotFound() {
  return (
    <PageHeader
      crumbs={[{ href: "/", label: "Beranda" }, { label: "Tidak ditemukan" }]}
      title="Halaman tidak ditemukan"
      lead="Alamat yang Anda buka tidak ada atau sudah dipindahkan. Coba mulai dari daftar layanan kami."
    >
      <div className="flex flex-wrap gap-3 max-sm:[&>*]:flex-[1_1_100%]">
        <Link href="/layanan" className="btn btn-wa">
          Lihat layanan
        </Link>
        <Link href="/" className="btn btn-ghost">
          Ke beranda
        </Link>
      </div>
    </PageHeader>
  );
}
