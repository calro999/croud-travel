import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { PREFECTURES_DATA, REGIONS_MAP } from "@/data/prefecturesData";

export const metadata: Metadata = {
  title: "サイトマップ（全ページ・都道府県ガイド・記事一覧） ｜ 日本全国・旅宿クラウド",
  description: "日本全国・旅宿クラウドの全ページ一覧です。47都道府県の観光名所・絶景温泉・厳選ホテル比較ガイド、楽天トラベル最新お得キャンペーン、全特集記事一覧をご案内。",
  keywords: ["サイトマップ", "旅宿クラウド", "47都道府県", "観光ガイド", "楽天トラベル", "ホテル比較", "記事一覧"],
  openGraph: {
    title: "サイトマップ ｜ 日本全国・旅宿クラウド",
    description: "日本全国・旅宿クラウドの全ページ一覧。47都道府県ガイド＆全特集記事へのリンク案内。",
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

export default function SitemapPage() {
  const posts = getPosts();

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
          サイトマップ（全ページ・特集記事一覧）
        </h1>
        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          「日本全国・旅宿クラウド」で公開しているすべてのメインページ、47都道府県別の観光・温泉・厳選宿ガイド、および全特集比較記事への全リンク一覧です。目的のエリアやテーマ探しにご活用ください。
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
            <div className="text-[11px] text-emerald-950/60 font-medium">サイト全ページリンク案内</div>
          </Link>
        </div>
      </section>

      {/* 2. 47都道府県エリアガイド一覧 */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-950/10 shadow-sm space-y-6">
        <h2 className="text-xl font-black font-journal-serif text-emerald-950 border-b border-emerald-950/10 pb-3 flex items-center gap-2">
          <span>🗾</span> <span>全国47都道府県ガイド一覧</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(REGIONS_MAP).map(([regionName, prefNames]) => (
            <div key={regionName} className="bg-emerald-50/40 rounded-2xl p-4 border border-emerald-950/5 space-y-3">
              <h3 className="text-xs font-black text-amber-700 uppercase tracking-wider border-b border-amber-200/60 pb-1.5 flex items-center justify-between">
                <span>【{regionName}】</span>
                <span className="text-[10px] text-emerald-950/40 font-normal">{prefNames.length}エリア</span>
              </h3>
              <ul className="space-y-1 text-xs">
                {prefNames.map((pName) => {
                  const pInfo = PREFECTURES_DATA.find((p) => p.name === pName);
                  if (!pInfo) return null;
                  const prefPostCount = postsByPrefecture[pInfo.name]?.length || 0;
                  return (
                    <li key={pInfo.slug}>
                      <Link
                        href={`/prefectures/${pInfo.slug}`}
                        className="flex items-center justify-between py-1 px-2 rounded-lg hover:bg-teal-100/60 text-emerald-950 font-semibold transition"
                      >
                        <span>{pInfo.name} 観光＆宿ガイド</span>
                        <span className="text-[10px] font-bold text-teal-800/60 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/50">
                          {prefPostCount}記事
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 全特集比較記事一覧 (都道府県別) */}
      <section className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-950/10 shadow-sm space-y-8">
        <div className="border-b border-emerald-950/10 pb-4 space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>📚</span> <span>徹底比較・特集記事一覧（全{posts.length}件）</span>
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
                    {pref.name}の比較ガイド記事
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
