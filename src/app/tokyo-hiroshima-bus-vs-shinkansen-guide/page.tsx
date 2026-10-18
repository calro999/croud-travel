import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tokyo-hiroshima-bus-vs-shinkansen-guide/" },
  title: "東京〜広島：新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース",
  description: "東京から広島へ安く行くには？東海道・山陽新幹線「のぞみ」、飛行機（羽田・成田）、夜行高速バスの料金・所要時間比較！浮いた2.5万円で宮島温泉旅館に泊まり、牡蠣と広島焼きを満喫する1泊2日モデルコース。",
  keywords: ["東京〜広島", "新幹線", "vs", "飛行機", "夜行バス徹底比較！厳島神社", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "東京〜広島：新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース",
    description: "東京から広島へ安く行くには？東海道・山陽新幹線「のぞみ」、飛行機（羽田・成田）、夜行高速バスの料金・所要時間比較！浮いた2.5万円で宮島温泉旅館に泊まり、牡蠣と広島焼きを満喫する1泊2日モデルコース。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "東京〜広島：新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース",
    description: "東京から広島へ安く行くには？東海道・山陽新幹線「のぞみ」、飛行機（羽田・成田）、夜行高速バスの料金・所要時間比較！浮いた2.5万円で宮島温泉旅館に泊まり、牡蠣と広島焼きを満喫する1泊2日モデルコース。",
  }
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-hiroshima-bus-vs-shinkansen-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-hiroshima-bus-vs-shinkansen-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "夜行高速バス（直行）",
    "price": "片道 約5,500円〜11,000円",
    "roundPrice": "往復 約11,000円〜22,000円",
    "duration": "約11時間30分〜12時間",
    "feature": "最安値！夜20:30〜21:30東京発で翌朝7:30〜8:30に広島駅直着。朝イチから宮島へ直行可能。",
    "recommendFor": "学生・ひとり旅・20代・旅費を抑えて現地グルメ・宿を贅沢にしたい方"
  },
  {
    "mode": "東海道・山陽新幹線（のぞみ）",
    "price": "片道 約19,760円（指定席）",
    "roundPrice": "往復 約39,520円",
    "duration": "約3時間50分",
    "feature": "乗り換えなしで広島駅直行。天候に左右されず確実なスケジュール運行。",
    "recommendFor": "ファミリー・シニア・快適性重視"
  },
  {
    "mode": "飛行機（羽田〜広島 / 成田〜広島LCC）",
    "price": "片道 約7,000円（LCC）〜18,000円（JAL/ANA）",
    "roundPrice": "往復 約14,000円〜36,000円",
    "duration": "フライト約1時間30分（＋空港アクセス約60分）",
    "feature": "フライト時間は短いが、広島空港から広島市内までリムジンバスで約50分。",
    "recommendFor": "マイル利用・成田発LCCセール利用"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F",
  "ctaText": "🚌 楽天トラベルで「東京 ⇄ 広島」の高速バス最安値を検索・予約する",
  "points": [
    "バスタ新宿・東京駅八重洲口から広島駅新幹線口へ直行夜行バスが運行。",
    "長距離路線専用の「3列独立デラックスシート」「充電ポート」「フットレスト・レッグレスト」完備。",
    "寝ている間に移動完了するので、1泊分の宿泊費をまるごと節約！"
  ]
};
  const itinerary = [
  {
    "day": "1日目（早朝広島着〜宮島フェリー〜厳島神社＆牡蠣）",
    "steps": [
      {
        "time": "08:00",
        "title": "広島駅到着＆駅コインロッカーに荷物を預けて宮島口へ",
        "desc": "JR山陽本線で約30分の宮島口へ。JR西日本宮島フェリーで海上に浮かぶ大鳥居を眺めながら宮島上陸。"
      },
      {
        "time": "09:30",
        "title": "世界遺産「厳島神社」参拝＆表参道商店街",
        "desc": "潮の満ち引きで表情を変える朱塗りの社殿を参拝。揚げもみじや焼き牡蠣を食べ歩き。"
      },
      {
        "time": "13:00",
        "title": "宮島名物「あなごめし」の贅沢ランチ",
        "desc": "創業100年以上の名店「うえの」などで、香ばしくタレで焼き上げた絶品あなごめし。"
      },
      {
        "time": "15:30",
        "title": "広島市内へ戻りホテルチェックイン",
        "desc": "浮いた交通費で広島駅前・八丁堀のハイクラスホテルや天然温泉ホテルへ。"
      },
      {
        "time": "18:30",
        "title": "お好み村・駅ナカで本場「広島お好み焼き」＆広島レモンサワー",
        "desc": "キャベツたっぷり、パリパリそばと甘辛オタフクソースが絡むアツアツの鉄板焼き。"
      }
    ]
  },
  {
    "day": "2日目（平和記念公園〜原爆ドーム〜広島城〜帰路）",
    "steps": [
      {
        "time": "09:00",
        "title": "世界遺産「原爆ドーム」＆広島平和記念資料館",
        "desc": "路面電車（広電）で原爆ドーム前へ。静かに祈りを捧げ、歴史と平和を学ぶ時間。"
      },
      {
        "time": "12:00",
        "title": "おりづるタワー展望台で広島の街と瀬戸内海を一望",
        "desc": "ウッドデッキの開放的な展望スペース「ひろしまの丘」でカフェタイム。"
      },
      {
        "time": "14:30",
        "title": "広島駅「ekie」でお土産選び",
        "desc": "「生もみじ」「因島のはっさくゼリー」「牡蠣のオイル漬け」を購入。"
      },
      {
        "time": "16:00",
        "title": "帰路（新幹線または夜行バスで東京へ）",
        "desc": "駅弁「しゃもじかきめし」を味わいながら東京へ。"
      }
    ]
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【東京〜広島】新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
    "description": "東京から広島へ安く行くには？東海道・山陽新幹線「のぞみ」、飛行機（羽田・成田）、夜行高速バスの料金・所要時間比較！浮いた2.5万円で宮島温泉旅館に泊まり、牡蠣と広島焼きを満喫する1泊2日モデルコース。",
    "url": "https://croud-travel.pages.dev/tokyo-hiroshima-bus-vs-shinkansen-guide/",
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
      { "@type": "ListItem", "position": 2, "name": "【東京〜広島】新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tokyo-hiroshima-bus-vs-shinkansen-guide/" }
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
              山陽・中国地方アクセス比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">「東京〜広島」新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース</h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            新幹線なら東京〜広島約3時間50分・片道約19,760円（往復約39,520円）。夜行高速バスなら片道約5,500円〜！往復で約3万円近く節約でき、朝7時に広島駅へ到着するため、午前中に世界遺産「厳島神社」の満潮大鳥居を満喫できます。
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
            広島駅徒歩5分！大浴場付き＆宮島アクセス抜群の人気ホテル
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
              📊 東京〜広島：新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「東京〜広島：新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. アパホテル〈広島駅前新幹線口〉</td>
                <td className="p-3 text-stone-600">広島県広島市東区上大須賀町2-29</td>
                <td className="p-3 text-stone-600">広島駅周辺</td>
                <td className="p-3 text-stone-600">16台（先着順、予約不可）、【料金】入庫から24時間 1,500円【時間外】 30分につき200円</td>
                <td className="p-3 font-bold text-amber-600">★4.15（636件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,275〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191892%2F191892.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. アパホテル〈広島駅前大橋〉</td>
                <td className="p-3 text-stone-600">広島県広島市南区京橋町2-26</td>
                <td className="p-3 text-stone-600">広島駅周辺</td>
                <td className="p-3 text-stone-600">先着順　入庫から24時間で1500円　入出庫：7：00-22：00　大きさ制限あり　詳細はホテルへ</td>
                <td className="p-3 font-bold text-amber-600">★4.25（5088件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153290%2F153290.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈広島駅前新幹線口〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてるひろしまえきまえしんかんせんぐち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,275〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/191892/191892.jpg" alt="アパホテル〈広島駅前新幹線口〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>大浴殿・露天風呂完備！観光・ビジネスの拠点ホテルにおすすめです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県広島市東区上大須賀町2-29 ／ 最寄り駅：広島 ／ 交通案内：山陽新幹線・JR各線「広島駅」新幹線口（北口）徒歩4分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>16台（先着順、予約不可）、【料金】入庫から24時間 1,500円【時間外】 30分につき200円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利、大浴場とコンパクトな部屋が快適部屋はキレイでアパホテルらしくコンパクトにまとまっている。大浴場があるのは嬉しくてホテルを選ぶ選択肢になるのですが、ホテルの大きさの割に少し小さいかな…　2026-08-28 15:50:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈広島駅前大橋〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてる　ひろしまえきまえおおはし）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/153290/153290.jpg" alt="アパホテル〈広島駅前大橋〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ご宿泊者様専用露天風呂付大浴殿完備！おいしい朝食ビュッフェ付きプランあり！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県広島市南区京橋町2-26 ／ 最寄り駅：広島 ／ 交通案内：［山陽新幹線＋JR各線］広島駅南口8番出口から徒歩4分［市内電車］広島電停から徒歩6分　［空港］広島駅から直通バス50分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>先着順　入庫から24時間で1500円　入出庫：7：00-22：00　大きさ制限あり　詳細はホテルへ</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で迷わず到着、事前チェックインでスムーズ駅から見える場所にあったので、迷わず辿り着けました。午前中に荷物を預けに行ったのですがその際、「今日は予約が多いから事前チェックインを」と進めてくだ…　2026-08-29 21:09:10投稿」
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
    
      <HubRelatedPosts currentSlug="tokyo-hiroshima-bus-vs-shinkansen-guide" />
</div>
  );
}
