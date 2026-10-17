import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/infinity-open-air-bath-starry-sky-sleeping-onsen-stay/" },
  title: "満天の星空露天風呂＆寝湯インフィニティ宿：天然プラネタリウム温泉 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "湯船に浮かびながら星屑を数える！星空インフィニティ露天風呂＆寝湯温泉宿完全特化！群馬万座温泉（標高1,800m）、長野白骨温泉・野沢温泉、栃木奥日光湯元温泉、大分久住高原、遮るもののない天空露天風呂と湯浴み体験を徹底解説。",
  keywords: ["満天の星空露天風呂", "寝湯インフィニティ宿", "天然プラネタリウム温泉", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行"],
  openGraph: {
    title: "満天の星空露天風呂＆寝湯インフィニティ宿：天然プラネタリウム温泉 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "湯船に浮かびながら星屑を数える！星空インフィニティ露天風呂＆寝湯温泉宿完全特化！群馬万座温泉（標高1,800m）、長野白骨温泉・野沢温泉、栃木奥日光湯元温泉、大分久住高原、遮るもののない天空露天風呂と湯浴み体験を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "満天の星空露天風呂＆寝湯インフィニティ宿：天然プラネタリウム温泉 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "湯船に浮かびながら星屑を数える！星空インフィニティ露天風呂＆寝湯温泉宿完全特化！群馬万座温泉（標高1,800m）、長野白骨温泉・野沢温泉、栃木奥日光湯元温泉、大分久住高原、遮るもののない天空露天風呂と湯浴み体験を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["infinity-open-air-bath-starry-sky-sleeping-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for infinity-open-air-bath-starry-sky-sleeping-onsen-stay", e);
  }
  return {};
}

