import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【日本五大ブランド和牛の宿】松阪牛・神戸牛・米沢牛・近江牛・佐賀牛極上会席 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本最高峰のブランド黒毛和牛完全特化！松阪牛のすき焼き、神戸牛サーロイン鉄板焼き、米沢牛のしゃぶしゃぶ、近江牛の陶板焼き、佐賀牛ステーキと名門温泉旅館の贅沢会席プランを徹底解説。",
  keywords: ["japan-top-brand-wagyu-beef-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-top-brand-wagyu-beef-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-top-brand-wagyu-beef-stay", e);
  }
  return {};
}

export default function GourmetCuisineHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "matsusaka_kobe_wagyu_luxury",
    "title": "1. 松阪牛＆神戸ビーフ（「肉の芸術品」と呼ばれる日本最高峰の二大巨頭）",
    "timing": "通年（世界中の美食家が絶賛する最高峰のサシと香り）",
    "desc": "不飽和脂肪酸が多く人肌の温度でとろける「松阪牛（三重県）」。きめ細かな霜降りと上品な甘みが特徴の「神戸ビーフ（兵庫県）」。老舗旅館で味わう厚切りサーロインステーキ、秘伝の割り下で仕上げるすき焼き。",
    "spots": "松阪牛本場（伊勢志多・松阪・鳥羽）、神戸ビーフ本場（有馬温泉・神戸ウォーターフロント）",
    "access": "近鉄特急・新幹線経由。",
    "tip": "松阪牛のすき焼きは、割り下で煮込むのではなく、鉄鍋に牛脂を引いて肉を焼き、砂糖と醤油だけで味付けする三重スタイルが本物の味です。"
  },
  {
    "key": "yonezawa_omi_beef_stay",
    "title": "2. 米沢牛＆近江牛（400年の歴史を持つ伝統和牛と置賜盆地の寒暖差）",
    "timing": "通年（きめ細やかな霜降りと甘みのある脂）",
    "desc": "置賜盆地の清らかな水と澄んだ空気、寒暖差が育む「米沢牛（山形県）」。日本で最も古い歴史を持ち、かつて彦根藩から将軍家に献上された「近江牛（滋賀県）」。温泉旅館のしゃぶしゃぶや炙り握り寿司。",
    "spots": "米沢牛本場（小野川温泉・白布温泉・かみのやま温泉）、近江牛本場（おごと温泉・長浜温泉）",
    "access": "山形新幹線「米沢駅」、JR琵琶湖線沿線。",
    "tip": "米沢牛のしゃぶしゃぶは、沸騰直前のお湯にサッと2〜3回くぐらせるだけで、肉本来の芳醇な香りと甘みが口いっぱいに広がります。"
  },
  {
    "key": "saga_hida_top_beef_stay",
    "title": "3. 佐賀牛＆飛騨牛（全国屈指の厳しい基準を誇る艶さしプレミアム）",
    "timing": "通年（美しいサシのグラデーションととろける食感）",
    "desc": "肉質等級4等級・BMS7番以上のみに許される最高峰「佐賀牛（佐賀県）」。北アルプスの大自然で育ち、筋肉繊維がきめ細かく柔らかい「飛騨牛（岐阜県）」。溶岩プレートや朴葉味噌で焼き上げる極上の香ばしさ。",
    "spots": "佐賀牛本場（嬉野温泉・武雄温泉・古湯温泉）、飛騨牛本場（飛騨高山・下呂温泉・奥飛騨温泉郷）",
    "access": "西九州新幹線「嬉野温泉駅」、JR高山本線「高山駅」「下呂駅」。",
    "tip": "飛騨牛の「朴葉味噌焼き」は、自家製味噌の香ばしさと飛騨牛の脂が溶け合い、ご飯とお酒が止まらなくなる至高の逸品です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            JAPAN TOP BRAND WAGYU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【日本五大ブランド和牛の宿】松阪牛・神戸牛・米沢牛・近江牛・佐賀牛極上会席 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            とろけるような極上の霜降りと芳醇な香り！日本が世界に誇る三大和牛・五大銘柄牛「松阪牛」「神戸牛」「米沢牛」「近江牛」「佐賀牛」。本場の産地で味わう炭火ステーキ、伝統のすき焼き、温泉宿の贅沢フルコースへ。
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
