import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大カルスト台地＆白亜の石灰岩パノラマ高原リゾート×ふるさと納税完全ガイド【2026年最新】秋吉台・四国カルスト・平尾台',
  description: 'まるで異世界！緑の草原に無数の白い羊が群れる絶景！山口「秋吉台」日本最大級カルストと大鍾乳洞＆湯田温泉、愛媛高知「四国カルスト」標高1400m天空の道と満天星空リゾート、福岡「平尾台」国の天然記念物ピナクル奇勝と小倉・門司港クラシックホテル。壮大なカルスト高原を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: 'ふるさと納税, 楽天トラベル, 旅行クーポン, 宿泊記, ホテル予約, 国内旅行, おすすめ宿, 温泉旅館',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-three-karst-plateaus-mountain-resort-stay',
  },
  openGraph: {
    title: '日本三大カルスト台地＆白亜の石灰岩パノラマ高原リゾート×ふるさと納税完全ガイド【2026年最新】秋吉台・四国カルスト・平尾台',
    description: 'まるで異世界！緑の草原に無数の白い羊が群れる絶景！山口「秋吉台」日本最大級カルストと大鍾乳洞＆湯田温泉、愛媛高知「四国カルスト」標高1400m天空の道と満天星空リゾート、福岡「平尾台」国の天然記念物ピナクル奇勝と小倉・門司港クラシックホテル。壮大なカルスト高原を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-three-karst-plateaus-mountain-resort-stay',
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
            <span>日本三大カルスト・高原リゾート特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-sm">
            日本三大カルスト台地＆白亜の石灰岩パノラマ高原宿×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-4xl">
            エメラルドグリーンの草原に点在する純白の石灰岩。地球のダイナミズムを体感する高原ステイ
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
            太古の昔、サンゴ礁が隆起して生まれた「日本三大カルスト」――日本最大級の広さを誇り地下に巨大鍾乳洞を秘める山口県「秋吉台」、四国山地の尾根沿いに延びる天空のドライブルートとして名高い愛媛・高知県「四国カルスト」、そしてススキの大草原に無数の白いピナクル（石灰岩柱）が林立する福岡県「平尾台」。緑のじゅうたんに白い羊の群れが戯れているかのような「羊群原（ようぐんばる）」のパノラマは、日本国内とは思えない壮大なスケールを誇ります。爽快な高原ドライブやハイキングを楽しんだ後は、星空が広がる山岳ロッジや周辺の名湯温泉宿でゆったりと癒やされる非日常ステイを楽天ふるさと納税でお楽しみください。
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
              <h3 className="font-bold text-slate-900 text-base mb-2">360度見渡す限りの大パノラマと神秘的な大鍾乳洞探検</h3>
              <p className="text-slate-600 text-sm leading-relaxed">秋芳洞や千仏鍾乳洞などの巨大地下洞窟探検から、空と雲が間近に迫る絶景稜線ドライブまで多彩なアクティビティが揃います。</p>
            </div>
            
            <div key="1" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">標高1,000メートル超の高原で体験する満天の天の川と雲海</h3>
              <p className="text-slate-600 text-sm leading-relaxed">街明かりの届かない澄んだ高原の夜空に広がる無数の星々や、早朝の幻想的な雲海を宿のテラスから鑑賞できます。</p>
            </div>
            
            <div key="2" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">見蘭牛・土佐あかうし・小倉発祥焼きうどんなどご当地ブランド美食</h3>
              <p className="text-slate-600 text-sm leading-relaxed">清涼な高原の空気と豊かな大地で育った極上の和牛ステーキや高原野菜を、ふるさと納税クーポンでお得に堪能できます。</p>
            </div>
            
          </div>
        </section>

        {/* Hotel Items by Theme */}
        
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              山口県美祢市ふるさと納税：特別天然記念物・日本最大のカルスト「秋吉台」と地下の驚異「秋芳洞」＆長門湯本・湯田温泉
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              約3億5千万年前にできたサンゴ礁の化石が広がる大台地。秋芳洞の百枚皿に圧倒された後は、俵山温泉や長門湯本温泉の名湯に浸かり、名物瓦そばや仙崎のイカ、見蘭牛を味わう充実の山口周遊旅です。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="16410" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/16410/16410.jpg"
                  alt="俵山温泉　松屋旅館＜山口県＞"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.5 <span className="text-slate-500 font-normal">(27件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16410" target="_blank" rel="noopener noreferrer">
                      俵山温泉　松屋旅館＜山口県＞
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 山口県長門市俵山5145 俵山温泉
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 山陽本線小月駅よりバスにて１時間/小月ＩＣから（約30分）/美祢ＩＣから（約30分）
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    バリアフリー設備充実の家庭的旅館。pH9.8の秘湯『俵山温泉』！美肌や神経痛に効果的★湯治にも◎
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥5,500〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D16410"
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
            
            <div key="37397" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/37397/37397.jpg"
                  alt="山口県長門市俵山温泉「明治屋旅館」"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.67 <span className="text-slate-500 font-normal">(59件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37397" target="_blank" rel="noopener noreferrer">
                      山口県長門市俵山温泉「明治屋旅館」
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 山口県長門市俵山5127
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 お車…小月I.C.もしくは美祢I.C.（中国自動車道）から約40分 / 電車…ＪＲ美祢線・長門湯本駅よりバスで20分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    町の湯まで徒歩2分。白猿の湯も徒歩圏内ですので街並みをのんびりと歩きながら湯巡りを楽しんで頂けます。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥5,500〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37397"
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
            
            <div key="41864" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/41864/41864.jpg"
                  alt="長門湯本温泉　原田屋旅館"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.36 <span className="text-slate-500 font-normal">(73件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41864" target="_blank" rel="noopener noreferrer">
                      長門湯本温泉　原田屋旅館
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 山口県長門市深川湯本2269
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 美祢線　長門湯本駅より徒歩８分／中国自動車道　美祢ＩＣより３０分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    木の香漂う和風の旅館。掛けながしの天然温泉と女将の心のこもった手料理でおもてなしいたします。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥14,300〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D41864"
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
              高知県檮原町・愛媛県久万高原町ふるさと納税：標高1400m天空のスカイライン「四国カルスト天狗高原」と星降る雲上ホテル
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              愛媛と高知の県境尾根を走る奇跡の絶景ロード。白い石灰岩と放牧牛が織りなす牧歌的風景に癒やされ、隈研吾建築が並ぶ檮原町の宿や清流四万十川沿いの温泉ロッジで極上の田舎時間を満喫できます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="182827" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182827/182827.jpg"
                  alt="遊山四万十　せいらんの里"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.81 <span className="text-slate-500 font-normal">(79件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D182827" target="_blank" rel="noopener noreferrer">
                      遊山四万十　せいらんの里
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 高知県高岡郡津野町船戸1321
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 土佐新荘駅より車で約３０分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    奥四万十のシンプルでスローなくつろぎ時間／地元のお母ちゃんが丁寧に作るお料理と故郷のようなおもてなし
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥6,400〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D182827"
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
            
            <div key="164823" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/164823/164823.jpg"
                  alt="ゲストハウス　かみこや"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 5 <span className="text-slate-500 font-normal">(7件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D164823" target="_blank" rel="noopener noreferrer">
                      ゲストハウス　かみこや
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 高知県高岡郡梼原町太田戸1678
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ　須崎駅よりお車にて約６０分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    【一日一組】和紙に触れ、里山に暮らすゲストハウス。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥7,500〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D164823"
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
              福岡県北九州市小倉南区ふるさと納税：国の天然記念物「平尾台ピナクル奇勝」と千仏鍾乳洞＆小倉城下町・門司港クラシックホテル
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              ドリーネと呼ばれる窪地と石灰岩柱が点在する日本三大カルストの一角。清流が流れる千仏鍾乳洞の水深探検を楽しんだ後は、小倉の寿司割烹や門司港レトロのクラシックホテルで上質なステイを堪能できます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            <div key="53365" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/53365/53365.jpg"
                  alt="ベッセルホテル苅田北九州空港（２０２６年３月全室リニューアル）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.45 <span className="text-slate-500 font-normal">(1514件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D53365" target="_blank" rel="noopener noreferrer">
                      ベッセルホテル苅田北九州空港（２０２６年３月全室リニューアル）
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 福岡県京都郡苅田町磯浜町1-5-9
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 【ＪＲ苅田駅東口】850m徒歩10分【北九州空港】11Kmタクシーで12分【苅田北九州空港IC】5Km車で5分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    JR苅田駅から徒歩11分　北九州空港からタクシーで14分　満足の広さ、安心の使いやすさ。
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥3,100〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D53365"
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
            
            <div key="151178" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/151178/151178.jpg"
                  alt="ダイワロイネットホテル小倉駅前"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.43 <span className="text-slate-500 font-normal">(1629件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D151178" target="_blank" rel="noopener noreferrer">
                      ダイワロイネットホテル小倉駅前
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 福岡県北九州市小倉北区魚町1-5-14
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ　小倉駅　小倉城口（南口）より徒歩にて約４分◆JR　博多駅から新幹線で約20分（ひと駅）◆モノレール沿い
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    お得なクーポン配布中！◆ＪＲ小倉駅南口より徒歩４分◆
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥7,000〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D151178"
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
            
            <div key="68680" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68680/68680.jpg"
                  alt="ホテルルートイン苅田駅前"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ 4.01 <span className="text-slate-500 font-normal">(584件)</span>
                </div>
                
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68680" target="_blank" rel="noopener noreferrer">
                      ホテルルートイン苅田駅前
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 福岡県京都郡苅田町神田町1-8-1
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ＪＲ日豊本線　苅田駅徒歩0分��北九州空港より車で約１5分
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ＷＯＷＯＷ全室で無料視聴可■VODルームシアター無料視聴可能（一般映画のみ：コンフォートルーム特典）
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ¥5,350〜
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68680"
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
              href="/furusato-tax-three-great-sand-dunes-resort-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                日本三大砂丘＆雄大パノラマ・砂の絶景リゾート宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                鳥取砂丘・中田島砂丘・吹上浜の海宿。
              </p>
            </Link>
            
            <Link
              key="1"
              href="/furusato-tax-starry-sky-open-air-bath-observatory-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                満天の星空露天風呂＆天体ドーム天文台宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                阿智村・美星町・石垣島星空保護区リゾート。
              </p>
            </Link>
            
            <Link
              key="2"
              href="/furusato-tax-sea-of-clouds-sky-terrace-hotel-stay"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                雲海テラス＆天空パノラマリゾート×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                トマム・志賀高原・蔵王の雲上ホテル。
              </p>
            </Link>
            
          </div>
        </section>
      </main>
    </div>
  );
}
