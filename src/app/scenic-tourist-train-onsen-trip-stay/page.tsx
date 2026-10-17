import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/scenic-tourist-train-onsen-trip-stay/" },
  title: "観光列車＆極上温泉宿：サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "プレミアム観光列車で行く極上温泉旅完全特化！「サフィール踊り子」「観光特急しまかぜ」「特急ゆふいんの森」「ろくもん」「雪月花」の豪華車内体験、プレミアムシート、カフェ車両と沿線の名門温泉旅館を徹底解説。",
  keywords: ["観光列車", "極上温泉宿", "サフィール踊り子", "しまかぜ", "ゆふいんの森で行く名旅館", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "観光列車＆極上温泉宿：サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "プレミアム観光列車で行く極上温泉旅完全特化！「サフィール踊り子」「観光特急しまかぜ」「特急ゆふいんの森」「ろくもん」「雪月花」の豪華車内体験、プレミアムシート、カフェ車両と沿線の名門温泉旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "観光列車＆極上温泉宿：サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "プレミアム観光列車で行く極上温泉旅完全特化！「サフィール踊り子」「観光特急しまかぜ」「特急ゆふいんの森」「ろくもん」「雪月花」の豪華車内体験、プレミアムシート、カフェ車両と沿線の名門温泉旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["scenic-tourist-train-onsen-trip-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for scenic-tourist-train-onsen-trip-stay", e);
  }
  return {};
}

