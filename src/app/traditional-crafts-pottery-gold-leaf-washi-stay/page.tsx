import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '伝統工芸体験宿完全ガイド【金沢金箔・越前和紙・有田焼陶芸ステイ】 | クラウドトラベル',
  description: '金沢の金箔貼り＆九谷焼絵付け、福井の越前和紙漉き・越前焼、佐賀の有田焼・波佐見焼の窯元巡りを特集。職人の手仕事を間近で体感し、自作の器や工芸品を持ち帰る特別なクラフトリゾート。',
  openGraph: {
    title: '伝統工芸体験宿完全ガイド【金沢金箔・越前和紙・有田焼陶芸ステイ】 | クラウドトラベル',
    description: '金沢の金箔貼り＆九谷焼絵付け、福井の越前和紙漉き・越前焼、佐賀の有田焼・波佐見焼の窯元巡りを特集。職人の手仕事を間近で体感し、自作の器や工芸品を持ち帰る特別なクラフトリゾート。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['traditional-crafts-pottery-gold-leaf-washi-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">伝統工芸・陶芸体験特化</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-stone-850 to-amber-950 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-amber-900/30">
          <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            伝統工芸・陶芸体験特化
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            伝統工芸体験宿完全ガイド【金沢金箔・越前和紙・有田焼陶芸ステイ】
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            金沢の1万分の1ミリまで薄く打ち延ばされた金箔工芸、千五百年の歴史を持つ越前和紙の手漉き体験、そして有田・波佐見の登り窯と白磁の器作り。見るだけでなく、名工の手ほどきを受けながら自分だけの一品を作り上げる贅沢。館内の調度品や料理を彩る器にも最高峰の工芸品が使われ、日本の職人魂と手仕事の温もりに浸るクリエイティブな旅へご案内します。
          </p>
        </header>

        {/* メインコンテンツセクション */}
        
        {/* セクション: kanazawa_gold_leaf_craft_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              国内シェア99%・金沢箔と九谷焼
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['kanazawa_gold_leaf_craft_stay']?.label || '国内シェア99%・金沢箔と九谷焼'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            加賀百万石の工芸王国・金沢。薄い金箔を小箱や手鏡に貼り付ける「金箔貼り体験」や、鮮やかな五彩で彩る「九谷焼絵付け体験」。工芸作家の作品がギャラリーのように並ぶ温泉旅館で、美肌の湯とともに日本の美の極致を体感できます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['kanazawa_gold_leaf_craft_stay']?.hotels && secData['kanazawa_gold_leaf_craft_stay'].hotels.length > 0 ? (
              secData['kanazawa_gold_leaf_craft_stay'].hotels.map((hotel: any) => (
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

        {/* セクション: echizen_washi_pottery_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              越前和紙の里＆越前焼の古窯
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['echizen_washi_pottery_stay']?.label || '越前和紙の里＆越前焼の古窯'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            日本最古の歴史を誇る福井・越前和紙の里「パピルス館」での紙漉き体験や、日本六古窯の一つ「越前焼」の陶芸ろくろ体験。あわら温泉や越前海岸の宿を拠点に、素朴で温かみのある手仕事の里をのんびり巡ることができます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['echizen_washi_pottery_stay']?.hotels && secData['echizen_washi_pottery_stay'].hotels.length > 0 ? (
              secData['echizen_washi_pottery_stay'].hotels.map((hotel: any) => (
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

        {/* セクション: arita_hasami_ceramic_retreat_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              磁器発祥の地・有田焼＆波佐見焼
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['arita_hasami_ceramic_retreat_stay']?.label || '磁器発祥の地・有田焼＆波佐見焼'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            日本で初めて白磁が焼かれた佐賀県有田町と、お洒落な日常の器で大人気の長崎県波佐見町。歴史的なトンバイ塀の路地や窯元巡り。宿では人間国宝の器に盛られた極上会席や、美肌の嬉野温泉・武雄温泉と組み合わせた贅沢な滞在が叶います。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['arita_hasami_ceramic_retreat_stay']?.hotels && secData['arita_hasami_ceramic_retreat_stay'].hotels.length > 0 ? (
              secData['arita_hasami_ceramic_retreat_stay'].hotels.map((hotel: any) => (
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
                <span>作った工芸品や陶器はその日に持ち帰ることができますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                金箔貼りや和紙漉き体験はその場で乾かして当日持ち帰ることができます。陶芸（ろくろ・手びねり・絵付け）は窯での素焼き・本焼きが必要なため、後日（約1〜2ヶ月後）完成品が自宅へ郵送されます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>小さな子どもや不器用な大人でも体験できますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                専任の職人やインストラクターがマンツーマンで優しくサポートしてくれるため、お子様からご年配の方まで誰でも簡単に素晴らしい作品を完成させることができます。家族旅行の思い出作りにも最適です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>宿の中で工芸体験ができるプランはありますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                はい、旅館のワークショップルームやサロンで金箔体験や匂い袋作り、水引アートなどができる宿泊プランを用意している施設が多数あります。移動の手間なく滞在中に楽しめます。
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
