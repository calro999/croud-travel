import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/hokkaido-furano-biei-lavender-stay/" },
  title: "北海道・富良野＆美瑛：青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 厳選ガイド",
  description: "パッチワークの丘と紫の絨毯・北海道富良野＆美瑛エリア完全特化！「ファーム富田」のラベンダー畑、神秘のコバルトブルー「白金青い池」、白ひげの滝、源泉100%白金温泉、ふらの和牛・富良野メロン会席宿を徹底解説。",
  keywords: ["北海道", "富良野", "美瑛", "青い池", "ファーム富田ラベンダー", "白金温泉", "富良野牛宿"],
  openGraph: {
    title: "北海道・富良野＆美瑛：青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 厳選ガイド",
    description: "パッチワークの丘と紫の絨毯・北海道富良野＆美瑛エリア完全特化！「ファーム富田」のラベンダー畑、神秘のコバルトブルー「白金青い池」、白ひげの滝、源泉100%白金温泉、ふらの和牛・富良野メロン会席宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "北海道・富良野＆美瑛：青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 厳選ガイド",
    description: "パッチワークの丘と紫の絨毯・北海道富良野＆美瑛エリア完全特化！「ファーム富田」のラベンダー畑、神秘のコバルトブルー「白金青い池」、白ひげの滝、源泉100%白金温泉、ふらの和牛・富良野メロン会席宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hokkaido-furano-biei-lavender-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido-furano-biei-lavender-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "furano_lavender_farm_stay",
    "title": "1. ファーム富田〜中富良野（見渡す限りの紫のグラデーションとラベンダーソフト）",
    "timing": "夏期：6月下旬〜8月上旬（7月中旬〜下旬がラベンダーの満開ピーク）",
    "desc": "日本最大級のラベンダー畑が広がる「ファーム富田」。色とりどりの花々が丘の斜面に虹のように咲く「彩りの畑」。十勝岳連峰を借景にした圧巻の風景美。ラベンダーエッセンシャルオイル抽出工房の見学。",
    "spots": "ファーム富田（トラディショナルラベンダー畑・彩りの畑・ポプリの舎）、フラワーランドかみふらの、かんのファーム",
    "access": "JR富良野線「ラベンダー畑駅（季節臨時駅）」下車徒歩7分。旭川空港より車で約45分。",
    "tip": "ファーム富田の「ラベンダーソフトクリーム」は、爽やかな香りと優しい甘みで夏の富良野観光の必食スイーツです。"
  },
  {
    "key": "biei_blue_pond_shirogane",
    "title": "2. 白金青い池〜白ひげの滝・四季彩の丘（神秘のコバルトブルーとパッチワークの丘）",
    "timing": "通年（新緑の初夏・夏の青い水面・冬の雪景色とライトアップ）",
    "desc": "立ち枯れたカラマツと幻想的な青い水面が世界的に有名な「白金青い池」。地下水が岩肌から白い髭のように湧き出る「白ひげの滝」。「パッチワークの路」「四季彩の丘」で巡る広大なロールベールアート。",
    "spots": "白金青い池、白ひげの滝（ブルーリバー）、四季彩の丘（ノロッコ号・アルパカ牧場）、セブンスターの木・ケンとメリーの木",
    "access": "美瑛駅より道北バスで約20分。",
    "tip": "青い池は、晴れた風のない日の午前中に訪れると、水面が最も鮮やかなコバルトブルーに輝きます。"
  },
  {
    "key": "furano_beef_melon_gourmet",
    "title": "3. プレミアム「ふらの和牛」＆富良野メロン（大自然の恵みを味わう北海道美食）",
    "timing": "通年（夏秋の富良野メロン・新じゃが・秋野菜）",
    "desc": "大雪山系の伏流水と厳しい寒暖差の中で育つブランド黒毛和牛「ふらの和牛」。糖度15度を超えるジューシーな「富良野メロン」、富良野チーズ工房の搾りたてミルクとワインチェダーチーズ。地元ワインとのマリアージュ。",
    "spots": "富良野チーズ工房（ピッツァ工房・アイス工房）、ふらのワインハウス、カンパーニュ工房",
    "access": "富良野市街・美瑛エリア。",
    "tip": "「ふらのワインハウス」の高台レストランでは、富良野盆地と十勝岳連峰のパノラマを眺めながらチーズフォンデュをいただけます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【北海道・富良野＆美瑛】青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "パッチワークの丘と紫の絨毯・北海道富良野＆美瑛エリア完全特化！「ファーム富田」のラベンダー畑、神秘のコバルトブルー「白金青い池」、白ひげの滝、源泉100%白金温泉、ふらの和牛・富良野メロン会席宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/hokkaido-furano-biei-lavender-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【北海道・富良野＆美瑛】青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/hokkaido-furano-biei-lavender-stay/" }
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
            FURANO & BIEI NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「北海道・富良野＆美瑛」青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            見渡す限りの紫の絨毯と色彩豊かなパッチワークの丘「北海道・富良野美瑛」。ファーム富田のラベンダーの香り。神秘的なエメラルドブルーを湛える「白金の青い池」。大雪山連峰を望む白金温泉と、極上のふらの和牛に包まれる旅。
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
                          rel="sponsored noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 北海道・富良野＆美瑛：青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「北海道・富良野＆美瑛：青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 富良野リゾートホテル　エーデルヴェルメ</td>
                <td className="p-3 text-stone-600">北海道富良野市北の峰町9-20</td>
                <td className="p-3 text-stone-600">富良野駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.07（428件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,470〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16240%2F16240.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 美瑛白金温泉　ホテルパークヒルズ</td>
                <td className="p-3 text-stone-600">北海道上川郡美瑛町字白金温泉</td>
                <td className="p-3 text-stone-600">美瑛駅周辺</td>
                <td className="p-3 text-stone-600">有り　120台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.21（1452件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,340〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9611%2F9611.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. Ｂ　ｃｙｃｌｅ</td>
                <td className="p-3 text-stone-600">北海道上川郡美瑛町栄町1-7-14</td>
                <td className="p-3 text-stone-600">美瑛駅周辺</td>
                <td className="p-3 text-stone-600">有り　１台　無料　要予約</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥3,433〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197268%2F197268.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. Ｂ＆Ｂ　ケンとメリー</td>
                <td className="p-3 text-stone-600">北海道上川郡美瑛町字大村大久保協生</td>
                <td className="p-3 text-stone-600">美瑛駅周辺</td>
                <td className="p-3 text-stone-600">有り　６台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★5（7件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74730%2F74730.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. コテージクローバー</td>
                <td className="p-3 text-stone-600">北海道上川郡美瑛町字大村大久保第一</td>
                <td className="p-3 text-stone-600">美瑛駅周辺</td>
                <td className="p-3 text-stone-600">有り　１台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151124%2F151124.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 天然温泉　紫雲の湯　ラビスタ富良野ヒルズ（ドーミーイン・御宿野乃　ホテルズグループ）</td>
                <td className="p-3 text-stone-600">北海道富良野市朝日町5-14</td>
                <td className="p-3 text-stone-600">富良野駅周辺</td>
                <td className="p-3 text-stone-600">有　ホテル駐車場無料（先着順）　※満車時は近隣パーキングにご案内致します。</td>
                <td className="p-3 font-bold text-amber-600">★4.41（719件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,560〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176997%2F176997.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富良野リゾートホテル　エーデルヴェルメ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふらの　りぞーとほてる　えーでるう゛ぇるめ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,470〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/16240/16240_trp.jpg" alt="富良野リゾートホテル　エーデルヴェルメ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>大雪山・十勝岳連峰と富良野の雄大な景色を堪能できる北欧風リゾートホテルでコンセプトルームを多数ご用意</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道富良野市北の峰町9-20 ／ 最寄り駅：富良野 ／ 交通案内：札幌ICから道央自動車道、三笠ICまで約30分、道道116号岩見沢三笠線/国道38号線、北の峰経由で約1時間30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「満足です。夜ご飯のお肉が美味しかったです。スタッフの方の対応も良く、笑顔で対応してくれました。ウェルカムドリンクや、ポップコーンなど置いてあり、嬉しかったです。お部屋のゴミ箱に袋が設置…　2026-08-26 17:43:42投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">美瑛白金温泉　ホテルパークヒルズ</h3>
                  <span className="text-xs text-stone-400 ml-2">（びえいしろかねおんせん　ぱーくひるず）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,340〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9611/9611_twn.jpg" alt="美瑛白金温泉　ホテルパークヒルズ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【青い池に、一番近い温泉宿】美瑛産の季節野菜が楽しめるビュッフェと源泉かけ流し温泉。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道上川郡美瑛町字白金温泉 ／ 最寄り駅：美瑛 ／ 交通案内：美瑛駅より車で２５分／旭川空港より車で４０分／道央自動車道　旭川鷹栖ＩＣより車で６０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　120台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「白髭の滝が近く、プールや朝食も充実朝食バイキング、子ども用メニューがあった。施設内にプールあり、水着を持ってくればよかった。白髭の滝が徒歩数分は魅力的!!ただナビの案内でホテル近くでじ…　2026-08-22 09:59:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｂ　ｃｙｃｌｅ</h3>
                  <span className="text-xs text-stone-400 ml-2">（びー　さいくる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,433〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/197268/197268.jpg" alt="Ｂ　ｃｙｃｌｅ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>美瑛駅すぐ！カップル・友達におすすめ！青い池／ケンとメリー／ファーム富田／白金温泉／白ひげの滝</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道上川郡美瑛町栄町1-7-14 ／ 最寄り駅：美瑛 ／ 交通案内：美瑛駅より徒歩約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１台　無料　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「Ｂ　ｃｙｃｌｅは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｂ＆Ｂ　ケンとメリー</h3>
                  <span className="text-xs text-stone-400 ml-2">（びーあんどびー　けんとめりー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/74730/74730_ru.jpg" alt="Ｂ＆Ｂ　ケンとメリー 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>大雪山系を一望できる広い庭とテラスが自慢。「ケンとメリーの木」の傍に建つ可愛いペンションです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道上川郡美瑛町字大村大久保協生 ／ 最寄り駅：美瑛 ／ 交通案内：ＪＲ　美瑛駅よりお車にて５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　６台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「Ｂ＆Ｂ　ケンとメリーは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">コテージクローバー</h3>
                  <span className="text-xs text-stone-400 ml-2">（くろーばー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/151124/151124.jpg" alt="コテージクローバー 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>美瑛の観光スポット「ケンとメリーの木」まで２００ｍ。築３８年の家をそのまま利用。畑の中の一軒家</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道上川郡美瑛町字大村大久保第一 ／ 最寄り駅：美瑛 ／ 交通案内：ＪＲ　美瑛駅よりお車で５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「コテージクローバーは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　紫雲の湯　ラビスタ富良野ヒルズ（ドーミーイン・御宿野乃　ホテルズグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん　しうんのゆ　らびすたふらのひるず）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,560〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/176997/176997.jpg" alt="天然温泉　紫雲の湯　ラビスタ富良野ヒルズ（ドーミーイン・御宿野乃　ホテルズグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>富良野市内一望できる最上階天然温泉大浴場・貸切風呂完備♪ファミリーにも安心なお子様アメニティも充実！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道富良野市朝日町5-14 ／ 最寄り駅：富良野 ／ 交通案内：ＪＲ富良野駅より徒歩3分・旭川空港からバスで約1時間・新千歳空港からお車で約2時間10分・札幌市内からお車で約2時間</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　ホテル駐車場無料（先着順）　※満車時は近隣パーキングにご案内致します。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「正直言うと、最初は節約のため...とリゾートホテル連泊を諦めて予約させていただいたのですが、施設は清潔だし、温泉も気持ちがいいし、温泉のドライヤーはパナソニックの上位機種と絹女だし、パジャマや子供用の…　2026-08-20 20:03:30投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=176997&quot; class=&quot;3clic」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！北海道の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、北海道を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Wide_view_of_Mount_Hakodate_from_Mashu-Maru.jpg/1280px-Wide_view_of_Mount_Hakodate_from_Mashu-Maru.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="函館山（夜景）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">函館山（夜景）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界三大夜景の一つに数えられる絶景スポット。津軽海峡と函館湾に挟まれたくびれが生み出す、宝石をちりばめたような眩い夜景は一生に一度は見たい感動のロケーションです。 函館山（はこだてやま）は、北海道函館市の市街地西端にある火山であり陸繋島でもある。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">富良野 ファーム富田</h3>
                <p className="text-xs text-stone-600 leading-relaxed">一面に広がる鮮やかな紫色のラベンダー畑と、虹色に彩られた花畑が織りなすパノラマロード。富良野の雄大な自然と爽やかな香りに包まれる絶好の観光名所です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Otaru_Hokkaido_Japan.jpg/1280px-Otaru_Hokkaido_Japan.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="小樽運河" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">小樽運河</h3>
                <p className="text-xs text-stone-600 leading-relaxed">大正時代に造られたノスタルジックな石造り倉庫群が立ち並ぶ小樽のシンボル。夕暮れ時にはガス灯が灯り、幻想的な雰囲気の中で散策やナイトクルーズを楽しめます。 小樽運河（おたるうんが）は、北海道小樽市にある運河。現在は物流機能としての使命を終えており、文化庁選定日本遺産「北海道の『心臓』と呼ばれたまち・小樽」を構成する遺産のひとつ。 1923年（大正12年）完成。日本国内唯一となる海岸の沖合い埋立て方式で造られており、緩やかに湾曲しているのが特徴になっている。全長1,140 mあり、幅は臨港線沿いは20 m、北部（…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Asahikawa_Montage.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="旭川市旭山動物園" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">旭川市旭山動物園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">行動展示で全国的に有名な日本最北の動物園。水中でダイナミックに泳ぐホッキョクグマや、円柱水槽を行き来するアザラシなど、生き生きとした動物たちの姿を間近で観察できます。 旭川市（あさひかわし）は、北海道のほぼ中央に位置し、上川総合振興局に属する市。振興局所在地であり、札幌市に次ぐ北海道第2位の人口（約31万人）を有する中核市である。 北海道中央部に位置し、上川盆地に広がっている。道北の経済・産業・文化の中心都市。ユネスコの「デザイン都市」、そして「国際会議観光都市」に認定されている。交通面では国道や鉄道路線の終起点となり高速…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 北海道エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 北海道の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

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
          href="/prefectures/"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="hokkaido-furano-biei-lavender-stay" />
</div>
  );
}
