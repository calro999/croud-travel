import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【空港直行＆空港至近リゾート宿】羽田・成田・関空・福岡・那覇・千歳 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "フライト前後も快適な空港アクセス特化温泉宿！羽田エアポートガーデン展望温泉、新千歳空港内天然温泉、関空対岸オーシャンビュー、福岡空港至近の博多温泉、那覇空港から直行の瀬長島ウミカジテラス温泉宿を徹底解説。",
  keywords: ["airport-access-direct-resort-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["airport-access-direct-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for airport-access-direct-resort-stay", e);
  }
  return {};
}

export default function TransitStyleHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "haneda_chitose_airport_onsen",
    "title": "1. 空港直結・展望露天風呂（羽田空港＆新千歳空港の天然温泉ホテル）",
    "timing": "通年（早朝便・深夜便の前後泊やフライト疲れのリセット）",
    "desc": "羽田空港第3ターミナル直結「泉天空の湯 羽田空港」では、富士山や飛行機を眺める屋上展望露天風呂。新千歳空港国内線ターミナル直結の「新千歳空港温泉」では、塩分を多く含む保温美肌の弱アルカリ性温泉。",
    "spots": "展望露天風呂（滑走路ビュー・富士山ビュー）、岩盤浴、サウナ、リラクゼーションラウンジ",
    "access": "羽田空港第3ターミナル直結、新千歳空港ターミナルビル4階。",
    "tip": "羽田空港の「泉天空の湯」は24時間営業しており、深夜到着や早朝出発のフライトでも仮眠や温泉入浴が可能です。"
  },
  {
    "key": "naha_senagajima_resort",
    "title": "2. 那覇・瀬長島ウミカジテラス温泉（那覇空港から車15分のアイランドリゾート）",
    "timing": "通年（沖縄の青い海と夕陽、頭上を通過する大迫力の飛行機）",
    "desc": "那覇空港から車でわずか約15分の瀬長島。「琉球温泉 瀬長島ホテル」では、地下1,000mから湧き出る天然温泉の「立ち湯露天風呂」から慶良間諸島に沈む夕日を一望。隣接するウミカジテラスでお洒落なカフェ巡り。",
    "spots": "琉球温泉 龍神の湯（立ち湯露天・ロウリュサウナ）、瀬長島ウミカジテラス（白亜のテラスショップ群）",
    "access": "那覇空港より路線バス「ウミカジライナー」で約20分。タクシーで約15分。",
    "tip": "立ち湯露天風呂からは、那覇空港の第2滑走路に着陸する飛行機が真横を通過する大迫力の光景が見られます。"
  },
  {
    "key": "kanku_fukuoka_airport_stay",
    "title": "3. 関空＆福岡空港アクセス温泉（無料シャトルバスで行く快適トランジット）",
    "timing": "通年（関西・九州旅行のゲートウェイ）",
    "desc": "関西国際空港の対岸「りんくうタウン」に位置するオーシャンビュー温泉ホテルや、福岡空港から地下鉄でわずか5分の博多駅周辺に佇む天然温泉ホテル。空港への無料シャトルバス運行でスムーズな移動。",
    "spots": "りんくうプレミアム・アウトレット、関空展望ホールSky View、博多駅前天然温泉大浴場",
    "access": "関空よりシャトルバス約10分、福岡空港より地下鉄約5分。",
    "tip": "りんくうタウンのホテルに宿泊すると、アウトレットでのショッピングと海辺温泉をフライト前日に楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AIRPORT ACCESS & LUXURY ONEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【空港直行＆空港至近リゾート宿】羽田・成田・関空・福岡・那覇・千歳 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            飛行機を降りてすぐに温泉と美食のリゾートへ！羽田・新千歳など空港直結・至近の展望天然温泉。滑走路を離着陸する飛行機や富士山を眺めながら湯船に浸かり、フライト前後の移動ストレスをゼロにする究極のスマートステイ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* アクセス・移動ルート・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要発着点＆ルート</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 スムーズな旅のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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
