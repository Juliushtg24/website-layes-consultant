import type { Layanan } from "./layanan";
import { site } from "./site";
import { tim } from "./tim";

// Data terstruktur schema.org. Tanpa AggregateRating atau ulasan buatan sendiri.
const abs = (path: string) => `${site.url}${path}`;
const ORG_ID = abs("/#organisasi");
const personId = (slug: string) => abs(`/tim/${slug}#orang`);

const areaServed = site.areas.map((name) => ({ "@type": "City", name }));

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": ORG_ID,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: abs("/"),
    logo: abs("/logo/logo-layes.png"),
    image: abs(site.consultant.photo),
    telephone: `+${site.whatsapp}`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.postal.street,
      addressLocality: site.postal.city,
      addressRegion: site.postal.region,
      postalCode: site.postal.code,
      addressCountry: "ID",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    areaServed,
    identifier: { "@type": "PropertyValue", propertyID: "NIB", value: site.nib },
    employee: tim.map((t) => ({ "@id": personId(t.slug) })),
  };
}

export function personSchema(slug: string) {
  const t = tim.find((x) => x.slug === slug);
  if (!t) return null;
  const { license } = site;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(t.slug),
    name: t.name,
    honorificSuffix: t.degrees,
    jobTitle: t.role,
    image: abs(t.photo),
    url: abs(`/tim/${t.slug}`),
    worksFor: { "@id": ORG_ID },
    memberOf: license.association.split(", ").map((name) => ({ "@type": "Organization", name })),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Izin praktik konsultan pajak",
        name: `Izin praktik konsultan pajak, sertifikat ${license.practiceClass}`,
        identifier: license.practiceNumber,
        recognizedBy: { "@type": "GovernmentOrganization", name: "Kementerian Keuangan Republik Indonesia" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Izin kuasa hukum Pengadilan Pajak",
        name: "Izin kuasa hukum Pengadilan Pajak",
        identifier: license.legalCounselNumber,
        recognizedBy: { "@type": "GovernmentOrganization", name: "Pengadilan Pajak" },
      },
    ],
  };
}

export function serviceSchema(item: Layanan) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    serviceType: item.title,
    description: item.lead,
    url: abs(`/layanan/${item.slug}`),
    provider: { "@id": ORG_ID },
    areaServed,
  };
}

export function breadcrumbSchema(crumbs: { href?: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      // Item terakhir (halaman ini) boleh tanpa URL.
      ...(c.href && { item: abs(c.href) }),
    })),
  };
}
