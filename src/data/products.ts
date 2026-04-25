export type BoxType = {
  slug: string;
  label: string;
  description: string;
};

export const BOX_TYPES: BoxType[] = [
  {
    slug: "magnetic-rigid-box",
    label: "Magnetic / Foldable Rigid Box",
    description:
      "Premium magnetic closure boxes with foldable design — ideal for luxury gift sets, cosmetics, and high-end retail packaging.",
  },
  {
    slug: "lid-and-base-box",
    label: "Lid and Base / Setup Box",
    description:
      "Classic two-piece rigid boxes for premium presentation. Custom inserts available for product protection and elevated unboxing.",
  },
  {
    slug: "drawer-box",
    label: "Drawer Box",
    description:
      "Slide-out drawer style boxes popular for jewelry, watches, premium confectionery, and corporate gifting.",
  },
  {
    slug: "mailer-box",
    label: "Mailer / Shipping Box",
    description:
      "Durable e-commerce mailer boxes designed for DTC subscription brands. Strong corrugated construction with full-color printing.",
  },
  {
    slug: "folding-carton",
    label: "Folding Carton",
    description:
      "Lightweight, cost-effective folding cartons for food, beauty, and consumer goods. Offset or digital printing available.",
  },
  {
    slug: "specialty-box",
    label: "Specialty Boxes",
    description:
      "Custom shapes, round boxes, cylindrical packaging, and other specialty structures for unique brand presentation.",
  },
];

export type Product = {
  slug: string;
  title: string;
  boxStructure: string;
  dimensionsRange: string;
  materials: string[];
  printing: string[];
  finishes: string[];
  inserts: string[];
  moq: number;
  sampleLeadTime: string;
  productionLeadTime: string;
  excerpt: string;
  applications: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "luxury-magnetic-gift-box",
    title: "Luxury Magnetic Gift Box",
    boxStructure: "magnetic-rigid-box",
    dimensionsRange: "120×80×40mm ~ 300×200×80mm",
    materials: ["White card (SBS)", "Grey chipboard", "Kraft paper"],
    printing: ["Offset (CMYK)", "Pantone spot color"],
    finishes: ["Hot foil stamping", "Spot UV", "Matte lamination", "Embossing"],
    inserts: ["EVA foam", "Velvet lining", "Paperboard tray"],
    moq: 500,
    sampleLeadTime: "3–7 working days",
    productionLeadTime: "6–12 working days",
    excerpt:
      "Premium magnetic closure rigid boxes with soft-touch lamination, gold foil stamping, and custom velvet inserts. Ideal for high-end cosmetics, jewelry, and corporate gifting.",
    applications: ["cosmetic", "jewelry", "corporate-gift"],
  },
  {
    slug: "classic-lid-base-gift-set",
    title: "Classic Lid & Base Gift Set Box",
    boxStructure: "lid-and-base-box",
    dimensionsRange: "150×150×50mm ~ 400×300×100mm",
    materials: ["White card (SBS)", "Grey chipboard", "Specialty paper"],
    printing: ["Offset (CMYK)", "Pantone spot color"],
    finishes: ["Matte lamination", "Gloss lamination", "Hot foil stamping"],
    inserts: ["EVA foam", "Sponge", "Paperboard tray"],
    moq: 500,
    sampleLeadTime: "3–7 working days",
    productionLeadTime: "8–15 working days",
    excerpt:
      "Two-piece rigid setup boxes with clean lines and premium finishing. Perfect for luxury gift sets, wine and spirits, and premium confectionery.",
    applications: ["food-chocolate", "wine-spirits", "corporate-gift"],
  },
  {
    slug: "premium-drawer-jewelry-box",
    title: "Premium Drawer-Style Jewelry Box",
    boxStructure: "drawer-box",
    dimensionsRange: "100×80×30mm ~ 250×180×50mm",
    materials: ["White card (SBS)", "Specialty paper", "Grey chipboard"],
    printing: ["Offset (CMYK)", "Pantone spot color"],
    finishes: ["Matte lamination", "Hot foil stamping", "Embossing", "Laser engraving"],
    inserts: ["Velvet lining", "EVA foam", "PU foam"],
    moq: 500,
    sampleLeadTime: "5–7 working days",
    productionLeadTime: "10–15 working days",
    excerpt:
      "Elegant slide-out drawer boxes with premium velvet lining and custom jewelry inserts. Designed for high-end jewelry, watches, and accessories brands.",
    applications: ["jewelry", "cosmetic", "corporate-gift"],
  },
  {
    slug: "custom-ecommerce-mailer-box",
    title: "Custom DTC E-Commerce Mailer Box",
    boxStructure: "mailer-box",
    dimensionsRange: "200×150×80mm ~ 400×300×150mm",
    materials: ["Kraft paper", "White card (SBS)", "Corrugated board"],
    printing: ["Offset (CMYK)", "Digital printing"],
    finishes: ["Matte lamination", "Spot UV"],
    inserts: ["Paperboard tray", "Sponge"],
    moq: 500,
    sampleLeadTime: "2–3 working days",
    productionLeadTime: "6–10 working days",
    excerpt:
      "Sturdy e-commerce mailer boxes with full-color brand printing. Built for DTC subscription brands, influencer merch, and online retail with shipping-ready construction.",
    applications: ["subscription-box", "cosmetic", "food-chocolate"],
  },
  {
    slug: "folding-carton-food-packaging",
    title: "Folding Carton for Food & Beverage",
    boxStructure: "folding-carton",
    dimensionsRange: "60×40×120mm ~ 300×200×350mm",
    materials: ["White card (SBS)", "Kraft paper"],
    printing: ["Offset (CMYK)", "Pantone spot color", "Digital printing"],
    finishes: ["Gloss lamination", "Matte lamination", "Spot UV"],
    inserts: ["Paperboard tray"],
    moq: 1000,
    sampleLeadTime: "3–5 working days",
    productionLeadTime: "6–12 working days",
    excerpt:
      "Lightweight folding cartons for food, chocolate, tea, and beverage products. Food-safe inks and materials compliant with EU and FDA regulations available.",
    applications: ["food-chocolate", "tea-coffee"],
  },
  {
    slug: "round-cylindrical-gift-tube",
    title: "Round Cylindrical Gift Tube",
    boxStructure: "specialty-box",
    dimensionsRange: "D60×H150mm ~ D120×H350mm",
    materials: ["White card (SBS)", "Kraft paper", "Specialty paper"],
    printing: ["Offset (CMYK)", "Pantone spot color"],
    finishes: ["Matte lamination", "Hot foil stamping", "Embossing"],
    inserts: ["EVA foam", "Velvet lining"],
    moq: 500,
    sampleLeadTime: "5–7 working days",
    productionLeadTime: "10–15 working days",
    excerpt:
      "Elegant cylindrical gift tubes for premium spirits, candles, beauty products, and luxury confectionery. Custom diameters and heights available.",
    applications: ["wine-spirits", "cosmetic", "corporate-gift"],
  },
];

export function getBoxTypes(): BoxType[] {
  return BOX_TYPES;
}

export function getBoxTypeBySlug(slug: string): BoxType | undefined {
  return BOX_TYPES.find((b) => b.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByBoxType(boxTypeSlug: string): Product[] {
  return PRODUCTS.filter((p) => p.boxStructure === boxTypeSlug);
}

export function getAllProducts(): Product[] {
  return PRODUCTS;
}
