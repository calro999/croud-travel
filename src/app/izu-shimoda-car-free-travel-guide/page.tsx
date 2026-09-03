import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【伊豆・下田 車なし観光 1泊2日モデルコース】伊豆急行＆路線バスで巡る白浜海岸・ペリーロード・金目鯛旅 ｜ 日本全国・旅宿クラウド",
  description: "レンタカーなしで楽しむ伊豆急下田の旅！特急踊り子直通、伊豆急行フリーきっぷ、東海バスを活用して白浜大浜海岸、ペリーロードのレトロカフェ、下田海中水族館、駅前＆海一望の温泉宿を満喫する完全ガイド。",
  keywords: ["izu-shimoda-car-free-travel-guide", "伊豆 下田 車なし", "特急踊り子 車なし", "伊豆急行 モデルコース", "下田 東海バス", "ペリーロード カフェ", "白浜海岸 バス", "楽天トラベル"],
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
      return data["izu-shimoda-car-free-travel-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for izu-shimoda-car-free-travel-guide", e);
  }
  return [];
}

export default function IzuShimodaCarFreeTravelGuidePage() {
  const hotels = loadHotels();

  const transitPasses = [
    {
      name: "伊豆満喫フリーきっぷ（伊豆急行）",
      price: "大人 2,200円 / こども 1,100円",
      validity: "伊東駅〜伊豆急下田駅間が1日乗り降り自由（普通・快速列車）",
      merit: "伊東〜下田間の片道運賃（1,650円）を考えると、往復するだけで元が取れる最強チケット。特急券を追加購入すれば特急踊り子号にも乗車可能です。",
      tag: "電車派イチオシ"
    },
    {
      name: "東海バス「下田名所めぐり遊フリーきっぷ」",
      price: "大人 1,600円 / こども 800円（2日間有効）",
      validity: "下田駅発着の主要観光地（白浜海岸・爪木崎・下田海中水族館など）指定エリア乗り放題",
      merit: "駅から各ビーチや岬への路線バスが2日間乗り放題。観光施設の割引優待特典も付帯しており、下田の観光スポットを網羅できます。",
      tag: "バス派必須"
    },
    {
      name: "JR特急「踊り子号」えきねっとトクだ値",
      price: "東京〜伊豆急下田 片道 約3,500円〜（指定席）",
      validity: "東京・新宿〜伊豆急下田 直通",
      merit: "運転免許や乗り換えのストレス一切不要。東京駅から下田駅まで海沿いを眺めながら約2時間40分で座ったまま直行できます。",
      tag: "直通特急"
    }
  ];

  const itinerary = [
    {
      day: "1日目：特急踊り子で下田へ！白浜ブルーの絶景＆ペリーロード散策",
      steps: [
        {
          time: "09:00",
          title: "東京駅発「特急踊り子」で乗り換えなしの絶景列車旅",
          desc: "東京駅または新宿駅から特急踊り子号に乗車。熱海を過ぎると相模湾から伊豆急行線の東伊豆海岸線へ。進行方向左側の窓際席からは伊豆諸島や青い海が広がります。"
        },
        {
          time: "11:45",
          title: "伊豆急下田駅 到着 ＆ 駅前で「下田名物・金目鯛づくしランチ」",
          desc: "駅を出てすぐの海鮮料理店街へ。獲れたて地金目鯛の『姿煮付け定食』や、皮目を香ばしく炙った『金目鯛の紅白海鮮丼』で旅の景気づけ！"
        },
        {
          time: "13:00",
          title: "東海バス（9番のりば）で「白浜大浜海岸＆白浜神社」へ（乗車約15分）",
          desc: "エメラルドグリーンの透き通る海と真っ白な砂浜が広がる南伊豆随一の絶景ビーチ。海岸の岩礁に立つ白浜神社の赤い鳥居はSNS映え抜群のパワースポットです。"
        },
        {
          time: "15:30",
          title: "バスで駅へ戻り「ペリーロード」のなまこ壁とレトロカフェ巡り",
          desc: "下田駅から徒歩10分の歴史保存エリア。了仙寺から下田公園へと続く石畳の小道に、幕末の情緒を残すなまこ壁や伊豆石の古民家カフェ・アンティーク雑貨店が点在します。"
        },
        {
          time: "17:30",
          title: "下田港・海沿いの温泉宿にチェックイン ＆ オーシャンビュー露天風呂",
          desc: "駅徒歩圏内または無料送迎のある温泉宿へ。下田港の船明かりを眺めながら弱アルカリ性の美肌温泉に浸かり、夕食には伊勢海老や金目鯛の磯会席を堪能。"
        }
      ]
    },
    {
      day: "2日目：イルカに出会う水族館＆下田ロープウェイから伊豆七島を一望",
      steps: [
        {
          time: "09:00",
          title: "下田駅から路線バスで「下田海中水族館」へ（乗車約7分）",
          desc: "自然の入江をそのまま利用した水族館。海上ステージで行われるイルカショーや、アザラシ・ペンギンとの触れ合いを間近で体感。車がなくても路線バスが頻発していてアクセス抜群。"
        },
        {
          time: "12:00",
          title: "駅前に戻り「下田時計台フロント」や港町食堂で地魚ランチ＆お土産探し",
          desc: "下田名産のひもの、下田開国かりんとう、金目鯛せんべいなどをお買い物。駅前には足湯『開国の湯』もあり、列車待ちの時間をゆったり過ごせます。"
        },
        {
          time: "13:30",
          title: "駅前すぐ「下田ロープウェイ」で寝姿山展望台へ（所要3分）",
          desc: "女性の仰向けに寝ている姿に似ていることから名付けられた寝姿山。山頂の『ザ・ロイヤルハウス』でプレミアムなコーヒーを味わいながら、下田港と伊豆七島の大パノラマを展望。"
        },
        {
          time: "15:30",
          title: "伊豆急下田駅より「特急踊り子」またはリゾート21で東京へ帰路",
          desc: "伊豆急行自慢の展望普通列車『リゾート21（黒船電車・キンメ電車）』は普通運賃のみで海向きパノラマシートに乗車可能！最後まで電車旅を満喫しながら帰路へ。"
        }
      ]
    }
  ];

  const travelTips = [
    {
      title: "荷物は駅の観光案内所またはコインロッカーへ即預け",
      desc: "伊豆急下田駅改札を出てすぐのコインロッカーのほか、下田市観光協会で手荷物預かりサービス（有料）を実施。身軽になってすぐにバスへ飛び乗るのが鉄則です。"
    },
    {
      title: "下田の路線バスはICカード（Suica/PASMO）利用可能",
      desc: "東海バスは主要路線で交通系ICカードに対応済み。小銭の両替を気にする必要がなく、スムーズに乗降できます（一部フリーパス併用がお得）。"
    },
    {
      title: "リゾート21（キンメ電車・黒船電車）の運行ダイヤを確認",
      desc: "普通乗車券のみで乗れる観光列車『リゾート21』。座席が海側を向いており、車なし旅行なら絶対乗りたい名物電車。毎日運行ダイヤが公開されています。"
    },
    {
      title: "夕暮れのペリーロードはガス灯が灯る幻想タイム",
      desc: "1泊2日だからこそ味わえるのが夕暮れから夜のペリーロード。街灯が灯り川面に反射する風景は、日帰り旅行者には見られない情緒たっぷりの時間です。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans text-slate-800">
      {/* ヒーローセクション（Cyan & Ocean Blue Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-800 text-white p-8 md:p-14 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-10 text-[160px] text-white/5 font-black select-none pointer-events-none tracking-widest">
          SHIMODA
        </div>

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-white text-cyan-700 px-3.5 py-1 rounded-full uppercase shadow-md">
              CAR-FREE PUBLIC TRANSIT TRIP
            </span>
            <span className="text-xs font-bold bg-cyan-950/40 text-cyan-100 px-3.5 py-1 rounded-full border border-cyan-300/30">
              特急踊り子直通 ＆ 東海バス
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white drop-shadow-sm">
            【伊豆・下田 車なし観光 1泊2日モデルコース】<br />
            <span className="text-cyan-200">伊豆急行＆路線バスで巡る白浜海岸・ペリーロード・金目鯛旅</span>
          </h1>

          <p className="text-sm md:text-base text-cyan-50 leading-relaxed font-medium pt-2">
            「伊豆の先端・下田は車がないと行けない」と思っていませんか？実は東京駅から特急踊り子号で乗り換えなし直通！駅前からは路線バスと伊豆急行線が網の目のように結ばれ、エメラルドグリーンの白浜大浜海岸や風情あふれるペリーロード、絶品金目鯛料理まで、レンタカーいらずで驚くほど快適に巡ることができます。
          </p>

          <div className="pt-3 flex flex-wrap gap-4 text-xs font-bold text-cyan-100">
            <div className="flex items-center gap-1.5 bg-cyan-800/60 px-3 py-1.5 rounded-lg border border-cyan-400/20">
              <span className="text-cyan-300">🚆</span> 特急踊り子で東京から直通2時間40分
            </div>
            <div className="flex items-center gap-1.5 bg-cyan-800/60 px-3 py-1.5 rounded-lg border border-cyan-400/20">
              <span className="text-cyan-300">🚌</span> 下田駅発着の東海バスで主要スポット直結
            </div>
            <div className="flex items-center gap-1.5 bg-cyan-800/60 px-3 py-1.5 rounded-lg border border-cyan-400/20">
              <span className="text-cyan-300">🐟</span> 名物金目鯛の姿煮・炙り丼を満喫
            </div>
          </div>
        </div>
      </section>

      {/* 車なし旅を最強にする公共交通きっぷ比較 */}
      <section className="bg-white border-2 border-cyan-100 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-cyan-100 pb-4">
          <div className="inline-flex items-center gap-2 text-cyan-600 font-black text-xs tracking-wider uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            DISCOUNT TRANSIT PASSES
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
            下田の車なし旅を身軽にするお得なフリーきっぷ3選
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            下田エリアは鉄道とバスが充実。移動スタイルに合わせてきっぷを選ぶだけで、交通費を大きく節約できます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {transitPasses.map((pass, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-cyan-50/50 to-sky-50/30 border border-cyan-200/80 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <span className="inline-block bg-cyan-600 text-white text-[10px] font-black tracking-wider px-2.5 py-0.5 rounded-full">
                  {pass.tag}
                </span>
                <h3 className="font-black text-slate-900 text-lg leading-snug">{pass.name}</h3>
                <div className="text-cyan-700 font-extrabold text-sm">{pass.price}</div>
                <div className="bg-white/80 p-3 rounded-xl border border-cyan-100 text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-slate-700">有効区間:</div>
                  <div>{pass.validity}</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{pass.merit}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cyan-900 text-cyan-100 rounded-2xl p-5 text-xs md:text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-bold text-white flex items-center gap-2">
              <span>💡</span> 電車ファン必見「リゾート21（黒船電車・キンメ電車）」
            </div>
            <p className="text-cyan-200">
              熱海〜伊豆急下田間を走る名物列車『リゾート21』は特別料金不要！普通乗車券のみで海向きパノラマシートを体験できます。
            </p>
          </div>
          <Link
            href="/tokyo-izu-atami-bus-vs-train-guide"
            className="shrink-0 bg-white text-cyan-900 hover:bg-cyan-100 font-black px-4 py-2.5 rounded-xl transition shadow text-xs"
          >
            東京〜伊豆・熱海アクセス比較を見る →
          </Link>
        </div>
      </section>

      {/* 1泊2日 タイムスケジュール・モデルコース */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
            COMPLETE TIME TABLE
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">
            【保存版】下田 1泊2日 車なし観光モデルコース
          </h2>
          <p className="text-slate-600 text-xs md:text-sm">
            バスと電車の接続を考慮した無理のないタイムスケジュール。乗り遅れや待ち時間を防ぐ実践的なルートです。
          </p>
        </div>

        <div className="space-y-8">
          {itinerary.map((dayPlan, dayIdx) => (
            <div
              key={dayIdx}
              className="bg-white border-2 border-cyan-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-cyan-100 pb-4">
                <span className="w-9 h-9 bg-cyan-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-sm">
                  D{dayIdx + 1}
                </span>
                <h3 className="text-lg md:text-xl font-black text-slate-900">{dayPlan.day}</h3>
              </div>

              <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-200 space-y-8 ml-3">
                {dayPlan.steps.map((step, sIdx) => (
                  <div key={sIdx} className="relative group">
                    <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-4 border-cyan-500 group-hover:scale-125 transition-transform" />
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-200/60 font-mono">
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

      {/* 車なし旅を成功させる実践TIPS */}
      <section className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
        <div>
          <span className="text-cyan-400 text-xs font-black tracking-widest uppercase">
            LOCAL EXPERT ADVICE
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mt-1">
            伊豆急下田の「車なし旅」を120%楽しむ実践TIPS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {travelTips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-cyan-500/20 rounded-2xl p-5 space-y-2 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-sm">
                <span className="text-base">✓</span>
                {tip.title}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 楽天トラベル クーポン＆ホテルセクション */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-cyan-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-cyan-600 tracking-wider uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              HOTEL & ONSEN SELECTION
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              車なし旅行に最適！下田駅前・送迎付き＆海一望の温泉宿
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              駅から徒歩圏内、または駅からの無料送迎バスがある宿を厳選。重い荷物があっても安心です。
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fcoupon%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xs px-4 py-2.5 rounded-xl shadow-md transition shrink-0"
          >
            <span>🎟️</span> 楽天トラベル温泉宿クーポンを獲得する
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
                  className="bg-white border-2 border-cyan-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
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
                        <span className="absolute top-3 left-3 bg-cyan-700/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
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
                      <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-cyan-700 transition-colors">
                        {hotel.hotelName}
                      </h3>

                      {specialText && (
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-cyan-50/50 p-2.5 rounded-xl border border-cyan-100">
                          {specialText}
                        </p>
                      )}

                      <div className="text-xs text-slate-500 space-y-1">
                        {hotel.access && (
                          <div className="flex items-start gap-1.5">
                            <span className="text-cyan-600 font-bold shrink-0">交通:</span>
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
                      <span className="text-xl font-black text-cyan-700">{minCharge}</span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-black text-sm py-3 px-4 rounded-xl shadow-md transition-all group-hover:shadow-cyan-200"
                    >
                      楽天トラベルでプラン空室を見る ➜
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-cyan-50 border border-cyan-200 p-8 rounded-3xl text-center text-slate-600">
            宿泊施設情報を取得中、または該当施設を更新中です。
          </div>
        )}
      </section>

      {/* 内部リンク＆関連記事 */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="font-black text-slate-800 text-base md:text-lg flex items-center gap-2">
          <span>🔗</span> あわせて読みたい伊豆・熱海エリアの交通＆費用ガイド
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/tokyo-izu-atami-bus-vs-train-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-sm transition group"
          >
            <div className="text-[11px] font-bold text-cyan-600 mb-1">アクセス徹底比較</div>
            <div className="font-black text-slate-800 group-hover:text-cyan-700 text-sm">
              【東京から熱海・伊豆 安く行く方法】新幹線・特急踊り子・普通列車を徹底比較！ →
            </div>
          </Link>
          <Link
            href="/atami-izu-travel-budget-guide"
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-sm transition group"
          >
            <div className="text-[11px] font-bold text-cyan-600 mb-1">旅行費用シミュレーション</div>
            <div className="font-black text-slate-800 group-hover:text-cyan-700 text-sm">
              【熱海・伊豆旅行 費用】日帰り・1泊2日でいくら？温泉リゾートの全費用白書 →
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
