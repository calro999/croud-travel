import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【岡山・倉敷ひとり旅＆出張】岡山駅直結・倉敷美観地区・大浴場！白壁の街と日本庭園に癒やされる大人のおこもり宿 厳選3選',
  description: '山陽新幹線のハブステーション・岡山と、白壁土蔵が連なる風情の街・倉敷！「岡山駅直結で四国・山陰連絡にも最強のランドマーク」を誇る「ホテルグランヴィア岡山」、倉敷美観地区すぐ隣で木造クラシカルの風格を持つ「倉敷国際ホテル」、最上階に庭園大浴場を備えた「三井ガーデンホテル岡山」を徹底特集。',
  keywords: '岡山 出張 ホテル おすすめ,倉敷 一人旅 ホテル,ホテルグランヴィア岡山 宿泊,倉敷国際ホテル 美観地区,三井ガーデンホテル岡山 大浴場',
  openGraph: {
    title: '【岡山・倉敷ひとり旅＆出張】岡山駅直結・倉敷美観地区・大浴場！白壁の街と日本庭園に癒やされる大人のおこもり宿 厳選3選',
    description: '山陽新幹線のハブステーション・岡山と、白壁土蔵が連なる風情の街・倉敷！「岡山駅直結で四国・山陰連絡にも最強のランドマーク」を誇る「ホテルグランヴィア岡山」、倉敷美観地区すぐ隣で木造クラシカルの風格を持つ「倉敷国際ホテル」、最上階に庭園大浴場を備えた「三井ガーデンホテル岡山」を徹底特集。',
    url: 'https://croud-travel.pages.dev/okayama-kurashiki-solo-retreat-culture-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【岡山・倉敷ひとり旅＆出張】岡山駅直結・倉敷美観地区・大浴場！白壁の街と日本庭園に癒やされる大人のおこもり宿 厳選3選',
    description: '山陽新幹線のハブステーション・岡山と、白壁土蔵が連なる風情の街・倉敷！「岡山駅直結で四国・山陰連絡にも最強のランドマーク」を誇る「ホテルグランヴィア岡山」、倉敷美観地区すぐ隣で木造クラシカルの風格を持つ「倉敷国際ホテル」、最上階に庭園大浴場を備えた「三井ガーデンホテル岡山」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/okayama-kurashiki-solo-retreat-culture-stay',
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
        <span className="text-stone-700 font-medium">岡山・倉敷＆文化リトリート特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【岡山・倉敷ひとり旅＆出張】岡山駅直結・倉敷美観地区・大浴場！白壁の街と日本庭園に癒やされる大人のおこもり宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>岡山・倉敷＆文化リトリート特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【岡山・倉敷ひとり旅＆出張】岡山駅直結・倉敷美観地区・大浴場！白壁の街と日本庭園に癒やされる大人のおこもり宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          山陽新幹線のハブステーション・岡山と、白壁土蔵が連なる風情の街・倉敷！「岡山駅直結で四国・山陰連絡にも最強のランドマーク」を誇る「ホテルグランヴィア岡山」、倉敷美観地区すぐ隣で木造クラシカルの風格を持つ「倉敷国際ホテル」、最上階に庭園大浴場を備えた「三井ガーデンホテル岡山」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            白壁の土蔵に映る柳の影、日本三名園「後楽園」の借景——瀬戸内の温暖な風と歴史情緒に包まれる「岡山・倉敷大人のリトリート」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            山陽新幹線が全列車停車し、瀬戸大橋線（四国方面）や伯備線（山陰方面）が結節する西日本屈指の交通の要衝・岡山。そしてJRでわずか約15分の距離に広がるのが、江戸時代の天領の面影を色濃く残す「倉敷美観地区」です。大原美術館の近代絵画、倉敷川の舟流し、レトロモダンな町家カフェなど、ひとり旅の目的地としてこれ以上ない知的好奇心を刺激する要素が揃っています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな岡山・倉敷滞在を豊かに彩るのが、移動の利便性を極めた「駅直結ホテル」や、文化財の美観地区に溶け込む「名門クラシックホテル」、そして旅の疲れを癒やす「庭園大浴場」です。名物の「デミカツ丼」や「鰆（サワラ）の塩たたき」、白桃やマスカットのフルーツパフェを味わいながら過ごす上質な休日。今回は出張・ひとり旅に最適な厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/822/822.jpg"
                alt="ホテルグランヴィア岡山"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.4 点（6523件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR岡山駅直結！新幹線改札から雨に濡れずにチェックインできる西日本屈指のメガターミナルランドマーク
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルグランヴィア岡山 —— 圧倒的な利便性と格式。高層階からのパノラマビューと多彩な直営レストラン
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札・在来線改札から地下街または連絡通路で直結の最高立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">山陰・四国・広島方面への乗り継ぎ拠点としても抜群。チェックイン前後の荷物預けもスムーズです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室シモンズ社製ベッドと加湿空気清浄機を完備したゆとりある客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">高層階からは岡山城や市街地の夜景を一望。遮音性に優れ、出張の夜を静かに熟睡できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">瀬戸内の旬魚や晴れの国のお米を味わう豪華な朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ままかりや黄ニラ、鰆など岡山ならではの郷土の味が充実。出張の朝からご当地の美味を満喫できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.40点。「岡山駅直結でこれ以上便利な宿はない。お部屋も綺麗でスタッフの気配りも一流」「新幹線利用の出張ならここ一択です」と絶大な信頼。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 岡山県岡山市北区駅元町1-5</p>
                  <p>🚆 JR岡山駅直結（徒歩1分）／山陽自動車道　岡山ICより車で20分／岡山空港より車で30分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D822"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7584/7584.jpg"
                alt="倉敷国際ホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.25 点（1318件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  倉敷美観地区・大原美術館のすぐ隣！世界的版画家・棟方志功の大作板壁画が迎える歴史と気品の名門ホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  倉敷国際ホテル —— 白壁の街に溶け込む建築美。倉敷美観地区の散策に最高のロケーションと本格フレンチ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">倉敷美観地区まで徒歩わずか1分！大原美術館に隣接する閑静な特等席</p>
                    <p className="text-xs text-stone-600 leading-relaxed">早朝や夜の静まり返った美観地区を気ままに散歩。観光客のいない幻想的な白壁の街並みを独り占めできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ロビー吹き抜けに飾られた棟方志功作の巨大木版画「大世界の柵」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">名建築家・浦辺鎮太郎設計の重厚な空間。館内全体に文化とアートの香りが漂います。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">岡山・瀬戸内の厳選食材を活かしたレストラン「ウエステリア」の料理</p>
                    <p className="text-xs text-stone-600 leading-relaxed">千屋牛や瀬戸内海の旬魚を使った伝統のコース。大人のひとり旅を優雅に締めくくってくれます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.25点。「美観地区がすぐ隣で、夜と朝の静かな散歩が最高でした」「クラシカルな落ち着きがあり、棟方志功の版画も圧巻」と文化・歴史ファンから高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 岡山県倉敷市中央1-1-44</p>
                  <p>🚆 ＪＲ倉敷駅南口徒歩１０分、山陽自動車道倉敷Ｉ．Ｃから１０分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7584"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4926/4926.jpg"
                alt="三井ガーデンホテル岡山（２０２６年８月　全館リニューアルオープン）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.15 点（5709件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR岡山駅後楽園口（東口）徒歩2分！宿泊者専用の庭園大浴場と充実の地元食材モーニング
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  三井ガーデンホテル岡山 —— 駅前の上質オアシス。旅の疲れを湯で洗い流す大浴場とスタイリッシュ客室
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">緑の日本庭園を眺めながら手足を伸ばせる宿泊者専用大浴場（Garden Bath）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">駅前にありながら温泉気分でリフレッシュ。出張の疲れや観光の足のむくみをスッキリ解消できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">イオンモール岡山や飲食店街へもすぐの抜群のロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">岡山名物のえびめしやデミカツ丼の名店へも徒歩すぐ。食事や買い物に困ることはありません。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全館リニューアルでさらに磨かれた洗練のモダンデザイン客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">機能的なワークデスクと快適なベッド。一人旅にも出張にもジャストフィットする心地よさです。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.15点。「駅近で大浴場があるのが本当にありがたい」「リニューアルされてお部屋がとても綺麗で、朝食も美味しく大満足でした」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 岡山県岡山市北区駅元町1-7</p>
                  <p>🚆 JR岡山駅後楽園口（東口）より徒歩2分。岡山空港より空港リムジンバス（有料）で約30分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4926"
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
              岡山・後楽園と倉敷美観地区を巡る大人のひとり旅モデルプラン
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 午前中は日本三名園「岡山後楽園」と漆黒の「岡山城（烏城）」へ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                広大な芝生と池、茶畑が広がる回遊式庭園。旭川を挟んでそびえる黒い天守閣（烏城）とのコントラストが見事です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 午後はJRで倉敷へ移動し、倉敷川の舟流し＆倉敷アイビースクエア散策
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                船頭さんの案内で水上から見上げる白壁の土蔵。赤レンガに蔦が絡まるアイビースクエアのカフェで一息つく優雅な時間。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夜は岡山駅周辺の居酒屋で「鰆の塩たたき」と岡山の地酒「御前酒」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                岡山で鰆は生やタタキで食べるのが常識。とろけるような脂の甘みを辛口の地酒がキリリと引き締めます。
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
                <span>岡山駅から倉敷駅まではどれくらい時間がかかりますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                JR山陽本線または伯備線の普通列車で約15〜17分（運賃330円程度）で直結しており、本数も日中1時間に4〜5本あるため、非常に気軽に移動できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で果物パフェ（フルーツパフェ）を食べられるお店はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                岡山は「フルーツ王国」と呼ばれ、岡山駅構内や倉敷美観地区の町家カフェ（くらしき桃子など）にはカウンター席が多く、おひとりさまでも気兼ねなく季節の贅沢パフェを堪能できます。
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
