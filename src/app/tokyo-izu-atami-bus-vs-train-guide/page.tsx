import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【東京〜熱海・伊豆】安く行く方法徹底比較！新幹線・特急踊り子 vs 高速バス・普通電車の料金・時間＆温泉1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
  description: "東京から熱海・伊豆へ安く行くには？東海道新幹線、特急踊り子、普通列車（上野東京ライン）、直行バスの料金・所要時間を徹底比較！片道2,000円台で行く熱海食べ歩き、オーシャンビュー温泉露天風呂を満喫する1泊2日モデルコース。",
  keywords: ["tokyo-izu-atami-bus-vs-train-guide", "高速バス", "新幹線 比較", "安く行く方法", "1泊2日 モデルコース", "宿泊予約", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-izu-atami-bus-vs-train-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-izu-atami-bus-vs-train-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "普通列車（JR東海道線/上野東京ライン）",
    "price": "片道 約1,980円（普通車）/ 約3,000円（グリーン車）",
    "roundPrice": "往復 約3,960円〜6,000円",
    "duration": "約1時間45分〜2時間",
    "feature": "最安値！普通列車グリーン車を利用すれば、リクライニングシートでビールを飲みながら優雅に移動可能。",
    "recommendFor": "コスパ派・のんびり旅・週末ふらっと温泉"
  },
  {
    "mode": "JR特急 踊り子 / サフィール踊り子",
    "price": "片道 約3,340円（踊り子指定席）/ 約6,000円〜（サフィール）",
    "roundPrice": "往復 約6,680円〜12,000円",
    "duration": "約1時間15分",
    "feature": "東京・新宿から乗り換えなしで伊豆急下田・修善寺まで直通。全席窓側景色良好。",
    "recommendFor": "伊東・伊豆高原・下田まで直行したい方・女子旅"
  },
  {
    "mode": "東海道新幹線（こだま/ひかり）",
    "price": "片道 約4,270円（指定席）/ 約3,740円（自由席）",
    "roundPrice": "往復 約7,480円〜8,540円",
    "duration": "最速約35分〜45分",
    "feature": "圧倒的スピード！東京駅からわずか35分で温泉街に到着。",
    "recommendFor": "時短最優先・仕事帰りの金曜夜泊・シニア"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Flist%2F101_22_1.html",
  "ctaText": "🚌 楽天トラベルで「東京 ⇄ 熱海・伊豆・御殿場」の直行バス・ツアーを予約する",
  "points": [
    "新宿・東京・横浜から伊東温泉・下田・御殿場アウトレット行き直行バスが運行。",
    "熱海駅前商店街やサンビーチは駅から徒歩すぐで、車なし観光に最も適した温泉地。",
    "バスツアーなら「熱海海上花火大会」や「伊豆フルーツ狩り」付きプランも充実！"
  ]
};
  const itinerary = [
  {
    "day": "1日目（熱海駅到着〜商店街食べ歩き〜サンビーチ〜オーシャンビュー温泉）",
    "steps": [
      {
        "time": "10:00",
        "title": "熱海駅到着＆「平和通り名店街・仲見世商店街」食べ歩き",
        "desc": "駅前の足湯「家康の湯」で温まり、熱海プリン、温泉まんじゅう、磯揚げを食べ歩き。"
      },
      {
        "time": "12:30",
        "title": "海沿いレストランで名物「金目鯛の煮付け」＆海鮮丼ランチ",
        "desc": "相模湾で獲れた肉厚な金目鯛を甘辛い煮汁でふっくら煮付けた伝統の味。"
      },
      {
        "time": "14:30",
        "title": "ACAO FOREST（アカオフォレスト）絶景ハーブガーデン",
        "desc": "海を見下ろす丘に広がる13のテーマガーデン。隈研吾設計の「COEDA HOUSE」でカフェ。"
      },
      {
        "time": "16:30",
        "title": "オーシャンビュー温泉旅館チェックイン＆相模湾一望の露天風呂",
        "desc": "水平線と夕焼けを眺めながらの名湯入浴。夕食は鮑の踊り焼きと伊勢海老会席。"
      },
      {
        "time": "20:00",
        "title": "熱海サンビーチのムーンライトライトアップ散歩",
        "desc": "日本初の砂浜ライトアップ。青白く幻想的に照らされる砂浜とヤシの木の夜景。"
      }
    ]
  },
  {
    "day": "2日目（熱海城＆来宮神社パワースポット〜帰路）",
    "steps": [
      {
        "time": "09:30",
        "title": "樹齢2100年の大楠！本州屈指のパワースポット「来宮神社」",
        "desc": "幹を1周すると寿命が1年延びると伝わる御神木を参拝。おしゃれな境内カフェで麦こがしスイーツ。"
      },
      {
        "time": "12:00",
        "title": "熱海銀座商店街のレトロ喫茶でランチ＆ジェラート",
        "desc": "昭和レトロな洋食店でオムライスや、行列のできるクラフトジェラート。"
      },
      {
        "time": "14:30",
        "title": "熱海駅ビル「ラスカ熱海」でお土産購入",
        "desc": "「熱海名物ひもの」「伊豆銘菓 逢初」「伊豆わさび漬け」をお買い物。"
      },
      {
        "time": "16:00",
        "title": "帰路（普通列車グリーン車または新幹線で東京へ）",
        "desc": "夕暮れの相模湾を車窓に眺めながら東京へ。"
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
              熱海・伊豆アクセス比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【東京〜熱海・伊豆】安く行く方法徹底比較！新幹線・特急踊り子 vs 高速バス・普通電車の料金・時間＆温泉1泊2日モデルコース
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            東海道新幹線なら東京〜熱海わずか約35分（片道約4,270円）。一方、上野東京ライン・東海道線の普通列車グリーン車や直行バスなら片道約1,980円〜2,500円！浮いたお金で熱海プリンや金目鯛の煮付け、相模湾一望の絶景温泉宿に泊まる贅沢な週末旅。
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
            相模湾一望の絶景露天風呂＆金目鯛が自慢！熱海人気温泉宿
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
