import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/dark-sky-reserve-nature-island-starry-resort-stay/" },
  title: "国際星空保護区＆離島ネイチャーステイ：石垣島・西表島・神津島 厳選ガイド",
  description: "世界が認めた奇跡の暗闇と星空！国際ダークスカイ協会認定「星空保護区」＆離島リゾート宿完全特化！沖縄「西表石垣国立公園（全天88星座中84星座）」、東京「神津島」、岡山「美星町」、南十字星観察・ビーチ星空ナイトツアーを徹底解説。",
  keywords: ["国際星空保護区", "離島ネイチャーステイ", "石垣島", "西表島", "神津島", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "国際星空保護区＆離島ネイチャーステイ：石垣島・西表島・神津島 厳選ガイド",
    description: "世界が認めた奇跡の暗闇と星空！国際ダークスカイ協会認定「星空保護区」＆離島リゾート宿完全特化！沖縄「西表石垣国立公園（全天88星座中84星座）」、東京「神津島」、岡山「美星町」、南十字星観察・ビーチ星空ナイトツアーを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "国際星空保護区＆離島ネイチャーステイ：石垣島・西表島・神津島 厳選ガイド",
    description: "世界が認めた奇跡の暗闇と星空！国際ダークスカイ協会認定「星空保護区」＆離島リゾート宿完全特化！沖縄「西表石垣国立公園（全天88星座中84星座）」、東京「神津島」、岡山「美星町」、南十字星観察・ビーチ星空ナイトツアーを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["dark-sky-reserve-nature-island-starry-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for dark-sky-reserve-nature-island-starry-resort-stay", e);
  }
  return {};
}

