import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/nagasaki-hirado-sasebo-kujukushima-stay/" },
  title: "長崎・平戸＆佐世保・九十九島：世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 厳選ガイド",
  description: "異国情緒と多島美の楽園・長崎平戸＆佐世保九十九島エリア完全特化！平戸城（宿泊体験キャッスルステイ）、世界遺産春日集落・生月島サンセットウェイ、九十九島パールシーリゾート、名物「天然ヒラメ・佐世保バーガー宿」を徹底解説。",
  keywords: ["長崎", "平戸", "佐世保", "九十九島", "世界遺産キリシタン史跡", "平戸城", "九十九島遊覧"],
  openGraph: {
    title: "長崎・平戸＆佐世保・九十九島：世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 厳選ガイド",
    description: "異国情緒と多島美の楽園・長崎平戸＆佐世保九十九島エリア完全特化！平戸城（宿泊体験キャッスルステイ）、世界遺産春日集落・生月島サンセットウェイ、九十九島パールシーリゾート、名物「天然ヒラメ・佐世保バーガー宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "長崎・平戸＆佐世保・九十九島：世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 厳選ガイド",
    description: "異国情緒と多島美の楽園・長崎平戸＆佐世保九十九島エリア完全特化！平戸城（宿泊体験キャッスルステイ）、世界遺産春日集落・生月島サンセットウェイ、九十九島パールシーリゾート、名物「天然ヒラメ・佐世保バーガー宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagasaki-hirado-sasebo-kujukushima-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagasaki-hirado-sasebo-kujukushima-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hirado_castle_heritage_onsen",
    "title": "1. 平戸城〜平戸オランダ商館・寺院と教会の見える風景（和洋折衷の城下町散歩）",
    "timing": "通年（春の平戸城つつじまつり・秋の平戸くんち）",
    "desc": "海に突き出た丘に築かれ、天守閣から平戸瀬戸を一望する「平戸城」。寺院の瓦屋根と聖フランシスコ・ザビエル記念教会の尖塔が重なり合う「寺院と教会の見える風景」。復元された「平戸オランダ商館」と平戸温泉の湯。",
    "spots": "平戸城（懐柔櫓・キャッスルステイ）、寺院と教会の見える風景、平戸オランダ商館、平戸ザビエル記念教会",
    "access": "松浦鉄道「たびら平戸口駅」より車・バスで約15分。西九州道「佐々IC」より約40分。",
    "tip": "日本最西端の駅「たびら平戸口駅」では、駅窓口で「日本最西端駅訪問証明書」を発行してもらえます。"
  },
  {
    "key": "sasebo_kujukushima_resort_stay",
    "title": "2. 九十九島〜弓張岳展望台・生月島サンセットウェイ（208の島々と断崖絶壁ドライブ）",
    "timing": "通年（夕暮れ時に島々のシルエットが黄金色に染まる絶景）",
    "desc": "西海国立公園の代表景観「九十九島（くじゅうくしま）」。九十九島遊覧船パールクィーンや海きらら水族館。標高364mの「弓張岳展望台」からの夜景。映画やCMのロケ地として有名な生月島（いきつきしま）西海岸の断崖道路。",
    "spots": "九十九島パールシーリゾート（遊覧船・海きらら）、弓張岳展望台、展海峰（菜の花・コスモス）、生月サンセットウェイ・大バエ灯台",
    "access": "JR佐世保駅より路線バス約25分。",
    "tip": "生月サンセットウェイは信号が一切なく、垂直に切り立つ断崖と東シナ海の水平線を眺めながら走る日本屈指の絶景ロードです。"
  },
  {
    "key": "hirado_hirame_sasebo_beef_stay",
    "title": "3. 平戸名物「天然ヒラメ」＆佐世保バーガー（冬〜春のヒラメまつりと本場アメリカングルメ）",
    "timing": "通年（天然ヒラメまつり：1月〜3月）",
    "desc": "玄界灘の激流に揉まれて身が締まった「平戸の天然ヒラメ」。透き通るヒラメのお造り、握り寿司、しゃぶしゃぶ。佐世保発祥のジューシーな「佐世保バーガー」や、熱々の鉄板でレモン醤油タレを絡める「レモンステーキ」。",
    "spots": "平戸ヒラメ料理指定店、佐世保バーガー認定店（ヒカリ・ログキット）、蜂の家（ジャンボシュークリーム）",
    "access": "平戸・佐世保市街。",
    "tip": "佐世保のレモンステーキは、お肉を食べ終えた後に鉄板に残ったタレと肉汁の中にご飯を投入して混ぜて食べるのが通のスタイルです。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【長崎・平戸＆佐世保・九十九島】世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "異国情緒と多島美の楽園・長崎平戸＆佐世保九十九島エリア完全特化！平戸城（宿泊体験キャッスルステイ）、世界遺産春日集落・生月島サンセットウェイ、九十九島パールシーリゾート、名物「天然ヒラメ・佐世保バーガー宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/nagasaki-hirado-sasebo-kujukushima-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【長崎・平戸＆佐世保・九十九島】世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/nagasaki-hirado-sasebo-kujukushima-stay/" }
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
            HIRADO & SASEBO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「長崎・平戸＆佐世保・九十九島」世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            南蛮貿易と潜伏キリシタンの歴史が息づく城下町「平戸」と、208の島々が浮かぶ絶景「九十九島・佐世保」。生月島の断崖絶壁を走るサンセットウェイ。平戸港水揚げの極上「天然ヒラメ」と佐世保のレモンステーキを味わう西端の旅。
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
              📊 長崎・平戸＆佐世保・九十九島：世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「長崎・平戸＆佐世保・九十九島：世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 田の浦温泉　旅館　田の浦温泉</td>
                <td className="p-3 text-stone-600">長崎県平戸市大久保町201-125</td>
                <td className="p-3 text-stone-600">たびら平戸口駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.09（119件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13466%2F13466.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 熱海温泉　熱海の癒（ゆ）　新かどや</td>
                <td className="p-3 text-stone-600">静岡県熱海市小嵐町14-8</td>
                <td className="p-3 text-stone-600">熱海駅周辺</td>
                <td className="p-3 text-stone-600">有り　40台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.48（231件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8223%2F8223.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. そのぎ茶温泉里山の湯宿　つわぶきの花</td>
                <td className="p-3 text-stone-600">長崎県東彼杵郡東彼杵町一ッ石郷981</td>
                <td className="p-3 text-stone-600">長崎空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.51（195件）</td>
                <td className="p-3 font-bold text-rose-600">¥24,590〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180084%2F180084.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルオークラＪＲハウステンボス</td>
                <td className="p-3 text-stone-600">長崎県佐世保市ハウステンボス町10</td>
                <td className="p-3 text-stone-600">ハウステンボス駅周辺</td>
                <td className="p-3 text-stone-600">有、1泊1台あたり1000円 *到着日の朝から翌日正午まで。*2027年4月1日より1500円</td>
                <td className="p-3 font-bold text-amber-600">★4.59（3289件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,750〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9057%2F9057.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテル彩陽　ＷＡＫＩＧＡＷＡ（旧：平戸脇川ホテル）</td>
                <td className="p-3 text-stone-600">長崎県平戸市岩の上町1123-1</td>
                <td className="p-3 text-stone-600">たびら平戸口駅周辺</td>
                <td className="p-3 text-stone-600">有り（約25台）・無料</td>
                <td className="p-3 font-bold text-amber-600">★3.87（204件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,150〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107860%2F107860.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 平戸海上ホテル</td>
                <td className="p-3 text-stone-600">長崎県平戸市大久保町2231-3</td>
                <td className="p-3 text-stone-600">たびら平戸口駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場有り　60台　先着順　無料　電気自動車充電スタンド（EV充電）４台設置</td>
                <td className="p-3 font-bold text-amber-600">★3.71（1447件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16720%2F16720.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">田の浦温泉　旅館　田の浦温泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（たのうらおんせん　たのうらおんせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13466/13466_rm.jpg" alt="田の浦温泉　旅館　田の浦温泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>弘法大師空海開湯伝説と定置網、朝獲れ地魚・海席料理が好評です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県平戸市大久保町201-125 ／ 最寄り駅：たびら平戸口 ／ 交通案内：西九州自動車道　佐々町IC→江迎町→平戸大橋から25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「田の浦温泉　旅館　田の浦温泉は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">熱海温泉　熱海の癒（ゆ）　新かどや</h3>
                  <span className="text-xs text-stone-400 ml-2">（あたみおんせん　あたみのゆ　しんかどや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8223/8223_ke.jpg" alt="熱海温泉　熱海の癒（ゆ）　新かどや 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>屋上天空露天から熱海の街が一望。夕食朝食ともお部屋食でゆったりとできる和風温泉旅館です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県熱海市小嵐町14-8 ／ 最寄り駅：熱海 ／ 交通案内：★交通手段をお知らせください　車：小田原厚木道路より国道135号線にて約30分　電車：熱海駅よりタクシーで8分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　40台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事と花火の眺めに大満足予約時、最後の一部屋で、人数の割に手狭な部屋のみしか空いておらず心配してましたが、当日、空きが出たのか広いお部屋に通してくださりありがたかったです。花火も遠いかなと心配…　2026-07-28 23:36:27投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">そのぎ茶温泉里山の湯宿　つわぶきの花</h3>
                  <span className="text-xs text-stone-400 ml-2">（そのぎちゃおんせん　さとやまのゆやど　つわぶきのはな）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥24,590〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/180084/180084_kan1.jpg" alt="そのぎ茶温泉里山の湯宿　つわぶきの花 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>１３部屋の離れには露天風呂。自家栽培で山の惠みを丸ごと味わう。古き良き、日本の情緒をご堪能下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県東彼杵郡東彼杵町一ッ石郷981 ／ 最寄り駅：長崎空港 ／ 交通案内：長崎空港よりお車にて約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「自然と温泉、料理に癒やされすぐにでも再訪したい自然に囲まれて、ゆっくりと過ごすことができる素敵なお宿でした。山の中にあるのでとても静かで、日常を忘れてのんびりと過ごすことができました。…　2026-08-09 18:41:02投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルオークラＪＲハウステンボス</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるおーくらじぇいあーるはうすてんぼす）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,750〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9057/9057_twn.jpg" alt="ホテルオークラＪＲハウステンボス 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>スタッフのおもてなしに心和らぎ、天然温泉が疲れを癒す魅力あるリゾートホテルです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県佐世保市ハウステンボス町10 ／ 最寄り駅：ハウステンボス ／ 交通案内：西九州自動車道　佐世保大塔ICより車で15分/長崎空港よりバスで70分／JR博多駅より特急ハウステンボス号で110分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有、1泊1台あたり1000円 *到着日の朝から翌日正午まで。*2027年4月1日より1500円</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.63 ／ 立地 ★4.65 ／ 部屋 ★4.61 ／ 設備 ★4.53 ／ 風呂 ★4.47 ／ 食事 ★4.65</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「さすがオークラ、全てが完璧で大満足!娘と孫との利用でした。全てにおいて完璧で、さすがオークラって感じでした!ハイキングも種類が多く3泊しましたが、食べてない物もありました、とても美味しかっ…　2026-10-10 19:48:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル彩陽　ＷＡＫＩＧＡＷＡ（旧：平戸脇川ホテル）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるさいよう　わきがわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,150〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/107860/107860_kya.jpg" alt="ホテル彩陽　ＷＡＫＩＧＡＷＡ（旧：平戸脇川ホテル） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>平戸の入口に立地し２階以上の客室から平戸瀬戸や平戸城を見渡せます。新鮮な魚中心の料理が好評です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県平戸市岩の上町1123-1 ／ 最寄り駅：たびら平戸口 ／ 交通案内：たびら平戸口駅からお車で７分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（約25台）・無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「平戸物産館近く、食事と部屋は良いがランドリーに難あり平戸の市街地からは1km半ほど離れていますが、平戸物産館のすぐ近くで、平戸桟橋行きのバス停も物産館の前にあります。食事はおいしく、部屋も大浴…　2026-05-07 16:29:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">平戸海上ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひらど　かいじょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/16720/16720_wyo.jpg" alt="平戸海上ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>お部屋は全室オーシャンビューでごゆっくりお寛ぎいただけます♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県平戸市大久保町2231-3 ／ 最寄り駅：たびら平戸口 ／ 交通案内：松浦鉄道『たびら平戸口駅』→西肥バス『平戸桟橋』　／お車は西九州自動車道『佐々IC』→Ｒ２０４経由で約３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場有り　60台　先着順　無料　電気自動車充電スタンド（EV充電）４台設置</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「目の前の海と朝日、朝食の出汁が最高建物は老朽化していますがお部屋は広く 海の目の前朝日がお部屋から見れて最高なロケーションですシーツは 清潔でベッドも寝易かったです朝食の あご…　2026-08-22 12:51:51投稿」
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
    
      <HubRelatedPosts currentSlug="nagasaki-hirado-sasebo-kujukushima-stay" />
</div>
  );
}
