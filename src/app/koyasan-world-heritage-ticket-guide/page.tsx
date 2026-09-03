import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【高野山・世界遺産きっぷ完全攻略】南海電鉄＋高野山内バス乗り放題でいくら浮く？宿坊ステイ＆金剛峯寺 ｜ 日本全国・旅宿クラウド",
  description: "難波・新今宮から高野山へ行くなら必須の「高野山・世界遺産きっぷ」！南海特急こうや、極楽橋ケーブルカー、南海りんかんバス、主要寺院拝観割引の総額比較。奥之院参拝・精進料理を堪能する1泊2日宿坊ガイド。",
  keywords: [
    "高野山 世界遺産きっぷ 元取り",
    "南海電鉄 高野山 割引",
    "南海りんかんバス 乗り放題",
    "高野山 宿坊 おすすめ",
    "金剛峯寺 拝観料 割引",
    "奥之院 ナイトツアー",
    "高野山 1泊2日 モデルコース",
    "難波から高野山 電車"
  ],
};

interface Hotel {
  hotelNo: number;
  hotelName: string;
  hotelSpecial?: string;
  hotelImageUrl?: string;
  hotelMinCharge?: number;
  affiliateUrl: string;
  address1?: string;
  address2?: string;
  access?: string;
  nearestStation?: string;
  reviewAverage?: number;
  reviewCount?: number;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["koyasan-world-heritage-ticket-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for koyasan-world-heritage-ticket-guide", e);
  }
  return [];
}

