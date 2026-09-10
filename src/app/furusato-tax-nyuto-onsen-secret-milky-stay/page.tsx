import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【乳頭温泉郷×ふるさと納税】日本屈指の乳白色秘湯＆田沢湖畔ステイ！湯治宿ガイド｜休暇村乳頭温泉郷・田沢湖レイクリゾート・駒ヶ岳温泉',
  description: '十和田八幡平国立公園の深山に湧く日本屈指の秘湯・秋田県乳頭温泉郷＆田沢湖を楽天ふるさと納税でお得に巡る！二大名湯を引くブナの原生林宿「休暇村 乳頭温泉郷」、田沢湖畔の高原リゾート「田沢湖レイクリゾート」、清流貸切露天風呂と手打ち十割そばの「駒ヶ岳温泉」を徹底比較。山の芋鍋や仙北市トラベルクーポン活用術を網羅。',
  keywords: '乳頭温泉郷 ふるさと納税,乳頭温泉 秘湯 ふるさと納税,休暇村 乳頭温泉郷 クーポン,田沢湖レイクリゾート ふるさと納税,仙北市 ふるさと納税 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-nyuto-onsen-secret-milky-stay',
  },
  openGraph: {
    title: '【乳頭温泉郷×ふるさと納税】日本屈指の乳白色秘湯＆田沢湖畔ステイ！湯治宿ガイド｜休暇村乳頭温泉郷・田沢湖レイクリゾート・駒ヶ岳温泉',
    description: '十和田八幡平国立公園の深山に湧く日本屈指の秘湯・秋田県乳頭温泉郷＆田沢湖を楽天ふるさと納税でお得に巡る！二大名湯を引くブナの原生林宿「休暇村 乳頭温泉郷」、田沢湖畔の高原リゾート「田沢湖レイクリゾート」、清流貸切露天風呂と手打ち十割そばの「駒ヶ岳温泉」を徹底比較。山の芋鍋や仙北市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-nyuto-onsen-secret-milky-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【乳頭温泉郷×ふるさと納税】日本屈指の乳白色秘湯＆田沢湖畔ステイ！湯治宿ガイド｜休暇村乳頭温泉郷・田沢湖レイクリゾート・駒ヶ岳温泉',
    description: '十和田八幡平国立公園の深山に湧く日本屈指の秘湯・秋田県乳頭温泉郷＆田沢湖を楽天ふるさと納税でお得に巡る！二大名湯を引くブナの原生林宿「休暇村 乳頭温泉郷」、田沢湖畔の高原リゾート「田沢湖レイクリゾート」、清流貸切露天風呂と手打ち十割そばの「駒ヶ岳温泉」を徹底比較。山の芋鍋や仙北市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T17:15:00+09:00',
    dateModified: '2026-09-10T17:15:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-nyuto-onsen-secret-milky-stay',
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
        <span className="text-stone-700 font-medium truncate">【乳頭温泉郷×ふるさと納税】日本屈指の乳白色秘湯＆田沢湖畔ステイ！湯治宿ガイド｜休暇村乳頭温泉郷・田沢湖レイクリゾート・駒ヶ岳温泉</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>秋田県仙北市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【乳頭温泉郷×ふるさと納税】日本屈指の乳白色秘湯＆田沢湖畔ステイ！湯治宿ガイド｜休暇村乳頭温泉郷・田沢湖レイクリゾート・駒ヶ岳温泉
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          十和田八幡平国立公園の深山に湧く日本屈指の秘湯・秋田県乳頭温泉郷＆田沢湖を楽天ふるさと納税でお得に巡る！二大名湯を引くブナの原生林宿「休暇村 乳頭温泉郷」、田沢湖畔の高原リゾート「田沢湖レイクリゾート」、清流貸切露天風呂と手打ち十割そばの「駒ヶ岳温泉」を徹底比較。山の芋鍋や仙北市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            ブナの原生林に煙る乳白色のにごり湯——先達川の清流と囲炉裏の炭火、秋田名物「山の芋鍋」に癒やされる秘湯旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            秋田県仙北市、十和田八幡平国立公園・乳頭山の山麓に点在する乳頭温泉郷（にゅうとうおんせんきょう）。鶴の湯、妙乃湯、大釜、蟹場、孫六、黒湯、休暇村の七つの宿がそれぞれ独自の源泉を持ち、「秘湯ファンの聖地」として日本全国のみならず世界中から旅人を引き寄せています。樹齢数百年のブナの原生林に囲まれた温泉地には、古き良き湯治文化の面影が色濃く残り、木造の湯小屋から立ち上る白い硫黄の湯けむりとせせらぎの音が、訪れる者を別世界へと誘います。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            乳頭温泉の最大の醍醐味は、濃厚な湯の花が舞う乳白色の天然硫黄泉に浸かり、大自然の静寂に身を委ねること。湯上がりには、地元の契約農家で収穫された長芋をすりおろして団子にした秋田名物「山の芋鍋」や、炭火でじっくり焼いた岩魚の塩焼き、比内地鶏、きりたんぽ鍋など、滋味あふれる郷土料理を堪能できます。秋田県仙北市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの乳頭・田沢湖の名宿へお得に宿泊でき、心洗われる本物の秘湯体験が叶います。
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
                  <td className="p-3 font-bold text-amber-900">休暇村　乳頭温泉郷</td>
                  <td className="p-3 font-bold">★ 4.59</td>
                  <td className="p-3 text-stone-600">ブナの原生林に抱かれる乳頭温泉郷の拠点！「田沢湖高原の湯」と「乳頭の湯」の二大名湯掛け流しと秋田ビュッフェ</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・名庭園ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">天然温泉　田沢湖レイクリゾート</td>
                  <td className="p-3 font-bold">★ 4.18</td>
                  <td className="p-3 text-stone-600">田沢湖畔に佇む広大な高原リゾート！肌触り滑らかな天然温泉大浴場と秋田の旬魚・郷土料理バイキング</td>
                  <td className="p-3 text-stone-600">絶景の眺望・充実のリラクゼーション</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">駒ヶ岳温泉</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">秋田駒ヶ岳の山麓に佇む木造りの温もり宿！渓流沿いの無料貸切野天風呂と手打ち十割そばの隠れ家</td>
                  <td className="p-3 text-stone-600">観光散策・アットホームな寛ぎ</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/72803/72803.jpg"
                alt="休暇村　乳頭温泉郷"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.59（口コミ 547件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">秋田県仙北市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  休暇村　乳頭温泉郷
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ブナの原生林に抱かれる乳頭温泉郷の拠点！「田沢湖高原の湯」と「乳頭の湯」の二大名湯掛け流しと秋田ビュッフェ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  休暇村 乳頭温泉郷 —— 深い森に溶け込む癒やしの宿。二つの泉質を愉しむ露天風呂とブナ林散策
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 乳白色の硫黄泉「乳頭の湯」と茶褐色の重曹泉「田沢湖高原の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">一つの宿で異なる二つの自家源泉を引く贅沢。大浴場と森を望む露天風呂で、泉質の違いをじっくりと比較体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ブナの巨木が立ち並ぶ原生林ウォーキングロードに直結
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿の一歩外は手つかずの自然林。朝の澄み切った空気を吸い込みながらの森林浴や野鳥観察が楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 秋田名物きりたんぽ鍋やハタハタ、稲庭うどんが並ぶ郷土ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の味覚をふんだんに取り入れたディナー。職人が目の前で焼き上げる料理や手作りスイーツも大人気です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.51点、口コミ1200件超。「二種類の温泉がどちらも最高で肌がすべすべになった」「森に囲まれた環境と秋田の郷土料理バイキングに大満足」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>秋田県 仙北市田沢湖生保内駒ヶ岳2-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥17,500〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>72803</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D72803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】休暇村　乳頭温泉郷 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4624/4624.jpg"
                alt="天然温泉　田沢湖レイクリゾート"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.18（口コミ 1940件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">秋田県仙北市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉　田沢湖レイクリゾート
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  田沢湖畔に佇む広大な高原リゾート！肌触り滑らかな天然温泉大浴場と秋田の旬魚・郷土料理バイキング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  天然温泉 田沢湖レイクリゾート —— 田沢湖観光の特等席。広々とした温泉大浴場と愛犬同伴客室も完備
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 開放感あふれる広々とした天然温泉大浴場とサウナ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">美肌効果の高い単純温泉に浸かり、手足を伸ばしてゆったりリフレッシュ。冷水風呂とサウナで「ととのい」も体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本一深い神秘の湖「田沢湖」への絶好のアクセス拠点
                    </h5>
                    <p className="text-stone-600 leading-relaxed">たつこ像や御座石神社など田沢湖畔の名所巡りに最適。広大な敷地にはドッグランも完備され、ペット連れ旅行にも人気です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 比内地鶏スープの鍋や秋田牛、地酒が揃う豪華ディナービュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">オープンキッチンで焼き上げる牛ステーキや、秋田の伝統料理が並ぶ満足度の高いバイキング料理です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.33点、口コミ1400件超。「お部屋が広くて清潔、お風呂も広々として気持ちよかった」「バイキングの品数が多く郷土料理が美味しかった」と好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>秋田県 仙北市田沢湖生保内字下高野82-117</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥6,237〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>4624</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】天然温泉　田沢湖レイクリゾート の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/79394/79394.jpg"
                alt="駒ヶ岳温泉"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 386件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">秋田県仙北市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  駒ヶ岳温泉
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  秋田駒ヶ岳の山麓に佇む木造りの温もり宿！渓流沿いの無料貸切野天風呂と手打ち十割そばの隠れ家
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  駒ヶ岳温泉 —— 水車が回る静寂の一軒宿。渓流のせせらぎを聞く貸切露天風呂と乳頭温泉鶴の湯への夜間送迎
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 先達川の渓流沿いに設えられた完全無料の貸切野天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">川のせせらぎと満天の星空を眺めながら入る貸切露天風呂。空いていれば何度でも自由に利用できる贅沢なプライベート温泉です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 名湯「乳頭温泉 鶴の湯」への毎晩の無料送迎バスサービス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿泊者限定で、夜の風情ある鶴の湯へ無料で送迎。提灯の明かりに照らされた白濁の大露天風呂での湯浴みを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 店主が毎朝打つ本格十割そばと名物「山の芋鍋」会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">香り高い手打ちそばと、囲炉裏風の食事処でいただく秋田の山里会席。素朴で温かいもてなしが心に染み渡ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.63点、口コミ700件超。「鶴の湯への送迎サービスが素晴らしく、宿のお風呂も料理も十割そばも最高」「静かで温かい最高の隠れ宿」と熱狂的なリピーター多数。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>秋田県 仙北市田沢湖生保内字下高野80-68</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>要問い合わせ /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>79394</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D79394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】駒ヶ岳温泉 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 乳頭温泉郷・田沢湖＆角館武家屋敷ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                日本一深い神秘の湖「田沢湖」と黄金のたつこ像
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                水深423.4メートルを誇る瑠璃色の湖。湖畔に佇むブロンズ像「たつこ像」や、湖鳥が遊ぶ透明度抜群の水面を遊覧船から楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                乳頭温泉郷の「湯めぐり号」と湯めぐり帖
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                七つの宿を結ぶ巡回バス「湯めぐり号」。宿泊者限定の「湯めぐり帖」を購入すれば、各宿の個性豊かな名湯露天風呂を1日中めぐることができます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                「みちのくの小京都」角館武家屋敷通りの散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                仙北市にある江戸時代の武家屋敷が立ち並ぶ重要伝統的建造物群保存地区。春のシダレザクラ、秋の紅葉、黒板塀が続く情緒ある町並みを散策できます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              秋田県仙北市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「秋田県仙北市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で仙北市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 秋田新幹線こまち号で田沢湖駅まで直通アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から秋田新幹線「こまち」で田沢湖駅まで乗り換えなし約2時間50分。3年間の有効期間内で、新緑や紅葉、雪見風呂に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                休暇村乳頭温泉郷、田沢湖レイクリゾート、駒ヶ岳温泉などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-toya-onsen-lake-view-fireworks-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 洞爺湖温泉 全室レイクビュー＆ロングラン花火特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-beppu-onsen-suginoi-jigoku-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 別府温泉 湧出量日本一・棚湯＆絶景リゾート特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
