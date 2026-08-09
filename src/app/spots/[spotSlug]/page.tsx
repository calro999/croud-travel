import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SPOTS_DATA, getSpotBySlug } from "@/data/spotsData";

interface Post {
  id: string;
  title: string;
  hotel_name: string;
  description?: string;
  review: string;
  image: string;
  affiliate_url: string;
  prefecture: string;
  area: string;
  price?: string | number;
  rating?: string | number;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return SPOTS_DATA.map((s) => ({
    spotSlug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ spotSlug: string }> }): Promise<Metadata> {
  const { spotSlug } = await params;
  const spot = getSpotBySlug(spotSlug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  if (!spot) {
    return { title: "観光名所が見つかりません" };
  }

  return {
    title: `${spot.titleHook || spot.name} ｜ 日本全国・旅宿クラウド`,
    description: `${spot.name}（${spot.prefName}${spot.cityName}）の見どころ、アクセス、所要時間、実際の魅力、周辺の徒歩圏内のおすすめホテル・温泉宿、合わせて巡りたい観光地を詳しく解説。`,
    keywords: [spot.name, spot.cityName, spot.prefName, "どんなところ", "見どころ", "アクセス", "近くの宿", "周辺ホテル", "観光ガイド"],
    alternates: {
      canonical: `${baseUrl}/spots/${spot.slug}`,
    },
    openGraph: {
      title: `【${spot.name} 徹底解説】見どころ・アクセス＆近くのおすすめホテル宿ガイド`,
      description: spot.description,
      url: `${baseUrl}/spots/${spot.slug}`,
      siteName: "日本全国・旅宿クラウド",
    },
  };
}

function loadAllPosts(): Post[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, "utf8");
      return JSON.parse(fileContents);
    }
  } catch (e) {
    console.error("Failed to load posts in spot page:", e);
  }
  return [];
}

