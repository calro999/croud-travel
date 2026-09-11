import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【神戸ひとり旅・港町ご褒美泊】ハーバーランド夜景・地下天然温泉・極上朝食！海風に癒やされる大人のおこもり宿 厳選3選',
  description: '「異国情緒あふれる神戸港の夜景を眺めながら、静かにワインを傾けたい」「上質な天然温泉とスパで心身を極限までリフレッシュしたい」。そんなソロトラベラーへ。270度海に囲まれた天然温泉旅館「神戸みなと温泉 蓮」、全室70㎡以上・ジャグジー付きの最高峰「ホテル ラ・スイート神戸ハーバーランド」、全室バルコニー付きで海に浮かぶような「神戸メリケンパークオリエンタルホテル」を徹底特集。',
  keywords: '神戸 一人旅 ホテル 高級,神戸 温泉 ホテル 一人,神戸みなと温泉 蓮 宿泊,ホテル ラ・スイート神戸ハーバーランド 一人,神戸港 夜景 ホテル',
  openGraph: {
    title: '【神戸ひとり旅・港町ご褒美泊】ハーバーランド夜景・地下天然温泉・極上朝食！海風に癒やされる大人のおこもり宿 厳選3選',
    description: '「異国情緒あふれる神戸港の夜景を眺めながら、静かにワインを傾けたい」「上質な天然温泉とスパで心身を極限までリフレッシュしたい」。そんなソロトラベラーへ。270度海に囲まれた天然温泉旅館「神戸みなと温泉 蓮」、全室70㎡以上・ジャグジー付きの最高峰「ホテル ラ・スイート神戸ハーバーランド」、全室バルコニー付きで海に浮かぶような「神戸メリケンパークオリエンタルホテル」を徹底特集。',
    url: 'https://croud-travel.pages.dev/kobe-solo-luxury-oceanview-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【神戸ひとり旅・港町ご褒美泊】ハーバーランド夜景・地下天然温泉・極上朝食！海風に癒やされる大人のおこもり宿 厳選3選',
    description: '「異国情緒あふれる神戸港の夜景を眺めながら、静かにワインを傾けたい」「上質な天然温泉とスパで心身を極限までリフレッシュしたい」。そんなソロトラベラーへ。270度海に囲まれた天然温泉旅館「神戸みなと温泉 蓮」、全室70㎡以上・ジャグジー付きの最高峰「ホテル ラ・スイート神戸ハーバーランド」、全室バルコニー付きで海に浮かぶような「神戸メリケンパークオリエンタルホテル」を徹底特集。',
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
    datePublished: '2026-09-11T02:40:00+09:00',
    dateModified: '2026-09-11T02:40:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/kobe-solo-luxury-oceanview-onsen-stay',
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
        <span className="text-stone-700 font-medium">神戸・オーシャンビュー＆天然温泉ご褒美特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【神戸ひとり旅・港町ご褒美泊】ハーバーランド夜景・地下天然温泉・極上朝食！海風に癒やされる大人のおこもり宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>神戸・オーシャンビュー＆天然温泉ご褒美特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【神戸ひとり旅・港町ご褒美泊】ハーバーランド夜景・地下天然温泉・極上朝食！海風に癒やされる大人のおこもり宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          「異国情緒あふれる神戸港の夜景を眺めながら、静かにワインを傾けたい」「上質な天然温泉とスパで心身を極限までリフレッシュしたい」。そんなソロトラベラーへ。270度海に囲まれた天然温泉旅館「神戸みなと温泉 蓮」、全室70㎡以上・ジャグジー付きの最高峰「ホテル ラ・スイート神戸ハーバーランド」、全室バルコニー付きで海に浮かぶような「神戸メリケンパークオリエンタルホテル」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            神戸ポートタワーの赤い灯りと汽笛の調べ、海に揺れる光の波——日常の喧騒を忘れ、海風と名湯に包まれる「神戸ベイサイド・ソロリトリート」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            六甲の山並みと穏やかな瀬戸内海に抱かれた港町・神戸。明治の開港以来培われてきた洋館やベーカリー、パティスリーの文化、そして日本三大夜景と称される美しいライトアップ。旧居留地の洗練されたブティック街や、潮風が心地よいメリケンパーク・ハーバーランドは、大人がひとりで歩くのにこれ以上なく絵になるロケーションです。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな神戸で過ごすひとり旅のハイライトは、海を間近に感じるウォーターフロントのラグジュアリーホテル。客室のテラスで潮風を感じながらシャンパンを開け、地下深くから湧き出る天然温泉で温まり、翌朝は全国屈指の評価を誇る焼き立てパンの朝食を味わう。自分を最高のホスピタリティで満たす神戸の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/149298/149298.jpg"
                alt="神戸みなと温泉　蓮"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.62 点（1194件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  270度を海に囲まれた天然温泉リゾート旅館！地下1,150mから湧く名湯と展望露天風呂・オーシャンスイート
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  神戸みなと温泉 蓮 —— 新港第一突堤に佇む大人の癒やし空間。源泉掛け流しの湯と健康増進プール
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地下1,150mから湧出する豊富なナトリウム塩化物・炭酸水素塩温泉</p>
                    <p className="text-xs text-stone-600 leading-relaxed">美肌と保温効果に優れた本格天然温泉。海風が心地よい展望露天風呂や多彩な内湯、岩盤浴で一日中湯巡りを楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室50㎡以上の広さを誇り、全室に海を望むテラスを完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">テラスのデッキチェアから神戸港やハーバーランドの夜景を一望。誰にも邪魔されない至福の時間が流れます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">割烹旅館の伝統を受け継ぐ職人が手がける季節の和食ブッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">日本海の鮮魚や神戸牛、地元兵庫の契約農家から届く新鮮野菜。五感で味わう贅沢な食体験です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.62点。「温泉の泉質が素晴らしく、テラスから見える夜景が最高のご褒美でした」「一人でも温かく迎え入れてくれて、日頃のストレスが完全に消えました」と大人女子・ソロ客から絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 兵庫県神戸市中央区新港町1-1</p>
                  <p>🚆 JR大阪駅より新快速で21分、各線三宮駅からシャトルバスで5分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D149298"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/104705/104705.jpg"
                alt="ホテル　ラ・スイート神戸ハーバーランド"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.74 点（1812件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  全室70㎡以上＆大型ジャグジーバス完備！スモール・ラグジュアリー・ホテルズ加盟の最高峰ホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテル ラ・スイート神戸ハーバーランド —— 贅を尽くしたプライベート空間。全室オーシャンビューテラスとル・パンの朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室がオーシャンビューテラス付き＆ゆとりある70㎡以上の広さ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ヨーロッパの邸宅のようなエレガントな設え。テラスからは神戸ポートタワーやモザイクの観覧車夜景を一望できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">夜景を眺めながらバブルバスを楽しめる大型ジャグジーバス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">アロマの香りに包まれて優雅なバスタイム。最高級のバスアメニティとともに贅沢なひとときを過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">楽天トラベル朝食フェスティバルで全国1位に輝いた伝説のブレックファスト</p>
                    <p className="text-xs text-stone-600 leading-relaxed">直営ベーカリー「ル・パン神戸北野」の焼きたてパンや、兵庫県産食材をふんだんに使った贅沢なルームサービス朝食。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.74点。「自分へのご褒美ステイで宿泊しましたが、お部屋、ジャグジー、朝食すべてが完璧でした」「スタッフの細やかな気配りに感動しました」と圧倒的な高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 兵庫県神戸市中央区波止場町7-2</p>
                  <p>🚆 JR「神戸駅」より徒歩約10分／地下鉄海岸線「みなと元町駅」より徒歩約4分／阪神高速3号神戸線「京橋出入口」より車約5分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D104705"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8978/8978.jpg"
                alt="神戸メリケンパークオリエンタルホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.51 点（7239件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  神戸港の突端にそびえる豪華客船のようなホテル！全室バルコニー付きで海に浮かぶような絶景ビュー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  神戸メリケンパークオリエンタルホテル —— メリケンパークのシンボル。270度パノラマと海を望むテラスレストラン
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">周囲を海に囲まれた唯一無二のロケーションで、全客室にバルコニー完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">汽笛の音と潮風を感じるバルコニー。時間とともに移り変わる海のグラデーションや夜景を心ゆくまで堪能できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">オープンキッチンでシェフが目の前で仕上げる絶品朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">名物のフレンチトーストやオムレツ、絞りたて生ジュース。光あふれるテラスレストランで贅沢な朝を迎えられます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">三宮駅から無料シャトルバス運行でアクセスもスムーズ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">観光やショッピングの合間にも楽々移動可能。夜のメリケンパーク散歩もホテル目の前で楽しめます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.51点。「バルコニーからの夜景がロマンチックで、海の上に泊まっているような感覚でした」「一人ステイケーションに最適でリフレッシュできました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 兵庫県神戸市中央区波止場町5-6  【ホテルコード10】0570-051-153</p>
                  <p>🚆 JR三ノ宮間の送迎バス運行。大阪まで約20分、元町から徒歩約15分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8978"
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
              神戸ベイエリアをひとり旅で優雅に楽しむ3つの過ごし方
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 夕暮れのメリケンパーク＆BE KOBEモニュメント散策
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                昼間の混雑が落ち着く夕暮れ時。茜色に染まる空とライトアップが灯り始める瞬間は息をのむ美しさです。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 旧居留地のレトロビルカフェで本格ケーキを味わう
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                近代洋風建築が並ぶ美しい街並み。洗練されたカフェでいただく神戸スイーツと紅茶はひとり旅の特等席です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夜は客室バルコニーで神戸ワインや地ビールを一杯
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                潮風に吹かれながら海を行き交う船の明かりを眺める時間。誰にも邪魔されない至極のプライベートバーになります。
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
                <span>三宮駅からホテルまでは歩いて行けますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                三宮駅からハーバーランド・メリケンパークエリアまでは徒歩約15〜20分ですが、各ホテルが三宮駅前からの無料シャトルバスや路線バスを運行しており、荷物があっても快適にアクセスできます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人でルームサービスのディナーを頼むことはできますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、特にホテル ラ・スイート神戸ハーバーランドなどはルームサービスが非常に充実しており、お部屋で誰にも気兼ねなく本格フレンチコースやワインを楽しむことができます。
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
