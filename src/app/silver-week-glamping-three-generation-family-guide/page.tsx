import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【3世代家族で行くシルバーウィーク グランピング】祖父母も疲れない！段差なしバリアフリー＆和洋室ヴィラ ｜ 日本全国・旅宿クラウド",
  description:
    "おじいちゃん・おばあちゃん、両親、子供の3世代で泊まれる安心グランピング！足腰に優しいフラット設計、畳スペースのある和洋室ヴィラ、食事も椅子席完備でシニアも安心。敬老の日のプレゼント旅行に。",
  keywords: [
    "3世代 グランピング",
    "バリアフリー グランピング",
    "シニア 高齢者 グランピング",
    "和洋室 ヴィラ グランピング",
    "敬老の日 グランピング旅行",
    "シルバーウィーク 家族旅行 グランピング",
    "段差なし 温泉 グランピング",
    "車椅子対応 アウトドアリゾート"
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
      return data["silver-week-glamping-three-generation-family-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-three-generation-family-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingThreeGenerationFamilyPage() {
  const hotels = loadHotels();

  // シニア＆子ども同伴でも破綻しない「3世代グランピング選定の4大鉄則」
  const selectionCriteria = [
    {
      badge: "室内フラット設計",
      title: "段差なしフロア＆室内スロープ",
      desc: "靴を脱いで上がる玄関からリビング・ベッドルームまでフラット、または緩やかなスロープ設計。夜間のトイレ移動でもつまずくリスクを排除し、シニアの足腰の負担を最小限に抑えます。",
    },
    {
      badge: "和洋室＆畳小上がり",
      title: "布団でゴロゴロできる畳小上がり＋洋室ベッド",
      desc: "ハイハイ期の赤ちゃんや床座が落ち着く祖父母には畳スペース、立ち上がりが楽なベッドはシニア両親へ。世代ごとの就寝スタイルの違いを1棟内で無理なく両立できます。",
    },
    {
      badge: "テーブル＆椅子席BBQ",
      title: "地べた座りなし！背もたれ付きダイニング席",
      desc: "アウトドアでありがちなローチェアやあぐら座りは、膝や腰に大きな負荷がかかります。専用ダイニングガゼボに高さの合ったテーブルと安定感のある椅子を備えた宿を厳選。",
    },
    {
      badge: "本館温泉アクセス",
      title: "専用棟内バス＋ホテル本館の本格大浴場・温泉",
      desc: "テント内に清潔な水回り（バストイレ別）を完備しつつ、歩いてすぐの本館ホテルで名湯やサウナも利用可能。天候や体調に合わせて入浴スタイルを選べます。",
    },
  ];

  // 敬老の日×シルバーウィーク 3世代タイムスケジュール案
  const itineraryFlow = [
    {
      time: "15:00",
      step: "ゆったりチェックイン＆客室テラスでお茶会",
      detail: "移動の疲れを癒やすウェルカムドリンク。祖父母は冷暖房完備のリビングで寛ぎ、孫は芝生ガーデンで駆け回る穏やかなスタート。",
    },
    {
      time: "17:00",
      step: "夕食前のかけ流し温泉 または 檜内風呂",
      detail: "混雑する前の夕方に本館温泉へ。手すりやシャワーチェアが整った大浴場で旅の移動疲れをすっきりとほぐします。",
    },
    {
      time: "18:30",
      step: "下ごしらえ済みプレミアムBBQディナー",
      detail: "火起こしや後片付けはスタッフ対応の安心プラン。地元ブランド牛ステーキや新鮮温野菜を、快適なテラスダイニングで囲みます。",
    },
    {
      time: "20:30",
      step: "プライベート焚き火＆マシュマロ焼き",
      detail: "デッキ上の焚き火台で孫と祖父母が一緒にマシュマロ焼き。揺れる炎を眺めながら、普段は話せない家族の思い出話に花が咲きます。",
    },
    {
      time: "22:00",
      step: "快眠ベッド＆防音配慮の静かな就寝",
      detail: "テント特有の外音や風切り音が気になるシニアも、しっかり断熱されたヴィラ構造なら安眠。世代間で生活時間が違っても安心の寝室独立設計。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "車椅子やシルバーカーの持ち込み・利用は可能ですか？",
      answer:
        "敷地内の通路が舗装されているヴィラ棟や、客室エントランスにスロープを常設した施設であれば車椅子のまま移動可能です。棟内に段差がないユニバーサルデザイン客室を指定できる宿もございますので、予約時に「車椅子利用」の旨を備考欄に記載し、動線の確認をおすすめします。",
    },
    {
      question: "3世代（大人4名＋子供2名など）で1棟に泊まれますか？",
      answer:
        "定員6名〜8名に対応した大型ヴィラや、連結ドームテント、あるいは2棟並びで貸し切れるプランが最適です。寝室が2部屋以上に分かれている間取りを選ぶと、就寝時間の異なる祖父母と孫が気兼ねなく過ごせます。",
    },
    {
      question: "BBQの煙や強い火力、調理の負担がシニアに心配です。",
      answer:
        "本記事で紹介するグランピングは、面倒な炭起こしや鉄板の後片付けがすべてスタッフ任せ、もしくはガスグリルで温度調節が簡単な施設を厳選しています。また、食材がカット済みで届くため下ごしらえの立ち仕事がなく、レストラン個室感覚で安全に食事を楽しめます。",
    },
    {
      question: "急な体調不良や悪天候の場合、キャンセル料や変更はどうなりますか？",
      answer:
        "高齢者やお子様連れの旅行では体調変化がつきものです。楽天トラベルの予約画面にてキャンセルポリシー（3日前まで無料、前日50%など）を必ず比較確認してください。荒天時の室内BBQスペース振替保証がある施設を選ぶと安心です。",
    },
  ];

  // 構造化データ (FAQPage Schema)
  const faqSchema = {
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
    <div className="min-h-screen bg-teal-950/5 text-stone-800 py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* 構造化データ挿入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs text-teal-800/70 font-medium">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-teal-700 underline">ホーム</Link>
          </li>
          <li><span className="text-teal-300">/</span></li>
          <li>
            <Link href="/prefectures" className="hover:text-teal-700 underline">グランピング特集</Link>
          </li>
          <li><span className="text-teal-300">/</span></li>
          <li className="text-teal-950 font-bold" aria-current="page">3世代家族グランピングガイド</li>
        </ol>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/60 backdrop-blur-md border border-teal-300/30 text-teal-100 text-xs font-semibold">
            <span>👨‍👩‍👧‍👦</span>
            <span>敬老の日＆シルバーウィーク特別企画</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug font-journal-serif">
            【3世代家族で行くシルバーウィーク グランピング】祖父母も疲れない！段差なしバリアフリー＆和洋室ヴィラ
          </h1>

          <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed pt-1">
            「自然を満喫したい孫」と「足腰に負担をかけたくない祖父母」。両方の願いを叶えるのが、近年の進化系バリアフリーヴィラ＆温泉併設グランピング。段差のないフラットフロア、立ち座りが楽なテーブルダイニング、本館温泉利用など、シニア世代も安心の滞在設計を徹底解説します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-teal-200">
            <span className="flex items-center gap-1">
              <strong className="text-white">✓</strong> 段差なしフラット＆室内スロープ
            </span>
            <span className="flex items-center gap-1">
              <strong className="text-white">✓</strong> 和室畳小上がり＋洋室ベッド完備
            </span>
            <span className="flex items-center gap-1">
              <strong className="text-white">✓</strong> 椅子席ガゼボ＆準備片付け不要BBQ
            </span>
          </div>
        </div>
      </header>

      {/* 楽天トラベル クーポンバナー */}
      <SpecialCouponBanner />

      {/* 3世代グランピング 失敗しない4大選定基準 */}
      <section className="bg-white rounded-3xl border border-teal-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">CRITERIA</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            シニアも孫も笑顔になる！3世代グランピング4つの安心基準
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {selectionCriteria.map((item, idx) => (
            <div key={idx} className="bg-teal-50/40 rounded-2xl p-5 border border-teal-100/80 space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-teal-600 text-white text-[11px] font-bold">
                  {item.badge}
                </span>
                <h3 className="text-base font-bold text-teal-950">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 理想のタイムスケジュール */}
      <section className="bg-white rounded-3xl border border-teal-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">ITINERARY</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            無理のないゆったり滞在！3世代1泊2日モデルスケジュール
          </h2>
        </div>

        <div className="space-y-4 pt-2">
          {itineraryFlow.map((flow, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-4 border-b border-teal-50 last:border-0 last:pb-0">
              <div className="sm:w-28 shrink-0 flex items-center sm:items-start gap-2">
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-lg font-black text-xs sm:text-sm tracking-wider">
                  {flow.time}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-stone-900">{flow.step}</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{flow.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3世代向け 厳選グランピング宿一覧 */}
      <section className="space-y-6" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">RECOMMENDED STAY</span>
          <h2 id="hotels-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            シニア対応バリアフリー＆和洋室完備の厳選グランピング施設
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            車椅子・歩行のしやすさ、温泉アクセス、快適な椅子席BBQを備えた高評価リゾートを厳選。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-teal-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video bg-stone-100 overflow-hidden">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-teal-300 text-xs">
                      画像準備中
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-black text-teal-800 shadow-sm flex items-center gap-1">
                      <span>★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-[10px] text-stone-400 font-normal">({hotel.reviewCount})</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="font-bold text-base sm:text-lg text-stone-900 leading-snug line-clamp-2">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {hotel.hotelSpecial || "3世代家族でゆったり過ごせる充実のアウトドアリゾート。温泉と広々ヴィラで快適な休日をお過ごしいただけます。"}
                  </p>

                  <div className="pt-2 text-[11px] text-stone-500 space-y-1">
                    {(hotel.address1 || hotel.address2) && (
                      <div className="flex items-start gap-1">
                        <span className="text-teal-600 font-bold shrink-0">住所:</span>
                        <span>{hotel.address1}{hotel.address2}</span>
                      </div>
                    )}
                    {(hotel.nearestStation || hotel.access) && (
                      <div className="flex items-start gap-1">
                        <span className="text-teal-600 font-bold shrink-0">交通:</span>
                        <span>{hotel.nearestStation ? `最寄駅: ${hotel.nearestStation} / ` : ""}{hotel.access}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-teal-50 mt-auto">
                <div className="pt-3 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-600 font-medium">
                    {hotel.hotelMinCharge ? (
                      <div>
                        参考最安料金: <span className="text-sm font-black text-teal-900">¥{hotel.hotelMinCharge.toLocaleString()}〜</span>
                      </div>
                    ) : (
                      <span>プラン詳細にて確認</span>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-600 hover:to-emerald-600 text-white font-bold text-xs rounded-xl shadow-sm transition transform hover:-translate-y-0.5 shrink-0"
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
      <section className="bg-white rounded-3xl border border-teal-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            3世代グランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-teal-50">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-teal-700 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・子連れ＆家族旅行モデルコース */}
      <section className="bg-teal-50/60 border border-teal-100 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-teal-950 flex items-center gap-2">
          <span>👨‍👩‍👦</span> あわせて読みたい家族旅行・温泉ガイド
        </h3>
        <p className="text-xs text-stone-600">
          乳幼児連れに優しい温泉旅館や、3世代でゆったり巡れる金沢の1泊2日王道ルートもチェック。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/kanto-baby-friendly-onsen-ryokan-guide"
            className="block p-4 rounded-2xl bg-white border border-teal-100 hover:border-teal-300 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-full inline-block mb-1.5">
              関東・温泉旅館
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
              【関東】赤ちゃん・子連れに優しい温泉旅館特集！部屋食＆家族風呂完備の安心ステイ
            </div>
          </Link>

          <Link
            href="/family-kanazawa-1night2days-model-course"
            className="block p-4 rounded-2xl bg-white border border-teal-100 hover:border-teal-300 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-full inline-block mb-1.5">
              家族旅行モデルコース
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
              【子連れ・家族で行く金沢1泊2日】兼六園・近江町市場・21世紀美術館を満喫する王道プラン
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-teal-50 border border-stone-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
