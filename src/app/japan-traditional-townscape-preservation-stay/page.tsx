import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【重要伝統的建造物群保存地区（重伝建）の町並み宿】角館・近江八幡・飛騨高山・美馬 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本の美しい原風景と匠の技が息づく町並み完全特化！みちのくの小京都「秋田・角館武家屋敷」、八幡堀と白壁土蔵「滋賀・近江八幡」、陣屋と出格子「岐阜・飛騨高山」、うだつの上がる町並み「徳島・美馬」、重伝建エリアの歴史的旅館・古民家宿を徹底解説。",
  keywords: ["japan-traditional-townscape-preservation-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-traditional-townscape-preservation-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-traditional-townscape-preservation-stay", e);
  }
  return {};
}

export default function HistoryHeritageHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kakunodate_samurai_mansion_stay",
    "title": "1. 秋田・角館武家屋敷通り（みちのくの小京都！黒板塀と樹齢300年のしだれ桜）",
    "timing": "通年（4月下旬の武家屋敷しだれ桜・秋の紅葉ライトアップ）",
    "desc": "佐竹北家の城下町として栄えた「角館武家屋敷通り」。国の重要伝統的建造物群保存地区。青柳家や石黒家など江戸時代上級武士の屋敷群。山桜の樹皮を使った伝統工芸「樺細工（かばざいく）」。日本三大地鶏「比内地鶏」のきりたんぽ鍋。",
    "spots": "角館武家屋敷通り（角館歴史村青柳家・石黒家・岩橋家）、桧木内川堤の桜並木、安藤醸造（煉瓦造蔵）",
    "access": "JR秋田新幹線「角館駅」下車徒歩約15分。",
    "tip": "「石黒家」では、現存する角館最古の武家屋敷の内部を直系の子孫や専任ガイドの解説付きで見学できます。"
  },
  {
    "key": "omihachiman_canal_kura_stay",
    "title": "2. 滋賀・近江八幡〜八幡堀・新町通り（近江商人の本拠地と水運の白壁土蔵）",
    "timing": "通年（春の八幡堀桜まつり・八幡堀まつり灯りの回廊）",
    "desc": "豊臣秀次が築いた八幡山城の城下町「近江八幡」。白壁土蔵や旧西川家住宅が並ぶ新町通り。水郷をめぐる「八幡堀めぐり和舟」。建築家ウィリアム・メレル・ヴォーリズの洋風建築群。日本三大和牛「近江牛」のすき焼き。",
    "spots": "八幡堀（和船めぐり・白壁土蔵群）、新町通り（旧西川家住宅・郷土資料館）、日牟禮八幡宮、ラ コリーナ近江八幡",
    "access": "JR琵琶湖線「近江八幡駅」よりバス約7分。",
    "tip": "「ラ コリーナ近江八幡」は、草屋根のメインショップが美しい有名スイーツパークで、焼きたてバームクーヘンが楽しめます。"
  },
  {
    "key": "takayama_mima_heritage_stay",
    "title": "3. 岐阜・飛騨高山＆徳島・美馬（出格子の古い町並みとうだつの上がる商家）",
    "timing": "通年（春・秋の高山祭・美馬のうだつライトアップ）",
    "desc": "江戸時代の商家が軒を連ねる飛騨高山「三町伝統的建造物群保存地区（さんまち通り）」。地酒の杉玉が下がる造り酒屋巡り。藍染めと繭の集散地として栄えた徳島県美馬市脇町の「うだつの上がる町並み（防火壁うだつ）」。",
    "spots": "飛騨高山 三町通り（上三之町・船坂酒造店・古い町並み）、高山陣屋、美馬市脇町うだつの町並み（吉田家住宅・オデオン座）",
    "access": "JR高山本線「高山駅」徒歩約10分、JR徳島線「穴吹駅」より車約10分。",
    "tip": "飛騨高山の古い町並みでは、コインを入れて地酒をお猪口で試飲できるセルフサーバーを設置した造り酒屋が多く、飲み歩きに最適です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TRADITIONAL TOWNSCAPE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【重要伝統的建造物群保存地区（重伝建）の町並み宿】角館・近江八幡・飛騨高山・美馬 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            黒板塀にしだれ桜が揺れる武家屋敷、水運で栄えた八幡堀をゆく和舟、商人たちの富の象徴「うだつ」。国が選定した「重要伝統的建造物群保存地区（重伝建）」。職人の息遣いが残る歴史的建造物に泊まり、日本の美意識に浸る上質な休日。
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

              {/* 歴史見どころ・アクセス・旅のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要史跡＆名所</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 歴史探訪を深めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの歴史・名門宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    歴史探訪プラン
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
