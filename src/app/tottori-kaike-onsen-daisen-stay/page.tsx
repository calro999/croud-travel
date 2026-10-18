import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tottori-kaike-onsen-daisen-stay/" },
  title: "鳥取・皆生温泉＆伯耆大山：海の温泉・美保湾パノラマ＆境港松葉ガニ宿 厳選ガイド",
  description: "山陰屈指の海辺リゾート鳥取皆生温泉＆伯耆富士大山エリア完全特化！日本海の砂浜から湧く「海の温泉（塩化物泉）」、名峰大山の絶景ドライブ、境港直送の松葉ガニ・境港サーモン・鳥取和牛会席宿を徹底解説。",
  keywords: ["鳥取", "皆生温泉", "伯耆大山", "海の温泉", "美保湾パノラマ", "境港松葉ガニ宿", "温泉宿"],
  openGraph: {
    title: "鳥取・皆生温泉＆伯耆大山：海の温泉・美保湾パノラマ＆境港松葉ガニ宿 厳選ガイド",
    description: "山陰屈指の海辺リゾート鳥取皆生温泉＆伯耆富士大山エリア完全特化！日本海の砂浜から湧く「海の温泉（塩化物泉）」、名峰大山の絶景ドライブ、境港直送の松葉ガニ・境港サーモン・鳥取和牛会席宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "鳥取・皆生温泉＆伯耆大山：海の温泉・美保湾パノラマ＆境港松葉ガニ宿 厳選ガイド",
    description: "山陰屈指の海辺リゾート鳥取皆生温泉＆伯耆富士大山エリア完全特化！日本海の砂浜から湧く「海の温泉（塩化物泉）」、名峰大山の絶景ドライブ、境港直送の松葉ガニ・境港サーモン・鳥取和牛会席宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tottori-kaike-onsen-daisen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tottori-kaike-onsen-daisen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kaike_ocean_view_onsen",
    "title": "1. 皆生温泉海岸〜弓ヶ浜（日本海から湧き出すミネラル豊富な美肌の塩湯）",
    "timing": "通年（夏の皆生海水浴場・冬の荒波日本海と雪景色）",
    "desc": "明治時代に地元の漁師が海中に湧き出る温泉を発見したのが始まりの「皆生（かいけ）温泉」。ナトリウム・カルシウム塩化物泉は保温効果と保湿効果が抜群。白砂青松の弓ヶ浜海岸散策と海辺の足湯。",
    "spots": "皆生温泉海浜公園（足湯・夕日スポット）、皆生つるや、日帰り温泉おーゆ・ランド、米子水鳥公園",
    "access": "JR山陰本線「米子駅」より路線バスで約20分。米子鬼太郎空港より車約20分。",
    "tip": "皆生温泉の海岸沿い遊歩道は「日本の夕陽百選」に選ばれており、日本海に沈む夕日と夕焼け空が絶景です。"
  },
  {
    "key": "daisen_highland_nature_stay",
    "title": "2. 伯耆大山〜大山寺・鍵掛峠（西日本最高峰のブナ原生林と南壁パノラマ）",
    "timing": "通年（春〜夏の新緑ハイキング・秋の紅葉・冬の大山スキー）",
    "desc": "標高1,729m、神の山として崇められてきた「伯耆大山（ほうきだいせん）」。日本屈指の広さを誇るブナの原生林。大山南壁の荒々しい岩肌と紅葉が広がる「鍵掛峠（かぎかけとうげ）」。名刹「大山寺」と大山まきばみるくの里。",
    "spots": "大山寺・大神山神社奥宮、鍵掛峠展望台、大山まきばみるくの里（特濃ソフトクリーム）、植田正治写真美術館",
    "access": "米子市街・皆生温泉より車で約30〜40分。",
    "tip": "「植田正治写真美術館」では、館内のスリット窓から大山が逆さに映り込む帽子モニュメントのフォトジェニックな写真が撮れます。"
  },
  {
    "key": "sakaiminato_crab_gourmet",
    "title": "3. 境港直送「松葉ガニ」＆鳥取和牛（日本海のカニ王国と極上オレイン牛）",
    "timing": "秋〜冬期（9月〜紅ズワイガニ、11月〜3月の松葉ガニ解禁）",
    "desc": "日本屈指の水揚げ量を誇る「境港」。タグ付きのブランド松葉ガニを丸ごと茹で・焼き・刺身・カニ鍋で味わうフルコース。肉質の55%以上がオレイン酸でとろけるような口溶けの「鳥取和牛オレイン55」。",
    "spots": "境港水産物直売センター、水木しげるロード（妖怪ブロンズ像・妖怪神社）、境港大漁市場なかうら",
    "access": "皆生温泉より車で約25分（境港エリア）。",
    "tip": "水木しげるロードは夜になると妖怪たちの影絵が歩道にライトアップされ、昼とは全く異なる幻想的な雰囲気を楽しめます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【鳥取・皆生温泉＆伯耆大山】海の温泉・美保湾パノラマ＆境港松葉ガニ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "山陰屈指の海辺リゾート鳥取皆生温泉＆伯耆富士大山エリア完全特化！日本海の砂浜から湧く「海の温泉（塩化物泉）」、名峰大山の絶景ドライブ、境港直送の松葉ガニ・境港サーモン・鳥取和牛会席宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/tottori-kaike-onsen-daisen-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【鳥取・皆生温泉＆伯耆大山】海の温泉・美保湾パノラマ＆境港松葉ガニ宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tottori-kaike-onsen-daisen-stay/" }
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
            KAIKE ONSEN & DAISEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「鳥取・皆生温泉＆伯耆大山」海の温泉・美保湾パノラマ＆境港松葉ガニ宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            弓ヶ浜の白砂青松と雄大な「伯耆富士・大山」を望む「皆生温泉」。海中から湧き出す塩化物泉の温まりの湯。境港で水揚げされた極上の松葉ガニや紅ズワイガニ、鳥取和牛オレイン55に舌鼓を打つ山陰の極上ステイ。
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
              📊 鳥取・皆生温泉＆伯耆大山：海の温泉・美保湾パノラマ＆境港松葉ガニ宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「鳥取・皆生温泉＆伯耆大山：海の温泉・美保湾パノラマ＆境港松葉ガニ宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 皆生温泉　皆生シーサイドホテル　海の四季</td>
                <td className="p-3 text-stone-600">鳥取県米子市皆生温泉3-4-3</td>
                <td className="p-3 text-stone-600">米子駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場80台分完備。当館をご利用のお客様はいつでも駐車いただけます。</td>
                <td className="p-3 font-bold text-amber-600">★4.42（4883件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,940〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5020%2F5020.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 皆生温泉　皆生グランドホテル天水</td>
                <td className="p-3 text-stone-600">鳥取県米子市皆生温泉4-18-45</td>
                <td className="p-3 text-stone-600">米子駅周辺</td>
                <td className="p-3 text-stone-600">無料大駐車場　バス２０台・乗用車１００台</td>
                <td className="p-3 font-bold text-amber-600">★3.94（1046件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2039%2F2039.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 皆生温泉　華水亭</td>
                <td className="p-3 text-stone-600">鳥取県米子市皆生温泉4-19-10</td>
                <td className="p-3 text-stone-600">米子駅周辺</td>
                <td className="p-3 text-stone-600">有り　70台　バス10台　乗用車70台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.57（919件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2038%2F2038.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ベイサイドスクエア　皆生ホテル</td>
                <td className="p-3 text-stone-600">鳥取県米子市皆生温泉4-21-1</td>
                <td className="p-3 text-stone-600">米子駅周辺</td>
                <td className="p-3 text-stone-600">有り　１４０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.39（1715件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,230〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79349%2F79349.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 休暇村　奥大山　（旧　大山鏡ヶ成）</td>
                <td className="p-3 text-stone-600">鳥取県日野郡江府町御机字鏡ヶ成709-1</td>
                <td className="p-3 text-stone-600">根雨駅周辺</td>
                <td className="p-3 text-stone-600">有り　２００台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.52（181件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8496%2F8496.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. フェアフィールド・バイ・マリオット・岡山蒜山高原</td>
                <td className="p-3 text-stone-600">岡山県真庭市蒜山上徳山1385-9</td>
                <td className="p-3 text-stone-600">武庫駅周辺</td>
                <td className="p-3 text-stone-600">駐車場56台／無料・先着順。満車時は近隣案内、詳細はフロント（0867-66-7550）まで</td>
                <td className="p-3 font-bold text-amber-600">★4.42（145件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,899〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184618%2F184618.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">皆生温泉　皆生シーサイドホテル　海の四季</h3>
                  <span className="text-xs text-stone-400 ml-2">（かいけおんせん　かいけしーさいどほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,940〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5020/5020_r1.jpg" alt="皆生温泉　皆生シーサイドホテル　海の四季 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【楽天アワード2025受賞】14年連続＆通算17回目！全室オーシャンフロント！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県米子市皆生温泉3-4-3 ／ 最寄り駅：米子 ／ 交通案内：米子自動車道・米子ＩＣより車で約10分、ＪＲ米子駅よりタクシー又はバスで約15分、米子空港よりタクシー又はバスで約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場80台分完備。当館をご利用のお客様はいつでも駐車いただけます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「エアコンが効かず、清掃が行き届いていない部屋のエアコンが冷えず部屋の外の方が涼しかった。テーブルの上に綿埃が多く、電話や電気スタンドを動かすとホコリが舞い上がった。食事に使うので拭き掃除をして…　2026-08-21 11:57:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">皆生温泉　皆生グランドホテル天水</h3>
                  <span className="text-xs text-stone-400 ml-2">（かいけおんせん　かいけぐらんどほてる　てんすい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2039/2039_heya1.jpg" alt="皆生温泉　皆生グランドホテル天水 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>7月18日レストランリニューアルオープン♪鳥取砂丘・出雲大社へ好アクセス♪山陰周遊の拠点に♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県米子市皆生温泉4-18-45 ／ 最寄り駅：米子 ／ 交通案内：ＪＲ米子駅より車で１５分、米子空港より車で２０分、米子自動車道米子ＩＣより車で１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料大駐車場　バス２０台・乗用車１００台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの対応が素晴らしくまた泊まりたい到着時はホテル外観に時代を感じさせるものだったのでちょっと心配したが、フロントスタッフの素晴らしい対応で心配も吹き飛んだ。スタッフの良さはフロントだけでなく…　2026-08-21 17:16:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">皆生温泉　華水亭</h3>
                  <span className="text-xs text-stone-400 ml-2">（かいけおんせん　かすいてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2038/2038_heya.jpg" alt="皆生温泉　華水亭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2026年7月18日お食事処リニューアルオープン♪日本海の眺望と季節の会席が愉しめる自家源泉の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県米子市皆生温泉4-19-10 ／ 最寄り駅：米子 ／ 交通案内：ＪＲ米子駅より車で１５分、米子空港より車で２０分、米子自動車道米子ＩＣより車で１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　70台　バス10台　乗用車70台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「丁寧な接客と美味しい食事、眺望に大満足大変丁寧な接客で嬉しくなりました。夜ご飯も朝ごはんもとても美味しくお腹いっぱいになりました。お部屋の眺めも大変よかったです。ウェルカムドリンクが子供たちは…　2026-08-29 20:38:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ベイサイドスクエア　皆生ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（べいさいどすくえあ　かいけほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,230〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/79349/79349_d.jpg" alt="ベイサイドスクエア　皆生ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ビジネスホテルのカジュアルさとリゾートホテルの寛ぎを兼ね合わせたコンフォートホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県米子市皆生温泉4-21-1 ／ 最寄り駅：米子 ／ 交通案内：ＪＲ米子駅より皆生温泉行バス、観光センター下車徒歩５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１４０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの方がいい方が多く、設備、アメニティも種類も数もちょうどいいので、いつも利用しています。いつも、ありがとうございます。クチコミの詳細はこちらから　https://review.travel…　2026-08-18 20:19:15投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">休暇村　奥大山　（旧　大山鏡ヶ成）</h3>
                  <span className="text-xs text-stone-400 ml-2">（きゅうかむら　おくだいせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8496/8496_heya.jpg" alt="休暇村　奥大山　（旧　大山鏡ヶ成） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>自然豊かな高原で、四季折々くつろぎ楽しめる公共の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県日野郡江府町御机字鏡ヶ成709-1 ／ 最寄り駅：根雨 ／ 交通案内：米子自動車道　蒜山ＩＣから約２０分／ＪＲ伯備線　根雨駅より送迎バス３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２００台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「バイキングが美味しくて食べ過ぎた!夕食・朝食ともにバイキング形式でした。すべてとても美味しかったです。食べ過ぎてしまい体重オーバーになってしまいました!?クチコミの詳細はこちらから　htt…　2026-08-17 16:35:29投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">フェアフィールド・バイ・マリオット・岡山蒜山高原</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふぇあふぃーるど　ばい　まりおっと　おかやまひるぜんこうげん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,899〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/184618/184618.jpg" alt="フェアフィールド・バイ・マリオット・岡山蒜山高原 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>Dog Friendly Room販売中。愛犬と一緒に偶然と発見に出会う旅へ。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岡山県真庭市蒜山上徳山1385-9 ／ 最寄り駅：武庫 ／ 交通案内：国道482号沿い。米子自動車道、蒜山ICから車で約2分。JR「江尾駅」車約20分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場56台／無料・先着順。満車時は近隣案内、詳細はフロント（0867-66-7550）まで</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地が良く快適、ベッドは少し小さめ家族で一泊利用しました。シンプルで過ごしやすかったです。小学生の子供と一緒に寝るには、ややベッドは小さく感じました。立地も便利良く、フロントの方々の対…　2026-08-23 00:54:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！鳥取県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、鳥取県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Tottori-Sakyu_Tottori_Japan.JPG/1280px-Tottori-Sakyu_Tottori_Japan.JPG?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="鳥取砂丘" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">鳥取砂丘</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最大級の海岸砂丘。風が織りなす美風紋や馬の背からの壮大な日本海の眺望が素晴らしく、ラクダ乗り体験やパラグライダーが人気です。 鳥取砂丘（とっとりさきゅう）は、鳥取県鳥取市の日本海海岸に広がる日本の代表的な海岸砂丘。広義には鳥取平野の海岸沿いに位置する東西16km、南北2.4kmの砂丘のことで、末恒砂丘、湖山砂丘、浜坂砂丘、福部砂丘の総称である。狭義にはこのうち千代川東岸の浜坂砂丘のことをいい、その一部は観光砂丘となっている。 砂丘の一部は山陰海岸国立公園の特別保護地区に指定されてい…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">水木しげるロード（境港）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">漫画『ゲゲゲの鬼太郎』の作者・水木しげる先生の故郷。境港駅から続く約800mの通りに170体以上のブロンズ像が並び、ブロンズ妖怪探訪を楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">大山（伯耆富士）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">中国地方最高峰（標高1,729m）を誇る名峰。その雄姿から「伯耆富士」と称され、鍵掛峠からのブナ原生林とダイナミックな南壁の紅葉が見事です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">浦富海岸（うらどみかいがん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「山陰の松島」と称される透明度抜群の澄み切った海と断崖・洞門の絶景。グラスボートでの島めぐりやシーカヤックで洞窟探検を楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 鳥取県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 鳥取県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="tottori-kaike-onsen-daisen-stay" />
</div>
  );
}
