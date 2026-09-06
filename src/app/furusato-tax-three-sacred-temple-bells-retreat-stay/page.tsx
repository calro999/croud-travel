import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三名鐘＆歴史の響き・古刹めぐり宿坊・名旅館×ふるさと納税完全ガイド【2026年最新】三井寺・神護寺・観世音寺',
  description: '魂を揺さぶる音色と千数百年の静寂！滋賀「三井寺（園城寺）」近江八景・三井の晩鐘と琵琶湖を望む雄琴温泉・国宝宿坊、京都「神護寺」高雄の深山幽谷と清滝川沿い料理旅館、福岡「観世音寺」日本最古の国宝梵鐘と万葉集ゆかりの二日市温泉。日本三名鐘の歴史古刹を楽天ふるさと納税宿泊クーポンでお得に巡る完全ガイド。',
  keywords: 'ふるさと納税, 楽天トラベル, 旅行クーポン, 宿泊記, ホテル予約, 国内旅行, おすすめ宿, 温泉旅館',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-sacred-temple-bells-retreat-stay',
  },
  openGraph: {
    title: '日本三名鐘＆歴史の響き・古刹めぐり宿坊・名旅館×ふるさと納税完全ガイド【2026年最新】三井寺・神護寺・観世音寺',
    description: '魂を揺さぶる音色と千数百年の静寂！滋賀「三井寺（園城寺）」近江八景・三井の晩鐘と琵琶湖を望む雄琴温泉・国宝宿坊、京都「神護寺」高雄の深山幽谷と清滝川沿い料理旅館、福岡「観世音寺」日本最古の国宝梵鐘と万葉集ゆかりの二日市温泉。日本三名鐘の歴史古刹を楽天ふるさと納税宿泊クーポンでお得に巡る完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-sacred-temple-bells-retreat-stay',
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
            <span>日本三名鐘・歴史古刹特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-sm">
            日本三名鐘＆歴史の響き・古刹めぐり宿坊・名旅館×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-4xl">
            「勢いの東大寺、音の三井寺、銘の神護寺」。千年の音色に心を澄ませる静寂のマインドフルネス旅
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
            古来より日本人の心に響き渡る梵鐘（釣り鐘）。その中でも美しさ・音色の深さ・歴史的由緒から「日本三名鐘（あるいは四大名鐘）」と讃えられてきたのが、滋賀・三井寺の「三井の晩鐘」、京都・高雄神護寺の「神護寺の鐘」、そして福岡・太宰府観世音寺の「日本最古の国宝梵鐘」です。深緑や紅葉に包まれる境内を歩き、澄み渡る鐘の音に耳を傾ける時間は、現代のストレスから完全に心を解き放つ最上のリトリートとなります。周辺の歴史ある名湯温泉旅館や宿坊に泊まり、精進料理や季節の会席に舌鼓を打つ大人旅を楽天ふるさと納税でお楽しみください。
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
              <h3 className="font-bold text-slate-900 text-base mb-2">朝のお勤めや鐘の音を独り占めできる境内宿坊＆至近の名門宿</h3>
              <p className="text-slate-600 text-sm leading-relaxed">一般の参拝客が訪れる前の澄んだ早朝に、古刹の静寂と荘厳な読経・鐘の響きを心静かに体感できます。</p>
            </div>
            
            <div key="1" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">近江牛・京料理川床・博多前会席など歴史が育んだ美味の饗宴</h3>
              <p className="text-slate-600 text-sm leading-relaxed">各地域の風土と歴史が磨き上げた極上の郷土懐石や滋味深い精進料理を個室で贅沢に味わえます。</p>
            </div>
            
            <div key="2" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">高単価な文化財宿坊や老舗温泉宿もふるさと納税クーポンでスマート還元</h3>
              <p className="text-slate-600 text-sm leading-relaxed">一日一組限定の歴史的宿坊や老舗料理旅館のプレミアムプランを最大30%オフでお得に予約できます。</p>
            </div>
            
          </div>
        </section>

        {/* Hotel Items by Theme */}
        
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              滋賀県大津市ふるさと納税：近江八景「三井の晩鐘」の残響と琵琶湖の美景・天台寺門宗総本山三井寺＆おごと温泉宿
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              その音色の美しさから「残響の三井寺」と謳われ、弁慶の引き摺り鐘の伝説でも名高い名鐘。琵琶湖を一望する絶景と、国宝金堂や宿坊での特別な座禅体験、美肌のおごと温泉露天風呂を満喫する旅です。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="186850" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/186850/186850.jpg"
                  alt="和空　三井寺／民泊"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D186850" target="_blank" rel="noopener noreferrer">
                      和空　三井寺／民泊
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 滋賀県大津市園城寺町246　和空　三井寺　Ｗａｑｏｏ　Ｍｉｉｄｅｒａ
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 三井寺駅から徒歩で約３分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    　
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥63,800〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D186850"
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
            
            <div key="12595" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/12595/12595.jpg"
                  alt="ラックホテル大津石山"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 3.98 <span className="text-slate-500 font-normal">(1754件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12595" target="_blank" rel="noopener noreferrer">
                      ラックホテル大津石山
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 滋賀県大津市粟津町9-21
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 JR石山駅南出口徒歩2分。JR京都駅まで約13分、大阪駅まで43分。大津ICから約10分。
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ＪＲ京都駅から新快速利用で3駅13分　JR・京阪石山駅前徒歩2分
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥3,040〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D12595"
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
            
            <div key="16068" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/16068/16068.jpg"
                  alt="びわ湖大津プリンスホテル"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.43 <span className="text-slate-500 font-normal">(5004件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16068" target="_blank" rel="noopener noreferrer">
                      びわ湖大津プリンスホテル
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 滋賀県大津市におの浜4-7-7
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ東海道本線（琵琶湖線）大津駅から無料シャトルバスで10分／名神高速道路・大津ＩＣより3.7ｋm（平常時10分）
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ＪＲ京都駅から2駅10分のリゾート　38階建て、高層階のレストラン、全客室からレイクビューを満喫
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥5,000〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16068"
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
              京都府京都市右京区ふるさと納税：銘の神護寺と称される国宝梵鐘・空海ゆかりの山岳寺院と高雄清滝川の料理旅館
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              平安初期の作で「銘の神護寺」として名高い国宝の鐘。紅葉の名所として名高い高雄の渓谷美を愛で、清滝川のせせらぎを聞きながら川床料理や湯豆腐、旬の京会席を味わう風雅なひとときを過ごせます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="4775" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4775/4775.jpg"
                  alt="高雄観光ホテル"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.32 <span className="text-slate-500 font-normal">(436件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4775" target="_blank" rel="noopener noreferrer">
                      高雄観光ホテル
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 京都府京都市右京区梅ヶ畑高雄町5
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ京都駅からバスで５０分。
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    京の奥座敷・高雄で、桜・蛍・紅葉・雪景色の四季を愛でながら、夏限定の川床料理と旬の京懐石を愉しむ宿
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥18,200〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D4775"
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
            
            <div key="130122" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/130122/130122.jpg"
                  alt="高雄錦水亭"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D130122" target="_blank" rel="noopener noreferrer">
                      高雄錦水亭
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 京都府京都市右京区梅ヶ畑殿畑町40
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 JR山陰本線花園駅下車、車で15分／名神高速道京都南ICより国道１６２号線経由（約４０分）
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    四季の美食と貸切風呂を愉しむ。春は桜、夏期は蛍鑑賞や納涼床、秋は紅葉、冬は雪景色。移ろう四季を満喫。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥28,600〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D130122"
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
            
            <div key="38915" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/38915/38915.jpg"
                  alt="もみぢ家本館　高雄山荘"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.25 <span className="text-slate-500 font-normal">(40件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38915" target="_blank" rel="noopener noreferrer">
                      もみぢ家本館　高雄山荘
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 京都府京都市右京区梅ヶ畑西ノ畑町2
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ花園駅からタクシーで約１５分。予約制の無料送迎バスあり。詳しくはお問合せ下さいませ。
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    四季折々の移ろいを感じる宿。夏季期間は別館川床での夕食となり、舞妓さんによる京舞鑑賞もご覧頂けます。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥24,400〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38915"
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
              福岡県太宰府市・筑紫野市ふるさと納税：菅原道真公も詠んだ日本最古の国宝梵鐘「観世音寺」と万葉集の湯・二日市温泉
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              白鳳時代の鋳造と伝えられ、国宝指定を受ける日本最古の梵鐘。太宰府天満宮と観世音寺の歴史ロマンに触れ、万葉集にも詠まれた博多の奥座敷・二日市温泉の名湯旅館で極上の博多会席を堪能できます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="38630" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/38630/38630.jpg"
                  alt="二日市温泉　大丸別荘"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.69 <span className="text-slate-500 font-normal">(485件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38630" target="_blank" rel="noopener noreferrer">
                      二日市温泉　大丸別荘
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 福岡県筑紫野市湯町1-20-1
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 「福岡空港」より高速バスで約30分　「博多駅」よりＪＲ線利用で20分　「福岡天神駅」より西鉄電車利用で30分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ◇博多駅から20分◇源泉かけ流し天然温泉◇和の心を継ぐ宿【福岡】◇
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥11,617〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38630"
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
            
            <div key="80686" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/80686/80686.jpg"
                  alt="二日市温泉　大観荘"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.09 <span className="text-slate-500 font-normal">(812件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D80686" target="_blank" rel="noopener noreferrer">
                      二日市温泉　大観荘
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 福岡県筑紫野市湯町1-12-1
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ　二日市駅から車で５分／西鉄　二日市駅から車で８分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    万葉の香りといで湯の里　二日市温泉　大観荘
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥7,650〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D80686"
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
            
            <div key="44834" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/44834/44834.jpg"
                  alt="二日市温泉　扇屋旅館＜福岡県＞"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 3.67 <span className="text-slate-500 font-normal">(36件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44834" target="_blank" rel="noopener noreferrer">
                      二日市温泉　扇屋旅館＜福岡県＞
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 福岡県筑紫野市湯町2-5-7
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 JR　二日市駅より車で５分／西鉄大牟田線　二日市駅よりバスで１０分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    真心こもったサービス。家庭的な温かい宿で旅の疲れを癒してください。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      プラン詳細参照
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D44834"
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
              href="/furusato-tax-temple-shukubo-shojin-mindfulness-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                古刹宿坊＆本格精進料理ステイ×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                高野山・善光寺・京都寺院のマインドフルネス旅。
              </p>
            </Link>
            
            <Link
              key="1"
              href="/furusato-tax-ise-kumano-sacred-power-spot-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                お伊勢参り＆熊野古道×聖地巡礼宿ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                伊勢神宮・熊野三山・出雲大社の祈願ステイ。
              </p>
            </Link>
            
            <Link
              key="2"
              href="/furusato-tax-three-great-festivals-heritage-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                日本三大美祭＆歴史山鉾の街の老舗旅館×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                高山祭・秩父夜祭・祇園祭の伝統美ステイ。
              </p>
            </Link>
            
          </div>
        </section>
      </main>
    </div>
  );
}
