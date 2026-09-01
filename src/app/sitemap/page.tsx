import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { PREFECTURES_DATA, REGIONS_MAP } from "@/data/prefecturesData";
import { CITIES_DATA } from "@/data/citiesData";
import { SPOTS_DATA } from "@/data/spotsData";

export const metadata: Metadata = {
  title: "サイトマップ（全ページ・47都道府県ガイド・特集ハブ・記事一覧） ｜ 日本全国・旅宿クラウド",
  description: "日本全国・旅宿クラウドの全ページ完全サイトマップです。47都道府県の観光・温泉・宿ガイド、目的別・季節別特集ハブ166選、主要市町村ガイド、観光名所解説、全宿泊ルポ比較記事をご案内。",
  keywords: ["サイトマップ", "旅宿クラウド", "47都道府県", "観光ガイド", "旅行特集", "ホテル比較", "全記事一覧"],
  openGraph: {
    title: "サイトマップ ｜ 日本全国・旅宿クラウド",
    description: "日本全国・旅宿クラウドの全ページ一覧。47都道府県ガイド＆特集ハブ＆全記事へのリンク案内。",
  }
};

interface PostItem {
  id: string;
  title: string;
  prefecture?: string;
  category?: string;
  date?: string;
  description?: string;
}

interface FeatureHub {
  slug: string;
  title: string;
}

function getPosts(): PostItem[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, "utf8");
      return JSON.parse(fileContents);
    }
  } catch (error) {
    console.error("Error reading posts.json for sitemap page:", error);
  }
  return [];
}

function getFeatureHubs(): FeatureHub[] {
  try {
    const appDir = path.join(process.cwd(), "src", "app");
    const entries = fs.readdirSync(appDir, { withFileTypes: true });
    const featurePages: FeatureHub[] = [];
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const pagePath = path.join(appDir, entry.name, "page.tsx");
        if (fs.existsSync(pagePath)) {
          if (!["api", "components", "features", "posts", "prefectures", "spots", "sitemap", "campaigns"].includes(entry.name)) {
            const content = fs.readFileSync(pagePath, "utf8");
            const titleMatch = content.match(/title:\s*["\x27]([^"\x27]+)["\x27]/);
            let cleanTitle = entry.name;
            if (titleMatch) {
              cleanTitle = titleMatch[1].replace(/ ｜ 日本全国・旅宿クラウド/, "").replace(/【/g, "").replace(/】/g, " - ");
            }
            featurePages.push({
              slug: entry.name,
              title: cleanTitle
            });
          }
        }
      }
    }
    return featurePages.sort((a, b) => a.slug.localeCompare(b.slug));
  } catch (error) {
    console.error("Error reading feature hubs for sitemap page:", error);
  }
  return [];
}

