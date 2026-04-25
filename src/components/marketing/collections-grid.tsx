import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { Box, Gift, Layers, Package, Send, Sparkles } from "lucide-react";

const COLLECTIONS = [
  {
    slug: "magnetic-rigid-box",
    label: "Magnetic / Foldable Rigid Box",
    icon: Sparkles,
    description: "Premium magnetic closure boxes with foldable design — ideal for luxury gift sets, cosmetics, and high-end retail.",
  },
  {
    slug: "lid-and-base-box",
    label: "Lid and Base / Setup Box",
    icon: Box,
    description: "Classic two-piece rigid boxes for premium presentation. Custom inserts for product protection and unboxing experience.",
  },
  {
    slug: "drawer-box",
    label: "Drawer Box",
    icon: Layers,
    description: "Slide-out drawer style boxes — popular for jewelry, watches, and premium confectionery packaging.",
  },
  {
    slug: "mailer-box",
    label: "Mailer / Shipping Box",
    icon: Send,
    description: "Durable e-commerce mailer boxes designed for DTC subscription brands. Strong corrugated construction with custom printing.",
  },
  {
    slug: "folding-carton",
    label: "Folding Carton",
    icon: Package,
    description: "Lightweight, cost-effective folding cartons for food, beauty, and consumer goods. Offset or digital printing available.",
  },
  {
    slug: "specialty-box",
    label: "Specialty Boxes",
    icon: Gift,
    description: "Custom shapes, round boxes, cylindrical packaging, and other specialty structures for unique brand presentation.",
  },
];

export function CollectionsGrid() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Premium Collections
          </h2>
          <p className="mt-3 text-muted-foreground">
            Choose from our core box structures — each fully customizable to your brand specifications.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((item) => (
            <Link key={item.slug} href={`/products/${item.slug}`}>
              <Card className="group h-full border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
                <CardContent className="p-6">
                  <AspectRatio ratio={4 / 3} className="mb-4 rounded-md bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <item.icon className="h-12 w-12 text-primary/30" />
                    </div>
                  </AspectRatio>
                  <h3 className="text-lg font-semibold">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
