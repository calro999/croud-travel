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
    title: `【2026年最新】${prefInfo.name}のおすすめ絶景＆レトロカフェ・スイーツ比較ランキング | 旅宿クラウド`,
    description: `${prefInfo.name}の本当に訪れるべき絶景カフェ、町家・歴史レトロ喫茶、話題のスイーツ名店を徹底網羅。混雑回避テクニックや看板メニュー、周辺ホテル情報までプロが比較検証して紹介！`,
    keywords: [prefInfo.name, "カフェ", "スイーツ", "レトロ喫茶", "絶景カフェ", "ランキング", "観光", "楽天トラベル"],
    alternates: {
      canonical: `${baseUrl}/prefectures/${prefInfo.slug}/cafes`,
    },
    openGraph: {
      title: `${prefInfo.name}のおすすめ絶景＆レトロカフェ・スイーツ比較ランキング`,
      description: `${prefInfo.name}で絶対行きたいカフェ・スイーツの名店をプロが徹底比較！`,
      url: `${baseUrl}/prefectures/${prefInfo.slug}/cafes`,
      siteName: "旅宿クラウド",
      images: prefInfo.bannerImage ? [{ url: prefInfo.bannerImage, alt: `${prefInfo.name} カフェ` }] : [],
    },
  };
}

