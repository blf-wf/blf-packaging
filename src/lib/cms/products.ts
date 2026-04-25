import { sanityFetch } from "@/sanity/lib/client";
import { PRODUCTS, type Product } from "@/data/products";

const ALL_PRODUCTS_QUERY = `*[_type == "product"] | order(title asc) {
  "slug": slug.current,
  title,
  "boxStructure": boxStructure->slug.current,
  dimensionsRange,
  materials,
  printing,
  finishes,
  inserts,
  moq,
  sampleLeadTime,
  productionLeadTime,
  excerpt,
  "applications": applications[]->slug.current
}`;

export async function getAllProducts(): Promise<Product[]> {
  const data = await sanityFetch<Product[]>(ALL_PRODUCTS_QUERY);
  return data ?? PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const data = await sanityFetch<Product[]>(
    `*[_type == "product" && slug.current == $slug] {
      "slug": slug.current,
      title,
      "boxStructure": boxStructure->slug.current,
      dimensionsRange,
      materials,
      printing,
      finishes,
      inserts,
      moq,
      sampleLeadTime,
      productionLeadTime,
      excerpt,
      "applications": applications[]->slug.current
    }`,
    { slug }
  );
  if (data && data.length > 0) return data[0];
  return PRODUCTS.find((p) => p.slug === slug);
}

export async function getProductsByBoxType(boxTypeSlug: string): Promise<Product[]> {
  const data = await sanityFetch<Product[]>(
    `*[_type == "product" && boxStructure->slug.current == $boxTypeSlug] | order(title asc) {
      "slug": slug.current,
      title,
      "boxStructure": boxStructure->slug.current,
      dimensionsRange,
      materials,
      printing,
      finishes,
      inserts,
      moq,
      sampleLeadTime,
      productionLeadTime,
      excerpt,
      "applications": applications[]->slug.current
    }`,
    { boxTypeSlug }
  );
  if (data && data.length > 0) return data;
  return PRODUCTS.filter((p) => p.boxStructure === boxTypeSlug);
}
