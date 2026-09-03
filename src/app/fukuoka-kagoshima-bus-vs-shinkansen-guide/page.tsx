import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【福岡・博多〜鹿児島】九州新幹線 vs 高速バス「桜島号」徹底比較！料金半額＆桜島・黒豚・天文館1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
  description: "博多・天神から鹿児島中央へ行くなら九州新幹線と高速バス「桜島号」どっちがお得？料金・所要時間比較！片道3,000円台〜行ける高速バスを活用し、桜島フェリー、仙巌園、名物黒豚しゃぶしゃぶ・白熊を満喫する1泊2日モデルコース。",
  keywords: ["fukuoka-kagoshima-bus-vs-shinkansen-guide", "高速バス", "新幹線 比較", "安く行く方法", "1泊2日 モデルコース", "宿泊予約", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["fukuoka-kagoshima-bus-vs-shinkansen-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for fukuoka-kagoshima-bus-vs-shinkansen-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "高速バス「桜島号」（博多/天神〜鹿児島中央・天文館）",
    "price": "片道 約3,000円〜5,500円（WEB割・学割あり）",
    "roundPrice": "往復 約6,000円〜10,000円",
    "duration": "約4時間〜4時間30分（夜行便あり）",
    "feature": "最安値！博多・天神から鹿児島一の繁華街「天文館」に直着。新幹線の半額以下。",
    "recommendFor": "天文館直行希望・学生・黒豚グルメ爆食・コスパ重視"
  },
  {
    "mode": "九州新幹線（みずほ/さくら/つばめ）",
    "price": "片道 約10,640円（指定席）/ 約10,110円（自由席）",
    "roundPrice": "往復 約20,220円〜21,280円",
    "duration": "最速約1時間16分",
    "feature": "最速76分の圧倒的スピード！山陽新幹線直通「みずほ・さくら」は2列＋2列の極上シート。",
    "recommendFor": "時短最優先・日帰り出張・ファミリー・シニア"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Flist%2F107_46_1.html",
  "ctaText": "🚌 楽天トラベルで「福岡・博多 ⇄ 鹿児島」の高速バス最安値を検索・予約する",
  "points": [
    "博多BT・西鉄天神高速BT・福岡空港から鹿児島中央駅・天文館へ1日24往復運行。",
    "九州自動車道を縦断し、宮原SAやえびのPAで南九州の絶景山並みを望む休憩。",
    "3列独立シート・Wi-Fi・充電コンセント完備で快適なバス移動。"
  ]
};
  const itinerary = [
  {
    "day": "1日目（福岡発高速バス〜天文館直着〜黒豚しゃぶしゃぶ＆名勝「仙巌園」）",
    "steps": [
      {
        "time": "08:00",
        "title": "博多バスターミナルから高速バス「桜島号」乗車",
        "desc": "九州道を快走し南国鹿児島へ。途中SAでいきなり団子や地鶏炭火焼きスナックで休憩。"
      },
      {
        "time": "12:20",
        "title": "鹿児島一の繁華街「天文館」直着＆名物黒豚ランチ",
        "desc": "バスを降りてすぐ！「あぢもり」や「黒豚料理 あぢもり」でとろける黒豚ロースかつ・しゃぶしゃぶ。"
      },
      {
        "time": "14:00",
        "title": "世界文化遺産・島津家別邸「仙巌園（せんがんえん）」",
        "desc": "錦江湾を池、桜島を築山に見立てた借景庭園。名物「両棒餅（ぢゃんぼもち）」を食べながら絶景鑑賞。"
      },
      {
        "time": "16:30",
        "title": "天文館・鹿児島中央駅前の天然温泉ホテルチェックイン",
        "desc": "地下から湧く掛け流し天然温泉でリフレッシュ。"
      },
      {
        "time": "18:30",
        "title": "天文館の居酒屋で「きびなご刺身・地鶏刺し」＆芋焼酎「三岳・森伊蔵」",
        "desc": "キビナゴの酢味噌和えや黒さつま鶏の炭火焼きを本場の芋焼酎ロックとともに堪能。"
      },
      {
        "time": "20:30",
        "title": "「天文館むじゃき」で元祖白熊かき氷デザート",
        "desc": "自家製ミルク蜜とフルーツが山盛りの本家白熊をシェア。"
      }
    ]
  },
  {
    "day": "2日目（桜島フェリー〜桜島溶岩なぎさ遊歩道＆足湯〜帰福）",
    "steps": [
      {
        "time": "09:00",
        "title": "24時間運航の「桜島フェリー」で桜島へ（約15分）",
        "desc": "名物「やぶ金」のうどんを船上で食べながら、目の前に迫る雄大な活火山・桜島を眺める。"
      },
      {
        "time": "10:00",
        "title": "桜島溶岩なぎさ公園（日本最大級の足湯）＆湯之平展望所",
        "desc": "全長約100mの無料足湯に浸かりながら錦江湾と火口を鑑賞。"
      },
      {
        "time": "13:00",
        "title": "鹿児島港へ戻り、鹿児島ラーメンランチ（くろいわ・豚とろ等）",
        "desc": "豚骨と鶏ガラをじっくり煮込んだスープに焦がしネギが香る鹿児島ラーメン。"
      },
      {
        "time": "14:30",
        "title": "鹿児島中央駅「アミュプラザ・みやげ横丁」でお買い物",
        "desc": "「さつま揚げ（月揚庵）」「かすたどん」「かるかん」「知覧茶」を購入。"
      },
      {
        "time": "15:30",
        "title": "鹿児島中央駅から高速バス桜島号乗車〜博多へ",
        "desc": "夕方の高速バスで夜20時頃に福岡・博多へ帰還。"
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
              南九州アクセス徹底比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【福岡・博多〜鹿児島】九州新幹線 vs 高速バス「桜島号」徹底比較！料金半額＆桜島・黒豚・天文館1泊2日モデルコース
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            九州新幹線なら博多〜鹿児島中央最速1時間16分・片道約10,640円（往復約21,280円）。一方、高速バス「桜島号」なら片道約3,000円〜5,000円（WEB割・早割あり）！料金は新幹線の半額以下。浮いた1万円で本場かごしま黒豚しゃぶしゃぶや指宿温泉を満喫する南九州旅。
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
            天文館・鹿児島中央駅直結！天然温泉大浴場＆黒豚朝食が人気の宿
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
