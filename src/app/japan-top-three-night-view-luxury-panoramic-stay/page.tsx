import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【日本三大夜景＆全室パノラマ夜景ビュー宿】1000万ドルの夜景・特等席 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "光の海を見下ろす極上の夜！日本三大夜景＆新日本三大夜景パノラマホテル完全特化！長崎稲佐山、神戸六甲山・摩耶山、北海道函館山、山梨笛吹川フルーツ公園、北九州皿倉山、バルコニーやビューバスから望む1000万ドルの絶景ステイを徹底解説。",
  keywords: ["japan-top-three-night-view-luxury-panoramic-stay", "星空旅行", "天体観測", "夜景ホテル", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-top-three-night-view-luxury-panoramic-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-top-three-night-view-luxury-panoramic-stay", e);
  }
  return {};
}

export default function StargazingHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "nagasaki_inasayama_night_view_stay",
    "title": "1. 長崎・稲佐山〜世界新三大夜景（すり鉢状の地形が生む光のドラマ）",
    "timing": "通年（夕暮れから日没後30分のトワイライトタイムは必見）",
    "desc": "モナコ、上海とともに「世界新三大夜景」に選定された長崎の夜景。標高333mの稲佐山山頂展望台から望むすり鉢状の長崎港と市街地のパノラマ。稲佐山の中腹に位置するホテルでは、客室のテラスや展望レストランから光の海を独占。長崎ロープウェイ。",
    "spots": "稲佐山山頂展望台、長崎ロープウェイ（淵神社駅）、長崎港、グラバー園、大浦天主堂",
    "access": "JR長崎駅より長崎バス「稲佐山行」で約15分。長崎空港よりリムジンバス約45分。",
    "tip": "稲佐山の夜景の中には「ハートの形」に見える街明かりが隠されており、見つけると恋愛が成就するというロマンチックな伝説があります。"
  },
  {
    "key": "kobe_rokko_night_view_luxury_stay",
    "title": "2. 兵庫・神戸六甲山＆摩耶山〜1000万ドルの煌めき（大阪湾から関西空港まで）",
    "timing": "通年（空気が澄む秋冬の夜景は光の輪郭が際立つ）",
    "desc": "日本三大夜景の筆頭格「摩耶山 掬星台（きくせいだい）」と「六甲ガーデンテラス」。「星を手で掬（すく）える」が名前の由来の掬星台。神戸市街から大阪平野、遠く関西国際空港まで見渡す大パノラマ。山頂リゾートホテルや有馬温泉の展望露天。",
    "spots": "摩耶山 掬星台（まやビューライン）、六甲ガーデンテラス（自然体感展望台 六甲枝垂れ）、六甲有馬ロープウェー、有馬温泉",
    "access": "JR三ノ宮駅または阪急六甲駅より市バス乗換。阪神高速「魚崎IC」より表六甲ドライブウェイ経由約30分。",
    "tip": "摩耶山掬星台の展望広場には蓄光石で天の川を再現した「きらきら小径」があり、足元が幻想的な青い光で輝く人気のデートスポットです。"
  },
  {
    "key": "hakodate_mountain_night_view_stay",
    "title": "3. 北海道・函館山〜津軽海峡と函館湾のくびれ美（扇形に広がる光の扇）",
    "timing": "通年（秋の澄んだ夜空・冬の白銀と光のコントラスト）",
    "desc": "ミシュラン・グリーンガイド・ジャポンで三ツ星を獲得した「函館山からの夜景」。両側を津軽海峡と函館湾の海に挟まれた独特のくびれ地形。扇形に広がる温かみのある街の灯火と漁火（いさりび）。元町の坂道洋館群とベイエリアの赤レンガ倉庫。",
    "spots": "函館山山頂展望台（函館山ロープウェイ）、元町八幡坂、金森赤レンガ倉庫、湯の川温泉",
    "access": "JR函館駅より市電または函館山登山バス。函館空港よりタクシー約20分。",
    "tip": "夜景の中に「ハート」という文字に見える道路の光があり、これを見つけると愛が深まる・願いが叶うと言われています。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 text-white p-8 md:p-14 shadow-xl border border-indigo-400/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            TOP 3 NIGHT VIEW PANORAMIC SUITE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【日本三大夜景＆全室パノラマ夜景ビュー宿】1000万ドルの夜景・特等席 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed">
            街の明かりが無数の宝石のように煌めく「1000万ドルの夜景」。「日本三大夜景」の長崎稲佐山・神戸六甲山・函館山。客室の大きな窓やプライベートバルコニー、さらには湯船に浸かりながら光のパノラマを独占するビューバス。ワイングラスを傾けながら過ごすロマンチックな夜へ。
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
              className="bg-white border border-indigo-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-indigo-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-0.5 rounded-full uppercase">
                    🌌 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-indigo-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-1.5">
                  <span className="font-bold text-indigo-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-1.5">
                  <span className="font-bold text-purple-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
                  <span className="font-bold text-cyan-950 block text-[11px]">💡 星空鑑賞を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-indigo-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-indigo-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    星空展望宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-indigo-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-indigo-50/50 border-b border-indigo-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-indigo-800/40 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-950 bg-white hover:bg-indigo-50 border border-indigo-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
