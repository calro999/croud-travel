import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【鳥取・皆生温泉＆伯耆大山】海の温泉・美保湾パノラマ＆境港松葉ガニ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "山陰屈指の海辺リゾート鳥取皆生温泉＆伯耆富士大山エリア完全特化！日本海の砂浜から湧く「海の温泉（塩化物泉）」、名峰大山の絶景ドライブ、境港直送の松葉ガニ・境港サーモン・鳥取和牛会席宿を徹底解説。",
  keywords: ["tottori-kaike-onsen-daisen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tottori-kaike-onsen-daisen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tottori-kaike-onsen-daisen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kaike_ocean_view_onsen",
    "title": "1. 皆生温泉海岸〜弓ヶ浜（日本海から湧き出すミネラル豊富な美肌の塩湯）",
    "timing": "通年（夏の皆生海水浴場・冬の荒波日本海と雪景色）",
    "desc": "明治時代に地元の漁師が海中に湧き出る温泉を発見したのが始まりの「皆生（かいけ）温泉」。ナトリウム・カルシウム塩化物泉は保温効果と保湿効果が抜群。白砂青松の弓ヶ浜海岸散策と海辺の足湯。",
    "spots": "皆生温泉海浜公園（足湯・夕日スポット）、皆生つるや、日帰り温泉おーゆ・ランド、米子水鳥公園",
    "access": "JR山陰本線「米子駅」より路線バスで約20分。米子鬼太郎空港より車約20分。",
    "tip": "皆生温泉の海岸沿い遊歩道は「日本の夕陽百選」に選ばれており、日本海に沈む夕日と夕焼け空が絶景です。"
  },
  {
    "key": "daisen_highland_nature_stay",
    "title": "2. 伯耆大山〜大山寺・鍵掛峠（西日本最高峰のブナ原生林と南壁パノラマ）",
    "timing": "通年（春〜夏の新緑ハイキング・秋の紅葉・冬の大山スキー）",
    "desc": "標高1,729m、神の山として崇められてきた「伯耆大山（ほうきだいせん）」。日本屈指の広さを誇るブナの原生林。大山南壁の荒々しい岩肌と紅葉が広がる「鍵掛峠（かぎかけとうげ）」。名刹「大山寺」と大山まきばみるくの里。",
    "spots": "大山寺・大神山神社奥宮、鍵掛峠展望台、大山まきばみるくの里（特濃ソフトクリーム）、植田正治写真美術館",
    "access": "米子市街・皆生温泉より車で約30〜40分。",
    "tip": "「植田正治写真美術館」では、館内のスリット窓から大山が逆さに映り込む帽子モニュメントのフォトジェニックな写真が撮れます。"
  },
  {
    "key": "sakaiminato_crab_gourmet",
    "title": "3. 境港直送「松葉ガニ」＆鳥取和牛（日本海のカニ王国と極上オレイン牛）",
    "timing": "秋〜冬期（9月〜紅ズワイガニ、11月〜3月の松葉ガニ解禁）",
    "desc": "日本屈指の水揚げ量を誇る「境港」。タグ付きのブランド松葉ガニを丸ごと茹で・焼き・刺身・カニ鍋で味わうフルコース。肉質の55%以上がオレイン酸でとろけるような口溶けの「鳥取和牛オレイン55」。",
    "spots": "境港水産物直売センター、水木しげるロード（妖怪ブロンズ像・妖怪神社）、境港大漁市場なかうら",
    "access": "皆生温泉より車で約25分（境港エリア）。",
    "tip": "水木しげるロードは夜になると妖怪たちの影絵が歩道にライトアップされ、昼とは全く異なる幻想的な雰囲気を楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KAIKE ONSEN & DAISEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【鳥取・皆生温泉＆伯耆大山】海の温泉・美保湾パノラマ＆境港松葉ガニ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            弓ヶ浜の白砂青松と雄大な「伯耆富士・大山」を望む「皆生温泉」。海中から湧き出す塩化物泉の温まりの湯。境港で水揚げされた極上の松葉ガニや紅ズワイガニ、鳥取和牛オレイン55に舌鼓を打つ山陰の極上ステイ。
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
