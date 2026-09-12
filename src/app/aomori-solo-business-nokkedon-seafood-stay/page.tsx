import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【青森出張＆港町ひとり旅】青森駅近・のっけ丼・陸奥湾ホタテ・十和田牛！本州最北の拠点で整う極上ホテル 厳選3選',
  description: '本州最北のターミナル・青森県青森市！「新町通り中心・広々バスルームと快適デスク完備」の「ダイワロイネットホテル青森」、アスパム通り沿いでシモンズベッドと青森りんご朝食が自慢の「リッチモンドホテル青森」、ウォーターフロント至近の「ホテルJALシティ青森」を徹底特集。',
  keywords: '青森 出張 ホテル おすすめ,青森 一人旅 ホテル,のっけ丼 ホテル 青森駅,ダイワロイネットホテル青森 宿泊,リッチモンドホテル青森 朝食',
  openGraph: {
    title: '【青森出張＆港町ひとり旅】青森駅近・のっけ丼・陸奥湾ホタテ・十和田牛！本州最北の拠点で整う極上ホテル 厳選3選',
    description: '本州最北のターミナル・青森県青森市！「新町通り中心・広々バスルームと快適デスク完備」の「ダイワロイネットホテル青森」、アスパム通り沿いでシモンズベッドと青森りんご朝食が自慢の「リッチモンドホテル青森」、ウォーターフロント至近の「ホテルJALシティ青森」を徹底特集。',
    url: 'https://croud-travel.pages.dev/aomori-solo-business-nokkedon-seafood-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【青森出張＆港町ひとり旅】青森駅近・のっけ丼・陸奥湾ホタテ・十和田牛！本州最北の拠点で整う極上ホテル 厳選3選',
    description: '本州最北のターミナル・青森県青森市！「新町通り中心・広々バスルームと快適デスク完備」の「ダイワロイネットホテル青森」、アスパム通り沿いでシモンズベッドと青森りんご朝食が自慢の「リッチモンドホテル青森」、ウォーターフロント至近の「ホテルJALシティ青森」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/aomori-solo-business-nokkedon-seafood-stay',
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
        <span className="text-stone-700 font-medium">青森・出張＆のっけ丼・陸奥湾海鮮特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【青森出張＆港町ひとり旅】青森駅近・のっけ丼・陸奥湾ホタテ・十和田牛！本州最北の拠点で整う極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>青森・出張＆のっけ丼・陸奥湾海鮮特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【青森出張＆港町ひとり旅】青森駅近・のっけ丼・陸奥湾ホタテ・十和田牛！本州最北の拠点で整う極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          本州最北のターミナル・青森県青森市！「新町通り中心・広々バスルームと快適デスク完備」の「ダイワロイネットホテル青森」、アスパム通り沿いでシモンズベッドと青森りんご朝食が自慢の「リッチモンドホテル青森」、ウォーターフロント至近の「ホテルJALシティ青森」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            青い海公園を吹き抜ける陸奥湾の潮風と、ねぶたの熱気を伝える街明かり——甘みたっぷりの肉厚ホタテと地酒に酔いしれる「青森プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東北新幹線の終着駅「新青森駅」からJRで1駅、青い森鉄道や津軽海峡フェリーが結節する本州最北の港町・青森。青森港に面したウォーターフロントには三角形のランドマーク「アスパム」や「ねぶたの家 ワ・ラッセ」が立ち並び、港町の情緒と北国の清々しい空気が広がります。出張の夜の最大の歓びは、八甲田山麓の伏流水で仕込まれる銘酒「田酒（でんしゅ）」「八仙」とともに味わう陸奥湾産の肉厚なホタテ刺し、十三湖産大和しじみ汁、そして倉石牛や十和田バラ焼きです。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな青森滞在を最高のものにしてくれるのが、青森駅前・新町通りの中心に位置し、機能的なワークスペースと清潔な客室を備えたハイクオリティホテルです。朝は名物「青森魚菜センター」でチケットをちぎりながら自分だけのオリジナル海鮮丼「のっけ丼」を作る贅沢。今回は出張・ひとり旅に最適な青森の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/167605/167605.jpg"
                alt="ダイワロイネットホテル青森"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.56 点（1506件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR青森駅東口徒歩5分！新町通りの中心に位置し全室バス・トイレ別のセパレート設計＆シモンズベッド
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ダイワロイネットホテル青森 —— 駅前エリアのフラッグシップ。ワイドデスクと清潔なバスルームで出張を完全サポート
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室がバス・トイレ別の独立設計！手足を伸ばせる洗い場付きバスタブ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">客室でゆったりバスタイム。出張の疲れや移動の寒さを心地よく洗い流せます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大型ワーキングデスクと明るいデスクライト、高速Wi-Fi完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">客室でのテレワークや資料作成が非常に快適。静音性に優れ、快適な眠りをサポートします。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">青森の食材をふんだんに取り入れた郷土料理朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ホタテご飯やりんごジュース、郷土料理など。朝から青森の豊かな味覚を堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.56点。「部屋が広くお風呂とトイレが別でとても快適でした」「新町通りの真ん中で飲食店も多く出張の定宿です」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 青森県青森市新町1-11-16</p>
                  <p>🚆 「青森駅」より徒歩約5分。青森空港よりバスで約35分「新町一丁目」下車徒歩約3分。東北新幹線「新青森駅」より車で約15分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D167605"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/80726/80726.jpg"
                alt="リッチモンドホテル青森"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.45 点（2734件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  アスパム通り沿い！シモンズ社製ベッド完備と楽天トラベル高評価の青森りんご＆郷土朝食バイキング
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  リッチモンドホテル青森 —— 快適さを追求した上質シティホテル。親切な接客と充実したアメニティが嬉しい安心ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">シモンズ社製最高級ベッドと加湿空気清浄機を全室に完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">遮音性に優れた静かな客室。出張の夜をぐっすり眠って翌朝スッキリと目覚められます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">青森県産りんごのスイーツや陸奥湾ホタテ、せんべい汁が並ぶ豪華朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">出来立ての郷土料理を味わう朝の贅沢。朝からエネルギーを満タンにできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">アスパムや青い海公園へ徒歩すぐのベイエリア好ロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">海沿いの爽快な朝散歩に最適。周辺には居酒屋や郷土料理店が多数点在しています。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.45点。「スタッフの笑顔と丁寧な接客が素晴らしかった」「朝食のりんごジュースやホタテ料理がとても美味しかったです」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 青森県青森市長島1-6-6</p>
                  <p>🚆 【青森空港】JRバス　柳町通り下車1分◆【新青森駅】市営バス　市役所前下車3分◆【青森駅】市営バス　市役所前下車3分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D80726"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1482/1482.jpg"
                alt="ホテルＪＡＬシティ青森"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.29 点（3554件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  青森港・アスパムすぐ！オークラニッコーホテルズの安心感と快適なシモンズベッド客室
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルＪＡＬシティ青森 —— ベイエリアのランドマーク。洗練されたおもてなしと青森の恵みを味わう朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ウォーターフロントや新町商店街へ好アクセスの上質ロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">アスパムでの買い物やのっけ丼の魚菜センターへも徒歩圏内です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">機能的なワークスペースと高速インターネット環境を完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">出張のPC作業やビジネス連絡もスムーズ。落ち着いたトーンの内装が寛ぎを約束します。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">シェフ特製オムレツやりんごジュースの飲み比べが楽しめる朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">県産食材にこだわった美味しい朝ごはん。活力ある一日のスタートをサポートします。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.29点。「立地が良く部屋も清潔で快適に過ごせました」「スタッフの対応が親切で安心して泊まれるホテルです」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 青森県青森市安方2-4-12</p>
                  <p>🚆 ●青森駅から徒歩6分●東北自動車道青森中央ICから15分●青森空港からバス約40分「県庁通り」下車徒歩2分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1482"
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
              青森「のっけ丼」とベイエリアを一人旅で満喫するモデルプラン
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 青森魚菜センターで食券を買い、市場を巡って「のっけ丼」作り
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ご飯を入れた丼を持って市場内の各店舗へ。マグロ、ホタテ、ウニ、いくらなど好きな具材を1枚ずつ選んで乗せる夢のオリジナル海鮮丼。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. ねぶたの家「ワ・ラッセ」で本物の大型ねぶたの迫力に圧倒される
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                青森駅すぐ。祭りで実際に運行された巨大ねぶたが常設展示され、細部まで作り込まれた職人技を間近で鑑賞できます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夜は本町（ほんちょう）の居酒屋で「田酒」と陸奥湾ホタテ貝焼き味噌
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ホタテの貝殻を鍋代わりにして、ホタテと出汁、味噌、卵を絡めて煮込む津軽のソウルフード。幻の地酒「田酒」が最高の相棒です。
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
                <span>新幹線「新青森駅」から「青森駅」まではどう移動しますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                新青森駅からJR奥羽本線の普通・特急列車で約5〜6分（1駅）で青森駅へ直結しています。新幹線の乗車券に市内ゾーンが含まれていれば追加運賃なしで乗車できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>冬の青森市街の積雪時の歩行はどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                新町通りなどの主要歩道には消雪パイプやロードヒーティングが敷設されており、雪道でも歩きやすく整備されていますが、防水・防滑仕様の靴がおすすめです。
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
