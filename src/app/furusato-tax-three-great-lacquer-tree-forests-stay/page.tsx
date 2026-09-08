import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '日本三大漆原木美林＆うるしの森トレッキングと漆器ギャラリー名旅館×ふるさと納税完全ガイド【2026年最新】浄法寺・会津・丹波',
  description: '国宝や世界遺産の修復を支える奇跡の天然樹脂「日本三大漆の産地・うるしの森」（岩手二戸・浄法寺漆、福島西会津・会津漆林、京都福知山・丹波漆）。樹齢十数年の木から一滴ずつ採取される漆掻き（うるしかき）の聖地を巡り、新緑と紅葉の美林散策と温泉美食。楽天ふるさと納税トラベルクーポンで実質2,000円負担で泊まる極上の自然・文化リトリート完全ガイド。',
  keywords: [
    '日本三大漆原木美林・うるしの森と文化リトリート特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '日本三大',
    '温泉旅館 予約',
    '高級リゾート クーポン'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-three-great-lacquer-tree-forests-stay' },
  openGraph: {
    title: '日本三大漆原木美林＆うるしの森トレッキングと漆器ギャラリー名旅館×ふるさと納税完全ガイド【2026年最新】浄法寺・会津・丹波',
    description: '国宝や世界遺産の修復を支える奇跡の天然樹脂「日本三大漆の産地・うるしの森」（岩手二戸・浄法寺漆、福島西会津・会津漆林、京都福知山・丹波漆）。樹齢十数年の木から一滴ずつ採取される漆掻き（うるしかき）の聖地を巡り、新緑と紅葉の美林散策と温泉美食。楽天ふるさと納税トラベルクーポンで実質2,000円負担で泊まる極上の自然・文化リトリート完全ガイド。',
    url: baseUrl + '/furusato-tax-three-great-lacquer-tree-forests-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoRound65ArticlePage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '日本三大漆原木美林・うるしの森と文化リトリート特集', item: baseUrl + '/furusato-tax-three-great-lacquer-tree-forests-stay' },
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
          <span className="text-stone-800 font-medium">日本三大漆原木美林・うるしの森と文化リトリート特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            日本三大漆原木美林・うるしの森と文化リトリート特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            日本三大漆原木美林＆うるしの森トレッキングと漆器ギャラリー名旅館
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            金閣寺や日光東照宮、中尊寺金色堂など、数々の国宝建造物の輝きを守り続けている国産漆。その採取は、漆掻き職人が1本の木に傷をつけ、1年間でわずかお猪口一杯分（約200グラム）しか採れない極めて貴重な地球の生命の雫です。「日本三大漆原木美林」と称される岩手二戸の浄法寺、福島会津のうるしの森、そして京都丹波夜久野の丹波漆。端正に立ち並ぶ漆の木々は、初夏には清々しい若葉を茂らせ、秋には山一面を燃えるような深紅に染め上げる見事な景観を生み出します。澄んだ森の空気を胸いっぱいに吸い込みながらトレッキングを楽しみ、工房で職人たちの技と情熱に触れた後は、美しい漆器で地元の滋味会席をいただき、自家源泉の名湯に身を委ねる時間。楽天ふるさと納税トラベルクーポンを活用して、日本のものづくりの根源を辿る贅沢な森と工芸の旅へ出かけましょう。
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行から3年間</span>
            <span>✓ 予約済みの宿泊にも「あとから割引」可能</span>
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

        {/* 3つの魅力・深掘り解説 */}
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
                  世界に誇る国産漆のルーツ、深紅に染まるうるしの美林トレッキング
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                日本三大漆の森の最大の魅力は、人の手によって丁寧に植樹され管理されてきた美しい里山景観です。特に秋のうるしの紅葉は、モミジよりも鮮烈な赤色に染まり、息をのむようなコントラストを見せてくれます。木肌に残る職人の掻き傷（目立て）を観察し、数百年受け継がれてきた持続可能な自然利用の知恵に触れるウォーキングは、心洗われる知的好奇心と深い癒やしをもたらします。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  漆器ギャラリーを備えた名宿で、本物の器の手触りと美食に酔いしれる
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                漆林を抱く地域周辺には、館内に貴重な漆器コレクションやギャラリーを併設し、食事の器にも地元の作家物が惜しみなく使われる宿が点在しています。前沢牛や岩手短角牛、会津地鶏、丹波黒豆や地元の山菜。温かい料理が冷めにくく口当たりが吸い付くように優しい本物の漆器で味わう料理は、素材本来の旨味を何倍にも引き立ててくれます。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  八幡平の秘湯や喜多方の名湯、日本三景を望む静寂のリゾートステイ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                安比八幡平の豊かな自然に包まれ美食と癒やしの空間を誇る「四季館 彩冬」、会津喜多方の奥座敷で塩分を含み身体が芯から温まる熱塩温泉の「山形屋」、そして天橋立の廻旋橋を目の前に望み文人たちに愛された「対橋楼」。自然の静けさと極上のおもてなしに満ちた宿で過ごす夜は、日頃のストレスを完璧にリセットしてくれます。
              </p>
            </div>
    
          </div>
        </section>

        {/* 厳選宿セクション */}
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68096/68096.jpg"
                  alt="安比八幡平の食の宿　四季館　彩冬"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.69 (1038件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 岩手県 八幡平市赤坂田254-9</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    安比八幡平の食の宿　四季館　彩冬
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「朝食のクオリティーが凄い部屋、大浴場ともにお風呂はとても寛げます。夕食は、鮑、ステーキ、しゃぶしゃぶの3品をセレクトするプランでしたが、全体的に量が多いので、完食するのに大変でした。朝食のブッ… 2026-09-02 19:28:42投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> ＪＲ花輪線『赤坂田駅』（盛岡駅→いわて銀河鉄道大館行き乗車） より無料送迎バスにて約２分（要予約）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約10,010円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D68096"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28624/28624.jpg"
                  alt="創作料理が自慢の宿　会津　喜多方　熱塩温泉　山形屋"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.41 (599件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 福島県 喜多方市熱塩加納町熱塩字北平田甲347番地2</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    創作料理が自慢の宿　会津　喜多方　熱塩温泉　山形屋
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「食事は美味しくロケーションも最高夕朝食共に美味しかった。風呂は水風呂がサウナが使える時間の女性の方にしかなくて残念、男性の方が使うのでは?と思いました。ロケーションはゆっくりするには最適で… 2026-09-05 22:01:33投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> 磐越西線・喜多方駅～車で15分／磐越道・会津若松ＩＣ～車で40分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約9,720円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28624"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/80800/80800.jpg"
                  alt="天橋立温泉　対橋楼"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.57 (526件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 京都府 宮津市文珠471</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    天橋立温泉　対橋楼
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「食事と眺望に満足、また利用したい夕食も朝食も美味しく食べ過ぎてしまいました。お風呂が狭くて入った時は混雑してました。お部屋からの眺望は橋が見え、船が通る時の旋回も見ることができました。… 2026-07-02 14:47:44投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> お車：京都縦貫自動車道宮津天橋立ＩＣより約７分 電車：京都丹後鉄道 天橋立駅より徒歩約3分です。天橋立の入り口。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約18,700円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D80800"
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

              <li key="furusato-tax-three-great-lacquer-craft-historic-inns-stay">
                <Link href="/furusato-tax-three-great-lacquer-craft-historic-inns-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大漆器＆漆黒と金蒔絵の雅・名旅館宿（輪島・会津・山中）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-beautiful-forests-stay">
                <Link href="/furusato-tax-three-great-beautiful-forests-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美林＆森林浴癒やしの温泉宿（青森ヒバ・秋田スギ・木曽ヒノキ）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-primeval-forests-nature-stay">
                <Link href="/furusato-tax-three-great-primeval-forests-nature-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大原生林＆世界遺産ネイチャーリゾート（屋久島・白神山地・春日山）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-six-ancient-kilns-pottery-stay">
                <Link href="/furusato-tax-six-ancient-kilns-pottery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本六古窯の里を巡る陶芸美と名旅館（備前・信楽・丹波立杭）</span>
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
