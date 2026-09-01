import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【女性一人旅・安心ステイ＆ご褒美温泉宿】女性専用フロア＆Refa・美肌湯 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "気兼ねなく自分を癒やす極上ひとり旅！女性一人旅歓迎の安心温泉宿＆ホテル完全特化！女性専用フロア・カードキーセキュリティ、Refa（リファ）ドライヤー＆高級アメニティ完備、お部屋食・個室食事処、美肌の湯を徹底解説。",
  keywords: ["women-solo-safe-amenity-onsen-retreat-stay", "女性一人旅", "ソロ活", "ご褒美ステイ", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["women-solo-safe-amenity-onsen-retreat-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for women-solo-safe-amenity-onsen-retreat-stay", e);
  }
  return {};
}

export default function WomenSoloRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "women_floor_security_onsen_stay",
    "title": "1. 女性専用フロア＆厳重セキュリティ（夜間でも安心して寛げる安心設計）",
    "timing": "通年（週末の気軽なソロリトリート・平日ワーケーション）",
    "desc": "エレベーターや客室フロアへの進入に専用カードキーが必要な女性専用フロア。夜遅くの到着でも安心の駅直結・駅徒歩数分ロケーション。女性スタッフ中心のおもてなし。館内に併設された清潔な大浴場やパウダールーム。",
    "spots": "ホテルモントレグループ（レディースフロア）、ドーミーインPREMIUM（女性大浴場暗証番号制）、三井ガーデンホテルズ",
    "access": "全国主要ターミナル駅・温泉地駅至近。",
    "tip": "女性専用フロアのあるホテルでは、エレベーターホールから客室まで完全独立しており、専用ラウンジでハーブティーやデトックスウォーターが楽しめる宿もあります。"
  },
  {
    "key": "refa_luxury_amenity_spa_stay",
    "title": "2. ReFa（リファ）美容家電＆上質アメニティ（客室で自分磨きのご褒美時間）",
    "timing": "通年（誕生日・記念日・仕事の節目リフレッシュ）",
    "desc": "ReFa（リファ）のファインバブルシャワーヘッドや最新ドライヤー、ヘアアイロンを全室完備。JILL STUARTやロクシタン、THANNの上質バスアメニティ。スチーマー美顔器やPOLA高級スキンケアセット付きレディースプラン。",
    "spots": "美肌温泉宿のレディース専用ルーム、デザインホテル、デザイナーズ旅館",
    "access": "箱根・湯河原・有馬・草津・道後温泉など。",
    "tip": "レディースプラン限定の美容アメニティセット（フェイスパックやアロマオイル等）はそのまま持ち帰ることができる宿が多く、旅の余韻を自宅でも楽しめます。"
  },
  {
    "key": "solo_room_dining_quiet_onsen_stay",
    "title": "3. お部屋食＆個室ダイニング確約（人目を気にせず味わう旬の美肌会席）",
    "timing": "通年（四季折々の旬の食材を楽しむひとり旅）",
    "desc": "夕食・朝食ともにお部屋出し、または半個室ダイニングが確約されたプラン。一人でも周囲の視線を気にせず、自分のペースでお酒や料理をじっくり堪能。コラーゲン鍋や温野菜、季節の海鮮が彩るヘルシーな会席料理。",
    "spots": "湯河原温泉、伊香保温泉、城崎温泉、嬉野温泉の隠れ家小規模旅館",
    "access": "各温泉街中心部。",
    "tip": "一人旅専用プランが設定されている旅館は、仲居さんの配膳タイミングも一人旅に最適化されており、読書やスマホを見ながら気ままに食事を楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-rose-950 via-pink-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-rose-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-rose-300 to-pink-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            WOMEN SOLO ONSEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【女性一人旅・安心ステイ＆ご褒美温泉宿】女性専用フロア＆Refa・美肌湯 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-pink-100/90 leading-relaxed">
            誰にも気兼ねなく、自分のペースで過ごす贅沢な休日「女性一人旅・ご褒美温泉宿」。安心のオートロック・女性専用エリア。ReFaのシャワーヘッドや高級スキンケア。お部屋食や半個室ダイニングで味わう美食と、つるつるの美肌温泉へ。
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
              className="bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-rose-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-0.5 rounded-full uppercase">
                    🌸 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-rose-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-1.5">
                  <span className="font-bold text-pink-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">💡 ひとり旅を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ソロステイ宿カード */}
              <div className="space-y-4 pt-4 border-t border-rose-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-rose-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    女性歓迎プラン
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-rose-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-rose-50 border-b border-rose-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-rose-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-rose-300 px-2 py-0.5 rounded border border-rose-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-rose-950 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-rose-950 bg-white hover:bg-rose-50 border border-rose-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
