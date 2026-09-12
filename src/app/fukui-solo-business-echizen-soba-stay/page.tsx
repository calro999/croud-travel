import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【福井出張＆越前美食ひとり旅】北陸新幹線福井駅前・マリオット最新開業・天然温泉大浴場！越前おろしそばとソースカツ丼を満喫する極上宿 厳選3選',
  description: '北陸新幹線延伸で東京から直結・恐竜王国＆ものづくりの街「福井」！「2024年開業・福井駅前広場正面の最新最高峰」の「コートヤード・バイ・マリオット福井」、福井駅西口徒歩1分で露天風呂付き大浴場とサウナが自慢の「福井マンテンホテル駅前」、駅前大浴場付き「ホテルルートイン福井駅前」を徹底特集。',
  keywords: '福井 出張 ホテル おすすめ,福井 一人旅 ホテル,コートヤードバイマリオット福井 宿泊,福井マンテンホテル駅前 サウナ,福井 越前そば ホテル',
  openGraph: {
    title: '【福井出張＆越前美食ひとり旅】北陸新幹線福井駅前・マリオット最新開業・天然温泉大浴場！越前おろしそばとソースカツ丼を満喫する極上宿 厳選3選',
    description: '北陸新幹線延伸で東京から直結・恐竜王国＆ものづくりの街「福井」！「2024年開業・福井駅前広場正面の最新最高峰」の「コートヤード・バイ・マリオット福井」、福井駅西口徒歩1分で露天風呂付き大浴場とサウナが自慢の「福井マンテンホテル駅前」、駅前大浴場付き「ホテルルートイン福井駅前」を徹底特集。',
    url: 'https://croud-travel.pages.dev/fukui-solo-business-echizen-soba-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【福井出張＆越前美食ひとり旅】北陸新幹線福井駅前・マリオット最新開業・天然温泉大浴場！越前おろしそばとソースカツ丼を満喫する極上宿 厳選3選',
    description: '北陸新幹線延伸で東京から直結・恐竜王国＆ものづくりの街「福井」！「2024年開業・福井駅前広場正面の最新最高峰」の「コートヤード・バイ・マリオット福井」、福井駅西口徒歩1分で露天風呂付き大浴場とサウナが自慢の「福井マンテンホテル駅前」、駅前大浴場付き「ホテルルートイン福井駅前」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/fukui-solo-business-echizen-soba-stay',
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
        <span className="text-stone-700 font-medium">福井・北陸新幹線延伸＆越前そば・サウナ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【福井出張＆越前美食ひとり旅】北陸新幹線福井駅前・マリオット最新開業・天然温泉大浴場！越前おろしそばとソースカツ丼を満喫する極上宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>福井・北陸新幹線延伸＆越前そば・サウナ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【福井出張＆越前美食ひとり旅】北陸新幹線福井駅前・マリオット最新開業・天然温泉大浴場！越前おろしそばとソースカツ丼を満喫する極上宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          北陸新幹線延伸で東京から直結・恐竜王国＆ものづくりの街「福井」！「2024年開業・福井駅前広場正面の最新最高峰」の「コートヤード・バイ・マリオット福井」、福井駅西口徒歩1分で露天風呂付き大浴場とサウナが自慢の「福井マンテンホテル駅前」、駅前大浴場付き「ホテルルートイン福井駅前」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            新幹線が拓く新たな未来と、一乗谷朝倉氏遺跡に薫る武士の誇り——大根おろしの辛みが弾ける越前そばと名湯に整う「福井プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北陸新幹線の金沢〜敦賀間延伸開業により、東京から乗り換えなし約2時間50分で直結した福井県福井市。眼鏡枠や化学繊維、電子部品など世界シェアを誇るものづくり企業が集結し、出張ビジネス都市としての注目度が劇的に跳ね上がっています。日中の仕事を終えた後の夜の楽しみは、福井最大の歓楽街「順化（片町）」でのグルメ探訪。ピリッと辛い大根おろし出汁をぶっかける伝統の「越前おろしそば」、ウスターソースが染みた薄切りカツの「ソースカツ丼」、冬の味覚の王者「越前ガニ」、そして名酒「黒龍」「梵」が迎えてくれます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな福井出張を最高に快適にしてくれるのが、新幹線延伸に合わせて駅前に誕生した世界的ホテルブランドや、手足を伸ばせる露天風呂大浴場・サウナを備えた宿です。駅前広場の恐竜モニュメントを横目にスムーズにチェックインし、サウナでととのって名物グルメへ。今回は出張・ひとり旅に最適な福井の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/189079/189079.jpg"
                alt="コートヤード・バイ・マリオット福井"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.4 点（335件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  2024年開業！JR福井駅西口徒歩2分・コートヤード・バイ・マリオットが手がける北陸最新のハイクラスホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  コートヤード・バイ・マリオット福井 —— 福井駅前の新たなランドマーク。洗練されたモダン空間と福井食材のオールデイダイニング
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札から徒歩2分！再開発ビル「FUKUMACHI BLOCK」上層階の最高立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">雨や雪の日も地下街やアーケードでスムーズにアクセス。出張の機動力にこれ以上ない利便性を誇ります。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室35㎡以上のゆとりある客室設計と最新のシモンズ製特注ベッド</p>
                    <p className="text-xs text-stone-600 leading-relaxed">越前和紙や伝統工芸の美意識を取り入れたインテリア。高速Wi-Fi完備で快適なテレワークを約束します。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">福井の地魚や郷土料理をモダンにアレンジした朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ライブキッチンで仕上げる卵料理や越前そば。朝から上質なエネルギーをチャージできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.40点。「新しくて部屋が広く、福井駅前でダントツにラグジュアリーでした」「スタッフの対応も洗練されており、出張利用に最高峰のホテル」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 福井県福井市中央1-3-5</p>
                  <p>🚆 ■JR福井駅西口から徒歩2分。　■北陸自動車道 福井インターチェンジから車で約15分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D189079"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/151361/151361.jpg"
                alt="福井マンテンホテル駅前（マンテンホテルグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.35 点（1952件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR福井駅西口徒歩1分！宿泊者専用の大浴場（露天風呂・男性高温サウナ・水風呂）完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  福井マンテンホテル駅前 —— 駅近の温浴オアシス。手足を伸ばせる大浴場と郷土の小鉢バイキング朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">手足を伸ばして浸かれる広々とした大浴場＆男性用高温サウナ・水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">外気を感じる露天風呂スペース。出張の移動や商談で凝り固まった肩や足を心地よくリフレッシュできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">福井駅西口ロータリーすぐの好立地で荷物預けもチェックインもスムーズ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">えちぜん鉄道や福井鉄道の乗り場もすぐ。市内外への移動に抜群のフットワークです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">福井県産コシヒカリと郷土小鉢が並ぶ大満足の和洋朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝からヘルシーで栄養満点の朝ごはん。一日の仕事へ元気に出発できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.35点。「駅前すぐで大浴場とサウナがあるのが本当にありがたい」「お部屋も清潔でベッドも快適、福井出張の定宿です」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 福井県福井市中央1-11-1</p>
                  <p>🚆 ＪＲ　福井駅　西口より徒歩にて約１分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D151361"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/68681/68681.jpg"
                alt="ホテルルートイン福井駅前"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 3.93 点（1578件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR福井駅西口徒歩2分！男女別大浴場「旅人の湯」完備の安定したビジネスホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルルートイン福井駅前 —— 駅前の安心拠点。ラジウム人工温泉大浴場と無料朝食バイキング
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">旅の疲れをじんわり癒やす男女別大浴場「旅人の湯」完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">深夜2時まで入浴可能。遅い時間のチェックインでも足を伸ばしてお風呂に入れます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">機能的なワークデスクと無料Wi-Fi、加湿空気清浄機を全室に完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">出張のPC作業もスムーズ。静音性に優れた客室でぐっすり熟睡できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ヨーロッパ直輸入の焼きたてパンや和洋惣菜が並ぶ無料朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">宿泊者全員に無料提供される朝食。出張の朝をしっかりサポートします。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価3.93点。「駅から近くて大浴場もあり、コストパフォーマンスが良い」「安定のルートインクオリティで安心感がありました」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 福井県福井市大手2-1-14</p>
                  <p>🚆 JR福井駅より徒歩約2分／北陸自動車道　福井インターよりお車で約10分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D68681"
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
              福井の二大ソウルフード「越前そば＆ソースカツ丼」を一人で制覇する歩き方
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 「ヨーロッパ軒総本店」で名物ソースカツ丼（カツ丼セット）を食す
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                大正時代発祥の元祖。薄く叩いた豚肉に目の細かいパン粉をまぶしてカラッと揚げ、秘伝の甘辛ウスターソースを潜らせた逸品。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 挽きぐるみの黒いそばに辛味大根の絞り汁をかける「越前おろしそば」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                強いコシと豊かな蕎麦の香り。冷たい出汁と大根おろし、削り節、ネギが三位一体となった福井県民のソウルフード。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夜は順化（片町）の割烹で名酒「黒龍」「梵」と日本海の地魚刺身
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                全国の地酒ファンを魅了する福井の銘酒。きめ細やかな口当たりが、白身魚や甘エビの旨味を極上に引き立てます。
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
                <span>北陸新幹線の福井駅は「かがやき」も停車しますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、最速達列車の「かがやき」および「はくたか」が全列車停車し、東京方面から乗り換えなしで一直線にアクセスできます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で恐竜博物館や永平寺へ行くアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                福井駅東口から永平寺直行バス「永平寺ライナー（約30分）」が運行しており、勝山の恐竜博物館へはえちぜん鉄道勝山永平寺線と直通バスで手軽に行けます。
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
