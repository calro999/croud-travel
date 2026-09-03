import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【九州旅行 何泊必要？】2泊3日・3泊4日の費用＆福岡→熊本→別府→鹿児島モデルルートの予算内訳",
  description: "九州旅行は何泊あれば満足できる？2泊3日（福岡＋熊本or別府）・3泊4日（福岡→熊本→別府→鹿児島縦断）の費用を内訳付きで完全解説。九州新幹線・高速バスの交通費比較、温泉旅館・ビジネスホテルの相場も。",
  keywords: ["九州旅行", "予算", "何泊", "モデルコース", "福岡", "熊本", "別府", "鹿児島"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kyushu-travel-budget-how-many-nights"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels", e);
  }
  return [];
}

export default function KyushuTravelNightsPage() {
  const hotels = loadHotels();

  return (
    <div className="space-y-12 max-w-4xl mx-auto pb-16 px-4 md:px-0">
      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden bg-emerald-900 p-8 md:p-14 shadow-lg">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1616428383818-fbd158e2d425?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-block bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-sm tracking-widest">
            KYUSHU TRIP PLANNING
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            九州旅行、ぶっちゃけ何泊必要？<br className="hidden md:block" />
            2泊3日 vs 3泊4日の費用とルート
          </h1>
          <p className="text-sm md:text-base text-emerald-100 font-medium leading-relaxed">
            「九州って広いけど、どこまで回れるの？」九州初心者が最初にぶつかる壁を完全解決。福岡を起点にして、2泊3日ならどこまで行ける？3泊4日なら九州縦断は可能？移動の交通費やご当地グルメの予算まで、徹底的に解説します。
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="text-stone-700 leading-loose">
        <p>
          九州には、博多の屋台、別府の温泉、熊本の城とあか牛、そして鹿児島の雄大な桜島…と魅力が詰まりすぎています。
          すべてを一度に回るのは不可能ですが、<strong>「何泊あればどこまで行けるか」</strong>を知っておけば、旅行計画がグッと楽になります。まずは福岡までのアクセス費用の相場をチェックしましょう。
        </p>
        
        <div className="my-6 bg-white border-l-4 border-emerald-500 p-4 shadow-sm text-sm">
          <h4 className="font-bold text-emerald-900 mb-2">✈️ 福岡（博多）到着までの交通費目安（片道）</h4>
          <ul className="space-y-1 text-stone-600">
            <li>・東京から：LCC利用 <span className="font-bold text-stone-800">約5,000〜12,000円</span> / 新幹線 <span className="font-bold text-stone-800">22,220円</span></li>
            <li>・大阪から：新幹線や高速バスの比較は<Link href="/osaka-fukuoka-bus-vs-shinkansen-guide" className="text-teal-600 underline font-bold">こちら</Link></li>
          </ul>
        </div>
      </div>

      {/* 2泊3日 */}
      <section className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100">
          <h2 className="text-2xl font-black font-journal-serif text-emerald-900">
            【2泊3日】福岡 ＋ 1都市（熊本 or 別府・由布院）
          </h2>
        </div>
        <div className="p-6 md:p-8 space-y-6">
          <p className="text-stone-700">
            2泊3日の場合、欲張らずに<strong>「福岡＋もう1県」</strong>に絞るのが鉄則です。福岡でグルメを堪能し、翌日は新幹線で熊本へ行くか、特急で大分の温泉地へ向かうのが王道ルート。
          </p>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
            <h3 className="font-bold text-stone-800 mb-3 border-b-2 border-stone-300 pb-2 inline-block">💰 2泊3日の予算内訳（1人あたり）</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-stone-600">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>🏨 宿泊（博多ビジネス）:</span> <span className="font-bold text-stone-800">5,500円</span></li>
                <li className="flex justify-between"><span>🏨 宿泊（由布院温泉旅館）:</span> <span className="font-bold text-stone-800">18,000円</span></li>
              </ul>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>🍜 食費（博多ラーメン）:</span> <span className="font-bold text-stone-800">790円</span></li>
                <li className="flex justify-between"><span>🥘 食費（もつ鍋一人前）:</span> <span className="font-bold text-stone-800">1,500円</span></li>
                <li className="flex justify-between"><span>🍱 食費（別府とり天定食）:</span> <span className="font-bold text-stone-800">980円</span></li>
              </ul>
            </div>
            <div className="mt-4 text-right font-black text-emerald-700 text-lg">
              現地予算：約35,000円〜
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/fukuoka-kumamoto-bus-vs-shinkansen-guide" className="bg-white border border-teal-600 text-teal-700 px-3 py-1.5 rounded-full hover:bg-teal-50">
              👉 福岡〜熊本の移動手段を比較
            </Link>
            <Link href="/fukuoka-beppu-yufuin-bus-vs-train-guide" className="bg-white border border-teal-600 text-teal-700 px-3 py-1.5 rounded-full hover:bg-teal-50">
              👉 福岡〜別府・由布院の移動手段を比較
            </Link>
          </div>
        </div>
      </section>

      {/* 3泊4日 */}
      <section className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="bg-amber-50 px-6 py-4 border-b border-amber-100">
          <h2 className="text-2xl font-black font-journal-serif text-amber-900">
            【3泊4日】福岡 → 熊本 → 鹿児島（九州縦断ルート）
          </h2>
        </div>
        <div className="p-6 md:p-8 space-y-6">
          <p className="text-stone-700">
            3泊4日あれば、九州新幹線をフル活用して<strong>福岡から鹿児島まで一気に縦断</strong>することが可能です。移動費はかさみますが、九州の主要な魅力を一気に味わえる贅沢なルートです。
          </p>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
            <h3 className="font-bold text-stone-800 mb-3 border-b-2 border-stone-300 pb-2 inline-block">💰 3泊4日の予算内訳（1人あたり）</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-stone-600">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>🏨 宿泊（博多ビジネス）:</span> <span className="font-bold text-stone-800">5,500円</span></li>
                <li className="flex justify-between"><span>🏨 宿泊（天然温泉付き）:</span> <span className="font-bold text-stone-800">8,000円</span></li>
                <li className="flex justify-between"><span>🏨 宿泊（黒川温泉旅館）:</span> <span className="font-bold text-stone-800">25,000円</span></li>
              </ul>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>🥩 食費（馬刺し盛り合わせ）:</span> <span className="font-bold text-stone-800">2,200円</span></li>
                <li className="flex justify-between"><span>🍛 食費（熊本あか牛丼）:</span> <span className="font-bold text-stone-800">1,650円</span></li>
                <li className="flex justify-between"><span>🍲 食費（黒豚しゃぶしゃぶ）:</span> <span className="font-bold text-stone-800">3,500円</span></li>
              </ul>
            </div>
            <div className="mt-4 text-right font-black text-amber-700 text-lg">
              現地予算：約65,000円〜
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/fukuoka-kagoshima-bus-vs-shinkansen-guide" className="bg-white border border-amber-600 text-amber-700 px-3 py-1.5 rounded-full hover:bg-amber-50">
              👉 福岡〜鹿児島の移動手段を比較（新幹線 vs バス）
            </Link>
          </div>
        </div>
      </section>

      {/* Hotels */}
      {hotels.length > 0 && (
        <section className="pt-8 border-t border-stone-200">
          <div className="text-center mb-8">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2 block">Recommend</span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-800">
              九州旅行の拠点にしたい！おすすめ宿泊施設
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {hotels.map((hotel: any) => (
              <a
                key={hotel.hotelNo}
                href={hotel.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-emerald-500 hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-stone-100 flex items-center justify-center text-xs text-stone-400">NO IMAGE</div>
                  )}
                  {hotel.hotelMinCharge > 0 && (
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                      ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-stone-800 line-clamp-1 mb-1 group-hover:text-emerald-700 transition-colors">
                    {hotel.hotelName}
                  </h3>
                  {hotel.reviewAverage > 0 && (
                    <div className="text-[10px] font-bold text-amber-500">
                      ★ {hotel.reviewAverage} ({hotel.reviewCount})
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
