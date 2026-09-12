import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【名古屋出張・サウナ温泉ステイ】名駅・栄アクセス・天然温泉錦鯱の湯・聖地ウェルビー今池！中部ビジネスを制する厳選3宿',
  description: '東海道新幹線「のぞみ」停車・中部国際空港からも直通！栄の繁華街中心で天然温泉大浴場と高温サウナを完備する「ドーミーインPREMIUM名古屋栄」、全国サウナーの聖地でからふろや露天外気浴が揃う「ウェルビー今池」、丸の内ビジネス街で手頃に天然温泉を堪能できる「ホテルリブマックスPREMIUM名古屋丸の内」を徹底比較。',
  keywords: '名古屋 出張 ホテル,名古屋 サウナ ホテル,ドーミーインPREMIUM名古屋栄,ウェルビー今池,名古屋 温泉 ビジネス,名駅 ひとり旅',
  openGraph: {
    title: '【名古屋出張・サウナ温泉ステイ】名駅・栄アクセス・天然温泉錦鯱の湯・聖地ウェルビー今池！中部ビジネスを制する厳選3宿',
    description: '東海道新幹線「のぞみ」停車・中部国際空港からも直通！栄の繁華街中心で天然温泉大浴場と高温サウナを完備する「ドーミーインPREMIUM名古屋栄」、全国サウナーの聖地でからふろや露天外気浴が揃う「ウェルビー今池」、丸の内ビジネス街で手頃に天然温泉を堪能できる「ホテルリブマックスPREMIUM名古屋丸の内」を徹底比較。',
    url: 'https://croud-travel.pages.dev/nagoya-station-solo-business-onsen-sauna-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【名古屋出張・サウナ温泉ステイ】名駅・栄アクセス・天然温泉錦鯱の湯・聖地ウェルビー今池！中部ビジネスを制する厳選3宿',
    description: '東海道新幹線「のぞみ」停車・中部国際空港からも直通！栄の繁華街中心で天然温泉大浴場と高温サウナを完備する「ドーミーインPREMIUM名古屋栄」、全国サウナーの聖地でからふろや露天外気浴が揃う「ウェルビー今池」、丸の内ビジネス街で手頃に天然温泉を堪能できる「ホテルリブマックスPREMIUM名古屋丸の内」を徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/nagoya-station-solo-business-onsen-sauna-stay',
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
        <span className="text-stone-700 font-medium">愛知・名古屋天然温泉＆極上サウナ出張特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【名古屋出張・サウナ温泉ステイ】名駅・栄アクセス・天然温泉錦鯱の湯・聖地ウェルビー今池！中部ビジネスを制する厳選3宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
          ひとり旅・出張・サウナ＆名湯特集
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          【名古屋出張・サウナ温泉ステイ】名駅・栄アクセス・天然温泉錦鯱の湯・聖地ウェルビー今池！中部ビジネスを制する厳選3宿
        </h1>
        <div className="flex flex-wrap items-center text-xs text-stone-500 gap-4 border-b border-stone-200 pb-4">
          <time dateTime="2026-09-13">2026.09.13 更新</time>
          <span>執筆：クラウドトラベル ひとり旅・出張調査班</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API提携</span>
        </div>

        {/* リード文 */}
        <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm leading-relaxed text-stone-700 space-y-3 text-sm sm:text-base">
          <p className="font-semibold text-stone-900 text-base sm:text-lg">
            日本のものづくり産業を牽引する中枢都市・名古屋。激務を乗り越える活力をチャージする、都心天然温泉と伝説の本格サウナ
          </p>
          <p>
            東京と大阪の中間に位置し、リニア中央新幹線の開業に向けて再開発が進む大都市・名古屋。名駅周辺のオフィス街から栄の繁華街、丸の内の官庁街まで、日々多くのビジネスパーソンが行き交います。
          </p>
          <p>
            サウナ文化が日本一熱い都市とも称される名古屋で、サウナシュラン殿堂入りのサウナ施設から、自家源泉の大浴場で手足を伸ばせる駅近ホテルまで、楽天トラベル公式APIより直接取得した最新データをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 天然温泉　錦鯱の湯　ドーミーインＰＲＥＭＩＵＭ名古屋栄（ドーミーイン・御宿野乃　ホテルズグループ）（★4.43 / 最低目安：8,757円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. サウナ＆カプセルホテル　ウェルビー今池（★4.53 / 最低目安：5,500円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 天然温泉ホテルリブマックスＰＲＥＭＩＵＭ名古屋丸の内（★3.88 / 最低目安：3,188円〜）</a></li>
            <li>
              <a href="#area-tips" className="text-amber-800 hover:underline">
                ▶ 名古屋出張・一人ステイを格上げする現地TIPS
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
              <span className="text-xs text-stone-500 font-medium">栄（愛知）周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              天然温泉　錦鯱の湯　ドーミーインＰＲＥＭＩＵＭ名古屋栄（ドーミーイン・御宿野乃　ホテルズグループ）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.43 <span className="text-xs text-stone-500 font-normal">（クチコミ 1781件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,757円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147710/147710.jpg"
                  alt="天然温泉　錦鯱の湯　ドーミーインＰＲＥＭＩＵＭ名古屋栄（ドーミーイン・御宿野乃　ホテルズグループ） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147710/147710_kan.jpg"
                  alt="天然温泉　錦鯱の湯　ドーミーインＰＲＥＭＩＵＭ名古屋栄（ドーミーイン・御宿野乃　ホテルズグループ） 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>ゴールドアワード2021受賞！天然温泉大浴場(サウナ＆水風呂)が魅力！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">愛知県名古屋市中区錦2-20-1</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">栄駅8番出口徒歩約8分（エスカレーター、エレベーター有り）伏見駅2番出口徒歩約4分（エスカレーター、エレベーター無し）</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147710"
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
              <span className="text-xs text-stone-500 font-medium">今池（愛知）周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              サウナ＆カプセルホテル　ウェルビー今池
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.53 <span className="text-xs text-stone-500 font-normal">（クチコミ 1888件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/17984/17984.jpg"
                  alt="サウナ＆カプセルホテル　ウェルビー今池 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/17984/17984_man.jpg"
                  alt="サウナ＆カプセルホテル　ウェルビー今池 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>サウナ入り放題！外出OK！Wi-Fi＆コンセント完備！無料朝食サービス！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">愛知県名古屋市千種区今池5-25-5</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">JR名古屋駅より地下鉄東山線にて15分　今池駅下車／東名高速道路　名古屋ICより30分　ナゴヤドームまで車で10分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17984"
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
              <span className="text-xs text-stone-500 font-medium">久屋大通周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              天然温泉ホテルリブマックスＰＲＥＭＩＵＭ名古屋丸の内
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 3.88 <span className="text-xs text-stone-500 font-normal">（クチコミ 447件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">3,188円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182569/182569.jpg"
                  alt="天然温泉ホテルリブマックスＰＲＥＭＩＵＭ名古屋丸の内 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182569/182569.jpg"
                  alt="天然温泉ホテルリブマックスＰＲＥＭＩＵＭ名古屋丸の内 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>【2021年NEWOPEN】高温サウナ＆天然温泉大浴場を揃えたプレミアムホテルが名古屋初上陸！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">愛知県名古屋市中区丸の内3-16-20</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">名古屋市営地下鉄桜通線・名城線「久屋大通」駅 徒歩 約3分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D182569"
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
            <span>💡</span> 名古屋出張・一人ステイを格上げする現地TIPS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">名古屋駅地下街（エスカ）の名古屋めしモーニング</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">新幹線改札からすぐのエスカ地下街や駅周辺の喫茶店では、小倉トーストやゆで卵がつく伝統の「モーニング」が充実。朝一番の商談前に優雅な朝食を楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">手羽先・ひつまぶし・味噌カツの一人ディナー</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">「風来坊」や「世界の山ちゃん」の手羽先、矢場とんの味噌カツなど、一人でもカウンターや少人数席で気兼ねなく楽しめる名物グルメ店が名駅・栄のいたるところに揃っています。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">中部サウナの聖地巡礼と「ととのい」体験</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">ウェルビー今池をはじめ、名古屋は独創的でクオリティの高いサウナ施設が集中するサウナ先進都市。仕事終わりのサウナ遠征は出張の最高の息抜きになります。</p>
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
                <span>栄エリアで天然温泉とサウナ、ご当地朝食が楽しめるホテルは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「天然温泉 錦鯱の湯 ドーミーインPREMIUM名古屋栄」は地下鉄伏見駅・栄駅から徒歩圏内。天然温泉大浴場、高温サウナ、ひつまぶし風ご飯などの名古屋めし朝食が好評です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>サウナ好きの間で有名な「ウェルビー今池」の特徴は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「サウナ＆カプセルホテル ウェルビー今池」は日本サウナ界のレジェンド。畳敷きの露天エリアや一人専用の和風サウナ「からふろ」、冷水プールなど極上の設備が揃っています。
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
