import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/miyajima-solo-retreat-itsukushima-seaside-stay/" },
  title: '宮島ひとり旅・瀬戸内海絶景おこもり：厳島神社大鳥居ビュー・宮島潮湯温泉・名物穴子飯！神の島で心洗われる厳選3宿',
  description: '広島駅からJRとフェリーで約45分！大鳥居を望む展望ラウンジと島内唯一の潮湯温泉が自慢の「錦水館」、創業160年超・もみじ谷の深緑に佇む日本屈指の名旅館「みやじまの宿 岩惣」、フェリー乗り場すぐでコスパ抜群の「宮島コーラルホテル」を徹底比較。',
  keywords: '宮島 一人旅 宿,宮島 温泉 ひとり,宮島 錦水館 一人,みやじまの宿 岩惣,宮島コーラルホテル,厳島神社 穴子飯 牡蠣',
  openGraph: {
    title: '宮島ひとり旅・瀬戸内海絶景おこもり：厳島神社大鳥居ビュー・宮島潮湯温泉・名物穴子飯！神の島で心洗われる厳選3宿',
    description: '広島駅からJRとフェリーで約45分！大鳥居を望む展望ラウンジと島内唯一の潮湯温泉が自慢の「錦水館」、創業160年超・もみじ谷の深緑に佇む日本屈指の名旅館「みやじまの宿 岩惣」、フェリー乗り場すぐでコスパ抜群の「宮島コーラルホテル」を徹底比較。',
    url: 'https://croud-travel.pages.dev/miyajima-solo-retreat-itsukushima-seaside-stay/',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '宮島ひとり旅・瀬戸内海絶景おこもり：厳島神社大鳥居ビュー・宮島潮湯温泉・名物穴子飯！神の島で心洗われる厳選3宿',
    description: '広島駅からJRとフェリーで約45分！大鳥居を望む展望ラウンジと島内唯一の潮湯温泉が自慢の「錦水館」、創業160年超・もみじ谷の深緑に佇む日本屈指の名旅館「みやじまの宿 岩惣」、フェリー乗り場すぐでコスパ抜群の「宮島コーラルホテル」を徹底比較。',
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
    datePublished: '2026-10-18T16:30:00+09:00',
    dateModified: '2026-10-19T16:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/miyajima-solo-retreat-itsukushima-seaside-stay/',
  };


  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"宮島島内で一人でも天然温泉に泊まれるおすすめ旅館は？","acceptedAnswer":{"@type":"Answer","text":"「宮島潮湯温泉 錦水館」は厳島神社まで徒歩約3分。宮島で唯一の天然温泉（自家源泉の潮湯）と、宿泊者専用のブック＆カフェラウンジを完備しています。"}},{"@type":"Question","name":"宮島口側（フェリー乗り場前）で便利なホテルはどこ？","acceptedAnswer":{"@type":"Answer","text":"「宮島コーラルホテル」はJR宮島口駅・フェリー乗り場すぐ。出張や宮島観光の前後泊にリーズナブルで非常に便利です。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features/"},{"@type":"ListItem","position":3,"name":"【宮島ひとり旅・瀬戸内海絶景おこもり】厳島神社大鳥居ビュー・宮島潮湯温泉・名物穴子飯！神の島で心洗われる厳選3宿","item":"https://croud-travel.pages.dev/miyajima-solo-retreat-itsukushima-seaside-stay/"}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium">広島・宮島厳島神社＆瀬戸内海絶景おこもり特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【宮島ひとり旅・瀬戸内海絶景おこもり】厳島神社大鳥居ビュー・宮島潮湯温泉・名物穴子飯！神の島で心洗われる厳選3宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
          ひとり旅・出張・サウナ＆名湯特集
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">「宮島ひとり旅・瀬戸内海絶景おこもり」厳島神社大鳥居ビュー・宮島潮湯温泉・名物穴子飯！神の島で心洗われる厳選3宿</h1>
        <div className="flex flex-wrap items-center text-xs text-stone-500 gap-4 border-b border-stone-200 pb-4">
          <time dateTime="">2026.09.12 更新</time>
          <span>執筆：クラウドトラベル ひとり旅・出張調査班</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API提携</span>
        </div>

        {/* リード文 */}
        <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm leading-relaxed text-stone-700 space-y-3 text-sm sm:text-base">
          <p className="font-semibold text-stone-900 text-base sm:text-lg">
            潮の満ち引きと社殿の朱が織りなす神秘。観光客が去った夜の島で、静けさと祈りに浸る究極のソロリトリート
          </p>
          <p>
            日本三景のひとつであり、世界遺産・厳島神社を抱く安芸の宮島。日中は多くの参拝客で賑わうこの島ですが、夕方に最後の観光客が島を後にした瞬間、静謐な祈りの島本来の姿が現れます。
          </p>
          <p>
            海上に浮かぶ大鳥居のライトアップを眺めながら島内唯一の温泉に身を浸す贅沢から、手つかずの原生林が息づく紅葉谷の老舗旅館での宿泊まで、楽天トラベル公式APIより取得した最新の宿泊データをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 宮島潮湯温泉　錦水館（★4.66 / 最低目安：29,700円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. みやじまの宿　岩惣（★4.45 / 最低目安：29,700円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 宮島コーラルホテル（★4.33 / 最低目安：7,150円〜）</a></li>
            <li>
              <a href="#area-tips" className="text-amber-800 hover:underline">
                ▶ 宮島ひとり旅・島内宿泊を極める散策TIPS
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
              <span className="text-xs text-stone-500 font-medium">宮島口周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              宮島潮湯温泉　錦水館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.66 <span className="text-xs text-stone-500 font-normal">（クチコミ 1053件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">29,700円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/6271/6271.jpg"
                  alt="宮島潮湯温泉　錦水館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/6271/6271_room.jpg"
                  alt="宮島潮湯温泉　錦水館 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>★2025年、温泉付スイートOPEN！●ルーフトップテラス・半露天風呂付客室・お部屋食プランも人気</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">広島県廿日市市宮島町1133</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">宮島口駅よりフェリーで約10分。宮島桟橋より徒歩5分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6271%2F6271.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
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
              <span className="text-xs text-stone-500 font-medium">周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              みやじまの宿　岩惣
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.45 <span className="text-xs text-stone-500 font-normal">（クチコミ 156件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">29,700円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/145390/145390.jpg"
                  alt="みやじまの宿　岩惣 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/145390/145390_kan.jpg"
                  alt="みやじまの宿　岩惣 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>創業以来160年もの歴史と伝統を誇る、多くの著名人に愛された老舗旅館</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>自慢の温泉とお料理を心ゆくまで</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">広島県廿日市市宮島町もみじ谷</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">宮島桟橋より徒歩にて約１５分。無料送迎有り（要ご乗船時連絡）</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145390%2F145390.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
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
              <span className="text-xs text-stone-500 font-medium">宮島口周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              宮島コーラルホテル
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.33 <span className="text-xs text-stone-500 font-normal">（クチコミ 2012件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,150円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/17769/17769.jpg"
                  alt="宮島コーラルホテル 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/17769/17769_sgl.jpg"
                  alt="宮島コーラルホテル 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>宮島フェリー乗り場まで徒歩約30秒！JR宮島口駅から徒歩５分！無料駐車場完備</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">広島県廿日市市宮島口1-9-8</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">ＪＲ宮島口駅下車　徒歩5分・広島電鉄宮島口駅下車　徒歩３分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17769%2F17769.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
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
            <span>💡</span> 宮島ひとり旅・島内宿泊を極める散策TIPS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">満潮と干潮で表情を変える「大鳥居」の歩き方</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">満潮時には海に浮かび、干潮時には大鳥居の真下まで歩いて触れることができます。島内に宿泊することで、潮の満ち引き両方の絶景を余すことなく体験できます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">宮島名物「あなごめし」と揚げもみじの食べ歩き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">特製タレで香ばしく焼き上げた穴子が敷き詰められた名物あなごめし。散策の合間にはサクサクの「揚げもみじ」や焼き牡蠣をアツアツで頬張るのが醍醐味です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">夜の厳島神社ライトアップと早朝の清々しい参拝</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">夜間にライトアップされる社殿と大鳥居は幻想的な美しさ。さらに朝6時半から開門される早朝参拝は、静寂の中で波の音だけが響く神聖な時間を一人占めできます。</p>
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
                <span>宮島島内で一人でも天然温泉に泊まれるおすすめ旅館は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「宮島潮湯温泉 錦水館」は厳島神社まで徒歩約3分。宮島で唯一の天然温泉（自家源泉の潮湯）と、宿泊者専用のブック＆カフェラウンジを完備しています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>宮島口側（フェリー乗り場前）で便利なホテルはどこ？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「宮島コーラルホテル」はJR宮島口駅・フェリー乗り場すぐ。出張や宮島観光の前後泊にリーズナブルで非常に便利です。
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
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-amber-900 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-amber-50 transition transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            楽天トラベルで宿泊プラン・空室を探す
          </a>
        </div>
      </section>
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】宮島潮湯温泉 錦水館を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 宮島口駅よりアクセス。宮島口駅よりフェリーで約10分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「宮島潮湯温泉 錦水館」にチェックイン。★2025年、温泉付スイートOPEN！●ルーフトップテラス・半露天風呂付客室・お部屋食プランも人気などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「宮島潮湯温泉 錦水館」の湯処へ。★2025年、温泉付スイートOPEN！●ルーフトップテラス・半露天風呂とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「宮島潮湯温泉 錦水館」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「宮島潮湯温泉 錦水館」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「宮島潮湯温泉 錦水館」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「みやじまの宿 岩惣」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <a href="/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">富山氷見温泉郷で過ごす冬の旅（11・12月）！寒ブリづくし会席！名宿5選</span>
            </a>
            <a href="/firefly-squid-toyama-spring-gourmet-onsen-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">2026年：富山湾の青い神秘！春のホタルイカ＆富山湾の宝石・白エビ尽くし会席の温泉宿5選</span>
            </a>
            <a href="/furusato-tax-unazuki-kurobe-gorge-autumn-leaves-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">黒部峡谷トロッコ電車の紅葉パノラマ＆名湯・宇奈月温泉！峡谷露天風呂宿×ふるさと納税厳選ガイド富山</span>
            </a>
            <a href="/toyama-station-solo-business-onsen-sauna-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">富山駅前出張・天然温泉サウナ：立山連峰ビュー・天然温泉剱の湯・富山湾鮨＆白えび！北陸屈指の産業拠点を制する厳選3宿</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/wakayama/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                和歌山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ehime/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                愛媛県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagawa/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                香川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/toyama/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                富山県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="miyajima-solo-retreat-itsukushima-seaside-stay" />
</div>
        </section>

      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 宮島ひとり旅・瀬戸内海絶景おこもり：厳島神社大鳥居ビュー・宮島潮湯温泉・名物穴子飯！神の島で心洗われる厳選3宿：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「宮島ひとり旅・瀬戸内海絶景おこもり：厳島神社大鳥居ビュー・宮島潮湯温泉・名物穴子飯！神の島で心洗われる厳選3宿」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 宮島潮湯温泉　錦水館</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島町1133</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">有り：4台。島内は交通規制がございますので、できるだけ宮島口の有料駐車場をご利用下さい。</td>
                <td className="p-3 font-bold text-amber-600">★4.68（1062件）</td>
                <td className="p-3 font-bold text-rose-600">¥36,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6271%2F6271.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. みやじまの宿　岩惣</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島町もみじ谷</td>
                <td className="p-3 text-stone-600">宮島桟橋より徒歩にて約１５分。無料送迎有り（要ご乗船時連絡）</td>
                <td className="p-3 text-stone-600">有り　５台　無料　要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.48（158件）</td>
                <td className="p-3 font-bold text-rose-600">¥31,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145390%2F145390.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 宮島コーラルホテル</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島口1-9-8</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">有り　55台　到着日の15時〜出立日の正午まで無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.28（2049件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17769%2F17769.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮島潮湯温泉　錦水館</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやじましおゆおんせん　きんすいかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥36,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6271/6271_room.jpg" alt="宮島潮湯温泉　錦水館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★2025年、温泉付スイートOPEN！●ルーフトップテラス・半露天風呂付客室・お部屋食プランも人気</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島町1133 ／ 最寄り駅：宮島口 ／ 交通案内：宮島口駅よりフェリーで約10分。宮島桟橋より徒歩5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り：4台。島内は交通規制がございますので、できるだけ宮島口の有料駐車場をご利用下さい。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.75 ／ 立地 ★4.77 ／ 部屋 ★4.63 ／ 設備 ★4.68 ／ 風呂 ★4.43 ／ 食事 ★4.67</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お食事に大満足!部屋から厳島神社の大鳥居が見えるので、雰囲気はバッチリ!屋上からのサンセットも素敵でした。中でもお食事が美味しくて、牡蠣の西京味噌焼きは絶品。宮島島で食べ歩きしすぎない…　2026-10-05 07:08:32投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">みやじまの宿　岩惣</h3>
                  <span className="text-xs text-stone-400 ml-2">（いわそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥31,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/145390/145390_kan.jpg" alt="みやじまの宿　岩惣 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>創業以来160年もの歴史と伝統を誇る、多くの著名人に愛された老舗旅館。自慢の温泉とお料理を心ゆくまで</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島町もみじ谷 ／ 最寄り駅：主要駅 ／ 交通案内：宮島桟橋より徒歩にて約１５分。無料送迎有り（要ご乗船時連絡）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５台　無料　要予約</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.78 ／ 立地 ★4.65 ／ 部屋 ★4.57 ／ 設備 ★4.43 ／ 風呂 ★4.7 ／ 食事 ★4.82</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/145390?reviewId=33123479563978　2026-09-29 16:08:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮島コーラルホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやじま　こーらるほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17769/17769_sgl.jpg" alt="宮島コーラルホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宮島フェリー乗り場まで徒歩約30秒！JR宮島口駅から徒歩５分！無料駐車場完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島口1-9-8 ／ 最寄り駅：宮島口 ／ 交通案内：ＪＲ宮島口駅下車　徒歩5分・広島電鉄宮島口駅下車　徒歩３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　55台　到着日の15時〜出立日の正午まで無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.26 ／ 立地 ★4.4 ／ 部屋 ★4.21 ／ 設備 ★4.12 ／ 風呂 ★4.06 ／ 食事 ★4.29</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ひとり旅で利用しました。2日泊まればよかったと思うくらい、宮島までのフェリーは近いし、朝ごはんも美味しく、スタッフの方も親切でした!クチコミの詳細はこちらから　https://review.tra…　2026-10-08 22:36:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！富山県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、富山県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Mount_Tate_viewed_from_Midorigaike.jpg/1280px-Mount_Tate_viewed_from_Midorigaike.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="立山黒部アルペンルート（雪の大谷）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">立山黒部アルペンルート（雪の大谷）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">標高3,000m級の立山連峰を貫く世界有数の山岳観光ルート。春には積雪を吹き破って開通する高さ20mに迫る巨大な「雪の大谷」の壁の中を歩けます。 立山（たてやま）は、富山県の飛騨山脈（北アルプス）北部にある山。中部山岳国立公園に属する。雄山（おやま、標高3,003メートル）、大汝山（おおなんじやま、3,015メートル）、富士ノ折立（ふじのおりたて、2,999メートル）の三つの峰からなる。富山県の最高峰であり、日本海に面する道府県の最高峰である。また、日本の3,000メートル級の山としては最北端に位置す…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">黒部ダム</h3>
                <p className="text-xs text-stone-600 leading-relaxed">高さ186mを誇る日本一のアーチ式コンクリートダム。毎秒10トン以上の水が激しく吹き出す毎夏の観光放水は息をのむ大迫力です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">雨晴海岸（あまはらしかいがん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富山湾越しに標高3,000m級の立山連峰を望む奇跡の絶景スポット。女岩と冠雪した立山連峰のシルエットは世界でも類を見ない美しさです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">五箇山 合掌造り集落</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界文化遺産に登録されている相倉・菅沼の合掌造り集落。急傾斜の茅葺き屋根と昔ながらの日本の原風景が山深い静寂の中にひっそりと息づいています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 富山県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 富山県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
