import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大阪・神戸〜鳥取・松江・出雲】高速バス vs 特急スーパーはくと徹底比較！料金半額＆縁結び出雲大社・鳥取砂丘1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
  description: "大阪・神戸から鳥取・松江・出雲へ行くなら高速バスと特急どっちがお得？JR特急スーパーはくと・特急やくもと直行高速バスの料金・所要時間比較！鳥取砂丘、国宝松江城、縁結び出雲大社を巡る1泊2日モデルコース。",
  keywords: ["osaka-tottori-matsue-bus-vs-train-guide", "高速バス", "新幹線 比較", "安く行く方法", "1泊2日 モデルコース", "宿泊予約", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["osaka-tottori-matsue-bus-vs-train-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for osaka-tottori-matsue-bus-vs-train-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "直行高速バス（大阪/神戸〜鳥取・米子・松江・出雲）",
    "price": "鳥取：片道 約3,200円〜 / 出雲：片道 約4,500円〜5,800円",
    "roundPrice": "鳥取往復 約6,000円〜 / 出雲往復 約9,000円〜",
    "duration": "鳥取：約2時間50分 / 出雲：約5時間30分（夜行便あり）",
    "feature": "最安値！なんば・梅田・三宮から直行。夜行便を使えば朝一番に出雲大社参拝可能。",
    "recommendFor": "出雲大社縁結び女子旅・コスパ重視・ひとり旅"
  },
  {
    "mode": "JR特急スーパーはくと（大阪〜鳥取・倉吉）",
    "price": "片道 約7,500円（指定席）",
    "roundPrice": "往復 約15,000円",
    "duration": "約2時間30分",
    "feature": "智頭急行線経由の気動車特急。揺れが少なく景色が綺麗。",
    "recommendFor": "時短重視・鳥取市内直行・シニア"
  },
  {
    "mode": "山陽新幹線＋特急やくも（新大阪〜岡山〜松江・出雲市）",
    "price": "片道 約11,300円（新幹線＋やくも指定席）",
    "roundPrice": "往復 約22,600円",
    "duration": "約3時間20分（岡山乗換）",
    "feature": "新型273系やくもで快適移動。岡山駅で乗り換えが必要。",
    "recommendFor": "新型車両ファン・新幹線利用"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Flist%2F103_31_1.html",
  "ctaText": "🚌 楽天トラベルで「大阪・神戸 ⇄ 鳥取・米子・出雲」の高速バスを検索・予約する",
  "points": [
    "阪急梅田・なんば・新大阪・神戸三宮から鳥取駅・米子駅・松江駅・出雲市駅へ毎日運行。",
    "中国道・鳥取道・米子道経由で、大山や中国山地の山並みを眺める絶景ルート。",
    "夜行バスなら23:00発で翌朝6:00出雲市駅着！早朝の清々しい出雲大社を独占。"
  ]
};
  const itinerary = [
  {
    "day": "1日目（大阪発直行バス〜鳥取砂丘〜砂の美術館〜皆生・玉造温泉）",
    "steps": [
      {
        "time": "08:00",
        "title": "阪急梅田から直行高速バス乗車",
        "desc": "中国道・鳥取道を快走し、途中SAで休憩しながら日本海へ。"
      },
      {
        "time": "11:00",
        "title": "鳥取駅到着＆直行路線バスで「鳥取砂丘」へ",
        "desc": "日本最大級の海岸砂丘「馬の背」へ登り、日本海と風紋の壮大なコントラストを体感。"
      },
      {
        "time": "12:30",
        "title": "世界初の「砂の美術館」鑑賞＆名物「親ガニ丼・海鮮丼」ランチ",
        "desc": "砂と水だけで作られた圧巻の彫刻アートを見学後、新鮮な日本海の海の幸を堪能。"
      },
      {
        "time": "15:00",
        "title": "日本最古の美肌温泉「玉造温泉」へ移動＆温泉旅館チェックイン",
        "desc": "化粧水のような美肌の湯に浸かり、夕食は松葉ガニやしまね和牛会席。"
      },
      {
        "time": "20:00",
        "title": "玉造温泉街の足湯＆玉作湯神社で「叶い石」祈願",
        "desc": "川沿いの温泉街をそぞろ歩き、願いが叶うパワーストーンのお守り作り。"
      }
    ]
  },
  {
    "day": "2日目（縁結びの聖地「出雲大社」参拝〜国宝松江城〜帰阪）",
    "steps": [
      {
        "time": "09:00",
        "title": "一畑電車で「出雲大社（いづもおおやしろ）」へ",
        "desc": "日本屈指の大社。巨大な大注連縄が架かる神楽殿と御本殿で良縁祈願（二礼四拍手一礼）。"
      },
      {
        "time": "11:30",
        "title": "神門通りで名物「出雲割子そば」＆ぜんざい食べ歩き",
        "desc": "三段の丸い漆器に盛られたコシの強い出雲そばを、特製つゆと薬味で味わう。"
      },
      {
        "time": "14:00",
        "title": "国宝「松江城」天守閣登閣＆宍道湖畔散策",
        "desc": "現存十二天守の松江城を見学し、宍道湖しじみパイや銘菓若草を購入。"
      },
      {
        "time": "16:00",
        "title": "松江駅または出雲市駅から高速バス乗車〜大阪へ",
        "desc": "夕方の高速バスで夜20時半頃に大阪・梅田へ帰還。"
      }
    ]
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-cyan-400 text-slate-950 px-3.5 py-1 rounded-full uppercase inline-block">
              山陰・出雲アクセス比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【大阪・神戸〜鳥取・松江・出雲】高速バス vs 特急スーパーはくと徹底比較！料金半額＆縁結び出雲大社・鳥取砂丘1泊2日モデルコース
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            JR特急「スーパーはくと」だと大阪〜鳥取は約7,500円、大阪〜出雲市（岡山経由やくも）は約11,000円。一方、直行高速バスなら大阪・神戸から鳥取片道約3,200円〜、松江・出雲片道約4,500円〜！山陰の海の幸、松葉ガニ、宍道湖の夕日、玉造温泉の美肌の湯を満喫する旅。
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
            美肌温泉日本一！玉造温泉＆出雲大社アクセス抜群の名旅館
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
              </article>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 text-xs">
            ホテル情報を読み込み中または該当ホテルを検索中です。
          </div>
        )}
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
    </div>
  );
}
