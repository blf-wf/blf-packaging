import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getApplicationBySlug, getAllApplicationSlugs } from "@/lib/cms";
import { applicationImages } from "@/lib/images";

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllApplicationSlugs();
  return slugs.map((slug) => ({ industry: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const app = await getApplicationBySlug(industry);
  if (!app) return { title: "Industry Not Found" };
  return { title: `${app.label} — Applications`, description: app.description };
}

export default async function ApplicationDetailPage({ params }: PageProps) {
  const { industry } = await params;
  const app = await getApplicationBySlug(industry);
  if (!app) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Applications", href: "/applications" },
          { label: app.label },
        ]}
      />

      <Link
        href="/applications"
        className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All Applications
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{app.label}</h1>
      <p className="mt-3 text-muted-foreground">{app.hero}</p>

      {applicationImages[industry] && (
        <AspectRatio ratio={21 / 9} className="mt-8 rounded-lg bg-muted overflow-hidden">
          <Image
            src={applicationImages[industry]}
            alt={app.label}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </AspectRatio>
      )}

      <div className="mt-8 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {app.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-semibold">{s.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>

        <aside className="space-y-6">
          <Card>
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold">Recommended Box Types</h3>
              <ul className="mt-3 space-y-1.5">
                {app.boxTypes.map((bt) => (
                  <li key={bt} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary/40" />
                    {bt}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold">Available Certifications</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {app.certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="text-xs">
                    <Shield className="mr-1 h-3 w-3" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/15">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold">Need {app.label} Packaging?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your product and target market — we&apos;ll recommend the optimal
                structure, materials, and finishes.
              </p>
              <Button size="sm" className="mt-3 gap-1" asChild>
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>

      <Separator className="my-10" />

      <div className="rounded-lg border bg-muted/30 p-6 text-sm text-muted-foreground">
        <strong className="text-foreground">Looking for something specific?</strong> Every project
        is different. Our design team provides free structural recommendations and 3D renderings
        tailored to your product dimensions, brand aesthetic, and target market requirements.
        <Link href="/contact" className="ml-1 font-medium text-primary hover:underline">
          Contact us →
        </Link>
      </div>
    </div>
  );
}
