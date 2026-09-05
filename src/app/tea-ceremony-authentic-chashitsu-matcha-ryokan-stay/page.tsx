import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '茶道・本格茶室＆抹茶体験宿完全ガイド【京都・金沢・宇治数寄屋ステイ】 | クラウドトラベル',
  description: '数寄屋造りの名門旅館に備えられた本格茶室、裏千家・表千家の点前体験、加賀百万石の茶の湯文化、宇治の茶畑を望むティーリゾートを特集。一期一会の精神と極上和菓子を味わう大人の旅。',
  openGraph: {
    title: '茶道・本格茶室＆抹茶体験宿完全ガイド【京都・金沢・宇治数寄屋ステイ】 | クラウドトラベル',
    description: '数寄屋造りの名門旅館に備えられた本格茶室、裏千家・表千家の点前体験、加賀百万石の茶の湯文化、宇治の茶畑を望むティーリゾートを特集。一期一会の精神と極上和菓子を味わう大人の旅。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['tea-ceremony-authentic-chashitsu-matcha-ryokan-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">本格茶室・茶道体験特化</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-stone-850 to-amber-950 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-amber-900/30">
          <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            本格茶室・茶道体験特化
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            茶道・本格茶室＆抹茶体験宿完全ガイド【京都・金沢・宇治数寄屋ステイ】
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            千利休が大成した「侘び茶」の精神。頭を下げて躙口（にじりぐち）をくぐれば、そこは世俗の身分や日常の喧騒を忘れ、亭主と客人が心を通わせるわずか四畳半の小宇宙。季節の花と掛け軸、釜の湯が沸く松風の音、抹茶の鮮やかな緑と芳醇な香り。日本の伝統建築美と茶の湯のおもてなしが息づく、選りすぐりの数寄屋旅館とティーリゾートへご案内します。
          </p>
        </header>

        {/* メインコンテンツセクション */}
        
        {/* セクション: kyoto_sukiya_tea_ryokan_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              三千家の本山・京都の数寄屋旅館
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['kyoto_sukiya_tea_ryokan_stay']?.label || '三千家の本山・京都の数寄屋旅館'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            表千家・裏千家・武者小路千家が本拠を置く茶道の聖地・京都。宮大工が釘を使わずに建てた本格茶室を敷地内に有する老舗料理旅館では、亭主による本格的なお点前と季節の生菓子、そして茶懐石の真髄を味わう特別な時間が流れます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['kyoto_sukiya_tea_ryokan_stay']?.hotels && secData['kyoto_sukiya_tea_ryokan_stay'].hotels.length > 0 ? (
              secData['kyoto_sukiya_tea_ryokan_stay'].hotels.map((hotel: any) => (
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
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '日本の美意識と伝統文化を肌で感じる、心洗われる特別な宿泊体験をお楽しみいただけます。'}
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
                        className="inline-flex items-center gap-1 px-4 py-2 bg-stone-900 hover:bg-amber-900 text-amber-100 rounded-lg text-xs font-bold transition"
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

        {/* セクション: kanazawa_tea_culture_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              加賀百万石・武家茶道の美
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['kanazawa_tea_culture_stay']?.label || '加賀百万石・武家茶道の美'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            前田利家をはじめ歴代藩主が茶の湯を奨励した金沢。ひがし茶屋街や兼六園の時雨亭など名茶室が点在。金沢の宿では、九谷焼や山中漆器の銘器で点てるお抹茶と、加賀藩御用達の老舗和菓子による格調高い茶道体験が叶います。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['kanazawa_tea_culture_stay']?.hotels && secData['kanazawa_tea_culture_stay'].hotels.length > 0 ? (
              secData['kanazawa_tea_culture_stay'].hotels.map((hotel: any) => (
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
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '日本の美意識と伝統文化を肌で感じる、心洗われる特別な宿泊体験をお楽しみいただけます。'}
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
                        className="inline-flex items-center gap-1 px-4 py-2 bg-stone-900 hover:bg-amber-900 text-amber-100 rounded-lg text-xs font-bold transition"
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

        {/* セクション: uji_tea_farm_retreat_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              日本茶のふるさと・宇治川の茶畑
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['uji_tea_farm_retreat_stay']?.label || '日本茶のふるさと・宇治川の茶畑'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            宇治茶の名産地・京都宇治。宇治川の清流や茶畑を望むモダンなティーホテルでは、煎茶・玉露の温度別の淹れ分け体験や、濃厚な本場宇治抹茶を自分で点てる体験、抹茶を使った創作フレンチなど、お茶を五感で楽しむリトリートステイが人気です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['uji_tea_farm_retreat_stay']?.hotels && secData['uji_tea_farm_retreat_stay'].hotels.length > 0 ? (
              secData['uji_tea_farm_retreat_stay'].hotels.map((hotel: any) => (
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
                      <h3 className="font-bold text-stone-900 text-lg mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-stone-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '日本の美意識と伝統文化を肌で感じる、心洗われる特別な宿泊体験をお楽しみいただけます。'}
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
                        className="inline-flex items-center gap-1 px-4 py-2 bg-stone-900 hover:bg-amber-900 text-amber-100 rounded-lg text-xs font-bold transition"
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
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2 h-7 bg-amber-700 rounded-full inline-block"></span>
            よくある質問・伝統文化体験＆宿坊の楽しみ方
          </h2>
          <div className="space-y-4">
            
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>茶道の作法や知識が全くなくても体験できますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                全く問題ありません。旅館やホテルの茶道体験では、お茶のいただき方や器の鑑賞法、お菓子の食べ方まで優しく丁寧に教えてもらえます。「美味しく味わい、そのひとときを愉しむ」ことが基本ですので気兼ねなくご参加ください。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>服装に指定や注意点はありますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                茶室に入る際は、畳を傷つけないよう清潔な白い靴下（または白足袋）を着用するのがマナーです。また、大切な茶器を傷つけないよう、指輪や腕時計などのアクセサリー類は事前に外しておきましょう。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>客室でお茶を点てるプランもありますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                はい、客室に茶道具一式（茶筅、抹茶、茶碗、ポット等）が用意されており、好きな時間に自分自身でお茶を点てて愉しめるプライベートなお茶体験プランを用意している宿も増えています。
              </p>
            </div>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="bg-stone-200/70 rounded-2xl p-6 md:p-8 text-center border border-stone-300">
          <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">
            他の伝統文化・リトリート宿を探す
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            坐禅・精進料理宿坊、本格茶室茶道、写経マインドフルネス、武家屋敷、伝統工芸体験など、日本の美意識を体感する宿泊ガイド。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/zen-meditation-shojin-cuisine-temple-retreat-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🧘‍♂️ 禅寺坐禅＆精進料理宿坊
            </Link>
            <Link
              href="/tea-ceremony-authentic-chashitsu-matcha-ryokan-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🍵 本格茶室＆茶道体験宿
            </Link>
            <Link
              href="/shakyo-meditation-mindfulness-sacred-temple-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              ✍️ 写経・写仏＆瞑想宿
            </Link>
            <Link
              href="/samurai-katana-armor-buke-yashiki-heritage-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              ⚔️ 武家屋敷＆サムライ体験宿
            </Link>
            <Link
              href="/traditional-crafts-pottery-gold-leaf-washi-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🏺 金箔・和紙・陶芸工芸宿
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
