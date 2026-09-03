import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【夜行高速バスで爆睡するための持ち物10選】首が痛い・乾燥・寒さで一睡もできなかった失敗談を完全解決 ｜ 日本全国・旅宿クラウド",
  description: "夜行バス初心者必見の安眠・快適ハック！ネックピローの選び方、車内の極度な乾燥を防ぐ立体マスク、足のむくみ対策着圧ソックス、消灯後の過ごし方と到着後すぐ入れる早朝サウナ・大浴場ホテルガイド。",
  keywords: [
    "夜行バス 持ち物",
    "夜行バス 爆睡",
    "高速バス 安眠グッズ",
    "夜行バス 首痛い",
    "夜行バス 乾燥対策",
    "夜行バス 到着後 お風呂 サウナ",
    "楽天トラベル 高速バス",
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
      return data["night-highway-bus-packing-comfort-sleep-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for night-highway-bus-packing-comfort-sleep-guide", e);
  }
  return [];
}

export default function NightHighwayBusPackingGuidePage() {
  const hotels = loadHotels();

  // 10大爆睡アイテムリスト
  const essentialGear = [
    {
      num: "01",
      category: "姿勢・首肩ケア",
      name: "ホールド型ネックピロー（低反発 or ポンプ膨張式）",
      whyNeed: "「首がガクンと落ちて激痛で目が覚める」現象をゼロにする最重要ギア。100均のU字型空気枕は反発が弱く頭が左右に逃げるためNG。首の全周を360度しっかり支える顎乗せフック付きタイプがベスト。",
      proTip: "空気膨張式なら口で吹かずに手押しポンプで膨らむタイプを選ぶと衛生的かつ車内でも周囲に気を遣いません。",
      importance: "★★★★★"
    },
    {
      num: "02",
      category: "耳栓・遮音",
      name: "モルデックス製ウレタン遮音耳栓 or ANCノイキャンイヤホン",
      whyNeed: "深夜の車内は静寂ではなく、エンジンの低周波振動・エアコン送風音・他人のいびきや寝息・ビニール袋のカサカサ音が延々と反響します。この不規則な生活音こそが覚醒の主因。",
      proTip: "ANCイヤホンはバッテリー切れリスクがあるため、米軍仕様のモルデックス（MOLDEX）など高遮音ウレタン耳栓を併用・予備携帯するのが玄人の鉄則。",
      importance: "★★★★★"
    },
    {
      num: "03",
      category: "遮光・睡眠ホルモン",
      name: "3D立体型アイマスク（目元圧迫なし＆鼻梁遮光）",
      whyNeed: "PA（サービスエリア）での点呼・扉開閉時の漏れ光、スマホのバックライト漏れを完全シャットアウト。平らな布マスクだと眼球が圧迫されて瞬きが痛くなり、安眠を妨げます。",
      proTip: "目元が凹んだカップ構造の立体アイマスクなら、マツエクをしていても崩れず、眼球への圧迫感が皆無です。",
      importance: "★★★★★"
    },
    {
      num: "04",
      category: "乾燥・喉鼻ガード",
      name: "加湿立体マスク（濡れフィルター内蔵タイプ）",
      whyNeed: "バス車内の湿度は深夜になると20%以下まで急降下。エアコン直撃で口呼吸になり、朝起きたら喉がガラガラで風邪を引く典型的な失敗を防ぎます。",
      proTip: "蒸気スチームタイプや水分を含ませたフィルターをセットする立体マスクを装着すれば、朝まで喉の粘膜と肌をしっとり保護できます。",
      importance: "★★★★☆"
    },
    {
      num: "05",
      category: "血流・むくみ対策",
      name: "医療用段階着圧ソックス（夜用オープントゥ）",
      whyNeed: "7〜9時間ずっと足を下ろした姿勢が続くと、血液とリンパが滞留してふくらはぎがパンパンに膨張。翌朝靴が入らなくなる「足崩壊」を防ぐ必須防具です。",
      proTip: "つま先が開いているオープントゥ型を選ぶこと。車内で足先が蒸れず、体温調節が自然に行えます。",
      importance: "★★★★☆"
    },
    {
      num: "06",
      category: "足元リラックス",
      name: "折りたたみスリッパ（かかと付き or 厚底EVA）",
      whyNeed: "スニーカーを履いたまま寝ると血流が悪化して足が冷え切ります。乗車直後に靴を脱いでスリッパに履き替えるだけで、疲労蓄積が半減します。",
      proTip: "100均の薄いペラペラタイプだとPAのトイレに行く際に底が濡れて不快になるため、底面が防水ラバー仕様の携帯スリッパが最適。",
      importance: "★★★★☆"
    },
    {
      num: "07",
      category: "温度調整・防寒",
      name: "大判ストール / パッカブルウルトラライトダウン",
      whyNeed: "車内空調は運転手側の設定や座席位置（窓際・エアコン吹き出し口直下）によって猛烈に冷えることがあります。備え付けブランケット1枚では腰や肩口の冷えを防ぎきれません。",
      proTip: "寒暖差対策として膝掛け・腰当てクッション・羽織り物の3役をこなす大判ストールは夜行バス最強の万能布です。",
      importance: "★★★★☆"
    },
    {
      num: "08",
      category: "自律神経・リラックス",
      name: "使い捨てホットアイマスク（蒸気で温まるタイプ）",
      whyNeed: "慣れない環境での緊張や「寝なきゃ」という焦りで交感神経が優位になりがち。目元を40℃前後の蒸気で温めると副交感神経が一気に優位になり、入眠スピードが格段に早まります。",
      proTip: "消灯アナウンス直前に装着するのがおすすめ。周囲の微小な光も防ぎながら、ラベンダーやカモミールの香りで深くリラックスできます。",
      importance: "★★★☆☆"
    },
    {
      num: "09",
      category: "姿勢安定・腰痛防止",
      name: "腰用トラベルエアクッション（骨盤サポート）",
      whyNeed: "バスシートの背もたれと腰の間に生じる「隙間」が数時間にわたり椎間板へ負担をかけ、起床時の激痛腰痛を生み出します。隙間を埋めるだけで劇的に腰が楽になります。",
      proTip: "専用クッションがなければ、前述のストールや上着を丸めて腰の後ろに挟むだけでも代用可能です。",
      importance: "★★★☆☆"
    },
    {
      num: "10",
      category: "電源・身だしなみ",
      name: "L字型充電ケーブル＆携帯汗拭きシート・歯磨きシート",
      whyNeed: "座席のUSB/コンセント差込口は足元や肘掛け横など狭小な場所にあります。ストレート型コードだと足が当たって端子が折れる事故が頻発。また消灯前後のサッパリ感も快眠を左右します。",
      proTip: "歯磨きシートなら水場のない車内でも口内をスッキリ爽快にリセットでき、翌朝の不快な粘つきを解消できます。",
      importance: "★★★☆☆"
    },
  ];

  // リアルな失敗談＆解決タイムライン
  const failureStories = [
    {
      caseTitle: "失敗談①：100均の空気枕で挑み、首が直角に曲がって激痛起床",
      situation: "東京〜大阪便で節約のため100円ショップのビニール製首枕を使用。頭の重さに耐えきれず潰れ、深夜に首が右肩に倒れ込んだまま固定されて筋を痛め、到着後のテーマパークで首が回らない地獄に。",
      solution: "厚み10cm以上の高密度ウレタン製、または顎受けホールドバンド付きネックピローを持参すべし。頭を預けたときに頸椎がまっすぐキープされるものを選びましょう。"
    },
    {
      caseTitle: "失敗談②：窓際の冷気直撃＆エアコン乾燥で声が出なくなった",
      situation: "夏場の夜行便。車内温度25度設定でも、深夜2時の高速走行中は窓ガラス伝いに冷気が落ちてくる「コールドドラフト現象」が発生。朝起きたら喉がカラカラに張り付いて声が出なくなった。",
      solution: "窓際席のときは窓と体の間に上着を挟むか、大判ストールで首回りを防護。加湿フィルター付きマスクの装着を乗車ルーティンに義務付けましょう。"
    },
    {
      caseTitle: "失敗談③：消灯後のスマホいじりとSAの全点灯で脳が覚醒",
      situation: "寝付けないからと消灯後に毛布を被ってスマホ画面を凝視。さらに深夜3時のサービスエリア休憩で「明かりがついた！」と飛び起きてしまい、体内時計が混乱して結局一睡もできず朝を迎えた。",
      solution: "消灯30分前にはスマホを機内モードにしてカバンへ。SA休憩のアナウンスで起きないよう耳栓と立体アイマスクを固定し、途中下車せず朝まで目を閉じ続けるのが鉄則です。"
    }
  ];

  // 乗車前〜到着後タイムラインハック
  const timeHacks = [
    { time: "出発2時間前", title: "軽めの夕食＆お風呂・歯磨きを済ませる", desc: "満腹状態やカフェイン・アルコール摂取は睡眠の質を破壊します。消化の良い食事を済ませ、ターミナル近くの銭湯やスパで入浴してパジャマ並みにゆったりした服装に着替えておくのが理想。" },
    { time: "乗車直後（消灯前）", title: "足元リセット＆座席周りのセッティング", desc: "荷物を網棚と座席下に分け、貴重品・水・安眠ポーチ（耳栓・アイマスク・ネックピロー・マスク）だけを手元へ。即座に靴を脱いでスリッパに履き替え、着圧ソックスを装着。" },
    { time: "消灯アナウンス", title: "リクライニング声掛け＆フル装備完了", desc: "後部座席の人に「少し倒してもいいですか？」と一言声をかけてリクライニングを倒す（これでトラブルゼロ）。ホットアイマスクと加湿マスク、耳栓を装着して呼吸を整えます。" },
    { time: "早朝到着時", title: "駅前大浴場・サウナ直行で完全リフレッシュ", desc: "夜行バスの疲れを引きずらない秘訣は、到着後すぐに駅前の大浴場やサウナ付きホテルへ駆け込み、湯船で凝り固まった筋肉をほぐして朝食を摂ることです。" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white pb-20">
      {/* ヒーローヘッダー（Deep Indigo Palette） */}
      <header className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 border-b border-indigo-900/40 py-16 md:py-24">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
            <span>🌙 NIGHT BUS SLEEP HACKS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight md:leading-tight text-white font-journal-serif">
            【夜行高速バスで爆睡するための持ち物10選】<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              首が痛い・乾燥・寒さで一睡もできなかった失敗談を完全解決
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            「安いから夜行バスに乗ったのに、翌日身体中がバキバキで観光どころじゃなかった…」そんな後悔を二度と繰り返さないために。年間50回夜行バスに乗る旅のプロが厳選した、車内で熟睡するための神アイテムと失敗回避ルーティンを徹底解説します。
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-semibold text-indigo-200">
            <span className="bg-indigo-950/80 px-3 py-1.5 rounded-lg border border-indigo-800/60">💤 首痛ゼロ枕術</span>
            <span className="bg-indigo-950/80 px-3 py-1.5 rounded-lg border border-indigo-800/60">😷 湿度20%乾燥対策</span>
            <span className="bg-indigo-950/80 px-3 py-1.5 rounded-lg border border-indigo-800/60">🦶 むくみ解消ソックス</span>
            <span className="bg-indigo-950/80 px-3 py-1.5 rounded-lg border border-indigo-800/60">♨️ 到着後サウナ・大浴場</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-16">
        {/* なぜ夜行バスで眠れないのか？3大トラップ */}
        <section className="bg-indigo-950/40 border border-indigo-900/60 rounded-3xl p-6 sm:p-8 backdrop-blur space-y-6">
          <div className="border-b border-indigo-800/50 pb-4">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-black tracking-wider uppercase">
              <span>⚠️ NIGHT BUS TRAPS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              なぜ夜行バスで一睡もできないのか？初心者がハマる3大トラップ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-indigo-900/40 space-y-2">
              <div className="text-2xl">🧊</div>
              <h3 className="text-sm font-black text-indigo-200">極度の冷気と超乾燥</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                車内湿度は深夜20%前後まで低下。エアコン風が直撃し、毛布1枚では窓際からの冷気（コールドドラフト）で芯まで冷え切ります。
              </p>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-indigo-900/40 space-y-2">
              <div className="text-2xl">⚡</div>
              <h3 className="text-sm font-black text-indigo-200">首のすわり不良と腰の隙間</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                座席が倒れても水平にはなりません。寝返りが打てず、頭の重力（約5kg）がそのまま首関節と腰椎に集中して激痛を招きます。
              </p>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-indigo-900/40 space-y-2">
              <div className="text-2xl">👁️</div>
              <h3 className="text-sm font-black text-indigo-200">不規則な光と低周波ノイズ</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                消灯後も外の街灯やSA停車時の光漏れ、他人のいびき、路面振動のロードノイズが脳の覚醒スイッチを刺激し続けます。
              </p>
            </div>
          </div>
        </section>

        {/* 🎒 爆睡持ち物10選 */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <span>🎒 MUST-HAVE SLEEP GEAR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-journal-serif">
              夜行バスで熟睡するための神アイテム10選
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              カバンの手元ポケットに常備必須！これがあるだけで翌朝の身体の軽さが天と地ほど変わります。
            </p>
          </div>

          <div className="space-y-4">
            {essentialGear.map((item) => (
              <div
                key={item.num}
                className="bg-slate-900/90 border border-indigo-900/50 hover:border-indigo-500/60 transition duration-200 rounded-2xl p-5 sm:p-6 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-900/40 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black bg-indigo-600 text-white px-2.5 py-1 rounded-lg">
                      {item.num}
                    </span>
                    <span className="text-xs font-bold text-indigo-300 bg-indigo-950 px-2.5 py-0.5 rounded-full border border-indigo-800/60">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-xs font-black text-amber-400">
                    必要度: {item.importance}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-white">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.whyNeed}
                </p>

                <div className="bg-indigo-950/60 border border-indigo-900/60 rounded-xl p-3 text-xs text-indigo-200 flex items-start gap-2">
                  <span className="text-base shrink-0">💡</span>
                  <span><strong className="text-white">選び方のコツ：</strong>{item.proTip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 実際にあった生々しい失敗談と対処法 */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 border border-indigo-900/60 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-indigo-800/40 pb-4">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-black tracking-wider uppercase">
              <span>📉 REAL FAILURE STORIES</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              先輩トラベラーの「一睡もできなかった」リアル失敗談
            </h2>
          </div>

          <div className="space-y-4">
            {failureStories.map((story, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-indigo-900/40 rounded-2xl p-5 space-y-3">
                <h3 className="text-sm sm:text-base font-black text-rose-300">
                  {story.caseTitle}
                </h3>
                <div className="text-xs text-slate-300 space-y-1 bg-rose-950/20 border-l-2 border-rose-500 pl-3 py-1">
                  <strong className="text-rose-200">実際の悲劇：</strong>{story.situation}
                </div>
                <div className="text-xs text-indigo-200 space-y-1 bg-indigo-950/30 border-l-2 border-indigo-400 pl-3 py-1">
                  <strong className="text-indigo-100">完全解決策：</strong>{story.solution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ⏰ 乗車前〜消灯〜到着後タイムラインハック */}
        <section className="bg-slate-900/90 border border-indigo-900/50 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-indigo-800/40 pb-4">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-black tracking-wider uppercase">
              <span>⏰ TIMELINE STRATEGY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              爆睡に導く「乗車前〜到着後」行動タイムライン
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              グッズだけでなく「行動の段取り」が睡眠効率を最大化します。
            </p>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-indigo-800/60">
            {timeHacks.map((hack, hIdx) => (
              <div key={hIdx} className="relative space-y-1.5">
                <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-slate-900" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-indigo-300 bg-indigo-950 px-2.5 py-0.5 rounded border border-indigo-800/80">
                    {hack.time}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {hack.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-1">
                  {hack.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🚌 楽天トラベル 高速バス予約・クーポン導線 */}
        <section className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎫</span>
            <h2 className="text-lg sm:text-xl font-black text-white">
              楽天トラベル 高速バス予約でシートを厳選しよう
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
            爆睡の究極の近道は、そもそも「3列独立シート」や「カーテン仕切り付きリクライニングシート」を予約すること。楽天トラベルならシートタイプ絞り込み検索やお得な限定クーポンが充実しています。
          </p>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-black text-sm rounded-xl shadow-lg transition"
            >
              <span>🚌 楽天トラベルで夜行高速バス＆割引クーポンを探す</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 🏨 到着後すぐ入れる！駅前サウナ・大浴場付きおすすめ宿 */}
        <section className="space-y-6">
          <div className="border-b border-indigo-900/60 pb-4">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-black tracking-wider uppercase">
              <span>♨️ POST-BUS BATH & REFRESH</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              夜行バス到着後すぐ行ける！主要ターミナル直結・大浴場＆サウナ付きホテル
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              早朝到着後の荷物預けや、前泊・後泊に最適！凝り固まった身体を天然温泉とサウナでリセットできる厳選宿です。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <article
                  key={hotel.hotelNo}
                  className="flex flex-col justify-between bg-slate-900/90 border border-indigo-900/50 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-lg transition duration-200"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-slate-800">
                      {hotel.hotelImageUrl ? (
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
                          {hotel.hotelName}
                        </div>
                      )}
                      {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 && (
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-indigo-950/90 text-indigo-200 px-2.5 py-0.5 rounded border border-indigo-800">
                          ¥{hotel.hotelMinCharge.toLocaleString()}〜
                        </span>
                      )}
                      {hotel.nearestStation && (
                        <span className="absolute top-2 left-2 text-[10px] font-black bg-slate-950/80 text-slate-200 px-2 py-0.5 rounded">
                          🚉 {hotel.nearestStation}駅
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                        <div className="flex items-center text-xs font-bold text-amber-400">
                          <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount || 0}件）</span>
                        </div>
                      )}
                      <h3 className="text-sm font-black text-white line-clamp-2">
                        {hotel.hotelName}
                      </h3>
                      {hotel.hotelSpecial && (
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {hotel.hotelSpecial}
                        </p>
                      )}
                      {hotel.access && (
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          📍 {hotel.access}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 text-xs font-black text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition shadow"
                    >
                      🏨 楽天トラベルで空室・プランを見る
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-slate-500">
              ホテル情報を読み込み中または該当ホテルがありません。
            </div>
          )}
        </section>

        {/* 内部リンク＆関連記事導線 */}
        <section className="bg-slate-900/60 border border-indigo-900/40 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-black tracking-wider uppercase">
            <span>🔗 RELATED BUS GUIDES</span>
          </div>
          <h2 className="text-lg font-black text-white">
            夜行バス比較・モデルコースもあわせてチェック
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/tokyo-osaka-bus-vs-shinkansen-guide"
              className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/40 hover:border-indigo-500 transition space-y-1.5 group"
            >
              <div className="text-xs font-black text-indigo-400 group-hover:text-indigo-300">
                🚌 東京 ⇄ 大阪 徹底比較
              </div>
              <h3 className="text-sm font-bold text-white">
                【新幹線 vs 夜行バス】差額2万円でUSJ・道頓堀1泊2日モデルコース
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                早朝開園待ちに直行できる夜行バスと最速新幹線のコスパ徹底比較ガイド。
              </p>
            </Link>

            <Link
              href="/tokyo-kanazawa-bus-vs-shinkansen-guide"
              className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/40 hover:border-indigo-500 transition space-y-1.5 group"
            >
              <div className="text-xs font-black text-indigo-400 group-hover:text-indigo-300">
                🦀 東京 ⇄ 金沢 徹底比較
              </div>
              <h3 className="text-sm font-bold text-white">
                北陸新幹線と高速バスどっち？料金比較＆朝イチ海鮮丼モデルコース
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                宿泊代1泊分浮く金沢夜行便のメリットと近江町市場早朝攻略プラン。
              </p>
            </Link>
          </div>
        </section>

        {/* 全国都道府県一覧 */}
        <div className="text-center pt-4">
          <Link
            href="/prefectures"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-indigo-900/60 px-8 py-3.5 rounded-2xl transition shadow-sm"
          >
            <span>🗾</span>
            <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
            <span>→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
