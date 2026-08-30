import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【朝食の美味しいホテル日本一】いくら盛り放題・勝手丼＆焼きたてクロワッサン 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "旅行口コミサイト朝食ランキング上位ホテル完全特化！北海道・函館・札幌の「いくら・海鮮盛り放題勝手丼」、目の前で焼き上げる極上フレンチトースト、ご当地名物料理ビュッフェと朝から感動する宿泊体験を徹底解説。",
  keywords: ["japan-best-breakfast-buffet-hotels-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-best-breakfast-buffet-hotels-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-best-breakfast-buffet-hotels-stay", e);
  }
  return {};
}

export default function GourmetCuisineHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakodate_sapporo_ikura_buffet",
    "title": "1. 函館＆札幌・海鮮かけ放題勝手丼（輝くいくら・サーモン・ホタテを山盛りに）",
    "timing": "通年（北海道の海の幸を朝一番から満喫）",
    "desc": "ラビスタ函館ベイ、センチュリーマリーナ函館、ベッセルイン札幌中島公園など全国朝食ランキング常連ホテル。自家製醤油漬けいくらを好きなだけお玉ですくってご飯に乗せる「勝手丼」。新鮮な甘エビ、マグロ、イカ刺し。",
    "spots": "函館ベイエリア、札幌市街地、函館朝市、小樽運河周辺ホテル",
    "access": "JR函館駅・JR札幌駅周辺。",
    "tip": "海鮮丼の締めには、特製の温かい鯛出汁や鰹出汁をかけて「海鮮出汁茶漬け」にすると二度美味しく楽しめます。"
  },
  {
    "key": "french_toast_omurice_buffet",
    "title": "2. パティシエ特製フレンチトースト＆ライブキッチン（目の前で焼き上げる至福の洋朝食）",
    "timing": "通年（贅沢なホテルの朝時間）",
    "desc": "オークラやクラシックホテルが誇る、特製アパレイユに丸一日じっくり漬け込んだふわとろフレンチトースト。シェフが客の好みに合わせて具材を選び目の前で焼き上げるプレーンオムレツ。焼き立てクロワッサンと搾りたて生ジュース。",
    "spots": "東京、横浜、軽井沢、京都、神戸、沖縄のラグジュアリーシティホテル＆リゾート",
    "access": "主要ターミナル駅至近。",
    "tip": "フレンチトーストには、メイプルシロップだけでなく、エシレバターやホテル特製のベリーコンフィチュールを合わせると格別です。"
  },
  {
    "key": "local_specialty_gourmet_buffet",
    "title": "3. 全国ご当地名物ビュッフェ（朝からその土地の郷土料理を味わい尽くす）",
    "timing": "通年（出張・観光でその土地の味を一度に体験）",
    "desc": "名古屋のひつまぶし・小倉トースト、福岡のもつ鍋・明太子、沖縄のラフテー・沖縄そば、鹿児島の黒豚しゃぶしゃぶ・鶏飯など。地域の食文化を朝食ビュッフェで完全再現。地産地消の新鮮野菜サラダバー。",
    "spots": "全国主要都市のプレミアホテル・リゾート温泉ホテル",
    "access": "全国各地。",
    "tip": "郷土料理コーナーには、スタッフ手作りの「美味しい食べ方ガイド」が用意されていることが多く、本場の味わい方を学べます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            JAPAN BEST BREAKFAST GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【朝食の美味しいホテル日本一】いくら盛り放題・勝手丼＆焼きたてクロワッサン 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            朝起きるのが楽しみになる日本一の朝食体験！器からこぼれるほど乗せられる「いくらかけ放題勝手丼」、芳醇なバターが香る焼きたてクロワッサン、シェフ特製のふわとろオムレツ。朝食を目的に泊まりたい全国の憧れホテルへ。
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

              {/* 食材の魅力・産地・味わいポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要産地＆代表的料理</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 主なアクセス＆名湯地</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 美味しく味わう極意</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの美食厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    美食プラン
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
