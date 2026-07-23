import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【最新】楽天トラベルお得キャンペーン・クーポン・セール一覧 ｜ 日本全国・旅びより",
  description: "楽天トラベルの最新割引クーポン、サマーセール、5と0のつく日高級宿セール、ふるさと納税クーポン、初めて利用キャンペーンなどの超お得な最新セール情報を一挙ご紹介！",
  keywords: ["楽天トラベル", "キャンペーン", "クーポン", "セール", "5と0のつく日", "ふるさと納税", "サマーセール", "割引"],
  openGraph: {
    title: "【最新】楽天トラベルお得キャンペーン・クーポン・セール一覧",
    description: "楽天トラベルの最新割引クーポン、サマーセール、5と0のつく日高級宿セール、ふるさと納税クーポンなどの超お得な最新セール情報を一挙ご紹介！",
  }
};

interface CampaignItem {
  id: string;
  title: string;
  badge: string;
  discountInfo: string;
  description: string;
  targetDays?: string;
  highlights: string[];
  affiliateUrl: string;
  imageUrl: string;
  category: "定期開催" | "大型セール" | "地域応援・クーポン";
}

const CAMPAIGNS: CampaignItem[] = [
  {
    id: "rakuten-5and0-luxury",
    title: "5と0のつく日 高級宿・温泉宿セール",
    badge: "毎月5,10,15,20,25,30日開催",
    discountInfo: "最大20%OFFクーポン＋楽天ポイント大量還元",
    description: "毎月「5」と「0」のつく日は、楽天トラベルの高級宿・温泉宿予約が一年で最もお得になるスペシャルデー！対象の宿で使える最大20%OFFクーポンが配布されます。",
    targetDays: "毎月 5日・10日・15日・20日・25日・30日",
    highlights: ["高級宿・露天風呂付き客室が大幅割引", "早期予約と組み合わせ可能", "エントリー＆楽天カード決済でポイント付与率アップ"],
    affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcamp%2F50day%2F",
    imageUrl: "/images/rakuten_5and0_luxury.png",
    category: "定期開催"
  },
  {
    id: "rakuten-furusato-travel",
    title: "楽天トラベル ふるさと納税クーポン",
    badge: "実質2,000円で憧れ宿に宿泊！",
    discountInfo: "寄付額の最大30%相当のクーポン進呈",
    description: "実質2,000円の自己負担で、憧れの高級温泉旅館やリゾートホテルに宿泊できる大人気制度！寄付後すぐに予約で使えるデジタルクーポンが発券されます。",
    targetDays: "通年開催中（控除上限額の確認はお早めに）",
    highlights: ["あとから予約にクーポンを適用することも可能", "有効期限が最長3年間と長くて安心", "ポイント還元とダブルでお得"],
    affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Ffurusato%2F",
    imageUrl: "/images/rakuten_furusato_travel.png",
    category: "地域応援・クーポン"
  },
  {
    id: "summer-sale-2026",
    title: "楽天トラベル サマーセール＆季節大感謝祭",
    badge: "期間限定ビッグセール",
    discountInfo: "半額プラン多数＋1万円相当クーポン配布",
    description: "夏休み・秋の行楽シーズンに向けた楽天トラベル最大級の半額＆割引大セール！家族旅行やカップル旅行、国内リゾートの目玉プランが満載です。",
    targetDays: "数量限定・期間限定開催中",
    highlights: ["全国の人気ホテルが直前＆先々予約で半額", "レンタカー・高速バスも併せて大幅値引き", "タイムセール限定特別クーポン多数"],
    affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fsale%2F",
    imageUrl: "/images/rakuten_summer_sale_banner.png",
    category: "大型セール"
  },
  {
    id: "rakuten-service-debut",
    title: "楽天トラベル 初めて利用キャンペーン",
    badge: "初回利用限定",
    discountInfo: "最大5,000ポイントプレゼント",
    description: "楽天トラベルを初めてご利用の方、または久しぶりにご利用の方限定の特大ポイント還元キャンペーン！アプリからの予約でさらに付与率アップ。",
    targetDays: "常時エントリー受付中",
    highlights: ["国内宿泊・高速バス・レンタカーなど対象多数", "エントリーするだけでポイント対象に", "他のクーポンと併用OK"],
    affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcamp%2Fdebut%2F",
    imageUrl: "/images/rakuten_service_debut.png",
    category: "定期開催"
  },
  {
    id: "noto-offers-coupon",
    title: "北陸・能登応援旅行割キャンペーン",
    badge: "地域応援特別企画",
    discountInfo: "北陸エリアの宿泊最大20%〜50%相当支援",
    description: "石川県・能登半島をはじめとする北陸応援キャンペーン！対象の宿泊施設で使える応援クーポンでお得に旅して、地元の観光・復興を強力サポート。",
    targetDays: "対象期間内実施",
    highlights: ["金沢・加賀温泉郷・能登の名宿が対象", "地物の蟹や能登牛などの絶品グルメを堪能", "旅することがそのまま現地への応援に"],
    affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fmovement%2Fhokuriku%2F",
    imageUrl: "/images/noto_offers.png",
    category: "地域応援・クーポン"
  },
  {
    id: "rakuten-cars-coupon",
    title: "楽天レンタカー 割引クーポン＆ポイントバック",
    badge: "ドラレコ・カーナビ標準装備",
    discountInfo: "最大30%OFF＋1,000円引きクーポン",
    description: "北海道・沖縄・九州などのドライブ旅行に欠かせないレンタカーをお得に予約！主要レンタカー会社を一括比較＆限定クーポンでお安くお出かけ。",
    targetDays: "事前エントリー開催中",
    highlights: ["トヨタ・日産・オリックス等の一括比較", "免責補償込みの安心プラン", "楽天ポイントがサクサク貯まる"],
    affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcars%2F",
    imageUrl: "/images/rakuten_cars_coupon.png",
    category: "定期開催"
  }
];

