import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '世界遺産・吉野山の秋色グラデーション（下千本〜奥千本）と千年の歴史漂う隠れ宿＆大和牛会席 | クラウドトラベルふるさと納税',
  description: '10月下旬〜11月下旬にかけて山裾から山頂へと色づく吉野山。桜の名所が紅葉の海と化す秋の幽玄な景色と、吉野の秘湯・大和牛・吉野葛料理をふるさと納税で楽しむ贅沢ステイ。',
  keywords: ['吉野・吉野山・洞川 紅葉', '奈良県 紅葉 10月 11月', '吉野山秋色グラデーション＆吉野温泉', 'ふるさと納税 温泉宿泊券', '吉野温泉元湯', '世界遺産吉野山 吉野荘湯川屋', '世界遺産・吉野山 眺望風呂と桜の宿 一休庵', '楽天ふるさと納税 トラベル'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-yoshinoyama-autumn-leaves-stay',
  },
  openGraph: {
    title: '世界遺産・吉野山の秋色グラデーション（下千本〜奥千本）と千年の歴史漂う隠れ宿＆大和牛会席',
    description: '10月下旬〜11月下旬にかけて山裾から山頂へと色づく吉野山。桜の名所が紅葉の海と化す秋の幽玄な景色と、吉野の秘湯・大和牛・吉野葛料理をふるさと納税で楽しむ贅沢ステイ。',
    url: 'https://croud-travel.com/furusato-tax-yoshinoyama-autumn-leaves-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "世界遺産・吉野山の秋色グラデーション（下千本〜奥千本）と千年の歴史漂う隠れ宿＆大和牛会席",
    "description": "10月下旬〜11月下旬にかけて山裾から山頂へと色づく吉野山。桜の名所が紅葉の海と化す秋の幽玄な景色と、吉野の秘湯・大和牛・吉野葛料理をふるさと納税で楽しむ贅沢ステイ。",
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
    "datePublished": "2026-09-19",
    "dateModified": "2026-09-19",
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-yoshinoyama-autumn-leaves-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "吉野・吉野山・洞川の紅葉の見頃時期はいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月下旬〜11月下旬の標高差が織りなすロングラン紅葉と歴史ある奥吉野の名湯が見頃となります。標高差がある地域では高所から山麓へと約1ヶ月にわたり美しいグラデーションを楽しめます。"
        }
      },
      {
        "@type": "Question",
        "name": "ふるさと納税の楽天トラベルクーポンはどのように利用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "寄付完了後、最短翌日〜数日以内に楽天トラベルの会員アカウントに宿泊クーポンが付与されます。予約時にクーポンを適用することで、最大30%相当の宿泊代金割引が受けられます。"
        }
      },
      {
        "@type": "Question",
        "name": "10月〜11月の吉野・吉野山・洞川旅行における服装や持ち物の注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "秋の吉野・吉野山・洞川は日中と朝晩の寒暖差が非常に大きくなります。日中は長袖シャツや軽いジャケットで快適ですが、早朝・夜間や散策時は厚手のフリース、ダウンジャケット、手袋などの防寒着を必ずご用意ください。"
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
      <header className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              奈良県 / 吉野・吉野山・洞川
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            世界遺産・吉野山の秋色グラデーション（下千本〜奥千本）と千年の歴史漂う隠れ宿＆大和牛会席
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            下千本から奥千本へ、山肌を黄金と朱に染め上げる錦秋の吉野山。静寂の隠れ宿で味わう大和牛と吉野の伝統。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 ベストシーズン：10月下旬〜11月下旬の標高差が織りなすロングラン紅葉と歴史ある奥吉野の名湯</span>
            <span className="flex items-center gap-1">♨️ 泉質自慢の名湯＆地産会席</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円で高級宿ステイ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950 border-b-2 border-amber-600 pb-3 mb-6">
            はじめに：秋の吉野・吉野山・洞川が魅せる極上の錦秋美と温泉旅
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            10月から11月にかけて、奈良県・吉野・吉野山・洞川エリアは一年で最も艶やかでドラマチックな季節を迎えます。澄み渡る秋空の下、木々が深紅や山吹色、黄金色へと染まりゆく圧巻のグラデーションは、訪れる旅人の心を奪ってやみません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            日中は爽やかな空気のなかで息をのむ絶景紅葉を満喫し、夕暮れには湯けむり立ち上る名湯に浸かって冷えた体を芯から温める――これぞ日本の秋旅の醍醐味です。さらに、実りの秋ならではのブランド牛や清流の恵み、旬の味覚を贅沢に味わう会席料理が、旅の満足度を最高潮へと高めてくれます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、吉野・吉野山・洞川エリアの厳選された名宿3選を徹底解説します。楽天ふるさと納税の宿泊クーポンを活用すれば、実質自己負担わずか2,000円で憧れの高級旅館・温泉リゾートに宿泊可能。賢く贅沢に、心洗われる秋の休日を叶えましょう。
          </p>
        </section>

        {/* Highlight Map / Summary Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> 吉野・吉野山・洞川 秋旅の3大魅力ポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">① 標高差が織りなす絶景パノラマ</div>
              <p className="text-xs sm:text-sm text-slate-600">
                山頂から山麓、渓谷へと色づきが移り変わり、10月中旬から11月下旬まで長期間にわたり感動的な紅葉美を鑑賞できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">② 個性豊かな名湯・美肌温泉</div>
              <p className="text-xs sm:text-sm text-slate-600">
                奥深い歴史と湯量を誇る天然温泉。秋風そよぐ露天風呂で紅葉を眺めながらの湯浴みは至福のひとときです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">③ 実りの秋を味わい尽くす郷土美食</div>
              <p className="text-xs sm:text-sm text-slate-600">
                秋の味覚がぎっしり詰まった旬会席。厳選された地場ブランド牛や清流魚、採れたての山の幸をご堪能ください。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">吉野温泉元湯</h3>
              <p className="text-xs text-slate-500">よしのおんせんもとゆ</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.71点 <span className="text-xs font-normal text-slate-600">(210件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/56233/56233.jpg"
                alt="吉野温泉元湯の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  文豪・島崎藤村が逗留し小説『破戒』を執筆したことでも知られる、創業300年を超える名門秘湯宿。吉野山の中腹、静寂の谷間に湧く赤褐色の含鉄炭酸泉。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  含炭酸-鉄-炭酸水素塩冷鉱泉（赤褐色の濁り湯） / 効能：神経痛、関節痛、冷え性、貧血、疲労回復、婦人病
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：近鉄「吉野駅」より車で約5分（送迎あり・要連絡） / 南阪奈道路「葛城IC」より車で約50分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                大和牛のすき焼き・しゃぶしゃぶ会席、吉野名物の本葛を使った胡麻豆腐・葛うどん、吉野鮎の塩焼き、郷土の味覚・柿の葉寿司
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                藤村が愛した深い静寂と、鉄分を豊富に含む赤茶色の名湯。窓の外に広がる吉野山の秋のグラデーションを眺めながら、歴史のロマンに浸れます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D56233"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">世界遺産吉野山 吉野荘湯川屋</h3>
              <p className="text-xs text-slate-500">せかいいさんよしのやま よしのそうゆかわや</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.46点 <span className="text-xs font-normal text-slate-600">(171件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/104591/104591.jpg"
                alt="世界遺産吉野山 吉野荘湯川屋の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  世界遺産・金峯山寺蔵王堂から徒歩約5分。吉野山の尾根に位置し、創業300年の伝統を誇る格式ある料理旅館。客室や展望風呂から吉野の山並みを一望。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  人工温泉（吉野の銘木・吉野檜香る展望風呂） / 効能：リラクゼーション、血行促進、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：近鉄吉野駅よりロープウェイ「吉野山駅」下車徒歩約10分 / 名阪国道「針IC」より約60分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                名物「西行鍋」（吉野本葛を出汁に溶かし大和肉鶏や旬野菜を煮込む伝統鍋）、大和牛のステーキ、自家製胡麻豆腐、柿の葉寿司
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                眼下に広がる紅葉の海と蔵王堂のシルエット。歴史の息吹を感じながら、伝統の西行鍋と大和の恵みを堪能する上質な時間。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D104591"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">世界遺産・吉野山 眺望風呂と桜の宿 一休庵</h3>
              <p className="text-xs text-slate-500">せかいいさん よしのやま ちょうぼうぶろとさくらのやど いっきゅうあん</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.6点 <span className="text-xs font-normal text-slate-600">(48件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/145484/145484.jpg"
                alt="世界遺産・吉野山 眺望風呂と桜の宿 一休庵の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  吉野山・中千本の絶景ポイントに佇む全8室の隠れ宿。すべての客室から吉野の山並みを見渡し、秋には山肌一面に広がる紅葉絵巻を独り占めできる。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  展望薬草風呂（大和当帰などの和漢植物を配合した温まりの湯） / 効能：冷え性、肩こり、腰痛、血行促進、美肌
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：近鉄吉野駅より吉野山ロープウェイ吉野山駅下車徒歩約8分 / 西名阪道「柏原IC」より約50分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                大和牛の朴葉味噌焼き、吉野葛を贅沢に使った葛会席、大和ポークの豆乳鍋、旬の根菜と大和野菜の炊き合わせ
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                展望風呂から眺める夕暮れ時の吉野山紅葉は圧巻。大和の薬草風呂で体を温め、静寂に包まれた夜景を眺める大人の贅沢。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D145484"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Furusato Tax Guide Section */}
        <section className="bg-gradient-to-br from-amber-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-200">
            💡 楽天ふるさと納税で「宿泊クーポン」を賢く手に入れる3ステップ
          </h3>
          <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
            楽天ふるさと納税を利用すれば、奈良県内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
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
                <span className="text-amber-600 font-bold">Q.</span> 吉野・吉野山・洞川の紅葉の見頃時期はいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年10月下旬〜11月下旬の標高差が織りなすロングラン紅葉と歴史ある奥吉野の名湯が見頃となります。標高の高い山頂付近から徐々に色づきが始まり、山麓の温泉街へと紅葉前線が降りてくるため、長期間にわたって楽しめます。
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
                10月〜11月の吉野・吉野山・洞川は朝晩の冷え込みが厳しくなります。脱ぎ着しやすいフリースや厚手のジャケット、歩きやすいスニーカーやトレッキングシューズの着用をおすすめします。
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
