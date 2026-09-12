import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '黒煙と汽笛が旅情を揺さぶる！大井川鐵道・秩父鉄道・磐越西線のSL・蒸気機関車ビューステイ×ふるさと納税完全ガイド【2026年最新】島田・秩父・会津若松',
  description: '力強い汽笛と真っ白な蒸気、レトロな客車が郷愁を誘う蒸気機関車（SL）の旅！大井川鐵道のSL列車が目の前を横切る絶好のビュースポット「川根温泉ホテル」、秩父路を駆けるSLパレオエクスプレスの旅情と竹酒・名湯に酔いしれる「秩父小鹿野温泉旅館 梁山泊」、SLばんえつ物語が走る会津若松の奥座敷で名勝伏見ヶ滝を望む「会津東山温泉 庄助の宿 瀧の湯」。鉄道ファンから家族連れ、大人の休日までを魅了するSL温泉旅を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    'SL・蒸気機関車ビューステイ名宿特集',
    '楽天ふるさと納税 トラベル',
    '大井川鐵道　川根温泉ホテル',
    '秩父小鹿野温泉旅館　梁山泊',
    '会津東山温泉　庄助の宿　瀧の湯',
    '高級温泉旅館',
    '露天風呂付き客室',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-steam-locomotive-sl-train-view-stay/',
  },
  openGraph: {
    title: '黒煙と汽笛が旅情を揺さぶる！大井川鐵道・秩父鉄道・磐越西線のSL・蒸気機関車ビューステイ×ふるさと納税完全ガイド【2026年最新】島田・秩父・会津若松',
    description: '力強い汽笛と真っ白な蒸気、レトロな客車が郷愁を誘う蒸気機関車（SL）の旅！大井川鐵道のSL列車が目の前を横切る絶好のビュースポット「川根温泉ホテル」、秩父路を駆けるSLパレオエクスプレスの旅情と竹酒・名湯に酔いしれる「秩父小鹿野温泉旅館 梁山泊」、SLばんえつ物語が走る会津若松の奥座敷で名勝伏見ヶ滝を望む「会津東山温泉 庄助の宿 瀧の湯」。鉄道ファンから家族連れ、大人の休日までを魅了するSL温泉旅を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-steam-locomotive-sl-train-view-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoSteamLocomotiveSLTrainStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">SL・蒸気機関車ビューステイ名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          全国屈指のSL・蒸気機関車ビューステイ特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          黒煙と汽笛が旅情を揺さぶる！大井川鐵道・秩父鉄道・磐越西線のSL・蒸気機関車ビューステイ×ふるさと納税完全ガイド【2026年最新】島田・秩父・会津若松
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-09">2026年9月9日公開</time>
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
          響き渡る汽笛と大迫力の煙！郷愁とロマン溢れる蒸気機関車（SL）を間近に感じる至極の温泉旅へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          日本の近代化を支え、今なお力強い鼓動とレトロなノスタルジーで人々を魅了してやまない蒸気機関車（SL）。真っ白な蒸気を吹き上げ、大井川の清流や秩父の山並み、会津の田園風景を駆け抜けるその姿は、乗る者だけでなく眺める者の心をも強く揺さぶります。客室のテラスや露天風呂、ホテルの専用展望デッキからSLの雄姿と轟く汽笛を体感できる旅は、世代を超えて感動を分かち合える最高の休日体験です。本特集では、日本で唯一ほぼ毎日SLが運行される大井川鐵道の鉄橋を目の前に望み、天然温泉掛け流しと静岡美食バイキングが絶賛される「川根温泉ホテル」、秩父鉄道のSLパレオエクスプレス運行路線近くに位置し、名物のかっぽ酒と美肌の湯で知られる名宿「秩父小鹿野温泉旅館 梁山泊」、そしてSLばんえつ物語の玄関口・会津若松の湯川渓谷沿いに建ち、名勝・伏見ヶ滝と会津郷土料理を堪能できる「会津東山温泉 庄助の宿 瀧の湯」の3宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で一生モノのSL鉄道温泉旅を叶えましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">SL・蒸気機関車ビューステイ名宿特集が旅人を惹きつけてやまない3つの魅力</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】大井川鐵道　川根温泉ホテル</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】秩父小鹿野温泉旅館　梁山泊</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】会津東山温泉　庄助の宿　瀧の湯</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> SL・蒸気機関車ビューステイ名宿特集が旅人を惹きつけてやまない3つの魅力
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">テラスや露天風呂から間近に迫るSL！響く汽笛と白煙のドラマチックな臨場感</h3>
            <p className="text-sm text-gray-600 leading-relaxed">山あいの渓谷や鉄橋を渡る蒸気機関車を、お部屋や展望ラウンジ、露天風呂から至近距離で鑑賞。轟く汽笛と車輪の重低音、立ち上る煙の香りが五感を刺激し、日常を忘れさせる非日常の鉄道ステイが叶います。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">沿線の歴史と名湯を堪能！美肌温泉と地元厳選の旬の味覚会席</h3>
            <p className="text-sm text-gray-600 leading-relaxed">SLの感動とともに味わえるのは、大井川の川根茶や鮎、秩父のいのしし鍋や地酒・竹酒、会津の馬刺しやこづゆなど、その土地に根ざした豊かな郷土グルメと名湯。鉄道の旅情と極上の美食が一つに結実します。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">楽天ふるさと納税で最大30％OFF！3年間有効クーポンで運行ダイヤに合わせて予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">SLの季節運行日や観光シーズンの予約に合わせて柔軟に利用可能。寄付日の3年後まで有効期限があるため、SLの指定席やトロッコ列車の運行スケジュールに合わせて計画的でお得な旅行が実現します。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            大井川鐵道　川根温泉ホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">静岡県島田市・大井川鐵道のSL列車が鉄橋を渡る絶景ビュースポット！源泉掛け流しと静岡美味バイキング</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 静岡県島田市川根町笹間渡195-1</div>
            <div><strong>アクセス:</strong> 新東名島田金谷ＩＣよりお車にて約３５分／大井川鉄道　川根温泉笹間渡駅より徒歩にて約１０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.66</span> (666件)</div>
            <div><strong>参考価格:</strong> 1名あたり約15,200円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">大井川鐵道・笹間渡駅至近に位置し、大井川を渡るSL列車を客室やラウンジ、専用テラスからダイナミックに一望できる鉄道ファン・家族連れ憧れの温泉ホテル。SLが通過する時間には館内アナウンスが流れ、乗客と手を振り合う心温まる交流が楽しめます。敷地内には豊富な湧出量を誇る良質な炭酸水素塩温泉が湧き、源泉掛け流しの内湯や露天風呂で旅の疲れを芯から癒やせます。夕食には静岡の銘柄豚や新鮮な海の幸、地元の川根茶をふんだんに使った豪華バイキングが振る舞われ、総合評価4.6超の圧倒的人気を誇る名宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              温泉宿・ホテル総選挙ファミリー部門5年連続全国1位受賞！壮大な自然に囲まれた癒しと寛ぎの温泉宿
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “料理のクオリティが最高で全てに大満足何もかも最高でした。特に料理のクオリティが最高でしたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/…　2026-09-05 14:55:20投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D172896%26f_flg%3DPLAN"
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
            秩父小鹿野温泉旅館　梁山泊
          </h2>
          <p className="text-xs md:text-sm text-amber-100">埼玉県小鹿野町・SLパレオエクスプレスが走る秩父路の名湯！竹酒の振る舞いと里山会席が自慢の宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 埼玉県秩父郡小鹿野町般若260</div>
            <div><strong>アクセス:</strong> 【車】関越道花園ＩＣから車で35分　【電車】西武秩父駅または秩父駅より送迎有</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.2</span> (768件)</div>
            <div><strong>参考価格:</strong> 1名あたり約16,500円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">秩父鉄道を走る「SLパレオエクスプレス」の乗車拠点・三峰口や長瀞へのアクセスに優れ、奥秩父・小鹿野の静閑な山里に佇むおもてなしの温泉旅館。都心から気軽に行けるSLの旅として人気が高く、宿では毎夕、青竹の香りが清々しい名物「かっぽ酒」や地元ワインの無料振る舞いサービスが行われています。pHの高いトロリとした美肌温泉露天風呂は貸切利用も可能。夕食には奥秩父の清流魚や地元野菜、上質な肉料理を織り交ぜた里山会席膳が楽しめ、温かな接客に心癒される滞在を満喫できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【埼玉おもてなし大賞☆特別賞】２年連続受賞★露天風呂付き客室☆美人の湯と呼ばれる温泉☆懐石料理が人気
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “とても満足です2回目の利用ですが、今回もベテランのスタッフが多く活躍されており、宿の安心感と各種サービスの安定感がありました。スタンダードな食事を選択しましたが、見た目の細かなところにも繊細な気配…　2026-09-05 21:27:28投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D14195%26f_flg%3DPLAN"
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
            会津東山温泉　庄助の宿　瀧の湯
          </h2>
          <p className="text-xs md:text-sm text-amber-100">福島県会津若松市・「SLばんえつ物語」の玄関口！名勝伏見ヶ滝を望む絶景露天風呂と会津郷土料理の名門</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 福島県会津若松市東山町湯本滝ノ湯108番地（庄助の宿 瀧の湯）</div>
            <div><strong>アクセス:</strong> 【電車】ＪＲ磐越西線「会津若松駅」下車タクシー１０分【お車】「磐越自動車道」会津若松ＩＣより国道４９号線経由 約１５分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.41</span> (4161件)</div>
            <div><strong>参考価格:</strong> 1名あたり約8,800円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">新津と会津若松を結ぶ貴婦人「SLばんえつ物語」の終着点・会津東山温泉を代表する名旅館。名勝「伏見ヶ滝」が眼前に流れ落ちる絶景露天風呂「瀧美の湯」では、清流の轟きとマイナスイオンを全身に浴びながら開湯1300年の名湯を堪能できます。客室からも四季折々の渓谷美が広がり、夜には幻想的な滝のライトアップが水面を照らします。夕食には会津伝統の郷土料理「こづゆ」をはじめ、新鮮な会津馬刺しや福島牛の陶板焼きなど滋味豊かな極上会席が並び、鉄道旅の風情を最高峰の贅沢とともに締めくくれます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【楽天トラベル ゴールドアワード2025】【楽天トラベル 日本の宿アワードTOP47 2024】
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “また行きます!食事美味しい!つきたて餅最高!お部屋も素敵!温泉最高!湯上りのソフトクリームとビールも最高!従業員の方々もとても優しい!また行きまーすクチコミの詳細はこちらか…　2026-09-06 00:31:18投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5738%26f_flg%3DPLAN"
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
              <p className="text-xs md:text-sm text-gray-600">訪れたい温泉宿のある自治体（市町村）へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算で客室のアップグレードや別注料理を満喫できます。</p>
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
              はい！楽天トラベルの「あとからクーポン適用」機能に対応している施設であれば、予約後でもマイページから自治体クーポンを適用して割引を受けられます。旅行直前でも諦めずに確認することをおすすめします。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>トラベルクーポンの有効期限はどれくらいですか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              楽天ふるさと納税トラベルクーポンの有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」となっています。年末の駆け込み寄付でクーポンを確保しておき、翌年以降の記念日や旅行シーズンにゆっくり利用できます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>現地での追加飲料代やマッサージ代にも使えますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              トラベルクーポンは楽天トラベル上の「宿泊プラン代金（事前決済または現地決済の宿泊費）」に対して適用されます。現地での追加注文をお得にしたい場合は、夕食時のドリンクインクルーシブプランやエステ付き宿泊プランをあらかじめ選んで予約するのが賢い方法です。
            </p>
          </details>
        </div>
      </section>

      {/* 関連記事リンク */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔗</span> あわせて読みたい注目のふるさと納税温泉特集
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          
          <Link
            href="/furusato-tax-scenic-tourist-train-onsen-trip-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【観光列車・絶景トロッコ列車旅×ふるさと納税】車窓と温泉旅館の贅沢旅
          </Link>
          <Link
            href="/furusato-tax-station-walk-car-free-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【駅徒歩圏内・車なし電車で行ける温泉宿×ふるさと納税】アクセス抜群の名宿
          </Link>
          <Link
            href="/furusato-tax-river-stream-canyon-view-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【清流・渓谷美を望む絶景露天風呂×ふるさと納税】水音と自然に包まれる旅
          </Link>
          <Link
            href="/furusato-tax-heritage-cultural-property-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登録有形文化財・歴史的名建築宿×ふるさと納税】昭和レトロと美の宿
          </Link>
        </div>
      </section>
    </article>
  );
}
