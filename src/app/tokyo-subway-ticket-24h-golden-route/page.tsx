import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【東京メトロ24時間券 活用完全ガイド】600円で都内観光乗り倒し！元を取るコスパ最強ルート＆駅チカ宿 ｜ 日本全国・旅宿クラウド",
  description:
    "始発から終電ではなく「使い始めから24時間有効」の東京メトロ24時間券（600円）！初乗り180円×4回で元が取れる。浅草・銀座・渋谷・六本木・新宿を効率よく巡る東京観光モデルコースと大浴場付きホテル。",
  keywords: [
    "東京メトロ24時間券 元を取る",
    "東京メトロ 24時間券 料金 比較",
    "東京 地下鉄 乗り放題 モデルコース",
    "浅草 銀座 渋谷 新宿 観光ルート",
    "都内観光 コスパ ホテル",
    "東京メトロ24時間券 使い方",
    "ちかとく 提携割引",
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
      return data["tokyo-subway-ticket-24h-golden-route"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-subway-ticket-24h-golden-route", e);
  }
  return [];
}

export default function TokyoSubwayTicket24hPage() {
  const hotels = loadHotels();

  // 東京メトロ普通運賃区分（IC/きっぷ）
  const fareDistances = [
    { range: "1km〜6km（1区）", icFare: 178, ticketFare: 180, ridesToBreakEven: "4回（720円）" },
    { range: "7km〜11km（2区）", icFare: 209, ticketFare: 210, ridesToBreakEven: "3回（630円）" },
    { range: "12km〜19km（3区）", icFare: 252, ticketFare: 260, ridesToBreakEven: "3回（780円）" },
    { range: "20km〜27km（4区）", icFare: 293, ticketFare: 300, ridesToBreakEven: "2回（600円）" },
    { range: "28km〜40km（5区）", icFare: 324, ticketFare: 330, ridesToBreakEven: "2回（660円）" },
  ];

  // 24時間跨ぎ（1泊2日）超得シミュレーション
  const spanRides = [
    {
      timing: "Day 1 / 13:00",
      line: "銀座線",
      section: "浅草駅 → 上野駅",
      regularFare: 180,
      desc: "浅草寺・雷門参拝後に上野公園・アメ横へ移動（改札投入で24時間カウント開始！）",
    },
    {
      timing: "Day 1 / 15:30",
      line: "銀座線",
      section: "上野駅 → 銀座駅",
      regularFare: 180,
      desc: "銀座中央通り・GINZA SIXでショッピング＆カフェタイム",
    },
    {
      timing: "Day 1 / 18:30",
      line: "日比谷線",
      section: "銀座駅 → 六本木駅",
      regularFare: 180,
      desc: "六本木ヒルズ展望台で東京タワーと都心の夜景鑑賞＆ディナー",
    },
    {
      timing: "Day 1 / 21:30",
      line: "日比谷線",
      section: "六本木駅 → 築地駅 / 銀座駅",
      regularFare: 210,
      desc: "【この時点で合計750円となり、1日目だけで元取れ達成！（＋150円得）】ホテルへ",
      breakEven: true,
    },
    {
      timing: "Day 2 / 09:00",
      line: "日比谷線・千代田線",
      section: "築地駅 / 銀座駅 → 明治神宮前〈原宿〉駅",
      regularFare: 210,
      desc: "翌朝も有効！明治神宮の杜参拝＆表参道ブランチへ",
    },
    {
      timing: "Day 2 / 11:30",
      line: "副都心線",
      section: "明治神宮前駅 → 新宿三丁目駅",
      regularFare: 180,
      desc: "新宿伊勢丹デパ地下でお土産調達。12:59までに改札を入ればセーフ！",
    },
  ];

  const totalRegular = spanRides.reduce((acc, cur) => acc + cur.regularFare, 0);
  const passPrice = 600;
  const netSavings = totalRegular - passPrice;

  // 24時間券の革命的メリット4箇条
  const benefits = [
    {
      num: "01",
      title: "「当日中」ではなく「使い始めから丸24時間」有効",
      desc: "初日の13:00に改札を通せば、翌日の12:59まで有効。1枚の切符で『初日の午後観光＋ディナー』と『翌日の午前観光・ランチ』の2日間分を完全にカバーできます。",
    },
    {
      num: "02",
      title: "最低4回（中距離なら3回）の乗車で元が取れる",
      desc: "初乗り180円区間なら4回（720円）、銀座〜新宿などの210円区間ならわずか3回（630円）で即座にペイ。東京観光なら半日で軽々クリアできる設定です。",
    },
    {
      num: "03",
      title: "改札内入場が24時間以内なら、出場は何時でもOK",
      desc: "有効期限の最終分（例：12:59）までに自動改札機を通過していれば、目的地駅で改札を出るのが何時になっても追加料金なしで出場できます。",
    },
    {
      num: "04",
      title: "都内約250スポットで使える「ちかとく」優待特典",
      desc: "24時間券を対象施設（東京スカイツリー、六本木ヒルズ展望台、サンシャイン水族館、美術館、飲食店等）で提示すると、入場料割引やドリンクサービスが受けられます。",
    },
  ];

  return (
    <div className="min-h-screen bg-cyan-950/5 text-slate-800 antialiased selection:bg-cyan-600 selection:text-white font-sans">
      {/* ヒーローセクション（Cyanテーマ：東京の洗練された先進都市網、メトロブルーのスピード感） */}
      <header className="relative bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-cyan-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.25),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            東京都市交通 コスパ最強チケット完全攻略 2026
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【東京メトロ24時間券 活用完全ガイド】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-teal-300">
              たった600円で都内観光乗り倒し！
            </span>
            <br />
            元を取るコスパ最強ルート＆駅チカ宿
          </h1>
          <p className="text-cyan-100/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            終電で切れる1日乗車券の時代は終了！東京メトロ24時間券なら、使い始めたその分から翌日の同時刻まで丸々24時間乗り放題。
            初乗り180円×4回で元取れ確定。1泊2日の東京観光で「初日午後＋翌日午前」を1枚で乗り切る裏ワザと、メトロ沿線の利便性抜群ホテルを徹底公開。
          </p>

          {/* 結論ファースト・指標グリッド */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-cyan-300 text-xs font-semibold">24時間券 価格（大人）</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">600円</div>
              <div className="text-[11px] text-cyan-200/70 mt-0.5">小児300円（自動券売機で購入可）</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-sky-300 text-xs font-semibold">損益分岐乗車回数</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">3〜4回</div>
              <div className="text-[11px] text-sky-200/70 mt-0.5">普通運賃180円〜210円区間</div>
            </div>
            <div className="bg-cyan-500/30 border border-cyan-400/50 rounded-2xl p-4 backdrop-blur-sm shadow-inner">
              <div className="text-cyan-200 text-xs font-semibold">1泊2日モデル節約額</div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-300 mt-1">＋540円</div>
              <div className="text-[11px] text-cyan-200 mt-0.5">ほぼ半額で都内縦横無尽</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-teal-300 text-xs font-semibold">「ちかとく」特典</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">約250箇所</div>
              <div className="text-[11px] text-teal-200/70 mt-0.5">展望台・博物館・飲食店割引</div>
            </div>
          </div>
        </div>
      </header>

      {/* 楽天トラベル公式スペシャルバナー */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <SpecialCouponBanner />
      </div>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* セクション1：24時間券の基本スペックと損益分岐点 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-cyan-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black text-lg">
              ¥
            </span>
            <div>
              <span className="text-cyan-700 font-bold text-xs uppercase tracking-wider">Fare Simulation</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                東京メトロの運賃体系 vs 24時間券の損益分岐点
              </h2>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            東京メトロは初乗りが180円（きっぷ）と安価なため、「本当に600円の元が取れるの？」と疑問に思う方も多いはず。
            距離別の運賃区分と、元を取るために必要な乗車回数を整理しました。
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead>
                <tr className="bg-cyan-950 text-white text-xs uppercase">
                  <th className="py-3 px-4 rounded-tl-xl">乗車距離</th>
                  <th className="py-3 px-4">きっぷ運賃</th>
                  <th className="py-3 px-4">ICカード運賃</th>
                  <th className="py-3 px-4">主な区間例</th>
                  <th className="py-3 px-4 rounded-tr-xl text-right">元取れ必要乗車回数</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-100 text-xs sm:text-sm">
                <tr className="bg-white">
                  <td className="py-3 px-4 font-bold text-cyan-900">1km〜6km（1区）</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">180円</td>
                  <td className="py-3 px-4 text-slate-600">178円</td>
                  <td className="py-3 px-4 text-slate-500">浅草〜上野 / 銀座〜東京 / 渋谷〜表参道</td>
                  <td className="py-3 px-4 text-right font-black text-cyan-700">4回（720円）</td>
                </tr>
                <tr className="bg-cyan-50/40">
                  <td className="py-3 px-4 font-bold text-cyan-900">7km〜11km（2区）</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">210円</td>
                  <td className="py-3 px-4 text-slate-600">209円</td>
                  <td className="py-3 px-4 text-slate-500">銀座〜新宿 / 浅草〜銀座 / 渋谷〜六本木</td>
                  <td className="py-3 px-4 text-right font-black text-cyan-700">3回（630円）</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-bold text-cyan-900">12km〜19km（3区）</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">260円</td>
                  <td className="py-3 px-4 text-slate-600">252円</td>
                  <td className="py-3 px-4 text-slate-500">浅草〜渋谷 / 池袋〜銀座 / 新宿〜上野</td>
                  <td className="py-3 px-4 text-right font-black text-cyan-700">3回（780円）</td>
                </tr>
                <tr className="bg-cyan-50/40">
                  <td className="py-3 px-4 font-bold text-cyan-900">20km以上（4〜5区）</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">300円〜330円</td>
                  <td className="py-3 px-4 text-slate-600">293円〜324円</td>
                  <td className="py-3 px-4 text-slate-500">荻窪〜西船橋（東西線完乗）など</td>
                  <td className="py-3 px-4 text-right font-black text-cyan-700">たった2回！</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200">
            <h4 className="text-cyan-900 font-bold text-sm mb-1">🎯 結論：都内観光なら確実に元が取れる！</h4>
            <p className="text-cyan-800 text-xs sm:text-sm leading-relaxed">
              「浅草観光 → 銀座でカフェ → 六本木で夜景」と移動するだけで既に運賃は570円〜600円に到達。
              これにホテルへの帰宅や翌朝の移動を1回加えるだけで、100%確実に利益（元取れ）が発生します。
            </p>
          </div>
        </section>

        {/* セクション2：なぜ24時間券が最強なのか？4大メリット */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-cyan-700 font-bold text-xs uppercase tracking-wider">Smart Features</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              普通の1日乗車券とここが違う！24時間券の圧倒的強み
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              「終電で使えなくなる切符」から「翌日の同じ時刻まで使える時間制」への大進化。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-cyan-100 relative overflow-hidden"
              >
                <div className="text-6xl font-black text-cyan-100 absolute right-4 -bottom-2 select-none pointer-events-none">
                  {b.num}
                </div>
                <div className="text-xs font-black text-cyan-600 uppercase mb-2">POINT {b.num}</div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 leading-snug">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3：1泊2日「24時間跨ぎ」黄金モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-cyan-100">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black text-lg">
              ⏱
            </span>
            <div>
              <span className="text-cyan-700 font-bold text-xs uppercase tracking-wider">Ultimate 24h Model Course</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                1枚で2日分得する！「13:00スタート〜翌日12:59」完全踏破タイムテーブル
              </h2>
            </div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
            休日に東京へ到着する観光客に最も多い「昼過ぎスタート」。初日の13時に切符を改札機に通せば、翌日12時59分まで使い倒せます。
          </p>

          <div className="space-y-6 border-l-2 border-cyan-300 ml-4 pl-6 relative">
            {spanRides.map((ride, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-500 border-4 border-white shadow-sm" />
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="text-xs font-black text-cyan-800">{ride.timing}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900 font-bold">
                    {ride.line}
                  </span>
                  <span className="text-xs text-slate-400">（通常運賃: {ride.regularFare}円）</span>
                  {ride.breakEven && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500 text-white font-black animate-pulse">
                      ★元取れ達成！
                    </span>
                  )}
                </div>
                <h3 className="font-black text-slate-900 text-base sm:text-lg mb-1">{ride.section}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ride.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-cyan-950 text-white flex flex-col sm:flex-row justify-between items-center gap-3">
            <div>
              <div className="text-cyan-300 text-xs font-bold">通常きっぷ合計：1,140円</div>
              <div className="text-base sm:text-lg font-black">
                東京メトロ24時間券（600円）で【540円（約47%）の大幅黒字】！
              </div>
            </div>
            <span className="shrink-0 px-4 py-2 bg-cyan-500 text-white font-bold text-xs rounded-xl shadow">
              回収率 190% 達成
            </span>
          </div>
        </section>

        {/* セクション4：東京観光の拠点！メトロ駅チカ厳選ホテル */}
        <section className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-cyan-800/40">
          <div className="max-w-2xl mb-8">
            <span className="text-cyan-400 font-black text-xs uppercase tracking-wider">Metropolitan Bases</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              メトロ駅チカで身軽に観光！銀座・築地・都心の厳選ホテル
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              銀座線・日比谷線・大江戸線などの駅に近いホテルを選べば、チェックイン前後の荷物預けもスムーズ。歩き疲れた体を癒やす大浴場付きホテルやスタイリッシュな最新宿を厳選。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-800">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group border border-cyan-100"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-bold">
                      東京のスタイリッシュホテル
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute bottom-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <span className="text-cyan-400">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-slate-300 text-[10px]">({hotel.reviewCount}件)</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-cyan-800 mb-1">
                      {hotel.nearestStation ? `最寄駅: ${hotel.nearestStation}` : hotel.address1 || "東京・銀座・築地"}
                    </div>
                    <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-cyan-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {hotel.hotelSpecial || "地下鉄各線へのアクセス抜群。東京観光・ショッピングの拠点に最適な快適ステイ。"}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block">最安参考料金（1名）</span>
                      <span className="text-cyan-800 font-black text-lg">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      空室・プラン確認
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション5：知っておくべき注意点・メトロ攻略Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-cyan-100">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
            東京メトロ24時間券の注意点＆乗換のコツ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100">
              <h3 className="font-bold text-slate-900 mb-1">① 都営地下鉄やJR山手線には乗れない</h3>
              <p className="text-slate-600 leading-relaxed">
                600円券は「東京メトロ全9路線のみ」が乗り放題です。都営地下鉄（浅草線・三田線・新宿線・大江戸線）も乗りたい場合は「Tokyo Subway Ticket」や都営共通券（900円）が必要ですが、主要観光地はメトロだけでほぼ95%回れます。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100">
              <h3 className="font-bold text-slate-900 mb-1">② 各駅の自動券売機で当日即買える</h3>
              <p className="text-slate-600 leading-relaxed">
                旅行会社や予約サイトに行かなくても、東京メトロ各駅のピンク色の券売機で現金またはクレジットカードで購入可能。「当日券（発券時入場開始）」と「前売り券（6ヶ月以内に初乗車）」が選べます。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100">
              <h3 className="font-bold text-slate-900 mb-1">③ 改札外乗り換え（オレンジ色の改札機）</h3>
              <p className="text-slate-600 leading-relaxed">
                渋谷駅や上野駅など一部の駅では改札を一旦出て乗り換えますが、24時間券なら乗り放題なのでオレンジ改札を気にする必要すらなく自由に通過できます。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100">
              <h3 className="font-bold text-slate-900 mb-1">④ 「ちかとく」マークのある店舗で提示</h3>
              <p className="text-slate-600 leading-relaxed">
                切符の裏面に印字された利用時間を提示するだけで、飲食店でデザートが無料になったり、美術館のチケットが200円引きになる特典が満載です。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連記事ナビゲーション */}
        <section className="bg-gradient-to-r from-cyan-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8">
          <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">Related Travel Guides</div>
          <h3 className="text-xl font-black mb-4">東京ステイをさらに楽しむ！関連おすすめガイド</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/tokyo-disney-resort-family-hotel-comparison"
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10 block group"
            >
              <div className="text-xs text-cyan-300 font-bold mb-1">ファミリー・リゾート</div>
              <div className="font-bold text-sm text-white group-hover:text-cyan-200 transition">
                【東京ディズニーリゾート ファミリーホテル比較】無料シャトル＆洗い場付き風呂 →
              </div>
            </Link>
            <Link
              href="/tokyo-birthday-surprise-luxury-hotel-guide"
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10 block group"
            >
              <div className="text-xs text-cyan-300 font-bold mb-1">夜景・アニバーサリー</div>
              <div className="font-bold text-sm text-white group-hover:text-cyan-200 transition">
                【東京 誕生日サプライズ＆記念日ホテル特集】高層階夜景＆ケーキ付きプラン →
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
