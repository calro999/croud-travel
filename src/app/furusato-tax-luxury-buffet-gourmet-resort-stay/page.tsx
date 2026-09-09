import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '豪華ディナービュッフェ＆出来たてライブキッチン極上温泉宿×ふるさと納税完全ガイド【2026年最新】鬼怒川あさや・別府杉乃井・登別グランド',
  description: 'カニ・黒毛和牛ステーキ・握り寿司・旬スイーツが食べ放題！全国のバイキングランキングで常に頂点に君臨する名門ホテルを厳選。和洋中100種超の料理と空中庭園露天風呂を誇る日光鬼怒川「あさや」、別府湾を一望する棚湯と圧巻のワールドダイニング「別府温泉 杉乃井ホテル」、北海道の海の幸と庭園露天風呂を満喫する「登別グランドホテル」。家族旅行やグループ旅に最高の美食エンタメ温泉を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '豪華バイキング＆ディナービュッフェ名門宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    'ホテル バイキング クーポン',
    'オールインクルーシブ 割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-luxury-buffet-gourmet-resort-stay/' },
  openGraph: {
    title: '豪華ディナービュッフェ＆出来たてライブキッチン極上温泉宿×ふるさと納税完全ガイド【2026年最新】鬼怒川あさや・別府杉乃井・登別グランド',
    description: 'カニ・黒毛和牛ステーキ・握り寿司・旬スイーツが食べ放題！全国のバイキングランキングで常に頂点に君臨する名門ホテルを厳選。和洋中100種超の料理と空中庭園露天風呂を誇る日光鬼怒川「あさや」、別府湾を一望する棚湯と圧巻のワールドダイニング「別府温泉 杉乃井ホテル」、北海道の海の幸と庭園露天風呂を満喫する「登別グランドホテル」。家族旅行やグループ旅に最高の美食エンタメ温泉を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-luxury-buffet-gourmet-resort-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoLuxuryBuffetGourmetStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '豪華ビュッフェ＆バイキング名門温泉宿特集', item: baseUrl + '/furusato-tax-luxury-buffet-gourmet-resort-stay' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">豪華ビュッフェ＆バイキング名門温泉宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            豪華バイキング＆ディナービュッフェ名門宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            豪華ディナービュッフェ＆出来たてライブキッチン極上温泉宿×ふるさと納税完全ガイド【2026年最新】鬼怒川あさや・別府杉乃井・登別グランド
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            旅行の醍醐味といえば何と言っても美味しい食事。しかし、家族や仲間で好みが分かれたり、決まった献立の会席料理だと子どもが食べきれなかったりすることも。そんな悩みを一瞬で解決し、大人から子どもまで全員が満面の笑顔になれるのが「圧倒的なクオリティを誇る豪華ディナービュッフェ宿」です。職人が目の前で握る新鮮なお寿司、シェフがフランベして焼き上げる熱々の黒毛和牛ステーキ、サクサクの揚げたて天ぷら、そして季節のタルトやジェラートが並ぶ華やかなデザートコーナー――出来たての美味しさを五感で楽しむライブキッチンは、まさに食のエンターテインメント。全国バイキング宿ランキングで殿堂入りを果たす日光鬼怒川の老舗「あさや」、別府湾のパノラマ絶景風呂「棚湯」と巨大リゾート空間を擁する大分・別府の「杉乃井ホテル」、そして鬼の棲む名湯・登別温泉で北海道産食材尽くしのバイキングを誇る「登別グランドホテル」。家族みんなで泊まる大型リゾートは宿泊費がかさみがちですが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を活用すれば、実質自己負担2,000円で驚くほどお得に予約できます。お腹も心も満たされる、夢の美食バイキング温泉旅へ出かけましょう。
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行からゆとりの3年間</span>
            <span>✓ すでに予約済みの宿泊にも「あとから割引」可能</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベルクーポンを獲得する →
            </a>
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-amber-200 font-bold px-5 py-3 rounded-2xl border border-amber-300/20 text-xs sm:text-sm transition"
            >
              📖 初めての方向け完全マニュアル
            </Link>
          </div>
        </header>

        {/* 3つの醍醐味セクション */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-6 flex items-center gap-3">
            <span className="text-amber-600 text-xl md:text-2xl">◆</span>
            この旅で体感したい3つの醍醐味
          </h2>
          <div className="grid gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  職人技を間近で体感！出来たて熱々を提供する「ライブキッチン」の迫力
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                名門ホテルのビュッフェは作り置きとは一線を画します。シェフが客の目の前で焼き上げるジューシーな国産牛ステーキや、板前が手際よく握る旬の地魚寿司、パティシエが目の前で仕上げる搾りたてモンブランなど、五感で味わうライブパフォーマンスが食欲を最高潮にかき立てます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  北海道の海鮮丼、宇都宮餃子、大分とり天！地域色豊かなご当地名物が勢揃い
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                全国のバイキング名宿では、その土地ならではの郷土料理やご当地B級グルメコーナーが大充実。いくらやホタテを自分で好きなだけ盛り付ける勝手丼、日光湯波の創作料理、大分名物のりゅうきゅうや中津からあげなど、名産地を丸ごと食べ尽くす贅沢な味覚探訪が叶います。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  子どもからシニアまで全員が大満足！三世代家族旅行でも好き嫌いの心配ゼロ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                離乳食やキッズ向けメニューから、シニアに嬉しい優しい味付けの和食小鉢、本格中華やイタリアンまで何でも揃うビュッフェは、三世代旅行に最もおすすめのスタイル。家族それぞれが自分の好きなペースで好みの料理を選べるため、全員が笑顔で楽しいディナータイムを過ごせます。
              </p>
            </div>
  
          </div>
        </section>

        {/* 厳選名宿セクション */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-3 flex items-center gap-3">
              <span className="text-amber-600 text-xl md:text-2xl">◆</span>
              ふるさと納税で泊まる厳選名宿
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              楽天トラベルAPIから最新の実在宿データを取得。対象自治体のふるさと納税クーポンを利用して実質2,000円で泊まれる名宿です。
            </p>
          </div>

          <div className="space-y-8">

            {/* ホテルカード 1 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8643/8643.jpg"
                  alt="鬼怒川温泉　あさや"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.63 (5531件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    栃木県日光市・全国ビュッフェランキング殿堂入りの老舗名門ホテル
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    鬼怒川温泉　あさや
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    創業130余年の歴史を誇り、圧巻の吹き抜けロビーが象徴的な鬼怒川温泉屈指の大型名門ホテル。夕食の「ブッフェ」は和洋中100種以上ものメニューが並び、全国のバイキング宿ランキングで常にトップクラスの評価を獲得。目の前で揚げるアツアツの天ぷらや本格石窯ピッツァ、あさや特製和牛カレー、ハーゲンダッツアイスや華やかなケーキバーなど、どれを食べても絶品揃いです。最上階の「空中庭園露天風呂」から望む鬼怒川の山並みと星空の絶景も旅を忘れられないものにしてくれます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「バイキングが最高、また必ず泊まりたいバイキング最高でした。また鬼怒川行く時は絶対あさやに泊まりたいと思います。クチコミの詳細はこちらから 2026-09-05 23:46:12投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 栃木県日光市鬼怒川温泉滝813</div>
                    <div><strong>アクセス:</strong> 東武浅草駅より特急で約2時間。鬼怒川温泉駅下車。東北道宇都宮I.C～日光宇都宮道今市I.C、鬼怒川方面。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約17,500円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8643"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 2 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5547/5547.jpg"
                  alt="別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.63 (12861件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    大分県別府市・別府湾のパノラマ棚湯と圧巻のワールドビュッフェリゾート
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    別府八湯の高台に位置し、別府湾と街並みを見下ろす圧倒的なスケールを誇る一大エンターテインメント温泉リゾート。段々畑状に広がる名物大展望露天風呂「棚湯」は開放感抜群。ビュッフェレストラン「TERRACE & DINING SORA」などでは、別府の湯けむりを感じながら、大分県産和牛のローストビーフや豊後水道の新鮮魚介、本格中華やエスニック料理まで世界水準の味覚が食べ放題。噴水ショーやボウリング場などアミューズメントも充実し、家族全員で一日中楽しめます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「毎年来たいホテルNo. 1初めての杉乃井ホテル仕事場の上司に勧められて来ましたが想像以上に満足できるホテルで、毎年遊びに来たいと思えるホテルです。一日中遊べて子供も大人も楽しめます。ク… 2026-09-05 14:42:36投稿 つづきは…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 大分県別府市観海寺1</div>
                    <div><strong>アクセス:</strong> 大分自動車道別府ＩＣより観海寺方面へ車で５分。ＪＲ別府駅より車で１０分。JR別府駅とホテル間を結ぶ無料シャトルバス有り。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約16,600円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5547"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 3 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/39175/39175.jpg"
                  alt="登別温泉　登別グランドホテル"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.26 (3290件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    北海道登別市・ドーム型ローマ風呂と北海道産食材尽くしのバイキング
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    登別温泉　登別グランドホテル
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    「登別の迎賓館」と称され、昭和13年創業の歴史と格式を誇る名門温泉ホテル。本格的なドーム型ローマ風大浴場や滝が流れ落ちる情緒豊かな庭園露天風呂で、食塩泉・硫黄泉・鉄泉の3つの名湯を満喫できます。夕食ビュッフェでは、北海道産の新鮮なホタテやサーモンの刺身、名物の熱々ジンギスカン、旬の野菜や乳製品を使った創作洋食など、北の大地の恵みが目白押し。熟練の料理人が仕上げる上質バイキングを心ゆくまでお楽しみいただけます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「バイキング料理に大満足、イカの塩辛も欲しいバイキングの料理が美味しかったー!!大満足でしたー!!強いて言えば、あさもイカの塩辛置いて欲しいです!クチコミの詳細はこちらから https:… 2026-09-02 01:15:37投稿 つづきは…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 北海道登別市登別温泉町154</div>
                    <div><strong>アクセス:</strong> JR登別駅からタクシーにて約13分、路線バスにて登別駅⇒登別温泉ターミナル約15分（バス運賃片道350円）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約15,400円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D39175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

              <li key="furusato-tax-three-generation-family-luxury-stay">
                <Link href="/furusato-tax-three-generation-family-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【3世代家族旅行×高額枠一括消化】親孝行＆孫と泊まる客室露天風呂・離れ宿完全ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-award-winning-breakfast-gourmet-hotel-stay">
                <Link href="/furusato-tax-award-winning-breakfast-gourmet-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【朝食受賞ホテル×ふるさと納税】地場産フルーツや焼きたてパンが自慢の贅沢モーニング</span>
                </Link>
              </li>
  

              <li key="furusato-tax-welcome-baby-family-kids-stay">
                <Link href="/furusato-tax-welcome-baby-family-kids-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【赤ちゃん連れ安心×ふるさと納税】ウェルカムベビー認定宿＆貸切風呂完備の家族温泉旅</span>
                </Link>
              </li>
  

              <li key="furusato-tax-themepark-aquarium-family-hotel-stay">
                <Link href="/furusato-tax-themepark-aquarium-family-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【テーマパーク＆水族館直結×ふるさと納税】家族で遊び尽くす人気オフィシャルホテル</span>
                </Link>
              </li>
  
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
