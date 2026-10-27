import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/yamanashi-yatsugatake-kiyosato-resort-stay/" },
  title: "山梨・八ヶ岳＆清里高原：清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 厳選ガイド",
  description: "八ヶ岳南麓・清里高原エリア完全特化！標高1,900mの絶景パノラマ「清里テラス」、森のクラフト村「萌木の村」、清泉寮の濃厚ソフトクリーム、天の川輝く星空と甲州ワイン・高原リゾートホテルを徹底解説。",
  keywords: ["山梨", "八ヶ岳", "清里高原", "清里テラス", "萌木の村", "八ヶ岳南麓", "星空温泉リゾート"],
  openGraph: {
    title: "山梨・八ヶ岳＆清里高原：清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 厳選ガイド",
    description: "八ヶ岳南麓・清里高原エリア完全特化！標高1,900mの絶景パノラマ「清里テラス」、森のクラフト村「萌木の村」、清泉寮の濃厚ソフトクリーム、天の川輝く星空と甲州ワイン・高原リゾートホテルを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "山梨・八ヶ岳＆清里高原：清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 厳選ガイド",
    description: "八ヶ岳南麓・清里高原エリア完全特化！標高1,900mの絶景パノラマ「清里テラス」、森のクラフト村「萌木の村」、清泉寮の濃厚ソフトクリーム、天の川輝く星空と甲州ワイン・高原リゾートホテルを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamanashi-yatsugatake-kiyosato-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamanashi-yatsugatake-kiyosato-resort-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kiyosato_terrace_view",
    "title": "1. サンメドウズ清里〜清里テラス（標高1900mの天空特等席ソファと富士山ビュー）",
    "timing": "グリーンシーズン：4月下旬〜11月上旬（初夏の爽快な高原・秋の紅葉パノラマ）",
    "desc": "パノラマリフトで標高1,900mの山頂へ。野辺山高原や富士山、南アルプスを見渡すウッドデッキに円形大型ソファが並ぶ「清里テラス」。清里スカイパフェを味わいながら雲の上に浮かぶような至福のひととき。",
    "spots": "サンメドウズ清里（パノラマリフト・清里テラス・カフェスタンド）、美し森（展望台・ツツジ群生地）",
    "access": "JR小海線「清里駅」より清里ピクニックバスで約20分。中央道須玉IC・小淵沢ICより車約25分。",
    "tip": "清里テラスのプレミアムシート（要予約・有料エリア）は、専用のガゼボベッドでシャンパンやスイーツを独占できます。"
  },
  {
    "key": "moeginomura_seisenryo_stay",
    "title": "2. 萌木の村〜清泉寮（森の中のメリーゴーラウンドと元祖濃厚ソフトクリーム）",
    "timing": "通年（新緑の散策・秋のクラフト市・冬の雪景色とイルミネーション）",
    "desc": "広大な森の中にクラフト工房やレストランが集まる「萌木の村」。森の中に佇むアンティークなメリーゴーラウンドや、八ヶ岳地ビール「タッチダウン」醸造所「ROCK」。清泉寮のジャージー牛濃厚ソフトクリーム。",
    "spots": "萌木の村（森のメリーゴーラウンド・オルゴール博物館ホール・オブ・ホールズ・ROCKのビーフカレー）、清泉寮（ジャージーハット・足湯）",
    "access": "清里駅より徒歩約10分（萌木の村）、清泉寮まで車・バス約5分。",
    "tip": "「ROCK」の名物ビーフカレーは、甲州ワインと地ビールでじっくり煮込んだ濃厚なルーに山盛りサラダが添えられた必食グルメです。"
  },
  {
    "key": "yatsugatake_wine_beef_luxury",
    "title": "3. 八ヶ岳南麓の高原美食＆星空露天（甲州ワインビーフと天の川ステイ）",
    "timing": "通年（満点の星空と澄みきった高原の空気）",
    "desc": "八ヶ岳の伏流水と澄んだ空気の中で育まれた「甲州ワインビーフ」や八ヶ岳湧水鱒。宿のディナーでは、勝沼や八ヶ岳のワイナリーから厳選された甲州ワインとのペアリング。夜は客室テラスや露天風呂から天の川を鑑賞。",
    "spots": "山梨県立八ヶ岳自然ふれあいセンター、道の駅南きよさと（ケーブルカー・花の森公園）",
    "access": "八ヶ岳南麓リゾートエリア。",
    "tip": "八ヶ岳エリアは街明かりが少なく空気の透明度が高いため、日本屈指の天体観測スポットとして知られています。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【山梨・八ヶ岳＆清里高原】清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "八ヶ岳南麓・清里高原エリア完全特化！標高1,900mの絶景パノラマ「清里テラス」、森のクラフト村「萌木の村」、清泉寮の濃厚ソフトクリーム、天の川輝く星空と甲州ワイン・高原リゾートホテルを徹底解説。",
    "url": "https://croud-travel.pages.dev/yamanashi-yatsugatake-kiyosato-resort-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【山梨・八ヶ岳＆清里高原】清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/yamanashi-yatsugatake-kiyosato-resort-stay/" }
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
            YATSUGATAKE KIYOSATO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「山梨・八ヶ岳＆清里高原」清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            南アルプスと富士山を一望する標高1,000m超の天空リゾート「山梨・八ヶ岳清里高原」。サンメドウズ清里の山頂デッキ「清里テラス」の特等席ソファ。小鳥のさえずりと満天の星空に包まれ、極上の休日へ。
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
              📊 山梨・八ヶ岳＆清里高原：清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「山梨・八ヶ岳＆清里高原：清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 清里高原リゾート（旧：清里高原ホテル）</td>
                <td className="p-3 text-stone-600">山梨県北杜市高根町清里3545</td>
                <td className="p-3 text-stone-600">清里駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.16（1143件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,920〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28379%2F28379.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 八ヶ岳の恵みを味わうレストラン＆ホテル　オーベルジュ清里</td>
                <td className="p-3 text-stone-600">山梨県北杜市高根町清里３５４５－９４３　コートドゥヴェール内</td>
                <td className="p-3 text-stone-600">清里駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★5（45件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28780%2F28780.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. グランドメルキュール八ヶ岳リゾート＆スパ</td>
                <td className="p-3 text-stone-600">山梨県北杜市大泉町西井出8240-1039</td>
                <td className="p-3 text-stone-600">甲斐大泉駅周辺</td>
                <td className="p-3 text-stone-600">有り 乗用車179台　無料（先着順）</td>
                <td className="p-3 font-bold text-amber-600">★4.23（4417件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,104〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7759%2F7759.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 八ヶ岳グレイスホテル</td>
                <td className="p-3 text-stone-600">長野県南佐久郡南牧村野辺山217-1</td>
                <td className="p-3 text-stone-600">野辺山駅周辺</td>
                <td className="p-3 text-stone-600">有り　７０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.54（2185件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38754%2F38754.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. １０００Ｍのおもてなし　八ヶ岳　ホテル風か</td>
                <td className="p-3 text-stone-600">山梨県北杜市小淵沢町上の原3989-1</td>
                <td className="p-3 text-stone-600">小淵沢駅周辺</td>
                <td className="p-3 text-stone-600">有り　35台　無料　予約不要　満車の場合は第２駐車場をご利用下さい。</td>
                <td className="p-3 font-bold text-amber-600">★4.52（1828件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53178%2F53178.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">清里高原リゾート（旧：清里高原ホテル）</h3>
                  <span className="text-xs text-stone-400 ml-2">（きよさとこうげんりぞーと（きゅう：きよさとこうげんほてる））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,920〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28379/28379_wy.jpg" alt="清里高原リゾート（旧：清里高原ホテル） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2026年5月1日（金）リニューアルオープン ―天空の青音リトリート‐Calm Blue―</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県北杜市高根町清里3545 ／ 最寄り駅：清里 ／ 交通案内：ＪＲ小海線「清里駅」よりお車で約５分／中央道「須玉ＩＣ」「長坂ＩＣ」より約３０分　※送迎バスはWEBにて完全予約制</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「観光地の情報不足、もっと工夫がほしい地元の観光地の詳細な情報にかけている。もっと楽しませるやり方があるのではないかと思う。クチコミの詳細はこちらから　https://review.travel…　2026-08-28 20:51:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">八ヶ岳の恵みを味わうレストラン＆ホテル　オーベルジュ清里</h3>
                  <span className="text-xs text-stone-400 ml-2">（やつがたけのめぐみをあじわうれすとらんあんどほてる　おーべるじゅきよさと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28780/28780_heya.jpg" alt="八ヶ岳の恵みを味わうレストラン＆ホテル　オーベルジュ清里 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>自家農園野菜を使ったレストランが人気！牧場、工房、農園など体験も充実のホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県北杜市高根町清里３５４５－９４３　コートドゥヴェール内 ／ 最寄り駅：清里 ／ 交通案内：JR小海線・清里駅から車で5分／中央道・長坂ICから25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「八ヶ岳の恵みを味わうレストラン＆ホテル　オーベルジュ清里は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グランドメルキュール八ヶ岳リゾート＆スパ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐらんどめるきゅーるやつがたけりぞーとあんどすぱ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,104〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7759/7759_din1.jpg" alt="グランドメルキュール八ヶ岳リゾート＆スパ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>八ヶ岳の大自然に囲まれた、家族みんなが笑顔になれる全天候型アミューズメントホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県北杜市大泉町西井出8240-1039 ／ 最寄り駅：甲斐大泉 ／ 交通案内：（電車）甲斐大泉駅より送迎バス定期便あり。ダイヤは公式HPをご覧ください。（車）長坂ＩＣより約１５分程</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り 乗用車179台　無料（先着順）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「子供の遊び場が充実、また行きたい!とにかく子供の遊び場が充実しており、4歳1歳も大喜びで、滞在中はほとんど遊んでいました。親としては旅行の工程を色々考えていましたが、ここでの遊びが楽しすぎてなかな…　2026-09-05 16:42:42投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">八ヶ岳グレイスホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（やつがたけ　ぐれいすほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38754/38754_he.jpg" alt="八ヶ岳グレイスホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全客室より八ヶ岳を一望★星空観察会★毎晩開催中！清里まで車で5分。直前割や一人旅も大歓迎！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県南佐久郡南牧村野辺山217-1 ／ 最寄り駅：野辺山 ／ 交通案内：野辺山駅より車で約5分（無料送迎あり・予約制／お電話または公式HPのご予約フォームより） 中央道・長坂ICより約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　７０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「雨でも星ソムリエの解説で大満足!満点の星空を見たくて予約しましたが、あいにく一晩中、雨でした。しかし、このホテルの売りの星ソムリエの方が、室内の簡易プラネタリウムで、ここから見える夜空を開設してい…　2026-08-31 17:21:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">１０００Ｍのおもてなし　八ヶ岳　ホテル風か</h3>
                  <span className="text-xs text-stone-400 ml-2">（やつがたけ　ほてるふうか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/53178/53178_wa.jpg" alt="１０００Ｍのおもてなし　八ヶ岳　ホテル風か 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>「オールインクルーシブ」ご夕食時約50種&amp;amp;バータイム約80種のフリードリンク</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県北杜市小淵沢町上の原3989-1 ／ 最寄り駅：小淵沢 ／ 交通案内：ＪＲ中央本線　小淵沢駅より車で7分／中央自動車道　小淵沢ＩＣより車で4分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　35台　無料　予約不要　満車の場合は第２駐車場をご利用下さい。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/53178?reviewId=33123479199416　2026-08-29 23:44:31投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山梨県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山梨県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">富士山（吉田ルート/五合目）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本の最高峰であり世界文化遺産の象徴。富士スバルラインで行く五合目は観光施設が充実し、眼下に雲海を望む圧巻のスタート地点です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">新倉山浅間公園（忠霊塔）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">五重塔（忠霊塔）越しに雄大な富士山と満開の桜を一望できる、世界中の観光客が熱望する「これぞ日本」という究極のアジアンビジュアルスポット。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富士五湖（河口湖）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の北麓に位置する静かな湖畔リゾート。四季折々の富士山が水面に映る「逆さ富士」や、大石公園のコキア・ラベンダー越しのアングルが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">勝沼ぶどうの丘</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本有数のワイン産地・勝沼の高台に立つ総合ワインリゾート。タパスとともに100種類以上の甲州ワインを試飲できる地下ワインカーヴが魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山梨県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山梨県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="yamanashi-yatsugatake-kiyosato-resort-stay" />
</div>
  );
}
