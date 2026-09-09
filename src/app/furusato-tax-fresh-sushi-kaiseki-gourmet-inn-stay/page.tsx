import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '漁港直送の極上寿司会席＆職人握りを味わう名湯温泉宿×ふるさと納税完全ガイド【2026年最新】石川加賀・東伊豆熱川・伊東',
  description: '海の幸の宝庫・日本海の新鮮魚介や相模灘の朝獲れ地魚を職人が目の前で握る！名勝鶴仙渓の絶景と加賀・能登の極上握りを味わう「山中温泉 かがり吉祥亭」、6つの自家源泉貸切風呂と伊豆の鮮魚寿司会席が自慢の「ふたりの湯宿 湯花満開」、伊東港直送の地魚握りと相模湾パノラマ露天風呂を誇る「伊東温泉 横浜藤よし伊豆店」。旬の地魚寿司と極上温泉を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で堪能する美食旅ガイド。',
  keywords: [
    '港町市場直送・極上寿司会席＆名湯宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '客室露天風呂 予約',
    '温泉旅館 クーポン',
    '高級リゾート 割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay/' },
  openGraph: {
    title: '漁港直送の極上寿司会席＆職人握りを味わう名湯温泉宿×ふるさと納税完全ガイド【2026年最新】石川加賀・東伊豆熱川・伊東',
    description: '海の幸の宝庫・日本海の新鮮魚介や相模灘の朝獲れ地魚を職人が目の前で握る！名勝鶴仙渓の絶景と加賀・能登の極上握りを味わう「山中温泉 かがり吉祥亭」、6つの自家源泉貸切風呂と伊豆の鮮魚寿司会席が自慢の「ふたりの湯宿 湯花満開」、伊東港直送の地魚握りと相模湾パノラマ露天風呂を誇る「伊東温泉 横浜藤よし伊豆店」。旬の地魚寿司と極上温泉を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で堪能する美食旅ガイド。',
    url: baseUrl + '/furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoFreshSushiKaisekiStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '漁港直送寿司会席＆名湯温泉宿特集', item: baseUrl + '/furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay' },
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
          <span className="text-stone-800 font-medium">漁港直送寿司会席＆名湯温泉宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            港町市場直送・極上寿司会席＆名湯宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            漁港直送の極上寿司会席＆職人握りを味わう名湯温泉宿×ふるさと納税完全ガイド【2026年最新】石川加賀・東伊豆熱川・伊東
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            日本全国の旅先で「最も食べたいご当地グルメ」として常に上位に君臨するお寿司。特に有名な漁港や市場を擁する温泉地では、水揚げされたばかりの鮮度抜群な天然地魚を熟練の寿司職人が目の前で握ってくれる「寿司自慢の料理旅館」が食通たちの心を掴んで離しません。金沢・能登の豊かな海から直送されるのどぐろ、寒鰤、甘海老、加能ガニを贅沢に握る石川・加賀温泉郷の「かがり吉祥亭」。相模灘から揚がる金目鯛、アジ、伊勢海老を六つの源泉かけ流し貸切風呂とともに愉しめる伊豆熱川温泉の「ふたりの湯宿 湯花満開」。そして伊東港の朝獲れ地魚握りと高台からの絶景オーシャンビュー露天風呂が評判の「伊東温泉 横浜藤よし伊豆店」。一般的な会席料理とは一線を画す、海の恵みをダイレクトに味わう極上寿司コースと名湯の組み合わせは、まさに日本人の五感を満たす最高の贅沢です。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で憧れの寿司オーベルジュに宿泊可能。旬の旨味が口いっぱいに広がる、贅沢な美食温泉紀行へ出かけましょう。
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
                  市場や競りから直行！鮮度抜群の「朝獲れ地魚」と季節のプレミアム高級魚
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                寿司会席宿の醍醐味は、一般的な流通では出回らない地元の珍しい地魚や、その日一番の旬魚を最高の鮮度で味わえること。北陸の「白身のトロ」と称されるのどぐろの炙りや肉厚な甘海老、伊豆の脂が乗った地金目鯛の握りなど、産地だからこそ実現できる究極の魚の旨味と甘みを存分に堪能できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  カウンター席で職人の技を間近に！五感で楽しむライブ感あふれる寿司ダイニング
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                宿によっては、オープンキッチンの寿司カウンターで職人が一貫一貫丁寧に握りたてを提供してくれるライブ演出が大好評。シャリの温度、煮切り醤油の塗り具合、海苔のパリッとした食感まで計算し尽くされた握りを、板前との粋な会話とともに楽しむ時間は温泉旅の最高のハイライトになります。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  地元の銘酒・地酒ペアリングと、湯量豊富な源泉かけ流し露天風呂の極上癒やし
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                新鮮な寿司の美味しさをさらに引き立てるのが、石川の手取川や黒帯、静岡の磯自慢や初亀といった全国屈指の銘酒たち。芳醇な日本酒と極上寿司のマリアージュに酔いしれた後は、渓谷や海を望む名湯露天風呂に浸かって心身をリフレッシュ。美食と温泉が織りなす完璧な休日は明日への活力をもたらしてくれます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68251/68251.jpg"
                  alt="山中温泉　かがり吉祥亭"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.64 (1869件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    石川県加賀市・名勝鶴仙渓を望む渓流露天風呂と加賀能登寿司会席
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    山中温泉　かがり吉祥亭
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    山中温泉の名勝「鶴仙渓」の渓谷沿いに佇み、美しい自然と伝統芸能の加賀太鼓ショーが楽しめる人気の温泉旅館。夕食では北陸の豊かな海で獲れた新鮮な魚介を惜しみなく使った会席料理が振る舞われ、揚げたての天ぷら食べ放題や地魚の握り寿司など美食の数々がテーブルを彩ります。鶴仙渓のせせらぎを聞きながら浸かる開放的な立ち湯露天風呂やヒノキ風呂で身体を芯まで温め、加賀の美食と名湯に癒やされる優雅なひとときをお過ごしください。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「お風呂と食事が最高、家族みんな大満足お風呂がとてもよかったです。食事もおいしく、家族みんな大変満足していました。また、利用したいです。クチコミの詳細はこちらから 2026-09-04 23:50:06投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 石川県加賀市山中温泉こおろぎ町ニ1-1</div>
                    <div><strong>アクセス:</strong> 加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより16分。金沢・福井へは車で1時間</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約10,900円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D68251"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28425/28425.jpg"
                  alt="伊豆熱川温泉　六つの貸切風呂を湯めぐり　ふたりの湯宿　湯花満開"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.54 (769件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    静岡県東伊豆町・六つの源泉かけ流し貸切風呂と伊豆地魚寿司会席
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    伊豆熱川温泉　六つの貸切風呂を湯めぐり　ふたりの湯宿　湯花満開
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    伊豆熱川温泉の海沿いに位置し、敷地内に湧き出る良質な自家源泉を六つもの個性的な貸切風呂で何度でも無料で湯めぐりできる大人の隠れ宿。夕食には相模湾で獲れた新鮮な地魚の握り寿司や金目鯛の姿煮、伊勢海老のお造りなど伊豆の海の幸が贅沢に並ぶ極上会席をご用意。全館畳敷きの温もりある空間で、大切な人と二人きりで温泉三昧と獲れたての寿司美食を心ゆくまで満喫できる至極の温泉ステイが叶います。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「お湯が出ず困ったが食事や接客は満足貸切風呂のシャワーがお湯にならない 2か所目もお湯にならない 部屋に帰り部屋の風呂のシャワーもお湯が出ない フロントに連絡するとタンクからお湯が来るまで時間がかか… 2026-09-02 22:13:34投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 静岡県賀茂郡東伊豆町奈良本987-1</div>
                    <div><strong>アクセス:</strong> 伊豆急行線・伊豆熱川温泉駅／Ｒ１３５を通り、熱海から約１時間。伊豆熱川駅から海へ徒歩３～５分。当館海側に無料駐車場あり。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約10,500円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28425"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/62177/62177.jpg"
                  alt="伊東温泉　横浜藤よし伊豆店"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.81 (109件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    静岡県伊東市・伊東港直送の新鮮地魚握りと相模灘パノラマ絶景湯
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    伊東温泉　横浜藤よし伊豆店
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    伊東温泉の高台から相模灘の広大な水平線を見下ろす、料理自慢の隠れ家温泉旅館。毎朝伊東港で水揚げされるピチピチの地魚を厳選し、熟練の板前が握る本格寿司会席はリピーターからも絶賛される逸品です。海を一望する絶景の源泉かけ流し露天風呂や貸切風呂で名湯を浴びた後は、窓一面に広がる海景色を眺めながら旬の握りと地酒に舌鼓。伊豆の海の恵みを五感で味わう至福の休日が約束されます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「自然に囲まれた離れで源泉かけ流しを満喫自然豊かで心が休まる最高の環境でした!!部屋はザ・和室で畳がひかれていました。各お部屋が離れているところにあるので、お隣のお客さんを気にしなくていいので子… 2026-08-05 19:13:00投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 静岡県伊東市富戸1305-8</div>
                    <div><strong>アクセス:</strong> ■伊豆急行「川奈駅」よりタクシーで10分／伊豆急行「伊東駅」よりタクシーで15分／伊豆急行「富戸駅」より送迎有（要予約）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約18,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D62177"
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

              <li key="furusato-tax-winter-crab-gourmet-luxury-stay">
                <Link href="/furusato-tax-winter-crab-gourmet-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【冬の味覚・活蟹尽くし×ふるさと納税】越前蟹・松葉蟹・間人蟹を堪能する極上宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay">
                <Link href="/furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【夕映えリアス式海岸×ふるさと納税】伊勢海老・鮑料理とオーシャンビュー海宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-local-gourmet-inn-stay">
                <Link href="/furusato-tax-local-gourmet-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【ご当地グルメ特化宿×ふるさと納税】その土地の旬の味覚を部屋食で味わう名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-great-wagyu-beef-gourmet-stay">
                <Link href="/furusato-tax-three-great-wagyu-beef-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三大和牛×ふるさと納税】松阪牛・神戸牛・近江牛を味わう美食温泉宿</span>
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
