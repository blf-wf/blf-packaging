import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Factory, Users, Wrench, Shield } from "lucide-react";
import { imgFactoryFloor } from "@/lib/images";

const STATS = [
  { icon: Factory, value: "12,000 m²", label: "Manufacturing Facility" },
  { icon: Users, value: "120+", label: "Production Staff" },
  { icon: Wrench, value: "60+", label: "Automated Machines" },
  { icon: Shield, value: "18+ Years", label: "Industry Experience" },
];

export function AboutFactory() {
  return (
    <section className="bg-muted/30 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AspectRatio ratio={4 / 3} className="rounded-lg bg-muted overflow-hidden">
            <Image
              src={imgFactoryFloor}
              alt="Blf packaging production line"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AspectRatio>
          <div>
            <Badge variant="secondary" className="mb-4">
              One-Stop Factory
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Guangzhou Blf Packing — Your Direct Packaging Partner
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Established in 2008, Guangzhou Blf Packing Co., Ltd. is a
              paper packaging manufacturer specializing in folding cartons,
              rigid gift boxes, and paper bags for brand clients, DTC brands,
              and influencer brands worldwide.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We offer OEM and ODM services with free structural and visual
              design support, 2-hour layout and 3D rendering response, and MOQ
              starting from 500 pcs for selected projects. ISO 9001, SGS, CE,
              ROHS, and FSC certified.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center rounded-lg border bg-card p-4 text-center"
                >
                  <stat.icon className="mb-2 h-7 w-7 text-primary" />
                  <span className="text-xl font-bold">{stat.value}</span>
                  <span className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
