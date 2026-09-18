import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【野沢温泉ひとり旅・十三外湯めぐりおこもり】麻釜の湯けむり・源泉かけ流し硫黄泉・信州牛！信信濃のスキーと湯治の里厳選3宿',
  description: '天然温泉100%かけ流しの聖地・野沢温泉！名湯「熊の手洗湯」に直結する唯一の宿「お宿てらゆ」、高台から野沢の山並みを一望する展望露天風呂が評判の「野沢グランドホテル」、自家源泉の温もりと家庭的なおもてなしの「げんたろう屋」を楽天API最新データに基づき徹底比較。',
  keywords: '野沢温泉 一人旅 宿,野沢温泉 ホテル 一人,お宿てらゆ,野沢グランドホテル,げんたろう屋,野沢 外湯めぐり ひとり旅',
  openGraph: {
    title: '【野沢温泉ひとり旅・十三外湯めぐりおこもり】麻釜の湯けむり・源泉かけ流し硫黄泉・信州牛！信信濃のスキーと湯治の里厳選3宿',
    description: '天然温泉100%かけ流しの聖地・野沢温泉！名湯「熊の手洗湯」に直結する唯一の宿「お宿てらゆ」、高台から野沢の山並みを一望する展望露天風呂が評判の「野沢グランドホテル」、自家源泉の温もりと家庭的なおもてなしの「げんたろう屋」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/nagano-nozawa-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【野沢温泉ひとり旅・十三外湯めぐりおこもり】麻釜の湯けむり・源泉かけ流し硫黄泉・信州牛！信信濃のスキーと湯治の里厳選3宿',
    description: '天然温泉100%かけ流しの聖地・野沢温泉！名湯「熊の手洗湯」に直結する唯一の宿「お宿てらゆ」、高台から野沢の山並みを一望する展望露天風呂が評判の「野沢グランドホテル」、自家源泉の温もりと家庭的なおもてなしの「げんたろう屋」を楽天API最新データに基づき徹底比較。',
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
    datePublished: '2026-09-14T00:00:00+09:00',
    dateModified: '2026-09-14T00:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/nagano-nozawa-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【野沢温泉ひとり旅・十三外湯めぐりおこもり】麻釜の湯けむり・源泉かけ流し硫黄泉・信州牛！信信濃のスキーと湯治の里厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            長野・野沢温泉ひとり旅＆十三外湯めぐりおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【野沢温泉ひとり旅・十三外湯めぐりおこもり】麻釜の湯けむり・源泉かけ流し硫黄泉・信州牛！信信濃のスキーと湯治の里厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月14日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              湧出温度90度近い「麻釜（おがま）」から立ち上る湯煙と、村人たちが守り継ぐ十三の外湯。石畳の坂道を下駄で歩き、本物の源泉に身を浸す至福のソロ湯治
            </p>
            <p>
              長野県北部、毛無山の麓に広がる日本屈指の名湯・野沢温泉。村内には村人たちの「湯仲間」によって江戸時代から大切に管理されてきた13の共同浴場（外湯）が点在し、入浴料は寸志（お気持ち）で誰でも天然温泉かけ流しを楽しむことができます。
            </p>
            <p>
              外湯のすぐ隣で温泉三昧ができる名宿から、北信濃の絶景を望む高原ホテルまで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 〜野沢温泉発祥　熊の手洗湯　唯一の宿〜　お宿てらゆ（★4.59 / 最低目安：5,050円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 野沢温泉　野沢グランドホテル（★4.41 / 最低目安：8,470円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 野沢温泉　自家源泉の宿　げんたろう屋（★4 / 最低目安：4,000円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">長野県 下高井郡野沢温泉村豊周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              〜野沢温泉発祥　熊の手洗湯　唯一の宿〜　お宿てらゆ
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.59 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,050円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/144509/144509.jpg"
                  alt="〜野沢温泉発祥　熊の手洗湯　唯一の宿〜　お宿てらゆ 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              「熊の手洗湯」の内湯と外湯巡り。温かいおもてなしと、野沢の郷土料理が自慢のアットホームな宿
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>「熊の手洗湯」の内湯と外湯巡り</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>温かいおもてなしと、野沢の郷土料理が自慢のアットホームな宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：上信越自動車道 豊田飯山ICより約30分。北陸新幹線　飯山駅よりバスで２5分。外湯「熊の手洗湯」横</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144509%2F144509.html"
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
              <span className="text-xs text-stone-500 font-medium">長野県 下高井郡野沢温泉村豊周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              野沢温泉　野沢グランドホテル
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.41 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,470円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32185/32185.jpg"
                  alt="野沢温泉　野沢グランドホテル 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              素朴な山里の眺望と効能豊かな天然温泉が２４時間かけ流し。旬の地物を大切に田舎風ふるさと料理も好評です
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>素朴な山里の眺望と効能豊かな天然温泉が２４時間かけ流し</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>旬の地物を大切に田舎風ふるさと料理も好評です</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ飯山線・北陸新幹線　飯山駅よりバス２５分+徒歩５分／上信越自動車道　豊田・飯山ＩＣ～Ｒ１１７経由約35分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32185%2F32185.html"
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
              <span className="text-xs text-stone-500 font-medium">長野県 下高井郡野沢温泉村大周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              野沢温泉　自家源泉の宿　げんたろう屋
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">4,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2850/2850.jpg"
                  alt="野沢温泉　自家源泉の宿　げんたろう屋 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              天然温泉はまじりっけなしの１００％、温泉街のど真ん中、散策に便利。カラフルな壁画が目印です！
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>天然温泉はまじりっけなしの１００％、温泉街のど真ん中、散策に便利</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>カラフルな壁画が目印です！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：上信越道豊田飯山ＩＣからＲ１１７にて車で30分、北陸新幹線 飯山駅から野沢温泉ライナーで25分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2850%2F2850.html"
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
            <span>野沢温泉ひとり旅・外湯文化と郷土食を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">大湯をはじめとする「十三外湯めぐり」と集印帳散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">重厚な木造建築の大湯や、熊の手洗湯など個性豊かな13の外湯。集印帳を片手に石畳の路地を巡り、湯めぐりの達成感を味わえます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">国の天然記念物「麻釜（おがま）」の熱湯大釜見学</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">地元の人々が野沢菜や卵を茹でる生活の場。立ち上る真っ白な湯煙と硫黄の香りに包まれ、温泉文化が人々の暮らしに根付いていることを実感します。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">本場の「野沢菜漬け」と信州サーモン・地酒「水尾」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">シャキシャキの歯ごたえがたまらない出来立て野沢菜漬け。地元の名酒「水尾」を片手に、信州牛の朴葉味噌焼きをつつく夜は最高の贅沢です。</p>
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
                <span>一人旅で野沢温泉の発祥の湯に最も近いおすすめ宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「お宿てらゆ」は野沢最古の湯治場「熊の手洗湯」の目の前。自家源泉の掛け流し内湯も備え、静かに温泉と向き合える一人旅のオアシスです。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>露天風呂からのパノラマ絶景と快適なホテルステイなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「野沢温泉 野沢グランドホテル」は温泉街を見下ろす高台に位置し、乳緑色の展望露天風呂と信州の味覚バイキングが好評です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144509%2F144509.html"
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
