import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '日本三大相撲辻＆国技の歴史とちゃんこ鍋美食・伝統名門宿×ふるさと納税完全ガイド【2026年最新】両国・出雲・住吉',
  description: '神事から始まった日本の国技の起源と熱気「日本三大相撲ゆかりの聖地」（東京墨田・両国回向院と国技館、島根出雲・相撲の元祖野見宿禰神社、大阪住吉・古代相撲発祥の住吉大社）。下町風情と本場の絶品ちゃんこ鍋、出雲神話の名湯・玉造温泉。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ国技文化と美食名宿ガイド。',
  keywords: [
    '日本三大相撲聖地・国技歴史とちゃんこ美食ステイ特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '日本三大',
    '温泉旅館 予約',
    '高級リゾート クーポン'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-three-great-sumo-heritage-onsen-stay' },
  openGraph: {
    title: '日本三大相撲辻＆国技の歴史とちゃんこ鍋美食・伝統名門宿×ふるさと納税完全ガイド【2026年最新】両国・出雲・住吉',
    description: '神事から始まった日本の国技の起源と熱気「日本三大相撲ゆかりの聖地」（東京墨田・両国回向院と国技館、島根出雲・相撲の元祖野見宿禰神社、大阪住吉・古代相撲発祥の住吉大社）。下町風情と本場の絶品ちゃんこ鍋、出雲神話の名湯・玉造温泉。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ国技文化と美食名宿ガイド。',
    url: baseUrl + '/furusato-tax-three-great-sumo-heritage-onsen-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoRound65ArticlePage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '日本三大相撲聖地・国技歴史とちゃんこ美食ステイ特集', item: baseUrl + '/furusato-tax-three-great-sumo-heritage-onsen-stay' },
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
          <span className="text-stone-800 font-medium">日本三大相撲聖地・国技歴史とちゃんこ美食ステイ特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            日本三大相撲聖地・国技歴史とちゃんこ美食ステイ特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            日本三大相撲辻＆国技の歴史とちゃんこ鍋美食・伝統名門宿
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            力士たちの激しいぶつかり合いの地響き、土俵を清める塩の舞、そして観衆の地鳴りのような歓声。古代の農作物の豊凶を占う神事から発祥し、千数百年にわたって受け継がれてきた日本の国技・相撲。その歴史を語る上で欠かせない聖地が「日本三大相撲ゆかりの地」です。江戸時代に勧進相撲が定着し現在も大相撲の聖地として君臨する東京・両国回向院と国技館、日本書紀に記された力くらべの勝者・野見宿禰（のみのすくね）を祀り相撲の祖の地として崇敬される島根・出雲、そして古代の宮中相撲節会（せちえ）に連なる奉納相撲の舞台となった大阪・住吉大社。土俵の神聖な空気に触れ、元力士が腕を振るう本場の出汁が効いた名物ちゃんこ鍋に舌鼓を打った後は、老舗の名門ホテルや出雲神話の美肌温泉旅館で寛ぐ時間。楽天ふるさと納税の宿泊割引クーポンを活用すれば、有効期限3年のゆとりを活かして、実質2,000円の自己負担で日本の伝統美と活力を五感でチャージする素晴らしい旅が叶います。
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
                  神話の時代から続く国技の熱気と力士たちの息遣いを感じる町歩き
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                三大相撲聖地の町には、他では決して味わえない独特の活気と歴史情緒が漂っています。両国では鬢付け油の甘い香りが風に乗り、相撲部屋の看板や力士像が点在。出雲では神話の神々が力比べをしたとされる古社で厳かな神気に包まれ、住吉では朱塗りの反橋（太鼓橋）と古代相撲の石碑が歴史を物語ります。土俵の砂一粒にまで宿る神事の精神に触れることで、日常を力強く生き抜くエネルギーが湧いてきます。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  鶏ガラ出汁が染み渡る本場ちゃんこ鍋と出雲そば、なにわの割烹美食
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                相撲文化の旅は、まさに極上の食体験の連続です。両国では「手をつかない＝負けない」というゲン担ぎから鶏ガラをベースに季節の魚介や野菜、特製つみれをふんだんに炊き込んだ栄養満点のちゃんこ鍋。出雲では割子そばや宍道湖の七道湖畔の七珍料理、大阪では天下の台所が誇る伝統の出汁割烹。力士たちの強靭な肉体を支えてきた伝統の滋味料理が、旅人の胃袋を心底から満たします。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  国技館を望むリバーサイドホテルや日本最古の美肌温泉名旅館ステイ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                隅田川の風情と東京スカイツリーの夜景を一望する第一ホテル両国、清少納言も枕草子で称えた日本最古の美肌湯を源泉かけ流しで堪能できる出雲・玉造温泉の白石家、そして大阪の迎賓館として格式あるサービスと美食を誇るリーガロイヤルホテル。ふるさと納税クーポンを使えば、上質な客室プランも驚くほどお得に予約できます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7428/7428.jpg"
                  alt="第一ホテル両国"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.2 (6372件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 東京都 墨田区横網1-6-1</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    第一ホテル両国
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「部屋は暑かったが価格は非常に手頃全館空調との事でしたが、猛暑でしかも雨。湿度も高かったのでお部屋が暑かった。個別に空調の温度が調整出来たら良かった。このお部屋の広さでこの値段は申し訳無いと思う位、… 2026-09-05 20:57:22投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> 都営地下鉄大江戸線両国駅直結(A1出入口)、JR総武線両国駅より徒歩8分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約6,250円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D7428"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/78179/78179.jpg"
                  alt="出雲・玉造温泉　白石家"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.69 (3977件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 島根県 松江市玉湯町玉造44-2</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    出雲・玉造温泉　白石家
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「スタッフの温かい心遣いに感動しましたスタッフのかたの教育がしっかりされていて、気持ちよく過ごせます。食事の席や車にスタッフのかたからの素敵なご挨拶が書いてありあたたかい気持ちになりました。… 2026-09-05 10:28:00投稿 つづきはこち��…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> 【山陰道】玉造インターから車で約１０分 ■出雲大社から車で約４０分の距離 ■ＪＲ玉造温泉駅より送迎有（事前連絡要）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約12,500円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D78179"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/103/103.jpg"
                  alt="リーガロイヤルホテル大阪　ヴィニェット　コレクション　ｂｙ　ＩＨＧ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.43 (13952件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 大阪府 大阪市北区中之島5-3-68</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    リーガロイヤルホテル大阪　ヴィニェット　コレクション　ｂｙ　ＩＨＧ
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「大満足大満足クチコミの詳細はこちらから https://review.travel.rakuten.co.jp/hotel/voice/103?reviewId=33123479252653 2026-09-04 20:11:57投稿…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> JR大阪駅より無料バス有（15分間隔約15分）／国際会議場隣接／京阪「中之島」駅直結／USJへ予約制無料バスで約25分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約7,032円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D103"
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

              <li key="furusato-tax-samurai-katana-armor-buke-yashiki-heritage-stay">
                <Link href="/furusato-tax-samurai-katana-armor-buke-yashiki-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">武士道・武家屋敷＆甲冑刀剣の歴史名宿（会津・松代・知覧）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-ancient-shrines-sacred-stay">
                <Link href="/furusato-tax-three-great-ancient-shrines-sacred-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大古社＆神域に寄り添う聖地宿（伊勢神宮・出雲大社・大神神社）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-ancient-capitals-heritage-stay">
                <Link href="/furusato-tax-three-great-ancient-capitals-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大古都＆歴史息づく町並み宿（京都・奈良・鎌倉）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-traditional-kamado-rice-irori-stay">
                <Link href="/furusato-tax-traditional-kamado-rice-irori-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">古民家かまど炊きご飯＆囲炉裏郷土料理の宿（白川郷・遠野・丹波篠山）</span>
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
