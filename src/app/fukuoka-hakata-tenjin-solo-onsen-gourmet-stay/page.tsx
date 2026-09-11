import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【福岡・博多出張＆ご褒美ソロ旅】博多駅直結・屋上温泉スパ・名物もつ鍋朝食！美食とサウナを満喫する極上宿 厳選3選',
  description: '福岡空港から地下鉄でわずか約5分のメガシティ・博多＆天神！「屋上に天然温泉アウトドアスパ＆プール」を擁するランドマーク「都ホテル 博多」、キャナルシティ直結で天然温泉と豪華海鮮丼朝食が自慢の「ドーミーインPREMIUM博多・キャナルシティ前」、天神のど真ん中でスカイスパを誇る「カンデオホテルズ福岡天神」を徹底比較。',
  keywords: '博多 出張 ホテル 温泉,福岡 一人旅 ホテル おすすめ,都ホテル博多 温泉,ドーミーインPREMIUM博多 宿泊,天神 サウナ ホテル',
  openGraph: {
    title: '【福岡・博多出張＆ご褒美ソロ旅】博多駅直結・屋上温泉スパ・名物もつ鍋朝食！美食とサウナを満喫する極上宿 厳選3選',
    description: '福岡空港から地下鉄でわずか約5分のメガシティ・博多＆天神！「屋上に天然温泉アウトドアスパ＆プール」を擁するランドマーク「都ホテル 博多」、キャナルシティ直結で天然温泉と豪華海鮮丼朝食が自慢の「ドーミーインPREMIUM博多・キャナルシティ前」、天神のど真ん中でスカイスパを誇る「カンデオホテルズ福岡天神」を徹底比較。',
    url: 'https://croud-travel.pages.dev/fukuoka-hakata-tenjin-solo-onsen-gourmet-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【福岡・博多出張＆ご褒美ソロ旅】博多駅直結・屋上温泉スパ・名物もつ鍋朝食！美食とサウナを満喫する極上宿 厳選3選',
    description: '福岡空港から地下鉄でわずか約5分のメガシティ・博多＆天神！「屋上に天然温泉アウトドアスパ＆プール」を擁するランドマーク「都ホテル 博多」、キャナルシティ直結で天然温泉と豪華海鮮丼朝食が自慢の「ドーミーインPREMIUM博多・キャナルシティ前」、天神のど真ん中でスカイスパを誇る「カンデオホテルズ福岡天神」を徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/fukuoka-hakata-tenjin-solo-onsen-gourmet-stay',
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
        <span className="text-stone-700 font-medium">福岡・博多出張＆温泉スパ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【福岡・博多出張＆ご褒美ソロ旅】博多駅直結・屋上温泉スパ・名物もつ鍋朝食！美食とサウナを満喫する極上宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>福岡・博多出張＆温泉スパ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【福岡・博多出張＆ご褒美ソロ旅】博多駅直結・屋上温泉スパ・名物もつ鍋朝食！美食とサウナを満喫する極上宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          福岡空港から地下鉄でわずか約5分のメガシティ・博多＆天神！「屋上に天然温泉アウトドアスパ＆プール」を擁するランドマーク「都ホテル 博多」、キャナルシティ直結で天然温泉と豪華海鮮丼朝食が自慢の「ドーミーインPREMIUM博多・キャナルシティ前」、天神のど真ん中でスカイスパを誇る「カンデオホテルズ福岡天神」を徹底比較。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            空港からわずか5分で広がる美食の街と、屋上の天然温泉スパ——仕事も観光も食も妥協しない「福岡・博多パーフェクトステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            全国の都市の中でも圧倒的なアクセスの良さを誇る福岡・博多。福岡空港から地下鉄に乗ればわずか5分で博多駅、11分で天神駅へ到着します。ビジネスの拠点としての利便性はもちろん、夜には中洲や天神の屋台、もつ鍋、水炊き、博多ラーメン、玄界灘の新鮮なゴマサバなど、日本有数の美食文化が凝縮しています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな魅力あふれる福岡での滞在をさらに贅沢にしてくれるのが、本格的な「天然温泉」や「屋上ルーフトップスパ」を備えた最新ホテルです。仕事を終えて屋上の温水スパに浸かり、福岡の夜景を眺めながらリフレッシュ。翌朝は明太子やもつ鍋が並ぶ名物朝食で活力をチャージする。出張や一人旅を劇的にアップグレードする厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/172310/172310.jpg"
                alt="都ホテル博多"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.62 点（1142件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR博多駅筑紫口直結！最上階13階に広がる屋外温泉スパ・プールと滝の流れるガラス張りのラグジュアリー
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  都ホテル 博多 —— 博多駅直結のランドマーク。天然温泉のルーフトップスパと全室30㎡以上のゆとりあるモダン空間
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階13階に位置する宿泊者専用のアウトドア温泉スパ＆内湯温泉</p>
                    <p className="text-xs text-stone-600 leading-relaxed">敷地内から湧出する天然温泉。ガラス張りのプールやジェットバスから飛行機が行き交う福岡の空を一望できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">JR博多駅筑紫口から地下通路で直結！雨の日も傘いらずでチェックイン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新幹線改札からも徒歩ですぐ。地下鉄空港線にも直結しており、空港や天神へのフットワークが抜群です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室が30㎡以上の広々空間＆洗い場付きの独立バスルーム</p>
                    <p className="text-xs text-stone-600 leading-relaxed">シモンズ製の特注ベッドや大型スマートTVを完備。一人でも最高に贅沢で開放的なプライベートタイムを過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.62点。「屋上の温泉スパが最高に気持ちよく、博多駅直結でこれ以上ない立地」「お部屋も広くて綺麗で、自分へのご褒美出張にぴったりでした」と絶賛の声多数。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 福岡県福岡市博多区博多駅東2-1-1</p>
                  <p>🚆 博多駅直結！徒歩約１分。＜東７番出口＞福岡空港から地下鉄で約７分、車で約15分。一歩足を踏み入れたらもうそこはリゾート！</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D172310"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/130158/130158.jpg"
                alt="天然温泉　袖湊の湯　ドーミーインＰＲＥＭＩＵＭ博多・キャナルシティ前（ドーミーイン・野乃　グループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.47 点（1638件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  キャナルシティ博多のすぐ隣！天然温泉大浴場とサウナ・名物「博多もつ鍋」＆海鮮丼が並ぶ大人気朝食
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 袖湊の湯 ドーミーインPREMIUM博多・キャナルシティ前 —— 中洲の屋台街も徒歩圏内。温泉と美食で満たされる王道ビジホ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地下から湧く本格的な天然温泉「袖湊の湯」＆高温サウナ・水風呂完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">旅や出張の疲れをじっくり癒やす大浴場。サウナでしっかりととのってから中洲の街へ繰り出す贅沢が叶います。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「水炊き」や「もつ鍋」、イクラなどを盛り付ける豪華朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">福岡の郷土料理を余すことなく味わえる朝の食体験。出張の朝からご当地グルメを満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">夜鳴きそばや湯上がりアイス、乳酸菌飲料の無料サービスも充実</p>
                    <p className="text-xs text-stone-600 leading-relaxed">呑んだ後のシメに嬉しいあっさり醤油ラーメン。おひとりさまでもリラックスして過ごせるサービスが満載です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.47点。「キャナルシティの真横で中洲の屋台にも歩いてすぐ。温泉とサウナが気持ちよく朝食も最高でした」「一人出張の定宿です」とリピーターが絶えない名宿。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 福岡県福岡市博多区祇園町9-1</p>
                  <p>🚆 ■ＪＲ博多駅博多口より徒歩10分　■地下鉄櫛田神社前駅7番出口より徒歩1分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D130158"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/147612/147612.jpg"
                alt="ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）福岡天神"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.09 点（1317件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  天神・南天神のショッピング街すぐ！最上階の展望露天風呂「スカイスパ」と開放的な星空外気浴
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  CANDEO HOTELS（カンデオホテルズ）福岡天神 —— 繁華街の真ん中で味わう静寂。天神の夜空を見上げるスカイスパ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に位置する開放的な展望露天風呂とサウナ・水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">都会の真ん中で夜風に吹かれながら星空を見上げる外気浴。一日の仕事やショッピングの疲れを洗い流せます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">天神地下街や西鉄福岡（天神）駅へ徒歩数分の好ロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">屋台通りや人気ラーメン店、カフェがひしめくエリア。夜遅くまで博多の夜を満喫しても歩いて帰れます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">窓際に広々とした小上がりソファ「シモンズ社製ベッド」を配した快適客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">靴を脱いで寛げるリラックス空間。デスクワークも読書も快適にこなすことができます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.09点。「天神の中心にありながら最上階の露天風呂とサウナが最高」「ベッドの寝心地が良く、一人旅の拠点にとても便利でした」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 福岡県福岡市中央区渡辺通5-14-5</p>
                  <p>🚆 西鉄天神駅より徒歩４分、地下鉄空港線天神駅より徒歩９分、天神南駅より徒歩４分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D147612"
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
              博多・天神の夜をひとり旅で満喫するスマートガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 屋台は「天神エリア」か「渡辺通エリア」が地元民にも人気で入りやすい
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                中洲の屋台は観光客で混み合いますが、天神や渡辺通の屋台は常連客や一人客も多く、大将や隣の人と気軽に会話を楽しめます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 居酒屋ではまず「ごまさば」と「酢もつ」をオーダー
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                玄界灘の新鮮なサバを特製ゴマダレで和えたごまさばは博多のソウルフード。地酒「田中六五」や「若波」との相性も抜群です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 翌朝は櫛田神社へ参拝して博多の総鎮守に祈願
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                博多祇園山笠のフィナーレが繰り広げられる歴史ある神社。早朝の境内には荘厳な空気が漂い、お散歩コースに最適です。
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
                <span>福岡空港からホテルまではタクシーでも近いですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、博多駅まではタクシーで約15分（1,500円前後）と驚くほど近く、荷物が多い場合や深夜の到着でもタクシーで快適に移動できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>屋上の温泉スパには水着が必要ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                都ホテル博多の屋外スパエリアは水着着用（レンタルあり）ですが、男女別の内湯・サウナエリアは通常の温泉大浴場と同様に裸で入浴できます。
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
