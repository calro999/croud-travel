import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【記念日・プロポーズ極上宿】夜景スイート・サプライズ演出＆フレンチフルコース 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "大切な記念日・誕生日・プロポーズ完全特化！最上階パノラマ夜景スイートルーム、シャンパン＆ホールケーキ、100本のバラ花束サプライズ手配、ミシュラン星付きシェフ監修フレンチと一生に一度の感動宿を徹底解説。",
  keywords: ["anniversary-propose-luxury-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["anniversary-propose-luxury-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for anniversary-propose-luxury-stay", e);
  }
  return {};
}

export default function TargetAudienceHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "anniversary_luxury_suite_view",
    "title": "1. 最上階パノラマ夜景スイート（宝石のような夜景と客室展望ジャグジー）",
    "timing": "通年（煌めく都市夜景・満天の星空・海に映る月光）",
    "desc": "窓一面に広がる大パノラマ夜景。最上階のコーナースイートや、ビューバス・客室展望露天風呂から夜景を眺めながらシャンパンで乾杯。洗練されたインテリアとキングサイズベッドが約束する至高の滞在。",
    "spots": "パノラマ夜景スイートルーム、ビューバス・展望ジャグジー、クラブラウンジアクセス、インルームダイニング",
    "access": "東京ベイエリア、横浜みなとみらい、神戸ハーバーランド、大阪・梅田、箱根・伊豆高台。",
    "tip": "クラブラウンジ付きのクラブフロア客室を選ぶと、チェックインからイブニングカクテルまで特別待遇でエスコートできます。"
  },
  {
    "key": "propose_surprise_flower_cake",
    "title": "2. プロポーズ＆誕生日サプライズ演出（専任コンシェルジュによる完璧なサポート）",
    "timing": "通年（誕生日・結婚記念日・プロポーズの決行日）",
    "desc": "ディナーの間に客室のベッドを100本の赤バラやバルーンで華やかにデコレーション。メッセージプレート付き特製ホールケーキや高級シャンパンのインルームサーブ。チャペルを貸し切ったプロポーズプラン。",
    "spots": "ホテルチャペル貸切、ベッドデコレーション（フラワーアート）、シャンパン・ケーキ手配、プロポーズ専任コンシェルジュ",
    "access": "一流ラグジュアリーホテル・高級温泉旅館。",
    "tip": "ホテルの「アニバーサリーコンシェルジュ」に事前相談すると、照明のタイミングや音楽、プレゼントの配置まで完璧に演出してくれます。"
  },
  {
    "key": "anniversary_michelin_dinner",
    "title": "3. ミシュラン星付き監修フレンチ＆極上鉄板焼き（記念日を彩る華やかな美食ディナー）",
    "timing": "通年（ソムリエ厳選ワインペアリングとともに）",
    "desc": "キャビア、フォアグラ、トリュフ、伊勢海老、最高級黒毛和牛を使った贅沢なフルコースディナー。専属ソムリエが料理一皿ごとに合わせる極上ワインペアリング。美しいデザートプレートへのメッセージ。",
    "spots": "メインダイニング（フレンチ・イタリアン）、鉄板焼きカウンター、ペアリングワインコース、夜景バーラウンジ",
    "access": "ホテル内ファインダイニング。",
    "tip": "窓側確約のテーブル席や個室を事前予約し、アレルギーや苦手な食材を事前に伝えておくことでスムーズで完璧なエスコートが可能です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ANNIVERSARY & PROPOSE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【記念日・プロポーズ極上宿】夜景スイート・サプライズ演出＆フレンチフルコース 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            二人の特別な日を最高の感動で彩るアニバーサリーステイ！息をのむ大パノラマ夜景を望むラグジュアリースイート、ベッドルームへの花束やバルーンデコレーションサプライズ、記憶に残る極上ディナーへ。
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
