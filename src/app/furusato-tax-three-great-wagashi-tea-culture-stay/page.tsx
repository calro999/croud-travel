import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大銘菓＆歴史茶の湯・老舗和菓子めぐり風雅宿×ふるさと納税完全ガイド【2026年最新】金沢長生殿・長岡越乃雪・松江山川',
  description: '大名茶人が愛した日本の甘味美学！石川金沢「長生殿」加賀百万石の優美な落雁とひがし茶屋街の料亭旅館、新潟長岡「越乃雪」越後長岡藩御用達の淡雪菓子と蓬平温泉、島根松江「山川」不昧公の風流落雁と宍道湖・玉造温泉。茶の湯文化が息づく城下町の名宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: 'ふるさと納税, 楽天トラベル, 旅行クーポン, 宿泊記, ホテル予約, 国内旅行, おすすめ宿, 温泉旅館',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-wagashi-tea-culture-stay',
  },
  openGraph: {
    title: '日本三大銘菓＆歴史茶の湯・老舗和菓子めぐり風雅宿×ふるさと納税完全ガイド【2026年最新】金沢長生殿・長岡越乃雪・松江山川',
    description: '大名茶人が愛した日本の甘味美学！石川金沢「長生殿」加賀百万石の優美な落雁とひがし茶屋街の料亭旅館、新潟長岡「越乃雪」越後長岡藩御用達の淡雪菓子と蓬平温泉、島根松江「山川」不昧公の風流落雁と宍道湖・玉造温泉。茶の湯文化が息づく城下町の名宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-wagashi-tea-culture-stay',
    siteName: 'トラベル総合ナビ',
    locale: 'ja_JP',
    type: 'article',
  },
};

