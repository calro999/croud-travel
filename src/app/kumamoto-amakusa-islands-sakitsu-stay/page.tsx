import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kumamoto-amakusa-islands-sakitsu-stay/" },
  title: "熊本・天草諸島＆三角：世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 厳選ガイド",
  description: "天草五橋で結ばれる島々と潜伏キリシタンの祈り・熊本天草エリア完全特化！世界遺産「﨑津集落（﨑津教会・海の天主堂）」、通詞島沖の「野生イルカウォッチング」、天草五橋ドライブ、三角西港、名物「天草大王・幻の車海老宿」を徹底解説。",
  keywords: ["熊本", "天草諸島", "三角", "世界遺産﨑津集落", "イルカウォッチング", "天草大王", "車海老宿"],
  openGraph: {
    title: "熊本・天草諸島＆三角：世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 厳選ガイド",
    description: "天草五橋で結ばれる島々と潜伏キリシタンの祈り・熊本天草エリア完全特化！世界遺産「﨑津集落（﨑津教会・海の天主堂）」、通詞島沖の「野生イルカウォッチング」、天草五橋ドライブ、三角西港、名物「天草大王・幻の車海老宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "熊本・天草諸島＆三角：世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 厳選ガイド",
    description: "天草五橋で結ばれる島々と潜伏キリシタンの祈り・熊本天草エリア完全特化！世界遺産「﨑津集落（﨑津教会・海の天主堂）」、通詞島沖の「野生イルカウォッチング」、天草五橋ドライブ、三角西港、名物「天草大王・幻の車海老宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kumamoto-amakusa-islands-sakitsu-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kumamoto-amakusa-islands-sakitsu-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sakitsu_church_heritage_stay",
    "title": "1. 世界遺産・﨑津集落〜﨑津教会・下田温泉（漁村に溶け込む畳敷きのゴシック教会）",
    "timing": "通年（東シナ海に沈む「下田温泉の夕陽」は日本の夕陽百選）",
    "desc": "世界文化遺産「長崎と天草地方の潜伏キリシタン関連遺産」の構成資産「﨑津集落」。穏やかな羊角湾に面して建つ「﨑津教会（海の天主堂・堂内は珍しい畳敷き）」。開湯700年、白鷺が傷を癒やしたと伝わる国民保養温泉地「下田温泉」。",
    "spots": "世界遺産 﨑津集落（﨑津教会・﨑津資料館みなと屋・トウヤ）、大江教会、下田温泉（足湯・夕陽展望台）",
    "access": "天草空港より車で約40分。熊本駅より特急バス「あまくさ号」運行。",
    "tip": "﨑津集落の路地「トウヤ（海へと続く細い小径）」を歩くと、民家の間から穏やかな海が顔を覗かせる独特の漁村風景に出会えます。"
  },
  {
    "key": "amakusa_dolphin_resort_stay",
    "title": "2. 通詞島沖イルカウォッチング〜天草五橋ドライブ（遭遇率98%の野生イルカ）",
    "timing": "通年（一年中約200頭のミナミハンドウイルカが定住）",
    "desc": "天草下島北端の通詞島（つうじしま）沖に定住する野生のミナミハンドウイルカ。船のすぐ横を群れで泳ぎジャンプする姿を間近で観察。九州本土と天草諸島を結ぶ天草五橋（パールライン）の絶景シーサイドドライブ。",
    "spots": "天草イルカウォッチング（五和町二江港出航）、天草五橋（1号橋〜5号橋）、松島温泉、リゾラテラス天草",
    "access": "熊本市内より車で約90分（三角大矢野道路経由）。",
    "tip": "天草のイルカウォッチングは外洋ではなく波が穏やかな海域で行われるため、船酔いが心配な方や小さなお子様連れでも安心して楽しめます。"
  },
  {
    "key": "amakusa_daio_kurumaebi_stay",
    "title": "3. 幻の巨大地鶏「天草大王」＆極上「天草車海老」（養殖発祥の地が誇る海の幸）",
    "timing": "通年（冬の車海老・春〜夏の生ウニ・秋冬の伊勢海老）",
    "desc": "一度絶滅したものの復元された日本最大級の幻の地鶏「天草大王」。弾力ある歯ごたえとコク深い肉汁。車海老養殖発祥の地・天草で味わうピチピチ跳ねる「活き車海老の踊り食い」や塩焼き。濃厚な天草生ウニ丼。",
    "spots": "天草大王料理指定店、車海老料理旅館、道の駅有明（リップルランド・巨大タコモニュメント）",
    "access": "天草諸島全域。",
    "tip": "天草の車海老は、殻を剥いた瞬間に甘みが舌の上に広がり、頭の味噌まで香ばしく焼き上げて丸ごと食べられるのが贅沢です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【熊本・天草諸島＆三角】世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "天草五橋で結ばれる島々と潜伏キリシタンの祈り・熊本天草エリア完全特化！世界遺産「﨑津集落（﨑津教会・海の天主堂）」、通詞島沖の「野生イルカウォッチング」、天草五橋ドライブ、三角西港、名物「天草大王・幻の車海老宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/kumamoto-amakusa-islands-sakitsu-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【熊本・天草諸島＆三角】世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kumamoto-amakusa-islands-sakitsu-stay/" }
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
            AMAKUSA ISLANDS & SAKITSU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「熊本・天草諸島＆三角」世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            紺碧の有明海と八代海を跨ぐ「天草五橋」を渡り、120余の島々へ。世界遺産に登録された潜伏キリシタンの漁村「﨑津集落」とゴシック様式の教会。約200頭の野生イルカと出会うクルーズ。幻の地鶏・天草大王と踊り食い車海老を味わう楽園の旅。
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
              📊 熊本・天草諸島＆三角：世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「熊本・天草諸島＆三角：世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 松島温泉　ホテル松泉閣　ろまん館</td>
                <td className="p-3 text-stone-600">熊本県上天草市松島町合津6215-21</td>
                <td className="p-3 text-stone-600">三角駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.88（456件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18335%2F18335.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 玉名温泉　立願寺温泉ホテル　湯里</td>
                <td className="p-3 text-stone-600">熊本県玉名市立願寺572-7</td>
                <td className="p-3 text-stone-600">玉名駅周辺</td>
                <td className="p-3 text-stone-600">有　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.34（649件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31465%2F31465.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 石山離宮　五足のくつ</td>
                <td className="p-3 text-stone-600">熊本県天草市天草町下田北2237</td>
                <td className="p-3 text-stone-600">天草空港駅周辺</td>
                <td className="p-3 text-stone-600">【15台・無料】世界遺産の崎津集落まで車20分、イルカウォッチングまで車30分界｜天草観光に便利</td>
                <td className="p-3 font-bold text-amber-600">★4.26（47件）</td>
                <td className="p-3 font-bold text-rose-600">¥31,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188033%2F188033.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 和み宿　新和荘　海心　Ｌｉｖｔｅｌ　ｋａｉ－ｓｈｉｎ</td>
                <td className="p-3 text-stone-600">熊本県天草市港町11-19</td>
                <td className="p-3 text-stone-600">三角駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.4（446件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28519%2F28519.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ペットリゾート　ブレインズ　天草</td>
                <td className="p-3 text-stone-600">熊本県上天草市松島町合津6082-4</td>
                <td className="p-3 text-stone-600">熊本空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.64（135件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172865%2F172865.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 天草温泉　ホテルアレグリアガーデンズ天草</td>
                <td className="p-3 text-stone-600">熊本県天草市本渡町広瀬996</td>
                <td className="p-3 text-stone-600">天草空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　１００台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.47（744件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67290%2F67290.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">松島温泉　ホテル松泉閣　ろまん館</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつしまおんせん　ほてるしょうせんかく　ろまんかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/18335/18335_w.jpg" alt="松島温泉　ホテル松泉閣　ろまん館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>天草の島々と夕日そして天草の海の幸を楽しめる宿です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県上天草市松島町合津6215-21 ／ 最寄り駅：三角 ／ 交通案内：JR三角駅よりバスorタクシーで20から30分／熊本市内より車で90分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「荒天でもスタッフの明るい接客にほっこりあいにくの荒天でしたが、スタッフのお姉さま方の明るい接客にほっこりして快適に過ごす事が出来ましたまたご縁がございましたらよろしくお願いいたしますクチコ…　2026-07-17 22:52:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">玉名温泉　立願寺温泉ホテル　湯里</h3>
                  <span className="text-xs text-stone-400 ml-2">（りゅうがんじおんせんほてる　ゆり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31465/31465_kan1.jpg" alt="玉名温泉　立願寺温泉ホテル　湯里 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR玉名駅より車で5分。街の中、されど山の中、南向きの丘の上で疲れをいやす泉質と豊かな湯量</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県玉名市立願寺572-7 ／ 最寄り駅：玉名 ／ 交通案内：玉名駅より車で７分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　５０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「また機会があればぜひ利用したいまた機会があればよろしくお願いしますクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/3…　2026-08-16 10:52:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">石山離宮　五足のくつ</h3>
                  <span className="text-xs text-stone-400 ml-2">（いしやまりきゅう ごそくのくつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥31,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188033/188033.jpg" alt="石山離宮　五足のくつ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>伊勢海老まつり｜東シナ海を望む山に広がるエキゾチックな異世界ー国立公園にある露天風呂付き離れの温泉宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県天草市天草町下田北2237 ／ 最寄り駅：天草空港 ／ 交通案内：熊本空港・熊本駅より車で約２時間30分。九州自動車道 松橋ICより車で2時間。天草空港より車で約40分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【15台・無料】世界遺産の崎津集落まで車20分、イルカウォッチングまで車30分界｜天草観光に便利</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「源泉露天風呂と教会風食堂、最高の思い出に下田温泉から引いているという源泉露天風呂は、沸かさず、そのまま掛け流しとのことで大変素晴らしい。やや熱めですが、自分にとっては適温で最高でした。5回も入りま…　2026-06-21 19:45:23投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=188033&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">和み宿　新和荘　海心　Ｌｉｖｔｅｌ　ｋａｉ－ｓｈｉｎ</h3>
                  <span className="text-xs text-stone-400 ml-2">（なごみやど　しんわそう　かいしん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28519/28519_g.jpg" alt="和み宿　新和荘　海心　Ｌｉｖｔｅｌ　ｋａｉ－ｓｈｉｎ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ホテルではない。旅館でも民宿でもない。Ｌｉｖｔｅｌを暮らしの延長として気軽に利用して下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県天草市港町11-19 ／ 最寄り駅：三角 ／ 交通案内：三角駅／熊本市内～お車で２時間／松橋ＩＣ～お車で１時間半。本渡港、本渡バスセンターより徒歩10分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「貸切風呂と自転車が便利、アメニティ補充は残念朝食食べれるところが少ないので朝食付きにすれば良かったです。レンタル自転車も置いてあるので便利です。お風呂は大きめの貸切風呂が2つあり空いていれば誰…　2026-07-31 02:07:44投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ペットリゾート　ブレインズ　天草</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぺっとりぞーと　ぶれいんず　あまくさ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172865/172865.jpg" alt="ペットリゾート　ブレインズ　天草 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【夕食時フリードリンク】ペットと楽しむ海辺のリゾート。天草海の幸づくしの食事はペットも一緒に♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県上天草市松島町合津6082-4 ／ 最寄り駅：熊本空港 ／ 交通案内：熊本空港よりお車にて約90分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「海を眺めながら愛犬と楽しむ絶品ディナーウェルカムスウィーツで冷たいシャーベットを頂いたり目の前に綺麗な海が広がっていたりと、リゾート気分になれるホテルでした。ディナーは愛犬も一緒に座る事ができ…　2026-08-13 14:41:58投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天草温泉　ホテルアレグリアガーデンズ天草</h3>
                  <span className="text-xs text-stone-400 ml-2">（あれぐりあがーでんずあまくさ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67290/67290_wa.jpg" alt="天草温泉　ホテルアレグリアガーデンズ天草 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>広大なリゾート、ゆっくりと楽しめる楽園、藍の島をお楽しみ下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県天草市本渡町広瀬996 ／ 最寄り駅：天草空港 ／ 交通案内：ＪＲ熊本駅から車で１５０分／本渡バスセンターから車で１０分／天草空港から車で１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１００台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「プライベートビーチと豪華な食事に大満足震災で行けるか心配でしたが天草の方は被害が少なかったようで安心しました。予算は心配ではあったものの、楽しみに伺わせていただきました。裏手はプライベート…　2026-08-21 11:32:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！熊本県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、熊本県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">日本三名城 熊本城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">加藤清正公が築城した難攻不落の城郭。「武者返し」と呼ばれる美しい曲線を描く石垣や、復元された豪華な「本丸御殿」、漆黒の大天守・小天守が堂々たる佇まいです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">阿蘇山（草千里ヶ浜・中岳火口）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界最大級のカルデラを誇る阿蘇。大草原が広がる草千里ヶ浜での乗馬体験や、白い煙を上げる中岳火口のダイナミックな火山景観が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Kurokawa_Onsen_-%E6%B8%A9%E6%B3%89%E8%A1%97.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="黒川温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">黒川温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">筑後川の源流・田の原川沿いの閑静な山あいに佇む名湯。「入湯手形」を利用して露天風呂めぐりを楽しみ、杉木立と茅葺き屋根の情緒を満喫できます。 黒川温泉（くろかわおんせん）は、熊本県阿蘇郡南小国町にある温泉である。 阿蘇山の北に位置し、南小国温泉郷の一つを構成する。広義の阿蘇温泉郷に含む場合もある。 全国屈指の人気温泉地として知られ、2009年版ミシュラン・グリーンガイド・ジャポンで、温泉地としては異例の二つ星で掲載された。なお「黒川温泉」の名称は2006年に地域団体商標として商標登録（地域ブランド…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">天草五橋（あまくさごきょう）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">九州本土と天草諸島を結ぶ5つの美しい橋梁ルート。イルカウォッチングや新鮮な海鮮丼、夕日が染める瀬戸の風景が訪れる人々を魅了します。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 熊本県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 熊本県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kumamoto-amakusa-islands-sakitsu-stay" />
</div>
  );
}
