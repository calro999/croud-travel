import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/japan-top-brand-jidori-chicken-feast-stay/" },
  title: "日本三大地鶏＆銘柄鶏の宿：比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 厳選ガイド",
  description: "全国の最高級ブランド地鶏完全特化！秋田「比内地鶏」のきりたんぽ鍋、愛知「名古屋コーチン」のひきずり鍋、鹿児島「さつま若しゃも・地鶏刺し」、徳島「阿波尾鶏」の炭火焼きと名門温泉旅館を徹底解説。",
  keywords: ["日本三大地鶏", "銘柄鶏の宿", "比内地鶏", "名古屋コーチン", "さつま地鶏", "阿波尾鶏", "温泉宿"],
  openGraph: {
    title: "日本三大地鶏＆銘柄鶏の宿：比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 厳選ガイド",
    description: "全国の最高級ブランド地鶏完全特化！秋田「比内地鶏」のきりたんぽ鍋、愛知「名古屋コーチン」のひきずり鍋、鹿児島「さつま若しゃも・地鶏刺し」、徳島「阿波尾鶏」の炭火焼きと名門温泉旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "日本三大地鶏＆銘柄鶏の宿：比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 厳選ガイド",
    description: "全国の最高級ブランド地鶏完全特化！秋田「比内地鶏」のきりたんぽ鍋、愛知「名古屋コーチン」のひきずり鍋、鹿児島「さつま若しゃも・地鶏刺し」、徳島「阿波尾鶏」の炭火焼きと名門温泉旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-top-brand-jidori-chicken-feast-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-top-brand-jidori-chicken-feast-stay", e);
  }
  return {};
}

