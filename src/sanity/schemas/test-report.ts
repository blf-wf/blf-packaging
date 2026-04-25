import { defineType, defineField } from "sanity";

export const testReport = defineType({
  name: "testReport",
  title: "Test Report (Product Testing)",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Report Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "testType", title: "Test Type", type: "string", options: { list: ["EU 1935/2004", "LFGB", "FDA 21 CFR", "REACH", "RoHS", "EN 71", "FSC Chain of Custody", "Other"] } }),
    defineField({ name: "date", title: "Test Date", type: "date" }),
    defineField({ name: "lab", title: "Testing Lab", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "details", title: "Full Details", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "file", title: "Report File (PDF)", type: "file", options: { accept: ".pdf" } }),
    defineField({ name: "validUntil", title: "Valid Until", type: "date" }),
  ],
  preview: { select: { title: "title", subtitle: "testType" } },
  orderings: [
    { name: "dateDesc", title: "Date (newest first)", by: [{ field: "date", direction: "desc" }] },
  ],
});
