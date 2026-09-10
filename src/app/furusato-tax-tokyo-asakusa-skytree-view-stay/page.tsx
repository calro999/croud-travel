import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【浅草・スカイツリー×ふるさと納税】雷門の情緒＆大迫力のタワービュー！下町名湯＆最新ホテル特集｜浅草ビューホテル・THE GATE HOTEL・御宿野乃',
  description: '江戸情緒と最先端のタワーが交差する東京屈指の観光地・東京都台東区「浅草」を楽天ふるさと納税でお得に満喫！東京スカイツリーと浅草寺を一望する「浅草ビューホテル アネックス 六区」、雷門徒歩2分の洗練デザイナーズ「THE GATE HOTEL 雷門 by HULIC」、全館畳敷き＆黒湯天然温泉の「天然温泉 凌雲の湯 御宿 野乃 浅草」を徹底比較。台東区トラベルクーポン活用術を網羅。',
  keywords: '浅草 ホテル ふるさと納税,浅草ビューホテル クーポン,THE GATE HOTEL 雷門 ふるさと納税,御宿野乃 浅草 宿泊,台東区 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-tokyo-asakusa-skytree-view-stay',
  },
  openGraph: {
    title: '【浅草・スカイツリー×ふるさと納税】雷門の情緒＆大迫力のタワービュー！下町名湯＆最新ホテル特集｜浅草ビューホテル・THE GATE HOTEL・御宿野乃',
    description: '江戸情緒と最先端のタワーが交差する東京屈指の観光地・東京都台東区「浅草」を楽天ふるさと納税でお得に満喫！東京スカイツリーと浅草寺を一望する「浅草ビューホテル アネックス 六区」、雷門徒歩2分の洗練デザイナーズ「THE GATE HOTEL 雷門 by HULIC」、全館畳敷き＆黒湯天然温泉の「天然温泉 凌雲の湯 御宿 野乃 浅草」を徹底比較。台東区トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-tokyo-asakusa-skytree-view-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【浅草・スカイツリー×ふるさと納税】雷門の情緒＆大迫力のタワービュー！下町名湯＆最新ホテル特集｜浅草ビューホテル・THE GATE HOTEL・御宿野乃',
    description: '江戸情緒と最先端のタワーが交差する東京屈指の観光地・東京都台東区「浅草」を楽天ふるさと納税でお得に満喫！東京スカイツリーと浅草寺を一望する「浅草ビューホテル アネックス 六区」、雷門徒歩2分の洗練デザイナーズ「THE GATE HOTEL 雷門 by HULIC」、全館畳敷き＆黒湯天然温泉の「天然温泉 凌雲の湯 御宿 野乃 浅草」を徹底比較。台東区トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-11T01:00:00+09:00',
    dateModified: '2026-09-11T01:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-tokyo-asakusa-skytree-view-stay',
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
        <span className="text-stone-700 font-medium truncate">【浅草・スカイツリー×ふるさと納税】雷門の情緒＆大迫力のタワービュー！下町名湯＆最新ホテル特集｜浅草ビューホテル・THE GATE HOTEL・御宿野乃</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>東京都台東区（浅草・上野） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【浅草・スカイツリー×ふるさと納税】雷門の情緒＆大迫力のタワービュー！下町名湯＆最新ホテル特集｜浅草ビューホテル・THE GATE HOTEL・御宿野乃
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          江戸情緒と最先端のタワーが交差する東京屈指の観光地・東京都台東区「浅草」を楽天ふるさと納税でお得に満喫！東京スカイツリーと浅草寺を一望する「浅草ビューホテル アネックス 六区」、雷門徒歩2分の洗練デザイナーズ「THE GATE HOTEL 雷門 by HULIC」、全館畳敷き＆黒湯天然温泉の「天然温泉 凌雲の湯 御宿 野乃 浅草」を徹底比較。台東区トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            朱塗りの雷門と仲見世通りの賑わい、天高くそびえる東京スカイツリー——下町の歴史浪漫と黒湯天然温泉に癒やされる東京エスケープ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東京都台東区、隅田川の西岸に広がる東京最古の寺院・浅草寺の門前町として栄えた「浅草」。大提灯が掲げられた「雷門」をくぐれば、日本最古の商店街の一つである「仲見世通り」が続き、人形焼やすりたて抹茶スイーツ、揚げまんじゅうなどの食べ歩きが楽しめます。背後には高さ634mの「東京スカイツリー」がそびえ立ち、伝統的な下町情緒と近未来的な都市景観が織りなす独特の景観は世界中の観光客を惹きつけてやみません。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            浅草滞在の魅力は、日中の賑わいが去った早朝や夜の静かな境内を独り占めできる散策体験と、スカイツリーが目の前に迫る絶景バルコニーやバーラウンジ。さらに近年は地下深くから湧き出す本格的な「黒湯天然温泉」を楽しめる宿も登場し、東京観光の疲れを名湯で癒やす贅沢が叶います。東京都台東区へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの絶景ホテルや和風温泉宿へお得に宿泊でき、特別な東京の休日が実現します。
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
                  <td className="p-3 font-bold text-amber-900">浅草ビューホテル　アネックス　六区</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">浅草六区の伝統文化を体験できる和モダンホテル！スカイツリービューと歌舞伎・芸能の空間</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ＴＨＥ　ＧＡＴＥ　ＨＯＴＥＬ（ザ・ゲートホテル）　雷門　ｂｙ　ＨＵＬＩＣ</td>
                  <td className="p-3 font-bold">★ 4.45</td>
                  <td className="p-3 text-stone-600">雷門まで徒歩2分！13階ロビーから浅草寺とスカイツリーを見晴らすデザイナーズホテルの傑作</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">天然温泉　凌雲の湯　御宿　野乃浅草（ドーミーイン・御宿野乃　ホテルズグループ）</td>
                  <td className="p-3 font-bold">★ 4.43</td>
                  <td className="p-3 text-stone-600">全館畳敷きの和風プレミアムホテル！ミネラル豊富な「黒湯」天然温泉大浴場と名物いくら丼</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/177986/177986.jpg"
                alt="浅草ビューホテル　アネックス　六区"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 92件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">東京都台東区（浅草・上野）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  浅草ビューホテル　アネックス　六区
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  浅草六区の伝統文化を体験できる和モダンホテル！スカイツリービューと歌舞伎・芸能の空間
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  浅草ビューホテル アネックス 六区 —— 浅草芸能の歴史を受け継ぐ新ホテル。スカイツリーの絶景と粋な和のおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 客室の窓から東京スカイツリーと浅草の街並みを一望
                    </h5>
                    <p className="text-stone-600 leading-relaxed">畳スペースを設けたモダン和室。夜にはライトアップされたスカイツリーの煌めきをプライベートに眺められます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 1階ロビーの舞台で上演される伝統芸能や浅草文化体験
                    </h5>
                    <p className="text-stone-600 leading-relaxed">和楽器演奏や活弁などのイベントを開催。ホテル内にいながら浅草の下町文化や芸能を肌で感じられます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 「ブロードウェイ六区」での浅草銘菓や焼きたてパンの朝食
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元の老舗パンや浅草の味覚を取り入れたこだわりブレックファスト。清々しい気分で浅草観光へ出発できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.50点、口コミ高評価。「スカイツリーの眺めが最高で、お部屋も和モダンで清潔」「浅草寺や花やしきへのアクセスが抜群でスタッフも親切」と好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>東京都 台東区浅草2丁目９番10号</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,310〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>177986</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D177986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】浅草ビューホテル　アネックス　六区 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/137085/137085.jpg"
                alt="ＴＨＥ　ＧＡＴＥ　ＨＯＴＥＬ（ザ・ゲートホテル）　雷門　ｂｙ　ＨＵＬＩＣ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.45（口コミ 1432件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">東京都台東区（浅草・上野）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ＴＨＥ　ＧＡＴＥ　ＨＯＴＥＬ（ザ・ゲートホテル）　雷門　ｂｙ　ＨＵＬＩＣ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  雷門まで徒歩2分！13階ロビーから浅草寺とスカイツリーを見晴らすデザイナーズホテルの傑作
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  THE GATE HOTEL 雷門 by HULIC —— 浅草の特等席。大人の隠れ家バーと絶景レストラン
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 13階フロントロビーとオープンエアテラスからの息をのむ大パノラマ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">チェックインの瞬間に出会うスカイツリーと浅草寺の絶景。宿泊者専用テラスで潮風を感じながら夜景を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 世界的デザイナーの内田繁氏が手がけた洗練の客室インテリア
                    </h5>
                    <p className="text-stone-600 leading-relaxed">スランバーランド社製高級ベッドと上質な調度品。大人の落ち着きある空間で贅沢な寛ぎを満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 評判の焼きたてエッグベネディクト＆搾りたてオレンジジュースの朝食
                    </h5>
                    <p className="text-stone-600 leading-relaxed">東京のホテル朝食ランキング上位の極上モーニング。絶景を眺めながら優雅な朝のひとときを過ごせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.45点、口コミ2500件超。「13階からのスカイツリーの眺めが圧巻」「朝食のエッグベネディクトが絶品で、雷門のすぐそばで観光に便利」と大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>東京都 台東区雷門2-16-11</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥11,921〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>137085</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D137085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ＴＨＥ　ＧＡＴＥ　ＨＯＴＥＬ（ザ・ゲートホテル）　雷門　ｂｙ　ＨＵＬＩＣ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/176643/176643.jpg"
                alt="天然温泉　凌雲の湯　御宿　野乃浅草（ドーミーイン・御宿野乃　ホテルズグループ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.43（口コミ 910件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">東京都台東区（浅草・上野）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉　凌雲の湯　御宿　野乃浅草（ドーミーイン・御宿野乃　ホテルズグループ）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全館畳敷きの和風プレミアムホテル！ミネラル豊富な「黒湯」天然温泉大浴場と名物いくら丼
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  天然温泉 凌雲の湯 御宿 野乃 浅草 —— 都会で温泉旅館気分。素足で寛ぐ畳空間と漆黒の自家源泉
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 靴を脱いで素足で過ごす全館畳敷きの心地よい和風空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">玄関で靴を預けて館内へ。日本の旅館の温もりとビジネスホテルの快適性が見事に融合しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地下から湧出するミネラル豊富な「黒湯」の天然温泉大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">美肌効果の高い濃い琥珀色の天然温泉。サウナや水風呂も完備し、本格的な温活とリフレッシュが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> いくら盛り放題の豪華海鮮丼や名物「夜鳴きそば」サービス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">朝食バイキングでのいくらや旬魚のセルフ海鮮丼。夜には無料で振る舞われる特製醤油ラーメンが大人気です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ2600件超。「黒湯の天然温泉がとても気持ちよくサウナも最高」「朝食のいくら丼が豪華で、全館畳敷きなのが落ち着く」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>東京都 台東区浅草2-7-20</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,970〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>176643</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D176643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】天然温泉　凌雲の湯　御宿　野乃浅草（ドーミーイン・御宿野乃　ホテルズグループ） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 浅草寺・仲見世通り＆かっぱ橋道具街・隅田公園観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                都内最古の寺院「浅草寺」の本堂参拝とおみくじ散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                本尊の聖観世音菩薩を祀る名刹。夜のライトアップされた五重塔や宝蔵門の静けさは、宿泊者だけが出会える幻想的な風景です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                仲見世通り＆伝法院通りの下町グルメ食べ歩き
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                揚げまんじゅう、きびだんご、メロンパン、芋ようかんなど名物スイーツが勢揃い。着物をレンタルして散策するのも人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                隅田川テラス散策と水上バス「ヒミコ」でのクルーズ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                隅田川沿いの爽やかな遊歩道。漫画家・松本零士氏デザインの近未来水上バスに乗って、お台場や浜離宮へのリバークルーズが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              東京都台東区ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「東京都台東区」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で台東区を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 地下鉄銀座線・都営浅草線・つくばEXPで浅草へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                上野駅から銀座線でわずか5分、羽田・成田空港からも都営浅草線直通で便利。3年間の有効期間内で、浅草三社祭や隅田川花火大会に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                浅草ビューホテル、THE GATE HOTEL 雷門、御宿野乃浅草などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-nagoya-luxury-gourmet-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 名古屋 駅直結スカイビュー＆最新ラグジュアリー特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shodoshima-olive-island-onsen-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 小豆島 エンジェルロード＆オリーブの島・絶景温泉特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
