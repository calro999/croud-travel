import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '日本三名瀑＆ダイナミック滝見露天風呂宿×ふるさと納税完全ガイド【2026年最新】那智の滝・華厳の滝・袋田の滝の豪快名湯',
  description: '日本屈指の落差と水量を誇る名瀑へ！世界遺産和歌山「那智の滝」と南紀勝浦温泉、栃木日光中禅寺湖「華厳の滝」と乳白色硫黄泉、茨城奥久慈「袋田の滝」の四段名瀑と美肌の湯。轟音とマイナスイオンに包まれる滝見露天風呂ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: [
    '楽天ふるさと納税',
    'ふるさと納税 宿泊クーポン',
    '楽天トラベル ふるさと納税',
    '高級温泉旅館',
    '露天風呂付き客室',
    '2026年旅行'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-great-waterfalls-onsen-stay/'
  },
  openGraph: {
    title: '日本三名瀑＆ダイナミック滝見露天風呂宿×ふるさと納税完全ガイド【2026年最新】那智の滝・華厳の滝・袋田の滝の豪快名湯',
    description: '日本屈指の落差と水量を誇る名瀑へ！世界遺産和歌山「那智の滝」と南紀勝浦温泉、栃木日光中禅寺湖「華厳の滝」と乳白色硫黄泉、茨城奥久慈「袋田の滝」の四段名瀑と美肌の湯。轟音とマイナスイオンに包まれる滝見露天風呂ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-great-waterfalls-onsen-stay',
    type: 'article',
    siteName: '旅宿クラウド'
  }
};

