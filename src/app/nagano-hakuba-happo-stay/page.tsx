import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長野・白馬八方尾根】白馬マウンテンハーバー＆北アルプス絶景・温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "長野・北アルプス白馬エリア完全特化！標高1,289mの絶景テラス「白馬マウンテンハーバー」、八方池トレッキング、白馬八方温泉の高アルカリ美肌湯、冬のパウダースノースキー場と北欧風山岳リゾートを徹底解説。",
  keywords: ["nagano-hakuba-happo-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-hakuba-happo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-hakuba-happo-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakuba_mountain_harbor",
    "title": "1. 白馬岩岳マウンテンリゾート〜HAKUBA MOUNTAIN HARBOR（天空テラスの絶景）",
    "timing": "通年（秋の三段紅葉・夏の避暑テラス・冬の絶景スノーテラス）",
    "desc": "ゴンドラリフトで標高1,289mの山頂へ。北アルプス白馬三山を一望するウッドデッキテラス「HAKUBA MOUNTAIN HARBOR」。「THE CITY BAKERY」のクロワッサンサンドや、山に飛び出す「ヤッホー！スウィング」を満喫。",
    "spots": "HAKUBA MOUNTAIN HARBOR、THE CITY BAKERY白馬店、ヤッホー！スウィング（巨大ブランコ）、白馬ヒトトキノモリ",
    "access": "JR大糸線「白馬駅」よりシャトルバス・車で約10分。北陸新幹線長野駅より特急バス約70分。",
    "tip": "巨大ブランコ「ヤッホー！スウィング」に乗ると、まるで北アルプスの大空へ飛び立つような大迫力の動画が撮影できます。"
  },
  {
    "key": "hakuba_happo_onsen",
    "title": "2. 八方尾根〜八方池（北アルプスの山並みが鏡のように映る神秘の池と八方温泉）",
    "timing": "グリーンシーズン：6月〜10月（高山植物と秋の紅葉）",
    "desc": "八方アルペンラインのゴンドラとリフトを乗り継ぎ、八方池（標高2,060m）へ。白馬三山が水面に映るリフレクションは息をのむ美しさ。下山後は、pH11.2を誇る日本屈指の強アルカリ性温泉「白馬八方温泉」でつるつる美肌に。",
    "spots": "八方池、八方尾根自然研究路、白馬八方温泉（八方の湯・みみずくの湯・おびなたの湯）、白馬ジャンプ競技場",
    "access": "白馬八方バスターミナル周辺。",
    "tip": "白馬八方温泉の「みみずくの湯」の露天風呂からは、白馬三山を真正面に眺めながらの入浴が楽しめます。"
  },
  {
    "key": "hakuba_ski_powder",
    "title": "3. 白馬バレーのパウダースノー（世界中のスキーヤーを魅了するJAPOWと山岳ホテル）",
    "timing": "冬期（12月中旬〜5月上旬の極上ロングシーズン）",
    "desc": "1998年長野冬季五輪の舞台「白馬八方尾根スキー場」をはじめとするHAKUBA VALLEY。極上のパウダースノー（JAPOW）と北欧風の山岳リゾートホテル。暖炉のあるラウンジで信州ワインやクラフトビールを堪能。",
    "spots": "白馬八方尾根スキー場、Hakuba47・白馬五竜、スノーピーク LAND STATION HAKUBA",
    "access": "白馬八方バスターミナルより各スキー場シャトルバス運行。",
    "tip": "「スノーピーク LAND STATION HAKUBA」では、隈研吾設計の建築美の中で信州の食材を使った薪火料理やグランピングカフェを楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HAKUBA MOUNTAIN MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長野・白馬八方尾根】白馬マウンテンハーバー＆北アルプス絶景・温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高3,000m級の北アルプス白馬連峰が眼前に迫る「白馬」。山頂テラスのブランコから望む三段紅葉と雪山パノラマ。pH11を超える日本最高峰のアルカリ性美肌温泉に浸かり、大自然に抱かれる極上のリゾートへ。
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
