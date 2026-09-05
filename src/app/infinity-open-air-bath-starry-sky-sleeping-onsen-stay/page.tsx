import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【満天の星空露天風呂＆寝湯インフィニティ宿】天然プラネタリウム温泉 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "湯船に浮かびながら星屑を数える！星空インフィニティ露天風呂＆寝湯温泉宿完全特化！群馬万座温泉（標高1,800m）、長野白骨温泉・野沢温泉、栃木奥日光湯元温泉、大分久住高原、遮るもののない天空露天風呂と湯浴み体験を徹底解説。",
  keywords: ["infinity-open-air-bath-starry-sky-sleeping-onsen-stay", "星空旅行", "天体観測", "夜景ホテル", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["infinity-open-air-bath-starry-sky-sleeping-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for infinity-open-air-bath-starry-sky-sleeping-onsen-stay", e);
  }
  return {};
}

export default function StargazingHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "manza_sky_onsen_starry_stay",
    "title": "1. 群馬・万座温泉〜標高1,800m「星に一番近い温泉」（濃厚白濁硫黄泉と天空露天）",
    "timing": "通年（冬の雪見星空風呂・夏の爽快な高冷地露天）",
    "desc": "日本屈指の高所に湧く通年営業の温泉地「万座（まんざ）温泉」。硫黄含有量日本一を誇る乳白色のにごり湯。山々の稜線と満天の星空が溶け合う開放的な展望露天風呂。寝湯に横たわれば、頭上いっぱいに広がる無数の星座と流れ星。",
    "spots": "万座温泉（万座プリンスホテルこまくさの湯・万座高原ホテル石庭露天風呂）、万座空吹（からぶき）、志賀草津高原ルート",
    "access": "JR吾妻線「万座・鹿沢口駅」より路線バス約45分。上信越道「碓氷軽井沢IC」より約80分。",
    "tip": "万座温泉の露天風呂は夜間に最低限の足元灯のみとなり、漆黒の闇の中で乳白色の湯けむりと星空のコントラストが息を呑む幻想的な世界を作り出します。"
  },
  {
    "key": "kuju_highland_star_bath_stay",
    "title": "2. 大分・久住高原〜くじゅう連山パノラマ寝湯（九州一の星空リゾート）",
    "timing": "通年（春〜秋の緑の高原・澄み渡る秋の天の川）",
    "desc": "標高約800〜1,000m、阿蘇くじゅう国立公園に広がる「久住（くじゅう）高原」。見渡す限りの草原地帯で街明かりが完全に遮断された絶好の天体観測地。なだらかな傾斜がつけられた寝湯から仰ぐ南蛮船のような雄大な星空パノラマ。",
    "spots": "久住高原温泉郷（レゾネイトクラブくじゅう）、くじゅう花公園、ガンジーファーム、長者原湿原",
    "access": "JR豊肥本線「豊後竹田駅」より車約30分。大分道「九重IC」よりやまなみハイウェイ経由約50分。",
    "tip": "寝湯は首元に木枕が設置されており、耳元まで温かい温泉に浸かりながら、力を抜いて水面に浮かぶようなリラクゼーション体勢で星空を眺め続けられます。"
  },
  {
    "key": "okunikko_starry_open_air_stay",
    "title": "3. 栃木・奥日光湯元温泉〜標高1,500m白濁湯と静寂の森（湯ノ湖の星屑リフレクション）",
    "timing": "通年（新緑の6月・錦秋の10月・冬の雪見露天）",
    "desc": "日光白根山の山麓、湯ノ湖の畔に開かれた「奥日光湯元温泉」。エメラルドグリーンから白濁へと色を変える濃厚な硫黄泉。周囲を深い原生林に囲まれ、街灯が少ないため夜空の暗さは抜群。湯ノ湖の水面に映り込む逆さ星空。",
    "spots": "奥日光湯元温泉（湯元板屋・湯守釜屋）、湯ノ湖遊歩道、湯滝、戦場ヶ原（星空観察ポイント）",
    "access": "JR・東武日光駅より東武バス「湯元温泉行」で約75分。日光宇都宮道路「清滝IC」よりいろは坂経由約45分。",
    "tip": "戦場ヶ原の三本松展望デッキは全国から天体写真ファンが集まる屈指の星空撮影地で、湯元温泉の宿から車で約5〜10分でアクセスできます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 text-white p-8 md:p-14 shadow-xl border border-indigo-400/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            STARGAZING INFINITY BATH & SLEEPING SPA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【満天の星空露天風呂＆寝湯インフィニティ宿】天然プラネタリウム温泉 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed">
            標高1,500mを超える高山温泉郷。明かりが届かない大自然の露天風呂で、湯船に仰向けに寝そべる「寝湯（ねゆ）」。頭上には手を伸ばせば届きそうな満天の星空と、湯面きらめく逆さ星屑。温かな湯に包まれながら宇宙と一体になる究極のリラクゼーションへ。
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
