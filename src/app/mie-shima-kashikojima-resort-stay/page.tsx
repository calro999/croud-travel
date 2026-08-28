import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【三重・志摩賢島】英虞湾リアス多島美＆志摩観光ホテル・伊勢海老極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "伊勢志摩サミットの舞台・賢島エリア完全特化！英虞湾リアス式海岸の夕景、横山展望台天空カフェ、賢島エスパーニャクルーズ、志摩観光ホテルの伝統フレンチと絶景リゾートホテルを徹底解説。",
  keywords: ["mie-shima-kashikojima-resort-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["mie-shima-kashikojima-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for mie-shima-kashikojima-resort-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kashikojima_luxury_resort",
    "title": "1. 賢島・英虞湾リゾート（サミット首脳が愛した多島美と伝統の海の幸フレンチ）",
    "timing": "通年（特に夕暮れ時の英虞湾サンセットが息をのむ美しさ）",
    "desc": "伊勢志摩サミットの舞台となった「志摩観光ホテル（ザ クラシック／ザ ベイスイート）」。英虞湾の穏やかな入江と真珠筏を望むラウンジ。伝統の「アワビのステーキ」「伊勢海老のクリームスープ」を堪能。",
    "spots": "志摩観光ホテル（サミット記念ギャラリー）、賢島港、賢島エスパーニャクルーズ（あご湾遊覧）、賢島大橋",
    "access": "近鉄特急「賢島駅」下車すぐ（大阪難波・近鉄名古屋から直通特急あり）。無料送迎あり。",
    "tip": "ベイスイート屋上庭園からの夕日は、日本の夕陽百選にも選ばれる息をのむ絶景パノラマです。"
  },
  {
    "key": "yokoyama_view_terrace",
    "title": "2. 横山展望台〜天空カフェテラス（リアス海岸を一望するウッドデッキ絶景）",
    "timing": "通年（午前中の順光・夕暮れ時のグラデーション）",
    "desc": "標高140mから英虞湾に浮かぶ60以上の島々と真珠筏を一望する「横山展望台」。併設の「天空カフェテラス（Mirador Shima）」の木製デッキで、伊勢志摩サイダーやスコーンを味わいながら絶景鑑賞。",
    "spots": "横山展望台（天空カフェテラス・木漏れ日のテラス・英虞湾展望台）、ともやま公園、桐垣展望台（夕日名所）",
    "access": "近鉄鵜方駅よりタクシー・車で約10分。",
    "tip": "「桐垣展望台」はカメラマンが集まる英虞湾随一の夕日撮影スポットで、水面に映る夕焼けが圧巻です。"
  },
  {
    "key": "shima_spain_village_stay",
    "title": "3. 志摩スペイン村〜パルケエスパーニャ（南欧情緒のテーマパーク＆温泉）",
    "timing": "通年（情熱的なフラメンコショー・冬のイルミネーション）",
    "desc": "スペインの街並みやアトラクションが広がる「志摩スペイン村 パルケエスパーニャ」。「ホテル志摩スペイン村」に宿泊すれば、南欧風の客室と伊賀焼の露天風呂「ひまわりの湯」で贅沢な休日。",
    "spots": "志摩スペイン村（パルケエスパーニャ）、ホテル志摩スペイン村、伊勢志摩温泉「ひまわりの湯」",
    "access": "近鉄鵜方駅より直通バスで約13分。",
    "tip": "天然温泉「ひまわりの湯」はアルカリ性単純温泉で、ヌルヌルとした肌触りの極上美肌湯です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHIMA KASHIKOJIMA LUXURY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【三重・志摩賢島】英虞湾リアス多島美＆志摩観光ホテル・伊勢海老極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            真珠養殖発祥の地・英虞湾（あごわん）に浮かぶ賢島。夕暮れに黄金色に染まるリアス海岸の多島美と、各国の首脳を魅了した日本最高峰のラグジュアリーリゾートステイ。
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
