import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '赤々と燃える炭火と香ばしい煙！囲炉裏料理＆歴史ある古民家名湯宿×ふるさと納税完全ガイド【2026年最新】白川郷・群馬法師・徳島祖谷',
  description: 'パチパチとはぜる炭の音、串に刺した川魚の塩焼きと香ばしい地鶏・特選牛の炭火焼き！世界遺産白川郷の玄関口に佇む合掌造りの宿「御宿 結の庄」、足元湧出の奇跡の温泉と囲炉裏の風情が残る国登録有形文化財「法師温泉 長寿館」、日本三大秘境の渓谷断崖に建ち囲炉裏炭火会席とケーブルカーで行く谷底露天風呂を誇る「和の宿 ホテル祖谷温泉」。日本の原風景に抱かれ温もりに浸る至福の囲炉裏ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '囲炉裏料理＆古民家名湯宿特集',
    '楽天ふるさと納税 トラベル',
    '御宿　結の庄（共立リゾート）',
    '法師温泉　長寿館',
    '和の宿　ホテル祖谷温泉',
    '高級温泉旅館',
    '露天風呂付き客室',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-traditional-hearth-irori-charcoal-stay/',
  },
  openGraph: {
    title: '赤々と燃える炭火と香ばしい煙！囲炉裏料理＆歴史ある古民家名湯宿×ふるさと納税完全ガイド【2026年最新】白川郷・群馬法師・徳島祖谷',
    description: 'パチパチとはぜる炭の音、串に刺した川魚の塩焼きと香ばしい地鶏・特選牛の炭火焼き！世界遺産白川郷の玄関口に佇む合掌造りの宿「御宿 結の庄」、足元湧出の奇跡の温泉と囲炉裏の風情が残る国登録有形文化財「法師温泉 長寿館」、日本三大秘境の渓谷断崖に建ち囲炉裏炭火会席とケーブルカーで行く谷底露天風呂を誇る「和の宿 ホテル祖谷温泉」。日本の原風景に抱かれ温もりに浸る至福の囲炉裏ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-traditional-hearth-irori-charcoal-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoTraditionalHearthIroriStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">囲炉裏料理＆古民家名湯宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          全国屈指の囲炉裏炭火料理＆古民家名宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          赤々と燃える炭火と香ばしい煙！囲炉裏料理＆歴史ある古民家名湯宿×ふるさと納税完全ガイド【2026年最新】白川郷・群馬法師・徳島祖谷
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
          じっくりと炙られる岩魚と郷土牛。赤々と灯る囲炉裏の火を囲み、懐かしき日本の温もりに帰る旅
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          現代の慌ただしい日常から離れ、どこか懐かしく温かい日本の原風景へと誘ってくれる「囲炉裏（いろり）のある温泉旅館」。自在鉤から吊るされた鉄瓶、赤々と燃える炭火の柔らかな遠赤外線、香ばしい煙の匂い、そしてパチッと小さくはぜる炭の音——。囲炉裏を囲んで過ごす時間は、人と人との距離を自然と縮め、忘れかけていた心のゆとりを取り戻させてくれます。炭火でじっくりと時間をかけて焼き上げる川魚の塩焼きは外はパリッと中は驚くほどふっくら。郷土のブランド牛や地野菜、焼きたての五平餅や朴葉味噌の香ばしさは、ガスや電気の調理では絶対に再現できない極上のごちそうです。本特集では、世界遺産・白川郷の合掌造り文化をモダンに昇華し、囲炉裏ラウンジと飛騨牛炭火焼き会席が絶賛される「御宿 結の庄」、明治8年築の国登録有形文化財の木造建築と囲炉裏のある本館、そして足元から自噴する奇跡の「法師乃湯」を誇る「法師温泉 長寿館」、そして日本三大秘境・祖谷渓の断崖に佇み、専用ケーブルカーで降りる谷底露天風呂と囲炉裏鮎塩焼き・祖谷そばを味わう「和の宿 ホテル祖谷温泉」の3宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で心に灯がともる囲炉裏温泉旅に出かけましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">囲炉裏料理＆古民家名湯宿特集が旅人を惹きつけてやまない3つの魅力</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】御宿　結の庄（共立リゾート）</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】法師温泉　長寿館</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】和の宿　ホテル祖谷温泉</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 囲炉裏料理＆古民家名湯宿特集が旅人を惹きつけてやまない3つの魅力
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">遠赤外線で旨味を凝縮！炭火でじっくり焼き上げる川魚・ブランド牛・郷土味噌</h3>
            <p className="text-sm text-gray-600 leading-relaxed">囲炉裏の炭火は表面をカリッと香ばしく、内側をジューシーにふっくら焼き上げる魔法の熱源。鮎や岩魚の串焼き、飛騨牛や阿波牛、朴葉味噌やジビエなど、極上の炭火料理をご堪能いただけます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">太い梁と格子戸が醸し出す重厚美！文化財建築や合掌造りの趣ある空間</h3>
            <p className="text-sm text-gray-600 leading-relaxed">何代にもわたって受け継がれてきた黒光りする太い大黒柱や萱葺き屋根、障子越しの柔らかな光。古民家ならではの風情と現代の快適な寝具が融合し、極上の安らぎをもたらします。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">足元湧出泉や秘境の谷底露天風呂！大自然のパワーを肌で感じる名湯</h3>
            <p className="text-sm text-gray-600 leading-relaxed">浴槽の底の砂利の間から自噴する奇跡の純生温泉や、渓谷の底深くへケーブルカーで降りて浸かる清流露天風呂など、温泉そのものの泉質とロケーションも全国最高峰レベルです。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            御宿　結の庄（共立リゾート）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">岐阜県白川村・世界遺産「白川郷」の玄関口！合掌造りを模した大屋根と囲炉裏ラウンジ、贅を尽くした飛騨牛会席</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 岐阜県大野郡白川村飯島908-2</div>
            <div><strong>アクセス:</strong> ＪＲ　高山駅よりお車にて約５０分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.4</span> (738件)</div>
            <div><strong>参考価格:</strong> 1名あたり約15,200円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">世界遺産・白川郷の合掌造り集落へと続く庄川のほとりに佇む共立リゾートの名宿。日本の伝統美と現代リゾートの快適性が融合し、館内に入ると吹き抜けの囲炉裏ラウンジが出迎えてくれます。夕暮れ時には囲炉裏でお団子や甘酒の振る舞いがあり、旅情を盛り上げます。客室は全館畳敷きで和モダンローベッドを配した寛ぎ設計。天然温泉の大浴場や趣の異なる2つの無料貸切風呂で湯浴みを楽しんだ後は、メインダイニングで特選飛騨牛の炭火焼きやすき焼き、山菜や川魚を取り入れた豪華会席料理を満喫できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              世界遺産 白川郷の玄関口に人と人とを結ぶ“結”の心をコンセプトにした歴史と趣の薫る宿「御宿 結の庄」
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “アイスと乳酸飲料が・チェックインしてロビーで外履きを預け、館内は素足(靴下)で過ごす。畳の感触は良いが、やはり共有スペースではスリッパを履きたいかも。自分達は終始靴下を履いていたが、素足の人が歩き…　2026-09-05 16:21:05投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D168686%26f_flg%3DPLAN"
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
            法師温泉　長寿館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">群馬県みなかみ町・国登録有形文化財第1号！明治時代の囲炉裏本館と足元湧出の奇跡の湯「法師乃湯」</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 群馬県利根郡みなかみ町永井650</div>
            <div><strong>アクセス:</strong> 上越新幹線　上毛高原駅より猿ヶ京乗り換え法師温泉行きバスで５０分／関越自動車道　月夜野ＩＣより２５ｋｍ（約４０分）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.4</span> (507件)</div>
            <div><strong>参考価格:</strong> 1名あたり約19,800円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">三国峠のふもと、上信越高原国立公園の原生林に抱かれた一軒宿。明治8年築の鹿鳴館風洋風建築を取り入れた木造湯屋「法師乃湯」は、浴槽の底に敷き詰められた玉石の間からポコポコと純度100%の源泉が自然自噴する日本屈指の文化財温泉。客室本館には昔ながらの重厚な囲炉裏の間があり、炭火の温もりと静寂が訪れる人を包み込みます。夕食にはみなかみの清らかな雪解け水で育った川魚の塩焼きや、上州牛・上州麦豚、地場産きのこや山菜をふんだんに盛り込んだ素朴で滋味あふれる里山料理を味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ≪国登録有形文化財≫敷き詰められた玉石の間から湧き上がる純度100％の源泉かけ流し温泉
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “タイムスリップしたような空間と川のせせらぎ100年前にタイムスリップしたような古き良き旅館。空いていたのかトイレ付きにグレードアップしてくれました。あたりの柔らかい湯に、せせらぎの音(前は…　2026-08-29 17:02:01投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D39211%26f_flg%3DPLAN"
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
            和の宿　ホテル祖谷温泉
          </h2>
          <p className="text-xs md:text-sm text-amber-100">徳島県三好市・日本三大秘境「祖谷渓」の断崖絶壁！ケーブルカーで行く谷底露天風呂と囲炉裏炭火鮎会席</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 徳島県三好市池田町松尾松本367-28</div>
            <div><strong>アクセス:</strong> 井川池田ＩＣより約２５km（国道３２号線経由）／ＪＲ大歩危駅下車　四国交通バスで約30分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.64</span> (566件)</div>
            <div><strong>参考価格:</strong> 1名あたり約22,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">四国山地の奥深く、切り立った祖谷渓谷の断崖絶壁にせり出すように建つ隠れ家温泉旅館。宿から傾斜角42度の専用ケーブルカーに乗り、約170m下の谷底へ5分間かけて降りていく露天風呂「渓谷の湯」は、エメラルドグリーンの祖谷川の激流を目前にする感動の絶景湯。湯上がりの夕食では、囲炉裏の炭火でじっくりと焼き上げられた鮎の塩焼きや、祖谷名物の岩豆腐「でこまわし」、祖谷そば、阿波牛の炭火焼きを堪能でき、秘境ならではの贅沢と温もりに心酔できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ケーブルカーで行く谷底の源泉掛け流しの露天風呂
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “階段を上り下りしてでも入りたい露天風呂山に包まれた、秘境感溢れる立地に、そして、谷底にある川のせせらぎを聞きながら浸かる風情溢れる露天風呂、本当に非日常を思う存分楽しめ、至福の時が過ごせました。…　2026-09-04 21:51:03投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D13663%26f_flg%3DPLAN"
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
            href="/furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿
          </Link>
          <Link
            href="/furusato-tax-secret-hot-spring-secluded-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【秘湯を守る会・ランプの宿×ふるさと納税】山奥の隠れ家温泉リトリート
          </Link>
          <Link
            href="/furusato-tax-local-brand-wagyu-beef-gourmet-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【ブランド和牛食べ比べ温泉宿×ふるさと納税】飛騨牛・米沢牛・阿波牛
          </Link>
          <Link
            href="/furusato-tax-fire-fireplace-woodstove-autumn-winter-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【暖炉・薪ストーブのある極上リゾート×ふるさと納税】揺らぐ炎と冬の温泉
          </Link>
        </div>
      </section>
    </article>
  );
}
