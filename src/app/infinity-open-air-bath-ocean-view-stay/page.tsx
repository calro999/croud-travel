import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/infinity-open-air-bath-ocean-view-stay/" },
  title: "絶景インフィニティ露天風呂の宿：海・空・湖と一体化する圧倒的パノラマ 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "視界を遮るものがない「絶景インフィニティ露天風呂」宿完全特化！湯船が海や湖の水面と溶け合うインフィニティ温泉、朝焼けのサンライズ・夕暮れのマジックアワー・満天の星空、絶景テラスと美食宿を徹底解説。",
  keywords: ["絶景インフィニティ露天風呂の宿", "湖と一体化する圧倒的パノラマ", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行", "観光ガイド"],
  openGraph: {
    title: "絶景インフィニティ露天風呂の宿：海・空・湖と一体化する圧倒的パノラマ 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "視界を遮るものがない「絶景インフィニティ露天風呂」宿完全特化！湯船が海や湖の水面と溶け合うインフィニティ温泉、朝焼けのサンライズ・夕暮れのマジックアワー・満天の星空、絶景テラスと美食宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "絶景インフィニティ露天風呂の宿：海・空・湖と一体化する圧倒的パノラマ 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "視界を遮るものがない「絶景インフィニティ露天風呂」宿完全特化！湯船が海や湖の水面と溶け合うインフィニティ温泉、朝焼けのサンライズ・夕暮れのマジックアワー・満天の星空、絶景テラスと美食宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["infinity-open-air-bath-ocean-view-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for infinity-open-air-bath-ocean-view-stay", e);
  }
  return {};
}

