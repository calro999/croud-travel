import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大阪・梅田・難波発 日帰りバスツアーおすすめ】カニ食べ放題・有馬温泉・天橋立・淡路島の人気プラン比較",
  description: "大阪・梅田・難波発の日帰りバスツアー特集！日本海冬のカニ尽くし食べ放題、有馬温泉の太閤の湯＆神戸牛ランチ、淡路島うずしおクルーズ＆玉ねぎ詰め放題など、日帰りで満喫できる極上バスツアー料金＆予約ガイド。",
  keywords: [
    "大阪発 日帰りバスツアー",
    "梅田発 カニ食べ放題 バスツアー",
    "なんば発 日帰りツアー",
    "有馬温泉 日帰りランチ",
    "天橋立 バスツアー",
    "淡路島 バスツアー",
    "楽天トラベル バスツアー 関西"
  ],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["osaka-departure-daytrip-bus-tour-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for osaka-departure-daytrip-bus-tour-guide", e);
  }
  return [];
}

export default function OsakaDepartureDaytripBusTourPage() {
  const hotels = loadHotels();

  const tourThemes = [
    {
      title: "日本海・丹後 城崎＆香住 茹で姿ガニ・焼きガニ・カニ刺し食べ放題",
      price: "14,800円〜19,800円",
      highlight: "冬の関西最強グルメ！本ズワイガニ足＆姿ガニを心ゆくまで満喫。日本三景・天橋立股のぞきリフト券付き。",
      duration: "約11時間（7:30梅田発〜18:30着）",
      departures: "梅田（プラザモータープール/ヨドバシ前）・なんば（OCAT）",
      badge: "冬の絶対王者",
      lunchContent: "本ズワイガニ姿丸ごと1杯＋焼きガニ＋カニすき鍋＋カニ雑炊"
    },
    {
      title: "名湯 有馬温泉「太閤の湯」入浴＆三田三ツ星神戸牛すき焼き御膳",
      price: "11,000円〜14,500円",
      highlight: "金泉・銀泉の2大名湯をじっくり2.5時間堪能。A5ランク神戸牛ランチに舌鼓を打ち、神戸三田プレミアム・アウトレットで買い物。",
      duration: "約9.5時間（8:30梅田発〜18:00着）",
      departures: "梅田・なんば・天王寺",
      badge: "極上温泉＆美肌",
      lunchContent: "特選神戸牛すき焼き鍋御膳＋季節の前菜＋丹波産コシヒカリ"
    },
    {
      title: "淡路島 鳴門うずしおクルーズ＆淡路牛ステーキ・玉ねぎ詰め放題",
      price: "9,800円〜13,000円",
      highlight: "世界最大級の渦潮を大型帆船「咸臨丸」から間近に見学。甘みたっぷりの淡路島玉ねぎネット詰め放題＆お花畑のあわじ花さじき。",
      duration: "約10時間（8:00梅田発〜18:00着）",
      departures: "梅田・天王寺・新大阪",
      badge: "爽快クルーズ＆絶景",
      lunchContent: "淡路牛サーロインステーキ重＋鯛のカルパッチョ＋玉ねぎスープ"
    },
    {
      title: "伊勢志摩 伊勢神宮（外宮・内宮両参り）とおかげ横丁食べ歩き",
      price: "8,900円〜12,200円",
      highlight: "電車では行きづらい外宮と内宮の両参りを専用バスでスムーズに移動。おかげ横丁で赤福や伊勢うどん、松阪牛コロッケを満喫。",
      duration: "約11.5時間（7:15なんば発〜18:45着）",
      departures: "なんば・梅田",
      badge: "パワースポット",
      lunchContent: "松阪牛せいろ蒸し膳（またはおかげ横丁食べ歩きクーポン）"
    }
  ];

  const travelMatrix = [
    {
      factor: "交通費＋昼食総額",
      bus: "約11,000〜16,000円（カニ昼食・高速代・拝観料込み）",
      car: "約23,000〜30,000円（阪神高速・中国道往復＋ガソリン＋昼食）",
      train: "約19,000〜25,000円（こうのとり特急指定席往復＋昼食別）"
    },
    {
      factor: "日本酒・ビール飲酒",
      bus: "◎ 昼食のカニや神戸牛に合わせて地酒を気兼ねなく乾杯",
      car: "× 運転手は終日完全禁酒。同乗者だけ飲むのも気まずい",
      train: "◯ 車内や現地で飲酒可能だが乗換時の荷物移動が大変"
    },
    {
      factor: "冬期の雪道運転",
      bus: "◎ プロドライバーがチェーン・スタッドレス完備で安全運行",
      car: "× 丹後・北近畿・日本海側は雪道・凍結リスク大でチェーン必須",
      train: "◯ 遅延リスクはあるが積雪時でも比較的安全"
    },
    {
      factor: "複数スポット移動",
      bus: "◎ 温泉→絶景展望台→お土産物産館へ座っているだけで直結",
      car: "◯ 自由だが各観光地の週末駐車場待ちでタイムロス",
      train: "× 地方ローカル線やバスの乗り継ぎ待ちが1時間に1本程度"
    }
  ];

  const arimaModelCourse = [
    {
      time: "08:30",
      title: "梅田（プラザモータープール）集合・出発",
      desc: "阪神高速池田線から新名神高速道路へ。車窓から六甲山系の美しい山並みを眺めながら有馬方面へドライブ。"
    },
    {
      time: "09:45〜12:30",
      title: "有馬温泉「太閤の湯」入浴＆湯本温泉街散策",
      desc: "豊臣秀吉ゆかりの黄金の湯（金泉）と白銀の湯（銀泉）を両方堪能できる温泉テーマパーク。湯上がりは有馬名物「炭酸せんべい」の賞味期限5秒生せんべいを味わう。"
    },
    {
      time: "13:00〜14:15",
      title: "三田 三ツ星レストランで神戸牛すき焼き御膳ランチ",
      desc: "美しい霜降りの神戸牛を甘辛い特製割り下で。サッと火を通した柔らかなお肉が口の中でとろける贅沢なひととき。"
    },
    {
      time: "14:45〜16:30",
      title: "神戸三田プレミアム・アウトレットで自由ショッピング",
      desc: "西日本最大級の敷地に国内外の人気ブランドが勢揃い。バスツアー参加者限定クーポンシートでお得にお買い物。"
    },
    {
      time: "18:00",
      title: "梅田駅周辺 到着・解散",
      desc: "渋滞を考慮した安心ルート設定。温泉で肌はツルツル、お腹はお肉で満たされ、お土産もたっぷり抱えて帰宅できます。"
    }
  ];

  return (
    <div className="min-h-screen bg-rose-50/30 text-slate-800 antialiased">
      {/* 🌹 Hero Header - Rose Theme */}
      <header className="relative bg-gradient-to-br from-rose-950 via-rose-900 to-red-950 text-white overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-rose-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,63,94,0.18),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-200 text-xs font-bold tracking-wide">
            <span>🦀 2026年最新 関西発バスツアーガイド</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span>大阪・梅田・難波発</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight md:leading-[1.2] text-white">
            【大阪・梅田・難波発 日帰りバスツアーおすすめ】
            <br />
            <span className="text-rose-300">カニ食べ放題・有馬温泉・天橋立・淡路島</span>
            <span className="text-rose-100">の人気プラン比較</span>
          </h1>

          <p className="text-rose-100/90 text-sm md:text-base max-w-3xl leading-relaxed pt-2">
            大阪（梅田・難波）から出発する日帰りバスツアーを完全ナビゲート。日本海冬の味覚・カニ尽くし食べ放題から、有馬温泉の金泉・銀泉巡り＆神戸牛ランチ、鳴門海峡の渦潮クルーズまで、関西人が本気で選ぶコスパ最強プランの料金・見どころを徹底解説。
          </p>

          <div className="flex flex-wrap gap-2 pt-3">
            <span className="px-2.5 py-1 rounded bg-rose-900/60 border border-rose-700/50 text-rose-200 text-xs font-medium">#大阪発バスツアー</span>
            <span className="px-2.5 py-1 rounded bg-rose-900/60 border border-rose-700/50 text-rose-200 text-xs font-medium">#梅田発カニ食べ放題</span>
            <span className="px-2.5 py-1 rounded bg-rose-900/60 border border-rose-700/50 text-rose-200 text-xs font-medium">#有馬温泉日帰り</span>
            <span className="px-2.5 py-1 rounded bg-rose-900/60 border border-rose-700/50 text-rose-200 text-xs font-medium">#淡路島うずしお</span>
          </div>
        </div>
      </header>

      {/* 🚀 Breadcrumbs */}
      <nav className="bg-rose-950/10 border-b border-rose-950/10 py-2.5 px-4 text-xs text-slate-600">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-rose-700 transition">ホーム</Link>
          <span>›</span>
          <span className="text-rose-950 font-bold">大阪・梅田発 日帰りバスツアー徹底比較</span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
        {/* 🌟 Official Banner Section */}
        <section className="bg-gradient-to-r from-rose-700 via-rose-600 to-red-700 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-rose-900/15 flex flex-col md:flex-row items-center justify-between gap-6 border border-rose-400/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider">
              Rakuten Travel Official Bus Tour
            </span>
            <h2 className="text-xl md:text-2xl font-black leading-snug">
              楽天トラベル「関西・大阪発 日帰りバスツアー」公式特集
            </h2>
            <p className="text-rose-100 text-xs md:text-sm max-w-xl">
              カニ食べ放題・有馬温泉・天橋立・淡路島・伊勢神宮ツアーが勢揃い！楽天ポイントが貯まる＆高速バス・バスツアー限定クーポンが使える。
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-sm md:text-base rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-200"
          >
            <span>🦀 楽天トラベルで関西発バスツアーを探す</span>
            <span className="text-base">→</span>
          </a>
        </section>

        {/* 🦀 1. テーマ別：関西発日帰りバスツアー人気4大プラン */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-rose-100 shadow-sm space-y-6">
          <div className="border-b border-rose-100 pb-4">
            <div className="flex items-center gap-2 text-rose-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>TOP SELECTION</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              【大阪・梅田・難波発】満足度で選ぶ日帰りバスツアー4大プラン徹底比較
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              冬の味覚カニ食べ放題から、名湯有馬温泉、絶景淡路島、伊勢参りまで。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourThemes.map((item, idx) => (
              <div
                key={idx}
                className="bg-rose-50/30 border border-rose-200/80 rounded-2xl p-5 flex flex-col justify-between hover:border-rose-400 hover:shadow-md transition duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-black tracking-wide">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.highlight}
                  </p>

                  <div className="bg-white/80 p-2.5 rounded-xl border border-rose-100 text-xs text-slate-700 space-y-1">
                    <div className="font-bold text-rose-900 text-[11px]">🍽️ 昼食内容：</div>
                    <div className="text-slate-600">{item.lunchContent}</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-rose-200/60 space-y-1 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500">目安料金:</span>
                    <span className="text-base font-black text-rose-700">{item.price}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    発着地: {item.departures}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📊 2. 移動手段別 比較マトリクス表 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-rose-100 shadow-sm space-y-6">
          <div className="border-b border-rose-100 pb-4">
            <div className="flex items-center gap-2 text-rose-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>DECISION MATRIX</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              日帰りバスツアー vs 自家用車 vs 特急電車 比較対決
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              特に「カニツアー」「温泉ツアー」において、なぜ関西では日帰りバスツアーが圧倒的に支持されるのかを徹底検証。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-rose-900 text-white">
                  <th className="p-3.5 md:p-4 rounded-tl-xl font-bold w-1/5">比較項目</th>
                  <th className="p-3.5 md:p-4 font-bold bg-rose-800 text-rose-100 w-2/5">🚌 日帰りバスツアー（推奨）</th>
                  <th className="p-3.5 md:p-4 font-bold w-1/5">🚗 マイカー・レンタカー</th>
                  <th className="p-3.5 md:p-4 rounded-tr-xl font-bold w-1/5">🚆 JR特急電車＋現地路線</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100">
                {travelMatrix.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-rose-50/30"}>
                    <td className="p-3.5 md:p-4 font-bold text-slate-900">{row.factor}</td>
                    <td className="p-3.5 md:p-4 font-semibold text-rose-950 bg-rose-50/50">{row.bus}</td>
                    <td className="p-3.5 md:p-4 text-slate-600 text-xs">{row.car}</td>
                    <td className="p-3.5 md:p-4 text-slate-600 text-xs">{row.train}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ♨️ 3. モデルスケジュール：有馬温泉太閤の湯＆神戸牛ランチ */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-rose-100 shadow-sm space-y-6">
          <div className="border-b border-rose-100 pb-4">
            <div className="flex items-center gap-2 text-rose-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>DAY SCHEDULE</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              【贅沢女子旅・夫婦旅】有馬温泉「太閤の湯」＆三田神戸牛すき焼き 1日モデルコース
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              梅田からたった1時間で別世界！名湯と絶品グルメを満喫するゆったり日帰り旅。
            </p>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-rose-200">
            {arimaModelCourse.map((step, sIdx) => (
              <div key={sIdx} className="relative space-y-1">
                <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-rose-600 border-2 border-white shadow-sm" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs font-black text-rose-950 bg-rose-100 px-2 py-0.5 rounded border border-rose-300">
                    {step.time}
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

        {/* 🏨 4. 厳選温泉宿・カニの宿（城崎・有馬・神戸） */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-rose-100 shadow-sm space-y-6">
          <div className="border-b border-rose-100 pb-4">
            <div className="flex items-center gap-2 text-rose-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>LUXURY HOTELS & RYOKAN</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              日帰りツアーの目的地で泊まるならここ！城崎温泉・有馬温泉の極上宿
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              「日帰りで下見して、次は1泊2日でゆっくり訪れたい！」という方に選ばれている名宿です。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {hotels.map((hotel: any) => (
                <article
                  key={hotel.hotelNo}
                  className="flex flex-col justify-between border border-rose-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-rose-300 transition duration-200"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-rose-50">
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
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-rose-950/90 text-rose-300 px-2 py-0.5 rounded shadow">
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
                      className="block w-full text-center py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow transition duration-150"
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

        {/* 💡 5. 大阪発バスツアー攻略法＆集合場所案内 */}
        <section className="bg-rose-950/5 rounded-3xl p-6 md:p-8 border border-rose-900/10 space-y-6">
          <h2 className="text-lg md:text-xl font-black text-rose-950">
            大阪発バスツアーを120%楽しむための攻略ポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm space-y-2">
              <h3 className="font-bold text-rose-950 flex items-center gap-1.5">
                <span>📍</span> 梅田の集合場所（プラザモータープール注意点）
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                大阪発バスツアーの多くは中津寄りの「プラザモータープール」または「ヨドバシ梅田前」「新大阪駅」です。地下鉄御堂筋線中津駅から徒歩約5分、JR大阪駅からは徒歩約12分かかるため、初めての方は時間に余裕を持って集合しましょう。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm space-y-2">
              <h3 className="font-bold text-rose-950 flex items-center gap-1.5">
                <span>🦀</span> カニツアーの持ち物テクニック
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                カニ食べ放題はお手拭きが何枚あっても足りません！除菌アルコールウェットティッシュや、手の匂いを消すレモンシートを持参すると超快適。お持ち帰り用のカニや海産物を購入するなら、折りたたみ保冷バッグが活躍します。
              </p>
            </div>
          </div>
        </section>

        {/* 🔗 関連記事（内部リンク） */}
        <section className="border-t border-slate-200 pt-8 space-y-4">
          <h2 className="text-base font-bold text-slate-800">
            あわせて読みたい関西発の交通・モデルコースガイド
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/osaka-kanazawa-highway-bus-model-course"
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-rose-500 hover:shadow-sm transition duration-150 flex items-center justify-between group"
            >
              <div>
                <p className="text-xs text-rose-700 font-bold mb-1">北陸モデルコース</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-rose-700 transition">
                  大阪から金沢へ高速バスで行く！兼六園・近江町市場1泊2日満喫モデルコース →
                </p>
              </div>
            </Link>
            <Link
              href="/osaka-tokushima-naruto-bus-vs-car-guide"
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-rose-500 hover:shadow-sm transition duration-150 flex items-center justify-between group"
            >
              <div>
                <p className="text-xs text-rose-700 font-bold mb-1">四国・淡路島アクセス比較</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-rose-700 transition">
                  大阪から徳島・鳴門へ行くなら高速バスvs車どっちが安い？料金・時間徹底比較 →
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
