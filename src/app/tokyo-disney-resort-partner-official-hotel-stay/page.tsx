import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tokyo-disney-resort-partner-official-hotel-stay/" },
  title: "東京ディズニーリゾート®提携ホテル：オフィシャル＆パートナーホテル・無料シャトル宿 厳選ガイド",
  description: "夢の国を満喫するホテル選び完全特化！東京ディズニーランド®・東京ディズニーシー®直結のモノレール沿線オフィシャルホテル、パーク直通無料シャトルバス運行パートナーホテル、洗い場付きお風呂＆大浴場完備宿を徹底解説。",
  keywords: ["オフィシャル", "パートナーホテル", "無料シャトル宿", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行"],
  openGraph: {
    title: "東京ディズニーリゾート®提携ホテル：オフィシャル＆パートナーホテル・無料シャトル宿 厳選ガイド",
    description: "夢の国を満喫するホテル選び完全特化！東京ディズニーランド®・東京ディズニーシー®直結のモノレール沿線オフィシャルホテル、パーク直通無料シャトルバス運行パートナーホテル、洗い場付きお風呂＆大浴場完備宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "東京ディズニーリゾート®提携ホテル：オフィシャル＆パートナーホテル・無料シャトル宿 厳選ガイド",
    description: "夢の国を満喫するホテル選び完全特化！東京ディズニーランド®・東京ディズニーシー®直結のモノレール沿線オフィシャルホテル、パーク直通無料シャトルバス運行パートナーホテル、洗い場付きお風呂＆大浴場完備宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-disney-resort-partner-official-hotel-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-disney-resort-partner-official-hotel-stay", e);
  }
  return {};
}

