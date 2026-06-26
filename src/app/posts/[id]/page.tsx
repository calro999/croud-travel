import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Post {
  id: string;
  title: string;
  hotel_name: string;
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
  const postsDir = path.join(process.cwd(), "src", "data", "posts");
  if (!fs.existsSync(postsDir)) {
    return [];
  }
  try {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".json"));
    return files.map((file) => ({
      id: file.replace(".json", ""),
    }));
  } catch (e) {
    console.error("Failed to read posts directory for static params:", e);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const postPath = path.join(process.cwd(), "src", "data", "posts", `${id}.json`);

  if (!fs.existsSync(postPath)) {
    return {
      title: "宿が見つかりません",
    };
  }

  try {
    const fileContent = fs.readFileSync(postPath, "utf-8");
    const post: Post = JSON.parse(fileContent);
    const descriptionText = post.review
      ? post.review.replace(/<[^>]*>/g, "").slice(0, 120) + "..."
      : `${post.hotel_name}の旅行マガジン紹介記事です。`;

    return {
      title: `${post.hotel_name} ｜ 特集ルポ - 日本全国・旅びより`,
      description: descriptionText,
      keywords: [post.hotel_name, post.prefecture, post.area].concat(post.categories || []).join(","),
      openGraph: {
        title: `${post.hotel_name} ｜ 特集ルポ`,
        description: descriptionText,
        images: post.image ? [{ url: post.image }] : [],
      },
    };
  } catch (e) {
    console.error(`Failed to generate metadata for post ${id}:`, e);
    return {
      title: "日本全国・旅びより",
    };
  }
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postPath = path.join(process.cwd(), "src", "data", "posts", `${id}.json`);

  if (!fs.existsSync(postPath)) {
    notFound();
  }

  let post: Post | undefined;
  try {
    const fileContent = fs.readFileSync(postPath, "utf-8");
    post = JSON.parse(fileContent);
  } catch (e) {
    console.error(`Failed to parse post JSON at ${postPath}:`, e);
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* 戻るナビゲーション */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-teal-900/60 hover:text-teal-800 transition-colors duration-200"
      >
        <span>←</span> <span>記事一覧に戻る</span>
      </Link>

      {/* メイン詳細パネル - 雑誌仕立てのレイアウト */}
      <div className="border border-emerald-950/5 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-8">
        
        {/* ヘッダー情報 */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-[10px] font-extrabold text-teal-900/50 uppercase tracking-widest">
            <span>{post.date}</span>
            <span>•</span>
            <span className="text-amber-600 font-bold">{post.area} / {post.prefecture}</span>
            {post.rating && (
              <>
                <span>•</span>
                <span className="text-amber-500 font-bold">⭐ {post.rating}</span>
              </>
            )}
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug text-emerald-950">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {post.categories?.map((cat) => (
              <span key={cat} className="bg-teal-50 text-teal-800 border border-teal-800/10 text-[9px] font-bold px-3 py-1 rounded-full">
                #{cat}
              </span>
            ))}
          </div>
        </div>

        {/* 施設アイキャッチ大画像 */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-emerald-950/5 shadow-md">
          {post.image ? (
            <img
              src={post.image}
              alt={post.hotel_name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-emerald-50 flex items-center justify-center text-emerald-950/30 text-xs font-semibold">
              No Image
            </div>
          )}
        </div>

        {/* 宿情報サマリー */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-emerald-50/20 border border-emerald-950/5 text-xs text-emerald-950">
          <div className="space-y-1">
            <span className="text-teal-900/50 font-extrabold uppercase tracking-wider block text-[9px]">正式宿泊施設名</span>
            <span className="font-bold text-sm text-teal-950">
              {post.hotel_name}
            </span>
          </div>
          {post.price && (
            <div className="space-y-1">
              <span className="text-teal-900/50 font-extrabold uppercase tracking-wider block text-[9px]">参考最安価格</span>
              <span className="font-black text-amber-700 text-sm">
                消費税込 ¥{Number(post.price).toLocaleString()}〜 / 人
              </span>
            </div>
          )}
        </div>

        {/* 旅ライターによる極上ルポ */}
        <div className="prose prose-emerald max-w-none text-emerald-950/80 space-y-6 leading-relaxed text-sm md:text-base font-medium">
          <div
            className="review-content-html"
            dangerouslySetInnerHTML={{ __html: post.review }}
          />
        </div>

        {/* 宿のギャラリー画像 */}
        {post.other_images && post.other_images.length > 0 && (
          <div className="space-y-4 pt-8 border-t border-emerald-950/5">
            <h3 className="text-xs font-extrabold text-teal-900/60 uppercase tracking-widest">
              ▼ 施設ギャラリー（客室・お風呂・館内）
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {post.other_images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="aspect-video relative overflow-hidden rounded-xl border border-emerald-950/5 bg-emerald-50 shadow-sm"
                >
                  <img
                    src={imgUrl}
                    alt={`${post.hotel_name} Gallery ${idx}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 楽天アフィリエイト連携 CTAボタン */}
        <div className="pt-8 border-t border-emerald-950/5 text-center space-y-4">
          <a
            href={post.affiliate_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 text-sm md:text-base font-black text-white bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 rounded-2xl shadow-md transition duration-200 cursor-pointer"
          >
            ✈️ {post.hotel_name} の詳細プラン・空室状況を楽天トラベルで見る
          </a>
          <p className="text-[10px] text-emerald-950/40 font-bold">
            ※クリックすると楽天トラベルの宿泊予約詳細ページへ遷移します
          </p>
        </div>

      </div>
    </div>
  );
}
