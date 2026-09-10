import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【下呂温泉×ふるさと納税】日本三名泉の美肌美湯＆極上飛騨牛！老舗名宿特集｜水明館・湯之島館・小川屋',
  description: '草津・有馬と並ぶ日本三名泉・岐阜県下呂温泉を楽天ふるさと納税でお得に満喫！飛騨川沿いの一大温泉リゾート「水明館」、昭和六年創業の国登録有形文化財「湯之島館」、名物百帖空間の畳風呂を誇る「小川屋」を徹底比較。とろとろ美肌の湯や最高級A5飛騨牛会席、下呂市トラベルクーポン活用術を網羅。',
  keywords: '下呂温泉 ふるさと納税,下呂温泉 飛騨牛 ふるさと納税,水明館 クーポン 下呂,湯之島館 ふるさと納税,小川屋 下呂市 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-gero-onsen-bihada-hida-beef-stay',
  },
  openGraph: {
    title: '【下呂温泉×ふるさと納税】日本三名泉の美肌美湯＆極上飛騨牛！老舗名宿特集｜水明館・湯之島館・小川屋',
    description: '草津・有馬と並ぶ日本三名泉・岐阜県下呂温泉を楽天ふるさと納税でお得に満喫！飛騨川沿いの一大温泉リゾート「水明館」、昭和六年創業の国登録有形文化財「湯之島館」、名物百帖空間の畳風呂を誇る「小川屋」を徹底比較。とろとろ美肌の湯や最高級A5飛騨牛会席、下呂市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-gero-onsen-bihada-hida-beef-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【下呂温泉×ふるさと納税】日本三名泉の美肌美湯＆極上飛騨牛！老舗名宿特集｜水明館・湯之島館・小川屋',
    description: '草津・有馬と並ぶ日本三名泉・岐阜県下呂温泉を楽天ふるさと納税でお得に満喫！飛騨川沿いの一大温泉リゾート「水明館」、昭和六年創業の国登録有形文化財「湯之島館」、名物百帖空間の畳風呂を誇る「小川屋」を徹底比較。とろとろ美肌の湯や最高級A5飛騨牛会席、下呂市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T16:45:00+09:00',
    dateModified: '2026-09-10T16:45:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-gero-onsen-bihada-hida-beef-stay',
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
        <span className="text-stone-700 font-medium truncate">【下呂温泉×ふるさと納税】日本三名泉の美肌美湯＆極上飛騨牛！老舗名宿特集｜水明館・湯之島館・小川屋</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>岐阜県下呂市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【下呂温泉×ふるさと納税】日本三名泉の美肌美湯＆極上飛騨牛！老舗名宿特集｜水明館・湯之島館・小川屋
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          草津・有馬と並ぶ日本三名泉・岐阜県下呂温泉を楽天ふるさと納税でお得に満喫！飛騨川沿いの一大温泉リゾート「水明館」、昭和六年創業の国登録有形文化財「湯之島館」、名物百帖空間の畳風呂を誇る「小川屋」を徹底比較。とろとろ美肌の湯や最高級A5飛騨牛会席、下呂市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            天然の美容液と称される絹のようになめらかな名湯——飛騨川の渓谷美と最高峰の飛騨牛会席を堪能する
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            岐阜県下呂市、清流飛騨川（益田川）のせせらぎ沿いに湯けむりを上げる下呂温泉。室町時代の高僧万里集九や江戸時代の儒学者林羅山により、有馬温泉・草津温泉とともに「日本三名泉」と称えられた天下の名湯です。下呂の湯の最大の特徴は、pH9以上のアルカリ性単純温泉がもたらす、とろりとした美容液のような極上の肌触り。湯船に体を沈めた瞬間から肌がしっとりと潤い、「美肌の湯」として女性をはじめ多くの温泉ファンを魅了し続けています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            温泉と並び旅情を最高潮に高めてくれるのが、飛騨の豊かな自然が育んだ至高のブランド牛「飛騨牛」です。きめ細やかなサシが入ったサーロインステーキや、芳ばしい香りが食欲をそそる朴葉味噌焼き、口の中でとろけるすき焼きなど、本場ならではの贅沢な味わい。岐阜県下呂市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門旅館へお得に宿泊でき、心も体もお腹も満たされる極上の休日が叶います。
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
                  <td className="p-3 font-bold text-amber-900">下呂温泉　水明館</td>
                  <td className="p-3 font-bold">★ 4.35</td>
                  <td className="p-3 text-stone-600">創業九十余年・飛騨川沿いに佇む下呂温泉の巨頭！三つの大浴場めぐりと本格日本庭園</td>
                  <td className="p-3 text-stone-600">歴史と品格の最高峰ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">下呂温泉　湯之島館</td>
                  <td className="p-3 font-bold">★ 4.53</td>
                  <td className="p-3 text-stone-600">昭和六年創業・五万坪の山林に佇む国登録有形文化財！飛騨の木造建築美と源泉掛け流しの湯</td>
                  <td className="p-3 text-stone-600">大人の洗練・絶景プライベート</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">下呂温泉　小川屋</td>
                  <td className="p-3 font-bold">★ 4.41</td>
                  <td className="p-3 text-stone-600">名物「百帖空間の畳風呂」と多彩なスパ施設！飛騨川の清流を望む絶景と現代和モダンの寛ぎ</td>
                  <td className="p-3 text-stone-600">温泉街散策・快適アクティブ旅</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8886/8886.jpg"
                alt="下呂温泉　水明館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.35（口コミ 6222件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">岐阜県下呂市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  下呂温泉　水明館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業九十余年・飛騨川沿いに佇む下呂温泉の巨頭！三つの大浴場めぐりと本格日本庭園
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  下呂温泉 水明館（すいめいかん） —— 広大な敷地に広がるおもてなしの美学。多彩な館内湯巡りと芸術空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 館内三棟に設けられた個性豊かな三つの大浴場巡り
                    </h5>
                    <p className="text-stone-600 leading-relaxed">緑豊かな庭園を望む野天風呂、飛騨川を見下ろす展望大浴場、木の香る檜風呂。館内にいながら異なる趣で下呂の美肌の湯を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日本庭園と名画・美術品が飾られた美術館のような館内
                    </h5>
                    <p className="text-stone-600 leading-relaxed">能舞台や茶室、数々の近現代日本画が展示されたロビーラウンジ。広大な日本庭園の鯉を眺めながら優雅な時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> A5等級飛騨牛を堪能する部屋食会席・フレンチ・中華
                    </h5>
                    <p className="text-stone-600 leading-relaxed">最高ランクの飛騨牛を贅沢に使った料理。伝統の和食会席はもちろん、本格欧風フレンチや広東料理レストランなど多彩な選択肢が魅力です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ5200件超。「三つのお風呂がどれも泉質最高で館内巡りが楽しい」「スタッフの対応が一流で飛騨牛も絶品だった」と圧倒的な支持。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>岐阜県 下呂市幸田1268</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,250〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>8886</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】下呂温泉　水明館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/15967/15967.jpg"
                alt="下呂温泉　湯之島館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.53（口コミ 717件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">岐阜県下呂市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  下呂温泉　湯之島館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  昭和六年創業・五万坪の山林に佇む国登録有形文化財！飛騨の木造建築美と源泉掛け流しの湯
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  下呂温泉 湯之島館 —— 昭和のロマンを今に伝える奇跡の名建築。山懐に抱かれた露天風呂と至福の部屋食
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 本館・玄関・渡り廊下が国登録有形文化財に指定された木造建築美
                    </h5>
                    <p className="text-stone-600 leading-relaxed">昭和初期の名匠たちが手がけた格式ある建築。美しい格子や欄間の彫刻、レトロな木造階段など、歩くだけで歴史の息吹を感じられます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 下呂の街並みと山並みを見下ろすパノラマ大浴場と展望露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">高台の山林に位置するため眺望抜群。自然林の木々に囲まれた露天風呂では、四季折々の風情とともに掛け流しの名湯を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> お部屋でゆったりと味わう飛騨牛と旬の山里会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">職人が一品ずつ心を込めて仕上げる本格会席。周りを気にせずお部屋で味わう飛騨牛の陶板焼きや季節の炊き込みご飯は格別です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.62点、口コミ1300件超。「昭和初期の歴史的建築が圧巻でタイムスリップしたよう」「お湯が素晴らしくとろとろで、お料理も美味しかった」と絶賛の声。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>岐阜県 下呂市湯之島645番地</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥17,820〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>15967</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D15967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】下呂温泉　湯之島館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/10716/10716.jpg"
                alt="下呂温泉　小川屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.41（口コミ 4939件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">岐阜県下呂市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  下呂温泉　小川屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  名物「百帖空間の畳風呂」と多彩なスパ施設！飛騨川の清流を望む絶景と現代和モダンの寛ぎ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  下呂温泉 小川屋 —— 足元から温もる畳敷きの大浴場。七つの湯巡りと飛騨牛を味わう癒やしの宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 特殊な畳を百帖敷き詰めた名物「畳風呂」大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">滑りにくく足元が冷たくない安心・快適な畳風呂。肌に優しい下呂の湯に浸かりながら、和の温もりを全身で感じられます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 飛騨川のせせらぎを真下に望む開放的な絶景露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">川の音を聞きながら入る露天風呂「川の音」や、岩盤浴・炭酸泉・人工温泉など多彩な湯浴み処で充実のリラクゼーションが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最高ランク飛騨牛の食べ比べや地元野菜を取り入れた極上和会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">飛騨牛のステーキ、しゃぶしゃぶ、握り寿司など多彩な調理法で味わうプランが大人気。モダンな個室食事処でゆったり堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.39点、口コミ4300件超。「畳風呂が温かく足触りが良くて子供や高齢者にも安心」「お湯がとろとろで飛騨牛も最高に美味しかった」と大好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>岐阜県 下呂市湯之島570</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥8,800〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>10716</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】下呂温泉　小川屋 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 下呂温泉街・飛騨川散策＆下呂温泉合掌村ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                下呂温泉合掌村での白川郷移築民家見学と陶芸体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                世界遺産・白川郷などから移築された合掌造りの民家が立ち並ぶ野外博物館。国の重要文化財「旧大戸家住宅」の見学や、陶芸絵付け、名物の長いすべり台「森のすべり台」が楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                温泉街の足湯めぐりと「温玉ソフト」食べ歩き
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街に点在する無料の足湯スポット。「ゆあみ屋」の温泉たまごとソフトクリームが融合した名物「温玉ソフト」や、下呂プリンを片手に散策するのが定番の楽しみ方です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                飛騨川沿いのせせらぎ遊歩道と噴泉池
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                川沿いに整備された遊歩道。かつて名物だった河原の「噴泉池（足湯）」や春の桜並木など、川面を渡る清涼な風を感じながらのんびり散歩を楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              岐阜県下呂市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「岐阜県下呂市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で下呂市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: JR特急ワイドビューひだ等で名古屋から快適アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                名古屋駅からJR特急「ひだ」で約1時間30分と抜群のアクセス。3年間の有効期間内で、新緑や紅葉、冬の温泉情緒に合わせて旅行を計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                水明館、湯之島館、小川屋などの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-kusatsu-onsen-yubatake-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 草津温泉 湯畑徒歩圏内の老舗名宿特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-arima-onsen-gold-silver-kobe-beef-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 有馬温泉 金泉・銀泉＆極上神戸牛ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
