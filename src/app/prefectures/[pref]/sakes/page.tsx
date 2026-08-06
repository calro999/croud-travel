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
    title: `【2026年最新】${prefInfo.name}の銘酒・地酒・日本酒＆名醸蔵おすすめ比較ランキング | 旅宿クラウド`,
    description: `${prefInfo.name}が誇る最高峰の地酒・純米大吟醸・名醸蔵の日本酒を徹底比較。蔵元のこだわり、味わいの特徴（淡麗辛口・芳醇）、ペアリングに最適な名物料理、温泉宿で楽しめる晩酌情報までプロが徹底解説！`,
    keywords: [prefInfo.name, "地酒", "日本酒", "銘酒", "蔵元", "純米大吟醸", "ランキング", "観光", "楽天トラベル"],
    alternates: {
      canonical: `${baseUrl}/prefectures/${prefInfo.slug}/sakes`,
    },
    openGraph: {
      title: `${prefInfo.name}の銘酒・地酒・日本酒＆名醸蔵おすすめ比較ランキング`,
      description: `${prefInfo.name}の失敗しない地酒・名醸蔵をプロが徹底比較！`,
      url: `${baseUrl}/prefectures/${prefInfo.slug}/sakes`,
      siteName: "旅宿クラウド",
      images: prefInfo.bannerImage ? [{ url: prefInfo.bannerImage, alt: `${prefInfo.name} 地酒` }] : [],
    },
  };
}

