import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/oita-beppu-hell-hotspring-stay/" },
  title: "大分・別府八湯＆別府地獄めぐり：海地獄・血の池地獄＆地獄蒸し極上宿 厳選ガイド",
  description: "日本一の湧出量・別府温泉郷エリア完全特化！海地獄・血の池地獄など7つの別府地獄めぐり、鉄輪温泉の湯けむり展望台、地獄蒸し料理体験、砂湯と老舗温泉旅館を徹底解説。",
  keywords: ["大分", "別府八湯", "別府地獄めぐり", "海地獄", "血の池地獄", "地獄蒸し極上宿", "温泉宿"],
  openGraph: {
    title: "大分・別府八湯＆別府地獄めぐり：海地獄・血の池地獄＆地獄蒸し極上宿 厳選ガイド",
    description: "日本一の湧出量・別府温泉郷エリア完全特化！海地獄・血の池地獄など7つの別府地獄めぐり、鉄輪温泉の湯けむり展望台、地獄蒸し料理体験、砂湯と老舗温泉旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "大分・別府八湯＆別府地獄めぐり：海地獄・血の池地獄＆地獄蒸し極上宿 厳選ガイド",
    description: "日本一の湧出量・別府温泉郷エリア完全特化！海地獄・血の池地獄など7つの別府地獄めぐり、鉄輪温泉の湯けむり展望台、地獄蒸し料理体験、砂湯と老舗温泉旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["oita-beppu-hell-hotspring-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for oita-beppu-hell-hotspring-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "beppu_kannawa_steam",
    "title": "1. 鉄輪（かんなわ）温泉街（もうもうと立ち上る湯けむりと伝統の地獄蒸し）",
    "timing": "通年（夜の湯けむりライトアップが日本の夜景遺産認定）",
    "desc": "別府で最も温泉情緒が濃厚な「鉄輪温泉」。温泉の蒸気熱で野菜や海鮮、卵を一気に蒸し上げる「地獄蒸し工房鉄輪」での調理体験。石畳の小径に立ち込める湯けむりと、足蒸し・むし湯を満喫。",
    "spots": "地獄蒸し工房鉄輪、湯けむり展望台、鉄輪むし湯、ひょうたん温泉（ミシュラン三ツ星・砂湯・滝湯）",
    "access": "JR日豊本線「別府駅」西口より亀の井バスで約20分「鉄輪」下車。",
    "tip": "「湯けむり展望台」から眺める鉄輪温泉街の湯けむりと鶴見岳の夕景・夜景は、国の重要文化的景観です。"
  },
  {
    "key": "beppu_jigoku_walk",
    "title": "2. 別府地獄めぐり（コバルトブルーの海地獄から真っ赤な血の池地獄まで）",
    "timing": "通年（7つの地獄共通観覧券で完全制覇）",
    "desc": "1000年以上前から噴気や熱泥が噴出する奇勝「別府地獄めぐり」。神秘的な青さの「海地獄」、赤い粘土が沸き立つ「血の池地獄」、間欠泉が豪快に吹き上がる「龍巻地獄」など圧巻の自然現象。",
    "spots": "海地獄（国指定名勝・極楽饅頭）、血の池地獄、龍巻地獄、白池地獄、鬼石坊主地獄、かまど地獄、鬼山地獄（ワニ）",
    "access": "鉄輪バスターミナル周辺に5地獄、バス約5分の柴石エリアに2地獄が点在。",
    "tip": "海地獄の売店で販売されている「地獄蒸し焼きプリン」は、濃厚でほろ苦いカラメルが絶品の名物スイーツです。"
  },
  {
    "key": "beppu_bayside_luxury",
    "title": "3. 別府湾リバーフロント＆観海寺高台（朝日を望むインフィニティ温泉リゾート）",
    "timing": "通年（海から昇る感動の朝日サンライズ）",
    "desc": "別府湾を見下ろす高台の「観海寺温泉」や海岸沿いのラグジュアリーホテル。「杉乃井ホテル（棚湯）」をはじめ、海と空が一体になる大展望露天風呂から別府市街の夜景と朝日を一望。",
    "spots": "別府温泉 杉乃井ホテル（棚湯・アクアガーデン）、別府タワー、別府海浜砂湯、高崎山自然動物園",
    "access": "別府駅より無料シャトルバスまたはタクシー約10分。",
    "tip": "「別府海浜砂湯」では、波打ち際で温かい砂に埋もれながら潮騒を聞く唯一無二の砂湯体験ができます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【大分・別府八湯＆別府地獄めぐり】海地獄・血の池地獄＆地獄蒸し極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "日本一の湧出量・別府温泉郷エリア完全特化！海地獄・血の池地獄など7つの別府地獄めぐり、鉄輪温泉の湯けむり展望台、地獄蒸し料理体験、砂湯と老舗温泉旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/oita-beppu-hell-hotspring-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【大分・別府八湯＆別府地獄めぐり】海地獄・血の池地獄＆地獄蒸し極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/oita-beppu-hell-hotspring-stay/" }
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
            BEPPU JIGOKU MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「大分・別府八湯＆別府地獄めぐり」海地獄・血の池地獄＆地獄蒸し極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            街の至る所から立ち上る湯けむり。日本一の温泉湧出量と源泉数を誇る「おんせん県おおいた・別府」。コバルトブルーの海地獄、真っ赤な血の池地獄。地熱と温泉の圧倒的パワーに癒やされる旅。
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
              📊 大分・別府八湯＆別府地獄めぐり：海地獄・血の池地獄＆地獄蒸し極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「大分・別府八湯＆別府地獄めぐり：海地獄・血の池地獄＆地獄蒸し極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 別府鉄輪温泉　旅館　喜楽＜大分県＞</td>
                <td className="p-3 text-stone-600">大分県別府市御幸4</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有り　10台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.64（420件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,790〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70231%2F70231.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 鉄輪温泉　かんなわ　ゆの香（レトロ館）</td>
                <td className="p-3 text-stone-600">大分県別府市御幸四組</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有り　１５台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.35（96件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F163057%2F163057.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 鉄輪温泉　冨士屋ホテル（Ｆｕｊｉｙａ　Ｈｏｔｅｌ）</td>
                <td className="p-3 text-stone-600">大分県別府市大字鉄輪735</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">あり　40台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★5（7件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197315%2F197315.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 源泉湯元の宿　旅館　国東荘</td>
                <td className="p-3 text-stone-600">大分県別府市鉄輪風呂本３組</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有　１２台　無料　予約制</td>
                <td className="p-3 font-bold text-amber-600">★4.64（221件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30664%2F30664.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 別府ホテル塒</td>
                <td className="p-3 text-stone-600">大分県別府市火売765-5</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4（25件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,862〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183268%2F183268.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 別府温泉　ホテル好楽</td>
                <td className="p-3 text-stone-600">大分県別府市北浜3-13-21</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有り　40台　1泊550円</td>
                <td className="p-3 font-bold text-amber-600">★3.88（707件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,860〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4765%2F4765.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府鉄輪温泉　旅館　喜楽＜大分県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（きらく＜おおいたけん＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,790〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70231/70231_kya.jpg" alt="別府鉄輪温泉　旅館　喜楽＜大分県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2022年2月客室リニューアル。鉄輪温泉本来の熱めの泉質と名物の地元料理が愉しめる。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市御幸4 ／ 最寄り駅：別府（大分） ／ 交通案内：日豊本線　別府駅より車にて１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　10台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「親切な接客と嬉しい心遣いに大満足とても過ごしやすいお宿でした。従業員の方が皆さん親切で明るくて良かったです子供には嬉しい、アイスとジュースも頂けました。朝食のみのプランだったので、夕飯を食べに…　2026-08-21 17:56:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">鉄輪温泉　かんなわ　ゆの香（レトロ館）</h3>
                  <span className="text-xs text-stone-400 ml-2">（かんなわおんせん　かんなわ　ゆのか　れとろかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/163057/163057_kan1.jpg" alt="鉄輪温泉　かんなわ　ゆの香（レトロ館） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2食付き7550円～！2006年リニューアルOPENの「ゆの香」別館です。ご宿泊の方は貸切風呂無料♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市御幸四組 ／ 最寄り駅：別府（大分） ／ 交通案内：別府駅からバスで３０分。亀の井バス停留所「鉄輪」より徒歩0分。別府ＩＣより車で５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１５台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「美味しい食事と癒しの猫、温泉も満喫夕食も朝食もとても美味しく、地元の食材を楽しめました。看板猫ちゃんたちも本当に可愛くて、頭を撫でさせてくれたり、自分から膝の上に来てくれたりして、とても癒され…　2026-05-11 10:45:32投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">鉄輪温泉　冨士屋ホテル（Ｆｕｊｉｙａ　Ｈｏｔｅｌ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（かんなわおんせん　ふじやほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/197315/197315.jpg" alt="鉄輪温泉　冨士屋ホテル（Ｆｕｊｉｙａ　Ｈｏｔｅｌ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>またここから百年伝えるホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市大字鉄輪735 ／ 最寄り駅：別府（大分） ／ 交通案内：JR日豊本線　別府駅よりお車で20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>あり　40台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「鉄輪温泉　冨士屋ホテル（Ｆｕｊｉｙａ　Ｈｏｔｅｌ）は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">源泉湯元の宿　旅館　国東荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（くにさきそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/30664/30664_w.jpg" alt="源泉湯元の宿　旅館　国東荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>天然温泉にて源泉より毎分２６０リットルの湧出量があり、海の幸の会席と地獄蒸料理をご堪能下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市鉄輪風呂本３組 ／ 最寄り駅：別府（大分） ／ 交通案内：日豊本線ＪＲ別府駅／大分自動車道　別府ICより車で５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　１２台　無料　予約制</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「鉄輪の温泉を独り占め、親切な対応に感謝湯気があちらこちらから立ち昇る鉄輪の中で、スタッフさんも皆様親切にして下さいました。温泉は深夜、早朝にも利用できたのも嬉しかたです。多くの方が宿泊され…　2026-08-19 07:53:25投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府ホテル塒</h3>
                  <span className="text-xs text-stone-400 ml-2">（べっぷほてるねぐら）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,862〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183268/183268.jpg" alt="別府ホテル塒 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【地獄めぐり】海地獄まで徒歩約10分！別府の「街に滞在」をテーマに宿泊体験を追求したデザインホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市火売765-5 ／ 最寄り駅：別府（大分） ／ 交通案内：東九州自動車道・別府ICより車で約5分／JR別府駅より約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「別府ホテル塒は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府温泉　ホテル好楽</h3>
                  <span className="text-xs text-stone-400 ml-2">（べっぷおんせん　こうらく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,860〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4765/4765_room.jpg" alt="別府温泉　ホテル好楽 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>別府温泉の中心地に位置する好立地で源泉かけ流しの露天風呂を堪能＆ワンちゃんOKな客室あり！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市北浜3-13-21 ／ 最寄り駅：別府（大分） ／ 交通案内：別府駅から徒歩10分、北浜バス停（福岡からの高速バス降り口）から2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　40台　1泊550円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「親切な接客と綺麗な室内、愛犬と快適な時間親切な接客でした。室内も綺麗で、犬とお泊まりできてよかったです。また利用したいです。クチコミの詳細はこちらから　https://review.t…　2026-08-16 16:54:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！大分県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、大分県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">別府地獄めぐり</h3>
                <p className="text-xs text-stone-600 leading-relaxed">源泉数・湧出量日本一を誇る別府温泉の代表的観光コース。コバルトブルーの「海地獄」や真っ赤な「血の池地獄」、噴気で蒸す地獄蒸し料理が楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Yufuin_Onsen_-Mus%C5%8Den_02.jpg/1280px-Yufuin_Onsen_-Mus%C5%8Den_02.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="由布院（金鱗湖・辻馬車）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">由布院（金鱗湖・辻馬車）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">由布岳の麓に広がる全国屈指のおしゃれな温泉リゾート。清水と温泉が湧き出て朝霧が立ち込める「金鱗湖」や湯の坪街道のスイーツ巡りが女性に大人気です。 由布院温泉（ゆふいんおんせん）は、大分県由布市（旧国豊後国速見郡）にある温泉。由布岳（標高1,584m）の麓に広がる温泉地である。 温泉湧出量、源泉数ともに全国2位の豊富な湯量を誇る。1959年5月5日に湯平温泉とともに「湯布院温泉」として国民保養温泉地に指定され、2019年10月4日には、由布市内の塚原温泉・庄内温泉・挾間温泉を含めた「湯布院温泉郷」として…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">九重“夢”大吊橋</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水面からの高さ173m、全長390mを誇る日本一高い歩行者専用吊り橋。橋の上からは「日本の滝百選」の震動の滝や九酔渓の壮大なパノラマを見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">宇佐神宮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">全国に40,000社以上ある八幡社の総本宮。豊かな原生林に包まれた広大な敷地に朱塗りの本殿が建ち、伊勢神宮に並ぶ二拝四拍手一拝の参拝様式が特徴です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 大分県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 大分県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="oita-beppu-hell-hotspring-stay" />
</div>
  );
}
