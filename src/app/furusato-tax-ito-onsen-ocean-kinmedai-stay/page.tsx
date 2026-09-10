import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【伊東温泉×ふるさと納税】相模灘オーシャンビュー＆名物金目鯛・伊勢海老！伊豆の名門宿特集｜青山やまと・サンハトヤ・ラフォーレ湯の庭',
  description: '毎分三万リットルの豊富な湧出量を誇る伊豆屈指の温泉郷・静岡県伊東温泉を楽天ふるさと納税でお得に贅沢ステイ！相模湾を見晴らす丘の名門料亭旅館「青山やまと」、名物海底温泉でお魚見学「サンハトヤ」、全室温泉付き客室の和モダン「ラフォーレ伊東温泉 湯の庭」を徹底比較。伊東市トラベルクーポン活用術を網羅。',
  keywords: '伊東温泉 ふるさと納税,青山やまと クーポン,サンハトヤ ふるさと納税 伊東,ラフォーレ伊東温泉 宿泊,伊東市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-ito-onsen-ocean-kinmedai-stay',
  },
  openGraph: {
    title: '【伊東温泉×ふるさと納税】相模灘オーシャンビュー＆名物金目鯛・伊勢海老！伊豆の名門宿特集｜青山やまと・サンハトヤ・ラフォーレ湯の庭',
    description: '毎分三万リットルの豊富な湧出量を誇る伊豆屈指の温泉郷・静岡県伊東温泉を楽天ふるさと納税でお得に贅沢ステイ！相模湾を見晴らす丘の名門料亭旅館「青山やまと」、名物海底温泉でお魚見学「サンハトヤ」、全室温泉付き客室の和モダン「ラフォーレ伊東温泉 湯の庭」を徹底比較。伊東市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-ito-onsen-ocean-kinmedai-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【伊東温泉×ふるさと納税】相模灘オーシャンビュー＆名物金目鯛・伊勢海老！伊豆の名門宿特集｜青山やまと・サンハトヤ・ラフォーレ湯の庭',
    description: '毎分三万リットルの豊富な湧出量を誇る伊豆屈指の温泉郷・静岡県伊東温泉を楽天ふるさと納税でお得に贅沢ステイ！相模湾を見晴らす丘の名門料亭旅館「青山やまと」、名物海底温泉でお魚見学「サンハトヤ」、全室温泉付き客室の和モダン「ラフォーレ伊東温泉 湯の庭」を徹底比較。伊東市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-ito-onsen-ocean-kinmedai-stay',
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
        <span className="text-stone-700 font-medium truncate">【伊東温泉×ふるさと納税】相模灘オーシャンビュー＆名物金目鯛・伊勢海老！伊豆の名門宿特集｜青山やまと・サンハトヤ・ラフォーレ湯の庭</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>静岡県伊東市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【伊東温泉×ふるさと納税】相模灘オーシャンビュー＆名物金目鯛・伊勢海老！伊豆の名門宿特集｜青山やまと・サンハトヤ・ラフォーレ湯の庭
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          毎分三万リットルの豊富な湧出量を誇る伊豆屈指の温泉郷・静岡県伊東温泉を楽天ふるさと納税でお得に贅沢ステイ！相模湾を見晴らす丘の名門料亭旅館「青山やまと」、名物海底温泉でお魚見学「サンハトヤ」、全室温泉付き客室の和モダン「ラフォーレ伊東温泉 湯の庭」を徹底比較。伊東市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            温暖な気候と豊富な湯量を誇る伊豆の玄関口——相模灘の絶景露天風呂と名物金目鯛の姿煮に舌鼓を打つ極上の休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            静岡県伊東市、伊豆半島の東海岸に広がる伊東（いとう）温泉。別府、由布院に次ぐ全国有数の湧出量を誇り、毎分約3万2,000リットルもの温泉が市内の至る所から湧き出ています。江戸時代には三代将軍徳川家光に湯治湯として献上された歴史を持ち、明治以降は文人墨客の避暑地・別荘地として発展してきました。泉質は肌に優しく刺激が少ない単純温泉や弱食塩泉で、赤ちゃんからシニアまで安心して長湯を楽しめる名湯として親しまれています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            伊東温泉の旅の大きな醍醐味が、相模湾で獲れる新鮮な海の幸です。脂の乗った伊豆名物「金目鯛の姿煮」や、甘みあふれる「伊勢海老」のお造り、アワビの踊り焼きなど、伊豆ならではの豪華な海鮮会席が夜を彩ります。相模灘を見晴らすパノラマ展望風呂や、全室に温泉を備えたモダンリゾートなど宿のバリエーションも多彩。静岡県伊東市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門宿へお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。
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
                  <td className="p-3 font-bold text-amber-900">伊東温泉　青山やまと</td>
                  <td className="p-3 font-bold">★ 4.58</td>
                  <td className="p-3 text-stone-600">伊東の街並みと相模湾を見晴らす高台の名門！源泉掛け流し露天風呂と金目鯛姿煮の本格懐石料亭旅館</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">伊東温泉　サンハトヤ</td>
                  <td className="p-3 font-bold">★ 3.91</td>
                  <td className="p-3 text-stone-600">「伊東に行くならハトヤ」のCMで有名な名門！巨大水槽でお魚が泳ぐ海底温泉「千石風呂」と全室オーシャンビュー</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ラフォーレ伊東温泉　湯の庭</td>
                  <td className="p-3 font-bold">★ 4.33</td>
                  <td className="p-3 text-stone-600">全客室に天然温泉のお風呂を完備！和モダンなデザインと落ち着いた大人の寛ぎを提供する温泉ホテル</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1376/1376.jpg"
                alt="伊東温泉　青山やまと"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.58（口コミ 635件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県伊東市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伊東温泉　青山やまと
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  伊東の街並みと相模湾を見晴らす高台の名門！源泉掛け流し露天風呂と金目鯛姿煮の本格懐石料亭旅館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伊東温泉 青山やまと —— 丘の上に佇む上質なやすらぎ。絶景の展望風呂と心を尽くしたおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 相模湾と伊東の夜景を一望する最上階の展望露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">朝日に輝く海や夜の街の明かりを見渡す大浴場と露天風呂。良質な伊東の名湯に浸かりながら、開放感あふれる絶景を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 朝夕ともにお部屋でゆっくり味わう完全お部屋食スタイル
                    </h5>
                    <p className="text-stone-600 leading-relaxed">仲居さんが一品ずつ配膳する伝統の日本旅館スタイル。周りを気にせず、プライベートな空間で贅沢な美食時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 秘伝のタレでふっくら煮付けた金目鯛の姿煮と季節の懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が腕を振るう華やかな本格料理。伊豆近海の新鮮魚介と旬の野菜をバランスよく組み合わせた極上ディナーです。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.67点、口コミ1500件超。「お部屋食の金目鯛が絶品で接客もパーフェクト」「お風呂からの景色が素晴らしく何度もリピートしている」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>静岡県 伊東市岡203</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,300〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>1376</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】伊東温泉　青山やまと の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7345/7345.jpg"
                alt="伊東温泉　サンハトヤ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.91（口コミ 1810件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県伊東市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伊東温泉　サンハトヤ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  「伊東に行くならハトヤ」のCMで有名な名門！巨大水槽でお魚が泳ぐ海底温泉「千石風呂」と全室オーシャンビュー
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伊東温泉 サンハトヤ —— 海の上に建つ一大リゾート。名物海底温泉と相模灘の絶景パノラマ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ウミガメや魚たちが泳ぐ巨大水槽を眺めながら入る「海底温泉 千石風呂」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">まるで水族館の中で温泉に入っているかのような唯一無二の体験。家族連れや子供たちに大人気のアトラクション温泉です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室が相模湾に面した壮大なオーシャンフロント
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海の上にせり出すように建つホテルならではの眺望。遮るもののない水平線と朝日の絶景を部屋にいながら満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 金目鯛や新鮮な海の幸が並ぶディナービュッフェ＆和食膳
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伊豆の海の恵みをふんだんに取り入れた料理。シーズンごとのディナーショーや温泉プールも楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.11点、口コミ3200件超。「海底温泉で子供が大喜び」「部屋からの海の景色が素晴らしくハトヤの伝統を感じられた」とファミリーに大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>静岡県 伊東市湯川572-12</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥11,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>7345</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】伊東温泉　サンハトヤ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/70766/70766.jpg"
                alt="ラフォーレ伊東温泉　湯の庭"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.33（口コミ 717件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">静岡県伊東市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ラフォーレ伊東温泉　湯の庭
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全客室に天然温泉のお風呂を完備！和モダンなデザインと落ち着いた大人の寛ぎを提供する温泉ホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ラフォーレ伊東温泉 湯の庭 —— 客室温泉風呂で過ごすおこもりステイ。湯量豊富な名湯と季節の会席料理
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室に設えられた天然温泉が注ぐプライベート客室風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">いつでも好きな時に名湯を満喫できる贅沢。大浴場の露天風呂とともに、心ゆくまで伊東の湯を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊東駅から徒歩約10分の静かな住宅街に佇む和モダン空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">観光の拠点としても便利な好アクセス。竹林の中庭やモダンなロビーラウンジで静かにリラックスできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊豆の山海の幸を彩り豊かに仕立てた本格和食会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旬魚のお造りや肉料理など、目にも美しい料理が並ぶディナーコース。落ち着いたレストランでゆったり味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ1800件超。「部屋のお風呂に温泉が出て最高だった」「清潔感があり接客も丁寧で大満足」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>静岡県 伊東市猪戸2-3-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,612〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>70766</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ラフォーレ伊東温泉　湯の庭 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 伊東温泉・城ヶ崎海岸＆大室山観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                大室山（おおむろやま）リフトと火口周回遊歩道
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                すり鉢状の火口を持つ美しい単成火山。リフトで山頂に登れば、360度の大パノラマで富士山や伊豆諸島を一望でき、「お鉢巡り」が楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                城ヶ崎海岸門脇吊橋と断崖絶壁の絶景ハイク
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                大室山の溶岩が海に流れ込んで形成されたリアス式海岸。高さ23メートルの門脇吊橋からは、足元に渦巻く激しい白波のスリルを体感できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                伊東松川遊歩道と登録有形文化財「東海館」見学
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                伊東温泉の中心を流れる松川沿いの遊歩道。昭和初期の木造三階建て温泉旅館建築「東海館」の見学や、春の桜並木散策が人気です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              静岡県伊東市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「静岡県伊東市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で伊東市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 特急踊り子号や新幹線熱海駅乗り換えで快適アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から特急「踊り子」で伊東駅まで直通約1時間40分。3年間の有効期間内で、初春の椿まつりや夏の海水浴、冬の花火に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                青山やまと、サンハトヤ、ラフォーレ伊東温泉湯の庭などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
