import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/sanity/queries";
import BlogHero from "@/components/blog/BlogHero";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import GetStarted from "@/components/-webComponents/GetStarted";

export const metadata: Metadata = {
  title: "Blog | CiyloTech — Insights on Software, Design & Digital Strategy",
  description:
    "Explore CiyloTech articles on web development, mobile apps, UI/UX design, and software architecture. Practical insights from our engineering team.",
  alternates: { canonical: "https://www.ciylo.com/blog/" },
  openGraph: {
    title: "CiyloTech Blog",
    description:
      "Insights on software, design, and digital strategy from the CiyloTech team.",
    url: "https://www.ciylo.com/blog/",
    type: "website",
    images: [
      {
        url: "https://www.ciylo.com/images/ciylo-logo.svg",
        width: 1200,
        height: 630,
        alt: "CiyloTech Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CiyloTech Blog",
    description: "Insights on software, design, and digital strategy.",
  },
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <>
      <BlogHero />
      <BlogCategoryFilter posts={posts} categories={categories} />
      <GetStarted />
    </>
  );
}
