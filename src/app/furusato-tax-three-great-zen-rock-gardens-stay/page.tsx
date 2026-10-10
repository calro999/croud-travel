import FurusatoStepSection from "@/app/components/FurusatoStepSection";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '日本三大枯山水庭園＆白砂青松の禅の宇宙と瞑想リトリート名宿×ふるさと納税厳選ガイド龍安寺・大仙院・龍源院',
  description: '水を用いずに石と白砂だけで山水の広大無辺な宇宙を表現する禅の美学「日本三大枯山水庭園」（京都右京・龍安寺方丈石庭、京都北区・大徳寺大仙院枯山水、京都北区・大徳寺龍源院一枝坦）。エリザベス女王も絶賛した15個の石の謎、室町禅宗庭園の最高峰、早朝の静寂座禅体験。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ大人の古都マインドフルネス宿泊ガイド。',
  keywords: ["日本三大枯山水庭園", "2026年最新", "龍安寺", "大仙院", "龍源院", "温泉宿", "宿泊予約"],
  alternates: { canonical: baseUrl + '/furusato-tax-three-great-zen-rock-gardens-stay/' },
  openGraph: {
    title: '日本三大枯山水庭園＆白砂青松の禅の宇宙と瞑想リトリート名宿×ふるさと納税厳選ガイド龍安寺・大仙院・龍源院',
    description: '水を用いずに石と白砂だけで山水の広大無辺な宇宙を表現する禅の美学「日本三大枯山水庭園」（京都右京・龍安寺方丈石庭、京都北区・大徳寺大仙院枯山水、京都北区・大徳寺龍源院一枝坦）。エリザベス女王も絶賛した15個の石の謎、室町禅宗庭園の最高峰、早朝の静寂座禅体験。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ大人の古都マインドフルネス宿泊ガイド。',
    url: baseUrl + '/furusato-tax-three-great-zen-rock-gardens-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoRound66ArticlePage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '日本三大枯山水・禅庭園と瞑想リトリート特集', item: baseUrl + '/furusato-tax-three-great-zen-rock-gardens-stay' },
    ],
  };


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本三大枯山水庭園＆白砂青松の禅の宇宙と瞑想リトリート名宿×ふるさと納税完全ガイド【2026年最新】龍安寺・大仙院・龍源院",
    "description": "水を用いずに石と白砂だけで山水の広大無辺な宇宙を表現する禅の美学「日本三大枯山水庭園」（京都右京・龍安寺方丈石庭、京都北区・大徳寺大仙院枯山水、京都北区・大徳寺龍源院一枝坦）。エリザベス女王も絶賛した15個の石の謎、室町禅宗庭園の最高峰、早朝の静寂座禅体験。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ大人の古都マインドフルネス宿泊ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-three-great-zen-rock-gardens-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「翠嵐ラグジュアリーコレクションホテル京都。」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「翠嵐ラグジュアリーコレクションホテル京都。」へは、京福電鉄嵐山本線 嵐山駅 より徒歩約６分 阪急嵐山線 嵐山駅 、JR山陰本線 嵯峨野線 嵯峨嵐山駅 より徒歩約15分。最寄りの嵐山（京福電気鉄道）駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「翠嵐ラグジュアリーコレクションホテル京都。」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「翠嵐ラグジュアリーコレクションホテル京都。」は『京都の歴史に育まれた伝統とモダンの美が融け合う空間で、この地ならではの格別���体験をご提。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「翠嵐ラグジュアリーコレクションホテル京都。」と「京都ブライトンホテル」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">日本三大枯山水・禅庭園と瞑想リトリート特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            日本三大枯山水・禅庭園と瞑想リトリート特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">日本三大枯山水庭園＆白砂青松の禅の宇宙と瞑想リトリート名宿</h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            一粒の水も使わず、箒の目立てによる白砂の波紋と、絶妙なバランスで配された巨石だけで、無限に広がる大海原や深山幽谷の山水を表現する「枯山水（かれさんすい）」。室町時代の禅僧たちが到達した、削ぎ落とされた引き算の美学の頂点に君臨するのが「日本三大枯山水庭園」です。どの角度から眺めても15個の石のうち1個が見えないという「不完全の美」を体現し、英国エリザベス女王も静かに見入った世界遺産・京都龍安寺の石庭。蓬莱山から流れ出す水が大海へと注ぐ人生の縮図を石組で劇的に描いた室町禅庭の最高峰・大徳寺大仙院。そして東洋一の白砂青松と苔の島が静寂の小宇宙を創り出す大徳寺龍源院の「一枝坦（いっしだん）」。縁側に腰を下ろし、小鳥のさえずりと竹の擦れ合う音に耳を傾けながら庭と対峙する時間は、日常の慌ただしさで散らかった思考をリセットし、澄み切った心の静寂を取り戻してくれます。京都の名勝庭園を借景にしたラグジュアリーホテルや名門数寄屋旅館で、四季の京会席と名湯に癒やされる特別な古都の休日。楽天ふるさと納税トラベルクーポンを活用して、深い知性と癒やしに出会う大人の禅リトリートへ出かけましょう。
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行から3年間</span>
            <span>✓ 予約済みの宿泊にも「あとから割引」可能</span>
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

        {/* 3つの魅力・深掘り解説 */}
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
                  15個の石の配置に込められた禅の真理、縁側で過ごす瞑想の静寂
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                三大枯山水庭園の最大の魅力は、眺める人の心境によって見えてくる風景が千変万化する深遠さにあります。「吾唯足知（われただたるをしる）」の蹲（つくばい）が有名な龍安寺で、どの位置から見ても完璧に調和する石の宇宙を眺める。大仙院で激流から大海原へと至る石の物語に自身の人生を重ね合わせる。大徳寺龍源院の四面を囲む四つの異なる庭園を巡る。言葉を超えた静寂の対話が、心に深い落ち着きと新たな視座を与えてくれます。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  大徳寺納豆、本格精進料理、京都が誇る洗練された旬の京懐石美食
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                禅寺の門前には、何百年も受け継がれてきた伝統の発酵食や精進料理の名店が並びます。一休宗純ゆかりの塩気と深い旨味が凝縮された「大徳寺納豆」、季節の湯葉や生麩、京野菜を贅沢に炊き合わせた滋味豊かな精進料理、そして宿泊先の料理旅館でいただく鮎や鱧、近江牛を織り交ぜた至高の京懐石。身体の内側を清らかに整える美食体験が、禅の旅を完璧に締めくくります。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  保津川渓谷を望むラグジュアリーリゾートや御所近くの名門ホテルステイ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                嵐山で渡月橋と保津川を借景に明治の元勲の別邸をリノベートした世界最高峰の「翠嵐ラグジュアリーコレクションホテル京都。」、京都御所の緑を間近に望み洗練されたホスピタリティを誇る「京都ブライトンホテル」、東山山麓の雄大な敷地と名勝庭園・天然温泉スパを併せ持つ「ウェスティン都ホテル京都」。ふるさと納税クーポンを使えば、憧れのスーペリアスイートも実質2,000円で驚くほどお得に予約可能です。
              </p>
            </div>
    
          </div>
        </section>

        {/* 厳選宿セクション */}
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/158466/158466.jpg"
                  alt="翠嵐ラグジュアリーコレクションホテル京都"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.69 (30件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 京都府 京都市右京区嵯峨天龍寺芒ノ馬場町12</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    翠嵐ラグジュアリーコレクションホテル京都
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    清らかな環境と行き届いたおもてなし、地元の旬の素材を活かした極上料理と名湯が自慢の名宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> 京福電鉄嵐山本線 嵐山駅 より徒歩約６分 阪急嵐山線 嵐山駅 、JR山陰本線 嵯峨野線 嵯峨嵐山駅 より徒歩約15分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約49,525円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158466%2F158466.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/685/685.jpg"
                  alt="京都ブライトンホテル"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.78 (4015件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 京都府 京都市上京区仕丁町330</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    京都ブライトンホテル
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「GOODでした。ホテルの方の対応、大変心地よく素晴らしかったです。朝食付きプランで、和食懐石を選んでみました。物足りなかったらどうしよう、と思っていましたが、1つ1つに拘りが感じられて…。」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> 地下鉄「今出川駅」より徒歩８分、 地下鉄「烏丸御池」 2番出口付近よりシャトルバスにて約７分。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約7,200円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F685%2F685.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1167/1167.jpg"
                  alt="ウェスティン都ホテル京都"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.72 (2944件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 京都府 京都市東山区粟田口華頂町1</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    ウェスティン都ホテル京都
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「プラチナ特典のアップグレードと素敵な大浴場マリオットのプラチナ会員です。アップグレードしていただいたお部屋です。ラウンジで夕飯にはならないので外で食べました。お酒に合うオードブル、ちょっとし…。」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> 京都駅八条口より無料送迎バスあり / 地下鉄東西線＜蹴上駅＞から徒歩2分 / 南禅寺・哲学の道まですぐ</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約28,629円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1167%2F1167.html"
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

        <FurusatoStepSection />

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

              <li key="furusato-tax-three-great-zen-temples-mindfulness-stay">
                <Link href="/furusato-tax-three-great-zen-temples-mindfulness-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大禅寺＆座禅瞑想リトリート名宿（南禅寺・妙心寺・大徳寺）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-gardens-heritage-stay">
                <Link href="/furusato-tax-three-great-gardens-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三名園＆大名庭園の四季を愛でる歴史名宿（兼六園・後楽園・偕楽園）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-ancient-capitals-heritage-stay">
                <Link href="/furusato-tax-three-great-ancient-capitals-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大古都＆歴史息づく町並み宿（京都・奈良・鎌倉）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-shakyo-meditation-mindfulness-temple-stay">
                <Link href="/furusato-tax-shakyo-meditation-mindfulness-temple-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">写経・座禅体験＆寺院宿坊心と身体のデトックス宿</span>
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
    
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】翠嵐ラグジュアリーコレクションホテル京都を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 嵐山（京福電気鉄道）駅よりアクセス。京福電鉄嵐山本線 嵐山駅 より徒歩約６分 阪急嵐山線 嵐山駅 、JR山陰本線 嵯峨野線 嵯峨嵐山駅 より徒歩約15分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「翠嵐ラグジュアリーコレクションホテル京都。」にチェックイン。京都の歴史に育まれた伝統とモダンの美が融け合う空間で、この地ならではの格別���体験をご提供いたしまなどの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「翠嵐ラグジュアリーコレクションホテル京都。」の湯処へ。京都の歴史に育まれた伝統とモダンの美が融け合う空間で、この地ならではのとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「翠嵐ラグジュアリーコレクションホテル京都。」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「翠嵐ラグジュアリーコレクションホテル京都。」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「翠嵐ラグジュアリーコレクションホテル京都。」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「京都ブライトンホテル」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と翠嵐ラグジュアリーコレクションホテル京都の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「翠嵐ラグジュアリーコレクションホテル京都。」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「翠嵐ラグジュアリーコレクションホテル京都。」へは、京福電鉄嵐山本線 嵐山駅 より徒歩約６分 阪急嵐山線 嵐山駅 、JR山陰本線 嵯峨野線 嵯峨嵐山駅 より徒歩約15分。最寄りの嵐山（京福電気鉄道）駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「翠嵐ラグジュアリーコレクションホテル京都。」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「翠嵐ラグジュアリーコレクションホテル京都。」は『京都の歴史に育まれた伝統とモダンの美が融け合う空間で、この地ならではの格別���体験をご提。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「翠嵐ラグジュアリーコレクションホテル京都。」と「京都ブライトンホテル」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/saitama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                埼玉県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                香川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/iwate"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岩手県の宿・温泉
              </Link>
              <Link
                href="/prefectures/toyama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                富山県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="furusato-tax-three-great-zen-rock-gardens-stay" />
</div>
        </section>

      </main>
  );
}
