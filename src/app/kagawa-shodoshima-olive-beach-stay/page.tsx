import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kagawa-shodoshima-olive-beach-stay/" },
  title: "香川・小豆島：エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 厳選ガイド",
  description: "瀬戸内海に浮かぶオリーブの島・小豆島エリア完全特化！潮が引くと現れる恋人の聖地「エンジェルロード」、日本三大渓谷美「寒霞渓」ロープウェイ、オリーブ公園の魔法のほうき、オリーブ牛と絶景海辺温泉宿を徹底解説。",
  keywords: ["香川", "小豆島", "エンジェルロード", "寒霞渓", "オリーブ牛", "海辺リゾート", "温泉宿"],
  openGraph: {
    title: "香川・小豆島：エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 厳選ガイド",
    description: "瀬戸内海に浮かぶオリーブの島・小豆島エリア完全特化！潮が引くと現れる恋人の聖地「エンジェルロード」、日本三大渓谷美「寒霞渓」ロープウェイ、オリーブ公園の魔法のほうき、オリーブ牛と絶景海辺温泉宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "香川・小豆島：エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 厳選ガイド",
    description: "瀬戸内海に浮かぶオリーブの島・小豆島エリア完全特化！潮が引くと現れる恋人の聖地「エンジェルロード」、日本三大渓谷美「寒霞渓」ロープウェイ、オリーブ公園の魔法のほうき、オリーブ牛と絶景海辺温泉宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kagawa-shodoshima-olive-beach-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kagawa-shodoshima-olive-beach-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shodoshima_angel_road_view",
    "title": "1. エンジェルロード〜土庄港（1日2回海から現れる奇跡の砂の道と約束の丘展望台）",
    "timing": "通年（干潮時刻の前後約2時間ずつ、1日2回出現）",
    "desc": "潮の満ち引きによって海の中から現れたり消えたりする砂州「エンジェルロード（天使の散歩道）」。「大切な人と手をつないで渡ると願いが叶う」とされる恋人の聖地。小高い「約束の丘展望台」から望む瀬戸内海の多島美。",
    "spots": "エンジェルロード、約束の丘展望台（幸せの鐘・絵馬掛け）、土庄港（オリーブの王冠モニュメント）、迷路のまち",
    "access": "土庄港より車で約5分、徒歩約20分。各ホテル無料送迎あり。高松港からフェリー約60分（高速艇約35分）。",
    "tip": "エンジェルロードの渡れる時間は毎日変わるため、事前に小豆島観光協会の「潮見表」を確認してスケジュールを組みましょう。"
  },
  {
    "key": "shodoshima_olive_park_stay",
    "title": "2. 道の駅 小豆島オリーブ公園〜寒霞渓（エーゲ海のような白い風車と日本三大渓谷美）",
    "timing": "通年（秋の11月寒霞渓全山紅葉・初夏のオリーブの花）",
    "desc": "実写版『魔女の宅急便』のロケ地となった「小豆島オリーブ公園」。ほうきにまたがって白いギリシャ風車の前でジャンプする人気撮影スポット。日本三大渓谷美「寒霞渓（かんかけい）」をロープウェイで空中散歩。",
    "spots": "小豆島オリーブ公園（ギリシャ風車・オリーブ記念館・魔法のほうき無料レンタル）、寒霞渓（ロープウェイ・かわらけ投げ）、二十四の瞳映画村",
    "access": "土庄港より車で約20〜30分。路線バス「坂手線・南廻り福田線」運行。",
    "tip": "寒霞渓山頂の展望台では、円形の素焼きの「かわらけ」を輪の中に投げ入れる開運厄除けの「かわらけ投げ」に挑戦できます。"
  },
  {
    "key": "shodoshima_olive_beef_gourmet",
    "title": "3. プレミアム黒毛和牛「オリーブ牛」＆手延べそうめん（400年の伝統醤油とオリーブオイル）",
    "timing": "通年（オリーブ果実の搾り果汁で育つ讃岐牛）",
    "desc": "小豆島特産のオリーブ果実を与えて育てた極上黒毛和牛「オリーブ牛」。脂の甘みとあっさりした旨味。400年の歴史を持つ「醤の郷（ひしおのさと）」の木桶仕込み醤油や、伝統の手延べ小豆島そうめん、新鮮な地魚会席。",
    "spots": "醤の郷（丸島醤油・マルキン醤油記念館・しょうゆソフト）、小豆島手延そうめん館（箸分け体験）",
    "access": "安田・草壁エリア。",
    "tip": "マルキン醤油記念館の「しょうゆソフトクリーム」は、キャラメルやみたらし団子のようなコクのある甘みで大人気です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【香川・小豆島】エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "瀬戸内海に浮かぶオリーブの島・小豆島エリア完全特化！潮が引くと現れる恋人の聖地「エンジェルロード」、日本三大渓谷美「寒霞渓」ロープウェイ、オリーブ公園の魔法のほうき、オリーブ牛と絶景海辺温泉宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/kagawa-shodoshima-olive-beach-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【香川・小豆島】エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kagawa-shodoshima-olive-beach-stay/" }
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
            SHODOSHIMA ISLAND GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「香川・小豆島」エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            温暖な瀬戸内海に浮かぶ「小豆島」。1日2回干潮時だけに現れる神秘の砂の道「エンジェルロード」。岩肌と紅葉が織りなす「寒霞渓」の絶景。オリーブの風を感じる温泉リゾートと、極上のオリーブ牛に舌鼓を打つ島旅。
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
              📊 香川・小豆島：エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「香川・小豆島：エンジェルロード・寒霞渓＆オリーブ牛・海辺リゾート 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 海辺の宿　入舟　＜香川県・小豆島＞</td>
                <td className="p-3 text-stone-600">香川県小豆郡土庄町甲1171-14</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★2.33（84件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20489%2F20489.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ベイリゾートホテル小豆島</td>
                <td className="p-3 text-stone-600">香川県小豆郡小豆島町古江乙16-3</td>
                <td className="p-3 text-stone-600">坂出駅周辺</td>
                <td className="p-3 text-stone-600">有り　６０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.26（1959件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44874%2F44874.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルグリーンプラザ小豆島＜小豆島＞</td>
                <td className="p-3 text-stone-600">香川県小豆郡土庄町伊喜末2464</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.25（200件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188032%2F188032.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ヴィラ汐音＜小豆島＞</td>
                <td className="p-3 text-stone-600">香川県小豆郡小豆島町坂手甲1686-5</td>
                <td className="p-3 text-stone-600">瓦町駅周辺</td>
                <td className="p-3 text-stone-600">有り　２台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥10,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188826%2F188826.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテル　パールガーデン</td>
                <td className="p-3 text-stone-600">香川県高松市福岡町2-2-1</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">有り　２１７台　無料　予約不要。マイクロバス、中型、大型バス、トラック等は有料</td>
                <td className="p-3 font-bold text-amber-600">★4.41（1712件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84770%2F84770.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">海辺の宿　入舟　＜香川県・小豆島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（うみべのやど　いりふね＜かがわけん＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/20489/20489_wa.jpg" alt="海辺の宿　入舟　＜香川県・小豆島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>海際にあり、エンジェルロード目の前。家族的で、近くにオリーブ温泉、スーパー、コンビニ有ります。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県小豆郡土庄町甲1171-14 ／ 最寄り駅：高松（香川） ／ 交通案内：土庄港より１８００ｍ、／小豆島バス「銀波浦バス停前」下車　食料持ち込みOK！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「海辺の宿　入舟　＜香川県・小豆島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ベイリゾートホテル小豆島</h3>
                  <span className="text-xs text-stone-400 ml-2">（べいりぞーとほてるしょうどしま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874_yso.jpg" alt="ベイリゾートホテル小豆島 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>◆全室オーシャンビュー◆自家源泉の最上階展望露天風呂＆個室貸切露天風呂が魅力★</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県小豆郡小豆島町古江乙16-3 ／ 最寄り駅：坂出 ／ 交通案内：（車）坂手港3分/福田港30分/土庄港30分/草壁港10分/池田港20分★大部港以外の無料送迎有（2日前までに予約要）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　６０台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.4 ／ 立地 ★4.48 ／ 部屋 ★4.25 ／ 設備 ★4.11 ／ 風呂 ★4.28 ／ 食事 ★4.23</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「雨の景色が残念、シャンプーバーは満足あいにくの雨だったのですが、晴れていたらどんなに景色が素敵なホテルだったかと思うと残念でした。お風呂の廊下が塩素臭かったのですが、お風呂ではあまり匂いは感じませ…　2026-10-06 21:58:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルグリーンプラザ小豆島＜小豆島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるぐりーんぷらざしょうどしま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188032/188032.jpg" alt="ホテルグリーンプラザ小豆島＜小豆島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【ソフトドリンク・コーヒー無料サービス】【持ち込みOK】船の往来が見えるリゾートホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県小豆郡土庄町伊喜末2464 ／ 最寄り駅：高松（香川） ／ 交通案内：小豆島　土庄港より車で7分、池田港より車で11分、福田港より車で38分　土庄港へは無料送迎もございます　※要予約</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　50台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「景色が最高、無料のパンやアイスも充実部屋からの景色がよく、またいつでも無料のパンとドリンクやアイスキャンデーがロビー横にあり、とてもよかった。クチコミの詳細はこちらから　https://rev…　2026-08-22 21:36:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ヴィラ汐音＜小豆島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（びぃらしおん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188826/188826.jpg" alt="ヴィラ汐音＜小豆島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>絶景！海沿いの別荘を完全貸切。大切な方と、完全にプライベートで過ごせる！　ヴィラ汐音（シオン）</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県小豆郡小豆島町坂手甲1686-5 ／ 最寄り駅：瓦町 ／ 交通案内：小豆島坂手港より車で約５分、徒歩２５分（1.7km）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ヴィラ汐音＜小豆島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　パールガーデン</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぱーるがーでん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/84770/84770_room.jpg" alt="ホテル　パールガーデン 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>上位ランクのシモンズベッドでぐっすり☆新館禁煙Ｒのみ・本館喫煙Ｒ有！無料ＷＩＦＩ＆駐車場無料</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市福岡町2-2-1 ／ 最寄り駅：高松（香川） ／ 交通案内：JR高松駅より徒歩約30分(車で約10分)又は路線パスで約5分/高松中央ICより5km（約25分）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２１７台　無料　予約不要。マイクロバス、中型、大型バス、トラック等は有料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.39 ／ 立地 ★4.23 ／ 部屋 ★4.47 ／ 設備 ★4.38 ／ 風呂 ★4.38 ／ 食事 ★4.49</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事は満足だが料金が2年前の1.5倍に驚きリピーターです。今回も夕朝食付プランで宿泊しました。夕食も朝食もともに美味しく満足しました。ただ、料金が2年前に比べて1.5倍にアップしていて驚きまし…　2026-10-09 16:25:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！香川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、香川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">栗林公園（りつりんこうえん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「一歩一景」と称される特別名勝の大名庭園。紫雲山を背景に6つの池と13の築山が配置され、手入れの行き届いた1,400本の松の緑が美しく広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金刀比羅宮（こんぴらさん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「さぬきのこんぴらさん」として親しまれる海の守護神。御本宮まで785段、奥社まで1,368段の石段参道を登る参拝と門前の讃岐うどん巡りが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">小豆島（エンジェルロード・オリーブ公園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">瀬戸内海に浮かぶオリーブの島。引き潮の時にだけ海の中から現れる砂の道「エンジェルロード」や、ギリシャ風車が映えるオリーブ公園がロマンチックです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">直島（現代アートの島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">草間彌生氏の「赤かぼちゃ」「黄かぼちゃ」や地中美術館など、自然と現代アートが融和した世界的に有名なアートの聖地。自転車で島内散策が楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 香川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 香川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kagawa-shodoshima-olive-beach-stay" />
</div>
  );
}
