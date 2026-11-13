import React from "react";
import Link from "next/link";
import { PREFECTURES_DATA } from "@/data/prefecturesData";
import { PostSummary } from "./RelatedPosts";

interface AreaTopicClusterCardProps {
  currentPostId: string;
  prefecture: string;
  area: string;
  allPosts: PostSummary[];
}

export default function AreaTopicClusterCard({
  currentPostId,
  prefecture,
  area,
  allPosts,
}: AreaTopicClusterCardProps) {
  const safePref = (prefecture || "").replace(/(県|府|東京都)$/, "");
  const prefData = PREFECTURES_DATA.find((p) => p.name.includes(safePref));
  const prefSlug = prefData?.slug || "tokyo";

  // 同エリア・同都道府県の他のおすすめ宿を2件ピックアップ
  const candidatePosts = allPosts.filter(
    (p) =>
      p.id !== currentPostId &&
      (p.prefecture?.includes(safePref) || p.area?.includes(area))
  );

  // 決定論的シャッフル
  const nearbyPosts = candidatePosts.slice(0, 2);

  return (
    <aside className="my-8 rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/50 to-stone-50 border border-teal-900/10 p-5 md:p-6 shadow-2xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-900/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-base">🗺️</span>
          <span className="text-xs md:text-sm font-black text-teal-950">
            あわせてチェック！【{prefecture}・{area}】の観光＆比較候補宿
          </span>
        </div>
        <Link
          href={`/prefectures/${prefSlug}/`}
          className="text-[11px] font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1"
        >
          <span>{prefecture}の宿一覧</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {nearbyPosts.map((np) => (
          <Link
            key={np.id}
            href={`/posts/${np.id}/`}
            className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-teal-900/5 hover:border-teal-700/30 hover:shadow-sm transition"
          >
            {np.image && (
              <img
                src={np.image}
                alt={np.hotel_name || np.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-stone-200"
                loading="lazy"
              />
            )}
            <div className="min-w-0 flex-1 space-y-1">
              <span className="text-[9px] font-extrabold text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded">
                {np.area || prefecture}
              </span>
              <h4 className="text-xs font-bold text-teal-950 group-hover:text-teal-700 transition line-clamp-1">{np.hotel_name || np.title}</h4>
              <p className="text-[10px] text-stone-500 line-clamp-1">
                {np.rating ? `⭐ ${np.rating}` : ""} {np.price ? `・¥${Number(np.price).toLocaleString()}〜` : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {prefData && prefData.highlights && prefData.highlights.length > 0 && (
        <div className="pt-2 text-[11px] text-teal-950/70 flex items-center gap-2">
          <span className="font-bold text-teal-900">📍 周辺の見どころ：</span>
          <span className="truncate">{prefData.highlights.slice(0, 3).join("、")} など</span>
        </div>
      )}
    </aside>
  );
}
