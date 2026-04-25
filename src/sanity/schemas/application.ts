import { defineType, defineField } from "sanity";

export const application = defineType({
  name: "application",
  title: "Application (Industry)",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "label" }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "hero", title: "Hero Text", type: "text" }),
    defineField({
      name: "sections", title: "Content Sections", type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "heading", title: "Heading", type: "string", validation: (r) => r.required() }),
          defineField({ name: "body", title: "Body", type: "text", validation: (r) => r.required() }),
        ],
      }],
    }),
    defineField({ name: "boxTypes", title: "Recommended Box Types", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "certifications", title: "Certifications", type: "array", of: [{ type: "string" }] }),
  ],
  preview: { select: { title: "label", subtitle: "description" } },
});
