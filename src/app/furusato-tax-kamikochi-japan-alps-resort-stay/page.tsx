import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '神降ちる清流と穂高連峰の絶景！上高地の大正池・梓川温泉＆本格山岳フレンチ名宿×ふるさと納税完全攻略ガイド【2026年最新】ルミエスタ・大正池ホテル・上高地温泉ホテル',
  description: '日本屈指の山岳景勝地・長野県上高地！河童橋、大正池、エメラルドに輝く梓川と穂高連峰のパノラマ。「上高地ルミエスタホテル」「上高地大正池ホテル」「上高地温泉ホテル」を、長野県松本市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。自家源泉天然温泉、朝霧の大正池、極上フレンチフルコースを満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '上高地 北アルプス山岳名宿特集',
    '楽天ふるさと納税 トラベル',
    '上高地ルミエスタホテル(旧：上高地清水屋ホテル)',
    '星降るホテル　上高地大正池ホテル',
    '上高地温泉ホテル',
    '高級リゾートホテル',
    'プライベートプール',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kamikochi-japan-alps-resort-stay/',
  },
  openGraph: {
    title: '神降ちる清流と穂高連峰の絶景！上高地の大正池・梓川温泉＆本格山岳フレンチ名宿×ふるさと納税完全攻略ガイド【2026年最新】ルミエスタ・大正池ホテル・上高地温泉ホテル',
    description: '日本屈指の山岳景勝地・長野県上高地！河童橋、大正池、エメラルドに輝く梓川と穂高連峰のパノラマ。「上高地ルミエスタホテル」「上高地大正池ホテル」「上高地温泉ホテル」を、長野県松本市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。自家源泉天然温泉、朝霧の大正池、極上フレンチフルコースを満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kamikochi-japan-alps-resort-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoKamikochiLuxuryStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">上高地 北アルプス山岳名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          神々が宿る日本最高峰の山岳リゾート！長野県上高地特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          神降ちる清流と穂高連峰の絶景！上高地の大正池・梓川温泉＆本格山岳フレンチ名宿×ふるさと納税完全攻略ガイド【2026年最新】ルミエスタ・大正池ホテル・上高地温泉ホテル
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
          梓川の清冽な流れ、朝霧に煙る大正池、聳え立つ穂高連峰の岩峰。マイカー規制に守られた静寂の上高地ステイへ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          標高約1,500メートル、北アルプスの麓に広がる日本を代表する山岳景勝地「長野県・上高地（かみこうち）」。国の特別名勝および特別天然記念物に指定され、一般車両の乗り入れが固く禁じられているからこそ保たれている清らかな空気と手付かずの大自然は、かつて「神降地」と称された神秘的な聖域です。朝日に照らされる雄大な穂高連峰の稜線、水草が揺れる透明度抜群の梓川、幻想的な立ち枯れの木々が湖面に映る「大正池」、そしてシンボルの「河童橋」など、歩を進めるごとに絵画のような絶景が広がります。日帰り観光客が去った夕暮れや、凛とした静寂が支配する早朝の散策を楽しめるのは、上高地エリアに宿泊する者だけに許された特権。上高地の夜空にはプラネタリウムのような満天の星空が広がり、澄み渡る夜の帳が旅人を包み込みます。さらに上高地は、日本における西洋式山岳リゾート発祥の地として、料理のレベルが極めて高いことでも有名。信州の大地が育んだ信州サーモンや信州プレミアム牛、契約農家の高原野菜をふんだんに使った正統派の本格フレンチフルコースや、自家源泉かけ流しの天然温泉は、登山の疲れを優雅に癒やしてくれます。本特集では、霞沢岳を望む梓川のほとりで天然温泉と本格フレンチフルコースを誇る名門「上高地ルミエスタホテル」、大正池の畔に佇む唯一のホテルで朝霧と満天の星が自慢の「星降るホテル 上高地大正池ホテル」、そして上高地で最初に湧出した自家源泉100％かけ流し名湯を持つ老舗「上高地温泉ホテル」の3宿を厳選。長野県松本市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの上高地ステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">上高地 北アルプス山岳名宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】上高地ルミエスタホテル(旧：上高地清水屋ホテル)</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】星降るホテル　上高地大正池ホテル</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】上高地温泉ホテル</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 上高地 北アルプス山岳名宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">宿泊者だけが出会える早朝の静寂と満天の星！大正池の朝霧と穂高連峰のモルゲンロート</h3>
            <p className="text-sm text-gray-600 leading-relaxed">観光客のいない清々しい早朝の大正池散策や、夕暮れに赤く染まる穂高連峰。夜には降るような満天の星空を静かに堪能できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">上高地で希少な自家源泉かけ流し天然温泉と本格山岳フレンチフルコース</h3>
            <p className="text-sm text-gray-600 leading-relaxed">山岳リゾートでありながら極上の天然温泉に浸かり、信州牛や信州サーモンを取り入れた一流シェフの極上ディナーを満喫。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">松本市ふるさと納税で最大30％OFF！3年間有効クーポンで予約争奪戦の上高地を賢く予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">営業期間が限られ予約困難な上高地ホテルもふるさと納税なら実質2,000円。3年間の有効期間を活かして新緑や紅葉のベストシーズンを確保できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            上高地ルミエスタホテル(旧：上高地清水屋ホテル)
          </h2>
          <p className="text-xs md:text-sm text-amber-100">長野県松本市・梓川のほとり、霞沢岳を望む絶景ロケーション！自家源泉100％の天然温泉大浴場と本格フレンチフルコース（上高地ルミエスタホテル）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 長野県松本市安曇4469-1</div>
            <div><strong>アクセス:</strong> アルピコ交通新島々駅から上高地行きバスに乗車、約１時間。帝国ホテル前下車、舗装された遊歩道を徒歩約１０分です。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.61</span> (235件)</div>
            <div><strong>参考価格:</strong> 1名あたり約52,800円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">梓川の清流沿いに佇み、対岸に霞沢岳の雄大な山容を望む上質な山岳リゾートホテル。上高地エリアでは極めて珍しい敷地内から自噴する100％自家源泉の天然温泉大浴場と露天風呂を完備しており、トレッキング後の体を芯から温めてくれます。全客室が梓川に面しており、窓を開ければ川のせせらぎと鳥のさえずりが心地よく響きます。宿最大の誇りは、歴代シェフが受け継ぐ本格フレンチフルコース「ラ・メール」。信州牛のフィレ肉や安曇野野菜、信州サーモンを繊細なソースとともに芸術的に仕立てた料理は、山の上とは思えない極上の感動を提供します。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              天然温泉源泉100％掛け流しのお風呂と、本格的なフランス料理をお楽しみいただけます
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “新婚旅行で大満足、スタッフの対応と料理が最高新婚旅行で利用したが、とっても良かった!スタッフさんが一から丁寧にせつめいしてくれたり、夜行バスで到着しメイクしたい私のために、温泉やトイレを案内してく…　2026-08-29 11:40:02投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D72775%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
            星降るホテル　上高地大正池ホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">長野県松本市・神秘の大正池の畔に佇む唯一のホテル！朝霧と立ち枯れの木々を目の前に望む絶景ロケーション＆星空観察（星降るホテル 大正池ホテル）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 長野県松本市安曇上高地</div>
            <div><strong>アクセス:</strong> 大正池バス停目の前♪松本電鉄　新島々駅から松本電鉄上高地行きバスで５０分、「大正池バス停」下車、徒歩０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.39</span> (361件)</div>
            <div><strong>参考価格:</strong> 1名あたり約23,100円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">焼岳の噴火によって生まれた神秘的な湖「大正池」のほとりに建つ、エリア唯一のロケーションを誇る山岳ホテル。朝一番にカーテンを開ければ、湖面から立ちのぼる幻想的な朝霧と、水面に映り込む穂高連峰の逆さ富士のような絶景を独り占めできます。夜にはホテル主催の星空観察会が開催され、人工の明かりが一切ない漆黒の夜空に広がる天の川に息を呑みます。食事は信州の豊かな味覚を散りばめた和洋折衷のディナーコースで、梓川の清流で育った岩魚や信州牛などを落ち着いた空間で堪能でき、大自然の静寂にどっぷりと浸れる名宿です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              上高地の玄関口大正池のほとり唯一の宿。神秘的な大正池の朝や夕方の写真撮影、上高地の散策の拠点に最適。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “雨の大正池も風情があり、食事も美味雨が降っていたので残念でしたが、部屋の窓から見える雨の大正池も良かったです。次は晴れてる時に泊まりたいです。夕食も朝食も美味しかったです。クチコミ…　2026-09-02 16:58:12投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D129679%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
            上高地温泉ホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">長野県松本市・開湯百三十年、上高地で最初に湧き出た元祖温泉宿！三つの異なる自家源泉かけ流し露天風呂と山岳会席</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 長野県松本市安曇上高地4469-1</div>
            <div><strong>アクセス:</strong> ＪＲ　松本駅より、松本電鉄上高地線の終点　新島々下車。その後上高地行きのバスに乗車「帝国ホテル前」下車、徒歩７分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.47</span> (129件)</div>
            <div><strong>参考価格:</strong> 1名あたり約25,860円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">明治時代にウェストン卿も立ち寄った歴史を誇る、上高地最古の元祖温泉旅館。敷地内にある3本の自家源泉から湧出する豊富な湯は、加水・加温一切なしの完全源泉掛け流し。木造の風情ある内湯や、白樺の原生林に囲まれた開放感あふれる樽風呂・岩露天風呂で、上高地の澄んだ空気を吸い込みながら極上の湯浴みが楽しめます。客室は木の温もりを感じる和室やモダン和洋室が揃い、梓川の散策路へもすぐ出られる好立地。夕食は信州サーモンのお造りや岩魚の塩焼き、信州牛鍋など、素朴ながらも滋味あふれる季節の山岳会席料理で心温まるおもてなしを受けられます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              創業明治１９年、標高１５００メートル自家源泉かけ流しの宿
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “140年の歴史と趣、絶品料理と温泉に癒やされる高校の修学旅行以来、約40年ぶりに訪れました。新しいホテルと比べると建物の古さは否めませんが、その分、140年の歴史と趣を感じることができ、とても…　2026-08-31 17:06:32投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38862%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
              <p className="text-xs md:text-sm text-gray-600">訪れたいホテルや温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <span>ハイシーズンや連休でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、ゴールデンウィークや夏休み、年末年始や紅葉シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-karuizawa-luxury-resort-villa-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森
          </Link>
          <Link
            href="/furusato-tax-furano-biei-lavender-nature-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【富良野・美瑛 ラベンダー畑＆大自然絶景宿×ふるさと納税】新富良野プリンス・オリカ・白金温泉
          </Link>
          <Link
            href="/furusato-tax-hakone-onsen-open-air-bath-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【箱根温泉 客室露天風呂＆名門旅館×ふるさと納税】富士屋ホテル・天成園・はつはな
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
