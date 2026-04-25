import { sanityFetch } from "@/sanity/lib/client";

export interface CaseStudyItem {
  id: string;
  industry: string;
  region: string;
  challenge: string;
  solution: string;
  results: string[];
  boxType: string;
}

const ALL_CASES_QUERY = `*[_type == "caseStudy"] {
  "id": _id,
  title,
  industry,
  region,
  challenge,
  solution,
  results,
  boxType
}`;

const MOCK_CASES: CaseStudyItem[] = [
  {
    id: "1",
    industry: "Food & Confectionery",
    region: "EU / Germany",
    challenge:
      "A leading European chocolate brand needed PPWR-compliant packaging for their 2026 holiday gift set line while maintaining the luxury unboxing experience their customers expect.",
    solution:
      "We recommended FSC-certified SBS paperboard (280 GSM) with matte lamination and gold foil stamping over a 1.5mm grey chipboard base. PVC-free rPET window insert replaced the previous PVC tray. Full EU 1935/2004 and LFGB compliance documentation provided.",
    results: [
      "PPWR recyclability Grade A achieved",
      "28% reduction in plastic content vs. previous packaging",
      "12,000 units delivered in 15 working days",
      "Repeat order placed for Q2 2026",
    ],
    boxType: "Magnetic Rigid Box",
  },
  {
    id: "2",
    industry: "Beauty & Skincare",
    region: "US / California",
    challenge:
      "A DTC skincare brand launching their flagship serum needed packaging that passed Prop 65 requirements and created a premium unboxing experience worthy of social media sharing.",
    solution:
      "Designed a magnetic rigid box with soft-touch matte lamination, debossed logo, and custom EVA foam insert with flocked surface. All materials compliant with CA Prop 65 — lead, cadmium, and phthalate test reports provided. Inner lid printing with brand story and QR code to product page.",
    results: [
      "Featured in 3 major beauty unboxing YouTube videos (combined 2M+ views)",
      "Prop 65 compliance documentation delivered within 24 hours of request",
      "Box reorder rate of 94% — customers kept the packaging",
      "Secured a Net 30 payment term after first successful order",
    ],
    boxType: "Magnetic Rigid Box",
  },
  {
    id: "3",
    industry: "Electronics & Wearables",
    region: "US & UK",
    challenge:
      "A wearable tech startup launching on Kickstarter needed premium packaging for 5,000 units with a 4-week deadline. Budget was tight, but the unboxing had to compete with Apple-level expectations.",
    solution:
      "Lid-and-base rigid box with custom paperboard insert tray (cost-optimized vs. EVA). Digital foil stamping instead of traditional die-based foil — zero tooling cost, 48-hour turnaround. Interior printed with setup guide and brand story. Matte lamination with spot UV on product image.",
    results: [
      "Delivered 5,000 units in 18 working days (ahead of 4-week deadline)",
      "Tooling cost saved: ~$2,500 (digital foil vs. traditional die)",
      "Kickstarter campaign raised 340% of target",
      "Now a recurring client with quarterly orders",
    ],
    boxType: "Lid and Base Box",
  },
  {
    id: "4",
    industry: "Spirits & Beverage",
    region: "Global / Duty-Free",
    challenge:
      "A craft whiskey distillery needed a limited-edition gift tube for 5,000 bottles sold through duty-free channels. Required luxury presentation, international shipping durability, and FSC certification.",
    solution:
      "Round rigid gift tube with FSC-certified kraft paper wrapping, gold foil-stamped distillery logo, and custom-fit bottle cavity base. Reinforced corrugated outer cartons tested for container shipping. FSC license code printed inside tube for buyer verification.",
    results: [
      "Zero transit damage across 3 continents",
      "Sold out in 6 weeks — distillery ordering 10,000 units for next release",
      "FSC certification helped secure placement in EU duty-free retailers",
    ],
    boxType: "Gift Tube / Specialty Box",
  },
  {
    id: "5",
    industry: "Subscription Box / DTC",
    region: "US",
    challenge:
      "A lifestyle subscription brand with 5 monthly SKU variations needed packaging that reduced SKU management overhead, shipped safely without over-boxing, and looked different enough each month to drive social sharing.",
    solution:
      "Single mailer box template with digitally printed exterior (new design each month, same die line). Tear strip for easy opening. Interior dividers adjustable to accommodate varying product assortments. Double-wall corrugated option for months with heavier items.",
    results: [
      "SKU management simplified from 5 box SKUs to 1 (digital print variation)",
      "Shipping damage claims dropped 40% with reinforced structure",
      "Social media unboxing mentions increased 3x within 3 months",
    ],
    boxType: "Mailer Box",
  },
  {
    id: "6",
    industry: "Teeth Aligner / Medical",
    region: "EU & US",
    challenge:
      "A dental startup scaling from 500 to 5,000 patients/month needed hygienic, precision packaging compliant with FDA and EU medical device packaging requirements. Turnaround time from order to delivery was critical.",
    solution:
      "Lid-and-base box with medical-grade paperboard, tamper-evident seal sticker, and precision die-cut tray holding aligners in numbered sequence. QR code panel linking to treatment app. ISO 13485-compliant production batch records maintained for full traceability.",
    results: [
      "Scaled from 500 to 5,000 units/month with zero quality rejects",
      "Full batch traceability documentation delivered with every order",
      "Client secured Series A funding — packaging quality cited in investor materials",
    ],
    boxType: "Lid and Base Box",
  },
];

export async function getAllCaseStudies(): Promise<CaseStudyItem[]> {
  const data = await sanityFetch<CaseStudyItem[]>(ALL_CASES_QUERY);
  return data ?? MOCK_CASES;
}
