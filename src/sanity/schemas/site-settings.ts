import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "siteDescription", title: "Site Description", type: "text" }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp Number", type: "string" }),
    defineField({ name: "address", title: "Company Address", type: "text" }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({
      name: "socialLinks", title: "Social Links", type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "platform", title: "Platform", type: "string", options: { list: ["LinkedIn", "YouTube", "Instagram", "Facebook", "Twitter", "Alibaba"] } }),
          defineField({ name: "url", title: "URL", type: "url" }),
        ],
      }],
    }),
    defineField({ name: "gtmContainerId", title: "GTM Container ID", type: "string" }),
    defineField({ name: "ga4MeasurementId", title: "GA4 Measurement ID", type: "string" }),
    defineField({ name: "turnstileSiteKey", title: "Turnstile Site Key", type: "string" }),
  ],
  preview: { select: { title: "siteName" } },
});
