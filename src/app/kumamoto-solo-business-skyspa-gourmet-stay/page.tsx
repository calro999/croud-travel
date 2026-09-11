import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【熊本出張＆城下町ひとり旅】最上階展望スカイスパ・天然温泉・熊本城ビュー！名物馬刺しを満喫する極上宿 厳選3選',
  description: 'TSMC進出で沸く九州の中枢ビジネス都市・熊本！「最上階スカイスパと露天風呂で星空をととのえる」新ランドマーク「CANDEO HOTELS 熊本新市街」、サクラマチクマモト直結で天然温泉大浴場と夜鳴きそば完備の「天然温泉 六花の湯 ドーミーイン熊本」、熊本城を正面に望む格式の迎賓ホテル「熊本ホテルキャッスル」を徹底比較。',
  keywords: '熊本 出張 ホテル おすすめ,熊本 一人旅 ホテル,カンデオホテルズ熊本新市街 サウナ,ドーミーイン熊本 温泉,熊本ホテルキャッスル 熊本城ビュー',
  openGraph: {
    title: '【熊本出張＆城下町ひとり旅】最上階展望スカイスパ・天然温泉・熊本城ビュー！名物馬刺しを満喫する極上宿 厳選3選',
    description: 'TSMC進出で沸く九州の中枢ビジネス都市・熊本！「最上階スカイスパと露天風呂で星空をととのえる」新ランドマーク「CANDEO HOTELS 熊本新市街」、サクラマチクマモト直結で天然温泉大浴場と夜鳴きそば完備の「天然温泉 六花の湯 ドーミーイン熊本」、熊本城を正面に望む格式の迎賓ホテル「熊本ホテルキャッスル」を徹底比較。',
    url: 'https://croud-travel.pages.dev/kumamoto-solo-business-skyspa-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【熊本出張＆城下町ひとり旅】最上階展望スカイスパ・天然温泉・熊本城ビュー！名物馬刺しを満喫する極上宿 厳選3選',
    description: 'TSMC進出で沸く九州の中枢ビジネス都市・熊本！「最上階スカイスパと露天風呂で星空をととのえる」新ランドマーク「CANDEO HOTELS 熊本新市街」、サクラマチクマモト直結で天然温泉大浴場と夜鳴きそば完備の「天然温泉 六花の湯 ドーミーイン熊本」、熊本城を正面に望む格式の迎賓ホテル「熊本ホテルキャッスル」を徹底比較。',
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
    datePublished: '2026-09-11T02:50:00+09:00',
    dateModified: '2026-09-11T02:50:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/kumamoto-solo-business-skyspa-gourmet-stay',
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
        <span className="text-stone-700 font-medium">熊本・出張＆スカイスパ・馬刺し特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【熊本出張＆城下町ひとり旅】最上階展望スカイスパ・天然温泉・熊本城ビュー！名物馬刺しを満喫する極上宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>熊本・出張＆スカイスパ・馬刺し特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【熊本出張＆城下町ひとり旅】最上階展望スカイスパ・天然温泉・熊本城ビュー！名物馬刺しを満喫する極上宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          TSMC進出で沸く九州の中枢ビジネス都市・熊本！「最上階スカイスパと露天風呂で星空をととのえる」新ランドマーク「CANDEO HOTELS 熊本新市街」、サクラマチクマモト直結で天然温泉大浴場と夜鳴きそば完備の「天然温泉 六花の湯 ドーミーイン熊本」、熊本城を正面に望む格式の迎賓ホテル「熊本ホテルキャッスル」を徹底比較。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            勇壮な熊本城の武者返しと、加藤清正が愛した清らかな地下水——城下町の活気と天空スパに癒やされる「熊本プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            阿蘇の豊かな伏流水に恵まれ、水道水がすべて天然地下水で賄われている奇跡の水都・熊本。復興が進む名城「熊本城」を中心に、下通・上通の長大なアーケード街が賑わいを見せています。さらに近年は世界的な半導体関連企業の進出により、国内外のビジネスパーソンや技術者の往来が急増し、ビジネス都市としての熱気が高まっています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな熊本での出張やソロステイを最高のものにしてくれるのが、仕事の緊張を解きほぐす「最上階スカイスパ」や「天然温泉大浴場」です。夜は歓楽街で本場の極上馬刺しやからし蓮根、あか牛ステーキに舌鼓を打ち、球磨焼酎を傾ける。翌朝は熊本城を望みながら澄んだ空気の中でリフレッシュ。今回は熊本の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/183867/183867.jpg"
                alt="ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）熊本新市街"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.29 点（1255件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  新市街アーケード内に誕生！最上階12階の露天スカイスパ・サウナシュラン仕様のタワーサウナ完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  CANDEO HOTELS（カンデオホテルズ）熊本新市街 —— 繁華街のど真ん中にそびえる癒やしの天空城。サウナとスカイスパで極上のととのい体験
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に広がる開放的な展望露天風呂「スカイスパ」＆本格サウナ・水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜風を感じながら熊本の夜景を見上げる外気浴。オートロウリュ付きサウナで深いととのいへと誘われます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新市街アーケード直結で雨の日も傘不要！飲食店街へ徒歩0分の利便性</p>
                    <p className="text-xs text-stone-600 leading-relaxed">馬刺しや郷土料理の名店がひしめくエリア。夜遅くまで熊本グルメを堪能しても歩いてすぐホテルへ戻れます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">窓際に広々とした小上がりソファを配したモダン和テイストの機能美客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">靴を脱いで寛げるリラックス設計。高速Wi-Fiと充実したワークスペースでPC作業も快適です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.29点。「新市街の真ん中で立地最強、最上階のサウナと露天風呂が最高でした」「新しくてお部屋も綺麗、熊本出張なら絶対ここ」とビジネス・サウナーから絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 熊本県熊本市中央区新市街8-7</p>
                  <p>🚆 JR熊本駅から路面電車で約15分辛島町電停より徒歩約3分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D183867"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/69382/69382.jpg"
                alt="天然温泉　六花の湯　ドーミーイン熊本（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.37 点（6441件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  バスターミナル「サクラマチ クマモト」正面！最上階の天然温泉大浴場と名物太平燕（タイピーエン）朝食
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 六花の湯 ドーミーイン熊本 —— 辛島町電停すぐ。自家源泉の天然温泉と夜鳴きそば完備の安心ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階13階に位置する天然温泉大浴場「六花の湯」＆水風呂付きサウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">神経痛や疲労回復に効く名湯。熊本の街並みを眺めながら手足を伸ばして浸かる至福のバスタイム。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">無料のあっさり醤油ラーメン「夜鳴きそば」＆湯上がりアイスサービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">飲んだ後のシメにもぴったり。出張族の心を掴んで離さない温かいおもてなしが揃っています。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">熊本名物「太平燕（春雨スープ）」やからし蓮根が並ぶ郷土色豊かな朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝からヘルシーで具だくさんな名物グルメ。出張の一日を元気にスタートできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.37点。「サクラマチクマモトの目の前で空港バス利用に最高に便利」「温泉とサウナが気持ちよく、朝食のタイピーエンも美味しかった」と安定の人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 熊本県熊本市中央区辛島町3-1</p>
                  <p>🚆 ◆空港よりバス「熊本桜町バスターミナル(旧称熊本交通センター)」下車徒歩1分◆ＪＲ熊本駅から路面電車「辛島町」下車2分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D69382"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/841/841.jpg"
                alt="熊本ホテルキャッスル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.44 点（1709件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  1960年開業！熊本城を正面に望む皇室やVIP御用達の名門グランドホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  熊本ホテルキャッスル —— 伝統と格式のおもてなし。客室キャッスルビューと伝説の中国料理「桃花源」
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">熊本城の天守閣や本丸御殿を正面に望むキャッスルビュー客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ライトアップされた熊本城を部屋から眺める贅沢。城下町の歴史ロマンを独り占めできる特等席です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">四川料理の神様・陳建民の愛弟子が築いた名店「中国料理 桃花源」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">全国からファンが訪れる本格四川麻婆豆腐や担々麺。格式あるホテルダイニングで至福のディナーを堪能できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広々とした客室と行き届いたドアマン・ベルキャプテンのサービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">老舗ならではの安心感と静寂。大事な商談やエグゼクティブの出張にふさわしい気品が漂います。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.44点。「お部屋からライトアップされた熊本城が見えて感動しました」「桃花源の麻婆豆腐が絶品で、スタッフの方々の対応も素晴らしかった」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 熊本県熊本市中央区城東町4-2</p>
                  <p>🚆 JR鹿児島本線『熊本駅』から車で約10分／市電『通町筋』下車徒歩約3分／九州自動車道『熊本IC』より車で約40分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D841"
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
              熊本の夜をひとり旅で満喫するスマートグルメガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 馬刺しは「特上霜降り・赤身・タテガミ」の三種盛りをオーダー
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                甘みのある九州特有の甘口醤油におろし生姜・にんにくを溶いて。口の中でとろける脂と赤身の旨味は本場ならではです。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 球磨焼酎（米焼酎）のソーダ割りまたはロックでキレ味を楽しむ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                人吉・球磨地方で造られる500年の歴史を持つ米焼酎「白岳しろ」や「鳥飼」。吟醸香が馬肉料理の旨味を引き立てます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 翌朝は熊本城の二の丸広場から天守閣を仰ぎ見る朝散歩
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                凛とした朝の空気の中で眺める漆黒の大天守と小天守。武者返しの壮大な石垣の迫力に圧倒されます。
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
                <span>阿蘇くまもと空港からホテルまではどう移動するのがスムーズですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                阿蘇くまもと空港からリムジンバスに乗れば、約45〜50分でサクラマチ クマモト（バスターミナル）や熊本市街地へ直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>TSMC（JASM）のある菊陽町方面へのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                熊本駅から豊肥本線で肥後大津駅・原水駅へ約30〜35分、またはサクラマチから直行通勤バスも運行されており、市内中心部に宿を取るビジネス客が非常に多いです。
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
