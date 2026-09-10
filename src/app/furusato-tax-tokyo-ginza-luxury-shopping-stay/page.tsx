import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【東京・銀座×ふるさと納税】歌舞伎座・ショッピング＆極上スカイビュー！大人の銀座ステイ特集｜三井ガーデン銀座プレミア・ミレニアム・モントレ',
  description: '日本一の格式とハイブランドが輝く街・東京都中央区「銀座」を楽天ふるさと納税でお得に贅沢ステイ！銀座随一の高層眺望とビューバスを誇る「三井ガーデンホテル銀座プレミア」、銀座四丁目交差点・歌舞伎座徒歩すぐの「ミレニアム 三井ガーデンホテル 東京」、パリのアパルトマン風「ホテルモントレ銀座」を徹底比較。中央区ふるさと納税トラベルクーポン活用術を網羅。',
  keywords: '銀座 ホテル ふるさと納税,三井ガーデンホテル銀座プレミア クーポン,ミレニアム銀座 ふるさと納税,ホテルモントレ銀座 宿泊,中央区 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-tokyo-ginza-luxury-shopping-stay',
  },
  openGraph: {
    title: '【東京・銀座×ふるさと納税】歌舞伎座・ショッピング＆極上スカイビュー！大人の銀座ステイ特集｜三井ガーデン銀座プレミア・ミレニアム・モントレ',
    description: '日本一の格式とハイブランドが輝く街・東京都中央区「銀座」を楽天ふるさと納税でお得に贅沢ステイ！銀座随一の高層眺望とビューバスを誇る「三井ガーデンホテル銀座プレミア」、銀座四丁目交差点・歌舞伎座徒歩すぐの「ミレニアム 三井ガーデンホテル 東京」、パリのアパルトマン風「ホテルモントレ銀座」を徹底比較。中央区ふるさと納税トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-tokyo-ginza-luxury-shopping-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【東京・銀座×ふるさと納税】歌舞伎座・ショッピング＆極上スカイビュー！大人の銀座ステイ特集｜三井ガーデン銀座プレミア・ミレニアム・モントレ',
    description: '日本一の格式とハイブランドが輝く街・東京都中央区「銀座」を楽天ふるさと納税でお得に贅沢ステイ！銀座随一の高層眺望とビューバスを誇る「三井ガーデンホテル銀座プレミア」、銀座四丁目交差点・歌舞伎座徒歩すぐの「ミレニアム 三井ガーデンホテル 東京」、パリのアパルトマン風「ホテルモントレ銀座」を徹底比較。中央区ふるさと納税トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-tokyo-ginza-luxury-shopping-stay',
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
        <span className="text-stone-700 font-medium truncate">【東京・銀座×ふるさと納税】歌舞伎座・ショッピング＆極上スカイビュー！大人の銀座ステイ特集｜三井ガーデン銀座プレミア・ミレニアム・モントレ</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>東京都中央区（銀座・築地） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【東京・銀座×ふるさと納税】歌舞伎座・ショッピング＆極上スカイビュー！大人の銀座ステイ特集｜三井ガーデン銀座プレミア・ミレニアム・モントレ
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本一の格式とハイブランドが輝く街・東京都中央区「銀座」を楽天ふるさと納税でお得に贅沢ステイ！銀座随一の高層眺望とビューバスを誇る「三井ガーデンホテル銀座プレミア」、銀座四丁目交差点・歌舞伎座徒歩すぐの「ミレニアム 三井ガーデンホテル 東京」、パリのアパルトマン風「ホテルモントレ銀座」を徹底比較。中央区ふるさと納税トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            銀座四丁目交差点の賑わいと柳の揺れる並木道、洗練のハイブランド街——日本の最高峰で味わう優雅なショッピングと極上ナイトビュー
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東京都中央区、明治のガス灯の時代から日本の最先端トレンドと文化を発信し続けてきた街「銀座」。銀座通り（中央通り）には世界的な高級ブランドの旗艦店や老舗百貨店が建ち並び、週末の「歩行者天国」は世界中の人々で賑わいます。伝統芸能の殿堂「歌舞伎座」や、新旧のカルチャーが交差する「GINZA SIX」、活気あふれる築地場外市場も徒歩圏内に位置し、美食と文化の最高峰が集結しています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            銀座に泊まる最大の魅力は、ショッピングや観劇、銀座の名店でのディナーを時間を気にせず心ゆくまで満喫できる大人の贅沢。客室の窓やビューバスから東京タワーや汐留の夜景を見下ろしながら過ごす時間は格別の非日常です。東京都中央区へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのデザインホテルや高層ホテルへお得に宿泊でき、特別な記念日やご褒美ステイが最高にエレガントになります。
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
                  <td className="p-3 font-bold text-amber-900">三井ガーデンホテル銀座プレミア</td>
                  <td className="p-3 font-bold">★ 4.45</td>
                  <td className="p-3 text-stone-600">銀座随一の高層階ホテル！客室ビューバスから東京タワーやベイエリアの煌めく夜景を一望</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ミレニアム三井ガーデンホテル東京</td>
                  <td className="p-3 font-bold">★ 3.83</td>
                  <td className="p-3 text-stone-600">銀座四丁目交差点・歌舞伎座まで徒歩2分！三越や松屋でのショッピングに最高の好立地ホテル</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ホテルモントレ銀座</td>
                  <td className="p-3 font-bold">★ 4.12</td>
                  <td className="p-3 text-stone-600">銀座の柳通りに面した欧州クラシカルホテル！パリのアパルトマンを思わせるアンティークな空間</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/41069/41069.jpg"
                alt="三井ガーデンホテル銀座プレミア"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.45（口コミ 5070件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">東京都中央区（銀座・築地）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  三井ガーデンホテル銀座プレミア
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  銀座随一の高層階ホテル！客室ビューバスから東京タワーやベイエリアの煌めく夜景を一望
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  三井ガーデンホテル銀座プレミア —— 地上16階ロビーからの息をのむパノラマ。東京タワーを望む天空のステイ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室が17階以上の高層階に位置する銀座唯一のタワーホテル
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大きなピクチャーウィンドウから広がる東京タワーや汐留の摩天楼。都会の煌めく夜景を独り占めできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 夜景を眺めながらバスタブに浸かれる人気の「ビューバス」客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">開放感あふれるガラス張りのバスルーム。ゆったりとお湯に浸かりながら贅沢なバスタイムを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 16階「RISTORANTE E'VOLTA il Cielo」での極上イタリアン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">厳選された日本の食材と本場イタリアの技法が融合したコース。東京の夜景を眺めながら優雅なディナーを味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.45点、口コミ3800件超。「ビューバスから見える東京タワーの夜景が最高にロマンチック」「銀座の買い物にも便利でスタッフの接客も洗練されている」とカップル・記念日に大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>東京都 中央区銀座8－13－1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥10,790〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>41069</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】三井ガーデンホテル銀座プレミア の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/147093/147093.jpg"
                alt="ミレニアム三井ガーデンホテル東京"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.83（口コミ 493件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">東京都中央区（銀座・築地）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ミレニアム三井ガーデンホテル東京
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  銀座四丁目交差点・歌舞伎座まで徒歩2分！三越や松屋でのショッピングに最高の好立地ホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ミレニアム 三井ガーデンホテル 東京 —— 銀座の中心に暮らすような滞在。洗練されたモダンデザインと快適空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 銀座駅や東銀座駅から徒歩1〜2分の圧倒的なアクセスの良さ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ショッピングや歌舞伎鑑賞の合間に荷物を置きに戻れる便利さ。雨の日も地下鉄出口からすぐです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室バストイレ別の独立設計と上質なインテリア
                    </h5>
                    <p className="text-stone-600 leading-relaxed">機能性と美しさを両立した落ち着きある客室。快適なシモンズ製ベッドが旅の疲れを心地よく癒やします。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地下1階レストランでの彩り豊かな朝食ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">新鮮な野菜や焼きたてパン、体に優しい和洋メニューが充実。清々しい朝のスタートを迎えることができます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価3.83点、利便性抜群。「歌舞伎座のすぐそばで観劇に最高だった」「銀座の真ん中でどこに行くにも便利、お部屋も清潔で快適」と好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>東京都 中央区銀座5-11-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥17,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>147093</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ミレニアム三井ガーデンホテル東京 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5002/5002.jpg"
                alt="ホテルモントレ銀座"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.12（口コミ 2938件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">東京都中央区（銀座・築地）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルモントレ銀座
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  銀座の柳通りに面した欧州クラシカルホテル！パリのアパルトマンを思わせるアンティークな空間
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ホテルモントレ銀座 —— 喧騒を離れた落ち着きの隠れ家。ヨーロッパの気品と本格フレンチレストラン
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ヨーロッパのクラシックホテルをイメージしたお洒落な外観と内装
                    </h5>
                    <p className="text-stone-600 leading-relaxed">木製家具や wrought iron の装飾が美しい館内。異国情緒あふれる優雅な雰囲気が大人の滞在を彩ります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 銀座一丁目駅から徒歩1分・有楽町や東京駅も徒歩圏内
                    </h5>
                    <p className="text-stone-600 leading-relaxed">静かな通りに面しながら主要駅へ好アクセス。銀座の隠れ家レストランやバー巡りにも最適です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 本格フランス料理「エスカーレ」での伝統のディナーコース
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旬の食材を活かした繊細なフレンチと厳選ワイン。落ち着いたレストラン空間で至福のひとときを過ごせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.12点、口コミ2900件超。「クラシカルなヨーロッパ調の内装が可愛くて落ち着く」「銀座駅からも近くて静かでコスパも良い」と女子旅やビジネスに好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>東京都 中央区銀座2-10-2</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>5002</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ホテルモントレ銀座 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 銀座中央通り・GINZA SIX＆歌舞伎座・築地場外市場観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                銀座通り（中央通り）でのショッピング＆歩行者天国（土日祝）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                国内外のトップブランドが並ぶメインストリート。休日の歩行者天国では、オープンカフェでくつろぎながら優雅な銀ぶらを楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                伝統芸能の最高峰「歌舞伎座」での観劇と木挽町広場
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                桃山様式の壮麗な殿堂。一幕見席での手軽な観劇や、地下の木挽町広場での歌舞伎グッズ・銘菓のお土産探しが人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                築地場外市場での朝獲れ海鮮丼＆玉子焼き食べ歩き
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                銀座から徒歩圏内のグルメタウン。名物の甘い焼き立て玉子焼きや、新鮮なマグロ丼、海鮮串焼きの食べ歩きが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              東京都中央区ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「東京都中央区」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で中央区を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 東京メトロ銀座線・日比谷線・有楽町線でアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から丸ノ内線で1駅、羽田空港からも都営浅草線直通でスムーズ。3年間の有効期間内で、記念日や観劇、ショッピングに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                三井ガーデンホテル銀座プレミア、ミレニアム銀座、ホテルモントレ銀座などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
    </main>
  );
}
