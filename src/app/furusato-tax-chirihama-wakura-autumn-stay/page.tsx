import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本唯一の波打ち際ドライブ「千里浜なぎさドライブウェイ」夕景＆和倉温泉・極上能登牛と七尾湾秋魚 | クラウドトラベルふるさと納税',
  description: '10月〜11月の澄んだ日本海と夕日を走る千里浜なぎさドライブウェイ。七尾湾を望む名湯「和倉温泉」の海の温泉で温まり、極上能登牛と秋の七尾湾鮮魚・ズワイガニをふるさと納税で堪能する能登応援秋旅特集。',
  keywords: ['能登・千里浜・和倉温泉・七尾湾 紅葉 観光', '石川県 10月 11月 旅行', '千里浜なぎさドライブ夕日＆和倉温泉能登牛', 'ふるさと納税 温泉宿泊券', '和倉温泉 花ごよみ', '和倉温泉 ゆけむりの宿美湾荘', '和倉温泉はまづる', '楽天ふるさと納税 宿泊クーポン'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-chirihama-wakura-autumn-stay',
  },
  openGraph: {
    title: '日本唯一の波打ち際ドライブ「千里浜なぎさドライブウェイ」夕景＆和倉温泉・極上能登牛と七尾湾秋魚',
    description: '10月〜11月の澄んだ日本海と夕日を走る千里浜なぎさドライブウェイ。七尾湾を望む名湯「和倉温泉」の海の温泉で温まり、極上能登牛と秋の七尾湾鮮魚・ズワイガニをふるさと納税で堪能する能登応援秋旅特集。',
    url: 'https://croud-travel.com/furusato-tax-chirihama-wakura-autumn-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本唯一の波打ち際ドライブ「千里浜なぎさドライブウェイ」夕景＆和倉温泉・極上能登牛と七尾湾秋魚",
    "description": "10月〜11月の澄んだ日本海と夕日を走る千里浜なぎさドライブウェイ。七尾湾を望む名湯「和倉温泉」の海の温泉で温まり、極上能登牛と秋の七尾湾鮮魚・ズワイガニをふるさと納税で堪能する能登応援秋旅特集。",
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
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-chirihama-wakura-autumn-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "能登・千里浜・和倉温泉・七尾湾の秋（10月〜11月）のベストシーズン・見どころはいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月〜11月の日本海に沈む感動の夕日と七尾湾の秋の海の幸が見頃のピークとなります。山々や渓谷の美しいグラデーションとともに、旬を迎える地場食材を存分にお楽しみいただけます。"
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
        "name": "秋の能登・千里浜・和倉温泉・七尾湾旅行における服装や持ち物のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10月〜11月の能登・千里浜・和倉温泉・七尾湾は朝夕の冷え込みが強まります。日中は快適な服装で問題ありませんが、朝夕の散策や露天風呂への移動時には防寒着（フリースやジャケット等）を必ずご用意ください。"
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
              石川県 / 能登・千里浜・和倉温泉・七尾湾
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            日本唯一の波打ち際ドライブ「千里浜なぎさドライブウェイ」夕景＆和倉温泉・極上能登牛と七尾湾秋魚
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            波打ち際を疾走する千里浜の絶景ドライブ。開湯1200年の名湯・和倉温泉で極上能登牛と海の幸に酔いしれる。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：10月〜11月の日本海に沈む感動の夕日と七尾湾の秋の海の幸</span>
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
            はじめに：秋の能登・千里浜・和倉温泉・七尾湾で味わう絶景と至高の温泉時間
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            10月から11月にかけての石川県・能登・千里浜・和倉温泉・七尾湾は、豊かな自然美と歴史情緒が鮮やかに交差する特別なシーズンを迎えます。澄んだ秋空の下、山肌や渓谷が織りなす錦秋のパノラマは息をのむ美しさで、訪れる人々を魅了してやみません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            心地よい秋風を感じながら名所を巡ったあとは、名湯に身を浸して日々の喧騒を忘れ、夜には秋の実りを凝縮した贅沢な郷土会席に舌鼓を打つ――これこそが大人の旅にふさわしい至高の贅沢です。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、能登・千里浜・和倉温泉・七尾湾エリアで高い評価を誇るおすすめの名宿3選を徹底解説します。楽天ふるさと納税の宿泊クーポンを活用すれば、実質自己負担わずか2,000円で憧れの高級旅館や温泉宿にお得に宿泊可能です。秋の特別な旅行プランをぜひご検討ください。
          </p>
        </section>

        {/* Highlight Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> 能登・千里浜・和倉温泉・七尾湾 秋旅の3大魅力ポイント
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">和倉温泉 花ごよみ</h3>
              <p className="text-xs text-slate-500">わくらおんせん はなごよみ</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.03点 <span className="text-xs font-normal text-slate-600">(514件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7182/7182.jpg"
                alt="和倉温泉 花ごよみの外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  七尾湾の潮風香る数寄屋造りの純和風旅館。開湯1200年の歴史を持つ和倉の天然塩化物泉と、能登の旬魚・能登牛会席で心温まるもてなし。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ナトリウム・カルシウム-塩化物温泉（高温泉） / 露天風呂・大浴場 / 効能：リウマチ、神経痛、冷え性、切り傷、疲労回復、美肌
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR七尾線・のと鉄道「和倉温泉駅」より車で約5分（無料送迎あり） / のと里山海道「和倉IC」より車で約8分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                能登牛の陶板焼き、七尾湾獲れたて地魚のお造り盛り合わせ、能登ふぐ料理、季節の釜飯、能登の地酒
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                塩分を豊富に含む温泉は湯冷めしにくく体の芯までポカポカ。千里浜なぎさドライブウェイの夕日ドライブとあわせた能登応援旅。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7182"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">和倉温泉 ゆけむりの宿美湾荘</h3>
              <p className="text-xs text-slate-500">わくらおんせん ゆけむりのやどびわんそう</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.54点 <span className="text-xs font-normal text-slate-600">(2724件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/11144/11144.jpg"
                alt="和倉温泉 ゆけむりの宿美湾荘の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  七尾湾に面して建ち、全客室や露天風呂から波静かな海を一望できる名門旅館。職人の美意識が宿る館内と、能登の山海美味を凝縮した贅沢会席。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ナトリウム・カルシウム-塩化物泉 / 海辺の露天風呂・大浴場 / 効能：美肌効果、保温効果、神経痛、関節痛、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR和倉温泉駅より車で約5分（無料送迎バスあり） / 和倉ICより車で約7分 / のと里山空港より車で約50分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                厳選能登牛会席、七尾湾直送ズワイガニ（秋・冬限定）、のどぐろ塩焼き、能登コシヒカリ、輪島ふぐのたたき
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                海と一体化するような絶景露天風呂。朝日に輝く七尾湾を眺めながらの朝風呂と、能登の誇るブランド牛・海の幸に舌鼓。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D11144"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">和倉温泉はまづる</h3>
              <p className="text-xs text-slate-500">わくらおんせんはまづる</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.09点 <span className="text-xs font-normal text-slate-600">(155件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/146888/146888.jpg"
                alt="和倉温泉はまづるの外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  和倉温泉街の中心に位置し、源泉かけ流しの良質な天然温泉と家庭的なおもてなしが評判の純和風宿。能登の味覚をリーズナブルに堪能。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ナトリウム・カルシウム-塩化物泉（源泉かけ流し） / 家族風呂・内湯 / 効能：神経痛、筋肉痛、冷え性、皮膚病、美肌
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR和倉温泉駅よりバスまたはタクシーで約5分 / 和倉ICより車で約8分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                能登牛ステーキ御膳、七尾港水揚げ旬魚の刺身、能登豚のしゃぶしゃぶ鍋、手作り郷土料理の小鉢
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                温泉街の名所「湯元の広場」や総湯へも徒歩すぐ。アットホームな空間で良泉に浸かり、気兼ねなく能登の旅情を満喫。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D146888"
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
            楽天ふるさと納税を利用すれば、石川県内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
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
                <span className="text-amber-600 font-bold">Q.</span> 能登・千里浜・和倉温泉・七尾湾の秋の見頃時期はいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年10月〜11月の日本海に沈む感動の夕日と七尾湾の秋の海の幸が見頃となります。標高差や気候に合わせて色づきが移り変わり、長期間にわたって楽しめます。
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
                10月〜11月の能登・千里浜・和倉温泉・七尾湾は朝夕の冷え込みが予想されます。日中は薄手のアウターで快適ですが、早朝や夜間、散策時には厚手のフリースやジャケット、歩きやすい靴をご用意ください。
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
