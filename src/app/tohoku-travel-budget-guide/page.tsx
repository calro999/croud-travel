import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【東北旅行 費用】2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳 ｜ 日本全国・旅宿クラウド",
  description: "東北旅行の費用を2泊3日（仙台＋松島＋銀山温泉or蔵王温泉）のモデルコースで完全計算。東京からの東北新幹線vs高速バスの交通費比較、牛たん・ずんだ餅のグルメ費用、銀山温泉のレトロ旅館の宿泊費まで内訳公開。",
  keywords: ["tohoku-travel-budget-guide", "東北旅行", "費用", "2泊3日", "仙台", "松島", "銀山温泉", "モデルコース", "楽天トラベル"],
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

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans">
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
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white drop-shadow-md">
            【東北旅行 費用】2泊3日で仙台・松島・銀山温泉を巡るといくらかかる？交通費＆宿泊費の完全内訳
          </h1>
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
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Link href="/tokyo-sendai-bus-vs-shinkansen-guide" className="flex-1 bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl border border-slate-200 transition group">
            <h3 className="font-bold text-teal-800 text-sm mb-2 group-hover:underline">▶ 東京〜仙台の移動比較</h3>
            <p className="text-xs text-slate-600">新幹線はやぶさ（約11,410円） vs 高速バス（約2,500円〜）の詳細解説はこちら。</p>
          </Link>
          <Link href="/tokyo-yamagata-zao-bus-vs-shinkansen-guide" className="flex-1 bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl border border-slate-200 transition group">
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
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
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
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block w-full text-center py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition">
                    楽天トラベルで見る
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
