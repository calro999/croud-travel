import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/hot-spring-mud-pack-thalasso-spa-stay/" },
  title: "温泉泥パック＆タラソテラピー宿：天然クレイ泥湯・海洋深層水スパ 厳選ガイド",
  description: "天然の美容成分を肌に塗る極上スパ温泉宿完全特化！鹿児島霧島・別府の「天然温泉泥パック（泥湯）」、沖縄・南房総の「海洋深層水タラソテラピー」、ミネラル豊富な海藻パック、シルクのような美肌温泉を徹底解説。",
  keywords: ["温泉泥パック", "タラソテラピー宿", "天然クレイ泥湯", "海洋深層水スパ", "温泉宿", "宿泊予約", "楽天トラベル"],
  openGraph: {
    title: "温泉泥パック＆タラソテラピー宿：天然クレイ泥湯・海洋深層水スパ 厳選ガイド",
    description: "天然の美容成分を肌に塗る極上スパ温泉宿完全特化！鹿児島霧島・別府の「天然温泉泥パック（泥湯）」、沖縄・南房総の「海洋深層水タラソテラピー」、ミネラル豊富な海藻パック、シルクのような美肌温泉を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "温泉泥パック＆タラソテラピー宿：天然クレイ泥湯・海洋深層水スパ 厳選ガイド",
    description: "天然の美容成分を肌に塗る極上スパ温泉宿完全特化！鹿児島霧島・別府の「天然温泉泥パック（泥湯）」、沖縄・南房総の「海洋深層水タラソテラピー」、ミネラル豊富な海藻パック、シルクのような美肌温泉を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hot-spring-mud-pack-thalasso-spa-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hot-spring-mud-pack-thalasso-spa-stay", e);
  }
  return {};
}

