import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【こんぴら温泉郷ひとり旅・金刀比羅宮門前おこもり】石段街を望む展望露天・美肌の名湯・讃岐牛＆手打ちうどん！四国随一の霊峰リトリート厳選3宿',
  description: '「さぬきのこんぴらさん」の参道に湧く四国屈指の温泉郷！金刀比羅宮参道口に位置し展望露天風呂や和モダン客室が極上の「琴平グランドホテル 桜の抄」、多彩な庭園露天や館内湯巡りが贅沢な姉妹館「湯元こんぴら温泉華の湯 紅梅亭」、アットホームなもてなしと良心的な価格が魅力の老舗「虎屋旅館」を楽天API最新データに基づき徹底比較。',
  keywords: 'こんぴら温泉 一人旅 宿,琴平 ホテル 一人 温泉,桜の抄 一人旅,紅梅亭 こんぴら温泉,虎屋旅館 琴平,金刀比羅宮 ひとり旅 おこもり',
  openGraph: {
    title: '【こんぴら温泉郷ひとり旅・金刀比羅宮門前おこもり】石段街を望む展望露天・美肌の名湯・讃岐牛＆手打ちうどん！四国随一の霊峰リトリート厳選3宿',
    description: '「さぬきのこんぴらさん」の参道に湧く四国屈指の温泉郷！金刀比羅宮参道口に位置し展望露天風呂や和モダン客室が極上の「琴平グランドホテル 桜の抄」、多彩な庭園露天や館内湯巡りが贅沢な姉妹館「湯元こんぴら温泉華の湯 紅梅亭」、アットホームなもてなしと良心的な価格が魅力の老舗「虎屋旅館」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/kagawa-kotohira-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【こんぴら温泉郷ひとり旅・金刀比羅宮門前おこもり】石段街を望む展望露天・美肌の名湯・讃岐牛＆手打ちうどん！四国随一の霊峰リトリート厳選3宿',
    description: '「さぬきのこんぴらさん」の参道に湧く四国屈指の温泉郷！金刀比羅宮参道口に位置し展望露天風呂や和モダン客室が極上の「琴平グランドホテル 桜の抄」、多彩な庭園露天や館内湯巡りが贅沢な姉妹館「湯元こんぴら温泉華の湯 紅梅亭」、アットホームなもてなしと良心的な価格が魅力の老舗「虎屋旅館」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/kagawa-kotohira-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【こんぴら温泉郷ひとり旅・金刀比羅宮門前おこもり】石段街を望む展望露天・美肌の名湯・讃岐牛＆手打ちうどん！四国随一の霊峰リトリート厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            香川・こんぴら温泉ひとり旅＆門前町おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【こんぴら温泉郷ひとり旅・金刀比羅宮門前おこもり】石段街を望む展望露天・美肌の名湯・讃岐牛＆手打ちうどん！四国随一の霊峰リトリート厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              「一生に一度はこんぴら参り」。785段の石段を登り切った爽快感の後は、門前町の良質な名湯と讃岐の美食に癒やされるご褒美ソロトリップ
            </p>
            <p>
              古くから全国の庶民の憧れの聖地として賑わいを見せてきた讃岐金刀比羅宮。参道の賑わいから一歩足を踏み入れると、柔らかな肌触りの温泉が湧き出る湯の街が広がります。奥社まで1368段、本宮まで785段の参拝道を自分の足で歩き切った後の温泉は、旅人にとって最高の恵みと癒やしです。
            </p>
            <p>
              参道の情緒を窓下に望む展望自慢の老舗旅館から、心温まる家庭的なもてなしの宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. こんぴら温泉　琴平グランドホテル　桜の抄（★4.59 / 最低目安：10,450円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 湯元こんぴら温泉華の湯　紅梅亭（★4.6 / 最低目安：12,100円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 虎屋旅館（★4.6 / 最低目安：8,300円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">香川県 仲多度郡琴平町977周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              こんぴら温泉　琴平グランドホテル　桜の抄
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.59 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">10,450円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5900/5900.jpg"
                  alt="こんぴら温泉　琴平グランドホテル　桜の抄 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              金刀比羅宮に続く参道まで徒歩1分で参拝に便利な温泉宿。和洋約50種類の朝食バイキング好評。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>金刀比羅宮に続く参道まで徒歩1分で参拝に便利な温泉宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>和洋約50種類の朝食バイキング好評</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：全室Wi-Fi無料/ＪＲ琴平駅下車、徒歩約15分（無料送迎有・要予約）。車/善通寺ＩＣより約15分　高松空港より約40分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5900"
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
              <span className="text-xs text-stone-500 font-medium">香川県 仲多度郡琴平町556周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              湯元こんぴら温泉華の湯　紅梅亭
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.6 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">12,100円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5901/5901.jpg"
                  alt="湯元こんぴら温泉華の湯　紅梅亭 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              露天風呂付スイートOPEN◆2種の源泉を楽しむ＜3箇所15種類の湯処＞でのんびり湯巡り
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>露天風呂付スイートOPEN</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>2種の源泉を楽しむ＜3箇所15種類の湯処＞でのんびり湯巡り</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ琴平駅下車、徒歩5分（無料送迎有・要予約）。車：道善通寺ＩＣ下車約15分。高松空港より約40分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5901"
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
              <span className="text-xs text-stone-500 font-medium">香川県 仲多度郡琴平町957周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              虎屋旅館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.6 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,300円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/188191/188191.jpg"
                  alt="虎屋旅館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              【2023年夏OPEN】金刀比羅宮の参拝に◎400年以上の虎屋旅館の歴史を現代に残しオープン
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>【2023年夏OPEN】金刀比羅宮の参拝に◎400年以上の虎屋旅館の歴史を現代に残しオープン</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ琴平駅より徒歩約10分　高松自動車道「善通寺」ICよりR319経由で15分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D188191"
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
            <span>こんぴら温泉ひとり旅・門前町参拝と讃岐うどんを味わう現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">朝の澄んだ空気の中で登る金刀比羅宮本宮〜奥社参拝</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">観光客が少ない早朝の参拝が一人旅にはおすすめ。木々のマイナスイオンと讃岐平野の見晴らしが疲れを吹き飛ばしてくれます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">現存日本最古の芝居小屋「旧金毘羅大芝居（金丸座）」見学</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">天保6年（1835年）に建てられた歴史的芝居小屋。廻り舞台や奈落（舞台裏）など、江戸時代の歌舞伎劇場の構造をじっくり見学できます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">参道名物「手打ち讃岐うどん」の名店巡りとしょうゆソフト</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">茹でたてのコシの強い讃岐うどんをセルフ形式でハシゴ。参道スイーツの「灸まん」や「かまたまソフト」も一人食べ歩きに大人気です。</p>
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
                <span>金刀比羅宮の参道に近く、展望露天風呂とハイグレードな空間を楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「こんぴら温泉 琴平グランドホテル 桜の抄」は参道22段目に位置し、展望露天風呂や贅沢な客室、讃岐の味覚が揃った最高峰のおこもり宿です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>館内で多彩な湯巡りを楽しめる温泉自慢の宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「湯元こんぴら温泉華の湯 紅梅亭」は2つの大浴場と多彩な露天風呂を備え、広々とした庭園の中で心ゆくまで湯巡りを満喫できます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5900"
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
