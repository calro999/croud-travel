import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '阿蘇・大観峰の黄金ススキ大草原＆秋の雲海パノラマ！阿蘇内牧温泉・あか牛会席宿×ふるさと納税完全ガイド【2026年最新秋旅】熊本',
  description: '10月〜11月にカルデラ外輪山一面が黄金色に輝く「熊本・阿蘇大観峰＆ミルクロード」。早朝の幻想的な阿蘇カルデラ雲海と草千里ヶ浜の秋景色、文豪たちに愛された「阿蘇内牧温泉 大観荘」「蘇山郷」「親和苑」で自家源泉掛け流し露天風呂と阿蘇名物・肥後あか牛丼・すき焼きステーキを堪能。ふるさと納税で実質2,000円。',
  keywords: [
    "ふるさと納税 温泉",
    "ふるさと納税 宿泊券",
    "ふるさと納税 トラベルクーポン",
    "熊本・阿蘇大観峰ススキ＆内牧温泉あか牛特集",
    "10月 旅行 おすすめ",
    "11月 旅行 おすすめ",
    "秋 旅行 温泉",
    "阿蘇 大観峰 ススキ 雲海 内牧温泉 あか牛 旅館",
    "楽天トラベル ふるさと納税",
    "実質2000円 温泉"
],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-aso-daikanbo-susuki-autumn-stay/'
  },
  openGraph: {
    title: '阿蘇・大観峰の黄金ススキ大草原＆秋の雲海パノラマ！阿蘇内牧温泉・あか牛会席宿×ふるさと納税完全ガイド【2026年最新秋旅】熊本',
    description: '10月〜11月にカルデラ外輪山一面が黄金色に輝く「熊本・阿蘇大観峰＆ミルクロード」。早朝の幻想的な阿蘇カルデラ雲海と草千里ヶ浜の秋景色、文豪たちに愛された「阿蘇内牧温泉 大観荘」「蘇山郷」「親和苑」で自家源泉掛け流し露天風呂と阿蘇名物・肥後あか牛丼・すき焼きステーキを堪能。ふるさと納税で実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-aso-daikanbo-susuki-autumn-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

const HOTEL_DATA = {
  aso_uchinomaki_yumeoi: {
    name: '阿蘇内牧温泉　大観荘',
    no: 51700,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D51700',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D51700%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D51700',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/51700/51700.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/51700.jpg',
    minCharge: 7300,
    rating: 3.58,
    reviews: 50,
    special: '全室より阿蘇山が一望できます。阿蘇内牧温泉で一番歴史が古いと言われております。',
    address: '熊本県阿蘇市内牧246',
    access: 'ＪＲ豊肥線「阿蘇駅」→バスで15分「阿蘇市商工会前バス停」→徒歩１分'
  },
  aso_uchinomaki_sansui: {
    name: '蘇る山と故郷　阿蘇内牧温泉　蘇山郷',
    no: 31687,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D31687',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31687%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D31687',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/31687/31687.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/31687.jpg',
    minCharge: 13200,
    rating: 4.54,
    reviews: 641,
    special: '源泉かけ流し温泉24時間入浴可『大浴場』『貸切風呂』『露天付客室』あり。阿蘇のあか牛と郷土会席が自慢',
    address: '熊本県阿蘇市内牧145-1',
    access: '【車】熊本IC⇒R57⇒北側復旧ルート経由⇒内牧温泉　【公共機関】JR阿蘇駅⇒内牧温泉行きバス⇒商工会前バス停⇒徒歩2分'
  },
  aso_uchinomaki_hoshino: {
    name: '阿蘇内牧温泉　御料理旅館　親和苑',
    no: 38542,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38542',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38542%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D38542',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/38542/38542.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/38542.jpg',
    minCharge: 14100,
    rating: 4.54,
    reviews: 195,
    special: '料理長が贈る美味しい芸術！【源泉掛け流し】露天風呂（男女別）／貸切家族風呂／離れ露天風呂付客室あり',
    address: '熊本県阿蘇市内牧1354',
    access: '肥後豊肥線　阿蘇駅より車で１５分程／肥後豊肥線　内牧駅より車で１５分程'
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
        <span className="text-stone-800 font-medium">熊本・阿蘇大観峰 / 大観峰黄金ススキ草原＆阿蘇雲海・内牧温泉あか牛美食</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-amber-950 via-orange-950 to-stone-900 text-white py-14 md:py-20 px-4 mb-10 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-5 text-amber-200">
            <span>🍁 10月・11月限定 秋旅特集</span>
            <span>•</span>
            <span>楽天ふるさと納税トラベルクーポン対応</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            阿蘇・大観峰の黄金ススキ大草原＆秋の雲海パノラマ！阿蘇内牧温泉・あか牛会席宿×ふるさと納税完全ガイド【2026年最新秋旅】熊本
          </h1>
          <p className="text-sm md:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed">
            秋風に波打つ大観峰の黄金ススキと阿蘇雲海、内牧温泉の恵みと極上あか牛ステーキ。ふるさと納税の宿泊クーポンを活用すれば実質2,000円で憧れの上質宿へ滞在できます。
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
              世界最大級のカルデラを誇る熊本県・阿蘇。秋には外輪山最高峰の「大観峰」やミルクロード沿い一面にススキの大草原が広がり、夕陽に照らされて黄金色に輝く景観は圧巻。寒暖差の大きい秋の早朝にはカルデラを埋め尽くす神秘的な雲海が出現します。夏目漱石や与謝野鉄幹・晶子夫妻も訪れた内牧温泉で豊富な源泉に浸かり、赤身肉の旨味が凝縮した「あか牛」の極上会席を満喫できます。
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.aso_uchinomaki_yumeoi.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.aso_uchinomaki_yumeoi.rating} ({HOTEL_DATA.aso_uchinomaki_yumeoi.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.aso_uchinomaki_yumeoi.img}
                alt={HOTEL_DATA.aso_uchinomaki_yumeoi.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.aso_uchinomaki_yumeoi.special}。秋の彩りに包まれる極上のロケーションで、日頃の喧騒を忘れ心身を解きほぐす至福の滞在が楽しめます。旬の地元食材をふんだんに使った豪華なお料理とともに、贅沢なひとときを過ごせます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.aso_uchinomaki_yumeoi.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.aso_uchinomaki_yumeoi.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.aso_uchinomaki_yumeoi.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.aso_uchinomaki_yumeoi.planUrl || HOTEL_DATA.aso_uchinomaki_yumeoi.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.aso_uchinomaki_yumeoi.reviewUrl || HOTEL_DATA.aso_uchinomaki_yumeoi.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.aso_uchinomaki_sansui.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.aso_uchinomaki_sansui.rating} ({HOTEL_DATA.aso_uchinomaki_sansui.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.aso_uchinomaki_sansui.img}
                alt={HOTEL_DATA.aso_uchinomaki_sansui.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.aso_uchinomaki_sansui.special}。清らかな空気と美しい自然の景観に囲まれ、旅情あふれる温泉と自慢の料理を堪能できます。秋の心地よい夜長を過ごすのにぴったりの癒しの空間です。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.aso_uchinomaki_sansui.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.aso_uchinomaki_sansui.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.aso_uchinomaki_sansui.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.aso_uchinomaki_sansui.planUrl || HOTEL_DATA.aso_uchinomaki_sansui.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.aso_uchinomaki_sansui.reviewUrl || HOTEL_DATA.aso_uchinomaki_sansui.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.aso_uchinomaki_hoshino.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.aso_uchinomaki_hoshino.rating} ({HOTEL_DATA.aso_uchinomaki_hoshino.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.aso_uchinomaki_hoshino.img}
                alt={HOTEL_DATA.aso_uchinomaki_hoshino.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.aso_uchinomaki_hoshino.special}。旅の目的に合わせて快適に過ごせる温かなおもてなしと充実の設備が魅力。観光や散策の拠点として最適で、心地よい秋の滞在を叶えてくれます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.aso_uchinomaki_hoshino.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.aso_uchinomaki_hoshino.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.aso_uchinomaki_hoshino.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.aso_uchinomaki_hoshino.planUrl || HOTEL_DATA.aso_uchinomaki_hoshino.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.aso_uchinomaki_hoshino.reviewUrl || HOTEL_DATA.aso_uchinomaki_hoshino.url}
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
                <a href={HOTEL_DATA.aso_uchinomaki_yumeoi.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.aso_uchinomaki_yumeoi.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.aso_uchinomaki_yumeoi.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.aso_uchinomaki_sansui.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.aso_uchinomaki_sansui.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.aso_uchinomaki_sansui.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.aso_uchinomaki_hoshino.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.aso_uchinomaki_hoshino.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.aso_uchinomaki_hoshino.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
            </ul>

            <hr className="my-5 border-stone-200" />

            <h4 className="font-bold text-stone-900 text-xs mb-3">🍂 関連する秋の特集</h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link href="/furusato-tax-jozankei-hoheikyo-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・北海道・定山渓温泉＆豊平峡ダム
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-hiraizumi-chusonji-genbikei-autumn-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・岩手・平泉中尊寺＆花巻温泉郷
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-karuizawa-kumobaike-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・長野・軽井沢雲場池＆星野エリア
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-daisen-kagikake-kaike-autumn-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・鳥取・大山鍵掛峠＆皆生温泉松葉ガニ
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-takachiho-manainotaki-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・宮崎・高千穂峡真名井の滝＆高千穂牛
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
