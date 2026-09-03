import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大阪旅行 費用】1泊2日・2泊3日の総額はいくら？USJ込みの予算＆道頓堀グルメ食費シミュレーション",
  description: "大阪旅行の費用を1泊2日（USJなし）・2泊3日（USJ込み）パターンで完全シミュレーション！東京・名古屋・福岡からの交通費、なんば・梅田のホテル相場、道頓堀・新世界のグルメ食費まで、全部具体的な金額で解説。",
  keywords: ["大阪旅行", "予算", "USJ", "道頓堀", "費用シミュレーション", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["osaka-travel-budget-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels", e);
  }
  return [];
}

export default function OsakaTravelBudgetPage() {
  const hotels = loadHotels();

  return (
    <div className="space-y-12 max-w-4xl mx-auto pb-16 px-4 md:px-0">
      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-rose-500 to-indigo-600 text-white p-8 md:p-12 shadow-2xl">
        <div className="max-w-2xl space-y-5">
          <span className="text-xs font-black tracking-wider bg-white text-rose-600 px-4 py-1.5 rounded-full uppercase inline-block shadow">
            OSAKA BUDGET GUIDE
          </span>
          <h1 className="text-3xl md:text-4xl font-black font-journal-serif tracking-tight leading-snug text-white">
            【大阪旅行の費用】1泊2日・2泊3日の総額は？USJ込みの予算＆道頓堀グルメ食い倒れシミュレーション
          </h1>
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
            「大阪旅行に行きたいけど、結局いくらあれば足りる？」
            USJに行くか行かないかで、大阪旅行の予算はガラッと変わります。今回は交通費・ホテル代・食い倒れグルメの具体的な金額を出して、2パターンのリアルな予算書を大公開します！
          </p>
        </div>
      </div>

      {/* Intro text */}
      <div className="prose prose-lg max-w-none text-stone-700">
        <p>
          まいど！大阪旅行の計画を立てる時、一番気になるのが<strong>「お金」</strong>のこと。
          たこ焼き、串カツ、お好み焼き…美味しいものだらけの大阪だからこそ、食費の計算も欠かせません。
          東京などから向かう場合の<Link href="/tokyo-osaka-bus-vs-shinkansen-guide" className="text-emerald-600 font-bold underline">交通費</Link>も含め、ガチで計算してみました。
        </p>
      </div>

      {/* Pattern 1: 1泊2日 USJなし */}
      <section className="bg-amber-50/50 border border-amber-200 rounded-3xl p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-black font-journal-serif text-amber-900 border-b-2 border-amber-200 pb-3 mb-6">
          パターン①：USJなし！食い倒れ特化の1泊2日予算
        </h2>
        <p className="text-stone-700 mb-6">
          道頓堀、新世界、天王寺エリアを巡り、ひたすら美味しいものを食べまくる1泊2日。USJのチケット代がかからない分、食費やホテルに少し予算を回せます。
        </p>
        
        <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-stone-100 space-y-6">
          <h3 className="text-xl font-bold text-stone-800 text-center bg-amber-100 py-2 rounded-xl">
            1人あたりの総額目安：約25,000円〜（交通費別途）
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-amber-800 border-b border-amber-200 pb-1">🏨 宿泊費の目安</h4>
              <ul className="text-sm space-y-2 text-stone-600">
                <li>・なんば周辺カプセル/ホステル：<span className="font-bold text-stone-800">2,800円〜</span></li>
                <li>・梅田周辺ビジネスホテル：<span className="font-bold text-stone-800">6,000円〜</span></li>
                <li>・心斎橋おしゃれホテル：<span className="font-bold text-stone-800">12,000円〜</span></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-amber-800 border-b border-amber-200 pb-1">🐙 食費のリアル内訳</h4>
              <ul className="text-sm space-y-2 text-stone-600">
                <li>・たこ焼き（8個）：<span className="font-bold text-stone-800">約500円</span></li>
                <li>・お好み焼き：<span className="font-bold text-stone-800">約1,100円</span></li>
                <li>・新世界ジャンジャン横丁ホルモン：<span className="font-bold text-stone-800">約1,500円</span></li>
                <li>・串カツ盛り合わせ：<span className="font-bold text-stone-800">約1,200円</span></li>
                <li>・かすうどん：<span className="font-bold text-stone-800">約780円</span></li>
                <li>・551蓬莱の豚まん（アツアツ2個）：<span className="font-bold text-stone-800">460円</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern 2: 2泊3日 USJ込み */}
      <section className="bg-teal-50/50 border border-teal-200 rounded-3xl p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-black font-journal-serif text-teal-900 border-b-2 border-teal-200 pb-3 mb-6">
          パターン②：USJを遊び尽くす！王道2泊3日予算
        </h2>
        <p className="text-stone-700 mb-6">
          丸1日をユニバーサル・スタジオ・ジャパンに捧げ、もう1日を大阪観光（道頓堀など）に充てる王道プラン。USJのチケット代やエクスプレスパスが予算の大きなウェイトを占めます。
        </p>
        
        <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-stone-100 space-y-6">
          <h3 className="text-xl font-bold text-stone-800 text-center bg-teal-100 py-2 rounded-xl">
            1人あたりの総額目安：約60,000円〜（交通費別途）
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-teal-800 border-b border-teal-200 pb-1">🎢 USJ関連費用</h4>
              <ul className="text-sm space-y-2 text-stone-600">
                <li>・1デイ・スタジオ・パス：<span className="font-bold text-stone-800">8,600〜9,800円</span>（日によって変動）</li>
                <li>・エクスプレス・パス4：<span className="font-bold text-stone-800">7,800〜15,800円</span>（※課金推奨）</li>
                <li>・パーク内の飲食（マリオカフェ等）：<span className="font-bold text-stone-800">約3,000〜5,000円</span></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-teal-800 border-b border-teal-200 pb-1">🏨 宿泊費の目安（2泊分）</h4>
              <ul className="text-sm space-y-2 text-stone-600">
                <li>・USJオフィシャルホテル：<span className="font-bold text-stone-800">18,000円/泊〜</span></li>
                <li>・大阪駅周辺のビジネスホテル：<span className="font-bold text-stone-800">7,000円/泊〜</span></li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">※オフィシャルホテルに泊まれば開園待ちが劇的にラクになります！</p>
            </div>
          </div>
        </div>
      </section>

      {/* Souvenirs */}
      <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-black font-journal-serif text-stone-800 mb-6">
          🛍 忘れちゃいけない！定番お土産の予算
        </h2>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <div className="bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl flex-1 min-w-[250px]">
            <span className="block text-lg mb-1">🍰 りくろーおじさんの店</span>
            <span className="text-stone-600">焼きたてチーズケーキ：</span>
            <span className="font-black text-rose-600 text-lg ml-2">965円</span>
            <p className="text-xs text-stone-500 mt-1">新大阪駅で並んででも買いたい一品。</p>
          </div>
          <div className="bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl flex-1 min-w-[250px]">
            <span className="block text-lg mb-1">🥟 551蓬莱</span>
            <span className="text-stone-600">豚まん（チルド10個入）：</span>
            <span className="font-black text-rose-600 text-lg ml-2">3,080円</span>
            <p className="text-xs text-stone-500 mt-1">家に帰ってからも大阪を楽しめます。</p>
          </div>
        </div>
      </section>

      {/* Hotel Recommendations */}
      {hotels.length > 0 && (
        <section className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏨</span>
            <h2 className="text-2xl font-black font-journal-serif text-emerald-950">
              大阪旅行におすすめのホテル
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel: any) => (
              <article
                key={hotel.hotelNo}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow border border-emerald-900/10 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] relative bg-stone-100">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
                      NO IMAGE
                    </div>
                  )}
                  {hotel.hotelMinCharge > 0 && (
                    <span className="absolute bottom-2 right-2 text-xs font-black bg-stone-900/80 text-white px-2.5 py-1 rounded-md">
                      ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-grow space-y-3">
                  {hotel.reviewAverage > 0 && (
                    <div className="text-xs font-bold text-amber-600">
                      ⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)
                    </div>
                  )}
                  <h3 className="text-sm font-black text-emerald-950 line-clamp-2 leading-tight">
                    {hotel.hotelName}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 mt-auto">
                    {hotel.hotelSpecial || "大阪の観光拠点に便利なホテルです。"}
                  </p>
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors mt-2"
                  >
                    楽天トラベルで見る ➔
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-center">
        <h3 className="text-emerald-900 font-bold mb-4">🚕 交通費を抑えたい方はこちらもチェック</h3>
        <Link 
          href="/tokyo-osaka-bus-vs-shinkansen-guide"
          className="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full border border-emerald-200 shadow-sm hover:shadow hover:bg-emerald-50 transition"
        >
          東京〜大阪間の夜行バス vs 新幹線 徹底比較ガイドを見る
        </Link>
      </section>
    </div>
  );
}