export default function ThemeParkActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "maihama_official_bay_hotel",
    "title": "1. 舞浜ベイエリア・オフィシャルホテル（ディズニーリゾートラインでパーク直結）",
    "timing": "通年（ハロウィーン・クリスマス・春休み・イベント期間）",
    "desc": "東京ディズニーリゾート®内に位置する6つのオフィシャルホテル。ディズニーリゾートラインの「ベイサイド・ステーション」至近。ホテル内でパークチケット購入権利やパークの最新グッズが買える「ディズニー・ファンタジー」。オーシャンビュー客室。",
    "spots": "東京ディズニーランド®、東京ディズニーシー®、イクスピアリ、ディズニーリゾートライン（ベイサイド・ステーション）",
    "access": "JR京葉線・武蔵野線「舞浜駅」より無料シャトルバスまたはディズニーリゾートライン利用。",
    "tip": "オフィシャルホテル宿泊者は、JR舞浜駅前の「東京ディズニーリゾート・ウェルカムセンター」で荷物を預けるとホテルまで無料で届けてくれるバゲッジデリバリーサービスが利用できます。"
  },
  {
    "key": "shinurayasu_partner_family_stay",
    "title": "2. 新浦安・パートナーホテル（無料シャトルバス約15分＆大展望風呂付き）",
    "timing": "通年（ファミリー・3世代・グループ旅行に高コスパ）",
    "desc": "新浦安エリアに位置するパートナーホテル。パーク直通の「パートナーホテル・シャトル（無料）」が常時運行。全室洗い場付きお風呂や最上階の天然温泉展望大浴場。2段ベッド付きファミリールームやキッズスペース完備。",
    "spots": "新浦安駅直結商業施設、浦安市総合公園、大江戸温泉物語 浦安万華郷跡周辺",
    "access": "JR京葉線「新浦安駅」周辺。パークまで無料シャトルバスで約15分。",
    "tip": "パートナーホテル・シャトルは予約不要・無料で運行しており、閉園後の混雑した電車に乗ることなく座ってホテルまで戻れるのが最大のメリットです。"
  },
  {
    "key": "goodneighbor_tokyo_bay_stay",
    "title": "3. お台場＆幕張・グッドネイバーホテル（観光やショッピングも楽しむ複合ステイ）",
    "timing": "通年（東京観光・イベント参加とセットの旅）",
    "desc": "お台場・有明・新宿・幕張などに位置するグッドネイバーホテル。パークへの無料送迎バス「グッドネイバーホテル・シャトル（予約制）」運行。夜景の美しい高層階客室、豪華な朝食ビュッフェ、ショッピングモール直結の利便性。",
    "spots": "お台場海浜公園、アクアシティお台場、東京ビッグサイト、幕張メッセ",
    "access": "都内各主要駅・空港よりリムジンバス運行。",
    "tip": "グッドネイバーホテル・シャトルは完全事前予約制のため、宿泊予約が完了したらすぐにホテルの公式サイト等からバスの座席を確保しましょう。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【東京ディズニーリゾート®提携ホテル】オフィシャル＆パートナーホテル・無料シャトル宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "夢の国を満喫するホテル選び完全特化！東京ディズニーランド®・東京ディズニーシー®直結のモノレール沿線オフィシャルホテル、パーク直通無料シャトルバス運行パートナーホテル、洗い場付きお風呂＆大浴場完備宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/tokyo-disney-resort-partner-official-hotel-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【東京ディズニーリゾート®提携ホテル】オフィシャル＆パートナーホテル・無料シャトル宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tokyo-disney-resort-partner-official-hotel-stay/" }
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
            DISNEY RESORT HOTEL GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「東京ディズニーリゾート®提携ホテル」オフィシャル＆パートナーホテル・無料シャトル宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            開園から閉園まで時間を気にせず夢の世界に浸る「東京ディズニーリゾート®提携ホテル」。パーク内・舞浜エリアのオフィシャルホテルや新浦安のパートナーホテル。無料シャトルバス、ホテル内ショップ、疲れた体を癒やす展望大浴場へ。
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

              {/* パーク特典・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要アトラクション＆スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆シャトル運行</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 パーク＆アクティビティ満喫のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選ホテル</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    提携プラン
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
              📊 東京ディズニーリゾート®提携ホテル：オフィシャル＆パートナーホテル・無料シャトル宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「東京ディズニーリゾート®提携ホテル：オフィシャル＆パートナーホテル・無料シャトル宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 舞浜ビューホテル　ｂｙ　ＨＵＬＩＣ</td>
                <td className="p-3 text-stone-600">千葉県浦安市舞浜1-34</td>
                <td className="p-3 text-stone-600">舞浜駅周辺</td>
                <td className="p-3 text-stone-600">1泊3300円 2泊4700円 3泊以上6100円  到着日0時〜出発日14時まで／超過は別料金</td>
                <td className="p-3 font-bold text-amber-600">★4.49（11992件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,398〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54127%2F54127.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 東京ベイ舞浜ホテル　ファーストリゾート</td>
                <td className="p-3 text-stone-600">千葉県浦安市舞浜1-6</td>
                <td className="p-3 text-stone-600">舞浜駅周辺</td>
                <td className="p-3 text-stone-600">【ご宿泊日当日0:00～翌日14:00】 1泊3000円 ※時間外　300円/30分</td>
                <td className="p-3 font-bold text-amber-600">★4.32（14269件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,112〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27929%2F27929.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. グランドニッコー東京ベイ　舞浜</td>
                <td className="p-3 text-stone-600">千葉県浦安市舞浜1-7</td>
                <td className="p-3 text-stone-600">舞浜駅周辺</td>
                <td className="p-3 text-stone-600">有　1泊3,100円。2泊目以降、1泊に付き+1,600円（午前7時〜午後1時迄）※EV車充電器有</td>
                <td className="p-3 font-bold text-amber-600">★4.62（7482件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179245%2F179245.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 三井ガーデンホテル　プラナ東京ベイ</td>
                <td className="p-3 text-stone-600">千葉県浦安市明海6-2-1</td>
                <td className="p-3 text-stone-600">舞浜駅周辺</td>
                <td className="p-3 text-stone-600">1泊目入庫より30時間2000円　2泊目以降は24時間2000円</td>
                <td className="p-3 font-bold text-amber-600">★4.45（14529件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67046%2F67046.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテルエミオン東京ベイ</td>
                <td className="p-3 text-stone-600">千葉県浦安市日の出1-1-1</td>
                <td className="p-3 text-stone-600">新浦安駅周辺</td>
                <td className="p-3 text-stone-600">有料　平面駐車場　338台（出入口ゲート高さ制限 2.5m）予約不可</td>
                <td className="p-3 font-bold text-amber-600">★4.64（12183件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38529%2F38529.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ホテルイースト２１東京（オークラホテルズ＆リゾーツ）</td>
                <td className="p-3 text-stone-600">東京都江東区東陽6-3-3</td>
                <td className="p-3 text-stone-600">東陽町駅周辺</td>
                <td className="p-3 text-stone-600">有（地下駐車場 車高2.1Ｍまで)1泊1台1,500円</td>
                <td className="p-3 font-bold text-amber-600">★4.42（4943件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,088〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4822%2F4822.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">舞浜ビューホテル　ｂｙ　ＨＵＬＩＣ</h3>
                  <span className="text-xs text-stone-400 ml-2">（マイハマビューホテル　バイヒューリック）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,398〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54127/54127_hr.jpg" alt="舞浜ビューホテル　ｂｙ　ＨＵＬＩＣ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>円形の外観が目を引く東京ディズニーリゾート(R)オフィシャルホテル。サウナ付き大浴場で寛ぎの滞在を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 千葉県浦安市舞浜1-34 ／ 最寄り駅：舞浜 ／ 交通案内：JR舞浜駅より無料送迎バス約5分/ディズニーリゾートライン「ベイサイド・ステーション」より約4分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊3300円 2泊4700円 3泊以上6100円  到着日0時〜出発日14時まで／超過は別料金</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.52 ／ 立地 ★4.45 ／ 部屋 ★4.53 ／ 設備 ★4.42 ／ 風呂 ★4.42 ／ 食事 ★4.49</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋のお風呂が大きく、また利用したい1部屋4人(子供1人含む)で宿泊しました。部屋にあったお風呂は大きめでよかったです。女性用の化粧水乳液は問い合わせないと頂けない仕様になっていました。…　2026-10-10 23:28:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東京ベイ舞浜ホテル　ファーストリゾート</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうきょうべいまいはまほてる　ふぁーすとりぞーと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,112〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/27929/27929.jpg" alt="東京ベイ舞浜ホテル　ファーストリゾート 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【舞浜】東京ディズニーリゾート(R)オフィシャルホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 千葉県浦安市舞浜1-6 ／ 最寄り駅：舞浜 ／ 交通案内：ＪＲ舞浜駅より無料送迎バス約１０分、ＪＲ舞浜駅からディズニーリゾートラインでベイサイドステーション下車　送迎バスで約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【ご宿泊日当日0:00～翌日14:00】 1泊3000円 ※時間外　300円/30分</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地良水回りの掃除が行き届いてなくて残念でした。洗面台、トイレ、バスルーム...髪の毛や汚れが気になって、掃除道具をお借りしたいと思ったくらい。低価格だったから?でも立地はよく、スタッフ皆さん…　2026-08-22 21:06:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グランドニッコー東京ベイ　舞浜</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐらんどにっこーとうきょうべい　まいはま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/179245/179245.jpg" alt="グランドニッコー東京ベイ　舞浜 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>東京ディズニーリゾート（R）・オフィシャルホテル。上質空間で特別なひと時を</p>
                  <p><strong>【所在地・アクセス】</strong>〒 千葉県浦安市舞浜1-7 ／ 最寄り駅：舞浜 ／ 交通案内：舞浜駅よりディズニーリゾートラインにて2駅目「ベイサイド・ステーション」下車後、徒歩約４分※舞浜駅より送迎バスも有り</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　1泊3,100円。2泊目以降、1泊に付き+1,600円（午前7時〜午後1時迄）※EV車充電器有</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.64 ／ 立地 ★4.66 ／ 部屋 ★4.62 ／ 設備 ★4.54 ／ 風呂 ★4.41 ／ 食事 ★4.64</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「眺めとバイキングに大満足、次は別の部屋へお部屋はキレイに清掃されていました。シャワーブースがシャンプー等置く場所がなく、不便でした。窓からの眺めは良くて、さすがバイキングはどれも美味しく、…　2026-10-10 20:40:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">三井ガーデンホテル　プラナ東京ベイ</h3>
                  <span className="text-xs text-stone-400 ml-2">（みついがーでんほてる　ぷらなとうきょうべい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67046/67046_room.jpg" alt="三井ガーデンホテル　プラナ東京ベイ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>楽天トラベルHotel &amp;amp; Ryokan of the Year 2024受賞！展望大浴場は終夜営業</p>
                  <p><strong>【所在地・アクセス】</strong>〒 千葉県浦安市明海6-2-1 ／ 最寄り駅：舞浜 ／ 交通案内：東京ディズニーランド（Ｒ）・バスターミナル・イースト6番乗り場からパートナーホテル・シャトルで約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊目入庫より30時間2000円　2泊目以降は24時間2000円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「接客と朝食は良いが、製氷機の衛生面が不快接客サービスは良かったです。朝食ブッフェも満足です。お部屋の広さ、洗面所お風呂の清潔度、大浴場は期待したほどではありませんでした。施設の老朽化を…　2026-08-13 23:54:13投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルエミオン東京ベイ</h3>
                  <span className="text-xs text-stone-400 ml-2">（えみおん　とうきょう　べい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38529/38529_ro.jpg" alt="ホテルエミオン東京ベイ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>椰子の木とゆとりある客室と天然温泉で、笑顔あふれるひとときを。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 千葉県浦安市日の出1-1-1 ／ 最寄り駅：新浦安 ／ 交通案内：JR京葉線・武蔵野線／新浦安駅より徒歩約７分　※東京ディズニーランド（R)発のホテル行きのシャトルバスも利用可／約１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有料　平面駐車場　338台（出入口ゲート高さ制限 2.5m）予約不可</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「子どもの急な体調不良にも丁寧に対応していただき、とても感謝しています。またぜひ利用させていただきたいと思います。クチコミの詳細はこちらから　https://review.travel.rakute…　2026-08-29 20:28:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルイースト２１東京（オークラホテルズ＆リゾーツ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（いーすと　にじゅういち　とうきょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,088〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4822/4822_heya.jpg" alt="ホテルイースト２１東京（オークラホテルズ＆リゾーツ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>東京駅から電車で約30分！東陽町駅から徒歩7分！19世紀のヨーロッパの雰囲気漂うホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 東京都江東区東陽6-3-3 ／ 最寄り駅：東陽町 ／ 交通案内：東京メトロ東西線「東陽町駅」1番出口より徒歩約７分、JR錦糸町駅から都営バスで約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有（地下駐車場 車高2.1Ｍまで)1泊1台1,500円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの笑顔と広くて綺麗な部屋に満足スタッフの皆さんはいつもにこやかに対応してくださいますお部屋も広くてきれいで良心的なチャージですので何回も利用させていただいていますクチコミの詳細…　2026-08-22 14:54:57投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！東京都の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、東京都を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">浅草寺・雷門</h3>
                <p className="text-xs text-stone-600 leading-relaxed">都内最古の寺院であり、巨大な大提灯が吊り下げられた「雷門」が東京観光の顔。仲見世通りには名物の人形焼きや煎餅店が立ち並び江戸風情を色濃く残します。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">東京タワー</h3>
                <p className="text-xs text-stone-600 leading-relaxed">昭和33年に開業した高さ333mの赤と白の総合電波塔。メインデッキやトップデッキからの都心のナイトビューと季節ごとのライトアップが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">東京スカイツリー</h3>
                <p className="text-xs text-stone-600 leading-relaxed">高さ634mを誇る世界一高い自立式電波塔。地上350m・450mの展望台からは関東一円を見渡せる超パノラマ絶景が広がり、商業施設ソラマチも隣接しています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">明治神宮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治天皇と昭憲皇太后をお祀りする神社。都会の真ん中にありながら約70ヘクタールの豊かな人工林に囲まれた清らかな癒やしとパワーのスポットです。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 東京都エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 東京都の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="tokyo-disney-resort-partner-official-hotel-stay" />
</div>
  );
}
