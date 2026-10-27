import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tohoku-travel-budget-guide/" },
  title: "東北旅行 費用：2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳",
  description: "東北旅行の費用を2泊3日（仙台＋松島＋銀山温泉or蔵王温泉）のモデルコースで完全計算。東京からの東北新幹線vs高速バスの交通費比較、牛たん・ずんだ餅のグルメ費用、銀山温泉のレトロ旅館の宿泊費まで内訳公開。",
  keywords: ["東北旅行", "費用", "2泊3日で仙台", "松島", "宿泊費の完全内訳", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "東北旅行 費用：2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳",
    description: "東北旅行の費用を2泊3日（仙台＋松島＋銀山温泉or蔵王温泉）のモデルコースで完全計算。東京からの東北新幹線vs高速バスの交通費比較、牛たん・ずんだ餅のグルメ費用、銀山温泉のレトロ旅館の宿泊費まで内訳公開。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "東北旅行 費用：2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳",
    description: "東北旅行の費用を2泊3日（仙台＋松島＋銀山温泉or蔵王温泉）のモデルコースで完全計算。東京からの東北新幹線vs高速バスの交通費比較、牛たん・ずんだ餅のグルメ費用、銀山温泉のレトロ旅館の宿泊費まで内訳公開。",
  }
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tohoku-travel-budget-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tohoku-travel-budget-guide", e);
  }
  return [];
}

