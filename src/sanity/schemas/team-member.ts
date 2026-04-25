import { defineType, defineField } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Job Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "name", subtitle: "title", media: "image" } },
  orderings: [
    { name: "orderAsc", title: "Display Order (asc)", by: [{ field: "displayOrder", direction: "asc" }] },
  ],
});
