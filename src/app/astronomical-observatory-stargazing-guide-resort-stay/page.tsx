import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【天体望遠鏡ドーム＆星空案内人（星ソムリエ）常駐宿】本格天体観測 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "宇宙に一番近いホテル！大型天体望遠鏡ドーム＆星ソムリエ常駐の星空リゾート宿完全特化！長野八ヶ岳・野辺山、南信州阿智村、美ヶ原高原、福島浄土平、月のクレーター・土星の輪・すばる観察、夜間スターウォッチングツアー宿を徹底解説。",
  keywords: ["astronomical-observatory-stargazing-guide-resort-stay", "星空旅行", "天体観測", "夜景ホテル", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["astronomical-observatory-stargazing-guide-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for astronomical-observatory-stargazing-guide-resort-stay", e);
  }
  return {};
}

export default function StargazingHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "yatsugatake_nobeyama_observatory_stay",
    "title": "1. 長野＆山梨・八ヶ岳＆野辺山高原〜国立天文台（日本屈指の天体観測の聖地）",
    "timing": "通年（空気が澄み渡る秋〜冬の星空は圧倒的な美しさ）",
    "desc": "標高1,300mを超え、澄んだ空気と低い湿度に恵まれた天文学の聖地「野辺山高原（国立天文台野辺山宇宙電波観測所）」。ホテル専用の天体観測ドームや大型望遠鏡。専門スタッフや星空案内人による毎夜の星空観察会。八ヶ岳の爽やかな風を感じる高原リゾート。",
    "spots": "国立天文台野辺山、清里高原（清泉寮・サンメドウズ清里）、八ヶ岳グレイスホテル（星空観測ドーム）、美し森",
    "access": "JR小海線「野辺山駅」または「清里駅」下車。中央道「須玉IC」または「小淵沢IC」より車約20〜30分。",
    "tip": "野辺山高原は「日本の三選星名所」にも選ばれており、人工の明かりがほとんどないため、肉眼でもはっきりと天の川の濃淡が見分けられます。"
  },
  {
    "key": "achi_star_village_inn_stay",
    "title": "2. 長野・南信州阿智村（昼神温泉）〜天空の楽園ナイトツアー（環境省認定日本一の星空）",
    "timing": "ナイトツアー開催期間：4月中旬〜11月下旬（冬期は昼神温泉での星空企画あり）",
    "desc": "環境省が実施した全国星空継続観察で「星が最も輝いて見える場所」第1位に認定された阿智村。標高1,400mの「富士見台高原ヘブンスそのはら」までゴンドラで登る「天空の楽園 日本一の星空ナイトツアー」。合図とともに全照明が一斉に消灯する感動の瞬間。美肌湯の昼神温泉。",
    "spots": "ヘブンスそのはら（天空の楽園ナイトツアー）、昼神温泉郷（美肌のアルカリ性硫黄泉・足湯）、阿智川散策路、浪合パーク",
    "access": "JR飯田線「飯田駅」より路線バス約30分。中央道「飯田山本IC」または「園原IC」より約10分。",
    "tip": "ナイトツアーでは山頂の気温が平地より10℃近く下がるため、夏でも長袖の上着、春・秋は防寒着やブランケットの持参が必須です。"
  },
  {
    "key": "utsukushigahara_star_sommelier_stay",
    "title": "3. 長野・美ヶ原高原〜標高2,000m雲上の特等席（360度パノラマと満天の星）",
    "timing": "通年（冬の白銀雪上星空ツアー・初夏〜秋の高山植物）",
    "desc": "標高2,034mの王ヶ頭山頂に佇む雲上の孤高ホテル「王ヶ頭ホテル」をはじめとする美ヶ原高原。富士山、北アルプス、中央アルプス、南アルプスを望む360度の大パノラマ。夜は明かりが一切ない雲上のテラスから仰ぐ天然プラネタリウム。星ソムリエのスライド解説。",
    "spots": "美ヶ原高原（王ヶ頭・王ヶ鼻・美しの塔）、美ヶ原高原美術館、美ヶ原温泉",
    "access": "JR松本駅より送迎バスまたは車で約70分（冬期は雪上送迎）。",
    "tip": "運が良い日は、眼下に広がる広大な雲海の上に満天の星空が輝くという、まるで宇宙空間に浮かんでいるかのような神秘的な絶景に遭遇できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 text-white p-8 md:p-14 shadow-xl border border-indigo-400/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            OBSERVATORY & STAR SOMMELIER GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【天体望遠鏡ドーム＆星空案内人（星ソムリエ）常駐宿】本格天体観測 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed">
            漆黒の夜空を貫く満天の天の川。ホテルの屋上や専用ドームに設置された本格的な大型天体望遠鏡。「星空案内人（星ソムリエ）」のわかりやすくロマンチックな星座解説を聞きながら、肉眼では見えない土星の輪や木星の縞模様、月面のクレーターを覗き込む感動の宇宙体験ステイへ。
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
