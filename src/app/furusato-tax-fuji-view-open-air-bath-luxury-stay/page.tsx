import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '霊峰富士の絶景を湯船から一望！富士山＆河口湖ビュー露天風呂名門宿×ふるさと納税完全攻略ガイド【2026年最新】鐘山苑・うぶや・湖南荘',
  description: '世界遺産・富士山の圧倒的な美しさを露天風呂から眼前に見渡す感動体験！「庭園と感動の宿 富士山温泉 ホテル鐘山苑」「河口湖温泉 うぶや」「富士河口湖温泉 湖南荘」を、山梨県富士吉田市・富士河口湖町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。三段構造の深湯露天風呂、全室富士山ビュー、屋上展望足湯を堪能。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 ホテル',
    '富士山ビュー絶景露天風呂宿特集',
    '楽天ふるさと納税 トラベル',
    '庭園と感動の宿　富士山温泉　ホテル鐘山苑',
    '河口湖温泉　うぶや',
    '富士河口湖温泉　湖南荘',
    '露天風呂付き客室',
    'オーシャンビュー',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-fuji-view-open-air-bath-luxury-stay/',
  },
  openGraph: {
    title: '霊峰富士の絶景を湯船から一望！富士山＆河口湖ビュー露天風呂名門宿×ふるさと納税完全攻略ガイド【2026年最新】鐘山苑・うぶや・湖南荘',
    description: '世界遺産・富士山の圧倒的な美しさを露天風呂から眼前に見渡す感動体験！「庭園と感動の宿 富士山温泉 ホテル鐘山苑」「河口湖温泉 うぶや」「富士河口湖温泉 湖南荘」を、山梨県富士吉田市・富士河口湖町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。三段構造の深湯露天風呂、全室富士山ビュー、屋上展望足湯を堪能。',
    url: 'https://croud-travel.pages.dev/furusato-tax-fuji-view-open-air-bath-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoFujiViewOpenAirBathStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">富士山ビュー絶景露天風呂宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          日本の象徴！富士山ビュー露天風呂宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          霊峰富士の絶景を湯船から一望！富士山＆河口湖ビュー露天風呂名門宿×ふるさと納税完全攻略ガイド【2026年最新】鐘山苑・うぶや・湖南荘
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
          青空にそびえる白雪の富士、夕暮れに赤く染まる赤富士。湯船に身を委ねて霊峰と対話する、至福の感動ステイへ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          日本人にとって永遠の憧れであり、世界遺産としても世界中から旅人が集まる「富士山」。朝日に輝く神々しい姿、湖面に逆さ富士を映し出す静寂の朝、夕暮れのグラデーションに浮かび上がる壮麗な稜線——。客室のテラスや湯けむり立ちのぼる露天風呂から、誰にも邪魔されずに富士山の雄姿を真正面に眺める贅沢は、日本の温泉文化が誇る最高の体験です。高アルカリ性の天然温泉がもたらす美肌効果、富士の伏流水が育んだ甲州ワインや甲州牛、新鮮な高原野菜をいただく極上ディナーが、特別な旅をさらに色鮮やかに彩ります。本特集では、二万五千坪の大日本庭園と深さ90cmの三段露天風呂「露天風呂 富士山」から富士山を一望し、おもてなしの感動宿として全国屈指の評価を誇る「庭園と感動の宿 ホテル鐘山苑」、河口湖の産屋ヶ崎に位置し全客室と大浴場から「富士山と湖」の完璧なパノラマを望む「河口湖温泉 うぶや」、そして屋上に富士山を一望する足湯カフェや客室露天風呂を備えた和風名旅館「富士河口湖温泉 湖南荘」の3大名宿を厳選。富士吉田市・富士河口湖町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で富士山ビュー温泉旅を予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">富士山ビュー絶景露天風呂宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】庭園と感動の宿　富士山温泉　ホテル鐘山苑</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】河口湖温泉　うぶや</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】富士河口湖温泉　湖南荘</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 富士山ビュー絶景露天風呂宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">遮るもののない大迫力の富士山パノラマ！露天風呂から望む霊峰の圧倒的絶景</h3>
            <p className="text-sm text-gray-600 leading-relaxed">湯船に肩まで浸かりながら、目の前に広がる富士山の稜線。早朝の澄み切った空気の中で眺める紅富士や冠雪の姿は、一生忘れられない感動を刻みます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">富士山温泉の豊かな恵み！pHの高い高アルカリ性美肌泉と名水が育む甲州グルメ</h3>
            <p className="text-sm text-gray-600 leading-relaxed">富士の裾野から湧き出る良質な天然温泉で湯上がり肌はつるつるに。夕食には特選甲州牛ステーキや富士桜ポーク、旬の川魚を活かした贅沢会席を満喫できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">ふるさと納税で宿泊費を最大30％OFF！3年間有効クーポンで記念日や還暦祝に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">「人生で一度は泊まりたい富士山ビュー宿」もふるさと納税なら実質負担2,000円。有効期限3年間で、両親への親孝行や還暦祝い、結婚記念日の旅行に大活躍します。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            庭園と感動の宿　富士山温泉　ホテル鐘山苑
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山梨県富士吉田市・二万五千坪の大庭園！深さ90cm三段構造の天空露天風呂「露天風呂 富士山」とおもてなしの最高峰</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山梨県富士吉田市上吉田東9-1-18</div>
            <div><strong>アクセス:</strong> 富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.71</span> (1127件)</div>
            <div><strong>参考価格:</strong> 1名あたり約22,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">二万五千坪にも及ぶ広大な日本庭園を有し、プロが選ぶ日本のホテル・旅館100選で常に上位に選ばれ続ける全国屈指の名門旅館。最上階の屋上に設けられた「露天風呂 富士山」は、深さ90cmの深湯を含む三段構造となっており、湯船に浸かると目の前に広がる裾野までの富士山と遮るものなく対峙できます。毎夕、庭園の茶室で抹茶の振る舞いが行われ、夜には名物の霊峰太鼓ショーが響き渡るなど滞在の感動演出が満載。夕食は山梨の味覚を贅沢に盛り込んだ季節の創作会席を料理人の細やかな気配りとともに堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              富士山の見える絶景露天風呂！【２０２４年プロが選んだ旅館１００選・全国総合８位】
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “家族全員が大満足、また季節を変えて訪れたい「素晴らしい」の一言です。私ら夫婦、16歳と10歳の子供、83歳の父を連れての旅行に利用させていただきました。お部屋、庭園、お風呂、食事、太鼓のア…　2026-09-04 09:40:01投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D19206%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
            河口湖温泉　うぶや
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山梨県富士河口湖町・全客室＆全露天風呂から富士山と河口湖を一望！「人生を祝う」おもてなしの感動宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山梨県南都留郡富士河口湖町浅川10</div>
            <div><strong>アクセス:</strong> 車：中央自動車道富士吉田線河口湖ＩＣより１０分。 　電車、バス：富士急行河口湖駅より送迎アリ(詳細問合せ下さい)。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.26</span> (725件)</div>
            <div><strong>参考価格:</strong> 1名あたり約34,100円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">河口湖の北岸・産屋ヶ崎に建ち、すべての客室と温泉大浴場から遮るものなく「富士山と河口湖」の絵画のような絶景を一望できる人気温泉旅館。「人生を祝う宿」をコンセプトに掲げ、誕生日や結婚記念日、還暦や喜寿の長寿祝いなど、家族の特別なアニバーサリーを感動的に演出してくれます。館内の大浴場や露天風呂、寝湯、座湯からも雄大な富士山が広がり、波のない穏やかな朝には湖面に映る美しい「逆さ富士」に出会えることも。夕食は甲州牛のステーキやしゃぶしゃぶをメインにした極上会席をお祝いムードとともに味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              コンセプトは「人生を祝う」。大切な記念日に富士山を眺めながらゆっくり休み、家族みんなでお祝い下さい。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “食事も美味しく、お部屋もとても綺麗!ご飯もとても美味しく、お部屋もとても綺麗でした!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…　2026-09-01 21:06:49投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D8053%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
            富士河口湖温泉　湖南荘
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山梨県富士河口湖町・屋上に富士山を望む展望足湯！天然温泉客室露天風呂と純和風のおもてなしが評判の名宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山梨県南都留郡富士河口湖町船津4020</div>
            <div><strong>アクセス:</strong> 私鉄富士急行線　河口湖駅／中央自動車道　河口湖ＩＣより約４ｋｍ</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.8</span> (1824件)</div>
            <div><strong>参考価格:</strong> 1名あたり約27,500円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">河口湖畔の船津浜近くに位置し、純和風の落ち着いた情緒と充実した温泉施設で口コミ総合4.8を誇る大人気旅館。宿の屋上には360度パノラマの「展望足湯フットスパ」があり、富士山から吹き抜ける心地よい風を感じながら温かい足湯に浸かれます。露天風呂付き客室も多数揃い、プライベートな空間で富士の眺望と良質な河口湖温泉を独占可能。夕食は旬の厳選素材を活かした本格的な和食会席料理がお部屋食または個室料亭で振る舞われ、きめ細やかな仲居さんの接客と相まって心地よい安らぎの時間を過ごせます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              富士山が見える大浴場＆展望足湯。富士山側と河口湖側の露天風呂付や豊富な部屋タイプ。ご夕食はお部屋で。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “お部屋からの眺めもお料理も最高でした。家族全員が大絶賛です。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D31111%26f_flg%3DPLAN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏨</span>
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
              <span>花火大会や京都の紅葉・桜シーズンでも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、花火開催日や桜・紅葉のピークシーズンでも除外日なくクーポンをご利用いただけます。
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
            href="/furusato-tax-open-air-bath-spectacular-view-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【絶景露天風呂名門宿×ふるさと納税】大パノラマと至高の温泉体験
          </Link>
          <Link
            href="/furusato-tax-lakeview-onsen-resort-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【絶景レイクビュー温泉リゾート×ふるさと納税】琵琶湖・洞爺湖・箱根芦ノ湖
          </Link>
          <Link
            href="/furusato-tax-hakone-onsen-open-air-bath-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【箱根湯本名湯温泉＆大露天風呂宿×ふるさと納税】ロマンスカー直通名宿
          </Link>
          <Link
            href="/furusato-tax-atami-ocean-view-fireworks-hotel-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【熱海花火大会＆オーシャンビューホテル×ふるさと納税】特等席鑑賞
          </Link>
        </div>
      </section>
    </article>
  );
}
