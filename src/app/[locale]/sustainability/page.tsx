import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Leaf, FileCheck, Factory, ClipboardCheck } from "lucide-react";
import type { Metadata } from "next";

const MODULES = [
  {
    icon: Leaf,
    title: "Our Commitment",
    content:
      "We are committed to reducing environmental impact through responsible material sourcing and manufacturing. We support our clients in meeting EU Packaging and Packaging Waste Regulation (PPWR) requirements, California Proposition 65, and other environmental regulations through material selection, design optimization, and transparent documentation.",
  },
  {
    icon: FileCheck,
    title: "Materials & Certifications",
    content:
      "FSC-certified paper options available with verifiable license code. Water-based and soy-based inks for reduced VOC emissions. PVC-free insert alternatives (PET, rPET, paper pulp trays). Recycled content options certified by GRS (Global Recycled Standard) for brands targeting PCR% goals. Biodegradable material options per EN 13432 available on request.",
  },
  {
    icon: Factory,
    title: "Manufacturing Practices",
    content:
      "In-house waste paper collection and recycling program. Energy-efficient production scheduling to minimize idle machine time. Structural design optimization to reduce material waste — right-sizing box dimensions and nesting dielines for maximum sheet utilization. Excess material from production runs offered to clients for future orders where feasible.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Readiness",
    content:
      "We help clients navigate EU PPWR, REACH SVHC, California Proposition 65, and FDA 21 CFR for food contact packaging. Third-party test reports from SGS, Intertek, and Bureau Veritas available on request. We maintain a library of material compliance declarations from our paper, ink, and adhesive suppliers for rapid documentation turnaround during buyer audits.",
  },
];

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "FSC-certified materials, water-based inks, PVC-free alternatives, and EU PPWR compliance readiness for sustainable custom packaging.",
};

export default function SustainabilityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Sustainability" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Sustainability</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Responsible packaging for a better future. Our approach to environmental stewardship across materials, manufacturing, and compliance.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {MODULES.map((mod) => (
          <Card key={mod.title} className="border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
            <CardContent className="p-6">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <mod.icon className="h-5 w-5 text-primary" />
              </span>
              <h2 className="text-lg font-semibold">{mod.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {mod.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="rounded-lg border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
        <strong className="text-foreground">Our approach:</strong> We avoid unsubstantiated claims. We do not claim to be &quot;carbon neutral&quot; or a &quot;green company&quot; without third-party verification. Instead, we provide verifiable certifications, test reports, and material traceability so you can make informed decisions and meet your own ESG reporting requirements.
      </div>
    </div>
  );
}
