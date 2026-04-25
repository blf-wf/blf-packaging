import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, HardHat, Heart, Gavel } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Compliance & Ethical Sourcing",
  description:
    "Sedex membership, SMETA 4-Pillar audit preparation, and labor practices aligned with amfori BSCI Code of Conduct. Supporting global brand vendor approval.",
};

const PILLARS = [
  {
    icon: Clock,
    title: "Labor Practices",
    items: [
      "Compliance with local labor laws on working hours and overtime",
      "Minimum wage adherence with transparent payroll records",
      "Strict no-child-labor and no-forced-labor policy",
      "Freedom of association respected per local regulations",
    ],
  },
  {
    icon: HardHat,
    title: "Health & Safety",
    items: [
      "Regular fire drills and emergency evacuation procedures",
      "PPE (personal protective equipment) provided to all production staff",
      "Machine guarding and safety interlocks on all automated equipment",
      "Annual occupational health checks for production workers",
    ],
  },
  {
    icon: Heart,
    title: "Environment",
    items: [
      "In-house waste paper collection and recycling program",
      "Water-based and soy-based inks to reduce VOC emissions",
      "Wastewater treatment compliance for printing processes",
      "Energy-efficient production scheduling",
    ],
  },
  {
    icon: Gavel,
    title: "Business Ethics",
    items: [
      "Anti-corruption and anti-bribery policy per FCPA and UK Bribery Act",
      "Conflict of interest disclosure for all management staff",
      "Whistleblower channel: ethics@blfpack.com",
      "No facilitation payments policy",
    ],
  },
];

export default function SocialAuditsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Compliance", href: "/compliance" },
          { label: "Social Audits" },
        ]}
      />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">
        Social Compliance & Ethical Sourcing
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Our internal labor, health and safety, environmental, and business ethics practices are
        aligned with amfori BSCI Code of Conduct. Third-party audit documentation is available to
        verified buyers under NDA.
      </p>

      {/* Sedex / SMETA status */}
      <Card className="mt-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Sedex & SMETA Audit</h2>
              <p className="text-sm text-muted-foreground">
                We are preparing for SMETA 4-Pillar Audit, targeting certification by Q4 2026.
              </p>
            </div>
            <Badge variant="secondary" className="ml-auto">
              In Progress
            </Badge>
          </div>

          <Separator className="my-5" />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">SMETA 4-Pillar Coverage</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Labor Standards</li>
                <li>Health &amp; Safety</li>
                <li>Environmental Performance</li>
                <li>Business Ethics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Audit Process</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Audit body: SGS / Intertek / Bureau Veritas</li>
                <li>SAQ Self-Assessment completed</li>
                <li>CAP (Corrective Action Plan) tracking in place</li>
                <li>NDA-protected report available to verified buyers</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Four pillars */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {PILLARS.map((pillar) => (
          <Card key={pillar.title} className="border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
            <CardContent className="p-6">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <pillar.icon className="h-5 w-5 text-primary" />
              </span>
              <h2 className="text-lg font-semibold">{pillar.title}</h2>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-8" />

      <div className="rounded-lg border bg-muted/30 p-6 text-sm leading-relaxed">
        <h3 className="text-base font-semibold">Request Audit Documentation</h3>
        <p className="mt-2 text-muted-foreground">
          Full SMETA audit reports and internal policy documents are available to verified buyers
          under NDA. Audit reports contain factory-sensitive information and are not publicly
          downloadable. Contact us with your company details to request access.
        </p>
      </div>
    </div>
  );
}
