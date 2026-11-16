"use client";

import React, { useState } from "react";
import Link from "next/link";
import BookmarksModal from "./BookmarksModal";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-emerald-950/10 glass-header sticky top-0 z-50 shadow-xs">
      {/* メインヘッダー行（PC・スマホともに美しい1行均整レイアウト） */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        {/* ロゴ & ブランドバッジ */}
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-black tracking-tight font-journal-serif bg-gradient-to-r from-teal-800 via-emerald-900 to-amber-700 bg-clip-text text-transparent group-hover:opacity-90 transition">
              旅宿クラウド
            </span>
            <span className="text-[9px] font-extrabold tracking-widest text-teal-800 border border-teal-800/20 px-2 py-0.5 rounded-full bg-teal-50 shrink-0">
              TRAVEL
            </span>
          </Link>
        </div>

        {/* PC表示ナビゲーション（ゆとりある1列配置・ホバーアニメーション） */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs font-bold text-teal-950/80 whitespace-nowrap">
          <Link href="/" className="hover:text-teal-700 transition">ホーム</Link>
          <Link href="/ranking/" className="text-amber-800 hover:text-amber-600 transition font-black flex items-center gap-1">
            <span>🏆</span>
            <span>総合ランキング</span>
          </Link>
          <Link href="/features/" className="text-teal-900 hover:text-teal-700 transition font-black flex items-center gap-1">
            <span>✨</span>
            <span>特集・まとめ</span>
          </Link>
          <Link href="/posts/winter-newyear-countdown-anaba-onsen-hotels-guide/" className="text-rose-700 hover:text-rose-600 transition font-black flex items-center gap-1">
            <span>❄️</span>
            <span>冬旅・年末年始</span>
          </Link>
          <Link href="/posts/furusato-tax-yearend-rush-rakuten-travel-coupon-guide/" className="text-amber-900 hover:text-amber-700 transition font-black flex items-center gap-1">
            <span>🎁</span>
            <span>ふるさと納税</span>
          </Link>
          <Link href="/prefectures/" className="hover:text-teal-700 transition flex items-center gap-1">
            <span>🗾</span>
            <span>47都道府県</span>
          </Link>
          <Link href="/campaigns/" className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20 hover:bg-amber-500/20 transition font-black flex items-center gap-1">
            <span>🏷️</span>
            <span>セール一覧</span>
          </Link>
          <div className="pl-1 border-l border-emerald-950/10 flex items-center">
            <BookmarksModal />
          </div>
        </nav>

        {/* タブレット〜PC中画面（md〜lg）用メニュー */}
        <nav className="hidden md:flex lg:hidden items-center gap-3 text-xs font-bold text-teal-950/80 whitespace-nowrap">
          <Link href="/ranking/" className="text-amber-800 hover:text-amber-600 transition font-black">
            ランキング
          </Link>
          <Link href="/features/" className="text-teal-900 hover:text-teal-700 transition font-black">
            特集
          </Link>
          <Link href="/campaigns/" className="text-amber-700 hover:text-amber-600 transition font-black">
            セール
          </Link>
          <Link href="/prefectures/" className="hover:text-teal-700 transition">
            47都道府県
          </Link>
          <BookmarksModal />
        </nav>

        {/* モバイル表示時の右端：ブックマーク＆ハンバーガーメニュー */}
        <div className="md:hidden flex items-center gap-1.5 shrink-0">
          <div className="scale-90 origin-right">
            <BookmarksModal />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="p-2 rounded-xl border border-teal-900/15 bg-white/90 hover:bg-teal-50 text-teal-950 transition flex items-center justify-center shadow-2xs"
            aria-label="メニューを開閉する"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              {menuOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* モバイル用サブバー：横スクロール可能な洗練された1列ピルメニュー（改行なし・スッキリ綺麗） */}
      <div className="md:hidden border-t border-emerald-950/5 bg-emerald-50/40 px-3 py-1.5 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs font-bold whitespace-nowrap">
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/15 text-amber-900 border border-amber-500/25 shrink-0 active:scale-95 transition"
        >
          <span>🏆 ランキング</span>
        </Link>
        <Link
          href="/features/"
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-800/10 text-teal-900 border border-teal-800/15 shrink-0 active:scale-95 transition"
        >
          <span>✨ 特集一覧</span>
        </Link>
        <Link
          href="/posts/winter-newyear-countdown-anaba-onsen-hotels-guide/"
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/10 text-rose-900 border border-rose-500/20 shrink-0 active:scale-95 transition"
        >
          <span>❄️ 年末年始・冬旅</span>
        </Link>
        <Link
          href="/posts/furusato-tax-yearend-rush-rakuten-travel-coupon-guide/"
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-600/10 text-amber-900 border border-amber-600/20 shrink-0 active:scale-95 transition"
        >
          <span>🎁 ふるさと納税</span>
        </Link>
        <Link
          href="/posts/national-arena-dome-oshikatsu-live-hotels-guide/"
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-500/10 text-pink-900 border border-pink-500/20 shrink-0 active:scale-95 transition"
        >
          <span>🎤 推し活遠征</span>
        </Link>
        <Link
          href="/campaigns/"
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/10 text-orange-900 border border-orange-500/20 shrink-0 active:scale-95 transition"
        >
          <span>🏷️ セール情報</span>
        </Link>
        <Link
          href="/prefectures/"
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200 shrink-0 active:scale-95 transition"
        >
          <span>🗾 47都道府県</span>
        </Link>
      </div>

      {/* モバイル展開ドロワーメニュー（ハンバーガーから開く詳細ナビゲーション） */}
      {menuOpen && (
        <div className="md:hidden border-t border-emerald-950/10 bg-white/95 backdrop-blur-md px-4 py-4 shadow-xl space-y-3 text-xs font-bold text-teal-950 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-200">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-800 flex items-center gap-2"
            >
              <span>🏠 ホーム</span>
            </Link>
            <Link
              href="/ranking/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-amber-50 text-amber-900 hover:bg-amber-100 flex items-center gap-2 font-black"
            >
              <span>🏆 総合ランキング</span>
            </Link>
            <Link
              href="/features/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-teal-50 text-teal-900 hover:bg-teal-100 flex items-center gap-2 font-black"
            >
              <span>✨ 特集・まとめ</span>
            </Link>
            <Link
              href="/prefectures/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-800 flex items-center gap-2"
            >
              <span>🗾 47都道府県</span>
            </Link>
            <Link
              href="/posts/winter-newyear-countdown-anaba-onsen-hotels-guide/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-rose-50 text-rose-900 hover:bg-rose-100 flex items-center gap-2 font-black"
            >
              <span>❄️ 年末年始・穴場宿</span>
            </Link>
            <Link
              href="/posts/winter-yukimi-rotenburo-train-access-onsen-hotels-guide/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-sky-50 text-sky-900 hover:bg-sky-100 flex items-center gap-2 font-black"
            >
              <span>♨️ 電車で行く雪見露天</span>
            </Link>
            <Link
              href="/posts/national-arena-dome-oshikatsu-live-hotels-guide/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-pink-50 text-pink-900 hover:bg-pink-100 flex items-center gap-2 font-black"
            >
              <span>🎤 全国推し活遠征</span>
            </Link>
            <Link
              href="/campaigns/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-amber-50 text-amber-900 hover:bg-amber-100 flex items-center gap-2"
            >
              <span>🏷️ お得キャンペーン</span>
            </Link>
            <Link
              href="/posts/furusato-tax-yearend-rush-rakuten-travel-coupon-guide/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-amber-50 text-amber-950 hover:bg-amber-100 flex items-center gap-2 font-black"
            >
              <span>🎁 ふるさと納税攻略</span>
            </Link>
            <Link
              href="/furusato/"
              onClick={() => setMenuOpen(false)}
              className="p-2.5 rounded-xl bg-rose-50 text-rose-900 hover:bg-rose-100 flex items-center gap-2"
            >
              <span>🏨 ふるさと納税宿一覧</span>
            </Link>
          </div>
          <div className="pt-1">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fsearch.travel.rakuten.co.jp%2Fds%2Fundated%2Fsearch%3Ff_query%3D%25E4%25BA%25BA%25E6%25B0%2597%25E6%25B8%25A9%25E6%25B3%2589%25E5%25AE%25BF"
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
