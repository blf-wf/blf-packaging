import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  ClipboardCheck,
  Search,
  FileSearch,
  Camera,
  ShieldCheck,
} from "lucide-react";

const QUALITY_ITEMS = [
  {
    icon: Award,
    title: "Certifications & Compliance",
    description:
      "ISO 9001, SGS, CE, ROHS, FSC — verifiable certificates with license codes available for download.",
  },
  {
    icon: ClipboardCheck,
    title: "3-Stage Quality Control",
    description:
      "IQC (Incoming), IPQC (In-Process), and OQC (Outgoing) — full coverage from raw material to finished goods.",
  },
  {
    icon: Search,
    title: "Inspection Standards",
    description:
      "AQL 2.5 sampling with Critical, Major, and Minor defect classification mutually agreed before production.",
  },
  {
    icon: FileSearch,
    title: "Traceability System",
    description:
      "Batch number tracking from raw material to inspection records and QC archives for full accountability.",
  },
  {
    icon: Camera,
    title: "Verification & Audit",
    description:
      "Pre-shipment photo confirmation, third-party inspection support, and 0.3% spare parts per order.",
  },
  {
    icon: ShieldCheck,
    title: "After-Sales Assurance",
    description:
      "Inspection reports, defect resolution process, and 1H response / 2H solution / 24H report target.",
  },
];

export function QualityCommitment() {
  return (
    <section className="bg-muted/50 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Quality Commitment
          </h2>
          <p className="mt-3 text-muted-foreground">
            Six dimensions of quality assurance — from certification to after-sales support.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUALITY_ITEMS.map((item) => (
            <Card key={item.title} className="border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
              <CardContent className="p-6 text-center">
                <span className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
