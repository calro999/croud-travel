import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPrefectureBySlug, PREFECTURES_DATA } from "@/data/prefecturesData";

export const dynamicParams = false;

export async function generateStaticParams() {
  return PREFECTURES_DATA.map((pref) => ({ pref: pref.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ pref: string }> }): Promise<Metadata> {
  const { pref } = await params;
  const prefInfo = getPrefectureBySlug(pref);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  if (!prefInfo) return { title: "ページが見つかりません" };

  return {
    title: `【2026年最新】${prefInfo.name}の人気お土産・銘菓・名物おすすめ比較ランキング | 旅宿クラウド`,
    description: `${prefInfo.name}で絶対買いたい人気お土産、伝統の有名銘菓、話題の最新おしゃれ手土産、絶品ご当地グルメ・特産品を徹底比較。買える場所や日持ち、おすすめシーンまでプロが解説！`,
    keywords: [prefInfo.name, "お土産", "銘菓", "特産品", "手土産", "名物", "ランキング", "観光", "楽天トラベル"],
    alternates: {
      canonical: `${baseUrl}/prefectures/${prefInfo.slug}/souvenirs`,
    },
    openGraph: {
      title: `${prefInfo.name}の人気お土産・銘菓・名物おすすめ比較ランキング`,
      description: `${prefInfo.name}の失敗しない名物お土産・銘菓をプロが徹底比較！`,
      url: `${baseUrl}/prefectures/${prefInfo.slug}/souvenirs`,
      siteName: "旅宿クラウド",
      images: prefInfo.bannerImage ? [{ url: prefInfo.bannerImage, alt: `${prefInfo.name} お土産` }] : [],
    },
  };
}

export default async function PrefectureSouvenirsPage({ params }: { params: Promise<{ pref: string }> }) {
  const { pref } = await params;
  const prefInfo = getPrefectureBySlug(pref);

  if (!prefInfo) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  // JSON-LD
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "都道府県一覧", "item": `${baseUrl}/prefectures` },
      { "@type": "ListItem", "position": 3, "name": `${prefInfo.name}観光ハブ`, "item": `${baseUrl}/prefectures/${prefInfo.slug}` },
      { "@type": "ListItem", "position": 4, "name": `${prefInfo.name}お土産・銘菓特集`, "item": `${baseUrl}/prefectures/${prefInfo.slug}/souvenirs` }
    ]
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${prefInfo.name}のお土産・銘菓おすすめランキング`,
    "itemListElement": prefInfo.souvenirs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "description": item.description
    }))
  };

  const faqList = [
    {
      q: `${prefInfo.name}のお土産は主要駅や空港、どこでまとめて買うのが最もおすすめですか？`,
      a: `${prefInfo.name}の主要ターミナル駅やお土産売店、空港のショップには本ページで紹介している定番銘菓から限定手土産まで一堂に揃っています。旅行最終日にまとめて購入すると荷物にならずスムーズです。`
    },
    {
      q: `職場や大人数へ配る用として日持ちする${prefInfo.name}のお土産はどれですか？`,
      a: `個包装された焼き菓子やラングドシャ、煎餅・スナック類が日持ち（常温で2週間〜1ヶ月以上）し、職場へのばらまき用手土産として圧倒的に支持されています。`
    },
    {
      q: `${prefInfo.name}でしか買えない期間限定や地域限定のお土産はありますか？`,
      a: `季節限定のフルーツを使ったスイーツや、特定の直営店・空港限定パッケージの商品が多数販売されています。旅先で見かけたら早めの購入がおすすめです。`
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
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* 構造化データ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center flex-wrap gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures" className="hover:text-teal-800 transition">都道府県一覧</Link>
        <span>/</span>
        <Link href={`/prefectures/${prefInfo.slug}`} className="hover:text-teal-800 transition">{prefInfo.name}</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">人気お土産・銘菓・名物ガイド</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-950 to-emerald-950 p-8 md:p-12 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-emerald-400 text-emerald-950 px-3.5 py-1 rounded-full uppercase shadow">
            2026年最新 保存版 🛍️
          </span>
          <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            {prefInfo.name}厳選 お土産＆銘菓
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【2026年最新】{prefInfo.name}の人気お土産・銘菓・特産品おすすめ比較ランキング
        </h1>

        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          {prefInfo.name}旅行の思い出や大切な方への手土産として絶対に失敗しない人気お土産を厳選比較！長年愛される伝統の和菓子・名物銘菓から、SNSやメディアで話題のおしゃれな洋菓子・スイーツ、職場へ配りやすい常温・個包装のばらまき土産、お酒のお供に最高な特産グルメまで徹底紹介します。
        </p>
      </header>

      {/* イントロダクション＆比較・選び方ガイド（長文SEOコンテンツ） */}
      <article className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm leading-relaxed text-sm md:text-base text-emerald-950/90">
        <h2 className="text-2xl font-black font-journal-serif text-emerald-950 border-b border-emerald-200 pb-3 flex items-center gap-2">
          <span>🛍️</span> <span>{prefInfo.name}のお土産選びで失敗しないための3つのチェックポイント</span>
        </h2>

        <p className="text-sm leading-relaxed">
          {prefInfo.name}には魅力的な銘菓や名産品が溢れており、いざお土産売り場へ行くとどれを選ぶべきか迷ってしまいがちです。贈る相手や用途に合わせた最適なお土産を選ぶための重要ポイントをまとめました。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <span className="text-xs font-extrabold text-emerald-800 bg-emerald-200/60 px-2.5 py-0.5 rounded-full block w-fit">ポイント1</span>
            <h3 className="font-bold text-emerald-950 text-base">賞味期限・日持ちと保存方法</h3>
            <p className="text-xs text-emerald-950/80">職場や親戚への配り用には常温で2週間以上日持ちする個包装タイプが安全です。生菓子は自分用や当日〜翌日用として手配しましょう。</p>
          </div>
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <span className="text-xs font-extrabold text-emerald-800 bg-emerald-200/60 px-2.5 py-0.5 rounded-full block w-fit">ポイント2</span>
            <h3 className="font-bold text-emerald-950 text-base">地場食材・特産品の配合度</h3>
            <p className="text-xs text-emerald-950/80">{prefInfo.name}特産の高級フルーツや名産品、地場産のバターや抹茶などがふんだんに使われているかでご当地感が変わります。</p>
          </div>
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <span className="text-xs font-extrabold text-emerald-800 bg-emerald-200/60 px-2.5 py-0.5 rounded-full block w-fit">ポイント3</span>
            <h3 className="font-bold text-emerald-950 text-base">個包装パッケージのデザイン</h3>
            <p className="text-xs text-emerald-950/80">洗練されたデザインや和モダンなパッケージは、目上の方や大切な友人への贈答品として高い満足感を与えてくれます。</p>
          </div>
        </div>
      </article>

      {/* お土産ランキング比較表 */}
      <section className="bg-emerald-50/40 border border-emerald-300/40 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
        <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
          <span>📊</span> <span>【一目でわかる】{prefInfo.name}のおすすめ人気お土産比較一覧表</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-emerald-900 text-white font-bold">
                <th className="p-3.5 border-b border-emerald-800">順位 / 商品名</th>
                <th className="p-3.5 border-b border-emerald-800">ジャンル・カテゴリ</th>
                <th className="p-3.5 border-b border-emerald-800">おすすめ用途・贈り先</th>
                <th className="p-3.5 border-b border-emerald-800">商品の魅力と味わいの特徴</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {prefInfo.souvenirs.map((item, i) => (
                <tr key={i} className="hover:bg-emerald-50/50 transition">
                  <td className="p-3.5 font-bold text-emerald-950">
                    <span className="inline-block w-5 h-5 rounded-full bg-emerald-700 text-white text-[10px] text-center leading-5 mr-2 font-black">
                      {i + 1}
                    </span>
                    {item.name}
                  </td>
                  <td className="p-3.5 font-semibold text-emerald-900">{item.category}</td>
                  <td className="p-3.5 font-bold text-teal-800">職場ばらまき / ご自宅用 / 贈答用</td>
                  <td className="p-3.5 text-emerald-950/80">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 各お土産の詳細ルポ・比較分析 */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black font-journal-serif text-emerald-950 border-b border-emerald-950/10 pb-4">
          🏆 {prefInfo.name}の人気お土産・銘菓 詳細比較ガイド
        </h2>

        <div className="space-y-8">
          {prefInfo.souvenirs.map((item, i) => (
            <article key={i} className="bg-white border border-emerald-200 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm hover:shadow-md transition">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-800 text-white text-xs font-black px-3 py-1 rounded-full">
                    第{i + 1}位
                  </span>
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-900 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  ご当地名産・王道チョイス
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950">
                {item.name}
              </h3>

              <div className="prose prose-emerald max-w-none text-xs md:text-sm text-emerald-950/80 leading-relaxed space-y-3">
                <p>{item.description}</p>
                <p>
                  {prefInfo.name}のお土産選びで迷ったら、まず第一候補にあげるべき大ヒット商品です。素材本来の風味を活かし、熟練の職人技や最新の製法によって一口食べた瞬間に広がる豊かな味わいに仕上げられています。お子様からご年配の方まで幅広く喜ばれる万能な美味しさが魅力です。
                </p>
                <p>
                  【購入のおすすめスポット】主要駅のお土産売り場や空港、観光地中心部の直営店にて買い求めることができます。まとめ買いもしやすく、旅行の締めくくりのお買い物にぴったりです。
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-emerald-950">
                <span>📍 主な取扱店: {prefInfo.name}主要駅・空港・お土産店</span>
                <Link
                  href={`/prefectures/${prefInfo.slug}`}
                  className="text-teal-800 hover:underline flex items-center gap-1 font-extrabold"
                >
                  <span>{prefInfo.name}の周辺宿・観光ガイドを見る</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQセクション */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
          <span>❓</span> <span>{prefInfo.name}のお土産購入に関するよくある質問（FAQ）</span>
        </h2>
        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200/60 space-y-2">
              <h3 className="text-sm font-bold text-emerald-950 flex items-start gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-emerald-950/80 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ボトムナビゲーション */}
      <section className="p-8 rounded-3xl bg-emerald-950 text-white text-center space-y-4 shadow-xl">
        <h2 className="text-xl font-black font-journal-serif">
          {prefInfo.name}の旅をもっと豊かに
        </h2>
        <p className="text-xs text-emerald-100 max-w-xl mx-auto leading-relaxed">
          お土産をチェックした後は、{prefInfo.name}の絶景カフェや極上の地酒・日本酒、そして快適な滞在を叶える厳選宿をチェックしましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href={`/prefectures/${prefInfo.slug}/cafes`}
            className="px-6 py-3 text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 rounded-xl transition shadow"
          >
            ☕ 絶景カフェ＆スイーツランキングを見る
          </Link>
          <Link
            href={`/prefectures/${prefInfo.slug}/sakes`}
            className="px-6 py-3 text-xs font-bold text-white bg-indigo-900 hover:bg-indigo-800 rounded-xl transition shadow border border-indigo-700"
          >
            🍶 銘酒・地酒ランキングを見る
          </Link>
          <Link
            href={`/prefectures/${prefInfo.slug}`}
            className="px-6 py-3 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-700 rounded-xl transition shadow"
          >
            🗾 {prefInfo.name}観光＆宿ハブへ戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
