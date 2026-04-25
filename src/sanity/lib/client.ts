import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import type { SanityClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "e3qedi41";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-04-25";

let _client: SanityClient | null = null;

function getClient(): SanityClient | null {
  if (_client) return _client;
  try {
    _client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN,
      stega: { enabled: false },
    });
    return _client;
  } catch (err) {
    console.warn("Sanity client creation failed:", (err as Error).message);
    return null;
  }
}

let _builder: ReturnType<typeof imageUrlBuilder> | null = null;

export function urlFor(source: SanityImageSource) {
  if (!_builder) {
    _builder = imageUrlBuilder({ projectId, dataset });
  }
  return _builder.image(source);
}

/** Fetch helper with fallback — returns null when Sanity is unreachable instead of crashing */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  const client = getClient();
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params ?? {});
  } catch (err) {
    console.warn("Sanity fetch failed:", (err as Error).message);
    return null;
  }
}
