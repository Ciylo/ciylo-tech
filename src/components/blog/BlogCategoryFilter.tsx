"use client";

import { useState } from "react";
import { Input, Tabs } from "antd";
import { Icon } from "@iconify/react";
import type { BlogPostCard, Category } from "@/types/blog";
import BlogGrid from "./BlogGrid";

interface Props {
  posts: BlogPostCard[];
  categories: Category[];
}

export default function BlogCategoryFilter({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" ||
      post.categories?.some((c) => c.slug?.current === activeCategory);
    const matchesSearch =
      search === "" ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const tabs = [
    { key: "all", label: "All" },
    ...categories
      .filter((c) => c.slug?.current)
      .map((c) => ({ key: c.slug.current, label: c.title })),
  ];

  return (
    <section className="2xl:py-16 md:py-16 2xl:px-0 md:px-16 px-6 py-12">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-4 justify-between mb-8">
          <div className="case-input">
            <Input
              size="large"
              className="shadow-none! text-[#161519]! text-[16px]! font-semibold! bg-transparent! placeholder:text-[#757575]! focus:outline-none! focus:ring-0! focus:border-none!"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              suffix={
                <Icon
                  icon="icons8:search"
                  className="text-[#757575]! text-lg!"
                />
              }
            />
          </div>
          <div className="case-tabs px-3">
            <Tabs activeKey={activeCategory} onChange={setActiveCategory}>
              {tabs.map((tab) => (
                <Tabs.TabPane tab={tab.label} key={tab.key} />
              ))}
            </Tabs>
          </div>
        </div>
        <BlogGrid posts={filteredPosts} />
      </div>
    </section>
  );
}
