import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '黒部峡谷トロッコ電車の紅葉パノラマと宇奈月温泉！富山湾の紅ズワイガニ・白えびと日本屈指の透明美肌湯 | クラウドトラベルふるさと納税',
  description: '10月・11月の富山・黒部峡谷＆宇奈月温泉特集！黒部川の深いV字峡谷を縫うトロッコ電車から見上げる鮮烈な紅葉絵巻、黒部川上流の黒薙から引く日本随一の透明度を誇る弱アルカリ性単純温泉、富山湾直送の紅ズワイガニ・白えび・寒ブリをふるさと納税で味わう秋旅。',
  keywords: ['黒部・宇奈月温泉・黒部峡谷 紅葉 観光', '富山県 10月 11月 旅行', '富山・黒部峡谷＆宇奈月温泉特集', 'ふるさと納税 温泉宿泊券', '黒部峡谷・宇奈月温泉　ホテル黒部', '人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭', '宇奈月温泉の老舗旅館　延対寺荘', '楽天ふるさと納税 宿泊クーポン'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-unazuki-kurobe-trolley-autumn-stay',
  },
  openGraph: {
    title: '黒部峡谷トロッコ電車の紅葉パノラマと宇奈月温泉！富山湾の紅ズワイガニ・白えびと日本屈指の透明美肌湯',
    description: '10月・11月の富山・黒部峡谷＆宇奈月温泉特集！黒部川の深いV字峡谷を縫うトロッコ電車から見上げる鮮烈な紅葉絵巻、黒部川上流の黒薙から引く日本随一の透明度を誇る弱アルカリ性単純温泉、富山湾直送の紅ズワイガニ・白えび・寒ブリをふるさと納税で味わう秋旅。',
    url: 'https://croud-travel.com/furusato-tax-unazuki-kurobe-trolley-autumn-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "黒部峡谷トロッコ電車の紅葉パノラマと宇奈月温泉！富山湾の紅ズワイガニ・白えびと日本屈指の透明美肌湯",
    "description": "10月・11月の富山・黒部峡谷＆宇奈月温泉特集！黒部川の深いV字峡谷を縫うトロッコ電車から見上げる鮮烈な紅葉絵巻、黒部川上流の黒薙から引く日本随一の透明度を誇る弱アルカリ性単純温泉、富山湾直送の紅ズワイガニ・白えび・寒ブリをふるさと納税で味わう秋旅。",
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
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-unazuki-kurobe-trolley-autumn-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "黒部・宇奈月温泉・黒部峡谷の秋（10月〜11月）のベストシーズン・見どころはいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月中旬〜11月中旬（黒部峡谷トロッコ電車紅葉ピーク・やまびこ遊歩道・富山湾紅ズワイガニ解禁・寒ブリ）が見頃のピークとなります。山々や景勝地の鮮やかなグラデーションとともに、旬を迎える極上の地場食材を心ゆくまで満喫いただけます。"
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
        "name": "秋の黒部・宇奈月温泉・黒部峡谷旅行における服装や持ち物のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10月〜11月の黒部・宇奈月温泉・黒部峡谷は昼夜の寒暖差が大きくなります。日中は快適に散策できますが、朝夕の散策や露天風呂への移動時には防寒用のアウター（フリースやジャケット等）を必ずご用意ください。"
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
              富山県 / 黒部・宇奈月温泉・黒部峡谷
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            黒部峡谷トロッコ電車の紅葉パノラマと宇奈月温泉！富山湾の紅ズワイガニ・白えびと日本屈指の透明美肌湯
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            V字峡を染める紅葉トロッコの旅と、富山湾の至宝・名湯宇奈月の透明美肌湯
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：10月中旬〜11月中旬（黒部峡谷トロッコ電車紅葉ピーク・やまびこ遊歩道・富山湾紅ズワイガニ解禁・寒ブリ）</span>
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
          <span className="text-stone-900 font-medium">富山・黒部峡谷＆宇奈月温泉特集</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        {/* Introduction */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3 border-b border-stone-200 pb-4">
            <span className="text-2xl">🍁</span>
            10月・11月に訪れるべき理由：秋の黒部・宇奈月温泉・黒部峡谷の魅力
          </h2>
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              富山県を代表する景勝地・温泉地である黒部・宇奈月温泉・黒部峡谷は、秋の訪れとともに最も華やかで風情あふれる季節を迎えます。
              澄み渡る秋空の下、木々が鮮やかなグラデーションに包まれ、雄大な自然美と歴史情緒が旅人の心を深く魅了します。
            </p>
            <p>
              この時期は気候も穏やかで、散策やアクティビティ、そして冷え込む朝夕の温泉浴にまさに最高のコンディション。
              さらに秋は収穫の季節であり、地元の旬の恵みをふんだんに使った会席料理や名物グルメが食卓を彩ります。
            </p>
            <div className="bg-amber-50/80 rounded-xl p-5 border-l-4 border-amber-500 mt-6 space-y-2">
              <div className="font-bold text-amber-900">✨ 秋旅行のハイライトポイント</div>
              <ul className="list-disc list-inside text-stone-700 text-xs sm:text-sm space-y-1">
                <li><strong>紅葉の見頃ピーク：</strong> 10月中旬〜11月中旬（黒部峡谷トロッコ電車紅葉ピーク・やまびこ遊歩道・富山湾紅ズワイガニ解禁・寒ブリ）</li>
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
            秋の黒部・宇奈月温泉・黒部峡谷を満喫する1泊2日モデルコース
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
                  <div className="text-xs text-stone-400 font-medium mt-2">くろべきょうこく うなづきおんせん ほてるくろべ</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">黒部峡谷・宇奈月温泉　ホテル黒部</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.45 <span className="text-xs text-stone-500 font-normal">(1246件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥6,600〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                宇奈月温泉で最も黒部峡谷の奥に位置し、全客室や露天風呂から黒部川とトロッコ電車を見晴らす絶景宿。富山湾の新鮮な海の幸と名湯を満喫。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">弱アルカリ性単純温泉（黒薙温泉からの引き湯・無色透明） / 峡谷展望露天風呂・大浴場 / 効能：美肌、神経痛、筋肉痛、関節痛、冷え性、疲労回復</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">富山湾直送紅ズワイガニ姿盛り、白えびのお造り・かき揚げ、富山県産黒毛和牛の陶板焼き、富山米コシヒカリ</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">露天風呂の目の前を紅葉に包まれたトロッコ電車が走り抜ける唯一無二の絶景。宇奈月随一のロケーションで心洗われる滞在。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">富山地方鉄道「宇奈月温泉駅」より徒歩約10分（無料送迎あり） / 北陸自動車道「黒部IC」より車で約20分 / 北陸新幹線「黒部宇奈月温泉駅」より車で約20分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40625%2F40625.html"
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
                  <div className="text-xs text-stone-400 font-medium mt-2">うなづきおんせん さんりゅうてい</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.7 <span className="text-xs text-stone-500 font-normal">(640件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥22,300〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                黒部川のほとりに佇む、全客室や料理へのこだわりが光る大人の美食旅館。美肌の名湯を引く客室露天風呂と、富山湾の恵みを極めた贅沢会席が絶賛される宿。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">アルカリ性単純温泉（源泉かけ流し） / 露天風呂付き客室・大浴場・貸切風呂 / 効能：美肌作用（角質軟化・保湿）、神経痛、五十肩、冷え性</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">極上活紅ズワイガニ会席、白えび・寒ブリ・ノドグロの贅沢お造り、氷見牛ステーキ、黒部名水仕込みの郷土料理</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">料理評価が極めて高い美食の隠れ宿。黒部川のせせらぎを聞きながら、プライベートな露天風呂と極上の富山グルメに舌鼓。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">宇奈月温泉駅より徒歩約3分（送迎あり） / 黒部ICより車で約20分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39383%2F39383.html"
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
                  <div className="text-xs text-stone-400 font-medium mt-2">うなづきおんせんのしにせりょかん えんたいじそう</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">宇奈月温泉の老舗旅館　延対寺荘</h3>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-bold px-3 py-1 rounded-lg border border-amber-200 text-sm">
                    ★ 4.3 <span className="text-xs text-stone-500 font-normal">(1570件)</span>
                  </div>
                  <div className="text-xs text-stone-500 mt-1">目安料金: ¥13,200〜</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                創業明治33年、多くの文人墨客に愛されてきた宇奈月温泉を代表する名門老舗旅館。黒部峡谷の断崖に張り出すような絶景露天風呂と、伝統の会席料理が自慢。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-200/70 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">♨️ 温泉・泉質</div>
                  <div className="text-stone-600">弱アルカリ性単純温泉 / 峡谷露天風呂「渓流の湯」・展望大浴場 / 効能：神経痛、筋肉痛、冷え性、関節痛、疲労回復、美肌</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">🍽️ 自慢の料理</div>
                  <div className="text-stone-600">富山の山海旬彩会席、富山湾産紅ズワイガニの甲羅焼き、名水ポークのしゃぶしゃぶ、白えび釜飯</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">✨ 宿の魅力</div>
                  <div className="text-stone-600">川端康成や与謝野晶子も愛した伝統の佇まい。紅葉に彩られた黒部峡谷を見下ろす露天風呂で、歴史と名湯に浸る贅沢な時間。</div>
                </div>
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 mb-1">📍 アクセス</div>
                  <div className="text-stone-600">宇奈月温泉駅より徒歩約5分（無料送迎あり） / 黒部ICより車で約20分</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4804%2F4804.html"
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
                紅葉の見頃ピーク（10月中旬〜11月中旬（黒部峡谷トロッコ電車紅葉ピーク・やまびこ遊歩道・富山湾紅ズワイガニ解禁・寒ブリ））は週末を中心に観光客で賑わいます。ゆっくり散策や温泉を楽しみたい方は平日の宿泊や、早朝の観光スポット訪問がおすすめです。
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
