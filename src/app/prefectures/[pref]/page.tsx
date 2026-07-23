import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PREFECTURES_DATA, getPrefectureBySlug, SubAreaInfo } from "@/data/prefecturesData";

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

  const subAreaNames = prefInfo.subAreas.map(s => s.areaName).join("・");

  return {
    title: `【${prefInfo.name}観光ハブ】${subAreaNames}の観光ガイド＆おすすめカフェ・お土産・地酒・近隣宿徹底比較 ｜ 日本全国・旅びより`,
    description: `${prefInfo.name}のエリア別観光ガイド（${subAreaNames}）、おすすめのおしゃれカフェ・スイーツ、トレンドお土産・銘菓、銘酒・地酒・日本酒、近隣の厳選ホテル・温泉旅館を網羅。`,
    keywords: [prefInfo.name, subAreaNames, "観光ガイド", "絶景カフェ", "トレンドお土産", "地酒日本酒", "温泉宿", "ホテル予約", "楽天トラベル"],
    alternates: {
      canonical: `${baseUrl}/prefectures/${prefInfo.slug}`,
    },
    openGraph: {
      title: `${prefInfo.name} 国内最高峰 観光ポータルガイド`,
      description: prefInfo.description,
      url: `${baseUrl}/prefectures/${prefInfo.slug}`,
      siteName: "日本全国・旅びより",
      images: prefInfo.bannerImage ? [{ url: prefInfo.bannerImage, alt: prefInfo.name }] : [],
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
    console.error("Failed to load posts in prefecture detail page:", e);
  }
  return [];
}

// サブエリアに合致する宿記事をフィルタリング・抽出する処理
function filterPostsForSubArea(subArea: SubAreaInfo, allPosts: Post[], prefName: string): Post[] {
  const cleanPref = prefName.replace(/(県|府|東京都)$/, "");
  
  // 該当都道府県の投稿に絞り込む
  const prefPosts = allPosts.filter(p => 
    p.prefecture === prefName || p.prefecture.replace(/(県|府|東京都)$/, "") === cleanPref
  );

  if (prefPosts.length === 0) return [];

  // エリアキーワードやタイトル/ホテル名/レビュー文で合致する宿をマッチング
  const matched = prefPosts.filter(post => {
    const textToSearch = (post.title + " " + post.hotel_name + " " + post.area + " " + post.review).toLowerCase();
    return subArea.keywords.some(kw => textToSearch.includes(kw.toLowerCase()));
  });

  if (matched.length > 0) return matched;
  return prefPosts.slice(0, 3);
}

export default async function PrefectureDetailPage({ params }: { params: Promise<{ pref: string }> }) {
  const { pref } = await params;
  const prefInfo = getPrefectureBySlug(pref);

  if (!prefInfo) {
    notFound();
  }

  const allPosts = loadAllPosts();
  const cleanPref = prefInfo.name.replace(/(県|府|東京都)$/, "");
  const allPrefPosts = allPosts.filter(
    (p) => p.prefecture === prefInfo.name || p.prefecture.replace(/(県|府|東京都)$/, "") === cleanPref
  );

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  // JSON-LD Breadcrumb & TouristDestination
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "47都道府県一覧", "item": `${baseUrl}/prefectures` },
      { "@type": "ListItem", "position": 3, "name": `${prefInfo.name}観光ポータル`, "item": `${baseUrl}/prefectures/${prefInfo.slug}` }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures" className="hover:text-teal-800 transition">都道府県一覧</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">{prefInfo.name} 観光ポータルガイド</span>
      </nav>

      {/* 都道府県 ヒーローパネル */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-950 via-emerald-900 to-amber-950 p-8 md:p-12 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-400 text-teal-950 px-3.5 py-1 rounded-full uppercase shadow">
            {prefInfo.region}エリア 🗺️
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            全 {prefInfo.subAreas.length} エリア細分化攻略
          </span>
          <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            厳選宿数: {allPrefPosts.length}件
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【{prefInfo.name}】エリア別観光名所・絶景カフェ・銘菓お土産・地酒＆近隣宿 徹底完全ガイド
        </h1>

        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          {prefInfo.description}
        </p>

        {/* 著名なハイライト＆ご当地グルメ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
          <div className="space-y-1.5">
            <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-widest block">
              📍 代表的観光名所・絶景ハイライト
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
              🍱 名物ご当地グルメ・絶品食文化
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

      {/* 目次アンカーナビゲーション（エリア＆特設テーマ） */}
      <section className="bg-white border border-emerald-950/10 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-xs font-extrabold text-teal-900/60 uppercase tracking-widest flex items-center gap-1.5">
          <span>📌</span> <span>目的のエリア・特集へ即座にスキップ</span>
        </h2>
        
        {/* エリアボタン */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-emerald-950/50 block">【地域別エリアガイド】</span>
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

      {/* 1. サブエリアごとの詳細観光名所ガイド＆近隣宿セクション */}
      <div className="space-y-16">
        {prefInfo.subAreas.map((subArea) => {
          const areaPosts = filterPostsForSubArea(subArea, allPosts, prefInfo.name);

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

              {/* 📍 主要観光名所・絶景スポット詳細紹介 */}
              <div className="space-y-4">
                <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                  <span>📍</span> <span>{subArea.areaName}の絶対外せない観光名所・見所スポット</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subArea.spots.map((spot, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2"
                    >
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
                  ))}
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

              {/* 🏨 このエリア近隣のおすすめホテル・温泉宿 */}
              <div className="space-y-6 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-base md:text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                    <span>🏨</span> <span>{subArea.areaName}近隣の厳選ホテル・温泉旅館（アフィリエイト＆ルポ）</span>
                  </h3>
                  <span className="text-xs font-bold text-teal-800">
                    {areaPosts.length} 件おすすめ
                  </span>
                </div>

                {areaPosts.length === 0 ? (
                  <p className="text-xs text-emerald-950/50 font-medium">
                    このエリアの近隣おすすめ宿情報を現在更新中です。
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {areaPosts.map((post) => (
                      <article
                        key={post.id}
                        className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                      >
                        <div>
                          {/* アイキャッチ */}
                          <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                            {post.image ? (
                              <img
                                src={post.image}
                                alt={post.hotel_name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs">
                                No Image
                              </div>
                            )}
                            <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-teal-800 text-white px-2.5 py-0.5 rounded-full shadow">
                              {subArea.areaName}近隣
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
                              <span>{post.area}</span>
                              {post.rating && (
                                <span className="text-amber-600 font-extrabold">
                                  ⭐ {post.rating}
                                </span>
                              )}
                            </div>
                            <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                              {post.hotel_name}
                            </h4>
                          </div>
                        </div>

                        {/* アフィリエイト予約＆ルポボタン */}
                        <div className="p-4 pt-0 space-y-2">
                          <a
                            href={post.affiliate_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2 text-[11px] font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                          >
                            ✈️ 楽天トラベルで空室・最安値を見る
                          </a>
                          <Link
                            href={`/posts/${post.id}`}
                            className="block w-full text-center py-2 text-[11px] font-bold text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-xl transition border border-teal-800/10"
                          >
                            🧭 宿の取材ルポ記事を読む
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
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
              定番の伝統銘菓から話題の最新おしゃれ手土産、一生モノの工芸品まで、旅の思い出に選ぶべきおすすめ商品をピックアップ。
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
        </section>
      )}

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
