import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【洞爺湖温泉×ふるさと納税】全室レイクビュー＆ロングラン花火！湖畔絶景リゾート宿特集｜乃の風リゾート・サンパレス・洞爺観光ホテル',
  description: '支笏洞爺国立公園の美しいカルデラ湖・北海道洞爺湖温泉を楽天ふるさと納税でお得に満喫！屋上天空パノラマ露天風呂の最高峰「乃の風リゾート」、湖と一体化するインフィニティ露天風呂「洞爺サンパレス」、湖畔特等席と洞窟風呂の老舗「洞爺観光ホテル」を徹底比較。洞爺湖町トラベルクーポン活用術を網羅。',
  keywords: '洞爺湖温泉 ふるさと納税,乃の風リゾート クーポン,洞爺サンパレス ふるさと納税,洞爺湖 花火 見える宿,洞爺湖町 ふるさと納税 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-toya-onsen-lake-view-fireworks-stay',
  },
  openGraph: {
    title: '【洞爺湖温泉×ふるさと納税】全室レイクビュー＆ロングラン花火！湖畔絶景リゾート宿特集｜乃の風リゾート・サンパレス・洞爺観光ホテル',
    description: '支笏洞爺国立公園の美しいカルデラ湖・北海道洞爺湖温泉を楽天ふるさと納税でお得に満喫！屋上天空パノラマ露天風呂の最高峰「乃の風リゾート」、湖と一体化するインフィニティ露天風呂「洞爺サンパレス」、湖畔特等席と洞窟風呂の老舗「洞爺観光ホテル」を徹底比較。洞爺湖町トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-toya-onsen-lake-view-fireworks-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【洞爺湖温泉×ふるさと納税】全室レイクビュー＆ロングラン花火！湖畔絶景リゾート宿特集｜乃の風リゾート・サンパレス・洞爺観光ホテル',
    description: '支笏洞爺国立公園の美しいカルデラ湖・北海道洞爺湖温泉を楽天ふるさと納税でお得に満喫！屋上天空パノラマ露天風呂の最高峰「乃の風リゾート」、湖と一体化するインフィニティ露天風呂「洞爺サンパレス」、湖畔特等席と洞窟風呂の老舗「洞爺観光ホテル」を徹底比較。洞爺湖町トラベルクーポン活用術を網羅。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル 観光・ふるさと納税調査班',
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
    datePublished: '2026-09-10T17:10:00+09:00',
    dateModified: '2026-09-10T17:10:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-toya-onsen-lake-view-fireworks-stay',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/travel-savings-guide" className="hover:underline">ふるさと納税旅行ガイド</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【洞爺湖温泉×ふるさと納税】全室レイクビュー＆ロングラン花火！湖畔絶景リゾート宿特集｜乃の風リゾート・サンパレス・洞爺観光ホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>北海道洞爺湖町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【洞爺湖温泉×ふるさと納税】全室レイクビュー＆ロングラン花火！湖畔絶景リゾート宿特集｜乃の風リゾート・サンパレス・洞爺観光ホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          支笏洞爺国立公園の美しいカルデラ湖・北海道洞爺湖温泉を楽天ふるさと納税でお得に満喫！屋上天空パノラマ露天風呂の最高峰「乃の風リゾート」、湖と一体化するインフィニティ露天風呂「洞爺サンパレス」、湖畔特等席と洞窟風呂の老舗「洞爺観光ホテル」を徹底比較。洞爺湖町トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            青く澄み渡るカルデラ湖と夜空を染めるロングラン花火——湖と空に溶け込むインフィニティ温泉で過ごす至高のリゾートステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北海道虻田郡洞爺湖町・有珠郡壮瞥町にまたがる洞爺湖（とうやこ）温泉。明治43年（1910年）の有珠山寄生火山の噴火によって誕生した、日本有数の活火山温泉リゾートです。カルデラ湖である洞爺湖は真冬でも凍らない「不凍湖」として知られ、中央に浮かぶ中島、後方にそびえる秀峰・羊蹄山（蝦夷富士）、そして現在も白煙を上げる有珠山と昭和新山の大迫力の火山景観が広がります。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            洞爺湖温泉の最大のハイライトは、4月下旬から10月末まで毎夜開催される「洞爺湖ロングラン花火大会」。移動する船から湖上に打ち上げられる大輪の花火を、客室や露天風呂、湖畔遊歩道から間近に鑑賞する体験はまさに非日常の極みです。北海道産の旬魚や十勝牛、近郊の豊浦ポークや地元新鮮野菜を取り入れた本格会席や豪華ビュッフェも大人気。北海道洞爺湖町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのレイクビュー名宿へお得に宿泊でき、特別な思い出が残る北海道旅行が叶います。
          </p>
        </section>

        {/* 比較サマリー表 */}
        <section className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-100/80 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            今回ご紹介する厳選3名宿の比較サマリー
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-xl shadow-xs">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                  <th className="p-3 font-bold">宿名</th>
                  <th className="p-3 font-bold">評価</th>
                  <th className="p-3 font-bold">最大の特徴</th>
                  <th className="p-3 font-bold">おすすめの過ごし方</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                
                <tr>
                  <td className="p-3 font-bold text-amber-900">ザ　レイクビュー　ＴＯＹＡ　乃の風リゾート</td>
                  <td className="p-3 font-bold">★ 4.52</td>
                  <td className="p-3 text-stone-600">全客室レイクビュー＆最上階の天空パノラマ露天風呂「TENQOO」！洞爺湖ロングラン花火を特等席で望む最高峰リゾート</td>
                  <td className="p-3 text-stone-600">最高峰の絶景・憧れのステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">洞爺サンパレス　リゾート＆スパ（グランベルホテルズ＆リゾーツ）</td>
                  <td className="p-3 font-bold">★ 3.79</td>
                  <td className="p-3 text-stone-600">湖に浮かぶようなインフィニティ露天風呂！巨大造波プール「ウォーターランド」併設の一大温泉エンターテインメント</td>
                  <td className="p-3 text-stone-600">充実の施設・アクティブ寛ぎ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">洞爺湖温泉　洞爺観光ホテル</td>
                  <td className="p-3 font-bold">★ 3.93</td>
                  <td className="p-3 text-stone-600">洞爺湖畔のど真ん中に建つ老舗旅館！洞窟風呂とパノラマ大浴場、花火を部屋から眺める絶好ロケーション</td>
                  <td className="p-3 text-stone-600">落ち着いた風情・アットホーム旅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ホテル詳細カード一覧 */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🏆</span> 厳選3宿の詳細レビュー＆ふるさと納税活用ガイド
          </h2>

          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/139962/139962.jpg"
                alt="ザ　レイクビュー　ＴＯＹＡ　乃の風リゾート"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.52（口コミ 1539件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道洞爺湖町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ザ　レイクビュー　ＴＯＹＡ　乃の風リゾート
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全客室レイクビュー＆最上階の天空パノラマ露天風呂「TENQOO」！洞爺湖ロングラン花火を特等席で望む最高峰リゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ザ レイクビュー TOYA 乃の風リゾート —— 湖と一体化する美学。パノラマの絶景と洗練された大人のリゾートライフ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階の天空パノラマ露天風呂「TENQOO」と展望大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">屋上に設けられたインフィニティ露天風呂。湯船に浸かると洞爺湖の湖面と空がシームレスに繋がり、まるで湖の上に浮かんでいるような圧倒的な開放感を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室が洞爺湖に面した贅沢なオーシャン＆レイクフロント設計
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大きなピクチャーウィンドウから中島や羊蹄山を一望。夜には客室の窓からダイナミックなロングラン花火を目の前に鑑賞できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ライブキッチンで仕上げる北海道食材のプレミアムビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">シェフが目の前で焼き上げるステーキや出来立てパスタ、新鮮な海の幸や自家製スイーツがずらりと並ぶ人気レストラン「レ・ボア」。フレンチ懐石も選べます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.49点、口コミ4200件超。「屋上露天風呂からの景色が言葉を失うほど美しく、部屋からの花火も最高」「ビュッフェが北海道一美味しい」と絶賛の嵐。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 虻田郡洞爺湖町洞爺湖温泉29-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥31,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>139962</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D139962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ザ　レイクビュー　ＴＯＹＡ　乃の風リゾート の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/17810/17810.jpg"
                alt="洞爺サンパレス　リゾート＆スパ（グランベルホテルズ＆リゾーツ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.79（口コミ 3823件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道洞爺湖町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  洞爺サンパレス　リゾート＆スパ（グランベルホテルズ＆リゾーツ）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  湖に浮かぶようなインフィニティ露天風呂！巨大造波プール「ウォーターランド」併設の一大温泉エンターテインメント
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  洞爺サンパレス リゾート＆スパ —— 家族三世代からカップルまで。立ち湯露天風呂と豪華ビュッフェダイニング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 湖面との境目が消えるインフィニティ設計の露天風呂と立ち湯
                    </h5>
                    <p className="text-stone-600 leading-relaxed">段差を設けた露天風呂からは、遮るもののない洞爺湖の大パノラマ。深さのある立ち湯に身を委ね、爽やかな湖風を感じながら名湯を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 南国リゾート気分を満喫できる巨大屋内プール「ウォーターランド」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">波の出るプールやウォータースライダー、キッズエリア完備。雨の日や冬でも一年中家族みんなでアクティブに楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 季節の道産素材が並ぶビュッフェレストラン「パレシオリエント」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広々としたモダンダイニングで味わう出来立て料理。北海道の海の幸や揚げたて天ぷら、グリル料理を心ゆくまで味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.33点、口コミ5800件超。「露天風呂からの洞爺湖の景色が素晴らしく立ち湯が最高」「プールで子供が大喜びし、ビュッフェも美味しかった」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 有珠郡壮瞥町洞爺湖温泉7-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥9,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>17810</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】洞爺サンパレス　リゾート＆スパ（グランベルホテルズ＆リゾーツ） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/12539/12539.jpg"
                alt="洞爺湖温泉　洞爺観光ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.93（口コミ 2100件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道洞爺湖町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  洞爺湖温泉　洞爺観光ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  洞爺湖畔のど真ん中に建つ老舗旅館！洞窟風呂とパノラマ大浴場、花火を部屋から眺める絶好ロケーション
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  洞爺湖温泉 洞爺観光ホテル —— 温泉情緒あふれる名宿。ユニークな洞窟風呂と温かいおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 天然鉱石を配した幻想的な「洞窟風呂」と湖一望のパノラマ大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">岩肌を模したユニークな洞窟風呂や、洞爺湖を見晴らす露天風呂。異なる趣の湯船で洞爺の良質なナトリウム・カルシウム塩化物泉を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 湖畔の遊歩道に直結する観光・花火鑑賞に最高のロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">花火鑑賞船乗り場や温泉街の飲食店へ徒歩すぐ。夕暮れの湖畔散歩や、部屋の窓から見下ろす花火をゆったりと楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の山海の幸を盛り込んだ落ち着いた和食会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">噴火湾のホタテや道産牛、旬の野菜をバランスよく取り入れた会席料理。お部屋食プランも選べ、家族やグループで寛げます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.25点、口コミ2300件超。「部屋の目の前で花火が上がって感動した」「洞窟風呂が面白く、スタッフの対応も温かかった」と親しまれています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 虻田郡洞爺湖町洞爺湖温泉町33</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,150〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>12539</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12539"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】洞爺湖温泉　洞爺観光ホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 洞爺湖温泉・有珠山ジオパーク＆中島巡りガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                有珠山ロープウェイと昭和新山の迫力ジオパーク
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                現在も白い噴煙を上げ続ける昭和新山のすぐ隣から、有珠山山頂へ登るロープウェイ。山頂のテラス「有珠山テラス」からは、洞爺湖と羊蹄山、太平洋を一望する雄大なパノラマが広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                洞爺湖汽船（遊覧船）での中島上陸と森林散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                中世の古城のような遊覧船「エスポアール」で湖上クルーズ。中島には野生のエゾシカが生息し、巨木の森が広がる遊歩道を散策できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                サイロ展望台からの洞爺湖パノラマ絶景と名物スイーツ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                洞爺湖の西岸、高台に位置する絶景ビュースポット。中島や有珠山を見渡すダイナミックな景観と、展望台限定の「洞爺湖キャラメルプリン」が人気です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              北海道洞爺湖町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「北海道洞爺湖町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で洞爺湖町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 新千歳空港やJR札幌駅からJR特急北斗または道南バスでアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新千歳空港からJR特急で洞爺駅まで約1時間30分、駅から路線バスで約20分。3年間の有効期間内で、ロングラン花火期間（4月〜10月）や冬の静寂に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                乃の風リゾート、洞爺サンパレス、洞爺観光ホテルなどのレイクビュー客室プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-jozankei-onsen-keikoku-retreat-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 定山渓温泉 豊平峡渓谷美＆源泉かけ流しリゾート特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shuzenji-onsen-bamboo-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 修善寺温泉 伊豆最古の名湯・竹林の小径＆文化財宿特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
