import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【東京〜広島】新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
  description: "東京から広島へ安く行くには？東海道・山陽新幹線「のぞみ」、飛行機（羽田・成田）、夜行高速バスの料金・所要時間比較！浮いた2.5万円で宮島温泉旅館に泊まり、牡蠣と広島焼きを満喫する1泊2日モデルコース。",
  keywords: ["tokyo-hiroshima-bus-vs-shinkansen-guide", "高速バス", "新幹線 比較", "安く行く方法", "1泊2日 モデルコース", "宿泊予約", "楽天トラベル"],
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
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Flist%2F101_34_1.html",
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

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-cyan-400 text-slate-950 px-3.5 py-1 rounded-full uppercase inline-block">
              山陽・中国地方アクセス比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【東京〜広島】新幹線 vs 飛行機 vs 夜行バス徹底比較！厳島神社＆広島お好み焼き1泊2日モデルコース
          </h1>
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
