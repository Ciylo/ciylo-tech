import type { PortableTextBlock } from "@portabletext/react";

export type SanityImageAsset = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
};

export type Author = {
  _id: string;
  name: string;
  slug: { current: string };
  image?: SanityImageAsset;
  bio?: PortableTextBlock[];
  role?: string;
  linkedin?: string;
};

export type Category = {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: SanityImageAsset;
  author: Author;
  categories: Category[];
  publishedAt: string;
  body: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  featured?: boolean;
};

export type BlogPostCard = Pick<
  BlogPost,
  | "_id"
  | "title"
  | "slug"
  | "excerpt"
  | "mainImage"
  | "author"
  | "categories"
  | "publishedAt"
  | "featured"
>;
