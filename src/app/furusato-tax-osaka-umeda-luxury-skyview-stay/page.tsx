import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【大阪・梅田×ふるさと納税】JR大阪駅直結＆地上摩天楼夜景！天下の台所美食特集｜リッツカールトン大阪・インターコンチネンタル・ヒルトン',
  description: '西日本最大のメガターミナル・大阪府大阪市北区「梅田（キタ）」を楽天ふるさと納税でお得に贅沢ステイ！18世紀英国貴族の邸宅の風格「ザ・リッツ・カールトン大阪」、グランフロント大阪直結のスタイリッシュ「インターコンチネンタルホテル大阪」、駅前ランドマーク「ヒルトン大阪」を徹底比較。大阪市ふるさと納税トラベルクーポン活用術を網羅。',
  keywords: '大阪 ホテル ふるさと納税,リッツカールトン大阪 ふるさと納税,インターコンチネンタル大阪 クーポン,ヒルトン大阪 宿泊,大阪市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-osaka-umeda-luxury-skyview-stay/',
  },
  openGraph: {
    title: '【大阪・梅田×ふるさと納税】JR大阪駅直結＆地上摩天楼夜景！天下の台所美食特集｜リッツカールトン大阪・インターコンチネンタル・ヒルトン',
    description: '西日本最大のメガターミナル・大阪府大阪市北区「梅田（キタ）」を楽天ふるさと納税でお得に贅沢ステイ！18世紀英国貴族の邸宅の風格「ザ・リッツ・カールトン大阪」、グランフロント大阪直結のスタイリッシュ「インターコンチネンタルホテル大阪」、駅前ランドマーク「ヒルトン大阪」を徹底比較。大阪市ふるさと納税トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-osaka-umeda-luxury-skyview-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【大阪・梅田×ふるさと納税】JR大阪駅直結＆地上摩天楼夜景！天下の台所美食特集｜リッツカールトン大阪・インターコンチネンタル・ヒルトン',
    description: '西日本最大のメガターミナル・大阪府大阪市北区「梅田（キタ）」を楽天ふるさと納税でお得に贅沢ステイ！18世紀英国貴族の邸宅の風格「ザ・リッツ・カールトン大阪」、グランフロント大阪直結のスタイリッシュ「インターコンチネンタルホテル大阪」、駅前ランドマーク「ヒルトン大阪」を徹底比較。大阪市ふるさと納税トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-11T01:10:00+09:00',
    dateModified: '2026-09-11T01:10:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-osaka-umeda-luxury-skyview-stay',
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
        <span className="text-stone-700 font-medium truncate">【大阪・梅田×ふるさと納税】JR大阪駅直結＆地上摩天楼夜景！天下の台所美食特集｜リッツカールトン大阪・インターコンチネンタル・ヒルトン</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>大阪府大阪市（梅田・キタ） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【大阪・梅田×ふるさと納税】JR大阪駅直結＆地上摩天楼夜景！天下の台所美食特集｜リッツカールトン大阪・インターコンチネンタル・ヒルトン
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          西日本最大のメガターミナル・大阪府大阪市北区「梅田（キタ）」を楽天ふるさと納税でお得に贅沢ステイ！18世紀英国貴族の邸宅の風格「ザ・リッツ・カールトン大阪」、グランフロント大阪直結のスタイリッシュ「インターコンチネンタルホテル大阪」、駅前ランドマーク「ヒルトン大阪」を徹底比較。大阪市ふるさと納税トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            地上数十階から見渡す大阪の摩天楼と活気あふれる浪速の街——世界最高峰のブランドホテルで味わう極上のホスピタリティと美食の饗宴
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            西日本最大の交通・商業の要衝である大阪・梅田（キタ）。JR大阪駅を中心に阪急・阪神・地下鉄が結節し、グランフロント大阪やルクア大阪、阪急うめだ本店など最先端のショッピングモールが林立しています。うめきたエリアの再開発によって広大な都市公園「うめきた公園」が誕生し、都心の活気と緑豊かな憩いが融合した国際都市へと劇的な進化を続けています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            梅田エリアのホテル滞在の醍醐味は、新大阪駅からJRでわずか約4分という抜群のアクセスと、世界最高峰のホテルブランドが競演するラグジュアリーな空間。高層階のクラブラウンジから広がるパノラマ夜景を眺めながら、極上のアフタヌーンティーや一流シェフのフレンチ・鉄板焼きを堪能できます。大阪府大阪市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの最高級ホテルへお得に宿泊でき、特別な記念日や大阪観光が最高の思い出になります。
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
                  <td className="p-3 font-bold text-amber-900">ザ・リッツ・カールトン大阪</td>
                  <td className="p-3 font-bold">★ 4.8</td>
                  <td className="p-3 text-stone-600">日本初のザ・リッツ・カールトン！18世紀英国貴族の邸宅のような至高の空間と世界が認めたクレドのおもてなし</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">インターコンチネンタルホテル大阪　ｂｙ　ＩＨＧ</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">グランフロント大阪直結！洗練の現代デザインと高層階から見下ろすパノラマ夜景</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ヒルトン大阪</td>
                  <td className="p-3 font-bold">★ 3.5</td>
                  <td className="p-3 text-stone-600">JR大阪駅の正面にそびえるランドマーク！ヒルトンブランドの伝統と多彩な直営レストラン</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/16413/16413.jpg"
                alt="ザ・リッツ・カールトン大阪"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.8（口コミ 2644件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大阪府大阪市（梅田・キタ）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ザ・リッツ・カールトン大阪
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  日本初のザ・リッツ・カールトン！18世紀英国貴族の邸宅のような至高の空間と世界が認めたクレドのおもてなし
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ザ・リッツ・カールトン大阪 —— 伝統の風格と温もり。アンティーク絵画に囲まれるクラシックラグジュアリーの頂点
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 英国ジョージアン様式を取り入れた美術館のように重厚な館内
                    </h5>
                    <p className="text-stone-600 leading-relaxed">暖炉やシャンデリア、約450点もの美術品が彩る空間。一歩足を踏み入れればヨーロッパの古城に迷い込んだような非日常が広がります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室高層階に位置する広々とした客室と贅沢な大理石バスルーム
                    </h5>
                    <p className="text-stone-600 leading-relaxed">イタリア製大理石のバスルームと最高級リネン。窓からは煌めく大阪市街や神戸方面の夜景を一望できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ミシュラン星付きフレンチ「ラ・ベ」や伝統のクラブラウンジ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">専任コンシェルジュによる1日5回のフードプレゼンテーション。至極のシャンパンとともに優雅な時間を満喫できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.80点、口コミ絶賛の最高峰。「スタッフのホスピタリティが完璧で別世界、一生の思い出になった」「クラブラウンジのクオリティとお部屋の重厚感が別格」と感動の声多数。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>大阪府 大阪市北区梅田2-5-25</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥29,517〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>16413</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ザ・リッツ・カールトン大阪 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/141354/141354.jpg"
                alt="インターコンチネンタルホテル大阪　ｂｙ　ＩＨＧ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 335件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大阪府大阪市（梅田・キタ）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  インターコンチネンタルホテル大阪　ｂｙ　ＩＨＧ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  グランフロント大阪直結！洗練の現代デザインと高層階から見下ろすパノラマ夜景
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  インターコンチネンタルホテル大阪 —— 都市と自然が響き合うスタイリッシュホテル。広々客室と本格スパ＆プール
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> グランフロント大阪北館直結・JR大阪駅から屋根付きデッキで直結
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ショッピングやグルメゾーンに直結する抜群の利便性。雨の日でもスムーズにホテルへアクセスできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室50㎡以上の広さを誇り、日本の伝統色を配したモダン客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大きな窓から光が差し込む開放的な空間。独立したシャワーブースや深めのバスタブが心地よい寛ぎを約束します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ミシュラン一つ星フレンチ「ピエール」と最上階クラブラウンジ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">日本の旬食材とフランスの技法を融合させた現代料理。開放的なオープンキッチンから届く美食が特別な夜を彩ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.50点、口コミ高評価。「駅直結で立地最高、お部屋が広くて洗練されている」「クラブラウンジからの景色が美しく、スタッフの気配りも素晴らしい」と大好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>大阪府 大阪市北区大深町3-60</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥28,734〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>141354</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D141354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】インターコンチネンタルホテル大阪　ｂｙ　ＩＨＧ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1215/1215.jpg"
                alt="ヒルトン大阪"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.5（口コミ 2131件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大阪府大阪市（梅田・キタ）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ヒルトン大阪
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  JR大阪駅の正面にそびえるランドマーク！ヒルトンブランドの伝統と多彩な直営レストラン
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ヒルトン大阪 —— 梅田の中心に佇むグローバルスタンダード。エグゼクティブラウンジと快適なシティステイ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> JR大阪駅桜橋口から徒歩2分・各線梅田駅へ地下街直結
                    </h5>
                    <p className="text-stone-600 leading-relaxed">空港リムジンバスの発着所も目の前。観光、ビジネス、ショッピングにこれ以上ないベストロケーションです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 和の趣を取り入れたスタイリッシュで快適なリニューアル客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">障子や襖をイメージしたモダン和風の設え。上質なベッドと大型ワークデスクが快適な滞在をサポートします。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 「Folk Kitchen」での豪華ビュッフェや多彩な専門ダイニング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ライブ感あふれるオープンキッチンビュッフェや、鉄板焼き、本格懐石など、多彩な食の選択肢が揃っています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価3.50点、口コミ7000件超。「駅の目の前でアクセス抜群、リムジンバスも直結で便利」「朝食バイキングが種類豊富でとても美味しかった」と定評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>大阪府 大阪市北区梅田1-8-8</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,529〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>1215</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ヒルトン大阪 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> グランフロント大阪・うめきた公園＆梅田スカイビル・空中庭園展望台観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                最新の都市緑地「うめきた公園」とグランフロント大阪散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                大阪駅直結の大規模都市公園。水と緑が広がる芝生広場や、注目の最新カフェ・ショップを巡るアーバンウォーキングが楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                地上173mの連結超高層ビル「梅田スカイビル 空中庭園展望台」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                世界の建築トップ20に選出された名建築。360度オープントップの屋上回廊「ルミ・スカイ・ウォーク」から望む夕日や夜景は圧巻の絶景です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                阪急うめだ本店・デパ地下スイーツ巡りと北新地グルメ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                日本屈指の売上と品揃えを誇るデパ地下スイーツ。夜には大人の歓楽街「北新地」での名店割烹や隠れ家バー巡りもおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              大阪府大阪市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「大阪府大阪市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で大阪市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: JR大阪駅・新大阪駅・各線梅田駅へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東海道新幹線新大阪駅からJR京都線で1駅（約4分）。3年間の有効期間内で、USJ観光や舞台観劇、記念日ディナーに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ザ・リッツ・カールトン大阪、インターコンチネンタルホテル大阪、ヒルトン大阪などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-kyoto-station-luxury-convenience-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 京都駅直結 新幹線直結＆抜群のアクセス名門ホテル特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-tokyo-station-marunouchi-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 東京駅・丸の内 重要文化財駅舎＆皇居ビュー名門ホテル特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/kumamoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                熊本県の宿・温泉
              </Link>
              <Link
                href="/prefectures/toyama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                富山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nagano"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長野県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shimane"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                島根県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
