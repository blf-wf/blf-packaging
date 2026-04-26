import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/cms";
import { imgBlogMaterials, imgBlogCompliance, imgBlogTrends } from "@/lib/images";

const categoryImages: Record<string, string> = {
  Materials: imgBlogMaterials,
  Compliance: imgBlogCompliance,
  Industry: imgBlogTrends,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  // Render body as markdown sections (split by ## headings)
  const sections = post.body.split(/(?=^## )/m);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Blog
      </Link>

      <article className="mt-4">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">{post.category}</Badge>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-muted-foreground">{post.excerpt}</p>

        {categoryImages[post.category] && (
          <AspectRatio ratio={21 / 9} className="mt-6 rounded-lg bg-muted overflow-hidden">
            <Image
              src={categoryImages[post.category]}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </AspectRatio>
        )}

        <Separator className="my-8" />

        <div className="prose prose-neutral max-w-none">
          {sections.map((section) => {
            const isHeading = section.startsWith("## ");
            if (isHeading) {
              const [head, ...body] = section.replace(/^## /, "").split("\n");
              return (
                <section key={head} className="mb-8">
                  <h2 className="mb-3 text-xl font-semibold">{head}</h2>
                  {body.map((line, i) => (
                    <p key={i} className="mb-3 text-sm leading-relaxed text-muted-foreground">
                      {renderLine(line)}
                    </p>
                  ))}
                </section>
              );
            }
            return (
              <div key={section.slice(0, 20)}>
                {section.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {renderLine(para)}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </article>

      <Separator className="my-10" />

      <div className="rounded-lg border bg-muted/30 p-6">
        <p className="text-sm font-semibold">Need packaging advice?</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Our design team offers free consultations tailored to your specific product category.
        </p>
        <Link
          href="/contact"
          className="mt-3 inline-flex text-sm font-medium text-primary hover:underline"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  );
}

/** Render bold text (**text**) and inline formatting in a line */
function renderLine(line: string): React.ReactNode {
  // Handle **bold** markup
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