export default function KoyasanPassPage() {
  const hotels = loadHotels();

  return (
    <div className="min-h-screen bg-indigo-50/20 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-905 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/40">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-4 border border-indigo-400/30">
            <span>Koyasan Pilgrimage Transit Pass</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <span>聖地巡礼・完全割引シミュレーション</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【高野山・世界遺産きっぷ完全攻略】<br className="hidden sm:inline" />
            南海電鉄＋山内バス乗り放題でいくら浮く？<span className="text-indigo-300">宿坊ステイ＆金剛峯寺拝観</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-indigo-100/90 leading-relaxed">
            開創1200年を超える天空の聖地・高野山。大阪（なんば・新今宮）からの南海電車往復乗車券、極楽橋〜高野山駅のケーブルカー、現地「南海りんかんバス」の乗り放題、そして金剛峯寺・根本大塔などの拝観料2割引クーポンがセットになった「高野山・世界遺産きっぷ」。
            通常運賃との綿密な比較と、宿坊で精進料理・朝のお勤めを体験する1泊2日の黄金モデルコースを徹底解説します。
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-indigo-200">
            <span className="bg-indigo-900/60 px-3 py-1.5 rounded-lg border border-indigo-700/50">🎫 デジタルきっぷ：なんば発 3,140円（2日間有効）</span>
            <span className="bg-indigo-900/60 px-3 py-1.5 rounded-lg border border-indigo-700/50">🚌 バス特典：山内りんかんバス乗り降り自由</span>
            <span className="bg-indigo-900/60 px-3 py-1.5 rounded-lg border border-indigo-700/50">⛩ 寺院優待：金剛峯寺・金堂・根本大塔など拝観2割引</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: 高野山・世界遺産きっぷの概要と仕組み */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center font-black text-lg">
              01
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                なぜ高野山へ行くなら「世界遺産きっぷ」一択なのか？
              </h2>
              <p className="text-xs text-indigo-700 font-medium">電車＋ケーブルカー＋現地バス代を個別精算すると大損する理由</p>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              高野山観光で旅費が膨らむ最大の要因は、<strong>「高野山内を走る南海りんかんバスの運賃」</strong>です。山内は徒歩で回るには広大で、高野山駅から奥之院前までは片道420円、金剛峯寺前や大門への移動など、1回乗るごとに300〜400円前後の運賃が次々とかかります。
            </p>
            <p>
              「高野山・世界遺産きっぷ」は<strong>南海電車の発駅〜高野山駅までの往復（ケーブルカー含む）＋山内バス乗り放題が2日間有効</strong>でセットになっているため、日帰りはもちろん、1泊2日の宿坊ステイでもこれ1枚で交通費が完結します。
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-3">
              <div className="border border-indigo-100 rounded-xl p-4 bg-indigo-50/40">
                <h3 className="font-bold text-indigo-900 text-sm mb-2 flex items-center gap-1.5">
                  <span>📱</span> デジタル版（南海・片道特急券付も選択可）
                </h3>
                <p className="text-xs text-slate-600">
                  スマートフォンで購入即利用可能。発券窓口に並ぶ必要がなく、画面を見せるだけで改札・バスをスムーズにパスできます。
                </p>
              </div>
              <div className="border border-indigo-100 rounded-xl p-4 bg-indigo-50/40">
                <h3 className="font-bold text-indigo-900 text-sm mb-2 flex items-center gap-1.5">
                  <span>🎫</span> 磁気券版（南海主要駅窓口で発売）
                </h3>
                <p className="text-xs text-slate-600">
                  紙のクーポン券冊子が付属。土産物店での10%割引クーポンやお寺の拝観割引券が物理チケットで使いやすいのが特徴。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 通常運賃 vs 世界遺産きっぷ 徹底計算比較 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center font-black text-lg">
              02
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                【収支比較】普通にICカードで乗るといくら損する？
              </h2>
              <p className="text-xs text-indigo-700 font-medium">なんば発着・1泊2日宿坊滞在ルートでの詳細内訳</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-indigo-50 text-indigo-950 font-semibold border-b border-indigo-100">
                <tr>
                  <th className="py-3 px-4">利用区間・施設拝観料</th>
                  <th className="py-3 px-4">通常料金（IC/定価）</th>
                  <th className="py-3 px-4">世界遺産きっぷ</th>
                  <th className="py-3 px-4">お得額</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">南海電鉄往復（なんば ⇔ 極楽橋 ⇔ 高野山ケーブル）</td>
                  <td className="py-3 px-4 font-mono">¥2,840</td>
                  <td className="py-3 px-4 text-indigo-700 font-semibold">きっぷ内包</td>
                  <td className="py-3 px-4 font-mono text-slate-600">往復完備</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">バス①：高野山駅 → 一の橋口（奥之院表参道）</td>
                  <td className="py-3 px-4 font-mono">¥340</td>
                  <td className="py-3 px-4 text-indigo-700 font-semibold">乗り放題</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥340</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">バス②：奥之院前 → 千手院橋（宿坊・中心街）</td>
                  <td className="py-3 px-4 font-mono">¥260</td>
                  <td className="py-3 px-4 text-indigo-700 font-semibold">乗り放題</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥260</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">バス③：千手院橋 → 大門（往復）</td>
                  <td className="py-3 px-4 font-mono">¥360</td>
                  <td className="py-3 px-4 text-indigo-700 font-semibold">乗り放題</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥360</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">バス④：千手院橋 → 高野山駅（帰路）</td>
                  <td className="py-3 px-4 font-mono">¥320</td>
                  <td className="py-3 px-4 text-indigo-700 font-semibold">乗り放題</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥320</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">拝観料割引：総本山金剛峯寺（一般1,000円）</td>
                  <td className="py-3 px-4 font-mono">¥1,000</td>
                  <td className="py-3 px-4 text-indigo-700 font-semibold">¥800（2割引）</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥200</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">拝観料割引：根本大塔＆金堂（各500円）</td>
                  <td className="py-3 px-4 font-mono">¥1,000</td>
                  <td className="py-3 px-4 text-indigo-700 font-semibold">¥800（2割引）</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥200</td>
                </tr>
                <tr className="bg-indigo-100/60 font-bold">
                  <td className="py-3.5 px-4 text-indigo-950">1泊2日合計総額</td>
                  <td className="py-3.5 px-4 font-mono text-indigo-950 text-base">¥6,120</td>
                  <td className="py-3.5 px-4 font-mono text-indigo-700 text-base">¥4,740（パス代＋実質拝観料）</td>
                  <td className="py-3.5 px-4 font-mono text-indigo-700 text-lg font-black">+¥1,380お得！</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-indigo-300 font-semibold">損益判定</p>
              <p className="text-base sm:text-lg font-bold">往復電車＋バス2回乗るだけで即元取り。お寺巡りをすればするほど黒字拡大！</p>
            </div>
            <div className="bg-indigo-800 px-4 py-2 rounded-lg text-center whitespace-nowrap">
              <span className="text-xs block text-indigo-300">有効日数</span>
              <span className="text-2xl font-black text-white">連続2日間</span>
            </div>
          </div>
        </section>

        {/* Section 3: 1泊2日宿坊滞在モデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center font-black text-lg">
              03
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                心洗われる1泊2日 宿坊ステイ黄金モデルコース
              </h2>
              <p className="text-xs text-indigo-700 font-medium">特急こうやで行く神秘の静寂と阿字観・朝のお勤め体験</p>
            </div>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-indigo-200">
            {/* Day 1 - Step 1 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-indigo-700 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                1
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">【1日目 09:00】南海難波駅 → 特急こうやで極楽橋へ</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">特急約80分</span>
                </div>
                <p className="text-sm text-slate-600">
                  南海難波駅から特急「こうや」に乗車。車窓が都会から深い山並みへと移り変わり、極楽橋駅で急勾配を登る高野山ケーブルカーへ乗り継ぎ。わずか5分で標高約867mの天空都市へ！
                </p>
              </div>
            </div>

            {/* Day 1 - Step 2 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-indigo-700 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                2
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">【1日目 11:30】奥之院 表参道（一の橋〜御廟）</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">弘法大師入定の聖地</span>
                </div>
                <p className="text-sm text-slate-600">
                  高野山駅からバスで一の橋口へ。樹齢数百年の杉木立の中、20万基を超える墓碑や供養塔が並ぶ参道を歩き御廟へ合掌。聖域の張り詰めた空気に心が研ぎ澄まされます。
                </p>
              </div>
            </div>

            {/* Day 1 - Step 3 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-indigo-700 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                3
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">【1日目 15:30】宿坊へチェックイン＆精進料理</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">至福の宿坊体験</span>
                </div>
                <p className="text-sm text-slate-600">
                  福智院や持明院など歴史ある宿坊に投宿。美しい日本庭園を眺め、天然温泉や薬草風呂で旅の疲れを癒やした後は、彩り鮮やかで繊細な伝統の精進料理を堪能。
                </p>
              </div>
            </div>

            {/* Day 2 - Step 4 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-indigo-700 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                4
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">【2日目 06:30】朝のお勤め・護摩焚き祈祷</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">非日常の静寂</span>
                </div>
                <p className="text-sm text-slate-600">
                  本堂に響き渡る僧侶の読経と炎が立ち上る護摩祈祷に参加。凛とした朝の空気の中で身心を清め、滋味あふれる朝粥定食をいただきます。
                </p>
              </div>
            </div>

            {/* Day 2 - Step 5 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-indigo-700 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                5
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">【2日目 09:30】総本山金剛峯寺＆壇上伽藍（根本大塔）</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">きっぷ優待2割引</span>
                </div>
                <p className="text-sm text-slate-600">
                  国内最大の石庭「蟠龍庭」を誇る金剛峯寺を拝観し、真言密教のシンボル「根本大塔」の立体曼荼羅に圧倒。きっぷの割引クーポンで拝観料もお得に。昼過ぎの特急で難波へ帰還。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 宿坊・高野山おすすめ宿泊施設 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-700 text-white flex items-center justify-center font-black text-lg">
              04
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                高野山ステイを極める！名門宿坊＆アクセス至便ホテル
              </h2>
              <p className="text-xs text-indigo-700 font-medium">高野山内随一の天然温泉宿坊から麓の橋本駅チカホテルまで</p>
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            宿坊に泊まることこそが高野山観光の神髄。高野山唯一の天然温泉を持つ「福智院」をはじめ、格調高い庭園と精進料理で評価の高い宿を厳選しました。
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between"
              >
                <div>
                  {hotel.hotelImageUrl && (
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {hotel.nearestStation && (
                        <div className="absolute top-3 left-3 bg-indigo-950/90 text-indigo-100 text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                          最寄：{hotel.nearestStation}駅
                        </div>
                      )}
                      {hotel.reviewAverage && (
                        <div className="absolute top-3 right-3 bg-white/95 text-amber-600 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                          ★ {hotel.reviewAverage} ({hotel.reviewCount || 0}件)
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-700 transition-colors line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {hotel.access}
                    </p>
                    {hotel.hotelSpecial && (
                      <p className="text-xs text-indigo-900 bg-indigo-50/70 p-2.5 rounded-lg mt-3 line-clamp-2 font-medium">
                        {hotel.hotelSpecial}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安料金</span>
                    <span className="text-xl font-extrabold text-indigo-700 font-mono">
                      ¥{hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : "---"}
                    </span>
                    <span className="text-xs text-slate-500">〜 /人</span>
                  </div>
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-700 to-slate-800 text-white font-bold text-xs hover:from-indigo-800 hover:to-slate-900 shadow-md hover:shadow-indigo-500/20 transition-all"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-indigo-50/60 rounded-xl border border-indigo-200 text-center">
            <p className="text-xs sm:text-sm text-indigo-950 font-medium">
              🏷️ 宿坊は客室数が限られるため早期満室になりがち。楽天トラベルの宿坊予約はお早めの確保がおすすめです！
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="bg-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>🔗</span> 関西・交通比較のお役立ちガイド
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/osaka-tokushima-naruto-bus-vs-car-guide"
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-sm transition-all group"
            >
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 mb-1">
                【大阪〜徳島・鳴門】高速バス vs 車 徹底比較！明石海峡大橋の料金・所要時間
              </h3>
              <p className="text-xs text-slate-500">
                難波・梅田からの高速バスアクセスとレンタカー利用のコスパ比較。
              </p>
            </Link>
            <Link
              href="/tokyo-osaka-bus-vs-shinkansen-guide"
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-sm transition-all group"
            >
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 mb-1">
                【東京〜大阪】夜行バス vs 新幹線！価格差1万円のコスパ・快適度ガチ検証
              </h3>
              <p className="text-xs text-slate-500">
                のぞみ・夜行3列独立シートの疲労度と時間対効果シミュレーション。
              </p>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs">
        <div className="max-w-4xl mx-auto space-y-2">
          <p>© 日本全国・旅宿クラウド (croud-travel) / All Rights Reserved.</p>
          <p>※掲載の運賃および施設料金は改定される場合があります。最新の運行情報・料金は南海電鉄公式サイトをご確認ください。</p>
        </div>
      </footer>
    </div>
  );
}
