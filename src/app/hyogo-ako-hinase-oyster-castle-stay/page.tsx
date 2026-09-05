import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '【兵庫・赤穂＆日生】赤穂城跡・播磨灘インフィニティ温泉＆坂越かき宿 完全ガイド ｜ 日本全国・旅宿クラウド',
  description: '忠臣蔵のふるさと国史跡「赤穂城跡」と大石神社、瀬戸内海・播磨灘の水平線と一体になる「赤穂温泉」絶景インフィニティ露天風呂、清浄海域で育つプリプリのブランド「坂越かき」・日生名物「カキオコ」、天然塩の赤穂塩づくり体験宿を徹底解説。',
  keywords: [
    '【兵庫・赤穂＆日生・相生】赤穂義士の城跡・播磨灘夕日露天＆極上坂越牡蠣宿 完全ガイド',
    '観光モデルコース',
    'おすすめ旅館',
    'おすすめホテル',
    '楽天トラベル',
    '絶景',
    'ご当地グルメ'
  ],
  openGraph: {
    title: '【兵庫・赤穂＆日生】赤穂城跡・播磨灘インフィニティ温泉＆坂越かき宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '忠臣蔵のふるさと国史跡「赤穂城跡」と大石神社、瀬戸内海・播磨灘の水平線と一体になる「赤穂温泉」絶景インフィニティ露天風呂、清浄海域で育つプリプリのブランド「坂越かき」・日生名物「カキオコ」、天然塩の赤穂塩づくり体験宿を徹底解説。',
    type: 'article',
    url: 'https://croud-travel.com/hyogo-ako-hinase-oyster-castle-stay',
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* ヒーローヘッダー */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-black mb-6">
            <span>🗺️</span>
            <span>AKO & HINASE OYSTER GUIDE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            【兵庫・赤穂＆日生・相生】赤穂義士の城跡・播磨灘夕日露天＆極上坂越牡蠣宿 完全ガイド
          </h1>
          <p className="max-w-3xl mx-auto text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            元禄赤穂事件・忠臣蔵の義士たちが生きた歴史の城下町「播州赤穂」。美しく復元された本丸門と庭園が広がる「国史跡 赤穂城跡」。赤穂御崎の高台からは、瀬戸内海・播磨灘の多島美と黄金色に染まる夕日のパノラマ。海と湯船がひと続きになったような絶景インフィニティ露天風呂が自慢の「赤穂温泉」。そして波静かな坂越湾で育つ大粒で縮まない冬の極上「坂越かき」。歴史情緒と海の絶景・美食に満たされる赤穂ステイへご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-stone-400">
            <span className="flex items-center gap-1">📍 厳選見どころ・観光スポット網羅</span>
            <span>•</span>
            <span className="flex items-center gap-1">♨️ 露天風呂・名湯ホテル</span>
            <span>•</span>
            <span className="flex items-center gap-1">🍱 地元旬菜・名物グルメ</span>
            <span>•</span>
            <span className="flex items-center gap-1">✅ 楽天トラベルリアルタイム空室連携</span>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* セクション 1 */}
        <section className="bg-stone-900/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-500/20 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-bold text-amber-300 mb-4">
            国指定史跡・忠臣蔵の魂が眠る城下町
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            1. 赤穂城跡（本丸御殿跡・大手門）＆大石神社・花岳寺（義士ゆかりの史跡巡礼）
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            浅野内匠頭長矩が居城とし、甲州流軍学に基づき築城された変形輪郭式の海岸平城「赤穂城跡」。立派な大手門や本丸厩口門、本丸庭園や二之丸庭園が見事に復元され、往時の威容を偲ばせます。城内には四十七士を祀る「大石神社」が鎮座し、義士の宝物を展示。浅野家と赤穂義士の菩提寺である「花岳寺」には義士の墓所が静かに並び、歴史ファンを魅了してやみません。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（12月14日の「赤穂義士祭」、春の桜並木とお城巡り、秋の城下町散策）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">国史跡赤穂城跡（本丸庭園・大手門）、大石神社（義士宝物殿）、花岳寺、赤穂市立歴史博物館、息継ぎ井戸</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">JR赤穂線「播州赤穂駅」下車徒歩約15分。山陽自動車道「赤穂IC」より車で約10分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">播州赤穂駅観光案内所では観光レンタサイクル（電動アシストあり）の貸出があり、城下町から赤穂御崎まで快適にサイクリングできます。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="19403" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403.jpg"
                          alt="赤穂温泉　絶景露天風呂の宿　銀波荘"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (1364+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　絶景露天風呂の宿　銀波荘
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ＴＶや雑誌でも多数掲載！海と温泉が一体になって全身を包みこむ体験を堪能できる絶景露天風呂が自慢の宿。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎2-8
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥14,300〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19403"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="147688" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/147688/147688.jpg"
                          alt="赤穂温泉　料理旅館　呑海楼"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (746+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　料理旅館　呑海楼
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        美しい瀬戸内海を望む全室オーシャンビュー赤穂温泉の宿。趣向を凝らした料理と絶景露天風呂を是非。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎131
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥12,100〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147688"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="18924" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/18924/18924.jpg"
                          alt="赤穂温泉　割烹旅館　鹿久居荘　赤穂店"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 3.9 (576+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　割烹旅館　鹿久居荘　赤穂店
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        元禄浪漫漂う義士の街赤穂。瀬戸内海をそのまま包んだ水族館料理で、新鮮な海の幸をご堪能下さい。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市さつき町35-5
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥11,860〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18924"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="19404" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/19404/19404.jpg"
                          alt="赤穂温泉　潮彩きらら　祥吉"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (1346+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　潮彩きらら　祥吉
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ★5年連続楽天アワード受賞★2016年ミシュラン兵庫特別版掲載宿★瀬戸内の景色を望む絶景料理宿！
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎2-8
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥10,450〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
            </div>
    
          </div>
        </section>
    


        {/* セクション 2 */}
        <section className="bg-stone-900/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-500/20 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-bold text-amber-300 mb-4">
            日本の夕陽百選・海に浮かぶ名湯
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            2. 赤穂御崎・播磨灘パノラマ「絶景インフィニティ露天風呂」＆赤穂温泉リゾート
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            瀬戸内海国立公園内に突き出た岬「赤穂御崎」。海岸沿いの断崖に建ち並ぶ赤穂温泉の宿の最大の魅力は、湯船の縁が海へと溶け込むような「インフィニティ露天風呂」。日本の夕陽百選に選ばれた播磨灘の夕暮れ時、茜色から紫へと移ろう空と海を湯に浸かりながら眺める時間は息を呑む美しさです。ミネラル分を豊富に含んだ強塩温泉は「よみがえりの湯」とも呼ばれ、体の芯から温まります。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">通年（特に秋〜冬の澄んだ水平線に沈むだるま夕日、春の御崎桜まつり）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">赤穂御崎（きらきら坂・伊和都比売神社）、赤穂海浜公園・塩の国（製塩体験）、畳岩、御崎遊歩道</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">JR播州赤穂駅より路線バス（御崎行）で約15〜20分。赤穂ICより車で約15分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">伊和都比売神社から海岸へと下る「きらきら坂」は、石畳の階段沿いにお洒落なイタリアンやカフェ、ジェラート店が並ぶ映えスポットです。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="19403" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403.jpg"
                          alt="赤穂温泉　絶景露天風呂の宿　銀波荘"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (1364+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　絶景露天風呂の宿　銀波荘
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ＴＶや雑誌でも多数掲載！海と温泉が一体になって全身を包みこむ体験を堪能できる絶景露天風呂が自慢の宿。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎2-8
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥14,300〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19403"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="147688" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/147688/147688.jpg"
                          alt="赤穂温泉　料理旅館　呑海楼"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (746+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　料理旅館　呑海楼
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        美しい瀬戸内海を望む全室オーシャンビュー赤穂温泉の宿。趣向を凝らした料理と絶景露天風呂を是非。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎131
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥12,100〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147688"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="19404" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/19404/19404.jpg"
                          alt="赤穂温泉　潮彩きらら　祥吉"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (1346+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　潮彩きらら　祥吉
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ★5年連続楽天アワード受賞★2016年ミシュラン兵庫特別版掲載宿★瀬戸内の景色を望む絶景料理宿！
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎2-8
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥10,450〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="43731" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/43731/43731.jpg"
                          alt="亀の井ホテル　赤穂"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.2 (865+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        亀の井ホテル　赤穂
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        11個の無料おもてなし ×「温泉宿・ホテル総選挙2025 絶景部門」関西エリア第1位の癒しの温泉宿
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎883-1
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥14,085〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D43731"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
            </div>
    
          </div>
        </section>
    


        {/* セクション 3 */}
        <section className="bg-stone-900/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-500/20 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-bold text-amber-300 mb-4">
            大粒で甘い坂越かきと日生カキオコ
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            3. 名物「坂越かき」炭火焼き会席＆日生ご当地グルメ「カキオコ」・生牡蠣食べ比べ
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            名水千種川からの豊富なプランクトンに恵まれた清浄海域・坂越湾。ここで育つ「坂越かき」は、一年で大粒に成長し、加熱しても縮まないふっくらとした身と、えぐみがなく濃厚な甘みが特徴です。宿では焼き牡蠣、牡蠣フライ、土手鍋、牡蠣ご飯など贅沢な牡蠣尽くし会席を堪能。足を伸ばして隣接する岡山県日生（ひなせ）へ行けば、鉄板の上に牡蠣をどっさりのせた名物「カキオコ」に舌鼓を打てます。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">冬〜春（11月〜4月の牡蠣シーズン、特に身が最も太る1〜3月が最盛期）</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">坂越の古い町並み（重伝建地区・奥藤酒造）、海の駅しおさい市場、日生五味の市（牡蠣BBQ）、みなとの見える丘公園</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">坂越へはJR赤穂線「坂越駅」よりバス約10分。日生へは播州赤穂駅から電車で約15分。</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">坂越港の「しおさい市場」では、併設の焼き牡蠣食べ放題コーナーで獲れたての新鮮な牡蠣を網の上で豪快に焼いて食べられます。</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              
                <div key="147688" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/147688/147688.jpg"
                          alt="赤穂温泉　料理旅館　呑海楼"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.5 (746+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　料理旅館　呑海楼
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        美しい瀬戸内海を望む全室オーシャンビュー赤穂温泉の宿。趣向を凝らした料理と絶景露天風呂を是非。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎131
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥12,100〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147688"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="19404" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/19404/19404.jpg"
                          alt="赤穂温泉　潮彩きらら　祥吉"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (1346+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　潮彩きらら　祥吉
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ★5年連続楽天アワード受賞★2016年ミシュラン兵庫特別版掲載宿★瀬戸内の景色を望む絶景料理宿！
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎2-8
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥10,450〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="19403" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403.jpg"
                          alt="赤穂温泉　絶景露天風呂の宿　銀波荘"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.4 (1364+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        赤穂温泉　絶景露天風呂の宿　銀波荘
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ＴＶや雑誌でも多数掲載！海と温泉が一体になって全身を包みこむ体験を堪能できる絶景露天風呂が自慢の宿。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 兵庫県赤穂市御崎2-8
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥14,300〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19403"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
                <div key="76467" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="https://img.travel.rakuten.co.jp/share/HOTEL/76467/76467.jpg"
                          alt="旅館　つり幸"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ 4.0 (83+件)
                        </div>
                      </div>
                    
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        旅館　つり幸
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        旬の海の幸を贅沢に味わう日生懐石が自慢。海と日生大橋を望む絶景とともに堪能できる料理宿。
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 岡山県備前市日生町日生648-30
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥7,700〜</span>/人
                      </div>
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D76467"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              
            </div>
    
          </div>
        </section>
    

        {/* まとめ・下部ナビ */}
        <section className="bg-stone-900/60 rounded-3xl p-8 border border-stone-800 text-center space-y-6 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-amber-200">
            四季の感動に出逢う、極上のステイへ出かけよう
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            日本各地の風土が育んだ奇跡の景観、受け継がれる伝統文化、そして心ほどける名湯。
            お気に入りの宿を見つけて、特別な旅の思い出を刻んでみませんか。
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-bold rounded-2xl transition border border-stone-700"
            >
              ← トップページへ戻る
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
