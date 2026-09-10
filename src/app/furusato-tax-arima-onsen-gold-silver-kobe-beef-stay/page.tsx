import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【有馬温泉×ふるさと納税】金泉・銀泉のダブル湯巡り＆極上神戸牛！老舗名門宿特集｜兵衛向陽閣・欽山・中の坊瑞苑',
  description: '日本三古湯・三名泉の誉れ高き名湯・兵庫県有馬温泉を楽天ふるさと納税でお得に贅沢ステイ！創業七百年の伝統を誇る「兵衛向陽閣」、ミシュラン掲載の大人の料亭旅館「欽山」、十三歳未満お断りの至高のおこもり宿「中の坊 瑞苑」を徹底比較。神戸牛会席や神戸市トラベルクーポン活用術を網羅。',
  keywords: '有馬温泉 ふるさと納税,有馬温泉 金泉 銀泉 ふるさと納税,兵衛向陽閣 クーポン,欽山 有馬温泉 ふるさと納税,中の坊瑞苑 神戸市 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-arima-onsen-gold-silver-kobe-beef-stay',
  },
  openGraph: {
    title: '【有馬温泉×ふるさと納税】金泉・銀泉のダブル湯巡り＆極上神戸牛！老舗名門宿特集｜兵衛向陽閣・欽山・中の坊瑞苑',
    description: '日本三古湯・三名泉の誉れ高き名湯・兵庫県有馬温泉を楽天ふるさと納税でお得に贅沢ステイ！創業七百年の伝統を誇る「兵衛向陽閣」、ミシュラン掲載の大人の料亭旅館「欽山」、十三歳未満お断りの至高のおこもり宿「中の坊 瑞苑」を徹底比較。神戸牛会席や神戸市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-arima-onsen-gold-silver-kobe-beef-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【有馬温泉×ふるさと納税】金泉・銀泉のダブル湯巡り＆極上神戸牛！老舗名門宿特集｜兵衛向陽閣・欽山・中の坊瑞苑',
    description: '日本三古湯・三名泉の誉れ高き名湯・兵庫県有馬温泉を楽天ふるさと納税でお得に贅沢ステイ！創業七百年の伝統を誇る「兵衛向陽閣」、ミシュラン掲載の大人の料亭旅館「欽山」、十三歳未満お断りの至高のおこもり宿「中の坊 瑞苑」を徹底比較。神戸牛会席や神戸市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-arima-onsen-gold-silver-kobe-beef-stay',
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
        <span className="text-stone-700 font-medium truncate">【有馬温泉×ふるさと納税】金泉・銀泉のダブル湯巡り＆極上神戸牛！老舗名門宿特集｜兵衛向陽閣・欽山・中の坊瑞苑</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>兵庫県神戸市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【有馬温泉×ふるさと納税】金泉・銀泉のダブル湯巡り＆極上神戸牛！老舗名門宿特集｜兵衛向陽閣・欽山・中の坊瑞苑
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本三古湯・三名泉の誉れ高き名湯・兵庫県有馬温泉を楽天ふるさと納税でお得に贅沢ステイ！創業七百年の伝統を誇る「兵衛向陽閣」、ミシュラン掲載の大人の料亭旅館「欽山」、十三歳未満お断りの至高のおこもり宿「中の坊 瑞苑」を徹底比較。神戸牛会席や神戸市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            太閤秀吉が愛した日本最古の名湯——赤褐色の金泉と無色透明の銀泉、そして極上の神戸牛を味わい尽くす
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            兵庫県神戸市北区、六甲山の北麓に湧き出る有馬温泉。神代の昔、大己貴命（おおなむちのみこと）と少彦名命（すくなひこなのみこと）が発見したと伝わる日本最古の名湯であり、飛鳥時代の舒明天皇、そして戦国時代の太閤豊臣秀吉が幾度も湯治に訪れたことで広く知られています。有馬の温泉はプレート境界から直接立ち上る奇跡の深層熱水であり、鉄分と塩分を豊富に含み空気に触れると赤褐色に濁る「金泉（含鉄強塩泉）」と、炭酸ガスやラドンを含む無色透明の「銀泉（炭酸泉・放射能泉）」という、全く性質の異なる二大名湯を同時に愉しめる世界有数の温泉地です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            金泉の濃厚な温まりと保湿効果、そして銀泉の清涼感あふれる血行促進効果。この贅沢な湯巡りを味わった後は、世界に誇る名銘柄「神戸牛（但馬牛）」をすき焼きや炭火焼きステーキで堪能する、これ以上ない美食の宴が待っています。兵庫県神戸市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門旅館へお得に宿泊でき、特別な記念日やご褒美にふさわしい至極の休日が叶います。
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
                  <td className="p-3 font-bold text-amber-900">有馬温泉　兵衛向陽閣</td>
                  <td className="p-3 font-bold">★ 4.55</td>
                  <td className="p-3 text-stone-600">創業七百年・太閤秀吉から名を授かった名門老舗！三つの個性豊かな大浴場で愉しむ金泉の湯巡り</td>
                  <td className="p-3 text-stone-600">由緒ある歴史・贅沢な湯巡り</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">有馬温泉　欽山</td>
                  <td className="p-3 font-bold">★ 4.6</td>
                  <td className="p-3 text-stone-600">ミシュランガイド掲載の最高峰料亭旅館！静寂を守る大人の隠れ家で極める金泉と本格京風懐石</td>
                  <td className="p-3 text-stone-600">抜群の好立地・絶景の眺望</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">有馬温泉　中の坊　瑞苑</td>
                  <td className="p-3 font-bold">★ 4.72</td>
                  <td className="p-3 text-stone-600">十三歳未満お断りの大人のための隠れ宿！金泉・銀泉のダブル名湯と贅を尽くしたパーソナルサービス</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636.jpg"
                alt="有馬温泉　兵衛向陽閣"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.55（口コミ 2592件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県神戸市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  有馬温泉　兵衛向陽閣
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業七百年・太閤秀吉から名を授かった名門老舗！三つの個性豊かな大浴場で愉しむ金泉の湯巡り
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  有馬温泉 兵衛向陽閣（ひょうえこうようかく） —— 歴史を紡ぐ有馬のシンボル。広大な三つの大浴場と老舗のもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 「一の湯」「二の湯」「三の湯」と趣異なる三つの大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">和風情の「一の湯」、ローマ風の「二の湯」、開放感あふれる湯治場風の「三の湯」。それぞれに名湯金泉の露天風呂を備え、館内だけで贅沢な湯巡りを堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 創業七百年の伝統を受け継ぐ細やかなおもてなしと風格
                    </h5>
                    <p className="text-stone-600 leading-relaxed">秀吉公より「兵衛」の名を賜った由緒ある歴史。広大な館内には日本庭園やラウンジ、エステ施設が充実し、あらゆる世代が快適に過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 厳選された神戸牛や季節の味覚を味わう会席料理・ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">炭火焼き会席や季節の創作会席のほか、ライブキッチンで焼き上げる神戸牛が人気のプレミアムビュッフェなど多彩な美食スタイルが選べます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.46点、口コミ4700件超。「三つのお風呂がどれも素晴らしく金泉を満喫できた」「お料理が美味しくスタッフの接客も丁寧で大満足」と高い信頼を獲得しています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>兵庫県 神戸市北区有馬町1904</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥15,950〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>8636</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】有馬温泉　兵衛向陽閣 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/53390/53390.jpg"
                alt="有馬温泉　欽山"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.6（口コミ 497件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県神戸市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  有馬温泉　欽山
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ミシュランガイド掲載の最高峰料亭旅館！静寂を守る大人の隠れ家で極める金泉と本格京風懐石
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  有馬温泉 欽山（きんざん） —— 有馬随一の格式を誇る美食の館。茶室風の数寄屋建築と洗練された大人の休日
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伝統的な数寄屋造りの美学と手入れの行き届いた名庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">小学生以下のお子様お断りの静寂な大人の空間。数寄屋建築の気品と、四季折々に表情を変える日本庭園が優雅な非日常を演出します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 丹精込めて引き込まれた有馬の名湯「金泉」の大浴場と露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">肌にしっとりと馴染む良質な金泉。静かな木立に囲まれた露天風呂で、心ゆくまで名湯の温もりに浸ることができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最高ランクの神戸牛と瀬戸内の旬魚を極めた本格京風創作懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">「料理の欽山」と称される芸術的な懐石料理。お部屋で一皿一皿最高のタイミングで供される料理は、記念日や慶事の席に最高峰の華を添えます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.73点という圧倒的高スコア。「お料理が芸術品のように美味しく感動した」「静かで落ち着いた雰囲気とおもてなしの素晴らしさはさすが名門」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>兵庫県 神戸市北区有馬町1302-4</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥23,650〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>53390</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D53390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】有馬温泉　欽山 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/25288/25288.jpg"
                alt="有馬温泉　中の坊　瑞苑"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.72（口コミ 787件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県神戸市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  有馬温泉　中の坊　瑞苑
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  十三歳未満お断りの大人のための隠れ宿！金泉・銀泉のダブル名湯と贅を尽くしたパーソナルサービス
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  有馬温泉 中の坊 瑞苑（ずいえん） —— 心の贅沢を叶える最上級リゾート。金泉と銀泉を同時に味わう特別な滞在
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 名湯「金泉」と「銀泉」の両方を引き込んだ贅沢な大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">有馬でも希少な金泉と銀泉の両方の湯船を完備。露天風呂や貸切風呂で、二つの異なる名湯の効能をじっくりと比較体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> きめ細やかなバトラーサービスと大人のための静謐空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">十三歳未満の宿泊を制限することで保たれる上質な静寂。客室専任スタッフによる丁寧なおもてなしが、至福のプライベート時間を支えます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> お部屋食または個室ダイニングで味わう神戸牛と旬の特選会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">神戸ビーフの鉄板焼きやしゃぶしゃぶをはじめ、厳選食材の旨味を引き出した極上の和会席。器の選定から盛り付けまで細部にこだわりが宿ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.75点の最高峰評価。「金泉と銀泉の両方に入ることができて最高」「おもてなしのレベルが高く、静かにゆったりと過ごせる最高の宿」と熱い支持。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>兵庫県 神戸市北区有馬町808</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥28,750〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>25288</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D25288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】有馬温泉　中の坊　瑞苑 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 有馬温泉街・湯本坂散策＆六甲山アクティビティガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                湯本坂のレトロな街並みと「金の湯・銀の湯」外湯めぐり
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                格子戸の民家や風情ある店舗が軒を連ねる湯本坂。温泉街のシンボル外湯「金の湯（足湯あり）」や「銀の湯」、炭酸泉源公園など、歴史ある散策スポットが点在します。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                六甲有馬ロープウェーでの空中散歩と六甲山夜景
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                有馬温泉と六甲山頂を約12分で結ぶロープウェー。四季折々の山肌を見下ろしながら登る絶景ルートで、山頂の展望台からは「1000万ドルの夜景」と称される大パノラマが楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                有馬名物「炭酸せんべい」と「有馬サイダー」の食べ歩き
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                有馬の炭酸泉を使って作られた薄焼きの炭酸せんべい。焼きたての柔らかい数秒間だけ味わえる「生炭酸せんべい」や、強炭酸の「有馬サイダー」は散策のお供に必食です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              兵庫県神戸市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「兵庫県神戸市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で神戸市を選び、寄付額の30%相当となるトラベルクーポンを返礼品として申し込みます。楽天ポイントも通常通り付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 新幹線新神戸駅や大阪・神戸空港からの快適アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新神戸駅から高速バスや電車で約30分、大阪駅からも直通バスで約60分の好立地。3年間の有効期間内で記念日や週末旅行に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                兵衛向陽閣、欽山、中の坊瑞苑などの宿泊プランを選択し、決済画面でクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
