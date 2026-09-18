import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【東伊豆・稲取温泉ひとり旅・太平洋インフィニティ絶景おこもり】波打ち際露天風呂・金目鯛煮付け発祥の地・雛のつるし飾り！伊豆急直通の海リトリート厳選3宿',
  description: '岬の先端に突き出た東伊豆屈指のオーシャンビュー温泉地・稲取温泉！全室オーシャンビューと絶景インフィニティ露天風呂が口コミ★4.5超の「海一望絶景の宿 いなとり荘」、多彩な展望露天と金目鯛姿煮が自慢の「稲取東海ホテル湯苑」、全室露天風呂付きの贅沢空間「石花海」を楽天API最新データに基づき徹底比較。',
  keywords: '稲取温泉 一人旅 宿,稲取 ホテル 一人 温泉,いなとり荘,稲取東海ホテル湯苑,石花海 稲取,東伊豆 ひとり旅 おこもり',
  openGraph: {
    title: '【東伊豆・稲取温泉ひとり旅・太平洋インフィニティ絶景おこもり】波打ち際露天風呂・金目鯛煮付け発祥の地・雛のつるし飾り！伊豆急直通の海リトリート厳選3宿',
    description: '岬の先端に突き出た東伊豆屈指のオーシャンビュー温泉地・稲取温泉！全室オーシャンビューと絶景インフィニティ露天風呂が口コミ★4.5超の「海一望絶景の宿 いなとり荘」、多彩な展望露天と金目鯛姿煮が自慢の「稲取東海ホテル湯苑」、全室露天風呂付きの贅沢空間「石花海」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/shizuoka-inatori-solo-retreat-ocean-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【東伊豆・稲取温泉ひとり旅・太平洋インフィニティ絶景おこもり】波打ち際露天風呂・金目鯛煮付け発祥の地・雛のつるし飾り！伊豆急直通の海リトリート厳選3宿',
    description: '岬の先端に突き出た東伊豆屈指のオーシャンビュー温泉地・稲取温泉！全室オーシャンビューと絶景インフィニティ露天風呂が口コミ★4.5超の「海一望絶景の宿 いなとり荘」、多彩な展望露天と金目鯛姿煮が自慢の「稲取東海ホテル湯苑」、全室露天風呂付きの贅沢空間「石花海」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/shizuoka-inatori-solo-retreat-ocean-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【東伊豆・稲取温泉ひとり旅・太平洋インフィニティ絶景おこもり】波打ち際露天風呂・金目鯛煮付け発祥の地・雛のつるし飾り！伊豆急直通の海リトリート厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            静岡・稲取温泉ひとり旅＆東伊豆オーシャンおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【東伊豆・稲取温泉ひとり旅・太平洋インフィニティ絶景おこもり】波打ち際露天風呂・金目鯛煮付け発祥の地・雛のつるし飾り！伊豆急直通の海リトリート厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              東京駅から伊豆急行線特急踊り子号で直通約2時間20分。相模灘と伊豆諸島を一望する岬のいで湯で、どこまでも青い水平線と日本一の稲取キンメに舌鼓を打つ極上の休日
            </p>
            <p>
              東伊豆の海岸線から太平洋に向かって突き出た岬に広がる稲取温泉。良質な塩化物温泉が豊富に湧出しており、湯船に浸かりながら波音を聞き、水平線から昇る朝日を浴びる開放感は唯一無二です。「金目鯛の煮付け発祥の地」として名高く、日戻り操業で一本釣りされる最高級ブランド「稲取キンメ」の脂の乗った極上の味覚が一人旅の夜を彩ります。
            </p>
            <p>
              圧倒的な海絶景とサウナ・インフィニティ露天を誇る人気宿から、海鮮料理を心ゆくまで味わえる料理自慢の宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 海一望絶景の宿　いなとり荘（★4.58 / 最低目安：16,500円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 絶景温泉と魚介満腹の宿　稲取東海ホテル湯苑（★4.51 / 最低目安：10,000円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 稲取温泉　石花海（せのうみ）（★3.38 / 最低目安：18,700円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">静岡県 賀茂郡東伊豆町稲取1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              海一望絶景の宿　いなとり荘
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.58 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">16,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/30928/30928.jpg"
                  alt="海一望絶景の宿　いなとり荘 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              全室オーシャンビュー！レイトチェックアウト12時まで心からのんびり♪
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>全室オーシャンビュー！レイトチェックアウト12時まで心からのんびり♪</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆稲取駅より送迎バスにて約5分、徒歩約15分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30928%2F30928.html"
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
              <span className="text-xs text-stone-500 font-medium">静岡県 賀茂郡東伊豆町稲取1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              絶景温泉と魚介満腹の宿　稲取東海ホテル湯苑
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.51 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">10,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5261/5261.jpg"
                  alt="絶景温泉と魚介満腹の宿　稲取東海ホテル湯苑 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              伊豆七島を一望する波打際のホテル。新鮮な魚介を使った海鮮料理を満喫頂けます。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>伊豆七島を一望する波打際のホテル</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>新鮮な魚介を使った海鮮料理を満喫頂けます</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆急線伊豆稲取駅下車。徒歩約１５分。無料送迎バスあり　※要事前予約（13：30～18：00）　明朝は定期便あります。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5261%2F5261.html"
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
              <span className="text-xs text-stone-500 font-medium">静岡県 賀茂郡東伊豆町稲取1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              稲取温泉　石花海（せのうみ）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 3.38 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">18,700円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/74683/74683.jpg"
                  alt="稲取温泉　石花海（せのうみ） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              ★プロが認定★伊豆の絶景温泉宿に石花海が選ばれました！最上階から望む絶景をぜひお楽しみください！
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>★プロが認定★伊豆の絶景温泉宿に石花海が選ばれました！最上階から望む絶景をぜひお楽しみください！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆稲取駅より徒歩にて１５分／お車にて５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74683%2F74683.html"
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
            <span>稲取温泉ひとり旅・雛のつるし飾りと岬の絶景を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「稲取岬灯台」と「どんつく神社」からの伊豆七島パノラマ散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">青い海に白く映える稲取岬灯台。遊歩道を一人歩き、天気が良ければ伊豆大島や利島、新島などの島々がくっきりと浮かぶ水平線パノラマを堪能。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「文化公園 雛の館」伝統工芸・雛のつるし飾り発祥の歴史見学</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">江戸時代後期から母から娘へと受け継がれてきた愛らしいつるし飾り。色鮮やかなちりめん細工が館内一面に飾られた幻想空間をじっくり鑑賞。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">稲取漁港直営「こらっしぇ」朝市と稲取キンメのにぎり寿司</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">週末に開催される港の朝市。脂の乗った最高級の稲取キンメの炙り寿司やあら汁を、海を眺めながら一人気軽に味わう至福のブランチ。</p>
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
                <span>一人旅で海と一体になれるインフィニティ絶景露天風呂とサウナを満喫できる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「海一望絶景の宿 いなとり荘」は最上階展望露天風呂や絶景サウナを備え、楽天口コミ★4.5超。水平線を眺めながらととのう至福の一人旅が叶います。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>一人旅で稲取名物の金目鯛料理を心ゆくまで満喫したいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「絶景温泉と魚介満腹の宿 稲取東海ホテル湯苑」は全室オーシャンフロントで、自慢の金目鯛姿煮とお造りを一人旅でも贅沢に味わえます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30928%2F30928.html"
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
