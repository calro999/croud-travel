import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";
import ShareButtons from "@/app/components/ShareButtons";
import FloatingMobileCTA from "@/app/components/FloatingMobileCTA";

interface HotelItem {
  hotelNo: string | number;
  hotelName: string;
  rating: number;
  minCharge: number | null;
  address: string;
  hotelImageUrl: string;
  roomImageUrl: string;
  affiliateUrl: string;
  catchCopy: string;
  specialHighlight: string;
  expertReview: string;
  planHighlights: string[];
  addedAt: string;
}

interface ComparisonHighlight {
  point: string;
  detail: string;
}

interface GuideSection {
  heading: string;
  body: string;
}

interface ExpertGuide {
  title: string;
  intro: string;
  sections: GuideSection[];
}

interface FAQItem {
  q: string;
  a: string;
}

interface MonthlyTheme {
  id: string;
  slug: string;
  month: string; // "2026-11"
  monthLabel: string; // "11月"
  title: string;
  subTitle: string;
  lead: string;
  heroImage: string;
  keywords: string[];
  searchQueries: string[];
  updatedAt: string;
  hotels: HotelItem[];
  comparisonHighlights?: ComparisonHighlight[];
  expertGuide?: ExpertGuide;
  faqs?: FAQItem[];
}


interface RegionDefinition {
  key: string;
  label: string;
  prefectures: string[];
}

const REGION_DEFINITIONS: RegionDefinition[] = [
  {
    key: "hokkaido-tohoku",
    label: "北海道・東北エリア",
    prefectures: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
  },
  {
    key: "kanto-koshin",
    label: "関東・甲信エリア",
    prefectures: ["東京都", "神奈川県", "埼玉県", "千葉県", "茨城県", "栃木県", "群馬県", "山梨県"],
  },
  {
    key: "hokuriku-tokai-shinetsu",
    label: "北陸・東海・信越エリア",
    prefectures: ["新潟県", "長野県", "富山県", "石川県", "福井県", "岐阜県", "静岡県", "愛知県"],
  },
  {
    key: "kansai",
    label: "関西エリア",
    prefectures: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"],
  },
  {
    key: "chugoku-shikoku",
    label: "中国・四国エリア",
    prefectures: ["鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県"],
  },
  {
    key: "kyushu-okinawa",
    label: "九州・沖縄エリア",
    prefectures: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"],
  },
];

function getHotelRegion(address: string): { key: string; label: string } {
  for (const reg of REGION_DEFINITIONS) {
    if (reg.prefectures.some((p) => address.includes(p))) {
      return { key: reg.key, label: reg.label };
    }
  }
  return { key: "other", label: "その他エリア" };
}

interface MonthlyData {
  currentMonth: string;
  themes: MonthlyTheme[];
}

function getMonthlyData(): MonthlyData | null {
  const filePath = path.join(process.cwd(), "src/data/monthly/monthly_features.json");
  if (!fs.existsSync(filePath)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as MonthlyData;
  } catch (e) {
    console.error("Failed to read monthly_features.json", e);
    return null;
  }
}

export async function generateStaticParams() {
  const data = getMonthlyData();
  if (!data || !data.themes) return [];
  return data.themes.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getMonthlyData();
  const theme = data?.themes.find((t) => t.slug === slug);
  if (!theme) return { title: "特集が見つかりません" };

  const pageTitle = `${theme.title}【${theme.monthLabel}最新・高評価順ランキング】`;
  const pageDesc = `${theme.subTitle}。${theme.lead.slice(0, 120)}...`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: theme.keywords,
    alternates: {
      canonical: `https://croud-travel.pages.dev/features/${theme.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      images: theme.heroImage ? [theme.heroImage] : [],
      url: `https://croud-travel.pages.dev/features/${theme.slug}`,
      type: "article",
    },
  };
}

