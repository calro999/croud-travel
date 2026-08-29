import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【香川・小豆島】エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "瀬戸内海に浮かぶオリーブの島・小豆島エリア完全特化！潮が引くと現れる恋人の聖地「エンジェルロード」、日本三大渓谷美「寒霞渓」ロープウェイ、オリーブ公園の魔法のほうき、オリーブ牛と絶景海辺温泉宿を徹底解説。",
  keywords: ["kagawa-shodoshima-olive-beach-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kagawa-shodoshima-olive-beach-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kagawa-shodoshima-olive-beach-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shodoshima_angel_road_view",
    "title": "1. エンジェルロード〜土庄港（1日2回海から現れる奇跡の砂の道と約束の丘展望台）",
    "timing": "通年（干潮時刻の前後約2時間ずつ、1日2回出現）",
    "desc": "潮の満ち引きによって海の中から現れたり消えたりする砂州「エンジェルロード（天使の散歩道）」。「大切な人と手をつないで渡ると願いが叶う」とされる恋人の聖地。小高い「約束の丘展望台」から望む瀬戸内海の多島美。",
    "spots": "エンジェルロード、約束の丘展望台（幸せの鐘・絵馬掛け）、土庄港（オリーブの王冠モニュメント）、迷路のまち",
    "access": "土庄港より車で約5分、徒歩約20分。各ホテル無料送迎あり。高松港からフェリー約60分（高速艇約35分）。",
    "tip": "エンジェルロードの渡れる時間は毎日変わるため、事前に小豆島観光協会の「潮見表」を確認してスケジュールを組みましょう。"
  },
  {
    "key": "shodoshima_olive_park_stay",
    "title": "2. 道の駅 小豆島オリーブ公園〜寒霞渓（エーゲ海のような白い風車と日本三大渓谷美）",
    "timing": "通年（秋の11月寒霞渓全山紅葉・初夏のオリーブの花）",
    "desc": "実写版『魔女の宅急便』のロケ地となった「小豆島オリーブ公園」。ほうきにまたがって白いギリシャ風車の前でジャンプする人気撮影スポット。日本三大渓谷美「寒霞渓（かんかけい）」をロープウェイで空中散歩。",
    "spots": "小豆島オリーブ公園（ギリシャ風車・オリーブ記念館・魔法のほうき無料レンタル）、寒霞渓（ロープウェイ・かわらけ投げ）、二十四の瞳映画村",
    "access": "土庄港より車で約20〜30分。路線バス「坂手線・南廻り福田線」運行。",
    "tip": "寒霞渓山頂の展望台では、円形の素焼きの「かわらけ」を輪の中に投げ入れる開運厄除けの「かわらけ投げ」に挑戦できます。"
  },
  {
    "key": "shodoshima_olive_beef_gourmet",
    "title": "3. プレミアム黒毛和牛「オリーブ牛」＆手延べそうめん（400年の伝統醤油とオリーブオイル）",
    "timing": "通年（オリーブ果実の搾り果汁で育つ讃岐牛）",
    "desc": "小豆島特産のオリーブ果実を与えて育てた極上黒毛和牛「オリーブ牛」。脂の甘みとあっさりした旨味。400年の歴史を持つ「醤の郷（ひしおのさと）」の木桶仕込み醤油や、伝統の手延べ小豆島そうめん、新鮮な地魚会席。",
    "spots": "醤の郷（丸島醤油・マルキン醤油記念館・しょうゆソフト）、小豆島手延そうめん館（箸分け体験）",
    "access": "安田・草壁エリア。",
    "tip": "マルキン醤油記念館の「しょうゆソフトクリーム」は、キャラメルやみたらし団子のようなコクのある甘みで大人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHODOSHIMA ISLAND GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【香川・小豆島】エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            温暖な瀬戸内海に浮かぶ「小豆島」。1日2回干潮時だけに現れる神秘の砂の道「エンジェルロード」。岩肌と紅葉が織りなす「寒霞渓」の絶景。オリーブの風を感じる温泉リゾートと、極上のオリーブ牛に舌鼓を打つ島旅。
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
