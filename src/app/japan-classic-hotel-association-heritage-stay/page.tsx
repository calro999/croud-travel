import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/japan-classic-hotel-association-heritage-stay/" },
  title: '日本クラシックホテルの会加盟名門宿厳選ガイド「明治・大正の薫りと登録有形文化財」 | クラウドトラベル',
  description: '日光金谷ホテル、富士屋ホテル、奈良ホテルなど日本クラシックホテルの会に加盟する名門建築宿を特集。歴代のVIPや文豪が愛した至高のホスピタリティと往時の美意識を巡る特別な宿泊体験。',
  openGraph: {
    title: '日本クラシックホテルの会加盟名門宿厳選ガイド「明治・大正の薫りと登録有形文化財」 | クラウドトラベル',
    description: '日光金谷ホテル、富士屋ホテル、奈良ホテルなど日本クラシックホテルの会に加盟する名門建築宿を特集。歴代のVIPや文豪が愛した至高のホスピタリティと往時の美意識を巡る特別な宿泊体験。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['japan-classic-hotel-association-heritage-stay'] || {};


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本クラシックホテルの会加盟名門宿完全ガイド【明治・大正の薫りと登録有形文化財】 | クラウドトラベル",
    "description": "日光金谷ホテル、富士屋ホテル、奈良ホテルなど日本クラシックホテルの会に加盟する名門建築宿を特集。歴代のVIPや文豪が愛した至高のホスピタリティと往時の美意識を巡る特別な宿泊体験。",
    "url": "https://croud-travel.pages.dev/japan-classic-hotel-association-heritage-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "日本クラシックホテルの会加盟名門宿完全ガイド【明治・大正の薫りと登録有形文化財】 | クラウドトラベル", "item": "https://croud-travel.pages.dev/japan-classic-hotel-association-heritage-stay/" }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「日光金谷ホテル」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「日光金谷ホテル」へは、東武・ＪＲ日光駅よりバス約５分、神橋バス停下車／日光－宇都宮有料道路日光ＩＣより神橋交差点近く 日光東照宮より徒歩15分。最寄りの東武日光駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「日光金谷ホテル」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「日光金谷ホテル」は『創業明治６年、日本最古のクラシックリゾートホテル。明治の薫り漂う館内で時間旅行をご堪能下さ。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「日光金谷ホテル」と「富士屋ホテル」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">名門クラシックホテル特化</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-amber-900/30">
          <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            名門クラシックホテル特化
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">日本クラシックホテルの会加盟名門宿厳選ガイド「明治・大正の薫りと登録有形文化財」</h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            日本にわずか9棟しか存在しない「日本クラシックホテルの会」加盟ホテル。明治から昭和初期にかけて、国の威信をかけて世界各国の国賓やVIPを迎え入れた名建築群は、今なお時を超えた気品と温もりに満ちています。当時のまま大切に手入れされた木製回転ドア、格天井や彫刻の装飾、創業時からの秘伝レシピを受け継ぐ伝統フレンチなど、一度は泊まりたい本物のヘリテージステイへご案内します。
          </p>
        </header>

        {/* メインコンテンツセクション */}
        
        {/* セクション: nikko_kanaya_hotel_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              現存最古のリゾートクラシック
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['nikko_kanaya_hotel_stay']?.label || '現存最古のリゾートクラシック'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            1873年創業、現存する日本最古のリゾートホテルとして知られる日光金谷ホテル。東照宮の雅楽師・金谷善一郎が外国人のために設けたコテージに端を発し、アインシュタインやヘレン・ケラーなど数々の世界的偉人が滞在した歴史的サロンです。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['nikko_kanaya_hotel_stay']?.hotels && secData['nikko_kanaya_hotel_stay'].hotels.length > 0 ? (
              secData['nikko_kanaya_hotel_stay'].hotels.map((hotel: any) => (
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
                        {hotel.hotelSpecial || hotel.userReview || '歴史と情緒あふれる空間で、心ほどける特別な宿泊体験をお楽しみいただけます。'}
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
                        href={hotel.hotelInformationUrl}
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

        {/* セクション: fujiya_hotel_hakone_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              和洋折衷・明治の宮大工意匠
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['fujiya_hotel_hakone_stay']?.label || '和洋折衷・明治の宮大工意匠'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            明治11年創業、箱根宮ノ下に佇む富士屋ホテル。唐破風屋根や本館の登録有形文化財建築、館内随所に施された宮大工による花鳥風月の彫刻や格天井が見事です。クラシカルなメインダイニングで味わう伝統のビーフカレーやコンソメスープは外せません。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['fujiya_hotel_hakone_stay']?.hotels && secData['fujiya_hotel_hakone_stay'].hotels.length > 0 ? (
              secData['fujiya_hotel_hakone_stay'].hotels.map((hotel: any) => (
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
                        {hotel.hotelSpecial || hotel.userReview || '歴史と情緒あふれる空間で、心ほどける特別な宿泊体験をお楽しみいただけます。'}
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
                        href={hotel.hotelInformationUrl}
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

        {/* セクション: nara_hotel_classic_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider">
              辰野金吾設計・関西の迎賓館
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['nara_hotel_classic_stay']?.label || '辰野金吾設計・関西の迎賓館'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            1909年創業、東京駅などを手掛けた明治の巨匠・辰野金吾による桃山御殿風の木造建築。吉野杉をふんだんに使用した格調高い吹き抜けロビー、鳥居を模したマントルピースなど、古都・奈良の景観と調和する圧倒的な気品が漂います。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['nara_hotel_classic_stay']?.hotels && secData['nara_hotel_classic_stay'].hotels.length > 0 ? (
              secData['nara_hotel_classic_stay'].hotels.map((hotel: any) => (
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
                        {hotel.hotelSpecial || hotel.userReview || '歴史と情緒あふれる空間で、心ほどける特別な宿泊体験をお楽しみいただけます。'}
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
                        href={hotel.hotelInformationUrl}
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
            よくある質問・歴史建築宿の楽しみ方
          </h2>
          <div className="space-y-4">
            
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>「日本クラシックホテルの会」とはどのような団体ですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                第二次世界大戦以前に建てられ、現存する歴史的価値の高い建物を維持・保存しながら営業を続けている日本の名門クラシックホテル9社によって2017年に設立された会です。加盟ホテルには日光金谷ホテル、富士屋ホテル、奈良ホテル、東京ステーションホテル、ホテルニューグランドなどが名を連ねています。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>クラシックホテルの客室設備や水回りは近代化されていますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                歴史的建築美やアンティーク家具の風合いは大切に残しつつ、水回り・空調・ベッドマットレス・Wi-Fiなどは現代の一流ホテル基準に最新リノベーションされています。快適性とクラシカルな情緒を両立して過ごすことができます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-amber-700 font-serif font-black text-lg">Q.</span>
                <span>館内ツアーや歴史案内などのサービスはありますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                多くのクラシックホテルでは、ホテルスタッフによる館内ヘリテージツアーや歴史展示室（ミュージアム）の見学が実施・常設されています。建物の彫刻や歴代著名人のエピソードを深く知ることで、滞在がより一層味わい深いものになります。
              </p>
            </div>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="bg-stone-200/70 rounded-2xl p-6 md:p-8 text-center border border-stone-300">
          <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">
            他のこだわり・テーマ特化ステイを探す
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            クラシックホテル、登録有形文化財宿のほかにも、日本全国の個性豊かな温泉宿やリゾートホテルをご紹介しています。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/japan-classic-hotel-association-heritage-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🏛️ 日本クラシックホテルの会加盟宿
            </Link>
            <Link
              href="/taisho-roman-showa-modern-art-deco-hotel-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🎨 大正ロマン＆アールデコ建築宿
            </Link>
            <Link
              href="/tangible-cultural-property-sukiya-carpenter-ryokan-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              🪵 登録有形文化財・宮大工の宿
            </Link>
            <Link
              href="/former-aristocrat-zaibatsu-imperial-villa-resort-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              👑 旧華族・旧財閥別邸ステイ
            </Link>
            <Link
              href="/vories-frank-lloyd-wright-architecture-resort-stay"
              className="px-4 py-2 bg-white text-stone-800 rounded-full text-xs md:text-sm font-semibold hover:bg-amber-100 border border-stone-300 transition shadow-sm"
            >
              📐 巨匠建築・ヴォーリズ＆ライト宿
            </Link>
          </div>
        </section>
      </div>
    
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】日光金谷ホテルを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 東武日光駅よりアクセス。東武・ＪＲ日光駅よりバス約５分、神橋バス停下車／日光－宇都宮有料道路日光ＩＣより神橋交差点近く 日光東照宮より徒歩15分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「日光金谷ホテル」にチェックイン。創業明治６年、日本最古のクラシックリゾートホテル。明治の薫り漂う館内で時間旅行をご堪能下さい。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「日光金谷ホテル」の湯処へ。創業明治６年、日本最古のクラシックリゾートホテル。明治の薫り漂う館内でとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「日光金谷ホテル」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「日光金谷ホテル」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「日光金谷ホテル」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「富士屋ホテル」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と日光金谷ホテルの滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「日光金谷ホテル」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「日光金谷ホテル」へは、東武・ＪＲ日光駅よりバス約５分、神橋バス停下車／日光－宇都宮有料道路日光ＩＣより神橋交差点近く 日光東照宮より徒歩15分。最寄りの東武日光駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「日光金谷ホテル」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「日光金谷ホテル」は『創業明治６年、日本最古のクラシックリゾートホテル。明治の薫り漂う館内で時間旅行をご堪能下さ。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「日光金谷ホテル」と「富士屋ホテル」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
                href="/prefectures/okayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岡山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/saitama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                埼玉県の宿・温泉
              </Link>
              <Link
                href="/prefectures/okinawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                沖縄県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ehime"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                愛媛県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="japan-classic-hotel-association-heritage-stay" />
</div>
        </section>

      </main>
  );
}
