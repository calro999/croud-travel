import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【鎌倉・湘南×ふるさと納税】七里ヶ浜オーシャンビュー＆古都の歴史情緒！鶴岡八幡宮・江ノ電の名宿特集｜鎌倉プリンス・HOTEL AO・メトロポリタン',
  description: '海と山に囲まれた日本屈指の古都・神奈川県鎌倉市を楽天ふるさと納税でお得に贅沢ステイ！全室オーシャンビュー＆江の島と富士山を一望する「鎌倉プリンスホテル」、腰越の海を望むデザイナーズ宿「HOTEL AO KAMAKURA」、若宮大路沿いで鶴岡八幡宮参拝に最適な「ホテルメトロポリタン 鎌倉」を徹底比較。鎌倉市トラベルクーポン活用術を網羅。',
  keywords: '鎌倉 ふるさと納税,鎌倉プリンスホテル クーポン,HOTEL AO KAMAKURA ふるさと納税,ホテルメトロポリタン鎌倉 宿泊,鎌倉市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kamakura-shonan-ocean-history-stay',
  },
  openGraph: {
    title: '【鎌倉・湘南×ふるさと納税】七里ヶ浜オーシャンビュー＆古都の歴史情緒！鶴岡八幡宮・江ノ電の名宿特集｜鎌倉プリンス・HOTEL AO・メトロポリタン',
    description: '海と山に囲まれた日本屈指の古都・神奈川県鎌倉市を楽天ふるさと納税でお得に贅沢ステイ！全室オーシャンビュー＆江の島と富士山を一望する「鎌倉プリンスホテル」、腰越の海を望むデザイナーズ宿「HOTEL AO KAMAKURA」、若宮大路沿いで鶴岡八幡宮参拝に最適な「ホテルメトロポリタン 鎌倉」を徹底比較。鎌倉市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kamakura-shonan-ocean-history-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【鎌倉・湘南×ふるさと納税】七里ヶ浜オーシャンビュー＆古都の歴史情緒！鶴岡八幡宮・江ノ電の名宿特集｜鎌倉プリンス・HOTEL AO・メトロポリタン',
    description: '海と山に囲まれた日本屈指の古都・神奈川県鎌倉市を楽天ふるさと納税でお得に贅沢ステイ！全室オーシャンビュー＆江の島と富士山を一望する「鎌倉プリンスホテル」、腰越の海を望むデザイナーズ宿「HOTEL AO KAMAKURA」、若宮大路沿いで鶴岡八幡宮参拝に最適な「ホテルメトロポリタン 鎌倉」を徹底比較。鎌倉市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T18:00:00+09:00',
    dateModified: '2026-09-10T18:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-kamakura-shonan-ocean-history-stay',
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
        <span className="text-stone-700 font-medium truncate">【鎌倉・湘南×ふるさと納税】七里ヶ浜オーシャンビュー＆古都の歴史情緒！鶴岡八幡宮・江ノ電の名宿特集｜鎌倉プリンス・HOTEL AO・メトロポリタン</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>神奈川県鎌倉市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【鎌倉・湘南×ふるさと納税】七里ヶ浜オーシャンビュー＆古都の歴史情緒！鶴岡八幡宮・江ノ電の名宿特集｜鎌倉プリンス・HOTEL AO・メトロポリタン
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          海と山に囲まれた日本屈指の古都・神奈川県鎌倉市を楽天ふるさと納税でお得に贅沢ステイ！全室オーシャンビュー＆江の島と富士山を一望する「鎌倉プリンスホテル」、腰越の海を望むデザイナーズ宿「HOTEL AO KAMAKURA」、若宮大路沿いで鶴岡八幡宮参拝に最適な「ホテルメトロポリタン 鎌倉」を徹底比較。鎌倉市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            青い海と緑の古都が織りなす極上の休日——七里ヶ浜の波音と鶴岡八幡宮の杜に癒やされる洗練の湘南リゾートステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            神奈川県南部に位置し、源頼朝が武家政権を開いた歴史の街・鎌倉。三方を緑豊かな山に囲まれ、南は相模湾に開けた天然の要害の地には、鶴岡八幡宮や高徳院の高徳院大仏、長谷寺、円覚寺など名だたる古刹・寺社が点在しています。江ノ電（江ノ島電鉄）が海沿いの住宅街を縫うように走り、七里ヶ浜や由比ヶ浜の海岸線からは江の島と富士山を望む絶景が広がります。歴史散歩と洗練されたコーストカルチャーが見事に融合した、首都圏屈指の憧れリゾートエリアです。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            鎌倉滞在の魅力は、朝夕の静けさの中で古都の風情を満喫できる宿泊体験にあります。観光客で賑わう日中とは打って変わって、早朝の鶴岡八幡宮や海岸沿いの散歩は宿泊者だけが味わえる特別な時間。夕食には相模湾で揚がった名物の生しらすや地魚、みずみずしい鎌倉野菜、葉山牛などを取り入れたイタリアンやフレンチ、本格日本料理が楽しめます。神奈川県鎌倉市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのデザインホテルや海沿いリゾートへお得に宿泊でき、記念日や週末の贅沢エスケープが叶います。
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
                  <td className="p-3 font-bold text-amber-900">鎌倉プリンスホテル</td>
                  <td className="p-3 font-bold">★ 4.37</td>
                  <td className="p-3 text-stone-600">七里ヶ浜の高台に建つ全室オーシャンビュー！相模湾と江の島、雄大な富士山を望む絶景リゾート</td>
                  <td className="p-3 text-stone-600">最高峰の格式・贅沢ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ＨＯＴＥＬ　ＡＯ　ＫＡＭＡＫＵＲＡ</td>
                  <td className="p-3 font-bold">★ 4.89</td>
                  <td className="p-3 text-stone-600">腰越の海を目前にする洗練のデザイナーズ！名店「松原庵」の本格蕎麦料理と美酒に酔いしれる</td>
                  <td className="p-3 text-stone-600">抜群の立地・名湯満喫</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ホテルメトロポリタン鎌倉</td>
                  <td className="p-3 font-bold">★ 4.69</td>
                  <td className="p-3 text-stone-600">若宮大路沿いに佇む洗練の和モダンホテル！鶴岡八幡宮の参道を望み、鎌倉散策の拠点に最高</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1679/1679.jpg"
                alt="鎌倉プリンスホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.37（口コミ 1801件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県鎌倉市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  鎌倉プリンスホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  七里ヶ浜の高台に建つ全室オーシャンビュー！相模湾と江の島、雄大な富士山を望む絶景リゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  鎌倉プリンスホテル —— 海と空が広がるパノラマビュー。七里ヶ浜の風を感じながら過ごす優雅なリゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 客室の窓一面に広がる七里ヶ浜・相模湾と江の島のパノラマ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">全客室がオーシャンビュー。波打ち際のサーファーや美しい夕焼け、遠くに浮かぶ富士山を眺めながらリゾート時間を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 江ノ電「七里ヶ浜駅」から斜行エレベーターですぐのアクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海沿いの国道134号線から少し上がった高台。駅や海へのアクセスがスムーズで、海辺のカフェ巡りにも最適です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 相模湾の海の幸と鎌倉野菜を取り入れた本格フレンチ＆和食
                    </h5>
                    <p className="text-stone-600 leading-relaxed">絶景を望むレストラン「ル・トリアノン」でのフレンチコースや鉄板焼き。海を眺めながら優雅なディナーや朝食を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.37点、口コミ2600件超。「部屋からの七里ヶ浜と江の島の景色が本当に素晴らしい」「夕日が富士山の向こうに沈むグラデーションに感動した」とリゾート感満載。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 鎌倉市七里ヶ浜東1-2-18</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥12,576〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>1679</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D1679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】鎌倉プリンスホテル の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/182175/182175.jpg"
                alt="ＨＯＴＥＬ　ＡＯ　ＫＡＭＡＫＵＲＡ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.89（口コミ 68件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県鎌倉市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ＨＯＴＥＬ　ＡＯ　ＫＡＭＡＫＵＲＡ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  腰越の海を目前にする洗練のデザイナーズ！名店「松原庵」の本格蕎麦料理と美酒に酔いしれる
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  HOTEL AO KAMAKURA —— 青く澄む海と大人の隠れ家。腰越の潮風に抱かれ、蕎麦と厳選ワインを味わう美食宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 腰越海岸の目の前に佇むモダンで洗練された建築デザイン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">潮風を感じる開放的なテラスや中庭。シンプルかつ上質なインテリアが落ち着きと特別感を醸し出します。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鎌倉屈指の蕎麦の名店「松原庵」が手がける美食ダイニング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">毎朝手打ちされる香り高い蕎麦と、地魚や鎌倉野菜を活かした逸品料理。厳選された日本酒やナチュールワインとのペアリングが絶品です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ゆったりとリラックスできる上質な客室空間とアメニティ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">畳敷きのモダン和室や海を望むテラス付きルーム。随所にこだわりが散りばめられ、心地よい大人のエスケープを楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.89点、口コミ極めて高評価。「松原庵のお料理とお蕎麦がとにかく絶品」「お部屋の雰囲気、スタッフのホスピタリティ、海の近さすべてが完璧」と大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 鎌倉市腰越 3-1-7</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥15,150〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>182175</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D182175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ＨＯＴＥＬ　ＡＯ　ＫＡＭＡＫＵＲＡ の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/177689/177689.jpg"
                alt="ホテルメトロポリタン鎌倉"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.69（口コミ 1577件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">神奈川県鎌倉市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルメトロポリタン鎌倉
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  若宮大路沿いに佇む洗練の和モダンホテル！鶴岡八幡宮の参道を望み、鎌倉散策の拠点に最高
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ホテルメトロポリタン 鎌倉 —— 古都の風情と現代の快適性が融合。鶴岡八幡宮まで徒歩数分の極上ロケーション
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 若宮大路に面し、JR鎌倉駅東口から徒歩2分の抜群の立地
                    </h5>
                    <p className="text-stone-600 leading-relaxed">鶴岡八幡宮や小町通りへ徒歩すぐ。朝一番の静かな参拝や夜の落ち着いた鎌倉の街並みをゆったりと楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 中庭の緑を望む吹き抜けロビーと全室バストイレ別の快適客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">縁側をイメージした小上がりや大きな窓。木の温もりあふれる和モダン空間で、旅の疲れを心地よく癒やせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 「Café&Meal MUJI」での地元食材を活かした朝食
                    </h5>
                    <p className="text-stone-600 leading-relaxed">鎌倉野菜や湘南しらす、手作りのお惣菜を取り入れた彩り豊かな朝食。体に優しい味わいで清々しい一日が始まります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.69点、口コミ1300件超。「駅近で鶴岡八幡宮の参拝に便利すぎる」「お部屋がおしゃれで清潔感があり、スタッフの気配りも素晴らしい」とリピーター多数。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>神奈川県 鎌倉市小町1-8-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥13,230〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>177689</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D177689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ホテルメトロポリタン鎌倉 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 鎌倉・湘南・鶴岡八幡宮＆江ノ電沿線観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                鶴岡八幡宮参拝と若宮大路・段葛（だんかずら）の散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                鎌倉武士の守護神として信仰を集めた鎌倉の象徴。春には段葛の桜のトンネルが見事です。参道沿いには小町通りのグルメやスイーツ店が並びます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                江ノ電に乗って巡る極楽寺・長谷寺・鎌倉大仏
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                緑のトンネルや海沿いをコトコト走るレトロな江ノ電。紫陽花で名高い長谷寺や、高さ11m余の高徳院国宝大仏など見どころが凝縮しています。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                七里ヶ浜海岸のカフェテラスと江の島サンセット
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                「パシフィック ドライブイン」や「bills」など人気カフェが並ぶ七里ヶ浜。富士山と江の島を茜色に染める夕景は湘南随一の絶景です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              神奈川県鎌倉市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「神奈川県鎌倉市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で鎌倉市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 東京・横浜からJR横須賀線・湘南新宿ラインですぐ
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                東京駅からJR横須賀線で鎌倉駅まで約55分、横浜駅からは約25分。3年間の有効期間内で、週末のリフレッシュ旅や紫陽花・紅葉シーズンに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                鎌倉プリンスホテル、HOTEL AO KAMAKURA、ホテルメトロポリタン鎌倉などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-shirahama-onsen-ocean-adventure-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 南紀白浜温泉 白良浜オーシャンビュー＆アドベンチャーワールド特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-nozawa-onsen-sotoyu-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 野沢温泉 十三の外湯めぐり＆源泉麻釜・信州郷土料理特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
