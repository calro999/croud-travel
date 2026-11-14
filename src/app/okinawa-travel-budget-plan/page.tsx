import ShareButtons from "@/app/components/ShareButtons";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/okinawa-travel-budget-plan/" },
  title: "沖縄旅行 予算：2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用",
  description: "沖縄旅行の予算を2泊3日（那覇中心）・3泊4日（美ら海水族館＋恩納村リゾート込み）で完全計算！LCC vs 大手航空の航空券代、レンタカーの有無で変わる費用差、ビーチホテルの宿泊費、沖縄そば・タコライス・ステーキの食費まで。",
  keywords: ["沖縄旅行", "予算", "2泊3日", "3泊4日それぞれいくら？航空券", "レンタカー", "リゾートホテルのリアル費用", "温泉宿"],
  openGraph: {
    title: "沖縄旅行 予算：2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用",
    description: "沖縄旅行の予算を2泊3日（那覇中心）・3泊4日（美ら海水族館＋恩納村リゾート込み）で完全計算！LCC vs 大手航空の航空券代、レンタカーの有無で変わる費用差、ビーチホテルの宿泊費、沖縄そば・タコライス・ステーキの食費まで。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "沖縄旅行 予算：2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用",
    description: "沖縄旅行の予算を2泊3日（那覇中心）・3泊4日（美ら海水族館＋恩納村リゾート込み）で完全計算！LCC vs 大手航空の航空券代、レンタカーの有無で変わる費用差、ビーチホテルの宿泊費、沖縄そば・タコライス・ステーキの食費まで。",
  }
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["okinawa-travel-budget-plan"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels", e);
  }
  return [];
}

