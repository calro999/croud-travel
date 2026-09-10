import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【中禅寺湖温泉×ふるさと納税】白濁硫黄露天風呂＆湖畔絶景クラシックリゾート！名宿特集｜中禅寺金谷ホテル・ホテル花庵・旅籠なごみ',
  description: '男体山の麓・日本一標高の高い湖畔温泉・栃木県日光中禅寺湖温泉を楽天ふるさと納税でお得に満喫！森と湖に抱かれるクラシック名門「中禅寺金谷ホテル」、全室レイクビューと二つの美肌の湯「ホテル花庵」、源泉掛け流しと地酒を味わう「旅籠なごみ」を徹底比較。日光市トラベルクーポン活用術を網羅。',
  keywords: '中禅寺湖 温泉 ふるさと納税,中禅寺金谷ホテル クーポン,ホテル花庵 ふるさと納税,旅籠なごみ 中禅寺湖 宿泊,日光市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-chuzenji-onsen-lake-kanaya-stay',
  },
  openGraph: {
    title: '【中禅寺湖温泉×ふるさと納税】白濁硫黄露天風呂＆湖畔絶景クラシックリゾート！名宿特集｜中禅寺金谷ホテル・ホテル花庵・旅籠なごみ',
    description: '男体山の麓・日本一標高の高い湖畔温泉・栃木県日光中禅寺湖温泉を楽天ふるさと納税でお得に満喫！森と湖に抱かれるクラシック名門「中禅寺金谷ホテル」、全室レイクビューと二つの美肌の湯「ホテル花庵」、源泉掛け流しと地酒を味わう「旅籠なごみ」を徹底比較。日光市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-chuzenji-onsen-lake-kanaya-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【中禅寺湖温泉×ふるさと納税】白濁硫黄露天風呂＆湖畔絶景クラシックリゾート！名宿特集｜中禅寺金谷ホテル・ホテル花庵・旅籠なごみ',
    description: '男体山の麓・日本一標高の高い湖畔温泉・栃木県日光中禅寺湖温泉を楽天ふるさと納税でお得に満喫！森と湖に抱かれるクラシック名門「中禅寺金谷ホテル」、全室レイクビューと二つの美肌の湯「ホテル花庵」、源泉掛け流しと地酒を味わう「旅籠なごみ」を徹底比較。日光市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T17:15:00+09:00',
    dateModified: '2026-09-10T17:15:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-chuzenji-onsen-lake-kanaya-stay',
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
        <span className="text-stone-700 font-medium truncate">【中禅寺湖温泉×ふるさと納税】白濁硫黄露天風呂＆湖畔絶景クラシックリゾート！名宿特集｜中禅寺金谷ホテル・ホテル花庵・旅籠なごみ</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>栃木県日光市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【中禅寺湖温泉×ふるさと納税】白濁硫黄露天風呂＆湖畔絶景クラシックリゾート！名宿特集｜中禅寺金谷ホテル・ホテル花庵・旅籠なごみ
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          男体山の麓・日本一標高の高い湖畔温泉・栃木県日光中禅寺湖温泉を楽天ふるさと納税でお得に満喫！森と湖に抱かれるクラシック名門「中禅寺金谷ホテル」、全室レイクビューと二つの美肌の湯「ホテル花庵」、源泉掛け流しと地酒を味わう「旅籠なごみ」を徹底比較。日光市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            男体山の雄姿と鏡のような中禅寺湖——奥日光湯元から引く白濁の硫黄泉とクラシカルな洋の美学に酔いしれる
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            栃木県日光市、標高1,269メートルという日本一標高の高い場所にある天然湖・中禅寺湖。明治から昭和初期にかけては、イギリスやイタリア、フランスなど各国の外交官たちが避暑のための大使館別荘を建て、「夏は外務省が日光に移る」と言われるほど国際的な避暑リゾートとして発展した歴史を持ちます。背後には標高2,486メートルの霊峰・男体山がそびえ、四季折々に色を変える豊かな森と青く澄み渡る湖面が織りなす風景は、まるで北欧のスイスを訪れたかのような気品に満ちています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            中禅寺湖温泉の大きな魅力は、約12km離れた奥日光湯元温泉からパイプで引き湯される濃厚な白濁の天然硫黄温泉。引き湯される間に湯揉みされ、角が取れたまろやかな肌触りとなって露天風呂に注がれます。夕食には金谷ホテル伝統の本格フランス料理や、日光名物の引き上げ湯波、ブランド牛「とちぎ和牛」の創作会席を堪能。栃木県日光市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの湖畔リゾート宿へお得に宿泊でき、特別な思い出が残る大人の休日が叶います。
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
                  <td className="p-3 font-bold text-amber-900">日光中禅寺温泉　中禅寺金谷ホテル</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">日本最古のリゾートホテルを受け継ぐ湖畔のクラシックリゾート！奥日光湯元から引く白濁の硫黄露天風呂「空ぶろ」</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・名庭園ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">日光中禅寺湖温泉　ホテル花庵</td>
                  <td className="p-3 font-bold">★ 4.64</td>
                  <td className="p-3 text-stone-600">全二十二室すべてが中禅寺湖に面したレイクビュー！白濁の硫黄泉とアルカリ性単純泉の「二つの温泉」を堪能</td>
                  <td className="p-3 text-stone-600">絶景の眺望・充実のリラクゼーション</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">中禅寺温泉　旅籠なごみ</td>
                  <td className="p-3 font-bold">★ 3.83</td>
                  <td className="p-3 text-stone-600">中禅寺湖の湖畔に佇む全室レイクビューの温もり宿！源泉掛け流しの濃厚硫黄泉とアットホームな滞在</td>
                  <td className="p-3 text-stone-600">観光散策・アットホームな寛ぎ</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759.jpg"
                alt="日光中禅寺温泉　中禅寺金谷ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 882件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">栃木県日光市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  日光中禅寺温泉　中禅寺金谷ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  日本最古のリゾートホテルを受け継ぐ湖畔のクラシックリゾート！奥日光湯元から引く白濁の硫黄露天風呂「空ぶろ」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  日光中禅寺温泉 中禅寺金谷ホテル —— 森と湖に抱かれるカナディアンテイストの洋風建築。伝統のフレンチと名湯の贅
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 満天の星空と森の息吹を感じる白濁の露天風呂「空ぶろ（そらぶろ）」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">木漏れ日や星空を仰ぐ露天風呂。奥日光湯元から引く乳白色の濃厚な硫黄泉に浸かり、森林浴と名湯のダブルリラックス効果を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 暖炉が灯る重厚なラウンジとウッドデッキのテラス席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">カナダ産の木材を贅沢に使ったロッジ風建築。大きな暖炉の炎を眺めながら珈琲やウイスキーを傾ける優雅な時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 金谷ホテル伝統のレシピを受け継ぐ本格フランス料理ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">名物「虹鱒のソテー金谷風」やとちぎ和牛のステーキなど、歴代の賓客を魅了してきた伝統のフレンチフルコースを堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.67点、口コミ1400件超。「露天風呂の硫黄泉が素晴らしく星空が最高に綺麗だった」「伝統のフレンチが絶品でスタッフの気配りも一流」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>栃木県 日光市中宮祠2482</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,781〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>28759</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】日光中禅寺温泉　中禅寺金谷ホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/54978/54978.jpg"
                alt="日光中禅寺湖温泉　ホテル花庵"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.64（口コミ 1285件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">栃木県日光市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  日光中禅寺湖温泉　ホテル花庵
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全二十二室すべてが中禅寺湖に面したレイクビュー！白濁の硫黄泉とアルカリ性単純泉の「二つの温泉」を堪能
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  日光中禅寺湖温泉 ホテル花庵（はなあん） —— 湖を一望する大人のモダン宿。足袋を履いて寛ぐ畳敷きとお野菜中心の美食
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 奥日光湯元の「にごり湯」と中禅寺温泉の「透明湯」の二つの泉質
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大浴場には濃厚な白濁硫黄露天風呂と、肌触り滑らかな内湯。泉質の異なる名湯に一度に浸かれる贅沢な湯巡りが魅力です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室の大きな窓から中禅寺湖のパノラマ絶景を一望
                    </h5>
                    <p className="text-stone-600 leading-relaxed">穏やかな湖面と対岸の山並みを眺める静かな客室。朝日に輝く湖面や夕暮れの幻想的な景色をお部屋にいながら独り占めできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地元契約農家から届く新鮮野菜ととちぎ和牛の創作会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">彩り豊かな二十種類以上の旬野菜をふんだんに使った身体に優しいディナー。出汁の味わいを極めた上品な料理が女性に大人気です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ1200件超。「部屋からの湖の景色が絵画のよう」「二種類のお風呂がどちらも素晴らしく、野菜たっぷりの料理も美味しかった」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>栃木県 日光市中宮祠2480</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥18,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>54978</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】日光中禅寺湖温泉　ホテル花庵 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/164595/164595.jpg"
                alt="中禅寺温泉　旅籠なごみ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.83（口コミ 292件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">栃木県日光市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  中禅寺温泉　旅籠なごみ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  中禅寺湖の湖畔に佇む全室レイクビューの温もり宿！源泉掛け流しの濃厚硫黄泉とアットホームな滞在
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  中禅寺温泉 旅籠なごみ —— 湖畔の心地よい風が通り抜ける宿。白濁のにごり湯と日光の地酒を味わう旅
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日光湯元から引湯する源泉掛け流し100％のにごり湯大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">エメラルドグリーンから乳白色へと色を変える良質な硫黄泉。手足を伸ばしてゆったりと本格的な名湯に浸かることができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 中禅寺湖遊覧船乗り場や大鳥居まで徒歩すぐの絶好アクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">中禅寺湖畔の散策や華厳の滝への観光に抜群のロケーション。夕暮れの湖畔散歩も気軽に楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> とちぎ霧降高原牛や日光湯波を取り入れた季節の和洋ハーフビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">厳選された肉料理と、日光名物の湯波や手作りのおばんざい。地元の地酒とともにアットホームに楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.33点、口コミ800件超。「お風呂の硫黄泉が本格的でとても気持ちよかった」「部屋から湖が見えて立地も良く、スタッフも親切だった」と評判です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>栃木県 日光市中宮祠2478-23</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>164595</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D164595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】中禅寺温泉　旅籠なごみ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 中禅寺湖温泉・華厳の滝＆英国大使館別荘記念公園ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                日本三大名瀑「華厳の滝」のエレベーター観瀑台
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                中禅寺湖の水が落差97メートルの断崖を一気に流れ落ちる日本屈指の大滝。エレベーターで岩盤を一気に下りた観瀑台からは、轟音とともに爆進する大迫力の水しぶきを間近に体感できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                英国・イタリア大使館別荘記念公園での湖畔ティータイム
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                かつて各国の外交官たちが過ごした歴史的別荘。復元されたモダンな洋風建築の広縁カフェからは、中禅寺湖の静かな湖面を眺めながら本場のスコーンや紅茶を楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                中禅寺湖機船（クルーズ船）での千手ヶ浜・菖蒲ヶ浜周遊
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                湖上から男体山や大使館別荘を眺める遊覧クルーズ。初夏にはクリンソウが咲き誇る千手ヶ浜、秋には全山紅葉の八丁出島を巡るコースが大人気です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              栃木県日光市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「栃木県日光市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で日光市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 東武特急スペーシアX・日光号と東武バスでいろは坂を経由してアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                浅草や新宿から東武特急で東武日光駅まで約1時間50分、駅から路線バスでいろは坂を登り約45分。3年間の有効期間内で、新緑や秋の紅葉シーズンに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                中禅寺金谷ホテル、ホテル花庵、旅籠なごみなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-toya-onsen-lake-view-fireworks-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 洞爺湖温泉 全室レイクビュー＆ロングラン花火特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-beppu-onsen-suginoi-jigoku-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 別府温泉 湧出量日本一・棚湯＆絶景リゾート特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
