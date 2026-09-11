import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【札幌ひとり旅・ご褒美泊】登別カルルス温泉直送・本格ロウリュサウナ・シメパフェ巡り！大人のリフレッシュ宿 厳選3選',
  description: '「北の大地で美味いものを食べ、静かに雪や緑を眺めながら温泉に浸かりたい」。一人旅や出張で訪れる大人の札幌ステイへ。大通公園近くで登別カルルス温泉を引く和の旅館「ONSEN RYOKAN 由縁 札幌」、北海道庁旧本庁舎（赤れんが）を望む優雅な「ソラリア西鉄ホテル札幌」、ススキノ至近でセルフロウリュサウナが自慢の「天然温泉 プレミアホテル-CABIN-札幌」を徹底特集。',
  keywords: '札幌 一人旅 ホテル おすすめ,札幌 温泉 サウナ ホテル,由縁 札幌 宿泊,ソラリア西鉄ホテル札幌 大浴場,プレミアホテルキャビン札幌 サウナ',
  openGraph: {
    title: '【札幌ひとり旅・ご褒美泊】登別カルルス温泉直送・本格ロウリュサウナ・シメパフェ巡り！大人のリフレッシュ宿 厳選3選',
    description: '「北の大地で美味いものを食べ、静かに雪や緑を眺めながら温泉に浸かりたい」。一人旅や出張で訪れる大人の札幌ステイへ。大通公園近くで登別カルルス温泉を引く和の旅館「ONSEN RYOKAN 由縁 札幌」、北海道庁旧本庁舎（赤れんが）を望む優雅な「ソラリア西鉄ホテル札幌」、ススキノ至近でセルフロウリュサウナが自慢の「天然温泉 プレミアホテル-CABIN-札幌」を徹底特集。',
    url: 'https://croud-travel.pages.dev/sapporo-solo-onsen-sauna-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【札幌ひとり旅・ご褒美泊】登別カルルス温泉直送・本格ロウリュサウナ・シメパフェ巡り！大人のリフレッシュ宿 厳選3選',
    description: '「北の大地で美味いものを食べ、静かに雪や緑を眺めながら温泉に浸かりたい」。一人旅や出張で訪れる大人の札幌ステイへ。大通公園近くで登別カルルス温泉を引く和の旅館「ONSEN RYOKAN 由縁 札幌」、北海道庁旧本庁舎（赤れんが）を望む優雅な「ソラリア西鉄ホテル札幌」、ススキノ至近でセルフロウリュサウナが自慢の「天然温泉 プレミアホテル-CABIN-札幌」を徹底特集。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・ホテル調査班',
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
    datePublished: '2026-09-11T02:30:00+09:00',
    dateModified: '2026-09-11T02:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/sapporo-solo-onsen-sauna-gourmet-stay',
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
        <span className="text-stone-700 font-medium">札幌・登別温泉直送＆シメパフェ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【札幌ひとり旅・ご褒美泊】登別カルルス温泉直送・本格ロウリュサウナ・シメパフェ巡り！大人のリフレッシュ宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>札幌・登別温泉直送＆シメパフェ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【札幌ひとり旅・ご褒美泊】登別カルルス温泉直送・本格ロウリュサウナ・シメパフェ巡り！大人のリフレッシュ宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          「北の大地で美味いものを食べ、静かに雪や緑を眺めながら温泉に浸かりたい」。一人旅や出張で訪れる大人の札幌ステイへ。大通公園近くで登別カルルス温泉を引く和の旅館「ONSEN RYOKAN 由縁 札幌」、北海道庁旧本庁舎（赤れんが）を望む優雅な「ソラリア西鉄ホテル札幌」、ススキノ至近でセルフロウリュサウナが自慢の「天然温泉 プレミアホテル-CABIN-札幌」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            登別の名湯のぬくもりと、セルフロウリュの心地よい蒸気——すすきのの夜景とシメパフェを味わう「大人の札幌おこもりステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            四季折々の表情を見せる大通公園、歴史ある赤れんが庁舎、そして全国の食通を唸らせる海の幸やラーメン、スープカレー、そして夜の文化「シメパフェ」。札幌はひとり旅の目的地として国内屈指の魅力を誇ります。街がコンパクトにまとまっており、地下街が発達しているため、雨や雪の日でも傘をささずに快適に名所やグルメ店を巡ることができます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そして札幌ステイの醍醐味は、都会にいながら本格的な「天然温泉」や「サウナ」を満喫できるハイレベルなホテルが揃っていること。名湯・登別カルルス温泉から毎日タンクローリーで運ばれる湯に浸かり、本格的なセルフロウリュサウナで汗を流す。湯上がりにはアイスや北海道クラフトビールを味わい、夜のパフェバーへ繰り出す……そんな贅沢すぎる大人の休日を叶える厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/179353/179353.jpg"
                alt="ＯＮＳＥＮ　ＲＹＯＫＡＮ　由縁　札幌"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.52 点（623件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  植物園の緑を望む静寂の和モダン空間！名湯「登別カルルス温泉」を運ぶ露天風呂とサウナ完備の現代旅館
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ONSEN RYOKAN 由縁 札幌 —— 大通公園徒歩すぐ。旅館の温もりとホテルの利便性が融合した大人の隠れ家
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">北海道屈指の名湯「登別カルルス温泉」から毎日運湯される本格天然温泉</p>
                    <p className="text-xs text-stone-600 leading-relaxed">美肌と保温効果に優れた名湯。外気を感じる露天風呂や落ち着いた間接照明の内湯で、極上の湯浴みを楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">木と石の温もりが心地よい和風客室（靴を脱いで寛ぐ畳敷きの空間）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">北海道の自然素材を取り入れたミニマルで美しいデザイン。一人でも落ち着きと安らぎを感じられる設計です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">北海道の旬素材を丁寧に焼き上げる「夏下冬上 札幌」の和朝食御膳</p>
                    <p className="text-xs text-stone-600 leading-relaxed">道産米の炊きたてご飯と焼き魚、出汁の効いた味噌汁。身体が喜ぶ丁寧な朝食が旅の朝を豊かに彩ります。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.52点。「札幌の街中にいることを忘れるほど静かで、登別の温泉とサウナが最高でした」「スタッフさんの気配りも素晴らしく、一人で贅沢な時間を過ごせました」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 北海道札幌市中央区北1条西7-6</p>
                  <p>🚆 JR札幌駅・地下鉄さっぽろ駅から徒歩約13分／地下鉄大通駅から徒歩約8分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D179353"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/180441/180441.jpg"
                alt="ソラリア西鉄ホテル札幌"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.49 点（692件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR札幌駅徒歩約5分！道庁旧本庁舎（赤れんが）を望む絶景ロケーションと広々大浴場・フレンチ朝食ビュッフェ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ソラリア西鉄ホテル札幌 —— 駅近の上質シティホテル。庭園風呂大浴場と北海道産食材を味わうライブキッチン
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">窓から北海道庁旧本庁舎の庭園の緑や紅葉、雪景色を一望できる好立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">歴史ある赤れんが庁舎を眼下に眺める贅沢。札幌駅からも地下通路経由でアクセスしやすく冬でも安心です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地下1階に広がる宿泊者専用のスタイリッシュな大浴場（内湯・外気浴）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">庭園を眺めながらゆったり足を伸ばせる大浴場。旅や出張の疲れを心地よくリフレッシュできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">道産牛のローストビーフや海鮮丼が並ぶ大人気の朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">フレンチシェフが腕を振るうこだわりのモーニング。北海道の豊かな食の恵みを朝から存分に堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.49点。「札幌駅から近くて道庁の景色が綺麗、大浴場も清潔で言うことなし」「朝食のレベルが非常に高く、一人でも落ち着いて食べられました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 北海道札幌市中央区北4条西5-1-2</p>
                  <p>🚆 北海道庁前の好立地／ＪＲ札幌駅南口より徒歩５分／地下鉄南北線さっぽろ駅から徒歩2分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D180441"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/50747/50747.jpg"
                alt="天然温泉プレミアホテル―ＣＡＢＩＮ―札幌"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.2 点（3087件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  すすきの徒歩すぐ！天然温泉100％の「すすきの天然温泉」とサウナー垂涎のセルフロウリュサウナ・地下水水風呂
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 プレミアホテル-CABIN-札幌 —— 自家源泉の本格天然温泉。サウナシュラン仕様の本格ととのい空間
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地下から湧き出る鉄分豊富な良質な自家源泉天然温泉大浴場</p>
                    <p className="text-xs text-stone-600 leading-relaxed">体の芯から温まる塩化物泉。露天風呂や気泡風呂など多彩な浴槽で湯巡り気分を楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">白樺のアロマ水でセルフロウリュができる本格フィンランドサウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">サウナー絶賛の本格サウナ室。キンキンに冷えた地下水かけ流しの水風呂と屋上気分の外気浴でディープにととのえます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">すすきのの繁華街・ラーメン横丁・パフェバーへ徒歩すぐの好アクセス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜遅くまでジンギスカンやシメパフェを楽しんでも、すぐに歩いてホテルへ戻り温泉に入れます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.20点。「サウナのクオリティが札幌トップクラス。セルフロウリュと水風呂が最高でした」「すすきのの飲み歩きの拠点として最強の温泉宿」とサウナファン・一人旅に大人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 北海道札幌市中央区南5条西7丁目5-2</p>
                  <p>🚆 JR『札幌駅』南口よりタクシーで10分、地下鉄南北線「すすきの駅」4番出口より徒歩7分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D50747"
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
              札幌の夜文化「シメパフェ」をひとり旅で楽しむ3つのコツ
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 狙い目は開店直後（18:00〜19:00）または深夜23:00以降
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                飲み会終わりの21:00〜22:30頃は行列がピークになります。少し時間をずらすと待ち時間なしでスムーズに入店できます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 季節の北海道産フルーツとお酒（ウイスキー・リキュール）のペアリング
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                シメパフェ専門店ではパフェとお酒のマリアージュが定番。余市ウイスキーやクラフトジンを合わせると大人の味を楽しめます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. ホテルに戻ったら大浴場でしっかり体を温めて就寝
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                冷たいパフェを食べた後は、ホテルの温泉や大浴場で温まってからふかふかのベッドへ。最高の睡眠が得られます。
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
                <span>冬の時期は雪道でスーツケースを引くのが大変ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                札幌駅〜大通〜すすきの間は「チ・カ・ホ（札幌駅前通地下歩行空間）」や地下街「ポールタウン」が直結しており、真冬の吹雪や積雪時でも地上に出ずに移動できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人でジンギスカンやスープカレーのお店に入りやすいですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                札幌のスープカレー店や人気ジンギスカン店（だるま等）はカウンター席が充実しており、一人客の割合が非常に高いので気兼ねなく美味しい食事を楽しめます。
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
