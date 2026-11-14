"use client";

import React, { useState } from "react";
import Link from "next/link";
import BookmarksModal from "./BookmarksModal";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-emerald-950/10 glass-header sticky top-0 z-50 py-3 md:py-4 px-4 sm:px-6 shadow-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* ロゴ & サイト名（PC時は左揃え、モバイル時は中央配置） */}
        <div className="flex-1 md:flex-initial flex justify-center md:justify-start">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-black tracking-tight font-journal-serif bg-gradient-to-r from-teal-800 via-emerald-900 to-amber-700 bg-clip-text text-transparent group-hover:opacity-90 transition">
              旅宿クラウド
            </span>
            <span className="text-[9px] font-extrabold tracking-widest text-teal-800 border border-teal-800/20 px-2 py-0.5 rounded-full bg-teal-50 shrink-0">
              TRAVEL
            </span>
          </Link>
        </div>

        {/* PC表示メニューバー（右上横並び） */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-4 text-xs font-bold text-teal-900/80 whitespace-nowrap">
          <Link href="/" className="hover:text-amber-700 transition">ホーム</Link>
          <span className="text-emerald-950/20">/</span>
          <Link href="/ranking/" className="text-amber-700 hover:text-amber-600 transition font-black">
            総合ランキング
          </Link>
          <span className="text-emerald-950/20">/</span>
          <Link href="/features/" className="text-teal-800 hover:text-teal-600 transition font-black">
            特集・まとめ
          </Link>
          <span className="text-emerald-950/20">/</span>
          <Link href="/posts/winter-newyear-countdown-anaba-onsen-hotels-guide/" className="text-rose-700 hover:text-rose-600 transition font-black">
            年末年始・冬旅
          </Link>
          <span className="text-emerald-950/20">/</span>
          <Link href="/posts/furusato-tax-yearend-rush-rakuten-travel-coupon-guide/" className="text-amber-800 hover:text-amber-600 transition font-black">
            ふるさと納税
          </Link>
          <span className="text-emerald-950/20">/</span>
          <Link href="/posts/national-arena-dome-oshikatsu-live-hotels-guide/" className="text-pink-700 hover:text-pink-600 transition font-black">
            推し活遠征
          </Link>
          <span className="text-emerald-950/20">/</span>
          <Link href="/prefectures/" className="hover:text-amber-700 transition">
            47都道府県
          </Link>
          <span className="text-emerald-950/20">/</span>
          <Link href="/campaigns/" className="text-amber-700 hover:text-amber-600 transition font-black">
            お得キャンペーン
          </Link>
          <span className="text-emerald-950/20">/</span>
          <BookmarksModal />
          <span className="text-emerald-950/20">/</span>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F"
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="hover:text-teal-700 transition text-teal-900/60 font-medium"
          >
            楽天トラベル公式 ✈️
          </a>
        </nav>

        {/* モバイル表示時の右端：三点メニューボタン */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="p-2 rounded-xl border border-teal-900/15 bg-white/80 hover:bg-teal-50 text-teal-950 transition flex items-center justify-center shadow-2xs"
            aria-label="メニューを開く"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              {menuOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              ) : (
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイル表示時の下部バー：「特集・まとめ」「総合ランキング」 */}
      <div className="md:hidden mt-2.5 pt-2 border-t border-teal-900/10 flex items-center justify-around text-xs font-bold">
        <Link
          href="/features/"
          className="flex-1 text-center py-1.5 text-teal-900 bg-teal-50/70 border border-teal-800/15 rounded-xl mx-1 hover:bg-teal-100 transition flex items-center justify-center gap-1.5"
        >
          <span>特集・まとめ</span>
        </Link>
        <Link
          href="/ranking/"
          className="flex-1 text-center py-1.5 text-amber-900 bg-amber-50/70 border border-amber-800/15 rounded-xl mx-1 hover:bg-amber-100 transition flex items-center justify-center gap-1.5"
        >
          <span>総合ランキング</span>
        </Link>
      </div>

      {/* モバイル展開ドロワーメニュー（三点リーダーから開く） */}
      {menuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-teal-900/15 shadow-xl space-y-3 text-xs font-bold text-teal-950 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-200">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-800 flex items-center gap-2"
            >
              <span>ホーム</span>
            </Link>
            <Link
              href="/prefectures/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-800 flex items-center gap-2"
            >
              <span>47都道府県</span>
            </Link>
            <Link
              href="/posts/winter-newyear-countdown-anaba-onsen-hotels-guide/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-rose-50 text-rose-900 hover:bg-rose-100 flex items-center gap-2 font-black"
            >
              <span>年末年始・年越し穴場宿</span>
            </Link>
            <Link
              href="/posts/winter-yukimi-rotenburo-train-access-onsen-hotels-guide/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-sky-50 text-sky-900 hover:bg-sky-100 flex items-center gap-2 font-black"
            >
              <span>電車で行く雪見露天</span>
            </Link>
            <Link
              href="/posts/national-arena-dome-oshikatsu-live-hotels-guide/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-pink-50 text-pink-900 hover:bg-pink-100 flex items-center gap-2 font-black"
            >
              <span>全国15会場 推し活遠征</span>
            </Link>
            <Link
              href="/campaigns/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-amber-50 text-amber-900 hover:bg-amber-100 flex items-center gap-2"
            >
              <span>お得キャンペーン</span>
            </Link>
            <Link
              href="/posts/furusato-tax-yearend-rush-rakuten-travel-coupon-guide/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-amber-50 text-amber-950 hover:bg-amber-100 flex items-center gap-2 font-black"
            >
              <span>ふるさと納税12/31駆け込み</span>
            </Link>
            <Link
              href="/furusato/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-rose-50 text-rose-900 hover:bg-rose-100 flex items-center gap-2"
            >
              <span>ふるさと納税一覧</span>
            </Link>
            <div className="p-2.5 rounded-xl bg-teal-50 flex items-center">
              <BookmarksModal />
            </div>
          </div>
          <div className="pt-1">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F"
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-teal-800 to-emerald-800 text-white font-bold shadow-xs hover:opacity-90 transition"
            >
              楽天トラベル公式で検索・予約 ➔
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
