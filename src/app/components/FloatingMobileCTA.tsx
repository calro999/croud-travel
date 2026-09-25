"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface FloatingMobileCTAProps {
  affiliateUrl: string;
  hotelName: string;
  price?: string | number;
}

export default function FloatingMobileCTA({ affiliateUrl, hotelName, price }: FloatingMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 300px以上スクロールされたら表示
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2.5 md:hidden transition-transform duration-300 animate-in slide-in-from-bottom">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <div className="flex-1 min-w-0 pr-1">
          <p className="text-[11px] font-bold text-slate-900 truncate">
            {hotelName}
          </p>
          <div className="flex items-center gap-1.5 text-[10px]">
            {price ? (
              <span className="font-extrabold text-amber-700">
                ¥{Number(price).toLocaleString()}〜
              </span>
            ) : (
              <span className="text-emerald-700 font-bold">楽天トラベル公式</span>
            )}
            <Link
              href="/campaigns"
              className="text-teal-700 underline font-bold"
            >
              クーポン配布中
            </Link>
          </div>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-4 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-1"
        >
          <span>空室・料金</span>
          <span>✈️</span>
        </a>
      </div>
    </div>
  );
}
