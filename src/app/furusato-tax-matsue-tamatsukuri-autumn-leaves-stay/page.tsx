import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '松江城堀川めぐり紅葉こたつ舟＆出雲神話の玉造温泉！松葉ガニ・しまね和牛宿×ふるさと納税完全ガイド【2026年最新秋旅】島根',
  description: '10月中旬〜11月下旬に国宝松江城の濠を彩る紅葉のトンネル「松江城 堀川めぐり」。11月からは情緒あふれる「こたつ舟」が運航し、日本最古の美肌温泉「玉造温泉 湯陣 千代の湯」「ホテル玉泉」「RYOKAN OQOQ」で化粧水のような極上神の湯と11月解禁の日本海松葉ガニ・しまね和牛会席を堪能。ふるさと納税で実質2,000円。',
  keywords: [
    "ふるさと納税 温泉",
    "ふるさと納税 宿泊券",
    "ふるさと納税 トラベルクーポン",
    "島根・松江堀川めぐり＆玉造温泉紅葉特集",
    "10月 旅行 おすすめ",
    "11月 旅行 おすすめ",
    "秋 旅行 温泉",
    "松江城 堀川めぐり 玉造温泉 美肌の湯 松葉ガニ 旅館",
    "楽天トラベル ふるさと納税",
    "実質2000円 温泉"
],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-matsue-tamatsukuri-autumn-leaves-stay/'
  },
  openGraph: {
    title: '松江城堀川めぐり紅葉こたつ舟＆出雲神話の玉造温泉！松葉ガニ・しまね和牛宿×ふるさと納税完全ガイド【2026年最新秋旅】島根',
    description: '10月中旬〜11月下旬に国宝松江城の濠を彩る紅葉のトンネル「松江城 堀川めぐり」。11月からは情緒あふれる「こたつ舟」が運航し、日本最古の美肌温泉「玉造温泉 湯陣 千代の湯」「ホテル玉泉」「RYOKAN OQOQ」で化粧水のような極上神の湯と11月解禁の日本海松葉ガニ・しまね和牛会席を堪能。ふるさと納税で実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-matsue-tamatsukuri-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

const HOTEL_DATA = {
  tamatsukuri_kasuien: {
    name: '玉造温泉　源泉かけ流しの宿　湯陣　千代の湯',
    no: 147931,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147931',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D147931%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D147931',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/147931/147931.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/147931.jpg',
    minCharge: 14300,
    rating: 4.13,
    reviews: 856,
    special: '最大3,000円クーポン配布中！レトロな雰囲気、源泉かけ流しの貸切風呂と大浴場・露天風呂が好評♪',
    address: '島根県松江市玉湯町玉造1215-2',
    access: 'お車：山陰道松江玉造ICより約１０分 ／ 鉄道：ＪＲ山陰本線玉造温泉駅よりタクシーにて約５分'
  },
  tamatsukuri_chorakuen: {
    name: '玉造温泉　～曲水の庭～　ホテル玉泉',
    no: 106267,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D106267',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D106267%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D106267',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/106267/106267.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/106267.jpg',
    minCharge: 8240,
    rating: 4.31,
    reviews: 1971,
    special: '2025年、76室を「畳にベッド」の上質な客室へと改修し、大浴場に「整いスペース」を新設しました！',
    address: '島根県松江市玉湯町玉造53-2',
    access: '出雲大社から車で約40分■最寄バス停(温泉下)より徒歩3分■JR玉造温泉駅より送迎有（3日前迄に要連絡）'
  },
  tamatsukuri_matsunoyu: {
    name: '玉造温泉　ＲＹＯＫＡＮ　ＯＱＯＱ　（旧：玉井別館）',
    no: 32082,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D32082',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D32082%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D32082',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/32082/32082.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/32082.jpg',
    minCharge: 7150,
    rating: 4.28,
    reviews: 1489,
    special: '＜2025年9月館内一部リニューアル＞オールインクルーシブとキッズスペースで大人もお子様も大歓迎！',
    address: '島根県松江市玉湯町玉造1247',
    access: '山陰自動車道：松江玉造ICより車で10分／ＪＲ山陰本線：玉造温泉駅よりタクシーで5分／出雲大社から国道９号線、車で45分'
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
        <span className="text-stone-800 font-medium">島根・松江出雲 / 松江城堀川めぐり紅葉舟＆玉造温泉神の湯・松葉ガニ</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-blue-950 via-stone-900 to-amber-950 text-white py-14 md:py-20 px-4 mb-10 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-5 text-amber-200">
            <span>🍁 10月・11月限定 秋旅特集</span>
            <span>•</span>
            <span>楽天ふるさと納税トラベルクーポン対応</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            松江城堀川めぐり紅葉こたつ舟＆出雲神話の玉造温泉！松葉ガニ・しまね和牛宿×ふるさと納税完全ガイド【2026年最新秋旅】島根
          </h1>
          <p className="text-sm md:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed">
            国宝松江城を囲む堀川こたつ舟の紅葉めぐりと、出雲風土記に記された美肌の神湯・玉造温泉。ふるさと納税の宿泊クーポンを活用すれば実質2,000円で憧れの上質宿へ滞在できます。
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
              山陰の水の都・島根県松江市。国宝松江城を囲む堀川を小舟でめぐる「ぐるっと松江堀川めぐり」は、秋になると濠沿いの樹々が色づき、11月からは温かい「こたつ舟」が冬の風物詩として大人気。車で約15分の玉造温泉は『出雲国風土記』に「一度洗えば容姿端麗、再び入れば万病治癒」と記された奇跡の美肌温泉。11月上旬解禁の松葉ガニや宍道湖七珍・しまね和牛の美食を堪能できます。
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.tamatsukuri_kasuien.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.tamatsukuri_kasuien.rating} ({HOTEL_DATA.tamatsukuri_kasuien.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.tamatsukuri_kasuien.img}
                alt={HOTEL_DATA.tamatsukuri_kasuien.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.tamatsukuri_kasuien.special}。秋の彩りに包まれる極上のロケーションで、日頃の喧騒を忘れ心身を解きほぐす至福の滞在が楽しめます。旬の地元食材をふんだんに使った豪華なお料理とともに、贅沢なひとときを過ごせます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.tamatsukuri_kasuien.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.tamatsukuri_kasuien.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.tamatsukuri_kasuien.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.tamatsukuri_kasuien.planUrl || HOTEL_DATA.tamatsukuri_kasuien.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.tamatsukuri_kasuien.reviewUrl || HOTEL_DATA.tamatsukuri_kasuien.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.tamatsukuri_chorakuen.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.tamatsukuri_chorakuen.rating} ({HOTEL_DATA.tamatsukuri_chorakuen.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.tamatsukuri_chorakuen.img}
                alt={HOTEL_DATA.tamatsukuri_chorakuen.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.tamatsukuri_chorakuen.special}。清らかな空気と美しい自然の景観に囲まれ、旅情あふれる温泉と自慢の料理を堪能できます。秋の心地よい夜長を過ごすのにぴったりの癒しの空間です。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.tamatsukuri_chorakuen.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.tamatsukuri_chorakuen.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.tamatsukuri_chorakuen.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.tamatsukuri_chorakuen.planUrl || HOTEL_DATA.tamatsukuri_chorakuen.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.tamatsukuri_chorakuen.reviewUrl || HOTEL_DATA.tamatsukuri_chorakuen.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.tamatsukuri_matsunoyu.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.tamatsukuri_matsunoyu.rating} ({HOTEL_DATA.tamatsukuri_matsunoyu.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.tamatsukuri_matsunoyu.img}
                alt={HOTEL_DATA.tamatsukuri_matsunoyu.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.tamatsukuri_matsunoyu.special}。旅の目的に合わせて快適に過ごせる温かなおもてなしと充実の設備が魅力。観光や散策の拠点として最適で、心地よい秋の滞在を叶えてくれます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.tamatsukuri_matsunoyu.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.tamatsukuri_matsunoyu.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.tamatsukuri_matsunoyu.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.tamatsukuri_matsunoyu.planUrl || HOTEL_DATA.tamatsukuri_matsunoyu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.tamatsukuri_matsunoyu.reviewUrl || HOTEL_DATA.tamatsukuri_matsunoyu.url}
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
                <a href={HOTEL_DATA.tamatsukuri_kasuien.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.tamatsukuri_kasuien.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.tamatsukuri_kasuien.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.tamatsukuri_chorakuen.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.tamatsukuri_chorakuen.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.tamatsukuri_chorakuen.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.tamatsukuri_matsunoyu.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.tamatsukuri_matsunoyu.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.tamatsukuri_matsunoyu.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
            </ul>

            <hr className="my-5 border-stone-200" />

            <h4 className="font-bold text-stone-900 text-xs mb-3">🍂 関連する秋の特集</h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link href="/furusato-tax-kinugawa-ryuokyo-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・栃木・鬼怒川温泉＆龍王峡紅葉
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-yamadera-tendo-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・山形・山寺立石寺＆天童温泉
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-sumatakyo-yumenotsuribashi-autumn-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・静岡・寸又峡夢の吊橋＆美女づくりの湯
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-koyasan-autumn-leaves-shukubo-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・和歌山・高野山壇上伽藍＆宿坊精進料理
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-takeo-mifuneyama-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・佐賀・御船山楽園＆武雄温泉
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
