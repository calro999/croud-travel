import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国アイランドふるさと納税ステイ | クラウドトラベル',
  description: '本土では決して味わえない圧倒的な静寂と大自然。屋久島・奄美大島・石垣島の世界遺産ロッジやオーシャンフロントヴィラを楽天ふるさと納税で賢く予約。飛行機や船で渡る大人のアイランドエスケープ。',
  openGraph: {
    title: '【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国アイランドふるさと納税ステイ | クラウドトラベル',
    description: '本土では決して味わえない圧倒的な静寂と大自然。屋久島・奄美大島・石垣島の世界遺産ロッジやオーシャンフロントヴィラを楽天ふるさと納税で賢く予約。飛行機や船で渡る大人のアイランドエスケープ。',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['furusato-tax-remote-island-luxury-resort-stay'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">ふるさと納税×極上離島リゾート・自然遺産ステイ</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ふるさと納税×極上離島リゾート・自然遺産ステイ
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国アイランドふるさと納税ステイ
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            都会の喧騒や慌ただしい日常から物理的に距離を置き、心と身体を真のリセットへと導く「離島の旅」。フェリーのデッキに立ち海原を渡る時間や、プロペラ機が小さな滑走路に着陸した瞬間の高揚感は、本州の旅とは一線を画す特別な旅情をもたらします。樹齢数千年の縄文杉が息づく世界自然遺産・屋久島、東洋のガラパゴスと称される豊かなマングローブと奄美ブルーの海が広がる奄美大島、そしてサンゴ礁と満天の天の川に包まれる八重山諸島の玄関口・石垣島。こうした離島にあるハイクラスリゾートや一棟貸しヴィラは、流通コストや贅沢な空間設計から宿泊料金が高めに設定されていますが、楽天ふるさと納税のトラベルクーポンを使えば実質30％割引で予約可能。自治体への寄付を通じて手付かずの自然保護を応援しながら、一生忘れられない離島滞在へ出かけませんか。
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
              碧い海と深い原生林に囲まれ、波音と鳥の声だけが響く完全プライベートな休日へ
            </h2>
          </div>
          <div className="space-y-6">
            
          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                1
              </span>
              <span>ポイント①：高単価になりがちな「離島のラグジュアリーヴィラ」を30％補助でお得に</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              プライベートプール付きヴィラや全室テラス付きの自然派リゾートなど、離島ならではのプレミアム宿。ふるさと納税クーポンを活用すれば、例えば1泊10万円の宿泊費でも手出し7万円（税控除考慮で実質自己負担2,000円）で泊まることができます。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                2
              </span>
              <span>ポイント②：世界遺産の豊かな生態系を守る「地域貢献・エコツーリズム」</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              屋久島や奄美大島など、世界自然遺産に登録された自治体へのふるさと納税は、貴重な固有種や原生林の保全活動、エコツーリズム推進の財源として活用され、旅をすること自体が自然保護の力になります。
            </p>
          </div>
  

          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                3
              </span>
              <span>ポイント③：3年間有効だから「台風シーズンを避けたベストな日程」を選べる</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              離島旅行で気になるのが天候や台風。有効期間が3年間あるトラベルクーポンなら、梅雨明けの初夏や台風の少ない春・初秋など、ベストコンディションの時期を慎重に見極めて旅行計画を立てられます。
            </p>
          </div>
  
          </div>
        </section>

        {/* メインコンテンツセクション */}
        
        {/* セクション: yakushima_nature_resort */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              鹿児島県屋久島町・樹齢千年の屋久杉と苔むす森
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            屋久島町ふるさと納税で泊まる、世界自然遺産の深い緑と美肌温泉に癒やされる高級ロッジ
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            九州最高峰の宮之浦岳をはじめ、1,000m級の山々が連なる洋上のアルプス・屋久島。白谷雲水峡の幻想的な苔むす森や屋久杉の巨樹が放つ圧倒的な生命力は、訪れる者の人生観を変えるほどのパワーを持っています。屋久島町のふるさと納税トラベルクーポンを使えば、モッチョム岳の岩壁を望むラグジュアリーリゾートホテルや、天然温泉を引くプライベートヴィラをお得にリザーブ。屋久島近海で獲れた首折れサバやトビウオ会席を味わい、夜は波音を聞きながら満天の星を仰ぐ究極のヒーリングステイが叶います。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['yakushima_nature_resort']?.hotels && secData['yakushima_nature_resort'].hotels.length > 0 ? (
              secData['yakushima_nature_resort'].hotels.map((hotel: any) => (
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

        {/* セクション: amami_luxury_villa */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              鹿児島県奄美市・龍郷町・手付かずの原生林と奄美ブルー
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            奄美市・龍郷町ふるさと納税で泊まる、透明度抜群のビーチ直結オーシャンフロントヴィラ
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            世界自然遺産に登録され、亜熱帯の原生林とエメラルドグリーンのサンゴ礁が織りなす楽園・奄美大島。静かな波の音とガジュマルの木陰、夕暮れのマジックアワーなど、ゆったりと流れる島時間に身を委ねることができます。奄美市や龍郷町のふるさと納税クーポンを活用すれば、砂浜まで徒歩0分のヴィラや、奄美の伝統工芸・泥染めを取り入れたデザインホテルにスマートにステイ。名物の「鶏飯（けいはん）」や黒糖焼酎を楽しみながら、心洗われるアイランドライフを満喫しましょう。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['amami_luxury_villa']?.hotels && secData['amami_luxury_villa'].hotels.length > 0 ? (
              secData['amami_luxury_villa'].hotels.map((hotel: any) => (
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

        {/* セクション: ishigaki_private_resort */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              沖縄県石垣市・日本最南端の八重山リゾート
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            石垣市ふるさと納税で泊まる、川平湾至近のプライベートプール付きスイートヴィラ
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ミシュラン・グリーンガイド三ツ星に輝く川平湾や、日本屈指の美しさを誇る石垣島の海。ダイビングやシュノーケリングはもちろん、夜には88星座中84星座を観測できる日本初の「星空保護区」としても知られています。石垣市のふるさと納税クーポンを使えば、誰にも邪魔されない専用プール付きヴィラや、オーシャンビューのテラスを持つ高級リゾートホテルをお得に予約可能。石垣牛の炭火焼きステーキや島野菜のフレンチを堪能し、南十字星が瞬く夜空を見上げる贅沢なひとときをどうぞ。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['ishigaki_private_resort']?.hotels && secData['ishigaki_private_resort'].hotels.length > 0 ? (
              secData['ishigaki_private_resort'].hotels.map((hotel: any) => (
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
                <span>離島への飛行機代やフェリー代もクーポンで割引できますか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                楽天トラベルの「JAL楽パック」「ANA楽パック」などの航空券付き宿泊パックプランであれば、航空券と宿泊を合わせた総額に対してふるさと納税クーポンが適用可能です（パック対象プランに限る）。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>屋久島や奄美でのネイチャーガイドツアーの手配はどうすればいいですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                多くのリゾートホテルでは、提携しているプロの公認ガイドによるトレッキングツアーやカヤック体験の事前予約代行を行っています。初心者でも体力に合わせたコースを提案してもらえるため、宿泊予約時に宿へ相談するのがおすすめです。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>レンタカーは島で手配したほうがいいですか？</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                屋久島や奄美大島、石垣島は周囲が広く見どころが点在しているため、レンタカーの利用が非常に便利です。繁忙期は現地のレンタカーが満車になりやすいため、航空券・宿の予約と同時にレンタカーも確保しておくのが鉄則です。
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
                特別な記念日を離島のプライベートプール付きヴィラで。箱根・京都・沖縄のハイクラスステイ。
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
                一人で大自然に没頭したい方に。静寂の宿で過ごすソロワーケーション＆リトリート特集。
              </p>
            </Link>
  

            <Link
              href="/furusato-tax-golf-resort-hotspring-stay"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                【名門ゴルフ×ふるさと納税】トーナメントコース＆温泉ホテル宿泊パック
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                南国の風を感じながらラウンド！宮古島や川奈の名門シーサイドコース特集。
              </p>
            </Link>
  
          </div>
        </section>
      </div>
    </main>
  );
}
