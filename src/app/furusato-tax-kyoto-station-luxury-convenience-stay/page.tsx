import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【京都駅直結×ふるさと納税】新幹線直結＆抜群のアクセス！古都観光の特等席名門ホテル特集｜グランヴィア京都・ザサウザンド京都・リーガロイヤル',
  description: '新幹線を降りたらすぐチェックイン！京都観光・出張の最強拠点・京都府京都市「京都駅周辺」を楽天ふるさと納税でお得に贅沢ステイ。JR京都駅烏丸口直結のランドマーク「ホテルグランヴィア京都」、現代の茶室をテーマにした癒やしの館「ザ・サウザンド京都」、京都唯一の回転展望レストランを擁する「リーガロイヤルホテル京都」を徹底比較。京都市トラベルクーポン活用術を網羅。',
  keywords: '京都駅 ホテル ふるさと納税,グランヴィア京都 ふるさと納税,ザサウザンド京都 クーポン,リーガロイヤルホテル京都 宿泊,京都市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kyoto-station-luxury-convenience-stay',
  },
  openGraph: {
    title: '【京都駅直結×ふるさと納税】新幹線直結＆抜群のアクセス！古都観光の特等席名門ホテル特集｜グランヴィア京都・ザサウザンド京都・リーガロイヤル',
    description: '新幹線を降りたらすぐチェックイン！京都観光・出張の最強拠点・京都府京都市「京都駅周辺」を楽天ふるさと納税でお得に贅沢ステイ。JR京都駅烏丸口直結のランドマーク「ホテルグランヴィア京都」、現代の茶室をテーマにした癒やしの館「ザ・サウザンド京都」、京都唯一の回転展望レストランを擁する「リーガロイヤルホテル京都」を徹底比較。京都市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kyoto-station-luxury-convenience-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【京都駅直結×ふるさと納税】新幹線直結＆抜群のアクセス！古都観光の特等席名門ホテル特集｜グランヴィア京都・ザサウザンド京都・リーガロイヤル',
    description: '新幹線を降りたらすぐチェックイン！京都観光・出張の最強拠点・京都府京都市「京都駅周辺」を楽天ふるさと納税でお得に贅沢ステイ。JR京都駅烏丸口直結のランドマーク「ホテルグランヴィア京都」、現代の茶室をテーマにした癒やしの館「ザ・サウザンド京都」、京都唯一の回転展望レストランを擁する「リーガロイヤルホテル京都」を徹底比較。京都市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-kyoto-station-luxury-convenience-stay',
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
        <span className="text-stone-700 font-medium truncate">【京都駅直結×ふるさと納税】新幹線直結＆抜群のアクセス！古都観光の特等席名門ホテル特集｜グランヴィア京都・ザサウザンド京都・リーガロイヤル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>京都府京都市（京都駅周辺） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【京都駅直結×ふるさと納税】新幹線直結＆抜群のアクセス！古都観光の特等席名門ホテル特集｜グランヴィア京都・ザサウザンド京都・リーガロイヤル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          新幹線を降りたらすぐチェックイン！京都観光・出張の最強拠点・京都府京都市「京都駅周辺」を楽天ふるさと納税でお得に贅沢ステイ。JR京都駅烏丸口直結のランドマーク「ホテルグランヴィア京都」、現代の茶室をテーマにした癒やしの館「ザ・サウザンド京都」、京都唯一の回転展望レストランを擁する「リーガロイヤルホテル京都」を徹底比較。京都市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            新幹線ホームから直行できる極上の利便性と千年の都の美意識——手荷物を預けて身軽に巡る贅沢な京都ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東海道新幹線をはじめJR各線、近鉄、地下鉄、そして市内全域へ網の目のように伸びる市バスの起終点である「京都駅」。原広司氏設計の壮大なガラスと鉄骨のアトリウムが迎えるこの巨大ターミナルは、千年の歴史を誇る古都への第一歩となる象徴的な空間です。駅周辺には京都タワーや東本願寺、西本願寺、東寺の五重塔が徒歩圏内に位置し、嵐山、祇園、清水寺、金閣寺など市内のあらゆる名所へスムーズにアクセスできます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            京都駅直結・至近のハイクラスホテルに滞在する最大のメリットは、チェックイン前後に重いスーツケースを預けてすぐに観光へ繰り出せる圧倒的なタイムパフォーマンスと、夜遅くまで京都の美食を堪能できる安心感。夕食には老舗料亭が手掛ける本格京懐石や、京都の夜景を一望する鉄板焼き・フレンチをゆったり楽しめます。京都府京都市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門ホテルへお得に宿泊でき、特別な記念日や観光旅行が最高にスマートになります。
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
                  <td className="p-3 font-bold text-amber-900">ホテルグランヴィア京都</td>
                  <td className="p-3 font-bold">★ 4.47</td>
                  <td className="p-3 text-stone-600">JR京都駅烏丸口直結！改札から雨に濡れずにチェックインできる京都随一のランドマークホテル</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ザ・サウザンド京都</td>
                  <td className="p-3 font-bold">★ 4.6</td>
                  <td className="p-3 text-stone-600">京都駅中央口から徒歩2分！千年の都の知恵息づく「現代の茶室」のような静謐なる隠れ家ラグジュアリー</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">リーガロイヤルホテル京都</td>
                  <td className="p-3 font-bold">★ 4.26</td>
                  <td className="p-3 text-stone-600">京都唯一の回転展望フレンチレストラン「トップ オブ キョウト」！伝統のおもてなしと名門の風格</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1487/1487.jpg"
                alt="ホテルグランヴィア京都"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.47（口コミ 4296件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">京都府京都市（京都駅周辺）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルグランヴィア京都
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  JR京都駅烏丸口直結！改札から雨に濡れずにチェックインできる京都随一のランドマークホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ホテルグランヴィア京都 —— 駅直結の圧倒的ロケーション。大パノラマの客室と充実のレストラン＆プール
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> JR京都駅の駅ビル内に位置する抜群のアクセスと利便性
                    </h5>
                    <p className="text-stone-600 leading-relaxed">新幹線中央口やJR在来線西口から直結。天候を気にせずチェックインでき、観光やビジネスの拠点として最強の立地です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 京都タワーや京都市街を一望する高層階からの絶景ビュー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">開放感あふれる大きな窓から広がる古都の夜景。上質なアメニティと広々としたベッドが上質な眠りを誘います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 本格京懐石「浮橋」やビュー＆ダイニングなど多彩な名店
                    </h5>
                    <p className="text-stone-600 leading-relaxed">京都の旬の味覚を散りばめた四季折々の会席料理や、シェフが目の前で焼き上げる鉄板焼きディナーを優雅に堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.47点、口コミ6200件超。「駅直結で荷物預けもスムーズ、立地が最高すぎる」「スタッフのホスピタリティとお部屋からの京都タワーの眺めが素晴らしい」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>京都府 京都市下京区烏丸通塩小路下ル　ＪＲ京都駅中央口</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,308〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>1487</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ホテルグランヴィア京都 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/168608/168608.jpg"
                alt="ザ・サウザンド京都"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.6（口コミ 201件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">京都府京都市（京都駅周辺）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ザ・サウザンド京都
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  京都駅中央口から徒歩2分！千年の都の知恵息づく「現代の茶室」のような静謐なる隠れ家ラグジュアリー
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ザ・サウザンド京都 —— 光と緑、心地よい静けさ。茶道や禅の美意識を取り入れた大人の極上ウェルネスホテル
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 駅前にありながら喧騒を忘れさせる緑豊かなアプローチと大階段
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ロビーへと続く壮大な階段と柔らかな光の演出。都会の真ん中にいることを忘れるような静寂な非日常空間です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 引き算の美学を取り入れたミニマルで洗練された快適客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">自然素材を多用したぬくもりあるインテリア。全室バストイレ別で、独立した洗い場付きバスルームを完備しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 京都の出汁文化を活かした日本料理「KIZAHASHI」とイタリアン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">厳選された旬の食材を繊細な感性で仕立てるイノベーティブな料理。お茶のペアリングなど独自の食体験が魅力です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ高評価。「ロビーの階段とお部屋の雰囲気がとにかくおしゃれ」「静かで落ち着いた空間とお料理の美味しさに感動した」と大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>京都府 京都市下京区東塩小路町570</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥20,825〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>168608</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D168608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ザ・サウザンド京都 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/108/108.jpg"
                alt="リーガロイヤルホテル京都"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.26（口コミ 7171件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">京都府京都市（京都駅周辺）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  リーガロイヤルホテル京都
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  京都唯一の回転展望フレンチレストラン「トップ オブ キョウト」！伝統のおもてなしと名門の風格
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  リーガロイヤルホテル京都 —— 古都を見下ろす360度パノラマ。名門ホテルの伝統とおもてなしの心
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全席窓側・360度ゆっくり回転しながら夜景を望むフレンチレストラン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">京都の街並みや五重塔、周囲の山々をぐるりと一望。特別な記念日やプロポーズにふさわしい伝説のダイニングです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 和の趣を現代風に昇華させた落ち着きあるリニューアル客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">西陣織や唐紙など京都の伝統工芸をモチーフにした上質な設え。ゆったりとした広さで旅の疲れを心地よく癒やせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 京都駅から無料シャトルバス運行・充実の屋内温水プール＆サウナ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">京都駅八条口からホテルまで専用シャトルバスが随時運行。大型駐車場も完備し、マイカー旅行にも安心です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.26点、口コミ4800件超。「回転レストランからの夜景がロマンチックで最高」「スタッフの接客がとても親切丁寧で、シャトルバスも便利」と高い満足度。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>京都府 京都市下京区東堀川通り塩小路下ル松明町１番地</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥5,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>108</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】リーガロイヤルホテル京都 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 京都駅ビル・東寺五重塔＆東本願寺・渉成園観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                京都駅ビル「大階段グラフィカルイルミネーション」＆空中径路
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                171段の大階段を彩るLEDイルミネーションと、地上45mの空中径路から見下ろす京都の夜景。駅自体が巨大な観光スポットです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                世界文化遺産「東寺（教王護国寺）」の日本一高い木造五重塔
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                京都駅から徒歩約15分。高さ約55mの五重塔や講堂の立体曼荼羅、春の不二桜・秋の紅葉ライトアップは圧巻の美しさです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                東本願寺の阿弥陀堂・御影堂門と国の名勝「渉成園（枳殻邸）」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                世界最大級の木造建築である東本願寺御影堂。隣接する渉成園の池泉回遊式庭園では、四季折々の花々と静寂の散策が楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              京都府京都市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「京都府京都市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で京都市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 東海道新幹線・JR線で京都駅へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅から東海道新幹線「のぞみ」で約2時間15分、新大阪駅からわずか約15分。3年間の有効期間内で、桜・紅葉・青もみじ・冬の雪景色に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ホテルグランヴィア京都、ザ・サウザンド京都、リーガロイヤルホテル京都などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
