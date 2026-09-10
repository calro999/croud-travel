import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【宮島・厳島神社×ふるさと納税】世界遺産の大鳥居と潮湯温泉！瀬戸内名物牡蠣・穴子会席特集｜錦水館・岩惣・有もと',
  description: '日本三景・世界文化遺産に輝く神の島・広島県廿日市市「宮島（厳島）」を楽天ふるさと納税でお得に贅沢滞在！宮島唯一の自家源泉潮湯温泉を誇る「錦水館」、安政元年創業・皇室や文豪も愛した名門「みやじまの宿 岩惣」、厳島神社徒歩3分・創業三百余年の老舗「宮島グランドホテル 有もと」を徹底比較。廿日市市トラベルクーポン活用術を網羅。',
  keywords: '宮島 ふるさと納税,錦水館 クーポン 宮島,岩惣 ふるさと納税 宿泊,宮島ホテル有もと ふるさと納税,廿日市市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-miyajima-itsukushima-shrine-luxury-stay',
  },
  openGraph: {
    title: '【宮島・厳島神社×ふるさと納税】世界遺産の大鳥居と潮湯温泉！瀬戸内名物牡蠣・穴子会席特集｜錦水館・岩惣・有もと',
    description: '日本三景・世界文化遺産に輝く神の島・広島県廿日市市「宮島（厳島）」を楽天ふるさと納税でお得に贅沢滞在！宮島唯一の自家源泉潮湯温泉を誇る「錦水館」、安政元年創業・皇室や文豪も愛した名門「みやじまの宿 岩惣」、厳島神社徒歩3分・創業三百余年の老舗「宮島グランドホテル 有もと」を徹底比較。廿日市市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-miyajima-itsukushima-shrine-luxury-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【宮島・厳島神社×ふるさと納税】世界遺産の大鳥居と潮湯温泉！瀬戸内名物牡蠣・穴子会席特集｜錦水館・岩惣・有もと',
    description: '日本三景・世界文化遺産に輝く神の島・広島県廿日市市「宮島（厳島）」を楽天ふるさと納税でお得に贅沢滞在！宮島唯一の自家源泉潮湯温泉を誇る「錦水館」、安政元年創業・皇室や文豪も愛した名門「みやじまの宿 岩惣」、厳島神社徒歩3分・創業三百余年の老舗「宮島グランドホテル 有もと」を徹底比較。廿日市市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T18:00:00+09:00',
    dateModified: '2026-09-10T18:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-miyajima-itsukushima-shrine-luxury-stay',
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
        <span className="text-stone-700 font-medium truncate">【宮島・厳島神社×ふるさと納税】世界遺産の大鳥居と潮湯温泉！瀬戸内名物牡蠣・穴子会席特集｜錦水館・岩惣・有もと</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>広島県廿日市市（宮島） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【宮島・厳島神社×ふるさと納税】世界遺産の大鳥居と潮湯温泉！瀬戸内名物牡蠣・穴子会席特集｜錦水館・岩惣・有もと
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本三景・世界文化遺産に輝く神の島・広島県廿日市市「宮島（厳島）」を楽天ふるさと納税でお得に贅沢滞在！宮島唯一の自家源泉潮湯温泉を誇る「錦水館」、安政元年創業・皇室や文豪も愛した名門「みやじまの宿 岩惣」、厳島神社徒歩3分・創業三百余年の老舗「宮島グランドホテル 有もと」を徹底比較。廿日市市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            海に浮かぶ朱塗りの大鳥居と弥山の原生林——神々が宿る世界遺産の島で味わう宮島潮湯温泉と瀬戸内美味尽くし
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            広島湾の南西部に浮かび、松島・天橋立とともに「日本三景」の一つに数えられる世界遺産の島・宮島（厳島）。島全体が御神体として崇められ、推古元年に創建、平清盛によって現在の海上に浮かぶ壮麗な寝殿造りへと整えられた「厳島神社」は、潮の満ち引きによって刻一刻と表情を変える世界屈指の名建築です。満潮時には海面に朱塗りの社殿と大鳥居が浮かび上がり、干潮時には鳥居の足元まで歩いて渡ることができます。島内には人懐っこい鹿たちが暮らし、背後には国の天然記念物「弥山（みせん）原始林」の神聖な緑が広がっています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            宮島観光の真骨頂は、最終フェリーが出た後の「島に泊まる旅」にあります。日帰りの観光客が去った後の夜、美しくライトアップされた大鳥居や廻廊の静寂は宿泊者だけが出会える神秘の光景。早朝には澄み切った朝の空気の中で清々しい神社参拝が叶います。夕食には名物の焼き牡蠣やカキフライ、甘辛いタレが香ばしい穴子飯、広島牛ステーキなど、瀬戸内海の旬の恵みが膳を彩ります。広島県廿日市市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗旅館や海沿いの上質宿へお得に宿泊でき、心洗われる至福の宮島ステイが叶います。
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
                  <td className="p-3 font-bold text-amber-900">宮島潮湯温泉　錦水館</td>
                  <td className="p-3 font-bold">★ 4.66</td>
                  <td className="p-3 text-stone-600">宮島で唯一湧出する自家源泉「宮島潮湯温泉」！海を望むテラス付きスイートと瀬戸内旬会席</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">みやじまの宿　岩惣</td>
                  <td className="p-3 font-bold">★ 4.45</td>
                  <td className="p-3 text-stone-600">安政元年創業・皇室や文豪が愛した宮島を代表する歴史名旅館！もみじ谷の清流に抱かれる離れ</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">宮島グランドホテル　有もと</td>
                  <td className="p-3 font-bold">★ 4.58</td>
                  <td className="p-3 text-stone-600">厳島神社まで徒歩３分！創業三百余年の歴史と大浴場・露天風呂。旬の瀬戸内会席とおもてなし</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/6271/6271.jpg"
                alt="宮島潮湯温泉　錦水館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.66（口コミ 1053件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">広島県廿日市市（宮島）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  宮島潮湯温泉　錦水館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  宮島で唯一湧出する自家源泉「宮島潮湯温泉」！海を望むテラス付きスイートと瀬戸内旬会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  宮島潮湯温泉 錦水館 —— 創業百余年・厳島神社へ徒歩すぐ。宮島唯一の天然温泉と大鳥居を望む展望スイート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地下深くから湧き出す宮島島内唯一の天然温泉「潮湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海水を含んだミネラル豊富な塩化物泉。体の芯から温まり、冷え性や疲労回復に抜群の効果をもたらす美肌の湯です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 瀬戸内海や大鳥居を望むテラス付きスイートルーム
                    </h5>
                    <p className="text-stone-600 leading-relaxed">畳敷きに快適なベッドを配した和モダン空間。夜にはライトアップされた宮島の海景をプライベートに眺められます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 広島牛や宮島産牡蠣・穴子をふんだんに味わう特選会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">瀬戸内の新鮮な魚介と地元食材を活かした繊細な創作料理。器や演出にも趣向を凝らした極上の夕食を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.66点、口コミ2600件超。「宮島で唯一の天然温泉がとても気持ち良かった」「夜の大鳥居のライトアップを見に行くのに最高の立地とおもてなし」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>広島県 廿日市市宮島町1133</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥29,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>6271</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D6271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】宮島潮湯温泉　錦水館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/145390/145390.jpg"
                alt="みやじまの宿　岩惣"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.45（口コミ 156件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">広島県廿日市市（宮島）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  みやじまの宿　岩惣
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  安政元年創業・皇室や文豪が愛した宮島を代表する歴史名旅館！もみじ谷の清流に抱かれる離れ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  みやじまの宿 岩惣 —— もみじ谷公園の自然と一体化する数寄屋建築。若宮温泉のいで湯と伝統の京風会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 名勝もみじ谷公園の渓流沿いに佇む安政元年（1854年）創業の老舗
                    </h5>
                    <p className="text-stone-600 leading-relaxed">昭和天皇をはじめ皇族や歴代首相、文豪が宿泊した由緒ある宿。太鼓橋「もみじ橋」のすぐそばで四季の風情に包まれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 紅葉谷の原生林から湧き出す天然の「若宮温泉」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">豊かな緑とせせらぎに包まれた大浴場。なめらかな湯ざわりで、歩き疲れた体を優しく包み込みます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伝統の出汁と瀬戸内の旬魚が織りなす本格懐石料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">素材の味を極限まで引き出した滋味あふれる料理。数寄屋造りの個室や客室で静かに至福の味覚を楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.45点。「歴史の重みを感じる佇まいともみじ谷の緑が素晴らしかった」「接客のきめ細やかさと静寂な空間は宮島屈指」と格別の評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>広島県 廿日市市宮島町もみじ谷</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥29,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>145390</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D145390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】みやじまの宿　岩惣 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg"
                alt="宮島グランドホテル　有もと"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.58（口コミ 1281件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">広島県廿日市市（宮島）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  宮島グランドホテル　有もと
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  厳島神社まで徒歩３分！創業三百余年の歴史と大浴場・露天風呂。旬の瀬戸内会席とおもてなし
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  宮島グランドホテル 有もと —— 厳島神社の社殿へ一番近い格式高き宿。数寄屋モダン空間と瀬戸内の美味
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 厳島神社の参道・廻廊まで徒歩わずか3分の抜群のロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">早朝の静かな開門参拝や夜のライトアップ散策にこれ以上ない好立地。宮島の歴史と信仰を身近に体感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 木の香り漂う大浴場と庭園露天風呂でリフレッシュ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ゆったりと足を伸ばせる広々とした大浴場。旅の心地よい疲れを癒やし、湯上がり処でもくつろげます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 瀬戸内の新鮮な小魚や牡蠣・広島牛を味わう伝統会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が腕を振るう四季折々の会席料理。彩り豊かな前菜やお造り、焼き物など目にも鮮やかな料理が並びます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.58点、口コミ1500件超。「神社まで本当に近くて夜の散歩が最高だった」「お部屋が広くて綺麗、お料理も牡蠣やお肉がとても美味しかった」と大好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>広島県 廿日市市宮島町南町364</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,200〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>18848</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18848"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】宮島グランドホテル　有もと の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 宮島・厳島神社・大鳥居＆弥山ロープウェイ観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                世界文化遺産「厳島神社」の満潮・干潮拝観と大鳥居
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                海上に浮かぶ国宝の廻廊や能舞台。満潮時の神秘的な水上社殿と、干潮時に大鳥居の真下まで歩いて触れる体験の双方を宿泊して楽しむのが醍醐味です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                宮島ロープウェイで行く霊峰「弥山（みせん）」山頂展望台
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                弘法大師空海が開山したとされる聖地・弥山。ロープウェイと登山道を登れば、瀬戸内海の多島美を360度見晴らす絶景パノラマが広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                表参道商店街での食べ歩き（揚げもみじ・焼き牡蠣・穴子飯）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                宮島フェリーターミナルから神社へ続く活気ある商店街。「揚げもみじ」や出来立てのもみじ饅頭、香ばしい焼き牡蠣の食べ歩きが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              広島県廿日市市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「広島県廿日市市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で廿日市市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 広島駅からJR山陽本線で宮島口駅へ、フェリーで約10分
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                広島駅からJRで宮島口まで約28分、そこからJR西日本宮島フェリーまたは松大汽船で約10分。3年間の有効期間内で、紅葉や新緑、桜の季節に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                錦水館、岩惣、有もとなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-shirahama-onsen-ocean-adventure-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 南紀白浜温泉 白良浜オーシャンビュー＆アドベンチャーワールド特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-nozawa-onsen-sotoyu-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 野沢温泉 十三の外湯めぐり＆源泉麻釜・信州郷土料理特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
