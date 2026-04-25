import { defineType, defineField } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Materials", "Compliance", "Industry", "Design", "Sustainability"] } }),
    defineField({ name: "publishedAt", title: "Published At", type: "date", validation: (r) => r.required() }),
    defineField({ name: "author", title: "Author", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", title: "Body", type: "text", validation: (r) => r.required() }),
    defineField({ name: "image", title: "Cover Image", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
  orderings: [
    { name: "dateDesc", title: "Date (newest first)", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
});
