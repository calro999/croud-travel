import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【京都四条烏丸ひとり旅・大浴場おこもり】京町家の風情・ラウンジ無料ワイン・錦市場！古都の中心で癒やされる大人の厳選3宿',
  description: '京都駅から地下鉄烏丸線でわずか約3分！ラウンジでの無料ワイン＆お茶漬けバイキングと癒やしの大浴場が自慢の「ホテルインターゲート京都 四条新町」、四条烏丸交差点すぐで観光・ビジネスの機動力抜群な「ダイワロイネットホテル京都四条烏丸」、五条通沿いで静かな大浴場と上質空間を誇る「京王プレリアホテル京都烏丸五条」を徹底比較。',
  keywords: '京都 一人旅 ホテル,四条烏丸 ホテル 大浴場,ホテルインターゲート京都四条新町,ダイワロイネット京都四条烏丸,京王プレリアホテル京都烏丸五条,京都 おこもり 宿',
  openGraph: {
    title: '【京都四条烏丸ひとり旅・大浴場おこもり】京町家の風情・ラウンジ無料ワイン・錦市場！古都の中心で癒やされる大人の厳選3宿',
    description: '京都駅から地下鉄烏丸線でわずか約3分！ラウンジでの無料ワイン＆お茶漬けバイキングと癒やしの大浴場が自慢の「ホテルインターゲート京都 四条新町」、四条烏丸交差点すぐで観光・ビジネスの機動力抜群な「ダイワロイネットホテル京都四条烏丸」、五条通沿いで静かな大浴場と上質空間を誇る「京王プレリアホテル京都烏丸五条」を徹底比較。',
    url: 'https://croud-travel.pages.dev/kyoto-shijo-karasuma-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【京都四条烏丸ひとり旅・大浴場おこもり】京町家の風情・ラウンジ無料ワイン・錦市場！古都の中心で癒やされる大人の厳選3宿',
    description: '京都駅から地下鉄烏丸線でわずか約3分！ラウンジでの無料ワイン＆お茶漬けバイキングと癒やしの大浴場が自慢の「ホテルインターゲート京都 四条新町」、四条烏丸交差点すぐで観光・ビジネスの機動力抜群な「ダイワロイネットホテル京都四条烏丸」、五条通沿いで静かな大浴場と上質空間を誇る「京王プレリアホテル京都烏丸五条」を徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/kyoto-shijo-karasuma-solo-retreat-onsen-stay',
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
        <span className="text-stone-700 font-medium">京都・四条烏丸大浴場＆古都おこもりひとり旅特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【京都四条烏丸ひとり旅・大浴場おこもり】京町家の風情・ラウンジ無料ワイン・錦市場！古都の中心で癒やされる大人の厳選3宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
          ひとり旅・出張・サウナ＆名湯特集
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          【京都四条烏丸ひとり旅・大浴場おこもり】京町家の風情・ラウンジ無料ワイン・錦市場！古都の中心で癒やされる大人の厳選3宿
        </h1>
        <div className="flex flex-wrap items-center text-xs text-stone-500 gap-4 border-b border-stone-200 pb-4">
          <time dateTime="2026-09-13">2026.09.13 更新</time>
          <span>執筆：クラウドトラベル ひとり旅・出張調査班</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API提携</span>
        </div>

        {/* リード文 */}
        <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm leading-relaxed text-stone-700 space-y-3 text-sm sm:text-base">
          <p className="font-semibold text-stone-900 text-base sm:text-lg">
            碁盤の目の路地に佇む京町家と、祇園祭の伝統が息づく街。大浴場で手足を伸ばし、ラウンジサービスと京の美味に心満たされるひととき
          </p>
          <p>
            伝統とモダンが美しく調和する京都の中心街・四条烏丸。錦市場や先斗町、祇園へも徒歩圏内でありながら、一本路地に入れば静謐な京都の日常が広がる、大人の一人旅に最もおすすめしたいエリアです。
          </p>
          <p>
            時間帯ごとにワインや焼きたてパン、お茶漬けが無料で振る舞われるハイクオリティラウンジ付きホテルから、旅の疲れを洗い流す大浴場完備のシティホテルまで、楽天トラベル公式APIより直接取得した最新データをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. ホテルインターゲート京都　四条新町（★4.52 / 最低目安：6,896円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. ダイワロイネットホテル京都四条烏丸（★4.39 / 最低目安：4,725円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 京王プレリアホテル京都烏丸五条（★4.38 / 最低目安：3,600円〜）</a></li>
            <li>
              <a href="#area-tips" className="text-amber-800 hover:underline">
                ▶ 京都四条烏丸ひとり旅を満喫する現地TIPS
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
              <span className="text-xs text-stone-500 font-medium">京都府 京都市中京区新町通錦周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              ホテルインターゲート京都　四条新町
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.52 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,896円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/165176/165176.jpg"
                  alt="ホテルインターゲート京都　四条新町 外観・館内"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>ハッピーアワーからぶぶ漬けバイキングまで『無料ラウンジサービス』付き  | 手足伸ばせる大浴場 完備</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">京都府京都市中京区新町通錦小路上る百足屋町387</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">阪急京都線 烏丸駅・ 地下鉄烏丸線 四条駅より徒歩にて約５分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165176%2F165176.html"
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
              <span className="text-xs text-stone-500 font-medium">京都府 京都市下京区烏丸通仏周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              ダイワロイネットホテル京都四条烏丸
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.39 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">4,725円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/136213/136213.jpg"
                  alt="ダイワロイネットホテル京都四条烏丸 外観・館内"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>2026年3月14日リニューアルオープン</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>京都市営地下鉄「四条駅」5番出口より徒歩約1分</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">京都府京都市下京区烏丸通仏光寺下る大政所町678</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">京都市営地下鉄・烏丸線「京都駅」より（約3分）「四条駅」下車、５番出口より徒歩約１分。阪急電鉄「烏丸駅」より徒歩約４分。</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F136213%2F136213.html"
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
              <span className="text-xs text-stone-500 font-medium">京都府 京都市下京区烏丸通松周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              京王プレリアホテル京都烏丸五条
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.38 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">3,600円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/167573/167573.jpg"
                  alt="京王プレリアホテル京都烏丸五条 外観・館内"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>■2018年開業　■大浴場あり　■四条烏丸エリア徒歩圏内　■朝食は「イカリヤ」の洋食ブッフェ</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">京都府京都市下京区烏丸通松原下る五条烏丸町396</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">地下鉄「五条駅」より徒歩4分　／　地下鉄「四条駅」より徒歩5分　／　阪急京都線「烏丸駅」より徒歩7分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167573%2F167573.html"
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
            <span>💡</span> 京都四条烏丸ひとり旅を満喫する現地TIPS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「京の台所」錦市場での一人食べ歩きと買い出し</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">全長390mに130軒余りの商店が並ぶ錦市場。湯葉コロッケやハモの天ぷら、京漬物など、老舗の味をテイクアウトしてホテルで楽しむのも贅沢な過ごし方です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">新町通・室町通の京町家カフェと路地裏散歩</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">ホテルが位置する新町通周辺には、築100年を超える町家を改装した珈琲店やビストロが点在。静かな町並みを眺めながら一人読書に耽る時間が心地よいです。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">四条烏丸から各方面への圧倒的なバス・地下鉄網</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">地下鉄烏丸線で京都駅へ3分、阪急京都線で嵐山や大阪梅田へ直通、市バスで金閣寺・清水寺・銀閣寺のいずれへもダイレクトにアクセスできます。</p>
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
                <span>四条烏丸周辺でラウンジサービスや大浴場が最も充実している宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「ホテルインターゲート京都 四条新町」は地下大浴場を完備し、宿泊者専用ラウンジで朝のコーヒーから夕方のハッピーアワー（ワイン・おつまみ）、夜の夜食お茶漬けまで無料で楽しめます。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>京都駅からのアクセスが良く、ビジネスにも観光にも便利なホテルは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「ダイワロイネットホテル京都四条烏丸」は地下鉄四条駅・阪急烏丸駅から徒歩約1〜2分。全室に加湿空気清浄機やワイドデスクを備え、一人旅に最適です。
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
                href="/prefectures/fukuoka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福岡県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nagasaki"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長崎県の宿・温泉
              </Link>
              <Link
                href="/prefectures/mie"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nara"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                奈良県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
