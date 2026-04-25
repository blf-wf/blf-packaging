import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Box } from "lucide-react";
import type { Product } from "@/lib/cms";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="group h-full transition-shadow hover:shadow-md">
        <AspectRatio ratio={4 / 3} className="bg-muted">
          <div className="flex h-full items-center justify-center">
            <Box className="h-12 w-12 text-muted-foreground/40" />
          </div>
        </AspectRatio>
        <CardContent className="p-5">
          <Badge variant="secondary" className="mb-2 text-xs">
            MOQ: {product.moq}+ pcs
          </Badge>
          <h3 className="text-base font-semibold">{product.title}</h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {product.excerpt}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {product.finishes.slice(0, 3).map((f) => (
              <span
                key={f}
                className="rounded border bg-background px-2 py-0.5 text-xs text-muted-foreground"
              >
                {f}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
