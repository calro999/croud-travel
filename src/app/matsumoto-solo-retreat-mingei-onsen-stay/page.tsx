import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【松本ひとり旅・民芸おこもり】国宝松本城・民芸家具クラシック・美ヶ原温泉！北アルプスの麓で心を整える名宿 厳選3選',
  description: '特急あずさ・しなの直結！北アルプスの山々に抱かれた信州の学都・長野県松本市。「国宝松本城徒歩すぐ・松本民芸家具に囲まれる名門クラシックホテル」を誇る「松本ホテル花月」、美ヶ原温泉の高台から北アルプスと松本市街を一望する「信州松本 美ヶ原温泉 翔峰」、駅前で天然温泉とサウナ・名物蕎麦朝食が嬉しい「ドーミーイン松本」を徹底特集。',
  keywords: '松本 一人旅 ホテル おすすめ,松本ホテル花月 宿泊,美ヶ原温泉 翔峰 一人,松本城 ひとり旅 宿,ドーミーイン松本 温泉',
  openGraph: {
    title: '【松本ひとり旅・民芸おこもり】国宝松本城・民芸家具クラシック・美ヶ原温泉！北アルプスの麓で心を整える名宿 厳選3選',
    description: '特急あずさ・しなの直結！北アルプスの山々に抱かれた信州の学都・長野県松本市。「国宝松本城徒歩すぐ・松本民芸家具に囲まれる名門クラシックホテル」を誇る「松本ホテル花月」、美ヶ原温泉の高台から北アルプスと松本市街を一望する「信州松本 美ヶ原温泉 翔峰」、駅前で天然温泉とサウナ・名物蕎麦朝食が嬉しい「ドーミーイン松本」を徹底特集。',
    url: 'https://croud-travel.pages.dev/matsumoto-solo-retreat-mingei-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【松本ひとり旅・民芸おこもり】国宝松本城・民芸家具クラシック・美ヶ原温泉！北アルプスの麓で心を整える名宿 厳選3選',
    description: '特急あずさ・しなの直結！北アルプスの山々に抱かれた信州の学都・長野県松本市。「国宝松本城徒歩すぐ・松本民芸家具に囲まれる名門クラシックホテル」を誇る「松本ホテル花月」、美ヶ原温泉の高台から北アルプスと松本市街を一望する「信州松本 美ヶ原温泉 翔峰」、駅前で天然温泉とサウナ・名物蕎麦朝食が嬉しい「ドーミーイン松本」を徹底特集。',
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
    datePublished: '2026-09-11T03:30:00+09:00',
    dateModified: '2026-09-11T03:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/matsumoto-solo-retreat-mingei-onsen-stay',
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
        <span className="text-stone-700 font-medium">松本・城下町＆信州民芸・美肌湯特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【松本ひとり旅・民芸おこもり】国宝松本城・民芸家具クラシック・美ヶ原温泉！北アルプスの麓で心を整える名宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>松本・城下町＆信州民芸・美肌湯特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【松本ひとり旅・民芸おこもり】国宝松本城・民芸家具クラシック・美ヶ原温泉！北アルプスの麓で心を整える名宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          特急あずさ・しなの直結！北アルプスの山々に抱かれた信州の学都・長野県松本市。「国宝松本城徒歩すぐ・松本民芸家具に囲まれる名門クラシックホテル」を誇る「松本ホテル花月」、美ヶ原温泉の高台から北アルプスと松本市街を一望する「信州松本 美ヶ原温泉 翔峰」、駅前で天然温泉とサウナ・名物蕎麦朝食が嬉しい「ドーミーイン松本」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            黒漆喰と白漆喰が織りなす松本城の凛とした佇まい、街角に湧き出る清らかな井戸水——民芸のぬくもりと名湯に包まれる「松本大人のリトリート」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            新宿から特急あずさで約2時間半、名古屋から特急しなので約2時間。現存十二天守の一つであり国宝に指定されている「松本城」をシンボルとする松本は、柳宗悦が提唱した「民芸運動」の精神が今なお息づく文化都市です。中町通りの白壁土蔵、なわて通りのカエル横丁、草間彌生作品を常設展示する「松本市美術館」、そして街中随所に湧き出る北アルプスの清らかな名水「まつもと城下町湧水群」など、ひとり歩きにふさわしい静けさと美意識に満ちています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな松本でのソロステイを深みあるものにしてくれるのが、松本民芸家具が彩るクラシックホテルや、郊外の美ヶ原温泉から北アルプスを望む絶景名宿、そして駅前の天然温泉宿です。信州蕎麦や山賊焼き、信州サーモン、地酒「大信州」「真澄」を味わいながら過ごす豊かな休日。今回は松本の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/15154/15154.jpg"
                alt="松本ホテル花月"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.46 点（3704件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  創業明治20年！松本民芸家具が彩るクラシックホテル・松本城へ徒歩5分の閑静なロケーション
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  松本ホテル花月 —— 「民芸フィロソフィー」が息づく上質空間。湧水の大浴場とノスタルジックな喫茶室「八十六温館」
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">館内随所に配された落ち着きある「松本民芸家具」とステンドグラス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">木肌の温もりと職人の技が光る設え。大人のひとり旅を優雅に包み込むノスタルジックな美しさです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">松本城へ徒歩5分・湧水がこんこんと湧く井戸が立つホテル前広場</p>
                    <p className="text-xs text-stone-600 leading-relaxed">早朝の澄んだ空気の中での松本城散歩に最適。名水を味わいながら静かな城下町の風情を堪能できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名水で淹れる本格ネルドリップ珈琲が自慢のレトロ喫茶「八十六温館」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">木漏れ日が差し込むクラシカルな空間。文庫本を片手に至福の読書時間を過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.46点。「民芸家具が醸し出す雰囲気が最高で、一人で本を読みながらのんびり過ごせました」「松本城もすぐで朝の散歩が気持ちよかった」と文化系ソロ旅から絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 長野県松本市大手4-8-9</p>
                  <p>🚆 松本駅送迎あり◆要予約／松本ＢＴより「信州大学行バス」で約８分上土下車／ＪＲ松本駅より徒歩１５分／松本ＩＣより車で１０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D15154"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/38930/38930.jpg"
                alt="信州松本　美ヶ原温泉　翔峰"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.63 点（3105件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  美ヶ原温泉の高台から北アルプスと松本市街を一望！5つ星の宿認定の本格温泉旅館
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  信州松本 美ヶ原温泉 翔峰 —— 圧倒的なパノラマビュー。開放感あふれる展望露天風呂と信州の味覚を味わう会席料理
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">西側に北アルプスの山並みと松本盆地の夜景を見渡すパノラマ露天風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">弱アルカリ性の柔らかい温泉。夕暮れに赤く染まる山々と街の明かりを眺めながらの入浴は格別です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">一人旅プランも充実！信州牛や山菜、川魚を盛り込んだ本格和会席</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地元の旬の恵みを丁寧な技で仕上げた料理。誰にも邪魔されず信州の地酒とともに優雅に味わえます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">松本駅前からの無料送迎バス運行でアクセスもスムーズ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">城下町の観光を満喫した後は、郊外の静かな温泉宿へチェックイン。贅沢なおこもりステイが叶います。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.63点。「露天風呂からの北アルプスの眺めが圧巻！お料理も美味しくスタッフの接客も完璧でした」「自分への最高のご褒美旅行になりました」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 長野県松本市里山辺527</p>
                  <p>🚆 ＪＲ　松本駅から車で20分／松本駅前バスターミナルより美ヶ原温泉行きのバスで20分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D38930"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/67799/67799.jpg"
                alt="天然温泉　梓の湯　ドーミーイン松本"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.45 点（4528件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR松本駅アルプス口徒歩3分！自家源泉の天然温泉大浴場＆高温サウナ・名物「信州蕎麦」朝食
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 梓の湯 ドーミーイン松本 —— 駅近の温泉オアシス。水風呂サウナと夜鳴きそば完備の王道ビジホ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">天然温泉大浴場「梓の湯」＆ドライサウナ・しっかり冷えた水風呂完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">無色透明の天然温泉が旅の疲れを心地よく解きほぐします。サウナでしっかりととのって熟睡できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">信州蕎麦やわさびご飯、信州の郷土料理が並ぶ人気の朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から打ち立ての香り高い信州蕎麦を堪能。観光の一日を元気にスタートできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">松本駅アルプス口からすぐの好立地でアルピコ交通バスターミナルも徒歩圏内</p>
                    <p className="text-xs text-stone-600 leading-relaxed">上高地や安曇野方面へのアクセス拠点としても最適。チェックイン前後の荷物預けもスムーズです。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.45点。「松本駅近で天然温泉とサウナに入れて最高」「朝食の信州蕎麦が美味しく、夜鳴きそばのサービスも嬉しかった」と安定の人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 長野県松本市深志2丁目2-1</p>
                  <p>🚆 ■ＪＲ松本駅【お城口】より徒歩5分、駅前大通り沿い右側　■長野自動車道 松本ICより１５分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67799"
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
              松本の城下町と湧水・クラフトを一人で巡るモデル散策コース
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 国宝松本城の内堀と天守閣を朝イチ（8:30開門）でじっくり見学
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                五重六階の現存最古の天守。急な階段を登り切った最上階からは、北アルプスと松本の街並みが一望できます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 中町通りの蔵造りカフェと松本民芸家具ショップ巡り
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                白と黒のなまこ壁が美しい通り。木工クラフト店や器ギャラリーで、自分だけのお気に入りのお土産探し。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. まつもと城下町湧水群（源智の井戸等）で清らかな名水を汲む
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                環境省の名水百選に選ばれる名水。持参した水筒やタンブラーに冷たい湧水を汲んで街歩きのお供にするのが松本流です。
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
                <span>松本駅から美ヶ原温泉や上高地への移動はどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                美ヶ原温泉へは松本駅前バスターミナルから路線バスで約20分（翔峰等の無料送迎あり）。上高地へは松本電鉄上高地線とシャトルバスで約1時間半でアクセスできます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で入りやすい信州蕎麦や居酒屋はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                駅前や中町通り、なわて通り周辺の蕎麦店（野麦、弁天、みよ田など）は一人客が非常に多く、カウンター席で気軽に手打ち蕎麦や蕎麦前を楽しめます。
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
