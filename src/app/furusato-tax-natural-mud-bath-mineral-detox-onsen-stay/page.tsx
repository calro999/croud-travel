import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '天然ミネラル泥パックで全身ツルツル美肌！極上泥湯温泉＆湯治名旅館×ふるさと納税完全ガイド【2026年最新】八幡平後生掛・霧島・別府鉄輪',
  description: '地球のマグマの恵み・天然ミネラルたっぷりの泥に包まれる究極の美肌湯！「馬で来て足駄で帰る」と称される八幡平の名湯泥風呂（火山泥湿湯）「後生掛温泉」、天然泥パックの元祖として乳白色の泥を全身に塗る鹿児島「さくらさくら温泉」、鉄輪温泉名物の美肌クレイ泥湯と地獄蒸し郷土料理が評判の「別府・鉄輪 神丘温泉 豊山荘」。お肌が生まれ変わる極上の泥湯ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '天然泥パック＆泥湯温泉デトックス名宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-natural-mud-bath-mineral-detox-onsen-stay/' },
  openGraph: {
    title: '天然ミネラル泥パックで全身ツルツル美肌！極上泥湯温泉＆湯治名旅館×ふるさと納税完全ガイド【2026年最新】八幡平後生掛・霧島・別府鉄輪',
    description: '地球のマグマの恵み・天然ミネラルたっぷりの泥に包まれる究極の美肌湯！「馬で来て足駄で帰る」と称される八幡平の名湯泥風呂（火山泥湿湯）「後生掛温泉」、天然泥パックの元祖として乳白色の泥を全身に塗る鹿児島「さくらさくら温泉」、鉄輪温泉名物の美肌クレイ泥湯と地獄蒸し郷土料理が評判の「別府・鉄輪 神丘温泉 豊山荘」。お肌が生まれ変わる極上の泥湯ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-natural-mud-bath-mineral-detox-onsen-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoNaturalMudBathStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '天然泥パック＆泥湯温泉名宿特集', item: baseUrl + '/furusato-tax-natural-mud-bath-mineral-detox-onsen-stay' },
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
          <span className="text-stone-800 font-medium">天然泥パック＆泥湯温泉名宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            天然泥パック＆泥湯温泉デトックス名宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            天然ミネラル泥パックで全身ツルツル美肌！極上泥湯温泉＆湯治名旅館×ふるさと納税完全ガイド【2026年最新】八幡平後生掛・霧島・別府鉄輪
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            地下深くの火山活動によって噴き出す、微細なミネラル成分を豊富に含んだ天然の温泉泥「泥湯（どろゆ・クレイバス）」。通常の温泉水とは比較にならないほど高い吸着力と保温力を持ち、毛穴の奥の皮脂や老廃物をすっきりと取り除きながら、ミネラルを肌の角質層深くまで届けてくれる天然のエステ・デトックス温泉です。湯底から湧き出す温かい火山泥に身を沈めると、とろりとした独特の浮力と心地よい重みで全身の緊張がほどけ、洗い流した後の肌は驚くほど滑らかで吸い付くような陶器肌へと生まれ変わります。十和田八幡平国立公園の標高約1,000mに位置し、「馬で来て足駄で帰る（不自由な身体で来ても下駄で元気に歩いて帰れる）」と語り継がれる名物泥風呂（火山泥湿湯）や箱蒸し風呂を誇る秋田県「後生掛温泉」、硫黄成分をたっぷり含んだ天然の泥パックを顔や全身に塗って乾かす元祖泥湯リゾートとして全国の美肌ファンに愛される鹿児島県「さくらさくら温泉」、そして日本屈指の湯量を誇る別府鉄輪で良質な鉱泥クレイと名物の地獄蒸し料理を堪能できる「神丘温泉 豊山荘」。地球の命の息吹を肌で感じる稀少な泥湯宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、極上の再生美肌旅へ出かけましょう。
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
                  天然クレイの強力な毛穴クレンジング効果！洗い流した瞬間に驚く「陶器のようなツルツル肌」
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                火山灰や温泉ミネラルが自然発酵したキメ細やかな泥が、毛穴の汚れや余分な皮脂を吸着。全身にパックして温泉で洗い流せば、まるで高級エステを受けたかのような滑らかな美肌を実感できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  泥の保温力と浮力による温熱効果！血行を劇的に促進し慢性疲労や冷え性を解消
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                泥は熱を逃がしにくいため、身体の芯までじっくりと温まり、入浴後もポカポカ感が長時間持続。泥の中に沈む独特の浮遊感と適度な圧力が、筋肉のコリや関節の痛みを和らげてくれます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  地獄蒸し料理や山海の幸！温泉の蒸気熱と大地の恵みを味わう滋味ディナー
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                温泉の高温蒸気熱を利用して一気に蒸し上げる「地獄蒸し料理」や、黒豚しゃぶしゃぶ、比内地鶏やきりたんぽ鍋など、泥湯の里ならではの素朴でヘルシーな郷土の美味が身体を内側から整えます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/38467/38467.jpg"
                  alt="後生掛温泉"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.66 (274件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    秋田県鹿角市・開湯三百年！名物火山泥湿湯（泥風呂）と箱蒸し風呂で名高い八幡平の湯治聖地
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    後生掛温泉
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    十和田八幡平国立公園の雄大な大自然、標高約1,000mの高原に位置し、開湯三百有余年の歴史を誇る名門湯治宿。宿の名物は、足元から湧き出る天然の温かい火山泥に首まで浸かる「泥風呂（火山泥湿湯）」。きめ細やかな泥の心地よい重みと温熱効果が全身を包み込み、神経痛や美肌に絶大な効能を誇ります。さらに首だけを出して蒸気を浴びる「箱蒸し風呂」や滝風呂、神経痛の湯など7つの多彩な湯殿を完備。比内地鶏や八幡平ポーク、山菜を使った滋味深い手作り料理とともに、本物の湯治の力を実感できる温泉好き憧れの宿です。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「スムーズな受付と個室感覚の食事で快適な温泉旅チェックインの際、2年前の情報が反映されてフロントの方も不要な説明を省略してくださり、スムーズに短時間で部屋に入れました。今回も、後生掛温泉ならでは… 2026-08-26 17:12:57投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 秋田県鹿角市八幡平熊沢国有林内</div>
                    <div><strong>アクセス:</strong> 鹿角八幡平ICより車で45分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約18,900円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D38467"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15081/15081.jpg"
                  alt="どろ湯の旅籠さくらさくら温泉　霧島神宮温泉郷"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.41 (919件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    鹿児島県霧島市・天然泥パック温泉の元祖！美肌の泥を全身に塗って乾かす贅沢露天リゾート
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    どろ湯の旅籠さくらさくら温泉　霧島神宮温泉郷
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    天孫降臨の神話が息づく霧島神宮温泉郷の豊かな森の中に佇み、「天然泥パック温泉」のパイオニアとして全国から女性客やカップルが訪れる人気宿。露天風呂の湯船の底から採取したミネラル豊富な純白の天然泥が洗面器に用意されており、顔や全身にたっぷり塗って乾燥させてから温泉で洗い流すことで、くすみが消えて驚くほどの透明感とモチモチ肌を手に入れることができます。夕食には鹿児島名物の黒豚しゃぶしゃぶや地鶏の炭火焼きなど郷土の味覚を堪能でき、大自然の中で心身ともに若返る休日をお過ごしいただけます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「食事も接客も最高、猫ちゃんも可愛くて癒やしご飯も美味しくて、接客が丁寧、お風呂も肌がツルツルになりました!!猫ちゃん甘えん坊で可愛いかった!!クチコミの詳細はこちらから 2026-08-10 09:28:13投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 鹿児島県霧島市霧島田口2324-7</div>
                    <div><strong>アクセス:</strong> 【ＪＲ霧島神宮駅】下車タクシー10分。【鹿児島空港】から車で40分。【鹿児島市内】より車で1時間10分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約6,500円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D15081"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/12700/12700.jpg"
                  alt="別府・鉄輪　神丘温泉　豊山荘"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.56 (159件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    大分県別府市・鉄輪温泉の隠れた名湯！天然美肌クレイ泥湯と源泉地獄蒸し料理の温泉宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    別府・鉄輪　神丘温泉　豊山荘
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    湯煙が立ち上る日本屈指の温泉街・別府鉄輪の静かな高台に位置し、良質な自家源泉と名物「泥湯（クレイ温泉）」を湛えるアットホームな温泉旅館。鉄輪名物の天然ミネラルを豊富に含んだ泥湯は、肌に優しく吸い付くような極上の肌触りで、入浴後は全身がツルツルになると大評判です。敷地内の地獄窯（高温蒸気釜）で素材の旨味を凝縮させて蒸し上げる「豊後牛や海の幸の地獄蒸し会席」も絶品。温泉の力と大地のエネルギーを五感で味わい尽くす、心温まる別府の湯治滞在が楽しめます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「別府唯一のアルカリ性温泉と丁寧な接客お部屋はそれなりでしたが、温泉の泉質が別府唯一のアルカリ性とのこと。トロッとした肌触りがとても良かったです。接客も丁寧で安心して泊まることができました。… 2026-06-26 23:31:01投稿 つづ…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 大分県別府市小倉町30番22号</div>
                    <div><strong>アクセス:</strong> タクシーＪＲ日豊本線別府駅より約１５分、車　大分自動車道別府ＩＣより鉄輪方面へ2分　小倉入口信号を右折　　</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約10,500円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12700"
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

              <li key="furusato-tax-sand-bath-sunamushi-detox-onsen-stay">
                <Link href="/furusato-tax-sand-bath-sunamushi-detox-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【天然砂むし温泉＆名湯デトックス×ふるさと納税】指宿・別府の再生宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-major-bihada-hotspring-stay">
                <Link href="/furusato-tax-three-major-bihada-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三大美肌の湯×ふるさと納税】嬉野・斐乃上・喜連川のとろとろ美肌宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-carbonated-spring-effervescent-onsen-stay">
                <Link href="/furusato-tax-carbonated-spring-effervescent-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【天然炭酸泉・泡の秘湯×ふるさと納税】長湯・白骨・有馬の血流促進名湯宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-pure-kakenagashi-secret-hotspring-stay">
                <Link href="/furusato-tax-pure-kakenagashi-secret-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿</span>
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
