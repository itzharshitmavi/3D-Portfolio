"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowUpRight, Clock, Search, X } from "lucide-react";
import { motion } from "motion/react";

type Post = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    author?: string;
    tags?: string[];
    category?: string;
    featured?: boolean;
  };
  wordCount: number;
};

function readTime(wordCount: number) {
  return Math.max(1, Math.ceil(wordCount / 200));
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogListClient({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.metadata.category || "Other"))).sort()];
  const term = query.trim().toLowerCase();
  const filtered = posts.filter(({ metadata }) =>
    (category === "All" || (metadata.category || "Other") === category) &&
    [metadata.title, metadata.summary, metadata.category, ...(metadata.tags || [])].join(" ").toLowerCase().includes(term)
  );
  const featured = category === "All" && !term ? filtered.find((post) => post.metadata.featured) || filtered[0] : undefined;
  const rest = filtered.filter((post) => post.slug !== featured?.slug);

  return (
    <div className="portfolio-blog min-h-screen font-sans">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(20,100%,70%)]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(20,100%,70%)]/3 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-24 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[60px] bg-[hsl(20,100%,70%)]" />
            <span className="text-[hsl(20,100%,70%)] text-sm font-medium tracking-[0.2em] uppercase font-sans">
              Blog
            </span>
          </div>
          <h1 className="font-display text-[clamp(1.65rem,5vw,3rem)] leading-[1.15] tracking-tight">
            Thoughts &<br />
            <span className="text-[hsl(20,100%,70%)]">Dispatches</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-lg leading-relaxed font-sans">
            Building LedgerX, documenting my GitHub projects, and sharing what I learn about full-stack engineering and AI.
          </p>
        </motion.div>

        <div className="mb-10 space-y-4">
          <div className="relative max-w-xl">
            <Search aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input aria-label="Search articles" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles, projects or technologies..." className="w-full rounded-xl border border-border bg-card/40 py-3 pl-11 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(20,100%,70%)]/50" />
            {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-muted-foreground"><X className="w-4 h-4" /></button>}
          </div>
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Article categories">
            {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm transition-colors ${category === item ? "border-[hsl(20,100%,70%)]/60 bg-[hsl(20,100%,70%)]/10 text-foreground" : "border-border/60 text-muted-foreground hover:text-foreground"}`}>{item}</button>)}
          </div>
          <p aria-live="polite" className="text-sm text-muted-foreground">{filtered.length} {filtered.length === 1 ? "article" : "articles"}</p>
        </div>

        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <Link href={`/blogs/${featured.slug}`} className="group block">
              <div className="relative border border-border/50 rounded-2xl p-5 sm:p-8 md:p-12 overflow-hidden transition-colors hover:border-[hsl(20,100%,70%)]/30 bg-card/30 backdrop-blur-sm">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[hsl(20,100%,70%)]/10 to-transparent rounded-bl-full" />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground font-sans">
                    <span className="text-[hsl(20,100%,70%)] font-medium tracking-[0.15em] uppercase text-xs">
                      Featured
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {formatDate(featured.metadata.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {readTime(featured.wordCount)} min read
                    </span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl leading-snug mb-4 group-hover:text-[hsl(20,100%,70%)] transition-colors duration-300">
                    {featured.metadata.title}
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8 font-sans">
                    {featured.metadata.summary}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex gap-2 flex-wrap">
                      {featured.metadata.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-[hsl(20,100%,70%)]/20 text-[hsl(20,100%,70%)] bg-[hsl(20,100%,70%)]/5 rounded-full px-3"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-[hsl(20,100%,70%)] transition-colors font-sans">
                      Read article
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Divider */}
        {rest.length > 0 && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16 origin-left"
          />
        )}

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + Math.min(index, 5) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/blogs/${post.slug}`} className="group block h-full">
                <div className="h-full min-w-0 flex flex-col border border-border/50 rounded-xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:border-[hsl(20,100%,70%)]/30 hover:bg-card/40 bg-card/20 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3 h-3" />
                      {formatDate(post.metadata.publishedAt)}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {readTime(post.wordCount)} min
                    </span>
                  </div>

                  <p className="text-[10px] uppercase tracking-widest text-[hsl(20,100%,70%)] mb-2">{post.metadata.category || "Article"}</p>
                  <h3 className="font-display text-lg md:text-xl leading-tight mb-3 group-hover:text-[hsl(20,100%,70%)] transition-colors duration-300">
                    {post.metadata.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-sans">
                    {post.metadata.summary}
                  </p>

                  <div className="flex items-center justify-between gap-3 mt-auto">
                    <div className="flex gap-1.5 flex-wrap">
                      {post.metadata.tags?.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-border/50 text-muted-foreground text-[10px] rounded-full px-2 py-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-[hsl(20,100%,70%)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-24"
          >
            <p className="text-muted-foreground text-lg font-sans">No matching articles. Try another search or category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
