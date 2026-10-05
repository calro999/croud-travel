import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/korankei-autumn-leaves-lightup-access-guide/" },
  title: "【香嵐渓 紅葉もみじまつり2026】4000本の絶景ライトアップ・大渋滞回避アクセス＆名古屋発日帰りバス ｜ 日本全国・旅宿クラウド",
  description: "東海随一の紅葉名所「香嵐渓」もみじまつり完全ガイド！巴川に映える4,000本のもみじライトアップ、名物五平餅＆鮎の塩焼き、渋滞を回避する早朝ルート＆名古屋駅発直行日帰りバスツアー比較。",
  keywords: ["香嵐渓", "紅葉もみじまつり2026", "4000本の絶景ライトアップ", "大渋滞回避アクセス", "名古屋発日帰りバス", "温泉宿", "宿泊予約"],
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
      return data["korankei-autumn-leaves-lightup-access-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for korankei-autumn-leaves-lightup-access-guide", e);
  }
  return [];
}

export default function KorankeiAutumnLeavesAccessPage() {
  const hotels = loadHotels();

  // 交通手段比較データ
  const transportComparison = [
    {
      method: "名古屋駅発 直行日帰りバスツアー",
      time: "約1時間40分〜2時間（渋滞込み）",
      cost: "約6,500円〜9,500円（昼食・特典付）",
      merit: "運転ストレス皆無！駐車場探しの待ち列なし。お酒やご当地グルメも気兼ねなく楽しめる。",
      demerit: "出発時間・滞在時間が決まっているため自由行動に制約あり。",
      recommend: "★★★★★（最もおすすめ）"
    },
    {
      method: "名鉄電車＋路線バス（東岡崎駅 / 浄水駅発）",
      time: "約1時間30分〜2時間",
      cost: "片道 約1,600円〜1,900円",
      merit: "マイカーの駐車場満車待ちを避けられる。便数が比較的安定。",
      demerit: "香嵐渓手前数キロでバスも渋滞に巻き込まれる可能性あり。往復路の混雑。",
      recommend: "★★★★☆"
    },
    {
      method: "マイカー・レンタカー（東海環状道・豊田勘八IC経由）",
      time: "通常40分 → ピーク時2時間〜3時間超",
      cost: "高速代＋ガソリン代＋駐車料金1,000円",
      merit: "時間を気にせず夜間ライトアップ終了（21時）まで滞在可能。",
      demerit: "国道153号線が朝8時台から大渋滞。駐車場入庫に1〜2時間待ちの覚悟が必要。",
      recommend: "★★★☆☆（早朝7時前着なら◎）"
    }
  ];

  // 香嵐渓の見どころスポット
  const spots = [
    {
      name: "待月橋（たいげつきょう）",
      role: "香嵐渓の象徴・朱塗りの絶景橋",
      desc: "巴川にかかる朱色の橋。昼は色づく飯盛山とのコントラストが鮮やかで、夜はライトアップされた紅葉が川面に鏡のように映り込む屈指の写真スポット。"
    },
    {
      name: "香積寺（こうじゃくじ）参道",
      role: "400年の歴史が宿るモミジ発祥地",
      desc: "寛永11年に三栄和尚が植えたのが香嵐渓モミジの起源。苔むした石段の両脇を覆い尽くすカエデと、参道に灯る竹灯篭のぬくもりある光が幽玄。"
    },
    {
      name: "一の谷（いちのたに）",
      role: "静けさと鮮やかな紅葉のトンネル",
      desc: "巴川の上流に位置し、観光中心部よりも落ち着いた雰囲気。川のせせらぎを聞きながら、頭上一面を真っ赤に染める紅葉のグラデーションに浸れます。"
    },
    {
      name: "三州足助屋敷（さんしゅうあすけやしき）",
      role: "生きた民俗芸能と秋の手仕事体験",
      desc: "昔ながらの山里の暮らしを再現した野外博物館。機織り・和紙漉き・鍛冶の実演を見学でき、藁葺き屋根と黄葉のイチョウの情景が郷愁を誘います。"
    }
  ];

  // 名物ご当地グルメ
  const gourmet = [
    {
      name: "名物 焼きたて五平餅",
      feature: "八丁味噌や特製くるみ胡麻だれをたっぷり塗り、炭火で香ばしく焼き上げた豊田・足助の名物。香ばしい香りが境内に漂います。"
    },
    {
      name: "巴川の鮎の塩焼き",
      feature: "炭火の周りにじっくり串を立てて遠火で焼き上げた天然鮎。皮はパリッと香ばしく、身はふっくらジューシー。"
    },
    {
      name: "もみじ衣揚げ＆刀削麺",
      feature: "本物の紅葉の葉を塩漬けにして揚げた伝統銘菓や、もみじまつり広場で賑わう熱々の屋台グルメ。"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-red-600 selection:text-white pb-20 space-y-16">
      {/* 🍁 HERO: 燃え盛る紅葉と巴川の深紅グラデーション */}
      <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-stone-950 via-red-950/60 to-stone-950 border-b border-red-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/20 via-orange-600/10 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-red-300 text-xs tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            2026 Korankei Maple Festival & Light-Up Guide
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-white leading-snug">
            【香嵐渓 紅葉もみじまつり2026】
            <span className="block mt-2 bg-gradient-to-r from-red-300 via-orange-200 to-amber-300 bg-clip-text text-transparent">
              4000本の絶景ライトアップ・大渋滞回避アクセス＆名古屋発日帰りバス
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-300 max-w-3xl leading-relaxed">
            東海エリア随一の紅葉の聖地・豊田市足助町「香嵐渓」。巴川沿いから飯盛山にかけて植えられた約4,000本、11種類のもみじが黄金・朱・深紅のグラデーションを描きます。日没から21時まで行われる幻想的なライトアップ、香ばしい五平餅、そして毎秋問題となる「国道153号の猛烈な大渋滞」を確実に回避するアクセス戦略とおすすめ宿泊拠点を分かりやすく解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-stone-400">
            <span className="bg-stone-900/80 border border-stone-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              📅 <strong className="text-stone-200">もみじまつり期間：</strong> 11月1日〜11月30日
            </span>
            <span className="bg-stone-900/80 border border-stone-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              💡 <strong className="text-stone-200">ライトアップ：</strong> 日没〜21:00まで
            </span>
            <span className="bg-stone-900/80 border border-stone-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              🍁 <strong className="text-stone-200">紅葉本数：</strong> 約4,000本（イロハモミジ等）
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 🚗 渋滞完全回避！アクセス比較テーブル */}
        <section className="bg-stone-900/90 border border-red-900/40 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="border-l-4 border-red-500 pl-4 space-y-1">
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Access & Traffic Guide</span>
            <h2 className="text-xl sm:text-3xl font-black font-serif text-white">
              大渋滞に巻き込まれない！アクセス手段 徹底比較
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              ピーク時の国道153号は豊田勘八ICから香嵐渓まで通常40分のところ、2〜3時間以上要することも。自分に合った移動手段を選択しましょう。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-red-900/60 text-red-300 font-bold bg-stone-950/60">
                  <th className="py-3 px-4">移動手段</th>
                  <th className="py-3 px-4">所要時間</th>
                  <th className="py-3 px-4">費用目安</th>
                  <th className="py-3 px-4">メリット</th>
                  <th className="py-3 px-4">注意点</th>
                  <th className="py-3 px-4">おすすめ度</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                {transportComparison.map((row, idx) => (
                  <tr key={idx} className={idx === 0 ? "bg-red-950/20" : ""}>
                    <td className="py-4 px-4 font-bold text-white whitespace-nowrap">
                      {row.method}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">{row.time}</td>
                    <td className="py-4 px-4 whitespace-nowrap">{row.cost}</td>
                    <td className="py-4 px-4 min-w-[160px] text-xs leading-relaxed text-amber-200">
                      {row.merit}
                    </td>
                    <td className="py-4 px-4 min-w-[160px] text-xs leading-relaxed text-stone-400">
                      {row.demerit}
                    </td>
                    <td className="py-4 px-4 font-bold text-red-400 whitespace-nowrap">
                      {row.recommend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 渋滞回避の秘訣 */}
          <div className="bg-gradient-to-r from-red-950/40 via-stone-950 to-stone-900 p-5 rounded-2xl border border-red-800/40 space-y-3">
            <h4 className="text-sm font-bold text-red-300 flex items-center gap-2">
              <span>💡</span>
              <span>車で行く場合の裏技：午前7:30前の現地着、または豊田市駅前宿泊</span>
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              自家用車で訪れる場合は、駐車場が満車になる前の<strong>朝7:30までに宮町・川見駐車場等へ入庫する</strong>のが絶対鉄則です。または、前夜に<strong>名鉄豊田市駅前のホテルに宿泊</strong>し、翌朝一番の臨時直行バスに乗車すると、渋滞が本格化する前に現地に到着でき、スムーズに散策を楽しめます。
            </p>
          </div>
        </section>

        {/* 🍁 香嵐渓の4大見どころ */}
        <section className="space-y-6">
          <div className="border-l-4 border-red-500 pl-4 space-y-1">
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Must-See Highlights</span>
            <h2 className="text-xl sm:text-3xl font-black font-serif text-white">
              黄金と深紅の美景！香嵐渓の4大ビュースポット
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              昼夜で全く異なる表情を見せる散策路。外せない撮影名所をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spots.map((spot, idx) => (
              <div
                key={idx}
                className="bg-stone-900/80 border border-stone-800 hover:border-red-500/50 rounded-2xl p-6 transition duration-300 space-y-3 group shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold font-serif text-white group-hover:text-red-300 transition">
                    {spot.name}
                  </h3>
                  <span className="text-[11px] text-amber-300 bg-red-950/60 border border-red-800/40 px-2 py-0.5 rounded">
                    {spot.role}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {spot.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🍡 足助の名物ご当地グルメ */}
        <section className="bg-stone-900/80 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1 border-b border-stone-800 pb-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Local Food</span>
            <h2 className="text-xl sm:text-2xl font-black font-serif text-white">
              散策のお供に！絶対に味わいたい香嵐渓グルメ3選
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {gourmet.map((g, idx) => (
              <div key={idx} className="bg-stone-950/60 border border-stone-800/80 p-4 rounded-xl space-y-2">
                <span className="text-2xl">🍡</span>
                <h3 className="font-bold text-white text-sm">{g.name}</h3>
                <p className="text-xs text-stone-300 leading-relaxed">{g.feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🏨 豊田市駅前のおすすめ宿泊施設（早朝アクセス＆前泊に最適） */}
        <section className="space-y-6">
          <div className="border-l-4 border-red-500 pl-4 space-y-1">
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Hotels in Toyota City</span>
            <h2 className="text-xl sm:text-3xl font-black font-serif text-white">
              香嵐渓への前泊・後泊に最適！豊田市駅前の人気ホテル
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              名鉄豊田市駅前から香嵐渓行きの直行バスが発着。駅前のビジネスホテルに前泊すれば渋滞知らずでアクセス可能です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-stone-900 border border-stone-800 hover:border-red-600/50 rounded-2xl overflow-hidden flex flex-col justify-between transition duration-300 group shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-stone-800 overflow-hidden">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-500 text-xs">
                        写真準備中
                      </div>
                    )}
                    {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2.5 right-2.5 bg-stone-950/90 text-amber-300 text-xs font-bold px-2.5 py-1 rounded border border-red-900/40">
                        ¥{hotel.hotelMinCharge.toLocaleString()}〜 / 室
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      {hotel.nearestStation && (
                        <span className="text-stone-300 bg-stone-800 px-2 py-0.5 rounded text-[11px]">
                          駅: {hotel.nearestStation}
                        </span>
                      )}
                      {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                        <span className="text-amber-300 font-bold text-xs flex items-center gap-1">
                          ★ {hotel.reviewAverage.toFixed(1)}
                          <span className="text-stone-500 font-normal text-[10px]">({hotel.reviewCount}件)</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold font-serif text-white line-clamp-2 group-hover:text-red-300 transition">
                      {hotel.hotelName}
                    </h3>

                    {hotel.hotelSpecial && (
                      <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed">
                        {hotel.hotelSpecial}
                      </p>
                    )}

                    {hotel.access && (
                      <p className="text-[11px] text-stone-500 line-clamp-2 border-t border-stone-800 pt-2">
                        📍 {hotel.access}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-bold text-xs rounded-xl shadow transition duration-200 flex items-center justify-center gap-2 text-center"
                  >
                    <span>楽天トラベルで宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🚌 楽天トラベル 名古屋発日帰りバスツアー＆東海クーポン */}
        <section className="bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 border border-red-800/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-red-900/40 pb-5">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Rakuten Travel Day Trip</span>
              <h2 className="text-xl sm:text-2xl font-black font-serif text-white mt-1">
                名古屋駅発 香嵐渓直行バスツアー＆愛知観光特集
              </h2>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs transition shadow-md whitespace-nowrap"
            >
              日帰りバスツアーを予約 →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-950/70 hover:bg-stone-950/90 border border-red-900/40 hover:border-amber-400/50 p-4 rounded-xl space-y-2 transition block group"
            >
              <div className="text-2xl">🚌</div>
              <h3 className="font-bold text-white group-hover:text-amber-300">
                名古屋駅直行！香嵐渓ライトアップ鑑賞ツアー
              </h3>
              <p className="text-stone-300 leading-relaxed text-xs">
                夕暮れからライトアップまでゆっくり満喫。昼食付きや小原の四季桜コラボツアーなど多彩なプランが充実。
              </p>
            </a>

            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fcoupon%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-950/70 hover:bg-stone-950/90 border border-red-900/40 hover:border-amber-400/50 p-4 rounded-xl space-y-2 transition block group"
            >
              <div className="text-2xl">🎫</div>
              <h3 className="font-bold text-white group-hover:text-amber-300">
                楽天トラベル 愛知・東海エリア宿泊クーポン
              </h3>
              <p className="text-stone-300 leading-relaxed text-xs">
                名古屋市内や豊田市内のホテルで使える特別割引クーポン配布中。ポイント還元キャンペーンも併催。
              </p>
            </a>
          </div>
        </section>

        {/* 🔗 内部リンク */}
        <nav className="border-t border-stone-800 pt-8 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400">関連記事・あわせて読みたい東海・名古屋ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/nagoya-departure-daytrip-bus-tour-guide"
              className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-red-500/40 transition block group"
            >
              <span className="text-red-400 text-xs font-bold">名古屋発バスツアー</span>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-white mt-1">
                【名古屋駅発 日帰りバスツアーおすすめ比較】季節の絶景・食べ放題・温泉プラン完全ガイド →
              </h3>
            </Link>

            <Link
              href="/nagoya-kanazawa-bus-vs-train-guide"
              className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-red-500/40 transition block group"
            >
              <span className="text-red-400 text-xs font-bold">交通・移動比較</span>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-white mt-1">
                【名古屋〜金沢 高速バスvsしらさぎ・新幹線 徹底比較】料金・時間・乗換ルートまとめ →
              </h3>
            </Link>
          </div>
        </nav>
      
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/miyagi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                宮城県の宿・温泉
              </Link>
              <Link
                href="/prefectures/toyama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                富山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kyoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                京都府の宿・温泉
              </Link>
              <Link
                href="/prefectures/osaka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大阪府の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
