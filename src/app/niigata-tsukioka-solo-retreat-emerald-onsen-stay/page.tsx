import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【新潟・月岡温泉ひとり旅・エメラルドグリーンの美肌湯おこもり】硫黄含有量全国屈指・自家源泉庭園露天・越後贅沢会席！名湯美肌ステイ厳選3宿',
  description: 'エメラルドグリーンに輝く美しい湯と日本有数の硫黄含有量を誇る新潟の名湯・月岡温泉！全国旅館ランキング上位常連の至高のおもてなしと広大な回遊庭園露天を誇る「白玉の湯 華鳳」、姉妹館として名高い「白玉の湯 泉慶」、静寂な料亭風の佇まいで美食と自家源泉を味わう「月岡温泉 いま井」を楽天API最新データに基づき徹底比較。',
  keywords: '月岡温泉 一人旅 宿,月岡温泉 ホテル 一人,白玉の湯 華鳳 一人旅,白玉の湯 泉慶,月岡温泉 いま井,月岡温泉 ひとり旅 おこもり',
  openGraph: {
    title: '【新潟・月岡温泉ひとり旅・エメラルドグリーンの美肌湯おこもり】硫黄含有量全国屈指・自家源泉庭園露天・越後贅沢会席！名湯美肌ステイ厳選3宿',
    description: 'エメラルドグリーンに輝く美しい湯と日本有数の硫黄含有量を誇る新潟の名湯・月岡温泉！全国旅館ランキング上位常連の至高のおもてなしと広大な回遊庭園露天を誇る「白玉の湯 華鳳」、姉妹館として名高い「白玉の湯 泉慶」、静寂な料亭風の佇まいで美食と自家源泉を味わう「月岡温泉 いま井」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/niigata-tsukioka-solo-retreat-emerald-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【新潟・月岡温泉ひとり旅・エメラルドグリーンの美肌湯おこもり】硫黄含有量全国屈指・自家源泉庭園露天・越後贅沢会席！名湯美肌ステイ厳選3宿',
    description: 'エメラルドグリーンに輝く美しい湯と日本有数の硫黄含有量を誇る新潟の名湯・月岡温泉！全国旅館ランキング上位常連の至高のおもてなしと広大な回遊庭園露天を誇る「白玉の湯 華鳳」、姉妹館として名高い「白玉の湯 泉慶」、静寂な料亭風の佇まいで美食と自家源泉を味わう「月岡温泉 いま井」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/niigata-tsukioka-solo-retreat-emerald-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【新潟・月岡温泉ひとり旅・エメラルドグリーンの美肌湯おこもり】硫黄含有量全国屈指・自家源泉庭園露天・越後贅沢会席！名湯美肌ステイ厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            新潟・月岡温泉ひとり旅＆エメラルドグリーン美肌湯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【新潟・月岡温泉ひとり旅・エメラルドグリーンの美肌湯おこもり】硫黄含有量全国屈指・自家源泉庭園露天・越後贅沢会席！名湯美肌ステイ厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月17日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              湯口から注がれる鮮やかなエメラルドグリーンと濃厚な硫黄香。「もっと美人になれる温泉」として名高い名湯で、つるつるの肌触りと越後の旬会席に癒やされる極上の一人旅
            </p>
            <p>
              新潟駅から白新線・豊栄駅経由でアクセスできる月岡温泉。大正時代に石油採掘の際に湧出した温泉で、弱アルカリ性の硫黄泉は空気に触れると神秘的なエメラルドグリーンに変化します。古い角質を落とし肌をしっとり潤す「美肌の湯」として名高く、夜の温泉街には幻想的な行燈や手湯・足湯スポットが点在。静かな非日常に包まれるリトリートが叶います。
            </p>
            <p>
              日本屈指の名旅館グループが誇る極上庭園露天から、大人のための静かな割烹旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 月岡温泉　いま井（★4.5 / 最低目安：21,390円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 月岡温泉　白玉の湯　華鳳（★4.76 / 最低目安：23,100円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 月岡温泉　白玉の湯　泉慶（★4.74 / 最低目安：17,600円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">新潟県 新発田市月岡温泉35周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              月岡温泉　いま井
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.5 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">21,390円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/53073/53073.jpg"
                  alt="月岡温泉　いま井 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              癒しの名湯、飾らない格調。その深さの中で静寂を聴くひととき。贅を尽くした至福の空間。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>癒しの名湯</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>飾らない格調</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>その深さの中で静寂を聴くひととき</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：豊栄駅・新発田駅より車で２０分、月岡駅より１０分（豊栄駅に限り無料送迎有り、３日前まで要連絡）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53073%2F53073.html"
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
              <span className="text-xs text-stone-500 font-medium">新潟県 新発田市月岡温泉13周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              月岡温泉　白玉の湯　華鳳
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.76 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">23,100円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32388/32388.jpg"
                  alt="月岡温泉　白玉の湯　華鳳 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              2025年プロが選ぶ日本のホテル・旅館100選★総合1位★白玉の湯は全国屈指の硫黄含有量
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>2025年プロが選ぶ日本のホテル</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>旅館100選★総合1位★白玉の湯は全国屈指の硫黄含有量</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：新潟駅や空港から最も近い温泉地／JR新発田駅より有料定時シャトルバス運行</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32388%2F32388.html"
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
              <span className="text-xs text-stone-500 font-medium">新潟県 新発田市月岡温泉45周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              月岡温泉　白玉の湯　泉慶
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.74 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">17,600円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/29709/29709.jpg"
                  alt="月岡温泉　白玉の湯　泉慶 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              硫黄の効能豊かな自家源泉“白玉の湯”の大露天風呂と旬の越後の創作会席料理が好評。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>硫黄の効能豊かな自家源泉“白玉の湯”の大露天風呂と旬の越後の創作会席料理が好評</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ月岡駅より車で１０分／ＪＲ豊栄駅より車で２０分／磐越道　安田ＩＣより車で２０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29709%2F29709.html"
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
            <span>月岡温泉ひとり旅・あしゆ湯足美と温泉街散策を楽しむ現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「あしゆ 湯足美（ゆたび）」夜は和傘のライトアップが幻想的</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉街の中心にある無料の足湯広場。夜になると色とりどりの和傘が照らし出され、一人静かに夕涼みを楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「プレミアムポルポ（新潟地酒・干物・煎餅の試食散策）」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">月岡温泉街には新潟の地酒を試飲できる「蔵」や、自分で煎餅を手焼きできる「田」などユニークな専門店が並びます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">新潟の郷土料理「のっぺ」と日本海の寒ブリ・南蛮エビ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">里芋や根菜を出汁で煮込んだ素朴で温かい郷土料理「のっぺ」と、日本海直送のプリプリの南蛮エビのお造りは地酒との相性抜群。</p>
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
                <span>一人旅で月岡温泉の最高峰の露天風呂とおもてなしを体験できる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「白玉の湯 華鳳」は楽天口コミ★4.76を誇る全国有数の名旅館。広大な庭園露天風呂とエメラルドグリーンの自家源泉が圧巻です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>月岡温泉のお湯の色が変わるのはなぜ？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                月岡の硫黄泉に含まれる多量の硫黄成分が、湧出後に空気に触れて酸化することで透明から鮮やかなエメラルドグリーンや乳白色へと変化します。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53073%2F53073.html"
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