export default function OkinawaTravelBudgetPage() {
  const hotels = loadHotels();


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【沖縄旅行 予算】2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用",
    "description": "沖縄旅行の予算を2泊3日（那覇中心）・3泊4日（美ら海水族館＋恩納村リゾート込み）で完全計算！LCC vs 大手航空の航空券代、レンタカーの有無で変わる費用差、ビーチホテルの宿泊費、沖縄そば・タコライス・ステーキの食費まで。",
    "url": "https://croud-travel.pages.dev/okinawa-travel-budget-plan/",
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
      { "@type": "ListItem", "position": 2, "name": "【沖縄旅行 予算】2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用", "item": "https://croud-travel.pages.dev/okinawa-travel-budget-plan/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* Hero Section */}
      <div className="relative rounded-t-[3rem] rounded-b-xl overflow-hidden bg-sky-900 shadow-xl border-b-8 border-cyan-400">
        <div className="absolute inset-0 opacity-40 bg-[url('https://img.travel.rakuten.co.jp/share/HOTEL/104526/104526.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 p-10 md:p-16 text-center space-y-6">
          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-black px-5 py-2 rounded-full tracking-widest">
            OKINAWA BUDGET SIMULATION
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white drop-shadow-md">「沖縄旅行の予算」<br /> 最安旅 vs リゾート贅沢旅の振れ幅がすごい！</h1>
          <p className="text-sm md:text-base text-cyan-50 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            LCC＋レンタカーなしで極限まで安く抑えるか、海沿いのリゾートホテルで優雅に過ごすか。スタイルによって「0が1つ違う」ほど予算が変わる沖縄旅行。航空券・レンタカー・食費・ホテル代のリアルな金額を全て公開します。
          </p>
        </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-6">
        <ShareButtons title={"沖縄旅行 予算：2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用"} url={"https://croud-travel.pages.dev/okinawa-travel-budget-plan/"} />
      </div>
      </div>

      {/* Plan Comparisons */}
      <div className="space-y-8">
        <h2 className="text-2xl font-black text-center text-sky-950 mb-4">あなたの旅はどれ？3つの予算プラン</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* プラン1 */}
          <div className="bg-white border-2 border-stone-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-bl-xl">1人 3.5〜5万円</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2 mt-4">最安プラン</h3>
            <p className="text-sm text-stone-500 mb-4">LCC＋ゆいレール・路線バス。とにかく安く！</p>
            <ul className="space-y-2 text-sm text-stone-700">
              <li className="flex justify-between border-b border-stone-100 pb-1">
                <span>✈️ ピーチ/Jetstar</span> <span className="font-bold">4,990〜12,000円</span>
              </li>
              <li className="flex justify-between border-b border-stone-100 pb-1">
                <span>🚗 レンタカー</span> <span className="font-bold text-stone-400">なし</span>
              </li>
              <li className="flex justify-between border-b border-stone-100 pb-1">
                <span>🏨 那覇ゲストハウス</span> <span className="font-bold">2,500円/泊</span>
              </li>
              <li className="flex justify-between border-b border-stone-100 pb-1">
                <span>🏨 国際通りビジネス</span> <span className="font-bold">6,000円/泊</span>
              </li>
            </ul>
          </div>

          {/* プラン2 */}
          <div className="bg-sky-50 border-2 border-sky-200 rounded-3xl p-6 shadow-md relative overflow-hidden transform md:-translate-y-2">
            <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">1人 7〜10万円</div>
            <h3 className="text-xl font-bold text-sky-900 mb-2 mt-4">中間王道プラン</h3>
            <p className="text-sm text-sky-700/80 mb-4">レンタカー必須！美ら海＆西海岸リゾート</p>
            <ul className="space-y-2 text-sm text-sky-900">
              <li className="flex justify-between border-b border-sky-100 pb-1">
                <span>✈️ ANA/JAL</span> <span className="font-bold">12,000〜35,000円</span>
              </li>
              <li className="flex justify-between border-b border-sky-100 pb-1">
                <span>🚗 軽〜普通車(3日)</span> <span className="font-bold">8,000〜18,000円</span>
              </li>
              <li className="flex justify-between border-b border-sky-100 pb-1">
                <span>🏨 北谷エリア</span> <span className="font-bold">10,000円/泊</span>
              </li>
              <li className="flex justify-between border-b border-sky-100 pb-1">
                <span>🏨 恩納村リゾート</span> <span className="font-bold">20,000円/泊</span>
              </li>
            </ul>
            <div className="mt-4 text-[10px] text-sky-600 bg-sky-100/50 p-2 rounded">※パッケージツアー(航空券+宿)なら35,000円〜で見つかることも！</div>
          </div>

          {/* プラン3 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">1人 15万円〜</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2 mt-4">贅沢プラン</h3>
            <p className="text-sm text-amber-700/80 mb-4">最高級ホテルでおこもりステイ。</p>
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex justify-between border-b border-amber-100 pb-1">
                <span>✈️ ファーストクラス</span> <span className="font-bold">要確認</span>
              </li>
              <li className="flex justify-between border-b border-amber-100 pb-1">
                <span>🏨 ハレクラニ沖縄等</span> <span className="font-bold">50,000円/泊〜</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 食費＆アクティビティ */}
      <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200">
        <h2 className="text-2xl font-black font-journal-serif text-stone-800 mb-8 border-b-2 border-cyan-200 pb-2 inline-block">現地での出費：食費＆遊び代の相場</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-bold text-orange-600 mb-4 flex items-center gap-2">沖縄グルメ相場</h3>
            <ul className="space-y-3 text-sm text-stone-700 bg-orange-50/50 p-5 rounded-2xl border border-orange-100">
              <li className="flex justify-between items-center">
                <span>沖縄そば</span> <span className="font-bold text-lg">約650円</span>
              </li>
              <li className="flex justify-between items-center">
                <span>タコライス</span> <span className="font-bold text-lg">約780円</span>
              </li>
              <li className="flex justify-between items-center">
                <span>ステーキハウス88</span> <span className="font-bold text-lg">約2,500円</span>
              </li>
              <li className="flex justify-between items-center">
                <span>アグー豚しゃぶしゃぶ</span> <span className="font-bold text-lg">約3,500円</span>
              </li>
              <li className="flex justify-between items-center">
                <span>ブルーシールアイス</span> <span className="font-bold text-lg">約390円</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-cyan-600 mb-4 flex items-center gap-2">アクティビティ＆その他</h3>
            <ul className="space-y-3 text-sm text-stone-700 bg-cyan-50/50 p-5 rounded-2xl border border-cyan-100">
              <li className="flex justify-between items-center">
                <span>美ら海水族館（大人）</span> <span className="font-bold text-lg">2,180円</span>
              </li>
              <li className="flex justify-between items-center">
                <span>青の洞窟シュノーケリング</span> <span className="font-bold text-lg">約5,000円</span>
              </li>
              <li className="flex justify-between items-center">
                <span>ホエールウォッチング(冬期)</span> <span className="font-bold text-lg">約5,500円</span>
              </li>
              <li className="flex justify-between items-center">
                <span>レンタカーのガソリン代</span> <span className="font-bold text-lg">約3,000円</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recommended Hotels from Rakuten */}
      {hotels.length > 0 && (
        <section className="pt-8">
          <h2 className="text-2xl font-black font-journal-serif text-sky-900 text-center mb-8">沖縄のおすすめホテル・リゾート</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel: any) => (
              <div key={hotel.hotelNo} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col">
                <div className="aspect-[16/9] relative">
                  {hotel.hotelImageUrl ? (
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
                  ) : (
                    <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-400">NO IMAGE</div>
                  )}
                  {hotel.hotelMinCharge > 0 && (
                    <div className="absolute bottom-2 right-2 bg-sky-900 text-white text-xs font-bold px-2 py-1 rounded">
                      ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                    </div>
                  )}
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    {hotel.reviewAverage > 0 && (
                      <div className="text-xs text-amber-500 font-bold mb-1">★ {hotel.reviewAverage} ({hotel.reviewCount})</div>
                    )}
                    <h3 className="text-sm font-bold text-stone-800 line-clamp-2 mb-2">{hotel.hotelName}</h3>
                  </div>
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2.5 rounded-xl transition"
                  >
                    空室・プランを見る
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    
      
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">沖縄旅行 予算：2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「沖縄旅行 予算：2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ダイワロイネットホテル沖縄県庁前</td>
                <td className="p-3 text-stone-600">沖縄県那覇市泉崎1-11-2</td>
                <td className="p-3 text-stone-600">「那覇空港」よりゆいレールで（約15分）「旭橋駅」下車、 徒歩約3分。</td>
                <td className="p-3 text-stone-600">立体駐車場36台（内ハイルーフ8台）／1,500円税込（1泊：14時〜翌11時）／先着順（予約不可）</td>
                <td className="p-3 font-bold text-amber-600">★4.25（1605件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,037〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104526%2F104526.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ＢＬＩＳＳＴＩＡ　ＳＵＩＴＥＳ＆ＲＥＳＯＲＴ　沖縄恩納村（２０２６年７月１５日開業）</td>
                <td className="p-3 text-stone-600">沖縄県国頭郡恩納村字前兼久497番6</td>
                <td className="p-3 text-stone-600">那覇空港駅周辺</td>
                <td className="p-3 text-stone-600">あり　124台　１泊１台1,000円（最大2,000円）　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.59（41件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198402%2F198402.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 綺麗な海Ｖｉｌｌａ　オーシャンビュー～広々一軒家貸切３００ｍ２沖縄屈指のリゾートエリア恩納村　＾</td>
                <td className="p-3 text-stone-600">沖縄県国頭郡恩納村字仲泊1425-5</td>
                <td className="p-3 text-stone-600">那覇空港駅周辺</td>
                <td className="p-3 text-stone-600">有り</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F173949%2F173949.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ブルーシャローズ恩納村リゾート</td>
                <td className="p-3 text-stone-600">沖縄県国頭郡恩納村真栄田3378-12　　2Ｆ</td>
                <td className="p-3 text-stone-600">那覇空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　２台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥8,070〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191787%2F191787.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 琉球オリオンホテル　那覇国際通り（旧：オリオンホテル那覇）</td>
                <td className="p-3 text-stone-600">沖縄県那覇市安里1-2-21</td>
                <td className="p-3 text-stone-600">那覇空港駅周辺</td>
                <td className="p-3 text-stone-600">有り（先着順）　1泊1台1,500円</td>
                <td className="p-3 font-bold text-amber-600">★4.21（837件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2906%2F2906.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ワイズキャビン＆ホテル那覇国際通り</td>
                <td className="p-3 text-stone-600">沖縄県那覇市久茂地3-9-18</td>
                <td className="p-3 text-stone-600">ゆいレール県庁前駅徒歩３分</td>
                <td className="p-3 text-stone-600">有＊予約制＊1泊1,000円(税込)、2026年2月から￥1200円に改定</td>
                <td className="p-3 font-bold text-amber-600">★4.28（738件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,975〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166949%2F166949.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">「沖縄旅行 予算」掲載宿の所在地・アクセス・特徴データ一覧</h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ダイワロイネットホテル沖縄県庁前</h3>
                  <span className="text-xs text-stone-400 ml-2">（だいわろいねっとほてるおきなわけんちょうまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,037〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/104526/104526_ro.jpg" alt="ダイワロイネットホテル沖縄県庁前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ゆいレール「旭橋駅」より徒歩約3分。国際通りへは徒歩約5分。別館1階にコンビニ有。ビジネスや観光に。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県那覇市泉崎1-11-2 ／ 最寄り駅：主要駅 ／ 交通案内：「那覇空港」よりゆいレールで（約15分）「旭橋駅」下車、 徒歩約3分。那覇空港より車で約15分。国際通りへは徒歩約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>立体駐車場36台（内ハイルーフ8台）／1,500円税込（1泊：14時〜翌11時）／先着順（予約不可）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.26 ／ 立地 ★4.25 ／ 部屋 ★4.28 ／ 設備 ★4.19 ／ 風呂 ★4.16</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「チェックインの案内不足とデスクの清掃不備自動チェックイン機が並んでいたのでそこで待っていたら、後から来た外国人はフロントでチェックインに呼ばれた。なので当方もフロントに行こうとしたら機械に並ぶよう…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＢＬＩＳＳＴＩＡ　ＳＵＩＴＥＳ＆ＲＥＳＯＲＴ　沖縄恩納村（２０２６年７月１５日開業）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ブリスティア スイートアンドリゾート オキナワオンナソン）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/198402/198402.jpg" alt="ＢＬＩＳＳＴＩＡ　ＳＵＩＴＥＳ＆ＲＥＳＯＲＴ　沖縄恩納村（２０２６年７月１５日開業） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>恩納村の森に佇むリゾートホテルが誕生。インフィニティプールやSPAなど、優雅な空間が五感を満たす。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県国頭郡恩納村字前兼久497番6 ／ 最寄り駅：那覇空港 ／ 交通案内：那覇国際空港より車で約53分（沖縄自動車道を利用し石川ICより１０分）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>あり　124台　１泊１台1,000円（最大2,000円）　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「オープンしてすぐだったのでとても綺麗でした!プールライン時の鴨肉がとても美味しかった!大浴場は小さめですが、とても綺麗です。夜ご飯はつけなかったですが、歩いて行ける距離に居酒屋が数軒あるので全く問題な…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">綺麗な海Ｖｉｌｌａ　オーシャンビュー～広々一軒家貸切３００ｍ２沖縄屈指のリゾートエリア恩納村　＾</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/173949/173949.jpg" alt="綺麗な海Ｖｉｌｌａ　オーシャンビュー～広々一軒家貸切３００ｍ２沖縄屈指のリゾートエリア恩納村　＾ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>沖縄屈指のリゾートエリア恩納村の高台に位置する「綺麗な海ｖｉｌｌａ」はその名前通りｖｉｌｌａからの眺望が自慢です。（３００㎡）</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県国頭郡恩納村字仲泊1425-5 ／ 最寄り駅：那覇空港 ／ 交通案内：儀保駅よりお車にて約３５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>綺麗な海Ｖｉｌｌａ　オーシャンビュー～広々一軒家貸切３００ｍ２沖縄屈指のリゾートエリア恩納村　＾の滞在ポイント：</strong>「沖縄旅行 予算エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ブルーシャローズ恩納村リゾート</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぶるーしゃろーずおんなそんりぞーと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,070〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/191787/191787.jpg" alt="ブルーシャローズ恩納村リゾート 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>恩納村の海辺に立地するホテル。海が一望できるプライベートプール付のお部屋もございます</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県国頭郡恩納村真栄田3378-12　　2Ｆ ／ 最寄り駅：那覇空港 ／ 交通案内：那覇空港から沖縄自動車道経由→石川ICをでて県道78号線を西に進みます。所要時間/約1時間約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>ブルーシャローズ恩納村リゾートの滞在ポイント：</strong>「沖縄旅行 予算エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">琉球オリオンホテル　那覇国際通り（旧：オリオンホテル那覇）</h3>
                  <span className="text-xs text-stone-400 ml-2">（りゅうきゅうおりおんほてるなはこくさいどおり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2906/2906_heya.jpg" alt="琉球オリオンホテル　那覇国際通り（旧：オリオンホテル那覇） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【2025年リブランド】国際通り沿い、牧志駅徒歩3分！「沖縄をもっと楽しくする」旅の拠点となるホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県那覇市安里1-2-21 ／ 最寄り駅：那覇空港 ／ 交通案内：那覇空港よりモノレールで約20分、牧志駅より徒歩3分、国際通り沿い、コンビニ、スーパーも目の前の好立地</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（先着順）　1泊1台1,500円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「トイレットペーパーの補充と対応に不満トイレットペーパーが無くなるという前代未聞の出来事がありました。予備は置いていない。フロントに電話をかけても一向に出ない。仕方ないので取りに行ったら…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ワイズキャビン＆ホテル那覇国際通り</h3>
                  <span className="text-xs text-stone-400 ml-2">（わいず　きゃびんあんどほてるなはこくさいどおり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,975〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/166949/166949_kan1.jpg" alt="ワイズキャビン＆ホテル那覇国際通り 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ゆったり寛げる男女別サウナ付大浴場併設！キャビン・洋室・和室と幅広いラインナップ！！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県那覇市久茂地3-9-18 ／ 最寄り駅：主要駅 ／ 交通案内：ゆいレール県庁前駅徒歩３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有＊予約制＊1泊1,000円(税込)、2026年2月から￥1200円に改定</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スリッパの外出や清掃方法の改善を希望海外のお客様が館内で履くスリッパのまま外出されていました。入り口のスーツケースのタイヤを拭くタオルが乾いたタオルで拭けている気がしませんでした。コストはかか…」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-8">
        <ShareButtons title={"沖縄旅行 予算：2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用"} url={"https://croud-travel.pages.dev/okinawa-travel-budget-plan/"} />
      </div>
      <HubRelatedPosts currentSlug="okinawa-travel-budget-plan" />
</div>
  );
}
