import { defineType, defineField } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "industry", title: "Industry", type: "string" }),
    defineField({ name: "region", title: "Region / Market", type: "string" }),
    defineField({ name: "challenge", title: "Challenge", type: "text" }),
    defineField({ name: "solution", title: "Solution", type: "text" }),
    defineField({ name: "results", title: "Results", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "boxType", title: "Box Type", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
  preview: { select: { title: "title", subtitle: "industry", media: "image" } },
});
