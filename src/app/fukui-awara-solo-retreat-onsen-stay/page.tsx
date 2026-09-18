import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【あわら温泉ひとり旅・関西の奥座敷おこもり】74本もの独自源泉・庭園露天風呂・越前がにと若狭牛！北陸新幹線延伸で注目の名湯厳選3宿',
  description: '関西・中京の奥座敷として愛され続ける福井屈指の名湯・あわら温泉！大浴場や露天風呂で自家源泉をゆったり堪能できる名宿「越前あわら温泉 長谷川」、北陸最大級の庭園露天風呂や多彩な湯殿を誇る「北陸 福井 あわら温泉 美松」、落ち着いた木造の温もりと静寂が魅力の「あわら温泉 みのや泰平閣」を楽天API最新データに基づき徹底比較。',
  keywords: 'あわら温泉 一人旅 宿,あわら温泉 ホテル 一人,越前あわら温泉 長谷川,あわら温泉 美松,みのや泰平閣,あわら温泉 ひとり旅 おこもり',
  openGraph: {
    title: '【あわら温泉ひとり旅・関西の奥座敷おこもり】74本もの独自源泉・庭園露天風呂・越前がにと若狭牛！北陸新幹線延伸で注目の名湯厳選3宿',
    description: '関西・中京の奥座敷として愛され続ける福井屈指の名湯・あわら温泉！大浴場や露天風呂で自家源泉をゆったり堪能できる名宿「越前あわら温泉 長谷川」、北陸最大級の庭園露天風呂や多彩な湯殿を誇る「北陸 福井 あわら温泉 美松」、落ち着いた木造の温もりと静寂が魅力の「あわら温泉 みのや泰平閣」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/fukui-awara-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【あわら温泉ひとり旅・関西の奥座敷おこもり】74本もの独自源泉・庭園露天風呂・越前がにと若狭牛！北陸新幹線延伸で注目の名湯厳選3宿',
    description: '関西・中京の奥座敷として愛され続ける福井屈指の名湯・あわら温泉！大浴場や露天風呂で自家源泉をゆったり堪能できる名宿「越前あわら温泉 長谷川」、北陸最大級の庭園露天風呂や多彩な湯殿を誇る「北陸 福井 あわら温泉 美松」、落ち着いた木造の温もりと静寂が魅力の「あわら温泉 みのや泰平閣」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/fukui-awara-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【あわら温泉ひとり旅・関西の奥座敷おこもり】74本もの独自源泉・庭園露天風呂・越前がにと若狭牛！北陸新幹線延伸で注目の名湯厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            福井・あわら温泉ひとり旅＆北陸名湯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【あわら温泉ひとり旅・関西の奥座敷おこもり】74本もの独自源泉・庭園露天風呂・越前がにと若狭牛！北陸新幹線延伸で注目の名湯厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              明治16年開湯、各宿が独自源泉を持つ贅沢な湯の街。北陸新幹線の芦原温泉駅開業でアクセスも抜群、名画のような田園景観と日本海の味覚に浸る静かな休日
            </p>
            <p>
              あわら温泉の最大の特長は、各旅館が敷地内に専用の源泉（全74本）を所有している点。宿ごとに泉質や湯温、成分の微妙な違いを楽しむことができ、まさに贅沢な湯巡りが叶います。越前和紙や越前漆器などの伝統美に囲まれ、冬は越前がに、春夏秋は若狭牛や新鮮な地魚といった極上の北陸ガストロノミーが迎えてくれます。
            </p>
            <p>
              広大な日本庭園と多彩な露天風呂で心身を解き放てる大型旅館から、静かに源泉のぬくもりに浸れる落ち着いた名宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 越前あわら温泉　長谷川（★4.38 / 最低目安：8,800円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 北陸　福井　あわら温泉　美松（★4.39 / 最低目安：11,000円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. あわら温泉　みのや泰平閣（★4.11 / 最低目安：6,490円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">福井県 あわら市二面48-1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              越前あわら温泉　長谷川
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.38 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/17657/17657.jpg"
                  alt="越前あわら温泉　長谷川 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              令和4年3月　和洋室　リニューアル！　全館Wi-Fi完備！　レトロでモダンな刻を過ごせる宿
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>令和4年3月　和洋室　リニューアル！　全館Wi-Fi完備！　レトロでモダンな刻を過ごせる宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：北陸自動車道金津ＩＣより車15分 　ＪＲでお越しの場合　芦原温泉駅より送迎有（約10分）15時～18時</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17657%2F17657.html"
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
              <span className="text-xs text-stone-500 font-medium">福井県 あわら市舟津26-1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              北陸　福井　あわら温泉　美松
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.39 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">11,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8114/8114.jpg"
                  alt="北陸　福井　あわら温泉　美松 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              ◆充実！美松のドリンクインクルーシブスタート◆別邸「美悠」など趣の異なる温泉露天風呂付客室が好評◆
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>充実！美松のドリンクインクルーシブスタート</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>別邸「美悠」など趣の異なる温泉露天風呂付客室が好評</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：JR北陸新幹線芦原温泉駅より約15分（要予約）／北陸自動車道金津ICより約15分／小松空港より車で約50分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8114%2F8114.html"
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
              <span className="text-xs text-stone-500 font-medium">福井県 あわら市舟津50-1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              あわら温泉　みのや泰平閣
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.11 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,490円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67904/67904.jpg"
                  alt="あわら温泉　みのや泰平閣 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              静かな庭園を眺め、湯に浸かり、旬をいただく。心ほどける大人時間
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>静かな庭園を眺め</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>湯に浸かり</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>旬をいただく</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：【車】北陸自動車道金津ICより約15分【電車】JR北陸本線芦原温泉駅より車で約10分（無料送迎有／事前予約要）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67904%2F67904.html"
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
            <span>あわら温泉ひとり旅・湯けむり横丁と坂井市名所を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「あわら温泉湯のまち広場」芦湯（足湯）と湯けむり横丁の屋台ナイト</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">総檜造りの豪華な無料足湯「芦湯」で足を温めた後は、赤提灯が灯る屋台村「湯けむり横丁」へ。地元の常連や店主と語らいながら福井の地酒を楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">国の天然記念物「東尋坊」の断崖絶壁と日本海サンセット</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">あわら温泉から車・バスで約20分。世界三大奇勝の一つに数えられる柱状節理の奇岩地帯。夕暮れ時に日本海へ沈む夕日を一人静かに眺める体験は圧巻です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">現存十二天守「丸岡城」と越前おろしそばの素朴な味わい</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">戦国時代に築かれた最古建築様式の現存天守。石瓦の重厚な城を登閣した後は、辛み大根の絞り汁がピリリと効いた名物越前おろしそばでランチ。</p>
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
                <span>一人旅で北陸最大級の露天風呂や贅沢な温泉施設を満喫できる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「北陸 福井 あわら温泉 美松」は圧巻の回廊庭園露天風呂やドーム型大浴場を備え、贅沢な空間美と行き届いたもてなしで一人旅でも至福の時間を過ごせます。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>純和風の木造旅館で静かに落ち着いたおこもりステイを楽しむなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「あわら温泉 みのや泰平閣」は緑豊かな庭園と落ち着いた木造の回廊が魅力。日常の喧騒を離れて静寂に浸りたい一人旅に最適です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17657%2F17657.html"
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
