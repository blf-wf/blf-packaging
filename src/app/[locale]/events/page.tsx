import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Shows & Events",
  description:
    "Meet Blf Packaging at international packaging, beauty, food, and luxury trade shows. Upcoming exhibitions and event schedule.",
};

const EVENTS = [
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

export default function EventsPage() {
  const upcoming = EVENTS.filter((e) => e.status === "upcoming");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Events" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Trade Shows & Events</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Meet us in person. We exhibit at major packaging, beauty, food, and luxury trade shows
        worldwide. Factory visits are also available year-round in Guangzhou.
      </p>

      <div className="mt-8 space-y-6">
        {upcoming.map((evt) => (
          <Card key={evt.name} className="border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge>Upcoming</Badge>
                {evt.booth !== "TBD" && (
                  <Badge variant="secondary">Booth: {evt.booth}</Badge>
                )}
              </div>

              <h2 className="text-xl font-semibold">{evt.name}</h2>

              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {evt.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {evt.location}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {evt.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-10" />

      <div className="rounded-lg border bg-muted/30 p-6 text-sm">
        <h2 className="text-base font-semibold">Factory Visits</h2>
        <p className="mt-2 text-muted-foreground">
          Can't make it to a trade show? We welcome factory visits year-round. Our Guangzhou
          facility is 30 minutes from the Canton Fair grounds and 45 minutes from Guangzhou
          Baiyun International Airport (CAN). We can arrange hotel recommendations and airport
          pickup.
        </p>
        <p className="mt-3">
          <Link href="/contact" className="font-medium text-primary hover:underline">
            Schedule a factory visit →
          </Link>
        </p>
      </div>
    </div>
  );
}
