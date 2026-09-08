import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '色浴衣と下駄で外湯めぐり＆レトロ温泉街歩き情緒の名宿×ふるさと納税完全ガイド【2026年最新】城崎・渋・銀山',
  description: 'カランコロンと下駄の音を響かせて歩く日本の原風景！柳並木の大谿川沿いに7つの外湯が連なる兵庫・城崎温泉「料理旅館 よしはる」、石畳の坂道と九つの外湯・厄除け巡浴が名物の長野・信州渋温泉「いかり屋旅館」、大正浪漫の木造建築群とガス灯が幻想的な山形「銀山温泉 古勢起屋別館」。色浴衣の無料貸出や名物湯めぐり手形が付いた情緒宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
  keywords: [
    '浴衣で巡るレトロ温泉街歩き＆外湯めぐり特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    'ホテル バイキング クーポン',
    'オールインクルーシブ 割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-retro-onsen-town-yukata-walk-stay' },
  openGraph: {
    title: '色浴衣と下駄で外湯めぐり＆レトロ温泉街歩き情緒の名宿×ふるさと納税完全ガイド【2026年最新】城崎・渋・銀山',
    description: 'カランコロンと下駄の音を響かせて歩く日本の原風景！柳並木の大谿川沿いに7つの外湯が連なる兵庫・城崎温泉「料理旅館 よしはる」、石畳の坂道と九つの外湯・厄除け巡浴が名物の長野・信州渋温泉「いかり屋旅館」、大正浪漫の木造建築群とガス灯が幻想的な山形「銀山温泉 古勢起屋別館」。色浴衣の無料貸出や名物湯めぐり手形が付いた情緒宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
    url: baseUrl + '/furusato-tax-retro-onsen-town-yukata-walk-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoRetroOnsenTownYukataStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '浴衣で巡るレトロ温泉街歩き名宿特集', item: baseUrl + '/furusato-tax-retro-onsen-town-yukata-walk-stay' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">浴衣で巡るレトロ温泉街歩き名宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            浴衣で巡るレトロ温泉街歩き＆外湯めぐり特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            色浴衣と下駄で外湯めぐり＆レトロ温泉街歩き情緒の名宿×ふるさと納税完全ガイド【2026年最新】城崎・渋・銀山
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            宿にチェックインしたら、お気に入りの色浴衣に袖を通し、下駄を鳴らしながら温泉街へ――。湯煙が立ち上るレトロな街並みを歩き、射的場や駄菓子屋を覗き、川沿いの足湯でひと休みしながら名物の外湯を巡る時間は、日本古来の温泉文化の最も美しい情景です。川沿いの柳並木と太鼓橋が絵画のように美しく「街全体が一つの宿」として親しまれる兵庫県・城崎温泉の老舗「料理旅館 よしはる」。昔ながらの石畳の坂道に九つの木造共同浴場が点在し巡浴手形を片手に巡る長野県・信州渋温泉の「いかり屋旅館」。そして大正から昭和初期の木造多層建築が銀山川を挟んで立ち並び、夕暮れにはガス灯が黄金色に輝く奇跡の景観を誇る山形県「銀山温泉 古勢起屋別館」。こうした歴史ある温泉街の人気旅館は予約が取りづらく宿泊単価も高めですが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使えば、実質自己負担2,000円で驚くほどお得に風情ある温泉街ステイが実現します。心躍るレトロな湯の町へ、浴衣姿で出かけましょう。
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行からゆとりの3年間</span>
            <span>✓ すでに予約済みの宿泊にも「あとから割引」可能</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベルクーポンを獲得する →
            </a>
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-amber-200 font-bold px-5 py-3 rounded-2xl border border-amber-300/20 text-xs sm:text-sm transition"
            >
              📖 初めての方向け完全マニュアル
            </Link>
          </div>
        </header>

        {/* 3つの醍醐味セクション */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-6 flex items-center gap-3">
            <span className="text-amber-600 text-xl md:text-2xl">◆</span>
            この旅で体感したい3つの醍醐味
          </h2>
          <div className="grid gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  お気に入りの色浴衣を選んで街へ！写真映え抜群のレトロノスタルジックな風景
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                色鮮やかな女性用色浴衣や粋な男性用浴衣の無料レンタル、番傘や巾着袋の貸出サービスが充実。太鼓橋の上やガス灯が灯る夕暮れの川沿い、木造三層四層の歴史建築を背景に撮る浴衣姿の写真は、旅の最高の思い出の1枚になります。カップルや女子旅、夫婦旅行に絶大な人気を誇ります。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  共同浴場巡りの醍醐味！城崎の「七湯めぐり」や渋温泉の「九湯めぐり」を満喫
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                宿の宿泊者には外湯めぐりパス（デジタル湯めぐり券など）が配布され、個性豊かな外湯（共同浴場）を何度でも無料で利用可能。滝風呂、洞窟風呂、ヒノキ風呂など異なる趣や泉質を巡りながら、地元の人々との温かな触れ合いを楽しむ本物の湯治場体験が味わえます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  射的、スマートボール、温泉まんじゅう、地ビール！夜まで賑わう温泉街の夜散歩
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                夕食後も温泉街の楽しみは続きます。昭和レトロな射的場やスマートボールで盛り上がり、湯上がりに地元のクラフトビールやできたてアツアツの温泉まんじゅうを頬張るひととき。夜風を感じながら下駄の音を響かせて歩く夜散歩は、日常を忘れさせる非日常の楽しさに満ちています。
              </p>
            </div>
  
          </div>
        </section>

        {/* 厳選名宿セクション */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-3 flex items-center gap-3">
              <span className="text-amber-600 text-xl md:text-2xl">◆</span>
              ふるさと納税で泊まる厳選名宿
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              楽天トラベルAPIから最新の実在宿データを取得。対象自治体のふるさと納税クーポンを利用して実質2,000円で泊まれる名宿です。
            </p>
          </div>

          <div className="space-y-8">

            {/* ホテルカード 1 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/79381/79381.jpg"
                  alt="城崎温泉　料理旅館　よしはる"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.92 (259件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    兵庫県豊岡市・城崎温泉の中心に建つ料理自慢の老舗情緒旅館
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    城崎温泉　料理旅館　よしはる
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    城崎温泉のシンボルである大谿川の柳並木通りに近く、七つの外湯めぐりへ出かけるのに絶好のロケーションを誇る名門料理旅館。宿では色鮮やかな色浴衣の無料貸出を行っており、浴衣と下駄に着替えてすぐに風情ある湯の街へ繰り出せます。館内には24時間入浴可能な天然温泉大浴場も完備。夕食には世界最高峰の肉質を誇るブランド牛「但馬牛」のすき焼きやステーキ、冬には日本海名物の活松葉ガニ料理が贅沢に並び、至高の美食と湯めぐりの休日を堪能できます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 兵庫県豊岡市城崎町湯島180</div>
                    <div><strong>アクセス:</strong> ＪＲ　城崎温泉駅より徒歩にて３分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約17,930円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D79381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 2 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/18386/18386.jpg"
                  alt="渋温泉　いかり屋旅館"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.65 (337件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    長野県山ノ内町・信州渋温泉の石畳坂道に佇むノスタルジック宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    渋温泉　いかり屋旅館
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    千三百年の歴史を誇る信州渋温泉のメインストリート・石畳の小路沿いに佇む風情あふれる温泉宿。渋温泉名物の「九湯めぐり（厄除巡浴外湯めぐり）」の鍵を受け取り、手ぬぐいにスタンプを押しながら九つの外湯を巡る伝統体験が楽しめます。宿自慢の源泉かけ流し天然温泉は肌当たり滑らかで、身体の芯からポカポカに温まります。信州サーモンや信州牛、地元高原野菜を使った素朴で心温まる田舎会席料理が、旅情を優しく包み込みます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「温泉が素晴らしく、夏でも涼しく快適温泉が素晴らしいです。お部屋も十分満足です。真夏の8月にクーラーを使わずに寝られるほどに涼しく、朝夕は外湯めぐりにおすすめです。クチコミの詳細はこちら… 2026-08-12 06:02:36投稿 つづきは…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 長野県下高井郡山ノ内町渋温泉</div>
                    <div><strong>アクセス:</strong> 電車：湯田中駅→長野電鉄バス・渋温泉和合橋下車徒歩２分／車：信州中野ＩＣ～Ｒ２９２号線　佐野角間ＩＣより５分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約9,900円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 3 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/111235/111235.jpg"
                  alt="銀山温泉　古勢起屋別館"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.25 (315件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    山形県尾花沢市・銀山温泉の大正浪漫木造建築美とガス灯の宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    銀山温泉　古勢起屋別館
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    大正浪漫の面影を今に伝える奇跡の温泉街・銀山温泉の川沿いに佇む木造建築の老舗別館。夕暮れ時になると銀山川の両岸に灯るガス灯と、川面に映るレトロな街並みは息を呑むほどの美しさ。宿のレトロな客室からはこの幻想的な温泉街を一望できます。源泉かけ流しの名湯で旅の疲れを癒やした後は、山形名物の尾花沢牛や山菜、鮎など地元の恵みを凝縮した手作り会席に舌鼓。まるで大正時代にタイムスリップしたかのような特別な宿泊体験をお楽しみください。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 山形県尾花沢市銀山新畑417</div>
                    <div><strong>アクセス:</strong> 国道１３号線尾花沢市内よりお車にて３０分。 ＪＲ利用のお客様は１５:４５の送迎あり（要予約）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約15,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D111235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

              <li key="furusato-tax-japan-oldest-classic-hotel-heritage-stay">
                <Link href="/furusato-tax-japan-oldest-classic-hotel-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本最古のクラシックホテル×ふるさと納税】時を超える名門建築ヘリテージステイ</span>
                </Link>
              </li>
  

              <li key="furusato-tax-kominka-heritage-townhouse-auberge-stay">
                <Link href="/furusato-tax-kominka-heritage-townhouse-auberge-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【古民家再生・町家オーベルジュ×ふるさと納税】築100年の重伝建商家に泊まる旅</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-great-ancient-baths-heritage-stay">
                <Link href="/furusato-tax-three-great-ancient-baths-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三古湯×ふるさと納税】道後・有馬・白浜の悠久の湯守り宿完全ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-onsen-steam-natural-hotspring-healing-stay">
                <Link href="/furusato-tax-onsen-steam-natural-hotspring-healing-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【湯煙・地獄蒸し＆砂むし温泉×ふるさと納税】別府鉄輪・指宿・雲仙の大地熱スチーム宿</span>
                </Link>
              </li>
  
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
