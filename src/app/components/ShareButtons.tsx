"use client";

import React, { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
  hotelName?: string;
}

export default function ShareButtons({ title, url, hotelName }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const cleanTitle = (title || "").replace(/<[^>]+>/g, "").trim();
  const encodedUrl = encodeURIComponent(url);
  const shareText = hotelName
    ? `【${hotelName}】${cleanTitle} ｜ 旅宿クラウド`
    : `${cleanTitle} ｜ 旅宿クラウド`;
  const encodedText = encodeURIComponent(shareText);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  const handleInstagramClick = () => {
    handleCopy();
    alert("URLをコピーしました！インスタグラムのストーリーズやDMに貼り付けてシェアしてください。");
  };

  return (
    <div className="my-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 md:p-5 shadow-2xs space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
          <span>旅の計画・同行者へシェアする</span>
        </span>
        <span className="text-[10px] text-slate-500 font-medium">SNS・メッセージで共有</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
        {/* X (Twitter) */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-black hover:bg-neutral-800 text-white rounded-xl shadow-xs transition"
          aria-label="X (Twitter) でシェア"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>Xで共有</span>
        </a>

        {/* Threads (スレッズ) */}
        <a
          href={`https://www.threads.net/intent/post?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl shadow-xs transition"
          aria-label="Threads でシェア"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span>Threads</span>
        </a>

        {/* Instagram */}
        <button
          onClick={handleInstagramClick}
          type="button"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white rounded-xl shadow-xs transition"
          aria-label="Instagram でシェア"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>インスタ</span>
        </button>

        {/* はてなブックマーク */}
        <a
          href={`https://b.hatena.ne.jp/entry/${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 bg-[#00A4DE] hover:bg-[#0092c7] text-white rounded-xl shadow-xs transition"
          aria-label="はてなブックマークに追加"
        >
          <span className="font-black text-xs">B!</span>
          <span>はてブ</span>
        </a>

        {/* LINE */}
        <a
          href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-xl shadow-xs transition"
          aria-label="LINE で送る"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.019 9.587.39.085.922.26 1.057.595.12.301.079.771.039 1.077l-.168 1.012c-.052.311-.252 1.218 1.066.664 1.319-.553 7.124-4.249 9.72-7.272 1.545-1.745 2.267-3.567 2.267-5.663z" />
          </svg>
          <span>LINE</span>
        </a>

        {/* リンクをコピー */}
        <button
          onClick={handleCopy}
          type="button"
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border transition ${
            copied
              ? "bg-emerald-600 text-white border-emerald-600"
              : "bg-white hover:bg-slate-100 text-slate-700 border-slate-300"
          }`}
        >
          {copied ? (
            <>
              <span>✓</span>
              <span>コピー完了！</span>
            </>
          ) : (
            <>
              <span>🔗</span>
              <span>リンクをコピー</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
