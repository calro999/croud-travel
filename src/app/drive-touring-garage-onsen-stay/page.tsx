import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【愛車・ドライブ旅の温泉宿】絶景ワインディング・屋内ガレージ＆EV充電 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "車好き・ツーリング愛好家完全特化！ビーナスライン・伊豆スカイライン・阿蘇パノラマライン直結、大切な愛車・バイクを守る屋内ガレージ＆屋根付き駐車場、EV充電スタンド完備、絶景ワインディングと温泉宿を徹底解説。",
  keywords: ["drive-touring-garage-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["drive-touring-garage-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for drive-touring-garage-onsen-stay", e);
  }
  return {};
}

export default function TransitStyleHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "garage_villa_car_stay",
    "title": "1. ガレージ付きプライベートヴィラ（リビングやテラスから愛車を愛でる贅沢）",
    "timing": "通年（愛車とのドライブ旅行・プライベートステイ）",
    "desc": "客室に専用のシャッター付きインナーガレージが直結したラグジュアリーヴィラ。リビングのガラス越しやテラスから愛車を眺めながらグラスを傾ける時間。EV急速充電器完備で、電気自動車でのロングドライブも安心。",
    "spots": "インナーガレージ付きヴィラ、EV普通・急速充電スタンド、プライベートサウナ、BBQデッキ",
    "access": "富士五湖、軽井沢、那須、伊豆高原、箱根などのドライブ人気エリア。",
    "tip": "洗車用ホースやマイクロファイバークロス、工具セットを無料で貸し出してくれる車好き専用宿も人気です。"
  },
  {
    "key": "scenic_drive_route_onsen",
    "title": "2. 日本屈指の絶景ワインディング（ビーナスライン・伊豆スカイライン・阿蘇）",
    "timing": "グリーンシーズン：4月〜11月（初夏の新緑・秋の紅葉ワインディング）",
    "desc": "標高2,000mの高原を駆け抜ける「信州ビーナスライン」、相模湾と富士山を望む「伊豆スカイライン」、世界最大級のカルデラを走る「阿蘇パノラマライン」。カーブを抜けるたびに広がる絶景と、峠の先にある名湯。",
    "spots": "ビーナスライン（霧ヶ峰・美ヶ原）、伊豆スカイライン（滝知山展望台）、阿蘇ミルクロード（ラピュタの道）",
    "access": "主要高速ICからワインディングロード経由。",
    "tip": "早朝のワインディングは交通量が少なく、朝霧や朝焼けの雲海の中を爽快にドライブできます。"
  },
  {
    "key": "touring_bike_roof_parking",
    "title": "3. ライダー歓迎・屋根付きバイク駐車場（雨風・盗難から愛車を守る安心設備）",
    "timing": "春〜秋（ツーリングシーズン）",
    "desc": "ツーリングライダーのために、屋根付き駐車場や舗装された専用駐輪スペースを完備。防犯カメラ設置やチェーンロック貸出。ヘルメットや濡れたライディングウェアを乾かす乾燥室、温泉とサウナでツーリングの疲労を回復。",
    "spots": "屋根付きバイク専用駐車場、ライディングギア乾燥室、無料コンプレッサー（空気入れ）、温泉大浴場",
    "access": "信州、東北、九州、四国などのツーリングメッカ。",
    "tip": "バイク仲間とのマスツーリングでは、大広間や宴会場で地元の肉料理や地酒を囲んで語り合える宿が喜ばれます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            DRIVE & SCENIC ROAD GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【愛車・ドライブ旅の温泉宿】絶景ワインディング・屋内ガレージ＆EV充電 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            最高のワインディングロードを走り抜けた後に待つ至福の温泉！ビーナスラインや伊豆スカイラインの絶景ドライブ、大切な愛車やバイクを雨風から守る「屋根付きガレージ」、テラスから愛車を眺められるガレージヴィラへ。
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

              {/* アクセス・移動ルート・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要発着点＆ルート</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 スムーズな旅のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
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
