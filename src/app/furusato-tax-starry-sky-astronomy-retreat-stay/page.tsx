import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本三大星空・天体観測リゾート×ふるさと納税完全ガイド【2026年最新】阿智村・八ヶ岳・大山の満天星空宿',
  description: '環境省認定の日本一の星空・長野県阿智村や八ヶ岳清里、鳥取大山のスターウォッチングホテルをふるさと納税でお得に予約！天体望遠鏡テラスや星空露天風呂を備えた名宿と返礼クーポン活用術を詳しくご紹介。',
  keywords: ['ふるさと納税', '楽天トラベル', '宿泊クーポン', '星空・天体観測リゾート特集', '温泉旅館', 'ホテル予約', '2026年最新'],
  openGraph: {
    title: '日本三大星空・天体観測リゾート×ふるさと納税完全ガイド【2026年最新】阿智村・八ヶ岳・大山の満天星空宿',
    description: '環境省認定の日本一の星空・長野県阿智村や八ヶ岳清里、鳥取大山のスターウォッチングホテルをふるさと納税でお得に予約！天体望遠鏡テラスや星空露天風呂を備えた名宿と返礼クーポン活用術を詳しくご紹介。',
    url: 'https://croud-travel.pages.dev/furusato-tax-starry-sky-astronomy-retreat-stay',
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
          <span className="text-slate-200">星空・天体観測リゾート特集</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-5 shadow-lg shadow-amber-500/20">
            星空・天体観測リゾート特集
          </span>
          <h1 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            日本三大星空・天体観測リゾート×ふるさと納税ガイド
          </h1>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed font-medium">
            環境省認定の日本一の星空・長野県阿智村や八ヶ岳清里、鳥取大山のスターウォッチングホテルをふるさと納税でお得に予約！天体望遠鏡テラスや星空露天風呂を備えた名宿と返礼クーポン活用術を詳しくご紹介。
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
            <span>都会では見られない天の川と無数の星々を、返礼クーポンで泊まる絶景宿で</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
            澄み切った夜空に広がる無数の星、肉眼でくっきりと捉えられる天の川。光害の少ない高原や山麓のリゾートホテルでは、専任ガイドによる天体観測ツアーや大型望遠鏡を備えた専用ドーム、星空を仰ぐ露天風呂など、非日常の感動体験が待っています。楽天ふるさと納税を活用して、天空のパノラマと天然温泉に包まれる極上リトリートを叶えましょう。
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
                    満天の星空ナイトツアーや天体望遠鏡プログラム付き
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    ゴンドラで標高1,400mの山頂へ向かうナイトツアーや、ホテル屋上テラスでの星空解説会など、宿泊者ならではのプレミアムな観測体験がセットになったプランをふるさと納税で賢く手配できます。
                  </p>
                </div>
              </div>
            
              <div key="1" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    02
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    星空を映すインフィニティ露天風呂と清涼な高原空気
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    湯面に星々が反射する幻想的な露天風呂や、心地よい夜風を感じるウッドデッキテラス。日常の喧騒から完全に解放され、心身が深くほどけていくリラクゼーションを味わえます。
                  </p>
                </div>
              </div>
            
              <div key="2" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    03
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    3年間有効！新月期や流星群のベストシーズンを逃さず予約
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    楽天トラベルふるさと納税クーポンは獲得から最大3年間利用可能。ペルセウス座流星群やふたご座流星群、月明かりのない新月の日など、天体観測のベストコンディションを狙って柔軟に旅程を組むことができます。
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
            
                <div key="achi_starry_sky" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>長野県阿智村ふるさと納税：環境省認定「日本一の星空」ナイトツアー＆美肌温泉</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      「日本一星空が美しい村」として全国に名を馳せる南信州・阿智村。ヘブンスそのはらの天空の楽園ナイトツアーと、pH9.7を誇る全国屈指の「美肌の湯・昼神温泉」が融合した贅沢な湯宿ステイが楽しめます。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="153619" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/153619/153619.jpg"
                                alt="昼神温泉　信州公共の宿　鶴巻荘"
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
                              昼神温泉　信州公共の宿　鶴巻荘
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              やわらかな畳敷きの浴場で和の粋と深いやさしさに包まれる、ツルツルの温泉と豊かな自然に囲まれた純和風宿
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">長野県下伊那郡阿智村智里332-4</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥10,000〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D153619"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="5987" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/5987/5987.jpg"
                                alt="昼神温泉　癒楽（ゆら）の宿　清風苑"
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
                              昼神温泉　癒楽（ゆら）の宿　清風苑
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              【2025年楽天トラベルブロンズアワード受賞】★日本一の星空と笑顔のおもてなし
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">長野県下伊那郡阿智村智里338-19</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥16,100〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5987"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="17720" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/17720/17720.jpg"
                                alt="昼神温泉　石苔亭いしだ"
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
                              昼神温泉　石苔亭いしだ
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              平屋造り全17室純和風旅館◇露天風呂付き客室◇能舞台定期公演◇信州会席、美肌の湯、スパ、貸切風呂
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">長野県下伊那郡阿智村智里332-3</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥35,200〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D17720"
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
              
                <div key="kiyosato_starry_sky" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>山梨県北杜市ふるさと納税：八ヶ岳南麓・清里高原の星空テラス＆本格天体望遠鏡</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      標高1,000mを超える八ヶ岳南麓は、空気が澄み渡り晴天率も日本トップクラス。ホテル専用の天文台やウッドデッキテラスから、天の川や四季の星座をじっくり観察できる極上の高原リゾートです。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="29370" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/29370/29370.jpg"
                                alt="八ヶ岳・清里高原　清泉寮　ホテル＆コテージ"
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
                              八ヶ岳・清里高原　清泉寮　ホテル＆コテージ
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              標高１４００ｍ！八ヶ岳南麓に位置する清泉寮◆眺望の良さと温かいおもてなしが自慢の宿
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">山梨県北杜市高根町清里3545</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥6,200〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D29370"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="38754" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/38754/38754.jpg"
                                alt="八ヶ岳グレイスホテル"
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
                              八ヶ岳グレイスホテル
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              全客室より八ヶ岳を一望★星空観察会★毎晩開催中！清里まで車で5分。直前割や一人旅も大歓迎！
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">長野県南佐久郡南牧村野辺山217-1</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥10,200〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D38754"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="28780" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/28780/28780.jpg"
                                alt="八ヶ岳の恵みを味わうレストラン＆ホテル　オーベルジュ清里"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            
                            
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>5.0</span>
                              </div>
                            
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              八ヶ岳の恵みを味わうレストラン＆ホテル　オーベルジュ清里
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              自家農園野菜を使ったレストランが人気！牧場、工房、農園など体験も充実のホテル
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">山梨県北杜市高根町清里３５４５－９４３　コートドゥヴ���ール内</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥5,900〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28780"
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
              
                <div key="daisen_starry_sky" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>鳥取県伯耆町ふるさと納税：「星取県」大山山麓のダイナミックな星空＆名峰温泉</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      どの市町村からも天の川が見えることから「星取県」を宣言した鳥取県。名峰・大山の山懐に抱かれたリゾートホテルで、大山山麓の豊かな自然と夜空を埋め尽くす無数の星々、そして良質な天然温泉に癒やされます。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    
                      <div key="19880" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/19880/19880.jpg"
                                alt="ホテル大山　しろがね"
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
                              ホテル大山　しろがね
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              四季の移ろいを肌で感じながら自然と対話する。そんなひとときをお過ごし下さい。
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">鳥取県西伯郡大山町大山136-2</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥8,690〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D19880"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="8496" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/8496/8496.jpg"
                                alt="休暇村　奥大山　（旧　大山鏡ヶ成）"
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
                              休暇村　奥大山　（旧　大山鏡ヶ成）
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              自然豊かな高原で、四季折々くつろぎ楽しめる公共の宿
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">鳥取県日野郡江府町御机字鏡ヶ成709-1</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥14,000〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8496"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    
                      <div key="196404" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            
                              <Image
                                src="https://img.travel.rakuten.co.jp/share/HOTEL/196404/196404.jpg"
                                alt="ＨＯＴＥＬ星取テラスせきがね"
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
                              ＨＯＴＥＬ星取テラスせきがね
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              【クチコミ4.5点】現代の名工の会席料理と源泉かけ流し露天風呂を満天の星空の下心から堪能できる宿
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">鳥取県倉吉市関金宿1397-3</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ¥7,150〜
                            </span>
                          </div>
                          <a
                            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D196404"
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
                href="/furusato-tax-infinity-onsen-sky-ocean-view-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  絶景インフィニティ温泉×海空一体パノラマ露天宿
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  海と空、そして湯面が一体化する開放感抜群のインフィニティ湯宿。
                </div>
              </Link>
            
              <Link
                key="1"
                href="/furusato-tax-secret-hotspring-lamp-retreat-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  秘湯・ランプの宿×デジタルデトックス温泉旅
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  電気の通わない山奥の宿でランプの灯火と満天の星に癒やされる静寂旅。
                </div>
              </Link>
            
              <Link
                key="2"
                href="/furusato-tax-solo-retreat-private-onsen-stay"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  おひとり様贅沢ソロ温泉ワーケーション旅
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  客室露天風呂とおこもり空間で誰にも邪魔されない至福のリトリート。
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
