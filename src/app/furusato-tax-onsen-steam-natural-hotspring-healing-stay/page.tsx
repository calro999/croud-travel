import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '湯煙たなびく温泉街・名物地獄蒸し＆天然砂むし極上湯治宿×ふるさと納税完全ガイド【2026年最新】別府鉄輪・指宿・雲仙',
  description: '地球の鼓動を全身で感じる圧巻の温泉エネルギー！至る所から白い湯煙が噴き出す大分・別府鉄輪温泉の伝統湯治宿「旅館 さくら屋」、波打ち際の地熱で全身を包み込む鹿児島・指宿温泉の名門「指宿白水館」、もうもうと立ち上る雲仙地獄とおしどりの池の静寂に抱かれる長崎「雲仙温泉 東園」。温泉の噴気で蒸し上げる滋養満点の「地獄蒸し料理」や天然デトックス浴を、楽天ふるさと納税トラベルクーポンで実質2,000円で体験する完全ガイド。',
  keywords: [
    '湯煙立ち上る温泉街・地獄蒸し＆天然砂むし湯治特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '客室露天風呂 予約',
    '温泉旅館 クーポン',
    '高級リゾート 割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-onsen-steam-natural-hotspring-healing-stay/' },
  openGraph: {
    title: '湯煙たなびく温泉街・名物地獄蒸し＆天然砂むし極上湯治宿×ふるさと納税完全ガイド【2026年最新】別府鉄輪・指宿・雲仙',
    description: '地球の鼓動を全身で感じる圧巻の温泉エネルギー！至る所から白い湯煙が噴き出す大分・別府鉄輪温泉の伝統湯治宿「旅館 さくら屋」、波打ち際の地熱で全身を包み込む鹿児島・指宿温泉の名門「指宿白水館」、もうもうと立ち上る雲仙地獄とおしどりの池の静寂に抱かれる長崎「雲仙温泉 東園」。温泉の噴気で蒸し上げる滋養満点の「地獄蒸し料理」や天然デトックス浴を、楽天ふるさと納税トラベルクーポンで実質2,000円で体験する完全ガイド。',
    url: baseUrl + '/furusato-tax-onsen-steam-natural-hotspring-healing-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoOnsenSteamHealingStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '湯煙の温泉街・地獄蒸し＆砂むし湯治名宿特集', item: baseUrl + '/furusato-tax-onsen-steam-natural-hotspring-healing-stay' },
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
          <span className="text-stone-800 font-medium">湯煙の温泉街・地獄蒸し＆砂むし湯治名宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            湯煙立ち上る温泉街・地獄蒸し＆天然砂むし湯治特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            湯煙たなびく温泉街・名物地獄蒸し＆天然砂むし極上湯治宿×ふるさと納税完全ガイド【2026年最新】別府鉄輪・指宿・雲仙
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            アスファルトの隙間や湯屋の屋根からモクモクと立ち上る白い湯煙、鼻腔をくすぐるほのかな硫黄の香り、そして大地の底から湧き上がるゴボゴボという地球の息吹――日本が誇る活火山地帯の温泉地には、太古の昔から人々を惹きつけてやまない圧倒的な生命力があります。日本一の湧出量を誇る別府の中でも特に湯煙文化が色濃く残る鉄輪（かんなわ）温泉の「旅館 さくら屋」。錦江湾の波音を聴きながら、温かい天然の温泉砂に埋もれて全身の毒素を汗とともに流し出す指宿温泉の最高峰「指宿白水館」。そしてキリシタン哀史の舞台としても知られる雲仙地獄の白煙と静かな池の景観美を併せ持つ長崎・雲仙温泉の「東園」。天然の温泉蒸気で肉や野菜をジューシーに蒸し上げるヘルシーな「地獄蒸し」を味わい、豊富なミネラルを含む源泉に身を委ねる時間は、日頃のストレスや疲労を根底から解きほぐしてくれます。楽天ふるさと納税のトラベルクーポンを活用すれば、自治体を応援しながら実質自己負担2,000円でこの極上湯治ステイが実現。大地の温もりを全身で浴びる本物の温泉旅へご案内します。
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
                  天然の温泉蒸気100％！素材本来の旨味を凝縮する伝統の「地獄蒸し料理」
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                江戸時代から続く鉄輪温泉の「地獄蒸し」は、摂氏約100度の温泉噴気釜で食材を一気に蒸し上げる調理法。高温の温泉蒸気で蒸すことで、肉は余分な脂が落ちてふっくらジューシーに、地場野菜は甘みが劇的に凝縮され、温泉に含まれる微量な塩分とミネラルが天然の調味料となります。油を使わない究極にヘルシーで贅沢な美食体験です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  世界でも極めて稀少！大地の重みと温熱で全身をデトックスする「天然砂むし温泉」
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                海岸の砂浜から湧き出す天然温泉の熱を利用した指宿名物の「砂むし温泉」。浴衣を着て砂の上に横たわり、砂掛さんに温かい砂をかけてもらうと、心地よい砂の圧力と約50度の地熱によって全身の血行が劇的に促進されます。わずか10〜15分で大量の汗が噴き出し、通常の温泉入浴の数倍とも言われるデトックス効果と爽快感を体感できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  石畳の坂道、湯治長屋、レトロな共同浴場を浴衣と下駄で巡る風情ある温泉街歩き
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                立ち上る湯煙の中を浴衣姿で歩く温泉街散策は、日本の温泉旅の真骨頂。鉄輪温泉のレトロな共同浴場「むし湯」や、雲仙温泉の湯けむり立ち込める雲仙地獄の木道散策、温泉たまごや温泉まんじゅうを食べ歩くひとときは格別です。古き良き湯治場の温もりが、旅人の心を優しく解きほぐしてくれます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/78218/78218.jpg"
                  alt="別府鉄輪温泉　やすらぎのある宿　旅館　さくら屋"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 3.86 (91件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    大分県別府市・鉄輪温泉の風情ある湯治文化を受け継ぐ温もり宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    別府鉄輪温泉　やすらぎのある宿　旅館　さくら屋
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    別府八湯の中でも最も湯煙情緒あふれる鉄輪温泉の中心に佇む、温かなもてなしと家庭的な心地よさが魅力の温泉旅館。敷地内には自家源泉から湧き出る天然スチームを利用した地獄蒸し釜が設置されており、宿泊客が自由に地元の食材を持ち込んで蒸し料理を楽しむことができます。高温で良質な源泉かけ流しの内湯と露天風呂でじっくり身体の芯まで温まった後は、レトロな鉄輪の湯煙の街並みをそぞろ歩きする贅沢な湯治ステイが楽しめます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 大分県別府市鉄輪229-2（風呂本3組）</div>
                    <div><strong>アクセス:</strong> 「みゆき坂」から「いでゆ坂」へ下り、湯けむり通りへ入る。そのまま真っすぐ進むと、左手に「さくら屋」がございます。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約6,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D78218"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/12529/12529.jpg"
                  alt="鹿児島　砂むし温泉　指宿白水館"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.49 (2442件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    鹿児島県指宿市・名物砂むし温泉と元禄風呂を誇る南国名門宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    鹿児島　砂むし温泉　指宿白水館
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    錦江湾に面した広大な敷地と約170メートルの大回廊を誇る、南九州を代表する名門温泉旅館。館内には波打ち際の本格的な専用「天然砂むし温泉」が併設されており、外に出ることなく快適に砂むし入浴を体験できます。さらに江戸時代の風呂文化を現代に再現した圧巻の千坪大浴場「元禄風呂」では、打たせ湯や釜風呂など多彩なお風呂を満喫可能。鹿児島が誇る黒豚や黒毛和牛、きびなごなどの豪華薩摩会席とともに至福のひとときを約束します。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「・こんなにバイキング料理が充実してるのは初めて!1つ1つ美味しいし会場の席案内や 料理も スーツのスタッフさんがちゃんとみていて 食事の時間が楽しく過ごせる様に 気を利かせてらっしゃいました。… 2026-09-04 12:34:53投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 鹿児島県指宿市東方12126-12</div>
                    <div><strong>アクセス:</strong> ＪＲ指宿駅下車、タクシー７分、無料送迎バスあり。 空港直行バス（JR指宿駅下車）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約14,630円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12529"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/41803/41803.jpg"
                  alt="雲仙温泉・源泉かけ流し＆おしどりの池を望む美食の宿　東園"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.53 (533件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    長崎県雲仙市・雲仙地獄の白煙とおしどりの池を望む名旅館
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    雲仙温泉・源泉かけ流し＆おしどりの池を望む美食の宿　東園
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    雲仙天草国立公園内に位置し、立ち上る雲仙地獄の噴気と穏やかなおしどりの池の湖畔に佇む上質な料理旅館。自家源泉から引かれる乳白色の濃厚な硫黄温泉は、美肌効果が高く湯上がりの肌がしっとりすべすべになると評判です。客室や露天風呂からは絵画のように美しい湖と山々の大自然が一望でき、四季折々の野鳥の声に心が洗われます。島原半島の豊かな山の幸と有明海の海の幸を融合させた極上の会席料理が旅を華やかに彩ります。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「心に残る避暑の旅車椅子の子どもと一緒の宿泊でしたが、終始、大変お気遣いいただき、快適に過ごすことができました。特に食事の際は1品ずつ目と舌で楽しませていただき、またサービス担当の方の丁… 2026-08-30 18:14:59投稿 つづきは…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 長崎県雲仙市小浜町雲仙181</div>
                    <div><strong>アクセス:</strong> 諫早駅より路線バスで８０分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約11,385円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D41803"
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

              <li key="furusato-tax-three-medicinal-hotsprings-stay">
                <Link href="/furusato-tax-three-medicinal-hotsprings-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三薬湯×ふるさと納税】草津・有馬・松之山！圧倒的薬効を誇る治癒の名湯</span>
                </Link>
              </li>
  

              <li key="furusato-tax-pure-kakenagashi-secret-hotspring-stay">
                <Link href="/furusato-tax-pure-kakenagashi-secret-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-ancient-springs-heritage-stay">
                <Link href="/furusato-tax-three-ancient-springs-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三古湯×ふるさと納税】道後・有馬・白浜の悠久の湯守り宿を巡る旅</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-major-hotspring-resorts-stay">
                <Link href="/furusato-tax-three-major-hotspring-resorts-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三大温泉街×ふるさと納税】熱海・別府・白浜の賑わいと名湯ステイ</span>
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
