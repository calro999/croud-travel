import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【雨でも安心！全天候型グランピング】屋根付きBBQデッキ＆冷暖房完備ドームテントで台風・雨天も快適 ｜ 日本全国・旅宿クラウド",
  description:
    "せっかくのシルバーウィークが雨予報でも大丈夫！開閉式ルーフや屋根付きウッドデッキ、室内ボードゲームラウンジ、温泉大浴場が直結した全天候型グランピング施設。雨天キャンセル規定の比較も。",
  keywords: [
    "雨でも安心 グランピング",
    "全天候型 グランピング",
    "雨 BBQ 屋根付き グランピング",
    "台風 グランピング キャンセル料",
    "シルバーウィーク 雨 キャンプ",
    "室内ラウンジ グランピング",
    "ドームテント 雨天 過ごし方"
  ],
};

interface Hotel {
  hotelNo: number;
  hotelName: string;
  hotelSpecial?: string;
  hotelImageUrl?: string;
  hotelMinCharge?: number;
  affiliateUrl: string;
  address1?: string;
  address2?: string;
  access?: string;
  nearestStation?: string;
  reviewAverage?: number;
  reviewCount?: number;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["silver-week-glamping-rainy-weather-indoor-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-rainy-weather-indoor-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingRainyWeatherIndoorPage() {
  const hotels = loadHotels();

  // 雨天グランピングの成否を分けるチェックポイント
  const rainCheckpoints = [
    {
      title: "屋根付きBBQデッキ・開閉式防風カーテン",
      desc: "横殴りの秋雨でも服や靴を濡らさず、炭やガスグリルが消える心配なく温かい料理を味わえます。",
      tag: "食事スペース",
    },
    {
      title: "二重構造ドームテント＆高気密冷暖房",
      desc: "雨音を心地よいBGMに変える防音・遮水仕様。湿気や冷気を完全にシャットアウトし室内はサラサラ。",
      tag: "居住性",
    },
    {
      title: "テント直結または館内直通の内湯・大浴場",
      desc: "傘を差して屋外を歩く必要がなく、濡れずに客室風呂や天然温泉スパへ直行できる動線設計。",
      tag: "入浴動線",
    },
    {
      title: "室内アクティビティ＆ラウンジスペース",
      desc: "ボードゲーム貸出、フリードリンクラウンジ、プロジェクター完備で、籠もり時間が最高のエンタメに。",
      tag: "室内遊び",
    },
  ];

  // 台風・雨天時のキャンセル規定比較基準
  const cancelPolicyGuides = [
    {
      caseType: "通常の雨天・小雨・曇り",
      rule: "通常通りのキャンセル規定（規定日数前からキャンセル料発生）",
      advice: "全天候型施設なら雨でも室内でBBQやサウナを楽しめるため、キャンセルせず決行するのが満足度高。",
    },
    {
      caseType: "台風・大雨警報による公共交通機関の運休",
      rule: "キャンセル料免除（無料キャンセル）対象になるケースが多い",
      advice: "JRや高速道路が通行止めになった証明書や公式発表を確認後、施設へ電話または予約サイト経由で連絡。",
    },
    {
      caseType: "施設判断による営業休止・安全閉鎖",
      rule: "全額返金または振替対応（キャンセル料不要）",
      advice: "前日夕方〜当日早朝に施設側から連絡が入るため、楽天トラベルの登録メール・電話番号を着信可能な状態に。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "雨の日でもバーベキューは本当に濡れずに楽しめますか？",
      answer:
        "全天候型グランピングでは、専用ウッドデッキに頑丈な屋根と透明な開閉式ビニールカーテン（防風・防雨スクリーン）が常設されています。横殴りの雨風でも煙を逃しながら暖かく快適に食事ができ、衣服や食材が濡れる心配はありません。",
    },
    {
      question: "ドームテント内は雨が降ると湿気や雨音でうるさくなりませんか？",
      answer:
        "高品質な二重構造ドームテントは気密性と断熱性に優れており、エアコンの除湿機能で室内は常にカラッとしています。雨音も適度な反響音に抑えられ、自然のホワイトノイズとしてリラックスして眠ることができます。",
    },
    {
      question: "台風が直撃しそうな場合、キャンセル料はどうなりますか？",
      answer:
        "気象庁から警報が発令されたり、主要交通機関（新幹線・特急・高速道路）が通行止めになった場合、多くの施設で特例としてキャンセル料免除の措置が取られます。ただし判断基準は施設ごとに異なるため、予報が確定した時点で施設フロントに確認相談することをおすすめします。",
    },
    {
      question: "雨の日のグランピングで持参しておくと便利なアイテムはありますか？",
      answer:
        "足元が濡れても安心な替えの靴下・スリッパ、テントと管理棟を行き来する折りたたみ傘、肌寒い時に羽織れるフリースやマウンテンパーカー、室内で盛り上がれるカードゲームやスマホ用モバイルバッテリーがあるとより快適に過ごせます。",
    },
  ];

  // JSON-LD FAQPage 構造化データ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 px-4 sm:px-6">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ヒーローセクション（Slateパレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-8 md:p-14 shadow-2xl border border-slate-700/50">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-slate-200 text-slate-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              ALL-WEATHER GLAMPING GUIDE
            </span>
            <span className="text-[10px] md:text-xs font-bold text-slate-300 bg-slate-800/80 border border-slate-600 px-3 py-1 rounded-full">
              秋雨・台風でも諦めない快適リゾート
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【雨でも安心！全天候型グランピング】屋根付きBBQデッキ＆冷暖房完備ドームテントで台風・雨天も快適
          </h1>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
            秋の連休のグランピング予約で一番怖いのが「秋雨前線や台風による悪天候」。しかし、最新の全天候型グランピング施設なら、強風や豪雨を遮る開閉式ガゼボデッキ、気密性の高い断熱ドームテント、雨に濡れずに行ける天然温泉大浴場が揃っており、雨の日こそ贅沢な「おこもりステイ」を満喫できます。天候リスクを徹底回避する宿選びとキャンセル規約の対策ポイントを網羅しました。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5">✓ 全席屋根＆クリアカーテン完備BBQ</span>
            <span className="flex items-center gap-1.5">✓ 冷暖房・除湿完備ドームテント</span>
            <span className="flex items-center gap-1.5">✓ 濡れずに直行できる温泉・シャワー</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 雨でも100%満足できる施設選びの4大基準 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-slate-700 pl-4 space-y-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Inspection Points</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            天候に左右されない！全天候型グランピングのチェックリスト
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            「予約したのに雨で台無し」を防ぐために、予約前に必ず確認すべき4つの設備条件。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rainCheckpoints.map((pt, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded-full inline-block">
                {pt.tag}
              </span>
              <h3 className="font-bold text-sm sm:text-base text-slate-900">{pt.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 台風・悪天候時のキャンセル規定比較ガイド */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md border border-slate-800">
        <div className="space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Risk Management</span>
          <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
            悪天候時のキャンセル規定＆判断基準のリアル
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            シルバーウィーク直前に台風が発生した際、慌てないための心得と手順。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cancelPolicyGuides.map((item, i) => (
            <div key={i} className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-2.5">
              <h3 className="font-bold text-sm text-slate-100 border-b border-slate-700 pb-2">
                {item.caseType}
              </h3>
              <div className="text-xs text-amber-300 font-bold">
                規定: {item.rule}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.advice}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選全天候型グランピング宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-slate-700 pl-4 space-y-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">All-Weather Selection</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 font-journal-serif">
            雨でも快適！屋根付きデッキ＆温泉完備のグランピング宿
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            屋根付きBBQテラス、直結温泉、室内ラウンジなど雨対策が万全な高評価施設を厳選。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {hotel.hotelImageUrl && (
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <span className="text-yellow-400">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-[10px] text-slate-400">({hotel.reviewCount})</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] text-slate-500 font-medium">
                    {hotel.address1} {hotel.address2}
                  </div>

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-slate-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "屋根付きテラスと快適な室内設備を備えた全天候対応グランピングリゾート。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-slate-600 font-medium">
                    {hotel.hotelMinCharge ? (
                      <div>
                        最安目安: <span className="text-sm font-black text-slate-900">¥{hotel.hotelMinCharge.toLocaleString()}〜</span>
                      </div>
                    ) : (
                      <span>プラン詳細にて確認</span>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 ✈️
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-slate-700 pl-4 space-y-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            全天候型グランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                <span className="text-slate-700 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・雨の日の観光モデルコース */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <span>🌧️</span> あわせて読みたい雨天・屋内観光ガイド
        </h3>
        <p className="text-xs text-slate-600">
          グランピング前後のドライブや立ち寄りに最適な、雨の日でも楽しめる観光モデルコース。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/hakone-rainy-day-indoor-model-course"
            className="block p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              箱根雨の日モデルコース
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-slate-700 transition line-clamp-2">
              【箱根雨の日観光モデルコース】雨天でも100%満喫できる美術館巡り・日帰り温泉・屋内スポット完全攻略
            </div>
          </Link>

          <Link
            href="/kanazawa-rainy-day-indoor-guide"
            className="block p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              金沢雨の日ガイド
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-slate-700 transition line-clamp-2">
              【金沢雨の日観光ガイド】弁当忘れても傘忘れるな！21世紀美術館や近江町市場など屋内満喫モデルプラン
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
