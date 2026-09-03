import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【富士登山で後悔したことワースト5】高山病・下山時の爪割れ・ヘッドライト忘れ！登頂成功の持ち物チェックリスト ｜ 日本全国・旅宿クラウド",
  description:
    "初心者が最も後悔する富士登山の落とし穴！登りより辛い下山時のつま先激痛、山小屋の寒暖差、小銭（トイレチップ用100円玉）切れ、ヘッドライトの電池切れ、五合目前泊・後泊におすすめの温泉宿まとめ。",
  keywords: [
    "富士登山 後悔",
    "富士山 持ち物 初心者",
    "富士登山 下山 爪割れ",
    "富士山 高山病 対策",
    "富士山 山小屋 持ち物",
    "富士登山 前泊 温泉",
    "吉田ルート 持ち物 リスト",
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
      return data["fuji-climbing-packing-regrets-worst5-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for fuji-climbing-packing-regrets-worst5-guide", e);
  }
  return [];
}

export default function FujiClimbingPackingRegretsPage() {
  const hotels = loadHotels();

  // 後悔ワースト5の詳細データ
  const regrets = [
    {
      rank: 1,
      title: "下山時のつま先激痛＆爪の内出血（登りより下山が地獄）",
      catchphrase: "「登れたから大丈夫」は命取り。下山道3〜4時間の連続下り坂で親指の爪が死ぬ",
      reality:
        "富士登山で最もリタイア・歩行困難を招くのが下山時の足トラブル。吉田ルートの下山道は砂礫（ザリザリの火山灰と小石）の単調な急坂が数時間続きます。普通の運動靴やサイズぴったりの登山靴だと、1歩踏み出すたびに靴の先端につま先が衝突。下山完了時には靴下が血で染まり、親指の爪が真っ黒に変色して後日剥がれ落ちる人が毎年続出します。",
      mistake: "スニーカーで登る、または登山靴の紐を登りの緩い状態のまま下り始める。",
      solution: [
        "普段の靴より0.5〜1.0cm大きめのトレッキングシューズ＋厚手ウール登山靴下を着用する",
        "下山開始前に『かかとをトントンして密着させ、甲〜足首を固めに締め直す』",
        "トレッキングポール（ストック2本）を使って下半身への衝撃を両腕に分散させる",
        "ショートスパッツ（ゲイター）を装着し、砂利が靴内に入って靴擦れを起こすのを完全遮断する",
      ],
      mustItem: "厚手ウールソックス ＋ ゲイター（砂よけスパッツ） ＋ ダブルストック",
    },
    {
      rank: 2,
      title: "小銭（100円玉）切れで山頂直前のトイレに行けないパニック",
      catchphrase: "富士山のバイオトイレは完全有料制（1回200〜300円）。両替機はありません！",
      reality:
        "富士山上のトイレは維持管理のため1回200円〜300円のチップ制（山頂は300円）。売店や山小屋に「両替お断り」の看板が掲げられていることも多く、1,000円札や10,000円札、スマホ決済（PayPayなど）は通信不良や電源事情で一切使えない場面が頻発します。尿意を極限まで我慢しながら標高3,000m超を登る苦痛は地獄そのものです。",
      mistake: "キャッシュレス社会に慣れて財布に千円札2枚とクレカしか入れていない。",
      solution: [
        "100円玉をジップロックやコインケースに最低20〜30枚（2,000円〜3,000円分）用意する",
        "水分補給をケチると高山病が悪化するため、トイレ代を惜しまずすぐ入れる小銭をサコッシュ常備",
        "万が一の自販機（水1本500円）購入用にも100円玉と千円札数枚は不可欠",
      ],
      mustItem: "100円硬貨25枚（コインケース収納） ＋ 水に流せるポケットティッシュ",
    },
    {
      rank: 3,
      title: "スマホ懐中電灯で代用して電池切れ＆両手が塞がり岩場で転落危機",
      catchphrase: "御来光アタックの午前1時は真っ暗闇。スマホライト登攀はマナー違反＆重大事故の元",
      reality:
        "山小屋から山頂を目指す深夜1時〜3時は、街灯など一切ない完全な漆黒の世界。岩場をよじ登る八合目〜本八合目では両手を開けて三点支持を保つ必要があります。スマホのライトを片手に持って登るとバランスを崩した際に滑落する危険がある上、氷点下近くの低温でスマホのバッテリーが急激に0%に落ち、遭難・撮影不能になります。",
      mistake: "「スマホのライトがあるからヘッドランプは買わなくても大丈夫」と過信。",
      solution: [
        "200ルーメン以上の明るさを持つ登山用ヘッドライトを必ず準備する",
        "低温下でも作動する新品アルカリ乾電池、または予備バッテリーを胸ポケット（体温で保温）に携帯",
        "頭部にしっかり固定できるバンド付きを選び、ヘルメットやニット帽の上から装着練習しておく",
      ],
      mustItem: "高輝度ヘッドライト（予備乾電池必携） ＋ 10,000mAh以上の耐寒モバイルバッテリー",
    },
    {
      rank: 4,
      title: "五合目到着直後に出発して七合目で高山病リタイア（弾丸登山の罠）",
      catchphrase: "気圧は地上の約60%。酸素が薄い身体に気付かず歩き出すと頭痛・嘔吐で即断念",
      reality:
        "五合目（標高約2,300m）はすでに高山病の発症ライン。バスや車で一気に上がってきた身体は気圧変化に追いついていません。到着してテンションが上がり、すぐに登山を開始した初心者の半数以上が七合目〜八合目（3,000m付近）で激しい頭痛・吐き気・目まいに襲われます。一度重度の高山病になると下山するしか治療法がありません。",
      mistake: "五合目で休憩せず到着10分で登り始める。前夜の睡眠不足や深酒のまま直行する。",
      solution: [
        "五合目で必ず『最低1〜2時間』滞在し、深呼吸を繰り返して気圧に身体を慣らす（高度順応）",
        "歩行ペースは『会話ができるおしゃべりペース』を死守。大股ではなく歩幅20cmの小股で登る",
        "水分は喉が渇く前に1時間あたり200〜300mlをこまめに補給（血流を保ち酸素運搬を促進）",
        "可能であれば前日に富士山麓（河口湖・富士吉田）の温泉宿で快眠してから挑む",
      ],
      mustItem: "携帯酸素スプレー ＋ アセトアミノフェン系鎮痛剤 ＋ 電解質パウダー入りボトル",
    },
    {
      rank: 5,
      title: "山小屋の猛烈な寒暖差と騒音で一睡もできず疲労困憊登頂",
      catchphrase: "山小屋はホテルではない。真夏の山頂付近は気温0℃〜5℃、隣の人の寝息が真横に",
      reality:
        "八合目の山小屋は布団やシュラフが密集した雑魚寝が基本。真夏でも夜間の外気温はシングル（0〜5℃）、強風が吹けば体感温度は氷点下になります。一方で小屋内は人いきれで蒸し暑かったり、乾燥で喉を痛めたりと寒暖差が過酷。さらにヘッドライトの明かりやイビキ、深夜0時からの出発物音で一睡もできず、疲労困憊で御来光どころではなくなります。",
      mistake: "薄手の夏用パジャマしか持たず、耳栓や防寒着なしで山小屋泊に挑む。",
      solution: [
        "ダウンジャケットまたはフリース＋防風アウターを小屋内でも手元に置いておく",
        "高性能耳栓（フォームタイプ）とアイマスクを持参し、騒音と明かりを物理遮断する",
        "濡れマスクを着用して山小屋特有の激しい乾燥から喉を守る",
      ],
      mustItem: "遮光アイマスク ＋ 密着遮音耳栓 ＋ 軽量インナーダウン ＋ 保湿濡れマスク",
    },
  ];

  // 登頂成功のための完全持ち物チェックリスト（カテゴリ別）
  const packingCategories = [
    {
      category: "絶対不可欠！三種の神器＆セーフティ装備",
      badge: "必須度 100%",
      items: [
        { name: "登山靴（ハイカット/ミッドカット）", note: "足首を保護し砂利浸入を防ぐ。要履き慣らし" },
        { name: "レインウェア（上下セパレート/ゴアテックス推奨）", note: "山の天気急変対策。防風防寒着としても最重要" },
        { name: "ザック（25〜35L）＋ザックカバー", note: "背負いやすい腰ベルト付き。雨天時の完全防水カバー必須" },
        { name: "ヘッドライト＋予備アルカリ電池", note: "夜間行動・御来光アタックに不可欠。手持ち懐中電灯はNG" },
        { name: "登山用ヘルメット", note: "落石事故防止。各合目のレンタルまたは持参を強く推奨" },
      ],
    },
    {
      category: "下山地獄と身体を守るケア装備",
      badge: "痛恨回避 99%",
      items: [
        { name: "ショートスパッツ（ゲイター）", note: "下山時の砂利・火山灰の靴内侵入を100%防止" },
        { name: "トレッキングポール（2本1組）", note: "下山時の膝・爪への衝撃を30%以上軽減する必須兵器" },
        { name: "厚手登山専用ウールソックス（予備含む2足）", note: "クッション性と吸湿性で靴擦れ・爪割れを防止" },
        { name: "トレッキンググローブ（防寒・防護手袋）", note: "溶岩石の尖った岩場での怪我防止と深夜山頂の防寒" },
        { name: "膝サポーター / テーピングテープ", note: "下山後半の膝痛・腸脛靭帯炎の激痛を予防" },
      ],
    },
    {
      category: "お金・衛生・山小屋サバイバルグッズ",
      badge: "実用性 Max",
      items: [
        { name: "100円硬貨20〜30枚（約2,500円分）", note: "各合目バイオトイレチップ代。両替不可のため必携" },
        { name: "水に流せるティッシュ＆除菌ウェットティッシュ", note: "山小屋・トイレには水道がなく手洗い不可" },
        { name: "高性能耳栓＆アイマスク", note: "混雑する山小屋雑魚寝での睡眠確保に絶大な効果" },
        { name: "大判ゴミ袋（45L×3枚）", note: "ゴミ持ち帰り用＆雨天時のザック内部完全防水パッキング" },
        { name: "ジップロック（大中小）", note: "スマホ・財布・行動食の小分け防滴保管" },
      ],
    },
    {
      category: "防寒・高山病・エネルギー補給",
      badge: "快適性 UP",
      items: [
        { name: "軽量ウルトラライトダウン / フリース", note: "山頂の日の出待ちは真冬並み（体感氷点下）。夏でも必携" },
        { name: "ニット帽 / ネックウォーマー", note: "頭部と首元からの熱放散を防ぎ、強風下の低体温症を回避" },
        { name: "行動食（塩分タブレット・高カロリー羊羹・ナッツ）", note: "小分けで歩きながら食べられる消化の良いもの" },
        { name: "水・スポーツドリンク（1.5〜2.0L）", note: "一度に大量に持たず山小屋での買い足しとバランスを取る" },
        { name: "日焼け止め＆偏光サングラス", note: "雲の上は紫外線が平地の数倍。目と肌の火傷を防止" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      {/* ヒーローセクション（Emeraldテーマ：雄大な富士の山肌とエメラルドのハイコントラスト） */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            富士登山サバイバル・失敗回避白書
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【富士登山で後悔したことワースト5】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
              高山病・下山時の爪割れ・ヘッドライト忘れ！
            </span>
            <br />
            登頂成功の持ち物チェックリスト
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            毎年何千人もの登山初心者が「こんなはずじゃなかった…」と涙を呑む富士山。
            登頂の喜びを打ち砕く下山時の爪の激痛、深夜の岩場でスマホライトが消える恐怖、小銭切れによるトイレ我慢——。
            リアルな失敗談から導き出された「絶対に後悔しない対策」と「登頂成功パッキングリスト」を完全公開します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-400 text-xs font-semibold">山頂気温（夏）</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">0℃〜5℃</div>
              <div className="text-[11px] text-slate-400 mt-0.5">真冬並みの防寒必須</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-400 text-xs font-semibold">リタイア最多合目</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">本七〜八合目</div>
              <div className="text-[11px] text-slate-400 mt-0.5">標高3,000mの高山病</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-400 text-xs font-semibold">下山所要時間</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">約3〜4時間</div>
              <div className="text-[11px] text-slate-400 mt-0.5">砂礫の連続急坂</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-400 text-xs font-semibold">トイレ利用料</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">200〜300円</div>
              <div className="text-[11px] text-slate-400 mt-0.5">100円玉小銭必須</div>
            </div>
          </div>
        </div>
      </header>

      {/* 目次 & 特集バナー */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク導線バー */}
        <nav aria-label="富士山・富士五湖 関連ガイド" className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
            <span className="text-xl">🚌</span>
            <span>富士登山の前泊・アクセス攻略もあわせてチェック：</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/fuji-five-lakes-car-free-bus-guide"
              className="inline-flex items-center text-xs font-bold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              富士五湖車なし周遊バスガイド →
            </Link>
            <Link
              href="/tokyo-fujikawaguchiko-highway-bus-guide"
              className="inline-flex items-center text-xs font-bold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              東京〜河口湖高速バス完全攻略 →
            </Link>
          </div>
        </nav>

        {/* セクション1: 後悔ワースト5 */}
        <section aria-labelledby="worst5-heading">
          <div className="border-l-4 border-emerald-600 pl-4 mb-8">
            <h2 id="worst5-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              富士登山で最も泣いた初心者のリアル体験談【後悔ワースト5】
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              登頂率を大きく分けるのは体力ではなく「事前の危機管理と装備の有無」です。
            </p>
          </div>

          <div className="space-y-8">
            {regrets.map((regret) => (
              <article
                key={regret.rank}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-emerald-400 text-emerald-950 font-black text-sm px-3 py-1 rounded-full uppercase tracking-wider">
                      Worst {regret.rank}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      {regret.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-2xl">
                    <p className="text-rose-900 font-black text-sm sm:text-base leading-snug">
                      ⚠️ {regret.catchphrase}
                    </p>
                    <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed">
                      {regret.reality}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                      <h4 className="text-xs font-black text-rose-600 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <span>❌</span> 陥りがちな典型ミス
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {regret.mistake}
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4">
                      <h4 className="text-xs font-black text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <span>🛡️</span> 絶対回避のプロのアドバイス
                      </h4>
                      <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside leading-relaxed">
                        {regret.solution.map((sol, idx) => (
                          <li key={idx}>{sol}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-emerald-900/5 border border-emerald-600/20 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-700 font-black text-xs px-2.5 py-1 bg-emerald-100 rounded-lg">
                        必携レスキューギア
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-emerald-950">
                        {regret.mustItem}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* セクション2: 持ち物チェックリスト */}
        <section aria-labelledby="checklist-heading" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="border-l-4 border-emerald-600 pl-4 mb-8">
            <div className="text-xs font-bold uppercase text-emerald-600 tracking-wider">Packing Checklist</div>
            <h2 id="checklist-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              【完全保存版】富士登山サバイバル持ち物チェックリスト
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              スマホの画面を見ながら荷造りができる、カテゴリー別の必需品リストです。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {packingCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-emerald-300 transition"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <h3 className="font-black text-sm sm:text-base text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    {cat.category}
                  </h3>
                  <span className="text-[11px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {cat.badge}
                  </span>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <input
                        type="checkbox"
                        id={`fuji-item-${idx}-${itemIdx}`}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <label htmlFor={`fuji-item-${idx}-${itemIdx}`} className="cursor-pointer">
                        <span className="font-bold text-slate-900">{item.name}</span>
                        <span className="block text-xs text-slate-500 mt-0.5">{item.note}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 持ち物パッキングの掟 */}
          <div className="mt-8 bg-emerald-950 text-white rounded-2xl p-5 sm:p-6">
            <h4 className="text-emerald-300 font-bold text-sm sm:text-base mb-2 flex items-center gap-2">
              <span>💡</span> 富士山パッキングの鉄則：ザックの中は「全ビニール袋防水」
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              富士山の雨風は横殴りで、ザックカバーだけでは隙間から雨水が侵入して着替えや寝具が全滅します。
              大きな45Lゴミ袋をザックの内側に広げ、その中に荷物をパッキングする『インナーバッグ防水』を徹底してください。濡れた防寒着で山頂に留まるのは低体温症の直結ルートです。
            </p>
          </div>
        </section>

        {/* セクション3: 前泊・後泊におすすめの温泉宿 */}
        <section aria-labelledby="hotels-heading">
          <div className="border-l-4 border-emerald-600 pl-4 mb-4">
            <div className="text-xs font-bold uppercase text-emerald-600 tracking-wider">Base Camp Hotels</div>
            <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              登頂成功と下山後の疲労回復を約束する！五合目拠点のおすすめ温泉宿
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              前泊で高度順応と快眠を確保し、下山後は砂埃を温泉で流して極上の筋肉ケアを。
            </p>
          </div>

          <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs sm:text-sm text-emerald-950 leading-relaxed">
            <span className="font-bold">🏔️ 前泊・後泊のメリット：</span>
            富士スバルライン五合目行きのシャトルバスが発着する富士山駅・河口湖駅周辺に宿泊することで、早朝出発での高度順応がスムーズになり、下山後の極度の筋肉痛も広々とした露天風呂で速やかにリフレッシュできます。
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
                      富士山麓の温泉宿
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
                    <div className="text-[11px] font-bold text-emerald-700 mb-1">
                      {hotel.nearestStation || hotel.address1 || "富士山・河口湖エリア"}
                    </div>
                    <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {hotel.hotelSpecial || "富士登山の前泊・後泊に最適な立地と癒しの温泉設備を完備した人気宿。"}
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
                      楽天トラベルで空室を見る
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 富士登山タイムスケジュールシミュレーション */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-emerald-400 font-black text-xs uppercase tracking-wider">Model Schedule</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1 mb-4">
              初心者が成功する「無理のない1泊2日」富士登山モデル行程
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex gap-4 border-b border-slate-800 pb-3">
                <span className="font-black text-emerald-400 shrink-0 w-20">1日目 11:00</span>
                <div>
                  <strong className="text-white">五合目到着・高度順応（2時間）</strong>
                  <p className="text-slate-400 text-xs mt-0.5">昼食を取りながら深呼吸。体を標高2,300mに馴染ませる。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-slate-800 pb-3">
                <span className="font-black text-emerald-400 shrink-0 w-20">1日目 13:00</span>
                <div>
                  <strong className="text-white">登山開始（ゆっくり歩行）</strong>
                  <p className="text-slate-400 text-xs mt-0.5">会話ができるスローペース。1時間ごとに10分休憩＆水分補給。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-slate-800 pb-3">
                <span className="font-black text-emerald-400 shrink-0 w-20">1日目 17:30</span>
                <div>
                  <strong className="text-white">八合目山小屋到着・夕食＆仮眠</strong>
                  <p className="text-slate-400 text-xs mt-0.5">濡れマスクと耳栓を装着して早期就寝。防寒対策を万全に。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-slate-800 pb-3">
                <span className="font-black text-emerald-400 shrink-0 w-20">2日目 01:30</span>
                <div>
                  <strong className="text-white">深夜アタック開始（ヘッドライト点灯）</strong>
                  <p className="text-slate-400 text-xs mt-0.5">両手をあけて岩場を慎重に登る。山頂付近の渋滞も想定して行動。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-slate-800 pb-3">
                <span className="font-black text-emerald-400 shrink-0 w-20">2日目 04:30</span>
                <div>
                  <strong className="text-white">山頂にて御来光拝観・お鉢巡り</strong>
                  <p className="text-slate-400 text-xs mt-0.5">山頂売店で温かい甘酒やお味噌汁。風を避けて低体温症を防ぐ。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-black text-emerald-400 shrink-0 w-20">2日目 06:30</span>
                <div>
                  <strong className="text-white">下山開始（靴紐締め直し＆ゲイター装着）</strong>
                  <p className="text-slate-400 text-xs mt-0.5">かかとを合わせて靴紐を締め、ストックを使って爪の痛みを回避。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 終端FAQ */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span>❓</span> 富士登山に関するよくある質問
          </h3>
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 mb-1">Q. スニーカーで登ることは本当に無理ですか？</h4>
              <p className="text-slate-600 leading-relaxed">
                A. 登りも危険ですが、特に下山時の砂礫道で靴の中に石が入りまくり、靴底が薄いため足裏と爪が激痛で歩けなくなります。必ず足首を支える登山靴を着用してください。
              </p>
            </div>
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 mb-1">Q. 水はどれくらい持っていけば良いですか？</h4>
              <p className="text-slate-600 leading-relaxed">
                A. スタート時に持参するのは1.5L程度が目安です。重すぎると体力を消耗するため、山小屋ごとに1本（500円前後）ずつ買い足すのが最も賢い軽量化テクニックです。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Q. 山小屋の予約が取れなかった場合、日帰り（弾丸登山）は可能ですか？</h4>
              <p className="text-slate-600 leading-relaxed">
                A. 現在、山梨県側（吉田ルート）では弾丸登山の規制が行われており、山小屋宿泊予約のない夜間通行は原則できません。体力的・安全面からも必ず山小屋か麓の宿を予約して登山計画を立ててください。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
