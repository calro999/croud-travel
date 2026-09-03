import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【東京〜盛岡・花巻】新幹線はやぶさ vs 夜行バス徹底比較！片道3,500円〜行く三大麺爆食＆花巻温泉郷1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
  description: "東京から盛岡・花巻へ安く行くには？東北新幹線「はやぶさ」と夜行高速バスの料金・所要時間比較！盛岡三大麺（わんこそば・冷麺・じゃじゃ麺）制覇と宮沢賢治ゆかりの花巻温泉郷を満喫する1泊2日モデルコース。",
  keywords: ["tokyo-iwate-morioka-bus-vs-shinkansen-guide", "高速バス", "バスツアー", "新幹線 比較", "安く行く方法", "1泊2日 モデルコース", "宿泊予約", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokyo-iwate-morioka-bus-vs-shinkansen-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for tokyo-iwate-morioka-bus-vs-shinkansen-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "夜行高速バス（東京/新宿〜盛岡駅西口）",
    "price": "片道 約3,500円〜7,500円",
    "roundPrice": "往復 約7,000円〜15,000円",
    "duration": "約7時間30分〜8時間30分",
    "feature": "最安値！夜22:00〜23:00東京発で翌朝6:30〜7:30盛岡駅直着。朝一番から観光可能。",
    "recommendFor": "三大麺爆食・学生・20代・コスパ重視派"
  },
  {
    "mode": "東北新幹線（はやぶさ/こまち/やまびこ）",
    "price": "片道 約15,010円（はやぶさ指定席）",
    "roundPrice": "往復 約30,020円",
    "duration": "最速約2時間10分",
    "feature": "時速320km運転で最速2時間10分。圧倒的な速さと本数の多さ。",
    "recommendFor": "時短最優先・出張・ファミリー・シニア"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Flist%2F101_03_1.html",
  "ctaText": "🚌 楽天トラベルで「東京 ⇄ 盛岡・花巻」の高速バス最安値を検索・予約する",
  "points": [
    "バスタ新宿・東京駅八重洲口・池袋駅から盛岡駅西口へ毎日直行夜行便が運行。",
    "女性専用車やカーテン付き3列独立シートなど、快適な睡眠環境が充実。",
    "盛岡駅前からはでんでんむしバス（100円周遊バス）で市内観光が超スムーズ！"
  ]
};
  const itinerary = [
  {
    "day": "1日目（早朝盛岡着〜盛岡城跡公園〜名物「わんこそば」挑戦〜花巻温泉）",
    "steps": [
      {
        "time": "07:00",
        "title": "盛岡駅西口到着＆駅ナカ「福田パン」モーニング",
        "desc": "夜行バスを降りて、盛岡のソウルフード「福田パン」のふわふわコッペパン（あんバター等）。"
      },
      {
        "time": "09:00",
        "title": "盛岡城跡公園（岩手公園）＆国の重要文化財「岩手銀行赤レンガ館」",
        "desc": "美しい石垣と辰野金吾設計の赤レンガ洋館を見学し、中津川沿いを散歩。"
      },
      {
        "time": "11:30",
        "title": "東家（あずまや）で名物「わんこそば」100杯挑戦！",
        "desc": "給仕さんの「はい、じゃんじゃん！」の掛け声とともに平らげるわんこそば体験。手形証明書をゲット。"
      },
      {
        "time": "14:30",
        "title": "JR東北本線で花巻へ移動＆宮沢賢治童話村",
        "desc": "銀河鉄道の夜の世界観が広がる幻想的なライトアップ空間と童話の森を散策。"
      },
      {
        "time": "16:30",
        "title": "花巻温泉郷の名旅館チェックイン＆露天風呂",
        "desc": "渓流沿いの露天風呂で名湯に癒やされ、夕食は前沢牛ステーキと三陸海の幸会席。"
      }
    ]
  },
  {
    "day": "2日目（盛岡へ戻り〜盛岡冷麺ランチ〜白沢せんべい店〜帰路）",
    "steps": [
      {
        "time": "09:30",
        "title": "花巻温泉から盛岡へ戻り、材木町「よ市」レトロ通り散策",
        "desc": "宮沢賢治ゆかりのモニュメントや光原社（クラフトショップ）でカフェタイム。"
      },
      {
        "time": "12:00",
        "title": "「ぴょんぴょん舎」または「盛楼閣」で本場盛岡冷麺ランチ",
        "desc": "強いコシの自家製生麺と牛骨のコク深い冷製スープ、爽快な辛味カクテキの絶妙ハーモニー。"
      },
      {
        "time": "14:30",
        "title": "盛岡駅「フェザン」でお土産ショッピング",
        "desc": "「南部せんべい（チョコ・生）」「かもめの玉子」「ベアレンビール」を購入。"
      },
      {
        "time": "16:00",
        "title": "帰路（新幹線はやぶさまたは夜行バスで東京へ）",
        "desc": "盛岡じゃじゃ麺をお土産に積み込み快適に帰還。"
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
              北東北・イーハトーブアクセス比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【東京〜盛岡・花巻】新幹線はやぶさ vs 夜行バス徹底比較！片道3,500円〜行く三大麺爆食＆花巻温泉郷1泊2日モデルコース
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            東北新幹線「はやぶさ」なら東京〜盛岡最速2時間10分・片道約15,010円（往復約30,020円）。夜行高速バスなら片道約3,500円〜7,500円！往復で2万円以上浮くため、わんこそば100杯挑戦、本場盛岡冷麺、花巻温泉郷の奥座敷名旅館を贅沢に楽しめます。
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
            宮沢賢治も愛したイーハトーブの湯！花巻温泉郷の人気名旅館
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

      {/* 🚌 楽天トラベル 観光バスツアー・フェリー・観光列車 クロスセルセクション */}
      <section className="bg-gradient-to-br from-amber-950 via-stone-900 to-orange-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-white/10 space-y-6">
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
    </div>
  );
}