export default function TohokuBudgetGuidePage() {
  const hotels = loadHotels();


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【東北旅行 費用】2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳 ｜ 日本全国・旅宿クラウド",
    "description": "東北旅行の費用を2泊3日（仙台＋松島＋銀山温泉or蔵王温泉）のモデルコースで完全計算。東京からの東北新幹線vs高速バスの交通費比較、牛たん・ずんだ餅のグルメ費用、銀山温泉のレトロ旅館の宿泊費まで内訳公開。",
    "url": "https://croud-travel.pages.dev/tohoku-travel-budget-guide/",
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
      { "@type": "ListItem", "position": 2, "name": "【東北旅行 費用】2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳 ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tohoku-travel-budget-guide/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white p-8 md:p-14 shadow-2xl">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black tracking-widest bg-emerald-400 text-teal-950 px-4 py-1.5 rounded-full uppercase">
              リアルなお財布事情
            </span>
            <span className="text-xs font-bold bg-white/10 text-emerald-50 px-3 py-1.5 rounded-full border border-emerald-400/30">
              東京発・2泊3日モデルコース
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white drop-shadow-md">「東北旅行 費用」2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳</h1>
          <p className="text-sm text-emerald-50/90 leading-relaxed font-medium">
            「東北をぐるっと回りたいけど、いくら貯金すればいいの？」そんな疑問に答えるべく、東京から仙台・松島・山形（銀山温泉・蔵王）を2泊3日で巡るリアルな費用を徹底解剖します！
          </p>
        </div>
      </section>

      {/* 予算別 2泊3日の総額シミュレーション */}
      <section className="px-4 md:px-0">
        <h2 className="text-2xl font-black font-journal-serif text-teal-950 mb-6 text-center">
          💰 2泊3日 東北周遊の予算スタイル別・合計金額
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col">
            <div className="text-center mb-4">
              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">節約派</span>
              <div className="text-3xl font-black text-slate-700 mt-3">¥38,000<span className="text-base font-medium">〜</span></div>
            </div>
            <ul className="text-sm space-y-2 text-slate-600 flex-1">
              <li>🚌 交通: 夜行・昼行高速バス中心</li>
              <li>🏨 宿泊: ビジネスホテル＆ゲストハウス</li>
              <li>🍱 食事: ご当地B級グルメメイン</li>
            </ul>
          </div>
          <div className="bg-teal-50 border-2 border-teal-200 rounded-3xl p-6 shadow-md flex flex-col relative transform md:-translate-y-2">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full">
              迷ったらコレ！標準スタイル
            </div>
            <div className="text-center mb-4 mt-2">
              <span className="bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">王道派</span>
              <div className="text-4xl font-black text-teal-800 mt-3">¥65,000<span className="text-base font-medium">〜</span></div>
            </div>
            <ul className="text-sm space-y-2 text-teal-900/80 flex-1 font-medium">
              <li>🚄 交通: 片道新幹線 ＋ 片道バス</li>
              <li>🏨 宿泊: 1泊ビジネス ＋ 1泊温泉旅館（秋保等）</li>
              <li>🍣 食事: 牛たん定食や海鮮も堪能</li>
            </ul>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 shadow-sm flex flex-col">
            <div className="text-center mb-4">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">贅沢派</span>
              <div className="text-3xl font-black text-amber-800 mt-3">¥110,000<span className="text-base font-medium">〜</span></div>
            </div>
            <ul className="text-sm space-y-2 text-amber-900/80 flex-1">
              <li>🚄 交通: 往復新幹線（指定席）</li>
              <li>🏨 宿泊: 銀山温泉のレトロ高級旅館 連泊</li>
              <li>🥩 食事: 高級寿司・ブランド牛フルコース</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 交通費のリアル */}
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
        <h2 className="text-2xl font-black font-journal-serif text-teal-900 mb-4 border-b-2 border-teal-100 pb-2">
          🚄 東京からの交通費は「新幹線 vs バス」で数万円変わる
        </h2>
        <p className="text-sm text-slate-700 mb-6 leading-relaxed">
          東北旅行の費用の大部分を占めるのが交通費。安く抑えるなら高速バス、時間を買うなら新幹線です。
        </p>
        <div className="flex flex-col gap-4 mb-6">
          <Link href="/tokyo-sendai-bus-vs-shinkansen-guide/" className="flex-1 bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl border border-slate-200 transition group">
            <h3 className="font-bold text-teal-800 text-sm mb-2 group-hover:underline">▶ 東京〜仙台の移動比較</h3>
            <p className="text-xs text-slate-600">新幹線はやぶさ（約11,410円） vs 高速バス（約2,500円〜）の詳細解説はこちら。</p>
          </Link>
          <Link href="/tokyo-yamagata-zao-bus-vs-shinkansen-guide/" className="flex-1 bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl border border-slate-200 transition group">
            <h3 className="font-bold text-teal-800 text-sm mb-2 group-hover:underline">▶ 東京〜山形・蔵王の移動比較</h3>
            <p className="text-xs text-slate-600">山形新幹線（約11,550円） vs 夜行バス（約3,500円〜）の詳細解説はこちら。</p>
          </Link>
        </div>
      </section>

      {/* 2泊3日 お金がわかるリアル・タイムライン */}
      <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
        <h2 className="text-2xl font-black font-journal-serif text-slate-900 mb-6">
          🗺️ 2泊3日 お金がわかるリアル・モデルコース
        </h2>
        <div className="space-y-8">
          {/* Day 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-teal-700 border-l-4 border-teal-500 pl-3 mb-4">1日目：仙台〜松島観光</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>🚄 東京から仙台へ（新幹線）</span>
                <span className="font-bold">11,410円</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>🍖 昼食：仙台駅前で名物・極厚牛たん定食</span>
                <span className="font-bold">約1,800円</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>🍡 おやつ：ずんだ餅</span>
                <span className="font-bold">約350円</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>🚃 仙石線で松島へ ＆ 🚢 松島湾遊覧船</span>
                <span className="font-bold">約1,900円（船1,500円込）</span>
              </li>
              <li className="flex justify-between text-teal-900">
                <span>🏨 宿泊：仙台駅前ビジネスホテル</span>
                <span className="font-bold">約5,500円</span>
              </li>
            </ul>
          </div>
          {/* Day 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-teal-700 border-l-4 border-teal-500 pl-3 mb-4">2日目：山形・銀山温泉へ</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>🚌 仙台から山形方面へ高速バス・路線バス移動</span>
                <span className="font-bold">約1,200〜2,000円</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>🍜 昼食：山形の冷やし肉そば</span>
                <span className="font-bold">約900円</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>📸 観光：銀山温泉のレトロ街並み散策・カフェ</span>
                <span className="font-bold">約1,500円</span>
              </li>
              <li className="flex justify-between text-teal-900">
                <span>🏨 宿泊：大正ロマン感じる銀山温泉の旅館（1泊2食付）</span>
                <span className="font-bold">約22,000〜35,000円</span>
              </li>
            </ul>
          </div>
          {/* Day 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-teal-700 border-l-4 border-teal-500 pl-3 mb-4">3日目：仙台朝市〜帰路</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>🚌 銀山温泉から仙台へ戻る</span>
                <span className="font-bold">約2,000円</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>🐟 昼食：仙台朝市で海鮮丼</span>
                <span className="font-bold">約1,500円</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span>🛍️ お土産代（萩の月、笹かまなど）</span>
                <span className="font-bold">約3,000円</span>
              </li>
              <li className="flex justify-between">
                <span>🚌 帰路：仙台から東京へ（昼行高速バス利用で節約）</span>
                <span className="font-bold">約3,500円</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🏨 ホテルセクション */}
      <section className="px-4 md:px-0">
        <h2 className="text-2xl font-black font-journal-serif text-teal-950 mb-6">
          🏨 東北周遊におすすめの宿（仙台・秋保・山形）
        </h2>
        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotels.map((hotel: any) => (
              <article key={hotel.hotelNo} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  {hotel.hotelImageUrl && (
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
                  )}
                  {hotel.hotelMinCharge > 0 && (
                    <span className="absolute bottom-2 right-2 text-[10px] font-black bg-teal-900/90 text-white px-2 py-1 rounded">
                      ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                    </span>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {hotel.reviewAverage > 0 && (
                      <div className="text-[10px] font-bold text-amber-500 mb-1">⭐ {hotel.reviewAverage}（{hotel.reviewCount}件）</div>
                    )}
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2 mb-2">{hotel.hotelName}</h3>
                  </div>
                  <a href={hotel.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" className="mt-3 block w-full text-center py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition">
                    楽天トラベルで見る
                  </a>
                </div>
              
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 東北旅行 費用：2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「東北旅行 費用：2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ホテルモントレ仙台</td>
                <td className="p-3 text-stone-600">宮城県仙台市青葉区中央4-1-8</td>
                <td className="p-3 text-stone-600">仙台駅周辺</td>
                <td className="p-3 text-stone-600">73台収容立体駐車場あり(1,500円／15：00～翌15：00)</td>
                <td className="p-3 font-bold text-amber-600">★4.41（4893件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,310〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19512%2F19512.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. コンフォートホテル仙台西口（２０２６年４月１７日　リニューアル）</td>
                <td className="p-3 text-stone-600">宮城県仙台市青葉区中央3-5-11</td>
                <td className="p-3 text-stone-600">仙台駅周辺</td>
                <td className="p-3 text-stone-600">1120～1530円/泊：提携先により条件が異なります。</td>
                <td className="p-3 font-bold text-amber-600">★4.11（10921件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67093%2F67093.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルルートイン仙台港北インター</td>
                <td className="p-3 text-stone-600">宮城県多賀城市町前1-1-15</td>
                <td className="p-3 text-stone-600">多賀城駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場142台完備。予約不要。</td>
                <td className="p-3 font-bold text-amber-600">★4.25（535件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70972%2F70972.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 銀山温泉　旅館藤屋</td>
                <td className="p-3 text-stone-600">山形県尾花沢市銀山新畑443</td>
                <td className="p-3 text-stone-600">大石田駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.67（183件）</td>
                <td className="p-3 font-bold text-rose-600">¥36,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68602%2F68602.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 銀山温泉　旅館松本</td>
                <td className="p-3 text-stone-600">山形県尾花沢市銀山温泉</td>
                <td className="p-3 text-stone-600">大石田駅周辺</td>
                <td className="p-3 text-stone-600">有り　１２台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.95（325件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52933%2F52933.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 銀山温泉　伝統の宿　古山閣</td>
                <td className="p-3 text-stone-600">山形県尾花沢市銀山温泉423</td>
                <td className="p-3 text-stone-600">大石田駅周辺</td>
                <td className="p-3 text-stone-600">有り　15台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.56（295件）</td>
                <td className="p-3 font-bold text-rose-600">¥23,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137447%2F137447.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルモントレ仙台</h3>
                  <span className="text-xs text-stone-400 ml-2">（もんとれ　せんだい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,310〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/19512/19512_b.jpg" alt="ホテルモントレ仙台 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>アメニティ充実のレディースフロアを新設♪プラハをモチーフとした館内。最上階には天然温泉スパをご用意。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県仙台市青葉区中央4-1-8 ／ 最寄り駅：仙台 ／ 交通案内：JR仙台駅西口より徒歩3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>73台収容立体駐車場あり(1,500円／15：00～翌15：00)</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は清潔だが風呂の床とカーテンに難あり部屋は清潔で快適。風呂の床が滑りやすく危ない。シャワーカーテンがカビていて減点。脱衣場の床は清潔で快適。クチコミの詳細はこちらから　http…　2026-08-19 21:21:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">コンフォートホテル仙台西口（２０２６年４月１７日　リニューアル）</h3>
                  <span className="text-xs text-stone-400 ml-2">（こんふぉーとほてるせんだいにしぐち（２０２６ねん４がつ１７にち　りにゅーある））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67093/67093_room.jpg" alt="コンフォートホテル仙台西口（２０２６年４月１７日　リニューアル） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日替わりスムージーが人気★無料朝食サービスがイチオシのコスパ最強ホテル◆小学6年生まで添い寝無料</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県仙台市青葉区中央3-5-11 ／ 最寄り駅：仙台 ／ 交通案内：◆JR仙台駅西口より徒歩3分◆仙台空港～仙台駅まで電車（アクセス線）で約20分◆仙台宮城ICより車で約15分◆</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1120～1530円/泊：提携先により条件が異なります。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「QRコードが読み取れず手動手続きが面倒自動チェックインのQRコードが読み取れず、手動でのチェックインがかえって面倒!クチコミの詳細はこちらから　https://review.travel.ra…　2026-08-22 20:20:15投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルルートイン仙台港北インター</h3>
                  <span className="text-xs text-stone-400 ml-2">（るーといんせんだいこうほくいんたー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70972/70972_ru.jpg" alt="ホテルルートイン仙台港北インター 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>■ＷＯＷＯＷ全室で無料視聴可　■大浴場あり　■朝食無料サービス</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県多賀城市町前1-1-15 ／ 最寄り駅：多賀城 ／ 交通案内：仙台東部道路【仙台港北IC】より車で１分・JR仙石線中野栄駅（仙台駅から8駅20分）より徒歩12分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場142台完備。予約不要。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食が美味しくスタッフの対応も素晴らしいはじめて宿泊しました。ルートインは県内5箇所目です。いつも満足しています。今回、朝食が美味しいこと、そのスタッフの仕事ぶりがよかったことが印象に残りコメント…　2026-08-14 12:42:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">銀山温泉　旅館藤屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふじや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥36,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/68602/68602_room.jpg" alt="銀山温泉　旅館藤屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ステンドガラス・竹・和紙が織りなす独特な空間と、趣の違う五つの貸切風呂をお楽しみ下さいませ。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山形県尾花沢市銀山新畑443 ／ 最寄り駅：大石田 ／ 交通案内：大石田駅より車にて３０分位（１５ｋｍ）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「サービスと食事に大満足、温泉街の眺めも最高駅からの送迎、滞在中のサービス、食事、設備全てにおいて大満足の滞在でした。一点あげるとしたら、午前中に1Fのお風呂に入ったとき、火傷をするくらいお…　2026-07-29 11:16:57投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">銀山温泉　旅館松本</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぎんざんおんせん　りょかん　まつもと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/52933/52933_kya.jpg" alt="銀山温泉　旅館松本 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>館内エレベータで移動楽々！ご夕食はお部屋食又は個室、お風呂は源泉かけ流し！全１０室の家庭的な宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山形県尾花沢市銀山温泉 ／ 最寄り駅：大石田 ／ 交通案内：大石田駅より、バスで４０分（尾花沢経由）※大石田駅までの送迎をご希望の方は、ご予約時に「備考欄」に記載下さい。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１２台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「掃除が行き届かず、食事も期待外れ設備が古いの仕方がないとして、とにかく全然掃除が出来ていなくてアレルギーが発症(   )ほこり、カビ、水垢...しっかり掃除されて下さい。ご飯は美味しくなく…　2026-08-26 16:13:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">銀山温泉　伝統の宿　古山閣</h3>
                  <span className="text-xs text-stone-400 ml-2">（でんとうのやど　こざんかく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥23,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/137447/137447_ru.jpg" alt="銀山温泉　伝統の宿　古山閣 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>木造４階建ての宿。昔の空気が今も流れている・・・そんな感覚を味わいに来てみてはいかがでしょうか。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山形県尾花沢市銀山温泉423 ／ 最寄り駅：大石田 ／ 交通案内：大石田駅より尾花沢経由銀山行バスにて35分。送迎についてはプラン詳細をご覧ください。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　15台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「雰囲気抜群の旅館で美味しい料理に大満足すごく雰囲気のある旅館でお料理も美味しかったです!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/ho…　2026-08-24 10:00:19投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！宮城県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、宮城県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Matsushima_miyagi_z.JPG/1280px-Matsushima_miyagi_z.JPG?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="松島（日本三景）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">松島（日本三景）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松島湾に浮かぶ260余りの島々が描く、日本三景の一つに数えられる美景。瑞巌寺や五大堂といった歴史的建造物と、遊覧船からの島々の眺望が訪れる者を魅了します。 松島（まつしま）は、宮城県北東部の松島湾内外にある約260の島々からなる諸島やそれを擁する多島海（島の数については諸説ある後述）。または、湾周囲を囲む松島丘陵も含めた修景地区のことである。日本三景の一つに数えられている。2019年の観光入込客数は約598万人。かつては「東の松島 西の象潟」と謳われ、同じく東北地方に存在していた修景地の象潟と並び称されていた。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">仙台城跡（青葉城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">伊達政宗公が築城した仙台藩の拠点。本丸跡に立つ政宗公の騎馬像越しに仙台市街を一望でき、日暮れには眼下に広がる輝く夜景スポットとしても大人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg/1280px-Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="蔵王の御釜" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">蔵王の御釜</h3>
                <p className="text-xs text-stone-600 leading-relaxed">蔵王連峰の標高高台に位置する、エメラルドグリーンの神秘的なカルデラ湖。光の当たり方で色合いが変化することから「五色沼」とも呼ばれる圧巻の火山絶景です。 蔵王、藏王（ざ-おう） 読みとしては、「蔵王」の本来の読み、旧仮名づかい「ざう-わう(ぞう-おう)」（音読み）が連声化したもの。 修験道の神である蔵王権現のこと。日本各地にみられる「蔵王」という名称は、後述の地名を含め、その大半が蔵王権現（奈良県吉野の発祥）に由来している（蔵王権現を参照）。 上述の蔵王権現を祭っている神社（蔵王権現社、御嶽神社（御岳神社）、…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">瑞鳳殿</h3>
                <p className="text-xs text-stone-600 leading-relaxed">仙台藩祖・伊達政宗公の霊屋。桃山文化の華麗な建築様式を今に伝える絢欄豪華な装飾と、周囲の静寂な杉木立が見事な対比を見せています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 宮城県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 宮城県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 text-sm">ホテル情報を準備中です。</div>
        )}
      </section>

      {/* リンク */}
      <div className="text-center">
        <Link href="/prefectures/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 px-6 py-3 rounded-xl transition shadow-sm">
          🗾 全国都道府県ガイドへ
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="tohoku-travel-budget-guide" />
</div>
  );
}
