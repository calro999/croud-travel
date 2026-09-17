import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '裏磐梯五色沼の神秘の湖沼群紅葉＆磐梯山ゴールドライン！高原リゾート温泉×ふるさと納税完全ガイド【2026年最新秋旅】福島',
  description: '10月中旬〜11月上旬にエメラルドグリーンやコバルトブルーの水面に紅葉が映える「裏磐梯五色沼湖沼群」。磐梯山ゴールドラインの絶景ドライブと、国立公園内に佇む「裏磐梯レイクリゾート 迎賓館 猫魔離宮」「五色の森」「裏磐梯高原ホテル」で福島牛や会津地鶏・喜多方ラーメンを堪能。ふるさと納税トラベルクーポンで実質2,000円。',
  keywords: [
    "ふるさと納税 温泉",
    "ふるさと納税 宿泊券",
    "ふるさと納税 トラベルクーポン",
    "福島・裏磐梯五色沼＆磐梯山紅葉リゾート特集",
    "10月 旅行 おすすめ",
    "11月 旅行 おすすめ",
    "秋 旅行 温泉",
    "五色沼 紅葉 磐梯山 温泉ホテル",
    "楽天トラベル ふるさと納税",
    "実質2000円 温泉"
],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-urabandai-goshikinuma-autumn-leaves-stay/'
  },
  openGraph: {
    title: '裏磐梯五色沼の神秘の湖沼群紅葉＆磐梯山ゴールドライン！高原リゾート温泉×ふるさと納税完全ガイド【2026年最新秋旅】福島',
    description: '10月中旬〜11月上旬にエメラルドグリーンやコバルトブルーの水面に紅葉が映える「裏磐梯五色沼湖沼群」。磐梯山ゴールドラインの絶景ドライブと、国立公園内に佇む「裏磐梯レイクリゾート 迎賓館 猫魔離宮」「五色の森」「裏磐梯高原ホテル」で福島牛や会津地鶏・喜多方ラーメンを堪能。ふるさと納税トラベルクーポンで実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-urabandai-goshikinuma-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

const HOTEL_DATA = {
  urabandai_kogen_hotel: {
    name: '裏磐梯レイクリゾート　迎賓館　猫魔離宮（旧：裏磐梯猫魔ホテル）',
    no: 151377,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D151377',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D151377%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D151377',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/151377/151377.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/151377.jpg',
    minCharge: 10300,
    rating: 4.54,
    reviews: 835,
    special: '気取らない贅沢、心やわらぐ宮殿リゾートで非日常体験を。宿泊者専用温泉を完備。',
    address: '福島県耶麻郡北塩原村大字桧原字湯平山1171-1　',
    access: 'ＪＲ猪苗代駅より車で約30分（無料送迎バス有）。猪苗代磐梯高原ICより車で約25分。'
  },
  urabandai_lake_resort: {
    name: '裏磐梯レイクリゾート　本館　五色の森（旧：裏磐梯猫魔ホテル）',
    no: 149014,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149014',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D149014%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D149014',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/149014/149014.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/149014.jpg',
    minCharge: 10800,
    rating: 4.25,
    reviews: 2216,
    special: '五色沼まで徒歩3分。エリア唯一の自噴式源泉かけ流しとライブキッチン＆会津野菜の50種バイキングを満喫',
    address: '福島県耶麻郡北塩原村大字桧原字湯平山1171-1　',
    access: 'ＪＲ猪苗代駅より車で約30分（無料送迎バス有）。猪苗代磐梯高原ICより車で約25分。'
  },
  urabandai_active_resort: {
    name: '裏磐梯高原ホテル',
    no: 16368,
    url: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16368',
    planUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16368%26f_flg%3DPLAN',
    reviewUrl: 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FHTX0u%2F%3Ff_hotel_no%3D16368',
    img: 'https://img.travel.rakuten.co.jp/share/HOTEL/16368/16368.jpg',
    thumb: 'https://img.travel.rakuten.co.jp/HIMG/90/16368.jpg',
    minCharge: 30000,
    rating: 4.92,
    reviews: 199,
    special: '標高800ｍの裏磐梯高原。豊かな大自然に囲まれた、四季の移ろい感じる湖畔のリゾートホテルへようこそ！',
    address: '福島県耶麻郡北塩原村大字桧原字湯平山1171',
    access: 'ＪＲ猪苗代駅下車／磐越自動車道　猪苗代磐梯高原ＩＣより約25分'
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
        <span className="text-stone-800 font-medium">福島・裏磐梯 / 五色沼紅葉トレッキング＆磐梯山ドライブ・高原リゾート</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-emerald-950 via-teal-900 to-stone-900 text-white py-14 md:py-20 px-4 mb-10 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-5 text-amber-200">
            <span>🍁 10月・11月限定 秋旅特集</span>
            <span>•</span>
            <span>楽天ふるさと納税トラベルクーポン対応</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            裏磐梯五色沼の神秘の湖沼群紅葉＆磐梯山ゴールドライン！高原リゾート温泉×ふるさと納税完全ガイド【2026年最新秋旅】福島
          </h1>
          <p className="text-sm md:text-lg text-stone-200 max-w-3xl mx-auto leading-relaxed">
            エメラルドグリーンの五色沼に映える錦秋の磐梯山と、上質な高原リゾート温泉ステイ。ふるさと納税の宿泊クーポンを活用すれば実質2,000円で憧れの上質宿へ滞在できます。
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
              福島県・磐梯朝日国立公園に位置する裏磐梯は、明治の磐梯山噴火によって生まれた美しい湖沼群が点在する大自然の宝庫。秋には五色沼（毘沙門沼・弁天沼など）がエメラルドグリーンや青く輝き、周囲のモミジやカラマツが鮮やかに映り込みます。磐梯山ゴールドラインやレークラインの爽快な紅葉ドライブを楽しみ、茶褐色の自噴天然温泉と福島牛の美味を堪能できます。
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.urabandai_kogen_hotel.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.urabandai_kogen_hotel.rating} ({HOTEL_DATA.urabandai_kogen_hotel.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.urabandai_kogen_hotel.img}
                alt={HOTEL_DATA.urabandai_kogen_hotel.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.urabandai_kogen_hotel.special}。秋の彩りに包まれる極上のロケーションで、日頃の喧騒を忘れ心身を解きほぐす至福の滞在が楽しめます。旬の地元食材をふんだんに使った豪華なお料理とともに、贅沢なひとときを過ごせます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.urabandai_kogen_hotel.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.urabandai_kogen_hotel.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.urabandai_kogen_hotel.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.urabandai_kogen_hotel.planUrl || HOTEL_DATA.urabandai_kogen_hotel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.urabandai_kogen_hotel.reviewUrl || HOTEL_DATA.urabandai_kogen_hotel.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.urabandai_lake_resort.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.urabandai_lake_resort.rating} ({HOTEL_DATA.urabandai_lake_resort.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.urabandai_lake_resort.img}
                alt={HOTEL_DATA.urabandai_lake_resort.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.urabandai_lake_resort.special}。清らかな空気と美しい自然の景観に囲まれ、旅情あふれる温泉と自慢の料理を堪能できます。秋の心地よい夜長を過ごすのにぴったりの癒しの空間です。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.urabandai_lake_resort.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.urabandai_lake_resort.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.urabandai_lake_resort.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.urabandai_lake_resort.planUrl || HOTEL_DATA.urabandai_lake_resort.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.urabandai_lake_resort.reviewUrl || HOTEL_DATA.urabandai_lake_resort.url}
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
                <h3 className="text-lg md:text-2xl font-bold text-stone-900">{HOTEL_DATA.urabandai_active_resort.name}</h3>
              </div>
              <div className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-full">
                ★ {HOTEL_DATA.urabandai_active_resort.rating} ({HOTEL_DATA.urabandai_active_resort.reviews}件)
              </div>
            </div>

            <div className="mb-6 rounded-xl overflow-hidden shadow-inner aspect-video relative bg-stone-200">
              <img
                src={HOTEL_DATA.urabandai_active_resort.img}
                alt={HOTEL_DATA.urabandai_active_resort.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6">
              {HOTEL_DATA.urabandai_active_resort.special}。旅の目的に合わせて快適に過ごせる温かなおもてなしと充実の設備が魅力。観光や散策の拠点として最適で、心地よい秋の滞在を叶えてくれます。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 text-xs md:text-sm text-stone-600 space-y-2 mb-6 border border-stone-200">
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">住所:</span>
                <span>{HOTEL_DATA.urabandai_active_resort.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">アクセス:</span>
                <span>{HOTEL_DATA.urabandai_active_resort.access}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold text-stone-800 min-w-[60px]">参考料金:</span>
                <span className="text-rose-600 font-bold">1名あたり {HOTEL_DATA.urabandai_active_resort.minCharge.toLocaleString()}円〜（目安）</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={HOTEL_DATA.urabandai_active_resort.planUrl || HOTEL_DATA.urabandai_active_resort.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>プラン一覧・空室確認（楽天トラベル）</span>
                <span>➔</span>
              </a>
              <a
                href={HOTEL_DATA.urabandai_active_resort.reviewUrl || HOTEL_DATA.urabandai_active_resort.url}
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
                <a href={HOTEL_DATA.urabandai_kogen_hotel.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.urabandai_kogen_hotel.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.urabandai_kogen_hotel.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.urabandai_lake_resort.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.urabandai_lake_resort.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.urabandai_lake_resort.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
              <li>
                <a href={HOTEL_DATA.urabandai_active_resort.url} target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-stone-50 transition border border-stone-100 hover:border-amber-200">
                  <div className="font-bold text-stone-800 line-clamp-1">{HOTEL_DATA.urabandai_active_resort.name}</div>
                  <div className="text-stone-500 text-xs mt-1">★ {HOTEL_DATA.urabandai_active_resort.rating} | 楽天トラベルで詳細確認</div>
                </a>
              </li>
            </ul>

            <hr className="my-5 border-stone-200" />

            <h4 className="font-bold text-stone-900 text-xs mb-3">🍂 関連する秋の特集</h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link href="/furusato-tax-ikaho-kajikabashi-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・群馬・伊香保温泉＆河鹿橋もみじ
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-shuzenji-autumn-leaves-bamboo-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・静岡・修善寺温泉竹林の小径＆文化財宿
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-kurokawa-autumn-leaves-onsen-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・熊本・黒川温泉渓谷露天＆入湯手形
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-hakkoda-sukayu-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・青森・八甲田山＆酸ヶ湯温泉ヒバ千人風呂
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-kinosaki-autumn-leaves-stay" className="hover:text-amber-700 hover:underline block py-1">
                  ・兵庫・城崎温泉柳並木＆七つの外湯めぐり
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
