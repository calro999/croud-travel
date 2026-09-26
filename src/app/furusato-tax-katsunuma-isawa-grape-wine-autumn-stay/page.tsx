import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '勝沼ぶどう郷のワイナリー巡りと石和温泉！山梨の新酒甲州ワイン・甲州牛＆ほうとうを味わう秋旅 | クラウドトラベルふるさと納税',
  description: '10月・11月の山梨・勝沼＆石和温泉特集！ブドウ畑が黄金に染まる勝沼ぶどう郷と11月3日解禁の「山梨ヌーボー（甲州新酒ワイン）」、山梨随一の湧出量を誇る石和温泉の美肌美人の湯、甲州牛ステーキや具だくさん名物ほうとうをふるさと納税で巡る大人の秋旅。',
  keywords: ['笛吹・石和温泉・勝沼ぶどう郷 紅葉 観光', '山梨県 10月 11月 旅行', '山梨・勝沼ワイン＆石和温泉特集', 'ふるさと納税 温泉宿泊券', '石和温泉　ホテル平安', '石和温泉　石和びゅーほてる', 'リブマックスリゾート石和温泉', '楽天ふるさと納税 宿泊クーポン'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-katsunuma-isawa-grape-wine-autumn-stay',
  },
  openGraph: {
    title: '勝沼ぶどう郷のワイナリー巡りと石和温泉！山梨の新酒甲州ワイン・甲州牛＆ほうとうを味わう秋旅',
    description: '10月・11月の山梨・勝沼＆石和温泉特集！ブドウ畑が黄金に染まる勝沼ぶどう郷と11月3日解禁の「山梨ヌーボー（甲州新酒ワイン）」、山梨随一の湧出量を誇る石和温泉の美肌美人の湯、甲州牛ステーキや具だくさん名物ほうとうをふるさと納税で巡る大人の秋旅。',
    url: 'https://croud-travel.com/furusato-tax-katsunuma-isawa-grape-wine-autumn-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "勝沼ぶどう郷のワイナリー巡りと石和温泉！山梨の新酒甲州ワイン・甲州牛＆ほうとうを味わう秋旅",
    "description": "10月・11月の山梨・勝沼＆石和温泉特集！ブドウ畑が黄金に染まる勝沼ぶどう郷と11月3日解禁の「山梨ヌーボー（甲州新酒ワイン）」、山梨随一の湧出量を誇る石和温泉の美肌美人の湯、甲州牛ステーキや具だくさん名物ほうとうをふるさと納税で巡る大人の秋旅。",
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
    "datePublished": "2026-09-22",
    "dateModified": "2026-09-22",
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-katsunuma-isawa-grape-wine-autumn-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "笛吹・石和温泉・勝沼ぶどう郷の秋（10月〜11月）のベストシーズン・見どころはいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月〜11月中旬（ぶどう狩り・11月3日山梨ヌーボー解禁・石和温泉紅葉・甲州牛・ほうとう）が見頃のピークとなります。山々や景勝地の鮮やかなグラデーションとともに、旬を迎える極上の地場食材を心ゆくまで満喫いただけます。"
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
        "name": "秋の笛吹・石和温泉・勝沼ぶどう郷旅行における服装や持ち物のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10月〜11月の笛吹・石和温泉・勝沼ぶどう郷は昼夜の寒暖差が大きくなります。日中は快適に散策できますが、朝夕の散策や露天風呂への移動時には防寒用のアウター（フリースやジャケット等）を必ずご用意ください。"
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
              山梨県 / 笛吹・石和温泉・勝沼ぶどう郷
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            勝沼ぶどう郷のワイナリー巡りと石和温泉！山梨の新酒甲州ワイン・甲州牛＆ほうとうを味わう秋旅
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            実りの甲州路を巡るワイナリー探訪と、名湯石和の美肌温泉・秋の味覚のマリアージュ
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：10月〜11月中旬（ぶどう狩り・11月3日山梨ヌーボー解禁・石和温泉紅葉・甲州牛・ほうとう）</span>
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
          <span className="text-stone-900 font-medium">山梨・勝沼ワイン＆石和温泉特集</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        {/* Introduction */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3 border-b border-stone-200 pb-4">
            <span className="text-2xl">🍁</span>
            10月・11月に訪れるべき理由：秋の笛吹・石和温泉・勝沼ぶどう郷の魅力
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              山梨県を代表する景勝地・温泉地である笛吹・石和温泉・勝沼ぶどう郷は、秋の訪れとともに最も華やかで風情あふれる季節を迎えます。
              澄み渡る秋空の下、木々が鮮やかなグラデーションに包まれ、雄大な自然美と歴史情緒が旅人の心を深く魅了します。
            </p>
            <p>
              この時期は気候も穏やかで、散策やアクティビティ、そして冷え込む朝夕の温泉浴にまさに最高のコンディション。
              さらに秋は収穫の季節であり、地元の旬の恵みをふんだんに使った会席料理や名物グルメが食卓を彩ります。
            </p>
            <div className="bg-amber-50/80 rounded-xl p-5 border-l-4 border-amber-500 mt-6 space-y-2">
              <div className="font-bold text-amber-900">✨ 秋旅行のハイライトポイント</div>
              <ul className="list-disc list-inside text-stone-700 text-xs sm:text-sm space-y-1">
                <li><strong>紅葉の見頃ピーク：</strong> 10月〜11月中旬（ぶどう狩り・11月3日山梨ヌーボー解禁・石和温泉紅葉・甲州牛・ほうとう）</li>
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
            秋の笛吹・石和温泉・勝沼ぶどう郷を満喫する1泊2日モデルコース
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
                  <div className="text-xs text-stone-400 font-medium mt-2">いさわおんせん ほてるへいあん</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">石和温泉　ホテル平安</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 3.46 <span className="text-xs text-stone-500 font-normal">(206件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥8,030〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                石和温泉の中心に位置し、広々とした大浴場と庭園露天風呂で良質な天然温泉を満喫できる温泉ホテル。甲州の味覚を取り入れた和食会席と飲み放題プランが好評。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">アルカリ性単純温泉（pH8.5以上・自家源泉） / 庭園露天風呂・大浴場 / 効能：美肌、神経痛、筋肉痛、冷え性、関節痛、疲労回復</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">甲州牛の陶板焼き会席、山梨名物かぼちゃほうとう、甲州ワインビーフ、富士桜ポークのしゃぶしゃぶ、地場産巨峰</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">勝沼のワイナリー巡りやフルーツラインへのアクセス抜群。広々とした露天風呂でアルカリ性美肌温泉に浸かり、ワインと名物料理を満喫。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">JR中央本線「石和温泉駅」より徒歩約15分（無料送迎あり要予約） / 中央自動車道「一宮御坂IC」より車で約10分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72719%2F72719.html"
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
                  <div className="text-xs text-stone-400 font-medium mt-2">いさわおんせん いさわびゅーほてる</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">石和温泉　石和びゅーほてる</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.04 <span className="text-xs text-stone-500 font-normal">(1789件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥6,050〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                閑静な温泉街に佇み、姉妹館との湯めぐりが楽しめる大型温泉ホテル。自家源泉の滑らかな温泉と、甲州牛や季節の味覚を彩り豊かに盛り込んだ創作会席が自慢。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">アルカリ性単純温泉 / 庭園露天風呂・大浴場・姉妹館湯めぐり / 効能：美肌効果、神経痛、五十肩、冷え性、疲労回復</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">甲州牛ステーキ付き特選会席、旬魚のお造り、名物手打ちほうとう小鍋、山梨県産ワインセレクション</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">姉妹館「花いさわ」「春日居びゅーほてる」への無料湯めぐりバス運行。多彩な湯殿を楽しみながら、山梨の豊かな秋の味覚を堪能。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">石和温泉駅より徒歩約20分（無料送迎あり） / 一宮御坂ICより車で約10分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39460%2F39460.html"
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
                  <div className="text-xs text-stone-400 font-medium mt-2">りぶまっくすりぞーと いさわおんせん</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">リブマックスリゾート石和温泉</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 3.22 <span className="text-xs text-stone-500 font-normal">(737件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥3,803〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                石和温泉街に位置するスタイリッシュな温泉リゾートホテル。広々とした内湯・露天風呂と、快適な客室空間をリーズナブルに提供するコスパ抜群の宿。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">アルカリ性単純温泉 / 露天風呂・大浴場・サウナ / 効能：疲労回復、健康増進、冷え性、筋肉痛、神経痛</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">和洋バイキングディナー、山梨郷土料理コーナー、地元産フルーツデザート、甲州地ワインバー</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">石和温泉駅から車で数分の好アクセス。勝沼のワイナリー巡りや御坂峠の富士山展望台への観光拠点として気軽に利用可能。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">JR石和温泉駅より車で約5分 / 一宮御坂ICより車で約8分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29786%2F29786.html"
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
                紅葉の見頃ピーク（10月〜11月中旬（ぶどう狩り・11月3日山梨ヌーボー解禁・石和温泉紅葉・甲州牛・ほうとう））は週末を中心に観光客で賑わいます。ゆっくり散策や温泉を楽しみたい方は平日の宿泊や、早朝の観光スポット訪問がおすすめです。
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

      
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link
              href="/furusato-tax-shima-onsen-shimablue-autumn-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  四万温泉・奥四万湖の奇跡の四万ブルー紅葉＆千と千尋の木造宿！四万川渓谷露天×ふるさと納税完全ガイド【2026年最新秋旅】群馬
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/traditional-ishikawa-wajima-nuri-lacquer-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【2026年】輪島塗の器で味わう能登前寿司！能登復興応援＆和倉温泉・七尾湾オーシャン宿5選 | 日本全国・旅宿クラウド
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-nagano-azumino-hotaka-autumn-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  長野・安曇野の田園紅葉＆北アルプス眺望！穂高温泉郷の秘湯と名水わさび・信州サーモン | クラウドトラベルふるさと納税
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-three-great-bell-towers-historic-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  日本三大名鐘＆心の琴線に響く梵鐘・悠久の寺町宿×ふるさと納税完全ガイド【2026年最新】知恩院・平等院・三井寺
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/hokkaido"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                北海道の宿・温泉
              </Link>
              <Link
                href="/prefectures/okayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岡山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamagata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山形県の宿・温泉
              </Link>
              <Link
                href="/prefectures/aomori"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                青森県の宿・温泉
              </Link>
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
