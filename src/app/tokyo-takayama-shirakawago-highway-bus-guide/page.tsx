import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tokyo-takayama-shirakawago-highway-bus-guide/" },
  title: "東京・新宿〜飛騨高山・白川郷：直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース",
  description: "東京・新宿から飛騨高山・白川郷へ行くなら直行高速バスが圧倒的に便利でお得！JR特急ワイドビューしなの・特急ひだ乗り継ぎとの料金・所要時間比較、古い町並み散策と白川郷合掌造り、飛騨牛を満喫する1泊2日モデルコース。",
  keywords: ["東京", "新宿〜飛騨高山", "白川郷", "時間比較", "飛騨牛1泊2日モデルコース", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "東京・新宿〜飛騨高山・白川郷：直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース",
    description: "東京・新宿から飛騨高山・白川郷へ行くなら直行高速バスが圧倒的に便利でお得！JR特急ワイドビューしなの・特急ひだ乗り継ぎとの料金・所要時間比較、古い町並み散策と白川郷合掌造り、飛騨牛を満喫する1泊2日モデルコース。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "東京・新宿〜飛騨高山・白川郷：直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース",
    description: "東京・新宿から飛騨高山・白川郷へ行くなら直行高速バスが圧倒的に便利でお得！JR特急ワイドビューしなの・特急ひだ乗り継ぎとの料金・所要時間比較、古い町並み散策と白川郷合掌造り、飛騨牛を満喫する1泊2日モデルコース。",
  }
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-takayama-shirakawago-highway-bus-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-takayama-shirakawago-highway-bus-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "直行高速バス（バスタ新宿〜飛騨高山）",
    "price": "片道 約6,500円〜7,800円",
    "roundPrice": "往復 約13,000円〜15,600円",
    "duration": "約5時間30分",
    "feature": "バスタ新宿から高山濃飛バスセンターへ完全直行！乗換不要で料金は半額以下。",
    "recommendFor": "世界遺産観光・女子旅・カップル・コスパ重視派"
  },
  {
    "mode": "JR中央線特急あずさ＋特急しなの＋特急ひだ（松本/名古屋経由）",
    "price": "片道 約15,500円〜16,500円",
    "roundPrice": "往復 約31,000円〜33,000円",
    "duration": "約4時間15分〜4時間45分（乗換2回）",
    "feature": "特急を乗り継ぐルート。乗換が多く荷物があるとやや大変。",
    "recommendFor": "鉄道ファン・周遊フリーきっぷ利用者"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F",
  "ctaText": "🚌 楽天トラベルで「東京・新宿 ⇄ 飛騨高山」の直行バスを予約する",
  "points": [
    "バスタ新宿から高山濃飛バスターミナルへ直行便が毎日6往復運行。",
    "中央道・長野道・安房峠道路を経由し、北アルプスの壮大な山岳パノラマを車窓から満喫。",
    "高山濃飛バスセンターからは白川郷行きの世界遺産シャトルバスが頻発発着！"
  ]
};
  const itinerary = [
  {
    "day": "1日目（新宿直行バス〜高山到着〜古い町並み＆飛騨牛握り）",
    "steps": [
      {
        "time": "07:05",
        "title": "バスタ新宿から直行高速バス乗車",
        "desc": "諏訪湖SAなどで休憩しながら飛騨山脈を越えて高山へ。"
      },
      {
        "time": "12:35",
        "title": "高山濃飛バスセンター到着＆名物「高山ラーメン」ランチ",
        "desc": "駅前の老舗店で、鶏ガラと鰹節のあっさり醤油スープに細ちぢれ麺。"
      },
      {
        "time": "13:45",
        "title": "国選定重要伝統的建造物群「さんまち通り（古い町並み）」散策",
        "desc": "出格子の連なる江戸の町家を歩き、「飛騨牛の握り寿司」やみたらし団子を食べ歩き。"
      },
      {
        "time": "16:00",
        "title": "高山温泉の名旅館または町家ホテルチェックイン",
        "desc": "天然温泉露天風呂で長旅の疲れをほぐし、夕食は最高ランク飛騨牛の朴葉味噌焼き。"
      }
    ]
  },
  {
    "day": "2日目（宮川朝市〜世界遺産・白川郷合掌造り集落〜帰路）",
    "steps": [
      {
        "time": "08:00",
        "title": "日本三大朝市「宮川朝市」で地元のおばあちゃんと交流",
        "desc": "川沿いに並ぶ露店で、新鮮な果物や朴葉味噌、木工芸品をお買い物。"
      },
      {
        "time": "09:50",
        "title": "高山濃飛バスセンターから直行バスで白川郷へ（約50分）",
        "desc": "合掌造り集落が一望できる荻町城跡展望台へ登り、絵葉書のような絶景を鑑賞。"
      },
      {
        "time": "11:30",
        "title": "国指定重要文化財「和田家」「神田家」内部見学",
        "desc": "急勾配の茅葺き屋根と伝統的な養蚕の知恵が息づく内部を見学。"
      },
      {
        "time": "14:30",
        "title": "高山駅へ戻り、夕方の直行バスで新宿へ",
        "desc": "「さるぼぼ」や飛騨の銘酒「蓬莱」をお土産に積み込み、夜21:00頃にバスタ新宿到着。"
      }
    ]
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【東京・新宿〜飛騨高山・白川郷】直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
    "description": "東京・新宿から飛騨高山・白川郷へ行くなら直行高速バスが圧倒的に便利でお得！JR特急ワイドビューしなの・特急ひだ乗り継ぎとの料金・所要時間比較、古い町並み散策と白川郷合掌造り、飛騨牛を満喫する1泊2日モデルコース。",
    "url": "https://croud-travel.pages.dev/tokyo-takayama-shirakawago-highway-bus-guide/",
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
      { "@type": "ListItem", "position": 2, "name": "【東京・新宿〜飛騨高山・白川郷】直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tokyo-takayama-shirakawago-highway-bus-guide/" }
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
              飛騨高山・世界遺産直行ガイド
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">「東京・新宿〜飛騨高山・白川郷」直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース</h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            JR電車だと名古屋経由で特急を乗り継ぐ必要があり片道約16,000円（約4時間30分）。一方、バスタ新宿からの直行高速バスなら乗り換えゼロ・片道約6,500円〜7,500円（約5時間30分）！世界遺産・白川郷や古い町並み、飛騨牛づくしの旅。
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
            高山駅・古い町並み徒歩圏内！飛騨牛料理と天然温泉の名旅館
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
              📊 東京・新宿〜飛騨高山・白川郷：直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「東京・新宿〜飛騨高山・白川郷：直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 飛騨高山　旅館　一の松</td>
                <td className="p-3 text-stone-600">岐阜県高山市岡本町1-225-8</td>
                <td className="p-3 text-stone-600">高山駅周辺</td>
                <td className="p-3 text-stone-600">有り　8台(1000円／１泊)　先着順※事前予約不可</td>
                <td className="p-3 font-bold text-amber-600">★2.5（12件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177425%2F177425.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 飛騨高山　本陣平野屋　光風館（旧：飛騨高山　本陣平野屋　別館）</td>
                <td className="p-3 text-stone-600">岐阜県高山市本町1-5</td>
                <td className="p-3 text-stone-600">高山駅周辺</td>
                <td className="p-3 text-stone-600">有 ５０台 無料 チェックイン前・チェックアウト後も無料でお車お預かり</td>
                <td className="p-3 font-bold text-amber-600">★4.68（1403件）</td>
                <td className="p-3 font-bold text-rose-600">¥21,252〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8326%2F8326.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 飛騨高山　本陣平野屋　花兆庵</td>
                <td className="p-3 text-stone-600">岐阜県高山市本町1-34</td>
                <td className="p-3 text-stone-600">高山駅周辺</td>
                <td className="p-3 text-stone-600">無料　50台　チェックイン前・チェックアウト後もお預かりいたします</td>
                <td className="p-3 font-bold text-amber-600">★4.89（839件）</td>
                <td className="p-3 font-bold text-rose-600">¥29,095〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8327%2F8327.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 奥飛騨　平湯温泉　岡田旅館</td>
                <td className="p-3 text-stone-600">東京都</td>
                <td className="p-3 text-stone-600">平湯温泉方面行きバス乗車、「平湯温泉駅」下車／松本ＩＣより６０分／富山</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★3.91（627件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,950〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54007%2F54007.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 料理旅館　奥飛騨山草庵　饗家（きょうや）</td>
                <td className="p-3 text-stone-600">岐阜県高山市奥飛騨温泉郷一重ケ根212-84</td>
                <td className="p-3 text-stone-600">高山駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.76（301件）</td>
                <td className="p-3 font-bold text-rose-600">¥28,860〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20688%2F20688.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">飛騨高山　旅館　一の松</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひだたかやま　りょかん　いちのまつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/177425/177425_kan1.jpg" alt="飛騨高山　旅館　一の松 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ジャパニーズモダンな館内、客室は和を基調としたモダンなつくりで、ゆっくりとお寛ぎいただけます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県高山市岡本町1-225-8 ／ 最寄り駅：高山 ／ 交通案内：高山駅西口より徒歩にて約6分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　8台(1000円／１泊)　先着順※事前予約不可</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「飛騨高山　旅館　一の松は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">飛騨高山　本陣平野屋　光風館（旧：飛騨高山　本陣平野屋　別館）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひだたかやま　ほんじんひらのや　こうふうかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥21,252〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8326/8326_heya.jpg" alt="飛騨高山　本陣平野屋　光風館（旧：飛騨高山　本陣平野屋　別館） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2026年4月より名称変更（旧：本陣平野屋別館）古い町並・陣屋前朝市まで徒歩1分！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県高山市本町1-5 ／ 最寄り駅：高山 ／ 交通案内：高山駅・バスセンターより徒歩10分　駅まで無料送迎：随時　車：東海北陸　高山ＩＣ～１０分・中央道　松本ＩＣ～120分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有 ５０台 無料 チェックイン前・チェックアウト後も無料でお車お預かり</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.71 ／ 立地 ★4.68 ／ 部屋 ★4.54 ／ 設備 ★4.52 ／ 風呂 ★4.42 ／ 食事 ★4.75</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「教育の行き届いた接客と工夫された料理に感動従業員の皆さんに教育が行き届いていまして、気分よく過ごせました。料理もひと工夫されていて本当に美味しい料理でした。ありがとうございます。クチコミの詳細…　2026-09-25 11:46:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">飛騨高山　本陣平野屋　花兆庵</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひだたかやま　ほんじんひらのや　かちょうあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥29,095〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327_heya.jpg" alt="飛騨高山　本陣平野屋　花兆庵 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【高山陣屋】【古い町並】に最も近い宿。上質なおもてなしでさりげなく満たされる極上の時間をゆっくりと…</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県高山市本町1-34 ／ 最寄り駅：高山 ／ 交通案内：高山駅より徒歩10分　駅まで無料送迎：随時　車：東海北陸　高山ＩＣ～10分・中央道　松本ＩＣ～120分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料　50台　チェックイン前・チェックアウト後もお預かりいたします</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.92 ／ 立地 ★4.82 ／ 部屋 ★4.87 ／ 設備 ★4.79 ／ 風呂 ★4.69 ／ 食事 ★4.92</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔感のある部屋と美味しい料理、露天風呂に満足お部屋が綺麗で、清潔感が有り、快適に過ごせました。料理が美味しかったです。別館の大浴場の露天風呂(屋上)は、とても気持ち良かったです。…　2026-09-29 21:39:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">奥飛騨　平湯温泉　岡田旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,950〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54007/54007.jpg" alt="奥飛騨　平湯温泉　岡田旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：平湯温泉方面行きバス乗車、「平湯温泉駅」下車／松本ＩＣより６０分／富山ＩＣより９０分／清見ＩＣより８０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事と温泉は満足食事に関しては味も良く、囲炉裏の雰囲気もあり、食事対応の方の接客も好感が持ててよかった。温泉に関しては、浴槽の変色やヌメヌメ感、硫黄の匂いも強く、温泉らしい温泉に思えた。客…　2026-09-18 18:39:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">料理旅館　奥飛騨山草庵　饗家（きょうや）</h3>
                  <span className="text-xs text-stone-400 ml-2">（りょうりりょかん　おくひださんそうあん　きょうや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥28,860〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/20688/20688_sh.jpg" alt="料理旅館　奥飛騨山草庵　饗家（きょうや） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【1日5組限定】岐阜県随一の名工が腕を振るう、本格料理と源泉掛け流し貸切露天風呂で非日常を味わう旅</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県高山市奥飛騨温泉郷一重ケ根212-84 ／ 最寄り駅：高山 ／ 交通案内：JR高山線・高山駅～バスで70分「新平湯禅通寺前」下車徒歩3分／JR中央線・松本駅～バスで100分／東海北陸道・清見IC</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.72 ／ 立地 ★4.59 ／ 部屋 ★4.72 ／ 設備 ★4.76 ／ 風呂 ★4.83 ／ 食事 ★4.83</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料理が最高で貸切風呂も充実、大人の隠れ家とにかく料理が最高でした。地の食材を使って見た目もきれいな一品ばかり。4か所あるお風呂はすべて貸し切りでゆっくり入れます。ただ、自分が入りたいタイミング…　2026-10-05 09:50:10投稿」
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
            href="/scenic-tourist-train-onsen-trip-stay/"
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
          href="/prefectures/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="tokyo-takayama-shirakawago-highway-bus-guide" />
</div>
  );
}