export default async function MonthlyFeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getMonthlyData();
  const theme = data?.themes.find((t) => t.slug === slug);

  if (!theme) {
    notFound();
  }

  // レート(rating)降順でソート（同じなら料金や追加順）
  const sortedHotels = [...(theme.hotels || [])].sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return (b.minCharge || 0) - (a.minCharge || 0);
  });

  const top10 = sortedHotels.slice(0, 10);
  const others = sortedHotels.slice(10);

  const rankBadges = [
    { bg: "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 ring-yellow-300", label: "👑 第1位", crown: "🥇" },
    { bg: "bg-gradient-to-r from-slate-300 to-gray-400 text-slate-950 ring-slate-200", label: "🥈 第2位", crown: "🥈" },
    { bg: "bg-gradient-to-r from-amber-600 to-amber-700 text-white ring-amber-500", label: "🥉 第3位", crown: "🥉" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased pb-24">
      {/* ヒーローヘッダー */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src={theme.heroImage || "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80"}
            alt={theme.title}
            className="w-full h-full object-cover filter blur-sm scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950" />

        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {theme.monthLabel} 旬の旅 特集
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {theme.title}
          </h1>

          <p className="text-base sm:text-lg text-emerald-200 font-medium max-w-2xl mx-auto">
            {theme.subTitle}
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            {theme.lead}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
              🏨 厳選宿: <strong className="text-emerald-400 font-bold">{sortedHotels.length}選</strong>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
              ⭐ 実際の宿泊者満足度順に厳選
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
              🕒 記事更新: {theme.updatedAt || theme.month}
            </span>
          </div>

          <div className="pt-2 flex justify-center">
            <ShareButtons url={`https://croud-travel.pages.dev/features/${theme.slug}`} title={theme.title} />
          </div>
        </div>
      </section>

      {/* 地域別グループの集計 */}
      {(() => null)()}

      {/* 目次・クイックナビ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-10 space-y-3">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-700">
            <p className="font-bold text-slate-900">
              冬休み・年末年始の宿泊予約にも！満足度順ランキング＆地域別ガイド
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              口コミで極めて高い満足度を誇る全国の上位宿と、旅行先別に探せる地域別ブロックを詳しくご紹介します。
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#ranking-top10"
              className="text-xs sm:text-sm font-bold px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm transition"
            >
              満足度BEST10 ↓
            </a>
            <a
              href="#regional-directory"
              className="text-xs sm:text-sm font-bold px-3 py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 rounded-xl transition"
            >
              地域別で探す ↓
            </a>
            {others.length > 0 && (
              <a
                href="#other-collection"
                className="text-xs sm:text-sm font-semibold px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition"
              >
                注目宿全{others.length}選
              </a>
            )}
          </div>
        </div>

        {/* 地域別クイックジャンプバー */}
        <div className="bg-slate-900 text-white rounded-2xl p-3 sm:p-4 shadow-sm border border-slate-800 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-bold text-emerald-400 flex items-center gap-1">
            <span>地域別ジャンプ:</span>
          </span>
          {REGION_DEFINITIONS.map((reg) => {
            const count = sortedHotels.filter((h) => getHotelRegion(h.address).key === reg.key).length;
            if (count === 0) return null;
            return (
              <a
                key={reg.key}
                href={`#region-${reg.key}`}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white transition font-medium border border-slate-700"
              >
                {reg.label} ({count}宿)
              </a>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
        <SpecialCouponBanner />

        {/* ＝＝＝＝＝ TOP 10 ランキング ＝＝＝＝＝ */}
        <section id="ranking-top10" className="space-y-6">
          <div className="border-b-2 border-emerald-500 pb-3 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              旅好きが選ぶ！満足度BEST 10
            </h2>
            <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              高評価順
            </span>
          </div>

          {top10.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-slate-500 border border-slate-200">
              現在、宿データを集計・蓄積中です。しばらくお待ちください。
            </div>
          ) : (
            <div className="space-y-8">
              {top10.map((hotel, idx) => {
                const rank = idx + 1;
                const isTop3 = rank <= 3;
                const badge = isTop3 ? rankBadges[idx] : null;

                return (
                  <article
                    key={hotel.hotelNo}
                    className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border overflow-hidden relative ${
                      isTop3
                        ? "border-amber-300/80 ring-2 ring-amber-100"
                        : "border-slate-200"
                    }`}
                  >
                    {/* 順位バッジ */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                      {isTop3 ? (
                        <div
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm font-black shadow-md ring-2 flex items-center gap-1 ${badge?.bg}`}
                        >
                          <span>{badge?.crown}</span>
                          <span>{badge?.label}</span>
                        </div>
                      ) : (
                        <div className="px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow bg-slate-900 text-white">
                          第 {rank} 位
                        </div>
                      )}
                      <div className="bg-slate-900/90 backdrop-blur text-amber-300 font-black text-xs px-2.5 py-1 rounded-full shadow">
                        ★ {hotel.rating.toFixed(2)}
                      </div>
                    </div>

                    {/* 画像・ヘッダーエリア */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                      <div className="md:col-span-5 relative h-56 md:h-auto min-h-[220px] bg-slate-100 overflow-hidden">
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                        {hotel.roomImageUrl && (
                          <div className="hidden md:block absolute bottom-2 right-2 w-20 h-16 rounded-lg overflow-hidden border-2 border-white shadow-md">
                            <img
                              src={hotel.roomImageUrl}
                              alt="客室イメージ"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>

                      {/* 本文エリア */}
                      <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between">
                        <div className="space-y-2">
                          <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                            <span>📍 {hotel.address}</span>
                          </p>

                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                            <a
                              href={hotel.affiliateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-emerald-700 transition"
                            >
                              {hotel.hotelName}
                            </a>
                          </h3>

                          {hotel.catchCopy && (
                            <p className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">
                              💡 {hotel.catchCopy}
                            </p>
                          )}

                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                            {hotel.expertReview}
                          </p>

                          {hotel.planHighlights && hotel.planHighlights.length > 0 && (
                            <div className="pt-1 flex flex-wrap gap-1.5">
                              {hotel.planHighlights.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200"
                                >
                                  ✓ {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* 料金＆予約ボタン */}
                        <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[11px] text-slate-500 block">参考最安料金（目安）</span>
                            <span className="text-lg sm:text-xl font-black text-rose-600">
                              {hotel.minCharge
                                ? `¥${hotel.minCharge.toLocaleString()}〜`
                                : "宿泊プラン参照"}
                            </span>
                            <span className="text-[11px] text-slate-400 ml-1">/人</span>
                          </div>

                          <div className="w-full sm:w-auto flex items-center gap-2">
                            <a
                              href={hotel.affiliateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto text-center px-5 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow hover:shadow-md transition transform active:scale-95"
                            >
                              楽天トラベルでプランを見る ➔
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* ＝＝＝＝＝ 11位以下：注目宿コレクション ＝＝＝＝＝ */}
        {others.length > 0 && (
          <section id="other-collection" className="space-y-6 pt-6">
            <div className="border-b border-slate-300 pb-3 flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  あわせて泊まりたい！独自の魅力が光る注目宿（{others.length}選）
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  隠れた絶景露天やこだわりの郷土料理、コスパ抜群の滞在など、旅好きの間で評判の個性豊かな名宿です。
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {others.map((hotel, idx) => {
                const subRank = idx + 11;
                return (
                  <article
                    key={hotel.hotelNo}
                    className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                      {/* 画像エリア */}
                      <div className="md:col-span-4 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-slate-900/90 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow">
                          第 {subRank} 位
                        </div>
                        <div className="absolute top-2.5 right-2.5 bg-slate-900/90 text-amber-300 font-black text-xs px-2.5 py-1 rounded-full shadow">
                          ★ {hotel.rating.toFixed(2)}
                        </div>
                      </div>

                      {/* 本文エリア（1行・2行制限を全撤去してしっかり全文紹介） */}
                      <div className="md:col-span-8 flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <p className="text-xs text-slate-500 font-medium">
                            所在地: {hotel.address}
                          </p>

                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            <a
                              href={hotel.affiliateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-emerald-700 transition"
                            >
                              {hotel.hotelName}
                            </a>
                          </h3>

                          {hotel.catchCopy && (
                            <p className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                              {hotel.catchCopy}
                            </p>
                          )}

                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {hotel.expertReview}
                          </p>

                          {hotel.planHighlights && hotel.planHighlights.length > 0 && (
                            <div className="pt-1 flex flex-wrap gap-1.5">
                              {hotel.planHighlights.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200"
                                >
                                  ✓ {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* 料金＆予約ボタン */}
                        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[11px] text-slate-500 block">参考料金</span>
                            <span className="text-base sm:text-lg font-black text-rose-600">
                              {hotel.minCharge
                                ? `¥${hotel.minCharge.toLocaleString()}〜`
                                : "宿泊プラン参照"}
                            </span>
                            <span className="text-[11px] text-slate-400 ml-1">/人</span>
                          </div>

                          <a
                            href={hotel.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow transition"
                          >
                            楽天トラベルで詳細を見る ➔
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        
        {/* ＝＝＝＝＝ エリア別・地域ブロック（冬休み・旅行先で探す） ＝＝＝＝＝ */}
        <section id="regional-directory" className="space-y-8 pt-8 border-t border-slate-200">
          <div className="border-b-2 border-emerald-500 pb-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              地域・旅行先から探す！エリア別おすすめ名宿
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              冬休みの帰省や旅行先、近場の温泉地に合わせて選べるエリア別一覧です。各地の気候や名物料理、アクセスに合わせて最適な宿をお選びいただけます。
            </p>
          </div>

          <div className="space-y-10">
            {REGION_DEFINITIONS.map((reg) => {
              const regHotels = sortedHotels.filter(
                (h) => getHotelRegion(h.address).key === reg.key
              );
              if (regHotels.length === 0) return null;

              return (
                <div
                  key={reg.key}
                  id={`region-${reg.key}`}
                  className="scroll-mt-24 space-y-4 bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span>{reg.label}</span>
                      <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        {regHotels.length}軒掲載
                      </span>
                    </h3>
                    <span className="text-xs text-slate-400">
                      対象エリア: {reg.prefectures.slice(0, 4).join('・')}ほか
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {regHotels.map((hotel) => {
                      const overallRank = sortedHotels.findIndex((h) => h.hotelNo === hotel.hotelNo) + 1;
                      return (
                        <div
                          key={hotel.hotelNo}
                          className="border border-slate-200 rounded-xl p-4 hover:border-emerald-500 hover:shadow-sm transition bg-slate-50/50 flex flex-col justify-between space-y-3"
                        >
                          <div className="flex gap-3">
                            <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0 relative">
                              <img
                                src={hotel.hotelImageUrl}
                                alt={hotel.hotelName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <span className="absolute bottom-1 left-1 bg-slate-900/90 text-[10px] font-bold text-amber-300 px-1.5 py-0.5 rounded">
                                ★{hotel.rating.toFixed(2)}
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 space-y-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-bold bg-slate-800 text-white px-1.5 py-0.2 rounded">
                                  総合第{overallRank}位
                                </span>
                                <span className="text-[11px] text-slate-500 truncate">
                                  {hotel.address.split(' ')[0]}
                                </span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                                <a
                                  href={hotel.affiliateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-emerald-700 transition"
                                >
                                  {hotel.hotelName}
                                </a>
                              </h4>
                              {hotel.catchCopy && (
                                <p className="text-[11px] text-emerald-800 font-medium line-clamp-1">
                                  {hotel.catchCopy}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 text-xs">
                            <span className="font-bold text-rose-600">
                              {hotel.minCharge
                                ? `¥${hotel.minCharge.toLocaleString()}〜/人`
                                : "プラン参照"}
                            </span>
                            <a
                              href={hotel.affiliateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 bg-slate-900 hover:bg-emerald-600 text-white text-[11px] font-bold rounded-lg transition"
                            >
                              プランを見る ➔
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ＝＝＝＝＝ 徹底比較ハイライト＆宿泊選びの基準 ＝＝＝＝＝ */}
        {theme.comparisonHighlights && theme.comparisonHighlights.length > 0 && (
          <section className="bg-gradient-to-br from-emerald-950/5 via-teal-900/5 to-slate-900/5 border border-emerald-950/10 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-black uppercase tracking-widest">
              <span>📊</span>
              <span>EDITORIAL COMPARISON MATRIX</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              【{theme.monthLabel}編集部まとめ】失敗しない宿選びの3大比較ポイント
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {theme.comparisonHighlights.map((item, cIdx) => (
                <div key={cIdx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                    POINT 0{cIdx + 1}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm">{item.point}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ＝＝＝＝＝ プロが教える専門ガイド ＝＝＝＝＝ */}
        {theme.expertGuide && (
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="border-b border-slate-100 pb-4 space-y-2">
              <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider inline-block">
                EXPERT TRAVEL GUIDE
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {theme.expertGuide.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {theme.expertGuide.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {theme.expertGuide.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="text-emerald-600">✓</span>
                    <span>{sec.heading}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ＝＝＝＝＝ よくある質問（FAQ） ＝＝＝＝＝ */}
        {theme.faqs && theme.faqs.length > 0 && (
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="space-y-1 border-b border-slate-100 pb-3">
              <span className="text-[10px] font-black tracking-widest text-emerald-700 uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                {theme.title}に関するよくある質問
              </h2>
            </div>
            <div className="space-y-4">
              {theme.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-2">
                  <h3 className="font-bold text-sm text-slate-900 flex items-start gap-2">
                    <span className="text-emerald-700 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 他の今月の特集ナビゲーション */}
        <section className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
          <h3 className="font-bold text-base text-slate-900 mb-3">
            今月（{theme.monthLabel}）の他テーマ特集もチェック
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data?.themes
              .filter((t) => t.slug !== theme.slug)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/features/${t.slug}`}
                  className="bg-white p-3 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-sm transition flex items-center gap-3"
                >
                  <img
                    src={t.heroImage}
                    alt={t.title}
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug">
                      {t.title}
                    </p>
                    <span className="text-[10px] text-emerald-600 font-semibold mt-1 inline-block">
                      掲載宿: {t.hotels?.length || 0}軒 ➔
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>

      <FloatingMobileCTA
        affiliateUrl="#ranking-top10"
        hotelName={theme.title}
        isSpecialFeature={true}
      />
    </main>
  );
}
