import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【名古屋×ふるさと納税】駅直結スカイビュー＆最新ラグジュアリー！ひつまぶし・名古屋コーチン美食特集｜マリオット・TIAD・名古屋観光ホテル',
  description: '日本三大都市・愛知県名古屋市を楽天ふるさと納税でお得に贅沢ステイ！JR名古屋駅直結・地上200m超の「名古屋マリオットアソシアホテル」、久屋大通公園を望む最新ラグジュアリー「TIAD オートグラフ コレクション」、昭和十一年開業の歴史と格式「名古屋観光ホテル」を徹底比較。名古屋メシとふるさと納税クーポン活用術を網羅。',
  keywords: '名古屋 ふるさと納税,名古屋マリオット ふるさと納税,TIAD クーポン 名古屋,名古屋観光ホテル 宿泊,名古屋市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-nagoya-luxury-gourmet-stay',
  },
  openGraph: {
    title: '【名古屋×ふるさと納税】駅直結スカイビュー＆最新ラグジュアリー！ひつまぶし・名古屋コーチン美食特集｜マリオット・TIAD・名古屋観光ホテル',
    description: '日本三大都市・愛知県名古屋市を楽天ふるさと納税でお得に贅沢ステイ！JR名古屋駅直結・地上200m超の「名古屋マリオットアソシアホテル」、久屋大通公園を望む最新ラグジュアリー「TIAD オートグラフ コレクション」、昭和十一年開業の歴史と格式「名古屋観光ホテル」を徹底比較。名古屋メシとふるさと納税クーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-nagoya-luxury-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【名古屋×ふるさと納税】駅直結スカイビュー＆最新ラグジュアリー！ひつまぶし・名古屋コーチン美食特集｜マリオット・TIAD・名古屋観光ホテル',
    description: '日本三大都市・愛知県名古屋市を楽天ふるさと納税でお得に贅沢ステイ！JR名古屋駅直結・地上200m超の「名古屋マリオットアソシアホテル」、久屋大通公園を望む最新ラグジュアリー「TIAD オートグラフ コレクション」、昭和十一年開業の歴史と格式「名古屋観光ホテル」を徹底比較。名古屋メシとふるさと納税クーポン活用術を網羅。',
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
    datePublished: '2026-09-11T00:20:00+09:00',
    dateModified: '2026-09-11T00:20:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-nagoya-luxury-gourmet-stay',
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
        <span className="text-stone-700 font-medium truncate">【名古屋×ふるさと納税】駅直結スカイビュー＆最新ラグジュアリー！ひつまぶし・名古屋コーチン美食特集｜マリオット・TIAD・名古屋観光ホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>愛知県名古屋市（名駅・栄） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【名古屋×ふるさと納税】駅直結スカイビュー＆最新ラグジュアリー！ひつまぶし・名古屋コーチン美食特集｜マリオット・TIAD・名古屋観光ホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本三大都市・愛知県名古屋市を楽天ふるさと納税でお得に贅沢ステイ！JR名古屋駅直結・地上200m超の「名古屋マリオットアソシアホテル」、久屋大通公園を望む最新ラグジュアリー「TIAD オートグラフ コレクション」、昭和十一年開業の歴史と格式「名古屋観光ホテル」を徹底比較。名古屋メシとふるさと納税クーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            地上数百メートルの摩天楼スカイビューと熱気あふれる名古屋城下の歴史——洗練のラグジュアリーホテルと名古屋メシを堪能する極上シティエスケープ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            中部地方の経済・文化の中枢であり、徳川御三家筆頭の城下町として栄えた愛知県名古屋市。東京・新大阪から東海道新幹線で最速約35〜50分という抜群のアクセスを誇り、金のシャチホコが輝く「名古屋城」や、三種の神器の一つを祀る「熱田神宮」、緑豊かな「ジブリパーク」など多彩な見どころが集結しています。街中にはひつまぶし、手羽先、味噌カツ、名古屋コーチン、きしめんなど独自の進化を遂げた「名古屋メシ」の食文化が息づいています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            名古屋の滞在をさらに格上げするのが、JR名古屋駅真上にそびえる超高層ホテルや、緑豊かな久屋大通公園沿いに誕生した最新インターナショナルホテル。窓一面に広がる煌めく大パノラマ夜景を眺めながら、極上のクラブラウンジや一流シェフのディナーを堪能できます。愛知県名古屋市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのハイクラスホテルへお得に宿泊でき、観光や記念日ステイを贅沢に満喫できます。
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
                  <td className="p-3 font-bold text-amber-900">名古屋マリオットアソシアホテル</td>
                  <td className="p-3 font-bold">★ 4.64</td>
                  <td className="p-3 text-stone-600">JR名古屋駅真上・地上200m超のパノラマビュー！圧倒的な利便性と最高峰のクラブラウンジ</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ＴＩＡＤ，Ａｕｔｏｇｒａｐｈ　Ｃｏｌｌｅｃｔｉｏｎ（マリオットグループ）</td>
                  <td className="p-3 font-bold">★ 4.63</td>
                  <td className="p-3 text-stone-600">久屋大通公園の緑を望むマリオット独立系最高峰ブランド！全室50㎡超・テラス付き最新ホテル</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">名古屋観光ホテル</td>
                  <td className="p-3 font-bold">★ 4.55</td>
                  <td className="p-3 text-stone-600">昭和十一年創業・中部の迎賓館として賓客を迎えてきた伝統と格式！伝統のおもてなしと至福のフレンチ</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/12543/12543.jpg"
                alt="名古屋マリオットアソシアホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.64（口コミ 4978件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">愛知県名古屋市（名駅・栄）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  名古屋マリオットアソシアホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  JR名古屋駅真上・地上200m超のパノラマビュー！圧倒的な利便性と最高峰のクラブラウンジ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  名古屋マリオットアソシアホテル —— 名古屋のランドマーク。新幹線改札から直結の摩天楼ステイと極上のおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> JR名古屋駅の直上・JRセントラルタワーズの圧倒的な利便性
                    </h5>
                    <p className="text-stone-600 leading-relaxed">改札からエレベーターで直結。雨に濡れずにチェックインでき、観光やショッピングに最高の拠点です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地上200m超の客室から望む名古屋市街と鈴鹿山脈の眺望
                    </h5>
                    <p className="text-stone-600 leading-relaxed">煌めく都市夜景を眼下に一望。上質なインテリアと大理石バスルームが非日常のひとときを演出します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地上52階のスカイラウンジ「ジーニス」と多彩な名門レストラン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">鉄板焼き、本格広東料理、フレンチなど一流の味が勢揃い。夜景を眺めながらのディナーは記念日に最適です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.64点、口コミ6200件超。「駅直結で便利すぎる、お部屋からの夜景が圧巻」「朝食ビュッフェのオムレツやひつまぶしが最高に美味しい」と大絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>愛知県 名古屋市中村区名駅1-1-4</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥19,500〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>12543</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】名古屋マリオットアソシアホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/187470/187470.jpg"
                alt="ＴＩＡＤ，Ａｕｔｏｇｒａｐｈ　Ｃｏｌｌｅｃｔｉｏｎ（マリオットグループ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.63（口コミ 46件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">愛知県名古屋市（名駅・栄）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ＴＩＡＤ，Ａｕｔｏｇｒａｐｈ　Ｃｏｌｌｅｃｔｉｏｎ（マリオットグループ）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  久屋大通公園の緑を望むマリオット独立系最高峰ブランド！全室50㎡超・テラス付き最新ホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  TIAD, Autograph Collection —— 自然と都市が美しく調和。インドアウェルネスプールと洗練のモダンデザイン
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室50㎡以上の広さを誇り、バルコニーを備えた開放的な客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">公園の緑や街並みを望むプライベートテラス。スタイリッシュな家具と最新設備が心地よい寛ぎを約束します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 自然光が差し込むインドアインフィニティプールとウェルネス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">都会にいながらリゾート気分を味わえる温水プールとジム。極上のウェルネス体験で心身をリフレッシュできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> フレンチと和の技法が融合したオールデイダイニング「Table For Tomorrow」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">愛知・東海の厳選食材を活かしたモダンな料理。オープンキッチンから届く出来立ての味を楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.63点、口コミ高評価。「お部屋が広くてテラスが最高、プールも高級感がある」「スタッフの接客がとても丁寧で洗練された大人のホテル」と評判。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>愛知県 名古屋市中区栄5-15-19</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥27,198〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>187470</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D187470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ＴＩＡＤ，Ａｕｔｏｇｒａｐｈ　Ｃｏｌｌｅｃｔｉｏｎ（マリオットグループ） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2046/2046.jpg"
                alt="名古屋観光ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.55（口コミ 4404件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">愛知県名古屋市（名駅・栄）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  名古屋観光ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  昭和十一年創業・中部の迎賓館として賓客を迎えてきた伝統と格式！伝統のおもてなしと至福のフレンチ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  名古屋観光ホテル —— 歴史に裏打ちされた品格。クラシカルな美しさと熟練のホテルマンによる心温まるサービス
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 歴史ある伝統建築とリニューアルされた上質な客室空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">皇族や国内外の要人に愛されてきたクラシックホテル。気品漂うロビーと落ち着いたインテリアが旅人を包み込みます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地下鉄「伏見駅」から徒歩2分・栄や名駅へアクセス抜群
                    </h5>
                    <p className="text-stone-600 leading-relaxed">名古屋のビジネスとショッピングの中心地に位置。御園座や名古屋市美術館への散策にも便利です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伝統の技を受け継ぐ老舗フレンチ「エスコフィエ」とライブキッチンブッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">一流の料理人が仕立てるクラシックフレンチや、厳選食材が並ぶ朝食バイキング。本物の美味を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.55点、口コミ2600件超。「老舗ならではの行き届いた接客とおもてなしに感動」「お部屋の改装が綺麗でベッドも寝心地が良く大満足」と信頼の評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>愛知県 名古屋市中区錦1-19-30</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥9,270〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>2046</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D2046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】名古屋観光ホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 名古屋城・本丸御殿＆熱田神宮・大須商店街観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                特別史跡「名古屋城」と復元された豪華絢爛「本丸御殿」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                徳川家康が築城した名城。狩野派の障壁画や金箔が輝く本丸御殿の美しさは圧巻。「金シャチ横丁」での名古屋メシ食べ歩きも人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                三種の神器「草薙神剣」を祀る古社「熱田神宮」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                鬱蒼とした神苑に抱かれる東海屈指のパワースポット。名物「宮きしめん」や、近隣の「あつた蓬莱軒」でのひつまぶしが定番です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                活気あふれるアーケード街「大須商店街」＆大須観音
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                古着、電化製品、多国籍グルメ、老舗和菓子店がひしめく日本一元気な商店街。食べ歩きやカルチャー散策に最適です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              愛知県名古屋市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「愛知県名古屋市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で名古屋市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 東海道新幹線で東京から約1時間35分、新大阪から約50分
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新幹線ですぐのアクセス。3年間の有効期間内で、週末のご褒美旅行やコンサート遠征、ジブリパーク観光に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                名古屋マリオット、TIAD、名古屋観光ホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-hakone-yumoto-gateway-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根湯本温泉 玄関口の極上湯浴み＆老舗名宿特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-fukuoka-hakata-luxury-gourmet-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 福岡・博多 駅直結ラグジュアリー＆天然温泉スパ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
