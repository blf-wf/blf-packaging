import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { FaqSection } from "@/components/marketing/faq-section";
import { JsonLd } from "@/components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about MOQ, sampling, lead times, payment, certifications, and shipping for custom paper packaging.",
};

const FAQS = [
  {
    q: "What is your MOQ (Minimum Order Quantity)?",
    a: "Our standard MOQ starts from 500 pieces, though this may vary by box type and finishing requirements. Contact us with your specifications for an accurate quote.",
  },
  {
    q: "How long does sampling take?",
    a: "Existing stock samples ship within 2–3 working days. Custom samples with printing and finishing take 3–7 working days after dieline and artwork approval. 3D renderings are available within 2–4 hours.",
  },
  {
    q: "What is the production lead time?",
    a: "Standard production lead time is 6–15 working days for regular materials and finishes, excluding international shipping. Peak season schedules will be confirmed separately.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept T/T, L/C at sight, PayPal, and Western Union. For new clients, we typically recommend 30% deposit with 70% balance before shipment. Extended terms (Net 30/60) are available subject to credit review.",
  },
  {
    q: "Can you provide free design and 3D mockups?",
    a: "Yes, we provide free structural design and 3D mockup services. You'll receive initial design drafts within 2 hours after submitting complete specifications during working hours.",
  },
  {
    q: "What certifications do you hold?",
    a: "We are ISO 9001, SGS, CE, ROHS, and FSC certified. Downloadable certificate PDFs are available on our Compliance page.",
  },
  {
    q: "Do you support factory audits and third-party inspections?",
    a: "Absolutely. We welcome client visits and third-party audits. Pre-shipment inspection reports, production photos, and factory walkthrough videos are available on request.",
  },
  {
    q: "What materials and finishes are available?",
    a: "We work with white card (SBS/FBB), grey chipboard, kraft and specialty papers, plus corrugated board. Finishing options include hot foil stamping, embossing, UV, matte/gloss lamination, and laser engraving.",
  },
  {
    q: "How do you ensure product quality?",
    a: "Our three-stage QC system (IQC, IPQC, OQC) combined with AQL 2.5 sampling ensures consistent quality. Pre-shipment photos are sent for your confirmation, and we support third-party inspections.",
  },
  {
    q: "How is international shipping handled?",
    a: "Products are packed in reinforced 5-layer corrugated cartons with corner protection. We support FOB, CIF, and DDP terms, with container loading photos and shipment tracking provided.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={faqSchema} />
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Frequently Asked Questions</h1>
      <p className="mt-2 text-muted-foreground">
        Everything you need to know about working with Blf Packaging.
      </p>
      <FaqSection />
    </div>
  );
}
