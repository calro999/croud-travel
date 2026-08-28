import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【群馬・伊香保温泉】365段の石段街・黄金の湯＆水沢うどん極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "群馬・伊香保温泉エリア完全特化！365段の石段街散策、茶褐色の名湯「黄金の湯（こがねのゆ）」と透明な「白銀の湯（しろがねのゆ）」、河鹿橋の紅葉、日本三大うどん「水沢うどん」と老舗名門旅館を徹底解説。",
  keywords: ["gunma-ikaho-stairs-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gunma-ikaho-stairs-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gunma-ikaho-stairs-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ikaho_stairs_walk",
    "title": "1. 365段の石段街（温泉まんじゅう発祥の地と射的・足湯めぐり）",
    "timing": "通年（石段の途中に流れる「湯樋」の温泉景観）",
    "desc": "400年以上の歴史を誇る伊香保のシンボル「石段街」。中央のガラス窓から流れる源泉を眺め、射的や輪投げで遊び、元祖温泉まんじゅう「勝月堂の湯乃花まんじゅう」を頬張りながら登る情緒あふれる散策。",
    "spots": "伊香保石段街（365段）、石段の湯（共同浴場）、岸権旅館前足湯「辰の湯」、勝月堂（湯乃花まんじゅう元祖）",
    "access": "JR上越線「渋川駅」より関越交通バスで約25分「伊香保温泉」下車すぐ。新宿から直行高速バスあり。",
    "tip": "勝月堂の出来立て熱々の湯乃花まんじゅうは、皮がもちもちで餡がなめらか。朝9時の開店直後が狙い目です。"
  },
  {
    "key": "ikaho_kajikabashi_view",
    "title": "2. 河鹿橋〜伊香保神社・飲泉所（朱塗りの太鼓橋と茶褐色の名湯「黄金の湯」）",
    "timing": "秋（10月下旬〜11月中旬の河鹿橋紅葉ライトアップ）",
    "desc": "石段の頂上に鎮座する伊香保神社を抜けた先にある「河鹿橋」。モミジやカエデが朱塗りの橋を包み込む群馬屈指の紅葉名所。伊香保露天風呂の開放的な湯船で、鉄分と硫酸塩を含む黄金の湯を満喫。",
    "spots": "伊香保神社、河鹿橋（紅葉ライトアップ）、伊香保温泉飲泉所、伊香保露天風呂",
    "access": "石段街最上段より遊歩道徒歩約5〜8分。",
    "tip": "伊香保露天風呂は源泉地の真横にあり、中央で湯船が「あつ湯」と「ぬる湯」に分かれているのが特徴です。"
  },
  {
    "key": "mizusawa_udon_stay",
    "title": "3. 水沢観音〜水沢うどん街道＆榛名湖（400年の伝統麺と榛名富士パノラマ）",
    "timing": "通年（榛名湖の冬期イルミネーション・ワカサギ釣り）",
    "desc": "讃岐・稲庭と並ぶ日本三大うどんの一つ「水沢うどん」。強いコシと透明感ある麺をごまダレや醤油ダレで味わう名店街。坂東三十三観音霊場の水沢寺参拝や、榛名山ロープウェイからの絶景。",
    "spots": "水澤観世音（水澤寺）、水沢うどん街道（大澤屋・清水屋）、榛名湖・榛名山（榛名富士ロープウェイ）、竹久夢二伊香保記念館",
    "access": "伊香保温泉街より路線バス・車で約10〜15分。",
    "tip": "「大澤屋」では岡本太郎の絵画や陶器を眺めながら、舞茸の天ぷらとともに極上の水沢うどんを味わえます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            IKAHO STAIRS MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【群馬・伊香保温泉】365段の石段街・黄金の湯＆水沢うどん極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            榛名山の中腹、標高約700mに位置する「伊香保温泉」。365段の石段を一段一段登るごとに広がるレトロな射的場や足湯。鉄分を豊富に含む茶褐色の黄金の湯に浸かり、歴史の情緒に抱かれる旅。
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
