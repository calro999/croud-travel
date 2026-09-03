import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【熱海・伊豆旅行 費用】日帰り・1泊2日でいくら？東京から片道2,000円で行ける温泉リゾートの全費用 ｜ 日本全国・旅宿クラウド",
  description: "熱海・伊豆旅行の費用を日帰り温泉・1泊2日で完全計算！東京から普通列車で片道1,980円、熱海プリン・海鮮丼のグルメ費用、来宮神社・MOA美術館の入場料、オーシャンビュー温泉旅館の宿泊費まで全部公開。",
  keywords: ["atami-izu-travel-budget-guide", "熱海", "伊豆", "旅行費用", "日帰り", "1泊2日", "コスパ", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["atami-izu-travel-budget-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for atami-izu-travel-budget-guide", e);
  }
  return [];
}

export default function AtamiBudgetGuidePage() {
  const hotels = loadHotels();

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans">
      {/* ヒーロー */}
      <section className="bg-pink-50 rounded-3xl p-8 md:p-14 border border-pink-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="relative z-10 text-center space-y-5">
          <span className="bg-rose-500 text-white text-xs font-black tracking-widest px-4 py-1.5 rounded-full shadow-sm inline-block">
            コスパ最強の温泉リゾート費用白書
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif text-slate-800 leading-tight">
            【熱海・伊豆旅行 費用】<br />日帰り・1泊2日でいくらかかる？
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto font-medium">
            東京から片道たったの1,980円！思い立ったらすぐ行ける距離感が最大の魅力。大人気の「熱海プリン」や海鮮丼、絶景オーシャンビュー旅館まで、今週末の旅行にすぐ使えるリアルな予算ガイドです。
          </p>
        </div>
      </section>

      {/* 交通費の安さが圧倒的 */}
      <section className="px-4 md:px-0">
        <div className="bg-white border-2 border-slate-800 rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)]">
          <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
            <span>🚆</span> 東京〜熱海の交通費比較（片道）
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 border-2 border-rose-200 bg-rose-50 rounded-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">最安！</div>
              <div className="text-sm font-bold text-slate-700 mb-1">JR普通列車</div>
              <div className="text-2xl font-black text-rose-600">1,980円</div>
              <div className="text-xs text-slate-500 mt-2">（グリーン車 ＋約800円）</div>
            </div>
            <div className="p-4 border-2 border-slate-100 rounded-2xl">
              <div className="text-sm font-bold text-slate-700 mb-1">特急「踊り子」</div>
              <div className="text-2xl font-black text-slate-800">3,340円</div>
              <div className="text-xs text-slate-500 mt-2">（全席指定・快適）</div>
            </div>
            <div className="p-4 border-2 border-slate-100 rounded-2xl">
              <div className="text-sm font-bold text-slate-700 mb-1">新幹線「こだま」</div>
              <div className="text-2xl font-black text-slate-800">4,270円</div>
              <div className="text-xs text-slate-500 mt-2">（最速約45分！）</div>
            </div>
          </div>
          <div className="mt-4 text-right text-sm">
            🔗 <Link href="/tokyo-izu-atami-bus-vs-train-guide" className="text-blue-600 font-bold hover:underline">熱海・伊豆の詳しい交通アクセス比較はこちら</Link>
          </div>
        </div>
      </section>

      {/* シミュレーション */}
      <section className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
        {/* 日帰り */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-slate-800 border-b-2 border-rose-200 pb-2">
            サクッと！日帰りプラン（約8,000円）
          </h2>
          <ul className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4 text-sm">
            <li className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-slate-600">🚆 交通費（普通列車往復）</span>
              <span className="font-bold text-slate-800">3,960円</span>
            </li>
            <li className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-slate-600">🐟 ランチ（熱海駅前 海鮮丼）</span>
              <span className="font-bold text-slate-800">約1,800円</span>
            </li>
            <li className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-slate-600">🍮 カフェ（熱海プリン等）</span>
              <span className="font-bold text-slate-800">約380円</span>
            </li>
            <li className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-slate-600">⛩️ 観光（来宮神社）</span>
              <span className="font-bold text-slate-800">無料</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-slate-600">♨️ 日帰り温泉入浴</span>
              <span className="font-bold text-slate-800">約1,000円</span>
            </li>
          </ul>
        </div>
        
        {/* 1泊2日 */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-slate-800 border-b-2 border-rose-200 pb-2">
            ゆったり！1泊2日プラン（2〜5万円）
          </h2>
          <ul className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4 text-sm">
            <li className="flex justify-between items-center border-b border-slate-50 pb-2">
              <span className="text-slate-600">🚆 交通費・食費・観光等</span>
              <span className="font-bold text-slate-800">約10,000円</span>
            </li>
            <li className="pt-2">
              <span className="text-slate-600 font-bold block mb-2">🏨 宿泊費（スタイル別）</span>
              <div className="space-y-2 pl-4">
                <div className="flex justify-between text-xs">
                  <span>熱海駅前ビジネスホテル</span>
                  <span className="font-bold">約6,000円〜</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>海が見える温泉ホテル（2食付）</span>
                  <span className="font-bold text-rose-600">約12,000円〜</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>伊豆高原オーベルジュ</span>
                  <span className="font-bold">約22,000円〜</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>高級旅館（せかいえ 等）</span>
                  <span className="font-bold">約45,000円〜</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* グルメ・入場料相場 */}
      <section className="bg-rose-50/50 rounded-3xl p-8 border border-rose-100">
        <h2 className="text-lg font-black text-slate-800 mb-4 text-center">👛 その他のお金事情メモ</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-rose-800 mb-2">グルメ相場</h3>
            <ul className="space-y-1 text-slate-600">
              <li>・来宮のジェラート：約450円</li>
              <li>・熱海銀座の干物定食：約1,200円</li>
              <li>・夜の居酒屋：約3,500円〜</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-rose-800 mb-2">主要観光スポット入場料</h3>
            <ul className="space-y-1 text-slate-600">
              <li>・MOA美術館：1,600円（オンライン割あり）</li>
              <li>・起雲閣：610円</li>
              <li>・アカオフォレスト（旧ハーブ&ローズガーデン）：1,500円〜</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🏨 ホテルセクション */}
      <section className="px-4 md:px-0">
        <h2 className="text-2xl font-black font-journal-serif text-slate-900 mb-6">
          🏨 熱海・伊豆エリアの絶景温泉宿
        </h2>
        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotels.map((hotel: any) => (
              <article key={hotel.hotelNo} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  {hotel.hotelImageUrl && (
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  )}
                  {hotel.hotelMinCharge > 0 && (
                    <span className="absolute top-2 right-2 text-[10px] font-black bg-rose-500 text-white px-2 py-1 rounded-full shadow">
                      ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                    </span>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {hotel.reviewAverage > 0 && (
                      <div className="text-[10px] font-bold text-amber-500 mb-1">⭐ {hotel.reviewAverage}（{hotel.reviewCount}件）</div>
                    )}
                    <h3 className="text-sm font-bold text-slate-800 leading-snug">{hotel.hotelName}</h3>
                  </div>
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block w-full text-center py-2 text-xs font-bold text-slate-700 border-2 border-slate-200 hover:border-slate-800 hover:bg-slate-800 hover:text-white rounded-xl transition">
                    楽天トラベルで空室確認
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 text-sm">ホテル情報を準備中です。</div>
        )}
      </section>
      
      {/* リンク */}
      <div className="text-center">
        <Link href="/prefectures" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 px-6 py-3 rounded-xl transition shadow-sm">
          🗾 全国都道府県ガイドへ
        </Link>
      </div>
    </div>
  );
}
