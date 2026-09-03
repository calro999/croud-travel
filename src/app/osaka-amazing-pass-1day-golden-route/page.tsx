import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大阪周遊パス1日券 完全元取りガイド】電車乗り放題＋40ヶ所以上の観光施設が無料！1万円分得するモデルコース ｜ 日本全国・旅宿クラウド",
  description: "電車・バス乗り放題に加えて梅田スカイビル空中庭園・大阪城天守閣・道頓堀クルーズなどが無料になる「大阪周遊パス」！通常料金との徹底比較シミュレーション、朝から晩まで遊び尽くすコスパ最強スケジュール。",
  keywords: [
    "大阪周遊パス 元取り",
    "大阪周遊パス 1日券 モデルコース",
    "大阪周遊パス 無料施設 おすすめ",
    "梅田スカイビル 空中庭園 無料",
    "とんぼりリバークルーズ",
    "大阪城天守閣",
    "大阪 コスパ 観光",
    "Osaka Amazing Pass"
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
      return data["osaka-amazing-pass-1day-golden-route"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for osaka-amazing-pass-1day-golden-route", e);
  }
  return [];
}

export default function OsakaAmazingPassPage() {
  const hotels = loadHotels();

  return (
    <div className="min-h-screen bg-rose-50/30 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-rose-900 via-pink-800 to-rose-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/30 text-rose-200 text-xs font-semibold tracking-wide uppercase mb-4 border border-rose-400/30">
            <span>Osaka Amazing Pass Breakdown</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-300"></span>
            <span>還元率300%超えの実力</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【大阪周遊パス1日券 完全元取りガイド】<br className="hidden sm:inline" />
            電車乗り放題＋40施設無料！<span className="text-rose-300">通常10,000円超がこの1枚</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-rose-100/90 leading-relaxed">
            Osaka Metro（地下鉄全線）と大阪シティバス、さらに私鉄各線の乗り放題に加え、空中庭園展望台（1,500円）や大阪城天守閣（600円）、道頓堀リバークルーズ（1,200円）など40ヶ所以上の超人気スポットが無料パスになる「大阪周遊パス（デジタル版/磁気版 3,300円）」。
            スポットを3つ巡るだけで即座にプラスに転じる、日本トップクラスの爆得パスの徹底攻略法です。
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-rose-200">
            <span className="bg-rose-800/60 px-3 py-1.5 rounded-lg border border-rose-700/50">🎟️ パス価格：1日券 3,300円</span>
            <span className="bg-rose-800/60 px-3 py-1.5 rounded-lg border border-rose-700/50">🏰 対象施設：40スポット以上入場無料</span>
            <span className="bg-rose-800/60 px-3 py-1.5 rounded-lg border border-rose-700/50">💰 還元額：通常総額 約9,200円分を体験可能</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Section 1: 周遊パスの仕組みと元取りの基本 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rose-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-lg">
              01
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                なぜ大阪周遊パスは「最強」と呼ばれるのか？
              </h2>
              <p className="text-xs text-rose-700 font-medium">乗車券＋施設無料パスが一体化した圧倒的コストパフォーマンス</p>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              多くの観光1日券は「交通機関のフリーパス」にとどまりますが、大阪周遊パスの真骨頂は<strong>「メイン観光名所の入場チケットそのものが付属している」</strong>点にあります。
            </p>
            <p>
              例えば、梅田スカイビル 空中庭園展望台（1,500円 ※16時まで無料入場）と大阪水上バス アクアライナー（1,800円）の2つに乗るだけで合計3,300円。なんと<strong>この2箇所だけでパス代3,300円を回収</strong>できてしまいます。電車代やその他の観光施設はすべて「無料ボーナス」という驚異の仕組みです。
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-rose-700 mb-1">40+</div>
                <div className="font-bold text-slate-800 text-sm">無料入場スポット</div>
                <p className="text-xs text-slate-500 mt-1">城・展望台・クルーズ・美術館</p>
              </div>
              <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-rose-700 mb-1">乗り放題</div>
                <div className="font-bold text-slate-800 text-sm">地下鉄＆バス＆私鉄</div>
                <p className="text-xs text-slate-500 mt-1">Osaka Metro全線・阪急・阪神等</p>
              </div>
              <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-rose-700 mb-1">約6,000円得</div>
                <div className="font-bold text-slate-800 text-sm">1日モデルコース還元</div>
                <p className="text-xs text-slate-500 mt-1">朝から夜までフル活用した場合</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 通常料金 vs パス利用 収支比較シミュレーション */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rose-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-lg">
              02
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                【徹底検証】通常料金 vs 大阪周遊パス 収支表
              </h2>
              <p className="text-xs text-rose-700 font-medium">王道スポットを1日巡った場合のリアルな差額</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-rose-50 text-rose-900 font-semibold border-b border-rose-100">
                <tr>
                  <th className="py-3 px-4">体験スポット・移動区間</th>
                  <th className="py-3 px-4">通常料金</th>
                  <th className="py-3 px-4">周遊パス適用時</th>
                  <th className="py-3 px-4">お得額</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">Osaka Metro 1日移動（初乗り¥190〜×5回分）</td>
                  <td className="py-3 px-4 font-mono">¥1,190</td>
                  <td className="py-3 px-4 text-rose-600 font-semibold">無料（乗り放題）</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥1,190</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">大阪城天守閣 入場料</td>
                  <td className="py-3 px-4 font-mono">¥600</td>
                  <td className="py-3 px-4 text-rose-600 font-semibold">無料</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥600</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">大阪城御座船（お濠めぐり観光船）</td>
                  <td className="py-3 px-4 font-mono">¥1,500</td>
                  <td className="py-3 px-4 text-rose-600 font-semibold">無料</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥1,500</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">梅田スカイビル 空中庭園展望台（16:00迄入場）</td>
                  <td className="py-3 px-4 font-mono">¥1,500</td>
                  <td className="py-3 px-4 text-rose-600 font-semibold">無料</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥1,500</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">HEP FIVE観覧車（梅田の赤い大観覧車）</td>
                  <td className="py-3 px-4 font-mono">¥600</td>
                  <td className="py-3 px-4 text-rose-600 font-semibold">無料</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥600</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">とんぼりリバークルーズ（道頓堀夜景クルーズ）</td>
                  <td className="py-3 px-4 font-mono">¥1,200</td>
                  <td className="py-3 px-4 text-rose-600 font-semibold">無料</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥1,200</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium">通天閣 一般展望台（特別屋外展望台除く）</td>
                  <td className="py-3 px-4 font-mono">¥900</td>
                  <td className="py-3 px-4 text-rose-600 font-semibold">無料</td>
                  <td className="py-3 px-4 font-mono text-slate-600">+¥900</td>
                </tr>
                <tr className="bg-rose-100/60 font-bold">
                  <td className="py-3.5 px-4 text-rose-950">1日合計総額</td>
                  <td className="py-3.5 px-4 font-mono text-rose-950 text-base">¥7,490</td>
                  <td className="py-3.5 px-4 font-mono text-rose-700 text-base">¥3,300（パス代）</td>
                  <td className="py-3.5 px-4 font-mono text-rose-700 text-lg font-black">+¥4,190お得！</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm">
            ⚠️ <strong>重要チェックポイント：</strong> 梅田スカイビル空中庭園の無料入場は「16:00まで」の入場に限られます（16:00以降はパス提示で入場料30%割引）。夕暮れや夜景を楽しみたい場合でも、15:45までに窓口を通るスケジュールを組むのが最大節約の秘訣です！
          </div>
        </section>

        {/* Section 3: 朝から晩まで遊び尽くす！1日完全制覇モデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rose-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-lg">
              03
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                朝9時〜夜21時まで！1万円分満喫する黄金モデルコース
              </h2>
              <p className="text-xs text-rose-700 font-medium">キタ・ミナミ・大阪城・ベイエリアを無駄なく繋ぐ周遊ルート</p>
            </div>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-rose-200">
            {/* Step 1 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                1
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">09:00 【大阪城エリア】大阪城天守閣＆御座船クルーズ</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">2,100円相当無料</span>
                </div>
                <p className="text-sm text-slate-600">
                  地下鉄谷町線「谷町四丁目駅」からスタート。大阪城天守閣の最上階から市内を一望し、お濠を金箔で飾られた「大阪城御座船」で優雅にクルーズ。朝の清々しい空気を満喫。
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                2
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">12:30 【梅田キタ】梅田ランチ＆空中庭園展望台＆HEP FIVE</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">2,100円相当無料</span>
                </div>
                <p className="text-sm text-slate-600">
                  御堂筋線で梅田へ移動し、新梅田食道街で名物お好み焼きランチ。15:00前に梅田スカイビルへ向かい「空中庭園」へ無料入場。さらにHEP FIVEで赤い観覧車に乗り都会の真上を空中散歩！
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                3
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">16:30 【新世界エリア】通天閣＆下町串カツタイム</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">900円相当無料</span>
                </div>
                <p className="text-sm text-slate-600">
                  堺筋線で恵美須町駅へ。昭和レトロな新世界のランドマーク「通天閣」へ登り、ビリケンさんの足の裏を撫でてご利益祈願。ジャンジャン横丁で揚げたてアツアツの串カツを堪能！
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-white z-10">
                4
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-slate-900 text-base">19:30 【難波ミナミ】とんぼりリバークルーズ＆道頓堀散策</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">1,200円相当無料</span>
                </div>
                <p className="text-sm text-slate-600">
                  なんば駅へ移動し、道頓堀へ。事前に予約しておいた「とんぼりリバークルーズ」に乗船。グリコサインの下をくぐりながら大阪名物ガイドの軽快なトークを満喫し、旅を締めくくり！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 拠点にすべき！御堂筋線・なんば駅直結おすすめホテル */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-rose-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-lg">
              04
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                周遊パス使い倒し！なんば・心斎橋の厳選拠点ホテル
              </h2>
              <p className="text-xs text-rose-700 font-medium">Osaka Metro各線が集中するなんば駅チカ宿で身軽に観光</p>
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            大阪周遊パスを最大限に活かすなら、御堂筋線・四つ橋線・千日前線が交差する<strong>「なんば・日本橋エリア」</strong>のホテルが最適。朝の出発も夜の道頓堀ディナー後も歩いてホテルへ戻れます。
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
                        <div className="absolute top-3 left-3 bg-rose-900/90 text-rose-100 text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
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
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-rose-700 transition-colors line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {hotel.access}
                    </p>
                    {hotel.hotelSpecial && (
                      <p className="text-xs text-rose-800 bg-rose-50 p-2.5 rounded-lg mt-3 line-clamp-2 font-medium">
                        {hotel.hotelSpecial}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">最安目安料金</span>
                    <span className="text-xl font-extrabold text-rose-700 font-mono">
                      ¥{hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : "---"}
                    </span>
                    <span className="text-xs text-slate-500">〜 /人</span>
                  </div>
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs hover:from-rose-700 hover:to-pink-700 shadow-md hover:shadow-rose-500/20 transition-all"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-rose-50 rounded-xl border border-rose-200 text-center">
            <p className="text-xs sm:text-sm text-rose-900 font-medium">
              🏷️ 楽天トラベルの大阪ホテル特集でチェーンホテル限定クーポンや早期割プランをチェック！
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="bg-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>🔗</span> 大阪旅行の関連ガイド・人気プラン
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/osaka-travel-budget-guide"
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-rose-500 hover:shadow-sm transition-all group"
            >
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-rose-600 mb-1">
                【大阪観光の予算完全版】1泊2日・2泊3日の食費・ホテル代・お土産代
              </h3>
              <p className="text-xs text-slate-500">
                くいだおれの街・大阪をコスパ良く楽しむための費用シミュレーション。
              </p>
            </Link>
            <Link
              href="/usj-family-hotel-near-osaka-guide"
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-rose-500 hover:shadow-sm transition-all group"
            >
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-rose-600 mb-1">
                【USJ×大阪市内周遊】家族旅行におすすめのオフィシャル＆駅チカホテル
              </h3>
              <p className="text-xs text-slate-500">
                ユニバと市内観光をどちらも欲張りに楽しむホテルの選び方。
              </p>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs">
        <div className="max-w-4xl mx-auto space-y-2">
          <p>© 日本全国・旅宿クラウド (croud-travel) / All Rights Reserved.</p>
          <p>※大阪周遊パスの無料対象施設、利用条件、営業時間等は変更される場合があります。利用前に公式サイトの最新情報をご確認ください。</p>
        </div>
      </footer>
    </div>
  );
}
