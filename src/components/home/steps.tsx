import { SectionHead } from "./section-head";

const steps = [
  { title: "Ceritakan kebutuhan", text: "Lewat WhatsApp, formulir atau jadwal konsultasi. Konsultasi awal gratis.", when: "Hari ini" },
  { title: "Terima penawaran", text: "Cakupan, harga dan tenggat ditulis di surat penugasan.", when: "1 hari kerja" },
  { title: "Periksa drafnya", text: "Kami hitung dan susun SPT. Tidak ada yang dilapor sebelum Anda setuju.", when: "Sesuai tenggat" },
  { title: "Kami laporkan", text: "Bukti penerimaan elektronik dan semua dokumen kembali ke Anda.", when: "Sebelum tenggat" },
];

export function Steps() {
  return (
    <section aria-labelledby="langkah-h" className="bg-surface py-16 sm:py-24">
      <div className="wrap">
        <SectionHead id="langkah-h" kicker="Cara kerja" title="Empat langkah, tanpa harus datang ke kantor">
          Sebagian besar pekerjaan selesai online. Tatap muka di Jabodetabek bisa dijadwalkan kapan pun Anda perlu.
        </SectionHead>
        <ol className="grid gap-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative pt-14">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 grid size-10 place-items-center rounded-full bg-navy font-display font-extrabold text-on-navy"
              >
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span aria-hidden="true" className="absolute top-5 right-[-8px] left-[52px] hidden h-0.5 bg-line lg:block" />
              )}
              <h3 className="mb-2 text-lg font-extrabold">{s.title}</h3>
              <p className="text-sm text-muted">{s.text}</p>
              <p className="mt-3 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent-ink">
                {s.when}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
