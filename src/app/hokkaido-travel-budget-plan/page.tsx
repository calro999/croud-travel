import { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【北海道旅行 予算】2泊3日・3泊4日はいくら必要？レンタカーなしでも回れる費用計画ガイド",
  description: "北海道旅行の予算を2泊3日・3泊4日で徹底シミュレーション！札幌・小樽・函館のエリア別費用、飛行機・新幹線・フェリーの交通費比較、海鮮丼・ジンギスカン・スープカレーのグルメ予算まで。レンタカーなしでJR＆バスで回るプランも。",
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hokkaido-travel-budget-plan"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido", e);
  }
  return [];
}

export default function HokkaidoBudgetGuide() {
  const hotels = loadHotels();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-50 py-12 px-4 border-b border-blue-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-journal-serif text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
            【北海道旅行 予算】2泊3日・3泊4日はいくら必要？<br/>
            レンタカーなしでも回れる費用計画ガイド
          </h1>
          <p className="text-blue-800 text-lg">
            「北海道はお金がかかる」「レンタカーがないと無理」と思っていませんか？<br/>
            実は、移動手段と日数の組み合わせ次第で費用は劇的に変わります！
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-200 inline-block mb-8 pb-2">
            レンタカーあり vs なし（JR＆バス）費用差
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
              <div className="text-4xl mb-4 text-center">🚗</div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">レンタカー派（3日間）</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex justify-between border-b border-dashed pb-1">
                  <span>レンタカー代</span><span>15,000〜20,000円</span>
                </li>
                <li className="flex justify-between border-b border-dashed pb-1">
                  <span>ガソリン代（広域）</span><span>約5,000円</span>
                </li>
                <li className="flex justify-between border-b border-dashed pb-1">
                  <span>駐車場・高速代</span><span>約3,000円</span>
                </li>
              </ul>
              <div className="text-center font-bold text-lg text-blue-700">合計目安: 約23,000円〜</div>
              <p className="text-xs text-gray-500 mt-4">メリット：富良野や旭川など、郊外のスポットを自由に回れる。荷物が多くても楽。</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
              <div className="text-4xl mb-4 text-center">🚃</div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">JR＆バス派</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex justify-between border-b border-dashed pb-1">
                  <span>北海道フリーパス(5日間)</span><span>27,430円</span>
                </li>
                <li className="flex justify-between border-b border-dashed pb-1">
                  <span>または 都市間高速バス</span><span>約2,000〜5,000円/区間</span>
                </li>
                <li className="flex justify-between border-b border-dashed pb-1">
                  <span>札幌市内地下鉄1日券</span><span>830円</span>
                </li>
              </ul>
              <div className="text-center font-bold text-lg text-blue-700">状況によって変動</div>
              <p className="text-xs text-gray-500 mt-4">メリット：雪道運転の不安ゼロ！札幌・小樽・函館など都市部メインなら断然安くて早い。</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-200 inline-block mb-8 pb-2">
            日数別おすすめエリアとモデルコース
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-blue-900 mb-2">【2泊3日】レンタカー不要！札幌・小樽 集中コース</h3>
              <p className="text-gray-700 text-sm mb-2">
                すすきの、大通公園、白い恋人パーク、円山動物園、小樽運河。<br/>
                交通機関が発達しているため、車がなくても全く問題ありません。
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-blue-900 mb-2">【3泊4日】特急でGO！札幌＋小樽＋函館コース</h3>
              <p className="text-gray-700 text-sm mb-2">
                JR特急北斗を使えば、雪の時期でも安全に函館まで移動可能。<br/>
                函館の夜景と朝市を組み込むなら3泊以上は必須です。
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-blue-900 mb-2">【3泊4日】大自然満喫！札幌＋富良野＋旭川コース</h3>
              <p className="text-gray-700 text-sm mb-2">
                このコースなら<strong>レンタカー推奨</strong>。旭山動物園や美瑛の青い池など、バスの待ち時間を気にせず効率よく回れます。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-200 inline-block mb-6 pb-2">
            見逃せない！北海道グルメの予算感
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🐟</div>
              <div className="font-bold text-sm text-gray-800">海鮮丼</div>
              <div className="text-orange-600 font-bold">2,500円〜</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🐑</div>
              <div className="font-bold text-sm text-gray-800">ジンギスカン</div>
              <div className="text-orange-600 font-bold">1,800円〜</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🍛</div>
              <div className="font-bold text-sm text-gray-800">スープカレー</div>
              <div className="text-orange-600 font-bold">1,300円〜</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🎁</div>
              <div className="font-bold text-xs text-gray-800">マルセイバターサンド(6個)</div>
              <div className="text-orange-600 font-bold">810円</div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-200 inline-block mb-6 pb-2">
            航空券＆宿泊費の相場（1人あたり）
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
            <li><strong>LCC (ピーチ/ジェットスター):</strong> 片道 5,000〜15,000円</li>
            <li><strong>大手 (JAL/ANA):</strong> 片道 15,000〜35,000円</li>
            <li><strong>北海道新幹線 (東京-新函館北斗):</strong> 片道 23,430円</li>
            <li className="pt-4 border-t border-gray-100 mt-4"><strong>札幌駅前ビジネスホテル:</strong> 1泊 5,500円〜</li>
            <li><strong>すすきのカプセルホテル:</strong> 1泊 3,000円〜（超節約派！）</li>
            <li><strong>函館ベイエリアホテル:</strong> 1泊 8,000円〜</li>
            <li><strong>ニセコリゾートホテル:</strong> 1泊 25,000円〜</li>
          </ul>

          
        {/* 旅費を大幅に節約する5つのウラ技 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-200 inline-block mb-8 pb-2">
            北海道旅行の費用をガッツリ抑える5つの節約術
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">1. 航空券は2〜3ヶ月前のLCCセールを狙う</h3>
              <p className="text-sm text-gray-600">
                成田・関空発着のピーチやジェットスターなら片道4,000円〜6,000円台で予約可能。手荷物枠だけ1人分追加するのが最もコスパの良い方法です。
              </p>
            </div>
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">2. 新千歳空港〜札幌間は快速エアポートを賢く活用</h3>
              <p className="text-sm text-gray-600">
                普通運賃1,150円で約37分。指定席（Uシート別途840円）を使わなくても始発駅の新千歳空港から乗れば座れる確率が高めです。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-200 inline-block mb-8 pb-2">
            北海道旅行 予算・日程のよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Q. レンタカーなしでも観光できますか？</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                札幌・小樽・函館・旭川などの主要都市であれば、JRや高速バスが充実しているためレンタカーなしで全く問題ありません。冬期の雪道運転が不安な方にも強く推奨します。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Q. 2泊3日の総予算の目安は？</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                節約プランで1人約35,000円〜45,000円、標準プランで1人約60,000円〜80,000円が目安です。食費やお土産代に15,000円〜20,000円確保しておくと大満足できます。
              </p>
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"北海道旅行はレンタカーなしでも楽しめますか？","acceptedAnswer":{"@type":"Answer","text":"札幌・小樽・函館・旭川などの主要都市観光であれば、JR快速エアポートや特急列車、都市間高速バスが非常に充実しているため、レンタカーなしで全く問題なく楽しめます。冬期の雪道運転リスクも回避できるため公共交通機関の利用は特におすすめです。"}},{"@type":"Question","name":"北海道2泊3日の総額費用の相場はいくらですか？","acceptedAnswer":{"@type":"Answer","text":"LCCや早割航空券を活用した節約プランで1人約35,000円〜45,000円、大手航空会社＋駅前大浴場ホテル＋海鮮・ジンギスカンを満喫する標準プランで1人約60,000円〜80,000円がリアルな目安です。"}}]}) }}
          />
        </section>

          <h3 className="font-bold text-xl text-blue-900 mb-4">北海道のおすすめホテル</h3>
          {hotels.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotels.slice(0, 3).map((hotel: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                  {hotel.imageUrl && (
                    <img src={hotel.imageUrl} alt={hotel.hotelName} className="w-full h-40 object-cover" />
                  )}
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="font-bold text-gray-800 mb-2">{hotel.hotelName}</h4>
                    <p className="text-xs text-gray-500 mb-4 flex-1">{(hotel.hotelSpecial || '').substring(0, 80)}...</p>
                    <a 
                      href={hotel.affiliateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-center bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      詳細を見る
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
