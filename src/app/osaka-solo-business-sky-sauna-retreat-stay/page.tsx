import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【大阪出張・梅田ご褒美泊】地上130mスカイスパ・展望サウナ・夜景クラブラウンジ完備！ビジネス＆ソロステイ 厳選3選',
  description: '西日本のビジネス中心地・大阪で、仕事の疲れを極限まで吹き飛ばし最高のインスピレーションを得る。「日本一高いインフィニティスカイスパ」を備えた最新ランドマーク「カンデオホテルズ大阪ザ・タワー」、全室高層階・英国調ラグジュアリーの極致「ホテル阪急インターナショナル」、難波のど真ん中で天然温泉とサウナを満喫する「ドーミーインPREMIUMなんばANNEX」を徹底特集。',
  keywords: '大阪 出張 ホテル サウナ,梅田 ビジネスホテル 大浴場,カンデオホテルズ大阪ザタワー サウナ,ホテル阪急インターナショナル 一人,大阪 高級ホテル 一人ステイ',
  openGraph: {
    title: '【大阪出張・梅田ご褒美泊】地上130mスカイスパ・展望サウナ・夜景クラブラウンジ完備！ビジネス＆ソロステイ 厳選3選',
    description: '西日本のビジネス中心地・大阪で、仕事の疲れを極限まで吹き飛ばし最高のインスピレーションを得る。「日本一高いインフィニティスカイスパ」を備えた最新ランドマーク「カンデオホテルズ大阪ザ・タワー」、全室高層階・英国調ラグジュアリーの極致「ホテル阪急インターナショナル」、難波のど真ん中で天然温泉とサウナを満喫する「ドーミーインPREMIUMなんばANNEX」を徹底特集。',
    url: 'https://croud-travel.pages.dev/osaka-solo-business-sky-sauna-retreat-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【大阪出張・梅田ご褒美泊】地上130mスカイスパ・展望サウナ・夜景クラブラウンジ完備！ビジネス＆ソロステイ 厳選3選',
    description: '西日本のビジネス中心地・大阪で、仕事の疲れを極限まで吹き飛ばし最高のインスピレーションを得る。「日本一高いインフィニティスカイスパ」を備えた最新ランドマーク「カンデオホテルズ大阪ザ・タワー」、全室高層階・英国調ラグジュアリーの極致「ホテル阪急インターナショナル」、難波のど真ん中で天然温泉とサウナを満喫する「ドーミーインPREMIUMなんばANNEX」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/osaka-solo-business-sky-sauna-retreat-stay',
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
        <span className="text-stone-700 font-medium">大阪・梅田出張＆スカイスパ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【大阪出張・梅田ご褒美泊】地上130mスカイスパ・展望サウナ・夜景クラブラウンジ完備！ビジネス＆ソロステイ 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>大阪・梅田出張＆スカイスパ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【大阪出張・梅田ご褒美泊】地上130mスカイスパ・展望サウナ・夜景クラブラウンジ完備！ビジネス＆ソロステイ 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          西日本のビジネス中心地・大阪で、仕事の疲れを極限まで吹き飛ばし最高のインスピレーションを得る。「日本一高いインフィニティスカイスパ」を備えた最新ランドマーク「カンデオホテルズ大阪ザ・タワー」、全室高層階・英国調ラグジュアリーの極致「ホテル阪急インターナショナル」、難波のど真ん中で天然温泉とサウナを満喫する「ドーミーインPREMIUMなんばANNEX」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            地上数十階から見下ろす水都・大阪の夜景と、吹き抜ける夜風でととのう天空サウナ——出張を最高のリフレッシュに変える「大阪極上ステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            新大阪駅や伊丹・関空からのアクセスが良く、西日本ビジネスの心臓部である大阪。連日の打ち合わせやイベント出展、商談で1日中歩き回った後は、心身ともに深い疲労が残ります。ただシャワーを浴びて寝るだけの出張では、翌日のプレゼンや判断力に十分な集中力を発揮できません。「大阪出張の夜だからこそ、圧倒的な夜景を眺めながらサウナで整いたい」「上質なベッドと静かなデスクで仕事を片付けたい」。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            近年、大阪中心部には従来のビジネスホテルの枠を大きく超えた「展望露天風呂」「本格サウナ」「高層クラブラウンジ」を備えた進化系ホテルが続々と登場しています。今回は、仕事のモチベーションを高め、極上の休息を約束してくれる梅田・中之島・難波の厳選3ホテルをご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/189020/189020.jpg"
                alt="ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）大阪ザ・タワー"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.49 点（357件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  地上約135m・日本一の高さを誇るインフィニティ天空スパ！オートロウリュサウナと大阪一望のパノラマビュー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  CANDEO HOTELS（カンデオホテルズ）大阪ザ・タワー —— 堂島浜に誕生した新ランドマーク。空に浮かぶ露天風呂とサウナシュラン仕様の極上空間
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階31階に位置する日本最高層のインフィニティ露天風呂「スカイスパ」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜空と大阪市街の摩天楼が溶け合う圧巻の眺望。まるで空に浮かんでいるかのような非日常の浮遊感を体験できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">サウナシュラン常連の本格タワーサウナ＆広々とした水風呂・外気浴スペース</p>
                    <p className="text-xs text-stone-600 leading-relaxed">オートロウリュ付きの高温ドライサウナ。地上130mを吹き抜ける風を浴びながらのととのい体験は唯一無二です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">淀屋橋・梅田・北新地が徒歩圏内！ビジネス・会食に最高の好立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">主要ビジネス街へのアクセス抜群。夜は北新地での会食後も歩いてすぐにホテルへ帰還できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.49点。「天空露天風呂からの夜景とサウナが異次元の素晴らしさ」「出張で利用しましたが、ここ数年で一番感動したホテルでした」とサウナー・ビジネスマンから絶賛の嵐。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 大阪府大阪市北区堂島浜1-1-27</p>
                  <p>🚆 御堂筋線淀屋橋駅から徒歩約 5 分、JR 北新地駅から徒歩約 10 分、大阪駅へも徒歩圏内</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D189020"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1517/1517.jpg"
                alt="ホテル阪急インターナショナル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.66 点（5752件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  全客室が26階以上の超高層ラグジュアリー！16世紀イタリア貴族の館を思わせる気品と大阪駅徒歩すぐの利便性
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテル阪急インターナショナル —— 梅田・茶屋町のランドマーク。天井高の優雅な客室と夜景を見下ろす大理石バス
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室が高層階（26〜34階）に位置し、窓一面に広がる宝石箱のようなパノラマ夜景</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大阪市街から淀川、神戸方面の煌めく夜景を一望。ゆったりとした広さの客室で優雅なひとり時間を過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ガラス張りのシャワーブースと深めの円形大理石バスタブ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜景を眺めながら優雅なバスタイム。最高級のバスアメニティとともに、出張の疲れをラグジュアリーにリセットできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">阪急大阪梅田駅徒歩3分・JR大阪駅徒歩約10分の好アクセス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">商業施設や劇場が立ち並ぶ茶屋町エリア。周辺には落ち着いたレストランやカフェが多く、一人でも食事に困りません。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.66点。「お部屋からの夜景が素晴らしく、ベッドの寝心地も最高でした」「スタッフの方々のホスピタリティが完璧で、自分への最高のご褒美出張になりました」と感動の声多数。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 大阪府大阪市北区茶屋町19-19</p>
                  <p>🚆 阪急大阪梅田駅茶屋町口から徒歩約3分、大阪メトロ御堂筋線中津駅4番出口から徒歩約3分、JR大阪駅御堂筋口から徒歩約10分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1517"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/167717/167717.jpg"
                alt="天然温泉　朝霧の湯　ドーミーインＰＲＥＭＩＵＭなんばＡＮＮＥＸ（ドーミーイン・御宿野乃　グループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.4 点（258件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  道頓堀・日本橋すぐ！都会のオアシス天然温泉大浴場と高温サウナ・夜鳴きそば完備の安心ステイ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 朝霧の湯 ドーミーインPREMIUMなんばANNEX —— 難波・心斎橋エリアの出張拠点。本格天然温泉と名物ご当地朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">手足を伸ばして寛げる天然温泉大浴場「朝霧の湯」＆水風呂付きサウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">神経痛や疲労回復に効果的な天然温泉。サウナでしっかり汗を流して一日の緊張をリセットできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物あっさり醤油ラーメン「夜鳴きそば」や湯上がりアイスの無料サービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜の小腹を満たすドーミーイン伝統の温かいおもてなし。出張族に圧倒的人気を誇る理由が詰まっています。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大阪名物を取り入れたいくら・海鮮・郷土料理の豪華朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から活力満点の美味しい食事。一日の仕事を最高のエネルギーでスタートすることができます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.40点。「なんば周辺の出張で定宿にしています。温泉とサウナで疲れが取れて、夜鳴きそばも美味しい」「部屋が綺麗で静かで快適」と高い信頼を獲得。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 大阪府大阪市中央区東心斎橋2-1-6</p>
                  <p>🚆 長堀橋駅7番出口より徒歩5分/日本橋駅2番出口より徒歩6分/心斎橋駅6番出口より徒歩13分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D167717"
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
              大阪出張で仕事とリフレッシュを両立する3つのテクニック
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 新大阪駅到着後すぐに荷物をホテルへ預ける（コインロッカー不要）
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                御堂筋線を使えば新大阪から梅田・なんばへ直通。身軽になって商談先へ直行するのがスマートです。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 会食後の「夜サウナ」でアルコールと疲労をスッキリ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                深酒を避け、水分をしっかり補給してから入るサウナは翌朝の目覚めを劇的に変えてくれます（飲酒直後の入浴は避け、十分に時間を空けてください）。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 翌朝は少し早起きして中之島リバーサイド散策
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                中央公会堂やバラ園が広がる中之島の水辺は朝の散歩に最適。心地よい風を感じながら頭をスッキリ整理できます。
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
                <span>チェックインが深夜（24時以降）になっても大丈夫ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、ご紹介した3ホテルはすべて24時間フロントが常駐しており、事前連絡を入れておけば深夜の到着でもスムーズにチェックイン可能です。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>部屋でテレワークやPC作業は快適に行えますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                全館高速Wi-Fiを完備しており、デスクや座り心地の良いチェアが設置されているため、長時間のオンラインミーティングや資料作成も快適に行えます。
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
