import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【ワンランク上の出張泊】天然温泉・本格サウナ・絶景ビュー完備！仕事の疲れを極限まで癒やすプレミアムビジネスホテル 厳選3選',
  description: '「出張先のホテルはただ寝るだけではもったいない」「翌日の商談やプレゼンに向けて最高のコンディションを整えたい」。そんなビジネスパーソンへ。地上36階の天空露天風呂を誇る「三井ガーデンホテル豊洲プレミア」、銀座のど真ん中で天然温泉と黒湯サウナを満喫する「ドーミーインPREMIUM銀座」、奥湯河原直送の美肌湯が注ぐ「スーパーホテルPremier銀座」を徹底特集。',
  keywords: '出張 ホテル サウナ 東京,天然温泉 ビジネスホテル 東京,ドーミーインPREMIUM銀座 宿泊,三井ガーデンホテル豊洲プレミア 大浴場,快適出張 ホテル おすすめ',
  openGraph: {
    title: '【ワンランク上の出張泊】天然温泉・本格サウナ・絶景ビュー完備！仕事の疲れを極限まで癒やすプレミアムビジネスホテル 厳選3選',
    description: '「出張先のホテルはただ寝るだけではもったいない」「翌日の商談やプレゼンに向けて最高のコンディションを整えたい」。そんなビジネスパーソンへ。地上36階の天空露天風呂を誇る「三井ガーデンホテル豊洲プレミア」、銀座のど真ん中で天然温泉と黒湯サウナを満喫する「ドーミーインPREMIUM銀座」、奥湯河原直送の美肌湯が注ぐ「スーパーホテルPremier銀座」を徹底特集。',
    url: 'https://croud-travel.pages.dev/premium-business-trip-sauna-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【ワンランク上の出張泊】天然温泉・本格サウナ・絶景ビュー完備！仕事の疲れを極限まで癒やすプレミアムビジネスホテル 厳選3選',
    description: '「出張先のホテルはただ寝るだけではもったいない」「翌日の商談やプレゼンに向けて最高のコンディションを整えたい」。そんなビジネスパーソンへ。地上36階の天空露天風呂を誇る「三井ガーデンホテル豊洲プレミア」、銀座のど真ん中で天然温泉と黒湯サウナを満喫する「ドーミーインPREMIUM銀座」、奥湯河原直送の美肌湯が注ぐ「スーパーホテルPremier銀座」を徹底特集。',
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
    datePublished: '2026-09-11T02:20:00+09:00',
    dateModified: '2026-09-11T02:20:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/premium-business-trip-sauna-onsen-stay',
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
        <span className="text-stone-700 font-medium">快適出張・プレミアムビジホ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【ワンランク上の出張泊】天然温泉・本格サウナ・絶景ビュー完備！仕事の疲れを極限まで癒やすプレミアムビジネスホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>快適出張・プレミアムビジホ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【ワンランク上の出張泊】天然温泉・本格サウナ・絶景ビュー完備！仕事の疲れを極限まで癒やすプレミアムビジネスホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          「出張先のホテルはただ寝るだけではもったいない」「翌日の商談やプレゼンに向けて最高のコンディションを整えたい」。そんなビジネスパーソンへ。地上36階の天空露天風呂を誇る「三井ガーデンホテル豊洲プレミア」、銀座のど真ん中で天然温泉と黒湯サウナを満喫する「ドーミーインPREMIUM銀座」、奥湯河原直送の美肌湯が注ぐ「スーパーホテルPremier銀座」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            高層階の外気浴で整い、天然温泉の湯気に包まれる——ただの宿泊を出張のハイライトに変える「プレミアムビジホ革命」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            新幹線や飛行機での長距離移動、終日の商談や現場立ち会い。出張は想像以上に体力と気力を消耗します。ビジネスホテルに戻った時、狭いユニットバスでシャワーを浴びるだけでは、肩こりや脚のむくみ、頭の疲れはなかなか抜けません。「出張先だからこそ、大きなお風呂に手足を伸ばして浸かりたい」「サウナと水風呂でしっかり整って熟睡したい」。そんな現代のビジネスパーソンから絶大な支持を集めているのが「プレミアムビジネスホテル」です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            地下深くから湧き出す天然温泉の大浴場、本格的な高温ドライサウナや水風呂、夜鳴きそばなどの無料サービス、さらには上質な寝具と充実したデスク環境。機能性とウェルネスを高次元で両立させたホテルを選べば、出張の夜が最高のリフレッシュタイムへと昇華します。今回は東京出張で絶対に選んで後悔しない、温泉・サウナ自慢の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/178674/178674.jpg"
                alt="三井ガーデンホテル豊洲プレミア"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.56 点（668件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  豊洲駅直結・地上36階の天空ロビー！東京ベイエリアのパノラマ夜景を見下ろす大浴場と外気浴テラス
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  三井ガーデンホテル豊洲プレミア —— 都心とベイエリアを結ぶ天空のオアシス。仕事の疲れを吹き飛ばす絶景バスタイム
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">東京メトロ有楽町線「豊洲駅」直結で大手町や有楽町へのアクセス抜群</p>
                    <p className="text-xs text-stone-600 leading-relaxed">雨の日でも濡れずに移動可能。東京駅や銀座へも約10分とビジネスの拠点としてこれ以上ない利便性を誇ります。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階36階に位置する宿泊者専用の大浴場と開放的な半露天風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">水中に光が揺らめくスタイリッシュな空間。東京のダイナミックな夜景を眺めながら足を伸ばして浸かる湯浴みは圧巻の爽快感です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室高層階＆高速Wi-Fi・広々としたワークスペースを完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大きな窓から東京湾やレインボーブリッジを一望。夜景をバックに集中してPC作業をこなすことができます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.56点。「大浴場からの夜景が素晴らしく、出張の疲れが一気に吹き飛びました」「駅直結で移動が楽、客室の設備も綺麗でビジネス利用には最高峰」とビジネスエリートから高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 東京都江東区豊洲2-2-1</p>
                  <p>🚆 東京メトロ有楽町線 豊洲駅(2番出口) 直結</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D178674"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/182801/182801.jpg"
                alt="天然温泉　七宝の湯　ドーミーインＰＲＥＭＩＵＭ銀座"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.58 点（204件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  銀座のど真ん中で黒湯の天然温泉！オートロウリュサウナ・強冷水風呂・無料の夜鳴きそばまで揃う至高のドーミーイン
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 七宝の湯 ドーミーインPREMIUM銀座 —— 東銀座駅徒歩4分。銀座唯一の黒湯天然温泉とサウナで極上のととのい体験
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地下深くから汲み上げた「黒湯」の天然温泉大浴場（七宝の湯）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ミネラル豊富な黒褐色のお湯が肌をしっとりと包み込みます。都心の真ん中とは思えない本格的な温泉情緒を味わえます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">サウナー絶賛の高温ドライサウナ＆しっかり冷えた水風呂・ととのい椅子</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ヒノキの香るサウナ室で汗を流し、冷水風呂とととのいスペースでディープリラックス。出張の緊張を一気に解きほぐします。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」や湯上がりアイス・乳酸菌飲料の無料サービス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜食にあっさり醤油ラーメンを無料提供。朝食にはいくらや海鮮を贅沢に盛り付けるバイキングも大人気です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.58点。「銀座でこのレベルの天然温泉とサウナに入れるのは奇跡」「夜鳴きそばやアイスのサービスが嬉しく、ベッドの寝心地も最高でした」と出張族・サウナーがリピート。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 東京都中央区銀座6-16-8</p>
                  <p>🚆 東京メトロ日比谷線・都営浅草線「東銀座駅」4番出口より徒歩4分/JR「新橋駅」より徒歩11分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D182801"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/167812/167812.jpg"
                alt="天然温泉　奥湯河原の湯　スーパーホテルＰｒｅｍｉｅｒ銀座"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.35 点（814件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  銀座五丁目に湧く名湯！名湯「奥湯河原」から毎日運ばれる天然温泉とレディースフロアも完備の上質ホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 奥湯河原の湯 スーパーホテルPremier銀座 —— 東銀座駅徒歩1分。美肌の天然温泉と選べる8種の快眠枕
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名湯「奥湯河原温泉」から直送される本格的な美肌天然温泉大浴場</p>
                    <p className="text-xs text-stone-600 leading-relaxed">アルカリ性単純温泉の柔らかなお湯が、出張で歩き疲れた足腰を優しく癒やします。深夜・早朝も入浴可能です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ぐっすり眠るための徹底的なこだわり（選べる枕・防音性・オーガニックアメニティ）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">硬さや高さが選べる枕コーナーや、遮光カーテン、珪藻土を使った健康的な客室空間で翌朝スッキリと目覚められます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">歌舞伎座・新橋・汐留へも徒歩圏内の抜群のフットワーク</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地下鉄東銀座駅A4出口から徒歩1分。朝の通勤ラッシュに巻き込まれずスムーズに目的地へ移動できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.35点。「奥湯河原の温泉が気持ちよく、選べる枕のおかげで熟睡できました」「東銀座駅すぐで立地が最高、スタッフも笑顔で迎えてくれて安心できた」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 東京都中央区銀座3-11-15</p>
                  <p>🚆 都営浅草線　東銀座駅Ａ７出口より徒歩すぐ</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D167812"
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
              出張疲れを残さない！翌朝パフォーマンスを最大化するホテルの過ごし方
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. チェックイン後すぐに温冷交代浴（サウナ→水風呂または湯船→水シャワー）
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                移動直後に入浴して血流を促すことで、乳酸などの疲労物質を効率よく排出。自律神経が整い、夕食後の作業効率もアップします。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. ベッドに入る90分前の入浴完了で「深部体温」を下げる
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                お風呂から上がって約90分後に体の中心の温度が下がり、自然で深い眠りに入りやすくなります。睡眠の質が劇的に向上します。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 加湿空気清浄機の稼働と水分補給
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ホテルの客室は乾燥しがちです。加湿器をしっかりセットし、就寝前と起床後にコップ1杯の常温水を飲むことで翌朝の喉の不快感を防げます。
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
                <span>領収書はインボイス制度に対応していますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、ご紹介したホテルはいずれも適格請求書発行事業者であり、現地決済または楽天トラベルのオンライン決済領収書にてインボイス対応の領収書が発行されます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>深夜チェックインや早朝チェックアウトも可能ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                24時間フロント対応を行っており、深夜のチェックインや早朝の出発にもスムーズに対応してもらえます。事前に到着予定時刻を伝えておくとさらに安心です。
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
