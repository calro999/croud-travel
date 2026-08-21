"use client";

import { useState, useMemo } from "react";
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

const THEME_CATEGORIES = [
  { label: "すべて", key: "all", icon: "✨" },
  { label: "温泉・露天風呂", key: "onsen", match: ["温泉", "露天風呂", "源泉", "美肌", "秘湯"] },
  { label: "高級宿・リゾート", key: "luxury", match: ["高級宿", "リゾート", "ヴィラ", "スイート", "ホテル厳選"] },
  { label: "グルメ・名物料理", key: "gourmet", match: ["グルメ", "会席", "バイキング", "伊勢海老", "カニ", "牛肉", "地魚"] },
  { label: "サウナ・プール・絶景", key: "spa", match: ["サウナ", "プール", "オーシャン", "絶景", "夜景", "富士山"] },
  { label: "家族・カップル・女子旅", key: "stay", match: ["ファミリー", "子連れ", "カップル", "女子旅", "記念日", "隠れ家"] },
];

const PREFECTURES = [
  "全国", "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県",
  "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県",
  "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

const PAGE_SIZE = 24;

export default function FeaturesGrid({ initialPosts }: { initialPosts: FeaturePost[] }) {
  const [selectedTheme, setSelectedTheme] = useState<string>("all");
  const [selectedPref, setSelectedPref] = useState<string>("全国");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(PAGE_SIZE);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // 1. Theme Match
      if (selectedTheme !== "all") {
        const theme = THEME_CATEGORIES.find((t) => t.key === selectedTheme);
        if (theme && theme.match) {
          const postText = `${post.title} ${post.categories.join(" ")} ${post.description || ""}`.toLowerCase();
          const matches = theme.match.some((m) => postText.includes(m.toLowerCase()));
          if (!matches) return false;
        }
      }

      // 2. Prefecture Match
      if (selectedPref !== "全国") {
        const cleanPref = selectedPref.replace(/(県|府|東京都)$/, "");
        const postPref = (post.prefecture || "").replace(/(県|府|東京都)$/, "");
        if (postPref !== cleanPref && !post.title.includes(cleanPref)) {
          return false;
        }
      }

      // 3. Search Query Match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const postText = `${post.title} ${post.prefecture} ${post.description || ""}`.toLowerCase();
        if (!postText.includes(q)) return false;
      }

      return true;
    });
  }, [initialPosts, selectedTheme, selectedPref, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, displayCount);

  return (
    <div className="space-y-8">
      {/* 絞り込みコントロールパネル */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-5 md:p-6 shadow-sm space-y-5">
        {/* テーマタブ（6つの主要カテゴリー） */}
        <div className="flex flex-wrap items-center gap-2">
          {THEME_CATEGORIES.map((theme) => {
            const isActive = selectedTheme === theme.key;
            return (
              <button
                key={theme.key}
                onClick={() => {
                  setSelectedTheme(theme.key);
                  setDisplayCount(PAGE_SIZE);
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-gradient-to-r from-teal-800 to-emerald-900 text-white shadow-md scale-102"
                    : "bg-emerald-50/40 text-emerald-950/80 border border-emerald-950/10 hover:bg-teal-50 hover:text-teal-800"
                }`}
              >
                <span>{theme.icon || "🏷️"}</span>
                <span>{theme.label}</span>
              </button>
            );
          })}
        </div>

        {/* 検索・都道府県セレクト */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3 border-t border-emerald-950/5">
          <div>
            <label className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-wider block mb-1">
              キーワード検索
            </label>
            <input
              type="text"
              placeholder="露天風呂、サウナ、伊勢海老、日光..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(PAGE_SIZE);
              }}
              className="w-full text-xs bg-emerald-50/30 border border-emerald-950/10 rounded-xl px-4 py-2.5 text-emerald-950 placeholder-emerald-950/30 focus:outline-none focus:border-teal-700 transition"
            />
          </div>

          <div>
            <label className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-wider block mb-1">
              エリア・都道府県
            </label>
            <select
              value={selectedPref}
              onChange={(e) => {
                setSelectedPref(e.target.value);
                setDisplayCount(PAGE_SIZE);
              }}
              className="w-full text-xs bg-emerald-50/30 border border-emerald-950/10 rounded-xl px-4 py-2.5 text-emerald-950 focus:outline-none focus:border-teal-700 transition cursor-pointer"
            >
              {PREFECTURES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end justify-between sm:col-span-2 md:col-span-1">
            <span className="text-xs font-bold text-teal-950/60 py-2.5">
              該当記事: <strong className="text-emerald-900 font-black text-sm">{filteredPosts.length}</strong> 件
            </span>
            {(selectedTheme !== "all" || selectedPref !== "全国" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedTheme("all");
                  setSelectedPref("全国");
                  setSearchQuery("");
                  setDisplayCount(PAGE_SIZE);
                }}
                className="text-xs font-bold text-rose-700 hover:text-rose-900 underline py-2.5 cursor-pointer"
              >
                条件をリセット
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 記事グリッド */}
      {visiblePosts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-emerald-950/10 space-y-2">
          <p className="text-emerald-950/50 font-bold text-sm">
            指定された条件に一致する特集記事が見つかりませんでした。
          </p>
          <button
            onClick={() => {
              setSelectedTheme("all");
              setSelectedPref("全国");
              setSearchQuery("");
            }}
            className="text-xs font-extrabold text-teal-800 underline"
          >
            すべての特集記事を見る
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visiblePosts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-emerald-950/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-emerald-50">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                    No Image
                  </div>
                )}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-amber-600/90 backdrop-blur-sm text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                    ✨ 特集10選
                  </span>
                </div>
                {post.prefecture && post.prefecture !== "全国" && (
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                    {post.prefecture}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-bold text-base md:text-lg text-emerald-950 font-journal-serif leading-snug group-hover:text-teal-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-xs text-emerald-950/70 line-clamp-2 leading-relaxed font-medium">
                      {post.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-emerald-950/5 text-xs">
                  <span className="text-[10px] font-bold text-emerald-950/40">
                    {post.date}
                  </span>
                  <span className="font-extrabold text-teal-800 group-hover:text-teal-600 flex items-center gap-1">
                    記事を読む <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* もっと見るボタン */}
      {filteredPosts.length > displayCount && (
        <div className="text-center pt-4">
          <button
            onClick={() => setDisplayCount((prev) => prev + PAGE_SIZE)}
            className="px-8 py-3.5 bg-white hover:bg-teal-50 text-teal-900 font-extrabold text-xs rounded-2xl border border-teal-900/10 shadow-sm transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            さらに特集記事を表示する（残り {filteredPosts.length - displayCount} 件） ＋
          </button>
        </div>
      )}
    </div>
  );
}

