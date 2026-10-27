import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kanazawa-vs-kyoto-comparison/" },
  title: "金沢 vs 京都 どっちが面白い？：食べ歩き・美術館・温泉・費用で古都対決",
  description: "金沢と京都、古都2大巨頭を「食・美・湯・金」の4軸で徹底比較。海鮮丼 vs 京懐石、兼六園 vs 清水寺、旅行費用の差まで。",
  keywords: ["金沢", "vs", "京都", "どっちが面白い？", "食べ歩き", "美術館", "温泉"],
  openGraph: {
    title: "金沢 vs 京都 どっちが面白い？：食べ歩き・美術館・温泉・費用で古都対決",
    description: "金沢と京都、古都2大巨頭を「食・美・湯・金」の4軸で徹底比較。海鮮丼 vs 京懐石、兼六園 vs 清水寺、旅行費用の差まで。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "金沢 vs 京都 どっちが面白い？：食べ歩き・美術館・温泉・費用で古都対決",
    description: "金沢と京都、古都2大巨頭を「食・美・湯・金」の4軸で徹底比較。海鮮丼 vs 京懐石、兼六園 vs 清水寺、旅行費用の差まで。",
  }
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


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【金沢 vs 京都 どっちが面白い？】食べ歩き・美術館・温泉・費用で古都対決",
    "description": "金沢と京都、古都2大巨頭を「食・美・湯・金」の4軸で徹底比較。海鮮丼 vs 京懐石、兼六園 vs 清水寺、旅行費用の差まで。",
    "url": "https://croud-travel.pages.dev/kanazawa-vs-kyoto-comparison/",
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
      { "@type": "ListItem", "position": 2, "name": "【金沢 vs 京都 どっちが面白い？】食べ歩き・美術館・温泉・費用で古都対決", "item": "https://croud-travel.pages.dev/kanazawa-vs-kyoto-comparison/" }
    ]
  };

  return (
    <div className="font-sans text-slate-800 bg-[#f9f7f1] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <header className="mb-16 text-center">
          <h1 className="font-journal-serif text-3xl md:text-5xl font-bold text-[#8b5a2b] leading-tight mb-4">「金沢 vs 京都 どっちが面白い？」<br/> 食べ歩き・美術館・温泉・費用で古都対決</h1>
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
            <div className="flex flex-col gap-8">
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
            <div className="flex flex-col justify-center gap-6">
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
              <Link href="/tokyo-kanazawa-bus-vs-shinkansen-guide/" className="block bg-slate-50 hover:bg-slate-100 p-4 rounded-xl border border-slate-200 transition-colors">
                <span className="font-bold text-slate-800">🚄 東京〜金沢の交通比較</span>
                <p className="text-sm text-slate-500 mt-1">北陸新幹線 vs 夜行バス。詳しい料金や所要時間の違いはこちら。</p>
              </Link>
              <Link href="/tokyo-kyoto-bus-vs-shinkansen-guide/" className="block bg-slate-50 hover:bg-slate-100 p-4 rounded-xl border border-slate-200 transition-colors">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
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
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
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
                        rel="sponsored noopener noreferrer"
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
    
      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 金沢 vs 京都 どっちが面白い？：食べ歩き・美術館・温泉・費用で古都対決：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「金沢 vs 京都 どっちが面白い？：食べ歩き・美術館・温泉・費用で古都対決」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口</td>
                <td className="p-3 text-stone-600">石川県金沢市本町2-5-15</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">ホテル専用駐車場、駐輪場はございません。近隣駐車場のご案内となります</td>
                <td className="p-3 font-bold text-amber-600">★4.43（1660件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180588%2F180588.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）</td>
                <td className="p-3 text-stone-600">石川県金沢市下堤町1-1</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">有り　先着順(76台)　1泊1,500円　長さ:5300㎜　全幅:1940㎜　高さ:2000㎜</td>
                <td className="p-3 font-bold text-amber-600">★4.54（1955件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,030〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182423%2F182423.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 金沢白鳥路　ホテル山楽</td>
                <td className="p-3 text-stone-600">石川県金沢市丸の内6-3</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">地下駐車場50台／料金1泊1台1,000円／24時間入出庫可／高さ制限2.1ｍ未満</td>
                <td className="p-3 font-bold text-amber-600">★4.55（2831件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9004%2F9004.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ＪＲ京都駅から５００ｍ、東本願寺前の築１００年の京町家旅館タイプのゲストハウス。　＾</td>
                <td className="p-3 text-stone-600">京都府京都市下京区笹屋町270　ダース</td>
                <td className="p-3 text-stone-600">五条（京阪）駅周辺</td>
                <td className="p-3 text-stone-600">無し</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171184%2F171184.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 京町家貸切宿　高瀬川七条</td>
                <td className="p-3 text-stone-600">京都府京都市下京区上三之宮町279</td>
                <td className="p-3 text-stone-600">七条駅周辺</td>
                <td className="p-3 text-stone-600">無し　近隣のコインパーキングをご案内致します。</td>
                <td className="p-3 font-bold text-amber-600">★5（13件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165114%2F165114.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 京町家　八重家といち町</td>
                <td className="p-3 text-stone-600">京都府京都市下京区木屋町通六軒上る都市町141-6</td>
                <td className="p-3 text-stone-600">京阪清水五条駅より徒歩2分。JR京都駅より徒歩15分。阪急河原町駅より</td>
                <td className="p-3 text-stone-600">無し</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F148999%2F148999.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口</h3>
                  <span className="text-xs text-stone-400 ml-2">（すーぱーほてる　ぷれみあ　かなざわえきひがしぐち　てんねんおんせん　つづみもんのゆ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,450〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/180588/180588.jpg" alt="天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>金沢駅東口より徒歩７分！主要駅からのアクセスが良くビジネスや観光に便利♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市本町2-5-15 ／ 最寄り駅：金沢 ／ 交通案内：金沢駅東口より徒歩7分。金沢東ICより約15分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテル専用駐車場、駐輪場はございません。近隣駐車場のご案内となります</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大浴場は小さめだが混雑状況を確認できて便利温泉(大浴場)は想像していたより小さめでした。部屋から浴場の混雑状況が確認できるため、空いている時間に入れば問題ないと思います。クチコミの詳細はこちら…　2026-08-22 11:51:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん　かがのほうせん　おんやど　ののかなざわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,030〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/182423/182423.jpg" alt="天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>「近江町市場」「兼六園」まで徒歩圏内！天然温泉大浴場＆サウナ完備！朝食は「お好み海鮮丼」</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市下堤町1-1 ／ 最寄り駅：金沢 ／ 交通案内：JR金沢駅より徒歩15分または北鉄バス6～10番乗り場からバスで4分「武蔵が辻・近江町市場」バス停下車後徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　先着順(76台)　1泊1,500円　長さ:5300㎜　全幅:1940㎜　高さ:2000㎜</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お風呂とサウナは最高、部屋の湿気が残念お風呂、サウナとっても良かったです!ただ、安いプランだったからかも知れませんが、部屋の湿気がすごくてベタついた感じがあり少しカビ臭く感じてしまいました。立地や…　2026-08-28 09:45:54投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=182423&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">金沢白鳥路　ホテル山楽</h3>
                  <span className="text-xs text-stone-400 ml-2">（かなざわ　はくちょうろ　ほてるさんらく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004_dtw.jpg" alt="金沢白鳥路　ホテル山楽 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>金沢城のすぐ側で美肌の湯と金沢美食、そして心温まるおもてなしに癒されて日常をひと休みしませんか。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市丸の内6-3 ／ 最寄り駅：金沢 ／ 交通案内：■金沢駅⇔ホテル無料送迎バス■金沢駅東口より車で１０分■金沢駅東口⑥、⑦乗り場【兼六園下・金沢城】バス停下車徒歩５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>地下駐車場50台／料金1泊1台1,000円／24時間入出庫可／高さ制限2.1ｍ未満</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「観光に最適な立地と郷土料理に大満足とにかくロケーションが観光に最適、施設は便利であって欲しいところはすべて新しく(ランドリーの洗濯機は洗剤自動投入など)、とても清潔で、一方で調度品や装飾などは古き…　2026-09-04 17:39:28投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＪＲ京都駅から５００ｍ、東本願寺前の築１００年の京町家旅館タイプのゲストハウス。　＾</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/171184/171184.jpg" alt="ＪＲ京都駅から５００ｍ、東本願寺前の築１００年の京町家旅館タイプのゲストハウス。　＾ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>築１００年を越える大きな京町家の旅館タイプのゲストハウスです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市下京区笹屋町270　ダース ／ 最寄り駅：五条（京阪） ／ 交通案内：五条駅から徒歩で約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ＪＲ京都駅から５００ｍ、東本願寺前の築１００年の京町家旅館タイプのゲストハウス。　＾は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">京町家貸切宿　高瀬川七条</h3>
                  <span className="text-xs text-stone-400 ml-2">（きょうまちやかしきりやど　たかせがわしちじょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/165114/165114_kan1.jpg" alt="京町家貸切宿　高瀬川七条 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>京都の別邸感覚で過ごす一棟貸切の京町家（96.5㎡）</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市下京区上三之宮町279 ／ 最寄り駅：七条 ／ 交通案内：JR「京都駅」より徒歩約14分　京阪本線「七条駅」より徒歩約4分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し　近隣のコインパーキングをご案内致します。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「京町家貸切宿　高瀬川七条は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">京町家　八重家といち町</h3>
                  <span className="text-xs text-stone-400 ml-2">（きょうまちや　やえやといちちょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/148999/148999_kan1.jpg" alt="京町家　八重家といち町 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>鴨川に面し絶景を望む二軒のお宿。京町家【八重家といち町】と京風モダン仕様の【八重家かもがわ】</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市下京区木屋町通六軒上る都市町141-6 ／ 最寄り駅：主要駅 ／ 交通案内：京阪清水五条駅より徒歩2分。JR京都駅より徒歩15分。阪急河原町駅より徒歩15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「京町家　八重家といち町は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！京都府の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、京都府を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg/1280px-Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="清水寺" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">清水寺</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「清水の舞台」で世界的に有名な古都京都の象徴。「清水の舞台から飛び下りる」の語源となった木造大舞台からの京都市街の眺望と音羽の滝が名高いです。 清水寺（きよみずでら、英: Kiyomizu-dera Temple）は、京都市東山区清水1丁目にある北法相宗の大本山の寺院。山号は音羽山。本尊は十一面千手観世音菩薩。正式には音羽山清水寺（おとわさんきよみずでら）と号する。もとは法相宗に属していたが、現在は独立して北法相宗を名乗る。西国三十三所第16番札所。洛陽三十三所観音霊場第10から14番札所。境内（敷…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金閣寺（鹿苑寺）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">鏡湖池に黄金の輝きを映し出す室町文化の傑作。層ごとに建築様式が異なる三層構造の金閣と繊細に手入れされた庭園美が世界中の人々を魅了します。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">伏見稲荷大社</h3>
                <p className="text-xs text-stone-600 leading-relaxed">全国に約3万社ある稲荷神社の総本宮。朱塗りの鳥居がどこまでも続く「千本鳥居」は幻想的な雰囲気に満ち、トリップアドバイザー外国人に人気のスポット1位の常連です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Arashiyama_%288741759830%29.jpg/1280px-Arashiyama_%288741759830%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="嵐山 竹林の小径" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">嵐山 竹林の小径</h3>
                <p className="text-xs text-stone-600 leading-relaxed">渡月橋から野宮神社を経て大河内山荘へ続く、数万本の竹が天を覆う清涼な小道。風が吹くたびに竹同士が触れ合う笹の葉の音が優しく響き渡ります。 嵐山（あらしやま）は、京都市西部にある標高382メートル（m）の山。また、大堰川（おおいがわ）を挟んで西側の松尾山・嵐山・烏ヶ岳の嵐山三山と、東側の小倉山・亀山、さらにはその麓を含んだ地域を一般的に嵐山と称し、山麓は多数の寺社が立地する観光名所でもある。 近くには嵯峨嵐山駅があり、この辺り一体が嵯峨野と呼ばれる事も多い。 また、近くのトロッコ嵐山駅からは嵯峨…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 京都府エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 京都府の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="kanazawa-vs-kyoto-comparison" />
</div>
  );
}
