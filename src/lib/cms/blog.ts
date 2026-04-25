import { sanityFetch } from "@/sanity/lib/client";
import { POSTS, type BlogPost } from "@/data/blog";

const ALL_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  category,
  "date": publishedAt,
  author,
  body
}`;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const data = await sanityFetch<BlogPost[]>(ALL_POSTS_QUERY);
  return data ?? POSTS;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const data = await sanityFetch<BlogPost[]>(
    `*[_type == "blogPost" && slug.current == $slug] {
      "slug": slug.current,
      title,
      excerpt,
      category,
      "date": publishedAt,
      author,
      body
    }`,
    { slug }
  );
  if (data && data.length > 0) return data[0];
  return POSTS.find((p) => p.slug === slug);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const data = await sanityFetch<{ slug: string }[]>(
    `*[_type == "blogPost"].slug.current`
  );
  if (data && data.length > 0) return data.map((s) => (typeof s === "string" ? s : s.slug));
  return POSTS.map((p) => p.slug);
}
