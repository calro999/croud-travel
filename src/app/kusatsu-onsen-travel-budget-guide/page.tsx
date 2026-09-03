import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【草津温泉旅行 費用】1泊2日いくらかかる？東京からの交通費＆湯畑周辺の宿泊費を完全計算 ｜ 日本全国・旅宿クラウド",
  description: "草津温泉旅行の1泊2日費用を完全解説！東京からの直行バス（3,600円〜）vs 特急草津（6,100円）の交通費比較、湯畑徒歩圏の温泉旅館の宿泊費（8,000〜40,000円）、湯もみショー・西の河原露天風呂の体験費用まで。",
  keywords: ["kusatsu-onsen-travel-budget-guide", "草津温泉", "費用", "1泊2日", "交通費", "直行バス", "宿泊費", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kusatsu-onsen-travel-budget-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kusatsu-onsen-travel-budget-guide", e);
  }
  return [];
}

export default function KusatsuBudgetGuidePage() {
  const hotels = loadHotels();

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans">
      {/* ヒーロー */}
      <section className="bg-gradient-to-b from-sky-800 to-cyan-900 rounded-b-3xl md:rounded-3xl p-10 text-white text-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 space-y-4">
          <p className="text-cyan-200 font-bold text-sm uppercase tracking-widest">
            草津温泉は意外と安い！交通費込みで2万円台から行ける証明
          </p>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight">
            【草津温泉旅行 費用】<br />1泊2日いくらかかる？完全計算
          </h1>
          <p className="text-sm text-cyan-50/80 max-w-2xl mx-auto pt-4">
            「草津って遠いし高そう…」と思っていませんか？実は東京から直行バスを使えば驚くほどリーズナブル。湯畑周辺の宿泊費から、湯もみショー、温泉まんじゅう食べ歩きまで全費用を公開します。
          </p>
        </div>
      </section>

      {/* 予算証明プラン */}
      <section className="px-4 md:px-0">
        <h2 className="text-2xl font-black font-journal-serif text-slate-900 mb-6 text-center">
          📊 1泊2日 草津温泉の予算別シミュレーション
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-center font-bold text-slate-500 mb-2">バス利用・最安プラン</h3>
            <div className="text-center text-3xl font-black text-slate-800 mb-4">¥22,000<span className="text-base font-normal">〜</span></div>
            <ul className="text-xs space-y-2 text-slate-600">
              <li>🚌 往復直行バス：約7,200円</li>
              <li>🏨 湯畑徒歩圏ビジネス：約6,000円</li>
              <li>🍜 食事・食べ歩き：約7,000円</li>
              <li>♨️ 日帰り入浴等：約1,800円</li>
            </ul>
          </div>
          <div className="flex-1 bg-cyan-50 border border-cyan-200 rounded-3xl p-6 shadow-md relative scale-100 md:scale-105 z-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-[10px] font-black px-3 py-1 rounded-full">
              カップル・女子旅に一番人気！
            </div>
            <h3 className="text-center font-bold text-cyan-800 mb-2">標準・満喫プラン</h3>
            <div className="text-center text-4xl font-black text-cyan-900 mb-4">¥38,000<span className="text-base font-normal">〜</span></div>
            <ul className="text-xs space-y-2 text-cyan-900/80 font-medium">
              <li>🚆 往復特急草津＋バス：約12,200円</li>
              <li>🏨 源泉かけ流し中規模旅館：約12,000円</li>
              <li>🍲 上州牛すき焼き等：約10,000円</li>
              <li>♨️ 体験・入浴・土産：約3,800円</li>
            </ul>
          </div>
          <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-center font-bold text-slate-500 mb-2">老舗・贅沢プラン</h3>
            <div className="text-center text-3xl font-black text-slate-800 mb-4">¥70,000<span className="text-base font-normal">〜</span></div>
            <ul className="text-xs space-y-2 text-slate-600">
              <li>🚆 往復特急草津＋バス：約12,200円</li>
              <li>🏨 老舗高級旅館（奈良屋等）：約40,000円〜</li>
              <li>🍣 高級ランチ・バー：約13,000円</li>
              <li>♨️ 貸切風呂・体験：約4,800円</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 詳細な費用の内訳 */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200">
        <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-800 mb-6">
          📝 費用の詳細内訳リスト
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 交通費 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold bg-slate-200 inline-block px-3 py-1 rounded text-slate-700">交通費（東京発）</h3>
            <ul className="text-sm space-y-3">
              <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span>🚌 高速直行バス（片道）</span>
                <span className="font-bold">3,600円〜</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span>🚆 特急草津＋路線バス（片道）</span>
                <span className="font-bold">約6,100円</span>
              </li>
            </ul>
            <div className="mt-2 text-xs">
              👉 詳細比較は<Link href="/tokyo-kusatsu-onsen-highway-bus-guide" className="text-cyan-600 hover:underline">東京〜草津温泉の直行バス・特急比較</Link>へ
            </div>
          </div>

          {/* 食費 */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold bg-slate-200 inline-block px-3 py-1 rounded text-slate-700">食費・食べ歩き</h3>
            <ul className="text-sm space-y-3">
              <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span>♨️ 温泉まんじゅう（1個）</span>
                <span className="font-bold">約150円</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span>🍡 焼きまんじゅう</span>
                <span className="font-bold">約400円</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span>🥢 手打ちそばランチ</span>
                <span className="font-bold">約1,200円</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span>🥩 上州牛すき焼き・ディナー</span>
                <span className="font-bold">約3,500円〜</span>
              </li>
            </ul>
          </div>

          {/* 観光・入浴 */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-sm font-bold bg-slate-200 inline-block px-3 py-1 rounded text-slate-700">入浴・体験費用（三湯めぐり等）</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-3">
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="text-xs text-slate-500 mb-1">西の河原露天風呂</div>
                <div className="font-bold text-cyan-700">700円</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="text-xs text-slate-500 mb-1">御座之湯</div>
                <div className="font-bold text-cyan-700">700円</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="text-xs text-slate-500 mb-1">大滝乃湯</div>
                <div className="font-bold text-cyan-700">980円</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="text-xs text-slate-500 mb-1">湯もみ体験</div>
                <div className="font-bold text-cyan-700">300円</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-right">※光泉寺参拝や湯もみショーの見学自体は無料（施設入場料別）</p>
          </div>
        </div>
      </section>

      {/* 🏨 ホテルセクション */}
      <section className="px-4 md:px-0">
        <h2 className="text-2xl font-black font-journal-serif text-slate-900 mb-6">
          🏨 湯畑周辺のおすすめ温泉旅館
        </h2>
        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotels.map((hotel: any) => (
              <article key={hotel.hotelNo} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  {hotel.hotelImageUrl && (
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{hotel.hotelName}</h3>
                    {hotel.reviewAverage > 0 && (
                      <div className="text-[10px] font-bold text-cyan-700 mb-2">⭐ {hotel.reviewAverage}（{hotel.reviewCount}件）</div>
                    )}
                    {hotel.hotelMinCharge > 0 && (
                      <div className="text-xs font-black text-slate-800 bg-slate-100 inline-block px-2 py-1 rounded">
                        目安: ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜/人
                      </div>
                    )}
                  </div>
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block w-full text-center py-2.5 text-xs font-bold text-white bg-slate-800 hover:bg-black rounded-xl transition">
                    宿泊プランを見る
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
