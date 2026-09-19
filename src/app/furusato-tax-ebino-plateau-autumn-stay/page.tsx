import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'えびの高原白紫池の黄金ススキ＆霧島連山の紅葉・京町温泉の源泉宿と極上宮崎牛 | クラウドトラベルふるさと納税',
  description: '10月下旬〜11月中旬に見頃を迎えるえびの高原の黄金色に輝くススキ野原と火口湖の紅葉。川内川沿いに湧く名湯「京町温泉」の隠れ宿で、源泉かけ流しと日本一の宮崎牛炭火焼きをふるさと納税で堪能する秋旅。',
  keywords: ['えびの高原・京町温泉・霧島連山 紅葉 観光', '宮崎県 10月 11月 旅行', 'えびの高原ススキ紅葉＆京町温泉宮崎牛', 'ふるさと納税 温泉宿泊券', 'えびの高原ホテル', '京町温泉 玉泉館', '京町温泉 あけぼの荘', '楽天ふるさと納税 宿泊クーポン'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-ebino-plateau-autumn-stay',
  },
  openGraph: {
    title: 'えびの高原白紫池の黄金ススキ＆霧島連山の紅葉・京町温泉の源泉宿と極上宮崎牛',
    description: '10月下旬〜11月中旬に見頃を迎えるえびの高原の黄金色に輝くススキ野原と火口湖の紅葉。川内川沿いに湧く名湯「京町温泉」の隠れ宿で、源泉かけ流しと日本一の宮崎牛炭火焼きをふるさと納税で堪能する秋旅。',
    url: 'https://croud-travel.com/furusato-tax-ebino-plateau-autumn-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "えびの高原白紫池の黄金ススキ＆霧島連山の紅葉・京町温泉の源泉宿と極上宮崎牛",
    "description": "10月下旬〜11月中旬に見頃を迎えるえびの高原の黄金色に輝くススキ野原と火口湖の紅葉。川内川沿いに湧く名湯「京町温泉」の隠れ宿で、源泉かけ流しと日本一の宮崎牛炭火焼きをふるさと納税で堪能する秋旅。",
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
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-ebino-plateau-autumn-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "えびの高原・京町温泉・霧島連山の秋（10月〜11月）のベストシーズン・見頃はいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月下旬〜11月中旬の標高1,200mの黄金ススキと火口湖を囲む紅葉が見頃のピークとなります。山々や渓谷の美しいグラデーションとともに、旬を迎える地場食材を存分にお楽しみいただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天ふるさと納税のトラベルクーポンは予約時にすぐ使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、寄付完了後最短即日〜数日以内に楽天トラベルのマイクーポンに付与されます。予約時にクーポンを適用することで、最大30%相当の宿泊補助が受けられます。"
        }
      },
      {
        "@type": "Question",
        "name": "秋のえびの高原・京町温泉・霧島連山旅行における服装や持ち物のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10月〜11月のえびの高原・京町温泉・霧島連山は朝夕の冷え込みが強まります。日中は快適な服装で問題ありませんが、朝夕の散策や露天風呂への移動時には防寒着（フリースやジャケット等）を必ずご用意ください。"
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
              宮崎県 / えびの高原・京町温泉・霧島連山
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            えびの高原白紫池の黄金ススキ＆霧島連山の紅葉・京町温泉の源泉宿と極上宮崎牛
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            霧島連山に広がる黄金のススキの海。南九州屈指の良泉・京町温泉でとろける宮崎牛を味わう至高の秋旅。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：10月下旬〜11月中旬の標高1,200mの黄金ススキと火口湖を囲む紅葉</span>
            <span className="flex items-center gap-1">♨️ 自慢の泉質＆旬の味覚会席</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円で高級宿ステイ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950 border-b-2 border-amber-600 pb-3 mb-6">
            はじめに：秋のえびの高原・京町温泉・霧島連山で味わう絶景と至高の温泉時間
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            10月から11月にかけての宮崎県・えびの高原・京町温泉・霧島連山は、豊かな自然美と歴史情緒が鮮やかに交差する特別なシーズンを迎えます。澄んだ秋空の下、山肌や渓谷が織りなす錦秋のパノラマは息をのむ美しさで、訪れる人々を魅了してやみません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            心地よい秋風を感じながら名所を巡ったあとは、名湯に身を浸して日々の喧騒を忘れ、夜には秋の実りを凝縮した贅沢な郷土会席に舌鼓を打つ――これこそが大人の旅にふさわしい至高の贅沢です。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、えびの高原・京町温泉・霧島連山エリアで高い評価を誇るおすすめの名宿3選を徹底解説します。楽天ふるさと納税の宿泊クーポンを活用すれば、実質自己負担わずか2,000円で憧れの高級旅館や温泉宿にお得に宿泊可能です。秋の特別な旅行プランをぜひご検討ください。
          </p>
        </section>

        {/* Highlight Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> えびの高原・京町温泉・霧島連山 秋旅の3大魅力ポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">① 圧巻の秋色パノラマ絶景</div>
              <p className="text-xs sm:text-sm text-slate-600">
                10月〜11月限定の美しいグラデーション。清流や奇岩、雄大な山並みと調和した絶景を満喫できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">② 歴史と効能を誇る名湯</div>
              <p className="text-xs sm:text-sm text-slate-600">
                湯量豊富な天然温泉や情緒ある露天風呂。秋の爽やかな外気を感じながら心身を優しく解きほぐせます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">③ 実りの秋を味わう郷土美食</div>
              <p className="text-xs sm:text-sm text-slate-600">
                厳選されたブランド和牛や旬の海の幸・山の幸、採れたての新米を味わう贅沢な秋会席。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">えびの高原ホテル</h3>
              <p className="text-xs text-slate-500">えびのこうげんほてる</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.3点 <span className="text-xs font-normal text-slate-600">(108件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/191683/191683.jpg"
                alt="えびの高原ホテルの外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  標高1,200m、霧島錦江湾国立公園の中心に位置する雲上の高原温泉リゾート。硫黄山を望む絶景露天風呂と、宮崎牛や黒豚を盛り込んだ高原会席。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  単純温泉（低張性中性温泉） / 展望大浴場・露天風呂・サウナ / 効能：神経痛、筋肉痛、冷え性、疲労回復、健康増進
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR吉都線「えびの駅」より車で約30分 / 宮崎道「えびのIC」より車で約30分 / 鹿児島空港より車で約50分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                特選宮崎牛のすき焼き鍋会席、霧島黒豚のしゃぶしゃぶ、宮崎名物チキン南蛮、ヤマメの塩焼き、季節の山菜小鉢
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                白紫池や不動池の紅葉ハイキングの拠点。標高1,200mの澄み切った星空と、秋風そよぐ露天風呂での温泉浴は息をのむ美しさ。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D191683"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Hotel 2 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 02</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">京町温泉 玉泉館</h3>
              <p className="text-xs text-slate-500">きょうまちおんせん ぎょくせんかん</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 3.87点 <span className="text-xs font-normal text-slate-600">(198件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/140849/140849.jpg"
                alt="京町温泉 玉泉館の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  川内川の清流沿いに佇む、大正時代創業の歴史ある老舗温泉旅館。宮崎屈指の湧出量を誇る源泉かけ流しの天然温泉と、南九州の旬菜会席。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  単純温泉（弱アルカリ性源泉かけ流し） / 庭園露天風呂・内湯 / 効能：神経痛、関節痛、疲労回復、冷え性、美肌
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR吉都線「京町温泉駅」より徒歩約5分 / 宮崎自動車道「えびのIC」より車で約7分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                宮崎牛のステーキ会席、川内川名物天然鮎の塩焼き、地元えびの産ひのひかりの新米、手作り田舎料理の小鉢
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                昔ながらの温泉情緒が漂う静かな宿。トロトロの肌触りの源泉かけ流しに浸かり、心温まる家庭的なもてなしに癒やされます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D140849"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Hotel 3 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 03</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">京町温泉 あけぼの荘</h3>
              <p className="text-xs text-slate-500">きょうまちおんせん あけぼのそう</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.39点 <span className="text-xs font-normal text-slate-600">(142件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/43906/43906.jpg"
                alt="京町温泉 あけぼの荘の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  緑豊かな日本庭園と良質な天然温泉が自慢の純和風旅館。源泉100%かけ流しの柔らかいお湯と、厳選された宮崎牛・地頭鶏の炭火会席が評判。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  アルカリ性単純温泉 / 源泉100%かけ流し大浴場・露天風呂 / 効能：美肌、神経痛、筋肉痛、冷え性、五十肩
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR京町温泉駅より徒歩約8分 / えびのICより車で約8分 / 鹿児島空港より車で約40分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                宮崎牛とみやざき地頭鶏の炭火焼きコース、手作り郷土会席、えびの高原野菜の炊き合わせ、名物鯉こく（要予約）
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                化粧水のような美肌温泉でゆったり長湯。えびの高原の黄金ススキ散策の後に、静かな庭園を眺めながら宮崎牛を味わう至福のひととき。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D43906"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Furusato Tax Guide Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-200">
            💡 楽天ふるさと納税で「宿泊クーポン」を賢く手に入れる3ステップ
          </h3>
          <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
            楽天ふるさと納税を利用すれば、宮崎県内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 1. 控除上限額を確認</div>
              <p className="text-xs text-stone-300">
                ご自身の年収や家族構成から、自己負担2,000円で寄付できる年間控除上限額をシミュレーションします。
              </p>
            </div>
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 2. 自治体へ寄付</div>
              <p className="text-xs text-stone-300">
                楽天ふるさと納税から対象自治体の「楽天トラベルクーポン返礼品」を選んで寄付を申し込みます。
              </p>
            </div>
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 3. 予約時にクーポン適用</div>
              <p className="text-xs text-stone-300">
                付与されたクーポンを楽天トラベルの予約画面で選択するだけで、即座に宿泊代金が割引されます。
              </p>
            </div>
          </div>
          <div className="bg-amber-950/60 p-4 rounded-xl border border-amber-500/30 text-xs sm:text-sm text-amber-100 flex items-start gap-2">
            <span>ℹ️</span>
            <span>
              <strong>ポイント還元の二重取り：</strong>楽天カード決済や「お買い物マラソン」「0と5のつく日」を併用すると、寄付額に対して高還元率で楽天ポイントも獲得でき、さらにお得になります。
            </span>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-6">
            よくある質問（FAQ）
          </h3>
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> えびの高原・京町温泉・霧島連山の秋の見頃時期はいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年10月下旬〜11月中旬の標高1,200mの黄金ススキと火口湖を囲む紅葉が見頃となります。標高差や気候に合わせて色づきが移り変わり、長期間にわたって楽しめます。
              </p>
            </div>
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> ふるさと納税クーポンと楽天トラベルの他セールクーポンは併用できますか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                楽天トラベルでは、原則として自治体発行のふるさと納税クーポンと一部の宿クーポン等を組み合わせて利用可能です。予約ステップで適用可能なクーポンが自動表示されます。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> 秋の旅行時に必要な服装や装備は？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                10月〜11月のえびの高原・京町温泉・霧島連山は朝夕の冷え込みが予想されます。日中は薄手のアウターで快適ですが、早朝や夜間、散策時には厚手のフリースやジャケット、歩きやすい靴をご用意ください。
              </p>
            </div>
          </div>
        </section>

        {/* Navigation / Back to List */}
        <div className="text-center py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 font-bold text-sm sm:text-base transition"
          >
            ← トップページ・特集一覧に戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
