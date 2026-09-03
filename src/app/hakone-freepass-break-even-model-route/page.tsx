import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【箱根フリーパスは本当に元が取れる？】徹底検証！通常運賃との差額シミュレーション＆1泊2日黄金ルート ｜ 日本全国・旅宿クラウド",
  description:
    "箱根フリーパス（新宿発6,100円）でいくら得する？登山電車・ケーブルカー・ロープウェイ・海賊船・登山バスを通常料金で個別購入した場合（合計約8,200円）との差額比較、元が取れる王道モデルコースと強羅・湯本温泉宿。",
  keywords: [
    "箱根フリーパス 元が取れるか",
    "箱根フリーパス 料金 比較",
    "箱根旅行 運賃シミュレーション",
    "箱根 モデルコース 1泊2日",
    "箱根登山電車 ロープウェイ 海賊船 料金",
    "箱根湯本 強羅 温泉 宿泊",
    "小田急 フリーパス お得",
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
      return data["hakone-freepass-break-even-model-route"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hakone-freepass-break-even-model-route", e);
  }
  return [];
}

export default function HakoneFreepassBreakEvenRoutePage() {
  const hotels = loadHotels();

  // 運賃シミュレーションデータ
  const fareComparisonItems = [
    {
      vehicle: "小田急線（往復）",
      section: "新宿駅 ⇔ 小田原駅（快速急行 / 急行）",
      regularFare: 1820,
      note: "片道910円 × 往復",
    },
    {
      vehicle: "箱根登山電車",
      section: "小田原駅 ⇔ 箱根湯本駅 ⇔ 強羅駅",
      regularFare: 680,
      note: "小田原〜湯本 370円 ＋ 湯本〜強羅 360円（直通換算680円）",
    },
    {
      vehicle: "箱根登山ケーブルカー",
      section: "強羅駅 ⇔ 早雲山駅",
      regularFare: 430,
      note: "急勾配214mを一気に登る",
    },
    {
      vehicle: "箱根ロープウェイ",
      section: "早雲山駅 ⇔ 大涌谷駅 ⇔ 桃源台駅",
      regularFare: 1550,
      note: "絶景空中散歩＆大涌谷谷底越え片道",
    },
    {
      vehicle: "箱根海賊船",
      section: "桃源台港 ⇔ 元箱根港 / 箱根町港",
      regularFare: 1200,
      note: "芦ノ湖を縦断する大人気クルーズ片道運賃",
    },
    {
      vehicle: "箱根登山バス（復路）",
      section: "元箱根港 ⇔ 箱根湯本駅",
      regularFare: 1080,
      note: "旧街道または新道経由（急行バスも利用可能）",
    },
    {
      vehicle: "観光施設割引特典（平均）",
      section: "彫刻の森美術館・大涌谷黒たまご館・茶屋等",
      regularFare: 500,
      note: "彫刻の森（200円引）＋その他協賛店優待",
    },
  ];

  const totalRegularFare = fareComparisonItems.reduce((acc, cur) => acc + cur.regularFare, 0);
  const passPriceShinjuku = 6100; // 2日間有効・新宿発
  const savingAmount = totalRegularFare - passPriceShinjuku;

  // 1泊2日 王道ゴールデンルート
  const day1Steps = [
    {
      time: "08:00",
      action: "新宿駅を出発（小田急線）",
      cost: "小田急線 910円区間",
      badge: "小田急線",
      detail:
        "新宿駅から小田急小田原線・快速急行またはロマンスカー（※特急券別途1,200円）に乗車。車窓を眺めながら丹沢・小田原方面へ。",
    },
    {
      time: "09:45",
      action: "箱根湯本駅に到着 ＆ 登山電車乗り換え",
      cost: "箱根登山電車 360円区間",
      badge: "登山電車",
      detail:
        "箱根の玄関口。ここで荷物をキャリーサービス（フリーパス提示で100円割引）に預けて身軽に。スイッチバックを繰り返しながら標高541mの強羅へ登攀。",
    },
    {
      time: "11:00",
      action: "強羅公園 ＆ 彫刻の森美術館を散策",
      cost: "入園料 650円→フリーパス提示で無料！",
      badge: "優待割引",
      detail:
        "強羅公園はフリーパス提示でなんと入園無料（通常650円）。噴水池や熱帯植物館、名物の豆腐カツ煮ランチを堪能したあと、彫刻の森美術館へ。",
    },
    {
      time: "14:00",
      action: "箱根登山ケーブルカーで早雲山へ",
      cost: "ケーブルカー 430円区間",
      badge: "ケーブルカー",
      detail:
        "強羅駅から早雲山駅まで勾配を力強く登るケーブルカー。早雲山駅の展望テラス「cu-mo箱根」では無料の足湯に浸かりながら強羅の谷を見渡せます。",
    },
    {
      time: "15:30",
      action: "強羅・湯本の厳選温泉宿へチェックイン",
      cost: "温泉・名物懐石で癒やしの時間",
      badge: "極上ステイ",
      detail:
        "にごり湯や自家源泉の露天風呂を満喫。翌朝の芦ノ湖・大涌谷アタックに備えて早めのディナーと湯治でエネルギーチャージ。",
    },
  ];

  const day2Steps = [
    {
      time: "09:00",
      action: "早雲山駅から箱根ロープウェイ乗車",
      cost: "ロープウェイ 1,550円区間",
      badge: "ロープウェイ",
      detail:
        "朝一番の澄んだ空気のなか空中散歩。大涌谷の谷底を越える瞬間の迫力は圧巻。富士山の冠雪パノラマを背景に記念撮影。",
    },
    {
      time: "09:40",
      action: "大涌谷散策 ＆ 名物「黒たまご」賞味",
      cost: "散策無料（黒たまご5個500円）",
      badge: "大涌谷名所",
      detail:
        "もくもくと立ち込める白煙と硫黄の香り。1個食べれば7年寿命が延びると伝わる大涌谷名物「黒たまご」で旅の運気アップ。",
    },
    {
      time: "11:00",
      action: "桃源台港から「箱根海賊船」に乗船",
      cost: "海賊船 1,200円区間",
      badge: "箱根海賊船",
      detail:
        "桃源台港から芦ノ湖クルーズへ。優雅なクイーン芦ノ湖などのデッキから、湖畔に浮かぶ箱根神社の平和の鳥居と湖面の青を望む40分間の絶景旅。",
    },
    {
      time: "12:30",
      action: "元箱根港下船・箱根神社参拝＆湖畔ランチ",
      cost: "境内無料（芦ノ湖畔カフェ）",
      badge: "箱根神社",
      detail:
        "89段の杉並木の石段を上り、開運・心願成就で名高い箱根神社と九頭龍神社新宮へ参拝。元箱根港周辺のベーカリー＆テーブルで絶景パンランチ。",
    },
    {
      time: "15:00",
      action: "箱根登山バスで箱根湯本駅へ戻る",
      cost: "登山バス 1,080円区間",
      badge: "登山バス",
      detail:
        "元箱根港から急行バスに乗車。フリーパスがあればSuica残高を気にせず乗車可能。箱根湯本駅前でお土産の温泉饅頭や干物を買い込み新宿へ帰路。",
    },
  ];

  // 乗り倒しで元を取るための鉄則3箇条
  const goldenRules = [
    {
      num: "01",
      title: "「1周ぐるり（周遊）」すれば確実に元が取れる設計",
      desc: "箱根湯本〜強羅〜早雲山〜大涌谷〜桃源台〜元箱根〜湯本という「ゴールデンコース」を1周回るだけで通常運賃は4,940円。往復の小田急線1,820円を足すと6,760円となり、この時点で新宿発6,100円の元取れが100%確定します。",
    },
    {
      num: "02",
      title: "小田原発（5,000円）なら新幹線・JR利用派も完全対応",
      desc: "東海道新幹線やJR東海道線・上野東京ラインで小田原入りする人は「小田原発（2日間5,000円）」を購入すればOK。箱根域内周遊（約4,940円）に少しの途中下車や強羅公園（650円無料）を加えるだけで即座にプラスに転じます。",
    },
    {
      num: "03",
      title: "混雑時は「逆回り（時計回り）」でロープウェイ行列を回避",
      desc: "大半の観光客は「湯本→強羅→大涌谷→芦ノ湖」と反時計回りに進むため、午前11時〜13時の早雲山ロープウェイは最大40〜60分待ちに。逆に「湯本→元箱根（バス）→海賊船→桃源台→大涌谷」と時計回りに回ると、全工程ほぼ待ち時間ゼロで快適周遊が可能です。",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-950/5 text-slate-800 antialiased selection:bg-emerald-600 selection:text-white font-sans">
      {/* ヒーローセクション（Emeraldテーマ：箱根の深緑、芦ノ湖の湖水、豊かな自然の美学） */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            関東・首都圏 交通パス収支シミュレーション 2026
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【箱根フリーパスは本当に元が取れる？】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
              徹底検証！通常運賃との差額シミュレーション
            </span>
            <br />
            ＆1泊2日黄金ルート解説
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            小田急電鉄が発行する定番きっぷ「箱根フリーパス」。新宿発2日間6,100円の元を取るにはどこまで乗ればいいのか？登山電車・ケーブルカー・ロープウェイ・海賊船・登山バスを通常料金で個別購入した場合（合計約8,200円）との差額を1円単位で徹底比較。迷わず得する王道周遊スケジュールと厳選温泉宿を網羅しました。
          </p>

          {/* 結論ファースト・ハイライトサマリー */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-emerald-300 text-xs font-semibold">フリーパス（新宿発2日）</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">6,100円</div>
              <div className="text-[11px] text-emerald-200/70 mt-0.5">乗り降り完全自由</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-teal-300 text-xs font-semibold">通常運賃（王道1周）</div>
              <div className="text-2xl sm:text-3xl font-black text-slate-200 line-through mt-1">7,260円</div>
              <div className="text-[11px] text-teal-200/70 mt-0.5">施設割引含まず</div>
            </div>
            <div className="bg-emerald-500/30 border border-emerald-400/50 rounded-2xl p-4 backdrop-blur-sm shadow-inner">
              <div className="text-emerald-200 text-xs font-semibold">王道ルートでの純利益</div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-300 mt-1">＋1,160円</div>
              <div className="text-[11px] text-emerald-200 mt-0.5">施設優待込みで約2,000円得</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-cyan-300 text-xs font-semibold">元取れ乗車回数</div>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">王道1周</div>
              <div className="text-[11px] text-cyan-200/70 mt-0.5">乗り物5種類で即回収</div>
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
        {/* セクション1：通常運賃 vs 箱根フリーパス 徹底数字検証 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-emerald-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-lg">
              ¥
            </span>
            <div>
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider">Exact Fare Math</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                通常運賃 vs フリーパス：いくら得するのか1円単位で計算
              </h2>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            箱根の乗り物は日本屈指の急勾配山岳交通網のため、単体の普通運賃がやや高めに設定されています。
            実際にゴールデンコース（小田急線〜登山鉄道〜ケーブルカー〜ロープウェイ〜海賊船〜登山バス）を1回ずつ利用した場合の通常料金を算定しました。
          </p>

          {/* 運賃対比テーブル */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead>
                <tr className="bg-emerald-950 text-white text-xs uppercase">
                  <th className="py-3 px-4 rounded-tl-xl">乗り物・交通機関</th>
                  <th className="py-3 px-4">利用区間</th>
                  <th className="py-3 px-4 text-right">通常運賃（大人）</th>
                  <th className="py-3 px-4 rounded-tr-xl">ポイント・備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 text-xs sm:text-sm">
                {fareComparisonItems.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-emerald-50/40"}>
                    <td className="py-3 px-4 font-bold text-emerald-900">{item.vehicle}</td>
                    <td className="py-3 px-4 text-slate-600">{item.section}</td>
                    <td className="py-3 px-4 text-right font-semibold text-slate-900">
                      ¥{item.regularFare.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-xs">{item.note}</td>
                  </tr>
                ))}
                <tr className="bg-slate-100 font-black text-slate-900">
                  <td colSpan={2} className="py-3 px-4 text-right">
                    個別購入時の合計金額（施設割引込）:
                  </td>
                  <td className="py-3 px-4 text-right text-base text-rose-600">
                    ¥{totalRegularFare.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-600">券売機で都度並ぶ手間が発生</td>
                </tr>
                <tr className="bg-emerald-600 text-white font-black text-base">
                  <td colSpan={2} className="py-3.5 px-4 text-right rounded-bl-xl">
                    箱根フリーパス（新宿発・2日間）:
                  </td>
                  <td className="py-3.5 px-4 text-right text-lg text-emerald-100">
                    ¥{passPriceShinjuku.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-emerald-100 font-normal rounded-br-xl">
                    乗り降り自由 ＋ 約70施設優待つき
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-emerald-900 font-black text-base sm:text-lg">
                差額結果：フリーパス利用で【{savingAmount.toLocaleString()}円】の大幅黒字！
              </div>
              <p className="text-emerald-700 text-xs mt-1">
                さらに現地で強羅温泉宿や芦ノ湖畔へ寄り道したり、バスを1回乗り足すだけでお得額は3,000円超に拡大します。
              </p>
            </div>
            <div className="shrink-0 bg-white px-4 py-2.5 rounded-xl border border-emerald-300 shadow-sm text-center">
              <span className="text-[10px] text-slate-500 block font-bold">元取れ判定</span>
              <span className="text-emerald-700 font-black text-lg">大勝利（即元取れ）</span>
            </div>
          </div>
        </section>

        {/* セクション2：元を取るための鉄則3箇条 */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider">Crucial Strategy</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              損しないための「箱根フリーパス乗りこなし鉄則」
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              単純に購入するだけでは勿体ない！最大限のコストパフォーマンスを引き出す3大セオリー。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goldenRules.map((rule, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="text-5xl font-black text-emerald-100 absolute right-4 top-2 select-none pointer-events-none">
                  {rule.num}
                </div>
                <div className="relative z-10">
                  <div className="text-xs font-black text-emerald-600 uppercase mb-2">RULE {rule.num}</div>
                  <h3 className="text-base font-black text-slate-900 mb-3 leading-snug">{rule.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{rule.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-50 text-[11px] font-bold text-emerald-800">
                  ✔ 旅程設計の必須ポイント
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3：1泊2日 元取り黄金タイムテーブル */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-emerald-100">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg">
              ⏱
            </span>
            <div>
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider">Model Itinerary</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                1泊2日 箱根周遊ゴールデンモデルルート（時系列タイムテーブル）
              </h2>
            </div>
          </div>

          {/* DAY 1 */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-900 text-white text-xs font-black mb-6">
              DAY 1：新宿〜箱根湯本〜強羅・彫刻の森＆名湯ステイ
            </div>
            <div className="space-y-6 border-l-2 border-emerald-200 ml-4 pl-6 relative">
              {day1Steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-600 border-4 border-white shadow-sm" />
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-xs font-black text-emerald-700">{step.time}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      {step.badge}
                    </span>
                    <span className="text-[11px] text-slate-400">（通常運賃相当: {step.cost}）</span>
                  </div>
                  <h4 className="font-black text-slate-900 text-base mb-1">{step.action}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DAY 2 */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-900 text-white text-xs font-black mb-6">
              DAY 2：早雲山〜大涌谷〜芦ノ湖海賊船〜箱根神社〜帰路
            </div>
            <div className="space-y-6 border-l-2 border-teal-200 ml-4 pl-6 relative">
              {day2Steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-xs font-black text-teal-700">{step.time}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold">
                      {step.badge}
                    </span>
                    <span className="text-[11px] text-slate-400">（通常運賃相当: {step.cost}）</span>
                  </div>
                  <h4 className="font-black text-slate-900 text-base mb-1">{step.action}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* セクション4：元取り周遊の拠点！強羅・箱根湯本の温泉宿特集 */}
        <section className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800/60">
          <div className="max-w-2xl mb-8">
            <span className="text-emerald-400 font-black text-xs uppercase tracking-wider">
              Strategic Base Hotels
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              フリーパス周遊が劇的に快適になる「強羅・湯本温泉宿」
            </h2>
            <p className="text-emerald-200/80 text-xs sm:text-sm mt-2 leading-relaxed">
              フリーパスの乗り換え拠点である「箱根湯本駅」または「強羅駅」至近に宿を取ることで、1日目・2日目の移動ロスをゼロに抑えられます。楽天トラベルの割引クーポン対象宿を厳選。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-800">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col group border border-emerald-100"
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
                      箱根の名湯の宿
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute bottom-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
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
                    <div className="text-[11px] font-bold text-emerald-700 mb-1">
                      {hotel.nearestStation ? `最寄駅: ${hotel.nearestStation}` : hotel.address1 || "箱根・強羅・湯本"}
                    </div>
                    <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {hotel.hotelSpecial || "箱根の大自然と自家源泉を満喫。フリーパス利用旅行の拠点に最適な名湯宿。"}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block">最安参考料金（1名）</span>
                      <span className="text-emerald-700 font-black text-lg">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      空室・プラン確認
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション5：よくある疑問・FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-emerald-100">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
            箱根フリーパスのよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="text-emerald-700 font-black">Q.</span>
                ロマンスカーに乗る場合、追加料金は必要ですか？
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                フリーパスには乗車券部分（普通運賃）が含まれているため、別途「特急券（新宿〜箱根湯本間 片道1,200円）」を購入するだけでロマンスカーに乗車できます。小田急アプリや券売機で特急券のみ追加購入してください。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="text-emerald-700 font-black">Q.</span>
                日帰り旅行でもフリーパスはお得ですか？
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                箱根フリーパスは2日間用（6,100円）が最短ですが、日帰りでも「新宿〜強羅〜大涌谷〜芦ノ湖海賊船〜湯本」とぐるり周遊すれば通常運賃が約6,760円になるため、日帰りであってもフリーパスを買った方がお得になります。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="text-emerald-700 font-black">Q.</span>
                デジタルフリーパスと紙のチケットはどちらが良い？
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                スマートフォンで購入できる「EMotデジタル箱根フリーパス」なら窓口の行列に並ばず即利用できます。ただし充電切れや山間部での操作が不安な方は、小田急線各駅の自動券売機で買える磁気券（紙）も引き続きおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連記事ナビゲーション */}
        <section className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8">
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">Related Travel Guides</div>
          <h3 className="text-xl font-black mb-4">箱根旅行をさらに極める！関連おすすめガイド</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/hakone-travel-budget-guide"
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10 block group"
            >
              <div className="text-xs text-emerald-300 font-bold mb-1">予算シミュレーション</div>
              <div className="font-bold text-sm text-white group-hover:text-emerald-200 transition">
                【箱根旅行の予算相場】日帰り・1泊2日の総額と節約テクニック →
              </div>
            </Link>
            <Link
              href="/hakone-autumn-leaves-lightup-hotspring-guide"
              className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10 block group"
            >
              <div className="text-xs text-emerald-300 font-bold mb-1">季節の絶景＆温泉</div>
              <div className="font-bold text-sm text-white group-hover:text-emerald-200 transition">
                【箱根 紅葉露天風呂＆ライトアップ】登山鉄道・強羅公園巡り宿 →
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
