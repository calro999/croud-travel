import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '川端康成『雪国』の舞台！越後湯沢温泉の展望絶景露天風呂＆本場魚沼産コシヒカリ・越後地酒名門宿×ふるさと納税完全攻略ガイド【2026年最新】双葉・NASPAニューオータニ・いなもと',
  description: '新幹線で東京から約70分の雪国名湯・新潟県越後湯沢温泉！文豪・川端康成ゆかりの地。「水が織りなす越後の宿 双葉」「NASPAニューオータニ」「越後のお宿 いなもと」を、新潟県湯沢町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。二十八の多彩なお風呂、本場魚沼産コシヒカリ、越後地酒会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '越後湯沢温泉 雪国名湯＆美酒名宿特集',
    '楽天ふるさと納税 トラベル',
    '越後湯沢温泉　水が織りなす越後の宿　双葉',
    '越後湯沢温泉　ＮＡＳＰＡニューオータニ',
    '越後湯沢温泉　越後のお宿　いなもと',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-echigo-yuzawa-onsen-sake-stay',
  },
  openGraph: {
    title: '川端康成『雪国』の舞台！越後湯沢温泉の展望絶景露天風呂＆本場魚沼産コシヒカリ・越後地酒名門宿×ふるさと納税完全攻略ガイド【2026年最新】双葉・NASPAニューオータニ・いなもと',
    description: '新幹線で東京から約70分の雪国名湯・新潟県越後湯沢温泉！文豪・川端康成ゆかりの地。「水が織りなす越後の宿 双葉」「NASPAニューオータニ」「越後のお宿 いなもと」を、新潟県湯沢町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。二十八の多彩なお風呂、本場魚沼産コシヒカリ、越後地酒会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-echigo-yuzawa-onsen-sake-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoEchigoYuzawaOnsenStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">越後湯沢温泉 雪国名湯＆美酒名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          新幹線で行ける雪国情熱の名湯！新潟県越後湯沢温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          川端康成『雪国』の舞台！越後湯沢温泉の展望絶景露天風呂＆本場魚沼産コシヒカリ・越後地酒名門宿×ふるさと納税完全攻略ガイド【2026年最新】双葉・NASPAニューオータニ・いなもと
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          国境の長いトンネルを抜けると雪国であった。名峰・谷川連峰のパノラマと本場の米・酒に酔いしれる湯沢の休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          ノーベル文学賞作家・川端康成の名作小説『雪国』の冒頭「国境の長いトンネルを抜けると雪国であった」の舞台として名高い、新潟県を代表する温泉郷「越後湯沢温泉（えちごゆざわおんせん）」。上越新幹線で東京駅から最速約70分という驚異的なアクセスの良さを誇りながら、冬は白銀のパウダースノーが山々を包み込み、春から秋には清々しい緑と澄んだ空気が広がる四季の彩り豊かな温泉地です。越後湯沢温泉のお湯は、無色透明でさらりとした肌あたりの単純温泉や弱アルカリ性低張性温泉。神経痛や冷え性に優れ、旅の疲れを芯から解きほぐしてくれます。雪見露天風呂に身を沈めながら、目の前に広がる谷川連峰の山並みを眺める時間はまさに至福のひととき。さらに越後湯沢の最大の醍醐味は、日本一の米どころ・酒どころが誇る圧倒的な美食文化です。炊き立てで艶やかに輝く本場「魚沼産コシヒカリ」の銀シャリ、清らかな雪解け水と伝統の杜氏技が醸し出す新潟の銘酒（八海山、鶴齢、上善如水など）の利き酒、そして日本海の荒波で育った新鮮な海の幸や山菜料理が、旅の満足度を最高潮に高めてくれます。本特集では、館内に二十八もの多彩な湯船が揃い最上階展望露天風呂「空の湯」が評判の「水が織りなす越後の宿 双葉」、広さ250坪の天然温泉大浴場と名門ニューオータニ伝統のフレンチ・和食が光るリゾート「NASPAニューオータニ」、そして駅西口徒歩2分の好立地で100％源泉掛け流し露天風呂が自慢の「越後のお宿 いなもと」の3宿を厳選。新潟県湯沢町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で越後湯沢温泉の極上旅をお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">越後湯沢温泉 雪国名湯＆美酒名宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】越後湯沢温泉　水が織りなす越後の宿　双葉</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】越後湯沢温泉　ＮＡＳＰＡニューオータニ</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】越後湯沢温泉　越後のお宿　いなもと</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 越後湯沢温泉 雪国名湯＆美酒名宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">東京駅から新幹線で最短約70分！谷川連峰のパノラマを望む絶景展望露天風呂</h3>
            <p className="text-sm text-gray-600 leading-relaxed">駅近の好立地でありながら雄大な山並みや白銀の雪景色を一望。二十八のお風呂めぐりや源泉かけ流し露天風呂で心ゆくまで癒やされます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">日本一のブランド米「南魚沼産コシヒカリ」と越後銘酒のペアリングディナー</h3>
            <p className="text-sm text-gray-600 leading-relaxed">噛むほどに甘みが広がる本場魚沼産コシヒカリの炊き立てご飯、新潟が誇る極上地酒、日本海の新鮮な海の幸を贅沢に味わい尽くせます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">湯沢町ふるさと納税で最大30％OFF！3年間有効クーポンでスキー・温泉旅に大活躍</h3>
            <p className="text-sm text-gray-600 leading-relaxed">スキーシーズンや紅葉時期に人気の越後湯沢ホテルもふるさと納税なら実質2,000円。寄付から3年間有効なので、冬の雪見旅や家族旅行に最適です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            越後湯沢温泉　水が織りなす越後の宿　双葉
          </h2>
          <p className="text-xs md:text-sm text-amber-100">新潟県湯沢町・館内に二十八の多彩なお風呂！最上階展望露天風呂「空の湯」＆本場魚沼産コシヒカリ・越後会席（水が織りなす越後の宿 双葉）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 新潟県南魚沼郡湯沢町湯沢419</div>
            <div><strong>アクセス:</strong> 上越新幹線、越後湯沢駅下車徒歩７分。関越自動車道、湯沢ＩＣより車で５分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.34</span> (1031件)</div>
            <div><strong>参考価格:</strong> 1名あたり約14,300円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">越後湯沢の高台に位置し、水のせせらぎと和の風情を大切にした名門温泉旅館。宿の最大の自慢は、「空の湯」「山の湯」「里の湯」という趣の異なる3つの大浴場エリアに点在する合計二十八もの湯船。最上階の展望露天風呂「パノラマ露天 空の湯」からは、四季折々に表情を変える谷川連峰の雄大な稜線と湯沢の街並みを一望できます。客室は落ち着きある純和風客室から展望温泉風呂付き特別室まで多彩。夕食は地元契約農家から届く本場の南魚沼産コシヒカリを釜炊きで提供するほか、日本海の旬魚やにいがた和牛をふんだんに盛り込んだ贅沢な越後会席をお部屋や個室食事処でゆったりと味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              花水木をテーマに四季折々に花々がお待ちしております。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “銀婚式の祝い膳とスタッフの細やかな気配り旅行プラン以外でのサービスを感謝。銀婚式の祝い膳やお土産のプレゼント等、気持ち良い気遣いをして頂きました。連泊で宿泊したのですが、個室の夕食の担当し…　2026-09-04 16:56:59投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8401%26f_flg%3DPLAN"
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
            越後湯沢温泉　ＮＡＳＰＡニューオータニ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">新潟県湯沢町・JR越後湯沢駅より無料送迎3分！広さ250坪の天然温泉大浴場＆ニューオータニ伝統のフレンチと和会席（NASPAニューオータニ）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 新潟県南魚沼郡湯沢町湯沢2117-9</div>
            <div><strong>アクセス:</strong> ＪＲ上越新幹線越後湯沢駅から車で3分（送迎バスあり／定時運行）、関越自動車道湯沢Ｉ．Ｃより５分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.44</span> (2116件)</div>
            <div><strong>参考価格:</strong> 1名あたり約6,800円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">名門ホテルニューオータニグループが手がける、大自然に囲まれた本格高原・温泉リゾートホテル。男女合わせて250坪という圧巻の広さを誇る天然温泉大浴場には、ジャグジーやサウナ、開放的な露天風呂を完備し、心身ともに深いリラクゼーションへと導いてくれます。冬にはホテル直結のスキー場（スキーヤー専用）がオープンし、夏にはアクティビティが充実。食事はニューオータニ伝統のローストビーフや本格フレンチフルコース、あるいは新潟の海の幸・山の幸を活かした四季の日本料理会席など、一流シェフが織りなす上質な美食体験を堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              窓からは雄大な自然が広がる客室。 滋味溢れる地元食材を楽しみ、天然温泉で疲れを癒してください。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “清潔なプールと温泉、親切な接客に大満足プールはロッカーも含めて清潔でした。ホテルの方々が皆親切でした。温泉は大変気持ちよかったです飲み放題はその場で作ってくださり、ついつい飲みすぎまし…　2026-09-05 20:54:17投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6011%26f_flg%3DPLAN"
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
            越後湯沢温泉　越後のお宿　いなもと
          </h2>
          <p className="text-xs md:text-sm text-amber-100">新潟県湯沢町・JR越後湯沢駅西口より徒歩2分！純度100％源泉掛け流しの大浴場＆露天風呂と越後郷土料理が愛される老舗宿（いなもと）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 新潟県南魚沼郡湯沢町湯沢2497</div>
            <div><strong>アクセス:</strong> 越後湯沢駅西口より徒歩2分！湯沢インターより車で5分とアクセス抜群♪東京から新幹線最短で90分です♪</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.41</span> (430件)</div>
            <div><strong>参考価格:</strong> 1名あたり約9,925円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">上越新幹線の越後湯沢駅西口から徒歩わずか2分という最高のアクセスを誇る老舗温泉旅館。駅近の好立地でありながら、館内には加水・加温・循環なしの「純度100％源泉掛け流し」の天然温泉が注がれる大浴場や露天風呂を完備しており、湯沢本来のフレッシュな名湯をそのまま肌で実感できます。貸切家族風呂も完備され、プライベートな湯浴みにも最適。夕食は魚沼産コシヒカリはもちろん、越後もち豚の陶板焼きや日本海の地魚のお造り、新潟名物の郷土料理を温かな接客とともに味わえ、どこか懐かしく心落ち着く滞在が楽しめます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              大切な人と過ごす、和らいだ上質なひととき。掛け流しの温泉と本場の魚沼産こしひかり。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “良い温泉が、駅近にアリ越後湯沢には何回も来ていましたが、宿泊は0回。源泉掛け流しと聞き、初宿泊です。良かった点・外観等から、お部屋も古いと思いきや、キレイです。・露天風呂が、気持ちよか…　2026-08-28 09:27:52投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D55869%26f_flg%3DPLAN"
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
            href="/furusato-tax-ginzan-onsen-taisho-romantic-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【銀山温泉 大正ロマン＆雪見露天宿×ふるさと納税】能登屋・銀山荘・古勢起屋
          </Link>
          <Link
            href="/furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば・グランドホテル
          </Link>
          <Link
            href="/furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋
          </Link>
          <Link
            href="/furusato-tax-sake-brewery-pairing-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【酒蔵直営＆日本酒ペアリング温泉宿×ふるさと納税】銘酒と美肌の湯
          </Link>
        </div>
      </section>
    </article>
  );
}
