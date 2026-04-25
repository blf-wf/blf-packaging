import { sanityFetch } from "@/sanity/lib/client";

export interface TestReportItem {
  title: string;
  slug: string;
  testType: string;
  date: string;
  lab: string;
  summary: string;
  fileUrl?: string;
}

const ALL_TEST_REPORTS_QUERY = `*[_type == "testReport"] | order(date desc) {
  title,
  "slug": slug.current,
  testType,
  date,
  lab,
  summary,
  "fileUrl": file.asset->url
}`;

export async function getAllTestReports(): Promise<TestReportItem[] | null> {
  return sanityFetch<TestReportItem[]>(ALL_TEST_REPORTS_QUERY);
}
