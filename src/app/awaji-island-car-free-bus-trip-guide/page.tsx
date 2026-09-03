import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【淡路島 車なし観光ガイド】高速バス＆無料シャトルで回る！ニジゲンノモリ・西海岸カフェ・洲本温泉 ｜ 日本全国・旅宿クラウド",
  description: "車がないと行けないと思われがちな淡路島を高速バスと島内周遊シャトルで完全攻略！三ノ宮・新神戸から直行バス、明石海峡大橋を渡って楽しむ最新西海岸リゾートスポット＆洲本温泉名旅館。",
  keywords: [
    "淡路島 車なし 観光",
    "淡路島 高速バス",
    "淡路島 シャトルバス 西海岸",
    "ニジゲンノモリ バス 行き方",
    "洲本温泉 高速バス",
    "淡路島 1泊2日 車なし モデルコース",
    "三ノ宮 淡路島 バス",
    "北淡路周遊バス",
    "楽天トラベル 淡路島"
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
      return data["awaji-island-car-free-bus-trip-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for awaji-island-car-free-bus-trip-guide", e);
  }
  return [];
}

export default function AwajiIslandCarFreePage() {
  const hotels = loadHotels();

  const busRoutes = [
    {
      line: "北淡路西海岸ライン（神姫バス／本四海峡バス）",
      section: "神戸三宮・新神戸 ⇄ 淡路IC ⇄ ニジゲンノモリ ⇄ 幸せのパンケーキ ⇄ 浅野南",
      freq: "1日10〜15往復（直行便あり）",
      fare: "三宮〜ニジゲンノモリ 約700円 / 西海岸エリア 約1,100円〜1,300円",
      desc: "明石海峡大橋を渡り、パソナグループが展開する人気アニメパーク「ニジゲンノモリ」や西海岸シーサイドカフェへ直結する最もホットな路線。"
    },
    {
      line: "洲本温泉直通高速バス（神姫・淡路交通・本四海峡）",
      section: "三ノ宮・大阪駅（梅田） ⇄ 洲本バスセンター ⇄ 洲本温泉各ホテル前",
      freq: "三宮発着は30分間隔で頻発運行",
      fare: "三宮〜洲本BC 2,050円 / 大阪〜洲本BC 2,550円",
      desc: "ホテルニューアワジグループをはじめとする温泉旅館街へ直行。荷物が多くても乗り換えゼロで宿の玄関先まで行ける安心ルート。"
    },
    {
      line: "無料トラム＆シャトルバス（パソナ西海岸周遊）",
      section: "岩屋ポート・淡路IC ⇄ ニジゲンノモリ ⇄ のじまスコーラ ⇄ クラフトサーカス ⇄ 青海波 ⇄ 禅坊靖寧",
      freq: "毎時1〜2便運行（乗車無料）",
      fare: "完全無料（どなたでも利用可）",
      desc: "車なし観光客の強い味方！西海岸の点在する絶景オーシャンビュー施設を巡れる無料周遊シャトル。時刻表を合わせて効率よく移動可能。"
    },
    {
      line: "淡路ジェノバライン（高速船）＋コミュニティバス",
      section: "JR明石駅徒歩すぐ「明石港」 ⇄ 「岩屋港」（所要わずか13分）",
      freq: "20〜40分間隔で終日運航",
      fare: "片道大人 600円",
      desc: "明石海峡大橋の真下をくぐる爽快クルーズ！渋滞知らずで島入りでき、岩屋港から島内コミュニティバスや無料シャトルへスムーズに接続。"
    }
  ];

  const itinerary = [
    {
      day: "DAY 1：アニメパークとオーシャンビュー西海岸リゾートを満喫",
      steps: [
        {
          time: "09:30",
          title: "三ノ宮バスターミナル（ミント神戸）から高速バス出発",
          desc: "地下鉄・JR・阪神・阪急が集合する三ノ宮から直行高速バスに乗車。ダイナミックな明石海峡大橋の空中ドライブは圧巻のオーシャンビュー！"
        },
        {
          time: "10:15",
          title: "「ニジゲンノモリ」または「淡路ハイウェイオアシス」下車",
          desc: "緑豊かな県立淡路島公園内に広がる体験型エンタメパーク。ドラゴンクエストアイランドやゴジラ迎撃作戦、クレヨンしんちゃんなど世界観に没入。"
        },
        {
          time: "12:30",
          title: "無料シャトルバスで西海岸へ！海沿いカフェランチ",
          desc: "パソナ無料シャトルに乗り「のじまスコーラ」または「クラフトサーカス」へ。名物の淡路島玉ねぎピッツァや淡路牛ハンバーガーを海風とともに堪能。"
        },
        {
          time: "15:00",
          title: "夕暮れの播磨灘を眺めるシーサイドウォーク＆カフェタイム",
          desc: "日本の夕陽百選に選ばれる淡路西海岸。波の音をBGMに焼きたてのパンケーキやジェラートを味わい、フォトジェニックな夕景写真を撮影。"
        },
        {
          time: "17:00",
          title: "路線バスまたは高速バスで洲本温泉へチェックイン",
          desc: "三浦湾・紀淡海峡を臨む名湯「洲本温泉」へ。海と空が一体化するインフィニティ露天風呂で旅の疲れを癒やし、新鮮な鯛や伊勢海老の海鮮会席に舌鼓。"
        }
      ]
    },
    {
      day: "DAY 2：歴史薫る洲本城下町散策＆淡路島ご当地おみやげハント",
      steps: [
        {
          time: "09:30",
          title: "旅館をチェックアウトし、洲本バスセンターへ",
          desc: "旅館の無料送迎バスで洲本バスセンターへ。コインロッカーに手荷物を預けて身軽に散策スタート。"
        },
        {
          time: "10:00",
          title: "洲本レトロこみち＆赤レンガ倉庫（S BRICK）散策",
          desc: "城下町の風情が残る古民家リノベーションエリアを散策。明治時代の紡績工場を再生した「S BRICK」でクラフト体験や地元スイーツを満喫。"
        },
        {
          time: "12:00",
          title: "ランチ：淡路島生しらす丼・鯛茶漬け",
          desc: "海沿いの割烹や食堂で、春〜秋限定の淡路島生しらす丼や、サワラの炙り丼を味わう極上ランチ。"
        },
        {
          time: "13:30",
          title: "洲本バスセンターでおみやげ購入＆高速バスで帰路へ",
          desc: "甘みたっぷりの淡路島産玉ねぎスナックやドレッシングをまとめ買い。三ノ宮駅・大阪駅行きの高速バスに乗り込み、快適に帰路へ。"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
      {/* ヒーローヘッダー：インディゴ＆シアンの爽快シーサイドトーン */}
      <div className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 text-white overflow-hidden py-14 md:py-20 px-4">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-black">
            <span className="bg-sky-400 text-slate-950 px-3 py-1 rounded-full uppercase tracking-wider">
              車なし淡路島完全攻略
            </span>
            <span className="bg-white/10 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full backdrop-blur-sm">
              三宮・大阪発 高速バス ＋ 無料西海岸シャトル
            </span>
            <span className="text-slate-300 ml-auto hidden sm:inline">
              所要期間：日帰り〜1泊2日
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight font-journal-serif text-white">
            【淡路島 車なし観光ガイド】<br className="hidden sm:inline" />
            高速バス＆無料シャトルで回る！西海岸カフェ・ニジゲンノモリ・洲本温泉
          </h1>

          <p className="text-sm md:text-base text-slate-200 max-w-3xl leading-relaxed">
            「淡路島＝ドライブ必須」はもう古い！神戸三宮から高速バスでわずか40分。島内は無料シャトルバスや周遊バス網が劇的に進化し、運転免許がなくても絶景オーシャンビューカフェ、人気アニメテーマパーク、老舗の洲本温泉旅館までラクラク直行できます。
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#routes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-indigo-400 hover:from-sky-300 hover:to-indigo-300 text-slate-950 font-black px-6 py-3 rounded-xl shadow-lg transition duration-200 text-xs sm:text-sm"
            >
              <span>🚌</span>
              <span>主要バス路線＆無料シャトルを見る</span>
            </a>
            <a
              href="#itinerary"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 px-6 py-3 rounded-xl backdrop-blur-sm transition duration-200 text-xs sm:text-sm"
            >
              <span>🗓️</span>
              <span>1泊2日モデルコース</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8 space-y-12">
        {/* 🏷️ 楽天トラベル 高速バス＆宿泊予約バナー */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-sky-900 rounded-2xl p-5 md:p-6 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4 border border-indigo-700/50">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-block bg-sky-400 text-slate-950 text-[11px] font-black px-2.5 py-0.5 rounded">
              楽天トラベル 高速バス・宿クーポン
            </span>
            <h3 className="text-base sm:text-lg font-black font-journal-serif">
              大阪・神戸 ⇄ 淡路島の高速バス＆洲本温泉が最大割引！
            </h3>
            <p className="text-xs text-slate-300">
              楽天ポイントが貯まる・使える。三宮発着の往復予約と温泉旅館セット予約がお得！
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-5 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-black rounded-xl shadow transition"
            >
              🚌 高速バスを予約
            </a>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcoupon%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs font-black rounded-xl shadow transition"
            >
              🏷️ 宿泊クーポン
            </a>
          </div>
        </div>

        {/* 🚌 バス交通網・無料シャトル案内セクション */}
        <section id="routes" className="bg-white border border-indigo-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <div className="text-xs font-black text-indigo-700 tracking-wider uppercase flex items-center gap-1">
              <span>🗺️ PUBLIC TRANSIT STRATEGY</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 mt-1">
              淡路島を車なしで回る4大交通ルート
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              神戸・大阪から島内へのアクセス方法と、島内を回る無料シャトルの使いこなしテクニック。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {busRoutes.map((route, idx) => (
              <div
                key={idx}
                className="border border-indigo-100/80 bg-indigo-50/30 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:bg-indigo-50/70 transition"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-black text-slate-900 text-sm md:text-base font-journal-serif">
                      {route.line}
                    </h3>
                  </div>
                  <div className="text-xs font-bold text-indigo-900 bg-indigo-100/80 px-2.5 py-1 rounded">
                    区間：{route.section}
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600 font-semibold pt-1">
                    <span>⏱ {route.freq}</span>
                    <span>💴 {route.fare}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {route.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 車なし淡路島の重要ポイント */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 space-y-1 text-xs md:text-sm text-slate-800">
            <div className="font-bold text-indigo-950 flex items-center gap-1.5">
              <span>💡 無料シャトルバス乗降のポイント</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              西海岸の各施設（のじまスコーラ・クラフトサーカス・青海波など）を巡る無料シャトルは、「淡路IC」「岩屋ポート」から毎時発着しています。高速バスを「淡路IC」で降りて階段を下りると無料シャトル乗り場に直結しているので迷いません！
            </p>
          </div>
        </section>

        {/* 🗓️ 1泊2日タイムスケジュール */}
        <section id="itinerary" className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
          <div className="border-b border-slate-100 pb-3">
            <div className="text-xs font-black text-indigo-700 tracking-wider uppercase">
              🗓️ 1 NIGHT 2 DAYS ITINERARY
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 mt-1">
              車なしで絶景＆美食を満喫！淡路島1泊2日モデルプラン
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              三ノ宮発着で無駄のない、西海岸カフェと洲本温泉を欲張る王道タイムスケジュール。
            </p>
          </div>

          <div className="space-y-8">
            {itinerary.map((dayPlan, dIdx) => (
              <div key={dIdx} className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-indigo-900 text-white font-black text-xs px-3 py-1 rounded-full">
                    DAY {dIdx + 1}
                  </span>
                  <h3 className="font-black text-base md:text-lg text-slate-900 font-journal-serif">
                    {dayPlan.day}
                  </h3>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-indigo-200">
                  {dayPlan.steps.map((step, sIdx) => (
                    <div key={sIdx} className="relative space-y-1">
                      <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-600 border-2 border-white shadow-sm" />
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-xs font-black text-indigo-900 bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200">
                          {step.time}
                        </span>
                        <h4 className="text-sm md:text-base font-bold text-slate-900">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-0.5">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🏨 ホテルカードセクション */}
        <section id="hotels" className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <div className="text-xs font-black text-indigo-700 tracking-wider uppercase">
              🏨 SELECTED SUMOTO ONSEN RESORTS
            </div>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900 mt-1">
              高速バス直通＆無料送迎あり！洲本温泉の極上シーサイド宿
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              洲本バスセンターからのアクセスが抜群で、紀淡海峡の絶景露天風呂と淡路牛・新鮮魚介が自慢の旅館。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <article
                  key={hotel.hotelNo}
                  className="flex flex-col justify-between border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-200 group"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-slate-100">
                      {hotel.hotelImageUrl ? (
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-bold">
                          {hotel.hotelName}
                        </div>
                      )}
                      {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 && (
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-slate-950/90 text-sky-300 px-2 py-0.5 rounded shadow">
                          1名 ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between gap-1 text-[11px]">
                        {hotel.nearestStation && (
                          <span className="text-indigo-800 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                            🚌 {hotel.nearestStation}アクセス
                          </span>
                        )}
                        {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                          <span className="text-indigo-700 font-black">
                            ⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)
                          </span>
                        )}
                      </div>

                      <h3 className="text-xs md:text-sm font-black font-journal-serif text-slate-900 line-clamp-2">
                        {hotel.hotelName}
                      </h3>

                      {hotel.hotelSpecial && (
                        <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed font-medium">
                          {hotel.hotelSpecial}
                        </p>
                      )}

                      {hotel.access && (
                        <p className="text-[10px] text-slate-500 line-clamp-1">
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
                      className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-indigo-700 to-sky-700 hover:from-indigo-600 hover:to-sky-600 rounded-xl shadow transition"
                    >
                      ♨️ 楽天トラベルでプラン・空室を確認
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 text-xs">
              現在ホテルデータを更新中です。
            </div>
          )}
        </section>

        {/* 🔗 内部リンク・関連ガイド */}
        <section className="bg-slate-100 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧭</span>
            <h2 className="text-base md:text-lg font-black font-journal-serif text-slate-900">
              あわせて読みたい関西・四国のバス旅＆日帰りガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <Link
              href="/osaka-tokushima-naruto-bus-vs-car-guide"
              className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-400 hover:shadow-sm transition group"
            >
              <div className="text-[11px] text-indigo-700 font-bold mb-1">鳴門・徳島アクセス比較</div>
              <h3 className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition">
                【大阪〜徳島・鳴門】高速バス vs 車（マイカー/レンタカー）徹底比較！明石海峡大橋・大塚国際美術館旅
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                淡路島を通過して徳島・鳴門の渦潮へ行く場合の高速バス料金とマイカー高速代・ガソリン代比較。
              </p>
            </Link>

            <Link
              href="/osaka-departure-daytrip-bus-tour-guide"
              className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-400 hover:shadow-sm transition group"
            >
              <div className="text-[11px] text-indigo-700 font-bold mb-1">大阪発日帰りツアー</div>
              <h3 className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition">
                【大阪発 日帰りバスツアー完全ガイド】旬の味覚狩り・絶景温泉・アウトレット満喫プラン
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                淡路島や丹波篠山、京都天橋立へ添乗員付きで手軽に行ける人気日帰りバスツアー。
              </p>
            </Link>
          </div>
        </section>

        {/* 47都道府県トップリンク */}
        <div className="text-center pt-2">
          <Link
            href="/prefectures"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
          >
            <span>🗾</span>
            <span>全国47都道府県の観光＆宿泊ガイド一覧へ戻る</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
