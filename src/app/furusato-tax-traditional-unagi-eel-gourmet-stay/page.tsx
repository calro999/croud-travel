import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '名産地で味わう極上うなぎ会席＆蒲焼・ひつまぶし名湯宿×ふるさと納税完全ガイド【2026年最新】浜名湖・三島・柳川',
  description: '香ばしい炭火の煙と秘伝のタレ！全国屈指のうなぎ名産地で至高のうなぎ会席を堪能する大人の美食旅。うなぎ養殖発祥の地・静岡県浜名湖かんざんじ温泉の湖畔宿「ホテル鞠水亭」、富士山の清らかな伏流水で磨かれた三島うなぎの銘店巡りと最上階天然温泉「ドーミーイン三島」、情緒あふれる水郷柳川で蒸したて熱々のせいろ蒸しを味わう「柳川温泉ホテル 輝泉荘」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '秘伝タレ焼きうなぎ＆名産地温泉宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    'ご当地グルメ 宿',
    '人気温泉地 クーポン'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-traditional-unagi-eel-gourmet-stay' },
  openGraph: {
    title: '名産地で味わう極上うなぎ会席＆蒲焼・ひつまぶし名湯宿×ふるさと納税完全ガイド【2026年最新】浜名湖・三島・柳川',
    description: '香ばしい炭火の煙と秘伝のタレ！全国屈指のうなぎ名産地で至高のうなぎ会席を堪能する大人の美食旅。うなぎ養殖発祥の地・静岡県浜名湖かんざんじ温泉の湖畔宿「ホテル鞠水亭」、富士山の清らかな伏流水で磨かれた三島うなぎの銘店巡りと最上階天然温泉「ドーミーイン三島」、情緒あふれる水郷柳川で蒸したて熱々のせいろ蒸しを味わう「柳川温泉ホテル 輝泉荘」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-traditional-unagi-eel-gourmet-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoTraditionalUnagiEelStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '名産地うなぎ会席＆蒲焼名門宿特集', item: baseUrl + '/furusato-tax-traditional-unagi-eel-gourmet-stay' },
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
          <span className="text-stone-800 font-medium">名産地うなぎ会席＆蒲焼名門宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            秘伝タレ焼きうなぎ＆名産地温泉宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            名産地で味わう極上うなぎ会席＆蒲焼・ひつまぶし名湯宿×ふるさと納税完全ガイド【2026年最新】浜名湖・三島・柳川
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            日本の伝統食文化の中で、最も食欲をそそる芳醇な香りを放つ「うなぎの蒲焼」。皮目はパリッと香ばしく、中はふんわりととろけるような食感、そして何十年も継ぎ足されてきた秘伝の甘辛ダレが絡む炊きたてのご飯――その一口は、まさに日本人に生まれた幸せを感じさせる至極の瞬間です。うなぎ養殖120年以上の歴史を誇り浜名湖の絶景を望む静岡県かんざんじ温泉の「ホテル鞠水亭」、富士山の清らかな雪解け水に数日間打たれることで臭みを完全に抜き旨味だけを凝縮した三島うなぎの拠点「ドーミーイン三島」、そして掘割をどんこ舟で巡る川下りとタレの染みた熱々ご飯が絶品のせいろ蒸しが名物の福岡県水郷柳川の「柳川温泉ホテル 輝泉荘」。産地ならではの卓越した職人技と極上の名湯の組み合わせは、旅人の疲れた身体に確かな活力と極上の幸福感をもたらしてくれます。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で驚くほどお得に本格うなぎ会席ステイが実現。滋養と美味に満ちた、極上のうなぎ温泉紀行へ出かけましょう。
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
                  関東風の「ふっくら蒸し焼き」と関西風の「地焼きパリパリ」の奥深い職人技
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                背開きで一度蒸してから焼き上げる関東風（三島・浜名湖）のとろけるような柔らかさと、腹開きで蒸さずに強火の炭火で一気に焼き上げる関西風（九州・柳川）の香ばしい歯ごたえ。名産地ごとに受け継がれる焼きの哲学と秘伝ダレの調和が、うなぎ本来の奥深い旨味を極限まで引き出します。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  名物「ひつまぶし」「せいろ蒸し」「白焼き」！多彩な味わい方で楽しむうなぎ尽くし
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                そのまま蒲焼として味わうのはもちろん、薬味を乗せ出汁をかけて楽しむ浜名湖のひつまぶし、錦糸卵を敷き詰めて蒸篭で蒸し上げる柳川のせいろ蒸し、わさび醤油や岩塩で素材の甘みを引き立てる白焼きなど、産地だからこそ楽しめる贅沢な食べ比べが食通たちを唸らせます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  良質な天然温泉と名勝景観！湖畔・富士山ビュー・水郷巡りが織りなす癒やしの時間
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                浜名湖の夕映え、三島から仰ぐ霊峰富士のパノラマ、柳川の風情ある掘割と水郷の柳並木。産地ならではの美しい景観と良質な天然温泉に浸かって心身をリセットした後にいただくうなぎ料理は、日常の疲労を吹き飛ばす最高の活力源になります。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2092/2092.jpg"
                  alt="浜名湖かんざんじ温泉　ホテル鞠水亭"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.41 (832件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    静岡県浜松市・浜名湖畔に佇み名物うなぎ料理と湖上露天を誇る名宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    浜名湖かんざんじ温泉　ホテル鞠水亭
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    風光明媚な浜名湖かんざんじ温泉の湖畔に位置し、客室や最上階展望露天風呂から穏やかな湖を一望できる老舗温泉旅館。夕食には浜名湖名物のうなぎを贅沢に使った本格会席プランをご用意。職人が丁寧に焼き上げた香ばしいうなぎ蒲焼をはじめ、旬の魚介や遠州の野菜を取り入れた四季折々の料理がテーブルを華やかに彩ります。夕暮れ時に黄金色に染まる浜名湖の絶景を眺めながら名湯に身を浸す、贅沢な湖畔ステイを満喫できます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「飾らない雰囲気と親切な対応で何度も利用何度も利用させて頂いてます。いつも、昼前に車を置かせてもらい、近くの鰻屋さんで昼呑みしながら、美味しい鰻を食べてます。飾らない雰囲気が良いし、係の方も皆、親切… 2026-08-27 15:04:46投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 静岡県浜松市中央区舘山寺町398番地</div>
                    <div><strong>アクセス:</strong> ＪＲ浜松駅より路線バスで４５分（舘山寺温泉行き）　東名高速、舘山寺スマートＩＣより約５分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約8,250円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2092"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/128491/128491.jpg"
                  alt="天然温泉　富嶽の湯　ドーミーイン三島"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.45 (3085件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    静岡県三島市・富士山の雪解け水が育む名店うなぎと最上階天然温泉
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    天然温泉　富嶽の湯　ドーミーイン三島
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    JR三島駅南口から徒歩すぐ、最上階に富士山を望む展望天然温泉大浴場を備えた大人気ホテル。三島は富士山の湧水で数日間泥抜きされた「三島うなぎ」が全国的に有名で、宿の周辺には行列ができる老舗のうなぎ専門店が多数点在。ホテル自慢の広々としたサウナと内湯・露天風呂でしっかりととのった後、名店でふっくら極上のうな重を味わう「うなぎサウナ旅」の拠点として絶大な支持を集めています。名物「夜鳴きそば」の無料サービスも大好評です。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「朝食も大浴場も満足、息子は電車に大興奮朝食バイキングがとても満足の品揃えでした!帰省で宿泊しましたが、次回もお世話になりたいです。お風呂も清潔でしたし、スタッフさんの雰囲気も良かったです。… 2026-09-05 20:17:56投稿 つづ…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 静岡県三島市大宮町3-18-33</div>
                    <div><strong>アクセス:</strong> ＪＲ　三島駅「南口」より徒歩5分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約8,475円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D128491"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/73993/73993.jpg"
                  alt="柳川温泉ホテル　輝泉荘"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.41 (280件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    福岡県柳川市・水郷柳川の川下りと名物うなぎせいろ蒸しの温泉宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    柳川温泉ホテル　輝泉荘
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    掘割が縦横に巡る情緒豊かな水郷・柳川に位置し、天然温泉の恵みを湛える落ち着いた和風ホテル。柳川といえば、甘辛いタレをまぶしたご飯の上に蒲焼と錦糸卵を乗せて蒸篭で蒸し上げる「うなぎのせいろ蒸し」の発祥地。宿の夕食でも熱々ふっくらの極上せいろ蒸しを心ゆくまで堪能できます。どんこ舟で川下りを楽しんだ後は、アルカリ性単純温泉のやわらかな湯で旅の疲れを癒やす、九州の風情あふれる温泉旅行が叶います。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「駐車場が広く館内も綺麗だがトイレが不便和室4名利用。レンタカーで行きましたが駐車場が広くて良かったです。フロントの方の対応も丁寧で親切でした。館内は改装真新しい感じで気持ち良く過ごせました。部屋の… 2026-08-26 01:35:23投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 福岡県柳川市三橋町柳河874</div>
                    <div><strong>アクセス:</strong> 西鉄　柳川駅より車で５分/九州自動車道みやま柳川I..Cより車で15分、八女I..Cより20分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約6,600円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D73993"
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

              <li key="furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay">
                <Link href="/furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【漁港直送・極上寿司会席×ふるさと納税】職人握りと名湯温泉宿完全ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-great-wagyu-beef-gourmet-stay">
                <Link href="/furusato-tax-three-great-wagyu-beef-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三大和牛×ふるさと納税】松阪牛・神戸牛・近江牛を味わう美食温泉宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-local-gourmet-inn-stay">
                <Link href="/furusato-tax-local-gourmet-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【ご当地グルメ特化宿×ふるさと納税】その土地の旬の味覚を部屋食で味わう名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-award-winning-breakfast-gourmet-hotel-stay">
                <Link href="/furusato-tax-award-winning-breakfast-gourmet-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【朝食受賞ホテル×ふるさと納税】地場産食材が自慢の贅沢モーニング</span>
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
