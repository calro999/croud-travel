import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【鎌倉 vs 江の島 日帰りならどっち？】半日・1日コース別の楽しみ方＆費用を完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "鎌倉と江の島、日帰りで行くならどっちがおすすめ？半日しかないなら鎌倉（大仏＆小町通り食べ歩き）、1日あるなら両方ハシゴ（江ノ電で20分）。拝観料・食べ歩き費用・モデルコースを時間帯別に完全ガイド。",
  keywords: ["kamakura-vs-enoshima-day-trip", "鎌倉", "江の島", "日帰り", "観光", "食べ歩き", "モデルコース", "費用"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kamakura-vs-enoshima-day-trip"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kamakura-vs-enoshima-day-trip", e);
  }
  return [];
}

export default function KamakuraVsEnoshimaPage() {
  const hotels = loadHotels();

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans">
      <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-3xl p-8 md:p-14 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 opacity-10 text-[300px] leading-none pointer-events-none">⛩️</div>
        <div className="relative z-10 space-y-5">
          <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Kamakura & Enoshima Day Trip Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight">
            【鎌倉 vs 江の島 日帰りならどっち？】<br className="hidden md:block"/>半日・1日コース別の楽しみ方＆費用
          </h1>
          <p className="text-sm md:text-base font-medium text-blue-50 max-w-2xl bg-black/10 p-4 rounded-xl backdrop-blur-sm">
            東京からわずか1時間。アクセス抜群の「鎌倉」と「江の島」ですが、いざ日帰りで行くとなると「どっちに行こう？」「両方回れる？」と悩みますよね。<br/>
            実は、<strong>使える時間が「半日」か「丸1日」かで、最適なルートは全く異なります。</strong>
          </p>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-journal-serif text-center">
          ⏳ 時間別ベストアンサー
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-t-8 border-indigo-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <span className="bg-indigo-100 text-indigo-700 font-bold px-4 py-2 rounded-full text-sm">滞在時間 3〜4時間</span>
              <h3 className="text-2xl font-bold mt-4">半日しかないなら</h3>
              <p className="text-3xl font-black text-indigo-600 mt-2">鎌倉をじっくり</p>
            </div>
            <p className="text-gray-600 mb-6">
              滞在時間が短い場合は、移動を減らして鎌倉エリア（大仏、長谷寺、小町通りなど）に絞るのが正解。ギュッと詰まった観光が楽しめます。
            </p>
          </div>
          <div className="bg-white border-t-8 border-purple-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <span className="bg-purple-100 text-purple-700 font-bold px-4 py-2 rounded-full text-sm">滞在時間 7〜8時間</span>
              <h3 className="text-2xl font-bold mt-4">丸1日あるなら</h3>
              <p className="text-3xl font-black text-purple-600 mt-2">両方ハシゴ一択</p>
            </div>
            <p className="text-gray-600 mb-6">
              朝から動けるなら、江ノ電を活用して午前は鎌倉、午後は江の島へ。20分で移動できるので、全く違う景色を1日で堪能できます。
            </p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-journal-serif">
            🚃 交通費・移動の基本情報
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-1">東京駅から鎌倉駅</div>
              <div className="font-bold text-lg text-gray-800">JR横須賀線：950円</div>
              <div className="text-xs text-gray-400 mt-1">所要時間 約50分</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-1">新宿から藤沢経由 江の島</div>
              <div className="font-bold text-lg text-gray-800">小田急線：610円</div>
              <div className="text-xs text-gray-400 mt-1">藤沢〜片瀬江ノ島 所要時間 約10分(藤沢から)</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-1">鎌倉〜江の島 乗り放題</div>
              <div className="font-bold text-lg text-gray-800">江ノ電1日乗車券「のりおりくん」</div>
              <div className="text-xs font-bold text-indigo-600 mt-1">800円（※ハシゴするなら必須！）</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-journal-serif flex items-center">
          <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 text-lg">半</span>
          半日コース（3〜4時間）モデルプラン
        </h2>
        
        <div className="space-y-8">
          {/* 鎌倉半日 */}
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900">プランA：鎌倉王道つまみ食いコース</h3>
              <p className="text-sm text-indigo-600">小町通り食べ歩き予算：約1,500〜2,500円</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-200 before:to-indigo-200">
                <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800">北鎌倉・長谷</h4>
                    <p className="text-sm text-gray-600 mt-1">鎌倉大仏（拝観料 300円）、長谷寺（拝観料 400円）で歴史を感じる。</p>
                  </div>
                </li>
                <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800">小町通り食べ歩き</h4>
                    <p className="text-sm text-gray-600 mt-1">紅谷クルミッ子（350円）、鎌倉ビール（650円）、しらすソフト（400円）を満喫！</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 江の島半日 */}
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-purple-50 px-6 py-4 border-b border-purple-100">
              <h3 className="text-xl font-bold text-purple-900">プランB：江の島絶景リフレッシュコース</h3>
              <p className="text-sm text-purple-600">江の島食べ歩き・ランチ予算：約1,200〜2,000円</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-200 before:to-purple-200">
                <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-purple-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800">弁天橋・江島神社</h4>
                    <p className="text-sm text-gray-600 mt-1">江ノ電江の島駅から弁天橋を渡り、江島神社（無料）へ参拝。</p>
                  </div>
                </li>
                <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-purple-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800">展望・しらす丼</h4>
                    <p className="text-sm text-gray-600 mt-1">シーキャンドル展望灯台（500円）からの絶景後、名物しらす丼ランチ（約1,400円）。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-journal-serif flex items-center">
          <span className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 text-lg">1日</span>
          1日コース（7〜8時間）最強ハシゴプラン
        </h2>
        
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-200">
          <p className="text-gray-700 mb-8 leading-relaxed">
            丸一日使えるなら、江ノ電1日乗車券（800円）を活用して、午前は緑豊かな鎌倉、午後は海を感じる江の島という欲張りルートが最強です。
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 bg-green-50 p-6 rounded-2xl w-full">
              <div className="text-green-800 font-bold mb-2">☀️ 午前：鎌倉エリア</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>・報国寺 竹の庭（拝観料 300円）</li>
                <li>・鶴岡八幡宮で参拝</li>
                <li>・小町通りで早めのランチ＆食べ歩き</li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-500 font-bold mb-1">江ノ電で移動</div>
              <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                20分
              </div>
              <div className="text-xs text-gray-500 mt-1">片道260円</div>
            </div>
            
            <div className="flex-1 bg-blue-50 p-6 rounded-2xl w-full">
              <div className="text-blue-800 font-bold mb-2">🌇 午後：江の島エリア</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>・江の島大橋を渡って上陸</li>
                <li>・岩屋洞窟（500円）を探検</li>
                <li>・海沿いのカフェで絶景サンセット</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {hotels.length > 0 && (
        <section className="px-4 mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-journal-serif mb-3">
              鎌倉・湘南エリアのおすすめ宿
            </h2>
            <p className="text-gray-600">日帰りもいいけど、1泊すればもっとゆっくり湘南の海と歴史を満喫できます。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {hotels.map((hotel: any, index: number) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transition-transform hover:-translate-y-1">
                {hotel.hotelImageUrl && (
                  <div className="relative h-60 w-full bg-gray-100">
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {hotel.hotelName}
                  </h3>
                  {hotel.hotelMinCharge && (
                    <div className="text-indigo-600 font-bold text-lg mb-4">
                      目安：{hotel.hotelMinCharge.toLocaleString()}円〜 /人
                    </div>
                  )}
                  {hotel.hotelSpecial && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                      {hotel.hotelSpecial}
                    </p>
                  )}
                  {hotel.affiliateUrl && (
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                    >
                      楽天トラベルで空室を見る
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
