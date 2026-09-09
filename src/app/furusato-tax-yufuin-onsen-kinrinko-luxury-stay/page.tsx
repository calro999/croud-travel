import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '朝霧煙る金鱗湖と由布岳の絶景！由布院温泉の露天風呂付き離れ＆憧れ名門旅館×ふるさと納税完全攻略ガイド【2026年最新】花由・秀峰館・梅園',
  description: '女性やカップルに憧れNo.1の温泉リゾート・由布院温泉！幻想的な朝霧が立ちのぼる金鱗湖や湯の坪街道散策。「ゆふいん花由」「ゆふいんホテル秀峰館」「由布院 梅園 GARDEN RESORT」を、大分県由布市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。全室離れ露天風呂、由布岳一望展望大浴場、一万坪庭園を堪能。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '由布院温泉＆金鱗湖名門宿特集',
    '楽天ふるさと納税 トラベル',
    '由布院温泉　朝霧のみえる宿　ゆふいん花由',
    '由布院温泉　ゆふいんホテル秀峰館',
    '由布院　梅園　ＧＡＲＤＥＮ　ＲＥＳＯＲＴ',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-yufuin-onsen-kinrinko-luxury-stay',
  },
  openGraph: {
    title: '朝霧煙る金鱗湖と由布岳の絶景！由布院温泉の露天風呂付き離れ＆憧れ名門旅館×ふるさと納税完全攻略ガイド【2026年最新】花由・秀峰館・梅園',
    description: '女性やカップルに憧れNo.1の温泉リゾート・由布院温泉！幻想的な朝霧が立ちのぼる金鱗湖や湯の坪街道散策。「ゆふいん花由」「ゆふいんホテル秀峰館」「由布院 梅園 GARDEN RESORT」を、大分県由布市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。全室離れ露天風呂、由布岳一望展望大浴場、一万坪庭園を堪能。',
    url: 'https://croud-travel.pages.dev/furusato-tax-yufuin-onsen-kinrinko-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoYufuinOnsenKinrinkoStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">由布院温泉＆金鱗湖名門宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          全国憧れNo.1！由布院温泉名門宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          朝霧煙る金鱗湖と由布岳の絶景！由布院温泉の露天風呂付き離れ＆憧れ名門旅館×ふるさと納税完全攻略ガイド【2026年最新】花由・秀峰館・梅園
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-09">2026年9月9日公開</time>
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
          由布岳の優美な山容と立ちのぼる幻想的な朝霧。自然とアート、極上湯に抱かれる由布院の贅沢な休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          豊後富士と称される秀峰「由布岳」の麓に広がる、日本屈指の憧れ温泉リゾート「由布院温泉（湯布院）」。澄んだ湧水と温泉水が混ざり合い、秋冬の早朝には幻想的な湯煙の朝霧が湖面を覆う「金鱗湖」をはじめ、お洒落なスイーツショップやギャラリーが軒を連ねる「湯の坪街道」など、散策するだけで心浮き立つ魅力に溢れています。豊かな湧出量を誇るアルカリ性単純温泉は、さらりとして刺激が少なく、肌をしっとりと包み込む極上の湯触り。静寂の森に点在するプライベート離れ客室、客室専用露天風呂から見上げる由布岳の稜線、そして大分が誇るブランド黒毛和牛「豊後牛（おおいた和牛）」や関アジ・関サバを取り入れた季節の創作会席料理は、旅人を至福の非日常へと誘います。本特集では、高台から由布岳と朝霧の雲海パノラマを一望する全室露天風呂付き離れ宿「ゆふいん花由」、金鱗湖や湯の坪街道へ徒歩圏内で最上階展望風呂が評判の「ゆふいんホテル秀峰館」、そして一万坪の広大な自然庭園の中に佇み名水と巨石露天風呂を誇る「由布院 梅園 GARDEN RESORT」の3大名宿を厳選。大分県由布市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの由布院温泉ステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">由布院温泉＆金鱗湖名門宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】由布院温泉　朝霧のみえる宿　ゆふいん花由</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】由布院温泉　ゆふいんホテル秀峰館</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】由布院　梅園　ＧＡＲＤＥＮ　ＲＥＳＯＲＴ</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 由布院温泉＆金鱗湖名門宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">由布岳を眼前に望む圧倒的なロケーション！客室露天風呂や離れで過ごす静寂ステイ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">雄大な由布岳の四季折々の表情を湯船から一望。朝霧や夕暮れ、星空に抱かれながらプライベートな客室露天風呂で心ゆくまで寛げます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">金鱗湖や湯の坪街道散策へもアクセス抜群！アートと自然が調和するお洒落な温泉街</h3>
            <p className="text-sm text-gray-600 leading-relaxed">早朝の金鱗湖の朝霧散歩やカフェ巡り、現代アート美術館の鑑賞など、そぞろ歩きが楽しい由布院ならではの上質な休日を満喫できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">由布市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や週末旅に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">高価格帯のラグジュアリー旅館が多い由布院でも、ふるさと納税なら実質負担2,000円。寄付から3年間有効なので、ベストシーズンを狙って計画的に予約できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            由布院温泉　朝霧のみえる宿　ゆふいん花由
          </h2>
          <p className="text-xs md:text-sm text-amber-100">大分県由布市・高台から由布岳と朝霧を見渡す絶景宿！全室温泉露天風呂付き離れ客室＆口コミ総合4.7超の最高峰</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 大分県由布市湯布院町川北913-11</div>
            <div><strong>アクセス:</strong> ■湯布院ＩＣから車1分■由布院駅から車で７分程でございます。■無料送迎もございます（電話にて要予約）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.7</span> (1094件)</div>
            <div><strong>参考価格:</strong> 1名あたり約24,640円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">由布院盆地を一望する高台に位置し、秋冬には幻想的な朝霧の雲海が眼下に広がる絶景の温泉旅館。敷地内には花々が咲き誇り、客室の多くがプライベート感あふれる離れ形式で、全室に源泉掛け流しの温泉露天風呂または半露天風呂を完備。テラスのチェアに身を委ね、刻一刻と表情を変える由布岳のパノラマを眺めながら入る温泉は格別の癒やしです。夕食は極上のおおいた豊後牛ステーキや豊後水道の新鮮な魚介、地元の朝採れ野菜を美しく盛り込んだ創作和会席がお部屋や個室で提供され、記念日やハネムーン旅行に最高峰の満足度を誇ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【湯布院随一の絶景＆眺望★★★★★】お客様評価5つ星！由布岳を望む眺望とPH9.2の温泉自慢の宿
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “高速道路から近く眺望も抜群、食事も大満足高速道路降りて直ぐの場所で便利なうえ、湯布岳の眺望も抜群でした。お部屋は広く離れのためとても静かでとてもくつろげました。食事も創作料理で美味しく大満…　2026-09-05 21:16:45投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D76377%26f_flg%3DPLAN"
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
            由布院温泉　ゆふいんホテル秀峰館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">大分県由布市・金鱗湖＆湯の坪街道へ徒歩圏内！最上階展望大浴場から由布岳を正面に仰ぐ好立地リゾート温泉宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 大分県由布市湯布院町川上2415-2</div>
            <div><strong>アクセス:</strong> ■由布院駅～徒歩１２分■湯布院ＩＣより車で１０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.16</span> (284件)</div>
            <div><strong>参考価格:</strong> 1名あたり約9,315円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">由布院駅から金鱗湖へと続く観光のメインストリート近くに位置し、散策の拠点として抜群のロケーションを誇る温泉ホテル。館内最上階にある展望大浴場「秀峰の湯」からは、遮るものなく聳え立つ由布岳の雄大な山容が広がり、開放感あふれる湯浴みが楽しめます。中庭には足湯があり、散策帰りに気軽な足湯休憩も可能。客室は広々とした和室やベッド付き和洋室が揃い、ファミリーや三世代旅行にも快適。夕食は大分の郷土料理を取り入れた季節の和食会席で、豊後牛の陶板焼きなど旬の美味を気兼ねなく味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              由布院駅より車で３分。湯布院インターより車で１０分とアクセス良好。由布院盆地の中央部にあります。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “清潔感がありコスパも最高!キチンと清掃されてて、清潔感があるホテルでした。コスパ最高です。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp…　2026-09-05 13:53:53投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28141%26f_flg%3DPLAN"
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
            由布院　梅園　ＧＡＲＤＥＮ　ＲＥＳＯＲＴ
          </h2>
          <p className="text-xs md:text-sm text-amber-100">大分県由布市・一万坪の大自然庭園に包まれるリゾート！由布岳を望む巨石大露天風呂と名水仕込みの極上会席</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 大分県由布市湯布院町川上馬場2106-2</div>
            <div><strong>アクセス:</strong> ＪＲ九州久大本線　由布院駅から車で５分、徒歩３０分　＊金鱗湖まで自転車で3分（徒歩15分）観光にも好立地</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.2</span> (528件)</div>
            <div><strong>参考価格:</strong> 1名あたり約13,310円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">由布岳の山麓に広がる約一万坪の敷地に、四季折々の木々と野花が息づく庭園温泉リゾート。館内には敷地内から自噴する清らかな名水が湧き出ており、男湯・女湯ともに広々とした巨石大露天風呂から由布岳の絶景をパノラマで仰ぎ見ることができます。静寂に包まれた離れ客室やモダン和洋室はプライベート感満点。夕食は名水と地場産厳選食材を使い、料理長が腕を振るう豊後牛と季節野菜の炭火焼き会席。木々のざわめきと鳥のさえずりを聞きながら、心洗われるリフレッシュが叶います。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              2021年リニューアルオープン★由布岳眺望の絶景露天風呂とエリア随一の大きさがある貸切家族風呂も人気
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “子供が食べられるメニューが少なめ子どもの食べたいものが少なかった。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/3…　2026-09-03 00:33:14投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D39494%26f_flg%3DPLAN"
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
              <span>由布院や登別、道後、城崎のハイシーズンでも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、紅葉や雪見温泉のハイシーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば
          </Link>
          <Link
            href="/furusato-tax-dogo-onsen-honkan-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯
          </Link>
          <Link
            href="/furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【城崎温泉 七田外湯めぐり宿×ふるさと納税】招月庭・小宿縁
          </Link>
          <Link
            href="/furusato-tax-private-villa-hanare-hideaway-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿
          </Link>
        </div>
      </section>
    </article>
  );
}
