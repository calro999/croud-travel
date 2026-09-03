import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【大阪なんば・心斎橋 深夜営業グルメ＆居酒屋】夜24時以降も開いているカスうどん・串カツ・横丁酒場",
  description:
    "終電後や夜行便前に楽しめるミナミの深夜グルメ！出汁が染みる本場のかすうどん、裏なんばの深夜営業立ち飲み、24時間営業のたこ焼き・串カツ店、なんば駅徒歩5分の大浴場＆カプセル・ホテル。",
  keywords: [
    "なんば 深夜 ご飯",
    "心斎橋 深夜 居酒屋",
    "大阪 カスうどん 深夜",
    "裏なんば はしご酒 深夜",
    "道頓堀 24時間 グルメ",
    "なんば 終電後 過ごし方",
    "なんば サウナ ホテル"
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
      return data["osaka-namba-late-night-gourmet-izakaya-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for osaka-namba-late-night-gourmet-izakaya-guide", e);
  }
  return [];
}

export default function OsakaNambaLateNightGuidePage() {
  const hotels = loadHotels();

  const lateNightGourmetCategories = [
    {
      category: "🍜 胃袋を癒やす極上締め「かすうどん」",
      desc: "牛ホルモン（油かす）をカリカリに揚げ、昆布と鰹の黄金出汁に合わせた南河内発祥のソウルフード。深夜2時の胃壁に沁み渡る芳醇なコク！",
      spots: [
        {
          name: "加寿屋（KASUYA） 法善寺店",
          time: "夕方18:00〜翌朝6:00",
          menu: "名物かすうどん（約850円）/ おにぎりセット",
          features: "法善寺横丁の石畳に佇む名店。外カリッ・中プルプルの油かすと、甘みのある出汁の調和が完璧。"
        },
        {
          name: "龍の巣 心斎橋三休橋筋店",
          time: "18:00〜翌朝8:00",
          menu: "かすうどん（スタミナにんにくトッピング可）",
          features: "焼肉屋が本気で作るかすうどん。朝8時まで営業しており、オール明けや始発待ちの強い味方。"
        }
      ]
    },
    {
      category: "🍢 熱気渦巻く深夜の「裏なんば立ち飲み＆横丁」",
      desc: "夜24時を過ぎてもエネルギーが途切れない路地裏酒場街。安くて旨いアテと地酒で地元民と乾杯！",
      spots: [
        {
          name: "虎目横丁（とらめよこちょう）",
          time: "17:00〜深夜24:00〜翌朝まで（店舗により異なる）",
          menu: "串カツ・ホルモン・海鮮・お好み焼きの出前はしご",
          features: "昭和レトロな屋台風横丁。1つの席にいながら横丁内の全店舗のメニューを出前注文できる。"
        },
        {
          name: "スタンドあじと / 裏なんば深夜バル",
          time: "深夜25:00頃まで営業",
          menu: "黒毛和牛の肉料理・ワイン・旬の一品",
          features: "バル激戦区・裏なんばを牽引する肉料理の名店。深夜でも手抜きなしの極上肉タタキを堪能。"
        }
      ]
    },
    {
      category: "🐙 24時間眠らない「道頓堀たこ焼き＆串カツ」",
      desc: "ネオン瞬く道頓堀川沿いは24時間不夜城。夜行バス出発直前までサクッと食べられる名物たち。",
      spots: [
        {
          name: "たこ焼 十八番 道頓堀店",
          time: "11:00〜深夜23:00（週末延長あり）",
          menu: "天かすたっぷりカリカリたこ焼き（8個 約750円）",
          features: "生地に牛乳をブレンドし、天かすをふんだんに巻き込んだ独特のサクサク・クリーミー食感。"
        },
        {
          name: "日本一の串かつ 横綱 法善寺店",
          time: "24時間営業",
          menu: "串カツ盛り合わせ・どて焼き（1本120円〜）",
          features: "いつでも揚げたて熱々の串カツが食べられる24h営業の殿堂。秘伝ソースとキャベツが止まらない。"
        }
      ]
    }
  ];

  const nightTips = [
    {
      title: "終電を逃した後の避難所選び",
      content:
        "なんば駅周辺には24時間営業のサウナ付きスパ施設（ニュージャパンカバーハウス等）やコミックカフェが充実。夜中2時以降の無理な徘徊は避け、大浴場か駅近ホテルへ。"
    },
    {
      title: "キャリーバッグの一時預かり",
      content:
        "南海難波駅・近鉄日本橋駅周辺のロッカーは深夜でも出し入れ可能。手ぶらで身軽になってからはしご酒へ繰り出しましょう。"
    },
    {
      title: "夜行バス利用者の賢いタイムライン",
      content:
        "22:30に法善寺横丁でかすうどん → 23:15に道頓堀川沿い散策 → 23:45になんばOCAT（バスターミナル）集合が最もムダのない黄金ルートです。"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden border-b border-emerald-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md">
            <span>🌙 MIDNIGHT MINAMI GOURMET GUIDE</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug mb-4 text-balance">
            【大阪なんば・心斎橋 深夜営業グルメ＆居酒屋】<br />
            夜24時以降も開いているカスうどん・串カツ・横丁酒場
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            終電後や夜行便の出発待ちでも大阪ミナミの夜は終わらない！
            出汁が五臓六腑に染み渡る本格かすうどん、ディープな裏なんばの立ち飲み、24時間営業の串カツ、徒歩5分で泊まれる快適ホテルまで徹底解説。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-emerald-200">
            <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full">#なんば深夜グルメ</span>
            <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full">#加寿屋かすうどん</span>
            <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full">#裏なんば立ち飲み</span>
            <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full">#道頓堀24時間</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 space-y-12">
        {/* Special Coupon */}
        <SpecialCouponBanner />

        {/* Section 1: Mid-Night Guide Introduction */}
        <section className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-5 border-b border-slate-700 pb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-lg border border-emerald-500/30">
              01
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              深夜24時を過ぎてからが本番！ミナミ夜遊びサバイバル術
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            キタ（梅田）が早めに店を閉じるのに対し、ミナミ（心斎橋・なんば・道頓堀）は深夜24時以降もネオンが輝き続けるナイトタウン。観光客で大行列の昼間と違い、夜中は地元民に混ざって名店の本領を味わえるゴールデンタイムです。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nightTips.map((tip, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-4">
                <h3 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                  <span>💡</span> {tip.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Deep Night Gourmet Selections */}
        <section className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-lg border border-emerald-500/30">
              02
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                深夜営業グルメ決定版！24時以降も開いている名店リスト
              </h2>
              <p className="text-xs text-emerald-400 font-medium">かすうどん・裏なんば酒場・24時間串カツ</p>
            </div>
          </div>

          <div className="space-y-8">
            {lateNightGourmetCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-900/60 rounded-xl p-5 border border-slate-700/60">
                <h3 className="text-lg font-bold text-emerald-300 mb-2">{cat.category}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{cat.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.spots.map((s, sIdx) => (
                    <div key={sIdx} className="bg-slate-800 border border-slate-700 rounded-lg p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="font-bold text-sm sm:text-base text-white">{s.name}</h4>
                          <span className="text-[11px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-mono">
                            {s.time}
                          </span>
                        </div>
                        <div className="text-xs text-emerald-400 font-semibold mb-2 bg-emerald-950/40 p-1.5 rounded">
                          名物: {s.menu}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed mb-2">
                          {s.features}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Recommended Night Hotels */}
        <section className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-lg border border-emerald-500/30">
              03
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                飲み歩いた後すぐベッドへ！なんば・心斎橋駅徒歩圏ホテル
              </h2>
              <p className="text-xs text-emerald-400 font-medium">大浴場・サウナ完備＆24時間フロント対応の安心宿</p>
            </div>
          </div>

          {hotels.length === 0 ? (
            <p className="text-sm text-slate-400">ホテル情報を読み込み中...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {hotels.map((hotel) => (
                <div
                  key={hotel.hotelNo}
                  className="bg-slate-900 rounded-xl border border-slate-700/80 overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-md"
                >
                  <div>
                    {hotel.hotelImageUrl && (
                      <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-90 hover:opacity-100"
                        />
                        {hotel.nearestStation && (
                          <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-sm text-slate-200 text-[11px] px-2 py-0.5 rounded font-medium border border-slate-700">
                            最寄: {hotel.nearestStation}
                          </div>
                        )}
                        {hotel.reviewAverage && (
                          <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded font-bold shadow">
                            ★ {hotel.reviewAverage.toFixed(1)}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-sm sm:text-base text-white line-clamp-2 mb-2 hover:text-emerald-300">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-3 mb-3 leading-relaxed">
                        {hotel.hotelSpecial || "なんば・心斎橋の繁華街から至近。大浴場やサウナを備え、深夜のチェックインにも対応した拠点ホテル。"}
                      </p>
                      {hotel.access && (
                        <p className="text-[11px] text-slate-400 truncate">
                          🚶 {hotel.access}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="border-t border-slate-800 pt-3 mb-3 flex items-baseline justify-between">
                      <span className="text-xs text-slate-400">最安目安 / 人</span>
                      <span className="text-lg font-bold text-emerald-400 font-mono">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "料金確認"}
                      </span>
                    </div>
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all"
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
        <section className="bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span>🔗</span> 合わせて読みたい大阪旅行攻略ガイド
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/osaka-travel-budget-guide"
              className="p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] text-emerald-400 font-semibold mb-1 block">費用・節約</span>
                <h3 className="font-bold text-sm text-white mb-1">
                  【大阪旅行 予算シミュレーション】1泊2日いくらで楽しめる？
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  食い倒れグルメ、交通費、ホテル代の最安値目安。USJとミナミ観光を組み合わせた賢い予算設計。
                </p>
              </div>
              <span className="text-xs text-emerald-400 font-bold mt-3 inline-flex items-center gap-1">
                記事を読む →
              </span>
            </Link>

            <Link
              href="/tokyo-osaka-bus-vs-shinkansen-guide"
              className="p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] text-emerald-400 font-semibold mb-1 block">交通比較</span>
                <h3 className="font-bold text-sm text-white mb-1">
                  【東京〜大阪】新幹線 vs 夜行バス徹底比較！差額2万円の活用術
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  最安2,500円からの夜行高速バスで早朝なんば着。浮いたお金で道頓堀グルメを食べ尽くす！
                </p>
              </div>
              <span className="text-xs text-emerald-400 font-bold mt-3 inline-flex items-center gap-1">
                記事を読む →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
