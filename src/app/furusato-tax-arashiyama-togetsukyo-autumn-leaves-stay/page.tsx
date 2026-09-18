import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '京都・嵐山渡月橋の錦秋パノラマ＆嵯峨野トロッコ列車・保津川下り！嵐山温泉京懐石宿×ふるさと納税完全ガイド【2026年最新秋旅】京都',
  description: '11月中旬〜12月上旬に京都屈指の観光名所が燃え盛る紅葉に染まる「京都・嵐山」。渡月橋や天龍寺曹源池庭園の深紅絵巻、嵯峨野トロッコ列車と保津川下りの大渓谷紅葉、桂川沿いに湧く名湯「花筏」「花伝抄」「渡月亭」で嵐山温泉露天風呂と伝統の雅な京懐石・湯豆腐を堪能。ふるさと納税トラベルクーポンで実質2,000円。',
  keywords: [
    "ふるさと納税 温泉",
    "ふるさと納税 宿泊券",
    "ふるさと納税 トラベルクーポン",
    "京都・嵐山渡月橋＆嵯峨野トロッコ紅葉特集",
    "10月 旅行 おすすめ",
    "11月 旅行 おすすめ",
    "秋 旅行 温泉",
    "嵐山 渡月橋 紅葉 トロッコ 保津川下り 嵐山温泉 旅館",
    "楽天トラベル ふるさと納税",
    "実質2000円 温泉"
],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-arashiyama-togetsukyo-autumn-leaves-stay/'
  },
  openGraph: {
    title: '京都・嵐山渡月橋の錦秋パノラマ＆嵯峨野トロッコ列車・保津川下り！嵐山温泉京懐石宿×ふるさと納税完全ガイド【2026年最新秋旅】京都',
    description: '11月中旬〜12月上旬に京都屈指の観光名所が燃え盛る紅葉に染まる「京都・嵐山」。渡月橋や天龍寺曹源池庭園の深紅絵巻、嵯峨野トロッコ列車と保津川下りの大渓谷紅葉、桂川沿いに湧く名湯「花筏」「花伝抄」「渡月亭」で嵐山温泉露天風呂と伝統の雅な京懐石・湯豆腐を堪能。ふるさと納税トラベルクーポンで実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-arashiyama-togetsukyo-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

const HOTEL_DATA = {
  arashiyama_benkei: {
    name: '嵐山温泉彩四季の宿　花筏',
    no: 73923,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D73923',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D73923%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D73923',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/73923.jpg',
    minCharge: 24035,
    rating: 4.17,
    reviews: 309,
    special: '嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。',
    address: '京都府京都市西京区嵐山中尾下町57',
    access: '阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。JR京都駅３０分、阪急梅田駅５０分'
  },
  arashiyama_kadokura: {
    name: '京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）',
    no: 130702,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D130702',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D130702%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D130702',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/130702/130702.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/130702.jpg',
    minCharge: 15200,
    rating: 4.41,
    reviews: 1961,
    special: '渡月橋まで徒歩約5分！目の前の阪急嵐山駅より��都の中心街まですぐ！天然温泉と5つの貸切風呂が無料！',
    address: '京都府京都市西京区嵐山西一川町5-4',
    access: '阪急嵐山線「嵐山駅」より徒歩１分。JR「京都駅」より約30分、阪急「梅田駅」より約50分。'
  },
  arashiyama_suiran: {
    name: '京都　嵐山温泉　渡月亭',
    no: 8838,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8838',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8838%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D8838',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/8838.jpg',
    minCharge: 23400,
    rating: 3.82,
    reviews: 253,
    special: '【料亭旅館】嵐山・嵯峨野散策に最適な京都・嵐山温泉の宿。',
    address: '京都府京都市西京区嵐山中尾下町54-4（渡月橋南詰め）',
    access: '京都駅よりＪＲ嵯峨野線嵯峨嵐山駅下車徒歩１５分。阪急京都���桂駅より嵐山線嵐山駅下車徒歩５分。名神京都南ＩＣより約４０分'
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
        <span className="text-stone-800 font-medium">京都・嵐山嵯峨野 / 渡月橋紅葉＆嵯峨野トロッコ列車・保津川下り・嵐山温泉</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-rose-950 via-red-950 to-stone-900 text-white py-14 md:py-20 px-4 mb-10 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-5 text-amber-200">
            <span>🍁 10月・11月限定 秋旅特集</span>
            <span>•</span>
            <span>楽天ふるさと納税トラベルクーポン対応</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            京都・嵐山渡月橋の錦秋パノラマ＆嵯峨野トロッコ列車・保津川下り！嵐山温泉京懐石宿×ふるさと納税完全ガイド【2026年最新秋旅】京都
          </h1>
          <p className="text-sm md:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed">
            桂川に映る渡月橋の紅葉パノラマと嵯峨野トロッコ、雅な嵐山温泉で味わう極上京懐石。ふるさと納税の宿泊クーポンを活用すれば実質2,000円で憧れの上質宿へ滞在できます。
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
              平安貴族が風流を愛した風光明媚の地・京都嵐山。秋の深まりとともに渡月橋の背後にそびえる嵐山全体が鮮やかな錦秋に染まり、世界遺産・天龍寺の曹源池庭園や常寂光寺の紅葉トンネルは見事の一言。保津川の渓谷美を駆け抜ける嵯峨野トロッコ列車やスリル満点の保津川下りを満喫し、渡月橋の袂に湧く嵐山温泉で優美な京懐石と湯豆腐を味わう至高の滞在が叶います。
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.arashiyama_benkei.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.arashiyama_benkei.rating} ({HOTEL_DATA.arashiyama_benkei.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.arashiyama_benkei.img}
                alt={HOTEL_DATA.arashiyama_benkei.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.arashiyama_benkei.special}。秋の彩りに包まれる極上のロケーションで、日頃の喧騒を忘れ心身を解きほぐす至福の滞在が楽しめます。旬の地元食材をふんだんに使った豪華なお料理とともに、贅沢なひとときを過ごせます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.arashiyama_benkei.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.arashiyama_benkei.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.arashiyama_benkei.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.arashiyama_benkei.planUrl || HOTEL_DATA.arashiyama_benkei.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.arashiyama_benkei.reviewUrl || HOTEL_DATA.arashiyama_benkei.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.arashiyama_kadokura.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.arashiyama_kadokura.rating} ({HOTEL_DATA.arashiyama_kadokura.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.arashiyama_kadokura.img}
                alt={HOTEL_DATA.arashiyama_kadokura.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.arashiyama_kadokura.special}。清らかな空気と美しい自然の景観に囲まれ、旅情あふれる温泉と自慢の料理を堪能できます。秋の心地よい夜長を過ごすのにぴったりの癒しの空間です。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.arashiyama_kadokura.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.arashiyama_kadokura.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.arashiyama_kadokura.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.arashiyama_kadokura.planUrl || HOTEL_DATA.arashiyama_kadokura.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.arashiyama_kadokura.reviewUrl || HOTEL_DATA.arashiyama_kadokura.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.arashiyama_suiran.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.arashiyama_suiran.rating} ({HOTEL_DATA.arashiyama_suiran.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.arashiyama_suiran.img}
                alt={HOTEL_DATA.arashiyama_suiran.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.arashiyama_suiran.special}。旅の目的に合わせて快適に過ごせる温かなおもてなしと充実の設備が魅力。観光や散策の拠点として最適で、心地よい秋の滞在を叶えてくれます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.arashiyama_suiran.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.arashiyama_suiran.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.arashiyama_suiran.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.arashiyama_suiran.planUrl || HOTEL_DATA.arashiyama_suiran.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.arashiyama_suiran.reviewUrl || HOTEL_DATA.arashiyama_suiran.url}
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
                <a href={HOTEL_DATA.arashiyama_benkei.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.arashiyama_benkei.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.arashiyama_benkei.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.arashiyama_kadokura.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.arashiyama_kadokura.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.arashiyama_kadokura.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.arashiyama_suiran.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.arashiyama_suiran.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.arashiyama_suiran.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
            </ul>

            <hr className="my-5 border-stone-200" />

            <h4 className="font-bold text-stone-900 text-xs mb-3">🍂 関連する秋の特集</h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link href="/furusato-tax-boso-yorokeikoku-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・千葉・房総養老渓谷＆黒湯温泉
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-tenryukyo-hirugami-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・長野・天竜峡舟下り＆昼神温泉
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-shosenkyo-kofu-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・山梨・甲府昇仙峡＆湯村温泉
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-matsue-tamatsukuri-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・島根・松江城堀川めぐり＆玉造温泉
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-ishizuchi-omogo-dogo-autumn-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・愛媛・石鎚山面河渓＆道後温泉
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
