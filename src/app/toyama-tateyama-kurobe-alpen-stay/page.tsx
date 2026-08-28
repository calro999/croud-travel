import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【富山・立山黒部アルペンルート】雪の大谷・みくりが池＆立山連峰・富山湾宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界屈指の山岳観光ルート・立山黒部アルペンルートエリア完全特化！高さ20mに達する「雪の大谷ウォーク」、標高2,410mの「室堂・みくりが池温泉」、黒部ダムの観光放水、富山湾の白えび・寒ブリ宿を徹底解説。",
  keywords: ["toyama-tateyama-kurobe-alpen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["toyama-tateyama-kurobe-alpen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for toyama-tateyama-kurobe-alpen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tateyama_murodo_snow_view",
    "title": "1. 室堂平〜雪の大谷・みくりが池（高さ20mの巨大雪壁と日本最高所の天然温泉）",
    "timing": "春（4月中旬〜6月中旬の雪の大谷ウォーク）／夏〜秋（7月〜10月の室堂トレッキング・全山紅葉）",
    "desc": "アルペンルートの最高地点「室堂（標高2,450m）」。道路を豪快に除雪してできる高さ最大20mの「雪の大谷」。火口湖「みくりが池」のコバルトブルーと、日本最高所にある源泉かけ流し天然温泉「みくりが池温泉」。",
    "spots": "雪の大谷ウォーク、みくりが池、ホテル立山（星空観察会）、みくりが池温泉（日本最高所温泉）、立山玉殿の湧水",
    "access": "富山地方鉄道「立山駅」より立山ケーブルカーと高原バスを乗り継ぎ約1時間で「室堂」到着。",
    "tip": "「ホテル立山」や「みくりが池温泉」など室堂に宿泊すると、観光客が帰った後の満点の天の川や朝焼けの立山連峰を独占できます。"
  },
  {
    "key": "tateyama_station_base",
    "title": "2. 立山駅〜美女平・弥陀ヶ原（原生林の巨木と広大な高原湿原リゾート）",
    "timing": "通年（アルペンルート運行期間：4月中旬〜11月30日）",
    "desc": "富山側の出発拠点・立山駅周辺から高原エリア。樹齢数百年を誇るタテヤマスギの巨木が立ち並ぶ「美女平」や、高山植物が咲き誇るラムサール条約湿地「弥陀ヶ原（みだがはら）」。雲海を見下ろす高原ホテルステイ。",
    "spots": "立山駅、美女平（バードウォッチング・巨木巡り）、弥陀ヶ原湿原（木道散策・雲海テラス）、称名滝（日本一の落差350m）",
    "access": "北陸新幹線富山駅より富山地方鉄道で立山駅まで約60分。",
    "tip": "「称名滝（しょうみょうだき）」は落差350mと日本一を誇り、特に春の雪解け期には隣にハンノキ滝が現れる二段滝の絶景が見られます。"
  },
  {
    "key": "toyama_bay_seafood_stay",
    "title": "3. 黒部ダム放水＆富山湾の海の幸（白えび・紅ズワイガニ・黒部名水ポーク）",
    "timing": "夏期：6月26日〜10月15日（黒部ダム大迫力観光放水）／冬期（寒ブリ・カニ）",
    "desc": "堤高186m、日本一の高さを誇る巨大アーチ式ダム「黒部ダム」。毎秒10トン以上の水が虹を架けながら吹き出す大迫力の観光放水。下山後は、富山湾の宝石「白えび」の刺身や天ぷら、紅ズワイガニを満喫。",
    "spots": "黒部ダム（展望台・新展望広場・ダムレストハウスの黒部ダムカレー）、富山湾海鮮料理店",
    "access": "室堂よりトロリーバス・ロープウェイ・ケーブルカーを乗り継ぎ黒部ダムへ。",
    "tip": "黒部ダムレストハウスの名物「黒部ダムカレー」は、ダムのえん堤をご飯で、エメラルドグリーンの湖水をグリーンカレーで再現した名物です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TATEYAMA ALPEN ROUTE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【富山・立山黒部アルペンルート】雪の大谷・みくりが池＆立山連峰・富山湾宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高3,000m級の北アルプスを貫く世界有数の山岳観光路「立山黒部アルペンルート」。春の巨大な雪の壁「雪の大谷」、紺碧の水面に立山が映る「みくりが池」。雲上の絶景温泉に浸かり、富山湾の海の幸を堪能する大冒険へ。
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
