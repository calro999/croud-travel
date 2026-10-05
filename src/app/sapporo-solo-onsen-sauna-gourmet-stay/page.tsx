import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/sapporo-solo-onsen-sauna-gourmet-stay/" },
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
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179353%2F179353.html"
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
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180441%2F180441.html"
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
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50747%2F50747.html"
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
    
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/niigata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                新潟県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tokushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                徳島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shimane"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                島根県の宿・温泉
              </Link>
              <Link
                href="/prefectures/osaka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大阪府の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
