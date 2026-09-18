import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【上信越高原・万座温泉ひとり旅・標高1800m雲上の白濁硫黄泉おこもり】日本一の硫黄含有量・星空露天風呂・上州牛会席！空に一番近い秘湯厳選3宿',
  description: '日本屈指の高所と硫黄濃度を誇る雲上の名湯・群馬・万座温泉！ログハウス風の木の温もりと乳白色の極上露天風呂が評判の「万座亭」、多彩な木造湯殿と湯治文化を伝える名門「日進舘」、4つの自家源泉と混浴を含む広大な露天風呂群が自慢の「万座高原ホテル」を楽天API最新データに基づき徹底比較。',
  keywords: '万座温泉 一人旅 宿,万座 ホテル 一人 温泉,万座亭 一人旅,万座温泉 日進舘,万座高原ホテル,万座 ひとり旅 おこもり',
  openGraph: {
    title: '【上信越高原・万座温泉ひとり旅・標高1800m雲上の白濁硫黄泉おこもり】日本一の硫黄含有量・星空露天風呂・上州牛会席！空に一番近い秘湯厳選3宿',
    description: '日本屈指の高所と硫黄濃度を誇る雲上の名湯・群馬・万座温泉！ログハウス風の木の温もりと乳白色の極上露天風呂が評判の「万座亭」、多彩な木造湯殿と湯治文化を伝える名門「日進舘」、4つの自家源泉と混浴を含む広大な露天風呂群が自慢の「万座高原ホテル」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/gunma-manza-solo-retreat-milky-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【上信越高原・万座温泉ひとり旅・標高1800m雲上の白濁硫黄泉おこもり】日本一の硫黄含有量・星空露天風呂・上州牛会席！空に一番近い秘湯厳選3宿',
    description: '日本屈指の高所と硫黄濃度を誇る雲上の名湯・群馬・万座温泉！ログハウス風の木の温もりと乳白色の極上露天風呂が評判の「万座亭」、多彩な木造湯殿と湯治文化を伝える名門「日進舘」、4つの自家源泉と混浴を含む広大な露天風呂群が自慢の「万座高原ホテル」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/gunma-manza-solo-retreat-milky-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【上信越高原・万座温泉ひとり旅・標高1800m雲上の白濁硫黄泉おこもり】日本一の硫黄含有量・星空露天風呂・上州牛会席！空に一番近い秘湯厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            群馬・万座温泉ひとり旅＆雲上白濁硫黄泉おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【上信越高原・万座温泉ひとり旅・標高1800m雲上の白濁硫黄泉おこもり】日本一の硫黄含有量・星空露天風呂・上州牛会席！空に一番近い秘湯厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月17日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              標高1,800m、草津白根山の西山腹に湧く「空に最も近い温泉郷」。日本一の濃厚な硫黄成分を誇る乳白色の熱泉と、満天の星空・雲海パノラマに抱かれる至高の雲上リトリート
            </p>
            <p>
              軽井沢や万座鹿沢口駅から路線バスでアクセスできる山岳秘湯・万座温泉。湯畑からこんこんと湧き出す源泉は硫黄含有量日本一を誇り、pH2前後の酸性硫黄泉が古い角質を落とし血行を促進します。夜には手が届きそうなほどの満天の星空、朝には眼下に広がる雄大な雲海を望みながら、全身が乳白色の湯に包まれる感動体験が一人旅の心身を解き放ちます。
            </p>
            <p>
              アットホームな山の温もりと極上泉を味わえる和風旅館から、本格的な湯治体験ができる歴史ある温泉宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 万座温泉　万座亭（★4.4 / 最低目安：5,500円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 万座温泉　日進舘（★4.23 / 最低目安：7,320円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 万座温泉　万座高原ホテル（★4.08 / 最低目安：2,793円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">群馬県 吾妻郡嬬恋村万座温泉周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              万座温泉　万座亭
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.4 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8658/8658.jpg"
                  alt="万座温泉　万座亭 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              大人気★ログ風の露天風呂＆乳白色の効能豊かな名湯で心と体の保養！貸切風呂も人気♪
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>大人気★ログ風の露天風呂＆乳白色の効能豊かな名湯で心と体の保養！貸切風呂も人気♪</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：関越自動車道渋川伊香保ICより120分。国道292号線・県道牧干俣線は冬期通行止。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8658%2F8658.html"
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
              <span className="text-xs text-stone-500 font-medium">群馬県 吾妻郡嬬恋村大字干俣周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              万座温泉　日進舘
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.23 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,320円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033.jpg"
                  alt="万座温泉　日進舘 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              標高1800ｍ万座温泉の老舗宿『日進舘』＜エントリーで最大ポイント15倍！得旅キャンペーン実施中！＞
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>標高1800ｍ万座温泉の老舗宿『日進舘』＜エントリーで最大ポイント15倍！得旅キャンペーン実施中！＞</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：上信越自動車道碓氷軽井沢ＩＣより車で９０分。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3033%2F3033.html"
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
              <span className="text-xs text-stone-500 font-medium">群馬県 吾妻郡嬬恋村万座温泉周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              万座温泉　万座高原ホテル
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.08 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">2,793円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67057/67057.jpg"
                  alt="万座温泉　万座高原ホテル 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              4種の源泉、8つの浴槽からなる露天風呂をお楽しみください。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>4種の源泉</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>8つの浴槽からなる露天風呂をお楽しみください</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ吾妻線万座鹿沢口駅からバスで４０分、タクシーで３５分。／軽井沢ＩＣから鬼押、万座ハイウェー（有料道路）経由で６４ｋｍ</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67057%2F67057.html"
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
            <span>万座温泉ひとり旅・万座空吹と白根山ネイチャーを巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「万座空吹（からぶき）」白い岩肌から噴き出す豪快な火山性ガス鑑賞</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉街のシンボル。かつての火口跡から白い蒸気が立ち上る荒涼としたダイナミックな火山景観を一人静かに眺める大自然体験。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「熊四郎洞窟」古代人の住居跡と温泉街を一望する散策路歩き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">万座薬師堂の裏手にある散策路。針葉樹林の森林浴を楽しみながら高台の展望台へ登り、万座温泉郷の全景を見渡せます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">万座名物「湯の花豆腐」と上州もち豚の山菜鍋</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">良質な大豆と高原の名水で作られた濃厚な豆腐料理。夜は上州牛やもち豚の陶板焼きを地元の純米酒「浅間山」とともに味わう贅沢。</p>
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
                <span>一人旅でログ調の落ち着いた雰囲気と極上の白濁露天風呂を味わえる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「万座温泉 万座亭」はヒバ造りの内湯や野趣あふれる白濁露天風呂を備え、楽天口コミ★4.4。山小屋風の上質な空間が一人旅に大人気です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>万座温泉で伝統的な湯治と多彩な木造湯殿を楽しみたいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「万座温泉 日進舘」は「苦湯」「姥湯」など木造大浴場「長寿の湯」をはじめ9つの湯船を誇り、健康増進と心のリフレッシュを求める一人旅に最適です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8658%2F8658.html"
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
