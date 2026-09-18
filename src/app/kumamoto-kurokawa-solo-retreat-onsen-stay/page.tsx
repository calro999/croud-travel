import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【黒川温泉ひとり旅・入湯手形おこもり】渓流露天風呂・立ち湯・あか牛会席！阿蘇の秘湯で里山情緒に浸る極上ソロ温泉厳選3宿',
  description: '阿蘇山麓の静寂の秘湯・黒川！田の原川沿いで渓流露天風呂と足湯が心地よい「夢龍胆」、巨大な大露天風呂や深さ150cmの立ち湯が評判の「やまびこ旅館」、全8室・大人の隠れ家で名湯と美食を味わう「ふじ屋」を楽天トラベル公式API最新データに基づき徹底比較。',
  keywords: '黒川温泉 一人旅 宿,黒川温泉 ホテル 一人,夢龍胆,やまびこ旅館 黒川,黒川温泉 ふじ屋,黒川 入湯手形 ひとり旅',
  openGraph: {
    title: '【黒川温泉ひとり旅・入湯手形おこもり】渓流露天風呂・立ち湯・あか牛会席！阿蘇の秘湯で里山情緒に浸る極上ソロ温泉厳選3宿',
    description: '阿蘇山麓の静寂の秘湯・黒川！田の原川沿いで渓流露天風呂と足湯が心地よい「夢龍胆」、巨大な大露天風呂や深さ150cmの立ち湯が評判の「やまびこ旅館」、全8室・大人の隠れ家で名湯と美食を味わう「ふじ屋」を楽天トラベル公式API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/kumamoto-kurokawa-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【黒川温泉ひとり旅・入湯手形おこもり】渓流露天風呂・立ち湯・あか牛会席！阿蘇の秘湯で里山情緒に浸る極上ソロ温泉厳選3宿',
    description: '阿蘇山麓の静寂の秘湯・黒川！田の原川沿いで渓流露天風呂と足湯が心地よい「夢龍胆」、巨大な大露天風呂や深さ150cmの立ち湯が評判の「やまびこ旅館」、全8室・大人の隠れ家で名湯と美食を味わう「ふじ屋」を楽天トラベル公式API最新データに基づき徹底比較。',
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
    datePublished: '2026-09-13T00:00:00+09:00',
    dateModified: '2026-09-13T00:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/kumamoto-kurokawa-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【黒川温泉ひとり旅・入湯手形おこもり】渓流露天風呂・立ち湯・あか牛会席！阿蘇の秘湯で里山情緒に浸る極上ソロ温泉厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            熊本・黒川温泉ひとり旅＆里山秘湯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【黒川温泉ひとり旅・入湯手形おこもり】渓流露天風呂・立ち湯・あか牛会席！阿蘇の秘湯で里山情緒に浸る極上ソロ温泉厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月13日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              深い緑の渓谷に寄り添う木造の宿と、湯けむり漂う小径。自然と調和した街並みで、入湯手形を片手に自分好みの湯を巡る至福の休日
            </p>
            <p>
              熊本・阿蘇の山あいに位置し、ミシュラン・グリーンガイド・ジャポンでも高評価を獲得した奇跡の秘湯・黒川温泉。「街全体が一つの宿」という理念のもと、落ち着いた黒塗りの木造建築と里山の自然が見事に調和し、一人旅で訪れる人々を温かく包み込みます。
            </p>
            <p>
              せせらぎを聞きながら露天風呂に浸かれる名宿から、阿蘇の味覚「あか牛」を一人でゆっくり堪能できる割烹旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 黒川温泉　夢龍胆（★4.27 / 最低目安：8,800円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 黒川温泉　やまびこ旅館（★4.59 / 最低目安：19,800円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 黒川温泉　ふじ屋（★4.85 / 最低目安：24,200円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">熊本県 阿蘇郡南小国町満願寺周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              黒川温泉　夢龍胆
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.27 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4725/4725.jpg"
                  alt="黒川温泉　夢龍胆 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              黒川温泉中心部に位置し、清流田ノ原川のほとりに面した情緒溢れるお料理自慢の純和風旅館。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>黒川温泉中心部に位置し、清流田ノ原川のほとりに面した情緒溢れるお料理自慢の純和風旅館</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：大分道日田ＩＣより車で６０分、黒川温泉バス停より徒歩1分。送迎あり(条件あり)事前予約要。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4725%2F4725.html"
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
              <span className="text-xs text-stone-500 font-medium">熊本県 阿蘇郡南小国町黒川6周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              黒川温泉　やまびこ旅館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.59 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">19,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67974/67974.jpg"
                  alt="黒川温泉　やまびこ旅館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              大きな露天風呂が自慢の宿！看板犬のえんちゃん(レオンベルガー　人見知り)もよろしくおねがいします＾＾
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>大きな露天風呂が自慢の宿！看板犬のえんちゃん(レオンベルガー　人見知り)もよろしくおねがいします＾＾</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ阿蘇駅より車で４０分。ＪＲ日田駅より車で６０分。バスは九州横断バスほか、福岡より直行バスも４往復ございます。　　</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67974%2F67974.html"
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
              <span className="text-xs text-stone-500 font-medium">熊本県 阿蘇郡南小国町満願寺周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              黒川温泉　ふじ屋
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.85 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">24,200円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/78189/78189.jpg"
                  alt="黒川温泉　ふじ屋 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              熊本・阿蘇の旬を盛り込んだ美食を満喫。黒川温泉の中央に位置する、和の風情漂う旅館。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>熊本・阿蘇の旬を盛り込んだ美食を満喫</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>黒川温泉の中央に位置する、和の風情漂う旅館</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：阿蘇駅より産交九州横断定期観光バス（要予約）に乗車、別府行きで５０分。黒川温泉下車で徒歩５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78189%2F78189.html"
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
            <span>黒川温泉ひとり旅・里山湯めぐりを極める現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">名物「入湯手形」で巡る個性豊かな露天風呂と立ち湯</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">小国杉で作られた手形1枚で3カ所の露天風呂を巡れる名物システム。野趣あふれる洞窟風呂や立ったまま入れる立ち湯など、湯めぐりの醍醐味を満喫できます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">川端通りの下駄散策とパティスリー麓のシュークリーム</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">浴衣と下駄で歩く温泉街。パティスリー麓の出来立てサクサクシュークリームや、どらどらバーガーなど、里山スイーツを食べ歩く時間が最高の癒やしです。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">阿蘇のあか牛ステーキと熊本名産馬刺しの一人舌鼓</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">脂肪分が少なく赤身の旨味が凝縮された阿蘇のあか牛。温泉上がりの夕食に地酒とともに味わえば、旅の疲れも吹き飛びます。</p>
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
                <span>一人旅で川沿いの自然を感じながら露天風呂を楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「黒川温泉 夢龍胆」は田の原川の渓流沿いに佇み、女性専用露天風呂や岩風呂、足湯など多彩な温浴設備で一人旅に大好評です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>黒川名物のユニークな立ち湯や大露天風呂に入りたいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「黒川温泉 やまびこ旅館」は深さ150cmの立ち湯や巨石を配した大露天風呂が名物。自然のダイナミズムを肌で感じられます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4725%2F4725.html"
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
