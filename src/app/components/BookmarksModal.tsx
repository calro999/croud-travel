"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface SavedBookmark {
  id: string;
  hotelName: string;
  image?: string;
  prefecture?: string;
  area?: string;
  savedAt: string;
}

export default function BookmarksModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState<SavedBookmark[]>([]);

  const loadBookmarks = () => {
    try {
      const saved = localStorage.getItem("croud_travel_bookmarks");
      if (saved) {
        setBookmarks(JSON.parse(saved));
      } else {
        setBookmarks([]);
      }
    } catch (e) {
      console.error(e);
      setBookmarks([]);
    }
  };

  useEffect(() => {
    loadBookmarks();
  }, [isOpen]);

  const removeBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const next = bookmarks.filter((b) => b.id !== id);
      setBookmarks(next);
      localStorage.setItem("croud_travel_bookmarks", JSON.stringify(next));
    } catch (err) {
      console.error(err);
    }
  };

  const clearAll = () => {
    if (confirm("保存した宿をすべてクリアしますか？")) {
      setBookmarks([]);
      localStorage.removeItem("croud_travel_bookmarks");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="flex items-center gap-1 text-xs font-bold text-teal-900/80 hover:text-amber-700 transition relative"
        aria-label="お気に入り（保存した宿）一覧を見る"
      >
        <span>❤️ 保存した宿</span>
        {bookmarks.length > 0 && (
          <span className="bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full">
            {bookmarks.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            {/* モーダルヘッダー */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2">
                <span className="text-xl">❤️</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base font-journal-serif">
                    保存した宿・お気に入りリスト
                  </h3>
                  <p className="text-[10px] text-slate-500">
                    気になる宿をキープして旅のプラン作りにご活用ください
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-200/60 hover:bg-slate-300/60 flex items-center justify-center text-slate-600 font-bold transition"
                aria-label="閉じる"
              >
                ✕
              </button>
            </div>

            {/* モーダルボディ */}
            <div className="p-5 overflow-y-auto flex-1 space-y-3">
              {bookmarks.length === 0 ? (
                <div className="text-center py-10 space-y-3 text-slate-400">
                  <span className="text-4xl block">🏨</span>
                  <p className="text-xs font-medium">まだ保存された宿がありません。</p>
                  <p className="text-[11px] text-slate-400">
                    記事ページの「あとで見る」ボタンを押すと、ここに保存されます。
                  </p>
                </div>
              ) : (
                bookmarks.map((b) => (
                  <div
                    key={b.id}
                    className="flex items-center gap-3 p-3 rounded-2xl border border-slate-100 hover:border-teal-600/30 bg-white hover:bg-teal-50/30 transition shadow-sm group"
                  >
                    {b.image && (
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                        <img
                          src={b.image}
                          alt={b.hotelName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-teal-800">
                        {b.prefecture} {b.area && `• ${b.area}`}
                      </div>
                      <Link
                        href={`/posts/${b.id}`}
                        onClick={() => setIsOpen(false)}
                        className="text-xs font-bold text-slate-900 group-hover:text-teal-800 line-clamp-1 hover:underline"
                      >
                        {b.hotelName}
                      </Link>
                      <span className="text-[9px] text-slate-400 block mt-0.5">
                        保存日: {new Date(b.savedAt).toLocaleDateString("ja-JP")}
                      </span>
                    </div>
                    <button
                      onClick={(e) => removeBookmark(b.id, e)}
                      className="text-slate-300 hover:text-rose-500 p-2 text-xs transition"
                      title="削除"
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* モーダルフッター */}
            {bookmarks.length > 0 && (
              <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50 text-xs">
                <button
                  onClick={clearAll}
                  className="text-slate-500 hover:text-rose-600 font-medium"
                >
                  すべて削除
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-teal-800 hover:bg-teal-700 text-white font-bold rounded-xl transition"
                >
                  閉じる
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
