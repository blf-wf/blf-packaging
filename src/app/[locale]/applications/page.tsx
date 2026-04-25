import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import {
  Cake,
  Sparkles,
  Gem,
  Smartphone,
  Wine,
  Smile,
  Shirt,
  PackageOpen,
} from "lucide-react";
import type { Metadata } from "next";

const APPLICATIONS = [
  {
    slug: "food-chocolate",
    label: "Food & Chocolate",
    icon: Cake,
    description:
      "Premium chocolate boxes, confectionery packaging, and bakery boxes with food-safe inks and materials. EU 1935/2004 and FDA compliant options available.",
  },
  {
    slug: "cosmetic",
    label: "Cosmetic & Beauty",
    icon: Sparkles,
    description:
      "Luxury cosmetic packaging for skincare, makeup, and fragrance brands. Magnetic rigid boxes with custom inserts, foil stamping, and soft-touch finishes.",
  },
  {
    slug: "jewelry",
    label: "Jewelry & Watches",
    icon: Gem,
    description:
      "Elegant jewelry boxes with velvet, EVA, or silk lining. Drawer boxes, lid-and-base sets, and compact travel cases for rings, necklaces, and watches.",
  },
  {
    slug: "electronics",
    label: "Electronics & Tech",
    icon: Smartphone,
    description:
      "Rigid packaging for headphones, wearables, mobile accessories, and consumer electronics. Precision-fit inserts and premium unboxing experience design.",
  },
  {
    slug: "wine-spirits",
    label: "Wine & Spirits",
    icon: Wine,
    description:
      "Gift tubes, rigid boxes, and multi-bottle sets for wine, whiskey, champagne, and craft spirits. Luxury finishes for duty-free, limited editions, and corporate gifting.",
  },
  {
    slug: "teeth-aligner",
    label: "Teeth Aligner & Medical",
    icon: Smile,
    description:
      "Clean, medical-grade packaging for teeth aligners, retainers, and healthcare products. FSC-certified materials, precise inserts, and hygienic inner seals.",
  },
  {
    slug: "apparel",
    label: "Apparel & Fashion",
    icon: Shirt,
    description:
      "Branded shirt boxes, accessory packaging, and premium retail bags for fashion brands. Magnetic closures, tissue lining, and luxury finishing for elevated retail presentation.",
  },
  {
    slug: "subscription-box",
    label: "Subscription Boxes",
    icon: PackageOpen,
    description:
      "Custom mailer and presentation boxes for DTC subscription brands. Designed for shipping durability with strong unboxing appeal. Digital printing for multi-SKU short runs.",
  },
];

export const metadata: Metadata = {
  title: "Applications — Packaging by Industry",
  description:
    "Custom packaging solutions by industry: food and chocolate, cosmetics, jewelry, electronics, wine and spirits, medical, fashion, and subscription boxes.",
};

export default function ApplicationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Applications" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Applications</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Explore our packaging solutions by industry. Each application draws on years of experience serving brands in that sector.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {APPLICATIONS.map((app) => (
          <Link key={app.slug} href={`/applications/${app.slug}`}>
            <Card className="group h-full border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
              <AspectRatio ratio={4 / 3} className="bg-muted">
                <div className="flex h-full items-center justify-center">
                  <app.icon className="h-12 w-12 text-primary/30" />
                </div>
              </AspectRatio>
              <CardContent className="p-5">
                <h2 className="text-base font-semibold group-hover:text-primary">
                  {app.label}
                </h2>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                  {app.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
