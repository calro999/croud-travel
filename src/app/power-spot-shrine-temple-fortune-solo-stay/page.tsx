import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【寺社・パワースポット巡り＆開運祈願宿】縁結び・厄除け・浄化ひとり旅 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "心を整え運気を高める開運ひとり旅！パワースポット＆寺社巡り拠点宿完全特化！出雲大社、伊勢神宮、日光東照宮、箱根神社九頭龍神社、早朝参拝・ご祈祷対応、精進料理＆温泉浄化宿を徹底解説。",
  keywords: ["power-spot-shrine-temple-fortune-solo-stay", "女性一人旅", "ソロ活", "ご褒美ステイ", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["power-spot-shrine-temple-fortune-solo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for power-spot-shrine-temple-fortune-solo-stay", e);
  }
  return {};
}

export default function WomenSoloRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "izumo_taisha_enmusubi_stay",
    "title": "1. 出雲大社〜神門通り・玉造温泉（八百万の神が集う日本一の縁結び聖地）",
    "timing": "通年（旧暦10月・11月の「神在月」は全国の神々が集結）",
    "desc": "大国主大神を祀る縁結びの総本社「出雲大社（いづもおおやしろ）」。重さ5.2トンの大注連縄が圧巻の神楽殿。日本最古の美肌温泉「玉造温泉（美肌作用の硫酸塩泉）」。勾玉作り体験や、うさぎの石像巡り。",
    "spots": "出雲大社（本殿・神楽殿・十九社・素鵞社）、稲佐の浜（国譲り神話の砂浜）、玉造温泉（湯薬師広場・玉作湯神社）、日御碕神社",
    "access": "一畑電車「出雲大社前駅」下車。出雲縁結び空港より連絡バス約40分。",
    "tip": "稲佐の浜で採取した清めの砂を持参して出雲大社本殿裏の「素鵞社（そがのやしろ）」の砂と交換し、自宅のお守りや敷地にまくと強力な厄除けご利益があるとされています。"
  },
  {
    "key": "ise_jingu_early_morning_stay",
    "title": "2. 伊勢神宮（内宮・外宮）〜おはらい町（日本人の心のふるさと早朝参拝）",
    "timing": "通年（澄み切った早朝5時の開門直後参拝は格別の神聖さ）",
    "desc": "天照大御神を祀る皇大神宮「内宮」と豊受大御神の「外宮」。五十鈴川の御手洗場で手を清め、宇治橋を渡る神聖な空気。おかげ横丁での赤福本店・伊勢うどん。内宮まで徒歩数分の宿に泊まるからこそ叶う静寂の早朝参拝。",
    "spots": "伊勢神宮（内宮・外宮・風日祈宮）、五十鈴川御手洗場、おはらい町・おかげ横丁（赤福本店・豚捨）、猿田彦神社（みちひらきの神）",
    "access": "近鉄「宇治山田駅」「伊勢市駅」「五十鈴川駅」より路線バス。",
    "tip": "内宮の早朝参拝（日の出前〜朝7時頃）は、日中の混雑が嘘のように静まり返り、巨木に差し込む朝の光芒と五十鈴川のせせらぎだけが響く神秘的な時間を独占できます。"
  },
  {
    "key": "hakone_kuzuryu_power_spot_stay",
    "title": "3. 箱根神社＆九頭龍神社本宮〜芦ノ湖（湖上の平和の鳥居と金運・縁結び祈願）",
    "timing": "通年（毎月13日の九頭龍神社月次祭・辰年の参拝人気）",
    "desc": "芦ノ湖の水中に朱塗りの鳥居が立つ「箱根神社（平和の鳥居）」。境内奥の九頭龍神社新宮。芦ノ湖畔の森の中に鎮座する「九頭龍神社本宮（縁結び・金運のパワースポット）」。駒ヶ岳ロープウェイで登る山頂の「箱根元宮（天空の社）」。",
    "spots": "箱根神社（平和の鳥居・龍神水）、九頭龍神社本宮（白龍神社・箱根樹木園）、箱根元宮（駒ヶ岳山頂）、箱根権現の森",
    "access": "箱根登山バス「元箱根港」下車。九頭龍神社本宮へはモーターボートまたは遊歩道徒歩約30分。",
    "tip": "箱根神社境内で汲める「龍神水」はお持ち帰り用のペットボトルも用意されており、口に含むと一切の不浄を洗い流して運気を呼び込むと言われています。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-rose-950 via-pink-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-rose-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-rose-300 to-pink-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            POWER SPOT & FORTUNE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【寺社・パワースポット巡り＆開運祈願宿】縁結び・厄除け・浄化ひとり旅 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-pink-100/90 leading-relaxed">
            凛とした神域の空気に包まれ、日々の感謝と願いを捧げる「寺社・パワースポット巡り宿」。出雲大社の早朝参拝、伊勢神宮の御垣内参拝、箱根九頭龍神社の月次祭。清らかな温泉で心身を清め、運気を呼び込む開運ステイへ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-rose-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-0.5 rounded-full uppercase">
                    🌸 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-rose-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-1.5">
                  <span className="font-bold text-pink-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">💡 ひとり旅を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ソロステイ宿カード */}
              <div className="space-y-4 pt-4 border-t border-rose-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-rose-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    女性歓迎プラン
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-rose-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-rose-50 border-b border-rose-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-rose-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-rose-300 px-2 py-0.5 rounded border border-rose-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-rose-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-rose-950 bg-white hover:bg-rose-50 border border-rose-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
