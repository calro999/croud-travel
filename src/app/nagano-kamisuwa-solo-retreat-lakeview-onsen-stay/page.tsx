import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【信州・上諏訪温泉ひとり旅・諏訪湖パノラマおこもり】自家源泉掛け流し・諏訪大社四社巡り・信州サーモン＆地酒呑み歩き！特急あずさ直通の湖畔厳選3宿',
  description: '諏訪湖の雄大な水景と名湯に癒やされる信州屈指の温泉地・上諏訪！創業百有余年の老舗で諏訪湖を望む露天風呂が自慢の「ぬのはん」、庭園露天風呂と琥珀色の独自源泉が極上の「ホテル鷺乃湯」、大正初期の面影を残し自家源泉100%掛け流しを誇る「渋の湯」を楽天API最新データに基づき徹底比較。',
  keywords: '上諏訪温泉 一人旅 宿,上諏訪 ホテル 一人 温泉,ぬのはん 上諏訪,ホテル鷺乃湯,渋の湯 上諏訪,諏訪湖 ひとり旅 おこもり',
  openGraph: {
    title: '【信州・上諏訪温泉ひとり旅・諏訪湖パノラマおこもり】自家源泉掛け流し・諏訪大社四社巡り・信州サーモン＆地酒呑み歩き！特急あずさ直通の湖畔厳選3宿',
    description: '諏訪湖の雄大な水景と名湯に癒やされる信州屈指の温泉地・上諏訪！創業百有余年の老舗で諏訪湖を望む露天風呂が自慢の「ぬのはん」、庭園露天風呂と琥珀色の独自源泉が極上の「ホテル鷺乃湯」、大正初期の面影を残し自家源泉100%掛け流しを誇る「渋の湯」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/nagano-kamisuwa-solo-retreat-lakeview-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【信州・上諏訪温泉ひとり旅・諏訪湖パノラマおこもり】自家源泉掛け流し・諏訪大社四社巡り・信州サーモン＆地酒呑み歩き！特急あずさ直通の湖畔厳選3宿',
    description: '諏訪湖の雄大な水景と名湯に癒やされる信州屈指の温泉地・上諏訪！創業百有余年の老舗で諏訪湖を望む露天風呂が自慢の「ぬのはん」、庭園露天風呂と琥珀色の独自源泉が極上の「ホテル鷺乃湯」、大正初期の面影を残し自家源泉100%掛け流しを誇る「渋の湯」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/nagano-kamisuwa-solo-retreat-lakeview-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【信州・上諏訪温泉ひとり旅・諏訪湖パノラマおこもり】自家源泉掛け流し・諏訪大社四社巡り・信州サーモン＆地酒呑み歩き！特急あずさ直通の湖畔厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            長野・上諏訪温泉ひとり旅＆諏訪湖パノラマおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【信州・上諏訪温泉ひとり旅・諏訪湖パノラマおこもり】自家源泉掛け流し・諏訪大社四社巡り・信州サーモン＆地酒呑み歩き！特急あずさ直通の湖畔厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              新宿駅からJR中央本線・特急あずさで約2時間10分。八ヶ岳連峰と北アルプスを仰ぎ、諏訪湖畔からこんこんと湧き出る美肌の名湯に身を委ねる静かな休日
            </p>
            <p>
              古くから中山道・甲州街道の宿場町として栄え、豊かな湧出量を誇る上諏訪温泉。肌触りがやわらかな弱アルカリ性単純温泉や硫黄泉が旅人の疲れを芯から癒やしてくれます。日本最古の神社の一つ「信濃國一之宮 諏訪大社」の四社巡りや、甲州街道沿いに5軒の酒蔵が並ぶ「諏訪五蔵」の呑み歩きなど、一人旅を彩る豊かな文化体験が揃っています。
            </p>
            <p>
              文人墨客に愛された諏訪湖畔の老舗宿から、源泉掛け流しの湯守の宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 上諏訪温泉　ぬのはん（★4.54 / 最低目安：10,450円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 信州・上諏訪温泉　琥珀色の自家源泉を持つ宿【ホテル鷺乃湯】（★4.5 / 最低目安：10,230円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 上諏訪温泉　かけ流し源泉の��　渋の湯（★4.32 / 最低目安：10,868円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">長野県 諏訪市湖岸通り3-2周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              上諏訪温泉　ぬのはん
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.54 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">10,450円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7071/7071.jpg"
                  alt="上諏訪温泉　ぬのはん 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              『プロが選ぶホテル・旅館100選』料理部門にて2011年より連続受賞
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>『プロが選ぶホテル</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>旅館100選』料理部門にて2011年より連続受賞</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：中央線 上諏訪駅より徒歩７分。諏���ＩＣより車で１５分。諏訪湖スマートＩＣより車で１０分。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7071%2F7071.html"
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
              <span className="text-xs text-stone-500 font-medium">長野県 諏訪市湖岸通り3-2周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              信州・上諏訪温泉　琥珀色の自家源泉を持つ宿【ホテル鷺乃湯】
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.5 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">10,230円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5209/5209.jpg"
                  alt="信州・上諏訪温泉　琥珀色の自家源泉を持つ宿【ホテル鷺乃湯】 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              露天風呂付客室も有。芯から温まる自家源泉と心を癒す日本庭園をもつ百余年の歴史が香る宿。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>露天風呂付客室も有</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>芯から温まる自家源泉と心を癒す日本庭園をもつ百余年の歴史が香る宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ上諏訪駅より徒歩８分、諏訪ＩＣより１５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5209%2F5209.html"
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
              <span className="text-xs text-stone-500 font-medium">長野県 諏訪市湖岸通り3-3周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              上諏訪温泉　かけ流し源泉の��　渋の湯
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.32 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">10,868円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/20143/20143.jpg"
                  alt="上諏訪温泉　かけ流し源泉の��　渋の湯 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              かけ流し源泉100%の露天風呂。玄関を入ると畳でお出迎えの静かな宿。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>かけ流し源泉100%の露天風呂</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>玄関を入ると畳でお出迎えの静かな宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：JR中央線　上諏訪駅徒歩7分／中央道諏訪IC湖岸線経由15分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20143%2F20143.html"
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
            <span>上諏訪温泉ひとり旅・諏訪大社と酒蔵ストリートを巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「諏訪五蔵酒蔵めぐり」甲州街道沿い500mに並ぶ銘酒の試飲</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">「真澄」「舞姫」「麗人」「本金」「横笛」の5つの蔵元を歩いてハシゴ。専用グラスを片手に、一人静かに信州の清冽な名水仕込みの地酒を味わえます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「諏訪大社」四社巡り（本宮・前宮・秋宮・春宮）の神聖な祈り</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">諏訪湖を挟んで鎮座する二社四宮。樹齢数百年の杉並木と御柱（おんばしら）の圧倒的な存在感に包まれ、一人旅の心を浄化するスピリチュアルな時間。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「立石公園」映画の聖地として話題の諏訪湖パノラマ夕景</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">高台から諏訪湖の全景を見晴らす絶景スポット。夕暮れ時に湖面が茜色から深い藍色へと染まり、街の明かりが灯る幻想的な瞬間を一人静かに鑑賞。</p>
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
                <span>一人旅で諏訪湖の眺望と歴史ある純和風の情緒を味わえる上諏訪の宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「上諏訪温泉 ぬのはん」は創業嘉永元年の歴史を誇り、諏訪湖を望む優美な庭園と本格会席料理が一人旅の愛好家から高く評価されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>一人旅で自家源泉掛け流しの湯をじっくり堪能したいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「上諏訪温泉 かけ流し源泉の宿 渋の湯」は湯量豊富な自家源泉100%掛け流しの湯殿を備え、落ち着いた佇まいの中で本物の名湯を静かに楽しめます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7071%2F7071.html"
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