export default function CampaignsPage() {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* 戻るナビゲーション */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">お得キャンペーン・セール一覧</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-600 via-amber-700 to-emerald-900 p-8 md:p-12 text-white shadow-md space-y-4">
        <span className="inline-block text-[10px] font-extrabold tracking-widest bg-white/20 border border-white/30 px-3.5 py-1 rounded-full uppercase">
          お得に旅する攻略ガイド 🎁
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          楽天トラベル 最新キャンペーン・クーポン・セール特集
        </h1>
        <p className="text-amber-100/90 text-xs md:text-sm max-w-2xl leading-relaxed font-medium">
          高級ホテルや温泉旅館、家族旅行、ドライブ旅を最も安く賢く予約するための「最新セール・限定クーポン」を一挙にまとめてご紹介。予約前にぜひエントリー・クーポン獲得をお忘れなく！
        </p>
      </section>

      {/* キャンペーン一覧グリッド */}
      <div className="space-y-8">
        {CAMPAIGNS.map((campaign) => (
          <article
            key={campaign.id}
            className="border border-emerald-950/10 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 items-center"
          >
            {/* 左側：イメージ画像 */}
            <div className="md:col-span-4 aspect-video md:aspect-square relative rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-950/5 flex items-center justify-center">
              <img
                src={campaign.imageUrl}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-amber-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-full shadow">
                {campaign.category}
              </span>
            </div>

            {/* 右側：詳細説明 */}
            <div className="md:col-span-8 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    {campaign.badge}
                  </span>
                  {campaign.targetDays && (
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                      📅 {campaign.targetDays}
                    </span>
                  )}
                </div>

                <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950">
                  {campaign.title}
                </h2>

                <p className="text-xs md:text-sm font-bold text-amber-700 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                  🏷️ 割引・特典: {campaign.discountInfo}
                </p>

                <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
                  {campaign.description}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-widest block mb-1">
                    チェックすべきポイント:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-emerald-950/90 font-semibold">
                    {campaign.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-teal-800 font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ボタン */}
              <div className="pt-4 border-t border-emerald-950/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] text-emerald-950/50 font-bold">
                  ※楽天トラベルの公式キャンペーンページへ移動します
                </span>
                <a
                  href={campaign.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow-md text-center transition"
                >
                  公式エントリー＆クーポン獲得へ ✈️
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
