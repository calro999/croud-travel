import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅',
  description: '10月・11月の広島・宮島＆宮浜温泉特集！嚴島神社の秋景色と約700本のモミジが燃え立つ紅葉谷公園、瀬戸内海と宮島を対岸から見晴らす美肌の宮浜温泉、秋に旬を迎えるぷりぷりの広島牡蠣と広島牛をふるさと納税トラベルで味わう贅沢プラン。',
  keywords: ["宮島", "秋の焼き牡蠣", "広島牛を味わう旅", "クラウドトラベルふるさと納税", "温泉宿", "宿泊予約", "楽天トラベル"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-miyajima-aki-momijidani-autumn-stay/",
  },
  openGraph: {
    title: '宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅',
    description: '10月・11月の広島・宮島＆宮浜温泉特集！嚴島神社の秋景色と約700本のモミジが燃え立つ紅葉谷公園、瀬戸内海と宮島を対岸から見晴らす美肌の宮浜温泉、秋に旬を迎えるぷりぷりの広島牡蠣と広島牛をふるさと納税トラベルで味わう贅沢プラン。',
    url: 'https://croud-travel.pages.dev/furusato-tax-miyajima-aki-momijidani-autumn-stay',
    siteName: 'クラウドトラベル (croud-travel.pages.dev)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅",
    "description": "10月・11月の広島・宮島＆宮浜温泉特集！嚴島神社の秋景色と約700本のモミジが燃え立つ紅葉谷公園、瀬戸内海と宮島を対岸から見晴らす美肌の宮浜温泉、秋に旬を迎えるぷりぷりの広島牡蠣と広島牛をふるさと納税トラベルで味わう贅沢プラン。",
    "author": {
      "@type": "Organization",
      "name": "クラウドトラベル編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラウドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "datePublished": "",
    "dateModified": "",
    "mainEntityOfPage": "https://croud-travel.pages.dev/furusato-tax-miyajima-aki-momijidani-autumn-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "廿日市・宮島・宮浜温泉の秋（10月〜11月）のベストシーズン・見どころはいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年11月上旬〜11月下旬（宮島紅葉谷公園の紅葉ライトアップ・宮島フェリー秋夕景・秋牡蠣・広島牛）が見頃のピークとなります。山々や景勝地の鮮やかなグラデーションとともに、旬を迎える極上の地場食材を心ゆくまで満喫いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天ふるさと納税のトラベルクーポンは予約時にすぐ使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、寄附完了後即時〜数日以内に楽天トラベルのアカウントに付与されます。予約時にクーポンを適用することで、最大30%相当の宿泊補助が受けられます。"
        }
      },
      {
        "@type": "Question",
        "name": "秋の廿日市・宮島・宮浜温泉旅行における服装や持ち物のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10月〜11月の廿日市・宮島・宮浜温泉は昼夜の寒暖差が激しくなります。日中は長袖シャツで快適ですが、早朝や夕暮れの散策・露天風呂への移動時には防寒アウター（フリースやダウン等）を必ずご用意ください。"
        }
      }
    ]
  };


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-orange-950 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              広島県 / 廿日市・宮島・宮浜温泉
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅</h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            朱塗りの大鳥居と真紅のモミジが織りなす絶景、瀬戸内海を望む美肌温泉と名物牡蠣の口福
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：11月上旬〜11月下旬（宮島紅葉谷公園の紅葉ライトアップ・宮島フェリー秋夕景・秋牡蠣・広島牛）</span>
            <span className="flex items-center gap-1">♨️ 名湯温泉＆極上ご当地美食</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円でお得に宿泊</span>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-stone-100 border-b border-stone-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-stone-600">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-amber-700 underline">ホーム</Link>
          <span>&gt;</span>
          <Link href="/features" className="hover:text-amber-700 underline">特集一覧</Link>
          <span>&gt;</span>
          <span className="text-stone-900 font-medium">広島・宮島＆宮浜温泉特集</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅 | クラウドトラベルふるさと納税","item":"https://croud-travel.pages.dev/furusato-tax-miyajima-aki-momijidani-autumn-stay"}]}) }}
      />

        {/* Introduction */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3 border-b border-stone-200 pb-4">
            <span className="text-2xl">🍁</span>
            10月・11月に訪れるべき理由：秋の廿日市・宮島・宮浜温泉の魅力
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              広島県を代表する景勝地・温泉地である廿日市・宮島・宮浜温泉は、秋の訪れとともに最も華やかで風情あふれる季節を迎えます。
              澄み渡る秋空の下、木々が鮮やかなグラデーションに包まれ、雄大な自然美と歴史情緒が旅人の心を深く魅了します。
            </p>
            <p>
              この時期は気候も穏やかで、散策やアクティビティ、そして冷え込む朝夕の温泉浴にまさに最高のコンディション。
              さらに秋は収穫の季節であり、地元の旬の恵みをふんだんに使った会席料理や名物グルメが食卓を彩ります。
            </p>
            <div className="bg-amber-50/80 rounded-xl p-5 border-l-4 border-amber-500 mt-6 space-y-2">
              <div className="font-bold text-amber-900">✨ 秋旅行のハイライトポイント</div>
              <ul className="list-disc list-inside text-stone-700 text-xs sm:text-sm space-y-1">
                <li><strong>紅葉の見頃ピーク：</strong> 11月上旬〜11月下旬（宮島紅葉谷公園の紅葉ライトアップ・宮島フェリー秋夕景・秋牡蠣・広島牛）</li>
                <li><strong>秋の味覚：</strong> 新米、旬の海鮮・ブランド牛、秋野菜や地酒の贅沢なマリアージュ</li>
                <li><strong>温泉の贅沢：</strong> 澄んだ空気と秋風を感じる露天風呂で心身を解きほぐす至福のひととき</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Area Highlights & Model Course */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3 border-b border-stone-200 pb-4">
            <span className="text-2xl">🗺️</span>
            秋の廿日市・宮島・宮浜温泉を満喫する1泊2日モデルコース
          </h2>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-400 pl-4 sm:pl-6 space-y-6">
              <div>
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded">1日目：絶景散策と夕暮れの湯浴み</span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-2">紅葉名所巡りと名湯チェックイン</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  午前中に現地へ到着。秋色に染まる代表的な絶景スポットを散策し、ランチには地元名物グルメを堪能。午後は温泉街の散策やお土産選びを楽しみ、早めにお宿へチェックイン。夕暮れに染まる景色を眺めながら露天風呂で旅の疲れを癒やします。
                </p>
              </div>
              <div>
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded">2日目：清々しい朝風呂と旬の味覚探訪</span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-2">朝の澄んだ空気と産直ショッピング</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  小鳥のさえずりと澄んだ空気の中で目覚めの朝風呂。地元食材をたっぷり使った朝食を味わった後は、近隣の景勝地や産直市場に立ち寄り、採れたての秋の味覚や伝統工芸品をお買い物。思い出いっぱいの帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Recommendations */}
        <section className="space-y-10">
          <div className="border-b border-stone-300 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Rakuten Travel &amp; Furusato Tax</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              楽天トラベル＆ふるさと納税で泊まる！厳選おすすめ宿3選
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              高評価の口コミを獲得し、ふるさと納税トラベルクーポンの対象となっている名宿を厳選紹介。
            </p>
          </div>

          {/* Hotel 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 transition duration-300 hover:shadow-xl">
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">厳選第1位</span>
                  <div className="text-xs text-stone-400 font-medium mt-2">りぶまっくすりぞーとみやはまおんせん おーしゃん</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">リブマックスリゾート宮浜温泉Ｏｃｅａｎ</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.2 <span className="text-xs text-stone-500 font-normal">(902件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥12,250〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                瀬戸内海と対岸の宮島を一望する高台に建つラグジュアリーリゾートホテル。全室客室半露天風呂付き、インフィニティ展望露天風呂と豪華バイキング・会席が自慢。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">単純弱放射能温泉（ラドン温泉・宮浜温泉源泉） / 展望インフィニティ露天風呂・客室半露天風呂 / 効能：神経痛、筋肉痛、関節痛、五十肩、冷え性、痛風、美肌</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">広島産牡蠣のガンガン焼き・カキフライ、広島牛の鉄板ステーキ、瀬戸内鮮魚のお造りバイキング、もみじ饅頭スイーツ</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">瀬戸内海と一体化するインフィニティ露天風呂から望む朝日は息をのむ美しさ。全室天然温泉客室風呂完備で極上のプライベートステイ。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">JR山陽本線「大野浦駅」より車で約5分（無料送迎あり要予約） / 山陽自動車道「大野IC」より車で約10分 / 宮島口フェリー乗り場まで車で約15分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178590%2F178590.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition transform active:scale-95 text-sm"
                >
                  楽天トラベルでプラン・空室を確認する →
                </a>
                <span className="text-xs text-stone-400">※楽天ふるさと納税トラベルクーポン対象宿</span>
              </div>
            </div>
          </div>

          {/* Hotel 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 transition duration-300 hover:shadow-xl">
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">厳選第2位</span>
                  <div className="text-xs text-stone-400 font-medium mt-2">みやはまおんせん ゆのやど みやはまぐらんどほてる</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">宮浜温泉　湯の宿　宮浜グランドホテル</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.23 <span className="text-xs text-stone-500 font-normal">(749件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥10,890〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                宮島を望む高台に位置し、屋上展望露天風呂「マルミエロテン」から瀬戸内海の多島美を一望できる人気温泉旅館。広島名物牡蠣や穴子会席が評判。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">低張性弱アルカリ性低温泉（ラドン含有） / 屋上展望露天風呂「マルミエロテン」・大浴場 / 効能：神経痛、筋肉痛、冷え性、疲労回復、痛風、動脈硬化症</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">宮島名物活牡蠣尽くし会席、特選広島牛の陶板焼き、瀬戸内産天然穴子釜飯、旬魚姿造り、地酒飲み比べ</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">屋上露天風呂から眺める宮島と大野瀬戸の絶景パノラマ。宮島観光へのアクセスも抜群で、心温まる丁寧なおもてなし。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">大野浦駅より車で約5分（無料送迎あり） / 大野ICより車で約8分 / 宮島口まで車で約12分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13743%2F13743.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition transform active:scale-95 text-sm"
                >
                  楽天トラベルでプラン・空室を確認する →
                </a>
                <span className="text-xs text-stone-400">※楽天ふるさと納税トラベルクーポン対象宿</span>
              </div>
            </div>
          </div>

          {/* Hotel 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200 transition duration-300 hover:shadow-xl">
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">厳選第3位</span>
                  <div className="text-xs text-stone-400 font-medium mt-2">みやはまおんせん りょかん かんざき</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">宮浜温泉　旅館　かんざき</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.63 <span className="text-xs text-stone-500 font-normal">(281件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥8,250〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                宮浜温泉の静かな松林の中に佇む、創業以来の料理自慢の純和風温泉旅館。職人が腕を振るう瀬戸内海鮮・牡蠣会席と、庭園露天風呂が絶賛される宿。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">単純弱放射能温泉（ラドン温泉） / 庭園露天風呂・大浴場 / 効能：冷え性、神経痛、筋肉痛、五十肩、関節痛、疲労回復</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">広島名産焼き牡蠣・牡蠣鍋、瀬戸内の小イワシ・鯛の薄造り、広島牛の網焼き、松茸と穴子の土瓶蒸し</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">落ち着きのある数寄屋造りの和室と庭園露天風呂。宮島の紅葉狩りの余韻に浸りながら、贅沢な瀬戸内グルメをじっくり味わえる隠れ宿。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">JR大野浦駅より車で約5分（送迎あり） / 大野ICより車で約10分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6030%2F6030.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition transform active:scale-95 text-sm"
                >
                  楽天トラベルでプラン・空室を確認する →
                </a>
                <span className="text-xs text-stone-400">※楽天ふるさと納税トラベルクーポン対象宿</span>
              </div>
            </div>
          </div>

        </section>

        {/* Furusato Guide */}
        <section className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-500/10 rounded-2xl p-6 sm:p-10 border border-amber-200/60 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3 border-b border-amber-200/80 pb-4">
            <span className="text-2xl">💡</span>
            楽天ふるさと納税トラベルクーポンの賢い使い方
          </h2>
          <div className="space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              ふるさと納税の返礼品として提供されている「楽天トラベルクーポン」を利用すれば、実質自己負担2,000円で寄附額の最大30%相当が宿泊料金から直接割引されます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-xs text-center">
                <div className="text-amber-600 font-extrabold text-2xl mb-1">STEP 1</div>
                <div className="font-bold text-stone-800 text-sm mb-1">自治体へ寄附</div>
                <div className="text-stone-500 text-xs">楽天ふるさと納税で対象自治体のクーポンを返礼品として選択</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-xs text-center">
                <div className="text-amber-600 font-extrabold text-2xl mb-1">STEP 2</div>
                <div className="font-bold text-stone-800 text-sm mb-1">クーポン付与</div>
                <div className="text-stone-500 text-xs">寄附完了後、マイクーポンへ自動付与（即日〜数日）</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-xs text-center">
                <div className="text-amber-600 font-extrabold text-2xl mb-1">STEP 3</div>
                <div className="font-bold text-stone-800 text-sm mb-1">お得に宿泊予約</div>
                <div className="text-stone-500 text-xs">楽天トラベルで対象宿の予約時にクーポンを適用して割引完了</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              ※楽天スーパーSALEやお買い物マラソン等の買いまわりイベント期間中に寄附を行うと、楽天ポイント還元率が大幅にアップしてさらにお得です。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3 border-b border-stone-200 pb-4">
            <span className="text-2xl">❓</span>
            よくある質問（FAQ）
          </h2>
          <div className="space-y-6 text-stone-700 text-sm sm:text-base">
            <div className="border-b border-stone-100 pb-4">
              <h3 className="font-bold text-stone-900 mb-2">Q. 10月〜11月の紅葉や混雑の状況は？</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                紅葉の見頃ピーク（11月上旬〜11月下旬（宮島紅葉谷公園の紅葉ライトアップ・宮島フェリー秋夕景・秋牡蠣・広島牛））は週末を中心に観光客で賑わいます。ゆっくり散策や温泉を楽しみたい方は平日の宿泊や、早朝の観光スポット訪問がおすすめです。
              </p>
            </div>
            <div className="border-b border-stone-100 pb-4">
              <h3 className="font-bold text-stone-900 mb-2">Q. クーポンを利用した予約のキャンセル規定はどうなっていますか？</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                通常の楽天トラベルのキャンセル規定に準じます。期限内であればキャンセル時にクーポンは返還され、有効期限内であれば別の予約で再利用可能です。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 mb-2">Q. ふるさと納税クーポンとポイントは併用できますか？</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                はい、楽天ふるさと納税トラベルクーポンと通常の楽天ポイントは同時に併用して利用いただけます。
              </p>
            </div>
          </div>
        </section>
        

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅の旅ノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅」を効率よく巡るコツは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅エリアでは、「リブマックスリゾート宮浜温泉Ｏｃｅａｎ」（楽天評価★4.21・クチコミ911件、所在地：）をはじめとする宿を拠点にし、最寄り駅（主要駅）やアクセス条件（山陽本線 [大野浦駅]から車で5分・[玖波駅]から車で5分・[宮島口駅]から車で15分　岩国空港から車で30分）に合わせて午前中に周辺観光名所を巡り、15時のチェックイン後に温泉や夕食会席を堪能するスケジュールが最も効率的です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 事前準備や持ち物で注意すべきポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 宿泊予約時は最安料金目安（例：「宮浜温泉　旅館　かんざき」は1名あたり¥8,250〜）や駐車場条件（無料・有料駐車場あり）を事前に確認しましょう。連休や紅葉・年末年始シーズンは早期に満室となるため、楽天トラベルの早期割引プランやクーポンの活用がおすすめです。
              </p>
            </details>
          </div>
        </section>

      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「宮島・紅葉谷公園の真紅モミジと安芸宮浜温泉！世界遺産嚴島神社・秋の焼き牡蠣＆広島牛を味わう旅」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. リブマックスリゾート宮浜温泉Ｏｃｅａｎ</td>
                <td className="p-3 text-stone-600">広島県</td>
                <td className="p-3 text-stone-600">山陽本線 [大野浦駅]から車で5分・[玖波駅]から車で5分・[宮島口駅</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.21（911件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178590%2F178590.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 宮浜温泉　湯の宿　宮浜グランドホテル</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮浜温泉2-5-4</td>
                <td className="p-3 text-stone-600">大野浦駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台　先着順　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.2（756件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,890〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13743%2F13743.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 宮浜温泉　旅館　かんざき</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮浜温泉1-21-42</td>
                <td className="p-3 text-stone-600">大野浦駅周辺</td>
                <td className="p-3 text-stone-600">有り：１５台（無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.6（282件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6030%2F6030.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">リブマックスリゾート宮浜温泉Ｏｃｅａｎ</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/178590/178590.jpg" alt="リブマックスリゾート宮浜温泉Ｏｃｅａｎ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：山陽本線 [大野浦駅]から車で5分・[玖波駅]から車で5分・[宮島口駅]から車で15分　岩国空港から車で30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は広々快適だが食事会場は混雑気味オーシャンスイートに泊まりました。部屋は広々しており居心地も良く設備等含め快適でした。食事はバイキング会場が狭く隣との間隔があまりないので、テーブルを仕切っ…　2026-09-19 15:26:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮浜温泉　湯の宿　宮浜グランドホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやはまおんせん　ゆのやど　みやはまぐらんどほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,890〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13743/13743_war.jpg" alt="宮浜温泉　湯の宿　宮浜グランドホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>展望大浴場と旬の素材を使った料理が好評。宮島口から車で12分。無料駐車場有！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮浜温泉2-5-4 ／ 最寄り駅：大野浦 ／ 交通案内：ＪＲ大野浦駅より送迎有り／山陽自動車道大野ＩＣより約７～８分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　先着順　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.28 ／ 立地 ★4.19 ／ 部屋 ★4.11 ／ 設備 ★4.07 ／ 風呂 ★4.27 ／ 食事 ★4.38</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事のお給仕の方が大変親切でした食事のお給仕の方が大変親切でしたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/13…　2026-10-08 10:36:32投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮浜温泉　旅館　かんざき</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやはまおんせん　かんざき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6030/6030_room.jpg" alt="宮浜温泉　旅館　かんざき 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宮島に一番近い温泉郷【宮浜温泉】全8室の小さな旅館。中庭を眺めながらごゆっくり静かなお時間を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮浜温泉1-21-42 ／ 最寄り駅：大野浦 ／ 交通案内：ＪＲ山陽本線 大野浦駅からタクシーで５分（送迎あり）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り：１５台（無料）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.64 ／ 立地 ★4.52 ／ 部屋 ★4.52 ／ 設備 ★4.48 ／ 風呂 ★4.39 ／ 食事 ★4.67</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「雰囲気の良い旅館で、食事も部屋も大満足家族4人でお世話になりました。ザ・温泉旅館という感じで、とてもいい雰囲気のお宿でした。中庭も手入れが行き届いてとても綺麗でよかったです。広いお部屋…　2026-08-04 13:32:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！広島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、広島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Miyajima_From_The_Ferry_%2830093845%29.jpeg/1280px-Miyajima_From_The_Ferry_%2830093845%29.jpeg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="厳島神社（宮島）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">厳島神社（宮島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界文化遺産に登録された安芸の宮島。海上に浮かぶ鮮やかな朱塗りの大鳥居と社殿は潮の満ち引きで表情を変え、日本三景に相応しい神秘の美しさです。 厳島（いつくしま）は、広島県廿日市市宮島町にある島。瀬戸内海西部、広島湾の北西部に位置する。通称は安芸の宮島（あきのみやじま）、または宮島。かつて島全体が佐伯郡宮島町と一致していたが、2005年（平成17年）に廿日市市と合併した。 古代より、島そのものが自然崇拝の対象であったと考えられる。平安時代末期以降は、厳島神社の影響力の強さや海上交通の拠点としての重要…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">原爆ドーム・平和記念公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界へ恒久平和を訴え続ける負の遺産・世界文化遺産。元産業奨励館の被爆した姿が今も残され、平和記念資料館には世界中から多くの人が訪れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">尾道（千光寺公園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">坂と猫と映画の街として愛される港町。千光寺山の山頂からロープウェイで登れば、尾道水道と造船所、瀬戸内海の島々を一望するノスタルジックな風景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">呉・大和ミュージアム</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて東洋一の軍港・造船の街として栄えた呉の歴史を伝える博物館。館内中央に鎮座する10分の1スケールの戦艦「大和」の精巧な復元モデルは圧巻です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 広島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 広島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-4 sm:px-6 lg:px-8 mt-20 text-center text-xs">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex justify-center gap-4 text-stone-300">
            <Link href="/" className="hover:text-white">トップページ</Link>
            <Link href="/features" className="hover:text-white">特集一覧</Link>
            <Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link>
          </div>
          <p>© 2026 クラウドトラベル (croud-travel.pages.dev) All Rights Reserved.</p>
        </div>
      </footer>
    
      <HubRelatedPosts currentSlug="furusato-tax-miyajima-aki-momijidani-autumn-stay" />
</div>
  );
}
