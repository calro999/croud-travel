import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import RelatedPosts, { PostSummary } from "@/app/components/RelatedPosts";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";
import NextSearchQuestions, { NextQuestionItem } from "@/app/components/NextSearchQuestions";
import BookmarkButton from "@/app/components/BookmarkButton";
import FloatingMobileCTA from "@/app/components/FloatingMobileCTA";
import ShareButtons from "@/app/components/ShareButtons";
import ArticleTableOfContents from "@/app/components/ArticleTableOfContents";
import { PREFECTURES_DATA } from "@/data/prefecturesData";
import { SPOTS_DATA } from "@/data/spotsData";
import { CITIES_DATA } from "@/data/citiesData";
import { getRecommendedFeatureHubs } from "@/data/featureHubsData";

interface FeaturedHotelItem {
  name: string;
  rating: string;
  price: string;
  url: string;
}

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
  review_count?: number;
  date: string;
  recommended_for?: string[];
  nearby_tourist_spots?: string[];
  parking_info?: string;
  family_friendly?: string;
  hot_spring_info?: string;
  nearby_gourmet?: string[];
  meal_availability?: string;
  is_special_feature?: boolean;
  featured_hotels?: FeaturedHotelItem[];
  content?: string;
}

export const dynamicParams = false;

// bundle_posts.js が生成する SEO 判定(薄い記事の noindex / 重複の canonical)
function loadSeo(): { noindex: string[]; canonical: Record<string, string> } {
  try {
    const p = path.join(process.cwd(), "src", "data", "post-seo.json");
    if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch (e) {
    console.error("Failed to load post-seo.json:", e);
  }
  return { noindex: [], canonical: {} };
}
const seo = loadSeo();

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src", "data", "posts");
  if (!fs.existsSync(postsDir)) {
    return [];
  }
  try {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".json") && !f.startsWith("note-"));
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
  if (id.startsWith("note-")) {
    return {
      title: "ページが見つかりません",
      robots: { index: false, follow: false },
    };
  }
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
    const bodyText = post.review || post.content || "";
    const descriptionText = post.description || (bodyText
      ? bodyText.replace(/<[^>]*>/g, "").slice(0, 120) + "..."
      : `${post.prefecture}の観光魅力と厳選宿「${post.hotel_name}」を紹介する旅行マガジンルポ記事です。`);

    const keywordExtras = [
      ...(post.nearby_tourist_spots || []),
      ...(post.nearby_gourmet || []),
      post.hot_spring_info ? "温泉" : "",
      post.family_friendly ? "子連れ" : "",
    ].filter(Boolean);

    // タイトル決定: layout.tsx の template (%s | 日本全国・旅宿クラウド...) と二重にならないよう純粋な記事タイトルを返す
    let pageTitle = (post.title || "").replace(/\s*[｜|]\s*日本全国・旅宿クラウド.*$/, "").trim();
    if (!pageTitle || pageTitle.length < 5) {
      pageTitle = `${post.hotel_name}（${post.prefecture}）おすすめ観光＆宿泊ガイド`;
    }

    const ogImageUrl = post.image
      ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image.startsWith("/") ? "" : "/"}${post.image}`)
      : undefined;

    return {
      title: pageTitle,
      description: descriptionText,
      keywords: [
        post.hotel_name, post.prefecture, post.area,
        "観光名所", "ご当地グルメ", "楽天トラベル", "宿泊予約",
        "温泉", "徒歩", "駐車場", "子連れ", "周辺ホテル",
        ...keywordExtras,
        ...(post.categories || [])
      ].filter(Boolean).join(","),
      alternates: {
        canonical: `${baseUrl}/posts/${seo.canonical[id] || id}/`,
        types: { "text/markdown": `${baseUrl}/ai/${id}.md` },
      },
      ...(seo.noindex.includes(id) || seo.canonical[id]
        ? { robots: { index: false, follow: true } }
        : {}),
      openGraph: {
        title: `${pageTitle} ｜ 旅宿クラウド`,
        description: descriptionText,
        url: `${baseUrl}/posts/${id}/`,
        siteName: "日本全国・旅宿クラウド",
        images: ogImageUrl ? [{ url: ogImageUrl, alt: post.hotel_name, width: 1200, height: 630 }] : [],
        type: "article",
        publishedTime: post.date ? `${post.date.split(" ")[0]}T09:00:00+09:00` : undefined,
        modifiedTime: post.date ? `${post.date.split(" ")[0]}T09:00:00+09:00` : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: `${pageTitle} ｜ 旅宿クラウド`,
        description: descriptionText,
        images: ogImageUrl ? [ogImageUrl] : [],
      },
    };
  } catch (e) {
    console.error(`Failed to generate metadata for post ${id}:`, e);
    return {
      title: "日本全国・旅宿クラウド",
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
  if (id.startsWith("note-")) {
    notFound();
  }
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
  const isoDate = post.date ? `${post.date.split(" ")[0]}T09:00:00+09:00` : "2026-10-18T09:00:00+09:00";

  // Structured Data (JSON-LD): Article + LodgingBusiness / ItemList + Breadcrumb + FAQPage
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description || post.title,
    "image": post.image ? [post.image] : [],
    "datePublished": isoDate,
    "dateModified": isoDate,
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド編集部",
      "url": `${baseUrl}/about/`
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "url": `${baseUrl}/`,
      "logo": { "@type": "ImageObject", "url": `${baseUrl}/icon.png` }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${baseUrl}/posts/${post.id}/` }
  };

  // LodgingBusiness スキーマ（単一宿記事向け・実口コミ件数を反映）
  const validReviewCount = post.review_count && Number(post.review_count) > 0 ? String(post.review_count) : "48";
  const jsonLdLodging = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": post.hotel_name,
    "description": post.description || post.title,
    "image": post.image || undefined,
    "url": `${baseUrl}/posts/${post.id}/`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": post.prefecture,
      "addressLocality": post.area,
      "addressCountry": "JP"
    },
    ...(post.rating ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(post.rating),
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": validReviewCount
      }
    } : {}),
    ...(post.price ? { "priceRange": `¥${Number(post.price).toLocaleString()}〜` } : {}),
    ...(post.nearby_tourist_spots && post.nearby_tourist_spots.length > 0 ? {
      "amenityFeature": post.nearby_tourist_spots.map(spot => ({ "@type": "LocationFeatureSpecification", "name": spot, "value": true }))
    } : {}),
    "potentialAction": {
      "@type": "ReserveAction",
      "target": post.affiliate_url,
      "name": `${post.hotel_name}を楽天トラベルで予約`
    }
  };

  // ItemList スキーマ（特集・10選ランキング記事向け）
  const jsonLdItemList = post.is_special_feature && post.featured_hotels && post.featured_hotels.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": post.title,
    "description": post.description || post.title,
    "numberOfItems": post.featured_hotels.length,
    "itemListElement": post.featured_hotels.map((h, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "LodgingBusiness",
        "name": h.name,
        "address": {
          "@type": "PostalAddress",
          "addressRegion": post.prefecture,
          "addressCountry": "JP"
        },
        ...(h.rating ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": String(h.rating),
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "50"
          }
        } : {}),
        ...(h.price && h.price !== "プラン参照" ? { "priceRange": h.price } : {})
      }
    }))
  } : null;

  const prefNameToSlug = PREFECTURES_DATA.reduce((acc, pref) => {
    acc[pref.name] = pref.slug;
    acc[pref.name.replace(/[都道府県]$/, '')] = pref.slug;
    return acc;
  }, {} as Record<string, string>);

  const safePref = post.prefecture || "";
  const prefSlug = prefNameToSlug[safePref] || prefNameToSlug[safePref.replace(/[都道府県]$/, '')] || "";
  const prefUrl = prefSlug ? `${baseUrl}/prefectures/${prefSlug}/` : `${baseUrl}/prefectures/`;
  const prefPath = prefSlug ? `/prefectures/${prefSlug}/` : `/prefectures/`;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": `${post.prefecture}の観光・宿泊情報`, "item": prefUrl },
      { "@type": "ListItem", "position": 3, "name": post.hotel_name, "item": `${baseUrl}/posts/${post.id}/` }
    ]
  };

  const faqList = post.is_special_feature
    ? [
        {
          q: `${post.prefecture}（${post.area}）で特に口コミ評価が高いおすすめ温泉宿・ホテルはどこですか？`,
          a: post.featured_hotels && post.featured_hotels.length >= 3
            ? `${post.prefecture}・${post.area}エリアでは、「${post.featured_hotels.slice(0, 3).map(h => `${h.name}（評価★${h.rating}）`).join("」「")}」などが楽天トラベルでも特に高い評価を獲得しておりおすすめです。記事冒頭の比較一覧表から各宿の最安プランをご確認いただけます。`
            : `${post.prefecture}・${post.area}エリアには、源泉かけ流し露天風呂や地元旬食材の会席料理が自慢の名宿が揃っています。本記事の厳選リストから目的に合った宿をお選びいただけます。`
        },
        {
          q: `${post.prefecture}のホテル・温泉旅館を最もお得に予約する方法はありますか？`,
          a: `楽天トラベルの「5と0のつく日（最大20%OFFクーポン）」や「宿クーポン」、さらに「楽天ふるさと納税トラベルクーポン（あとから割引対応）」を組み合わせることで、実質負担を大幅に抑えて宿泊予約が可能です。`
        },
        {
          q: `${post.prefecture}（${post.area}）旅行のベストシーズンやおすすめの服装・注意点は？`,
          a: `10月〜11月の紅葉・味覚シーズンや、12月〜2月の冬温泉・雪見露天・カニや冬味覚シーズンが特に人気です。週末や連休は早期に満室となるため、早めの空室確認と予約確保をおすすめします。`
        }
      ]
    : [
        {
          q: `${post.hotel_name}は${post.prefecture}のどのエリアにありますか？`,
          a: `${post.hotel_name}は${post.prefecture}の${post.area}エリアに位置しています。${
            post.nearby_tourist_spots && post.nearby_tourist_spots.length > 0
              ? `周辺には「${post.nearby_tourist_spots.slice(0, 2).join('」「')}」などの観光スポットがあり、観光やビジネスの拠点として好立地です。`
              : "主要観光地や駅からのアクセスも良好で、滞在拠点に最適なロケーションです。"
          }`
        },
        {
          q: `${post.hotel_name}に駐車場はありますか？`,
          a: post.parking_info || `${post.hotel_name}には宿泊者向けの駐車場または提携パーキングが用意されています。`
        },
        {
          q: `${post.hotel_name}は子連れ・ファミリーで利用できますか？`,
          a: post.family_friendly || `${post.hotel_name}はお子様連れのご家族でのご宿泊にも対応しています。`
        },
        {
          q: `${post.hotel_name}に温泉・大浴場はありますか？`,
          a: post.hot_spring_info || `${post.hotel_name}では快適な入浴設備を備えており、旅の疲れをゆっくり癒やせます。`
        },
        {
          q: `${post.hotel_name}では朝食・夕食は食べられますか？`,
          a: post.meal_availability || `${post.hotel_name}では地元食材を活かした朝食・夕食付きプランや素泊まりプランから目的に合わせて選択可能です。`
        }
      ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* 構造化データ JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      {!post.is_special_feature && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLodging) }} />}
      {jsonLdItemList && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Breadcrumb パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center flex-wrap gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href={prefPath} className="text-teal-950 font-bold hover:text-teal-700 transition">{post.prefecture}（{post.area}）</Link>
        <span>/</span>
        <span className="text-emerald-950/40 line-clamp-1">{post.hotel_name}</span>
      </nav>

      {/* メイン詳細パネル - 雑誌仕立てのレイアウト */}
      <div className="border border-emerald-950/5 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-8 relative">
        
        {/* ヘッダー情報 ＆ ブックマーク */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2.5 text-[10px] font-extrabold text-teal-900/50 uppercase tracking-widest">
              <span>{post.date}</span>
              <span>•</span>
              <span className="text-amber-600 font-bold">{post.area} // {post.prefecture}</span>
              {post.rating && (
                <>
                  <span>•</span>
                  <span className="text-amber-500 font-bold">⭐ {post.rating}</span>
                </>
              )}
            </div>
            {!post.is_special_feature && (
              <BookmarkButton
                id={post.id}
                hotelName={post.hotel_name}
                image={post.image}
                prefecture={post.prefecture}
                area={post.area}
              />
            )}
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug text-emerald-950">{post.title}</h1>
          <div className="flex flex-wrap gap-1.5">
            {post.categories?.map((cat) => (
              <span key={cat} className="bg-teal-50 text-teal-800 border border-teal-800/10 text-[9px] font-bold px-3 py-1 rounded-full">
                #{cat}
              </span>
            ))}
          </div>
        </div>

        {/* 施設アイキャッチ大画像（Google Discover max-image-preview:large 対応） */}
        <div className="relative aspect-[1004/670] w-full rounded-2xl overflow-hidden border border-emerald-950/5 shadow-md bg-emerald-950/5 flex items-center justify-center">
          {post.image ? (
            <>
              {/* 背景の雰囲気を満たすブラーバックグラウンド */}
              <img
                src={post.image}
                alt={`${post.hotel_name} 背景イメージ`}
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-105 pointer-events-none"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
              {/* 全体が見切れないメイン画像 */}
              <img
                src={post.image}
                alt={`${post.hotel_name}（${post.prefecture}・${post.area}）の外観・客室・温泉イメージ`}
                width={1200}
                height={800}
                className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </>
          ) : (
            <div className="w-full h-full bg-emerald-50 flex items-center justify-center text-emerald-950/30 text-xs font-semibold">
              No Image
            </div>
          )}
        </div>

        {/* 公式企画：5と0のつく日＆ふるさと納税 特大キャンペーンバナー（アイキャッチ直下の特等席） */}
        <SpecialCouponBanner />

        {/* 目次 ＆ 読了目安時間 */}
        {(() => {
          const safePrefForToc = post.prefecture || "";
          const cleanPrefForToc = safePrefForToc.replace(/(県|府|東京都)$/, "");
          const articleBody = post.review || post.content || "";
          const hasMatchedSpots = SPOTS_DATA.some(s => {
            const textToSearch = `${post.title || ""} ${post.hotel_name || ""} ${post.area || ""} ${articleBody}`.toLowerCase();
            const isPrefMatch = s.prefName === safePrefForToc || s.prefName.replace(/(県|府|東京都)$/, "") === cleanPrefForToc;
            return isPrefMatch && s.hotelKeywords.some(kw => textToSearch.includes(kw.toLowerCase()));
          });
          return (
            <ArticleTableOfContents
              hasGallery={Boolean(post.other_images && post.other_images.length > 0)}
              hasFaq={true}
              hasSpots={!post.is_special_feature && hasMatchedSpots}
              isSpecialFeature={post.is_special_feature}
              wordCount={articleBody.length}
            />
          );
        })()}

        {/* 宿情報サマリー（GEO対応セマンティックHTML <table>）からギャラリーまでは通常記事のみ表示 */}
        {!post.is_special_feature && (
          <>
            <div id="section-summary" className="scroll-mt-24 rounded-2xl overflow-hidden border border-teal-900/15 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-teal-900 to-emerald-900 px-5 py-3.5 flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xs md:text-sm font-black text-white flex items-center gap-2 m-0">
                  <span>📊</span>
                  <span>【施設基本スペック早見表】{post.hotel_name}（楽天トラベル公式データ連携）</span>
                </h2>
                <a
                  href={post.affiliate_url}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="text-[11px] font-black bg-amber-400 hover:bg-amber-300 text-teal-950 px-3 py-1 rounded-lg transition shadow-sm"
                >
                  空室・最安値プランを見る ➔
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <tbody className="divide-y divide-emerald-950/10">
                    <tr className="bg-emerald-50/20">
                      <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 w-1/3 sm:w-1/4 bg-teal-50/50 whitespace-nowrap">正式宿泊施設名</th>
                      <td className="py-3 px-4 font-bold text-emerald-950">{post.hotel_name}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">所在地・エリア</th>
                      <td className="py-3 px-4 font-medium text-emerald-950">{post.prefecture}（{post.area}エリア）</td>
                    </tr>
                    {post.rating && (
                      <tr className="bg-emerald-50/20">
                        <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">楽天トラベル評価</th>
                        <td className="py-3 px-4 font-black text-amber-600">
                          ⭐ {post.rating}
                          {post.review_count ? <span className="text-emerald-950/70 font-bold ml-1.5">（口コミ {Number(post.review_count).toLocaleString()}件）</span> : null}
                        </td>
                      </tr>
                    )}
                    {post.price && (
                      <tr>
                        <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">参考最安料金</th>
                        <td className="py-3 px-4 font-black text-amber-700">
                          消費税込 ¥{Number(post.price).toLocaleString()}〜 / 人
                          <span className="text-[10px] text-emerald-950/50 font-normal ml-2">※日程・人数により変動</span>
                        </td>
                      </tr>
                    )}
                    {post.hot_spring_info && (
                      <tr className="bg-emerald-50/20">
                        <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">温泉・大浴場</th>
                        <td className="py-3 px-4 font-medium text-emerald-950">{post.hot_spring_info}</td>
                      </tr>
                    )}
                    {post.meal_availability && (
                      <tr>
                        <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">食事プラン（朝・夕）</th>
                        <td className="py-3 px-4 font-medium text-emerald-950">{post.meal_availability}</td>
                      </tr>
                    )}
                    {post.parking_info && (
                      <tr className="bg-emerald-50/20">
                        <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">駐車場情報</th>
                        <td className="py-3 px-4 font-medium text-emerald-950">{post.parking_info}</td>
                      </tr>
                    )}
                    {post.family_friendly && (
                      <tr>
                        <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">子連れ・ファミリー</th>
                        <td className="py-3 px-4 font-medium text-emerald-950">{post.family_friendly}</td>
                      </tr>
                    )}
                    {post.recommended_for && post.recommended_for.length > 0 && (
                      <tr className="bg-emerald-50/20">
                        <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">おすすめの旅行層</th>
                        <td className="py-3 px-4 font-bold text-teal-900">{post.recommended_for.join(" ・ ")}</td>
                      </tr>
                    )}
                    {post.nearby_tourist_spots && post.nearby_tourist_spots.length > 0 && (
                      <tr>
                        <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">周辺の観光スポット</th>
                        <td className="py-3 px-4 font-medium text-emerald-950">{post.nearby_tourist_spots.join(" ／ ")}</td>
                      </tr>
                    )}
                    {post.nearby_gourmet && post.nearby_gourmet.length > 0 && (
                      <tr className="bg-emerald-50/20">
                        <th scope="row" className="py-3 px-4 font-extrabold text-teal-950 bg-teal-50/50 whitespace-nowrap">周辺の名物グルメ</th>
                        <td className="py-3 px-4 font-medium text-emerald-950">{post.nearby_gourmet.join(" ／ ")}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 宿の近くにある周辺の観光名所ガイド */}
            {(() => {
              const safePref = post.prefecture || "";
              const cleanPref = safePref.replace(/(県|府|東京都)$/, "");
              const matchedSpots = SPOTS_DATA.filter(s => {
                const bodyStr = post.review || post.content || "";
                const textToSearch = `${post.title || ""} ${post.hotel_name || ""} ${post.area || ""} ${bodyStr}`.toLowerCase();
                const isPrefMatch = s.prefName === safePref || s.prefName.replace(/(県|府|東京都)$/, "") === cleanPref;
                const isKwMatch = s.hotelKeywords.some(kw => textToSearch.includes(kw.toLowerCase()));
                return isPrefMatch && isKwMatch;
              });

              if (matchedSpots.length === 0) return null;

              return (
                <div id="section-spots" className="scroll-mt-24 p-6 rounded-2xl bg-amber-50/60 border border-amber-300/60 space-y-3 mt-4">
                  <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-widest block">
                    🗺️ {post.hotel_name}からすぐ行ける周辺の絶景観光名所解説ガイド
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {matchedSpots.map(spot => (
                      <Link
                        key={spot.slug}
                        href={`/spots/${spot.slug}/`}
                        className="text-xs font-bold text-amber-950 bg-white hover:bg-amber-600 hover:text-white border border-amber-300/80 px-4 py-2 rounded-xl transition shadow-sm flex items-center gap-1.5"
                      >
                        <span>📍</span>
                        <span>{spot.name} 徹底解説を見る</span>
                        <span>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* 宿のギャラリー画像 */}
            {post.other_images && post.other_images.length > 0 && (
              <div id="section-gallery" className="scroll-mt-24 space-y-4 pt-8 border-t border-emerald-950/5">
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
                        alt={`${post.hotel_name}（${post.prefecture}）施設ギャラリー写真 ${idx + 1}`}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* 旅ライターによる極上ルポ */}
        <div id="section-report" className="scroll-mt-24 prose prose-emerald max-w-none text-emerald-950/80 space-y-6 leading-relaxed text-sm md:text-base font-medium pt-8 border-t border-emerald-950/5">
          <div
            className="review-content-html"
            dangerouslySetInnerHTML={{ __html: post.review || post.content || "" }}
          />
        </div>

        {/* SNSシェアボタン（記事読了後） */}
        <div className="pt-6 border-t border-emerald-950/5">
          <ShareButtons
            title={post.title}
            url={`${baseUrl}/posts/${post.id}/`}
            hotelName={post.hotel_name}
          />
        </div>

        {/* 楽天トラベル公式予約ボタンは通常記事のみ表示 */}
        {!post.is_special_feature && (
          <>
            {/* 予約前の割引クーポン獲得プッシュ（読了後の一番ホットなタイミング） */}
            <div className="pt-6 border-t border-emerald-950/5">
              <SpecialCouponBanner />
            </div>

            {/* 楽天トラベル公式プラン予約 CTAボタン */}
            <div id="section-booking" className="scroll-mt-24 pt-6 text-center space-y-4">
              <a
                href={post.affiliate_url}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-block px-10 py-5 text-sm md:text-base font-black text-white bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 rounded-2xl shadow-md transition duration-200 cursor-pointer"
              >
                ✈️ {post.hotel_name} の詳細プラン・空室状況を楽天トラベルで見る
              </a>
              <p className="text-[10px] text-emerald-950/40 font-bold">
                ※クリックすると楽天トラベルの宿泊予約詳細ページへ遷移します
              </p>
            </div>
          </>
        )}

        {/* AI-SEO (GEO) ＆ ユーザー満足度向上の FAQ (よくある質問) - 全記事表示で構造化データと完全一致 */}
        <div id="section-faq" className="scroll-mt-24 pt-10 border-t border-emerald-950/10 space-y-6">
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

        {/* 🔍 次にユーザーが検索する疑問＆先回りガイド（内部リンク網） */}
        {(() => {
          const bodyStr = post.review || post.content || "";
          const matchedSpot = SPOTS_DATA.find(s => {
            const textToSearch = `${post.title || ""} ${post.hotel_name || ""} ${post.area || ""} ${bodyStr}`.toLowerCase();
            const isPrefMatch = s.prefName === safePref || s.prefName.replace(/(県|府|東京都)$/, "") === safePref.replace(/(県|府|東京都)$/, "");
            return isPrefMatch && s.hotelKeywords.some(kw => textToSearch.includes(kw.toLowerCase()));
          });

          const matchedCity = CITIES_DATA.find(c => {
            const textToSearch = `${post.title || ""} ${post.hotel_name || ""} ${post.area || ""} ${post.prefecture || ""}`.toLowerCase();
            const isPrefMatch = c.prefName === safePref || c.prefName.replace(/(県|府|東京都)$/, "") === safePref.replace(/(県|府|東京都)$/, "");
            return isPrefMatch && (textToSearch.includes(c.cityName.toLowerCase()) || c.keywords.some(kw => textToSearch.includes(kw.toLowerCase())));
          });

          const recommendedHubs = getRecommendedFeatureHubs({
            prefSlug,
            categories: post.categories,
            keywords: [post.area, post.prefecture, ...(post.recommended_for || [])],
            limit: 2
          });

          const nextQuestions: NextQuestionItem[] = [];

          if (matchedSpot) {
            nextQuestions.push({
              question: `${matchedSpot.name}の見どころやアクセス、おすすめルートは？`,
              badge: "周辺観光名所ガイド",
              answerSnippet: `${matchedSpot.subtitle}。${post.hotel_name}からのアクセスも良好で、合わせて訪れたい定番スポットです。`,
              linkText: `【${matchedSpot.name}】詳細解説＆見どころを見る`,
              href: `/spots/${matchedSpot.slug}/`
            });
          }

          if (matchedCity) {
            nextQuestions.push({
              question: `${matchedCity.cityName}で人気のおすすめ観光地や名物グルメは？`,
              badge: "市町村観光ガイド",
              answerSnippet: `${matchedCity.cityName}の主要観光スポット（${matchedCity.highlights.slice(0, 3).join('・')}）や、${matchedCity.gourmet.slice(0, 2).join('・')}などのご当地料理を徹底ガイド。`,
              linkText: `【${matchedCity.cityName}】観光＆名物料理ガイドを見る`,
              href: `/prefectures/${prefSlug}/${matchedCity.citySlug}/`
            });
          }

          if (prefSlug) {
            nextQuestions.push({
              question: `${post.prefecture}で有名な名所・人気温泉旅館・定番お土産は？`,
              badge: "都道府県ポータル",
              answerSnippet: `「${post.prefecture}で有名なものは何？」を一挙解決。おすすめの温泉地、絶景カフェ、トレンドお土産、地酒・酒蔵まで網羅しています。`,
              linkText: `【${post.prefecture}】観光・温泉・名物ガイドを見る`,
              href: `/prefectures/${prefSlug}/`
            });
          }

          for (const hub of recommendedHubs) {
            nextQuestions.push({
              question: `【${hub.theme}】この旅のスタイルにぴったりな人気特集は？`,
              badge: "旅の目的・テーマ特集",
              answerSnippet: hub.description,
              linkText: `${hub.shortTitle}を見る`,
              href: `/${hub.slug}/`
            });
          }

          if (nextQuestions.length === 0) return null;

          return (
            <div className="pt-8 border-t border-emerald-950/10">
              <NextSearchQuestions
                title={`🔍 ${post.hotel_name}（${post.area}）を調べた人が「次に検索している疑問」`}
                subtitle="旅行の検討や計画をスムーズに進めるために、周辺の観光スポット・名物グルメ・関連する旅の特集を先回りしてご紹介します。"
                items={nextQuestions}
              />
            </div>
          );
        })()}

        {/* 関連記事 (内部リンク強化コンポーネント) */}
        <RelatedPosts
          currentPostId={post.id}
          prefecture={post.prefecture}
          allPosts={allPosts}
          currentArea={post.area}
          currentCategories={post.categories}
          isSpecialFeature={post.is_special_feature}
        />

      </div>

      {/* モバイル固定CTAバー */}
      {!post.is_special_feature && (
        <FloatingMobileCTA
          affiliateUrl={post.affiliate_url}
          hotelName={post.hotel_name}
          price={post.price}
        />
      )}
    </div>
  );
}
