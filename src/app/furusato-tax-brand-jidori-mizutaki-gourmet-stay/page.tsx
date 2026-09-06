import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ブランド地鶏・水炊き・軍鶏料理の名湯宿×ふるさと納税完全ガイド【2026年最新】比内地鶏・土佐ジロー・黒さつま鶏の美食旅',
  description: '日本三大美味鶏の比内地鶏きりたんぽ鍋、高知の土佐ジロー軍鶏鍋、鹿児島黒さつま鶏の炭火焼き！噛むほどに旨味が溢れる銘柄地鶏と極上温泉旅館を楽天ふるさと納税宿泊クーポンでお得に予約する肉食・郷土美食ガイド。',
  keywords: ['ふるさと納税', '楽天トラベル', '宿泊クーポン', 'ブランド地鶏・軍鶏水炊き特集', '温泉旅館', 'ホテル予約', '2026年最新'],
  openGraph: {
    title: 'ブランド地鶏・水炊き・軍鶏料理の名湯宿×ふるさと納税完全ガイド【2026年最新】比内地鶏・土佐ジロー・黒さつま鶏の美食旅',
    description: '日本三大美味鶏の比内地鶏きりたんぽ鍋、高知の土佐ジロー軍鶏鍋、鹿児島黒さつま鶏の炭火焼き！噛むほどに旨味が溢れる銘柄地鶏と極上温泉旅館を楽天ふるさと納税宿泊クーポンでお得に予約する肉食・郷土美食ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-brand-jidori-mizutaki-gourmet-stay',
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
          <span className="text-slate-200">ブランド地鶏・軍鶏水炊き特集</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-5 shadow-lg shadow-amber-500/20">
            ブランド地鶏・軍鶏水炊き特集
          </span>
          <h1 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            ブランド地鶏・水炊き・軍鶏料理の名湯宿×ふるさと納税ガイド
          </h1>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed font-medium">
            日本三大美味鶏の比内地鶏きりたんぽ鍋、高知の土佐ジロー軍鶏鍋、鹿児島黒さつま鶏の炭火焼き！噛むほどに旨味が溢れる銘柄地鶏と極上温泉旅館を楽天ふるさと納税宿泊クーポンでお得に予約する肉食・郷土美食ガイド。
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
            <span>弾力ある肉質と濃厚なコク。炭火の香ばしさと地鶏出汁が染み渡る美食の極み</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
            放し飼いや平飼いでじっくりと時間をかけて育てられた全国の最高峰ブランド地鶏。噛み締めるたびに溢れ出す濃厚な旨味、澄んだ黄金色の鶏ガラスープ、そして炭火でカリッと香ばしく焼き上げた地鶏もも肉。温泉地ならではの清らかな水と職人の技が融合した地鶏会席は、肉料理愛好家にとって忘れられない体験です。楽天ふるさと納税を活用して、本場でしか味わえない至高の鳥料理ステイをお得に堪能しましょう。
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
                    産地直送だからこそ実現する圧倒的な鮮度の地鶏刺身や炭火焼き
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    鮮度抜群の地鶏タタキやレバー、炭火の煙を纏った黒焼きなど、都市部ではなかなか口にできない本場ならではの調理法で地鶏本来の力強い風味を味わえます。
                  </p>
                </div>
              </div>
            
              <div key="1" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    02
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    旨味が凝縮した濃厚地鶏スープでいただく名物水炊き・きりたんぽ鍋
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    鶏ガラを何時間も煮込んで抽出したコラーゲンたっぷりの濃厚スープ。旬の地元野菜とともにいただく鍋料理は、身体の芯から滋養を与えてくれます。
                  </p>
                </div>
              </div>
            
              <div key="2" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    03
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    ふるさと納税返礼クーポンで郷土の食文化と銘柄鶏の保存を応援
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    伝統的な血統と飼育方法を守り続ける地鶏農家や自治体を寄付で支えながら、自己負担実質2,000円で贅沢な美食プランを楽しめます。
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
            
                <div key="hinai_jidori" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>秋田県大館市ふるさと納税：比内地鶏の本場・本場大館きりたんぽ鍋と名湯大湯温泉</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      薩摩地鶏・名古屋コーチンと並ぶ日本三大美味鶏・比内地鶏。炭火で焼いた手作りきりたんぽと比内地鶏の濃厚な出汁が絡み合う本場の味を、十和田湖南麓の古湯で味わえます。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="2974" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/2974/2974.jpg"
                                alt="縄文のふる里　大湯温泉　ホテル鹿角"
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
                              縄文のふる里　大湯温泉　ホテル鹿角
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              開湯800年の名湯と四季折々の彩りが添えられた料理を楽しむ。箱根・富士屋ホテルや花巻温泉もグループ。
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">秋田県鹿角市十和田大湯字中谷地５－１</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥6,000〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2974"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="31154" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/31154/31154.jpg"
                                alt="龍門亭　千葉旅館"
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
                              龍門亭　千葉旅館
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              ライトアップされた庭園を眺めながら露天に浸かる贅沢と、飽きることの無いお料理を堪能あれ。
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">秋田県鹿角市十和田大湯上の湯1丁目38-1</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥8,470〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31154"
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
              
                <div key="tosa_jidori" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>高知県ふるさと納税：土佐ジロー＆軍鶏・坂本龍馬も愛した軍鶏鍋と南国温泉ステイ</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      野性味あふれる肉質と濃厚な黄身が特徴の土佐ジロー。幕末の志士たちが好んだ軍鶏鍋や高知名物のカツオの藁焼きタタキとともに、南国土佐の温泉宿で豪快に食します。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="13810" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/13810/13810.jpg"
                                alt="癒しの湯宿　龍河温泉"
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
                              癒しの湯宿　龍河温泉
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              龍河洞・やなせたかし記念館がある田園と星空広がる街の温泉宿。季節料理、とろんとろんの天然温泉を堪能
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">高知県香美市土佐山田町佐古薮430-1</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥14,300〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13810"
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
              
                <div key="satsuma_jidori" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>鹿児島県霧島市ふるさと納税：黒さつま鶏・「黒の奇跡」炭火焼き会席と全室露天風呂付き離れ</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      黒豚・黒牛に続く鹿児島の新たなブランド「黒さつま鶏」。旨味成分のイノシン酸が多くジューシーな肉質を炭火焼きで堪能し、霧島連山を望む客室露天風呂でととのう極上ステイです。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="171986" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/171986/171986.jpg"
                                alt="全室露天風呂付　ｏｎｓｅｎ　ｇａｒｄｅｎ　湯本庵　清姫"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>4.4</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              全室露天風呂付　ｏｎｓｅｎ　ｇａｒｄｅｎ　湯本庵　清姫
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              全９室離れのデザイナーズ客室は源泉掛流しの温泉露天風呂付！美肌の湯と旬のお食事をお楽しみください♪
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">鹿児島県霧島市隼人町姫城3-124</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥20,115〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D171986"
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
                href="/furusato-tax-sake-brewery-pairing-onsen-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  越後湯沢・諏訪・会津の名酒と温泉旅。
                </div>
              </Link>
            
              <Link
                key="2"
                href="/furusato-tax-award-winning-breakfast-gourmet-hotel-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  函館・神戸・金沢のいくら盛り放題＆美食ビュッフェ。
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
