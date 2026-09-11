import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【仙台出張＆ご褒美ひとり旅】仙台駅近・天然温泉サウナ・牛タン美食！疲れを癒やす杜の都の極上ホテル 厳選3選',
  description: '東北最大のメガターミナル・仙台！「杜の都の高層パノラマと最高峰クラブラウンジ」を誇る「ウェスティンホテル仙台」、仙台駅西口徒歩すぐで天然温泉大浴場とサウナ・夜鳴きそば完備の「ドーミーイン仙台駅前」、中欧プラハを思わせるクラシック温泉スパ付き「ホテルモントレ仙台」を徹底特集。',
  keywords: '仙台 出張 ホテル 温泉,仙台 一人旅 ホテル おすすめ,ウェスティンホテル仙台 宿泊,ドーミーイン仙台駅前 サウナ,ホテルモントレ仙台 スパ',
  openGraph: {
    title: '【仙台出張＆ご褒美ひとり旅】仙台駅近・天然温泉サウナ・牛タン美食！疲れを癒やす杜の都の極上ホテル 厳選3選',
    description: '東北最大のメガターミナル・仙台！「杜の都の高層パノラマと最高峰クラブラウンジ」を誇る「ウェスティンホテル仙台」、仙台駅西口徒歩すぐで天然温泉大浴場とサウナ・夜鳴きそば完備の「ドーミーイン仙台駅前」、中欧プラハを思わせるクラシック温泉スパ付き「ホテルモントレ仙台」を徹底特集。',
    url: 'https://croud-travel.pages.dev/sendai-solo-business-onsen-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【仙台出張＆ご褒美ひとり旅】仙台駅近・天然温泉サウナ・牛タン美食！疲れを癒やす杜の都の極上ホテル 厳選3選',
    description: '東北最大のメガターミナル・仙台！「杜の都の高層パノラマと最高峰クラブラウンジ」を誇る「ウェスティンホテル仙台」、仙台駅西口徒歩すぐで天然温泉大浴場とサウナ・夜鳴きそば完備の「ドーミーイン仙台駅前」、中欧プラハを思わせるクラシック温泉スパ付き「ホテルモントレ仙台」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/sendai-solo-business-onsen-gourmet-stay',
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
        <span className="text-stone-700 font-medium">仙台・出張＆天然温泉・牛タン特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【仙台出張＆ご褒美ひとり旅】仙台駅近・天然温泉サウナ・牛タン美食！疲れを癒やす杜の都の極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>仙台・出張＆天然温泉・牛タン特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【仙台出張＆ご褒美ひとり旅】仙台駅近・天然温泉サウナ・牛タン美食！疲れを癒やす杜の都の極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          東北最大のメガターミナル・仙台！「杜の都の高層パノラマと最高峰クラブラウンジ」を誇る「ウェスティンホテル仙台」、仙台駅西口徒歩すぐで天然温泉大浴場とサウナ・夜鳴きそば完備の「ドーミーイン仙台駅前」、中欧プラハを思わせるクラシック温泉スパ付き「ホテルモントレ仙台」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            定禅寺通のケヤキ並木と伊達政宗の美意識、芳ばしい牛タンの炭火香——杜の都で仕事の疲れを溶かす「仙台・天然温泉＆美食ステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東北新幹線「はやぶさ」で東京から最短約1時間30分。東北地方の経済・文化の中心都市である仙台は、出張やひとり旅の目的地として圧倒的な人気を誇ります。名物の厚切り牛タン焼き、三陸産の獲れたて牡蠣や戻り鰹、銘酒「浦霞」「一ノ蔵」など、夜の国分町や駅周辺の横丁には大人の好奇心をそそる食文化が咲き誇っています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな仙台での滞在を格上げするのが、駅近でありながら本格的な「天然温泉」や「高層クラブラウンジ」を備えたハイクオリティホテルです。日中の商談や視察の疲れを手足を伸ばせる湯船とサウナでじっくり解きほぐし、翌朝は宮城名物「笹かまぼこ」や「ずんだ餅」が並ぶ豪華朝食でエネルギーを補給。今回は出張・ひとり旅に最適な仙台の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/107740/107740.jpg"
                alt="ウェスティンホテル仙台"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.46 点（1549件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  仙台トラストタワー高層階！地上約180mの天空から仙台市街と太平洋を一望する最高峰ラグジュアリー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ウェスティンホテル仙台 —— 杜の都のスカイラインを独り占め。「ヘブンリーベッド」が約束する至上の眠りとクラブラウンジ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室が26〜36階の高層階に位置し、息をのむパノラマビューが広がる天空空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大きなピクチャーウィンドウから蔵王連峰や仙台の夜景を一望。ゆったりとした広さの客室で優雅なひとり時間を満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">「雲の上の寝心地」と称される特製ヘブンリーベッドを全室に完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">独自のポケットコイルマットレスと上質リネン。出張の緊張や移動の疲労を翌朝までに完全にリセットしてくれます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">専任スタッフがもてなすエグゼクティブラウンジと一流のフィットネスジム</p>
                    <p className="text-xs text-stone-600 leading-relaxed">カクテルタイムには上質なシャンパンやオードブルを提供。静けさに包まれたラウンジで贅沢な読書やPCワークが可能です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.46点。「お部屋からの夜景が圧巻で、ヘブンリーベッドの寝心地が本当に素晴らしい」「スタッフの対応が洗練されており、仙台出張のご褒美として定宿にしています」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 宮城県仙台市青葉区一番町1-9-1</p>
                  <p>🚆 ＪＲ仙台駅より徒歩9分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D107740"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/57055/57055.jpg"
                alt="天然温泉　萩の湯　ドーミーイン仙台駅前（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.2 点（5733件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR仙台駅西口から徒歩約5分！男女別天然温泉大浴場＆水風呂サウナ・名物夜鳴きそば完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 萩の湯 ドーミーイン仙台駅前 —— 新幹線改札すぐ。天然温泉とサウナ、宮城の郷土料理朝食で整う王道ビジホ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">手足を伸ばして温まれる天然温泉大浴場「萩の湯」＆本格高温サウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">旅の疲れをじんわり癒やす本格温泉。キンキンに冷えた水風呂とととのいスペースで出張のストレスを解消できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">夜の無料あっさり醤油ラーメン「夜鳴きそば」＆湯上がりアイスサービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">国分町で飲んだ後のシメにも大人気。一人でも気軽に立ち寄れる嬉しいおもてなしが揃っています。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">牛タンカレーや笹かま、ずんだ餅が並ぶ大人気の朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">宮城のご当地グルメを朝から堪能。活力をチャージして翌日の商談や観光へ出発できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.20点。「駅近で天然温泉とサウナに入れるのがありがたい」「朝食の牛タンカレーが美味しく、夜鳴きそばも安定の美味しさでした」と出張族に絶大な安心感。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 宮城県仙台市青葉区本町1-5-38</p>
                  <p>🚆 JR仙台駅西口より徒歩約5分。東北道宮城ＩＣより１５分。仙台空港線で約３０分。高速バス停留所より徒歩２分。駅前通沿い。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D57055"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/19512/19512.jpg"
                alt="ホテルモントレ仙台"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.4 点（4932件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  中欧プラハの街並みをイメージしたクラシカルホテル！最上階の本格天然温泉スパ＆ラウンジ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルモントレ仙台 —— 仙台駅西口徒歩3分。ヨーロッパの薫り漂う館内と天然温泉「サラ・テレナ」
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階17階に広がる本格天然温泉スパ「サラ・テレナ」（露天風呂・サウナ完備）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">スカイビューを望む展望風呂。ヨーロッパのスパリゾートを思わせる優雅な空間で心身をリフレッシュできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">アンティーク調の家具やステンドグラスが彩る重厚で上品な客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">落ち着いた色調のインテリアと静かな客室。女性ひとり旅や大人の落ち着いた出張に心地よい空間です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">仙台駅前のペデストリアンデッキ至近で移動のストレスがゼロ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新幹線や地下鉄、空港アクセス線へのアクセスが抜群。駅前名店街での牛タン巡りやお土産探しにも最適です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.40点。「クラシックな館内がとても素敵で、最上階の温泉スパが最高に気持ちよかった」「仙台駅から近くて一人でも安心して過ごせました」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 宮城県仙台市青葉区中央4-1-8</p>
                  <p>🚆 JR仙台駅西口より徒歩3分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D19512"
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
              仙台の夜をひとり旅で満喫するスマートグルメガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 牛タンは「定食」だけでなく「単品＋地酒」で楽しむ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                麦飯・テールスープ付きの定食はもちろん、カウンター割烹で牛タンたたきや茹でたんを宮城の辛口純米酒と合わせるのがツウの楽しみ方です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 壱弐参（いろは）横丁や文化横丁のディープなはしご酒
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                昭和レトロな雰囲気が残る横丁には、カウンター5〜6席の小さな隠れ家バーや小料理屋が密集。気さくな店主との会話を楽しめます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 翌朝は青葉城址（仙台城跡）の伊達政宗公騎馬像へ早朝散歩
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                広瀬川を見下ろす高台からのパノラマ展望。朝の澄んだ空気の中で仙台の街並みと太平洋を一望できます。
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
                <span>仙台空港から市内ホテルまでのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                仙台空港アクセス線を使えば、空港から仙台駅まで最速約17分で直結。主要ホテルはいずれも駅から徒歩数分圏内のため非常にスムーズです。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で気軽に入れる牛タンの名店はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                仙台駅構内の「牛たん通り」や駅周辺の有名店（善治郎、利久、司、伊達の牛たん本舗など）は全店カウンター席を備えており、一人客が日常的に多数利用しています。
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
