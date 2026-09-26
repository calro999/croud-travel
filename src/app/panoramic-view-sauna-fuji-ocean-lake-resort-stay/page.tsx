import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '富士山・海・夜景パノラマ絶景サウナ宿完全ガイド【展望ととのいテラス】 | クラウドトラベル',
  description: '雪化粧の富士山、どこまでも広がる水平線、きらめく都市の摩天楼夜景を一望するパノラマビューサウナを特集。絶景とともに外気浴デッキでととのう非日常のスパリゾート。',
  openGraph: {
    title: '富士山・海・夜景パノラマ絶景サウナ宿完全ガイド【展望ととのいテラス】 | クラウドトラベル',
    description: '雪化粧の富士山、どこまでも広がる水平線、きらめく都市の摩天楼夜景を一望するパノラマビューサウナを特集。絶景とともに外気浴デッキでととのう非日常のスパリゾート。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['panoramic-view-sauna-fuji-ocean-lake-resort-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">パノラマ絶景サウナ特化</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-emerald-800/30">
          <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            パノラマ絶景サウナ特化
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-emerald-50">
            富士山・海・夜景パノラマ絶景サウナ宿完全ガイド【展望ととのいテラス】
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            サウナ室の大きなピクチャーウィンドウ越しに望む霊峰富士の威容、夕暮れに茜色へ染まる大海原、あるいは眼下にきらめく大都市の摩天楼夜景。ただ汗を流すだけでなく、圧倒的なロケーションの美しさに心を奪われながら迎える外気浴は、まさに極上のトリップ。眺望と癒しが究極の調和を奏でる、全国のパノラマ絶景サウナホテルへご案内します。
          </p>
        </header>

        {/* メインコンテンツセクション */}
        
        {/* セクション: fuji_view_infinity_sauna_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
              霊峰富士一望・天空のサウナ
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['fuji_view_infinity_sauna_stay']?.label || '霊峰富士一望・天空のサウナ'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            山中湖・河口湖畔や富士山麓の高原に位置する絶景サウナ。サウナ室の窓一面に堂々たる富士山が迫り、澄み渡る高原の清涼な空気の中でととのう贅沢。富士の湧水を使用した水風呂との相性も抜群です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['fuji_view_infinity_sauna_stay']?.hotels && secData['fuji_view_infinity_sauna_stay'].hotels.length > 0 ? (
              secData['fuji_view_infinity_sauna_stay'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur text-amber-300 text-xs font-bold px-2.5 py-1 rounded shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-emerald-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '本格サウナと心地よい水風呂、極上の外気浴で心身が深く整うリトリートをご満喫いただけます。'}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <span>目安: <strong className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</strong>円〜</span>
                        ) : (
                          <span>プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-lg text-xs font-bold transition"
                      >
                        詳細・宿泊プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 bg-stone-100 rounded-xl text-center text-stone-600 text-sm">
                現在、該当条件に合うおすすめ宿泊施設を精選更新中です。
              </div>
            )}
          </div>
        </section>

        {/* セクション: ocean_sunset_sauna_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
              大海原と夕陽・潮風の外気浴
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['ocean_sunset_sauna_stay']?.label || '大海原と夕陽・潮風の外気浴'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            相模湾、太平洋、瀬戸内海の断崖やビーチサイドに建つオーシャンサウナ。波の音をBGMに水平線を眺め、黄金色のサンセットに包まれながらの外気浴デッキ。全身で潮風を感じる開放感は格別です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['ocean_sunset_sauna_stay']?.hotels && secData['ocean_sunset_sauna_stay'].hotels.length > 0 ? (
              secData['ocean_sunset_sauna_stay'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur text-amber-300 text-xs font-bold px-2.5 py-1 rounded shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-emerald-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '本格サウナと心地よい水風呂、極上の外気浴で心身が深く整うリトリートをご満喫いただけます。'}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <span>目安: <strong className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</strong>円〜</span>
                        ) : (
                          <span>プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-lg text-xs font-bold transition"
                      >
                        詳細・宿泊プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 bg-stone-100 rounded-xl text-center text-stone-600 text-sm">
                現在、該当条件に合うおすすめ宿泊施設を精選更新中です。
              </div>
            )}
          </div>
        </section>

        {/* セクション: skyscrapers_nightview_sauna_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
              摩天楼夜景・都市型ラグジュアリースパ
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['skyscrapers_nightview_sauna_stay']?.label || '摩天楼夜景・都市型ラグジュアリースパ'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            高層ホテルの最上階スパに設けられた展望サウナ。眼下に広がるメガロポリスの光の海を眺めながらのアウフグースや冷水浴。都会の真ん中で忙しい日常を完全にリセットできるエグゼクティブな癒しです。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['skyscrapers_nightview_sauna_stay']?.hotels && secData['skyscrapers_nightview_sauna_stay'].hotels.length > 0 ? (
              secData['skyscrapers_nightview_sauna_stay'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur text-amber-300 text-xs font-bold px-2.5 py-1 rounded shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-emerald-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '本格サウナと心地よい水風呂、極上の外気浴で心身が深く整うリトリートをご満喫いただけます。'}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <span>目安: <strong className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</strong>円〜</span>
                        ) : (
                          <span>プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-lg text-xs font-bold transition"
                      >
                        詳細・宿泊プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 bg-stone-100 rounded-xl text-center text-stone-600 text-sm">
                現在、該当条件に合うおすすめ宿泊施設を精選更新中です。
              </div>
            )}
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2 h-7 bg-emerald-700 rounded-full inline-block"></span>
            よくある質問・サウナリゾートの楽しみ方
          </h2>
          <div className="space-y-4">
            
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-emerald-700 font-serif font-black text-lg">Q.</span>
                <span>絶景サウナのベストな時間帯はいつですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                富士山ビューは空気が澄み渡る早朝の「紅富士」や日中、オーシャンビューは夕暮れのサンセットタイム、都市型ホテルは煌びやかな夜景が広がるナイトタイムが最もドラマチックでおすすめです。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-emerald-700 font-serif font-black text-lg">Q.</span>
                <span>外気浴スペースにリクライニングチェア（ととのい椅子）は完備されていますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                特集している多くの施設では、インフィニティチェアや木製リクライニングベッドが絶景を正面に望む特等席に配置されており、最高のビューポジションでととのうことができます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-emerald-700 font-serif font-black text-lg">Q.</span>
                <span>日帰り利用も可能ですか、それとも宿泊者限定ですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                一部の施設は日帰りスパとして利用可能ですが、混雑のない早朝や夕暮れのプライムタイムをゆったり満喫できる宿泊での滞在が圧倒的におすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="bg-stone-200/70 rounded-2xl p-6 md:p-8 text-center border border-stone-300">
          <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">
            他のサウナ＆ウェルネス・癒しの宿を探す
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            バレルサウナ、絶景パノラマ、名水水風呂、ハーブ蒸し、完全プライベートサウナ付き客室など、全国の極上サウナ旅をご提案します。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/barrel-sauna-wood-stove-nature-totonoi-resort-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              🪵🔥 本格バレルサウナ＆薪ストーブ
            </Link>
            <Link
              href="/panoramic-view-sauna-fuji-ocean-lake-resort-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              🗻🌅 富士・海・夜景パノラマサウナ
            </Link>
            <Link
              href="/pure-natural-spring-water-bath-totonoi-onsen-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              💧🧖‍♂️ 地下天然水・飲める名水水風呂
            </Link>
            <Link
              href="/herbal-steam-ayurveda-detox-wellness-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              🌿🧘‍♀️ 薬草蒸し＆アーユルヴェーダ
            </Link>
            <Link
              href="/private-room-sauna-luxury-villa-retreat-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-emerald-100 border border-stone-300 transition shadow-sm"
            >
              🚪✨ 客室専用サウナ＆貸切ヴィラ
            </Link>
          </div>
        </section>
      </div>
    
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/fukushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shimane"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                島根県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tottori"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                鳥取県の宿・温泉
              </Link>
              <Link
                href="/prefectures/mie"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
  );
}
