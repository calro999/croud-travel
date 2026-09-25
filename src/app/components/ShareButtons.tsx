"use client";

import React, { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
  hotelName?: string;
}

export default function ShareButtons({ title, url, hotelName }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const shareText = hotelName 
    ? `【${hotelName}】日本全国・旅宿クラウドでチェック！`
    : title;
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

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 md:p-5 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
          <span>📢</span>
          <span>旅の計画・同行者へシェアする</span>
        </span>
        <span className="text-[10px] text-slate-500 font-medium">LINEやSNSで共有</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
        {/* X (Twitter) */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-black hover:bg-neutral-800 text-white rounded-xl shadow-sm transition"
          aria-label="X (Twitter) でシェア"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>ポスト</span>
        </a>

        {/* LINE */}
        <a
          href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-xl shadow-sm transition"
          aria-label="LINE で送る"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.019 9.587.39.085.922.26 1.057.595.12.301.079.771.039 1.077l-.168 1.012c-.052.311-.252 1.218 1.066.664 1.319-.553 7.124-4.249 9.72-7.272 1.545-1.745 2.267-3.567 2.267-5.663z" />
          </svg>
          <span>LINEで送る</span>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-xl shadow-sm transition"
          aria-label="Facebook でシェア"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span>シェア</span>
        </a>

        {/* はてなブックマーク */}
        <a
          href={`https://b.hatena.ne.jp/entry/${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 bg-[#00A4DE] hover:bg-[#0092c7] text-white rounded-xl shadow-sm transition"
          aria-label="はてなブックマークに追加"
        >
          <span className="font-black text-xs">B!</span>
          <span>はてブ</span>
        </a>

        {/* URLコピー */}
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
              <span>URLをコピー</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
