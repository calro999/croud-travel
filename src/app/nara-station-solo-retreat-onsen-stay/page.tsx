import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【奈良駅前ひとり旅・天然温泉おこもり】全館畳敷き・吉野桜の湯・若草山＆東大寺！古都1300年の静寂に癒やされる厳選3宿',
  description: 'JR・近鉄奈良駅すぐ！全館素足で過ごせる和風プレミアムホテル「御宿 野乃奈良」、自家源泉天然温泉「奈良若草の湯」と快適デスクワークの「ダイワロイネットホテル奈良」、駅西口直結で上質スパと美食を誇る「ホテル日航奈良」を徹底比較。',
  keywords: '奈良 一人旅 ホテル,奈良駅 温泉 ホテル,御宿野乃奈良,ダイワロイネットホテル奈良,ホテル日航奈良,奈良 おこもり 宿',
  openGraph: {
    title: '【奈良駅前ひとり旅・天然温泉おこもり】全館畳敷き・吉野桜の湯・若草山＆東大寺！古都1300年の静寂に癒やされる厳選3宿',
    description: 'JR・近鉄奈良駅すぐ！全館素足で過ごせる和風プレミアムホテル「御宿 野乃奈良」、自家源泉天然温泉「奈良若草の湯」と快適デスクワークの「ダイワロイネットホテル奈良」、駅西口直結で上質スパと美食を誇る「ホテル日航奈良」を徹底比較。',
    url: 'https://croud-travel.pages.dev/nara-station-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【奈良駅前ひとり旅・天然温泉おこもり】全館畳敷き・吉野桜の湯・若草山＆東大寺！古都1300年の静寂に癒やされる厳選3宿',
    description: 'JR・近鉄奈良駅すぐ！全館素足で過ごせる和風プレミアムホテル「御宿 野乃奈良」、自家源泉天然温泉「奈良若草の湯」と快適デスクワークの「ダイワロイネットホテル奈良」、駅西口直結で上質スパと美食を誇る「ホテル日航奈良」を徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/nara-station-solo-retreat-onsen-stay',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium">奈良・奈良駅前天然温泉＆古都ひとり旅リトリート特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【奈良駅前ひとり旅・天然温泉おこもり】全館畳敷き・吉野桜の湯・若草山＆東大寺！古都1300年の静寂に癒やされる厳選3宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
          ひとり旅・出張・サウナ＆名湯特集
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          【奈良駅前ひとり旅・天然温泉おこもり】全館畳敷き・吉野桜の湯・若草山＆東大寺！古都1300年の静寂に癒やされる厳選3宿
        </h1>
        <div className="flex flex-wrap items-center text-xs text-stone-500 gap-4 border-b border-stone-200 pb-4">
          <time dateTime="2026-09-13">2026.09.13 更新</time>
          <span>執筆：クラウドトラベル ひとり旅・出張調査班</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API提携</span>
        </div>

        {/* リード文 */}
        <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm leading-relaxed text-stone-700 space-y-3 text-sm sm:text-base">
          <p className="font-semibold text-stone-900 text-base sm:text-lg">
            1300年の歴史が息づく古都・奈良。鹿が戯れる奈良公園の朝露と、檜香る天然温泉に身を委ね、心の静寂を取り戻すソロステイ
          </p>
          <p>
            東大寺の大仏殿や春日大社の原生林、興福寺の五重塔など世界遺産が密集する奈良。京都よりもゆったりとした時間が流れ、路地裏のならまちには古民家カフェや地酒蔵が点在する、大人の一人旅に最高のデスティネーションです。
          </p>
          <p>
            全館畳敷きで素足の解放感を味わえる和風ホテルから、駅前直結で広々とした天然温泉大浴場を備えるシティホテルまで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
          </p>
        </div>
      </header>

      {/* 目次インデックス */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-stone-100 p-5 rounded-xl border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
            <span>📑</span> 本記事でご紹介する厳選ホテル
          </h2>
          <ul className="space-y-2 text-sm text-stone-700">
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 天然温泉　吉野桜の湯　御宿　野乃奈良（ドーミーイン・御宿野乃　ホテルズグループ）（★4.53 / 最低目安：6,780円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 天然温泉　奈良若草の湯　ダイワロイネットホテル奈良（★4.32 / 最低目安：5,520円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. ホテル日航奈良（★4.32 / 最低目安：6,300円〜）</a></li>
            <li>
              <a href="#area-tips" className="text-amber-800 hover:underline">
                ▶ 奈良駅前ひとり旅・おこもりを満喫する現地TIPS
              </a>
            </li>
            <li>
              <a href="#faq" className="text-amber-800 hover:underline">
                ▶ よくある質問（Q&amp;A）
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ホテル紹介セクション */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">奈良県 奈良市大宮町1-1-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              天然温泉　吉野桜の湯　御宿　野乃奈良（ドーミーイン・御宿野乃　ホテルズグループ）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.53 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,780円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/164657/164657.jpg"
                  alt="天然温泉　吉野桜の湯　御宿　野乃奈良（ドーミーイン・御宿野乃　ホテルズグループ） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 sm:p-5 mb-6 border border-stone-100">
              <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                <span>🌟</span> ひとり滞在・出張で選ばれる理由
              </h3>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>ＪＲ奈良駅前に天然温泉大浴場完備で観光拠点に最適な和風テイストホテル♪</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">奈良県奈良市大宮町1-1-6</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">JR奈良駅より徒歩にて約１分、近鉄奈良駅より徒歩にて約10分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F164657%2F164657.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl shadow transition transform hover:-translate-y-0.5 text-sm sm:text-base gap-2"
              >
                <span>楽天トラベルでプラン・空室・最新料金を見る</span>
                <span className="text-xs">▶</span>
              </a>
            </div>
          </div>
        </article>

        <article id="hotel-2" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第2位</span>
              <span className="text-xs text-stone-500 font-medium">奈良県 奈良市三条本町11-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              天然温泉　奈良若草の湯　ダイワロイネットホテル奈良
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.32 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,520円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/176685/176685.jpg"
                  alt="天然温泉　奈良若草の湯　ダイワロイネットホテル奈良 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 sm:p-5 mb-6 border border-stone-100">
              <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                <span>🌟</span> ひとり滞在・出張で選ばれる理由
              </h3>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>ＪＲ奈良駅西口より徒歩約３分</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>近鉄奈良駅より徒歩約15分</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>観光・ビジネスの拠点にお勧め</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">奈良県奈良市三条本町11-12</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">ＪＲ「奈良駅」西口より徒歩約３分／「近鉄奈良駅」より徒歩約15分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176685%2F176685.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl shadow transition transform hover:-translate-y-0.5 text-sm sm:text-base gap-2"
              >
                <span>楽天トラベルでプラン・空室・最新料金を見る</span>
                <span className="text-xs">▶</span>
              </a>
            </div>
          </div>
        </article>

        <article id="hotel-3" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第3位</span>
              <span className="text-xs text-stone-500 font-medium">奈良県 奈良市三条本町8-1周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              ホテル日航奈良
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.32 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,300円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1791/1791.jpg"
                  alt="ホテル日航奈良 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 sm:p-5 mb-6 border border-stone-100">
              <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                <span>🌟</span> ひとり滞在・出張で選ばれる理由
              </h3>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>【JR奈良駅西口直結】地酒が愉しめるラウンジ＆奈良の朝食ブッフェ好評</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">奈良県奈良市三条本町8-1</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">ＪＲ奈良駅西口直結 /近鉄奈良駅徒歩12分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1791%2F1791.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl shadow transition transform hover:-translate-y-0.5 text-sm sm:text-base gap-2"
              >
                <span>楽天トラベルでプラン・空室・最新料金を見る</span>
                <span className="text-xs">▶</span>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* 現地滞在TIPS */}
      <section id="area-tips" className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-200 pb-3">
            <span>💡</span> 奈良駅前ひとり旅・おこもりを満喫する現地TIPS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">早朝の奈良公園と春日大社「観光客ゼロの参道散策」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">朝の澄み切った木漏れ日の中、鹿たちが静かに草を食む奈良公園。朝6時〜7時台の静寂に包まれた春日大社の参道歩きは、一生忘れられない神聖な体験です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">ならまちの町家カフェと日本酒発祥の地・春鹿利き酒</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">格子戸が続く「ならまち」。老舗蔵元「今西清兵衛商店（春鹿）」では手頃な料金で名酒の利き酒体験ができ、一人でも気兼ねなく地酒文化を楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">三条通りの散策と名物「大仏プリン」「柿の葉寿司」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">奈良駅から猿沢池へと続くメインストリート。まろやかな絹ごし大仏プリンや、老舗の柿の葉寿司をテイクアウトしてホテルで味わうのも至福です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-stone-100 p-6 sm:p-8 rounded-2xl border border-stone-200">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-300 pb-3">
            <span>❓</span> 滞在に関するよくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>奈良駅周辺で天然温泉とサウナの評価が最も高い宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「天然温泉 吉野桜の湯 御宿 野乃奈良」はJR奈良駅徒歩約1分。全館畳敷き、天然温泉大浴場、高温サウナ、名物夜鳴きそばを備えた人気宿です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>駅直結でアクセスが良く、大浴場があるシティホテルは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「ホテル日航奈良」はJR奈良駅西口直結。宿泊者専用の大浴場「心の湯」を完備し、雨の日でも濡れずにチェックイン可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 予約案内バナー */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-6 sm:p-8 rounded-2xl shadow-md text-center">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            楽天トラベルで最新の空室状況・限定ポイントキャンペーンをチェック
          </h3>
          <p className="text-sm text-amber-100 mb-6 max-w-2xl mx-auto">
            平日限定の一人旅割引や、早期割・直前割など、楽天トラベルならではの特典プランが多数用意されています。人気日程は早めの予約がおすすめです。
          </p>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-amber-900 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-amber-50 transition transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            楽天トラベルで宿泊プラン・空室を探す
          </a>
        </div>
      </section>
    
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/aomori"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                青森県の宿・温泉
              </Link>
              <Link
                href="/prefectures/miyazaki"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                宮崎県の宿・温泉
              </Link>
              <Link
                href="/prefectures/okayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岡山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ibaraki"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                茨城県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
