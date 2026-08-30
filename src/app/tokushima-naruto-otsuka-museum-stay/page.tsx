import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【徳島・鳴門＆大塚国際美術館】世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界三大潮流の渦潮と世界最大級の陶板美術館・徳島鳴門エリア完全特化！大塚国際美術館のシスティーナ礼拝堂、鳴門海峡の渦潮クルーズ、渦の道、鳴門温泉、ブランド魚「鳴門鯛・鳴門わかめ」＆阿波牛宿を徹底解説。",
  keywords: ["tokushima-naruto-otsuka-museum-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokushima-naruto-otsuka-museum-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tokushima-naruto-otsuka-museum-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "naruto_otsuka_museum_resort",
    "title": "1. 大塚国際美術館（システィーナ礼拝堂・モネの大睡蓮を原寸大再現した世界的ミュージアム）",
    "timing": "通年（鑑賞ルート約4km・1日かけてじっくり楽しむ西洋名画の世界）",
    "desc": "大塚製薬グループが設立した世界最大級の陶板名画美術館「大塚国際美術館」。バチカンの「システィーナ礼拝堂」天井画の完全立体再現や、自然光の中で鑑賞するモネの「大睡蓮」、レオナルド・ダ・ヴィンチの「最後の晩餐」修復前後比較。",
    "spots": "システィーナ・ホール、スクロヴェーニ礼拝堂、モネの池（大睡蓮）、カフェ・ド・ジヴェルニー",
    "access": "JR鳴門駅より路線バス約15分。徳島阿波おどり空港より車・バスで約30分。",
    "tip": "館内は非常に広大（展示点数1,000点以上）なため、歩きやすい靴で訪れ、途中カフェで名物スイーツを挟みながら鑑賞するのがおすすめです。"
  },
  {
    "key": "naruto_whirlpool_uzunomichi_stay",
    "title": "2. 鳴門の渦潮〜うずしおクルーズ・渦の道（最大直径20m！世界最大級の潮流）",
    "timing": "春・秋の大潮時（特に3月〜5月の大潮は年間で最もダイナミックな渦潮が発生）",
    "desc": "瀬戸内海と紀伊水道の潮位差によって発生する「鳴門の渦潮」。大鳴門橋の橋桁内に作られた遊歩道「渦の道」のガラス床から45m直下を見下ろすスリル。「うずしお観潮船（わんだーなると・アクアエディ）」で渦の真横へ接近。",
    "spots": "大鳴門橋遊歩道 渦の道、うずしお観潮船、鳴門公園（千畳敷展望台・エスカヒル鳴門）",
    "access": "鳴門北ICすぐ。鳴門公園バス停下車。",
    "tip": "渦潮は潮の満ち引きによって時間が決まっているため、訪れる前に必ず「潮見表」でその日のベストタイム（大潮・満潮・干潮）を確認しましょう。"
  },
  {
    "key": "naruto_tai_awaodori_gourmet",
    "title": "3. 激流の美味「鳴門鯛」＆阿波牛（骨にコブができるほどの激流で育つ引き締まった白身）",
    "timing": "春（「桜鯛」と呼ばれる産卵前の春が最も脂が乗る）",
    "desc": "鳴門海峡の激しい潮流を泳ぎ抜くことで「骨にコブ」ができるほど身が引き締まった「鳴門鯛」。コリコリした歯ごたえの鯛そうめんや鯛釜飯。特産「鳴門わかめ」のしゃぶしゃぶ、ホクホク甘い「鳴門金時」、ブランド黒毛和牛「阿波牛」。",
    "spots": "鳴門鯛料理店、道の駅くるくるなると（鳴門金時スイーツ）、鳴門わかめ直売所",
    "access": "鳴門市街・鳴門海峡周辺。",
    "tip": "鳴門鯛は「鯛めし」にすると、ふっくらした身と香ばしく焼いた皮の脂がご飯全体に染み渡り最高の郷土の味となります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            NARUTO & OTSUKA MUSEUM GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【徳島・鳴門＆大塚国際美術館】世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            世界の名画1,000余点を陶板で原寸大再現した「大塚国際美術館」と、世界三大潮流が巻き起こす大迫力の「鳴門の渦潮」。鳴門海峡の激流に揉まれて身が引き締まった極上の「鳴門鯛」。青い海を望む絶景オーシャンリゾートへ。
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
