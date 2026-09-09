import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '鬼怒川渓谷の絶景と名湯！空中庭園露天風呂＆豪華100種バイキング・最高峰老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】あさや・金谷ホテル・ホテル三日月',
  description: '関東屈指の歴史を誇る名湯リゾート・鬼怒川温泉！ダイナミックな鬼怒川渓谷の巨岩と四季の景観。「鬼怒川温泉 あさや」「鬼怒川金谷ホテル」「鬼怒川温泉 日光きぬ川ホテル三日月」を、栃木県日光市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。絶景空中庭園露天風呂、ショコラバー、100種バイキングを満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '鬼怒川温泉 渓谷美＆名門旅館特集',
    '楽天ふるさと納税 トラベル',
    '鬼怒川温泉　あさや',
    '鬼怒川金谷ホテル',
    '鬼怒川温泉　日光きぬ川ホテル三日月',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kinugawa-onsen-valley-view-luxury-stay/',
  },
  openGraph: {
    title: '鬼怒川渓谷の絶景と名湯！空中庭園露天風呂＆豪華100種バイキング・最高峰老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】あさや・金谷ホテル・ホテル三日月',
    description: '関東屈指の歴史を誇る名湯リゾート・鬼怒川温泉！ダイナミックな鬼怒川渓谷の巨岩と四季の景観。「鬼怒川温泉 あさや」「鬼怒川金谷ホテル」「鬼怒川温泉 日光きぬ川ホテル三日月」を、栃木県日光市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。絶景空中庭園露天風呂、ショコラバー、100種バイキングを満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kinugawa-onsen-valley-view-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoKinugawaOnsenValleyStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">鬼怒川温泉 渓谷美＆名門旅館特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          渓谷美と名湯の競演！栃木県日光市鬼怒川温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          鬼怒川渓谷の絶景と名湯！空中庭園露天風呂＆豪華100種バイキング・最高峰老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】あさや・金谷ホテル・ホテル三日月
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
          深緑と紅葉に染まる鬼怒川の渓谷美。吹き抜けの黄金ロビーと絶景露天風呂に心解き放たれる鬼怒川の旅へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          栃木県日光市、鬼怒川の上流に広がる関東屈指の歴史ある名湯「鬼怒川温泉（きぬがわおんせん）」。江戸時代に発見された当時は日光東照宮の領地であり、日光詣帰りの大名や僧侶のみが入浴を許された格式高い温泉地として栄えました。鬼怒川温泉の最大の魅力は、エメラルドグリーンに輝く清流と両岸に切り立つダイナミックな巨岩・渓谷が織りなす圧倒的な自然美です。アルカリ性単純温泉のお湯は、無色透明で柔らかく肌に優しいため、神経痛や疲労回復、美肌に優れた効果を発揮。宿の露天風呂に身を沈めれば、眼下を流れる鬼怒川の轟音と風にそよぐ木々のざわめきに包まれ、日頃のストレスが一瞬で吹き飛びます。さらに、美食の宝庫としても名高い鬼怒川。ブランド黒毛和牛「とちぎ和牛」のステーキやすき焼き、日光名物の「日光湯波（ゆば）」の煮物やお造り、清流で育った岩魚の塩焼きなど、栃木の豊かな風土が育んだ美味が食卓を彩ります。本特集では、創業百三十年を誇り金色の吹き抜けロビーと最上階「空中庭園露天風呂」、100種類以上の豪華和洋中バイキングが全国的な人気を誇る象徴的宿「鬼怒川温泉 あさや」、日本のホテル界の父・ジョン金谷鮮治の美学を受け継ぐ最高峰ラグジュアリーリゾート「鬼怒川金谷ホテル」、そして鬼怒川渓谷を見下ろす多彩な温泉プールと家族連れに絶大な人気を誇る「鬼怒川温泉 日光きぬ川ホテル三日月」の3宿を厳選。栃木県日光市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で鬼怒川温泉の贅沢な温泉旅をお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">鬼怒川温泉 渓谷美＆名門旅館特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】鬼怒川温泉　あさや</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】鬼怒川金谷ホテル</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】鬼怒川温泉　日光きぬ川ホテル三日月</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 鬼怒川温泉 渓谷美＆名門旅館特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">鬼怒川渓谷を一望する空中庭園露天風呂！圧倒的なスケールと開放感の温泉体験</h3>
            <p className="text-sm text-gray-600 leading-relaxed">鬼怒川の渓谷美をはるか眼下に見下ろす展望露天風呂や貸切風呂。朝霧や夕焼け、満天の星空を眺めながら優雅な湯浴みを楽しめます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">「とちぎ和牛」と名物「日光湯波」！伝統会席と100種超の豪華バイキング</h3>
            <p className="text-sm text-gray-600 leading-relaxed">甘み豊かなとちぎ和牛や日光湯波など、地元の厳選素材を活かした極上ディナー。オープンキッチンで仕上げる出来立て料理も大人気です。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">日光市ふるさと納税で最大30％OFF！3年間有効クーポンで家族旅行や連休に活用</h3>
            <p className="text-sm text-gray-600 leading-relaxed">満足度の高い鬼怒川の人気旅館もふるさと納税クーポンで実質負担2,000円。寄付から3年間有効なので、東照宮観光と合わせて計画できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            鬼怒川温泉　あさや
          </h2>
          <p className="text-xs md:text-sm text-amber-100">栃木県日光市・創業百三十年の象徴！豪華絢爛吹き抜けロビー＆最上階「空中庭園露天風呂」と100種以上の極上バイキング（口コミ5,500件超）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 栃木県日光市鬼怒川温泉滝813</div>
            <div><strong>アクセス:</strong> 東武浅草駅より特急で約2時間。鬼怒川温泉駅下車。東北道宇都宮I.C～日光宇都宮道今市I.C、鬼怒川方面。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.63</span> (5531件)</div>
            <div><strong>参考価格:</strong> 1名あたり約17,500円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">鬼怒川温泉を代表する創業百三十余年の老舗大型旅館。館内に一歩足を踏み入れると、きらびやかなシャンデリアとガラスのエレベーターが上下する圧巻の吹き抜けロビーが旅人を迎えます。宿の代名詞は、鬼怒川で最も高い場所に位置する最上階の「空中庭園露天風呂 昇龍」。昼は雄大な鬼怒川の渓谷美、夜は頭上に広がる満天の星空を眺めながら入浴する時間は至福のひとときです。食事は楽天トラベルアワード常連の豪華バイキング。シェフが目の前で焼き上げる黒毛和牛ステーキや揚げたて天ぷら、握り寿司、名物あさや特製和牛カレーなど、100種類以上の厳選料理が並び、子どもからシニアまで圧倒的な人気を誇ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              それぞれの旅行スタイルに合せて選べる部屋と食事。新しい温泉リゾートの提案です。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “バイキングが最高、また必ず泊まりたいバイキング最高でした。また鬼怒川行く時は絶対あさやに泊まりたいと思います。クチコミの詳細はこちらから　https://review.travel…　2026-09-05 23:46:12投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8643%26f_flg%3DPLAN"
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
            鬼怒川金谷ホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">栃木県日光市・鬼怒川渓谷に佇む最高峰ラグジュアリー！ジョン金谷の美学息づく渓谷美テラス＆ショコラバーと金谷流懐石料理</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 栃木県日光市鬼怒川温泉大原1394</div>
            <div><strong>アクセス:</strong> 東武線鬼怒川温泉駅より徒歩３分/今市ICより国道１２１号で約２０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.39</span> (392件)</div>
            <div><strong>参考価格:</strong> 1名あたり約42,160円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">日本最古のクラシックリゾートホテル「日光金谷ホテル」の創業者一族であり、食通としても知られたジョン金谷鮮治のダンディズムと美学を形にした最高峰のリゾートホテル。全客室が鬼怒川の渓谷に面しており、広々としたプライベートウッドデッキからは鬼怒川の清流と巨岩が織りなす絶景を静かに堪能できます。大浴場には樹齢二千年を超える古代檜の風呂や四季の風を感じる白御影石の露天風呂を完備。夕食は和の伝統と洋のスパイスが調和した「金谷流懐石料理」。食後には川風が吹き抜けるショコラバーにて、専属ショコラティエによる自家製ショコラとウイスキーの至福のマリアージュを楽しめます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              大自然が織りなす渓谷美を味わい、心と身体が安らぐひとときを。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “鬼怒川の絶景と創作料理、心温まる接客に感動クラブフロアのスイートの部屋に宿泊しました。部屋のお風呂、大きな窓から眼下に広がる鬼怒川の景観が素晴らしく、厳選された素材を使っての創作料理もとても美…　2026-07-16 20:30:39投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D28440%26f_flg%3DPLAN"
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
            鬼怒川温泉　日光きぬ川ホテル三日月
          </h2>
          <p className="text-xs md:text-sm text-amber-100">栃木県日光市・東武鬼怒川温泉駅徒歩約3分の好立地！渓谷を一望する大型温泉大浴場＆水着で楽しむガーデンスパと家族連れ大満足バイキング</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 栃木県日光市鬼怒川温泉大原1400</div>
            <div><strong>アクセス:</strong> 東武鉄道鬼怒川温泉駅より徒歩約3分。東北道宇都宮ＩＣ～日光宇都宮道今市ＩＣ～Ｒ121経由で約40分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.46</span> (4565件)</div>
            <div><strong>参考価格:</strong> 1名あたり約16,531円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">東武鉄道の鬼怒川温泉駅から徒歩約3分という最高のアクセスを誇る大型温泉リゾートホテル。館内には鬼怒川の渓谷美を見下ろす広々とした大浴場や露天風呂、名物の「黄金風呂」や「銀風呂」が揃い、名湯を存分に堪能できます。さらに水着で遊べる屋内スパプールや、流れるプール、ウォータースライダーなど温泉エンターテインメント設備が充実しており、天候を問わずファミリーや三世代で一日中楽しめるのが強み。夕食はオープンキッチンで調理されるステーキや海鮮焼き、和洋中の多彩な料理が並ぶ豪華バイキングで、大人も子どもも笑顔あふれる賑やかな滞在を満喫できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              鬼怒川温泉駅より徒歩約3分。楽天トラベル 【ブロンズ・日本の宿アワード2025】W受賞。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “駅まで徒歩圏内だが接客と食事は期待外れチェックインでは、対応された方の案内等が不十分だなと感じました。また、あまり愛想も良くないし、こちらの質問に対してもめんどくさそう?と感じるほどでした。料理は…　2026-09-06 00:44:39投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9086%26f_flg%3DPLAN"
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
            href="/furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋
          </Link>
          <Link
            href="/furusato-tax-hakone-onsen-open-air-bath-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【箱根温泉 客室露天風呂＆名門旅館×ふるさと納税】富士屋ホテル・天成園・はつはな
          </Link>
          <Link
            href="/furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば・グランドホテル
          </Link>
          <Link
            href="/furusato-tax-luxury-buffet-gourmet-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【豪華ビュッフェ＆オープンキッチン名宿×ふるさと納税】美食リゾート
          </Link>
        </div>
      </section>
    </article>
  );
}
