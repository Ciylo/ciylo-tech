import type { BlogPostCard } from "@/types/blog";
import BlogCard from "./BlogCard";

export default function RelatedPosts({ posts }: { posts: BlogPostCard[] }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#00C9A7] mb-8">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
