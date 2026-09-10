import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【白骨温泉×ふるさと納税】乳白色のにごり湯秘湯＆信州牛会席！深山幽谷の極上湯治宿ガイド｜齋藤旅館・小梨の湯笹屋・丸永旅館',
  description: '「三日入れば三年風邪をひかない」と謳われる信州屈指の白濁秘湯・長野県白骨温泉を楽天ふるさと納税でお得に巡る！享保年間創業の老舗名門「湯元齋藤旅館」、白樺林に佇む完全貸切野天の宿「小梨の湯 笹屋」、桂の巨木と素朴な温もりの「かつらの湯 丸永旅館」を徹底解説。松本市トラベルクーポン活用術を網羅。',
  keywords: '白骨温泉 ふるさと納税,白骨温泉 旅館 おすすめ,湯元齋藤旅館 ふるさと納税,小梨の湯 笹屋 クーポン,松本市 ふるさと納税 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-shirahone-onsen-milky-secret-stay',
  },
  openGraph: {
    title: '【白骨温泉×ふるさと納税】乳白色のにごり湯秘湯＆信州牛会席！深山幽谷の極上湯治宿ガイド｜齋藤旅館・小梨の湯笹屋・丸永旅館',
    description: '「三日入れば三年風邪をひかない」と謳われる信州屈指の白濁秘湯・長野県白骨温泉を楽天ふるさと納税でお得に巡る！享保年間創業の老舗名門「湯元齋藤旅館」、白樺林に佇む完全貸切野天の宿「小梨の湯 笹屋」、桂の巨木と素朴な温もりの「かつらの湯 丸永旅館」を徹底解説。松本市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-shirahone-onsen-milky-secret-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【白骨温泉×ふるさと納税】乳白色のにごり湯秘湯＆信州牛会席！深山幽谷の極上湯治宿ガイド｜齋藤旅館・小梨の湯笹屋・丸永旅館',
    description: '「三日入れば三年風邪をひかない」と謳われる信州屈指の白濁秘湯・長野県白骨温泉を楽天ふるさと納税でお得に巡る！享保年間創業の老舗名門「湯元齋藤旅館」、白樺林に佇む完全貸切野天の宿「小梨の湯 笹屋」、桂の巨木と素朴な温もりの「かつらの湯 丸永旅館」を徹底解説。松本市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T16:25:00+09:00',
    dateModified: '2026-09-10T16:25:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-shirahone-onsen-milky-secret-stay',
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
        <span className="text-stone-700 font-medium truncate">【白骨温泉×ふるさと納税】乳白色のにごり湯秘湯＆信州牛会席！深山幽谷の極上湯治宿ガイド｜齋藤旅館・小梨の湯笹屋・丸永旅館</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>長野県松本市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【白骨温泉×ふるさと納税】乳白色のにごり湯秘湯＆信州牛会席！深山幽谷の極上湯治宿ガイド｜齋藤旅館・小梨の湯笹屋・丸永旅館
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          「三日入れば三年風邪をひかない」と謳われる信州屈指の白濁秘湯・長野県白骨温泉を楽天ふるさと納税でお得に巡る！享保年間創業の老舗名門「湯元齋藤旅館」、白樺林に佇む完全貸切野天の宿「小梨の湯 笹屋」、桂の巨木と素朴な温もりの「かつらの湯 丸永旅館」を徹底解説。松本市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            三日入れば三年風邪をひかない——北アルプスの懐に湧く乳白色の霊泉と信州深山の美味を味わう秘湯旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            長野県松本市安曇、北アルプス乗鞍岳の東山麓、標高約1,400メートルの深い渓谷に佇む白骨（しらほね）温泉。鎌倉時代に湧出したと伝えられ、戦国時代には武田信玄が松本城主の鉱山採掘員たちの湯治場として保護した歴史を持ちます。白骨温泉の最大の特徴は、空気に触れることで湧出時の透明から神秘的な乳白色へと変化する弱酸性の含硫黄炭酸水素塩温泉。湯船の縁には長年の温泉成分が石灰華（湯の花）となって白く固まり、まさに「白い骨」のように見えることがその名の由来とも言われています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            湯に浸かれば、ふわりと香る硫黄の匂いと柔らかな肌触りが全身を包み込み、体の芯から温まって疲労やストレスを優しく洗い流してくれます。夕食には信州プレミアム牛の朴葉味噌焼きや、澄んだ清流で育った岩魚の塩焼き、山の恵みたっぷりの山菜料理など、信州深山ならではの素朴で滋味あふれる料理が並びます。長野県松本市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの白濁名湯宿へお得に宿泊でき、本物の秘湯体験が叶います。
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
                  <td className="p-3 font-bold text-amber-900">白骨温泉　湯元齋藤旅館</td>
                  <td className="p-3 font-bold">★ 4.63</td>
                  <td className="p-3 text-stone-600">享保年間創業・文人墨客が愛した老舗名門！自家源泉かけ流しの白濁湯と伝統の信州会席</td>
                  <td className="p-3 text-stone-600">贅沢な記念日・ご褒美ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">白骨温泉　小梨の湯　笹屋</td>
                  <td className="p-3 font-bold">★ 4.68</td>
                  <td className="p-3 text-stone-600">白樺林に囲まれた全八室の隠れ家！完全無料で楽しめる貸切野天風呂と囲炉裏炭火料理</td>
                  <td className="p-3 text-stone-600">落ち着いた大人の癒やし旅</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">白骨温泉　かつらの湯　丸永旅館</td>
                  <td className="p-3 font-bold">★ 4.41</td>
                  <td className="p-3 text-stone-600">樹齢数百年の桂の木の下に湧く混浴露天！素朴な信州の温もりと飲泉もできる名湯の宿</td>
                  <td className="p-3 text-stone-600">家族・グループでの満足旅行</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/32100/32100.jpg"
                alt="白骨温泉　湯元齋藤旅館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.63（口コミ 849件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">長野県松本市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  白骨温泉　湯元齋藤旅館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  享保年間創業・文人墨客が愛した老舗名門！自家源泉かけ流しの白濁湯と伝統の信州会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  白骨温泉 湯元齋藤旅館 —— 創業三百年の格式と美学。大自然の渓流を望む野天風呂と極上の安らぎ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 自然湧出する自家源泉を惜しみなく注ぐ大浴場と野天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">敷地内から自噴する良質な源泉を100%掛け流しで使用。渓谷の緑や雪景色を眺めながら入る野天風呂「鬼角の湯」は、乳白色の湯と自然が織りなす絶景の湯浴み場です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 中里介山や若山牧水ら文豪が愛した歴史と格式の空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">中里介山が名作『大菩薩峠』を執筆したことでも知られる老舗旅館。伝統の木造建築の趣を現代の快適性と融合させた客室で、静寂の深山ステイを味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 信州プレミアム牛や清流イワナを味わう本格山里会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">長野県産の厳選食材をふんだんに取り入れた季節の会席。香ばしく焼き上げた岩魚や信州牛の陶板焼きなど、滋味豊かな山の幸に舌鼓を打てます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.63点、口コミ800件超。「乳白色のお湯が本当に素晴らしく、何度も入浴した」「スタッフの接客が洗練されており、食事も部屋もすべてが最高峰」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>長野県 松本市安曇白骨温泉4195</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥20,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>32100</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D32100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】白骨温泉　湯元齋藤旅館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/141241/141241.jpg"
                alt="白骨温泉　小梨の湯　笹屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.68（口コミ 127件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">長野県松本市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  白骨温泉　小梨の湯　笹屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  白樺林に囲まれた全八室の隠れ家！完全無料で楽しめる貸切野天風呂と囲炉裏炭火料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  白骨温泉 小梨の湯 笹屋 —— 白樺の静寂に抱かれる一軒宿。湯の華舞う乳白色の貸切露天風呂と炭火の温もり
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 白樺林の借景が美しい完全無料の貸切野天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">木立の中に佇む貸切野天風呂は空いていれば何度でも自由に利用可能。乳白色の湯に浸かりながら、そよぐ白樺の葉音と野鳥のさえずりに耳を澄ます極上のプライベート時間。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 囲炉裏を囲んで味わう香ばしい岩魚炭火焼きと信州牛
                    </h5>
                    <p className="text-stone-600 leading-relaxed">食事処の囲炉裏でじっくり炭火で焼き上げる岩魚の塩焼きや、香ばしい朴葉味噌焼き。地元農家の無農薬野菜を使った心のこもった料理が五臓六腑に染み渡ります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> わずか八室の静けさを守る大人の隠れ家空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">木造平屋の館内は木の温もりにあふれ、日常の喧騒を完全に遮断。過度な装飾のない素朴で温かいおもてなしが、心からのリフレッシュをもたらします。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.75点の高得点。「貸切露天風呂の風情とお湯の良さが感動的」「囲炉裏料理がどれも絶品で、静かに温泉を堪能したい人には最高の宿」とリピーターが絶えません。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>長野県 松本市安曇4182-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥19,800〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>141241</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D141241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】白骨温泉　小梨の湯　笹屋 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/107804/107804.jpg"
                alt="白骨温泉　かつらの湯　丸永旅館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.41（口コミ 411件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">長野県松本市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  白骨温泉　かつらの湯　丸永旅館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  樹齢数百年の桂の木の下に湧く混浴露天！素朴な信州の温もりと飲泉もできる名湯の宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  白骨温泉 かつらの湯 丸永旅館 —— 秘湯の風情を色濃く残す木造旅館。湧きたて乳白色の混浴露天と湯治の温もり
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 天然記念物の巨木の下に佇む野趣あふれる露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">樹齢数百年の桂の木に抱かれるように作られた露天風呂。ぬるめと適温の二つの湯船があり、乳白色の湯の花が舞う極上の湯にゆっくりと長湯できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 胃腸に良いとされる白骨の湯の飲泉体験
                    </h5>
                    <p className="text-stone-600 leading-relaxed">館内には飲泉所が設けられており、胃腸病に効能があると伝わる白骨温泉を体の中から取り入れることができます。温泉粥など朝食の演出も評判です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 素朴で温かな信州の手作り山里郷土料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">山菜の天ぷら、川魚の甘露煮、信州そばなど、信州の家庭の温もりを感じさせる手作り料理。どこか懐かしく温かいおもてなしに心が和みます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.50点、口コミ500件超。「桂の木の下のお風呂の雰囲気が最高で、白濁したお湯も素晴らしい」「家庭的なおもてなしと美味しい郷土料理に癒やされた」と秘湯ファンから愛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>長野県 松本市安曇白骨温泉4185-2</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥17,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>107804</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D107804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】白骨温泉　かつらの湯　丸永旅館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 白骨温泉・上高地＆乗鞍高原の大自然巡りガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                上高地（大正池〜河童橋〜明神池）のトレッキング
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                白骨温泉から車やシャトルバスで上高地へ直行可能。穂高連峰の険しい岩肌と梓川のエメラルドグリーンの清流が織りなす日本屈指の山岳景勝地で、清涼なハイキングを楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                乗鞍高原・善五郎の滝と一の瀬園地
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                乗鞍岳の山麓に広がる広大な高原地帯。轟音とともに落ちる名瀑「善五郎の滝」や、白樺林と水芭蕉が美しい一の瀬園地など、四季折々の高原風景が広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                白骨温泉名物「温泉粥」と地酒の味わい
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                弱炭酸水素塩泉の温泉水で炊き上げた温泉粥は、淡い青緑色を帯びてとろけるような滑らかさ。信州の辛口地酒とともに味わう朝のひとときは格別です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              長野県松本市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「長野県松本市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で松本市を選び、寄付額の30%相当のトラベルクーポンを返礼品として申し込みます。楽天ポイントも通常通り付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 中央道・長野道またはJR特急あずさで松本経由の旅を計画
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新宿から特急あずさで松本駅へ、そこから松本電鉄上高地線とバスで白骨温泉へ。3年間の有効期間内で、新緑や紅葉、冬の雪見風呂に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポンを適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                湯元齋藤旅館、小梨の湯笹屋、かつらの湯丸永旅館などの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅割引されます。
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
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-hakone-sengokuhara-pampas-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根仙石原温泉 すすき草原＆美肌にごり湯特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
