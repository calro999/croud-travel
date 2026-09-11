import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【京都ひとり旅・静寂おこもり】朝のお勤め・枯山水庭園・祇園の隠れ家！大人が心洗われる極上和モダン宿 厳選3選',
  description: '「賑やかな観光地から一歩離れて、静かに京都の美意識に浸りたい」「朝の静寂なお寺散策や写経で心をリセットしたい」。大人のソロトラベラーへ。建仁寺・祇園の風情に溶け込む「ホテル ザ セレスティン京都祇園」、500年の歴史を誇る名刹に泊まる「三井ガーデンホテル京都河原町浄教寺」、ラウンジの無料お茶漬けや大浴場が嬉しい「ホテルインターゲート京都 四条新町」を徹底特集。',
  keywords: '京都 一人旅 ホテル おすすめ,京都 おこもり宿 一人,京都 寺 泊まる,ホテル ザ セレスティン京都祇園 一人,三井ガーデンホテル京都河原町浄教寺 宿泊',
  openGraph: {
    title: '【京都ひとり旅・静寂おこもり】朝のお勤め・枯山水庭園・祇園の隠れ家！大人が心洗われる極上和モダン宿 厳選3選',
    description: '「賑やかな観光地から一歩離れて、静かに京都の美意識に浸りたい」「朝の静寂なお寺散策や写経で心をリセットしたい」。大人のソロトラベラーへ。建仁寺・祇園の風情に溶け込む「ホテル ザ セレスティン京都祇園」、500年の歴史を誇る名刹に泊まる「三井ガーデンホテル京都河原町浄教寺」、ラウンジの無料お茶漬けや大浴場が嬉しい「ホテルインターゲート京都 四条新町」を徹底特集。',
    url: 'https://croud-travel.pages.dev/kyoto-solo-retreat-temple-modern-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【京都ひとり旅・静寂おこもり】朝のお勤め・枯山水庭園・祇園の隠れ家！大人が心洗われる極上和モダン宿 厳選3選',
    description: '「賑やかな観光地から一歩離れて、静かに京都の美意識に浸りたい」「朝の静寂なお寺散策や写経で心をリセットしたい」。大人のソロトラベラーへ。建仁寺・祇園の風情に溶け込む「ホテル ザ セレスティン京都祇園」、500年の歴史を誇る名刹に泊まる「三井ガーデンホテル京都河原町浄教寺」、ラウンジの無料お茶漬けや大浴場が嬉しい「ホテルインターゲート京都 四条新町」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/kyoto-solo-retreat-temple-modern-stay',
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
        <span className="text-stone-700 font-medium">京都・おひとりさま寺社＆和モダン宿特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【京都ひとり旅・静寂おこもり】朝のお勤め・枯山水庭園・祇園の隠れ家！大人が心洗われる極上和モダン宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>京都・おひとりさま寺社＆和モダン宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【京都ひとり旅・静寂おこもり】朝のお勤め・枯山水庭園・祇園の隠れ家！大人が心洗われる極上和モダン宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          「賑やかな観光地から一歩離れて、静かに京都の美意識に浸りたい」「朝の静寂なお寺散策や写経で心をリセットしたい」。大人のソロトラベラーへ。建仁寺・祇園の風情に溶け込む「ホテル ザ セレスティン京都祇園」、500年の歴史を誇る名刹に泊まる「三井ガーデンホテル京都河原町浄教寺」、ラウンジの無料お茶漬けや大浴場が嬉しい「ホテルインターゲート京都 四条新町」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            石畳の路地に響く下駄の音、朝の読経と線香の薫香——日常のノイズを脱ぎ捨てて古都の静寂に溶け込む大人の京都ひとり旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            誰かと訪れる京都も楽しいものですが、京都の真髄である「静寂」「幽玄」「わびさび」を肌で味わうなら、ひとり旅に勝るものはありません。早朝、まだ誰もいない寺院の境内を歩き、清らかな空気を胸いっぱいに吸い込む。枯山水の石庭の前にただ腰を下ろし、風に揺れる竹林の葉音に耳を澄ませる。自分のペースで気ままに町家カフェへ立ち寄り、夕暮れの鴨川沿いを歩く時間は、何ものにも代えがたい心のデトックスです。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな大人の京都滞在を決定づけるのが、拠点となる宿のクオリティです。現代的な快適性を備えながらも、京都の伝統美や寺院文化を肌で感じられる上質な和モダンホテル。今回は、おひとりさまでも気兼ねなく過ごせ、大浴場やこだわりの朝食、静寂なロケーションを誇る厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/160991/160991.jpg"
                alt="ホテル　ザ　セレスティン京都祇園"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.67 点（233件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  八坂通・建仁寺のすぐそば！祇園の風情漂う閑静な立地と名店「八坂圓堂」監修の揚げたて天ぷら朝食
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテル ザ セレスティン京都祇園 —— 東山の趣に包まれる上質な隠れ家。大浴場とゲスト専用ラウンジで味わう極上の寛ぎ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">祇園・花見小路・清水寺へ徒歩圏内ながら驚くほど静穏なロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">八坂通沿いに佇む低層の上質な佇まい。早朝の祇園の石畳や八坂の塔周辺を、混雑なしで独り占め散歩できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">京都の老舗天ぷら「八坂圓堂」が手がける贅沢すぎる朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">目の前で職人が揚げるアツアツの天ぷらや、旬の京野菜をふんだんに取り入れたおばんざい。朝から五感を刺激する至福の食体験です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">坪庭を望む落ち着いた地下大浴場と24時間利用可能なゲストラウンジ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">歩き疲れた足を癒やす清潔な大浴場。ラウンジでは祇園辻利のお茶やコーヒーを片手に、優雅な読書タイムを過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.67点。「一人旅で利用しましたが、エントランスから漂うお香の香りとスタッフの気品ある対応に感動しました」「圓堂の天ぷら朝食が絶品で、夜も静かでぐっすり眠れました」と大人ソロ旅から大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 京都府京都市東山区八坂通東大路西入小松町572</p>
                  <p>🚆 京都駅八条口より無料シャトルバスで約10分。京阪電車「祇園四条」より徒歩10分。阪急電車「京都河原町」より徒歩12分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D160991"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/180045/180045.jpg"
                alt="三井ガーデンホテル京都河原町浄教寺"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.65 点（430件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  寺院とホテルが一体化した奇跡の空間！朝の「お勤め体験」とミシュラン掲載店監修の精進和朝食
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  三井ガーデンホテル京都河原町浄教寺 —— 500年の歴史を持つ寺院の跡地に誕生。大浴場と墨絵のアートが彩る唯一無二の寺ホテル
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">毎朝本堂で行われる住職の「朝のお勤め（読経・法話）」に宿泊者限定で参加可能</p>
                    <p className="text-xs text-stone-600 leading-relaxed">清々しい朝の光が差し込む本堂で、心洗われる読経体験。雑念が消え去り、心がスッと整う貴重な体験ができます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">四条河原町駅徒歩1分の最強立地ながら、館内は墨と白の静寂な空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">寺院の古木や装飾を再利用した洗練のデザイン。河原町の繁華街にありながら、一歩足を踏み入れれば別世界のような静けさです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">手足を伸ばせる大浴場とミシュランガイド掲載店「僧伽小野」の朝食御膳</p>
                    <p className="text-xs text-stone-600 leading-relaxed">お寺の雰囲気に合わせた幻想的な大浴場。朝食は彩り豊かな小鉢が並ぶ本格的な和御膳で、身体の内側から浄化されます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.65点。「朝のお勤め体験が本当に素晴らしく、心が洗われました」「四条河原町すぐで買い物にも便利なのに、お寺の静けさと大浴場があって最高でした」と一人旅のリピーター続出。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 京都府京都市下京区寺町通四条下る貞安前之町620</p>
                  <p>🚆 阪急京都線「京都河原町」駅徒歩6分（5番出口から徒歩3分）／地下鉄烏丸線「四条」駅徒歩10分（11番出口から徒歩3分）</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D180045"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/165176/165176.jpg"
                alt="ホテルインターゲート京都　四条新町"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.52 点（889件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  烏丸駅・四条駅徒歩すぐ！大浴場＆時間帯ごとの無料ラウンジサービス（ワイン・お茶漬けバイキング）が大好評
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルインターゲート京都 四条新町 —— 伝統工芸と現代デザインの融合。京都の朝を五感で楽しむ贅沢ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">時間帯で楽しめる宿泊者無料のラウンジサービス（ハッピーアワー＆夜食お茶漬け）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夕方にはワインやオリジナルカクテル、夜には出汁が効いたお茶漬けバイキングを無料提供。一人でも気軽に利用できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">旅の疲れを優しく解きほぐす清潔な癒やしの大浴場を完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">足を伸ばしてリフレッシュできる広々とした浴槽。女性浴場はセキュリティキー付きで一人旅でも安心して入浴できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">錦市場や二条城へもアクセス抜群の落ち着いた新町通エリア</p>
                    <p className="text-xs text-stone-600 leading-relaxed">京町家が残る趣ある通りに面し、周辺には隠れ家のような名店カフェやビストロが点在。大人の京都散策に最適です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.52点。「ラウンジでお酒やお茶漬けをいただけるのが最高でした」「大浴場があって一人でも居心地がよく、スタッフさんの笑顔に癒やされました」とコスパと快適性を両立した名宿。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 京都府京都市中京区新町通錦小路上る百足屋町387</p>
                  <p>🚆 阪急京都線 烏丸駅・ 地下鉄烏丸線 四条駅より徒歩にて約５分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D165176"
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
              混雑を避けて京都を味わい尽くす「朝活ひとり旅」のススメ
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 午前6:00〜7:30の清水寺・伏見稲荷・八坂神社参拝
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                昼間は観光客で溢れる人気スポットも、早朝なら静まり返り神秘的な本来の姿を見せてくれます。写真撮影も周囲を気にせず楽しめます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 鴨川の飛び石とモーニングカフェ巡り
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                朝の鴨川沿いを散策しながら、老舗喫茶店（イノダコーヒや前田珈琲など）で味わうネルドリップ珈琲と厚切りトーストは京都の定番の幸せです。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 午後はホテルのラウンジや大浴場で「中休み」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                一番混雑する午後の時間帯はあえてホテルへ戻り、ラウンジで読書や大浴場でのんびり。夕暮れから再び夜の先斗町やライトアップへ出かけるのが賢い巡り方です。
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
                <span>女性一人旅でも安全に宿泊できますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ご紹介したホテルはすべて24時間フロント対応、カードキーによるエレベーターセキュリティ、女性専用セキュリティ付き大浴場などを備えており、女性おひとりさまでも非常に安心して宿泊できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人での夕食はどこで取るのがおすすめですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ホテルの周辺（祇園・四条河原町・烏丸）にはカウンター席中心の割烹、おばんざいバル、町家カフェが多数あり、一人客を快く歓迎してくれます。フロントのコンシェルジュにおすすめを聞くのもおすすめです。
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
