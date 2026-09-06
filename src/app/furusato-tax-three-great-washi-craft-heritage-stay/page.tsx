'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const officialFurusatoAffUrl = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-rose-500 selection:text-white pb-24">
      {/* Hero Section */}
      <header className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            日本三大和紙・手漉き工芸特集
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            日本三大和紙の里＆工芸温泉宿×ふるさと納税ガイド
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            千年の技と手漉きのぬくもりに触れる日本の美！福井「越前和紙」千五百年の歴史誇る越前の紙漉きとあわら温泉グランディア芳泉、岐阜「美濃和紙」うだつの上がる町並みと長良川の老舗宿十八楼、埼玉「小川和紙」ユネスコ無形文化遺産細川紙の里と秩父美肌の名湯新木鉱泉旅館。日本三大和紙の産地を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold rounded-2xl shadow-xl shadow-rose-950/40 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 text-base md:text-lg"
            >
              <span>🏮 楽天ふるさと納税トラベル特設ページを見る</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-16">
        {/* Intro Lead */}
        <section className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 border-l-4 border-rose-500 pl-4">
            清らかな水と職人の魂が紡ぎ出す和紙の温もり。伝統美に包まれるクラフトツーリズムの旅
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            清流の恵みと職人の手技によって育まれ、千年以上もの保存性を誇る「日本三大和紙」――公家や武士に重用され日本最初の紙幣にも採用された福井の「越前和紙」、長良川の清流と光を透かす薄さと強靭さで知られる岐阜の「美濃和紙」、そしてユネスコ無形文化遺産に登録された手漉き技術を今に伝える埼玉の「小川和紙（細川紙）」。和紙の原料である楮（こうぞ）や三椏（みつまた）を清らかな水で洗い、簀桁（すけた）で丁寧に漉き上げる職人の手仕事は見ているだけで心が洗われます。和紙のあかりが優しく照らす宿の客室で、伝統の技と地元の名湯、四季折々の郷土会席を味わう豊かな時間を楽天ふるさと納税でお楽しみください。
          </p>
        </section>

        {/* 3 Key Merits */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ふるさと納税トラベルで巡る3つの至高メリット
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">実質自己負担2,000円で憧れの名旅館＆特産グルメをアップグレード</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div key="0" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="font-bold text-white text-lg mb-2">実際に紙漉きを体験！自分だけのオリジナル和紙や便箋作り体験</h3>
              <p className="text-slate-400 text-sm leading-relaxed">工房や工芸館で職人から直接手ほどきを受け、旅の思い出に残る世界に一つだけの和紙を創作できます。</p>
            </div>
            <div key="1" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="font-bold text-white text-lg mb-2">和紙の行灯・照明が灯る落ち着いた和モダン空間と源泉かけ流し温泉</h3>
              <p className="text-slate-400 text-sm leading-relaxed">障子や照明に和紙を贅沢にあしらった温かみある客室で、日常のストレスから解き放たれる極上のひととき。</p>
            </div>
            <div key="2" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="font-bold text-white text-lg mb-2">越前ガニ・長良川の天然鮎・武州和牛など地域の至高の味覚を満喫</h3>
              <p className="text-slate-400 text-sm leading-relaxed">清流と豊かな風土が育んだ郷土美食を、ふるさと納税クーポンを活用してお得にアップグレードできます。</p>
            </div>
          </div>
        </section>

        {/* Featured Hotels & Regions */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              厳選名所＆楽天トラベル提携おすすめ名宿
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">楽天ふるさと納税宿泊クーポンが利用可能な極上宿</p>
          </div>

          <div className="space-y-12">
            
            {/* Spot Card 1 */}
            <article key="0" className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700/80 transition duration-300 shadow-xl">
              <div className="p-6 sm:p-8 border-b border-slate-800/80">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold rounded-full mb-3">
                  厳選スポット 01
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  福井県越前市・あわら市ふるさと納税：千五百年の歴史誇る紙漉きの郷「越前和紙の里」と名湯あわら温泉グランディア芳泉
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  大滝神社のお膝元に広がる越前和紙の里。卯立の工芸館で手漉き体験を楽しんだ後は、福井屈指の名湯あわら温泉グランディア芳泉で、庭園露天風呂と若狭牛・越前海の幸会席を堪能します。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center bg-slate-950/40">
                <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <Image
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/16207/16207.jpg"
                    alt="あわら温泉　グランディア芳泉"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-bold text-amber-400 border border-amber-400/30">
                    ★ 4.6（2498件）
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      あわら温泉　グランディア芳泉
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-3 flex items-center gap-1">
                      <span>📍</span>
                      <span>福井県あわら市舟津43-26</span>
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60">
                      ラウンジ飲料は無料！5階天上のSPAは眺望随一★全33室庭園露天風呂付客室や和洋室タイプなど色々♪
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-400">参考最安料金（1名あたり）</div>
                      <div className="text-lg sm:text-xl font-black text-rose-400">
                        20,240円〜
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D16207"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl transition border border-slate-700"
                      >
                        宿泊詳細を見る
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-lg shadow-rose-950/40"
                      >
                        ふるさと納税で予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            {/* Spot Card 2 */}
            <article key="1" className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700/80 transition duration-300 shadow-xl">
              <div className="p-6 sm:p-8 border-b border-slate-800/80">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold rounded-full mb-3">
                  厳選スポット 02
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  岐阜県美濃市・岐阜市ふるさと納税：うだつの上がる町並み「美濃和紙あかり館」と長良川温泉の老舗十八楼ステイ
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  江戸時代の豪商たちが築いた美濃の町並み。幻想的な和紙あかりアートを鑑賞した後は、金華山と長良川を望む創業百六十有余年の名宿「十八楼」で、長良川の鮎料理と鉄分豊富な赤褐色の名湯に癒やされます。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center bg-slate-950/40">
                <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <Image
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/187501/187501.jpg"
                    alt="十八楼離れ　宿いとう"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-bold text-amber-400 border border-amber-400/30">
                    ★ 5.0（9件）
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      十八楼離れ　宿いとう
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-3 flex items-center gap-1">
                      <span>📍</span>
                      <span>岐阜県岐阜市元浜町35-6</span>
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60">
                      岐阜の城下町、川原町本通りの裏手に佇む一棟貸しの宿。絶景長良川を望む、完全貸切「宿いとう」。
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-400">参考最安料金（1名あたり）</div>
                      <div className="text-lg sm:text-xl font-black text-rose-400">
                        14,300円〜
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D187501"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl transition border border-slate-700"
                      >
                        宿泊詳細を見る
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-lg shadow-rose-950/40"
                      >
                        ふるさと納税で予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            {/* Spot Card 3 */}
            <article key="2" className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700/80 transition duration-300 shadow-xl">
              <div className="p-6 sm:p-8 border-b border-slate-800/80">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold rounded-full mb-3">
                  厳選スポット 03
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  埼玉県小川町・秩父市ふるさと納税：ユネスコ無形文化遺産「細川紙・小川和紙」の里散策と二百年の美肌湯・新木鉱泉旅館
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  関東屈指の和紙どころ小川町。伝統の手漉き和紙工房を見学した後は、秩父最古の湯として知られる新木鉱泉旅館で、江戸時代から続く卵水（御代の湯）のツルツル美肌湯と秩父郷土料理を味わいます。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center bg-slate-950/40">
                <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <Image
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/5828/5828.jpg"
                    alt="秩父七湯『御代の湯』　新木鉱泉旅館"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-bold text-amber-400 border border-amber-400/30">
                    ★ 4.6（2157件）
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      秩父七湯『御代の湯』　新木鉱泉旅館
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-3 flex items-center gap-1">
                      <span>📍</span>
                      <span>埼玉県秩父市山田1538番地1</span>
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60">
                      2025楽天トラベルアワード13度目の受賞！民芸調のほのぼの宿！滑らかな卵水と云われる温泉が自慢です
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-400">参考最安料金（1名あたり）</div>
                      <div className="text-lg sm:text-xl font-black text-rose-400">
                        8,220円〜
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5828"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl transition border border-slate-700"
                      >
                        宿泊詳細を見る
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-lg shadow-rose-950/40"
                      >
                        ふるさと納税で予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Official Banner CTA */}
        <section className="bg-gradient-to-r from-rose-950/60 via-red-900/40 to-amber-950/60 border border-rose-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            楽天ふるさと納税トラベルで、今すぐ賢く旅に出よう
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            寄付翌日から最大3年間使える宿泊クーポンで、行きたかった憧れの名宿を今すぐお得にリザーブ。実質2,000円負担で極上の日本再発見の旅へ。
          </p>
          <a
            href={officialFurusatoAffUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-base sm:text-lg font-extrabold rounded-2xl shadow-xl transition duration-300 transform hover:-translate-y-0.5"
          >
            <span>🏮 楽天ふるさと納税トラベル公式特設ページへ</span>
          </a>
        </section>

        {/* Cross Link Section */}
        <section className="border-t border-slate-800/80 pt-12 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Link
              key="0"
              href="/furusato-tax-three-great-pottery-towns-art-stay"
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition mb-2">
                  日本三大陶磁器の郷＆焼き物窯元めぐり宿×ふるさと納税完全ガイド
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  有田焼・美濃焼・瀬戸焼の窯元宿。
                </p>
              </div>
              <div className="mt-4 text-xs font-semibold text-rose-400 flex items-center gap-1">
                <span>記事を読む</span>
                <span>→</span>
              </div>
            </Link>
            <Link
              key="1"
              href="/furusato-tax-three-great-green-tea-regions-healing-stay"
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition mb-2">
                  日本三大銘茶の産地＆茶香炉ヒーリング宿×ふるさと納税完全ガイド
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  静岡茶・宇治茶・朝宮茶の癒やし。
                </p>
              </div>
              <div className="mt-4 text-xs font-semibold text-rose-400 flex items-center gap-1">
                <span>記事を読む</span>
                <span>→</span>
              </div>
            </Link>
            <Link
              key="2"
              href="/tangible-cultural-property-sukiya-carpenter-ryokan-stay"
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition mb-2">
                  職人技が光る伝統工芸＆数寄屋大工の名旅館ふるさと納税完全ガイド
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  有形文化財の名旅館。
                </p>
              </div>
              <div className="mt-4 text-xs font-semibold text-rose-400 flex items-center gap-1">
                <span>記事を読む</span>
                <span>→</span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
