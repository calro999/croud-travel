"use client";

import React, { useState, useEffect } from "react";

interface BookmarkButtonProps {
  id: string;
  hotelName: string;
  image?: string;
  prefecture?: string;
  area?: string;
}

export default function BookmarkButton({ id, hotelName, image, prefecture, area }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("croud_travel_bookmarks");
      if (saved) {
        const bookmarks = JSON.parse(saved);
        if (bookmarks.some((b: { id: string }) => b.id === id)) {
          setIsBookmarked(true);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem("croud_travel_bookmarks");
      let bookmarks = saved ? JSON.parse(saved) : [];

      if (isBookmarked) {
        bookmarks = bookmarks.filter((b: { id: string }) => b.id !== id);
        setIsBookmarked(false);
      } else {
        bookmarks.push({
          id,
          hotelName,
          image,
          prefecture,
          area,
          savedAt: new Date().toISOString(),
        });
        setIsBookmarked(true);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2500);
      }

      localStorage.setItem("croud_travel_bookmarks", JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleBookmark}
        type="button"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition border ${
          isBookmarked
            ? "bg-rose-50 text-rose-700 border-rose-300"
            : "bg-white/80 hover:bg-slate-100 text-slate-700 border-slate-300"
        }`}
        aria-label={isBookmarked ? "お気に入りから解除" : "お気に入り（検討リスト）に保存"}
      >
        <span className={isBookmarked ? "text-rose-600" : "text-slate-400"}>
          {isBookmarked ? "❤️" : "🤍"}
        </span>
        <span>{isBookmarked ? "保存済み" : "あとで見る"}</span>
      </button>

      {showNotification && (
        <div className="absolute top-full left-0 mt-2 z-30 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-top-1">
          ✓ お気に入りリストに保存しました
        </div>
      )}
    </div>
  );
}
