import React from "react";
import { getBlogPosts } from "@/lib/mdx";
import BlogListClient from "./blog-list-client";

export const metadata = {
  title: "Blog | Harshit Mavi",
  description: "LedgerX startup notes, GitHub project case studies and software engineering articles.",
};

export default function BlogPage() {
  const posts = getBlogPosts()
    .sort((a, b) =>
      Number(Boolean(b.metadata.featured)) - Number(Boolean(a.metadata.featured)) ||
      b.metadata.publishedAt.localeCompare(a.metadata.publishedAt) ||
      a.slug.localeCompare(b.slug)
    )
    .map((post) => ({
      slug: post.slug,
      metadata: post.metadata,
      wordCount: post.content.trim().split(/\s+/).length,
    }));

  return <BlogListClient posts={posts} />;
}
