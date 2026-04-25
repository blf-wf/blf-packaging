import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { AboutFactory } from "@/components/marketing/about-factory";
import { TrustPillars } from "@/components/marketing/trust-pillars";
import { QualityCommitment } from "@/components/marketing/quality-commitment";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Blf Packaging",
  description:
    "Guangzhou Blf Packing Co., Ltd. — 18+ years in custom paper and gift packaging manufacturing. Factory-direct OEM/ODM with ISO 9001, SGS, FSC certifications.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "About" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">About Us</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Since 2008, we&apos;ve been a trusted partner for global brands seeking premium custom paper packaging.
      </p>
      <AboutFactory />
      <TrustPillars />
      <QualityCommitment />
    </div>
  );
}
