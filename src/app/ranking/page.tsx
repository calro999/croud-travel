import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import FloatingMobileCTA from "@/app/components/FloatingMobileCTA";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";
const RAKUTEN_RANKING_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Franking%2F";

export const metadata: Metadata = {
  title: "【最新】全国おすすめ温泉宿・人気ホテル総合ランキング50選｜楽天トラベル高評価★4.5以上の宿",
  description: "楽天トラベルの口コミ総合評価★4.5以上を誇る全国の極上温泉宿・高級ホテル・リゾートをランキング形式で一挙ご紹介！客室露天風呂、料理自慢の美食旅館、絶景インフィニティ風呂など、失敗しない憧れの宿泊先を比較・今すぐ空室確認＆予約できます。",
  keywords: [
    "ホテル ランキング",
    "温泉宿 ランキング",
    "楽天トラベル 高評価宿",
    "満足度ランキング 温泉",
    "高級旅館 ランキング",
    "露天風呂付き客室 人気",
    "口コミ高評価 宿"
  ],
  alternates: { canonical: `${baseUrl}/ranking/` },
  openGraph: {
    title: "【最新】全国おすすめ温泉宿・人気ホテル総合ランキング50選",
    description: "口コミ評価★4.5以上の厳選宿をランキング形式で紹介。楽天トラベルの最新プラン・最安値・限定割引クーポンで今すぐ宿泊予約。",
    url: `${baseUrl}/ranking/`,
    siteName: "旅宿クラウド",
    type: "article",
  },
};

interface Post {
  id: string;
  title: string;
  hotel_name: string;
  description?: string;
  image: string;
  affiliate_url: string;
  prefecture: string;
  area: string;
  categories: string[];
  price: string | number;
  rating: string | number;
  review_count?: number;
  date: string;
}

function getTopRankedPosts(): Post[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (!fs.existsSync(dataPath)) return [];
    const posts: Post[] = JSON.parse(fs.readFileSync(dataPath, "utf8"));
    
    // 評価が4.5以上、価格設定ありの宿を評価降順（同点の場合は価格降順）でソート
    const highRated = posts.filter(
      p => p.rating && Number(p.rating) >= 4.5 && Number(p.price) > 0 && p.hotel_name && !p.hotel_name.includes("特集") && !p.hotel_name.includes("ランキング")
    );

    highRated.sort((a, b) => {
      const rateDiff = Number(b.rating) - Number(a.rating);
      if (rateDiff !== 0) return rateDiff;
      return Number(b.price) - Number(a.price);
    });

    return highRated.slice(0, 50);
  } catch (e) {
    console.error("Failed to load ranking posts:", e);
    return [];
  }
}

