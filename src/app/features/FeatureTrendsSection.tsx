"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FEATURE_TREND_TOPICS, TrendTopicItem } from "@/data/featureTrendsData";

const TREND_CATEGORIES = [
  { label: "すべて", key: "all", icon: "🔥" },
  { label: "温泉・名湯・露天", key: "onsen", icon: "♨️", match: ["onsen", "温泉", "露天", "源泉", "湯", "美肌", "秘湯"] },
  { label: "冬の美食・カニ・和牛", key: "gourmet", icon: "🦀", match: ["カニ", "蟹", "牛", "和牛", "肉", "牡蠣", "フグ", "魚", "会席", "鍋", "グルメ"] },
  { label: "初詣・神社仏閣・開運", key: "shrine", icon: "⛩️", match: ["初詣", "神社", "神宮", "寺", "開運", "パワースポット"] },
  { label: "雪景色・樹氷・冬アクティビティ", key: "snow", icon: "❄️", match: ["雪", "樹氷", "氷柱", "スキー", "スノー", "流氷", "冬景色"] },
  { label: "イルミネーション・夜景・花火", key: "illumination", icon: "✨", match: ["イルミネーション", "夜景", "ライトアップ", "花火", "クリスマス"] },
  { label: "歴史街道・伝統工芸・城下町", key: "heritage", icon: "🏯", match: ["城", "世界遺産", "街道", "伝統", "歴史", "焼", "町並み"] },
];

const INITIAL_DISPLAY_COUNT = 16;
const LOAD_MORE_COUNT = 16;

export default function FeatureTrendsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(INITIAL_DISPLAY_COUNT);

  const filteredTopics = useMemo(() => {
    return FEATURE_TREND_TOPICS.filter((item) => {
      // 1. Category Filter
      if (selectedCategory !== "all") {
        const cat = TREND_CATEGORIES.find((c) => c.key === selectedCategory);
        if (cat && cat.match) {
          const text = `${item.title} ${item.desc} ${item.badge} ${item.slug}`.toLowerCase();
          const matches = cat.match.some((keyword) => text.includes(keyword.toLowerCase()));
          if (!matches) return false;
        }
      }

      // 2. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const text = `${item.title} ${item.desc} ${item.badge}`.toLowerCase();
        if (!text.includes(q)) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const visibleTopics = filteredTopics.slice(0, displayCount);

  return (
    <section className="bg-gradient-to-br from-emerald-950/5 via-teal-900/5 to-slate-900/5 border border-emerald-950/10 rounded-3xl p-6 md:p-8 space-y-6">
      {/* 見出し */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-emerald-950/10 pb-4">
        <div>
          <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-widest block">
            SEARCH TREND TOPICS
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>🔥</span> <span>注目検索トレンド！テーマ別・厳選宿比較ランキング特集</span>
          </h2>
          <p className="text-xs text-emerald-950/70 mt-1">
            いま旅行者に最も読まれている季節の旬テーマ・目的別ランキングを厳選。気になる旅の目的からお選びください。
          </p>
        </div>
        <div className="text-xs font-bold text-teal-900/70 bg-white px-3 py-1.5 rounded-full border border-teal-900/10 self-start md:self-auto shrink-0 shadow-xs">
          全 <strong className="text-teal-800 font-black">{FEATURE_TREND_TOPICS.length}</strong> 特集
        </div>
      </div>

      {/* 目的別タブ切り替え */}
      <div className="flex flex-wrap gap-2">
        {TREND_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setDisplayCount(INITIAL_DISPLAY_COUNT);
              }}
              className={`px-3.5 py-2 rounded-2xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                isActive
                  ? "bg-teal-800 text-white shadow-md scale-102"
                  : "bg-white text-emerald-950/80 border border-emerald-950/10 hover:bg-teal-50 hover:text-teal-900"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* キーワード検索バー */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            placeholder="目的や地名で絞り込み（例: カニ、雪見露天、初詣、秩父）"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setDisplayCount(INITIAL_DISPLAY_COUNT);
            }}
            className="w-full text-xs bg-white border border-emerald-950/10 rounded-xl pl-9 pr-4 py-2.5 text-emerald-950 placeholder-emerald-950/40 focus:outline-none focus:border-teal-700 shadow-2xs transition"
          />
          <span className="absolute left-3 top-2.5 text-xs text-emerald-950/40">🔍</span>
        </div>
        <div className="text-xs text-emerald-950/60 font-medium self-start sm:self-auto">
          該当: <strong className="text-emerald-950 font-black">{filteredTopics.length}</strong> 件
        </div>
      </div>

      {/* 特集カードグリッド */}
      {visibleTopics.length === 0 ? (
        <div className="text-center py-12 bg-white/70 rounded-2xl border border-dashed border-emerald-950/10 space-y-2">
          <p className="text-xs font-bold text-emerald-950/50">
            条件に一致するトレンド特集が見つかりませんでした。
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-teal-800 underline cursor-pointer"
          >
            条件をリセットする
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleTopics.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="group bg-white p-5 rounded-2xl border border-emerald-950/10 hover:border-teal-700/40 hover:shadow-md transition space-y-2 block"
            >
              <span className="text-[9px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full inline-block">
                {item.badge}
              </span>
              <h3 className="text-sm font-bold text-emerald-950 group-hover:text-teal-800 transition line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-emerald-950/70 line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* もっと見るボタン */}
      {filteredTopics.length > displayCount && (
        <div className="text-center pt-2">
          <button
            onClick={() => setDisplayCount((prev) => prev + LOAD_MORE_COUNT)}
            className="px-8 py-3 bg-white hover:bg-teal-50 text-teal-900 font-extrabold text-xs rounded-2xl border border-teal-900/10 shadow-sm transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            さらにトレンド特集を表示する（残り {filteredTopics.length - displayCount} 件） ＋
          </button>
        </div>
      )}
    </section>
  );
}
