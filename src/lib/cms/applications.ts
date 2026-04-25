import { sanityFetch } from "@/sanity/lib/client";
import { APPLICATIONS, type ApplicationDetail } from "@/data/applications";

const ALL_APPLICATIONS_QUERY = `*[_type == "application"] | order(label asc) {
  "slug": slug.current,
  label,
  description,
  hero,
  sections,
  boxTypes,
  certifications
}`;

export async function getAllApplications(): Promise<ApplicationDetail[]> {
  const data = await sanityFetch<ApplicationDetail[]>(ALL_APPLICATIONS_QUERY);
  return data ?? APPLICATIONS;
}

export async function getApplicationBySlug(slug: string): Promise<ApplicationDetail | undefined> {
  const data = await sanityFetch<ApplicationDetail[]>(
    `*[_type == "application" && slug.current == $slug] {
      "slug": slug.current,
      label,
      description,
      hero,
      sections,
      boxTypes,
      certifications
    }`,
    { slug }
  );
  if (data && data.length > 0) return data[0];
  return APPLICATIONS.find((a) => a.slug === slug);
}

export async function getAllApplicationSlugs(): Promise<string[]> {
  const data = await sanityFetch<string[]>(`*[_type == "application"].slug.current`);
  if (data && data.length > 0) return data;
  return APPLICATIONS.map((a) => a.slug);
}
