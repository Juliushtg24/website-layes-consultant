import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { Audience } from "@/components/home/audience";
import { Contact } from "@/components/home/contact";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Legal } from "@/components/home/legal";
import { Services } from "@/components/home/services";
import { Steps } from "@/components/home/steps";
import { TrustStrip } from "@/components/home/trust-strip";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <Hero />
      <TrustStrip />
      <Services />
      <Audience />
      <Legal />
      <About />
      <Steps />
      <Faq />
      <Contact />
    </>
  );
}
