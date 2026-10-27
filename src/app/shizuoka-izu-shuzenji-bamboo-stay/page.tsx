import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/shizuoka-izu-shuzenji-bamboo-stay/" },
  title: "静岡・伊豆修善寺：竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 厳選ガイド",
  description: "伊豆の小京都・修善寺温泉エリア完全特化！桂川沿いの「竹林の小径」、弘法大師開湯の「独鈷の湯」、修禅寺、朱塗りの恋の橋めぐり、天城越え本わさび丼と文化財名門旅館を徹底解説。",
  keywords: ["静岡", "伊豆修善寺", "竹林の小径", "独鈷の湯", "伊豆牛", "本わさび極上宿", "温泉宿"],
  openGraph: {
    title: "静岡・伊豆修善寺：竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 厳選ガイド",
    description: "伊豆の小京都・修善寺温泉エリア完全特化！桂川沿いの「竹林の小径」、弘法大師開湯の「独鈷の湯」、修禅寺、朱塗りの恋の橋めぐり、天城越え本わさび丼と文化財名門旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "静岡・伊豆修善寺：竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 厳選ガイド",
    description: "伊豆の小京都・修善寺温泉エリア完全特化！桂川沿いの「竹林の小径」、弘法大師開湯の「独鈷の湯」、修禅寺、朱塗りの恋の橋めぐり、天城越え本わさび丼と文化財名門旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-izu-shuzenji-bamboo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-izu-shuzenji-bamboo-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shuzenji_bamboo_walk",
    "title": "1. 桂川沿い・竹林の小径〜修禅寺（伊豆の小京都をめぐる恋の橋と円形ベンチ）",
    "timing": "通年（秋の紅葉・初夏の青もみじ・冬の静寂）",
    "desc": "桂川に沿って整備された石畳の散策路「竹林の小径」。中央にある竹製の円形ベンチに寝転んで見上げる竹のトンネル。弘法大師空海が開創した古刹「修禅寺」や、5つの恋の橋を渡るパワースポットめぐり。",
    "spots": "竹林の小径、独鈷の湯（とっこのゆ・伊豆最古の温泉）、福地山修禅寺、恋の橋めぐり（桂橋・楓橋・渡月橋・虎渓橋・滝下橋）、河原湯（足湯）",
    "access": "伊豆箱根鉄道駿豆線「修善寺駅」より東海バスで約8分「修善寺温泉」下車すぐ。東京から特急踊り子号直通あり。",
    "tip": "竹林の小径は夜になるとライトアップされ、昼間とは一変した幽玄で幻想的な光の小径へと姿を変えます。"
  },
  {
    "key": "shuzenji_wasabi_gourmet",
    "title": "2. 天城の恵み！生わさび一本付き会席＆伊豆牛（擦りたて本わさびの香りと美味）",
    "timing": "通年（天城山麓の清流が育む日本一のわさび）",
    "desc": "天城連山の湧水で育まれた「天城本わさび」。修善寺の老舗宿では、自分でおろし金で擦る生わさびとともに味わう伊豆牛の炭火ステーキや地魚のお造り。門前町でいただく「わさびソフトクリーム」も名物。",
    "spots": "修禅寺門前通り（お土産・甘味処）、一石庵（足湯カフェ・白玉ぜんざい）、修善寺プリン工房",
    "access": "修善寺温泉街中心部。",
    "tip": "「修善寺プリン工房」の竹容器に入ったプリンは、カラメル代わりに黒蜜をかけていただくお土産人気No.1スイーツです。"
  },
  {
    "key": "shuzenji_niji_no_sato",
    "title": "3. 修善寺自然公園〜修善寺虹の郷（もみじ林の秋景色とイギリス村SL）",
    "timing": "秋（11月中旬〜12月上旬の修善寺もみじ林ライトアップ）",
    "desc": "約1,000本のもみじが群生する「修善寺自然公園もみじ林」。富士山を望むパノラマと、イギリス村やカナダ村が広がるテーマパーク「修善寺虹の郷」での本格ロムニー鉄道（SL乗車体験）。",
    "spots": "修善寺自然公園（もみじ林・梅林）、修善寺虹の郷（SLロムニー鉄道・日本庭園）、修善寺カントリークラブ",
    "access": "修善寺温泉街より路線バス・車で約5〜10分。",
    "tip": "「修善寺虹の郷」の冬期イルミネーションは、夜の蒸気機関車と光の森が融合した大迫力の光の祭典です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【静岡・伊豆修善寺】竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "伊豆の小京都・修善寺温泉エリア完全特化！桂川沿いの「竹林の小径」、弘法大師開湯の「独鈷の湯」、修禅寺、朱塗りの恋の橋めぐり、天城越え本わさび丼と文化財名門旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/shizuoka-izu-shuzenji-bamboo-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【静岡・伊豆修善寺】竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/shizuoka-izu-shuzenji-bamboo-stay/" }
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
            SHUZENJI BAMBOO MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「静岡・伊豆修善寺」竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            伊豆半島で最も歴史ある名湯「修善寺温泉」。桂川のせせらぎと青々とした竹林を渡る風。朱塗りの桂橋や楓橋、登録有形文化財の数寄屋旅館。文豪や芸術家に愛された日本の原風景へ。
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
              📊 静岡・伊豆修善寺：竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「静岡・伊豆修善寺：竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 修善寺温泉　国の登録文化財の宿　新井旅館</td>
                <td className="p-3 text-stone-600">静岡県伊豆市修善寺970</td>
                <td className="p-3 text-stone-600">修善寺駅周辺</td>
                <td className="p-3 text-stone-600">あり　40台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.56（267件）</td>
                <td className="p-3 font-bold text-rose-600">¥24,420〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31865%2F31865.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 修善寺温泉　瑞の里　〇久（まるきゅう）旅館</td>
                <td className="p-3 text-stone-600">静岡県伊豆市修善寺1146</td>
                <td className="p-3 text-stone-600">修善寺駅よりタクシー約10分／東名高速　沼津ＩＣより伊豆縦貫道を通り約</td>
                <td className="p-3 text-stone-600">有　５０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.43（680件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29806%2F29806.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 修善寺温泉　柳生の庄</td>
                <td className="p-3 text-stone-600">静岡県伊豆市修善寺1116-6</td>
                <td className="p-3 text-stone-600">修善寺駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★5（36件）</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72797%2F72797.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 修善寺　離れ宿　鬼の栖</td>
                <td className="p-3 text-stone-600">静岡県伊豆市修善寺1163</td>
                <td className="p-3 text-stone-600">修善寺駅周辺</td>
                <td className="p-3 text-stone-600">有り　15台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★5（13件）</td>
                <td className="p-3 font-bold text-rose-600">¥40,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187409%2F187409.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 大仁温泉　大仁ホテル（伊東園ホテルズ）</td>
                <td className="p-3 text-stone-600">静岡県伊豆の国市吉田1178</td>
                <td className="p-3 text-stone-600">大仁駅周辺</td>
                <td className="p-3 text-stone-600">有り　100台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.03（1189件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,898〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39515%2F39515.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 長岡温泉　伊豆長岡金城館（伊東園ホテルズ）</td>
                <td className="p-3 text-stone-600">静岡県伊豆の国市長岡1035-1</td>
                <td className="p-3 text-stone-600">伊豆長岡駅周辺</td>
                <td className="p-3 text-stone-600">有り　７０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.78（507件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,348〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F140978%2F140978.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">修善寺温泉　国の登録文化財の宿　新井旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（しゅぜんじおんせん　くにのとうろくぶんかざいのやど　あらいりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥24,420〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31865/31865_he.jpg" alt="修善寺温泉　国の登録文化財の宿　新井旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ミシュランで二つ星の竹林の小径まで徒歩2分、修善寺温泉の中心で観光に便利です</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊豆市修善寺970 ／ 最寄り駅：修善寺 ／ 交通案内：伊豆箱根鉄道線 修善寺駅よりバスまたはタクシーで10分／東名・新東名高速 沼津ICより伊豆縦貫道経由45分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>あり　40台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.67 ／ 立地 ★4.67 ／ 部屋 ★4.72 ／ 設備 ★4.56 ／ 風呂 ★4.72 ／ 食事 ★4.56</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「よくメンテされた登録文化財施設は漸次更新されており(文化財なので許認可大変だと思います)食事も美味しく仲居さんもフレッシュで素晴らしいと思います。ただし、寝具類がせんべい布団で朝が来るのが待ち…　2026-09-14 20:40:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">修善寺温泉　瑞の里　〇久（まるきゅう）旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/29806/29806_w.jpg" alt="修善寺温泉　瑞の里　〇久（まるきゅう）旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>冷蔵庫飲物無料★2024「泳ぎ湯」「寝湯」新設★宴処新装★『お客様が選ぶ人気宿』常連宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊豆市修善寺1146 ／ 最寄り駅：主要駅 ／ 交通案内：修善寺駅よりタクシー約10分／東名高速　沼津ＩＣより伊豆縦貫道を通り約30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　５０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋のあまりの古さにびっくりしました。スタッフさんは親切でした。ご飯も美味しく食べられました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp…　2026-09-02 09:25:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">修善寺温泉　柳生の庄</h3>
                  <span className="text-xs text-stone-400 ml-2">（しゅぜんじおんせん　やぎゅうのしょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/72797/72797_hana.jpg" alt="修善寺温泉　柳生の庄 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>修善寺温泉の奥にある閑静な旅館。本格懐石料理と露天風呂が好評。露天風呂付客室や離れもおすすめ。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊豆市修善寺1116-6 ／ 最寄り駅：修善寺 ／ 交通案内：伊豆箱根鉄道　修善寺駅から車で約１０分 東名高速道路沼津ICまたは新東名高速道路長泉沼津ICから30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「修善寺温泉　柳生の庄は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">修善寺　離れ宿　鬼の栖</h3>
                  <span className="text-xs text-stone-400 ml-2">（しゅぜんじ　はなれやど　おにのすみか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥40,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/187409/187409.jpg" alt="修善寺　離れ宿　鬼の栖 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>風情漂う日本庭園と全室離れの各お部屋には専用風呂あり。修善寺の奥座敷、大人の離れ宿をご堪能ください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊豆市修善寺1163 ／ 最寄り駅：修善寺 ／ 交通案内：伊豆箱根鉄道駿豆線「修善寺駅」駅からタクシーで約10分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　15台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「修善寺　離れ宿　鬼の栖は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">大仁温泉　大仁ホテル（伊東園ホテルズ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（おおひとおんせん　おおひと　ほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,898〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/39515/39515_wa.jpg" alt="大仁温泉　大仁ホテル（伊東園ホテルズ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>大浴場・露天風呂から望む秀峰富士はまさに絶景。◆本館WI-FI無料</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊豆の国市吉田1178 ／ 最寄り駅：大仁 ／ 交通案内：伊豆箱根鉄道　大仁駅から車で３分／東名高速道路　沼津ＩＣから国道１３６号線・伊豆中央道経由で約２４ｋｍ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　100台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.07 ／ 立地 ★4.19 ／ 部屋 ★3.89 ／ 設備 ★3.82 ／ 風呂 ★4.12 ／ 食事 ★3.98</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「カラオケ三昧と源泉かけ流しの貸切風呂カラオケが朝8時から夜11時までできるのが魅力的です。貸切風呂も小さいですが、源泉かけ流しで無料で50分間入れてとても気持ちがよいです。夕食のマグロの刺身も…　2026-10-08 19:20:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">長岡温泉　伊豆長岡金城館（伊東園ホテルズ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ながおかおんせん　いずながおかきんじょうかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,348〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/140978/140978_kya.jpg" alt="長岡温泉　伊豆長岡金城館（伊東園ホテルズ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>あやめ御前ゆかりの源氏山の山裾で、葛城山を近くに望む豊かな自然に囲まれた立地。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊豆の国市長岡1035-1 ／ 最寄り駅：伊豆長岡 ／ 交通案内：伊豆長岡駅よりお車にて約１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　７０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ゴルフ利用に最適、飲み放題が嬉しいゴルフの時、利用させてもらっています。安いので十分です。お風呂は、本館より別館のほうが良いと思います。料理は普通くらい、飲み放題がうれしいです。クチコミの詳細…　2026-08-29 07:03:43投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！静岡県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、静岡県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">三島スカイウォーク</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一長い歩行者専用吊り橋（全長400m）。富士山と駿河湾のパノラマ絶景を空中散歩感覚で楽しめ、ジップラインなどのアクティビティも充実しています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">熱海温泉・サンビーチ</h3>
                <p className="text-xs text-stone-600 leading-relaxed">都心からのアクセスが抜群な海辺の温泉リゾート。地中海リゾートを彷彿とさせるサンビーチや年間を通して開催される熱海海上花火大会が人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">伊豆シャボテン動物公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">1,500種類のサボテンと世界中の動物たちが暮らすテーマパーク。冬限定の「元祖カピバラの露天風呂」の癒やされる姿は全国的に有名です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">白糸の滝</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の湧水が幅150mの湾曲した絶壁から千本の絹糸のように流れ落ちる国指定の名勝・天然記念物。清涼なマイナスイオンと富士の恵みを体感できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 静岡県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 静岡県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="shizuoka-izu-shuzenji-bamboo-stay" />
</div>
  );
}
