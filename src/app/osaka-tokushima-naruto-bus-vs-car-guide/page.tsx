import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大阪・神戸〜徳島・鳴門】高速バスが圧倒的に便利！料金・時間比較＆大塚国際美術館・鳴門の渦潮1泊2日モデルコース ｜ 日本全国・旅宿クラウド",
  description: "大阪・神戸から徳島・鳴門へ行くなら高速バスが最強！電車やマイカーとの料金・時間比較、明石海峡大橋・大鳴門橋を渡る絶景バスルート、大塚国際美術館直行便と鳴門鯛・阿波尾鶏を味わう1泊2日モデルコース。",
  keywords: ["osaka-tokushima-naruto-bus-vs-car-guide", "高速バス", "バスツアー", "新幹線 比較", "安く行く方法", "1泊2日 モデルコース", "宿泊予約", "楽天トラベル"],
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["osaka-tokushima-naruto-bus-vs-car-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for osaka-tokushima-naruto-bus-vs-car-guide", e);
  }
  return [];
}

export default function HighwayBusArticlePage() {
  const hotels = loadHotels();

  const tableData = [
  {
    "mode": "直行高速バス（大阪/神戸〜鳴門・徳島）",
    "price": "片道 約2,500円〜3,700円",
    "roundPrice": "往復 約4,800円〜6,800円",
    "duration": "約1時間45分（三宮発）〜2時間30分（梅田発）",
    "feature": "最速＆最安！明石海峡大橋・大鳴門橋を直通し、大塚国際美術館や鳴門公園へ直着。",
    "recommendFor": "大塚国際美術館ファン・女子旅・カップル・運転したくない方"
  },
  {
    "mode": "JR特急・新幹線（新大阪〜岡山〜高松〜徳島）",
    "price": "片道 約10,500円（新幹線＋特急うずしお）",
    "roundPrice": "往復 約21,000円",
    "duration": "約2時間30分〜3時間（乗換2回）",
    "feature": "岡山と高松で乗り換えが必要。料金・時間ともにバスに比べて大幅に割高。",
    "recommendFor": "JR乗り放題パス利用者・鉄道ファン"
  }
];
  const busDetails = {
  "busUrl": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Flist%2F103_36_1.html",
  "ctaText": "🚌 楽天トラベルで「大阪・神戸 ⇄ 徳島・鳴門」の高速バスを検索・予約する",
  "points": [
    "阪急梅田・なんば・神戸三宮から鳴門・徳島駅行きが15〜30分間隔で頻発運行。",
    "「大塚国際美術館前」「アオアヲナルトリゾート前」へ直行する観光特化便も多数。",
    "淡路島を縦断する高速道路から望む明石海峡・鳴門海峡の青い海が絶景！"
  ]
};
  const itinerary = [
  {
    "day": "1日目（神戸/大阪発直行バス〜大塚国際美術館〜鳴門鯛ディナー）",
    "steps": [
      {
        "time": "08:30",
        "title": "神戸三宮または大阪梅田から高速バス乗車",
        "desc": "明石海峡大橋を渡り淡路島へ。海に浮かぶような絶景パノラマドライブ。"
      },
      {
        "time": "10:30",
        "title": "「大塚国際美術館前」直着＆世界の名画鑑賞",
        "desc": "西洋名画1,000余点を陶板で原寸大再現。システィーナ礼拝堂天井画やモネの「大睡蓮」に感動。"
      },
      {
        "time": "14:30",
        "title": "渦の道（大鳴門橋遊歩道）から鳴門の渦潮を見下ろす",
        "desc": "海上45メートルのガラス床から渦巻く激流を真上からスリル満点で見学。"
      },
      {
        "time": "16:30",
        "title": "鳴門海峡を望むオーシャンビューリゾートホテルチェックイン",
        "desc": "海を望む展望露天風呂で鳴門温泉に浸かりリラックス。"
      },
      {
        "time": "18:30",
        "title": "鳴門名物「鳴門鯛づくし会席」＆阿波尾鶏グリル",
        "desc": "激流で身が引き締まった天然鳴門鯛のお造り、鯛めし、地鶏阿波尾鶏を堪能。"
      }
    ]
  },
  {
    "day": "2日目（鳴門うずしお観潮船〜徳島ラーメン〜帰路）",
    "steps": [
      {
        "time": "09:30",
        "title": "「うずしお観潮船」に乗船し渦潮の目の前へ大接近",
        "desc": "船の上から轟音とともに渦巻く大迫力の渦潮を体感。"
      },
      {
        "time": "12:00",
        "title": "徳島市内へ移動＆甘辛豚骨醤油「徳島ラーメン」ランチ",
        "desc": "すき焼き風の甘辛バラ肉と生卵が乗った濃厚徳島ラーメン（いのたに・東大等）。"
      },
      {
        "time": "14:30",
        "title": "徳島駅ビル「クレメントプラザ」でお土産ショッピング",
        "desc": "「鳴門金時スイーツ」「阿波和三盆糖」「すだち果汁」「フィッシュカツ」を購入。"
      },
      {
        "time": "16:00",
        "title": "徳島駅から直行高速バス乗車〜神戸・大阪へ",
        "desc": "夕方の高速バスで夜18:30頃に三宮、19:30頃に大阪駅へ帰還。"
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
              関西・四国アクセス比較
            </span>
            <span className="text-[10px] md:text-xs font-bold bg-white/10 text-white/90 px-3 py-1 rounded-full">
              交通手段の徹底比較＆最適ルート
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【大阪・神戸〜徳島・鳴門】高速バスが圧倒的に便利！料金・時間比較＆大塚国際美術館・鳴門の渦潮1泊2日モデルコース
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            電車だと岡山経由で大回りになる徳島・鳴門へは、大阪・神戸からの直行高速バスが最速＆最安！梅田・三宮から鳴門公園口・大塚国際美術館まで片道約2,500円〜3,500円・約1時間45分〜2時間。明石海峡大橋を渡る絶景オーシャンビューの旅。
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
            鳴門海峡・大塚国際美術館至近！海一望の露天風呂が自慢の宿
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
