import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '九重夢大吊橋の360度大紅葉パノラマ＆筋湯温泉名物うたせ湯！豊後牛宿×ふるさと納税完全ガイド【2026年最新秋旅】大分',
  description: '10月下旬〜11月中旬に標高777mの空中から鳴子川渓谷の錦秋を見下ろす「大分・九重夢大吊橋」。日本の滝百選・震動の滝と紅葉の絶景、くじゅう連山の山麓に湧く「筋湯温泉 旅館白滝」「壁湯天然洞窟温泉 福元屋」「たからや旅館」で名物うたせ湯や天然洞窟風呂・おおいた和牛豊後牛を堪能。ふるさと納税で実質2,000円。',
  keywords: [
    "ふるさと納税 温泉",
    "ふるさと納税 宿泊券",
    "ふるさと納税 トラベルクーポン",
    "大分・九重夢大吊橋大紅葉＆筋湯温泉うたせ湯特集",
    "10月 旅行 おすすめ",
    "11月 旅行 おすすめ",
    "秋 旅行 温泉",
    "九重夢大吊橋 紅葉 筋湯温泉 豊後牛 旅館",
    "楽天トラベル ふるさと納税",
    "実質2000円 温泉"
],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kokonoe-yume-suspension-bridge-autumn-stay/'
  },
  openGraph: {
    title: '九重夢大吊橋の360度大紅葉パノラマ＆筋湯温泉名物うたせ湯！豊後牛宿×ふるさと納税完全ガイド【2026年最新秋旅】大分',
    description: '10月下旬〜11月中旬に標高777mの空中から鳴子川渓谷の錦秋を見下ろす「大分・九重夢大吊橋」。日本の滝百選・震動の滝と紅葉の絶景、くじゅう連山の山麓に湧く「筋湯温泉 旅館白滝」「壁湯天然洞窟温泉 福元屋」「たからや旅館」で名物うたせ湯や天然洞窟風呂・おおいた和牛豊後牛を堪能。ふるさと納税で実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kokonoe-yume-suspension-bridge-autumn-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

const HOTEL_DATA = {
  kokonoe_shirataki: {
    name: '筋湯温泉　旅館白滝',
    no: 84937,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D84937',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D84937%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D84937',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/84937/84937.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/84937.jpg',
    minCharge: 8800,
    rating: 4.59,
    reviews: 167,
    special: '■九重スキー場まで車で5分■自然豊かな山あいの湯宿。手作りのお料理、貸切風呂、真心込めたおもてなし。',
    address: '大分県玖珠郡九重町湯坪721',
    access: '豊後中村駅より日田バスで１時間'
  },
  kokonoe_fukumoto: {
    name: '壁湯天然洞窟温泉旅館　福元屋',
    no: 44817,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44817',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D44817%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D44817',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/44817/44817.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/44817.jpg',
    minCharge: 10000,
    rating: 4.43,
    reviews: 92,
    special: '3つの秘湯の湯 美しい山間に佇む老舗旅館「福元屋」名物の壁湯は一見の価値あり！',
    address: '大分県玖珠郡九重町町田62-1',
    access: 'JR久大本線　豊後森駅より車で１５分／大分自動車道　九重ＩＣより車で１５分、玖珠ICより車で１５分'
  },
  kokonoe_takaraya: {
    name: '筋湯温泉　たからや旅館＜大分県＞',
    no: 54634,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D54634',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54634%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D54634',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/54634/54634.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/54634.jpg',
    minCharge: 7700,
    rating: 3.82,
    reviews: 126,
    special: '※フロント等に除菌ポンプ設置済※筋湯温泉郷に佇む全11室の老舗旅館。森林公園スキー場まで車で5分',
    address: '大分県玖珠郡九重町筋湯温泉',
    access: '豊後中村駅より九重登山口行きバスにて約50分/九州自動車道九重ICより約30分'
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
        <span className="text-stone-800 font-medium">大分・九重 / 九重夢大吊橋紅葉パノラマ＆筋湯温泉うたせ湯・豊後牛</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-orange-950 via-amber-950 to-stone-900 text-white py-14 md:py-20 px-4 mb-10 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-5 text-amber-200">
            <span>🍁 10月・11月限定 秋旅特集</span>
            <span>•</span>
            <span>楽天ふるさと納税トラベルクーポン対応</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            九重夢大吊橋の360度大紅葉パノラマ＆筋湯温泉名物うたせ湯！豊後牛宿×ふるさと納税完全ガイド【2026年最新秋旅】大分
          </h1>
          <p className="text-sm md:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed">
            日本一の高さを誇る夢大吊橋から望む大峡谷の錦秋と、千年の歴史を誇る筋湯うたせ湯。ふるさと納税の宿泊クーポンを活用すれば実質2,000円で憧れの上質宿へ滞在できます。
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
              大分県くじゅう連山の山麓に位置する九重町は、雄大な大自然と豊富な温泉に恵まれた高原リゾート。長さ390m、高さ173mを誇る歩道専用吊橋「九重“夢”大吊橋」からは、鳴子川渓谷が一面赤や黄色に染まる息をのむ大パノラマが広がります。千年の歴史を持つ筋湯温泉の日本一の「うたせ湯」や神秘的な「壁湯洞窟温泉」で湯浴みし、豊後牛や地鶏料理を贅沢に味わえます。
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.kokonoe_shirataki.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.kokonoe_shirataki.rating} ({HOTEL_DATA.kokonoe_shirataki.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.kokonoe_shirataki.img}
                alt={HOTEL_DATA.kokonoe_shirataki.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.kokonoe_shirataki.special}。秋の彩りに包まれる極上のロケーションで、日頃の喧騒を忘れ心身を解きほぐす至福の滞在が楽しめます。旬の地元食材をふんだんに使った豪華なお料理とともに、贅沢なひとときを過ごせます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.kokonoe_shirataki.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.kokonoe_shirataki.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.kokonoe_shirataki.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.kokonoe_shirataki.planUrl || HOTEL_DATA.kokonoe_shirataki.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.kokonoe_shirataki.reviewUrl || HOTEL_DATA.kokonoe_shirataki.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.kokonoe_fukumoto.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.kokonoe_fukumoto.rating} ({HOTEL_DATA.kokonoe_fukumoto.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.kokonoe_fukumoto.img}
                alt={HOTEL_DATA.kokonoe_fukumoto.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.kokonoe_fukumoto.special}。清らかな空気と美しい自然の景観に囲まれ、旅情あふれる温泉と自慢の料理を堪能できます。秋の心地よい夜長を過ごすのにぴったりの癒しの空間です。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.kokonoe_fukumoto.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.kokonoe_fukumoto.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.kokonoe_fukumoto.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.kokonoe_fukumoto.planUrl || HOTEL_DATA.kokonoe_fukumoto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.kokonoe_fukumoto.reviewUrl || HOTEL_DATA.kokonoe_fukumoto.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.kokonoe_takaraya.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.kokonoe_takaraya.rating} ({HOTEL_DATA.kokonoe_takaraya.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.kokonoe_takaraya.img}
                alt={HOTEL_DATA.kokonoe_takaraya.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.kokonoe_takaraya.special}。旅の目的に合わせて快適に過ごせる温かなおもてなしと充実の設備が魅力。観光や散策の拠点として最適で、心地よい秋の滞在を叶えてくれます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.kokonoe_takaraya.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.kokonoe_takaraya.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.kokonoe_takaraya.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.kokonoe_takaraya.planUrl || HOTEL_DATA.kokonoe_takaraya.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.kokonoe_takaraya.reviewUrl || HOTEL_DATA.kokonoe_takaraya.url}
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
                <a href={HOTEL_DATA.kokonoe_shirataki.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.kokonoe_shirataki.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.kokonoe_shirataki.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.kokonoe_fukumoto.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.kokonoe_fukumoto.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.kokonoe_fukumoto.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.kokonoe_takaraya.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.kokonoe_takaraya.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.kokonoe_takaraya.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
            </ul>

            <hr className="my-5 border-stone-200" />

            <h4 className="font-bold text-stone-900 text-xs mb-3">🍂 関連する秋の特集</h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link href="/furusato-tax-dakigaeri-kakunodate-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・秋田・抱返り渓谷＆角館武家屋敷
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-urabandai-goshikinuma-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・福島・裏磐梯五色沼＆高原リゾート
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-yoro-falls-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・岐阜・養老の滝紅葉＆飛騨牛会席
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-miyajima-momijidani-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・広島・宮島紅葉谷公園＆嚴島神社
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-kirishima-shrine-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・鹿児島・霧島神宮紅葉＆霧島温泉郷
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
