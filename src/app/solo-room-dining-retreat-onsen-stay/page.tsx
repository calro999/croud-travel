import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【おひとりさま部屋食温泉宿】夕食・朝食をお部屋で贅沢に！誰にも邪魔されない極上おこもりひとり旅宿 厳選3選',
  description: '「周りの目を気にせず、浴衣のままマイペースに部屋食を楽しみたい」「静寂の中で名湯をひとり占めしたい」というソロトラベラーへ。草津温泉の老舗「望雲」、四万川の清流を望む「四万温泉 豊島屋」、箱根湯本駅徒歩すぐで川沿いの部屋食が自慢の「箱根水明荘」を徹底特集。おひとりさま歓迎の贅沢ステイガイド。',
  keywords: '一人旅 温泉 部屋食,おひとりさま 温泉宿,草津温泉 望雲 一人旅,四万温泉 豊島屋 部屋食,箱根 ひとり旅 部屋食',
  openGraph: {
    title: '【おひとりさま部屋食温泉宿】夕食・朝食をお部屋で贅沢に！誰にも邪魔されない極上おこもりひとり旅宿 厳選3選',
    description: '「周りの目を気にせず、浴衣のままマイペースに部屋食を楽しみたい」「静寂の中で名湯をひとり占めしたい」というソロトラベラーへ。草津温泉の老舗「望雲」、四万川の清流を望む「四万温泉 豊島屋」、箱根湯本駅徒歩すぐで川沿いの部屋食が自慢の「箱根水明荘」を徹底特集。おひとりさま歓迎の贅沢ステイガイド。',
    url: 'https://croud-travel.pages.dev/solo-room-dining-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【おひとりさま部屋食温泉宿】夕食・朝食をお部屋で贅沢に！誰にも邪魔されない極上おこもりひとり旅宿 厳選3選',
    description: '「周りの目を気にせず、浴衣のままマイペースに部屋食を楽しみたい」「静寂の中で名湯をひとり占めしたい」というソロトラベラーへ。草津温泉の老舗「望雲」、四万川の清流を望む「四万温泉 豊島屋」、箱根湯本駅徒歩すぐで川沿いの部屋食が自慢の「箱根水明荘」を徹底特集。おひとりさま歓迎の贅沢ステイガイド。',
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
    datePublished: '2026-09-11T02:20:00+09:00',
    dateModified: '2026-09-11T02:20:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/solo-room-dining-retreat-onsen-stay',
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
        <span className="text-stone-700 font-medium">ひとり旅・おこもり温泉特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【おひとりさま部屋食温泉宿】夕食・朝食をお部屋で贅沢に！誰にも邪魔されない極上おこもりひとり旅宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>ひとり旅・おこもり温泉特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【おひとりさま部屋食温泉宿】夕食・朝食をお部屋で贅沢に！誰にも邪魔されない極上おこもりひとり旅宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          「周りの目を気にせず、浴衣のままマイペースに部屋食を楽しみたい」「静寂の中で名湯をひとり占めしたい」というソロトラベラーへ。草津温泉の老舗「望雲」、四万川の清流を望む「四万温泉 豊島屋」、箱根湯本駅徒歩すぐで川沿いの部屋食が自慢の「箱根水明荘」を徹底特集。おひとりさま歓迎の贅沢ステイガイド。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            気兼ねなく浴衣で寛ぐ夕餉と、誰にも邪魔されない名湯のぬくもり——大人のひとり旅を豊かに満たす「部屋食×おこもり名宿」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            誰かと予定を合わせる気遣いから解放され、行きたい時にふらりと出かける「温泉ひとり旅」。日常の喧騒やデジタルデバイスから離れ、自分のペースで湯に浸かり、思い思いの読書や瞑想に耽る時間は現代人にとって最高の贅沢です。しかし、ひとり旅で最も気になるのが「お食事処での周囲の視線」。グループや家族連れが談笑するダイニングでは、少し落ち着かないと感じる方も少なくありません。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな大人のソロトラベラーの理想を叶えるのが、「夕朝食のお部屋食（または完全個室）」を提供する名旅館です。客室に運ばれるできたての旬会席を、地酒を傾けながら好きな体勢でゆっくりと味わう至福。本記事では、楽天トラベルで実際に高評価を獲得し、おひとりさま受け入れに定評のある関東近郊の極上温泉宿3選をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4904/4904.jpg"
                alt="草津温泉　望雲"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.65 点（1346件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  草津の名湯「西の河原」「万代鉱」の2源泉を掛け流し！大人の一人旅プランが充実した創業四百有余年の名宿
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  草津温泉 望雲 —— 湯畑徒歩3分の高台に佇む静寂の宿。旬の和会席をお部屋で堪能する上質ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">草津を代表する希少な2つの源泉を引湯した趣異なる3つの大浴場</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ph2前後の強酸性で知られる草津温泉の中でも、「西の河原源泉」と「万代鉱源泉」の贅沢な引き比べが可能。深夜・早朝もゆったり湯浴みを楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">おひとりさま歓迎！四季折々の旬菜を盛り込んだ部屋食会席</p>
                    <p className="text-xs text-stone-600 leading-relaxed">上州牛や高原野菜、旬の日本海鮮魚を彩り豊かに仕上げた本格和会席。仲居さんが客室へ運んでくれるため、寛いだ気分のままマイペースに美食を堪能できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">湯畑から徒歩3分の好立地ながら、館内は驚くほど静寂な木造日本建築</p>
                    <p className="text-xs text-stone-600 leading-relaxed">名勝「西の河原公園」にも徒歩すぐ。湯畑の賑わいを楽しんだ後は、手入れの行き届いた日本庭園を眺めながら静かな夜を過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.65点。「一人旅で利用しましたが、スタッフの距離感が絶妙で心地よく、部屋食も温かい状態で一品ずついただけて大満足でした」「源泉掛け流しのお湯が素晴らしく、静かにリフレッシュできました」とソロ客からも絶賛の声が寄せられています。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 群馬県吾妻郡草津町433-1</p>
                  <p>🚆 ＪＲ吾妻線長野原草津口駅から車で２０分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4904"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/67434/67434.jpg"
                alt="四万温泉　豊島屋"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.5 点（983件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  奇跡の青「四万ブルー」の渓流を望む隠れ宿！自家源泉100％掛け流しと部屋食のこだわり美肌膳
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  四万温泉 豊島屋 —— 清流のせせらぎとマイナスイオンに包まれる。川沿い客室でいただく滋味豊かな里山会席
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">四万川沿いに佇み、全客室や露天風呂からエメラルドグリーンの渓流を一望</p>
                    <p className="text-xs text-stone-600 leading-relaxed">窓を開ければ川のせせらぎがBGM。自然の音だけに包まれて、都会で疲れた脳と神経を優しく解き放つことができます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">自家源泉から湧き出る毎分約200リットルの新鮮な美肌温泉</p>
                    <p className="text-xs text-stone-600 leading-relaxed">「四万の病を癒す」と称される名湯。飲泉も許可されており、体の内側からも温泉の恩恵を取り入れることができます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">群馬のブランド豚「上州麦豚」やヤマメ、山菜を味わう部屋食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地場産素材にこだわった身体に優しい会席料理。客室でゆっくり箸を進めながら、群馬の地酒とのマリアージュを楽しめます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.50点。「四万川の景色を眺めながらの部屋食は最高のご褒美」「一人でも温かくもてなしてくれて、渓流露天風呂の開放感が忘れられない」とリピーター多数。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 群馬県吾妻郡中之条町四万3887</p>
                  <p>🚆 ＪＲ吾妻線　中之条駅から関越交通バス「四万温泉行き」乗車→山口バス停下車、徒歩１分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67434"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/41468/41468.jpg"
                alt="箱根湯本温泉　箱根水明荘"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.41 点（697件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  小田急ロマンスカー箱根湯本駅から徒歩わずか2分！早川の清流を眼下に望む駅近おこもり温泉宿
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  箱根湯本温泉 箱根水明荘 —— 都心から約85分でチェックイン。渓流を望む客室で味わう月替わり本格会席
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">箱根湯本駅徒歩2分の圧倒的アクセスの良さと静寂のロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新幹線やロマンスカーで思い立ったらすぐ行ける手軽さ。駅前通りを抜け早川を渡ると、川の音だけが響く静穏な和の空間が広がります。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">四季の彩りを映す月替わりの和食会席をお部屋食で気兼ねなく</p>
                    <p className="text-xs text-stone-600 leading-relaxed">相模湾の新鮮な海の幸や足柄牛、季節の味覚を盛り込んだ会席料理。プライベートな空間で優雅な夕食を満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">早川を見下ろす展望大浴場とプライベートな貸切露天風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">アルカリ性単純温泉の優しい湯ざわり。箱根の緑と川のせせらぎに癒やされながら、何度でも湯に浸かる贅沢な時間が流れます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.41点。「駅から近くて一人旅の荷物でも楽々移動できた」「お部屋食でゆっくり地酒を飲めて、スタッフさんの対応もとても丁寧で癒やされました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 神奈川県足柄下郡箱根町湯本702</p>
                  <p>🚆 箱根湯本駅より徒歩2分、小田原厚木道路箱根口ICより約3km</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D41468"
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
              おひとりさま温泉旅を最高に楽しむ3つの心得
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. チェックインは15時ジャスト！明るいうちの「ファースト湯浴み」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                宿に着いたら荷物を置き、夕暮れ前の明るい時間帯に大浴場へ。宿泊客がまだ少ない時間帯は露天風呂を独り占めできる確率が高く、旅の開放感を一気に高められます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. デジタルデトックスと好きな本・音楽の用意
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                普段鳴り止まないスマートフォンの通知をオフにして、読みたかった文庫本や心地よい音楽を客室で楽しむのがおすすめ。頭の中のノイズが消え、深い休息が得られます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 部屋食ならではの「ご当地地酒ペアリング」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                仲居さんにその宿おすすめの地酒（冷酒や熱燗）を尋ねてオーダー。お部屋なら酔っ払ってもすぐにお布団に横になれるのが最大の特権です。
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
                <span>一人旅でも本当に部屋食プランを予約できますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、本記事でご紹介した宿はいずれも公式・楽天トラベル等でおひとりさま専用の部屋食確約プランを提供しています（時期や曜日によって設定が変わる場合がありますのでプラン詳細をご確認ください）。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人泊だと宿泊料金は割高になりますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                2名1室利用時と比べると1名あたりの料金はやや高くなりますが、最近はおひとりさま平日応援プランや、直前割引プランなどリーズナブルに泊まれる選択肢も増えています。
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
