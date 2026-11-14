import ShareButtons from "@/app/components/ShareButtons";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/nagano-shigakogen-shibutoge-stay/" },
  title: "長野・志賀高原＆渋峠：日本国道最高地点・雲海テラス＆パウダースノー極上宿 厳選ガイド",
  description: "長野・上信越高原国立公園エリア完全特化！日本国道最高地点（標高2,172m）の渋峠、SORA terraceの雲海、志賀高原18スキー場ビッグゲレンデ、熊の湯温泉の濃厚緑色硫黄泉と高原山岳リゾートを徹底解説。",
  keywords: ["長野", "志賀高原", "渋峠", "日本国道最高地点", "雲海テラス", "パウダースノー極上宿", "温泉宿"],
  openGraph: {
    title: "長野・志賀高原＆渋峠：日本国道最高地点・雲海テラス＆パウダースノー極上宿 厳選ガイド",
    description: "長野・上信越高原国立公園エリア完全特化！日本国道最高地点（標高2,172m）の渋峠、SORA terraceの雲海、志賀高原18スキー場ビッグゲレンデ、熊の湯温泉の濃厚緑色硫黄泉と高原山岳リゾートを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "長野・志賀高原＆渋峠：日本国道最高地点・雲海テラス＆パウダースノー極上宿 厳選ガイド",
    description: "長野・上信越高原国立公園エリア完全特化！日本国道最高地点（標高2,172m）の渋峠、SORA terraceの雲海、志賀高原18スキー場ビッグゲレンデ、熊の湯温泉の濃厚緑色硫黄泉と高原山岳リゾートを徹底解説。",
  }
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


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【長野・志賀高原＆渋峠】日本国道最高地点・雲海テラス＆パウダースノー極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "長野・上信越高原国立公園エリア完全特化！日本国道最高地点（標高2,172m）の渋峠、SORA terraceの雲海、志賀高原18スキー場ビッグゲレンデ、熊の湯温泉の濃厚緑色硫黄泉と高原山岳リゾートを徹底解説。",
    "url": "https://croud-travel.pages.dev/nagano-shigakogen-shibutoge-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【長野・志賀高原＆渋峠】日本国道最高地点・雲海テラス＆パウダースノー極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/nagano-shigakogen-shibutoge-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHIGA HIGHLAND NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「長野・志賀高原＆渋峠」日本国道最高地点・雲海テラス＆パウダースノー極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高2,000mを超える天空のリゾート「志賀高原・渋峠」。雲海を見下ろす日本国道最高地点と、息をのむ大パノラマ。エメラルドグリーンに輝く熊の湯温泉と、世界最高峰のパウダースノーを誇る山岳ホテルステイ。
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-6">
        <ShareButtons title={"長野・志賀高原＆渋峠：日本国道最高地点・雲海テラス＆パウダースノー極上宿 厳選ガイド"} url={"https://croud-travel.pages.dev/nagano-shigakogen-shibutoge-stay/"} />
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
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">{guide.title}</h2>
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
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2"><span>{guide.title}周辺のおすすめ厳選宿</span></h3>
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
                              loading="eager" fetchPriority="high"
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">{hotel.hotelName}</h4>
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
                          rel="sponsored noopener noreferrer"
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

                    
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">長野・志賀高原＆渋峠：日本国道最高地点・雲海テラス＆パウダースノー極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「長野・志賀高原＆渋峠：日本国道最高地点・雲海テラス＆パウダースノー極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 志賀高原ロッヂ</td>
                <td className="p-3 text-stone-600">長野県下高井郡山ノ内町平穏7148-23</td>
                <td className="p-3 text-stone-600">湯田中駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.33（58件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39261%2F39261.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 志賀高原熊の湯・硯川温泉　にごり湯の宿硯川ホテル</td>
                <td className="p-3 text-stone-600">長野県下高井郡山ノ内町平穏7148-10</td>
                <td className="p-3 text-stone-600">湯田中駅周辺</td>
                <td className="p-3 text-stone-600">有　６０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★3.83（491件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31423%2F31423.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 熊の湯温泉　熊の湯ホテル</td>
                <td className="p-3 text-stone-600">長野県下高井郡山ノ内町平穏7148</td>
                <td className="p-3 text-stone-600">湯田中駅周辺</td>
                <td className="p-3 text-stone-600">有　２５０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.15（252件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30840%2F30840.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 志賀高原　ホテル一望閣</td>
                <td className="p-3 text-stone-600">長野県下高井郡山ノ内町大字平穏7148-31</td>
                <td className="p-3 text-stone-600">長野駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台。　当館前が満車の場合は徒歩３～４分の共同駐車場となります。共に無料</td>
                <td className="p-3 font-bold text-amber-600">★3.65（286件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7379%2F7379.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 志賀高原発哺温泉　岩菅ホテル</td>
                <td className="p-3 text-stone-600">長野県下高井郡山ノ内町志賀高原7149</td>
                <td className="p-3 text-stone-600">湯田中駅周辺</td>
                <td className="p-3 text-stone-600">有　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.24（56件）</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31838%2F31838.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 志賀高原　ホテルタキモト</td>
                <td className="p-3 text-stone-600">長野県下高井郡山ノ内町平穏7149-16</td>
                <td className="p-3 text-stone-600">湯田中駅周辺</td>
                <td className="p-3 text-stone-600">有り　１５台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.14（55件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147144%2F147144.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">旅の目的に合わせて選ぶ「長野・志賀高原＆渋峠」各宿の強みと基本情報</h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">志賀高原ロッヂ</h3>
                  <span className="text-xs text-stone-400 ml-2">（しがこうげん　ろっじ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/39261/39261_kya.jpg" alt="志賀高原ロッヂ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>チェックイン13時～OK！貸切サウナ併設（要予約）ペット同伴可♪横手山渋峠＆熊の湯スキー場徒歩3分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下高井郡山ノ内町平穏7148-23 ／ 最寄り駅：湯田中 ／ 交通案内：湯田中駅からバスで45分ほたる温泉下車徒歩5分。信州中野ICから車で約40分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>志賀高原ロッヂの滞在ポイント：</strong>「長野・志賀高原＆渋峠エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">志賀高原熊の湯・硯川温泉　にごり湯の宿硯川ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（しがこうげん　くまのゆ・すずりがわおんせん　にごりゆのやど　すずりがわほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31423/31423_w.jpg" alt="志賀高原熊の湯・硯川温泉　にごり湯の宿硯川ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>熊の湯・硯川温泉に位置し、天然硫黄のにごり湯温泉です。トレッキング、スキーの疲れを癒して下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下高井郡山ノ内町平穏7148-10 ／ 最寄り駅：湯田中 ／ 交通案内：長野電鉄線　湯田中駅下車　バス４０分／上信越自動車道信州中野ＩＣ　国道２９２号経由３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　６０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大浴場はいつでも入れるが料理と備品は物足りない大浴場がいつでも入れるのが良かったアメニティが少ないのが残念でした料理は物足らない感じでした」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">熊の湯温泉　熊の湯ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（くまのゆおんせん　くまのゆほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/30840/30840_u.jpg" alt="熊の湯温泉　熊の湯ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>由緒ある源泉掛け流しの硫黄泉は総檜造りで好評です。日によって透明な緑から乳緑色まで変化します。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下高井郡山ノ内町平穏7148 ／ 最寄り駅：湯田中 ／ 交通案内：私鉄長野電鉄湯田中駅下車　長電バス熊の湯硯川行　熊の湯下車０分／上信越自動車道信州中野ＩＣ下車Ｒ２９２号線経由約３０ｋｍ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　２５０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉は最高だが清掃と接客に改善の余地あり温泉はとても良い泉質です。硫黄泉のガスの影響もあってか施設はかなり老朽化しており、あとどのくらい保つんだろうか。行くなら早めに行くのが良さそうです。…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">志賀高原　ホテル一望閣</h3>
                  <span className="text-xs text-stone-400 ml-2">（しがこうげん　ほてるいちぼうかく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7379/7379_heya.jpg" alt="志賀高原　ホテル一望閣 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2023年コンドミニアム新客室OPEN★乳緑色が珍しい100％天然かけ流し温泉が自慢★日本一のホタル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下高井郡山ノ内町大字平穏7148-31 ／ 最寄り駅：長野 ／ 交通案内：上信越道信州中野ＩＣより国道２９２号線にて４５分。ＪＲ長野駅より急行バス８０分又は長電特急電車５０分＆バス利用４５分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台。　当館前が満車の場合は徒歩３～４分の共同駐車場となります。共に無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉の泉質だけは満足できた温泉だけは良かった」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">志賀高原発哺温泉　岩菅ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（しがこうげんほっぽおんせん　いわすげ　ほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31838/31838_k.jpg" alt="志賀高原発哺温泉　岩菅ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>東館山ゴンドラリフト乗り場横！標高1600Mから眺める北アルプスのパノラマにうっとり♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下高井郡山ノ内町志賀高原7149 ／ 最寄り駅：湯田中 ／ 交通案内：長野電鉄　湯田中駅よりバスにて４０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　２０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ロケーションとサービスが良く食事も美味しいとにかくロケーションが良くサービスも良い。チェックインまで1時間ほど早めに到着しましたが、お部屋に通してもらえました。食事は品数も多くいつも美味しいです。…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">志賀高原　ホテルタキモト</h3>
                  <span className="text-xs text-stone-400 ml-2">（たきもと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147144/147144_kan1.jpg" alt="志賀高原　ホテルタキモト 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>身も心も美味しいオーベルジュ。創作料理と天然温泉,志賀高原随一の大パノラマを堪能。ゲレンデ徒歩３分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下高井郡山ノ内町平穏7149-16 ／ 最寄り駅：湯田中 ／ 交通案内：高天ヶ原バス停より徒歩にて約２分</p>
                  <p>【長野・志賀高原＆渋峠：日本国道最高地点・雲海テラス＆】 <strong>【駐車場・マイカー利用】</strong>有り　１５台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「避暑には最高だが夕食は控えめ設備は古めですが館内は清潔で快適に過ごせましたし、お盆前に最高気温が23度と避暑には最高でした夕食は控えめのプランにしたのですが予想以上に控えめでしたク…」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>



      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures/"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-8">
        <ShareButtons title={"長野・志賀高原＆渋峠：日本国道最高地点・雲海テラス＆パウダースノー極上宿 厳選ガイド"} url={"https://croud-travel.pages.dev/nagano-shigakogen-shibutoge-stay/"} />
      </div>
      <HubRelatedPosts currentSlug="nagano-shigakogen-shibutoge-stay" />
</div>
  );
}
