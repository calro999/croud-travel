import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【洞爺湖温泉×ふるさと納税】ロングラン花火＆湖上インフィニティスパ！絶景リゾート特集｜ウィンザーホテル洞爺・湖の栖・サンパレス',
  description: '北海道屈指のカルデラ湖畔・洞爺湖町＆壮瞥町を楽天ふるさと納税でお得に極上ステイ！山頂から湖と海を一望する世界的サミットホテル「ザ・ウィンザーホテル洞爺」、全室客室温泉露天風呂付き「ザ・レイクスイート 湖の栖」、広大な温泉ビーチの「洞爺サンパレス リゾート＆スパ」を徹底比較。ロングラン花火大会やトラベルクーポン活用術を網羅。',
  keywords: '洞爺湖温泉 ふるさと納税,ウィンザーホテル洞爺 クーポン,湖の栖 ふるさと納税 洞爺,洞爺サンパレス 宿泊,洞爺湖町 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-toyako-onsen-lakeview-fireworks-stay',
  },
  openGraph: {
    title: '【洞爺湖温泉×ふるさと納税】ロングラン花火＆湖上インフィニティスパ！絶景リゾート特集｜ウィンザーホテル洞爺・湖の栖・サンパレス',
    description: '北海道屈指のカルデラ湖畔・洞爺湖町＆壮瞥町を楽天ふるさと納税でお得に極上ステイ！山頂から湖と海を一望する世界的サミットホテル「ザ・ウィンザーホテル洞爺」、全室客室温泉露天風呂付き「ザ・レイクスイート 湖の栖」、広大な温泉ビーチの「洞爺サンパレス リゾート＆スパ」を徹底比較。ロングラン花火大会やトラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-toyako-onsen-lakeview-fireworks-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【洞爺湖温泉×ふるさと納税】ロングラン花火＆湖上インフィニティスパ！絶景リゾート特集｜ウィンザーホテル洞爺・湖の栖・サンパレス',
    description: '北海道屈指のカルデラ湖畔・洞爺湖町＆壮瞥町を楽天ふるさと納税でお得に極上ステイ！山頂から湖と海を一望する世界的サミットホテル「ザ・ウィンザーホテル洞爺」、全室客室温泉露天風呂付き「ザ・レイクスイート 湖の栖」、広大な温泉ビーチの「洞爺サンパレス リゾート＆スパ」を徹底比較。ロングラン花火大会やトラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-toyako-onsen-lakeview-fireworks-stay',
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
        <span className="text-stone-700 font-medium truncate">【洞爺湖温泉×ふるさと納税】ロングラン花火＆湖上インフィニティスパ！絶景リゾート特集｜ウィンザーホテル洞爺・湖の栖・サンパレス</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>北海道洞爺湖町・壮瞥町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【洞爺湖温泉×ふるさと納税】ロングラン花火＆湖上インフィニティスパ！絶景リゾート特集｜ウィンザーホテル洞爺・湖の栖・サンパレス
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          北海道屈指のカルデラ湖畔・洞爺湖町＆壮瞥町を楽天ふるさと納税でお得に極上ステイ！山頂から湖と海を一望する世界的サミットホテル「ザ・ウィンザーホテル洞爺」、全室客室温泉露天風呂付き「ザ・レイクスイート 湖の栖」、広大な温泉ビーチの「洞爺サンパレス リゾート＆スパ」を徹底比較。ロングラン花火大会やトラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            鏡のように澄み渡るカルデラ湖と中島、有珠山の威容——毎夜打ち上がる湖上花火と大パノラマ温泉に酔いしれる北のネイチャーリゾート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北海道南西部、支笏洞爺国立公園に位置する洞爺湖（とうやこ）。約11万年前の巨大噴火によって形成された円形のカルデラ湖であり、湖中央に浮かぶ「中島」の原生林、南岸にそびえる活火山「有珠山（うすざん）」と「昭和新山」が織りなす大自然の造形美は、日本初の「世界ジオパーク」に登録されています。湖畔に湧き出す洞爺湖温泉は、毎分約1,400リットルの豊富な湯量を誇り、毎年4月下旬から10月末まで毎夜開催される「洞爺湖ロングラン花火大会」が温泉街の夜を彩ります。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            洞爺湖温泉の最大の魅力は、遮るもののない湖と空のパノラマを湯船から一望するインフィニティ温泉体験と、噴火湾（内浦湾）の新鮮なホタテ・毛ガニ・ボタンエビ、洞爺湖周辺の豊穣な大地で育つ黒毛和牛や有機野菜。北海道洞爺湖町や壮瞥町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの最高峰リゾートホテルへお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。
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
                  <td className="p-3 font-bold text-amber-900">ザ・ウィンザーホテル洞爺　リゾート＆スパ　ｂｙ　ＩＨＧ</td>
                  <td className="p-3 font-bold">★ 4.44</td>
                  <td className="p-3 text-stone-600">標高625mのポロモイ山山頂に君臨するサミットホテル！洞爺湖と内浦湾を一望する奇跡の360度パノラマ</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ザ・レイクスイート湖の栖（グランベルホテルズ&amp;リゾーツ）</td>
                  <td className="p-3 font-bold">★ 4.52</td>
                  <td className="p-3 text-stone-600">全客室に洞爺湖を望む温泉露天風呂を完備！湖面と一体化する最上階インフィニティ露天風呂と花火特等席</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">洞爺サンパレス　リゾート＆スパ（グランベルホテルズ＆リゾーツ）</td>
                  <td className="p-3 font-bold">★ 3.79</td>
                  <td className="p-3 text-stone-600">湖畔の巨大温泉リゾート！洞爺湖を見晴らす露天風呂と屋内大型プール＆充実のアクティビティ</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/15606/15606.jpg"
                alt="ザ・ウィンザーホテル洞爺　リゾート＆スパ　ｂｙ　ＩＨＧ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.44（口コミ 668件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道洞爺湖町・壮瞥町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ザ・ウィンザーホテル洞爺　リゾート＆スパ　ｂｙ　ＩＨＧ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  標高625mのポロモイ山山頂に君臨するサミットホテル！洞爺湖と内浦湾を一望する奇跡の360度パノラマ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ザ・ウィンザーホテル洞爺 リゾート＆スパ —— 天空の城のような圧倒的スケール。世界が称賛した最高峰のおもてなしと美食
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 洞爺湖と太平洋（内浦湾）の両方を同時に見下ろす山頂の絶景立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">山頂に建つ唯一無二のロケーション。雲海が眼下に広がる朝の景色や夕暮れのマジックアワーは息をのむ美しさです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 数寄屋造りの本格温泉「山泉」と極上のウェルネススパ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">檜の香る大浴場と露天風呂。ガラス張りの温水プールや本格サロンで、心身を解きほぐす至高のリラクゼーションを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ミシュラン星付きレストランを擁する世界基準のダイニング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">北海道の極上素材を活かしたフレンチ、本格イタリアン、鉄板焼き、日本料理など、選りすぐりの美食が特別な夜を演出します。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.44点、国内外の高評価多数。「ロビーに入った瞬間のパノラマビューに息をのんだ」「一生に一度は泊まるべき素晴らしいホテルとお料理」と大絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 虻田郡洞爺湖町清水</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥20,559〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>15606</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ザ・ウィンザーホテル洞爺　リゾート＆スパ　ｂｙ　ＩＨＧ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/172346/172346.jpg"
                alt="ザ・レイクスイート湖の栖（グランベルホテルズ&amp;リゾーツ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.52（口コミ 907件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道洞爺湖町・壮瞥町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ザ・レイクスイート湖の栖（グランベルホテルズ&amp;リゾーツ）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全客室に洞爺湖を望む温泉露天風呂を完備！湖面と一体化する最上階インフィニティ露天風呂と花火特等席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ザ・レイクスイート 湖の栖 —— 湖に浮かぶような非日常。全室露天風呂付き客室と湖上ビュッフェダイニング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室のテラスに源泉掛け流し温泉露天風呂を完備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">湖を吹き抜ける風を感じながらプライベートに入浴。夜にはテラスからロングラン花火を大迫力で鑑賞できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階8階に設えられた湖と空が繋がるインフィニティ設計の大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">湯船が湖面へと突き出すような絶景露天風呂。まるで洞爺湖の上に浮かんでいるかのような神秘的な感覚を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 水のテラスダイニング「The 洞爺」での優雅な和洋ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">オープンキッチンで仕上げられる旬の道産食材ディナー。美しい水盤を眺めながら優雅な食事時間を楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.52点、口コミ高評価。「お部屋の露天風呂から見る花火が最高だった」「インフィニティ温泉の開放感が素晴らしく、スタッフの対応も完璧」とリピーター多数。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 有珠郡壮瞥町洞爺湖温泉7-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥29,920〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>172346</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ザ・レイクスイート湖の栖（グランベルホテルズ&amp;リゾーツ） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/17810/17810.jpg"
                alt="洞爺サンパレス　リゾート＆スパ（グランベルホテルズ＆リゾーツ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.79（口コミ 3823件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道洞爺湖町・壮瞥町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  洞爺サンパレス　リゾート＆スパ（グランベルホテルズ＆リゾーツ）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  湖畔の巨大温泉リゾート！洞爺湖を見晴らす露天風呂と屋内大型プール＆充実のアクティビティ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  洞爺サンパレス リゾート＆スパ —— 湖の波打ち際に佇む一大リゾート。開放感抜群の露天風呂と多彩な施設
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 湖畔のパノラマを満喫できる広々とした大浴場と露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">洞爺湖の自然を間近に感じる大浴場。湯上がりのラウンジからも湖の景色をゆったり楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 波の出るプールやスライダーを備えた大型ウォーターパーク
                    </h5>
                    <p className="text-stone-600 leading-relaxed">天候を気にせず年中遊べる屋内プール。家族連れやグループ旅行に大人気のアクティビティ施設です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の海鮮や名物料理がずらりと並ぶ豪華ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">出来立ての料理がライブキッチンから次々と提供されるディナーバイキング。大人から子供まで気兼ねなく楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価3.79点、口コミ4200件超。「プールと温泉が充実していて子供が大喜びだった」「湖の景色が素晴らしく、バイキングも種類豊富で家族旅行に最高」とファミリーに大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 有珠郡壮瞥町洞爺湖温泉7-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥9,900〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>17810</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】洞爺サンパレス　リゾート＆スパ（グランベルホテルズ＆リゾーツ） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 洞爺湖ロングラン花火＆有珠山ロープウェイ・昭和新山観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                洞爺湖ロングラン花火大会（4月下旬〜10月末・毎夜開催）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                湖上を移動する船から打ち上げられる花火。湖畔の遊歩道やホテルの客室露天風呂、遊覧船の上から約20分間の幻想的な花火ショーを楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                有珠山ロープウェイ＆洞爺湖展望台
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                昭和新山山麓から有珠山山頂へ約6分のロープウェイ。山頂展望台からは洞爺湖・羊蹄山と、内浦湾や火口原の迫力あるパノラマを一望できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                昭和新山と有珠山ジオパークの火山散策道
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                今なお白い噴煙を上げ続ける国の特別天然記念物「昭和新山」。火山村やクマ牧場など、大地の息吹を間近に体感できるスポットが充実しています。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              北海道洞爺湖町・壮瞥町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「北海道洞爺湖町」等のクーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で洞爺湖町または壮瞥町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 新千歳空港やJR札幌駅から特急北斗で洞爺駅へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新千歳空港から南千歳経由のJR特急北斗で洞爺駅まで約1時間半、札幌駅からも約1時間50分。3年間の有効期間内で、夏の花火や冬の雪景色に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ウィンザーホテル洞爺、湖の栖、洞爺サンパレスなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
