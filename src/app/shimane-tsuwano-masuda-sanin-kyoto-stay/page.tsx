import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【島根・津和野＆益田】山陰の小京都・掘割の錦鯉＆太皷谷稲成・石見神楽宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "武家屋敷と白壁土塀のノスタルジー・島根津和野＆益田エリア完全特化！殿町通りの掘割を泳ぐ錦鯉、千本鳥居の「太皷谷稲成神社」、森鴎外・安野光雅ゆかりの地、伝統芸能「石見神楽」、名物「うずめ飯・鮎料理宿」を徹底解説。",
  keywords: ["shimane-tsuwano-masuda-sanin-kyoto-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shimane-tsuwano-masuda-sanin-kyoto-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shimane-tsuwano-masuda-sanin-kyoto-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tsuwano_tonomachi_carp_stay",
    "title": "1. 殿町通り〜武家屋敷・カトリック教会（白壁土塀の掘割を泳ぐ錦鯉の小径）",
    "timing": "通年（6月の掘割花菖蒲・秋の紅葉とイチョウ並木）",
    "desc": "津和野で最も古い歴史を残すメインストリート「殿町通り」。白壁土塀沿いの掘割に泳ぐ数百匹の色鮮やかな錦鯉。石畳に佇むゴシック建築の「津和野カトリック教会（畳敷きの聖堂）」。森鴎外記念館や安野光雅美術館。",
    "spots": "殿町通り（掘割の錦鯉・花菖蒲）、津和野カトリック教会、森鴎外旧居・記念館、安野光雅美術館（プラネタリウム）",
    "access": "JR山口線「津和野駅」下車徒歩約10分（SLやまぐち号停車駅）。中国道「六日市IC」より約50分。",
    "tip": "殿町通りでは、道端の無人販売所で「鯉のエサ」が販売されており、エサを投げ入れると無数の大きな錦鯉が集まってくる様子を楽しめます。"
  },
  {
    "key": "taikodani_inari_tsuwano_stay",
    "title": "2. 太皷谷稲成神社〜津和野城跡（約1000本の朱塗り鳥居トンネルと天空パノラマ）",
    "timing": "通年（元旦の初詣・夜の千本鳥居ライトアップ）",
    "desc": "日本五大稲荷の一つに数えられる「太皷谷稲成神社（たいこだにいなりじんじゃ）」。山麓から本殿へ続く約1,000本の朱塗りの千本鳥居のトンネル。津和野城跡観光リフトで登る山頂からの石州瓦が広がる津和野盆地パノラマ。",
    "spots": "太皷谷稲成神社（千本鳥居・油揚げのお供え）、津和野城跡（観光リフト・本丸石垣・出雲峠）、鷲原八幡宮（流鏑馬馬場）",
    "access": "津和野駅より車約5分、徒歩約20分。",
    "tip": "太皷谷稲成神社では、全国でも珍しく「稲荷」ではなく「稲成」と書き、「願い事が成就する」ご利益があるとして親しまれています。"
  },
  {
    "key": "iwami_kagura_uzumemeshi_stay",
    "title": "3. 伝統芸能「石見神楽」＆清流高津川の天然鮎（大迫力の大蛇退治と郷土の美味）",
    "timing": "通年（夏の鮎漁解禁：6月〜10月）",
    "desc": "日本屈指の水質を誇る清流「高津川」で育つ香ばしい天然鮎の塩焼き。ご飯の下に煮た野菜や豆腐を埋めて熱い出汁をかける津和野伝統の「うずめ飯」。金糸銀糸の豪華な衣装と面をつけた演者が舞う大迫力の「石見神楽（大蛇・恵比寿）」。",
    "spots": "津和野駅前石見神楽定期公演、高津川鮎料理店、三澤酒造・古橋酒造（地酒初陣）",
    "access": "津和野・益田エリア。",
    "tip": "石見神楽の「大蛇（おろち）」の演目では、何頭もの巨大な蛇が煙を吐きながらステージ狭しと暴れ回る圧巻のパフォーマンスを間近で体感できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TSUWANO & MASUDA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【島根・津和野＆益田】山陰の小京都・掘割の錦鯉＆太皷谷稲成・石見神楽宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            山あいに佇む赤い石州瓦と白壁の城下町「山陰の小京都・津和野」。殿町通りの掘割を悠々と泳ぐ色鮮やかな錦鯉。朱塗りの千本鳥居が連なる太皷谷稲成神社。夜には大迫力の伝統芸能「石見神楽」を鑑賞し、素朴な郷土料理を味わう旅。
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
