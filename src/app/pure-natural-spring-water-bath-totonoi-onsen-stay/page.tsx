import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '地下天然水・飲める名水掛け流し水風呂宿完全ガイド【しきじ流・極上の羽衣】 | クラウドトラベル',
  description: '「サウナの聖地しきじ」で知られる静岡の天然水水風呂や、阿蘇・北アルプスの名水百選伏流水を惜しげもなく掛け流す名宿を特集。肌に吸い付くまろやかな水質と天然の羽衣。',
  openGraph: {
    title: '地下天然水・飲める名水掛け流し水風呂宿完全ガイド【しきじ流・極上の羽衣】 | クラウドトラベル',
    description: '「サウナの聖地しきじ」で知られる静岡の天然水水風呂や、阿蘇・北アルプスの名水百選伏流水を惜しげもなく掛け流す名宿を特集。肌に吸い付くまろやかな水質と天然の羽衣。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['pure-natural-spring-water-bath-totonoi-onsen-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">天然水・名水水風呂特化</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg border border-emerald-800/30">
          <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            天然水・名水水風呂特化
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-emerald-50">
            地下天然水・飲める名水掛け流し水風呂宿完全ガイド【しきじ流・極上の羽衣】
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl">
            「サウナの良し悪しは水風呂で決まる」と言われるサウナの世界。富士山の雪解け水、阿蘇の大自然が磨いた伏流水、北アルプス山麓の清らかな湧水など、ミネラルを豊富に含んだ地下天然水を贅沢にオーバーフローさせる極上の水風呂。肌を刺すような冷たさがなく、まるでシルクの羽衣をまとったかのようにまろやかに体を包み込む、本物の名水ととのいをご堪能ください。
          </p>
        </header>

        {/* メインコンテンツセクション */}
        
        {/* セクション: shizuoka_shikiji_style_spring_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
              富士の恵み・駿河湾沿岸の伏流水
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['shizuoka_shikiji_style_spring_stay']?.label || '富士の恵み・駿河湾沿岸の伏流水'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            サウナ愛好家の聖地として名高い静岡エリア。富士山や南アルプスから数十年の歳月をかけて湧き出る地下天然水は、軟水で飲用も可能。蛇口からドバドバと注がれる清純な水風呂で、極上の浮遊感とととのいを体感できます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['shizuoka_shikiji_style_spring_stay']?.hotels && secData['shizuoka_shikiji_style_spring_stay'].hotels.length > 0 ? (
              secData['shizuoka_shikiji_style_spring_stay'].hotels.map((hotel: any) => (
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

        {/* セクション: kurokawa_aso_pure_water_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
              阿蘇伏流水・名水百選のシングル＆秘湯
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['kurokawa_aso_pure_water_stay']?.label || '阿蘇伏流水・名水百選のシングル＆秘湯'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            阿蘇カルデラの壮大な森が育んだ名水百選の湧水群。熊本・黒川や阿蘇の山間に佇む名旅館では、キリリと冷えた天然水掛け流し水風呂と、良質な硫黄泉や炭酸水素塩泉の温冷交代浴が至福の領域へ導きます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['kurokawa_aso_pure_water_stay']?.hotels && secData['kurokawa_aso_pure_water_stay'].hotels.length > 0 ? (
              secData['kurokawa_aso_pure_water_stay'].hotels.map((hotel: any) => (
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

        {/* セクション: nagano_alps_pure_spring_stay */}
        <section className="mb-16 bg-white rounded-2xl shadow-sm border border-emerald-900/10 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold tracking-wider">
              北アルプス雪解け水・安曇野清流クールダウン
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            {secData['nagano_alps_pure_spring_stay']?.label || '北アルプス雪解け水・安曇野清流クールダウン'}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            白馬や安曇野、八ヶ岳山麓に位置する信州の宿。雪解けのピュアな天然水がそのまま注がれる水風呂は、冷たさの中に甘みすら感じる純度の高さ。爽快な高原の森林外気浴とのコンビネーションは格別です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['nagano_alps_pure_spring_stay']?.hotels && secData['nagano_alps_pure_spring_stay'].hotels.length > 0 ? (
              secData['nagano_alps_pure_spring_stay'].hotels.map((hotel: any) => (
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
                <span>天然水の水風呂は一般的な水道水の水風呂と何が違いますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                塩素（カルキ）による刺激や臭いが一切なく、ミネラルバランスに優れているため肌触りが非常に柔らかく滑らかです。「いつまでも入っていたくなる」「水に溶け込むような感覚」と表現されるほどの違いがあります。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-emerald-700 font-serif font-black text-lg">Q.</span>
                <span>水温（水風呂の温度）はどのくらいですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                地下水は年間を通じて14〜17度前後の安定した水温を保つ施設が多く、過度な冷たさを感じさせずにしっかりとクールダウンできます。一部施設では10度前後のシングル水温を楽しめる場合もあります。
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200/70">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-emerald-700 font-serif font-black text-lg">Q.</span>
                <span>サウナ後の水分補給としてその天然水を飲むことはできますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-6">
                飲用許可を取得している施設では、水風呂の注ぎ口や専用給水所から汲みたての天然水をそのまま飲むことができます。体の中からピュアな名水で満たされる感動を味わえます。
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
