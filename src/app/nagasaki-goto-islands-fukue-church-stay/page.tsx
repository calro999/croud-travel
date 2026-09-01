import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長崎・五島列島（福江島＆上五島）】世界遺産潜伏キリシタン教会群・高浜ビーチ＆五島うどん宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "西海の祈りと碧き海・長崎五島列島エリア完全特化！世界遺産「長崎と天草地方の潜伏キリシタン関連遺産（頭ヶ島天主堂・江上天主堂・堂崎天主堂）」、日本一美しい白砂「高浜海水浴場」、名物「五島うどん・幻の五島牛宿」を徹底解説。",
  keywords: ["nagasaki-goto-islands-fukue-church-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagasaki-goto-islands-fukue-church-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagasaki-goto-islands-fukue-church-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "fukue_goto_resort_hotel_stay",
    "title": "1. 福江島〜堂崎天主堂・高浜海水浴場・鬼岳（祈りの歴史とエメラルドの海）",
    "timing": "通年（夏の海水浴・春〜秋の教会巡りドライブ）",
    "desc": "五島列島最大の島「福江島」。赤レンガ造りの美しい「堂崎天主堂」。日本一美しい白砂とエメラルドグリーンの遠浅グラデーションが広がる「高浜海水浴場」。芝生に覆われた臼状の火山「鬼岳（おんだけ・満天の星空）」。大瀬崎断崖と灯台。",
    "spots": "堂崎天主堂、高浜海水浴場（日本の渚百選）、鬼岳（鬼岳天文台）、大瀬崎灯台（日本の夕陽百選）、武家屋敷通り",
    "access": "長崎空港または福岡空港より飛行機で約30〜40分（五島つばき空港）。長崎港よりジェットフォイルで約85分。",
    "tip": "「大瀬崎灯台」の展望デッキから望む東シナ海に沈む夕陽は、断崖絶壁に打ち寄せる白波と相まって息を呑む絶景です。"
  },
  {
    "key": "kamigoto_church_bay_stay",
    "title": "2. 上五島（新上五島町）〜頭ヶ島天主堂・青砂ヶ浦天主堂（世界遺産の石造り教会）",
    "timing": "通年（教会見学は事前連絡・マナー遵守）",
    "desc": "世界文化遺産に登録された全国的にも珍しい石造りの「頭ヶ島（かしらがしま）天主堂（花の御堂）」。国指定重要文化財「青砂ヶ浦天主堂」。教会が立ち並ぶ穏やかな入江。矢堅目の奇岩と東シナ海の塩作り。",
    "spots": "世界遺産 頭ヶ島天主堂、青砂ヶ浦天主堂、矢堅目公園（矢堅目の塩本舗）、奈良尾のアコウ樹（国天然記念物）",
    "access": "福江港より高速船で約30〜45分（奈良尾港・有川港）、または長崎港・佐世保港よりフェリー・高速船。",
    "tip": "頭ヶ島天主堂の内部には五島特産の椿の花をモチーフにした彫刻（花十字紋）が無数に施されており、可憐で温かな祈りの空間が広がります。"
  },
  {
    "key": "goto_udon_beef_seafood_stay",
    "title": "3. 日本三大うどん「五島手延うどん」＆幻の五島牛（椿油とあごだしの伝統）",
    "timing": "通年（冬の熱々地獄炊き・夏の冷やしぶっかけ）",
    "desc": "五島特産の椿油を塗って熟成させながら延ばす細麺の「五島手延うどん」。茹でたての麺を大鍋から直接すくい、焼きあご（トビウオ）出汁のつゆや生卵で食べる「地獄炊き」。年間出荷頭数が少なく幻と呼ばれる「五島牛」ステーキ。",
    "spots": "うどん茶屋 遊麺（有川）、五島牛指定焼肉店、五島市内の割烹・寿司店",
    "access": "五島列島全域。",
    "tip": "「地獄炊きうどん」は椿油が練り込まれているため煮崩れせず、ツルツルとした喉越しとコシの強さがあご出汁と完璧にマッチします。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            GOTO ISLANDS & HERITAGE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長崎・五島列島（福江島＆上五島）】世界遺産潜伏キリシタン教会群・高浜ビーチ＆五島うどん宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            エメラルドグリーンの東シナ海に浮かぶ祈りの島々「五島列島（福江島・上五島）」。海辺や岬に佇む美しいレンガ造り・石造りの教会群。日本一の美しさを誇る高浜ビーチ。椿油を練り込んだ喉越しの良い日本三大うどん「五島手延うどん」と幻の五島牛を味わう旅。
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
