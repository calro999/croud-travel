import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【箱根旅行 費用】日帰り・1泊2日それぞれいくら？フリーパス活用の交通費＆温泉旅館の宿泊費シミュレーション ｜ 日本全国・旅宿クラウド",
  description: "箱根旅行の費用を日帰り・1泊2日で完全シミュレーション！箱根フリーパス（6,100円）で元を取る回り方、芦ノ湖・大涌谷・彫刻の森の入場料、箱根湯本・強羅・仙石原の温泉旅館相場まで全公開。",
  keywords: ["hakone-travel-budget-guide", "箱根旅行", "費用", "日帰り", "1泊2日", "箱根フリーパス", "温泉旅館", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hakone-travel-budget-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hakone-travel-budget-guide", e);
  }
  return [];
}

export default function HakoneBudgetGuidePage() {
  const hotels = loadHotels();

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-tr from-amber-600 via-orange-500 to-red-500 rounded-3xl p-10 md:p-16 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 text-[200px] leading-none pointer-events-none">♨️</div>
        <div className="relative z-10 space-y-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full">
            箱根フリーパスで元が取れるのか？を検証する実用ガイド
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight">
            【箱根旅行 費用】<br className="hidden md:block"/>日帰り・1泊2日それぞれいくら？
          </h1>
          <p className="text-sm md:text-base font-medium text-orange-50 max-w-2xl">
            新宿からのロマンスカー代、大涌谷の黒たまご、彫刻の森美術館の入場料から、強羅や仙石原の温泉旅館の相場まで。リアルな出費を包み隠さず計算します。
          </p>
        </div>
      </section>

      {/* 箱根フリーパス検証セクション */}
      <section className="bg-orange-50 rounded-3xl p-8 border border-orange-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-black text-orange-950 font-journal-serif">
              🎫 「箱根フリーパス」は本当に元が取れる？
            </h2>
            <p className="text-sm text-orange-900/80 leading-relaxed">
              新宿発の箱根フリーパス（2日間有効）は大人6,100円。これだけで箱根登山鉄道、ケーブルカー、ロープウェイ、海賊船、登山バスが乗り放題になります。（※ロマンスカー特急券1,110円は別途必要）
            </p>
            <div className="bg-white p-5 rounded-2xl border border-orange-100 shadow-sm">
              <h3 className="font-bold text-orange-800 text-sm mb-3">フリーパスなしで王道ルートを回ると…</h3>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex justify-between border-b border-slate-100 pb-1"><span>新宿 ⇄ 箱根湯本（乗車券）</span><span>2,540円</span></li>
                <li className="flex justify-between border-b border-slate-100 pb-1"><span>箱根湯本 → 強羅（登山鉄道）</span><span>460円</span></li>
                <li className="flex justify-between border-b border-slate-100 pb-1"><span>強羅 → 早雲山（ケーブルカー）</span><span>430円</span></li>
                <li className="flex justify-between border-b border-slate-100 pb-1"><span>早雲山 ⇄ 桃源台（ロープウェイ往復）</span><span>2,500円</span></li>
                <li className="flex justify-between border-b border-slate-100 pb-1"><span>桃源台 ⇄ 元箱根港（海賊船往復）</span><span>2,220円</span></li>
                <li className="flex justify-between font-bold text-red-600 pt-1"><span>合計交通費</span><span>8,150円！</span></li>
              </ul>
              <p className="text-xs font-bold text-orange-700 mt-3 text-center bg-orange-100 py-2 rounded-lg">
                結論：王道ルートを回るだけで、フリーパスの方が約2,000円お得！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 日帰り vs 1泊2日 比較 */}
      <section className="px-4 md:px-0 space-y-6">
        <h2 className="text-2xl font-black font-journal-serif text-slate-900 text-center">
          💸 箱根旅行の総額シミュレーション
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* 日帰り */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 border-b-2 border-slate-100 pb-3 mb-4">
              日帰り箱根プラン
            </h3>
            <div className="text-3xl font-black text-orange-600 mb-6 text-center">
              約12,000円<span className="text-sm text-slate-500 font-normal"> / 1人</span>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2"><span className="text-lg">🚆</span> 交通費（フリーパス＋特急券）</span>
                <span className="font-bold">7,210円</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2"><span className="text-lg">🍱</span> 昼食・食べ歩き</span>
                <span className="font-bold">約2,500円</span>
              </div>
              <p className="text-xs text-slate-500 pl-8">箱根ベーカリー(400円)、湯葉そば(1,200円)、大涌谷黒たまご(5個500円)など</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2"><span className="text-lg">🎫</span> 観光・入場料（彫刻の森等）</span>
                <span className="font-bold">約1,500円</span>
              </div>
            </div>
          </div>

          {/* 1泊2日 */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-lg relative">
            <div className="absolute top-0 right-4 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              おすすめ！
            </div>
            <h3 className="text-xl font-bold border-b-2 border-slate-700 pb-3 mb-4">
              1泊2日 温泉旅館満喫プラン
            </h3>
            <div className="text-3xl font-black text-amber-400 mb-6 text-center">
              約2.5〜5万円<span className="text-sm text-slate-400 font-normal"> / 1人</span>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2"><span className="text-lg">🚆</span> 交通費・食費・入場料</span>
                <span className="font-bold text-white">約13,000円</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-700">
                <span className="flex items-center gap-2"><span className="text-lg">🏨</span> 宿泊費（エリア別相場）</span>
              </div>
              <ul className="space-y-2 pl-8 text-xs">
                <li className="flex justify-between"><span>箱根湯本駅前（手軽）</span><span>約8,000円〜</span></li>
                <li className="flex justify-between text-amber-300"><span>強羅（にごり湯旅館）</span><span>約18,000円〜</span></li>
                <li className="flex justify-between"><span>仙石原（高級オーベルジュ）</span><span>約40,000円〜</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 熱海との比較 */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
        <p className="text-sm text-slate-700 mb-3 font-medium">「もう少し安く温泉に行けないかな？」と思ったら熱海も選択肢に！</p>
        <Link href="/tokyo-izu-atami-bus-vs-train-guide" className="text-blue-600 font-bold text-sm hover:underline">
          ▶ 東京〜熱海・伊豆の交通費徹底比較（片道1,980円〜）はこちら
        </Link>
      </div>

      {/* 🏨 ホテルセクション */}
      <section className="px-4 md:px-0">
        <h2 className="text-2xl font-black font-journal-serif text-slate-900 mb-6 border-b-2 border-orange-200 pb-2">
          🏨 箱根エリアのおすすめ温泉旅館
        </h2>
        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotels.map((hotel: any) => (
              <article key={hotel.hotelNo} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:border-orange-300 transition flex flex-col group">
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  {hotel.hotelImageUrl && (
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  )}
                  {hotel.hotelMinCharge > 0 && (
                    <span className="absolute bottom-2 left-2 text-[11px] font-black bg-white/90 text-slate-900 px-2 py-1 rounded shadow">
                      ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                    </span>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">{hotel.hotelName}</h3>
                    {hotel.reviewAverage > 0 && (
                      <div className="text-[10px] font-bold text-orange-600 mt-1">⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</div>
                    )}
                  </div>
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2 text-xs font-bold text-orange-700 bg-orange-100 hover:bg-orange-200 rounded-xl transition">
                    空室・プランを見る
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
