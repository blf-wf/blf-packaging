import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { CustomizationOptions } from "@/components/marketing/customization-options";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, LayoutGrid, Sparkles, Printer } from "lucide-react";
import type { Metadata } from "next";

const DETAILS = [
  {
    icon: FileText,
    title: "Materials",
    content:
      "We source paperboard from certified mills in Europe, North America, and Asia. Available substrates include SBS (Solid Bleached Sulfate), FBB (Folding Box Board), grey chipboard, Kraft, specialty textured papers, and corrugated board. FSC-certified options are available across most material categories. Minimum GSM ranges from 200gsm (folding cartons) to 2000gsm+ (rigid boxes).",
  },
  {
    icon: LayoutGrid,
    title: "Inserts & Interior",
    content:
      "Choose from die-cut EVA foam, PU sponge, paperboard trays, velvet/flocked thermoformed trays, PET trays, and custom thermoformed inserts. For EU-bound products, we recommend PVC-free alternatives (PET, rPET, paper pulp) to support PPWR compliance. Multi-layer insert designs can hold multiple products with precision-fit cavities.",
  },
  {
    icon: Sparkles,
    title: "Special Finishes",
    content:
      "Hot foil stamping (gold, silver, copper, holographic), blind and registered embossing/debossing, spot UV and full UV coating, matte and gloss lamination, soft-touch coating, laser engraving, and digital foil (variable data). Finishing combinations can create multi-texture effects — e.g., matte lamination base with gloss spot UV and gold foil accents.",
  },
  {
    icon: Printer,
    title: "Printing Techniques",
    content:
      "Offset lithography (CMYK + spot Pantone) for high-volume projects with color precision. Digital printing for short runs (500–2,000 pcs) with variable data capability. Silk screen for specialty inks and textured effects. Metallic and gradient printing available on selected presses. Proofing includes digital proofs, press proofs, and wet proofs.",
  },
];

export const metadata: Metadata = {
  title: "Customization Options",
  description:
    "Explore materials, inserts, special finishes, and printing techniques for custom paper packaging. FSC-certified, PVC-free, and PPWR-ready options available.",
};

export default function CustomizationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Customization" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Customization Options</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Every element of your packaging can be customized. Explore materials, inserts, finishes, and printing techniques below.
      </p>

      <CustomizationOptions />

      <Separator className="my-12" />

      {/* Detailed sections */}
      <div className="space-y-10">
        {DETAILS.map((detail) => (
          <div key={detail.title}>
            <div className="flex items-center gap-3 mb-3">
              <detail.icon className="h-6 w-6 text-primary/60" />
              <h2 className="text-2xl font-semibold">{detail.title}</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">{detail.content}</p>
          </div>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="text-center">
        <h2 className="text-2xl font-semibold">Ready to customize your packaging?</h2>
        <p className="mt-2 text-muted-foreground">
          Contact us with your specifications for a free consultation and 3D mockup.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}
