"use client";

import { useState } from "react";
import Link from "next/link";

export interface FeaturePost {
  id: string;
  title: string;
  image: string;
  date: string;
  categories: string[];
  description?: string;
  prefecture: string;
}

export default function FeaturesGrid({ initialPosts }: { initialPosts: FeaturePost[] }) {
  // Extract all unique categories from the posts
  const allTags = Array.from(new Set(initialPosts.flatMap(post => post.categories))).filter(tag => tag !== "特集・まとめ");
  const [selectedTag, setSelectedTag] = useState<string>("すべて");

  // Filter posts based on the selected tag
  const filteredPosts = selectedTag === "すべて"
    ? initialPosts
    : initialPosts.filter(post => post.categories.includes(selectedTag));

  return (
    <div className="space-y-10">
      {/* フィルタリングタグ */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setSelectedTag("すべて")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
            selectedTag === "すべて"
              ? "bg-teal-800 text-white shadow-md scale-105"
              : "bg-white text-teal-900/70 border border-teal-900/10 hover:bg-teal-50"
          }`}
        >
          すべて
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              selectedTag === tag
                ? "bg-teal-800 text-white shadow-md scale-105"
                : "bg-white text-teal-900/70 border border-teal-900/10 hover:bg-teal-50"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 記事グリッド */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 text-emerald-950/50 font-bold text-sm">
          該当する特集記事がありません。
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map(post => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-emerald-950/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-amber-600/90 backdrop-blur-sm text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                    ✨ 特集
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-teal-950 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                  {post.prefecture === "全国" ? "日本全国" : post.prefecture}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {post.categories.filter(c => c !== "特集・まとめ").map(c => (
                    <span key={c} className="text-[9px] font-extrabold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                      #{c}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-base md:text-lg text-emerald-950 font-journal-serif leading-snug group-hover:text-teal-700 transition-colors line-clamp-3">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-xs text-emerald-950/70 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                )}
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-emerald-950/5">
                  <span className="text-[10px] font-bold text-emerald-950/40">
                    {(() => {
                      const d = new Date(post.date);
                      return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
                    })()}
                  </span>
                  <span className="text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
                    記事を読む →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
