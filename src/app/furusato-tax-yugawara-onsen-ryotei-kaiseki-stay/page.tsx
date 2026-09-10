import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【湯河原温泉×ふるさと納税】文豪が愛した名湯＆極上料亭懐石！奥湯河原の隠れ宿特集｜海石榴・山翠楼・ふきや',
  description: '万葉集にも詠まれた古湯・神奈川県湯河原町「湯河原温泉（奥湯河原）」を楽天ふるさと納税でお得に極上ステイ！奥湯河原の清流に抱かれる名門料亭旅館「海石榴（つばき）」、展望露天風呂と自家製湯葉懐石の「山翠楼 SANSUIROU」、数寄屋建築と貸切露天風呂の「湯河原温泉 ふきや」を徹底比較。湯河原町トラベルクーポン活用術を網羅。',
  keywords: '湯河原温泉 ふるさと納税,海石榴 クーポン 湯河原,山翠楼 ふるさと納税,湯河原温泉 ふきや 宿泊,湯河原町 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-yugawara-onsen-ryotei-kaiseki-stay',
  },
  openGraph: {
    title: '【湯河原温泉×ふるさと納税】文豪が愛した名湯＆極上料亭懐石！奥湯河原の隠れ宿特集｜海石榴・山翠楼・ふきや',
    description: '万葉集にも詠まれた古湯・神奈川県湯河原町「湯河原温泉（奥湯河原）」を楽天ふるさと納税でお得に極上ステイ！奥湯河原の清流に抱かれる名門料亭旅館「海石榴（つばき）」、展望露天風呂と自家製湯葉懐石の「山翠楼 SANSUIROU」、数寄屋建築と貸切露天風呂の「湯河原温泉 ふきや」を徹底比較。湯河原町トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-yugawara-onsen-ryotei-kaiseki-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【湯河原温泉×ふるさと納税】文豪が愛した名湯＆極上料亭懐石！奥湯河原の隠れ宿特集｜海石榴・山翠楼・ふきや',
    description: '万葉集にも詠まれた古湯・神奈川県湯河原町「湯河原温泉（奥湯河原）」を楽天ふるさと納税でお得に極上ステイ！奥湯河原の清流に抱かれる名門料亭旅館「海石榴（つばき）」、展望露天風呂と自家製湯葉懐石の「山翠楼 SANSUIROU」、数寄屋建築と貸切露天風呂の「湯河原温泉 ふきや」を徹底比較。湯河原町トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-11T00:10:00+09:00',
    dateModified: '2026-09-11T00:10:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-yugawara-onsen-ryotei-kaiseki-stay',
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
        <span className="text-stone-700 font-medium truncate">【湯河原温泉×ふるさと納税】文豪が愛した名湯＆極上料亭懐石！奥湯河原の隠れ宿特集｜海石榴・山翠楼・ふきや</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>神奈川県湯河原町（奥湯河原） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【湯河原温泉×ふるさと納税】文豪が愛した名湯＆極上料亭懐石！奥湯河原の隠れ宿特集｜海石榴・山翠楼・ふきや
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          万葉集にも詠まれた古湯・神奈川県湯河原町「湯河原温泉（奥湯河原）」を楽天ふるさと納税でお得に極上ステイ！奥湯河原の清流に抱かれる名門料亭旅館「海石榴（つばき）」、展望露天風呂と自家製湯葉懐石の「山翠楼 SANSUIROU」、数寄屋建築と貸切露天風呂の「湯河原温泉 ふきや」を徹底比較。湯河原町トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            藤木川の渓谷に響くせせらぎと千年のいで湯——夏目漱石や芥川龍之介が愛した文豪の隠れ里で味わう至高の懐石美禄
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            神奈川県最南端、相模湾と箱根連山に挟まれた山間に湧く湯河原（ゆがわら）温泉。万葉集に「足柄の土肥の河内に出づる湯の…」と詠まれた東日本唯一の万葉古湯であり、明治から大正にかけては夏目漱石が絶筆『明暗』を執筆し、芥川龍之介、国木田独歩、島崎藤村ら名だたる文豪が逗留して創作に耽った日本を代表する文学の街です。特に温泉街の最奥部に位置する「奥湯河原」は、深い緑の渓谷と静寂に包まれた極上の大人の隠れ家エリアとして知られています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            湯河原温泉の魅力は、弱食塩泉・弱アルカリ性のまろやかな泉質と、日本屈指の料理旅館が競い合う最高峰の美食体験。相模湾で水揚げされる地魚や伊勢海老、アワビ、朝採れの柑橘類、そして熟練の料理人が出汁からこだわり抜いた本格京風懐石が楽しめます。神奈川県湯河原町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗料亭旅館へお得に宿泊でき、喧騒を離れた贅沢な休日が叶います。
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
                  <td className="p-3 font-bold text-amber-900">海石榴　つばき</td>
                  <td className="p-3 font-bold">★ 4.48</td>
                  <td className="p-3 text-stone-600">奥湯河原の豊かな自然に包まれた名門料亭旅館！四季を彩る極上の懐石料理と数寄屋造りの美</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">山翠楼SANSUIROU</td>
                  <td className="p-3 font-bold">★ 4.31</td>
                  <td className="p-3 text-stone-600">奥湯河原の山並みを一望する展望露天風呂「大空」！名物自家製湯葉と本格懐石料理を堪能する名宿</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">湯河原温泉　ふきや</td>
                  <td className="p-3 font-bold">★ 4.46</td>
                  <td className="p-3 text-stone-600">屋上に３つの貸切露天風呂を完備！数寄屋造りの上質空間と月替わりの繊細な日本料理</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/67086/67086.jpg"
                alt="海石榴　つばき"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.48（口コミ 336件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県湯河原町（奥湯河原）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  海石榴　つばき
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  奥湯河原の豊かな自然に包まれた名門料亭旅館！四季を彩る極上の懐石料理と数寄屋造りの美
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  海石榴 つばき —— 藤木川の清流沿いに佇む最高峰の和風旅館。日本の美意識が息づく静寂と至高の料理美禄
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 四季の野花と椿が咲き誇る山間に佇む数寄屋建築の館
                    </h5>
                    <p className="text-stone-600 leading-relaxed">手入れの行き届いた庭園と清流のせせらぎ。日本の伝統美と現代の快適性が調和した静寂の空間です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 奥湯河原の豊かな大自然を望む大浴場と露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">無色透明で肌に優しい名湯。湯船から眺める新緑や紅葉、雪景色が日々の疲れを優しく解き放ちます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 「料亭旅館」の名に恥じない最高峰の四季折々京風懐石料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">吟味された食材と職人の技が織りなす芸術的な料理。お部屋や個室食事処でゆったりと至福の時間を過ごせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.48点。「奥湯河原の自然と数寄屋の佇まいに癒やされた」「お料理が一口ごとに感動する美味しさで、サービスも完璧」と記念日利用に大絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 足柄下郡湯河原町宮上776</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥43,010〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>67086</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D67086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】海石榴　つばき の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28467/28467.jpg"
                alt="山翠楼SANSUIROU"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.31（口コミ 541件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県湯河原町（奥湯河原）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  山翠楼SANSUIROU
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  奥湯河原の山並みを一望する展望露天風呂「大空」！名物自家製湯葉と本格懐石料理を堪能する名宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  山翠楼 SANSUIROU —— 聚楽壁と銘木が薫る本格料亭旅館。奥湯河原の絶景風呂と湯葉料理が織りなす美食ステイ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 屋上に設けられた展望露天風呂「大空」からの360度大自然パノラマ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">山並みと空に溶け込むような開放感。満天の星空や朝の清々しい山霧を眺めながらの入浴は格別の体験です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 厳選された国産大豆と天然水で作る名物「自家製引き上げ湯葉」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">毎朝手作りされる新鮮な湯葉料理。できたてのまろやかなコクと上品な甘みが口いっぱいに広がります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 旬の食材を贅沢に取り入れた月替わりの本格会席コース
                    </h5>
                    <p className="text-stone-600 leading-relaxed">相模湾の新鮮魚介や黒毛和牛、季節の野菜を組み合わせた端正な料理。料理長の確かな技が光ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.31点、口コミ1400件超。「展望露天風呂からの景色が最高でお湯も肌に優しい」「名物の湯葉料理が絶品で、接客も温かく素晴らしい宿」とリピーター多数。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 足柄下郡湯河原町宮上673</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥23,485〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>28467</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】山翠楼SANSUIROU の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/27959/27959.jpg"
                alt="湯河原温泉　ふきや"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.46（口コミ 178件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県湯河原町（奥湯河原）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  湯河原温泉　ふきや
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  屋上に３つの貸切露天風呂を完備！数寄屋造りの上質空間と月替わりの繊細な日本料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  湯河原温泉 ふきや —— 現代に生きる日本の美意識。屋上貸切風呂湯めぐりと旬を愛でる繊細な懐石
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 屋上と大浴場に設えられた計7つの個性豊かな湯船と貸切風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">湯河原の山並みを望む展望貸切露天風呂や檜風呂。予約不要で空いていれば何度でも自由に利用できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伝統的な数寄屋大工の技が息づく落ち着いた純和風客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">無垢材や畳の香りが心地よいプライベート空間。静けさの中で日常の喧騒を忘れ、ゆったりと寛げます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全国から厳選した旬の素材を活かしたこだわりの日本料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">出汁の引き方から器の選定まで徹底的に美を追求した会席。お部屋で気兼ねなく味わえる贅沢が魅力です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.46点。「貸切露天風呂からの景色が素晴らしく、お風呂巡りが楽しかった」「お部屋食の懐石料理がどれも美味しく、細やかな心遣いに感動した」と高い満足度。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 足柄下郡湯河原町宮上398</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥47,300〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>27959</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D27959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】湯河原温泉　ふきや の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 万葉公園・玄関テラス・不動滝＆幕山公園観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                リニューアルした万葉公園「湯河原惣湯 Books and Retreat」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                渓流沿いの森林浴と源泉掛け流し足湯、カフェが融合した人気スポット。木漏れ日の中で読書やカフェタイムを優雅に楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                落差15mの名瀑「不動滝」と茶屋の甘味
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                竹林に囲まれた清涼感あふれる名瀑。滝の左側には身代わり不動、右側には出世大黒尊が祀られ、パワースポットとしても知られています。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                幕山公園の湯河原梅林（2月〜3月）とハイキングコース
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                幕山の山肌を約4,000本の紅白梅が埋め尽くす「梅の宴」。山頂からは相模湾や真鶴半島を一望する絶景トレッキングが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              神奈川県湯河原町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「神奈川県湯河原町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で湯河原町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 東京駅からJR東海道線特急踊り子号で直通約75分
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から特急踊り子で湯河原駅まで直通約75分、快速アクティーや普通列車でも約90分。3年間の有効期間内で、梅の季節や新緑・紅葉に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                海石榴、山翠楼、ふきやなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-niseko-luxury-resort-powder-snow-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ニセコ 世界最高峰パウダースノー＆羊蹄山ビュー特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kamakura-shonan-ocean-history-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 鎌倉・湘南 七里ヶ浜オーシャンビュー＆古都の歴史特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
