"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Sparkles, MapPin, Snowflake, Utensils, Search, 
  ChevronRight, Compass, Flame, Filter, ExternalLink 
} from "lucide-react";

interface WinterPostItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  prefecture: string;
  region: string;
  themes: string[];
}

interface Props {
  posts: WinterPostItem[];
}

const REGIONS = [
  "すべて",
  "北海道",
  "東北",
  "関東",
  "甲信越・北陸",
  "東海",
  "近畿",
  "中国・四国",
  "九州・沖縄"
];

const THEMES = [
  "すべて",
  "カニ・海鮮",
  "とらふぐ・旬魚",
  "ブランド和牛",
  "ご当地冬鍋",
  "雪見露天・温泉",
  "イルミネーション・夜景",
  "初詣・パワースポット",
  "白銀の絶景・スノー"
];

export default function WinterSpecialHubClient({ posts }: Props) {
  const [selectedRegion, setSelectedRegion] = useState("すべて");
  const [selectedTheme, setSelectedTheme] = useState("すべて");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(30);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // エリアフィルター
      if (selectedRegion !== "すべて" && post.region !== selectedRegion) {
        return false;
      }
      // 目的・テーマフィルター
      if (selectedTheme !== "すべて" && !post.themes.includes(selectedTheme)) {
        return false;
      }
      // フリーワード検索
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const text = `${post.title} ${post.description} ${post.prefecture} ${post.slug}`.toLowerCase();
        if (!text.includes(query)) {
          return false;
        }
      }
      return true;
    });
  }, [posts, selectedRegion, selectedTheme, searchQuery]);

  // フィルター変更時に表示件数をリセット
  const displayedPosts = useMemo(() => {
    return filteredPosts.slice(0, displayCount);
  }, [filteredPosts, displayCount]);

  return (
    <div className="space-y-8">
      {/* 絞り込みコントロールパネル */}
      <div className="bg-white rounded-3xl border border-sky-200 shadow-md p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sky-100 pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-sky-700" />
            <h2 className="text-lg md:text-xl font-bold text-slate-900 font-journal-serif">
              冬の目的・エリア別クイック検索
            </h2>
          </div>
          <p className="text-xs text-slate-600">
            該当件数: <span className="text-sky-700 font-black text-sm">{filteredPosts.length}</span> 件 / 全{posts.length}件
          </p>
        </div>

        {/* 検索入力フォーム */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setDisplayCount(30);
            }}
            placeholder="宿名・温泉名・県名・キーワード（カニ、ふぐ、雪見風呂、初詣、イルミなど）で絞り込み..."
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
          />
        </div>

        {/* エリア・地方で探す */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-950">
            <MapPin className="w-3.5 h-3.5 text-sky-700" />
            <span>エリア・地域から探す:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((region) => {
              const count = region === "すべて" ? posts.length : posts.filter(p => p.region === region).length;
              const isActive = selectedRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => {
                    setSelectedRegion(region);
                    setDisplayCount(30);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isActive
                      ? "bg-sky-700 text-white shadow-sm"
                      : "bg-sky-50 text-sky-900 hover:bg-sky-100 border border-sky-200/60"
                  }`}
                >
                  <span>{region}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-sky-200/60 text-sky-800"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 目的・テーマで探す */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-950">
            <Snowflake className="w-3.5 h-3.5 text-sky-700" />
            <span>冬の旅の目的・テーマから探す:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {THEMES.map((theme) => {
              const count = theme === "すべて" ? posts.length : posts.filter(p => p.themes.includes(theme)).length;
              const isActive = selectedTheme === theme;
              return (
                <button
                  key={theme}
                  type="button"
                  onClick={() => {
                    setSelectedTheme(theme);
                    setDisplayCount(30);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isActive
                      ? "bg-indigo-700 text-white shadow-sm"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span>{theme}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 条件リセットボタン */}
        {(selectedRegion !== "すべて" || selectedTheme !== "すべて" || searchQuery) && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSelectedRegion("すべて");
                setSelectedTheme("すべて");
                setSearchQuery("");
                setDisplayCount(30);
              }}
              className="text-xs font-bold text-sky-700 hover:text-sky-900 underline flex items-center gap-1"
            >
              絞り込み条件をリセットする
            </button>
          </div>
        )}
      </div>

      {/* 記事一覧カードグリッド */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <p className="text-base font-bold text-slate-800">
            お探しの条件に一致する冬の特集が見つかりませんでした。
          </p>
          <p className="text-xs text-slate-500">
            検索キーワードを変更するか、エリア・目的のフィルターをリセットしてお試しください。
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedRegion("すべて");
              setSelectedTheme("すべて");
              setSearchQuery("");
              setDisplayCount(30);
            }}
            className="mt-4 px-6 py-2.5 bg-sky-700 text-white text-xs font-bold rounded-xl shadow hover:bg-sky-800 transition"
          >
            条件をすべてクリア
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* サムネイル画像 */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-sky-700 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                        {post.prefecture}
                      </span>
                      <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        {post.region}
                      </span>
                    </div>
                  </div>

                  {/* 記事情報 */}
                  <div className="p-5 space-y-3">
                    {/* テーマタグ一覧 */}
                    <div className="flex flex-wrap gap-1.5">
                      {post.themes.slice(0, 3).map((theme) => (
                        <span
                          key={theme}
                          className="text-[10px] font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/50"
                        >
                          #{theme}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-sm md:text-base font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-sky-700 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* ボタンアクション */}
                <div className="p-5 pt-0">
                  <Link
                    href={`/${post.slug}`}
                    className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-sky-700 to-indigo-700 hover:from-sky-800 hover:to-indigo-800 text-white text-xs font-black rounded-xl shadow transition"
                  >
                    冬の特集記事を詳しく読む 📖
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* もっと見るボタン */}
          {displayedPosts.length < filteredPosts.length && (
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => setDisplayCount((prev) => prev + 30)}
                className="px-8 py-3.5 bg-sky-100 hover:bg-sky-200 text-sky-900 text-xs md:text-sm font-black rounded-2xl border border-sky-300 transition shadow-sm"
              >
                もっと見る（残り {filteredPosts.length - displayedPosts.length} 件） ↓
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
