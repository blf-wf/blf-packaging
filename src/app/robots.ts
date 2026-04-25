import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.blfpack.com";

export default function robots(): MetadataRoute.Robots {
  // Block all crawlers until site is ready
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
