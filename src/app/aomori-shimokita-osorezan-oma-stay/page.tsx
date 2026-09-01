import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【青森・下北半島＆恐山・大間】本州最北端大間マグロ・日本三大霊場恐山宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "本州最果ての秘境と黒いダイヤモンド・青森下北半島エリア完全特化！日本三大霊場「恐山（宇曽利湖・恐山温泉）」、本州最北端「大間崎・大間まぐろ一本釣り」、国の名勝「仏ヶ浦」、白濁硫黄泉「下風呂温泉郷宿」を徹底解説。",
  keywords: ["aomori-shimokita-osorezan-oma-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["aomori-shimokita-osorezan-oma-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for aomori-shimokita-osorezan-oma-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "osorezan_shimofuro_onsen_stay",
    "title": "1. 日本三大霊場・恐山〜宇曽利山湖・下風呂温泉（地獄と極楽が隣り合う聖地）",
    "timing": "恐山開山期間：5月1日〜10月31日（7月恐山大祭・秋の紅葉）",
    "desc": "比叡山・高野山と並ぶ日本三大霊場「恐山菩提寺」。荒涼とした岩肌から硫黄ガスが噴き出す「地獄めぐり」と、エメラルドグリーンの宇曽利山湖の「極楽浜」。境内にある4つの無料温泉浴場。文豪・井上靖が愛した名湯「下風呂温泉郷」。",
    "spots": "恐山菩提寺（地獄谷・極楽浜・三途の川・太鼓橋）、恐山境内温泉、下風呂温泉郷（海峡の湯・幻の大間鉄道アーチ橋）",
    "access": "JR大湊線「下北駅」より下北交通バス「恐山行」で約45分。",
    "tip": "恐山境内にある4つの温泉（薬師の湯・古滝の湯・冷鉱泉・花染の湯）は参拝者なら誰でも入浴でき、強い硫黄の香りと効能豊かな源泉を体感できます。"
  },
  {
    "key": "oma_tuna_cape_stay",
    "title": "2. 本州最北端・大間崎〜大間マグロ一本釣り（津軽海峡の黒いダイヤモンド）",
    "timing": "通年（大間マグロの旬：8月〜1月、特に秋冬の脂乗りは最高峰）",
    "desc": "本州最北端の碑とマグロモニュメントが立つ「大間崎」。津軽海峡を挟んで約17.5km先に北海道函館の山並みを望む絶景。荒波の中で命がけで行われる伝統の「一本釣り漁法」。赤身・中トロ・大トロが贅沢に盛られた本場の大間マグロ丼。",
    "spots": "大間崎（本州最北端の碑・大間マグロ一本釣りの町モニュメント）、大間埼灯台（弁天島）、大間温泉海峡保養センター",
    "access": "下北駅より車約60分、または函館港より津軽海峡フェリーで約90分。",
    "tip": "大間崎周辺のお食事処では、冷凍されていない一度も凍らせていない「生の大間マグロ」を味わうことができ、口の中でとろける甘みと深い旨味は格別です。"
  },
  {
    "key": "hotokegaura_mutsu_stay",
    "title": "3. 国の名勝・仏ヶ浦〜観光遊覧船（2kmにわたり林立する白緑色の巨岩群）",
    "timing": "定期観光船運行：4月中旬〜10月下旬",
    "desc": "津軽海峡の荒波と風雨が削り出した白緑色凝灰岩の奇岩が約2kmにわたって連なる国の名勝・天然記念物「仏ヶ浦（ほとけがうら）」。如来の首、五百羅漢、極楽浜などの名が付けられた巨岩。牛滝港や佐井港から出航するグラスボート遊覧船。",
    "spots": "仏ヶ浦（仏ヶ浦展望台・遊歩道・観光遊覧船）、佐井村アルサス、むつ市釜臥山展望台（光のアゲハ蝶夜景）",
    "access": "佐井港より観光遊覧船で約30分。むつ市街より車約90分。",
    "tip": "仏ヶ浦へは道路沿いの展望台から階段で降りることも可能ですが、佐井港からの観光船に乗ると海上から巨岩群の全体像と透明な海を大迫力で鑑賞できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHIMOKITA & OMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【青森・下北半島＆恐山・大間】本州最北端大間マグロ・日本三大霊場恐山宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            荒々しい津軽海峡の波頭と極楽浄土の白砂が交差する「下北半島」。硫黄の香りと風車が回る日本屈指の霊場・恐山。マグロ一本釣りの聖地・本州最北端大間崎。巨大な白緑色凝灰岩が連なる仏ヶ浦。名湯下風呂温泉で味わう本場大間マグロの旅。
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
