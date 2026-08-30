import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静岡・伊豆伊東＆城ヶ崎海岸】門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "東伊豆の歴史と絶景・伊東温泉＆城ヶ崎海岸エリア完全特化！スリル満点の「門脇つり橋」、すり鉢状火口の「大室山リフト」、国登録有形文化財「東海館」、毎分3万リットルの湯量を誇る伊東温泉と伊豆地魚会席宿を徹底解説。",
  keywords: ["shizuoka-izu-ito-jogasaki-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-izu-ito-jogasaki-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-izu-ito-jogasaki-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ito_onsen_tokainkan_walk",
    "title": "1. 松川遊歩道〜東海館（昭和レトロな木造建築美と豊富な自家源泉）",
    "timing": "通年（春の松川沿い桜並木・初夏の伊東祐親まつり・冬の温泉）",
    "desc": "伊東温泉の中心を流れる松川沿いに佇む、昭和3年創業の木造3階建て温泉旅館「東海館（市指定有形文化財）」。職人の見事な木彫り細工や望楼。毎分3万リットルを超える全国屈指の湧出量を誇る弱食塩泉・単純温泉。",
    "spots": "東海館（見学・日帰り入浴・喫茶）、松川遊歩道（竹あかりライトアップ）、音無神社、伊東オレンジビーチ",
    "access": "JR伊東線・伊豆急行線「伊東駅」下車徒歩約7〜10分。東京駅から特急「踊り子」直通約1時間40分。",
    "tip": "「東海館」の最上階にある望楼からは、伊東市街と天城連山、相模湾を一望できます。"
  },
  {
    "key": "jogasaki_omuroyama_view",
    "title": "2. 城ヶ崎海岸・門脇つり橋〜大室山（大自然が造り出した断崖絶壁と火口空中散歩）",
    "timing": "通年（春の山焼き・新緑の大室山・城ヶ崎の雄大な白波）",
    "desc": "約4000年前の大室山噴火でできた溶岩海岸「城ヶ崎海岸」。高さ23m、長さ48mの断崖に架かるスリル満点の「門脇つり橋」。リフトで登る「大室山（標高580m）」の火口一周お鉢巡りと富士山パノラマ。",
    "spots": "城ヶ崎海岸（門脇つり橋・門脇埼灯台・ピクニカルコース）、大室山（登山リフト・火口アーチェリー）、伊豆シャボテン動物公園",
    "access": "伊東駅より車で約25分、または伊豆高原駅よりバス。",
    "tip": "大室山は全山がカヤで覆われており、山頂お鉢めぐり（約1km）では360度の大パノラマ（伊豆七島・富士山）が広がります。"
  },
  {
    "key": "ito_iseebi_local_fish_gourmet",
    "title": "3. 伊東港直送「朝獲れ地魚」＆伊豆牛（贅沢な海の幸と山海の恵み）",
    "timing": "通年（秋〜冬の伊勢海老漁解禁・春の鯵や金目鯛）",
    "desc": "伊東港で毎朝競り落とされる新鮮な地魚の舟盛り。活きたまま鉄板で焼く「アワビの踊り焼き」やプリプリの「伊勢海老のお造り・鬼殻焼き」。幻のブランド牛「伊豆牛」のステーキと伊豆わさび。",
    "spots": "道の駅伊東マリンタウン（日帰り温泉・遊覧船・海鮮丼）、伊東市中央商店街",
    "access": "伊東市街地・伊東港周辺。",
    "tip": "「道の駅 伊東マリンタウン」のカラフルな建物群には、海を見渡す足湯や海鮮レストラン、お土産処が充実しています。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            IZU ITO & JOGASAKI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【静岡・伊豆伊東＆城ヶ崎海岸】門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            毎分3万リットル以上の豊富な湧出量を誇る歴史の温泉地「伊東温泉」。溶岩が削り出した断崖絶壁と海にかかる「城ヶ崎海岸・門脇つり橋」。抹茶碗を伏せたような美しい山容の「大室山」と、伊豆近海の伊勢海老・地魚に癒やされる旅。
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
