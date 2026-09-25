"use client";

import React from "react";

interface ArticleTableOfContentsProps {
  hasGallery?: boolean;
  hasFaq?: boolean;
  hasSpots?: boolean;
  isSpecialFeature?: boolean;
  wordCount?: number;
}

export default function ArticleTableOfContents({
  hasGallery = true,
  hasFaq = true,
  hasSpots = true,
  isSpecialFeature = false,
  wordCount = 1200,
}: ArticleTableOfContentsProps) {
  // 1分あたり約400文字想定
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 400));

  return (
    <div className="bg-emerald-50/40 border border-emerald-900/10 rounded-2xl p-5 md:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-950/10 pb-3">
        <span className="text-xs font-black text-emerald-950 flex items-center gap-1.5 font-journal-serif">
          <span>📋</span>
          <span>目次・記事ナビゲーション</span>
        </span>
        <span className="text-[11px] font-bold text-teal-800 bg-teal-100/70 px-2.5 py-0.5 rounded-full">
          ⏱️ 読了目安：約 {readingMinutes} 分
        </span>
      </div>

      <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-teal-950">
        {!isSpecialFeature && (
          <a
            href="#section-summary"
            className="flex items-center gap-2 p-2 rounded-xl hover:bg-teal-100/50 hover:text-teal-800 transition"
          >
            <span className="text-teal-700">1.</span>
            <span>基本情報・宿泊参考価格</span>
          </a>
        )}
        {!isSpecialFeature && (
          <a
            href="#section-features"
            className="flex items-center gap-2 p-2 rounded-xl hover:bg-teal-100/50 hover:text-teal-800 transition"
          >
            <span className="text-teal-700">2.</span>
            <span>宿のおすすめ・駐車場・温泉情報</span>
          </a>
        )}
        {hasSpots && (
          <a
            href="#section-spots"
            className="flex items-center gap-2 p-2 rounded-xl hover:bg-teal-100/50 hover:text-teal-800 transition"
          >
            <span className="text-teal-700">3.</span>
            <span>周辺の絶景観光名所ガイド</span>
          </a>
        )}
        {hasGallery && (
          <a
            href="#section-gallery"
            className="flex items-center gap-2 p-2 rounded-xl hover:bg-teal-100/50 hover:text-teal-800 transition"
          >
            <span className="text-teal-700">4.</span>
            <span>施設ギャラリー（客室・温泉）</span>
          </a>
        )}
        <a
          href="#section-report"
          className="flex items-center gap-2 p-2 rounded-xl hover:bg-teal-100/50 hover:text-teal-800 transition"
        >
          <span className="text-teal-700">5.</span>
          <span>旅ライターによる極上宿泊ルポ</span>
        </a>
        {!isSpecialFeature && (
          <a
            href="#section-booking"
            className="flex items-center gap-2 p-2 rounded-xl hover:bg-teal-100/50 hover:text-amber-700 transition"
          >
            <span className="text-amber-600">6.</span>
            <span>楽天トラベル公式プラン・空室確認</span>
          </a>
        )}
        {hasFaq && !isSpecialFeature && (
          <a
            href="#section-faq"
            className="flex items-center gap-2 p-2 rounded-xl hover:bg-teal-100/50 hover:text-teal-800 transition"
          >
            <span className="text-teal-700">7.</span>
            <span>よくある質問（FAQ）</span>
          </a>
        )}
      </nav>
    </div>
  );
}
