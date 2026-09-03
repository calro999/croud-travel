import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【箱根 vs 熱海 どっちに行く？】日帰り・1泊2日それぞれのおすすめを本気で比較",
  description: "箱根と熱海、週末にどっちに行くか迷ったらこの記事。日帰りなら熱海、1泊なら箱根。交通費・宿泊費・グルメで徹底比較。",
  keywords: ["hakone-vs-atami-which-better", "箱根", "熱海", "日帰り", "1泊2日", "比較", "おすすめ"],
};

interface Hotel {
  hotelName: string;
  hotelSpecial: string;
  hotelImageUrl: string;
  hotelMinCharge: number;
  affiliateUrl: string;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hakone-vs-atami-which-better"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels", e);
  }
  return [];
}

export default function HakoneVsAtamiPage() {
  const hotels = loadHotels();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <main className="max-w-4xl mx-auto px-4 pt-12 md:pt-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-bold tracking-wider mb-4">
            週末旅行ガイド
          </span>
          <h1 className="font-journal-serif text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
            【箱根 vs 熱海 どっちに行く？】<br/>日帰り・1泊2日それぞれのおすすめを本気で比較
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            都心から気軽に行ける二大温泉地。「今週末どっちに行こう？」と悩んでいませんか？交通費、宿泊費、グルメのリアルな情報を元に徹底比較しました。
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="font-journal-serif text-2xl font-bold text-teal-800 mb-6 text-center">
            結論から言うと、ズバリこう！
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-teal-900 mb-2">日帰りでサクッと行くなら</h3>
              <div className="text-4xl font-black text-teal-600 mb-2">熱海</div>
              <div className="text-amber-500 text-xl tracking-widest mb-4">★★★★★</div>
              <p className="text-sm text-slate-700 text-left">
                駅前に商店街が密集しており、到着してすぐに食べ歩きや海辺の散策が楽しめます。移動時間が短く、日帰りの限られた時間をフル活用できます。（箱根は★★★☆☆）
              </p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">1泊2日でじっくり満喫なら</h3>
              <div className="text-4xl font-black text-emerald-600 mb-2">箱根</div>
              <div className="text-amber-500 text-xl tracking-widest mb-4">★★★★★</div>
              <p className="text-sm text-slate-700 text-left">
                美術館、ロープウェイ、芦ノ湖の海賊船など見どころが広範囲に点在。温泉旅館でゆっくり過ごす非日常感は1泊してこそ味わえます。（熱海は★★★★☆）
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12 mb-16">
          <section>
            <h3 className="font-journal-serif text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm">1</span>
              交通費とアクセス：意外な差が出る移動コスト
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 border border-slate-200 rounded-3xl bg-white">
                <h4 className="font-bold text-lg mb-3">箱根へのアクセス</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>・新宿からロマンスカー：片道約2,520円</li>
                  <li>・箱根フリーパス（2日用）：6,100円（新宿発着）</li>
                  <li className="mt-4 pt-4 border-t text-xs text-slate-500">
                    ※箱根内は交通機関の乗り継ぎが多いため、フリーパスを買うのが圧倒的にお得です。
                  </li>
                </ul>
              </div>
              <div className="p-6 border border-slate-200 rounded-3xl bg-white">
                <h4 className="font-bold text-lg mb-3">熱海へのアクセス</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>・東京から普通列車（東海道線）：片道約1,980円</li>
                  <li>・新幹線自由席：片道約4,270円</li>
                  <li className="mt-4 pt-4 border-t text-xs text-slate-500">
                    ※普通列車でも2時間かからず行ける手軽さが魅力。<br/>
                    <Link href="/tokyo-izu-atami-bus-vs-train-guide" className="text-teal-600 underline">東京から熱海・伊豆へのアクセス比較</Link>も参考に。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-journal-serif text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm">2</span>
              宿泊費の相場：ピンキリの箱根、コスパの熱海
            </h3>
            <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <p className="text-slate-700 mb-4">
                <strong>箱根：1泊 8,000円〜40,000円</strong><br/>
                超高級旅館からカジュアルなゲストハウスまで幅広く揃っていますが、全体的に単価は高め。特に露天風呂付き客室などは人気で価格が跳ね上がります。
              </p>
              <p className="text-slate-700">
                <strong>熱海：1泊 6,000円〜30,000円</strong><br/>
                大型の温泉ホテルが多く、バイキング形式の食事が付いて1万円台というコスパの良い宿が探しやすいのが特徴です。
              </p>
            </div>
          </section>

          <section>
            <h3 className="font-journal-serif text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm">3</span>
              グルメ対決：名物を食べるか、海鮮を食らうか
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-3xl border border-slate-200">
                <div className="text-4xl mb-2">🥚</div>
                <h4 className="font-bold mb-2">箱根のグルメ</h4>
                <p className="text-sm text-slate-600">
                  大涌谷の黒たまご（5個500円）<br/>
                  強羅の豆腐料理（約1,200円〜）<br/>
                  自然の恵みを活かした名物が多い。
                </p>
              </div>
              <div className="bg-white p-4 rounded-3xl border border-slate-200">
                <div className="text-4xl mb-2">🐟</div>
                <h4 className="font-bold mb-2">熱海のグルメ</h4>
                <p className="text-sm text-slate-600">
                  熱海プリン（約380円）<br/>
                  近海モノの海鮮丼（約1,800円〜）<br/>
                  映えスイーツと新鮮な海の幸が充実。
                </p>
              </div>
            </div>
          </section>
        </div>

        {hotels.length > 0 && (
          <section>
            <h2 className="font-journal-serif text-2xl font-bold text-slate-800 mb-8 text-center border-t border-slate-200 pt-12">
              箱根・熱海のおすすめ宿ピックアップ
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200">
                  <div className="h-48 relative">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-slate-800 line-clamp-2">{hotel.hotelName}</h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">{hotel.hotelSpecial}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-teal-700 font-bold">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "価格未定"}
                      </span>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-4 py-2 rounded-full transition-colors"
                      >
                        予約サイトへ
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