export default function StargazingHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ishigaki_iriomote_dark_sky_stay",
    "title": "1. 沖縄・西表石垣国立公園〜石垣島・西表島（日本初の国際星空保護区）",
    "timing": "通年（南十字星：12月下旬〜6月中旬・夏の天の川：7月〜10月）",
    "desc": "全天88星座のうち実に84星座、21個ある一等星のすべてを観測できる奇跡の島々。日本で初めて国際ダークスカイ協会により「星空保護区（ダークスカイ・パーク）」に認定。水平線すれすれに南十字星が輝く夜。ビーチに寝転がって仰ぐ満天の星。",
    "spots": "石垣島天文台、フサキビーチ、川平湾、西表島ピナイサーラの滝、星空ナイトツアー",
    "access": "南ぬ島石垣空港直行便。石垣港離島ターミナルより西表島へ高速船で約45分。",
    "tip": "石垣島の「フサキビーチ」などのリゾートホテルでは、ビーチにリクライニングチェアが並べられ、波のせせらぎを聞きながらカクテル片手に星空を眺められます。"
  },
  {
    "key": "kouzushima_tokyo_dark_sky_stay",
    "title": "2. 東京・神津島〜ダークスカイ・アイランド（東京都心から行ける奇跡の星空島）",
    "timing": "通年（夏の天の川・冬のオリオン座と澄み切った大気）",
    "desc": "東京都の伊豆諸島に位置し、アジアで2番目・日本で2番目に国際星空保護区（ダークスカイ・アイランド）に認定された「神津島（こうづしま）」。島民が一丸となって光害対策を実施し、夜になると街全体が本物の暗闇に。赤崎遊歩道での星空ガイドツアー。",
    "spots": "赤崎遊歩道、天上山（花の百名山・ハートの砂地）、前浜海岸、神津島温泉保養センター",
    "access": "東京・竹芝桟橋より高速ジェット船で約3時間45分、または調布飛行場より飛行機で約45分。",
    "tip": "神津島では地元認定ガイド「星空案内人」によるナイトツアーが人気で、レジャーシートに寝転がりながらレーザーポインターを使った星座解説を聞くことができます。"
  },
  {
    "key": "bisei_okayama_astronomy_stay",
    "title": "3. 岡山・井原市美星町〜星空を守る光害防止条例の街（アジア初のダークスカイ・コミュニティ）",
    "timing": "通年（秋〜冬の澄んだ夜空・美星天文台公開観測会）",
    "desc": "日本で初めて自治体として「光害防止条例」を制定した星の街「美星町（びせいちょう）」。アジア初の「ダークスカイ・コミュニティ」認定。口径101cmの巨大反射望遠鏡を備えた「美星天文台」。星空を見上げるペンションや古民家宿での滞在。",
    "spots": "美星天文台、中世夢が原、星の郷青空市、美星スペースガードセンター",
    "access": "JR伯備線「備中高梁駅」より車約30分。山陽道「笠岡IC」より約40分。",
    "tip": "美星天文台は夜間一般公開を行っており、口径101cmの望遠鏡で遠い銀河や星雲、惑星の細部までリアルタイムで観察することができます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【国際星空保護区＆離島ネイチャーステイ】石垣島・西表島・神津島 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "世界が認めた奇跡の暗闇と星空！国際ダークスカイ協会認定「星空保護区」＆離島リゾート宿完全特化！沖縄「西表石垣国立公園（全天88星座中84星座）」、東京「神津島」、岡山「美星町」、南十字星観察・ビーチ星空ナイトツアーを徹底解説。",
    "url": "https://croud-travel.pages.dev/dark-sky-reserve-nature-island-starry-resort-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【国際星空保護区＆離島ネイチャーステイ】石垣島・西表島・神津島 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/dark-sky-reserve-nature-island-starry-resort-stay/" }
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
            DARK SKY RESERVE & ISLAND GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「国際星空保護区＆離島ネイチャーステイ」石垣島・西表島・神津島 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed">
            街明かりの影響を極限まで抑えた、世界基準の美しい夜空「国際星空保護区（ダークスカイ・プレイス）」。全天88星座のうち84星座が見られる八重山諸島（石垣島・西表島）や、東京都心から行ける神津島。波の音をBGMにビーチで眺める本物の天の川と南十字星の旅へ。
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
                          rel="sponsored noopener noreferrer"
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
              📊 国際星空保護区＆離島ネイチャーステイ：石垣島・西表島・神津島 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「国際星空保護区＆離島ネイチャーステイ：石垣島・西表島・神津島 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ホテル星立　西表島＜西表島＞</td>
                <td className="p-3 text-stone-600">沖縄県八重山郡竹富町西表949</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.6（48件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,690〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172112%2F172112.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 石垣島ビーチホテルサンシャイン＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市新川2484</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">有り（70台）　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.54（380件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13633%2F13633.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルエメラルドアイル石垣島　＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市美崎町7-14</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">当ホテルに駐車場のご用意はございませんので、近隣の有料コインパーキングをご利用下さいませ。</td>
                <td className="p-3 font-bold text-amber-600">★4.26（355件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,721〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149092%2F149092.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルイーストチャイナシー　＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市美崎町2-8</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">駐車場はございません。ホテルの隣に市営の駐車場がございます。(1時間100円、夜間1時間50円)</td>
                <td className="p-3 font-bold text-amber-600">★4.33（965件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28513%2F28513.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 神津島　民宿　菊乃屋＜神津島＞</td>
                <td className="p-3 text-stone-600">東京都神津島村377</td>
                <td className="p-3 text-stone-600">神津島空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　無料　要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.3（39件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172885%2F172885.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 山下別館　＜神津島＞</td>
                <td className="p-3 text-stone-600">東京都神津島村2番地</td>
                <td className="p-3 text-stone-600">神津島前浜港駅周辺</td>
                <td className="p-3 text-stone-600">有り・無料</td>
                <td className="p-3 font-bold text-amber-600">★3.85（76件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38770%2F38770.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル星立　西表島＜西表島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほしたて　いりおもてじま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,690〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172112/172112_kan1.jpg" alt="ホテル星立　西表島＜西表島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>目の前に広がるコバルトブルーの海！満点の星空、雄大なサンセットに感動！嬉しい朝食無料サービス♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県八重山郡竹富町西表949 ／ 最寄り駅：石垣空港 ／ 交通案内：石垣島の「離島ターミナル」から上原港まで約50分、上原港からバスで約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ホテル星立　西表島＜西表島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">石垣島ビーチホテルサンシャイン＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（びーちほてる　さんしゃいん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13633/13633_room.jpg" alt="石垣島ビーチホテルサンシャイン＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>海・空・星・風－素朴な贅沢をあなたに。島内唯一の展望露天風呂や海辺のレストランで癒しのひとときを。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市新川2484 ／ 最寄り駅：石垣空港 ／ 交通案内：新石垣空港からタクシーで約30分（約4,500円）離島ターミナル（石垣港）からバスまたはタクシーで約12分の好立地</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（70台）　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「海と空を望む絶景とプールで癒やされる台風の影響で急遽西表島から石垣島に退避することになり、2泊3日で予約させていただきました。中庭のプールと海との一体感がとても気持ちよかったです。また、新…　2026-08-30 21:59:58投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルエメラルドアイル石垣島　＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（えめらるどあいるいしがきじま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,721〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/149092/149092.jpg" alt="ホテルエメラルドアイル石垣島　＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>朝食口コミ4.6獲得★手作りおむすびは自慢の味。「八重山諸島の玄関口」離島ターミナルまで徒歩約1分！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市美崎町7-14 ／ 最寄り駅：石垣空港 ／ 交通案内：石垣バスターミナルより徒歩にて約４分 ! 離島ターミナルへは徒歩1分の好立地！！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>当ホテルに駐車場のご用意はございませんので、近隣の有料コインパーキングをご利用下さいませ。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「コスパ最高入り口は、ここ?と思いましたが、中に入ったらとても清潔感のある、おしゃれな内装でした。部屋のドアがへこんでいたのは気になりましたが、中は特に問題ありませんでした。フロントの方もとても親切…　2026-07-29 22:36:31投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=149092&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルイーストチャイナシー　＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（いーすとちゃいなしー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28513/28513_t.jpg" alt="ホテルイーストチャイナシー　＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>客室・テラスから眺めるジオパーク。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市美崎町2-8 ／ 最寄り駅：石垣空港 ／ 交通案内：石垣空港より路線バスで約40分「離島ターミナル」下車徒歩3分。お車で約30分。離島アクセスや街歩きに便利な好立地です。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場はございません。ホテルの隣に市営の駐車場がございます。(1時間100円、夜間1時間50円)</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「至福の朝食部屋などは真新しい感じはしませんが、コスパを考えたらそれなりの感じです。朝食は最高です。沖縄料理を堪能できます。ブルーシールアイスもあり、満足ではなく大満足です。クチコミの詳細は…　2026-08-18 07:10:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">神津島　民宿　菊乃屋＜神津島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（こうづしま　みんしゅく　きくのや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172885/172885.jpg" alt="神津島　民宿　菊乃屋＜神津島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★　海・山・星　★　あなたの旅をコーディネート♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 東京都神津島村377 ／ 最寄り駅：神津島空港 ／ 交通案内：神津島港から車で約7分または神津島空港から車で約15分（送迎可）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　無料　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「神津島　民宿　菊乃屋＜神津島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山下別館　＜神津島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（やましたべっかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,450〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38770/38770_he.jpg" alt="山下別館　＜神津島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>☆美しい星空の島☆「神津島唯一の温泉旅館」で絶品料理を楽しむ！大浴場から夕日が見えます。(時期限定)</p>
                  <p><strong>【所在地・アクセス】</strong>〒 東京都神津島村2番地 ／ 最寄り駅：神津島前浜港 ／ 交通案内：神津島港より徒歩７分（送迎有り）。　三浦港・神津島空港までの送迎も可能です。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り・無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「山下別館　＜神津島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
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
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-950 bg-white hover:bg-indigo-50 border border-indigo-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="dark-sky-reserve-nature-island-starry-resort-stay" />
</div>
  );
}
