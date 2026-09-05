import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド【2026年最新】函館・神戸・金沢の美食宿',
  description: 'いくら盛り放題の海鮮丼や焼き立てクロワッサン、地産地消の絶品ビュッフェ！楽天トラベル朝ごはんフェスティバルや全国ランキングで日本一に輝いた名門ホテルの朝食を、ふるさと納税クーポンでお得に堪能する極上美食ステイ。',
  keywords: ['ふるさと納税', '楽天トラベル', '宿泊クーポン', '究極の朝ごはん・美食ホテル特集', '温泉旅館', 'ホテル予約', '2026年最新'],
  openGraph: {
    title: '朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド【2026年最新】函館・神戸・金沢の美食宿',
    description: 'いくら盛り放題の海鮮丼や焼き立てクロワッサン、地産地消の絶品ビュッフェ！楽天トラベル朝ごはんフェスティバルや全国ランキングで日本一に輝いた名門ホテルの朝食を、ふるさと納税クーポンでお得に堪能する極上美食ステイ。',
    url: 'https://croud-travel.pages.dev/furusato-tax-award-winning-breakfast-gourmet-hotel-stay',
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
          <span className="text-slate-200">究極の朝ごはん・美食ホテル特集</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-5 shadow-lg shadow-amber-500/20">
            究極の朝ごはん・美食ホテル特集
          </span>
          <h1 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            朝食日本一・究極の朝ごはんホテル×ふるさと納税ガイド
          </h1>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed font-medium">
            いくら盛り放題の海鮮丼や焼き立てクロワッサン、地産地消の絶品ビュッフェ！楽天トラベル朝ごはんフェスティバルや全国ランキングで日本一に輝いた名門ホテルの朝食を、ふるさと納税クーポンでお得に堪能する極上美食ステイ。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
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
            <span>旅のメインディッシュは「朝食」！日本一に輝く至高の朝ごはんを返礼クーポンで</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
            朝起きて暖簾をくぐると、目の前に広がる宝石のようないくら、職人が目の前で焼き上げる旬魚やオムレツ、焼き立ての芳醇なパンの香り。朝食に徹底的にこだわり抜いた名門ホテルは、今やそれ自体が旅の最大の目的地となっています。楽天ふるさと納税を活用すれば、プレミアム朝食付きの上質な宿泊プランを実質自己負担2,000円で贅沢に満喫できます。
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
                    いくら盛り放題や地元名物・職人握りの朝食を朝から満喫
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    函館の朝獲れ海鮮丼や神戸の洋食ビュッフェ、金沢のじわもん郷土料理など、各地の食文化を朝一番から余すことなく味わい尽くす贅沢。一日の始まりが最高の幸福感で満たされます。
                  </p>
                </div>
              </div>
            
              <div key="1" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    02
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    天然温泉大浴場や展望サウナとセットで朝からととのう
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    多くの朝食名門ホテルは、最上階の展望露天風呂や本格サウナを完備。朝風呂で身体を目覚めさせた後にいただく至高の朝ごはんは、まさに人生最高のご褒美体験です。
                  </p>
                </div>
              </div>
            
              <div key="2" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    03
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    観光・出張・女子旅など幅広いシーンで高コスパに消化
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    高級旅館だけでなく都市型プレミアムホテルも対象。出張に少し贅沢をプラスしたい時や、気軽な週末の女子旅・ひとり旅でも返礼クーポンを使いやすく、満足度の極めて高いふるさと納税活用が可能です。
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
            
                <div key="hakodate_breakfast" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>北海道函館市ふるさと納税：ラビスタ函館ベイ・朝食日本一いくら盛り放題の聖地</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      全国の朝食ランキングで殿堂入りを果たした伝説のホテル。名物の「海鮮セルフ丼」ではいくらや甘海老、イカを好きなだけ盛り付け可能。赤レンガ倉庫群を望む最上階の展望天然温泉とともに函館の美を五感で味わえます。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="69295" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/69295/69295.jpg"
                                alt="ラビスタ函館ベイ（共立リゾート）"
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
                              ラビスタ函館ベイ（共立リゾート）
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              最上階の展望温泉と和洋朝食バイキングが彩る、どこよりも「函館らしい」ホテル。
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">北海道函館市豊川町12-6</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥11,120〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D69295"
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
              
                <div key="kobe_breakfast" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>兵庫県神戸市ふるさと納税：神戸ベイシェラトン・地産地消ビュッフェ＆自家源泉温泉</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      六甲山と瀬戸内海の恵みが集う神戸屈指のインターナショナルホテル。地元契約農家の新鮮野菜や焼き立てパン、兵庫の郷土料理をビュッフェ形式で堪能。敷地内から湧出する自家源泉天然温泉「濱泉」も絶品です。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="1524" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/1524/1524.jpg"
                                alt="神戸ベイシェラトンホテル＆タワーズ"
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
                              神戸ベイシェラトンホテル＆タワーズ
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              天然自家源泉100％・神戸六甲温泉「濱泉」（宿泊者無料）。三宮・新神戸から直通バス（有料）運行。
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">兵庫県神戸市東灘区向洋町中2-13</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥6,880〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1524"
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
              
                <div key="kanazawa_breakfast" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>石川県金沢市ふるさと納税：金沢白鳥路ホテル山楽・加賀じわもん朝食＆大正ロマン</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      金沢城公園に隣接し、兼六園まで徒歩5分のクラシックホテル。金沢の伝統野菜「じわもん」や治部煮、のどぐろの一夜干しなど加賀百万石の美味を凝縮した朝食御膳と、市内でも希少な天然美肌温泉が旅人を迎えます。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="9004" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004.jpg"
                                alt="金沢白鳥路　ホテル山楽"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>4.6</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              金沢白鳥路　ホテル山楽
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              金沢城のすぐ側で美肌の湯と金沢美食、そして心温まるおもてなしに癒されて日常をひと休みしませんか。
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">石川県金沢市丸の内6-3</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥7,250〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="184275" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/184275/184275.jpg"
                                alt="ＴＨＥ　ＨＯＴＥＬ　ＳＡＮＲＡＫＵ　ＫＡＮＡＺＡＷＡ（ザ　ホテル山楽　金沢）"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>4.7</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              ＴＨＥ　ＨＯＴＥＬ　ＳＡＮＲＡＫＵ　ＫＡＮＡＺＡＷＡ（ザ　ホテル山楽　金沢）
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              2022年12月21日開業！クラブラウンジや四季を彩る中庭を誇るラグジュアリーホテル
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">石川県金沢市尾張町1丁目1番1号</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥7,400〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D184275"
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
                href="/furusato-tax-local-gourmet-inn-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  ご当地グルメ宿を堪能する美食旅特集
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  高千穂牛・天然あなご・伊勢海老を味わう返礼クーポン旅。
                </div>
              </Link>
            
              <Link
                key="1"
                href="/furusato-tax-winter-crab-gourmet-luxury-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  冬の味覚の王様×活蟹尽くし極上温泉宿ガイド
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  城崎・三国・皆生のタグ付き松葉ガニ＆越前ガニ会席を堪能。
                </div>
              </Link>
            
              <Link
                key="2"
                href="/furusato-tax-winery-craft-beer-auberge-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  ワイン＆地ビール×醸造オーベルジュ旅ガイド
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  勝沼・富良野・余市のワイナリー直営美食ホテル。
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
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
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
