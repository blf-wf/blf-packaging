export interface ApplicationDetail {
  slug: string;
  label: string;
  description: string;
  hero: string;
  sections: { heading: string; body: string }[];
  boxTypes: string[];
  certifications: string[];
}

export const APPLICATIONS: ApplicationDetail[] = [
  {
    slug: "food-chocolate",
    label: "Food & Chocolate",
    description:
      "Premium chocolate boxes, confectionery packaging, and bakery boxes with food-safe inks and materials. EU 1935/2004 and FDA compliant options available.",
    hero: "From artisan chocolate truffles to luxury gift sets, food packaging must balance visual appeal with strict safety requirements. Our food-grade packaging solutions meet the most stringent EU and US regulations.",
    sections: [
      {
        heading: "Materials & Safety",
        body: "All food-contact packaging uses certified food-safe materials. Paperboard sourced from FSC-certified mills. Inks are water-based or soy-based, compliant with EU 1935/2004 and FDA 21 CFR. Adhesives are food-grade and migration-tested. Each material batch is traceable to supplier lot numbers.",
      },
      {
        heading: "Popular Box Structures",
        body: "Magnetic rigid boxes with ribbon pulls are the gold standard for premium chocolate gift sets. Lid-and-base setup boxes work well for multi-piece collections. Drawer boxes with custom-fit cavities prevent chocolates from shifting during shipping. Window boxes with PET or rPET windows allow product visibility while maintaining freshness.",
      },
      {
        heading: "Compliance Ready",
        body: "We provide EU 1935/2004 and FDA 21 CFR compliance documentation for every food-contact order. Heavy metal migration test reports (SGS, Intertek) are available on request. For German and Swiss markets, LFGB-compliant materials are standard.",
      },
    ],
    boxTypes: ["Magnetic Rigid Box", "Lid and Base Box", "Drawer Box", "Window Box"],
    certifications: ["EU 1935/2004", "FDA 21 CFR", "FSC", "LFGB"],
  },
  {
    slug: "cosmetic",
    label: "Cosmetic & Beauty",
    description:
      "Luxury cosmetic packaging for skincare, makeup, and fragrance brands. Magnetic rigid boxes with custom inserts, foil stamping, and soft-touch finishes.",
    hero: "Cosmetic packaging is the first physical touchpoint between a beauty brand and its customer. It must communicate luxury, protect delicate products, and align with the brand's visual identity.",
    sections: [
      {
        heading: "Luxury Finishes",
        body: "Soft-touch matte lamination is the most requested finish in cosmetic packaging — it creates a velvety texture that signals premium quality. Hot foil stamping in gold, rose gold, or holographic foil adds elegance to logos and patterns. Spot UV can highlight specific design elements on a matte background. Embossing and debossing add tactile dimension to brand marks.",
      },
      {
        heading: "Insert Solutions",
        body: "Custom-fit inserts are essential for cosmetic products. EVA foam inserts provide a dense, premium feel for skincare jars and fragrance bottles. Velvet and flocked inserts add luxury for jewelry-like cosmetic items. Paper pulp trays offer a sustainable alternative for eco-conscious beauty brands. Die-cut platforms with ribbon lifts make product retrieval elegant.",
      },
      {
        heading: "Sustainability Options",
        body: "FSC-certified paperboard, PVC-free window alternatives (rPET), water-based inks, and GRS-certified recycled content options are all available. Many beauty brands are transitioning to mono-material packaging to improve recyclability — we can advise on structural options.",
      },
    ],
    boxTypes: ["Magnetic Rigid Box", "Drawer Box", "Specialty Box", "Lid and Base Box"],
    certifications: ["FSC", "GRS", "ISO 9001"],
  },
  {
    slug: "jewelry",
    label: "Jewelry & Watches",
    description:
      "Elegant jewelry boxes with velvet, EVA, or silk lining. Drawer boxes, lid-and-base sets, and compact travel cases for rings, necklaces, and watches.",
    hero: "Jewelry packaging must protect, present, and elevate. A well-designed jewelry box becomes part of the product experience — from the weight of the box in hand to the reveal of the piece inside.",
    sections: [
      {
        heading: "Premium Linings",
        body: "We offer velvet (polyester and rayon options), suede, silk, satin, and flocked linings in a wide color range. EVA foam with flocked surface is ideal for precision-cut ring and watch inserts. Magnetic closure systems and ribbon hinges add refinement to the opening experience.",
      },
      {
        heading: "Box Structures",
        body: "Lid-and-base boxes are the classic jewelry box format. Drawer boxes with ring rolls or watch cushions are popular for higher-value pieces. Book-style boxes that open like a hardcover create a dramatic reveal. Compact travel cases with secure clasps protect jewelry during transport.",
      },
      {
        heading: "Branding Details",
        body: "Foil-stamped or debossed logos on the exterior lid. Custom-printed interior papers with brand patterns. Satin ribbons with printed brand names. Metal badge plates for an ultra-premium finish. LED lighting elements available for high-end watch packaging.",
      },
    ],
    boxTypes: ["Lid and Base Box", "Drawer Box", "Specialty Box", "Magnetic Rigid Box"],
    certifications: ["ISO 9001", "FSC"],
  },
  {
    slug: "electronics",
    label: "Electronics & Tech",
    description:
      "Rigid packaging for headphones, wearables, mobile accessories, and consumer electronics. Precision-fit inserts and premium unboxing experience design.",
    hero: "Electronics packaging has become a critical part of product marketing. The unboxing experience — from the seal to the layered reveal — drives millions of YouTube views and directly impacts brand perception.",
    sections: [
      {
        heading: "Precision Inserts",
        body: "Our insert engineering ensures products arrive undamaged and are presented beautifully. Die-cut EVA or paperboard inserts hold products at precise angles for the optimal first impression. Multi-layer trays create a progressive unboxing narrative. Cable and accessory compartments keep everything organized.",
      },
      {
        heading: "Premium Finishes",
        body: "Soft-touch coatings are the standard for consumer electronics packaging. Matte lamination with spot UV highlights technical specifications or product images. Metallic foil stamping for model numbers and brand marks. Debossed logos on rigid chipboard create a minimalist, premium look.",
      },
    ],
    boxTypes: ["Magnetic Rigid Box", "Lid and Base Box", "Specialty Box"],
    certifications: ["ISO 9001", "FSC"],
  },
  {
    slug: "wine-spirits",
    label: "Wine & Spirits",
    description:
      "Gift tubes, rigid boxes, and multi-bottle sets for wine, whiskey, champagne, and craft spirits. Luxury finishes for duty-free, limited editions, and corporate gifting.",
    hero: "Wine and spirits packaging operates in a unique space — it must convey heritage, quality, and occasion while protecting fragile glass bottles during transport.",
    sections: [
      {
        heading: "Structures & Formats",
        body: "Gift tubes (round or square) for single bottles — popular for duty-free and gift sets. Rigid boxes for single bottles with custom-fit cavities and satin lining. Multi-bottle sets (2–6 bottles) with dividers for gift collections. Wood-grain paper wrapping for a rustic, cellar-door aesthetic. Leather-look finishes for ultra-premium spirits.",
      },
      {
        heading: "Protection & Transport",
        body: "Reinforced base structures support bottle weight (750ml–1.5L). Custom-fit cavities prevent bottle rotation during shipping. Corrugated outer cartons rated for bottle transport. Container loading tested for multi-case shipments.",
      },
    ],
    boxTypes: ["Specialty Box", "Gift Tube", "Lid and Base Box", "Magnetic Rigid Box"],
    certifications: ["ISO 9001", "FSC"],
  },
  {
    slug: "teeth-aligner",
    label: "Teeth Aligner & Medical",
    description:
      "Clean, medical-grade packaging for teeth aligners, retainers, and healthcare products. FSC-certified materials, precise inserts, and hygienic inner seals.",
    hero: "Medical and dental packaging demands clinical precision. Every material, finish, and insert must meet hygiene standards while maintaining a clean, professional brand presentation.",
    sections: [
      {
        heading: "Hygienic Design",
        body: "Clean, minimal designs with easy-to-sanitize surfaces. Inner seal options (tamper-evident stickers, heat-sealed pouches) for product integrity. Anti-microbial coating options available for high-touch surfaces. Sterile-pack compatible materials on request.",
      },
      {
        heading: "Insert Engineering",
        body: "Precision die-cut trays hold aligners or retainers in numbered sequence. Clear PET/rPET trays allow product visibility while maintaining hygiene. Patient instruction cards integrated into box structure. QR code panels for linking to treatment apps and instructions.",
      },
    ],
    boxTypes: ["Lid and Base Box", "Drawer Box", "Magnetic Rigid Box"],
    certifications: ["ISO 9001", "FSC", "ISO 13485"],
  },
  {
    slug: "apparel",
    label: "Apparel & Fashion",
    description:
      "Branded shirt boxes, accessory packaging, and premium retail bags for fashion brands. Magnetic closures, tissue lining, and luxury finishing for elevated retail presentation.",
    hero: "Fashion packaging extends the retail experience into the customer's home. A beautifully designed shirt box or accessory case reinforces the brand's quality promise long after purchase.",
    sections: [
      {
        heading: "Retail-Ready Formats",
        body: "Shirt boxes with tissue lining — the classic format for folded garments. Accessory boxes for ties, scarves, belts, and small leather goods. Magnetic rigid boxes for premium fashion gifts and seasonal collections. Retail bags — paper with rope handles, foil-stamped logos, matte or gloss lamination.",
      },
      {
        heading: "Finishing & Branding",
        body: "Foil-stamped or debossed logos on lids. Custom-printed tissue paper with brand patterns. Interior printing for surprise-and-delight moments. Ribbon pulls and magnetic closures for a premium hand feel. Seasonal color matching for campaign-specific packaging.",
      },
    ],
    boxTypes: ["Magnetic Rigid Box", "Lid and Base Box", "Specialty Box"],
    certifications: ["FSC", "ISO 9001"],
  },
  {
    slug: "subscription-box",
    label: "Subscription Boxes",
    description:
      "Custom mailer and presentation boxes for DTC subscription brands. Designed for shipping durability with strong unboxing appeal. Digital printing for multi-SKU short runs.",
    hero: "Subscription box brands live and die by the unboxing experience. Every month, your box competes for social media attention — and the packaging itself is a retention tool.",
    sections: [
      {
        heading: "DTC-Optimized Design",
        body: "Mailer boxes with tear strips for easy opening — no knife required. Interior printing with brand patterns, welcome messages, or social media prompts. Custom-fit dividers and inserts to organize multiple products within a single box. Double-wall corrugated options for heavy or fragile product assortments.",
      },
      {
        heading: "Short-Run Flexibility",
        body: "Digital printing enables cost-effective short runs (from 500 units). Variable data printing — each box can have unique codes, member names, or edition numbers. Multi-SKU capability for brands running multiple subscription tiers or seasonal variations. Quick turnaround for monthly box refreshes.",
      },
    ],
    boxTypes: ["Mailer Box", "Magnetic Rigid Box", "Specialty Box"],
    certifications: ["FSC", "GRS"],
  },
];

export function getApplicationBySlug(slug: string): ApplicationDetail | undefined {
  return APPLICATIONS.find((a) => a.slug === slug);
}

export function getAllApplicationSlugs(): string[] {
  return APPLICATIONS.map((a) => a.slug);
}
