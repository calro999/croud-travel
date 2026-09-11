import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【宇都宮出張＆餃子ひとり旅】最上階展望スカイスパ・駅直結・名物餃子食べ比べ！北関東の要所で整う極上ホテル 厳選3選',
  description: '東北・秋田・山形新幹線停車！北関東最大の工業・ビジネス拠点である栃木県宇都宮市。「駅東口直結・最上階スカイスパでととのう新ランドマーク」の「CANDEO HOTELS 宇都宮」、宇都宮駅ビル直結でシモンズベッド完備の「ＪＲ東日本ホテルメッツ 宇都宮」、大谷石ラウンジと広々客室が自慢の「ホテルマイステイズ宇都宮」を徹底特集。',
  keywords: '宇都宮 出張 ホテル おすすめ,宇都宮 一人旅 ホテル,カンデオホテルズ宇都宮 サウナ,ホテルメッツ宇都宮 宿泊,宇都宮 餃子 ホテル',
  openGraph: {
    title: '【宇都宮出張＆餃子ひとり旅】最上階展望スカイスパ・駅直結・名物餃子食べ比べ！北関東の要所で整う極上ホテル 厳選3選',
    description: '東北・秋田・山形新幹線停車！北関東最大の工業・ビジネス拠点である栃木県宇都宮市。「駅東口直結・最上階スカイスパでととのう新ランドマーク」の「CANDEO HOTELS 宇都宮」、宇都宮駅ビル直結でシモンズベッド完備の「ＪＲ東日本ホテルメッツ 宇都宮」、大谷石ラウンジと広々客室が自慢の「ホテルマイステイズ宇都宮」を徹底特集。',
    url: 'https://croud-travel.pages.dev/utsunomiya-solo-business-gyoza-skyspa-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【宇都宮出張＆餃子ひとり旅】最上階展望スカイスパ・駅直結・名物餃子食べ比べ！北関東の要所で整う極上ホテル 厳選3選',
    description: '東北・秋田・山形新幹線停車！北関東最大の工業・ビジネス拠点である栃木県宇都宮市。「駅東口直結・最上階スカイスパでととのう新ランドマーク」の「CANDEO HOTELS 宇都宮」、宇都宮駅ビル直結でシモンズベッド完備の「ＪＲ東日本ホテルメッツ 宇都宮」、大谷石ラウンジと広々客室が自慢の「ホテルマイステイズ宇都宮」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/utsunomiya-solo-business-gyoza-skyspa-stay',
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
        <span className="text-stone-700 font-medium">宇都宮・出張＆スカイスパ・餃子特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【宇都宮出張＆餃子ひとり旅】最上階展望スカイスパ・駅直結・名物餃子食べ比べ！北関東の要所で整う極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>宇都宮・出張＆スカイスパ・餃子特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【宇都宮出張＆餃子ひとり旅】最上階展望スカイスパ・駅直結・名物餃子食べ比べ！北関東の要所で整う極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          東北・秋田・山形新幹線停車！北関東最大の工業・ビジネス拠点である栃木県宇都宮市。「駅東口直結・最上階スカイスパでととのう新ランドマーク」の「CANDEO HOTELS 宇都宮」、宇都宮駅ビル直結でシモンズベッド完備の「ＪＲ東日本ホテルメッツ 宇都宮」、大谷石ラウンジと広々客室が自慢の「ホテルマイステイズ宇都宮」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            新陳代謝を高める最上階スカイスパと、パリッと香ばしい焼き餃子の湯気——北関東の中枢で仕事もリフレッシュも極める「宇都宮進化系ステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東北新幹線で東京から最短約48分。本田技研工業やキヤノンをはじめとする巨大ハイテク工場群や工業団地が集結し、次世代型路面電車（芳賀・宇都宮LRT）の開業で劇的な進化を遂げた街・宇都宮。日中の商談や工場視察をこなした後の最大の楽しみは、全国にその名を轟かせる「宇都宮餃子」の食べ比べです。野菜たっぷりのあっさり系、パリパリの羽付き、ジューシーな水餃子など、専門店ごとに異なる個性が旅人の胃袋を掴んで離しません。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな宇都宮出張の満足度を何倍にも高めてくれるのが、駅直結の圧倒的なフットワークと、最上階に展望露天風呂や本格サウナを備えた最新ホテルです。夜風に吹かれながらサウナでととのい、冷たいビールと餃子で一日を締めくくる至福。今回は出張と餃子サ旅を両立させる宇都宮の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/184376/184376.jpg"
                alt="ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）宇都宮"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.44 点（2193件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  宇都宮テラス直結・最上階14階に広がる展望露天風呂「スカイスパ」とオートロウリュサウナ完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  CANDEO HOTELS（カンデオホテルズ）宇都宮 —— 駅東口の最新ランドマーク。天空のオアシスとサウナシュラン仕様のととのい体験
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階14階に位置する絶景スカイスパ（展望露天風呂・内湯・サウナ・水風呂）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">北関東の夜空を見上げる星空外気浴。最新のオートロウリュサウナで出張の緊張を一気に解きほぐせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">JR宇都宮駅東口からペデストリアンデッキで直結！LRT乗り場も目の前</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新幹線を降りてすぐチェックイン。複合施設「ウツノミヤテラス」内で食事や買い物も極めて便利です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">窓際に広々とした小上がりソファ「こあがり」を配した和モダン快適客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">靴を脱いで寛げるリラックス空間。高速Wi-Fi完備でPC作業や読書も快適にこなせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.44点。「駅直結で最上階のサウナと露天風呂が素晴らしすぎた」「部屋も新しく綺麗で、宇都宮出張のクオリティが劇的に上がりました」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 栃木県宇都宮市宮みらい1-1</p>
                  <p>🚆 JR宇都宮駅から徒歩2分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D184376"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/136222/136222.jpg"
                alt="ＪＲ東日本ホテルメッツ宇都宮"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.41 点（2436件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR宇都宮駅西口直結・駅ビルパセオ直結！シモンズ社製最高級ベッド完備の快適ステイ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ＪＲ東日本ホテルメッツ 宇都宮 —— 雨に濡れずにチェックイン。大谷石を配した落ち着きある空間と充実の快眠機能
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札から徒歩1分の駅ナカ直結ロケーションで移動のストレスゼロ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">駅ビル「パセオ」直結で餃子通りやお土産店へ直行可能。荷物預けもスムーズで機動力抜群です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室シモンズ社製ベッドと加湿空気清浄機、洗い場付きバスタブ完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">遮音性に優れた静かな客室。出張の夜をぐっすり眠って翌朝スッキリと目覚められます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">セルフチェックイン機やラウンジの無料コーヒーマシンなどスマートなサービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ビジネスの合間にホッと一息。機能的でスマートな滞在をサポートします。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.41点。「新幹線改札からすぐで本当に便利。お部屋も静かでベッドの寝心地が最高でした」「スタッフも親切で清潔感があり安心」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 栃木県宇都宮市川向町1-23</p>
                  <p>🚆 ＪＲ宇都宮駅西口から徒歩1分。東武宇都宮駅から徒歩20分。日光東照宮まで’電車で45分・車で60分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D136222"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/67045/67045.jpg"
                alt="ホテルマイステイズ宇都宮"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.21 点（2572件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  宇都宮駅東口徒歩3分！全室広々とした客室設計と大谷石をあしらったモダンロビー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルマイステイズ宇都宮 —— 落ち着いた大人のシティホテル。充実したフィットネスジムと栃木の味覚朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">シングルでもゆとりのある広々とした客室とワイドなワーキングデスク</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大型スーツケースも楽々広げられる空間。PC作業やオンライン会議もストレスなくこなせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宿泊者専用の無料フィットネスジムを完備し、出張中の運動不足を解消</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ランニングマシンやダンベルを揃えたジム。汗を流してリフレッシュできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宇都宮餃子や栃木県産米、ご当地食材を取り入れた和洋朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から美味しい地元グルメを満喫。活力をチャージして出発できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.21点。「部屋が広くてデスクワークがとてもしやすかった」「駅近でジムもあり、朝食の餃子も美味しかった」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 栃木県宇都宮市東宿郷2-4-1</p>
                  <p>🚆 ＪＲ宇都宮駅東口より徒歩３分という好立地。1階にコンビニ併設でビジネスユースにピッタリ。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67045"
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
              宇都宮餃子を一人でスマートに食べ比べるための黄金ルート
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. まずは駅ビル「パセオ」の餃子小路（みんみん、青源など）で焼き＆水餃子
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                新幹線を降りてすぐ立ち寄れる特等席。「焼き＋水＋ライス」のダブル注文が宇都宮の王道スタイルです。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 次世代路面電車（LRT）に乗って東エリアのアーバンビューを体感
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                最新鋭のライトラインに乗車。未来都市のような乗り心地を楽しみながら、鬼怒川方面への車窓パノラマを楽しめます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夜は宮の橋周辺の居酒屋で栃木の銘酒「鳳凰美田」「仙禽」と乾杯
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                全国の日本酒ファンを魅了する栃木の地酒。華やかな吟醸香が、香ばしい餃子や湯波料理の美味しさを一層引き立てます。
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
                <span>LRT（芳賀・宇都宮LRT）の乗り方はどうなっていますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                宇都宮駅東口から発着しており、SuicaやPASMO、totraなどの交通系ICカードを全扉のリーダーにタッチするだけでスムーズに乗降できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で「餃子通り」へ行くにはどう行けばいいですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                宇都宮駅西口から市内路線バスで約5分（馬場町下車）、または徒歩約15分で、みんみん本店や正嗣（まさし）が並ぶ餃子通りへアクセスできます。
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
