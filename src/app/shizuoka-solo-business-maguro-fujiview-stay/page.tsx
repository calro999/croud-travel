import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【静岡出張＆富士山ひとり旅】新幹線直結・清水港まぐろ・静岡茶ラウンジ！名峰の絶景に癒やされる極上ホテル 厳選3選',
  description: '東海道新幹線ひかり停車・静岡県の県庁所在地！「JR静岡駅北口広場直結の格式あるランドマーク」を誇る「ホテルアソシア静岡」、南口徒歩1分で高層階から富士山や駿河湾を一望する「ホテルグランヒルズ静岡」、創業1916年で静岡グルメバイキングが自慢の「中島屋グランドホテル」を徹底特集。',
  keywords: '静岡 出張 ホテル おすすめ,静岡 一人旅 ホテル,ホテルアソシア静岡 宿泊,ホテルグランヒルズ静岡 富士山ビュー,静岡駅 まぐろ ホテル',
  openGraph: {
    title: '【静岡出張＆富士山ひとり旅】新幹線直結・清水港まぐろ・静岡茶ラウンジ！名峰の絶景に癒やされる極上ホテル 厳選3選',
    description: '東海道新幹線ひかり停車・静岡県の県庁所在地！「JR静岡駅北口広場直結の格式あるランドマーク」を誇る「ホテルアソシア静岡」、南口徒歩1分で高層階から富士山や駿河湾を一望する「ホテルグランヒルズ静岡」、創業1916年で静岡グルメバイキングが自慢の「中島屋グランドホテル」を徹底特集。',
    url: 'https://croud-travel.pages.dev/shizuoka-solo-business-maguro-fujiview-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【静岡出張＆富士山ひとり旅】新幹線直結・清水港まぐろ・静岡茶ラウンジ！名峰の絶景に癒やされる極上ホテル 厳選3選',
    description: '東海道新幹線ひかり停車・静岡県の県庁所在地！「JR静岡駅北口広場直結の格式あるランドマーク」を誇る「ホテルアソシア静岡」、南口徒歩1分で高層階から富士山や駿河湾を一望する「ホテルグランヒルズ静岡」、創業1916年で静岡グルメバイキングが自慢の「中島屋グランドホテル」を徹底特集。',
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
    datePublished: '2026-09-11T12:30:00+09:00',
    dateModified: '2026-09-11T12:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/shizuoka-solo-business-maguro-fujiview-stay',
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
        <span className="text-stone-700 font-medium">静岡・出張＆富士山ビュー・清水港まぐろ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【静岡出張＆富士山ひとり旅】新幹線直結・清水港まぐろ・静岡茶ラウンジ！名峰の絶景に癒やされる極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>静岡・出張＆富士山ビュー・清水港まぐろ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【静岡出張＆富士山ひとり旅】新幹線直結・清水港まぐろ・静岡茶ラウンジ！名峰の絶景に癒やされる極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          東海道新幹線ひかり停車・静岡県の県庁所在地！「JR静岡駅北口広場直結の格式あるランドマーク」を誇る「ホテルアソシア静岡」、南口徒歩1分で高層階から富士山や駿河湾を一望する「ホテルグランヒルズ静岡」、創業1916年で静岡グルメバイキングが自慢の「中島屋グランドホテル」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            気高き富士の雪嶺と駿河湾の碧い海、清水港から届く極上天然まぐろ——徳川家康公が愛した駿府の地で仕事と心を整える「静岡スマートステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東海道新幹線「ひかり」で東京から約1時間、名古屋から約55分。静岡県の政治・経済の中枢であり、徳川家康が大御所として晩年を過ごした歴史ある城下町・静岡。日中の商談や打ち合わせを終えた後の楽しみは、日本一のまぐろ水揚げ量を誇る清水港直送の「南まぐろ（ミナミマグロ）」のお造りや、静岡おでん街の赤提灯、そして名産・静岡茶の香り高い一杯です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな静岡出張を快適で豊かな時間に変えてくれるのが、新幹線改札から濡れずにチェックインできる駅直結ホテルや、高層階の客室から雄大な富士山を仰ぎ見るパノラマ宿です。移動のストレスをゼロにし、上質な客室でテレワークをこなし、夜は地酒「磯自慢」「初亀」に舌鼓。今回は出張・ひとり旅に最適な静岡駅周辺の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7277/7277.jpg"
                alt="ホテルアソシア静岡"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.42 点（3493件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR静岡駅北口広場直結！新幹線改札から徒歩1分の圧倒的利便性とJR東海ホテルズならではの格式美
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルアソシア静岡 —— 静岡駅前のフラッグシップ。上質なしつらえと和洋中の一流レストランが揃う安心ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札から駅北口を出てすぐ目の前！雨の日も傘不要のスムーズチェックイン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">荷物が多い出張でも移動のストレスがゼロ。チェックイン前後の荷物預けもスムーズでフットワーク抜群です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">シモンズ社製ベッドと加湿空気清浄機を完備したゆとりある客室空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">落ち着いた色調のインテリアと広めのワークデスク。高速Wi-Fi完備で客室でのテレワークも快適にこなせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">シェフが目の前で作るオムレツや静岡名物が並ぶ朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">黒はんぺんやしらす、桜えびなど静岡の恵みを朝から堪能。活力をチャージして一日のスタートを切れます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.42点。「駅直結で立地最高、スタッフの接客も洗練されていて安心して泊まれました」「お部屋も清潔でベッドの寝心地が良く出張の定宿です」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 静岡県静岡市葵区黒金町56</p>
                  <p>🚆 ＪＲ静岡駅北口より徒歩１分　国道１号線沿い　東名静岡ＩＣより１５分 新東名新静岡ＩＣより約３０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7277"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5150/5150.jpg"
                alt="ホテルグランヒルズ静岡（ＢＢＨホテルグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.34 点（4114件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR静岡駅南口徒歩1分！全室18階以上の超高層タワーから富士山や駿河湾を一望するパノラマホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルグランヒルズ静岡 —— 空に浮かぶ高層シティホテル。富士山ビュー客室と最上階レストランでの贅沢なひととき
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室が18階〜25階の高層階！窓から広がる富士山や伊豆半島、夜景の絶景</p>
                    <p className="text-xs text-stone-600 leading-relaxed">遮るもののない大迫力のパノラマビュー。朝陽に照らされる富士山を眺めながら優雅な目覚めを迎えられます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">静岡駅南口からペデストリアンデッキ直結で雨に濡れずにアクセス可能</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大型複合ビル「サウスポット静岡」内に位置し、静かで落ち着いた大人の雰囲気が漂います。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">開放感あふれるダイニングでいただく地元食材を活かした朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">静岡県産のお米や新鮮野菜、海の幸を贅沢に取り入れたメニュー。優雅な朝の時間を提供します。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.34点。「高層階の部屋から見えた富士山が圧巻でした」「駅近で部屋も広く、出張利用でしたがとても贅沢な気分になれました」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 静岡県静岡市駿河区南町18-1</p>
                  <p>🚆 ＪＲ静岡駅南口徒歩１分。東名静岡ＩＣより車にて約１０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5150"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/20611/20611.jpg"
                alt="中島屋グランドホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.12 点（2623件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  創業1916年・駿府の老舗グランドホテル！静岡駅北口徒歩5分・呉服町名店街や静岡おでん街すぐ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  中島屋グランドホテル —— 伝統が息づくおもてなし。四川料理の名店と名物「まぐろ丼＆静岡おでん」朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">静岡のメインストリート呉服町・青葉横丁（静岡おでん街）へ徒歩すぐの好立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜のグルメ探索に最高のロケーション。老舗の味や地酒めぐりを心ゆくまで満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">創業以来の歴史を誇る本格中華や和食レストランを備えた食のホテル</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地元財界人にも愛される名門ダイニング。ひとりでも気兼ねなく上質なディナーを味わえます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">朝食バイキングで味わう清水港直送まぐろの漬け丼と熱々の静岡おでん</p>
                    <p className="text-xs text-stone-600 leading-relaxed">名物黒はんぺんの出汁粉が香る静岡おでんや新鮮まぐろ。朝からご当地グルメを堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.12点。「朝食のまぐろ丼とおでんがとても美味しく、スタッフの方も親切でした」「繁華街に近くて夜の食事が楽しかった」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 静岡県静岡市葵区紺屋町3-10</p>
                  <p>🚆 ＪＲ静岡駅より徒歩５分／東名静岡ＩＣより約１５分　</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D20611"
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
              静岡の二大名物「南まぐろ＆静岡おでん」を一人で楽しむハシゴ酒術
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 青葉横丁または青葉おでん街の赤提灯をくぐる
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                黒い出汁で煮込まれた牛すじや黒はんぺんに、青のりと魚の削り粉（ダシ粉）をたっぷりかけて。駄菓子屋発祥の温かい郷土の味です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 清水港直送の南まぐろ（ミナミマグロ）の赤身・中トロを地酒と
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                本マグロと並ぶ高級種。ねっとりとした濃厚な旨味と上品な脂の甘みを、静岡の辛口純米酒「初亀」が心地よく引き立てます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 駿府城公園のお堀端を朝散歩して家康公の銅像を仰ぐ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ホテルから徒歩10分程度。緑豊かな城址公園の澄んだ空気を吸いながら、歴史ロマンに思いを馳せる朝のひととき。
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
                <span>静岡駅から富士山は見えますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                駅構内からは見えにくいですが、ホテルグランヒルズ静岡など南口・北口の高層階客室や展望フロアからは天気が良ければ美しい富士山をはっきりと望むことができます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で入りやすい海鮮居酒屋やおでん屋さんはありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                静岡駅構内の「アスティ静岡」や青葉横丁・呉服町周辺の店舗はカウンター席中心の店が多く、出張の一人客が日常的に多数利用しています。
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
