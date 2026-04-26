import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { imgBlogMaterials, imgBlogCompliance, imgBlogTrends } from "@/lib/images";

const POSTS = [
  {
    slug: "how-to-choose-rigid-box-material",
    title: "How to Choose the Right Rigid Box Material for Your Brand",
    excerpt:
      "A practical guide to selecting paperboard grades, GSM ranges, and finishing options for rigid gift boxes — balancing cost, durability, and brand perception.",
    category: "Materials",
    date: "2026-03-15",
    image: imgBlogMaterials,
  },
  {
    slug: "ppwr-compliance-packaging-guide",
    title: "EU PPWR Compliance for Packaging: What Brands Need to Know in 2026",
    excerpt:
      "The Packaging and Packaging Waste Regulation is reshaping packaging requirements across Europe. Here's what food, beauty, and luxury brands should prepare for.",
    category: "Compliance",
    date: "2026-02-28",
    image: imgBlogCompliance,
  },
  {
    slug: "packaging-trends-2026",
    title: "Custom Packaging Trends for 2026: Sustainability Meets Unboxing Design",
    excerpt:
      "From PVC-free inserts to digital foil stamping, the key trends driving custom packaging decisions this year — and how to apply them to your brand.",
    category: "Industry",
    date: "2026-01-20",
    image: imgBlogTrends,
  },
];

export const metadata: Metadata = {
  title: "Blog — Packaging Insights & Guides",
  description:
    "Expert insights on custom packaging design, materials, compliance, and industry trends for brand owners and procurement professionals.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumb items={[{ label: "Blog" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted-foreground">
        Packaging insights, guides, and industry updates for brand owners and procurement teams.
      </p>

      <div className="mt-8 space-y-6">
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
              <CardContent className="flex gap-5 p-5">
                <AspectRatio
                  ratio={1}
                  className="hidden w-24 shrink-0 overflow-hidden rounded-md bg-muted sm:block"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </AspectRatio>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-semibold group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {POSTS.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          Blog posts coming soon. Subscribe to stay updated.
        </p>
      )}
    </div>
  );
}
