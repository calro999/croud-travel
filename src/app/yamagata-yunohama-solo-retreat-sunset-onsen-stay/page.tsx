import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【山形・湯野浜温泉ひとり旅・日本海夕陽おこもり】日本の夕陽百選・オーシャン露天・庄内浜鮮魚！波音に包まれる海辺のソロリトリート厳選3宿',
  description: '庄内空港から車でわずか10分！全室オーシャンビュー＆波打ち際の展望大浴場が評判の最高峰「海辺のお宿 一久」、日本海一望の絶景露天風呂と庄内の美食会席を誇る名門「游水亭 いさごや」、手頃な料金でパノラマ展望温泉を楽しめる「うしお荘」を楽天API最新データに基づき徹底比較。',
  keywords: '湯野浜温泉 一人旅 宿,湯野浜 ホテル 一人 温泉,海辺のお宿 一久,游水亭 いさごや,うしお荘,湯野浜 夕陽 ひとり旅',
  openGraph: {
    title: '【山形・湯野浜温泉ひとり旅・日本海夕陽おこもり】日本の夕陽百選・オーシャン露天・庄内浜鮮魚！波音に包まれる海辺のソロリトリート厳選3宿',
    description: '庄内空港から車でわずか10分！全室オーシャンビュー＆波打ち際の展望大浴場が評判の最高峰「海辺のお宿 一久」、日本海一望の絶景露天風呂と庄内の美食会席を誇る名門「游水亭 いさごや」、手頃な料金でパノラマ展望温泉を楽しめる「うしお荘」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/yamagata-yunohama-solo-retreat-sunset-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【山形・湯野浜温泉ひとり旅・日本海夕陽おこもり】日本の夕陽百選・オーシャン露天・庄内浜鮮魚！波音に包まれる海辺のソロリトリート厳選3宿',
    description: '庄内空港から車でわずか10分！全室オーシャンビュー＆波打ち際の展望大浴場が評判の最高峰「海辺のお宿 一久」、日本海一望の絶景露天風呂と庄内の美食会席を誇る名門「游水亭 いさごや」、手頃な料金でパノラマ展望温泉を楽しめる「うしお荘」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/yamagata-yunohama-solo-retreat-sunset-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【山形・湯野浜温泉ひとり旅・日本海夕陽おこもり】日本の夕陽百選・オーシャン露天・庄内浜鮮魚！波音に包まれる海辺のソロリトリート厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            山形・湯野浜温泉ひとり旅＆日本海夕陽おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【山形・湯野浜温泉ひとり旅・日本海夕陽おこもり】日本の夕陽百選・オーシャン露天・庄内浜鮮魚！波音に包まれる海辺のソロリトリート厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              水平線へと沈みゆく黄金の夕陽と、潮風に揺れる白い波。開湯千年を超える庄内海岸の名湯で、日本海の絶景露天風呂と獲れたての海の幸に浸る至福の時間
            </p>
            <p>
              天寿年間に亀が海辺の温泉で傷を癒やしていたことから「亀の湯」として発見されたと伝わる山形県・湯野浜温泉。山形県屈指のロングビーチに沿って宿が連なり、夕暮れ時には日本海全体が茜色に染まる「日本の夕陽百選」のドラマチックな絶景が広がります。庄内空港から直行できるアクセスの良さもソロ旅に最適です。
            </p>
            <p>
              波音を聞きながら客室や露天風呂から夕陽を眺められる海辺の宿から、庄内浜の新鮮な魚介を一人でゆっくり堪能できる割烹旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 湯野浜温泉　海辺のお宿　一久（★4.55 / 最低目安：11,000円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 湯野浜温泉　游水亭　いさごや（★4.38 / 最低目安：15,488円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 湯野浜温泉　保養所　うしお荘（★4.56 / 最低目安：12,500円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">山形県 鶴岡市湯野浜1-10周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              湯野浜温泉　海辺のお宿　一久
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.55 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">11,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32244/32244.jpg"
                  alt="湯野浜温泉　海辺のお宿　一久 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              波のたりの夕暮れに、庄内のおいしいを喰らふ＜全室オーシャンビュー＞
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>波のたりの夕暮れに、庄内のおいしいを喰らふ＜全室オーシャンビュー＞</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ鶴岡駅よりタクシーで２５分　定期バス（４０分）バス停より徒歩３分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32244%2F32244.html"
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
              <span className="text-xs text-stone-500 font-medium">山形県 鶴岡市湯野浜1-8-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              湯野浜温泉　游水亭　いさごや
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.38 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">15,488円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67149/67149.jpg"
                  alt="湯野浜温泉　游水亭　いさごや 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              客室露天付き絶景スイートルーム♪ 『食の都・庄内』で旬の美味と絶景の夕日に心癒される宿
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>客室露天付き絶景スイートルーム♪ 『食の都・庄内』で旬の美味と絶景の夕日に心癒される宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ羽越線　鶴岡駅より庄内交通バス湯野浜温泉行き乗車で約４０分／車で約２０分（終点下車）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67149%2F67149.html"
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
              <span className="text-xs text-stone-500 font-medium">山形県 鶴岡市湯野浜1-11周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              湯野浜温泉　保養所　うしお荘
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.56 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">12,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/40023/40023.jpg"
                  alt="湯野浜温泉　保養所　うしお荘 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              日本海に沈む夕日が目の前！絶景と源泉掛け流し温泉、庄内自慢の海の幸。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>日本海に沈む夕日が目の前！絶景と源泉掛け流し温泉、庄内自慢の海の幸</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ鶴岡駅からバスで４０分、タクシーで30分/ＪＲ酒田駅からタクシーで40分/庄内空港から車で1５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40023%2F40023.html"
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
            <span>湯野浜温泉ひとり旅・夕陽と庄内ガストロノミーを極める現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">湯野浜海岸の砂浜散策と「日本の夕陽百選」サンセット</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">どこまでも続く白砂の海岸。日没の30分前から波打ち際に立ち、オレンジから紫色へと刻々と移り変わる空と海のマジックアワーを一人静かに見届けられます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">加茂水族館（クラゲドリーム館）の神秘的な癒やし空間</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">世界一のクラゲ展示数を誇る名水族館。直径5mの円形大水槽「クラゲドリームシアター」でゆらゆら漂うクラゲたちを眺める時間は最高の瞑想体験です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">庄内浜の「天然岩牡蠣・のどぐろ」と日本酒王国・山形の美酒</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">鳥海山の雪解け水が流れ込む日本海で育った大粒の岩牡蠣や紅エビ。地酒「十四代」「初孫」「くどき上手」とともに味わう夕食は言葉を失う美味さです。</p>
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
                <span>一人旅で日本海の夕陽を客室や露天風呂から一番きれいに眺められる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「湯野浜温泉 海辺のお宿 一久」は全客室が海に面し、展望露天風呂やロビーからも日本海のパノラマ夕陽を一望できる最高のおこもり宿です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>庄内の本格会席と上質な温泉旅館の風情を楽しむなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「湯野浜温泉 游水亭 いさごや」は日本海を望む露天風呂と月替わりの美食会席が評判。一人旅でも優雅なおこもりステイが叶います。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32244%2F32244.html"
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
