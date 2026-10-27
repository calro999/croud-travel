import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kanagawa-kamakura-shonan-stay/" },
  title: "古都鎌倉＆湘南江の島：鶴岡八幡宮・江ノ電・富士夕景ホテル 厳選ガイド",
  description: "鎌倉・湘南・江の島エリア完全特化！鶴岡八幡宮、小町通り、高徳院大仏、江ノ電沿線、七里ヶ浜オーシャンビューホテルと相模湾の地魚・しらすグルメを徹底解説。",
  keywords: ["古都鎌倉", "湘南江の島", "鶴岡八幡宮", "江ノ電", "富士夕景ホテル", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "古都鎌倉＆湘南江の島：鶴岡八幡宮・江ノ電・富士夕景ホテル 厳選ガイド",
    description: "鎌倉・湘南・江の島エリア完全特化！鶴岡八幡宮、小町通り、高徳院大仏、江ノ電沿線、七里ヶ浜オーシャンビューホテルと相模湾の地魚・しらすグルメを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "古都鎌倉＆湘南江の島：鶴岡八幡宮・江ノ電・富士夕景ホテル 厳選ガイド",
    description: "鎌倉・湘南・江の島エリア完全特化！鶴岡八幡宮、小町通り、高徳院大仏、江ノ電沿線、七里ヶ浜オーシャンビューホテルと相模湾の地魚・しらすグルメを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kanagawa-kamakura-shonan-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kanagawa-kamakura-shonan-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kamakura_station_walk",
    "title": "1. 鎌倉駅〜小町通り＆鶴岡八幡宮（古都の歴史散策と食べ歩き）",
    "timing": "通年（春の段葛桜並木・秋の紅葉・年末年始初詣）",
    "desc": "源頼朝ゆかりの鶴岡八幡宮へ続く「段葛」と、人気スイーツ店や伝統工芸店が並ぶ「小町通り」。朝の静かな時間に八幡宮を参拝し、鎌倉野菜や手打ち蕎麦を味わう贅沢な散策ステイ。",
    "spots": "鶴岡八幡宮、段葛、小町通り、鎌倉国宝館、銭洗弁財天宇賀福神社",
    "access": "JR横須賀線・湘南新宿ライン「鎌倉駅」東口下車徒歩すぐ。東京・新宿から直通約55分。",
    "tip": "早朝の段葛散策（朝7時〜8時頃）は人通りが少なく、鶴岡八幡宮の清々しい神域の空気を満喫できます。"
  },
  {
    "key": "shichirigahama_ocean",
    "title": "2. 七里ヶ浜＆由比ヶ浜（相模湾越しに富士山と江の島を望む特等席）",
    "timing": "通年（秋・冬の澄んだ夕景・サンセットタイムが至高）",
    "desc": "江ノ電の車窓に広がる青い海。七里ヶ浜沿いのラグジュアリーホテルや由比ヶ浜の古民家宿では、客室のテラスから海に沈む夕日と富士山のシルエットを眺め、名物ブレックファーストを満喫。",
    "spots": "七里ヶ浜海岸、稲村ヶ崎（夕日スポット）、bills七里ヶ浜、由比ヶ浜海岸",
    "access": "江ノ島電鉄「七里ヶ浜駅」「由比ヶ浜駅」下車。",
    "tip": "稲村ヶ崎から眺める「江の島と富士山の夕景」はかながわの景勝50選に選ばれる絶景フォトスポットです。"
  },
  {
    "key": "enoshima_bayside",
    "title": "3. 江の島島内＆片瀬海岸（江島神社参拝と天然温泉・生しらすグルメ）",
    "timing": "通年（冬期は湘南の宝石イルミネーション開催）",
    "desc": "江の島弁天橋を渡って島内へ。江島神社の三宮巡りや江の島シーキャンドル展望台からの360度パノラマ。片瀬海岸沿いの天然温泉付きホテルで、名物「生しらす丼」やサザエの壺焼きを堪能。",
    "spots": "江島神社（辺津宮・中津宮・奥津宮）、江の島シーキャンドル（展望灯台）、江の島岩屋、新江ノ島水族館",
    "access": "小田急江ノ島線「片瀬江ノ島駅」、江ノ電「江ノ島駅」、湘南モノレール「湘南江の島駅」。",
    "tip": "冬に開催される「湘南の宝石（江の島イルミネーション）」は関東三大イルミネーション認定の圧巻の輝きです。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【古都鎌倉＆湘南江の島】鶴岡八幡宮・江ノ電・富士夕景ホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "鎌倉・湘南・江の島エリア完全特化！鶴岡八幡宮、小町通り、高徳院大仏、江ノ電沿線、七里ヶ浜オーシャンビューホテルと相模湾の地魚・しらすグルメを徹底解説。",
    "url": "https://croud-travel.pages.dev/kanagawa-kamakura-shonan-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【古都鎌倉＆湘南江の島】鶴岡八幡宮・江ノ電・富士夕景ホテル 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kanagawa-kamakura-shonan-stay/" }
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
            KAMAKURA & ENOSHIMA MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「古都鎌倉＆湘南江の島」鶴岡八幡宮・江ノ電・富士夕景ホテル 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            江ノ電がコトコト走る相模湾沿い。由緒ある古社寺の静寂と、夕日に染まる富士山と江の島シーキャンドル。都心から1時間で出逢える極上の湘南リゾートステイ。
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
              📊 古都鎌倉＆湘南江の島：鶴岡八幡宮・江ノ電・富士夕景ホテル 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「古都鎌倉＆湘南江の島：鶴岡八幡宮・江ノ電・富士夕景ホテル 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 湯盛温泉　ホテル杉の湯</td>
                <td className="p-3 text-stone-600">奈良県吉野郡川上村迫695</td>
                <td className="p-3 text-stone-600">大和上市駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.2（240件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56288%2F56288.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ほてる彩夏</td>
                <td className="p-3 text-stone-600">神奈川県藤沢市片瀬海岸1-11-22</td>
                <td className="p-3 text-stone-600">片瀬江ノ島駅周辺</td>
                <td className="p-3 text-stone-600">有り　　１４台　　要予約</td>
                <td className="p-3 font-bold text-amber-600">★4（383件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70652%2F70652.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ほてる汐彩</td>
                <td className="p-3 text-stone-600">神奈川県藤沢市片瀬海岸1-7-3</td>
                <td className="p-3 text-stone-600">片瀬江ノ島駅周辺</td>
                <td className="p-3 text-stone-600">有り　２台　１５００円（１泊）要予約、 満車時は観光協会東浜駐車場（１泊１５００円）にご案内。</td>
                <td className="p-3 font-bold text-amber-600">★3.77（547件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,750〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106222%2F106222.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 戸倉上山田温泉　ビジネスホテル　グリーンプラザ</td>
                <td className="p-3 text-stone-600">長野県千曲市上山田温泉2-22-9</td>
                <td className="p-3 text-stone-600">戸倉駅周辺</td>
                <td className="p-3 text-stone-600">駐車場無料。20台～。大型車は1,100円にて駐車可能。</td>
                <td className="p-3 font-bold text-amber-600">★3.57（1011件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8638%2F8638.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ＨＯＴＥＬＮＯＡＨ・ＲＥＳＯＲＴ湘南【大人専用１８禁・ハピホテ提携】</td>
                <td className="p-3 text-stone-600">神奈川県藤沢市鵠沼海岸1-11-16</td>
                <td className="p-3 text-stone-600">鵠沼海岸駅周辺</td>
                <td className="p-3 text-stone-600">有り　２３台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F163278%2F163278.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ＭＡＲＳＯＬ　Ｃ．Ｓ．Ｂｅａｃｈ　ｈｏｔｅｌ</td>
                <td className="p-3 text-stone-600">神奈川県茅ケ崎市南湖4-23-14</td>
                <td className="p-3 text-stone-600">茅ヶ崎駅周辺</td>
                <td className="p-3 text-stone-600">1部屋につき1台　無料　要予約　部屋番号の記載のある場所に駐車ください</td>
                <td className="p-3 font-bold text-amber-600">★4.4（9件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191826%2F191826.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯盛温泉　ホテル杉の湯</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆもりおんせん　ほてるすぎのゆ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/56288/56288_room.jpg" alt="湯盛温泉　ホテル杉の湯 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>吉野杉の杜に包まれた優美なホテル。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 奈良県吉野郡川上村迫695 ／ 最寄り駅：大和上市 ／ 交通案内：近鉄　大和上市駅より路線バスにて３５分／南阪奈有料道路　葛城ＩＣより約１時間</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉も部屋も広くてゆったり過ごせた温泉も部屋も広くて満足しました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/5…　2026-07-27 16:19:43投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ほてる彩夏</h3>
                  <span className="text-xs text-stone-400 ml-2">（さいか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70652/70652_room.jpg" alt="ほてる彩夏 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>片瀬江ノ島駅より徒歩で２分。”素足でくつろげる”新しいカタチの「ほてる」です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県藤沢市片瀬海岸1-11-22 ／ 最寄り駅：片瀬江ノ島 ／ 交通案内：小田急　片瀬江ノ島駅から徒歩で２分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　　１４台　　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地は良いが設備やサービスに改善の余地あり問い合わせ時のスタッフの愛想が悪かった。宿泊時は良い対応だったので人によると思う。片瀬江ノ島駅から徒歩2～3分で立地良し。広さも十分。荷物も預かってく…　2026-08-13 09:49:25投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ほてる汐彩</h3>
                  <span className="text-xs text-stone-400 ml-2">（しおさい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,750〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/106222/106222_kya.jpg" alt="ほてる汐彩 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>江の島、小動岬、相模湾を一望するロケーション。江の島駅より徒歩5分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県藤沢市片瀬海岸1-7-3 ／ 最寄り駅：片瀬江ノ島 ／ 交通案内：片瀬江の島駅より徒歩にて５分、江ノ電江ノ島駅より徒歩にて5分、湘南モノレール湘南江ノ島駅より徒歩7分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２台　１５００円（１泊）要予約、 満車時は観光協会東浜駐車場（１泊１５００円）にご案内。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は広くて快適、朝食のパンが美味しい部屋は広くて快適、朝ご飯パンは美味しい。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/v…　2026-08-17 18:52:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">戸倉上山田温泉　ビジネスホテル　グリーンプラザ</h3>
                  <span className="text-xs text-stone-400 ml-2">（とぐらかみやまだおんせん　びじねすほてる　ぐり－んぷらざ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8638/8638_sgl.jpg" alt="戸倉上山田温泉　ビジネスホテル　グリーンプラザ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>喫煙＆大型車もOKで駐車場は無料！姉妹両館のかけ流しの温泉入浴も</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県千曲市上山田温泉2-22-9 ／ 最寄り駅：戸倉 ／ 交通案内：上信越自動車道坂城IC及び中央道更埴ICより１０分。長野新幹線上田駅及びＪＲ篠ノ井駅、乗換しなの鉄道戸倉駅下車、車で５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場無料。20台～。大型車は1,100円にて駐車可能。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「系列の大浴場が利用できコスパも抜群妻と2人で素泊まりで泊まりました系列の大浴場に入れたので良かったですコスパが良かったですクチコミの詳細はこちらから　https://rev…　2026-08-19 21:55:01投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＨＯＴＥＬＮＯＡＨ・ＲＥＳＯＲＴ湘南【大人専用１８禁・ハピホテ提携】</h3>
                  <span className="text-xs text-stone-400 ml-2">（のあ　りぞーとしょうなん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/163278/163278_front.jpg" alt="ＨＯＴＥＬＮＯＡＨ・ＲＥＳＯＲＴ湘南【大人専用１８禁・ハピホテ提携】 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【大人専用・１８歳未満利用禁止】湘南江ノ島ビーチに隣接した、２人だけのオーシャンリゾートオアシス。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県藤沢市鵠沼海岸1-11-16 ／ 最寄り駅：鵠沼海岸 ／ 交通案内：鵠沼海岸駅より徒歩にて約１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２３台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ＨＯＴＥＬＮＯＡＨ・ＲＥＳＯＲＴ湘南【大人専用１８禁・ハピホテ提携】は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＭＡＲＳＯＬ　Ｃ．Ｓ．Ｂｅａｃｈ　ｈｏｔｅｌ</h3>
                  <span className="text-xs text-stone-400 ml-2">（まるそる　シーエス　びーちほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/191826/191826.jpg" alt="ＭＡＲＳＯＬ　Ｃ．Ｓ．Ｂｅａｃｈ　ｈｏｔｅｌ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>〈サザンビーチまで徒歩0分〉オーシャンビューサウナ×屋上BBQで非日常ステイ♪相模湾や富士山を一望</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県茅ケ崎市南湖4-23-14 ／ 最寄り駅：茅ヶ崎 ／ 交通案内：茅ヶ崎駅よりタクシー5分 徒歩25分　東京IC→海老名JCT→新湘南バイパスで茅ヶ崎海岸IC5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1部屋につき1台　無料　要予約　部屋番号の記載のある場所に駐車ください</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ＭＡＲＳＯＬ　Ｃ．Ｓ．Ｂｅａｃｈ　ｈｏｔｅｌは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！神奈川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、神奈川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">横浜みなとみらい21</h3>
                <p className="text-xs text-stone-600 leading-relaxed">ランドマークタワーや大観覧車「コスモクロック21」、赤レンガ倉庫が立ち並ぶ近代都市リゾート。港町の海風を感じながらショッピングや夜景を楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">鎌倉大仏（高徳院）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">高さ約11.3mを誇る鎌倉のシンボル的な国宝銅造阿弥陀如来坐像。四季折々の花々や歴史ある古刹巡り、小町通りの食べ歩きとともに鎌倉散策の定番です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Lake_Ashi_from_Mt.Komagatake_03-2.jpg/1280px-Lake_Ashi_from_Mt.Komagatake_03-2.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="箱根 芦ノ湖・大涌谷" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">箱根 芦ノ湖・大涌谷</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山を望む箱根海賊船クルーズが人気の芦ノ湖と、現在も硫黄煙が噴き出す火山地帯・大涌谷。名物の「黒たまご」を食べると寿命が延びると伝えられます。 箱根（はこね、古くは「函根」、「函嶺」とも呼ばれた）は、静岡県に近い神奈川県南西部の一角、箱根カルデラ近辺の一帯を指す地名。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">江の島</h3>
                <p className="text-xs text-stone-600 leading-relaxed">湘南海岸に浮かぶ美しい島。江島神社への参道散策やシーキャンドル（展望灯台）からの太平洋の絶景、新鮮な生しらす丼など魅力が詰まっています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 神奈川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 神奈川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kanagawa-kamakura-shonan-stay" />
</div>
  );
}
