import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【草津温泉×ふるさと納税】湯畑徒歩圏内の老舗名宿特集！源泉かけ流しと名湯巡り完全ガイド｜望雲・ホテル一井・奈良屋',
  description: '日本三名泉の筆頭・群馬県草津温泉を楽天ふるさと納税でお得に贅沢ステイ！創業慶長四年・二つの源泉を引く「望雲」、湯畑が目の前の絶景老舗「ホテル一井」、湯守が丹精込めて仕込む極上の白旗源泉「奈良屋」を徹底比較。草津町トラベルクーポンの賢い活用法を完全網羅。',
  keywords: '草津温泉 ふるさと納税,草津温泉 湯畑 宿 ふるさと納税,草津温泉 望雲 クーポン,ホテル一井 草津 ふるさと納税,奈良屋 草津町 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kusatsu-onsen-yubatake-heritage-stay',
  },
  openGraph: {
    title: '【草津温泉×ふるさと納税】湯畑徒歩圏内の老舗名宿特集！源泉かけ流しと名湯巡り完全ガイド｜望雲・ホテル一井・奈良屋',
    description: '日本三名泉の筆頭・群馬県草津温泉を楽天ふるさと納税でお得に贅沢ステイ！創業慶長四年・二つの源泉を引く「望雲」、湯畑が目の前の絶景老舗「ホテル一井」、湯守が丹精込めて仕込む極上の白旗源泉「奈良屋」を徹底比較。草津町トラベルクーポンの賢い活用法を完全網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kusatsu-onsen-yubatake-heritage-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【草津温泉×ふるさと納税】湯畑徒歩圏内の老舗名宿特集！源泉かけ流しと名湯巡り完全ガイド｜望雲・ホテル一井・奈良屋',
    description: '日本三名泉の筆頭・群馬県草津温泉を楽天ふるさと納税でお得に贅沢ステイ！創業慶長四年・二つの源泉を引く「望雲」、湯畑が目の前の絶景老舗「ホテル一井」、湯守が丹精込めて仕込む極上の白旗源泉「奈良屋」を徹底比較。草津町トラベルクーポンの賢い活用法を完全網羅。',
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
    datePublished: '2026-09-10T16:35:00+09:00',
    dateModified: '2026-09-10T16:35:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-kusatsu-onsen-yubatake-heritage-stay',
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
        <span className="text-stone-700 font-medium truncate">【草津温泉×ふるさと納税】湯畑徒歩圏内の老舗名宿特集！源泉かけ流しと名湯巡り完全ガイド｜望雲・ホテル一井・奈良屋</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>群馬県草津町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【草津温泉×ふるさと納税】湯畑徒歩圏内の老舗名宿特集！源泉かけ流しと名湯巡り完全ガイド｜望雲・ホテル一井・奈良屋
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本三名泉の筆頭・群馬県草津温泉を楽天ふるさと納税でお得に贅沢ステイ！創業慶長四年・二つの源泉を引く「望雲」、湯畑が目の前の絶景老舗「ホテル一井」、湯守が丹精込めて仕込む極上の白旗源泉「奈良屋」を徹底比較。草津町トラベルクーポンの賢い活用法を完全網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            毎分三万リットルの湧出量を誇る日本一の名湯——湯畑の湯けむりと老舗旅館で味わう至高の湯治ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            群馬県吾妻郡草津町、標高1,200メートルの高原に位置する草津温泉。自然湧出量日本一を誇り、古くから「恋の病以外ならどんな病も治す」と称えられてきた日本屈指の名湯です。温泉街の中心に位置する「湯畑」からは、エメラルドグリーンのお湯が滾々と湧き出し、立ち上る白い湯けむりと心地よい硫黄の香りが旅人を非日常の世界へと誘います。強酸性の泉質は極めて高い殺菌力を持ち、日々の疲労を根底から解きほぐしてくれます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            草津温泉の醍醐味は、湯畑周辺の風情ある路地散策と、宿ごとに異なる源泉の引き湯を堪能すること。「万代鉱源泉」「西の河原源泉」「白旗源泉」など、源泉ごとの個性を肌で感じながら、夜にはライトアップされた幻想的な湯畑をそぞろ歩く贅沢。夕食には上州牛のすき焼きや旬の上州野菜をふんだんに取り入れた会席料理に舌鼓。群馬県草津町へのふるさと納税で獲得できる楽天トラベルクーポンを使えば、寄付額の30%相当が宿泊代金から割引され、憧れの老舗宿への滞在がお得に実現します。
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
                  <td className="p-3 font-bold text-amber-900">草津温泉　望雲</td>
                  <td className="p-3 font-bold">★ 4.65</td>
                  <td className="p-3 text-stone-600">創業慶長四年・十返舎一九ゆかりの歴史宿！「西の河原」「万代鉱」の二大源泉を六つの湯船で満喫</td>
                  <td className="p-3 text-stone-600">由緒ある歴史・贅沢な湯巡り</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">草津温泉　ホテル一井</td>
                  <td className="p-3 font-bold">★ 4.62</td>
                  <td className="p-3 text-stone-600">創業三百余年・湯畑の目の前に建つ草津の象徴！一番街の眺望と貴重な白旗源泉・万代鉱源泉</td>
                  <td className="p-3 text-stone-600">抜群の好立地・絶景の眺望</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">草津温泉　奈良屋</td>
                  <td className="p-3 font-bold">★ 4.68</td>
                  <td className="p-3 text-stone-600">明治十年創業・専任の「湯守」が湯を仕込む最高峰旅館！白旗源泉のまろやかな湯と格式の和モダン空間</td>
                  <td className="p-3 text-stone-600">大人の静寂・上質なおこもり</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4904/4904.jpg"
                alt="草津温泉　望雲"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.65（口コミ 1346件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県草津町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  草津温泉　望雲
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業慶長四年・十返舎一九ゆかりの歴史宿！「西の河原」「万代鉱」の二大源泉を六つの湯船で満喫
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  草津温泉 望雲（ぼううん） —— 歴史を刻む名門老舗。新緑と紅葉が彩る日本庭園と贅沢な掛け流しの湯
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 「西の河原源泉」と「万代鉱源泉」を引く六つの名湯風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">敷地内に引き込まれた二つの貴重な天然源泉。露天風呂付き大浴場「遊山の湯」「万代の湯」「西の湯」など趣の異なる湯船で贅沢な源泉かけ流し湯巡りが楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 四季の草花が咲き誇る美しい日本庭園と洗練された館内
                    </h5>
                    <p className="text-stone-600 leading-relaxed">湯畑から徒歩約3分の高台に位置しながら静寂に包まれた宿。春のシャクナゲや秋の紅葉など、手入れの行き届いた庭園が旅情を深めてくれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> お部屋または個室料亭でいただく上州名物の本格会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">上州牛のしゃぶしゃぶや陶板焼き、地元の採れたて山菜や川魚を取り入れた季節感あふれる和食会席。周囲を気にせず優雅に美食を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.67点、口コミ2400件超。「お風呂の泉質が素晴らしく肌がツルツルになった」「湯畑にも近く静かで、スタッフのおもてなしとお料理が最高」と大絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 吾妻郡草津町433-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥18,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>4904</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】草津温泉　望雲 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/39705/39705.jpg"
                alt="草津温泉　ホテル一井"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.62（口コミ 3251件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県草津町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  草津温泉　ホテル一井
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業三百余年・湯畑の目の前に建つ草津の象徴！一番街の眺望と貴重な白旗源泉・万代鉱源泉
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  草津温泉 ホテル一井 —— 湯畑を眼下に見晴らす特等席。白濁の湯と湯畑ビュー客室で過ごす特別な夜
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 客室の窓から湯畑を一望できる希少な「本館・湯畑側客室」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">昼の活気ある湯畑から、夜の幻想的なイルミネーションまで、お部屋にいながら草津のシンボル風景を独り占めできる唯一無二のロケーションです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 貴重な「白旗源泉」を引く大浴場と「万代鉱源泉」の露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">源頼朝が発見したと伝わる乳白色の「白旗源泉」の内湯と、湯量豊富な「万代鉱源泉」の庭園露天風呂。泉質の違いをじっくりと体感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ビュッフェダイニングまたはお部屋食で味わう旬の味覚
                    </h5>
                    <p className="text-stone-600 leading-relaxed">上州の郷土料理やライブキッチンが楽しいビュッフェスタイル、または落ち着いたお部屋食・お食事処会席から旅行スタイルに合わせて選べます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.39点、口コミ4700件超。「湯畑が本当に目の前で観光に最高」「大浴場の白濁したお湯が本格的で、湯畑の夜景にも感動した」と圧倒的な人気を誇ります。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 吾妻郡草津町草津411</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥18,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>39705</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D39705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】草津温泉　ホテル一井 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/70807/70807.jpg"
                alt="草津温泉　奈良屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.68（口コミ 910件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県草津町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  草津温泉　奈良屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  明治十年創業・専任の「湯守」が湯を仕込む最高峰旅館！白旗源泉のまろやかな湯と格式の和モダン空間
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  草津温泉 奈良屋 —— 伝統の湯守文化を受け継ぐ名門。研ぎ澄まされた美意識とおもてなしの極み
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 湯守が気温や天候に合わせて手作業で湯温を調整する名湯「御汲上の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">草津最古の白旗源泉を直接引き、湯守が一晩かけて湯をもみ、空気を含ませてまろやかな肌触りに仕立て上げた極上の湯浴み体験を提供します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 歴史ある梁を活かした重厚な数寄屋造りとモダンな喫茶去
                    </h5>
                    <p className="text-stone-600 leading-relaxed">帳場の温かい灯り、畳敷きの心地よさ、そしてサイフォン珈琲が薫るカフェバー。古き良き伝統と現代の寛ぎが見事に調和しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 職人の繊細な技が光る個室食事処での本格旬会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">厳選された上州牛や全国から届く選りすぐりの旬素材。出汁の旨味を極めた一皿一皿が目と舌を喜ばせてくれます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.61点、口コミ1200件超。「お湯が本当に柔らかく、これまで入った草津の湯で一番」「宿全体の雰囲気が洗練されており素晴らしい滞在だった」と熱烈な支持。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 吾妻郡草津町草津396</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥34,303〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>70807</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D70807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】草津温泉　奈良屋 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 草津温泉街・湯畑周辺の散策＆名所めぐりガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                熱乃湯での伝統芸能「湯もみと踊り」ショー鑑賞
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                高温の草津の湯を水で薄めず冷ますために考案された伝統技法「湯もみ」。「草津よいとこ一度はおいで」の唄に合わせて大きな板でお湯をかき混ぜる迫力のショーを間近で見学できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                西の河原公園の広大な露天風呂と湯の川散歩
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                河原のいたるところから温泉が湧き出し、湯の川となって流れる西の河原公園。最奥部には男女合わせて500平方メートルの大自然に囲まれた日本屈指の大露天風呂があります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                湯畑まわりの温泉街グルメと足湯「湯けむり亭」
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                湯畑のすぐ脇にある総檜造りの足湯「湯けむり亭」。温泉まんじゅうの食べ歩きや名物の焼き鳥、温泉たまごを味わいながら足湯で一休みするのが定番の楽しみ方です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              群馬県草津町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「群馬県草津町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で草津町を寄付先に指定し、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンが即時付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 3年間の有効期間内で温泉旅行の日程をじっくり計画
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                クーポンの有効期限は発行からたっぷり3年間。秋の紅葉シーズンや冬の幻想的な雪見風呂、爽やかな夏の高原避暑など、好みの時期に合わせて予約できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポンを適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                望雲、ホテル一井、奈良屋などの対象宿の宿泊プランを選び、予約決済画面でクーポンを選択。宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-gora-onsen-private-roten-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根強羅温泉 全室客室露天風呂付き極上宿特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
