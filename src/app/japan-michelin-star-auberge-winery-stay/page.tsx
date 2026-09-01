import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【ミシュラン星付きシェフ監修＆ワイナリー宿】極上オーベルジュ・美食ステイ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "「食べるために泊まる」至福のガストロノミーツーリズム！ミシュラン星付きシェフ監修の極上オーベルジュ＆ワイナリーホテル完全特化！北海道余市・山梨勝沼・長野千曲川ワインバレー、美食とワインのペアリング宿を徹底解説。",
  keywords: ["japan-michelin-star-auberge-winery-stay", "宿泊予約", "高級リゾート", "記念日ホテル", "ラグジュアリーステイ", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-michelin-star-auberge-winery-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-michelin-star-auberge-winery-stay", e);
  }
  return {};
}

export default function LuxuryPremiumHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hokkaido_yoichi_auberge_winery",
    "title": "1. 北海道余市＆ニセコ・世界が注目するブティックワイナリーオーベルジュ",
    "timing": "通年（秋のぶどう収穫祭・冬の白銀雪景色ディナー）",
    "desc": "世界的評価を受けるワイン産地「余市・仁木」。なだらかな丘陵に広がるぶどう畑の中に佇むわずか数室のオーベルジュ。余市産の雲丹や蝦夷鹿、日本海の魚介と、入手困難なドメーヌの希少ワインをペアリングで味わう至高の時間。",
    "spots": "余市ワイナリー、仁木町オーベルジュ、ニセコ高級リゾート、ドメーヌ タカヒコ周辺",
    "access": "新千歳空港より車で約1時間40分。JR函館本線「余市駅」周辺。",
    "tip": "ワイナリー併設宿では、醸造責任者（ヴィニュロン）によるプライベートなセラー案内や、樽からの直接テイスティングなど特別な体験が楽しめます。"
  },
  {
    "key": "yamanashi_katsunuma_wine_resort",
    "title": "2. 山梨勝沼＆八ヶ岳・日本ワイン発祥の地で味わう甲州ワインとフレンチ",
    "timing": "通年（秋のワイン新酒まつり・初夏の爽やかな高原）",
    "desc": "約30軒のワイナリーが集積する勝沼ぶどう郷。ぶどう棚を渡る風を感じながら味わう和の柑橘が香る「甲州ワイン」と創作フレンチ。天然温泉付きスイートルームから望む甲府盆地の夜景や南アルプスの山並み。",
    "spots": "星野リゾート リゾナーレ八ヶ岳、勝沼ぶどう郷ワイナリー群、笛吹川温泉 坐忘（ワイナリー併設）",
    "access": "JR中央本線「勝沼ぶどう郷駅」または「甲府駅」より車。中央道勝沼ICすぐ。",
    "tip": "「坐忘」では、併設された「まるき葡萄酒（日本最古のワイナリー）」の地下セラーでヴィンテージワインのテイスティングツアーが毎日開催されています。"
  },
  {
    "key": "shinshu_chikuma_wine_valley_stay",
    "title": "3. 信州千曲川ワインバレー・薪火料理とシャルドネの極上マリアージュ",
    "timing": "通年（千曲川流域のテロワールを味わう旅）",
    "desc": "日照時間が長く少雨の気候が育む長野県「千曲川ワインバレー（上田・東御・小諸・高山）」。地元農家が育てる有機野菜と信州プレミアム牛を薪火で焼き上げる薪火料理。小規模ブティックワイナリーの個性豊かなワイン。",
    "spots": "ヴィラデスト ガーデンファームアンドワイナリー、小諸マンズワイン、軽井沢オーベルジュ",
    "access": "北陸新幹線「上田駅」または「軽井沢駅」より車。",
    "tip": "オープンキッチンのカウンター席でシェフが薪火で肉を焼き上げるパチパチという音とスモーキーな香りを五感で楽しむディナーは忘れられない思い出になります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-amber-500 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            MICHELIN AUBERGE & WINERY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【ミシュラン星付きシェフ監修＆ワイナリー宿】極上オーベルジュ・美食ステイ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ぶどう畑を見下ろす丘の上、料理人の情熱が一皿ごとに咲き誇る「極上オーベルジュ＆ワイナリーホテル」。テロワールを表現したモダンフレンチや薪火料理。ソムリエが提案する完璧なワインペアリング。部屋に戻ってそのまま眠りにつく美食の頂点へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-amber-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-amber-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    💎 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">👑 代表的な宿・建築の特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🛥️ アクセス＆送迎案内</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">✨ 極上ステイを叶えるポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選プレミアム宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-stone-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの最高峰宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-900 bg-amber-100/70 border border-amber-300 px-3 py-1 rounded-full">
                    極上プレミアム
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-stone-100 border-b border-stone-200">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-stone-950/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 bg-white hover:bg-stone-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
