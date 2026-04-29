import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  getPostBySlug,
  getAllPostSlugs,
  getRelatedPosts,
} from "@/lib/sanity/queries";
import { urlForImageString } from "@/lib/sanity/image";
import { formatDate } from "@/lib/utils/date";
import PortableTextRenderer from "@/components/blog/PortableTextRenderer";
import AuthorBio from "@/components/blog/AuthorBio";
import RelatedPosts from "@/components/blog/RelatedPosts";
import JsonLd from "@/components/blog/JsonLd";
import GetStarted from "@/components/-webComponents/GetStarted";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  // output: "export" requires at least one static param to recognise this route.
  // The placeholder triggers notFound() until real posts exist in Sanity.
  if (slugs.length === 0) return [{ slug: "_placeholder" }];
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  const title = post.seoTitle ?? `${post.title} | CiyloTech Blog`;
  const description = post.seoDescription ?? post.excerpt;
  const ogImageUrl = post.mainImage
    ? urlForImageString(post.mainImage, 1200, 630)
    : "https://www.ciylo.com/images/ciylo-logo.svg";
  const canonicalUrl = `https://www.ciylo.com/blog/${slug}/`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const categorySlugs = post.categories?.map((c) => c.slug?.current).filter(Boolean) as string[] ?? [];
  const relatedPosts = await getRelatedPosts(slug, categorySlugs);

  const ogImageUrl = post.mainImage
    ? urlForImageString(post.mainImage, 1200, 630)
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    image: ogImageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: post.author.linkedin ?? undefined,
    },
    publisher: {
      "@type": "Organization",
      name: "CiyloTech",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ciylo.com/images/ciylo-logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.ciylo.com/blog/${slug}/`,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <div className="relative py-12 md:py-16">
        <div className="container mx-auto 2xl:px-0 md:px-16 px-6 flex flex-col gap-4 items-center text-center max-w-4xl">
          {post.categories?.length > 0 && (
            <span className="text-xs font-semibold text-[#00C9A7] uppercase tracking-wider">
              {post.categories.map((c) => c.title).join(" · ")}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-[#161519] leading-tight">
            {post.title}
          </h1>
          <p className="text-base md:text-lg text-[#6B7280] max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
            <span>{post.author.name}</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </div>
      </div>

      {/* Cover image */}
      {post.mainImage && (
        <div className="container mx-auto 2xl:px-0 md:px-16 px-6 mb-12">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <Image
              src={urlForImageString(post.mainImage, 1400, 787)}
              alt={post.mainImage.alt ?? post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <div className="container mx-auto 2xl:px-0 md:px-16 px-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <PortableTextRenderer value={post.body} />
        </div>
      </div>

      {/* Author bio */}
      <div className="container mx-auto 2xl:px-0 md:px-16 px-6 mb-16">
        <div className="max-w-3xl mx-auto">
          <AuthorBio author={post.author} />
        </div>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="container mx-auto 2xl:px-0 md:px-16 px-6 mb-16">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}

      <GetStarted />
    </>
  );
}
