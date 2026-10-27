import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/ishikawa-kaga-onsen-valley-stay/" },
  title: "石川・加賀温泉郷：山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 厳選ガイド",
  description: "石川・加賀温泉郷（山中温泉・山代温泉・片山津温泉・粟津温泉）エリア完全特化！鶴仙渓のあやとりはしと川床、魯山人寓居跡いろは草庵、九谷焼・山中漆器体験、冬の加能ガニ・香箱ガニ会席と老舗名門旅館を徹底解説。",
  keywords: ["石川", "加賀温泉郷", "山中温泉", "山代温泉", "鶴仙渓川床", "加能ガニ極上宿", "温泉宿"],
  openGraph: {
    title: "石川・加賀温泉郷：山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 厳選ガイド",
    description: "石川・加賀温泉郷（山中温泉・山代温泉・片山津温泉・粟津温泉）エリア完全特化！鶴仙渓のあやとりはしと川床、魯山人寓居跡いろは草庵、九谷焼・山中漆器体験、冬の加能ガニ・香箱ガニ会席と老舗名門旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "石川・加賀温泉郷：山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 厳選ガイド",
    description: "石川・加賀温泉郷（山中温泉・山代温泉・片山津温泉・粟津温泉）エリア完全特化！鶴仙渓のあやとりはしと川床、魯山人寓居跡いろは草庵、九谷焼・山中漆器体験、冬の加能ガニ・香箱ガニ会席と老舗名門旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ishikawa-kaga-onsen-valley-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ishikawa-kaga-onsen-valley-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kaga_yamanaka_kakusenkei",
    "title": "1. 山中温泉・鶴仙渓（あやとりはし・こおろぎ橋と清流の川床カフェ）",
    "timing": "通年（4月〜11月の鶴仙渓川床・秋の全山紅葉・冬の雪景色）",
    "desc": "北陸随一の渓谷美を誇る「鶴仙渓（かくせんけい）」。ユニークなS字型の紅色「あやとりはし」や総檜造りの「こおろぎ橋」。清流沿いの「鶴仙渓川床」で道場六三郎レシピのスイーツや加賀棒茶を味わう至福の散策。",
    "spots": "鶴仙渓（川床・あやとりはし・こおろぎ橋・黒谷橋）、山中温泉総湯「菊の湯」、ゆげ街道（山中漆器・食べ歩きコロッケ）",
    "access": "北陸新幹線「加賀温泉駅」より路線バス・加賀周遊キャンバスで約25分「山中温泉」下車。各宿送迎あり。",
    "tip": "「ゆげ街道」の肉のいづみやの「手作りコロッケ」を片手に、山中漆器や九谷焼のギャラリーを巡るのが定番です。"
  },
  {
    "key": "kaga_yamashiro_luxury",
    "title": "2. 山代温泉・湯の曲輪（紅殻格子の街並みと魯山人ゆかりの文化財ステイ）",
    "timing": "通年（歴史と文化に触れる大人旅）",
    "desc": "温泉街の中心に共同浴場「古総湯」を配した伝統の街並み「湯の曲輪（ゆのがわ）」。明治時代の総湯を復元したステンドグラス輝く古総湯での入浴体験。北大路魯山人が逗留した「いろは草庵」で芸術に触れる。",
    "spots": "山代温泉古総湯・総湯、魯山人寓居跡いろは草庵、九谷焼窯跡展示館、服部神社",
    "access": "加賀温泉駅より車・バスで約10〜15分。",
    "tip": "山代温泉古総湯はシャンプーや石鹸を使わず、源泉かけ流しの湯船と九谷焼タイルの壁画を純粋に楽しむ体験型温泉です。"
  },
  {
    "key": "kaga_kanogani_gourmet",
    "title": "3. 加賀美食ステイ（冬の加能ガニ・香箱ガニと九谷焼・山中漆器の器）",
    "timing": "冬期（11月6日解禁の加能ガニ・香箱ガニシーズン）",
    "desc": "石川県が誇るブランドズワイガニ「加能ガニ」と、内子・外子が濃厚な雌ガニ「香箱ガニ」。高級魚のどぐろの塩焼きや、華やかな九谷焼・山中漆器の器に盛り付けられた加賀懐石を個室で堪能。",
    "spots": "片山津温泉（柴山潟・浮御堂・中谷宇吉郎雪の科学館）、月うさぎの里、ゆのくにの森（伝統工芸村）",
    "access": "加賀温泉駅より各エリアへアクセス。",
    "tip": "「ゆのくにの森」では築数百年の古民家で九谷焼の絵付けや金箔貼り、山中漆器の蒔絵体験が楽しめます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【石川・加賀温泉郷】山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "石川・加賀温泉郷（山中温泉・山代温泉・片山津温泉・粟津温泉）エリア完全特化！鶴仙渓のあやとりはしと川床、魯山人寓居跡いろは草庵、九谷焼・山中漆器体験、冬の加能ガニ・香箱ガニ会席と老舗名門旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/ishikawa-kaga-onsen-valley-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【石川・加賀温泉郷】山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/ishikawa-kaga-onsen-valley-stay/" }
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
            KAGA YAMANAKA YAMASHIRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「石川・加賀温泉郷」山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            芭蕉が愛した山中温泉と、魯山人が逗留した山代温泉。鶴仙渓のせせらぎを聞きながらいただく川床スイーツと、紅殻格子の温泉街。名門旅館の庭園露天風呂で温まり、北陸の冬の味覚・加能ガニに酔いしれる旅。
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
              📊 石川・加賀温泉郷：山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「石川・加賀温泉郷：山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 山中温泉　吉祥やまなか</td>
                <td className="p-3 text-stone-600">石川県加賀市山中温泉東町1-ホ14-3</td>
                <td className="p-3 text-stone-600">加賀温泉駅周辺</td>
                <td className="p-3 text-stone-600">有（無料）２０台　※正面玄関前にお越しください。スタッフがご案内いたします。</td>
                <td className="p-3 font-bold text-amber-600">★4.74（1683件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67124%2F67124.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 山中温泉　かがり吉祥亭</td>
                <td className="p-3 text-stone-600">石川県加賀市山中温泉こおろぎ町ニ1-1</td>
                <td className="p-3 text-stone-600">加賀温泉駅周辺</td>
                <td className="p-3 text-stone-600">有（無料）３０台  ※正面玄関へお越しください。スタッフが駐車場へご案内いたします。</td>
                <td className="p-3 font-bold text-amber-600">★4.63（1925件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68251%2F68251.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 山中温泉　厨八十八</td>
                <td className="p-3 text-stone-600">石川県加賀市山中温泉菅谷町ロ62</td>
                <td className="p-3 text-stone-600">加賀温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　３５台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.55（220件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68544%2F68544.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 温泉めい想倶楽部　富士屋旅館</td>
                <td className="p-3 text-stone-600">石川県加賀市山代温泉桔梗ヶ丘2-121-3</td>
                <td className="p-3 text-stone-600">加賀温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.99（993件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,040〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5174%2F5174.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 山代温泉　料理自慢の宿　ホテルききょう</td>
                <td className="p-3 text-stone-600">石川県加賀市山代温泉16-162-5</td>
                <td className="p-3 text-stone-600">加賀温泉駅周辺</td>
                <td className="p-3 text-stone-600">【有り】　50台  先着順/ 駐車料金　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.65（354件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7955%2F7955.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 山中温泉　白鷺湯たわらや</td>
                <td className="p-3 text-stone-600">石川県加賀市山中温泉東町２丁目ヘ-1</td>
                <td className="p-3 text-stone-600">加賀温泉駅周辺</td>
                <td className="p-3 text-stone-600">８０台分有り（無料）　※スタッフが場所をご案内しますので、正面玄関まで車をお寄せくださいませ。</td>
                <td className="p-3 font-bold text-amber-600">★4.55（1008件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40312%2F40312.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山中温泉　吉祥やまなか</h3>
                  <span className="text-xs text-stone-400 ml-2">（やまなかおんせん　きっしょうやまなか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124_gen.jpg" alt="山中温泉　吉祥やまなか 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>清流と名湯、美食に包まれるラグジュアリー宿。山中温泉の文化に触れ、心ほどける静寂の滞在。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県加賀市山中温泉東町1-ホ14-3 ／ 最寄り駅：加賀温泉 ／ 交通案内：加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより14分。金沢・福井へは車で1時間</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有（無料）２０台　※正面玄関前にお越しください。スタッフがご案内いたします。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.77 ／ 立地 ★4.51 ／ 部屋 ★4.54 ／ 設備 ★4.61 ／ 風呂 ★4.67 ／ 食事 ★4.79</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「パンケーキとカクテル、食事に大満足!2年ぶり2回目の利用です。パンケーキを楽しみにして来ました。また前回、タイミングが合わず飲めなかったカクテルも飲むことが出来ました。夜の食事も沢山あり、どれ…　2026-10-10 21:27:46投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山中温泉　かがり吉祥亭</h3>
                  <span className="text-xs text-stone-400 ml-2">（やまなかおんせん　かがりきっしょうてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/68251/68251_j.jpg" alt="山中温泉　かがり吉祥亭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>≪全室リバービュー・夕食時飲み放題≫渓流沿いの露天風呂と旬の加賀料理を堪能。こおろぎ橋・ゆげ街道すぐ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県加賀市山中温泉こおろぎ町ニ1-1 ／ 最寄り駅：加賀温泉 ／ 交通案内：加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより16分。金沢・福井へは車で1時間</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有（無料）３０台  ※正面玄関へお越しください。スタッフが駐車場へご案内いたします。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.67 ／ 立地 ★4.56 ／ 部屋 ★4.5 ／ 設備 ★4.42 ／ 風呂 ★4.6 ／ 食事 ★4.7</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事も温泉も大満足、また利用したいお食事がとても美味しく、お風呂も2回入りました。また利用させていただきたいです!クチコミの詳細はこちらから　https://review.travel.r…　2026-10-10 23:07:13投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山中温泉　厨八十八</h3>
                  <span className="text-xs text-stone-400 ml-2">（やまなかおんせん　くりややそはち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/68544/68544_o.jpg" alt="山中温泉　厨八十八 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>温泉宿は日常から離れ、癒され、疲れをとり、鋭気を養うところ。ゆっくりと贅沢な時間をお楽しみください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県加賀市山中温泉菅谷町ロ62 ／ 最寄り駅：加賀温泉 ／ 交通案内：加賀温泉駅より車で約20分（事前予約制の送迎がございます。時間など詳細よくある質問をご確認ください）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３５台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「畳敷きの館内と温泉に癒やされる心地よい時間滞在中ゆったりと過ごすことができました。館内はすべて畳敷きで、良い香りが漂い心地よかったです。大浴場も広々としており、温泉に癒やされました。スタッフの皆様…　2026-08-12 13:36:57投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">温泉めい想倶楽部　富士屋旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（やましろおんせん　おんせんめいそうくらぶ　ふじや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,040〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5174/5174_ro.jpg" alt="温泉めい想倶楽部　富士屋旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【料理高評価】ライブラリ・ギャラリー・無料卓球・など嬉しいがいっぱい♪◆楽天トラベルアワード受賞の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県加賀市山代温泉桔梗ヶ丘2-121-3 ／ 最寄り駅：加賀温泉 ／ 交通案内：【ＪＲ】北陸本線加賀温泉駅より送迎有（１4：３０～１８：００）要事前予約／【車】北陸道加賀IC又は片山津ICより約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.09 ／ 立地 ★3.81 ／ 部屋 ★3.96 ／ 設備 ★3.73 ／ 風呂 ★3.97 ／ 食事 ★4.26</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「サービスは満足だが準備不足が目立ち残念家族5人で宿泊しました。子供2人分はプラン通り無料でしたが、残り1人分は大人の半分(約1万)の追加料金が現地で支払い必要でした。楽天トラベルでは対応できない機…　2026-09-28 13:17:17投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山代温泉　料理自慢の宿　ホテルききょう</h3>
                  <span className="text-xs text-stone-400 ml-2">（やましろおんせん　りょうりじまんのやど　ほてるききょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7955/7955_war.jpg" alt="山代温泉　料理自慢の宿　ホテルききょう 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>18部屋の料理自慢の宿　新しくなった「くろ」と「しろ」を基調とした天然温泉が心と体を癒します</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県加賀市山代温泉16-162-5 ／ 最寄り駅：加賀温泉 ／ 交通案内：◆JR加賀温泉駅より車で10分◆JR金沢駅より車で55分◆小松空港より車で25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【有り】　50台  先着順/ 駐車料金　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.54 ／ 立地 ★4.29 ／ 部屋 ★4.62 ／ 設備 ★4.53 ／ 風呂 ★4.57 ／ 食事 ★4.74</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「露天風呂と北陸の食材を満喫、また利用したい部屋の露天風呂が最高でした。大人2人でもゆったり入れました。お湯の温度もちょうど良く、しっとりした泉質で湯上がりはポカポカでした。食事も北陸の食材をし…　2026-09-10 19:33:43投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山中温泉　白鷺湯たわらや</h3>
                  <span className="text-xs text-stone-400 ml-2">（やまなかおんせん　しらさぎゆ　たわらや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40312/40312_ya.jpg" alt="山中温泉　白鷺湯たわらや 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【2023年4月・露天風呂付特別室OPEN】創業800年/老舗/渓流露天風呂/蟹/のどぐろ/能登牛</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県加賀市山中温泉東町２丁目ヘ-1 ／ 最寄り駅：加賀温泉 ／ 交通案内：ＪＲ加賀温泉駅からバスで山中温泉バスターミナル２５分。さらに徒歩３分。（無料送迎有。要予約１４：００～１８：００）。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>８０台分有り（無料）　※スタッフが場所をご案内しますので、正面玄関まで車をお寄せくださいませ。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.59 ／ 立地 ★4.42 ／ 部屋 ★4.37 ／ 設備 ★4.34 ／ 風呂 ★4.55 ／ 食事 ★4.62</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料理の質とサウナの動線が素晴らしい他の方もコメントがありますが、料理も一品一品非常凝っており料理長の自信がお品書きに表れていると思いますした。ただ会席料理でお酒を飲む者にとって、最後ごはんのタイミ…　2026-10-10 14:10:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！石川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、石川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">兼六園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水戸偕楽園・岡山後楽園と並ぶ日本三名園の一つ。四季折々の庭園美が見事で、冬には雪の重みから枝を守る「雪吊り」が金沢の冬の風物詩として知られています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金沢21世紀美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「まちに開かれた公園のような美術館」をコンセプトとした現代アートの殿堂。レアンドロ・エルリッヒの「スイミング・プール」など体感型アートが世界的人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">ひがし茶屋街</h3>
                <p className="text-xs text-stone-600 leading-relaxed">キムスコ（細い格子）と呼ばれる出格子がある美しい木造茶屋建築が並ぶ重要伝統的建造物群保存地区。金箔体験やカフェ巡りを着物姿で楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">白米千枚田（しろよねせんまいだ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本海に面した急斜面に1,004枚の小さな田んぼが重なり合う棚田の絶景。黄金色に輝く稲穂やイルミネーションイベント「あぜのきらめき」が幻想的です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 石川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 石川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="ishikawa-kaga-onsen-valley-stay" />
</div>
  );
}
