import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【函館ひとり旅・美食ご褒美泊】朝食バイキング全国1位争い・インフィニティ天空温泉・赤レンガ倉庫！港町で癒やされる極上ホテル 厳選3選',
  description: '「日本一の朝食バイキングでいくら盛り放題を堪能したい」「最上階の露天風呂から函館山と夜景を見下ろしながら静かに過ごしたい」。大人ソロトラベラーへ。150種超のプレミアム朝食と天空露天風呂「スパ・マリーナ」を誇る「センチュリーマリーナ函館」、貸切風呂と名物海鮮丼の最高峰「ラビスタ函館ベイANNEX」、大正ロマン薫る湯の川温泉の高級宿「HAKODATE 海峡の風」を徹底特集。',
  keywords: '函館 一人旅 ホテル 朝食,センチュリーマリーナ函館 宿泊,ラビスタ函館ベイ ANNEX 一人,函館 温泉 ホテル いくら,函館ひとり旅 ご褒美',
  openGraph: {
    title: '【函館ひとり旅・美食ご褒美泊】朝食バイキング全国1位争い・インフィニティ天空温泉・赤レンガ倉庫！港町で癒やされる極上ホテル 厳選3選',
    description: '「日本一の朝食バイキングでいくら盛り放題を堪能したい」「最上階の露天風呂から函館山と夜景を見下ろしながら静かに過ごしたい」。大人ソロトラベラーへ。150種超のプレミアム朝食と天空露天風呂「スパ・マリーナ」を誇る「センチュリーマリーナ函館」、貸切風呂と名物海鮮丼の最高峰「ラビスタ函館ベイANNEX」、大正ロマン薫る湯の川温泉の高級宿「HAKODATE 海峡の風」を徹底特集。',
    url: 'https://croud-travel.pages.dev/hakodate-solo-retreat-breakfast-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【函館ひとり旅・美食ご褒美泊】朝食バイキング全国1位争い・インフィニティ天空温泉・赤レンガ倉庫！港町で癒やされる極上ホテル 厳選3選',
    description: '「日本一の朝食バイキングでいくら盛り放題を堪能したい」「最上階の露天風呂から函館山と夜景を見下ろしながら静かに過ごしたい」。大人ソロトラベラーへ。150種超のプレミアム朝食と天空露天風呂「スパ・マリーナ」を誇る「センチュリーマリーナ函館」、貸切風呂と名物海鮮丼の最高峰「ラビスタ函館ベイANNEX」、大正ロマン薫る湯の川温泉の高級宿「HAKODATE 海峡の風」を徹底特集。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・出張調査班',
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
    datePublished: '2026-09-12T15:30:00+09:00',
    dateModified: '2026-09-12T15:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/hakodate-solo-retreat-breakfast-onsen-stay',
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
        <span className="text-stone-700 font-medium">函館・朝食いくら＆展望温泉おこもり特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【函館ひとり旅・美食ご褒美泊】朝食バイキング全国1位争い・インフィニティ天空温泉・赤レンガ倉庫！港町で癒やされる極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>函館・朝食いくら＆展望温泉おこもり特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【函館ひとり旅・美食ご褒美泊】朝食バイキング全国1位争い・インフィニティ天空温泉・赤レンガ倉庫！港町で癒やされる極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          「日本一の朝食バイキングでいくら盛り放題を堪能したい」「最上階の露天風呂から函館山と夜景を見下ろしながら静かに過ごしたい」。大人ソロトラベラーへ。150種超のプレミアム朝食と天空露天風呂「スパ・マリーナ」を誇る「センチュリーマリーナ函館」、貸切風呂と名物海鮮丼の最高峰「ラビスタ函館ベイANNEX」、大正ロマン薫る湯の川温泉の高級宿「HAKODATE 海峡の風」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            夜霧に浮かぶ函館山のシルエットと、レンガ造りの波止場に灯るガス灯——いくら・ウニ・活イカの美食と天空温泉に抱かれる「函館おひとりさま極上リトリート」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            異国情緒漂う元町の洋館群や八幡坂、津軽海峡に抱かれた美しい扇状の地形、そして「世界三大夜景」と称される函館山からの大パノラマ。函館は、大人がひとりで歩くのにこれ以上なく情緒あふれる港町です。そして全国の旅人が熱い視線を注ぐのが、全国屈指の超激戦区として名高い「函館のホテル朝食バイキング」。新鮮ないくらを好きなだけご飯に乗せ、甘エビやホタテ、サーモンを山盛りにする贅沢な朝の食体験は、函館滞在の最高のハイライトです。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            さらに近年は、最上階に函館港や函館山を一望するインフィニティ露天風呂を備えた最新ラグジュアリーホテルが続々と誕生し、おこもりステイの満足度が飛躍的に進化しています。潮風に吹かれながら温まり、夜はベイエリアのバーで地ビールやワインを嗜む至福。今回は函館の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/168681/168681.jpg"
                alt="センチュリーマリーナ函館"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.66 点（3879件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  朝食バイキングの頂点を極める！150種超の豪華メニューと最上階15階インフィニティ天空露天風呂「スパ・マリーナ」
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  センチュリーマリーナ函館 —— 港町にそびえるモダンリゾート。いくら・海鮮・焼き立てパンとアロマバー完備の至高ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階15階に広がる天空露天風呂「インフィニティ スパステラ」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">湯船と夜空が一体化する圧倒的パノラマ。函館山や夜の港の光を眺めながら極上の温泉時間を満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全国屈指の評価を誇る豪華朝食ビュッフェ「YUKIKARI」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">いくら盛り放題の海鮮丼はもちろん、熟成肉や旬野菜の温野菜、パティシエ特製スイーツまで圧巻の品揃えです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">自分好みの枕とアロマを選べる「ピローバー＆アロマバー」サービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">13種類の枕と天然アロマオイルを客室へ。出張や旅の疲れを心地よい眠りへと誘います。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.66点。「朝食のレベルが異次元でいくらも海鮮も最高でした」「最上階の露天風呂からの函館山の眺望に感動し、一人旅のご褒美にぴったりでした」と絶賛の嵐。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 北海道函館市大手町22-13</p>
                  <p>🚆 ＪＲ　函館駅より徒歩にて約５分　　函館空港より車にて約２０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D168681"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/184396/184396.jpg"
                alt="ラビスタ函館ベイＡＮＮＥＸ（共立リゾート）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.65 点（365件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  金森赤レンガ倉庫すぐ！ラビスタ函館ベイのプレミアム別館・全室天然温泉付き客室＆3つの無料貸切風呂
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ラビスタ函館ベイANNEX —— 贅を尽くした大人の隠れ家。世界遺産級の夜景とプライベートに楽しむ天然温泉
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宿泊者専用の3つの趣異なる無料貸切風呂（陶器・檜・煉瓦）を完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">予約不要で空いていれば何度でも利用可能。誰にも気兼ねなく名湯に浸かる贅沢な時間が流れます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">金森赤レンガ倉庫まで徒歩すぐ！夜のライトアップ散策に最高の好立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ガス灯揺れる波止場を夕涼み散策。観光の合間にすぐ客室へ戻れる快適なロケーションです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「朝から自分好みの海鮮丼」と北海道産和牛のしゃぶしゃぶ朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">厳選された北海道の味覚を優雅な空間で堪能。一人でも落ち着いて食事を楽しめる設計です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.65点。「貸切風呂が無料で利用でき、お部屋もクラシカルで落ち着けました」「赤レンガ倉庫も目の前で立地最高、朝食も大満足でした」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 北海道函館市大手町5-23</p>
                  <p>🚆 JR函館本線【函館駅】から市内循環バス「はこだてビール前」下車、徒歩約2分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D184396"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/153116/153116.jpg"
                alt="ＨＡＫＯＤＡＴＥ　海峡の風"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.38 点（477件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  名湯・湯の川温泉の海辺に佇む大正ロマンの館！全室63㎡以上の広大な客室と歴史薫るバイキング
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  HAKODATE 海峡の風 —— 津軽海峡の風を感じるモダン温泉宿。大正・昭和のレトロ美と厳選された海の幸
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室がゆとりある63㎡以上の広々空間！展望風呂付き客室も充実</p>
                    <p className="text-xs text-stone-600 leading-relaxed">広大なリビングとベッドルーム。一人旅でも圧倒的な開放感とプライベートリゾート感を味わえます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">歴史ある湯の川温泉の源泉を引湯した趣豊かな大浴場</p>
                    <p className="text-xs text-stone-600 leading-relaxed">肌を滑らかに包み込む弱食塩泉。温まり効果抜群のお湯で心身の凝りをじっくりと解きほぐします。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">函館朝市や近海から届く新鮮魚介を炉端焼きや刺身で味わう贅沢ダイニング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">職人が目の前で仕上げる絶品料理。ワインや地酒とともに大人の美食時間を堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.38点。「部屋がとにかく広くて贅沢な気分になれました」「お風呂も食事も素晴らしく、静かに一人でリフレッシュするのに最高でした」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 北海道函館市湯川町1-18-15</p>
                  <p>🚆 函館空港よりお車にて約１０分。ＪＲ函館駅よりお車にて約１５分。市電湯の川温泉駅より徒歩にて約５分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D153116"
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
              函館の朝市と夜景を一人旅で最高に楽しむモデルプラン
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 早朝の「函館朝市」で活イカ釣りとイカソーメン体験
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                水槽で泳ぐイカを自分で釣り上げ、その場で捌いてもらう名物体験。透明でコリコリとした歯ごたえと肝醤油の旨さは函館ならでは。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 夕暮れ時の「八幡坂」から港を見下ろし、函館山ロープウェイへ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                海へとまっすぐ伸びる石畳の坂道。山頂からのトワイライト夜景（日没後30分が一番綺麗）を目に焼き付ける黄金ルート。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夜はベイエリアのバーで函館ワインとチーズを傾ける
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                赤レンガ倉庫のライトアップを眺めながら静かにグラスを傾ける時間。港町のロマンに浸る大人の夜。
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
                <span>函館空港から市内ホテルへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                函館空港から函館駅・ベイエリア行きシャトルバスが運行しており約20〜25分で直結。湯の川温泉エリアへはタクシーで約8分と全国屈指の近さです。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で函館山夜景を見に行くのは混雑しますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ロープウェイは夕暮れ時混み合いますが、山頂展望台は広く一人旅の旅行者も多いため、気兼ねなく世界最高峰の夜景を鑑賞できます。
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
