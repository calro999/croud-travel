import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【高知出張＆土佐酒ひとり旅】ひろめ市場徒歩すぐ・天然温泉露天風呂・絶品カツオ藁焼き！南国土佐で魂を解放する名宿 厳選3選',
  description: '黒潮躍る太平洋と坂本龍馬のふるさと・高知！「ひろめ市場徒歩5分・最上階に天然温泉大浴場と夜鳴きそば完備」の「ドーミーイン高知」、創業140余年・皇族も迎える名門旅館「城西館」、高知駅前徒歩2分の好立地を誇る「JRクレメントイン高知」を徹底特集。',
  keywords: '高知 出張 ホテル おすすめ,高知 一人旅 ホテル,ドーミーイン高知 温泉,ひろめ市場 ホテル 高知,高知 カツオ塩たたき ホテル',
  openGraph: {
    title: '【高知出張＆土佐酒ひとり旅】ひろめ市場徒歩すぐ・天然温泉露天風呂・絶品カツオ藁焼き！南国土佐で魂を解放する名宿 厳選3選',
    description: '黒潮躍る太平洋と坂本龍馬のふるさと・高知！「ひろめ市場徒歩5分・最上階に天然温泉大浴場と夜鳴きそば完備」の「ドーミーイン高知」、創業140余年・皇族も迎える名門旅館「城西館」、高知駅前徒歩2分の好立地を誇る「JRクレメントイン高知」を徹底特集。',
    url: 'https://croud-travel.pages.dev/kochi-solo-business-hirome-katsuo-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【高知出張＆土佐酒ひとり旅】ひろめ市場徒歩すぐ・天然温泉露天風呂・絶品カツオ藁焼き！南国土佐で魂を解放する名宿 厳選3選',
    description: '黒潮躍る太平洋と坂本龍馬のふるさと・高知！「ひろめ市場徒歩5分・最上階に天然温泉大浴場と夜鳴きそば完備」の「ドーミーイン高知」、創業140余年・皇族も迎える名門旅館「城西館」、高知駅前徒歩2分の好立地を誇る「JRクレメントイン高知」を徹底特集。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/kochi-solo-business-hirome-katsuo-stay',
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
        <span className="text-stone-700 font-medium">高知・出張＆ひろめ市場・カツオ塩たたき特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【高知出張＆土佐酒ひとり旅】ひろめ市場徒歩すぐ・天然温泉露天風呂・絶品カツオ藁焼き！南国土佐で魂を解放する名宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>高知・出張＆ひろめ市場・カツオ塩たたき特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【高知出張＆土佐酒ひとり旅】ひろめ市場徒歩すぐ・天然温泉露天風呂・絶品カツオ藁焼き！南国土佐で魂を解放する名宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          黒潮躍る太平洋と坂本龍馬のふるさと・高知！「ひろめ市場徒歩5分・最上階に天然温泉大浴場と夜鳴きそば完備」の「ドーミーイン高知」、創業140余年・皇族も迎える名門旅館「城西館」、高知駅前徒歩2分の好立地を誇る「JRクレメントイン高知」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            鏡川の清流と高知城の天守閣、藁の炎で香ばしく炙られる戻り鰹——ひろめ市場の熱気と名湯に包まれる「高知・豪快プレミアム出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            高知龍馬空港から市内中心部までバスで約30分。南国特有の明るい太陽と、雄大な太平洋の波音が響く高知県高知市。日中のビジネスや商談を終えた後、誰もが吸い寄せられるのが帯屋町アーケード内にある屋台村「ひろめ市場」です。約60店舗がひしめく活気あふれる空間で、豪快な藁焼きの炎で焼き上げられたばかりの温かい「カツオの塩たたき」にニンニクスライスを乗せ、淡麗辛口の土佐酒「司牡丹」「酔鯨」で乾杯する体験は、日本中どこを探してもここにしかありません。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな高知ステイをさらに心地よいものにしてくれるのが、ひろめ市場から歩いてすぐの天然温泉ホテルや、高知城を一望する歴史ある名門宿です。酔い覚ましに露天風呂で星空を見上げ、上質なベッドでぐっすり熟睡。翌朝は名物「日曜市」や桂浜へ繰り出す……今回は出張・ひとり旅に最適な高知の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/165939/165939.jpg"
                alt="天然温泉　紺碧の湯　ドーミーイン高知（ドーミーイン・御宿野乃　ホテルズグループ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.42 点（2170件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  ひろめ市場まで徒歩約5分！最上階の男女別天然温泉大浴場「紺碧の湯」＆露天風呂・サウナ完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  天然温泉 紺碧の湯 ドーミーイン高知 —— 帯屋町アーケード近く。天然温泉とサウナでととのい、ひろめ市場へ直行できる最強拠点
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に位置する天然温泉大浴場「紺碧の湯」＆露天風呂・水風呂付きサウナ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">手足を伸ばして浸かる本格天然温泉。サウナで汗を流して出張の緊張を一気に解きほぐせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ひろめ市場や帯屋町商店街へ徒歩数分の抜群のロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">夜遅くまでカツオと土佐酒を満喫しても歩いてすぐにホテルへ帰還できる最高の立地です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「夜鳴きそば」無料サービス＆カツオ飯が並ぶ豪華朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝食にはカツオのたたきや郷土料理がずらり。朝から高知の活力をチャージして出発できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.42点。「ひろめ市場から歩いてすぐで立地最強！最上階の温泉とサウナも最高でした」「夜鳴きそばも美味しく高知出張の定宿です」と大絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 高知県高知市帯屋町1-9-12　</p>
                  <p>🚆 JR「高知駅南口」より徒歩12分/とさでん交通「堀詰電停」より徒歩2分「蓮池町通り電停」より徒歩5分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D165939"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8075/8075.jpg"
                alt="城西館（じょうせいかん）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.63 点（3632件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  創業明治七年・皇族や文豪を迎えてきた老舗旅館！最上階の展望露天風呂から高知城下町を一望
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  城西館（じょうせいかん） —— 土佐のおもてなしの最高峰。展望大浴場と藁焼きタタキ実演工房を備えた名門宿
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階展望露天大浴場から望む高知城や市街地・南国の山並みパノラマ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">開放感あふれるスカイビュー。澄んだ朝の光や夜景を眺めながら優雅に温泉を満喫できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">館内の藁焼きタタキ実演コーナーで焼き上げる出来立てのカツオ塩たたき</p>
                    <p className="text-xs text-stone-600 leading-relaxed">職人が豪快な藁火で焼き上げる本場の味。香ばしい藁の香りと温かい身の旨味が格別です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">老舗ならではの細やかで行き届いたホスピタリティとお部屋食プラン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大人のひとり旅を温かく迎えてくれる品格ある空間。自分へのご褒美ステイに最適です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.63点。「スタッフの方々の接客が素晴らしく、お風呂からの景色も最高でした」「藁焼きカツオが信じられないほど美味しく感動しました」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 高知県高知市上町2-5-34</p>
                  <p>🚆 路面電車上町1丁目電停目の前。ＪＲ高知駅よりお車で７分、高知ＩＣよりお車で２０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8075"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/181087/181087.jpg"
                alt="ＪＲクレメントイン高知"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.39 点（1721件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR高知駅南口から徒歩わずか2分！新しく機能的な客室と全室シモンズベッド完備の快適ステイ
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ＪＲクレメントイン高知 —— 駅前の好ロケーション。ワイドデスクと充実した設備でビジネス出張を強力サポート
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">高知駅前ロータリーすぐ！空港連絡バスやJR特急の利用に抜群のフットワーク</p>
                    <p className="text-xs text-stone-600 leading-relaxed">雨の日でも移動が楽々。チェックイン前後に荷物を預けてスムーズに行動できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">シモンズ社製ベッドと加湿空気清浄機、広めのワーキングデスク完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">高速Wi-Fi完備で客室でのPC作業やオンライン会議も快適。静音性に優れ熟睡できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">高知の食材を取り入れた美味しい和洋朝食ビュッフェ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">朝から活力満点のごはん。出張の一日を元気にスタートすることができます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.39点。「高知駅から近くて新しく部屋も綺麗でした」「ベッドの寝心地が良くデスクワークもしやすかった」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 高知県高知市北本町1-10-59</p>
                  <p>🚆 ＪＲ　高知駅より徒歩にて約２分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D181087"
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
              高知「ひろめ市場」を一人旅で120％楽しむ相席＆注文の極意
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. まずは「やいろ亭」または「明神丸」でカツオの塩たたきを注文
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                厚切りに切られたカツオに粗塩とスライスにんにく、わさびを乗せて一口で。藁の香ばしさと脂の乗った身の甘みが口いっぱいに広がります。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 相席になった地元のお客さんと笑顔で「乾杯！」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ひろめ市場は相席が基本ルール。「どちらから来られたが？」と気さくに声をかけてくれる地元民と土佐酒を酌み交わすのが最高の醍醐味。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 屋台餃子「安兵衛」のパリパリ揚げ焼き餃子でシメ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                極薄の皮を多めの油でパリッと黄金色に焼き上げた小ぶりな餃子。ビールやレモンサワーとの相性が抜群です。
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
                <span>高知龍馬空港から高知駅や市内ホテルへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                高知龍馬空港から市内行きリムジンバスが頻発しており、JR高知駅前やはりまや橋まで約30〜35分でスムーズに直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人でひろめ市場の席を確保するのは大変ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                夜19時前後は混み合いますが、一人客なら相席の空きスペースを見つけやすく、注文前に席の確保（ハンカチや上着を置く）をしておけば安心です。
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
