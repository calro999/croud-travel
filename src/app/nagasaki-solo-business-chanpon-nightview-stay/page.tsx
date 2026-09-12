import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【長崎出張＆夜景ひとり旅】西九州新幹線直結・天然温泉サウナ・稲佐山ビュー！本場ちゃんぽんを味わう極上宿 厳選3選',
  description: '西九州新幹線かもめ開業で進化する港町・長崎！「JR長崎駅西口直結のワールドクラスホテル」の「ヒルトン長崎」、駅東口徒歩すぐで天然温泉大浴場と夜鳴きそば完備の「ドーミーインPREMIUM長崎駅前」、駅前広場正面の格式ある老舗「ホテルニュー長崎」を徹底特集。',
  keywords: '長崎 出張 ホテル おすすめ,長崎 一人旅 ホテル,ヒルトン長崎 宿泊,ドーミーイン長崎駅前 温泉,長崎 ちゃんぽん ホテル',
  openGraph: {
    title: '【長崎出張＆夜景ひとり旅】西九州新幹線直結・天然温泉サウナ・稲佐山ビュー！本場ちゃんぽんを味わう極上宿 厳選3選',
    description: '西九州新幹線かもめ開業で進化する港町・長崎！「JR長崎駅西口直結のワールドクラスホテル」の「ヒルトン長崎」、駅東口徒歩すぐで天然温泉大浴場と夜鳴きそば完備の「ドーミーインPREMIUM長崎駅前」、駅前広場正面の格式ある老舗「ホテルニュー長崎」を徹底特集。',
    url: 'https://croud-travel.pages.dev/nagasaki-solo-business-chanpon-nightview-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【長崎出張＆夜景ひとり旅】西九州新幹線直結・天然温泉サウナ・稲佐山ビュー！本場ちゃんぽんを味わう極上宿 厳選3選',
    description: '西九州新幹線かもめ開業で進化する港町・長崎！「JR長崎駅西口直結のワールドクラスホテル」の「ヒルトン長崎」、駅東口徒歩すぐで天然温泉大浴場と夜鳴きそば完備の「ドーミーインPREMIUM長崎駅前」、駅前広場正面の格式ある老舗「ホテルニュー長崎」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/nagasaki-solo-business-chanpon-nightview-stay',
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
        <span className="text-stone-700 font-medium">長崎・出張＆世界新三大夜景・ちゃんぽん特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【長崎出張＆夜景ひとり旅】西九州新幹線直結・天然温泉サウナ・稲佐山ビュー！本場ちゃんぽんを味わう極上宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>長崎・出張＆世界新三大夜景・ちゃんぽん特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【長崎出張＆夜景ひとり旅】西九州新幹線直結・天然温泉サウナ・稲佐山ビュー！本場ちゃんぽんを味わう極上宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          西九州新幹線かもめ開業で進化する港町・長崎！「JR長崎駅西口直結のワールドクラスホテル」の「ヒルトン長崎」、駅東口徒歩すぐで天然温泉大浴場と夜鳴きそば完備の「ドーミーインPREMIUM長崎駅前」、駅前広場正面の格式ある老舗「ホテルニュー長崎」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            すり鉢状の丘陵に瞬く無数の街明かりと、長崎港に入港する大型客船——異国情緒あふれる坂の街で仕事と心を解き放つ「長崎プレミアムステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            西九州新幹線「かもめ」が発着し、大規模な駅周辺再開発で劇的な進化を遂げた国際観光都市・長崎。出島やグラバー園、大浦天主堂など江戸の鎖国期から明治の開国期にかけて培われた独自の和華蘭（わからん）文化が息づき、世界新三大夜景に認定された稲佐山からの夜景は圧巻の美しさを誇ります。日中の商談や視察をこなした後の楽しみは、本場の長崎ちゃんぽんや皿うどん、卓袱料理、そして新鮮なヒラス（ヒラマサ）の刺身と壱岐焼酎です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな長崎ステイを格上げしてくれるのが、新幹線改札から直結する最新ラグジュアリーホテルや、手足を伸ばせる天然温泉大浴場を備えた駅前宿です。港の風を感じながらサウナでととのい、高層階の客室から煌めく夜景を眺める至福。今回は出張・ひとり旅に最適な長崎駅周辺の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/183182/183182.jpg"
                alt="ヒルトン長崎（Ｈｉｌｔｏｎ　Ｎａｇａｓａｋｉ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.64 点（215件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR長崎駅西口直結・出島メッセ長崎隣接！世界的ブランドの格式と温浴施設・サウナ完備の最新ホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ヒルトン長崎 —— 西九州の新たなシンボル。広々とした洗練客室とエグゼクティブラウンジで味わう極上ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">長崎駅西口歩道橋で直結！新幹線改札から雨の日も傘なしでスムーズアクセス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">コンベンション施設「出島メッセ長崎」直結。出張のフットワークにこれ以上ない利便性を誇ります。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全室30㎡以上のゆとりある客室設計＆宿泊者専用の温浴施設・サウナを完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">手足を伸ばせる広いお風呂とドライサウナ。出張の疲れをラグジュアリーにリセットできます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階エグゼクティブラウンジや地元食材を活かした上質ダイニング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">稲佐山や長崎市街のパノラマを望む空間。静かにカクテルや読書を楽しむ優雅な時間が流れます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.64点。「駅直結で立地最高、部屋も新しく広くてサウナとお風呂も大満足でした」「スタッフの対応が洗練されていて長崎出張ならここ一択」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 長崎県長崎市尾上町4-2</p>
                  <p>🚆 長崎駅西口より徒歩1分。歩行者専用デッキで直結。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D183182"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/179673/179673.jpg"
                alt="天然温泉　鶴港の湯　ドーミーインＰＲＥＭＩＵＭ長崎駅前（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.52 点（1459件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR長崎駅東口から徒歩約5分！最上階11階の男女別天然温泉大浴場「鶴港の湯」＆名物カステラ朝食
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 鶴港の湯 ドーミーインPREMIUM長崎駅前 —— 駅前の天然温泉オアシス。サウナ・水風呂と夜鳴きそば完備の安心ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に位置する自家源泉の天然温泉大浴場「鶴港の湯」＆高温サウナ・露天風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">長崎港を見晴らす展望温泉。サウナでしっかりととのって出張の疲れを完全リフレッシュ。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」や湯上がりアイス、乳酸菌飲料の無料サービスが充実</p>
                    <p className="text-xs text-stone-600 leading-relaxed">思案橋でちゃんぽんと地酒を楽しんだ後のシメに最適。一人旅でも温かく迎えてくれる定番の安心感です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">長崎名物「皿うどん」や角煮ご飯、カステラが並ぶ豪華朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から長崎の美食を心ゆくまで堪能。活力をチャージして一日を出発できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.52点。「駅近で天然温泉とサウナに入れるのがありがたい」「朝食の皿うどんとカステラが美味しく、夜鳴きそばも安定の味でした」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 長崎県長崎市五島町2-29</p>
                  <p>🚆 長崎駅より徒歩にて約10分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D179673"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4629/4629.jpg"
                alt="ホテルニュー長崎（ＨＯＴＥＬ　ＮＥＷ　ＮＡＧＡＳＡＫＩ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.43 点（1138件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR長崎駅東口正面！路面電車電停やアミュプラザ長崎直結の伝統ある名門シティホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルニュー長崎 —— 駅前のランドマーク。落ち着きある客室と一流シェフが手がける本格中国料理・和洋朝食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">長崎駅前広場に面し、アミュプラザ長崎や路面電車乗り場へすぐの好立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">市内各地（新地中華街・グラバー園・平和公園）への移動が極めてスムーズです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広めのワーキングデスクと高速Wi-Fiを完備したゆとりある客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">出張のPC作業やテレワークが非常に快適。静音性に優れ、快適な眠りをサポートします。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">中国料理「桃林」や日本料理「錦鶴」など長崎屈指の直営レストラン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">格式ある老舗ならではの洗練された美食。一人でも優雅なディナータイムを過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.43点。「駅の目の前でアクセス抜群、スタッフの対応も一流でした」「部屋が広くて清潔で、とても快適に過ごせました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 長崎県長崎市大黒町14-5</p>
                  <p>🚆 ＪＲ長崎駅横☆JR長崎駅東口から徒歩5分☆</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4629"
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
              長崎の夜を一人旅で満喫するスマートグルメ＆夜景ガイド
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 新地中華街や思案橋の老舗で「長崎ちゃんぽん」をすすり、ハトシをつまむ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                豚骨と鶏ガラの濃厚白湯スープに、牡蠣やイカ、キャベツが山盛り。エビのすり身をパンで挟んで揚げた「ハトシ」も必食です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 思案橋横丁のディープな酒場で地酒「六十餘洲（ろくじゅうよしゅう）」と一口餃子
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                歴史ある横丁のカウンター席。パリッと香ばしい一口餃子を肴に、壱岐の麦焼酎や長崎の地酒を傾ける大人の時間。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 稲佐山展望台または鍋冠山（なべかんむりやま）展望台からの夜景鑑賞
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                街明かりが港を包み込む「鶴の港」の壮大な夜景。長崎駅前から路線バスやロープウェイで手軽にアクセスできます。
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
                <span>長崎空港から長崎駅や市内ホテルへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                長崎空港から市内行きリムジンバス（出島道路経由）が運行しており、約40〜45分でJR長崎駅前へ直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>市内の路面電車（長崎電気軌道）は交通系ICカードが使えますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい、SuicaやICOCA、nimocaなど全国の主要交通系ICカードが全線で利用可能で、均一運賃で手軽に移動できます。
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
