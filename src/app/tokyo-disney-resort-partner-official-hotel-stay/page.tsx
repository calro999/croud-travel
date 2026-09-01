import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【東京ディズニーリゾート®提携ホテル】オフィシャル＆パートナーホテル・無料シャトル宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "夢の国を満喫するホテル選び完全特化！東京ディズニーランド®・東京ディズニーシー®直結のモノレール沿線オフィシャルホテル、パーク直通無料シャトルバス運行パートナーホテル、洗い場付きお風呂＆大浴場完備宿を徹底解説。",
  keywords: ["tokyo-disney-resort-partner-official-hotel-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-disney-resort-partner-official-hotel-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-disney-resort-partner-official-hotel-stay", e);
  }
  return {};
}

export default function ThemeParkActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "maihama_official_bay_hotel",
    "title": "1. 舞浜ベイエリア・オフィシャルホテル（ディズニーリゾートラインでパーク直結）",
    "timing": "通年（ハロウィーン・クリスマス・春休み・イベント期間）",
    "desc": "東京ディズニーリゾート®内に位置する6つのオフィシャルホテル。ディズニーリゾートラインの「ベイサイド・ステーション」至近。ホテル内でパークチケット購入権利やパークの最新グッズが買える「ディズニー・ファンタジー」。オーシャンビュー客室。",
    "spots": "東京ディズニーランド®、東京ディズニーシー®、イクスピアリ、ディズニーリゾートライン（ベイサイド・ステーション）",
    "access": "JR京葉線・武蔵野線「舞浜駅」より無料シャトルバスまたはディズニーリゾートライン利用。",
    "tip": "オフィシャルホテル宿泊者は、JR舞浜駅前の「東京ディズニーリゾート・ウェルカムセンター」で荷物を預けるとホテルまで無料で届けてくれるバゲッジデリバリーサービスが利用できます。"
  },
  {
    "key": "shinurayasu_partner_family_stay",
    "title": "2. 新浦安・パートナーホテル（無料シャトルバス約15分＆大展望風呂付き）",
    "timing": "通年（ファミリー・3世代・グループ旅行に高コスパ）",
    "desc": "新浦安エリアに位置するパートナーホテル。パーク直通の「パートナーホテル・シャトル（無料）」が常時運行。全室洗い場付きお風呂や最上階の天然温泉展望大浴場。2段ベッド付きファミリールームやキッズスペース完備。",
    "spots": "新浦安駅直結商業施設、浦安市総合公園、大江戸温泉物語 浦安万華郷跡周辺",
    "access": "JR京葉線「新浦安駅」周辺。パークまで無料シャトルバスで約15分。",
    "tip": "パートナーホテル・シャトルは予約不要・無料で運行しており、閉園後の混雑した電車に乗ることなく座ってホテルまで戻れるのが最大のメリットです。"
  },
  {
    "key": "goodneighbor_tokyo_bay_stay",
    "title": "3. お台場＆幕張・グッドネイバーホテル（観光やショッピングも楽しむ複合ステイ）",
    "timing": "通年（東京観光・イベント参加とセットの旅）",
    "desc": "お台場・有明・新宿・幕張などに位置するグッドネイバーホテル。パークへの無料送迎バス「グッドネイバーホテル・シャトル（予約制）」運行。夜景の美しい高層階客室、豪華な朝食ビュッフェ、ショッピングモール直結の利便性。",
    "spots": "お台場海浜公園、アクアシティお台場、東京ビッグサイト、幕張メッセ",
    "access": "都内各主要駅・空港よりリムジンバス運行。",
    "tip": "グッドネイバーホテル・シャトルは完全事前予約制のため、宿泊予約が完了したらすぐにホテルの公式サイト等からバスの座席を確保しましょう。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            DISNEY RESORT HOTEL GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【東京ディズニーリゾート®提携ホテル】オフィシャル＆パートナーホテル・無料シャトル宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            開園から閉園まで時間を気にせず夢の世界に浸る「東京ディズニーリゾート®提携ホテル」。パーク内・舞浜エリアのオフィシャルホテルや新浦安のパートナーホテル。無料シャトルバス、ホテル内ショップ、疲れた体を癒やす展望大浴場へ。
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

              {/* パーク特典・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要アトラクション＆スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆シャトル運行</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 パーク＆アクティビティ満喫のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選ホテル</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    提携プラン
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
