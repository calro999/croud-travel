import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【大分出張＆豊後ソログルメ泊】大分駅直結・地上80m屋上インフィニティ天然温泉・関アジ関サバ！名物とり天を満喫する極上ホテル 厳選3選',
  description: 'おんせん県おおいたの県庁所在地・大分市！「JR大分駅直結・最上階21階に天空露天温泉CITY SPAてんくうを擁する」の「JR九州ホテル ブラッサム大分」、大分市中心街のランドマークホテル「ホテル日航大分 オアシスタワー」、府内町ビジネス街至近の「ダイワロイネットホテル大分」を徹底特集。',
  keywords: '大分 出張 ホテル 温泉,大分 一人旅 ホテル おすすめ,ブラッサム大分 温泉,ホテル日航大分 オアシスタワー 宿泊,大分 関アジ 関サバ ホテル',
  openGraph: {
    title: '【大分出張＆豊後ソログルメ泊】大分駅直結・地上80m屋上インフィニティ天然温泉・関アジ関サバ！名物とり天を満喫する極上ホテル 厳選3選',
    description: 'おんせん県おおいたの県庁所在地・大分市！「JR大分駅直結・最上階21階に天空露天温泉CITY SPAてんくうを擁する」の「JR九州ホテル ブラッサム大分」、大分市中心街のランドマークホテル「ホテル日航大分 オアシスタワー」、府内町ビジネス街至近の「ダイワロイネットホテル大分」を徹底特集。',
    url: 'https://croud-travel.pages.dev/oita-solo-business-rooftop-onsen-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【大分出張＆豊後ソログルメ泊】大分駅直結・地上80m屋上インフィニティ天然温泉・関アジ関サバ！名物とり天を満喫する極上ホテル 厳選3選',
    description: 'おんせん県おおいたの県庁所在地・大分市！「JR大分駅直結・最上階21階に天空露天温泉CITY SPAてんくうを擁する」の「JR九州ホテル ブラッサム大分」、大分市中心街のランドマークホテル「ホテル日航大分 オアシスタワー」、府内町ビジネス街至近の「ダイワロイネットホテル大分」を徹底特集。',
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
    datePublished: '2026-09-12T15:40:00+09:00',
    dateModified: '2026-09-12T15:40:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/oita-solo-business-rooftop-onsen-gourmet-stay',
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
        <span className="text-stone-700 font-medium">大分・出張＆屋上天然温泉・関アジ関サバ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【大分出張＆豊後ソログルメ泊】大分駅直結・地上80m屋上インフィニティ天然温泉・関アジ関サバ！名物とり天を満喫する極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>大分・出張＆屋上天然温泉・関アジ関サバ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【大分出張＆豊後ソログルメ泊】大分駅直結・地上80m屋上インフィニティ天然温泉・関アジ関サバ！名物とり天を満喫する極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          おんせん県おおいたの県庁所在地・大分市！「JR大分駅直結・最上階21階に天空露天温泉CITY SPAてんくうを擁する」の「JR九州ホテル ブラッサム大分」、大分市中心街のランドマークホテル「ホテル日航大分 オアシスタワー」、府内町ビジネス街至近の「ダイワロイネットホテル大分」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            地上80mから見下ろす別府湾と高崎山のパノラマ、豊後水道が育む関アジのコリコリとした歯ごたえ——おんせん県の都で極上のととのいを手に入れる「大分プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            博多からJR特急「ソニック」で約2時間、小倉から約1時間20分。鉄鋼や化学コンビナートが広がる臨海工業地帯を抱え、東九州の経済中枢として多くのビジネスパーソンが訪れる大分県大分市。「おんせん県」の名にふさわしく、市内中心部にも良質な天然温泉が数多く湧出しています。日中の商談を終えた後の夜の楽しみは、豊後水道の荒波で身が引き締まった「関アジ・関サバ」のお造りや、サクサクジューシーな「大分とり天」、そして名酒「西の関」「八鹿」です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな大分出張のハイライトとなるのが、JR大分駅直結のビル最上階に広がる地上約80mの屋上インフィニティ天然温泉「CITY SPA てんくう」です。別府湾や市街地を見下ろしながら夜風に吹かれ、サウナでととのう非日常の解放感。今回は機能性と極上の癒やしを兼ね備えた大分の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/147712/147712.jpg"
                alt="ＪＲ九州ホテルブラッサム大分"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.55 点（2327件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR大分駅直結！地上約80m・最上階21階の屋上露天風呂「CITY SPA てんくう」＆サウナシュラン仕様の絶景ステイ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  JR九州ホテル ブラッサム大分 —— 水戸岡鋭治氏デザインの最高峰。空に浮かぶ天然温泉と大分郷土料理ビュッフェ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に位置する圧倒的パノラマの屋上露天風呂「CITY SPA てんくう」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地下深くから湧く美肌の天然温泉。別府湾の水平線や高崎山、夜景を一望しながら極上のととのいを体験できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">JR大分駅直結！新幹線乗り継ぎの特急ソニック改札から雨の日も傘不要</p>
                    <p className="text-xs text-stone-600 leading-relaxed">駅ビル「アミュプラザおおいた」直結。食事、ショッピング、お土産探しにも最高の利便性です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">水戸岡鋭治氏が手がけた木の温もりあふれる洗練客室と快適シモンズベッド</p>
                    <p className="text-xs text-stone-600 leading-relaxed">和の美意識が宿る上質な空間。高速Wi-Fi完備で出張のテレワークも快適にこなせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.55点。「屋上の露天風呂からの景色が圧巻で、これ以上の出張ホテルはありません」「駅直結で部屋も上質、大分出張の際は必ず泊まります」と絶賛の嵐。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 大分県大分市要町1-14</p>
                  <p>🚆 JR大分駅より徒歩0分！府内中央口（北口）直結で、バス乗り場も近く、観光・ビジネスの拠点に抜群のアクセス</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D147712"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1801/1801.jpg"
                alt="ホテル日航大分　オアシスタワー"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.4 点（2614件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  地上101m・大分市街のランドマークタワー！全室高層階からのパノラマビューとオークラニッコーの上質サービス
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテル日航大分 オアシスタワー —— 格式と品格のオアシス。広々としたモダン客室と豊後の味覚を味わう朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室が高層階に位置し、別府湾や国東半島、大分市街の夜景を一望</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ゆとりある広さの客室設計。遮音性に優れ、出張の夜を静かに熟睡できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大型複合施設「オアシスひろば21」内に位置し、ビジネスや学会に最適</p>
                    <p className="text-xs text-stone-600 leading-relaxed">落ち着いた品格あるロビー空間。エグゼクティブの出張にふさわしいおもてなしです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大分名物とり天や琉球（りゅうきゅう）、新鮮野菜が並ぶ朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">シェフ特製のオムレツとともに大分の郷土の味を満喫。朝から元気をチャージできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.40点。「高層階からの眺めが素晴らしく部屋も広くて清潔でした」「スタッフの対応がとても丁寧で安心して宿泊できました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 大分県大分市高砂町2-48　</p>
                  <p>🚆 （JR大分駅から）徒歩で約10分（大分ＩＣから）車で約１５分（大分空港から）高速バスで約６０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1801"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/70923/70923.jpg"
                alt="ダイワロイネットホテル大分"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.31 点（3981件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  大分市中心街・府内町ビジネス街すぐ！全室広々とした客室設計と大型デスク完備の安心ステイ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ダイワロイネットホテル大分 —— 都心のビジネス拠点。セパレートバスルームと快適なワーク環境
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">トキハデパートや府内五番街、都町歓楽街へ徒歩すぐの好立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜の飲食や商談先へのアクセスが抜群。食事処に困ることはありません。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広めのライティングデスクと明るいデスクライト、高速Wi-Fi完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">客室でのPC作業やオンラインミーティングが非常に快適。シモンズ製ベッドが快眠を約束します。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大分の食材を取り入れた和洋モーニングビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から活力満点のごはん。出張の一日をスムーズにスタートできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.31点。「立地が良く部屋も綺麗で、デスクワークがとてもしやすかった」「飲食店街にも近くて一人出張に最適でした」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 大分県大分市荷揚町2-3</p>
                  <p>🚆 大分駅より徒歩約10分！大分空港より空港バスにて約60分『荷揚町』下車徒歩１分！</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D70923"
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
              大分の夜を一人旅で満喫する「関アジ＆とり天」グルメガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 都町（みやこまち）や府内町の割烹で「関アジ・関サバの刺身」をオーダー
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                一本釣りで獲られ活け締めされた黄金の魚。コリコリとした驚異的な歯ごたえと上品な脂の甘みは産地大分ならではの感動。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 郷土料理「りゅうきゅう」と麦焼酎「二階堂」「吉四六」のロック
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                新鮮な魚の切り身を甘辛い醤油ダレ、胡麻、生姜、ネギで和えた大分の家庭の味。麦焼酎の発祥地ならではの芳醇な一杯とともに。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 揚げたて熱々の「大分とり天」をポン酢と練り辛子で食す
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                唐揚げとは一味違う、ふんわりサクサクの衣に包まれた柔らかな鶏肉。さっぱりとした酢醤油と辛子が最高の組み合わせです。
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
                <span>大分空港から大分駅やホテルへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                大分空港から大分市内行き空港特急バス（エアライナー）が運行しており、約60分でJR大分駅前へ直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>出張の合間に別府温泉へ立ち寄る時間は取れますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                大分駅から別府駅まではJR日豊本線の普通列車で約12分（特急なら約8分）とすぐ隣駅感覚で行けるため、夕方や休日のちょっとした空き時間に立ち寄り湯を満喫できます。
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
