import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【鳥羽温泉郷ひとり旅・伊勢志摩オーシャンビューおこもり】鳥羽湾一望の展望露天・伊勢海老＆鮑・静寂の岬リゾート！お伊勢参り後のご褒美厳選3宿',
  description: 'リアス海岸の美しい岬美と海の幸に抱かれる三重・鳥羽温泉郷！鳥羽湾の絶景パノラマと高評価の海鮮会席が評判の隠れ岬宿「ＫＫＲ鳥羽 いそぶえ荘」、全室オーシャンビューと波打ち際の露天風呂が情緒ある「鳥羽 胡蝶蘭」、岬全体に3つの大浴場と多彩な湯処を誇る「鳥羽シーサイドホテル」を楽天API最新データに基づき徹底比較。',
  keywords: '鳥羽温泉 一人旅 宿,鳥羽 ホテル 一人 温泉,いそぶえ荘 鳥羽,胡蝶蘭 鳥羽,鳥羽シーサイドホテル 一人旅,鳥羽温泉郷 ひとり旅 おこもり',
  openGraph: {
    title: '【鳥羽温泉郷ひとり旅・伊勢志摩オーシャンビューおこもり】鳥羽湾一望の展望露天・伊勢海老＆鮑・静寂の岬リゾート！お伊勢参り後のご褒美厳選3宿',
    description: 'リアス海岸の美しい岬美と海の幸に抱かれる三重・鳥羽温泉郷！鳥羽湾の絶景パノラマと高評価の海鮮会席が評判の隠れ岬宿「ＫＫＲ鳥羽 いそぶえ荘」、全室オーシャンビューと波打ち際の露天風呂が情緒ある「鳥羽 胡蝶蘭」、岬全体に3つの大浴場と多彩な湯処を誇る「鳥羽シーサイドホテル」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/mie-toba-solo-retreat-ocean-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【鳥羽温泉郷ひとり旅・伊勢志摩オーシャンビューおこもり】鳥羽湾一望の展望露天・伊勢海老＆鮑・静寂の岬リゾート！お伊勢参り後のご褒美厳選3宿',
    description: 'リアス海岸の美しい岬美と海の幸に抱かれる三重・鳥羽温泉郷！鳥羽湾の絶景パノラマと高評価の海鮮会席が評判の隠れ岬宿「ＫＫＲ鳥羽 いそぶえ荘」、全室オーシャンビューと波打ち際の露天風呂が情緒ある「鳥羽 胡蝶蘭」、岬全体に3つの大浴場と多彩な湯処を誇る「鳥羽シーサイドホテル」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/mie-toba-solo-retreat-ocean-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【鳥羽温泉郷ひとり旅・伊勢志摩オーシャンビューおこもり】鳥羽湾一望の展望露天・伊勢海老＆鮑・静寂の岬リゾート！お伊勢参り後のご褒美厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            三重・鳥羽温泉郷ひとり旅＆伊勢志摩オーシャンおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【鳥羽温泉郷ひとり旅・伊勢志摩オーシャンビューおこもり】鳥羽湾一望の展望露天・伊勢海老＆鮑・静寂の岬リゾート！お伊勢参り後のご褒美厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              伊勢神宮（内宮・外宮）参拝のあとは、近鉄特急で約15分の鳥羽へ。波穏やかな鳥羽湾を行き交う船を眺めながら、美肌の自家源泉と極上の海の幸を一人占めする贅沢ステイ
            </p>
            <p>
              古くから海女文化や真珠養殖の街として栄えてきた風光明媚な鳥羽。アルカリ性単純温泉の湯はとろりとした肌触りで、旅の歩き疲れを芯から癒やしてくれます。伊勢湾と太平洋の豊かな黒潮がもたらす伊勢海老、鮑、的矢かき、答志島のトロさわらなど、四季折々の獲れたての味覚が一人旅の晩酌を最高のものにしてくれます。
            </p>
            <p>
              高台から鳥羽湾を見下ろす静寂の岬宿から、海を間近に感じるリゾートホテルまで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. ＫＫＲ鳥羽　いそぶえ荘（国家公務員共済組合連合会鳥羽保養所）（★4.56 / 最低目安：7,850円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 伊勢神宮のお膝元　鳥羽　胡蝶蘭（★4.42 / 最低目安：8,250円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 湯めぐり海百景　鳥羽シーサイドホテル（★4.41 / 最低目安：5,500円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">三重県 鳥羽市安楽島町107周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              ＫＫＲ鳥羽　いそぶえ荘（国家公務員共済組合連合会鳥羽保養所）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.56 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,850円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/19736/19736.jpg"
                  alt="ＫＫＲ鳥羽　いそぶえ荘（国家公務員共済組合連合会鳥羽保養所） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              国家公務員共済組合連合会が組合員等の利用を目的として運営する宿泊施設です※全室禁煙
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>国家公務員共済組合連合会が組合員等の利用を目的として運営する宿泊施設です※全室禁煙</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ／近鉄鳥羽駅①番出口※送迎バス①15：40②16：40（要予約）／伊勢自動車道伊勢西ＩＣ→鳥羽二見ライン経由約30分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19736%2F19736.html"
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
              <span className="text-xs text-stone-500 font-medium">三重県 鳥羽市小浜町237-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              伊勢神宮のお膝元　鳥羽　胡蝶蘭
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.42 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,250円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/31542/31542.jpg"
                  alt="伊勢神宮のお膝元　鳥羽　胡蝶蘭 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              ご夕食はゆったりお部屋食♪優しいおもてなしで寛ぎの旅！鳥羽駅から車で5分、伊勢神宮までは車で約30分
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>ご夕食はゆったりお部屋食♪優しいおもてなしで寛ぎの旅！鳥羽駅から車で5分</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>伊勢神宮までは車で約30分</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：鳥羽駅よりお車で5分・近鉄鳥羽駅無料送迎あり(14:45～18:00)・ 伊勢IC～伊勢二見鳥羽ライン経由25分程</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31542%2F31542.html"
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
              <span className="text-xs text-stone-500 font-medium">三重県 鳥羽市安楽島町108周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              湯めぐり海百景　鳥羽シーサイドホテル
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.41 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15780/15780.jpg"
                  alt="湯めぐり海百景　鳥羽シーサイドホテル 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              伊勢神宮まで車で３０分　☆お客様が選ぶ４つ星以上の人気宿☆
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>伊勢神宮まで車で３０分　☆お客様が選ぶ４つ星以上の人気宿☆</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：近鉄・ＪＲ鳥羽駅より車で１０分（無料送迎有・定期運行）／伊勢��動車道　伊勢ＩＣ→伊勢二見鳥羽ライン２５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15780%2F15780.html"
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
            <span>鳥羽温泉ひとり旅・ミキモト真珠島と海女の街を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「ミキモト真珠島」と「鳥羽水族館」で知的好奇心を満たす一人歩き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">世界で初めて真珠養殖に成功した島で海女の実演見学。日本一の飼育種類数を誇る鳥羽水族館ではラッコやジュゴンに癒やされる充実の時間を。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">鳥羽城跡（城山公園）からの360度パノラマ鳥羽湾展望</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">九鬼嘉隆が築いた水軍の城。海に向かって突き出た本丸跡からは、鳥羽湾に浮かぶ答志島や坂手島などの島々が一望できる静かな絶景スポットです。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">鳥羽磯部漁協直営店で味わう「伊勢海老フライ」と地酒「義左衛門」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">肉厚で甘みたっぷりの伊勢海老やプリプリの牡蠣フライ。三重の銘酒とともに、カウンター席で海の恵みをじっくり噛みしめる至福。</p>
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
                <span>一人旅で口コミ評価が高く、高台から鳥羽湾の絶景と温泉を楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「ＫＫＲ鳥羽 いそぶえ荘」は楽天口コミ★4.5超の高台岬宿。鳥羽湾を一望する展望大浴場と心のこもった海鮮会席が一人旅に大好評です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>館内で多彩な湯巡りを楽しめる伊勢志摩の大型リゾートは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「湯めぐり海百景 鳥羽シーサイドホテル」は「風見の湯」「岬の湯」「汀の湯」の3つの湯処を備え、絶景のオーシャンビューとともに贅沢な湯巡りを満喫できます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19736%2F19736.html"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
          >
            一番人気の宿をチェックする（楽天トラベル）
          </a>
        </div>
      
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/chiba"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                千葉県の宿・温泉
              </Link>
              <Link
                href="/prefectures/fukushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/niigata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                新潟県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamaguchi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山口県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