export default function RankingPage() {
  const rankingPosts = getTopRankedPosts();

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "全国おすすめ温泉宿・ホテル総合ランキング50選",
        item: `${baseUrl}/ranking/`,
      },
    ],
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "全国おすすめ温泉宿・ホテル総合ランキング50選",
    numberOfItems: rankingPosts.length,
    itemListElement: rankingPosts.map((post, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: post.hotel_name,
      url: `${baseUrl}/posts/${post.id}/`,
    })),
  };

  return (
    <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      {/* 構造化データ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs text-emerald-950/60 flex items-center gap-2">
        <Link href="/" className="hover:text-emerald-900 transition underline underline-offset-2">ホーム</Link>
        <span>›</span>
        <span className="text-emerald-950 font-bold">総合宿泊ランキング50選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-950 via-teal-950 to-emerald-950 p-8 md:p-12 text-white shadow-xl border border-amber-500/30">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="relative space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-teal-950 text-xs font-black tracking-wider uppercase shadow-md">
            <span>🏆</span> <span>楽天トラベル公式クチコミ ★4.5以上限定</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight">
            全国おすすめ温泉宿・人気ホテル<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
              総合ランキングTOP50
            </span>
          </h1>

          <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed font-medium">
            3,200件超の旅宿アーカイブから、宿泊者満足度★4.5以上の宿だけを厳選。
            「絶対に外したくない特別な旅行」「大切な記念日やご褒美ステイ」に自信を持っておすすめできる全国最高峰の名宿を一挙公開します。
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href="#ranking-list"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm md:text-base font-black text-teal-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-300 hover:from-amber-300 hover:to-yellow-200 rounded-2xl shadow-xl transition transform hover:-translate-y-0.5"
            >
              <span>🥇 ランキング1位〜50位を見る</span>
              <span>↓</span>
            </a>
            <a
              href={RAKUTEN_RANKING_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition"
            >
              <span>楽天公式ランキング ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 割引クーポンバナー */}
      <SpecialCouponBanner />

      {/* ランキング一覧 */}
      <section id="ranking-list" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-950/10 pb-4">
          <div>
            <span className="text-[10px] font-extrabold text-amber-800 uppercase tracking-widest block">TOP RATED HOTELS & RYOKAN</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950">
              満足度★4.5以上 厳選ランキング一覧
            </h2>
          </div>
          <span className="text-xs font-bold text-emerald-950/60 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            全50宿・リアルタイム空室確認対応
          </span>
        </div>

        <div className="space-y-6">
          {rankingPosts.map((post, idx) => {
            const rank = idx + 1;
            const isTop3 = rank <= 3;
            const rankBg = rank === 1 ? "bg-amber-400 text-teal-950" : rank === 2 ? "bg-stone-300 text-stone-900" : rank === 3 ? "bg-amber-700 text-white" : "bg-emerald-950/80 text-white";

            return (
              <article
                key={post.id}
                className={`relative rounded-3xl overflow-hidden bg-white border ${isTop3 ? "border-amber-400 shadow-md ring-2 ring-amber-400/20" : "border-emerald-950/10 shadow-sm"} hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row`}
              >
                {/* 順位バッジ */}
                <div className={`absolute top-3 left-3 z-10 w-10 h-10 rounded-2xl ${rankBg} flex items-center justify-center font-black text-base shadow-md font-journal-serif`}>
                  {rank}
                </div>

                {/* アイキャッチ画像 */}
                <div className="w-full md:w-2/5 aspect-[16/10] md:aspect-auto relative overflow-hidden bg-emerald-50">
                  <img
                    src={post.image}
                    alt={post.hotel_name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading={idx < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    📍 {post.prefecture}・{post.area}
                  </div>
                </div>

                {/* 宿情報エリア */}
                <div className="w-full md:w-3/5 p-5 md:p-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-black text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                        ⭐ 総合評価 {post.rating}
                      </span>
                      {Number(post.price) > 0 && (
                        <span className="font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md">
                          1名目安 ¥{Number(post.price).toLocaleString()}〜
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold font-journal-serif text-emerald-950 leading-snug">
                      <Link href={`/posts/${post.id}/`} className="hover:text-amber-700 transition">
                        {post.hotel_name}
                      </Link>
                    </h3>

                    <p className="text-xs md:text-sm text-emerald-950/75 line-clamp-3 leading-relaxed">
                      {post.description || post.title}
                    </p>
                  </div>

                  {/* アクションボタン */}
                  <div className="pt-3 border-t border-emerald-950/10 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/posts/${post.id}/`}
                      className="text-xs font-bold text-teal-900 hover:text-amber-700 flex items-center gap-1 transition"
                    >
                      <span>📖 詳細ルポ＆宿泊ガイドを読む</span>
                      <span>→</span>
                    </Link>

                    <a
                      href={post.affiliate_url}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-5 py-2.5 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black text-xs rounded-xl shadow-md transition flex items-center gap-1.5"
                    >
                      <span>楽天トラベルで空室確認</span>
                      <span className="text-[13px]">≫</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ボトム特大予約案内 */}
      <section className="bg-gradient-to-br from-teal-950 via-emerald-950 to-amber-950 rounded-3xl p-8 md:p-12 text-white shadow-xl text-center space-y-4 border border-amber-500/20">
        <span className="inline-block text-xs font-black uppercase tracking-widest bg-amber-400 text-teal-950 px-3.5 py-1 rounded-full">
          楽天トラベル公式連携
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-journal-serif">
          全国の人気温泉宿・ホテルを今すぐ予約
        </h3>
        <p className="text-emerald-100 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          日程と人数を入力するだけで、楽天トラベルの最新空室状況・最安値プラン・お得な割引クーポンを即時確認できます。
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={RAKUTEN_RANKING_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm md:text-base font-black text-teal-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-300 hover:from-amber-300 hover:to-yellow-200 rounded-2xl shadow-2xl transition transform hover:scale-105"
          >
            <span>🏆 楽天トラベル公式総合ランキングを見る</span>
            <span>↗</span>
          </a>
          <Link
            href="/furusato/"
            className="inline-flex items-center gap-2 px-6 py-4 text-sm md:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition"
          >
            <span>🎁 ふるさと納税でお得に泊まる →</span>
          </Link>
        </div>
      </section>

      {/* 画面下部 スマホ追従CTAバー */}
      <FloatingMobileCTA
        affiliateUrl={RAKUTEN_RANKING_URL}
        hotelName="全国宿泊総合ランキングTOP50"
        price="最安値プラン＆限定クーポン"
      />
    </div>
  );
}
