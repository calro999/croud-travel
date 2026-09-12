import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【姫路出張＆世界遺産ひとり旅】姫路城ビュー・姫路駅直結・天然温泉サウナ！名物穴子めしと播磨の地酒を味わう名宿 厳選3選',
  description: '山陽新幹線全列車停車・兵庫県西部の産業拠点「姫路」！「JR姫路駅直結でサウナ付き温浴施設完備」の「ホテルモントレ姫路」、最上階に天然温泉大浴場と夜鳴きそば完備の「天然温泉 白鷺の湯 ドーミーイン姫路」、姫路城を望む格式あるシティホテル「ホテル日航姫路」を徹底特集。',
  keywords: '姫路 出張 ホテル おすすめ,姫路 一人旅 ホテル,ホテルモントレ姫路 宿泊,ドーミーイン姫路 温泉,姫路城 ひとり旅 ホテル',
  openGraph: {
    title: '【姫路出張＆世界遺産ひとり旅】姫路城ビュー・姫路駅直結・天然温泉サウナ！名物穴子めしと播磨の地酒を味わう名宿 厳選3選',
    description: '山陽新幹線全列車停車・兵庫県西部の産業拠点「姫路」！「JR姫路駅直結でサウナ付き温浴施設完備」の「ホテルモントレ姫路」、最上階に天然温泉大浴場と夜鳴きそば完備の「天然温泉 白鷺の湯 ドーミーイン姫路」、姫路城を望む格式あるシティホテル「ホテル日航姫路」を徹底特集。',
    url: 'https://croud-travel.pages.dev/himeji-solo-business-castle-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【姫路出張＆世界遺産ひとり旅】姫路城ビュー・姫路駅直結・天然温泉サウナ！名物穴子めしと播磨の地酒を味わう名宿 厳選3選',
    description: '山陽新幹線全列車停車・兵庫県西部の産業拠点「姫路」！「JR姫路駅直結でサウナ付き温浴施設完備」の「ホテルモントレ姫路」、最上階に天然温泉大浴場と夜鳴きそば完備の「天然温泉 白鷺の湯 ドーミーイン姫路」、姫路城を望む格式あるシティホテル「ホテル日航姫路」を徹底特集。',
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
    datePublished: '2026-09-12T15:30:00+09:00',
    dateModified: '2026-09-12T15:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/himeji-solo-business-castle-onsen-stay',
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
        <span className="text-stone-700 font-medium">姫路・出張＆白鷺城ビュー・天然温泉特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【姫路出張＆世界遺産ひとり旅】姫路城ビュー・姫路駅直結・天然温泉サウナ！名物穴子めしと播磨の地酒を味わう名宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>姫路・出張＆白鷺城ビュー・天然温泉特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【姫路出張＆世界遺産ひとり旅】姫路城ビュー・姫路駅直結・天然温泉サウナ！名物穴子めしと播磨の地酒を味わう名宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          山陽新幹線全列車停車・兵庫県西部の産業拠点「姫路」！「JR姫路駅直結でサウナ付き温浴施設完備」の「ホテルモントレ姫路」、最上階に天然温泉大浴場と夜鳴きそば完備の「天然温泉 白鷺の湯 ドーミーイン姫路」、姫路城を望む格式あるシティホテル「ホテル日航姫路」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            白鷺が羽を広げたように白く輝く国宝・姫路城の大天守と、大手前通りのケヤキ並木——播磨の歴史と天然温泉に心整える「姫路プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            山陽新幹線「のぞみ」で新大阪から約30分、東京から約3時間。播磨臨海工業地帯を後背に抱えるものづくりの街であり、日本で初めて世界文化遺産に登録された国宝「姫路城（白鷺城）」を誇る歴史都市・姫路。日中の商談や工場視察をこなした後の楽しみは、播磨灘で獲れる肉厚な「穴子（アナゴ）」の香ばしい蒲焼きや穴子めし、生姜醤油で食べる「姫路おでん」、そして山田錦のふるさと播磨が誇る地酒「龍力」「奥播磨」です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな姫路出張をストレスフリーで快適なものにしてくれるのが、新幹線改札すぐの駅前立地や、最上階からライトアップされた姫路城を望む展望客室、そして手足を伸ばせる天然温泉サウナです。移動の疲労を名湯で洗い流し、上質なデスクで仕事を片付ける。今回は出張・ひとり旅に最適な姫路の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/163181/163181.jpg"
                alt="ホテルモントレ姫路"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.46 点（2611件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR姫路駅東口直結！宿泊者専用のサウナ付き温浴施設「トリニテ」とアール・デコ調の気品あるモダン客室
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルモントレ姫路 —— 駅直結のフラッグシップ。雨に濡れずにチェックイン＆イタリア調の優雅な癒やし空間
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">JR姫路駅から直結通路で徒歩1分！新幹線改札から傘なしでスムーズアクセス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">荷物が多い出張でも移動のストレスがゼロ。チェックイン前後の荷物預けも楽々です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">宿泊者専用の清潔な温浴施設「トリニテ」（サウナ・水風呂・広々浴槽完備）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">手足を伸ばして入るお風呂とサウナ。出張の疲れや緊張をスッキリ洗い流せます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大手前通り越しに姫路城を望むキャッスルビュー客室と快適シモンズベッド</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ライトアップされた白鷺城を眺めながら過ごす優雅な夜。遮音性も抜群で快眠できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.46点。「駅直結でサウナ付きの大浴場があり最高でした」「お部屋から姫路城が見えて綺麗で、出張の定宿にしています」とビジネス客から大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 兵庫県姫路市駅前町60</p>
                  <p>🚆 ＪＲ姫路駅より直結</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D163181"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/129607/129607.jpg"
                alt="天然温泉　白鷺の湯　ドーミーイン姫路（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.41 点（3091件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR姫路駅南口徒歩3分！自家源泉の天然温泉大浴場「白鷺の湯」＆高温サウナ・名物夜鳴きそば
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 白鷺の湯 ドーミーイン姫路 —— 駅近の温泉ビジホ。手足を伸ばせる天然温泉と名物アーモンドトースト朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に広がる天然温泉大浴場「白鷺の湯」＆ドライサウナ・しっかり冷えた水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">保温効果の高い天然温泉。サウナでしっかりととのって深い眠りへと誘われます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」や湯上がりアイス、乳酸菌飲料の無料サービスが充実</p>
                    <p className="text-xs text-stone-600 leading-relaxed">姫路おでんを楽しんだ後のシメに最適。一人旅でも温かく迎えてくれる定番の安心感です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">姫路名物「アーモンドトースト」や播磨の味覚が並ぶ朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">香ばしいアーモンドバターを塗って焼き上げたご当地モーニング。元気に一日を出発できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.41点。「駅近で天然温泉とサウナに入れて疲れが取れました」「朝食のアーモンドトーストが美味しく夜鳴きそばも安定の味でした」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 兵庫県姫路市豊沢町160-2</p>
                  <p>🚆 ＪＲ山陽本線・新幹線「姫路駅」より徒歩3分。姫路バイパス「姫路南ランプ」より約１0分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D129607"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/39176/39176.jpg"
                alt="ホテル日航姫路"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.32 点（5363件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR姫路駅中央南口正面！オークラニッコーホテルズならではの格式あるサービスと多彩な直営ダイニング
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテル日航姫路 —— 駅前ランドマーク。広々とした客室とシェフが目の前で作るライブキッチン朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">姫路駅南口を出てすぐ目の前！新幹線利用に最高のロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大型荷物を持っていても楽々チェックイン。駅前バスターミナルもすぐで市内移動に便利です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広めのワーキングデスクと高速Wi-Fiを完備したゆとりある客室設計</p>
                    <p className="text-xs text-stone-600 leading-relaxed">静かで品格ある客室。テレワークや資料作成、オンライン会議も快適に行えます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地元播磨の食材をふんだんに取り入れた豪華朝食ブッフェ「セリーナ」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">シェフ特製オムレツや名物穴子料理など。上質なホテルモーニングを堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.32点。「駅の目の前でアクセス抜群、スタッフの対応も一流でした」「お部屋が広くて清潔で、とても快適に過ごせました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 兵庫県姫路市南駅前町100</p>
                  <p>🚆 ＪＲ姫路駅より徒歩１分(ＪＲ姫路駅中央口より南へ）／　姫路バイパス南ＩＣ下車約3分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D39176"
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
              姫路の二大名物「穴子めし＆姫路おでん」を一人で味わうグルメガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 世界遺産「姫路城」を朝イチ（9:00開城）で見学し大天守登閣
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                白漆喰総塗籠造（しろしっくいそうぬりごめづくり）の壮麗な城壁。朝の澄んだ光に輝く大天守からの眺めは圧巻です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 昼食に香ばしく焼き上げた「穴子めし」を重箱で味わう
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                播磨灘名物の焼きアナゴ。秘伝のタレと山椒が絡むふっくら香ばしい身を、タレの染みたご飯とともに頬張る至福。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 夜は駅前のみゆき通り周辺の居酒屋で「姫路おでん」と地酒
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                生姜醤油をかけて食べるのが姫路流。すっきり辛口の播磨地酒「奥播磨」が、おでんの出汁と生姜の風味をキリリと引き立てます。
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
                <span>姫路駅から姫路城までは歩いて行けますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                姫路駅北口から大手前通りをまっすぐ歩いて約15〜20分です。駅前広場から城が正面に見えており、100円の市内循環バスも頻発しています。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>新幹線の姫路駅は「のぞみ」も停まりますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、姫路駅は「のぞみ」の一部列車や「ひかり」「さくら」「こだま」が停車し、東京・新大阪・博多方面へ乗り換えなしで直結しています。
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