export default function WellnessRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kirishima_beppu_mud_onsen_stay",
    "title": "1. 霧島＆別府・天然温泉泥パック（顔から全身に塗って乾かす天然エステ）",
    "timing": "通年（古い角質を吸着し陶器のような滑らか肌へ）",
    "desc": "源泉底に沈む天然の泥（クレイ）をすくい上げて楽しむ「天然泥湯」。鹿児島・霧島の「さくらさくら温泉」では、乳白色の泥を顔や全身に塗り、乾いた後に温泉で洗い流す天然パックが大人気。別府「別府温泉保養ランド」の鉱泥温泉。",
    "spots": "霧島温泉（さくらさくら温泉・泥パック露天風呂）、別府温泉保養ランド（紺屋地獄泥湯）",
    "access": "鹿児島空港より車・バス約35分、JR別府駅よりバス約25分。",
    "tip": "泥パックを塗った後は、完全に乾くまで5〜10分ほど日光や外気に当ててから温泉で優しく洗い流すと、毛穴の汚れがスッキリ落ちて肌がワントーン明るくなります。"
  },
  {
    "key": "thalasso_sea_water_spa_stay",
    "title": "2. 海洋深層水タラソテラピー（温かい海水の浮力とジェット水流マッサージ）",
    "timing": "通年（運動不足解消・全身のリンパ循環促進）",
    "desc": "古代ギリシャ発祥の海洋療法「タラソテラピー」。体温に近い36度に温められた新鮮な海洋深層水のプールで、ジェット水流を受けながら歩行運動。海藻や海泥（アルゴパック）を用いたミネラルトリートメント。",
    "spots": "沖縄（ザ・テラスクラブ アット ブセナ）、南房総（鴨川）、高知（室戸海洋深層水スパ）",
    "access": "海沿いのラグジュアリーリゾートホテル。",
    "tip": "タラソプールは水着着用で利用でき、運動が苦手な方でも浮力のおかげで関節に負担をかけずに全身を心地よくほぐすことができます。"
  },
  {
    "key": "silky_sulfur_beauty_skin_stay",
    "title": "3. 超高濃度炭酸泉＆シルキーマイクロバブル（血管を広げ血行を促進する奇跡の泡）",
    "timing": "通年（冷え性・むくみ・疲労回復）",
    "desc": "お湯1リットルに1,000ppm以上の炭酸ガスが溶け込んだ「高濃度炭酸泉」。肌に無数の微細な気泡が付着し、毛細血管を拡張して血流を劇的に改善。超微細気泡で毛穴の奥まで洗浄するシルキーバスと、名湯の至福。",
    "spots": "大分（長湯温泉・ラムネ温泉館）、岐阜（下島温泉）、全国の高級スパ旅館",
    "access": "全国の炭酸泉・美肌温泉地。",
    "tip": "長湯温泉の「ラムネ温泉館」では、銀色の泡が全身を包み込む32度のぬる湯源泉と、41度のにごり湯の内湯を交互に入る「温冷交代浴」が最高です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【温泉泥パック＆タラソテラピー宿】天然クレイ泥湯・海洋深層水スパ 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "天然の美容成分を肌に塗る極上スパ温泉宿完全特化！鹿児島霧島・別府の「天然温泉泥パック（泥湯）」、沖縄・南房総の「海洋深層水タラソテラピー」、ミネラル豊富な海藻パック、シルクのような美肌温泉を徹底解説。",
    "url": "https://croud-travel.pages.dev/hot-spring-mud-pack-thalasso-spa-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【温泉泥パック＆タラソテラピー宿】天然クレイ泥湯・海洋深層水スパ 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/hot-spring-mud-pack-thalasso-spa-stay/" }
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
            MUD PACK & THALASSO SPA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「温泉泥パック＆タラソテラピー宿」天然クレイ泥湯・海洋深層水スパ 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            大地のミネラルを全身で吸収する奇跡の美容温泉！霧島や別府の底からすくい上げるクリーミーな「天然温泉泥パック」。海の生命力で細胞を活性化する「海洋深層水タラソテラピー」。エステ要らずのツルツル美肌へ導くビューティーステイ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* プログラム内容・ロケーション・ととのうコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要エリア＆専門プログラム</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆おすすめロケーション</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 リトリート効果を高めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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
              📊 温泉泥パック＆タラソテラピー宿：天然クレイ泥湯・海洋深層水スパ 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「温泉泥パック＆タラソテラピー宿：天然クレイ泥湯・海洋深層水スパ 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. どろ湯の旅籠さくらさくら温泉　霧島神宮温泉郷</td>
                <td className="p-3 text-stone-600">鹿児島県霧島市霧島田口2324-7</td>
                <td className="p-3 text-stone-600">霧島神宮駅周辺</td>
                <td className="p-3 text-stone-600">有り　１００台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.4（930件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15081%2F15081.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市新川舟蔵2481-1</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　110台収容　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.47（1261件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,930〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69360%2F69360.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ＡＮＡインターコンチネンタル石垣リゾート　ｂｙ　ＩＨＧ　＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市真栄里354-1</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　456台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.4（1521件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,040〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1973%2F1973.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルシギラミラージュ＜宮古島＞</td>
                <td className="p-3 text-stone-600">沖縄県宮古島市上野新里1405-201</td>
                <td className="p-3 text-stone-600">宮古空港駅周辺</td>
                <td className="p-3 text-stone-600">無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.76（417件）</td>
                <td className="p-3 font-bold text-rose-600">¥38,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168769%2F168769.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテルシギラミラージュビーチフロント＜宮古島＞</td>
                <td className="p-3 text-stone-600">沖縄県宮古島市上野字新里1405-271</td>
                <td className="p-3 text-stone-600">宮古空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　２３台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.58（142件）</td>
                <td className="p-3 font-bold text-rose-600">¥36,480〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188998%2F188998.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 長湯温泉　大丸旅館</td>
                <td className="p-3 text-stone-600">鹿児島県</td>
                <td className="p-3 text-stone-600">JR豊肥本線・豊後竹田駅よりお車にて25分。（駅から路線バスもあります</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.37（199件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108788%2F108788.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">どろ湯の旅籠さくらさくら温泉　霧島神宮温泉郷</h3>
                  <span className="text-xs text-stone-400 ml-2">（どろゆのはたごさくらさくらおんせん　きりしまじんぐうおんせんきょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15081/15081_war.jpg" alt="どろ湯の旅籠さくらさくら温泉　霧島神宮温泉郷 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>美しい山々に囲まれた閑静な別荘地にある宿。天然泥湯温泉が自慢の一つ。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鹿児島県霧島市霧島田口2324-7 ／ 最寄り駅：霧島神宮 ／ 交通案内：【ＪＲ霧島神宮駅】下車タクシー10分。【鹿児島空港】から車で40分。【鹿児島市内】より車で1時間10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１００台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.57 ／ 立地 ★4.22 ／ 部屋 ★3.9 ／ 設備 ★3.96 ／ 風呂 ★4.38 ／ 食事 ★4.58</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「野菜たっぷりの鍋と肌がすべすべになる温泉お鍋が野菜たっぷりで美味しかったです。しめにご飯を入れて溶き卵で雑炊にして食べました。出汁の旨味が絡んて美味しかったです。温泉もどろ湯がとても肌…　2026-09-25 13:52:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐらん&amp;#12436;ぃりおりぞーといしがきじま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,930〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/69360/69360_ro.jpg" alt="グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>オーシャンズウィングとヴィラガーデン　趣の異なる２つの宿泊エリアと充実の施設が魅力的な南国リゾート</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市新川舟蔵2481-1 ／ 最寄り駅：石垣空港 ／ 交通案内：新石垣空港より車で40分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　110台収容　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.53 ／ 立地 ★4.47 ／ 部屋 ★4.48 ／ 設備 ★4.41 ／ 風呂 ★4.38 ／ 食事 ★4.5</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「海が見えるプールと星空観賞で大満足部屋も綺麗で、天気良く景色も綺麗でした。リゾートホテルで前に海が見えて屋内、屋外プ一ルもあり孫も大喜びでした。タオルも浮き輪も無料で貸し出してもらえま…　2026-10-09 21:34:28投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＡＮＡインターコンチネンタル石垣リゾート　ｂｙ　ＩＨＧ　＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（えいえぬえーいんたーこんちねんたるいしがきりぞーと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,040〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1973/1973_room.jpg" alt="ＡＮＡインターコンチネンタル石垣リゾート　ｂｙ　ＩＨＧ　＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>豊かな自然と文化が根付いた島で、心の琴線に触れる出会いと発見に満ちた、ラグジュアリーリゾート</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市真栄里354-1 ／ 最寄り駅：石垣空港 ／ 交通案内：石垣空港からお車で約20分, 空港バスで約25分（ホテル前下車）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　456台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「サービスも食事も大満足の素晴らしい内容サービス、ご飯も大満足でした!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/…　2026-09-05 21:07:35投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルシギラミラージュ＜宮古島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（しぎらみらーじゅ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥38,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/168769/168769.jpg" alt="ホテルシギラミラージュ＜宮古島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>旅人を魅了する蒼の楽園 ～二つとして同じ色のない幻想の世界へ～</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県宮古島市上野新里1405-201 ／ 最寄り駅：宮古空港 ／ 交通案内：宮古空港ーホテル：シャトルバス空港カウンター受付（１０時ー１７時３０分）、下地島空港ーホテル：公式サイトをご確認ください</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの案内が最高、朝食も充実で大満足チェックインの時から最高です!何が食べたいかで周辺の食事処を案内してくれたり、滞在中のスケジュールからオススメのスポットなども併せて教えてくれます。朝食…　2026-09-01 09:07:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルシギラミラージュビーチフロント＜宮古島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（しぎらみらーじゅびーちふろんと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥36,480〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188998/188998.jpg" alt="ホテルシギラミラージュビーチフロント＜宮古島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宮古島の海と空を一望する「シギラミラージュ」の新たなデスティネーションが誕生</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県宮古島市上野字新里1405-271 ／ 最寄り駅：宮古空港 ／ 交通案内：宮古空港ーホテル：シャトルバス空港カウンター受付（１０時ー１７時３０分）、下地島空港ーホテル：公式サイトをご確認ください</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２３台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「非常に満足度の高い素晴らしい体験非常に良いホテルでした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/188998…　2026-08-14 06:26:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">長湯温泉　大丸旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108788/108788.jpg" alt="長湯温泉　大丸旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：JR豊肥本線・豊後竹田駅よりお車にて25分。（駅から路線バスもあります。長湯行き約40分、長湯下車。）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「何十年ぶりかに訪れましたが、相変わらず温泉は最高です。今回の旅館は、初めてでしたが長い歴史を感じさせる雰囲気のある旅館でした。テレビの調子が悪くてほとんど見れませんでしたが、それがまた良かった…　2026-09-14 18:41:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！鹿児島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、鹿児島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">桜島（有村溶岩展望所）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">錦江湾に浮かぶ鹿児島県のシンボルであり現在も活発な活動を続ける活火山。有村溶岩展望所からは溶岩原と噴煙を上げる大迫力の姿を間近で観察できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Ibusuki.jpg/1280px-Ibusuki.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="指宿温泉（砂むし温泉）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">指宿温泉（砂むし温泉）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界でも大変珍しい天然の海岸砂むし風呂。温かい温泉熱を含んだ砂の中に埋まり、海鳴りを聞きながら汗を流すデトックス体験は至福のひとときです。 指宿温泉（いぶすきおんせん）は、鹿児島県指宿市東部（旧国薩摩国）にある摺ヶ浜温泉（砂蒸しで有名）、弥次ヶ湯温泉、二月田温泉などの温泉群の総称。鹿児島県内有数の観光地であり、2003年（平成15年）において年間285万人の観光客が訪れ、91万人の宿泊客を集めている。農業や養殖などへの温泉利用も盛んであり、温泉の9割が産業利用されていた時期もあった。また、196…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">屋久島（縄文杉）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">樹齢7,000年とも言われる世界自然遺産・屋久島の象徴「縄文杉」。白谷雲水峡の美しい苔むす森や数千年の時を生き抜いた巨大な屋久杉群が感動を呼びます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">仙厳園（磯庭園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">島津家第19代当主・光久によって造営された大名庭園。桜島を築山に、錦江湾を池に見立てた雄大な借景庭園で、隣接する世界遺産「尚古集成館」も見どころです。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 鹿児島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 鹿児島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="hot-spring-mud-pack-thalasso-spa-stay" />
</div>
  );
}
