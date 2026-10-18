import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/shizuoka-shimoda-solo-retreat-ocean-onsen-stay/" },
  title: '南伊豆・下田温泉ひとり旅・ペリー黒船と白砂ビーチおこもり：自家源泉掛け流し・下田金目鯛づくし・海一望露天風呂！特急サフィール直通の港町厳選3宿',
  description: '幕末開国の舞台とエメラルドグリーンの白浜海岸を抱く南伊豆・下田温泉！里山の静寂と敷地内自噴の極上掛け流し温泉が口コミ★4.7超の「下田セントラルホテル」、海一望の展望大浴場と金目鯛会席が評判の「下田ベイクロシオ」、白浜海岸直結のオーシャンリゾート「ホテル伊豆急」を楽天API最新データに基づき徹底比較。',
  keywords: '下田温泉 一人旅 宿,下田 ホテル 一人 温泉,下田セントラルホテル,下田ベイクロシオ,ホテル伊豆急,下田 ひとり旅 おこもり',
  openGraph: {
    title: '南伊豆・下田温泉ひとり旅・ペリー黒船と白砂ビーチおこもり：自家源泉掛け流し・下田金目鯛づくし・海一望露天風呂！特急サフィール直通の港町厳選3宿',
    description: '幕末開国の舞台とエメラルドグリーンの白浜海岸を抱く南伊豆・下田温泉！里山の静寂と敷地内自噴の極上掛け流し温泉が口コミ★4.7超の「下田セントラルホテル」、海一望の展望大浴場と金目鯛会席が評判の「下田ベイクロシオ」、白浜海岸直結のオーシャンリゾート「ホテル伊豆急」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/shizuoka-shimoda-solo-retreat-ocean-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '南伊豆・下田温泉ひとり旅・ペリー黒船と白砂ビーチおこもり：自家源泉掛け流し・下田金目鯛づくし・海一望露天風呂！特急サフィール直通の港町厳選3宿',
    description: '幕末開国の舞台とエメラルドグリーンの白浜海岸を抱く南伊豆・下田温泉！里山の静寂と敷地内自噴の極上掛け流し温泉が口コミ★4.7超の「下田セントラルホテル」、海一望の展望大浴場と金目鯛会席が評判の「下田ベイクロシオ」、白浜海岸直結のオーシャンリゾート「ホテル伊豆急」を楽天API最新データに基づき徹底比較。',
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
    datePublished: '2026-10-18T00:00:00+09:00',
    dateModified: '2026-10-19T00:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/shizuoka-shimoda-solo-retreat-ocean-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【南伊豆・下田温泉ひとり旅・ペリー黒船と白砂ビーチおこもり】自家源泉掛け流し・下田金目鯛づくし・海一望露天風呂！特急サフィール直通の港町厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"一人旅で里山の静寂と極上の自家源泉掛け流し温泉を堪能できる宿は？","acceptedAnswer":{"@type":"Answer","text":"「里山の別邸 下田セントラルホテル」は敷地内湧出の豊富な源泉掛け流しと庭園露天風呂が自慢で楽天口コミ★4.7超。大人のおこもり一人旅に最適です。"}},{"@type":"Question","name":"下田港や相模湾のオーシャンビューと美味しい金目鯛料理を味わうなら？","acceptedAnswer":{"@type":"Answer","text":"「下田温泉 下田ベイクロシオ」は高台から海を見晴らし、楽天口コミ★4.6超。贅沢な金目鯛会席と落ち着いた館内が一人旅に大好評です。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【南伊豆・下田温泉ひとり旅・ペリー黒船と白砂ビーチおこもり】自家源泉掛け流し・下田金目鯛づくし・海一望露天風呂！特急サフィール直通の港町厳選3宿","item":"https://croud-travel.pages.dev/shizuoka-shimoda-solo-retreat-ocean-onsen-stay"}]}) }}
      />
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            静岡・下田温泉ひとり旅＆南伊豆オーシャンおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">「南伊豆・下田温泉ひとり旅・ペリー黒船と白砂ビーチおこもり」自家源泉掛け流し・下田金目鯛づくし・海一望露天風呂！特急サフィール直通の港町厳選3宿</h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日： | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              東京駅からJR特急踊り子・サフィール踊り子号で乗り換えなし約2時間40分。黒船来航の歴史薫るレトロな街並みと、南伊豆の透き通る海、豊かな単純温泉に身を委ねる上質な休日
            </p>
            <p>
              伊豆半島の最南端近くに位置し、温暖な気候と白砂のビーチに恵まれた下田温泉。蓮台寺温泉や河内温泉など複数の豊かな源泉を持ち、肌に優しい弱アルカリ性単純温泉が長時間の湯浴みにも心地よく寄り添います。ペリーロードのなまこ壁のレトロな洋館散策や、下田港水揚げ日本一を誇る肉厚な地金目鯛の刺身と煮付けが一人旅の贅沢を極めます。
            </p>
            <p>
              里山の静けさに包まれる高級プライベート温泉宿から、海を間近に感じるリゾートホテルまで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 里山の別邸　下田セントラルホテル（★4.75 / 最低目安：23,000円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 下田温泉　下田ベイクロシオ（★4.62 / 最低目安：6,200円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 下田温泉　ホテル伊豆急（★4.41 / 最低目安：4,950円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">静岡県 下田市相玉133-1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              里山の別邸　下田セントラルホテル
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.75 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">23,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/25287/25287.jpg"
                  alt="里山の別邸　下田セントラルホテル 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              温泉、料理、おもてなし、クチコミ高評価！伊豆の下田『相玉温泉』を唯一自家源泉とする一軒宿。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>おもてなし</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>クチコミ高評価！伊豆の下田『相玉温泉』を唯一自家源泉とする一軒宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆急下田駅より無料送迎あり（要予約・定時運行）／東名高速沼津ＩＣより伊豆縦貫道→天城峠→県道１５号利用</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25287%2F25287.html"
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
              <span className="text-xs text-stone-500 font-medium">静岡県 下田市柿崎4-1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              下田温泉　下田ベイクロシオ
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.62 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,200円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5645/5645.jpg"
                  alt="下田温泉　下田ベイクロシオ 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              伊豆急下田駅から1.3km・白浜海岸まで3.5Km　海抜16mの高台から下田湾が一望
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>伊豆急下田駅から1.3km</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>白浜海岸まで3.5Km　海抜16mの高台から下田湾が一望</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆急下田駅より送迎はご連絡をお願いいたします。お車はＲ135「柿崎西」信号付近のセブンイレブン横の坂を上る</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5645%2F5645.html"
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
              <span className="text-xs text-stone-500 font-medium">静岡県 下田市白浜2732-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              下田温泉　ホテル伊豆急
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.41 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">4,950円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14774/14774.jpg"
                  alt="下田温泉　ホテル伊豆急 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              海の幸と二種類の温泉が楽しめる白浜海岸目の前のスパリゾート。美しい海を眺めながらとっておきの時間を。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>海の幸と二種類の温泉が楽しめる白浜海岸目の前のスパリゾート</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>美しい海を眺めながらとっておきの時間を</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆急下田駅から送迎あり。時刻はホテル伊豆急ホームページを参照。（10名以上要予約）。Ｒ135号沿い白浜海岸前。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14774%2F14774.html"
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
            <span>下田ひとり旅・ペリーロードと爪木崎水仙岬を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「ペリーロード」平滑川沿いの柳並木となまこ壁・石造り洋館散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">幕末にペリー提督が歩いた小径。石畳の小川沿いにアンティークショップや古民家カフェが並び、一人静かに幕末ロマンと珈琲を楽しむ時間。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「下田ロープウェイ・寝姿山」下田港と伊豆七島を見晴らすパノラマ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">女性の仰向けに寝ている姿に見える寝姿山。山頂の絶景レストラン「THE ROYAL HOUSE」で海を見ながら優雅なランチ＆ティータイム。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">下田港名物「地金目鯛の姿煮」と「下田バーガー（金目鯛バーガー）」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">水揚げ日本一の下田港で揚がった新鮮な金目鯛。甘辛い煮付けはもちろん、金目鯛のフライを挟んだ特大ご当地バーガーも一人ランチに人気。</p>
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
                <span>一人旅で里山の静寂と極上の自家源泉掛け流し温泉を堪能できる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「里山の別邸 下田セントラルホテル」は敷地内湧出の豊富な源泉掛け流しと庭園露天風呂が自慢で楽天口コミ★4.7超。大人のおこもり一人旅に最適です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>下田港や相模湾のオーシャンビューと美味しい金目鯛料理を味わうなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「下田温泉 下田ベイクロシオ」は高台から海を見晴らし、楽天口コミ★4.6超。贅沢な金目鯛会席と落ち着いた館内が一人旅に大好評です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25287%2F25287.html"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
          >
            一番人気の宿をチェックする（楽天トラベル）
          </a>
        </div>
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】里山の別邸 下田セントラルホテルを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 伊豆急下田駅よりアクセス。伊豆急下田駅より無料送迎あり（要予約・定時運行）／東名高速沼津ＩＣより伊豆縦貫道→天城峠→県道１５号利用。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「里山の別邸 下田セントラルホテル」にチェックイン。温泉、料理、おもてなし、クチコミ高評価！伊豆の下田『相玉温泉』を唯一自家源泉とする一軒宿。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「里山の別邸 下田セントラルホテル」の湯処へ。温泉、料理、おもてなし、クチコミ高評価！伊豆の下田『相玉温泉』を唯一自とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「里山の別邸 下田セントラルホテル」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「里山の別邸 下田セントラルホテル」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「里山の別邸 下田セントラルホテル」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「下田温泉 下田ベイクロシオ」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <a href="/winter-ibaraki-ankou-nabe-hotspring-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">解禁！冬の贅沢あんこう鍋＆どぶ汁で過ごす冬の旅（11月）！濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選</span>
            </a>
            <a href="/winter-ibaraki-tsukubasan-shrine-hatsumode-yakei-onsen-hitachigyu-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">11・12・1月筑波山：冬の筑波山神社新春初詣！名宿5選</span>
            </a>
            <a href="/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">11・12・1月茨城：日本三名瀑！名宿5選</span>
            </a>
            <a href="/autumn-budget-ibaraki-mito-kairakuen-momiji-ankou-hotels-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">水戸：偕楽園もみじ谷ライトアップと旬のあんこう鍋！2,000円台〜格安ホテル5選</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/kochi/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                高知県の宿・温泉
              </Link>
              <Link
                href="/prefectures/hiroshima/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                広島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nagano/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長野県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ibaraki/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                茨城県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 南伊豆・下田温泉ひとり旅・ペリー黒船と白砂ビーチおこもり：自家源泉掛け流し・下田金目鯛づくし・海一望露天風呂！特急サフィール直通の港町厳選3宿：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「南伊豆・下田温泉ひとり旅・ペリー黒船と白砂ビーチおこもり：自家源泉掛け流し・下田金目鯛づくし・海一望露天風呂！特急サフィール直通の港町厳選3宿」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 里山の別邸　下田セントラルホテル</td>
                <td className="p-3 text-stone-600">静岡県下田市相玉133-1</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.73（1088件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25287%2F25287.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 下田温泉　下田ベイクロシオ</td>
                <td className="p-3 text-stone-600">静岡県下田市柿崎4-1</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">有り　２５台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.7（513件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5645%2F5645.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 下田温泉　ホテル伊豆急</td>
                <td className="p-3 text-stone-600">静岡県下田市白浜2732-7</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">ご宿泊者様専用無料駐車場有り　乗用車３００台</td>
                <td className="p-3 font-bold text-amber-600">★4.42（1634件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14774%2F14774.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">里山の別邸　下田セントラルホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（さとやまのべってい　しもだせんとらるほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/25287/25287_room.jpg" alt="里山の別邸　下田セントラルホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>温泉、料理、おもてなし、クチコミ高評価！伊豆の下田『相玉温泉』を唯一自家源泉とする一軒宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県下田市相玉133-1 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急下田駅より無料送迎あり（要予約・定時運行）／東名高速沼津ＩＣより伊豆縦貫道→天城峠→県道１５号利用</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.86 ／ 立地 ★4.48 ／ 部屋 ★4.76 ／ 設備 ★4.73 ／ 風呂 ★4.76 ／ 食事 ★4.74</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温かい接客と清潔な館内で心からくつろげた接客がとにかく素晴らしかったです。お部屋と夕食の案内をしてくださった男性が特に和やかで、どんどん機械化が進む昨今ですが、ほっとさせてもらいました。おばあちゃ…　2026-10-06 16:39:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下田温泉　下田ベイクロシオ</h3>
                  <span className="text-xs text-stone-400 ml-2">（しもだおんせん　しもだ　べいくろしお）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5645/5645_heya.jpg" alt="下田温泉　下田ベイクロシオ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>伊豆急下田駅から1.3km・白浜海岸まで3.5Km　海抜16mの高台から下田湾が一望</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県下田市柿崎4-1 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急下田駅より送迎はご連絡をお願いいたします。お車はＲ135「柿崎西」信号付近のセブンイレブン横の坂を上る</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２５台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「景色と接客は最高、清掃面で少し残念お部屋の窓からの景色と海側露天風呂からの景色が最高でしたスタッフの方々の対応も穏やかでこちらもゆったりとした気分で過ごせました。子連れにも優しいサービスが…　2026-08-02 19:27:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下田温泉　ホテル伊豆急</h3>
                  <span className="text-xs text-stone-400 ml-2">（しもだおんせん　いずきゅう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14774/14774_war.jpg" alt="下田温泉　ホテル伊豆急 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>海の幸と二種類の温泉が楽しめる白浜海岸目の前のスパリゾート。美しい海を眺めながらとっておきの時間を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県下田市白浜2732-7 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急下田駅から送迎あり。時刻はホテル伊豆急ホームページを参照。（10名以上要予約）。Ｒ135号沿い白浜海岸前。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ご宿泊者様専用無料駐車場有り　乗用車３００台</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.46 ／ 立地 ★4.54 ／ 部屋 ★4.34 ／ 設備 ★4.23 ／ 風呂 ★4.48 ／ 食事 ★4.41</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「広い和室と食事チケットに子供も大喜びとても広いお部屋で、眺望も良く、和室でものびのび子供たちも嬉しそうに過ごせました。夕飯時についていた食事の交換チケットみたいなものが、大人も子供もウキウキ楽…　2026-10-09 15:33:53投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！茨城県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、茨城県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">国営ひたち海浜公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">春のネモフィラ、秋のコキアをはじめ、四季折々の広大な花畑が美しい国営公園。みはらしの丘一面が青や赤に染まる光景は世界中から絶賛される絶景です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">水戸偕楽園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">金沢兼六園・岡山後楽園と並ぶ日本三名園の一つ。徳川斉昭公によって造園され、春には約100品種3,000本の梅が咲き誇る歴史ある回遊式庭園です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">袋田の滝</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三名瀑に数えられる高さ120m・幅73mのダイナミックな4段の滝。四季ごとに全く異なる表情を見せ、冬には滝全体が凍結する「氷瀑」が見事です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">筑波山</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「西の富士、東の筑波」と称される紫峰。男体山と女体山の2峰からなり、ケーブルカーやロープウェイで気軽に山頂へ登れ、関東平野の一望を楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 茨城県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 茨城県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="shizuoka-shimoda-solo-retreat-ocean-onsen-stay" />
</div>
  );
}
