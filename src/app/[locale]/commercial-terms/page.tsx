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
  title: "Commercial Terms",
  description:
    "Transparent commercial terms: Incoterms, payment options, product liability insurance, NDA and IP protection, code of conduct, and modern slavery compliance.",
};

const INCOTERMS = [
  { code: "EXW", name: "Ex Works", note: "Client's own forwarder" },
  { code: "FCA / FOB", name: "Free Carrier / Free On Board", note: "Most common" },
  { code: "CIF / CIP", name: "Cost Insurance Freight / Carriage and Insurance Paid", note: "Includes insurance" },
  { code: "DAP", name: "Delivered at Place", note: "To client address, excluding customs clearance" },
  { code: "DDP", name: "Delivered Duty Paid", note: "Available by market; US DDP involves Section 301 tariff absorption — tariff treatment clarified in quotation" },
];

const PAYMENT_TERMS = [
  { type: "New / SME clients", first: "Deposit + balance before shipment (T/T)", repeat: "Deposit + balance before shipment" },
  { type: "Brand / large orders", first: "L/C at sight or deposit + balance", repeat: "Net 30 / Net 60 (subject to credit review)" },
  { type: "Fortune 500 / public companies", first: "L/C 90d / O/A or Net 60/90", repeat: "Net 60 / Net 90 / consignment" },
  { type: "Samples / small orders", first: "PayPal / Western Union", repeat: "PayPal / credit card via Stripe" },
];

export default function CommercialTermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Commercial Terms" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Commercial Terms</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Transparent commercial terms reduce friction in supplier onboarding. Below is an overview
        of our standard commercial framework. Customized terms for enterprise buyers (Net 30/60,
        volume-based pricing, consignment stock, etc.) are available upon credit review and order
        volume commitment.
      </p>

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Incoterms */}
          <AccordionItem value="incoterms" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              Incoterms 2020 Support
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 pb-2">
                {INCOTERMS.map((t) => (
                  <Card key={t.code}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <span className="text-sm font-semibold">{t.code}</span>
                        <span className="ml-2 text-sm text-muted-foreground">{t.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{t.note}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                DDU/DAT are deprecated under Incoterms 2020 and are not recommended.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Payment Terms */}
          <AccordionItem value="payment" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              Payment Terms
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-3 text-sm text-muted-foreground">
                Standard terms: deposit + balance before shipment (T/T). Extended terms (L/C,
                Net 30/60) available subject to credit review.
              </p>
              <div className="grid gap-3 pb-2">
                {PAYMENT_TERMS.map((p) => (
                  <Card key={p.type}>
                    <CardContent className="p-4">
                      <h3 className="text-sm font-semibold">{p.type}</h3>
                      <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-xs text-muted-foreground">First order</span>
                          <p>{p.first}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Repeat / long-term</span>
                          <p>{p.repeat}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Product Liability Insurance */}
          <AccordionItem value="insurance" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              Product Liability Insurance
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <p className="text-sm text-muted-foreground">
                Product liability insurance is available for export orders upon request. Coverage
                details can be shared during the quotation stage. A Certificate of Insurance (COI)
                can be provided with the client named as Additional Insured.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>Geographic coverage: Worldwide excluding sanctioned countries</li>
                <li>Annual renewal with continuous coverage</li>
                <li>COI available within 2 business days of request</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* NDA / IP Protection */}
          <AccordionItem value="nda" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              NDA &amp; IP Protection
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                All artwork, dielines, and design files provided by the client remain the
                client's property. We will not reproduce or resell any client-specific designs.
              </p>
              <ul className="mt-2 space-y-1.5">
                <li>A standard English Mutual NDA is available for download upon request.</li>
                <li>NDA execution is standard practice before sample dispatch.</li>
                <li>We obtain written consent before any sub-contracting of client designs.</li>
                <li>Design files are stored on access-controlled servers with client-specific permissions.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Code of Conduct */}
          <AccordionItem value="conduct" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              Code of Conduct &amp; Anti-Corruption
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                We maintain a zero-tolerance policy toward bribery and corruption, in line with
                the US Foreign Corrupt Practices Act (FCPA), the UK Bribery Act 2010, and
                applicable Chinese laws.
              </p>
              <ul className="mt-2 space-y-1.5">
                <li>Gifts and hospitality policy: max $100 USD per instance, subject to management approval.</li>
                <li>Conflict of interest disclosure required for all management staff.</li>
                <li>Third-party intermediary due diligence for all new channel partners.</li>
                <li>
                  Confidential whistleblower channel:{" "}
                  <span className="font-mono text-foreground">ethics@blfpack.com</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Modern Slavery */}
          <AccordionItem value="slavery" className="rounded-lg border px-4">
            <AccordionTrigger className="text-base font-semibold">
              Modern Slavery &amp; Forced Labor Compliance
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                We comply with the US Uyghur Forced Labor Prevention Act (UFLPA) and the EU
                Corporate Sustainability Due Diligence Directive (CSDDD).
              </p>
              <ul className="mt-2 space-y-1.5">
                <li>All raw materials are sourced from audited suppliers outside of restricted regions.</li>
                <li>Supply chain origin documentation available for US-bound shipments.</li>
                <li>Annual supplier due diligence reviews covering labor practices at all tiers.</li>
                <li>Internal forced labor awareness training for procurement and HR staff.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Separator className="my-8" />

      <div className="rounded-lg border bg-muted/30 p-6 text-sm leading-relaxed text-muted-foreground">
        <strong className="text-foreground">Disclaimer:</strong> The information on this page
        provides an overview of our standard commercial framework. Specific terms for individual
        orders are confirmed in the proforma invoice or sales contract. Nothing on this page
        constitutes a binding offer.
      </div>
    </div>
  );
}