export default function TransitStyleHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "saphir_odoriko_izu_stay",
    "title": "1. サフィール踊り子（東京・新宿〜伊豆急下田：全席グリーン席のプレミアム列車）",
    "timing": "通年（相模湾の青い海を望む絶景ルート）",
    "desc": "全席がグリーン席以上の豪華特急「サフィール踊り子」。天窓付きのプレミアムグリーン席や個室、カフェテリア（食堂車）で提供される有名シェフ監修のラーメンやスイーツ。相模湾の水平線を眺めながら伊豆の温泉郷へ。",
    "spots": "サフィール踊り子カフェテリア車両、伊豆熱川・伊豆稲取・伊豆急下田駅周辺の名旅館",
    "access": "東京駅・新宿駅より直通約2時間30分。",
    "tip": "4名用・6名用の「グリーン個室」を予約すると、プライベート空間で家族や友人とカフェメニューを部屋に届けてもらえます。"
  },
  {
    "key": "shimakaze_iseshima_resort",
    "title": "2. 観光特急しまかぜ（大阪難波・京都・近鉄名古屋〜賢島：本革電動リクライニング）",
    "timing": "通年（伊勢神宮参拝と伊勢志摩のリアス式海岸リゾート）",
    "desc": "ハイグレードな本革電動リクライニングシートにマッサージ機能付きの「観光特急しまかぜ」。2階建てカフェ車両で味わう松阪牛重や海の幸ピラフ、地ビール。伊勢神宮参拝から英虞湾のラグジュアリーリゾートへ直行。",
    "spots": "しまかぜカフェ車両（2階席パノラマ）、鳥羽駅、鵜方駅、賢島駅周辺の名門リゾート",
    "access": "大阪難波・京都・近鉄名古屋より約2時間〜2時間30分。",
    "tip": "2階建てカフェ車両の「2階席」は、高い視点から伊勢志摩の豊かな自然や海を見渡せる特等席です。"
  },
  {
    "key": "yufuin_mori_kyushu_onsen",
    "title": "3. 特急ゆふいんの森（博多〜由布院・別府：木目調のハイデッカークラシックトレイン）",
    "timing": "通年（耳納連山や慈恩の滝を望む九州横断の旅）",
    "desc": "木の温もりあふれるクラシックなインテリアと高い視線のハイデッカー構造「特急ゆふいんの森」。ビュッフェカウンターで販売される特製スイーツ「ゆふいんわっぱ弁当」や地サイダー。由布岳を望む名旅館へ。",
    "spots": "ゆふいんの森ビュッフェ、由布院駅（足湯併設駅）、湯の坪街道、金鱗湖",
    "access": "博多駅より約2時間15分。",
    "tip": "列車が「慈恩の滝」の横を通過する際、車内アナウンスとともに速度を落として徐行運転してくれる絶景サービスがあります。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【観光列車＆極上温泉宿】サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "プレミアム観光列車で行く極上温泉旅完全特化！「サフィール踊り子」「観光特急しまかぜ」「特急ゆふいんの森」「ろくもん」「雪月花」の豪華車内体験、プレミアムシート、カフェ車両と沿線の名門温泉旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/scenic-tourist-train-onsen-trip-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【観光列車＆極上温泉宿】サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/scenic-tourist-train-onsen-trip-stay/" }
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
            SCENIC TRAIN & LUXURY RYOKAN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「観光列車＆極上温泉宿」サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            移動そのものが贅沢なエンターテインメント！パノラマ車窓から海や山を望むプレミアム観光列車「サフィール踊り子」「しまかぜ」「ゆふいんの森」。カフェ車両でスイーツや地ビールを味わい、終着駅で待つ極上の名門温泉宿へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* アクセス・移動ルート・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要発着点＆ルート</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 スムーズな旅のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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
              📊 観光列車＆極上温泉宿：サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「観光列車＆極上温泉宿：サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 下田温泉　黒船ホテル</td>
                <td className="p-3 text-stone-600">静岡県下田市柿崎3-8</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">当館の駐車場は建物の地下部分にございます。(高さ制限2.3ｍ/狭めのスペース/台数制限有り/無料)</td>
                <td className="p-3 font-bold text-amber-600">★4.21（2266件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,165〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1307%2F1307.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 松崎温泉　御宿しんしま</td>
                <td className="p-3 text-stone-600">静岡県賀茂郡松崎町宮内284</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">・1部屋1台無料でご利用いただけます。◆予約不要　◆追加1台につき1100円　◆マイクロバス利用可能</td>
                <td className="p-3 font-bold text-amber-600">★4.67（77件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108114%2F108114.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. グランドメルキュール伊勢志摩リゾート＆スパ</td>
                <td className="p-3 text-stone-600">三重県志摩市磯部町的矢笠取939-6</td>
                <td className="p-3 text-stone-600">志摩磯部駅周辺</td>
                <td className="p-3 text-stone-600">220台あり（無料・予約不可）</td>
                <td className="p-3 font-bold text-amber-600">★3.94（4177件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,120〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13971%2F13971.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 源泉掛け流しの離れ宿　由布院別邸　風の森</td>
                <td className="p-3 text-stone-600">大分県由布市湯布院町川南371-1</td>
                <td className="p-3 text-stone-600">由布院駅周辺</td>
                <td className="p-3 text-stone-600">◆◇ 無料の駐車場が有ります。予約は不要です。 ◆◇ １３台分停められます◆◇</td>
                <td className="p-3 font-bold text-amber-600">★4.64（127件）</td>
                <td className="p-3 font-bold text-rose-600">¥22,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54134%2F54134.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 由布院温泉　旅館　冨季の舎</td>
                <td className="p-3 text-stone-600">大分県由布市湯布院町川南814-1</td>
                <td className="p-3 text-stone-600">由布院駅周辺</td>
                <td className="p-3 text-stone-600">有　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4（126件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32186%2F32186.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 由布院温泉　湯富里の宿　一壷天</td>
                <td className="p-3 text-stone-600">大分県由布市湯布院町川上302-7</td>
                <td className="p-3 text-stone-600">由布院駅周辺</td>
                <td className="p-3 text-stone-600">無料で15台停められます。予約は不要です。</td>
                <td className="p-3 font-bold text-amber-600">★4.75（263件）</td>
                <td className="p-3 font-bold text-rose-600">¥33,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72871%2F72871.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下田温泉　黒船ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（しもだおんせん　くろふねほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,165〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1307/1307_heya.jpg" alt="下田温泉　黒船ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【全室オーシャンビュー】離れや客室露天風呂、プールをご堪能。伊豆・下田温泉の味覚に舌鼓。ペット可！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県下田市柿崎3-8 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急線「伊豆急下田駅」から徒歩13分、タクシーで3分。 車で沼津から当館まで伊豆縦貫道で90分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>当館の駐車場は建物の地下部分にございます。(高さ制限2.3ｍ/狭めのスペース/台数制限有り/無料)</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事の種類も味も最高、また行きたい!夕食、朝食共にご飯が全て美味しかったです!種類も多く本当にまだまだ食べたいと思うほど美味しくて大満足でした!毎年伊豆には行き、いろんなところに泊まり美味しい…　2026-08-29 21:17:15投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">松崎温泉　御宿しんしま</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつざきおんせん　おんやどしんしま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108114/108114_h.jpg" alt="松崎温泉　御宿しんしま 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>なまこ壁の町並みを散策♪　川沿いの遊歩道に面した静かな和風温泉宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県賀茂郡松崎町宮内284 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急下田駅から東海バス乗車５０分　（●松崎バスターミナル　●松崎小学校前　●松崎中学校前　）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>・1部屋1台無料でご利用いただけます。◆予約不要　◆追加1台につき1100円　◆マイクロバス利用可能</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「松崎温泉　御宿しんしまは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グランドメルキュール伊勢志摩リゾート＆スパ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐらんどめるきゅーるいせしまりぞーとあんどすぱ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,120〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13971/13971_room.jpg" alt="グランドメルキュール伊勢志摩リゾート＆スパ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>心と身体が満たされる、海と森に抱かれる贅沢なひととき</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県志摩市磯部町的矢笠取939-6 ／ 最寄り駅：志摩磯部 ／ 交通案内：近鉄 鵜方駅より定時シャトルバス約15分(予約不要　定時運行　公式HP参照)／伊勢西ＩＣよりお車約45分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>220台あり（無料・予約不可）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食ビュッフェが美味しくプールも満喫親族8人2部屋で利用しました。朝食のビュッフェも美味しいプールもあったので次回は水着を忘れないようにしようと思います!クチコミの詳細はこちらから　https…　2026-09-06 01:08:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">源泉掛け流しの離れ宿　由布院別邸　風の森</h3>
                  <span className="text-xs text-stone-400 ml-2">（げんせんかけながしのはなれやど　ゆふいんべってい　かぜのもり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥22,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54134/54134_k.jpg" alt="源泉掛け流しの離れ宿　由布院別邸　風の森 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【大人の隠れ家を体験したいアナタへ】絶品料理・全室離れ・トロりとした露天内湯付き</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県由布市湯布院町川南371-1 ／ 最寄り駅：由布院 ／ 交通案内：◆ 由布院駅より徒歩15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>◆◇ 無料の駐車場が有ります。予約は不要です。 ◆◇ １３台分停められます◆◇</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「源泉掛け流しの離れ宿　由布院別邸　風の森は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">由布院温泉　旅館　冨季の舎</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆふいんおんせん　りょかん　ふきのや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/32186/32186_h.jpg" alt="由布院温泉　旅館　冨季の舎 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>３棟ある離れには、内風呂と露天風呂付。その他に５つの貸切風呂がございます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県由布市湯布院町川南814-1 ／ 最寄り駅：由布院 ／ 交通案内：ＪＲ久大線　由布院駅より車で５分　徒歩１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　２０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「由布院温泉　旅館　冨季の舎は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">由布院温泉　湯富里の宿　一壷天</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆとりのやど　いっこてん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥33,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/72871/72871_gr.jpg" alt="由布院温泉　湯富里の宿　一壷天 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>一壷天では、古(骨董品）、新、和、洋のしつらいが見事にとけ合った大人の空間と時間をご堪能下さい</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県由布市湯布院町川上302-7 ／ 最寄り駅：由布院 ／ 交通案内：車/湯布院ICから県道216号。湯布院幹部交番を左折（7分）電車/JR由布院駅下車、車で約5分（2.5km）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料で15台停められます。予約は不要です。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「マタニティプランで非日常の癒やしを堪能マタニティプランで利用させてもらいました。由布院駅からタクシーで5分ほどで、山の中にあります。到着した瞬間から、スタッフの方の対応も素晴らしく、非日常を体…　2026-07-30 18:19:07投稿」
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
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="scenic-tourist-train-onsen-trip-stay" />
</div>
  );
}
