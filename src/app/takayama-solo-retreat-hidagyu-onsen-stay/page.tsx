import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/takayama-solo-retreat-hidagyu-onsen-stay/" },
  title: '【飛騨高山ひとり旅・小京都おこもり】古い町並み徒歩すぐ・飛騨牛にぎり・美肌のとろとろ温泉！飛騨の匠の技に抱かれる極上宿 厳選3選',
  description: '特急ひだ直結・江戸の風情を今に残す「飛騨の小京都」岐阜県高山市！「宮川中橋すぐ・ミシュラン掲載の極上おもてなしとお部屋食」を誇る最高峰「本陣平野屋 花兆庵」、総檜造り・自家源泉の重曹泉がとろとろの「飛騨亭 花扇」、高山駅徒歩3分で最上階に展望露天風呂を備えた「スパホテルアルピナ飛騨高山」を徹底特集。',
  keywords: '飛騨高山 一人旅 宿,本陣平野屋花兆庵 宿泊,飛騨亭花扇 一人,飛騨高山 温泉 おこもり,飛騨牛 ホテル 一人旅',
  openGraph: {
    title: '【飛騨高山ひとり旅・小京都おこもり】古い町並み徒歩すぐ・飛騨牛にぎり・美肌のとろとろ温泉！飛騨の匠の技に抱かれる極上宿 厳選3選',
    description: '特急ひだ直結・江戸の風情を今に残す「飛騨の小京都」岐阜県高山市！「宮川中橋すぐ・ミシュラン掲載の極上おもてなしとお部屋食」を誇る最高峰「本陣平野屋 花兆庵」、総檜造り・自家源泉の重曹泉がとろとろの「飛騨亭 花扇」、高山駅徒歩3分で最上階に展望露天風呂を備えた「スパホテルアルピナ飛騨高山」を徹底特集。',
    url: 'https://croud-travel.pages.dev/takayama-solo-retreat-hidagyu-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【飛騨高山ひとり旅・小京都おこもり】古い町並み徒歩すぐ・飛騨牛にぎり・美肌のとろとろ温泉！飛騨の匠の技に抱かれる極上宿 厳選3選',
    description: '特急ひだ直結・江戸の風情を今に残す「飛騨の小京都」岐阜県高山市！「宮川中橋すぐ・ミシュラン掲載の極上おもてなしとお部屋食」を誇る最高峰「本陣平野屋 花兆庵」、総檜造り・自家源泉の重曹泉がとろとろの「飛騨亭 花扇」、高山駅徒歩3分で最上階に展望露天風呂を備えた「スパホテルアルピナ飛騨高山」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/takayama-solo-retreat-hidagyu-onsen-stay',
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
        <span className="text-stone-700 font-medium">飛騨高山・古い町並み＆飛騨牛おこもり特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【飛騨高山ひとり旅・小京都おこもり】古い町並み徒歩すぐ・飛騨牛にぎり・美肌のとろとろ温泉！飛騨の匠の技に抱かれる極上宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>飛騨高山・古い町並み＆飛騨牛おこもり特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【飛騨高山ひとり旅・小京都おこもり】古い町並み徒歩すぐ・飛騨牛にぎり・美肌のとろとろ温泉！飛騨の匠の技に抱かれる極上宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          特急ひだ直結・江戸の風情を今に残す「飛騨の小京都」岐阜県高山市！「宮川中橋すぐ・ミシュラン掲載の極上おもてなしとお部屋食」を誇る最高峰「本陣平野屋 花兆庵」、総檜造り・自家源泉の重曹泉がとろとろの「飛騨亭 花扇」、高山駅徒歩3分で最上階に展望露天風呂を備えた「スパホテルアルピナ飛騨高山」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            格子戸が連なる古い町並みと宮川にかかる朱塗りの中橋、囲炉裏で香る朴葉味噌と飛騨牛——小京都の静寂と名湯に身を委ねる「飛騨高山・大人の隠れ家リトリート」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            名古屋からJR特急「ひだ」で約2時間20分、富山からも特急で約1時間半。北アルプス・乗鞍岳の懐に抱かれた岐阜県高山市は、江戸時代の城下町・天領の面影を色濃く残す「さんまち通り（古い町並み）」を擁する世界的な観光地です。出格子の町家が連なり、造り酒屋の軒先に吊るされた杉玉が風に揺れ、名物の宮川朝市には地元の農家のおばあちゃんが並べる新鮮な野菜や民芸品が並びます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな飛騨高山でのソロステイを一生の思い出にしてくれるのが、日本屈指のホスピタリティを誇る高級老舗旅館や、とろりとした湯ざわりの自家源泉を持つ温泉宿です。美しいサシの入った最高級A5等級の「飛騨牛」を炭火焼きやすき焼きで味わい、名酒「蓬莱」「久寿玉」を傾ける。日常の喧騒を完全に遮断してくれる高山の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327.jpg"
                alt="飛騨高山　本陣平野屋　花兆庵"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.91 点（832件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  古い町並み・宮川中橋まで徒歩1分！楽天トラベル評価4.91点・ミシュラン掲載の日本最高峰のおもてなし旅館
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  飛騨高山 本陣平野屋 花兆庵 —— 伝統と格式の極み。お部屋食でいただく極上飛騨牛会席と専用個室スパ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">古い町並み（さんまち通り）や陣屋前朝市へ徒歩すぐの最高のロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">早朝や夜の静まり返った古い町並みを独り占め散歩。高山の情緒を最も間近に体感できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">おひとりさまでも気兼ねなくお部屋で味わう最上級A5飛騨牛の会席料理</p>
                    <p className="text-xs text-stone-600 leading-relaxed">職人が一品ずつ最高の状態で運ぶ美食。とろけるような飛騨牛の甘みを地酒とともに心ゆくまで堪能できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">女性専用の蔵の湯「りらっくす蔵」など趣豊かな温泉大浴場</p>
                    <p className="text-xs text-stone-600 leading-relaxed">白壁土蔵を改装した幻想的な空間。きめ細やかなおもてなしと静寂が大人のソロ旅を極上に彩ります。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.91点。「スタッフの皆様の温かいおもてなしが素晴らしく、お部屋食の飛騨牛が絶品でした」「一人で泊まるのが申し訳ないほど贅沢な時間でした」と感嘆の声。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 岐阜県高山市本町1-34</p>
                  <p>🚆 高山駅より徒歩10分　駅まで無料送迎：随時　車：東海北陸　高山ＩＣ～10分・中央道　松本ＩＣ～120分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8327%2F8327.html"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4711/4711.jpg"
                alt="飛騨亭　花扇"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.83 点（652件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  自家源泉から湧く「神代の湯」！神代欅や総檜を贅沢に使った木造建築ととろとろの美肌天然温泉
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  飛騨亭 花扇 —— 木のぬくもりに包まれる極上隠れ宿。庭園露天風呂と炭火会席で味わう飛騨の恵み
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地下1,200mから湧出する炭酸水素塩温泉（美容液のようなとろとろ美肌湯）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">入った瞬間に肌がツルツルになる名湯。庭園を望む露天風呂で誰にも邪魔されず長湯を楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">飛騨の匠の技を結集した欅（ケヤキ）や檜の銘木が香る館内と回廊</p>
                    <p className="text-xs text-stone-600 leading-relaxed">木造建築の圧倒的な温もり。素足で歩く畳敷きの空間が日頃の緊張を優しく解き放ちます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">個室食事処でいただく飛騨牛の炭火焼きや郷土会席料理</p>
                    <p className="text-xs text-stone-600 leading-relaxed">炭火でじっくり焼き上げる香ばしい飛騨牛。飛騨の旬野菜や地酒とともに贅沢なひとときを過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.83点。「温泉がお湯というより化粧水のようにとろとろで感動しました」「木の香りと素晴らしいお料理に癒やされ、最高のリトリートになりました」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 岐阜県高山市本母町411-1</p>
                  <p>🚆 ＪＲ高山駅より車で10分。東海北陸自動車道　高山ICより5分。長野自動車道　松本ICより90分。バス送迎有要予約。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4711%2F4711.html"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/72686/72686.jpg"
                alt="スパホテルアルピナ飛騨高山"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.36 点（3647件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR高山駅西口徒歩3分！最上階9階の展望自家源泉大浴場＆露天風呂から北アルプスと高山市街を一望
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  スパホテルアルピナ飛騨高山 —— 駅近のナチュラル温泉ホテル。焼きたてパン朝食と爽快な展望温泉
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階9階に位置する自家源泉の天然温泉大浴場＆開放的な展望露天風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">遮るもののない高山盆地の眺望。北アルプスの山並みを眺めながら手足を伸ばして温泉に浸かれます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">高山駅徒歩3分・古い町並みへも徒歩10分程度の抜群のフットワーク</p>
                    <p className="text-xs text-stone-600 leading-relaxed">駅近の快適さと観光の利便性を両立。一人旅の拠点としてこれ以上なく機能的です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ホテル内で焼き上げるサクサクの焼きたてクロワッサン朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から香ばしいパンの香りに包まれる幸せ。美味しいコーヒーとともに清々しい朝をスタートできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.36点。「最上階の露天風呂がとても気持ちよく、眺めも最高でした」「駅近で清潔感があり、一人旅に本当に使いやすいホテル」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 岐阜県高山市名田町5-41</p>
                  <p>🚆 ＪＲ高山駅より徒歩3分、中部縦貫道高山ICより車で10分。高山陣屋（朝市）徒歩5分、古い町並徒歩7分、コンビニ徒歩30秒</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72686%2F72686.html"
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
              飛騨高山の古い町並みと朝市を一人旅で味わい尽くす散策術
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 宮川朝市（午前7:00〜12:00）で朝採れ果物とみたらし団子
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                川沿いに白いテントが連なる日本三大朝市。素朴な醤油味のみたらし団子を片手に、地元の人々との温かな会話を楽しむ。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. さんまち通りで「飛騨牛にぎり寿司」の食べ歩き＆酒蔵の試飲
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                煎餅をお皿にした飛騨牛の炙り握り。老舗酒蔵「舩坂酒造店」などでお猪口を買って地酒のコインサーバー試飲を楽しむ。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 高山陣屋で日本唯一現存する江戸幕府の郡代役所を見学
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                広い畳敷きの大広間やお白州。江戸時代の地方行政の舞台を静かに見学しながら歴史の重みに浸る。
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
                <span>冬の飛騨高山は雪が多いですか？足元はどうすべきですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                12月下旬〜3月上旬は積雪があり、防寒具と滑り止め付きのブーツやスノーシューズが必要です。ただし町並みの主要歩道は融雪装置が整備されており、雪景色の古い町並みは息をのむ美しさです。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で飛騨牛ステーキや朴葉味噌焼きを食べられるお店はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                「丸明」や「味蔵天国」「キッチン飛騨」など有名店は一人客用のカウンター席やテーブル席を備えており、一人でも気兼ねなく最高等級の飛騨牛を堪能できます。
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
                href="/prefectures/hyogo"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                兵庫県の宿・温泉
              </Link>
              <Link
                href="/prefectures/mie"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gunma"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                群馬県の宿・温泉
              </Link>
              <Link
                href="/prefectures/saga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                佐賀県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
