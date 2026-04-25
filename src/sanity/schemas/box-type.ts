import { defineType, defineField } from "sanity";

export const boxType = defineType({
  name: "boxType",
  title: "Box Type (Product Category)",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "icon", title: "Icon Name", type: "string", description: "Lucide icon name, e.g. 'sparkles'" }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 0 }),
  ],
});
