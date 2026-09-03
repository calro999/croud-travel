import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PREFECTURES_DATA, getPrefectureBySlug, SubAreaInfo } from "@/data/prefecturesData";
import { getCitiesByPrefectures } from "@/data/citiesData";
import { SPOTS_DATA } from "@/data/spotsData";
import NextSearchQuestions, { NextQuestionItem } from "@/app/components/NextSearchQuestions";
import { getRecommendedFeatureHubs } from "@/data/featureHubsData";
import { getTransitGuidesForPrefecture } from "@/data/transitGuidesData";

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

// 47都道府県の全slugでSSG静的生成
export async function generateStaticParams() {
  const allSlugs = [
    "hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima",
    "ibaraki", "tochigi", "gunma", "saitama", "chiba", "tokyo", "kanagawa",
    "niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano", "gifu", "shizuoka",
    "aichi", "mie", "shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama",
    "tottori", "shimane", "okayama", "hiroshima", "yamaguchi", "tokushima", "kagawa", "ehime",
    "kochi", "fukuoka", "saga", "nagasaki", "kumamoto", "oita", "miyazaki", "kagoshima", "okinawa"
  ];
  return allSlugs.map((pref) => ({ pref }));
}

export async function generateMetadata({ params }: { params: Promise<{ pref: string }> }): Promise<Metadata> {
  const { pref } = await params;
  const prefInfo = getPrefectureBySlug(pref);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  if (!prefInfo) {
    return { title: "都道府県が見つかりません" };
  }

  const subAreaNames = (prefInfo.subAreas || []).map(s => s.areaName).join("・");
  const cleanName = prefInfo.name.replace(/(県|府|東京都)$/, "").replace("東京都", "東京");

  return {
    title: `【2026】${prefInfo.name}の有名なもの・観光名所＆おすすめ温泉ホテル・お土産・地酒ガイド ｜ 日本全国・旅宿クラウド`,
    description: `「${prefInfo.name}で有名なものは何？」「おすすめ観光名所やお土産・名湯は？」${prefInfo.name}（${subAreaNames}）の見どころ、ご当地グルメ、人気お土産、日本酒酒蔵、露天風呂付き温泉宿を完全網羅。`,
    keywords: [
      prefInfo.name,
      `${prefInfo.name} 有名なもの`,
      `${cleanName} 有名なもの`,
      `${prefInfo.name} 観光`,
      `${cleanName} 観光`,
      `${prefInfo.name} 温泉 おすすめ`,
      `${prefInfo.name} お土産 定番 日持ち`,
      `${prefInfo.name} 日本酒 おすすめ`,
      subAreaNames,
      "観光ガイド", "絶景カフェ", "トレンドお土産", "地酒日本酒", "温泉宿", "ホテル予約", "楽天トラベル"
    ].join(", "),
    alternates: {
      canonical: `${baseUrl}/prefectures/${prefInfo.slug}`,
    },
    openGraph: {
      title: `${prefInfo.name} 国内最高峰 観光ポータルガイド`,
      description: prefInfo.description,
      url: `${baseUrl}/prefectures/${prefInfo.slug}`,
      siteName: "日本全国・旅宿クラウド",
      images: prefInfo.bannerImage ? [{ url: prefInfo.bannerImage, alt: prefInfo.name }] : [],
    },
  };
}

// 実際にローカルディスクに存在する全記事を取得
function loadAllPosts(): Post[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, "utf8");
      return JSON.parse(fileContents);
    }
  } catch (e) {
    console.error("Failed to load posts in prefecture detail page:", e);
  }
  return [];
}

// 特定のpostIdから実在するPostを安全にロード
function loadSinglePost(postId: string): Post | undefined {
  try {
    const postPath = path.join(process.cwd(), "src", "data", "posts", `${postId}.json`);
    if (fs.existsSync(postPath)) {
      const content = fs.readFileSync(postPath, "utf-8");
      return JSON.parse(content);
    }
  } catch (e) {
    console.error(`Failed to load single post ${postId}:`, e);
  }
  return undefined;
}

function loadSubAreaRakutenHotels(): Record<string, any[]> {
  try {
    const p1 = path.join(process.cwd(), "src", "data", "subareas_rakuten_hotels.json");
    if (fs.existsSync(p1)) {
      return JSON.parse(fs.readFileSync(p1, "utf8"));
    }
  } catch (e) {
    console.error("Failed to load subarea rakuten hotels:", e);
  }
  return {};
}

const subAreaRakutenData = loadSubAreaRakutenHotels();

