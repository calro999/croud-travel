import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/gunma-ikaho-stairs-stay/" },
  title: "群馬・伊香保温泉：365段の石段街・黄金の湯＆水沢うどん極上宿 厳選ガイド",
  description: "群馬・伊香保温泉エリア完全特化！365段の石段街散策、茶褐色の名湯「黄金の湯（こがねのゆ）」と透明な「白銀の湯（しろがねのゆ）」、河鹿橋の紅葉、日本三大うどん「水沢うどん」と老舗名門旅館を徹底解説。",
  keywords: ["群馬", "伊香保温泉", "365段の石段街", "黄金の湯", "水沢うどん極上宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "群馬・伊香保温泉：365段の石段街・黄金の湯＆水沢うどん極上宿 厳選ガイド",
    description: "群馬・伊香保温泉エリア完全特化！365段の石段街散策、茶褐色の名湯「黄金の湯（こがねのゆ）」と透明な「白銀の湯（しろがねのゆ）」、河鹿橋の紅葉、日本三大うどん「水沢うどん」と老舗名門旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "群馬・伊香保温泉：365段の石段街・黄金の湯＆水沢うどん極上宿 厳選ガイド",
    description: "群馬・伊香保温泉エリア完全特化！365段の石段街散策、茶褐色の名湯「黄金の湯（こがねのゆ）」と透明な「白銀の湯（しろがねのゆ）」、河鹿橋の紅葉、日本三大うどん「水沢うどん」と老舗名門旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gunma-ikaho-stairs-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gunma-ikaho-stairs-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ikaho_stairs_walk",
    "title": "1. 365段の石段街（温泉まんじゅう発祥の地と射的・足湯めぐり）",
    "timing": "通年（石段の途中に流れる「湯樋」の温泉景観）",
    "desc": "400年以上の歴史を誇る伊香保のシンボル「石段街」。中央のガラス窓から流れる源泉を眺め、射的や輪投げで遊び、元祖温泉まんじゅう「勝月堂の湯乃花まんじゅう」を頬張りながら登る情緒あふれる散策。",
    "spots": "伊香保石段街（365段）、石段の湯（共同浴場）、岸権旅館前足湯「辰の湯」、勝月堂（湯乃花まんじゅう元祖）",
    "access": "JR上越線「渋川駅」より関越交通バスで約25分「伊香保温泉」下車すぐ。新宿から直行高速バスあり。",
    "tip": "勝月堂の出来立て熱々の湯乃花まんじゅうは、皮がもちもちで餡がなめらか。朝9時の開店直後が狙い目です。"
  },
  {
    "key": "ikaho_kajikabashi_view",
    "title": "2. 河鹿橋〜伊香保神社・飲泉所（朱塗りの太鼓橋と茶褐色の名湯「黄金の湯」）",
    "timing": "秋（10月下旬〜11月中旬の河鹿橋紅葉ライトアップ）",
    "desc": "石段の頂上に鎮座する伊香保神社を抜けた先にある「河鹿橋」。モミジやカエデが朱塗りの橋を包み込む群馬屈指の紅葉名所。伊香保露天風呂の開放的な湯船で、鉄分と硫酸塩を含む黄金の湯を満喫。",
    "spots": "伊香保神社、河鹿橋（紅葉ライトアップ）、伊香保温泉飲泉所、伊香保露天風呂",
    "access": "石段街最上段より遊歩道徒歩約5〜8分。",
    "tip": "伊香保露天風呂は源泉地の真横にあり、中央で湯船が「あつ湯」と「ぬる湯」に分かれているのが特徴です。"
  },
  {
    "key": "mizusawa_udon_stay",
    "title": "3. 水沢観音〜水沢うどん街道＆榛名湖（400年の伝統麺と榛名富士パノラマ）",
    "timing": "通年（榛名湖の冬期イルミネーション・ワカサギ釣り）",
    "desc": "讃岐・稲庭と並ぶ日本三大うどんの一つ「水沢うどん」。強いコシと透明感ある麺をごまダレや醤油ダレで味わう名店街。坂東三十三観音霊場の水沢寺参拝や、榛名山ロープウェイからの絶景。",
    "spots": "水澤観世音（水澤寺）、水沢うどん街道（大澤屋・清水屋）、榛名湖・榛名山（榛名富士ロープウェイ）、竹久夢二伊香保記念館",
    "access": "伊香保温泉街より路線バス・車で約10〜15分。",
    "tip": "「大澤屋」では岡本太郎の絵画や陶器を眺めながら、舞茸の天ぷらとともに極上の水沢うどんを味わえます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【群馬・伊香保温泉】365段の石段街・黄金の湯＆水沢うどん極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "群馬・伊香保温泉エリア完全特化！365段の石段街散策、茶褐色の名湯「黄金の湯（こがねのゆ）」と透明な「白銀の湯（しろがねのゆ）」、河鹿橋の紅葉、日本三大うどん「水沢うどん」と老舗名門旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/gunma-ikaho-stairs-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【群馬・伊香保温泉】365段の石段街・黄金の湯＆水沢うどん極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/gunma-ikaho-stairs-stay/" }
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
            IKAHO STAIRS MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「群馬・伊香保温泉」365段の石段街・黄金の湯＆水沢うどん極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            榛名山の中腹、標高約700mに位置する「伊香保温泉」。365段の石段を一段一段登るごとに広がるレトロな射的場や足湯。鉄分を豊富に含む茶褐色の黄金の湯に浸かり、歴史の情緒に抱かれる旅。
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
              📊 群馬・伊香保温泉：365段の石段街・黄金の湯＆水沢うどん極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「群馬・伊香保温泉：365段の石段街・黄金の湯＆水沢うどん極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保甲48</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場150台あり。旅館専用駐車場は伊香保小学校の道向かいにあり。専用駐車場から送迎いたします。</td>
                <td className="p-3 font-bold text-amber-600">★4.44（1716件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6267%2F6267.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 伊香保温泉　森秋旅館</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保60</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">有（無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.26（2256件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17741%2F17741.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 伊香保温泉　温泉宿　塚越屋七兵衛</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保175</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">有り　100台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.43（889件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,010〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7170%2F7170.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 伊香保温泉　千明仁泉亭（ちぎらじんせんてい）</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保　４５番地</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">有り　１００台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.58（566件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147464%2F147464.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 伊香保温泉　名物畳風呂と料理自慢の宿　ホテルきむら</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保557-32</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">車100台・バイクの方は屋根付き駐車場がございます。料金無料・予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.71（2118件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29387%2F29387.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 伊香保温泉　金太夫（伊東園ホテルズ）</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町19</td>
                <td className="p-3 text-stone-600">渋谷駅周辺</td>
                <td className="p-3 text-stone-600">有り　６０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.76（894件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,348〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73955%2F73955.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿</h3>
                  <span className="text-xs text-stone-400 ml-2">（きしごんりょかん　いしだんがいりんせつ　きしょうげんせん「おうごんのゆ」のやど）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267_ky.jpg" alt="岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>露天・大浴場・貸切など全てが「黄金の湯」地産地消にこだわった創作会席と絶景が自慢の老舗旅館</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保甲48 ／ 最寄り駅：渋川 ／ 交通案内：関越自動車道　渋川伊香保ＩＣから車で２０分　上越線渋川駅下車バスで３０分、タクシー１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場150台あり。旅館専用駐車場は伊香保小学校の道向かいにあり。専用駐車場から送迎いたします。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.44 ／ 立地 ★4.46 ／ 部屋 ★4.39 ／ 設備 ★4.27 ／ 風呂 ★4.49 ／ 食事 ★4.49</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「接客と料理は最高だがスリッパ紛失が残念伊香保温泉は仕事では来た事があったが、泊まった事が無かった為、今回妻と宿泊先を検討し石段沿いの岸権旅館さんにお世話になる事としました。宿は老舗旅館らしく建…　2026-10-10 17:18:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　森秋旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　もりあきりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17741/17741_rote.jpg" alt="伊香保温泉　森秋旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★名湯「黄金の湯」源泉掛け流しが自慢の宿♪ ★観光名所「石段街」まで徒歩３分♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保60 ／ 最寄り駅：渋川 ／ 交通案内：ＪＲ渋川駅下車バスで25分！新宿から高速バスで2時間半！伊香保の名物石段街から徒歩３分と好立地♪散策に抜群の好立地</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有（無料）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「石段への好立地とスタッフの温かいおもてなし伊香保温泉の石段までのアクセスが近く初めての伊香保温泉観光を満喫出来ました。お料理も美味しくて何よりスタッフの方のおもてなしは素晴らしかったです。リピ…　2026-08-21 19:19:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　温泉宿　塚越屋七兵衛</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　おんせんやど　つかごしやしちべえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,010〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7170/7170_hur.jpg" alt="伊香保温泉　温泉宿　塚越屋七兵衛 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>伊香保に語り継がれる希少泉質「黄金の湯」を、贅沢に源泉かけ流しで楽しむ至福の宿泊体験。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保175 ／ 最寄り駅：渋川 ／ 交通案内：関越自動車道 渋川・伊香保ICより車にて20分　※路線バス・高速バスをご利用の際はバス停送迎有（到着時連絡）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　100台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「リーズナブルで料理も温泉も大満足!家族4人で宿泊(子供は4歳と2歳)しました。お盆終盤の8/15(土)、宿泊当日の朝に予約しました。一泊2食付きでとてもリーズナブルな価格設定にびっくり。料理も…　2026-08-17 20:53:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　千明仁泉亭（ちぎらじんせんてい）</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　ちぎらじんせんてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147464/147464_kan1.jpg" alt="伊香保温泉　千明仁泉亭（ちぎらじんせんてい） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【立地＆風呂5つ星★】伊香保随一の湯量を誇る「黄金の湯」かけ流しをお楽しみ下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保　４５番地 ／ 最寄り駅：渋川 ／ 交通案内：伊香保石段街から徒歩1分☆渋川伊香保IC～車で約２５分♪東京方面からは新宿駅新南口より高速バス約2時間♪</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１００台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「家族全員が大満足、最高のおもてなしと温泉初めての伊香保温泉でした。私達50代夫婦と20代の息子と娘と宿泊させていただきました。建物もお部屋もお食事も温泉もスタッフのみなさんも全部最高でした。とても…　2026-08-22 10:29:58投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=147464&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　名物畳風呂と料理自慢の宿　ホテルきむら</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　きむら）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/29387/29387_furo1.jpg" alt="伊香保温泉　名物畳風呂と料理自慢の宿　ホテルきむら 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【北関東最大級の畳風呂とメガ貸切露天風呂】伊香保の綺麗な景色を一望！お料理とお風呂自慢の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保557-32 ／ 最寄り駅：渋川 ／ 交通案内：ＪＲ渋川駅→路線バス（30分）→伊香保バスターミナル下車、またはタクシー（15分）／関越自動車道・渋川伊香保ＩＣ～20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>車100台・バイクの方は屋根付き駐車場がございます。料金無料・予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.79 ／ 立地 ★3.7 ／ 部屋 ★3.64 ／ 設備 ★3.49 ／ 風呂 ★3.71 ／ 食事 ★3.86</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「愛犬と部屋食を満喫、露天風呂も最高でした15歳のトイプードルと妻と一泊しました。外観は昔ながらの旅館ですが、部屋出しの食事、部屋の広さに満足です。そして、なんと言っても、部屋にある露天風呂…　2026-10-10 20:57:54投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　金太夫（伊東園ホテルズ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　きんだゆう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,348〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/73955/73955_k.jpg" alt="伊香保温泉　金太夫（伊東園ホテルズ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>古の頃より伝わるそのお湯は、多くの文人にも愛された黄金泉</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町19 ／ 最寄り駅：渋谷 ／ 交通案内：ＪＲ　渋川駅から車で約２５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　６０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「2026年のお盆期間中に利用しました。立地・石段街のほぼ頂上に近く、ホテルから石段街は数分で着いてしまいます!伊香保には伊藤園グループがここを含めて3件ありますが、一番石段街に近い場所かと思い…　2026-08-19 07:56:08投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！群馬県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、群馬県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Yubatake_%28Kusatsu_Onsen%29.jpg/1280px-Yubatake_%28Kusatsu_Onsen%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="草津温泉（湯畑）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">草津温泉（湯畑）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三名泉の一つで自然湧出量日本一を誇る温泉街のシンボル。毎分4,000リットルの源泉が湯滝となって湧き出し、湯もみ体験や夜のライトアップも人気です。 草津温泉（くさつおんせん）は、群馬県吾妻郡草津町草津界隈（江戸時代における上野国吾妻郡草津村界隈、幕藩体制下の上州御料草津村界隈〈初期は沼田藩知行〉）に所在する温泉である。草津白根山東麓に位置する。 毎分3万2300リットル以上の自然湧出量は日本一。室町時代には万里集九が有馬温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Ikaho_Onsen_03.jpg/1280px-Ikaho_Onsen_03.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="伊香保温泉（石段街）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">伊香保温泉（石段街）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">365段の石段が続く情緒溢れる温泉街。石段の両脇には射的場や土産物店、足湯が立ち並び、温泉まんじゅう発祥の地としても知られています。 伊香保温泉（いかほおんせん）は、群馬県渋川市伊香保町にある温泉。草津温泉と並んで県を代表する名湯で、上毛かるたでは「伊香保温泉 日本の名湯」と歌われている。 「伊香保温泉」として地域団体商標に登録されている。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富岡製糸場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治政府が設立した日本初の本格的な製糸工場であり、世界文化遺産。木骨レンガ造りの巨大な繰糸所や蚕室が良好に保存されており、日本の近代化の足跡を辿れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">吹割の滝（ふきわれのたき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「東洋のナイアガラ」と称されるダイナミックな滝。巨大な岩盤が割れ目の中に河川の水が吸い込まれるように流れ落ちる迫力ある景観が魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 群馬県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 群馬県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="gunma-ikaho-stairs-stay" />
</div>
  );
}
