import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '【絶景インフィニティ温泉×ふるさと納税】水平線と空に溶け込む天空露天風呂＆インフィニティプール宿完全ガイド | クラウドトラベル',
  description: '湯船と海・湖の境界線が消える奇跡の絶景。静岡・稲取、北海道・洞爺湖、沖縄・恩納村のインフィニティ温泉＆天空プールリゾートを厳選。SNSでも話題の圧倒的パノラマステイを楽天ふるさと納税で賢く予約。',
  openGraph: {
    title: '【絶景インフィニティ温泉×ふるさと納税】水平線と空に溶け込む天空露天風呂＆インフィニティプール宿完全ガイド | クラウドトラベル',
    description: '湯船と海・湖の境界線が消える奇跡の絶景。静岡・稲取、北海道・洞爺湖、沖縄・恩納村のインフィニティ温泉＆天空プールリゾートを厳選。SNSでも話題の圧倒的パノラマステイを楽天ふるさと納税で賢く予約。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['furusato-tax-infinity-onsen-sky-ocean-view-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">ふるさと納税×絶景インフィニティ温泉・天空露天</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ふるさと納税×絶景インフィニティ温泉・天空露天
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            【絶景インフィニティ温泉×ふるさと納税】水平線と空に溶け込む天空露天風呂＆インフィニティプール宿完全ガイド
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            視界を遮るフェンスや手すりがなく、湯船の縁からあふれるお湯がそのまま海や湖へと繋がっているかのように錯覚する「インフィニティ露天風呂」。水平線から昇る神々しい朝日、茜色に染まる夕暮れのマジックアワー、そして夜には満天の星が水面に映り込む――その圧倒的なビジュアルと開放感は、現代のリゾートステイにおける最高峰の贅沢です。相模灘の青い海を眼下に望む伊豆・稲取、羊蹄山と穏やかなカルデラ湖に抱かれる北海道・洞爺湖、そして東シナ海を見下ろす沖縄・恩納村の天空インフィニティプールリゾート。こうした最新のラグジュアリー設備を持つ施設は宿泊単価が高めですが、楽天ふるさと納税のトラベルクーポン（30％割引）を使えば実質自己負担2,000円で驚くほどお得に滞在可能。息を呑む絶景と名湯に身を委ねる、至極のインフィニティステイへご案内します。
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
              青い海と湯面が一体化するインフィニティの絶景。地球の丸さを肌で感じる究極の解放感へ
            </h2>
          </div>
          <div className="space-y-6">
            
          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                1
              </span>
              <span>ポイント①：1泊5万〜10万円超の「絶景インフィニティ客室」をお得にリザーブ</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              海や湖を一望できる最前列のテラス付き客室や、専用インフィニティ温泉を備えたスイートルーム。高価格帯の客室こそ、寄付額に応じた30％割引クーポンの恩恵が最大化されます。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                2
              </span>
              <span>ポイント②：SNS映え・記念写真の美しさが圧倒的！忘れられない思い出に</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              海と空に溶け込むようなシルエット写真は、旅の最高の思い出の1枚に。カップルの記念日旅行や女子旅、自分へのご褒美ステイとして圧倒的な満足度を誇ります。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                3
              </span>
              <span>ポイント③：温泉とプールの両方を愉しめるオールシーズン対応リゾート</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              夏は開放的なインフィニティプール、冬は湯気立ち上るインフィニティ温泉露天風呂。季節を問わず大自然のパノラマを全身で浴びるラグジュアリーな休日が過ごせます。
            </p>
          </div>
  
          </div>
        </section>

        {/* メインコンテンツセクション */}
        
        {/* セクション: inatori_infinity_onsen */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              静岡県東伊豆町・相模灘の水平線に浮かぶ天空の湯
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            東伊豆町ふるさと納税で泊まる、稲取温泉の海と一体化するオーシャンインフィニティ露天風呂宿
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            伊豆半島東海岸から相模灘へ突き出た岬に位置する稲取温泉。海沿いに建つ宿の露天風呂に浸かると、目の前には視界270度の遮るもののない大パノラマが広がり、まるで海の上に浮かんでいるかのような錯覚に包まれます。東伊豆町のふるさと納税トラベルクーポンを使えば、伊豆大島を正面に望む展望インフィニティ温泉宿や、名物の「稲取金目鯛の姿煮」を部屋食で味わえる名旅館にお得にステイ。波の音をBGMに水平線から昇る朝日を全身に浴びる、至福の目覚めをご体験ください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['inatori_infinity_onsen']?.hotels && secData['inatori_infinity_onsen'].hotels.length > 0 ? (
              secData['inatori_infinity_onsen'].hotels.map((hotel: any) => (
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
                        {hotel.hotelSpecial || hotel.userReview || '息を呑む絶景と心尽くしのおもてなしを堪能できる、ふるさと納税トラベルクーポン対象宿です。'}
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

        {/* セクション: toya_infinity_onsen */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              北海道洞爺湖町・静穏なカルデラ湖と羊蹄山のパノラマ
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            洞爺湖町ふるさと納税で泊まる、湖面に浮かぶような最上階インフィニティ天空露天風呂ホテル
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            支笏洞爺国立公園内に位置し、青く澄んだカルデラ湖と蝦夷富士・羊蹄山が織りなす北海道屈指の景勝地・洞爺湖。湖畔に佇むリゾートホテルの最上階に設けられたインフィニティ露天風呂では、浴槽の縁が湖面とシームレスに重なり合い、大自然の中に溶けていくような深いリラクゼーションが味わえます。洞爺湖町のふるさと納税クーポンを活用すれば、ロングラン花火大会を客室や露天風呂から独占できる特等席ホテルにお得に宿泊可能。北海道の旬食材バイキングとともに、北の大地の雄大さを心ゆくまで満喫できます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['toya_infinity_onsen']?.hotels && secData['toya_infinity_onsen'].hotels.length > 0 ? (
              secData['toya_infinity_onsen'].hotels.map((hotel: any) => (
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
                        {hotel.hotelSpecial || hotel.userReview || '息を呑む絶景と心尽くしのおもてなしを堪能できる、ふるさと納税トラベルクーポン対象宿です。'}
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

        {/* セクション: onna_infinity_pool */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              沖縄県恩納村・東シナ海を見下ろす南国リゾート
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            恩納村ふるさと納税で泊まる、エメラルドグリーンの海と空を独占する天空インフィニティプール
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            沖縄本島屈指の西海岸ビーチリゾート・恩納村。小高い丘の上や海岸線に佇むラグジュアリーホテルでは、プールサイドから東シナ海へと視線が抜ける天空インフィニティプールがリゾート気分を最高潮に高めてくれます。恩納村のふるさと納税クーポンを使えば、夕暮れ時にサンセットカクテルを片手にプールサイドで寛ぎ、夜は星空を仰ぐ極上のリゾートステイがお得に実現。沖縄県産和牛や近海魚のグリルディナーに舌鼓を打ち、日常を完全に忘れる南国ステイをご堪能ください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['onna_infinity_pool']?.hotels && secData['onna_infinity_pool'].hotels.length > 0 ? (
              secData['onna_infinity_pool'].hotels.map((hotel: any) => (
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
                        {hotel.hotelSpecial || hotel.userReview || '息を呑む絶景と心尽くしのおもてなしを堪能できる、ふるさと納税トラベルクーポン対象宿です。'}
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
                <span>インフィニティ露天風呂は天候が悪くても楽しめますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                晴れの日の水平線は格別ですが、曇りや雨の日でも霧が立ち込める幻想的な海・湖の風景が楽しめます。また、多くの施設ではガラス張りの展望内湯も併設されているため、風の強い日でも快適に入浴できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>インフィニティプールは年中利用できますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                沖縄や本州のハイクラスリゾートの多くでは、春〜秋の通常営業に加え、冬期は温水プールとして通年営業を行っているところが増えています。予約時に各ホテルのプール温水対応状況を確認しておくと安心です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>写真撮影は自由にできますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                客室専用のインフィニティ露天風呂やプールであれば24時間自由に撮影可能です。共用の大浴場露天風呂はプライバシー保護のため撮影禁止となっている施設が多いため、客室露天風呂付きプランの予約が最もおすすめです。
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
              href="/furusato-tax-anniversary-luxury-suite-villa-stay"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                【憧れの最高峰宿】記念日・プロポーズの極上スイート＆ヴィラ
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                インフィニティ風呂とともに楽しむ！箱根・京都・沖縄のプライベートプール付きスイート特集。
              </p>
            </Link>
  

            <Link
              href="/furusato-tax-remote-island-luxury-resort-stay"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国ステイ
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                絶景オーシャンビューを離島で独占！屋久島・奄美・石垣島のラグジュアリーヴィラ特集。
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
