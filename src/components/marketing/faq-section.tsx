import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

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
    a: "We work with white card (SBS/FBB), grey chipboard, kraft and specialty papers, plus corrugated board. Finishing options include hot foil stamping, embossing, UV, matte/gloss lamination, and laser engraving. See our Customization page for the full range.",
  },
  {
    q: "How do you ensure product quality?",
    a: "Our three-stage QC system (IQC, IPQC, OQC) combined with AQL 2.5 sampling ensures consistent quality. Pre-shipment photos are sent for your confirmation, and we support third-party inspections.",
  },
  {
    q: "How is international shipping handled?",
    a: "Products are packed in reinforced 5-layer corrugated cartons with corner and pearl-cotton protection. We support FOB, CIF, and DDP terms, with container loading photos and shipment tracking provided.",
  },
];

export function FaqSection() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Quick answers to common questions. For anything else, reach out directly.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Have more questions?{" "}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            Contact our team
          </Link>{" "}
          or visit our{" "}
          <Link href="/faq" className="font-medium text-primary hover:underline">
            full FAQ page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
