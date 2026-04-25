import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "e3qedi41";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-04-25";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // Token only needed for unpublished/draft content previews
  token: process.env.SANITY_API_READ_TOKEN,
  stega: { enabled: false },
});

const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/** Fetch helper with fallback — returns null when Sanity is unreachable instead of crashing */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params ?? {});
  } catch (err) {
    console.warn("Sanity fetch failed:", (err as Error).message);
    return null;
  }
}
