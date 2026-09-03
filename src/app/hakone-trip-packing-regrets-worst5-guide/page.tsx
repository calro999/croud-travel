import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【箱根旅行で後悔したことワースト5】大涌谷ロープウェイ強風運休＆夕方カフェ難民！渋滞回避の知恵袋 ｜ 日本全国・旅宿クラウド",
  description:
    "箱根観光でありがちなトラブルを完全回避！強風によるロープウェイ運休時の代行バス、17時で全滅する飲食店トラップ、土日夕方の国道1号線大渋滞、小田急ロマンスカー満席対策と強羅温泉宿。",
  keywords: [
    "箱根旅行 後悔",
    "箱根観光 ワースト",
    "大涌谷 ロープウェイ 運休 代替ルート",
    "箱根 夜ご飯 どこもない 難民",
    "箱根 渋滞 回避 ルート",
    "箱根フリーパス 混雑",
    "強羅温泉 にごり湯 宿",
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
      return data["hakone-trip-packing-regrets-worst5-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for hakone-trip-packing-regrets-worst5-guide", e);
  }
  return [];
}

export default function HakoneTripPackingRegretsPage() {
  const hotels = loadHotels();

  // 箱根旅行 後悔ワースト5
  const regrets = [
    {
      rank: 1,
      title: "大涌谷ロープウェイが強風・火山ガスで突然運休！山中で立ち往生",
      catchphrase: "箱根の山頂は別世界。下界が晴天でも風速15m超や火山性ガス濃度上昇で即停止",
      reality:
        "箱根観光のハイライト「早雲山〜大涌谷〜桃源台」を結ぶ箱根ロープウェイは、山特有の突風や濃霧、火山ガスの基準値超過で年間数十日運休します。「ロープウェイで芦ノ湖へ抜けて海賊船に乗る」黄金ルートを前提に組んでいた旅行者が早雲山駅で足止めされ、代替バスを待つ長蛇の列で2時間以上浪費する悲劇が日常茶飯事です。",
      mistake: "運行状況を朝チェックせず、運休時の「迂回バスルート」を把握していない。",
      solution: [
        "旅行当日の朝、箱根ナビ（Hakone Navi）のリアルタイム運行情報を必ずブックマーク確認する",
        "早雲山で運休になった場合、直ちに箱根登山バス（強羅駅経由または直行代行バス）へ切り替える",
        "強風予報の日は「強羅・小涌谷の屋内美術館（ポーラ美術館、彫刻の森、岡田美術館）」をメインに再編する",
        "天候が不安定な日は、反時計回り（元箱根・芦ノ湖側から先に攻める）で大涌谷を午後一番に通過する",
      ],
      mustItem: "箱根ナビ運行情報ブックマーク ＋ 防寒ウインドブレーカー（山の突風対策）",
    },
    {
      rank: 2,
      title: "17時で全店クローズ！夕食難民になりコンビニ飯で済ませる悲劇",
      catchphrase: "箱根の夜は驚くほど早い。箱根湯本駅前も強羅も、17時〜18時にはシャッター街に",
      reality:
        "東京近郊の感覚で「夕方温泉に入って、19時頃に駅前で名物の蕎麦や海鮮丼を食べよう」と考えて素泊まりプランにすると痛い目を見ます。箱根湯本商店街も強羅駅前も、大半の飲食店やカフェは17:00〜17:30にラストオーダー。夜間営業している数軒の居酒屋やレストランは予約客で満席、山間の坂道で夜間真っ暗な中、コンビニを求めて彷徨う観光客が後を絶ちません。",
      mistake: "朝食のみ・素泊まりで宿を予約し、夕食の店を予約せずに現地入りする。",
      solution: [
        "箱根の旅館・ホテルは原則『1泊2食付き（夕朝食付き）』プランを強く推奨",
        "素泊まりにする場合は、出発前に夜間営業店（湯本・宮ノ下の数少ない名店）を必ず事前電話予約する",
        "箱根湯本駅構内または小田原駅で名物駅弁（鯛めし・鯵の押寿司）を夕方に確保しておく",
        "宿の周辺に夜営業のレストランがあるか（徒歩圏内に街灯はあるか）をGoogleマップで事前チェック",
      ],
      mustItem: "夕食事前予約 ＋ 非常用スナック・飲料 ＋ モバイルライト",
    },
    {
      rank: 3,
      title: "日曜夕方の国道1号線大渋滞！湯本駅まで普段20分が2時間動かない",
      catchphrase: "箱根の逃げ道は1本道。芦ノ湖・仙石原から湯本へ下る帰宅ラッシュは地獄絵図",
      reality:
        "日曜日や祝日の15時以降、芦ノ湖や強羅から箱根湯本・小田原方面へ向かう国道1号線・国道138号線は凄まじいボトルネックに陥ります。一本道のため迂回路がなく、普段なら20分の距離が2時間以上全く動かなくなることも。路線バスも渋滞に巻き込まれるため、新幹線の時間やロマンスカーの指定席に間に合わず切符を紙屑にする人が続出します。",
      mistake: "日曜の16時〜18時に車や路線バスで強羅・元箱根から湯本へ下ろうとする。",
      solution: [
        "休日の下山は『14時台までに箱根湯本駅を通過する』か、逆に『19時過ぎまで温泉施設で過ごす』二者択一",
        "車の場合は「箱根新道」または「ターンパイク」「椿ライン」等への早めの迂回判断を行う",
        "公共交通派は渋滞知らずの『箱根登山鉄道（強羅〜湯本）』を軸にルートを組む",
        "ロマンスカーは余裕を持って1本遅めの便を確保し、湯本駅周辺の足湯カフェで時間調整する",
      ],
      mustItem: "渋滞情報アプリ（JARTIC/Googleマップ） ＋ 登山鉄道の時刻表",
    },
    {
      rank: 4,
      title: "小田急ロマンスカーの満席地獄＆立ちっぱなし普通列車での帰宅",
      catchphrase: "日曜夕方のロマンスカー展望席はおろか、一般指定席も前日・当日は全便SOLDOUT",
      reality:
        "箱根湯本から新宿まで優雅にロマンスカーでビールを飲んで帰るつもりが、夕方の全便満席。仕方なく小田急線の一般急行列車に乗り、登山と温泉で疲労困憊の身体を引きずりながら小田原から新宿まで1時間半以上立ちっぱなしに。楽しい旅行の思い出が最後に肉体労働へと塗り替えられてしまいます。",
      mistake: "行きの切符だけ買って、帰りのロマンスカーを現地で買おうと後回しにする。",
      solution: [
        "旅行の1ヶ月前（乗車日1ヶ月前の午前10:00予約開始）に帰りのロマンスカー指定席を最優先確保する",
        "満席の場合は『小田原駅発の東海道新幹線（こだま/ひかり）』に切り替えると東京駅まで35分で座って帰れる",
        "小田急「e-Romancecar」サイトで当日直前のキャンセル戻り席を粘り強くリロードする",
      ],
      mustItem: "小田急e-Romancecarブックマーク ＋ EX予約アプリ（小田原〜新幹線バックアップ）",
    },
    {
      rank: 5,
      title: "坂道と石畳でヒール・サンダル崩壊＆急激な山冷えに凍える",
      catchphrase: "箱根はオシャレな温泉街ではなく「険しい山」。標高差800mの気温差と急勾配",
      reality:
        "箱根湯本駅前は平坦ですが、強羅、宮ノ下、芦ノ湖は急坂や不揃いの石畳だらけ。歩きやすさを軽視したヒールや滑りやすいサンダルで行くと、箱根神社の長い石段や彫刻の森の散策で足首を痛め、靴擦れで歩けなくなります。また、標高約700mの元箱根・仙石原は湯本より5℃〜7℃も気温が低く、夕方や日陰では夏でも肌寒く、春秋はダウンが必要なほど冷え込みます。",
      mistake: "都内と同じ春服・夏服で出かけ、歩きにくい靴を選んでしまう。",
      solution: [
        "クッション性の高いスニーカーまたは歩きやすいフラットシューズを着用する",
        "箱根湯本と芦ノ湖の標高差（約600m以上）を考慮し、着脱しやすいストールや薄手アウターを持参",
        "雨天時の石畳は非常に滑りやすいため、グリップ力のある靴底が必須",
      ],
      mustItem: "歩きやすい撥水スニーカー ＋ 調整用レイヤード羽織り（カーディガン/マウンテンパーカー）",
    },
  ];

  // 箱根旅行 必携パッキングチェックリスト
  const packingSections = [
    {
      title: "交通・移動サバイバル必需品",
      color: "amber",
      items: [
        { name: "箱根フリーパス（デジタルまたは紙チケット）", desc: "登山電車・ケーブルカー・ロープウェイ・バスがこれ1枚で乗り放題" },
        { name: "ロマンスカー特急券（往復事前予約済み）", desc: "夕方の帰路便は必ず予約。直前キャンセル狙い用e-Romancecar登録" },
        { name: "モバイルバッテリー（10,000mAh以上）", desc: "山間部での電波探索＆カメラ起動でスマホの電池消耗が激早" },
        { name: "歩きやすいスニーカー（滑り止め底）", desc: "箱根神社の石段、強羅の急勾配、大涌谷の遊歩道を快適に歩く" },
      ],
    },
    {
      title: "温泉・街歩き・寒暖差対策",
      color: "orange",
      items: [
        { name: "着脱しやすい防寒アウター / ストール", desc: "標高差700mの寒暖差に対応。芦ノ湖や大涌谷の突風を遮断" },
        { name: "コンパクト折りたたみ傘（強風耐性）", desc: "箱根の山沿いは天気が急変しやすい。風で折れにくいグラスファイバー製" },
        { name: "日帰り温泉用フェイスタオル", desc: "足湯巡りや立ち寄り温泉でレンタル代を節約＆即拭ける" },
        { name: "小銭入れ（100円・500円玉多め）", desc: "無人ロッカーや寺社の拝観、路面店の買い食いに必須" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50/40 text-slate-800 antialiased selection:bg-orange-500 selection:text-white font-sans">
      {/* ヒーローセクション（Amber/Orangeテーマ：箱根の温泉情緒と紅葉・夕暮れの暖色パレット） */}
      <header className="relative bg-gradient-to-br from-amber-900 via-orange-950 to-stone-900 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.2),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            箱根旅行・失敗回避レスキュー便覧
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【箱根旅行で後悔したことワースト5】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-200 to-amber-400">
              大涌谷ロープウェイ強風運休＆夕方カフェ難民！
            </span>
            <br />
            渋滞回避の知恵袋＆パッキング術
          </h1>
          <p className="text-amber-100/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            年間2,000万人が訪れる国内屈指の温泉地・箱根。しかし、事前の下調べなしで訪れると「突然のロープウェイ運休で立ち往生」「17時で店が全滅しコンビニ夕食」「日曜夕方の国道1号線で3時間動かない」という悪夢に見舞われます。
            旅のプロが教えるリアルな失敗回避策と、絶対に損しない強羅・湯本の温泉宿を徹底解説します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-amber-300 text-xs font-semibold">湯本〜芦ノ湖 標高差</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">約620m</div>
              <div className="text-[11px] text-amber-200/70 mt-0.5">気温差は約4〜6℃</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-amber-300 text-xs font-semibold">飲食店の閉店ラッシュ</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">17:00前後</div>
              <div className="text-[11px] text-amber-200/70 mt-0.5">夜間営業店は激減</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-amber-300 text-xs font-semibold">日曜夕方 渋滞ピーク</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">15:30〜18:30</div>
              <div className="text-[11px] text-amber-200/70 mt-0.5">通常20分が2時間越え</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-amber-300 text-xs font-semibold">ロマンスカー満席率</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">土日夕方 ほぼ100%</div>
              <div className="text-[11px] text-amber-200/70 mt-0.5">事前予約必須</div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク導線バー */}
        <nav aria-label="箱根 関連特集ガイド" className="bg-orange-100/60 border border-orange-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-orange-950 font-bold text-sm">
            <span className="text-xl">♨️</span>
            <span>合わせて読みたい箱根旅行の人気特集：</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/hakone-travel-budget-guide"
              className="inline-flex items-center text-xs font-bold text-orange-900 bg-white border border-orange-300 hover:bg-orange-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              箱根旅行のリアル予算シミュレーション →
            </Link>
            <Link
              href="/hakone-rainy-day-indoor-model-course"
              className="inline-flex items-center text-xs font-bold text-orange-900 bg-white border border-orange-300 hover:bg-orange-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              雨の日の箱根屋内モデルコース →
            </Link>
            <Link
              href="/hakone-autumn-leaves-lightup-hotspring-guide"
              className="inline-flex items-center text-xs font-bold text-orange-900 bg-white border border-orange-300 hover:bg-orange-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              紅葉露天風呂＆ライトアップガイド →
            </Link>
          </div>
        </nav>

        {/* セクション1: 後悔ワースト5 */}
        <section aria-labelledby="regrets-heading">
          <div className="border-l-4 border-amber-600 pl-4 mb-8">
            <h2 id="regrets-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              箱根旅行で初心者がハマる落とし穴【後悔ワースト5】
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              事前の対策とちょっとした時間配分の工夫で、これらすべてのトラブルは100%回避できます。
            </p>
          </div>

          <div className="space-y-8">
            {regrets.map((regret) => (
              <article
                key={regret.rank}
                className="bg-white rounded-3xl border border-amber-200/80 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-amber-300 text-amber-950 font-black text-sm px-3 py-1 rounded-full uppercase tracking-wider">
                      Regret #{regret.rank}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      {regret.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl">
                    <p className="text-amber-950 font-black text-sm sm:text-base leading-snug">
                      ⚠️ {regret.catchphrase}
                    </p>
                    <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed">
                      {regret.reality}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-4">
                      <h4 className="text-xs font-black text-rose-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <span>❌</span> やりがちな失敗パターン
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {regret.mistake}
                      </p>
                    </div>
                    <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4">
                      <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <span>💡</span> スマートな解決知恵袋
                      </h4>
                      <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside leading-relaxed">
                        {regret.solution.map((sol, idx) => (
                          <li key={idx}>{sol}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-800 font-black text-xs px-2.5 py-1 bg-orange-200/80 rounded-lg">
                        後悔防止の神アイテム
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {regret.mustItem}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* セクション2: 持ち物パッキング */}
        <section aria-labelledby="packing-heading" className="bg-white rounded-3xl border border-amber-200/80 p-6 sm:p-10 shadow-sm">
          <div className="border-l-4 border-amber-600 pl-4 mb-8">
            <div className="text-xs font-bold uppercase text-amber-700 tracking-wider">Smart Packing</div>
            <h2 id="packing-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              箱根旅行を120%快適にするパッキングチェックリスト
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              山間部ならではの寒暖差や移動の多さに合わせた厳選持ち物リスト。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {packingSections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-amber-50/40 border border-amber-200/60 rounded-2xl p-5"
              >
                <h3 className="font-black text-base text-amber-950 pb-3 mb-4 border-b border-amber-200/80 flex items-center gap-2">
                  <span className="text-lg">🎒</span>
                  {sec.title}
                </h3>
                <ul className="space-y-4">
                  {sec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <input
                        type="checkbox"
                        id={`hakone-item-${idx}-${itemIdx}`}
                        className="mt-0.5 h-4 w-4 rounded border-amber-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
                      />
                      <label htmlFor={`hakone-item-${idx}-${itemIdx}`} className="cursor-pointer">
                        <span className="font-bold text-slate-900">{item.name}</span>
                        <span className="block text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3: 箱根のおすすめ温泉宿（湯本＆強羅） */}
        <section aria-labelledby="hotels-heading">
          <div className="border-l-4 border-amber-600 pl-4 mb-4">
            <div className="text-xs font-bold uppercase text-amber-700 tracking-wider">Recommended Onsen Ryokan</div>
            <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              夕食難民知らず＆濁り湯三昧！箱根湯本・強羅のおすすめ温泉旅館
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              夕朝食付きプランでゆったり贅沢な会席を堪能。駅近アクセス＆自家源泉自慢の名宿です。
            </p>
          </div>

          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
            <span className="font-bold">♨️ 宿泊選びの重要ポイント：</span>
            箱根観光をストレスフリーにするなら「夕食付きプラン」の確保が鉄則。箱根湯本駅周辺ならロマンスカー下車後すぐに荷物を預けられ、強羅温泉なら大涌谷から引き湯された本格的な乳白色のにごり湯で極上のリラクゼーションが味わえます。
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-bold">
                      箱根の名湯旅館
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
                    <div className="text-[11px] font-bold text-amber-700 mb-1">
                      {hotel.nearestStation || hotel.address1 || "箱根湯本・強羅エリア"}
                    </div>
                    <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-amber-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {hotel.hotelSpecial || "箱根の豊かな自然に包まれた良質な名湯と、旬の味覚を詰め込んだ和会席が魅力の人気宿。"}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block">最安参考料金（1名）</span>
                      <span className="text-amber-700 font-black text-lg">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      楽天トラベルで空室を見る
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 混雑回避のモデルルート */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-black text-xs uppercase tracking-wider">Smart Travel Strategy</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1 mb-4">
              混雑・渋滞に一切巻き込まれない「反時計回り（逆ルート）」モデル行程
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex gap-4 border-b border-stone-800 pb-3">
                <span className="font-black text-amber-400 shrink-0 w-24">1日目 09:30</span>
                <div>
                  <strong className="text-white">箱根湯本駅到着 → 直通バスで芦ノ湖（元箱根）へ直行</strong>
                  <p className="text-slate-400 text-xs mt-0.5">大半の客が乗る登山鉄道を避け、空いている午前中に箱根神社参拝＆海賊船へ。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-stone-800 pb-3">
                <span className="font-black text-amber-400 shrink-0 w-24">1日目 12:00</span>
                <div>
                  <strong className="text-white">海賊船で桃源台へ → ロープウェイで大涌谷へ</strong>
                  <p className="text-slate-400 text-xs mt-0.5">逆ルートなのでロープウェイも比較的スムーズ。名物の黒たまごでランチタイム。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-stone-800 pb-3">
                <span className="font-black text-amber-400 shrink-0 w-24">1日目 15:00</span>
                <div>
                  <strong className="text-white">ケーブルカーで強羅へ下り、温泉旅館に早めのチェックイン</strong>
                  <p className="text-slate-400 text-xs mt-0.5">夕方のカフェ難民を回避し、旅館のにごり湯露天風呂と豪華な懐石料理を堪能。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-stone-800 pb-3">
                <span className="font-black text-amber-400 shrink-0 w-24">2日目 10:00</span>
                <div>
                  <strong className="text-white">強羅公園・ポーラ美術館をゆっくり散策</strong>
                  <p className="text-slate-400 text-xs mt-0.5">雨や風が出ても安心な屋内美術館。ゆったりとしたアート空間を満喫。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-black text-amber-400 shrink-0 w-24">2日目 14:00</span>
                <div>
                  <strong className="text-white">登山電車で箱根湯本へ下山 → 予約済みロマンスカーで帰路へ</strong>
                  <p className="text-slate-400 text-xs mt-0.5">夕方の大渋滞が始まる前に湯本駅を脱出。車内でお土産の温泉まんじゅうを満喫。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問 */}
        <section className="bg-white rounded-3xl border border-amber-200 p-6 sm:p-8">
          <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span>❓</span> 箱根旅行のよくある質問
          </h3>
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 mb-1">Q. 車と電車（フリーパス）、どちらで行くのがおすすめですか？</h4>
              <p className="text-slate-600 leading-relaxed">
                A. 土日祝日や紅葉シーズンは、絶対に電車・フリーパス利用を推奨します。車は国道1号線の渋滞で数時間身動きが取れなくなる上、観光地の駐車場待ちでさらに時間を失います。
              </p>
            </div>
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 mb-1">Q. 箱根キャリーサービスとは何ですか？使った方がいいですか？</h4>
              <p className="text-slate-600 leading-relaxed">
                A. 箱根湯本駅でスーツケースを預けると、当日の夕方までに宿泊先旅館へ運んでくれる有料サービスです（フリーパス提示で割引あり）。箱根の乗り物は混雑し階段も多いため、大きな荷物がある場合は利用を強くおすすめします。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
