import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山形・蔵王温泉】樹氷スノーモンスター・強酸性硫黄泉＆山形牛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "山形・蔵王温泉エリア完全特化！大迫力の「蔵王樹氷（スノーモンスター）」ライトアップ、開湯1900年の強酸性白濁硫黄泉、蔵王ロープウェイ、名物玉こんにゃく・山形牛すき焼きと老舗温泉宿を徹底解説。",
  keywords: ["yamagata-zao-onsen-frost-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamagata-zao-onsen-frost-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamagata-zao-onsen-frost-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "zao_frost_monster_view",
    "title": "1. 蔵王ロープウェイ〜山頂線（世界に誇る奇跡の造形美「樹氷スノーモンスター」）",
    "timing": "冬期（1月〜2月の樹氷最盛期・ナイトクルーザー号夜間ライトアップ鑑賞）",
    "desc": "蔵王の特殊な気候条件とアオモリトドマツが生み出す自然の芸術「樹氷（スノーモンスター）」。蔵王ロープウェイ山頂駅（標高1,661m）から見下ろす一面の白銀モンスター群。夜間は色彩豊かな光でライトアップ。",
    "spots": "蔵王ロープウェイ（山麓線・山頂線）、地蔵山頂駅（蔵王地蔵尊）、樹氷幻想回廊ツアー（雪上車ナイトクルーザー号）",
    "access": "JR山形新幹線「山形駅」より山交バス「蔵王温泉行き」で約45分終点下車。各宿送迎あり。",
    "tip": "樹氷ナイトクルーザー号は暖房付き雪上車で夜の樹氷原を間近に巡る大人気ツアー。事前予約が必須です。"
  },
  {
    "key": "zao_sulfur_hotspring",
    "title": "2. 蔵王温泉街・高湯通り（pH1.5の強酸性白濁硫黄泉と三つの共同浴場めぐり）",
    "timing": "通年（冬の雪見風呂・春夏のトレッキング）",
    "desc": "1900年の歴史を持つ「蔵王温泉」。強酸性の硫黄泉は肌の古い角質を落とし血管を若返らせる「美肌と健康の湯」。湯の香が立ち込める高湯通りを木下駄で散策し、「上湯」「下湯」「川原湯」の共同浴場を巡る。",
    "spots": "高湯通り、共同浴場（上湯・下湯・川原湯）、蔵王温泉大露天風呂（春〜秋営業）、酢川温泉神社",
    "access": "蔵王温泉バスターミナルより徒歩約3〜8分。",
    "tip": "「蔵王温泉大露天風呂」は一度に200人入れる巨大な渓流沿い野天風呂で、森林浴と白濁湯を同時に楽しめます。"
  },
  {
    "key": "zao_yamagatagyu_gourmet",
    "title": "3. 山形牛ステーキ＆名物玉こんにゃく（本場芋煮鍋と山形の地酒）",
    "timing": "通年（秋の山形芋煮・冬の熱々すき焼き）",
    "desc": "厳しい寒暖差が育む極上の霜降り肉「山形牛」。蔵王の老舗宿でいただくすき焼きや陶板焼き。温泉街の店頭で醤油ダレが染み込んだ熱々の「玉こんにゃく」や、里芋と牛肉がたっぷり入った山形名物「芋煮鍋」を堪能。",
    "spots": "高湯堂（湯旅屋・お土産）、音茶屋（蔵王カフェ）、ZAO CENTER PLAZA",
    "access": "温泉街中心部。",
    "tip": "湯上がりに「湯旅屋 高湯堂」でいただく蔵王温泉水サイダーや地ビールが観光客に大人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ZAO SNOW MONSTER GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山形・蔵王温泉】樹氷スノーモンスター・強酸性硫黄泉＆山形牛極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高約900m、蔵王連峰の懐に湧く「蔵王温泉」。日本屈指の強酸性白濁硫黄泉が古くから皮膚病や美肌に効く名湯として愛される。冬には世界中から人々が訪れる奇跡の「樹氷（スノーモンスター）」と山形牛の饗宴。
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
