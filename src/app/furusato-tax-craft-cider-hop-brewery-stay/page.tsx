import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'クラフトシードル＆ご当地ホップ醸造宿×ふるさと納税完全ガイド【2026年最新】弘前・遠野・南信州飯田の果実酒ステイ',
  description: 'フレッシュな果実酒とビールの世界！青森弘前りんご王国のクラフトシードル工房、岩手遠野の日本一のホップ畑とクラフトビールビレッジ、長野飯田のリンゴ並木シードル＆天竜川温泉。醸造家こだわりの美酒と郷土フレンチを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: [
    '楽天ふるさと納税',
    'ふるさと納税 宿泊クーポン',
    '楽天トラベル ふるさと納税',
    '高級温泉旅館',
    '露天風呂付き客室',
    '2026年旅行'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-craft-cider-hop-brewery-stay/'
  },
  openGraph: {
    title: 'クラフトシードル＆ご当地ホップ醸造宿×ふるさと納税完全ガイド【2026年最新】弘前・遠野・南信州飯田の果実酒ステイ',
    description: 'フレッシュな果実酒とビールの世界！青森弘前りんご王国のクラフトシードル工房、岩手遠野の日本一のホップ畑とクラフトビールビレッジ、長野飯田のリンゴ並木シードル＆天竜川温泉。醸造家こだわりの美酒と郷土フレンチを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-craft-cider-hop-brewery-stay',
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
            <span>クラフトシードル・ホップ醸造所特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            クラフトシードル＆ご当地ホップ醸造宿×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            澄んだ空気と冷涼な気候が育む芳醇な果実とホップ。日本屈指のリンゴ産地・青森や南信州で造られるフレッシュな「クラフトシードル（林檎微発泡酒）」や、岩手・遠野の豊かなホップ畑から生まれるアロマ豊かなクラフトビール。グラスに注いだ瞬間に立ち上るフレッシュな果実香とホップの苦味、そして地元の旬食材を使ったペアリングディナー。醸造所の息吹を間近に感じる大人のハイセンスな休日を、楽天ふるさと納税でお得に叶えましょう。
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
          もぎたて林檎の微発泡酒と香り高い毬花ホップ。大地の恵みを醸すクラフトビバレッジリゾート
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="0" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              できたての生シードルや限定クラフトビールをタップから直接味わう
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              工房直営だからこそ味わえる、加熱処理をしていないフレッシュな樽生シードルや限定醸造のホップビールを心ゆくまで満喫できます。
            </p>
          </div>
          
          <div key="1" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              リンゴ園やホップ畑を望むテラスでの爽快なペアリングディナー
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              広大な果樹園やホップ棚の緑を眺めながら、短角牛や信州サーモン、津軽の海の幸と美酒のマリアージュに舌鼓を打てます。
            </p>
          </div>
          
          <div key="2" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              ふるさと納税クーポンで宿泊と工房見学・テイスティングをお得に体験
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              宿泊費をスマートに節約し、醸造所ツアーやシードルの飲み比べセットなど現地での体験をより贅沢にアップグレードできます。
            </p>
          </div>
          
        </div>
      </section>

      {/* エリア別 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          
          <div key="hirosaki_cider" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                青森県弘前市・青森ふるさと納税：日本一のりんご王国・弘前シードル工房めぐりと津軽郷土美食ホテル
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                弘前れんが倉庫美術館をはじめ、シードル醸造所が集まるリンゴの街。爽やかな酸味とキレが際立つできたてシードルを片手に、津軽三味線の音色と青森の海の幸を味わう旅です。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="856"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/856/856.jpg"
                    alt="スマイルホテル青森"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 3.78 (2339件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    青森県青森市本町2-4-7
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    スマイルホテル青森
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    ���庁街に隣接しビジネスに最適な立地・繁華街もすぐ近くです！インターネット無料で接続できます！
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥4,300〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D856"
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
            
          <div key="tono_hop" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                岩手県遠野市・花巻温泉郷ふるさと納税：日本随一のホップの里・遠野ビアツーリズムと名湯宿
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                国産ホップの約半数を生産する「ホップの里」遠野。夏から秋にかけて緑のカーテンが広がるホップ畑を巡り、遠野ジンギスカンと香り高いビール、花巻温泉郷の美肌湯に癒やされます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="56915"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/56915/56915.jpg"
                    alt="花巻温泉郷　台温泉　いやしろの湯　ホテル三右ェ門"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 3.98 (351件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    岩手県花巻市台２－４５
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    花巻温泉郷　台温泉　いやしろの湯　ホテル三右ェ門
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    閑静で落ち着いた昔変らぬ宿心。移り変わる風情とともに、台温泉で過ごすお時間をごゆるりとお寛ぎ下さい
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥8,200〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D56915"
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
                key="167781"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/167781/167781.jpg"
                    alt="ホテル狩野"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.21 (56件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    岩手県花巻市大通り1-7-41
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    ホテル狩野
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    花巻駅前のホテル狩野。女将手作りの日替り料理と24時間入浴OKのミネラル泉が好評。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥6,900〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D167781"
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
                key="13482"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/13482/13482.jpg"
                    alt="花巻温泉　佳松園"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.73 (1091件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    岩手県花巻市湯本第1地割125-2
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    花巻温泉　佳松園
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    とろとろの湯と心に残るおもてなし。特別な日を佳松園で過ごす愉しみ。花巻ICよりわずか5分の別世界。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥20,900〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13482"
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
            
          <div key="iida_cider" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                長野県飯田市・南信州ふるさと納税：りんご並木と南信州シードル・天竜川の渓谷美と天然温泉リゾート
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                標高差が生む高品質なリンゴの産地・南信州。数多くのクラフトシードルワイナリーが点在し、天竜川のダイナミックな川下りや名湯とともに、フルーティーな微発泡酒を堪能できます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="39539"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/39539/39539.jpg"
                    alt="高遠温泉　高遠さくらホテル"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.33 (420件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    長野県伊那市高遠町勝間217
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    高遠温泉　高遠さくらホテル
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    ■pH9.7トロトロ肌触りの天然温泉／露天風呂＆貸切風呂／城址公園・高遠湖望む全室レイクビュー■
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥10,000〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D39539"
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
            key="1"
            href="/furusato-tax-winery-vineyard-auberge-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                勝沼・余市・十勝のワインペアリング旅。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="2"
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
          
        </div>
      </section>
    </div>
  );
}