export default function StargazingHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "manza_sky_onsen_starry_stay",
    "title": "1. 群馬・万座温泉〜標高1,800m「星に一番近い温泉」（濃厚白濁硫黄泉と天空露天）",
    "timing": "通年（冬の雪見星空風呂・夏の爽快な高冷地露天）",
    "desc": "日本屈指の高所に湧く通年営業の温泉地「万座（まんざ）温泉」。硫黄含有量日本一を誇る乳白色のにごり湯。山々の稜線と満天の星空が溶け合う開放的な展望露天風呂。寝湯に横たわれば、頭上いっぱいに広がる無数の星座と流れ星。",
    "spots": "万座温泉（万座プリンスホテルこまくさの湯・万座高原ホテル石庭露天風呂）、万座空吹（からぶき）、志賀草津高原ルート",
    "access": "JR吾妻線「万座・鹿沢口駅」より路線バス約45分。上信越道「碓氷軽井沢IC」より約80分。",
    "tip": "万座温泉の露天風呂は夜間に最低限の足元灯のみとなり、漆黒の闇の中で乳白色の湯けむりと星空のコントラストが息を呑む幻想的な世界を作り出します。"
  },
  {
    "key": "kuju_highland_star_bath_stay",
    "title": "2. 大分・久住高原〜くじゅう連山パノラマ寝湯（九州一の星空リゾート）",
    "timing": "通年（春〜秋の緑の高原・澄み渡る秋の天の川）",
    "desc": "標高約800〜1,000m、阿蘇くじゅう国立公園に広がる「久住（くじゅう）高原」。見渡す限りの草原地帯で街明かりが完全に遮断された絶好の天体観測地。なだらかな傾斜がつけられた寝湯から仰ぐ南蛮船のような雄大な星空パノラマ。",
    "spots": "久住高原温泉郷（レゾネイトクラブくじゅう）、くじゅう花公園、ガンジーファーム、長者原湿原",
    "access": "JR豊肥本線「豊後竹田駅」より車約30分。大分道「九重IC」よりやまなみハイウェイ経由約50分。",
    "tip": "寝湯は首元に木枕が設置されており、耳元まで温かい温泉に浸かりながら、力を抜いて水面に浮かぶようなリラクゼーション体勢で星空を眺め続けられます。"
  },
  {
    "key": "okunikko_starry_open_air_stay",
    "title": "3. 栃木・奥日光湯元温泉〜標高1,500m白濁湯と静寂の森（湯ノ湖の星屑リフレクション）",
    "timing": "通年（新緑の6月・錦秋の10月・冬の雪見露天）",
    "desc": "日光白根山の山麓、湯ノ湖の畔に開かれた「奥日光湯元温泉」。エメラルドグリーンから白濁へと色を変える濃厚な硫黄泉。周囲を深い原生林に囲まれ、街灯が少ないため夜空の暗さは抜群。湯ノ湖の水面に映り込む逆さ星空。",
    "spots": "奥日光湯元温泉（湯元板屋・湯守釜屋）、湯ノ湖遊歩道、湯滝、戦場ヶ原（星空観察ポイント）",
    "access": "JR・東武日光駅より東武バス「湯元温泉行」で約75分。日光宇都宮道路「清滝IC」よりいろは坂経由約45分。",
    "tip": "戦場ヶ原の三本松展望デッキは全国から天体写真ファンが集まる屈指の星空撮影地で、湯元温泉の宿から車で約5〜10分でアクセスできます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【満天の星空露天風呂＆寝湯インフィニティ宿】天然プラネタリウム温泉 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "湯船に浮かびながら星屑を数える！星空インフィニティ露天風呂＆寝湯温泉宿完全特化！群馬万座温泉（標高1,800m）、長野白骨温泉・野沢温泉、栃木奥日光湯元温泉、大分久住高原、遮るもののない天空露天風呂と湯浴み体験を徹底解説。",
    "url": "https://croud-travel.pages.dev/infinity-open-air-bath-starry-sky-sleeping-onsen-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【満天の星空露天風呂＆寝湯インフィニティ宿】天然プラネタリウム温泉 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/infinity-open-air-bath-starry-sky-sleeping-onsen-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 text-white p-8 md:p-14 shadow-xl border border-indigo-400/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            STARGAZING INFINITY BATH & SLEEPING SPA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「満天の星空露天風呂＆寝湯インフィニティ宿」天然プラネタリウム温泉 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed">
            標高1,500mを超える高山温泉郷。明かりが届かない大自然の露天風呂で、湯船に仰向けに寝そべる「寝湯（ねゆ）」。頭上には手を伸ばせば届きそうな満天の星空と、湯面きらめく逆さ星屑。温かな湯に包まれながら宇宙と一体になる究極のリラクゼーションへ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-indigo-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-indigo-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-0.5 rounded-full uppercase">
                    🌌 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-indigo-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-1.5">
                  <span className="font-bold text-indigo-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-1.5">
                  <span className="font-bold text-purple-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
                  <span className="font-bold text-cyan-950 block text-[11px]">💡 星空鑑賞を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-indigo-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-indigo-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    星空展望宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-indigo-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-indigo-50/50 border-b border-indigo-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-indigo-800/40 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700 rounded-xl shadow transition"
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
              📊 満天の星空露天風呂＆寝湯インフィニティ宿：天然プラネタリウム温泉 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「満天の星空露天風呂＆寝湯インフィニティ宿：天然プラネタリウム温泉 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 伊香保温泉　ホテルいかほ銀水</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保557-23</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">有り：５０台（無料・予約制）</td>
                <td className="p-3 font-bold text-amber-600">★3.38（335件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,980〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7517%2F7517.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 天空の大地　久住高原ホテル</td>
                <td className="p-3 text-stone-600">大分県竹田市久住町久住4031</td>
                <td className="p-3 text-stone-600">豊後竹田駅周辺</td>
                <td className="p-3 text-stone-600">有　200台　無料（事前予約不要）</td>
                <td className="p-3 font-bold text-amber-600">★4.05（263件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108903%2F108903.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 久住温泉　フリューゲル久住　輝く星の大地</td>
                <td className="p-3 text-stone-600">大分県竹田市久住町都野6049-89</td>
                <td className="p-3 text-stone-600">豊後竹田駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.64（199件）</td>
                <td className="p-3 font-bold text-rose-600">¥37,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147507%2F147507.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. くじゅう高原温泉　レゾネイトクラブくじゅう</td>
                <td className="p-3 text-stone-600">大分県竹田市久住町大字有氏字広内1773</td>
                <td className="p-3 text-stone-600">豊後竹田駅周辺</td>
                <td className="p-3 text-stone-600">有り　屋外６０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.21（715件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,065〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28133%2F28133.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. クアパーク長湯</td>
                <td className="p-3 text-stone-600">大分県竹田市直入町長湯3041-1</td>
                <td className="p-3 text-stone-600">豊後竹田駅周辺</td>
                <td className="p-3 text-stone-600">有り　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.78（86件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176716%2F176716.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 奥日光湯元温泉　ゆの森</td>
                <td className="p-3 text-stone-600">栃木県日光市湯元2549-3</td>
                <td className="p-3 text-stone-600">東武日光駅周辺</td>
                <td className="p-3 text-stone-600">有り　１２台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.76（116件）</td>
                <td className="p-3 font-bold text-rose-600">¥41,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54497%2F54497.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　ホテルいかほ銀水</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　いかほぎんすい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,980〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7517/7517_bath.jpg" alt="伊香保温泉　ホテルいかほ銀水 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ペットと泊まれます♪上州三山や関東平野一望（谷川・白根・赤城）。新潟米と山海の幸を満喫。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保557-23 ／ 最寄り駅：渋川 ／ 交通案内：関越道 伊香保・渋川ＩＣより１５分。ＪＲ上越線「渋川駅」から乗り継ぎバス２０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り：５０台（無料・予約制）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ワンコと泊まれるホテル良い点ワンコと一緒に宿泊させていただきました。スタッフもとても感じが良い方ばかりです。特にお食事会場の仲居さんたちは皆さん笑顔でとても感じが良い方たちばかりでした。…　2026-08-18 15:12:09投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天空の大地　久住高原ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（くじゅうこうげんほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,450〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108903/108903_kya.jpg" alt="天空の大地　久住高原ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>源泉かけ流しの天然温泉で癒しの休日、広大なくじゅう連山に抱かれて、大自然の癒しの恵みを.</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県竹田市久住町久住4031 ／ 最寄り駅：豊後竹田 ／ 交通案内：やまなみハイウェイ『瀬の本』から車で10分/豊後竹田駅より車で30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　200台　無料（事前予約不要）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「久住山と阿蘇山を望む絶景に感動ホテルからは、これから登頂する久住山や阿蘇山を眺めることができ、気持ちよく宿泊することができました。クチコミの詳細はこちらから　https://review.tr…　2026-08-26 22:17:27投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">久住温泉　フリューゲル久住　輝く星の大地</h3>
                  <span className="text-xs text-stone-400 ml-2">（くじゅうおんせん　ふりゅーげるくじゅう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥37,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147507/147507_room.jpg" alt="久住温泉　フリューゲル久住　輝く星の大地 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室スイートルーム。離れには源泉かけ流しの内湯、露天風呂付。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県竹田市久住町都野6049-89 ／ 最寄り駅：豊後竹田 ／ 交通案内：豊後竹田駅からお車にて約３０分　 大分自動車道湯布院ICから６０分　熊本空港から１時間３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「丁寧な対応とブルーベリー狩りでリフレッシュ到着から、丁寧な対応で、とても気持ち良く過ごせました。ブルーベリーが取り放題で、自然も豊かで、とてもリフレッシュ出来ました。お部屋には、要所要所に、イ…　2026-08-24 12:38:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">くじゅう高原温泉　レゾネイトクラブくじゅう</h3>
                  <span className="text-xs text-stone-400 ml-2">（れぞねいと　くらぶ　くじゅう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,065〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28133/28133_r.jpg" alt="くじゅう高原温泉　レゾネイトクラブくじゅう 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>阿蘇くじゅう国立公園の敷地内、標高８６５ｍの久住高原に佇む自然との共鳴がコンセプトのリゾートホテル。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県竹田市久住町大字有氏字広内1773 ／ 最寄り駅：豊後竹田 ／ 交通案内：JR豊後竹田駅から約３０分／大分道・日田ＩＣから約９０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　屋外６０台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.33 ／ 立地 ★4.36 ／ 部屋 ★4.19 ／ 設備 ★4.02 ／ 風呂 ★4.09 ／ 食事 ★4.44</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「静かな環境と美味しい食事に大満足9月末に妻と気分転換の為ご利用させて頂きました。利用するのは4,5回目。とても静かで景色も良くまた食事もとても美味しく是非また利用したいと思います。フロントの方…　2026-10-10 19:26:17投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">クアパーク長湯</h3>
                  <span className="text-xs text-stone-400 ml-2">（くあぱーくながゆ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/176716/176716_kan1.jpg" alt="クアパーク長湯 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>クチコミ評価4.42★希少な自然炭酸泉と景観を楽しむ往復100mの「水着で入れる歩行湯」が自慢です◎</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県竹田市直入町長湯3041-1 ／ 最寄り駅：豊後竹田 ／ 交通案内：JR豊後竹田駅よりお車にて約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉は最高、スタッフのおもてなしも素敵温泉はノンケミカルで最高。スタッフのおもてなしの心もGoodクチコミの詳細はこちらから　https://review.travel.rakuten.co.…　2026-08-12 06:06:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">奥日光湯元温泉　ゆの森</h3>
                  <span className="text-xs text-stone-400 ml-2">（おくにっこうゆもとおんせん　ゆのもり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥41,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54497/54497_ky.jpg" alt="奥日光湯元温泉　ゆの森 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全12室◇天然温泉100％のにごり湯掛流しの露天風呂付◇美食＆名湯のスロータイムな癒し旅</p>
                  <p><strong>【所在地・アクセス】</strong>〒 栃木県日光市湯元2549-3 ／ 最寄り駅：東武日光 ／ 交通案内：東武日光駅から東武バス乗車、終点「湯元温泉」下車（約６０分）　日光東照宮まで車60分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１２台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.83 ／ 立地 ★4.67 ／ 部屋 ★4.61 ／ 設備 ★4.67 ／ 風呂 ★4.83 ／ 食事 ★4.83</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「満足度は高いがベッドの高級感が惜しい充分に満足でしたが、ベッドに高級感が無かったのは残念でしたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp…　2026-09-17 16:41:42投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！群馬県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、群馬県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Yubatake_%28Kusatsu_Onsen%29.jpg/1280px-Yubatake_%28Kusatsu_Onsen%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="草津温泉（湯畑）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">草津温泉（湯畑）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三名泉の一つで自然湧出量日本一を誇る温泉街のシンボル。毎分4,000リットルの源泉が湯滝となって湧き出し、湯もみ体験や夜のライトアップも人気です。 草津温泉（くさつおんせん）は、群馬県吾妻郡草津町草津界隈（江戸時代における上野国吾妻郡草津村界隈、幕藩体制下の上州御料草津村界隈〈初期は沼田藩知行〉）に所在する温泉である。草津白根山東麓に位置する。 毎分3万2300リットル以上の自然湧出量は日本一。室町時代には万里集九が有馬温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Ikaho_Onsen_03.jpg/1280px-Ikaho_Onsen_03.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="伊香保温泉（石段街）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">伊香保温泉（石段街）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">365段の石段が続く情緒溢れる温泉街。石段の両脇には射的場や土産物店、足湯が立ち並び、温泉まんじゅう発祥の地としても知られています。 伊香保温泉（いかほおんせん）は、群馬県渋川市伊香保町にある温泉。草津温泉と並んで県を代表する名湯で、上毛かるたでは「伊香保温泉 日本の名湯」と歌われている。 「伊香保温泉」として地域団体商標に登録されている。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富岡製糸場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治政府が設立した日本初の本格的な製糸工場であり、世界文化遺産。木骨レンガ造りの巨大な繰糸所や蚕室が良好に保存されており、日本の近代化の足跡を辿れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">吹割の滝（ふきわれのたき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「東洋のナイアガラ」と称されるダイナミックな滝。巨大な岩盤が割れ目の中に河川の水が吸い込まれるように流れ落ちる迫力ある景観が魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 群馬県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 群馬県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-950 bg-white hover:bg-indigo-50 border border-indigo-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="infinity-open-air-bath-starry-sky-sleeping-onsen-stay" />
</div>
  );
}
