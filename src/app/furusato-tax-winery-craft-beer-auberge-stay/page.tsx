import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '【ワイン＆地ビール×ふるさと納税】ぶどう畑を望むワイナリーホテル＆クラフト醸造オーベルジュ旅 | クラウドトラベル',
  description: 'ワイン愛好家・クラフトビール派必見！山梨・勝沼、北海道・富良野＆余市のぶどう畑を一望するワイナリー併設宿や美食オーベルジュを厳選。テロワールを味わい尽くす大人の美酒ステイをふるさと納税で賢く予約。',
  openGraph: {
    title: '【ワイン＆地ビール×ふるさと納税】ぶどう畑を望むワイナリーホテル＆クラフト醸造オーベルジュ旅 | クラウドトラベル',
    description: 'ワイン愛好家・クラフトビール派必見！山梨・勝沼、北海道・富良野＆余市のぶどう畑を一望するワイナリー併設宿や美食オーベルジュを厳選。テロワールを味わい尽くす大人の美酒ステイをふるさと納税で賢く予約。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['furusato-tax-winery-craft-beer-auberge-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">ふるさと納税×ワイナリーリゾート・クラフトビール宿</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ふるさと納税×ワイナリーリゾート・クラフトビール宿
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            【ワイン＆地ビール×ふるさと納税】ぶどう畑を望むワイナリーホテル＆クラフト醸造オーベルジュ旅
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            その土地の土壌、気候、日照、そして人の情熱が凝縮された「テロワール」。日本ワインの銘醸地として世界から注目を集める山梨・勝沼、雄大な大地に広がる北海道・富良野、そして冷涼な気候が育む最高峰のピノ・ノワールやシャルドネで知られる北海道・余市。一面に広がるぶどう畑をテラスから眺め、セラーから取り出されたばかりの限定ワインと、地元食材を極めたシェフ渾身のフレンチとのマリアージュに酔いしれる――お酒と美食を愛する旅人にとって、ワイナリー併設ホテルやオーベルジュへの滞在はまさに憧れの体験です。さらに楽天ふるさと納税のトラベルクーポンを活用すれば、宿泊代金の30％が補助され、実質負担を抑えてワンランク上のペアリングコース付きプランを選択可能。ほろ酔いの心地よさに包まれたまま客室のベッドへ倒れ込める、至福のワイナリーステイへご案内します。
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当を宿泊クーポン還元</span>
            <span>✓ クーポンの有効期限はゆとりの3年間</span>
            <span>✓ 予約済みでも「あとから割引」対応</span>
          </div>
        </header>

        {/* 制度解説・攻略ポイントセクション */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
              STRATEGY GUIDE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-3 font-serif">
              ぶどう畑の風を感じ、醸造家が情熱を注いだグラスを傾け、そのまま心地よい眠りへ
            </h2>
          </div>
          <div className="space-y-6">
            
          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                1
              </span>
              <span>ポイント①：帰りの運転を気にせず、思う存分グラスを重ねられる最大の贅沢</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              ワイナリー巡りの一番の悩みは「運転手がお酒を飲めない」こと。宿泊施設を兼ねたオーベルジュやワイナリーホテルなら、全員が気兼ねなくテイスティングやペアリングディナーを堪能できます。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                2
              </span>
              <span>ポイント②：市販されていない「ワイナリー限定・熟成ビンテージ」に出会える</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              併設レストランやセラーでは、一般の酒販店やネット通販には出回らないワイナリー限定ロットやバックビンテージがオンリスト。生産者やソムリエから直接ブドウ栽培のこだわりを聞きながら味わう一杯は格別です。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                3
              </span>
              <span>ポイント③：宿泊費をクーポンで抑えた分、希少ワインや地元お土産を贅沢に購入</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              ふるさと納税クーポンによって宿泊代金が大幅に浮くため、ディナーでの高級ワインのボトル注文や、旅の記念に自宅へ送るお気に入りのワイン・クラフトビール箱買いを思い切り楽しめます。
            </p>
          </div>
  
          </div>
        </section>

        {/* メインコンテンツセクション */}
        
        {/* セクション: katsunuma_wine_stay */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              山梨県甲州市・日本ワイン発祥の地「勝沼」
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            甲州市ふるさと納税で泊まる、甲州ぶどうの丘と自家源泉ワイン風呂を持つ名宿
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            約30軒もの個性豊かなワイナリーがひしめく日本ワインの聖地・山梨県甲州市勝沼。盆地を見下ろす丘陵地帯一面に広がるぶどう畑の風景は、まるで南フランスやトスカーナを彷彿とさせます。甲州市のふるさと納税トラベルクーポンを使えば、勝沼のぶどう畑や富士山を望む展望ホテルや、名物の「ワイン風呂」を備えた温泉旅館にお得にステイ。和食にも寄り添う爽やかな甲州種ワインや果実味豊かなマスカット・ベーリーAとともに、甲州牛や富士桜ポークを味わう極上のペアリングナイトが楽しめます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['katsunuma_wine_stay']?.hotels && secData['katsunuma_wine_stay'].hotels.length > 0 ? (
              secData['katsunuma_wine_stay'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                    {hotel.reviewCount > 0 && (
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium px-2.5 py-0.5 rounded shadow">
                        クチコミ {hotel.reviewCount}件
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg md:text-xl mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '極上のおもてなしと特別な空間を堪能できる、ふるさと納税トラベルクーポン対象宿です。'}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-2">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <div>
                            <span className="text-[11px] text-stone-400 block">参考宿泊目安</span>
                            <span className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</span>円〜
                          </div>
                        ) : (
                          <span className="text-stone-500 font-medium">プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition shadow-sm hover:shadow"
                      >
                        ふるさと納税対象プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-8 bg-stone-100 rounded-2xl text-center text-stone-600 text-sm">
                現在、該当自治体のおすすめ宿泊施設データを更新中です。
              </div>
            )}
          </div>
        </section>

        {/* セクション: furano_winery_resort */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              北海道富良野市・大雪山連峰を望むふらのワインの里
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            富良野市ふるさと納税で泊まる、ラベンダーとぶどう畑に抱かれる高原ワインリゾート
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ラベンダー畑とパッチワークの丘で全国に知られる北海道・富良野。寒暖差の激しい内陸性気候は糖度の高い良質なぶどうを育み、「ふらのワイン」として独自の進化を遂げています。富良野市のふるさと納税クーポンを活用すれば、十勝岳連峰のパノラマを望むリゾートホテルや自然派ロッジにお得に宿泊可能。北海道の大自然が育んだチーズやふらの和牛、みずみずしいアスパラガスとともに、富良野産ワインのふくよかなアロマを堪能する優雅な高原ステイが叶います。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['furano_winery_resort']?.hotels && secData['furano_winery_resort'].hotels.length > 0 ? (
              secData['furano_winery_resort'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                    {hotel.reviewCount > 0 && (
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium px-2.5 py-0.5 rounded shadow">
                        クチコミ {hotel.reviewCount}件
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg md:text-xl mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '極上のおもてなしと特別な空間を堪能できる、ふるさと納税トラベルクーポン対象宿です。'}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-2">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <div>
                            <span className="text-[11px] text-stone-400 block">参考宿泊目安</span>
                            <span className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</span>円〜
                          </div>
                        ) : (
                          <span className="text-stone-500 font-medium">プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition shadow-sm hover:shadow"
                      >
                        ふるさと納税対象プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-8 bg-stone-100 rounded-2xl text-center text-stone-600 text-sm">
                現在、該当自治体のおすすめ宿泊施設データを更新中です。
              </div>
            )}
          </div>
        </section>

        {/* セクション: yoichi_wine_hotel */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              北海道余市町・世界が熱視線を注ぐ銘醸地「余市」
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            余市町ふるさと納税で泊まる、最高峰日本ワインの聖地・余市の美食オーベルジュ
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            世界的なワインコンクールで受賞を重ね、いまや日本で最も入手困難なグランヴァンを次々と生み出している北海道余市町。日本海からの潮風と水はけの良い丘陵地が、香り高くミネラル豊かな奇跡のぶどうを実らせます。余市町のふるさと納税クーポンを使えば、ワイナリーが点在する余市・仁木エリアの隠れ家オーベルジュやデザインホテルをお得に予約可能。日本海で揚がるウニやアワビ、サクラマスと余市産ピノ・ノワールとの至高のマリアージュをお楽しみください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['yoichi_wine_hotel']?.hotels && secData['yoichi_wine_hotel'].hotels.length > 0 ? (
              secData['yoichi_wine_hotel'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                    {hotel.reviewCount > 0 && (
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium px-2.5 py-0.5 rounded shadow">
                        クチコミ {hotel.reviewCount}件
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg md:text-xl mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '極上のおもてなしと特別な空間を堪能できる、ふるさと納税トラベルクーポン対象宿です。'}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-2">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <div>
                            <span className="text-[11px] text-stone-400 block">参考宿泊目安</span>
                            <span className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</span>円〜
                          </div>
                        ) : (
                          <span className="text-stone-500 font-medium">プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition shadow-sm hover:shadow"
                      >
                        ふるさと納税対象プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-8 bg-stone-100 rounded-2xl text-center text-stone-600 text-sm">
                現在、該当自治体のおすすめ宿泊施設データを更新中です。
              </div>
            )}
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2.5 h-7 bg-amber-700 rounded-full inline-block"></span>
            よくある質問・ふるさと納税トラベルクーポンの疑問を解消
          </h2>
          <div className="space-y-4">
            
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>お酒がそこまで強くない人でも楽しめますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                多くのワイナリーホテルやオーベルジュでは、アルコール度数の低い微発泡ワインや、ワイナリー特製の高級ノンアルコールぶどうジュース、クラフトティーなどのノンアルコールペアリングも充実しており、お酒が苦手な方でも料理との調和を存分に堪能できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>ワイナリーの見学や醸造所ツアーは宿泊者限定で参加できますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                宿によっては、宿泊者限定のプライベートセラー見学や、醸造責任者（ワインメーカー）によるテイスティングセミナーが開催されている場合があります。収穫期（9月〜10月）にはブドウの収穫体験ができるイベントを用意しているところもあります。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>ワインの購入や配送はホテルから直接できますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                はい、ホテル内のセラーや直営ショップで購入したワインは、品質を損なわないようクール便で自宅へ一括配送してもらうことが可能です。重いボトルを持ち運ぶことなく手ぶらで帰路につけます。
              </p>
            </div>
          </div>
        </section>

        {/* 相互回遊リンク */}
        <section className="bg-stone-200/80 rounded-3xl p-6 md:p-10 border border-stone-300">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-stone-600 bg-white/70 px-3 py-1 rounded-full uppercase tracking-wider">
              RELATED GUIDES
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3 font-serif">
              ふるさと納税トラベルをもっと使いこなす
            </h3>
            <p className="text-stone-600 text-sm">
              お得な「あとから割引」の裏ワザから、ご当地グルメ特化宿、愛犬同伴・個室サウナ宿まで、旅のスタイルに合わせた完全ガイドをチェック！
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Link
              href="/furusato-tax-local-gourmet-inn-stay"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                ワインとともに楽しみたい産地直送の極上料理！全国の料理自慢宿をふるさと納税でお得に。
              </p>
            </Link>
  

            <Link
              href="/furusato-tax-solo-retreat-private-onsen-stay"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                【おひとり様贅沢ステイ】客室露天風呂で心身をリセットするソロ温泉旅
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                読書とワインを片手に過ごす大人のソロ時間。静寂に包まれる一人旅向け温泉宿特集。
              </p>
            </Link>
  

            <Link
              href="/furusato-tax-luxury-hotspring-ryokan-stay"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。
              </p>
            </Link>
  
          </div>
        </section>
      </div>
    </main>
  );
}
