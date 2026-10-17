import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/hiroshima-miyajima-itsukushima-stay/" },
  title: "広島・宮島＆嚴島神社：海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本三景・安芸の宮島エリア完全特化！世界遺産「嚴島神社」大鳥居の潮干狩り・満潮の絶景、宮島ロープウエー弥山登山、揚げもみじ・焼き牡蠣食べ歩きと老舗温泉旅館を徹底解説。",
  keywords: ["広島", "宮島", "嚴島神社", "海に浮かぶ大鳥居", "弥山", "牡蠣", "穴子飯宿"],
  openGraph: {
    title: "広島・宮島＆嚴島神社：海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "日本三景・安芸の宮島エリア完全特化！世界遺産「嚴島神社」大鳥居の潮干狩り・満潮の絶景、宮島ロープウエー弥山登山、揚げもみじ・焼き牡蠣食べ歩きと老舗温泉旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "広島・宮島＆嚴島神社：海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "日本三景・安芸の宮島エリア完全特化！世界遺産「嚴島神社」大鳥居の潮干狩り・満潮の絶景、宮島ロープウエー弥山登山、揚げもみじ・焼き牡蠣食べ歩きと老舗温泉旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hiroshima-miyajima-itsukushima-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hiroshima-miyajima-itsukushima-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "miyajima_shrine_view",
    "title": "1. 嚴島神社・大鳥居周辺（海上の廻廊参拝と夜の幻想ライトアップ）",
    "timing": "通年（満潮時の海に浮かぶ姿と干潮時の大鳥居ウォーク）",
    "desc": "推古天皇の時代に創建された日本屈指の海上社殿。満潮時にはまるで海に浮かんでいるかのような朱塗りの廻廊を歩き、干潮時には大鳥居の根元まで歩いて行ける奇跡の神社。夜のナイトクルーズも人気。",
    "spots": "嚴島神社（国宝社殿・大鳥居・能舞台）、五重塔・千畳閣（豊国神社）、紅葉谷公園",
    "access": "JR宮島口駅・広電宮島口駅よりJR西日本フェリーまたは松大汽船で約10分「宮島桟橋」下車。",
    "tip": "JR西日本フェリーに乗ると、大鳥居に最接近する航路を通るため海上からの大鳥居撮影が可能です。"
  },
  {
    "key": "miyajima_omotesando",
    "title": "2. 宮島表参道商店街〜町家通り（焼き牡蠣・揚げもみじ・名物あなごめし）",
    "timing": "通年（冬の広島牡蠣シーズンが最高峰）",
    "desc": "宮島桟橋から嚴島神社へ続く約350mのメインストリート。ぷりぷりの「焼き牡蠣」や出来立て熱々の「揚げもみじ」、香ばしく焼き上げた「あなごめし」の食べ歩きが楽しめる賑やかな通り。",
    "spots": "宮島表参道商店街（清盛通り）、町家通り（レトロな裏路地）、紅葉谷川、みやじマリン（宮島水族館）",
    "access": "宮島桟橋より徒歩約3〜5分。",
    "tip": "紅葉堂の「揚げもみじ」は外はサクサク、中はアツアツの餡がとろけ、食べ歩きNo.1人気スイーツです。"
  },
  {
    "key": "miyajimaguchi_bay",
    "title": "3. 弥山（みせん）パノラマ＆宮島口（弘法大師の霊山と瀬戸内海の多島美）",
    "timing": "通年（秋の紅葉谷・初夏の新緑）",
    "desc": "初代総理大臣・伊藤博文が「日本三景の一の真価は頂上の眺めにあり」と絶賛した霊峰・弥山（標高535m）。宮島ロープウエーで獅子岩展望台へ登り、瀬戸内海に浮かぶ島々を一望。",
    "spots": "弥山山頂展望台、獅子岩展望台、霊火堂（1200年消えずの火）、宮島ロープウエー",
    "access": "紅葉谷公園より無料送迎バスでロープウエー紅葉谷駅へ。",
    "tip": "霊火堂の「消えずの火」で沸かした霊水（大茶釜のお湯）をいただくと万病に効くと伝えられています。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【広島・宮島＆嚴島神社】海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "日本三景・安芸の宮島エリア完全特化！世界遺産「嚴島神社」大鳥居の潮干狩り・満潮の絶景、宮島ロープウエー弥山登山、揚げもみじ・焼き牡蠣食べ歩きと老舗温泉旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/hiroshima-miyajima-itsukushima-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【広島・宮島＆嚴島神社】海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/hiroshima-miyajima-itsukushima-stay/" }
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
            MIYAJIMA ITSUKUSHIMA MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「広島・宮島＆嚴島神社」海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            潮の満ち引きで海に浮かぶ世界遺産「嚴島神社」。宮島に宿泊した人だけが出逢える、観光客が去った後の静寂な夜のライトアップと神聖な早朝参拝。名物あなごめしと宮島温泉に癒やされる特別な島時間。
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
              📊 広島・宮島＆嚴島神社：海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「広島・宮島＆嚴島神社：海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 宮島グランドホテル　有もと</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島町南町364</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">有り　５台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.58（1299件）</td>
                <td className="p-3 font-bold text-rose-600">¥29,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18848%2F18848.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 宮島　神撰の宿　ホテルみや離宮</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島町849</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">交通規制があり駐車不可。乗船前に宮島口の駐車場をご利用下さい。（1泊約2000円）</td>
                <td className="p-3 font-bold text-amber-600">★4.2（1046件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11125%2F11125.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 安芸の御宿　みやじま庵廣島</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島口4-4-15</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">【専用無料駐車場有り】　チェクイン前チェクアウト後も駐車可能　キャンピングカーも駐車可能</td>
                <td className="p-3 font-bold text-amber-600">★3.99（248件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172823%2F172823.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 宮島コーラルホテル</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島口1-9-8</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">有り　55台　到着日の15時〜出立日の正午まで無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.28（2049件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17769%2F17769.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 宮島　ホテル菊乃家</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島町335</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">駐車場なし（フェリーご乗船前の一般の駐車場にお止めください）</td>
                <td className="p-3 font-bold text-amber-600">★4.41（630件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,320〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129976%2F129976.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. リブマックスリゾート宮浜温泉Ｏｃｅａｎ</td>
                <td className="p-3 text-stone-600">広島県</td>
                <td className="p-3 text-stone-600">山陽本線 [大野浦駅]から車で5分・[玖波駅]から車で5分・[宮島口駅</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.21（911件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178590%2F178590.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮島グランドホテル　有もと</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやじま　ぐらんどほてる　ありもと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥29,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848_rm.jpg" alt="宮島グランドホテル　有もと 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>すべてはお客様の満足と笑顔のために。宮島の歴史とともに時を重ねる、世界遺産「厳島神社」に最も近い宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島町南町364 ／ 最寄り駅：宮島口 ／ 交通案内：宮島口桟橋よりフェリーで１０分～宮島桟橋よりマイクロバスにて送迎</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.72 ／ 立地 ★4.6 ／ 部屋 ★4.57 ／ 設備 ★4.45 ／ 風呂 ★4.43 ／ 食事 ★4.66</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「厳島神社にすぐたどり着けるロケーションで、宮島観光にはオススメです。夕食朝食付きにしてよかったです。夜の散歩企画なども開催されていてサービス面でもオススメです。クチコミの詳細はこちらから　…　2026-10-01 16:46:37投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮島　神撰の宿　ホテルみや離宮</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやじま　しんせんのやど　ほてるみやりきゅう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/11125/11125_war.jpg" alt="宮島　神撰の宿　ホテルみや離宮 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宮島観光に便利な立地！美味しいお料理とあったかいお風呂でリラックス♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島町849 ／ 最寄り駅：宮島口 ／ 交通案内：ＪＲ山陽本線宮島口駅下車、宮島口桟橋よりフェリーで１０分。宮島桟橋下船後、厳島神社方面へ徒歩5分／厳島神社まで徒歩約7分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>交通規制があり駐車不可。乗船前に宮島口の駐車場をご利用下さい。（1泊約2000円）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事の量が少なく夜食の準備が必要定食の量を3食食べるのが苦手な私でもグレードアップの割には量がとても少ない。島唯一のコンビニは21時ごろには閉まるので夜食を買って行った方が安心。クチコ…　2026-08-27 22:03:23投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">安芸の御宿　みやじま庵廣島</h3>
                  <span className="text-xs text-stone-400 ml-2">（あきのおやど　みやじまあんひろしま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172823/172823.jpg" alt="安芸の御宿　みやじま庵廣島 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>炭酸水素イオンの自慢の美人の湯・サウナ・冷鉱泉の水風呂　宮島を見下ろす宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島口4-4-15 ／ 最寄り駅：宮島口 ／ 交通案内：宮島口駅徒歩8分　宮島桟橋徒歩10分　山陽道(廿日市インター）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【専用無料駐車場有り】　チェクイン前チェクアウト後も駐車可能　キャンピングカーも駐車可能</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「瀬戸内海と宮島、電車も一望できる絶景屋上や部屋から静かな瀬戸内海と宮島の島影が見えて、小さくですが大鳥居もたたずむ景色が本当に良かったです。あと、道を挟んでJR山陽本線と広島電鉄が見えるの…　2026-08-22 21:46:15投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮島コーラルホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやじま　こーらるほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17769/17769_sgl.jpg" alt="宮島コーラルホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宮島フェリー乗り場まで徒歩約30秒！JR宮島口駅から徒歩５分！無料駐車場完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島口1-9-8 ／ 最寄り駅：宮島口 ／ 交通案内：ＪＲ宮島口駅下車　徒歩5分・広島電鉄宮島口駅下車　徒歩３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　55台　到着日の15時〜出立日の正午まで無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.26 ／ 立地 ★4.4 ／ 部屋 ★4.21 ／ 設備 ★4.12 ／ 風呂 ★4.06 ／ 食事 ★4.29</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ひとり旅で利用しました。2日泊まればよかったと思うくらい、宮島までのフェリーは近いし、朝ごはんも美味しく、スタッフの方も親切でした!クチコミの詳細はこちらから　https://review.tra…　2026-10-08 22:36:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮島　ホテル菊乃家</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやじま　ほてるきくのや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,320〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/129976/129976_kya.jpg" alt="宮島　ホテル菊乃家 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>２０２５年８月菊乃家別邸オープン。宮島の自然に囲まれひっそりと佇む、大人の隠れ家宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島町335 ／ 最寄り駅：宮島口 ／ 交通案内：宮島桟橋より徒歩15分（ホテルより送迎あり。フェリー乗船前にお電話いただけましたらお迎えに参ります）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場なし（フェリーご乗船前の一般の駐車場にお止めください）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.56 ／ 立地 ★4.32 ／ 部屋 ★4.47 ／ 設備 ★4.3 ／ 風呂 ★4.2 ／ 食事 ★4.36</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「シーフードの朴葉味噌焼きが絶品!夕食のシーフードの朴葉味噌焼きが絶品でした。河豚の唐揚げは骨が多かったので、事前に説明していただけたら、食べやすかったと思いました。クチコミの詳細はこちらか…　2026-10-09 22:25:37投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">リブマックスリゾート宮浜温泉Ｏｃｅａｎ</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/178590/178590.jpg" alt="リブマックスリゾート宮浜温泉Ｏｃｅａｎ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：山陽本線 [大野浦駅]から車で5分・[玖波駅]から車で5分・[宮島口駅]から車で15分　岩国空港から車で30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は広々快適だが食事会場は混雑気味オーシャンスイートに泊まりました。部屋は広々しており居心地も良く設備等含め快適でした。食事はバイキング会場が狭く隣との間隔があまりないので、テーブルを仕切っ…　2026-09-19 15:26:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！広島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、広島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Miyajima_From_The_Ferry_%2830093845%29.jpeg/1280px-Miyajima_From_The_Ferry_%2830093845%29.jpeg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="厳島神社（宮島）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">厳島神社（宮島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界文化遺産に登録された安芸の宮島。海上に浮かぶ鮮やかな朱塗りの大鳥居と社殿は潮の満ち引きで表情を変え、日本三景に相応しい神秘の美しさです。 厳島（いつくしま）は、広島県廿日市市宮島町にある島。瀬戸内海西部、広島湾の北西部に位置する。通称は安芸の宮島（あきのみやじま）、または宮島。かつて島全体が佐伯郡宮島町と一致していたが、2005年（平成17年）に廿日市市と合併した。 古代より、島そのものが自然崇拝の対象であったと考えられる。平安時代末期以降は、厳島神社の影響力の強さや海上交通の拠点としての重要…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">原爆ドーム・平和記念公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界へ恒久平和を訴え続ける負の遺産・世界文化遺産。元産業奨励館の被爆した姿が今も残され、平和記念資料館には世界中から多くの人が訪れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">尾道（千光寺公園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">坂と猫と映画の街として愛される港町。千光寺山の山頂からロープウェイで登れば、尾道水道と造船所、瀬戸内海の島々を一望するノスタルジックな風景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">呉・大和ミュージアム</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて東洋一の軍港・造船の街として栄えた呉の歴史を伝える博物館。館内中央に鎮座する10分の1スケールの戦艦「大和」の精巧な復元モデルは圧巻です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 広島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 広島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="hiroshima-miyajima-itsukushima-stay" />
</div>
  );
}
