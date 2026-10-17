import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/yamagata-tsuruoka-hagurosan-dewasanzan-stay/" },
  title: "山形・鶴岡＆羽黒山・出羽三山：国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "生まれ変わりの旅・出羽三山（羽黒山・月山・湯殿山）＆鶴岡エリア完全特化！国宝「羽黒山五重塔」、樹齢1000年爺杉と2446段石段杉並木、羽黒修験の伝統「精進料理」、湯野浜温泉、名物「庄内浜海の幸宿」を徹底解説。",
  keywords: ["山形", "鶴岡", "羽黒山", "出羽三山", "国宝羽黒山五重塔", "杉並木", "精進料理"],
  openGraph: {
    title: "山形・鶴岡＆羽黒山・出羽三山：国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "生まれ変わりの旅・出羽三山（羽黒山・月山・湯殿山）＆鶴岡エリア完全特化！国宝「羽黒山五重塔」、樹齢1000年爺杉と2446段石段杉並木、羽黒修験の伝統「精進料理」、湯野浜温泉、名物「庄内浜海の幸宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "山形・鶴岡＆羽黒山・出羽三山：国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "生まれ変わりの旅・出羽三山（羽黒山・月山・湯殿山）＆鶴岡エリア完全特化！国宝「羽黒山五重塔」、樹齢1000年爺杉と2446段石段杉並木、羽黒修験の伝統「精進料理」、湯野浜温泉、名物「庄内浜海の幸宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamagata-tsuruoka-hagurosan-dewasanzan-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamagata-tsuruoka-hagurosan-dewasanzan-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hagurosan_shukubo_onsen_stay",
    "title": "1. 羽黒山〜国宝五重塔・爺杉・2446段石段（ミシュラン三ツ星の巨樹回廊）",
    "timing": "通年（新緑の5〜6月・秋の紅葉・冬の雪中参拝）",
    "desc": "約1400年の歴史を持つ修験道の霊場。随神門をくぐると続く約1.7km・2446段の石段と樹齢300〜500年の杉並木（国の特別天然記念物）。東北最古の「国宝 羽黒山五重塔」。樹齢1000年の巨木「爺杉」。山頂の三神合祭殿。",
    "spots": "国宝 羽黒山五重塔、羽黒山杉並木・石段、爺杉、三神合祭殿（国の重要文化財）、手向（とうげ）宿坊街",
    "access": "JR鶴岡駅より庄内交通バス「羽黒山頂行」で約40〜50分。庄内空港より車約40分。",
    "tip": "羽黒山の石段には盃やひょうたんなど33個の彫刻が彫られており、すべて見つけると願いが叶うと言われています。"
  },
  {
    "key": "tsuruoka_gastronomy_stay",
    "title": "2. 日本初ユネスコ食文化創造都市・鶴岡〜致道館・加茂水族館（クラゲドリーム館）",
    "timing": "通年（世界一のクラゲ展示・庄内映画村）",
    "desc": "日本で初めてユネスコ食文化創造都市に認定された鶴岡市。約80種類のクラゲを展示する「加茂水族館（クラゲドリーム館）」。庄内藩主酒井家の旧致道館。鶴岡カトリック教会天主堂。日本海の海岸美・由良海岸。",
    "spots": "加茂水族館（クラゲドリームシアター）、庄内藩校 致道館、鶴岡カトリック教会、由良海岸（白山島）",
    "access": "JR鶴岡駅周辺・加茂港。",
    "tip": "加茂水族館の直径5mの円形水槽「クラゲドリームシアター」は約1万匹のミズクラゲが浮遊し、幻想的な癒やしのフォトスポットです。"
  },
  {
    "key": "haguro_shojin_seafood_stay",
    "title": "3. 出羽三山「精進料理」＆庄内浜の海の幸（山伏の知恵と日本海の旬魚）",
    "timing": "通年（春の山菜・夏の岩ガキ・秋の庄内柿・冬の寒鱈汁）",
    "desc": "羽黒山伏の修行食から生まれた伝統の「精進料理」。吉野葛と炒り胡麻を丁寧に練り上げた「ごま豆腐」や月山筍、山菜料理。庄内浜の冷たい海で獲れるズワイガニ、のどぐろ、冬の名物「寒鱈汁（どんがら汁）」。",
    "spots": "斎館（羽黒山頂の精進料理食事処）、手向宿坊の郷土料理、湯野浜温泉の割烹旅館",
    "access": "鶴岡市・湯野浜温泉・羽黒町。",
    "tip": "羽黒山頂の「斎館」では、月山や羽黒山の豊かな伏流水と野山で採れた山菜・キノコを使った本格的な精進料理を完全予約制でいただけます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【山形・鶴岡＆羽黒山・出羽三山】国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "生まれ変わりの旅・出羽三山（羽黒山・月山・湯殿山）＆鶴岡エリア完全特化！国宝「羽黒山五重塔」、樹齢1000年爺杉と2446段石段杉並木、羽黒修験の伝統「精進料理」、湯野浜温泉、名物「庄内浜海の幸宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/yamagata-tsuruoka-hagurosan-dewasanzan-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【山形・鶴岡＆羽黒山・出羽三山】国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/yamagata-tsuruoka-hagurosan-dewasanzan-stay/" }
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
            DEWA SANZAN & HAGURO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「山形・鶴岡＆羽黒山・出羽三山」国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            現世の幸せを祈る「羽黒山」、過去を清める「月山」、未来の生まれ変わりを願う「湯殿山」の出羽三山。樹齢数百年の杉並木と国宝五重塔。修験僧が受け継いできた精進料理のごま豆腐や山菜。日本海の絶景夕陽を望む湯野浜温泉と庄内美食の旅。
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
              📊 山形・鶴岡＆羽黒山・出羽三山：国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「山形・鶴岡＆羽黒山・出羽三山：国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 羽黒山　三光院</td>
                <td className="p-3 text-stone-600">山形県鶴岡市羽黒町手向92</td>
                <td className="p-3 text-stone-600">鶴岡駅周辺</td>
                <td className="p-3 text-stone-600">有り　１５台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.43（93件）</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44069%2F44069.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 旅館　羽黒館</td>
                <td className="p-3 text-stone-600">山形県鶴岡市羽黒町手向字手向111</td>
                <td className="p-3 text-stone-600">鶴岡駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.4（59件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,930〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14581%2F14581.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 大進坊</td>
                <td className="p-3 text-stone-600">山形県鶴岡市羽黒町手向95</td>
                <td className="p-3 text-stone-600">鶴岡駅周辺</td>
                <td className="p-3 text-stone-600">屋外駐車場30台完備　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.22（41件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F135369%2F135369.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 湯田川温泉　九兵衛旅館</td>
                <td className="p-3 text-stone-600">山形県鶴岡市湯田川乙19</td>
                <td className="p-3 text-stone-600">鶴岡駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.82（386件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,020〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12536%2F12536.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 湯田川温泉　ますや旅館</td>
                <td className="p-3 text-stone-600">山形県</td>
                <td className="p-3 text-stone-600">ＪＲ鶴岡駅から庄内交通バス乗車「湯田川温泉」下車徒歩３分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.59（60件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,260〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128586%2F128586.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 湯田川温泉　つかさや旅館</td>
                <td className="p-3 text-stone-600">山形県</td>
                <td className="p-3 text-stone-600">ＪＲ　鶴岡駅よりタクシーにて２０分／バスにて３０分　庄内空港より車30</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.83（104件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,350〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79497%2F79497.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">羽黒山　三光院</h3>
                  <span className="text-xs text-stone-400 ml-2">（はぐろさん　さんこういん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/44069/44069_ko.jpg" alt="羽黒山　三光院 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>羽黒山の玄関「隋神門」まで徒歩約7分の宿坊。東北の山岳信仰の中心地で自然と伝統をじっくり体験</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山形県鶴岡市羽黒町手向92 ／ 最寄り駅：鶴岡 ／ 交通案内：庄内空港より車で約35分／JR羽越本線鶴岡駅下車、車で約25分・バスで約40分／山形自動車道・庄内あさひICより約30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１５台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「羽黒山　三光院は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">旅館　羽黒館</h3>
                  <span className="text-xs text-stone-400 ml-2">（はぐろかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,930〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14581/14581_wy.jpg" alt="旅館　羽黒館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>羽黒の歴史を感じ、伝統息づく料理に舌鼓。国宝「羽黒山五重塔」の入り口までは、当館より徒歩約10分。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山形県鶴岡市羽黒町手向字手向111 ／ 最寄り駅：鶴岡 ／ 交通案内：庄内空港より車３５分／鶴岡駅より車２５分バス・４０分／山形道朝日ＩＣより２０分／ＪＲ羽越本線鶴岡駅</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「旅館　羽黒館は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">大進坊</h3>
                  <span className="text-xs text-stone-400 ml-2">（だいしんぼう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/135369/135369_hi.jpg" alt="大進坊 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>三百年の歴史ある宿坊。地元の素材に拘った手作り精進料理、ごま豆腐・栃餅が好評。希望者は祈祷体験可能。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山形県鶴岡市羽黒町手向95 ／ 最寄り駅：鶴岡 ／ 交通案内：羽越線鶴岡駅より車で20分／庄内空港より車で30分／山形自動車道 庄内あさひICより車で40分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>屋外駐車場30台完備　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大進坊は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯田川温泉　九兵衛旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆだがわおんせん　くへえりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,020〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/12536/12536_ky.jpg" alt="湯田川温泉　九兵衛旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>13室の小さな湯宿♪珠玉の手づくりできたて料理を朝夕個室で堪能♪温泉は源泉かけ流しで露天、無料貸切♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山形県鶴岡市湯田川乙19 ／ 最寄り駅：鶴岡 ／ 交通案内：ＪＲ羽越線鶴岡駅よりバス25分／庄内空港よりタクシー30分／山形自動車道鶴岡ＩＣより15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.82 ／ 立地 ★4.34 ／ 部屋 ★4.75 ／ 設備 ★4.64 ／ 風呂 ★4.71 ／ 食事 ★4.89</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「心のこもった食事に大満足夕食、朝食共に心のこもった品々に感激!大変おいしかった。夕食を8分目のプランにし満腹になったけれど次回は通常のプランで全てを食べたいと思った。季節を変えて食事を堪能しに行き…　2026-10-09 20:40:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯田川温泉　ますや旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,260〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/128586/128586.jpg" alt="湯田川温泉　ますや旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ鶴岡駅から庄内交通バス乗車「湯田川温泉」下車徒歩３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「2時から翌日11時までゆっくり満喫!2時から翌日11時までゆっくり出来て最高です。直近、宿側の都合で姉妹旅館の九兵衛別館珠玉やさんに変更となりましたが立地的に九兵衛さん、ますやさんの間にあり全…　2026-09-07 23:22:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯田川温泉　つかさや旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,350〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/79497/79497.jpg" alt="湯田川温泉　つかさや旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ　鶴岡駅よりタクシーにて２０分／バスにて３０分　庄内空港より車30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「絶景のロケーションとおもてなしに心から癒やされました。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山形県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山形県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">宝珠山 立石寺（山寺）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松尾芭蕉が「閑さや岩にしみ入る蝉の声」と詠んだことで名高い名刹。1015段の石段を登りきった五大堂からは、山形の大自然と里山を一望する壮大な絶景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Evening_twilight_in_Ginzan_Onsen_town_January_2022_A.jpg/1280px-Evening_twilight_in_Ginzan_Onsen_town_January_2022_A.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="銀山温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">銀山温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">銀山川の両岸に木造多層の温泉旅館が立ち並ぶ、大正ロマンあふれる温泉街。夕暮れ時にガス灯の温かな光が雪景色や大正建築を照らし出す風景は感動的です。 銀山温泉（ぎんざんおんせん）は、山形県尾花沢市（旧国出羽国、明治以降は羽前国）にある温泉である。 NHK連続テレビ小説『おしん』の舞台となったことで一躍脚光を浴び、全国的にその名を知られることになった。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg/1280px-Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="蔵王の樹氷" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">蔵王の樹氷</h3>
                <p className="text-xs text-stone-600 leading-relaxed">冬の蔵王連峰で見られる自然の芸術「アイスモンスター」。アオモリトドマツに雪と氷が吹き付けられて巨大化した樹氷群を、ロープウェイやナイターライトアップで楽しめます。 蔵王、藏王（ざ-おう） 読みとしては、「蔵王」の本来の読み、旧仮名づかい「ざう-わう(ぞう-おう)」（音読み）が連声化したもの。 修験道の神である蔵王権現のこと。日本各地にみられる「蔵王」という名称は、後述の地名を含め、その大半が蔵王権現（奈良県吉野の発祥）に由来している（蔵王権現を参照）。 上述の蔵王権現を祭っている神社（蔵王権現社、御嶽神社（御岳神社）、…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">羽黒山 三重塔</h3>
                <p className="text-xs text-stone-600 leading-relaxed">出羽三山神社への参道杉木立の中に佇む、東北最古の国宝木造塔。樹齢数百年の巨大な老杉に囲まれた静寂な空間は、強いパワースポットとして知られています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山形県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山形県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="yamagata-tsuruoka-hagurosan-dewasanzan-stay" />
</div>
  );
}
