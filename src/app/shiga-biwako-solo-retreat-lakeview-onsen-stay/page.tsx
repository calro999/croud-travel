import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【琵琶湖ひとり旅・絶景おこもり】全室レイクビュー・天然温泉るりの湯・近江牛会席！日本最大の湖に癒やされる極上リゾート宿 厳選3選',
  description: '京都駅からJR新快速でわずか約9〜20分！「全室バルコニー付きレイクビュー＆天然温泉大浴場」を誇る「琵琶湖ホテル」、丹下健三設計の38階超高層パノラマタワー「びわ湖大津プリンスホテル」、客室露天風呂と湖畔の朝夕部屋食が自慢の「おごと温泉 びわこ緑水亭」を徹底特集。',
  keywords: '琵琶湖 一人旅 ホテル,琵琶湖ホテル 宿泊,びわ湖大津プリンスホテル レイクビュー,おごと温泉 びわこ緑水亭 一人,滋賀 温泉 ひとり旅',
  openGraph: {
    title: '【琵琶湖ひとり旅・絶景おこもり】全室レイクビュー・天然温泉るりの湯・近江牛会席！日本最大の湖に癒やされる極上リゾート宿 厳選3選',
    description: '京都駅からJR新快速でわずか約9〜20分！「全室バルコニー付きレイクビュー＆天然温泉大浴場」を誇る「琵琶湖ホテル」、丹下健三設計の38階超高層パノラマタワー「びわ湖大津プリンスホテル」、客室露天風呂と湖畔の朝夕部屋食が自慢の「おごと温泉 びわこ緑水亭」を徹底特集。',
    url: 'https://croud-travel.pages.dev/shiga-biwako-solo-retreat-lakeview-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【琵琶湖ひとり旅・絶景おこもり】全室レイクビュー・天然温泉るりの湯・近江牛会席！日本最大の湖に癒やされる極上リゾート宿 厳選3選',
    description: '京都駅からJR新快速でわずか約9〜20分！「全室バルコニー付きレイクビュー＆天然温泉大浴場」を誇る「琵琶湖ホテル」、丹下健三設計の38階超高層パノラマタワー「びわ湖大津プリンスホテル」、客室露天風呂と湖畔の朝夕部屋食が自慢の「おごと温泉 びわこ緑水亭」を徹底特集。',
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
    datePublished: '2026-09-12T15:45:00+09:00',
    dateModified: '2026-09-12T15:45:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/shiga-biwako-solo-retreat-lakeview-onsen-stay',
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
        <span className="text-stone-700 font-medium">滋賀・琵琶湖レイクビュー＆天然温泉おこもり特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【琵琶湖ひとり旅・絶景おこもり】全室レイクビュー・天然温泉るりの湯・近江牛会席！日本最大の湖に癒やされる極上リゾート宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>滋賀・琵琶湖レイクビュー＆天然温泉おこもり特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【琵琶湖ひとり旅・絶景おこもり】全室レイクビュー・天然温泉るりの湯・近江牛会席！日本最大の湖に癒やされる極上リゾート宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          京都駅からJR新快速でわずか約9〜20分！「全室バルコニー付きレイクビュー＆天然温泉大浴場」を誇る「琵琶湖ホテル」、丹下健三設計の38階超高層パノラマタワー「びわ湖大津プリンスホテル」、客室露天風呂と湖畔の朝夕部屋食が自慢の「おごと温泉 びわこ緑水亭」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            水平線のように広がる母なる湖の蒼さと、比良山系に沈む茜色の夕日——京都からわずか10分で出会える静寂と名湯「琵琶湖大人の水辺リトリート」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            日本最大の湖であり、古代から近畿の水瓶として人々の営みを支えてきた滋賀県・琵琶湖。JR京都駅から新快速に乗ればわずか2駅・約9分で大津駅に到着するという驚異的なアクセスの良さを誇りながら、京都市内の喧騒とは打って変わった圧倒的な開放感と静寂が広がっています。波のない穏やかな湖面を眺めながら過ごす時間は、張り詰めた神経を優しく解きほぐす天然のヒーリング空間です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな琵琶湖ステイの最大の魅力は、全客室の窓やバルコニーから広がる遮るもののない「レイクビュー」と、良質な「天然温泉」、そして日本三大和牛の一つ「近江牛」の贅沢な味わいです。朝は湖面を染める日の出とともに目覚め、夕暮れには湖畔の露天風呂で風を感じる。今回は大人がひとりで心豊かにリフレッシュできる厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4843/4843.jpg"
                alt="琵琶湖ホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.53 点（2672件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  全室バルコニー付きレイクビュー！大津港すぐ・天然温泉大浴場「るりの湯」と近江牛ディナー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  琵琶湖ホテル —— 湖畔のフラッグシップリゾート。客室テラスから望むびわこ花噴水と天然温泉の寛ぎ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室が開放的なプライベートバルコニー付きのオーシャンならぬレイクビュー</p>
                    <p className="text-xs text-stone-600 leading-relaxed">目の前をミシガンクルーズ船が行き交う特等席。心地よい風を感じながら読書やティータイムを楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">手足を伸ばして浸かる天然温泉大浴場「るりの湯」＆サウナ完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">湖を眺めながら入浴できる開放感。温泉のぬくもりが日頃の疲れを芯から癒やしてくれます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地元滋賀の食材や近江牛、発酵食を取り入れた極上ダイニング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">一流シェフが織りなす和洋の美味。一人でも落ち着いた空間で優雅な食事を満喫できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.53点。「全室レイクビューでバルコニーからの眺めが最高でした。温泉も気持ちよく、一人旅に最高のホテルです」「スタッフの気配りが素晴らしかった」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 滋賀県大津市浜町2-40</p>
                  <p>🚆 JR大津駅より徒歩約15分／京阪びわ湖浜大津駅より徒歩約5分／名神大津ICより約10分／無料駐車場</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4843"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/16068/16068.jpg"
                alt="びわ湖大津プリンスホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.42 点（5029件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  地上136m・世界的建築家・丹下健三設計の38階超高層タワー！全室レイクフロントのパノラマビュー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  びわ湖大津プリンスホテル —— 圧倒的なスケール感。半円形タワーから見渡す琵琶湖のダイナミックパノラマ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">どの部屋からも琵琶湖の雄大な景色を一望できる半円形カーブの客室設計</p>
                    <p className="text-xs text-stone-600 leading-relaxed">空と湖に包まれているかのような感覚。夜には対岸の大津や草津の夜景が水面に美しく揺らめきます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">JR京都駅から無料シャトルバスまたは大津駅から定時運行でアクセス良好</p>
                    <p className="text-xs text-stone-600 leading-relaxed">京都観光と琵琶湖リゾートを両立。ホテル前の桟橋から観光船に乗船も可能です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階38階「スカイフロア」のレストランや開放的なブッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地上130mからの天空モーニング。滋賀県産コシヒカリとともに贅沢な朝のスタートを切れます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.42点。「高層階からの琵琶湖の景色が圧巻で、部屋も広くて大満足でした」「京都から近いのにとても静かでリフレッシュできました」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 滋賀県大津市におの浜4-7-7</p>
                  <p>🚆 ＪＲ東海道本線（琵琶湖線）大津駅から無料シャトルバスで10分／名神高速道路・大津ＩＣより3.7ｋm（平常時10分）</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16068"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/3165/3165.jpg"
                alt="おごと温泉　びわこ緑水亭"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.66 点（2453件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  最澄開湯1200年の名湯「おごと温泉」！客室露天風呂と湖畔のデッキテラスが彩る極上旅館
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  おごと温泉 びわこ緑水亭 —— 水辺の安らぎを極めた宿。美肌のアルカリ性単純温泉とお部屋食近江牛会席
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ph9.0を誇る美肌の湯「おごと温泉」の大浴場露天風呂や客室露天風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">とろりとした肌触りの名湯。プライベートな客室露天風呂で好きな時に何度でも湯浴みを楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">琵琶湖にせり出すような水上デッキテラス「碧のテラス」でのリラックス空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">湯上がりに足湯に浸かりながらハーブティーや地酒を一杯。贅沢な大人の時間が流れます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">認証近江牛のしゃぶしゃぶやすき焼きを味わう本格会席料理</p>
                    <p className="text-xs text-stone-600 leading-relaxed">おひとりさまでも気兼ねなく味わえる部屋食または個室プラン。口の中でとろける極上の霜降りを堪能。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.66点。「客室露天風呂からの琵琶湖の眺めと近江牛のお料理が最高でした」「一人でも温かくもてなしていただき、最高の休日になりました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 滋賀県大津市雄琴6-1-6</p>
                  <p>🚆 名神京都東Ｉ．Ｃから湖西道路経由で20分。ＪＲおごと温泉駅から送迎あり（要電話）</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D3165"
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
              琵琶湖の静寂と歴史を一人旅で味わい尽くす散策術
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 琵琶湖汽船「ミシガンクルーズ」で湖上からの爽快パノラマクルーズ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                大津港から出航する陽気な外輪船。最上階デッキで心地よい湖風を感じながら、比叡山や湖畔の景色を360度見渡せます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 国宝「近江八景」三井寺（園城寺）の静寂な境内と観音堂からの眺望
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                弁慶の引き摺り鐘で名高い古刹。静まり返った木立の中を歩き、高台から琵琶湖を見下ろす朝散歩は心のデトックス。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夕食には近江牛のステーキまたは伝統の湖魚料理（鮎・鮒ずし）と滋賀の地酒
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                近江牛の濃厚な旨味を、「松の司」「喜楽長」など米の旨味がしっかり乗った純米酒が引き立てます。
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
                <span>京都観光の拠点として琵琶湖湖畔に泊まるのは便利ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                JR大津駅へは京都駅から新快速でわずか2駅（約9分）のため、京都市内の混雑したホテルを避け、湖畔の広い温泉宿で静かに寛ぐ滞在スタイルが非常に人気です。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で近江牛会席やお部屋食を楽しめる宿はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ご紹介したびわこ緑水亭をはじめ、近年はおひとりさま専用の近江牛プランやお部屋食プランが充実しており、一人でも気兼ねなく名門和牛を堪能できます。
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
