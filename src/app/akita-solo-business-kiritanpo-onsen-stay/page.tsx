import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【秋田出張＆美酒ひとり旅】秋田駅直結・天然温泉大浴場・比内地鶏きりたんぽ鍋！酒どころ秋田を満喫する極上ホテル 厳選3選',
  description: '秋田新幹線こまち停車・北東北の美酒王国「秋田」！「JR秋田駅直結で快適なワーク環境を誇る」の「ホテルメトロポリタン秋田」、最上階に自家源泉の天然温泉大浴場と夜鳴きそば完備の「中通温泉 こまちの湯 ドーミーイン秋田」、千秋公園のお堀端に佇む格式ある迎賓館「秋田キャッスルホテル」を徹底比較。',
  keywords: '秋田 出張 ホテル おすすめ,秋田 一人旅 ホテル,ドーミーイン秋田 温泉,ホテルメトロポリタン秋田 宿泊,秋田 きりたんぽ ホテル',
  openGraph: {
    title: '【秋田出張＆美酒ひとり旅】秋田駅直結・天然温泉大浴場・比内地鶏きりたんぽ鍋！酒どころ秋田を満喫する極上ホテル 厳選3選',
    description: '秋田新幹線こまち停車・北東北の美酒王国「秋田」！「JR秋田駅直結で快適なワーク環境を誇る」の「ホテルメトロポリタン秋田」、最上階に自家源泉の天然温泉大浴場と夜鳴きそば完備の「中通温泉 こまちの湯 ドーミーイン秋田」、千秋公園のお堀端に佇む格式ある迎賓館「秋田キャッスルホテル」を徹底比較。',
    url: 'https://croud-travel.pages.dev/akita-solo-business-kiritanpo-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【秋田出張＆美酒ひとり旅】秋田駅直結・天然温泉大浴場・比内地鶏きりたんぽ鍋！酒どころ秋田を満喫する極上ホテル 厳選3選',
    description: '秋田新幹線こまち停車・北東北の美酒王国「秋田」！「JR秋田駅直結で快適なワーク環境を誇る」の「ホテルメトロポリタン秋田」、最上階に自家源泉の天然温泉大浴場と夜鳴きそば完備の「中通温泉 こまちの湯 ドーミーイン秋田」、千秋公園のお堀端に佇む格式ある迎賓館「秋田キャッスルホテル」を徹底比較。',
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
    datePublished: '2026-09-12T15:40:00+09:00',
    dateModified: '2026-09-12T15:40:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/akita-solo-business-kiritanpo-onsen-stay',
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
        <span className="text-stone-700 font-medium">秋田・出張＆きりたんぽ・天然温泉特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【秋田出張＆美酒ひとり旅】秋田駅直結・天然温泉大浴場・比内地鶏きりたんぽ鍋！酒どころ秋田を満喫する極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>秋田・出張＆きりたんぽ・天然温泉特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【秋田出張＆美酒ひとり旅】秋田駅直結・天然温泉大浴場・比内地鶏きりたんぽ鍋！酒どころ秋田を満喫する極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          秋田新幹線こまち停車・北東北の美酒王国「秋田」！「JR秋田駅直結で快適なワーク環境を誇る」の「ホテルメトロポリタン秋田」、最上階に自家源泉の天然温泉大浴場と夜鳴きそば完備の「中通温泉 こまちの湯 ドーミーイン秋田」、千秋公園のお堀端に佇む格式ある迎賓館「秋田キャッスルホテル」を徹底比較。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            久保田城跡の千秋公園を彩る四季の彩りと、比内地鶏の黄金出汁が香るきりたんぽ鍋——酒どころ秋田で五感を潤す「秋田プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            秋田新幹線「こまち」で東京から乗り換えなし約3時間半。豊かな米と清らかな伏流水に恵まれた日本屈指の酒どころ・秋田県秋田市。日中の商談や官公庁・工場への訪問を終えた後の夜の楽しみは、歓楽街「川反（かわばた）」や中通の割烹でのグルメ探訪。比内地鶏のガラから取った極上出汁で煮込む「きりたんぽ鍋」、ツルリとした喉越しの「稲庭うどん」、燻した香りがたまらない「いぶりがっこ」とチーズ、そして「新政」「雪の茅舎」「一白水成」など全国の酒通が垂涎する美酒の数々が迎えてくれます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな秋田での出張を最高のリフレッシュに変えてくれるのが、駅直結の圧倒的なフットワークや、天然温泉大浴場と本格サウナを備えた宿です。新幹線の時間ギリギリまで客室で快適に仕事を進め、夜は名湯と地酒で英気を養う。今回は秋田駅周辺の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1476/1476.jpg"
                alt="ホテルメトロポリタン秋田"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.5 点（3134件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR秋田駅直結・新幹線改札から徒歩1分！駅ビル「トピコ」直結で天候に左右されない圧倒的アクセス
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルメトロポリタン秋田 —— 秋田駅直結のフラッグシップ。ノースウィングの最新モダン客室と秋田美食モーニング
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新幹線改札を出て雨や雪の日でも傘なしで直結チェックイン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">荷物が多い出張でも移動のストレスがゼロ。駅ナカで秋田土産や地酒の購入もスムーズです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">機能的なライティングデスクとシモンズ製ベッドを完備した快適空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">高速Wi-Fi完備で出張のテレワークやオンライン会議も快適。静音性に優れ熟睡できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">秋田県産あきたこまちの炊きたてご飯と郷土料理が並ぶ朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">じゅんさいやいぶりがっこ、比内地鶏たまごかけご飯など、朝から秋田の豊かな食文化を体感できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.50点。「新幹線改札からすぐで本当に便利でした。お部屋も綺麗でスタッフの対応も一流」「朝食が美味しく出張の定宿です」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 秋田県秋田市中通7-2-1</p>
                  <p>🚆 ＪＲ秋田新幹線秋田駅西口から徒歩で1分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1476"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/50775/50775.jpg"
                alt="中通温泉　こまちの湯　ドーミーイン秋田（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.45 点（9152件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR秋田駅西口徒歩5分！最上階11階の天然温泉大浴場「こまちの湯」＆水風呂付きサウナ・名物夜鳴きそば
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  中通温泉 こまちの湯 ドーミーイン秋田 —— 中通の天然温泉オアシス。サウナでととのい、川反の酒場へ繰り出す安心ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に広がる男女別天然温泉大浴場「こまちの湯」＆露天風呂・サウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ナトリウム塩化物泉の温まりの湯。サウナでしっかりととのって出張の疲れを完全リフレッシュ。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」や湯上がりアイス、乳酸菌飲料の無料サービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">川反で日本酒ときりたんぽを楽しんだ後のシメに最適。一人旅でも温かく迎えてくれる安心感です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">だまこ汁や稲庭うどん、いぶりがっこが並ぶご当地朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から秋田の郷土の味を満喫。エネルギーを満タンにして一日の仕事へ出発できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.45点。「天然温泉とサウナがあって出張の疲れが完全に取れました」「川反の飲食店街にも歩いて行けて立地も最高」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 秋田県秋田市中通2-3-1</p>
                  <p>🚆 天然温泉大浴場と高温サウナに水風呂完備！朝食はだまこ鍋や稲庭うどん等の郷土料理も召し上がれます！秋田駅より徒歩約8分！</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D50775"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/588/588.jpg"
                alt="秋田キャッスルホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.47 点（1468件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  千秋公園（久保田城跡）のお堀端に佇む名門ホテル！広々とした客室と伝統のフランス料理・中国料理
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  秋田キャッスルホテル —— 歴史と品格が息づく迎賓館。お堀の緑を望む落ち着いた空間と地元食材の美味
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">久保田城址の千秋公園に面した閑静なロケーションで朝の散歩に最適</p>
                    <p className="text-xs text-stone-600 leading-relaxed">四季折々の美しいお堀の景観。街の喧騒を離れ、静かな大人の時間を過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ゆとりある客室設計と熟練のホテルスタッフによるきめ細やかなおもてなし</p>
                    <p className="text-xs text-stone-600 leading-relaxed">エグゼクティブの出張や落ち着いた一人旅にふさわしい気品ある佇まいです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">秋田県産食材をふんだんに取り入れたレストランでの贅沢なディナー＆朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">老舗ならではの上質な料理。外に出ずとも本格的な美食を優雅に堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.47点。「お堀の景色が綺麗で部屋も広く、スタッフの接客がとても丁寧でした」「落ち着いて静かに過ごせる素晴らしいホテル」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 秋田県秋田市中通1-3-5</p>
                  <p>🚆 秋田駅から徒歩7分／秋田空港からリムジンバス40分「木内前」下車（秋田駅西口の次）／秋田自動車道秋田中央ICから10分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D588"
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
              秋田「川反」の夜を一人旅で満喫する美酒グルメガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 川反（かわばた）の居酒屋で「きりたんぽ小鍋」と比内地鶏の焼き鳥
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                一人前用の小鍋で提供してくれる名店が多数。鶏ガラの旨味が染み込んだきりたんぽとセリの根っこのシャキシャキ感が絶品。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 秋田の銘酒（新政・雪の茅舎・春霞）の利き酒セットをオーダー
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                美酒王国・秋田の地酒を少量ずつ飲み比べ。芳醇な旨口からキレのある辛口まで、お米の個性を味わう贅沢。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 翌朝は千秋公園（久保田城跡）の御隅櫓（おすみやぐら）まで朝散歩
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                佐竹公20万石の城跡。展望室から秋田市街や遠く鳥海山を望む清々しい朝のウォーキング。
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
                <span>秋田空港から秋田駅やホテルへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                秋田空港から秋田駅直行リムジンバスが航空便に合わせて運行しており、約35〜40分で秋田駅西口へアクセスできます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で稲庭うどんを食べられる有名店はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                秋田駅前やトピコ内に「無限堂」や「佐藤養助」などの直営店があり、カウンター席で一人でも気軽に本場の手綯い稲庭うどんを味わえます。
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
