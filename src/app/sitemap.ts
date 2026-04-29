import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/sanity/queries";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPostSlugs();

  const blogPostEntries: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
    url: `https://www.ciylo.com/blog/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.ciylo.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://www.ciylo.com/blog/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://www.ciylo.com/case-study/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.ciylo.com/about/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.ciylo.com/contact/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...blogPostEntries,
  ];
}