// ミクロエリアに対して、楽天API直接取得データまたは実在Postオブジェクトを厳選抽出する関数
function getRealPostsForSubArea(subArea: SubAreaInfo, allPosts: Post[], prefName: string, prefSlug: string): any[] {
  const result: any[] = [];
  const safePrefName = prefName || "";
  const cleanPref = safePrefName.replace(/(県|府|東京都)$/, "");

  // 1. 楽天API直接取得データから最優先で取得（楽天API公式ホテルデータ）
  const directKey = `${prefSlug}_${subArea.slug}`;
  if (subAreaRakutenData[directKey] && subAreaRakutenData[directKey].length > 0) {
    for (const h of subAreaRakutenData[directKey]) {
      result.push({
        id: `rakuten-${h.hotelNo}`,
        hotel_name: h.hotelName,
        image: h.hotelImageUrl,
        price: h.hotelMinCharge,
        rating: h.reviewAverage,
        area: subArea.areaName,
        prefecture: safePrefName,
        affiliate_url: h.affiliateUrl,
        hotelSpecial: h.hotelSpecial || h.access,
        isDirectRakuten: true
      });
      if (result.length >= 3) return result;
    }
  }

  // 2. subAreaHotelsのpostIdから実在ポストを取得
  if (subArea.subAreaHotels) {
    for (const item of subArea.subAreaHotels) {
      if (item.postId) {
        const post = loadSinglePost(item.postId);
        if (post && !result.some(r => r.id === post.id)) {
          result.push(post);
        }
      }
    }
  }

  // 3. 3件に満たない場合、該当都道府県内の実在ポストからキーワードマッチ
  if (result.length < 3) {
    const prefPosts = allPosts.filter(p => {
      if (!p.prefecture) return false;
      return p.prefecture === safePrefName || p.prefecture.replace(/(県|府|東京都)$/, "") === cleanPref;
    });

    const matched = prefPosts.filter(post => {
      const textToSearch = (post.title + " " + post.hotel_name + " " + post.area + " " + post.review).toLowerCase();
      return subArea.keywords.some(kw => textToSearch.includes(kw.toLowerCase()));
    });

    for (const p of matched) {
      if (!result.some(r => r.id === p.id)) {
        result.push(p);
        if (result.length >= 3) break;
      }
    }
  }

  return result.slice(0, 3);
}

