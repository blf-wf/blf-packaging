import { Card, CardContent } from "@/components/ui/card";
import {
  PencilRuler,
  PackageSearch,
  Factory,
  ClipboardCheck,
  Truck,
  Headphones,
} from "lucide-react";

const SERVICES = [
  {
    icon: PencilRuler,
    title: "Design",
    description:
      "Requirements clarification, material and structural consulting, dieline creation, and 3D rendering.",
  },
  {
    icon: PackageSearch,
    title: "Prototyping",
    description:
      "Quick-turn sampling with clear revision tracking. 8-hour fast sample target after dieline and artwork approval.",
  },
  {
    icon: Factory,
    title: "Production",
    description:
      "Scheduled production with real-time progress updates. Dedicated lines available for long-term partners.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    description:
      "Three-stage QC (IQC / IPQC / OQC) with AQL 2.5 sampling. Pre-shipment photo confirmation and third-party inspection support.",
  },
  {
    icon: Truck,
    title: "Packaging & Delivery",
    description:
      "Reinforced export cartons with corner protection. Palletizing and stretch-wrapping available. Coordinated freight forwarding.",
  },
  {
    icon: Headphones,
    title: "After-Sales",
    description:
      "1-hour response target during working hours (GMT+8). Inspection reports, issue resolution, and long-term support.",
  },
];

export function ServicesFlow() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            From Concept to Delivery
          </h2>
          <p className="mt-3 text-muted-foreground">
            An end-to-end service chain covering every stage of your packaging project.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <Card key={svc.title} className="border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
              <CardContent className="p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <svc.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="text-lg font-semibold">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {svc.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
