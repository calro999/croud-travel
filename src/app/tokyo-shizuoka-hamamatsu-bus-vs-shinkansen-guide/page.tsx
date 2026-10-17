import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tokyo-shizuoka-hamamatsu-bus-vs-shinkansen-guide/" },
  title: "東京〜静岡・浜松：新幹線こだま vs 高速バス徹底比較！片道1,800円〜行く浜松うなぎ＆浜名湖1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
  description: "東京から静岡・浜松へ安く行くには？東海道新幹線「こだま・ひかり」と東名高速バスの料金・所要時間を徹底比較！片道1,800円台〜行ける高速バスを活用し、本場浜松うなぎ、浜松餃子、舘山寺温泉を満喫する1泊2日モデルコース。",
  keywords: ["東京〜静岡", "浜松", "新幹線こだま", "vs", "浜名湖1泊2日モデルコース", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "東京〜静岡・浜松：新幹線こだま vs 高速バス徹底比較！片道1,800円〜行く浜松うなぎ＆浜名湖1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
    description: "東京から静岡・浜松へ安く行くには？東海道新幹線「こだま・ひかり」と東名高速バスの料金・所要時間を徹底比較！片道1,800円台〜行ける高速バスを活用し、本場浜松うなぎ、浜松餃子、舘山寺温泉を満喫する1泊2日モデルコース。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "東京〜静岡・浜松：新幹線こだま vs 高速バス徹底比較！片道1,800円〜行く浜松うなぎ＆浜名湖1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
    description: "東京から静岡・浜松へ安く行くには？東海道新幹線「こだま・ひかり」と東名高速バスの料金・所要時間を徹底比較！片道1,800円台〜行ける高速バスを活用し、本場浜松うなぎ、浜松餃子、舘山寺温泉を満喫する1泊2日モデルコース。",
  }
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-shizuoka-hamamatsu-bus-vs-shinkansen-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-shizuoka-hamamatsu-bus-vs-shinkansen-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "東名高速バス（東京駅〜静岡/浜松駅）",
    "price": "静岡：片道 約1,800円〜2,800円 / 浜松：片道 約2,500円〜3,800円",
    "roundPrice": "静岡往復 約3,600円〜 / 浜松往復 約5,000円〜",
    "duration": "静岡：約3時間 / 浜松：約4時間15分",
    "feature": "最安値！東名高速の足柄SA・富士川SAで富士山パノラマ絶景と静岡茶グルメ。",
    "recommendFor": "学生・うなぎ＆餃子グルメ重視・コスパ派"
  },
  {
    "mode": "東海道新幹線（ひかり/こだま）",
    "price": "静岡：約6,470円 / 浜松：約8,450円（指定席）",
    "roundPrice": "静岡往復 約12,940円 / 浜松往復 約16,900円",
    "duration": "静岡：約55分 / 浜松：約1時間25分",
    "feature": "ひかり号なら浜松までわずか85分。圧倒的な速さと本数の多さ。",
    "recommendFor": "時短重視・ビジネス・ファミリー"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F",
  "ctaText": "🚌 楽天トラベルで「東京 ⇄ 静岡・浜松」の高速バスを検索・予約する",
  "points": [
    "東京駅八重洲南口・バスタ新宿・東名江田から静岡駅・浜松駅へ直行便が運行。",
    "東名ライナー特急便は座席Wi-Fi・USB充電完備で車内作業もスムーズ。",
    "浜松駅からは浜名湖舘山寺温泉行きの路線バスが頻発！"
  ]
};
  const itinerary = [
  {
    "day": "1日目（東京発高速バス〜浜松駅到着〜本場浜松うなぎ＆舘山寺温泉）",
    "steps": [
      {
        "time": "08:00",
        "title": "東京駅八重洲南口から東名高速バス乗車",
        "desc": "富士川SAで雄大な富士山をバックに富士宮やきそばスナックで休憩。"
      },
      {
        "time": "12:15",
        "title": "浜松駅到着＆本場の名店で「極上浜松うなぎ」ランチ",
        "desc": "創業100年を超える名店で、関東風にふっくら蒸し上げて香ばしく焼いた絶品うな重。"
      },
      {
        "time": "14:00",
        "title": "路線バスで浜名湖「舘山寺温泉」へ移動＆かんざんじロープウェイ",
        "desc": "日本で唯一の湖上を渡るロープウェイで大草山展望台へ。浜名湖の絶景パノラマ。"
      },
      {
        "time": "16:00",
        "title": "浜名湖畔の温泉旅館チェックイン＆湖上露天風呂",
        "desc": "夕日に黄金色に染まる浜名湖を望む露天風呂。夕食はうなぎの蒲焼きと遠州灘の海の幸。"
      },
      {
        "time": "20:00",
        "title": "浜名湖パルパル・ライトアップ散策",
        "desc": "湖畔の夜景を眺めながら静かな温泉街の夜を散策。"
      }
    ]
  },
  {
    "day": "2日目（ぬくもりの森〜浜松餃子食べ比べ〜うなぎパイファクトリー〜帰路）",
    "steps": [
      {
        "time": "09:30",
        "title": "おとぎの国のような中世ヨーロッパ風建築「ぬくもりの森」",
        "desc": "森の中に佇むジブリのような可愛い建物群で雑貨ショッピングとスイーツ。"
      },
      {
        "time": "12:00",
        "title": "元祖「浜松餃子」の有名店でランチ（むつぎく・石松等）",
        "desc": "キャベツたっぷりのあっさり餡を円形に焼き上げ、中央にもやしを添えた名物餃子。"
      },
      {
        "time": "14:00",
        "title": "「うなぎパイファクトリー」見学＆お土産購入",
        "desc": "職人が焼き上げるうなぎパイの製造ラインを見学し、限定スイーツを味わう。"
      },
      {
        "time": "16:00",
        "title": "浜松駅から高速バス乗車〜東京へ",
        "desc": "「うなぎパイVSOP」「三ヶ日みかんスイーツ」をお供に夕方のバスで東京へ帰還。"
      }
    ]
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【東京〜静岡・浜松】新幹線こだま vs 高速バス徹底比較！片道1,800円〜行く浜松うなぎ＆浜名湖1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
    "description": "東京から静岡・浜松へ安く行くには？東海道新幹線「こだま・ひかり」と東名高速バスの料金・所要時間を徹底比較！片道1,800円台〜行ける高速バスを活用し、本場浜松うなぎ、浜松餃子、舘山寺温泉を満喫する1泊2日モデルコース。",
    "url": "https://croud-travel.pages.dev/tokyo-shizuoka-hamamatsu-bus-vs-shinkansen-guide/",
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
      { "@type": "ListItem", "position": 2, "name": "【東京〜静岡・浜松】新幹線こだま vs 高速バス徹底比較！片道1,800円〜行く浜松うなぎ＆浜名湖1泊2日モデルコース ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tokyo-shizuoka-hamamatsu-bus-vs-shinkansen-guide/" }
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
              静岡・浜名湖アクセス比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">「東京〜静岡・浜松」新幹線こだま vs 高速バス徹底比較！片道1,800円〜行く浜松うなぎ＆浜名湖1泊2日モデルコース</h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            東海道新幹線なら東京〜浜松約1時間25分・片道約8,450円（往復約16,900円）。東名高速バスなら片道約1,800円〜3,500円！往復で1万円以上浮くため、本場「浜松うな重特上」や浜名湖一望の舘山寺温泉ホテルをランクアップするスマートな旅。
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
            浜名湖一望の絶景露天風呂＆うなぎ料理！舘山寺温泉人気宿
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
                    rel="noopener noreferrer"
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
              📊 東京〜静岡・浜松：新幹線こだま vs 高速バス徹底比較！片道1,800円〜行く浜松うなぎ＆浜名湖1泊2日モデルコース：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「東京〜静岡・浜松：新幹線こだま vs 高速バス徹底比較！片道1,800円〜行く浜松うなぎ＆浜名湖1泊2日モデルコース」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 浜名湖かんざんじ温泉　ホテル鞠水亭</td>
                <td className="p-3 text-stone-600">静岡県浜松市中央区舘山寺町398番地</td>
                <td className="p-3 text-stone-600">浜松駅周辺</td>
                <td className="p-3 text-stone-600">有り　乗用車　80台　大型　4台，無料</td>
                <td className="p-3 font-bold text-amber-600">★4.41（832件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2092%2F2092.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 月の名勝地　割烹旅館　琴水</td>
                <td className="p-3 text-stone-600">静岡県浜松市浜名区三ヶ日町都筑595-1</td>
                <td className="p-3 text-stone-600">東都筑駅周辺</td>
                <td className="p-3 text-stone-600">有り：２０台（無料・先着順）</td>
                <td className="p-3 font-bold text-amber-600">★3.33（76件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7682%2F7682.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 旅館ふじや</td>
                <td className="p-3 text-stone-600">静岡県浜松市中央区舘山寺町2268</td>
                <td className="p-3 text-stone-600">浜松駅周辺</td>
                <td className="p-3 text-stone-600">有り　10台　無料（大人の人数の半数台まで無料）　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.4（162件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F64543%2F64543.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 愛知渥美半島　伊良湖温泉　魚と貝のうまい宿　玉川</td>
                <td className="p-3 text-stone-600">愛知県田原市福江町中紺屋瀬古22-1</td>
                <td className="p-3 text-stone-600">豊橋駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.26（145件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39935%2F39935.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">浜名湖かんざんじ温泉　ホテル鞠水亭</h3>
                  <span className="text-xs text-stone-400 ml-2">（はまなこかんざんじおんせん　ほてるきくすいてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2092/2092_hos.jpg" alt="浜名湖かんざんじ温泉　ホテル鞠水亭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>浜名湖内浦湾と大草山を一望できる湖畔の宿。石造りと御殿風檜造りの2種類の展望露天風呂が自慢です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県浜松市中央区舘山寺町398番地 ／ 最寄り駅：浜松 ／ 交通案内：ＪＲ浜松駅より路線バスで４５分（舘山寺温泉行き）　東名高速、舘山寺スマートＩＣより約５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　乗用車　80台　大型　4台，無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「飾らない雰囲気と親切な対応で何度も利用何度も利用させて頂いてます。いつも、昼前に車を置かせてもらい、近くの鰻屋さんで昼呑みしながら、美味しい鰻を食べてます。飾らない雰囲気が良いし、係の方も皆、親切…　2026-08-27 15:04:46投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">月の名勝地　割烹旅館　琴水</h3>
                  <span className="text-xs text-stone-400 ml-2">（つきのめいしょうち　かっぽうりょかん　きんすい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7682/7682_room.jpg" alt="月の名勝地　割烹旅館　琴水 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>浜名湖すぐ目の前！全室レイクビュー＆お部屋食で寛ぐ老舗旅館</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県浜松市浜名区三ヶ日町都筑595-1 ／ 最寄り駅：東都筑 ／ 交通案内：東名高速三ヶ日ＩＣから車で5分//　天竜浜名湖鉄道　東都筑駅から徒歩13分//　遠州鉄道バス　東都筑駅から徒歩13分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り：２０台（無料・先着順）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「月の名勝地　割烹旅館　琴水は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">旅館ふじや</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふじや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/64543/64543_ky.jpg" alt="旅館ふじや 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>浜名湖にたたずみ、沈む夕日の美しさに感動！お料理は浜名湖、遠州灘の幸を心を込めて調理致します。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県浜松市中央区舘山寺町2268 ／ 最寄り駅：浜松 ／ 交通案内：東名高速浜松西ICから15分、舘山寺スマートICから5分　ＪＲ浜松駅からバスで45分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　10台　無料（大人の人数の半数台まで無料）　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「旅館ふじやは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">愛知渥美半島　伊良湖温泉　魚と貝のうまい宿　玉川</h3>
                  <span className="text-xs text-stone-400 ml-2">（あいちあつみはんとう　いらこおんせん　さかなとかいのうまいやど　たまがわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/39935/39935_meal.jpg" alt="愛知渥美半島　伊良湖温泉　魚と貝のうまい宿　玉川 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>愛知・伊良湖温泉 露天風呂付き客室のある料理旅館</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛知県田原市福江町中紺屋瀬古22-1 ／ 最寄り駅：豊橋 ／ 交通案内：豊橋よりバスにて６０分～福江バス停で下車～徒歩１分／当館の入口は、通りに面したレンガの壁が目印です</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「伊勢湾フェリーの利用に便利、魚料理も絶品翌日に伊勢湾フェリーを利用するために、宿泊しました。一階部分の食堂で夕飯を頂きました。直距離の運転だったので、ビールが最高に旨かったです。魚料理は、お刺身が…　2026-08-26 14:21:44投稿」
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
    
      <HubRelatedPosts currentSlug="tokyo-shizuoka-hamamatsu-bus-vs-shinkansen-guide" />
</div>
  );
}