export default function FurusatoFeaturePage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>日本三名瀑・滝見露天風呂特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            日本三名瀑＆ダイナミック滝見露天風呂宿×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            日本古来の自然崇拝の象徴であり、圧倒的な落差と荘厳さを誇る「日本三名瀑」――和歌山の那智の滝、栃木日光の華厳の滝、茨城の袋田の滝。天空から真っ直ぐに突き刺さる白糸のような直瀑、断崖を四段にわたって滑り落ちる氷瀑など、季節ごとに表情を変える名瀑の迫力は息をのむ美しさです。滝見の散策で心地よい疲労を覚えた後は、周辺の歴史ある名湯宿で湯船に浸かり、地域の滋味を味わう――そんな心洗われるリフレッシュ旅を楽天ふるさと納税でお得に実現しましょう。
          </p>

          {/* 公式キャンペーンCTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/30 backdrop-blur max-w-2xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">
              楽天ふるさと納税なら寄附額の最大30%が宿泊クーポンに！
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
              寄附翌日には楽天トラベルで使えるクーポンが付与。有効期限はたっぷり3年間あるため、次の大型連休や記念日旅行にも安心して活用いただけます。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* メリット3選 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-stone-800">
        <h2 className="text-2xl sm:text-3xl font-black text-amber-100 text-center mb-10">
          轟音とともに落ちる清冽な飛瀑と立ち込める水煙。大自然の神気とマイナスイオンに満たされる湯浴み
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="0" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              滝の轟音と水しぶきを肌で感じる絶景露天風呂＆展望テラス
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              マイナスイオンが充満する渓流沿いの露天風呂や、客室の展望窓から滝を望む特別なロケーションで、日常の疲れを完全に浄化できます。
            </p>
          </div>
          
          <div key="1" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              生マグロ・奥久慈しゃも・湯波料理など名瀑の郷が育む郷土会席
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              勝浦の獲れたて生マグロ尽くし、大子の肉質引き締まる奥久慈軍鶏鍋、日光の伝統ある湯波会席など、水清き里の馳走を堪能できます。
            </p>
          </div>
          
          <div key="2" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              ふるさと納税宿泊クーポンで名瀑周辺の老舗料理旅館をお得に予約
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              寄附額の最大30%がクーポンとして還元されるため、ハイシーズンの紅葉期や新緑期でも賢く贅沢に宿泊できます。
            </p>
          </div>
          
        </div>
      </section>

      {/* エリア別 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          
          <div key="nachi_waterfall" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                和歌山県那智勝浦町ふるさと納税：落差日本一133m・世界遺産「那智の滝」と南紀勝浦温泉の生マグロ会席
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                熊野那智大社の別宮・飛瀧神社の御神体として尊崇される那智の滝。世界遺産熊野古道の祈りの道を歩き、勝浦港で水揚げされた新鮮な生まぐろ料理と硫黄香る名湯に癒やされる聖地リトリートです。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="68247"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/68247/68247.jpg"
                    alt="南紀勝浦温泉　くつろぎの宿　料理旅館　万清楼"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.4 (823件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    和歌山県東牟婁郡那智勝浦町勝浦448
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    南紀勝浦温泉　くつろぎの宿　料理旅館　万清楼
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    【ホテル浦島の温泉も利用可】紀州勝浦産の生まぐろや南紀の食材を使った会席料理をお楽しみください。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥14,410〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D68247"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="kegon_waterfall" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                栃木県日光市ふるさと納税：中禅寺湖の湖水が一気に落下する大瀑布「華厳の滝」と日光温泉郷名宿
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                高さ97mの岸壁を一気に落下する豪快な華厳の滝。エレベーターで行く観瀑台からの迫力ある景観を堪能し、日光東照宮ゆかりの格式高い宿で湯波料理やとちぎ和牛会席を味わえます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="168189"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/168189/168189.jpg"
                    alt="日光東照宮晃陽苑"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4 (310件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    栃木県日光市瀬尾1640-14
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    日光東照宮晃陽苑
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    4万坪（東京D約2個半）の敷地の中に、四季折々の自然とゆったりと時間を感じられる日光東照宮ゆかりの宿
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥10,973〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D168189"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="149268"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/149268/149268.jpg"
                    alt="湯西川温泉　ホテル湯西川（伊東園ホテルズ）"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.03 (916件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    栃木県日光市湯西川597
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    湯西川温泉　ホテル湯西川（伊東園ホテルズ）
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    平家の落人伝説の残る温泉地。Ph9.2のアルカリ性単純泉『美肌の湯』と言われています。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥6,248〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D149268"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="31366"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/31366/31366.jpg"
                    alt="鬼怒川温泉　鬼怒川グランドホテル　夢の季（ゆめのとき）"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.54 (760件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    栃木県日光市鬼怒川温泉大原1021
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    鬼怒川温泉　鬼怒川グランドホテル　夢の季（ゆめのとき）
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    【９つの湯めぐり】緑美しい山並みに包まれて、四季の味わいと天然温泉で喧騒から離れた癒しの季に。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥14,300〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31366"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="fukuroda_waterfall" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                茨城県大子町ふるさと納税：西行法師も絶賛した「四度の滝」袋田の滝と奥久慈しゃも・袋田温泉
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                長さ120m・幅73mの巨岩を四段に落下する袋田の滝。冬の完全氷結「氷瀑」でも名高く、アルカリ性単純温泉の柔らかな湯に浸かりながら、名物奥久慈しゃもや鮎の塩焼きに舌鼓を打てます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="37878"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/37878/37878.jpg"
                    alt="袋田温泉　思い出浪漫館"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.46 (1981件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    茨城県久慈郡大子町袋田978
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    袋田温泉　思い出浪漫館
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    【オールインクルーシブ】日本三名瀑・袋田の滝まで車で5分。奥久慈さとやまバイキングと天然温泉の宿。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥9,000〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D37878"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
        </div>
      </section>

      {/* 下部CTAバナー */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-600/30 via-orange-600/20 to-stone-900 border border-amber-500/40 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-amber-100 mb-4">
              ふるさと納税の宿泊クーポンでお得に極上の旅へ
            </h2>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              寄附上限額の範囲内なら、実質自己負担2,000円で憧れの特等席宿やリゾートに宿泊可能。楽天ポイント還元も併用して、賢く贅沢なひとときをお過ごしください。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 関連記事 内部リンク */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-stone-800">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-200 mb-6">
          あわせて読みたい！テーマ別ふるさと納税トラベルガイド
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Link
            key="0"
            href="/furusato-tax-waterfall-river-gorge-healing-onsen-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                奥入瀬渓流・天城湯ヶ島・作並温泉の滝見露天宿。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="1"
            href="/furusato-tax-three-great-gorges-canyon-onsen-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                日本三大峡谷＆巨岩奇勝パノラマ露天風呂宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                清津峡・黒部峡谷・大杉谷の絶景名湯。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="2"
            href="/furusato-tax-ise-kumano-sacred-power-spot-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                お伊勢参り＆熊野古道×聖地巡礼・門前宿ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                伊勢神宮・熊野三山・出雲大社の祈願ステイ。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
        </div>
      </section>
    </div>
  );
}
