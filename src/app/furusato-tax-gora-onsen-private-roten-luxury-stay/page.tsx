import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【箱根・強羅温泉×ふるさと納税】全室客室露天風呂付き極上宿特集！記念日・ご褒美おこもり温泉旅館ガイド｜佳ら久・白檀・雪月花',
  description: '都心から好アクセスの箱根屈指の高級リゾート地・強羅温泉を楽天ふるさと納税でお得に贅沢ステイ！全室客室温泉露天風呂完備の「箱根・強羅 佳ら久」、三千七百坪の森林と自家源泉掛け流しを誇る「箱根強羅 白檀」、全室檜露天風呂と駅前好立地の「季の湯 雪月花」を徹底解説。箱根町トラベルクーポンの賢い活用法を完全網羅。',
  keywords: '強羅温泉 ふるさと納税,箱根 客室露天風呂 ふるさと納税,強羅 佳ら久 ふるさと納税,箱根強羅 白檀 クーポン,雪月花 ふるさと納税 箱根町',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-gora-onsen-private-roten-luxury-stay',
  },
  openGraph: {
    title: '【箱根・強羅温泉×ふるさと納税】全室客室露天風呂付き極上宿特集！記念日・ご褒美おこもり温泉旅館ガイド｜佳ら久・白檀・雪月花',
    description: '都心から好アクセスの箱根屈指の高級リゾート地・強羅温泉を楽天ふるさと納税でお得に贅沢ステイ！全室客室温泉露天風呂完備の「箱根・強羅 佳ら久」、三千七百坪の森林と自家源泉掛け流しを誇る「箱根強羅 白檀」、全室檜露天風呂と駅前好立地の「季の湯 雪月花」を徹底解説。箱根町トラベルクーポンの賢い活用法を完全網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-gora-onsen-private-roten-luxury-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【箱根・強羅温泉×ふるさと納税】全室客室露天風呂付き極上宿特集！記念日・ご褒美おこもり温泉旅館ガイド｜佳ら久・白檀・雪月花',
    description: '都心から好アクセスの箱根屈指の高級リゾート地・強羅温泉を楽天ふるさと納税でお得に贅沢ステイ！全室客室温泉露天風呂完備の「箱根・強羅 佳ら久」、三千七百坪の森林と自家源泉掛け流しを誇る「箱根強羅 白檀」、全室檜露天風呂と駅前好立地の「季の湯 雪月花」を徹底解説。箱根町トラベルクーポンの賢い活用法を完全網羅。',
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
    datePublished: '2026-09-10T16:25:00+09:00',
    dateModified: '2026-09-10T16:25:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-gora-onsen-private-roten-luxury-stay',
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
        <span className="text-stone-700 font-medium truncate">【箱根・強羅温泉×ふるさと納税】全室客室露天風呂付き極上宿特集！記念日・ご褒美おこもり温泉旅館ガイド｜佳ら久・白檀・雪月花</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>神奈川県箱根町 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【箱根・強羅温泉×ふるさと納税】全室客室露天風呂付き極上宿特集！記念日・ご褒美おこもり温泉旅館ガイド｜佳ら久・白檀・雪月花
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          都心から好アクセスの箱根屈指の高級リゾート地・強羅温泉を楽天ふるさと納税でお得に贅沢ステイ！全室客室温泉露天風呂完備の「箱根・強羅 佳ら久」、三千七百坪の森林と自家源泉掛け流しを誇る「箱根強羅 白檀」、全室檜露天風呂と駅前好立地の「季の湯 雪月花」を徹底解説。箱根町トラベルクーポンの賢い活用法を完全網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            喧騒を離れ、誰にも邪魔されない至福の時間——強羅温泉の客室露天風呂で過ごす最上級のおこもりステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            神奈川県足柄下郡箱根町、早雲山の東斜面に広がる強羅（ごうら）温泉。明治・大正期より政財界人や文人墨客の避暑地・別荘地として拓かれ、今なお品格と静寂をたたえる日本屈指の高級温泉保養地です。強羅温泉の大きな特徴は、透明な単純温泉、乳白色の酸性硫酸塩泉、淡い濁り湯など「五色・多泉質」が楽しめること。標高約500メートルから600メートルの高原に位置するため、夏は涼やかで、秋には箱根連山の見事な紅葉、冬には澄み切った空気の中で満天の星を仰ぐことができます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな強羅で近年圧倒的な人気を誇るのが、客室に専用の温泉露天風呂を備えたプライベート重視のラグジュアリーステイです。大浴場へ移動することなく、24時間好きな時に好きなだけ湯浴みを愉しみ、鳥のさえずりや木々の葉擦れの音に耳を傾ける贅沢。夕食には旬の山海の幸を活かした極上の創作懐石に舌鼓を打ち、おこもりならではの濃密な癒やしを堪能できます。神奈川県箱根町へのふるさと納税返礼品である「楽天トラベルクーポン」を活用すれば、寄付額の30%相当の割引が受けられ、憧れの名門宿への宿泊がぐっと身近になります。
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
                  <td className="p-3 font-bold text-amber-900">箱根・強羅　佳ら久（オリックスホテルズ＆リゾーツ）</td>
                  <td className="p-3 font-bold">★ 4.5</td>
                  <td className="p-3 text-stone-600">全室に温泉露天風呂を完備！森と海の絶景テラス＆五感を解き放つプレミアムラグジュアリーリゾート</td>
                  <td className="p-3 text-stone-600">贅沢な記念日・ご褒美ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">箱根強羅　白檀</td>
                  <td className="p-3 font-bold">★ 4.7</td>
                  <td className="p-3 text-stone-600">三千七百坪の落葉樹林に佇む美宿！全室自家源泉掛け流し露天風呂と天然白檀の芳香が誘う極上空間</td>
                  <td className="p-3 text-stone-600">落ち着いた大人の癒やし旅</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">季の湯　雪月花（共立リゾート）</td>
                  <td className="p-3 font-bold">★ 4.21</td>
                  <td className="p-3 text-stone-600">全客室に檜の露天風呂完備！強羅駅徒歩1分の抜群アクセスと二つの自家源泉で愉しむ湯巡り</td>
                  <td className="p-3 text-stone-600">家族・グループでの満足旅行</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/179644/179644.jpg"
                alt="箱根・強羅　佳ら久（オリックスホテルズ＆リゾーツ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.5（口コミ 118件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県箱根町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  箱根・強羅　佳ら久（オリックスホテルズ＆リゾーツ）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全室に温泉露天風呂を完備！森と海の絶景テラス＆五感を解き放つプレミアムラグジュアリーリゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  箱根・強羅 佳ら久（からく） —— 深い森と空に抱かれる。バルコニー露天風呂と贅を尽くした大人の特等席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室テラスに備えられた専用温泉露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">全客室の広々としたバルコニーに客室露天風呂を完備。強羅の清澄な風を感じながら、箱根連山の緑や相模湾の遠景を眺めてプライベートな湯浴みに浸ることができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 絶景の展望露天風呂「明星の湯」と「蒼海の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">最上階には強羅の大自然を一望する二つの展望露天風呂。箱根外輪山を見渡すパノラマビューと、移り変わる空の色を映す水盤テラスが非日常を演出します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 二つのシグネチャーダイニングで味わう極上ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旬の贅沢食材を繊細に仕立てた会席料理「六 rhenium（ろく）」と、シェフが目の前で厳選肉や海鮮を焼き上げる鉄板焼「十邑（とむら）」。美食の極みを堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.61点、口コミ500件超。「全室露天風呂からの景色が最高で、アメニティやラウンジサービスも超一流」「記念日宿泊に選んで心から感動した」と絶大な支持を獲得しています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 足柄下郡箱根町強羅1300-8他</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥47,241〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>179644</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D179644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】箱根・強羅　佳ら久（オリックスホテルズ＆リゾーツ） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/153496/153496.jpg"
                alt="箱根強羅　白檀"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.7（口コミ 143件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県箱根町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  箱根強羅　白檀
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  三千七百坪の落葉樹林に佇む美宿！全室自家源泉掛け流し露天風呂と天然白檀の芳香が誘う極上空間
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  箱根強羅 白檀（びゃくだん） —— 香りと静寂の隠れ家。贅沢な黄金色の自家源泉をお部屋で心ゆくまで
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全十六室すべてに配された自家源泉掛け流し露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">敷地内から自噴する貴重な自家源泉を全客室の露天風呂に掛け流しで使用。微黄透明でとろみのあるナトリウム塩化物泉が、疲れた身体の芯まで優しく温めてくれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 心地よい香木の芳香と現代アートが彩る静謐のサロン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">館内に漂う高貴な白檀の香りと、宮脇愛子氏の彫刻をはじめとする現代アートの数々。落葉樹林の借景と調和したロビーラウンジで贅沢な寛ぎのひとときを過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 真鶴や相模湾の旬魚と旬の地元野菜が競演する創作懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">近海で揚がる鮮魚や足柄の豊かな恵みを一皿一皿美しく盛り付けた懐石料理。器や盛り付けの美しさ、出汁の奥深い味わいに至るまで細やかな職人技が光ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.83点の驚異的高得点。「お部屋のお風呂の泉質が素晴らしく何度も入った」「白檀の香りと静かな空間、心のこもった接客に感服した」と最高峰の評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 足柄下郡箱根町二ノ平1297-5</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥41,800〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>153496</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D153496"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】箱根強羅　白檀 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/54102/54102.jpg"
                alt="季の湯　雪月花（共立リゾート）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.21（口コミ 4044件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県箱根町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  季の湯　雪月花（共立リゾート）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全客室に檜の露天風呂完備！強羅駅徒歩1分の抜群アクセスと二つの自家源泉で愉しむ湯巡り
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  季の湯 雪月花（せつげつか） —— 和の情緒あふれる大人気宿。檜香る客室露天と趣異なる無料貸切風呂
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室のバルコニーに設えられた風情ある檜露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">全室に天然檜造りの露天風呂を完備。湯船に張られたお湯に浸かりながら、そよぐ風と木の香りに包まれてプライベートなひとときを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 二つの自家源泉を引く大浴場と趣異なる三つの貸切露天
                    </h5>
                    <p className="text-stone-600 leading-relaxed">強羅の二大源泉を引き込んだ大浴場「玉桂の湯」に加え、巨岩風呂や野趣あふれる三つの無料貸切露天風呂を完備。館内だけで充実した湯巡りが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 選べる夕食スタイル「和食会席」または「牛しゃぶ・寿司」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">日本海の鮮魚や旬菜を盛り込んだ「四季彩鍋と和食会席」、または厳選国産牛しゃぶしゃぶと握り寿司のコースから好みに合わせて選べる満足度の高い夕食。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.25点、口コミ8200件超という圧倒的実績。「強羅駅目の前で観光に便利」「お部屋の檜風呂と無料の夜鳴きそばサービスが嬉しい」と高い人気を誇ります。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 足柄下郡箱根町強羅1300-34</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥19,855〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>54102</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】季の湯　雪月花（共立リゾート） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 強羅温泉・アートと自然を巡るおすすめ観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                箱根強羅公園の散策とクラフト体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                大正3年に開園された日本初のフランス式整型庭園。四季折々の花々が咲き誇る温室や噴水池のほか、クラフトハウスでは吹きガラスや陶芸体験が楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                彫刻の森美術館での野外アート鑑賞
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                広大な緑の芝生に国内外の名匠による彫刻作品が調和する野外美術館。ピカソ館やステンドグラスの塔など、自然光の中で感性を刺激するアート体験が魅力です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                箱根登山鉄道＆ケーブルカーでの車窓トリップ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                あじさい電車や紅葉の名所として名高い箱根登山鉄道。スイッチバックを繰り返しながら急勾配を登る旅路は、箱根ならではの風情を満喫できます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              神奈川県箱根町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「神奈川県箱根町」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で箱根町を寄付先に選び、寄付額の30%相当となるトラベルクーポンを返礼品として申し込みます。楽天ポイントの還元も受けられます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 発行から3年間の有効期間内で温泉旅行を計画
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                クーポンは取得後即時〜翌日にアカウントに付与され、有効期限はたっぷり3年間。記念日や誕生日のご褒美旅行に合わせてゆったり日程を決められます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベルの予約画面でクーポンを適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                佳ら久、白檀、雪月花などの対象客室（露天風呂付き客室プラン等）を選択し、決済画面でクーポンを適用すれば宿泊料金から大幅割引されます。
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
              <Link href="/furusato-tax-hakone-sengokuhara-pampas-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根仙石原温泉 すすき草原＆美肌にごり湯特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
