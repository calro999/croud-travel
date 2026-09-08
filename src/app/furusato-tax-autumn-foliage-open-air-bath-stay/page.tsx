import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '赤や黄金の山並みを愛でる絶景紅葉露天風呂名旅館×ふるさと納税完全ガイド【2026年最新】日光中禅寺湖・京都嵐山・箱根小涌谷',
  description: '山一面が燃え盛るような錦秋の絶景！秋の日本を代表する紅葉名所で湯船から赤や黄色のグラデーションを愛でる贅沢ステイ。中禅寺湖畔の静寂と乳白色の天然硫黄泉「日光中禅寺金谷ホテル」、渡月橋たもとで嵐山の紅葉絵巻と伝統京懐石を満喫する「京都 嵐山温泉 渡月亭」、小涌谷の森に包まれ掛け流し温泉で寛ぐ「箱根小涌園 美山楓林」。早期満室となる紅葉シーズンの特等席宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
  keywords: [
    '錦秋の絶景・紅葉露天風呂名所旅館特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-autumn-foliage-open-air-bath-stay' },
  openGraph: {
    title: '赤や黄金の山並みを愛でる絶景紅葉露天風呂名旅館×ふるさと納税完全ガイド【2026年最新】日光中禅寺湖・京都嵐山・箱根小涌谷',
    description: '山一面が燃え盛るような錦秋の絶景！秋の日本を代表する紅葉名所で湯船から赤や黄色のグラデーションを愛でる贅沢ステイ。中禅寺湖畔の静寂と乳白色の天然硫黄泉「日光中禅寺金谷ホテル」、渡月橋たもとで嵐山の紅葉絵巻と伝統京懐石を満喫する「京都 嵐山温泉 渡月亭」、小涌谷の森に包まれ掛け流し温泉で寛ぐ「箱根小涌園 美山楓林」。早期満室となる紅葉シーズンの特等席宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
    url: baseUrl + '/furusato-tax-autumn-foliage-open-air-bath-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoAutumnFoliageOpenAirStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '絶景紅葉露天風呂＆名所旅館特集', item: baseUrl + '/furusato-tax-autumn-foliage-open-air-bath-stay' },
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
          <span className="text-stone-800 font-medium">絶景紅葉露天風呂＆名所旅館特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            錦秋の絶景・紅葉露天風呂名所旅館特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            赤や黄金の山並みを愛でる絶景紅葉露天風呂名旅館×ふるさと納税完全ガイド【2026年最新】日光中禅寺湖・京都嵐山・箱根小涌谷
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            日本列島が北から南へと燃えるような色彩に染まりゆく「秋の紅葉シーズン」。山全体が赤・橙・黄色の鮮やかなグラデーションに包まれ、湯船の上にも色づいたモミジの葉が静かに舞い落ちる「紅葉露天風呂」は、日本の四季の美意識が凝縮された最高峰の情景です。男体山と中禅寺湖の湖畔に建ち紅葉の森に抱かれるクラシックリゾート「日光中禅寺温泉 中禅寺金谷ホテル」、大堰川と渡月橋のすぐそばで嵐山全体の紅葉絵巻を特等席で眺める京都の名門「渡月亭」、そして小涌谷の豊かな自然林に包まれ秋風を感じながら名湯を愉しめる「箱根小涌園 美山楓林」。紅葉の見頃となる10月〜11月の温泉旅館は全国から予約が殺到し、半年以上前から満室になることも珍しくありませんが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期間3年）を活用すれば、実質自己負担2,000円で驚くほどお得に紅葉の名宿をリザーブ可能です。秋の息を呑む絶景と美食に出逢う、極上の紅葉温泉紀行へ出かけましょう。
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
                  争奪戦の「紅葉特等席客室・展望露天」をふるさと納税クーポンでお得に確保
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                秋の紅葉シーズンは年間で最も宿泊料金が高騰するトップシーズンのひとつ。ふるさと納税クーポンを使えば、宿泊費の最大30％が控除補助されるため、普段は手の届きにくい紅葉ビュー客室や高級露天風呂付き客室も実質2,000円の自己負担でお得に滞在できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  日帰りの混雑を回避！夜の幻想的な紅葉ライトアップや早朝の朝露散策を独占
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                嵐山や日光、箱根などの紅葉名所は日中大変な混雑となりますが、現地に宿泊すれば日帰り客が去った後のライトアップされた幻想的な夜紅葉や、澄み切った朝の光に照らされる静かな散策道をゆったりと独占して楽しむことができます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  松茸、秋刀魚、新米、戻り鰹！実りの秋を味わい尽くす贅沢な秋の味覚会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                秋の旅のもうひとつの主役が、芳醇な香りの松茸や焼き魚、栗ご飯、秋茄子、ブランド牛のすき焼きなど、旬の味覚を散りばめた贅沢な秋会席。身体を芯から温める名湯と滋味あふれる秋の恵みが、心身を豊かに満たしてくれます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759.jpg"
                  alt="日光中禅寺温泉　中禅寺金谷ホテル"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.5 (882件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    栃木県日光市・中禅寺湖畔の森に佇む西洋クラシックと乳白色硫黄泉露天風呂
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    日光中禅寺温泉　中禅寺金谷ホテル
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    日光国立公園・中禅寺湖畔の豊かな自然林の中に佇む、創業150余年の歴史を持つ金谷ホテル直営のリゾートホテル。秋になるとホテルを取り囲むカエデやミズナラが鮮やかに色づき、紅葉の森に包まれるような贅沢な滞在が叶います。奥日光湯元から引かれる源泉かけ流しの乳白色天然硫黄泉露天風呂「空ぶろ」からは、紅葉の木立越しに星空を眺める至高の湯浴みが可能。伝統のフランス料理ディナーとともに、優雅で落ち着いた秋の休日をご堪能いただけます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「落ち着いたクラシックな空間と温泉、朝食に満足相変わらず落ち着いたクラシックホテルです。しかも、温泉付き、朝のオムレツは落ち着いて食べられて良い。クチコミの詳細はこちらから 2026-09-02 19:59:24投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 栃木県日光市中宮祠2482</div>
                    <div><strong>アクセス:</strong> 日光宇都宮有料道路清滝IC～車で約25分（いろは坂経由）東武日光駅～無料送迎バス有（運行時間変動有）日光東照宮迄車40分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約14,750円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28759"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838.jpg"
                  alt="京都　嵐山温泉　渡月亭"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 3.82 (253件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    京都府京都市・嵐山渡月橋たもとで愛でる錦秋の紅葉絵巻と伝統京懐石
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    京都　嵐山温泉　渡月亭
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    京都随一の紅葉名所・嵐山の大堰川にかかる渡月橋の南詰に位置し、創業百二十余年の伝統を誇る名門料理旅館。宿を一歩出れば、赤や黄に染まる嵐山全体のパノラマが目の前に広がり、天龍寺や竹林の小径への散策にも最高のロケーションです。客室や食事処でいただく京懐石は、秋の味覚である丹波栗や松茸、生麩や京野菜を美しく盛り込んだ職人技の極み。嵐山温泉の肌に優しい湯に浸かりながら、古都の雅な秋の風情に心ゆくまで浸ることができます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 京都府京都市西京区嵐山中尾下町54-4（渡月橋南詰め）</div>
                    <div><strong>アクセス:</strong> 京都駅よりＪＲ嵯峨野線嵯峨嵐山駅下車徒歩１５分。阪急京都線桂駅より嵐山線嵐山駅下車徒歩５分。名神京都南ＩＣより約４０分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約23,400円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8838"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/153157/153157.jpg"
                  alt="箱根小涌園　美山楓林"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.06 (55件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    神奈川県箱根町・紅葉の小涌谷の森に包まれる露天風呂と掛け流しの美肌湯
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    箱根小涌園　美山楓林
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    箱根登山鉄道・小涌谷駅から車で約5分、豊かな木々に囲まれた閑静な高台に佇む落ち着きある和モダン温泉ホテル。秋には客室の窓一面や館内の庭園が鮮やかな紅葉に染まり、静かな森の別荘にいるような寛ぎの時間を過ごせます。小涌谷温泉の天然温泉を湛えた露天風呂では、秋風を感じながら湯面に映る木々の色彩を鑑賞。箱根湯本や芦ノ湖へのアクセスも良く、箱根美術館の紅葉庭園や仙石原のススキ草原など秋の箱根観光の拠点としても最適です。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「お部屋は独特でしたが孫と雑魚寝で大満足他の方のコメントを読んでいましたのでびっくり!!はしませんでしたが、お部屋は元食堂があった場所??の奥、パーテーションの裏に扉が...こんなところにお部屋… 2026-08-21 10:53:28投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 神奈川県足柄下郡箱根町小涌谷493-48</div>
                    <div><strong>アクセス:</strong> 小田急　箱根湯本駅より箱根町・元箱根行きバスにて「蓬莱園」下車</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約11,650円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D153157"
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

              <li key="furusato-tax-cherry-blossom-spring-hanami-onsen-stay">
                <Link href="/furusato-tax-cherry-blossom-spring-hanami-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【春のお花見露天風呂×ふるさと納税】河津桜・吉野山・弘前城の名宿完全ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-autumn-foliage-gorge-onsen-stay">
                <Link href="/furusato-tax-autumn-foliage-gorge-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【紅葉の渓谷美＆美肌温泉×ふるさと納税】秋の絶景パノラマ宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-snow-view-open-air-bath-winter-stay">
                <Link href="/furusato-tax-snow-view-open-air-bath-winter-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【絶景雪見露天風呂×ふるさと納税】万座・越後湯沢・定山渓の白銀秘湯名旅館</span>
                </Link>
              </li>
  

              <li key="furusato-tax-luxury-hotspring-ryokan-stay">
                <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド</span>
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
