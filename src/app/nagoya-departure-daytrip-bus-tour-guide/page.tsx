import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【名古屋発 日帰りバスツアー＆温泉ランチおすすめ】下呂温泉・伊勢神宮参拝・飛騨牛食べ放題プラン徹底解説",
  description: "名古屋・名駅発の日帰りバスツアー人気コース！伊勢神宮おかげ横丁＆松阪牛ランチ、下呂温泉名湯めぐり、高山白川郷合掌造り直行便まで、電車より安くて楽ちんな日帰りツアーの料金・予約方法。",
  keywords: [
    "名古屋発 日帰りバスツアー",
    "名駅発 バスツアー",
    "下呂温泉 日帰りランチ",
    "伊勢神宮 バスツアー 名古屋",
    "飛騨牛 食べ放題 バスツアー",
    "白川郷 日帰りバス 名古屋",
    "楽天トラベル バスツアー 中部"
  ],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagoya-departure-daytrip-bus-tour-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for nagoya-departure-daytrip-bus-tour-guide", e);
  }
  return [];
}

export default function NagoyaDepartureDaytripBusTourPage() {
  const hotels = loadHotels();

  const daytripRankings = [
    {
      rank: "第1位",
      title: "伊勢神宮 内宮・外宮 両参り＆おかげ横丁散策＋松阪牛すき焼き御膳",
      tag: "王道参拝＆グルメ",
      price: "8,500円〜12,000円",
      time: "約9.5時間（8:00名駅発〜17:30着）",
      merits: [
        "外宮と内宮の両参りを専用バスでスムーズに完結（路線バス乗り継ぎ不要）",
        "おかげ横丁で赤福本店の手作り作りたて赤福餅やお抹茶を堪能",
        "極上の松阪牛をアツアツの鉄鍋すき焼きで味わう満足ランチ"
      ]
    },
    {
      rank: "第2位",
      title: "日本三名泉 下呂温泉 名湯入浴＆飛騨牛ローストビーフ重ランチ",
      tag: "温泉美肌＆癒やし",
      price: "9,800円〜13,800円",
      time: "約10.5時間（7:45名駅発〜18:15着）",
      merits: [
        "とろりとした美容液のようなpH9以上のアルカリ性単純温泉を満喫",
        "下呂温泉合掌村や湯の街通りで足湯めぐり＆名物「温玉ソフト」",
        "JR特急ワイドビューひだ往復（約9,000円）と同等価格で温泉入浴券＋豪華ランチ付き"
      ]
    },
    {
      rank: "第3位",
      title: "世界遺産 白川郷合掌造り集落＆小京都 飛騨高山さんまち通り散策",
      tag: "世界遺産・絶景",
      price: "10,500円〜14,500円",
      time: "約11時間（7:30名駅発〜18:30着）",
      merits: [
        "東海北陸道で険しい山越えもバスなら座っているだけで一気に直行",
        "白川郷の和田家見学や荻町城跡展望台からの絶景合掌造りパノラマ",
        "高山の古い町並みで飛騨牛握り寿司やみたらし団子の食べ歩き"
      ]
    },
    {
      rank: "第4位",
      title: "南信州 昼神温泉 美肌の湯入浴＆リンゴ狩り・天竜川舟下り",
      tag: "自然体験＆果物狩り",
      price: "9,200円〜12,500円",
      time: "約10時間（8:15名駅発〜18:15着）",
      merits: [
        "中央道経由で長野・信州へ爽快アクセス。爽やかな高原の風を体感",
        "強アルカリ性で『美人の湯』と名高い昼神温泉旅館の庭園露天風呂に入浴",
        "旬のシャインマスカットやりんご狩り体験付き"
      ]
    }
  ];

  const costComparisonData = [
    {
      plan: "日帰りバスツアー（伊勢・松阪牛プラン）",
      fare: "約8,500円〜11,000円（全込）",
      mealCost: "ツアー代に含まれる（松阪牛付き）",
      bathingCost: "込みまたは無料",
      total: "約9,500円",
      note: "乗り換えゼロ。お酒も飲めて最もお得。"
    },
    {
      plan: "近鉄特急＋路線バス自力手配",
      fare: "約6,600円（近鉄特急往復＋三重交通バス）",
      mealCost: "約3,500円（松阪牛ランチ別払い）",
      bathingCost: "なし",
      total: "約10,100円",
      note: "時間の自由度はあるが、外宮・内宮間のバス待ちが発生。"
    },
    {
      plan: "マイカー運転（伊勢湾岸道〜伊勢道）",
      fare: "約7,000円（高速往復＋ガソリン）",
      mealCost: "約3,500円（昼食自費）",
      bathingCost: "駐車場代 1,000円",
      total: "約11,500円（1名換算・2名乗車時）",
      note: "伊勢神宮周辺の内宮前駐車場は大渋滞。運転手はお酒NG。"
    }
  ];

  const iseSchedule = [
    {
      hour: "08:00",
      title: "名古屋駅（太閤通口 エスカ地下街周辺集合）出発",
      desc: "東名阪・伊勢湾岸道経由で三重方面へ。車内アナウンスで見どころや参拝順序の予習。"
    },
    {
      hour: "10:00〜11:15",
      title: "伊勢神宮 外宮（豊受大神宮）参拝",
      desc: "衣食住の神様を祀る外宮から参拝するのが古くからの習わし。表参道の火除橋を渡り、樹齢数百年の巨木に囲まれた神聖な空気を味わう。"
    },
    {
      hour: "11:45〜12:45",
      title: "松阪牛すき焼き鍋御膳ランチ",
      desc: "伊勢の郷土料理レストランで特選松阪牛のすき焼き鍋。甘みのある脂とコク深いタレがご飯と相性抜群。"
    },
    {
      hour: "13:00〜15:30",
      title: "伊勢神宮 内宮（皇大神宮）参拝 ＆ おかげ横丁・おはらい町自由散策",
      desc: "宇治橋を渡り五十鈴川の御手洗場で清めて正宮へ。参拝後は五十鈴川沿いのレトロな町並みで名物『赤福餅』や伊勢角屋麦酒のクラフトビールを堪能。"
    },
    {
      hour: "17:30",
      title: "名古屋駅太閤通口 到着・解散",
      desc: "お土産の赤福や伊勢うどんを手に、夕方には名駅へ戻れるためディナーやお買い物にも余裕。"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50/20 text-slate-800 antialiased">
      {/* 🍂 Hero Header - Amber Theme */}
      <header className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 text-white overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-amber-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold tracking-wide">
            <span>♨️ 2026年最新 中部・東海発バス旅</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>名駅発・手ぶらで日帰り</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight md:leading-[1.2] text-white">
            【名古屋発 日帰りバスツアー＆温泉ランチおすすめ】
            <br />
            <span className="text-amber-300">下呂温泉・伊勢神宮参拝・飛騨牛食べ放題</span>
            <span className="text-amber-100">プラン徹底解説</span>
          </h1>

          <p className="text-amber-100/90 text-sm md:text-base max-w-3xl leading-relaxed pt-2">
            名古屋駅太閤通口から出発する人気日帰りバスツアーを大特集！伊勢神宮の両参りとおかげ横丁食べ歩き、下呂温泉の源泉かけ流し入浴＆飛騨牛ランチ、白川郷合掌造り直行ツアーまで、電車や自家用車より安くて快適な東海発バス旅の決定版です。
          </p>

          <div className="flex flex-wrap gap-2 pt-3">
            <span className="px-2.5 py-1 rounded bg-amber-900/60 border border-amber-700/50 text-amber-200 text-xs font-medium">#名古屋発バスツアー</span>
            <span className="px-2.5 py-1 rounded bg-amber-900/60 border border-amber-700/50 text-amber-200 text-xs font-medium">#伊勢神宮日帰り</span>
            <span className="px-2.5 py-1 rounded bg-amber-900/60 border border-amber-700/50 text-amber-200 text-xs font-medium">#下呂温泉ランチ</span>
            <span className="px-2.5 py-1 rounded bg-amber-900/60 border border-amber-700/50 text-amber-200 text-xs font-medium">#飛騨牛食べ放題</span>
          </div>
        </div>
      </header>

      {/* 🚀 Breadcrumbs */}
      <nav className="bg-amber-950/10 border-b border-amber-950/10 py-2.5 px-4 text-xs text-slate-600">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-amber-700 transition">ホーム</Link>
          <span>›</span>
          <span className="text-amber-950 font-bold">名古屋発 日帰りバスツアー＆温泉ランチ比較</span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
        {/* 🌟 Official Banner Section */}
        <section className="bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-800 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-amber-950/10 flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-400/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider">
              Rakuten Travel Official
            </span>
            <h2 className="text-xl md:text-2xl font-black leading-snug">
              楽天トラベル「東海・名古屋発 日帰りバスツアー」公式特集
            </h2>
            <p className="text-amber-100 text-xs md:text-sm max-w-xl">
              伊勢神宮参拝、下呂温泉名湯めぐり、白川郷、飛騨牛食べ放題プランが満載！ポイント利用＆高速バスクーポンでお得に予約可能。
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-900 hover:bg-slate-800 text-amber-300 font-black text-sm md:text-base rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-200 border border-amber-400/40"
          >
            <span>♨️ 楽天トラベルで東海発バスツアーを探す</span>
            <span className="text-base">→</span>
          </a>
        </section>

        {/* 🏆 1. 名古屋発 人気日帰りコースBEST4 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-amber-200/60 shadow-sm space-y-6">
          <div className="border-b border-amber-100 pb-4">
            <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>POPULAR DESTINATIONS</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              名古屋（名駅）発 おすすめ日帰りバスツアー人気ランキング
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              伊勢、下呂、飛騨高山、南信州。地元民にも旅行者にも選ばれる王道コースを厳選。
            </p>
          </div>

          <div className="space-y-4">
            {daytripRankings.map((item, idx) => (
              <div
                key={idx}
                className="bg-amber-50/30 border border-amber-200/70 rounded-2xl p-5 hover:border-amber-400 hover:shadow-md transition duration-200 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-700 text-white text-xs font-black">
                      {item.rank}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[11px] font-bold">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3 text-xs">
                    <span className="text-slate-500">目安：<strong className="text-sm font-black text-amber-800">{item.price}</strong></span>
                    <span className="text-slate-600">所要：{item.time}</span>
                  </div>
                </div>

                <h3 className="text-base md:text-lg font-black text-slate-900">
                  {item.title}
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 text-xs text-slate-700">
                  {item.merits.map((m, mIdx) => (
                    <li key={mIdx} className="bg-white/80 p-2.5 rounded-xl border border-amber-100 leading-relaxed">
                      ✓ {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 💰 2. コスト比較：バスツアー vs 電車 vs 車 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-amber-200/60 shadow-sm space-y-6">
          <div className="border-b border-amber-100 pb-4">
            <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>COST BREAKDOWN</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              伊勢神宮参拝で検証！日帰りバスツアー vs 電車 vs マイカー実費比較
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              交通費だけでなく「昼食代」「駐車場代」「参拝の手間」まで含めたトータルコスパ。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-amber-900 text-white">
                  <th className="p-3.5 md:p-4 rounded-tl-xl font-bold">移動手段・プラン</th>
                  <th className="p-3.5 md:p-4 font-bold">交通費</th>
                  <th className="p-3.5 md:p-4 font-bold">昼食（松阪牛）</th>
                  <th className="p-3.5 md:p-4 font-bold">1人あたり実質合計</th>
                  <th className="p-3.5 md:p-4 rounded-tr-xl font-bold">特徴・メリット/デメリット</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                {costComparisonData.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx === 0 ? "bg-amber-50/70 font-semibold" : "bg-white"}>
                    <td className="p-3.5 md:p-4 font-bold text-slate-900">{row.plan}</td>
                    <td className="p-3.5 md:p-4 text-slate-700">{row.fare}</td>
                    <td className="p-3.5 md:p-4 text-slate-700">{row.mealCost}</td>
                    <td className="p-3.5 md:p-4 text-base font-black text-amber-900">{row.total}</td>
                    <td className="p-3.5 md:p-4 text-xs text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ⛩️ 3. モデルコース：伊勢神宮両参り＆松阪牛ランチ */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-amber-200/60 shadow-sm space-y-6">
          <div className="border-b border-amber-100 pb-4">
            <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>TOUR SCHEDULE</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              【名駅発】伊勢神宮 外宮・内宮両参り＆松阪牛すき焼き 1日満喫タイムライン
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              名古屋駅太閤通口（新幹線側）を出発して夕方には戻る、最も人気の高い神宮参拝ツアー。
            </p>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-amber-200">
            {iseSchedule.map((step, sIdx) => (
              <div key={sIdx} className="relative space-y-1">
                <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-amber-600 border-2 border-white shadow-sm" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs font-black text-amber-950 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                    {step.hour}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-0.5 pl-0.5">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🏨 4. 厳選温泉旅館・ホテル（下呂・鳥羽・伊勢志摩） */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-amber-200/60 shadow-sm space-y-6">
          <div className="border-b border-amber-100 pb-4">
            <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>HOTELS & ONSEN RESORT</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              ツアー目的地で泊まるならここ！下呂温泉＆伊勢志摩の極上宿泊施設
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              バスツアーで魅了されたら次回は宿泊で！美人の湯・下呂温泉や伊勢志摩の海の幸リゾートです。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {hotels.map((hotel: any) => (
                <article
                  key={hotel.hotelNo}
                  className="flex flex-col justify-between border border-amber-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-amber-300 transition duration-200"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-amber-50">
                      {hotel.hotelImageUrl ? (
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-bold">
                          {hotel.hotelName}
                        </div>
                      )}
                      {hotel.hotelMinCharge > 0 && (
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-amber-950/90 text-amber-300 px-2 py-0.5 rounded shadow">
                          ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                        </span>
                      )}
                    </div>

                    <div className="p-4 space-y-2">
                      {hotel.reviewAverage > 0 && (
                        <div className="flex items-center justify-between text-[11px] font-bold text-amber-600">
                          <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                          <span className="text-[10px] text-slate-500">{hotel.address1}</span>
                        </div>
                      )}
                      <h3 className="text-xs md:text-sm font-black text-slate-900 line-clamp-2">
                        {hotel.hotelName}
                      </h3>
                      {hotel.hotelSpecial && (
                        <p className="text-[11px] text-slate-600 line-clamp-2 font-medium">
                          {hotel.hotelSpecial}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold rounded-xl shadow transition duration-150"
                    >
                      空室状況・宿泊プランを確認する →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">宿泊施設情報を読み込み中...</p>
          )}
        </section>

        {/* 💡 5. 名古屋発ツアー攻略の知恵袋 */}
        <section className="bg-amber-950/5 rounded-3xl p-6 md:p-8 border border-amber-900/10 space-y-6">
          <h2 className="text-lg md:text-xl font-black text-amber-950">
            名駅集合・バスツアー参加の心得＆お得技
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm space-y-2">
              <h3 className="font-bold text-amber-950 flex items-center gap-1.5">
                <span>📍</span> 名古屋駅太閤通口の集合場所
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                名古屋発のバスツアー集合場所は、太閤通口（新幹線側）の「ゆりの噴水前」または「エスカ地下街ツアーカウンター」、および「名鉄バスセンター」に分かれます。早朝は地下街の通行可能出入口が限られる場合があるため、地上経由でのアクセスがスムーズです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm space-y-2">
              <h3 className="font-bold text-amber-950 flex items-center gap-1.5">
                <span>🎁</span> お土産と車内マナー
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                赤福やお肉などの生鮮品を購入する際は、消費期限に注意。バスツアーの帰路ではパーキングエリア（御在所SAや養老SAなど）で限定スイーツの買い物タイムが用意されることも多いので、お小遣い・キャッシュレス決済の準備を。
              </p>
            </div>
          </div>
        </section>

        {/* 🔗 関連記事（内部リンク） */}
        <section className="border-t border-slate-200 pt-8 space-y-4">
          <h2 className="text-base font-bold text-slate-800">
            あわせて読みたい東海・中部発の交通＆旅行ガイド
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/nagoya-kanazawa-bus-vs-train-guide"
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-sm transition duration-150 flex items-center justify-between group"
            >
              <div>
                <p className="text-xs text-amber-700 font-bold mb-1">北陸交通比較</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-amber-700 transition">
                  名古屋から金沢へ行くなら高速バスvs特急しらさぎ・新幹線どっちが安い？ →
                </p>
              </div>
            </Link>
            <Link
              href="/nagoya-kyoto-bus-vs-shinkansen-guide"
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-sm transition duration-150 flex items-center justify-between group"
            >
              <div>
                <p className="text-xs text-amber-700 font-bold mb-1">関西交通比較</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-amber-700 transition">
                  名古屋から京都へ安く行く！高速バスvs新幹線vs近鉄電車の所要時間＆料金徹底比較 →
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
