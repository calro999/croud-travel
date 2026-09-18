import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【那須温泉ひとり旅・御用邸高原おこもり】茶臼岳絶景露天・鹿の湯白濁泉・那須黒毛和牛！森の静寂に包まれる高原リゾート厳選3宿',
  description: '皇室の御用邸があるロイヤルリゾート・那須高原！広大な敷地に天然温泉スパとラウンジを備える名門「ホテルハーヴェスト那須」、標高1,200mの茶臼岳山腹で乳白色の名湯を誇る「旅館ニューおおたか」、森の隠れ家コテージ「ホテルフォレストヒルズ那須」を徹底比較。',
  keywords: '那須温泉 一人旅 宿,那須 ホテル 一人 温泉,ホテルハーヴェスト那須,旅館ニューおおたか,フォレストヒルズ那須,那須 鹿の湯 ひとり旅',
  openGraph: {
    title: '【那須温泉ひとり旅・御用邸高原おこもり】茶臼岳絶景露天・鹿の湯白濁泉・那須黒毛和牛！森の静寂に包まれる高原リゾート厳選3宿',
    description: '皇室の御用邸があるロイヤルリゾート・那須高原！広大な敷地に天然温泉スパとラウンジを備える名門「ホテルハーヴェスト那須」、標高1,200mの茶臼岳山腹で乳白色の名湯を誇る「旅館ニューおおたか」、森の隠れ家コテージ「ホテルフォレストヒルズ那須」を徹底比較。',
    url: 'https://croud-travel.pages.dev/tochigi-nasu-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【那須温泉ひとり旅・御用邸高原おこもり】茶臼岳絶景露天・鹿の湯白濁泉・那須黒毛和牛！森の静寂に包まれる高原リゾート厳選3宿',
    description: '皇室の御用邸があるロイヤルリゾート・那須高原！広大な敷地に天然温泉スパとラウンジを備える名門「ホテルハーヴェスト那須」、標高1,200mの茶臼岳山腹で乳白色の名湯を誇る「旅館ニューおおたか」、森の隠れ家コテージ「ホテルフォレストヒルズ那須」を徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/tochigi-nasu-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【那須温泉ひとり旅・御用邸高原おこもり】茶臼岳絶景露天・鹿の湯白濁泉・那須黒毛和牛！森の静寂に包まれる高原リゾート厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            栃木・那須温泉ひとり旅＆高原御用邸リゾートおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【那須温泉ひとり旅・御用邸高原おこもり】茶臼岳絶景露天・鹿の湯白濁泉・那須黒毛和牛！森の静寂に包まれる高原リゾート厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月15日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              那須連山の主峰・茶臼岳の雄大な稜線と、白樺やブナの原生林。千三百年湧き続ける白濁の「鹿の湯」源泉に癒やされ、高原の爽快な風に心洗われるソロトリップ
            </p>
            <p>
              奈良時代に傷ついた鹿が温泉で癒やしていたことから発見されたと伝わる名湯「鹿の湯」をはじめ、多彩な泉質を持つ湯本温泉郷・那須。皇室が静養に訪れる御用邸の地としても名高く、豊かな自然と洗練されたカフェや美術館が点在し、上質な一人旅が叶います。
            </p>
            <p>
              広大なゴルフコースや森に囲まれたラグジュアリーリゾートから、高嶺の絶景を望む秘湯宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 那須温泉　ホテルハーヴェスト那須（★4.33 / 最低目安：12,500円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 那須温泉　旅館ニューおおたか（★4.42 / 最低目安：10,150円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 那須温泉　ホテルフォレストヒルズ那須　ｗｉｔｈ　ＤＯＧＳ（★4.37 / 最低目安：19,855円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">栃木県 那須郡那須町高久丙1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              那須温泉　ホテルハーヴェスト那須
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.33 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">12,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/73998/73998.jpg"
                  alt="那須温泉　ホテルハーヴェスト那須 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              大人たちの癒しの森　会員制ホテルに併設されたホテルハーヴェスト那須。ロイヤルリゾートへようこそ。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>大人たちの癒しの森　会員制ホテルに併設されたホテルハーヴェスト那須</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>ロイヤルリゾートへようこそ</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：那須塩原駅より無料シャトルバス運行（定期・前日までの完全予約制）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73998%2F73998.html"
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
              <span className="text-xs text-stone-500 font-medium">栃木県 那須郡那須町湯本26周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              那須温泉　旅館ニューおおたか
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.42 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">10,150円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28383/28383.jpg"
                  alt="那須温泉　旅館ニューおおたか 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              那須エリアで一番の標高！絶景展望露天風呂で温泉浴を楽しめる宿♪
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>那須エリアで一番の標高！絶景展望露天風呂で温泉浴を楽しめる宿♪</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：在来線：JR黒磯駅／新幹線：JR那須塩原駅／東北自動車道 那須ICより50分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28383%2F28383.html"
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
              <span className="text-xs text-stone-500 font-medium">栃木県 那須郡那須町高久乙1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              那須温泉　ホテルフォレストヒルズ那須　ｗｉｔｈ　ＤＯＧＳ
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.37 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">19,855円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/935/935.jpg"
                  alt="那須温泉　ホテルフォレストヒルズ那須　ｗｉｔｈ　ＤＯＧＳ 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              ＜愛犬と泊まる宿＞那須高原の隠れ家リゾート／温泉付客室多数／全館プライベートコテージ ペットと一緒旅
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>＜愛犬と泊まる宿＞那須高原の隠れ家リゾート／温泉付客室多数／全館プライベートコテージ ペットと一緒旅</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：安心＆安全な愛犬との旅をお約束＜全館 独立コテージタイプ・ペットと泊まる宿＞“北関東最大級”愛犬同伴の複合型リゾート♪</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F935%2F935.html"
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
            <span>那須高原ひとり旅・名湯と自然を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">元祖白濁湯「鹿の湯」の木造共同浴場と時間湯体験</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">ひなびた木造建築の中に41度〜48度の湯船が並ぶ歴史的共同浴場。強い硫黄の香りと濃厚な白濁湯に浸かると、身体の芯からデトックスされます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">那須ロープウェイで登る茶臼岳の活火山パノラマ絶景</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">9合目まで一気に登れるロープウェイ。荒々しい溶岩石と噴煙を上げる火口、眼下に広がる那須野ヶ原の雄大なパノラマウォークが楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">那須高原のミルクスイーツと高原ベーカリーめぐり</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">酪農が盛んな那須ならではの濃厚なソフトクリームやチーズケーキ。「ペニーレイン」など有名ベーカリーの焼きたてパンをテイクアウトして森で味わうのも贅沢です。</p>
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
                <span>一人旅で広々としたリゾート空間と温泉を楽しめる那須の宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「那須温泉 ホテルハーヴェスト那須」は広大な森に囲まれ、露天風呂付き天然温泉大浴場や室内温水プールを備えた最高級リゾートです。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>茶臼岳の絶景を眺めながら白濁温泉に浸かりたいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「那須温泉 旅館ニューおおたか」は那須高地に位置し、開放感抜群の展望露天風呂から白濁の源泉と関東平野の夜景を一望できます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73998%2F73998.html"
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