export default function GourmetCuisineHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hinai_jidori_akita_stay",
    "title": "1. 秋田・比内地鶏（日本三大地鶏・濃厚なガラ出汁と本場きりたんぽ鍋）",
    "timing": "通年（秋の新米・冬の熱々きりたんぽ鍋シーズンは格別）",
    "desc": "国の天然記念物「比内鶏」とロードアイランドレッドを交配した最高峰地鶏「比内地鶏」。比内地鶏のガラをじっくり煮込んだ黄金色の出汁、手揉みで炭火焼きした新米のきりたんぽ、セリの根っこ、舞茸とともに味わう秋田伝統の味。",
    "spots": "大館・鹿角・田沢湖・乳頭温泉郷・男鹿温泉郷",
    "access": "秋田新幹線「田沢湖駅」「大曲駅」、JR奥羽本線「大館駅」。",
    "tip": "きりたんぽ鍋は、比内地鶏の脂が出汁に溶け出したスープをたっぷり吸い込んだきりたんぽが最高の贅沢です。"
  },
  {
    "key": "nagoya_cochin_aichi_stay",
    "title": "2. 愛知・名古屋コーチン（100年以上の歴史を誇るコクと弾力・濃厚卵）",
    "timing": "通年（すき焼き仕立ての「ひきずり鍋」や親子丼）",
    "desc": "明治初期に作出された純血の地鶏「名古屋コーチン」。赤みを帯びた肉質は適度な脂肪と強いコク、弾力ある歯ごたえ。すき焼き仕立てで鶏肉を食べる「ひきずり鍋」や、濃厚な黄身を使った極上プリン・茶碗蒸し。",
    "spots": "名古屋市内、三河温泉郷（西浦温泉・三谷温泉）、下呂温泉、長良川温泉",
    "access": "東海道新幹線「名古屋駅」、名鉄・近鉄沿線。",
    "tip": "名古屋コーチンの卵は一般的な卵より卵黄が大きく濃厚で、お肉を溶き卵に絡めて食べると極上のハーモニーが生まれます。"
  },
  {
    "key": "satsuma_awaodori_south_stay",
    "title": "3. 鹿児島・さつま地鶏＆徳島・阿波尾鶏（南国の太陽が育むジューシーな旨味）",
    "timing": "通年（炭火の煙をまとわせる豪快な黒焼き）",
    "desc": "薩摩藩の闘鶏から生まれた「さつま地鶏」の新鮮な鳥刺しや炭火黒焼き。徳島県が誇る出荷量日本一の地鶏「阿波尾鶏」のジューシーなステーキやすだち添え。甘口の九州醤油や阿波すだちとともに味わう南国の旨味。",
    "spots": "鹿児島（霧島温泉・指宿温泉）、徳島（祖谷温泉・鳴門温泉）",
    "access": "九州新幹線「鹿児島中央駅」、JR徳島駅・高松駅。",
    "tip": "さつま地鶏の炭火焼きは、立ち上る炭の煙で真っ黒に燻すように焼くことで、独特の香ばしさと旨味が凝縮されます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【日本三大地鶏＆銘柄鶏の宿】比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "全国の最高級ブランド地鶏完全特化！秋田「比内地鶏」のきりたんぽ鍋、愛知「名古屋コーチン」のひきずり鍋、鹿児島「さつま若しゃも・地鶏刺し」、徳島「阿波尾鶏」の炭火焼きと名門温泉旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/japan-top-brand-jidori-chicken-feast-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【日本三大地鶏＆銘柄鶏の宿】比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/japan-top-brand-jidori-chicken-feast-stay/" }
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
            JAPAN TOP BRAND JIDORI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「日本三大地鶏＆銘柄鶏の宿」比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            噛むほどに溢れ出す濃厚な旨味と抜群の歯ごたえ！日本三大地鶏「比内地鶏」「名古屋コーチン」「さつま地鶏」そして出荷量日本一の「阿波尾鶏」。炭火でじっくり焼き上げる香ばしい焼き鳥や、伝統の郷土鍋に舌鼓を打つ美食の旅。
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

              {/* 食材の魅力・産地・味わいポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要産地＆代表的料理</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 主なアクセス＆名湯地</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 美味しく味わう極意</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの美食厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    美食プラン
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
              📊 日本三大地鶏＆銘柄鶏の宿：比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「日本三大地鶏＆銘柄鶏の宿：比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 効能溢れる癒しの湯治宿　玉川温泉</td>
                <td className="p-3 text-stone-600">秋田県仙北市田沢湖玉川渋黒沢国有林第3014林班ロ小班</td>
                <td className="p-3 text-stone-600">田沢湖駅周辺</td>
                <td className="p-3 text-stone-600">宿から5分ほど離れた場所にあります。当日係がご案内致します。</td>
                <td className="p-3 font-bold text-amber-600">★4.42（1012件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,830〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14338%2F14338.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 縄文のふる里　大湯温泉　ホテル鹿角</td>
                <td className="p-3 text-stone-600">秋田県鹿角市十和田大湯字中谷地５－１</td>
                <td className="p-3 text-stone-600">十和田南駅周辺</td>
                <td className="p-3 text-stone-600">有　２００台　無料　　　　　　　　　　　　　　　　★お得な宿泊プラン満載★</td>
                <td className="p-3 font-bold text-amber-600">★4.17（1489件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2974%2F2974.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 男鹿温泉　湯けむりリゾート　セイコーグランドホテル</td>
                <td className="p-3 text-stone-600">秋田県男鹿市北浦湯本草木原50-1</td>
                <td className="p-3 text-stone-600">羽立駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.09（708件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,770〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52102%2F52102.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. からまつ山荘　東兵衛温泉</td>
                <td className="p-3 text-stone-600">秋田県大仙市協和船岡東兵衛屋敷91</td>
                <td className="p-3 text-stone-600">秋田新幹線　角館駅よりお車にて約4０分</td>
                <td className="p-3 text-stone-600">有り　７１台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4（45件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158810%2F158810.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 犬山温泉　旬樹庵　八勝閣みづのを</td>
                <td className="p-3 text-stone-600">愛知県岐阜県各務原市鵜沼南町6-264</td>
                <td className="p-3 text-stone-600">犬山遊園駅周辺</td>
                <td className="p-3 text-stone-600">有り　15台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.15（477件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5306%2F5306.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 旅館　薩摩の里</td>
                <td className="p-3 text-stone-600">鹿児島県薩摩川内市樋脇町市比野4134</td>
                <td className="p-3 text-stone-600">川内（鹿児島）駅周辺</td>
                <td className="p-3 text-stone-600">有り　６０台　先着順　無料　　バイクの場合は屋根付きスペースを確保します（要連絡）</td>
                <td className="p-3 font-bold text-amber-600">★4.23（630件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13872%2F13872.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">効能溢れる癒しの湯治宿　玉川温泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（たまがわおんせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,830〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14338/14338_bath1.jpg" alt="効能溢れる癒しの湯治宿　玉川温泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日帰り入浴は午前10:00～午後3:00までです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 秋田県仙北市田沢湖玉川渋黒沢国有林第3014林班ロ小班 ／ 最寄り駅：田沢湖 ／ 交通案内：JR田沢湖駅前から路線バスで約70分。お車でお越しの場合盛岡IC～田沢湖経由で約100分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>宿から5分ほど離れた場所にあります。当日係がご案内致します。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「日本一の強酸温泉と絶品料理に大満足日本一の強酸温泉。ロケーション・泉質・食事どれをとっても掛け値なしに素晴らしいです。天然岩盤浴はロケーション含めて、本当に気持ちよく帰りたくなくなります。…　2026-08-22 12:08:02投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">縄文のふる里　大湯温泉　ホテル鹿角</h3>
                  <span className="text-xs text-stone-400 ml-2">（おおゆおんせん　かづの）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2974/2974_heya.jpg" alt="縄文のふる里　大湯温泉　ホテル鹿角 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>開湯800年の名湯と四季折々の彩りが添えられた料理を楽しむ。箱根・富士屋ホテルや花巻温泉もグループ。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 秋田県鹿角市十和田大湯字中谷地５－１ ／ 最寄り駅：十和田南 ／ 交通案内：■十和田湖より車で30分■ＪＲ花輪線十和田南駅から車で１２分■東北道十和田ＩＣから国道１０３号線を十和田湖方面へ１２分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　２００台　無料　　　　　　　　　　　　　　　　★お得な宿泊プラン満載★</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温かい料理に大満足、また泊まりたい!夜ご飯も温かいものは温かいまま食べれましたし、量もお腹いっぱいになり満足です。綺麗でまた泊まりたいと思うホテルでした。ありがとうございました。クチコミの…　2026-08-19 19:52:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">男鹿温泉　湯けむりリゾート　セイコーグランドホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（せいこーぐらんどほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,770〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/52102/52102_wa.jpg" alt="男鹿温泉　湯けむりリゾート　セイコーグランドホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>源泉かけ流し！当館自慢の「美肌の湯」と日本海の海幸を満喫。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 秋田県男鹿市北浦湯本草木原50-1 ／ 最寄り駅：羽立 ／ 交通案内：秋田自動車道秋田北IC下車６０ｋｍ７０分／JR羽立駅～路線バスで４５分／JR男鹿駅～無料送迎バスあり詳しくは公式HPへ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.18 ／ 立地 ★3.93 ／ 部屋 ★4.01 ／ 設備 ★3.86 ／ 風呂 ★4.11 ／ 食事 ★4.3</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「姉妹での古希祝い旅姉妹で古希祝いの旅行をしました。料理も美味しく思い出深いおもいでとなりました。お世話になりました。クチコミの詳細はこちらから　https://review.trave…　2026-10-10 14:04:36投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">からまつ山荘　東兵衛温泉</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/158810/158810_kan1.jpg" alt="からまつ山荘　東兵衛温泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>目前に迫る出羽山地の山々は圧巻！源泉かけ流し子宝・安産の湯でほっこり。夕食は秋田比内地鶏を堪能。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 秋田県大仙市協和船岡東兵衛屋敷91 ／ 最寄り駅：主要駅 ／ 交通案内：秋田新幹線　角館駅よりお車にて約4０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　７１台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「からまつ山荘　東兵衛温泉は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">犬山温泉　旬樹庵　八勝閣みづのを</h3>
                  <span className="text-xs text-stone-400 ml-2">（いぬやまおんせん　はっしょうかく　みづのを）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5306/5306_w.jpg" alt="犬山温泉　旬樹庵　八勝閣みづのを 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の表情を望む木曽川に面した眺望絶景の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛知県岐阜県各務原市鵜沼南町6-264 ／ 最寄り駅：犬山遊園 ／ 交通案内：名鉄犬山線犬山遊園駅より徒歩7分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　15台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「豪華な食事と広々とした部屋で大満足食事は大変豪華で食べきれないほどでした。お風呂もこじんまりとしていましたが貸し切り状態だったのでゆったりと入れました。お部屋はコネクティングルームだったの…　2026-08-17 17:05:42投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">旅館　薩摩の里</h3>
                  <span className="text-xs text-stone-400 ml-2">（さつまのさと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13872/13872_room.jpg" alt="旅館　薩摩の里 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>『天下の名泉』市比野温泉☆平静な環境の中で、源泉掛流し１００％天然温泉が楽しめる純和風温泉旅館♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鹿児島県薩摩川内市樋脇町市比野4134 ／ 最寄り駅：川内（鹿児島） ／ 交通案内：ＪＲ川内駅より車で２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　６０台　先着順　無料　　バイクの場合は屋根付きスペースを確保します（要連絡）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「昭和の雰囲気とラドン湯で湯治気分を満喫昭和の雰囲気漂う山里の宿で、ゆっくり温泉に浸かり味わい深い手料理を堪能するのに格好の場所です。周辺に飲み歩く場所やコンビニはありません。ラドン湯の泉質…　2026-07-18 07:14:32投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！徳島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、徳島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">鳴門の渦潮（大鳴門橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">播磨灘と紀伊水道の干満差によって発生する世界最大級の渦潮。「渦の道」の海上遊歩道ガラス床から見下ろす激しい潮流と渦巻きは大迫力です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">祖谷のかずら橋（秘境・祖谷）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三大秘境・祖谷渓谷に架かるシラクチカズラで作られたスリル満点の吊り橋。一歩踏みだすたびにギシギシと揺れ、足下の隙間から見える吉野川が爽快です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">大塚国際美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界初の陶板名画美術館。レオナルド・ダ・ヴィンチの『最後の晩餐』やフェルメールの『真珠の耳飾りの少女』など1,000点以上の西洋名画が原寸大で完全再現されています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">眉山（びざん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">徳島市街の中心に位置し「眉の如く雲居に見ゆる」と万葉集にも詠まれた徳島のシンボル。ロープウェイで登る山頂からは吉野川と徳島平野を一望できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 徳島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 徳島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="japan-top-brand-jidori-chicken-feast-stay" />
</div>
  );
}
