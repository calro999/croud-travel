import React from "react";

interface SpecialCouponBannerProps {
  variant?: "inline" | "prominent" | "sidebar";
  className?: string;
}

const AFFILIATE_ID = "54d2a438.4bc4abc2.54d2a439.aa1be583";
const TARGET_URL_50 = "https://travel.rakuten.co.jp/camp/50luxday/top/";
const TARGET_URL_FURUSATO = "https://travel.rakuten.co.jp/special/furusato/";

export const RAKUTEN_50_AFFILIATE_URL = `https://hb.afl.rakuten.co.jp/hgc/${AFFILIATE_ID}/?pc=${encodeURIComponent(TARGET_URL_50)}`;
export const RAKUTEN_FURUSATO_AFFILIATE_URL = `https://hb.afl.rakuten.co.jp/hgc/${AFFILIATE_ID}/?pc=${encodeURIComponent(TARGET_URL_FURUSATO)}`;
// 互換性維持のためのエクスポート
export const SPECIAL_COUPON_AFFILIATE_URL = RAKUTEN_50_AFFILIATE_URL;

export default function SpecialCouponBanner({ variant = "prominent", className = "" }: SpecialCouponBannerProps) {
  if (variant === "sidebar") {
    return (
      <a
        href={RAKUTEN_50_AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`block group cursor-pointer w-[270px] rounded-2xl overflow-hidden border-2 border-amber-500 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 bg-gradient-to-b from-amber-500 to-amber-600 ${className}`}
      >
        <div className="bg-amber-600 text-white text-[10px] font-black text-center py-1 tracking-wider uppercase flex items-center justify-center gap-1">
          <span className="animate-pulse">🔥</span> 毎月5と0のつく日 最大20%OFF
        </div>
        <div className="aspect-[1762/860] w-full overflow-hidden bg-white">
          <img
            src="/images/rakuten_5and0_luxury.png"
            alt="楽天トラベル 5と0のつく日 高級宿・温泉宿セール 最大20%OFF"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-2.5 text-center bg-white">
          <span className="inline-block w-full py-1.5 px-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white text-xs font-black rounded-lg shadow group-hover:from-amber-600 group-hover:to-rose-600 transition">
            限定クーポンを獲得する ♨️
          </span>
        </div>
      </a>
    );
  }

  return (
    <aside
      aria-label="楽天トラベル 毎月5と0のつく日 高級宿・温泉宿セール"
      className={`relative overflow-hidden rounded-3xl border-2 border-amber-400 bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-amber-500/15 p-4 sm:p-6 shadow-lg shadow-amber-500/10 ${className}`}
    >
      {/* 上部ヘッダーバッジ */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-rose-600 to-amber-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-sm flex items-center gap-1 tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-300 animate-ping" />
            毎月5・10・15・20・25・30日開催
          </span>
          <span className="text-amber-800 text-xs font-black tracking-tight">
            最高級宿・人気温泉宿が最大20%OFF！
          </span>
        </div>
        <span className="text-[10px] font-bold text-amber-900/70 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full">
          楽天トラベル公式企画
        </span>
      </div>

      {/* バナー画像 リンク */}
      <a
        href={RAKUTEN_50_AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative rounded-2xl overflow-hidden border border-amber-300/80 shadow-md hover:shadow-xl transition-all duration-300 bg-white"
      >
        <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden relative">
          <img
            src="/images/rakuten_5and0_luxury.png"
            alt="楽天トラベル 5と0のつく日 高級宿・温泉宿セール - 国内旅行・露天風呂付き客室が最大20%OFF！"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </a>

      {/* 下部アクションエリア */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-xs text-amber-950 font-bold text-center sm:text-left leading-tight">
          <p className="flex items-center gap-1 justify-center sm:justify-start text-amber-800 font-black">
            <span>🎁</span>
            <span>対象の高級宿・温泉宿で使える最大20%OFFクーポン配布中</span>
          </p>
          <p className="text-[11px] text-amber-900/70 font-medium mt-0.5">
            ※毎月5と0のつく日はエントリー＆クーポン獲得でお得に予約可能です。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          <a
            href={RAKUTEN_FURUSATO_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 px-4 py-3 bg-white border border-amber-400 hover:bg-amber-50 text-amber-900 font-black text-xs md:text-sm rounded-xl shadow-sm transition-all text-center"
          >
            実質2,000円！ふるさと納税
          </a>
          <a
            href={RAKUTEN_50_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 px-6 py-3 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 hover:from-amber-600 hover:to-rose-600 text-white font-black text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>5と0のつく日クーポンを獲得</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
