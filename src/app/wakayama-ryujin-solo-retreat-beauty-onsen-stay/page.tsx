import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【日本三美人の湯・紀州龍神温泉ひとり旅・日高川渓谷おこもり】pH8.4極上とろみ重曹泉・紀州梅豚＆あまご・徳川頼宣公の別荘！弘法大師ゆかりの厳選3宿',
  description: '島根の斐乃上・群馬の川中と並ぶ日本三美人の湯・和歌山・龍神温泉！紀州徳川家の殿様風呂の歴史を伝える「下御殿」、料理自慢の主人が手掛ける地魚と猪肉会席が評判の「料理旅館 萬屋」、登録有形文化財の風情と高野槇風呂を誇る名門「上御殿」を楽天API最新データに基づき徹底比較。',
  keywords: '龍神温泉 一人旅 宿,龍神 ホテル 一人 温泉,下御殿 龍神,萬屋 龍神温泉,上御殿 龍神,日本三美人の湯 ひとり旅 おこもり',
  openGraph: {
    title: '【日本三美人の湯・紀州龍神温泉ひとり旅・日高川渓谷おこもり】pH8.4極上とろみ重曹泉・紀州梅豚＆あまご・徳川頼宣公の別荘！弘法大師ゆかりの厳選3宿',
    description: '島根の斐乃上・群馬の川中と並ぶ日本三美人の湯・和歌山・龍神温泉！紀州徳川家の殿様風呂の歴史を伝える「下御殿」、料理自慢の主人が手掛ける地魚と猪肉会席が評判の「料理旅館 萬屋」、登録有形文化財の風情と高野槇風呂を誇る名門「上御殿」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/wakayama-ryujin-solo-retreat-beauty-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【日本三美人の湯・紀州龍神温泉ひとり旅・日高川渓谷おこもり】pH8.4極上とろみ重曹泉・紀州梅豚＆あまご・徳川頼宣公の別荘！弘法大師ゆかりの厳選3宿',
    description: '島根の斐乃上・群馬の川中と並ぶ日本三美人の湯・和歌山・龍神温泉！紀州徳川家の殿様風呂の歴史を伝える「下御殿」、料理自慢の主人が手掛ける地魚と猪肉会席が評判の「料理旅館 萬屋」、登録有形文化財の風情と高野槇風呂を誇る名門「上御殿」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/wakayama-ryujin-solo-retreat-beauty-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【日本三美人の湯・紀州龍神温泉ひとり旅・日高川渓谷おこもり】pH8.4極上とろみ重曹泉・紀州梅豚＆あまご・徳川頼宣公の別荘！弘法大師ゆかりの厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            和歌山・龍神温泉ひとり旅＆日本三美人の湯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【日本三美人の湯・紀州龍神温泉ひとり旅・日高川渓谷おこもり】pH8.4極上とろみ重曹泉・紀州梅豚＆あまご・徳川頼宣公の別荘！弘法大師ゆかりの厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月17日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              高野山から龍神スカイラインを経て南下すること約1時間、日高川の清流沿いに湧く秘湯。弘法大師が難陀竜王のお告げによって開いたと伝わる、化粧水のような極上のぬるぬる湯に浸かる休日
            </p>
            <p>
              紀伊半島の山深き奥地、日高川の渓谷に佇む龍神温泉。ナトリウム-炭酸水素塩泉（重曹泉）の泉質は、触れた瞬間に肌に吸い付くようなとろみがあり、古い角質や皮脂を溶かしてツルツルの陶器肌へと導く「日本三美人の湯」の筆頭格です。江戸時代には紀州徳川藩主が逗留するための御殿が建てられ、今なお当時の格式と清らかな渓流のせせらぎが息づいています。
            </p>
            <p>
              紀州徳川家ゆかりの歴史ある老舗旅館から、旬の山菜や川魚会席を味わえる料理旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 龍神温泉　下御殿（★4.55 / 最低目安：20,064円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 龍神温泉　料理旅館萬屋（★4.66 / 最低目安：11,000円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 龍神温泉　上御殿（★4.33 / 最低目安：21,450円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">和歌山県 田辺市龍神村龍神38周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              龍神温泉　下御殿
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.55 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">20,064円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68138/68138.jpg"
                  alt="龍神温泉　下御殿 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              寛永１６年創業。日本三美人の湯で有名な温泉は、美肌、美白効果高く、女性に大変人気です。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>寛永１６年創業</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>日本三美人の湯で有名な温泉は</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>美白効果高く</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：紀伊田辺駅から龍神バスにて８０分／車で、有田ＩＣから新宮方面へ県道３４号、Ｒ４２４、４２５、３７１を経由して約９０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D68138"
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
              <span className="text-xs text-stone-500 font-medium">和歌山県 田辺市龍神村龍神47周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              龍神温泉　料理旅館萬屋
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.66 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">11,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/30006/30006.jpg"
                  alt="龍神温泉　料理旅館萬屋 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              本物の食と日本三美人の湯を気軽に愉しめる大人限定の料理旅館。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>本物の食と日本三美人の湯を気軽に愉しめる大人限定の料理旅館</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：JR紀勢本線紀伊田辺駅／海南湯浅自動車道 有田ＩＣ より９０分・高野山より６０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D30006"
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
              <span className="text-xs text-stone-500 font-medium">和歌山県 田辺市龍神村龍神42周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              龍神温泉　上御殿
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.33 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">21,450円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/109360/109360.jpg"
                  alt="龍神温泉　上御殿 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              ４００年近く吹き続く徳川の世の風を感じて下さい。歴史の旅と温泉が、あなたの心を癒してくれるでしょう。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>４００年近く吹き続く徳川の世の風を感じて下さい</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>歴史の旅と温泉が</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>あなたの心を癒してくれるでしょう</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ　紀伊田辺駅から龍神バスにて７５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D109360"
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
            <span>龍神温泉ひとり旅・曼陀羅の滝と日高川渓流を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「龍神温泉元湯」日高川の渓流を望む総檜造りの共同浴場体験</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">源泉掛け流しの名湯を気軽に体感できる公衆浴場。渓谷を渡る風を感じる露天風呂で、地元の人々と語らいながらとろみ湯を満喫。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「曼陀羅の滝」弘法大師が曼荼羅を描いた伝説の神秘の名瀑</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">遊歩道を一人歩き、鬱蒼とした木立ちの奥に現れる名瀑。マイナスイオンと霊験あらたかな空気で、心身を浄化するネイチャー散策。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">龍神名物「あまご（アマゴ）の塩焼き・刺身」と紀州梅豚鍋</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">日高川の清流で育った川魚あまごの香ばしい塩焼き。紀州の梅酢を食べて育った柔らかい梅豚のしゃぶしゃぶとともに味わう銘酒「黒牛」。</p>
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
                <span>一人旅で日本三美人の湯の歴史と極上の渓流露天風呂を味わえる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「龍神温泉 下御殿」は紀州藩主ゆかりの歴史を誇り、畳敷きのお座敷風呂や日高川を望む混浴露天風呂が一人旅の宿泊者から絶賛されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>一人旅で地元の新鮮な郷土料理と温泉を静かに楽しみたいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「龍神温泉 料理旅館 萬屋」はアットホームな居心地と主人が腕を振るう旬のあまごや猪肉料理が評判で、一人旅でも落ち着いて滞在できます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D68138"
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
