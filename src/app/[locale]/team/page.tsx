import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the leadership team behind Blf Packaging — 18+ years of packaging manufacturing expertise, design innovation, and global client service.",
};

const LEADERSHIP = [
  {
    name: "General Manager",
    title: "Founder & General Manager",
    bio: "18+ years in paper packaging manufacturing. Founded Blf Packaging in 2008 with a vision to bridge Chinese manufacturing quality with Western brand expectations. Oversees strategy, key accounts, and factory operations.",
  },
  {
    name: "Sales Director",
    title: "Sales Director — International Markets",
    bio: "12 years in B2B packaging sales across EU, US, and Middle East markets. Manages a multilingual sales team covering English, German, French, and Arabic. Based in Guangzhou with regular client visits to Europe and the US.",
  },
  {
    name: "Design Lead",
    title: "Head of Structural Design",
    bio: "10 years in packaging structural engineering. Leads a team of 8+ designers specializing in dieline creation, 3D rendering, and material optimization. Average 2-hour turnaround on design drafts after receiving complete specifications.",
  },
  {
    name: "Quality Manager",
    title: "Quality Assurance Manager",
    bio: "15 years in manufacturing quality control. ISO 9001 lead auditor certified. Manages the 3-stage QC system (IQC/IPQC/OQC), AQL 2.5 sampling protocols, and third-party audit coordination with SGS, Intertek, and Bureau Veritas.",
  },
  {
    name: "Production Director",
    title: "Production Director",
    bio: "Oversees 120+ production staff across 60+ automated machines. Responsible for production scheduling, capacity planning, and on-time delivery. 14 years in packaging manufacturing operations.",
  },
  {
    name: "Logistics Manager",
    title: "Logistics & Export Manager",
    bio: "Manages global shipping coordination across FOB, CIF, and DDP terms. Handles container loading, customs documentation, and freight forwarder relationships. 8 years in export logistics.",
  },
];

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Team" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Our Team</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Behind every box is a team of dedicated professionals committed to quality, precision,
        and your brand's success.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LEADERSHIP.map((person) => (
          <Card key={person.name} className="border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
            <AspectRatio ratio={1} className="bg-muted">
              <div className="flex h-full items-center justify-center">
                <Users className="h-16 w-16 text-primary/20" />
              </div>
            </AspectRatio>
            <CardContent className="p-5">
              <h2 className="text-base font-semibold">{person.name}</h2>
              <p className="text-sm text-primary">{person.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {person.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-10" />

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Design Team</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            8+ packaging designers with expertise in ArtiosCAD, AutoCAD, Adobe Creative Suite,
            and 3D rendering tools. The team handles structural design, dieline creation, 3D
            mockups, and print-ready artwork preparation. Average response time: 2 hours for
            design drafts after receiving complete specifications.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Quality Team</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Dedicated IQC, IPQC, and OQC inspectors at each production stage. AQL 2.5 sampling
            with Critical, Major, and Minor defect classification. Pre-shipment photo
            confirmation and inspection reports provided for every order. Third-party inspection
            coordination with SGS, Intertek, and Bureau Veritas.
          </p>
        </div>
      </div>
    </div>
  );
}
