import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【世界遺産・湯の峰温泉ひとり旅・開湯1800年つぼ湯おこもり】日本最古の共同浴場・小栗判官伝説・七色に変わる奇跡の源泉！熊野本宮大社参拝厳選3宿',
  description: '世界遺産に登録された日本唯一の入浴できる温泉「つぼ湯」がある和歌山・湯の峰温泉！女将の温かいもてなしと温泉料理が口コミ★4.8超の「よしのや旅館」、創業江戸中期の数寄屋造りと自家源泉掛け流しを誇る「旅館あづまや」、素朴な居心地と湯治の風情が魅力の「民宿あづまや荘」を楽天API最新データに基づき徹底比較。',
  keywords: '湯の峰温泉 一人旅 宿,湯の峰 ホテル 一人 温泉,よしのや旅館 湯の峰,あづまや 湯の峰温泉,あづまや荘,つぼ湯 ひとり旅 おこもり',
  openGraph: {
    title: '【世界遺産・湯の峰温泉ひとり旅・開湯1800年つぼ湯おこもり】日本最古の共同浴場・小栗判官伝説・七色に変わる奇跡の源泉！熊野本宮大社参拝厳選3宿',
    description: '世界遺産に登録された日本唯一の入浴できる温泉「つぼ湯」がある和歌山・湯の峰温泉！女将の温かいもてなしと温泉料理が口コミ★4.8超の「よしのや旅館」、創業江戸中期の数寄屋造りと自家源泉掛け流しを誇る「旅館あづまや」、素朴な居心地と湯治の風情が魅力の「民宿あづまや荘」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/wakayama-yunomine-solo-retreat-world-heritage-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【世界遺産・湯の峰温泉ひとり旅・開湯1800年つぼ湯おこもり】日本最古の共同浴場・小栗判官伝説・七色に変わる奇跡の源泉！熊野本宮大社参拝厳選3宿',
    description: '世界遺産に登録された日本唯一の入浴できる温泉「つぼ湯」がある和歌山・湯の峰温泉！女将の温かいもてなしと温泉料理が口コミ★4.8超の「よしのや旅館」、創業江戸中期の数寄屋造りと自家源泉掛け流しを誇る「旅館あづまや」、素朴な居心地と湯治の風情が魅力の「民宿あづまや荘」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/wakayama-yunomine-solo-retreat-world-heritage-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【世界遺産・湯の峰温泉ひとり旅・開湯1800年つぼ湯おこもり】日本最古の共同浴場・小栗判官伝説・七色に変わる奇跡の源泉！熊野本宮大社参拝厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            和歌山・湯の峰温泉ひとり旅＆世界遺産つぼ湯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【世界遺産・湯の峰温泉ひとり旅・開湯1800年つぼ湯おこもり】日本最古の共同浴場・小栗判官伝説・七色に変わる奇跡の源泉！熊野本宮大社参拝厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月17日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              熊野本宮大社から車・バスで約10分。熊野詣の旅人たちが身を清めた日本最古の湯。湯の谷川沿いに立ち上る湯けむりと、一日に七度色を変える天然岩風呂に浸かる聖地リトリート
            </p>
            <p>
              開湯約1800年、熊野古道の祈りの道に湧き続ける湯の峰温泉。渓流沿いに自噴する高温の含硫黄-ナトリウム-炭酸水素塩・塩化物泉は、小栗判官が病を癒やした「蘇生伝説」の舞台としても名高く、日によって七色に湯の色が変わる天然岩風呂「つぼ湯」は世界遺産に登録されています。温泉水で炊き上げた茶粥や温泉卵など、地球の恵みをいただく素朴な湯治文化が一人旅の心を洗います。
            </p>
            <p>
              口コミ満点評価に近いアットホームな名物旅館から、大正・昭和の風情を残す老舗数寄屋宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. よしのや旅館　＜和歌山県＞（★4.88 / 最低目安：6,600円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 旅館あづまや　＜和歌山県＞（★4.47 / 最低目安：10,890円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 民宿あづまや荘（★3.96 / 最低目安：5,800円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">和歌山県 田辺市本宮町湯ノ峰3周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              よしのや旅館　＜和歌山県＞
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.88 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,600円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/106190/106190.jpg"
                  alt="よしのや旅館　＜和歌山県＞ 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              湯の峰温泉では数少ない貸切露天風呂を有し、温泉を使った創作料理でおもてなし。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>湯の峰温泉では数少ない貸切露天風呂を有し</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>温泉を使った創作料理でおもてなし</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：紀伊田辺駅よりバスにて８０分／新宮駅よりバスにて７０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D106190"
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
              <span className="text-xs text-stone-500 font-medium">和歌山県 田辺市本宮町湯峰12周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              旅館あづまや　＜和歌山県＞
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.47 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">10,890円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/129554/129554.jpg"
                  alt="旅館あづまや　＜和歌山県＞ 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              名湯と温泉料理の宿で知られている当館。熊野古道のメッカ、本宮に在り、つぼ湯が目印です。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>名湯と温泉料理の宿で知られている当館</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>熊野古道のメッカ</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>本宮に在り</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：紀伊田辺駅よりバス・タクシーで約９０分/新宮駅よりバス、タクシーで６０分「湯峰温泉」下車すぐ/南紀田辺ＩＣから車で70分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D129554"
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
              <span className="text-xs text-stone-500 font-medium">和歌山県 田辺市本宮町湯峯71周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              民宿あづまや荘
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 3.96 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/106244/106244.jpg"
                  alt="民宿あづまや荘 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              泉質の良い温泉と、温泉を使ったお料理で、家庭的なおもてなし。身も心もほっこりと
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>泉質の良い温泉と</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>温泉を使ったお料理で</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>家庭的なおもてなし</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：紀伊田辺駅よりお車にて７０分、バスにて９０分／新宮駅よりお車にて５０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D106244"
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
            <span>湯の峰温泉ひとり旅・つぼ湯入浴と湯筒体験を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">世界遺産「つぼ湯」30分貸切で浸かる奇跡の天然岩風呂体験</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">番頭で番号札を受け取り、川原の小屋の中の石風呂へ。一日に七回色が変わるとされる乳白色〜青みがかった名湯を一人占めする至極の体験。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">川沿いの「湯筒（ゆづつ）」源泉90度で茹でる温泉たまごとサツマイモ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">地元の売店で卵や野菜をネットごと購入して湯筒へ。茹でたてのアツアツ温泉たまごの硫黄の香りとまろやかな味わいを一人頬張る旅情。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「大日越（だいにちごえ）」熊野本宮大社へと続く古道トレッキング</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">湯の峰温泉と熊野本宮大社を結ぶ約2kmの峠道。古人が祈りを捧げながら歩いた苔むす石畳とシダの群生の中を一人静かに歩く巡礼。</p>
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
                <span>一人旅でとにかく口コミ評価が高く、温かい料理ともてなしを味わえる湯の峰の宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「よしのや旅館」は楽天口コミ★4.8超。女将の心のこもったもてなしと温泉水を使った滋味あふれる料理が一人旅の宿泊者から絶賛されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>歴史ある木造数寄屋建築と本格的な温泉大浴場を楽しむなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「旅館あづまや」は創業江戸時代。総槇造りの「大風呂」や「さましの湯」など、昔ながらの湯治の趣を色濃く残す一人旅憧れの名宿です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D106190"
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
