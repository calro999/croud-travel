import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【野沢温泉×ふるさと納税】十三の外湯めぐり＆源泉麻釜！信州郷土料理の名宿特集｜旅館さかや・河一屋旅館・住吉屋',
  description: '日本屈指の温泉情緒とスキーリゾート・長野県野沢温泉を楽天ふるさと納税でお得に贅沢旅！創業百余年・宮大工造りの湯屋建築を誇る「旅館 さかや」、名湯真湯の白濁露天と信州牛の「河一屋旅館」、麻釜隣接の老舗「村のホテル 住吉屋」を徹底比較。十三外湯めぐりや野沢菜料理、野沢温泉村トラベルクーポン活用術を網羅。',
  keywords: '野沢温泉 ふるさと納税,野沢温泉 外湯 ふるさと納税,旅館さかや クーポン,河一屋旅館 野沢温泉 宿泊,野沢温泉村 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-nozawa-onsen-sotoyu-heritage-stay',
  },
  openGraph: {
    title: '【野沢温泉×ふるさと納税】十三の外湯めぐり＆源泉麻釜！信州郷土料理の名宿特集｜旅館さかや・河一屋旅館・住吉屋',
    description: '日本屈指の温泉情緒とスキーリゾート・長野県野沢温泉を楽天ふるさと納税でお得に贅沢旅！創業百余年・宮大工造りの湯屋建築を誇る「旅館 さかや」、名湯真湯の白濁露天と信州牛の「河一屋旅館」、麻釜隣接の老舗「村のホテル 住吉屋」を徹底比較。十三外湯めぐりや野沢菜料理、野沢温泉村トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-nozawa-onsen-sotoyu-heritage-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【野沢温泉×ふるさと納税】十三の外湯めぐり＆源泉麻釜！信州郷土料理の名宿特集｜旅館さかや・河一屋旅館・住吉屋',
    description: '日本屈指の温泉情緒とスキーリゾート・長野県野沢温泉を楽天ふるさと納税でお得に贅沢旅！創業百余年・宮大工造りの湯屋建築を誇る「旅館 さかや」、名湯真湯の白濁露天と信州牛の「河一屋旅館」、麻釜隣接の老舗「村のホテル 住吉屋」を徹底比較。十三外湯めぐりや野沢菜料理、野沢温泉村トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T17:25:00+09:00',
    dateModified: '2026-09-10T17:25:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-nozawa-onsen-sotoyu-heritage-stay',
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
        <span className="text-stone-700 font-medium truncate">【野沢温泉×ふるさと納税】十三の外湯めぐり＆源泉麻釜！信州郷土料理の名宿特集｜旅館さかや・河一屋旅館・住吉屋</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>長野県野沢温泉村 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【野沢温泉×ふるさと納税】十三の外湯めぐり＆源泉麻釜！信州郷土料理の名宿特集｜旅館さかや・河一屋旅館・住吉屋
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本屈指の温泉情緒とスキーリゾート・長野県野沢温泉を楽天ふるさと納税でお得に贅沢旅！創業百余年・宮大工造りの湯屋建築を誇る「旅館 さかや」、名湯真湯の白濁露天と信州牛の「河一屋旅館」、麻釜隣接の老舗「村のホテル 住吉屋」を徹底比較。十三外湯めぐりや野沢菜料理、野沢温泉村トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            立ち上る湯けむりと石畳の坂道——十三の外湯を巡り、源泉掛け流しの霊泉と信州の美味に浸る素朴で贅沢な休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            長野県下高井郡野沢温泉村、毛無山の山麓に広がる野沢（のざわ）温泉。奈良時代に行基や聖武天皇の時代に開湯されたと伝わり、古くから湯治場として栄えてきた日本を代表する名湯です。国の天然記念物「麻釜（おがま）」では100度近い高温泉が湧き出し、地元の人々が野菜や野沢菜を茹でる日常の風景が今なお息づいています。温泉街には「大湯」をはじめとする13箇所の外湯（共同浴場）が点在し、地元住民組織「湯仲間」によって大切に管理され、訪れる旅人にも開放されています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            野沢温泉の醍醐味は、浴衣と下駄で温泉街を歩きながら、熱めの源泉掛け流し湯を巡る外湯めぐり。宿に戻れば、宮大工が手がけた美しい湯屋でゆったりと温泉に浸かり、夕食には長野県産の信州プレミアム牛やすき焼き、名物の本場野沢菜漬け、採れたての山菜や川魚、信州そばを地酒とともに味わう至福の時間が待っています。長野県野沢温泉村へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗旅館へお得に宿泊でき、心温まる信州の秘湯旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">野沢温泉　旅館　さかや</td>
                  <td className="p-3 font-bold">★ 4.49</td>
                  <td className="p-3 text-stone-600">創業百余年・野沢を代表する宮大工建築の最高峰！自然湧出する自家源泉を注ぐ名湯「鷹の湯」</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">野沢温泉　河一屋旅館</td>
                  <td className="p-3 font-bold">★ 4.55</td>
                  <td className="p-3 text-stone-600">野沢温泉屈指の名湯「真湯」を引く白濁の露天風呂！信州プレミアム牛ステーキと郷土の温もり</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">野沢温泉　村のホテル　住吉屋</td>
                  <td className="p-3 font-bold">★ 4.89</td>
                  <td className="p-3 text-stone-600">麻釜のすぐ隣に佇む明治２年創業の歴史宿！自家源泉かけ流しの湯とアケビ細工が彩る民芸の美</td>
                  <td className="p-3 text-stone-600">温もり空間・アットホーム旅</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/108127/108127.jpg"
                alt="野沢温泉　旅館　さかや"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.49（口コミ 371件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">長野県野沢温泉村</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  野沢温泉　旅館　さかや
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百余年・野沢を代表する宮大工建築の最高峰！自然湧出する自家源泉を注ぐ名湯「鷹の湯」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  野沢温泉 旅館 さかや —— 伝統の木造建築美と源泉の温もり。太い梁が交差する湯屋と極上の創作和食会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 宮大工が組み上げた伝統の湯屋建築「鷹の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">高い天井と太い梁が美しい総木造りの大浴場。自然湧出する自家源泉を非加熱・無加水で掛け流し、温泉本来の力強い効能を肌で実感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本庭園を望む落ち着いた和室とモダンなサロンラウンジ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">歴史の風格を感じさせる館内。手入れされた庭園や暖炉のあるラウンジで、静かに大人の時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 信州牛の陶板焼きや地元の山里の恵みを味わう特選会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が腕によりをかけて仕立てる月替わりの会席。器の美しさと出汁の深い味わいに職人技が光ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.66点、口コミ1300件超。「鷹の湯の木造建築とお湯の素晴らしさに感動」「おもてなし、お部屋、お料理すべてが一流で最高峰の宿」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>長野県 下高井郡野沢温泉村豊郷9329</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥15,400〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>108127</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】野沢温泉　旅館　さかや の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8186/8186.jpg"
                alt="野沢温泉　河一屋旅館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.55（口コミ 813件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">長野県野沢温泉村</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  野沢温泉　河一屋旅館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  野沢温泉屈指の名湯「真湯」を引く白濁の露天風呂！信州プレミアム牛ステーキと郷土の温もり
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  野沢温泉 河一屋旅館 —— 源泉掛け流しのにごり湯露天風呂。心温まる接客と信州牛を味わう癒やしの宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 神秘的なエメラルドグリーンから白濁へと変わる名湯「真湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">湯の花が舞う良質な硫黄泉を引き込んだ露天風呂。内湯には麻釜源泉を引いており、館内で二つの泉質を愉しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 温泉街の中心部や外湯へ徒歩すぐの便利な立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大湯や麻釜への散策に最適なロケーション。湯上がりの外湯めぐりや足湯散歩をストレスなく楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最高ランク信州プレミアム牛やすき焼きが自慢の夕食
                    </h5>
                    <p className="text-stone-600 leading-relaxed">柔らかくジューシーな信州牛や地元野菜をふんだんに取り入れた郷土料理。温かい手作りのおもてなしが評判です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ1100件超。「露天風呂の真湯のお湯が最高で肌がつるつるになった」「信州牛が絶品でスタッフの対応も素晴らしかった」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>長野県 下高井郡野沢温泉村豊郷8923-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥10,972〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>8186</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】野沢温泉　河一屋旅館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/67893/67893.jpg"
                alt="野沢温泉　村のホテル　住吉屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.89（口コミ 128件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">長野県野沢温泉村</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  野沢温泉　村のホテル　住吉屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  麻釜のすぐ隣に佇む明治２年創業の歴史宿！自家源泉かけ流しの湯とアケビ細工が彩る民芸の美
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  野沢温泉 村のホテル 住吉屋 —— 麻釜の湯けむりを望む特等席。自家源泉の滑らかな湯と素朴な民芸空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内から自噴する良質な自家源泉を引く大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">滑らかな肌触りの弱アルカリ性硫黄泉。湯口から絶え間なく注がれる新鮮な名湯に浸かり、疲れた体を芯から解きほぐせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 麻釜の目の前に位置する温泉情緒たっぷりのロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の人々が野菜を茹でる麻釜の風景を間近に見下ろす立地。朝の散歩や外湯めぐりに最高の拠点です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 信州の季節の食材をふんだんに使った手作り創作料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の旬の野菜や山菜、きのこ、岩魚などを使った滋味豊かな料理。信州の地酒とともにゆったりと味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点。「麻釜のすぐ隣で雰囲気が最高」「自家源泉のお湯が素晴らしく、民芸調の落ち着いた館内とお料理に癒やされた」と好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>長野県 下高井郡野沢温泉村豊郷8713</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥11,550〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>67893</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】野沢温泉　村のホテル　住吉屋 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 野沢温泉街・外湯めぐり＆麻釜（おがま）観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                十三の外湯めぐり（大湯・河原湯・真湯など）と集印帳散歩
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街に点在する無料の共同浴場。一番人気の「大湯」は木造二階建ての堂々たる湯屋建築。各外湯の記念スタンプを集める「集印帳めぐり」も人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                国の天然記念物「麻釜（おがま）」の見学
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                100度近い高温泉が湧き出す野沢温泉のシンボル。地元住民が山菜や野沢菜、卵を茹でる昔ながらの生活風景を見学できます（観光客の立ち入り制限あり）。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                野沢温泉スキー場とサマーアクティビティ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                極上のパウダースノーを誇る日本屈指のビッグゲレンデ。夏から秋にはマウンテンバイクやジップライン、高原植物の観察が楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              長野県野沢温泉村ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「長野県野沢温泉村」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で野沢温泉村を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 北陸新幹線飯山駅から直通バス「野沢温泉ライナー」でアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から北陸新幹線で飯山駅まで約1時間40分、駅から直通バスでわずか約25分。3年間の有効期間内で、冬のスキーシーズンや新緑・紅葉に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                旅館さかや、河一屋旅館、住吉屋などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-ibusuki-onsen-sand-bath-ocean-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 指宿温泉 天然砂むし温泉＆錦江湾オーシャンビュー特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-nyuto-onsen-secret-milky-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 乳頭温泉郷 日本屈指の乳白色秘湯＆田沢湖畔特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
