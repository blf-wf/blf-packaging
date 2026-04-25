import { defineType, defineField } from "sanity";

export const auditReport = defineType({
  name: "auditReport",
  title: "Audit Report (Social Compliance)",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Report Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "reportType", title: "Report Type", type: "string", options: { list: ["SMETA", "BSCI", "SA8000", "SEDEX", "ISO 45001", "Other"] } }),
    defineField({ name: "date", title: "Audit Date", type: "date" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "details", title: "Full Details", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "file", title: "Report File (PDF)", type: "file", options: { accept: ".pdf" } }),
    defineField({ name: "validUntil", title: "Valid Until", type: "date" }),
  ],
  preview: { select: { title: "title", subtitle: "reportType" } },
  orderings: [
    { name: "dateDesc", title: "Date (newest first)", by: [{ field: "date", direction: "desc" }] },
  ],
});
