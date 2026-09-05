import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【岐阜・下呂温泉＆馬瀬川】日本三名泉美肌の湯・飛騨牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "有馬・草津と並ぶ日本三名泉「下呂温泉」の絹のような美肌湯、飛騨川沿いの温泉街そぞろ歩き、最高級A5等級飛騨牛の極上懐石、清流馬瀬川の天然鮎と合掌造りを徹底解説。老舗名旅館や展望露天風呂宿を厳選。",
  keywords: ["gifu-gero-onsen-hida-river-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gifu-gero-onsen-hida-river-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gifu-gero-onsen-hida-river-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "gero_three_famous_spring_stay",
    "badge": "日本三名泉の極上美肌湯",
    "title": "1. 下呂温泉街〜飛騨川・噴泉池＆足湯巡り（とろりと肌を包み込む美肌の湯）",
    "timing": "通年（冬の雪景色と花火ミュージカル、春の桜並木、秋の紅葉散策）",
    "desc": "飛騨川を中心に広がる風情ある下呂温泉街。アルカリ性のまろやかな泉質は角質を取り除き、湯上がり後は吸い付くような潤い肌に。温泉街には無料の足湯が点在し、飛騨川の河原にあるシンボル「噴泉池」や、白鷺伝説に由来する白鷺の湯など、浴衣姿での散策が醍醐味です。",
    "spots": "飛騨川河川敷・噴泉池、白鷺の湯、足湯めぐり（さるぼぼ黄金足湯・モリの足湯等）、下呂温泉神社、医王霊山温泉寺",
    "access": "JR高山本線「下呂駅」下車徒歩すぐ（名古屋駅より特急ワイドビューひだで約1時間40分）。中央道「中津川IC」より約60分。",
    "tip": "加盟旅館の湯を3箇所巡ることができる「湯めぐり手形」を使えば、名門旅館の個性豊かな大浴場や展望露天風呂をお得に堪能できます。"
  },
  {
    "key": "gero_hida_beef_gourmet_stay",
    "badge": "とろけるA5飛騨牛の極み",
    "title": "2. 飛騨牛づくし会席＆朴葉味噌焼き（霜降りの甘みと郷土の香ばしい味覚）",
    "timing": "通年（冬の飛騨牛すき焼き・しゃぶしゃぶ、春〜秋の炭火ステーキ）",
    "desc": "きめ細やかな霜降りと芳醇な香りを誇る岐阜が誇るブランド牛「飛騨牛」。下呂の宿では、A5等級のサーロインステーキ、口の中でとろける握り寿司、そして乾燥した朴の葉に自家製味噌と飛騨牛・キノコを乗せて炭火で焼く郷土料理「朴葉味噌焼き」など、至高の美食が並びます。",
    "spots": "各料亭旅館の個室食事処、湯島庵（飛騨牛霜降りにぎり寿司）、下呂プリン、千寿堂（栃の実せんべい）",
    "access": "下呂温泉街中心部。",
    "tip": "下呂温泉街で食べ歩きできる「飛騨牛にぎり寿司」は、お皿代わりの海老せんべいに乗せて提供され、手軽に贅沢な味を楽しめます。"
  },
  {
    "key": "maze_river_clear_stream_stay",
    "badge": "日本屈指の清流と合掌の情景",
    "title": "3. 馬瀬川の清流・天然鮎＆下呂温泉合掌の里（里山の原風景と伝統木造美）",
    "timing": "通年（初夏〜秋の馬瀬川天然鮎・友釣り、合掌の里の四季折々の草花）",
    "desc": "「日本で最も美しい村」連合に加盟する下呂市馬瀬（まぜ）。清流・馬瀬川で育つ天然鮎は日本一の香りと味と評されます。また白川郷などから移築された合掌造り民家が並ぶ「下呂温泉合掌の里」では、国の重要文化財・旧大戸家住宅の見学や陶芸・和紙絵すき体験が楽しめます。",
    "spots": "下呂温泉合掌の里（旧大戸家住宅・影絵劇場しらさぎ座）、馬瀬川清流ロード、美輝の里（馬瀬温泉）、飛騨金山巨石群",
    "access": "合掌の里へは下呂駅よりバスで約6分。馬瀬エリアへは下呂駅より車で約25分。",
    "tip": "合掌の里内の合掌造り休憩処「市倉」では、炭火でじっくり焼いた川魚の塩焼きや五平餅を囲炉裏端で味わえます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            GERO ONSEN & HIDA RIVER GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【岐阜・下呂温泉＆飛騨川・馬瀬川】日本三名泉美肌の湯・飛騨牛懐石＆合掌の里宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            室町時代の儒学者・万里集九や江戸幕府の儒官・林羅山によって「日本三名泉」と称えられた天下の名湯「下呂温泉」。pH9を超えるアルカリ性単純温泉は、浸かった瞬間に肌がツルツルになる天然の石鹸のような美肌効果を誇ります。飛騨川のせせらぎ、湯けむり立ち上る足湯巡り、そして舌の上でとろける飛騨牛の贅を味わう至高の岐阜ステイへご案内します。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
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
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
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
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
                          >
                            ✈️ 楽天トラベルで宿泊プラン・空室を見る
                          </a>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
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
