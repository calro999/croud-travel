import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【愛犬と一緒】秋・冬のドッグラン＆ペット同伴温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "愛犬も家族の一員！静岡伊豆高原、栃木那須高原、長野軽井沢、滋賀琵琶湖など、客室同伴OK、専用ドッグラン、愛犬用温泉・コース料理を完備した全国の極上ペットフレンドリー宿を徹底解説。",
  keywords: ["autumn-winter-onsen-with-pet", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-onsen-with-pet"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-onsen-with-pet", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "izu_pet_hotel",
    "title": "1. 静岡・伊豆高原（愛犬同伴温泉宿のメッカ！専用足湯＆ドッグスパ）",
    "timing": "通年（秋の気候良好・冬も温暖）",
    "desc": "日本一ペットに優しいリゾート地・伊豆高原。愛犬専用の天然温泉バスタブ付き客室や、芝生の広大なアジリティドッグラン、獣医師監修の愛犬専用フレンチコースが揃ったホテルが多数点在します。",
    "spots": "伊豆シャボテン動物公園（ペット同伴可）、大室山（リフト同伴可）、城ヶ崎海岸、愛犬の駅",
    "access": "東海道新幹線熱海駅より伊豆急行線で伊豆高原駅まで約45分。小田原厚木道路経由。",
    "tip": "「愛犬の駅」は室内・屋外ドッグランや愛犬カフェ、お土産が揃う伊豆ドライブの必寄りスポットです。"
  },
  {
    "key": "nasu_pet_resort",
    "title": "2. 栃木・那須高原（北欧風の森で楽しむ広大なドッグパーク＆愛犬同室フレンチ）",
    "timing": "通年（秋の紅葉ハイキング・冬の雪遊び）",
    "desc": "豊かな自然に囲まれたロイヤルリゾート那須。数千坪の敷地に森のアジリティドッグランや室内プレイルームを完備。客室のテラスで愛犬と焚き火を囲んだり、愛犬と一緒に温泉を楽しめます。",
    "spots": "那須どうぶつ王国（一部ドッグパークあり）、那須ハイランドパーク、那須ガーデンアウトレット",
    "access": "東北新幹線「那須塩原駅」より車・レンタカーで約25分。東北自動車道那須ICより約15分。",
    "tip": "愛犬同伴レストランでは、ワンちゃん用のアニバーサリーケーキ手配が可能なプランが記念日旅行に大人気です。"
  },
  {
    "key": "karuizawa_pet_hotel",
    "title": "3. 長野・軽井沢（おしゃれなテラスカフェと森のドッグフレンドリーコテージ）",
    "timing": "通年（秋の旧軽井沢散策・冬の白銀ドッグラン）",
    "desc": "ハルニレテラスやプリンスショッピングプラザなど愛犬同伴スポットが充実した軽井沢。独立型プライベートコテージなら、周りを気にせず愛犬とのびのび宿泊でき、専用庭付きヴィラも人気です。",
    "spots": "軽井沢プリンスショッピングプラザ（ドッグランあり）、ハルニレテラス、雲場池、旧軽井沢銀座",
    "access": "北陸新幹線「軽井沢駅」下車。上信越自動車道碓氷軽井沢ICより車約20分。",
    "tip": "ハルニレテラスの清流沿いデッキテラスは全店ペット同伴可能（一部テラス席）。愛犬とのカフェタイムに最適です。"
  },
  {
    "key": "biwako_pet_resort",
    "title": "4. 滋賀・びわ湖畔＆おごと温泉（湖畔の散歩道と愛犬専用露天風呂付きヴィラ）",
    "timing": "通年（琵琶湖のレイクビューリゾート）",
    "desc": "琵琶湖の爽やかな風を感じるレイクサイドリゾート。客室専用のプライベートドッグランや愛犬専用露天風呂を備えたラグジュアリーヴィラで、近江牛ディナーを愛犬と一緒に客室でゆったり楽しめます。",
    "spots": "びわ湖バレイ（ドッグランあり・テラス同伴可）、白髭神社、近江八幡水郷散策",
    "access": "JR京都駅から湖西線で約20〜30分。名神高速京都東ICより湖西道路経由約25分。",
    "tip": "京都観光の宿泊先としても便利。日中は京都で紅葉を散策し、夜は琵琶湖畔の静かなペット宿でくつろげます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            PET FRIENDLY RESORT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【愛犬と一緒】秋・冬のドッグラン＆ペット同伴温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            色鮮やかな落ち葉を踏みしめながらの紅葉散歩や、澄んだ空気の広大なドッグラン。愛犬と一緒に客室でくつろぎ、一緒にレストランで食事を楽しめる、ワンちゃんファーストの極上温泉リゾートへ。
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