export default async function PrefectureDetailPage({ params }: { params: Promise<{ pref: string }> }) {
  const { pref } = await params;
  const prefInfo = getPrefectureBySlug(pref);

  if (!prefInfo) {
    notFound();
  }

  const allPosts = loadAllPosts();
  const safePrefName = prefInfo.name || "";
  const cleanPref = safePrefName.replace(/(県|府|東京都)$/, "");
  const allPrefPosts = allPosts.filter(
    (p) => p.prefecture && (p.prefecture === safePrefName || p.prefecture.replace(/(県|府|東京都)$/, "") === cleanPref)
  );

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  // JSON-LD Breadcrumb
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "47都道府県一覧", "item": `${baseUrl}/prefectures` },
      { "@type": "ListItem", "position": 3, "name": `${prefInfo.name}観光ハブ`, "item": `${baseUrl}/prefectures/${prefInfo.slug}` }
    ]
  };
  // 固有FAQの読み込み
  const faqPath = path.join(process.cwd(), 'src', 'data', 'faqs', `${prefInfo.slug}.json`);
  let faqList: any[] = [];
  try {
    if (fs.existsSync(faqPath)) {
      faqList = JSON.parse(fs.readFileSync(faqPath, 'utf8'));
    }
  } catch (err) {
    console.error('Error reading FAQ for', prefInfo.slug, err);
  }

  // JSON-LD FAQ
  const jsonLdFaq = faqList.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item: any) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures" className="hover:text-teal-800 transition">都道府県一覧</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">{prefInfo.name} 観光ガイド</span>
      </nav>

      {/* 都道府県 ヒーローパネル */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-950 via-emerald-900 to-amber-950 p-8 md:p-12 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-400 text-teal-950 px-3.5 py-1 rounded-full uppercase shadow">
            {prefInfo.region}エリア 🗺️
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            全 {prefInfo.subAreas.length} エリア完全網羅
          </span>
          <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            厳選宿数: {allPrefPosts.length}件
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【{prefInfo.name}】有名な場所・名物ご当地グルメ（有名なもの）・おすすめ絶景宿 完全ガイド
        </h1>

        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          {prefInfo.description}
        </p>

        {/* 著名なハイライト＆ご当地グルメ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
          <div className="space-y-1.5">
            <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest block">
              📍 【{prefInfo.name}】有名な場所・代表的絶景観光スポット
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
              🍱 【{prefInfo.name}】有名なもの・名物ご当地グルメ＆特産品
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

      {/* 目次アンカーナビゲーション */}
      <section className="bg-white border border-emerald-950/10 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-xs font-extrabold text-teal-900/60 uppercase tracking-widest flex items-center gap-1.5">
          <span>📌</span> <span>目的のエリア・特集へ即座にスキップ</span>
        </h2>
        
        {/* 特設ハブページへのダイレクトリンク */}
        {(() => {
          const hubLinks: Record<string, { title: string; desc: string; href: string; badge: string }> = {
            kyoto: { title: "【京都旅行 完全ガイド】1泊2日・2泊3日モデルコース＆おすすめホテル・温泉旅館", desc: "カップル・子連れ・女子旅・穴場・雨の日・夜観光・京都駅ホテル選びまで完全網羅", href: "/kyoto", badge: "特集 🍁" },
            okinawa: { title: "【沖縄旅行 完全ガイド】2泊3日・3泊4日モデルコース＆ビーチリゾートホテル", desc: "那覇国際通り・恩納村・美ら海水族館・子連れプール付き宿・レンタカー情報完全網羅", href: "/okinawa", badge: "特集 🌺" },
            hokkaido: { title: "【北海道旅行 完全ガイド】2泊3日・3泊4日モデルコース＆札幌・函館朝食・温泉宿", desc: "札幌・小樽・函館・富良野広域ルート・絶品海鮮バイキング・登別定山渓温泉完全網羅", href: "/hokkaido", badge: "特集 🏔️" },
            tokyo: { title: "【東京観光 完全ガイド】1泊2日・2泊3日モデルコース＆夜景・朝食ビュッフェ宿", desc: "東京駅・新宿・渋谷・浅草・銀座・お台場・高層階夜景ホテル選び完全網羅", href: "/tokyo", badge: "特集 🗼" },
            osaka: { title: "【大阪観光 完全ガイド】1泊2日・2泊3日モデルコース＆梅田・なんば・USJ宿", desc: "道頓堀グルメ食べ歩き・USJ周辺オフィシャルホテル・駅チカ人気宿完全網羅", href: "/osaka", badge: "特集 🐙" },
            fukuoka: { title: "【福岡・博多旅行 完全ガイド】1泊2日・2泊3日モデルコース＆博多駅直結宿", desc: "中洲屋台・もつ鍋・太宰府糸島・明太子朝食バイキング・温泉旅館完全網羅", href: "/fukuoka", badge: "特集 🍜" },
            kanagawa: { title: "【箱根温泉 完全ガイド】1泊2日王道モデルコース＆客室露天風呂・記念日宿", desc: "箱根湯本駅チカ・強羅・芦ノ湖絶景リゾート・カップル向け極上温泉宿完全網羅", href: "/hakone", badge: "特集 ♨️" },
            ishikawa: { title: "【金沢・能登旅行 完全ガイド】モデルコース＆海鮮グルメ・おすすめ宿", desc: "兼六園・ひがし茶屋街・近江町市場・のどぐろ・和倉温泉・露天風呂宿完全網羅", href: "/kanazawa", badge: "特集 🌸" },
          };
          const currentHub = hubLinks[prefInfo.slug];
          if (!currentHub) return null;
          return (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border border-white/10">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-extrabold text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                  {currentHub.badge}
                </span>
                <h3 className="text-sm md:text-base font-black font-journal-serif text-white">
                  {currentHub.title}
                </h3>
                <p className="text-xs text-amber-100/80">
                  {currentHub.desc}
                </p>
              </div>
              <Link
                href={currentHub.href}
                className="px-6 py-2.5 text-xs font-black text-stone-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow whitespace-nowrap transition"
              >
                特設ハブガイドを見る →
              </Link>
            </div>
          );
        })()}

        {/* 市町村別サブハブリンク */}
        {getCitiesByPrefectures(prefInfo.slug).length > 0 && (
          <div className="space-y-2 pt-2 border-t border-emerald-950/5">
            <span className="text-[10px] font-bold text-amber-900 block">【市町村別 おすすめ・観光・名物料理特化ガイド】</span>
            <div className="flex flex-wrap gap-2">
              {getCitiesByPrefectures(prefInfo.slug).map((city) => (
                <Link
                  key={city.citySlug}
                  href={`/prefectures/${city.prefSlug}/${city.citySlug}`}
                  className="text-xs font-bold text-amber-950 bg-amber-50 hover:bg-amber-600 hover:text-white border border-amber-300/60 px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>📍</span>
                  <span>{city.cityName} 観光・料理</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* エリアボタン */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-emerald-950/50 block">【広域エリア別ガイド】</span>
          <div className="flex flex-wrap gap-2">
            {prefInfo.subAreas.map((subArea) => (
              <a
                key={subArea.slug}
                href={`#${subArea.slug}`}
                className="text-xs font-bold text-teal-900 bg-teal-50 hover:bg-teal-800 hover:text-white border border-teal-800/20 px-3.5 py-1.5 rounded-xl transition flex items-center gap-1"
              >
                <span>🧭</span>
                <span>{subArea.areaName}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 特設テーマボタン */}
        <div className="pt-2 border-t border-emerald-950/5 flex flex-wrap gap-2">
          {prefInfo.famousSpots && prefInfo.famousSpots.length > 0 && (
            <a
              href="#famous-spots"
              className="text-xs font-bold text-rose-950 bg-rose-50 hover:bg-rose-700 hover:text-white border border-rose-300/40 px-4 py-2 rounded-xl transition flex items-center gap-1.5"
            >
              <span>🏰</span>
              <span>絶景・王道！有名な場所・名所特集</span>
            </a>
          )}
          <a
            href="#cafes"
            className="text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-600 hover:text-white border border-amber-400/30 px-4 py-2 rounded-xl transition flex items-center gap-1.5"
          >
            <span>☕</span>
            <span>オススメ絶景・レトロカフェ特集</span>
          </a>
          <a
            href="#souvenirs"
            className="text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-700 hover:text-white border border-emerald-400/30 px-4 py-2 rounded-xl transition flex items-center gap-1.5"
          >
            <span>🛍️</span>
            <span>トレンドお土産・銘菓特集</span>
          </a>
          <a
            href="#sakes"
            className="text-xs font-bold text-indigo-950 bg-indigo-50 hover:bg-indigo-800 hover:text-white border border-indigo-300/40 px-4 py-2 rounded-xl transition flex items-center gap-1.5"
          >
            <span>🍶</span>
            <span>銘酒・地酒・日本酒特集</span>
          </a>
        </div>
      </section>

      {/* 0. 🏰 【都道府県】一度は訪れたい有名な場所・王道名所ガイド */}
      {prefInfo.famousSpots && prefInfo.famousSpots.length > 0 && (
        <section id="famous-spots" className="scroll-mt-24 bg-gradient-to-br from-rose-50/60 via-amber-50/40 to-orange-50/30 border border-rose-300/40 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
          <div className="space-y-2 border-b border-rose-300/40 pb-4">
            <span className="text-[10px] font-extrabold text-rose-800 bg-rose-200/60 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
              MUST-VISIT FAMOUS SPOTS
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-rose-950 flex items-center gap-2">
              <span>🏰</span> <span>【{prefInfo.name}】一度は訪れたい有名な場所・王道観光名所まとめ</span>
            </h2>
            <p className="text-xs text-rose-900/80 leading-relaxed font-medium">
              {prefInfo.name}を象徴する世界遺産・国宝・歴史名所から絶景景勝地まで、「{prefInfo.name}旅行で絶対に外せない有名な場所」を厳選ガイド。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prefInfo.famousSpots.map((spot, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-rose-200/60 shadow-sm space-y-3 flex flex-col justify-between hover:shadow-md transition">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-rose-700 text-white text-xs font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-black font-journal-serif text-rose-950">
                      {spot.name}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed font-medium">
                    {spot.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-rose-100 flex items-center justify-between text-[11px] font-bold text-rose-900">
                  <span className="bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-md text-rose-800 font-bold">
                    📍 {prefInfo.name}の有名スポット
                  </span>
                  <span className="text-rose-700">★ 王道おすすめ名所</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 0.5 🎯 【都道府県】旅の目的・こだわり条件・同行者から探す */}
      <section id="style-search" className="scroll-mt-24 bg-white border border-teal-900/10 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
        <div className="space-y-2 border-b border-teal-900/10 pb-4">
          <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
            SEARCH BY TRAVEL STYLE
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950 flex items-center gap-2">
            <span>🎯</span> <span>【{prefInfo.name}】旅の目的・こだわり条件・同行者別おすすめスタイル</span>
          </h2>
          <p className="text-xs text-teal-900/80 leading-relaxed font-medium">
            子連れファミリー、カップル露天風呂、一人旅サウナ、両親プレゼントなど、ご希望の滞在スタイルに最適な{prefInfo.name}の旅をご提案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h3 className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
              <span>👨‍👩‍👧‍👦</span> <span>子連れ・ファミリー旅行</span>
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              キッズアメニティや和洋室完備、プールや大浴場があるファミリー歓迎の安心ホテル。
            </p>
            <span className="inline-block text-[10px] font-extrabold text-amber-800 bg-white border border-amber-300 px-2.5 py-0.5 rounded-md">
              #子連れ #ウェルカムベビー #プール
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2">
            <h3 className="text-sm font-bold text-rose-950 flex items-center gap-1.5">
              <span>👩‍❤️‍👨</span> <span>カップル・露天風呂付き客室</span>
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              プライベートな時間を愉しめる露天風呂付き客室や、部屋食で味わう美味しい会席料理が人気。
            </p>
            <span className="inline-block text-[10px] font-extrabold text-rose-800 bg-white border border-rose-300 px-2.5 py-0.5 rounded-md">
              #客室露天風呂 #記念日 #部屋食
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-2">
            <h3 className="text-sm font-bold text-indigo-950 flex items-center gap-1.5">
              <span>👤</span> <span>一人旅・ビジネス・サウナ宿</span>
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              駅チカ好立地、本格サウナ・水風呂付き大浴場完備、静かな住空間でリフレッシュ。
            </p>
            <span className="inline-block text-[10px] font-extrabold text-indigo-800 bg-white border border-indigo-300 px-2.5 py-0.5 rounded-md">
              #一人旅 #サウナ #格安コスパ
            </span>
          </div>
        </div>
      </section>

      {/* 1. サブエリアごとの詳細観光名所ガイド＆実在の確実な近隣宿セクション */}
      <div className="space-y-16">
        {prefInfo.subAreas.map((subArea) => {
          const realHotelPosts = getRealPostsForSubArea(subArea, allPosts, prefInfo.name, prefInfo.slug);

          return (
            <section
              key={subArea.slug}
              id={subArea.slug}
              className="scroll-mt-24 space-y-8 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
                    {prefInfo.name} ＞ {subArea.areaName}
                  </span>
                  <a href="#" className="text-[10px] font-bold text-teal-900/50 hover:text-teal-800">
                    ▲ 目次へ戻る
                  </a>
                </div>

                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {subArea.areaName} 徹底観光ガイド
                </h2>

                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {subArea.description}
                </p>
              </div>

              {/* 🗺️ エリア徹底解説＆アクセス・所要時間比較ガイド */}
              <div className="space-y-4">
                <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                  <span>📍</span> <span>{subArea.areaName}の絶対外せない観光名所＆みどころ</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subArea.spots.map((spot, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-teal-800 text-white text-[10px] font-black flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span>{spot.name}</span>
                        </h4>
                        <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
                          {spot.description}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-emerald-950/5 flex items-center justify-between text-[10px] font-bold text-teal-800">
                        <span>見学目安: 1〜2時間</span>
                        <span>アクセス: {subArea.areaName}拠点からスムーズ</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 🧭 旅の目的と宿泊拠点としてのメリット解説 */}
              <div className="p-6 rounded-2xl bg-teal-50/40 border border-teal-900/10 space-y-3 text-xs">
                <span className="text-[10px] font-extrabold text-teal-900 uppercase tracking-widest block">
                  💡 {subArea.areaName}を宿泊拠点に選ぶメリット＆おすすめの過ごし方
                </span>
                <p className="text-emerald-950/80 leading-relaxed font-medium">
                  {subArea.areaName}は、{prefInfo.name}観光の中でも特に「{subArea.spots.map(s => s.name).slice(0, 2).join('や')}」へのアクセスが抜群。朝の混雑前に名所を訪れたり、夕暮れのライトアップやご当地ディナーをゆったり堪能した後にすぐ宿へ戻れるのが最大の魅力です。
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-bold text-teal-950">
                  <span className="bg-white border border-teal-800/10 px-3 py-1 rounded-lg">🚅 主要駅・ICからのアクセス良好</span>
                  <span className="bg-white border border-teal-800/10 px-3 py-1 rounded-lg">🌃 夜の街歩きや温泉街散策に便利</span>
                  <span className="bg-white border border-teal-800/10 px-3 py-1 rounded-lg">👨‍👩‍👧‍👦 ファミリー・カップル・一人旅対応</span>
                </div>
              </div>

              {/* 🍱 名物グルメ */}
              {subArea.gourmet && subArea.gourmet.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                  <span className="text-[10px] font-extrabold text-amber-800 uppercase tracking-widest block">
                    🍱 {subArea.areaName}で味わいたい名物グルメ・特産品
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-bold text-emerald-950">
                    {subArea.gourmet.map((g) => (
                      <span key={g} className="bg-white border border-amber-500/30 px-3 py-1 rounded-xl text-amber-900 shadow-sm">
                        🍴 {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 🏨 このエリアの厳選宿・ホテル */}
              <div className="space-y-6 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{subArea.areaName}の観光拠点にぴったりのおすすめ宿</span>
                    </h3>
                    <p className="text-[11px] text-emerald-950/60 font-medium">
                      名所への移動効率、クチコミ評価、温泉・朝食の評判を考慮して厳選
                    </p>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full whitespace-nowrap">
                    厳選 3選
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {realHotelPosts.map((post) => (
                    <article
                      key={post.id}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        {/* 楽天アイキャッチ画像 */}
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
                            {post.area || prefInfo.name}
                          </span>
                          {post.price && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(post.price).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        {/* 宿情報 */}
                        <div className="p-4 space-y-2">
                          <div className="flex items-center justify-between text-[9px] font-bold text-emerald-950/40">
                            <span>{post.area || prefInfo.name}</span>
                            {post.rating && (
                              <span className="text-amber-600 font-extrabold">
                                ⭐ {post.rating}
                              </span>
                            )}
                          </div>
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {post.hotel_name}
                          </h4>
                          {post.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {post.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* 予約＆ルポ記事導線 */}
                      <div className="p-4 pt-0 space-y-2">
                        <a
                          href={post.affiliate_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                        {!post.isDirectRakuten && (
                          <Link
                            href={`/posts/${post.id}`}
                            className="block w-full text-center py-2 text-[11px] font-bold text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-xl transition border border-teal-800/10"
                          >
                            🧭 宿泊ルポ記事を読む
                          </Link>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* ◯◯県の他のおすすめ情報を見る ボタン */}
              <div className="pt-2 text-center">
                <Link
                  href="/prefectures"
                  className="inline-flex items-center gap-2 text-xs font-bold text-teal-900 bg-emerald-50/80 hover:bg-teal-100 border border-teal-800/20 px-6 py-2.5 rounded-full transition shadow-sm"
                >
                  <span>🧭</span>
                  <span>{prefInfo.name}の他のおすすめ観光・宿情報を見る</span>
                  <span>→</span>
                </Link>
              </div>
            </section>
          );
        })}
      </div>

      {/* 2. ☕ オススメ絶景＆レトロカフェ・スイーツ特集セクション */}
      {prefInfo.cafes && prefInfo.cafes.length > 0 && (
        <section id="cafes" className="scroll-mt-24 bg-gradient-to-br from-amber-50/60 via-amber-100/30 to-orange-50/40 border border-amber-300/40 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
          <div className="space-y-2 border-b border-amber-300/40 pb-4">
            <span className="text-[10px] font-extrabold text-amber-800 bg-amber-200/60 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
              SPECIAL CAFE SELECTION
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-amber-950 flex items-center gap-2">
              <span>☕</span> <span>【{prefInfo.name}】絶景＆レトロ！旅先で絶対訪れたいおすすめカフェ・スイーツ特集</span>
            </h2>
            <p className="text-xs text-amber-900/80 leading-relaxed font-medium">
              町家をリノベーションした風情ある和カフェから、絶景のロケーションを臨むテラスカフェまで、旅行の途中でほっと一息つける名店をご紹介。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prefInfo.cafes.map((cafe, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-amber-300/30 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[9px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    {cafe.type}
                  </span>
                  <h3 className="text-base font-bold font-journal-serif text-amber-950">
                    {cafe.name}
                  </h3>
                  <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
                    {cafe.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-amber-100 text-xs font-bold text-amber-900 flex items-center justify-between">
                  <span className="text-[10px] text-amber-700 font-extrabold">おすすめ看板メニュー:</span>
                  <span className="text-amber-950 font-black">{cafe.recommend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <Link
              href={`/prefectures/${prefInfo.slug}/cafes`}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-950 bg-white hover:bg-amber-100 border border-amber-400/40 px-6 py-2.5 rounded-full transition shadow-sm cursor-pointer"
            >
              <span>☕</span>
              <span>【2026年最新】{prefInfo.name}のおすすめカフェ・スイーツ比較ランキングを見る</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      )}

      {/* 3. 🛍️ トレンドお土産＆銘菓・工芸品特集セクション */}
      {prefInfo.souvenirs && prefInfo.souvenirs.length > 0 && (
        <section id="souvenirs" className="scroll-mt-24 bg-gradient-to-br from-emerald-50/60 via-teal-100/30 to-emerald-50/40 border border-emerald-300/40 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
          <div className="space-y-2 border-b border-emerald-300/40 pb-4">
            <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-200/60 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
              SOUVENIR & GIFTS
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🛍️</span> <span>【{prefInfo.name}】旅の思い出に買いたい！人気お土産・トレンド銘菓＆特産品</span>
            </h2>
            <p className="text-xs text-emerald-900/80 leading-relaxed font-medium">
              定番の伝統銘菓から話題の最新おしゃれ手土産、お取り寄せグルメ、工芸品まで、旅の思い出に選ぶべきおすすめ商品をピックアップ。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prefInfo.souvenirs.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-emerald-300/30 shadow-sm space-y-3">
                <span className="text-[9px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-base font-bold font-journal-serif text-emerald-950">
                  {item.name}
                </h3>
                <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <Link
              href={`/prefectures/${prefInfo.slug}/souvenirs`}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-100 border border-emerald-400/40 px-6 py-2.5 rounded-full transition shadow-sm cursor-pointer"
            >
              <span>🛍️</span>
              <span>【2026年最新】{prefInfo.name}の人気お土産・銘菓比較ランキングを見る</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      )}

      {/* 4. 🍶 銘酒・地酒＆地ビール・日本酒特集セクション */}
      {prefInfo.sakes && prefInfo.sakes.length > 0 && (
        <section id="sakes" className="scroll-mt-24 bg-gradient-to-br from-indigo-950/90 via-slate-900 to-teal-950 text-white border border-indigo-800/40 rounded-3xl p-6 md:p-10 space-y-6 shadow-xl">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <span className="text-[10px] font-extrabold text-amber-300 bg-amber-500/20 border border-amber-500/30 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
              SAKE & BREWERY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-white flex items-center gap-2">
              <span>🍶</span> <span>【{prefInfo.name}】蔵元直伝！今宵味わいたい地酒・日本酒＆名醸蔵特集</span>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              名水と伝統の技が生み出す各蔵元至高の日本酒。温泉宿の夕食や旅先の晩酌でぜひ味わいたい銘柄をご紹介。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prefInfo.sakes.map((sake, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full">
                      {sake.type}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">{sake.brewery}</span>
                  </div>
                  <h3 className="text-lg font-black font-journal-serif text-white">
                    {sake.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {sake.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <Link
              href={`/prefectures/${prefInfo.slug}/sakes`}
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-2.5 rounded-full transition shadow-sm cursor-pointer"
            >
              <span>🍶</span>
              <span>【2026年最新】{prefInfo.name}の銘酒・地酒・日本酒比較ランキングを見る</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      )}

      {/* 5. 旅のプロが厳選！よくある質問 (FAQ) */}
      {faqList.length > 0 && (
        <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
          <div className="space-y-2 border-b border-emerald-950/10 pb-4">
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>❓</span> <span>{prefInfo.name}旅行のプロに聞く！よくある質問（FAQ）</span>
            </h2>
            <p className="text-xs text-emerald-950/60 leading-relaxed font-medium">
              これから{prefInfo.name}への旅行を計画されている方から多く寄せられる質問に、旅行雑誌の編集部がお答えします。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqList.map((faq: any, idx: number) => (
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
        </section>
      )}

      {/* 🔍 次にユーザーが検索する疑問＆先回りガイド */}
      {(() => {
        const prefCities = getCitiesByPrefectures(prefInfo.slug);
        const prefSpots = SPOTS_DATA.filter(s => s.prefSlug === prefInfo.slug);
        const recommendedHubs = getRecommendedFeatureHubs({
          prefSlug: prefInfo.slug,
          keywords: [prefInfo.name, ...prefInfo.subAreas.map(s => s.areaName)],
          limit: 3
        });

        const nextQuestions: NextQuestionItem[] = [];

        if (prefCities.length > 0) {
          const firstCity = prefCities[0];
          nextQuestions.push({
            question: `【${firstCity.cityName}】おすすめ観光名所や名物グルメはどこ？`,
            badge: "人気市町村ガイド",
            answerSnippet: `${firstCity.cityName}の必見スポット（${firstCity.highlights.slice(0, 3).join('・')}）や、${firstCity.gourmet.slice(0, 2).join('・')}などの名物料理ガイド。`,
            linkText: `【${firstCity.cityName}】観光＆名物料理ガイドを見る`,
            href: `/prefectures/${prefInfo.slug}/${firstCity.citySlug}`
          });
        }

        if (prefSpots.length > 0) {
          const firstSpot = prefSpots[0];
          nextQuestions.push({
            question: `【${firstSpot.name}】見どころ・アクセス・近くの宿は？`,
            badge: "有名観光地スポット解説",
            answerSnippet: `${firstSpot.subtitle}。${firstSpot.highlights.slice(0, 2).join('／')}`,
            linkText: `【${firstSpot.name}】徹底解説＆近くの宿を見る`,
            href: `/spots/${firstSpot.slug}`
          });
        }

        if (allPrefPosts.length > 0) {
          const topHotel = allPrefPosts[0];
          nextQuestions.push({
            question: `【${prefInfo.name}】評価の高いおすすめ人気ホテル・温泉旅館は？`,
            badge: "厳選宿泊施設ルポ",
            answerSnippet: `「${topHotel.hotel_name}」をはじめ、${prefInfo.name}の極上ステイを叶える宿泊ルポ記事を公開中。`,
            linkText: `【${topHotel.hotel_name}】宿泊ルポ記事を見る`,
            href: `/posts/${topHotel.id}`
          });
        }

        for (const hub of recommendedHubs) {
          nextQuestions.push({
            question: `【${hub.theme}】${prefInfo.name}旅行におすすめの目的別特集は？`,
            badge: "旅の目的・テーマ特集",
            answerSnippet: hub.description,
            linkText: `${hub.shortTitle}を見る`,
            href: `/${hub.slug}`
          });
        }

        return (
          <NextSearchQuestions
            title={`🔍 「${prefInfo.name} 観光」を調べた人が次に検索している疑問＆先回りガイド`}
            subtitle={`${prefInfo.name}への旅行をより具体的にイメージできるよう、人気の市町村ガイド、有名観光地、おすすめホテル、旅行テーマ特集を先回り提示します。`}
            items={nextQuestions}
          />
        );
      })()}

      {/* 🚌 交通アクセス・高速バス・新幹線 比較＆1泊2日モデルコース */}
      {(() => {
        const transitGuides = getTransitGuidesForPrefecture(prefInfo.slug, 4);
        if (transitGuides.length === 0) return null;

        return (
          <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] md:text-xs font-black tracking-widest bg-cyan-400 text-slate-950 px-3 py-0.5 rounded-full uppercase">
                    TRANSIT & SMART TRAVEL
                  </span>
                  <span className="text-xs text-cyan-200 font-bold">
                    交通費を浮かせて贅沢旅
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black font-journal-serif text-white mt-1">
                  【{prefInfo.name}発着】安く行く方法・新幹線 vs 高速バス徹底比較ガイド
                </h3>
              </div>
            </div>

            <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed">
              「新幹線と高速バス、どっちで行くのが正解？」「移動費を浮かせた分でいい宿に泊まりたい！」そんな旅行者のための交通比較＆1泊2日満喫モデルコース特集です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transitGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/${guide.slug}`}
                  className="group block p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 transition duration-200 space-y-2.5"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-extrabold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                      📍 {guide.fromTo}
                    </span>
                    <span className="text-[10px] font-bold text-amber-300">
                      {guide.priceNote}
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white group-hover:text-cyan-200 transition font-journal-serif line-clamp-2">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-medium">
                    {guide.description}
                  </p>
                  <div className="text-[11px] font-bold text-cyan-400 group-hover:translate-x-1 transition flex items-center gap-1 pt-1">
                    <span>徹底比較＆モデルコースを見る</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      {/* 他都道府県への簡単アクセス */}
      <section className="p-8 rounded-3xl bg-teal-50/50 border border-teal-900/10 text-center space-y-4">
        <h3 className="text-lg font-bold font-journal-serif text-emerald-950">
          全国他の都道府県の見所・絶景カフェ・地酒・近隣宿を探す
        </h3>
        <p className="text-xs text-emerald-950/70 max-w-xl mx-auto leading-relaxed">
          日本全国47都道府県の網羅的観光ガイドを展開中。次に出かけたい憧れの旅行先を簡単検索。
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/prefectures"
            className="px-8 py-3 text-xs font-bold text-white bg-teal-800 hover:bg-teal-700 rounded-xl shadow transition"
          >
            🗾 47都道府県一覧ハブへ戻る
          </Link>
          <Link
            href="/campaigns"
            className="px-8 py-3 text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-xl border border-amber-300 transition"
          >
            🎁 開催中のお得キャンペーンを見る
          </Link>
        </div>
      </section>
    </div>
  );
}
