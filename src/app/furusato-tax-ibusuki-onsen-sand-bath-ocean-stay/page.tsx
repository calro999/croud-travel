import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【指宿温泉×ふるさと納税】名物天然砂むし温泉＆錦江湾オーシャンビュー！絶景リゾート宿特集｜白水館・指宿ロイヤル・シーサイドホテル',
  description: '世界唯一の天然砂むし温泉と薩摩富士・開聞岳を望む鹿児島県指宿温泉を楽天ふるさと納税でお得に贅沢ステイ！千坪の元禄風呂と砂むし温泉を誇る名門「指宿白水館」、絶景高台オーシャンビューの「指宿ロイヤルホテル」、波打ち際の砂むし温泉完備「指宿シーサイドホテル」を徹底比較。指宿市トラベルクーポン活用術を網羅。',
  keywords: '指宿温泉 ふるさと納税,指宿 砂むし温泉 ふるさと納税,指宿白水館 クーポン,指宿ロイヤルホテル 宿泊,指宿市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-ibusuki-onsen-sand-bath-ocean-stay',
  },
  openGraph: {
    title: '【指宿温泉×ふるさと納税】名物天然砂むし温泉＆錦江湾オーシャンビュー！絶景リゾート宿特集｜白水館・指宿ロイヤル・シーサイドホテル',
    description: '世界唯一の天然砂むし温泉と薩摩富士・開聞岳を望む鹿児島県指宿温泉を楽天ふるさと納税でお得に贅沢ステイ！千坪の元禄風呂と砂むし温泉を誇る名門「指宿白水館」、絶景高台オーシャンビューの「指宿ロイヤルホテル」、波打ち際の砂むし温泉完備「指宿シーサイドホテル」を徹底比較。指宿市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-ibusuki-onsen-sand-bath-ocean-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【指宿温泉×ふるさと納税】名物天然砂むし温泉＆錦江湾オーシャンビュー！絶景リゾート宿特集｜白水館・指宿ロイヤル・シーサイドホテル',
    description: '世界唯一の天然砂むし温泉と薩摩富士・開聞岳を望む鹿児島県指宿温泉を楽天ふるさと納税でお得に贅沢ステイ！千坪の元禄風呂と砂むし温泉を誇る名門「指宿白水館」、絶景高台オーシャンビューの「指宿ロイヤルホテル」、波打ち際の砂むし温泉完備「指宿シーサイドホテル」を徹底比較。指宿市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-ibusuki-onsen-sand-bath-ocean-stay',
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
        <span className="text-stone-700 font-medium truncate">【指宿温泉×ふるさと納税】名物天然砂むし温泉＆錦江湾オーシャンビュー！絶景リゾート宿特集｜白水館・指宿ロイヤル・シーサイドホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>鹿児島県指宿市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【指宿温泉×ふるさと納税】名物天然砂むし温泉＆錦江湾オーシャンビュー！絶景リゾート宿特集｜白水館・指宿ロイヤル・シーサイドホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          世界唯一の天然砂むし温泉と薩摩富士・開聞岳を望む鹿児島県指宿温泉を楽天ふるさと納税でお得に贅沢ステイ！千坪の元禄風呂と砂むし温泉を誇る名門「指宿白水館」、絶景高台オーシャンビューの「指宿ロイヤルホテル」、波打ち際の砂むし温泉完備「指宿シーサイドホテル」を徹底比較。指宿市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            波打ち際で砂に埋もれる奇跡の温熱体験——錦江湾の絶景と薩摩の豊かな山海の幸を味わう南国温泉リゾート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            鹿児島県薩摩半島の南端に位置する指宿（いぶすき）温泉。温暖な気候とヤシの並木が南国ムードを醸し出す、九州屈指の温泉保養地です。指宿の代名詞ともいえるのが、海岸の砂浜に自噴する高温の温泉を利用した世界唯一の「天然砂むし温泉（砂風呂）」。波の音を聞きながら温かい砂に包まれると、砂の重みと温泉の熱・圧力によって全身の血行が劇的に促進され、わずか10分〜15分で玉のような汗が噴き出します。医学的にも通常の温泉の数倍のデトックス効果があると実証されています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            砂むし温泉で汗を流した後は、広大な大浴場で美肌成分メタけい酸を豊富に含む塩化物泉に浸かり、錦江湾や薩摩富士「開聞岳」の雄姿を仰ぐ贅沢。夕食には鹿児島が世界に誇る「鹿児島黒豚」のしゃぶしゃぶや「鹿児島黒毛和牛」、近海で獲れたキビナゴのお造り、本場薩摩揚げ、そして極上の本格芋焼酎に舌鼓を打ちます。鹿児島県指宿市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門旅館へお得に宿泊でき、特別な南国リフレッシュ旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">鹿児島　砂むし温泉　指宿白水館</td>
                  <td className="p-3 font-bold">★ 4.49</td>
                  <td className="p-3 text-stone-600">創業以来の歴史を誇る指宿最高峰の名門！千坪の「元禄風呂」と館内専用砂むし温泉、薩摩伝承館</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・名庭園ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">指宿温泉　指宿ロイヤルホテル　～すべての女性へ美と健康を楽しむホテル～</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">錦江湾と開聞岳を見晴らす高台の特等席！美と健康をテーマにしたオーシャンビュー絶景リゾートホテル</td>
                  <td className="p-3 text-stone-600">絶景の眺望・充実のリラクゼーション</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">指宿砂むし温泉　指宿シーサイドホテル</td>
                  <td className="p-3 font-bold">★ 3.65</td>
                  <td className="p-3 text-stone-600">波打ち際に建つ全室オーシャンビュー！館内で体験できる名物砂むし温泉と海を望む展望大浴場</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/12529/12529.jpg"
                alt="鹿児島　砂むし温泉　指宿白水館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.49（口コミ 2442件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">鹿児島県指宿市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  鹿児島　砂むし温泉　指宿白水館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業以来の歴史を誇る指宿最高峰の名門！千坪の「元禄風呂」と館内専用砂むし温泉、薩摩伝承館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  鹿児島 砂むし温泉 指宿白水館 —— 日本の美と歴史が息づく迎賓館。圧巻の元禄風呂と錦江湾庭園の贅
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 江戸時代の風呂文化を再現した千坪の巨大大浴場「元禄風呂」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">浮世絵壁画や石橋、打たせ湯、樽風呂などが並ぶ圧巻の空間。館内に併設された専用の「砂むし温泉」と合わせて至極の湯巡りが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内に広がる広大な松の庭園と錦江湾のパノラマビュー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海沿いに広がる見事な日本庭園。敷地内の美術館「薩摩伝承館」では、西郷隆盛ゆかりの品や薩摩焼の至宝を鑑賞できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鹿児島黒牛・黒豚や近海の新鮮魚介を極めた特選和食会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理人が腕を振るう華やかな本格会席。出汁の効いた黒豚しゃぶしゃぶや季節の造り、地元の名芋焼酎とともに味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ3800件超。「元禄風呂の広さと砂むし温泉が最高」「庭園も美しく料理も接客もパーフェクトで感動した」と絶賛の嵐。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>鹿児島県 指宿市東方12126-12</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,630〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>12529</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】鹿児島　砂むし温泉　指宿白水館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/10832/10832.jpg"
                alt="指宿温泉　指宿ロイヤルホテル　～すべての女性へ美と健康を楽しむホテル～"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 1614件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">鹿児島県指宿市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  指宿温泉　指宿ロイヤルホテル　～すべての女性へ美と健康を楽しむホテル～
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  錦江湾と開聞岳を見晴らす高台の特等席！美と健康をテーマにしたオーシャンビュー絶景リゾートホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  指宿温泉 指宿ロイヤルホテル —— 太平洋を望む絶景ロケーション。タラソテラピーと地元食材の健康会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 海と空が一体化する高台のオーシャンビュー露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">錦江湾を行き交う船や朝日に輝く水平線を望む絶景露天風呂。海風を感じながら、肌にしっとり馴染む美肌の湯に浸かれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 女性やカップルに大人気のヨガ＆リラクゼーション体験
                    </h5>
                    <p className="text-stone-600 leading-relaxed">朝日を浴びながらのモーニングヨガや、エステサロン、海を望むテラスラウンジなど、心と身体をリセットするウェルネスプログラムが充実しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鹿児島の旬の無農薬野菜と黒豚・黒牛を味わう創作美食
                    </h5>
                    <p className="text-stone-600 leading-relaxed">契約農家から届く新鮮野菜や、鹿児島黒豚のせいろ蒸しなど、美味しく身体に優しいディナーコースが高く評価されています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点、口コミ1400件超。「高台からの海の眺めが息を呑むほど綺麗」「スタッフの気配りが温かく、食事もヘルシーで大満足」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>鹿児島県 指宿市十二町4232-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥9,052〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>10832</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】指宿温泉　指宿ロイヤルホテル　～すべての女性へ美と健康を楽しむホテル～ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/31775/31775.jpg"
                alt="指宿砂むし温泉　指宿シーサイドホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.65（口コミ 779件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">鹿児島県指宿市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  指宿砂むし温泉　指宿シーサイドホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  波打ち際に建つ全室オーシャンビュー！館内で体験できる名物砂むし温泉と海を望む展望大浴場
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  指宿砂むし温泉 指宿シーサイドホテル —— 錦江湾の渚に佇む名門。潮騒を聞きながら砂むしと名湯を堪能
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 雨天でも安心して体験できる館内直結の本格砂むし温泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">天候を気にせずいつでも砂むし温泉を体験可能。専任の砂かけスタッフが丁寧に砂をかけてくれ、体の芯からデトックスできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 錦江湾を一望する展望大浴場と海辺の絶好アクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広々とした大浴場の窓一面に広がる穏やかな海。海辺の遊歩道への散歩も気軽に楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 黒豚しゃぶしゃぶやさつま揚げ、旬魚を味わう郷土会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">鹿児島の名物料理をふんだんに盛り込んだ夕食。気取らずに地元の美味しい郷土の味を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.11点、口コミ2200件超。「館内で砂むし温泉に入れてとても便利だった」「部屋からのオーシャンビューが素晴らしく、黒豚も美味しかった」と好評です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>鹿児島県 指宿市十町1912</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,500〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>31775</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】指宿砂むし温泉　指宿シーサイドホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 指宿温泉・開聞岳＆砂むし会館「砂楽」観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                砂むし会館「砂楽（さらく）」での海岸砂むし体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                指宿温泉街の中心にある公営の砂むし施設。潮が引いている時間帯には波打ち際の砂浜で波の音を聞きながら砂むし温泉を楽しむことができます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                薩摩富士「開聞岳」と長崎鼻（竜宮神社）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                標高924メートルの美しい円錐形の秀峰・開聞岳。薩摩半島最南端の岬「長崎鼻」からは、開聞岳と青い海の雄大なコントラストが広がり、浦島太郎伝説の竜宮神社もあります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                池田湖と「イッシー」伝説、大うなぎ観察
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                九州最大のカルデラ湖。春には菜の花畑が一面に咲き誇り、体長2メートル近くになる天然記念物の巨大オオウナギを観察できます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              鹿児島県指宿市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「鹿児島県指宿市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で指宿市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 鹿児島空港やJR観光特急「指宿のたまて箱」でアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                鹿児島中央駅から人気観光特急「指宿のたまて箱（いぶたま）」で約50分。3年間の有効期間内で、気候温暖な冬の避寒や夏の南国旅に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                指宿白水館、指宿ロイヤルホテル、指宿シーサイドホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
