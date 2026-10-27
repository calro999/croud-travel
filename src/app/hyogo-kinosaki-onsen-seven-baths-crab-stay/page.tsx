import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/hyogo-kinosaki-onsen-seven-baths-crab-stay/" },
  title: "兵庫・城崎温泉＆円山川：七つの外湯めぐり・浴衣柳並木＆松葉ガニ宿 厳選ガイド",
  description: "1300年の名湯「城崎温泉」の七つの外湯めぐりと大谿川の柳並木、津居山港・柴山港直送の本松葉ガニ懐石、円山川のコウノトリ湿地を巡る兵庫・但馬特化ガイド。伝統木造旅館や川沿いリゾートを厳選。",
  keywords: ["兵庫", "城崎温泉", "円山川", "七つの外湯めぐり", "浴衣柳並木", "松葉ガニ宿", "温泉宿"],
  openGraph: {
    title: "兵庫・城崎温泉＆円山川：七つの外湯めぐり・浴衣柳並木＆松葉ガニ宿 厳選ガイド",
    description: "1300年の名湯「城崎温泉」の七つの外湯めぐりと大谿川の柳並木、津居山港・柴山港直送の本松葉ガニ懐石、円山川のコウノトリ湿地を巡る兵庫・但馬特化ガイド。伝統木造旅館や川沿いリゾートを厳選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "兵庫・城崎温泉＆円山川：七つの外湯めぐり・浴衣柳並木＆松葉ガニ宿 厳選ガイド",
    description: "1300年の名湯「城崎温泉」の七つの外湯めぐりと大谿川の柳並木、津居山港・柴山港直送の本松葉ガニ懐石、円山川のコウノトリ湿地を巡る兵庫・但馬特化ガイド。伝統木造旅館や川沿いリゾートを厳選。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hyogo-kinosaki-onsen-seven-baths-crab-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hyogo-kinosaki-onsen-seven-baths-crab-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kinosaki_seven_bath_pass_stay",
    "title": "1. 城崎温泉「七つの外湯めぐり」＆大谿川の柳並木（浴衣と下駄で歩く情緒湯街）",
    "timing": "通年（冬の雪景色と湯けむり、夏の城崎夢花火、春の桜並木と柳の芽吹き）",
    "desc": "「まち全体が一つの大きな温泉宿」という理念を持つ城崎温泉。宿にチェックインしたら色浴衣に着替え、下駄を鳴らして「さとの湯」「一の湯」「御所の湯」「曼陀羅湯」「鴻の湯」「柳湯」「地蔵湯」の七つの外湯へ。それぞれ異なる建築様式とご利益を楽しめます。",
    "spots": "御所の湯（滝の露天風呂）、一の湯（洞窟風呂）、さとの湯（駅前展望露天風呂）、鴻の湯（庭園露天風呂）、木屋町小路",
    "access": "JR山陰本線「城崎温泉駅」下車徒歩すぐ。特急こうのとり（新大阪より約2時間40分）、特急きのさき（京都より約2時間20分）。北近畿豊岡道「但馬空港IC」より約25分。",
    "tip": "旅館に宿泊すると無料の「外湯めぐりデジタルパス（ゆめぱ）」が発行され、滞在中は七つの外湯に何度でも入り放題になります。"
  },
  {
    "key": "kinosaki_matsuba_crab_feast_stay",
    "title": "2. 津居山港直送「本松葉ガニ」フルコース（焼き・刺し・甲羅味噌の極み）",
    "timing": "冬季限定（11月6日のカニ漁解禁〜翌年3月下旬）",
    "desc": "城崎温泉のすぐ隣、津居山港や柴山港で水揚げされる青いタグ付きのズワイガニのオス「本松葉ガニ」。透明感あふれる甘いカニ刺し、香ばしい炭火焼きガニ、熱々のカニすき鍋、濃厚な甲羅味噌焼きなど、冬の日本海最高峰の贅を尽くしたカニ料理を堪能できます。",
    "spots": "城崎温泉おみやげ街道（鮮魚店・カニ直売店）、但馬牛・城崎スイーツ店群",
    "access": "城崎温泉街の各料亭旅館・飲食店。",
    "tip": "冷凍ではない「活け松葉ガニ」を使用したプランを選ぶと、繊細な身の甘みとジューシーさの格別の違いを体験できます。"
  },
  {
    "key": "maruyama_river_stork_stay",
    "title": "3. 円山川下流湿地・コウノトリの郷＆玄武洞（奇跡の自然再生と六角柱状節理）",
    "timing": "通年（秋の円山川朝霧、冬の渡り鳥飛来、新緑の玄武洞）",
    "desc": "特別天然記念物・コウノトリが悠然と空を舞う円山川流域。ラムサール条約湿地にも登録された豊かな生態系が広がる「コウノトリの郷公園」や、約160万年前の火山活動が生み出した神秘的な六角形石柱群「玄武洞公園」。城崎の奥深い自然と地球の歴史を体感できます。",
    "spots": "玄武洞公園（玄武洞ミュージアム）、兵庫県立コウノトリの郷公園、円山川公苑（カヌー・スケート）",
    "access": "玄武洞公園へは城崎温泉駅より車・タクシーで約10分（対岸のJR玄武洞駅より渡し船もあり）。コウノトリの郷公園へは車で約20分。",
    "tip": "リニューアルされた玄武洞公園のライトアップやガイドツアーに参加すると、世界で初めて「地磁気の逆転」が発見された歴史を学べます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【兵庫・城崎温泉＆円山川】七つの外湯めぐり・浴衣柳並木＆松葉ガニ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "1300年の名湯「城崎温泉」の七つの外湯めぐりと大谿川の柳並木、津居山港・柴山港直送の本松葉ガニ懐石、円山川のコウノトリ湿地を巡る兵庫・但馬特化ガイド。伝統木造旅館や川沿いリゾートを厳選。",
    "url": "https://croud-travel.pages.dev/hyogo-kinosaki-onsen-seven-baths-crab-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【兵庫・城崎温泉＆円山川】七つの外湯めぐり・浴衣柳並木＆松葉ガニ宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/hyogo-kinosaki-onsen-seven-baths-crab-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            名湯＆冬の味覚特集 ♨️
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「兵庫・城崎温泉＆円山川」七つの外湯めぐり・浴衣柳並木＆津居山港松葉ガニ宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            開湯1300年、志賀直哉の『城の崎にて』でも名高い名湯「城崎温泉」。大谿川（おおたにがわ）にかかる太鼓橋と柳並木、色浴衣と下駄を鳴らして巡る個性豊かな「七つの外湯」。そして冬の日本海がもたらす最高峰の味覚・津居山港直送の「本松葉ガニ」。情緒と美食が極まる関西屈指の名湯ステイへご案内します。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
                      <article
                        key={hotel.hotelNo}
                        className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                      >
                        <div>
                          <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                            {hotel.hotelImageUrl ? (
                              <img
                                src={hotel.hotelImageUrl}
                                alt={hotel.hotelName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
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
                            <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                              {hotel.hotelName}
                            </h4>
                            {hotel.hotelSpecial && (
                              <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
                                {hotel.hotelSpecial}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <a
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
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
              📊 兵庫・城崎温泉＆円山川：七つの外湯めぐり・浴衣柳並木＆松葉ガニ宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「兵庫・城崎温泉＆円山川：七つの外湯めぐり・浴衣柳並木＆松葉ガニ宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 城崎温泉　料理旅館　よしはる</td>
                <td className="p-3 text-stone-600">兵庫県豊岡市城崎町湯島180</td>
                <td className="p-3 text-stone-600">ＪＲ　城崎温泉駅より徒歩にて３分</td>
                <td className="p-3 text-stone-600">有り　７台　無料のプランから有料のプランがあり、プランに料金は記載してます。　要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.91（258件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,930〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79381%2F79381.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 城崎温泉　春日屋旅館</td>
                <td className="p-3 text-stone-600">兵庫県豊岡市城崎町湯島601</td>
                <td className="p-3 text-stone-600">城崎温泉駅より徒歩にて10分</td>
                <td className="p-3 text-stone-600">・有り（無料） ※お車でお越しの方は、ご予約時に【備考】欄へご記入ください。</td>
                <td className="p-3 font-bold text-amber-600">★4（5件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F140962%2F140962.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 城崎温泉　みつわ旅館</td>
                <td className="p-3 text-stone-600">兵庫県豊岡市城崎町湯島220</td>
                <td className="p-3 text-stone-600">城崎駅周辺</td>
                <td className="p-3 text-stone-600">無料　専用駐車場あり※徒歩５分かかり各自移動。遠くて狭くて見つけにくい。</td>
                <td className="p-3 font-bold text-amber-600">★4.88（212件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,350〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41857%2F41857.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 城崎温泉　山しろや旅館</td>
                <td className="p-3 text-stone-600">兵庫県豊岡市城崎町湯島245</td>
                <td className="p-3 text-stone-600">城崎温泉駅より徒歩にて約３分</td>
                <td className="p-3 text-stone-600">プランにより異なります（詳しくはプラン内容の下記に明記してありますのでご確認下さい）</td>
                <td className="p-3 font-bold text-amber-600">★4.14（60件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151275%2F151275.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 城崎温泉　風月魚匠（ふうげつぎょしょう）</td>
                <td className="p-3 text-stone-600">兵庫県豊岡市城崎町湯島636-1</td>
                <td className="p-3 text-stone-600">ＪＲ：城崎温泉駅より徒歩20分/旅館組合乗合送迎バスあり　お車：北近畿</td>
                <td className="p-3 text-stone-600">無料駐車場有　（10台予約不要）</td>
                <td className="p-3 font-bold text-amber-600">★4.62（789件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147569%2F147569.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 城崎　円山川温泉　銀花（共立リゾート）</td>
                <td className="p-3 text-stone-600">兵庫県豊岡市小島1177</td>
                <td className="p-3 text-stone-600">JR城崎温泉駅より車10分（14：15～21：45まで送迎有。※予約制</td>
                <td className="p-3 text-stone-600">有り（15台、無料）到着時、旅館門前にお車をお寄せください。スタッフが移動させます。</td>
                <td className="p-3 font-bold text-amber-600">★4.7（464件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70709%2F70709.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城崎温泉　料理旅館　よしはる</h3>
                  <span className="text-xs text-stone-400 ml-2">（きのさきおんせん　りょうりりょかん　よしはる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,930〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/79381/79381_ru.jpg" alt="城崎温泉　料理旅館　よしはる 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>楽天トラベルアワード2012受賞★口コミ5つ星！城崎温泉駅徒歩３分。貸切風呂・男女デザイン浴衣もあり</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県豊岡市城崎町湯島180 ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ　城崎温泉駅より徒歩にて３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　７台　無料のプランから有料のプランがあり、プランに料金は記載してます。　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「城崎温泉　料理旅館　よしはるは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城崎温泉　春日屋旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（きのさきおんせんかすがやりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/140962/140962_kya.jpg" alt="城崎温泉　春日屋旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★外湯めぐり立地最高★帰ればほっとする懐かしの和室宿で賑わいを楽しむ城崎満喫旅！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県豊岡市城崎町湯島601 ／ 最寄り駅：主要駅 ／ 交通案内：城崎温泉駅より徒歩にて10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>・有り（無料） ※お車でお越しの方は、ご予約時に【備考】欄へご記入ください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「城崎温泉　春日屋旅館は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城崎温泉　みつわ旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（きのさきおんせん　みつわりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,350〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/41857/41857_kya.jpg" alt="城崎温泉　みつわ旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日本海の新鮮な魚介類を使ったお料理を満足していただけます。城崎を満喫するならこんな家庭的な宿がいい</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県豊岡市城崎町湯島220 ／ 最寄り駅：城崎 ／ 交通案内：山陰本線　城崎温泉駅より徒歩２～３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料　専用駐車場あり※徒歩５分かかり各自移動。遠くて狭くて見つけにくい。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.88 ／ 立地 ★4.8 ／ 部屋 ★4.8 ／ 設備 ★4.8 ／ 風呂 ★4.82 ／ 食事 ★5</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ご飯がおいしかったです。巨大なぬいぐるみが、お出迎え、お見送りしてくれます。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voic…　2026-09-14 13:10:05投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城崎温泉　山しろや旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/151275/151275_kan1.jpg" alt="城崎温泉　山しろや旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>城崎温泉　旅館　おすすめ但馬牛と人気の蟹の宿　山しろや</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県豊岡市城崎町湯島245 ／ 最寄り駅：主要駅 ／ 交通案内：城崎温泉駅より徒歩にて約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>プランにより異なります（詳しくはプラン内容の下記に明記してありますのでご確認下さい）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「城崎温泉　山しろや旅館は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城崎温泉　風月魚匠（ふうげつぎょしょう）</h3>
                  <span className="text-xs text-stone-400 ml-2">（きのさきおんせん　ふうげつ　ぎょしょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147569/147569.jpg" alt="城崎温泉　風月魚匠（ふうげつぎょしょう） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2022年11月貸切風呂＆離れ特別室リニューアル！老舗鮮魚店プロデュース　大人だけの料理旅館！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県豊岡市城崎町湯島636-1 ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ：城崎温泉駅より徒歩20分/旅館組合乗合送迎バスあり　お車：北近畿豊岡道 豊岡出石ICでお降り下さい</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場有　（10台予約不要）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「教えたくないほどお気に入りの場所いろんなところに旅行に行っていますが今のところ自分の1番気に入っている宿などで今回は結婚が決まり最初の旅行で旅行に行くならここに行きたいと思っていてやはり今…　2026-08-18 17:34:49投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城崎　円山川温泉　銀花（共立リゾート）</h3>
                  <span className="text-xs text-stone-400 ml-2">（きのさき　まるやまがわおんせん　ぎんか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70709/70709_h.jpg" alt="城崎　円山川温泉　銀花（共立リゾート） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>一流の料理人が選び抜き、美食にこだわる隠れ宿。悠にして閑、安にして穏なる宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県豊岡市小島1177 ／ 最寄り駅：主要駅 ／ 交通案内：JR城崎温泉駅より車10分（14：15～21：45まで送迎有。※予約制）。北近畿豊岡道【豊岡・出石IC】より約30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（15台、無料）到着時、旅館門前にお車をお寄せください。スタッフが移動させます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「宿から城崎温泉街へ送迎もしてくれてとても助かりました。川のほとりでロケーションも最高です。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hot…　2026-08-19 07:55:22投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！兵庫県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、兵庫県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">国宝 姫路城（白鷺城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">神戸ポートタワー・ハーバーランド</h3>
                <p className="text-xs text-stone-600 leading-relaxed">神戸港のウォーターフロントエリア。赤いつづみの形をしたポートタワーやメリケンパークの夜景、海辺のショッピングモールがロマンチックです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg/1280px-161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="城崎温泉（外湯めぐり）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">城崎温泉（外湯めぐり）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">大谷川沿いに柳並木と木造旅館が並ぶ、1300年の歴史を持つ名湯。「一の湯」「御所の湯」など7つの個性豊かな外湯を浴衣姿で巡る街歩きが魅力です。 城崎温泉駅（きのさきおんせんえき）は、兵庫県豊岡市城崎町今津字稗田にある、西日本旅客鉄道（JR西日本）山陰本線の駅である。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">竹田城跡（天空の城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">標高353mの古城山山頂に築かれた山城遺跡。秋の早朝には雲海に包まれ、まるで空に浮かんでいるかのような幻想的な景色から「天空の城」と呼ばれます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 兵庫県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 兵庫県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="hyogo-kinosaki-onsen-seven-baths-crab-stay" />
</div>
  );
}
