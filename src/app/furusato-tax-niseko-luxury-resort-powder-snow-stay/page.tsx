import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【ニセコ×ふるさと納税】世界最高峰パウダースノー＆ラグジュアリーステイ！羊蹄山ビュー名門ホテル特集｜パークハイアット・雪ニセコ・坐忘林',
  description: '世界中のスキーヤーや富裕層を魅了する国際的スノーリゾート・北海道ニセコ（倶知安町・ニセコ町）を楽天ふるさと納税でお得に贅沢滞在！ゲレンデ直結の世界的ラグジュアリー「パークハイアット ニセコ HANAZONO」、羊蹄山ビューと上質スパの「雪ニセコ」、白樺林に抱かれた源泉掛け流し離れ宿「坐忘林」を徹底比較。高額還元トラベルクーポン活用術を網羅。',
  keywords: 'ニセコ ふるさと納税,パークハイアットニセコ ふるさと納税,雪ニセコ クーポン,坐忘林 ふるさと納税,倶知安町 ふるさと納税 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-niseko-luxury-resort-powder-snow-stay',
  },
  openGraph: {
    title: '【ニセコ×ふるさと納税】世界最高峰パウダースノー＆ラグジュアリーステイ！羊蹄山ビュー名門ホテル特集｜パークハイアット・雪ニセコ・坐忘林',
    description: '世界中のスキーヤーや富裕層を魅了する国際的スノーリゾート・北海道ニセコ（倶知安町・ニセコ町）を楽天ふるさと納税でお得に贅沢滞在！ゲレンデ直結の世界的ラグジュアリー「パークハイアット ニセコ HANAZONO」、羊蹄山ビューと上質スパの「雪ニセコ」、白樺林に抱かれた源泉掛け流し離れ宿「坐忘林」を徹底比較。高額還元トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-niseko-luxury-resort-powder-snow-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【ニセコ×ふるさと納税】世界最高峰パウダースノー＆ラグジュアリーステイ！羊蹄山ビュー名門ホテル特集｜パークハイアット・雪ニセコ・坐忘林',
    description: '世界中のスキーヤーや富裕層を魅了する国際的スノーリゾート・北海道ニセコ（倶知安町・ニセコ町）を楽天ふるさと納税でお得に贅沢滞在！ゲレンデ直結の世界的ラグジュアリー「パークハイアット ニセコ HANAZONO」、羊蹄山ビューと上質スパの「雪ニセコ」、白樺林に抱かれた源泉掛け流し離れ宿「坐忘林」を徹底比較。高額還元トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-niseko-luxury-resort-powder-snow-stay',
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
        <span className="text-stone-700 font-medium truncate">【ニセコ×ふるさと納税】世界最高峰パウダースノー＆ラグジュアリーステイ！羊蹄山ビュー名門ホテル特集｜パークハイアット・雪ニセコ・坐忘林</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>北海道倶知安町・ニセコ町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【ニセコ×ふるさと納税】世界最高峰パウダースノー＆ラグジュアリーステイ！羊蹄山ビュー名門ホテル特集｜パークハイアット・雪ニセコ・坐忘林
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          世界中のスキーヤーや富裕層を魅了する国際的スノーリゾート・北海道ニセコ（倶知安町・ニセコ町）を楽天ふるさと納税でお得に贅沢滞在！ゲレンデ直結の世界的ラグジュアリー「パークハイアット ニセコ HANAZONO」、羊蹄山ビューと上質スパの「雪ニセコ」、白樺林に抱かれた源泉掛け流し離れ宿「坐忘林」を徹底比較。高額還元トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            シャンパンパウダースノーと蝦夷富士・羊蹄山の威容——世界屈指のウィンターリゾートで味わう極上の温泉ウェルネスと北の美食体験
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北海道後志総合振興局管内に位置するニセコエリア（倶知安町・ニセコ町）。「蝦夷富士」と称えられる秀峰・羊蹄山（ようていざん）とニセコアンヌプリを望むこの地は、日本海からの寒気がもたらす水分量わずか数パーセントの超極上「シャンパンパウダースノー」が降り積もる世界屈指のウィンタースポーツの聖地です。近年は世界各国から最高級ホテルブランドが進出し、国際色豊かなハイエンドリゾートタウンへと進化を遂げました。冬のスキー・スノーボードはもちろん、夏から秋には爽やかな高原リゾートとしてゴルフ、ラフティング、トレッキング、星空観察など四季折々の自然を満喫できます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ニセコ滞在のもう一つの大きな醍醐味は、大自然の中で湧き出す豊富な天然温泉と、北海道の豊かな大地が育んだ最高峰の食体験。ニセコ温泉郷は多種多様な泉質を誇り、疲れた体を芯から温めて解きほぐします。夕食には道産牛の薪火グリルや蝦夷鹿、余市港・小樽港直送の新鮮なウニ・アワビ・ホタテ、地元羊蹄山麓の採れたて野菜など、一流シェフが手掛けるインターナショナル＆和食の贅沢なフルコースを堪能できます。北海道倶知安町やニセコ町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの超一流リゾートホテルへお得に宿泊でき、一生の記憶に残るプレミアムなバケーションが叶います。
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
                  <td className="p-3 font-bold text-amber-900">パークハイアットニセコＨＡＮＡＺＯＮＯ</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">ニセコHANAZONOリゾート直結！全室スイート仕様・天然温泉大浴場と世界屈指のダイニング</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">雪ニセコ</td>
                  <td className="p-3 font-bold">★ 4.77</td>
                  <td className="p-3 text-stone-600">羊蹄山のパノラマビューを望むグランディール！天然温泉スパとミシュラン星付き監修ダイニング</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">坐忘林</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">白樺の原生林に佇むわずか15室の珠玉！全室に源泉掛け流しの内湯と露天の２つの湯船を完備</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/188207/188207.jpg"
                alt="パークハイアットニセコＨＡＮＡＺＯＮＯ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 100件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道倶知安町・ニセコ町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  パークハイアットニセコＨＡＮＡＺＯＮＯ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ニセコHANAZONOリゾート直結！全室スイート仕様・天然温泉大浴場と世界屈指のダイニング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  パークハイアットニセコ HANAZONO —— ゲレンデ直結の国際的ラグジュアリー。アンヌプリと白樺の美景に包まれる最高峰リゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> HANAZONOゲレンデ直結のスキーイン・スキーアウト環境
                    </h5>
                    <p className="text-stone-600 leading-relaxed">スキーバトラーサービスや専用ロッカーを備え、白銀のパウダースノーゲレンデへスムーズに直行できる贅沢なロケーションです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ミネラル豊富なニセコの天然温泉大浴場＆スパウェルネス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広々とした内湯とスタイリッシュな温水プール、プライベートトリートメントルームを完備。至高のリラクゼーションを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ミシュラン星付きシェフ監修など多彩な10のレストラン＆バー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">北海道の旬食材を活かした炉端焼き、フレンチ、中華、本格イタリアン、鉄板焼きなど、世界的グルメを優雅に堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">世界最高峰のホスピタリティと現代アートが融合した空間。「ゲレンデ直結の利便性とホテルの豪華さが圧巻」「お部屋からのアンヌプリの雪景色と温泉が最高」と国内外の旅行者から絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 虻田郡倶知安町字岩尾別328-47</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>要問い合わせ /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>188207</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D188207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】パークハイアットニセコＨＡＮＡＺＯＮＯ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/183609/183609.jpg"
                alt="雪ニセコ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.77（口コミ 52件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道倶知安町・ニセコ町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  雪ニセコ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  羊蹄山のパノラマビューを望むグランディール！天然温泉スパとミシュラン星付き監修ダイニング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  雪ニセコ（Setsu Niseko） —— 雄大な羊蹄山を正面に望む極上ウェルネス。天然温泉と美食が織りなす現代の別荘ステイ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 雄大な羊蹄山（蝦夷富士）を望む圧倒的な眺望と客室設計
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大きなピクチャーウィンドウから四季折々の羊蹄山を眺める贅沢。キッチンやリビングを備えたコンドミニアムスタイルの広々スイートです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 屋内外の天然温泉大浴場と貸切温泉、サウナ施設
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ミネラルをたっぷり含んだ天然温泉の露天風呂。サウナやリラクゼーションラウンジも充実し、本格的な「ととのい」を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ミシュラン星付き名店「メログラーノ」監修レストランと和食処
                    </h5>
                    <p className="text-stone-600 leading-relaxed">北海道の上質な海産物や十勝ハーブ牛を取り入れたイタリアンや割烹料理、本格カフェなど多彩な食の楽しみが揃っています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.77点、口コミ高評価。「羊蹄山の眺めが素晴らしく、温泉とサウナの設備も超一流」「スタッフの接客とお料理の美味しさに感動した」と高い満足度。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 虻田郡倶知安町ニセコひらふ1条2丁目6番9号</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥10,665〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>183609</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D183609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】雪ニセコ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/184414/184414.jpg"
                alt="坐忘林"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 3件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道倶知安町・ニセコ町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  坐忘林
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  白樺の原生林に佇むわずか15室の珠玉！全室に源泉掛け流しの内湯と露天の２つの湯船を完備
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  坐忘林（Zaborin） —— 日常の雑念を忘れ大自然に浸る「坐忘」の極み。北斗の大地で味わう独自の「キタ・カイセキ」
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室に自噴する天然温泉の「内湯」と「露天風呂」の２つを配備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地下約千メートルから湧き出る新鮮な美肌の湯を贅沢に完全掛け流し。白樺林の雪景色や新緑を眺めながら心ゆくまで名湯に浸かれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 静寂と自然美が包み込むわずか15棟の独立感ある客室空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">木と石とガラスが調和した日本建築の美。床暖房や暖炉を備え、大自然の静寂の中で真のプライベートステイが約束されます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の風土と旬の恵みを昇華させた独自懐石「キタ・カイセキ」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">北海道産の厳選食材を用い、感性豊かに仕立てられたオリジナル懐石ディナー。一皿ごとに北の大地の物語が広がります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">日本の旅館文化とモダンデザインが融合した奇跡の隠れ宿。「全室に露天風呂と内風呂がありお湯も最高」「雪の白樺林を眺めながら静かに過ごす時間は一生の宝物」と最高峰の評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 虻田郡倶知安町花園76-4</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥70,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>184414</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D184414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】坐忘林 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> ニセコエリア・羊蹄山＆パウダースノー・アウトドア観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                ニセコユナイテッド（4大スキー場）での極上パウダースノー体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                ニセコアンヌプリ、ニセコビレッジ、ニセコマウンテンリゾートグラン・ヒラフ、HANAZONOの4大ゲレンデが連なるビッグリゾート。世界屈指の雪質と多彩なコースを満喫できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                羊蹄山（蝦夷富士）の名水湧水群とふきだし公園
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                羊蹄山の雪解け水が数十年の歳月をかけて湧き出す京極町の「ふきだし公園」や真狩村の湧水。ミネラル豊富な冷たい名水を味わえ、道の駅グルメも人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                夏の清流尻別川ラフティング＆ニセコパノラマラインドライブ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                日本一の清流に何度も選ばれた尻別川でのダイナミックなラフティングやカヤック。神仙沼を巡るニセコパノラマラインの絶景ドライブや紅葉散策も格別です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              北海道倶知安町・ニセコ町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「北海道倶知安町」等のクーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で倶知安町またはニセコ町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 新千歳空港から直行リゾートライナーやJR快速エアポートでアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新千歳空港から直行スキーバス（冬期）で約2時間半、または小樽・倶知安経由のJR線でアクセス。3年間の有効期間内で、冬のスキーシーズンや夏の避暑に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                パークハイアット、雪ニセコ、坐忘林などの宿泊プランを選び、予約決済画面でクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
