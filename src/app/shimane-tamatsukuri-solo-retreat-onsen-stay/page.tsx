import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【出雲・玉造温泉ひとり旅・美肌神湯おこもり】日本最古の美肌温泉・玉湯川足湯・しまね和牛会席！出雲大社参拝と縁結びの温泉郷厳選3宿',
  description: '『出雲国風土記』に「神の湯」と記された玉造温泉！毎夜の縁日や安来節ショーと美肌会席が一人旅に大好評の「白石家」、自家源泉かけ流しの美肌湯を心ゆくまで堪能できる「湯陣 千代の湯」、日本庭園と広大な大浴場を誇る「松乃湯」を楽天API最新データに基づき徹底比較。',
  keywords: '玉造温泉 一人旅 宿,玉造温泉 ホテル 一人,白石家 玉造,湯陣 千代の湯,松乃湯 玉造,出雲大社 玉造温泉 ひとり旅',
  openGraph: {
    title: '【出雲・玉造温泉ひとり旅・美肌神湯おこもり】日本最古の美肌温泉・玉湯川足湯・しまね和牛会席！出雲大社参拝と縁結びの温泉郷厳選3宿',
    description: '『出雲国風土記』に「神の湯」と記された玉造温泉！毎夜の縁日や安来節ショーと美肌会席が一人旅に大好評の「白石家」、自家源泉かけ流しの美肌湯を心ゆくまで堪能できる「湯陣 千代の湯」、日本庭園と広大な大浴場を誇る「松乃湯」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/shimane-tamatsukuri-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【出雲・玉造温泉ひとり旅・美肌神湯おこもり】日本最古の美肌温泉・玉湯川足湯・しまね和牛会席！出雲大社参拝と縁結びの温泉郷厳選3宿',
    description: '『出雲国風土記』に「神の湯」と記された玉造温泉！毎夜の縁日や安来節ショーと美肌会席が一人旅に大好評の「白石家」、自家源泉かけ流しの美肌湯を心ゆくまで堪能できる「湯陣 千代の湯」、日本庭園と広大な大浴場を誇る「松乃湯」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/shimane-tamatsukuri-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【出雲・玉造温泉ひとり旅・美肌神湯おこもり】日本最古の美肌温泉・玉湯川足湯・しまね和牛会席！出雲大社参拝と縁結びの温泉郷厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            島根・出雲玉造温泉ひとり旅＆日本最古の美肌神湯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【出雲・玉造温泉ひとり旅・美肌神湯おこもり】日本最古の美肌温泉・玉湯川足湯・しまね和牛会席！出雲大社参拝と縁結びの温泉郷厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月14日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              「ひとたび濯げば形容端正しく、再び浴すれば万の病悉に除こる」。三種の神器・勾玉のふるさとで、まるで化粧水のような神湯に浸かり運気を呼び込むソロトリップ
            </p>
            <p>
              島根県松江市に位置し、奈良時代から「美肌の湯」として神話に語り継がれる玉造温泉。製薬会社の分析でも高級化粧水レベルの保湿・水分補給作用が科学的に実証されており、出雲大社への参拝と合わせた一人旅リトリートに絶大な人気を誇ります。
            </p>
            <p>
              一人旅を温かく歓迎する名物旅館から、自家源泉かけ流しの良質な湯船を持つ宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 出雲・玉造温泉　白石家（★4.7 / 最低目安：13,000円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 玉造温泉　源泉かけ流しの宿　湯陣　千代の湯（★4.13 / 最低目安：14,300円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 玉造温泉　松乃湯（★4.2 / 最低目安：14,520円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">島根県 松江市玉湯町玉造44周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              出雲・玉造温泉　白石家
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.7 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">13,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/78179/78179.jpg"
                  alt="出雲・玉造温泉　白石家 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              【ご縁に結ばれて創業300年】楽天トラベルアワード11年連続受賞施設！口コミ総数3,326件☆
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>【ご縁に結ばれて創業300年】楽天トラベルアワード11年連続受賞施設！口コミ総数3,326件☆</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：【山陰道】玉造インターから車で約１０分 ■出雲大社から車で約４０分の距離 ■ＪＲ玉造温泉駅より送迎有（事前連絡要）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78179%2F78179.html"
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
              <span className="text-xs text-stone-500 font-medium">島根県 松江市玉湯町玉造12周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              玉造温泉　源泉かけ流しの宿　湯陣　千代の湯
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.13 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">14,300円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147931/147931.jpg"
                  alt="玉造温泉　源泉かけ流しの宿　湯陣　千代の湯 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              最大3,000円クーポン配布中！レトロな雰囲気、源泉かけ流しの貸切風呂と大浴場・露天風呂が好評♪
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>最大3,000円クーポン配布中！レトロな雰囲気、源泉かけ流しの貸切風呂と大浴場・露天風呂が好評♪</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：お車：山陰道松江玉造ICより約１０分 ／ 鉄道：ＪＲ山陰本線玉造温泉駅よりタクシーにて約５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147931%2F147931.html"
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
              <span className="text-xs text-stone-500 font-medium">島根県 松江市玉湯町玉造12周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              玉造温泉　松乃湯
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.2 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">14,520円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5880/5880.jpg"
                  alt="玉造温泉　松乃湯 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              〇創業140年、美人の湯をたっぷりと楽しむ玉造の湯宿〇
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>〇創業140年、美人の湯をたっぷりと楽しむ玉造の湯宿〇</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：JR玉造温泉駅より無料送迎【迎え】１４：００～最終１９：００要事前連絡【送り】始発８：２０～最終９：５０計４便</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5880%2F5880.html"
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
            <span>玉造温泉ひとり旅・美肌と縁結びを祈る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">玉作湯神社（たまつくりゆじんじゃ）の「願い石・叶い石」祈願</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">境内に湧き出る霊験あらたかな願い石。社務所で授かる「叶い石」を願い石に重ねて心願成就を祈り、世界に一つだけのお守りを作ることができます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">玉湯川沿いの桜並木・足湯散策と「美肌温泉ボトル」持ち帰り</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">川沿いに整備された足湯に浸かりながら散歩。美肌の湯をボトルに詰めて持ち帰れるスポットもあり、天然の化粧水として旅の後も楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">しまね和牛のステーキと日本海ののどぐろ塩焼きディナー</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">全国和牛能力共進会で内閣総理大臣賞を受賞した「しまね和牛」。脂がとろけるのどぐろとともに、島根の銘酒「月山」「王禄」で味わう夕食は絶品です。</p>
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
                <span>一人旅でも温かいもてなしと出雲の郷土芸能を楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「出雲・玉造温泉 白石家」はおもてなし評価全国トップクラス。毎晩ロビーで開催される安来節民謡ショーや、美肌温泉・しまね和牛会席が一人旅でも大人気です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>自家源泉かけ流しの本物の美肌湯にじっくり浸かりたいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「玉造温泉 源泉かけ流しの宿 湯陣 千代の湯」は敷地内から湧出する源泉を惜しみなく使用。静かで落ち着いた大人の一人旅にぴったりです。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78179%2F78179.html"
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
