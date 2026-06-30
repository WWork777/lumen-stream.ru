import { notFound } from "next/navigation";
import { BlogArticlePage } from "../../../../components/BlogPages/BlogPages";
import { brand, SITE_URL } from "../../../data/seoCities";
import { blogPosts, getBlogPath, getBlogPostBySlug } from "../../../data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${SITE_URL}${getBlogPath(post)}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: `${SITE_URL}${getBlogPath(post)}`,
      siteName: brand.name,
      locale: "ru_RU",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return <BlogArticlePage post={post} />;
}
