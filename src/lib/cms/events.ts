import { sanityFetch } from "@/sanity/lib/client";

export interface EventItem {
  name: string;
  location: string;
  date: string;
  booth: string;
  description: string;
  status: "upcoming" | "past" | "cancelled";
}

const ALL_EVENTS_QUERY = `*[_type == "event"] | order(startDate asc) {
  name,
  location,
  "date": select(
    defined(endDate) && endDate != startDate =>
      startDate + " to " + endDate,
    startDate
  ),
  booth,
  description,
  status
}`;

const MOCK_EVENTS: EventItem[] = [
  {
    name: "Interpack 2026",
    location: "Düsseldorf, Germany",
    date: "2026-05-07 to 2026-05-13",
    booth: "TBD",
    description:
      "The world's largest packaging trade fair. We exhibit every 3 years — Interpack is our flagship event for meeting European brand clients and showcasing new box structures.",
    status: "upcoming",
  },
  {
    name: "Cosmoprof Bologna 2026",
    location: "Bologna, Italy",
    date: "2026-03-20 to 2026-03-23",
    booth: "Hall 19, Stand C12",
    description:
      "The leading B2B beauty trade show. We showcase luxury cosmetic packaging solutions — magnetic rigid boxes, soft-touch finishes, and sustainable insert options for skincare, makeup, and fragrance brands.",
    status: "upcoming",
  },
  {
    name: "Luxe Pack Monaco 2026",
    location: "Monaco",
    date: "2026-09-28 to 2026-09-30",
    booth: "TBD",
    description:
      "The premier luxury packaging event. We present our latest premium finishes, digital foil stamping innovations, and bespoke rigid box designs for high-end spirits, jewelry, and fashion brands.",
    status: "upcoming",
  },
  {
    name: "Canton Fair Phase 2 2026",
    location: "Guangzhou, China",
    date: "2026-04-23 to 2026-04-27",
    booth: "Hall 14.2, Stand G08",
    description:
      "China's largest trade fair. We welcome clients to visit our booth and factory (30 minutes from the fairgrounds). Factory tours with production line walkthroughs available by appointment.",
    status: "upcoming",
  },
  {
    name: "Pack Expo International 2026",
    location: "Chicago, IL, USA",
    date: "2026-11-08 to 2026-11-11",
    booth: "TBD",
    description:
      "North America's largest packaging event. Key event for meeting US-based brand clients and discussing tariff strategies, DDP shipping, and West Coast distribution options.",
    status: "upcoming",
  },
];

export async function getAllEvents(): Promise<EventItem[]> {
  const data = await sanityFetch<EventItem[]>(ALL_EVENTS_QUERY);
  return data ?? MOCK_EVENTS;
}
