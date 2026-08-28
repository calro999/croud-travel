import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長野・志賀高原＆渋峠】日本国道最高地点・雲海テラス＆パウダースノー極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "長野・上信越高原国立公園エリア完全特化！日本国道最高地点（標高2,172m）の渋峠、SORA terraceの雲海、志賀高原18スキー場ビッグゲレンデ、熊の湯温泉の濃厚緑色硫黄泉と高原山岳リゾートを徹底解説。",
  keywords: ["nagano-shigakogen-shibutoge-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-shigakogen-shibutoge-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-shigakogen-shibutoge-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shigakogen_shibutoge_view",
    "title": "1. 渋峠〜横手山山頂（日本国道最高地点2,172mと雲の上のベーカリー）",
    "timing": "グリーンシーズン：4月下旬〜11月上旬（志賀草津高原ルート開通期）／冬期（パウダースノー）",
    "desc": "群馬と長野の県境に位置する日本国道最高地点「渋峠（標高2,172m）」。スカイレーターとリフトで登る横手山山頂の「横手山頂ヒュッテ」で味わう名物手作り焼き立てパンやボルシチ。足元に広がる壮大な雲海。",
    "spots": "渋峠（日本国道最高地点の碑・渋峠ホテル）、横手山頂ヒュッテ（雲の上のパン屋さん・展望台）、SORA terrace（竜王マウンテンリゾート）",
    "access": "長野駅より長電バス「志賀高原急行バス」で約70〜90分。上信越道信州中野ICより車約45分。",
    "tip": "「渋峠ホテル」は建物の中央に県境線が引かれており、日本国道最高地点到達証明書を発行してもらえます。"
  },
  {
    "key": "kumanoyu_emerald_onsen",
    "title": "2. 熊の湯温泉・ほたる温泉（エメラルドグリーンに輝く濃厚硫黄泉の奇跡）",
    "timing": "通年（冬の雪見風呂・夏の爽快な高原避暑）",
    "desc": "志賀高原随一の湯量を誇る「熊の湯温泉」。空気に触れると鮮やかなエメラルドグリーンに変化する濃厚な含硫黄炭酸水素塩泉。幕末の思想家・佐久間象山が発見したと伝わる名湯で、つるつるの美肌効果を体感。",
    "spots": "熊の湯温泉（熊の湯ホテル・日帰り入浴）、ほたる温泉、木戸池（ボート・遊歩道）、田ノ原湿原",
    "access": "志賀高原バス「熊の湯」下車すぐ。",
    "tip": "熊の湯温泉の湯船は緑色の湯の花が舞う独特の泉質で、入浴後は肌がしっとりすべすべになります。"
  },
  {
    "key": "shigakogen_ski_resort",
    "title": "3. 志賀高原ビッグゲレンデ（全18スキー場共通リフト券と暖炉ラウンジ）",
    "timing": "冬期（11月下旬〜5月上旬の超ロングスキーシーズン）",
    "desc": "単一エリアとしては日本最大の規模を誇る「志賀高原スキー場（全18スキー場）」。極上のプラチナパウダースノーと多彩なコース。ゲレンデ直結のホテルで暖炉の炎を眺めながら信州プレミアム牛やチーズフォンデュを堪能。",
    "spots": "志賀高原一の瀬・焼額山・奥志賀高原スキー場、志賀高原マウンテンリゾート、大沼池（エメラルドグリーンの火口湖）",
    "access": "志賀高原各エリアへ無料シャトルバス運行。",
    "tip": "奥志賀高原や焼額山エリアの山岳リゾートホテルは、客室からそのままスキー板を履いて滑り出せる利便性が抜群です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHIGA HIGHLAND NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長野・志賀高原＆渋峠】日本国道最高地点・雲海テラス＆パウダースノー極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高2,000mを超える天空のリゾート「志賀高原・渋峠」。雲海を見下ろす日本国道最高地点と、息をのむ大パノラマ。エメラルドグリーンに輝く熊の湯温泉と、世界最高峰のパウダースノーを誇る山岳ホテルステイ。
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
