import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kanazawa-travel-budget-guide/" },
  title: "金沢旅行 費用：1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術",
  description: "金沢旅行の費用を1泊2日・2泊3日のパターン別に徹底解説！東京・大阪・名古屋からの交通費、金沢駅前ホテル・温泉旅館の宿泊費、近江町市場・ひがし茶屋街のグルメ費用、兼六園・21世紀美術館の入場料まで、リアルな総額を公開。",
  openGraph: {
    title: "金沢旅行 費用：1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術",
    description: "金沢旅行の費用を1泊2日・2泊3日のパターン別に徹底解説！東京・大阪・名古屋からの交通費、金沢駅前ホテル・温泉旅館の宿泊費、近江町市場・ひがし茶屋街のグルメ費用、兼六園・21世紀美術館の入場料まで、リアルな総額を公開。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "金沢旅行 費用：1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術",
    description: "金沢旅行の費用を1泊2日・2泊3日のパターン別に徹底解説！東京・大阪・名古屋からの交通費、金沢駅前ホテル・温泉旅館の宿泊費、近江町市場・ひがし茶屋街のグルメ費用、兼六園・21世紀美術館の入場料まで、リアルな総額を公開。",
  }
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


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【金沢旅行 費用】1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術【2026年最新】",
    "description": "金沢旅行の費用を1泊2日・2泊3日のパターン別に徹底解説！東京・大阪・名古屋からの交通費、金沢駅前ホテル・温泉旅館の宿泊費、近江町市場・ひがし茶屋街のグルメ費用、兼六園・21世紀美術館の入場料まで、リアルな総額を公開。",
    "url": "https://croud-travel.pages.dev/kanazawa-travel-budget-guide/",
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
      { "@type": "ListItem", "position": 2, "name": "【金沢旅行 費用】1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術【2026年最新】", "item": "https://croud-travel.pages.dev/kanazawa-travel-budget-guide/" }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-journal-serif text-3xl font-bold text-emerald-900 mb-6 leading-tight">「金沢旅行 費用」1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術</h1>
      
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
            <Link href="/tokyo-kanazawa-bus-vs-shinkansen-guide/" className="text-amber-600 hover:underline font-medium text-sm">
              ▶ 東京〜金沢のバス・新幹線徹底比較はこちら
            </Link>
          </li>
          <li className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-lg text-emerald-700">🐙 大阪から</h3>
            <p className="text-gray-600 mb-2">サンダーバード＋新幹線で約9,410円、高速バスなら約3,500円〜。</p>
            <Link href="/osaka-kanazawa-highway-bus-model-course/" className="text-amber-600 hover:underline font-medium text-sm">
              ▶ 大阪〜金沢の高速バスモデルコースはこちら
            </Link>
          </li>
          <li className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-lg text-emerald-700">🍤 名古屋から</h3>
            <p className="text-gray-600 mb-2">特急しらさぎで約7,330円、高速バスなら約3,000円台〜。</p>
            <Link href="/nagoya-kanazawa-bus-vs-train-guide/" className="text-amber-600 hover:underline font-medium text-sm">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      </section>
    
      {hotels.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.slice(0, 4).map((hotel: any, index: number) => (
              <a
                key={index}
                href={hotel.affiliateUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                {hotel.imageUrl && (
                  <div className="h-48 overflow-hidden relative">
                    <img src={hotel.imageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
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
    
      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 金沢旅行 費用：1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「金沢旅行 費用：1泊2日・2泊3日いくらかかる？交通費・宿泊費・食費の内訳＆節約術」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">4. 金沢駅前ホテル</td>
                <td className="p-3 text-stone-600">石川県金沢市此花町2-24</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">1泊:1,000円頂いております。</td>
                <td className="p-3 font-bold text-amber-600">★3.45（171件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153512%2F153512.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">金沢駅前ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（かなざわえきまえほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/153512/153512_kan1.jpg" alt="金沢駅前ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>金沢駅鼓門（東口）から徒歩約3分。ひがし茶屋街、金沢城、兼六園、近江町市場まで周遊バス1本。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市此花町2-24 ／ 最寄り駅：金沢 ／ 交通案内：金沢駅鼓門より徒歩約3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊:1,000円頂いております。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「エアコンの埃と朝食時間に間に合わない不満エアコンが埃だらけで清潔とは言えませんでした朝早くに出発する予定でしたが、朝食が7時からでしたので食べていませんクチコミの詳細はこちらから　http…　2026-08-25 23:26:22投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！石川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、石川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">兼六園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水戸偕楽園・岡山後楽園と並ぶ日本三名園の一つ。四季折々の庭園美が見事で、冬には雪の重みから枝を守る「雪吊り」が金沢の冬の風物詩として知られています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金沢21世紀美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「まちに開かれた公園のような美術館」をコンセプトとした現代アートの殿堂。レアンドロ・エルリッヒの「スイミング・プール」など体感型アートが世界的人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">ひがし茶屋街</h3>
                <p className="text-xs text-stone-600 leading-relaxed">キムスコ（細い格子）と呼ばれる出格子がある美しい木造茶屋建築が並ぶ重要伝統的建造物群保存地区。金箔体験やカフェ巡りを着物姿で楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">白米千枚田（しろよねせんまいだ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本海に面した急斜面に1,004枚の小さな田んぼが重なり合う棚田の絶景。黄金色に輝く稲穂やイルミネーションイベント「あぜのきらめき」が幻想的です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 石川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 石川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="kanazawa-travel-budget-guide" />
</div>
  );
}