export default function SitemapPage() {
  const posts = getPosts();
  const featureHubs = getFeatureHubs();

  // 都道府県ごとに記事をグループ化
  const postsByPrefecture: Record<string, PostItem[]> = {};
  const otherPosts: PostItem[] = [];

  posts.forEach((post) => {
    if (post.prefecture) {
      if (!postsByPrefecture[post.prefecture]) {
        postsByPrefecture[post.prefecture] = [];
      }
      postsByPrefecture[post.prefecture].push(post);
    } else {
      otherPosts.push(post);
    }
  });

  return (
    <div className="space-y-12 max-w-6xl mx-auto px-2 sm:px-4 py-4">
      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">サイトマップ</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-amber-800 p-8 md:p-12 text-white shadow-lg space-y-4">
        <div className="inline-block text-[10px] font-extrabold tracking-widest bg-white/20 border border-white/30 px-3.5 py-1 rounded-full uppercase">
          MAP & NAVIGATION 🗺️
        </div>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          サイトマップ（全ページ・特集ハブ・記事一覧）
        </h1>
        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          「日本全国・旅宿クラウド」の全ページを階層別に網羅した公式ナビゲーションです。47都道府県・主要市町村・観光名所ガイド、目的別テーマ特集ハブ（全{featureHubs.length}テーマ）、および徹底比較ルポ記事（全{posts.length}件）へ素早くアクセスできます。
        </p>
      </section>

      {/* 1. メインナビゲーション */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-950/10 shadow-sm space-y-6">
        <h2 className="text-xl font-black font-journal-serif text-emerald-950 border-b border-emerald-950/10 pb-3 flex items-center gap-2">
          <span>📌</span> <span>主要メインページ</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-teal-50/50 hover:bg-teal-100/60 border border-teal-200/60 transition group space-y-1 block"
          >
            <div className="font-bold text-emerald-950 group-hover:text-teal-800 text-sm">🏠 トップページ</div>
            <div className="text-[11px] text-emerald-950/60 font-medium">全国旅マガジン最新おすすめ</div>
          </Link>
          <Link
            href="/prefectures"
            className="p-4 rounded-2xl bg-teal-50/50 hover:bg-teal-100/60 border border-teal-200/60 transition group space-y-1 block"
          >
            <div className="font-bold text-emerald-950 group-hover:text-teal-800 text-sm">🗾 47都道府県一覧</div>
            <div className="text-[11px] text-emerald-950/60 font-medium">地域別・都道府県別の観光拠点</div>
          </Link>
          <Link
            href="/campaigns"
            className="p-4 rounded-2xl bg-amber-50/60 hover:bg-amber-100/80 border border-amber-200 transition group space-y-1 block"
          >
            <div className="font-bold text-amber-900 group-hover:text-amber-700 text-sm">🎁 お得キャンペーン一覧</div>
            <div className="text-[11px] text-amber-800/70 font-medium">楽天トラベル最新クーポン・セール</div>
          </Link>
          <Link
            href="/sitemap"
            className="p-4 rounded-2xl bg-emerald-50/50 hover:bg-emerald-100/60 border border-emerald-200/60 transition group space-y-1 block"
          >
            <div className="font-bold text-emerald-950 group-hover:text-teal-800 text-sm">🗺️ サイトマップ</div>
            <div className="text-[11px] text-emerald-950/60 font-medium">全構造化インデックス案内</div>
          </Link>
        </div>
      </section>

      {/* 2. 47都道府県＆エリア・市町村・観光名所ガイド */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-950/10 shadow-sm space-y-6">
        <h2 className="text-xl font-black font-journal-serif text-emerald-950 border-b border-emerald-950/10 pb-3 flex items-center gap-2">
          <span>🗾</span> <span>全国47都道府県・市町村・名所ガイド</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(REGIONS_MAP).map(([regionName, prefNames]) => (
            <div key={regionName} className="bg-emerald-50/40 rounded-2xl p-4 border border-emerald-950/5 space-y-3">
              <h3 className="text-xs font-black text-amber-700 uppercase tracking-wider border-b border-amber-200/60 pb-1.5 flex items-center justify-between">
                <span>【{regionName}】</span>
                <span className="text-[10px] text-emerald-950/40 font-normal">{prefNames.length}県</span>
              </h3>
              <div className="space-y-3 text-xs">
                {prefNames.map((pName) => {
                  const pInfo = PREFECTURES_DATA.find((p) => p.name === pName);
                  if (!pInfo) return null;
                  const prefPostCount = postsByPrefecture[pInfo.name]?.length || 0;
                  const prefCities = CITIES_DATA.filter(c => c.prefSlug === pInfo.slug);
                  const prefSpots = SPOTS_DATA.filter(s => s.prefSlug === pInfo.slug);

                  return (
                    <div key={pInfo.slug} className="bg-white/80 rounded-xl p-2.5 border border-emerald-950/5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/prefectures/${pInfo.slug}`}
                          className="hover:text-teal-800 text-emerald-950 font-bold transition flex items-center gap-1"
                        >
                          <span>📍</span>
                          <span>{pInfo.name} ガイド</span>
                        </Link>
                        <span className="text-[10px] font-bold text-teal-800/60 bg-teal-50 px-2 py-0.2 rounded-full border border-teal-200/50">
                          {prefPostCount}記事
                        </span>
                      </div>

                      {/* サブカテゴリリンク */}
                      <div className="flex flex-wrap gap-1 text-[10px] text-emerald-900/70 pt-0.5">
                        <Link href={`/prefectures/${pInfo.slug}/cafes`} className="hover:underline hover:text-teal-800 bg-emerald-50/60 px-1.5 py-0.5 rounded">
                          ☕ カフェ
                        </Link>
                        <Link href={`/prefectures/${pInfo.slug}/souvenirs`} className="hover:underline hover:text-teal-800 bg-amber-50/60 px-1.5 py-0.5 rounded">
                          🎁 お土産
                        </Link>
                        <Link href={`/prefectures/${pInfo.slug}/sakes`} className="hover:underline hover:text-teal-800 bg-blue-50/60 px-1.5 py-0.5 rounded">
                          🍶 地酒
                        </Link>
                      </div>

                      {/* 市町村リンク */}
                      {prefCities.length > 0 && (
                        <div className="pt-1 border-t border-emerald-950/5 flex flex-wrap gap-1 items-center">
                          <span className="text-[9px] font-bold text-emerald-950/40">市町村:</span>
                          {prefCities.map(c => (
                            <Link
                              key={c.citySlug}
                              href={`/prefectures/${pInfo.slug}/${c.citySlug}`}
                              className="text-[10px] text-teal-900 hover:text-amber-700 hover:underline font-medium"
                            >
                              {c.cityName}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* 観光名所スポットリンク */}
                      {prefSpots.length > 0 && (
                        <div className="pt-0.5 flex flex-wrap gap-1 items-center">
                          <span className="text-[9px] font-bold text-amber-900/40">名所:</span>
                          {prefSpots.map(s => (
                            <Link
                              key={s.slug}
                              href={`/spots/${s.slug}`}
                              className="text-[10px] text-amber-900 hover:text-teal-700 hover:underline font-medium"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. テーマ別・目的別・季節別 特集ハブ（全166テーマ） */}
      {featureHubs.length > 0 && (
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-950/10 shadow-sm space-y-6">
          <div className="border-b border-emerald-950/10 pb-3 flex items-center justify-between">
            <h2 className="text-xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🌟</span> <span>目的別・季節別 テーマ特化特集ハブ（全{featureHubs.length}テーマ）</span>
            </h2>
          </div>
          <p className="text-xs text-emerald-950/60 leading-relaxed">
            絶景温泉、記念日スイート、ご当地グルメ、サウナ、ワーケーション、新幹線・空港直行など、旅行の目的に合わせた専用特集ページです。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
            {featureHubs.map((hub) => (
              <Link
                key={hub.slug}
                href={`/${hub.slug}`}
                className="p-3 rounded-xl bg-teal-50/30 hover:bg-teal-100/60 border border-teal-900/5 transition flex items-start gap-2 group"
              >
                <span className="text-teal-700 font-bold mt-0.5">✨</span>
                <span className="font-semibold text-emerald-950 group-hover:text-teal-900 leading-snug line-clamp-2">
                  {hub.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 4. 全特集比較記事一覧 (都道府県別) */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-950/10 shadow-sm space-y-8">
        <div className="border-b border-emerald-950/10 pb-4 space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>📚</span> <span>宿泊施設 徹底比較ルポ記事（全{posts.length}件）</span>
            </h2>
          </div>
          <p className="text-xs text-emerald-950/60">
            全国の主要観光地・温泉街ごとの目的別ホテル＆旅館徹底比較ガイド記事の一覧です。
          </p>
        </div>

        <div className="space-y-8">
          {PREFECTURES_DATA.map((pref) => {
            const prefPosts = postsByPrefecture[pref.name] || [];
            if (prefPosts.length === 0) return null;

            return (
              <div key={pref.slug} className="space-y-3">
                <div className="flex items-center gap-2 border-l-4 border-amber-600 pl-3">
                  <h3 className="font-bold text-emerald-950 text-base font-journal-serif">
                    {pref.name}の宿泊比較ガイド記事
                  </h3>
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {prefPosts.length}件
                  </span>
                  <Link
                    href={`/prefectures/${pref.slug}`}
                    className="text-xs text-teal-800 hover:underline font-bold ml-auto"
                  >
                    {pref.name}トップ →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  {prefPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/posts/${post.id}`}
                      className="p-3 rounded-xl bg-emerald-50/30 hover:bg-teal-50 border border-emerald-950/5 transition flex items-start gap-2 group"
                    >
                      <span className="text-teal-800 font-bold mt-0.5">📄</span>
                      <div className="space-y-0.5 min-w-0">
                        <div className="font-bold text-emerald-950 group-hover:text-teal-800 leading-snug truncate">
                          {post.title}
                        </div>
                        {post.date && (
                          <div className="text-[10px] text-emerald-950/40 font-medium">
                            {post.date} 更新
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {/* その他の記事 */}
          {otherPosts.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-emerald-950/10">
              <div className="flex items-center gap-2 border-l-4 border-emerald-800 pl-3">
                <h3 className="font-bold text-emerald-950 text-base font-journal-serif">
                  その他の特集・全国比較記事
                </h3>
                <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {otherPosts.length}件
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {otherPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/posts/${post.id}`}
                    className="p-3 rounded-xl bg-emerald-50/30 hover:bg-teal-50 border border-emerald-950/5 transition flex items-start gap-2 group"
                  >
                    <span className="text-teal-800 font-bold mt-0.5">📄</span>
                    <div className="space-y-0.5 min-w-0">
                      <div className="font-bold text-emerald-950 group-hover:text-teal-800 leading-snug truncate">
                        {post.title}
                      </div>
                      {post.date && (
                        <div className="text-[10px] text-emerald-950/40 font-medium">
                          {post.date} 更新
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
