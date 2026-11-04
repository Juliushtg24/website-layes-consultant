import type { Metadata } from "next";
import { Block } from "@/components/block";
import { CalendarIcon, DocIcon, WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { annualRows, masaRows } from "@/lib/kalender";
import { waLink } from "@/lib/site";
import { today } from "@/lib/today";

export const metadata: Metadata = {
  alternates: { canonical: "/kalender-pajak" },
  title: "Kalender pajak",
  description: "Tenggat setor dan lapor SPT Masa setiap bulan, serta SPT Tahunan orang pribadi dan badan. Tambahkan ke kalender Anda.",
};

function Due({ d }: { d: { label: string; from: string | null } }) {
  return (
    <>
      {d.label}
      {d.from && <span className="block text-xs font-normal text-muted">bergeser dari {d.from}</span>}
    </>
  );
}

export default async function KalenderPage() {
  const now = new Date(await today());
  const rows = masaRows(now);
  const annual = annualRows(now);

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Kalender pajak" }]}
        title="Kalender pajak 12 bulan ke depan"
        lead="Pajak bulanan disetor paling lambat tanggal 15 dan dilapor paling lambat tanggal 20 bulan berikutnya. Tambahkan pengingatnya ke kalender ponsel Anda."
      >
        <div className="flex flex-wrap gap-3 max-sm:[&>*]:flex-[1_1_100%]">
          <a href="/kalender-pajak/kalender-pajak.ics" download className="btn btn-wa">
            <CalendarIcon />
            Tambahkan ke kalender
          </a>
          <a href="/kalender-pajak/kalender-pajak.pdf" download className="btn btn-ghost">
            <DocIcon />
            Unduh PDF
          </a>
          <a href={waLink("Halo Layes Konsultan, saya ingin dibantu agar tidak terlambat lapor pajak.")} target="_blank" rel="noopener" className="btn btn-ghost">
            <WhatsAppIcon />
            Minta diingatkan
          </a>
        </div>
      </PageHeader>

      <Block id="tahunan" title="SPT Tahunan">
        <ul className="grid gap-4 sm:grid-cols-2">
          {annual.map((a) => (
            <li key={a.what} className="rounded-panel bg-navy p-6 text-on-navy sm:p-8">
              <p className="mb-2 text-sm text-on-navy-muted">{a.what}</p>
              <p className="font-display text-xl font-extrabold text-accent">{a.label}</p>
              {a.from && <p className="mt-1 text-sm text-on-navy-muted">Bergeser dari {a.from}</p>}
            </li>
          ))}
        </ul>
      </Block>

      <Block id="bulanan" title="SPT Masa bulanan" surface>
        <div className="overflow-x-auto rounded-panel border border-line bg-card">
          <table className="w-full min-w-[480px] text-left">
            <caption className="sr-only">Tenggat setor dan lapor SPT Masa</caption>
            <thead className="text-sm text-muted">
              <tr>
                <th scope="col" className="px-5 py-3.5 font-semibold">Masa pajak</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Batas setor</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Batas lapor</th>
              </tr>
            </thead>
            <tbody className="tabular-nums">
              {rows.map((r) => (
                <tr key={r.masa} className="border-t border-line">
                  <th scope="row" className="px-5 py-3.5 font-bold">{r.masa}</th>
                  <td className="px-5 py-3.5">
                    <Due d={r.setor} />
                  </td>
                  <td className="px-5 py-3.5 font-bold">
                    <Due d={r.lapor} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-3xl text-sm text-muted">
          Tenggat yang jatuh pada Sabtu, Minggu atau hari libur sudah digeser ke hari kerja berikutnya, sesuai PMK
          81/2024. Libur nasional yang tanggalnya berpindah mengikuti SKB 3 Menteri, jadi cek ulang menjelang tenggat.
        </p>
      </Block>
    </>
  );
}
