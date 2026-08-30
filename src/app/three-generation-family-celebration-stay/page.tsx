import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【三世代旅行＆還暦・長寿祝い温泉宿】バリアフリー・個室宴会＆二間続き客室 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "祖父母・両親・孫の三世代旅行＆還暦・古希・喜寿・米寿のお祝い温泉宿完全特化！車椅子対応バリアフリー客室、大人数で泊まれる二間続き・コネクティングルーム、祝い膳＆赤いちゃんちゃんこ貸出、個室宴会場付き名門旅館を徹底解説。",
  keywords: ["three-generation-family-celebration-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["three-generation-family-celebration-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for three-generation-family-celebration-stay", e);
  }
  return {};
}

export default function TargetAudienceHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "three_gen_barrier_free",
    "title": "1. バリアフリー・ユニバーサルデザイン客室（車椅子や足腰に優しい安心設計）",
    "timing": "通年（シニア世代も安心して移動できる館内動線）",
    "desc": "館内の段差を極力排除したスロープ設計やエレベーター完備。客室内も段差のないフラットフロア、手すり付きトイレ、シャワーキャリーでそのまま入れる温泉露天風呂。車椅子の無料貸出やベッド完備の和洋室。",
    "spots": "段差なしフラット和洋室、手すり付き大浴場・貸切風呂、車椅子対応トイレ、エレベーター至近客室",
    "access": "最寄り新幹線駅から車で15分以内の平坦な温泉街や大型ホテル。",
    "tip": "予約時に「足腰が不安なためエレベーターに近い客室希望」や「ベッドの高さ」を伝えておくと配慮してもらえます。"
  },
  {
    "key": "celebration_longevity_kanreki",
    "title": "2. 還暦・長寿のお祝いプラン（赤いちゃんちゃんこ・祝い膳＆記念写真サービス）",
    "timing": "通年（還暦60歳・古希70歳・喜寿77歳・傘寿80歳・米寿88歳・白寿99歳のお祝い）",
    "desc": "人生の節目を祝う記念日ステイ。各年齢に応じた色（赤・紫・黄・白）の「ちゃんちゃんこ・頭巾」無料貸出。鯛の姿焼きや赤飯がついた豪華「祝い会席」、専属スタッフによる記念写真撮影とフォトフレーム進呈。",
    "spots": "完全個室宴会場、お祝い演出（ケーキ・花束・ワイン手配）、記念写真撮影サービス",
    "access": "名門老舗旅館や高級温泉リゾート。",
    "tip": "家族水入らずで盛り上がれる「完全個室の食事処・宴会場」を確約できるプランを選ぶのが成功の秘訣です。"
  },
  {
    "key": "connecting_spacious_suite",
    "title": "3. 二間続き・コネクティング客室（プライベートを保ちながら団らんできる広々空間）",
    "timing": "通年（祖父母・両親・子供それぞれの就寝リズムに配慮）",
    "desc": "80平米〜100平米を超える広々とした二間続き客室や、隣り合う客室が内ドアで繋がるコネクティングルーム。昼間はみんなでリビングに集まり、夜は早寝の祖父母と夜更かしの子供で部屋を分けられる快適設計。",
    "spots": "二間続き和洋室、コネクティングルーム、広々リビング付き特別室、プライベートテラス",
    "access": "広大な敷地を持つ温泉リゾートや大型名門旅館。",
    "tip": "客室専用の露天風呂が付いている特別室なら、大浴場まで歩かずにいつでも好きな時に温泉を満喫できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            3-GENERATION & CELEBRATION GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【三世代旅行＆還暦・長寿祝い温泉宿】バリアフリー・個室宴会＆二間続き客室 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            おじいちゃん・おばあちゃんからお孫さんまで笑顔があふれる三世代旅行！車椅子でも安心の段差なしフラット設計、ゆったり寛げる二間続きの広々和洋室、お祝いのちゃんちゃんこや記念写真付きプランで一生の思い出を。
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

              {/* 滞在・設備・ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 充実の設備＆サービス特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 おすすめエリア＆アクセス</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 失敗しない予約＆滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選プラン宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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
