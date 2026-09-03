import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【福岡・博多発 日帰りバスツアー】呼子活イカ・由布院温泉街散策・阿蘇カルデラ絶景の格安ツアー比較",
  description: "福岡・博多・天神発の日帰りバスツアー！佐賀呼子の透明な活きイカ会席、湯布院金鱗湖＆露天風呂入浴、熊本阿蘇のあか牛ランチなど、車なし・手ぶらで大満足できるおすすめ日帰りツアーまとめ。",
  keywords: [
    "福岡発 日帰りバスツアー",
    "博多発 バスツアー",
    "呼子イカ 日帰りバス 福岡",
    "由布院 日帰り温泉 バスツアー",
    "阿蘇 日帰りバスツアー 福岡",
    "天神発 日帰り旅行",
    "楽天トラベル バスツアー 九州"
  ],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["fukuoka-departure-daytrip-bus-tour-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for fukuoka-departure-daytrip-bus-tour-guide", e);
  }
  return [];
}

export default function FukuokaDepartureDaytripBusTourPage() {
  const hotels = loadHotels();

  const kyushuTours = [
    {
      destination: "佐賀・呼子 活きイカ会席御膳＆唐津城・虹の松原",
      area: "佐賀・唐津エリア",
      price: "8,900円〜11,800円",
      time: "約8.5時間（8:30博多発〜17:00着）",
      experience: "透き通る身とコリコリ食感！職人が生簀から直前捌きする呼子イカ活造り（後造りの天ぷら付き）。日本三大松原をドライブ。",
      departures: "博多駅筑紫口・天神（日銀前）",
      badge: "グルメ海鮮No.1"
    },
    {
      destination: "大分・由布院 金鱗湖散策＆湯の坪街道食べ歩き＋絶景露天風呂入浴",
      area: "大分・湯布院エリア",
      price: "9,500円〜12,500円",
      time: "約10時間（8:00博多発〜18:00着）",
      experience: "由布岳を望む老舗旅館の立ち寄り温泉入浴。金鱗湖の幻想的な景色と、湯の坪街道で金賞コロッケやミルヒのケーゼクーヘンを堪能。",
      departures: "博多駅筑紫口・福岡空港国際線",
      badge: "温泉癒やしNo.1"
    },
    {
      destination: "熊本・阿蘇 大観峰パノラマ絶景＆あか牛丼ランチ＋草千里ヶ浜",
      area: "熊本・阿蘇エリア",
      price: "10,000円〜13,500円",
      time: "約11時間（7:45博多発〜18:45着）",
      experience: "阿蘇五岳を一望する360度大パノラマ。脂肪分が少なく旨味の強いブランド和牛『あか牛』の贅沢丼。火口見学や広大な草千里を散策。",
      departures: "博多駅筑紫口・天神",
      badge: "大自然絶景No.1"
    },
    {
      destination: "宮崎・高千穂 神話の里 高千穂峡ボート＆真名井の滝＋高千穂牛",
      area: "宮崎・高千穂エリア",
      price: "12,000円〜15,800円",
      time: "約12時間（7:15博多発〜19:15着）",
      experience: "柱状節理の渓谷美と神話の息づく高千穂神社。電車では行きにくい秘境パワースポットへ直行し、ブランド牛の高千穂牛に舌鼓。",
      departures: "博多駅筑紫口",
      badge: "秘境パワースポット"
    }
  ];

  const travelAnalysis = [
    {
      feature: "交通＋食事トータル実費",
      bus: "約9,000〜12,000円（イカ会席やあか牛ランチ込み）",
      car: "約16,000〜22,000円（高速往復＋ガソリン＋昼食代・1名換算）",
      train: "約13,000〜18,000円（JR特急ゆふいんの森やリレーかもめ＋路線バス）"
    },
    {
      feature: "ハンドルキーパーの負担",
      bus: "◎ 全員お酒・ビールOK！帰りの車内で熟睡できる",
      car: "× 西九州道や大分道のロングドライブで運転手が疲弊",
      train: "◯ 車内飲食可能だが荷物を持っての乗り換えが複数回発生"
    },
    {
      feature: "アクセス難易度（呼子・高千穂等）",
      bus: "◎ 電車の駅がない絶景・漁港までドアツードア直結",
      car: "◯ 直行できるが観光客集中時の駐車場探しに難渋",
      train: "× 最寄駅から路線バス乗り継ぎとなり1日観光が困難"
    }
  ];

  const yobukoSchedule = [
    {
      clock: "08:30",
      spot: "博多駅筑紫口（貸切バス駐車場）集合・出発",
      content: "福岡都市高速から西九州自動車道へ。玄界灘の青い海を右手に見ながら佐賀・唐津方面へ快適クルージング。"
    },
    {
      clock: "10:00〜10:45",
      spot: "唐津城（舞鶴城）＆日本三大松原「虹の松原」車窓観光",
      content: "天守閣から唐津湾と松原の壮大な景色を眺望。歴史ある城下町の風情を味わいます。"
    },
    {
      clock: "11:15〜13:00",
      spot: "佐賀・呼子港 活イカ料理専門店で「呼子活きイカ会席」舌鼓",
      content: "運ばれてきた瞬間まだ動いている驚異の鮮度！透き通る身のコリコリとした甘みと旨味。ゲソや耳はサクサクの天ぷらにして揚げたてを堪能。"
    },
    {
      clock: "13:15〜14:15",
      spot: "呼子朝市通り散策＆マリンパル呼子（海中展望船ジーラ）",
      content: "日本三大朝市として知られる呼子通りで、いかしゅうまいや天日干しの干物をお土産にお買い物。"
    },
    {
      clock: "14:45〜15:30",
      spot: "鏡山展望台（佐賀屈指のパノラマビュースポット）",
      content: "標高284mから見下ろす虹の松原と唐津湾の絶景。インスタ映え抜群の記念撮影スポット。"
    },
    {
      clock: "17:00",
      spot: "博多駅筑紫口 到着・解散",
      content: "夕方の早い時間に戻れるため、博多駅ビル「くうてん」や中洲での夜の食事会にもスムーズに合流可能。"
    }
  ];

  return (
    <div className="min-h-screen bg-teal-50/25 text-slate-800 antialiased">
      {/* 🌊 Hero Header - Teal Theme */}
      <header className="relative bg-gradient-to-br from-teal-950 via-teal-900 to-cyan-950 text-white overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-teal-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-200 text-xs font-bold tracking-wide">
            <span>🦑 2026年最新 九州・福岡発バス旅</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" />
            <span>博多・天神発 手ぶら日帰り</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight md:leading-[1.2] text-white">
            【福岡・博多発 日帰りバスツアー】
            <br />
            <span className="text-teal-300">呼子活イカ・由布院温泉街散策・阿蘇カルデラ絶景</span>
            <span className="text-teal-100">の格安ツアー比較</span>
          </h1>

          <p className="text-teal-100/90 text-sm md:text-base max-w-3xl leading-relaxed pt-2">
            博多駅・天神から出発する人気日帰りバスツアーを完全ナビ！佐賀呼子の透明な活きイカ会席、大分湯布院の金鱗湖散策と立ち寄り温泉、熊本阿蘇の雄大なカルデラとあか牛ランチまで、電車や車より手軽でコスパ抜群な九州日帰り旅の決定版。
          </p>

          <div className="flex flex-wrap gap-2 pt-3">
            <span className="px-2.5 py-1 rounded bg-teal-900/60 border border-teal-700/50 text-teal-200 text-xs font-medium">#博多発バスツアー</span>
            <span className="px-2.5 py-1 rounded bg-teal-900/60 border border-teal-700/50 text-teal-200 text-xs font-medium">#呼子イカ日帰り</span>
            <span className="px-2.5 py-1 rounded bg-teal-900/60 border border-teal-700/50 text-teal-200 text-xs font-medium">#由布院温泉日帰り</span>
            <span className="px-2.5 py-1 rounded bg-teal-900/60 border border-teal-700/50 text-teal-200 text-xs font-medium">#阿蘇あか牛</span>
          </div>
        </div>
      </header>

      {/* 🚀 Breadcrumbs */}
      <nav className="bg-teal-950/10 border-b border-teal-950/10 py-2.5 px-4 text-xs text-slate-600">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-teal-700 transition">ホーム</Link>
          <span>›</span>
          <span className="text-teal-950 font-bold">福岡・博多発 日帰りバスツアー徹底比較</span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
        {/* 🌟 Official Banner Section */}
        <section className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-teal-950/10 flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-400/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider">
              Rakuten Travel Official
            </span>
            <h2 className="text-xl md:text-2xl font-black leading-snug">
              楽天トラベル「九州・福岡発 日帰りバスツアー」公式予約
            </h2>
            <p className="text-teal-50 text-xs md:text-sm max-w-xl">
              呼子イカ・湯布院・阿蘇・高千穂ツアーが満載！楽天ポイントが貯まる＆高速バス・バスツアークーポンでさらにお得。
            </p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-sm md:text-base rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-200"
          >
            <span>🦑 楽天トラベルで九州発バスツアーを探す</span>
            <span className="text-base">→</span>
          </a>
        </section>

        {/* 🗺️ 1. 九州発 人気4大ルート比較 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-teal-100 shadow-sm space-y-6">
          <div className="border-b border-teal-100 pb-4">
            <div className="flex items-center gap-2 text-teal-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>KYUSHU DAYTRIP BEST ROUTES</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              【福岡・博多・天神発】人気日帰りバスツアー4大プラン徹底比較
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              玄界灘の新鮮魚介、名湯温泉街、雄大な阿蘇カルデラ、神話の渓谷まで九州の魅力を網羅。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kyushuTours.map((item, idx) => (
              <div
                key={idx}
                className="bg-teal-50/30 border border-teal-200/80 rounded-2xl p-5 flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-700 text-white text-[10px] font-black tracking-wide">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">
                      {item.area}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {item.destination}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.experience}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-teal-200/60 space-y-1.5 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500 font-medium">目安料金:</span>
                    <span className="text-base font-black text-teal-800">{item.price}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500 font-medium">所要時間:</span>
                    <span className="font-bold text-slate-700">{item.time}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 pt-0.5">
                    集合地: {item.departures}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📊 2. 移動手段別：バスツアー vs レンタカー vs JR特急 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-teal-100 shadow-sm space-y-6">
          <div className="border-b border-teal-100 pb-4">
            <div className="flex items-center gap-2 text-teal-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>BENEFIT COMPARISON</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              呼子や阿蘇へ行くならどっち？日帰りバスツアー vs レンタカー vs 電車
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              特に「駅からのアクセスが不便な観光地」において、バスツアーの圧倒的な利便性を徹底比較。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-teal-900 text-white">
                  <th className="p-3.5 md:p-4 rounded-tl-xl font-bold w-1/4">比較項目</th>
                  <th className="p-3.5 md:p-4 font-bold bg-teal-800 text-teal-100 w-2/5">🚌 日帰りバスツアー（推奨）</th>
                  <th className="p-3.5 md:p-4 font-bold">🚗 レンタカー・マイカー</th>
                  <th className="p-3.5 md:p-4 rounded-tr-xl font-bold">🚆 JR特急＋路線バス</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-100">
                {travelAnalysis.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-teal-50/20"}>
                    <td className="p-3.5 md:p-4 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-3.5 md:p-4 font-semibold text-teal-950 bg-teal-50/50">{row.bus}</td>
                    <td className="p-3.5 md:p-4 text-slate-600 text-xs">{row.car}</td>
                    <td className="p-3.5 md:p-4 text-slate-600 text-xs">{row.train}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 🦑 3. モデルコース：呼子イカ活造り＆虹の松原 1日スケジュール */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-teal-100 shadow-sm space-y-6">
          <div className="border-b border-teal-100 pb-4">
            <div className="flex items-center gap-2 text-teal-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>MODEL ITINERARY</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              【博多発】佐賀・呼子活きイカ会席＆唐津絶景 1日満喫タイムライン
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              朝8:30に出発し、夕方17:00には博多駅へ戻る快適グルメ日帰り旅。
            </p>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-teal-200">
            {yobukoSchedule.map((step, sIdx) => (
              <div key={sIdx} className="relative space-y-1">
                <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-teal-600 border-2 border-white shadow-sm" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs font-black text-teal-950 bg-teal-100 px-2 py-0.5 rounded border border-teal-300">
                    {step.clock}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    {step.spot}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-0.5 pl-0.5">
                  {step.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🏨 4. 厳選温泉旅館・ホテル（由布院・唐津） */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-teal-100 shadow-sm space-y-6">
          <div className="border-b border-teal-100 pb-4">
            <div className="flex items-center gap-2 text-teal-700 font-extrabold text-xs tracking-wider uppercase mb-1">
              <span>RECOMMENDED ONSEN RYOKAN</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              日帰りツアーの目的地で泊まるならここ！由布院温泉＆唐津の高級料理旅館
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              「日帰りだけではもったいない」「次は泊まりでゆっくり温泉に浸かりたい」という方向けの厳選宿です。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {hotels.map((hotel: any) => (
                <article
                  key={hotel.hotelNo}
                  className="flex flex-col justify-between border border-teal-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-teal-300 transition duration-200"
                >
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-teal-50">
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
                        <span className="absolute bottom-2 right-2 text-[10px] font-black bg-teal-950/90 text-teal-300 px-2 py-0.5 rounded shadow">
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
                      className="block w-full text-center py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl shadow transition duration-150"
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

        {/* 💡 5. 博多発バスツアーお役立ちメモ */}
        <section className="bg-teal-950/5 rounded-3xl p-6 md:p-8 border border-teal-900/10 space-y-6">
          <h2 className="text-lg md:text-xl font-black text-teal-950">
            博多・天神発バスツアー参加のポイント＆注意事項
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-2">
              <h3 className="font-bold text-teal-950 flex items-center gap-1.5">
                <span>📍</span> 博多駅筑紫口（バス駐車場）への行き方
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                博多発の観光バスの集合場所は、新幹線側の「筑紫口」を出てロータリー右手、またはオリエンタルホテル福岡博多ステーション前のバスプールが一般的です。地下鉄やJR在来線からは中央街コンコースを通り抜けて徒歩約3分です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-2">
              <h3 className="font-bold text-teal-950 flex items-center gap-1.5">
                <span>🦑</span> 呼子のイカ活造りに関する注意事項
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                呼子のイカは天候・シケによる出漁状況によって「ヤリイカ」「アオリイカ」などの種類が変わる場合があります。万が一の不漁時は別料理（イカソーメン等）に代替される規約があるため、気になる方は事前に確認しておきましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 🔗 関連記事（内部リンク） */}
        <section className="border-t border-slate-200 pt-8 space-y-4">
          <h2 className="text-base font-bold text-slate-800">
            あわせて読みたい九州発の交通・旅行ガイド
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/fukuoka-beppu-yufuin-bus-vs-train-guide"
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-sm transition duration-150 flex items-center justify-between group"
            >
              <div>
                <p className="text-xs text-teal-700 font-bold mb-1">大分・別府温泉比較</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-teal-700 transition">
                  福岡・博多から別府・由布院へ行くなら高速バスvsJR特急どっちがおすすめ？ →
                </p>
              </div>
            </Link>
            <Link
              href="/fukuoka-kumamoto-bus-vs-shinkansen-guide"
              className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-sm transition duration-150 flex items-center justify-between group"
            >
              <div>
                <p className="text-xs text-teal-700 font-bold mb-1">熊本・新幹線比較</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-teal-700 transition">
                  博多から熊本へ安く行く！九州新幹線vs高速バスひのくに号の料金・時間徹底比較 →
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
