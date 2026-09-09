import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '新幹線駅から徒歩すぐ！車なし・運転不要で行ける極上駅近温泉宿×ふるさと納税完全ガイド【2026年最新】熱海・越後湯沢・嬉野',
  description: '免許がなくても雪道運転が不安でも大丈夫！東京や博多から新幹線・特急に乗るだけで直行できる、駅から徒歩圏内の名門温泉旅館を厳選。新幹線熱海駅から徒歩圏内の老舗湯宿「熱海温泉 旅館 立花」、上越新幹線越後湯沢駅徒歩数分の純和風宿「音羽屋旅館」、西九州新幹線嬉野温泉駅・バスセンター至近の美肌宿「割烹旅館 鯉登苑」。お酒を楽しみながら手ぶらでスマートに行ける温泉旅を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '駅徒歩すぐ・車なし手ぶら温泉旅特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    'ご当地グルメ 宿',
    '人気温泉地 クーポン'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-station-walk-car-free-onsen-stay/' },
  openGraph: {
    title: '新幹線駅から徒歩すぐ！車なし・運転不要で行ける極上駅近温泉宿×ふるさと納税完全ガイド【2026年最新】熱海・越後湯沢・嬉野',
    description: '免許がなくても雪道運転が不安でも大丈夫！東京や博多から新幹線・特急に乗るだけで直行できる、駅から徒歩圏内の名門温泉旅館を厳選。新幹線熱海駅から徒歩圏内の老舗湯宿「熱海温泉 旅館 立花」、上越新幹線越後湯沢駅徒歩数分の純和風宿「音羽屋旅館」、西九州新幹線嬉野温泉駅・バスセンター至近の美肌宿「割烹旅館 鯉登苑」。お酒を楽しみながら手ぶらでスマートに行ける温泉旅を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-station-walk-car-free-onsen-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoStationWalkCarFreeStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '新幹線駅から徒歩すぐ・車なし温泉宿特集', item: baseUrl + '/furusato-tax-station-walk-car-free-onsen-stay' },
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
          <span className="text-stone-800 font-medium">新幹線駅から徒歩すぐ・車なし温泉宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            駅徒歩すぐ・車なし手ぶら温泉旅特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            新幹線駅から徒歩すぐ！車なし・運転不要で行ける極上駅近温泉宿×ふるさと納税完全ガイド【2026年最新】熱海・越後湯沢・嬉野
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            「温泉旅行に行きたいけれど、車の運転が苦手」「冬の雪道や山道の運転が不安」「旅行中は夫婦や友達全員でお酒を気兼ねなく楽しみたい」――そんな方に今大人気なのが、新幹線駅や特急停車駅から徒歩圏内にある「車なしで行ける駅近温泉宿」です。東京駅から新幹線に乗れば、わずか数十〜1時間台で渋滞知らずに目的地へ到着。重い荷物を宿に預けてすぐに温泉街の散策や食べ歩きを楽しめ、チェックアウト後もギリギリまで観光を満喫できます。東海道新幹線熱海駅から温泉街を抜けてすぐの老舗「旅館 立花」、上越新幹線越後湯沢駅から徒歩数分の静かな純和風宿「音羽屋旅館」、そして西九州新幹線でアクセスが劇的に向上した佐賀・嬉野温泉の「割烹旅館 鯉登苑」。車を所持していない若者やシニア世代、電車旅好きにとっても最高のロケーションを誇る名宿ばかりです。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で驚くほどお得に予約可能。快適で気楽な「のんびり列車＆名湯ステイ」へ出かけましょう。
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
                  運転ストレス＆渋滞ゼロ！移動中から駅弁や地酒を楽しめる列車旅の醍醐味
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                高速道路の渋滞に巻き込まれる心配がなく、正確な時間通りに移動できるのが新幹線・特急旅の最大の魅力。運転担当者だけがお酒を我慢する必要もなく、車窓を流れる景色を眺めながらご当地駅弁やクラフトビールで乾杯する贅沢な移動時間を過ごせます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  駅周辺の飲食店、お土産物街、足湯、観光スポットへ徒歩でラクラク直行
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                駅近の宿なら、到着してすぐにチェックイン前でも荷物をフロントに預けて手ぶらで観光へ繰り出せます。駅前の商店街で名物の温泉まんじゅうを食べ歩きしたり、足湯に浸かったり、地元の居酒屋をハシゴしたりと、アクティブに街歩きを楽しめます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  冬の豪雪地帯でも安心！ノーマルタイヤでも行ける安心・安全のアクセス
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                冬の温泉旅行で最大のハードルとなるのが雪道や凍結路面の運転。新幹線直結の越後湯沢や熱海などの駅近宿なら、冬用タイヤやチェーンの心配を一切することなく、普段着とスニーカー感覚で安全に本物の名湯露天風呂を満喫できます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14505/14505.jpg"
                  alt="熱海温泉　旅館　立花"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.14 (519件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    静岡県熱海市・新幹線熱海駅から徒歩圏内！海と街並みを望む老舗名湯宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    熱海温泉　旅館　立花
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    JR熱海駅から温泉街の賑やかな仲見世通りを抜けて徒歩圏内、熱海サンビーチにも近い好立地に建つ老舗温泉旅館。自家源泉から引く肌に優しい天然温泉を露天風呂や大浴場で24時間満喫できます。夕食には相模湾で獲れた新鮮な海の幸を中心とした会席料理をお部屋食でゆったりとご提供。新幹線で東京駅から最短約35分という抜群の近さで、思い立ったらすぐに手ぶらで出かけられる気軽さと、歴史ある名宿の温かいおもてなしが両立しています。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「広い部屋で孫も大喜び、食事も大満足二間続きの広いお部屋で、9ヶ月の孫を連れての旅行でしたので、お部屋を思いっきりはいはいできてご機嫌でした。ベビーベッドやバウンサーも貸してくれて、助かりました。… 2026-09-05 17:15:27投稿…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 静岡県熱海市昭和町5-13</div>
                    <div><strong>アクセス:</strong> 東名厚木ＩＣより小田原厚木有料道路経由、国道１３５号で熱海へ／ＪＲ熱海駅</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約12,100円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D14505"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5735/5735.jpg"
                  alt="越後湯沢温泉　音羽屋旅館"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.13 (694件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    新潟県湯沢町・越後湯沢駅徒歩数分！新幹線直結の静寂に包まれる和風旅館
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    越後湯沢温泉　音羽屋旅館
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    上越新幹線・越後湯沢駅西口から徒歩約7分。駅前温泉街の賑わいから一歩奥に入った閑静な高台に佇む、全館に木の温もりが漂う純和風温泉旅館。駅近でありながら車の音も気にならない静寂に包まれ、岩造りの露天風呂や貸切風呂で湯沢の名湯を心ゆくまで堪能できます。料理長が手作りする旬の越後会席と、炊きたての南魚沼産コシヒカリのご飯は感動の美味しさ。雪道運転の心配なく真冬の白銀世界を満喫できる理想の駅近宿です。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「駅近で落ち着く空間、おひとり様にも最適駅から近く、リーズナブルなので何度か利用しています。建物の作りも落ち着いていて、ゆったり過ごせます。温泉も貸し切りで使える時間があったりと、おひとり様にもおす… 2026-09-05 20:20:52投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 新潟県南魚沼郡湯沢町湯沢419</div>
                    <div><strong>アクセス:</strong> JR上越新幹線、越後湯沢駅西口より徒歩７分。関越自動車道、越後湯沢ＩＣより、越後湯沢駅方面に向かって約6分。駐車場完備。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約5,500円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5735"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/80886/80886.jpg"
                  alt="嬉野温泉　割烹旅館　鯉登苑（りとうえん）"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.4 (282件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    佐賀県嬉野市・嬉野温泉バスセンター至近！美肌湯と名物温泉湯どうふの宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    嬉野温泉　割烹旅館　鯉登苑（りとうえん）
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    日本三大美肌の湯として名高い佐賀県・嬉野温泉の中心に位置し、嬉野温泉バスセンターから徒歩すぐの好アクセスを誇る割烹旅館。西九州新幹線の開業により博多方面からのアクセスもさらに快適に。とろとろの美肌温泉を引く露天風呂で肌をしっとり潤した後は、嬉野名物の「温泉湯どうふ」や佐賀牛を贅沢に盛り込んだ本格割烹会席に舌鼓。車がなくても嬉野の情緒ある温泉街散策や足湯巡りをストレスフリーで満喫できます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「嬉野の柔らかい温泉に癒やされ大満足初めて、梅に宿泊しました^^かなりの鯉登苑、推しです(^^)九州の温泉、巡りましたが嬉野の湯は柔らかく、しっとり最高に良いです^^時期を見… 2026-08-29 18:15:47投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 佐賀県嬉野市嬉野町岩屋川内甲437</div>
                    <div><strong>アクセス:</strong> 嬉野ICより車で約５分、嬉野温泉駅から約１０分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約9,710円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D80886"
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

              <li key="furusato-tax-shinkansen-station-walk-hotspring-stay">
                <Link href="/furusato-tax-shinkansen-station-walk-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【新幹線駅近×ふるさと納税】新幹線駅から徒歩圏内の名門温泉旅館ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-retro-onsen-town-yukata-walk-stay">
                <Link href="/furusato-tax-retro-onsen-town-yukata-walk-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【浴衣で巡るレトロ温泉街×ふるさと納税】外湯めぐり＆情緒名宿ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-solo-travel-retreat-private-onsen-stay">
                <Link href="/furusato-tax-solo-travel-retreat-private-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【一人旅・ご褒美おこもり×ふるさと納税】露天風呂付き客室＆癒やしの名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-travel-after-booking-discount-guide">
                <Link href="/furusato-tax-travel-after-booking-discount-guide" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【予約済みでも間に合う】楽天トラベル「ふるさと納税クーポンあとから適用」完全攻略</span>
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
