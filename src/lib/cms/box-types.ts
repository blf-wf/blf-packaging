import { sanityFetch } from "@/sanity/lib/client";
import { BOX_TYPES, type BoxType } from "@/data/products";

const ALL_BOX_TYPES_QUERY = `*[_type == "boxType"] | order(displayOrder asc) {
  "slug": slug.current,
  "label": name,
  description,
  icon
}`;

export async function getBoxTypes(): Promise<BoxType[]> {
  const data = await sanityFetch<BoxType[]>(ALL_BOX_TYPES_QUERY);
  return data ?? BOX_TYPES;
}

export async function getBoxTypeBySlug(slug: string): Promise<BoxType | undefined> {
  const data = await sanityFetch<BoxType[]>(
    `*[_type == "boxType" && slug.current == $slug] {
      "slug": slug.current,
      "label": name,
      description,
      icon
    }`,
    { slug }
  );
  if (data && data.length > 0) return data[0];
  return BOX_TYPES.find((b) => b.slug === slug);
}
