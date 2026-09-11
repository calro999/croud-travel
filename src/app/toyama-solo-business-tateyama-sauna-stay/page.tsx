import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【富山出張＆立山連峰ビュー】富山駅近・天然温泉サウナ・白えび美食！「天然の生簀」富山湾を味わう極上宿 厳選3選',
  description: '北陸新幹線で東京から約2時間8分！富山湾の神秘と雄大な立山連峰が抱く街・富山。「全館畳敷きで天然温泉大浴場と海鮮いくら朝食」を誇る「御宿 野乃富山」、展望大浴場サウナと立山連峰パノラマビューが自慢の老舗「富山マンテンホテル」、富山駅前至近の「ホテルグランテラス富山」を徹底特集。',
  keywords: '富山 出張 ホテル サウナ,富山 一人旅 ホテル おすすめ,御宿野乃富山 朝食,富山マンテンホテル 大浴場,富山駅 温泉 ホテル',
  openGraph: {
    title: '【富山出張＆立山連峰ビュー】富山駅近・天然温泉サウナ・白えび美食！「天然の生簀」富山湾を味わう極上宿 厳選3選',
    description: '北陸新幹線で東京から約2時間8分！富山湾の神秘と雄大な立山連峰が抱く街・富山。「全館畳敷きで天然温泉大浴場と海鮮いくら朝食」を誇る「御宿 野乃富山」、展望大浴場サウナと立山連峰パノラマビューが自慢の老舗「富山マンテンホテル」、富山駅前至近の「ホテルグランテラス富山」を徹底特集。',
    url: 'https://croud-travel.pages.dev/toyama-solo-business-tateyama-sauna-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【富山出張＆立山連峰ビュー】富山駅近・天然温泉サウナ・白えび美食！「天然の生簀」富山湾を味わう極上宿 厳選3選',
    description: '北陸新幹線で東京から約2時間8分！富山湾の神秘と雄大な立山連峰が抱く街・富山。「全館畳敷きで天然温泉大浴場と海鮮いくら朝食」を誇る「御宿 野乃富山」、展望大浴場サウナと立山連峰パノラマビューが自慢の老舗「富山マンテンホテル」、富山駅前至近の「ホテルグランテラス富山」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/toyama-solo-business-tateyama-sauna-stay',
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
        <span className="text-stone-700 font-medium">富山・出張＆立山連峰・白えびサウナ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【富山出張＆立山連峰ビュー】富山駅近・天然温泉サウナ・白えび美食！「天然の生簀」富山湾を味わう極上宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>富山・出張＆立山連峰・白えびサウナ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【富山出張＆立山連峰ビュー】富山駅近・天然温泉サウナ・白えび美食！「天然の生簀」富山湾を味わう極上宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          北陸新幹線で東京から約2時間8分！富山湾の神秘と雄大な立山連峰が抱く街・富山。「全館畳敷きで天然温泉大浴場と海鮮いくら朝食」を誇る「御宿 野乃富山」、展望大浴場サウナと立山連峰パノラマビューが自慢の老舗「富山マンテンホテル」、富山駅前至近の「ホテルグランテラス富山」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            雪を戴く立山連峰の神々しい峰々と、富山湾の宝石「白えび」の透き通る甘み——名水と名湯に癒やされる「富山プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北陸新幹線「かがやき」で一直線。薬産業をはじめとするものづくり企業やアルミニウム産業が集結する日本海側の産業拠点・富山。北アルプス・立山連峰の雪解け水がもたらすミネラル豊富な地下水と、「天然の生簀」と呼ばれる富山湾の豊かな漁場が育んだ食文化は日本屈指のクオリティを誇ります。名物の白えび、紅ズワイガニ、寒ブリ、ホタルイカなど、季節ごとに旬の海の幸が旅人を迎えます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな富山ステイの魅力は、移動の疲れを極限まで洗い流す「サウナー御用達の大浴場」や「全館畳敷きの温泉旅館」が中心街に揃っていること。立山連峰を見渡すスカイスパや高温ドライサウナでととのい、夜は富山駅前や総曲輪（そうがわ）の居酒屋で地酒「満寿泉」「立山」に酔いしれる。今回は出張・ひとり旅に最適な富山の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/153267/153267.jpg"
                alt="天然温泉　剱の湯　御宿　野乃富山（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.49 点（2213件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  総曲輪通りすぐ！全館畳敷きの和の温もりと自家源泉の天然温泉「剱の湯」・海鮮丼朝食バイキング
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 剱の湯 御宿 野乃富山 —— ドーミーイン和風プレミアムブランド。素足で寛ぐ贅沢と本格ドライサウナ完備
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">玄関で靴を脱ぎ、館内全域を素足や足袋でリラックスして歩ける全館畳敷き</p>
                    <p className="text-xs text-stone-600 leading-relaxed">日本旅館の落ち着きと最新ホテルの機能性が融合。出張の靴を脱いだ瞬間に極上の解放感を味わえます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ヒノキ香る天然温泉大浴場「剱の湯」＆高温ドライサウナ・しっかり冷えた水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">保温効果の高い本格天然温泉。サウナシュラン仕様のととのいスペースで心身をリセットできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">いくら盛り放題の海鮮丼や富山名物「白えびごはん」が並ぶ豪華朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から富山湾の恵みを心ゆくまで堪能。夜には名物あっさり醤油「夜鳴きそば」も無料提供されます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.49点。「全館畳敷きが本当に気持ちよく、温泉とサウナのクオリティが別格でした」「朝食の海鮮丼が美味しく、富山出張の際は必ず泊まっています」とリピーター多数。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 富山県富山市総曲輪3-9-2</p>
                  <p>🚆 富山駅より路面電車環状線「大手モール」下車徒歩2分・北陸自動車道『富山ＩＣ』出口より15分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D153267"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1032/1032.jpg"
                alt="富山マンテンホテル（マンテンホテルグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.14 点（4179件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  富山駅徒歩約10分・路面電車すぐ！最上階11階の展望大浴場と立山連峰パノラマ・本格サウナ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  富山マンテンホテル —— 北陸を代表する老舗ビジホ。手足を伸ばせる大浴場と富山の味覚を味わう朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階11階に位置する男性・女性展望大浴場＆高温サウナ・水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">白山連峰や富山市街を一望。手足を伸ばして浸かる広い湯船が出張の疲れをすっきりと癒やします。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">富山湾の海の幸を取り入れた選べる和朝食・洋朝食と郷土小鉢バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">富山米のコシヒカリやホタルイカ沖漬けなど。栄養バランスに優れた健康朝食で一日をスタートできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ホテル内に居酒屋や日本料理店、カフェを備えた充実のファシリティ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">外に出ることなくホテル内で富山の地酒と郷土料理を堪能可能。雨や雪の日も快適です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.14点。「大浴場とサウナが広くて快適、露天スペースからの風が気持ちよかった」「路面電車の電停が目の前で市内観光や食事にも便利」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 富山県富山市本町2-17</p>
                  <p>🚆 市内路面電車「南富山駅前」行で約5分、桜橋電停下車すぐ（ＪＲ富山駅より徒歩１０分）／富山ＩＣより車で１５分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1032"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1552/1552.jpg"
                alt="ホテルグランテラス富山桜橋通り（ＢＢＨホテルグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 3.89 点（2103件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR富山駅南口から徒歩約5分！桜橋通りに面した落ち着いたシティホテル＆無料マッサージチェア
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルグランテラス富山桜橋通り —— 駅近の好立地。機能的な客室と充実した無料サービスが嬉しい快適ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">富山駅前から徒歩5分のアクセスで、新幹線改札からスムーズにチェックイン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">富山地方鉄道や路面電車の乗り場も近く、市内各所の商談先へアクセス良好です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ウェルカムドリンク（コーヒー等）や客室での快適なテレワーク環境</p>
                    <p className="text-xs text-stone-600 leading-relaxed">高速Wi-Fi完備でデスクワークが快適。静かな客室で出張の夜を落ち着いて過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">富山名産を取り入れた和洋バイキング朝食と広々としたレストラン空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝からゆったりとした気分で美味しい朝ごはん。出張のパフォーマンスをしっかりと支えます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価3.89点。「駅から近くてわかりやすく、スタッフの対応も親切でした」「コスパが良く、出張の定宿として使い勝手が良い」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 富山県富山市桜橋通り2-28　</p>
                  <p>🚆 ●富山駅南口から徒歩約6分（市内路面電車「電気ビル前」正面）●富山ICから車で20分●富山空港から車で20分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1552"
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
              富山の美景と海の幸をひとり旅で満喫するスマートガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 富山市役所展望塔（無料）から3000m級の立山連峰パノラマを仰ぐ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                地上70mの無料展望台。晴れた日には富山市街の背後にそびえ立つ雪山の大パノラマが広がり、息をのむ絶景に出会えます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 富山駅前「きときと市場 とやマルシェ」で白えび天丼と地酒
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                新幹線に乗る前にも立ち寄れるグルメゾーン。「白えび亭」で揚げるサクサクの白えび天ぷら丼は富山名物の白眉です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 富山港線ライトレールに乗って岩瀬の古い廻船問屋町へ小旅行
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                富山駅から次世代型路面電車（LRT）で約25分。明治の廻船問屋の町家が残る岩瀬通りで、酒蔵「満寿泉」直営ショップやクラフトビールを楽しめます。
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
                <span>富山市内の移動は路面電車（トラム）が便利ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                富山駅を中心に環状線や富山港線など最新の低床路面電車が数分間隔で走っており、SuicaやICOCA等の交通系ICカードで市内観光や会食へスムーズに移動できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で富山湾の地魚寿司を食べられるお店はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                富山駅周辺や総曲輪エリアには「すし玉」などの有名廻転寿司店やカウンター寿司店が多く、一人客でも気兼ねなく富山湾鮨（10貫セット等）を注文できます。
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
