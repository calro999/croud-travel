import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大分・別府八湯＆別府地獄めぐり】海地獄・血の池地獄＆地獄蒸し極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本一の湧出量・別府温泉郷エリア完全特化！海地獄・血の池地獄など7つの別府地獄めぐり、鉄輪温泉の湯けむり展望台、地獄蒸し料理体験、砂湯と老舗温泉旅館を徹底解説。",
  keywords: ["oita-beppu-hell-hotspring-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["oita-beppu-hell-hotspring-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for oita-beppu-hell-hotspring-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "beppu_kannawa_steam",
    "title": "1. 鉄輪（かんなわ）温泉街（もうもうと立ち上る湯けむりと伝統の地獄蒸し）",
    "timing": "通年（夜の湯けむりライトアップが日本の夜景遺産認定）",
    "desc": "別府で最も温泉情緒が濃厚な「鉄輪温泉」。温泉の蒸気熱で野菜や海鮮、卵を一気に蒸し上げる「地獄蒸し工房鉄輪」での調理体験。石畳の小径に立ち込める湯けむりと、足蒸し・むし湯を満喫。",
    "spots": "地獄蒸し工房鉄輪、湯けむり展望台、鉄輪むし湯、ひょうたん温泉（ミシュラン三ツ星・砂湯・滝湯）",
    "access": "JR日豊本線「別府駅」西口より亀の井バスで約20分「鉄輪」下車。",
    "tip": "「湯けむり展望台」から眺める鉄輪温泉街の湯けむりと鶴見岳の夕景・夜景は、国の重要文化的景観です。"
  },
  {
    "key": "beppu_jigoku_walk",
    "title": "2. 別府地獄めぐり（コバルトブルーの海地獄から真っ赤な血の池地獄まで）",
    "timing": "通年（7つの地獄共通観覧券で完全制覇）",
    "desc": "1000年以上前から噴気や熱泥が噴出する奇勝「別府地獄めぐり」。神秘的な青さの「海地獄」、赤い粘土が沸き立つ「血の池地獄」、間欠泉が豪快に吹き上がる「龍巻地獄」など圧巻の自然現象。",
    "spots": "海地獄（国指定名勝・極楽饅頭）、血の池地獄、龍巻地獄、白池地獄、鬼石坊主地獄、かまど地獄、鬼山地獄（ワニ）",
    "access": "鉄輪バスターミナル周辺に5地獄、バス約5分の柴石エリアに2地獄が点在。",
    "tip": "海地獄の売店で販売されている「地獄蒸し焼きプリン」は、濃厚でほろ苦いカラメルが絶品の名物スイーツです。"
  },
  {
    "key": "beppu_bayside_luxury",
    "title": "3. 別府湾リバーフロント＆観海寺高台（朝日を望むインフィニティ温泉リゾート）",
    "timing": "通年（海から昇る感動の朝日サンライズ）",
    "desc": "別府湾を見下ろす高台の「観海寺温泉」や海岸沿いのラグジュアリーホテル。「杉乃井ホテル（棚湯）」をはじめ、海と空が一体になる大展望露天風呂から別府市街の夜景と朝日を一望。",
    "spots": "別府温泉 杉乃井ホテル（棚湯・アクアガーデン）、別府タワー、別府海浜砂湯、高崎山自然動物園",
    "access": "別府駅より無料シャトルバスまたはタクシー約10分。",
    "tip": "「別府海浜砂湯」では、波打ち際で温かい砂に埋もれながら潮騒を聞く唯一無二の砂湯体験ができます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            BEPPU JIGOKU MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【大分・別府八湯＆別府地獄めぐり】海地獄・血の池地獄＆地獄蒸し極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            街の至る所から立ち上る湯けむり。日本一の温泉湧出量と源泉数を誇る「おんせん県おおいた・別府」。コバルトブルーの海地獄、真っ赤な血の池地獄。地熱と温泉の圧倒的パワーに癒やされる旅。
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
