import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '阿蘇外輪山と大観峰の黄金ススキ！黒川温泉入湯手形露天めぐり・熊本あか牛＆馬刺しを味わう秋の九州旅 | クラウドトラベルふるさと納税',
  description: '10月・11月の熊本・阿蘇＆黒川温泉特集！阿蘇カルデラと大観峰に広がる一面の黄金ススキ、田の原川沿いに佇む風情ある黒川温泉の入湯手形・露天風呂めぐり、赤身の旨みが詰まった熊本あか牛ステーキと特選馬刺しをふるさと納税で満喫。',
  keywords: ['阿蘇・南小国・黒川温泉 紅葉 観光', '熊本県 10月 11月 旅行', '熊本・阿蘇＆黒川温泉特集', 'ふるさと納税 温泉宿泊券', '黒川温泉　湯峡の響き　優彩', '黒川温泉　旅館　美里', '黒川温泉　夢龍胆', '楽天ふるさと納税 宿泊クーポン'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-aso-kurokawa-autumn-stay',
  },
  openGraph: {
    title: '阿蘇外輪山と大観峰の黄金ススキ！黒川温泉入湯手形露天めぐり・熊本あか牛＆馬刺しを味わう秋の九州旅',
    description: '10月・11月の熊本・阿蘇＆黒川温泉特集！阿蘇カルデラと大観峰に広がる一面の黄金ススキ、田の原川沿いに佇む風情ある黒川温泉の入湯手形・露天風呂めぐり、赤身の旨みが詰まった熊本あか牛ステーキと特選馬刺しをふるさと納税で満喫。',
    url: 'https://croud-travel.com/furusato-tax-aso-kurokawa-autumn-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "阿蘇外輪山と大観峰の黄金ススキ！黒川温泉入湯手形露天めぐり・熊本あか牛＆馬刺しを味わう秋の九州旅",
    "description": "10月・11月の熊本・阿蘇＆黒川温泉特集！阿蘇カルデラと大観峰に広がる一面の黄金ススキ、田の原川沿いに佇む風情ある黒川温泉の入湯手形・露天風呂めぐり、赤身の旨みが詰まった熊本あか牛ステーキと特選馬刺しをふるさと納税で満喫。",
    "author": {
      "@type": "Organization",
      "name": "クラウドトラベル編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラウドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-aso-kurokawa-autumn-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "阿蘇・南小国・黒川温泉の秋（10月〜11月）のベストシーズン・見どころはいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月中旬〜11月下旬（阿蘇草千里・大観峰の黄金ススキ、黒川温泉もみじ紅葉・あか牛・新米）が見頃のピークとなります。山々や景勝地の鮮やかなグラデーションとともに、旬を迎える極上の地場食材を心ゆくまで満喫いただけます。"
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
        "name": "秋の阿蘇・南小国・黒川温泉旅行における服装や持ち物のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10月〜11月の阿蘇・南小国・黒川温泉は昼夜の寒暖差が激しくなります。日中は長袖シャツで快適ですが、早朝や夕暮れの散策・露天風呂への移動時には防寒アウター（フリースやダウン等）を必ずご用意ください。"
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
              熊本県 / 阿蘇・南小国・黒川温泉
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            阿蘇外輪山と大観峰の黄金ススキ！黒川温泉入湯手形露天めぐり・熊本あか牛＆馬刺しを味わう秋の九州旅
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            カルデラを黄金に染めるススキの海と、渓谷の湯けむり漂う黒川の露天めぐり
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：10月中旬〜11月下旬（阿蘇草千里・大観峰の黄金ススキ、黒川温泉もみじ紅葉・あか牛・新米）</span>
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
          <span className="text-stone-900 font-medium">熊本・阿蘇＆黒川温泉特集</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        {/* Introduction */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3 border-b border-stone-200 pb-4">
            <span className="text-2xl">🍁</span>
            10月・11月に訪れるべき理由：秋の阿蘇・南小国・黒川温泉の魅力
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              熊本県を代表する景勝地・温泉地である阿蘇・南小国・黒川温泉は、秋の訪れとともに最も華やかで風情あふれる季節を迎えます。
              澄み渡る秋空の下、木々が鮮やかなグラデーションに包まれ、雄大な自然美と歴史情緒が旅人の心を深く魅了します。
            </p>
            <p>
              この時期は気候も穏やかで、散策やアクティビティ、そして冷え込む朝夕の温泉浴にまさに最高のコンディション。
              さらに秋は収穫の季節であり、地元の旬の恵みをふんだんに使った会席料理や名物グルメが食卓を彩ります。
            </p>
            <div className="bg-amber-50/80 rounded-xl p-5 border-l-4 border-amber-500 mt-6 space-y-2">
              <div className="font-bold text-amber-900">✨ 秋旅行のハイライトポイント</div>
              <ul className="list-disc list-inside text-stone-700 text-xs sm:text-sm space-y-1">
                <li><strong>紅葉の見頃ピーク：</strong> 10月中旬〜11月下旬（阿蘇草千里・大観峰の黄金ススキ、黒川温泉もみじ紅葉・あか牛・新米）</li>
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
            秋の阿蘇・南小国・黒川温泉を満喫する1泊2日モデルコース
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
                  <div className="text-xs text-stone-400 font-medium mt-2">くろかわおんせん ゆきょうのひびき ゆうさい</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">黒川温泉　湯峡の響き　優彩</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.3 <span className="text-xs text-stone-500 font-normal">(2046件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥11,627〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                黒川温泉の入口に建ち、敷地内に天文台（本格天体望遠鏡）を持つ大型温泉旅館。渓流沿いの多彩な露天風呂・大浴場と、熊本の贅を集めた肥後会席が自慢。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">弱アルカリ性単純温泉・硫酸塩温泉 / 渓流露天風呂「樹彩の湯」・檜風呂・竹林風呂 / 効能：神経痛、筋肉痛、冷え性、疲労回復、関節痛、美肌</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">熊本県産あか牛の溶岩焼き、特選霜降り馬刺し、山女魚の塩焼き、南小国産コシヒカリ、熊本の地酒</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">館内だけで湯めぐりが完結するほどの多彩な湯殿。澄み切った秋の夜空を専用天文台から眺める星空観察ツアーも大人気。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">JR豊肥本線「阿蘇駅」より路線バスで約50分（黒川温泉バス停より送迎あり） / 九州自動車道「熊本IC」より車で約90分 / 大分道「日田IC」より車で約60分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31796%2F31796.html"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <div className="text-xs text-stone-400 font-medium mt-2">くろかわおんせん りょかん みさと</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">黒川温泉　旅館　美里</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.62 <span className="text-xs text-stone-500 font-normal">(447件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥14,300〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                黒川温泉街の中心に位置し、硫黄がほのかに香る湯花たっぷりの名湯を持つ純和風温泉旅館。時間によって透明から乳白色・エメラルドグリーンへ変化する神秘の湯が人気。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">単純硫黄温泉（硫化水素型） / 露天風呂・大浴場・貸切風呂 / 効能：慢性皮膚病、慢性婦人病、きりきず、糖尿病、高血圧症、美肌</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">あか牛の朴葉味噌焼き、熊本直送の極上馬刺し盛り、地元野菜の田舎風煮物、小国郷の手作り豆腐</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">温泉街の散策に最適な好立地。入湯手形を持って外湯めぐりを楽しんだ後、色の変わる自家源泉で至福の湯浴みを満喫。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">黒川温泉バス停より徒歩約3分（送迎対応可） / 日田ICより国道212号経由で約60分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67258%2F67258.html"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <div className="text-xs text-stone-400 font-medium mt-2">くろかわおんせん ゆめりんどう</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">黒川温泉　夢龍胆</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.27 <span className="text-xs text-stone-500 font-normal">(405件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥9,900〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                田の原川の渓流沿いに佇み、せせらぎの音と豊かな自然林に包まれた癒やしの温泉旅館。開放感あふれる渓流露天風呂と、滋味豊かな創作会席料理が好評。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">含芒硝-弱食塩泉（ナトリウム-塩化物・硫酸塩温泉） / 混浴露天風呂「龍胆の湯」・女性専用露天「せせらぎの湯」・足湯 / 効能：神経痛、五十肩、冷え性、美肌</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">肥後牛（あか牛）の陶板焼き会席、特選馬刺し、清流鮎の塩焼き、季節の小国野菜せいろ蒸し</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">川のせせらぎを間近に感じる大露天風呂。紅葉に彩られた渓流の景観を眺めながら、心解きほぐす極上の時間を過ごせます。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">阿蘇駅よりバス約50分 / 熊本空港より九州横断バスで約120分 / 日田ICより車で約60分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4725%2F4725.html"
                  target="_blank"
                  rel="noopener noreferrer"
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
                紅葉の見頃ピーク（10月中旬〜11月下旬（阿蘇草千里・大観峰の黄金ススキ、黒川温泉もみじ紅葉・あか牛・新米））は週末を中心に観光客で賑わいます。ゆっくり散策や温泉を楽しみたい方は平日の宿泊や、早朝の観光スポット訪問がおすすめです。
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

      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-4 sm:px-6 lg:px-8 mt-20 text-center text-xs">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex justify-center gap-4 text-stone-300">
            <Link href="/" className="hover:text-white">トップページ</Link>
            <Link href="/features" className="hover:text-white">特集一覧</Link>
            <Link href="/privacy" className="hover:text-white">プライバシーポリシー</Link>
          </div>
          <p>© 2026 クラウドトラベル (croud-travel.com) All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
