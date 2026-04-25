import { sanityFetch } from "@/sanity/lib/client";

export interface SiteSettings {
  siteName: string;
  siteDescription?: string;
  contactEmail?: string;
  whatsappNumber?: string;
  address?: string;
  phone?: string;
  socialLinks?: { platform: string; url: string }[];
}

const SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  siteName,
  siteDescription,
  contactEmail,
  whatsappNumber,
  address,
  phone,
  socialLinks
}`;

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityFetch<SiteSettings>(SETTINGS_QUERY);
}
