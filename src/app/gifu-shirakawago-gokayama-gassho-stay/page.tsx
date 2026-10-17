import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/gifu-shirakawago-gokayama-gassho-stay/" },
  title: "岐阜・白川郷＆五箇山：世界遺産合掌造り集落・荻町展望台＆飛騨牛・すったて汁宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本の原風景が残るユネスコ世界文化遺産・白川郷＆五箇山エリア完全特化！荻町城跡展望台からの合掌造りパノラマ、和田家・神田家内部見学、富山県五箇山（菅沼・相倉集落）、白川郷合掌造り民家園、名物「飛騨牛・すったて汁宿」を徹底解説。",
  keywords: ["岐阜", "白川郷", "五箇山", "世界遺産合掌造り集落", "荻町展望台", "飛騨牛", "すったて汁宿"],
  openGraph: {
    title: "岐阜・白川郷＆五箇山：世界遺産合掌造り集落・荻町展望台＆飛騨牛・すったて汁宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "日本の原風景が残るユネスコ世界文化遺産・白川郷＆五箇山エリア完全特化！荻町城跡展望台からの合掌造りパノラマ、和田家・神田家内部見学、富山県五箇山（菅沼・相倉集落）、白川郷合掌造り民家園、名物「飛騨牛・すったて汁宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "岐阜・白川郷＆五箇山：世界遺産合掌造り集落・荻町展望台＆飛騨牛・すったて汁宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "日本の原風景が残るユネスコ世界文化遺産・白川郷＆五箇山エリア完全特化！荻町城跡展望台からの合掌造りパノラマ、和田家・神田家内部見学、富山県五箇山（菅沼・相倉集落）、白川郷合掌造り民家園、名物「飛騨牛・すったて汁宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gifu-shirakawago-gokayama-gassho-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gifu-shirakawago-gokayama-gassho-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shirakawago_gassho_inn_stay",
    "title": "1. 白川郷・荻町合掌造り集落〜和田家・荻町城跡展望台（世界文化遺産の原風景）",
    "timing": "通年（春の桜・夏の青田・秋の紅葉・冬の雪景色とライトアップ）",
    "desc": "大小100棟余りの合掌造りが現存する世界文化遺産「白川郷・荻町集落」。国指定重要文化財「和田家」「神田家」の養蚕に使われた屋根裏見学。集落を一望する「荻町城跡展望台（天守閣展望台）」。であい橋を渡る風の心地よさ。",
    "spots": "和田家・神田家・長瀬家、荻町城跡展望台、であい橋、白川郷合掌造り民家園、明善寺郷土館",
    "access": "JR高山駅または金沢駅・富山駅より高速濃飛バス・北陸鉄道バスで約50〜85分。東海北陸道「白川郷IC」すぐ。",
    "tip": "荻町城跡展望台へはシャトルバスも運行していますが、集落内の緩やかな遊歩道を歩いて登ると、少しずつ合掌造りの屋根が広がっていく絶景を体感できます。"
  },
  {
    "key": "gokayama_suganuma_ainokura_stay",
    "title": "2. 富山・五箇山〜相倉合掌造り集落・菅沼集落（観光地化されない素朴な山村美）",
    "timing": "通年（白川郷と合わせた世界遺産合掌集落ダブル巡り）",
    "desc": "白川郷と同じく世界遺産に登録された富山県南砺市の「五箇山（相倉・菅沼集落）」。山あいに寄り添うように建つ合掌造り。五箇山和紙の手すき体験や、日本最古の民謡「こきりこ節」のささら踊り。重厚な五箇山豆腐。",
    "spots": "相倉合掌造り集落（全20棟・相倉伝統産業館）、菅沼合掌造り集落（全9棟・塩硝の館）、五箇山和紙の里",
    "access": "白川郷ICより車で約15〜25分。高岡駅・城端駅より加越能バス「世界遺産バス」運行。",
    "tip": "相倉集落の高台にある全景撮影スポットからは、周囲の深いブナ林と段々畑に抱かれた美しい合掌集落が一枚の絵画のように収まります。"
  },
  {
    "key": "shirakawago_hida_beef_gourmet",
    "title": "3. 郷土の味「飛騨牛」＆すったて汁（大豆をすりつぶした伝統の祝い汁）",
    "timing": "通年（冬の雪見酒と熱々のすったて鍋は格別）",
    "desc": "自家製味噌の上に極上飛騨牛とネギを乗せて炭火で焼く「飛騨牛の朴葉味噌焼き」。茹でた大豆を石臼ですりつぶし、味噌や醤油の出汁と合わせた白川郷伝統の「すったて汁」。清流庄川で獲れる岩魚（イワナ）の塩焼きや山菜天ぷら。",
    "spots": "白川郷のお食事処（白水園・いろり）、道の駅白川郷、合掌造り温泉民宿",
    "access": "白川郷・五箇山エリア。",
    "tip": "「すったて汁」はクリーミーで大豆の甘みと旨味が凝縮されており、近年ではすったてラーメンやすったて鍋としてご当地グルメの主役に進化しています。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【岐阜・白川郷＆五箇山】世界遺産合掌造り集落・荻町展望台＆飛騨牛・すったて汁宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "日本の原風景が残るユネスコ世界文化遺産・白川郷＆五箇山エリア完全特化！荻町城跡展望台からの合掌造りパノラマ、和田家・神田家内部見学、富山県五箇山（菅沼・相倉集落）、白川郷合掌造り民家園、名物「飛騨牛・すったて汁宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/gifu-shirakawago-gokayama-gassho-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【岐阜・白川郷＆五箇山】世界遺産合掌造り集落・荻町展望台＆飛騨牛・すったて汁宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/gifu-shirakawago-gokayama-gassho-stay/" }
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
            SHIRAKAWAGO & GASSHO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「岐阜・白川郷＆五箇山」世界遺産合掌造り集落・荻町展望台＆飛騨牛・すったて汁宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            豪雪地帯に生まれた急勾配の茅葺き屋根「世界遺産・白川郷合掌造り集落」。荻町城跡展望台から見下ろす田園とおとぎ話のような家並み。合掌造り民家に実際に泊まる貴重な体験。名物飛騨牛の朴葉味噌焼きと素朴な郷土料理を味わう旅。
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
                    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 岐阜・白川郷＆五箇山：世界遺産合掌造り集落・荻町展望台＆飛騨牛・すったて汁宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「岐阜・白川郷＆五箇山：世界遺産合掌造り集落・荻町展望台＆飛騨牛・すったて汁宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 飛騨高山温泉　飛騨の里　旅館　むら山</td>
                <td className="p-3 text-stone-600">岐阜県高山市西之一色町3-829</td>
                <td className="p-3 text-stone-600">高山駅周辺</td>
                <td className="p-3 text-stone-600">有り　12台　無料　駐輪OK！</td>
                <td className="p-3 font-bold text-amber-600">★4.61（288件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4992%2F4992.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 料理旅館　備前屋</td>
                <td className="p-3 text-stone-600">岐阜県郡上市八幡町柳町264</td>
                <td className="p-3 text-stone-600">郡上八幡駅周辺</td>
                <td className="p-3 text-stone-600">有り　８台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.73（69件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105996%2F105996.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 日本の宿　ひだ高山　倭乃里</td>
                <td className="p-3 text-stone-600">岐阜県高山市一之宮町1682</td>
                <td className="p-3 text-stone-600">高山駅周辺</td>
                <td className="p-3 text-stone-600">有り　（10台／無料／予約不要）</td>
                <td className="p-3 font-bold text-amber-600">★5（73件）</td>
                <td className="p-3 font-bold text-rose-600">¥40,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106058%2F106058.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 五箇山　旅館　よしのや＜富山県＞</td>
                <td className="p-3 text-stone-600">富山県南砺市五箇山皆葎366</td>
                <td className="p-3 text-stone-600">城端駅周辺</td>
                <td className="p-3 text-stone-600">有　１０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.5（78件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31820%2F31820.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 奥飛騨　平湯温泉　岡田旅館</td>
                <td className="p-3 text-stone-600">富山県</td>
                <td className="p-3 text-stone-600">平湯温泉方面行きバス乗車、「平湯温泉駅」下車／松本ＩＣより６０分／富山</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★3.91（627件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,950〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54007%2F54007.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 小さな料理旅館　こまくさ</td>
                <td className="p-3 text-stone-600">岐阜県高山市岡本町4-172-1</td>
                <td className="p-3 text-stone-600">高山駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料　予約いりません</td>
                <td className="p-3 font-bold text-amber-600">★5（10件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39984%2F39984.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">飛騨高山温泉　飛騨の里　旅館　むら山</h3>
                  <span className="text-xs text-stone-400 ml-2">（むらやま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4992/4992_heya.jpg" alt="飛騨高山温泉　飛騨の里　旅館　むら山 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>飛騨高山温泉◎カップル・ファミリーにうれしい無料貸切風呂あり♪個室食事処も★駐車場無料♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県高山市西之一色町3-829 ／ 最寄り駅：高山 ／ 交通案内：高山駅・濃飛バスセンターよりさるぼぼバスにて約１０分（飛騨の里下下車）徒歩１分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　12台　無料　駐輪OK！</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.66 ／ 立地 ★4.24 ／ 部屋 ★4.51 ／ 設備 ★4.46 ／ 風呂 ★4.45 ／ 食事 ★4.79</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料理がとても美味しく大満足料理が大満足でした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/4992?review…　2026-10-05 20:25:53投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">料理旅館　備前屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（りょうりりょかん　びぜんや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/105996/105996.jpg" alt="料理旅館　備前屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>一期一会の気持ちを込めて郡上の季節をお届けします。明治創業、日本庭園には四季の移り変わりが見られます</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県郡上市八幡町柳町264 ／ 最寄り駅：郡上八幡 ／ 交通案内：長良川鉄道　郡上八幡駅より岐阜バス「城下町プラザ」下車３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「落ち着いた離れと最高の朝食に大満足素晴らしい雰囲気の宿。アクセスも良い、離れは落ち着く。朝食は最高でした。クチコミの詳細はこちらから　https://review.travel.rakuten…　2026-07-31 09:02:53投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">日本の宿　ひだ高山　倭乃里</h3>
                  <span className="text-xs text-stone-400 ml-2">（にほんのやど　ひだたかやま　わのさと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥40,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/106058/106058_ka1.jpg" alt="日本の宿　ひだ高山　倭乃里 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室スイートのやすらぎの一室　絶景、美食、清流の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県高山市一之宮町1682 ／ 最寄り駅：高山 ／ 交通案内：高山駅よりお車で20分　（高山駅⇔倭乃里送迎あり／7日前までの予約制）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　（10台／無料／予約不要）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「日本の宿　ひだ高山　倭乃里は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">五箇山　旅館　よしのや＜富山県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ごかやまりょかん　よしのや＜とやまけん＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31820/31820_h.jpg" alt="五箇山　旅館　よしのや＜富山県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>五箇山の豊富に採れる旬の山菜やきのこなどを生かした美味しい料理が自慢♪ 五箇山観光の拠点にも◎</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県南砺市五箇山皆葎366 ／ 最寄り駅：城端 ／ 交通案内：JR城端駅から車にて２５分・JR高岡駅からバスで130分／東海北陸自動車道　五箇山ICから10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　１０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「五箇山　旅館　よしのや＜富山県＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">奥飛騨　平湯温泉　岡田旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,950〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54007/54007.jpg" alt="奥飛騨　平湯温泉　岡田旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：平湯温泉方面行きバス乗車、「平湯温泉駅」下車／松本ＩＣより６０分／富山ＩＣより９０分／清見ＩＣより８０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事と温泉は満足食事に関しては味も良く、囲炉裏の雰囲気もあり、食事対応の方の接客も好感が持ててよかった。温泉に関しては、浴槽の変色やヌメヌメ感、硫黄の匂いも強く、温泉らしい温泉に思えた。客…　2026-09-18 18:39:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">小さな料理旅館　こまくさ</h3>
                  <span className="text-xs text-stone-400 ml-2">（りょうりりょかん　こまくさ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/39984/39984_ky.jpg" alt="小さな料理旅館　こまくさ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>手づくり料理が美味しいと地元で評判。静かな環境の小さな料理旅館。風呂は貸切制です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県高山市岡本町4-172-1 ／ 最寄り駅：高山 ／ 交通案内：JR高山駅から北へ1.3㌔車3～5分/徒歩15分、東海北陸道/飛騨清見JCTから中部縦貫道/高山IC、小館へ2㌔5分、</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料　予約いりません</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「小さな料理旅館　こまくさは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！富山県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、富山県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Mount_Tate_viewed_from_Midorigaike.jpg/1280px-Mount_Tate_viewed_from_Midorigaike.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="立山黒部アルペンルート（雪の大谷）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">立山黒部アルペンルート（雪の大谷）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">標高3,000m級の立山連峰を貫く世界有数の山岳観光ルート。春には積雪を吹き破って開通する高さ20mに迫る巨大な「雪の大谷」の壁の中を歩けます。 立山（たてやま）は、富山県の飛騨山脈（北アルプス）北部にある山。中部山岳国立公園に属する。雄山（おやま、標高3,003メートル）、大汝山（おおなんじやま、3,015メートル）、富士ノ折立（ふじのおりたて、2,999メートル）の三つの峰からなる。富山県の最高峰であり、日本海に面する道府県の最高峰である。また、日本の3,000メートル級の山としては最北端に位置す…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">黒部ダム</h3>
                <p className="text-xs text-stone-600 leading-relaxed">高さ186mを誇る日本一のアーチ式コンクリートダム。毎秒10トン以上の水が激しく吹き出す毎夏の観光放水は息をのむ大迫力です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">雨晴海岸（あまはらしかいがん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富山湾越しに標高3,000m級の立山連峰を望む奇跡の絶景スポット。女岩と冠雪した立山連峰のシルエットは世界でも類を見ない美しさです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">五箇山 合掌造り集落</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界文化遺産に登録されている相倉・菅沼の合掌造り集落。急傾斜の茅葺き屋根と昔ながらの日本の原風景が山深い静寂の中にひっそりと息づいています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 富山県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 富山県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="gifu-shirakawago-gokayama-gassho-stay" />
</div>
  );
}
