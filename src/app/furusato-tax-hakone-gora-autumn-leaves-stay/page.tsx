import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '箱根強羅温泉の登山鉄道紅葉トンネル＆箱根美術館苔庭！白濁にごり湯宿×ふるさと納税完全ガイド【2026年最新秋旅】神奈川',
  description: '11月上旬〜下旬に箱根山が錦秋に染まる首都圏屈指の温泉リゾート「箱根強羅温泉」。箱根登山鉄道の紅葉トンネルや箱根美術館の深紅の苔庭散策と、大涌谷源泉の濃厚なにごり湯露天風呂を誇る「のうのう箱根」「瑞の香り」「箱根強羅 白檀」で特選相模牛や小田原鮮魚会席を堪能。ふるさと納税で実質2,000円。',
  keywords: [
    "ふるさと納税 温泉",
    "ふるさと納税 宿泊券",
    "ふるさと納税 トラベルクーポン",
    "神奈川・箱根強羅温泉＆登山鉄道紅葉特集",
    "10月 旅行 おすすめ",
    "11月 旅行 おすすめ",
    "秋 旅行 温泉",
    "箱根 強羅温泉 紅葉 にごり湯 旅館",
    "楽天トラベル ふるさと納税",
    "実質2000円 温泉"
],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-hakone-gora-autumn-leaves-stay/'
  },
  openGraph: {
    title: '箱根強羅温泉の登山鉄道紅葉トンネル＆箱根美術館苔庭！白濁にごり湯宿×ふるさと納税完全ガイド【2026年最新秋旅】神奈川',
    description: '11月上旬〜下旬に箱根山が錦秋に染まる首都圏屈指の温泉リゾート「箱根強羅温泉」。箱根登山鉄道の紅葉トンネルや箱根美術館の深紅の苔庭散策と、大涌谷源泉の濃厚なにごり湯露天風呂を誇る「のうのう箱根」「瑞の香り」「箱根強羅 白檀」で特選相模牛や小田原鮮魚会席を堪能。ふるさと納税で実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-hakone-gora-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

const HOTEL_DATA = {
  hakone_gora_nounou: {
    name: '強羅温泉　強羅にごりの湯宿　のうのう箱根',
    no: 138119,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D138119',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D138119%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D138119',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/138119/138119.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/138119.jpg',
    minCharge: 12100,
    rating: 4.29,
    reviews: 2418,
    special: '楽天シルバーアワード＆日本の宿2024受賞★お食事好評価♪全10室の強羅のにごり湯宿を満喫！',
    address: '神奈川県足柄下郡箱根町強羅1320-1080',
    access: '【無料送迎あり（15時～18時）】 早雲山駅より徒歩8分、強羅駅より車で5分'
  },
  hakone_gora_mizunokaori: {
    name: '箱根強羅温泉　瑞の香り',
    no: 158515,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D158515',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D158515%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D158515',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/158515/158515.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/158515.jpg',
    minCharge: 13650,
    rating: 4.21,
    reviews: 179,
    special: '箱根の蒼い空、緑の山々に囲まれた静かな温泉宿。イタリア由来の温泉泥セラピーで現代版湯治を楽しめます。',
    address: '神奈川県足柄下郡箱根町強羅1321-395',
    access: '箱根登山鉄道　早雲山駅から徒歩約１２分'
  },
  hakone_gora_byakudan: {
    name: '箱根強羅　白檀',
    no: 153496,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D153496',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D153496%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D153496',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/153496/153496.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/153496.jpg',
    minCharge: 45100,
    rating: 4.58,
    reviews: 144,
    special: '全室設置の源泉掛け流し露天と旬を彩る至極の懐石料理　雄大な箱根連山を眺めながら最上のひとときをどうぞ',
    address: '神奈川県足柄下郡箱根町二ノ平1297-5',
    access: '箱根登山鉄道　小涌谷駅よりご送迎承ります（車で約5分：事前にご連絡ください）　箱根バス「緑の村入り口」下車 徒歩2分'
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
        <span className="text-stone-800 font-medium">神奈川・箱根 / 強羅温泉にごり湯＆箱根登山鉄道紅葉・美術館庭園</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-amber-950 via-stone-900 to-red-950 text-white py-14 md:py-20 px-4 mb-10 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-5 text-amber-200">
            <span>🍁 10月・11月限定 秋旅特集</span>
            <span>•</span>
            <span>楽天ふるさと納税トラベルクーポン対応</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            箱根強羅温泉の登山鉄道紅葉トンネル＆箱根美術館苔庭！白濁にごり湯宿×ふるさと納税完全ガイド【2026年最新秋旅】神奈川
          </h1>
          <p className="text-sm md:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed">
            登山鉄道の紅葉回廊と箱根美術館の苔庭紅葉、大涌谷から引湯する乳白色のにごり湯。ふるさと納税の宿泊クーポンを活用すれば実質2,000円で憧れの上質宿へ滞在できます。
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
              神奈川県・箱根山の中腹に位置する強羅温泉は、明治時代から政財界人や文人に愛されてきた高級温泉保養地。秋には箱根登山鉄道やケーブルカー沿線が鮮やかな紅葉のトンネルとなり、日本庭園と約130種類の苔が広がる「箱根美術館」の紅葉は圧巻の美しさ。大涌谷から引き湯した白濁の硫黄泉や自家源泉の露天風呂に浸かり、小田原漁港直送の地魚や相模牛の懐石料理を堪能できます。
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.hakone_gora_nounou.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.hakone_gora_nounou.rating} ({HOTEL_DATA.hakone_gora_nounou.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.hakone_gora_nounou.img}
                alt={HOTEL_DATA.hakone_gora_nounou.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.hakone_gora_nounou.special}。秋の彩りに包まれる極上のロケーションで、日頃の喧騒を忘れ心身を解きほぐす至福の滞在が楽しめます。旬の地元食材をふんだんに使った豪華なお料理とともに、贅沢なひとときを過ごせます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.hakone_gora_nounou.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.hakone_gora_nounou.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.hakone_gora_nounou.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.hakone_gora_nounou.planUrl || HOTEL_DATA.hakone_gora_nounou.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.hakone_gora_nounou.reviewUrl || HOTEL_DATA.hakone_gora_nounou.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.hakone_gora_mizunokaori.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.hakone_gora_mizunokaori.rating} ({HOTEL_DATA.hakone_gora_mizunokaori.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.hakone_gora_mizunokaori.img}
                alt={HOTEL_DATA.hakone_gora_mizunokaori.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.hakone_gora_mizunokaori.special}。清らかな空気と美しい自然の景観に囲まれ、旅情あふれる温泉と自慢の料理を堪能できます。秋の心地よい夜長を過ごすのにぴったりの癒しの空間です。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.hakone_gora_mizunokaori.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.hakone_gora_mizunokaori.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.hakone_gora_mizunokaori.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.hakone_gora_mizunokaori.planUrl || HOTEL_DATA.hakone_gora_mizunokaori.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.hakone_gora_mizunokaori.reviewUrl || HOTEL_DATA.hakone_gora_mizunokaori.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.hakone_gora_byakudan.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.hakone_gora_byakudan.rating} ({HOTEL_DATA.hakone_gora_byakudan.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.hakone_gora_byakudan.img}
                alt={HOTEL_DATA.hakone_gora_byakudan.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.hakone_gora_byakudan.special}。旅の目的に合わせて快適に過ごせる温かなおもてなしと充実の設備が魅力。観光や散策の拠点として最適で、心地よい秋の滞在を叶えてくれます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.hakone_gora_byakudan.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.hakone_gora_byakudan.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.hakone_gora_byakudan.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.hakone_gora_byakudan.planUrl || HOTEL_DATA.hakone_gora_byakudan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.hakone_gora_byakudan.reviewUrl || HOTEL_DATA.hakone_gora_byakudan.url}
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
                <a href={HOTEL_DATA.hakone_gora_nounou.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.hakone_gora_nounou.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.hakone_gora_nounou.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.hakone_gora_mizunokaori.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.hakone_gora_mizunokaori.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.hakone_gora_mizunokaori.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.hakone_gora_byakudan.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.hakone_gora_byakudan.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.hakone_gora_byakudan.rating} | 楽天トラベルで詳細確認</div>
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
