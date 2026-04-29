import type { BlogPostCard } from "@/types/blog";
import BlogCard from "./BlogCard";

interface Props {
  posts: BlogPostCard[];
}

export default function BlogGrid({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20 text-[#6B7280] text-lg">
        No articles found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}
