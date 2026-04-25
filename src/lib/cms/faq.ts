import { sanityFetch } from "@/sanity/lib/client";

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const ALL_FAQ_QUERY = `*[_type == "faq"] | order(displayOrder asc) {
  question,
  answer,
  category
}`;

const MOCK_FAQS: FaqItem[] = [
  {
    question: "What is your MOQ (Minimum Order Quantity)?",
    answer:
      "Our standard MOQ starts from 500 pieces, though this may vary by box type and finishing requirements. Contact us with your specifications for an accurate quote.",
    category: "Ordering",
  },
  {
    question: "How long does sampling take?",
    answer:
      "Existing stock samples ship within 2–3 working days. Custom samples with printing and finishing take 3–7 working days after dieline and artwork approval. 3D renderings are available within 2–4 hours.",
    category: "Ordering",
  },
  {
    question: "What is the production lead time?",
    answer:
      "Standard production lead time is 6–15 working days for regular materials and finishes, excluding international shipping. Peak season schedules will be confirmed separately.",
    category: "Ordering",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept T/T, L/C at sight, PayPal, and Western Union. For new clients, we typically recommend 30% deposit with 70% balance before shipment. Extended terms (Net 30/60) are available subject to credit review.",
    category: "Ordering",
  },
  {
    question: "Can you provide free design and 3D mockups?",
    answer:
      "Yes, we provide free structural design and 3D mockup services. You'll receive initial design drafts within 2 hours after submitting complete specifications during working hours.",
    category: "Customization",
  },
  {
    question: "What certifications do you hold?",
    answer:
      "We are ISO 9001, SGS, CE, ROHS, and FSC certified. Downloadable certificate PDFs are available on our Compliance page.",
    category: "Compliance",
  },
  {
    question: "Do you support factory audits and third-party inspections?",
    answer:
      "Absolutely. We welcome client visits and third-party audits. Pre-shipment inspection reports, production photos, and factory walkthrough videos are available on request.",
    category: "Compliance",
  },
  {
    question: "What materials and finishes are available?",
    answer:
      "We work with white card (SBS/FBB), grey chipboard, kraft and specialty papers, plus corrugated board. Finishing options include hot foil stamping, embossing, UV, matte/gloss lamination, and laser engraving.",
    category: "Customization",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "Our three-stage QC system (IQC, IPQC, OQC) combined with AQL 2.5 sampling ensures consistent quality. Pre-shipment photos are sent for your confirmation, and we support third-party inspections.",
    category: "Ordering",
  },
  {
    question: "How is international shipping handled?",
    answer:
      "Products are packed in reinforced 5-layer corrugated cartons with corner protection. We support FOB, CIF, and DDP terms, with container loading photos and shipment tracking provided.",
    category: "Shipping",
  },
];

export async function getAllFaqs(): Promise<FaqItem[]> {
  const data = await sanityFetch<FaqItem[]>(ALL_FAQ_QUERY);
  return data ?? MOCK_FAQS;
}
