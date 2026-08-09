import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CITIES_DATA, getCityBySlug, getCitiesByPrefectures } from "@/data/citiesData";
import { getPrefectureBySlug } from "@/data/prefecturesData";

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
  return CITIES_DATA.map((c) => ({
    pref: c.prefSlug,
    city: c.citySlug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ pref: string; city: string }> }): Promise<Metadata> {
  const { pref, city } = await params;
  const cityInfo = getCityBySlug(pref, city);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  if (!cityInfo) {
    return { title: "市町村が見つかりません" };
  }

  return {
    title: `${cityInfo.title} ｜ 日本全国・旅宿クラウド`,
    description: cityInfo.description,
    keywords: cityInfo.keywords,
    alternates: {
      canonical: `${baseUrl}/prefectures/${pref}/${city}`,
    },
    openGraph: {
      title: cityInfo.title,
      description: cityInfo.description,
      url: `${baseUrl}/prefectures/${pref}/${city}`,
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
    console.error("Failed to load posts:", e);
  }
  return [];
}

export default async function CityDetailPage({ params }: { params: Promise<{ pref: string; city: string }> }) {
  const { pref, city } = await params;
  const cityInfo = getCityBySlug(pref, city);
  const prefInfo = getPrefectureBySlug(pref);

  if (!cityInfo || !prefInfo) {
    notFound();
  }

  const allPosts = loadAllPosts();
  const safePrefName = cityInfo.prefName || "";
  const cleanPref = safePrefName.replace(/(県|府|東京都)$/, "");

  // 該当市町村および周辺エリアの実在記事をフィルタリング
  const cityPosts = allPosts.filter((p) => {
    if (!p) return false;
    const textToSearch = `${p.title || ""} ${p.hotel_name || ""} ${p.area || ""} ${p.prefecture || ""}`.toLowerCase();
    const isPrefMatch = p.prefecture && (p.prefecture === safePrefName || p.prefecture.replace(/(県|府|東京都)$/, "") === cleanPref);
    const isCityMatch = cityInfo.keywords.some(kw => textToSearch.includes(kw.toLowerCase())) || textToSearch.includes(cityInfo.cityName.toLowerCase());
    return isPrefMatch && isCityMatch;
  });

  // 万一マッチ数が少なければ同県の他の宿で補完
  const finalPosts = [...cityPosts];
  if (finalPosts.length < 3) {
    const prefPosts = allPosts.filter(p => p.prefecture && (p.prefecture === safePrefName || p.prefecture.replace(/(県|府|東京都)$/, "") === cleanPref));
    for (const p of prefPosts) {
      if (!finalPosts.some(fp => fp.id === p.id)) {
        finalPosts.push(p);
        if (finalPosts.length >= 6) break;
      }
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": `${cityInfo.prefName}観光ガイド`, "item": `${baseUrl}/prefectures/${pref}` },
      { "@type": "ListItem", "position": 3, "name": `${cityInfo.cityName} 観光＆グルメ`, "item": `${baseUrl}/prefectures/${pref}/${city}` }
    ]
  };

  const siblingCities = getCitiesByPrefectures(pref).filter(c => c.citySlug !== city);

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures" className="hover:text-teal-800 transition">都道府県一覧</Link>
        <span>/</span>
        <Link href={`/prefectures/${pref}`} className="hover:text-teal-800 transition">{cityInfo.prefName}</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">{cityInfo.cityName} 観光・料理</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950 via-teal-900 to-amber-950 p-8 md:p-12 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-400 text-teal-950 px-3.5 py-1 rounded-full uppercase shadow">
            {cityInfo.prefName} ＞ {cityInfo.cityName} 🗺️
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            市町村別ハブガイド
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-tight text-white">
          【{cityInfo.cityName}】おすすめ観光名所・名物料理（ご当地グルメ）・厳選宿 完全ガイド
        </h1>

        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          {cityInfo.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
          <div className="space-y-1.5">
            <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest block">
              📍 【{cityInfo.cityName}】おすすめ観光名所・見どころ
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cityInfo.highlights.map((h) => (
                <span key={h} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white font-bold text-[11px]">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest block">
              🍱 【{cityInfo.cityName}】名物料理・絶品ご当地グルメ
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cityInfo.gourmet.map((g) => (
                <span key={g} className="bg-amber-500/20 border border-amber-500/30 px-3 py-1 rounded-full text-amber-200 font-bold text-[11px]">
                  🍴 {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🍱 名物料理・グルメ特集 */}
      <section className="bg-white border border-amber-200 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
        <div className="space-y-2 border-b border-amber-200 pb-4">
          <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
            LOCAL GOURMET GUIDE
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-amber-950 flex items-center gap-2">
            <span>🍱</span> <span>【{cityInfo.cityName}】絶対に食べたい！名物料理＆おすすめご当地グルメ</span>
          </h2>
          <p className="text-xs text-amber-900/80 leading-relaxed font-medium">
            {cityInfo.cityName}を訪れたら絶対にはずせないソウルフードから、伝統料理・特産品までを網羅。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cityInfo.gourmet.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2 flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <div>
                <h3 className="text-sm font-bold text-amber-950">{item}</h3>
                <p className="text-xs text-stone-700 leading-relaxed mt-1">
                  {cityInfo.cityName}の食文化を象徴する人気名物。地元で愛される名店や老舗でぜひ本物の味をご賞味ください。
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏨 ピンポイント施設・ホテル・旅館（階層ハブ＆スポーク構造） */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
            RECOMMENDED HOTELS & INNS
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>🏨</span> <span>【{cityInfo.cityName}周辺】ピンポイントで選ぶ！おすすめ人気ホテル・温泉宿</span>
          </h2>
          <p className="text-xs text-emerald-950/70 leading-relaxed font-medium">
            {cityInfo.cityName}の観光やビジネス、温泉リフレッシュの拠点として高評価を得ている厳選宿泊施設を紹介。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {finalPosts.slice(0, 6).map((post) => (
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
                  <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-teal-800 text-white px-2.5 py-0.5 rounded-full shadow">
                    {cityInfo.cityName}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[9px] font-bold text-emerald-950/40">
                    <span>{post.area || cityInfo.cityName}</span>
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
                  🧭 宿の特化記事を読む
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 🧭 隣接・同都道府県の他市町村サブハブ（網目構造リンク） */}
      {siblingCities.length > 0 && (
        <section className="bg-teal-50/50 border border-teal-900/10 rounded-3xl p-6 md:p-8 space-y-4">
          <h3 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
            <span>🗺️</span> <span>{cityInfo.prefName}の他のおすすめ市町村エリアを探す</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {siblingCities.map((sibling) => (
              <Link
                key={sibling.citySlug}
                href={`/prefectures/${sibling.prefSlug}/${sibling.citySlug}`}
                className="text-xs font-bold text-teal-900 bg-white hover:bg-teal-800 hover:text-white border border-teal-800/20 px-4 py-2 rounded-xl transition shadow-sm"
              >
                📍 {sibling.cityName} 観光・料理
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 親都道府県ハブへのバックリンク */}
      <div className="text-center pt-4">
        <Link
          href={`/prefectures/${pref}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-teal-800 hover:bg-teal-700 px-8 py-3 rounded-full shadow transition"
        >
          <span>🗾</span>
          <span>{cityInfo.prefName}全体の観光ハブトップへ戻る</span>
        </Link>
      </div>
    </div>
  );
}
