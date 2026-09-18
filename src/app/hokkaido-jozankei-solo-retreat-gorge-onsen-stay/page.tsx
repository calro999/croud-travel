import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【札幌の奥座敷・定山渓温泉ひとり旅・豊平川渓谷おこもり】全室客室温泉露天・囲炉裏会席・源泉掛け流し湯守！札幌直通バス60分の極上リトリート厳選3宿',
  description: '原生林と豊平川の深い渓谷美に包まれる札幌の奥座敷・定山渓温泉！全室展望風呂付きで広大な敷地に静寂が広がる最高峰リゾート「奥定山渓温泉 佳松御苑」、民芸調の温もりと囲炉裏焼き・手作り温泉情緒が口コミ★4.6超の「ぬくもりの宿 ふる川」、名門の伝統と多彩な大浴場を誇る「定山渓第一寶亭留 翠山亭」を楽天API最新データに基づき徹底比較。',
  keywords: '定山渓温泉 一人旅 宿,定山渓 ホテル 一人 温泉,佳松御苑 定山渓,ぬくもりの宿ふる川,定山渓第一寶亭留翠山亭,定山渓 ひとり旅 おこもり',
  openGraph: {
    title: '【札幌の奥座敷・定山渓温泉ひとり旅・豊平川渓谷おこもり】全室客室温泉露天・囲炉裏会席・源泉掛け流し湯守！札幌直通バス60分の極上リトリート厳選3宿',
    description: '原生林と豊平川の深い渓谷美に包まれる札幌の奥座敷・定山渓温泉！全室展望風呂付きで広大な敷地に静寂が広がる最高峰リゾート「奥定山渓温泉 佳松御苑」、民芸調の温もりと囲炉裏焼き・手作り温泉情緒が口コミ★4.6超の「ぬくもりの宿 ふる川」、名門の伝統と多彩な大浴場を誇る「定山渓第一寶亭留 翠山亭」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/hokkaido-jozankei-solo-retreat-gorge-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【札幌の奥座敷・定山渓温泉ひとり旅・豊平川渓谷おこもり】全室客室温泉露天・囲炉裏会席・源泉掛け流し湯守！札幌直通バス60分の極上リトリート厳選3宿',
    description: '原生林と豊平川の深い渓谷美に包まれる札幌の奥座敷・定山渓温泉！全室展望風呂付きで広大な敷地に静寂が広がる最高峰リゾート「奥定山渓温泉 佳松御苑」、民芸調の温もりと囲炉裏焼き・手作り温泉情緒が口コミ★4.6超の「ぬくもりの宿 ふる川」、名門の伝統と多彩な大浴場を誇る「定山渓第一寶亭留 翠山亭」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/hokkaido-jozankei-solo-retreat-gorge-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【札幌の奥座敷・定山渓温泉ひとり旅・豊平川渓谷おこもり】全室客室温泉露天・囲炉裏会席・源泉掛け流し湯守！札幌直通バス60分の極上リトリート厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            北海道・定山渓温泉ひとり旅＆豊平川渓谷おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【札幌の奥座敷・定山渓温泉ひとり旅・豊平川渓谷おこもり】全室客室温泉露天・囲炉裏会席・源泉掛け流し湯守！札幌直通バス60分の極上リトリート厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              札幌駅やすすきのから直行かっぱライナー号で約60分。支笏洞爺国立公園の豊かな針葉樹林と豊平川のせせらぎに抱かれ、開湯150年の名湯に浸かる贅沢なソロトリップ
            </p>
            <p>
              修験僧・美泉定山がアイヌの人々の案内で発見したことから名付けられた北海道を代表する名湯・定山渓温泉。ナトリウム-塩化物泉の無色透明な湯は塩分が肌をベールのように包み込み、湯上がり後も芯から体がポカポカと温まります。秋の燃えるような紅葉や冬の白銀の雪景色を露天風呂から一人静かに眺める時間は、日常の疲労を完全にリセットしてくれます。
            </p>
            <p>
              静寂を愛する大人のための最高峰ラグジュアリー隠れ宿から、北海道の郷土料理と温かい木肌のぬくもりに癒やされる老舗宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 奥定山渓温泉　佳松御苑（★4.8 / 最低目安：39,050円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 定山渓温泉　ぬくもりの宿　ふる川（★4.62 / 最低目安：16,800円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 定山渓温泉　定山渓第一寶亭留　翠山亭（★4.45 / 最低目安：16,286円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">北海道 札幌市南区定山渓85周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              奥定山渓温泉　佳松御苑
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.8 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">39,050円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/144473/144473.jpg"
                  alt="奥定山渓温泉　佳松御苑 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              至極のオーベジュとも言える 季を紡ぐ料理宿～全室天然温泉「森の展望風呂」完備～
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>至極のオーベジュとも言える 季を紡ぐ料理宿～全室天然温泉「森の展望風呂」完備～</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：＜公共交通機関＞ JR札幌駅から道南バスで70分、「薄別」停留所にて下車、徒歩すぐでございます。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144473%2F144473.html"
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
              <span className="text-xs text-stone-500 font-medium">北海道 札幌市南区定山渓温泉周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              定山渓温泉　ぬくもりの宿　ふる川
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.62 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">16,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1037/1037.jpg"
                  alt="定山渓温泉　ぬくもりの宿　ふる川 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              道内では珍しい民芸調の宿屋、館内には囲炉裏があり、田舎情緒たっぷり。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>道内では珍しい民芸調の宿屋</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>館内には囲炉裏があり</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>田舎情緒たっぷり</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：じょうてつバス定山渓線定山渓湯の町下車すぐ。無料送迎バス毎日１便運行／大通西１丁目テレビ塔北向かい出発。事前予約制。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1037%2F1037.html"
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
              <span className="text-xs text-stone-500 font-medium">北海道 札幌市南区定山渓温泉周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              定山渓温泉　定山渓第一寶亭留　翠山亭
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.45 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">16,286円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/875/875.jpg"
                  alt="定山渓温泉　定山渓第一寶亭留　翠山亭 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              全室温泉付客室／貸切サウナ誕生／ラウンジ＆ロビーリニューアル
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>全室温泉付客室／貸切サウナ誕生／ラウンジ＆ロビーリニューアル</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：札幌より無料送迎バス運行（要予約）／ＪＲ札幌駅より車で60分／新千歳空港より車で約2時間</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F875%2F875.html"
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
            <span>定山渓温泉ひとり旅・二見吊橋散策と足湯めぐりを巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「二見吊橋」豊平川の深緑・紅葉と「かっぱ淵」の伝説散歩</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">真っ赤な吊り橋から見下ろすエメラルドグリーンの渓流と奇岩。渓谷沿いの遊歩道を一人静かに歩き、澄み切った森のマイナスイオンを深呼吸。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「定山源泉公園」温泉たまご作り体験と足湯でのんびり読書</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">定山渓温泉の開祖・美泉定山の像が佇む公園。80度以上の源泉で温泉たまごを作りながら、湯けむりの中で足湯に浸かる贅沢な一人時間。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">定山渓名物「温泉まんじゅう」食べ比べとアップルパイ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">薄皮で上品な甘さの「大黒屋商店」の蒸したて温泉まんじゅう。近隣の果樹園の採れたてりんごを贅沢に使った焼きたてアップルパイも絶品。</p>
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
                <span>一人旅で誰にも邪魔されない至高の隠れ家空間と客室露天を極めるなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「奥定山渓温泉 佳松御苑」は支笏洞爺国立公園の森に佇む全客室展望風呂付きの最高峰宿で楽天口コミ★4.8超。究極の静寂と美食が約束されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>民芸調の温かい居心地と囲炉裏料理・多彩な温泉を楽しみたいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「定山渓温泉 ぬくもりの宿 ふる川」は手作りの温もりあふれる館内と、囲炉裏会席や充実の貸切風呂が一人旅に大絶賛されています。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144473%2F144473.html"
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
