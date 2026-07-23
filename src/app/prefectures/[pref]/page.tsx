import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PREFECTURES_DATA, getPrefectureBySlug } from "@/data/prefecturesData";

interface Post {
  id: string;
  title: string;
  hotel_name: string;
  description?: string;
  review: string;
  image: string;
  other_images: string[];
  affiliate_url: string;
  prefecture: string;
  area: string;
  categories: string[];
  price: string | number;
  rating: string | number;
  date: string;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return PREFECTURES_DATA.map((pref) => ({
    pref: pref.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ pref: string }> }): Promise<Metadata> {
  const { pref } = await params;
  const prefInfo = getPrefectureBySlug(pref);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  if (!prefInfo) {
    return { title: "都道府県が見つかりません" };
  }

  return {
    title: `【${prefInfo.name}】人気観光地の見所ガイド＆おすすめ厳選宿・ホテル一覧 ｜ 日本全国・旅びより`,
    description: `${prefInfo.name}の観光の見所（${prefInfo.highlights.join("・")}）や名物グルメ（${prefInfo.gourmet.join("・")}）、楽天トラベルで予約できるおすすめ宿泊施設特集をご紹介。`,
    keywords: [prefInfo.name, "観光の見所", "名物グルメ", "温泉宿", "ホテル", "楽天トラベル", "旅行ガイド"].concat(prefInfo.highlights),
    alternates: {
      canonical: `${baseUrl}/prefectures/${prefInfo.slug}`,
    },
    openGraph: {
      title: `${prefInfo.name}の観光見所ガイド＆おすすめ厳選宿一覧`,
      description: prefInfo.description,
      url: `${baseUrl}/prefectures/${prefInfo.slug}`,
      siteName: "日本全国・旅びより",
      images: prefInfo.bannerImage ? [{ url: prefInfo.bannerImage, alt: prefInfo.name }] : [],
    },
  };
}

function loadPostsForPrefecture(prefName: string): Post[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, "utf8");
      const allPosts: Post[] = JSON.parse(fileContents);
      // 都道府県名の一致判定（「北海道」「東京都」「大阪府」「京都府」「◯◯県」）
      const cleanPref = prefName.replace(/(県|府|東京都)$/, "");
      return allPosts.filter(
        (p) => p.prefecture === prefName || p.prefecture.replace(/(県|府|東京都)$/, "") === cleanPref
      );
    }
  } catch (e) {
    console.error(`Failed to load posts for prefecture ${prefName}:`, e);
  }
  return [];
}

