import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【広島出張＆大人ひとり旅】広島駅直結・最上階スカイスパ・流川お好み焼き！心身をととのえる名ホテル 厳選3選',
  description: '山陽新幹線・広島空港からのアクセス至便な中国地方の要所・広島！「広島駅新幹線口直結の世界的ラグジュアリー」を誇る「シェラトングランドホテル広島」、繁華街八丁堀の真ん中で星空露天風呂とサウナを楽しむ「CANDEO HOTELS 広島八丁堀」、平和大通り近くで天然温泉大浴場が嬉しい「安芸の湯 ドーミーイン広島」を徹底特集。',
  keywords: '広島 出張 ホテル サウナ,広島 一人旅 ホテル おすすめ,シェラトングランドホテル広島 宿泊,カンデオホテルズ広島八丁堀 サウナ,ドーミーイン広島 温泉',
  openGraph: {
    title: '【広島出張＆大人ひとり旅】広島駅直結・最上階スカイスパ・流川お好み焼き！心身をととのえる名ホテル 厳選3選',
    description: '山陽新幹線・広島空港からのアクセス至便な中国地方の要所・広島！「広島駅新幹線口直結の世界的ラグジュアリー」を誇る「シェラトングランドホテル広島」、繁華街八丁堀の真ん中で星空露天風呂とサウナを楽しむ「CANDEO HOTELS 広島八丁堀」、平和大通り近くで天然温泉大浴場が嬉しい「安芸の湯 ドーミーイン広島」を徹底特集。',
    url: 'https://croud-travel.pages.dev/hiroshima-solo-business-skyspa-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【広島出張＆大人ひとり旅】広島駅直結・最上階スカイスパ・流川お好み焼き！心身をととのえる名ホテル 厳選3選',
    description: '山陽新幹線・広島空港からのアクセス至便な中国地方の要所・広島！「広島駅新幹線口直結の世界的ラグジュアリー」を誇る「シェラトングランドホテル広島」、繁華街八丁堀の真ん中で星空露天風呂とサウナを楽しむ「CANDEO HOTELS 広島八丁堀」、平和大通り近くで天然温泉大浴場が嬉しい「安芸の湯 ドーミーイン広島」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/hiroshima-solo-business-skyspa-gourmet-stay',
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
        <span className="text-stone-700 font-medium">広島・出張＆スカイスパ・お好み焼き特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【広島出張＆大人ひとり旅】広島駅直結・最上階スカイスパ・流川お好み焼き！心身をととのえる名ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>広島・出張＆スカイスパ・お好み焼き特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【広島出張＆大人ひとり旅】広島駅直結・最上階スカイスパ・流川お好み焼き！心身をととのえる名ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          山陽新幹線・広島空港からのアクセス至便な中国地方の要所・広島！「広島駅新幹線口直結の世界的ラグジュアリー」を誇る「シェラトングランドホテル広島」、繁華街八丁堀の真ん中で星空露天風呂とサウナを楽しむ「CANDEO HOTELS 広島八丁堀」、平和大通り近くで天然温泉大浴場が嬉しい「安芸の湯 ドーミーイン広島」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            川面に映る原爆ドームの静けさと、鉄板で踊るソースの香ばしい煙——瀬戸内の風を感じてととのう「広島・スカイスパ＆美食出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            山陽新幹線「のぞみ」が発着し、マツダをはじめとするものづくり産業や官公庁が集結する中国地方の中枢・広島。太田川の三角洲に発達した「水の都」でもあり、世界遺産の原爆ドームや嚴島神社（宮島）を擁する国際観光都市でもあります。夜になれば流川・薬研堀の繁華街から漂うお好み焼きのソースの香りや、瀬戸内海の旬の牡蠣、小イワシの刺身が旅人の五感を刺激します。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな広島での出張やソロステイを最高のものにするのが、「駅直結の圧倒的な機動力」や「最上階スカイスパの本格サウナ」を備えたホテル選びです。移動疲れを展望露天風呂で流し、夜は本場のお好み焼きと広島地酒「賀茂鶴」「雨後の月」に舌鼓。機能性と癒やしを両立させた広島の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/111269/111269.jpg"
                alt="シェラトングランドホテル広島"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.61 点（1546件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR広島駅新幹線口からペデストリアンデッキ直結徒歩1分！世界水準のホスピタリティと快適客室
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  シェラトングランドホテル広島 —— 新幹線を降りてすぐチェックイン。広々客室と高層階クラブラウンジで味わう極上ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札から雨に濡れずに直行できる圧倒的なアクセス環境</p>
                    <p className="text-xs text-stone-600 leading-relaxed">荷物が多い出張や遠征でもストレスゼロ。チェックイン前後に荷物を預けてスムーズに市内外へ移動できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室35㎡以上のゆとりある客室とシェラトン特製シグネチャーベッド</p>
                    <p className="text-xs text-stone-600 leading-relaxed">独立した洗い場付きバスルームと深いバスタブ。一人での滞在でも圧倒的な開放感と寛ぎを約束します。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階クラブラウンジでのアフタヌーンティー＆カクテルサービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">クラブルーム宿泊者専用の優雅な空間。広島の街並みを眺めながら優雅なアペリティフを楽しめます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.61点。「新幹線口直結で立地が最高峰。お部屋の広さとベッドの心地よさはさすがシェラトン」「スタッフの対応も完璧で、出張の定宿に決定しました」とビジネスエリートから絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 広島県広島市東区若草町12-1</p>
                  <p>🚆 広島駅新幹線口より徒歩1分　広島空港リムジンバス乗り場から徒歩1分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D111269"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/165795/165795.jpg"
                alt="ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）広島八丁堀"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.32 点（1678件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  八丁堀電停徒歩2分！最上階14階に広がる展望露天風呂「スカイスパ」とオートロウリュサウナ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  CANDEO HOTELS（カンデオホテルズ）広島八丁堀 —— 繁華街のオアシス。夜空を見上げる星空外気浴と洗練の和モダン客室
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に位置する開放感抜群の展望露天風呂「スカイスパ」＆サウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">都会の真ん中で星空を見上げながらの外気浴。サウナー絶賛の高温サウナで一日の疲れをディープにリセットできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広島の中心街「八丁堀・紙屋町」至近で飲食やショッピングに最適</p>
                    <p className="text-xs text-stone-600 leading-relaxed">お好み村や流川のグルメ街へ徒歩すぐ。夜遅くまで広島名物を堪能しても歩いて安全に帰館できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">窓際に小上がりソファ「こあがり」を配した機能的でスタイリッシュな客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">靴を脱いでリラックスできる空間。高速Wi-Fi完備でデスクワークや読書も快適にこなせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.32点。「最上階の露天風呂とサウナが本当に気持ちよく、出張の疲れが吹き飛びました」「八丁堀の中心で飲食店も多く、立地が抜群です」と大人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 広島県広島市中区八丁堀14-1</p>
                  <p>🚆 広島駅～車で約6分／市内電車：八丁堀電停～徒歩約1分/広島バスセンター・アストラムライン本通り駅～徒歩約10分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D165795"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/11381/11381.jpg"
                alt="安芸の湯　ドーミーイン広島（２０２６年５月１日リニューアルＯＰＥＮ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.35 点（5799件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  平和大通り沿い！天然温泉大浴場＆水風呂サウナ・名物夜鳴きそば完備のリニューアル美空間
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  安芸の湯 ドーミーイン広島 —— 中町・袋町すぐ。自家源泉の天然温泉と広島名物を取り入れた朝食バイキング
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">足を伸ばしてじっくり温まる天然温泉大浴場「安芸の湯」＆高温サウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">神経痛や冷え性に効果的な天然温泉。サウナと水風呂のととのいルーティンで心地よい眠りへと導かれます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物あっさり醤油ラーメン「夜鳴きそば」＆湯上がりアイスの無料提供</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ドーミーインならではの温かいおもてなし。出張の夜の小腹を優しく満たしてくれます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広島名物カキフライやお好み焼き、穴子飯が並ぶ大満足の朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地元の味覚をふんだんに取り入れた元気の出る朝ごはん。朝から広島の美食を満喫できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.35点。「温泉とサウナがあって朝食も美味しく、広島出張の際はいつも利用しています」「スタッフも親切で清潔感があり安心」と高い信頼を獲得。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 広島県広島市中区小町3－28</p>
                  <p>🚆 広島駅より広島電鉄1番広島港行き中電前駅より徒歩2分/エキまちループ白神社前より徒歩2分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D11381"
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
              広島お好み焼きをひとり旅で120％楽しむ注文のコツ
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 注文は「そば肉玉（そば・豚肉・卵）」が基本の王道
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                トッピングには「イカ天」や「ネギかけ」を追加するのが地元流。麺は「パリパリ系」か「しっとり系」か、お店ごとの個性を味わうのが醍醐味です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 皿ではなく「鉄板の上からヘラで直喰い」に挑戦
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                カウンターの鉄板前なら、ヘラを使ってハフハフと冷めないうちに食べるのが一番美味。火傷に注意しながら一口サイズに切り分けます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 翌朝は路面電車（広電）に乗って平和記念公園へ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                朝の静かな元安川沿いを散策。朝日に照らされる原爆ドームを眺めながら、平和への祈りと静かな思索の時間を過ごせます。
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
                <span>広島駅から八丁堀や繁華街まではどう移動するのが便利ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                広島駅南口から路面電車（広電）に乗れば約10分で八丁堀電停に到着します。ICOCAやSuica等の交通系ICカードがそのまま利用可能です。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>出張の合間に宮島（厳島神社）へ行く時間は取れますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                JR山陽本線を使えば広島駅から宮島口駅まで約28分、そこからフェリーで約10分（計約40分）で行けるため、午前中や夕方の半日空き時間があれば十分に参拝可能です。
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
