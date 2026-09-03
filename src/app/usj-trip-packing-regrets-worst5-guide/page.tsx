import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【USJ旅行で後悔したことワースト5】エクスプレスパスなしで大絶望！？ニンテンドー入場整理券＆必須持ち物",
  description:
    "ユニバーサル・スタジオ・ジャパンに行く前に必読のリアル後悔談！マリオエリアに入れなかった失敗、濡れるアトラクションでのカッパ忘れ、ロッカー小銭不足、公式アプリ設定とオフィシャルホテル前泊の重要性。",
  keywords: [
    "USJ 後悔 ワースト5",
    "USJ エクスプレスパス 失敗",
    "USJ ニンテンドーエリア 整理券",
    "USJ 持ち物 カッパ ポンチョ",
    "USJ オフィシャルホテル 楽天トラベル",
    "ユニバ リアル失敗談"
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
      return data["usj-trip-packing-regrets-worst5-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for usj-trip-packing-regrets-worst5-guide", e);
  }
  return [];
}

export default function UsjTripPackingRegretsWorst5Page() {
  const hotels = loadHotels();

  // USJ旅行リアル後悔ワースト5
  const worstRegrets = [
    {
      rank: "第1位",
      title: "「入場さえすれば入れる」と大誤解！マリオ（ニンテンドー）エリアに一歩も入れず門前払い",
      tag: "エリア入場確約券・整理券の罠",
      incident:
        "スーパー・ニンテンドー・ワールドは大混雑時に入場制限がかかります。『USJのチケットがあるからいつでも入れる』と思い込み、昼前に悠々と到着したところ、当日分の無料入場整理券はすでに配布終了。抽選券も落選し、旅行最大の目的だったマリオカートに乗れず子供が大号泣するケースが後を絶ちません。",
      countermeasure:
        "確約券付きエクスプレス・パスを事前購入するか、開園1〜2時間前に並んで朝一番のフリー入場枠に飛び込むか、入園直後に公式アプリで即「エリア入場整理券」を奪取するのが必須。",
      regretScore: "98%"
    },
    {
      rank: "第2位",
      title: "1アトラクション160分待ちで1日が終わる…エクスプレス・パス代をケチった大代償",
      tag: "足腰崩壊＆待機列で険悪ムード",
      incident:
        "繁忙期や週末のUSJは、マリオカートやハリポタ、フライングダイナソーが平然と120〜180分待ちになります。チケット代を節約しようとエクスプレス・パスを買わなかった結果、炎天下や寒空の下で立ったまま待つことになり、同行者と会話もなくなり険悪な空気に。1日中並んで乗れたのはわずか2〜3個という悲惨な結末に。",
      countermeasure:
        "予算が許せば「ユニバーサル・エクスプレス・パス」は必須投資。買えない場合は「シングルライダー」を活用すると待ち時間を半減〜3分の1に短縮できます。",
      regretScore: "95%"
    },
    {
      rank: "第3位",
      title: "ジュラパ＆ジョーズで下着までビショ濡れ！パーク内カッパ高額買い＆乾かない悪夢",
      tag: "防水対策ゼロの悲劇",
      incident:
        "ジュラシック・パーク・ザ・ライドやウォーターワールド、夏の各種びしょ濡れイベントの水量は『水しぶき』のレベルではありません。レインコートやポンチョをケチって着なかった結果、Tシャツから靴下・パンツまで搾れるほどズブ濡れに。パーク内のカッパは割高で、靴の中がグチョグチョのまま夜まで凍えながら過ごす羽目に。",
      countermeasure:
        "100均で使い捨てレインポンチョ＋靴を覆うシューズカバー、大きめのゴミ袋（荷物丸ごと水濡れ防止用）を事前に持参するのが賢者の知恵。",
      regretScore: "90%"
    },
    {
      rank: "第4位",
      title: "絶叫アトラクション前のロッカーでパニック！100円玉小銭切れ＆荷物預け渋滞",
      tag: "フライングダイナソー等の手荷物完全排除",
      incident:
        "ハリウッド・ドリーム・ザ・ライドやフライングダイナソーは安全上の理由から、ポケットの中身（スマホ・小銭・車の鍵含む）まで完全ロッカー預けが義務化されています。無料返却式ロッカーで100円硬貨が必要な箇所もあり、両替機に行列ができて乗車タイミングを逃すトラブルが多発します。",
      countermeasure:
        "100円玉を2〜3枚財布に必ず常備しておくこと。また同行者同士でロッカー番号と暗証番号を忘れないよう手のひらやメモで共有しておくのが鉄則。",
      regretScore: "86%"
    },
    {
      rank: "第5位",
      title: "大阪市内から朝の通勤ラッシュに巻き込まれ開園ダッシュに完全出遅れ",
      tag: "オフィシャルホテル前泊をケチった後悔",
      incident:
        "USJの公式開園時間は8:30や9:00と発表されていても、実際は混雑状況に応じて1時間〜1時間半前倒し（7:30頃）でゲートが開くのが日常茶飯事。大阪市内の遠いホテルから朝の超満員電車（環状線・ゆめ咲線）で向かったところ、駅に着いた時にはすでに一般開園済みでマリオ整理券が壊滅していたという失敗談。",
      countermeasure:
        "USJは「ユニバーサルシティ駅直結のオフィシャルホテル」に前泊するのが勝利への最短ルート。徒歩1〜2分でゲート前に陣取れるアドバンテージは計り知れません。",
      regretScore: "89%"
    }
  ];

  // USJパッキング持ち物チェックリスト
  const packingChecklist = [
    {
      category: "ニンテンドー＆絶叫を制する【三種の神器】",
      badge: "最重要",
      badgeColor: "bg-indigo-600 text-white",
      items: [
        { name: "USJ公式アプリ＋入場券QRコード登録済みスマホ", reason: "当日アプリでのマリオエリア整理券取得やアトラクション待ち時間確認に不可欠。" },
        { name: "モバイルバッテリー（15,000mAh以上推奨）", reason: "GPS測位とアプリ常時更新、動画撮影で夕方前に確実に充電切れを起こす。" },
        { name: "100円硬貨（数枚）", reason: "手荷物一時預けロッカー（返却式）利用時に小銭切れで焦るのを防止。" }
      ]
    },
    {
      category: "水濡れ＆待ち時間耐久【プロの防衛グッズ】",
      badge: "必須",
      badgeColor: "bg-indigo-100 text-indigo-900 border border-indigo-300",
      items: [
        { name: "使い捨てレインポンチョ＋大型45L透明ゴミ袋", reason: "ジュラパでの全身水濡れ防止＆足元に置く荷物を袋ごと完全防水ガード。" },
        { name: "折りたたみ軽量クッションシート", reason: "パレード待ちや開園前のコンクリート待機で腰痛・冷えを劇的軽減。" },
        { name: "靴擦れ防止テープ・履き慣れたスニーカー", reason: "パーク内のアップダウンと長蛇の待機列で1日15km以上歩く足を守る。" },
        { name: "フタ付き密閉ペットボトル飲料", reason: "パーク内自販機は行列＆割高。規定サイズ（1人500mlまで持込可）を携帯。" }
      ]
    },
    {
      category: "子連れ・季節対策【あると神アイテム】",
      badge: "推奨",
      badgeColor: "bg-cyan-100 text-cyan-900 border border-cyan-300",
      items: [
        { name: "パワーアップバンド（過去持っているなら持参）", reason: "ニンテンドーエリア内のコイン集めやミニゲームで2倍楽しむ必須アイテム。" },
        { name: "濡れティッシュ・アルコール除菌スプレー", reason: "ターキーレッグやチュロスを食べた後の手のベタつきを一瞬で解消。" },
        { name: "羽織れる薄手ウインドブレーカー", reason: "安治川河口のベイエリア特有の冷たい浜風やアトラクション濡れ後の防寒に。" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f7ff] text-slate-800 antialiased pb-20">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-b from-indigo-950 via-indigo-900 to-slate-900 text-white pt-16 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-md">
            <span>⚡</span> Strategy & Survival • ユニバーサル・スタジオ・ジャパン
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6">
            【USJ旅行で後悔したこと<span className="text-indigo-400">ワースト5</span>】
            <br />
            エクスプレスパスなしで大絶望！？ニンテンドー入場整理券＆必須持ち物
          </h1>
          <p className="text-indigo-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            『行けばなんとかなる』は通用しない！事前準備と持ち物の差で満足度が180度激変するUSJ。
            マリオエリアに入れない悲劇から全身びしょ濡れの地獄まで、リアルな後悔談と即効性のある攻略法を徹底解説。
          </p>
        </div>
      </header>

      {/* 楽天トラベルクーポンプロモーション */}
      <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <SpecialCouponBanner />
      </section>

      {/* メインコンテンツ */}
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-16">
        {/* セクション1：後悔ワースト5 */}
        <section>
          <div className="border-l-4 border-indigo-600 pl-4 mb-8">
            <span className="text-indigo-700 text-xs font-black tracking-widest uppercase">REAL REGRETS RANKING</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              知らなかったでは済まされない！USJ旅行のリアル後悔ワースト5
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              数万人の来場者が痛感した「あの時こうしておけば…」の教訓集。
            </p>
          </div>

          <div className="space-y-6">
            {worstRegrets.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-black text-xs px-3 py-1 rounded-full shadow-sm">
                      {item.rank}
                    </span>
                    <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                      {item.tag}
                    </span>
                  </div>
                  <div className="text-xs font-black text-slate-400">
                    絶望・後悔度 <span className="text-indigo-600 text-base">{item.regretScore}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-indigo-50/40 p-4 rounded-2xl border border-indigo-100 mb-4">
                  <strong className="text-indigo-950 block mb-1 font-bold">💥 現地で起きた大悲劇：</strong>
                  {item.incident}
                </div>

                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed bg-teal-50/80 p-4 rounded-2xl border border-teal-200">
                  <strong className="text-teal-950 block mb-1 font-bold">🛡️ 回避するプロの防衛策：</strong>
                  {item.countermeasure}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション2：USJパッキング持ち物チェックリスト */}
        <section className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="border-l-4 border-indigo-600 pl-4 mb-6">
            <span className="text-indigo-700 text-xs font-black tracking-widest uppercase">PACKING SURVIVAL GEAR</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              USJ持ち物サバイバルリスト【完全装備ガイド】
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              アトラクション待ちと過酷な天候を乗り切るための厳選パッキング。
            </p>
          </div>

          <div className="space-y-6">
            {packingChecklist.map((group, gIdx) => (
              <div key={gIdx} className="border border-indigo-100 rounded-2xl p-5 bg-indigo-50/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${group.badgeColor}`}>
                    {group.badge}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{group.category}</h3>
                </div>

                <ul className="space-y-3">
                  {group.items.map((it, itIdx) => (
                    <li key={itIdx} className="bg-white p-3.5 rounded-xl border border-indigo-200/60 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                        <span className="text-indigo-600 font-black">✔</span>
                        <span>{it.name}</span>
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-500 sm:text-right">
                        {it.reason}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3：オフィシャルホテル＆駅チカ宿 */}
        <section>
          <div className="border-l-4 border-indigo-600 pl-4 mb-8">
            <span className="text-indigo-700 text-xs font-black tracking-widest uppercase">OFFICIAL & ACCESS HOTELS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              朝の開園ダッシュで勝つ！USJオフィシャル＆アクセス抜群ホテル
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              パーク徒歩1分のオフィシャルホテルから、大阪駅・新大阪直結のコスパ宿まで厳選。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => {
                const minCharge = hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : null;
                return (
                  <div
                    key={hotel.hotelNo}
                    className="flex flex-col justify-between bg-white border-2 border-indigo-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-400 transition group"
                  >
                    <div>
                      {hotel.hotelImageUrl && (
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={hotel.hotelImageUrl}
                            alt={hotel.hotelName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-indigo-200 border border-indigo-500/30">
                            最寄: {hotel.nearestStation || "ユニバーサルシティ"}
                          </div>
                          {hotel.reviewAverage && (
                            <div className="absolute top-3 right-3 bg-indigo-600 text-white px-2 py-0.5 rounded-full text-xs font-black shadow flex items-center gap-1">
                              <span>★</span>
                              <span>{hotel.reviewAverage.toFixed(2)}</span>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition leading-snug">
                          {hotel.hotelName}
                        </h3>
                        <p className="text-xs text-slate-500 mb-2">
                          {hotel.address1} {hotel.address2}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-3">
                          {hotel.hotelSpecial || "USJ観光の拠点に最適な立地と快適な客室を備えた人気宿泊施設。"}
                        </p>
                        {hotel.access && (
                          <div className="text-[11px] text-indigo-950 bg-indigo-50 p-2 rounded-xl border border-indigo-200">
                            📍 {hotel.access}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-indigo-100 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 block">参考最安（1名〜）</span>
                        <span className="text-base font-black text-indigo-600">
                          {minCharge ? `¥${minCharge}〜` : "プラン確認"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-bold text-xs shadow hover:shadow-indigo-600/20 transition"
                      >
                        <span>空室・プランを見る</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center text-slate-500 border border-slate-200">
              現在、USJ周辺ホテルのプランを読み込み中です。
            </div>
          )}
        </section>

        {/* 内部リンク回遊 */}
        <div className="pt-8 border-t border-indigo-200 text-center">
          <p className="text-xs text-slate-500 mb-3">あわせて読みたい関西・USJ旅行ガイド</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/usj-family-hotel-near-osaka-guide"
              className="text-xs sm:text-sm font-semibold text-indigo-700 hover:text-indigo-900 underline underline-offset-4"
            >
              【子連れUSJホテル完全比較】徒歩圏内オフィシャル宿・格安提携ホテルまとめ
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/osaka-travel-budget-guide"
              className="text-xs sm:text-sm font-semibold text-indigo-700 hover:text-indigo-900 underline underline-offset-4"
            >
              【大阪旅行 予算ガイド】1泊2日・2泊3日の総費用と節約テクニック徹底比較
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
