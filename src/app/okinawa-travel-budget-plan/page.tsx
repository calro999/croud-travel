import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【沖縄旅行 予算】2泊3日・3泊4日それぞれいくら？航空券・レンタカー・リゾートホテルのリアル費用",
  description: "沖縄旅行の予算を2泊3日（那覇中心）・3泊4日（美ら海水族館＋恩納村リゾート込み）で完全計算！LCC vs 大手航空の航空券代、レンタカーの有無で変わる費用差、ビーチホテルの宿泊費、沖縄そば・タコライス・ステーキの食費まで。",
  keywords: ["沖縄旅行", "予算", "費用", "レンタカー", "リゾートホテル", "2泊3日", "3泊4日", "楽天トラベル"],
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

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 px-4 md:px-6">
      {/* Hero Section */}
      <div className="relative rounded-t-[3rem] rounded-b-xl overflow-hidden bg-sky-900 shadow-xl border-b-8 border-cyan-400">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 p-10 md:p-16 text-center space-y-6">
          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/40 text-white text-xs font-black px-5 py-2 rounded-full tracking-widest">
            OKINAWA BUDGET SIMULATION
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white drop-shadow-md">
            【沖縄旅行の予算】<br />
            最安旅 vs リゾート贅沢旅の振れ幅がすごい！
          </h1>
          <p className="text-sm md:text-base text-cyan-50 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            LCC＋レンタカーなしで極限まで安く抑えるか、海沿いのリゾートホテルで優雅に過ごすか。スタイルによって「0が1つ違う」ほど予算が変わる沖縄旅行。航空券・レンタカー・食費・ホテル代のリアルな金額を全て公開します。
          </p>
        </div>
      </div>

      {/* Plan Comparisons */}
      <div className="space-y-8">
        <h2 className="text-2xl font-black text-center text-sky-950 mb-4">
          あなたの旅はどれ？3つの予算プラン
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* プラン1 */}
          <div className="bg-white border-2 border-stone-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-bl-xl">1人 3.5〜5万円</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2 mt-4">🎒 最安プラン</h3>
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
            <h3 className="text-xl font-bold text-sky-900 mb-2 mt-4">🚗 中間王道プラン</h3>
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
            <h3 className="text-xl font-bold text-amber-900 mb-2 mt-4">🥂 贅沢プラン</h3>
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
        <h2 className="text-2xl font-black font-journal-serif text-stone-800 mb-8 border-b-2 border-cyan-200 pb-2 inline-block">
          現地での出費：食費＆遊び代の相場
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-bold text-orange-600 mb-4 flex items-center gap-2">
              <span>🍽</span> 沖縄グルメ相場
            </h3>
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
            <h3 className="text-lg font-bold text-cyan-600 mb-4 flex items-center gap-2">
              <span>🐠</span> アクティビティ＆その他
            </h3>
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
          <h2 className="text-2xl font-black font-journal-serif text-sky-900 text-center mb-8">
            沖縄のおすすめホテル・リゾート
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel: any) => (
              <div key={hotel.hotelNo} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col">
                <div className="aspect-[16/9] relative">
                  {hotel.hotelImageUrl ? (
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
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
                    rel="noopener noreferrer"
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
    </div>
  );
}
