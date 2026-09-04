import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【金沢旅行 費用】1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術【2026年最新】",
  description: "金沢旅行の費用を1泊2日・2泊3日のパターン別に徹底解説！東京・大阪・名古屋からの交通費、金沢駅前ホテル・温泉旅館の宿泊費、近江町市場・ひがし茶屋街のグルメ費用、兼六園・21世紀美術館の入場料まで、リアルな総額を公開。",
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kanazawa-travel-budget-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kanazawa-travel-budget-guide", e);
  }
  return [];
}

export default function KanazawaBudgetGuide() {
  const hotels = loadHotels();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-journal-serif text-3xl font-bold text-emerald-900 mb-6 leading-tight">
        【金沢旅行 費用】1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術【2026年最新】
      </h1>
      
      <p className="text-gray-700 mb-8 leading-relaxed">
        「金沢に旅行に行きたいけど、予算はどれくらい用意すればいい？」
        今回は、実際に私が金沢を旅してかかった「超リアル」な金額を全部晒す旅行日記風にお届けします！
        1泊2日（節約プラン・贅沢プラン）と2泊3日の3パターンを徹底比較。
        交通費からグルメ代まで、具体的な金額を見ていきましょう。
      </p>

      <section className="mb-10 bg-emerald-50 rounded-3xl p-6">
        <h2 className="font-journal-serif text-2xl font-semibold text-emerald-800 mb-4 border-b-2 border-emerald-200 pb-2">
          パターン別！金沢旅行の合計費用 早見表
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-emerald-100 text-emerald-900">
              <tr>
                <th className="p-3 border-b">項目</th>
                <th className="p-3 border-b">1泊2日（節約）</th>
                <th className="p-3 border-b">1泊2日（贅沢）</th>
                <th className="p-3 border-b">2泊3日（標準）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b font-medium text-gray-700">宿泊費</td>
                <td className="p-3 border-b">5,000円</td>
                <td className="p-3 border-b">25,000円</td>
                <td className="p-3 border-b">20,000円（2泊分）</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-medium text-gray-700">食費</td>
                <td className="p-3 border-b">8,000円</td>
                <td className="p-3 border-b">25,000円</td>
                <td className="p-3 border-b">18,000円</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-medium text-gray-700">観光・体験</td>
                <td className="p-3 border-b">2,000円</td>
                <td className="p-3 border-b">3,000円</td>
                <td className="p-3 border-b">4,500円</td>
              </tr>
              <tr>
                <td className="p-3 border-b font-medium text-gray-700">お土産代</td>
                <td className="p-3 border-b">2,000円</td>
                <td className="p-3 border-b">5,000円</td>
                <td className="p-3 border-b">4,000円</td>
              </tr>
              <tr className="bg-amber-50 font-bold text-amber-900">
                <td className="p-3">現地合計額</td>
                <td className="p-3">17,000円</td>
                <td className="p-3">58,000円</td>
                <td className="p-3">46,500円</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">※ 上記に「出発地からの交通費」が加算されます。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-journal-serif text-2xl font-semibold text-emerald-800 mb-4">
          交通費のリアル（東京・大阪・名古屋から）
        </h2>
        <p className="text-gray-700 mb-4">金沢へのアクセスは新幹線や特急、高速バスで大きく変わります。</p>
        <ul className="space-y-4 mb-6">
          <li className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-lg text-emerald-700">🗼 東京から</h3>
            <p className="text-gray-600 mb-2">北陸新幹線なら片道約14,380円、夜行バスなら3,000円〜。費用を抑えたいならバス一択！</p>
            <Link href="/tokyo-kanazawa-bus-vs-shinkansen-guide" className="text-amber-600 hover:underline font-medium text-sm">
              ▶ 東京〜金沢のバス・新幹線徹底比較はこちら
            </Link>
          </li>
          <li className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-lg text-emerald-700">🐙 大阪から</h3>
            <p className="text-gray-600 mb-2">サンダーバード＋新幹線で約9,410円、高速バスなら約3,500円〜。</p>
            <Link href="/osaka-kanazawa-highway-bus-model-course" className="text-amber-600 hover:underline font-medium text-sm">
              ▶ 大阪〜金沢の高速バスモデルコースはこちら
            </Link>
          </li>
          <li className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-lg text-emerald-700">🍤 名古屋から</h3>
            <p className="text-gray-600 mb-2">特急しらさぎで約7,330円、高速バスなら約3,000円台〜。</p>
            <Link href="/nagoya-kanazawa-bus-vs-train-guide" className="text-amber-600 hover:underline font-medium text-sm">
              ▶ 名古屋〜金沢のバス・電車比較はこちら
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-journal-serif text-2xl font-semibold text-emerald-800 mb-4">
          食費の内訳（私のおすすめ店と金額）
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h3 className="text-amber-800 font-bold mb-2 text-lg">☀️ 朝食</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>・近江町市場 海鮮丼: <strong>2,200円</strong></li>
              <li>・もりもり寿し: <strong>1,800円</strong></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">朝から贅沢に海鮮！近江町市場は外せません。</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h3 className="text-amber-800 font-bold mb-2 text-lg">🌤️ 昼食</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>・ハントンライス: <strong>1,100円</strong></li>
              <li>・金沢カレー: <strong>850円</strong></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">B級グルメで賢く節約。ボリューム満点！</p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h3 className="text-amber-800 font-bold mb-2 text-lg">🌙 夕食</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>・金沢おでん: <strong>2,500円</strong></li>
              <li>・加賀料理: <strong>4,500円</strong></li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">夜は少し奮発して、おでんの車麩やカニ面を堪能。</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-journal-serif text-2xl font-semibold text-emerald-800 mb-4">
          入場料・体験・お土産のリアルな出費
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 bg-gray-50 p-6 rounded-2xl">
          <li><strong>兼六園 入園料:</strong> 320円（安くて最高！）</li>
          <li><strong>21世紀美術館 コレクション展:</strong> 1,200円（※特別展は別途）</li>
          <li><strong>金箔貼り体験:</strong> 約800円（思い出作りにぴったり）</li>
          <li><strong>お土産（きんつば5個入）:</strong> 900円</li>
          <li><strong>お土産（加賀棒茶）:</strong> 600円</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-journal-serif text-2xl font-semibold text-emerald-800 mb-4">
          宿泊費の3段階とおすすめホテル
        </h2>
        <p className="text-gray-700 mb-6">
          金沢のホテルは用途に合わせて3つの価格帯から選べます。
          ビジネスホテル（5,000〜8,000円）、駅前温泉ホテル（9,000〜15,000円）、高級旅館（25,000円〜）。
        </p>
        
        
      {/* 賢く浮かす！金沢旅行の節約テクニック */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          金沢旅行の費用を浮かす3大節約テクニック
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-emerald-900 mb-2">1. 兼六園の早朝無料入園を活用</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              通常大人320円の兼六園は、毎朝開門時間前の「早朝無料開放」を実施中。澄んだ朝の空気と人混みゼロの絶景を完全無料で独占できます。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-emerald-900 mb-2">2. まちのりシェアサイクル</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              市内数十カ所にあるポートで乗り降り自由。電動アシスト付きで坂道も楽々、1回165円でバス待ちのストレスから完全解放されます。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-emerald-900 mb-2">3. 夜は地元の回転寿司・金沢おでん</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              高級割烹でなくても、金沢駅前のもりもり寿しやすし食いねぇ！、黒百合の金沢おでんなら1人2,500円〜3,500円で感動級の美味しさを味わえます。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 FAQ */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          金沢旅行 費用・予算のよくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 1泊2日の総額費用はいくら？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              新幹線＋ホテル＋海鮮グルメ込みで1人約40,000円〜60,000円が目安。夜行バスや高速バスを利用すれば3万円台前半まで抑えることができます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 市内の移動はバスとタクシーどっちが良い？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              中心部2km圏内なので周遊バス（1日800円）またはシェアサイクル「まちのり」が圧倒的におすすめ。3〜4人のグループならワンメーター圏内でタクシー移動も割安です。
            </p>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"金沢旅行1泊2日の総額はいくら必要ですか？","acceptedAnswer":{"@type":"Answer","text":"東京・大阪からの往復新幹線・特急代（約20,000円〜28,000円）、駅前ホテル宿泊（約8,000円〜15,000円）、近江町市場の海鮮丼や金沢おでんなどの食費（約10,000円〜15,000円）、兼六園等の入場料・交通費を含め、1人あたり約40,000円〜60,000円が標準的な目安です。高速バスを利用すれば3万円台前半まで抑えられます。"}},{"@type":"Question","name":"金沢市内の移動でおすすめの交通手段は？","acceptedAnswer":{"@type":"Answer","text":"主要名所が中心部にまとまっているため、「城下まち金沢周遊バス（1日フリー乗車券800円）」または公共シェアサイクル「まちのり（1回165円）」の利用が最も便利でコスパ抜群です。"}}]}) }}
        />
      </section>
    
      {hotels.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.slice(0, 4).map((hotel: any, index: number) => (
              <a
                key={index}
                href={hotel.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                {hotel.imageUrl && (
                  <div className="h-48 overflow-hidden relative">
                    <img src={hotel.imageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-emerald-900 mb-2">{hotel.hotelName}</h3>
                  <p className="text-xs text-gray-500 mb-3">{hotel.address}</p>
                  <p className="text-sm text-gray-700 line-clamp-2 mb-4">{hotel.description}</p>
                  <div className="flex justify-end">
                    <span className="inline-block bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                      楽天トラベルで見る
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
