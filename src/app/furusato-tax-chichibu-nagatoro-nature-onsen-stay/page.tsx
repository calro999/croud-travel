import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '名勝岩畳と長瀞ライン下り！秩父・長瀞の横瀬川清流望む露天風呂＆創業190年美肌鉱泉・郷土会席名宿×ふるさと納税完全攻略ガイド【2026年最新】和どう・新木鉱泉・長生館',
  description: '都心から特急で約80分の小旅行！名勝「長瀞岩畳」と秩父三社巡り。「和銅鉱泉 ゆの宿 和どう」「秩父七湯 新木鉱泉旅館」「長瀞温泉 花のおもてなし 長生館」を、埼玉県秩父市・長瀞町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。和同開珎ゆかりの薬師の湯、創業百九十年卵水、名物長瀞流しそうめん・囲炉裏会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '秩父・長瀞 名勝岩畳＆美肌温泉宿特集',
    '楽天ふるさと納税 トラベル',
    '和銅鉱泉　薬師の湯　ゆの宿　和どう',
    '秩父七湯『御代の湯』　新木鉱泉旅館',
    '長瀞温泉　花のおもてなし　長生館',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-chichibu-nagatoro-nature-onsen-stay/',
  },
  openGraph: {
    title: '名勝岩畳と長瀞ライン下り！秩父・長瀞の横瀬川清流望む露天風呂＆創業190年美肌鉱泉・郷土会席名宿×ふるさと納税完全攻略ガイド【2026年最新】和どう・新木鉱泉・長生館',
    description: '都心から特急で約80分の小旅行！名勝「長瀞岩畳」と秩父三社巡り。「和銅鉱泉 ゆの宿 和どう」「秩父七湯 新木鉱泉旅館」「長瀞温泉 花のおもてなし 長生館」を、埼玉県秩父市・長瀞町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。和同開珎ゆかりの薬師の湯、創業百九十年卵水、名物長瀞流しそうめん・囲炉裏会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-chichibu-nagatoro-nature-onsen-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoChichibuNagatoroStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">秩父・長瀞 名勝岩畳＆美肌温泉宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          都心から最も近い大自然と清流！埼玉県秩父・長瀞特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          名勝岩畳と長瀞ライン下り！秩父・長瀞の横瀬川清流望む露天風呂＆創業190年美肌鉱泉・郷土会席名宿×ふるさと納税完全攻略ガイド【2026年最新】和どう・新木鉱泉・長生館
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
          荒川の清流、天然記念物「岩畳」の迫力、秩父の山々に抱かれる静寂。都心から約80分で出会える秩父・長瀞の癒やし旅へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          池袋駅から西武特急ラビューでわずか約77分、都心から最も近い本格的な大自然郷「埼玉県・秩父（ちちぶ）・長瀞（ながとろ）」。国指定の名勝・天然記念物である「長瀞岩畳」の雄大な岩壁や、船頭の竿さばきで荒川の急流を下る「長瀞ライン下り」、パワースポットとして名高い「三峯神社」「秩父神社」「宝登山神社」の秩父三社巡りなど、四季折々の絶景と歴史文化がぎゅっと凝縮された大人気観光エリアです。秩父・長瀞の宿の魅力は、清らかな川のせせらぎに包まれる絶景露天風呂と、古くから湯治場として愛されてきた良質な温泉・鉱泉。日本通貨発祥の地「和同開珎」ゆかりの「薬師の湯」や、創業百九十余年の歴史を持ち「卵水」と呼ばれるトロトロの美肌鉱泉は、日々の疲れを心地よく解きほぐしてくれます。さらに食の魅力も豊富。清流で育った鮎や岩魚の塩焼き、秩父名物の豚みそ漬け焼き、滋味あふれるきのこ鍋、長瀞名物の天然氷のかき氷や流しそうめんなど、里山の温もりあふれる郷土会席が旅人の心とお腹を満たします。本特集では、日本最古の通貨・和同開珎が発掘された聖地に佇み横瀬川の清流を望む露天風呂が評判の「和銅鉱泉 薬師の湯 ゆの宿 和どう」、江戸時代文政十年創業・トロリとした美肌の湯と囲炉裏料理が愛される「秩父七湯 新木鉱泉旅館」、そして長瀞渓谷と名勝岩畳を客室や庭園から一望できる創業大正四年の老舗「長瀞温泉 花のおもてなし 長生館」の3大名宿を厳選。埼玉県秩父市・長瀞町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で秩父・長瀞の癒やし旅をお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">秩父・長瀞 名勝岩畳＆美肌温泉宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】和銅鉱泉　薬師の湯　ゆの宿　和どう</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】秩父七湯『御代の湯』　新木鉱泉旅館</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】長瀞温泉　花のおもてなし　長生館</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 秩父・長瀞 名勝岩畳＆美肌温泉宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">都心から特急で約80分の好アクセス！長瀞岩畳や荒川の清流を望む絶景ロケーション</h3>
            <p className="text-sm text-gray-600 leading-relaxed">西武特急で気軽にアクセス。川のせせらぎや鳥の声を聞きながら、都心のすぐそばとは思えない豊かな大自然に包まれます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">「卵水」と称されるトロトロ美肌鉱泉と和同開珎ゆかりの名湯「薬師の湯」</h3>
            <p className="text-sm text-gray-600 leading-relaxed">江戸時代から湯治客を癒やしてきた良質な名湯。肌がすべすべになる美肌成分が豊富に含まれ、女性にも大人気です。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">秩父市・長瀞町ふるさと納税で最大30％OFF！3年間有効クーポンで週末や紅葉シーズンに予約</h3>
            <p className="text-sm text-gray-600 leading-relaxed">週末の気軽なリフレッシュ旅もふるさと納税なら実質負担2,000円。寄付から3年間有効なので、春の芝桜や秋の長瀞紅葉に最適です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            和銅鉱泉　薬師の湯　ゆの宿　和どう
          </h2>
          <p className="text-xs md:text-sm text-amber-100">埼玉県秩父市・日本通貨発祥「和同開珎」ゆかりの聖地！横瀬川の清流を望む露天風呂付き客室＆薬師の湯（ゆの宿 和どう）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 埼玉県秩父市黒谷813</div>
            <div><strong>アクセス:</strong> ●お車の場合⇒練馬ICより約70分（関越道「花園ＩＣ」より約３０分）●電車の場合⇒秩父鉄道「和銅黒谷駅」より無料送迎あり</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.53</span> (2966件)</div>
            <div><strong>参考価格:</strong> 1名あたり約5,402円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">日本最古の流通貨幣「和同開珎」が鋳造された和銅採掘露天掘り跡の近く、清流・横瀬川のほとりに佇む和風温泉旅館。古くから近郷の人々が目薬や切り傷の特効薬として親しんできた名湯「薬師の湯」を引き、大浴場や清流を見下ろす露天風呂で横瀬川のせせらぎを聞きながら優雅な湯浴みが楽しめます。露天風呂付き客室も充実しており、カップルやご夫婦に大人気。夕食は秩父の豊かな山の恵みと清流の魚を盛り込んだ季節の会席料理で、秩父牛の陶板焼きや鮎の塩焼きなど、一品一品丁寧に仕上げられた料理を個室やお部屋で堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ３年連続「楽天トラベルアワード」受賞。自家源泉「和銅鉱泉」は、身体がポカポカになると評判です♪
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “ここ数年で一番の満足度、ぜひ再訪したい大変、大変満足できました。関東近県あちこちに泊まっていますが、この料金でこの内容、ここ数年で一番の満足度を味わいました。送迎バスから親切で丁寧。ついて…　2026-09-04 13:07:20投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D6100%26f_flg%3DPLAN"
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
            秩父七湯『御代の湯』　新木鉱泉旅館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">埼玉県秩父市・創業百九十余年、江戸時代文政十年より続く歴史！「卵水」と称されるトロトロ美肌鉱泉と炭火囲炉裏会席（新木鉱泉旅館）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 埼玉県秩父市山田1538番地1</div>
            <div><strong>アクセス:</strong> ◆送迎有◆その他、西武秩父駅よりタクシー10分又は定峰行きバス25分金昌寺下車徒歩4分●関越道花園ICより40分●</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.58</span> (2162件)</div>
            <div><strong>参考価格:</strong> 1名あたり約8,220円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">江戸時代文政10年（1827年）創業、秩父七湯の一つとして約二百年の歴史を刻む老舗鉱泉旅館。宿の最大の誇りは、硫黄分を含みほんのり硫黄の香りが漂う源泉「御代の湯」。肌に触れると驚くほどトロリとしており、地元では古くから「卵水（たまごみず）」と呼ばれ美肌の湯として親しまれてきました。趣ある木造の内湯や露天風呂、貸切風呂で極上の湯触りを満喫。客室は江戸の情緒を残す落ち着いた和室。夕食は囲炉裏を囲んで味わう炭火焼きや、秩父名物の豚みそ漬け、旬の山菜をふんだんに使った田舎会席料理で、温かなおもてなしに心が和みます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              2025楽天トラベルアワード13度目の受賞！民芸調のほのぼの宿！滑らかな卵水と云われる温泉が自慢です
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “露天風呂のお湯は最高、洗い場がないのが残念露天風呂付の部屋に宿泊しました。お湯はとても良く、風呂から出た後は顔も体もスベスベとなり、とても満足しました。ただ洗い場がなかった点は残念でした。…　2026-09-05 14:00:15投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D5828%26f_flg%3DPLAN"
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
            長瀞温泉　花のおもてなし　長生館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">埼玉県長瀞町・国指定名勝「長瀞岩畳」を正面に一望！創業大正四年・元祖流しそうめんと長瀞温泉露天風呂（花のおもてなし 長生館）</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 埼玉県秩父郡長瀞町長瀞449</div>
            <div><strong>アクセス:</strong> 秩父鉄道：長瀞駅から徒歩3分／関越自動車道：花園ＩＣより車で30分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.43</span> (1308件)</div>
            <div><strong>参考価格:</strong> 1名あたり約11,500円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">名勝・天然記念物である長瀞岩畳のすぐ向かい、長瀞渓谷の絶景を独り占めする最高の立地に建つ創業大正四年の老舗旅館。全客室や広大な日本庭園、露天風呂から荒川の清流と対岸のダイナミックな岩畳を一望できます。長瀞温泉を引いた大浴場や露天風呂は開放感抜群で、川風を感じながら心地よい湯浴みが可能。夏には庭園で開催される「元祖流しそうめん」が全国的な人気を誇り、夕食には荒川の天然鮎の塩焼きや秩父牛の朴葉味噌焼きなど、伝統と職人技が光る華やかな和食会席膳を味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              長瀞温泉 創業大正元年 長瀞観光の歴史と共に歩む日本旅館 長瀞渓谷岩畳を望む百年変わらぬ癒やしの眺め
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “家族で大満足、温泉も食事も最高でしたウッドテラス付のお部屋に家族5人で一泊しました。スタッフの方の対応もよく、お部屋も温泉も晩ごはんも最高でした。朝ごはんのできたて豆腐は長男が美味しいとよく食べて…　2026-08-27 12:35:51投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D9485%26f_flg%3DPLAN"
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
            href="/furusato-tax-kinugawa-onsen-valley-view-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【鬼怒川温泉 渓谷美＆名門旅館×ふるさと納税】あさや・金谷ホテル・ホテル三日月
          </Link>
          <Link
            href="/furusato-tax-karuizawa-luxury-resort-villa-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森
          </Link>
          <Link
            href="/furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋
          </Link>
          <Link
            href="/furusato-tax-traditional-hearth-irori-charcoal-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【古民家囲炉裏炭火会席＆奇跡の湯×ふるさと納税】白川郷・法師・祖谷
          </Link>
        </div>
      </section>
    </article>
  );
}
