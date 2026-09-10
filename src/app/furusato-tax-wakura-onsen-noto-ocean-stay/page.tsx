import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【和倉温泉×ふるさと納税】七尾湾オーシャンビュー＆能登復興応援！海の恵み会席名宿特集｜のと楽・美湾荘・宝仙閣',
  description: '開湯千二百年・七尾湾の波打ち際に湧く海の温泉・石川県和倉温泉を楽天ふるさと納税でお得に旅して応援！広大な庭園露天風呂を誇る「日本の宿 のと楽」、創業百二十年・海一望の「ゆけむりの宿 美湾荘」、総湯隣接の温もり宿「味な宿 宝仙閣」を徹底比較。能登牛や日本海旬魚会席、七尾市トラベルクーポン活用術を網羅。',
  keywords: '和倉温泉 ふるさと納税,和倉温泉 のと楽 クーポン,美湾荘 和倉 ふるさと納税,宝仙閣 和倉温泉 宿泊,七尾市 ふるさと納税 能登応援',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-wakura-onsen-noto-ocean-stay',
  },
  openGraph: {
    title: '【和倉温泉×ふるさと納税】七尾湾オーシャンビュー＆能登復興応援！海の恵み会席名宿特集｜のと楽・美湾荘・宝仙閣',
    description: '開湯千二百年・七尾湾の波打ち際に湧く海の温泉・石川県和倉温泉を楽天ふるさと納税でお得に旅して応援！広大な庭園露天風呂を誇る「日本の宿 のと楽」、創業百二十年・海一望の「ゆけむりの宿 美湾荘」、総湯隣接の温もり宿「味な宿 宝仙閣」を徹底比較。能登牛や日本海旬魚会席、七尾市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-wakura-onsen-noto-ocean-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【和倉温泉×ふるさと納税】七尾湾オーシャンビュー＆能登復興応援！海の恵み会席名宿特集｜のと楽・美湾荘・宝仙閣',
    description: '開湯千二百年・七尾湾の波打ち際に湧く海の温泉・石川県和倉温泉を楽天ふるさと納税でお得に旅して応援！広大な庭園露天風呂を誇る「日本の宿 のと楽」、創業百二十年・海一望の「ゆけむりの宿 美湾荘」、総湯隣接の温もり宿「味な宿 宝仙閣」を徹底比較。能登牛や日本海旬魚会席、七尾市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T17:00:00+09:00',
    dateModified: '2026-09-10T17:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-wakura-onsen-noto-ocean-stay',
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
        <span className="text-stone-700 font-medium truncate">【和倉温泉×ふるさと納税】七尾湾オーシャンビュー＆能登復興応援！海の恵み会席名宿特集｜のと楽・美湾荘・宝仙閣</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>石川県七尾市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【和倉温泉×ふるさと納税】七尾湾オーシャンビュー＆能登復興応援！海の恵み会席名宿特集｜のと楽・美湾荘・宝仙閣
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          開湯千二百年・七尾湾の波打ち際に湧く海の温泉・石川県和倉温泉を楽天ふるさと納税でお得に旅して応援！広大な庭園露天風呂を誇る「日本の宿 のと楽」、創業百二十年・海一望の「ゆけむりの宿 美湾荘」、総湯隣接の温もり宿「味な宿 宝仙閣」を徹底比較。能登牛や日本海旬魚会席、七尾市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            七尾湾を茜色に染める夕日と潮の香り——海から湧き出る奇跡の名湯と能登の豊かな山海の幸を味わう復興応援ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            石川県七尾市、能登半島の中央に位置する和倉（わくら）温泉。平安時代に一羽の傷ついた白鷺が海上で休んでいるところを地元の漁師が見つけ、海中から湧き出す温泉を発見したという開湯伝説を持つ「海の温泉」です。泉質は塩分とミネラルを極めて豊富に含んだ弱アルカリ性高温泉。殺菌効果や保湿効果が非常に高く、体の芯までしっかりと温まり肌を滑らかにしてくれます。目の前には穏やかな波が寄せる七尾湾が広がり、対岸の能登島を望む風光明媚な景色が旅人を魅了します。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            能登の魅力は何と言っても、豊かな里山里海が育んだ日本屈指の食材の宝庫であること。きめ細やかな霜降りがとろける最高級の「能登牛」、七尾湾で獲れる新鮮なブリや牡蠣、幻の高級魚のどぐろ、そして能登の地酒。石川県七尾市へのふるさと納税を利用すれば、寄付額の30%相当の楽天トラベルクーポンにより名門旅館へお得に宿泊でき、旅を楽しむことが能登の観光復興と地域経済への力強い支援につながります。
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
                  <td className="p-3 font-bold text-amber-900">和倉温泉　日本の宿　のと楽</td>
                  <td className="p-3 font-bold">★ 4.3</td>
                  <td className="p-3 text-stone-600">七尾湾を一望する絶景庭園露天風呂と滝の流れるロビー！能登牛と能登の山海の旬味を味わう大型名旅館</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・大自然パノラマ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">和倉温泉　ゆけむりの宿美湾荘</td>
                  <td className="p-3 font-bold">★ 4.55</td>
                  <td className="p-3 text-stone-600">創業百二十年・海を真正面に望む特等席！七尾湾の潮騒と辻口博啓パティシエとのコラボスイーツ</td>
                  <td className="p-3 text-stone-600">大人の洗練・極上プライベート</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">和倉温泉　味な宿　宝仙閣</td>
                  <td className="p-3 font-bold">★ 4.16</td>
                  <td className="p-3 text-stone-600">和倉温泉総湯のすぐ隣に位置する好立地！真心のこもったもてなしと料理長自慢の手作り料理</td>
                  <td className="p-3 text-stone-600">パノラマ展望・充実のスパ体験</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/39556/39556.jpg"
                alt="和倉温泉　日本の宿　のと楽"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.3（口コミ 561件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">石川県七尾市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  和倉温泉　日本の宿　のと楽
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  七尾湾を一望する絶景庭園露天風呂と滝の流れるロビー！能登牛と能登の山海の旬味を味わう大型名旅館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  和倉温泉 日本の宿 のと楽 —— 海のパノラマと贅沢な湯巡り。多彩な露天風呂と能登の味覚三昧
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 七尾湾の水平線を見晴らす大浴場と庭園露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海風が心地よく吹き抜ける開放的な露天風呂。波の音に耳を傾けながら、良質な和倉の塩化物泉にゆったりと浸かることができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 能登牛ステーキや旬の鮮魚を盛り込んだ贅沢な会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">厳選された能登牛の陶板焼きや、近海で水揚げされた魚介の姿造り。能登ならではの豊かな恵みを存分に味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ファミリーから三世代まで快適に過ごせる充実の館内設備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広々としたロビーラウンジやエステ、お土産処。快適な客室でプライベートな休日を満喫できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.33点、口コミ1500件超。「露天風呂からの七尾湾の景色が最高」「お料理がボリュームたっぷりで能登牛も魚もとても美味しかった」と好評です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>石川県 七尾市石崎町香島1-14</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>39556</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D39556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】和倉温泉　日本の宿　のと楽 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/11144/11144.jpg"
                alt="和倉温泉　ゆけむりの宿美湾荘"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.55（口コミ 2714件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">石川県七尾市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  和倉温泉　ゆけむりの宿美湾荘
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百二十年・海を真正面に望む特等席！七尾湾の潮騒と辻口博啓パティシエとのコラボスイーツ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  和倉温泉 ゆけむりの宿 美湾荘（びわんそう） —— 海に浮かぶような絶景。和の伝統と現代の寛ぎが調和する老舗
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 七尾湾と能登島を一望する展望大浴場「真珠風呂」と露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海との一体感を味わえる開放的な湯船。朝焼けに染まる海や夕暮れの幻想的な景色を眺めながらの名湯入浴は至福のひとときです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 辻口博啓氏プロデュース「ル ミュゼ ドゥ アッシュ」のスイーツ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">七尾市出身の世界的パティシエ辻口氏のスイーツを館内で楽しめる贅沢。女性や甘党の旅行者にも大人気です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 能登の四季の味覚を職人技で仕立てた本格季節会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の契約漁港から届く新鮮魚介や能登野菜。目にも鮮やかな盛り付けと上品な出汁の味わいが光ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.40点、口コミ1800件超。「部屋からもお風呂からも海が目の前に見えて感動」「スタッフの温かいおもてなしと美味しいご飯に癒やされた」とリピーター多数。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>石川県 七尾市和倉町和歌崎3-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥5,225〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>11144</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D11144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】和倉温泉　ゆけむりの宿美湾荘 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/14026/14026.jpg"
                alt="和倉温泉　味な宿　宝仙閣"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.16（口コミ 370件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">石川県七尾市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  和倉温泉　味な宿　宝仙閣
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  和倉温泉総湯のすぐ隣に位置する好立地！真心のこもったもてなしと料理長自慢の手作り料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  和倉温泉 味な宿 宝仙閣（ほうせんかく） —— 総湯への散策に最適な温もり宿。掛け流しの名湯と能登の海の幸
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 和倉温泉のシンボル「総湯」まで徒歩すぐの絶好アクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の人々にも愛される総湯へ気軽に立ち寄れる立地。温泉街の足湯や散策路へのアクセスも抜群です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 檜の香る大浴場と和倉の良質な天然温泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">身体の芯から温まる塩分豊富な名湯。手足を伸ばしてゆったりと旅の疲れを解きほぐすことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 旬の刺身や郷土料理が並ぶアットホームな手作り和食膳
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が腕を振るう心のこもった料理。温かいおもてなしとともに、能登の味覚を気兼ねなく堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.25点。「総湯がすぐ隣でとても便利だった」「接客がとても親切でお料理も家庭的で美味しかった」と温かい口コミが寄せられています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>石川県 七尾市和倉町ヨ部19番地２</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥6,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>14026</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】和倉温泉　味な宿　宝仙閣 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 和倉温泉・能登島＆辻口博啓美術館観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                能登島大橋ドライブと能登島水族館（のとじま水族館）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                和倉温泉と能登島を結ぶ全長1,050メートルの絶景大橋。島内にはジンベエザメが泳ぐパノラマ大水槽が人気の水族館やガラス美術館があり、ドライブに最適です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                ル ミュゼ ドゥ アッシュ（辻口博啓美術館）でのカフェタイム
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                七尾湾を望む海沿いに建つ美術館＆パティスリー。能登の厳選食材を使った芸術的なケーキを、海を眺めながら味わえます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                和倉温泉総湯と「湯元の広場」での温泉たまご作り
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街の中心にある総湯。広場の源泉湧出口では、温泉水で約15分茹でてトロトロの温泉たまごを作る名物体験が楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              石川県七尾市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「石川県七尾市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で七尾市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 北陸新幹線金沢駅経由・特急能登かがり火号でアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                金沢駅からJR七尾線特急「能登かがり火」で和倉温泉駅まで直通約60分。3年間の有効期間内で、能登の四季に合わせて旅行を計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                のと楽、美湾荘、宝仙閣などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-tsukioka-onsen-emerald-bihada-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 月岡温泉 エメラルドグリーン硫黄泉＆極上越後会席
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shima-onsen-retro-sekizenkan-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 四万温泉 レトロ重要文化財「元禄の湯」＆四万ブルー
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
