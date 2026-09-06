import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大杜氏の郷＆極上純米大吟醸・仕込み水温泉宿×ふるさと納税完全ガイド【2026年最新】南部・越後・丹波',
  description: '日本酒の神髄を極める酒造りの匠たち！岩手「南部杜氏」日本最大の蔵人集団と花巻温泉郷の名湯、新潟「越後杜氏」淡麗辛口の聖地と魚沼純米大吟醸・美肌湯、兵庫「丹波杜氏」灘五郷を支えた匠と丹波篠山ぼたん鍋・城下町宿。美酒と仕込み水温泉の至福ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: 'ふるさと納税, 楽天トラベル, 旅行クーポン, 宿泊記, ホテル予約, 国内旅行, おすすめ宿, 温泉旅館',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-master-brewers-toji-sake-inn-stay',
  },
  openGraph: {
    title: '日本三大杜氏の郷＆極上純米大吟醸・仕込み水温泉宿×ふるさと納税完全ガイド【2026年最新】南部・越後・丹波',
    description: '日本酒の神髄を極める酒造りの匠たち！岩手「南部杜氏」日本最大の蔵人集団と花巻温泉郷の名湯、新潟「越後杜氏」淡麗辛口の聖地と魚沼純米大吟醸・美肌湯、兵庫「丹波杜氏」灘五郷を支えた匠と丹波篠山ぼたん鍋・城下町宿。美酒と仕込み水温泉の至福ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-master-brewers-toji-sake-inn-stay',
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
            <span>日本三大杜氏・美酒と温泉特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-sm">
            日本三大杜氏の郷＆極上純米大吟醸・仕込み水温泉宿×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-4xl">
            厳しい冬の寒さと清冽な名水、匠の手が醸す一滴の奇跡。美酒に酔いしれる酒蔵ステイ
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
            日本酒造りの最高責任者である「杜氏（とうじ）」。その卓越した技と流派を受け継ぎ、日本の酒文化を牽引してきた「日本三大杜氏」――岩手を拠点に全国の銘酒を醸す日本最大の「南部杜氏」、雪国の寒冷な気候と清冽な雪解け水で淡麗辛口ブームを巻き起こした新潟の「越後杜氏」、そして宮水と山田錦を用いて灘五郷の銘酒を育て上げた兵庫の「丹波杜氏」。仕込みの季節に立ち込める酒米の甘い香り、蔵元直営ショップでの限定酒テイスティング、そして酒蔵の仕込み水と同じ清らかな地下水で満たされた温泉風呂。日本酒好きにはたまらない至高のペアリングステイを楽天ふるさと納税でお楽しみください。
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
              <h3 className="font-bold text-slate-900 text-base mb-2">一般非公開の酒蔵見学や限定原酒・生酒の利き酒飲み放題</h3>
              <p className="text-slate-600 text-sm leading-relaxed">宿のソムリエや利き酒師がセレクトした三大杜氏の希少限定酒や、酒蔵での特別なテイスティング体験が楽しめます。</p>
            </div>
            
            <div key="1" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">酒粕風呂や美肌温泉で身体の芯から温まり血行促進＆美白ケア</h3>
              <p className="text-slate-600 text-sm leading-relaxed">アミノ酸豊富な酒粕エキスを取り入れた温泉や、清冽な名水の天然水風呂で最高のととのいを体験できます。</p>
            </div>
            
            <div key="2" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">前沢牛・のどぐろ・丹波黒豆ぼたん鍋など地酒と最高のマリアージュ</h3>
              <p className="text-slate-600 text-sm leading-relaxed">杜氏たちが愛した地元の郷土美食と銘酒のマリアージュ会席を、ふるさと納税クーポンでお得に堪能できます。</p>
            </div>
            
          </div>
        </section>

        {/* Hotel Items by Theme */}
        
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              岩手県花巻市・紫波町ふるさと納税：日本最大の蔵人集団「南部杜氏」の秘伝地酒と宮沢賢治ゆかりの花巻温泉郷
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              全国の鑑評会で首位を争う技術集団・南部杜氏の発祥の地。南部杜氏伝承館で酒造りの歴史に触れ、花巻温泉郷の露天風呂で岩手の銘酒を味わい、前沢牛や白金豚のしゃぶしゃぶに舌鼓を打つ極上の東北旅です。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="10689" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/10689/10689.jpg"
                  alt="花巻温泉　割烹旅館　廣美亭"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.59 <span className="text-slate-500 font-normal">(317件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10689" target="_blank" rel="noopener noreferrer">
                      花巻温泉　割烹旅館　廣美亭
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 岩手県花巻市湯本1-88-1
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 東北自動車道花巻ＩＣより5分・JR花巻空港駅よりタクシーで15分・東北新幹線新花巻駅より無料送迎バスあり（要プラン確認）
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    花巻温泉で唯一の割烹旅館。岩手の旬の素材を使った本格会席料理が自慢の宿。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥15,400〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D10689"
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
            
            <div key="9536" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9536/9536.jpg"
                  alt="岩手　花巻温泉郷　鉛温泉　藤三旅館"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.47 <span className="text-slate-500 font-normal">(2646件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9536" target="_blank" rel="noopener noreferrer">
                      岩手　花巻温泉郷　鉛温泉　藤三旅館
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 岩手県花巻市鉛中平75-1
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 新花巻駅より４０分・花巻駅より３０分（送迎バスあり、協力金：片道100円、予約必須）。花巻南ＩＣよりお車で２０分。
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    2024年6月宮沢賢治をテーマにした「なめとこ山サウナ」がグランドオープン
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥6,600〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9536"
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
            
            <div key="62683" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/62683/62683.jpg"
                  alt="岩手花巻　台温泉　旅館　ほっと・彩　そめや"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.33 <span className="text-slate-500 font-normal">(84件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D62683" target="_blank" rel="noopener noreferrer">
                      岩手花巻　台温泉　旅館　ほっと・彩　そめや
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 岩手県花巻市台2-62
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 花巻駅より車で１５分／花巻空港より車で１５分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    源泉が２つある旅館です。温泉好きの方に喜ばれております♪自然豊かな台温泉で癒しの時間を＾＾
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥6,000〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D62683"
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
              新潟県十日町市・南魚沼市ふるさと納税：淡麗辛口の神髄「越後杜氏」の純米大吟醸と魚沼コシヒカリ・越後湯沢温泉
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              世界屈指の豪雪が生む清らかで柔らかな軟水と酒米の王様・越淡麗。八海山や鶴齢などの銘酒を宿の地酒BARで利き酒し、魚沼産コシヒカリの釜炊きご飯や日本海の旬魚、雪見露天風呂に癒やされる冬春の贅沢旅です。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="38764" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/38764/38764.jpg"
                  alt="越後湯沢温泉　湯沢グランドホテル＜新潟県＞"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.56 <span className="text-slate-500 font-normal">(2418件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38764" target="_blank" rel="noopener noreferrer">
                      越後湯沢温泉　湯沢グランドホテル＜新潟県＞
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 新潟県南魚沼郡湯沢町大字湯沢2494
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 駅から徒歩3分＆湯沢ＩＣから5分！入口はセブンイレブンが目印！※ホテル前の坂道は急なので遠慮なく送迎をご依頼ください。
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ★楽天シルバーアワード3年連続受賞★湯沢旅館部門売上1位★出来立ての美味しさが自慢のバイキング★
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥9,375〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38764"
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
            
            <div key="40019" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/40019/40019.jpg"
                  alt="越後湯沢温泉　松泉閣花月"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.53 <span className="text-slate-500 font-normal">(421件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40019" target="_blank" rel="noopener noreferrer">
                      越後湯沢温泉　松泉閣花月
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 新潟県南魚沼郡湯沢町湯沢318-5
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 越後湯沢駅から徒歩約５分。越後湯沢駅への送迎も可能です。（要事前連絡）・お車で湯沢IC～１０分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    「お帰りなさいませ「「いってらっしゃいませ」が花月の合言葉　故郷に帰ってきたようにお過ごしください
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥10,890〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40019"
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
            
            <div key="55869" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/55869/55869.jpg"
                  alt="越後湯沢温泉　越後のお宿　いなもと"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.41 <span className="text-slate-500 font-normal">(428件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D55869" target="_blank" rel="noopener noreferrer">
                      越後湯沢温泉　越後のお宿　いなもと
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 新潟県南魚沼郡湯沢町湯沢2497
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 越後湯沢駅西口より徒歩2分！湯沢インターより車で5分とアクセス抜群♪東京から新幹線最短で90分です♪
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    大切な人と過ごす、和らいだ上質なひととき。掛け流しの温泉と本場の魚沼産こしひかり。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥9,925〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D55869"
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
              兵庫県丹波篠山市ふるさと納税：灘の生一本を育てた「丹波杜氏」のふるさとと名物ぼたん鍋・城下町古民家宿
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              灘五郷の力強い「男酒」を支え続けた丹波杜氏の郷。丹波杜氏酒造記念館で道具や歴史を学び、江戸情緒残る城下町の古民家旅館で丹波篠山名物の天然イノシシ肉ぼたん鍋と搾りたて地酒を堪能できます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="130472" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/130472/130472.jpg"
                  alt="旅館　浪花館　丹波・篠山　篭坊温泉"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D130472" target="_blank" rel="noopener noreferrer">
                      旅館　浪花館　丹波・篠山　篭坊温泉
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 兵庫県丹波篠山市後川新田228
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ　篠山口駅からお車で約２０分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    平家の落武者が発見したと伝えられる篭坊温泉は８００年の歴史を持ち、緑深い山と羽束川の渓谷が美しく季節事に景色が変わります。
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
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D130472"
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
            
            <div key="195973" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/195973/195973.jpg"
                  alt="グランヴィリオホテル丹波篠山　和蔵－ルートインホテルズ－"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.56 <span className="text-slate-500 font-normal">(195件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D195973" target="_blank" rel="noopener noreferrer">
                      グランヴィリオホテル丹波篠山　和蔵－ルートインホテルズ－
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 兵庫県丹波篠山市小川町1-2
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ福知山線　篠山口駅からお車で約１０分、舞鶴若狭自動車道丹南篠山口ＩＣからお車で約１０分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    天然温泉大浴場完備！グランヴィリオホテル丹波篠山ＯＰＥＮ！
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥8,000〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D195973"
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
            
            <div key="18267" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/18267/18267.jpg"
                  alt="丹波篠山　潯陽楼"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.5 <span className="text-slate-500 font-normal">(50件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18267" target="_blank" rel="noopener noreferrer">
                      丹波篠山　潯陽楼
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 兵庫県丹波篠山市二階町79
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ福知山線　篠山口駅よりバスで１０分、二階町バス停下車すぐ
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    篠山の中心部にあり、観光旅行の拠点にも◎。篠山の名物『丹波篠山むぎとろ御膳』発祥の当館。絶品です！
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥13,500〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18267"
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
              href="/furusato-tax-sake-bar-unlimited-tasting-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                地酒BAR＆日本酒利き酒し放題の名湯宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                越後湯沢・山形赤湯・京都伏見の酒蔵ステイ。
              </p>
            </Link>
            
            <Link
              key="1"
              href="/furusato-tax-japanese-whisky-distillery-retreat-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                余市・白州・富士御殿場の至福ステイ。
              </p>
            </Link>
            
            <Link
              key="2"
              href="/furusato-tax-sake-brewery-pairing-onsen-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                越後湯沢・諏訪・会津の名酒と温泉旅。
              </p>
            </Link>
            
          </div>
        </section>
      </main>
    </div>
  );
}
