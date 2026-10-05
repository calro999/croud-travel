import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/yokohama-minatomirai-solo-nightview-luxury-stay/" },
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
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2003%2F2003.html"
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
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183942%2F183942.html"
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
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184792%2F184792.html"
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
    
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/aomori"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                青森県の宿・温泉
              </Link>
              <Link
                href="/prefectures/fukuoka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福岡県の宿・温泉
              </Link>
              <Link
                href="/prefectures/okinawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                沖縄県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tokushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                徳島県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
