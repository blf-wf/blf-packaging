import { defineType, defineField } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Event Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "startDate", title: "Start Date", type: "date" }),
    defineField({ name: "endDate", title: "End Date", type: "date" }),
    defineField({ name: "booth", title: "Booth Number", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["upcoming", "past", "cancelled"] }, initialValue: "upcoming" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
  preview: { select: { title: "name", subtitle: "location", media: "image" } },
  orderings: [
    { name: "dateAsc", title: "Date (earliest first)", by: [{ field: "startDate", direction: "asc" }] },
  ],
});
