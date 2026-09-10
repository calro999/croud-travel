import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【水上温泉郷×ふるさと納税】谷川岳の絶景＆利根川渓流露天！上州牛と名湯満喫特集｜別邸仙寿庵・松乃井・坐山みなかみ',
  description: '利根川源流の大自然と谷川岳の秀峰に抱かれる群馬県みなかみ町「水上温泉郷」を楽天ふるさと納税でお得に贅沢ステイ！世界最高峰ルレ・エ・シャトー加盟の「別邸 仙寿庵」、四つの自家源泉と豪華バイキングの「大江戸温泉物語Premium 松乃井」、利根川を望む十六の湯船を誇る「坐山 みなかみ（旧水上館）」を徹底比較。みなかみ町トラベルクーポン活用術を網羅。',
  keywords: '水上温泉 ふるさと納税,別邸仙寿庵 クーポン みなかみ,松乃井 水上温泉 ふるさと納税,坐山みなかみ 宿泊,みなかみ町 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-minakami-onsen-tanigawadake-stay',
  },
  openGraph: {
    title: '【水上温泉郷×ふるさと納税】谷川岳の絶景＆利根川渓流露天！上州牛と名湯満喫特集｜別邸仙寿庵・松乃井・坐山みなかみ',
    description: '利根川源流の大自然と谷川岳の秀峰に抱かれる群馬県みなかみ町「水上温泉郷」を楽天ふるさと納税でお得に贅沢ステイ！世界最高峰ルレ・エ・シャトー加盟の「別邸 仙寿庵」、四つの自家源泉と豪華バイキングの「大江戸温泉物語Premium 松乃井」、利根川を望む十六の湯船を誇る「坐山 みなかみ（旧水上館）」を徹底比較。みなかみ町トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-minakami-onsen-tanigawadake-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【水上温泉郷×ふるさと納税】谷川岳の絶景＆利根川渓流露天！上州牛と名湯満喫特集｜別邸仙寿庵・松乃井・坐山みなかみ',
    description: '利根川源流の大自然と谷川岳の秀峰に抱かれる群馬県みなかみ町「水上温泉郷」を楽天ふるさと納税でお得に贅沢ステイ！世界最高峰ルレ・エ・シャトー加盟の「別邸 仙寿庵」、四つの自家源泉と豪華バイキングの「大江戸温泉物語Premium 松乃井」、利根川を望む十六の湯船を誇る「坐山 みなかみ（旧水上館）」を徹底比較。みなかみ町トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-minakami-onsen-tanigawadake-stay',
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
        <span className="text-stone-700 font-medium truncate">【水上温泉郷×ふるさと納税】谷川岳の絶景＆利根川渓流露天！上州牛と名湯満喫特集｜別邸仙寿庵・松乃井・坐山みなかみ</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>群馬県みなかみ町（水上温泉郷） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【水上温泉郷×ふるさと納税】谷川岳の絶景＆利根川渓流露天！上州牛と名湯満喫特集｜別邸仙寿庵・松乃井・坐山みなかみ
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          利根川源流の大自然と谷川岳の秀峰に抱かれる群馬県みなかみ町「水上温泉郷」を楽天ふるさと納税でお得に贅沢ステイ！世界最高峰ルレ・エ・シャトー加盟の「別邸 仙寿庵」、四つの自家源泉と豪華バイキングの「大江戸温泉物語Premium 松乃井」、利根川を望む十六の湯船を誇る「坐山 みなかみ（旧水上館）」を徹底比較。みなかみ町トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            谷川岳の雄姿と利根川の清らかな渓流——豊富な自家源泉が湧く奥利根の名湯郷で味わう上州牛と山の恵み
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            群馬県利根郡みなかみ町、三国山脈と名峰・谷川岳（たにがわだけ）の南麓に広がる水上（みなかみ）温泉郷。利根川の最上流部に位置し、水上温泉を中心に谷川温泉、宝川温泉、法師温泉など個性豊かな湯が点在する「みなかみ十八湯」の総称です。上越新幹線の開通により東京駅から最速約66分で上毛高原駅へアクセスできる利便性を持ちながら、一歩足を踏み入れれば手付かずの大自然とダイナミックな渓谷美が広がっています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            水上温泉郷の大きな魅力は、利根川の渓流を眼下に見下ろす野趣あふれる露天風呂と、四季折々のアウトドア体験（ラフティング・キャニオニング・スキー・トレッキング）。夕食には群馬県が誇るブランド牛「上州牛」のすき焼きやステーキ、清流が育む岩魚や山女魚、採れたての舞茸や高原野菜など、山里の豊かな味覚を堪能できます。群馬県みなかみ町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの最高級旅館へお得に宿泊でき、心洗われる大自然のリトリートが叶います。
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
                  <td className="p-3 font-bold text-amber-900">谷川温泉　別邸　仙寿庵（せんじゅあん）</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">ルレ・エ・シャトー加盟の世界が認めた至高宿！全室に谷川岳を望む源泉かけ流し露天風呂を完備</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">大江戸温泉物語Ｐｒｅｍｉｕｍ　松乃井（旧：水上温泉　源泉湯の宿　松乃井）（２０２６年８月７日開業）</td>
                  <td className="p-3 font-bold">★ 4.09</td>
                  <td className="p-3 text-stone-600">四つの自家源泉と約三万坪の広大な日本庭園！充実の湯めぐりと豪華ライブキッチンバイキング</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">坐山　みなかみ（旧：水上館）</td>
                  <td className="p-3 font-bold">★ 4.08</td>
                  <td className="p-3 text-stone-600">利根川渓流の絶景を望む十六の多彩な湯船！大自然のいで湯と上州牛会席を味わう老舗宿</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28063/28063.jpg"
                alt="谷川温泉　別邸　仙寿庵（せんじゅあん）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 278件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県みなかみ町（水上温泉郷）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  谷川温泉　別邸　仙寿庵（せんじゅあん）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ルレ・エ・シャトー加盟の世界が認めた至高宿！全室に谷川岳を望む源泉かけ流し露天風呂を完備
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  谷川温泉 別邸 仙寿庵 —— 建築美と名峰の借景。全室露天風呂付き客室で過ごす究極のプライベートステイ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> すべての客室に谷川岳のパノラマを望む源泉掛け流し露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">名峰・谷川岳を正面に望む特等席。木や石を贅沢に使った広々とした客室で、静かに名湯に浸かる至福を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 美術館のように美しい曲面廊下と伝統工芸「組子」の現代建築美
                    </h5>
                    <p className="text-stone-600 leading-relaxed">高さ8mのガラス張り曲面廊下から眺める庭園。随所に職人技が光るスタイリッシュな和モダンリゾートです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州牛や日本海の鮮魚を取り入れた極上の山里創作懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">素材本来の旨味を最大限に引き出した料理。美しい器と洗練された盛り付けに五感が満たされます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.50点、国内外の賞を多数受賞。「谷川岳を望むお部屋の露天風呂と建築の美しさが別格」「接客、お料理、アメニティすべてが一流の最高峰旅館」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 利根郡みなかみ町谷川西平614</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥53,400〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>28063</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】谷川温泉　別邸　仙寿庵（せんじゅあん） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/9290/9290.jpg"
                alt="大江戸温泉物語Ｐｒｅｍｉｕｍ　松乃井（旧：水上温泉　源泉湯の宿　松乃井）（２０２６年８月７日開業）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.09（口コミ 3774件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県みなかみ町（水上温泉郷）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  大江戸温泉物語Ｐｒｅｍｉｕｍ　松乃井（旧：水上温泉　源泉湯の宿　松乃井）（２０２６年８月７日開業）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  四つの自家源泉と約三万坪の広大な日本庭園！充実の湯めぐりと豪華ライブキッチンバイキング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  大江戸温泉物語Premium 松乃井 —— 利根川沿いの一大温泉リゾート。四つの自家源泉かけ流しと贅沢グルメ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内から自噴する良質な4つの自家源泉を引く湯船の数々
                    </h5>
                    <p className="text-stone-600 leading-relaxed">「螢の湯」「草津の湯」「火里の湯」など個性豊かな露天風呂と大浴場。肌触りの優しい単純温泉を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 四季折々の花木や清流が彩る約三万坪の壮大な日本庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広大な敷地内をゆったり散策。夜にはライトアップされた幻想的な庭園風景を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> シェフが目の前で焼き上げるステーキや新鮮握り寿司バイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の旬食材や出来立て料理が並ぶ豪華ビュッフェ。家族連れからカップルまで誰もが大満足の食のエンターテインメントです。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.09点、口コミ4700件超。「四つの源泉掛け流しのお風呂が最高で庭園も広い」「リニューアルしてプレミアムになり、バイキングもお部屋も大満足」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 利根郡みなかみ町湯原551</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,500〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>9290</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】大江戸温泉物語Ｐｒｅｍｉｕｍ　松乃井（旧：水上温泉　源泉湯の宿　松乃井）（２０２６年８月７日開業） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28258/28258.jpg"
                alt="坐山　みなかみ（旧：水上館）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.08（口コミ 2423件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県みなかみ町（水上温泉郷）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  坐山　みなかみ（旧：水上館）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  利根川渓流の絶景を望む十六の多彩な湯船！大自然のいで湯と上州牛会席を味わう老舗宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  坐山 みなかみ —— 利根川の瀬音に耳を傾ける渓流の宿。十六の湯船をめぐる湯三昧と四季の上州美味
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 利根川渓流に面した大浴場や露天風呂など多彩な16の湯船
                    </h5>
                    <p className="text-stone-600 leading-relaxed">「牧水の湯」「水晶の湯」「奥利根八景の湯」など湯めぐりを満喫。川風を感じながらの渓流露天風呂は格別です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室から利根川の渓谷美や奥利根の山並みを一望
                    </h5>
                    <p className="text-stone-600 leading-relaxed">四季折々に色づく渓谷のパノラマ。窓を開ければ心地よい川のせせらぎが部屋いっぱいに響き渡ります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州牛の陶板焼きや地場産の採れたてきのこ・山菜会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">群馬の豊かな大地の恵みをふんだんに取り入れた郷土会席。素材の旨味を活かした温かい料理が評判です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.08点、口コミ2500件超。「利根川のすぐそばにある露天風呂が開放感抜群」「館内のお風呂がとにかくたくさんあって飽きない」と温泉好きに人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 利根郡みなかみ町小日向573</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>28258</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】坐山　みなかみ（旧：水上館） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 谷川岳ロープウェイ・一ノ倉沢・諏訪峡＆アウトドアアクティビティ観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                谷川岳ロープウェイ＆天神峠展望台からの大パノラマ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                標高1,319mの天神平まで約15分の空中散歩。さらにリフトで天神峠へ登れば、谷川岳連峰の岩壁と雲海のダイナミックな景観が広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                利根川の渓谷美を巡る「諏訪峡遊歩道」と笹笛橋
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                奇岩や巨岩が連なる水上温泉街随一の名勝。笹笛橋からの谷川岳の眺望や、紅葉シーズンの渓谷トレッキングが格別です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                利根川源流ラフティング＆キャニオニング（グリーンシーズン）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                日本屈指の激流ラフティングスポット。春の雪解け大増水ラフティングから夏のファミリーキャニオニングまで、大自然のアドベンチャーを体感できます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              群馬県みなかみ町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「群馬県みなかみ町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税でみなかみ町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 上越新幹線上毛高原駅またはJR上越線水上駅へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から上越新幹線で上毛高原駅まで最速約66分、駅から路線バスや無料送迎で約20分。3年間の有効期間内で、スキーや紅葉、新緑に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                別邸仙寿庵、松乃井、坐山みなかみなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
