import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【10月・11月秋の伊豆修善寺温泉ひとり旅・竹林の小径と修善寺自然公園もみじ林おこもり】桂川のせせらぎ・伊豆最古の美肌湯・伊豆旬会席！小京都リトリート厳選3宿',
  description: '11月中旬〜12月上旬は伊豆随一の紅葉名所！桂川沿いに風情ある温泉街が広がる伊豆の小京都・修善寺。貸切露天風呂や最上階展望風呂で楽天口コミ★4.43を誇る「瑞の里 〇久旅館」、数寄屋造りと本格庭園でミシュラン級の評価を受ける最高峰の宿「柳生の庄」、数室限定のプライベート極上ステイ「離れ宿 鬼の栖」を楽天API最新データに基づき徹底比較。',
  keywords: '修善寺温泉 一人旅 宿,修善寺 10月 11月 紅葉 温泉,瑞の里 〇久旅館 一人旅,柳生の庄,鬼の栖,修善寺 竹林の小径 一人旅 おこもり',
  openGraph: {
    title: '【10月・11月秋の伊豆修善寺温泉ひとり旅・竹林の小径と修善寺自然公園もみじ林おこもり】桂川のせせらぎ・伊豆最古の美肌湯・伊豆旬会席！小京都リトリート厳選3宿',
    description: '11月中旬〜12月上旬は伊豆随一の紅葉名所！桂川沿いに風情ある温泉街が広がる伊豆の小京都・修善寺。貸切露天風呂や最上階展望風呂で楽天口コミ★4.43を誇る「瑞の里 〇久旅館」、数寄屋造りと本格庭園でミシュラン級の評価を受ける最高峰の宿「柳生の庄」、数室限定のプライベート極上ステイ「離れ宿 鬼の栖」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/shizuoka-shuzenji-autumn-solo-retreat-bamboo-momiji-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【10月・11月秋の伊豆修善寺温泉ひとり旅・竹林の小径と修善寺自然公園もみじ林おこもり】桂川のせせらぎ・伊豆最古の美肌湯・伊豆旬会席！小京都リトリート厳選3宿',
    description: '11月中旬〜12月上旬は伊豆随一の紅葉名所！桂川沿いに風情ある温泉街が広がる伊豆の小京都・修善寺。貸切露天風呂や最上階展望風呂で楽天口コミ★4.43を誇る「瑞の里 〇久旅館」、数寄屋造りと本格庭園でミシュラン級の評価を受ける最高峰の宿「柳生の庄」、数室限定のプライベート極上ステイ「離れ宿 鬼の栖」を楽天API最新データに基づき徹底比較。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・出張調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-09-17T00:00:00+09:00',
    dateModified: '2026-09-17T00:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/shizuoka-shuzenji-autumn-solo-retreat-bamboo-momiji-stay',
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* パンくずリスト */}
      <nav className="border-b border-stone-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-800">ホーム</Link>
          <span>›</span>
          <span className="text-stone-400">特集</span>
          <span>›</span>
          <span className="text-stone-800 font-medium truncate">【10月・11月秋の伊豆修善寺温泉ひとり旅・竹林の小径と修善寺自然公園もみじ林おこもり】桂川のせせらぎ・伊豆最古の美肌湯・伊豆旬会席！小京都リトリート厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            伊豆修善寺・10-11月秋のもみじ林＆竹林の小径ひとり旅おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【10月・11月秋の伊豆修善寺温泉ひとり旅・竹林の小径と修善寺自然公園もみじ林おこもり】桂川のせせらぎ・伊豆最古の美肌湯・伊豆旬会席！小京都リトリート厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月17日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              桂川にかかる朱塗りの橋と、天に伸びる青々とした竹林、そして秋を告げる真っ赤なモミジ。弘法大師ゆかりの伊豆最古の湯で、風情あふれる日本の秋の美しさに浸る一人旅
            </p>
            <p>
              特急「踊り子号」で東京から直通、伊豆半島の山間にひっそりと佇む修善寺温泉。夏目漱石や芥川龍之介など名だたる文豪が逗留したこの地は、11月に入ると「修善寺自然公園もみじ林」の約1,000本のもみじが一斉に色づき、伊豆随一の紅葉狩りスポットとなります。竹林の小径を歩く心地よい風の音、川のせせらぎ、アルカリ性単純温泉の柔らかな湯触りが、旅人の心を優しく解きほぐします。
            </p>
            <p>
              ひとり旅を温かく歓迎する寛ぎの温泉旅館から、一生に一度は泊まりたい最高峰の数寄屋料亭旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
            </p>
          </div>
        </header>

        {/* 目次 */}
        <section className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm mb-10">
          <h2 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
            <span>📑</span>
            <span>この記事で紹介する厳選ホテル（楽天トラベル最新評価順）</span>
          </h2>
          <ul className="text-xs sm:text-sm space-y-2">
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 修善寺温泉　瑞の里　〇久（まるきゅう）旅館（★4.43 / 最低目安：14,850円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 修善寺温泉　柳生の庄（★5 / 最低目安：52,030円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 修善寺　離れ宿　鬼の栖（★5 / 最低目安：34,000円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">静岡県 伊豆市修善寺1146周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              修善寺温泉　瑞の里　〇久（まるきゅう）旅館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.43 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">14,850円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/29806/29806.jpg"
                  alt="修善寺温泉　瑞の里　〇久（まるきゅう）旅館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              冷蔵庫飲物無料★2024「泳ぎ湯」「寝湯」新設★宴処新装★『お客様が選ぶ人気宿』常連宿
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>冷蔵庫飲物無料★2024「泳ぎ湯」「寝湯」新設★宴処新装★『お客様が選ぶ人気宿』常連宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：修善寺駅よりタクシー約10分／東名高速　沼津ＩＣより伊豆縦貫道を通り約30分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D29806"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition"
              >
                <span>空室状況・最新料金を確認</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </article>

        <article id="hotel-2" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第2位</span>
              <span className="text-xs text-stone-500 font-medium">静岡県 伊豆市修善寺1116周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              修善寺温泉　柳生の庄
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 5 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">52,030円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/72797/72797.jpg"
                  alt="修善寺温泉　柳生の庄 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              修善寺温泉の奥にある閑静な旅館。本格懐石料理と露天風呂が好評。露天風呂付客室や離れもおすすめ。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>修善寺温泉の奥にある閑静な旅館</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>本格懐石料理と露天風呂が好評</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>露天風呂付客室や離れもおすすめ</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆箱根鉄道　修善寺駅から車で約１０分 東名高速道路沼津ICまたは新東名高速道路長泉沼津ICから30���　</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D72797"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition"
              >
                <span>空室状況・最新料金を確認</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </article>

        <article id="hotel-3" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第3位</span>
              <span className="text-xs text-stone-500 font-medium">静岡県 伊豆市修善寺1163周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              修善寺　離れ宿　鬼の栖
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 5 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">34,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187409/187409.jpg"
                  alt="修善寺　離れ宿　鬼の栖 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              風情漂う日本庭園と全室離れの各お部屋には専用風呂あり。修善寺の奥座敷、大人の離れ宿をご堪能ください。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>風情漂う日本庭園と全室離れの各お部屋には専用風呂あり</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>修善寺の奥座敷</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>大人の離れ宿をご堪能ください</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆箱根鉄道駿豆線「修善寺駅」駅からタクシーで約10分。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D187409"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition"
              >
                <span>空室状況・最新料金を確認</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </article>
        </div>

        {/* 現地お役立ち情報 */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-100 pb-3">
            <span>💡</span>
            <span>修善寺10-11月ひとり旅・修禅寺ともみじ林を愛でる現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「修善寺自然公園 もみじ林」1,000本のモミジが織りなす秋の絨毯</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">大正時代に植樹された約1,000本のもみじが群生。11月中旬〜下旬には紅葉まつりが開催され、地元の露店や絶景散策が楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「竹林の小径」桂川沿いの石畳と竹の円形ベンチで寝そべり森林浴</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">茶室風の風情ある通り。中央の竹製ベンチに寝転んで見上げる竹林と紅葉のコントラストは、一人旅の心を静かに満たします。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">伊豆天城の本わさびと駿河湾の金目鯛・自然薯料理</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">清流で育ったすりたての生わさびをご飯にのせる「わさび丼」や、脂の乗った金目鯛の煮付け。秋の伊豆の滋味を地酒とともに。</p>
            </div>
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="bg-amber-50/40 rounded-2xl border border-amber-200/60 p-6 sm:p-8 mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span>❓</span>
            <span>よくある質問（FAQ）</span>
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>一人旅で落ち着いて露天風呂や地元の旬会席を楽しめるおすすめ宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「瑞の里 〇久（まるきゅう）旅館」は楽天口コミ★4.43。大浴場だけでなく貸切露天風呂も充実し、伊豆の旬の幸を活かした料理が好評です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>修善寺もみじ林の見頃時期とアクセスは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                例年11月中旬から12月上旬が見頃です。修善寺温泉街から路線バスで約10分の「もみじ林前」下車ですぐアクセスできます。
              </p>
            </div>
          </div>
        </section>

        {/* 記事末尾CTA */}
        <div className="text-center bg-stone-900 text-white p-8 rounded-2xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">気になる宿は見つかりましたか？</h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            10月・11月の紅葉ハイシーズンは部屋数が限られます。楽天トラベルの最新空室カレンダーからお早めの日程チェックをおすすめします。
          </p>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D29806"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
          >
            一番人気の宿をチェックする（楽天トラベル）
          </a>
        </div>
      </main>
    </div>
  );
}
