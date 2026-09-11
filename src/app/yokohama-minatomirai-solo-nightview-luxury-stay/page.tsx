import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【横浜・みなとみらいひとり旅】大観覧車バルコニー・天空プール・Kアリーナ遠征！大人が心奪われる極上夜景ホテル 厳選3選',
  description: '「コスモクロックのイルミネーションを部屋のバルコニーから独り占めしたい」「KアリーナやぴあアリーナMMでのライブ終演後、ラグジュアリーな空間で優雅に余韻に浸りたい」。大人ソロトラベラーへ。みなとみらい唯一のバルコニー付き「横浜ベイホテル東急」、ウェルネスを極めた最新ライフスタイル「ウェスティンホテル横浜」、20階スカイプールと絶景ロビーを誇る「三井ガーデンホテル横浜みなとみらいプレミア」を徹底特集。',
  keywords: '横浜 みなとみらい 一人旅 ホテル,横浜 夜景 ホテル 一人,横浜ベイホテル東急 バルコニー,ウェスティンホテル横浜 宿泊,Kアリーナ 遠征 ホテル 横浜',
  openGraph: {
    title: '【横浜・みなとみらいひとり旅】大観覧車バルコニー・天空プール・Kアリーナ遠征！大人が心奪われる極上夜景ホテル 厳選3選',
    description: '「コスモクロックのイルミネーションを部屋のバルコニーから独り占めしたい」「KアリーナやぴあアリーナMMでのライブ終演後、ラグジュアリーな空間で優雅に余韻に浸りたい」。大人ソロトラベラーへ。みなとみらい唯一のバルコニー付き「横浜ベイホテル東急」、ウェルネスを極めた最新ライフスタイル「ウェスティンホテル横浜」、20階スカイプールと絶景ロビーを誇る「三井ガーデンホテル横浜みなとみらいプレミア」を徹底特集。',
    url: 'https://croud-travel.pages.dev/yokohama-minatomirai-solo-nightview-luxury-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【横浜・みなとみらいひとり旅】大観覧車バルコニー・天空プール・Kアリーナ遠征！大人が心奪われる極上夜景ホテル 厳選3選',
    description: '「コスモクロックのイルミネーションを部屋のバルコニーから独り占めしたい」「KアリーナやぴあアリーナMMでのライブ終演後、ラグジュアリーな空間で優雅に余韻に浸りたい」。大人ソロトラベラーへ。みなとみらい唯一のバルコニー付き「横浜ベイホテル東急」、ウェルネスを極めた最新ライフスタイル「ウェスティンホテル横浜」、20階スカイプールと絶景ロビーを誇る「三井ガーデンホテル横浜みなとみらいプレミア」を徹底特集。',
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
    datePublished: '2026-09-11T02:50:00+09:00',
    dateModified: '2026-09-11T02:50:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/yokohama-minatomirai-solo-nightview-luxury-stay',
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
        <span className="text-stone-700 font-medium">横浜・みなとみらい夜景＆ご褒美ステイ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【横浜・みなとみらいひとり旅】大観覧車バルコニー・天空プール・Kアリーナ遠征！大人が心奪われる極上夜景ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>横浜・みなとみらい夜景＆ご褒美ステイ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【横浜・みなとみらいひとり旅】大観覧車バルコニー・天空プール・Kアリーナ遠征！大人が心奪われる極上夜景ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          「コスモクロックのイルミネーションを部屋のバルコニーから独り占めしたい」「KアリーナやぴあアリーナMMでのライブ終演後、ラグジュアリーな空間で優雅に余韻に浸りたい」。大人ソロトラベラーへ。みなとみらい唯一のバルコニー付き「横浜ベイホテル東急」、ウェルネスを極めた最新ライフスタイル「ウェスティンホテル横浜」、20階スカイプールと絶景ロビーを誇る「三井ガーデンホテル横浜みなとみらいプレミア」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            夜空を染める大観覧車のグラデーションと、海風そよぐプライベートバルコニー——誰にも気兼ねせず港の輝きに抱かれる「横浜みなとみらい・至極の夜」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            都心からわずか30分でアクセスできる日本屈指のウォーターフロント都市・横浜みなとみらい。赤レンガ倉庫や山下公園、汽車道など、港町の歴史と未来的なスカイラインが交差する景観は、大人がひとり気ままに散策するのに最高のシチュエーションです。さらに近年はKアリーナ横浜やぴあアリーナMMをはじめとする最新アリーナが続々と誕生し、全国からライブやコンサート遠征に訪れる拠点としても圧倒的な人気を誇っています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな横浜ステイの真髄は、「客室から眺める夜景の美しさ」。大観覧車「コスモクロック21」が目の前で色を変える様をバルコニーから眺め、心地よい海風を感じながらグラスを傾ける時間。あるいは高層階の温水プールやサウナでリフレッシュし、最高級ベッドで眠りに就く贅沢。今回は、おひとりさまでも最高に優雅な時間を過ごせるみなとみらいの厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2003/2003.jpg"
                alt="横浜ベイホテル東急"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.63 点（10693件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  みなとみらい駅直結！大観覧車「コスモクロック21」を目の前に望むエリア唯一のプライベートバルコニー付きホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  横浜ベイホテル東急 —— クイーンズスクエア直結。海風を感じるバルコニーと「カフェ トスカ」の伝説的朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大観覧車が目の前に迫る圧巻の「バルコニー付き客室（パークビュー）」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">窓の外に出られる希少なバルコニー。遮るもののない大迫力の夜景を、潮風を感じながらお酒とともに楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">みなとみらい線「みなとみらい駅」から直結で雨の日も快適チェックイン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ショッピングモール「クイーンズスクエア」経由で濡れずにアクセス。Kアリーナやパシフィコ横浜へも徒歩すぐです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">吹き抜けのパームツリーが揺れる「カフェ トスカ」のプレミアム朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">シェフが目の前で作るふわとろオムレツやメゾンカイザーのクロワッサン。南国リゾート気分の贅沢なモーニングです。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.63点。「バルコニーからの大観覧車の夜景が信じられないほど綺麗で、一人で何時間も眺めていました」「お部屋も広くスタッフの気配りも完璧」とリピーター多数。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 神奈川県横浜市西区みなとみらい2-3-7</p>
                  <p>🚆 みなとみらい線みなとみらい駅徒歩約１分／ＪＲ・市営地下鉄線桜木町駅徒歩１０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2003"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/183942/183942.jpg"
                alt="ウェスティンホテル横浜"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.7 点（140件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  国内屈指のウェルネスホテル！「ヘブンリーベッド」と総合スパ・屋内温水プールで心身を再生する最先端ラグジュアリー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ウェスティンホテル横浜 —— みなとみらい21地区の最新ランドマーク。天空のクラブラウンジと極上のスリープ体験
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室に最新仕様の「ヘブンリーベッド」と広々とした独立バスタブを完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">雲の上の寝心地で翌朝の目覚めが劇的に変化。上質な香りと遮音性の高い客室で深い眠りへと誘われます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">自然光が差し込む屋内温水プールと最新鋭マシンのフィットネススタジオ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">プールサイドのデイベッドで優雅な読書。スパやサウナも充実し、ホリスティックなリフレッシュが叶います。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階クラブラウンジでのアフタヌーンティー＆贅沢カクテルタイム</p>
                    <p className="text-xs text-stone-600 leading-relaxed">富士山や横浜の街並みを見渡すパノラマビュー。夕暮れのシャンパンとともに優雅なひとときを過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.70点。「ヘブンリーベッドの寝心地が最高で、プールやサウナも綺麗で大満足」「一人ステイケーションにこれ以上ない洗練された空間」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 神奈川県横浜市西区みなとみらい4-2-8</p>
                  <p>🚆 みなとみらい線「みなとみらい駅」から徒歩6分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D183942"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/184792/184792.jpg"
                alt="三井ガーデンホテル横浜みなとみらいプレミア"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.7 点（838件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  2023年開業！最上階20階ロビーに広がる絶景スカイプールと夜景を見下ろすモダンラグジュアリー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  三井ガーデンホテル横浜みなとみらいプレミア —— 横浜コネクトスクエア上層階。天空のオアシスと爽快な朝食ビュッフェ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階20階に広がる屋外・屋内スカイプールとジェットバス（スカイスパ）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">都会の摩天楼を見下ろしながら泳ぐ非日常体験。プールサイドのバーでカクテルを味わう優雅な休日が叶います。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室が21階以上の高層階！開放的な大きなピクチャーウィンドウ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">港のガントリークレーンやベイブリッジ、富士山方面まで見渡せるダイナミックな景観を客室から満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">「Salon de Parfait」やモダンイタリアンダイニングの贅沢な食体験</p>
                    <p className="text-xs text-stone-600 leading-relaxed">神奈川県産食材を活かした彩り豊かな料理。一人でも気兼ねなく楽しめる洗練されたオープンキッチン空間です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.70点。「20階ロビーやプールからの景色が圧巻！お部屋もピカピカでベッドも快適でした」「Kアリーナのライブ後に泊まりましたが最高でした」と大人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 神奈川県横浜市西区みなとみらい3-3-3</p>
                  <p>🚆 みなとみらい線「みなとみらい」駅 5番出口より徒歩約5分、JR根岸線「桜木町」駅より徒歩約10分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D184792"
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
              横浜みなとみらいの夜景とグルメを一人で味わい尽くす散策プラン
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 黄昏時の汽車道（きしゃみち）から赤レンガ倉庫へアーバンウォーキング
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                海の上を渡る遊歩道から眺めるみなとみらいのビル群。徐々に明かりが灯っていくマジックアワーは必見の絶景です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 野毛（のげ）のレトロな飲食街で一人ホルモン＆クラフトビール
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                みなとみらいのすぐ隣、桜木町駅西側の「野毛」は昭和レトロな大衆酒場街。カウンター席で地元民と触れ合いながらはしご酒が楽しめます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 深夜は客室でオリジナルカクテルを片手に大観覧車の消灯演出を待つ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                深夜0時に観覧車のライトアップが一瞬消灯する特別な瞬間。静寂に包まれる港の夜景を部屋から眺める至福。
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
                <span>Kアリーナ横浜やぴあアリーナMMへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ご紹介した3ホテルはいずれもみなとみらい中心部に位置し、各アリーナへ徒歩約8〜12分程度でアクセス可能。終演後の電車混雑を気にせず歩いて帰館できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人でアフタヌーンティーやバーを利用できますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                各ホテルのラウンジやバーは洗練された開放的な空間で、おひとりさまで優雅にアフタヌーンティーやワインを楽しむゲストが多数います。
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
