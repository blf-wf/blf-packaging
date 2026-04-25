import { Hero } from "@/components/marketing/hero";
import { CollectionsGrid } from "@/components/marketing/collections-grid";
import { AboutFactory } from "@/components/marketing/about-factory";
import { TrustPillars } from "@/components/marketing/trust-pillars";
import { QualityCommitment } from "@/components/marketing/quality-commitment";
import { HowToOrder } from "@/components/marketing/how-to-order";
import { CustomizationOptions } from "@/components/marketing/customization-options";
import { ServicesFlow } from "@/components/marketing/services-flow";
import { CtaQuote } from "@/components/marketing/cta-quote";
import { FaqSection } from "@/components/marketing/faq-section";
import { JsonLd } from "@/components/json-ld";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Guangzhou Blf Packing Co., Ltd.",
  alternateName: "Blf Packaging",
  url: "https://www.blfpack.com",
  description:
    "Factory-direct OEM/ODM for premium folding boxes, rigid gift boxes, and paper bags.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guangzhou",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "sales@blfpack.com",
    contactType: "sales",
  },
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Hero />
      <CollectionsGrid />
      <AboutFactory />
      <TrustPillars />
      <QualityCommitment />
      <HowToOrder />
      <CustomizationOptions />
      <ServicesFlow />
      <CtaQuote />
      <FaqSection />
    </>
  );
}
