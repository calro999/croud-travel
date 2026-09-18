import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【青森の奥座敷・浅虫温泉ひとり旅・陸奥湾夕日おこもり】開湯1200年名湯・津軽三味線生演奏・名物陸奥湾ホタテづくし！青い森鉄道直通の海辺厳選3宿',
  description: '棟方志功や太宰治が愛した津軽の名湯・浅虫温泉！毎夜の津軽三味線ライブと陸奥湾一望の展望露天風呂が口コミ★4.6超の「南部屋・海扇閣」、棟方志功ゆかりの美術品と源泉掛け流し岩風呂を誇る「椿館」、自家源泉と落ち着いたモダン和室が心地よい「宿屋つばき」を楽天API最新データに基づき徹底比較。',
  keywords: '浅虫温泉 一人旅 宿,浅虫温泉 ホテル 一人,南部屋海扇閣,浅虫温泉 椿館,宿屋つばき 浅虫,浅虫 ひとり旅 おこもり',
  openGraph: {
    title: '【青森の奥座敷・浅虫温泉ひとり旅・陸奥湾夕日おこもり】開湯1200年名湯・津軽三味線生演奏・名物陸奥湾ホタテづくし！青い森鉄道直通の海辺厳選3宿',
    description: '棟方志功や太宰治が愛した津軽の名湯・浅虫温泉！毎夜の津軽三味線ライブと陸奥湾一望の展望露天風呂が口コミ★4.6超の「南部屋・海扇閣」、棟方志功ゆかりの美術品と源泉掛け流し岩風呂を誇る「椿館」、自家源泉と落ち着いたモダン和室が心地よい「宿屋つばき」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/aomori-asamushi-solo-retreat-mutsubay-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【青森の奥座敷・浅虫温泉ひとり旅・陸奥湾夕日おこもり】開湯1200年名湯・津軽三味線生演奏・名物陸奥湾ホタテづくし！青い森鉄道直通の海辺厳選3宿',
    description: '棟方志功や太宰治が愛した津軽の名湯・浅虫温泉！毎夜の津軽三味線ライブと陸奥湾一望の展望露天風呂が口コミ★4.6超の「南部屋・海扇閣」、棟方志功ゆかりの美術品と源泉掛け流し岩風呂を誇る「椿館」、自家源泉と落ち着いたモダン和室が心地よい「宿屋つばき」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/aomori-asamushi-solo-retreat-mutsubay-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【青森の奥座敷・浅虫温泉ひとり旅・陸奥湾夕日おこもり】開湯1200年名湯・津軽三味線生演奏・名物陸奥湾ホタテづくし！青い森鉄道直通の海辺厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            青森・浅虫温泉ひとり旅＆陸奥湾シーサイドおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【青森の奥座敷・浅虫温泉ひとり旅・陸奥湾夕日おこもり】開湯1200年名湯・津軽三味線生演奏・名物陸奥湾ホタテづくし！青い森鉄道直通の海辺厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              新青森駅から青い森鉄道でわずか約30分。陸奥湾の波静かな海岸線に湯けむりを上げる名湯で、夕暮れの湯ノ島シルエットと津軽三味線の魂の響きに酔いしれる休日
            </p>
            <p>
              平安時代、円仁（慈覚大師）が傷ついた鹿が湯浴みするのを見て発見したと伝わる浅虫温泉。古くは麻を蒸すために使われていたことから「麻蒸」が転じて「浅虫」となった歴史を持ちます。無色透明で肌触りの柔らかな塩化物・硫酸塩泉は、長湯しても疲れにくく体の芯までポカポカに温まります。陸奥湾特産の肉厚なホタテ料理も絶品です。
            </p>
            <p>
              津軽の伝統芸能と絶景パノラマを堪能できる名門ホテルから、文人墨客の歴史息づく静かな木造温泉宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 浅虫温泉　南部屋・海扇閣（なんぶや・かいせんかく）（★4.64 / 最低目安：16,900円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 浅虫温泉　椿館（★4.54 / 最低目安：13,200円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 浅虫温泉　宿屋つばき（★4.25 / 最低目安：6,600円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">青森県 青森市浅虫蛍谷31周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              浅虫温泉　南部屋・海扇閣（なんぶや・かいせんかく）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.64 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">16,900円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4962/4962.jpg"
                  alt="浅虫温泉　南部屋・海扇閣（なんぶや・かいせんかく） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              2024年4月リニューアルオープン！１階ロビーにて津軽三味線ショー毎晩開催
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>2024年4月リニューアルオープン！１階ロビーにて津軽三味線ショー毎晩開催</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：青い森鉄道　浅虫温泉駅より　徒歩約2分。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4962%2F4962.html"
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
              <span className="text-xs text-stone-500 font-medium">青森県 青森市浅虫内野14周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              浅虫温泉　椿館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.54 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">13,200円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13755/13755.jpg"
                  alt="浅虫温泉　椿館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              ９つ自家源泉・飲泉・源泉料理。版画家棟方志功の直筆画多数
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>９つ自家源泉</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>源泉料理</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>版画家棟方志功の直筆画多数</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：青い森鉄道「浅虫温泉駅」下車 / 東北自動車道 青森東ICより1５分 / 青森空港より５０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13755%2F13755.html"
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
              <span className="text-xs text-stone-500 font-medium">青森県 青森市浅虫蛍谷25周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              浅虫温泉　宿屋つばき
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.25 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,600円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/20710/20710.jpg"
                  alt="浅虫温泉　宿屋つばき 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              浅虫温泉駅より徒歩1分。3つの貸切風呂と大浴場がある素泊まりの宿。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>浅虫温泉駅より徒歩1分</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>3つの貸切風呂と大浴場がある素泊まりの宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：青い森鉄道「浅虫温泉駅」より徒歩１分／東北自動車道・青森東ＩＣより１０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20710%2F20710.html"
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
            <span>浅虫温泉ひとり旅・津軽文化と陸奥湾絶景を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「サンセットビーチあさむし」夕暮れに浮かぶ湯ノ島の絶景鑑賞</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">海岸沿いの遊歩道を夕方に散歩。陸奥湾の穏やかな波の音を聞きながら、赤く染まる夕日と湯ノ島の美しい円錐形のシルエットを一人静かに眺める贅沢。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「浅虫海づり公園」と青森県営浅虫水族館のトンネル水槽</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">海岸から突き出た桟橋で気軽に海釣り体験。水族館では長さ15mのトンネル水槽を泳ぐ陸奥湾の魚たちやイルカパフォーマンスに癒やされます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">浅虫名物「陸奥湾ホタテの貝焼き味噌」と地酒「田酒」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">大きなホタテの貝殻を鍋代わりにして、新鮮なホタテと卵、味噌を出汁で煮込んだ郷土料理。青森が誇る幻の銘酒「田酒」との相性は筆舌に尽くしがたい旨さ。</p>
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
                <span>一人旅で毎夜の津軽三味線生演奏と陸奥湾一望の露天風呂を楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「浅虫温泉 南部屋・海扇閣」は最上階展望風呂からの夕日絶景と、ロビーで毎晩開催されるプロ奏者の津軽三味線ライブが圧巻。一人旅に感動の滞在を提供します。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>棟方志功ゆかりの歴史ある宿で、源泉掛け流しの温泉を静かに楽しむなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「浅虫温泉 椿館」は棟方志功が定宿とし多くの作品を残した老舗旅館。飲泉もできる良質な自家源泉掛け流しと温かいもてなしが一人旅に大人気です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4962%2F4962.html"
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
