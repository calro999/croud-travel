"use client";

import React, { useEffect, useState } from "react";

interface FloatingMobileCTAProps {
  affiliateUrl: string;
  hotelName: string;
  price?: string | number;
  isSpecialFeature?: boolean;
}

export default function FloatingMobileCTA({
  affiliateUrl,
  hotelName,
  price,
  isSpecialFeature = false
}: FloatingMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 250px以上スクロールされたら表示
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  // 特集記事用：比較表へジャンプ、または公式楽天トラベル特集へ
  const buttonUrl = isSpecialFeature ? (affiliateUrl || "#section-report") : affiliateUrl;
  const buttonText = isSpecialFeature ? "プラン・空室一覧" : "空室・最安プラン";

  return (
    <aside
      aria-label="予約・空室案内バー"
      className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-t border-amber-500/30 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] p-2.5 md:hidden transition-transform duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex-1 min-w-0 pr-1">
          <p className="text-[11px] font-bold text-white truncate">
            {hotelName}
          </p>
          <div className="flex items-center gap-1.5 text-[10px]">
            {price && Number(price) > 0 ? (
              <span className="font-extrabold text-amber-400">
                1名目安 ¥{Number(price).toLocaleString()}〜
              </span>
            ) : (
              <span className="text-amber-300 font-bold">楽天トラベル公式連携</span>
            )}
            <span className="text-stone-400">|</span>
            <span className="text-emerald-400 font-bold">ポイント還元対象</span>
          </div>
        </div>

        <a
          href={buttonUrl}
          target={buttonUrl.startsWith("#") ? "_self" : "_blank"}
          rel={buttonUrl.startsWith("#") ? undefined : "sponsored noopener noreferrer"}
          className="flex-shrink-0 px-4 py-2.5 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 active:scale-95 text-white font-black text-xs rounded-xl shadow-lg transition flex items-center gap-1.5 border border-white/20"
        >
          <span>{buttonText}</span>
          <span className="text-[13px]">≫</span>
        </a>
      </div>
    </aside>
  );
}
