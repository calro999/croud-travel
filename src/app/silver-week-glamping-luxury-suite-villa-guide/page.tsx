import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【1日3組限定 最高峰ラグジュアリーグランピングヴィラ】誰にも会わない完全プライベート空間＆客室温泉 ｜ 日本全国・旅宿クラウド",
  description:
    "一般のドームテントとは一線を画す完全独立型の一棟貸しヴィラ！プライベート温泉プール、専用露天風呂、専属シェフが出張調理する極上フレンチBBQ、大人の隠れ家ラグジュアリーステイ。",
  keywords: [
    "高級グランピング ヴィラ 一棟貸し",
    "ラグジュアリー グランピング 温泉付き",
    "プライベートプール グランピング",
    "大人限定 隠れ家 グランピング",
    "記念日旅行 グランピング 高級",
    "出張シェフ グランピング ディナー",
    "シルバーウィーク 高級宿 予約"
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
      return data["silver-week-glamping-luxury-suite-villa-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-luxury-suite-villa-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingLuxurySuiteVillaPage() {
  const hotels = loadHotels();

  // 最高峰ヴィラステイを象徴する4大エクスクルーシブ体験
  const exclusivePillars = [
    {
      step: "EXCLUSIVE 01",
      badge: "完全プライベート",
      title: "1日わずか数組限定、周囲の視線を完全遮断した独立敷地",
      desc: "隣室の物音や話し声が届かない数百平米の専有敷地。チェックインからチェックアウトまで他の宿泊客と顔を合わせることなく、プライベートテラスで自然の静寂と風の囁きに身を委ねられます。",
    },
    {
      step: "EXCLUSIVE 02",
      badge: "客室専用温泉＆プール",
      title: "源泉かけ流し露天風呂とプライベート温水プール",
      desc: "いつでも好きな時に手ぶらで飛び込める客室専用の天然温泉とインフィニティプール。秋の心地よい夜風を感じながらシャンパンを片手に、星降る夜空を眺める極上の湯浴みが叶います。",
    },
    {
      step: "EXCLUSIVE 03",
      badge: "出張シェフ美食",
      title: "プライベートデッキで専属シェフが焼き上げる極上フレンチBBQ",
      desc: "煙や油を気にすることなく、プロの料理人が目の前で焼き上げるブランド和牛のシャトーブリアンや伊勢海老。ソムリエ厳選のワインペアリングとともにコース仕立てで提供されます。",
    },
    {
      step: "EXCLUSIVE 04",
      badge: "ホテルライクな寛ぎ",
      title: "シモンズ製特注ベッドとハイブランドアメニティ完備",
      desc: "上質な眠りを約束する最高級マットレス、モル免疫やブルガリ・ディプティックなどの高級バスアメニティ、高級ドライヤー（ReFa/Dyson）を完備。自然の美しさと都会の一流ホテルの快適さが融合します。",
    },
  ];

  // 一般のグランピングドームテント vs ラグジュアリースイートヴィラ比較
  const comparisonList = [
    {
      feature: "空間の独立性・防音性",
      luxuryVilla: "完全独立の一棟建てRC/木造建築。周囲の話し声は一切届かない",
      standardDome: "膜構造のため風の音や隣接テントの話し声・足音が聞こえやすい",
    },
    {
      feature: "水回り・バス設備",
      luxuryVilla: "客室専用の天然温泉露天風呂・内風呂・サウナ・プール完備",
      standardDome: "共同シャワー棟、またはユニットシャワー室が一般的",
    },
    {
      feature: "夕食ディナーの体験",
      luxuryVilla: "専属シェフの出張調理コース、または高級ケータリング仕立て",
      standardDome: "下ごしらえ済み食材を自身でコンロで焼くセルフスタイル",
    },
    {
      feature: "客層と静寂性",
      luxuryVilla: "記念日カップル・大人夫婦・エグゼクティブ中心で極めて静謐",
      standardDome: "学生グループやファミリーも多く、広場やテラスが賑やか",
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "記念日やプロポーズ用のサプライズ対応（花束・ケーキ・シャンパン）は可能ですか？",
      answer:
        "はい、多くの高級スイートヴィラでコンシェルジュによる専任サポートが用意されています。名入れホールケーキの事前手配、お部屋へのフラワーアレンジメント装飾、シャンパンの保冷サーブなど、チェックイン前の客室セッティングにも柔軟に対応可能です。予約後にお電話またはメールでご相談ください。",
    },
    {
      question: "夕食の出張シェフサービスやルームサービスはどのように予約しますか？",
      answer:
        "「専属シェフ付きプラン」または「インルームダイニングプラン」として予約時に選択いただくのが基本です。アレルギーやお苦手な食材のヒアリングも事前に行われ、お客様一人ひとりに合わせたオーダーメイドのコースメニューが提供されます。",
    },
    {
      question: "チェックイン時にフロントで他の客と接触しないプライベートチェックインは可能ですか？",
      answer:
        "本特集に掲載されている最高級ヴィラでは、客室ヴィラに直接車を横付けしてのインルームチェックインや、スマートロックによる非接触セルフチェックインを採用している施設が多数あります。プライバシーを最優先にした動線設計が徹底されています。",
    },
    {
      question: "連泊での滞在やワーケーション利用にも適していますか？",
      answer:
        "はい、全室高速Wi-Fi、広々としたデスクスペース、最新キッチン、全自動洗濯乾燥機を完備しているヴィラが多く、2〜3泊のロングステイや避暑地ワーケーションにも非常に高い評価を得ています。",
    },
  ];

  // FAQPage JSON-LD構造化データ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
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

      {/* ヒーローセクション（Indigo/Navy × Gold/Violet パレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-900 text-white p-8 md:p-14 shadow-2xl border border-indigo-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-amber-500 text-indigo-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              ULTRA LUXURY SUITE VILLA
            </span>
            <span className="text-[10px] md:text-xs font-bold text-indigo-200 bg-indigo-900/80 border border-indigo-400/40 px-3 py-1 rounded-full">
              1日限定数組・客室温泉＆プライベートプール
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【1日3組限定 最高峰ラグジュアリーグランピングヴィラ】誰にも会わない完全プライベート空間＆客室温泉
          </h1>

          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed font-medium">
            一般的なドームテントでは満足できない、本物を知る大人のためのプレミアムエスケープ。周囲の視線を完全に遮断した広大な敷地、客室専用の源泉かけ流し温泉とインフィニティプール、専属シェフが目の前で仕上げる至高のフレンチグリル。大切なパートナーとの記念日や誕生日、誰にも邪魔されない特別な秋連休をお過ごしください。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-indigo-300">
            <span className="flex items-center gap-1.5">✓ 誰とも会わない完全独立プライベートヴィラ</span>
            <span className="flex items-center gap-1.5">✓ 客室天然温泉露天風呂＆プライベートサウナ</span>
            <span className="flex items-center gap-1.5">✓ 出張シェフディナー＆一流ホテルのアメニティ</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 最高峰ヴィラステイの4大エッセンス */}
      <section className="bg-white border border-indigo-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">BESPOKE LUXURY</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            至高の寛ぎを約束する、最高峰ラグジュアリーヴィラ4つの条件
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            自然の雄大さと一流リゾートホテルのホスピタリティが融合した究極のプライベートステイ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {exclusivePillars.map((pillar) => (
            <div
              key={pillar.step}
              className="p-5 rounded-2xl bg-indigo-50/40 border border-indigo-100 hover:border-indigo-400 transition space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-700 tracking-wider font-mono">{pillar.step}</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* スイートヴィラ vs 一般ドームテント比較 */}
      <section className="bg-white border border-indigo-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-indigo-900 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">PRIVACY & COMFORT</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            一棟独立型スイートヴィラ vs 一般ドームテント 徹底比較
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            なぜ記念日やご褒美旅行では「一棟貸しヴィラ」が選ばれるのか。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-indigo-200 bg-indigo-50/60">
                <th className="py-3 px-4 font-black text-slate-900 w-1/4">比較項目</th>
                <th className="py-3 px-4 font-black text-indigo-950 bg-indigo-100/80 w-3/8">
                  最高峰スイートヴィラ 🏛️
                </th>
                <th className="py-3 px-4 font-bold text-slate-500 w-3/8">
                  一般的なドームテント
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-100">
              {comparisonList.map((row, idx) => (
                <tr key={idx} className="hover:bg-indigo-50/30 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/50">{row.feature}</td>
                  <td className="py-3.5 px-4 font-semibold text-indigo-900 bg-indigo-50/40">
                    {row.luxuryVilla}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{row.standardDome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 厳選ラグジュアリーヴィラ宿一覧 */}
      <section className="space-y-6" aria-labelledby="luxury-hotels-heading">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">EXCLUSIVE RETREATS</span>
          <h2 id="luxury-hotels-heading" className="text-xl sm:text-3xl font-black text-slate-900 font-journal-serif">
            大人の隠れ家！完全プライベートを誇る最高峰グランピングヴィラ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            客室露天風呂・プライベートサウナ・上質な空間美を極めた最高ランクの宿。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-indigo-100 hover:border-indigo-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {hotel.hotelImageUrl && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {hotel.hotelMinCharge && (
                    <div className="absolute bottom-3 right-3 bg-indigo-950/85 backdrop-blur-sm text-amber-200 px-3 py-1 rounded-full text-xs font-black shadow-md border border-amber-400/30">
                      1名参考: ¥{hotel.hotelMinCharge.toLocaleString()}〜
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 px-2.5 py-1 rounded-full text-[11px] font-black shadow flex items-center gap-1 border border-indigo-100">
                      <span className="text-amber-500">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-slate-500 font-normal text-[10px]">
                          ({hotel.reviewCount})
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <span>📍</span>
                    <span>
                      {hotel.address1} {hotel.address2}
                    </span>
                  </div>

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-indigo-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "プライベート感あふれる一棟貸しヴィラ。専用温泉やテラスで極上のリトリートタイムを満喫できる大人の隠れ家。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-indigo-50 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-slate-500 font-medium">
                    <span>{hotel.nearestStation ? `最寄: ${hotel.nearestStation}駅` : "専用駐車場完備"}</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
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
      <section className="bg-white rounded-3xl border border-indigo-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-indigo-700 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            ラグジュアリーヴィラ・高級グランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-indigo-50">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                <span className="text-indigo-600 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・関連旅行ガイド */}
      <section className="bg-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-indigo-800/40">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>🥂</span> 特別な日の記念日旅行におすすめの関連記事
        </h3>
        <p className="text-xs text-indigo-200/80">
          カップル記念日や夫婦の記念旅行に選ばれる極上リゾートガイドもあわせてご覧ください。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/hakone-couple-1night2days-anniversary-guide"
            className="block p-4 rounded-2xl bg-indigo-900/60 border border-indigo-700/60 hover:border-indigo-400 hover:bg-indigo-900/90 transition group"
          >
            <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              温泉＆記念日ガイド
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-amber-300 transition line-clamp-2">
              【箱根カップル記念日旅行 1泊2日】露天風呂付き客室と美食フレンチで祝う極上アニバーサリー
            </div>
          </Link>

          <Link
            href="/okinawa-luxury-anniversary-resort-guide"
            className="block p-4 rounded-2xl bg-indigo-900/60 border border-indigo-700/60 hover:border-indigo-400 hover:bg-indigo-900/90 transition group"
          >
            <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              最高峰リゾート
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-amber-300 transition line-clamp-2">
              【沖縄ラグジュアリー記念日リゾート】全室プール付きスイートヴィラ＆至高のインフィニティ絶景
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の最高級ヴィラ＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
