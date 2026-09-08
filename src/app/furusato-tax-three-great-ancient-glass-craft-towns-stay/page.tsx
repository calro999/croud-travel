import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '日本三大ガラスの街＆煌めく切子・吹きガラス体験と海辺・湖畔の眺望宿×ふるさと納税完全ガイド【2026年最新】小樽・鹿児島・東京',
  description: '光を透過し万華鏡のように輝くガラスの芸術「日本三大ガラスの街」（北海道小樽・北一硝子と小樽運河、鹿児島・薩摩藩の誇り薩摩切子、東京・江戸町人の粋江戸切子）。ガス灯の揺れるレトロな港町散策、職人の吹きガラス体験、海と夜景を望む眺望名旅館。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ大人のクラフトアート宿泊ガイド。',
  keywords: [
    '日本三大ガラスの街・光の工芸と眺望ステイ特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '日本三大',
    '温泉旅館 予約',
    '高級リゾート クーポン'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-three-great-ancient-glass-craft-towns-stay' },
  openGraph: {
    title: '日本三大ガラスの街＆煌めく切子・吹きガラス体験と海辺・湖畔の眺望宿×ふるさと納税完全ガイド【2026年最新】小樽・鹿児島・東京',
    description: '光を透過し万華鏡のように輝くガラスの芸術「日本三大ガラスの街」（北海道小樽・北一硝子と小樽運河、鹿児島・薩摩藩の誇り薩摩切子、東京・江戸町人の粋江戸切子）。ガス灯の揺れるレトロな港町散策、職人の吹きガラス体験、海と夜景を望む眺望名旅館。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ大人のクラフトアート宿泊ガイド。',
    url: baseUrl + '/furusato-tax-three-great-ancient-glass-craft-towns-stay',
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
      { '@type': 'ListItem', position: 3, name: '日本三大ガラスの街・光の工芸と眺望ステイ特集', item: baseUrl + '/furusato-tax-three-great-ancient-glass-craft-towns-stay' },
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
          <span className="text-stone-800 font-medium">日本三大ガラスの街・光の工芸と眺望ステイ特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            日本三大ガラスの街・光の工芸と眺望ステイ特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            日本三大ガラスの街＆煌めく切子・吹きガラス体験と海辺・湖畔の眺望宿
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            灼熱の窯の中でドロドロに溶けたガラスが、職人の竿から吹き込まれる息によって命を宿し、冷え固まった瞬間に永遠の透明度と輝きを放つガラス工芸。その歴史と技術の粋が集まる聖地が「日本三大ガラスの街」です。明治のニシン漁を支えた石油ランプや浮き玉から発展し、石造り倉庫に灯るガス灯とともにガラスの街として世界中から人々を惹きつける北海道・小樽。幕末の名君・島津斉彬が集成館事業として育成し、重厚な色被せ（いろきせ）と美しい「ぼかし」のカット技術で幻の名品と讃えられた鹿児島・薩摩切子。そして江戸末期に加賀屋久兵衛らが始め、繊細な魚子（ななこ）や麻の葉文様を彫り込んで庶民の粋を表現した東京・江戸切子。工房で職人たちの技に見惚れ、自らマイグラスを作る吹きガラス体験を楽しんだ後は、海や運河、大都会の煌めく夜景を一望する上質なホテルで美酒に酔いしれる時間。楽天ふるさと納税トラベルクーポンを活用して、光と色彩のイマジネーションが広がる極上のアートステイへ出かけましょう。
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
                  薩摩切子の「ぼかし」と江戸切子の「シャープさ」、小樽の幻想的なランプ灯
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                日本三大ガラスの街は、それぞれまったく異なる光の個性を放っています。厚い色ガラスを削ることで生み出される薩摩切子の独特なグラデーションのグラデーション美。薄いガラスに寸分の狂いもなく施される江戸切子の鮮烈なカッティング。そして小樽の167灯の石油ランプが灯る喫茶ホールや、吹きガラスの温もりある気泡。手にとって光にかざすたびにきらめく無数の光線は、旅の記憶をいつまでも鮮やかに照らし続けてくれます。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  手作り吹きガラス・サンドブラスト・切子カッティング体験で自分だけの器作り
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                各都市のガラス工房では、熟練の職人の指導のもとで本格的なガラス制作体験が楽しめます。真っ赤に熱せられたガラスを竿に巻き取って息を吹き込む吹きガラス体験、精密なグラインダーを使って文様を刻む切子体験。完成した世界に一つだけのオリジナルグラスを自宅に持ち帰り、旅先で買った地酒やウイスキーを注いで味わう瞬間は、旅の最高の余韻となります。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  小樽の岬にそびえるオーシャンフロント城塞や鹿児島の桜島ビュー名門ホテル
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                小樽の断崖絶壁に佇み全室オーシャンビューと露天風呂を備えたホテルノイシュロス小樽、桜島と錦江湾の絶景パノラマを露天風呂から仰ぐ名門SHIROYAMA HOTEL kagoshima、東京スカイツリーの煌めく夜景を間近に望むロッテシティホテル錦糸町。ふるさと納税クーポンを使えば、憧れのパノラマビュールームも実質2,000円で驚くほどお得に予約可能です。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/20682/20682.jpg"
                  alt="ホテルノイシュロス小樽"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.25 (1465件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 北海道 小樽市祝津3-282</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    ホテルノイシュロス小樽
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「食事や景色は最高、接客の向上に期待お食事もお風呂もお部屋も景色も最高でした。送迎も融通をきかせていただくなど、接客に関しては素晴らしい面もありましたが、敢えて申し上げると若いスタッフの方への教育に… 2026-08-29 15:50:23投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> 小樽駅より無料送迎有 要予約（電話対応） ＪＲ小樽駅よりバス２０分 千歳空港よりお車で９０分 小樽ＩＣよりお車で２５分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約11,550円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D20682"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5305/5305.jpg"
                  alt="ＳＨＩＲＯＹＡＭＡ　ＨＯＴＥＬ　ｋａｇｏｓｈｉｍａ（城山ホテル鹿児島）"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.63 (3837件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 鹿児島県 鹿児島市新照院町41-1</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    ＳＨＩＲＯＹＡＭＡ　ＨＯＴＥＬ　ｋａｇｏｓｈｉｍａ（城山ホテル鹿児島）
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「大きな窓からの景色と美味しい朝食に大満足部屋の窓が大きく、景色も素晴らしい、朝食ビュッフェもとても美味しかったですスタッフのホスピタリティも最高ですこちらのホテルを選んで本当に良か… 2026-09-05 22:24:41投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> 鹿児島中央からタクシー約１０分 鹿児島中央駅や天文館等を経由する無料のシャトルバスを30分間隔で運行</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約9,100円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5305"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/104565/104565.jpg"
                  alt="ロッテシティホテル錦糸町"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.36 (2894件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 東京都 墨田区錦糸4-6-1</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    ロッテシティホテル錦糸町
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「スカイツリーが見える広い部屋と便利な立地東京スカイツリーの見えるお部屋で、ロケーションがとにかく最高でした。東京スカイツリーまではホテルから地下鉄で一駅なので移動も楽です。お部屋もきれいで大変広く… 2026-09-05 06:13:01投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> JR錦糸町駅北口徒歩約1分。東京メトロ半蔵門線錦糸町駅5番出口直結！東京スカイツリーは電車で3分。浅草寺はバスで約20分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約7,200円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D104565"
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

              <li key="furusato-tax-three-great-glass-craft-towns-stay">
                <Link href="/furusato-tax-three-great-glass-craft-towns-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大ガラスの工芸の街＆吹きガラス体験宿（小樽・諏訪・黒壁）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-sake-vessels-pottery-stay">
                <Link href="/furusato-tax-three-great-sake-vessels-pottery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大酒器＆名陶の里・窯元巡り美食宿（備前・萩・唐津）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-lacquer-craft-historic-inns-stay">
                <Link href="/furusato-tax-three-great-lacquer-craft-historic-inns-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大漆器＆漆黒と金蒔絵の雅・名旅館宿（輪島・会津・山中）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-night-views-romantic-stay">
                <Link href="/furusato-tax-three-great-night-views-romantic-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大夜景を望む極上ロマンチックホテル（函館・神戸・長崎）</span>
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
