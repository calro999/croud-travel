import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【初めてのグランピングで後悔したことワースト5】夜の冷え込み・虫対策・煙で服崩壊！持って行くべき神グッズ ｜ 日本全国・旅宿クラウド",
  description:
    "手ぶらOKの謳い文句を信じて後悔したリアル体験談！標高の高い高原グランピングの夜間極寒、焚き火の火の粉で穴あき服、夜間トイレ移動のランタン不足、虫除けスプレー選びと温泉付きグランピングヴィラ。",
  keywords: [
    "グランピング 後悔",
    "初めてのグランピング 持ち物",
    "グランピング 服装 焚き火 穴あき",
    "グランピング 虫対策 スプレー",
    "グランピング 夜 寒い 防寒",
    "温泉付き グランピング",
    "ドームテント 持ち物 リスト",
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
      return data["glamping-first-time-regrets-packing-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for glamping-first-time-regrets-packing-guide", e);
  }
  return [];
}

export default function GlampingFirstTimeRegretsPage() {
  const hotels = loadHotels();

  // グランピング後悔ワースト5
  const regrets = [
    {
      rank: 1,
      title: "「手ぶらでOK」を信じて夜間の極寒に震える（高原・森の寒暖差トラップ）",
      catchphrase: "昼は半袖BBQでも夜は真冬並み。標高差と放射冷却でテント内が底冷え地獄に",
      reality:
        "グランピング施設の多くは高原、森林、湖畔、山間部に位置しています。初夏や秋口でも日が沈むと一気に気温が10℃以上急降下。施設紹介の「エアコン・ファンヒーター完備」を鵜呑みにしていると、夜間にテントの隙間風や床下からの底冷え、BBQデッキでの調理中に身体が芯まで冷え切ってしまい、風邪をひいて楽しめなくなります。",
      mistake: "都内の街歩き感覚の薄着やパジャマしか持参せず、夜の野外行動を甘く見る。",
      solution: [
        "夏場でも必ずフリースや厚手パーカー、秋〜春先は軽量ダウンジャケットを持参する",
        "テント内の床冷えを防ぐため、厚手のルームソックス（もこもこ靴下）や内履きスリッパを携帯",
        "就寝時に首元・足元を温めるブランケットや貼るカイロを荷物に忍ばせておく",
      ],
      mustItem: "コンパクトダウン / ボアフリース ＋ 厚手ルームソックス ＋ 貼るカイロ",
    },
    {
      rank: 2,
      title: "お気に入りの服が焚き火の火の粉で穴あき＆煙の匂いが取れない",
      catchphrase: "ポリエステルやナイロンの化繊ダウン・シェルは火の粉一撃で溶けて穴が開く！",
      reality:
        "グランピングの最大の醍醐味である「夜の焚き火＆マシュマロ焼き」。しかし、お気に入りの高級ダウンやアウトドアブランドのナイロンアウターを着て火に近づいた瞬間、爆ぜた火の粉でジューッと一瞬で穴が開き台無しに。さらに煙の強烈な燻製臭が髪や衣類、インナーにまで染み付き、翌日の車内や帰宅後も臭いが取れずに大後悔します。",
      mistake: "化繊（ナイロン・ポリエステル）の服でおしゃれして焚き火の目の前に座る。",
      solution: [
        "焚き火時は綿100%（コットン）や難燃素材のワークジャケット、または難燃ブランケットを羽織る",
        "服に穴が開いても諦めがつく『焚き火専用の捨て服アウター』を1着用意する",
        "燻製臭のついた衣類を密閉して持ち帰るための大きめの防臭ビニール袋・ランドリーバッグを持参",
      ],
      mustItem: "コットン100%難燃ブランケット / パーカー ＋ 密着ビニール袋",
    },
    {
      rank: 3,
      title: "真夏の蚊・ブヨ（ブト）・蛾の襲来でBBQどころではなくなる",
      catchphrase: "薬局の普通の虫除けスプレーではブヨには無力。刺されると足がパンパンに腫れ上がる",
      reality:
        "大自然に囲まれたグランピング場には、蚊だけでなく渓流や森に生息するブヨ（ブト）やアブが多数生息しています。特にブヨは皮膚を噛み切って吸血するため、翌日以降に猛烈な痒みと激しい腫れが1週間以上続きます。また、夜間にテントの明かりに誘われて巨大な蛾や甲虫が室内に侵入し、虫嫌いの同行者がパニックになるケースが多発します。",
      mistake: "虫除け対策を現地任せにする、ディート濃度の低い子ども用ミストしか持たない。",
      solution: [
        "ブヨ・アブに効く『ディート30%配合』または『イカリジン高濃度』の強力虫除けスプレーを用意",
        "天然ハッカ油スプレーを足元や衣服に吹き付ける（ブヨはハッカの香りを嫌う）",
        "テントの出入り時は必ず網戸を0.5秒で閉めるルールを徹底し、室内の照明を暖色・暗めにする",
        "万が一刺されたとき用のポイズンリムーバーとステロイド系軟膏（抗ヒスタミン剤）を携帯",
      ],
      mustItem: "ディート30%強力虫除け ＋ ハッカ油スプレー ＋ かゆみ止めステロイド軟膏",
    },
    {
      rank: 4,
      title: "夜間のトイレ・シャワー移動で真っ暗闇＆サンダルで泥まみれ",
      catchphrase: "テント内に水回りがないタイプは要注意。真夜中の屋外移動は漆黒＆朝露トラップ",
      reality:
        "ドームテント型グランピングの多くは、トイレや洗面所、シャワールームが別棟の共用棟にあります。夜間は街灯が最小限に抑えられているため足元が完全な真っ暗闇。スマホのライトでは照らせる範囲が狭く、夜露で濡れた芝生やぬかるんだ土で白いスニーカーや薄いサンダルが泥まみれに。夜中に起きた子どもが怖がってトイレに行けなくなる事態も。",
      mistake: "テント内に専用トイレ・バスがあるか確認せず、外履き用つっかけを持たずに宿泊。",
      solution: [
        "予約時に『完全客室専用トイレ・バス付き（ヴィラタイプ等）』を選ぶのが最も安心",
        "屋外移動用に手元を明るく照らす小型LEDランタンやネックライトを持参する",
        "朝露や泥で汚れても水洗いできる防水EVAサンダルやクロックスを1人1足用意する",
      ],
      mustItem: "小型LED吊り下げランタン ＋ 水洗い可能な防水アウトドアサンダル",
    },
    {
      rank: 5,
      title: "BBQの煙と油でスマホ・カメラがギトギト＆ゴミ袋・ウェットティッシュ不足",
      catchphrase: "手ぶらBBQは食材はあるが『かゆいところに手が届く消耗品』が決定的に不足する",
      reality:
        "豪華なBBQグリルで分厚いステーキやアヒージョを焼くのは最高ですが、飛び散る油煙でテーブルやスマホ、眼鏡がベトベトに。施設に備え付けの紙ナプキンは数枚ですぐなくなり、手や油汚れを拭くものがなくなります。さらに、食材のパッケージトレイや缶ビールの空き缶が大量に出て、ゴミ箱が溢れてサイトが散らかり、カラスや猫に荒らされるトラブルも。",
      mistake: "「備品があるからティッシュ類は要らない」と過信して消耗品をケチる。",
      solution: [
        "アルコール除菌ウェットティッシュ（大容量ボトルまたは厚手パック）を食卓に常備",
        "ゴミを分別して口を縛れる45Lゴミ袋を3〜4枚持参し、就寝前にゴミ箱やコンテナ内に密閉保管",
        "BBQ調理用の耐熱厚手グローブ（軍手だと油や熱が浸透して火傷する）を用意する",
      ],
      mustItem: "厚手アルコール除菌ウェットティッシュ ＋ 45L黒ゴミ袋 ＋ 耐熱バーベキュー手袋",
    },
  ];

  // グランピング持参神グッズリスト
  const packingGrid = [
    {
      category: "防寒・快適ウェア",
      items: [
        { name: "難燃コットンアウター / 難燃ブランケット", tip: "火の粉での穴あき防止と夜間の防寒を両立" },
        { name: "インナーダウン / 厚手ボアフリース", tip: "高原の放射冷却による夜間急冷に対応" },
        { name: "もこもこ厚手ソックス / ルームシューズ", tip: "ドームテントの床冷え・底冷えを完全に遮断" },
        { name: "汚れても良いリラックスパンツ", tip: "芝生や土汚れ、BBQの油ハネを気にせず過ごす" },
      ],
    },
    {
      category: "虫除け・衛生・アウトドア神グッズ",
      items: [
        { name: "ディート30%虫除け ＋ ハッカ油スプレー", tip: "厄介なブヨ・アブ・蚊を二重ガードで撃退" },
        { name: "小型LEDポータブルランタン", tip: "夜間のトイレ移動やデッキでの手元照らしに大活躍" },
        { name: "大判アルコール除菌ウェットティッシュ", tip: "BBQの油汚れ、テーブル、手を瞬時にリフレッシュ" },
        { name: "EVA防水サンダル（クロックス等）", tip: "朝露で濡れた芝生やテントの出入りが劇的に楽に" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-teal-50/40 text-slate-800 antialiased selection:bg-teal-600 selection:text-white font-sans">
      {/* ヒーローセクション（Tealテーマ：アウトドア・星空・グランピングの澄んだ空気感） */}
      <header className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-teal-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.25),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            グランピング初心者レスキューバイブル
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【初めてのグランピングで後悔したことワースト5】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-emerald-300">
              夜の冷え込み・虫対策・煙で服崩壊！
            </span>
            <br />
            持って行くべき神グッズ＆客室温泉ヴィラ
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            「手ぶらで豪華なキャンプ」という甘い広告の裏側には、初心者キャンパーを待ち受ける数々の罠が存在します。
            高原の容赦ない夜間極寒、お気に入りの服を焼き焦がす火の粉、ブヨの猛烈な痒み——。
            リアルな後悔をゼロにする必需品チェックリストと、テント内に温泉や専用水回りを備えた極上グランピング宿を紹介します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-teal-300 text-xs font-semibold">高原の昼夜寒暖差</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">10℃〜15℃</div>
              <div className="text-[11px] text-slate-400 mt-0.5">夏でも夜は羽織必須</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-teal-300 text-xs font-semibold">火の粉の危険度</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">化繊は即穴あき</div>
              <div className="text-[11px] text-slate-400 mt-0.5">綿100%または難燃服</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-teal-300 text-xs font-semibold">虫対策の盲点</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">ブヨ・アブ</div>
              <div className="text-[11px] text-slate-400 mt-0.5">ディート30%推奨</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-teal-300 text-xs font-semibold">快適度No.1</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">温泉付きヴィラ</div>
              <div className="text-[11px] text-slate-400 mt-0.5">専用バス・トイレ完備</div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク導線バー */}
        <nav aria-label="アウトドア・近郊旅行ガイド" className="bg-teal-50 border border-teal-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-teal-950 font-bold text-sm">
            <span className="text-xl">🏕️</span>
            <span>グランピングと組み合わせたい人気周遊プラン：</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/fuji-five-lakes-car-free-bus-guide"
              className="inline-flex items-center text-xs font-bold text-teal-900 bg-white border border-teal-300 hover:bg-teal-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              富士五湖周遊バスモデルコース →
            </Link>
            <Link
              href="/hakone-couple-1night2days-anniversary-guide"
              className="inline-flex items-center text-xs font-bold text-teal-900 bg-white border border-teal-300 hover:bg-teal-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              箱根カップル記念日温泉1泊2日 →
            </Link>
          </div>
        </nav>

        {/* セクション1: 後悔ワースト5 */}
        <section aria-labelledby="worst5-heading">
          <div className="border-l-4 border-teal-600 pl-4 mb-8">
            <h2 id="worst5-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              手ぶらOKを信じた初心者が泣いた【後悔ワースト5】
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              自然の中で過ごすアウトドアだからこそ、わずかな準備の違いが天国と地獄を分けます。
            </p>
          </div>

          <div className="space-y-8">
            {regrets.map((regret) => (
              <article
                key={regret.rank}
                className="bg-white rounded-3xl border border-teal-200/80 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="bg-gradient-to-r from-teal-900 to-cyan-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-teal-400 text-teal-950 font-black text-sm px-3 py-1 rounded-full uppercase tracking-wider">
                      Worst {regret.rank}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      {regret.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div className="bg-teal-50/70 border-l-4 border-teal-500 p-4 rounded-r-2xl">
                    <p className="text-teal-950 font-black text-sm sm:text-base leading-snug">
                      ⚠️ {regret.catchphrase}
                    </p>
                    <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed">
                      {regret.reality}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-4">
                      <h4 className="text-xs font-black text-rose-700 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <span>❌</span> 初心者が陥るトラップ
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {regret.mistake}
                      </p>
                    </div>
                    <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4">
                      <h4 className="text-xs font-black text-teal-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <span>🛡️</span> 失敗ゼロの快適テクニック
                      </h4>
                      <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside leading-relaxed">
                        {regret.solution.map((sol, idx) => (
                          <li key={idx}>{sol}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-900 font-black text-xs px-2.5 py-1 bg-cyan-200/80 rounded-lg">
                        救世主ギア
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

        {/* セクション2: グランピング神グッズ持ち物リスト */}
        <section aria-labelledby="gear-heading" className="bg-white rounded-3xl border border-teal-200/80 p-6 sm:p-10 shadow-sm">
          <div className="border-l-4 border-teal-600 pl-4 mb-8">
            <div className="text-xs font-bold uppercase text-teal-700 tracking-wider">Camping Essentials</div>
            <h2 id="gear-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              手ぶらプランにプラスするだけ！持って行くべき神グッズリスト
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              施設のアメニティに頼り切らず、これらをカバンに入れておくだけで快適度が10倍跳ね上がります。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {packingGrid.map((group, idx) => (
              <div
                key={idx}
                className="bg-teal-50/40 border border-teal-200/70 rounded-2xl p-5"
              >
                <h3 className="font-black text-base text-teal-950 pb-3 mb-4 border-b border-teal-200 flex items-center gap-2">
                  <span className="text-lg">✨</span>
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <input
                        type="checkbox"
                        id={`glamp-item-${idx}-${itemIdx}`}
                        className="mt-0.5 h-4 w-4 rounded border-teal-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                      />
                      <label htmlFor={`glamp-item-${idx}-${itemIdx}`} className="cursor-pointer">
                        <span className="font-bold text-slate-900">{item.name}</span>
                        <span className="block text-xs text-slate-600 mt-0.5 leading-relaxed">{item.tip}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-teal-950 text-white rounded-2xl p-5 sm:p-6">
            <h4 className="text-teal-300 font-bold text-sm sm:text-base mb-2 flex items-center gap-2">
              <span>🌿</span> グランピングの靴選び：スニーカー＋スリッポンの2足体制が最強
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              行き帰りの移動はスニーカー、サイト内やテントの出入りにはカカトを踏めるスリッポンやクロックスを使うのが最もストレスフリー。テント内は土足禁止のため、1日に何十回も靴を脱ぎ履きする煩わしさが劇的に解消されます。
            </p>
          </div>
        </section>

        {/* セクション3: 温泉付きグランピングヴィラ特集 */}
        <section aria-labelledby="villas-heading">
          <div className="border-l-4 border-teal-600 pl-4 mb-4">
            <div className="text-xs font-bold uppercase text-teal-700 tracking-wider">Hot Spring & Luxury Glamping</div>
            <h2 id="villas-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              冷え・虫・トイレの悩みを全解消！客室温泉付きおすすめグランピング施設
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              源泉かけ流し露天風呂や専用トイレ・シャワーを完備した、初心者でも安心して泊まれる極上ヴィラ。
            </p>
          </div>

          <div className="mb-6 bg-teal-50 border border-teal-200 rounded-2xl p-4 text-xs sm:text-sm text-teal-950 leading-relaxed">
            <span className="font-bold">♨️ 初心者は「客室専用バス・トイレ付き」が絶対正解：</span>
            共用トイレへの夜間移動やシャワー待ちのストレスを解消するなら、客室内に源泉かけ流し温泉や専用バスルームを備えたグランピングヴィラが圧倒的に快適です。冷えた身体をいつでも天然温泉で温められます。
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
                      極上グランピングリゾート
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
                    <div className="text-[11px] font-bold text-teal-700 mb-1">
                      {hotel.nearestStation || hotel.address1 || "グランピングリゾート"}
                    </div>
                    <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-teal-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {hotel.hotelSpecial || "大自然の開放感とリゾートホテルの快適さを融合した、源泉温泉付きの贅沢グランピング滞在。"}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block">最安参考料金（1名）</span>
                      <span className="text-teal-700 font-black text-lg">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      楽天トラベルで空室を見る
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 初めてでも大満足のグランピング1日シミュレーション */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-teal-400 font-black text-xs uppercase tracking-wider">Perfect Day Schedule</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1 mb-4">
              失敗しない！初心者向けグランピング1泊2日タイムスケジュール
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex gap-4 border-b border-slate-800 pb-3">
                <span className="font-black text-teal-400 shrink-0 w-24">1日目 15:00</span>
                <div>
                  <strong className="text-white">チェックイン・網戸確認＆防虫ミスト噴霧</strong>
                  <p className="text-slate-400 text-xs mt-0.5">明るいうちにテント周囲とデッキに虫除けを散布。エアコンで適温に設定。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-slate-800 pb-3">
                <span className="font-black text-teal-400 shrink-0 w-24">1日目 17:00</span>
                <div>
                  <strong className="text-white">夕暮れBBQスタート（厚手除菌シートを手元に）</strong>
                  <p className="text-slate-400 text-xs mt-0.5">暗くなる前に火をおこし、肉やアヒージョを堪能。難燃ジャケットを着用。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-slate-800 pb-3">
                <span className="font-black text-teal-400 shrink-0 w-24">1日目 19:30</span>
                <div>
                  <strong className="text-white">焚き火タイム＆焼きマシュマロ（星空観察）</strong>
                  <p className="text-slate-400 text-xs mt-0.5">フリースやブランケットで防寒。温かいホットワインやココアを楽しむ。</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-slate-800 pb-3">
                <span className="font-black text-teal-400 shrink-0 w-24">1日目 21:00</span>
                <div>
                  <strong className="text-white">客室専用温泉で芯まで温まり、煙の臭いを洗い流す</strong>
                  <p className="text-slate-400 text-xs mt-0.5">焚き火の匂いを落とし、湯上がりに厚手ソックスを履いて底冷えを遮断。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-black text-teal-400 shrink-0 w-24">2日目 07:00</span>
                <div>
                  <strong className="text-white">朝の鳥のさえずりと挽きたてドリップコーヒー</strong>
                  <p className="text-slate-400 text-xs mt-0.5">スリッポンを履いてデッキへ。朝露の澄んだ空気の中で最高のモーニング。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問 */}
        <section className="bg-white rounded-3xl border border-teal-200 p-6 sm:p-8">
          <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span>❓</span> グランピングのよくある質問
          </h3>
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 mb-1">Q. 雨が降ったらグランピングはどうなりますか？</h4>
              <p className="text-slate-600 leading-relaxed">
                A. 多くの施設で屋根付きのBBQデッキが備え付けられており、雨天でもバーベキューを楽しめます。ただし強風時は焚き火が中止になることがあるため、テント内で遊べるボードゲームやプロジェクターがあると安心です。
              </p>
            </div>
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 mb-1">Q. パジャマや歯ブラシなどのアメニティは持参すべきですか？</h4>
              <p className="text-slate-600 leading-relaxed">
                A. 歯ブラシやタオルはホテル同様に用意されている施設が多いですが、ルームウェア（部屋着・パジャマ）は有料レンタルまたは設置なしの場合が少なくありません。冷え込みを考慮した上下のルームウェアは持参が基本です。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
