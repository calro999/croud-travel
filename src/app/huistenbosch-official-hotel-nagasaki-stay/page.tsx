import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/huistenbosch-official-hotel-nagasaki-stay/" },
  title: "ハウステンボス直営＆オフィシャルホテル：ヨーロッパの街並み＆イルミネーション宿 厳選ガイド",
  description: "日本一の広さを誇るテーマパーク完全特化！長崎ハウステンボス直営・オフィシャルホテル！パーク内運河に佇む「ホテルヨーロッパ」、場内唯一の天然温泉宿、1300万球の光の王国イルミネーション確約ビューホテルを徹底解説。",
  keywords: ["ハウステンボス直営", "オフィシャルホテル", "ヨーロッパの街並み", "イルミネーション宿", "温泉宿", "宿泊予約", "楽天トラベル"],
  openGraph: {
    title: "ハウステンボス直営＆オフィシャルホテル：ヨーロッパの街並み＆イルミネーション宿 厳選ガイド",
    description: "日本一の広さを誇るテーマパーク完全特化！長崎ハウステンボス直営・オフィシャルホテル！パーク内運河に佇む「ホテルヨーロッパ」、場内唯一の天然温泉宿、1300万球の光の王国イルミネーション確約ビューホテルを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ハウステンボス直営＆オフィシャルホテル：ヨーロッパの街並み＆イルミネーション宿 厳選ガイド",
    description: "日本一の広さを誇るテーマパーク完全特化！長崎ハウステンボス直営・オフィシャルホテル！パーク内運河に佇む「ホテルヨーロッパ」、場内唯一の天然温泉宿、1300万球の光の王国イルミネーション確約ビューホテルを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["huistenbosch-official-hotel-nagasaki-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for huistenbosch-official-hotel-nagasaki-stay", e);
  }
  return {};
}

