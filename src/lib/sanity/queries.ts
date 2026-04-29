import { groq } from "next-sanity";
import { sanityClient } from "./client";
import type { BlogPost, BlogPostCard, Category } from "@/types/blog";

const authorFragment = groq`
  "author": author->{
    _id, name, slug, image, bio, role, linkedin
  }
`;

const categoriesFragment = groq`
  "categories": categories[]->{
    _id, title, slug, description
  }
`;

export const ALL_POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {
    _id, title, slug, excerpt, mainImage, publishedAt, featured,
    ${authorFragment},
    ${categoriesFragment}
  }
`;

export const ALL_POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, excerpt, mainImage, publishedAt, body,
    seoTitle, seoDescription, featured,
    ${authorFragment},
    ${categoriesFragment}
  }
`;

export const RELATED_POSTS_QUERY = groq`
  *[
    _type == "post"
    && slug.current != $currentSlug
    && count((categories[]->slug.current)[@ in $categorySlugs]) > 0
  ] | order(publishedAt desc) [0...3] {
    _id, title, slug, excerpt, mainImage, publishedAt,
    ${authorFragment},
    ${categoriesFragment}
  }
`;

export const ALL_CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(title asc) { _id, title, slug }
`;

export async function getAllPosts(): Promise<BlogPostCard[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(ALL_POSTS_QUERY, {}, { next: { revalidate: 0 } });
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(ALL_POST_SLUGS_QUERY, {}, { next: { revalidate: 0 } });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch(POST_BY_SLUG_QUERY, { slug }, { next: { revalidate: 0 } });
}

export async function getRelatedPosts(
  currentSlug: string,
  categorySlugs: string[]
): Promise<BlogPostCard[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(
    RELATED_POSTS_QUERY,
    { currentSlug, categorySlugs },
    { next: { revalidate: 0 } }
  );
}

export async function getAllCategories(): Promise<Category[]> {
  if (!sanityClient) return [];
  return sanityClient.fetch(ALL_CATEGORIES_QUERY, {}, { next: { revalidate: 0 } });
}
