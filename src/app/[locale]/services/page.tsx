import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { ServicesFlow } from "@/components/marketing/services-flow";
import { HowToOrder } from "@/components/marketing/how-to-order";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ClipboardList, Factory, Headphones } from "lucide-react";
import type { Metadata } from "next";

const SERVICE_PHASES = [
  {
    icon: ClipboardList,
    title: "Pre-Sales",
    points: [
      "End-to-end consultation from design concept to mass production",
      "Factory-direct pricing with no intermediary markup",
      "Free R&D support: structural design, 3D mockups, material testing",
      "Full documentation: inspection reports, catalogs, and specification sheets",
    ],
  },
  {
    icon: Factory,
    title: "In-Production",
    points: [
      "Live updates with production photos and video",
      "On-time delivery with confirmed schedules (6–15 working day range)",
      "Quality control with AQL 2.5 sampling at IQC, IPQC, and OQC stages",
      "Priority scheduling for urgent orders and dedicated lines for long-term partners",
    ],
  },
  {
    icon: Headphones,
    title: "After-Sales",
    points: [
      "Quality guarantee with replacement or refund per agreed terms",
      "Logistics cost optimization recommendations",
      "Total shipment visibility — container loading photos and tracking",
      "1-hour response / 2-hour solution / 24-hour report target during working hours (GMT+8)",
    ],
  },
];

export const metadata: Metadata = {
  title: "Services — From Concept to Delivery",
  description:
    "End-to-end custom packaging services: design, prototyping, production, QC, delivery, and after-sales support. Factory-direct with 18+ years experience.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Services" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Services</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        From initial design to final delivery — a complete service chain for your custom packaging needs.
      </p>

      {/* Service phases */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {SERVICE_PHASES.map((phase) => (
          <Card key={phase.title}>
            <CardContent className="p-6">
              <phase.icon className="mb-4 h-8 w-8 text-primary/60" />
              <h2 className="text-lg font-semibold">{phase.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {phase.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />
      <ServicesFlow />
      <Separator className="my-12" />
      <HowToOrder />
    </div>
  );
}
