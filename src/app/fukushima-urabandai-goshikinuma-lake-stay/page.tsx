import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【福島・裏磐梯＆五色沼湖沼群】エメラルドの神秘湖・磐梯山絶景＆会津山塩・高原温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "磐梯朝日国立公園の神秘の色彩グラデーション・福島裏磐梯エリア完全特化！国の名勝・ミシュラン二ツ星「五色沼湖沼群（毘沙門沼・弁天沼・青沼）」、桧原湖カヤック・ワカサギ釣り、裏磐梯温泉郷、名物「会津山塩ラーメン宿」を徹底解説。",
  keywords: ["fukushima-urabandai-goshikinuma-lake-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["fukushima-urabandai-goshikinuma-lake-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for fukushima-urabandai-goshikinuma-lake-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "urabandai_goshikinuma_resort_stay",
    "title": "1. 五色沼湖沼群〜毘沙門沼・青沼・弁天沼（ミシュラン二ツ星！神秘の色彩散策）",
    "timing": "通年（春〜秋のトレッキング・秋の紅葉・冬のスノーシュー）",
    "desc": "火山物質の微粒子や光の屈折により、沼ごとに異なる神秘的な色を見せる「五色沼湖沼群（全長約4km・片道約1時間10分の平坦な探勝路）」。ハート模様の鯉が泳ぐ「毘沙門沼（手漕ぎボート）」、鮮やかなコバルトブルーの「青沼」「るり沼」。",
    "spots": "五色沼自然探勝路（毘沙門沼・赤沼・みどろ沼・弁天沼・るり沼・青沼・柳沼）、裏磐梯ビジターセンター、諸橋近代美術館（ダリ美術館）",
    "access": "JR磐越西線「猪苗代駅」より路線バス「磐梯高原行」で約30分。磐越道「猪苗代磐梯高原IC」より約25分。",
    "tip": "五色沼自然探勝路は高低差がほとんどない整備された木道・土道のため、初心者やスニーカーでも安心して散策を楽しめます。"
  },
  {
    "key": "hibarako_lake_activity_stay",
    "title": "2. 桧原湖〜磐梯山ゴールドライン・グランデコ（湖上アクティビティと天空パノラマ）",
    "timing": "通年（夏のカヌー＆SUP・秋の紅葉ドライブ・冬のドーム船ワカサギ釣り）",
    "desc": "裏磐梯最大の湖「桧原湖（ひばらこ）」。湖上に浮かぶ小島を巡るカヤックツアーや遊覧船。冬期（11月〜3月）は暖房完備のドーム船で行うワカサギ釣り。磐梯山ゴールドラインや磐梯吾妻レークラインの爽快絶景ドライブウェイ。",
    "spots": "桧原湖遊覧船、桧原湖カヌー体験、グランデコリゾート（パノラマゴンドラ）、中津川渓谷",
    "access": "裏磐梯エリア各所。",
    "tip": "桧原湖の冬のワカサギ釣りは、竿や仕掛け・エサがすべてレンタル可能で、釣ったばかりのワカサギをその場で天ぷらにして味わえます。"
  },
  {
    "key": "aizu_yamajio_ramen_gourmet_stay",
    "title": "3. 幻の「会津山塩」＆福島牛（大塩裏磐梯温泉の源泉を煮詰めた奇跡の塩）",
    "timing": "通年（喜多方ラーメンと並ぶ福島屈指の塩ラーメン）",
    "desc": "高温の塩分濃度の高い温泉水を薪窯でじっくり煮詰めて作る伝統の「会津山塩（ミネラル豊富でまろやかな甘み）」。山塩を使った澄んだスープが絶品の「会津山塩ラーメン」。福島牛のサーロインステーキや岩魚の塩焼き。",
    "spots": "奥裏磐梯らーめんや、道の駅裏磐梯、裏磐梯のオーベルジュ・リゾート旅館",
    "access": "北塩原村・裏磐梯全域。",
    "tip": "会津山塩ラーメンは、一般的な食塩のような尖った塩辛さが一切なく、出汁の旨味と塩の甘みが溶け合った驚くほどまろやかな味わいです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            URABANDAI & GOSHIKINUMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【福島・裏磐梯＆五色沼湖沼群】エメラルドの神秘湖・磐梯山絶景＆会津山塩・高原温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            明治21年の磐梯山噴火によって生まれた奇跡の湖沼群「裏磐梯・五色沼」。コバルトブルーやエメラルドグリーンに輝く沼巡りトレッキング。磐梯山を望む桧原湖でのカヌー。大塩裏磐梯温泉の塩分濃度が高い温泉から精製される「会津山塩」と高原リゾートへ。
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
