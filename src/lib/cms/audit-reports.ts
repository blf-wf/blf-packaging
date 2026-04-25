import { sanityFetch } from "@/sanity/lib/client";

export interface AuditReportItem {
  title: string;
  slug: string;
  reportType: string;
  date: string;
  summary: string;
  fileUrl?: string;
}

const ALL_AUDIT_REPORTS_QUERY = `*[_type == "auditReport"] | order(date desc) {
  title,
  "slug": slug.current,
  reportType,
  date,
  summary,
  "fileUrl": file.asset->url
}`;

export async function getAllAuditReports(): Promise<AuditReportItem[] | null> {
  return sanityFetch<AuditReportItem[]>(ALL_AUDIT_REPORTS_QUERY);
}