const OFFICIAL_FURUSATO_URL = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-semibold mb-4 border border-amber-400/30">
            <span>✨</span>
            <span>日本三大銘菓・茶の湯文化特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-sm">
            日本三大銘菓＆歴史茶の湯・老舗和菓子めぐり風雅宿×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-4xl">
            口の中でふわりとほどける極上の和三盆。大名茶人の美意識が息づく城下町を味わう
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 2026年最新検証済み</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 楽天ふるさと納税宿泊クーポン対象</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 実在確認済み公式提携</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            はじめに
          </h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            日本の歴史と伝統が育んだ三大銘菓――加賀前田家御用達の「長生殿（石川県金沢市・森八）」、長岡藩主が名付けた越後の雪解け菓子「越乃雪（新潟県長岡市・大和屋）」、そして大名茶人・松平不昧公が茶席菓子として定めた「山川（島根県松江市・風流堂）」。いずれも数百年の歴史を刻み、徳川将軍家や藩主に献上された格式高い名菓です。これら三大銘菓が生まれた街は、茶の湯文化が深く庶民にまで根づき、風情ある武家屋敷や石畳の路地、そして美肌の名湯が湧く名宿が揃っています。お抹茶と名菓を味わい、洗練されたおもてなしに憩う大人の風雅旅を楽天ふるさと納税で叶えましょう。
          </p>

          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-1">
                  楽天ふるさと納税「トラベルクーポン」賢い活用法
                </h3>
                <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                  寄付額の最大30%分の宿泊クーポンが付与され、寄付当日から予約に即時利用可能。通常の楽天ポイント還元やお買い物マラソンとも併用できるため、実質自己負担2,000円で憧れの高級リゾートや名湯旅館に泊まれる最強の制度です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Merits */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-600 pl-4">
            この特集ならではの3大魅力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div key="0" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">老舗本店の出来立て銘菓と本格茶室での一服を体験</h3>
              <p className="text-slate-600 text-sm leading-relaxed">宿の茶室や老舗菓銘店で、お抹茶とともに出来立ての三大銘菓を味わう極上の和み時間を堪能できます。</p>
            </div>
            
            <div key="1" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">名湯・玉造温泉や蓬平温泉、ひがし茶屋街の情緒ある町家旅館に宿泊</h3>
              <p className="text-slate-600 text-sm leading-relaxed">美肌作用の高い歴史ある名湯や、加賀友禅・格子戸の町並みに佇む上質な空間で心休まる滞在が叶います。</p>
            </div>
            
            <div key="2" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">ふるさと納税で老舗料亭旅館の贅沢会席をお得に満喫</h3>
              <p className="text-slate-600 text-sm leading-relaxed">のどぐろ、越後牛、松葉ガニや宍道湖七道など、城下町ならではの洗練された郷土割烹会席をお得に味わえます。</p>
            </div>
            
          </div>
        </section>

        {/* Hotel Items by Theme */}
        
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              石川県金沢市ふるさと納税：加賀百万石の栄華を伝える日本三大銘菓「長生殿」とひがし茶屋街・浅野川沿いの風情名宿
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              加賀三代藩主前田利常公が小堀遠州と創案した和三盆落雁の最高峰。金箔工芸や友禅の技が光る金沢の街を巡り、宿では加賀会席や治部煮を味わいながら加賀茶道のおもてなしに浸れます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="4707" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4707/4707.jpg"
                  alt="加賀屋グループ　料理旅館　金沢茶屋"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.68 <span className="text-slate-500 font-normal">(182件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4707" target="_blank" rel="noopener noreferrer">
                      加賀屋グループ　料理旅館　金沢茶屋
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 石川県金沢市本町2-17-21
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ金沢駅兼六園口より徒歩３分。
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    金沢駅から徒歩3分の料理旅館。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥25,300〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4707"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div key="547" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/547/547.jpg"
                  alt="アパホテル〈金沢駅前〉"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.11 <span className="text-slate-500 font-normal">(8474件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D547" target="_blank" rel="noopener noreferrer">
                      アパホテル〈金沢駅前〉
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 石川県金沢市広岡1-9-28
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 「金沢駅」西口を出て左手すぐ（徒歩1分）小松空港から金沢駅直通バスで40分　東京駅⇔金沢駅間 北陸新幹線にて2時間30分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    コンパクトながらも機能性を追求した金沢駅目前の大浴殿付ホテル！ビジネス、観光に最適な駅前立地！
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥4,617〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D547"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div key="14132" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14132/14132.jpg"
                  alt="旅館　橋本屋"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.15 <span className="text-slate-500 font-normal">(295件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14132" target="_blank" rel="noopener noreferrer">
                      旅館　橋本屋
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 石川県金沢市十一屋町3-30
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 金沢駅～車20分・9番乗り場からバス20分（「26番」系統のバス以外）渋滞時は所要時間が延びます。
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ◆創業100周年◆満足度◎治部煮など金沢美食と心温まるサービスで日常の疲れを癒し、贅沢なひとときを♪
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥10,000〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D14132"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
          
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              新潟県長岡市ふるさと納税：越後長岡藩御用達「越乃雪」と錦鯉の里・美肌ととろみのいで湯「蓬平温泉」旅館
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              長岡藩主牧野忠精公の病を癒やしたと伝えられる銘菓「越乃雪」。雪国新潟の極上餅米と四国和三盆が織りなす口溶けを楽しみ、山あいに湧く「美人の湯」蓬平温泉で芯から温まる静寂の温泉旅です。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="109516" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/109516/109516.jpg"
                  alt="よもぎひら温泉　和泉屋"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.62 <span className="text-slate-500 font-normal">(353件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109516" target="_blank" rel="noopener noreferrer">
                      よもぎひら温泉　和泉屋
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 新潟県長岡市蓬平町甲1508-2
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 長岡駅よりお車にて２５分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    よもぎひら温泉は、越後長岡を南東に抜け、 豊かな自然と渓流に抱かれた 山あいに湧く静かな温泉地です。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥14,080〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D109516"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
          
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              島根県松江市ふるさと納税：不昧公の茶の湯文化が息づく日本三大銘菓「山川」と宍道湖の夕日・美肌の神湯「玉造温泉」名宿
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              「赤と白」の鮮やかな意匠で紅葉と川の流れを表現した不昧公好みの銘菓。国宝松江城下の堀川めぐりや宍道湖のしじみ・旬の日本海海鮮を味わい、出雲風土記にも記された美肌の玉造温泉で潤う至福のステイです。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="13938" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13938/13938.jpg"
                  alt="玉造温泉　保性館"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 3.88 <span className="text-slate-500 font-normal">(777件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13938" target="_blank" rel="noopener noreferrer">
                      玉造温泉　保性館
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 島根県松江市玉湯町玉造1191-1
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 山陰道 玉造ICより車で約10分/出雲縁結び空港より車で約30分/JR玉造温泉駅よりタクシーで約10分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    開業以来300年以上の歴史をもつ当館-  歳月が築き上げた日本旅館の伝統と、いにしえの温泉ロマンの宿
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥9,400〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D13938"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div key="106267" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/106267/106267.jpg"
                  alt="玉造温泉　～曲水の庭～　ホテル玉泉"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.3 <span className="text-slate-500 font-normal">(1940件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D106267" target="_blank" rel="noopener noreferrer">
                      玉造温泉　～曲水の庭～　ホテル玉泉
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 島根県松江市玉湯町玉造53-2
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 出雲大社から車で約40分■最寄バス停(温泉下)より徒歩3分■JR玉造温泉駅より送迎有（3日前迄に要連絡）
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    2025年、76室を「畳にベッド」の上質な客室へと改修し、大浴場に「整いスペース」を新設しました！
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥6,800〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D106267"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div key="32082" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32082/32082.jpg"
                  alt="玉造温泉　ＲＹＯＫＡＮ　ＯＱＯＱ　（旧：玉井別館）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.28 <span className="text-slate-500 font-normal">(1480件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D32082" target="_blank" rel="noopener noreferrer">
                      玉造温泉　ＲＹＯＫＡＮ　ＯＱＯＱ　（旧：玉井別館）
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 島根県松江市玉湯町玉造1247
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 山陰自動車道：松江玉造ICより車で10分／ＪＲ山陰本線：玉造温泉駅よりタクシーで5分／出雲大社から国道９号線、車で45分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ＜2025年9月館内一部リニューアル＞オールインクルーシブとキッズスペースで大人もお子様も大歓迎！
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥7,150〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D32082"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
          

        {/* Global CTA Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-bold mb-6 border border-amber-400/30">
            <span>🎟️</span>
            <span>楽天ふるさと納税×楽天トラベル 公式連携</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            ふるさと納税で賢くお得に、憧れの極上宿へ
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            返礼品の宿泊クーポンは翌年以降の旅行にも活用でき、ポイント還元もフル適用。実質2,000円の自己負担でワンランク上の滞在をお楽しみください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <a
              href={OFFICIAL_FURUSATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg hover:brightness-105 transition-all transform hover:-translate-y-0.5"
            >
              楽天ふるさと納税で宿を探す
            </a>
          </div>
        </section>

        {/* Cross Links Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <Link
              key="0"
              href="/furusato-tax-sweets-cafe-wagashi-retro-onsen-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                銘菓・和カフェ＆老舗スイーツめぐり温泉宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                金沢・小布施・伊勢の甘味旅。
              </p>
            </Link>
            
            <Link
              key="1"
              href="/furusato-tax-three-great-gardens-heritage-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                日本三名園＆大名庭園を望む老舗旅館×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                兼六園・後楽園・偕楽園の庭園美ステイ。
              </p>
            </Link>
            
            <Link
              key="2"
              href="/furusato-tax-little-edo-kyoto-castle-town-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                小江戸・小京都の風情ある城下町老舗旅館×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                川越・金沢・萩の伝統美を味わう大人旅。
              </p>
            </Link>
            
          </div>
        </section>
      </main>
    </div>
  );
}
