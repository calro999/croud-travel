import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【博多・天神 早朝から食べられる長浜ラーメン＆朝食ビュッフェ】朝6時台オープンの市場めし完全版",
  description:
    "福岡の朝は早い！長浜鮮魚市場で食べる早朝市場海鮮丼、24時間営業元祖長浜ラーメンの「カタ・替玉」、明太子食べ放題の博多駅前ホテル朝食ビュッフェ、中洲天然温泉ホテル宿泊情報。",
  keywords: [
    "博多 早朝 ラーメン",
    "長浜ラーメン 24時間 朝食",
    "長浜鮮魚市場 朝ごはん",
    "博多 明太子 食べ放題 朝食",
    "博多駅 モーニング",
    "博多 朝風呂 天然温泉",
    "天神 早朝 ごはん"
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
      return data["fukuoka-hakata-early-morning-ramen-breakfast-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for fukuoka-hakata-early-morning-ramen-breakfast-guide", e);
  }
  return [];
}

export default function FukuokaHakataEarlyMorningGuidePage() {
  const hotels = loadHotels();

  const morningGourmetCategories = [
    {
      title: "🍜 元祖長浜ラーメンの「朝ラー」文化",
      desc: "長浜の魚市場で働く競り人や仲買人のために早朝から超高速で提供されてきたソウルフード。あっさり豚骨スープに極細ストレート麺が朝の胃袋を刺激！",
      spots: [
        {
          name: "元祖長浜屋（がんそながはまや）",
          time: "朝6:00〜翌2:00頃",
          system: "食券購入後、着席と同時に『ベタカタ（アブラ多め・麺硬め）』や『ナシカタ』をコール。1分以内に着丼するスピード感。",
          menu: "ラーメン（約550円）/ 替玉（150円）/ 替肉（100円）"
        },
        {
          name: "元祖ラーメン長浜家（家1 / 家2）",
          time: "24時間営業または早朝営業",
          system: "地元タクシードライバーや市場関係者が集うディープな空間。卓上のラーメンタレと紅生姜、ゴマで味変が無限大。",
          menu: "ラーメン（約500円〜）"
        }
      ]
    },
    {
      title: "🐟 長浜鮮魚市場「市場会館」の朝獲れ海鮮丼",
      desc: "一般人も利用できる福岡市中央卸売市場鮮魚市場の市場会館1階。玄界灘の荒波で育った鮮度抜群の真鯛、カンパチ、ヤリイカが早朝から味わえる聖地。",
      spots: [
        {
          name: "おきよ食堂",
          time: "朝7:00〜14:00 / 18:00〜21:00",
          system: "昭和22年創業の市場直営食堂。刺身定食や名物の胡麻サバ定食が朝から大人気。",
          menu: "胡麻サバ定食（約1,100円）/ 本日の海鮮丼（約1,300円）"
        },
        {
          name: "魚辰（うおたつ）",
          time: "朝9:00〜（一部店舗は早朝より営業）",
          system: "市場直送のネタが破格で並ぶ回転寿司・海鮮処。朝から握りたての玄界灘の幸を。",
          menu: "上にぎりセット / 市場盛り海鮮丼"
        }
      ]
    },
    {
      title: "🥢 博多駅周辺「明太子食べ放題」＆うどんモーニング",
      desc: "博多駅直結・駅前エリアで朝7時から開店している定番モーニング。博多うどんの柔らか麺とイリコ出汁も朝の目覚ましに最高！",
      spots: [
        {
          name: "やまや 博多店 / めんたいベース",
          time: "朝7:00〜（モーニング実施店舗）",
          system: "辛子明太子・からし高菜・炊き立てご飯が食べ放題！羽釜ご飯にやまやの熟成明太子を山盛りに乗せる贅沢。",
          menu: "博多明太子食べ放題朝定食（約1,600円）"
        },
        {
          name: "大地のうどん 博多駅地下店 / 因幡うどん 博多デイトス店",
          time: "朝8:00（一部店舗は7:00〜）",
          system: "透き通る出汁とふわふわ柔らかうどん。名物「ごぼう天」のサクサク感を朝から。",
          menu: "ごぼ天うどん（約550円〜680円）"
        }
      ]
    }
  ];

  const morningHacks = [
    {
      num: "1",
      title: "長浜へは天神からバスまたは赤坂駅から徒歩",
      desc: "福岡市地下鉄空港線「赤坂駅」から北へ徒歩約10〜12分。天神三丁目バス停から西鉄バスでもアクセス抜群です。"
    },
    {
      num: "2",
      title: "元祖長浜屋での注文呪文『ベタカタ・ネギオオメ』",
      desc: "入店した瞬間に麺の硬さとアブラの量を聞かれます。「カタ（硬め）」「バリカタ」「ベタ（油多め）」「ナシ（油抜き）」を即答するのが長浜流。"
    },
    {
      num: "3",
      title: "早朝食後は中洲・博多駅前の天然温泉で整う",
      desc: "満腹になった後は、博多駅前や祇園の天然温泉大浴場へ。午前中から入れる日帰り入浴やホテル併設スパで旅のスタートダッシュを。"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900 text-white py-14 px-4 sm:px-6 relative overflow-hidden shadow-lg border-b border-slate-700">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/60 border border-slate-500/40 text-slate-200 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
            <span>🌅 6:00 AM HAKATA MARKET & NOODLE GUIDE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug mb-4 text-balance">
            【博多・天神 早朝から食べられる長浜ラーメン＆朝食ビュッフェ】<br />
            朝6時台オープンの市場めし完全版
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            福岡の朝は全国一活気がある！元祖長浜屋の極細麺＆あっさり豚骨の「朝ラー」、長浜鮮魚市場直営の獲れたて胡麻サバ丼、明太子食べ放題モーニングまで、早起きして味わうべき博多の朝グルメを完全網羅。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-slate-300">
            <span className="bg-slate-800 px-3 py-1 rounded border border-slate-700">#元祖長浜屋</span>
            <span className="bg-slate-800 px-3 py-1 rounded border border-slate-700">#長浜鮮魚市場おきよ</span>
            <span className="bg-slate-800 px-3 py-1 rounded border border-slate-700">#明太子食べ放題</span>
            <span className="bg-slate-800 px-3 py-1 rounded border border-slate-700">#博多駅前天然温泉</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 space-y-12">
        {/* Special Coupon */}
        <SpecialCouponBanner />

        {/* Section 1: Morning Hacks */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-5 border-b border-slate-200 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 text-white font-bold text-lg">
              01
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              早起きこそ最大の贅沢！博多早朝グルメを遊び尽くす3原則
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            夜の屋台やもつ鍋で有名な福岡ですが、実は最もローカルでディープな食文化が凝縮されているのは「早朝6時〜8時の長浜エリア」。観光客がまだ眠っている時間帯に訪れることで、並ばずに本場の活気を体感できます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {morningHacks.map((hack) => (
              <div key={hack.num} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-slate-800 font-bold text-sm mb-1.5 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-white text-xs flex items-center justify-center">
                    {hack.num}
                  </span>
                  <span>{hack.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{hack.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Morning Food Lineup */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 text-white font-bold text-lg">
              02
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                朝6:00〜8:00オープン！博多早朝めし・名店カタログ
              </h2>
              <p className="text-xs text-slate-500 font-medium">長浜ラーメン・鮮魚市場食堂・明太子ビュッフェ</p>
            </div>
          </div>

          <div className="space-y-6">
            {morningGourmetCategories.map((cat, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                <h3 className="font-bold text-base sm:text-lg text-slate-800 mb-1">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{cat.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.spots.map((spot, sIdx) => (
                    <div key={sIdx} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-bold text-sm sm:text-base text-slate-800">{spot.name}</h4>
                          <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-medium">
                            {spot.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mb-2 bg-slate-50 p-2 rounded border border-slate-100">
                          {spot.system}
                        </p>
                      </div>
                      <div className="text-xs font-bold text-amber-800 pt-2 border-t border-slate-100">
                        おすすめ: {spot.menu}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Recommended Fukuoka Hotels */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 text-white font-bold text-lg">
              03
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                朝食ビュッフェ＆天然温泉が自慢！博多・祇園のおすすめホテル
              </h2>
              <p className="text-xs text-slate-500 font-medium">明太子食べ放題・駅前大浴場で旅の疲れを完全リカバリー</p>
            </div>
          </div>

          {hotels.length === 0 ? (
            <p className="text-sm text-slate-500">ホテル情報を読み込み中...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {hotels.map((hotel) => (
                <div
                  key={hotel.hotelNo}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-400 transition-all shadow-sm"
                >
                  <div>
                    {hotel.hotelImageUrl && (
                      <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {hotel.nearestStation && (
                          <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded font-medium">
                            最寄: {hotel.nearestStation}
                          </div>
                        )}
                        {hotel.reviewAverage && (
                          <div className="absolute top-2 right-2 bg-slate-800 text-white text-xs px-2 py-0.5 rounded font-bold shadow">
                            ★ {hotel.reviewAverage.toFixed(1)}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-sm sm:text-base text-slate-800 line-clamp-2 mb-2 hover:text-slate-600">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 mb-3 leading-relaxed">
                        {hotel.hotelSpecial || "博多駅・祇園駅至近。天然温泉大浴場やこだわりの朝食バイキングで福岡旅行を快適にサポート。"}
                      </p>
                      {hotel.access && (
                        <p className="text-[11px] text-slate-500 truncate">
                          🚶 {hotel.access}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="border-t border-slate-100 pt-3 mb-3 flex items-baseline justify-between">
                      <span className="text-xs text-slate-500">最安目安 / 人</span>
                      <span className="text-lg font-bold text-slate-800 font-mono">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "料金確認"}
                      </span>
                    </div>
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 px-3 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-lg shadow transition-colors"
                    >
                      楽天トラベルで空室・プランを見る
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section 4: Internal Links */}
        <section className="bg-slate-200/60 rounded-2xl p-6 sm:p-8 border border-slate-300">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span>🔗</span> 合わせて読みたい九州・西日本アクセスガイド
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/fukuoka-kumamoto-bus-vs-shinkansen-guide"
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] text-slate-600 font-semibold mb-1 block">九州内移動</span>
                <h3 className="font-bold text-sm text-slate-800 mb-1">
                  【福岡〜熊本】新幹線 vs 高速バス（ひのくに号）徹底比較！
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  九州新幹線つばめ・さくらと高速バスひのくに号の料金・時間を検証。熊本城・阿蘇への日帰り旅にも便利。
                </p>
              </div>
              <span className="text-xs text-slate-800 font-bold mt-3 inline-flex items-center gap-1">
                記事を読む →
              </span>
            </Link>

            <Link
              href="/osaka-fukuoka-bus-vs-shinkansen-guide"
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] text-slate-600 font-semibold mb-1 block">長距離移動</span>
                <h3 className="font-bold text-sm text-slate-800 mb-1">
                  【大阪〜福岡】山陽新幹線 vs 夜行高速バス 料金・時間比較
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  格安夜行バスで早朝博多駅に到着し、そのまま長浜ラーメン朝食へ向かう弾丸トラベルの活用術。
                </p>
              </div>
              <span className="text-xs text-slate-800 font-bold mt-3 inline-flex items-center gap-1">
                記事を読む →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
