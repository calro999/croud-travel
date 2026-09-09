import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '家族の最高の思い出を！星野リゾート「リゾナーレ」×ふるさと納税完全攻略ガイド【2026年最新】八ヶ岳・熱海・那須で洗練された非日常ステイ',
  description: '洗練されたデザインと土地の恵みを体感するアクティビティが融合した星野リゾートのファミリーリゾートホテル「リゾナーレ」。「リゾナーレ八ヶ岳」「リゾナーレ熱海」「リゾナーレ那須」を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で賢く予約する完全ガイド。波の出る全天候型プール、絶景クライミング、森のアグリツーリズモを体験。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    '星野リゾート リゾナーレ特集',
    '楽天ふるさと納税 トラベル',
    'リゾナーレ八ヶ岳',
    'リゾナーレ熱海',
    'リゾナーレ那須',
    '高級温泉旅館',
    'オフィシャルホテル',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-hoshino-resorts-risonare-family-stay',
  },
  openGraph: {
    title: '家族の最高の思い出を！星野リゾート「リゾナーレ」×ふるさと納税完全攻略ガイド【2026年最新】八ヶ岳・熱海・那須で洗練された非日常ステイ',
    description: '洗練されたデザインと土地の恵みを体感するアクティビティが融合した星野リゾートのファミリーリゾートホテル「リゾナーレ」。「リゾナーレ八ヶ岳」「リゾナーレ熱海」「リゾナーレ那須」を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で賢く予約する完全ガイド。波の出る全天候型プール、絶景クライミング、森のアグリツーリズモを体験。',
    url: 'https://croud-travel.pages.dev/furusato-tax-hoshino-resorts-risonare-family-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoHoshinoRisonareStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">星野リゾート リゾナーレ特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          憧れの最高峰！星野リゾート リゾナーレ特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          家族の最高の思い出を！星野リゾート「リゾナーレ」×ふるさと納税完全攻略ガイド【2026年最新】八ヶ岳・熱海・那須で洗練された非日常ステイ
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
          大人は優雅にワインや温泉に酔いしれ、子どもは自然と遊びに夢中になる。家族全員の笑顔を約束する星野リゾートの休日へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          「大人のためのファミリーリゾート」を掲げ、洗練された建築空間と土地の文化・自然を満喫できる多彩なアクティビティで全国の旅人を魅了する星野リゾートの「リゾナーレ（RISONARE）」。季節ごとのイベントで賑わうメインストリート、波の出る屋内温水プール、森の空中基地、本格的なキッズアクティビティ、そして地元食材を惜しみなく使ったメインダイニングの極上イタリアンやビュッフェ——。子ども向けサービスを妥協せず、大人の贅沢感も極限まで高めた唯一無二のリゾート体験は、記念日や連休の家族旅行で常に予約争奪戦となる圧倒的な人気を誇ります。本特集では、中世ヨーロッパの街並みを再現したピーマン通りや波の出るプール「イルマーレ」が有名な山梨県「リゾナーレ八ヶ岳」、相模湾を見下ろす高台に建ち、ツリーハウスや青い海を一望する絶景温泉が自慢の静岡県「リゾナーレ熱海」、そして那須の原生林の中で畑仕事や土の恵みに触れる日本初のアグリツーリズモリゾート「リゾナーレ那須」の3大名宿を厳選。北杜市・熱海市・那須町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れのリゾナーレステイをお得に実現しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">星野リゾート リゾナーレ特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】リゾナーレ八ヶ岳</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】リゾナーレ熱海</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】リゾナーレ那須</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 星野リゾート リゾナーレ特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">洗練されたデザイン空間×全天候型アクティビティ！天候に左右されない充実度</h3>
            <p className="text-sm text-gray-600 leading-relaxed">建築家マリオ・ベリーニらが手掛けた美しい空間で、屋内波プールや森の空中アスレチック、託児サービスなど大人も子どもも一日中飽きずに楽しめるプログラムが揃います。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">土地の風土を味わう極上ダイニング！ワインペアリングと厳選ビュッフェ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">山梨の甲州ワインや那須の採れたて高原野菜、相模湾の新鮮魚介を主役にした本格イタリアンコースやライブ感あふれるビュッフェで、五感が満たされる美食体験が楽しめます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">ふるさと納税で宿泊費を最大30％OFF！3年間有効で家族の記念日に賢く予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">憧れの星野リゾートもふるさと納税クーポンなら実質自己負担2,000円で利用可能。寄付から3年間のゆとりある有効期限で、子どもの誕生日や家族旅行に合わせて予約できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            リゾナーレ八ヶ岳
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山梨県北杜市・八ヶ岳山麓の高原リゾート！波の出る全天候型プール「イルマーレ」とピーマン通り</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山梨県北杜市小淵沢町129-1</div>
            <div><strong>アクセス:</strong> JR中央本線小淵沢駅よりシャトルバス約5分／中央自動車道小淵沢ICより約5分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.54</span> (1152件)</div>
            <div><strong>参考価格:</strong> 1名あたり約15,400円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">八ヶ岳の雄大な自然に抱かれ、石畳の回廊「ピーマン通り」にカフェやショップが立ち並ぶヨーロッパ調の高原リゾート。最大の特徴は、波の出る屋内温水プール「イルマーレ」。ビッグウェーブやキッズエリア、スパが完備され一年中水遊びが楽しめます。客室はボルドーカラーを基調とした洗練のメゾネットやワインスイートが揃い、大人は八ヶ岳ワインハウスで24種の厳選ワインをテイスティング。メインダイニング「OTTO SETTE」では山梨の大地が育んだ極上のイタリアンコースをワインペアリングとともに堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              八ヶ岳の雄大な自然と土地のワインを堪能するリゾート
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “ヨーロッパの街並みがとても素敵ヨーロッパの街並みが素敵 クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/2948…　2026-09-05 10:47:38投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D29487%26f_flg%3DPLAN"
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
            リゾナーレ熱海
          </h2>
          <p className="text-xs md:text-sm text-amber-100">静岡県熱海市・相模湾を見下ろす山上の絶景ホテル！白砂のソラノビーチ・樹齢300年の森の空中基地</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 静岡県熱海市水口町2-13-1</div>
            <div><strong>アクセス:</strong> 熱海駅より送迎バスにて15分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.53</span> (464件)</div>
            <div><strong>参考価格:</strong> 1名あたり約17,400円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">熱海の高台から街並みと相模湾のパノラマビューを一望できるスタイリッシュなリゾートホテル。最上階にはオーストラリア直輸入の白砂を敷き詰めた「ソラノビーチBooks＆Cafe」があり、素足で海風を感じながらドリンクや読書を楽しめます。樹齢300年のクスノキに造られた「森の空中基地くすくす」でのツリーハウス体験やアスレチック、相模湾の花火大会を望む大浴場半露天風呂も格別。夕食は熱海名物の花火をモチーフにしたデザイン空間で、旬の魚介と伊豆の味覚が詰まった豪華ビュッフェを心ゆくまで味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              熱海の山上より、相模湾と夜景を一望できるお部屋。スタイリッシュなリゾートで多様な滞在スタイルを
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “食事もアクティビティも最高、子連れに最適バイキングの食事がどれもおいしくホテルアクティビティも最高で2日間ホテルだけで楽しく過ごせました。また部屋もとても素敵でした。小さい子ども赤ちゃん連れにもと…　2026-09-05 18:05:45投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D136112%26f_flg%3DPLAN"
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
            リゾナーレ那須
          </h2>
          <p className="text-xs md:text-sm text-amber-100">栃木県那須町・日本初のアグリツーリズモリゾート！那須の森と畑で土に触れる休日＆洗練イタリアン</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 栃木県那須郡那須町高久乙道下2301</div>
            <div><strong>アクセス:</strong> 那須塩原駅よりお車にて約４０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.46</span> (165件)</div>
            <div><strong>参考価格:</strong> 1名あたり約19,140円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">那須連山の裾野、約4万2千坪の広大な森の中に佇む、自然と農の営みに触れる日本初のアグリツーリズモリゾート。施設内の農園「アグリガーデン」では野菜の種まきや収穫を体験でき、子どもたちの食育や自然体験に最適。客室は天然木をふんだんに使った心地よいヴィラやレジデンスが点在し、森の静寂に包まれます。夕食はメインダイニング「OTTO SETTE NASU」にて、その日の朝に収穫された新鮮野菜や那須のブランド肉をふんだんに使った芸術的なイタリアンをソムリエ厳選ワインとともに楽しめます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              那���の自然豊かな敷地で地域の風景に親しみふれあいながら暮らすように過ごすアグリツーリズモリゾート
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “自然の中で子供と楽しめたが、車がないと不便施設内は自然がいっぱいで、子供にも色々な昆虫や植物を見せてあげられたのが、とても良かった。また、小さいながらも、遊び場があったり絵本があったり、ピザや…　2026-08-08 10:02:50投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D177663%26f_flg%3DPLAN"
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
              <p className="text-xs md:text-sm text-gray-600">訪れたいホテルのある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <span>星野リゾートやカニ料理のハイシーズンでも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、ゴールデンウィークや年末年始、カニ解禁シーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-indoor-pool-kids-family-resort-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【一年中泳げる室内温水プール宿×ふるさと納税】那須・草津・別府リゾート
          </Link>
          <Link
            href="/furusato-tax-welcome-baby-family-kids-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【ウェルカムベビーのお宿認定×ふるさと納税】赤ちゃん・幼児連れ安心名宿
          </Link>
          <Link
            href="/furusato-tax-tokyo-disney-resort-official-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【東京ディズニーリゾート公式ホテル×ふるさと納税】舞浜直結オフィシャル
          </Link>
          <Link
            href="/furusato-tax-all-inclusive-free-drinks-alcohol-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【お酒飲み放題オールインクルーシブ宿×ふるさと納税】贅沢ラウンジステイ
          </Link>
        </div>
      </section>
    </article>
  );
}
