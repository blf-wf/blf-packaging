import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { TrustPillars } from "@/components/marketing/trust-pillars";
import { QualityCommitment } from "@/components/marketing/quality-commitment";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Factory-direct custom packaging with 18+ years experience, free 3D design support, ISO 9001 / FSC certified, and global logistics.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Why Choose Us" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Why Choose Blf Packaging</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Four pillars that set us apart, backed by six dimensions of quality assurance.
      </p>
      <TrustPillars />
      <Separator className="my-8" />
      <QualityCommitment />
    </div>
  );
}
