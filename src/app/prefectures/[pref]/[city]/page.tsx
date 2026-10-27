import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CITIES_DATA, getCityBySlug, getCitiesByPrefectures } from "@/data/citiesData";
import { getPrefectureBySlug } from "@/data/prefecturesData";
import { SPOTS_DATA } from "@/data/spotsData";
import NextSearchQuestions, { NextQuestionItem } from "@/app/components/NextSearchQuestions";
import { getRecommendedFeatureHubs } from "@/data/featureHubsData";

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
  parking_info?: string;
  hot_spring_info?: string;
  editor_tip?: string;
  recommended_for?: string[];
  nearby_tourist_spots?: string[];
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

  const cleanTitle = cityInfo.title.replace(/\s*[｜|]\s*(日本全国・)?旅宿クラウド.*$/, "").replace(/\s*[｜|]\s*クラウドトラベル.*$/, "");

  return {
    title: cleanTitle,
    description: cityInfo.description,
    keywords: cityInfo.keywords,
    alternates: {
      canonical: `${baseUrl}/prefectures/${pref}/${city}/`,
    },
    openGraph: {
      title: cleanTitle,
      description: cityInfo.description,
      url: `${baseUrl}/prefectures/${pref}/${city}/`,
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
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": `${cityInfo.prefName}観光ガイド`, "item": `${baseUrl}/prefectures/${pref}/` },
      { "@type": "ListItem", "position": 3, "name": `${cityInfo.cityName} 観光＆グルメ`, "item": `${baseUrl}/prefectures/${pref}/${city}/` }
    ]
  };

  const displayedCityPosts = finalPosts.slice(0, 6);

  const jsonLdItemList = displayedCityPosts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${cityInfo.cityName}（${cityInfo.prefName}）でおすすめの温泉旅館・人気ホテル厳選リスト`,
    "description": `${cityInfo.cityName}観光やご当地グルメ（${cityInfo.gourmet.slice(0, 3).join("・")}）の拠点に最適な高評価宿泊施設`,
    "numberOfItems": displayedCityPosts.length,
    "itemListElement": displayedCityPosts.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": p.hotel_name || p.title,
      "url": `${baseUrl}/posts/${p.id}/`,
      ...(p.image ? { "image": p.image } : {})
    }))
  } : null;

  const cityFaqItems = [
    {
      q: `${cityInfo.cityName}（${cityInfo.prefName}）で絶対に外せない定番観光スポットはどこですか？`,
      a: `${cityInfo.cityName}を訪れるなら、「${cityInfo.highlights.join("」「")}」が代表的な必見スポットです。午前中に中心部の名所を巡り、周辺の散策やカフェ巡りと組み合わせる1泊2日プランが人気を集めています。`
    },
    {
      q: `${cityInfo.cityName}旅行で味わうべき名物料理・ご当地グルメは何ですか？`,
      a: `${cityInfo.cityName}では、「${cityInfo.gourmet.join("」「")}」などの名物グルメが有名です。地元の老舗食事処や市場はもちろん、地場食材をふんだんに取り入れた会席料理や朝食ビュッフェを提供する温泉宿・ホテルでの食事も高く評価されています。`
    },
    {
      q: `${cityInfo.cityName}周辺の観光拠点におすすめのホテル・温泉宿はどこですか？`,
      a: displayedCityPosts.length > 0
        ? `楽天トラベルでも高評価を得ている「${displayedCityPosts.slice(0, 3).map(p => p.hotel_name).join("」「")}」などが特におすすめです。主要観光地へのアクセスや温泉・駐車場設備を比較して旅の目的に合う宿をお選びいただけます。`
        : `${cityInfo.cityName}周辺では主要駅やインターチェンジからアクセスしやすい温泉旅館・シティホテルが充実しています。早割やクーポンを活用しての予約がおすすめです。`
    }
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityFaqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const siblingCities = getCitiesByPrefectures(pref).filter(c => c.citySlug !== city);

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {jsonLdItemList && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/" className="hover:text-teal-800 transition">都道府県一覧</Link>
        <span>/</span>
        <Link href={`/prefectures/${pref}/`} className="hover:text-teal-800 transition">{cityInfo.prefName}</Link>
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

        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-tight text-white">「{cityInfo.cityName}」おすすめ観光名所・名物料理（ご当地グルメ）・厳選宿 厳選ガイド</h1>

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
          {displayedCityPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={`${post.hotel_name}（${cityInfo.cityName}）`}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover"
                      loading="eager" fetchPriority="high"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                      {post.hotel_name}
                    </div>
                  )}
                  <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-teal-800 text-white px-2.5 py-0.5 rounded-full shadow">
                    {cityInfo.cityName}
                  </span>
                  {post.price && (
                    <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                      目安: ¥{Number(post.price).toLocaleString()}〜
                    </span>
                  )}
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
                  {post.description && (
                    <p className="text-[11px] text-stone-600 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  )}
                  {(post.hot_spring_info || post.parking_info) && (
                    <div className="text-[10px] text-stone-600 bg-stone-50 p-2.5 rounded-xl space-y-1 border border-stone-200/60">
                      {post.hot_spring_info && <p>♨️ <strong>温泉・風呂:</strong> {post.hot_spring_info}</p>}
                      {post.parking_info && <p>🚗 <strong>駐車場:</strong> {post.parking_info}</p>}
                    </div>
                  )}
                  {post.editor_tip && (
                    <p className="text-[10px] text-teal-900 bg-teal-50/70 p-2 rounded-lg leading-relaxed">
                      💡 {post.editor_tip}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <a
                  href={post.affiliate_url}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center py-2 text-[11px] font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                >
                  ✈️ 楽天トラベルでプランを見る
                </a>
                <Link
                  href={`/posts/${post.id}/`}
                  className="block w-full text-center py-2 text-[11px] font-bold text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-xl transition border border-teal-800/10"
                >
                  🧭 宿の特化記事を読む
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 宿泊スペック一覧比較表 */}
        {displayedCityPosts.length > 0 && (
          <div className="pt-6 border-t border-emerald-950/10 space-y-4">
            <h3 className="text-base md:text-lg font-black font-journal-serif text-emerald-950">
              📊 {cityInfo.cityName}・{cityInfo.prefName}エリア 厳選宿スペック＆料金比較表
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse bg-white rounded-2xl overflow-hidden border border-stone-200">
                <thead>
                  <tr className="bg-emerald-950 text-white font-bold">
                    <th className="p-3">宿泊施設名</th>
                    <th className="p-3">エリア / 評価</th>
                    <th className="p-3">参考料金目安</th>
                    <th className="p-3">温泉・駐車場・滞在の特徴</th>
                    <th className="p-3">詳細・予約</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {displayedCityPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-emerald-50/40 transition">
                      <td className="p-3 font-bold text-emerald-950">{post.hotel_name}</td>
                      <td className="p-3 text-stone-700">{post.area || cityInfo.cityName} {post.rating ? `（★${post.rating}）` : ""}</td>
                      <td className="p-3 font-bold text-amber-700">{post.price ? `¥${Number(post.price).toLocaleString()}〜` : "プラン参照"}</td>
                      <td className="p-3 text-stone-600">{post.hot_spring_info || post.editor_tip || post.description?.slice(0, 60)} {post.parking_info ? `／駐車場: ${post.parking_info}` : ""}</td>
                      <td className="p-3">
                        <Link href={`/posts/${post.id}/`} className="text-teal-800 font-bold underline">詳細ルポ</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* 🗺️ 広域観光・エリア別比較＆モデルコースガイド */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
        <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950">
          🧭 {cityInfo.cityName}（{cityInfo.prefName}）1泊2日モデルコース＆広域観光・グルメ周遊ガイド
        </h2>
        <p className="text-xs md:text-sm text-stone-700 leading-relaxed">
          {cityInfo.cityName}では、{cityInfo.highlights.join("・")}といった主要観光スポットと、{cityInfo.gourmet.join("・")}などのご当地グルメを組み合わせることで、日帰りでは味わえない充実した1泊2日ステイが叶います。午前中に中心部の名所を巡り、昼食に名物料理を堪能したあと、夕方に温泉宿やシティホテルへチェックインしてゆっくり旅の疲れを癒やす行程が王道です。また、{cityInfo.prefName}内の主要エリア（{prefInfo.subAreas.map(s => s.areaName).join("・")}）や、銘菓・地酒スポットと組み合わせた周遊ルートも人気を集めています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {prefInfo.subAreas.slice(0, 3).map((sub, i) => (
            <div key={i} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
              <h3 className="font-bold text-emerald-950 text-sm">📍 {sub.areaName}</h3>
              <p className="text-stone-600 leading-relaxed">{sub.description}</p>
              <p className="text-teal-800 font-semibold">主な見どころ: {sub.spots.map(s => s.name).slice(0, 3).join("・")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ❓ よくある質問（FAQ）セクション（GEO＆FAQPage構造化データ連携） */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span> <span>{cityInfo.cityName}旅行・観光＆ホテル選びのよくある質問（FAQ）</span>
          </h2>
          <p className="text-xs text-emerald-950/60 leading-relaxed font-medium">
            {cityInfo.cityName}への旅行計画でよく検索される質問と回答をまとめました。
          </p>
        </div>
        <div className="space-y-4">
          {cityFaqItems.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-teal-50/40 border border-teal-900/10 space-y-2">
              <h3 className="text-sm font-bold text-teal-950 flex items-start gap-2">
                <span className="text-teal-800 font-extrabold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-emerald-950/80 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔍 次にユーザーが検索する疑問＆先回りガイド */}
      {(() => {
        const citySpots = SPOTS_DATA.filter(s => s.prefSlug === pref && (s.citySlug === city || s.cityName === cityInfo.cityName));
        const topHotel = finalPosts[0];
        const recommendedHubs = getRecommendedFeatureHubs({
          prefSlug: pref,
          keywords: [cityInfo.cityName, cityInfo.prefName, ...cityInfo.keywords, ...cityInfo.highlights],
          limit: 2
        });

        const nextQuestions: NextQuestionItem[] = [];

        if (citySpots.length > 0) {
          const firstSpot = citySpots[0];
          nextQuestions.push({
            question: `【${cityInfo.cityName}】${firstSpot.name}の見どころやアクセス・所要時間は？`,
            badge: "観光名所スポット解説",
            answerSnippet: `${firstSpot.subtitle}。${firstSpot.highlights.slice(0, 2).join('／')}`,
            linkText: `【${firstSpot.name}】見どころ＆近くの宿を見る`,
            href: `/spots/${firstSpot.slug}/`
          });
        }

        if (topHotel) {
          nextQuestions.push({
            question: `【${cityInfo.cityName}】口コミ高評価の泊まるべきおすすめホテル・旅館は？`,
            badge: "宿泊施設・ホテルルポ",
            answerSnippet: `「${topHotel.hotel_name}」をはじめ、${cityInfo.cityName}の観光や温泉を満喫できる人気宿泊施設の詳細ルポを掲載中。`,
            linkText: `【${topHotel.hotel_name}】宿泊ルポ記事を見る`,
            href: `/posts/${topHotel.id}/`
          });
        }

        nextQuestions.push({
          question: `【${cityInfo.prefName}全体】他の有名観光地やお土産・温泉・地酒は？`,
          badge: "都道府県ポータル",
          answerSnippet: `${cityInfo.prefName}全域の有名観光スポット、名湯、ご当地お土産、酒蔵ガイドを完全網羅。`,
          linkText: `【${cityInfo.prefName}】観光・温泉・名物ガイドを見る`,
          href: `/prefectures/${pref}/`
        });

        for (const hub of recommendedHubs) {
          nextQuestions.push({
            question: `【${hub.theme}】${cityInfo.cityName}周辺のおすすめ旅行特集は？`,
            badge: "目的・テーマ特集",
            answerSnippet: hub.description,
            linkText: `${hub.shortTitle}を見る`,
            href: `/${hub.slug}/`
          });
        }

        return (
          <NextSearchQuestions
            title={`🔍 「${cityInfo.cityName}」の観光を調べた人が次に検索している疑問＆先回りガイド`}
            subtitle={`${cityInfo.cityName}への旅行計画をさらに深めるため、具体的な観光名所の解説、おすすめホテル、県内他エリア、旅行テーマ特集を先回り提示します。`}
            items={nextQuestions}
          />
        );
      })()}

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
                href={`/prefectures/${sibling.prefSlug}/${sibling.citySlug}/`}
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
          href={`/prefectures/${pref}/`}
          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-teal-800 hover:bg-teal-700 px-8 py-3 rounded-full shadow transition"
        >
          <span>🗾</span>
          <span>{cityInfo.prefName}全体の観光ハブトップへ戻る</span>
        </Link>
      </div>
    </div>
  );
}
