import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【東京駅・丸の内×ふるさと納税】重要文化財駅舎＆皇居ビュー！日本の中心で味わう最高峰ホテル特集｜東京ステーションホテル・パレスホテル・帝国ホテル',
  description: '日本の表玄関・東京都千代田区（東京駅・丸の内・大手町・日比谷）を楽天ふるさと納税でお得に贅沢ステイ！国指定重要文化財の赤レンガ駅舎内「東京ステーションホテル」、皇居外苑の緑を望む世界最高峰「パレスホテル東京」、日本の迎賓館「帝国ホテル 東京」を徹底比較。千代田区ふるさと納税トラベルクーポン活用術を網羅。',
  keywords: '東京駅 ホテル ふるさと納税,東京ステーションホテル クーポン,パレスホテル東京 ふるさと納税,帝国ホテル東京 宿泊,千代田区 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-tokyo-station-marunouchi-luxury-stay',
  },
  openGraph: {
    title: '【東京駅・丸の内×ふるさと納税】重要文化財駅舎＆皇居ビュー！日本の中心で味わう最高峰ホテル特集｜東京ステーションホテル・パレスホテル・帝国ホテル',
    description: '日本の表玄関・東京都千代田区（東京駅・丸の内・大手町・日比谷）を楽天ふるさと納税でお得に贅沢ステイ！国指定重要文化財の赤レンガ駅舎内「東京ステーションホテル」、皇居外苑の緑を望む世界最高峰「パレスホテル東京」、日本の迎賓館「帝国ホテル 東京」を徹底比較。千代田区ふるさと納税トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-tokyo-station-marunouchi-luxury-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【東京駅・丸の内×ふるさと納税】重要文化財駅舎＆皇居ビュー！日本の中心で味わう最高峰ホテル特集｜東京ステーションホテル・パレスホテル・帝国ホテル',
    description: '日本の表玄関・東京都千代田区（東京駅・丸の内・大手町・日比谷）を楽天ふるさと納税でお得に贅沢ステイ！国指定重要文化財の赤レンガ駅舎内「東京ステーションホテル」、皇居外苑の緑を望む世界最高峰「パレスホテル東京」、日本の迎賓館「帝国ホテル 東京」を徹底比較。千代田区ふるさと納税トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-11T01:00:00+09:00',
    dateModified: '2026-09-11T01:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-tokyo-station-marunouchi-luxury-stay',
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
        <span className="text-stone-700 font-medium truncate">【東京駅・丸の内×ふるさと納税】重要文化財駅舎＆皇居ビュー！日本の中心で味わう最高峰ホテル特集｜東京ステーションホテル・パレスホテル・帝国ホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>東京都千代田区（東京駅・丸の内） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【東京駅・丸の内×ふるさと納税】重要文化財駅舎＆皇居ビュー！日本の中心で味わう最高峰ホテル特集｜東京ステーションホテル・パレスホテル・帝国ホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本の表玄関・東京都千代田区（東京駅・丸の内・大手町・日比谷）を楽天ふるさと納税でお得に贅沢ステイ！国指定重要文化財の赤レンガ駅舎内「東京ステーションホテル」、皇居外苑の緑を望む世界最高峰「パレスホテル東京」、日本の迎賓館「帝国ホテル 東京」を徹底比較。千代田区ふるさと納税トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            赤レンガ駅舎の歴史と皇居外苑の美しい杜——世界最高峰のサービスと美食に包まれる日本の中枢ラグジュアリーステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東京都千代田区、日本の政治・経済・交通の中心地である東京駅・丸の内エリア。大正三年（1914年）に創建され、戦災復興を経て創建当時の優美な姿へと復原された辰野金吾設計の赤レンガ駅舎（丸の内駅舎）は、国の重要文化財に指定されています。丸の内仲通りの洗練された街路樹やブランドショップ、皇居外苑の広大な緑と濠、三菱一号館美術館など、歴史と最先端の文化が融合した日本屈指のプレステージエリアです。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東京駅・丸の内エリアのホテル滞在は、世界中から賓客を迎えてきた日本最高峰のホスピタリティを五感で体感できる極上の時間。重要文化財のドームを間近に見下ろす客室や、皇居の緑と丸の内の摩天楼を見渡すテラス付きスイートで、優雅なティータイムや至高のディナーを満喫できます。東京都千代田区へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの格式高きグランドホテルへお得に宿泊でき、特別な記念日や東京観光が一生忘れられない思い出になります。
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
                  <td className="p-3 font-bold text-amber-900">東京ステーションホテル</td>
                  <td className="p-3 font-bold">★ 4.83</td>
                  <td className="p-3 text-stone-600">国指定重要文化財・東京駅丸の内駅舎の中に泊まる唯一無二の体験！クラシックホテルの最高峰</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">パレスホテル東京</td>
                  <td className="p-3 font-bold">★ 4.71</td>
                  <td className="p-3 text-stone-600">皇居外苑の豊かな緑とお濠を望む抜群のロケーション！フォーブス・トラベルガイド5つ星の至高ホテル</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">帝国ホテル東京</td>
                  <td className="p-3 font-bold">★ 4.7</td>
                  <td className="p-3 text-stone-600">明治二十三年開業・日本の迎賓館として歴史を刻んできた名門！伝統のローストビーフとおもてなし</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/137869/137869.jpg"
                alt="東京ステーションホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.83（口コミ 924件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">東京都千代田区（東京駅・丸の内）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  東京ステーションホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  国指定重要文化財・東京駅丸の内駅舎の中に泊まる唯一無二の体験！クラシックホテルの最高峰
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  東京ステーションホテル —— 百年の物語を紡ぐ名門。高い天井と優美なヨーロピアンクラシック空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 東京駅丸の内駅舎のドームサイドや駅前広場を望む特別な客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">創建当時のレリーフを窓から眺める「ドームサイド」など唯一無二の部屋。防音性も極めて高く、驚くほどの静寂が広がります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 川端康成や松本清張ら文豪に愛された歴史と気品あふれる調度品
                    </h5>
                    <p className="text-stone-600 leading-relaxed">原稿用紙をモチーフにしたメモ帳など文学の香り漂う演出。細部までこだわり抜かれた上質なインテリアが魅力です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 駅舎中央最上階のアトリウムで味わう伝説の朝食ブッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">天窓から自然光が注ぐ広大な空間で味わう約100種類の贅沢朝食。出来立ての和洋料理やスイーツが絶品です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.83点、口コミ絶賛の最高峰。「重要文化財の中に泊まる特別感とお部屋のクラシカルな美しさに感動」「朝食ブッフェの美味しさとスタッフの対応が別格」と憧れの宿。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>東京都 千代田区丸の内1-9-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥27,627〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>137869</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D137869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】東京ステーションホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/184685/184685.jpg"
                alt="パレスホテル東京"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.71（口コミ 108件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">東京都千代田区（東京駅・丸の内）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  パレスホテル東京
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  皇居外苑の豊かな緑とお濠を望む抜群のロケーション！フォーブス・トラベルガイド5つ星の至高ホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  パレスホテル東京 —— 水と緑に寄り添うおもてなしの美学。皇居を見晴らすバルコニー付き客室と最高峰ダイニング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 大手町駅直結・皇居の濠に面した都心屈指のパノラマビュー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">多くの客室に都内では希少なオープンエアテラスを完備。爽やかな風を感じながら白鳥が遊ぶお濠や皇居の緑を眺められます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> フォーブス・トラベルガイドで最高ランク「5つ星」を連続獲得
                    </h5>
                    <p className="text-stone-600 leading-relaxed">世界が認めた洗練のホスピタリティ。細やかな心配りと温もりあふれるサービスで、極上の寛ぎが約束されます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 名物「マロンシャンテリー」やミシュラン星付きフレンチ「エステール」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伝統のスイーツからアラン・デュカス監修の現代フランス料理まで。美食家たちを魅了し続ける多彩な名店が揃っています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.71点、口コミ高評価。「テラスからの皇居の景色が美しく、都会のオアシスそのもの」「スタッフの立ち振る舞いが完璧で最高のご褒美になった」と大絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>東京都 千代田区丸の内1-1-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥59,286〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>184685</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D184685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】パレスホテル東京 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28576/28576.jpg"
                alt="帝国ホテル東京"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.7（口コミ 2822件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">東京都千代田区（東京駅・丸の内）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  帝国ホテル東京
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  明治二十三年開業・日本の迎賓館として歴史を刻んできた名門！伝統のローストビーフとおもてなし
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  帝国ホテル 東京 —— 日本のホテル文化の原点。伝統のサービスと最新の快適性が融合する最高峰グランドホテル
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 日比谷公園や銀座、丸の内へ徒歩すぐのプレステージ立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">観劇やショッピング、散策に最高のロケーション。重厚感あふれるロビーと美しい装花が旅人を優雅に迎えます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> フランク・ロイド・ライトの思想を受け継ぐ格式高い建築美と客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">静寂と機能性を追求した落ち着きある客室。細部まで行き届いた清掃と上質なリネンが心地よい眠りを届けます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 名門フレンチ「レ セゾン」や元祖バイキング「インペリアルバイキング サール」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">バイキング発祥の地として名高いビュッフェや伝統のローストビーフ。一流シェフが織りなす伝統の味を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.70点、口コミ3000件超。「老舗ならではの安心感とスタッフのプロフェッショナルな対応に感動」「バイキングのローストビーフが絶品で一生の思い出になった」と信頼の評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>東京都 千代田区内幸町1-1-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥35,280〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>28576</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】帝国ホテル東京 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 東京駅丸の内駅舎・丸の内仲通り＆皇居外苑・丸ビル観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                東京駅丸の内駅舎ドーム天井の干支レリーフとライトアップ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                大正創建当時の姿に蘇った八角形ドーム天井の彫刻。日没後にオレンジ色に照らし出される赤レンガ駅舎の夜景は息をのむ美しさです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                丸の内仲通りの街路樹散策とオープンカフェ・イルミネーション
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                石畳の美しい並木道。冬には約120万球のシャンパンゴールドのLEDで輝く「丸の内イルミネーション」が街をロマンチックに彩ります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                皇居外苑「二重橋」散策と和田倉噴水公園
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                歴史を感じる楠木正成像や二重橋の風景。お濠端の遊歩道を歩きながら、都心の摩天楼と緑豊かな杜のコントラストを楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              東京都千代田区ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「東京都千代田区」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で千代田区を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 東京駅・大手町駅・有楽町駅へダイレクトアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                新幹線やJR線、地下鉄各線からすぐ。3年間の有効期間内で、特別な誕生日や結婚記念日、東京観光に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京ステーションホテル、パレスホテル東京、帝国ホテル東京などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-nagoya-luxury-gourmet-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 名古屋 駅直結スカイビュー＆最新ラグジュアリー特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shodoshima-olive-island-onsen-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 小豆島 エンジェルロード＆オリーブの島・絶景温泉特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
