import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【別府温泉ひとり旅・湯治おこもり】別府湾パノラマ・源泉掛け流し客室露天・名物地獄蒸し！湧出量日本一の温泉都で癒やされる名宿 厳選3選',
  description: '日本一の湧出量と泉種を誇るおんせん県おおいたの象徴・別府！「別府湾を一望する大展望露天風呂・棚湯と圧巻のエンタメ温泉リゾート」の「杉乃井ホテル」、全室客室露天風呂付きで海と一体化する波打ち際の最高峰「AMANE RESORT SEIKAI（潮騒の宿 晴海）」、庭園露天風呂と関アジ関サバ会席が自慢の老舗「ホテル白菊」を徹底特集。',
  keywords: '別府温泉 一人旅 宿,別府 温泉 おこもり 一人,杉乃井ホテル 宿泊,潮騒の宿 晴海 客室露天,別府 ひとり旅 部屋食',
  openGraph: {
    title: '【別府温泉ひとり旅・湯治おこもり】別府湾パノラマ・源泉掛け流し客室露天・名物地獄蒸し！湧出量日本一の温泉都で癒やされる名宿 厳選3選',
    description: '日本一の湧出量と泉種を誇るおんせん県おおいたの象徴・別府！「別府湾を一望する大展望露天風呂・棚湯と圧巻のエンタメ温泉リゾート」の「杉乃井ホテル」、全室客室露天風呂付きで海と一体化する波打ち際の最高峰「AMANE RESORT SEIKAI（潮騒の宿 晴海）」、庭園露天風呂と関アジ関サバ会席が自慢の老舗「ホテル白菊」を徹底特集。',
    url: 'https://croud-travel.pages.dev/beppu-solo-retreat-kakenagashi-jigoku-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【別府温泉ひとり旅・湯治おこもり】別府湾パノラマ・源泉掛け流し客室露天・名物地獄蒸し！湧出量日本一の温泉都で癒やされる名宿 厳選3選',
    description: '日本一の湧出量と泉種を誇るおんせん県おおいたの象徴・別府！「別府湾を一望する大展望露天風呂・棚湯と圧巻のエンタメ温泉リゾート」の「杉乃井ホテル」、全室客室露天風呂付きで海と一体化する波打ち際の最高峰「AMANE RESORT SEIKAI（潮騒の宿 晴海）」、庭園露天風呂と関アジ関サバ会席が自慢の老舗「ホテル白菊」を徹底特集。',
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
    datePublished: '2026-09-11T03:30:00+09:00',
    dateModified: '2026-09-11T03:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/beppu-solo-retreat-kakenagashi-jigoku-stay',
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
        <span className="text-stone-700 font-medium">別府温泉・源泉掛け流し＆地獄めぐり特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【別府温泉ひとり旅・湯治おこもり】別府湾パノラマ・源泉掛け流し客室露天・名物地獄蒸し！湧出量日本一の温泉都で癒やされる名宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>別府温泉・源泉掛け流し＆地獄めぐり特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【別府温泉ひとり旅・湯治おこもり】別府湾パノラマ・源泉掛け流し客室露天・名物地獄蒸し！湧出量日本一の温泉都で癒やされる名宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          日本一の湧出量と泉種を誇るおんせん県おおいたの象徴・別府！「別府湾を一望する大展望露天風呂・棚湯と圧巻のエンタメ温泉リゾート」の「杉乃井ホテル」、全室客室露天風呂付きで海と一体化する波打ち際の最高峰「AMANE RESORT SEIKAI（潮騒の宿 晴海）」、庭園露天風呂と関アジ関サバ会席が自慢の老舗「ホテル白菊」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            湯煙たなびく鉄輪の町並みと、海と空が溶け合う別府湾の水平線——日本一の源泉力に身を委ねて魂をととのえる「別府温泉ひとり湯治」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            毎分8万リットルを超える圧倒的な湧出量と、世界にある11の泉質のうち10種類が揃う奇跡の温泉都・大分県別府温泉。街のあちこちから立ち上る真っ白な湯煙、コバルトブルーや血の池のような色彩を放つ「地獄めぐり」、温泉の蒸気熱で野菜や魚介を蒸し上げる伝統の「地獄蒸し料理」、そして歴史ある市営の共同浴場巡りなど、温泉好きにとって生涯一度は訪れるべき聖地です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな別府でのソロステイを極上のものにしてくれるのが、別府湾の水平線と一つになる絶景展望露天風呂や、客室にいながら源泉掛け流しを独り占めできる大人の隠れ宿です。誰にも気を使わず、好きな時に好きなだけ名湯に身を沈め、大分名物の関アジ・関サバや豊後牛に舌鼓を打つ至福。今回は別府の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5547/5547.jpg"
                alt="別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.63 点（12861件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  観海寺温泉の高台に君臨する巨大温泉リゾート！別府湾と街並みを見下ろす大展望露天風呂「棚湯」
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  別府温泉 杉乃井ホテル —— 圧倒的なスケールと進化を続ける新館。海抜約250mの天空露天風呂と豪華ワールドビュッフェ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">別府湾と夜景を一望する5段の棚田状大展望露天風呂「棚湯」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">空と海が広がる圧倒的な開放感。朝陽が水平線から昇る瞬間や、街の明かりが煌めく夜景風呂は圧巻です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">2023年オープンの最新フラッグシップ棟「宙館（そらかん）」の洗練客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">最上階の宿泊者専用展望露天風呂「宙湯」や、オープンキッチンの贅沢ビュッフェ「TERRACE & DINING SORA」を堪能できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">JR別府駅西口から無料シャトルバスが15分間隔で運行</p>
                    <p className="text-xs text-stone-600 leading-relaxed">アクセスも極めてスムーズ。一人でも広大な館内で温泉プールやアクティビティを心ゆくまで楽しめます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.63点。「宙館に宿泊しましたが、最上階のお風呂からの眺望とお食事が感動的でした」「一人旅でも広大なリゾートをマイペースに楽しめました」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 大分県別府市観海寺1</p>
                  <p>🚆 大分自動車道別府ＩＣより観海寺方面へ車で５分。ＪＲ別府駅より車で１０分。JR別府駅とホテル間を結ぶ無料シャトルバス有り。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5547"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/78242/78242.jpg"
                alt="ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＳＥＩＫＡＩ（潮騒の宿　晴海）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.61 点（686件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  全客室が源泉掛け流しの露天風呂付きオーシャンビュー！海と波の音に包まれる上質な海辺のリゾート
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  AMANE RESORT SEIKAI（潮騒の宿 晴海） —— 海抜0メートルのインフィニティ温泉。波打ち際のテラスとモダンデザイン
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室に別府湾を望むプライベートな源泉掛け流し露天風呂を完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">いつでも好きな時に客室の露天風呂へ。波の音をBGMに誰にも邪魔されない至極の湯浴みが叶います。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">海に浸かっているかのような感覚を味わえる1階大浴場「潮騒の湯」</p>
                    <p className="text-xs text-stone-600 leading-relaxed">波打ち際に位置する開放的な露天風呂。水平線を眺めながら心身の緊張をすべて解き放つことができます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">海鮮料理、フレンチ、日本料理から選べる洗練された館内レストラン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">関アジ・関サバをはじめ豊後水道の極上の海の幸。一人でも優雅にコース料理を堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.61点。「部屋の露天風呂から見る朝日の美しさに言葉を失いました」「スタッフのホスピタリティも素晴らしく、一人で贅沢な休日を過ごすのに最高」と大人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 大分県別府市上人ヶ浜町6-24</p>
                  <p>🚆 別府大学駅より徒歩１０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D78242"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/12660/12660.jpg"
                alt="別府温泉　ホテル白菊"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.52 点（1463件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  別府駅西口徒歩8分の閑静な高台！樹齢200年の楠が茂る庭園露天風呂と名物会席料理
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  別府温泉 ホテル白菊 —— 伝統とモダンが美しく調和する老舗宿。美肌の天然温泉と豊後牛・関アジ美食
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">天然檜をふんだんに使った「楠湯殿」や御影石の庭園露天風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">美肌成分を豊富に含む炭酸水素塩泉の自家源泉。肌をしっとりと包み込む柔らかな湯ざわりです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">別府駅徒歩圏内ながら緑に囲まれた静寂な大人のリトリート環境</p>
                    <p className="text-xs text-stone-600 leading-relaxed">街の喧騒から離れた落ち着いた佇まい。庭園を眺めながら静かな時間を過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">料理旅館の伝統を受け継ぐ豊後会席とお部屋食プランの充実</p>
                    <p className="text-xs text-stone-600 leading-relaxed">大分の山海の幸を丁寧に仕上げた会席料理。おひとりさまでも気兼ねなくお部屋で贅沢な夕餉を味わえます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.52点。「スタッフの皆さんの温かいおもてなしとお風呂の泉質に癒やされました」「お料理が一品一品とても美味しく、一人でも安心して泊まれました」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 大分県別府市上田の湯町16-36</p>
                  <p>🚆 JR日豊本線別府駅西口より徒歩7分／別府ICより車で13分／大分空港より車で50分／博多駅より2時間10分（別府駅下車）</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12660"
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
              別府温泉の「地獄めぐり＆共同浴場」を一人で味わい尽くす散策術
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 鉄輪（かんなわ）温泉エリアの「地獄蒸し工房 鉄輪」で自炊体験
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                温泉の蒸気釜を使って、持参または購入した卵、さつまいも、豚肉を蒸し上げる名物体験。塩分を含んだ温泉蒸気の自然な味付けが絶品です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 国指定名勝「海地獄」のコバルトブルーと極楽温室
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                神秘的な青い湯面から立ち上る白い湯煙。温泉熱を利用した大鬼蓮（オオオニバス）の池など、ダイナミックな地球の息吹を体感できます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 竹瓦温泉（たけがわらおんせん）の唐破風建築と砂湯体験
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                明治12年創設の別府のシンボル。温かい温泉砂を全身にかけてもらう「砂湯」でじっくり汗を流せば、老廃物が一気にデトックスされます。
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
                <span>大分空港から別府市内ホテルへのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                大分空港から空港特急バス「エアライナー」が運行しており、別府駅前や別府北浜まで約45〜50分で直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>車がなくても別府の地獄めぐりは回れますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                別府駅から亀の井バスの路線バスが頻発しており、鉄輪エリアや海地獄・血の池地獄へ簡単にアクセスできます。定期観光バス「別府地獄めぐりコース」を利用するのも便利です。
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