export default function ThemeParkActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "huistenbosch_direct_luxury_hotel",
    "title": "1. ハウステンボス場内直営ホテル（専用クルーザーで運河を渡るチェックイン）",
    "timing": "通年（春のチューリップ祭・秋のハロウィーン・冬の光の街のクリスマス）",
    "desc": "ハウステンボス場内に位置する直営ホテル「ホテルヨーロッパ」「ホテルアムステルダム」。ウェルカムゲートから宿泊者専用カナルクルーザーで運河を進みホテルへチェックイン。毎夜ロビーで開催されるクラシック生演奏コンサート。",
    "spots": "ハウステンボス（タワーシティ、光のファンタジアシティ、フラワーロード、アンブレラストリート）",
    "access": "JR大村線「ハウステンボス駅」下車徒歩約5分。長崎空港より高速船で約50分。",
    "tip": "「ホテルヨーロッパ」に宿泊すると、開園前の静寂に包まれた朝のヨーロッパの街並みを誰もいない状態で優雅に散策できる特別な特権があります。"
  },
  {
    "key": "huistenbosch_official_onsen_stay",
    "title": "2. ハウステンボス温泉＆オフィシャルホテル群（黄金の湯と充実のバイキング）",
    "timing": "通年（ファミリー・カップルに快適なスパリゾート）",
    "desc": "JRハウステンボス駅前にそびえる「ホテルオークラJRハウステンボス」や「ホテル日航ハウステンボス」。100%源泉かけ流しの天然温泉「琴乃湯（黄金色のナトリウム塩化物泉）」。佐世保名物レモンステーキや長崎名物が並ぶ朝食。",
    "spots": "ホテルオークラJRハウステンボス（天然温泉・ベーカリー）、ホテル日航ハウステンボス（専用再入場ゲート）",
    "access": "JRハウステンボス駅前。",
    "tip": "ホテルオークラJRハウステンボスはアムステルダム中央駅を模した美しい外観で、館内の天然温泉露天風呂からはハウステンボスのカナルが望めます。"
  },
  {
    "key": "huistenbosch_illumination_view_stay",
    "title": "3. 日本一1300万球「光の王国」イルミネーション（客室の窓から望む光の海）",
    "timing": "通年（世界最大級のイルミネーションフェスティバル）",
    "desc": "全国イルミネーションランキングで10年連続第1位に輝く「光の王国」。光と音楽の噴水ショー「ウォーターマジック」、シンボルタワー「ドムトールン」の展望台。パークビュー客室の窓一面に広がる幻想的な光のパノラマ。",
    "spots": "アートガーデン（光の滝・光のオーケストラ）、ドムトールン展望台、白銀の世界、ファンタジアストリート",
    "access": "ハウステンボス場内各所。",
    "tip": "ドムトールン展望室（地上80m）へは夕暮れ時に登ると、夕陽に染まる大村湾と一斉に点灯する1300万球のイルミネーションを360度見渡せます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【ハウステンボス直営＆オフィシャルホテル】ヨーロッパの街並み＆イルミネーション宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "日本一の広さを誇るテーマパーク完全特化！長崎ハウステンボス直営・オフィシャルホテル！パーク内運河に佇む「ホテルヨーロッパ」、場内唯一の天然温泉宿、1300万球の光の王国イルミネーション確約ビューホテルを徹底解説。",
    "url": "https://croud-travel.pages.dev/huistenbosch-official-hotel-nagasaki-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【ハウステンボス直営＆オフィシャルホテル】ヨーロッパの街並み＆イルミネーション宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/huistenbosch-official-hotel-nagasaki-stay/" }
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
            HUIS TEN BOSCH HOTEL GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「ハウステンボス直営＆オフィシャルホテル」ヨーロッパの街並み＆イルミネーション宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ヨーロッパの街並みと運河が広がる異国情緒のワンダーランド「ハウステンボス」。専用クルーザーでチェックインする最高級ホテルヨーロッパや、パーク内直営ホテル。日本一の1300万球イルミネーションを客室から見下ろす贅沢な休日へ。
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
              📊 ハウステンボス直営＆オフィシャルホテル：ヨーロッパの街並み＆イルミネーション宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「ハウステンボス直営＆オフィシャルホテル：ヨーロッパの街並み＆イルミネーション宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ホテルヨーロッパ　ハウステンボス</td>
                <td className="p-3 text-stone-600">長崎県佐世保市ハウステンボス町7-7</td>
                <td className="p-3 text-stone-600">ハウステンボス駅周辺</td>
                <td className="p-3 text-stone-600">フロントにて無料券を発行しますので「宿泊者専用駐車場」をご利用ください。必ず出庫前にご精算ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.62（2434件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9159%2F9159.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテルアムステルダム　ハウステンボス</td>
                <td className="p-3 text-stone-600">長崎県佐世保市ハウステンボス町7-7</td>
                <td className="p-3 text-stone-600">ハウステンボス駅周辺</td>
                <td className="p-3 text-stone-600">フロントにて無料券を発行しますので「宿泊者専用駐車場」をご利用ください。必ず出庫前にご精算ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.6（2569件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9157%2F9157.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. フォレストヴィラ　ハウステンボス</td>
                <td className="p-3 text-stone-600">長崎県佐世保市ハウステンボス町7-7</td>
                <td className="p-3 text-stone-600">ハウステンボス駅周辺</td>
                <td className="p-3 text-stone-600">フロントにて無料券を発行しますので「宿泊者専用駐車場」をご利用ください。必ず出庫前にご精算ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.41（1075件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9156%2F9156.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                <td className="p-3 font-bold text-stone-900">5. 弓張の丘ホテル</td>
                <td className="p-3 text-stone-600">長崎県佐世保市鵜渡越町510</td>
                <td className="p-3 text-stone-600">佐世保駅周辺</td>
                <td className="p-3 text-stone-600">有り：１００台（無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.43（1716件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,336〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7808%2F7808.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 長崎スカイホテル</td>
                <td className="p-3 text-stone-600">長崎県長崎市江の浦町18-1</td>
                <td className="p-3 text-stone-600">長崎（長崎）駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　お車１台につき、普通車800円/中型車1,600円/大型車2,000円（税込）</td>
                <td className="p-3 font-bold text-amber-600">★4.16（417件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,980〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15312%2F15312.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルヨーロッパ　ハウステンボス</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるよーろっぱ　はうすてんぼす）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9159/9159_twn.jpg" alt="ホテルヨーロッパ　ハウステンボス 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ハウステンボス直営／ハウステンボス最上位ホテル。クラシカルな世界観と専用クルーズで贅沢なひと時を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県佐世保市ハウステンボス町7-7 ／ 最寄り駅：ハウステンボス ／ 交通案内：博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>フロントにて無料券を発行しますので「宿泊者専用駐車場」をご利用ください。必ず出庫前にご精算ください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「重厚感ある空間で夢のような特別な思い出すべてが素敵なお宿でキラキラしていて、特別な思い出になりました。お部屋もフロントも重厚感があり夢の国のようでした。ありがとうございます。クチコミの…　2026-08-29 12:22:23投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルアムステルダム　ハウステンボス</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるあむすてるだむ　はうすてんぼす）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157_twn.jpg" alt="ホテルアムステルダム　ハウステンボス 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ハウステンボス直営／ハウステンボステーマパーク内に位置する唯一のホテルで、抜群の立地と癒しの滞在を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県佐世保市ハウステンボス町7-7 ／ 最寄り駅：ハウステンボス ／ 交通案内：博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>フロントにて無料券を発行しますので「宿泊者専用駐車場」をご利用ください。必ず出庫前にご精算ください。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.6 ／ 立地 ★4.68 ／ 部屋 ★4.6 ／ 設備 ★4.42 ／ 風呂 ★4.28 ／ 食事 ★4.55</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ハウステンボス出入り自由で利便性も最高ハウステンボス出入り自由で今まで泊まったホテルの中でも一番良かったです子供達もおお喜びとにかく利便性がよくスタッフの方の対応もよかったですクチコミ…　2026-10-09 23:24:57投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">フォレストヴィラ　ハウステンボス</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふぉれすとう゛ぃら　はうすてんぼす）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9156/9156_twr.jpg" alt="フォレストヴィラ　ハウステンボス 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ハウステンボス直営／別荘感覚のメゾネットコテージで、家族や仲間と自由に賑やかなハウステンボス滞在を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県佐世保市ハウステンボス町7-7 ／ 最寄り駅：ハウステンボス ／ 交通案内：博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>フロントにて無料券を発行しますので「宿泊者専用駐車場」をご利用ください。必ず出庫前にご精算ください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「家族5人で広々、朝食も満足の美味しさ大人5人家族で宿泊。リビングも広く、ベッドルームも2部屋あったので、ゆっくり休む事ができました。朝食のクチコミがあまり良くなかったですが、そんなことなかった…　2026-08-28 17:17:11投稿」
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">弓張の丘ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆみはりのおかほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,336〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7808/7808_room.jpg" alt="弓張の丘ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【全客室リニューアル】◆佐世保の絶景を愉しむ贅沢な時間◆温泉・サウナ・駐車場完備◆朝食もさらに充実！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県佐世保市鵜渡越町510 ／ 最寄り駅：佐世保 ／ 交通案内：佐世保中央ＩＣよりお車で約10分　 佐世保駅より無料シャトルバス運行</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り：１００台（無料）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「景色は最高だが設備やサービスに不満あり綺麗なホテルでした。売店もお菓子から焼き物まで種類が多く、佐世保駅で買う予定を変更したほど満足しました。朝食2970円は高いお部屋にティッシュ…　2026-08-26 05:49:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">長崎スカイホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ながさき　すかいほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,980〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15312/15312_w.jpg" alt="長崎スカイホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>長崎1,000万＄の夜景を一望できる料理自慢のお宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県長崎市江の浦町18-1 ／ 最寄り駅：長崎（長崎） ／ 交通案内：JR長崎駅より車で10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　お車１台につき、普通車800円/中型車1,600円/大型車2,000円（税込）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「長崎を一望できる絶景、部屋はリフォーム済み長崎が一望できるホテル 稲佐山展望台に行く必要がないレベル。施設は少し時間が経ってるようだが、今回泊まらせて頂いた部屋はリフォーム済みで素敵な空間で泊まれ…　2026-08-17 01:16:14投稿」
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
    
      <HubRelatedPosts currentSlug="huistenbosch-official-hotel-nagasaki-stay" />
</div>
  );
}
