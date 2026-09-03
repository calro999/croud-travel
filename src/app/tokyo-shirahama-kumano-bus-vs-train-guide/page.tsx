import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【東京・大阪〜南紀白浜・熊野古道】夜行バス vs 特急くろしお徹底比較！白良浜ビーチ＆世界遺産熊野古道1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
  description: "東京・大阪から南紀白浜・熊野古道へ安く行くには？JR特急くろしお・新幹線と直行夜行高速バスの料金・所要時間比較！真っ白な白良浜、日本三古湯の崎の湯、世界遺産熊野那智大社を巡る1泊2日モデルコース。",
  keywords: ["tokyo-shirahama-kumano-bus-vs-train-guide", "高速バス", "新幹線 比較", "安く行く方法", "1泊2日 モデルコース", "宿泊予約", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-shirahama-kumano-bus-vs-train-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-shirahama-kumano-bus-vs-train-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "直行高速バス（東京発 夜行 / 大阪発 昼行）",
    "price": "東京発：片道 約8,500円〜 / 大阪発：片道 約3,000円〜",
    "roundPrice": "東京発往復 約17,000円 / 大阪発往復 約6,000円",
    "duration": "東京発：約10時間（夜行）/ 大阪発：約3時間30分",
    "feature": "白良浜・アドベンチャーワールド・千畳敷のすぐ目の前へ直行！乗り換え不要。",
    "recommendFor": "白浜リゾート満喫・パンダファン・カップル・女子旅"
  },
  {
    "mode": "JR特急くろしお（新大阪/天王寺〜白浜）",
    "price": "片道 約5,800円（指定席）/ 東京発は約18,500円（新幹線＋くろしお）",
    "roundPrice": "新大阪往復 約11,600円 / 東京往復 約37,000円",
    "duration": "新大阪〜白浜 約2時間15分",
    "feature": "パンダくろしお車両も運行。海岸線の車窓が美しいオーシャンビュー特急。",
    "recommendFor": "時短重視・ファミリー・シニア"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Flist%2F101_30_1.html",
  "ctaText": "🚌 楽天トラベルで「東京・大阪 ⇄ 南紀白浜」の高速バスを検索・予約する",
  "points": [
    "バスタ新宿・横浜駅・大阪なんば・天王寺から白浜バスセンターへ直行便が運行。",
    "降車場所の白浜バスセンターは、白良浜の白い砂浜まで徒歩わずか1分！",
    "南紀白浜空港経由便やアドベンチャーワールド直行便もラインナップ。"
  ]
};
  const itinerary = [
  {
    "day": "1日目（直行バスで白良浜到着〜崎の湯露天風呂〜オーシャンビュー白浜温泉泊）",
    "steps": [
      {
        "time": "08:00",
        "title": "白良浜バスセンター到着＆白い砂浜をお散歩",
        "desc": "延長620mに及ぶ真っ白なサラサラの砂浜とエメラルドグリーンの海を鑑賞。"
      },
      {
        "time": "10:00",
        "title": "日本最古の湯「崎の湯」で太平洋の波しぶきを浴びる露天風呂",
        "desc": "岩肌に打ち寄せる荒波を間近に感じる圧倒的な開放感の海辺露天風呂。"
      },
      {
        "time": "12:30",
        "title": "とれとれ市場で海鮮ランチ＆マグロ解体ショー見学",
        "desc": "西日本最大級の海鮮マーケットで、勝浦産生マグロ丼やクエ鍋を味わう。"
      },
      {
        "time": "15:00",
        "title": "白浜温泉のオーシャンビューインフィニティ温泉宿チェックイン",
        "desc": "海と一体化するインフィニティ露天風呂で夕日鑑賞。夕食は熊野牛と伊勢海老会席。"
      },
      {
        "time": "20:00",
        "title": "白良浜のナイトビーチウォーク＆足湯巡り",
        "desc": "温泉街のライトアップと心地よい波の音に癒やされる夜の散歩。"
      }
    ]
  },
  {
    "day": "2日目（三段壁洞窟〜千畳敷〜円月島〜帰路）",
    "steps": [
      {
        "time": "09:00",
        "title": "国の名勝「三段壁（さんだんぺき）」＆エレベーターで三段壁洞窟へ",
        "desc": "高さ50mの断崖絶壁と、熊野水軍の隠し洞窟に打ち寄せる大迫力の波を体感。"
      },
      {
        "time": "11:30",
        "title": "畳を敷き詰めたような大岩盤「千畳敷」＆カフェランチ",
        "desc": "太平洋に向かって突き出た巨大な白い岩盤を散策し、海辺のカフェでランチ。"
      },
      {
        "time": "14:00",
        "title": "とれとれ市場でお土産ショッピング",
        "desc": "「紀州南高梅」「かげろう」「柚子もなか」「生マグロ」を購入。"
      },
      {
        "time": "15:30",
        "title": "白浜バスセンターから直行バス乗車〜大阪・東京へ",
        "desc": "座ったまま直行で快適に帰還。"
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
              南紀白浜・世界遺産直行比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【東京・大阪〜南紀白浜・熊野古道】夜行バス vs 特急くろしお徹底比較！白良浜ビーチ＆世界遺産熊野古道1泊2日モデルコース
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            東京から南紀白浜へ新幹線＋特急くろしおだと片道約18,000円。一方、バスタ新宿・大宮・横浜からの直行夜行バス「ホワイトビーチシャトル」なら片道約8,500円〜！大阪（天王寺・なんば）からなら片道約3,000円〜で白良浜の目の前に直行。
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
            白良浜一望＆海と一体化するインフィニティ露天風呂！白浜人気リゾート宿
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
