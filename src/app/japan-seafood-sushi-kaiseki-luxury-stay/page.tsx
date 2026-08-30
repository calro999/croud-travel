import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【極上海鮮寿司＆舟盛り名宿】朝獲れ地魚・一本釣り鮮魚＆板前握り寿司 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "魚好きのための極上海鮮＆寿司温泉宿完全特化！漁港直送の豪華大漁舟盛り、カウンターで職人が一貫ずつ握る極上寿司会席、アワビ踊り焼き、伊勢海老お造り、金目鯛姿煮と海辺の名門温泉旅館を徹底解説。",
  keywords: ["japan-seafood-sushi-kaiseki-luxury-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-seafood-sushi-kaiseki-luxury-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-seafood-sushi-kaiseki-luxury-stay", e);
  }
  return {};
}

export default function GourmetCuisineHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "harbor_fresh_funamori_stay",
    "title": "1. 漁港直送・豪華大漁舟盛り（テーブルを埋め尽くすピチピチの旬魚）",
    "timing": "通年（四季折々の近海地魚を最も新鮮な状態で）",
    "desc": "地元漁港の入札権を持つ宿だからこそ実現する圧倒的な鮮度とボリューム。ヒラメ、タイ、カンパチ、アジ、イカなどが尾頭付きで豪快に盛られた大漁舟盛り。活きたアワビを炭火で焼く「アワビの踊り焼き」や伊勢海老の鬼殻焼き。",
    "spots": "伊豆（戸田・網代・稲取）、房総（勝浦・鴨川・南房総）、三重（鳥羽・相差）、福井（越前・若狭）",
    "access": "海沿いの温泉地・漁師町。",
    "tip": "漁師町・相差（おうさつ）などの民宿や旅館では、現役の海女さんが獲ってきたばかりの新鮮なウニやサザエが並びます。"
  },
  {
    "key": "itamae_sushi_kaiseki_hotel",
    "title": "2. 板前握り寿司カウンター（目の前で職人が一貫ずつ握る極上のライブ感）",
    "timing": "通年（記念日や大人の贅沢旅に人気）",
    "desc": "温泉旅館やリゾートホテルの寿司ダイニング。板前が客の食べるペースに合わせて、その日の最高のネタを赤酢や白酢のシャリで一貫ずつ丁寧に握る贅沢。地酒とのペアリングを楽しみながら過ごす優雅な夜。",
    "spots": "金沢、小樽、下田、熱海、白浜、唐津などの名門寿司温泉宿",
    "access": "主要観光地の温泉街。",
    "tip": "夕食開始時間は少し早めの18時前後に予約すると、板前さんとゆっくり会話を楽しみながらおすすめの裏ネタを聞くことができます。"
  },
  {
    "key": "hokuriku_sanin_local_fish_stay",
    "title": "3. 北陸・山陰の至宝「のどぐろ」＆富山湾の白えび（「白身のトロ」と「富山湾の宝石」）",
    "timing": "通年（秋〜冬の脂が最高潮に達するのどぐろ）",
    "desc": "皮目を香ばしく塩焼きにすると上質な脂がジュワッと滴る「のどぐろ（アカムツ）」。一匹ずつ手剥きされた透き通る甘みの「富山湾の白えび」お造りや天ぷら。能登・金沢の加賀野菜とともに味わう洗練された会席料理。",
    "spots": "富山（宇奈月温泉・氷見）、石川（山代温泉・山中温泉・和倉温泉）、島根（玉造温泉）",
    "access": "北陸新幹線・山陰本線沿線。",
    "tip": "のどぐろは「塩焼き」だけでなく、出汁でふっくら炊き上げた「のどぐろ釜飯」も米に脂の旨味が染み渡り絶品です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            JAPAN SEAFOOD & SUSHI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【極上海鮮寿司＆舟盛り名宿】朝獲れ地魚・一本釣り鮮魚＆板前握り寿司 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            目の前の海から揚がったばかりの命をいただく贅沢！全国屈指の漁港から毎朝届くピチピチの地魚、豪華絢爛な大漁舟盛り、カウンターで板前が握る出来立て寿司会席。波音を聞きながら海の幸を食べ尽くす至福の海辺ステイへ。
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
