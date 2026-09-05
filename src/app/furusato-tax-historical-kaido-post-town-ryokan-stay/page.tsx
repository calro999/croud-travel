import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド【2026年最新】中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅',
  description: '石畳の坂道や格子戸の町並み、江戸時代にタイムスリップしたかのような情緒！中山道・妻籠宿、馬籠宿、日光街道の由緒ある宿場町旅館を楽天ふるさと納税宿泊クーポンでお得に予約する歴史散策ガイド。',
  keywords: ['ふるさと納税', '楽天トラベル', '宿泊クーポン', '歴史街道・宿場町めぐり特集', '温泉旅館', 'ホテル予約', '2026年最新'],
  openGraph: {
    title: '歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド【2026年最新】中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅',
    description: '石畳の坂道や格子戸の町並み、江戸時代にタイムスリップしたかのような情緒！中山道・妻籠宿、馬籠宿、日光街道の由緒ある宿場町旅館を楽天ふるさと納税宿泊クーポンでお得に予約する歴史散策ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-historical-kaido-post-town-ryokan-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoTaxPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-white">
      {/* パンくずリスト */}
      <nav className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur px-4 py-3 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-400 transition">ホーム</Link>
          <span>/</span>
          <Link href="/posts" className="hover:text-amber-400 transition">宿泊ガイド一覧</Link>
          <span>/</span>
          <span className="text-slate-200">歴史街道・宿場町めぐり特集</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-5 shadow-lg shadow-amber-500/20">
            歴史街道・宿場町めぐり特集
          </span>
          <h1 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            歴史街道・宿場町めぐり名宿×ふるさと納税ガイド
          </h1>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed font-medium">
            石畳の坂道や格子戸の町並み、江戸時代にタイムスリップしたかのような情緒！中山道・妻籠宿、馬籠宿、日光街道の由緒ある宿場町旅館を楽天ふるさと納税宿泊クーポンでお得に予約する歴史散策ガイド。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://event.travel.rakuten.co.jp/special/furusato/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded">公式</span>
            </a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* リード文ブロック */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10" />
          <h2 className="text-xl md:text-2xl font-black text-amber-400 mb-4 flex items-center gap-2">
            <span>💡</span>
            <span>旅人が草鞋を脱いだ江戸の昔へ。街道の息吹と素朴な郷土の温もりに触れる</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
            木造の旅籠が連なる中山道木曽路の妻籠宿や馬籠宿、日光東照宮へと続く日光街道杉並木。かつて参勤交代の大名や旅人たちが行き交った街道沿いには、現代も当時の面影を色濃く残す宿場町と名宿が点在しています。楽天ふるさと納税を活用して、囲炉裏端でいただく岩魚の塩焼きや五平餅、信州蕎麦を味わうノスタルジックな街道歩き旅へ出かけましょう。
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl font-black text-white">
              楽天ふるさと納税トラベルクーポンが圧倒的にお得な3つの理由
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              予約前の獲得はもちろん、予約後の「あとから適用」も可能な最高峰の使い勝手
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
              <div key="0" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    01
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    電線が地中化され江戸の佇まいがそのまま残る国の重伝建地区に宿泊
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    観光客で賑わう昼間とは一変し、夕暮れの行灯が灯る静寂の宿場町を歩けるのは宿泊者だけの特権。静まり返った石畳に響く下駄の音が旅情を誘います。
                  </p>
                </div>
              </div>
            
              <div key="1" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    02
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    囲炉裏端で焼き上げる川魚・山菜・名物五平餅の山里郷土料理
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    囲炉裏の炭火でじっくり香ばしく焼いた岩魚やアマゴ、香り高い信州蕎麦、地元米で作る香ばしい五平餅など、素朴でありながら滋味深い料理を堪能できます。
                  </p>
                </div>
              </div>
            
              <div key="2" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    03
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    歴史文化保全への寄付控除と宿泊割引を両立する賢いふるさと納税
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    町並み保存や文化遺産継承に尽力する自治体へ寄付しながら、最大30%オフのトラベルクーポンで趣ある古民家風宿や老舗旅館をお得に楽しめます。
                  </p>
                </div>
              </div>
            
          </div>
        </section>

        {/* 自治体＆厳選宿セクション */}
        <section className="space-y-12">
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-2xl md:text-3xl font-black text-white">
              ふるさと納税対象・厳選おすすめ宿泊施設
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              楽天トラベルAPIより最新の料金・宿泊プラン・空室情報をリアルタイム反映中
            </p>
          </div>

          <div className="space-y-12">
            
                <div key="tsumago_kaido" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>長野県南木曽町ふるさと納税：中山道妻籠宿・全国で初めて町並み保存に取り組んだ奇跡の宿場町</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      日本初の重要伝統的建造物群保存地区。江戸時代の木造建築が連なる街道を散策し、木曽檜の香る木風呂や、山菜と信州牛を味わう心温まる宿場ステイが待っています。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="16778" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/16778/16778.jpg"
                                alt="木曽路の宿　いわや"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>4.0</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              木曽路の宿　いわや
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              宮家の方々や文人に愛された、木曽路で最も古い老舗。木曽川眺望、総檜造りのお部屋や展望露天など。
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">長野県木曽郡木曽町福島5169</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥7,700〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16778"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="17513" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/17513/17513.jpg"
                                alt="普寛堂　くるみ沢旅館"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>4.5</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              普寛堂　くるみ沢旅館
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              明治2年創業。【お部屋食】で精進料理や信州の旬料理＆【薬草人参檜風呂】でゆったり！御嶽山への拠点に
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">長野県木曽郡王滝村3297-6</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥6,600〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D17513"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="130040" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/130040/130040.jpg"
                                alt="宿とそば処　ふもと屋"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>4.9</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              宿とそば処　ふもと屋
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              築二百年の建物を利用した古民家風の旅宿。開田蕎麦と郷土料理・地元の材料でおもてなし
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">長野県木曽郡木曽町開田高原末川2819</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥8,100〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D130040"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                  </div>
                </div>
              
                <div key="magome_kaido" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>岐阜県中津川市ふるさと納税：中山道馬籠宿・文豪島崎藤村の故郷・石畳の坂道宿場</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      木曽山脈を望む急峻な坂道に開けた馬籠宿。藤村の名作『夜明け前』の舞台となった町並みを見下ろしながら、恵那山麓の清らかな水と栗きんとん、地酒を味わえます。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="51706" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/51706/51706.jpg"
                                alt="料理旅館　準坊池"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>4.0</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              料理旅館　準坊池
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              いけすの鮮度抜群な川魚と山菜料理★中津川・鮎釣りポイントへは徒歩1分です♪＜ペット相談可＞
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">岐阜県中津川市付知町8593-24</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥7,000〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D51706"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                  </div>
                </div>
              
                <div key="nikko_kaido" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>栃木県日光市ふるさと納税：世界遺産日光東照宮参道・日光杉並木街道と由緒ある門前宿</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      徳川家康公を祀る日光東照宮へと続く日光街道。ギネス世界記録に認定された世界一長い杉並木を抜け、名物の日光湯波や滋養あふれる会席料理に舌鼓を打つ開運の旅です。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="190851" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/190851/190851.jpg"
                                alt="一棟貸切【広々９７平米】　定員８人　禁煙　駅徒歩９分　駐車場３台ＥＶ対応　日光杉並木街道の家　＾"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              一棟貸切【広々９７平米】　定員８人　禁煙　駅徒歩９分　駐車場３台ＥＶ対応　日光杉並木街道の家　＾
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              日光市下野大沢駅９分の貸し切り一軒家です
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">栃木県日光市板橋175-79　日光市杉並木街道の家</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥4,408〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D190851"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="184902" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/184902/184902.jpg"
                                alt="トレイルイン日光今市（Ｔｒａｉｌ　ｉｎｎ　日光今市）"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>4.2</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              トレイルイン日光今市（Ｔｒａｉｌ　ｉｎｎ　日光今市）
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              各室完全独立型のトレーラーホテル！洗濯機・電子レンジ完備！！
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">栃木県日光市芹沼1553-1 (ダイナム駐車場敷地内)</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥3,200〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D184902"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="151489" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/151489/151489.jpg"
                                alt="日光素泊まりの宿　憩～ikoi～"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>3.9</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              日光素泊まりの宿　憩～ikoi～
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              日光東照宮まで1.８ｋｍ！ビジネス・観光にもおすすめ！心からのおもてなしでお待ちしております♪
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">栃木県日光市久次良町100</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥5,000〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D151489"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                  </div>
                </div>
              
          </div>
        </section>

        {/* 関連・相互リンク集 */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="border-l-4 border-amber-500 pl-3">
            <h3 className="text-lg md:text-xl font-black text-white">あわせて読みたいふるさと納税トラベル特集</h3>
            <p className="text-slate-400 text-xs mt-1">目的や同伴者に合わせて最適な宿泊クーポンを活用しよう</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
              <Link
                key="0"
                href="/furusato-tax-kominka-heritage-townhouse-auberge-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  篠山・飛騨高山の歴史情緒と地産馳走を味わう極上滞在。
                </div>
              </Link>
            
              <Link
                key="1"
                href="/furusato-tax-tangible-cultural-property-architectural-ryokan-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  修善寺新井旅館・渋温泉金具屋・箱根環翠楼の歴史宿。
                </div>
              </Link>
            
              <Link
                key="2"
                href="/furusato-tax-castle-town-heritage-onsen-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  国宝名城めぐり×城下町老舗名宿ガイド
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  姫路・松本・彦根の天守展望露天風呂宿。
                </div>
              </Link>
            
          </div>
        </section>

        {/* クーポン獲得CTA */}
        <section className="bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <span className="text-3xl">🎫</span>
          <h2 className="text-xl md:text-3xl font-black text-white">
            楽天トラベルふるさと納税クーポンで、一生の思い出に残るプレミアムステイへ
          </h2>
          <p className="text-slate-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
            返礼品クーポンは寄付手続き完了後、数分で楽天トラベルのアカウントに即時付与されます。今年の寄付上限枠を賢く使って、家族みんなの最高の笑顔とくつろぎを手に入れましょう。
          </p>
          <div>
            <a
              href="https://event.travel.rakuten.co.jp/special/furusato/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-base border border-amber-400/40"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
