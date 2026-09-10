import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【奈良公園×ふるさと納税】世界遺産の大仏＆若草山の緑！クラシックホテルと露天風呂ヴィラ特集｜奈良ホテル・ふふ奈良・JWマリオット',
  description: '千三百年余の時を刻む古都・奈良県奈良市（奈良公園周辺）を楽天ふるさと納税でお得に贅沢ステイ！明治四十二年創業「関西の迎賓館」として愛される「奈良ホテル」、奈良公園の杜に佇む隈研吾建築「ふふ 奈良」、日本初の最高峰ラグジュアリー「JWマリオット・ホテル奈良」を徹底比較。奈良市ふるさと納税トラベルクーポン活用術を網羅。',
  keywords: '奈良公園 ホテル ふるさと納税,奈良ホテル クーポン,ふふ奈良 ふるさと納税,JWマリオット奈良 宿泊,奈良市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-nara-park-heritage-luxury-stay',
  },
  openGraph: {
    title: '【奈良公園×ふるさと納税】世界遺産の大仏＆若草山の緑！クラシックホテルと露天風呂ヴィラ特集｜奈良ホテル・ふふ奈良・JWマリオット',
    description: '千三百年余の時を刻む古都・奈良県奈良市（奈良公園周辺）を楽天ふるさと納税でお得に贅沢ステイ！明治四十二年創業「関西の迎賓館」として愛される「奈良ホテル」、奈良公園の杜に佇む隈研吾建築「ふふ 奈良」、日本初の最高峰ラグジュアリー「JWマリオット・ホテル奈良」を徹底比較。奈良市ふるさと納税トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-nara-park-heritage-luxury-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【奈良公園×ふるさと納税】世界遺産の大仏＆若草山の緑！クラシックホテルと露天風呂ヴィラ特集｜奈良ホテル・ふふ奈良・JWマリオット',
    description: '千三百年余の時を刻む古都・奈良県奈良市（奈良公園周辺）を楽天ふるさと納税でお得に贅沢ステイ！明治四十二年創業「関西の迎賓館」として愛される「奈良ホテル」、奈良公園の杜に佇む隈研吾建築「ふふ 奈良」、日本初の最高峰ラグジュアリー「JWマリオット・ホテル奈良」を徹底比較。奈良市ふるさと納税トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-nara-park-heritage-luxury-stay',
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
        <span className="text-stone-700 font-medium truncate">【奈良公園×ふるさと納税】世界遺産の大仏＆若草山の緑！クラシックホテルと露天風呂ヴィラ特集｜奈良ホテル・ふふ奈良・JWマリオット</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>奈良県奈良市（奈良公園周辺） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【奈良公園×ふるさと納税】世界遺産の大仏＆若草山の緑！クラシックホテルと露天風呂ヴィラ特集｜奈良ホテル・ふふ奈良・JWマリオット
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          千三百年余の時を刻む古都・奈良県奈良市（奈良公園周辺）を楽天ふるさと納税でお得に贅沢ステイ！明治四十二年創業「関西の迎賓館」として愛される「奈良ホテル」、奈良公園の杜に佇む隈研吾建築「ふふ 奈良」、日本初の最高峰ラグジュアリー「JWマリオット・ホテル奈良」を徹底比較。奈良市ふるさと納税トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            神の使いの鹿たちが遊ぶ緑豊かな杜と国宝の大仏殿——悠久の古都で味わうクラシックの風格とプライベート温泉ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            平城京遷都から千三百年以上の歴史を紡ぐ古都・奈良県奈良市。若草山の麓、約660ヘクタールにおよぶ広大な「奈良公園」には、世界遺産に登録された東大寺の大仏殿や興福寺の五重塔、春日大社の朱塗りの社殿が点在し、約1,300頭の野生のニホンジカが国の天然記念物として穏やかに暮らしています。春の桜、初夏の新緑、秋の紅葉、冬の澄んだ空気と、四季折々に幽玄な美しさをたたえています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            奈良に泊まる醍醐味は、日帰りの観光客が引き揚げた後の夕暮れや早朝の静寂。澄み切った朝の光の中で鹿たちと出会い、静かな境内を散策する時間は宿泊者だけの特権です。夕食には大和牛や大和肉鶏、三輪そうめん、奈良漬、地元野菜を取り入れた極上の大和懐石やフレンチを堪能できます。奈良県奈良市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗クラシックホテルや露天風呂付きリゾートへお得に宿泊でき、心洗われる歴史旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">奈良ホテル</td>
                  <td className="p-3 font-bold">★ 4.63</td>
                  <td className="p-3 text-stone-600">明治四十二年創業・「関西の迎賓館」と謳われた名門！アインシュタインやオードリー・ヘプバーンが愛した本館</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ふふ　奈良</td>
                  <td className="p-3 font-bold">★ 4.79</td>
                  <td className="p-3 text-stone-600">世界的建築家・隈研吾氏が設計！全室に天然温泉露天風呂を備えた奈良公園の杜に溶け込む至高宿</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ＪＷマリオット・ホテル奈良</td>
                  <td className="p-3 font-bold">★ 4</td>
                  <td className="p-3 text-stone-600">日本初進出のマリオット最高級ブランド！奈良の伝統美とモダンラグジュアリーが織りなす極上の館</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1148/1148.jpg"
                alt="奈良ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.63（口コミ 1721件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">奈良県奈良市（奈良公園周辺）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  奈良ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  明治四十二年創業・「関西の迎賓館」と謳われた名門！アインシュタインやオードリー・ヘプバーンが愛した本館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  奈良ホテル —— 辰野金吾が手がけた木造建築の最高峰。名画や調度品に囲まれるクラシカルステイ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 吉野杉をふんだんに使った桃山風御殿造りの登録有形文化財本館
                    </h5>
                    <p className="text-stone-600 leading-relaxed">吹き抜けのマントルピースや鳥居型シャンデリア。歴史の息吹が宿る重厚な空間が旅人を明治・大正の浪漫へと誘います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 荒池のほとりに位置し奈良公園・東大寺へ徒歩すぐの好立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">朝の澄んだ空気の中で鹿が庭を散歩する風景。興福寺やならまちの古い町並み散策にも最高の拠点です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> メインダイニング「三笠」での伝統の本格フランス料理ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">創業以来受け継がれてきた格式高いフレンチ。歴代料理長が磨き上げた極上のソースと旬の美味を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.63点、口コミ2600件超。「建物の歴史と気品に圧倒された、まさに文化財に泊まる体験」「三笠でのディナーも朝食の茶粥も素晴らしく至福の時間だった」と大絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>奈良県 奈良市高畑町1096</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥16,836〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>1148</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】奈良ホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/179808/179808.jpg"
                alt="ふふ　奈良"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.79（口コミ 88件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">奈良県奈良市（奈良公園周辺）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ふふ　奈良
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  世界的建築家・隈研吾氏が設計！全室に天然温泉露天風呂を備えた奈良公園の杜に溶け込む至高宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ふふ 奈良 —— 庭園の木々に包まれるプライベートリゾート。全室温泉露天付きスイートと大和の恵み
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> すべての客室に薬草湯の香りが漂う天然温泉露天風呂を完備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">プライベートな露天風呂で心ゆくまで名湯に浸かる贅沢。鳥のさえずりと風の音に包まれる至極の癒やしです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本庭園「瑜伽山園地（ゆうずえんち）」に隣接する静謐な立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">木や和紙を贅沢に使ったモダン和の美学。自然と建築が美しく調和した贅沢なプライベート空間です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 大和野菜や厳選牛を取り入れた日本料理「滴翠（てきすい）」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">奈良の歴史や薬膳の思想を取り入れた繊細な懐石料理。個室食事処でゆったりと五感で味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.79点、口コミ極めて高評価。「お部屋の露天風呂とお庭の景色が最高で完璧なプライベート感」「お料理がどれも美味しく、スタッフの気配りも一流」と最高峰の評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>奈良県 奈良市高畑町1184-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥53,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>179808</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D179808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ふふ　奈良 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/178614/178614.jpg"
                alt="ＪＷマリオット・ホテル奈良"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4（口コミ 129件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">奈良県奈良市（奈良公園周辺）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ＪＷマリオット・ホテル奈良
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  日本初進出のマリオット最高級ブランド！奈良の伝統美とモダンラグジュアリーが織りなす極上の館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  JWマリオット・ホテル奈良 —— 国際的ブランドの洗練とおもてなし。屋内プールと贅沢なダイニング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 奈良の鹿や木々のモチーフを散りばめたスタイリッシュな客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広々とした空間に最高級ベッドと大理石バスルームを完備。洗練された現代ラグジュアリーステイが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> インドア温水プールや本格「SPA by JW」で極上リフレッシュ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旅の疲れを解きほぐす本格スパ施設。都会のリゾートのような優雅なウェルネス体験を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本料理「校倉」の鉄板焼き・寿司＆オールデイダイニング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">奈良県産食材をふんだんに取り入れたディナーコースや、出来立てオムレツが人気の朝食ビュッフェが評判です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.00点。「JWブランドならではの豪華な内装とプールの設備が素晴らしい」「朝食ビュッフェが美味しく、ラウンジのカクテルタイムも優雅だった」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>奈良県 奈良市三条大路1丁目1番１号</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,105〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>178614</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D178614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ＪＷマリオット・ホテル奈良 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 奈良公園・東大寺大仏殿＆春日大社・ならまち観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                世界文化遺産「東大寺」盧舎那仏（奈良の大仏）と南大門金剛力士像
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                世界最大級の木造建築である大仏殿に鎮座する高さ約15mの国宝大仏。運慶・快慶作の金剛力士像が睨みを利かす南大門も必見です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                朱塗りの廻廊と三千基の燈籠が美しい「春日大社」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                藤原氏の氏神として創建された全国春日神社の総本社。原生林に囲まれた参道には数千基の石燈籠が並び、神聖な空気に満ちています。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                江戸時代の町家が残るレトロな街並み「ならまち」散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                格子の美しい町家を活かしたカフェ、雑貨店、酒蔵が並ぶ人気エリア。名物のかき氷や吉野葛スイーツの食べ歩きが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              奈良県奈良市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「奈良県奈良市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で奈良市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 近鉄奈良駅またはJR奈良駅へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                京都駅から近鉄特急で約35分、大阪難波駅からも近鉄奈良線快速急行で約38分。3年間の有効期間内で、春の桜や秋の正倉院展に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                奈良ホテル、ふふ奈良、JWマリオット・ホテル奈良などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
