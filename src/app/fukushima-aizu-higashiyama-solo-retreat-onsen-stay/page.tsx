import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【会津東山温泉ひとり旅・湯川渓谷美おこもり】竹久夢二・土方歳三ゆかりの自噴泉・会津郷土料理！会津藩の歴史薫る奥座敷厳選3宿',
  description: '会津若松駅から周遊バスで約15分！湯川沿いで複数の源泉かけ流し湯船と歴史ある建築美を誇る「くろつぎ宿 新滝」、高台の展望露天風呂から会津城下町の夜景を一望する「くつろぎ宿 千代滝」、湯川のせせらぎを間近に感じる「元湯有馬屋」を徹底比較。',
  keywords: '東山温泉 一人旅 宿,会津東山 ホテル 一人 温泉,くつろぎ宿 新滝,くつろぎ宿 千代滝,元湯有馬屋,会津若松 ひとり旅 おこもり',
  openGraph: {
    title: '【会津東山温泉ひとり旅・湯川渓谷美おこもり】竹久夢二・土方歳三ゆかりの自噴泉・会津郷土料理！会津藩の歴史薫る奥座敷厳選3宿',
    description: '会津若松駅から周遊バスで約15分！湯川沿いで複数の源泉かけ流し湯船と歴史ある建築美を誇る「くろつぎ宿 新滝」、高台の展望露天風呂から会津城下町の夜景を一望する「くつろぎ宿 千代滝」、湯川のせせらぎを間近に感じる「元湯有馬屋」を徹底比較。',
    url: 'https://croud-travel.pages.dev/fukushima-aizu-higashiyama-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【会津東山温泉ひとり旅・湯川渓谷美おこもり】竹久夢二・土方歳三ゆかりの自噴泉・会津郷土料理！会津藩の歴史薫る奥座敷厳選3宿',
    description: '会津若松駅から周遊バスで約15分！湯川沿いで複数の源泉かけ流し湯船と歴史ある建築美を誇る「くろつぎ宿 新滝」、高台の展望露天風呂から会津城下町の夜景を一望する「くつろぎ宿 千代滝」、湯川のせせらぎを間近に感じる「元湯有馬屋」を徹底比較。',
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
    datePublished: '2026-09-15T00:00:00+09:00',
    dateModified: '2026-09-15T00:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/fukushima-aizu-higashiyama-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【会津東山温泉ひとり旅・湯川渓谷美おこもり】竹久夢二・土方歳三ゆかりの自噴泉・会津郷土料理！会津藩の歴史薫る奥座敷厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            福島・会津東山温泉ひとり旅＆奥座敷歴史渓谷おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【会津東山温泉ひとり旅・湯川渓谷美おこもり】竹久夢二・土方歳三ゆかりの自噴泉・会津郷土料理！会津藩の歴史薫る奥座敷厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月15日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              湯川の清流が刻んだ深い渓谷と、新選組・土方歳三が傷を癒やした名湯。鶴ヶ城の城下町から少し奥へ、歴史のロマンと地酒に酔いしれるソロトリップ
            </p>
            <p>
              開湯1300年、天平時代に行基菩薩によって発見されたと伝わる会津東山温泉。会津藩主の湯治場として栄え、竹久夢二や与謝野晶子など多くの文豪・芸術家が逗留した情緒あふれる温泉街は、一人旅で歴史と自然に浸るのに最高の舞台です。
            </p>
            <p>
              敷地内から自然湧出する本物の自噴源泉を持つ歴史の宿から、会津若松の夜景を見晴らす絶景宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 会津東山温泉　くつろぎ宿　新滝（★4.69 / 最低目安：14,800円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 会津東山温泉　くつろぎ宿　千代滝（★4.51 / 最低目安：14,800円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 東山温泉　元湯有馬屋（★4.63 / 最低目安：8,250円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">福島県 会津若松市東山町湯本周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              会津東山温泉　くつろぎ宿　新滝
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.69 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">14,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7526/7526.jpg"
                  alt="会津東山温泉　くつろぎ宿　新滝 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              明治、大正、昭和と多くの文人、墨客に愛された宿です。趣の異なる多彩な湯処が自慢。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>明治、大正、昭和と多くの文人、墨客に愛された宿です</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>趣の異なる多彩な湯処が自慢</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：【お車】会津若松ＩＣ～約２０分【会津若松駅より】タクシー１３分／周遊バス「あかべぇ」１６分「東山温泉駅バス停」～徒歩３分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7526%2F7526.html"
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
              <span className="text-xs text-stone-500 font-medium">福島県 会津若松市東山町湯本周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              会津東山温泉　くつろぎ宿　千代滝
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.51 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">14,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5675/5675.jpg"
                  alt="会津東山温泉　くつろぎ宿　千代滝 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              郷土料理ビュッフェと展望露天風呂が自慢☆会津の日本酒が楽しめる地酒の館/ライブラリーラウンジ好評♪
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>郷土料理ビュッフェと展望露天風呂が自慢☆会津の日本酒が楽しめる地酒の館/ライブラリーラウンジ好評♪</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：【車】会津若松ＩＣ～約20分【会津若松駅より】周遊バスにて「会津武家屋敷前」下車徒歩約15分or送迎有：到着時TEL</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5675%2F5675.html"
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
              <span className="text-xs text-stone-500 font-medium">福島県 会津若松市東山町湯本周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              東山温泉　元湯有馬屋
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.63 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,250円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7330/7330.jpg"
                  alt="東山温泉　元湯有馬屋 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              囲炉裏でのお食事と源泉掛け流しの宿
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>囲炉裏でのお食事と源泉掛け流しの宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：JR磐越西線会津若松駅よりバスで20分／磐越自動車道会津若松ICより車で15分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7330%2F7330.html"
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
            <span>会津東山温泉ひとり旅・歴史散策と会津の食を極める現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">湯川沿いの「羽黒山湯上神社」参拝と温泉街の射的場</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉街を見守る羽黒山湯上神社。急な石段を登って旅の安全を祈り、昔懐かしい射的場にふらりと立ち寄る昭和レトロな街歩きが楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">名城・鶴ヶ城（若松城）と飯盛山（白虎隊ゆかりの地）探訪</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">日本唯一の赤瓦の天守閣を持つ鶴ヶ城。幕末の歴史に触れ、飯盛山の不思議な二重螺旋木造建築「さざえ堂」を一人じっくり見学できます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">会津名物「馬刺し」と地酒王国・福島の純米酒飲み比べ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">辛子味噌をつけていただく会津特有の新鮮な赤身馬刺し。「飛露喜」「写楽」など全国金賞受賞数日本一を誇る福島の銘酒とともに味わう夕食は至高の極みです。</p>
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
                <span>一人旅で土方歳三ゆかりの自噴源泉と落ち着いた宿に泊まるなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「会津東山温泉 くつろぎ宿 新滝」は土方歳三が傷を癒やしたとされる自噴岩風呂をはじめ、多彩な源泉かけ流し湯船と地酒ライブラリーが一人旅に大絶賛されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>高台から会津の夜景を眺めながら温泉に浸かりたい時は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「会津東山温泉 くつろぎ宿 千代滝」は最上階の展望露天風呂からの眺望が抜群。地元の食材を使った創作郷土料理ビュッフェも好評です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7526%2F7526.html"
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
