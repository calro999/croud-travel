import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '源泉数・湧出量日本一！別府八湯＆地獄めぐりと大パノラマ露天風呂名門ホテル×ふるさと納税完全攻略ガイド【2026年最新】杉乃井・山水館・亀の井',
  description: '源泉数・湧出量ともに日本一を誇るおんせん県おおいたの象徴・別府温泉！大迫力の地獄めぐりと湯けむり景観。「別府温泉 杉乃井ホテル」「別府鉄輪温泉 ホテル山水館」「亀の井ホテル 別府」を、大分県別府市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。大展望露天風呂棚湯、地獄蒸し、郷土料理バイキングを満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '別府温泉 地獄めぐり宿特集',
    '楽天ふるさと納税 トラベル',
    '別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）',
    '別府鉄輪温泉　ホテル山水館',
    '亀の井ホテル　別府',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-beppu-onsen-jigoku-meguri-stay',
  },
  openGraph: {
    title: '源泉数・湧出量日本一！別府八湯＆地獄めぐりと大パノラマ露天風呂名門ホテル×ふるさと納税完全攻略ガイド【2026年最新】杉乃井・山水館・亀の井',
    description: '源泉数・湧出量ともに日本一を誇るおんせん県おおいたの象徴・別府温泉！大迫力の地獄めぐりと湯けむり景観。「別府温泉 杉乃井ホテル」「別府鉄輪温泉 ホテル山水館」「亀の井ホテル 別府」を、大分県別府市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。大展望露天風呂棚湯、地獄蒸し、郷土料理バイキングを満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-beppu-onsen-jigoku-meguri-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoBeppuOnsenJigokuStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">別府温泉 地獄めぐり宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          日本一の湧出量を誇る温泉王国！大分県別府温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          源泉数・湧出量日本一！別府八湯＆地獄めぐりと大パノラマ露天風呂名門ホテル×ふるさと納税完全攻略ガイド【2026年最新】杉乃井・山水館・亀の井
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
          立ちのぼる湯けむりと別府湾の絶景！地獄めぐりと多彩な泉質に酔いしれる別府八湯の休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          毎分8万リットルを超える驚異の温泉湧出量と、2,000箇所を超える源泉数を誇る、名実ともに日本一の温泉都市「別府温泉（別府八湯）」。街のいたるところから白い湯けむりが立ちのぼる光景は国の重要文化的景観にも選ばれており、海地獄や血の池地獄をはじめとする奇観を巡る「別府地獄めぐり」は、別府を訪れたら外せない大人気観光コースです。別府温泉の魅力は、世界にある全11種類の泉質のうち10種類が揃うとされる泉質の多彩さ。塩化物泉、硫黄泉、炭酸水素塩泉など、浴場ごとに全く異なる肌触りと効能を体感できます。さらに、高温の温泉蒸気で旬の野菜や肉、魚介を一気に蒸し上げる伝統の調理法「地獄蒸し料理」や、大分名物の「とり天」、新鮮な「関アジ・関サバ」など、別府ならではの豊かな食文化が旅の満足度を極限まで高めてくれます。本特集では、棚田状の大展望露天風呂「棚湯」や噴水ショーが全国的な知名度を誇る一大リゾート「別府温泉 杉乃井ホテル」、湯けむり立ち上る鉄輪温泉で展望露天風呂と名物地獄蒸し料理を堪能できる「別府鉄輪温泉 ホテル山水館」、そして別府駅徒歩4分の好立地で広々大浴場と郷土料理バイキングがファミリーに大人気の「亀の井ホテル 別府」の3大名宿を厳選。大分県別府市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で別府温泉の贅沢な温泉旅をお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">別府温泉 地獄めぐり宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】別府鉄輪温泉　ホテル山水館</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】亀の井ホテル　別府</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 別府温泉 地獄めぐり宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">別府湾を一望する大パノラマ露天風呂！圧倒的なスケールと湯量の温泉リゾート</h3>
            <p className="text-sm text-gray-600 leading-relaxed">棚田状に広がる巨大露天風呂や別府湾を見晴らす展望大浴場など、日本一の湯量を誇る別府ならではの開放感あふれる温泉を満喫できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">名物「地獄蒸し料理」と大分名物グルメ！温泉の恵みをまるごと味わう食体験</h3>
            <p className="text-sm text-gray-600 leading-relaxed">高温の温泉蒸気で素材の旨味を凝縮させた地獄蒸しや、サクサクのとり天、豊後牛や関アジなど、大分が誇る絶品グルメを心ゆくまで堪能。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">別府市ふるさと納税で最大30％OFF！3年間有効クーポンで家族旅行や連泊に大活躍</h3>
            <p className="text-sm text-gray-600 leading-relaxed">大人気メガリゾートや老舗ホテルもふるさと納税クーポンで実質負担2,000円。寄付から3年間有効なので、長期連休や週末旅行に幅広く使えます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">大分県別府市・別府湾を一望する棚田状の大展望露天風呂「棚湯」！口コミ1.2万件超・九州屈指のメガエンターテインメント温泉リゾート</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 大分県別府市観海寺1</div>
            <div><strong>アクセス:</strong> 大分自動車道別府ＩＣより観海寺方面へ車で５分。ＪＲ別府駅より車で１０分。JR別府駅とホテル間を結ぶ無料シャトルバス有り。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.63</span> (12861件)</div>
            <div><strong>参考価格:</strong> 1名あたり約16,600円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">別府の高台に位置し、別府湾と市街地を見下ろす圧倒的なスケールを誇る九州屈指の大型温泉リゾートホテル。宿の代名詞である「大展望露天風呂 棚湯」は、棚田のように段状に広がる湯船から、昼は別府湾の青い水平線、夜は満天の星と街の夜景を一望できる大迫力のパノラマ露天風呂。水着で楽しむ温泉プール「アクアガーデン」の光と音の噴水ショーや、ボウリング場などアミューズメントも充実。食事は和洋中それぞれのシェフが目の前で腕を振るうオープンキッチンバイキングで、カニやステーキ、新鮮な刺身が食べ放題。ファミリーや三世代旅行に圧倒的支持を集めています。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              別府の夜空に光る星のように、心ときめく時間を過ごす新棟「星館」
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “毎年来たいホテルNo. 1初めての杉乃井ホテル仕事場の上司に勧められて来ましたが想像以上に満足できるホテルで、毎年遊びに来たいと思えるホテルです。一日中遊べて子供も大人も楽しめます。ク…　2026-09-05 14:42:36投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5547%26f_flg%3DPLAN"
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
            別府鉄輪温泉　ホテル山水館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">大分県別府市・湯けむり立ち上る鉄輪温泉の好立地！展望大浴場から扇山を仰ぎ名物「地獄蒸し料理」を堪能する名門ホテル</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 大分県別府市鶴見628-1</div>
            <div><strong>アクセス:</strong> ＪＲ　別府駅よりお車にて約１５分、亀の井バスに乗車「朝日」にて下車後、徒歩１分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.19</span> (244件)</div>
            <div><strong>参考価格:</strong> 1名あたり約11,550円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">別府八湯の中でも最も温泉情緒が漂う鉄輪（かんなわ）温泉に位置する温泉ホテル。館内最上階の展望露天風呂からは、立ちのぼる温泉の湯けむりと鶴見岳・扇山の雄大な稜線を一望でき、朝夕で表情を変える別府の原風景に包まれます。地下の大浴場にも露天風呂を備え、鉄輪の名湯をたっぷりと満喫。夕食は高温の温泉蒸気釜で蒸し上げる名物「地獄蒸し」をはじめ、豊後牛の陶板焼きやお造りなど、素材本来の旨味を最大限に引き出した郷土会席料理を味わえます。地獄めぐりへのアクセスも徒歩圏内で観光の拠点に最適です。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              木々に囲まれ二連水車の廻る大露天風呂と別府湾や湯煙りの情景を一望できる展望露天風呂が人気
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “部屋は綺麗で展望風呂と大浴場を満喫部屋は綺麗で、窓際が和室になっていてとてもよかったです温泉は展望風呂と大浴場の2種類があって楽しめます欲を言えばぬる湯が一箇所でもあるといいなと思いました…　2026-08-25 16:40:07投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D107764%26f_flg%3DPLAN"
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
            亀の井ホテル　別府
          </h2>
          <p className="text-xs md:text-sm text-amber-100">大分県別府市・JR別府駅より徒歩4分！別府観光の祖・油屋熊八ゆかりの老舗名門＆広々天然温泉大浴場と郷土料理ビュッフェ</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 大分県別府市中央町5-17</div>
            <div><strong>アクセス:</strong> ＪＲ別府駅下車、徒歩5分。大分自動車道別府I.Cより車で15分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.01</span> (5222件)</div>
            <div><strong>参考価格:</strong> 1名あたり約3,780円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">別府観光の生みの親である油屋熊八が創業した、百余年の歴史を受け継ぐランドマークホテル。JR別府駅から徒歩4分という抜群の立地にありながら、館内には広々とした天然温泉大浴場や露天風呂、サウナを完備し、旅の疲れを心地よく癒やしてくれます。館内には駄菓子屋や縁日コーナー、キッズスペースなど子どもが喜ぶ仕掛けが充実。夕食は大分の郷土料理「とり天」や「りゅうきゅう」、豊後水道の新鮮な魚介が並ぶ豪華バイキングや和食会席が選べ、ビジネスからファミリーまで幅広い世代に高い満足度を誇ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              別府駅から徒歩5分。別府ICから車で15分。無料の駐車場も完備した温泉付きホテル
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “駅近でリーズナブル、スタッフの対応も良好3回目の利用です。別府の駅から近くて便利です。古さは感じますが、掃除が行き届いていて、スタッフがとても感じが良く、料金もリーズナブルです。今回は…　2026-09-05 18:44:22投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D4807%26f_flg%3DPLAN"
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
            href="/furusato-tax-yufuin-onsen-kinrinko-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【由布院温泉＆金鱗湖名門宿×ふるさと納税】花由・秀峰館・梅園
          </Link>
          <Link
            href="/furusato-tax-kurokawa-onsen-yumeguri-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【黒川温泉 入湯手形＆秘湯名宿×ふるさと納税】山みず木・奥の湯・新明館
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
