import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大型犬・多頭飼い歓迎リゾート】ノーリード・広々客室＆超大型犬OK 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "ゴールデンやラブラドール、多頭飼いも大歓迎！大型犬・超大型犬・頭数制限なし宿完全特化！広々80平米以上の客室、頑丈なフェンス、頭数追加無料プラン、大型犬専用ドッグラン＆足洗い場完備リゾートを徹底解説。",
  keywords: ["large-dog-multi-pet-friendly-resort-stay", "ペットと泊まれる宿", "愛犬同伴", "ドッグリゾート", "プライベートドッグラン", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["large-dog-multi-pet-friendly-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for large-dog-multi-pet-friendly-resort-stay", e);
  }
  return {};
}

export default function PetDogResortHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "large_dog_welcome_resort_stay",
    "title": "1. 大型犬・超大型犬専用設備（頑丈なフェンスと大型犬用バスタブ）",
    "timing": "通年（レトリバー、シェパード、グレートピレニーズ等も快適）",
    "desc": "大型犬がゆったり寝そべることができる広々としたリビング。高さ150cm以上の頑丈な脱走防止フェンス。大型犬用の大型ドライヤー＆シャンプー台。体重30kg以上の超大型犬でも宿泊制限のない完全ドッグウェルカムリゾート。",
    "spots": "エンゼルフォレスト白河高原（福島・羽鳥湖）、ドッグリゾートWOOF（山中湖・屋内大型ドッグプール）",
    "access": "東北道「白河IC」または東富士五湖道路「山中湖IC」より車。",
    "tip": "「ドッグリゾートWOOF」には日本最大級の25m屋内ドッグプールがあり、大型犬が思いっきりダイブして泳げる聖地として全国から愛犬家が集まります。"
  },
  {
    "key": "multi_dog_no_limit_stay",
    "title": "2. 頭数制限なしの一棟貸しコテージ（3頭以上の多頭飼いも気兼ねなし）",
    "timing": "通年（オフ会・多頭飼いファミリー旅行に最適）",
    "desc": "1棟に何頭でも同伴可能な貸切コテージ。頭数追加料金が無料または定額のプラン。複数のケージや食器、トイレシートの大量常備。完全プライベート空間のため、ワンちゃん同士がじゃれ合って走り回っても安心。",
    "spots": "八ヶ岳わんわんパラダイス、ドッグコテージ海の音（千葉九十九里）、コトヴィラ（淡路島）",
    "access": "中央道「小淵沢IC」または館山道経由。",
    "tip": "「八ヶ岳わんわんパラダイス」の森のコテージは棟間が離れており、多頭飼いで多少賑やかになっても周囲に全く迷惑がかからない最高の環境です。"
  },
  {
    "key": "large_dog_nature_forest_stay",
    "title": "3. 白河高原＆八ヶ岳・大自然の広大ドッグフィールド（森林浴トレイル）",
    "timing": "通年（雪遊びが大好きな北方系大型犬にも絶大な人気）",
    "desc": "東京ドーム数個分の敷地に天然温泉・湖・森の散策路が広がる複合ドッグリゾート。ノーリードでお散歩できる専用フォレストトレイル。冬期の白銀のパウダースノーで雪ダイブ。愛犬と一緒に乗れるカヌー体験。",
    "spots": "エンゼルフォレスト白河高原（湖畔カヌー・天然温泉バイキング）、清里高原（清泉寮・萌木の村）",
    "access": "新甲子温泉・白河高原エリア。",
    "tip": "冬のエンゼルフォレスト白河高原はパウダースノーが積もり、雪まみれになって大はしゃぎする大型犬の可愛い姿を見られる絶好のシーズンです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-emerald-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            LARGE DOG & MULTI PET GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【大型犬・多頭飼い歓迎リゾート】ノーリード・広々客室＆超大型犬OK 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            「大型犬だから…」「頭数が多いから…」と諦める必要は一切ありません！「大型犬・超大型犬＆多頭飼い歓迎リゾート」。80平米超のゆとりある客室。頭数制限なし・大型犬追加料金リーズナブル。大型犬も思いっきり走れる広大なフィールドへ。
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
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🐾 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめスポット＆お散歩エリア</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-1.5">
                  <span className="font-bold text-orange-950 block text-[11px]">💡 愛犬と快適に過ごすコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ドッグフレンドリー宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの愛犬同伴厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    愛犬歓迎宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-emerald-700 hover:from-amber-500 hover:to-emerald-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで愛犬同伴プランを見る
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
