"use client";

import React, { useEffect, useState } from "react";

interface FloatingMobileCTAProps {
  affiliateUrl: string;
  hotelName: string;
  price?: string | number;
  isSpecialFeature?: boolean;
}

const FURUSATO_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

export default function FloatingMobileCTA({
  affiliateUrl,
  hotelName,
  price,
  isSpecialFeature = false
}: FloatingMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 200px以上スクロールされたら表示
      if (window.scrollY > 200) {
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
  const buttonText = isSpecialFeature ? "空室・宿泊プラン" : "空室・最安プラン";

  return (
    <aside
      aria-label="予約・空室案内バー"
      className="fixed bottom-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-md border-t border-amber-500/40 shadow-[0_-4px_24px_rgba(0,0,0,0.4)] px-3 py-2 md:hidden transition-transform duration-300"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* 左側：宿名＆安心情報 */}
        <div className="flex-1 min-w-0 pr-1">
          <p className="text-[11px] font-black text-white truncate leading-tight">
            {hotelName}
          </p>
          <div className="flex items-center gap-1.5 text-[10px] mt-0.5">
            {price && Number(price) > 0 ? (
              <span className="font-extrabold text-amber-400">
                目安 ¥{Number(price).toLocaleString()}〜
              </span>
            ) : (
              <span className="text-amber-300 font-bold">公式最安値プラン</span>
            )}
            <span className="text-stone-500">•</span>
            <span className="text-emerald-400 font-bold">ポイント還元</span>
          </div>
        </div>

        {/* 右側：ダブルCTAボタン（ふるさと納税最大30%クーポン＋予約プラン確認） */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <a
            href={FURUSATO_AFFILIATE_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="px-2.5 py-2 bg-gradient-to-r from-amber-400 to-amber-500 active:scale-95 text-stone-950 font-black text-[10px] rounded-xl shadow-md transition border border-amber-300 text-center leading-tight flex flex-col items-center justify-center"
          >
            <span className="text-[8px] text-amber-950 font-bold leading-none">ふるさと納税</span>
            <span className="leading-none mt-0.5 font-black">最大30%引</span>
          </a>

          <a
            href={buttonUrl}
            target={buttonUrl.startsWith("#") ? "_self" : "_blank"}
            rel={buttonUrl.startsWith("#") ? undefined : "sponsored noopener noreferrer"}
            className="px-3.5 py-2.5 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 active:scale-95 text-white font-black text-xs rounded-xl shadow-lg transition flex items-center gap-1 border border-white/20 whitespace-nowrap"
          >
            <span>{buttonText}</span>
            <span className="text-[12px]">≫</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
