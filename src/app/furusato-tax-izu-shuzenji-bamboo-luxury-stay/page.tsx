import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '伊豆最古の小京都！修善寺温泉の竹林の小径散策＆桂川のせせらぎ望む老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】湯回廊菊屋・宙SORA・桂川',
  description: '弘法大師が開湯した伊豆最古の名湯・修善寺温泉！竹林の小径、桂川にかかる恋の橋巡り。「湯回廊 菊屋」「修善寺温泉 宙 SORA 渡月荘金龍」「修善寺温泉 桂川」を、静岡県伊豆市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。創業四百年の渡り廊下、一万五千坪日本庭園、伊豆名物金目鯛・天城わさび会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '修善寺温泉 竹林の小径＆名門宿特集',
    '楽天ふるさと納税 トラベル',
    '湯回廊　菊屋（共立リゾート）',
    '修善寺温泉　宙ＳＯＲＡ　渡月荘金龍',
    '湯めぐりの宿　修善寺温泉　桂川（共立リゾート）',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-izu-shuzenji-bamboo-luxury-stay/',
  },
  openGraph: {
    title: '伊豆最古の小京都！修善寺温泉の竹林の小径散策＆桂川のせせらぎ望む老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】湯回廊菊屋・宙SORA・桂川',
    description: '弘法大師が開湯した伊豆最古の名湯・修善寺温泉！竹林の小径、桂川にかかる恋の橋巡り。「湯回廊 菊屋」「修善寺温泉 宙 SORA 渡月荘金龍」「修善寺温泉 桂川」を、静岡県伊豆市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。創業四百年の渡り廊下、一万五千坪日本庭園、伊豆名物金目鯛・天城わさび会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-izu-shuzenji-bamboo-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoShuzenjiBambooStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">修善寺温泉 竹林の小径＆名門宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          伊豆の小京都・文学の薫る名湯！静岡県修善寺温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          伊豆最古の小京都！修善寺温泉の竹林の小径散策＆桂川のせせらぎ望む老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】湯回廊菊屋・宙SORA・桂川
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
          桂川のせせらぎ、青竹がそよぐ竹林の小径。夏目漱石や川端康成が愛した伊豆最古の小京都・修善寺の休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          平安時代初期の大同2年（807年）、弘法大師空海が独鈷（とっこ）で岩を打ち砕いて霊泉を湧出させた「独鈷の湯」から始まったと伝わる、伊豆半島最古の温泉地「修善寺温泉（しゅぜんじおんせん）」。中心を流れる桂川沿いには、しっとりとした情緒を醸し出す「竹林の小径」や朱塗りの橋が架かり、古くから夏目漱石、芥川龍之介、川端康成、岡本綺堂ら名だたる文人墨客が逗留し、数々の名作を執筆した日本屈指の文学ロマンあふれる温泉街です。修善寺温泉の湯は、さらりとして肌あたりの柔らかいアルカリ性単純温泉。体の芯からじんわりと温まり、湯上がりには肌がすべすべになると評判です。宿の渡り廊下を歩けば、川のせせらぎと四季の草花、虫の声が耳に心地よく響き、何もしない贅沢に心が洗われます。さらに食の楽しみも格別。清らかな天城の伏流水で育った本生わさびをおろして味わう刺身やステーキ、駿河湾や下田港から直送される高級魚「金目鯛（キンメダイ）」の姿煮やしゃぶしゃぶ、伊豆の旬の山の幸を取り入れた繊細な会席料理が旅の宵を華やかに彩ります。本特集では、桂川を跨ぐ渡り廊下と夏目漱石ゆかりの部屋を残す創業四百年の名門「湯回廊 菊屋（共立リゾート）」、一万五千坪もの壮大な日本庭園とドラマのロケ地としても名高い展望露天風呂が評判の「修善寺温泉 宙 SORA 渡月荘金龍」、そして七つの趣異なる無料貸切風呂と修禅寺への好立地を誇る「湯めぐりの宿 修善寺温泉 桂川」の3大名宿を厳選。静岡県伊豆市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの修善寺ステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">修善寺温泉 竹林の小径＆名門宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】湯回廊　菊屋（共立リゾート）</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】修善寺温泉　宙ＳＯＲＡ　渡月荘金龍</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】湯めぐりの宿　修善寺温泉　桂川（共立リゾート）</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 修善寺温泉 竹林の小径＆名門宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">伊豆最古の名湯と竹林の小径！文豪たちが愛した風情ある温泉街のそぞろ歩き</h3>
            <p className="text-sm text-gray-600 leading-relaxed">浴衣と下駄で朱塗りの橋や竹林の小径を散策。日々の喧騒を忘れ、川のせせらぎと緑の美しさに心から癒やされる時間が流れています。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">下田直送の「金目鯛姿煮」と「天城本生わさび」！伊豆の海と山の極上美味会席</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ふっくら煮付けた濃厚な金目鯛や、目の前でおろす香り豊かな生わさび、駿河湾の地魚など、伊豆ならではの滋味深い料理を堪能。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">伊豆市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や週末温泉旅に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">首都圏から踊り子号や新幹線でアクセスの良い修善寺温泉もふるさと納税なら実質2,000円。寄付から3年間有効なので、新緑や紅葉に合わせ計画できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            湯回廊　菊屋（共立リゾート）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">静岡県伊豆市・創業四百年！夏目漱石逗留の格式＆桂川を跨ぐ回廊と趣異なる庭園露天風呂・無料貸切風呂（湯回廊 菊屋）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 静岡県伊豆市修善寺874-1</div>
            <div><strong>アクセス:</strong> 伊豆箱根鉄道 修善寺駅よりバス約８分※送迎無し／東名高速 沼津ICから国道１号線、国道１３６号線 伊豆中央道経由約３５分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.49</span> (1703件)</div>
            <div><strong>参考価格:</strong> 1名あたり約21,230円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">修善寺温泉の中心を流れる桂川を跨ぐように建てられた、創業四百余年の歴史を誇る名門温泉旅館。文豪・夏目漱石が胃潰瘍の療養のために長期逗留した「漱石の間」をはじめ、敷地内を結ぶ木造の渡り廊下「湯回廊」は歴史の息吹を色濃く残します。館内には広々とした大浴場や露天風呂のほか、予約不要で何度でも利用できる4つの趣異なる無料貸切風呂があり、清流のせせらぎを聞きながら極上の湯浴みが可能。夕食は月替わりの本格日本料理会席で、下田港直送の金目鯛や天城産本わさび、旬の地場食材を美しく盛り込んだ逸品を心ゆくまで堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              文豪も愛した本館、源泉かけ流し風呂付の離れ、2021年～水の語り部(温泉風呂付）、風の語り部が誕生
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “全てが素晴らしく大満足のひととき本当に、全てが良かったです...。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/7…　2026-09-05 13:33:41投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D7491%26f_flg%3DPLAN"
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
            修善寺温泉　宙ＳＯＲＡ　渡月荘金龍
          </h2>
          <p className="text-xs md:text-sm text-amber-100">静岡県伊豆市・竹林の小径すぐ！一万五千坪の広大な日本庭園と夜空を仰ぐ展望露天風呂＆デザイナーズモダン宿（宙 SORA 渡月荘金龍）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 静岡県伊豆市修善寺3455</div>
            <div><strong>アクセス:</strong> 伊豆箱根鉄道修善寺駅から路線バスまたはタクシー（送迎不可）/東名高速沼津ICから伊豆縦貫道・伊豆中央道経由約３５分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.66</span> (614件)</div>
            <div><strong>参考価格:</strong> 1名あたり約11,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">竹林の小径に隣接する小高い丘の上に建ち、約一万五千坪という圧倒的な広さを誇る日本庭園に抱かれたスタイリッシュな高級温泉旅館。テレビドラマ「逃げるは恥だが役に立つ」の温泉旅行ロケ地としても全国的に有名です。宿のシンボルである大浴場や露天風呂からは、手入れの行き届いた庭園と修善寺の緑豊かな山並みを一望。世界的デザイナーが手がけた円形・光の貸切露天風呂も大人気です。夕食は厳選された伊豆牛や駿河湾の海の幸、天城の山菜をふんだんに取り入れた創作和食会席で、モダンで上質な大人の贅沢ステイを叶えてくれます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              客室からは四季を感じられる自然が一望できます。月替りの会席は人気の絶品です。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “エアコンの音がうるさく、少し気になった総合的には満足でしたがエアコンの音がうるさく感じられたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/…　2026-09-01 13:01:12投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D27983%26f_flg%3DPLAN"
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
            湯めぐりの宿　修善寺温泉　桂川（共立リゾート）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">静岡県伊豆市・修禅寺へ徒歩圏！七つの趣異なる無料貸切風呂巡り＆バイキング・和会席が人気の共立リゾート名門（桂川）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 静岡県伊豆市修善寺860</div>
            <div><strong>アクセス:</strong> 伊豆箱根鉄道修善寺駅よりタクシーで８分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.34</span> (1944件)</div>
            <div><strong>参考価格:</strong> 1名あたり約11,800円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">修禅寺や桂川の散策拠点として最高のロケーションに位置する、共立リゾートがプロデュースする温泉ホテル。最大の魅力は、館内に用意された「七つの無料貸切風呂（檜、信楽焼、岩風呂など）」。空いていれば予約なしで何度でも湯巡りができ、家族やカップルでプライベートな温泉時間を満喫できます。客室は和の温もりを感じる洗練された和洋室。夕食は旬の刺身や天ぷら、伊豆の郷土料理が彩り豊かに並ぶハーフバイキングや和食会席が選べ、共立リゾート名物の夜鳴きそばサービスとともに滞在の満足感を高めてくれます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              2021年1月グランドオープン◇無料の7つの貸切風呂で楽しむ美肌の修善寺温泉
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “7つの貸切風呂と海鮮料理に大満足貸切風呂が7個もあり、どのお風呂に入るか悩む楽しみがあり、名前にある通り湯めぐりが楽しめる宿でした。みんな貸切風呂に行くからか、大浴場に誰もおらず独り占めでき、贅沢…　2026-09-05 20:44:49投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D1645%26f_flg%3DPLAN"
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
            href="/furusato-tax-hakone-onsen-open-air-bath-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【箱根温泉 客室露天風呂＆名門旅館×ふるさと納税】富士屋ホテル・天成園・はつはな
          </Link>
          <Link
            href="/furusato-tax-atami-ocean-view-fireworks-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【熱海花火大会特等席＆オーシャンビュー温泉宿×ふるさと納税】後楽園・ニューアカオ・パールスター
          </Link>
          <Link
            href="/furusato-tax-dogo-onsen-honkan-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス
          </Link>
          <Link
            href="/furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿
          </Link>
        </div>
      </section>
    </article>
  );
}
