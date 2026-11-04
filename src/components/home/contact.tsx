import { CalendarIcon, IconBox, PinIcon, WhatsAppIcon } from "@/components/icons";
import { site, waLink } from "@/lib/site";
import { LeadForm } from "@/components/lead-form";

const way = "flex items-center gap-4 rounded-card bg-white/6 px-5 py-[18px]";
const wayIcon = "bg-white/10 text-on-navy";

export function Contact() {
  return (
    <section id="kontak" aria-labelledby="kontak-h" className="bg-navy py-16 text-on-navy sm:py-24">
      <div className="wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 id="kontak-h" className="mb-4 text-xl font-extrabold">
            Mulai dari percakapan singkat
          </h2>
          <p className="mb-8 max-w-[40ch] text-on-navy-muted">
            Pilih cara yang paling nyaman. Konsultasi awal gratis dan tidak mengikat.
          </p>
          <ul className="grid gap-3">
            <li>
              <a href={waLink()} target="_blank" rel="noopener" className={`${way} transition-colors hover:bg-white/11`}>
                <IconBox className={wayIcon}>
                  <WhatsAppIcon />
                </IconBox>
                <span>
                  <b className="block">Chat WhatsApp</b>
                  <span className="text-sm text-on-navy-muted">{site.phone} · dibalas di jam kerja</span>
                </span>
              </a>
            </li>
            <li>
              {/* shortcut: booking lewat WhatsApp dulu, ganti ke Cal.com di Fase 6. */}
              <a
                href={waLink("Halo Layes Konsultan, saya ingin menjadwalkan konsultasi 30 menit.")}
                target="_blank"
                rel="noopener"
                className={`${way} transition-colors hover:bg-white/11`}
              >
                <IconBox className={wayIcon}>
                  <CalendarIcon />
                </IconBox>
                <span>
                  <b className="block">Pilih jadwal konsultasi</b>
                  <span className="text-sm text-on-navy-muted">30 menit, online atau di kantor</span>
                </span>
              </a>
            </li>
            <li className={way}>
              <IconBox className={wayIcon}>
                <PinIcon />
              </IconBox>
              <span>
                <b className="block">Kantor</b>
                <span className="text-sm text-on-navy-muted">
                  {site.address} · {site.hours}
                </span>
              </span>
            </li>
          </ul>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
