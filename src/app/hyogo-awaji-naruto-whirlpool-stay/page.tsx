import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【兵庫・淡路島＆鳴門海峡】うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "関西屈指のリゾートアイランド・兵庫淡路島エリア完全特化！世界最大級の「鳴門の渦潮」クルーズ、明石海峡大橋、ニジゲンノモリ、淡路島玉ねぎ＆淡路牛・由良ウニ・3年とらふぐを味わう絶景温泉ホテルを徹底解説。",
  keywords: ["hyogo-awaji-naruto-whirlpool-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hyogo-awaji-naruto-whirlpool-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hyogo-awaji-naruto-whirlpool-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "awaji_naruto_whirlpool_view",
    "title": "1. 南あわじ・福良港〜鳴門海峡（世界一の渦潮を間近で体感するうずしおクルーズ）",
    "timing": "通年（春と秋の大潮の時期は直径最大20mの巨大渦潮が出現）",
    "desc": "瀬戸内海と太平洋の潮の干満差によって生まれる世界最大級の自然現象「鳴門の渦潮」。「うずしおクルーズ（咸臨丸・日本丸）」に乗船して、足元で轟音とともに巻く大迫力の渦潮を体感。大鳴門橋を見下ろす岬の温泉。",
    "spots": "うずしおクルーズ（福良港発着）、道の駅うずしお（大鳴門橋展望台・あわじ島バーガー）、うずの丘 大鳴門橋記念館（おっ玉葱オブジェ）",
    "access": "神戸・三宮より高速バスで約80分「福良」下車。各旅館無料送迎あり。",
    "tip": "「道の駅うずしお」の「あわじ島オニオンビーフバーガー」は、全国ご当地バーガーグランプリ1位に輝いた必食グルメです。"
  },
  {
    "key": "awaji_ocean_infinity",
    "title": "2. 洲本温泉・海岸フロント（紀淡海峡を望むインフィニティ展望露天風呂）",
    "timing": "通年（海から昇る感動の朝日サンライズと夜の波音）",
    "desc": "淡路島最大の温泉郷「洲本温泉」。「ホテルニューアワジ」をはじめとする海岸沿いの名門リゾート。海と空と湯船がひとつに溶け合うインフィニティ露天風呂から、紀淡海峡を行き交う船や朝日の絶景を鑑賞。",
    "spots": "洲本城跡（三熊山山頂・紀淡海峡パノラマ）、大浜海水浴場、洲本レトロこみち",
    "access": "三宮・大阪駅より高速バス「洲本高速バスセンター」行きで約80〜100分。各宿送迎あり。",
    "tip": "「洲本レトロこみち」は城下町の古民家を再生したお洒落なカフェやジェラート店、雑貨屋が並ぶ人気の散策小路です。"
  },
  {
    "key": "awaji_beef_onion_gourmet",
    "title": "3. 淡路島三大美食づくし（淡路牛ステーキ・甘い淡路玉ねぎ・淡路島3年とらふぐ）",
    "timing": "通年（冬期：11月〜3月の淡路島3年とらふぐ、夏の由良赤ウニ）",
    "desc": "御食国（みけつくに）として朝廷に食材を納めてきた食の宝庫・淡路島。糖度が高く甘い「淡路島玉ねぎ」のステーキ、神戸牛の素牛となる「淡路牛」、鳴門の激流で3年間育てた濃厚な旨味の「淡路島3年とらふぐ」を堪能。",
    "spots": "淡路ハイウェイオアシス（明石海峡大橋絶景）、ニジゲンノモリ（県立淡路島公園）、クラフトサーカス",
    "access": "神戸淡路鳴門自動車道沿線。",
    "tip": "淡路島3年とらふぐは、通常の2年物より一回り大きく育ち、白子や身の締まり・濃厚な旨味が段違いの冬の最高峰グルメです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AWAJI ISLAND RESORT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【兵庫・淡路島＆鳴門海峡】うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            明石海峡大橋を渡れば広がる青い海と緑の島「淡路島」。鳴門海峡で激しく渦巻く世界最大級の「うずしお」。波打ち際のインフィニティ温泉露天風呂から海を眺め、甘み豊かな淡路島玉ねぎと淡路牛ステーキに舌鼓を打つリゾートへ。
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
