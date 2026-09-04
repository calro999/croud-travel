import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【シルバーウィーク 安いグランピングおすすめ】1人1万円台前半！学生・若者グループ向けの格安コスパ宿 ｜ 日本全国・旅宿クラウド",
  description:
    "秋連休に予算を抑えて楽しむ高コスパグランピング！4〜6人で頭割りして1人1万円台前半、食材持ち込み自由で費用節約、学割・グループ割引プランがある全国の人気コテージ＆ドームテント特集。",
  keywords: [
    "シルバーウィーク 安い グランピング",
    "学生 グランピング コスパ",
    "若者 グループ グランピング 頭割り",
    "食材持ち込み グランピング 格安",
    "コテージ 貸切 学生旅行",
    "1万円以下 グランピング",
    "秋連休 格安 キャンプ リゾート"
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
      return data["silver-week-glamping-cheap-student-budget-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-cheap-student-budget-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingCheapStudentBudgetPage() {
  const hotels = loadHotels();

  // コスパ極大化の頭割り・節約シミュレーション
  const budgetTips = [
    {
      step: "01",
      badge: "頭割り効果",
      title: "定員4〜6名の大型棟をフル活用して1人当たり単価を圧縮",
      desc: "グランピングや貸別荘コテージは1棟あたりの料金設定や、人数が増えるほど追加料金が安くなる定員課金制が主流。サークルやゼミ仲間4〜6名で1棟を貸し切ることで、1人あたり1万円台前半（素泊まりなら数千円台〜）の圧倒的破格で滞在可能です。",
    },
    {
      step: "02",
      badge: "食材持ち込み自由",
      title: "地元スーパーで肉・海鮮・地酒を買い出しして夕食代を半減",
      desc: "コースBBQ付きプランだと夕食だけで1人6,000〜10,000円上乗せされることも。食材持ち込み自由（素泊まりBYO）プランを選び、現地の大型スーパーや道の駅でメガ盛り精肉やドリンクを調達すれば、1人2,000円前後で満腹ごちそうBBQが完成します。",
    },
    {
      step: "03",
      badge: "学割・連泊割",
      title: "シルバーウィークの谷間平日や学生限定特典を狙い撃ち",
      desc: "連休中日を外した日程や、学生証提示でBBQグリルレンタル料無料、焚き火用薪1束プレゼントなどの学生支援特典を提供している施設が狙い目。楽天トラベルの連休直前クーポンや5と0のつく日割引も重複適用できます。",
    },
    {
      step: "04",
      badge: "交通費シェア",
      title: "レンタカー乗り合いや高速バス活用で移動コストも最小化",
      desc: "電車や新幹線ではなく、メンバーでレンタカーを借りてガソリン代・高速代を頭割りするか、主要駅から運行される格安高速バス・送迎付き施設を選ぶことで、往復交通費を1人3,000〜5,000円前後に抑えられます。",
    },
  ];

  // コスパ比較（ホテル宿泊 vs キャンプ道具一式購入 vs 高コスパ手ぶらコテージ）
  const comparisonList = [
    {
      item: "1人あたりの総費用（宿泊＋食事）",
      cheapGlamping: "約12,000円〜16,000円（食材持ち込み時）",
      traditionalCamp: "約25,000円〜（テント・寝袋等の初期投資含む）",
      cityHotel: "約18,000円〜（ホテル代＋外食居酒屋代）",
    },
    {
      item: "ギア・調理器具の準備",
      cheapGlamping: "大型BBQコンロ・食器・冷蔵庫完備（手ぶらOK）",
      traditionalCamp: "テント設営・炭起こし・ランタン等自前準備が必須",
      cityHotel: "調理不可（外食またはテイクアウトのみ）",
    },
    {
      item: "グループでの夜の団らん",
      cheapGlamping: "リビング付きコテージや専用テラスで朝まで語り合える",
      traditionalCamp: "消灯21時〜22時厳守で静粛必須、雨天時は厳しい",
      cityHotel: "2名1室に分断され、部屋を行き来すると窮屈",
    },
    {
      item: "風呂・冷暖房・ベッド",
      cheapGlamping: "エアコン完備・ふかふかベッド・専用バスルームあり",
      traditionalCamp: "マットと寝袋、共同コインシャワー、虫対策必須",
      cityHotel: "通常ユニットバス・個別空調",
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "大学生・未成年のみのグループでも宿泊予約はできますか？",
      answer:
        "大学生や高校生グループでも宿泊可能な施設は多数あります。ただし、未成年者のみで宿泊する場合は保護者の「同意書」提出が必要となる施設が一般的です。予約完了後に届く案内メールを確認するか、事前に宿へ問い合わせて保護者同意書のフォーマットを入手・提出しておきましょう。",
    },
    {
      question: "食材持ち込みプランの場合、どんな調理器具が用意されていますか？",
      answer:
        "コテージや貸別荘タイプの宿では、包丁・まな板・フライパン・鍋・電子レンジ・炊飯器・冷蔵庫・食器類（皿・グラス・箸）が一通り揃っています。BBQグリルやトング、網、木炭などは宿泊料金に含まれる場合と、有料オプション（2,000〜3,000円程度をグループで頭割り）の場合があるため、予約プランの「設備・アメニティ」欄を確認してください。",
    },
    {
      question: "学生4〜6名で頭割りすると、1人あたりの料金はいくらくらいになりますか？",
      answer:
        "例えば1棟定員6名・素泊まり1棟総額36,000円〜48,000円のコテージであれば、6人で割ると1人あたりわずか6,000円〜8,000円です。現地スーパーで調達するBBQ食材代（1人約2,000円〜3,000円）を合わせても、1人1万円台前半で憧れの秋グランピングBBQが実現します。",
    },
    {
      question: "車なしの学生グループでもアクセスしやすい格安グランピングはありますか？",
      answer:
        "最寄り駅から無料送迎バスを運行している施設や、駅からタクシーで10〜15分圏内のスポットがおすすめです。複数人ならタクシー代も割り勘できるため、1人数百円の負担で済みます。また、公共バスの停留所が目の前にあるレジャー施設併設のコテージも車なしグループに人気です。",
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

      {/* ヒーローセクション（Slate/Zinc × Emeraldアクセント） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 text-white p-8 md:p-14 shadow-2xl border border-slate-700">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-emerald-500 text-slate-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              BUDGET GLAMPING 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-slate-200 bg-slate-800/80 border border-slate-600 px-3 py-1 rounded-full">
              4〜6人頭割りで1人1万円台前半・食材持参OK
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【シルバーウィーク 安いグランピングおすすめ】1人1万円台前半！学生・若者グループ向けの格安コスパ宿
          </h1>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
            「グランピングはお洒落だけど1人3万円以上して手が出ない…」と諦めていませんか？定員4〜6名の一棟貸しコテージや広々ドームテントを仲間とシェアすれば、宿泊費を劇的に圧縮可能！地元スーパーでメガ盛り黒毛和牛やお酒を持ち寄れば、1人1万円台前半で極上の秋BBQナイトが楽しめます。大学生サークル旅行や20代仲間旅に最適なコスパ最強の宿を徹底厳選しました。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-emerald-400">
            <span className="flex items-center gap-1.5">✓ 1人あたり数千円〜1万円台前半</span>
            <span className="flex items-center gap-1.5">✓ 食材・お酒の持ち込み自由（BYO）</span>
            <span className="flex items-center gap-1.5">✓ 冷暖房・専用テラス・個別ベッド完備</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 頭割り・節約シミュレーション 4ステップ */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">SMART COST HACK</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            1人1万円台前半でグランピングを満喫する4つの節約方程式
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            工夫次第で一般ホテルの素泊まりより安く、圧倒的に贅沢なアウトドア体験が手に入ります。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {budgetTips.map((tip) => (
            <div
              key={tip.step}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-emerald-600 font-mono">{tip.step}</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {tip.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {tip.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 宿泊スタイル別コスパ比較表 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-slate-700 pl-4 space-y-1">
          <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">VALUE COMPARISON</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            格安コテージ・ドームグランピング vs 通常キャンプ vs ビジネスホテル比較
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            道具なしで気兼ねなく夜更かしできる「一棟貸しグランピング」が若者グループで選ばれる理由。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 bg-slate-100/70">
                <th className="py-3 px-4 font-black text-slate-900 w-1/4">比較項目</th>
                <th className="py-3 px-4 font-black text-emerald-900 bg-emerald-50 w-3/8">
                  高コスパ グランピング・貸コテージ 🏕️
                </th>
                <th className="py-3 px-4 font-bold text-slate-500 w-3/8">
                  本格キャンプ（道具レンタル）
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparisonList.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/50">{row.item}</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-800 bg-emerald-50/30">
                    {row.cheapGlamping}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{row.traditionalCamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 厳選コスパグランピング宿一覧 */}
      <section className="space-y-6" aria-labelledby="cheap-hotels-heading">
        <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">BUDGET PICKS</span>
          <h2 id="cheap-hotels-heading" className="text-xl sm:text-3xl font-black text-slate-900 font-journal-serif">
            学生・若者グループにおすすめの高コスパグランピング＆コテージ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            秋連休もお得！頭割りで安く泊まれる設備充実の人気リゾートです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-slate-200 hover:border-emerald-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
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
                    <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-black shadow-md border border-slate-700">
                      1名最安: ¥{hotel.hotelMinCharge.toLocaleString()}〜
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 px-2.5 py-1 rounded-full text-[11px] font-black shadow flex items-center gap-1 border border-slate-200">
                      <span className="text-amber-500">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-slate-600 font-normal text-[10px]">
                          ({hotel.reviewCount})
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                    <span>📍</span>
                    <span>
                      {hotel.address1} {hotel.address2}
                    </span>
                  </div>

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "グループ利用や学生合宿にも最適な広々コテージ。自炊可能なキッチン設備やテラスBBQコンロを完備したコスパ自慢の宿。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-slate-500 font-medium">
                    <span>{hotel.nearestStation ? `最寄: ${hotel.nearestStation}駅` : "駐車場完備"}</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
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
        <div className="border-l-4 border-slate-800 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            学生・格安グランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                <span className="text-emerald-600 font-black">Q.</span>
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
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <span>🎒</span> 学生旅行・コスパ旅におすすめの関連記事
        </h3>
        <p className="text-xs text-slate-600">
          交通費の徹底節約ノウハウやお得な周遊プランもあわせてチェック！
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/tokyo-osaka-bus-vs-shinkansen-guide"
            className="block p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
              交通費比較ガイド
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700 transition line-clamp-2">
              【東京〜大阪 夜行バス vs 新幹線】徹底比較！安さ・所要時間・快適度で選ぶ学生旅行ルート
            </div>
          </Link>

          <Link
            href="/hokkaido-travel-budget-plan"
            className="block p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              コスパ周遊プラン
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700 transition line-clamp-2">
              【北海道格安旅行プラン】学生・20代向けレンタカー＆格安宿で巡る絶景ロードトリップ
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の格安グランピング＆コテージ一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
