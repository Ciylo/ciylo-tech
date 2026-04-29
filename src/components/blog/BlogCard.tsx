import Image from "next/image";
import Link from "next/link";
import type { BlogPostCard } from "@/types/blog";
import { urlForImageString } from "@/lib/sanity/image";
import { formatDate } from "@/lib/utils/date";

interface Props {
  post: BlogPostCard;
}

export default function BlogCard({ post }: Props) {
  const imageUrl =
    post.mainImage ? urlForImageString(post.mainImage, 600, 360) : null;

  const authorAvatarUrl =
    post.author?.image ? urlForImageString(post.author.image, 40, 40) : null;

  return (
    <Link
      href={`/blog/${post.slug.current}/`}
      className="group flex flex-col bg-white border border-[#C0F6ED80] rounded-2xl overflow-hidden shadow-[0px_4px_60px_0px_#04060F0A] hover:shadow-[0px_8px_40px_0px_#04060F1A] transition-shadow duration-300"
    >
      {imageUrl && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt ?? post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col gap-3 p-6 flex-1">
        {post.categories?.length > 0 && (
          <span className="text-xs font-semibold text-[#00C9A7] uppercase tracking-wider">
            {post.categories[0].title}
          </span>
        )}
        <h2 className="text-lg font-bold text-[#161519] line-clamp-2 group-hover:text-[#00C9A7] transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 mt-2 pt-4 border-t border-[#F3F4F6]">
          {authorAvatarUrl && (
            <Image
              src={authorAvatarUrl}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full object-cover shrink-0"
            />
          )}
          <div>
            <p className="text-xs font-semibold text-[#374151]">
              {post.author?.name}
            </p>
            <p className="text-xs text-[#9CA3AF]">
              {formatDate(post.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
