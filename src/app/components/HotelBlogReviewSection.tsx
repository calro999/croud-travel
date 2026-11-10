import React from "react";

interface HotelBlogReviewProps {
  hotelName: string;
  prefecture: string;
  area: string;
  rating?: string | number;
  reviewCount?: number;
  parkingInfo?: string;
  familyFriendly?: string;
  hotSpringInfo?: string;
  mealAvailability?: string;
  editorTip?: string;
  nearbyGourmet?: string[];
  nearbyTouristSpots?: string[];
  recommendedFor?: string[];
  price?: string | number;
  affiliateUrl: string;
}

export default function HotelBlogReviewSection({
  hotelName,
  prefecture,
  area,
  rating,
  reviewCount,
  parkingInfo,
  familyFriendly,
  hotSpringInfo,
  mealAvailability,
  editorTip,
  nearbyGourmet,
  nearbyTouristSpots,
  recommendedFor,
  price,
  affiliateUrl,
}: HotelBlogReviewProps) {
  const cleanHotel = hotelName.replace(/＜.*?＞/g, "").replace(/（.*?）/g, "").trim();
  const numRating = Number(rating);

  // 固有データが存在するか確認
  const hasDetails = Boolean(
    editorTip ||
    parkingInfo ||
    hotSpringInfo ||
    mealAvailability ||
    (nearbyGourmet && nearbyGourmet.length > 0) ||
    (nearbyTouristSpots && nearbyTouristSpots.length > 0) ||
    familyFriendly
  );

  if (!hasDetails) {
    return null;
  }

  return (
    <section className="my-8 rounded-3xl bg-stone-50 border border-teal-900/10 p-6 md:p-8 shadow-sm space-y-6">
      {/* 見出し */}
      <div className="border-b border-teal-900/10 pb-4">
        <span className="text-[10px] font-extrabold text-teal-800 tracking-wider uppercase block">
          CHECKPOINT // {area}
        </span>
        <h2 className="text-xl md:text-2xl font-black font-journal-serif text-teal-950 mt-1">
          【宿泊前に知りたいポイント】{cleanHotel}の設備・特徴ガイド
        </h2>
      </div>

      {/* スコア・早見サマリ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        {numRating > 0 && (
          <div className="bg-white rounded-2xl p-3 border border-stone-200 shadow-2xs">
            <div className="text-[11px] font-bold text-stone-500">口コミ評価</div>
            <div className="text-lg md:text-xl font-black text-amber-600 mt-0.5">
              ★ {numRating.toFixed(2)}
            </div>
            {reviewCount && (
              <div className="text-[10px] text-stone-400">{reviewCount}件のレビュー</div>
            )}
          </div>
        )}
        {price && (
          <div className="bg-white rounded-2xl p-3 border border-stone-200 shadow-2xs">
            <div className="text-[11px] font-bold text-stone-500">参考最安料金</div>
            <div className="text-lg md:text-xl font-black text-teal-950 mt-0.5">
              ¥{Number(price).toLocaleString()}〜
            </div>
            <div className="text-[10px] text-stone-400">1名あたり目安</div>
          </div>
        )}
        <div className="bg-white rounded-2xl p-3 border border-stone-200 shadow-2xs">
          <div className="text-[11px] font-bold text-stone-500">所在地</div>
          <div className="text-xs md:text-sm font-bold text-teal-950 mt-1 line-clamp-1">
            {prefecture} {area}
          </div>
        </div>
        {recommendedFor && recommendedFor.length > 0 && (
          <div className="bg-white rounded-2xl p-3 border border-stone-200 shadow-2xs">
            <div className="text-[11px] font-bold text-stone-500">おすすめ層</div>
            <div className="text-xs md:text-sm font-bold text-teal-950 mt-1 line-clamp-1">
              {recommendedFor.join("・")}
            </div>
          </div>
        )}
      </div>

      {/* 編集部ワンポイントアドバイス（各記事固有データ） */}
      {editorTip && (
        <div className="bg-amber-50/80 border border-amber-300/40 rounded-2xl p-4 text-xs md:text-sm text-amber-950 leading-relaxed">
          <span className="font-bold text-amber-800 mr-1.5">💡 編集部の注目ポイント：</span>
          {editorTip}
        </div>
      )}

      {/* 各宿の具体的仕様リスト（固有データが存在する場合のみ表示） */}
      <div className="space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
        {hotSpringInfo && (
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <div className="font-bold text-teal-900 mb-1 flex items-center gap-1.5">
              <span>♨️ お風呂・温泉情報</span>
            </div>
            <p>{hotSpringInfo}</p>
          </div>
        )}

        {parkingInfo && (
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <div className="font-bold text-teal-900 mb-1 flex items-center gap-1.5">
              <span>🚗 駐車場情報</span>
            </div>
            <p>{parkingInfo}</p>
          </div>
        )}

        {mealAvailability && (
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <div className="font-bold text-teal-900 mb-1 flex items-center gap-1.5">
              <span>🍽️ お食事・朝食情報</span>
            </div>
            <p>{mealAvailability}</p>
          </div>
        )}

        {familyFriendly && (
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <div className="font-bold text-teal-900 mb-1 flex items-center gap-1.5">
              <span>👨‍👩‍👧 子連れ・ファミリー対応</span>
            </div>
            <p>{familyFriendly}</p>
          </div>
        )}

        {nearbyGourmet && nearbyGourmet.length > 0 && (
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <div className="font-bold text-teal-900 mb-1 flex items-center gap-1.5">
              <span>🍢 周辺の名物グルメ</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {nearbyGourmet.map((g) => (
                <span key={g} className="bg-stone-100 text-stone-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                  {g}
                </span>
              ))}
            </div>
          </div>
        )}

        {nearbyTouristSpots && nearbyTouristSpots.length > 0 && (
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <div className="font-bold text-teal-900 mb-1 flex items-center gap-1.5">
              <span>📍 あわせて巡りたい周辺観光名所</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {nearbyTouristSpots.map((s) => (
                <span key={s} className="bg-teal-50 text-teal-900 text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-teal-800/10">
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 予約確認リンク */}
      <div className="text-center pt-2">
        <a
          href={affiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs shadow-sm hover:shadow transition"
        >
          <span>👉 {cleanHotel}の最新宿泊プラン＆空室状況（楽天トラベル）</span>
        </a>
      </div>
    </section>
  );
}
