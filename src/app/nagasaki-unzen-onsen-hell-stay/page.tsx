import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/nagasaki-unzen-onsen-hell-stay/" },
  title: "長崎・雲仙温泉：雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 厳選ガイド",
  description: "長崎・雲仙天草国立公園エリア完全特化！もうもうと白煙が上がる「雲仙地獄」、日本最初の国立公園のクラシックホテル、濃厚な白濁硫黄泉、名物雲仙温泉レモネードと長崎和牛・島原郷土料理旅館を徹底解説。",
  keywords: ["長崎", "雲仙温泉", "雲仙地獄の湯けむり", "白濁硫黄泉", "レトロ洋館宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "長崎・雲仙温泉：雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 厳選ガイド",
    description: "長崎・雲仙天草国立公園エリア完全特化！もうもうと白煙が上がる「雲仙地獄」、日本最初の国立公園のクラシックホテル、濃厚な白濁硫黄泉、名物雲仙温泉レモネードと長崎和牛・島原郷土料理旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "長崎・雲仙温泉：雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 厳選ガイド",
    description: "長崎・雲仙天草国立公園エリア完全特化！もうもうと白煙が上がる「雲仙地獄」、日本最初の国立公園のクラシックホテル、濃厚な白濁硫黄泉、名物雲仙温泉レモネードと長崎和牛・島原郷土料理旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagasaki-unzen-onsen-hell-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagasaki-unzen-onsen-hell-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "unzen_jigoku_walk",
    "title": "1. 雲仙地獄めぐり（大叫喚地獄・お糸地獄の奇観と温泉たまご）",
    "timing": "通年（冬の霧氷・初夏のミヤマキリシマ）",
    "desc": "約30箇所もの地獄から高熱の温泉と白い噴煙が吹き上がる「雲仙地獄」。木道が整備された地獄内を散策し、地熱を直接体感できる「足蒸し」や、地獄の蒸気で蒸し上げた名物「温泉たまご」を味わう。",
    "spots": "雲仙地獄（大叫喚地獄・お糸地獄・邪見地獄）、雲仙地獄工房（温泉たまご）、雲仙温泉足湯ふれあいの湯",
    "access": "JR諫早駅より島鉄バス「雲仙行き」で約80分「雲仙」下車。長崎空港よりバス・レンタカー。",
    "tip": "「雲仙地獄工房」の温泉たまごは、食べると「1個で1年、2個で2年、3個で死ぬまで長生き」と言われる名物です。"
  },
  {
    "key": "unzen_classic_hotel",
    "title": "2. 雲仙クラシックリゾート（昭和10年創業の洋館建築美と長崎和牛フレンチ）",
    "timing": "通年（避暑地として愛されたノスタルジー）",
    "desc": "日本最初の国立公園に指定された雲仙。国の登録有形文化財「雲仙観光ホテル」に代表されるスイス・シャレースタイルのクラシックホテル。重厚な木造建築、ステンドグラス、本格フレンチディナーを堪能。",
    "spots": "雲仙観光ホテル（バー・撞球室）、雲仙ビードロ美術館、古湯・新湯・小地獄温泉街",
    "access": "雲仙温泉街中心部。",
    "tip": "雲仙ビードロ美術館では19世紀のボヘミアンガラスやアンティークオルゴールの音色を楽しめます。"
  },
  {
    "key": "unzen_nita_pass",
    "title": "3. 仁田峠〜妙見岳・平成新山（ロープウェイから望む有明海と活火山の雄姿）",
    "timing": "春（5月のミヤマキリシマ）・秋（10月下旬の紅葉）・冬（霧氷）",
    "desc": "標高1,080mの仁田峠から雲仙ロープウェイで妙見岳山頂へ。平成の噴火で誕生した日本で最も新しい山「平成新山（標高1,483m）」や、有明海・天草諸島を一望する360度の大パノラマ。",
    "spots": "仁田峠循環道路、雲仙ロープウェイ、妙見岳展望台、平成新山（普賢岳）",
    "access": "雲仙温泉街より車・乗合タクシーで約20分「仁田峠」へ。",
    "tip": "冬の仁田峠は木々に氷が結晶化する「霧氷（むひょう）」の銀世界が広がり、幻想的な白銀絶景を楽しめます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【長崎・雲仙温泉】雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "長崎・雲仙天草国立公園エリア完全特化！もうもうと白煙が上がる「雲仙地獄」、日本最初の国立公園のクラシックホテル、濃厚な白濁硫黄泉、名物雲仙温泉レモネードと長崎和牛・島原郷土料理旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/nagasaki-unzen-onsen-hell-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【長崎・雲仙温泉】雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/nagasaki-unzen-onsen-hell-stay/" }
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
            UNZEN JIGOKU MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「長崎・雲仙温泉」雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高700mの高原に広がるキリシタン哀史の地「雲仙地獄」。ゴウゴウと噴き出す白煙と硫黄の香り。明治時代に外国人の避暑地として開かれたクラシックな洋館リゾートと、極上の白濁湯に浸る休日。
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
              📊 長崎・雲仙温泉：雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「長崎・雲仙温泉：雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 雲仙温泉　雲仙宮崎旅館</td>
                <td className="p-3 text-stone-600">長崎県雲仙市小浜町雲仙320番地</td>
                <td className="p-3 text-stone-600">諫早駅周辺</td>
                <td className="p-3 text-stone-600">有り　３９台　有料1台1泊500円</td>
                <td className="p-3 font-bold text-amber-600">★4.91（868件）</td>
                <td className="p-3 font-bold text-rose-600">¥24,530〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28126%2F28126.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 雲仙温泉　雲仙スカイホテル</td>
                <td className="p-3 text-stone-600">長崎県雲仙市小浜町雲仙323-1</td>
                <td className="p-3 text-stone-600">島鉄バス　雲仙営業所前／長崎自動車道　諫早インターより車にて６０分／島</td>
                <td className="p-3 text-stone-600">有　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★3.86（397件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31933%2F31933.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 雲仙観光ホテル</td>
                <td className="p-3 text-stone-600">長崎県雲仙市小浜町雲仙320</td>
                <td className="p-3 text-stone-600">諫早駅周辺</td>
                <td className="p-3 text-stone-600">無料にてご用意がございます。約30台・ 屋外駐車場のみ・ヴァレーパーキング：一部可</td>
                <td className="p-3 font-bold text-amber-600">★4.73（240件）</td>
                <td className="p-3 font-bold text-rose-600">¥29,590〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30119%2F30119.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 小浜温泉　小浜ビジネスホテル</td>
                <td className="p-3 text-stone-600">長崎県雲仙市小浜町北本町114-12</td>
                <td className="p-3 text-stone-600">諫早駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場あり　バイクのお客様には屋根付きの第二駐車場あります</td>
                <td className="p-3 font-bold text-amber-600">★4.05（284件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28357%2F28357.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">雲仙温泉　雲仙宮崎旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（うんぜんおんせん　うんぜんみやざきりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥24,530〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28126/28126_wa.jpg" alt="雲仙温泉　雲仙宮崎旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【2022年12月新築リニューアル】雲の中のラグジュアリーリゾート</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県雲仙市小浜町雲仙320番地 ／ 最寄り駅：諫早 ／ 交通案内：ＪＲ諫早駅下車バス８０分、長崎自動車道諫早ICより島原道路へ乗換え長野ICより車で５０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３９台　有料1台1泊500円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お庭の眺めに癒やされる、創作料理は凝りすぎ部屋から素敵なお庭が見れて癒されました。夕食の創作料理は美味しいけど少し凝り過ぎた感じがします。クチコミの詳細はこちらから　https://revie…　2026-08-16 15:53:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">雲仙温泉　雲仙スカイホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（うんぜんおんせん　うんぜん　すかいほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31933/31933_lo.jpg" alt="雲仙温泉　雲仙スカイホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>雲仙国立公園温泉街の中心に位置する温泉旅館。雲仙地蔵入口徒歩１分、源泉掛け流し大浴場露天風呂が自慢</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県雲仙市小浜町雲仙323-1 ／ 最寄り駅：主要駅 ／ 交通案内：島鉄バス　雲仙営業所前／長崎自動車道　諫早インターより車にて６０分／島原港より車にて４０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　２０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「掃除が行き届いておらず残念掃除が行き届いていない。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/31933?rev…　2026-08-22 10:39:32投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">雲仙観光ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（うんぜん　かんこうほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥29,590〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/30119/30119_r1.jpg" alt="雲仙観光ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>昭和10年創業。 過去と現在、そして未来へ。紡がれる伝統とくつろぎ｜進化するおもてなし。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県雲仙市小浜町雲仙320 ／ 最寄り駅：諫早 ／ 交通案内：ＪＲ諫早駅よりバスで８０分／諫早ＩＣより車で６０分／島原外港より車・バスで４０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料にてご用意がございます。約30台・ 屋外駐車場のみ・ヴァレーパーキング：一部可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.8 ／ 立地 ★4.69 ／ 部屋 ★4.78 ／ 設備 ★4.64 ／ 風呂 ★4.71 ／ 食事 ★4.82</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「夕食のフレンチが絶品、また食べに行きたい夕食のフレンチコースが地産のもので構成されていて盛り付けも良いし味も絶品でした。びっくりするくらいに美味しかったです。全国のクラシックホテルを訪れていて、今…　2026-08-25 16:23:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">小浜温泉　小浜ビジネスホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（おばまびじねす　ほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28357/28357_r1.jpg" alt="小浜温泉　小浜ビジネスホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>かけ流し温泉で癒しの旅を。朝食、夕食プランもおすすめ♪無料駐車場☆無料ランドリー</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県雲仙市小浜町北本町114-12 ／ 最寄り駅：諫早 ／ 交通案内：JR諫早駅または長崎道 諫早ICより雲仙・小浜方面約50分。長崎市または長崎空港から約1時間30分。長洲港から約50分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場あり　バイクのお客様には屋根付きの第二駐車場あります</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「源泉掛け流しと食事付きでコスパ抜群いつでも源泉掛け流しに入れる。おいしい食事も2食つけられる。価格もリーズナブルで、リピートしてます。クチコミの詳細はこちらから　https://review.…　2026-08-20 22:07:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！長崎県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、長崎県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Huis_Ten_Bosch_-_01.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="ハウステンボス" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">ハウステンボス</h3>
                <p className="text-xs text-stone-600 leading-relaxed">オランダの街並みを忠実に再現した日本最大級のテーマパーク。四季折々の花々とヨーロッパ風建築、日本最大級のイルミネーションが年間を通じて輝きます。 ハウステンボス（蘭: Huis Ten Bosch）は、長崎県佐世保市にあるテーマパーク。略称は「HTB」、テンボス。オランダの街並みを再現し、ヨーロッパ全体をテーマとしている。東京ディズニーリゾートの1.5倍の敷地面積で、単独テーマパークとしては日本最大。ドラマ・映画・CMなどのロケ地としても使われている。佐世保市の町にもなっており、所在地の住所は「佐世保…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">長崎原爆資料館・平和公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">1945年8月9日の被爆の惨状と核兵器廃絶の願いを世界に伝える静聖な場所。天を指す高さ9.7mの平和祈念像の前で平和を祈念します。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">グラバー園・大浦天主堂</h3>
                <p className="text-xs text-stone-600 leading-relaxed">長崎港を見下ろす南山手の丘に立つ世界遺産。旧グラバー住宅をはじめとする幕末の西洋館と、現存する日本最古の木造教会「大浦天主堂」が異国情緒を醸します。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">軍艦島（端島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて海底炭鉱の島として世界一の人口密度を誇った廃墟の離島・世界文化遺産。高層鉄筋コンクリートアパートがひしめく独特の遺構を上陸クルーズで見学できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 長崎県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 長崎県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="nagasaki-unzen-onsen-hell-stay" />
</div>
  );
}
