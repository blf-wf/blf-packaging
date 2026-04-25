import { Breadcrumb } from "@/components/marketing/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supply Chain Resilience",
  description:
    "Transparent capacity planning, US tariff strategy, alternative manufacturing options, and logistics visibility to de-risk your packaging supply chain.",
};

const CAPACITY = [
  { metric: "Peak season capacity buffer", data: "20–30% additional capacity", detail: "Q3/Q4 seasonal surge absorption" },
  { metric: "Rush order capability", data: "Priority scheduling available", detail: "Dedicated slot for urgent orders with compressed lead times" },
  { metric: "Dedicated production lines", data: "Available for long-term partners", detail: "No cross-contamination between brands" },
  { metric: "Backup machinery", data: "Dual-machine redundancy for critical equipment", detail: "Single-point-of-failure elimination on key production steps" },
];

const PORTS = [
  { name: "Nansha (Guangzhou)", advantage: "Primary port — 1 hour from factory" },
  { name: "Yantian (Shenzhen)", advantage: "Largest deep-water port in South China" },
  { name: "Shekou (Shenzhen)", advantage: "Fast turnaround for LCL shipments" },
  { name: "Hong Kong", advantage: "Highest frequency of global sailings" },
];

export default function SupplyChainPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Supply Chain" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Supply Chain Resilience</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        In today's dynamic trade environment, supply chain resilience is as critical as product
        quality. We help global brand buyers de-risk their packaging sourcing through transparent
        capacity planning, tariff strategy, and alternative manufacturing options.
      </p>

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Capacity & Redundancy */}
          <AccordionItem value="capacity" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              Capacity &amp; Redundancy
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-3 text-sm text-muted-foreground">
                Our 12,000 m² facility is designed with surge capacity for seasonal peaks and
                business continuity measures to prevent single points of failure.
              </p>
              <div className="grid gap-3 pb-2 sm:grid-cols-2">
                {CAPACITY.map((c) => (
                  <Card key={c.metric}>
                    <CardContent className="p-4">
                      <h3 className="text-sm font-semibold">{c.metric}</h3>
                      <p className="mt-1 text-base font-bold text-primary">{c.data}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{c.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Tariff Strategy */}
          <AccordionItem value="tariff" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              US Tariff Strategy
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                For US-bound shipments, we offer transparent tariff treatment on all DDP
                quotations, with current Section 301 tariff rates clearly itemized. Our team
                works with your customs broker to optimize HS classification within legal bounds.
              </p>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <strong className="text-foreground">Option A:</strong> Client handles import
                  duties (EXW / FOB / CIF quotation)
                </li>
                <li>
                  <strong className="text-foreground">Option B:</strong> DDP quotation with tariff
                  listed as a separate line item — fully transparent
                </li>
                <li>
                  <strong className="text-foreground">Option C:</strong> Tariff sharing (e.g.
                  50/50) — available for long-term partners with committed volume
                </li>
                <li>
                  <strong className="text-foreground">Section 321 / De Minimis:</strong> For
                  qualifying shipments under $800, duty-free US entry can be arranged through
                  our DTC fulfillment partners
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Alternative Manufacturing */}
          <AccordionItem value="alternatives" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              Alternative Manufacturing Footprint
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                Currently all production is based at our Guangzhou facility. For clients
                requiring non-China origin, we are in the process of qualifying partner
                factories in Southeast Asia; expected availability Q2 2027.
              </p>
              <p className="mt-2">
                When activated, Vietnam-based production would involve a 4-week lead time
                extension and 10–15% cost adjustment, with full process transparency and
                on-site quality control by our team.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Logistics & Visibility */}
          <AccordionItem value="logistics" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              Logistics Visibility &amp; Risk Mitigation
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold">Shipping Options</h3>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {[
                      { method: "Sea freight (FCL/LCL)", lead: "25–35 days to EU, 15–25 days to US West Coast" },
                      { method: "Air freight", lead: "5–7 days worldwide" },
                      { method: "China-Europe Railway Express", lead: "18–22 days to EU hubs" },
                      { method: "Sea-rail intermodal", lead: "20–28 days, cost between sea and air" },
                    ].map((s) => (
                      <Card key={s.method}>
                        <CardContent className="p-3">
                          <p className="text-sm font-semibold">{s.method}</p>
                          <p className="text-xs text-muted-foreground">{s.lead}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Port Diversity</h3>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {PORTS.map((p) => (
                      <Card key={p.name}>
                        <CardContent className="flex items-center justify-between p-3">
                          <p className="text-sm font-semibold">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.advantage}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Additional Protections</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Marine Cargo Insurance per ICC (A/B/C) clauses — available on all shipments</li>
                    <li>Reinforced 5-layer corrugated export cartons with corner protection</li>
                    <li>Container loading photos and shipment tracking provided for all orders</li>
                    <li>Force majeure contingency plans for strikes, typhoons, and geopolitical disruptions</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Separator className="my-8" />

      <div className="rounded-lg border bg-muted/30 p-6 text-sm leading-relaxed text-muted-foreground">
        <strong className="text-foreground">Disclaimer:</strong> Shipping transit times are
        estimates based on normal conditions. Actual delivery dates may vary due to port
        congestion, weather, customs clearance, and other factors beyond our control. Specific
        shipping terms and schedules are confirmed in your proforma invoice or sales contract.
      </div>
    </div>
  );
}