export default async function PrefectureSakesPage({ params }: { params: Promise<{ pref: string }> }) {
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
      { "@type": "ListItem", "position": 4, "name": `${prefInfo.name}地酒・日本酒特集`, "item": `${baseUrl}/prefectures/${prefInfo.slug}/sakes` }
    ]
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${prefInfo.name}の地酒・日本酒おすすめランキング`,
    "itemListElement": prefInfo.sakes.map((sake, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": sake.name,
      "description": sake.description
    }))
  };

  const faqList = [
    {
      q: `${prefInfo.name}の地酒・日本酒は地元の温泉宿や居酒屋で飲めますか？`,
      a: `はい、${prefInfo.name}内の多くの温泉旅館や地場居酒屋では、本ページで紹介している名醸蔵の地酒を取り揃えており、地産地消の夕食や郷土料理と合わせて楽しむことができます。`
    },
    {
      q: `日本酒初心者でも飲みやすい${prefInfo.name}のおすすめ銘柄はどれですか？`,
      a: `爽やかな香りと軽やかな口当たりの「純米吟醸」や「淡麗辛口」タイプの銘柄がおすすめです。冷やして飲むとフルーティーな香りが引き立ち、日本酒が初めての方でも飲みやすいのが特徴です。`
    },
    {
      q: `${prefInfo.name}の酒蔵見学や試飲ができるおすすめの酒蔵はどこですか？`,
      a: `歴史ある直営蔵元の多くで、酒蔵見学ツアーや限定酒の無料試飲・角打ちスペースを併設しています。旅行プランの途中に立ち寄るスポットとして非常に人気があります。`
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
        <span className="text-emerald-950 font-bold">銘酒・地酒・日本酒ガイド</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 p-8 md:p-12 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-400 text-indigo-950 px-3.5 py-1 rounded-full uppercase shadow">
            2026年最新 保存版 🍶
          </span>
          <span className="text-xs font-bold text-indigo-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            {prefInfo.name}厳選 銘酒・酒蔵
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【2026年最新】{prefInfo.name}の銘酒・地酒・日本酒＆名醸蔵おすすめ比較ランキング
        </h1>

        <p className="text-indigo-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          清冽な雪解け水や極上の名水、恵まれた酒米、そして代々受け継がれてきた杜氏（とうじ）の技が光る{prefInfo.name}の地酒。旅先の温泉宿での晩酌や、大切な方へのお土産、ご自宅でじっくり味わいたい至高の純米大吟醸や限定銘柄を徹底比較して紹介します。
        </p>
      </header>

      {/* イントロダクション＆比較・選び方ガイド（長文SEOコンテンツ） */}
      <article className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm leading-relaxed text-sm md:text-base text-emerald-950/90">
        <h2 className="text-2xl font-black font-journal-serif text-indigo-950 border-b border-indigo-200 pb-3 flex items-center gap-2">
          <span>🍶</span> <span>{prefInfo.name}の地酒・日本酒を100%味わい尽くすための3つの比較ポイント</span>
        </h2>

        <p className="text-sm leading-relaxed">
          {prefInfo.name}には個性豊かな蔵元が点在し、それぞれ水・米・醸造法に独自のこだわりを持っています。自分好みの特別な一本や、旅行中に楽しみたい酒を見つけるための重要チェックポイントを解説します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-2">
            <span className="text-xs font-extrabold text-indigo-800 bg-indigo-200/60 px-2.5 py-0.5 rounded-full block w-fit">ポイント1</span>
            <h3 className="font-bold text-indigo-950 text-base">酒質タイプ（淡麗辛口・芳醇旨口）</h3>
            <p className="text-xs text-emerald-950/80">すっきりキレのある淡麗辛口か、米の旨みとコクが広がる芳醇タイプか、好みの味わいに合わせて選びましょう。</p>
          </div>
          <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-2">
            <span className="text-xs font-extrabold text-indigo-800 bg-indigo-200/60 px-2.5 py-0.5 rounded-full block w-fit">ポイント2</span>
            <h3 className="font-bold text-indigo-950 text-base">名醸蔵の歴史と仕込み水</h3>
            <p className="text-xs text-emerald-950/80">山々の雪解け水や名水百選の水で仕込まれた酒は口当たりが非常にまろやかで、蔵ごとの歴史が味の深みになります。</p>
          </div>
          <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-2">
            <span className="text-xs font-extrabold text-indigo-800 bg-indigo-200/60 px-2.5 py-0.5 rounded-full block w-fit">ポイント3</span>
            <h3 className="font-bold text-indigo-950 text-base">名物ご当地料理とのペアリング</h3>
            <p className="text-xs text-emerald-950/80">{prefInfo.name}の新鮮な海鮮やお肉料理、お漬物や珍味と日本酒を合わせることで、互いの美味しさが引き立ちます。</p>
          </div>
        </div>
      </article>

      {/* 地酒ランキング比較表 */}
      <section className="bg-indigo-50/40 border border-indigo-300/40 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
        <h2 className="text-xl md:text-2xl font-black font-journal-serif text-indigo-950 flex items-center gap-2">
          <span>📊</span> <span>【一目でわかる】{prefInfo.name}のおすすめ地酒・日本酒比較一覧表</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-indigo-950 text-white font-bold">
                <th className="p-3.5 border-b border-indigo-800">順位 / 銘柄名</th>
                <th className="p-3.5 border-b border-indigo-800">醸造元（酒蔵）</th>
                <th className="p-3.5 border-b border-indigo-800">酒質・タイプ</th>
                <th className="p-3.5 border-b border-indigo-800">味わいの特徴とおすすめペアリング</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-100">
              {prefInfo.sakes.map((sake, i) => (
                <tr key={i} className="hover:bg-indigo-50/50 transition">
                  <td className="p-3.5 font-bold text-indigo-950">
                    <span className="inline-block w-5 h-5 rounded-full bg-indigo-800 text-white text-[10px] text-center leading-5 mr-2 font-black">
                      {i + 1}
                    </span>
                    {sake.name}
                  </td>
                  <td className="p-3.5 font-semibold text-indigo-900">{sake.brewery}</td>
                  <td className="p-3.5 font-bold text-amber-700">{sake.type}</td>
                  <td className="p-3.5 text-emerald-950/80">{sake.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 各地酒の詳細ルポ・比較分析 */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black font-journal-serif text-emerald-950 border-b border-emerald-950/10 pb-4">
          🏆 {prefInfo.name}の銘酒・地酒名醸蔵 詳細ガイド
        </h2>

        <div className="space-y-8">
          {prefInfo.sakes.map((sake, i) => (
            <article key={i} className="bg-white border border-indigo-200 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm hover:shadow-md transition">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-indigo-900 text-white text-xs font-black px-3 py-1 rounded-full">
                    第{i + 1}位
                  </span>
                  <span className="text-xs font-extrabold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                    {sake.type}
                  </span>
                </div>
                <span className="text-xs font-bold text-indigo-950 bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-200">
                  蔵元: {sake.brewery}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-black font-journal-serif text-indigo-950">
                {sake.name}
              </h3>

              <div className="prose prose-indigo max-w-none text-xs md:text-sm text-emerald-950/80 leading-relaxed space-y-3">
                <p>{sake.description}</p>
                <p>
                  {prefInfo.name}を訪れたら必ず一杯は嗜みたい至高の地酒です。丹念に磨き上げた酒米と名水を贅沢に使い、低温でじっくりと発酵させることで、華やかな香りと凛とした旨みが広がります。旅行中の温泉宿での夕食や、特別な旅の思い出を振り返る夜に最高の贅沢をもたらしてくれます。
                </p>
                <p>
                  【プロのおすすめの呑み方】冷や（10℃前後の花冷え）で飲むとフルーティーな香りが際立ち、ぬる燗にすると米の旨みと温かなコクがじんわり広がります。
                </p>
              </div>

              <div className="pt-4 border-t border-indigo-100 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-indigo-950">
                <span>📍 醸造地: {sake.brewery}</span>
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
          <span>❓</span> <span>{prefInfo.name}の地酒・日本酒に関するよくある質問（FAQ）</span>
        </h2>
        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-indigo-50/40 border border-indigo-200/60 space-y-2">
              <h3 className="text-sm font-bold text-indigo-950 flex items-start gap-2">
                <span className="text-indigo-800 font-extrabold">Q.</span>
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
      <section className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4 shadow-xl">
        <h2 className="text-xl font-black font-journal-serif">
          {prefInfo.name}の旅をもっと深掘りしよう
        </h2>
        <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
          地酒をチェックした後は、{prefInfo.name}の絶景カフェや人気のお土産・銘菓、そして美味しい料理と日本酒を味わえる温泉宿・ホテルをチェックしましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href={`/prefectures/${prefInfo.slug}/cafes`}
            className="px-6 py-3 text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 rounded-xl transition shadow"
          >
            ☕ 絶景カフェ＆スイーツランキングを見る
          </Link>
          <Link
            href={`/prefectures/${prefInfo.slug}/souvenirs`}
            className="px-6 py-3 text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition shadow"
          >
            🛍️ お土産・銘菓ランキングを見る
          </Link>
          <Link
            href={`/prefectures/${prefInfo.slug}`}
            className="px-6 py-3 text-xs font-bold text-white bg-indigo-800 hover:bg-indigo-700 rounded-xl transition shadow border border-indigo-600"
          >
            🗾 {prefInfo.name}観光＆宿ハブへ戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
