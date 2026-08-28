import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静岡・伊豆修善寺】竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "伊豆の小京都・修善寺温泉エリア完全特化！桂川沿いの「竹林の小径」、弘法大師開湯の「独鈷の湯」、修禅寺、朱塗りの恋の橋めぐり、天城越え本わさび丼と文化財名門旅館を徹底解説。",
  keywords: ["shizuoka-izu-shuzenji-bamboo-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-izu-shuzenji-bamboo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-izu-shuzenji-bamboo-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shuzenji_bamboo_walk",
    "title": "1. 桂川沿い・竹林の小径〜修禅寺（伊豆の小京都をめぐる恋の橋と円形ベンチ）",
    "timing": "通年（秋の紅葉・初夏の青もみじ・冬の静寂）",
    "desc": "桂川に沿って整備された石畳の散策路「竹林の小径」。中央にある竹製の円形ベンチに寝転んで見上げる竹のトンネル。弘法大師空海が開創した古刹「修禅寺」や、5つの恋の橋を渡るパワースポットめぐり。",
    "spots": "竹林の小径、独鈷の湯（とっこのゆ・伊豆最古の温泉）、福地山修禅寺、恋の橋めぐり（桂橋・楓橋・渡月橋・虎渓橋・滝下橋）、河原湯（足湯）",
    "access": "伊豆箱根鉄道駿豆線「修善寺駅」より東海バスで約8分「修善寺温泉」下車すぐ。東京から特急踊り子号直通あり。",
    "tip": "竹林の小径は夜になるとライトアップされ、昼間とは一変した幽玄で幻想的な光の小径へと姿を変えます。"
  },
  {
    "key": "shuzenji_wasabi_gourmet",
    "title": "2. 天城の恵み！生わさび一本付き会席＆伊豆牛（擦りたて本わさびの香りと美味）",
    "timing": "通年（天城山麓の清流が育む日本一のわさび）",
    "desc": "天城連山の湧水で育まれた「天城本わさび」。修善寺の老舗宿では、自分でおろし金で擦る生わさびとともに味わう伊豆牛の炭火ステーキや地魚のお造り。門前町でいただく「わさびソフトクリーム」も名物。",
    "spots": "修禅寺門前通り（お土産・甘味処）、一石庵（足湯カフェ・白玉ぜんざい）、修善寺プリン工房",
    "access": "修善寺温泉街中心部。",
    "tip": "「修善寺プリン工房」の竹容器に入ったプリンは、カラメル代わりに黒蜜をかけていただくお土産人気No.1スイーツです。"
  },
  {
    "key": "shuzenji_niji_no_sato",
    "title": "3. 修善寺自然公園〜修善寺虹の郷（もみじ林の秋景色とイギリス村SL）",
    "timing": "秋（11月中旬〜12月上旬の修善寺もみじ林ライトアップ）",
    "desc": "約1,000本のもみじが群生する「修善寺自然公園もみじ林」。富士山を望むパノラマと、イギリス村やカナダ村が広がるテーマパーク「修善寺虹の郷」での本格ロムニー鉄道（SL乗車体験）。",
    "spots": "修善寺自然公園（もみじ林・梅林）、修善寺虹の郷（SLロムニー鉄道・日本庭園）、修善寺カントリークラブ",
    "access": "修善寺温泉街より路線バス・車で約5〜10分。",
    "tip": "「修善寺虹の郷」の冬期イルミネーションは、夜の蒸気機関車と光の森が融合した大迫力の光の祭典です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHUZENJI BAMBOO MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【静岡・伊豆修善寺】竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            伊豆半島で最も歴史ある名湯「修善寺温泉」。桂川のせせらぎと青々とした竹林を渡る風。朱塗りの桂橋や楓橋、登録有形文化財の数寄屋旅館。文豪や芸術家に愛された日本の原風景へ。
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
