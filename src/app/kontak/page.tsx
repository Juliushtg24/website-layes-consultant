import type { Metadata } from "next";
import { Block } from "@/components/block";
import { Contact } from "@/components/home/contact";
import { JsonLd } from "@/components/json-ld";
import { OfficeMap } from "@/components/office-map";
import { PageHeader } from "@/components/page-header";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/kontak" },
  title: "Kontak",
  description: `Hubungi Layes Konsultan lewat WhatsApp ${site.phone}, email, atau datang ke kantor di Bekasi Selatan. ${site.hours}.`,
};

export default function KontakPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <PageHeader
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Kontak" }]}
        title="Hubungi Layes Konsultan"
        lead={`Konsultasi awal gratis. Kami membalas di jam kerja, ${site.hours}.`}
      />
      <Block id="kantor" title="Kantor kami">
        <div className="grid items-start gap-8 md:grid-cols-2 lg:gap-14">
          <address className="grid gap-5 not-italic">
            <p className="text-lg">{site.address}</p>
            <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[auto_1fr]">
              <dt className="text-muted">Jam kerja</dt>
              <dd>{site.hours}</dd>
              <dt className="text-muted">WhatsApp</dt>
              <dd>{site.phone}</dd>
              <dt className="text-muted">Email</dt>
              <dd className="break-all">
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
              </dd>
            </dl>
            <p className="text-muted">Datang ke kantor sebaiknya dengan janji lebih dulu, supaya konsultan pasti ada di tempat.</p>
          </address>
          <OfficeMap />
        </div>
      </Block>
      <Contact />
    </>
  );
}
