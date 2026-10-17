import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/osaka-kanazawa-highway-bus-model-course/" },
  title: "大阪から金沢 高速バス 新幹線 どっち？：安く行く方法＆乗り換えなし1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
  description: "大阪・京都から金沢へ行くなら高速バスと新幹線・特急どっちがおすすめ？サンダーバード敦賀乗換（約9,410円）の手間解消！直行高速バス（約2,800円〜）の格安料金比較と、21世紀美術館・ひがし茶屋街を満喫する女子旅・ひとり旅1泊2日モデルコース。",
  keywords: ["大阪から金沢", "高速バス", "新幹線", "どっち？", "安く行く方法", "2026年最新", "温泉宿"],
  openGraph: {
    title: "大阪から金沢 高速バス 新幹線 どっち？：安く行く方法＆乗り換えなし1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
    description: "大阪・京都から金沢へ行くなら高速バスと新幹線・特急どっちがおすすめ？サンダーバード敦賀乗換（約9,410円）の手間解消！直行高速バス（約2,800円〜）の格安料金比較と、21世紀美術館・ひがし茶屋街を満喫する女子旅・ひとり旅1泊2日モデルコース。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "大阪から金沢 高速バス 新幹線 どっち？：安く行く方法＆乗り換えなし1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
    description: "大阪・京都から金沢へ行くなら高速バスと新幹線・特急どっちがおすすめ？サンダーバード敦賀乗換（約9,410円）の手間解消！直行高速バス（約2,800円〜）の格安料金比較と、21世紀美術館・ひがし茶屋街を満喫する女子旅・ひとり旅1泊2日モデルコース。",
  }
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["osaka-kanazawa-highway-bus-model-course"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for osaka-kanazawa-highway-bus-model-course", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "高速バス（直行・昼行/夜行）",
    "price": "片道 約2,800円〜5,500円",
    "roundPrice": "往復 約5,600円〜11,000円",
    "duration": "約4時間30分〜5時間30分",
    "feature": "乗換なしで金沢駅直行！料金はサンダーバード＋新幹線の3分の1以下。",
    "recommendFor": "荷物が多い方・乗換が面倒な方・コスパ重視派"
  },
  {
    "mode": "特急サンダーバード＋北陸新幹線",
    "price": "片道 約9,410円（敦賀乗換）",
    "roundPrice": "往復 約18,820円",
    "duration": "約2時間10分〜2時間30分",
    "feature": "敦賀駅で新幹線へ乗換。最速2時間10分で結ぶ圧倒的スピード。",
    "recommendFor": "時短重視・ビジネス・子連れファミリー"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2F",
  "ctaText": "🚌 楽天トラベルで「大阪・京都 ⇄ 金沢」の高速バス最安値を検索・予約する",
  "points": [
    "大阪駅（阪急梅田・WILLERバスターミナル・なんば）や京都駅八条口から直行便が毎日頻発運行。",
    "朝発の昼行便ならお昼過ぎに金沢到着、夜行便なら早朝到着でまるまる2日間滞在可能。",
    "名神〜北陸自動車道のサービスエリア休憩でご当地グルメも楽しめる！"
  ]
};
  const itinerary = [
  {
    "day": "1日目（直行バスで昼着〜アート＆カフェ巡り）",
    "steps": [
      {
        "time": "08:00",
        "title": "大阪駅（梅田）から直行高速バス出発",
        "desc": "乗り換えなしでゆったり座席へ。南条SAなどで福井名物の越前そばや羽二重餅をチェック。"
      },
      {
        "time": "13:00",
        "title": "金沢駅到着＆ホテルへ荷物を預けてランチ",
        "desc": "金沢駅ナカ「あんと」で名物「能登牛プレミアム丼」や「金沢カレー」を味わう。"
      },
      {
        "time": "14:30",
        "title": "金沢21世紀美術館＆にし茶屋街の隠れ家カフェ",
        "desc": "人気アートを鑑賞後、落ち着いた佇まいのにし茶屋街で抹茶パフェや老舗甘味を堪能。"
      },
      {
        "time": "17:30",
        "title": "金沢駅前ホテルチェックイン＆サウナ",
        "desc": "大浴場付きホテルでバス移動のリフレッシュ。"
      },
      {
        "time": "19:00",
        "title": "近江町市場・片町で「のどぐろ塩焼き」と能登の地酒",
        "desc": "脂ののった最高峰のどぐろと加賀野菜の天ぷらを満喫。"
      }
    ]
  },
  {
    "day": "2日目（兼六園〜ひがし茶屋街〜夕方便で帰阪）",
    "steps": [
      {
        "time": "08:30",
        "title": "兼六園の早朝無料開放・澄んだ空気の散策",
        "desc": "朝の澄んだ空気の中で徽軫灯籠（ことじとうろう）や霞ヶ池をゆっくり写真撮影。"
      },
      {
        "time": "10:30",
        "title": "ひがし茶屋街で金箔貼り体験＆お土産巡り",
        "desc": "伝統の金箔貼り体験でマイ箸やコンパクトミラーを作成。"
      },
      {
        "time": "13:00",
        "title": "近江町市場で海鮮ランチ＆お買い物",
        "desc": "カニや干物をお土産に直送手配。"
      },
      {
        "time": "15:30",
        "title": "金沢駅前から高速バス乗車〜大阪へ",
        "desc": "金沢銘菓をお供に高速バスで帰路へ。夜20時半頃に大阪駅到着。"
      }
    ]
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【大阪から金沢 高速バス 新幹線 どっち？】安く行く方法＆乗り換えなし1泊2日モデルコース【2026年最新】 ｜ 日本全国・旅宿クラウド",
    "description": "大阪・京都から金沢へ行くなら高速バスと新幹線・特急どっちがおすすめ？サンダーバード敦賀乗換（約9,410円）の手間解消！直行高速バス（約2,800円〜）の格安料金比較と、21世紀美術館・ひがし茶屋街を満喫する女子旅・ひとり旅1泊2日モデルコース。",
    "url": "https://croud-travel.pages.dev/osaka-kanazawa-highway-bus-model-course/",
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
      { "@type": "ListItem", "position": 2, "name": "【大阪から金沢 高速バス 新幹線 どっち？】安く行く方法＆乗り換えなし1泊2日モデルコース【2026年最新】 ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/osaka-kanazawa-highway-bus-model-course/" }
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
              関西発・格安モデルコース
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">「大阪から金沢 高速バス 新幹線 どっち？」安く行く方法＆乗り換えなし1泊2日モデルコース</h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            北陸新幹線敦賀延伸により特急サンダーバードは敦賀乗り換えが必要に（片道約9,400円）。一方、高速バスなら大阪・京都から直行で片道約2,800円〜！乗り換えの手間ゼロ＆圧倒的コスパで楽しむ金沢1泊2日週末トリップ。
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
            金沢駅チカ＆大浴場・サウナ完備！女子旅・ひとり旅に人気の宿
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
              📊 大阪から金沢 高速バス 新幹線 どっち？：安く行く方法＆乗り換えなし1泊2日モデルコース：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「大阪から金沢 高速バス 新幹線 どっち？：安く行く方法＆乗り換えなし1泊2日モデルコース」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ＡＢホテル金沢</td>
                <td className="p-3 text-stone-600">石川県金沢市広岡１丁目９番２５号</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">有料　1,000円/泊(１５：００～１０：００)　ホテル隣接の『名鉄協商パーキング』　※出し入別料金</td>
                <td className="p-3 font-bold text-amber-600">★4.16（3911件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147638%2F147638.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 三井ガーデンホテル金沢</td>
                <td className="p-3 text-stone-600">石川県金沢市上堤町1-22</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">ホテルに専用駐車場はございません。提携駐車場はホテル公式HP「館内利用案内」の駐車場をご覧ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.58（829件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,040〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167963%2F167963.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルインターゲート金沢</td>
                <td className="p-3 text-stone-600">石川県金沢市高岡町2-5</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">ホテルには駐車場がございません。周辺コインパーキング（ホテルから徒歩5～10分程）をご利用ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.48（1380件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168622%2F168622.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルルートイン金沢駅前</td>
                <td className="p-3 text-stone-600">石川県金沢市昭和町22-5</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">有り　１６６台　１，０００円（税込み／泊）　先着順・高さ制限２．１M迄</td>
                <td className="p-3 font-bold text-amber-600">★4.09（1990件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,825〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54537%2F54537.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 備長炭の湯　ホテルクラウンヒルズ金沢香林坊（ＢＢＨホテルグループ）</td>
                <td className="p-3 text-stone-600">石川県金沢市片町1-2-44</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">提携のセントラルパーキングを、一泊１０００円(１５：００－翌１０：００)にて利用可能。出し入れ不可。</td>
                <td className="p-3 font-bold text-amber-600">★3.76（867件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,350〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141319%2F141319.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＡＢホテル金沢</h3>
                  <span className="text-xs text-stone-400 ml-2">（えーびーほてるかなざわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147638/147638_kan.jpg" alt="ＡＢホテル金沢 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>男女別浴場完備・ネット接続無料。金沢駅より徒歩１分の好アクセス♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市広岡１丁目９番２５号 ／ 最寄り駅：金沢 ／ 交通案内：『北陸新幹線・ＪＲ金沢駅』西口より徒歩1分。北陸自動車道『金沢西・東インター』より車で約１５分の好アクセス！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有料　1,000円/泊(１５：００～１０：００)　ホテル隣接の『名鉄協商パーキング』　※出し入別料金</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅前でアクセス抜群、駐車場も近く快適駅の目の前でアクセス良好。駐車場を利用しましたが、提携しているところとほぼ直結していました。リーズナブルで快適でした。クチコミの詳細はこちらから　https…　2026-08-27 06:34:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">三井ガーデンホテル金沢</h3>
                  <span className="text-xs text-stone-400 ml-2">（みついがーでんほてるかなざわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,040〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/167963/167963.jpg" alt="三井ガーデンホテル金沢 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>観光名所が身近に揃うロケーション。加賀友禅をあしらった客室や最上階の大浴場でおくつろぎください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市上堤町1-22 ／ 最寄り駅：金沢 ／ 交通案内：ＪＲ　金沢駅よりお車にて約8分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテルに専用駐車場はございません。提携駐車場はホテル公式HP「館内利用案内」の駐車場をご覧ください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事なしのプランでも大満足!食事は付けませんでしたが、とても満足でした!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voic…　2026-08-28 17:45:35投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルインターゲート金沢</h3>
                  <span className="text-xs text-stone-400 ml-2">（いんたーげーとかなざわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/168622/168622_kan1.jpg" alt="ホテルインターゲート金沢 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ハッピーアワーからお茶漬けバイキングまで無料ラウンジサービスが充実・大浴場完備・朝食高評価</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市高岡町2-5 ／ 最寄り駅：金沢 ／ 交通案内：JR金沢駅から北鉄バス「南町・尾山神社」迄7分下車1分｜小松空港からバスで「武蔵ヶ辻・近江町市場」迄50分下車7分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテルには駐車場がございません。周辺コインパーキング（ホテルから徒歩5～10分程）をご利用ください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食やサービスが充実、部屋も快適で最高朝食バイキングの種類が豊富でこの価格でウェルカムドリンクやお茶漬けサービスなど有りで更に大浴場は夜は混んでいそうだったので部屋のお風呂に入ったが洗い場…　2026-08-29 20:35:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルルートイン金沢駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるるーといんかなざわえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,825〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54537/54537_ky.jpg" alt="ホテルルートイン金沢駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＷＯＷＯＷ全室で無料視聴可■VODルームシアター(一般映画のみ)無料視聴可（コンフォート特典）</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市昭和町22-5 ／ 最寄り駅：金沢 ／ 交通案内：ＪＲ北陸本線・新幹線　金沢駅より徒歩５分／北陸自動車道　金沢西ＩＣより５．５ｋｍ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１６６台　１，０００円（税込み／泊）　先着順・高さ制限２．１M迄</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「価格以上の満足感、安定のクオリティルートインさん、間違いないです。価格対比、すべてレベル以上です。クチコミの詳細はこちらから　https://review.travel.rakuten.co.…　2026-08-19 08:04:09投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">備長炭の湯　ホテルクラウンヒルズ金沢香林坊（ＢＢＨホテルグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（びんちょうたんのゆ　ほてるくらうんひるずかなざわこうりんぼう（びーびーえいちほてるぐるーぷ））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,350〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/141319/141319.jpg" alt="備長炭の湯　ホテルクラウンヒルズ金沢香林坊（ＢＢＨホテルグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>金沢の繁華街香林坊・兼六園に隣接した地にありながら静かな環境。教会の鐘の音に包まれます♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市片町1-2-44 ／ 最寄り駅：金沢 ／ 交通案内：金沢駅よりお車にて８分 東口バス乗り場6・８・９・10番から香林坊下車徒歩２分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携のセントラルパーキングを、一泊１０００円(１５：００－翌１０：００)にて利用可能。出し入れ不可。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「壁のカビと換気扇の不備、大浴場の管理に不安部屋のカーテンの裏の壁がカビだらけなのと、部屋の浴室の換気扇が動いておらず、トイレのにおいが充満していました。大浴場も男女入れ替え制で、入り口に鍵もな…　2026-08-29 11:53:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！大阪府の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、大阪府を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">大阪城公園（大阪城天守閣）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">豊臣秀吉公が築城した天下の名城。黄金の飾りが映える重厚な天守閣と、壮大な石垣・巨石、春には桜が咲き誇る広大な都会のオアシスです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">道頓堀・グリコサイン</h3>
                <p className="text-xs text-stone-600 leading-relaxed">食い倒れの街・大阪を象徴するネオン街。グリコの巨大看板前での記念撮影や、道頓堀川沿いでのたこ焼き・串カツ食べ歩きで活気にあふれています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">ユニバーサル・スタジオ・ジャパン（USJ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「ウィザーディング・ワールド・オブ・ハリー・ポッター」や「スーパー・ニンテンドー・ワールド」など世界最高峰のエンターテインメントが体験できる世界級テーマパーク。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">通天閣・新世界</h3>
                <p className="text-xs text-stone-600 leading-relaxed">なにわのシンボルタワー「通天閣」と、昭和レトロな雰囲気が色濃く残る新世界。幸運の神様「ビリケンさん」の足の裏を撫でて幸運を祈願できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 大阪府エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 大阪府の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="osaka-kanazawa-highway-bus-model-course" />
</div>
  );
}
