import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Microscope, Utensils, Baby, Shield, Globe, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Compliance & Testing",
  description:
    "REACH SVHC, California Proposition 65, FDA 21 CFR, EN71-3, and EU 1935/2004 food contact testing with SGS, Intertek, and Bureau Veritas as testing partners.",
};

const REGULATIONS = [
  {
    icon: Utensils,
    title: "Food Contact — EU 1935/2004 & 10/2011",
    target: "EU food, chocolate, and confectionery brands",
    content:
      "Materials and inks are compliant with EU 1935/2004 and Regulation 10/2011 on plastic materials and articles intended to come into contact with food. Heavy metal migration (OML/SML) test reports available on request.",
  },
  {
    icon: Utensils,
    title: "Food Contact — FDA 21 CFR",
    target: "US food brands and importers",
    content:
      "Paperboard, inks, and adhesives used in our production lines meet FDA 21 CFR Parts 175 (adhesives and coatings), 176 (paper and paperboard), and 177 (polymers) indirect food additive regulations.",
  },
  {
    icon: Baby,
    title: "Children's Products — EN71-3 & CPSIA",
    target: "Toy and children's product brands",
    content:
      "EN71-3 (migration of certain elements) and CPSIA / ASTM F963 compliant materials available. Heavy metal and phthalate test reports from SGS and Intertek — sample reports provided during quotation.",
  },
  {
    icon: Shield,
    title: "REACH SVHC (EU)",
    target: "All EU-bound products",
    content:
      "All paperboard, inks, adhesives, and coatings are sourced from REACH-registered suppliers. SVHC test reports based on the latest Candidate List (updated semi-annually) are available for any project. SGS and Intertek are our primary testing partners.",
  },
  {
    icon: Globe,
    title: "CA Proposition 65 (US)",
    target: "All US-bound products, especially California",
    content:
      "Prop 65-compliant material declarations covering lead, cadmium, phthalates, and BPA. Warning label consultation available for product categories requiring Clear and Reasonable Warnings.",
  },
];

const LABS = [
  { name: "SGS", coverage: "Global — strongest EU/US recognition" },
  { name: "Intertek", coverage: "US retail channel specialization" },
  { name: "Bureau Veritas (BV)", coverage: "EU fashion and luxury brand preference" },
  { name: "TÜV SÜD / TÜV Rheinland", coverage: "German brand preference" },
  { name: "Eurofins", coverage: "Food contact specialization" },
];

export default function ProductTestingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Compliance", href: "/compliance" },
          { label: "Product Testing" },
        ]}
      />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">
        Product Compliance & Testing
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        We work with ISO 17025-accredited third-party laboratories to provide verifiable test
        reports for every major regulation your buyers require. Reports are available on
        request during the quotation stage.
      </p>

      {/* Regulations grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {REGULATIONS.map((reg) => (
          <Card key={reg.title} className="border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <reg.icon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold">{reg.title}</h2>
                  </div>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {reg.target}
                  </Badge>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reg.content}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-10" />

      {/* Testing labs */}
      <h2 className="text-2xl font-semibold tracking-tight">Third-Party Testing Partners</h2>
      <p className="mt-2 text-muted-foreground">
        All test reports are issued by ISO 17025-accredited laboratories. We maintain active
        relationships with the following labs.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LABS.map((lab) => (
          <Card key={lab.name}>
            <CardContent className="flex items-center gap-3 p-4">
              <Building2 className="h-6 w-6 shrink-0 text-primary/60" />
              <div>
                <h3 className="text-sm font-semibold">{lab.name}</h3>
                <p className="text-xs text-muted-foreground">{lab.coverage}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-8" />

      <div className="rounded-lg border bg-muted/30 p-6 text-sm leading-relaxed">
        <h3 className="text-base font-semibold">Request Test Reports</h3>
        <p className="mt-2 text-muted-foreground">
          Test reports are provided during the quotation stage and matched to your product
          category and target market. Contact our team with your product specifications and
          compliance requirements — we typically provide relevant sample reports within 24 hours.
        </p>
      </div>
    </div>
  );
}