export default async function PrefectureCafesPage({ params }: { params: Promise<{ pref: string }> }) {
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
      { "@type": "ListItem", "position": 4, "name": `${prefInfo.name}カフェ・スイーツ特集`, "item": `${baseUrl}/prefectures/${prefInfo.slug}/cafes` }
    ]
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${prefInfo.name}のカフェ・スイーツおすすめランキング`,
    "itemListElement": prefInfo.cafes.map((cafe, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": cafe.name,
      "description": cafe.description
    }))
  };

  const faqList = [
    {
      q: `${prefInfo.name}で人気のカフェ・スイーツの混雑時間帯や穴場時間帯はいつですか？`,
      a: `${prefInfo.name}の有名カフェやスイーツ店は、週末や連休の14:00〜16:00にかけてピークを迎える傾向があります。開店直後（10:00〜11:00）または夕方16:30以降が比較的待ち時間が少なくスムーズに入店できるおすすめの穴場時間帯です。`
    },
    {
      q: `${prefInfo.name}のカフェ巡りと一緒に泊まりたいおすすめの宿泊エリアはどこですか？`,
      a: `${prefInfo.name}のカフェ巡りには、中心駅周辺や主要観光地（${prefInfo.subAreas.map(s => s.areaName).join("・")}）近くのホテルが最適です。徒歩やバスで移動しやすく、早朝のカフェ散策や夜カフェも満喫できます。`
    },
    {
      q: `${prefInfo.name}のカフェでテイクアウトできる限定スイーツはありますか？`,
      a: `多くの名店で日持ちする焼き菓子や限定フレーバーのテイクアウト商品を用意しています。特に旅行の移動中やホテルでの夜のおやつ、また手土産としても大人気です。`
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
        <span className="text-emerald-950 font-bold">絶景＆レトロカフェ・スイーツガイド</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900 via-amber-950 to-teal-950 p-8 md:p-12 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-400 text-amber-950 px-3.5 py-1 rounded-full uppercase shadow">
            2026年最新 保存版 ☕
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            {prefInfo.name}厳選 カフェ＆スイーツ
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【2026年最新】{prefInfo.name}のおすすめ絶景＆レトロカフェ・スイーツ徹底比較ランキング
        </h1>

        <p className="text-amber-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          {prefInfo.name}への旅行・散策で絶対に立ち寄りたい、至高のカフェ＆スイーツスポットを徹底ルポ！SNSで話題のロケーション抜群な絶景テラスカフェから、伝統の町家をリノベーションした風情あふれるレトロ喫茶、地元で愛され続ける老舗スイーツサロンまで、旅行の合間に至福のひとときを過ごせる名店を厳選比較して紹介します。
        </p>
      </header>

      {/* イントロダクション＆比較・選び方ガイド（長文SEOコンテンツ） */}
      <article className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm leading-relaxed text-sm md:text-base text-emerald-950/90">
        <h2 className="text-2xl font-black font-journal-serif text-amber-950 border-b border-amber-200 pb-3 flex items-center gap-2">
          <span>☕</span> <span>{prefInfo.name}のカフェ巡りを100%楽しむための3つの比較・選択ポイント</span>
        </h2>

        <p className="text-sm leading-relaxed">
          {prefInfo.name}は豊かな自然美と歴史的な街並みが融合する魅惑の地域です。そのためカフェ文化も非常に発展しており、店ごとに異なるロケーションや空間演出、自慢のスイーツを展開しています。後悔しないカフェ選びのためには、以下の3つのポイントに着目して選ぶのがおすすめです。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <span className="text-xs font-extrabold text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-full block w-fit">ポイント1</span>
            <h3 className="font-bold text-amber-950 text-base">ロケーションとロマンある空間</h3>
            <p className="text-xs text-emerald-950/80">海や山々を臨む絶景テラス席か、大正ロマンや和の情緒漂う古民家・町家空間か、好みの雰囲気に合わせて選びましょう。</p>
          </div>
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <span className="text-xs font-extrabold text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-full block w-fit">ポイント2</span>
            <h3 className="font-bold text-amber-950 text-base">限定スイーツと職人のこだわり</h3>
            <p className="text-xs text-emerald-950/80">現地でしか味わえない搾りたてモンブラン、旬の果物を使ったパフェ、注文後に仕上げる特別スイーツに注目。</p>
          </div>
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <span className="text-xs font-extrabold text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-full block w-fit">ポイント3</span>
            <h3 className="font-bold text-amber-950 text-base">自家焙煎コーヒー＆ペアリング</h3>
            <p className="text-xs text-emerald-950/80">名水で淹れたネルドリップ珈琲や、抹茶・厳選紅茶との至高のペアリングで至福の一杯を堪能できます。</p>
          </div>
        </div>
      </article>

      {/* カフェランキング比較表 */}
      <section className="bg-amber-50/40 border border-amber-300/40 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
        <h2 className="text-xl md:text-2xl font-black font-journal-serif text-amber-950 flex items-center gap-2">
          <span>📊</span> <span>【一目でわかる】{prefInfo.name}のおすすめカフェ比較一覧表</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-amber-900 text-white font-bold">
                <th className="p-3.5 border-b border-amber-800">順位 / 店名</th>
                <th className="p-3.5 border-b border-amber-800">ジャンル・タイプ</th>
                <th className="p-3.5 border-b border-amber-800">名物・おすすめ看板メニュー</th>
                <th className="p-3.5 border-b border-amber-800">特徴・おすすめ利用シーン</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100">
              {prefInfo.cafes.map((cafe, i) => (
                <tr key={i} className="hover:bg-amber-50/50 transition">
                  <td className="p-3.5 font-bold text-amber-950">
                    <span className="inline-block w-5 h-5 rounded-full bg-amber-600 text-white text-[10px] text-center leading-5 mr-2 font-black">
                      {i + 1}
                    </span>
                    {cafe.name}
                  </td>
                  <td className="p-3.5 font-semibold text-amber-900">{cafe.type}</td>
                  <td className="p-3.5 font-bold text-amber-700">{cafe.recommend}</td>
                  <td className="p-3.5 text-emerald-950/80">{cafe.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 各カフェの詳細ルポ・比較分析 */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black font-journal-serif text-emerald-950 border-b border-emerald-950/10 pb-4">
          🏆 {prefInfo.name}のおすすめカフェ＆スイーツ名店 詳細ガイド
        </h2>

        <div className="space-y-8">
          {prefInfo.cafes.map((cafe, i) => (
            <article key={i} className="bg-white border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm hover:shadow-md transition">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-700 text-white text-xs font-black px-3 py-1 rounded-full">
                    第{i + 1}位
                  </span>
                  <span className="text-xs font-extrabold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                    {cafe.type}
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                  看板メニュー: {cafe.recommend}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-black font-journal-serif text-amber-950">
                {cafe.name}
              </h3>

              <div className="prose prose-amber max-w-none text-xs md:text-sm text-emerald-950/80 leading-relaxed space-y-3">
                <p>{cafe.description}</p>
                <p>
                  {prefInfo.name}旅行の散策途中やランチ後のティータイムに立ち寄るなら、まず候補に入れたい憧れの名店です。店内は木の温もりが漂い、ゆったりとした時間の流れを感じられます。特に「{cafe.recommend}」は、厳選した地元食材や新鮮な乳製品・抹茶などを贅沢に使用し、一口食べた瞬間に幸せな甘みが広がります。
                </p>
                <p>
                  【利用のワンポイントアドバイス】週末や観光シーズンは行列ができることが多いため、午前中の早い時間か夕方の時間帯を狙うとスムーズに入店できます。周辺の観光スポット巡りと合わせて、ぜひ旅行プランに組み込んでみてください。
                </p>
              </div>

              <div className="pt-4 border-t border-amber-100 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-amber-950">
                <span>📍 エリア: {prefInfo.name}主要観光エリア</span>
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
          <span>❓</span> <span>{prefInfo.name}のカフェ・スイーツに関するよくある質問（FAQ）</span>
        </h2>
        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-950 flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
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
      <section className="p-8 rounded-3xl bg-amber-900 text-white text-center space-y-4 shadow-xl">
        <h2 className="text-xl font-black font-journal-serif">
          {prefInfo.name}の魅力をさらに探求しよう
        </h2>
        <p className="text-xs text-amber-100 max-w-xl mx-auto leading-relaxed">
          絶景カフェを楽しんだ後は、{prefInfo.name}の厳選お土産や伝統の銘酒、そして至高の温泉宿・ホテルをチェックしましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href={`/prefectures/${prefInfo.slug}/souvenirs`}
            className="px-6 py-3 text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition shadow"
          >
            🛍️ お土産・銘菓ランキングを見る
          </Link>
          <Link
            href={`/prefectures/${prefInfo.slug}/sakes`}
            className="px-6 py-3 text-xs font-bold text-white bg-indigo-900 hover:bg-indigo-800 rounded-xl transition shadow border border-indigo-700"
          >
            🍶 銘酒・地酒ランキングを見る
          </Link>
          <Link
            href={`/prefectures/${prefInfo.slug}`}
            className="px-6 py-3 text-xs font-bold text-white bg-amber-700 hover:bg-amber-600 rounded-xl transition shadow"
          >
            🗾 {prefInfo.name}観光＆宿ハブへ戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
