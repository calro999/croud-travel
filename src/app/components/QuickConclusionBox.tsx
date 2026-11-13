import React from "react";

interface FeaturedHotelItem {
  name: string;
  rating: string;
  price: string;
  url: string;
}

interface QuickConclusionBoxProps {
  isSpecialFeature?: boolean;
  featuredHotels?: FeaturedHotelItem[];
  hotelName: string;
  prefecture: string;
  area: string;
  rating?: string | number;
  price?: string | number;
  editorTip?: string;
  recommendedFor?: string[];
  affiliateUrl: string;
}

export default function QuickConclusionBox({
  isSpecialFeature,
  featuredHotels,
  hotelName,
  prefecture,
  area,
  rating,
  price,
  editorTip,
  recommendedFor,
  affiliateUrl,
}: QuickConclusionBoxProps) {
  const cleanHotel = (hotelName || "").replace(/＜.*?＞/g, "").replace(/（.*?）/g, "").trim();

  // 特集記事向け：掲載宿から結論ベストを抽出
  if (isSpecialFeature && featuredHotels && featuredHotels.length >= 2) {
    // 評価順ソート
    const sortedByRating = [...featuredHotels].sort(
      (a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0)
    );
    const topRated = sortedByRating[0];

    // 価格ソート（数値抽出）
    const sortedByPrice = [...featuredHotels]
      .filter((h) => h.price && h.price.includes("¥"))
      .sort((a, b) => {
        const pA = parseInt(a.price.replace(/[^0-9]/g, ""), 10) || 999999;
        const pB = parseInt(b.price.replace(/[^0-9]/g, ""), 10) || 999999;
        return pA - pB;
      });
    const bestValue = sortedByPrice[0] || featuredHotels[1];

    // 注目宿（トップに掲載された宿）
    const spotlight = featuredHotels[0].name !== topRated.name ? featuredHotels[0] : (featuredHotels[2] || featuredHotels[1]);

    const conclusionList = [
      {
        badge: "👑 総合口コミ最高評価",
        label: "満足度で選ぶならココ",
        hotel: topRated,
      },
      {
        badge: "💰 最安・コスパ優秀",
        label: "お得に泊まるならココ",
        hotel: bestValue,
      },
      {
        badge: "✨ 編集部イチオシ名宿",
        label: "雰囲気・世界観重視",
        hotel: spotlight,
      },
    ].filter((item) => Boolean(item.hotel));

    return (
      <aside className="my-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-teal-500/10 to-stone-100 border-2 border-amber-500/30 p-5 md:p-7 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span className="text-sm md:text-base font-black text-stone-900 font-journal-serif">
              【3秒でわかる結論】迷ったらこの3宿から選べば間違いなし！
            </span>
          </div>
          <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
            楽天トラベル最新データ比較
          </span>
        </div>

        <p className="text-xs text-stone-700 leading-relaxed">
          {prefecture}（{area}）の掲載宿の中から、「口コミ満足度」「コスパ」「注目度」で厳選した結論ベスト3です。日程が近いと満室になりやすいため、早めの空室チェックがおすすめです。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {conclusionList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-stone-200 shadow-2xs flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <span className="inline-block text-[10px] font-black text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                  {item.badge}
                </span>
                <div className="text-[11px] font-bold text-stone-500">{item.label}</div>
                <h4 className="text-sm font-black text-stone-900 line-clamp-2 leading-snug">{item.hotel.name}</h4>
                <div className="flex items-center gap-2 text-xs font-bold pt-0.5">
                  <span className="text-amber-600">★ {item.hotel.rating}</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-700">{item.hotel.price}</span>
                </div>
              </div>

              <a
                href={item.hotel.url}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full text-center py-2 px-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs shadow-2xs transition active:scale-98"
              >
                空室・最安プランを見る ➔
              </a>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  // 個別宿記事向け：3秒でわかる宿の要約ボックス
  if (!isSpecialFeature && (rating || price || editorTip)) {
    return (
      <aside className="my-6 rounded-3xl bg-gradient-to-br from-teal-900/5 via-stone-50 to-amber-500/10 border border-teal-900/15 p-5 md:p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-900/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span className="text-sm md:text-base font-black text-teal-950 font-journal-serif">
              【3秒まとめ】{cleanHotel}の結論ポイント
            </span>
          </div>
          <span className="text-[10px] font-bold text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded-full">
            {prefecture} {area}
          </span>
        </div>

        {editorTip && (
          <p className="text-xs md:text-sm text-stone-800 font-medium leading-relaxed">
            👉 <strong>編集部結論：</strong>{editorTip}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-stone-200">
          <div className="flex items-center gap-3 text-xs">
            {rating && (
              <span className="font-black text-amber-600 flex items-center gap-1">
                <span>⭐</span>
                <span>評価 {rating}</span>
              </span>
            )}
            {price && (
              <span className="font-bold text-stone-700">
                1泊目安: ¥{Number(price).toLocaleString()}〜
              </span>
            )}
            {recommendedFor && recommendedFor.length > 0 && (
              <span className="text-stone-500 hidden sm:inline">
                （{recommendedFor.join("・")}向け）
              </span>
            )}
          </div>

          <a
            href={affiliateUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="px-4 py-1.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs shadow-2xs transition"
          >
            空室・最安値を確認 ➔
          </a>
        </div>
      </aside>
    );
  }

  return null;
}
