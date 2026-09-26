import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【岐阜出張・歴史ひとり旅】長良川温泉・金華山岐阜城パノラマ・飛騨牛グルメ！信長公ゆかりの地でととのう厳選3宿',
  description: '名古屋駅からJR新快速でわずか約20分！江戸享保年間創業で長良川の鵜飼舟を望む老舗名湯「長良川温泉 十八楼」、金華山と岐阜城の絶景を望むハイクラスリゾート「都ホテル 岐阜長良川」、JR岐阜駅徒歩約3分の快適ビジネス拠点「ダイワロイネットホテル岐阜」を楽天APIデータに基づき徹底比較。',
  keywords: '岐阜 出張 ホテル,岐阜 ひとり旅 温泉,長良川温泉 十八楼,都ホテル岐阜長良川,ダイワロイネットホテル岐阜,岐阜城 飛騨牛',
  openGraph: {
    title: '【岐阜出張・歴史ひとり旅】長良川温泉・金華山岐阜城パノラマ・飛騨牛グルメ！信長公ゆかりの地でととのう厳選3宿',
    description: '名古屋駅からJR新快速でわずか約20分！江戸享保年間創業で長良川の鵜飼舟を望む老舗名湯「長良川温泉 十八楼」、金華山と岐阜城の絶景を望むハイクラスリゾート「都ホテル 岐阜長良川」、JR岐阜駅徒歩約3分の快適ビジネス拠点「ダイワロイネットホテル岐阜」を楽天APIデータに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/gifu-nagaragawa-solo-business-castle-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【岐阜出張・歴史ひとり旅】長良川温泉・金華山岐阜城パノラマ・飛騨牛グルメ！信長公ゆかりの地でととのう厳選3宿',
    description: '名古屋駅からJR新快速でわずか約20分！江戸享保年間創業で長良川の鵜飼舟を望む老舗名湯「長良川温泉 十八楼」、金華山と岐阜城の絶景を望むハイクラスリゾート「都ホテル 岐阜長良川」、JR岐阜駅徒歩約3分の快適ビジネス拠点「ダイワロイネットホテル岐阜」を楽天APIデータに基づき徹底比較。',
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
    datePublished: '2026-09-12T16:30:00+09:00',
    dateModified: '2026-09-12T16:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/gifu-nagaragawa-solo-business-castle-onsen-stay',
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
        <span className="text-stone-700 font-medium">岐阜出張＆長良川温泉ひとり旅特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【岐阜出張・歴史ひとり旅】長良川温泉・金華山岐阜城パノラマ・飛騨牛グルメ！信長公ゆかりの地でととのう厳選3宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
          ひとり旅・出張・サウナ＆名湯特集
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          【岐阜出張・歴史ひとり旅】長良川温泉・金華山岐阜城パノラマ・飛騨牛グルメ！信長公ゆかりの地でととのう厳選3宿
        </h1>
        <div className="flex flex-wrap items-center text-xs text-stone-500 gap-4 border-b border-stone-200 pb-4">
          <time dateTime="2026-09-12">2026.09.12 更新</time>
          <span>執筆：クラウドトラベル ひとり旅・出張調査班</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API提携</span>
        </div>

        {/* リード文 */}
        <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm leading-relaxed text-stone-700 space-y-3 text-sm sm:text-base">
          <p className="font-semibold text-stone-900 text-base sm:text-lg">
            清流長良川と金華山にそびえる岐阜城。天下布武の歴史に思いを馳せ、赤褐色の名湯でリフレッシュする濃尾ステイ
          </p>
          <p>
            織田信長公が天下統一の拠点とし、長良川の鵜飼文化や岐阜和傘・美濃和紙などの伝統工芸が息づく岐阜市。名古屋から電車でわずか20分という抜群のアクセスを誇り、中京圏の重要ビジネス拠点であると同時に、贅沢なソロリトリートの目的地としても注目されています。
          </p>
          <p>
            鉄分を豊富に含み茶褐色に濁る良質な「長良川温泉」に身を浸す老舗旅館から、金華山と長良川の雄大なパノラマを眼下に望むモダンホテルまで、楽天トラベル公式APIより取得した最新の宿泊データとレビュー評価をもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 長良川温泉　十八楼（★4.61 / 最低目安：9,350円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 都ホテル　岐阜長良川（★4.48 / 最低目安：8,100円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. ダイワロイネットホテル岐阜（★4.46 / 最低目安：5,220円〜）</a></li>
            <li>
              <a href="#area-tips" className="text-amber-800 hover:underline">
                ▶ 岐阜出張・一人旅を120%楽しむための現地TIPS
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
              <span className="text-xs text-stone-500 font-medium">岐阜周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              長良川温泉　十八楼
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.61 <span className="text-xs text-stone-500 font-normal">（クチコミ 1845件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">9,350円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2979/2979.jpg"
                  alt="長良川温泉　十八楼 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2979/2979_r1.jpg"
                  alt="長良川温泉　十八楼 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>江戸時代より時を刻む麗しの老舗宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>長良川温泉 『蔵の湯』が好評です</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">岐阜県岐阜市湊町１０番地</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">(電車)ＪＲ岐阜駅 名鉄岐阜駅より路線バスにて約15分 長良橋バス停下車　　(車)東海北陸道 一宮木曽川ICより約30分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2979%2F2979.html"
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
              <span className="text-xs text-stone-500 font-medium">岐阜周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              都ホテル　岐阜長良川
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.48 <span className="text-xs text-stone-500 font-normal">（クチコミ 2100件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,100円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9483/9483.jpg"
                  alt="都ホテル　岐阜長良川 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9483/9483_twn.jpg"
                  alt="都ホテル　岐阜長良川 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>岐阜県下シティホテル初！シミュレーションゴルフ2024年4月1日誕生</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">岐阜県岐阜市長良福光2695-2</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">バス：　ＪＲ岐阜駅バスターミナル⑪　市内ループ線・左回り で約２０分　国際会議場北口下車、徒歩３分　</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9483%2F9483.html"
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
              <span className="text-xs text-stone-500 font-medium">岐阜周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              ダイワロイネットホテル岐阜
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.46 <span className="text-xs text-stone-500 font-normal">（クチコミ 5093件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,220円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/52250/52250.jpg"
                  alt="ダイワロイネットホテル岐阜 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/52250/52250_ys.jpg"
                  alt="ダイワロイネットホテル岐阜 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>2024年4月リニューアルオープン！1階にコンビニ、周辺には飲食店が多数</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>観光・ビジネスの拠点に！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">岐阜県岐阜市神田町8-5</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">JR「岐阜駅」長良川口より徒歩約7分／「名鉄岐阜駅」より徒歩約2分／名古屋国際空港より特急で「名鉄岐阜駅」へ約60分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52250%2F52250.html"
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
            <span>💡</span> 岐阜出張・一人旅を120%楽しむための現地TIPS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">金華山ロープウェーと難攻不落の岐阜城天守閣</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">山頂にそびえる岐阜城からは、眼下を蛇行する長良川と濃尾平野、遠く伊吹山まで360度の大パノラマが広がります。信長公が見下ろした天下の絶景を体感できます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">川原町の格子戸の町並みと鮎菓子・クラフト散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">鵜飼観覧船乗り場から続く「川原町」は、格子戸が連なる黒壁の町家が残る情緒あるエリア。岐阜銘菓「登り鮎」の食べ比べや、町家カフェでのひと息が人気です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">名物「飛騨牛」と岐阜駅前「玉宮町」の居酒屋街</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">JR岐阜駅から名鉄岐阜駅にかけて広がる玉宮町には、極上の飛騨牛握りや朴葉味噌焼き、長良川の天然鮎を地酒とともに一人でも気軽に楽しめる名店が集結しています。</p>
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
                <span>岐阜市内で本格的な天然温泉と歴史の情緒を味わえる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「長良川温泉 十八楼」は創業160年以上の老舗旅館。長良川を望む露天風呂や土蔵を再生した温泉風呂があり、一人旅プランも充実しています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>JR岐阜駅前で出張の移動が最も快適なホテルはどこですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「ダイワロイネットホテル岐阜」はJR岐阜駅北口から徒歩約3分。大通り沿いに位置し、広めのデスクと上質な寝具でビジネスに最適です。
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
                href="/prefectures/shiga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                滋賀県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tokyo"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                東京都の宿・温泉
              </Link>
              <Link
                href="/prefectures/iwate"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岩手県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagoshima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                鹿児島県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
