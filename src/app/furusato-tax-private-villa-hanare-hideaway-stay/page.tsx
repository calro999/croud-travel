import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '【全室離れの隠れ家×ふるさと納税】誰にも会わずに過ごす極上のおこもり客室露天風呂宿完全ガイド | クラウドトラベル',
  description: 'エグゼクティブやお忍び旅行に選ばれる「全室離れ」のおこもり宿。大分・由布院、静岡・修善寺、神奈川・湯河原の源泉かけ流し客室露天風呂付き宿を厳選。誰にも邪魔されない至高のプライベート時間をふるさと納税で。',
  openGraph: {
    title: '【全室離れの隠れ家×ふるさと納税】誰にも会わずに過ごす極上のおこもり客室露天風呂宿完全ガイド | クラウドトラベル',
    description: 'エグゼクティブやお忍び旅行に選ばれる「全室離れ」のおこもり宿。大分・由布院、静岡・修善寺、神奈川・湯河原の源泉かけ流し客室露天風呂付き宿を厳選。誰にも邪魔されない至高のプライベート時間をふるさと納税で。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['furusato-tax-private-villa-hanare-hideaway-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">ふるさと納税×全室離れ・おこもり温泉宿</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ふるさと納税×全室離れ・おこもり温泉宿
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            【全室離れの隠れ家×ふるさと納税】誰にも会わずに過ごす極上のおこもり客室露天風呂宿完全ガイド
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            誰にも邪魔されず、プライベートな時間を最優先したい大人の休日。ロビーでの混雑や大浴場での他人の視線から完全に解放され、専用の門をくぐった一戸建ての「離れ客室」でチェックインからチェックアウトまでを完結させる――そんな究極のプライベートステイが今、感度の高い旅行者から絶大な支持を集めています。由布岳の裾野に点在するプライベートガーデン付きヴィラ、伊豆修善寺の竹林に隠れる築100年の数寄屋離れ、そして万葉集にも詠まれた湯河原の渓流沿い料亭旅館。客室専用の源泉かけ流し露天風呂に好きな時に浸かり、夕食は専任仲居が運ぶ部屋食やお食事専用個室で一品出しの懐石をいただく贅沢。こうした全室離れの宿は1泊1人5万〜15万円クラスが中心ですが、楽天ふるさと納税のトラベルクーポン（30％補助）を使えば実質自己負担2,000円で無理なくアップグレード可能。大切な人とおこもりを満喫する最高峰のプライベート温泉旅へご案内します。
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
              宿の玄関から客室へ直行。他のお客と顔を合わせず、2人だけのプライベートな静寂に浸る
            </h2>
          </div>
          <div className="space-y-6">
            
          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                1
              </span>
              <span>ポイント①：チェックインからチェックアウトまで「他のお客と一切会わない」安心感</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              客室専用の玄関やテラス、インルームチェックイン、完全個室またはお部屋食の徹底により、他人の気配を感じることなく二人だけの静寂を保てます。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                2
              </span>
              <span>ポイント②：24時間いつでも生まれたての源泉を独り占めできる客室専用風呂</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              部屋を出ることなく、数歩で客室露天風呂の湯船へ。早朝の朝霧、夕暮れの茜空、深夜の星空を眺めながら、何度でも好きなだけ名湯に浸かる至福が手に入ります。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                3
              </span>
              <span>ポイント③：高額な離れ客室の宿泊費用をふるさと納税で賢く大幅値引き</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              一般的な和室プランと比べて設備や専任スタッフのコストがかかる離れ客室。30％補助クーポンを適用することで、手出しの費用を大きく抑えて憧れの宿を実現できます。
            </p>
          </div>
  
          </div>
        </section>

        {/* メインコンテンツセクション */}
        
        {/* セクション: yufuin_hanare_onsen */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              大分県由布市・由布岳の自然美に抱かれる名リゾート
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            由布市ふるさと納税で泊まる、由布院温泉の雑木林に点在する戸建て離れ客室露天風呂宿
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            全国屈指の温泉湧出量を誇り、洗練された大人のリゾートとして愛される由布院温泉。金鱗湖周辺や鳥越地区の深い雑木林の中に佇む宿では、広大な敷地にわずか数棟から十数棟の「戸建て離れ」が贅沢に配置されています。由布市のふるさと納税トラベルクーポンを使えば、名峰・由布岳を望むテラス付き離れや、内湯と露天の両方に自家源泉を引く極上宿にお得にステイ。豊後牛のサーロインや地鶏炭火焼きを個室で味わい、鳥のさえずりを聞きながら湯浴みする大人の贅沢が叶います。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['yufuin_hanare_onsen']?.hotels && secData['yufuin_hanare_onsen'].hotels.length > 0 ? (
              secData['yufuin_hanare_onsen'].hotels.map((hotel: any) => (
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

        {/* セクション: shuzenji_hanare_onsen */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              静岡県伊豆市・弘法大師ゆかりの小京都
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            伊豆市ふるさと納税で泊まる、修善寺の竹林の小径近くに佇む数寄屋造り離れ旅館
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            桂川のせせらぎ沿いに竹林の小径が伸び、朱塗りの橋が風情を添える伊豆最古の温泉地・修善寺。文豪や名工たちが愛した歴史ある温泉街の奥に、全室離れ形式の隠れ家旅館がひっそりと佇んでいます。伊豆市のふるさと納税クーポンを活用すれば、宮大工の意匠が光る数寄屋建築の離れや、専用の日本庭園を持つ客室露天風呂宿にお得に宿泊可能。伊豆の天城軍鶏や生わさび、旬の地魚会席を静寂の部屋で味わう、時を忘れるおこもり時間をどうぞ。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['shuzenji_hanare_onsen']?.hotels && secData['shuzenji_hanare_onsen'].hotels.length > 0 ? (
              secData['shuzenji_hanare_onsen'].hotels.map((hotel: any) => (
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

        {/* セクション: yugawara_hanare_onsen */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              神奈川県湯河原町・都心から近い文豪の奥座敷
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            湯河原町ふるさと納税で泊まる、千歳川の渓流沿いに隠れる料理自慢の料亭離れ宿
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            夏目漱石や芥川龍之介、谷崎潤一郎など日本を代表する文豪たちが原稿用紙片手に逗留した湯河原温泉。千歳川のせせらぎと緑深い山あいに佇む宿では、日常の喧騒から隔絶された静謐な空間が守られています。湯河原町のふるさと納税クーポンを使えば、清流を眼下に望む客室専用露天風呂付き離れや、ミシュラン星獲得料理長が腕を振るう料亭旅館にお得にリザーブ。相模湾の獲れたて鮮魚と季節の懐石料理を堪能する、都心からすぐの至高の隠れ家ステイが待っています。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['yugawara_hanare_onsen']?.hotels && secData['yugawara_hanare_onsen'].hotels.length > 0 ? (
              secData['yugawara_hanare_onsen'].hotels.map((hotel: any) => (
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
                <span>「離れ」と通常の客室では具体的に何が違いますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                離れは本館から渡り廊下や庭園の小径を通った別棟に位置しており、隣接する部屋の物音や廊下の足音が一切届かない完全な独立構造になっています。客室専用の露天風呂やテラス、庭園が備えられているのが一般的です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>お食事は完全にお部屋食になりますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                宿によって「客室内の座敷・ダイニングでの部屋食」または「宿泊者ごとに完全に仕切られた個室食事処」のいずれかになります。どちらの形式でも他のお客さんと相席になることはなく、プライベートな食事空間が確保されます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>記念日のサプライズ対応やケーキの持ち込みは可能ですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                離れの宿は記念日利用のお客さんが非常に多いため、花束の手配やアニバーサリーケーキ、シャンパンの事前準備などを柔軟に相談できます。予約後に宿へ希望を伝えておくのがおすすめです。
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
                一生の思い出を刻むハイクラスステイ。箱根・京都・沖縄のプライベートヴィラ特集。
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
                離れの静寂を一人で独占！誰にも気兼ねせず心身を整える大人のソロリトリート。
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
