import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【東京〜京都】安く行く方法！新幹線 vs 夜行高速バスの料金・時間比較＆古都1泊2日満喫モデルコース ｜ 日本全国・旅宿クラウド",
  description: "東京から京都へ安く行くには？東海道新幹線「のぞみ」と高速バス（昼行・夜行）の料金・所要時間を徹底比較！早朝6時着の夜行バスで清水寺・嵐山の混雑回避、浮いた2万円で極上町家ホテルに泊まる1泊2日モデルコース。",
  keywords: ["tokyo-kyoto-bus-vs-shinkansen-guide", "高速バス", "新幹線 比較", "安く行く方法", "1泊2日 モデルコース", "宿泊予約", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-kyoto-bus-vs-shinkansen-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-kyoto-bus-vs-shinkansen-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "夜行高速バス / 昼行バス",
    "price": "片道 約3,000円〜7,500円",
    "roundPrice": "往復 約6,000円〜15,000円",
    "duration": "約7時間〜8時間30分",
    "feature": "最安値！夜行便なら朝6時台に京都駅着。観光名所の早朝拝観を独占可能。",
    "recommendFor": "学生・写真好き・ひとり旅・とにかく安く行きたい方"
  },
  {
    "mode": "東海道新幹線（のぞみ/ひかり）",
    "price": "片道 約14,170円（のぞみ指定席）",
    "roundPrice": "往復 約28,340円",
    "duration": "約2時間15分",
    "feature": "最速2時間15分。1時間に何本も運行しスケジュール自由自在。",
    "recommendFor": "時短重視・ファミリー・シニア"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Flist%2F101_26_1.html",
  "ctaText": "🚌 楽天トラベルで「東京 ⇄ 京都」の高速バス最安値を検索・予約する",
  "points": [
    "バスタ新宿・東京駅八重洲口・横浜駅から京都駅八条口へ直行便が毎日多数運行。",
    "女性専用車、完全遮光カーテン、3列独立ゆったりリクライニングシート便が豊富。",
    "早朝6時台到着なので、混雑前の清水寺・嵐山竹林の小径・伏見稲荷大社へ直行可能！"
  ]
};
  const itinerary = [
  {
    "day": "1日目（早朝京都着〜混雑ゼロの清水寺〜祇園・東山）",
    "steps": [
      {
        "time": "06:15",
        "title": "京都駅八条口到着＆駅ナカ銭湯「京都タワー大浴場」でリフレッシュ",
        "desc": "夜行バス到着後、京都駅前の朝風呂や早朝カフェでメイクと着替えを完了。"
      },
      {
        "time": "07:30",
        "title": "人混みゼロの「清水寺」早朝参拝",
        "desc": "朝6時から開門している清水寺へ。静寂に包まれた清水の舞台から京都の街並みを一望。"
      },
      {
        "time": "09:30",
        "title": "産寧坂・二年坂の石畳散歩＆八坂神社",
        "desc": "まだ観光客の少ない情緒ある石畳を歩き、祇園の八坂神社へ。"
      },
      {
        "time": "12:00",
        "title": "祇園で名物「湯豆腐」または「京町家おばんざい」ランチ",
        "desc": "坪庭を眺めながら京都の優しい出汁が効いた名物料理に舌鼓。"
      },
      {
        "time": "15:00",
        "title": "京都駅チカ・天然温泉付きホテルへチェックイン",
        "desc": "移動費を浮かせた分で、和モダンな温泉大浴場付きホテルに宿泊。"
      },
      {
        "time": "18:00",
        "title": "先斗町・木屋町の鴨川沿いでディナー＆京都地ビール",
        "desc": "高瀬川沿いの情緒ある居酒屋やバーで京都クラフトビールを満喫。"
      }
    ]
  },
  {
    "day": "2日目（嵐山渡月橋〜竹林の小径〜抹茶パフェ〜帰路）",
    "steps": [
      {
        "time": "08:30",
        "title": "JR嵯峨野線で嵐山へ＆竹林の小径散策",
        "desc": "風に揺れる竹の音が心地よい竹林の小径と野宮神社を散策。"
      },
      {
        "time": "11:00",
        "title": "嵐山のおしゃれカフェで濃厚宇治抹茶パフェ",
        "desc": "桂川沿いのテラス席で特製抹茶スイーツを味わう優雅な時間。"
      },
      {
        "time": "13:30",
        "title": "京都駅「ジェイアール京都伊勢丹」でお土産まとめ買い",
        "desc": "「阿闍梨餅」「八ッ橋」「宇治茶ラングドシャ」など定番＆最新スイーツをゲット。"
      },
      {
        "time": "15:30",
        "title": "帰路（夕方の高速バスまたは新幹線で東京へ）",
        "desc": "快適な座席で車窓を楽しみながら東京へ。"
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
              東海道アクセス格安比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【東京〜京都】安く行く方法！新幹線 vs 夜行高速バスの料金・時間比較＆古都1泊2日満喫モデルコース
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            東京〜京都の東海道新幹線は指定席片道約14,170円（往復約28,340円）。一方、高速バスなら片道約3,000円〜！往復で2万円以上節約でき、夜行バスなら早朝の静寂な清水寺や嵐山・伏見稲荷を人混みゼロで独占できる究極の京都旅。
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
            京都駅八条口・烏丸口徒歩5分！大浴場付き人気和モダンホテル
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
