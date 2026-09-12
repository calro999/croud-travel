import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【浅草ひとり旅・下町温泉おこもり】隅田川スカイツリー夜景・天然温泉展望露天・老舗江戸前グルメ！歴史と現代が交差する厳選3宿',
  description: '羽田・成田空港や都内各所から直通アクセス！隅田川と東京スカイツリーの絶景を望む展望足湯＆露天風呂が名物の「ドーミーインEXPRESS浅草」、銀座線田原町駅徒歩2分でシモンズベッド快眠を約束する「ホテルサンルート浅草」、最上階に展望大浴殿を完備した「アパホテル〈浅草 蔵前〉」を楽天APIデータに基づき徹底比較。',
  keywords: '浅草 一人旅 ホテル,浅草 温泉 宿,ドーミーインEXPRESS浅草,ホテルサンルート浅草,浅草 ひとり 大浴場,スカイツリー 夜景 ホテル',
  openGraph: {
    title: '【浅草ひとり旅・下町温泉おこもり】隅田川スカイツリー夜景・天然温泉展望露天・老舗江戸前グルメ！歴史と現代が交差する厳選3宿',
    description: '羽田・成田空港や都内各所から直通アクセス！隅田川と東京スカイツリーの絶景を望む展望足湯＆露天風呂が名物の「ドーミーインEXPRESS浅草」、銀座線田原町駅徒歩2分でシモンズベッド快眠を約束する「ホテルサンルート浅草」、最上階に展望大浴殿を完備した「アパホテル〈浅草 蔵前〉」を楽天APIデータに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/tokyo-asakusa-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【浅草ひとり旅・下町温泉おこもり】隅田川スカイツリー夜景・天然温泉展望露天・老舗江戸前グルメ！歴史と現代が交差する厳選3宿',
    description: '羽田・成田空港や都内各所から直通アクセス！隅田川と東京スカイツリーの絶景を望む展望足湯＆露天風呂が名物の「ドーミーインEXPRESS浅草」、銀座線田原町駅徒歩2分でシモンズベッド快眠を約束する「ホテルサンルート浅草」、最上階に展望大浴殿を完備した「アパホテル〈浅草 蔵前〉」を楽天APIデータに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/tokyo-asakusa-solo-retreat-onsen-stay',
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
        <span className="text-stone-700 font-medium">東京・浅草下町おこもり＆天然温泉特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【浅草ひとり旅・下町温泉おこもり】隅田川スカイツリー夜景・天然温泉展望露天・老舗江戸前グルメ！歴史と現代が交差する厳選3宿</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="inline-block bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
          ひとり旅・出張・サウナ＆名湯特集
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
          【浅草ひとり旅・下町温泉おこもり】隅田川スカイツリー夜景・天然温泉展望露天・老舗江戸前グルメ！歴史と現代が交差する厳選3宿
        </h1>
        <div className="flex flex-wrap items-center text-xs text-stone-500 gap-4 border-b border-stone-200 pb-4">
          <time dateTime="2026-09-13">2026.09.13 更新</time>
          <span>執筆：クラウドトラベル ひとり旅・出張調査班</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API提携</span>
        </div>

        {/* リード文 */}
        <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm leading-relaxed text-stone-700 space-y-3 text-sm sm:text-base">
          <p className="font-semibold text-stone-900 text-base sm:text-lg">
            雷門の提灯と仲見世の賑わい、そして隅田川の夜風。下町の粋と最新の東京スカイツリー夜景に酔いしれるソロステイ
          </p>
          <p>
            浅草寺の門前町として古くから栄え、落語や歌舞伎、江戸前グルメなど日本独自の粋な文化が今なお息づく浅草。夕暮れとともに仲見世のシャッターアートが灯り、ライトアップされた浅草寺五重塔や東京スカイツリーが静かに夜空を彩ります。
          </p>
          <p>
            客室や展望大浴場から隅田川の水鏡とスカイツリーを独り占めできるホテルから、リーズナブルに快適なデスクワークと快眠を叶える下町の拠点まで、楽天トラベル公式APIより直接取得した最新データをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 展望大浴場あさひ湯　ドーミーインＥＸＰＲＥＳＳ浅草（ドーミーイン・御宿野乃　ホテルズグループ）（★4.16 / 最低目安：6,667円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. ホテルサンルート浅草（★4.38 / 最低目安：3,850円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. アパホテル〈浅草　蔵前〉（★4.11 / 最低目安：3,762円〜）</a></li>
            <li>
              <a href="#area-tips" className="text-amber-800 hover:underline">
                ▶ 浅草下町ひとり旅・おこもりを満喫する現地TIPS
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
              <span className="text-xs text-stone-500 font-medium">浅草周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              展望大浴場あさひ湯　ドーミーインＥＸＰＲＥＳＳ浅草（ドーミーイン・御宿野乃　ホテルズグループ）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.16 <span className="text-xs text-stone-500 font-normal">（クチコミ 3951件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,667円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/819/819.jpg"
                  alt="展望大浴場あさひ湯　ドーミーインＥＸＰＲＥＳＳ浅草（ドーミーイン・御宿野乃　ホテルズグループ） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/819/819_sgl.jpg"
                  alt="展望大浴場あさひ湯　ドーミーインＥＸＰＲＥＳＳ浅草（ドーミーイン・御宿野乃　ホテルズグループ） 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>全客室Wｉｆｉ可能！　川面を一望の天望露天風呂！　お仕事に観光に、どちらにも最適のホテルです</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">東京都台東区花川戸1-3-4</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">★東武線・地下鉄銀座線「浅草駅」5番出口より徒歩1分、都営浅草線「浅草駅」A5番出口から徒歩5分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D819"
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
              <span className="text-xs text-stone-500 font-medium">田原町（東京）周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              ホテルサンルート浅草
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.38 <span className="text-xs text-stone-500 font-normal">（クチコミ 1474件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">3,850円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70768/70768.jpg"
                  alt="ホテルサンルート浅草 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70768/70768_t.jpg"
                  alt="ホテルサンルート浅草 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>『銀座線田原町駅』から徒歩2分！世界のベッド！シモンズ社製ベッドとロフテー社オリジナル製枕で快眠を！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">東京都台東区雷門1-8-5</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">地下鉄銀座線　田原町駅３番出口より徒歩2分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70768"
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
              <span className="text-xs text-stone-500 font-medium">蔵前周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              アパホテル〈浅草　蔵前〉
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.11 <span className="text-xs text-stone-500 font-normal">（クチコミ 3738件）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">3,762円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/129965/129965.jpg"
                  alt="アパホテル〈浅草　蔵前〉 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/129965/129965_yy.jpg"
                  alt="アパホテル〈浅草　蔵前〉 客室・お風呂"
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
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>■2025年3月客室設備リニューアル　■12階に大浴殿完備　■浅草寺・雷門は徒歩圏内</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <dl className="grid grid-cols-1 sm:grid-cols-4 gap-y-2 text-xs sm:text-sm">
                <dt className="text-stone-500 font-medium">所在地</dt>
                <dd className="sm:col-span-3 text-stone-800">東京都台東区駒形2-4-6</dd>
                <dt className="text-stone-500 font-medium">アクセス</dt>
                <dd className="sm:col-span-3 text-stone-800">■大江戸線「蔵前駅」～徒歩2分■浅草線「蔵前駅」～徒歩4分■浅草線「浅草駅」～徒歩4分■メトロ銀座線「浅草駅」～徒歩9分</dd>
              </dl>
            </div>

            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D129965"
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
            <span>💡</span> 浅草下町ひとり旅・おこもりを満喫する現地TIPS
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">早朝の浅草寺・仲見世通り「静寂の参拝散歩」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">観光客でごった返す日中とは打って変わり、朝6時〜7時台の浅草寺境内は凛とした静寂に包まれます。本堂での朝座勤行の鐘の音を聞きながら、清々しい気持ちで一日を始められます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">老舗の江戸前天丼・どぜう・洋食屋めぐり</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">創業100年を超える老舗が点在する浅草。ごま油香る黒い江戸前天丼や「駒形どぜう」、レトロな喫茶店のモーニングなど、ひとりでも気後れせず本物の味を楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">隅田川テラスの水辺ウォーキングと夜景</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">ホテルからすぐの隅田川沿いには開放的なリバーサイドテラスが整備されています。夕涼みや朝のランニング、ライトアップされた吾妻橋とスカイツリーの撮影スポットとしても秀逸です。</p>
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
                <span>浅草で東京スカイツリーと隅田川の夜景を眺めながら温泉に入れるホテルは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「ドーミーインEXPRESS浅草」は最上階に展望露天風呂と足湯を完備。目の前に広がる隅田川とライトアップされた東京スカイツリーのパノラマビューを湯船から一望できます。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>浅草駅から近く、静かにテレワークや一人滞在ができる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「ホテルサンルート浅草」は田原町駅徒歩2分・浅草駅徒歩約7分。シモンズ製ベッドと広めのライティングデスクを備え、静かで落ち着いた滞在が可能です。
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
