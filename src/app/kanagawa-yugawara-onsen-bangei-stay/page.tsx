import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kanagawa-yugawara-onsen-bangei-stay/" },
  title: "神奈川・湯河原温泉：文豪ゆかりの名湯・万葉公園＆相模湾地魚極上宿 厳選ガイド",
  description: "都心から特急75分！湯河原温泉エリア完全特化！文豪・夏目漱石や芥川龍之介が執筆した名湯、万葉公園「湯河原惣湯 Books and Retreat」、不動の滝、相模湾の地魚舟盛りと数寄屋造り料亭旅館を徹底解説。",
  keywords: ["神奈川", "湯河原温泉", "文豪ゆかりの名湯", "万葉公園", "相模湾地魚極上宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "神奈川・湯河原温泉：文豪ゆかりの名湯・万葉公園＆相模湾地魚極上宿 厳選ガイド",
    description: "都心から特急75分！湯河原温泉エリア完全特化！文豪・夏目漱石や芥川龍之介が執筆した名湯、万葉公園「湯河原惣湯 Books and Retreat」、不動の滝、相模湾の地魚舟盛りと数寄屋造り料亭旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "神奈川・湯河原温泉：文豪ゆかりの名湯・万葉公園＆相模湾地魚極上宿 厳選ガイド",
    description: "都心から特急75分！湯河原温泉エリア完全特化！文豪・夏目漱石や芥川龍之介が執筆した名湯、万葉公園「湯河原惣湯 Books and Retreat」、不動の滝、相模湾の地魚舟盛りと数寄屋造り料亭旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kanagawa-yugawara-onsen-bangei-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kanagawa-yugawara-onsen-bangei-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "yugawara_manyo_retreat",
    "title": "1. 万葉公園〜湯河原惣湯 Books and Retreat（渓流のせせらぎと読書・源泉サウナ）",
    "timing": "通年（新緑・夏の避暑・秋の渓谷紅葉）",
    "desc": "千歳川の渓流沿いに広がる「万葉公園」。カフェやライブラリーが融合した「玄関テラス」と、森の奥深くで源泉かけ流し露天風呂と食事を楽しむ予約制「惣湯テラス」。自然と本に囲まれる極上リトリート。",
    "spots": "万葉公園（湯河原惣湯 Books and Retreat・玄関テラス・惣湯テラス）、独歩の湯跡、不動の滝",
    "access": "JR東海道線「湯河原駅」より奥湯河原行きバスで約12分「落合橋」下車すぐ。東京駅から特急踊り子で直通約75分。",
    "tip": "「玄関テラス」のカフェは予約不要で利用でき、清流のせせらぎを聞きながらテラス席でサンドイッチと珈琲を楽しめます。"
  },
  {
    "key": "yugawara_bungo_luxury",
    "title": "2. 奥湯河原・名門料亭旅館（夏目漱石『明暗』・芥川龍之介ゆかりの静寂）",
    "timing": "通年（大人が静かに過ごすおこもり旅行）",
    "desc": "湯河原の最奥、藤木川の清流沿いに広がる「奥湯河原」。「海石榴（つばき）」や「石葉」など日本を代表する数寄屋造りの名宿。四季折々の日本庭園、客室専用露天風呂、一流の懐石料理を堪能。",
    "spots": "奥湯河原もみじの郷、池峰もみじの広場、五万石遊歩道",
    "access": "湯河原駅より奥湯河原行きバス終点下車、またはタクシー約15分。",
    "tip": "秋の「もみじの郷」には約540本のイロハモミジが一斉に紅葉し、奥湯河原随一の紅葉のトンネルが広がります。"
  },
  {
    "key": "yugawara_seafood_view",
    "title": "3. 相模湾の獲れたて地魚＆湯河原みかん（金目鯛姿煮と柑橘スイーツ）",
    "timing": "通年（秋〜冬の湯河原みかん狩り・冬の金目鯛）",
    "desc": "相模湾・福浦港や真鶴港直送の鮮魚。脂がのった金目鯛の煮付けや、アジ・伊勢海老のお造り。温暖な気候が育む名産「湯河原みかん」の生搾りジュースやタルトなど、海の恵みと果実のコラボレーション。",
    "spots": "福浦漁港（みなと食堂）、湯河原みかん狩り農園、ちぼり湯河原スイーツファクトリー",
    "access": "湯河原駅周辺および海岸エリア。",
    "tip": "「ちぼり湯河原スイーツファクトリー」では、クッキーバイキング（食べ放題）や工場見学が楽しめお土産購入に最適です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【神奈川・湯河原温泉】文豪ゆかりの名湯・万葉公園＆相模湾地魚極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "都心から特急75分！湯河原温泉エリア完全特化！文豪・夏目漱石や芥川龍之介が執筆した名湯、万葉公園「湯河原惣湯 Books and Retreat」、不動の滝、相模湾の地魚舟盛りと数寄屋造り料亭旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/kanagawa-yugawara-onsen-bangei-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【神奈川・湯河原温泉】文豪ゆかりの名湯・万葉公園＆相模湾地魚極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kanagawa-yugawara-onsen-bangei-stay/" }
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
            YUGAWARA RETREAT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「神奈川・湯河原温泉」文豪ゆかりの名湯・万葉公園＆相模湾地魚極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            『万葉集』に唯一詠われた古湯「湯河原」。千歳川のせせらぎが響く静寂な山あいに、数寄屋造りの名門旅館が佇む。清流沿いのブックリトリートと、相模湾の鮮魚・湯河原みかんに癒やされる大人の隠れ家へ。
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
              📊 神奈川・湯河原温泉：文豪ゆかりの名湯・万葉公園＆相模湾地魚極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「神奈川・湯河原温泉：文豪ゆかりの名湯・万葉公園＆相模湾地魚極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 湯河原温泉　おんやど恵</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡湯河原町宮上361</td>
                <td className="p-3 text-stone-600">湯河原駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.22（535件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19357%2F19357.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 湯河原温泉　グリーンパル湯河原</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡湯河原町宮上261</td>
                <td className="p-3 text-stone-600">湯河原駅周辺</td>
                <td className="p-3 text-stone-600">予約制　１２台 　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.14（470件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,345〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142535%2F142535.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 湯河原温泉　万葉の里　白雲荘</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡湯河原町宮上716-1</td>
                <td className="p-3 text-stone-600">湯河原駅周辺</td>
                <td className="p-3 text-stone-600">有り　３５台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.22（424件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67932%2F67932.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 山翠楼SANSUIROU</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡湯河原町宮上673</td>
                <td className="p-3 text-stone-600">湯河原駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.28（526件）</td>
                <td className="p-3 font-bold text-rose-600">¥23,485〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28467%2F28467.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 湯河原温泉　川堰苑いすゞホテル（いすず）</td>
                <td className="p-3 text-stone-600">神奈川県</td>
                <td className="p-3 text-stone-600">ＪＲ東海道線湯河原駅より車で５分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.11（1237件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14736%2F14736.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 湯河原温泉　大滝ホテル</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡湯河原町宮上750-1</td>
                <td className="p-3 text-stone-600">湯河原駅周辺</td>
                <td className="p-3 text-stone-600">無料。乗用車　３０台　大型バス５台</td>
                <td className="p-3 font-bold text-amber-600">★3.71（801件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5085%2F5085.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯河原温泉　おんやど恵</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆがわらおんせん　おんやどめぐみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/19357/19357_heya.jpg" alt="湯河原温泉　おんやど恵 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>江戸商家をイメージし、黒塀と瓦が印象的。館内は江戸情緒が漂い、バリアフリーへの配慮も多い宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡湯河原町宮上361 ／ 最寄り駅：湯河原 ／ 交通案内：ＪＲ東海道線湯河原駅よりタクシーで５分、または路線バスで７分。西湘バイパス石橋インターから真鶴新道経由１５km、約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「三世代での宿泊三世代で特別室を予約して宿泊させて頂きました。高齢者に配慮されたホテルでお爺ちゃんも大変満足しておりました。夕食は部屋食、朝食は宴会場でした。夕食のローストビーフ美味しかったです。朝…　2026-08-24 09:18:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯河原温泉　グリーンパル湯河原</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆがわらおんせん　ぐりーんぱるゆがわら）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,345〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/142535/142535_kya.jpg" alt="湯河原温泉　グリーンパル湯河原 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>美肌の名湯と料理を楽しむ高台に佇む癒しのリゾート。四季折々のお食事をご堪能ください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡湯河原町宮上261 ／ 最寄り駅：湯河原 ／ 交通案内：湯河原駅よりバスにて約6分、理想郷バス停で下車、徒歩10分。駅よりタクシー約7分、約1,100円。 送迎あり（要確認）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>予約制　１２台 　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「送迎や接客は快適、夕食に期待の一品を初めて宿泊しましたが送迎がありとても助かりました。ロビーには到着時から麦茶、コーヒーがあり、風呂上がりや食後にいただけるのは良かったです。露天風呂、サウナもあり…　2026-08-16 17:46:00投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=142535&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯河原温泉　万葉の里　白雲荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆがわらおんせん　まんようのさと　はくうんそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67932/67932_h.jpg" alt="湯河原温泉　万葉の里　白雲荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の景色が望めるラウンジと渓流のせせらぎ。 千歳川沿いの貸切露天風呂は自然との一体感も抜群。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡湯河原町宮上716-1 ／ 最寄り駅：湯河原 ／ 交通案内：湯河原駅よりタクシ－で１０分／小田原・厚木道路～石橋ＩＣ～国道１３５号経由で約３０分。こごめの湯入口左折８００ｍ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３５台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.33 ／ 立地 ★4.25 ／ 部屋 ★4.19 ／ 設備 ★3.99 ／ 風呂 ★4.38 ／ 食事 ★4.5</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「雰囲気は良いが料理の質と量に不満あり宿の雰囲気は落ち着いていて心地良いと感じましたが、夕飯の質と量が残念でした。通常の量を選びましたが、「これが通常の量?」となりました。少なめのコースはよっぽど少…　2026-10-10 00:54:09投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山翠楼SANSUIROU</h3>
                  <span className="text-xs text-stone-400 ml-2">（さんすいろう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥23,485〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28467/28467_heya.jpg" alt="山翠楼SANSUIROU 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>奥湯河原温泉の雄大な自然を270度満喫できる【展望露天風呂】が自慢。個室食事処で四季折々の会席が魅力</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡湯河原町宮上673 ／ 最寄り駅：湯河原 ／ 交通案内：お車の場合、西湘ＢＰ石橋ＩＣより真鶴道路経由約３５分。電車の場合湯河原駅より奥湯河原行きバスで終点奥湯河原下車徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　30台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「すべてが素晴らしく、何度もリピート中!お料理、お風呂、お部屋、接客、すべて素晴らしくてリピートしてます!他の画像やクチコミの詳細はこちらから　https://review.travel.rak…　2026-08-22 21:14:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯河原温泉　川堰苑いすゞホテル（いすず）</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14736/14736.jpg" alt="湯河原温泉　川堰苑いすゞホテル（いすず） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ東海道線湯河原駅より車で５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔感ある館内と温泉、美味しい食事に大満足建物自体は古かったですが、全体に清潔感があり、気持ち良く滞在できました。温泉もお湯がオーバーフローしていて気持ち良かったです。夕食もどれも綺麗に盛り付…　2026-09-17 17:55:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯河原温泉　大滝ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆがわらおんせん　おおたき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5085/5085_war.jpg" alt="湯河原温泉　大滝ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>敷地内から湧く良質で豊富な源泉が自慢の宿。客室のお風呂には全室源泉100％を給湯しております。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡湯河原町宮上750-1 ／ 最寄り駅：湯河原 ／ 交通案内：ＪＲ湯河原駅より②番バス停より約15分（260円）不動滝バス停下車。東名厚木ICより小田原厚木道路経由６０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料。乗用車　３０台　大型バス５台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「自家源泉の温泉と鳥の声で癒される宿古い温泉宿でしたが...きちんと、掃除がいきとどいていました。汚いという感じはしませんでした。スタッフの方達...外国の方が何人かいましたが、一生懸命に働…　2026-08-19 18:21:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！神奈川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、神奈川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">横浜みなとみらい21</h3>
                <p className="text-xs text-stone-600 leading-relaxed">ランドマークタワーや大観覧車「コスモクロック21」、赤レンガ倉庫が立ち並ぶ近代都市リゾート。港町の海風を感じながらショッピングや夜景を楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">鎌倉大仏（高徳院）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">高さ約11.3mを誇る鎌倉のシンボル的な国宝銅造阿弥陀如来坐像。四季折々の花々や歴史ある古刹巡り、小町通りの食べ歩きとともに鎌倉散策の定番です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Lake_Ashi_from_Mt.Komagatake_03-2.jpg/1280px-Lake_Ashi_from_Mt.Komagatake_03-2.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="箱根 芦ノ湖・大涌谷" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">箱根 芦ノ湖・大涌谷</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山を望む箱根海賊船クルーズが人気の芦ノ湖と、現在も硫黄煙が噴き出す火山地帯・大涌谷。名物の「黒たまご」を食べると寿命が延びると伝えられます。 箱根（はこね、古くは「函根」、「函嶺」とも呼ばれた）は、静岡県に近い神奈川県南西部の一角、箱根カルデラ近辺の一帯を指す地名。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">江の島</h3>
                <p className="text-xs text-stone-600 leading-relaxed">湘南海岸に浮かぶ美しい島。江島神社への参道散策やシーキャンドル（展望灯台）からの太平洋の絶景、新鮮な生しらす丼など魅力が詰まっています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 神奈川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 神奈川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kanagawa-yugawara-onsen-bangei-stay" />
</div>
  );
}
