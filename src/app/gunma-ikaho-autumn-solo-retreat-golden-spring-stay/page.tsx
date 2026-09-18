import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【10月・11月秋の伊香保温泉ひとり旅・湯元河鹿橋の紅葉ライトアップと黄金の湯おこもり】365段石段街・茶褐色の名湯・上州牛会席！大正ロマン厳選3宿',
  description: '10月下旬〜11月中旬は河鹿橋の紅葉が真っ赤に燃え上がる群馬・伊香保温泉！フレンチ仕込みの料理とモダンな洋風旅館で一人旅の満足度抜群の「洋風旅館ぴのん」、伊香保のシンボル石段街に近く創業四百余年の歴史を誇る「森秋旅館」、家庭的なもてなしと源泉かけ流しの「石坂旅館」を楽天API最新データに基づき徹底比較。',
  keywords: '伊香保温泉 一人旅 宿,伊香保 10月 11月 紅葉 温泉,洋風旅館ぴのん 一人旅,森秋旅館,石坂旅館,伊香保 河鹿橋 一人旅 おこもり',
  openGraph: {
    title: '【10月・11月秋の伊香保温泉ひとり旅・湯元河鹿橋の紅葉ライトアップと黄金の湯おこもり】365段石段街・茶褐色の名湯・上州牛会席！大正ロマン厳選3宿',
    description: '10月下旬〜11月中旬は河鹿橋の紅葉が真っ赤に燃え上がる群馬・伊香保温泉！フレンチ仕込みの料理とモダンな洋風旅館で一人旅の満足度抜群の「洋風旅館ぴのん」、伊香保のシンボル石段街に近く創業四百余年の歴史を誇る「森秋旅館」、家庭的なもてなしと源泉かけ流しの「石坂旅館」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/gunma-ikaho-autumn-solo-retreat-golden-spring-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【10月・11月秋の伊香保温泉ひとり旅・湯元河鹿橋の紅葉ライトアップと黄金の湯おこもり】365段石段街・茶褐色の名湯・上州牛会席！大正ロマン厳選3宿',
    description: '10月下旬〜11月中旬は河鹿橋の紅葉が真っ赤に燃え上がる群馬・伊香保温泉！フレンチ仕込みの料理とモダンな洋風旅館で一人旅の満足度抜群の「洋風旅館ぴのん」、伊香保のシンボル石段街に近く創業四百余年の歴史を誇る「森秋旅館」、家庭的なもてなしと源泉かけ流しの「石坂旅館」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/gunma-ikaho-autumn-solo-retreat-golden-spring-stay',
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
          <span className="text-stone-800 font-medium truncate">【10月・11月秋の伊香保温泉ひとり旅・湯元河鹿橋の紅葉ライトアップと黄金の湯おこもり】365段石段街・茶褐色の名湯・上州牛会席！大正ロマン厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            群馬・伊香保温泉10-11月秋の河鹿橋紅葉＆黄金の湯ひとり旅おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【10月・11月秋の伊香保温泉ひとり旅・湯元河鹿橋の紅葉ライトアップと黄金の湯おこもり】365段石段街・茶褐色の名湯・上州牛会席！大正ロマン厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月17日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              真っ赤に染まる名所「河鹿橋」と、湯煙立ち上る365段の石段街。鉄分豊富で茶褐色に濁る「黄金の湯」に包まれ、秋風香る上州の山懐で大正ロマンに浸る一人旅
            </p>
            <p>
              新宿・東京駅から直行高速バス「伊香保温泉号」で約2時間半。万葉の時代から愛され続ける名湯・伊香保温泉は、秋になると榛名山麓のモミジやカエデが一斉に色づき、町全体が情緒あふれる秋色に染まります。特に湯元付近の朱塗りの太鼓橋「河鹿橋」周辺の紅葉は圧巻で、夜間にはライトアップも実施。鉄分を含み身体を芯から温める茶褐色の「黄金の湯」が秋の冷えを優しく癒やします。
            </p>
            <p>
              一人旅に絶大な支持を受ける美食オーベルジュ風旅館から、石段街至近の伝統ある湯宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 伊香保温泉　森秋旅館（★4.27 / 最低目安：14,100円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 伊香保温泉　松本楼　洋風旅館ぴのん（★4.52 / 最低目安：11,000円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 伊香保温泉　石坂旅館（★4.34 / 最低目安：7,700円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">群馬県 渋川市伊香保町伊香保周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              伊香保温泉　森秋旅館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.27 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">14,100円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/17741/17741.jpg"
                  alt="伊香保温泉　森秋旅館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              ★名湯「黄金の湯」源泉掛け流しが自慢の宿♪ ★観光名所「石段街」まで徒歩３分♪
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>★名湯「黄金の湯」源泉掛け流しが自慢の宿♪ ★観光名所「石段街」まで徒歩３分♪</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ渋川駅下車バスで25分！新宿から高速バスで2時間半！伊香保の名物石段街から徒歩３分と好立地♪散策に抜群の好立地</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17741%2F17741.html"
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
              <span className="text-xs text-stone-500 font-medium">群馬県 渋川市伊香保町伊香保周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              伊香保温泉　松本楼　洋風旅館ぴのん
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.52 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">11,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/19362/19362.jpg"
                  alt="伊香保温泉　松本楼　洋風旅館ぴのん 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              女性が1人でも安心して宿泊できる洋風旅館。1品1品出来立てでお出しする『フレンチ風懐石』が人気
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>女性が1人でも安心して宿泊できる洋風旅館</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>1品1品出来立てでお出しする『フレンチ風懐石』が人気</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ上越線渋川駅よりバスで約２０分、見晴下 下車／関越道渋川・伊香保ＩＣより約１０ｋｍ</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19362%2F19362.html"
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
              <span className="text-xs text-stone-500 font-medium">群馬県 渋川市伊香保町伊香保周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              伊香保温泉　石坂旅館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.34 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,700円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68523/68523.jpg"
                  alt="伊香保温泉　石坂旅館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              石段街まで徒歩１分。【黄金の湯】源泉かけ流しの湯。客室からの山々の景色は必見です！
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>石段街まで徒歩１分</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>【黄金の湯】源泉かけ流しの湯</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>客室からの山々の景色は必見です！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ上越線　渋川駅前より伊香保温泉行バス乗車にて終点「伊香保温泉」下車で徒歩５分　【石段まで徒歩1分】</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68523%2F68523.html"
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
            <span>伊香保10-11月ひとり旅・河鹿橋ライトアップと石段街散策を楽しむ現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「湯元 河鹿橋ライトアップ」幽玄な夜の紅葉トンネル鑑賞</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">10月下旬〜11月中旬の夜間に行われるライトアップ。朱塗りの橋と真紅のモミジが闇夜に浮かび上がる絶景は必見です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「伊香保神社〜石段街365段」金運・出世祈願と湯の花まんじゅう</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">365段の石段を登りきると伊香保神社へ。道中には元祖温泉まんじゅう「勝月堂」の出来立て蒸したてまんじゅうを頬張る幸せ。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">上州名物「水沢うどん」と上州牛すき焼き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">日本三大うどんの一つ「水沢うどん」の強いコシと喉越し。夕食にはサシの入った上州牛のすき焼きや陶板焼きを地酒と堪能。</p>
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
                <span>一人旅で気兼ねなく美味しい創作コース料理と温泉を楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「洋風旅館ぴのん」は女性・男性一人旅に大人気。フレンチ懐石ディナーと、本館松本楼の大浴場・黄金の湯巡りが両方楽しめます。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>河鹿橋の紅葉の見頃時期はいつ頃ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                例年10月下旬から11月上旬がピークです。見頃時期には夕方16:30〜22:00頃までライトアップが行われ幻想的な風景が広がります。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17741%2F17741.html"
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
