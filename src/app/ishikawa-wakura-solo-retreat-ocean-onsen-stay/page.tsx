import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【能登・和倉温泉ひとり旅・七尾湾オーシャンフロントおこもり】開湯1200年塩化物泉・能登前寿司＆能登牛・復興応援ステイ！海の温泉郷厳選3宿',
  description: '七尾湾の穏やかな波打ち際に湧く能登随一の名湯・和倉温泉！七尾湾を一望する絶景露天風呂と能登の美食が自慢の「ホテル海望」、多彩な湯処と広々とした空間美を誇る名門「日本の宿 のと楽」、能登の地魚料理とアットホームなもてなしが評判の「味な宿 宝仙閣」を楽天API最新データに基づき徹底比較。',
  keywords: '和倉温泉 一人旅 宿,和倉温泉 ホテル 一人,ホテル海望 和倉,のと楽 和倉温泉,宝仙閣 和倉,能登 ひとり旅 おこもり',
  openGraph: {
    title: '【能登・和倉温泉ひとり旅・七尾湾オーシャンフロントおこもり】開湯1200年塩化物泉・能登前寿司＆能登牛・復興応援ステイ！海の温泉郷厳選3宿',
    description: '七尾湾の穏やかな波打ち際に湧く能登随一の名湯・和倉温泉！七尾湾を一望する絶景露天風呂と能登の美食が自慢の「ホテル海望」、多彩な湯処と広々とした空間美を誇る名門「日本の宿 のと楽」、能登の地魚料理とアットホームなもてなしが評判の「味な宿 宝仙閣」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/ishikawa-wakura-solo-retreat-ocean-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【能登・和倉温泉ひとり旅・七尾湾オーシャンフロントおこもり】開湯1200年塩化物泉・能登前寿司＆能登牛・復興応援ステイ！海の温泉郷厳選3宿',
    description: '七尾湾の穏やかな波打ち際に湧く能登随一の名湯・和倉温泉！七尾湾を一望する絶景露天風呂と能登の美食が自慢の「ホテル海望」、多彩な湯処と広々とした空間美を誇る名門「日本の宿 のと楽」、能登の地魚料理とアットホームなもてなしが評判の「味な宿 宝仙閣」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/ishikawa-wakura-solo-retreat-ocean-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【能登・和倉温泉ひとり旅・七尾湾オーシャンフロントおこもり】開湯1200年塩化物泉・能登前寿司＆能登牛・復興応援ステイ！海の温泉郷厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            石川・和倉温泉ひとり旅＆能登七尾湾おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【能登・和倉温泉ひとり旅・七尾湾オーシャンフロントおこもり】開湯1200年塩化物泉・能登前寿司＆能登牛・復興応援ステイ！海の温泉郷厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              金沢駅からJR特急能登かがり火号で約60分。七尾湾の穏やかな海と潮風に包まれ、開湯1200年の高濃度塩化物泉に浸かる能登復興応援のソロトリップ
            </p>
            <p>
              七尾湾の沖合で傷を癒やす白鷺によって発見されたと伝わる和倉温泉。全国でも稀な高濃度のナトリウム・カルシウム-塩化物泉で、保温・保湿効果が極めて高く「温まりの湯」として親しまれています。能登里山里海の豊かな風土が育んだ能登前寿司や能登牛、地酒とともに、一人旅で能登の力強い歩みを体感する旅が待っています。
            </p>
            <p>
              波打ち際で七尾湾の水平線を眺める絶景宿から、温かいもてなしと能登の地魚料理を味わえる老舗旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 和倉温泉　ホテル海望（★4.48 / 最低目安：7,700円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 和倉温泉　日本の宿　のと楽（★4.32 / 最低目安：7,700円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 和倉温泉　味な宿　宝仙閣（★4.15 / 最低目安：6,600円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">石川県 七尾市和倉町和歌崎部周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              和倉温泉　ホテル海望
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.48 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,700円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14395/14395.jpg"
                  alt="和倉温泉　ホテル海望 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              お客様に愛され続けて創業130余年。海を望むという名である理由、感動を一度ご体感ください。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>お客様に愛され続けて創業130余年</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>海を望むという名である理由</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>感動を一度ご体感ください</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：JR和倉温泉駅から当館無料送迎バスで5分。金沢から「のと里山海道」徳田大津JCT、和倉IC経由、車で約1時間。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14395%2F14395.html"
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
              <span className="text-xs text-stone-500 font-medium">石川県 七尾市石崎町香島1-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              和倉温泉　日本の宿　のと楽
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.32 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,700円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/39556/39556.jpg"
                  alt="和倉温泉　日本の宿　のと楽 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              波静かな七尾湾を望む露天風呂で檜の香りを満喫。海の見えるお部屋で能登の旬をごゆっくりご堪能下さい。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>波静かな七尾湾を望む露天風呂で檜の香りを満喫</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>海の見えるお部屋で能登の旬をごゆっくりご堪能下さい</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ　和倉温泉駅より車で５分／能越道和倉ＩＣより車で約７分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39556%2F39556.html"
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
              <span className="text-xs text-stone-500 font-medium">石川県 七尾市和倉町ヨ部19周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              和倉温泉　味な宿　宝仙閣
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.15 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,600円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14026/14026.jpg"
                  alt="和倉温泉　味な宿　宝仙閣 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              能登半島の旬の幸と良質の温泉で至福の時間が過ごせる家庭的な宿
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>能登半島の旬の幸と良質の温泉で至福の時間が過ごせる家庭的な宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：北陸道金沢森本IC・のと里山海道・能越道利用 和倉ICより５分 / JR七尾線「和倉温泉駅」より無料送迎あり（要連絡）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14026%2F14026.html"
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
            <span>和倉温泉ひとり旅・能登島大橋と能登前寿司を味わう現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「和倉温泉総湯」源泉100%を誇る開湯の地で共同浴場入浴</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉街の中心に位置する総湯。高温で良質な源泉が掛け流され、飲泉場や足湯「湯足館」も併設。地元の人々の温かい会話に触れる一人旅。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「能登島大橋」七尾湾を渡る白く美しい曲線橋とドライブ・散歩</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">能登半島本土と能登島を結ぶ全長1,050mの橋。エメラルドグリーンの穏やかな海と牡蠣棚が広がる風景を一人静かに鑑賞。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">七尾港直送「能登前寿司」と銘酒「宗玄」「手取川」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">朝獲れのキジハタや寒鰤、アオリイカなど、能登ならではの白身魚と赤酢のシャリ。一人カウンターで職人の手さばきを見ながら味わう至極の夜。</p>
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
                <span>一人旅で七尾湾のオーシャンビューと絶景露天風呂を堪能できる和倉の宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「和倉温泉 ホテル海望」は七尾湾が目の前に広がる抜群のロケーション。波音を聞きながら浸かる露天風呂と能登の味覚会席が一人旅に大人気です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>一人旅で能登の新鮮な海の幸をじっくり味わえる料理自慢の宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「和倉温泉 味な宿 宝仙閣」は七尾港直送の地魚料理と温かい家庭的なもてなしが評判で、一人旅でも落ち着いて宿泊できます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14395%2F14395.html"
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