export default async function SpotDetailPage({ params }: { params: Promise<{ spotSlug: string }> }) {
  const { spotSlug } = await params;
  const spot = getSpotBySlug(spotSlug);

  if (!spot) {
    notFound();
  }

  const allPosts = loadAllPosts();
  const safePref = spot.prefName || "";
  const cleanPref = safePref.replace(/(県|府|東京都)$/, "");

  // 観光名所の近くにあるおすすめホテル・宿をキーワード一致で抽出
  const nearbyPosts = allPosts.filter(p => {
    if (!p) return false;
    const textToSearch = `${p.title || ""} ${p.hotel_name || ""} ${p.area || ""} ${p.review || ""}`.toLowerCase();
    const isPrefMatch = p.prefecture && (p.prefecture === safePref || p.prefecture.replace(/(県|府|東京都)$/, "") === cleanPref);
    const isKwMatch = spot.hotelKeywords.some(kw => textToSearch.includes(kw.toLowerCase()));
    return isPrefMatch && isKwMatch;
  });

  // 万一該当宿が少なければ都道府県内の人気宿で補完
  const finalHotelPosts = [...nearbyPosts];
  if (finalHotelPosts.length < 3) {
    const prefPosts = allPosts.filter(p => p.prefecture && (p.prefecture === safePref || p.prefecture.replace(/(県|府|東京都)$/, "") === cleanPref));
    for (const p of prefPosts) {
      if (!finalHotelPosts.some(hp => hp.id === p.id)) {
        finalHotelPosts.push(p);
        if (finalHotelPosts.length >= 6) break;
      }
    }
  }

  // 合わせて巡りたい周辺の観光名所（相互回遊リンク）
  const siblingSpots = spot.nearbySpotSlugs
    .map(slug => getSpotBySlug(slug))
    .filter((s): s is typeof spot => s !== undefined);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": `${spot.prefName}観光ガイド`, "item": `${baseUrl}/prefectures/${spot.prefSlug}` },
      { "@type": "ListItem", "position": 3, "name": `${spot.cityName} 観光`, "item": `${baseUrl}/prefectures/${spot.prefSlug}/${spot.citySlug}` },
      { "@type": "ListItem", "position": 4, "name": `${spot.name} 徹底解説`, "item": `${baseUrl}/spots/${spot.slug}` }
    ]
  };

  const jsonLdTouristAttraction = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": spot.name,
    "description": spot.description,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": spot.prefName,
      "addressLocality": spot.cityName,
      "addressCountry": "JP"
    }
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTouristAttraction) }} />

      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures" className="hover:text-teal-800 transition">都道府県一覧</Link>
        <span>/</span>
        <Link href={`/prefectures/${spot.prefSlug}`} className="hover:text-teal-800 transition">{spot.prefName}</Link>
        <span>/</span>
        <Link href={`/prefectures/${spot.prefSlug}/${spot.citySlug}`} className="hover:text-teal-800 transition">{spot.cityName}</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">{spot.name} 徹底解説</span>
      </nav>

      {/* フェーズ2.5：メイン解説ヒーローパネル */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-950 via-emerald-900 to-amber-950 p-8 md:p-12 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-400 text-teal-950 px-3.5 py-1 rounded-full uppercase shadow">
            {spot.prefName} ＞ {spot.cityName} 📍
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            観光名所・施設 徹底解説
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-tight text-white">
          {spot.titleHook || `【${spot.name}】見どころ・所要時間＆周辺の近くておすすめな宿完全ガイド`}
        </h1>

        <p className="text-amber-200 font-bold text-sm">
          💡 {spot.subtitle}
        </p>

        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          {spot.description}
        </p>

        {/* 施設概要サマリー */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-medium">
          <div className="bg-white/10 border border-white/20 p-3.5 rounded-2xl space-y-1">
            <span className="text-[10px] font-extrabold text-amber-300 uppercase block">🚃 アクセス・交通手段</span>
            <p className="text-white text-xs">{spot.access}</p>
          </div>
          <div className="bg-white/10 border border-white/20 p-3.5 rounded-2xl space-y-1">
            <span className="text-[10px] font-extrabold text-amber-300 uppercase block">⏱️ 見学・滞在の所要時間目安</span>
            <p className="text-white text-xs font-bold">{spot.recommendedDuration}</p>
          </div>
        </div>
      </section>

      {/* 🌟 1. この施設の見どころ・注目ポイント */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
            SPOT HIGHLIGHTS
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>🌟</span> <span>【{spot.name}】ここだけは見ておきたい！3つの見どころポイント</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spot.highlights.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="w-7 h-7 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center">
                  {idx + 1}
                </span>
                <p className="text-xs text-stone-800 leading-relaxed font-bold">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏨 2. コンバージョン最高点！「この観光施設に近く徒歩・車で行けるおすすめ宿」 */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
            NEARBY HOTELS & INNS
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>🏨</span> <span>【{spot.name} 周辺】徒歩・車ですぐ行ける！おすすめ人気ホテル＆温泉宿</span>
          </h2>
          <p className="text-xs text-emerald-950/70 leading-relaxed font-medium">
            「{spot.name}」を満喫したあとにすぐチェックインできる快適な宿や、天然温泉・絶品料理が自慢の人気ホテルをご案内します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {finalHotelPosts.slice(0, 6).map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.hotel_name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                      {post.hotel_name}
                    </div>
                  )}
                  <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-amber-600 text-white px-2.5 py-0.5 rounded-full shadow">
                    {spot.name} 近隣
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[9px] font-bold text-emerald-950/40">
                    <span>{post.area || spot.cityName}</span>
                    {post.rating && (
                      <span className="text-amber-600 font-extrabold">⭐ {post.rating}</span>
                    )}
                  </div>
                  <h3 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                    {post.hotel_name}
                  </h3>
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <a
                  href={post.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 text-[11px] font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                >
                  ✈️ 楽天トラベルでプランを見る
                </a>
                <Link
                  href={`/posts/${post.id}`}
                  className="block w-full text-center py-2 text-[11px] font-bold text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-xl transition border border-teal-800/10"
                >
                  🧭 宿の特化ルポ記事を読む
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 🧭 3. ユーザーの回遊を爆発させる「併せて巡りたい周辺の観光名所」 */}
      {siblingSpots.length > 0 && (
        <section className="bg-gradient-to-br from-teal-50 via-emerald-50/60 to-amber-50/40 border border-teal-900/10 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
          <div className="space-y-2 border-b border-teal-900/10 pb-4">
            <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
              COMBINED SIGHTSEEING
            </span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🗺️</span> <span>【{spot.name}】と一緒に巡る！周辺のおすすめ観光名所</span>
            </h2>
            <p className="text-xs text-emerald-950/70 leading-relaxed font-medium">
              「{spot.name}」のすぐ近くにある人気の観光スポット。徒歩や車でスムーズに回れるおすすめルートです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siblingSpots.map((sib) => (
              <div key={sib.slug} className="bg-white p-6 rounded-2xl border border-teal-800/10 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                      📍 周辺おすすめスポット
                    </span>
                  </div>
                  <h3 className="text-lg font-black font-journal-serif text-emerald-950">
                    {sib.name}
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed line-clamp-3">
                    {sib.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href={`/spots/${sib.slug}`}
                    className="inline-block text-xs font-bold text-white bg-teal-800 hover:bg-teal-700 px-5 py-2 rounded-xl transition shadow-sm"
                  >
                    🧭 {sib.name}の徹底解説・近くの宿を見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 都道府県＆市町村ハブへのバックリンク */}
      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <Link
          href={`/prefectures/${spot.prefSlug}/${spot.citySlug}`}
          className="px-6 py-2.5 text-xs font-bold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-800/20 rounded-full transition"
        >
          📍 {spot.cityName} 観光＆料理ガイドへ戻る
        </Link>
        <Link
          href={`/prefectures/${spot.prefSlug}`}
          className="px-6 py-2.5 text-xs font-bold text-white bg-teal-800 hover:bg-teal-700 rounded-full shadow transition"
        >
          🗾 {spot.prefName}全体の観光ハブへ戻る
        </Link>
      </div>
    </div>
  );
}
