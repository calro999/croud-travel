"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, MapPin, Tag, Utensils, Search, 
  ChevronRight, Compass, Flame, Filter, ExternalLink 
} from "lucide-react";

interface AutumnPostItem {
  id: string;
  title: string;
  description: string;
  hotel_name: string;
  image: string;
  affiliate_url: string;
  prefecture: string;
  area: string;
  region: string;
  themes: string[];
}

interface Props {
  posts: AutumnPostItem[];
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
  "松茸・栗・フルーツ",
  "カニ・秋鮭・海鮮",
  "ブランド和牛・肉料理",
  "名湯露天・温泉宿",
  "絶景紅葉・庭園",
  "新米・地酒・美食会席"
];

export default function AutumnSpecialHubClient({ posts }: Props) {
  const [selectedRegion, setSelectedRegion] = useState("すべて");
  const [selectedTheme, setSelectedTheme] = useState("すべて");
  const [searchQuery, setSearchQuery] = useState("");

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
        const text = `${post.title} ${post.description} ${post.hotel_name} ${post.prefecture} ${post.area}`.toLowerCase();
        if (!text.includes(query)) {
          return false;
        }
      }
      return true;
    });
  }, [posts, selectedRegion, selectedTheme, searchQuery]);

  return (
    <div className="space-y-8">
      {/* 絞り込みコントロールパネル */}
      <div className="bg-white rounded-3xl border border-amber-200 shadow-md p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-100 pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-amber-700" />
            <h2 className="text-lg md:text-xl font-bold text-stone-900 font-journal-serif">
              秋の味覚・エリア別クイック検索
            </h2>
          </div>
          <p className="text-xs text-stone-600">
            該当件数: <span className="text-amber-700 font-black text-sm">{filteredPosts.length}</span> 件 / 全{posts.length}件
          </p>
        </div>

        {/* 検索入力フォーム */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="宿名・温泉名・県名・食材名（松茸、栗、カニ、和牛、伊勢海老など）で絞り込み..."
            className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl text-xs md:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition"
          />
        </div>

        {/* エリア・地方で探す */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
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
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isActive
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200/60"
                  }`}
                >
                  <span>{region}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-amber-200/50 text-amber-800"
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
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>秋の味覚・旅の目的から探す:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {THEMES.map((theme) => {
              const count = theme === "すべて" ? posts.length : posts.filter(p => p.themes.includes(theme)).length;
              const isActive = selectedTheme === theme;
              return (
                <button
                  key={theme}
                  type="button"
                  onClick={() => setSelectedTheme(theme)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isActive
                      ? "bg-amber-700 text-white shadow-sm"
                      : "bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200"
                  }`}
                >
                  <span>{theme}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-stone-200 text-stone-600"
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
              }}
              className="text-xs font-bold text-amber-700 hover:text-amber-900 underline flex items-center gap-1"
            >
              絞り込み条件をリセットする
            </button>
          </div>
        )}
      </div>

      {/* 記事一覧カードグリッド */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 space-y-3">
          <p className="text-base font-bold text-stone-800">
            お探しの条件に一致する秋の味覚特集が見つかりませんでした。
          </p>
          <p className="text-xs text-stone-500">
            検索キーワードを変更するか、エリア・目的のフィルターをリセットしてお試しください。
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedRegion("すべて");
              setSelectedTheme("すべて");
              setSearchQuery("");
            }}
            className="mt-4 px-6 py-2.5 bg-amber-600 text-white text-xs font-bold rounded-xl shadow hover:bg-amber-700 transition"
          >
            条件をすべてクリア
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* サムネイル画像 */}
                <div className="relative aspect-video overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="bg-amber-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                      {post.prefecture}
                    </span>
                    <span className="bg-stone-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
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
                        className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/50"
                      >
                        #{theme}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-sm md:text-base font-bold text-stone-900 line-clamp-2 leading-snug group-hover:text-amber-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>

                  {post.hotel_name && (
                    <div className="pt-2 border-t border-stone-100">
                      <p className="text-[11px] font-bold text-stone-700 flex items-center gap-1">
                        <span className="text-amber-700">🏨 おすすめ宿:</span>
                        <span className="text-stone-900 line-clamp-1">{post.hotel_name}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* ボタンアクション */}
              <div className="p-5 pt-0 space-y-2">
                <Link
                  href={`/posts/${post.id}`}
                  className="block w-full text-center px-4 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xs font-black rounded-xl shadow transition"
                >
                  秋の特集記事を詳しく読む 📖
                </Link>

                {post.affiliate_url && (
                  <a
                    href={post.affiliate_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-[11px] font-bold rounded-xl transition flex items-center justify-center gap-1"
                  >
                    <span>✈️ 楽天トラベルでプランを見る</span>
                    <ExternalLink className="w-3 h-3 text-amber-700" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