export default async function PrefectureDetailPage({ params }: { params: Promise<{ pref: string }> }) {
  const { pref } = await params;
  const prefInfo = getPrefectureBySlug(pref);

  if (!prefInfo) {
    notFound();
  }

  const posts = loadPostsForPrefecture(prefInfo.name);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  // JSON-LD Breadcrumb
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "都道府県一覧",
        "item": `${baseUrl}/prefectures`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": prefInfo.name,
        "item": `${baseUrl}/prefectures/${prefInfo.slug}`
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures" className="hover:text-teal-800 transition">都道府県一覧</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">{prefInfo.name}</span>
      </nav>

      {/* 都道府県ヒーローパネル */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-950 via-emerald-900 to-amber-950 p-8 md:p-12 text-white shadow-lg space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-500/20 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full uppercase">
            {prefInfo.region}エリア 🧭
          </span>
          <span className="text-xs font-bold text-emerald-200/80">
            掲載宿数: {posts.length}件
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight">
          {prefInfo.name}の観光見所ガイド＆おすすめ宿特集
        </h1>

        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          {prefInfo.description}
        </p>

        {/* 代表的な見所・名物タグ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
          <div className="space-y-1.5">
            <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest block">
              📍 代表的な人気観光スポット・見所
            </span>
            <div className="flex flex-wrap gap-1.5">
              {prefInfo.highlights.map((h) => (
                <span key={h} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white font-bold text-[11px]">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest block">
              🍱 味わいたい名物グルメ・特産品
            </span>
            <div className="flex flex-wrap gap-1.5">
              {prefInfo.gourmet.map((g) => (
                <span key={g} className="bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full text-amber-200 font-bold text-[11px]">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 宿・ホテル特集一覧セクション */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-emerald-950/10 pb-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>🏨</span> <span>{prefInfo.name}の厳選宿・ホテルマガジン一覧</span>
          </h2>
          <span className="text-xs font-bold text-teal-800">
            全 {posts.length} 件
          </span>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-emerald-950/10 rounded-2xl bg-white space-y-3">
            <p className="text-emerald-950/60 text-xs font-bold">
              現在、{prefInfo.name}の個別宿記事を最新情報に編集中です。
            </p>
            <Link
              href="/prefectures"
              className="inline-block text-xs font-bold text-teal-800 hover:underline"
            >
              ← 他の都道府県を見る
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col rounded-2xl overflow-hidden bg-white border border-emerald-950/5 card-hover-effect shadow-sm"
              >
                {/* 大画像アイキャッチ */}
                <div className="aspect-[16/10] relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.hotel_name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-semibold">
                      No Image
                    </div>
                  )}
                  <span className="absolute top-3 left-3 text-[9px] font-extrabold bg-teal-800 text-white px-3 py-1 rounded-full shadow-sm">
                    {post.area}
                  </span>
                  {post.price && (
                    <span className="absolute bottom-3 right-3 text-[10px] font-black bg-slate-900/90 text-amber-300 px-3 py-1 rounded-lg">
                      目安: ¥{Number(post.price).toLocaleString()}〜
                    </span>
                  )}
                </div>

                {/* カード本文 */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[9px] font-bold text-emerald-950/40">
                      <span>{post.date}</span>
                      {post.rating && (
                        <span className="text-amber-600 font-extrabold flex items-center gap-0.5">
                          ⭐ {post.rating}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-black font-journal-serif leading-snug text-emerald-950 line-clamp-2 hover:text-teal-800 transition">
                      {post.hotel_name}
                    </h3>
                    <div
                      className="text-xs text-emerald-950/60 leading-relaxed line-clamp-3 font-medium"
                      dangerouslySetInnerHTML={{ __html: post.review }}
                    />
                  </div>

                  <div className="pt-4 space-y-3 border-t border-emerald-950/5">
                    <Link
                      href={`/posts/${post.id}`}
                      className="block w-full text-center text-xs font-extrabold text-white bg-gradient-to-r from-teal-800 to-emerald-900 hover:from-teal-700 hover:to-emerald-800 py-3 rounded-xl shadow transition duration-200"
                    >
                      この宿の特集記事を読む 🧭
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 楽天トラベル予約・全国ナビへの導線 */}
      <section className="p-8 rounded-3xl bg-teal-50/50 border border-teal-900/10 text-center space-y-4">
        <h3 className="text-lg font-bold font-journal-serif text-emerald-950">
          {prefInfo.name}旅行をさらにお得に予約
        </h3>
        <p className="text-xs text-emerald-950/70 max-w-xl mx-auto leading-relaxed">
          楽天トラベルの最新割引クーポンや「5と0のつく日セール」「ふるさと納税クーポン」を利用して、{prefInfo.name}の憧れホテル・温泉旅館へお得に出かけましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/campaigns"
            className="px-6 py-3 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl shadow transition"
          >
            🎁 開催中のお得キャンペーン一覧へ
          </Link>
          <Link
            href="/prefectures"
            className="px-6 py-3 text-xs font-bold text-teal-900 bg-white border border-teal-900/20 hover:bg-teal-50 rounded-xl shadow-sm transition"
          >
            🗾 他の都道府県の見所を探す
          </Link>
        </div>
      </section>
    </div>
  );
}
