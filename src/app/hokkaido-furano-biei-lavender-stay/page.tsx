import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【北海道・富良野＆美瑛】青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "パッチワークの丘と紫の絨毯・北海道富良野＆美瑛エリア完全特化！「ファーム富田」のラベンダー畑、神秘のコバルトブルー「白金青い池」、白ひげの滝、源泉100%白金温泉、ふらの和牛・富良野メロン会席宿を徹底解説。",
  keywords: ["hokkaido-furano-biei-lavender-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hokkaido-furano-biei-lavender-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido-furano-biei-lavender-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "furano_lavender_farm_stay",
    "title": "1. ファーム富田〜中富良野（見渡す限りの紫のグラデーションとラベンダーソフト）",
    "timing": "夏期：6月下旬〜8月上旬（7月中旬〜下旬がラベンダーの満開ピーク）",
    "desc": "日本最大級のラベンダー畑が広がる「ファーム富田」。色とりどりの花々が丘の斜面に虹のように咲く「彩りの畑」。十勝岳連峰を借景にした圧巻の風景美。ラベンダーエッセンシャルオイル抽出工房の見学。",
    "spots": "ファーム富田（トラディショナルラベンダー畑・彩りの畑・ポプリの舎）、フラワーランドかみふらの、かんのファーム",
    "access": "JR富良野線「ラベンダー畑駅（季節臨時駅）」下車徒歩7分。旭川空港より車で約45分。",
    "tip": "ファーム富田の「ラベンダーソフトクリーム」は、爽やかな香りと優しい甘みで夏の富良野観光の必食スイーツです。"
  },
  {
    "key": "biei_blue_pond_shirogane",
    "title": "2. 白金青い池〜白ひげの滝・四季彩の丘（神秘のコバルトブルーとパッチワークの丘）",
    "timing": "通年（新緑の初夏・夏の青い水面・冬の雪景色とライトアップ）",
    "desc": "立ち枯れたカラマツと幻想的な青い水面が世界的に有名な「白金青い池」。地下水が岩肌から白い髭のように湧き出る「白ひげの滝」。「パッチワークの路」「四季彩の丘」で巡る広大なロールベールアート。",
    "spots": "白金青い池、白ひげの滝（ブルーリバー）、四季彩の丘（ノロッコ号・アルパカ牧場）、セブンスターの木・ケンとメリーの木",
    "access": "美瑛駅より道北バスで約20分。",
    "tip": "青い池は、晴れた風のない日の午前中に訪れると、水面が最も鮮やかなコバルトブルーに輝きます。"
  },
  {
    "key": "furano_beef_melon_gourmet",
    "title": "3. プレミアム「ふらの和牛」＆富良野メロン（大自然の恵みを味わう北海道美食）",
    "timing": "通年（夏秋の富良野メロン・新じゃが・秋野菜）",
    "desc": "大雪山系の伏流水と厳しい寒暖差の中で育つブランド黒毛和牛「ふらの和牛」。糖度15度を超えるジューシーな「富良野メロン」、富良野チーズ工房の搾りたてミルクとワインチェダーチーズ。地元ワインとのマリアージュ。",
    "spots": "富良野チーズ工房（ピッツァ工房・アイス工房）、ふらのワインハウス、カンパーニュ工房",
    "access": "富良野市街・美瑛エリア。",
    "tip": "「ふらのワインハウス」の高台レストランでは、富良野盆地と十勝岳連峰のパノラマを眺めながらチーズフォンデュをいただけます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            FURANO & BIEI NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【北海道・富良野＆美瑛】青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            見渡す限りの紫の絨毯と色彩豊かなパッチワークの丘「北海道・富良野美瑛」。ファーム富田のラベンダーの香り。神秘的なエメラルドブルーを湛える「白金の青い池」。大雪山連峰を望む白金温泉と、極上のふらの和牛に包まれる旅。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
