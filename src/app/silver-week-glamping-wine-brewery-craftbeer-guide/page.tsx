import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【ワイナリー・クラフトビール付きグランピング】勝沼・長野で楽しむ！美酒とペアリングBBQの秋旅 ｜ 日本全国・旅宿クラウド",
  description:
    "お酒好きのための美食グランピング！山梨勝沼のワイナリー巡り隣接宿、クラフトビールサーバー飲み放題付きドームテント、ソムリエ厳選ワインとジビエ・甲州牛のマリアージュを堪能する大人の休日。",
  keywords: [
    "ワイナリー グランピング",
    "クラフトビール グランピング",
    "ビールサーバー付き ドームテント",
    "勝沼 ワイン グランピング",
    "山梨 長野 ワイン旅",
    "ペアリングBBQ グランピング",
    "大人の美食グランピング",
    "フリーフロー 酒 グランピング"
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
      return data["silver-week-glamping-wine-brewery-craftbeer-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-wine-brewery-craftbeer-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingWineBreweryCraftbeerPage() {
  const hotels = loadHotels();

  // ワイン＆ビールグランピングの4大ハイライト
  const tastingHighlights = [
    {
      badge: "ビールサーバー完備",
      title: "客室専用クラフトビールサーバーで注ぎたて生を楽しむ",
      desc: "ドームテント内やプライベートテラスにクラフトビール生サーバーを据え付けた贅沢仕様。きめ細やかな泡とホップの芳醇なアロマを、グラスに注いで好きなだけ味わえます。",
    },
    {
      badge: "ワイナリー直結",
      title: "ブドウ畑を望むテラスで勝沼・信州ワインの飲み比べ",
      desc: "日本屈指のワイン産地・勝沼や千曲川ワインバレーに近接。甲州種の爽快な白ワインや樽熟成のマスカット・ベーリーAを、秋風吹き抜けるウッドデッキで嗜む大人の休日。",
    },
    {
      badge: "本格ペアリング",
      title: "ソムリエ厳選銘柄×甲州牛・信州サーモンの炭火グリル",
      desc: "赤身の旨みが際立つ甲州牛リブアイや信州ジビエには重厚な赤、清流魚のハーブホイル焼きには軽やかな白。食材の輪郭を引き立てるマリアージュBBQが待っています。",
    },
    {
      badge: "夜のワインBAR",
      title: "焚き火を囲んでホットワイン＆クラフトスナックの語らい",
      desc: "陽が沈んだ後は薪火ラウンジでシナモン香るグリューワインや地元酒蔵のクラフトジンを提供。心地よい酔いに包まれながら、静かな高原の夜更けを語り尽くせます。",
    },
  ];

  // ワイン＆クラフトビールペアリングBBQの流儀
  const pairingCourses = [
    {
      phase: "乾杯 / Apero",
      drink: "地元ブルワリーのセゾン または 瓶内二次発酵スパークリング",
      food: "季節のイチジクと生ハム、地元産ブッラータチーズのカプレーゼ",
      point: "華やかな柑橘香とシャープな酸味で胃を刺激し、夕暮れのアペロタイムを演出。",
    },
    {
      phase: "前菜 / Antipasto",
      drink: "樽熟成 甲州 白ワイン（シュール・リー製法）",
      food: "ヤマメ・信州サーモンのハーブスモーク＆採れたて高原野菜のバーニャカウダ",
      point: "ミネラル感と酵母の厚みが川魚の繊細な脂と野菜の甘みを引き出します。",
    },
    {
      phase: "メイン / Grill",
      drink: "芳醇なメルロー または スモーキーなIPA（インディアペールエール）",
      food: "甲州牛サーロイン塊肉の炭火ロースト＆自家製ハーブマスタード",
      point: "肉汁のコクに負けないタンニンとホップの苦味が口内を爽やかにリセット。",
    },
    {
      phase: "締め・焚き火 / Digestif",
      drink: "スパイス香るホットワイン または 熟成スタウト（黒ビール）",
      food: "カカオ70%ビターショコラとマシュマロの炭火スモア",
      point: "薪の煙とダークモルト・赤ワインのビターな甘美が溶け合う至福のフィナーレ。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "お酒の持ち込み（BYO）は可能ですか？持ち込み料はかかりますか？",
      answer:
        "多くのグランピング施設では、お気に入りのワインや地ビールの持ち込みが完全無料です。施設によってはワインクーラーやリーデル社などの高品質ワイングラスを無料貸出してくれる場合もあります。ただしフリーフロープランの利用条件やグラス破損時の規定があるため、事前のご案内をご確認ください。",
    },
    {
      question: "ビールサーバー付きプランの銘柄は指定できますか？",
      answer:
        "施設ごとに提携ブルワリーが異なり、地元・長野の「ヤッホーブルーイング」や山梨の「富士桜高原麦酒」、全国展開のクラフトビール銘柄（スプリングバレー等）からタップが選べるスタイルが主流です。樽が空になった場合の追加樽購入（1樽単位）に対応している施設も多数ございます。",
    },
    {
      question: "車で行く場合、ワイナリー巡りや試飲はどうすればいいですか？",
      answer:
        "ドライバーの方がテイスティングできない問題を防ぐため、チェックイン後に宿からワイナリーへ徒歩またはタクシー・周遊観光バスでアクセスできる施設を選ぶのが鉄則です。また、ワイナリー直営売店でボトルを購入し、宿のプライベートテラスで心置きなく開栓する過ごし方もおすすめです。",
    },
    {
      question: "お酒が強くないメンバーや同伴者がいても楽しめますか？",
      answer:
        "ノンアルコールのスパークリングぶどうジュース（勝沼の醸造用ぶどう100%果汁）や自家製クラフトコーラ、ノンアルコールサワーなどを豊富に揃えている施設が増えています。お酒を飲まない方も本格的なグランピングBBQや澄んだ空気、上質な焚き火時間を存分に楽しめます。",
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

      {/* ヒーローセクション（Amberパレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white p-8 md:p-14 shadow-2xl border border-amber-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-500 text-stone-950 px-3.5 py-1 rounded-full uppercase shadow-md font-mono">
              WINE & BREWERY GLAMPING 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-amber-200 bg-amber-950/80 border border-amber-500/40 px-3 py-1 rounded-full">
              美酒とペアリングBBQを嗜む大人の秋旅
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【ワイナリー・クラフトビール付きグランピング】勝沼・長野で楽しむ！美酒とペアリングBBQの秋旅
          </h1>

          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed font-medium">
            ブドウがたわわに実る秋の勝沼、清冽な仕込み水がクラフトビールを育む信州や新潟の高原。夜風が涼やかさを増すシルバーウィークは、専用生ビールサーバーから注ぐ芳醇なクラフトビールと、地元ワイナリー直送のワインを片手に過ごす「美酒グランピング」のベストシーズンです。極上肉の炭火グリルと合わせるペアリングの贅沢を体感してください。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-amber-300">
            <span className="flex items-center gap-1.5">🍺 専用クラフトビールサーバー完備室あり</span>
            <span className="flex items-center gap-1.5">🍷 勝沼・信州のワイナリー連携＆持ち込み自由</span>
            <span className="flex items-center gap-1.5">🥩 甲州牛・ジビエと楽しむ本格ペアリングBBQ</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 美酒グランピングの4大ハイライト */}
      <section className="bg-white border border-amber-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Tasting & Brewery Experience</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            お酒好きを唸らせる！美酒グランピング4つの極上ポイント
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            ただ飲むだけではない、注ぎたての鮮度と産地の空気感が料理の味を別次元へと昇華させます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tastingHighlights.map((hl, i) => (
            <div key={i} className="bg-amber-50/40 rounded-2xl p-6 border border-amber-100 space-y-2.5">
              <span className="text-[10px] font-black text-amber-800 bg-amber-200/80 px-3 py-0.5 rounded-full inline-block">
                {hl.badge}
              </span>
              <h3 className="font-bold text-base text-stone-900 leading-snug">{hl.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">{hl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ペアリングBBQのコース提案 */}
      <section className="bg-stone-950 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md border border-amber-900/40">
        <div className="space-y-1">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">Pairing Strategy</span>
          <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
            美酒と肉料理の極み！グランピングBBQペアリングコース例
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80">
            アペロから締めの一杯まで。風土の恵みを重ね合わせるペアリングの組み立て方。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pairingCourses.map((course, i) => (
            <div key={i} className="bg-amber-950/40 rounded-2xl p-5 border border-amber-800/40 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-black text-amber-400 tracking-wider block font-mono">
                  {course.phase}
                </span>
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-amber-300">🍷 {course.drink}</div>
                  <div className="text-xs font-bold text-stone-100">🍽️ {course.food}</div>
                </div>
              </div>
              <p className="text-[11px] text-stone-300 leading-relaxed border-t border-amber-900/60 pt-2">
                {course.point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選ワイン＆ビール宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Selected Wine & Brewery Stays</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-stone-900 font-journal-serif">
            美酒とグルメを味わう！おすすめグランピング施設
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            新潟の高原リゾートや秩父・九州の銘酒を味わえる、大人旅にふさわしい厳選スポット。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {hotel.hotelImageUrl && (
                <div className="relative h-48 w-full overflow-hidden bg-amber-50">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <span className="text-amber-400">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-[10px] text-amber-200">({hotel.reviewCount})</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] text-amber-800 font-bold">
                    📍 {hotel.address1} {hotel.address2}
                  </div>

                  <h3 className="font-black text-stone-900 text-base leading-snug group-hover:text-amber-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "地元の恵みを味わうBBQや自然美、美酒に囲まれて心地よい酔いに浸る大人のグランピングステイ。"}
                  </p>

                  {hotel.nearestStation && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚉 最寄駅: {hotel.nearestStation}
                    </p>
                  )}
                  {hotel.access && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-amber-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-600 font-medium">
                    {hotel.hotelMinCharge ? (
                      <div>
                        最安目安: <span className="text-sm font-black text-amber-900">¥{hotel.hotelMinCharge.toLocaleString()}〜</span>
                      </div>
                    ) : (
                      <span>プラン詳細にて確認</span>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
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
      <section className="bg-white rounded-3xl border border-amber-200 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            ワイナリー＆ビールグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-amber-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-amber-700 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・山梨ワイン＆ぶどう狩り・アクセスガイド */}
      <section className="bg-amber-50/60 border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
          <span>🍇</span> あわせてチェックしたい山梨ワイナリー＆アクセスガイド
        </h3>
        <p className="text-xs text-stone-600">
          お酒を飲む旅ならバス利用がスマート。勝沼ぶどう狩りや河口湖への高速バス攻略記事を合わせてチェック。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/yamanashi-grape-bus-tour-daytrip-guide"
            className="block p-4 rounded-2xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              日帰り＆試飲ツアー
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-700 transition line-clamp-2">
              【山梨ぶどう狩り＆ワイナリー周遊】車なしでも安心！新宿発の日帰りバスツアー完全攻略ガイド
            </div>
          </Link>

          <Link
            href="/tokyo-fujikawaguchiko-highway-bus-guide"
            className="block p-4 rounded-2xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              直行高速バス
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-700 transition line-clamp-2">
              【東京・新宿〜富士河口湖】高速バス vs 電車 徹底比較！渋滞回避テクニックと予約のコツ
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-amber-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
