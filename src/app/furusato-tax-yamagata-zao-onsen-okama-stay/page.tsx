import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'エメラルドの火口湖「御釜」と冬の樹氷スノーモンスター！山形蔵王温泉の乳白色強酸性硫黄泉＆極上山形牛名門宿×ふるさと納税完全攻略ガイド【2026年最新】蔵王国際・四季のホテル・高見屋',
  description: '開湯千九百年を誇る東北屈指の名湯・山形蔵王温泉！神秘の火口湖「御釜」と大迫力のスノーモンスター（樹氷）。「蔵王国際ホテル」「蔵王四季のホテル」「深山荘 高見屋」を、山形県山形市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。丸太造り八右衛門の湯、乳白色のにごり湯露天風呂、極上山形牛会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '山形蔵王温泉 樹氷＆にごり湯名宿特集',
    '楽天ふるさと納税 トラベル',
    '蔵王温泉　蔵王国際ホテル',
    '蔵王温泉　蔵王四季のホテル',
    '深山荘　高見屋',
    '高級温泉旅館',
    '絶景露天風呂',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-yamagata-zao-onsen-okama-stay',
  },
  openGraph: {
    title: 'エメラルドの火口湖「御釜」と冬の樹氷スノーモンスター！山形蔵王温泉の乳白色強酸性硫黄泉＆極上山形牛名門宿×ふるさと納税完全攻略ガイド【2026年最新】蔵王国際・四季のホテル・高見屋',
    description: '開湯千九百年を誇る東北屈指の名湯・山形蔵王温泉！神秘の火口湖「御釜」と大迫力のスノーモンスター（樹氷）。「蔵王国際ホテル」「蔵王四季のホテル」「深山荘 高見屋」を、山形県山形市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。丸太造り八右衛門の湯、乳白色のにごり湯露天風呂、極上山形牛会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-yamagata-zao-onsen-okama-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoZaoOnsenOkamaStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">山形蔵王温泉 樹氷＆にごり湯名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          神秘の御釜と乳白色の強酸性硫黄泉！山形県蔵王温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          エメラルドの火口湖「御釜」と冬の樹氷スノーモンスター！山形蔵王温泉の乳白色強酸性硫黄泉＆極上山形牛名門宿×ふるさと納税完全攻略ガイド【2026年最新】蔵王国際・四季のホテル・高見屋
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
          エメラルドグリーンに輝く御釜、冬を彩る巨大な樹氷。日本屈指の強酸性美肌にごり湯に包まれる山形蔵王の旅へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          山形県と宮城県にまたがる雄峰・蔵王連峰の山腹に位置し、西暦110年（日本武尊の東征の折）に開湯したと伝わる東北最古級の名湯「山形・蔵王温泉（ざおうおんせん）」。エメラルドグリーンの湖水が神秘的な表情を見せる火口湖「御釜（おかま）」をはじめ、冬に針葉樹アオモリトドマツが氷と雪に覆われて巨大化する世界的な奇観「スノーモンスター（樹氷）」、そして標高の高い高原ならではの高山植物や大パノラマの雲海など、息を呑む大自然が広がります。蔵王温泉の代名詞は、日本屈指の強酸性（pH1.5〜2.0前後）を誇る乳白色の「天然硫黄泉」。「皮膚を強くし、肌を白く滑らかにする美人づくりの湯」として全国に名を轟かせ、湯船を満たす白濁した濃厚なお湯と立ちのぼる硫黄の香りは、まさに本物の温泉地ならではの醍醐味です。宿の木造露天風呂に身を沈めれば、高原の澄んだ空気とともに日頃の疲れが完全に消え去ります。さらに山形の食文化は全国トップクラス。厳しい寒暖差が育んだ極上の黒毛和牛「山形牛」のステーキやすき焼き、山形名物の芋煮鍋、山菜やキノコ、つや姫のご飯など、里山の豊かな実りを盛り込んだ贅沢な会席料理が旅人の舌を魅了します。本特集では、総木造り丸太梁の圧巻の大浴場「八右衛門の湯」と口コミ4.7超を誇る「蔵王国際ホテル」、百松河原に佇む風流な離れ湯「白金の湯」が人気の「蔵王四季のホテル」、そして創業三百年・純和風木造数寄屋造りの風格と自家源泉かけ流しを誇る「深山荘 高見屋」の3宿を厳選。山形県山形市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの蔵王温泉ステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">山形蔵王温泉 樹氷＆にごり湯名宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】蔵王温泉　蔵王国際ホテル</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】蔵王温泉　蔵王四季のホテル</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】深山荘　高見屋</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 山形蔵王温泉 樹氷＆にごり湯名宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">日本屈指の強酸性・乳白色のにごり湯！「美肌づくりの湯」を100％源泉掛け流しで</h3>
            <p className="text-sm text-gray-600 leading-relaxed">pH1台の濃厚な硫黄泉が古い角質を洗い流し肌をすべすべに。木造の風情ある露天風呂で本物の名湯を堪能できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">世界的な絶景「スノーモンスター（樹氷）」と神秘のエメラルド火口湖「御釜」</h3>
            <p className="text-sm text-gray-600 leading-relaxed">ロープウェイから見下ろす大迫力の樹氷や、蔵王エコーラインを抜けて出会う御釜。四季を通じて感動的な絶景が待っています。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">山形市ふるさと納税で最大30％OFF！3年間有効クーポンで樹氷・紅葉シーズンに予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">スキー客や観光客で賑わう人気の蔵王温泉もふるさと納税なら実質2,000円。寄付から3年間有効なので、ベストシーズンを賢く確保できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            蔵王温泉　蔵王国際ホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山形県山形市・総木造りの圧巻大浴場「八右衛門の湯」！乳白色100％源泉掛け流し＆口コミ総合4.7点超の最高峰リゾートホテル</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山形県山形市蔵王温泉933</div>
            <div><strong>アクセス:</strong> ●蔵王温泉ＢＴ～無料送迎有※到着時要連絡／●山形駅～無料送迎有※詳細は公式ＨＰをご確認ください（3日前までの予約制）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.7</span> (1545件)</div>
            <div><strong>参考価格:</strong> 1名あたり約13,860円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">蔵王温泉の高台に位置し、伝統的な湯治場の温もりとモダンリゾートの快適さが見事に調和したハイグレードホテル。宿のシンボルは、釘を一本も使わずに組み上げられた丸太梁の総木造り大浴場「八右衛門の湯」。高い天井からやわらかな光が差し込み、乳白色の源泉掛け流し温泉が贅沢に溢れ出します。足湯や石造りの露天風呂、貸切風呂も完備。客室は広々とした和洋室やベッド付き和室が揃います。夕食はきめ細やかな霜降りが美しい「極上山形牛」の鉄板焼きステーキや山形名物の芋煮、旬の地場食材をふんだんに盛り込んだ本格和食会席膳で、味覚・温泉・施設すべてにおいて東北屈指の満足度を誇ります。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ◆2018年雪見露天風呂ランキング全国1位！2016年年間人気温泉宿ランキング♪全国2位！◆
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “母も安心の設備と温泉、食事に大満足初めての蔵王温泉、高齢の母と宿泊しました。すてきなお部屋、かつ手すりなどもあり母も動きやすそうでした。お食事は少なめプランでも十分満足でき、朝夕共に地元のお料理や…　2026-09-03 11:56:29投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5723%26f_flg%3DPLAN"
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
            蔵王温泉　蔵王四季のホテル
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山形県山形市・白樺と百松河原に佇む風流な離れ湯「白金の湯」！乳白色にごり湯露天風呂＆山形牛ステーキ会席（四季のホテル）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山形県山形市蔵王温泉1272</div>
            <div><strong>アクセス:</strong> ●蔵王温泉ターミナルからホテルまで送迎有り※ご到着時お電話ください／●山形駅～ホテル間の無料送迎有り※3日前までの予約制</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.76</span> (1621件)</div>
            <div><strong>参考価格:</strong> 1名あたり約12,540円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">蔵王連峰の自然に囲まれた静かな森のほとりに佇む、温かなおもてなしが評判の温泉リゾートホテル。宿最大の魅力は、館内から専用の木造通路を歩いて向かう離れ湯「離れ湯 百松の湯（白金の湯）」。白樺の木々と川のせせらぎに包まれた露天風呂には、白濁した濃厚な強酸性硫黄泉が注がれ、森林浴と湯浴みが一体となった贅沢な時間が流れます。館内大浴場では肌に優しい弱アルカリ性の湯も楽しめ、2つの異なる泉質を満喫可能。夕食は山形牛の陶板焼きステーキや季節の山菜・きのこ、山形県産ブランド米「つや姫」を取り入れた色彩豊かな会席料理で、心温まる滞在を叶えてくれます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              閑静な森林と湖畔に建つ、風光明媚なオシャレなホテル。◇全館でWi－Fiをご利用いただけます！◇
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “量より質の夕食と親切なスタッフに大満足今回量より質の夕食プランでお願いしました。程よく適量なお食事は、男性でも満足のいくボリュームと豪華さで大満足です。スタッフの皆様もとても親切で、居…　2026-09-05 19:39:14投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D16423%26f_flg%3DPLAN"
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
            深山荘　高見屋
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山形県山形市・創業三百年、蔵王温泉街の最高峰老舗！歴史ある木造数寄屋造り建築＆七つの趣異なる源泉風呂（深山荘 高見屋）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山形県山形市蔵王温泉54</div>
            <div><strong>アクセス:</strong> ＪＲ　山形駅よりバスで４０分／山形自動車道　山形蔵王ＩＣから車で約１３ＫＭ、東北中央自動車道　山形上山ＩＣから１１ｋｍ</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.57</span> (705件)</div>
            <div><strong>参考価格:</strong> 1名あたり約21,780円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">江戸時代享保元年（1716年）創業、蔵王温泉で最も古い歴史と格式を誇る純和風木造旅館。温泉街の上高湯の高台に佇み、幾重にも連なる階段や回廊、宮大工の技が息づく数寄屋造りの客室は、大人の隠れ家のような圧倒的な風格を醸し出します。館内には木造の「せせらぎの湯」「石造りの露天風呂」など七つの趣異なる湯船があり、創業以来湧き続ける自家源泉を完全掛け流しで堪能。夕食は個室食事処にて、料理長が腕を振るう最高級山形牛のすき焼きやしゃぶしゃぶ、山形の旬の山の恵みを美しく盛り込んだ料亭懐石料理で、本物の歴史と静寂に浸る至高のステイを提供します。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ～名湯一門　高見屋～創業300年の歴史を誇る老舗旅館。純和風建築に滞在する非日常の時間。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/38534?reviewId=33123479254140　2026-09-04 21:22:48投稿”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D38534%26f_flg%3DPLAN"
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
            href="/furusato-tax-ginzan-onsen-taisho-romantic-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【銀山温泉 大正ロマン＆雪見露天宿×ふるさと納税】能登屋・銀山荘・古勢起屋
          </Link>
          <Link
            href="/furusato-tax-kurokawa-onsen-yumeguri-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【黒川温泉 入湯手形＆渓流露天風呂宿×ふるさと納税】山みず木・奥の湯・新明館
          </Link>
          <Link
            href="/furusato-tax-kinugawa-nikko-world-heritage-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【日光東照宮＆奥日光乳白色硫黄泉×ふるさと納税】千姫物語・日光金谷・四季彩
          </Link>
          <Link
            href="/furusato-tax-three-great-wagyu-beef-gourmet-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【日本三大和牛・神戸牛＆松阪牛×ふるさと納税】最高峰ステーキ名宿
          </Link>
        </div>
      </section>
    </article>
  );
}
