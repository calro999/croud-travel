import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '【全国の桜名所×ふるさと納税】客室から夜桜を愛でるお花見露天風呂＆桜の絶景宿完全ガイド | クラウドトラベル',
  description: '春限定の絶景！静岡・河津桜、奈良・吉野山の一目千本桜、青森・弘前公園の桜の絨毯。春のお花見シーズンに客室や露天風呂から満開の桜を独占できる名宿を厳選。早期満室の桜宿をふるさと納税で賢く予約。',
  openGraph: {
    title: '【全国の桜名所×ふるさと納税】客室から夜桜を愛でるお花見露天風呂＆桜の絶景宿完全ガイド | クラウドトラベル',
    description: '春限定の絶景！静岡・河津桜、奈良・吉野山の一目千本桜、青森・弘前公園の桜の絨毯。春のお花見シーズンに客室や露天風呂から満開の桜を独占できる名宿を厳選。早期満室の桜宿をふるさと納税で賢く予約。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['furusato-tax-cherry-blossom-spring-hanami-onsen-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">ふるさと納税×桜名所・お花見温泉宿</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ふるさと納税×桜名所・お花見温泉宿
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            【全国の桜名所×ふるさと納税】客室から夜桜を愛でるお花見露天風呂＆桜の絶景宿完全ガイド
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            日本人の心を揺さぶり続ける「春の桜」。2月から早咲きの濃いピンク色に染まる伊豆・河津桜並木、山全体が下千本から奥千本まで3万本の山桜で埋め尽くされる世界遺産・奈良吉野山、そしてお濠一面がピンクの花びらで埋まる花筏（はないかだ）で名高い青森・弘前公園。人混みの中で見上げるお花見も良いものですが、最も贅沢なのは「客室のテラスや露天風呂に浸かりながら、満開の桜を二人きりで愛でる」プライベートなお花見ステイです。しかし桜のトップシーズンは全国から予約が殺到し、半年以上前から満室になることも日常茶飯事。そこで絶対に知っておきたいのが、有効期間3年の楽天ふるさと納税トラベルクーポンです。年末の駆け込み期にクーポンを確保しておき、桜の開花情報に合わせて先行予約を入れることで、実質30％割引で特等席の桜宿をリザーブ可能。春の訪れを五感で祝う、極上のお花見温泉旅へ出かけましょう。
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
              花びらが舞い散る露天風呂で盃を傾ける。年に一度、春だけに出会える日本最高の美しき休日へ
            </h2>
          </div>
          <div className="space-y-6">
            
          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                1
              </span>
              <span>ポイント①：争奪戦の「お花見特等席客室」をふるさと納税クーポンでお得に確保</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              桜が見える客室露天風呂付きプランは春の最高価格帯になりがち。ふるさと納税クーポンを使えば、割高なハイシーズン料金でも宿泊費の30％が補助され、実質自己負担2,000円で泊まれます。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                2
              </span>
              <span>ポイント②：混雑知らず！ライトアップされた「夜桜」や「早朝の桜」を独占</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              名所の宿に泊まる最大のメリットは、日帰り観光客が帰った後の幻想的な夜桜ライトアップや、朝露に輝く静寂の桜並木をゆったりと散策できることです。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                3
              </span>
              <span>ポイント③：早咲き（2月）から遅咲き（5月）まで日本全国を縦断して楽しめる</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              2月の河津桜から、4月の吉野山、4月下旬〜5月上旬の弘前城まで、日本の桜前線は3ヶ月にわたって北上します。3年有効クーポンなら、行きたい名所の満開時期に合わせて自由に旅行計画を組めます。
            </p>
          </div>
  
          </div>
        </section>

        {/* メインコンテンツセクション */}
        
        {/* セクション: kawazu_sakura_onsen */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              静岡県河津町・早春を告げる濃いピンクの桜並木
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            河津町ふるさと納税で泊まる、河津川沿いの桜並木を望むお花見露天風呂の宿
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            例年2月上旬から開花し、約1ヶ月にわたって見頃が続く早咲きの「河津桜」。河津川沿い約4kmにわたって約850本もの桜並木が続き、足元に咲く黄色い菜の花との鮮やかなコントラストは春の訪れを告げる絶景です。河津町のふるさと納税トラベルクーポンを使えば、川沿いの桜並木へ徒歩すぐの温泉旅館や、客室露天風呂からライトアップされた夜桜を望む名宿をお得に予約可能。伊豆の新鮮な海の幸と金目鯛を味わいながら、一足早い春のぬくもりに包まれる旅が叶います。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['kawazu_sakura_onsen']?.hotels && secData['kawazu_sakura_onsen'].hotels.length > 0 ? (
              secData['kawazu_sakura_onsen'].hotels.map((hotel: any) => (
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

        {/* セクション: yoshino_sakura_onsen */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              奈良県吉野町・山を染め上げる三万本の一目千本桜
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            吉野町ふるさと納税で泊まる、世界遺産吉野山の桜絵巻をテラスから望む山岳旅館
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            神木として古くから大切に保護され、下千本・中千本・上千本・奥千本と山麓から山頂へと順に咲き上がっていく世界遺産・吉野山。視界いっぱいに広がる約3万本の白山桜のスケールは「一目に千本見える豪華さ」から一目千本と称えられます。吉野町のふるさと納税クーポンを活用すれば、吉野山の尾根沿いに建つ老舗旅館や絶景テラスを持つ山宿にお得にステイ。早朝の山霧に浮かぶ幻想的な桜の海を眺め、名物の吉野葛料理や柿の葉寿司を味わう、日本屈指の歴史あるお花見ステイをご体験ください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['yoshino_sakura_onsen']?.hotels && secData['yoshino_sakura_onsen'].hotels.length > 0 ? (
              secData['yoshino_sakura_onsen'].hotels.map((hotel: any) => (
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

        {/* セクション: hirosaki_sakura_onsen */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              青森県弘前市・お濠を埋め尽くす奇跡の花筏
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            弘前市ふるさと納税で泊まる、弘前城の桜の絨毯と名湯津軽の春を満喫する名宿
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            日本三大桜名所のひとつとして知られる青森県・弘前公園。約2,600本もの桜が一斉に咲き誇り、散り始めるとお濠の水面がピンクの花びらで完全に覆われる「花筏（はないかだ）」は、一生に一度は見たい奇跡の春の絶景です。弘前市のふるさと納税クーポンを使えば、弘前城公園へ徒歩圏内のシティホテルや、近隣の津軽名湯温泉旅館をお得にリザーブ。津軽三味線の生演奏や地元の嶽きみ・津軽リンゴ料理を堪能しながら、みちのくの遅い春の感動に包まれる旅へ出かけましょう。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['hirosaki_sakura_onsen']?.hotels && secData['hirosaki_sakura_onsen'].hotels.length > 0 ? (
              secData['hirosaki_sakura_onsen'].hotels.map((hotel: any) => (
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
                <span>桜の満開時期が年によってズレた場合、日程変更はできますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                宿泊施設が定めるキャンセル規定・日程変更期限内であれば、楽天トラベルの予約画面から日程の変更が可能です。また、万が一予約を取り直す場合でもクーポンはアカウントに戻るため、別の空室日へ再予約できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>桜が見える客室を確実に予約するにはどうすればいいですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                宿泊プラン名に「桜側客室確約」「お花見ビュールーム」「庭園桜ビュースイート」と明記されている専用プランを選ぶのが確実です。予約時に備考欄で希望を伝えておくのも有効です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>お花見期間中の混雑や交通規制を避けるコツはありますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                河津桜や吉野山、弘前公園周辺は日中大変混雑します。宿に前泊して「早朝6時〜8時台」に散策するか、宿の客室からライトアップを鑑賞するのが混雑を避ける最高の裏ワザです。
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
                春の温泉旅行にも最適！草津・有馬・伊豆の老舗宿をふるさと納税で予約するテクニック。
              </p>
            </Link>
  

            <Link
              href="/furusato-tax-travel-after-booking-discount-guide"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                【予約済みでも間に合う】「あとから割引」完全攻略ガイド
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                人気の桜宿をすでに予約していても大丈夫！チェックイン前日までにクーポンをあとから適用する方法。
              </p>
            </Link>
  

            <Link
              href="/furusato-tax-scenic-train-trolley-onsen-stay"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                【絶景観光列車×ふるさと納税】トロッコ列車＆ローカル線途中下車の旅
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                桜並木を走り抜けるローカル列車の旅！車窓のお花見と温泉を楽しむ絶景鉄道紀行。
              </p>
            </Link>
  
          </div>
        </section>
      </div>
    </main>
  );
}
