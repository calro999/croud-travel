import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【登別温泉×ふるさと納税】豪華バイキング＆名湯大浴場！北海道三大蟹と地獄谷の絶景を巡る宿ガイド｜まほろば・第一滝本館・登別グランドホテル',
  description: '日本有数の温泉大国・北海道登別温泉を楽天ふるさと納税でお得に満喫！三大蟹食べ放題ビュッフェと全31の湯巡りを誇る「ホテルまほろば」、千五百坪の大浴場に5つの源泉を引く老舗「第一滝本館」、庭園露天風呂と鬼サウナが話題の「登別グランドホテル」を徹底比較。登別市トラベルクーポン活用術を網羅。',
  keywords: '登別温泉 ふるさと納税,登別温泉 バイキング かに,ホテルまほろば ふるさと納税,第一滝本館 クーポン,登別グランドホテル ふるさと納税',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-noboribetsu-onsen-buffet-gourmet-stay',
  },
  openGraph: {
    title: '【登別温泉×ふるさと納税】豪華バイキング＆名湯大浴場！北海道三大蟹と地獄谷の絶景を巡る宿ガイド｜まほろば・第一滝本館・登別グランドホテル',
    description: '日本有数の温泉大国・北海道登別温泉を楽天ふるさと納税でお得に満喫！三大蟹食べ放題ビュッフェと全31の湯巡りを誇る「ホテルまほろば」、千五百坪の大浴場に5つの源泉を引く老舗「第一滝本館」、庭園露天風呂と鬼サウナが話題の「登別グランドホテル」を徹底比較。登別市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-noboribetsu-onsen-buffet-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【登別温泉×ふるさと納税】豪華バイキング＆名湯大浴場！北海道三大蟹と地獄谷の絶景を巡る宿ガイド｜まほろば・第一滝本館・登別グランドホテル',
    description: '日本有数の温泉大国・北海道登別温泉を楽天ふるさと納税でお得に満喫！三大蟹食べ放題ビュッフェと全31の湯巡りを誇る「ホテルまほろば」、千五百坪の大浴場に5つの源泉を引く老舗「第一滝本館」、庭園露天風呂と鬼サウナが話題の「登別グランドホテル」を徹底比較。登別市トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-noboribetsu-onsen-buffet-gourmet-stay',
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
        <span className="text-stone-700 font-medium truncate">【登別温泉×ふるさと納税】豪華バイキング＆名湯大浴場！北海道三大蟹と地獄谷の絶景を巡る宿ガイド｜まほろば・第一滝本館・登別グランドホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>北海道登別市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【登別温泉×ふるさと納税】豪華バイキング＆名湯大浴場！北海道三大蟹と地獄谷の絶景を巡る宿ガイド｜まほろば・第一滝本館・登別グランドホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本有数の温泉大国・北海道登別温泉を楽天ふるさと納税でお得に満喫！三大蟹食べ放題ビュッフェと全31の湯巡りを誇る「ホテルまほろば」、千五百坪の大浴場に5つの源泉を引く老舗「第一滝本館」、庭園露天風呂と鬼サウナが話題の「登別グランドホテル」を徹底比較。登別市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            地獄谷から湧き出る奇跡の九重泉——圧倒的なスケールの名湯と北海道グルメビュッフェを極める旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北海道登別市に位置する登別（のぼりべつ）温泉は、江戸時代からその名を知られ、全国の温泉ランキングでも常に上位に君臨する日本屈指の温泉地です。毎分3,000リットルもの湯が湧出する源泉地「地獄谷」は、白煙が立ち上り硫黄の香りが立ち込める大迫力の光景。登別の最大の特徴は、硫黄泉、食塩泉、明礬泉、芒硝泉、緑礬泉、重曹泉など、実に9種類もの異なる泉質が同一地域から湧き出ている点にあり、「温泉のデパート」とも称されています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            温泉と並ぶ登別旅行の大きな醍醐味が、北海道ならではの豪快な味覚バイキングです。タラバガニ・ズワイガニ・毛ガニの食べ比べをはじめ、目の前で焼き上げられる十勝牛ステーキ、新鮮なイクラやサーモンを山盛りに盛る海鮮丼など、北の大地の恵みを心ゆくまで堪能できます。登別市へのふるさと納税を活用すれば、寄付額の30%相当の楽天トラベルクーポンが付与され、名湯と美食バイキングを誇る名門宿へお得に宿泊可能。家族旅行やグループ旅行、グルメ旅に最高の選択肢です。
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
                  <td className="p-3 font-bold text-amber-900">登別温泉　ホテル　まほろば</td>
                  <td className="p-3 font-bold">★ 4.3</td>
                  <td className="p-3 text-stone-600">日本最大級の露天風呂と全三十一の湯船！三大蟹食べ放題の豪華北海道ディナービュッフェ</td>
                  <td className="p-3 text-stone-600">贅沢な記念日・ご褒美ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">登別温泉　第一滝本館</td>
                  <td className="p-3 font-bold">★ 4.56</td>
                  <td className="p-3 text-stone-600">創業百六十有余年・千五百坪の大浴場に五つの源泉！地獄谷を真正面に望む登別温泉の象徴</td>
                  <td className="p-3 text-stone-600">落ち着いた大人の癒やし旅</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">登別温泉　登別グランドホテル</td>
                  <td className="p-3 font-bold">★ 4.26</td>
                  <td className="p-3 text-stone-600">昭和十三年創業・登別の迎賓館！本格ドーム型大浴場と滝見の露天風呂、話題の「鬼サウナ」</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/12568/12568.jpg"
                alt="登別温泉　ホテル　まほろば"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.3（口コミ 2856件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道登別市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  登別温泉　ホテル　まほろば
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  日本最大級の露天風呂と全三十一の湯船！三大蟹食べ放題の豪華北海道ディナービュッフェ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  登別温泉 ホテル まほろば —— 圧巻の湯巡りと海鮮三昧。家族みんなが笑顔になる登別屈指のエンタメ温泉リゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地下二階・三階に広がる日本最大級の大浴場と全三十一の湯船
                    </h5>
                    <p className="text-stone-600 leading-relaxed">硫黄泉・食塩泉・単純泉・酸性鉄泉の四種類の泉質を引く広大な大浴場。緑豊かな渓谷を望む露天風呂や檜風呂、打たせ湯など、館内だけで贅沢な湯巡りを完結できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> タラバガニ・ズワイガニ・毛ガニが並ぶ名物ディナービュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">レストラン「リバティ」や「グリーンテラス」で提供される大人気ビュッフェ。身の詰まった蟹の食べ放題はもちろん、握り寿司や揚げたて天ぷら、北海道スイーツがずらりと並びます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ファミリーからシニアまで快適に寛げる多彩な客室バリエーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">和室、洋室、和洋室のほか、展望風呂付きのスイートルームまで完備。三世代旅行でも安心して快適な滞在を満喫できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.24点、口コミ5300件超。「とにかくカニの身がぎっしりで美味しく、お風呂の広さと種類の多さに圧倒された」「子供も大人も大満足」と絶賛の声が寄せられています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 登別市登別温泉町65</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥12,500〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>12568</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】登別温泉　ホテル　まほろば の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/30109/30109.jpg"
                alt="登別温泉　第一滝本館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.56（口コミ 3858件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道登別市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  登別温泉　第一滝本館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百六十有余年・千五百坪の大浴場に五つの源泉！地獄谷を真正面に望む登別温泉の象徴
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  登別温泉 第一滝本館 —— 名湯の歴史を紡ぐ老舗。地獄谷のパノラマを望む大浴場と充実の和洋ビュッフェ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 千五百坪・三十五の湯船に五つの天然源泉を湛える「温泉天国」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">創業者の滝本金蔵が妻の皮膚病を治すために開いた名湯。硫黄泉・芒硝泉・酸性緑礬泉・食塩泉・重曹泉の五つの源泉を24時間いつでも堪能できる唯一無二の大浴場です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地獄谷を真正面に望む圧巻のパノラマビュー露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">窓一面、そして露天風呂の目の前に広がる迫力の地獄谷。立ち上る湯けむりと季節ごとの大自然の息吹を感じながら、至福の入浴体験が味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の旬菜と海鮮をライブキッチンで味わうビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">オープンキッチンで焼き上げるステーキや揚げたて天ぷら、新鮮な刺身や郷土料理が並ぶ豪華ビュッフェ。季節の食材をふんだんに取り入れた料理が並びます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点、口コミ6200件超。「お風呂のスケールが世界一レベルで素晴らしい」「地獄谷が目の前で散策にも最高、ビュッフェも種類豊富で美味しい」と名門ならではの絶賛評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 登別市登別温泉町55</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>30109</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D30109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】登別温泉　第一滝本館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/39175/39175.jpg"
                alt="登別温泉　登別グランドホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.26（口コミ 3290件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道登別市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  登別温泉　登別グランドホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  昭和十三年創業・登別の迎賓館！本格ドーム型大浴場と滝見の露天風呂、話題の「鬼サウナ」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  登別温泉 登別グランドホテル —— クラシカルな気品と革新。滝の流れる露天風呂とサウナー垂涎の本格ロウリュ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ローマ風の本格ドーム型大浴場と大庭園の滝見露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">モダンな円形ドームの大浴場と、四季の庭園に滝が流れる野趣あふれる露天風呂。食塩泉・硫黄泉・鉄泉の三つの泉質を心ゆくまで味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> サウナシュラン受賞！鬼をテーマにした本格オートロウリュ「鬼サウナ」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">サウナ愛好家から熱烈な支持を集める鬼サウナ。登別の鬼伝説をモチーフにした強烈なオートロウリュと、樽水風呂・外気浴デッキで極上の「ととのい」を体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> シェフ特製の本格ローストビーフと季節の和洋中ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">洋食に定評のある老舗ホテルならではのハイレベルなビュッフェ。ジューシーなローストビーフや出来立てパスタ、北海道産乳製品を使ったデザートも大人気です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.45点、口コミ3800件超。「鬼サウナの熱波と水風呂が最高で庭園露天風呂も素晴らしい」「料理のクオリティが高く、館内の落ち着いたクラシカルな雰囲気が心地よい」と評判です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 登別市登別温泉町154</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥15,400〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>39175</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D39175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】登別温泉　登別グランドホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 登別温泉・地獄谷散策と大自然体感ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                登別地獄谷の遊歩道散策と大湯沼
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                火口跡から白い水煙と硫黄泉が噴出する地獄谷。整備された木道を歩いて展望台へ向かえば、地球の息吹を間近に感じる大パノラマが広がります。奥の大湯沼天然足湯も人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                のぼりべつクマ牧場とロープウェイ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街からロープウェイで山頂へ。ユーモラスにおねだりするエゾヒグマたちの姿を間近で観察できる「人のオリ」や倶多楽湖の絶景ビューポイントが楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                登別伊達時代村での江戸情緒体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                江戸時代の町並みや武家屋敷を再現したカルチャーパーク。迫力満点の忍者ショーや優雅な花魁道中、手裏剣体験など、歴史のロマンに浸ることができます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              北海道登別市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「北海道登別市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で登別市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当額がクーポンとして即時アカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 新千歳空港や札幌からのアクセスに合わせて日程を決定
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新千歳空港から高速バスやJRで約1時間の好アクセス。クーポンの有効期限は3年間あるため、スキーシーズンや夏の爽快な避暑旅など自由に計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                まほろば、第一滝本館、登別グランドホテルのビュッフェ付きプランを予約する際、確認画面でクーポンを選択して割引価格で予約完了です。
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
