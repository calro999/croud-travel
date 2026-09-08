import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '客室露天風呂付き客室で過ごす大人のプライベート温泉ステイ名旅館×ふるさと納税完全ガイド【2026年最新】修善寺・箱根・京都嵐山',
  description: '好きな時に好きなだけ名湯に浸かる至福の時間！一万五千坪の日本庭園と緑に包まれる露天風呂付き客室を誇る伊豆の隠れ宿「修善寺温泉 宙 SORA 渡月荘金龍」、自家源泉を全室の専用露天風呂に掛け流し竹取物語の世界観を体現した「箱根 金乃竹 塔ノ澤」、保津川を望むプライベート露天風呂と最高峰の京懐石フレンチが評判の「翠嵐 ラグジュアリーコレクションホテル 京都」。誰にも邪魔されないおこもり滞在を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '客室露天風呂付き客室＆極上プライベート温泉宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-private-room-open-air-bath-luxury-stay' },
  openGraph: {
    title: '客室露天風呂付き客室で過ごす大人のプライベート温泉ステイ名旅館×ふるさと納税完全ガイド【2026年最新】修善寺・箱根・京都嵐山',
    description: '好きな時に好きなだけ名湯に浸かる至福の時間！一万五千坪の日本庭園と緑に包まれる露天風呂付き客室を誇る伊豆の隠れ宿「修善寺温泉 宙 SORA 渡月荘金龍」、自家源泉を全室の専用露天風呂に掛け流し竹取物語の世界観を体現した「箱根 金乃竹 塔ノ澤」、保津川を望むプライベート露天風呂と最高峰の京懐石フレンチが評判の「翠嵐 ラグジュアリーコレクションホテル 京都」。誰にも邪魔されないおこもり滞在を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-private-room-open-air-bath-luxury-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoPrivateRoomOpenAirStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '客室露天風呂付き大人のプライベート温泉宿特集', item: baseUrl + '/furusato-tax-private-room-open-air-bath-luxury-stay' },
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
          <span className="text-stone-800 font-medium">客室露天風呂付き大人のプライベート温泉宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            客室露天風呂付き客室＆極上プライベート温泉宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            客室露天風呂付き客室で過ごす大人のプライベート温泉ステイ名旅館×ふるさと納税完全ガイド【2026年最新】修善寺・箱根・京都嵐山
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            誰にも気兼ねすることなく、朝陽の差し込む清々しい早朝も、月明かりが揺れる静寂の深夜も、部屋の扉を開けるだけでいつでも温泉に身を委ねられる贅沢――それが「客室露天風呂付き客室」の最大の魅力です。大浴場のような混雑や入浴時間を気にする必要が一切なく、自分たちのペースで心身を完全に解放できるプライベートな空間は、記念日やご褒美旅行、大切な人との語らいにこの上ない癒やしをもたらしてくれます。伊豆最古の温泉地・修善寺で一万五千坪もの壮大な日本庭園を借景に露天風呂付き客室を備える「宙 SORA 渡月荘金龍」、箱根の深い渓谷に佇み自家源泉かけ流しの露天風呂と幻想的な竹林空間で大人のおこもり旅を演出する「金乃竹 塔ノ澤」、そして京都・嵐山の保津川ほとりに建ち、専用の天然温泉露天風呂と世界最高峰の洗練されたおもてなしを誇る「翠嵐 ラグジュアリーコレクションホテル 京都」。通常は高価格帯となる憧れの露天風呂付き客室も、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用すれば、実質自己負担2,000円で驚くほどお得に滞在可能です。何もしない贅沢を味わう、極上のプライベート温泉旅へ出かけましょう。
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
                  24時間いつでも好きな時に独占！移動ゼロで何度でも楽しめる専用露天風呂
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                目が覚めてすぐに朝靄の中でひと風呂、夕暮れに茜色の空を眺めながら乾杯、星空の下で心ゆくまで長湯。自分たちだけの露天風呂だからこそ、湯浴みの回数や時間帯も自由自在。日常の緊張が芯からほどけていく贅沢を実感できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  他のお客様と会わずに寛げる完全プライベートな動線と贅沢なテラス空間
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                客室に専用の露天風呂とデイベッドやデッキチェアを備えたテラスが直結。湯上がりには心地よい風に吹かれながらプライベートな読書やドリンクを楽しめ、静寂と安心感に包まれた非日常の寛ぎが約束されます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  記念日やプロポーズ、ご夫婦の節目にふさわしい最高峰のおもてなしと美食会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                専任スタッフによるきめ細やかなサービス、伊豆の金目鯛や伊勢海老、京都の伝統京懐石など、各地の最高級食材を贅を尽くして仕上げた会席料理。大切な人と過ごす特別なひとときを生涯忘れられない思い出へと昇華させます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/27983/27983.jpg"
                  alt="修善寺温泉　宙ＳＯＲＡ　渡月荘金龍"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.66 (614件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    静岡県伊豆市・一万五千坪の日本庭園を望む客室露天風呂と修善寺の名湯
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    修善寺温泉　宙ＳＯＲＡ　渡月荘金龍
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    伊豆最古の歴史を誇る修善寺温泉の高台に位置し、一万五千坪に及ぶ広大な日本庭園の四季折々の美景を抱く名門温泉旅館。客室のウッドデッキに配された専用露天風呂からは、春の山桜、初夏の新緑、秋の紅葉など、移ろいゆく伊豆の自然を独り占めしながら無色透明のまろやかな名湯を堪能できます。館内にはデザイナーが手掛けた円形の幻想的な露天風呂や光のラウンジ、修善寺の竹林を望む散策路も完備。駿河湾の新鮮な地魚や伊豆牛を贅沢に盛り込んだ月替わりの創作会席とともに、極上のリトリート時間を約束してくれます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「エアコンの音がうるさく、少し気になった総合的には満足でしたがエアコンの音がうるさく感じられたクチコミの詳細はこちらから 2026-09-01 13:01:12投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 静岡県伊豆市修善寺3455</div>
                    <div><strong>アクセス:</strong> 伊豆箱根鉄道修善寺駅から路線バスまたはタクシー（送迎不可）/東名高速沼津ICから伊豆縦貫道・伊豆中央道経由約３５分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約11,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D27983"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/184578/184578.jpg"
                  alt="金乃竹　塔ノ澤"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 3.25 (15件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    神奈川県箱根町・竹取物語の世界観を体現した全室自家源泉露天風呂付きの大人の隠れ家
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    金乃竹　塔ノ澤
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    箱根の塔ノ澤の豊かな森に抱かれ、専用の吊り橋を渡ってアプローチする静寂に包まれた大人のための隠れ宿。「竹取物語」をデザインコンセプトに創られた館内は、水盤に浮かぶバーラウンジや幻想的な竹林が広がる非日常の世界。全客室のテラスに自家源泉かけ流しの天然温泉露天風呂を備え、肌に優しく吸い付くようなアルカリ性単純温泉にいつでも浸かることができます。厳選された京都の食材と旬の味覚を融合させた本格京懐石を堪能し、日常の喧騒から完全に隔絶された静謐な大人の贅沢を満喫できます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 神奈川県足柄下郡箱根町塔之澤191</div>
                    <div><strong>アクセス:</strong> 箱根湯本駅より路線バス又はタクシーで約5分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約73,768円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D184578"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/158466/158466.jpg"
                  alt="翠嵐ラグジュアリーコレクションホテル京都"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.69 (30件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    京都府京都市・嵐山保津川の特等席！プライベート天然温泉付き客室と最高峰ラグジュアリー
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    翠嵐ラグジュアリーコレクションホテル京都
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    平安貴族の避暑地として栄えた京都・嵐山、大堰川（保津川）のほとりに佇み、歴史的建造物と現代ラグジュアリーが調和する世界的ホテルブランドの名宿。プライベート露天風呂付き客室「柚葉」などでは、嵐山温泉の肌触り豊かな天然温泉を部屋の専用湯船に湛え、中庭の緑を眺めながら至福の湯浴みが叶います。歴史ある延命閣での伝統的な京会席とフレンチが融合したディナー、川沿いのカフェ「茶寮 八翠」でのシャンパンディライトなど、古都の雅と世界最高水準のホスピタリティが融合した至高の京都ステイを体験できます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 京都府京都市右京区嵯峨天龍寺芒ノ馬場町12</div>
                    <div><strong>アクセス:</strong> 京福電鉄嵐山本線 嵐山駅 より徒歩約６分　阪急嵐山線 嵐山駅  、JR山陰本線 嵯峨野線  嵯峨嵐山駅 より徒歩約15分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約49,525円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D158466"
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

              <li key="furusato-tax-anniversary-luxury-suite-villa-stay">
                <Link href="/furusato-tax-anniversary-luxury-suite-villa-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【記念日・スイートヴィラ×ふるさと納税】一棟貸切と絶景露天の特別ステイ</span>
                </Link>
              </li>
  

              <li key="furusato-tax-private-villa-hanare-hideaway-stay">
                <Link href="/furusato-tax-private-villa-hanare-hideaway-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-luxury-hotspring-ryokan-stay">
                <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-onsen-couple-private-luxury-stay">
                <Link href="/furusato-tax-onsen-couple-private-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【夫婦・カップル温泉旅行×ふるさと納税】貸切風呂と極上ステイ完全ガイド</span>
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
