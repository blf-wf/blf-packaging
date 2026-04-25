import { Card, CardContent } from "@/components/ui/card";
import { Factory, Palette, Leaf, Globe } from "lucide-react";

const PILLARS = [
  {
    icon: Factory,
    title: "Factory-Direct & Scalable Production",
    description:
      "Source directly from our 12,000 m² manufacturing facility. With 60+ automated machines and 120+ production staff, we deliver consistent quality at scale — bulk orders ship in 6–15 working days.",
  },
  {
    icon: Palette,
    title: "Bespoke Structural & Brand Design",
    description:
      "Free structural design and 3D rendering support from our team of 8+ packaging designers. Get 2-hour design drafts and 2-hour 3D mockups after receiving your complete specifications.",
  },
  {
    icon: Leaf,
    title: "Sustainability & Responsible Materials",
    description:
      "FSC-certified paper options, water-based and soy-based inks, and PVC-free insert alternatives available. We support clients in meeting EU PPWR and California Proposition 65 requirements.",
  },
  {
    icon: Globe,
    title: "Global Logistics & Fulfillment",
    description:
      "Export-grade packaging with reinforced outer cartons. FOB, CIF, and DDP shipping terms supported. Container loading photos and shipment tracking provided for full visibility.",
  },
];

export function TrustPillars() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Global Brands Trust Us
          </h2>
          <p className="mt-3 text-muted-foreground">
            Four pillars that define our commitment to quality, design, sustainability, and service.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <Card key={pillar.title} className="border-0 bg-transparent shadow-none">
              <CardContent className="p-6 text-center">
                <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <pillar.icon className="h-7 w-7 text-primary" />
                </span>
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