export default function HeritageOnsenHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "infinity_ocean_view_bath",
    "title": "1. オーシャンインフィニティ露天（海と一体化する水平線パノラマ）",
    "timing": "通年（日の出サンライズ・夕暮れのマジックアワー・満月のムーンロード）",
    "desc": "湯船の水面とどこまでも広がる大海原の境界線が消え去るインフィニティ設計。潮風を感じながら浸かる弱食塩泉や炭酸水素塩泉。波の音をBGMに、刻一刻と表情を変える空と海の色を眺める至福の時間。",
    "spots": "屋上インフィニティ展望露天風呂、海辺のデッキチェア、展望足湯ラウンジ、ナイトライトアップ",
    "access": "熱海、伊豆、勝浦、南紀白浜、淡路島、指宿、沖縄など海沿いのリゾート地。",
    "tip": "満月の前後数日間に現れる、海面に月光が描く一本の光の道「ムーンロード」を湯船から眺めるのは奇跡的な絶景です。"
  },
  {
    "key": "infinity_lake_sky_bath",
    "title": "2. レイク＆マウンテンインフィニティ（湖面に映る逆さ富士と雲上の絶景）",
    "timing": "通年（早朝の朝霧と鏡のような湖面・夕暮れの赤富士）",
    "desc": "河口湖や芦ノ湖、洞爺湖の水面、そして雄大な山並みと一体化する天空のインフィニティ温泉。無風の早朝には湖面に鏡のように山が映り込む「逆さ富士」や「逆さ連峰」。標高の高い山岳リゾートから見下ろす雲海。",
    "spots": "湖畔パノラマ露天風呂、展望サウナ、水上テラス、パノラマバー",
    "access": "河口湖、箱根芦ノ湖、日光中禅寺湖、洞爺湖、阿寒湖など。",
    "tip": "風が止む早朝の露天風呂は、湖面が波立たず完全な鏡面反射となり、最も息をのむ絶景が広がります。"
  },
  {
    "key": "private_infinity_suite",
    "title": "3. 客室専用インフィニティ露天スイート（誰にも邪魔されない特等席の絶景独占）",
    "timing": "通年（大切なパートナーとの記念日やご褒美ステイ）",
    "desc": "客室のテラスに備わる専用のインフィニティ露天風呂。好きな時間に何度でも、誰にも邪魔されることなく絶景を独占。湯上がりはテラスのデイベッドでシャンパンを傾け、星空を眺める究極のプライベートステイ。",
    "spots": "客室専用インフィニティ露天風呂、テラスデイベッド、バイオエタノール暖炉、専用クラブラウンジ",
    "access": "最高級温泉旅館やスモールラグジュアリーホテル。",
    "tip": "夕暮れ時の15分間だけの「マジックアワー」に合わせて客室露天風呂に浸かると、言葉を失う美しさに包まれます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【絶景インフィニティ露天風呂の宿】海・空・湖と一体化する圧倒的パノラマ 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "視界を遮るものがない「絶景インフィニティ露天風呂」宿完全特化！湯船が海や湖の水面と溶け合うインフィニティ温泉、朝焼けのサンライズ・夕暮れのマジックアワー・満天の星空、絶景テラスと美食宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/infinity-open-air-bath-ocean-view-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【絶景インフィニティ露天風呂の宿】海・空・湖と一体化する圧倒的パノラマ 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/infinity-open-air-bath-ocean-view-stay/" }
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
            INFINITY OPEN-AIR BATH GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「絶景インフィニティ露天風呂の宿」海・空・湖と一体化する圧倒的パノラマ 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            湯船の縁がなく、視界一面の海や湖、大空と溶け合う奇跡の絶景「インフィニティ露天風呂」。まるで大自然に浮かんでいるかのような圧倒的な開放感。夕陽が水平線に沈む黄金のマジックアワーと、波音に包まれる至高の温泉体験。
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

              {/* 建築美・泉質・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 建築美・泉質・設備の魅力</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 代表的エリア＆アクセス</span>
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
                      <span>🏨</span> <span>{guide.title}におすすめの厳選名宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選名宿
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
              📊 絶景インフィニティ露天風呂の宿：海・空・湖と一体化する圧倒的パノラマ 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「絶景インフィニティ露天風呂の宿：海・空・湖と一体化する圧倒的パノラマ 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 犬吠埼潮の湯温泉　犬吠埼観光ホテル</td>
                <td className="p-3 text-stone-600">千葉県銚子市犬吠埼10293</td>
                <td className="p-3 text-stone-600">犬吠駅周辺</td>
                <td className="p-3 text-stone-600">有り　８０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.24（637件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,750〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40498%2F40498.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 貸切温泉のコンドミニアム　グランビュー熱海</td>
                <td className="p-3 text-stone-600">静岡県熱海市咲見町8-9</td>
                <td className="p-3 text-stone-600">熱海駅周辺</td>
                <td className="p-3 text-stone-600">有　1泊1台1,300円( 要予約）※駐車場は20台のみです。ご予約はお早目にお願い致します。</td>
                <td className="p-3 font-bold text-amber-600">★4.12（1326件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28514%2F28514.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 亀の井ホテル　筑波山</td>
                <td className="p-3 text-stone-600">茨城県つくば市筑波1050-1</td>
                <td className="p-3 text-stone-600">土浦駅周辺</td>
                <td className="p-3 text-stone-600">有り　65台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.19（872件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,610〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38574%2F38574.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 湯田上温泉　ホテル小柳</td>
                <td className="p-3 text-stone-600">新潟県南蒲原郡田上町田上乙1322-1</td>
                <td className="p-3 text-stone-600">新津駅周辺</td>
                <td className="p-3 text-stone-600">有り　100台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.3（1234件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16089%2F16089.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">犬吠埼潮の湯温泉　犬吠埼観光ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（いぬぼうざき　うしおのゆおんせん　いぬぼうざき　かんこうほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,750〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40498/40498_he.jpg" alt="犬吠埼潮の湯温泉　犬吠埼観光ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室オーシャンビュー！まるで海と繋がるかのような露天風呂？！◆温泉宿ホテル総選挙´２１犬吠埼地区１位</p>
                  <p><strong>【所在地・アクセス】</strong>〒 千葉県銚子市犬吠埼10293 ／ 最寄り駅：犬吠 ／ 交通案内：銚子電鉄　犬吠駅より車で３分　犬吠駅よりお電話にて送迎承ります。銚子駅より車で15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８０台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.33 ／ 立地 ★4.55 ／ 部屋 ★4.02 ／ 設備 ★3.94 ／ 風呂 ★4.31 ／ 食事 ★4.27</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「良かった点は海が近いことのみ建物はレトロというより古臭くチープ。清潔感もセンスも感じられません。銚子ということで期待していた食事もがっかりなクオリティで、良い口コミが本当なのか疑ってしまい…　2026-10-08 21:51:27投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">貸切温泉のコンドミニアム　グランビュー熱海</h3>
                  <span className="text-xs text-stone-400 ml-2">（かしきりおんせんのこんどみにあむ　ぐらんびゅー　あたみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28514/28514_heya1.jpg" alt="貸切温泉のコンドミニアム　グランビュー熱海 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>熱海駅徒歩7分☆海まで3分！3室限定の半露天風呂客室と７つの開発業務が人気のコンドミニアムホテル！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県熱海市咲見町8-9 ／ 最寄り駅：熱海 ／ 交通案内：熱海駅から徒歩7分！熱海サンビーチまで徒歩3分！熱海滞在に便利な立地で飲食店は周辺に多数あり♪</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　1泊1台1,300円( 要予約）※駐車場は20台のみです。ご予約はお早目にお願い致します。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「貸し切り温泉、美味しい食事、丁寧な対応に感謝高齢の母に熱海の花火を見せてあげたくて、宿から花火が見える所を探しておりました。結果、最高の思い出ができました。正直、古さは感じます...部屋が…　2026-08-15 23:25:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">亀の井ホテル　筑波山</h3>
                  <span className="text-xs text-stone-400 ml-2">（かめのいほてるつくばさん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,610〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38574/38574_ku.jpg" alt="亀の井ホテル　筑波山 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>絶景が楽しめるインフィニティ露天風呂。関東平野を一望する筑波山の自然に囲まれたホテル。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 茨城県つくば市筑波1050-1 ／ 最寄り駅：土浦 ／ 交通案内：ＴＸつくば駅より筑波山直行シャトルバスにて約40分。筑波山神社入口バス停下車後、徒歩約2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　65台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/38574?reviewId=33123478897576　2026-08-16 18:10:54投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯田上温泉　ホテル小柳</h3>
                  <span className="text-xs text-stone-400 ml-2">（おやなぎ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/16089/16089_ba.jpg" alt="湯田上温泉　ホテル小柳 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>新潟市へ一番近い美食を満喫できる温泉宿★インフィニティ露天風呂とこだわりのサウナが人気！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 新潟県南蒲原郡田上町田上乙1322-1 ／ 最寄り駅：新津 ／ 交通案内：関越道 三条・燕ICよりR403を車で30分／JR信越線 田上駅下車（無料送迎あり）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　100台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「子連れへの配慮が細やかで安心して過ごせた1歳の子どもを連れての宿泊でした。ウェルカムベビーの宿とうたってはいないけど、ベビー用品の貸し出しがあったり食事ではエプロンや子ども用取り皿、ハイチェアなど…　2026-08-21 15:11:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！千葉県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、千葉県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Menton-C%C3%B4te_d%27Azur.jpg/1280px-Menton-C%C3%B4te_d%27Azur.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="東京ディズニーリゾート" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">東京ディズニーリゾート</h3>
                <p className="text-xs text-stone-600 leading-relaxed">夢と魔法の王国「東京ディズニーランド」と冒険とイマジネーションの海「東京ディズニーシー」からなる日本最高峰のテーマパークリゾート。 リゾート（Resort）とは、大勢の人が休暇・余暇を過ごす場所のこと。行楽地。保養地。 行楽や保養、観光が地元の文化や経済の主要な要素となっている都市を、リゾート都市またはリゾートタウンと呼ぶ（en:Resort town）。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">鴨川シーワールド</h3>
                <p className="text-xs text-stone-600 leading-relaxed">太平洋をバックに繰り広げられる豪快なシャチのパフォーマンスが有名な総合海洋レジャーセンター。イルカやベルーガのショーも見応え抜群です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">成田山新勝寺</h3>
                <p className="text-xs text-stone-600 leading-relaxed">千年以上の日数を数える全国屈指の大本山。参道には老舗のうなぎ店や土産物屋がひしめき、正月や節分には大勢の参拝客で賑わいます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">鋸山（日本寺・地獄のぞき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">房総半島からの絶景が広がる山。山頂近くの断崖絶壁から突き出した「地獄のぞき」からのスリル満点の眺望や日本一の大きさを誇る石仏の大仏様が有名です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 千葉県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 千葉県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="infinity-open-air-bath-ocean-view-stay" />
</div>
  );
}
