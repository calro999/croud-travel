import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '湯量毎分3000L・9種の源泉デパート！登別温泉の地獄谷一望大浴場＆カニ食べ放題名門宿×ふるさと納税完全攻略ガイド【2026年最新】第一滝本館・まほろば・グランドホテル',
  description: '日本屈指の温泉天国・北海道登別温泉！立ちのぼる白煙が圧巻の地獄谷に隣接。「第一滝本館」「登別温泉 ホテル まほろば」「登別温泉 登別グランドホテル」を、北海道登別市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。1500坪の温泉天国、日本最大級露天風呂、カニ食べ放題ビュッフェ、鬼サウナを堪能。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '登別温泉 地獄谷＆名湯宿特集',
    '楽天ふるさと納税 トラベル',
    '登別温泉　第一滝本館',
    '登別温泉　ホテル　まほろば',
    '登別温泉　登別グランドホテル',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay/',
  },
  openGraph: {
    title: '湯量毎分3000L・9種の源泉デパート！登別温泉の地獄谷一望大浴場＆カニ食べ放題名門宿×ふるさと納税完全攻略ガイド【2026年最新】第一滝本館・まほろば・グランドホテル',
    description: '日本屈指の温泉天国・北海道登別温泉！立ちのぼる白煙が圧巻の地獄谷に隣接。「第一滝本館」「登別温泉 ホテル まほろば」「登別温泉 登別グランドホテル」を、北海道登別市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。1500坪の温泉天国、日本最大級露天風呂、カニ食べ放題ビュッフェ、鬼サウナを堪能。',
    url: 'https://croud-travel.pages.dev/furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoNoboribetsuJigokudaniStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">登別温泉 地獄谷＆名湯宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          温泉のデパート！北海道登別温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          湯量毎分3000L・9種の源泉デパート！登別温泉の地獄谷一望大浴場＆カニ食べ放題名門宿×ふるさと納税完全攻略ガイド【2026年最新】第一滝本館・まほろば・グランドホテル
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
          もくもくと立ちこめる白煙と地鳴り。9つもの泉質が湧き出す日本屈指の温泉郷・登別で味わう圧倒的スケールの温泉旅へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          活火山が生み出した壮大な爆裂火口跡「地獄谷」から毎分約3,000リットルもの熱湯が噴き出し、硫黄の香りと湯煙が街を包み込む北海道一の名湯「登別温泉（のぼりべつ）」。その最大の特徴は、1カ所の温泉街で硫黄泉・食塩泉・重曹泉・明礬泉・緑礬泉など実に9種類もの異なる泉質が湧き出している「温泉のデパート」である点です。乳白色のにごり湯や美肌の重曹泉など、宿の中で多彩な泉質を湯巡りできるダイナミックさは他では決して味わえません。湯上がりには北海道の豊かな海の幸を贅沢に味わう三大ガニ食べ放題（ズワイ・タラバ・毛ガニ）や、熱々の焼きたてステーキ、ジンギスカンが並ぶ豪華ビュッフェに舌鼓。本特集では、地獄谷の目の前に建ち1,500坪の巨大大浴場で5つの泉質巡りができる創業百六十余年の元祖宿「第一滝本館」、日本最大級の大露天風呂と4種の泉質、圧巻のカニ食べ放題ビュッフェで大人気の「登別温泉 ホテル まほろば」、そして「登別の迎賓館」と称され本格ドーム型ローマ風呂や超本格派「鬼サウナ」でサウナーからも絶賛される名門「登別グランドホテル」の3大宿を厳選。北海道登別市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で最高峰の北海道温泉旅へ出かけましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">登別温泉 地獄谷＆名湯宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】登別温泉　第一滝本館</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】登別温泉　ホテル　まほろば</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】登別温泉　登別グランドホテル</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 登別温泉 地獄谷＆名湯宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">1カ所で多彩な泉質巡り！地獄谷を望む1500坪大浴場や日本最大級の露天風呂</h3>
            <p className="text-sm text-gray-600 leading-relaxed">乳白色の硫黄泉、保温効果抜群の食塩泉、肌をつるつるにする重曹泉など、多彩な泉質を館内だけで湯巡り。登別ならではの圧倒的なスケールを体感できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">北海道の三大ガニ＆海鮮バイキング！旬の美味を好きなだけ頬張る極上の贅沢</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ズワイガニやタラバガニの食べ放題、いくら盛り放題、北海道産和牛ステーキなど、北の大地の味覚が集結したディナービュッフェはお腹も心も大満足です。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">登別市ふるさと納税で最大30％OFF！3年間有効クーポンで雪見温泉や夏旅に使える</h3>
            <p className="text-sm text-gray-600 leading-relaxed">冬の幻想的な雪見露天風呂から夏の爽快な新緑ドライブまで、有効期限3年間で旅程に合わせて自由に予約可能。実質負担2,000円で豪華北海道旅行が叶います。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            登別温泉　第一滝本館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">北海道登別市・地獄谷の真正面！広さ1500坪の大浴場「温泉天国」に5つの泉質を引き込む創業百六十余年の元祖宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 北海道登別市登別温泉町55</div>
            <div><strong>アクセス:</strong> JR登別駅よりバス又はタクシーで約15分／道央道登別東ＩＣから車で約10分／新千歳空港から車で約60分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.56</span> (3858件)</div>
            <div><strong>参考価格:</strong> 1名あたり約14,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">登別温泉開湯の祖・滝本金蔵が創業し、地獄谷の目と鼻の先に建つ登別を代表する名門ホテル。館内には24時間入浴可能な1,500坪の巨大温泉施設「温泉天国」が広がり、地獄谷の岩肌を見渡すパノラマビューとともに、硫黄泉・食塩泉・重曹泉・酸性緑礬泉・芒硝泉の5つの源泉を一度に堪能できます。露天風呂でお酒が飲めるサービスや年中泳げる温水プールも完備。夕食は北海道の厳選食材が並ぶ豪華バイキング「原始林」または部屋食会席で、新鮮なカニやホタテ、ローストビーフを心ゆくまで味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              地獄谷と対峙するロケーション。湧き出る5つの泉質を35種の浴槽で。ようこそ、『第一滝本館』へ。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “お風呂が広く、駐車や送迎のサービスも充実お風呂が予想通り広くて良かったです。熊牧場に行ったのですが、その間駐車もさせてくれお迎えもありサービスも良かったです。素泊まりしかプランがなくバイキングコー…　2026-09-05 15:42:04投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D30109%26f_flg%3DPLAN"
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
            登別温泉　ホテル　まほろば
          </h2>
          <p className="text-xs md:text-sm text-amber-100">北海道登別市・地下2フロアに広がる日本最大級の大露天風呂！4種の泉質と三大ガニ食べ放題ビュッフェが大好評</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 北海道登別市登別温泉町65</div>
            <div><strong>アクセス:</strong> ＪＲ登別駅～登別温泉行バス約15分+徒歩約3分/道央道～登別東ＩＣより約10分※JR特急札幌より約70分・千歳約50分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.3</span> (2856件)</div>
            <div><strong>参考価格:</strong> 1名あたり約12,500円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">地下1階と2階に広がる計31種類もの湯船を誇り、緑豊かな自然に抱かれた日本最大級の露天風呂を有する人気温泉宿。硫黄泉・食塩泉・単純泉・酸性鉄泉の4種の泉質が揃い、檜風呂やジャグジー、打たせ湯など多彩な湯巡りが楽しめます。特に宿泊者から絶賛されているのがレストラン「リバティ」のディナービュッフェ。タラバガニ・ズワイガニ・毛ガニの三大ガニ食べ比べをはじめ、新鮮なお刺身や実演鉄板焼きステーキが食べ放題で、家族連れやグループ旅行に不動の人気を誇ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              日本最大級露天風呂と３１のお風呂で本物の温泉リゾートを満喫！
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “露天風呂とバイキング朝も美味しかったですが、夜のバイキングが絶品でした。海鮮、肉、すべての食事が美味しかったです。全部食べきれませんでした。お風呂は露天風呂の眺望が最高でした。年甲斐も…　2026-09-05 17:51:09投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D12568%26f_flg%3DPLAN"
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
            登別温泉　登別グランドホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">北海道登別市・「登別の迎賓館」と称される名門ホテル！本格ドーム型ローマ風呂と究極のととのい「鬼サウナ」</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 北海道登別市登別温泉町154</div>
            <div><strong>アクセス:</strong> JR登別駅からタクシーにて約13分、路線バスにて登別駅⇒登別温泉ターミナル約15分（バス運賃片道350円）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.26</span> (3290件)</div>
            <div><strong>参考価格:</strong> 1名あたり約15,400円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">昭和13年創業、皇族も宿泊された格式高い洋風建築の趣を残す名門ホテル。象徴的な大浴場は、天井の高いドーム型構造にステンドグラスが輝くヨーロピアンな「ローマ風呂」と、四季の渓谷美を望む大庭園露天風呂。さらに近年新設されたオートロウリュ完備の「鬼サウナ（110度）」と「清流サウナ」、登別の沢水を引いた水風呂は全国のサウナーから絶賛されています。夕食は和洋中のシェフが腕を振るう豪華ビュッフェまたは本格和食会席で、洗練されたおもてなしとともに極上の休日を過ごせます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              鬼サウナで、鬼ととのう。「サウナシュラン2023」5位受賞！【楽天トラベルアワード2年連続金賞受賞】
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “バイキング料理に大満足、イカの塩辛も欲しいバイキングの料理が美味しかったー!!大満足でしたー!!強いて言えば、あさもイカの塩辛置いて欲しいです!クチコミの詳細はこちらから　https:…　2026-09-02 01:15:37投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D39175%26f_flg%3DPLAN"
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
            href="/furusato-tax-crab-all-you-can-eat-winter-buffet-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【冬の蟹食べ放題＆本場松葉ガニ名宿×ふるさと納税】夕日ヶ浦・城崎温泉
          </Link>
          <Link
            href="/furusato-tax-yufuin-onsen-kinrinko-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【由布院温泉＆金鱗湖名門宿×ふるさと納税】花由・秀峰館・梅園
          </Link>
          <Link
            href="/furusato-tax-pure-100-percent-kakenagashi-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【源泉かけ流し100％名湯×ふるさと納税】加水加温なしの本物の温泉宿
          </Link>
          <Link
            href="/furusato-tax-indoor-pool-kids-family-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【一年中泳げる室内温水プール宿×ふるさと納税】那須・草津・別府リゾート
          </Link>
        </div>
      </section>
    </article>
  );
}
