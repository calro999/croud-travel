import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【金沢ひとり旅・美食おこもり】近江町市場徒歩すぐ・最上階天然温泉・のどぐろ会席！加賀百万石の極上ステイ 厳選3選',
  description: '「北陸新幹線でふらりと金沢へ出かけ、静かにアートと名湯、日本海の海の幸に浸りたい」。大人ソロトラベラーへ。全館畳敷きで最上階に天然温泉大浴場といくら乗せ放題朝食を誇る「御宿 野乃 金沢」、尾山神社すぐ隣で武家屋敷の美意識を宿す「三井ガーデンホテル金沢」、金沢駅兼六園口徒歩3分で客室マッサージ機完備の「ホテルフォルツァ金沢」を徹底特集。',
  keywords: '金沢 一人旅 ホテル おすすめ,金沢 温泉 ホテル 一人,御宿野乃金沢 朝食,三井ガーデンホテル金沢 宿泊,金沢駅 ひとり旅 ホテル',
  openGraph: {
    title: '【金沢ひとり旅・美食おこもり】近江町市場徒歩すぐ・最上階天然温泉・のどぐろ会席！加賀百万石の極上ステイ 厳選3選',
    description: '「北陸新幹線でふらりと金沢へ出かけ、静かにアートと名湯、日本海の海の幸に浸りたい」。大人ソロトラベラーへ。全館畳敷きで最上階に天然温泉大浴場といくら乗せ放題朝食を誇る「御宿 野乃 金沢」、尾山神社すぐ隣で武家屋敷の美意識を宿す「三井ガーデンホテル金沢」、金沢駅兼六園口徒歩3分で客室マッサージ機完備の「ホテルフォルツァ金沢」を徹底特集。',
    url: 'https://croud-travel.pages.dev/kanazawa-solo-retreat-onsen-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【金沢ひとり旅・美食おこもり】近江町市場徒歩すぐ・最上階天然温泉・のどぐろ会席！加賀百万石の極上ステイ 厳選3選',
    description: '「北陸新幹線でふらりと金沢へ出かけ、静かにアートと名湯、日本海の海の幸に浸りたい」。大人ソロトラベラーへ。全館畳敷きで最上階に天然温泉大浴場といくら乗せ放題朝食を誇る「御宿 野乃 金沢」、尾山神社すぐ隣で武家屋敷の美意識を宿す「三井ガーデンホテル金沢」、金沢駅兼六園口徒歩3分で客室マッサージ機完備の「ホテルフォルツァ金沢」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/kanazawa-solo-retreat-onsen-gourmet-stay',
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
        <span className="text-stone-700 font-medium">金沢・ひとり旅＆天然温泉・美肌宿特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【金沢ひとり旅・美食おこもり】近江町市場徒歩すぐ・最上階天然温泉・のどぐろ会席！加賀百万石の極上ステイ 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>金沢・ひとり旅＆天然温泉・美肌宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【金沢ひとり旅・美食おこもり】近江町市場徒歩すぐ・最上階天然温泉・のどぐろ会席！加賀百万石の極上ステイ 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          「北陸新幹線でふらりと金沢へ出かけ、静かにアートと名湯、日本海の海の幸に浸りたい」。大人ソロトラベラーへ。全館畳敷きで最上階に天然温泉大浴場といくら乗せ放題朝食を誇る「御宿 野乃 金沢」、尾山神社すぐ隣で武家屋敷の美意識を宿す「三井ガーデンホテル金沢」、金沢駅兼六園口徒歩3分で客室マッサージ機完備の「ホテルフォルツァ金沢」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            格子戸に降る雪と兼六園の静寂、近江町市場の新鮮なのどぐろ——加賀百万石の美意識と名湯に抱かれる「金沢おひとりさまリトリート」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北陸新幹線「かがやき」で東京から約2時間15分。前田家加賀百万石の文化が今なお息づく金沢は、ひとり旅の目的地として圧倒的な人気を誇る街です。国の特別名勝「兼六園」や金沢城公園の四季の美景、感性を刺激する「金沢21世紀美術館」、風情ある「ひがし茶屋街」「主計町茶屋街」など、見どころが美しくコンパクトに凝縮しています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そして金沢滞在の最大の歓びは、「金沢の台所」近江町市場から届く新鮮なのどぐろ、甘エビ、加能ガニといった極上の日本海グルメと、心身を潤す「美肌の天然温泉」です。誰にも気を使わず、好きな時間に名所を巡り、湯上がりに地酒を傾ける……そんな贅沢な大人時間を叶える厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/182423/182423.jpg"
                alt="天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.55 点（1983件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  近江町市場まで徒歩1分！全館畳敷きの和の温もりと最上階13階の天然温泉大浴場・いくら盛り放題朝食
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 加賀の宝泉 御宿 野乃金沢 —— 素足で過ごす極上の心地よさ。天然温泉とご当地海鮮バイキング
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">玄関で靴を脱ぎ、館内すべてを素足や足袋で寛げる贅沢な全館畳敷き</p>
                    <p className="text-xs text-stone-600 leading-relaxed">日本旅館の情緒とホテルの利便性が融合。歩くだけで足裏から心地よい解放感を味わえます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階13階に広がる自家源泉の天然温泉大浴場＆ドライサウナ・水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">金沢の街並みを望む展望風呂。美肌効果の高いお湯とサウナで一日の散策の疲れを洗い流せます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">朝食名物「いくら盛り放題海鮮丼」や揚げたて天ぷらの豪華ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">いくら、甘エビ、ブリなどを好きなだけ乗せる贅沢丼。朝から日本海の味覚を心ゆくまで堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.55点。「全館畳敷きが本当に快適で、最上階の温泉と朝食の海鮮丼が感動レベルでした」「一人旅でも居心地がよく、近江町市場すぐで最高の立地」とリピーター続出。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 石川県金沢市下堤町1-1</p>
                  <p>🚆 JR金沢駅より徒歩15分または北鉄バス6～10番乗り場からバスで4分「武蔵が辻・近江町市場」バス停下車後徒歩1分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D182423"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/167963/167963.jpg"
                alt="三井ガーデンホテル金沢"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.58 点（836件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  尾山神社・金沢城公園すぐ！加賀友禅や金箔の美を散りばめたモダン空間と最上階展望大浴場
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  三井ガーデンホテル金沢 —— 加賀の伝統美を継承する大人の隠れ家。眺望大浴場と能登・加賀の旬を味わう和朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階13階に位置し、金沢城公園や白山連峰を望む宿泊者専用大浴場</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大きな窓から光が差し込むパノラマバス。夕暮れや朝の清々しい空気の中で優雅な湯浴みを楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">金沢の伝統工芸（金箔・加賀友禅・組子）を現代的に昇華させた客室デザイン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">細部にまで美意識が宿る落ち着いた空間。上質なベッドが心地よい眠りをサポートします。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">近江町市場や兼六園、香林坊へも徒歩圏内の静かなロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">尾山神社のステンドグラス神門が目の前。早朝の静かな境内散策に最適なロケーションです。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.58点。「大浴場からの眺望が素晴らしく、お部屋の設えも上品で落ち着けました」「観光名所へどこへでも歩いて行けて一人旅に最適でした」と大好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 石川県金沢市上堤町1-22</p>
                  <p>🚆 ＪＲ　金沢駅よりお車にて約8分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D167963"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/177000/177000.jpg"
                alt="ＦＯＲＺＡ　ホテルフォルツァ金沢"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.48 点（1006件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR金沢駅兼六園口（東口）徒歩3分！全室にマッサージ機またはフットマッサージャー完備のリフレッシュホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  FORZA ホテルフォルツァ金沢 —— 駅近の上質スマートステイ。旅の疲れをほぐす客室マッサージ＆ワインラウンジ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">金沢駅東口から徒歩3分の好立地で、雨や雪の日でもスムーズにチェックイン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新幹線改札からすぐ。チェックイン前後に荷物を預けて身軽に市内観光へ出かけられます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室に多機能マッサージチェアやフットマッサージャーを完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">兼六園や茶屋街を一日中歩き回った足を客室でじっくりケア。翌朝スッキリ目覚められます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ウェルカムドリンクのワインサービスや美味しい朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ラウンジでワインやコーヒーを片手に一息。ビジネスやひとり旅に嬉しいスマートな機能が充実しています。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.48点。「部屋にマッサージチェアがあって歩き疲れた体に最高でした」「駅近で新しく綺麗、一人で泊まるのにこれ以上ない快適さ」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 石川県金沢市安江町2-10</p>
                  <p>🚆 金沢駅より徒歩約10分。近江町市場・兼六園・金沢城・21世紀美術館など観光地へのアクセス抜群！</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D177000"
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
              金沢の美と食をひとり旅で満喫するモデルコース
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 朝イチの兼六園（早朝無料開園）で誰もいない名園を歩く
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                一般開園前の早朝は観光客がおらず静まり返り、徽軫灯籠や霞ヶ池の鏡のような水面を独り占めできます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 近江町市場で朝獲れのどぐろ塩焼きと海鮮丼
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                市場の活気を感じながら、脂の乗ったのどぐろを炭火で焼いてもらい、石川の地酒「手取川」とともに味わう至福。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夕暮れのひがし茶屋街の紅殻格子と町家カフェ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                行灯に明かりが灯る黄昏時。古い木造建築の喫茶室で抹茶と上生菓子をいただきながら静かに読書する贅沢。
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
                <span>金沢市内観光はバスと徒歩どちらが便利ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                主要な観光名所（兼六園、21世紀美術館、近江町市場、ひがし茶屋街）は中心部から半径約2km圏内にあり、徒歩や「城下まち金沢周遊バス（1日乗車券あり）」でとても効率よく回れます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>雨や雪が多いと聞きますが対策はどうすればいいですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                「弁当忘れても傘忘れるな」と言われる金沢ですが、主要ホテルでは傘の無料貸出を行っており、金沢駅前や主要通りにはアーケードや地下道が整備されています。
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
