import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import RelatedPosts, { PostSummary } from "@/app/components/RelatedPosts";

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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  if (!fs.existsSync(postPath)) {
    return {
      title: "宿が見つかりません",
    };
  }

  try {
    const fileContent = fs.readFileSync(postPath, "utf-8");
    const post: Post = JSON.parse(fileContent);
    const descriptionText = post.description || (post.review
      ? post.review.replace(/<[^>]*>/g, "").slice(0, 120) + "..."
      : `${post.prefecture}の観光魅力と厳選宿「${post.hotel_name}」を紹介する旅行マガジンルポ記事です。`);

    return {
      title: `${post.hotel_name}（${post.prefecture}）おすすめ観光＆宿泊ガイド ｜ 日本全国・旅びより`,
      description: descriptionText,
      keywords: [post.hotel_name, post.prefecture, post.area, "観光名所", "ご当地グルメ", "楽天トラベル", "宿泊予約"].concat(post.categories || []).join(","),
      alternates: {
        canonical: `${baseUrl}/posts/${id}`,
      },
      openGraph: {
        title: `${post.title} ｜ 日本全国・旅びより`,
        description: descriptionText,
        url: `${baseUrl}/posts/${id}`,
        siteName: "日本全国・旅びより",
        images: post.image ? [{ url: post.image, alt: post.hotel_name }] : [],
        type: "article",
        publishedTime: post.date,
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} ｜ 日本全国・旅びより`,
        description: descriptionText,
        images: post.image ? [post.image] : [],
      },
    };
  } catch (e) {
    console.error(`Failed to generate metadata for post ${id}:`, e);
    return {
      title: "日本全国・旅びより",
    };
  }
}

function loadAllPosts(): PostSummary[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, "utf8");
      return JSON.parse(fileContents);
    }
  } catch (e) {
    console.error("Failed to load all posts for related posts component:", e);
  }
  return [];
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postPath = path.join(process.cwd(), "src", "data", "posts", `${id}.json`);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

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

  const allPosts = loadAllPosts();

  // Structured Data (JSON-LD) definition for Article, Hotel, Breadcrumbs & FAQPage (GEO Optimized)
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description || post.title,
    "image": post.image ? [post.image] : [],
    "datePublished": post.date || "2026-01-01",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅びより編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅びより",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/icon.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/posts/${post.id}`
    }
  };

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
        "name": `${post.prefecture}の観光・宿泊情報`,
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.hotel_name,
        "item": `${baseUrl}/posts/${post.id}`
      }
    ]
  };

  const faqList = [
    {
      q: `${post.prefecture}旅行のおすすめシーズンやベストシーズンはいつですか？`,
      a: `${post.prefecture}は四季折々の魅力があり、春の桜や新緑、夏のレジャー、秋の紅葉、冬のご当地味覚や温泉など、年間を通じて楽しめます。観光名所の巡りやすさからは春（4〜5月）と秋（9〜11月）が特に人気のベストシーズンです。`
    },
    {
      q: `${post.hotel_name}のおすすめポイントや魅力を教えてください。`,
      a: `${post.hotel_name}は${post.prefecture}（${post.area}）エリアの観光拠点に最適なロケーションを誇ります。旅の疲れを癒やす快適な客室や季節の味覚を楽しめるプランが好評で、楽天トラベルから空室状況や限定クーポンを利用して予約が可能です。`
    },
    {
      q: `${post.prefecture}で味わいたいご当地グルメや名産品は何ですか？`,
      a: `${post.prefecture}ならではの新鮮な地場食材を使った料理や名物グルメが豊富です。記事内でご紹介している名物料理や特産品をぜひ現地でご堪能ください。`
    }
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* 構造化データ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Breadcrumb パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center flex-wrap gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-teal-950 font-bold">{post.prefecture}（{post.area}）</span>
        <span>/</span>
        <span className="text-emerald-950/40 line-clamp-1">{post.hotel_name}</span>
      </nav>

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
              alt={`${post.hotel_name} - ${post.prefecture}観光ガイド`}
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
                    alt={`${post.hotel_name} ギャラリー写真 ${idx + 1}`}
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

        {/* AI-SEO (GEO) ＆ ユーザー満足度向上の FAQ (よくある質問) */}
        <div className="pt-10 border-t border-emerald-950/10 space-y-6">
          <h3 className="text-lg md:text-xl font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span> <span>{post.prefecture}旅行・{post.hotel_name}に関するよくある質問（FAQ）</span>
          </h3>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-teal-50/40 border border-teal-900/10 space-y-2">
                <h4 className="text-sm font-bold text-teal-950 flex items-start gap-2">
                  <span className="text-teal-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-emerald-950/80 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 関連記事 (内部リンク強化コンポーネント) */}
        <RelatedPosts
          currentPostId={post.id}
          prefecture={post.prefecture}
          allPosts={allPosts}
        />

      </div>
    </div>
  );
}
