import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "boxStructure", title: "Box Structure", type: "reference", to: [{ type: "boxType" }] }),
    defineField({ name: "dimensionsRange", title: "Dimensions Range", type: "string" }),
    defineField({ name: "materials", title: "Materials", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "printing", title: "Printing Methods", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "finishes", title: "Finishes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "inserts", title: "Inserts", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "moq", title: "Minimum Order Quantity", type: "number" }),
    defineField({ name: "sampleLeadTime", title: "Sample Lead Time", type: "string" }),
    defineField({ name: "productionLeadTime", title: "Production Lead Time", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({ name: "applications", title: "Applications", type: "array", of: [{ type: "reference", to: [{ type: "application" }] }] }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "featured", title: "Featured Product", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "title", subtitle: "boxStructure.name", media: "images.0" },
  },
  orderings: [
    { name: "titleAsc", title: "Title A–Z", by: [{ field: "title", direction: "asc" }] },
  ],
});
