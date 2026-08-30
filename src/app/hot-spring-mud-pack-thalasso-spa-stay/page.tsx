import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【温泉泥パック＆タラソテラピー宿】天然クレイ泥湯・海洋深層水スパ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "天然の美容成分を肌に塗る極上スパ温泉宿完全特化！鹿児島霧島・別府の「天然温泉泥パック（泥湯）」、沖縄・南房総の「海洋深層水タラソテラピー」、ミネラル豊富な海藻パック、シルクのような美肌温泉を徹底解説。",
  keywords: ["hot-spring-mud-pack-thalasso-spa-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hot-spring-mud-pack-thalasso-spa-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hot-spring-mud-pack-thalasso-spa-stay", e);
  }
  return {};
}

export default function WellnessRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kirishima_beppu_mud_onsen_stay",
    "title": "1. 霧島＆別府・天然温泉泥パック（顔から全身に塗って乾かす天然エステ）",
    "timing": "通年（古い角質を吸着し陶器のような滑らか肌へ）",
    "desc": "源泉底に沈む天然の泥（クレイ）をすくい上げて楽しむ「天然泥湯」。鹿児島・霧島の「さくらさくら温泉」では、乳白色の泥を顔や全身に塗り、乾いた後に温泉で洗い流す天然パックが大人気。別府「別府温泉保養ランド」の鉱泥温泉。",
    "spots": "霧島温泉（さくらさくら温泉・泥パック露天風呂）、別府温泉保養ランド（紺屋地獄泥湯）",
    "access": "鹿児島空港より車・バス約35分、JR別府駅よりバス約25分。",
    "tip": "泥パックを塗った後は、完全に乾くまで5〜10分ほど日光や外気に当ててから温泉で優しく洗い流すと、毛穴の汚れがスッキリ落ちて肌がワントーン明るくなります。"
  },
  {
    "key": "thalasso_sea_water_spa_stay",
    "title": "2. 海洋深層水タラソテラピー（温かい海水の浮力とジェット水流マッサージ）",
    "timing": "通年（運動不足解消・全身のリンパ循環促進）",
    "desc": "古代ギリシャ発祥の海洋療法「タラソテラピー」。体温に近い36度に温められた新鮮な海洋深層水のプールで、ジェット水流を受けながら歩行運動。海藻や海泥（アルゴパック）を用いたミネラルトリートメント。",
    "spots": "沖縄（ザ・テラスクラブ アット ブセナ）、南房総（鴨川）、高知（室戸海洋深層水スパ）",
    "access": "海沿いのラグジュアリーリゾートホテル。",
    "tip": "タラソプールは水着着用で利用でき、運動が苦手な方でも浮力のおかげで関節に負担をかけずに全身を心地よくほぐすことができます。"
  },
  {
    "key": "silky_sulfur_beauty_skin_stay",
    "title": "3. 超高濃度炭酸泉＆シルキーマイクロバブル（血管を広げ血行を促進する奇跡の泡）",
    "timing": "通年（冷え性・むくみ・疲労回復）",
    "desc": "お湯1リットルに1,000ppm以上の炭酸ガスが溶け込んだ「高濃度炭酸泉」。肌に無数の微細な気泡が付着し、毛細血管を拡張して血流を劇的に改善。超微細気泡で毛穴の奥まで洗浄するシルキーバスと、名湯の至福。",
    "spots": "大分（長湯温泉・ラムネ温泉館）、岐阜（下島温泉）、全国の高級スパ旅館",
    "access": "全国の炭酸泉・美肌温泉地。",
    "tip": "長湯温泉の「ラムネ温泉館」では、銀色の泡が全身を包み込む32度のぬる湯源泉と、41度のにごり湯の内湯を交互に入る「温冷交代浴」が最高です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MUD PACK & THALASSO SPA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【温泉泥パック＆タラソテラピー宿】天然クレイ泥湯・海洋深層水スパ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            大地のミネラルを全身で吸収する奇跡の美容温泉！霧島や別府の底からすくい上げるクリーミーな「天然温泉泥パック」。海の生命力で細胞を活性化する「海洋深層水タラソテラピー」。エステ要らずのツルツル美肌へ導くビューティーステイ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* プログラム内容・ロケーション・ととのうコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要エリア＆専門プログラム</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆おすすめロケーション</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 リトリート効果を高めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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
