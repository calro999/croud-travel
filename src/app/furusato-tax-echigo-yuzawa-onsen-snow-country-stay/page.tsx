import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【越後湯沢温泉×ふるさと納税】新幹線直結！川端康成「雪国」の文学名湯＆魚沼産コシヒカリ美食ステイ完全ガイド｜高半・松泉閣花月・NASPAニューオータニ',
  description: '東京から上越新幹線で約70分！川端康成の名作『雪国』の舞台・越後湯沢温泉を楽天ふるさと納税でお得に旅する。川端康成が逗留した創業九百年の老舗「雪国の宿 高半」、全館畳敷きと四つの露天風呂が自慢の「松泉閣 花月」、ニューオータニ直営の本格温泉リゾート「NASPAニューオータニ」を徹底比較。新潟県湯沢町クーポン活用術を網羅。',
  keywords: '越後湯沢温泉 ふるさと納税,雪国の宿高半 ふるさと納税,松泉閣花月 クーポン,NASPAニューオータニ 宿泊,湯沢町 ふるさと納税 楽天トラベル',
  openGraph: {
    title: '【越後湯沢温泉×ふるさと納税】新幹線直結！川端康成「雪国」の文学名湯＆魚沼産コシヒカリ美食ステイ完全ガイド｜高半・松泉閣花月・NASPAニューオータニ',
    description: '東京から上越新幹線で約70分！川端康成の名作『雪国』の舞台・越後湯沢温泉を楽天ふるさと納税でお得に旅する。川端康成が逗留した創業九百年の老舗「雪国の宿 高半」、全館畳敷きと四つの露天風呂が自慢の「松泉閣 花月」、ニューオータニ直営の本格温泉リゾート「NASPAニューオータニ」を徹底比較。新潟県湯沢町クーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-echigo-yuzawa-onsen-snow-country-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-echigo-yuzawa-onsen-snow-country-stay',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            【越後湯沢温泉×ふるさと納税】新幹線直結！川端康成「雪国」の文学名湯＆魚沼産コシヒカリ美食ステイ完全ガイド｜高半・松泉閣花月・NASPAニューオータニ
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            東京から上越新幹線で約70分！川端康成の名作『雪国』の舞台・越後湯沢温泉を楽天ふるさと納税でお得に旅する。川端康成が逗留した創業九百年の老舗「雪国の宿 高半」、全館畳敷きと四つの露天風呂が自慢の「松泉閣 花月」、ニューオータニ直営の本格温泉リゾート「NASPAニューオータニ」を徹底比較。新潟県湯沢町クーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">新潟県湯沢町</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            「国境の長いトンネルを抜けると雪国であった」——越後湯沢温泉で巡る文学の足跡と極上の米・酒・湯治ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ノーベル文学賞作家・川端康成が不朽の名作『雪国』を執筆したことで世界的に知られる越後湯沢温泉。東京駅から上越新幹線でわずか約70分という抜群のアクセスを誇りながら、谷川連峰の雄大な山々に抱かれた白銀の別世界が広がります。平安時代末期に源泉が発見されたと伝わる歴史ある湯は、肌に優しく柔らかなアルカリ性単純温泉。湯上がりの肌がしっとりと潤い、長旅の疲れをじんわりと解きほぐしてくれます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            越後湯沢の旅をさらに特別なものにするのが、日本一の米どころ南魚沼が誇る「魚沼産コシヒカリ」の炊きたてご飯と、新潟が世界に誇る銘酒（八海山・鶴齢・上善如水など）の数々。さらに冬のスキー＆スノーボード、秋の紅葉トレッキング、夏の爽やかな高原アクティビティと、四季を通じて魅力が尽きません。新潟県湯沢町へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名旅館や一流リゾートホテルへお得に滞在でき、贅を尽くした雪国ステイが実現します。
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">新潟県湯沢町のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>


          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/18332/18332.jpg"
                alt="越後湯沢湯元　卵の湯　雪國の宿　高半"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.72（口コミ 416件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">新潟県湯沢町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  越後湯沢湯元　卵の湯　雪國の宿　高半
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業九百余年・川端康成が「雪国」を執筆した歴史宿！かすみ草の部屋と源泉100％掛け流し天然名湯「卵の湯」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  越後湯沢湯元 卵の湯 雪国の宿 高半 —— 文豪の筆が走った静寂の高台。湧き出たままの奇跡の源泉掛け流し
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 湧き出たまま一切加水・加温なしの極上源泉「卵の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">湯沢温泉発祥の源泉をそのまま掛け流す贅沢な浴槽。ほのかな硫黄の香りと細かい湯花が舞い、温泉成分がそのまま肌に染み渡る極上の湯浴みを体感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 川端康成が逗留した客室「かすみ草の間」を保存
                    </h5>
                    <p className="text-stone-600 leading-relaxed">川端康成が昭和初年に滞在し小説『雪国』を執筆した部屋が当時のまま大切に保存・公開。資料室には貴重な直筆原稿や映画の資料などが展示され、文学散歩を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 南魚沼産コシヒカリと越後の旬の味覚を味わう田舎会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元農家から直送される最高峰の魚沼産コシヒカリの釜炊きご飯。新潟の地酒とともに、日本海の鮮魚や山の恵みを取り入れた滋味豊かな会席料理を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.72点。「源泉掛け流しのお湯が本当に素晴らしく何度でも入りたくなる」「かすみ草の間の見学と高台からの越後湯沢の景色に感動した」と高い支持を得ています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 新潟県 南魚沼郡湯沢町湯沢湯元</div>
                <div>最寄り駅・アクセス: 越後湯沢駅より車で5分／関越道湯沢ICより車で約10分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥13,000〜</span></div>
                <div>ホテル番号: No.18332</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/40019/40019.jpg"
                alt="越後湯沢温泉　松泉閣花月"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.53（口コミ 428件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">新潟県湯沢町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  越後湯沢温泉　松泉閣花月
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全館畳敷きの温もりあふれる純和風旅館！四つの露天風呂と南魚沼産コシヒカリを極める釜炊き会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  越後湯沢温泉 松泉閣 花月 —— 裸足で歩く心地よさ。風情あふれる庭園風呂と細やかなおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 玄関から廊下まで全館畳敷きの心地よい和の空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">スリッパを使わず素足で歩ける畳敷きの館内。足元から伝わるイ草の温もりと、和モダンに統一された設えが、旅人を優しく包み込みます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 庭園露天風呂や釜風呂など趣の異なる四つの湯船
                    </h5>
                    <p className="text-stone-600 leading-relaxed">岩造りの露天風呂や大きな釜風呂、檜風呂など、庭園の緑や雪景色を眺めながらゆったりと湯巡りを楽しめる大浴場。柔らかな名湯で体の芯まで温まります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 炊きたての南魚沼産コシヒカリと越後牛の贅沢会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">お米の甘みと香りが際立つ釜炊きご飯。にいがた和牛や旬の山菜、日本海直送の鮮魚など、新潟の豊かな食文化を贅沢に盛り込んだ会席料理が絶品です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.53点。「全館畳敷きが本当に快適でリラックスできた」「ご飯が驚くほど美味しくスタッフの接客も温かい」とファミリーや夫婦旅行に大好評です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 新潟県 南魚沼郡湯沢町湯沢318-5</div>
                <div>最寄り駅・アクセス: 越後湯沢駅から徒歩約５分。越後湯沢駅への送迎も可能です。（要事前連絡）・お車で湯沢IC～１０分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥10,890〜</span></div>
                <div>ホテル番号: No.40019</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D40019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/6011/6011.jpg"
                alt="越後湯沢温泉　ＮＡＳＰＡニューオータニ"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.44（口コミ 2116件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">新潟県湯沢町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  越後湯沢温泉　ＮＡＳＰＡニューオータニ
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ホテルニューオータニ直営の本格温泉リゾート！二百五十坪の大浴場と極上バイキング・スキー直結の充実施設
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  越後湯沢温泉 NASPAニューオータニ —— 一流ホテルのホスピタリティとリゾートの解放感。全世代対応の高原ステイ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 男女各250坪を誇る圧倒的スケールの温泉大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広々とした内湯とジャグジー、露天風呂、サウナを完備した大浴場。スキーや観光で疲れた体を広大な湯船でゆったりと癒やすことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ニューオータニ伝統のローストビーフ＆豪華ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">シェフが目の前でカッティングする伝統の特製ローストビーフをはじめ、和洋中の熟練シェフが手掛ける豪華ディナーバイキング。スイーツコーナーも大充実です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> スキーヤー専用ゲレンデ「NASPAスキーガーデン」直結
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ホテル直結のゲレンデはスノーボード全面滑走禁止のスキーヤー専用。ファミリーやビギナーも安心してスキーを楽しめる理想的なスノーリゾート環境です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.44点、口コミ2100件超。「バイキングのローストビーフとケーキが絶品」「スキー場直結で温泉も広く家族全員が大満足」と高評価を集めています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 新潟県 南魚沼郡湯沢町湯沢2117-9</div>
                <div>最寄り駅・アクセス: ＪＲ上越新幹線越後湯沢駅から車で3分（送迎バスあり／定時運行）、関越自動車道湯沢Ｉ．Ｃより５分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥7,300〜</span></div>
                <div>ホテル番号: No.6011</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D6011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            越後湯沢駅周辺の観光・ぽんしゅ館＆南魚沼グルメ散策
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 越後湯沢駅構内「ぽんしゅ館」で新潟の全酒蔵きき酒体験
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">越後湯沢駅直結の「ぽんしゅ館 越後湯沢店」。コインを購入して500円で5種類のお酒を試飲できる巨大なきき酒マシンが並び、新潟県内約90の全蔵元の銘酒を飲み比べできます。名物の「爆弾おにぎり」や酒風呂「湯の沢」も併設されています。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 湯沢高原パノラマパークと世界最大級ロープウェイ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">温泉街から世界最大級（166人乗り）のロープウェイに乗って標高1,000mの山頂へ。春〜秋は高山植物や雲海テラスの絶景、ジップラインなどのアクティビティが楽しめます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 清津峡渓谷トンネル（十日町）へのアートトリップ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">越後湯沢から車で約30分の日本三大峡谷「清津峡」。トンネル終点にある水鏡のパノラマステーションは、渓谷の岩肌と水面が一体化するSNSでも大人気のアートスポットです。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              新潟県湯沢町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「新潟県湯沢町」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「湯沢町」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で冬のスキーや秋の紅葉を計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。冬のスキーシーズンはもちろん、新緑トレッキングや避暑、秋の新米シーズンなど、都合に合わせて日程を組めます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">雪国の宿 高半、松泉閣 花月、NASPAニューオータニなどの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kinugawa-onsen-valley-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 鬼怒川温泉 渓谷美と大露天風呂・あさやバイキング特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
