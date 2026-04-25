import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/cms";
import { getAllApplicationSlugs } from "@/lib/cms";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.blfpack.com";

// Static marketing pages
const STATIC_PAGES = [
  { path: "", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/why-choose-us", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/applications", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/customization", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/sustainability", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/compliance", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/compliance/social-audits", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/compliance/product-testing", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/commercial-terms", changeFrequency: "yearly" as const, priority: 0.5 },
  { path: "/supply-chain", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/case-studies", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/team", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/events", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/samples", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/instant-quote", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/cookie-policy", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getAllBlogSlugs();
  const appSlugs = await getAllApplicationSlugs();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE_URL}/en${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/en/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const appEntries: MetadataRoute.Sitemap = appSlugs.map((slug) => ({
    url: `${BASE_URL}/en/applications/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...appEntries];
}
