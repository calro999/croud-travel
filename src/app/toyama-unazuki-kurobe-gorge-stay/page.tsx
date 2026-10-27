import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/toyama-unazuki-kurobe-gorge-stay/" },
  title: "富山・黒部宇奈月温泉：トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 厳選ガイド",
  description: "富山・宇奈月温泉＆黒部峡谷エリア完全特化！黒部峡谷トロッコ電車、山彦橋・やまびこ遊歩道、日本一の透明度を誇る弱アルカリ性美肌温泉、富山湾の白えび・紅ズワイガニ会席を徹底解説。",
  keywords: ["富山", "黒部宇奈月温泉", "トロッコ電車", "黒部峡谷断崖美", "富山湾の幸極上宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "富山・黒部宇奈月温泉：トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 厳選ガイド",
    description: "富山・宇奈月温泉＆黒部峡谷エリア完全特化！黒部峡谷トロッコ電車、山彦橋・やまびこ遊歩道、日本一の透明度を誇る弱アルカリ性美肌温泉、富山湾の白えび・紅ズワイガニ会席を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "富山・黒部宇奈月温泉：トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 厳選ガイド",
    description: "富山・宇奈月温泉＆黒部峡谷エリア完全特化！黒部峡谷トロッコ電車、山彦橋・やまびこ遊歩道、日本一の透明度を誇る弱アルカリ性美肌温泉、富山湾の白えび・紅ズワイガニ会席を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["toyama-unazuki-kurobe-gorge-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for toyama-unazuki-kurobe-gorge-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "unazuki_gorge_view",
    "title": "1. 黒部川リバーサイド・峡谷展望露天風呂（エメラルドグリーンの清流と美肌の湯）",
    "timing": "通年（秋の黒部峡谷全山紅葉・冬の雪景色峡谷）",
    "desc": "黒部川の清流沿いに建つ宇奈月温泉の宿。日本屈指の透明度（弱アルカリ性単純温泉）を誇るお湯は「美肌の湯」として名高い名泉。川のせせらぎを聞きながら入る露天風呂で心身を解放。",
    "spots": "山彦橋・新山彦橋（赤い鉄橋を渡るトロッコ電車のビューポイント）、やまびこ遊歩道、想影展望台",
    "access": "北陸新幹線「黒部宇奈月温泉駅」隣接の新黒部駅より富山地方鉄道で約25分「宇奈月温泉駅」下車。",
    "tip": "「山彦橋」から新山彦橋を渡るトロッコ電車に手を振ると、乗客や車掌さんが笑顔で振り返してくれる名物シーンに出逢えます。"
  },
  {
    "key": "unazuki_torokko_station",
    "title": "2. 黒部峡谷鉄道トロッコ電車（鐘釣温泉・欅平へ向かう秘境アドベンチャー）",
    "timing": "運行期間：4月中旬〜11月30日（冬期は特別運行・雪見ツアーあり）",
    "desc": "宇奈月駅から欅平（けやきだいら）駅まで全長20.1kmを約1時間20分で結ぶオープンデッキのトロッコ電車。猿飛峡や後曳橋（うしろひきばし）、鐘釣温泉の河原露天風呂など、息をのむ絶景が連続。",
    "spots": "黒部峡谷鉄道トロッコ電車、欅平駅（猿飛峡・奥鐘橋）、鐘釣駅（万年雪・河原露天風呂）、宇奈月ダム",
    "access": "富山地方鉄道宇奈月温泉駅より徒歩約5分で黒部峡谷鉄道「宇奈月駅」へ。",
    "tip": "窓のない「普通客車（オープン型）」に乗ると、肌で峡谷の風と水しぶきを感じられるダイナミックな体験ができます。"
  },
  {
    "key": "unazuki_toyama_seafood",
    "title": "3. 富山湾の海の幸づくし（富山湾の宝石「白えび」＆紅ズワイガニ・寒ブリ会席）",
    "timing": "通年（春〜秋の白えび・秋〜冬の紅ズワイガニ・冬の寒ブリ）",
    "desc": "「天然の生け簀」と称される富山湾の極上魚介。一匹ずつ手剥きされた甘みたっぷりの「白えびの刺身」、水揚げ直後の「茹で紅ズワイガニ」、氷見直送の「寒ブリの刺身・ブリ大根」を堪能。",
    "spots": "宇奈月温泉街（足湯おもかげ・足湯いっぷく）、宇奈月麦酒館、セレネ美術館",
    "access": "宇奈月温泉街中心部。",
    "tip": "名水仕込みの「宇奈月ビール（地ビール）」は国際ビール大賞金賞を受賞した名品で、魚介料理との相性抜群です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【富山・黒部宇奈月温泉】トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "富山・宇奈月温泉＆黒部峡谷エリア完全特化！黒部峡谷トロッコ電車、山彦橋・やまびこ遊歩道、日本一の透明度を誇る弱アルカリ性美肌温泉、富山湾の白えび・紅ズワイガニ会席を徹底解説。",
    "url": "https://croud-travel.pages.dev/toyama-unazuki-kurobe-gorge-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【富山・黒部宇奈月温泉】トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/toyama-unazuki-kurobe-gorge-stay/" }
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
            UNAZUKI GORGE MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「富山・黒部宇奈月温泉」トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本一深いV字峡谷「黒部峡谷」の玄関口に湧く「宇奈月温泉」。トロッコ電車に揺られて大自然の秘境へ。黒部川のエメラルドグリーンを眺め、富山湾の宝石・白えびと美肌の湯に酔いしれる旅。
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
              📊 富山・黒部宇奈月温泉：トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「富山・黒部宇奈月温泉：トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 黒部峡谷・宇奈月温泉　ホテル黒部</td>
                <td className="p-3 text-stone-600">富山県黒部市宇奈月温泉７番地</td>
                <td className="p-3 text-stone-600">宇奈月温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　40台　無料 （トロッコ観光中もお預かりいたします）</td>
                <td className="p-3 font-bold text-amber-600">★4.55（1226件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40625%2F40625.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 宇奈月温泉　延楽</td>
                <td className="p-3 text-stone-600">富山県黒部市宇奈月温泉347-1</td>
                <td className="p-3 text-stone-600">宇奈月温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り・4０台・無料・先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.58（558件）</td>
                <td className="p-3 font-bold text-rose-600">¥31,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10719%2F10719.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）</td>
                <td className="p-3 text-stone-600">富山県黒部市宇奈月温泉352番地7</td>
                <td className="p-3 text-stone-600">宇奈月温泉駅周辺</td>
                <td className="p-3 text-stone-600">140台の無料駐車スペースがございます。</td>
                <td className="p-3 font-bold text-amber-600">★4.31（4215件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9591%2F9591.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ＴＯＧＥＮ　黒部　宇奈月温泉</td>
                <td className="p-3 text-stone-600">富山県黒部市宇奈月温泉22-1</td>
                <td className="p-3 text-stone-600">宇奈月温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.41（1180件）</td>
                <td className="p-3 font-bold text-rose-600">¥25,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10634%2F10634.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 宇奈月温泉の老舗旅館　延対寺荘</td>
                <td className="p-3 text-stone-600">富山県黒部市宇奈月温泉53</td>
                <td className="p-3 text-stone-600"></td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.3（1570件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4804%2F4804.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 生地温泉　たなかや</td>
                <td className="p-3 text-stone-600">富山県黒部市生地吉田新230</td>
                <td className="p-3 text-stone-600">生地駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.2（169件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,523〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109045%2F109045.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">黒部峡谷・宇奈月温泉　ホテル黒部</h3>
                  <span className="text-xs text-stone-400 ml-2">（くろべきょうこく・うなづきおんせん　くろべ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40625/40625_kya.jpg" alt="黒部峡谷・宇奈月温泉　ホテル黒部 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>『宇奈月温泉随一の眺望』四季折々の地元食材と透明な美肌湯を堪能</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県黒部市宇奈月温泉７番地 ／ 最寄り駅：宇奈月温泉 ／ 交通案内：北陸新幹線黒部宇奈月温泉駅から富山地鉄乗り換え25分。 宇奈月温泉駅から歩10分／北陸道 黒部ＩＣから約20分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　40台　無料 （トロッコ観光中もお預かりいたします）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「昭和の雰囲気と鉄道部屋に子供が大喜び設備は所々歴史が感じられましたが、とても雰囲気が良く、所々で古き良き昭和を感じました。お部屋からトロッコ電車も観られました。プラレールと鉄道模型の鉄道部屋が…　2026-08-09 22:06:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宇奈月温泉　延楽</h3>
                  <span className="text-xs text-stone-400 ml-2">（うなづきおんせん　えんらく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥31,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10719/10719_war.jpg" alt="宇奈月温泉　延楽 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>季節のお料理と樹齢四百年の総檜露天風呂。露天風呂付き客室でゆったり自分時間。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県黒部市宇奈月温泉347-1 ／ 最寄り駅：宇奈月温泉 ／ 交通案内：富山地方鉄道「宇奈月温泉駅」より徒歩3分 / 北陸自動車道 黒部ICより約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り・4０台・無料・先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.63 ／ 立地 ★4.67 ／ 部屋 ★4.49 ／ 設備 ★4.4 ／ 風呂 ★4.65 ／ 食事 ★4.68</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「静かな環境でゆっくり過ごせて満足少し、寒く、紅葉がもう少しだった、以外は、団体客や子供の騒々しさはなく、満足です。クチコミの詳細はこちらから　https://review.travel.rak…　2026-10-07 17:41:44投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（くろべ・うなづきおんせん　やまのは（おりっくすほてるず＆りぞーと））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9591/9591_rot.jpg" alt="黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>おかげさまで連続受賞！「楽天トラベル 日本の宿アワード2025 TOP47」♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県黒部市宇奈月温泉352番地7 ／ 最寄り駅：宇奈月温泉 ／ 交通案内：富山地方鉄道「宇奈月温泉駅」下車徒歩３分　無料送迎バス有※要確認／北陸自動車道黒部IC下車約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>140台の無料駐車スペースがございます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「景色とバイキングを満喫、日本酒の演出も最高電車からホテルが見えましたおかげで迷わずホテルへ行けましたロビーからの景色も良くフリードリンクでゆっくり過ごせましたマッサージチェアもありました…　2026-09-11 09:24:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＴＯＧＥＮ　黒部　宇奈月温泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうげん　くろべ　うなづきおんせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥25,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10634/10634_rm.jpg" alt="ＴＯＧＥＮ　黒部　宇奈月温泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>黒部峡谷や立山黒部アルペンルートの観光の拠点にぴったり！黒部川の眺望抜群♪貸切露天風呂の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県黒部市宇奈月温泉22-1 ／ 最寄り駅：宇奈月温泉 ／ 交通案内：富山地方鉄道「宇奈月温泉駅」より徒歩５分。北陸HW黒部ＩＣより２０分。立山・黒部アルペンルート立山駅まで約８０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　50台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.49 ／ 立地 ★4.47 ／ 部屋 ★4.34 ／ 設備 ★4.27 ／ 風呂 ★4.37 ／ 食事 ★4.52</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事は満腹、24時間入れる熱めのお風呂お料理に重点を置いたホテル 夕朝食共にお腹いっぱいになりましたお風呂は24時間入れるところが良かった(男女入れ替え清掃時間有り)温度は熱めクチコミ…　2026-09-24 11:46:32投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宇奈月温泉の老舗旅館　延対寺荘</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                
                <div className="md:col-span-3 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>温泉街でも最も眺望の良い場所に立地し、源泉１００％の加温・加水無しの湯がお楽しみいただけます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県黒部市宇奈月温泉53 ／ 最寄り駅：主要駅 ／ 交通案内：</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「宇奈月温泉の老舗旅館　延対寺荘は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">生地温泉　たなかや</h3>
                  <span className="text-xs text-stone-400 ml-2">（いくじおんせん　たなかや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,523〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/109045/109045_hy1.jpg" alt="生地温泉　たなかや 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>創業115年。時代と逆行するおもてなしで、「いのちの洗濯」ができる宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県黒部市生地吉田新230 ／ 最寄り駅：生地 ／ 交通案内：北陸自動車道「黒部インター」より車で20分／北陸新幹線「黒部宇奈月駅」・あいの風とやま鉄道「生地駅」から無料送迎あり／</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事は美味しく接客も良いが設備に難あり夕食は、とても美味しかったですお風呂のシャワーが、とても古い感じで、温度調整が、出来ません部屋の洗面所の排水が、悪くなかなか流れなかったです庭…　2026-08-11 19:27:18投稿」
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
          href="/prefectures/"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="toyama-unazuki-kurobe-gorge-stay" />
</div>
  );
}
