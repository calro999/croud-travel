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

  const items: { href: string; label: string; highlight?: boolean }[] = [];

  if (isSpecialFeature) {
    items.push({ href: "#section-report", label: "📊 結論早見表（厳選宿の比較一覧）＆本編解説" });
    if (hasFaq) {
      items.push({ href: "#section-faq", label: "❓ よくある質問（FAQ・お得な予約術）" });
    }
    items.push({ href: "#section-related", label: "🧭 あわせて読みたい同エリア・関連人気宿" });
  } else {
    items.push({ href: "#section-summary", label: "📊 施設基本スペック・最安料金早見表" });
    if (hasSpots) {
      items.push({ href: "#section-spots", label: "🗺️ 周辺の絶景観光名所ガイド" });
    }
    if (hasGallery) {
      items.push({ href: "#section-gallery", label: "📷 施設ギャラリー（客室・お風呂・館内）" });
    }
    items.push({ href: "#section-report", label: "✍️ 旅ライターによる極上宿泊ルポ" });
    items.push({ href: "#section-booking", label: "✈️ 楽天トラベル公式プラン・空室確認", highlight: true });
    if (hasFaq) {
      items.push({ href: "#section-faq", label: "❓ よくある質問（FAQ）" });
    }
  }

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
        {items.map((item, idx) => (
          <a
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 p-2 rounded-xl hover:bg-teal-100/50 transition ${
              item.highlight ? "hover:text-amber-700 text-amber-900" : "hover:text-teal-800"
            }`}
          >
            <span className={item.highlight ? "text-amber-600 font-black" : "text-teal-700 font-black"}>
              {idx + 1}.
            </span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
