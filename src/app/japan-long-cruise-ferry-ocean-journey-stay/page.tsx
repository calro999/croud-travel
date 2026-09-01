import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【優雅な船旅・長距離カーフェリー＆離島航路】太平洋・日本海クルーズ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "海上の動く洋上ホテル！長距離フェリー＆離島航路完全特化！太平洋フェリー（名古屋〜仙台〜苫小牧・いしかり）、新日本海フェリー（新潟・敦賀〜小樽）、佐渡汽船ジェットフォイル、フェリー発着港至近の温泉ホテルを徹底解説。",
  keywords: ["japan-long-cruise-ferry-ocean-journey-stay", "鉄道旅行", "乗り物旅", "絶景体験", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-long-cruise-ferry-ocean-journey-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-long-cruise-ferry-ocean-journey-stay", e);
  }
  return {};
}

export default function RailwayActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "taiheiyo_ferry_sendai_tomakomai",
    "title": "1. 太平洋フェリー（名古屋〜仙台〜苫小牧）〜名船「いしかり・きそ」（洋上の豪華ホテル）",
    "timing": "通年（穏やかな太平洋クルーズ・満天の洋上星空）",
    "desc": "クルーズシップ・オブ・ザ・イヤーのフェリー部門で連続第1位を獲得し続ける「太平洋フェリー（いしかり・きそ・きたかみ）」。3層吹き抜けのエントランスロビー、展望大浴場、毎夜開催されるラウンジショー。仙台港や苫小牧港至近の温泉ホテル。",
    "spots": "仙台港フェリーターミナル、三井アウトレットパーク仙台港、苫小牧西港フェリーターミナル、登別温泉",
    "access": "JR仙石線「中野栄駅」よりバス約10分。",
    "tip": "太平洋フェリーの「特等室」や「スイートルーム」にはプライベートバルコニーがあり、海風を感じながら淹れたてのコーヒーを楽しむ贅沢な時間を過ごせます。"
  },
  {
    "key": "shin_nihonkai_ferry_otaru_niigata",
    "title": "2. 新日本海フェリー（舞鶴・敦賀・新潟〜小樽・苫小牧）〜高速日本海クルーズ（露天風呂付き）",
    "timing": "通年（日本海の夕陽と荒波・冬の雪見航路）",
    "desc": "日本最速クラスの航海速力で本州と北海道を結ぶ「新日本海フェリー（らべんだあ・あざれあ等）」。船尾に設置された洋上オープンエア露天風呂。大型スクリーンでの船内映画上映。小樽運河のガス灯散策と小樽温泉郷。",
    "spots": "小樽港フェリーターミナル、小樽運河、新潟港山の下埠頭、敦賀港、小樽朝里川温泉",
    "access": "JR小樽駅よりバス・車約10分。",
    "tip": "日本海フェリーの船尾露天風呂からは、航跡波の白いラインと夕陽が水平線に沈んでいくパノラマを湯船に浸かりながら独占できます。"
  },
  {
    "key": "sado_steamship_niigata_ryotsu",
    "title": "3. 佐渡汽船（新潟〜両津・直江津〜小木）〜ジェットフォイル＆カーフェリー（世界遺産佐渡へ）",
    "timing": "通年（ジェットフォイルは約67分で新潟〜佐渡間を結ぶ）",
    "desc": "海の上に浮上して時速約80kmで疾走する「ジェットフォイル（ぎんが・つばさ・すいせい）」と、カモメのエサやりが楽しい大型カーフェリー「おけさ丸・ときわ丸」。朱鷺（トキ）の舞う佐渡島。両津港周辺の椎崎温泉。",
    "spots": "新潟港佐渡汽船ターミナル、両津港ターミナル、佐渡金山、たらい舟力屋観光汽船、椎崎温泉",
    "access": "JR新潟駅より路線バス約15分。",
    "tip": "カーフェリーの展望デッキでは、新潟港出航後にウミネコが船の周りを併走するため、専用のかっぱえびせんを手から直接あげる体験が大人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-cyan-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-blue-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            LUXURY CRUISE & FERRY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【優雅な船旅・長距離カーフェリー＆離島航路】太平洋・日本海クルーズ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed">
            大海原を滑るように進み、海上の大浴場から水平線を眺める「優雅な長距離フェリー旅」。展望レストランでのバイキングディナー、生演奏ピアノラウンジ、プライベートバルコニー付きスイートルーム。港町の極上海鮮と温泉宿で迎える至福の船旅へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-blue-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-blue-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded-full uppercase">
                    🚂 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-blue-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1.5">
                  <span className="font-bold text-blue-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
                  <span className="font-bold text-cyan-950 block text-[11px]">🚅 アクセス＆乗車ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">💡 体験を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-blue-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-blue-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    厳選ステイ
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-blue-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-blue-50 border-b border-blue-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-blue-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-blue-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-950 bg-white hover:bg-blue-50 border border-blue-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
