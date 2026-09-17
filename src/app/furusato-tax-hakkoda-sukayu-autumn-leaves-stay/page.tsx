import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '八甲田山ロープウェーの錦秋パノラマ＆酸ヶ湯温泉ヒバ千人風呂！秘湯宿×ふるさと納税完全ガイド【2026年最新秋旅】青森',
  description: '9月下旬〜10月下旬に日本で最も早い錦秋を迎える青森の霊峰「八甲田山」。ロープウェーから見下ろす360度の大紅葉絨毯と、総ヒバ造りの名物千人風呂を誇る「ホテル城ヶ倉」「酸ヶ湯温泉旅館」「蔦温泉旅館」で青森倉石牛や十和田湖ヒメマス・山菜料理を堪能。ふるさと納税で実質2,000円。',
  keywords: [
    "ふるさと納税 温泉",
    "ふるさと納税 宿泊券",
    "ふるさと納税 トラベルクーポン",
    "青森・八甲田山紅葉＆酸ヶ湯温泉ヒバ千人風呂特集",
    "10月 旅行 おすすめ",
    "11月 旅行 おすすめ",
    "秋 旅行 温泉",
    "八甲田山 酸ヶ湯温泉 紅葉 旅館",
    "楽天トラベル ふるさと納税",
    "実質2000円 温泉"
],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-hakkoda-sukayu-autumn-leaves-stay/'
  },
  openGraph: {
    title: '八甲田山ロープウェーの錦秋パノラマ＆酸ヶ湯温泉ヒバ千人風呂！秘湯宿×ふるさと納税完全ガイド【2026年最新秋旅】青森',
    description: '9月下旬〜10月下旬に日本で最も早い錦秋を迎える青森の霊峰「八甲田山」。ロープウェーから見下ろす360度の大紅葉絨毯と、総ヒバ造りの名物千人風呂を誇る「ホテル城ヶ倉」「酸ヶ湯温泉旅館」「蔦温泉旅館」で青森倉石牛や十和田湖ヒメマス・山菜料理を堪能。ふるさと納税で実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-hakkoda-sukayu-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

const HOTEL_DATA = {
  hakkoda_jogakura: {
    name: '八甲田城ヶ倉温泉　ホテル城ヶ倉－ＨＯＴＥＬ　Ｊｏｇａｋｕｒａ－',
    no: 79432,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D79432',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D79432%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D79432',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/79432/79432.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/79432.jpg',
    minCharge: 5700,
    rating: 4.52,
    reviews: 416,
    special: '源泉かけ流し温泉を八甲田の自然と共に楽しむ北欧風マウンテンリゾート。地元青森の旬の味覚をご用意。',
    address: '青森県青森市荒川八甲田山中',
    access: 'ＪＲ　青森駅よりＪＲバス十和田湖行き乗車後、城ヶ倉温泉前にて下車'
  },
  hakkoda_sukayu: {
    name: '酸ヶ湯温泉旅館',
    no: 41009,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41009',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D41009%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D41009',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/41009/41009.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/41009.jpg',
    minCharge: 11495,
    rating: 4.4,
    reviews: 1512,
    special: '広さ１６０畳の大浴場「ひば千人風呂」にぜひ一度お入り下さい。昔ながらの混浴を守っています。',
    address: '青森県青森市荒川字南荒川山国有林小字酸湯沢50',
    access: 'ＪＲ　青森駅より十和田湖行ＪＲバスで７０分'
  },
  hakkoda_tsuta: {
    name: '蔦温泉旅館－足元から源泉湧出の自噴温泉－',
    no: 142919,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D142919',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D142919%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D142919',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/142919.jpg',
    minCharge: 20900,
    rating: 4.76,
    reviews: 373,
    special: '約千年前から源泉のやさしい湯が湧き出てくる全国でも希少な「源泉湧き流し」の湯をお楽しみ下さい',
    address: '青森県十和田市奥瀬蔦野湯1',
    access: '七戸十和田駅よりお車にて１時間／青森駅よりお車にて1時間20分'
  }
};

export default function FeatureArticlePage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav className="max-w-6xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-600 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:underline text-stone-500">トップ</Link>
        <span>&gt;</span>
        <Link href="/autumn-leaves" className="hover:underline text-stone-500">秋・紅葉特集</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-medium">青森・十和田八幡平 / 八甲田山ロープウェー紅葉＆酸ヶ湯名湯</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-amber-950 via-red-950 to-stone-900 text-white py-14 md:py-20 px-4 mb-10 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-5 text-amber-200">
            <span>🍁 10月・11月限定 秋旅特集</span>
            <span>•</span>
            <span>楽天ふるさと納税トラベルクーポン対応</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            八甲田山ロープウェーの錦秋パノラマ＆酸ヶ湯温泉ヒバ千人風呂！秘湯宿×ふるさと納税完全ガイド【2026年最新秋旅】青森
          </h1>
          <p className="text-sm md:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed">
            空中から見下ろす八甲田の紅葉絨毯と、総ヒバ造りの千人風呂で湯浴みする秘湯ステイ。ふるさと納税の宿泊クーポンを活用すれば実質2,000円で憧れの上質宿へ滞在できます。
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* メインコンテンツ */}
        <article className="lg:col-span-2 space-y-10">
          {/* エリア概要セクション */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-200/80">
            <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 pb-3 border-b border-stone-200 flex items-center gap-3">
              <span className="text-2xl">🍂</span>
              秋の風情と旬の味覚を堪能する特別な旅
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm md:text-base mb-6">
              青森県の中央に連なる八甲田連峰は、ブナやカエデ、ダケカンバが山頂から山麓へとグラデーションを描きながら色づく東北屈指の紅葉スポット。八甲田ロープウェーからは見渡す限りの錦秋の大パノラマが広がり、地獄沼や蔦沼など水面に映る紅葉も見事。約300年の歴史を持つ「酸ヶ湯温泉」の総ヒバ造り160畳の大浴場「ヒバ千人風呂」をはじめ、至高の秘湯宿で滋味あふれる山の幸を味わえます。
            </p>
            <div className="bg-amber-50/80 rounded-xl p-5 border border-amber-200/80">
              <h3 className="font-bold text-amber-950 text-sm md:text-base mb-2 flex items-center gap-2">
                <span>💡</span> 10月〜11月の旅を満喫する3大ポイント
              </h3>
              <ul className="text-xs md:text-sm text-amber-900 space-y-2 list-disc list-inside">
                <li><strong>見頃の紅葉パノラマ：</strong>標高や日当たりで刻一刻と変化するグラデーションを鑑賞</li>
                <li><strong>極上の温泉と湯巡り：</strong>朝夕の冷え込む秋風の中で入る露天風呂は格別の贅沢</li>
                <li><strong>実質2,000円ステイ：</strong>楽天ふるさと納税トラベルクーポンで賢く予約</li>
              </ul>
            </div>
          </section>

          {/* 厳選宿1 */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">厳選の宿 1</span>
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.hakkoda_jogakura.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.hakkoda_jogakura.rating} ({HOTEL_DATA.hakkoda_jogakura.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.hakkoda_jogakura.img}
                alt={HOTEL_DATA.hakkoda_jogakura.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.hakkoda_jogakura.special}。秋の彩りに包まれる極上のロケーションで、日頃の喧騒を忘れ心身を解きほぐす至福の滞在が楽しめます。旬の地元食材をふんだんに使った豪華なお料理とともに、贅沢なひとときを過ごせます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.hakkoda_jogakura.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.hakkoda_jogakura.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.hakkoda_jogakura.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.hakkoda_jogakura.planUrl || HOTEL_DATA.hakkoda_jogakura.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.hakkoda_jogakura.reviewUrl || HOTEL_DATA.hakkoda_jogakura.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-3.5 px-5 rounded-xl text-center border border-stone-300 text-sm transition-all"
              >
                口コミを見る
              </a>
            </div>
          </section>

          {/* 厳選宿2 */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">厳選の宿 2</span>
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.hakkoda_sukayu.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.hakkoda_sukayu.rating} ({HOTEL_DATA.hakkoda_sukayu.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.hakkoda_sukayu.img}
                alt={HOTEL_DATA.hakkoda_sukayu.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.hakkoda_sukayu.special}。清らかな空気と美しい自然の景観に囲まれ、旅情あふれる温泉と自慢の料理を堪能できます。秋の心地よい夜長を過ごすのにぴったりの癒しの空間です。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.hakkoda_sukayu.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.hakkoda_sukayu.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.hakkoda_sukayu.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.hakkoda_sukayu.planUrl || HOTEL_DATA.hakkoda_sukayu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.hakkoda_sukayu.reviewUrl || HOTEL_DATA.hakkoda_sukayu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-3.5 px-5 rounded-xl text-center border border-stone-300 text-sm transition-all"
              >
                口コミを見る
              </a>
            </div>
          </section>

          {/* 厳選宿3 */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">厳選の宿 3</span>
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.hakkoda_tsuta.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.hakkoda_tsuta.rating} ({HOTEL_DATA.hakkoda_tsuta.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.hakkoda_tsuta.img}
                alt={HOTEL_DATA.hakkoda_tsuta.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.hakkoda_tsuta.special}。旅の目的に合わせて快適に過ごせる温かなおもてなしと充実の設備が魅力。観光や散策の拠点として最適で、心地よい秋の滞在を叶えてくれます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.hakkoda_tsuta.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.hakkoda_tsuta.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.hakkoda_tsuta.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.hakkoda_tsuta.planUrl || HOTEL_DATA.hakkoda_tsuta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.hakkoda_tsuta.reviewUrl || HOTEL_DATA.hakkoda_tsuta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-3.5 px-5 rounded-xl text-center border border-stone-300 text-sm transition-all"
              >
                口コミを見る
              </a>
            </div>
          </section>

          {/* ふるさと納税活用法 */}
          <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-6 md:p-8 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🎁</span> 楽天ふるさと納税で実質2,000円宿泊する方法
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-amber-50 leading-relaxed">
              <p>
                楽天ふるさと納税の「トラベルクーポン（宿泊補助券）」を利用すると、寄付金額に応じた割引クーポンが即時または後日発行され、楽天トラベルでの宿泊予約時に直接利用できます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-stone-900">
                <div className="bg-white rounded-xl p-3.5 text-center shadow-sm">
                  <div className="font-bold text-amber-800 text-xs mb-1">STEP 1</div>
                  <div className="font-bold text-sm">自治体へ寄付</div>
                  <div className="text-[11px] text-stone-600 mt-1">楽天ふるさと納税で対象地域の宿泊クーポンを選択</div>
                </div>
                <div className="bg-white rounded-xl p-3.5 text-center shadow-sm">
                  <div className="font-bold text-amber-800 text-xs mb-1">STEP 2</div>
                  <div className="font-bold text-sm">クーポン獲得</div>
                  <div className="text-[11px] text-stone-600 mt-1">myクーポンに対象クーポンが即時〜数日で付与</div>
                </div>
                <div className="bg-white rounded-xl p-3.5 text-center shadow-sm">
                  <div className="font-bold text-amber-800 text-xs mb-1">STEP 3</div>
                  <div className="font-bold text-sm">宿を予約</div>
                  <div className="text-[11px] text-stone-600 mt-1">楽天トラベル決済画面でクーポンを適用して予約完了</div>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* サイドバー */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 sticky top-6">
            <h3 className="font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200 flex items-center gap-2">
              <span>📌</span> この特集で紹介した宿
            </h3>
            <ul className="space-y-4 text-xs md:text-sm">
              <li>
                <a href={HOTEL_DATA.hakkoda_jogakura.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.hakkoda_jogakura.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.hakkoda_jogakura.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.hakkoda_sukayu.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.hakkoda_sukayu.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.hakkoda_sukayu.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.hakkoda_tsuta.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.hakkoda_tsuta.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.hakkoda_tsuta.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
            </ul>

            <hr className="my-5 border-stone-200" />

            <h4 className="font-bold text-stone-900 text-xs mb-3">🍂 関連する秋の特集</h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link href="/furusato-tax-narukokyo-autumn-leaves-onsen-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・宮城・鳴子温泉郷＆鳴子峡紅葉
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-unazuki-kurobe-gorge-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・富山・宇奈月温泉＆黒部峡谷トロッコ
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-iya-valley-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・徳島・祖谷渓かずら橋＆秘境祖谷温泉
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-yahiko-autumn-leaves-chrysanthemum-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・新潟・弥彦公園もみじ谷＆菊まつり
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-omihachiman-suigo-autumn-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・滋賀・近江八幡水郷めぐり＆近江牛
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
