import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【沖縄・那覇ひとり旅＆ワーケーション】オーシャンビュー・絶景露天温泉・国際通り至近！仕事と癒やしを両立するリゾート宿 厳選3選',
  description: '羽田・成田・関空から直行便で約2時間半！沖縄の青い海と島風を感じながら、心豊かに働く＆休む「大人のソロワーケーション」。飛行機が頭上をかすめる絶景天然温泉「琉球温泉 瀬長島ホテル」、国際通りのど真ん中で美濃焼タイルとライブラリーが彩る「JR九州ホテル ブラッサム那覇」、泊港の海を望みアートとハーバービューが融合する「ホテル アンテルーム 那覇」を徹底特集。',
  keywords: '那覇 一人旅 ホテル おすすめ,沖縄 ワーケーション ホテル,瀬長島ホテル 温泉 一人,ブラッサム那覇 宿泊,アンテルーム那覇 ワーケーション',
  openGraph: {
    title: '【沖縄・那覇ひとり旅＆ワーケーション】オーシャンビュー・絶景露天温泉・国際通り至近！仕事と癒やしを両立するリゾート宿 厳選3選',
    description: '羽田・成田・関空から直行便で約2時間半！沖縄の青い海と島風を感じながら、心豊かに働く＆休む「大人のソロワーケーション」。飛行機が頭上をかすめる絶景天然温泉「琉球温泉 瀬長島ホテル」、国際通りのど真ん中で美濃焼タイルとライブラリーが彩る「JR九州ホテル ブラッサム那覇」、泊港の海を望みアートとハーバービューが融合する「ホテル アンテルーム 那覇」を徹底特集。',
    url: 'https://croud-travel.pages.dev/okinawa-naha-solo-workation-ocean-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【沖縄・那覇ひとり旅＆ワーケーション】オーシャンビュー・絶景露天温泉・国際通り至近！仕事と癒やしを両立するリゾート宿 厳選3選',
    description: '羽田・成田・関空から直行便で約2時間半！沖縄の青い海と島風を感じながら、心豊かに働く＆休む「大人のソロワーケーション」。飛行機が頭上をかすめる絶景天然温泉「琉球温泉 瀬長島ホテル」、国際通りのど真ん中で美濃焼タイルとライブラリーが彩る「JR九州ホテル ブラッサム那覇」、泊港の海を望みアートとハーバービューが融合する「ホテル アンテルーム 那覇」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/okinawa-naha-solo-workation-ocean-stay',
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
        <span className="text-stone-700 font-medium">沖縄・那覇＆ソロワーケーション・絶景温泉特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【沖縄・那覇ひとり旅＆ワーケーション】オーシャンビュー・絶景露天温泉・国際通り至近！仕事と癒やしを両立するリゾート宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>沖縄・那覇＆ソロワーケーション・絶景温泉特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【沖縄・那覇ひとり旅＆ワーケーション】オーシャンビュー・絶景露天温泉・国際通り至近！仕事と癒やしを両立するリゾート宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          羽田・成田・関空から直行便で約2時間半！沖縄の青い海と島風を感じながら、心豊かに働く＆休む「大人のソロワーケーション」。飛行機が頭上をかすめる絶景天然温泉「琉球温泉 瀬長島ホテル」、国際通りのど真ん中で美濃焼タイルとライブラリーが彩る「JR九州ホテル ブラッサム那覇」、泊港の海を望みアートとハーバービューが融合する「ホテル アンテルーム 那覇」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            碧く輝く東シナ海と心地よい潮風、夕暮れのサンセット——PCを開きながら南国の非日常に浸る「沖縄・那覇ソロワーケーション」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            寒さや都会の喧騒を抜け出し、年中温暖な南の島へ。那覇空港からゆいレールで約10〜15分というアクセスの良さを誇る那覇は、ひとり旅やワーケーションの拠点として日本屈指の人気を誇ります。午前中はホテルの高速Wi-Fiと開放的なラウンジで集中してリモートワークをこなし、午後は美ら海を眺めながらカフェで読書、夕暮れには絶景の天然温泉に浸かって水平線に沈む夕日を眺める……。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな理想のワーク＆ライフスタイルを叶えるのが、充実した作業環境とリゾートならではのリラクゼーションを兼ね備えた最新ホテルです。夜は国際通りや栄町のディープな酒場でオリオンビールと島料理を味わい、地元の人々と語り合う。日常を劇的にリセットしてくれる那覇・瀬長島の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/139989/139989.jpg"
                alt="琉球温泉　瀬長島ホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.49 点（1279件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  那覇空港から車で約10分！東シナ海のサンセットと飛行機の離着陸を望む絶景天然温泉「龍神の湯」
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  琉球温泉 瀬長島ホテル —— 空と海が交差するアイランドリゾート。立ち湯露天風呂とウミカジテラス直結の至極ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地下1,000mから湧出する天然温泉「龍神の湯」（深さ120cmの絶景立ち湯露天）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">目の前に広がる青い海と空。頭上を飛行機がダイナミックに通過する圧巻の景色を眺めながら名湯に浸かれます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">白壁のショップやカフェが立ち並ぶ「瀬長島ウミカジテラス」へ徒歩すぐ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">沖縄のサントリーニ島と呼ばれる人気スポット。テラス席で海風を感じながらのPCワークやランチに最適です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室オーシャンビューまたはエアポートビューの開放感あふれるモダン客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">バルコニー付きの客室で優雅なひとり時間。夕方には水平線が茜色に染まる感動のサンセットを独り占めできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.49点。「立ち湯露天風呂からの夕日と飛行機の景色が感動的で、一人で何時間でも過ごせました」「ウミカジテラスもすぐで最高のワーケーションになりました」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 沖縄県豊見城市字瀬長174-5</p>
                  <p>🚆 那覇空港よりお車にて約15分/ 路線バスで約20分　那覇空港‐赤嶺駅‐瀬長島ホテル前</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D139989"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/160939/160939.jpg"
                alt="ＪＲ九州ホテル　ブラッサム那覇"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.58 点（611件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  国際通りまで徒歩1分！沖縄の伝統美とモダンが融合した上質空間＆最上階プレミアムラウンジ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  JR九州ホテル ブラッサム那覇 —— 観光・食事・ワークのすべてを叶える最高の拠点。沖縄の光と風を感じる快適ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">国際通りへ徒歩1分・美栄橋駅徒歩5分の抜群のフットワーク</p>
                    <p className="text-xs text-stone-600 leading-relaxed">周辺には沖縄そば店、ステーキハウス、カフェが多数。仕事の合間の食事や買い物にも困りません。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階13階に位置する宿泊者専用のライブラリーラウンジ＆テラス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">沖縄関連の書籍やアートに囲まれた静寂な空間。コーヒーを片手に集中してテレワークを行えます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">沖縄の空と海をイメージした青と琉球ガラスの爽やかな客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">全室バストイレ別のゆとりある設計。シモンズ製ベッドと大型デスクで快適な仕事と睡眠を両立できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.58点。「国際通りすぐで立地が最高なのに、館内は静かでラウンジでのPC作業が非常に捗りました」「お部屋も広く朝食も美味しくて一人旅の定宿です」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 沖縄県那覇市牧志2丁目16番１号</p>
                  <p>🚆 那覇空港よりタクシーで約15分、ゆいレール　美栄橋駅より徒歩にて約５分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D160939"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/177913/177913.jpg"
                alt="ホテル　アンテルーム那覇"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.35 点（420件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  泊港（とまりん）すぐ！全室ハーバービューのモダンアートホテル＆海風を感じるルーフトップバー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテル アンテルーム 那覇 —— 現代アートと港町が交差するクリエイティブ空間。海を眺めながらインスピレーションを得る滞在
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室が泊港のハーバービュー！窓辺のデイベッドから海と船の往来を一望</p>
                    <p className="text-xs text-stone-600 leading-relaxed">波の揺らめきを眺めながらのワーケーション。心地よい静けさの中でクリエイティブな思考が研ぎ澄まされます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">館内随所に新進気鋭の現代アーティストの作品が展示されたギャラリーホテル</p>
                    <p className="text-xs text-stone-600 leading-relaxed">まるで美術館に泊まっているかのような刺激的な体験。感性を刺激する大人のソロステイにぴったりです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">慶良間諸島へのフェリーターミナル「とまりん」へ徒歩圏内</p>
                    <p className="text-xs text-stone-600 leading-relaxed">週末には日帰りで渡嘉敷島や座間味島のケラマブルーの海へダイブ。ワーケーションとアイランドホッピングを両立できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.35点。「部屋の窓からの港の景色が素晴らしく、静かで仕事にとても集中できました」「アートに囲まれた空間がお洒落で、朝食のパスタやサラダも絶品」とクリエイターから大好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 沖縄県那覇市前島3丁目27番11号</p>
                  <p>🚆 ゆいレール　美栄橋駅より徒歩にて約１5分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D177913"
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
              那覇ソロワーケーションを充実させる3つのタイムマネジメント
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 朝イチ（8:00〜11:00）で一気に重要タスクを完了させる
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                涼しい朝の時間帯にホテルのラウンジや客室で集中して作業。午後の時間をまるまるリフレッシュに充てるのが理想です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 夕方はウミカジテラスや波の上ビーチで夕日鑑賞
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                PCを閉じて海辺へ。東シナ海に沈む大きな夕日を眺めながら波音を聞くだけで、日頃のストレスが綺麗に浄化されます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夜は栄町市場のレトロな酒場でディープな島体験
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ゆいレール安里駅前の栄町市場は昭和レトロな呑み屋街。焼き餃子や沖縄おでんをつまみながら、地元の人々と乾杯できます。
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
                <span>レンタカーがなくてもワーケーションを楽しめますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、那覇市内はゆいレール（モノレール）が非常に発達しており、瀬長島へも那覇空港や赤嶺駅から直行路線バスが運行しているため、車なしでも快適に滞在・観光できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>客室のWi-Fiスピードはオンライン会議にも耐えられますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ご紹介した3ホテルはいずれも高速Wi-Fiを完備しており、ZoomやTeamsなどのビデオ会議、大容量ファイルの送受信も極めてスムーズに行えます。
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
