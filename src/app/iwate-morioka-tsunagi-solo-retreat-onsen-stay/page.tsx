import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【盛岡つなぎ温泉ひとり旅・御所湖畔と岩手山おこもり】源泉かけ流し単純硫黄泉・前沢牛＆盛岡冷麺・南部鉄器文化！新幹線盛岡駅25分の名湯厳選3宿',
  description: '開湯900年、源義家が愛馬を繋いで湯浴みした伝説の湯・盛岡つなぎ温泉！源泉かけ流しの美肌硫黄泉と女将の手作り郷土料理が温かい「旅染屋 山いち」、御所湖の眺望と良心的な価格でくつろげる「清温荘」、気兼ねない素泊まり・ワーケーションにも最適な「旅やど」を楽天API最新データに基づき徹底比較。',
  keywords: 'つなぎ温泉 一人旅 宿,盛岡 つなぎ温泉 ホテル 一人,山いち つなぎ温泉,清温荘 盛岡,旅やど つなぎ温泉,盛岡 ひとり旅 おこもり',
  openGraph: {
    title: '【盛岡つなぎ温泉ひとり旅・御所湖畔と岩手山おこもり】源泉かけ流し単純硫黄泉・前沢牛＆盛岡冷麺・南部鉄器文化！新幹線盛岡駅25分の名湯厳選3宿',
    description: '開湯900年、源義家が愛馬を繋いで湯浴みした伝説の湯・盛岡つなぎ温泉！源泉かけ流しの美肌硫黄泉と女将の手作り郷土料理が温かい「旅染屋 山いち」、御所湖の眺望と良心的な価格でくつろげる「清温荘」、気兼ねない素泊まり・ワーケーションにも最適な「旅やど」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/iwate-morioka-tsunagi-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【盛岡つなぎ温泉ひとり旅・御所湖畔と岩手山おこもり】源泉かけ流し単純硫黄泉・前沢牛＆盛岡冷麺・南部鉄器文化！新幹線盛岡駅25分の名湯厳選3宿',
    description: '開湯900年、源義家が愛馬を繋いで湯浴みした伝説の湯・盛岡つなぎ温泉！源泉かけ流しの美肌硫黄泉と女将の手作り郷土料理が温かい「旅染屋 山いち」、御所湖の眺望と良心的な価格でくつろげる「清温荘」、気兼ねない素泊まり・ワーケーションにも最適な「旅やど」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/iwate-morioka-tsunagi-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【盛岡つなぎ温泉ひとり旅・御所湖畔と岩手山おこもり】源泉かけ流し単純硫黄泉・前沢牛＆盛岡冷麺・南部鉄器文化！新幹線盛岡駅25分の名湯厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            岩手・盛岡つなぎ温泉ひとり旅＆御所湖畔おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【盛岡つなぎ温泉ひとり旅・御所湖畔と岩手山おこもり】源泉かけ流し単純硫黄泉・前沢牛＆盛岡冷麺・南部鉄器文化！新幹線盛岡駅25分の名湯厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              東北新幹線・盛岡駅から路線バスでわずか25分。御所湖の向こうにそびえる雄大な南部片富士・岩手山を眺めながら、湯の花舞う弱アルカリ性硫黄泉に浸かる極上の休日
            </p>
            <p>
              前九年の役で知られる源義家が愛馬を石に繋ぎ、傷を癒やしたことから名付けられたとされる盛岡の奥座敷・つなぎ温泉。毎分2,000リットルもの湯量を誇る高温泉で、ほのかな硫黄の香りとメタケイ酸を豊富に含むトロトロの肌触りが自慢です。みちのくの秀峰・岩手山の雄姿と静かな湖畔の景観が、日常の緊張を解きほぐします。
            </p>
            <p>
              アットホームな心温まるもてなしの宿から、湖畔の静けさをリーズナブルに味わえる公共系・現代的湯宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 盛岡つなぎ温泉　旅染屋　山いち（★4.38 / 最低目安：5,645円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. つなぎ温泉　清温荘（★4.16 / 最低目安：4,950円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 盛岡つなぎ温泉　旅やど（★3.84 / 最低目安：4,500円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">岩手県 盛岡市繋舘市83-1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              盛岡つなぎ温泉　旅染屋　山いち
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.38 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,645円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/31689/31689.jpg"
                  alt="盛岡つなぎ温泉　旅染屋　山いち 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              赤ちゃん連れも安心●家族みんなが寛げる盛岡の古き良き畳敷旅館。部屋付風呂や露天風呂で癒しの旅を
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>赤ちゃん連れも安心●家族みんなが寛げる盛岡の古き良き畳敷旅館</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>部屋付風呂や露天風呂で癒しの旅を</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：盛岡駅よりバスで約３５分／東北道盛岡ICより約１５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31689%2F31689.html"
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
              <span className="text-xs text-stone-500 font-medium">岩手県 盛岡市繋字湯の舘33周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              つなぎ温泉　清温荘
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.16 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">4,950円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182050/182050.jpg"
                  alt="つなぎ温泉　清温荘 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              盛岡ＩＣから１３分の好立地で、湖畔に佇む「つなぎ温泉」の宿。温泉の他に、サウナ・水風呂・露天風呂あり
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>盛岡ＩＣから１３分の好立地で</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>湖畔に佇む「つなぎ温泉」の宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>温泉の他に</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ　盛岡駅より岩手県交通バスで約３５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182050%2F182050.html"
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
              <span className="text-xs text-stone-500 font-medium">岩手県 盛岡市繋字塗沢37-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              盛岡つなぎ温泉　旅やど
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 3.84 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">4,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/197666/197666.jpg"
                  alt="盛岡つなぎ温泉　旅やど 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              それぞれの旅　楽しみ方いろいろ　小さな素泊り温泉ホテル　気兼ねなく、ただ温泉に浸る贅沢。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>それぞれの旅　楽しみ方いろいろ　小さな素泊り温泉ホテル　気兼ねなく</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>ただ温泉に浸る贅沢</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：岩手県交通バスにてJR盛岡駅より約３０分、つなぎ温泉線終点「つなぎ温泉」下車</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197666%2F197666.html"
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
            <span>盛岡つなぎ温泉ひとり旅・盛岡三大麺とレトロ街歩き現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">盛岡城跡公園（岩手公園）と中津川沿いの赤レンガレトロ建築巡り</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">「世界で訪れるべき場所」として世界的に注目された盛岡の街並み。石割桜や盛岡銀行赤レンガ館を一人静かに歩き、ノスタルジックな喫茶店で自家焙煎珈琲を味わえます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">盛岡三大麺（わんこそば・盛岡冷麺・じゃじゃ麺）の食べ比べ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">コシの強い麺と牛骨スープが絶品の盛岡冷麺、味噌を絡めて最後にチータンタンで締めるじゃじゃ麺。一人旅でも気軽に入れる名店が揃っています。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">御所湖広域公園の散策と小岩井農場の一本桜・乳製品スイーツ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">御所湖畔の花壇や遊歩道をウォーキング。車やバスで足を伸ばせば小岩井農場の広大な牧草地と濃厚なソフトクリームを味わえます。</p>
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
                <span>一人旅で源泉かけ流しの良質な硫黄泉と郷土の温かい料理を楽しむなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「盛岡つなぎ温泉 旅染屋 山いち」は源泉かけ流しの温泉と地元の旬の素材を活かした温かい手作り料理が一人旅の宿泊客から高く評価されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>一人旅で御所湖を望みながら手頃な価格で温泉ステイができる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「つなぎ温泉 清温荘」は手入れの行き届いた清潔な館内と良質な温泉を備え、一人旅でもコストパフォーマンス抜群に宿泊できます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31689%2F31689.html"
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
                href="/prefectures/shizuoka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                静岡県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gunma"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                群馬県の宿・温泉
              </Link>
              <Link
                href="/prefectures/okayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岡山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                香川県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
