import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【京都旅行 何泊がベスト？】1泊2日 vs 2泊3日 費用・満足度・モデルコース徹底比較",
  description: "京都旅行は1泊2日と2泊3日どっちがいい？日数ごとの費用・回れるエリア数・混雑回避テクニックを比較。交通費（新幹線/夜行バス）、宿泊費（町家/駅前ホテル）、食費（湯豆腐/抹茶パフェ）の内訳も。",
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kyoto-travel-budget-how-many-nights"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-travel-budget", e);
  }
  return [];
}

export default function KyotoNightsGuide() {
  const hotels = loadHotels();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-stone-50">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
        <h1 className="font-journal-serif text-3xl font-bold text-teal-900 mb-4 text-center">
          【京都旅行 何泊がベスト？】1泊2日 vs 2泊3日<br/>
          費用・満足度・モデルコース徹底比較
        </h1>
        
        <p className="text-stone-600 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
          「京都旅行、1泊で足りる？それとも2泊すべき？」<br />
          何泊にするか本気で迷っているあなたへ。回れるエリアの差、宿泊費のリアルな違い、そして混雑回避の観点から、あなたに最適な日数を導き出します。
        </p>

        <section className="mb-12">
          <h2 className="font-journal-serif text-2xl font-bold text-teal-800 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 text-teal-700 text-sm">1</span>
            回れるエリアの限界を知る
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-stone-100 rounded-2xl p-6 border-l-4 border-stone-400">
              <h3 className="font-bold text-lg text-stone-800 mb-3">⏱ 1泊2日の場合</h3>
              <p className="text-stone-700 mb-3"><strong>限界エリア：</strong> 東山エリア（清水寺・八坂神社・祇園）＋ 嵐山エリア</p>
              <p className="text-sm text-stone-600">移動時間が限られるため、東西の王道エリアに絞る必要があります。欲張ると移動ばかりで疲れてしまうので注意。</p>
            </div>
            
            <div className="flex-1 bg-teal-50 rounded-2xl p-6 border-l-4 border-teal-500">
              <h3 className="font-bold text-lg text-teal-800 mb-3">✨ 2泊3日の場合</h3>
              <p className="text-teal-900 mb-3"><strong>じっくりエリア：</strong> 東山・嵐山 ＋ 伏見稲荷・宇治・金閣寺・錦市場</p>
              <p className="text-sm text-teal-700">エリアを分けて効率的に回れます。朝早くから動ける日があるため、混雑する伏見稲荷の早朝参拝も可能に！</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-amber-50 rounded-xl text-center text-amber-900 font-medium">
            💡 結論：初めての京都なら2泊3日、リピーターでエリア集中型なら1泊2日がおすすめ！
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-journal-serif text-2xl font-bold text-teal-800 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 text-teal-700 text-sm">2</span>
            日数別！リアルな費用比較テーブル
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="p-4 rounded-tl-xl">項目</th>
                  <th className="p-4">1泊2日（1人分）</th>
                  <th className="p-4 rounded-tr-xl">2泊3日（1人分）</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-bold text-stone-700">宿泊費（駅前ビジネス）</td>
                  <td className="p-4 text-stone-600">6,500円</td>
                  <td className="p-4 text-stone-600">13,000円</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-bold text-stone-700">食費</td>
                  <td className="p-4 text-stone-600">
                    約9,700円<br/>
                    <span className="text-xs text-stone-400">（湯豆腐1,500円、錦市場2,000円、祇園ディナー5,000円等）</span>
                  </td>
                  <td className="p-4 text-stone-600">
                    約17,000円<br/>
                    <span className="text-xs text-stone-400">（＋にしんそば1,200円、抹茶パフェ等）</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-bold text-stone-700">拝観料・交通(市バス)</td>
                  <td className="p-4 text-stone-600">約3,000円</td>
                  <td className="p-4 text-stone-600">約5,500円</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="p-4 font-bold text-teal-900">現地費用合計</td>
                  <td className="p-4 font-bold text-teal-700 text-lg">約19,200円</td>
                  <td className="p-4 font-bold text-teal-700 text-lg">約35,500円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-stone-500">
            ※ 上記に交通費が追加されます。東京から向かう場合、新幹線と夜行バスで大きく変わります。<br/>
            <Link href="/tokyo-kyoto-bus-vs-shinkansen-guide" className="text-amber-600 hover:underline">
              ▶ 東京〜京都の夜行バスと新幹線の料金比較はこちら
            </Link>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-journal-serif text-2xl font-bold text-teal-800 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 text-teal-700 text-sm">3</span>
            宿選びで変わる予算
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-stone-200 p-4 rounded-xl text-center">
              <p className="text-xs text-stone-500 mb-1">節約派に</p>
              <h4 className="font-bold text-stone-800">ゲストハウス</h4>
              <p className="text-teal-600 font-bold mt-2">約3,500円/泊</p>
            </div>
            <div className="bg-white border border-stone-200 p-4 rounded-xl text-center shadow-sm">
              <p className="text-xs text-stone-500 mb-1">定番</p>
              <h4 className="font-bold text-stone-800">駅前ビジネス</h4>
              <p className="text-teal-600 font-bold mt-2">約6,500円/泊</p>
            </div>
            <div className="bg-white border border-stone-200 p-4 rounded-xl text-center">
              <p className="text-xs text-stone-500 mb-1">グループに</p>
              <h4 className="font-bold text-stone-800">町家一棟貸し</h4>
              <p className="text-teal-600 font-bold mt-2">約15,000円/泊</p>
            </div>
            <div className="bg-white border border-stone-200 p-4 rounded-xl text-center">
              <p className="text-xs text-stone-500 mb-1">記念日に</p>
              <h4 className="font-bold text-stone-800">高級旅館</h4>
              <p className="text-teal-600 font-bold mt-2">約35,000円/泊〜</p>
            </div>
          </div>

          <h3 className="font-bold text-lg text-teal-800 mb-4">おすすめの京都ホテル</h3>
          {hotels.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hotels.slice(0, 4).map((hotel: any, index: number) => (
                <div key={index} className="flex border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition">
                  {hotel.imageUrl && (
                    <img src={hotel.imageUrl} alt={hotel.hotelName} className="w-1/3 object-cover" />
                  )}
                  <div className="p-3 flex flex-col justify-between w-full bg-white">
                    <div>
                      <h4 className="font-bold text-stone-800 text-sm line-clamp-1">{hotel.hotelName}</h4>
                      <p className="text-xs text-stone-500 mt-1 line-clamp-2">{hotel.description}</p>
                    </div>
                    <a 
                      href={hotel.affiliateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-right text-teal-600 font-bold text-xs hover:underline mt-2"
                    >
                      詳細を見る →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="bg-stone-800 text-white rounded-2xl p-6 text-center">
          <h3 className="font-bold text-xl mb-3">結論：季節も考慮しよう</h3>
          <p className="text-stone-300 text-sm leading-relaxed">
            桜や紅葉のハイシーズンは、バス待ちや移動だけで時間が削られます。<br/>
            この時期に行くなら、<strong>絶対に2泊以上を推奨</strong>します。余裕を持った日程で、早朝の空いている時間を活用するのが満足度を上げる最大のコツです！
          </p>
        </div>
      </div>
    </div>
  );
}
