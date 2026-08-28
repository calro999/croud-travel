import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【本格湯治場】源泉かけ流し＆効能抜群の名湯秘湯旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "温泉の真髄を味わう！秋田・玉川温泉（強酸性ラジウム湯治）、青森・酸ヶ湯温泉（ヒバ千人風呂）、栃木・那須湯本（鹿の湯）、長野・野沢温泉（13の外湯めぐり）など、歴史ある本物の名湯宿を徹底解説。",
  keywords: ["autumn-winter-hot-spring-cure", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-hot-spring-cure"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-hot-spring-cure", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tamagawa_onsen",
    "title": "1. 秋田・八幡平玉川温泉（pH1.2！日本一の強酸性と天然岩盤浴の奇跡）",
    "timing": "通年（湯治・保養）",
    "desc": "塩酸を主成分とする日本一の強酸性泉とラジウム放射線を含む奇跡の名湯。天然の地熱を利用した屋外岩盤浴場には全国から湯治客が集まります。体の免疫力を高める本格的な健康・保養ステイに最適。",
    "spots": "玉川温泉大墳（源泉湧出地）、八幡平アスピーテライン、田沢湖、抱返り渓谷",
    "access": "秋田新幹線「田沢湖駅」より路線バス「急行玉川温泉行き」で約80分。",
    "tip": "強酸性のため入浴は源泉50%浴槽から徐々に慣らすのがルール。湯治専門の看護師や相談窓口があり長期滞在者も安心です。"
  },
  {
    "key": "sukayu_onsen",
    "title": "2. 青森・八甲田山酸ヶ湯温泉（160畳の総ヒバ造り大浴場「ヒバ千人風呂」）",
    "timing": "通年（冬は白銀の豪雪と混浴名湯）",
    "desc": "開湯300年、国民保養温泉地第1号に指定された八甲田の秘湯。柱が1本もない160畳の巨大な木造浴室「ヒバ千人風呂」には、熱湯・四分六分の湯・鹿の湯滝など複数の源泉が自噴しています。",
    "spots": "八甲田ロープウェー（樹氷鑑賞）、奥入瀬渓流（冬の氷瀑）、城ヶ倉大橋",
    "access": "JR青森駅・新青森駅よりJRバス「みずうみ号」で約70分（酸ヶ湯温泉前下車）。",
    "tip": "名物の千人風呂は混浴ですが女性専用時間（朝・夜）が設けられており、女性専用の小浴場「玉の湯」も完備されています。"
  },
  {
    "key": "nasu_shikano_onsen",
    "title": "3. 栃木・那須湯本温泉（開湯1300年！白濁硫黄泉の名名湯「鹿の湯」）",
    "timing": "通年（秋の紅葉・冬の雪景色）",
    "desc": "傷ついた鹿が傷を癒やしたことから名付けられた那須最古の源泉「鹿の湯」。41度から48度まで区切られた木造浴槽で「短時間入浴（かぶり湯）」を行う伝統の入浴法で、神経痛や冷え性に絶大な効能を誇ります。",
    "spots": "元湯 鹿の湯、殺生石、那須温泉神社、殺生石木道、那須高原展望台",
    "access": "東北新幹線「那須塩原駅」より東野バスで約50分（那須湯本温泉下車）。",
    "tip": "那須湯本温泉街の民宿や旅館に宿泊すると、鹿の湯と同じ極上の白濁硫黄泉を内湯で24時間楽しむことができます。"
  },
  {
    "key": "nagano_nozawa_onsen",
    "title": "4. 長野・信州野沢温泉（村人が守る13の外湯めぐりと湧き出る麻釜）",
    "timing": "通年（冬はスキー＆外湯めぐりが大人気）",
    "desc": "天然温泉100%かけ流しの共同浴場（外湯）が村内に13箇所点在する野沢温泉。名物「大湯」をはじめとする歴史ある湯屋を巡り、90度以上の源泉「麻釜（おがま）」で作る温泉卵や名物の野沢菜漬けを堪能できます。",
    "spots": "野沢温泉13外湯（大湯・麻釜の湯等）、麻釜熱泉湧出地、野沢温泉スキー場、岡本太郎記念碑",
    "access": "北陸新幹線「飯山駅」より直行バス「野沢温泉ライナー」で約25分。",
    "tip": "外湯は地元「湯仲間」の好意で無料開放（寸志箱あり）されています。マナーを守って清掃協力金を納めて入浴しましょう。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TRADITIONAL TOJI SPA
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【本格湯治場】源泉かけ流し＆効能抜群の名湯秘湯旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            何百年も人々の体を癒やし続けてきた奇跡の湯治場（とうじば）。加水・加温一切なしの圧倒的な源泉力、硫黄香る白濁湯、歴史ある木造大浴場で、日頃の疲れを根底から解きほぐす本格温泉ステイ。
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
