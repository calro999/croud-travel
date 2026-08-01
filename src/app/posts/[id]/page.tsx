import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import RelatedPosts, { PostSummary } from "@/app/components/RelatedPosts";
import { PREFECTURES_DATA } from "@/data/prefecturesData";

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
  recommended_for?: string[];
  nearby_tourist_spots?: string[];
  parking_info?: string;
  family_friendly?: string;
  hot_spring_info?: string;
  nearby_gourmet?: string[];
  meal_availability?: string;
  is_special_feature?: boolean;
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

    const keywordExtras = [
      ...(post.nearby_tourist_spots || []),
      ...(post.nearby_gourmet || []),
      post.hot_spring_info ? "温泉" : "",
      post.family_friendly ? "子連れ" : "",
    ].filter(Boolean);

    return {
      title: `${post.hotel_name}（${post.prefecture}）おすすめ観光＆宿泊ガイド ｜ 日本全国・旅びより`,
      description: descriptionText,
      keywords: [
        post.hotel_name, post.prefecture, post.area,
        "観光名所", "ご当地グルメ", "楽天トラベル", "宿泊予約",
        "温泉", "徒歩", "駐車場", "子連れ", "周辺ホテル",
        ...keywordExtras,
        ...(post.categories || [])
      ].filter(Boolean).join(","),
      alternates: {
        canonical: `${baseUrl}/posts/${id}`,
      },
      openGraph: {
        title: `${post.title} ｜ 日本全国・旅びより`,
        description: descriptionText,
        url: `${baseUrl}/posts/${id}`,
        siteName: "日本全国・旅びより",
        images: post.image ? [{ url: post.image, alt: post.hotel_name, width: 1200, height: 630 }] : [],
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

  // Structured Data (JSON-LD): Article + LodgingBusiness + Breadcrumb + FAQPage
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description || post.title,
    "image": post.image ? [post.image] : [],
    "datePublished": post.date || "2026-01-01",
    "dateModified": post.date || "2026-01-01",
    "author": { "@type": "Organization", "name": "日本全国・旅びより編集部" },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅びより",
      "logo": { "@type": "ImageObject", "url": `${baseUrl}/icon.png` }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${baseUrl}/posts/${post.id}` }
  };

  // LodgingBusiness スキーマ（ホテル検索クエリを拾うための重要スキーマ）
  const jsonLdLodging = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": post.hotel_name,
    "description": post.description || post.title,
    "image": post.image || undefined,
    "url": `${baseUrl}/posts/${post.id}`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": post.prefecture,
      "addressLocality": post.area,
      "addressCountry": "JP"
    },
    ...(post.rating ? { "aggregateRating": { "@type": "AggregateRating", "ratingValue": post.rating, "bestRating": "5", "worstRating": "1", "reviewCount": "1" } } : {}),
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

  const prefNameToSlug = PREFECTURES_DATA.reduce((acc, pref) => {
    acc[pref.name] = pref.slug;
    acc[pref.name.replace(/[都道府県]$/, '')] = pref.slug;
    return acc;
  }, {} as Record<string, string>);

  const prefSlug = prefNameToSlug[post.prefecture] || prefNameToSlug[post.prefecture.replace(/[都道府県]$/, '')] || "";
  const prefUrl = prefSlug ? `${baseUrl}/prefectures/${prefSlug}` : `${baseUrl}/prefectures`;
  const prefPath = prefSlug ? `/prefectures/${prefSlug}` : `/prefectures`;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": `${post.prefecture}の観光・宿泊情報`, "item": prefUrl },
      { "@type": "ListItem", "position": 3, "name": post.hotel_name, "item": `${baseUrl}/posts/${post.id}` }
    ]
  };

  const faqList = [
    {
      q: `${post.hotel_name}は${post.prefecture}のどのエリアにありますか？`,
      a: `${post.hotel_name}は${post.prefecture}の${post.area}エリアに位置しています。${
        post.nearby_tourist_spots && post.nearby_tourist_spots.length > 0
          ? `周辺には「${post.nearby_tourist_spots.slice(0, 2).join('」「')}」などの観光スポットが徒歩圏内にあり、観光拠点として最適です。`
          : "周辺観光地へのアクセスも良好で、旅の拠点に最適な立地です。"
      }`
    },
    {
      q: `${post.hotel_name}に駐車場はありますか？`,
      a: post.parking_info || `${post.hotel_name}の駐車場については、宿泊予約ページ（楽天トラベル）にて最新の収容台数・料金・予約方法をご確認ください。事前にお問い合わせいただくと安心です。`
    },
    {
      q: `${post.hotel_name}は子連れ・ファミリーで利用できますか？`,
      a: post.family_friendly || `${post.hotel_name}はお子様連れのご家族にも対応しております。ベビーベッドや子供向けアメニティの貸出については、楽天トラベルの詳細ページもしくは宿へ直接お問い合わせください。`
    },
    {
      q: `${post.hotel_name}に温泉・大浴場はありますか？`,
      a: post.hot_spring_info || `${post.hotel_name}の温泉・大浴場の有無については、楽天トラベルの施設詳細ページにてご確認ください。${post.prefecture}は温泉が豊富な地域で、周辺に日帰り温泉施設がある場合もあります。`
    },
    {
      q: `${post.hotel_name}では朝食・夕食は食べられますか？`,
      a: post.meal_availability || `${post.hotel_name}では宿泊プランによって朝食・夕食の有無が異なります。地元食材を活かした料理が人気で、プランの詳細は楽天トラベルの予約ページでご確認いただけます。`
    },
    {
      q: `${post.prefecture}旅行のおすすめシーズンやベストシーズンはいつですか？`,
      a: `${post.prefecture}は四季折々の魅力があり、春の桜や新緑、夏のレジャー、秋の紅葉、冬のご当地味覚や温泉など、年間を通じて楽しめます。観光名所の巡りやすさからは春（4〜5月）と秋（9〜11月）が特に人気のベストシーズンです。`
    },
    {
      q: `${post.prefecture}で味わいたいご当地グルメや名産品は何ですか？`,
      a: post.nearby_gourmet && post.nearby_gourmet.length > 0
        ? `${post.prefecture}ならではの新鮮な地場食材を使った料理や名物グルメが豊富です。特に宿周辺で楽しめる「${post.nearby_gourmet.join('」や「')}」などは旅行者から大人気で、ぜひ現地で味わっていただきたい逸品です。`
        : `${post.prefecture}ならではの新鮮な地場食材を使った料理や名物グルメが豊富です。ホテル周辺や観光地近くの飲食店で、ぜひ地元の味覚をご堪能ください。`
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {!post.is_special_feature && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />}

      {/* Breadcrumb パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center flex-wrap gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href={prefPath} className="text-teal-950 font-bold hover:text-teal-700 transition">{post.prefecture}（{post.area}）</Link>
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
              loading="eager"
              fetchPriority="high"
            />
          ) : (
            <div className="w-full h-full bg-emerald-50 flex items-center justify-center text-emerald-950/30 text-xs font-semibold">
              No Image
            </div>
          )}
        </div>

        {/* 宿情報サマリーからギャラリーまでは通常記事のみ表示 */}
        {!post.is_special_feature && (
          <>
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

            {/* 宿泊施設 詳細情報（SEO対策・よくある検索） */}
            { (post.recommended_for || post.nearby_tourist_spots || post.parking_info || post.family_friendly || post.hot_spring_info || post.nearby_gourmet || post.meal_availability) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-2xl bg-teal-50/30 border border-teal-900/10 text-sm mt-4">
                {post.recommended_for && post.recommended_for.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-teal-900/60 font-extrabold uppercase text-[10px]">この宿がおすすめな人</span>
                    <p className="font-bold text-teal-950">{post.recommended_for.join(" / ")}</p>
                  </div>
                )}
                {post.nearby_tourist_spots && post.nearby_tourist_spots.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-teal-900/60 font-extrabold uppercase text-[10px]">徒歩で行ける観光地</span>
                    <p className="font-bold text-teal-950">{post.nearby_tourist_spots.join(" / ")}</p>
                  </div>
                )}
                {post.parking_info && (
                  <div className="space-y-1">
                    <span className="text-teal-900/60 font-extrabold uppercase text-[10px]">駐車場事情</span>
                    <p className="font-bold text-teal-950">{post.parking_info}</p>
                  </div>
                )}
                {post.family_friendly && (
                  <div className="space-y-1">
                    <span className="text-teal-900/60 font-extrabold uppercase text-[10px]">子連れ向けか</span>
                    <p className="font-bold text-teal-950">{post.family_friendly}</p>
                  </div>
                )}
                {post.hot_spring_info && (
                  <div className="space-y-1">
                    <span className="text-teal-900/60 font-extrabold uppercase text-[10px]">温泉情報</span>
                    <p className="font-bold text-teal-950">{post.hot_spring_info}</p>
                  </div>
                )}
                {post.nearby_gourmet && post.nearby_gourmet.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-teal-900/60 font-extrabold uppercase text-[10px]">周辺グルメ</span>
                    <p className="font-bold text-teal-950">{post.nearby_gourmet.join(" / ")}</p>
                  </div>
                )}
                {post.meal_availability && (
                  <div className="space-y-1">
                    <span className="text-teal-900/60 font-extrabold uppercase text-[10px]">朝食や夕食の有無</span>
                    <p className="font-bold text-teal-950">{post.meal_availability}</p>
                  </div>
                )}
              </div>
            )}

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
          </>
        )}

        {/* 旅ライターによる極上ルポ */}
        <div className="prose prose-emerald max-w-none text-emerald-950/80 space-y-6 leading-relaxed text-sm md:text-base font-medium pt-8 border-t border-emerald-950/5">
          <div
            className="review-content-html"
            dangerouslySetInnerHTML={{ __html: post.review }}
          />
        </div>

        {/* 楽天アフィリエイトボタン・FAQは通常記事のみ表示 */}
        {!post.is_special_feature && (
          <>
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
          </>
        )}

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
