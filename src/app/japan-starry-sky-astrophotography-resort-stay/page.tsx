import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【満天の星空＆星空案内人の宿】阿智村・野辺山・石垣島＆星空露天風呂 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "環境省認定の日本一の星空完全特化！長野「阿智村」、八ヶ岳「野辺山高原」、星空保護区「石垣島・西表島」、岡山「美星町」、星空案内人（星ソムリエ）の天体観測ツアーと屋上星空テラス温泉宿を徹底解説。",
  keywords: ["japan-starry-sky-astrophotography-resort-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-starry-sky-astrophotography-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-starry-sky-astrophotography-resort-stay", e);
  }
  return {};
}

export default function ScenicViewHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "achi_starry_sky_luxury_stay",
    "title": "1. 長野・阿智村〜昼神温泉（環境省認定「日本一の星空」ナイトツアー）",
    "timing": "通年（特に新月期やペルセウス座・ふたご座流星群の時期は圧巻）",
    "desc": "環境省が実施した全国星空継続観察で「星が最も輝いて見える場所」第1位に認定された阿智村。ヘブンスそのはら天空の楽園ナイトツアーでは、ゴンドラで標高1,400mへ上がり一斉に消灯。美肌の昼神温泉での至福の湯浴み。",
    "spots": "富士見台高原ヘブンスそのはら（天空の楽園 ナイトツアー）、浪合パーク（星空デッキ）、昼神温泉足湯",
    "access": "JR飯田線「飯田駅」より路線バス約30分。中央道「飯田山本IC」より約10分。",
    "tip": "ナイトツアー参加時は、春・秋・冬はもちろん、夏でも山頂は気温が10度近くまで下がるため、厚手の防寒着やブランケットが必須です。"
  },
  {
    "key": "nobeyama_yatsugatake_stars_stay",
    "title": "2. 八ヶ岳・野辺山高原〜美星町（標高1300mの澄んだ大気と巨大電波望遠鏡）",
    "timing": "通年（秋〜冬期は空気が澄み天の川の微細な星屑まで肉眼で見える）",
    "desc": "国立天文台野辺山宇宙電波観測所が置かれるほど星空観測に適した「野辺山高原」。星空案内人（星ソムリエ）が常駐し、大型天体望遠鏡で土星の輪や木星の衛星を案内してくれるホテル。光害防止条例第1号の岡山県美星町。",
    "spots": "国立天文台野辺山、野辺山SLランド跡、八ヶ岳自然文化園、美星天文台（岡山県）",
    "access": "JR小海線「野辺山駅」下車。中央道「須玉IC」より約30分。",
    "tip": "スマートフォンで星空を綺麗に撮影するには、三脚でスマホを固定し「夜景モード（露光時間10〜30秒）」に設定するのがポイントです。"
  },
  {
    "key": "ishigaki_starry_island_resort",
    "title": "3. 沖縄・石垣島＆西表島（国内初の「星空保護区」認定・全88星座中84星座を観測）",
    "timing": "12月〜6月（南十字星観測シーズン）、夏秋（天の川の大アーチ）",
    "desc": "国際ダークスカイ協会より日本初の「星空保護区（ダークスカイ・パーク）」に認定された西表石垣国立公園。日本で唯一「南十字星」を観測できる南国の楽園。波音だけが響くプライベートビーチでのスターゲイジング。",
    "spots": "石垣島天文台、平久保崎灯台、波照間島星空観測タワー、西表島浦内川",
    "access": "新石垣空港より車・バスで島内各地へ。",
    "tip": "波照間島（はてるまじま）まで足を伸ばすと、日本最南端の碑の周辺で水平線ギリギリに輝く南十字星を最も美しく観察できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            STARRY SKY & ASTROPHOTOGRAPHY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【満天の星空＆星空案内人の宿】阿智村・野辺山・石垣島＆星空露天風呂 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            人工の光が届かない満天のプラネタリウム「星降る宿」。環境省認定日本一の星空・阿智村ナイトツアー、八ヶ岳野辺山高原の巨大電波望遠鏡、南十字星が輝く八重山諸島。天の川を眺めながら湯船に浸かる神秘の夜へ。
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

              {/* 絶景ポイント・アクセス・撮影のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 絶景ビュースポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 最高の景色を楽しむコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの絶景展望宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    絶景プラン
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
