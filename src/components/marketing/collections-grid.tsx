import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { boxTypeImages } from "@/lib/images";

const COLLECTIONS = [
  {
    slug: "magnetic-rigid-box",
    label: "Magnetic / Foldable Rigid Box",
    description: "Premium magnetic closure boxes with foldable design — ideal for luxury gift sets, cosmetics, and high-end retail.",
  },
  {
    slug: "lid-and-base-box",
    label: "Lid and Base / Setup Box",
    description: "Classic two-piece rigid boxes for premium presentation. Custom inserts for product protection and unboxing experience.",
  },
  {
    slug: "drawer-box",
    label: "Drawer Box",
    description: "Slide-out drawer style boxes — popular for jewelry, watches, and premium confectionery packaging.",
  },
  {
    slug: "mailer-box",
    label: "Mailer / Shipping Box",
    description: "Durable e-commerce mailer boxes designed for DTC subscription brands. Strong corrugated construction with custom printing.",
  },
  {
    slug: "folding-carton",
    label: "Folding Carton",
    description: "Lightweight, cost-effective folding cartons for food, beauty, and consumer goods. Offset or digital printing available.",
  },
  {
    slug: "specialty-box",
    label: "Specialty Boxes",
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
                <CardContent className="p-0">
                  <AspectRatio ratio={4 / 3} className="rounded-t-md bg-muted overflow-hidden">
                    <Image
                      src={boxTypeImages[item.slug]}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </AspectRatio>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{item.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
