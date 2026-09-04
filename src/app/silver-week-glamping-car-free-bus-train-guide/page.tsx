import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【車なし・電車と送迎で行けるグランピング】シルバーウィークに免許なし＆ペーパードライバーでも行ける宿 ｜ 日本全国・旅宿クラウド",
  description:
    "レンタカーや運転免許がなくても秋のグランピングへ！主要駅から徒歩圏内、無料シャトル送迎バス付き、高速バス停留所からすぐの好立地グランピング施設厳選。都心から乗り換え少なめの快適アクセス完全解説。",
  keywords: [
    "車なし グランピング",
    "電車で行ける グランピング",
    "送迎あり グランピング",
    "ペーパードライバー 旅行 グランピング",
    "免許なし グランピング おすすめ",
    "駅近 グランピングリゾート",
    "シルバーウィーク 電車旅"
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
      return data["silver-week-glamping-car-free-bus-train-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-car-free-bus-train-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingCarFreeBusTrainPage() {
  const hotels = loadHotels();

  // 車なしグランピングのアクセス種別メリット
  const transitBenefits = [
    {
      icon: "🚄",
      type: "新幹線・特急直通＋駅前シャトル送迎",
      desc: "大都市主要駅から最寄駅まで乗り換えなしで一直線。改札を出たら宿専用の無料送迎バスに乗り込むだけで荷物の持ち運びも最小限。",
    },
    {
      icon: "🚌",
      type: "高速バス直行＆バス停至近",
      desc: "バスタ新宿や東京駅、主要ターミナルからリゾート直行バスが運行。渋滞があっても車内で読書や居眠りができ運転疲労ゼロ。",
    },
    {
      icon: "🍺",
      type: "全員がお酒を楽しめる自由な滞在",
      desc: "誰か一人が運転手としてお酒を我慢する必要が一切なし。BBQでのクラフトビール乾杯からナイトワインまで全員で満喫可能。",
    },
  ];

  // 免許なし・電車旅のための持ち物＆チェックリスト
  const travelTips = [
    {
      step: "01",
      title: "送迎バスの「事前予約締切」を宿泊予約直後に確認",
      detail: "多くの無料送迎バスは完全予約制で運行されています。定員制のため、新幹線の特急券を手配する前に送迎バスの空き状況と発着時間を確保しましょう。",
    },
    {
      step: "02",
      title: "キャリーケース＋リュックの分割パッキング",
      detail: "未舗装路や砂利道があるグランピング場では、スーツケースの車輪が転がしにくい場合があります。重い荷物は配送するか、背負えるリュックを活用するのが身軽です。",
    },
    {
      step: "03",
      title: "最寄駅周辺のコンビニ・ドラッグストアを事前マップ保存",
      detail: "宿周辺に商店がない場合が多いため、駅前で必要なスナックやアメニティ、常備薬などを調達してから送迎バスに乗るのがスマートです。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "駅からの送迎バスは有料ですか？事前予約は必要ですか？",
      answer:
        "本記事で紹介している送迎付き施設の多くは「宿泊者限定の無料シャトルバス」を運行しています。ただし運行ダイヤが定時運行（1日数便）の場合や、前日までの完全事前予約制となっている場合が多いため、宿泊予約後に必ず各施設の送迎案内ページで予約手続きを行ってください。",
    },
    {
      question: "大きなスーツケースを持って行っても大丈夫ですか？",
      answer:
        "電車移動や送迎バス内には持ち込み可能です。ただし、ドームテントへ向かう敷地内の通路がウッドチップや芝生、砂利道になっていることがあるため、重すぎる大型スーツケースよりも、取り回しやすい中型キャリーバッグやボストンバッグがおすすめです。",
    },
    {
      question: "チェックイン前やチェックアウト後に荷物を預けられますか？",
      answer:
        "ほとんどのグランピング施設のフロント・管理棟で手荷物の一時預かりに対応しています。最寄駅周辺の観光地を身軽に散策したい場合は、事前にフロントへ荷物預かりの可否を問い合わせておくとスムーズです。",
    },
    {
      question: "車がないと周辺観光や買い出しは不便ですか？",
      answer:
        "本記事の厳選宿は「手ぶら夕朝食付き」「敷地内に温泉やアクティビティ完備」の施設に絞っています。施設内だけで1泊2日十分に完結するため、途中で車を出して買い出しに行く必要がありません。",
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

      {/* ヒーローセクション（Tealパレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-950 via-teal-950 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-teal-500/20">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-teal-500 text-stone-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              CAR-FREE GLAMPING TRIP 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-teal-200 bg-teal-900/60 border border-teal-400/40 px-3 py-1 rounded-full">
              電車・無料送迎シャトル直行特化
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【車なし・電車と送迎で行けるグランピング】シルバーウィークに免許なし＆ペーパードライバーでも行ける宿
          </h1>

          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed font-medium">
            運転免許がない学生グループやシニア夫婦、慣れない山道運転を避けたいペーパードライバーでも安心。特急列車や新幹線で最寄駅までゆったり移動し、無料送迎バスや路線バスで直行できる好アクセスのグランピング施設を厳選。連休の大渋滞に巻き込まれず、全員がお酒を楽しめる気軽なアウトドア旅へ出かけましょう。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-teal-300">
            <span className="flex items-center gap-1.5">✓ 最寄駅・空港から無料送迎あり</span>
            <span className="flex items-center gap-1.5">✓ 渋滞・運転疲労ゼロで快適移動</span>
            <span className="flex items-center gap-1.5">✓ 施設完結型・買い出し不要</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 車なし旅の3大メリット */}
      <section className="bg-teal-50/50 border border-teal-200/80 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-teal-700 uppercase tracking-wider">Public Transit Journey</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            「車を使わないグランピング」が今、大人気な3つの理由
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            レンタカー代やガソリン代の高騰、連休の高速道路渋滞を完全回避。到着した瞬間からリラックスが始まります。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transitBenefits.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm space-y-2.5">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="font-bold text-sm sm:text-base text-teal-950">{item.type}</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選車なし・送迎付きグランピング宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Selected Accessible Stays</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-stone-900 font-journal-serif">
            電車と無料送迎で行ける！シルバーウィークおすすめグランピング宿
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            駅前シャトルバス・高速バス直結・空港送迎に対応した全国屈指の人気リゾート。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-teal-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-teal-50">
                {hotel.hotelImageUrl ? (
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-teal-300 text-xs font-bold">
                    {hotel.hotelName}
                  </div>
                )}
                {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? (
                  <span className="absolute bottom-2.5 right-2.5 text-[10px] font-black bg-stone-950/85 text-teal-300 px-2.5 py-1 rounded-lg border border-teal-500/30">
                    1名 ¥{hotel.hotelMinCharge.toLocaleString()}〜
                  </span>
                ) : null}
                {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                  <div className="absolute top-2.5 left-2.5 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg flex items-center gap-1 border border-white/10">
                    <span className="text-amber-400">★</span>
                    <span>{hotel.reviewAverage.toFixed(2)}</span>
                    {hotel.reviewCount ? (
                      <span className="text-stone-300 text-[9px]">({hotel.reviewCount}件)</span>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-700">
                    <span>🚉</span>
                    <span>最寄駅: {hotel.nearestStation || hotel.address1}</span>
                  </div>

                  <h3 className="font-black text-stone-900 text-base leading-snug group-hover:text-teal-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "公共交通機関と専用送迎で快適アクセス。大自然に囲まれた充実設備のリゾートグランピング。"}
                  </p>

                  {hotel.access && (
                    <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 text-[11px] text-teal-950 font-medium">
                      <span className="font-bold block text-teal-800 mb-0.5">🚌 アクセス・送迎情報</span>
                      <p className="line-clamp-2 leading-relaxed">{hotel.access}</p>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-teal-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-500 font-medium">
                    <span>送迎・アクセス良好</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 ✈️
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 車なし旅行を成功させる3箇条 */}
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-teal-950 shadow-lg">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-1">
            <span className="text-teal-400 font-black text-xs uppercase tracking-widest">Travel Smart Tips</span>
            <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
              電車・バスで行くグランピングを120%楽しむための実践ポイント
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              重い荷物を持たずに快適に目的地へ到達するためのチェックリストです。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {travelTips.map((tip, i) => (
              <div key={i} className="bg-stone-800/80 rounded-2xl p-5 border border-stone-700/80 space-y-2">
                <span className="text-xs font-black text-teal-400 block tracking-widest">{tip.step}</span>
                <h3 className="font-bold text-sm text-white">{tip.title}</h3>
                <p className="text-xs text-stone-300 leading-relaxed font-medium">{tip.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-teal-200 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            車なしグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-teal-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-teal-600 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・関連旅行ガイド */}
      <section className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
          <span>🚆</span> あわせて読みたい車なし・電車旅ガイド
        </h3>
        <p className="text-xs text-stone-600">
          レンタカーなし・免許なしでも巡れる大人気の観光特化モデルコース。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/izu-shimoda-car-free-travel-guide"
            className="block p-4 rounded-2xl bg-white border border-teal-200/60 hover:border-teal-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
              伊豆・下田 電車旅
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
              【伊豆下田・車なし観光モデルコース】踊り子号＆伊豆急行で行くペリーロード・白浜海岸・金目鯛グルメ
            </div>
          </Link>

          <Link
            href="/kamikochi-matsumoto-car-free-guide"
            className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              信州・上高地 直行バス
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
              【上高地・松本 車なし観光モデルコース】特急あずさ＆シャトルバスで行く大正池・河童橋・松本城巡り
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-teal-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
