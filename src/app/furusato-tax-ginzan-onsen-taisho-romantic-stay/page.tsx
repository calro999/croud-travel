import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ガス灯揺らめく大正ロマンの木造楼閣！銀山温泉の川沿い名門旅館＆極上尾花沢牛会席×ふるさと納税完全攻略ガイド【2026年最新】能登屋・銀山荘・古勢起屋',
  description: 'まるで千と千尋の神隠しの世界！ガス灯揺らめく銀山温泉の木造多層建築。「能登屋旅館」「仙峡の宿 銀山荘」「古勢起屋別館」を、山形県尾花沢市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。国登録有形文化財、川沿い展望露天寝湯、極上の霜降り尾花沢牛会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '銀山温泉 大正ロマン宿特集',
    '楽天ふるさと納税 トラベル',
    '銀山温泉　能登屋旅館',
    '銀山温泉　仙峡の宿　銀山荘',
    '銀山温泉　古勢起屋別館',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-ginzan-onsen-taisho-romantic-stay/',
  },
  openGraph: {
    title: 'ガス灯揺らめく大正ロマンの木造楼閣！銀山温泉の川沿い名門旅館＆極上尾花沢牛会席×ふるさと納税完全攻略ガイド【2026年最新】能登屋・銀山荘・古勢起屋',
    description: 'まるで千と千尋の神隠しの世界！ガス灯揺らめく銀山温泉の木造多層建築。「能登屋旅館」「仙峡の宿 銀山荘」「古勢起屋別館」を、山形県尾花沢市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。国登録有形文化財、川沿い展望露天寝湯、極上の霜降り尾花沢牛会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-ginzan-onsen-taisho-romantic-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoGinzanOnsenRomanticStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">銀山温泉 大正ロマン宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          雪景色とガス灯の大正ロマン！山形県銀山温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          ガス灯揺らめく大正ロマンの木造楼閣！銀山温泉の川沿い名門旅館＆極上尾花沢牛会席×ふるさと納税完全攻略ガイド【2026年最新】能登屋・銀山荘・古勢起屋
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
          白粘土の鏝絵、ガス灯に照らされる銀山川。大正ロマンの風情が色濃く残る銀山温泉の幻想的な時間へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          山形県尾花沢市の山峡に位置し、かつて延沢銀山の鉱山として栄えた歴史を持つ「銀山温泉（ぎんざんおんせん）」。川を挟んで立ち並ぶ三層・四層の木造多層建築群、壁を彩る鮮やかな鏝絵（こてえ）、夕暮れとともに灯るガス灯の柔らかな光、そして石畳の歩道に舞い落ちる雪景色——。その圧倒的なノスタルジーと幻想的な景観は、国内外の旅行者を魅了してやみません。銀山温泉の湯は、古くから湯治場として親しまれてきた無色透明で硫黄の香りがほんのり漂うナトリウム-塩化物・硫酸塩温泉。体の芯からぽかぽかと温まり、湯冷めしにくい極上の泉質です。宿の客室から川面を眺めれば、まるで大正時代にタイムスリップしたかのような錯覚を覚えます。さらにグルメの魅力も見逃せません。山形が全国に誇る極上の黒毛和牛「尾花沢牛（おばなざわぎゅう）」の霜降りステーキやしゃぶしゃぶ、山形のブランド米「つや姫」、清らかな伏流水で打たれた名物尾花沢蕎麦など、地元の山海の恵みが食卓を華やかに彩ります。本特集では、国の登録有形文化財に指定され銀山温泉のシンボルとして圧倒的人気を誇る「能登屋旅館」、銀山川の絶景を望む広大な露天寝湯と開放的な大浴場が魅力の「仙峡の宿 銀山荘」、そして大正ロマン薫る木造四層構造の川側客室で街並みを一望できる「古勢起屋別館」の3宿を厳選。山形県尾花沢市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で一生に一度は泊まりたい銀山温泉の憧れ旅を予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">銀山温泉 大正ロマン宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】銀山温泉　能登屋旅館</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】銀山温泉　仙峡の宿　銀山荘</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】銀山温泉　古勢起屋別館</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 銀山温泉 大正ロマン宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">夕暮れのガス灯と木造楼閣！まるで映画のワンシーンのような幻想的な街並み</h3>
            <p className="text-sm text-gray-600 leading-relaxed">夕暮れ時にガス灯が灯ると温泉街全体が黄金色に包まれ、冬には白銀の雪景色と調和。川沿いをそぞろ歩くだけで非日常のロマンに浸れます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">日本有数の霜降り和牛「尾花沢牛」と山形の豊かな郷土料理を味わい尽くす</h3>
            <p className="text-sm text-gray-600 leading-relaxed">厳しい寒暖差が育んだ極上のブランド黒毛和牛「尾花沢牛」のしゃぶしゃぶやステーキ、山菜や川魚など、土地の豊かな恵みを堪能できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">尾花沢市ふるさと納税で最大30％OFF！3年間有効クーポンで予約困難宿を賢く確保</h3>
            <p className="text-sm text-gray-600 leading-relaxed">予約が取りづらいことで有名な銀山温泉でも、ふるさと納税クーポンなら実質2,000円負担。3年間の有効期間を活かして記念日や冬の旅を計画できます。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            銀山温泉　能登屋旅館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山形県尾花沢市・国の登録有形文化財！大正十年完成の木造四層楼閣・銀山温泉を象徴する最高峰のシンボル宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山形県尾花沢市大字銀山新畑446</div>
            <div><strong>アクセス:</strong> JR大石田駅よりバス40分、東北中央道東根IC尾花沢方面へ50分、尾花沢バス停より市営バスで35分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.5</span> (1件)</div>
            <div><strong>参考価格:</strong> 1名あたり約18,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">銀山温泉のほぼ中央、川のほとりに威風堂々と佇む、大正10年築の木造四層楼閣。国の登録有形文化財に指定されており、職人技が光る繊細な組子障子や欄間、最上階の望楼など、建物自体がひとつの美術品のような格式を誇ります。本館の川側客室からは、ガス灯揺らめく銀山川の風情を一望。館内には創業当時の面影を残す洞窟風呂「元湯」や、白銀の滝を望む展望露天風呂があり、歴史ある名湯を心ゆくまで満喫できます。夕食は極上の尾花沢牛のローストや鴨鍋など、尾花沢の四季折々の滋味を盛り込んだ伝統の郷土会席をお部屋食で気兼ねなく味わえます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              明治25年創業、木造三階建ての宿。昔の面影をそのままに、古き良き時代の懐かしさを伝える佇まい。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “温泉もお料理も本当に素晴らしく、大満足の滞在でした。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D183204%26f_flg%3DPLAN"
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
            銀山温泉　仙峡の宿　銀山荘
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山形県尾花沢市・銀山川の渓流を望む絶景「露天寝湯」！開放的な近代設備と尾花沢牛会席が自慢のハイグレード温泉リゾート</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山形県尾花沢市銀山新畑85</div>
            <div><strong>アクセス:</strong> 国道１３号線尾花沢市内よりお車にて３０分。 ＪＲ利用のお客様は１１：１０、１３：４０、１５:４５の送迎あり（要予約）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.42</span> (316件)</div>
            <div><strong>参考価格:</strong> 1名あたり約24,778円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">温泉街の入り口の高台に位置し、銀山温泉随一の広さを誇るモダンで快適な温泉ホテル。最大の魅力は、銀山川の美しい渓谷美を眼下に望みながら、心地よい湯枕に頭をあずけて湯浴みができる「露天寝湯」。夜には満天の星空やライトアップされた渓谷を眺めながら、至福のリラクゼーションに浸ることができます。客室は広々とした和室や半露天風呂付き客室が揃い、シニアや家族連れでも快適。夕食は日本屈指の霜降りを誇るブランド黒毛和牛「尾花沢牛」のステーキやすき焼きをメインにした贅沢な会席料理で、心もお腹も満たされます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              古き良き大正ロマンの漂う銀山温泉。湖上の山々がおりなす四季の彩りをのんびり眺めながら入る露天風呂。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/111234?reviewId=33123479253845　2026-09-04 21:04:07投稿”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D111234%26f_flg%3DPLAN"
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
            銀山温泉　古勢起屋別館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">山形県尾花沢市・大正ロマンの木造四層構造！川側客室からガス灯と温泉街を見晴らす好立地＆銀山荘の露天風呂も利用可能</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 山形県尾花沢市銀山新畑417</div>
            <div><strong>アクセス:</strong> 国道１３号線尾花沢市内よりお車にて３０分。 ＪＲ利用のお客様は１５:４５の送迎あり（要予約）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.25</span> (315件)</div>
            <div><strong>参考価格:</strong> 1名あたり約19,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">銀山温泉街の川沿いに佇み、古き良き湯治場の情緒を現代に受け継ぐ木造の温泉旅館。川側の客室からは、夕暮れとともに灯るガス灯と木造建築群が織りなす幻想的な景色を特等席で見下ろすことができます。館内には源泉かけ流しの「ほっこりの湯」があり、さらに姉妹館「銀山荘」の大浴場や露天寝湯も無料で湯巡り可能。客室はステンドグラスや格子戸など大正ロマンの意匠が散りばめられ、カップルや一人旅にも大人気。夕食は尾花沢牛をはじめ山形の旬の食材を丁寧に仕立てた創作和食会席をゆったりと堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              『2011年度・お客様が選んだ4つ星以上の人気宿』大正浪漫の雪景色・銀山荘の露天風呂もご利用可能
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “温かなおもてなしに感動しました。家族全員が大満足です。”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D111235%26f_flg%3DPLAN"
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
            href="/furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば・グランドホテル
          </Link>
          <Link
            href="/furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【城崎温泉 七田外湯めぐり＆柳並木宿×ふるさと納税】招月庭・小宿縁・つちや旅館
          </Link>
          <Link
            href="/furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋
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
