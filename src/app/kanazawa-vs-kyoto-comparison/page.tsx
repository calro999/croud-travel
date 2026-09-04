import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【金沢 vs 京都 どっちが面白い？】食べ歩き・美術館・温泉・費用で古都対決",
  description: "金沢と京都、古都2大巨頭を「食・美・湯・金」の4軸で徹底比較。海鮮丼 vs 京懐石、兼六園 vs 清水寺、旅行費用の差まで。",
  keywords: ["kanazawa-vs-kyoto-comparison", "金沢", "京都", "比較", "旅行", "費用", "グルメ"],
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
      return data["kanazawa-vs-kyoto-comparison"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels", e);
  }
  return [];
}

export default function KanazawaVsKyotoPage() {
  const hotels = loadHotels();

  return (
    <div className="font-sans text-slate-800 bg-[#f9f7f1] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <header className="mb-16 text-center">
          <h1 className="font-journal-serif text-3xl md:text-5xl font-bold text-[#8b5a2b] leading-tight mb-4">
            【金沢 vs 京都 どっちが面白い？】<br/>
            食べ歩き・美術館・温泉・費用で古都対決
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            日本の伝統と文化が息づく二大古都、「小京都」とも呼ばれる金沢と、本家・京都。
            どちらも魅力が溢れていますが、「今度の旅行、どっちに行こう？」と迷う方も多いはず。
            今回は「食・美・湯・金」の4つの軸で徹底比較します。
          </p>
        </header>

        <div className="space-y-16">
          {/* 【食】 */}
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#e8e4d9]">
            <h2 className="font-journal-serif text-3xl font-bold text-[#8b5a2b] mb-8 text-center">
              <span className="block text-sm text-slate-400 mb-2">Round 1</span>
              【食】絶品グルメ対決
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 pb-2 border-b-2 border-blue-200">🌊 金沢：日本海の恵み</h3>
                <p className="text-slate-600 mb-3">
                  「近江町市場」での食べ歩きや、豪華な海鮮丼（約2,200円〜）が最高。のどぐろやガスエビなど、地元ならではの新鮮な魚介が堪能できます。
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 pb-2 border-b-2 border-red-200">🍁 京都：洗練された和の心</h3>
                <p className="text-slate-600 mb-3">
                  「錦市場」での湯葉や抹茶スイーツの食べ歩き（予算2,000円程度）から、敷居の高い京懐石まで。おばんざいランチなど、出汁の文化を味わえます。
                </p>
              </div>
            </div>
          </section>

          {/* 【美】 */}
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#e8e4d9]">
            <h2 className="font-journal-serif text-3xl font-bold text-[#8b5a2b] mb-8 text-center">
              <span className="block text-sm text-slate-400 mb-2">Round 2</span>
              【美】観光・アート対決
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="bg-slate-50 p-4 rounded-xl">
                    <span className="font-bold text-slate-700">金沢：</span><br/>
                    現代アートの「21世紀美術館」（観覧料約1,200円）と、日本三名園の「兼六園」。伝統工芸とモダンアートがコンパクトな街に融合しています。
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="bg-slate-50 p-4 rounded-xl">
                    <span className="font-bold text-slate-700">京都：</span><br/>
                    「清水寺」（拝観料400円）や「嵐山竹林」（無料）など、圧倒的なスケールの歴史的建造物。何度訪れても新しい発見がある規模感です。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 【湯】 */}
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#e8e4d9]">
            <h2 className="font-journal-serif text-3xl font-bold text-[#8b5a2b] mb-6 text-center">
              <span className="block text-sm text-slate-400 mb-2">Round 3</span>
              【湯】癒やしの温泉事情
            </h2>
            <p className="text-slate-700 leading-relaxed text-center mb-6">
              実は大きな違いが出るのが「温泉」です。
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl md:w-1/2">
                <h4 className="font-bold text-blue-900 mb-2">金沢の温泉</h4>
                <p className="text-sm text-blue-800">
                  駅前にも天然温泉（日帰り約1,000円）があり、少し足を伸ばせば和倉温泉など名湯巡りも可能。
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-2xl md:w-1/2">
                <h4 className="font-bold text-red-900 mb-2">京都の温泉</h4>
                <p className="text-sm text-red-800">
                  銭湯文化は根強いものの、天然温泉は嵐山など一部エリアに限られ、温泉メインの旅には不向き。
                </p>
              </div>
            </div>
          </section>

          {/* 【金】 */}
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#e8e4d9]">
            <h2 className="font-journal-serif text-3xl font-bold text-[#8b5a2b] mb-6 text-center">
              <span className="block text-sm text-slate-400 mb-2">Round 4</span>
              【金】気になる交通費
            </h2>
            <p className="text-slate-700 mb-6 text-center">
              東京からのアクセス費用を比較。バスか新幹線かで大きく変わります。
            </p>
            <div className="space-y-4">
              <Link href="/tokyo-kanazawa-bus-vs-shinkansen-guide" className="block bg-slate-50 hover:bg-slate-100 p-4 rounded-xl border border-slate-200 transition-colors">
                <span className="font-bold text-slate-800">🚄 東京〜金沢の交通比較</span>
                <p className="text-sm text-slate-500 mt-1">北陸新幹線 vs 夜行バス。詳しい料金や所要時間の違いはこちら。</p>
              </Link>
              <Link href="/tokyo-kyoto-bus-vs-shinkansen-guide" className="block bg-slate-50 hover:bg-slate-100 p-4 rounded-xl border border-slate-200 transition-colors">
                <span className="font-bold text-slate-800">🚄 東京〜京都の交通比較</span>
                <p className="text-sm text-slate-500 mt-1">東海道新幹線 vs 高速バス。安く行く方法を徹底解説しています。</p>
              </Link>
            </div>
          </section>
        </div>

        <div className="my-16 bg-[#8b5a2b] text-white p-8 rounded-[2rem] text-center">
          <h2 className="text-2xl font-bold mb-4">結論：どっちに行くべき？</h2>
          <p className="text-lg opacity-90">
            王道の歴史観光を楽しみたい<strong>「初めて〜2回目」の方なら間違いなく京都</strong>。<br/>
            美味しい海鮮や現代アートを楽しみつつ、コンパクトに回りたい<strong>「通な大人旅」なら金沢</strong>がおすすめです！
          </p>
        </div>

        
      {/* 混雑度・回りやすさの徹底比較 */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-200 pb-2">
          混雑度と移動のストレス度：どちらが快適に回れるか
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100">
            <h3 className="font-bold text-lg text-indigo-900 mb-2">🚲 金沢：徒歩＆シェアサイクルで完結</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              金沢の主要名所（兼六園、金沢城、21世紀美術館、近江町市場、ひがし茶屋街）は中心部2km圏内に集中。まちのり（シェアサイクル）や周遊バスで快適に移動できます。
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-2">🚃 京都：地下鉄を軸にした動線が必須</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              東山、嵐山、伏見稲荷、金閣寺とエリアが東西南北に大きく離れているため、市バスだけに頼ると大渋滞でタイムロス。地下鉄を活用した賢い移動計画が不可欠です。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 FAQ */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-200 pb-2">
          金沢 vs 京都 よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 初めての古都旅行ならどっちがおすすめ？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              千年の歴史と寺社仏閣の圧倒的スケールなら京都。1泊2日でコンパクトに名所・グルメ・アートをストレスフリーに回り尽くしたいなら金沢が最適です。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 混雑を避けてゆっくり過ごしたいなら？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              混雑回避なら金沢が断然おすすめ。兼六園や茶屋街も早朝や夕暮れ時は驚くほど静かで、情緒あふれる大人の散歩が楽しめます。
            </p>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"金沢と京都、初めての古都旅行ならどちらを選ぶべき？","acceptedAnswer":{"@type":"Answer","text":"圧倒的な寺社仏閣のスケールと千年の歴史を体感したいなら京都。一方、観光スポットが金沢駅周辺のコンパクトなエリアに集中しており、1泊2日で街歩き・現代アート・日本海の新鮮な海鮮丼をすべて制覇したいなら金沢が抜群に回りやすいです。"}},{"@type":"Question","name":"混雑を避けてゆったり観光したい場合は？","acceptedAnswer":{"@type":"Answer","text":"混雑回避なら金沢がおすすめ。京都は通年で国内外からの観光客が多く市バスも満員になりがちですが、金沢は兼六園や茶屋街も朝夕は非常に落ち着いており、ゆったりとした時間の流れを楽しめます。"}}]}) }}
        />
      </section>
    
      {hotels.length > 0 && (
          <section className="mb-16">
            <h2 className="font-journal-serif text-3xl font-bold text-[#8b5a2b] mb-8 text-center">
              おすすめの宿泊施設
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {hotels.map((hotel, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e8e4d9] flex flex-col">
                  <div className="h-40 overflow-hidden">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-md mb-2 text-slate-800">{hotel.hotelName}</h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-grow">{hotel.hotelSpecial}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-[#8b5a2b] font-bold text-sm">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "価格未定"}
                      </span>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#8b5a2b] hover:bg-[#6b4421] text-white text-xs px-4 py-2 rounded-full transition-colors"
                      >
                        詳細を見る
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
