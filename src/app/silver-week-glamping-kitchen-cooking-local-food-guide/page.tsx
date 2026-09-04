import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【本格キッチン付き！道の駅買い出し料理グランピング】地元高原野菜とご当地肉で楽しむ自炊派ヴィラ ｜ 日本全国・旅宿クラウド",
  description:
    "調理器具・IHキッチン・大型冷蔵庫完備！地元の道の駅や直売所で仕入れた新鮮な高原野菜やブランド肉を自分たちで自由にクッキング。手ぶらBBQにはない「料理の楽しさ」を味わうこだわりグランピング。",
  keywords: [
    "キッチン付き グランピング",
    "道の駅 買い出し 料理 グランピング",
    "自炊 コテージ ヴィラ",
    "調理器具完備 グランピング",
    "ご当地食材 クッキング 宿泊",
    "大型冷蔵庫 IHキッチン 宿",
    "手作りBBQ グランピング",
    "シルバーウィーク 自炊ヴィラ"
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
      return data["silver-week-glamping-kitchen-cooking-local-food-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-kitchen-cooking-local-food-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingKitchenCookingLocalFoodPage() {
  const hotels = loadHotels();

  // 自炊派が満足する「キッチン付きグランピング」4大メリット
  const kitchenFeatures = [
    {
      badge: "本格アイランド/システムキッチン",
      title: "IHコンロ・広々シンク・作業台でストレスのない調理",
      desc: "アウトドア用簡易コンロではなく、一般的な家庭用キッチン以上の設備を完備。複数人で並んで野菜を切ったり炒めたりできるアイランドカウンターを備えた宿も多数。",
    },
    {
      badge: "充実の調理家電＆ツール",
      title: "BALMUDAトースター・STAUB鋳鉄鍋・本格包丁セット",
      desc: "憧れの高級調理家電や煮込みに最適なホーロー鍋、ワイングラス、ワインオープナーまでフルラインナップ。重たい道具を持参することなく本格クッキングが叶います。",
    },
    {
      badge: "大容量2ドア冷蔵庫完備",
      title: "道の駅で買い込んだ地酒・野菜・精肉をたっぷり保冷",
      desc: "小型ホテル冷蔵庫ではなく、冷凍室付きの大型冷蔵庫を設置。氷のストックはもちろん、直売所で購入した大量のクラフトビールやお肉も余裕でストックできます。",
    },
    {
      badge: "道の駅・直売所巡りとの相乗効果",
      title: "旅先の朝採れ旬野菜と銘柄肉をその日のうちに味わう贅沢",
      desc: "都市部のスーパーでは手に入らない希少な伝統野菜や、朝採れトウモロコシ、地元精肉店の上質カルビを調達。素材そのものの力強い甘みと旨みを堪能できます。",
    },
  ];

  // 道の駅買い出し〜クッキングの黄金レシピ＆工程
  const cookingCourse = [
    {
      stepNumber: "01",
      title: "午後：地域の大型「道の駅」やJA直売所に立ち寄り買い出し",
      detail: "地元農家が出荷したばかりのみずみずしい高原野菜、地鶏やブランド豚、地元の特産味噌やクラフトスパイスを調達。スタッフおすすめの旬を聞くのも旅の醍醐味。",
    },
    {
      stepNumber: "02",
      title: "夕方：広々キッチンで仲間・家族とワイワイ仕込みタイム",
      detail: "冷えた地ビールやワインを開けながら前菜をサッと準備。鋳鉄鍋に野菜とお肉を放り込んで蒸し焼きにしたり、アヒージョのオイルを温めたり、調理そのものがエンタメに。",
    },
    {
      stepNumber: "03",
      title: "夜：テラスのアウトドアグリルと室内キッチンのハイブリッド宴",
      detail: "煙が出る塊肉のグリルはテラスのBBQコンロで豪快に、ソースやスープ、パスタの仕上げは室内のIHキッチンで。気候や好みに合わせて快適に食事を楽しめます。",
    },
    {
      stepNumber: "04",
      title: "翌朝：買い残した新鮮卵と高原野菜のスキレットモーニング",
      detail: "前夜の残った野菜を活用したラタトゥイユや、濃厚な地卵の目玉焼き、カリッと焼いた地元ベーカリーのバゲットで清々しい朝食を手作り。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "油や塩・コショウなどの調味料は宿に用意されていますか？",
      answer:
        "衛生管理の観点から、塩・胡椒・油などの基本調味料も常備されていない施設が一般的です。道の駅や地元のスーパーでご当地スパイスや小瓶のオイルを購入するか、あらかじめご家庭から小分けにして持参することをおすすめします。",
    },
    {
      question: "包丁、まな板、フライパン、食器類は持参が必要ですか？",
      answer:
        "本特集に掲載している施設は、フライパン・両手鍋・包丁・まな板・人数分の平皿・深皿・カトラリー・グラス類が一式揃っています。食器用洗剤やスポンジ、キッチンペーパー、ラップなども備え付けられていることがほとんどです。",
    },
    {
      question: "魚の鱗取りや強い匂いの出る料理は室内で行えますか？",
      answer:
        "一般的な調理は問題ありませんが、激しい煙が出る直火焼き肉や魚の炭火焼きなどは、テラスに設置された専用アウトドアグリルでの調理がルール化されている場合があります。換気設備をご確認の上、ルールに沿ってご利用ください。",
    },
    {
      question: "使った調理器具や食器の後片付けはどうすればいいですか？",
      answer:
        "基本的には使用した食器や鍋は洗って元の位置に戻すか、食洗機を回して退室するのがコテージ・自炊ヴィラの一般的なマナーです。ゴミの分別方法（燃えるゴミ、ビン・缶、ペットボトル）も施設ごとの案内に従いましょう。",
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
    <div className="min-h-screen bg-rose-950/5 text-stone-800 py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* 構造化データ挿入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs text-rose-900/70 font-medium">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-rose-700 underline">ホーム</Link>
          </li>
          <li><span className="text-rose-300">/</span></li>
          <li>
            <Link href="/prefectures" className="hover:text-rose-700 underline">グランピング特集</Link>
          </li>
          <li><span className="text-rose-300">/</span></li>
          <li className="text-rose-950 font-bold" aria-current="page">キッチン付き自炊グランピングガイド</li>
        </ol>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-rose-800 via-rose-700 to-amber-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 backdrop-blur-md border border-rose-300/30 text-rose-100 text-xs font-semibold">
            <span>🍳</span>
            <span>自炊派＆料理好きのための美食ステイ</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug font-journal-serif">
            【本格キッチン付き！道の駅買い出し料理グランピング】地元高原野菜とご当地肉で楽しむ自炊派ヴィラ
          </h1>

          <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed pt-1">
            決まったBBQセットでは物足りない料理好き・自炊派のための贅沢な休日。道の駅や直売所で仕入れたピチピチの旬野菜やブランド肉を、高機能IHキッチンや鋳鉄鍋で自分好みにアレンジ。仲間や家族とキッチンカウンターを囲む、最高のクッキング旅へ。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-rose-200">
            <span className="flex items-center gap-1">
              <strong className="text-white">✓</strong> 調理器具・食器・カトラリー一式完備
            </span>
            <span className="flex items-center gap-1">
              <strong className="text-white">✓</strong> 大型2ドア冷蔵庫で買い出し食材も余裕
            </span>
            <span className="flex items-center gap-1">
              <strong className="text-white">✓</strong> 室内キッチン×テラスBBQグリルの併用
            </span>
          </div>
        </div>
      </header>

      {/* 楽天トラベル クーポンバナー */}
      <SpecialCouponBanner />

      {/* キッチン付き自炊グランピングの4大メリット */}
      <section className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">KITCHEN COMFORTS</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            料理好きが唸る！キッチン付きヴィラ滞在の4つの魅力
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {kitchenFeatures.map((item, idx) => (
            <div key={idx} className="bg-rose-50/40 rounded-2xl p-5 border border-rose-100/80 space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-rose-600 text-white text-[11px] font-bold">
                  {item.badge}
                </span>
                <h3 className="text-base font-bold text-rose-950">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 買い出し〜クッキング黄金フロー */}
      <section className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">COOKING FLOW</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            道の駅直売所から始まる！絶品自炊グランピングの過ごし方
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {cookingCourse.map((course, idx) => (
            <div key={idx} className="bg-stone-50/60 rounded-2xl p-5 border border-stone-200/80 space-y-2 relative overflow-hidden">
              <span className="text-4xl font-black text-rose-200/60 absolute -right-2 -bottom-2 pointer-events-none">
                {course.stepNumber}
              </span>
              <span className="text-xs font-black text-rose-600 tracking-wider">
                STEP {course.stepNumber}
              </span>
              <h3 className="font-bold text-sm sm:text-base text-stone-900 relative z-10">
                {course.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed relative z-10">
                {course.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選キッチン付きヴィラ＆コテージ宿一覧 */}
      <section className="space-y-6" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">RECOMMENDED STAY</span>
          <h2 id="hotels-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            本格キッチン・大型冷蔵庫完備の厳選グランピング・ヴィラ
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            周辺に道の駅や直売所があり、調理設備が充実した自炊派向け高評価リゾートを厳選。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-rose-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col justify-between"
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
                    <div className="w-full h-full flex items-center justify-center text-rose-300 text-xs">
                      画像準備中
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-black text-rose-900 shadow-sm flex items-center gap-1">
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
                    {hotel.hotelSpecial || "調理器具やキッチンが充実した独立型コテージ・ヴィラ。地元の食材を買い込んで自由気ままに料理が楽しめる宿泊体験を提供します。"}
                  </p>

                  <div className="pt-2 text-[11px] text-stone-500 space-y-1">
                    {(hotel.address1 || hotel.address2) && (
                      <div className="flex items-start gap-1">
                        <span className="text-rose-600 font-bold shrink-0">住所:</span>
                        <span>{hotel.address1}{hotel.address2}</span>
                      </div>
                    )}
                    {(hotel.nearestStation || hotel.access) && (
                      <div className="flex items-start gap-1">
                        <span className="text-rose-600 font-bold shrink-0">交通:</span>
                        <span>{hotel.nearestStation ? `最寄駅: ${hotel.nearestStation} / ` : ""}{hotel.access}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-rose-50 mt-auto">
                <div className="pt-3 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-600 font-medium">
                    {hotel.hotelMinCharge ? (
                      <div>
                        参考最安料金: <span className="text-sm font-black text-rose-950">¥{hotel.hotelMinCharge.toLocaleString()}〜</span>
                      </div>
                    ) : (
                      <span>プラン詳細にて確認</span>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-rose-700 to-amber-700 hover:from-rose-600 hover:to-amber-600 text-white font-bold text-xs rounded-xl shadow-sm transition transform hover:-translate-y-0.5 shrink-0"
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
      <section className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            自炊＆キッチン付きグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-rose-50">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-rose-700 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・山梨ぶどう狩り＆草津温泉 */}
      <section className="bg-rose-50/60 border border-rose-100 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-rose-950 flex items-center gap-2">
          <span>🍇</span> あわせて読みたい旬の味覚＆温泉旅ガイド
        </h3>
        <p className="text-xs text-stone-600">
          秋のフルーツ狩りやワイナリーツアー、温泉街の散策予算ガイドも合わせてチェック。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/yamanashi-grape-bus-tour-daytrip-guide"
            className="block p-4 rounded-2xl bg-white border border-rose-100 hover:border-rose-300 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-rose-800 bg-rose-100/70 px-2 py-0.5 rounded-full inline-block mb-1.5">
              旬の果物狩り
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-rose-700 transition line-clamp-2">
              【山梨ぶどう狩り＆ワイナリー周遊】車なしでも安心！新宿発の日帰りバスツアー完全攻略ガイド
            </div>
          </Link>

          <Link
            href="/kusatsu-onsen-travel-budget-guide"
            className="block p-4 rounded-2xl bg-white border border-rose-100 hover:border-rose-300 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-rose-800 bg-rose-100/70 px-2 py-0.5 rounded-full inline-block mb-1.5">
              温泉街・予算比較
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-rose-700 transition line-clamp-2">
              【草津温泉旅行の予算ガイド】1泊2日・2泊3日の宿泊費・交通費・湯畑グルメ相場を徹底解説
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-rose-50 border border-stone-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
