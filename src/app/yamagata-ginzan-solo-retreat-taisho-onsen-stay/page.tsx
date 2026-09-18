import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【山形・銀山温泉ひとり旅・大正浪漫ガス灯おこもり】木造多層建築群・銀山川の雪景色・山形牛と尾花沢蕎麦！大正タイムスリップの美湯厳選3宿',
  description: 'ノスタルジックな木造建築が川沿いに並ぶ全国屈指の人気温泉郷・山形・銀山温泉！鏝絵（こてえ）が美しい大正浪漫の象徴「古山閣」、銀山川を見下ろす露天風呂とモダンな快適設備を備えた「仙峡の宿 銀山荘」、銀山温泉のメイン通りに佇む源泉掛け流しの「古勢起屋別館」を楽天API最新データに基づき徹底比較。',
  keywords: '銀山温泉 一人旅 宿,銀山温泉 ホテル 一人,古山閣 銀山温泉,銀山荘,古勢起屋別館,銀山温泉 大正浪漫 ひとり旅',
  openGraph: {
    title: '【山形・銀山温泉ひとり旅・大正浪漫ガス灯おこもり】木造多層建築群・銀山川の雪景色・山形牛と尾花沢蕎麦！大正タイムスリップの美湯厳選3宿',
    description: 'ノスタルジックな木造建築が川沿いに並ぶ全国屈指の人気温泉郷・山形・銀山温泉！鏝絵（こてえ）が美しい大正浪漫の象徴「古山閣」、銀山川を見下ろす露天風呂とモダンな快適設備を備えた「仙峡の宿 銀山荘」、銀山温泉のメイン通りに佇む源泉掛け流しの「古勢起屋別館」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/yamagata-ginzan-solo-retreat-taisho-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【山形・銀山温泉ひとり旅・大正浪漫ガス灯おこもり】木造多層建築群・銀山川の雪景色・山形牛と尾花沢蕎麦！大正タイムスリップの美湯厳選3宿',
    description: 'ノスタルジックな木造建築が川沿いに並ぶ全国屈指の人気温泉郷・山形・銀山温泉！鏝絵（こてえ）が美しい大正浪漫の象徴「古山閣」、銀山川を見下ろす露天風呂とモダンな快適設備を備えた「仙峡の宿 銀山荘」、銀山温泉のメイン通りに佇む源泉掛け流しの「古勢起屋別館」を楽天API最新データに基づき徹底比較。',
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
    datePublished: '2026-09-16T00:00:00+09:00',
    dateModified: '2026-09-16T00:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/yamagata-ginzan-solo-retreat-taisho-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【山形・銀山温泉ひとり旅・大正浪漫ガス灯おこもり】木造多層建築群・銀山川の雪景色・山形牛と尾花沢蕎麦！大正タイムスリップの美湯厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            山形・銀山温泉ひとり旅＆大正浪漫おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【山形・銀山温泉ひとり旅・大正浪漫ガス灯おこもり】木造多層建築群・銀山川の雪景色・山形牛と尾花沢蕎麦！大正タイムスリップの美湯厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              銀山川の両岸に軒を連ねる三層四層の木造温泉宿。夕暮れ時に灯るガス灯の柔らかな光と、ほのかな硫黄の香りに包まれる奇跡のタイムスリップトリップ
            </p>
            <p>
              山形新幹線の大石田駅から直行バスで約40分。かつて延沢銀山の鉱夫たちによって発見されたと伝えられる銀山温泉は、大正から昭和初期に建てられた洋風意匠を取り入れた木造旅館が今なお美しく保たれています。乳白色の湯花が舞う含食塩硫化水素泉は、体の芯までじっくりと温め、日々のストレスを優しく溶かしてくれます。
            </p>
            <p>
              歴史ある伝統の意匠をそのまま残す名門旅館から、渓谷を望む露天風呂と上質なサービスを兼ね備えた名宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 銀山温泉　伝統の宿　古山閣（★4.53 / 最低目安：23,100円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 銀山温泉　仙峡の宿　銀山荘（★4.44 / 最低目安：24,778円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 銀山温泉　古勢起屋別館（★4.25 / 最低目安：34,650円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">山形県 尾花沢市銀山温泉42周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              銀山温泉　伝統の宿　古山閣
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.53 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">23,100円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/137447/137447.jpg"
                  alt="銀山温泉　伝統の宿　古山閣 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              木造４階建ての宿。昔の空気が今も流れている・・・そんな感覚を味わいに来てみてはいかがでしょうか。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>木造４階建ての宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>昔の空気が今も流れている</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>そんな感覚を味わいに来てみてはいかがでしょうか</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：大石田駅より尾花沢経由銀山行バスにて35分。送迎についてはプラン詳細をご覧ください。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137447%2F137447.html"
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
              <span className="text-xs text-stone-500 font-medium">山形県 尾花沢市銀山新畑85周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              銀山温泉　仙峡の宿　銀山荘
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.44 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">24,778円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/111234/111234.jpg"
                  alt="銀山温泉　仙峡の宿　銀山荘 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              古き良き大正ロマンの漂う銀山温泉。湖上の山々がおりなす四季の彩りをのんびり眺めながら入る露天風呂。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>古き良き大正ロマンの漂う銀山温泉</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>湖上の山々がおりなす四季の彩りをのんびり眺めながら入る露天風呂</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：国道１３号線尾花沢市内よりお車にて３０分。 ＪＲ利用のお客様は１１：１０、１３：４０、１５:４５の送迎あり（要予約）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111234%2F111234.html"
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
              <span className="text-xs text-stone-500 font-medium">山形県 尾花沢市銀山新畑41周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              銀山温泉　古勢起屋別館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.25 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">34,650円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/111235/111235.jpg"
                  alt="銀山温泉　古勢起屋別館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              『2011年度・お客様が選んだ4つ星以上の人気宿』大正浪漫の雪景色・銀山荘の露天風呂もご利用可能
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>『2011年度</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>お客様が選んだ4つ星以上の人気宿』大正浪漫の雪景色</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>銀山荘の露天風呂もご利用可能</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：国道１３号線尾花沢市内よりお車にて３０分。 ＪＲ利用のお客様は１５:４５の送迎あり（要予約）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111235%2F111235.html"
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
            <span>銀山温泉ひとり旅・ガス灯の夜景と白銀の滝を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">夕暮れのガス灯点灯と川面に映る大正浪漫の木造建築鑑賞</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">日没とともにガス灯にオレンジ色の火が灯る瞬間。カメラを片手に一人静かに温泉街を歩き、映画のワンシーンのような幻想美に浸れます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「白銀公園」白銀の滝（落差22m）と延沢銀山廃坑洞散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉街の最奥にある滝と遊歩道。かつての銀採掘跡である坑道を見学しながら、マイナスイオンあふれる渓谷森林浴を一人満喫。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">尾花沢名物「尾花沢牛」と挽きたて手打ち「尾花沢蕎麦」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">寒暖差の激しい気候が育んだ極上の黒毛和牛と、甘み豊かな手打ちそば。温泉街の豆腐店で味わう揚げたての「立ち喰い豆腐」も名物です。</p>
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
                <span>一人旅で伝統的な大正建築の意匠と本格的な温泉情緒を味わえる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「銀山温泉 伝統の宿 古山閣」は壁一面に施された左官職人の鏝絵が有名で、楽天口コミ★4.5超。歴史ある木造建築の中で特別な一人旅の時間を過ごせます。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>銀山温泉で開放的な露天風呂やゆとりある空間を求めるなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「銀山温泉 仙峡の宿 銀山荘」は温泉街の入り口に位置し、開放的な露天寝湯や快適な客室を備え、落ち着いた滞在を好む一人旅にぴったりです。
              </p>
            </div>
          </div>
        </section>

        {/* 記事末尾CTA */}
        <div className="text-center bg-stone-900 text-white p-8 rounded-2xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">気になる宿は見つかりましたか？</h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            週末や連休、観光シーズンのピークは部屋数が限られます。楽天トラベルの最新空室カレンダーからお早めの日程チェックをおすすめします。
          </p>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137447%2F137447.html"
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
