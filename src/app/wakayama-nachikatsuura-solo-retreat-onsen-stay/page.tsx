import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【南紀勝浦温泉ひとり旅・世界遺産熊野古道おこもり】太平洋パノラマ露天・生まぐろ水揚げ日本一・島まるごと天然温泉！那智の滝と海の秘境厳選3宿',
  description: '世界遺産「紀伊山地の霊場と参詣道」の玄関口・南紀勝浦温泉！熊野灘を一望する絶景露天風呂と旬の生まぐろバイキングが評判の「休暇村 南紀勝浦」、海沿いの静寂と豊かな自家源泉が心温まる「ホテルなぎさや」、専用客船で渡る孤島の天然露天風呂「紀州潮聞之湯」を誇る最高峰「碧き島の宿 熊野別邸 中の島」を楽天API最新データに基づき徹底比較。',
  keywords: '南紀勝浦温泉 一人旅 宿,勝浦 ホテル 一人 温泉,休暇村南紀勝浦,ホテルなぎさや,熊野別邸 中の島,南紀勝浦 熊野古道 ひとり旅',
  openGraph: {
    title: '【南紀勝浦温泉ひとり旅・世界遺産熊野古道おこもり】太平洋パノラマ露天・生まぐろ水揚げ日本一・島まるごと天然温泉！那智の滝と海の秘境厳選3宿',
    description: '世界遺産「紀伊山地の霊場と参詣道」の玄関口・南紀勝浦温泉！熊野灘を一望する絶景露天風呂と旬の生まぐろバイキングが評判の「休暇村 南紀勝浦」、海沿いの静寂と豊かな自家源泉が心温まる「ホテルなぎさや」、専用客船で渡る孤島の天然露天風呂「紀州潮聞之湯」を誇る最高峰「碧き島の宿 熊野別邸 中の島」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/wakayama-nachikatsuura-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【南紀勝浦温泉ひとり旅・世界遺産熊野古道おこもり】太平洋パノラマ露天・生まぐろ水揚げ日本一・島まるごと天然温泉！那智の滝と海の秘境厳選3宿',
    description: '世界遺産「紀伊山地の霊場と参詣道」の玄関口・南紀勝浦温泉！熊野灘を一望する絶景露天風呂と旬の生まぐろバイキングが評判の「休暇村 南紀勝浦」、海沿いの静寂と豊かな自家源泉が心温まる「ホテルなぎさや」、専用客船で渡る孤島の天然露天風呂「紀州潮聞之湯」を誇る最高峰「碧き島の宿 熊野別邸 中の島」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/wakayama-nachikatsuura-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【南紀勝浦温泉ひとり旅・世界遺産熊野古道おこもり】太平洋パノラマ露天・生まぐろ水揚げ日本一・島まるごと天然温泉！那智の滝と海の秘境厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            和歌山・南紀勝浦温泉ひとり旅＆熊野古道おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【南紀勝浦温泉ひとり旅・世界遺産熊野古道おこもり】太平洋パノラマ露天・生まぐろ水揚げ日本一・島まるごと天然温泉！那智の滝と海の秘境厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              熊野三山を巡る祈りの地と、黒潮寄せる勝浦港。潮騒を聞きながら掛け流しの硫黄・食塩泉に浸かり、名物の生まぐろに舌鼓を打つ極上のリトリート
            </p>
            <p>
              名古屋・新大阪から特急くろしお・特急南紀でアクセスできる紀伊半島の南端・南紀勝浦。リアス海岸の美しい入江に無数の良質な源泉が湧き出ており、海と一体になれる絶景露天風呂が点在します。日本一の生鮮マグロ水揚げ高を誇る勝浦漁港の活気と、熊野那智大社・那智の滝の霊験あらたかな空気が一人旅の心を深く満たします。
            </p>
            <p>
              潮風を感じる高台の国立公園リゾートから、船でしか行けないプライベートアイランドの隠れ宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 勝浦温泉　休暇村　南紀勝浦（★4.39 / 最低目安：11,000円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 南紀勝浦温泉　ホテルなぎさや（★4.02 / 最低目安：8,800円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 碧き島の宿　熊野別邸　中の島（★4.78 / 最低目安：35,990円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">和歌山県 東牟婁郡那智勝浦町宇周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              勝浦温泉　休暇村　南紀勝浦
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/75227/75227.jpg"
                  alt="勝浦温泉　休暇村　南紀勝浦 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              熊野灘の潮騒と朝陽に癒される高台のリゾートホテル
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>熊野灘の潮騒と朝陽に癒される高台のリゾートホテル</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：送迎バス（要予約）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75227%2F75227.html"
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
              <span className="text-xs text-stone-500 font-medium">和歌山県 東牟婁郡那智勝浦町大周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              南紀勝浦温泉　ホテルなぎさや
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.02 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/6002/6002.jpg"
                  alt="南紀勝浦温泉　ホテルなぎさや 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              トンネルを抜けるとそこは…映画のような入り江の中にある秘密のお宿
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>トンネルを抜けるとそこは…映画のような入り江の中にある秘密のお宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：JR「���伊勝浦駅」より車で約5分（事前予約で送迎サービス有）／大阪から紀勢自動車道「すさみ南IC」経由で約3時間半</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6002%2F6002.html"
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
              <span className="text-xs text-stone-500 font-medium">和歌山県 東牟婁郡那智勝浦町勝周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              碧き島の宿　熊野別邸　中の島
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.78 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">35,990円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5335/5335.jpg"
                  alt="碧き島の宿　熊野別邸　中の島 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              【碧き海に浮かぶ、一島一旅館のおもてなし】開放感抜群の絶景露天風呂は圧巻！露天風呂付客室も好評
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>【碧き海に浮かぶ</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>一島一旅館のおもてなし】開放感抜群の絶景露天風呂は圧巻！露天風呂付客室も好評</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ紀勢本線紀伊勝浦駅から徒歩７分。観光桟橋より専用船約5分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5335%2F5335.html"
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
            <span>南紀勝浦ひとり旅・熊野古道歩きとまぐろ市場を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">大門坂から熊野那智大社・那智の滝（落差133m）への古道歩き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">樹齢数百年の杉並木が続く石畳の大門坂を一人歩き。落差日本一の名瀑・那智の滝の水しぶきを浴びて心身を浄化する聖地体験。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">勝浦地方卸売市場の生まぐろ競り見学と朝獲れマグロ丼</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">一度も冷凍されていない生のクロマグロやメバチマグロがズラリと並ぶ朝の市場。近隣の食堂でモチモチ食感のマグロ丼を味わう至福。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">紀の松島めぐり遊覧船で巡るリアス海岸の奇岩美</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">勝浦港から出航する遊覧船。ラクダ岩や兜島など、太平洋の荒波が削り出したダイナミックな海岸美を海上から一人ゆったり楽しめます。</p>
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
                <span>一人旅で高台からの太平洋パノラマと勝浦名物の生まぐろを楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「休暇村 南紀勝浦」は吉野熊野国立公園の高台に位置し、満天の星や朝日を望む露天風呂と生まぐろ三昧のバイキングが一人旅に大人気です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>非日常を極める、船で渡る離島の一軒宿で贅沢なおこもりをするなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「碧き島の宿 熊野別邸 中の島」は専用船でアクセスする島全体が一つのリゾート。波打ち際の絶景露天風呂「紀州潮聞之湯」は一生ものの体験です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75227%2F75227.html"
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
