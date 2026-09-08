import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '日本三大茶道文化都市＆茶室庭園と抹茶・上生菓子を愛でる数寄屋名宿×ふるさと納税完全ガイド【2026年最新】京都・松江・金沢',
  description: '侘び寂びの精神と粋なもてなしが息づく「日本三大茶道文化都市」（京都・千利休と三千家本山、島根・不昧公ゆかりの出雲松江、石川・加賀前田家の茶の湯金沢）。名勝日本庭園の茶室、老舗和菓子司の上生菓子、伝統数寄屋建築の老舗名旅館。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ大人の茶の湯リトリート完全ガイド。',
  keywords: [
    '日本三大茶道都市・茶の湯文化と数寄屋名宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '日本三大',
    '温泉旅館 予約',
    '高級リゾート クーポン'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-three-great-tea-ceremony-cities-stay' },
  openGraph: {
    title: '日本三大茶道文化都市＆茶室庭園と抹茶・上生菓子を愛でる数寄屋名宿×ふるさと納税完全ガイド【2026年最新】京都・松江・金沢',
    description: '侘び寂びの精神と粋なもてなしが息づく「日本三大茶道文化都市」（京都・千利休と三千家本山、島根・不昧公ゆかりの出雲松江、石川・加賀前田家の茶の湯金沢）。名勝日本庭園の茶室、老舗和菓子司の上生菓子、伝統数寄屋建築の老舗名旅館。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ大人の茶の湯リトリート完全ガイド。',
    url: baseUrl + '/furusato-tax-three-great-tea-ceremony-cities-stay',
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
      { '@type': 'ListItem', position: 3, name: '日本三大茶道都市・茶の湯文化と数寄屋名宿特集', item: baseUrl + '/furusato-tax-three-great-tea-ceremony-cities-stay' },
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
          <span className="text-stone-800 font-medium">日本三大茶道都市・茶の湯文化と数寄屋名宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            日本三大茶道都市・茶の湯文化と数寄屋名宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            日本三大茶道文化都市＆茶室庭園と抹茶・上生菓子を愛でる数寄屋名宿
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            一服の温かいお茶に心を込め、静寂の中で庭の木々や器の景色を愛でる茶の湯の文化。武将たちが戦乱の世に心の平安を求め、町衆たちが粋と美を競い合った茶道文化が、今なお市民の暮らしの中に色濃く根付く都市、それが「日本三大茶道文化都市」です。千利休以来の茶の湯の本山であり表千家・裏千家・武者小路千家が今に伝える都・京都。大名茶人として名高い松平不昧（ふまい）公が茶道「不昧流」を打ち立て、和菓子の消費量日本一を誇る島根・松江。そして加賀百万石の前田家歴代藩主が京都の文化人を招いて武家茶道を極めた石川・金沢。名勝日本庭園の静けさの中でお点前をいただき、季節の移ろいを繊細に表現した美しい上生菓子に舌鼓を打った後は、名匠の技が光る数寄屋造りの名門旅館で極上のもてなしを受ける時間。楽天ふるさと納税トラベルクーポンを活用して、五感が研ぎ澄まされる極上の茶の湯ステイへ出かけましょう。
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
                  千利休、松平不昧公、前田利家、茶人たちの美意識が息づく歴史茶室巡り
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                日本三大茶道都市には、国宝や重要文化財に指定された歴史ある名茶室が数多く保存されています。京都の大徳寺や妙喜庵待庵、松江の明々庵や菅田庵、金沢の兼六園三芳庵や成巽閣。一畳台目や二畳といった極限まで無駄を削ぎ落とした空間に座し、炉の湯の沸く音（松風）に耳を澄ませる時間は、頭の中の雑念を払い、澄み切ったマインドフルネスの境地へと導いてくれます。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  全国屈指の老舗和菓子司が創り出す芸術的な上生菓子と抹茶
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                お茶の文化が発展した地には、必ず最高峰の和菓子文化が存在します。京都の老舗が誂える四季の京菓子、松江の不昧公三大銘菓（山川・若草・菜種の里）、金沢の加賀百万石の雅を映した落雁や彩り豊かな上生菓子。職人が一つひとつ手作業で季節の花鳥風月を写し取った美しい和菓子を口に含み、ほろ苦い点てたての抹茶をいただく瞬間は、至高の口福をもたらします。
              </p>
            </div>
    

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  数寄屋大工が手掛けた名旅館や庭園を望む洗練されたラグジュアリーホテル
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                祇園の町家風情と現代のラグジュアリーが調和する京都のザ・セレスティン、宍道湖の美しい夕日と自家源泉の露天風呂を全室から楽しめる松江の「なにわ一水」、兼六園すぐそばで大正ロマンのステンドグラスと天然温泉が彩る金沢白鳥路ホテル山楽。ふるさと納税クーポンを使えば、格式高い名門客室も実質2,000円で驚くほど賢く手に入ります。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/160991/160991.jpg"
                  alt="ホテル　ザ　セレスティン京都祇園"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.67 (233件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 京都府 京都市東山区八坂通東大路西入小松町572</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    ホテル　ザ　セレスティン京都祇園
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    清らかな環境と行き届いたおもてなし、地元の旬の素材を活かした極上料理と名湯が自慢の名宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> 京都駅八条口より無料シャトルバスで約10分。京阪電車「祇園四条」より徒歩10分。阪急電車「京都河原町」より徒歩12分。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約17,670円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D160991"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/52116/52116.jpg"
                  alt="松江しんじ湖温泉　なにわ一水"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.68 (886件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 島根県 松江市千鳥町63</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    松江しんじ湖温泉　なにわ一水
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「他の画像やクチコミの詳細はこちらから https://review.travel.rakuten.co.jp/hotel/voice/52116?reviewId=33123479213818 2026-08-31 13:22:49投稿…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> ＪＲ 松江駅より車で約１０分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約13,850円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D52116"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004.jpg"
                  alt="金沢白鳥路　ホテル山楽"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.55 (2831件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">所在地: 石川県 金沢市丸の内6-3</div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    金沢白鳥路　ホテル山楽
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    「観光に最適な立地と郷土料理に大満足とにかくロケーションが観光に最適、施設は便利であって欲しいところはすべて新しく(ランドリーの洗濯機は洗剤自動投入など)、とても清潔で、一方で調度品や装飾などは古き… 2026-09-04 17:39:28投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>アクセス:</strong> ■金沢駅⇔ホテル無料送迎バス■金沢駅東口より車で１０分■金沢駅東口⑥、⑦乗り場【兼六園下・金沢城】バス停下車徒歩５分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約7,250円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9004"
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
    

              <li key="furusato-tax-three-great-wagashi-tea-culture-stay">
                <Link href="/furusato-tax-three-great-wagashi-tea-culture-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大和菓子処＆茶の湯文化と銘菓名宿（京都・松江・金沢）</span>
                </Link>
              </li>
    

              <li key="furusato-tax-three-great-green-tea-regions-healing-stay">
                <Link href="/furusato-tax-three-great-green-tea-regions-healing-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大銘茶の産地＆茶畑絶景と茶風呂名湯宿（宇治・狭山・静岡）</span>
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
