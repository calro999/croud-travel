import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【徳島出張＆眉山ひとり旅】徳島駅直結・リバーサイド天然温泉・阿波尾鶏＆徳島ラーメン！四国の東玄関で癒やされる極上ホテル 厳選3選',
  description: '本州（神戸・淡路島）から高速バス直結・阿波おどりの本場「徳島」！「JR徳島駅直結で眉山を望むランドマークホテル」の「JRホテルクレメント徳島」、新町川のリバーサイドに天然温泉大浴場を備えた「徳島グランヴィリオホテル」、徳島駅前徒歩1分で安心ステイの「ダイワロイネットホテル徳島駅前」を徹底比較。',
  keywords: '徳島 出張 ホテル おすすめ,徳島 一人旅 ホテル,JRホテルクレメント徳島 宿泊,徳島グランヴィリオホテル 温泉,徳島ラーメン ホテル 駅前',
  openGraph: {
    title: '【徳島出張＆眉山ひとり旅】徳島駅直結・リバーサイド天然温泉・阿波尾鶏＆徳島ラーメン！四国の東玄関で癒やされる極上ホテル 厳選3選',
    description: '本州（神戸・淡路島）から高速バス直結・阿波おどりの本場「徳島」！「JR徳島駅直結で眉山を望むランドマークホテル」の「JRホテルクレメント徳島」、新町川のリバーサイドに天然温泉大浴場を備えた「徳島グランヴィリオホテル」、徳島駅前徒歩1分で安心ステイの「ダイワロイネットホテル徳島駅前」を徹底比較。',
    url: 'https://croud-travel.pages.dev/tokushima-solo-business-awataisen-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【徳島出張＆眉山ひとり旅】徳島駅直結・リバーサイド天然温泉・阿波尾鶏＆徳島ラーメン！四国の東玄関で癒やされる極上ホテル 厳選3選',
    description: '本州（神戸・淡路島）から高速バス直結・阿波おどりの本場「徳島」！「JR徳島駅直結で眉山を望むランドマークホテル」の「JRホテルクレメント徳島」、新町川のリバーサイドに天然温泉大浴場を備えた「徳島グランヴィリオホテル」、徳島駅前徒歩1分で安心ステイの「ダイワロイネットホテル徳島駅前」を徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/tokushima-solo-business-awataisen-onsen-stay',
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
        <span className="text-stone-700 font-medium">徳島・出張＆阿波尾鶏・リバーサイド特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【徳島出張＆眉山ひとり旅】徳島駅直結・リバーサイド天然温泉・阿波尾鶏＆徳島ラーメン！四国の東玄関で癒やされる極上ホテル 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>徳島・出張＆阿波尾鶏・リバーサイド特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【徳島出張＆眉山ひとり旅】徳島駅直結・リバーサイド天然温泉・阿波尾鶏＆徳島ラーメン！四国の東玄関で癒やされる極上ホテル 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          本州（神戸・淡路島）から高速バス直結・阿波おどりの本場「徳島」！「JR徳島駅直結で眉山を望むランドマークホテル」の「JRホテルクレメント徳島」、新町川のリバーサイドに天然温泉大浴場を備えた「徳島グランヴィリオホテル」、徳島駅前徒歩1分で安心ステイの「ダイワロイネットホテル徳島駅前」を徹底比較。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            万葉の昔から愛される眉山（びざん）のなだらかな稜線と、新町川の水面に映る街明かり——阿波踊りの熱気と地鶏美食に満たされる「徳島スマートステイ」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            神戸・三宮や大阪から明石海峡大橋・大鳴門橋を経由する高速バスで約2時間〜2時間半。四国の東の玄関口として製薬産業や化学・電子産業が盛んな徳島市。四国三郎・吉野川のデルタ地帯に発達した水の都であり、8月の阿波おどり期間中には国内外から100万人を超える人々で沸き返ります。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな徳島出張の夜を特別なものにしてくれるのが、歯ごたえとコクが抜群のブランド地鶏「阿波尾鶏（あわおどり）」の炭火焼きや、濃厚な豚骨醤油スープに生卵と甘辛豚バラ肉が乗る「徳島ラーメン」、そして鳴門海峡の荒波で育った天然鳴門鯛。駅直結のランドマークや川沿いの天然温泉ホテルを拠点に、仕事も食も心ゆくまで堪能できる厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/4721/4721.jpg"
                alt="ＪＲホテルクレメント徳島"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.34 点（5180件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR徳島駅直結・高速バスターミナルすぐ！眉山を一望する四国屈指のランドマークシティホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  JRホテルクレメント徳島 —— 駅ナカ直結の安心と品格。広々とした客室と地元徳島の旬食材を味わう美食空間
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">JR徳島駅改札・高速バスターミナルから雨に濡れずに直結アクセス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">神戸・大阪方面からの高速バス利用にも最適。チェックイン前後の荷物預けもスムーズです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室から徳島のシンボル「眉山」または市街地・吉野川方面のパノラマビュー</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ゆとりある客室設計。落ち着いたインテリアと快適なベッドで出張の夜を静かに寛げます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">徳島県産米や鳴門鯛、阿波尾鶏など地元食材をふんだんに使った朝食</p>
                    <p className="text-xs text-stone-600 leading-relaxed">一流シェフが腕を振るう朝の食体験。出張の一日を最高の活力でスタートできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.34点。「駅直結で高速バス乗り場も目の前で本当に便利でした」「スタッフの対応がとても丁寧で部屋も広く快適でした」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 徳島県徳島市寺島本町西1-61</p>
                  <p>🚆 ＪＲ徳島駅直結０分・高速バス降り場より徒歩１分・徳島阿波おどり空港より車で約30分・徳島Ｉ．Ｃ．から車で１５分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4721"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/18922/18922.jpg"
                alt="徳島グランヴィリオホテル　－ルートインホテルズ－"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.12 点（5575件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  新町川のほとりに佇むリバーサイドリゾート！自家源泉の天然温泉大浴場「華の湯」完備
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  徳島グランヴィリオホテル —— 水都・徳島のオアシス。川沿いの絶景露天温泉と多彩な和洋レストラン
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">新町川を望む自家源泉の天然温泉大浴場「華の湯」（露天風呂・サウナ完備）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">手足を伸ばして浸かる天然温泉。川風を感じる露天風呂で出張の疲れを心地よく洗い流せます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">平面駐車場無料完備！車での出張やドライブ一人旅に最強の利便性</p>
                    <p className="text-xs text-stone-600 leading-relaxed">本州からのマイカー・レンタカー利用に最適。大型車でもストレスなく駐車できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">徳島近海の新鮮な海の幸や阿波牛を味わえる充実したホテル内ダイニング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">外に出ずとも本格的なディナーを堪能可能。リバーサイドの優雅な時間を過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.12点。「天然温泉の大浴場があって露天風呂が気持ちよかった」「駐車場が無料で川沿いの景色も綺麗でした」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 徳島県徳島市万代町3-5-1</p>
                  <p>🚆 徳島県庁・徳島県警の東隣/ＪＲ徳島駅～車で１０分／徳島阿波おどり空港～車で約２５分／国道55号線へのアクセスもスムーズ</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18922"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/149130/149130.jpg"
                alt="ダイワロイネットホテル徳島駅前"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.35 点（1925件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR徳島駅前徒歩1分！全室シモンズ製ベッド完備の機能的で清潔なスタイリッシュホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ダイワロイネットホテル徳島駅前 —— 駅前の好ロケーション。ワイドデスクと充実設備でビジネスを完全サポート
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">徳島駅前ロータリーに面し、新町橋通りや飲食店街へも徒歩すぐの立地</p>
                    <p className="text-xs text-stone-600 leading-relaxed">徳島ラーメンの名店や阿波尾鶏居酒屋へ徒歩ですぐ。夜のグルメ散策にも最適です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広めのライティングデスクと明るいデスクライト、高速Wi-Fi完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">出張のPC作業やオンラインミーティングが非常に快適。静音性にも優れた客室です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">地元徳島の名物を取り入れた美味しい和洋朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">フィッシュカツや鳴門金時など徳島ならではの味覚。朝からエネルギーを満タンにできます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.35点。「駅前すぐで迷わず行けました。部屋が綺麗でデスクワークもしやすかった」「スタッフも親切で清潔感があり安心」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 徳島県徳島市寺島本町東3丁目8番地</p>
                  <p>🚆 JR「徳島駅」より徒歩約1分 。「徳島阿波おどり空港」よりリムジンバスで（約30分）「徳島駅」下車、徒歩約1分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D149130"
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
              徳島「阿波尾鶏＆徳島ラーメン」を一人旅で満喫するグルメ術
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 徳島ラーメンは「生卵」をトッピングしてご飯と一緒にすする
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                濃厚な甘辛豚骨醤油スープ「茶系（いのたに、東大など）」が王道。すき焼きのように甘辛い豚バラ肉を生卵に絡めながら食べるのが絶品。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 夜は駅前居酒屋で地鶏「阿波尾鶏の骨付きもも焼き」とすだち酒
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                脂肪が少なく引き締まった肉質と深いコク。徳島特産のすだちをキュッと搾って辛口地酒「鳴門鯛」とともに。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 眉山ロープウェイで山頂へ登り徳島平野と紀伊水道を一望
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                阿波おどり会館からロープウェイで約6分。晴れた日には淡路島や和歌山方面まで見渡せる絶景スポットです。
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
                <span>関西（大阪・神戸）から徳島へ行くにはどのルートが便利ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                三宮や大阪駅から発着する高速バス（JRバス・阪急バス・徳島バス等）が約15〜30分間隔で運行しており、乗り換えなしでJR徳島駅前へダイレクトに直結しています。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>徳島空港（阿波おどり空港）から市内への移動はどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                飛行機の発着に合わせてJR徳島駅直行の空港連絡バスが運行しており、約25〜30分で駅前バスターミナルへスムーズにアクセスできます。
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
