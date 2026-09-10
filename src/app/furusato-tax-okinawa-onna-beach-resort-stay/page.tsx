import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【沖縄・恩納村×ふるさと納税】西海岸エメラルドビーチ＆最高峰ラグジュアリー！プールヴィラ特集｜ハレクラニ・ハイアット瀬良垣・ルネッサンス',
  description: '日本屈指の美ら海リゾート・沖縄県恩納村を楽天ふるさと納税でお得に極上バケーション！ハワイ名門の天国の館「ハレクラニ沖縄」、360度海に囲まれた島リゾート「ハイアット リージェンシー 瀬良垣アイランド 沖縄」、イルカと遊べる「ルネッサンスリゾートオキナワ」を徹底比較。恩納村トラベルクーポン活用術を網羅。',
  keywords: '恩納村 ふるさと納税,ハレクラニ沖縄 クーポン,ハイアット瀬良垣 ふるさと納税,ルネッサンス沖縄 宿泊,恩納村 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-okinawa-onna-beach-resort-stay',
  },
  openGraph: {
    title: '【沖縄・恩納村×ふるさと納税】西海岸エメラルドビーチ＆最高峰ラグジュアリー！プールヴィラ特集｜ハレクラニ・ハイアット瀬良垣・ルネッサンス',
    description: '日本屈指の美ら海リゾート・沖縄県恩納村を楽天ふるさと納税でお得に極上バケーション！ハワイ名門の天国の館「ハレクラニ沖縄」、360度海に囲まれた島リゾート「ハイアット リージェンシー 瀬良垣アイランド 沖縄」、イルカと遊べる「ルネッサンスリゾートオキナワ」を徹底比較。恩納村トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-okinawa-onna-beach-resort-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【沖縄・恩納村×ふるさと納税】西海岸エメラルドビーチ＆最高峰ラグジュアリー！プールヴィラ特集｜ハレクラニ・ハイアット瀬良垣・ルネッサンス',
    description: '日本屈指の美ら海リゾート・沖縄県恩納村を楽天ふるさと納税でお得に極上バケーション！ハワイ名門の天国の館「ハレクラニ沖縄」、360度海に囲まれた島リゾート「ハイアット リージェンシー 瀬良垣アイランド 沖縄」、イルカと遊べる「ルネッサンスリゾートオキナワ」を徹底比較。恩納村トラベルクーポン活用術を網羅。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-okinawa-onna-beach-resort-stay',
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
        <span className="text-stone-700 font-medium truncate">【沖縄・恩納村×ふるさと納税】西海岸エメラルドビーチ＆最高峰ラグジュアリー！プールヴィラ特集｜ハレクラニ・ハイアット瀬良垣・ルネッサンス</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>沖縄県恩納村（西海岸リゾート） ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【沖縄・恩納村×ふるさと納税】西海岸エメラルドビーチ＆最高峰ラグジュアリー！プールヴィラ特集｜ハレクラニ・ハイアット瀬良垣・ルネッサンス
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本屈指の美ら海リゾート・沖縄県恩納村を楽天ふるさと納税でお得に極上バケーション！ハワイ名門の天国の館「ハレクラニ沖縄」、360度海に囲まれた島リゾート「ハイアット リージェンシー 瀬良垣アイランド 沖縄」、イルカと遊べる「ルネッサンスリゾートオキナワ」を徹底比較。恩納村トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            どこまでも青く透き通る東シナ海と白い砂浜——サンセット街道で出会う世界基準のホスピタリティと南国の楽園ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            沖縄本島の中央部西海岸に位置し、沖縄屈指のリゾートエリアとして知られる国頭郡恩納村（おんなそん）。海岸線一帯が「沖縄海岸国定公園」に指定され、万座毛（まんざもう）をはじめとする名勝や、エメラルドグリーンからコバルトブルーへとグラデーションを描くサンゴ礁の海が広がっています。国道58号線沿いには世界的な高級リゾートホテルが建ち並び、夕暮れ時には東シナ海の水平線へと沈む息をのむような美しいサンセットが訪れる人々を魅了します。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            恩納村リゾートの醍醐味は、客室バルコニーから眺めるどこまでも広がる海と波音、そして開放感あふれるインフィニティプールでのチルアウト。夕食には沖縄県産黒毛和牛やアグー豚、近海で獲れた鮮魚、島野菜を取り入れた極上のフレンチ、鉄板焼き、本格琉球懐石が楽しめます。沖縄県恩納村へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの最高級リゾートへお得に宿泊でき、特別なハネムーンや家族旅行を最高にラグジュアリーに演出できます。
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
                  <td className="p-3 font-bold text-amber-900">ハレクラニ沖縄</td>
                  <td className="p-3 font-bold">★ 4.81</td>
                  <td className="p-3 text-stone-600">ハワイで百年の歴史を誇る名門「天国の館」！全360室オーシャンビュー＆名物オーキッドプール</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ハイアットリージェンシー瀬良垣アイランド沖縄</td>
                  <td className="p-3 font-bold">★ 4.63</td>
                  <td className="p-3 text-stone-600">瀬良垣島全体がひとつのリゾート！360度海に囲まれたラグジュアリーアイランドと海水プール</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ルネッサンスリゾートオキナワ</td>
                  <td className="p-3 font-bold">★ 4.66</td>
                  <td className="p-3 text-stone-600">ホテル敷地内でイルカとふれあえるマリンパラダイス！全室バルコニー付き＆充実のアクティビティ</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/172611/172611.jpg"
                alt="ハレクラニ沖縄"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.81（口コミ 717件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">沖縄県恩納村（西海岸リゾート）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ハレクラニ沖縄
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ハワイで百年の歴史を誇る名門「天国の館」！全360室オーシャンビュー＆名物オーキッドプール
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ハレクラニ沖縄 —— 国定公園の海を見渡す至高の楽園。五つのプールと世界屈指のダイニングで過ごす極上の休日
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室が50㎡以上のゆとりあるオーシャンビュー設計
                    </h5>
                    <p className="text-stone-600 leading-relaxed">白を基調としたハレクラニ伝統の「セブンシェイズ・オブ・ホワイト」のインテリア。バルコニーからエメラルドグリーンの海を一望できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 約150万枚のモザイクタイルで描かれた名物「オーキッドプール」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ハレクラニの象徴である蘭のプールをはじめ、クワイエットプールやインドアプールなど5つの個性豊かなプールを完備しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ミシュラン二つ星シェフ監修のイノベーティブフレンチ「SHIROUX」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">沖縄の食材の可能性を極限まで引き出した芸術的料理。波の音を聴きながら優雅なディナーを堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.81点、口コミ絶賛の嵐。「ホスピタリティ、客室、プール、お料理すべてが完璧でまさに天国」「沖縄で最高の思い出になった」と憧れの最高峰。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>沖縄県 国頭郡恩納村名嘉真1967-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥36,021〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>172611</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D172611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ハレクラニ沖縄 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/166320/166320.jpg"
                alt="ハイアットリージェンシー瀬良垣アイランド沖縄"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.63（口コミ 991件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">沖縄県恩納村（西海岸リゾート）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ハイアットリージェンシー瀬良垣アイランド沖縄
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  瀬良垣島全体がひとつのリゾート！360度海に囲まれたラグジュアリーアイランドと海水プール
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ハイアット リージェンシー 瀬良垣アイランド 沖縄 —— 一本の橋で結ばれた島のリゾート。海と一体化するラグーンプール
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 沖縄本島と橋で結ばれたプライベート感あふれる離島ロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">四方を澄み切った海に囲まれた贅沢な環境。トゥクトゥクでの移動などリゾート気分を盛り上げる演出が満載です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 海水を取り入れたラグーンプールとインフィニティプール
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海とシームレスに繋がるような開放的なプールエリア。プールサイドのデイベッドで優雅な読書やカクテルを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 炉端、鮨、鉄板焼、イタリアンと多彩なオープンキッチンレストラン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">厳選された沖縄の食材をライブ感あふれる空間で調理。上質で活気ある食体験が魅力です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.63点、口コミ高評価。「島全体がリゾートで雰囲気が抜群」「プールの居心地が最高でスタッフの気配りも素晴らしい」とカップル・ファミリーに大好評。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>沖縄県 国頭郡恩納村瀬良垣1108</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥19,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>166320</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D166320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ハイアットリージェンシー瀬良垣アイランド沖縄 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/54315/54315.jpg"
                alt="ルネッサンスリゾートオキナワ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.66（口コミ 904件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">沖縄県恩納村（西海岸リゾート）</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ルネッサンスリゾートオキナワ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ホテル敷地内でイルカとふれあえるマリンパラダイス！全室バルコニー付き＆充実のアクティビティ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ルネッサンスリゾートオキナワ —— プライベートビーチとドルフィンラグーン。子供も大人も夢中になれるリゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内のラグーンでイルカと泳ぎふれあえる独自プログラム
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ドルフィンプログラムをはじめ40種類以上のマリンスポーツが充実。子供連れファミリーにとって最高の体験が揃っています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室が海を見晴らすプライベートバルコニー付き
                    </h5>
                    <p className="text-stone-600 leading-relaxed">東シナ海の青い海と夕日を独り占め。ファミリー向けに二段ベッド付きの楽しいファミリールームも完備しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 海の上にせり出すレストラン「コーラルシービュー」でのBBQ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">波の音を聞きながら楽しむ本格バーベキューや、出来立てフレンチトーストが名物の朝食ビュッフェが評判です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.66点、口コミ2800件超。「子供向けのアクティビティが豊富でイルカ体験に大喜び」「朝食バイキングが最高で連泊しても飽きない」とファミリー層から絶大な支持。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>沖縄県 国頭郡恩納村山田3425-2</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥21,000〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>54315</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ルネッサンスリゾートオキナワ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 恩納村・万座毛＆青の洞窟・真栄田岬観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                名勝「万座毛（まんざもう）」の象の鼻岩とサンセット
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                琉球石灰岩の断崖絶壁に打ち寄せる荒波と、象の鼻のような奇岩。夕暮れ時には東シナ海を黄金色に染める絶景の夕日が広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                真栄田岬「青の洞窟」でのシュノーケリング＆ダイビング
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                太陽光が海底の白砂に反射して青く輝く神秘的な洞窟。色とりどりの熱帯魚やサンゴ礁に囲まれる沖縄屈指の海中アクティビティスポットです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                琉球村でのおきなわ伝統文化＆紅型・シーサー体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                古民家を移築したテーマパーク。エイサーの演舞見学やシーサー絵付け、サトウキビ搾りなど沖縄の伝統文化を体験できます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              沖縄県恩納村ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「沖縄県恩納村」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で恩納村を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 那覇空港から沖縄自動車道または空港リムジンバスでアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                那覇空港から車で沖縄自動車道（屋嘉IC）経由で約50分、直行リムジンバスでも約60〜80分。3年間の有効期間内で、夏のビーチや冬の避寒に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ハレクラニ沖縄、ハイアット瀬良垣、ルネッサンスなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
