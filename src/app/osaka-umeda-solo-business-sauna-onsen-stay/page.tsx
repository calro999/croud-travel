import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【大阪梅田出張・サウナ温泉ステイ】客室天然温泉・日本初カプセルサウナ聖地・キタの歓楽街！西日本最大の拠点を制する厳選3宿',
  description: '新大阪駅からJR・御堂筋線で約5分！全客室のバスルームに天然温泉を給湯するラグジュアリーシティホテル「ホテル阪神大阪」、黒川紀章設計の伝説的サウナ聖地「カプセルイン大阪（ニュージャパン梅田）」、最上階に伊豆直送露天スパを備える「天然温泉ホテルリブマックスPREMIUM梅田EAST」を楽天APIデータに基づき徹底比較。',
  keywords: '大阪 梅田 出張 ホテル,梅田 サウナ ホテル,ホテル阪神大阪,カプセルイン大阪,ニュージャパン梅田,梅田 温泉 一人旅',
  openGraph: {
    title: '【大阪梅田出張・サウナ温泉ステイ】客室天然温泉・日本初カプセルサウナ聖地・キタの歓楽街！西日本最大の拠点を制する厳選3宿',
    description: '新大阪駅からJR・御堂筋線で約5分！全客室のバスルームに天然温泉を給湯するラグジュアリーシティホテル「ホテル阪神大阪」、黒川紀章設計の伝説的サウナ聖地「カプセルイン大阪（ニュージャパン梅田）」、最上階に伊豆直送露天スパを備える「天然温泉ホテルリブマックスPREMIUM梅田EAST」を楽天APIデータに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/osaka-umeda-solo-business-sauna-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【大阪梅田出張・サウナ温泉ステイ】客室天然温泉・日本初カプセルサウナ聖地・キタの歓楽街！西日本最大の拠点を制する厳選3宿',
    description: '新大阪駅からJR・御堂筋線で約5分！全客室のバスルームに天然温泉を給湯するラグジュアリーシティホテル「ホテル阪神大阪」、黒川紀章設計の伝説的サウナ聖地「カプセルイン大阪（ニュージャパン梅田）」、最上階に伊豆直送露天スパを備える「天然温泉ホテルリブマックスPREMIUM梅田EAST」を楽天APIデータに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/osaka-umeda-solo-business-sauna-onsen-stay',
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
        <span className="text-stone-700 font-medium">大阪・梅田サウナ＆天然温泉出張特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【大阪梅田出張・サウナ温泉ステイ】客室天然温泉・日本初カプセルサウナ聖地・キタの歓楽街！西日本最大の拠点を制する厳選3宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
          ひとり旅・出張・サウナ＆名湯特集
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          【大阪梅田出張・サウナ温泉ステイ】客室天然温泉・日本初カプセルサウナ聖地・キタの歓楽街！西日本最大の拠点を制する厳選3宿
        </h1>
        <div className="flex flex-wrap items-center text-xs text-stone-500 gap-4 border-b border-stone-200 pb-4">
          <time dateTime="2026-09-13">2026.09.13 更新</time>
          <span>執筆：クラウドトラベル ひとり旅・出張調査班</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API提携</span>
        </div>

        {/* リード文 */}
        <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm leading-relaxed text-stone-700 space-y-3 text-sm sm:text-base">
          <p className="font-semibold text-stone-900 text-base sm:text-lg">
            高層ビル群が煌めくキタの中心・梅田。ハードなビジネスの後は、本格サウナと天然温泉で脳と身体を極限までととのえる
          </p>
          <p>
            西日本最大のターミナルであり、ビジネス・商業・グルメのあらゆるエネルギーが凝縮する大阪・梅田（キタ）。日中は分刻みの商談やカンファレンスに追われるビジネスパーソンにとって、夜の滞在先での完全なリカバリーは翌日のパフォーマンスを決定づけます。
          </p>
          <p>
            客室の浴槽をひねるだけで天然温泉が溢れ出る極上ステイから、サウナ愛好家（サウナー）の聖地として知られるスパサウナ施設まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 天然温泉ホテルリブマックスＰＲＥＭＩＵＭ梅田ＥＡＳＴ（★4.2 / 最低目安：3,400円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. カプセルイン大阪（ニュージャパン梅田）（★4.27 / 最低目安：4,180円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. ホテル阪神大阪（★4.32 / 最低目安：6,237円〜）</a></li>
            <li>
              <a href="#area-tips" className="text-amber-800 hover:underline">
                ▶ 梅田出張・サウナ滞在を快適にする現地TIPS
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
              <span className="text-xs text-stone-500 font-medium">中崎町周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              天然温泉ホテルリブマックスＰＲＥＭＩＵＭ梅田ＥＡＳＴ
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.2 <span className="text-xs text-stone-500 font-normal">（クチコミ 740件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">3,400円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172009/172009.jpg"
                  alt="天然温泉ホテルリブマックスＰＲＥＭＩＵＭ梅田ＥＡＳＴ 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172009/172009.jpg"
                  alt="天然温泉ホテルリブマックスＰＲＥＭＩＵＭ梅田ＥＡＳＴ 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>最上階展望スパ「伊豆直送の天然温泉100％」展望大浴場＆展望露天風呂～サウナ有～</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">大阪府大阪市北区山崎町4-16</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">2020年OPEN♪　最上階天然温泉スパ＆サウナ　天満駅徒歩5分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172009"
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
              <span className="text-xs text-stone-500 font-medium">東梅田周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              カプセルイン大阪（ニュージャパン梅田）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.27 <span className="text-xs text-stone-500 font-normal">（クチコミ 3196件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">4,180円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/40274/40274.jpg"
                  alt="カプセルイン大阪（ニュージャパン梅田） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/40274/40274_si.jpg"
                  alt="カプセルイン大阪（ニュージャパン梅田） 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>※男性専用カプセルホテル※【日本初のカプセルホテル】建築家「黒川紀章氏」が設計！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">大阪府大阪市北区堂山町9-5</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">地下鉄 東梅田駅から徒歩7分/ＪＲ 大阪駅・ 阪神 大阪駅・ 阪急 梅田駅から各徒歩10分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40274"
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
              <span className="text-xs text-stone-500 font-medium">福島（大阪）周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              ホテル阪神大阪
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.32 <span className="text-xs text-stone-500 font-normal">（クチコミ 7981件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,237円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5902/5902.jpg"
                  alt="ホテル阪神大阪 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5902/5902_room.jpg"
                  alt="ホテル阪神大阪 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>JR環状線「大阪駅」から1駅「福島駅」徒歩すぐ★全客室に天然温泉を供給！バスルームで楽しむ温泉♪</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">大阪府大阪市福島区福島5-6-16</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">JR環状線「大阪駅」から1駅「福島駅」徒歩すぐ、空港リムジンバス乗り場から徒歩約10分。</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5902"
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
            <span>💡</span> 梅田出張・サウナ滞在を快適にする現地TIPS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">グランフロント＆うめきた公園のオープンエア散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">進化を続けるうめきたエリア。広大な緑地が広がる「うめきた公園」は朝の散歩や頭の整理に最適。洗練されたカフェで朝のブレンドコーヒーを味わうのもおすすめです。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">お初天神通り＆新梅田食道街のガード下ディープ呑み</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">梅田駅高架下の「新梅田食道街」や「お初天神通り」には、ひとり客大歓迎の立ち食い寿司、串かつ、おでんの名店が密集。サウナ後にふらりと立ち寄るサ飯に困りません。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">新大阪・伊丹空港・関西空港へのマルチアクセス</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">新大阪駅へはJRで1駅4分、伊丹空港へは新阪急ホテル前から直行リムジンバスで約30分、関空へも関空快速でダイレクト。出張前後の移動ストレスが極限まで抑えられます。</p>
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
                <span>部屋のプライベート空間で天然温泉に浸かりたい出張におすすめの宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「ホテル阪神大阪」（大阪駅から1駅・福島駅すぐ）は、なんと全客室の個別バスルームに天然温泉が引かれており、24時間好きな時に客室内で温泉浴を楽しめます。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>梅田エリアで本格的なサウナと水風呂を満喫できる聖地は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「カプセルイン大阪（ニュージャパン梅田）」は日本で初めてカプセルホテルを開業したサウナの殿堂。オートロウリュサウナや低温サウナ、冷水風呂を完備しています。
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
    </main>
  );
}
