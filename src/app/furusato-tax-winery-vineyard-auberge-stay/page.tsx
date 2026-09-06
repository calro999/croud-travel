import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税完全ガイド【2026年最新】勝沼・余市・十勝のワインペアリング旅',
  description: '日本ワインの銘醸地へ！山梨甲州勝沼のぶどう畑ビュー温泉、北海道余市の世界的ワイナリー＆海の幸オーベルジュ、十勝ワイン城とモール温泉リゾート。醸造家こだわりのワインと旬の美食マリアージュを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: [
    '楽天ふるさと納税',
    'ふるさと納税 宿泊クーポン',
    '楽天トラベル ふるさと納税',
    '高級温泉旅館',
    '露天風呂付き客室',
    '2026年旅行'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-winery-vineyard-auberge-stay'
  },
  openGraph: {
    title: '銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税完全ガイド【2026年最新】勝沼・余市・十勝のワインペアリング旅',
    description: '日本ワインの銘醸地へ！山梨甲州勝沼のぶどう畑ビュー温泉、北海道余市の世界的ワイナリー＆海の幸オーベルジュ、十勝ワイン城とモール温泉リゾート。醸造家こだわりのワインと旬の美食マリアージュを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-winery-vineyard-auberge-stay',
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
            <span>ワイナリー・葡萄畑オーベルジュ特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            澄んだ青空の下にどこまでも広がる葡萄畑、ひんやりと静まるワインセラーの樽の香り。今、世界的な評価を高めている「日本ワイン」の産地には、畑に隣接したスタイリッシュなオーベルジュや、源泉かけ流し温泉を備えたワイナリーリゾートが注目を集めています。その土地で育ったブドウから生まれたワインと、地元の旬食材を使った料理との完璧なマリアージュを、楽天ふるさと納税の宿泊クーポンでお得に堪能しましょう。
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
          テロワールを味わい尽くす贅沢。一面の葡萄畑と極上ワインペアリングに酔いしれる大人の旅
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="0" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              希少な限定醸造ワインやヴィンテージワインの専属ソムリエペアリング
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              市場には出回らないワイナリー直営ならではの特別な一本や樽出し生ワインなど、宿泊者だけが味わえる至高のグラスをディナーとともに楽しめます。
            </p>
          </div>
          
          <div key="1" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              葡萄畑の散策やプライベートセラー見学など特別な体験
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              夕暮れ時に葡萄畑の畝の間を散歩したり、醸造家のこだわりを聞くテイスティングツアーなど、ワイン好きの知的好奇心を刺激するプログラムが豊富です。
            </p>
          </div>
          
          <div key="2" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              ワイン風呂や植物性モール温泉など美容・美肌効果抜群のスパ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              ポリフェノール豊富なワイン粕風呂や、美肌の湯として名高い天然モール温泉など、スパ体験も極上のリラクゼーションを提供します。
            </p>
          </div>
          
        </div>
      </section>

      {/* エリア別 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          
          <div key="katsunuma_wine" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                山梨県甲州市ふるさと納税：勝沼ぶどう郷・甲州ワイン発祥の丘陵地と石和の名湯リゾート
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                約30ものワイナリーが集まる日本随一のワイン郷・勝沼。甲龍山や富士山を望む葡萄畑の景観、甲州牛と日本ワインの極上マリアージュ、そして柔らかな美肌温泉に癒やされます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="5727"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/5727/5727.jpg"
                    alt="石和温泉　美と健康と癒しの宿　ホテル八田"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.26 (621件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    山梨県笛吹市石和町川中島1607
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    石和温泉　美と健康と癒しの宿　ホテル八田
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    【美肌の湯◇認証】県内最大級の露天風呂・展望ワイン風呂・貸切風呂で癒しの湯を堪能。甲州の旬を味わう宿
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥9,900〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5727"
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
                key="72719"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/72719/72719.jpg"
                    alt="石和温泉　ホテル平安"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 3.46 (201件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    山梨県笛吹市石和町川中島538
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    石和温泉　ホテル平安
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    石和温泉駅無料送迎有◆温泉24時間OK◆水晶焼ステーキ・ほうとう鍋など郷土の味を堪能
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥8,030〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D72719"
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
                key="59642"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/59642/59642.jpg"
                    alt="大江戸温泉物語　ホテル新光"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 3.97 (2171件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    山梨県笛吹市石和町八田97
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    大江戸温泉物語　ホテル新光
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    見どころ満載の石和温泉を楽しんだ後は、自慢のバイキングと美肌の湯でゆっくりとおくつろぎください。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥9,800〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D59642"
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
            
          <div key="yoichi_wine" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                北海道余市町ふるさと納税：世界が称賛する余市ワイン・日本海シーフードと小樽クラシックホテル
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                ピノ・ノワールやケルナーなど冷涼な気候が育む極上ワインの聖地・余市。日本海のウニや蝦夷アワビ、後志の恵みをシェフが仕立てる美食ディナーとワインの饗宴です。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="172337"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/172337/172337.jpg"
                    alt="アンワインドホテルアンドバー小樽（ＵＮＷＩＮＤ　ＨＯＴＥＬ　＆　ＢＡＲ　小樽）"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.56 (275件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    北海道小樽市色内1-8-25
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    アンワインドホテルアンドバー小樽（ＵＮＷＩＮＤ　ＨＯＴＥＬ　＆　ＢＡＲ　小樽）
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    北海道随一のクラシックホテルを現代的感性で再生
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥6,510〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D172337"
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
                key="1432"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/1432/1432.jpg"
                    alt="プレミアホテル－ＴＳＵＢＡＫＩ－札幌"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.5 (2155件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    北海道札幌市豊平区豊平4条1丁目1-1
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    プレミアホテル－ＴＳＵＢＡＫＩ－札幌
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    ご宿泊者様専用サウナ＆フィットネス◇すすきの徒歩圏内◇ご宿泊者様専用ラウンジ（利用条件有り）
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥4,400〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1432"
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
                key="169"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/169/169.jpg"
                    alt="ＡＮＡクラウンプラザホテル札幌　ｂｙ　ＩＨＧ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.26 (4655件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    北海道札幌市中央区北3条西1丁目
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    ＡＮＡクラウンプラザホテル札幌　ｂｙ　ＩＨＧ
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    全室禁煙・ＪＲ札幌駅徒歩7分、地下鉄さっぽろ駅東豊線改札21番出口徒歩1分、空港バスホテル正面停車
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥5,250〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D169"
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
            
          <div key="tokachi_wine" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                北海道池田町ふるさと納税：十勝ワイン城の歴史と十勝平野の雄大美・植物性モール温泉の森宿
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                町営ワイナリーとして半世紀以上の歴史を誇る十勝ワイン。十勝牛のローストビーフとともに重厚な赤ワインを味わい、世界でも珍しい琥珀色のモール温泉でととのう至福の休日です。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="1019"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/1019/1019.jpg"
                    alt="森のスパリゾート　北海道ホテル"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.64 (2667件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    北海道帯広市西7条南19丁目１
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    森のスパリゾート　北海道ホテル
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    セルフロウリュ可能なサウナと北海道遺産のモール温泉浴場を備えた緑に囲まれたシティホテル
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥7,480〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1019"
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
                key="166019"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/166019/166019.jpg"
                    alt="ホテルテトラリゾート十勝川"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.01 (289件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    北海道河東郡音更町十勝川温泉北9丁目1番地
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    ホテルテトラリゾート十勝川
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    自家源泉の温泉と、十勝・北海道産食材にこだわった料理が自慢のホテルです。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥6,700〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D166019"
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
                key="19237"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/19237/19237.jpg"
                    alt="十勝川温泉　観月苑"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.46 (1976件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    北海道河東郡音更町十勝川温泉南14-2
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    十勝川温泉　観月苑
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    十勝川温泉初！２０２０年５月フィンランド式サウナへリニューアル！
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥19,030〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D19237"
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
            href="/furusato-tax-sake-brewery-pairing-onsen-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                越後湯沢・諏訪・会津の名酒と温泉旅。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="1"
            href="/furusato-tax-craft-beer-brewery-hotel-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                クラフトビール＆ご当地ブルワリーホテル×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                軽井沢・修善寺・小樽の出来立て生ビールと美食ステイ。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="2"
            href="/furusato-tax-highland-resort-french-auberge-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                那須・清里・裏磐梯の森の休日。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
        </div>
      </section>
    </div>
  );
}
