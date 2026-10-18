import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kumamoto-aso-caldera-minamiaso-stay/" },
  title: "熊本・阿蘇カルデラ＆南阿蘇：大観峰・草千里ヶ浜＆あか牛・白川水源宿 厳選ガイド",
  description: "世界最大級のカルデラ・熊本阿蘇エリア完全特化！大観峰の360度パノラマ、草千里ヶ浜の引き馬体験、名水白川水源、阿蘇五岳を望む展望温泉露天風呂、名物「あか牛丼・あか牛ステーキ会席宿」を徹底解説。",
  keywords: ["熊本", "阿蘇カルデラ", "南阿蘇", "大観峰", "草千里ヶ浜", "あか牛", "白川水源宿"],
  openGraph: {
    title: "熊本・阿蘇カルデラ＆南阿蘇：大観峰・草千里ヶ浜＆あか牛・白川水源宿 厳選ガイド",
    description: "世界最大級のカルデラ・熊本阿蘇エリア完全特化！大観峰の360度パノラマ、草千里ヶ浜の引き馬体験、名水白川水源、阿蘇五岳を望む展望温泉露天風呂、名物「あか牛丼・あか牛ステーキ会席宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "熊本・阿蘇カルデラ＆南阿蘇：大観峰・草千里ヶ浜＆あか牛・白川水源宿 厳選ガイド",
    description: "世界最大級のカルデラ・熊本阿蘇エリア完全特化！大観峰の360度パノラマ、草千里ヶ浜の引き馬体験、名水白川水源、阿蘇五岳を望む展望温泉露天風呂、名物「あか牛丼・あか牛ステーキ会席宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kumamoto-aso-caldera-minamiaso-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kumamoto-aso-caldera-minamiaso-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "aso_caldera_view_onsen",
    "title": "1. 大観峰〜草千里ヶ浜・阿蘇中岳火口（世界最大級カルデラの絶景パノラマ）",
    "timing": "通年（春〜夏の新緑草原・秋のすすきと雲海・冬の雪化粧）",
    "desc": "標高936m、阿蘇カルデラと阿蘇五岳を一望する最高峰の展望台「大観峰」。噴煙を上げる中岳火口を望む「草千里ヶ浜」での引き馬体験や烏帽子岳ハイク。「阿蘇火山博物館」と火口見学道路（阿蘇パノラマライン）。",
    "spots": "大観峰展望台、草千里ヶ浜（草千里展望デッキ・引き馬）、阿蘇中岳火口、道の駅阿蘇",
    "access": "JR豊肥本線「阿蘇駅」下車。熊本空港より車・バスで約50分。",
    "tip": "秋の早朝（10月〜11月）には大観峰から阿蘇谷を覆い尽くす幻想的な「雲海」が高確率で発生します。"
  },
  {
    "key": "minamiaso_nature_water_stay",
    "title": "2. 南阿蘇〜白川水源・トロッコ列車（毎分60トン湧出する名水と里山風景）",
    "timing": "通年（清涼な名水と四季の花々）",
    "desc": "環境省名水百選に選ばれ、常温14度の名水が毎分60トン自噴する「白川水源」。南阿蘇鉄道の観光トロッコ列車「ゆうすげ号」や新名所「新阿蘇大橋展望所ヨ・ミュール」。阿蘇五岳の南麓に湧く美肌の南阿蘇温泉郷。",
    "spots": "白川水源（水汲み場・名水カフェ）、南阿蘇鉄道（高森駅・立野駅・第一白川橋梁）、あそ望の郷くぎの",
    "access": "南阿蘇鉄道沿線。熊本市内より車で約45分。",
    "tip": "白川水源ではペットボトルを持参すれば、湧き出たまろやかで澄んだ名水をそのまま持ち帰ることができます。"
  },
  {
    "key": "aso_akagyu_gourmet_stay",
    "title": "3. 熊本名物「あか牛」＆極上馬刺し（赤身の旨味が凝縮された褐毛和種）",
    "timing": "通年（脂肪分が少なくヘルシーでジューシーな赤身肉）",
    "desc": "阿蘇の大自然で放牧され、ミネラル豊富な牧草を食べて育つ「熊本あか牛（褐毛和種）」。炭火で香ばしく焼き上げるあか牛サーロインステーキや、甘辛いタレと半熟卵が絡む「あか牛丼」。本場熊本の特選霜降り馬刺し。",
    "spots": "いまきん食堂（あか牛丼発祥店）、阿蘇とり宮（あか牛の油揚げ・コロッケ）、道の駅波野",
    "access": "阿蘇・内牧温泉・南阿蘇。",
    "tip": "「内牧温泉街」にはあか牛料理専門店が多数立ち並んでおり、食べ比べを楽しむのが阿蘇観光の醍醐味です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【熊本・阿蘇カルデラ＆南阿蘇】大観峰・草千里ヶ浜＆あか牛・白川水源宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "世界最大級のカルデラ・熊本阿蘇エリア完全特化！大観峰の360度パノラマ、草千里ヶ浜の引き馬体験、名水白川水源、阿蘇五岳を望む展望温泉露天風呂、名物「あか牛丼・あか牛ステーキ会席宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/kumamoto-aso-caldera-minamiaso-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【熊本・阿蘇カルデラ＆南阿蘇】大観峰・草千里ヶ浜＆あか牛・白川水源宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kumamoto-aso-caldera-minamiaso-stay/" }
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
            ASO CALDERA & NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「熊本・阿蘇カルデラ＆南阿蘇」大観峰・草千里ヶ浜＆あか牛・白川水源宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            世界最大級の火山カルデラが織りなす雄大な大地「熊本・阿蘇」。大観峰から見下ろす雲海と阿蘇五岳「涅槃像」。草千里ヶ浜のエメラルドグリーンの草原。名水・白川水源が育むヘルシーな極上「あか牛」に舌鼓を打つ大自然の旅。
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
              📊 熊本・阿蘇カルデラ＆南阿蘇：大観峰・草千里ヶ浜＆あか牛・白川水源宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「熊本・阿蘇カルデラ＆南阿蘇：大観峰・草千里ヶ浜＆あか牛・白川水源宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 阿蘇内牧温泉　御料理旅館　親和苑</td>
                <td className="p-3 text-stone-600">熊本県阿蘇市内牧1354</td>
                <td className="p-3 text-stone-600">阿蘇駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.52（196件）</td>
                <td className="p-3 font-bold text-rose-600">¥23,310〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38542%2F38542.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 南阿蘇夢しずく温泉　別邸蘇庵</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南阿蘇村河陰5-56</td>
                <td className="p-3 text-stone-600">白水高原駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.69（243件）</td>
                <td className="p-3 font-bold text-rose-600">¥30,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74601%2F74601.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 南阿蘇　白久水温泉　夢しずく</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南阿蘇村河陰5-56</td>
                <td className="p-3 text-stone-600">白水高原駅周辺</td>
                <td className="p-3 text-stone-600">有り　１２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.6（231件）</td>
                <td className="p-3 font-bold text-rose-600">¥23,310〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74599%2F74599.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 南阿蘇フィールドホテル</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南阿蘇村河陰3624</td>
                <td className="p-3 text-stone-600">長陽駅周辺</td>
                <td className="p-3 text-stone-600">あり　64台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.55（31件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,004〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198835%2F198835.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 阿蘇ＣＡＮＹＯＮ　ＴＥＲＲＡＣＥ＆ＬＯＤＧＥ【温泉宿】</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南阿蘇村河陽4369-1</td>
                <td className="p-3 text-stone-600">肥後大津駅周辺</td>
                <td className="p-3 text-stone-600">有り　196台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.02（196件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,650〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183106%2F183106.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 南阿蘇俵山温泉　旅館　みな和</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南阿蘇村河陰2510</td>
                <td className="p-3 text-stone-600">長陽駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.71（508件）</td>
                <td className="p-3 font-bold text-rose-600">¥25,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73897%2F73897.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">阿蘇内牧温泉　御料理旅館　親和苑</h3>
                  <span className="text-xs text-stone-400 ml-2">（あそ　うちまきおんせん　おりょうりりょかん　しんわえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥23,310〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38542/38542_kya.jpg" alt="阿蘇内牧温泉　御料理旅館　親和苑 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>料理長が贈る美味しい芸術！【源泉掛け流し】露天風呂（男女別）／貸切家族風呂／離れ露天風呂付客室あり</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇市内牧1354 ／ 最寄り駅：阿蘇 ／ 交通案内：肥後豊肥線　阿蘇駅より車で１５分程／肥後豊肥線　内牧駅より車で１５分程</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.68 ／ 立地 ★4.44 ／ 部屋 ★4.61 ／ 設備 ★4.46 ／ 風呂 ★4.18 ／ 食事 ★4.78</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「本当に全てのサービスが星5つ!!家族4人2泊3日でお世話になりました。館内・お部屋共に清潔に保たれており、床材がとても素敵でした。お風呂は家族風呂が無料で入ることができ、朝・夜とも入らせて…　2026-08-23 12:23:31投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南阿蘇夢しずく温泉　別邸蘇庵</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆめしずくおんせん　べっていそあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥30,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/74601/74601_ky1.jpg" alt="南阿蘇夢しずく温泉　別邸蘇庵 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南阿蘇村河陰5-56 ／ 最寄り駅：白水高原 ／ 交通案内：【長陽大橋開通】熊本ICより57号線経由車で50分・【 俵山トンネル経由】 熊本空港より車で約30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「すき焼きと釜炊きご飯が絶品、接客も丁寧露天風呂付き客室。風呂場は広いが湯船は少し狭い。自動湯はりシステムは、1度に出るお湯の量が少なく何度も出さなければならないのが少し面倒。ロケー…　2026-09-04 22:00:01投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南阿蘇　白久水温泉　夢しずく</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなみあそ　はくすいおんせん　ゆめしずく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥23,310〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/74599/74599_ru.jpg" alt="南阿蘇　白久水温泉　夢しずく 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>『美肌湯』が人気の宿。旬の食材と湧水に拘った料理。プライベート空間をどうぞ♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南阿蘇村河陰5-56 ／ 最寄り駅：白水高原 ／ 交通案内：【長陽大橋開通】熊本ICより57号線経由車で50分・【俵山トンネル経由】 熊本空港より車で約30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「景色とスタッフの対応が素晴らしい昨年のお盆に引き続き二度目の宿泊です。立地などは宿情報に記載の通り、阿蘇五岳が見え、気持ちの良い場所にあります。特筆すべきはスタッフさんのホスピタリティが素…　2026-08-17 13:09:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南阿蘇フィールドホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなみあそふぃーるどほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,004〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/198835/198835.jpg" alt="南阿蘇フィールドホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>Place To Life Sketch　人生の特別な1コマを描く場所。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南阿蘇村河陰3624 ／ 最寄り駅：長陽 ／ 交通案内：阿蘇くまもと空港より車で20分　長陽駅より歩いて20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>あり　64台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/198835?reviewId=33123478986906　2026-08-19 17:57:01投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">阿蘇ＣＡＮＹＯＮ　ＴＥＲＲＡＣＥ＆ＬＯＤＧＥ【温泉宿】</h3>
                  <span className="text-xs text-stone-400 ml-2">（あそきゃにおんてらすろっじ　おんせんやど）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,650〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183106/183106.jpg" alt="阿蘇ＣＡＮＹＯＮ　ＴＥＲＲＡＣＥ＆ＬＯＤＧＥ【温泉宿】 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>阿蘇外輪山立野渓谷に浮かぶ、抜群なロケーションが望めるリゾートホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南阿蘇村河陽4369-1 ／ 最寄り駅：肥後大津 ／ 交通案内：阿蘇くまもと空港から車で約25分・JR肥後大津駅から車で約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　196台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔で快適な空間と充実したアメニティ部屋、各設備(大浴場や公共スペース)がとても清潔で快適に過ごすことができました。アメニティも充実しています。クチコミの詳細はこちらから　https:…　2026-08-13 12:02:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南阿蘇俵山温泉　旅館　みな和</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなみあそたわらやまおんせん　りょかん　みなわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥25,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/73897/73897_han.jpg" alt="南阿蘇俵山温泉　旅館　みな和 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>約3000坪の敷地にわずか10棟。南阿蘇の田園地帯に佇む全室離れ、内湯・露天付の湯宿。お食事は個室で</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南阿蘇村河陰2510 ／ 最寄り駅：長陽 ／ 交通案内：阿蘇くまもと空港より（俵山トンネルルート）車で約30分・JR立野駅から車で約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「バースデー旅行 バースデー旅行で、前日にケーキをお願いして用意していただきました。 夕飯も美味しく、量もたくさんあるので、お部屋でケーキを食べました。いつでも温泉に入れるのは、本当に嬉しか…　2026-08-18 11:48:28投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！熊本県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、熊本県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">日本三名城 熊本城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">加藤清正公が築城した難攻不落の城郭。「武者返し」と呼ばれる美しい曲線を描く石垣や、復元された豪華な「本丸御殿」、漆黒の大天守・小天守が堂々たる佇まいです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">阿蘇山（草千里ヶ浜・中岳火口）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界最大級のカルデラを誇る阿蘇。大草原が広がる草千里ヶ浜での乗馬体験や、白い煙を上げる中岳火口のダイナミックな火山景観が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Kurokawa_Onsen_-%E6%B8%A9%E6%B3%89%E8%A1%97.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="黒川温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">黒川温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">筑後川の源流・田の原川沿いの閑静な山あいに佇む名湯。「入湯手形」を利用して露天風呂めぐりを楽しみ、杉木立と茅葺き屋根の情緒を満喫できます。 黒川温泉（くろかわおんせん）は、熊本県阿蘇郡南小国町にある温泉である。 阿蘇山の北に位置し、南小国温泉郷の一つを構成する。広義の阿蘇温泉郷に含む場合もある。 全国屈指の人気温泉地として知られ、2009年版ミシュラン・グリーンガイド・ジャポンで、温泉地としては異例の二つ星で掲載された。なお「黒川温泉」の名称は2006年に地域団体商標として商標登録（地域ブランド…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">天草五橋（あまくさごきょう）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">九州本土と天草諸島を結ぶ5つの美しい橋梁ルート。イルカウォッチングや新鮮な海鮮丼、夕日が染める瀬戸の風景が訪れる人々を魅了します。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 熊本県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 熊本県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kumamoto-aso-caldera-minamiaso-stay" />
</div>
  );
}
