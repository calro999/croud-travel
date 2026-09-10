import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【由布院温泉×ふるさと納税】全室離れ・客室露天風呂の極上リゾート！静寂の大人ステイ完全ガイド｜梅園・なな川・由布院別邸樹',
  description: '憧れの温泉リゾート・大分県由布院温泉を楽天ふるさと納税でお得に旅する！一万坪の庭園と由布岳絶景を誇る「梅園 GARDEN RESORT」、金鱗湖徒歩1分・全室露天付き離れ宿「由布院 寛ぎの宿 なな川」、多彩な和モダンデザイン離れが魅力の「由布院別邸 樹」を徹底比較。由布市トラベルクーポン活用術を網羅。',
  keywords: '由布院 離れ ふるさと納税,由布院温泉 ふるさと納税 宿泊,由布院 梅園 クーポン,なな川 由布院 ふるさと納税,由布院別邸 樹 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-yufuin-onsen-hanare-private-stay',
  },
  openGraph: {
    title: '【由布院温泉×ふるさと納税】全室離れ・客室露天風呂の極上リゾート！静寂の大人ステイ完全ガイド｜梅園・なな川・由布院別邸樹',
    description: '憧れの温泉リゾート・大分県由布院温泉を楽天ふるさと納税でお得に旅する！一万坪の庭園と由布岳絶景を誇る「梅園 GARDEN RESORT」、金鱗湖徒歩1分・全室露天付き離れ宿「由布院 寛ぎの宿 なな川」、多彩な和モダンデザイン離れが魅力の「由布院別邸 樹」を徹底比較。由布市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-yufuin-onsen-hanare-private-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【由布院温泉×ふるさと納税】全室離れ・客室露天風呂の極上リゾート！静寂の大人ステイ完全ガイド｜梅園・なな川・由布院別邸樹',
    description: '憧れの温泉リゾート・大分県由布院温泉を楽天ふるさと納税でお得に旅する！一万坪の庭園と由布岳絶景を誇る「梅園 GARDEN RESORT」、金鱗湖徒歩1分・全室露天付き離れ宿「由布院 寛ぎの宿 なな川」、多彩な和モダンデザイン離れが魅力の「由布院別邸 樹」を徹底比較。由布市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-yufuin-onsen-hanare-private-stay',
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
        <span className="text-stone-700 font-medium truncate">【由布院温泉×ふるさと納税】全室離れ・客室露天風呂の極上リゾート！静寂の大人ステイ完全ガイド｜梅園・なな川・由布院別邸樹</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>大分県由布市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【由布院温泉×ふるさと納税】全室離れ・客室露天風呂の極上リゾート！静寂の大人ステイ完全ガイド｜梅園・なな川・由布院別邸樹
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          憧れの温泉リゾート・大分県由布院温泉を楽天ふるさと納税でお得に旅する！一万坪の庭園と由布岳絶景を誇る「梅園 GARDEN RESORT」、金鱗湖徒歩1分・全室露天付き離れ宿「由布院 寛ぎの宿 なな川」、多彩な和モダンデザイン離れが魅力の「由布院別邸 樹」を徹底比較。由布市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            由布岳の秀峰を仰ぎ、朝霧漂う金鱗湖を愛でる——全室離れのプライベート空間で過ごす極上の休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            大分県由布市湯布院町、豊後富士と称される優美な「由布岳」の麓に広がる由布院温泉。全国第2位の湧出量を誇りながら、大規模な歓楽街を作らず、田園風景と自然美、そして洗練されたアートやカフェ文化を守り続けてきた日本屈指の憧れ温泉リゾートです。早朝には湖底から温泉と清水が湧き出る「金鱗湖」から立ち上る幻想的な朝霧が温泉街を包み込み、訪れる人々に静寂と癒やしをもたらします。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            由布院の滞在スタイルとして近年最も愛されているのが、母屋から離れた「離れ客室」や専用露天風呂を備えた隠れ家宿です。鳥のさえずりと風の音しか聞こえない完全なプライベート空間で、柔らかな単純温泉に好きなだけ浸かる贅沢。夕食には大分が誇るブランド牛「豊後牛（おおいた和牛）」の炭火焼きや関アジ、旬の高原野菜をふんだんに取り入れた創作懐石を堪能できます。大分県由布市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの離れ名宿へお得に宿泊でき、特別な思い出が残る旅が叶います。
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
                  <td className="p-3 font-bold text-amber-900">由布院　梅園　ＧＡＲＤＥＮ　ＲＥＳＯＲＴ</td>
                  <td className="p-3 font-bold">★ 4.2</td>
                  <td className="p-3 text-stone-600">一万坪の広大な敷地に咲く四季の花々！由布岳を一望する大露天風呂と趣異なる離れ客室</td>
                  <td className="p-3 text-stone-600">由緒ある歴史・贅沢な湯巡り</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">由布院温泉　由布院　寛ぎの宿　なな川</td>
                  <td className="p-3 font-bold">★ 4.25</td>
                  <td className="p-3 text-stone-600">金鱗湖まで徒歩1分の最高立地！全室に源泉掛け流し内湯と露天風呂を備えた全五室の隠れ家離れ</td>
                  <td className="p-3 text-stone-600">抜群の好立地・絶景の眺望</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">由布院別邸　樹</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">全室完全独立の離れ・専用風呂付き！モダンなデザインと豊かな樹々に囲まれた癒やしのリゾート</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/39494/39494.jpg"
                alt="由布院　梅園　ＧＡＲＤＥＮ　ＲＥＳＯＲＴ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.2（口コミ 528件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県由布市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  由布院　梅園　ＧＡＲＤＥＮ　ＲＥＳＯＲＴ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  一万坪の広大な敷地に咲く四季の花々！由布岳を一望する大露天風呂と趣異なる離れ客室
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  由布院 梅園 GARDEN RESORT —— 自然の息吹に包まれるリゾート。由布岳の雄姿を望む名湯露天とお庭の散策
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 一万坪の広大な日本庭園と四季折々の自然美
                    </h5>
                    <p className="text-stone-600 leading-relaxed">春の桜やミヤマキリシマ、初夏のホタル、秋の鮮やかな紅葉など、散策路が巡る広大な庭園。自然林の中に点在する離れ客室で極上の静寂を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 由布岳のパノラマを仰ぐ名物大露天風呂と無料貸切風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">遮るもののない雄大な由布岳の山並みを眺めながら入る大露天風呂。空いていれば自由に利用できる二つの貸切家族風呂も人気です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 豊後牛や地元旬菜を彩り豊かに仕立てた創作和食会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大分の大自然が育んだ上質な食材。一皿ごとに季節の彩りと職人の技が感じられる料理が、贅沢な夜を演出します。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ1200件超。「広い庭園が素晴らしく由布岳の眺めも最高」「お風呂からの景色と美味しいお料理に癒やされた」と絶大な人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>大分県 由布市湯布院町川上馬場2106-2</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥10,310〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>39494</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D39494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】由布院　梅園　ＧＡＲＤＥＮ　ＲＥＳＯＲＴ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/76428/76428.jpg"
                alt="由布院温泉　由布院　寛ぎの宿　なな川"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.25（口コミ 118件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県由布市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  由布院温泉　由布院　寛ぎの宿　なな川
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  金鱗湖まで徒歩1分の最高立地！全室に源泉掛け流し内湯と露天風呂を備えた全五室の隠れ家離れ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  由布院 寛ぎの宿 なな川 —— 金鱗湖畔の静寂に佇む大人の隠れ宿。メゾネット離れと専用露天風呂の贅
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室に温泉内湯と専用露天風呂を完備した贅沢なメゾネット離れ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">一階にリビングと専用露天風呂・内湯、二階にベッドルームを配したメゾネット構造。24時間いつでも好きな時にプライベートな源泉掛け流し温泉を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 朝霧に煙る金鱗湖の幻想的な風景まで歩いてすぐの特等席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">観光の目玉・金鱗湖まで徒歩わずか1分。早朝の澄んだ空気の中、湖面から立ち上る奇跡の朝霧散歩を気軽に楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 特選豊後牛や旬の山海の恵みを味わう個室お食事処での会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が選び抜いた豊後牛ステーキや新鮮な旬魚。プライベートな個室食事処で、一品ずつ出来立ての味をゆっくりと堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.69点という非常に高いスコア。「お部屋の内湯と露天風呂が最高で何度も入った」「金鱗湖が目の前で朝の散歩が素晴らしく、お料理も感動的」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>大分県 由布市湯布院町川上1551-8</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥30,420〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>76428</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D76428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】由布院温泉　由布院　寛ぎの宿　なな川 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/144474/144474.jpg"
                alt="由布院別邸　樹"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 342件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県由布市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  由布院別邸　樹
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全室完全独立の離れ・専用風呂付き！モダンなデザインと豊かな樹々に囲まれた癒やしのリゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  由布院別邸 樹（いつき） —— 異なるコンセプトを持つ十室の離れ。現代の感性が息づくスタイリッシュなおこもり宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 一棟ごとに異なる趣を持つ個性豊かなデザイナーズ離れ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">和モダン、アジアン、北欧調など各客室ごとに洗練された意匠。全室に専用の温泉風呂を備え、プライベート感あふれる別荘のような滞在が叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 庭の木々を眺めながらプライベートに愉しむ温泉風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">各部屋専用の半露天風呂や岩風呂に注がれる柔らかな由布院の湯。時間を気にせず、誰にも邪魔されない至福のリラクゼーションに浸れます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 料理宿の伝統を受け継ぐダイニング「十樹」での創作日本料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元由布院の契約農家から届く高原野菜や豊後牛。器や盛り付けにもセンスが光る上質な創作料理を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ700件超。「部屋のデザインがとてもお洒落でお風呂も広い」「スタッフの距離感が絶妙で、静かに贅沢な休日を過ごせた」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>大分県 由布市湯布院町川上2652-2</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥39,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>144474</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D144474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】由布院別邸　樹 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 由布院温泉・湯の坪街道散策＆金鱗湖ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                金鱗湖の朝霧と湖畔散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                湖底から清水と温泉が湧き出ているため冬場や早朝には水面から湯気が立ち上り、幻想的な「朝霧」が発生する名所。湖畔のカフェで朝のティータイムを過ごすのもおすすめです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                湯の坪街道のスイーツ＆クラフトショップ巡り
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                由布院駅から金鱗湖へと続く約1kmの目抜き通り。名物のロールケーキ「B-speak」や金賞コロッケ、地元の木工芸品や陶器ギャラリーが立ち並び、そぞろ歩きに最適です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                由布岳登山口と雨乞岳からの眺望ドライブ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                標高1,583メートルの由布岳。車で高原道路を抜ける爽快なドライブコースからは、緑の草原と山並みが織りなす圧倒的な大パノラマを満喫できます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              大分県由布市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「大分県由布市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で由布市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 大分空港やJR特急「ゆふいんの森」での旅を計画
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                博多駅からクラシックな観光列車「ゆふいんの森」で約2時間15分。3年間の有効期間内で、季節の花や紅葉に合わせてゆったり旅行を計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                梅園、なな川、由布院別邸樹などの離れ客室プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
