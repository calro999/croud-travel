import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '渡月橋と竹林の小径の静寂！京都嵐山温泉の保津川一望ラグジュアリー＆老舗料理旅館×ふるさと納税完全攻略ガイド【2026年最新】翠嵐・花伝抄・辨慶',
  description: '四季折々の雅が息づく平安の保養地・京都嵐山！渡月橋の借景と竹林の小径散策。「翠嵐 ラグジュアリーコレクションホテル 京都」「京都 嵐山温泉 花伝抄」「嵐山温泉 嵐山辨慶」を、京都府京都市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。露天風呂付客室、五つの貸切風呂、本格京料理会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '京都嵐山 渡月橋＆名門旅館特集',
    '楽天ふるさと納税 トラベル',
    '翠嵐ラグジュアリーコレクションホテル京都',
    '京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）',
    '嵐山温泉　嵐山辨慶',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kyoto-arashiyama-bamboo-luxury-stay/',
  },
  openGraph: {
    title: '渡月橋と竹林の小径の静寂！京都嵐山温泉の保津川一望ラグジュアリー＆老舗料理旅館×ふるさと納税完全攻略ガイド【2026年最新】翠嵐・花伝抄・辨慶',
    description: '四季折々の雅が息づく平安の保養地・京都嵐山！渡月橋の借景と竹林の小径散策。「翠嵐 ラグジュアリーコレクションホテル 京都」「京都 嵐山温泉 花伝抄」「嵐山温泉 嵐山辨慶」を、京都府京都市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。露天風呂付客室、五つの貸切風呂、本格京料理会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kyoto-arashiyama-bamboo-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoKyotoArashiyamaBambooStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">京都嵐山 渡月橋＆名門旅館特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          平安貴族が愛した雅の極み！京都嵐山温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          渡月橋と竹林の小径の静寂！京都嵐山温泉の保津川一望ラグジュアリー＆老舗料理旅館×ふるさと納税完全攻略ガイド【2026年最新】翠嵐・花伝抄・辨慶
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          保津川のせせらぎ、渡月橋を渡る風、青々と茂る竹林の小径。千年の雅に包まれる嵐山温泉の極上休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          かつて平安貴族たちが別荘を構え、風流を尽くした風光明媚の地「京都・嵐山（あらしやま）」。大堰川（保津川）に優美に架かる「渡月橋」、青竹が天を覆い涼やかな木漏れ日が降り注ぐ「竹林の小径」、そして世界遺産・天龍寺の壮大な回遊式庭園など、歩く先々で日本の美意識の粋に出会える古都屈指の観光名所です。この嵐山の奥座敷で愛され続けているのが、しっとりとした湯触りが心地よい「嵐山温泉」。弱アルカリ性の単純温泉は「美肌の湯」として親しまれ、観光で歩き疲れた体をやさしく包み込んで解きほぐしてくれます。夕暮れの保津川沿いで鵜飼の篝火を眺めたり、早朝の観光客が少ない竹林を散策したりできるのは、嵐山に宿泊する旅人だけに許された特別な贅沢。さらに食事は、京都の伝統工芸のような美しさを誇る本格京料理会席。旬の京野菜、湯葉、生麩、厳選された京都肉を、四季の彩りとともに器に映し出した料理の数々は、まさに五感で味わう芸術品です。本特集では、保津川のほとりに佇みプライベート温泉露天風呂付き客室と歴史的建造物カフェを誇る世界最高峰のラグジュアリーホテル「翠嵐 ラグジュアリーコレクションホテル 京都」、阪急嵐山駅徒歩1分・全館畳敷きで5つの趣異なる無料貸切風呂と四季の京会席が評判の「京都 嵐山温泉 花伝抄」、そして大堰川の清流を正面に望み伝統の京懐石と嵐山温泉の檜露天風呂を堪能できる老舗料理旅館「嵐山温泉 嵐山辨慶」の3宿を厳選。京都府京都市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの嵐山ステイをお得に予約しましょう。
        </p>
        <div className="bg-white/90 rounded-xl p-4 md:p-5 border border-amber-300 shadow-sm">
          <h3 className="font-bold text-amber-900 text-sm md:text-base mb-2 flex items-center gap-1.5">
            <span>📌</span> なぜ「ふるさと納税×楽天トラベル」が選ばれているのか？
          </h3>
          <ul className="text-xs md:text-sm text-gray-700 space-y-1.5">
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>寄付額の最大30％が宿泊クーポンとして即時付与</strong>され、楽天ポイントも二重に貯まる</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>有効期限はたっぷり3年間！</strong>寄付後に旅行時期や部屋タイプをじっくり選べる安心設計</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span>予約済み日程への<strong>「あとからクーポン適用」</strong>にも対応（※条件あり）で直前でも安心</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 目次 */}
      <section className="bg-gray-50 rounded-xl p-5 mb-12 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>📑</span> 目次
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">京都嵐山 渡月橋＆名門旅館特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】翠嵐ラグジュアリーコレクションホテル京都</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】嵐山温泉　嵐山辨慶</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 京都嵐山 渡月橋＆名門旅館特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">渡月橋や竹林の小径が徒歩圏内！早朝・夕暮れの静寂に包まれる宿泊者だけの特権</h3>
            <p className="text-sm text-gray-600 leading-relaxed">日中の賑わいが去った夕暮れや、清々しい空気が満ちる早朝の嵐山を独り占め。人混みを避けてゆったりと古都の情緒に浸ることができます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">美肌の湯として愛される「嵐山温泉」と風流な貸切風呂・客室露天風呂の贅沢</h3>
            <p className="text-sm text-gray-600 leading-relaxed">さらりとした肌触りの嵐山温泉を客室専用露天風呂や多彩な貸切風呂で満喫。渡月橋や嵐山の山並みを眺めながら優雅な湯浴みを楽しめます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">京都市ふるさと納税で最大30％OFF！3年間有効クーポンで紅葉や桜の京都旅に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">宿泊料金が高騰しやすい京都のハイエンドホテルも、ふるさと納税なら実質自己負担2,000円。寄付から3年間有効なので、春の桜や秋の紅葉に合わせて予約可能です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            翠嵐ラグジュアリーコレクションホテル京都
          </h2>
          <p className="text-xs md:text-sm text-amber-100">京都府京都市・保津川の畔に佇むマリオット最高峰ラグジュアリー！天然嵐山温泉の露天風呂付き客室＆歴史的建造物でのシャンパンディライト</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 京都府京都市右京区嵯峨天龍寺芒ノ馬場町12</div>
            <div><strong>アクセス:</strong> 京福電鉄嵐山本線 嵐山駅 より徒歩約６分　阪急嵐山線 嵐山駅  、JR山陰本線 嵯峨野線  嵯峨嵐山駅 より徒歩約15分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.69</span> (30件)</div>
            <div><strong>参考価格:</strong> 1名あたり約49,525円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">渡月橋の上流、大堰川の清流と嵐山の雄大な自然が目の前に広がる絶好のロケーションに位置する、世界屈指のラグジュアリーホテル。かつての貴族の別荘地としての格式を受け継ぎ、敷地内には明治期の歴史的建造物を改装したレストランやカフェが佇みます。客室の多くに天然嵐山温泉を引いたプライベート露天風呂が備わり、誰にも邪魔されずに保津川のせせらぎを聞きながら極上の湯浴みが可能。夕暮れ時には歴史的カフェ「茶寮 八翠」にて保津川を眺めながらシャンパンを無料で楽しめるシャンパンディライトが宿泊者に振る舞われます。夕食は和の伝統とフレンチの美意識が融合した極上のイノベーティブ会席で、世界中のVIPを魅了する最上級の京都ステイを体験できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              京都の歴史に育まれた伝統とモダンの美が融け合う空間で、この地ならではの格別な体験をご提供いたします。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “温泉もお料理も本当に素晴らしく、大満足の滞在でした。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D158466%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 2 */}
      <section id="hotel-2" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第2選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">京都府京都市・阪急嵐山駅徒歩1分の好立地！全館畳敷きの和の心地よさ＆5つの趣異なる無料貸切風呂と豪華京会席（共立リゾート）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 京都府京都市西京区嵐山西一川町5-4</div>
            <div><strong>アクセス:</strong> 阪急嵐山線「嵐山駅」より徒歩１分。JR「京都駅」より約30分、阪急「梅田駅」より約50分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.42</span> (1955件)</div>
            <div><strong>参考価格:</strong> 1名あたり約10,700円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">阪急嵐山駅から徒歩わずか1分、渡月橋へも徒歩圏内に位置する共立リゾートの上質な温泉旅館。玄関を入ると全館が畳敷きとなっており、靴を脱いで素足で心地よく過ごせるのが大きな魅力です。館内には広々とした大浴場のほか、趣の異なる5つの無料貸切風呂（檜風呂、陶器風呂、岩風呂など）が完備され、空いていれば予約不要で何度でもプライベートな温泉巡りが楽しめます。客室は京町家の風情を取り入れた洗練された和洋室。夕食は季節の彩りを映した京会席に、天ぷらやおばんざいを好みに合わせて選べるオーダービュッフェが組み合わされ、共立リゾート名物の夜鳴きそばサービスとともに大満足の滞在を提供します。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              渡月橋まで徒歩約5分！目の前の阪急嵐山駅より京都の中心街まですぐ！天然温泉と5つの貸切風呂が無料！
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “天ぷらとおばんざいが絶品、また泊まりたい懐石料理を頼みました天ぷらはすっごく美味しかったです!!おばんざいも京都ならではの優しいお出汁と湯葉が美味しかったです!次回も旅行の際は泊まりたいです…　2026-09-01 22:32:51投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D130702%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 3 */}
      <section id="hotel-3" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第3選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            嵐山温泉　嵐山辨慶
          </h2>
          <p className="text-xs md:text-sm text-amber-100">京都府京都市・嵐山大井川のほとり、渡月橋を望む絶景！ミシュラン掲載の本格伝統京懐石と嵐山温泉の檜露天風呂を愉しむ名門料理旅館</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 京都府京都市右京区嵯峨天龍寺芒ノ馬場町34</div>
            <div><strong>アクセス:</strong> 阪急嵐山線「嵐山駅」徒歩10分、名神高速京都南IC、国道1号線経由インターより40分、JR京都駅30分、阪急梅田駅50分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.5</span> (18件)</div>
            <div><strong>参考価格:</strong> 1名あたり約19,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">嵐山の大堰川（大井川）沿い、渡月橋をすぐ間近に望む最高の立地に建つ創業数十年の老舗料理旅館。宿の最大の誇りは、京都の伝統と四季の移ろいを一皿一皿に表現した本格京懐石料理。料理長が毎朝厳選する旬の京野菜、瀬戸内や若狭から届く新鮮な魚介、上質な出汁の旨味が調和した料理は、ミシュランガイドにも掲載されるなど食通から極めて高い評価を得ています。館内には嵐山温泉を引いた風情ある岩露天風呂や檜露天風呂、展望貸切風呂があり、嵐山の山並みを仰ぎながら贅沢な湯浴みが堪能できます。客室はお部屋食対応の純和風数寄屋造りで、細やかな心遣いとおもてなしに心が解きほぐされます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              嵐山の真向いに居を構える嵐山温泉　嵐山辨慶。美しい四季の移ろいと京料理・嵐山温泉をお楽しみください。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “温かなおもてなしに感動しました。家族全員が大満足です。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30095%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* ふるさと納税手順 */}
      <section id="furusato-step" className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-amber-200 mb-16 shadow-sm">
        <h2 className="text-xl md:text-3xl font-extrabold text-amber-950 mb-6 flex items-center gap-2">
          <span>💡</span> 楽天ふるさと納税トラベルクーポンで実質2,000円予約する4ステップ
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">控除限度額をチェック</h3>
              <p className="text-xs md:text-sm text-gray-600">年収や家族構成によって自己負担2,000円で利用できる上限額が決まります。まずは楽天ふるさと納税のシミュレーターで上限を確認しましょう。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自治体を選んでトラベルクーポンを寄付</h3>
              <p className="text-xs md:text-sm text-gray-600">訪れたい温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">楽天トラベルで宿泊予約＆クーポン適用</h3>
              <p className="text-xs md:text-sm text-gray-600">有効期限は3年間。宿泊日や部屋タイプを決め、予約画面で取得したトラベルクーポンを選択すると宿泊代金から即時値引きされます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ワンストップ特例または確定申告で完了</h3>
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算で旅行をさらにアップグレードできます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>❓</span> よくある質問（Q&A）
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>すでに予約している宿泊プランにもふるさと納税クーポンは使えますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい！楽天トラベルの「あとからクーポン適用」機能に対応している施設であれば、予約後でもマイページから自治体クーポンを適用して割引を受けられます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>トラベルクーポンの有効期限はどれくらいですか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              楽天ふるさと納税トラベルクーポンの有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」となっています。旅行予定に合わせてじっくり使えます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>ハイシーズンや週末でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、お盆や紅葉・雪見シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
            </p>
          </details>
        </div>
      </section>

      {/* 関連記事リンク */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔗</span> あわせて読みたい注目のふるさと納税特集
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          
          <Link
            href="/furusato-tax-kyoto-onsen-ryokan-machiya-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【京都嵐山温泉＆名門京町家旅館×ふるさと納税】渡月亭・翠嵐・花伝抄
          </Link>
          <Link
            href="/furusato-tax-kyoto-private-machiya-charter-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【京都町家一棟貸切プライベート旅館×ふるさと納税】Nazuna椿通・二条城・お宿花
          </Link>
          <Link
            href="/furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿
          </Link>
          <Link
            href="/furusato-tax-dogo-onsen-honkan-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス
          </Link>
        </div>
      </section>
    </article>
  );
}
