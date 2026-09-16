import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【奥州三名湯・飯坂温泉ひとり旅・摺上川渓谷あつ湯おこもり】松尾芭蕉ゆかりの古湯・摺上川のせせらぎ・円盤餃子＆福島地酒！福島交通飯坂線直通厳選3宿',
  description: '鳴子・秋保と並ぶ奥州三名湯の一つ・福島・飯坂温泉！自家源泉100%掛け流しの名湯と旬の味覚会席が口コミ★4.6の「松島屋 桃香」、摺上川の渓谷美と温かいもてなしが評判の「つたや旅館」、最上階展望露天風呂から温泉街を一望する「湯乃家」を楽天API最新データに基づき徹底比較。',
  keywords: '飯坂温泉 一人旅 宿,飯坂 ホテル 一人 温泉,松島屋 桃香,つたや旅館 飯坂,湯乃家 飯坂温泉,奥州三名湯 ひとり旅 おこもり',
  openGraph: {
    title: '【奥州三名湯・飯坂温泉ひとり旅・摺上川渓谷あつ湯おこもり】松尾芭蕉ゆかりの古湯・摺上川のせせらぎ・円盤餃子＆福島地酒！福島交通飯坂線直通厳選3宿',
    description: '鳴子・秋保と並ぶ奥州三名湯の一つ・福島・飯坂温泉！自家源泉100%掛け流しの名湯と旬の味覚会席が口コミ★4.6の「松島屋 桃香」、摺上川の渓谷美と温かいもてなしが評判の「つたや旅館」、最上階展望露天風呂から温泉街を一望する「湯乃家」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/fukushima-iizaka-solo-retreat-hotspring-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【奥州三名湯・飯坂温泉ひとり旅・摺上川渓谷あつ湯おこもり】松尾芭蕉ゆかりの古湯・摺上川のせせらぎ・円盤餃子＆福島地酒！福島交通飯坂線直通厳選3宿',
    description: '鳴子・秋保と並ぶ奥州三名湯の一つ・福島・飯坂温泉！自家源泉100%掛け流しの名湯と旬の味覚会席が口コミ★4.6の「松島屋 桃香」、摺上川の渓谷美と温かいもてなしが評判の「つたや旅館」、最上階展望露天風呂から温泉街を一望する「湯乃家」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/fukushima-iizaka-solo-retreat-hotspring-stay',
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
          <span className="text-stone-800 font-medium truncate">【奥州三名湯・飯坂温泉ひとり旅・摺上川渓谷あつ湯おこもり】松尾芭蕉ゆかりの古湯・摺上川のせせらぎ・円盤餃子＆福島地酒！福島交通飯坂線直通厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            福島・飯坂温泉ひとり旅＆奥州三名湯あつ湯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【奥州三名湯・飯坂温泉ひとり旅・摺上川渓谷あつ湯おこもり】松尾芭蕉ゆかりの古湯・摺上川のせせらぎ・円盤餃子＆福島地酒！福島交通飯坂線直通厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月17日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              福島駅からレトロな福島交通飯坂線でわずか約23分。摺上川の渓流沿いに広がる歴史ある温泉街で、松尾芭蕉や正岡子規も浸かった熱気あふれる名湯と福島の美味を味わう休日
            </p>
            <p>
              2世紀に日本武尊が東征の折に発見したとも伝わる悠久の古湯・飯坂温泉。摺上川の河畔に無数の源泉が湧き出ており、無色透明のアルカリ性単純温泉は肌に柔らかく、しゃきっと熱めの湯温が特徴です。温泉街には木造瓦葺きの共同浴場「鯖湖湯」をはじめとする9つの共同浴場が点在し、地元の人々との温かな触れ合いや、名物「円盤餃子」の食べ歩きが一人旅の夜を盛り上げます。
            </p>
            <p>
              自家源泉を贅沢に掛け流す料理自慢の小宿から、渓谷を望む展望露天風呂を備えた老舗旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 飯坂温泉　松島屋　桃香（★4.6 / 最低目安：13,750円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 飯坂温泉　つたや旅館（★4.41 / 最低目安：7,590円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 飯坂温泉　展望露天風呂の宿　湯乃家（★4.23 / 最低目安：7,500円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">福島県 福島市飯坂町湯野字切周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              飯坂温泉　松島屋　桃香
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.6 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">13,750円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5114/5114.jpg"
                  alt="飯坂温泉　松島屋　桃香 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              おかげさまで全館リニューアル！！お子様、ペット大歓迎！夕朝食共お部屋でゆっくりお召し上がり下さい。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>おかげさまで全館リニューアル！！お子様</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>ペット大歓迎！夕朝食共お部屋でゆっくりお召し上がり下さい</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ福島駅より電車、タクシー共に約25分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5114"
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
              <span className="text-xs text-stone-500 font-medium">福島県 福島市飯坂町字十綱町周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              飯坂温泉　つたや旅館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.41 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,590円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7420/7420.jpg"
                  alt="飯坂温泉　つたや旅館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              飯坂温泉駅から徒歩　【　3 0秒　】　交通至便。フグ料理などの特別料理有り。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>飯坂温泉駅から徒歩　【　3 0秒　】　交通至便</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>フグ料理などの特別料理有り</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ福島駅よりタクシー。電車で２０分。東北自動車道　福島飯坂ＩＣより車で７分。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7420"
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
              <span className="text-xs text-stone-500 font-medium">福島県 福島市飯坂町湯野湯ノ周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              飯坂温泉　展望露天風呂の宿　湯乃家
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.23 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28272/28272.jpg"
                  alt="飯坂温泉　展望露天風呂の宿　湯乃家 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              新鮮な海の幸と展望露天風呂でおもてなし
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>新鮮な海の幸と展望露天風呂でおもてなし</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ福島駅～福島交通飯坂線・飯坂温泉駅～徒歩３分／東北自動車道・飯坂ＩＣ～国道１３号線経由１０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28272"
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
            <span>飯坂温泉ひとり旅・鯖湖湯と円盤餃子ストリートを巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「鯖湖湯（さばこゆ）」松尾芭蕉も立ち寄った日本最古級の共同浴場体験</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">明治時代の面影を再現した重厚なヒバ造りの木造浴場。47度前後のシャキッとした熱湯に浸かり、歴史の深さを肌で感じる究極の湯浴み。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">旧堀切邸の足湯と江戸時代の豪農屋敷・近代和風建築見学</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">江戸時代からの豪農・豪商の旧宅。主屋や十間蔵を見学した後は、美しい日本庭園を眺めながら屋根付き足湯・手湯で一休み。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">飯坂温泉名物「円盤餃子」のパリパリ食感と福島の銘酒</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">フライパンに丸く敷き詰めてパリッと焼き上げた小ぶりな餃子。ニンニク控えめで野菜たっぷりの餡をタレにつけ、地酒「金水晶」とともに味わう至福。</p>
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
                <span>一人旅で自家源泉掛け流しの上質な温泉と料理を味わえる飯坂の宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「飯坂温泉 松島屋 桃香」は楽天口コミ★4.6。源泉100%掛け流しの湯と板前が丹精込めた月替わり会席が一人旅の宿泊者から高く評価されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>摺上川のせせらぎを聞きながら落ち着いた純和風の滞在をするなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「飯坂温泉 つたや旅館」は川沿いに位置し、楽天口コミ★4.4超。親身なサービスと美味しい家庭料理で一人旅でも心温まる時間を過ごせます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5114"
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
