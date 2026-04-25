import { defineType, defineField } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Ordering", "Customization", "Shipping", "Compliance"] } }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "question", subtitle: "category" } },
  orderings: [
    { name: "orderAsc", title: "Display Order (asc)", by: [{ field: "displayOrder", direction: "asc" }] },
  ],
});
