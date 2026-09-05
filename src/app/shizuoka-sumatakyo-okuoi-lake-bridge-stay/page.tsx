import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静岡・寸又峡＆奥大井湖上駅】死ぬまでに渡りたい夢の吊橋・アプト式鉄道宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "エメラルドグリーンの湖上絶景と美女づくりの湯・静岡寸又峡＆川根本町エリア完全特化！死ぬまでに一度は渡りたい「夢の吊橋」、湖に浮かぶ秘境駅「奥大井湖上駅（レインボーブリッジ）」、南アルプスあぷとライン、寸又峡温泉宿を徹底解説。",
  keywords: ["shizuoka-sumatakyo-okuoi-lake-bridge-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-sumatakyo-okuoi-lake-bridge-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-sumatakyo-okuoi-lake-bridge-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sumatakyo_dream_bridge_inn_stay",
    "title": "1. 寸又峡〜夢の吊橋（死ぬまでに渡りたい！エメラルドグリーンの絶景吊橋）",
    "timing": "通年（新緑の5〜6月・紅葉の11月上旬〜下旬）",
    "desc": "トリップアドバイザー「死ぬまでに一度は渡りたい世界の徒歩吊り橋10選」に選ばれた「夢の吊橋（長さ90m・高さ8m）」。微粒子が青い光だけを反射する奇跡のミルキーブルー湖面。橋の真ん中で願う恋愛成就。トロトロの肌触りの「美女づくりの湯」寸又峡温泉。",
    "spots": "夢の吊橋（寸又峡プロムナードコース・飛龍橋）、寸又峡温泉街（足湯カフェ・翠紅苑）、天子の遊歩道",
    "access": "大井川鐵道「千頭駅」より路線バス「寸又峡温泉行」で約40分。新東名「島田金谷IC」より約90分。",
    "tip": "夢の吊橋は一度に渡れる定員が10名のため、紅葉シーズンや連休中は一方通行規制となり、朝一番の散策が待ち時間なくおすすめです。"
  },
  {
    "key": "okuoi_lake_station_nature_stay",
    "title": "2. 奥大井湖上駅〜南アルプスあぷとライン（湖の上に浮かぶ神秘の秘境駅）",
    "timing": "通年（クールジャパンアワード受賞・錦秋の湖上鉄道）",
    "desc": "ダム湖「接岨湖（せっそこ）」に突き出た半島状の尾根に位置する奇跡の絶景駅「奥大井湖上駅」。湖上にかかる赤い鉄橋「奥大井レインボーブリッジ」を渡る日本唯一のアプト式歯車列車（南アルプスあぷとライン）。湖上展望所からの絶景見下ろし。",
    "spots": "奥大井湖上駅（Happy Happy Bell・レイクコテージ奥大井）、レインボーブリッジ遊歩道、奥大井湖上駅展望台",
    "access": "大井川鐵道井川線（あぷとライン）「奥大井湖上駅」下車。",
    "tip": "レインボーブリッジの線路脇には遊歩道が併設されており、湖の真上を歩いて対岸の展望所へ登ると、駅がまるで湖に浮かんでいるような絶景写真が撮れます。"
  },
  {
    "key": "kawane_green_tea_wild_game_stay",
    "title": "3. 川根名産「川根茶」＆山女魚・鹿肉ジビエ料理（大井川の豊かな大自然の恵み）",
    "timing": "通年（初初夏の茶摘み新茶・秋のジビエ鍋）",
    "desc": "山霧と澄んだ大気が育む日本屈指の高級銘茶「川根茶（かわねちゃ）」。清流で育ったヤマメやイワナの炭火塩焼き。新鮮な鹿肉や猪肉を使った特製ジビエ鍋。川根温泉の源泉かけ流し露天風呂でいただく郷土料理会席。",
    "spots": "道の駅川根温泉（ふれあいの泉）、フォーレなかかわね茶茗舘、千頭駅前のお食事処",
    "access": "川根本町・島田市川根町。",
    "tip": "「川根茶」は甘みと渋みのバランスが秀逸で、茶茗舘では本格的な茶室で一煎目・二煎目・三煎目と味わいの変化を楽しむ呈茶体験ができます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SUMATAKYO & OKUOI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【静岡・寸又峡＆奥大井湖上駅】死ぬまでに渡りたい夢の吊橋・アプト式鉄道宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            チンダル現象が生み出す息を呑むエメラルドグリーンの水面「寸又峡・夢の吊橋」。揺れる橋の中央で祈ると恋が叶うという伝説。大井川のダム湖にぽっかりと浮かぶ神秘の秘境駅「奥大井湖上駅」。日本唯一のアプト式山岳鉄道。トロリとした「美女づくりの湯」で癒やされる秘境旅へ。
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
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
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
                      className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
