import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tokyo-nagano-karuizawa-bus-vs-shinkansen/" },
  title: "東京から長野・軽井沢 安く行く方法：新幹線 vs 高速バス徹底比較！片道1,500円〜の1泊2日モデルコース",
  description: "東京から軽井沢・長野へ安く行くには？北陸新幹線と高速バスの料金・所要時間を比較！新幹線の半額以下（軽井沢片道1,500円〜・長野片道2,500円〜）で行ける高速バスを活用し、善光寺お戒壇巡り・小布施スイーツ・アウトレットを満喫するモデルコース。",
  keywords: ["東京から長野", "軽井沢", "安く行く方法", "新幹線", "vs", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "東京から長野・軽井沢 安く行く方法：新幹線 vs 高速バス徹底比較！片道1,500円〜の1泊2日モデルコース",
    description: "東京から軽井沢・長野へ安く行くには？北陸新幹線と高速バスの料金・所要時間を比較！新幹線の半額以下（軽井沢片道1,500円〜・長野片道2,500円〜）で行ける高速バスを活用し、善光寺お戒壇巡り・小布施スイーツ・アウトレットを満喫するモデルコース。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "東京から長野・軽井沢 安く行く方法：新幹線 vs 高速バス徹底比較！片道1,500円〜の1泊2日モデルコース",
    description: "東京から軽井沢・長野へ安く行くには？北陸新幹線と高速バスの料金・所要時間を比較！新幹線の半額以下（軽井沢片道1,500円〜・長野片道2,500円〜）で行ける高速バスを活用し、善光寺お戒壇巡り・小布施スイーツ・アウトレットを満喫するモデルコース。",
  }
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-nagano-karuizawa-bus-vs-shinkansen"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-nagano-karuizawa-bus-vs-shinkansen", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "高速バス（新宿・池袋・東京〜軽井沢/長野）",
    "price": "軽井沢：片道約1,500円〜3,000円 / 長野：片道約2,500円〜4,500円",
    "roundPrice": "軽井沢往復 約3,000円〜 / 長野往復 約5,000円〜",
    "duration": "軽井沢：約3時間 / 長野：約3時間45分",
    "feature": "料金は新幹線の半額〜3分の1以下！軽井沢プリンスショッピングプラザ直着便もあり。",
    "recommendFor": "お買い物重視・日帰り・学生・週末コスパ旅"
  },
  {
    "mode": "北陸新幹線（あさま・かがやき・はくたか）",
    "price": "軽井沢：約5,940円 / 長野：約8,340円（指定席）",
    "roundPrice": "軽井沢往復 約11,880円 / 長野往復 約16,680円",
    "duration": "軽井沢：約1時間 / 長野：約1時間25分",
    "feature": "最速1時間で信州リゾートへ。全席電源・車内Wi-Fiで快適性抜群。",
    "recommendFor": "時短重視・ファミリー・シニア"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F",
  "ctaText": "🚌 楽天トラベルで「東京 ⇄ 軽井沢・長野」の高速バスを検索・予約する",
  "points": [
    "バスタ新宿・池袋駅・東京駅・渋谷から軽井沢駅・軽井沢プリンス・長野駅行きが毎日多数運行。",
    "関越・上信越道経由で景色抜群。軽井沢アウトレット目の前で降車可能。",
    "週末のプチトリップや避暑地リゾートに大人気の鉄板路線！"
  ]
};
  const itinerary = [
  {
    "day": "1日目（長野善光寺参拝〜信州そば〜長野駅前泊）",
    "steps": [
      {
        "time": "08:00",
        "title": "バスタ新宿から高速バス出発",
        "desc": "上信越道の山並みを眺めながら長野へ。横川SAで名物「峠の釜めし」をチェック。"
      },
      {
        "time": "11:45",
        "title": "長野駅到着＆善光寺表参道で信州手打ちそば",
        "desc": "長野駅からバスまたは徒歩で表参道へ。老舗蕎麦店で十割そばと旬の天ぷらを堪能。"
      },
      {
        "time": "13:30",
        "title": "国宝・善光寺参拝＆「お戒壇巡り」",
        "desc": "一生に一度は訪れたい善光寺。真っ暗な回廊を巡りご本尊と結縁するお戒壇巡りを体験。"
      },
      {
        "time": "16:00",
        "title": "長野駅前ホテルチェックイン＆露天風呂",
        "desc": "善光寺口近くの展望大浴場付きホテルでゆったり寛ぐ。"
      },
      {
        "time": "18:30",
        "title": "信州牛ステーキ＆長野の地酒飲み比べディナー",
        "desc": "駅前の居酒屋やダイニングで長野県産サーロインと銘酒「大信州」「夜明け前」を堪能。"
      }
    ]
  },
  {
    "day": "2日目（小布施の栗スイーツ巡りまたは戸隠神社〜帰路）",
    "steps": [
      {
        "time": "09:00",
        "title": "北信濃の小布施（栗の街・北斎館）へショートトリップ",
        "desc": "長野電鉄で約30分の小布施へ。名物「栗の点心 朱雀」や栗ソフトクリームの食べ歩き。"
      },
      {
        "time": "12:30",
        "title": "葛飾北斎の肉筆画鑑賞＆酒蔵見学",
        "desc": "「北斎館」で晩年の傑作を鑑賞。桝一市村酒造場で限定の純米酒を購入。"
      },
      {
        "time": "15:30",
        "title": "長野駅から高速バス乗車〜新宿・東京へ",
        "desc": "お土産に信州りんごスイーツを買い込み、夕方の高速バスで快適に帰路へ。"
      }
    ]
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【東京から長野・軽井沢 安く行く方法】新幹線 vs 高速バス徹底比較！片道1,500円〜の1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
    "description": "東京から軽井沢・長野へ安く行くには？北陸新幹線と高速バスの料金・所要時間を比較！新幹線の半額以下（軽井沢片道1,500円〜・長野片道2,500円〜）で行ける高速バスを活用し、善光寺お戒壇巡り・小布施スイーツ・アウトレットを満喫するモデルコース。",
    "url": "https://croud-travel.pages.dev/tokyo-nagano-karuizawa-bus-vs-shinkansen/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【東京から長野・軽井沢 安く行く方法】新幹線 vs 高速バス徹底比較！片道1,500円〜の1泊2日モデルコース ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tokyo-nagano-karuizawa-bus-vs-shinkansen/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-slate-900 to-sky-900 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-cyan-400 text-slate-950 px-3.5 py-1 rounded-full uppercase inline-block">
              信州アクセス比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">「東京から長野・軽井沢 安く行く方法」新幹線 vs 高速バス徹底比較！片道1,500円〜の1泊2日モデルコース</h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            東京から長野・軽井沢へ。北陸新幹線なら軽井沢約60分（片道約6,000円）、長野約85分（片道約8,300円）。高速バスなら軽井沢片道約1,500円〜、長野片道約2,500円〜！浮いた交通費で軽井沢アウトレットの買い物や信州牛ディナーを満喫。
          </p>
        </div>
      </div>

      {/* 📊 交通手段・料金・所要時間の徹底比較テーブル */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-cyan-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>⚡ COST & TIME COMPARISON</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900">
            交通手段の徹底比較（料金・所要時間・特徴）
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            それぞれの交通機関のメリット・デメリットを整理しました。旅の目的や予算に合わせて最適な移動手段を選びましょう。
          </p>
        </div>

        {/* 比較テーブル */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <th className="py-3.5 px-4 font-black">移動手段</th>
                <th className="py-3.5 px-4 font-black">片道・往復目安</th>
                <th className="py-3.5 px-4 font-black">所要時間</th>
                <th className="py-3.5 px-4 font-black">メリット・特徴</th>
                <th className="py-3.5 px-4 font-black">こんな人におすすめ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tableData.map((row: any, idx: number) => (
                <tr key={idx} className={idx === 0 ? "bg-amber-50/50 hover:bg-amber-50" : "hover:bg-slate-50/60"}>
                  <td className="py-4 px-4 font-black text-slate-900 whitespace-nowrap">
                    {idx === 0 && <span className="mr-1 text-amber-600 font-black">★最安</span>}
                    {row.mode}
                  </td>
                  <td className="py-4 px-4 font-bold text-amber-700 whitespace-nowrap">
                    <div>{row.price}</div>
                    <div className="text-[11px] text-slate-500 font-normal">{row.roundPrice}</div>
                  </td>
                  <td className="py-4 px-4 font-bold text-slate-800 whitespace-nowrap">
                    {row.duration}
                  </td>
                  <td className="py-4 px-4 text-slate-600 text-xs leading-relaxed min-w-[200px]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-xs font-semibold text-sky-900 min-w-[180px]">
                    {row.recommendFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 高速バスのメリット・予約導線 */}
        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/60 border border-amber-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🚌</span>
            <h3 className="text-base font-black text-amber-950 font-journal-serif">
              高速バスを選ぶ3つの大きなメリット
            </h3>
          </div>
          <ul className="space-y-2 text-xs md:text-sm text-amber-950/90 font-medium list-disc list-inside">
            {busDetails.points.map((pt: string, idx: number) => (
              <li key={idx} className="leading-relaxed">{pt}</li>
            ))}
          </ul>
          <div className="pt-2">
            <a
              href={busDetails.busUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white font-black text-sm rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition duration-200"
            >
              <span>{busDetails.ctaText}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 🗺️ 1泊2日 満喫モデルコース */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>🗺️ RECOMMENDED ITINERARY</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900">
            交通費を浮かせて贅沢に楽しむ！1泊2日おすすめモデルコース
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            移動スケジュールと見どころ、グルメスポットをスムーズに巡る時間配分プランです。
          </p>
        </div>

        <div className="space-y-8">
          {itinerary.map((dayPlan: any, dIdx: number) => (
            <div key={dIdx} className="space-y-4">
              <h3 className="text-base md:text-lg font-black text-slate-900 border-l-4 border-cyan-600 pl-3 py-0.5">
                {dayPlan.day}
              </h3>
              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                {dayPlan.steps.map((step: any, sIdx: number) => (
                  <div key={sIdx} className="relative space-y-1">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-cyan-600 border-2 border-white shadow-sm" />
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-xs font-black text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                        {step.time}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pt-0.5 pl-0.5">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏨 厳選宿カードセクション */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-amber-700 font-extrabold text-xs uppercase tracking-wider mb-1">
            <span>🏨 RECOMMENDED HOTELS & RYOKAN</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-slate-900">
            長野駅直結・徒歩5分！大浴場と信州モーニングが自慢の宿
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            バス停や駅からのアクセスが抜群で、浮いた交通費でワンランク上の滞在が叶う人気宿泊施設です。
          </p>
        </div>

        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotels.map((hotel: any) => (
              <article
                key={hotel.hotelNo}
                className="flex flex-col justify-between border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-100 border-b border-slate-100">
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
                      <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                        ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    {hotel.reviewAverage > 0 && (
                      <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                        <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                      </div>
                    )}
                    <h3 className="text-xs md:text-sm font-black font-journal-serif text-slate-900 line-clamp-2">
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
                    rel="sponsored noopener noreferrer"
                    className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                  >
                    ✈️ 楽天トラベルで宿泊プラン・空室を見る
                  </a>
                </div>
              
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 東京から長野・軽井沢 安く行く方法：新幹線 vs 高速バス徹底比較！片道1,500円〜の1泊2日モデルコース：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「東京から長野・軽井沢 安く行く方法：新幹線 vs 高速バス徹底比較！片道1,500円〜の1泊2日モデルコース」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 天然温泉ホテルリブマックスＰＲＥＭＩＵＭ長野駅前</td>
                <td className="p-3 text-stone-600">長野県長野市大字栗田2145</td>
                <td className="p-3 text-stone-600">長野駅周辺</td>
                <td className="p-3 text-stone-600">無し</td>
                <td className="p-3 font-bold text-amber-600">★4.07（234件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181252%2F181252.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 裾花峡温泉　うるおい館</td>
                <td className="p-3 text-stone-600">長野県長野市妻科98</td>
                <td className="p-3 text-stone-600">長野駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場有り150台　地下駐車場50台を含みます。</td>
                <td className="p-3 font-bold text-amber-600">★4.29（248件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20555%2F20555.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルエミシア東京立川</td>
                <td className="p-3 text-stone-600">東京都立川市曙町2-14-16</td>
                <td className="p-3 text-stone-600">立川駅周辺</td>
                <td className="p-3 text-stone-600">1泊1600円　　※現在、ホテル地下Pは営業時間を短縮してます。詳しくはHPをご確認下さい。</td>
                <td className="p-3 font-bold text-amber-600">★4.37（3835件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,465〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F262%2F262.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルメトロポリタン</td>
                <td className="p-3 text-stone-600">東京都豊島区西池袋1-6-１</td>
                <td className="p-3 text-stone-600">池袋駅周辺</td>
                <td className="p-3 text-stone-600">有　1泊につき1台  3,000円</td>
                <td className="p-3 font-bold text-amber-600">★4.4（4348件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F388%2F388.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 渋谷東急ＲＥＩホテル</td>
                <td className="p-3 text-stone-600">東京都渋谷区渋谷1-24-10</td>
                <td className="p-3 text-stone-600">渋谷駅周辺</td>
                <td className="p-3 text-stone-600">近隣の提携駐車場　車体制限あり　ホテルに問い合わせ要</td>
                <td className="p-3 font-bold text-amber-600">★4.07（1396件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F509%2F509.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉ホテルリブマックスＰＲＥＭＩＵＭ長野駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせんほてるりぶまっくすぷれみあむながのえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/181252/181252.jpg" alt="天然温泉ホテルリブマックスＰＲＥＭＩＵＭ長野駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【2020年10月OPEN】ＪＲ信越線、北陸新幹線「長野」駅東口より徒歩約３分 ◇天然温泉＆サウナ◇</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県長野市大字栗田2145 ／ 最寄り駅：長野 ／ 交通案内：ＪＲ信越線／北陸新幹線　長野駅より徒歩にて約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅チカでサウナ、大浴場付きのお風呂は最高でした。部屋も広くよく眠ることができました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…　2026-07-23 12:52:05投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">裾花峡温泉　うるおい館</h3>
                  <span className="text-xs text-stone-400 ml-2">（うるおいかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/20555/20555_heya.jpg" alt="裾花峡温泉　うるおい館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【風呂4.7】長野駅から車で7分の源泉かけ流しの温泉宿！喧騒を忘れる広大な露天風呂と部屋食が大好評</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県長野市妻科98 ／ 最寄り駅：長野 ／ 交通案内：ＪＲ長野駅、善光寺より車で約７分／長野県庁から徒歩10分・上信越道長野ＩＣより２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場有り150台　地下駐車場50台を含みます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「源泉かけ流しの温泉部屋についている温泉も源泉かけ流しで広くてとても良かった。ご飯も美味しい。窓から渓流が見えるが、雨が降ったので濁流だった。街中の地元民が日常使いする日帰り温浴施設の上が宿…　2026-08-29 12:00:57投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルエミシア東京立川</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるえみしあとうきょうたちかわ　たちかわぐらんどほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,465〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/262/262_sgl.jpg" alt="ホテルエミシア東京立川 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室Wi-Fi無料！JR立川駅徒歩2分。ビジネスにも観光にも最適なシティホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 東京都立川市曙町2-14-16 ／ 最寄り駅：立川 ／ 交通案内：▼▼▼ＪＲ立川駅北口より徒歩２分。多摩モノレール立川北駅より徒歩3分。中央道国立府中ICから25分▼▼▼</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊1600円　　※現在、ホテル地下Pは営業時間を短縮してます。詳しくはHPをご確認下さい。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.35 ／ 立地 ★4.33 ／ 部屋 ★4.36 ／ 設備 ★4.31 ／ 風呂 ★4.21 ／ 食事 ★4.5</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「フロントの丁寧な対応と充実したアメニティに感動今はだいたいが自動チェックイン・アウトになっています。ホテルによっては、「そこの機械で!」とほっておかれることがありますが、エミシアのフロント…　2026-10-09 18:00:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルメトロポリタン</h3>
                  <span className="text-xs text-stone-400 ml-2">（めとろぽりたん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/388/388_sgl.jpg" alt="ホテルメトロポリタン 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>～やすらぎと華やぎが出会う場所～JR東日本グループのホテルとして、皆さまお越しをお待ちしております。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 東京都豊島区西池袋1-6-１ ／ 最寄り駅：池袋 ／ 交通案内：池袋駅西口より徒歩３分、東京駅より地下鉄で17分、羽田空港へのリムジンバス（有料）がホテル正面玄関にて発着します。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　1泊につき1台  3,000円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「マットレスが快適すぎて早々に寝落ち女子会で利用しました。ホテルのお部屋もベッドも寝心地よく最高でした。そして遅くまでゆっくり話そうと約束していた私なのに...。21時半にマットレスの気…　2026-08-28 18:10:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">渋谷東急ＲＥＩホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（しぶやとうきゅうれい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/509/509_si.jpg" alt="渋谷東急ＲＥＩホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>渋谷駅すぐ◇観光やビジネス、ショッピングの拠点に</p>
                  <p><strong>【所在地・アクセス】</strong>〒 東京都渋谷区渋谷1-24-10 ／ 最寄り駅：渋谷 ／ 交通案内：ＪＲ渋谷駅より徒歩2分（宮益坂口、宮下公園隣り）　東京メトロ・東急渋谷駅B2番出口すぐ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>近隣の提携駐車場　車体制限あり　ホテルに問い合わせ要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「アクセスも良く、丁寧な接客でとても良かった!ライブのために利用させていただきました。渋谷なので、治安が心配でしたが、アクセスも良く、迷うことなく辿り着けました。また、それほど混み合った場所では…　2026-07-06 18:39:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！東京都の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、東京都を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">浅草寺・雷門</h3>
                <p className="text-xs text-stone-600 leading-relaxed">都内最古の寺院であり、巨大な大提灯が吊り下げられた「雷門」が東京観光の顔。仲見世通りには名物の人形焼きや煎餅店が立ち並び江戸風情を色濃く残します。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">東京タワー</h3>
                <p className="text-xs text-stone-600 leading-relaxed">昭和33年に開業した高さ333mの赤と白の総合電波塔。メインデッキやトップデッキからの都心のナイトビューと季節ごとのライトアップが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">東京スカイツリー</h3>
                <p className="text-xs text-stone-600 leading-relaxed">高さ634mを誇る世界一高い自立式電波塔。地上350m・450mの展望台からは関東一円を見渡せる超パノラマ絶景が広がり、商業施設ソラマチも隣接しています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">明治神宮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治天皇と昭憲皇太后をお祀りする神社。都会の真ん中にありながら約70ヘクタールの豊かな人工林に囲まれた清らかな癒やしとパワーのスポットです。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 東京都エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 東京都の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 text-xs">
            ホテル情報を読み込み中または該当ホテルを検索中です。
          </div>
        )}
      </section>

      {/* 🚌 楽天トラベル 観光バスツアー・フェリー・観光列車 クロスセルセクション */}
      <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-teal-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-white/10 space-y-6">
        <div className="space-y-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL SPECIAL TOUR
            </span>
            <span className="text-xs text-amber-200 font-bold">
              手ぶらで名所めぐり＆絶景旅
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white">
            楽天トラベル 日帰りバスツアー＆観光特集でさらに旅を満喫！
          </h2>
          <p className="text-xs md:text-sm text-amber-100/80 leading-relaxed font-medium">
            個人手配が難しい季節のフルーツ狩り・絶景ライトアップ・ご当地名物食べ放題など、添乗員付きで安心して楽しめる人気バスツアーやテーマ別特集も要チェック。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-amber-400 transition space-y-2 group"
          >
            <div className="text-2xl">🍓</div>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-300 transition">
              季節の味覚＆日帰りバスツアー
            </h3>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              いちご・ぶどう・松茸など旬の味覚狩りや名所巡りがセットでお得。
            </p>
            <div className="text-[11px] font-bold text-amber-400 pt-1 flex items-center gap-1">
              <span>バスツアーを見る</span>
              <span>→</span>
            </div>
          </a>

          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F"
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-amber-400 transition space-y-2 group"
          >
            <div className="text-2xl">🎫</div>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-300 transition">
              高速バス タイムセール＆クーポン
            </h3>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              楽天トラベル限定の高速バス割引クーポン＆お得な夜行便セール。
            </p>
            <div className="text-[11px] font-bold text-amber-400 pt-1 flex items-center gap-1">
              <span>クーポンを見る</span>
              <span>→</span>
            </div>
          </a>

          <Link
            href="/scenic-tourist-train-onsen-trip-stay"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-amber-400 transition space-y-2 group"
          >
            <div className="text-2xl">🚅</div>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-300 transition">
              人気観光列車＆極上名旅館
            </h3>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              サフィール踊り子・しまかぜ・ゆふいんの森で行く贅沢列車ステイ。
            </p>
            <div className="text-[11px] font-bold text-amber-400 pt-1 flex items-center gap-1">
              <span>観光列車ガイドを見る</span>
              <span>→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="tokyo-nagano-karuizawa-bus-vs-shinkansen" />
</div>
  );
}
