import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【富士五湖・河口湖 車なし観光ガイド】周遊バス・富士急行で回る！逆さ富士・忍野八海・浅間神社モデルコース ｜ 日本全国・旅宿クラウド",
  description: "車なしでも富士五湖は満喫できる！河口湖周遊バス（レッドライン/グリーンライン）、富士山パノラマロープウェイ、新倉山浅間公園の絶景、河口湖駅徒歩圏＆送迎付きの温泉ホテルを徹底解説。",
  keywords: ["fuji-five-lakes-car-free-bus-guide", "富士五湖 車なし", "河口湖 周遊バス", "忍野八海 バス", "新倉山浅間公園 電車", "富士急行線 モデルコース", "河口湖 温泉 楽天トラベル"],
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
      return data["fuji-five-lakes-car-free-bus-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for fuji-five-lakes-car-free-bus-guide", e);
  }
  return [];
}

export default function FujiFiveLakesCarFreeBusGuidePage() {
  const hotels = loadHotels();

  const busLines = [
    {
      name: "河口湖周遊バス（レッドライン）",
      route: "河口湖駅 ⇄ カチカチ山ロープウェイ ⇄ オルゴールの森 ⇄ 大石公園",
      frequency: "約15分間隔で運行（最も本数が多いメイン路線）",
      highlight: "湖畔沿いの主要名所をほぼ網羅。終点の大石公園からは遮るもののない富士山とラベンダーやコキアの絶景が広がります。",
      colorBadge: "bg-rose-500 text-white"
    },
    {
      name: "西湖周遊バス（グリーンライン）",
      route: "河口湖駅 ⇄ 西湖コウモリ穴 ⇄ 西湖いやしの里根場 ⇄ 富岳風穴",
      frequency: "約30〜40分間隔で運行",
      highlight: "のどかな茅葺き屋根集落の『いやしの里根場』や、天然記念物の溶岩洞窟『富岳風穴・鳴沢氷穴』を巡る大自然満喫ルート。",
      colorBadge: "bg-emerald-600 text-white"
    },
    {
      name: "富士吉田・忍野八海・山中湖周遊バス（ふじっ湖号）",
      route: "河口湖駅 / 富士山駅 ⇄ 忍野八海 ⇄ 花の都公園 ⇄ 山中湖旭日丘",
      frequency: "約60分間隔で運行",
      highlight: "世界遺産の構成資産『忍野八海』の透明な湧水池や、富士山をバックにした広大なフラワーガーデンへ直行可能。",
      colorBadge: "bg-teal-600 text-white"
    }
  ];

  const itinerary = [
    {
      day: "1日目：絶景パノラマロープウェイ＆大石公園の逆さ富士・ほうとうランチ",
      steps: [
        {
          time: "09:30",
          title: "河口湖駅に直行バスまたは特急富士回遊で到着！手荷物預け",
          desc: "新宿から直行バスまたはJR・富士急直通特急で河口湖駅へ。駅構内の手荷物預かり所またはコインロッカーへ荷物を預け、駅前バス案内所で『河口湖・西湖周遊バスフリークーポン』を購入。"
        },
        {
          time: "10:15",
          title: "レッドラインで「富士山パノラマロープウェイ」へ（天上山公園）",
          desc: "駅前から周遊バスで約10分。ロープウェイで標高1,075mの展望台へ登れば、目の前に迫る富士山の裾野と眼下に広がる河口湖のパノラマビュー。『絶景ブランコ』や『かわらけ投げ』も大人気。"
        },
        {
          time: "12:00",
          title: "湖畔の名店で山梨名物「熱々かぼちゃほうとう」ランチ",
          desc: "ロープウェイ乗り場周辺や湖畔沿いに点在する有名ほうとう店へ。地場産野菜と手打ち平打ち麺を特製味噌で煮込んだアツアツほうとうで体を芯から温めます。"
        },
        {
          time: "13:30",
          title: "周遊バス終点「大石公園＆河口湖自然生活館」で逆さ富士鑑賞",
          desc: "湖越しにそびえるシンボリックな富士山と四季折々の花々が競演する富士五湖随一の撮影スポット。カフェでブルーベリーソフトクリームを食べながらゆったり散策。"
        },
        {
          time: "16:30",
          title: "河口湖畔の温泉ホテルへチェックイン ＆ 富士山ビュー露天風呂",
          desc: "駅前送迎バスを利用して宿へ。夕暮れに染まる紅富士や湖畔の静けさを眺めながら天然温泉に浸かり、地産食材の創作会席を堪能。"
        }
      ]
    },
    {
      day: "2日目：五重塔と富士の絶景「新倉山浅間公園」＆湧水郷「忍野八海」",
      steps: [
        {
          time: "08:45",
          title: "富士急行線で下吉田駅へ移動（乗車約14分）",
          desc: "朝の澄んだ空気のなか電車で下吉田駅へ。下吉田駅はレトロな駅舎が可愛らしく、駅前から富士山が見えるフォトスポット。"
        },
        {
          time: "09:15",
          title: "「新倉山浅間公園（忠霊塔）」の世界的絶景ビューポイントへ",
          desc: "咲くや姫階段（398段）を登った先にある展望デッキ。五重塔（忠霊塔）越しに雄大な富士山がそびえる、世界中の旅行者が憧れる日本を代表する絶景を堪能。"
        },
        {
          time: "11:30",
          title: "下吉田駅から富士山駅へ移動 ＆ 路線バスで「忍野八海」へ",
          desc: "富士山駅からふじっ湖号または路線バスで約20分。富士山の雪解け水が数十年の歳月をかけて湧き出す透明度抜群の八つの池（湧池、濁池など）を巡ります。"
        },
        {
          time: "13:30",
          title: "名水で打った忍野そば ＆ 焼きたて草餅の食べ歩き",
          desc: "超軟水の富士山伏流水で作られたコシの強い『忍野そば』を堪能。店先で香ばしく焼かれるヨモギたっぷりの草餅や名水豆腐も絶品。"
        },
        {
          time: "15:45",
          title: "河口湖駅へバスで戻り、お土産選び＆直行バスで東京へ",
          desc: "河口湖駅前で『桔梗信玄餅』や富士山クラフトビールを購入。渋滞知らずの特急列車、または快適な直行高速バスで東京・新宿へ帰路に就きます。"
        }
      ]
    }
  ];

  const travelHacks = [
    {
      q: "周遊バスは混雑する？時間通りに来る？",
      a: "観光ピーク時（土日昼前〜夕方）は道路渋滞でダイヤが10〜20分前後遅れることがあります。特に河口湖駅へ戻る夕方のバスは混み合うため、1本早い便を意識して動くのが鉄則です。"
    },
    {
      q: "バスの支払いは交通系ICカード（Suica等）が使える？",
      a: "富士急バス・周遊バスは全車交通系ICカードに対応しています。ただし何度も乗り降りする場合は、窓口やデジタルチケットで『周遊バスフリーパス』を購入する方が圧倒的にお得です。"
    },
    {
      q: "スーツケースなどの大きな荷物がある場合は？",
      a: "河口湖駅構内・改札横に大型ロッカーがあるほか、観光案内所で手荷物一時預かり所が営業しています。また多くの提携ホテルへ手荷物を当日配送してくれるサービスもあります。"
    },
    {
      q: "富士山が綺麗に見える時間帯はいつ？",
      a: "圧倒的に『早朝〜午前10時頃』です！昼過ぎからは気温上昇に伴い雲が湧きやすくなるため、展望台や新倉山浅間公園は午前中の早いスケジュールに組み込みましょう。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans text-slate-800">
      {/* ヒーローセクション（Teal & Lake Green Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-700 via-emerald-700 to-cyan-900 text-white p-8 md:p-14 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 text-[180px] text-white/5 font-black select-none pointer-events-none tracking-tighter">
          FUJI
        </div>

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-white text-teal-800 px-3.5 py-1 rounded-full uppercase shadow-md">
              BUS & TRAIN COMPLETE GUIDE
            </span>
            <span className="text-xs font-bold bg-teal-950/40 text-teal-100 px-3.5 py-1 rounded-full border border-teal-300/30">
              周遊バス・富士急行線活用
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white drop-shadow-sm">
            【富士五湖・河口湖 車なし観光ガイド】<br />
            <span className="text-teal-200">周遊バス・富士急行で回る！逆さ富士・忍野八海・浅間神社モデルコース</span>
          </h1>

          <p className="text-sm md:text-base text-teal-50 leading-relaxed font-medium pt-2">
            「富士五湖を巡りたいけれど運転が不安…」そんな心配は一切無用です！河口湖駅をハブとして、15分間隔で走る周遊バス（レッドライン/グリーンライン）やレトロな富士急行線を乗り継げば、車がなくても忍野八海、新倉山浅間公園、天上山パノラマロープウェイの絶景を効率よく巡ることができます。
          </p>

          <div className="pt-3 flex flex-wrap gap-3 text-xs font-bold text-teal-100">
            <div className="flex items-center gap-1.5 bg-teal-900/60 px-3 py-1.5 rounded-lg border border-teal-400/20">
              <span className="text-teal-300">🚌</span> レッドライン＆グリーンラインで湖畔直結
            </div>
            <div className="flex items-center gap-1.5 bg-teal-900/60 px-3 py-1.5 rounded-lg border border-teal-400/20">
              <span className="text-teal-300">🚆</span> 富士急行線で新倉山浅間公園・富士山駅へ
            </div>
            <div className="flex items-center gap-1.5 bg-teal-900/60 px-3 py-1.5 rounded-lg border border-teal-400/20">
              <span className="text-teal-300">♨️</span> 富士山一望＆駅送迎付き温泉宿
            </div>
          </div>
        </div>
      </section>

      {/* 周遊バス路線ネットワークの全貌 */}
      <section className="bg-white border-2 border-teal-100 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-teal-100 pb-4">
          <div className="inline-flex items-center gap-2 text-teal-700 font-black text-xs tracking-wider uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            TRANSIT MAP & LINES
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
            車なし観光の主役！富士五湖周遊バス 3つの主要ルート
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            河口湖駅前バスターミナルから発着する3本の周遊バスを使い分けるのが攻略の鍵です。
          </p>
        </div>

        <div className="space-y-4">
          {busLines.map((line, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-teal-50/60 via-emerald-50/40 to-slate-50 border border-teal-200/70 rounded-2xl p-5 hover:shadow-md transition-shadow space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`text-[11px] font-black px-3 py-1 rounded-full shadow-sm ${line.colorBadge}`}>
                  {line.name}
                </span>
                <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-lg border border-slate-200">
                  ⏱ {line.frequency}
                </span>
              </div>
              <div className="text-xs md:text-sm font-bold text-slate-800 bg-white/80 p-2.5 rounded-xl border border-teal-100">
                主な経由地: {line.route}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{line.highlight}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-900 text-emerald-100 rounded-2xl p-5 text-xs md:text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-bold text-white flex items-center gap-2">
              <span>🎟️</span> おすすめフリーパス：河口湖・西湖周遊バスフリークーポン
            </div>
            <p className="text-emerald-200">
              大人1,700円でレッドライン・グリーンライン・ブルーラインが2日間乗り放題！3回以上の乗降で元が取れます。
            </p>
          </div>
          <Link
            href="/tokyo-fujikawaguchiko-highway-bus-guide"
            className="shrink-0 bg-white text-emerald-950 hover:bg-emerald-100 font-black px-4 py-2.5 rounded-xl transition shadow text-xs"
          >
            東京〜河口湖 直行バス比較を見る →
          </Link>
        </div>
      </section>

      {/* 1泊2日モデルコース */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            PERFECT ITINERARY
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">
            【周遊バス直結】富士五湖 1泊2日 王道モデルコース
          </h2>
          <p className="text-slate-600 text-xs md:text-sm">
            午前中の富士山くっきりタイムに絶景スポットを配置した、写真映えとグルメの黄金ルート。
          </p>
        </div>

        <div className="space-y-8">
          {itinerary.map((dayPlan, dayIdx) => (
            <div
              key={dayIdx}
              className="bg-white border-2 border-teal-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-teal-100 pb-4">
                <span className="w-9 h-9 bg-teal-700 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-sm">
                  D{dayIdx + 1}
                </span>
                <h3 className="text-lg md:text-xl font-black text-slate-900">{dayPlan.day}</h3>
              </div>

              <div className="relative pl-6 md:pl-8 border-l-2 border-teal-300 space-y-8 ml-3">
                {dayPlan.steps.map((step, sIdx) => (
                  <div key={sIdx} className="relative group">
                    <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-4 border-teal-600 group-hover:scale-125 transition-transform" />
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200 font-mono">
                          {step.time}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm md:text-base">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 車なし旅のQ&A ハック */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
        <div>
          <span className="text-teal-400 text-xs font-black tracking-widest uppercase">
            CAR-FREE TRAVEL FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mt-1">
            富士五湖の「車なし・バス旅」でよくある疑問＆攻略法
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {travelHacks.map((hack, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-teal-500/20 rounded-2xl p-5 space-y-2 backdrop-blur-sm"
            >
              <div className="font-bold text-teal-300 text-sm flex items-start gap-2">
                <span className="bg-teal-500/30 text-teal-300 text-xs px-2 py-0.5 rounded-md shrink-0">
                  Q
                </span>
                <span>{hack.q}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">{hack.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ホテル＆旅館紹介（Rakuten Travel） */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-teal-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-teal-700 tracking-wider uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-teal-600"></span>
              ONSEN HOTELS & RESORTS
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              車なしでも快適！河口湖駅周辺・送迎あり＆富士山ビューの温泉宿
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              駅から徒歩圏、または河口湖駅から無料送迎シャトルを運行している人気ホテルを厳選。
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fcoupon%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-md transition shrink-0"
          >
            <span>🎟️</span> 富士五湖の宿クーポンをGETする
          </a>
        </div>

        {hotels.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {hotels.map((hotel) => {
              const specialText = hotel.hotelSpecial || "";
              const minCharge = hotel.hotelMinCharge
                ? `${hotel.hotelMinCharge.toLocaleString()}円〜`
                : "プラン参照";
              return (
                <div
                  key={hotel.hotelNo}
                  className="bg-white border-2 border-teal-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="relative h-52 bg-slate-100 overflow-hidden">
                      {hotel.hotelImageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-bold">
                          NO IMAGE
                        </div>
                      )}
                      {hotel.nearestStation && (
                        <span className="absolute top-3 left-3 bg-teal-800/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                          🚉 {hotel.nearestStation}駅アクセス
                        </span>
                      )}
                      {hotel.reviewAverage && (
                        <span className="absolute top-3 right-3 bg-amber-500 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                          ★ {hotel.reviewAverage.toFixed(1)}
                          {hotel.reviewCount && (
                            <span className="text-[9px] opacity-80">({hotel.reviewCount})</span>
                          )}
                        </span>
                      )}
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-teal-700 transition-colors">
                        {hotel.hotelName}
                      </h3>

                      {specialText && (
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-teal-50/50 p-2.5 rounded-xl border border-teal-100">
                          {specialText}
                        </p>
                      )}

                      <div className="text-xs text-slate-500 space-y-1">
                        {hotel.access && (
                          <div className="flex items-start gap-1.5">
                            <span className="text-teal-700 font-bold shrink-0">交通:</span>
                            <span className="line-clamp-2">{hotel.access}</span>
                          </div>
                        )}
                        {hotel.address1 && hotel.address2 && (
                          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                            <span className="shrink-0">📍</span>
                            <span>{hotel.address1}{hotel.address2}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                    <div className="flex items-baseline justify-between mb-3 pt-3">
                      <span className="text-xs font-bold text-slate-500">最安料金目安 (1名)</span>
                      <span className="text-xl font-black text-teal-700">{minCharge}</span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-600 hover:to-emerald-600 text-white font-black text-sm py-3 px-4 rounded-xl shadow-md transition-all group-hover:shadow-teal-200"
                    >
                      楽天トラベルでプラン空室を見る ➜
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-teal-50 border border-teal-200 p-8 rounded-3xl text-center text-slate-600">
            宿泊施設情報を取得中、または該当施設を更新中です。
          </div>
        )}
      </section>

      {/* 内部リンク＆関連記事 */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="font-black text-slate-800 text-base md:text-lg flex items-center gap-2">
          <span>🔗</span> あわせて読みたい山梨・富士山エリアのバス＆観光ガイド
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/tokyo-fujikawaguchiko-highway-bus-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-sm transition group"
          >
            <div className="text-[11px] font-bold text-teal-700 mb-1">直行バス徹底ガイド</div>
            <div className="font-black text-slate-800 group-hover:text-teal-700 text-sm">
              【新宿・東京から富士急・河口湖 直行バス】電車とどっちが安い？料金・時間比較 →
            </div>
          </Link>
          <Link
            href="/yamanashi-grape-bus-tour-daytrip-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-sm transition group"
          >
            <div className="text-[11px] font-bold text-teal-700 mb-1">山梨フルーツ狩りツアー</div>
            <div className="font-black text-slate-800 group-hover:text-teal-700 text-sm">
              【山梨 シャインマスカット狩り 日帰りバスツアー】巨峰食べ放題＆勝沼ワイナリー試飲 →
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
