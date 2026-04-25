import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Microscope, FileCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Center",
  description:
    "Third-party certifications, social compliance audits, and product testing capabilities that support your vendor approval process — with verifiable reports available on request.",
};

const SECTIONS = [
  {
    href: "/why-choose-us",
    icon: FileCheck,
    title: "Quality & Product Certifications",
    description:
      "ISO 9001, SGS, CE, ROHS, FSC — our quality management system and product certifications with verifiable certificate numbers.",
  },
  {
    href: "/compliance/social-audits",
    icon: Shield,
    title: "Social Compliance & Ethical Sourcing",
    description:
      "Sedex membership, SMETA 4-Pillar audit readiness, and labor practices aligned with amfori BSCI Code of Conduct. Required for Fortune 500 and EU brand vendor approval.",
  },
  {
    href: "/compliance/product-testing",
    icon: Microscope,
    title: "Product Compliance & Testing",
    description:
      "REACH SVHC, California Proposition 65, FDA 21 CFR, EN71-3, and EU 1935/2004 food contact testing — with SGS, Intertek, and Bureau Veritas as testing partners.",
  },
];

export default function CompliancePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Compliance" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Compliance Center</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        We partner with global brands that require rigorous supplier due diligence. Below are the
        third-party audits, certifications, and test capabilities that support our buyer approval
        process — all with verifiable reports available on request.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {SECTIONS.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="h-full border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
              <CardContent className="p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <section.icon className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-base font-semibold">{section.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
