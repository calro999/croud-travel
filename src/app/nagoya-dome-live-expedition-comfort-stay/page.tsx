import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【バンテリンドーム・Zepp名古屋遠征泊】名駅直結＆トレインビュー！終演後もスムーズに休める快適拠点ホテル 厳選3選',
  description: 'バンテリンドーム ナゴヤ（ナゴヤドーム）、Zepp Nagoya、Aichi Sky Expo（愛知県国際展示場）へのコンサート・ライブ・舞台遠征へ！地上31階以上からの絶景「名古屋プリンスホテル スカイタワー」、名古屋駅直結で新幹線改札から直行できる「名鉄グランドホテル」、皇室も愛する歴史と格式のクラシック宿「名古屋観光ホテル」を徹底比較。',
  keywords: 'バンテリンドーム 遠征 ホテル,名古屋 ライブ ホテル おすすめ,名古屋プリンスホテル スカイタワー 遠征,名駅 直結 ホテル,Zepp Nagoya 宿泊',
  openGraph: {
    title: '【バンテリンドーム・Zepp名古屋遠征泊】名駅直結＆トレインビュー！終演後もスムーズに休める快適拠点ホテル 厳選3選',
    description: 'バンテリンドーム ナゴヤ（ナゴヤドーム）、Zepp Nagoya、Aichi Sky Expo（愛知県国際展示場）へのコンサート・ライブ・舞台遠征へ！地上31階以上からの絶景「名古屋プリンスホテル スカイタワー」、名古屋駅直結で新幹線改札から直行できる「名鉄グランドホテル」、皇室も愛する歴史と格式のクラシック宿「名古屋観光ホテル」を徹底比較。',
    url: 'https://croud-travel.pages.dev/nagoya-dome-live-expedition-comfort-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【バンテリンドーム・Zepp名古屋遠征泊】名駅直結＆トレインビュー！終演後もスムーズに休める快適拠点ホテル 厳選3選',
    description: 'バンテリンドーム ナゴヤ（ナゴヤドーム）、Zepp Nagoya、Aichi Sky Expo（愛知県国際展示場）へのコンサート・ライブ・舞台遠征へ！地上31階以上からの絶景「名古屋プリンスホテル スカイタワー」、名古屋駅直結で新幹線改札から直行できる「名鉄グランドホテル」、皇室も愛する歴史と格式のクラシック宿「名古屋観光ホテル」を徹底比較。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・ホテル調査班',
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
    datePublished: '2026-09-11T02:30:00+09:00',
    dateModified: '2026-09-11T02:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/nagoya-dome-live-expedition-comfort-stay',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium">名古屋・ドーム遠征＆高層パノラマ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【バンテリンドーム・Zepp名古屋遠征泊】名駅直結＆トレインビュー！終演後もスムーズに休める快適拠点ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>名古屋・ドーム遠征＆高層パノラマ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【バンテリンドーム・Zepp名古屋遠征泊】名駅直結＆トレインビュー！終演後もスムーズに休める快適拠点ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          バンテリンドーム ナゴヤ（ナゴヤドーム）、Zepp Nagoya、Aichi Sky Expo（愛知県国際展示場）へのコンサート・ライブ・舞台遠征へ！地上31階以上からの絶景「名古屋プリンスホテル スカイタワー」、名古屋駅直結で新幹線改札から直行できる「名鉄グランドホテル」、皇室も愛する歴史と格式のクラシック宿「名古屋観光ホテル」を徹底比較。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            夜空に煌めく名駅のビル群と、トレインビューのパノラマ——終演後の大混雑を避けて優雅に余韻に浸る「名古屋スマート遠征」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            5大ドームツアーの重要拠点である「バンテリンドーム ナゴヤ」や、数々の熱いライブが繰り広げられる「Zepp Nagoya」。名古屋への遠征は新幹線のアクセスも良く大人気ですが、最大の課題となるのが「終演後の地下鉄東山線・名城線の大混雑」です。約5万人の観客が一斉に駅へ殺到するため、改札口に入るまでに何十分も待たされることも珍しくありません。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            だからこそ、名古屋遠征では「名古屋駅周辺（名駅エリア）」または「会場へのアクセスが良く、終演後に荷物をすぐピックアップできるホテル」を抑えるのが鉄則です。新幹線で到着してすぐに荷物を預け、ライブ後は駅近の快適な客室でペンライトやうちわを広げて余韻に浸る。今回は遠征の満足度を最高レベルに引き上げる、名駅・伏見エリアの厳選3宿をご紹介します。
          </p>
        </section>

        {/* 厳選ホテルリスト */}
        <div className="space-y-10">
          <div className="border-l-4 border-amber-800 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
              編集部が厳選！おすすめの極上宿・ホテル詳細
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベルの最新APIデータを反映。口コミ高評価＆こだわり設備を徹底チェック
            </p>
          </div>

          
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="https://img.travel.rakuten.co.jp/share/HOTEL/163007/163007.jpg"
                alt="名古屋プリンスホテル　スカイタワー"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.62 点（1467件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  全客室が地上31〜36階の高層階！Zepp Nagoya徒歩すぐ・あおなみ線ささしまライブ駅直結の天空パノラマホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  名古屋プリンスホテル スカイタワー —— 地上140mからのトレインビューと摩天楼。Zepp Nagoya遠征の最高峰拠点
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">Zepp Nagoya（ゼップ名古屋）から徒歩わずか数分の圧倒的近さ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ライブ前後にすぐ部屋へ戻れる夢のロケーション。グッズ販売待機や着替えの拠点としても完璧です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">眼下に無数の列車が行き交う大迫力の「トレインビュー」と夜景パノラマ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新幹線、JR各線、近鉄、あおなみ線を見下ろす特等席。遠征の高揚感をそのままに夜景を満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広々とした客室設計と天井高の開放的なバスルーム</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大型スーツケースも余裕で広げられるゆとり。清潔なバスタブでライブの立ちっぱなしの脚を心地よく癒やせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.62点。「Zeppのライブ参戦で利用しました。ライブ後すぐに部屋に戻れて、窓からの夜景が綺麗すぎて感動しました」「お部屋が広くて綺麗で、遠征の疲れが完全に取れました」とライブ遠征組から絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 愛知県名古屋市中村区平池町グローバルゲート31階</p>
                  <p>🚆 名古屋駅からあおなみ線で1駅3分の「ささしまライブ」直結。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D163007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2046/2046.jpg"
                alt="名古屋観光ホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.55 点（4404件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  中部圏随一の伝統と格式！1936年開業の老舗グランドホテルで味わう最高峰のおもてなしと洗練された客室
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  名古屋観光ホテル —— 地下鉄伏見駅徒歩2分。名駅と栄の中間に位置し、ドームへもアクセス抜群の上質クラシックホテル
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名古屋駅と栄の間に位置する伏見エリアで、バンテリンドームへ地下鉄で直行可能</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地下鉄東山線・鶴舞線「伏見駅」からすぐ。ドーム方面へのアクセスが良く、終演後の混雑分散にも最適です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">歴史ある名門ホテルならではの重厚感と細やかで行き届いたホスピタリティ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">静けさと品格に満ちたロビー空間。遠征先でも騒がしさを忘れ、落ち着いた大人の時間を過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">上質なリネンと深めのバスタブ、ブルガリなどの厳選アメニティ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ふかふかのベッドが心地よい眠りをサポート。翌朝のチェックアウトまで優雅にリフレッシュできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.55点。「伝統あるホテルだけあってスタッフの方々の気配りが素晴らしく、安心して泊まれました」「ドーム遠征で利用しましたが、立地も良くとても静かで大満足です」と大好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 愛知県名古屋市中区錦1-19-30</p>
                  <p>🚆 名古屋駅よりタクシーで５分、名古屋駅より地下鉄 東山線 １駅目「伏見」よりすぐの徒歩２分、宿泊の方は駐車場「無料」</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2046"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2004/2004.jpg"
                alt="名鉄グランドホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.07 点（5991件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  名鉄名古屋駅・JR名古屋駅桜通口から直結！新幹線改札から雨に濡れずにチェックインできる抜群の機動力
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  名鉄グランドホテル —— 名古屋駅前の老舗シティホテル。遠征の荷物預けや新幹線乗り継ぎに最強のアクセス
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名鉄百貨店の上層階に位置し、駅直結で移動のストレスがゼロ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新幹線を降りたら地下街経由でそのままフロントへ。雨の日やキャリーケースを引いての移動も楽々です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名鉄バスセンター直結で空港リムジンバスや各地への高速バスも発着</p>
                    <p className="text-xs text-stone-600 leading-relaxed">中部国際空港（セントレア）からのアクセスも抜群。遠方からの飛行機遠征組にとってもこれ以上ない利便性です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">チェックイン前・後の荷物預かり対応で身軽にドームへ直行可能</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大きな荷物を預けてすぐに地下鉄でバンテリンドームへ。終演後も駅前ですぐ荷物をピックアップできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.07点。「何より駅直結で立地が最強。新幹線ギリギリまで部屋でゆっくりできました」「ライブ遠征の荷物が多くても移動が本当に楽でした」と利便性重視派に大人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 愛知県名古屋市中村区名駅1-2-4</p>
                  <p>🚆 ＪＲ名古屋駅より徒歩４分。　中部国際空港から名鉄特急で最短２８分。　名鉄名古屋駅下車　徒歩１分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            
        </div>

        {/* ガイド・ノウハウセクション */}
        <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <div className="inline-block bg-amber-500 text-stone-950 font-bold text-xs px-2.5 py-1 rounded-md">
              TIPS & GUIDE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              バンテリンドーム ナゴヤ遠征をスマートに乗り切る3つの極意
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 帰りは「大曽根駅」まで徒歩約15分歩いてJR中央線を使う
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                最寄りの地下鉄「ナゴヤドーム前矢田駅」は大混雑します。少し歩いて大曽根駅からJR中央線快速に乗れば、約12分で名古屋駅へスムーズに戻れます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 遠征メシは名駅地下街「エスカ」の名古屋めし
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ひつまぶし、味噌カツ、手羽先、台湾ラーメンなど、名古屋駅地下街には名店が密集。遠征の合間にご当地グルメを効率よく制覇できます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. ペンライトの予備電池と双眼鏡の事前点検
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ドーム規模の会場では5階席やスタンド上段になることも。防振双眼鏡や明るいレンズの双眼鏡、替えの単4電池は遠征前のマストアイテムです。
              </p>
            </div>
            
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 border-b border-stone-200 pb-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>遠征グッズ（うちわ・ペンライト）をホテルで受け取ることはできますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                事前に通販で購入したグッズをホテル気付で送付する場合、宿泊代表者氏名と宿泊日を明記しておけばフロントで預かってもらえるホテルがほとんどです（事前連絡推奨）。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>チェックアウト後に新幹線の時間まで荷物を預けられますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、ご紹介した3ホテルとも宿泊当日のチェックアウト後、新幹線の出発時刻まで無料でクロークにて荷物を預かってくれます。
              </p>
            </div>
            
          </div>
        </section>

        {/* 関連リンク・ナビゲーション */}
        <div className="text-center pt-8 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors"
          >
            ← クラウドトラベル トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
