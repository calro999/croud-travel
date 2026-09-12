import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【小樽運河ひとり旅・レトロ温泉おこもり】ガス灯揺れる石造り倉庫街・自家源泉の湯・極上握り寿司！歴史と硝子の街に癒やされる厳選3宿',
  description: '新千歳空港から快速エアポートで直通約75分！小樽駅徒歩約1分で自家源泉と海鮮丼朝食が自慢の「ドーミーインPREMIUM小樽」、小樽運河の目の前に佇みノスタルジックな明治の風情が薫る「運河の宿 おたる ふる川」、大正ロマン漂う運河沿いの名宿「ホテルソニア小樽」を楽天API最新データに基づき徹底比較。',
  keywords: '小樽 一人旅 ホテル,小樽運河 温泉 宿,ドーミーインPREMIUM小樽,運河の宿おたるふる川,小樽 寿司 ひとり旅,小樽 レトロ 宿',
  openGraph: {
    title: '【小樽運河ひとり旅・レトロ温泉おこもり】ガス灯揺れる石造り倉庫街・自家源泉の湯・極上握り寿司！歴史と硝子の街に癒やされる厳選3宿',
    description: '新千歳空港から快速エアポートで直通約75分！小樽駅徒歩約1分で自家源泉と海鮮丼朝食が自慢の「ドーミーインPREMIUM小樽」、小樽運河の目の前に佇みノスタルジックな明治の風情が薫る「運河の宿 おたる ふる川」、大正ロマン漂う運河沿いの名宿「ホテルソニア小樽」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/otaru-canal-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【小樽運河ひとり旅・レトロ温泉おこもり】ガス灯揺れる石造り倉庫街・自家源泉の湯・極上握り寿司！歴史と硝子の街に癒やされる厳選3宿',
    description: '新千歳空港から快速エアポートで直通約75分！小樽駅徒歩約1分で自家源泉と海鮮丼朝食が自慢の「ドーミーインPREMIUM小樽」、小樽運河の目の前に佇みノスタルジックな明治の風情が薫る「運河の宿 おたる ふる川」、大正ロマン漂う運河沿いの名宿「ホテルソニア小樽」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/otaru-canal-solo-retreat-onsen-stay',
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
        <span className="text-stone-700 font-medium">北海道・小樽運河レトロおこもり温泉特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【小樽運河ひとり旅・レトロ温泉おこもり】ガス灯揺れる石造り倉庫街・自家源泉の湯・極上握り寿司！歴史と硝子の街に癒やされる厳選3宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
          ひとり旅・出張・サウナ＆名湯特集
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          【小樽運河ひとり旅・レトロ温泉おこもり】ガス灯揺れる石造り倉庫街・自家源泉の湯・極上握り寿司！歴史と硝子の街に癒やされる厳選3宿
        </h1>
        <div className="flex flex-wrap items-center text-xs text-stone-500 gap-4 border-b border-stone-200 pb-4">
          <time dateTime="2026-09-13">2026.09.13 更新</time>
          <span>執筆：クラウドトラベル ひとり旅・出張調査班</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API提携</span>
        </div>

        {/* リード文 */}
        <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm leading-relaxed text-stone-700 space-y-3 text-sm sm:text-base">
          <p className="font-semibold text-stone-900 text-base sm:text-lg">
            石造り倉庫に灯るガス灯のぬくもりと、静かな運河の水鏡。歴史の薫る港町で自家源泉と旬の海鮮を味わう贅沢なひとり時間
          </p>
          <p>
            かつて「北のウォール街」として栄えた小樽。運河沿いに立ち並ぶ重厚な石造倉庫群、オルゴールの優しい音色、そして北の荒波が育んだ新鮮なウニやイクラ、ニシンなどの海の幸。ひとり気ままに歩けば、街のいたるところでノスタルジックな物語に出会えます。
          </p>
          <p>
            運河を目の前に望む明治の商家風老舗宿から、自家源泉の大浴場と朝食バイキングで海鮮のっけ丼を堪能できる駅前宿まで、楽天トラベル公式APIより直接取得した客室・温泉・最新料金データをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 天然温泉　灯の湯　ドーミーインＰＲＥＭＩＵＭ小樽（２０２６年８月１日リニューアルオープン）（★4.32 / 最低目安：7,232円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 朝里川温泉　小樽朝里クラッセホテル（★4.18 / 最低目安：5,500円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 運河の宿　おたる　ふる川（★4.76 / 最低目安：12,000円〜）</a></li>
            <li>
              <a href="#area-tips" className="text-amber-800 hover:underline">
                ▶ 小樽運河・一人旅をより深く味わう現地TIPS
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
              <span className="text-xs text-stone-500 font-medium">小樽周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              天然温泉　灯の湯　ドーミーインＰＲＥＭＩＵＭ小樽（２０２６年８月１日リニューアルオープン）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.32 <span className="text-xs text-stone-500 font-normal">（クチコミ 3986件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,232円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/76876/76876.jpg"
                  alt="天然温泉　灯の湯　ドーミーインＰＲＥＭＩＵＭ小樽（２０２６年８月１日リニューアルオープン） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/76876/76876_kya.jpg"
                  alt="天然温泉　灯の湯　ドーミーインＰＲＥＭＩＵＭ小樽（２０２６年８月１日リニューアルオープン） 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>☆朝食のおいしいホテルランキング 4年連続受賞☆大正ロマンを奏でるホテル★天然温泉大浴場完備</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">北海道小樽市稲穂3丁目9-1</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">ＪＲ小樽駅より徒歩にて1分◆小樽ICより約７分◆小樽運河まで徒歩８分◆寿司屋通まで徒歩１０分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D76876"
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
              <span className="text-xs text-stone-500 font-medium">小樽築港周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              朝里川温泉　小樽朝里クラッセホテル
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.18 <span className="text-xs text-stone-500 font-normal">（クチコミ 1255件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5490/5490.jpg"
                  alt="朝里川温泉　小樽朝里クラッセホテル 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5490/5490_r1.jpg"
                  alt="朝里川温泉　小樽朝里クラッセホテル 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>小樽市内唯一の温泉付リゾートホテル</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>大浴場はもちろんスポーツ施設も充実</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>小樽・札幌への観光も便利</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">北海道小樽市朝里川温泉2-676-1</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">新千歳空港からＪＲで小樽築港駅、駅よりバスで２０分。朝里ＩＣより車で１０分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5490"
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
              <span className="text-xs text-stone-500 font-medium">小樽周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              運河の宿　おたる　ふる川
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.76 <span className="text-xs text-stone-500 font-normal">（クチコミ 1104件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">12,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1734/1734.jpg"
                  alt="運河の宿　おたる　ふる川 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1734/1734_twin.jpg"
                  alt="運河の宿　おたる　ふる川 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>天然温泉『小樽運河前の温泉宿』　明治時代の商家を再現</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>おもてなし溢れる空間で寛ぎの一日を</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">北海道小樽市色内1-2-15</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">ＪＲ小樽駅から徒歩約１３分（車で５分）</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1734"
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
            <span>💡</span> 小樽運河・一人旅をより深く味わう現地TIPS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">夕暮れから夜の小樽運河「散策路のガス灯点灯」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">夕暮れ時に63基のガス灯が点灯すると、運河の水面がオレンジ色に輝き幻想的な雰囲気に。昼間よりも観光客が減り、静かな波音を聞きながら物思いに耽る散策が楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">寿司屋通りで味わう「小樽前浜の極上にぎり」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">市内中心部に100軒以上の寿司店が軒を連ねる小樽。名店揃いの寿司屋通りや三角市場で、ひとりでもカウンターで気兼ねなく職人技が光る一貫を味わえます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">北一硝子三号館「北一ホール」の石油ランプカフェ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">167灯の石油ランプだけで照らされた幻想的な木造倉庫カフェ。毎朝開店時に手作業で火を灯す点灯作業も見応えがあり、静寂と灯りに包まれて珈琲を味わえます。</p>
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
                <span>小樽駅周辺で天然温泉とサウナ、豪華な朝食がある宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「天然温泉 灯の湯 ドーミーインPREMIUM小樽」は小樽駅の目の前。自家源泉の大浴場とサウナ、朝食の海鮮勝手丼や夜鳴きそばサービスなど一人旅の充実度が抜群です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>小樽運河の目の前で最も風情あるおこもり宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「運河の宿 おたる ふる川」は運河の目の前に建ち、明治の商家をイメージした木造の温もりとステンドグラス、自家源泉の露天風呂が揃う大人の隠れ家宿です。
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
