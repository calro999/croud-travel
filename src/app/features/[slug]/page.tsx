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

      {/* 目次・クイックナビ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-700">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <span>🏆</span>
              <span>今月泊まりたい、本当におすすめできる名宿ランキング</span>
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              口コミで極めて高い満足度を誇る上位10宿と、個性豊かな体験が魅力の注目宿を詳しくご紹介します。
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#ranking-top10"
              className="text-xs sm:text-sm font-bold px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm transition"
            >
              おすすめBEST10を見る ↓
            </a>
            {others.length > 0 && (
              <a
                href="#other-collection"
                className="text-xs sm:text-sm font-semibold px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition"
              >
                あわせて読みたい注目宿
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
        <SpecialCouponBanner />

        {/* ＝＝＝＝＝ TOP 10 ランキング ＝＝＝＝＝ */}
        <section id="ranking-top10" className="space-y-6">
          <div className="border-b-2 border-emerald-500 pb-3 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <span className="text-2xl">👑</span>
              <span>旅好きが選ぶ！満足度BEST 10</span>
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
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>✨</span>
                  <span>あわせて泊まりたい！独自の魅力が光る注目宿（{others.length}選）</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  隠れた絶景露天やこだわりの郷土料理、コスパ抜群の滞在など、旅好きの間で評判の個性豊かな名宿です。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((hotel, idx) => {
                const subRank = idx + 11;
                return (
                  <div
                    key={hotel.hotelNo}
                    className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow transition flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          第 {subRank} 位
                        </span>
                        <span className="text-xs font-black text-amber-500">
                          ★ {hotel.rating.toFixed(2)}
                        </span>
                      </div>

                      <div className="h-36 rounded-lg overflow-hidden bg-slate-100">
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <h4 className="font-bold text-sm text-slate-900 line-clamp-1">
                        {hotel.hotelName}
                      </h4>

                      <p className="text-[11px] text-emerald-800 font-semibold line-clamp-1">
                        {hotel.catchCopy}
                      </p>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {hotel.expertReview}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-sm font-bold text-rose-600">
                        {hotel.minCharge
                          ? `¥${hotel.minCharge.toLocaleString()}〜`
                          : "プラン参照"}
                      </span>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition"
                      >
                        詳細を見る
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 他の今月の特集ナビゲーション */}
        <section className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
          <h3 className="font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
            <span>📅</span>
            <span>今月（{theme.monthLabel}）の他テーマ特集もチェック</span>
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
