import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '清流のせせらぎとマイナスイオンに包まれる渓流露天風呂名宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・黒川・塩原',
  description: '川のせせらぎ、木漏れ日の揺らめき、澄み切った清流のマイナスイオン！渓谷美と名湯が一体となった日本最高峰の渓流露天風呂宿を厳選。特別名勝・奥入瀬渓流沿いに唯一建つネイチャーリゾート「星野リゾート 奥入瀬渓流ホテル」、阿蘇の奥座敷・田の原川の清流を望む茅葺き屋根の隠れ宿「黒川温泉 旅館 奥の湯」、箒川の渓谷美と名物300段石段の野天風呂を誇る「塩原温泉 湯守田中屋」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '清流せせらぎ・渓流露天風呂マイナスイオン宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-mountain-stream-open-air-bath-healing-stay' },
  openGraph: {
    title: '清流のせせらぎとマイナスイオンに包まれる渓流露天風呂名宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・黒川・塩原',
    description: '川のせせらぎ、木漏れ日の揺らめき、澄み切った清流のマイナスイオン！渓谷美と名湯が一体となった日本最高峰の渓流露天風呂宿を厳選。特別名勝・奥入瀬渓流沿いに唯一建つネイチャーリゾート「星野リゾート 奥入瀬渓流ホテル」、阿蘇の奥座敷・田の原川の清流を望む茅葺き屋根の隠れ宿「黒川温泉 旅館 奥の湯」、箒川の渓谷美と名物300段石段の野天風呂を誇る「塩原温泉 湯守田中屋」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-mountain-stream-open-air-bath-healing-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoMountainStreamOpenAirStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '清流せせらぎ渓流露天風呂名宿特集', item: baseUrl + '/furusato-tax-mountain-stream-open-air-bath-healing-stay' },
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
          <span className="text-stone-800 font-medium">清流せせらぎ渓流露天風呂名宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            清流せせらぎ・渓流露天風呂マイナスイオン宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            清流のせせらぎとマイナスイオンに包まれる渓流露天風呂名宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・黒川・塩原
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            都会の人工的な喧騒から完全に離れ、耳に届くのはサラサラと流れる清流のせせらぎと鳥のさえずりだけ。木々の間から差し込む柔らかな木漏れ日を浴びながら、川面とシームレスに繋がるような「渓流露天風呂」に身を浸す時間は、現代人にとって最高の癒やしとデジタルデトックスをもたらしてくれます。苔むした巨岩とブナの原生林を縫って流れる奇跡の清流沿いに佇む青森県「星野リゾート 奥入瀬渓流ホテル」、阿蘇外輪山の豊かな自然の中で川のせせらぎと湯めぐりを心ゆくまで楽しむ熊本県「黒川温泉 旅館 奥の湯」、そして箒川の断崖絶壁に造られた約300段の石段を下りて渓流間近の湯に浸かる栃木県「塩原温泉 湯守田中屋」。大自然の息吹をダイレクトに感じる渓流沿いの特等席宿は四季を通じて人気ですが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を活用すれば、実質自己負担2,000円で驚くほどお得に滞在可能です。五感を解き放つ、至高の渓流リトリート温泉旅へ出かけましょう。
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
                  川のせせらぎによる「1/fゆらぎ効果」と豊かなマイナスイオンで脳疲労を解消
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                川の流れる音には、人間の脳波をα波へと導く「1/fゆらぎ」が含まれており、心拍を穏やかにして精神的ストレスを劇的に低減させます。さらに水しぶきから発生する豊富な天然マイナスイオンと森のフィトンチッドを全身で浴びることで、深い安らぎと快眠が得られます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  新緑、紅葉、雪景色！四季折々のダイナミックな渓谷パノラマを湯船から一望
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                春から初夏にかけての瑞々しい新緑のトンネル、秋に渓谷全体が燃え盛るような錦秋のグラデーション、そして冬の氷瀑や白銀の雪景色。川沿いにせり出すように造られた露天風呂からは、季節の移ろいを肌で感じる壮大な自然美を独占できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  清流の恵み！岩魚や山女魚の塩焼き、山の幸と地元ブランド牛の滋味あふれる料理
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                清流の冷水で育った新鮮な川魚の炭火塩焼きや、山菜、きのこ、地元の清流米、そして厳選されたブランド和牛。渓流の景観を眺めながらいただく素朴で贅を尽くした郷土料理は、身体の内側を健やかに満たしてくれます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/40434/40434.jpg"
                  alt="奥入瀬渓流ホテル　ｂｙ　星野リゾート"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.36 (1267件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    青森県十和田市・特別名勝奥入瀬渓流沿いに唯一佇む星野リゾートの名宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    奥入瀬渓流ホテル　ｂｙ　星野リゾート
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    十和田八幡平国立公園の特別名勝・奥入瀬渓流のほとりに唯一建つ、星野リゾートが手掛ける極上のネイチャーリゾート。八甲田山から湧き出る優しい泉質の温泉を引いた「渓流露天風呂」からは、手が届きそうなほど間近に迫る奥入瀬の清流と原生林の絶景が広がります。岡本太郎作の巨大暖炉が迎えるロビーラウンジ、渓流沿いのテラスでいただく朝食、青森の特産リンゴをふんだんに使った贅沢ビュッフェなど、自然と共生する上質なリゾートライフをご体験いただけます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「期待していた分、全体的に普通で残念な印象初めて星野リゾートのホテルを利用するので楽しみにしていましたが、案外普通だったなという印象です。大浴場も特にこれといった特色もなく、1日目は露天風呂に枯… 2026-08-26 08:10:07投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 青森県十和田市奥瀬栃久保231</div>
                    <div><strong>アクセス:</strong> 東北新幹線　八戸駅／無料送迎バス（要予約）、青森駅／有料送迎バス（要予約）、ＪＲバス　十和田湖行き、焼山下車</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約27,500円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D40434"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/54108/54108.jpg"
                  alt="黒川温泉　旅館　奥の湯"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.19 (341件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    熊本県南小国町・黒川温泉の最奥に佇む田の原川のせせらぎと多彩な露天風呂
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    黒川温泉　旅館　奥の湯
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    阿蘇の山々に囲まれた全国屈指の人気温泉地・黒川温泉の最奥部に位置し、茅葺き屋根と竹林の静寂が旅人を迎える隠れ宿。田の原川の清流を望む広大な敷地には、野趣あふれる混浴露天風呂や女性専用露天風呂、川のせせらぎを間近に感じる手湯や貸切風呂など多彩な湯殿が点在。川の音をBGMに源泉かけ流しの名湯を心ゆくまで満喫できます。夕食には熊本名物の馬刺しや肥後赤牛、地元小国の高原野菜を使った手作り会席が並び、心温まる九州の温泉情緒に包まれます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「黒川温泉の象徴、庭と露天風呂が最高な宿熊本地震があってキャンセルが多かったみたいで黒川温泉は閑散としてました 前日予約しましたが普段ならなかなか取れないと思います地震後の復興のため皆さんには是… 2026-08-28 08:31:37投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 熊本県阿蘇郡南小国町満願寺黒川6567</div>
                    <div><strong>アクセス:</strong> 【車】熊本ＩＣより約100分、日田ＩＣより約60分。湯布院ICより約70分。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約13,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D54108"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/31902/31902.jpg"
                  alt="塩原温泉　湯守田中屋"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.33 (503件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    栃木県那須塩原市・箒川の渓谷美と名物300段石段を下る野趣満点の露天風呂
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    塩原温泉　湯守田中屋
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    塩原十一湯の一つ、歴史ある大網温泉に位置し、箒川の深い渓谷を見下ろす断崖に佇む老舗名旅館。宿の名物は、渓谷の底に向かって約300段の石段を下りた先にある野天風呂。川の流れとほぼ同じ目線で浸かる天然温泉は、大自然と一体化する圧倒的な開放感を誇ります。創業百余年の歴史が育んだ行き届いたおもてなしと、囲炉裏炭火でじっくり焼き上げる鮎や地場産食材を使った山里料理が評判で、本物の秘湯と渓流美を愛する旅人に支持されています。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「料理は美味しく野天風呂は最高でした夕食のメニューに河豚天麩羅・鴨鍋と記載があったので楽しみに行ったのですが仕入状況によりの為か普通のメニューで残念でしたが全体的に料理は味は美味しかった… 2026-08-19 22:11:08投稿 つづきは…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 栃木県那須塩原市塩原6　（塩原温泉郷 大網温泉）</div>
                    <div><strong>アクセス:</strong> 東北新幹線 那須塩原駅より送迎（事前予約制／有料1,100円）あり　西那須野塩原ICより車約15分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約12,100円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31902"
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

              <li key="furusato-tax-three-great-waterfalls-onsen-stay">
                <Link href="/furusato-tax-three-great-waterfalls-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三名瀑×ふるさと納税】那智・袋田・秋保の迫力滝見露天風呂名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-waterfall-river-gorge-healing-onsen-stay">
                <Link href="/furusato-tax-waterfall-river-gorge-healing-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【渓谷美＆滝巡り温泉×ふるさと納税】せせらぎと名湯に癒やされる旅</span>
                </Link>
              </li>
  

              <li key="furusato-tax-pure-kakenagashi-secret-hotspring-stay">
                <Link href="/furusato-tax-pure-kakenagashi-secret-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-whitewater-rafting-canyoning-adventure-stay">
                <Link href="/furusato-tax-whitewater-rafting-canyoning-adventure-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【ラフティング＆キャニオニング×ふるさと納税】清流アクティビティ名宿</span>
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
