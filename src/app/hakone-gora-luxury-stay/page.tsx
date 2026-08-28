import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【箱根・強羅】大涌谷にごり湯＆美術館めぐり極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "箱根・強羅エリア完全特化！大涌谷の白濁硫黄泉、強羅公園、彫刻の森美術館周辺の観光と、客室露天風呂・贅沢会席が自慢の強羅温泉旅館を徹底解説。",
  keywords: ["hakone-gora-luxury-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hakone-gora-luxury-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hakone-gora-luxury-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "gora_luxury_view",
    "title": "1. 強羅高台・早雲山周辺（相模湾・明星ヶ岳の大文字を望むパノラマ）",
    "timing": "通年（8月の大文字焼き・秋の紅葉）",
    "desc": "強羅の高台に位置する隠れ家宿。大涌谷から直接引湯する濃厚な酸性硫酸塩泉（白濁湯）や、箱根連山・相模湾を見晴らす客室露天風呂で心ゆくまでプライベートな時間を。",
    "spots": "早雲山駅（cu―mo箱根・展望テラス足湯）、箱根ロープウェイ（大涌谷直通）、明星ヶ岳大文字",
    "access": "箱根登山ケーブルカー「早雲山駅」「上強羅駅」下車。強羅駅より送迎あり。",
    "tip": "早雲山駅の「cu―mo箱根」展望テラスで名物スムージー「ニューベル」を飲みながら足湯に浸かるのが人気です。"
  },
  {
    "key": "gora_station_walk",
    "title": "2. 強羅駅周辺・温泉街（登山電車とケーブルカーの結節点で快適ステイ）",
    "timing": "通年（箱根周遊の最高の拠点）",
    "desc": "箱根登山電車と箱根登山ケーブルカーの乗換駅である強羅駅。駅前には名物の豆腐かつ煮店やお土産店が並び、芦ノ湖や大涌谷、仙石原方面へのアクセスも抜群です。",
    "spots": "箱根強羅公園（熱帯植物館・クラフトハウス）、田むら銀かつ亭（豆腐かつ煮）、強羅駅前足湯",
    "access": "箱根登山鉄道「強羅駅」下車すぐ。箱根湯本駅から登山電車で約35分。",
    "tip": "「田むら銀かつ亭」の名物豆腐かつ煮は整理券必須の人気店。チェックイン前や早めの時間に整理券を発券しましょう。"
  },
  {
    "key": "gora_art_resort",
    "title": "3. 彫刻の森・中強羅エリア（緑豊かな野外美術館とスタイリッシュ宿）",
    "timing": "通年（野外彫刻と足湯カフェ）",
    "desc": "7万平方メートルの広大な芝生にピカソ館やヘンリー・ムーアの彫刻が点在する「彫刻の森美術館」。アート散策の後は、モダンなデザイナーズ温泉ホテルでリラックス。",
    "spots": "彫刻の森美術館（幸せをよぶシンフォニー彫刻・温泉足湯）、箱根写真美術館、箱根美術館",
    "access": "箱根登山鉄道「彫刻の森駅」下車徒歩約2分。",
    "tip": "彫刻の森美術館内の源泉かけ流し天然温泉足湯は、散策で疲れた足を癒やす最高の休憩スポットです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HAKONE GORA MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【箱根・強羅】大涌谷にごり湯＆美術館めぐり極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高約500m、豊かな森と澄んだ空気に包まれる箱根の高級別荘地「強羅」。乳白色のにごり湯に浸かり、アートと美食に酔いしれる大人の休日。
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
