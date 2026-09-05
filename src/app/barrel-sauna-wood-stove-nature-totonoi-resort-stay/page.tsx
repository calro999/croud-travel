import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '本格バレルサウナ＆薪ストーブ宿完全ガイド【大自然森林浴と湖畔ダイブ】 | クラウドトラベル',
  description: '本格バレルサウナ、薪ストーブの柔らかい熱、セルフロウリュ、湖畔ダイブや清流クールダウンが叶う大自然サウナリゾートを特集。森林外気浴で極上のディープリラックスへ。',
  openGraph: {
    title: '本格バレルサウナ＆薪ストーブ宿完全ガイド【大自然森林浴と湖畔ダイブ】 | クラウドトラベル',
    description: '本格バレルサウナ、薪ストーブの柔らかい熱、セルフロウリュ、湖畔ダイブや清流クールダウンが叶う大自然サウナリゾートを特集。森林外気浴で極上のディープリラックスへ。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['barrel-sauna-wood-stove-nature-totonoi-resort-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">本格バレルサウナ・薪ストーブ特化</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-emerald-800/30">
          <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            本格バレルサウナ・薪ストーブ特化
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-emerald-50">
            本格バレルサウナ＆薪ストーブ宿完全ガイド【大自然森林浴と湖畔ダイブ】
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            円筒形の樽型構造が生み出す熱対流と、パチパチとはぜる薪ストーブの柔らかな熱。天然木の香りに包まれながらセルフロウリュを楽しんだ後は、目の前の湖や清流へダイブ、あるいは原生林を渡る風を肌で感じる外気浴デッキへ。現代の喧騒から完全に解き放たれ、五感が研ぎ澄まされる至福のネイチャーサウナ体験をお届けします。
          </p>
        </header>

        {/* メインコンテンツセクション */}
        
        {/* セクション: barrel_sauna_forest_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
              森の樽型サウナ＆薪火の温もり
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['barrel_sauna_forest_stay']?.label || '森の樽型サウナ＆薪火の温もり'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            木々の合間に佇む樽型のバレルサウナ。円形壁面が熱と蒸気を効率的に循環させ、天井から降り注ぐ極上のロウリュ蒸気を体感できます。薪ストーブならではの遠赤外線の優しい温もりが体の芯まで染み渡ります。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['barrel_sauna_forest_stay']?.hotels && secData['barrel_sauna_forest_stay'].hotels.length > 0 ? (
              secData['barrel_sauna_forest_stay'].hotels.map((hotel: any) => (
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

        {/* セクション: lakeside_sauna_tent_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
              湖畔ダイブ＆清流クールダウン
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['lakeside_sauna_tent_stay']?.label || '湖畔ダイブ＆清流クールダウン'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            火照った体を冷水浴としてそのまま湖や清流へ。天然のシングル水温や澄み切った伏流水に身を委ね、インフィニティチェアで木漏れ日を見上げながらととのう、自然派サウナー憧れのワイルドな体験が待っています。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['lakeside_sauna_tent_stay']?.hotels && secData['lakeside_sauna_tent_stay'].hotels.length > 0 ? (
              secData['lakeside_sauna_tent_stay'].hotels.map((hotel: any) => (
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

        {/* セクション: hokkaido_forest_sauna_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
              本場フィンランド式・白樺ヴィヒタ
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['hokkaido_forest_sauna_stay']?.label || '本場フィンランド式・白樺ヴィヒタ'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            北の大地・北海道をはじめとする冷涼な森のリゾート。生白樺の枝葉を束ねたヴィヒタで全身を叩いて血行を促進し、天然アロマオイルの蒸気に包まれる本格的な北欧流サウナリトリートを満喫できます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['hokkaido_forest_sauna_stay']?.hotels && secData['hokkaido_forest_sauna_stay'].hotels.length > 0 ? (
              secData['hokkaido_forest_sauna_stay'].hotels.map((hotel: any) => (
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
                <span>バレルサウナとはどのような特徴がありますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                樽型（バレル）の形状により角がないため、発生したロウリュの熱気・蒸気が部屋全体を円滑に循環し、温度ムラが少なく全身を均一に温めることができます。木の香りと温もりをダイレクトに味わえるのも大きな魅力です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-emerald-700 font-serif font-black text-lg">Q.</span>
                <span>水着の着用は必要ですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                男女共用の屋外バレルサウナや湖畔テントサウナの場合、水着やサウナポンチョ・サウナハットの着用が必要な施設が一般的です。客室専用や貸切サウナの場合は施設ごとの規定をご確認ください。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-emerald-700 font-serif font-black text-lg">Q.</span>
                <span>サウナ初心者でも薪ストーブサウナを楽しめますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                スタッフが薪のくべ方やロウリュのコツを丁寧にレクチャーしてくれる施設が多く、初心者でも安心して楽しめます。電気ストーブにはない柔らかな輻射熱は息苦しさが少なく、初心者の方にも心地よく過ごせます。
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
    </main>
  );
}
