import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【江ノ電1日乗車券のりおりくん完全攻略】800円で元を取るモデルコース＆海沿い途中下車の旅 ｜ 日本全国・旅宿クラウド",
  description:
    "江ノ電1日乗車券「のりおりくん」（大人800円）を徹底活用！何回乗れば元が取れる？（3回乗車で即元取れ）。鎌倉高校前踏切、七里ヶ浜海カフェ、長谷寺大仏、江ノ島シーキャンドルを巡る最強タイムテーブル。",
  keywords: [
    "江ノ電 のりおりくん 元を取る",
    "のりおりくん 料金 比較",
    "江ノ電 1日乗車券 モデルコース",
    "鎌倉高校前 七里ヶ浜 長谷寺 江ノ島",
    "江ノ電 途中下車の旅",
    "鎌倉 藤沢 ホテル 宿泊",
    "江ノ島 観光 ルート",
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
      return data["enoshima-kamakura-noriorikun-golden-route"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for enoshima-kamakura-noriorikun-golden-route", e);
  }
  return [];
}

export default function EnoshimaKamakuraNoriorikunPage() {
  const hotels = loadHotels();

  // 江ノ電 区間運賃テーブル（通常きっぷ運賃）
  const fareTiers = [
    { distance: "1区（1km〜3km）", fare: "200円", example: "鎌倉 ⇔ 長谷 / 江ノ島 ⇔ 腰越" },
    { distance: "2区（4km〜7km）", fare: "260円", example: "鎌倉 ⇔ 稲村ヶ崎 / 江ノ島 ⇔ 七里ヶ浜" },
    { distance: "3区（8km〜10km）", fare: "310円", example: "鎌倉 ⇔ 江ノ島 / 藤沢 ⇔ 七里ヶ浜" },
    { distance: "全線完乗（10km超）", fare: "310円", example: "鎌倉 ⇔ 藤沢（通し乗車）" },
  ];

  // 王道モデルコースでの乗車シミュレーション
  const modelRouteRides = [
    {
      section: "① 鎌倉駅 → 長谷駅",
      regularFare: 200,
      cumulative: 200,
      desc: "高徳院（鎌倉大仏）＆長谷寺を参拝",
    },
    {
      section: "② 長谷駅 → 七里ヶ浜駅",
      regularFare: 260,
      cumulative: 460,
      desc: "七里ヶ浜海岸散策＆絶景オーシャンビューカフェでランチ",
    },
    {
      section: "③ 七里ヶ浜駅 → 鎌倉高校前駅",
      regularFare: 200,
      cumulative: 660,
      desc: "世界的に有名な踏切と相模湾のパノラマ記念撮影",
    },
    {
      section: "④ 鎌倉高校前駅 → 江ノ島駅",
      regularFare: 260,
      cumulative: 920,
      desc: "ここで【合計920円】となり800円の元取れ達成！（＋120円得）",
      breakEven: true,
    },
    {
      section: "⑤ 江ノ島駅 → 藤沢駅",
      regularFare: 260,
      cumulative: 1180,
      desc: "江ノ島観光・サンセット鑑賞後にJR/小田急乗り換えの藤沢へ",
    },
  ];

  // タイムスケジュール
  const scheduleTimeline = [
    {
      time: "09:30",
      spot: "鎌倉駅（西口）で「のりおりくん」購入・スタート",
      tag: "鎌倉駅",
      detail:
        "JR鎌倉駅西口改札すぐの江ノ電券売機、またはスマホ「EMot」でデジタル版のりおりくん（800円）をGET。小町通りとは反対のレトロな改札から緑の江ノ電に乗車！",
    },
    {
      time: "09:50",
      spot: "長谷駅：鎌倉大仏（高徳院）＆長谷寺",
      tag: "長谷エリア",
      detail:
        "長谷寺の「見晴台」から由比ヶ浜の青い海を一望。大仏前の通りには老舗の力餅家など名物スイーツ店が並び、食べ歩きも楽しめます。",
    },
    {
      time: "12:00",
      spot: "七里ヶ浜駅：パシフィックドライブイン / billsで海カフェランチ",
      tag: "七里ヶ浜",
      detail:
        "駅から海岸線へ抜けると目の前に広がる水平線。心地よい潮風を感じながら、名物ガーリックシュリンプやパンケーキをテラス席で堪能。",
    },
    {
      time: "14:15",
      spot: "鎌倉高校前駅：遮るもののない海沿いプラットホーム＆踏切",
      tag: "絶景フォト",
      detail:
        "ホームに降り立った瞬間、目の前いっぱいに広がる湘南の海。有名な坂道踏切の風情と、海沿いをガタゴト走る江ノ電のレトロな車窓を目に焼き付けます。",
    },
    {
      time: "15:45",
      spot: "江ノ島駅：すばな通り散策 〜 江の島弁天橋 〜 シーキャンドル",
      tag: "江ノ島",
      detail:
        "すばな通りでタコせんべいを頬張りながら弁天橋を渡り島内へ。のりおりくん提示で「江の島シーキャンドル（展望灯台）」などの入場割引特典も利用可能！富士山と夕日のコントラストに息を呑みます。",
    },
    {
      time: "18:30",
      spot: "藤沢駅到着：海鮮居酒屋ディナー＆ホテルチェックイン",
      tag: "藤沢ゴール",
      detail:
        "江ノ電に揺られて終点・藤沢駅へ。藤沢駅前は海鮮居酒屋や駅チカホテルが充実しており、宿泊や東京方面への帰路に抜群の利便性を誇ります。",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50/40 text-slate-850 antialiased selection:bg-amber-500 selection:text-white font-sans">
      {/* ヒーローセクション（Amber/Orangeテーマ：湘南の黄金の夕日、江ノ電の温かなレトロ車体） */}
      <header className="relative bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-700/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.22),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            江ノ電 乗り放題パス徹底攻略ガイド 2026
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【江ノ電1日乗車券のりおりくん完全攻略】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
              800円で元を取るモデルコース
            </span>
            <br />
            ＆海沿い途中下車の旅
          </h1>
          <p className="text-amber-100/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            湘南・古都鎌倉を走る憧れのローカル鉄道「江ノ島電鉄」。大人1日800円の「のりおりくん」は、何回乗れば元が取れるのか？
            結論、たった3〜4回の途中下車で誰でも黒字化可能！鎌倉・長谷・七里ヶ浜・鎌倉高校前・江ノ島をムダなく巡る最強タイムテーブルと、湘南・鎌倉の厳選ホテルをご紹介します。
          </p>

          {/* 重要指標グリッド */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-amber-300 text-xs font-semibold">のりおりくん料金（大人）</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">800円</div>
              <div className="text-[11px] text-amber-200/70 mt-0.5">小児400円</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-yellow-300 text-xs font-semibold">元が取れる乗車回数</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">3〜4回</div>
              <div className="text-[11px] text-yellow-200/70 mt-0.5">短距離でも途中下車で即達成</div>
            </div>
            <div className="bg-amber-500/30 border border-amber-400/50 rounded-2xl p-4 backdrop-blur-sm shadow-inner">
              <div className="text-amber-200 text-xs font-semibold">モデルコース通常運賃</div>
              <div className="text-2xl sm:text-3xl font-black text-amber-300 mt-1">1,180円</div>
              <div className="text-[11px] text-amber-200 mt-0.5">差額＋380円＆施設割引</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-orange-300 text-xs font-semibold">提携施設優待特典</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">約60施設</div>
              <div className="text-[11px] text-orange-200/70 mt-0.5">シーキャンドル・飲食店割引</div>
            </div>
          </div>
        </div>
      </header>

      {/* 楽天トラベル公式バナー */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <SpecialCouponBanner />
      </div>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* セクション1：運賃体系と「何回で元が取れる？」シミュレーション */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-amber-200/60">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-lg">
              ¥
            </span>
            <div>
              <span className="text-amber-800 font-bold text-xs uppercase tracking-wider">Fare Calculation</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                何回乗れば元が取れる？江ノ電の運賃体系と損益分岐点
              </h2>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            江ノ電の普通運賃は距離制（200円〜310円）です。
            鎌倉〜藤沢の全区間（10km）を一気に乗り通すと310円ですが、途中でカフェや名所へ立ち寄るたびに初乗り運賃（200円〜）が加算されます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 運賃テーブル */}
            <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-200/60">
              <h3 className="font-black text-amber-900 text-sm mb-3">江ノ電 普通片道運賃（大人きっぷ）</h3>
              <div className="space-y-2.5">
                {fareTiers.map((tier, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm bg-white p-2.5 rounded-xl border border-amber-100">
                    <span className="font-bold text-slate-700">{tier.distance}</span>
                    <span className="font-black text-amber-800 text-base">{tier.fare}</span>
                    <span className="text-slate-400 text-[11px]">{tier.example}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 元取れ計算の解説 */}
            <div className="bg-white rounded-2xl p-5 border border-amber-200 flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">損益分岐点の真実</span>
                <h4 className="text-base font-black text-slate-900 mt-2">
                  長距離なら「3回」、短距離でも「4回」で元が取れる！
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  最も長い区間（310円）なら「鎌倉→江ノ島」「江ノ島→藤沢」「途中下車1回」の計3回（880円）で即座に元が取れます。
                  近距離（200円・260円）でも4回乗れば860円〜となり、のりおりくん（800円）の勝ちが確定します。
                </p>
              </div>
              <div className="mt-4 p-3 rounded-xl bg-amber-100/70 text-amber-900 font-bold text-xs">
                💡 切符を都度買う券売機の行列（特に鎌倉駅・長谷駅）を完全にスルーできる「時間節約価値」も絶大！
              </div>
            </div>
          </div>

          {/* モデルコースの運賃積算テーブル */}
          <div className="border border-amber-200 rounded-2xl overflow-hidden">
            <div className="bg-amber-900 text-white p-3.5 text-xs sm:text-sm font-black flex justify-between items-center">
              <span>王道モデルルートでの運賃積算シミュレーション</span>
              <span className="text-amber-200 font-normal">のりおりくん定価：800円</span>
            </div>
            <div className="divide-y divide-amber-100 text-xs sm:text-sm">
              {modelRouteRides.map((ride, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    ride.breakEven ? "bg-amber-100/60 font-black border-l-4 border-amber-600" : "bg-white"
                  }`}
                >
                  <div className="flex-1">
                    <span className="font-bold text-slate-900">{ride.section}</span>
                    <p className="text-slate-500 text-xs mt-0.5">{ride.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <span className="text-slate-600 font-medium">通常: {ride.regularFare}円</span>
                    <span className="font-black text-amber-900 text-sm">
                      累計: {ride.cumulative}円
                      {ride.breakEven && <span className="ml-1 text-xs text-amber-700">★元取れ突破！</span>}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-950 text-white p-4 flex flex-col sm:flex-row justify-between items-center gap-2">
              <span className="font-bold text-sm">個別購入時の合計金額：1,180円</span>
              <span className="text-amber-300 font-black text-base sm:text-lg">
                のりおりくん利用で【380円（約32%）OFF】＋ 施設優待
              </span>
            </div>
          </div>
        </section>

        {/* セクション2：1日途中下車 黄金タイムテーブル */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-amber-200/60">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-black text-lg">
              🚃
            </span>
            <div>
              <span className="text-amber-800 font-bold text-xs uppercase tracking-wider">Golden Timetable</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                朝から夕暮れまで満喫！途中下車黄金タイムテーブル
              </h2>
            </div>
          </div>

          <div className="space-y-6 border-l-2 border-amber-300 ml-4 pl-6 relative">
            {scheduleTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-500 border-4 border-white shadow-sm" />
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="text-xs font-black text-amber-800">{item.time}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-black text-slate-900 text-base sm:text-lg mb-1">{item.spot}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3：のりおりくん提示で使える！最強特典スポット */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-amber-800/40">
          <div className="max-w-2xl mb-8">
            <span className="text-amber-400 font-black text-xs uppercase tracking-wider">Perks & Discounts</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              乗車券以上の価値！「のりおりくん」提示の割引特典3選
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              のりおりくんは電車乗り放題だけでなく、江の島エリアや鎌倉の約60の飲食店・観光施設で提示優待が受けられます。これらを併用すれば元取れ額はさらに跳ね上がります！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-800/90 border border-stone-700 rounded-2xl p-5">
              <div className="text-amber-400 font-black text-xs uppercase mb-1">江ノ島名所</div>
              <h3 className="text-base font-black text-white mb-2">江の島シーキャンドル（展望灯台）</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                のりおりくん提示で大人入場料が割引に。サンセットタイムの相模湾と富士山のシルエットは必見。
              </p>
              <span className="inline-block px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-lg text-xs font-bold">
                入場料 10%OFF
              </span>
            </div>

            <div className="bg-stone-800/90 border border-stone-700 rounded-2xl p-5">
              <div className="text-amber-400 font-black text-xs uppercase mb-1">海沿い温泉</div>
              <h3 className="text-base font-black text-white mb-2">江の島アイランドスパ（えのすぱ）</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                海を望むインフィニティ温泉プールと天然温泉。歩き疲れた身体を癒やすスパ利用料が優待対象。
              </p>
              <span className="inline-block px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-lg text-xs font-bold">
                ワンデイスパ優待割引
              </span>
            </div>

            <div className="bg-stone-800/90 border border-stone-700 rounded-2xl p-5">
              <div className="text-amber-400 font-black text-xs uppercase mb-1">グルメ＆土産</div>
              <h3 className="text-base font-black text-white mb-2">長谷・江ノ島のカフェ＆和菓子店</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                提携の和カフェや海沿いレストランでのお会計5〜10%引き、またはソフトドリンクサービスなど特典満載。
              </p>
              <span className="inline-block px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-lg text-xs font-bold">
                飲食代割引 / ドリンク進呈
              </span>
            </div>
          </div>
        </section>

        {/* セクション4：鎌倉・由比ヶ浜・藤沢の厳選ホテル特集 */}
        <section className="bg-amber-950/20 rounded-3xl p-6 sm:p-10 border border-amber-300">
          <div className="max-w-2xl mb-8">
            <span className="text-amber-800 font-black text-xs uppercase tracking-wider">Stay & Relax</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              江ノ電旅の拠点に最適！鎌倉・由比ヶ浜・藤沢ホテル
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              朝の静寂に包まれた鎌倉を散策するなら「鎌倉駅・由比ヶ浜至近」、コスパ重視＆夜遅くまで楽しむなら「藤沢駅直結ホテル」がベストチョイス。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group border border-amber-200/80"
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
                      湘南・鎌倉のホテル
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute bottom-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <span className="text-amber-400">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-slate-300 text-[10px]">({hotel.reviewCount}件)</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-amber-800 mb-1">
                      {hotel.nearestStation ? `最寄駅: ${hotel.nearestStation}` : hotel.address1 || "鎌倉・藤沢・湘南エリア"}
                    </div>
                    <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-amber-800 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {hotel.hotelSpecial || "江ノ電・湘南散策の拠点に最適な立地。観光とグルメを満喫する快適な宿泊体験。"}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block">最安参考料金（1名）</span>
                      <span className="text-amber-800 font-black text-lg">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      空室・プラン確認
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション5：江ノ電攻略の注意点・Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-amber-200/60">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
            江ノ電「のりおりくん」旅を120%楽しむプロの知恵袋
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
              <h3 className="font-bold text-slate-900 mb-1">① 週末の混雑ピークは11:00〜16:00</h3>
              <p className="text-slate-600 leading-relaxed">
                休日の鎌倉駅と長谷駅は改札規制がかかるほどの混雑になることも。朝9時台に鎌倉をスタートするか、藤沢駅発で逆回りに乗ると比較的空いています。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
              <h3 className="font-bold text-slate-900 mb-1">② スマホアプリ「EMot」なら窓口行列ゼロ</h3>
              <p className="text-slate-600 leading-relaxed">
                紙の切符だけでなくデジタル版のりおりくんも同額（800円）。スマホ画面を見せるだけで乗降できるため、休日の券売機長蛇の列を回避できます。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
              <h3 className="font-bold text-slate-900 mb-1">③ 鎌倉高校前踏切の写真マナー</h3>
              <p className="text-slate-600 leading-relaxed">
                車道への立ち入りや線路内侵入は厳禁です。安全な歩道から、夕暮れの逆光を活かしたエモーショナルな構図を狙いましょう。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
              <h3 className="font-bold text-slate-900 mb-1">④ 海側座席を狙うなら鎌倉発は「進行方向左側」</h3>
              <p className="text-slate-600 leading-relaxed">
                鎌倉から藤沢方面へ向かう場合、進行方向の左側が相模湾のオーシャンビュー側になります。七里ヶ浜〜稲村ヶ崎間の絶景シートを確保しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連記事ナビゲーション */}
        <section className="bg-gradient-to-r from-amber-950 to-stone-900 text-white rounded-3xl p-6 sm:p-8">
          <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">Related Travel Guides</div>
          <h3 className="text-xl font-black mb-4">湘南・鎌倉エリアの旅をさらに深掘り！関連ガイド</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/kamakura-vs-enoshima-day-trip"
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10 block group"
            >
              <div className="text-xs text-amber-300 font-bold mb-1">旅程比較</div>
              <div className="font-bold text-sm text-white group-hover:text-amber-200 transition">
                【鎌倉 vs 江ノ島】日帰り観光ならどっちがおすすめ？見どころ徹底比較 →
              </div>
            </Link>
            <Link
              href="/kamakura-rainy-day-cafe-museum-guide"
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10 block group"
            >
              <div className="text-xs text-amber-300 font-bold mb-1">雨の日・カフェ</div>
              <div className="font-bold text-sm text-white group-hover:text-amber-200 transition">
                【鎌倉 雨の日カフェ＆美術館ガイド】しっとり古都散策と隠れ家ステイ →
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
