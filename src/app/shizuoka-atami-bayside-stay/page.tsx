import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静岡・熱海温泉】海上花火＆サンビーチ・相模湾オーシャンビュー宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "都心から新幹線45分！熱海温泉エリア完全特化！年間10回以上開催の熱海海上花火大会、熱海サンビーチ、来宮神社（大楠）、アカオハーブ＆ローズガーデンと相模湾地魚・金目鯛が自慢の温泉ホテルを徹底解説。",
  keywords: ["shizuoka-atami-bayside-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-atami-bayside-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-atami-bayside-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "atami_fireworks_view",
    "title": "1. 熱海湾・高台エリア（年間10回以上！海上花火大会を特等席で鑑賞）",
    "timing": "通年（春夏秋冬オールシーズン開催される熱海名物海上花火）",
    "desc": "すり鉢状の地形が生み出すスタジアムのような大音響。海に面した客室バルコニーや最上階展望露天風呂から、海面に反射する大空中ナイアガラを混雑なしで独占鑑賞できる贅沢。",
    "spots": "熱海海上花火大会（熱海湾）、熱海城（展望天守閣）、アタミロープウェイ、あいじょう岬",
    "access": "東海道新幹線「熱海駅」下車。東京駅から新幹線でわずか約45分。各旅館の無料送迎バスあり。",
    "tip": "花火大会開催日は数ヶ月前から予約が埋まるため、日程発表と同時に早めの客室確保が必須です。"
  },
  {
    "key": "atami_sunbeach_walk",
    "title": "2. 熱海サンビーチ〜親水公園・熱海銀座（ヤシの木並木とレトロプリン散歩）",
    "timing": "通年（夜は日本初のビーチライトアップ開催）",
    "desc": "南国リゾートの風情漂う「熱海サンビーチ」。ムーンライトビーチの幻想的な夜間照明や、レトロな熱海銀座商店街での「熱海プリン」や干物定食、海鮮丼の食べ歩き。",
    "spots": "熱海サンビーチ、親水公園（スカイデッキ・レインボーデッキ）、熱海銀座商店街、熱海プリン",
    "access": "熱海駅より平和通り商店街を抜けて徒歩約15分、または路線バス約5分。",
    "tip": "親水公園沿いのオープンカフェテラスで、潮風を感じながらいただく静岡クラフトビールとジェラートが人気です。"
  },
  {
    "key": "atami_kinomiya_luxury",
    "title": "3. 来宮神社〜熱海梅園・桃山（樹齢2100年の大楠と静寂の隠れ家リトリート）",
    "timing": "通年（1月中旬〜3月上旬の熱海梅園梅まつり・初夏の青もみじ）",
    "desc": "幹を一回りすると寿命が1年延びると伝わる国指定天然記念物「来宮神社の大楠」。お洒落なオープンカフェが併設された神域を参拝し、高台の緑に囲まれた全室露天風呂付き隠れ宿で伊豆牛と金目鯛を堪能。",
    "spots": "来宮神社（大楠・茶寮報鼓）、熱海梅園、MOA美術館（国宝・円形ホール）、起雲閣（名邸・名庭）",
    "access": "JR伊東線「来宮駅」徒歩約5分。熱海駅よりタクシー約8分。",
    "tip": "MOA美術館の「円形ホール万華鏡プロジェクションマッピング」と高台からの初島・伊豆大島パノラマは必見です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ATAMI ONSEN MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【静岡・熱海温泉】海上花火＆サンビーチ・相模湾オーシャンビュー宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            青い相模湾とすり鉢状の斜面に広がる熱海の街並み。夜空を彩る大迫力の海上花火大会と、日本屈指の湧出量を誇る美肌温泉。海風を感じながら極上のリゾートステイへ。
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
