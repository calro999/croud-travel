import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【奥飛騨・平湯温泉ひとり旅・北アルプス山懐の原生林秘湯おこもり】奥飛騨最古の源泉かけ流し・飛騨牛炭火焼き・大露天風呂！山岳リトリート厳選3宿',
  description: '北アルプス乗鞍岳の山麓、奥飛騨温泉郷で最も歴史ある平湯温泉！1日4組限定の贅沢な創作山草料理と全室貸切露天風呂で楽天口コミ驚異の★4.80を誇る「料理旅館 奥飛騨山草庵 饗家」、自家源泉と総ヒノキ大浴場が自慢の老舗「平田館」、飛騨の木造建築と家庭的なもてなしの「花ごころ万喜」を楽天API最新データに基づき徹底比較。',
  keywords: '平湯温泉 一人旅 宿,平湯温泉 ホテル 一人,奥飛騨山草庵 饗家,平湯温泉 平田館,花ごころ万喜,平湯温泉 ひとり旅 おこもり',
  openGraph: {
    title: '【奥飛騨・平湯温泉ひとり旅・北アルプス山懐の原生林秘湯おこもり】奥飛騨最古の源泉かけ流し・飛騨牛炭火焼き・大露天風呂！山岳リトリート厳選3宿',
    description: '北アルプス乗鞍岳の山麓、奥飛騨温泉郷で最も歴史ある平湯温泉！1日4組限定の贅沢な創作山草料理と全室貸切露天風呂で楽天口コミ驚異の★4.80を誇る「料理旅館 奥飛騨山草庵 饗家」、自家源泉と総ヒノキ大浴場が自慢の老舗「平田館」、飛騨の木造建築と家庭的なもてなしの「花ごころ万喜」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/gifu-hirayu-solo-retreat-okuhida-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【奥飛騨・平湯温泉ひとり旅・北アルプス山懐の原生林秘湯おこもり】奥飛騨最古の源泉かけ流し・飛騨牛炭火焼き・大露天風呂！山岳リトリート厳選3宿',
    description: '北アルプス乗鞍岳の山麓、奥飛騨温泉郷で最も歴史ある平湯温泉！1日4組限定の贅沢な創作山草料理と全室貸切露天風呂で楽天口コミ驚異の★4.80を誇る「料理旅館 奥飛騨山草庵 饗家」、自家源泉と総ヒノキ大浴場が自慢の老舗「平田館」、飛騨の木造建築と家庭的なもてなしの「花ごころ万喜」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/gifu-hirayu-solo-retreat-okuhida-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【奥飛騨・平湯温泉ひとり旅・北アルプス山懐の原生林秘湯おこもり】奥飛騨最古の源泉かけ流し・飛騨牛炭火焼き・大露天風呂！山岳リトリート厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            奥飛騨・平湯温泉ひとり旅＆山岳秘湯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【奥飛騨・平湯温泉ひとり旅・北アルプス山懐の原生林秘湯おこもり】奥飛騨最古の源泉かけ流し・飛騨牛炭火焼き・大露天風呂！山岳リトリート厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月17日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              武田信玄の家臣が白猿に導かれて発見したと伝わる奥飛騨最古の名湯。標高1,250mの冷涼な空気のなか、毎分13,000リットルの豊富な湯量と飛騨牛グルメに酔いしれる休日
            </p>
            <p>
              高山濃飛バスセンターや松本駅から特急バスが集結する奥飛騨の交通の要衝・平湯温泉。上高地や乗鞍畳平への拠点としても知られ、ブナやミズナラの原生林に抱かれた温泉街には多種多様な源泉がこんこんと湧出しています。炭酸水素塩泉・硫酸塩泉・塩化物泉が絶妙にブレンドされた湯は芯から身体を温め、日々のストレスを完全にリセットしてくれます。
            </p>
            <p>
              大人の隠れ家として名高いプライベート料理旅館から、奥飛騨の伝統を今に伝える名宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 平湯温泉　平田館（★4.29 / 最低目安：13,200円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 奥飛騨温泉郷　花ごころ万喜（ばんき）（★4.42 / 最低目安：9,350円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 奥飛騨温泉郷　新平湯温泉　美山荘（★3.74 / 最低目安：7,150円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">岐阜県 高山市奥飛騨温泉郷平周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              平湯温泉　平田館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.29 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">13,200円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4994/4994.jpg"
                  alt="平湯温泉　平田館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              湯量豊富な総桧風呂の大浴場と露天風呂。平湯バスターミナルより徒歩1分
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>湯量豊富な総桧風呂の大浴場と露天風呂</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>平湯バスターミナルより徒歩1分</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ高山駅よりバスで６０分、 東海北陸道高山ＩＣより６０分、中央道松本ＩＣより車で６５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4994%2F4994.html"
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
              <span className="text-xs text-stone-500 font-medium">岐阜県 高山市奥飛騨温泉郷一周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              奥飛騨温泉郷　花ごころ万喜（ばんき）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.42 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">9,350円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/63413/63413.jpg"
                  alt="奥飛騨温泉郷　花ごころ万喜（ばんき） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              《日本の宿アワード ＆楽天シルバーアワード2020W受賞》板蔵の貸切露天、花をテーマにしたおもてなし
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>《日本の宿アワード ＆楽天シルバーアワード2020W受賞》板蔵の貸切露天</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>花をテーマにしたおもてなし</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：長野道・松本IC→R158・安房トンネル・R471→新平湯温泉／中部縦貫道・高山IC→R158・R471→新平湯温泉</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F63413%2F63413.html"
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
              <span className="text-xs text-stone-500 font-medium">岐阜県 高山市奥飛騨温泉郷一周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              奥飛騨温泉郷　新平湯温泉　美山荘
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 3.74 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,150円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/63424/63424.jpg"
                  alt="奥飛騨温泉郷　新平湯温泉　美山荘 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              飛騨の温もりが感じられる安らぎの宿。四季によって表情を変える露天風呂が自慢です。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>飛騨の温もりが感じられる安らぎの宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>四季によって表情を変える露天風呂が自慢です</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ高山駅（高山濃飛バスセンター）よりバス「平湯・新穂高線」にて1時間１５分、「HO48新平湯温泉」下車、徒歩１分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F63424%2F63424.html"
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
            <span>平湯温泉ひとり旅・平湯大滝と上高地アクセスを活かす現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「平湯大滝」落差64m！日本の滝百選に選ばれた大迫力の瀑布</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉街から散策路を歩いて約25分。切り立った岩壁を一気に流れ落ちる豪快な滝で、マイナスイオンを浴びながらリフレッシュ。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「平湯バスターミナル」上高地・乗鞍・新穂高への直行シャトル拠点</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">マイカー規制のある上高地や乗鞍岳へ向かうシャトルバスが頻発。朝一番の澄んだ空気の上高地大正池散策と組み合わせるのがおすすめ。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">極上のA5ランク飛騨牛ステーキと山菜・イワナの塩焼き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">とろけるような脂の甘みが特徴の飛騨牛と、清流で育ったイワナの炭火焼き。奥飛騨の地酒「飛騨の濁酒」とともに味わう山の恵み。</p>
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
                <span>一人旅で誰にも邪魔されず最高峰の料理と貸切温泉を楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「料理旅館 奥飛騨山草庵 饗家」は客室わずか数組の大人の隠れ家。楽天口コミ★4.80を誇り、独創的な山草会席と完全貸切露天風呂が一人旅の究極のご褒美になります。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>平湯温泉への公共交通機関でのアクセスは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                JR高山駅前の高山濃飛バスセンターから新穂高行き路線バスで約50分、または松本バスターミナルから特急バスで約1時間25分と、バスアクセスが非常に良好です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4994%2F4994.html"
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
