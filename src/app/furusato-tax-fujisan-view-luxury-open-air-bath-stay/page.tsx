import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '富士山を望む絶景露天風呂＆天空テラスの至高の宿×ふるさと納税完全ガイド【2026年最新】河口湖・山中湖・西伊豆土肥',
  description: '日本人の心の原風景「霊峰富士」を湯船から一望する至福の絶景露天風呂ステイ！河口湖畔から逆さ富士とパノラマを望む「大池ホテル」、二万五千坪の名庭園と富士山を真正面に仰ぐ富士吉田「ホテル鐘山苑」、駿河湾の彼方に富士の稜線と茜色の夕陽が沈む西伊豆「土肥ふじやホテル」。四季折々の表情を見せる富士山を眺めながら極上温泉に身を浸す贅沢を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '富士山絶景ビュー天空露天風呂＆名旅館特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '客室露天風呂 予約',
    '温泉旅館 クーポン',
    '高級リゾート 割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-fujisan-view-luxury-open-air-bath-stay/' },
  openGraph: {
    title: '富士山を望む絶景露天風呂＆天空テラスの至高の宿×ふるさと納税完全ガイド【2026年最新】河口湖・山中湖・西伊豆土肥',
    description: '日本人の心の原風景「霊峰富士」を湯船から一望する至福の絶景露天風呂ステイ！河口湖畔から逆さ富士とパノラマを望む「大池ホテル」、二万五千坪の名庭園と富士山を真正面に仰ぐ富士吉田「ホテル鐘山苑」、駿河湾の彼方に富士の稜線と茜色の夕陽が沈む西伊豆「土肥ふじやホテル」。四季折々の表情を見せる富士山を眺めながら極上温泉に身を浸す贅沢を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-fujisan-view-luxury-open-air-bath-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoFujisanViewLuxuryStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '富士山ビュー天空露天風呂＆絶景名宿特集', item: baseUrl + '/furusato-tax-fujisan-view-luxury-open-air-bath-stay' },
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
          <span className="text-stone-800 font-medium">富士山ビュー天空露天風呂＆絶景名宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            富士山絶景ビュー天空露天風呂＆名旅館特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            富士山を望む絶景露天風呂＆天空テラスの至高の宿×ふるさと納税完全ガイド【2026年最新】河口湖・山中湖・西伊豆土肥
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            古来より人々を魅了し続け、四季折々の荘厳な美しさを魅せる日本の象徴・富士山。その雄大な姿を眺めるだけでも特別な体験ですが、「湯船に身を浸しながら、手前に広がる湖や海越しに富士山を真正面に愛でる」という時間は、日常の喧騒を忘れさせる最高峰の贅沢です。河口湖畔に建ち最上階展望風呂から遮るもののない富士の全景が迫る「大池ホテル」。富士吉田の広大な日本庭園を有し、富士山を望む露天風呂「こもれびの湯」で至極の癒やしを提供する名門「ホテル鐘山苑」。そして駿河湾越しに夕陽と富士山の壮麗なシルエットが浮かび上がる西伊豆・土肥温泉の「土肥ふじやホテル」。これらの富士山ビュー特等席の客室や展望露天風呂付きプランは年間を通じて人気が高く予約争奪戦となりますが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期間3年）を活用すれば、実質自己負担2,000円で驚くほどお得にリザーブ可能です。人生で一度は体験したい、富士山と名湯が織りなす感動の絶景旅へ出かけましょう。
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
                  時間とともに色彩を変える霊峰の奇跡！朝焼けの赤富士から星空の富士まで
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                富士山ビュー宿の最大の魅力は、滞在する時間帯によってまったく異なる幻想的な姿を拝める点です。早朝の澄んだ空気の中で朝日を浴びて神々しく赤く染まる「紅富士（赤富士）」、日中の青空に映える凛とした雪化粧、夕暮れのグラデーションに浮かび上がる影富士、そして満天の星々と月光に照らされる深夜のシルエット。温泉に浸かりながら奇跡の瞬間を待つ時間は何物にも代えがたい感動です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  富士五湖の「湖越し富士」と西伊豆の「駿河湾越し富士」の異なる美を堪能
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                山梨県側（河口湖・山中湖・富士吉田）からは、湖面に富士山が反転して映り込む神秘的な「逆さ富士」や、山裾まで大きく広がるダイナミックな山容が目の前に迫ります。一方、静岡県西伊豆側からは、紺碧の駿河湾の水平線の向こうに雪を戴く富士山が浮かび、黄金色の夕陽とともに染まりゆくドラマチックな絶景が広がります。視点が変わることで全く異なる美しさに出会えます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  甲斐・駿河の山海の幸を味わい尽くす！甲州牛や駿河湾地魚の美食会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                富士山麓の湧水で育まれた高原野菜や甲州ワインビーフ、富士桜ポーク、甲州信玄鶏などの山梨の恵み。そして駿河湾から水揚げされる高足ガニや金目鯛、桜えび、しらすといった静岡の海の幸。絶景温泉で心身を清めた後は、地域色豊かな極上料理と地酒・甲州ワインのペアリングに酔いしれる至極の食体験が待っています。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2946/2946.jpg"
                  alt="富士河口湖温泉　富士山の見える温泉旅館　大池ホテル"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.34 (5539件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    山梨県富士河口湖町・河口湖畔に建つ富士展望の名湯旅館
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    富士河口湖温泉　富士山の見える温泉旅館　大池ホテル
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    河口湖畔の絶好のロケーションに位置し、本館最上階の展望大浴場や露天風呂、富士山ビュースイートから正面にそびえる雄大な富士山を仰ぎ見る老舗旅館。湯船から湯煙越しに眺める富士の姿は圧巻の一言。ジャグジー付き客室露天風呂や広々とした和洋室など多彩なお部屋が揃い、カップルからファミリーまで幅広く支持されています。夕食には山梨県産の厳選牛や甲斐サーモンなど地産地消の旬味覚を活かした本格会席を堪能できます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「至れり尽くせりの接客と美味しい料理に感動車で15時に到着すると、雨が降っていたので、ホテルの前まで車を誘導してくださり、荷物も一緒に降ろすのを手伝ってくれました。ホテルに入るとウェルカムドリンクに… 2026-09-04 20:49:12投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 山梨県南都留郡富士河口湖町船津6713-103</div>
                    <div><strong>アクセス:</strong> 駅から無料送迎有■駐車場無料■河口湖駅から車で4分■富士急から車で7分河口湖ICから車で12分新宿駅からバスで約120分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約11,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2946"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg"
                  alt="庭園と感動の宿　富士山温泉　ホテル鐘山苑"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.71 (1127件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    山梨県富士吉田市・二万五千坪の名庭園と富士山を仰ぐ名門宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    庭園と感動の宿　富士山温泉　ホテル鐘山苑
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    約2万5000坪もの広大で美しい日本庭園を誇る、富士五湖エリア屈指の名門温泉旅館。宿の目玉である屋上露天風呂「露天風呂 富士山」からは、遮るものが何一つない圧倒的なスケールで富士山の雄姿を目の前に拝むことができます。夕暮れ時には庭園で名物の霊峰太鼓ショーが毎夜開催され、館内全体が活気とおもてなしの心で包まれます。四季折々の茶室体験や贅を尽くした季節の創作会席料理とともに、心に残る最高峰の宿泊体験が約束されます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「家族全員が大満足、また季節を変えて訪れたい「素晴らしい」の一言です。私ら夫婦、16歳と10歳の子供、83歳の父を連れての旅行に利用させていただきました。お部屋、庭園、お風呂、食事、太鼓のア… 2026-09-04 09:40:01投稿 つづ…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 山梨県富士吉田市上吉田東9-1-18</div>
                    <div><strong>アクセス:</strong> 富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約22,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D19206"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8408/8408.jpg"
                  alt="土肥温泉　土肥ふじやホテル"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.49 (1240件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    静岡県伊豆市・西伊豆土肥温泉の駿河湾サンセットと富士山
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    土肥温泉　土肥ふじやホテル
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    西伊豆随一の湯量を誇る歴史ある土肥温泉に佇み、夕陽に染まる駿河湾の海の向こうに富士山の秀麗な山影を望む絶景宿。名湯・土肥温泉の源泉を引いた展望大浴場や貸切露天風呂からは、水平線に夕日が沈むマジックアワーと富士山の共演が楽しめます。駿河湾で獲れたばかりの新鮮な地魚のお造りや伊勢海老、鮑の踊り焼きなど、西伊豆ならではの豪快で鮮度抜群の海の恵みを心ゆくまでご堪能ください。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「海が近く温泉も良かったです。クチコミの詳細はこちらから 2026-09-05 13:09:18投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 静岡県伊豆市土肥478-1</div>
                    <div><strong>アクセス:</strong> 新東名・長泉沼津IC-縦貫道-中央道・修善寺道-R136にて65分/修善寺駅-東海バス松崎行45分土肥温泉バス停徒歩２分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約5,500円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8408"
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

              <li key="furusato-tax-open-air-bath-with-majestic-fuji-view-stay">
                <Link href="/furusato-tax-open-air-bath-with-majestic-fuji-view-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【富士山ビュー客室露天風呂×ふるさと納税】客室から霊峰富士を独占する名宿ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-sea-of-clouds-sky-terrace-hotel-stay">
                <Link href="/furusato-tax-sea-of-clouds-sky-terrace-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【雲海テラス＆天空リゾート×ふるさと納税】奇跡の絶景に包まれる感動ステイ</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-major-night-view-luxury-hotel-stay">
                <Link href="/furusato-tax-three-major-night-view-luxury-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三大夜景ホテル×ふるさと納税】宝石を散りばめたような天空パノラマ名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-scenic-views-heritage-stay">
                <Link href="/furusato-tax-three-scenic-views-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三景の名宿×ふるさと納税】松島・天橋立・宮島を巡る歴史と美景の旅</span>
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
