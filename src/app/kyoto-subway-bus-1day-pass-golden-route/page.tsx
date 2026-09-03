import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【地下鉄・バス1日券で巡る京都観光】1,100円で元を取る黄金ルート＆市バス大渋滞を完全回避する裏ワザ ｜ 日本全国・旅宿クラウド",
  description: "バス一日券廃止後の新定番「地下鉄・バス1日券」（1,100円）！地下鉄（220円〜）と市バス（230円）を組み合わせ、京都駅周辺の市バス長蛇の列を回避して清水寺・二条城・嵐山・南禅寺を最速で回る時短モデルコース。",
  keywords: [
    "京都 地下鉄バス1日券 元取り",
    "京都 市バス 渋滞 回避",
    "京都観光 1日券 モデルコース",
    "地下鉄・バス1日券 1100円",
    "京都駅 バス 混雑",
    "清水寺 二条城 嵐山 アクセス",
    "京都 旅行 コスパ 電車"
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
      return data["kyoto-subway-bus-1day-pass-golden-route"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-subway-bus-1day-pass-golden-route", e);
  }
  return [];
}

export default function KyotoSubwayBusPassPage() {
  const hotels = loadHotels();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/30 text-teal-200 text-xs font-semibold tracking-wide uppercase mb-4 border border-teal-400/30">
            <span>Kyoto Transit Pass Guide</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-300"></span>
            <span>交通渋滞ゼロ作戦</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【地下鉄・バス1日券で巡る京都観光】<br className="hidden sm:inline" />
            <span className="text-teal-300">1,100円で元を取る黄金ルート</span>＆市バス大渋滞を完全回避する裏ワザ
          </h1>
          <p className="mt-5 text-base sm:text-lg text-teal-100/90 leading-relaxed">
            かつての「市バス1日乗車券（700円）」が観光公害・大混雑により廃止され、現在のスタンダードとなったのが「地下鉄・バス1日券（大人1,100円）」。
            「値上がりして損？」と思いきや、実は地下鉄（初乗り220円〜）と市バス（一律230円）をハイブリッド活用することで、京都駅の超絶バス待ち列をパスし、移動時間を半減させながら余裕で元が取れる最強チケットです。
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-teal-200">
            <span className="bg-teal-800/60 px-3 py-1.5 rounded-lg border border-teal-700/50">🎫 券面価格：大人1,100円 / 小児550円</span>
            <span className="bg-teal-800/60 px-3 py-1.5 rounded-lg border border-teal-700/50">⏱ 移動時間：最大60分短縮</span>
            <span className="bg-teal-800/60 px-3 py-1.5 rounded-lg border border-teal-700/50">⚡ 損益分岐：4〜5回の乗車で元</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: なぜ市バスだけだと京都観光は破綻するのか */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-lg">
              01
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                なぜ「市バスだけ」の観光は破綻するのか？
              </h2>
              <p className="text-xs text-teal-700 font-medium">京都駅前バスターミナルの現実と地下鉄ワープの威力</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              観光シーズンの京都駅烏丸口バスターミナル（D2・D1の清水寺・祇園方面など）では、バスに乗るだけで<strong>30分〜50分待ちの長蛇の列</strong>が発生します。さらに五条通や東大路通は大渋滞となり、通常15分の区間に45分以上かかることも珍しくありません。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                <h3 className="font-bold text-rose-800 flex items-center gap-2 mb-2">
                  <span className="text-lg">❌</span> 市バスのみ利用の罠
                </h3>
                <ul className="text-sm text-rose-900/80 space-y-2 list-disc list-inside">
                  <li>京都駅のバス停で30〜50分の行列待ち</li>
                  <li>東大路・五条・四条通の激しい自然渋滞</li>
                  <li>満員通過で目当てのバスに乗れないリスク</li>
                  <li>1日3スポット回るだけでタイムオーバー</li>
                </ul>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-bold text-teal-800 flex items-center gap-2 mb-2">
                  <span className="text-lg">⭕</span> 地下鉄＋バス併用の快感
                </h3>
                <ul className="text-sm text-teal-900/80 space-y-2 list-disc list-inside">
                  <li>京都駅から烏丸線・東西線で渋滞エリアを地下ワープ</li>
                  <li>主要駅から近距離バス（1〜2停留所）で目的地へ直行</li>
                  <li>定時運行で予定が1分単位で狂わない</li>
                  <li>体力を温存でき、夕方〜夜のライトアップまで元気</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-slate-600 bg-slate-100 p-4 rounded-xl">
              💡 <strong>地下鉄・バス1日券の基本ルール：</strong> 京都市営地下鉄（烏丸線・東西線全線）、市営バス全線、京都バス（一部除外路線あり）、京阪バス（山科・醍醐エリアなどの指定区間）、西日本JRバス（高雄・京北線の一部）が乗り降り自由です。
            </p>
          </div>
        </section>

        {/* Section 2: 運賃シミュレーションと損益分岐点 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-lg">
              02
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                1,100円の元を取る「運賃計算シミュレーション」
              </h2>
              <p className="text-xs text-teal-700 font-medium">地下鉄2回＋バス3回で確実に大幅プラスへ</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-teal-50 text-teal-900 font-semibold border-b border-teal-100">
                <tr>
                  <th className="py-3 px-4">区間・移動手段</th>
                  <th className="py-3 px-4">通常片道運賃</th>
                  <th className="py-3 px-4">累計通常運賃</th>
                  <th className="py-3 px-4">1日券利用時</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4">① 京都駅 → 二条城前（地下鉄烏丸線・東西線乗換）</td>
                  <td className="py-3 px-4 font-mono">¥260</td>
                  <td className="py-3 px-4 font-mono text-slate-500">¥260</td>
                  <td className="py-3 px-4 text-teal-700 font-semibold">フリーパス適用</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4">② 二条城前 → 南禅寺・永観堂（地下鉄東西線：蹴上駅）</td>
                  <td className="py-3 px-4 font-mono">¥260</td>
                  <td className="py-3 px-4 font-mono text-slate-500">¥520</td>
                  <td className="py-3 px-4 text-teal-700 font-semibold">フリーパス適用</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4">③ 東山・蹴上 → 清水寺入口（市バス206・202等：五条坂）</td>
                  <td className="py-3 px-4 font-mono">¥230</td>
                  <td className="py-3 px-4 font-mono text-slate-500">¥750</td>
                  <td className="py-3 px-4 text-teal-700 font-semibold">フリーパス適用</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-teal-50/50">
                  <td className="py-3 px-4 font-medium">④ 清水寺 → 祇園・四条河原町（市バス207系など）</td>
                  <td className="py-3 px-4 font-mono">¥230</td>
                  <td className="py-3 px-4 font-mono font-bold text-teal-700">¥980（リーチ）</td>
                  <td className="py-3 px-4 text-teal-700 font-semibold">フリーパス適用</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-emerald-50">
                  <td className="py-3 px-4 font-semibold text-emerald-900">⑤ 四条河原町/四条駅 → 京都駅（地下鉄烏丸線）</td>
                  <td className="py-3 px-4 font-mono">¥220</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-700">¥1,200（元取り達成！）</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">+¥100 お得</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-emerald-100/50">
                  <td className="py-3 px-4 font-semibold text-emerald-950">⑥ （オプション）夜の二条城ライトアップ往復</td>
                  <td className="py-3 px-4 font-mono">+¥520</td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-800">¥1,720</td>
                  <td className="py-3 px-4 text-emerald-800 font-extrabold">+¥620 大幅黒字</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 p-4 rounded-xl bg-teal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-teal-300 font-semibold">損益分岐ポイントの判定</p>
              <p className="text-lg font-bold">「地下鉄2回＋市バス2回」＝980円、「地下鉄3回＋市バス2回」＝1,200円で完全黒字化！</p>
            </div>
            <div className="bg-teal-700 px-4 py-2 rounded-lg text-center whitespace-nowrap">
              <span className="text-xs block text-teal-200">最小乗車回数</span>
              <span className="text-2xl font-black text-white">4〜5回</span>
            </div>
          </div>
        </section>

        {/* Section 3: 渋滞知らず！王道黄金モデルコース（08:30〜20:30） */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-lg">
              03
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                渋滞完全回避！最速で回る1日黄金モデルコース
              </h2>
              <p className="text-xs text-teal-700 font-medium">京都駅を拠点に午前二条城、午後東山、夕暮れ祇園を満喫</p>
            </div>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-teal-200">
            {/* Step 1 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                1
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">08:30 【出発】京都駅 → 二条城前駅</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800">地下鉄</span>
                </div>
                <p className="text-sm text-slate-600">
                  京都駅のバス停を横目にスルーし、地下鉄烏丸線で「烏丸御池駅」へ。東西線に乗換えて「二条城前駅」下車。地上に出れば目の前が二条城。バスなら40分かかる区間をわずか14分で移動！
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                2
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">11:00 二条城前駅 → 蹴上駅（南禅寺・水路閣）</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800">地下鉄東西線</span>
                </div>
                <p className="text-sm text-slate-600">
                  東西線で東へ一直線。蹴上（けあげ）駅で下車し、ねじりまんぽ（トンネル）を抜けて南禅寺へ。レンガ造りの水路閣や名物・湯豆腐ランチを堪能。市街地の信号待ち・渋滞とは無縁の世界。
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                3
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">14:00 東山三条/東山駅 → 清水寺（五条坂）</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">市バス短距離乗車</span>
                </div>
                <p className="text-sm text-slate-600">
                  南禅寺から東山駅へ戻り、東山通りの市バスに乗車。京都駅発の満員便ではなく、東山区内だけの数区間利用なのでスムーズに乗車可能。五条坂・清水坂を登り、舞台からの絶景を拝観。
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                4
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">17:00 清水寺 → 産寧坂・八坂神社・祇園・河原町</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700">徒歩散策＋バス</span>
                </div>
                <p className="text-sm text-slate-600">
                  夕方は情緒あふれる産寧坂・二年坂をそぞろ歩きながら八坂神社へ。祇園で京料理ディナーやおばんざい、河原町のカフェ巡りを満喫。
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                5
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">20:30 四条駅 → 京都駅（ホテル帰着）</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800">地下鉄烏丸線</span>
                </div>
                <p className="text-sm text-slate-600">
                  四条通の夜間混雑バスを避け、四条駅から地下鉄烏丸線でわずか3分で京都駅へ帰着。疲れた足腰にやさしく、駅直結ホテルにチェックイン！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 1日券提示で受けられる優待施設割引 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-lg">
              04
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                知らなきゃ損！パス提示で受けられる寺院・ミュージアム優待
              </h2>
              <p className="text-xs text-teal-700 font-medium">交通費だけでなく拝観料や入場料もその場で割引</p>
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            「地下鉄・バス1日券」の当日の日付が印字された券面を提示すると、京都市内の約60箇所以上の観光名所や美術館・文化施設で割引・記念品進呈の優待特典が受けられます。
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="border border-teal-100 rounded-xl p-4 bg-teal-50/40">
              <h3 className="font-bold text-teal-900 text-sm mb-1">二条城（元離宮二条城）</h3>
              <p className="text-xs text-slate-600">入城料が一般100円引（※展示収蔵館観覧料等は別途）</p>
            </div>
            <div className="border border-teal-100 rounded-xl p-4 bg-teal-50/40">
              <h3 className="font-bold text-teal-900 text-sm mb-1">京都鉄道博物館</h3>
              <p className="text-xs text-slate-600">入館料が一般・大学生10%引（1,500円→1,350円）</p>
            </div>
            <div className="border border-teal-100 rounded-xl p-4 bg-teal-50/40">
              <h3 className="font-bold text-teal-900 text-sm mb-1">京都市京セラ美術館</h3>
              <p className="text-xs text-slate-600">コレクションルーム観覧料など各種企画展で100円引</p>
            </div>
          </div>
        </section>

        {/* Section 5: 京都駅直結・四条河原町のおすすめ駅チカホテル */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-lg">
              05
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                1日券をフル活用できる京都駅前・四条河原町のおすすめ拠点ホテル
              </h2>
              <p className="text-xs text-teal-700 font-medium">地下鉄駅直結・徒歩圏で早朝から動き出せる高評価宿</p>
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            京都観光の勝敗は「朝一番のスタートダッシュ」で決まります。地下鉄直結または改札まで徒歩数分のホテルを拠点にすれば、荷物を預けて手ぶらで即座に出発できます。
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
                        <div className="absolute top-3 left-3 bg-teal-900/90 text-teal-100 text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
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
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-teal-700 transition-colors line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {hotel.access}
                    </p>
                    {hotel.hotelSpecial && (
                      <p className="text-xs text-teal-800 bg-teal-50 p-2.5 rounded-lg mt-3 line-clamp-2 font-medium">
                        {hotel.hotelSpecial}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安料金</span>
                    <span className="text-xl font-extrabold text-teal-700 font-mono">
                      ¥{hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : "---"}
                    </span>
                    <span className="text-xs text-slate-500">〜 /人</span>
                  </div>
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-xs hover:from-teal-700 hover:to-emerald-700 shadow-md hover:shadow-teal-500/20 transition-all"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-teal-50 rounded-xl border border-teal-200 text-center">
            <p className="text-xs sm:text-sm text-teal-900 font-medium">
              🏷️ 楽天トラベルでは「毎月5と0のつく日」に高級宿・温泉宿が最大20%OFF、ご当地クーポンも随時配布中！
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="bg-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>🔗</span> 京都旅行のあわせて読みたい完全ガイド
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/kyoto-travel-budget-how-many-nights"
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-teal-600 mb-1">
                【京都旅行は何泊がベスト？】宿泊費・拝観料・食費のリアル予算相場
              </h3>
              <p className="text-xs text-slate-500">
                1泊2日・2泊3日それぞれの所要費用総額とエリア別ホテル相場を徹底解説。
              </p>
            </Link>
            <Link
              href="/kyoto-temple-walking-shoes-outfit-mistakes-guide"
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-teal-600 mb-1">
                【京都寺社めぐり服装＆靴選び】石段・砂利道で失敗しないリアル装備術
              </h3>
              <p className="text-xs text-slate-500">
                1日2万歩歩く京都観光の靴選び、お寺の靴脱ぎルールと脱ぎ履きしやすい対策。
              </p>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs">
        <div className="max-w-4xl mx-auto space-y-2">
          <p>© 日本全国・旅宿クラウド (croud-travel) / All Rights Reserved.</p>
          <p>※掲載の運賃および施設料金は改定される場合があります。最新の運行情報・料金は京都市交通局公式サイトをご確認ください。</p>
        </div>
      </footer>
    </div>
  );
}
