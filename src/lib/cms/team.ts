import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
}

const ALL_TEAM_QUERY = `*[_type == "teamMember"] | order(displayOrder asc) {
  name,
  title,
  bio,
  "imageUrl": image.asset->url
}`;

const MOCK_TEAM: TeamMember[] = [
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

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const data = await sanityFetch<TeamMember[]>(ALL_TEAM_QUERY);
  return data ?? MOCK_TEAM;
}
