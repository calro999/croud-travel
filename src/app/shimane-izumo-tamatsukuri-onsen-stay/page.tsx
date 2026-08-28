import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【島根・出雲大社＆玉造温泉】神話と縁結び・日本最古の美肌温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "神々の国・島根出雲＆玉造温泉エリア完全特化！縁結びの総本山「出雲大社」、日本最古の美肌温泉「玉造温泉（美肌の湯）」、宍道湖の夕日、名物出雲そば・しまね和牛・のどぐろ会席宿を徹底解説。",
  keywords: ["shimane-izumo-tamatsukuri-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shimane-izumo-tamatsukuri-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shimane-izumo-tamatsukuri-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "izumo_taisha_walk",
    "title": "1. 出雲大社〜神門通り・稲佐の浜（大注連縄と神々をお迎えする海岸参拝）",
    "timing": "通年（旧暦10月の神在月・秋の神在祭）",
    "desc": "日本屈指のパワースポット「出雲大社」。神楽殿の大注連縄（長さ13.6m、重さ5.2トン）の圧倒的存在感。神門通りでの名物「割子そば」食べ歩きや、八百万の神々をお迎えする「稲佐の浜」での夕日鑑賞。",
    "spots": "出雲大社（御本殿・神楽殿・宝物殿）、神門通り（出雲そば・ぜんざい発祥の地）、稲佐の浜（弁天島・夕日百選）、古代出雲歴史博物館",
    "access": "一畑電車「出雲大社前駅」下車徒歩約5分。JR出雲市駅より路線バス約25分。",
    "tip": "出雲大社の参拝作法は「二礼・四拍手・一礼」。稲佐の浜の砂をいただいて出雲大社の素鵞社（そがのやしろ）の砂と交換する清めの参拝がおすすめです。"
  },
  {
    "key": "tamatsukuri_bihada_onsen",
    "title": "2. 玉造温泉街・玉湯川（製薬会社が絶賛した天然の化粧水温泉と足湯めぐり）",
    "timing": "通年（春の玉湯川沿い桜並木ライトアップ・夜の竹灯籠）",
    "desc": "美肌作用の高い硫酸塩泉と保湿効果の高い塩化物泉が理想的なバランスで混ざる「玉造温泉」。玉湯川沿いの足湯や、美肌温泉水を専用ボトルに汲んで持ち帰れる「湯薬師広場」、勾玉作りの歴史に触れる。",
    "spots": "玉作湯神社（願い石・叶い石）、湯薬師広場（美肌温泉水ボトル）、玉造温泉ゆ〜ゆ、足湯（川床足湯）",
    "access": "JR山陰本線「玉造温泉駅」より車・バスで約5分。各旅館の送迎バスあり。",
    "tip": "「玉作湯神社」では、授与所で「叶い石」を授かり、境内の「願い石」に重ねてお祈りすると自分だけのお守りを作ることができます。"
  },
  {
    "key": "shinji_lake_sunset_seafood",
    "title": "3. 宍道湖の夕日＆山陰美食（のどぐろ・しまね和牛・宍道湖七珍）",
    "timing": "通年（日本の夕日百選に選ばれる宍道湖サンセット）",
    "desc": "刻一刻と空と湖面が茜色から紫へと染まる「宍道湖の夕日」。日本海の赤い宝石「のどぐろ」の塩焼きや煮付け、きめ細かな霜降りの「しまね和牛」、宍道湖名物のしじみ汁など山陰の極上美食を堪能。",
    "spots": "宍道湖夕日スポット（とるぱ・袖師地蔵）、宍道湖遊覧船はくちょう号、島根県立美術館",
    "access": "玉造温泉より宍道湖畔まで車で約10分。",
    "tip": "「島根県立美術館」はロビーが日没後まで開放されており、絵画のような宍道湖の夕日をガラス越しに鑑賞できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            IZUMO TAISHA & TAMATSUKURI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【島根・出雲大社＆玉造温泉】神話と縁結び・日本最古の美肌温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            八百万の神々が集う聖地「出雲大社」。参拝後は『出雲国風土記』に「一度洗えば容貌美麗になり、再び浴すれば万病治る」と記された神の湯「玉造温泉」へ。美肌温泉と山陰の幸に癒やされる縁結びの旅。
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
