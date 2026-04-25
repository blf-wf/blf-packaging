import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Package, Clock, MousePointerClick } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Samples",
  description:
    "Request physical packaging samples, material swatches, and finish guides. Evaluate quality firsthand before placing an order.",
};

const SAMPLE_TYPES = [
  {
    icon: Package,
    title: "Stock Samples",
    description:
      "Pre-made samples from our existing product catalog. Best for evaluating build quality, paper weight, and finishing standards.",
    timeline: "2–3 working days to dispatch",
    cost: "Free (client covers shipping)",
  },
  {
    icon: MousePointerClick,
    title: "Custom Samples",
    description:
      "Samples produced to your exact specifications — structure, dimensions, printing, and finishing. Requires approved dieline and artwork.",
    timeline: "3–7 working days after dieline and artwork approval",
    cost: "Sample fee credited toward your first production order",
  },
  {
    icon: Clock,
    title: "3D Renderings",
    description:
      "Photorealistic digital mockups showing your box from multiple angles. Ideal for stakeholder presentations before committing to physical samples.",
    timeline: "2–4 hours during working hours (GMT+8)",
    cost: "Free",
  },
];

export default function SamplesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Request Samples" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Request Samples</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Evaluate our packaging quality firsthand. Choose from stock samples, custom production
        samples, or digital 3D renderings.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {SAMPLE_TYPES.map((st) => (
          <Card key={st.title} className="border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
            <CardContent className="p-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <st.icon className="h-6 w-6 text-primary" />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{st.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{st.description}</p>
              <Separator className="my-4" />
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Timeline:</strong> {st.timeline}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                <strong className="text-foreground">Cost:</strong> {st.cost}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-10" />

      <div className="rounded-lg border bg-muted/30 p-6 text-sm">
        <h2 className="text-base font-semibold">How to request samples</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Contact us
            </Link>{" "}
            with your requirements: box type, approximate dimensions, material preferences, and
            target market.
          </li>
          <li>
            For stock samples: we&apos;ll confirm available options and dispatch within 2–3
            working days.
          </li>
          <li>
            For custom samples: our design team creates a dieline and 3D rendering for your
            approval before production begins.
          </li>
          <li>
            Samples are shipped via DHL/FedEx (3–5 days worldwide). Tracking provided upon
            dispatch.
          </li>
        </ol>
        <p className="mt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Request samples now →
          </Link>
        </p>
      </div>
    </div>
  );
}
