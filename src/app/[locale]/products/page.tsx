import { getBoxTypes, getAllProducts } from "@/lib/cms";
import { ProductCard } from "@/components/marketing/product-card";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { Box } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Paper & Gift Box Products",
  description:
    "Browse our full range of custom paper packaging — from magnetic rigid boxes to folding cartons. Filter by box structure and application.",
};

export default async function ProductsPage() {
  const [products, boxTypes] = await Promise.all([getAllProducts(), getBoxTypes()]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Products" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">All Products</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Browse by box structure below, or explore our full product catalog.
      </p>

      {/* Box type navigation */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {boxTypes.map((bt) => (
          <Link key={bt.slug} href={`/products/${bt.slug}`}>
            <Card className="group h-full transition-shadow hover:shadow-md">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <div className="flex h-full items-center justify-center">
                  <Box className="h-10 w-10 text-muted-foreground/40" />
                </div>
              </AspectRatio>
              <CardContent className="p-5">
                <h2 className="text-base font-semibold group-hover:text-primary">
                  {bt.label}
                </h2>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {bt.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* All products */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
