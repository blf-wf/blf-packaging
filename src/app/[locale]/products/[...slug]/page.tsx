import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import {
  getBoxTypes,
  getBoxTypeBySlug,
  getProductBySlug,
  getProductsByBoxType,
  getAllProducts,
} from "@/lib/cms";
import { ProductCard } from "@/components/marketing/product-card";
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Box,
  Ruler,
  Printer,
  Palette,
  Layers,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { boxTypeImages } from "@/lib/images";

const SITE = "https://www.blfpack.com";

export async function generateStaticParams() {
  const [products, boxTypes] = await Promise.all([getAllProducts(), getBoxTypes()]);
  return [
    ...products.map((p) => ({ slug: [p.slug] })),
    ...boxTypes.map((b) => ({ slug: [b.slug] })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const first = slug[0];
  const [boxType, product] = await Promise.all([
    getBoxTypeBySlug(first),
    getProductBySlug(first),
  ]);
  if (boxType) {
    return {
      title: boxType.label,
      description: boxType.description,
      alternates: { canonical: `${SITE}/en/products/${first}` },
    };
  }
  if (product) {
    return {
      title: product.title,
      description: product.excerpt,
      alternates: { canonical: `${SITE}/en/products/${first}` },
    };
  }
  return { title: "Products" };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const first = slug[0];

  // Check if it's a box type page
  const boxType = await getBoxTypeBySlug(first);
  if (boxType) {
    const products = await getProductsByBoxType(first);
    return (
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Products", href: "/products" },
            { label: boxType.label },
          ]}
        />
        <div className="mt-6">
          <h1 className="text-3xl font-semibold tracking-tight">{boxType.label}</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">{boxType.description}</p>
        </div>
        {products.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            No products found in this category yet.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Otherwise, it's a product detail page
  const product = await getProductBySlug(first);
  if (!product) notFound();
  const bt = await getBoxTypeBySlug(product.boxStructure);
  const related = (await getProductsByBoxType(product.boxStructure))
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Products", href: "/products" },
          { label: product.boxStructure.replace(/-/g, " "), href: `/products/${product.boxStructure}` },
          { label: product.title },
        ]}
      />

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <AspectRatio ratio={1} className="rounded-lg bg-muted overflow-hidden">
          <Image
            src={boxTypeImages[product.boxStructure] ?? boxTypeImages["magnetic-rigid-box"]}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </AspectRatio>

        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {bt?.label ?? product.boxStructure}
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight">{product.title}</h1>
            <p className="mt-3 leading-relaxed text-muted-foreground">{product.excerpt}</p>
          </div>

          {/* Quick Specs */}
          <Card>
            <CardContent className="grid gap-3 p-4 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Size:</span>
                <span>{product.dimensionsRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <Printer className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Printing:</span>
                <span>{product.printing.join(", ")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Finishes:</span>
                <span>{product.finishes.slice(0, 3).join(", ")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Inserts:</span>
                <span>{product.inserts.join(", ")}</span>
              </div>
              <div className="flex items-center gap-2">
                <PackageCheck className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">MOQ:</span>
                <span>{product.moq}+ pcs</span>
              </div>
              <div className="flex items-center gap-2">
                <Box className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Lead time:</span>
                <span>{product.productionLeadTime}</span>
              </div>
            </CardContent>
          </Card>

          {/* CTAs */}
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/contact">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/samples">Request Sample</Link>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Related products */}
      <div>
        <h2 className="text-2xl font-semibold">Related Products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
        </div>
      </div>
    </div>
  );
}
