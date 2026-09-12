import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '荒波迫る海食洞窟と神秘の巨岩風呂！全国の天然洞窟温泉＆名湯旅館×ふるさと納税完全ガイド【2026年最新】南紀勝浦・湯の峰・上諏訪',
  description: '打ち寄せる太平洋の怒濤を間近に望む大洞窟風呂から、太古の巨岩に囲まれた神秘の湯処まで！那智勝浦の巨大海食洞窟温泉「忘帰洞」「玄武洞」を擁する「ホテル浦島」、世界遺産・湯の峰温泉で槇風呂と天然蒸し風呂・洞窟の情緒を伝える「旅館あづまや」、諏訪湖畔で神秘の自家源泉と畳風呂の癒しを提供する「上諏訪温泉 しんゆ」。地球の息吹を肌で感じるワイルドで神秘的な名湯体験を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '天然洞窟温泉＆名湯旅館特集',
    '楽天ふるさと納税 トラベル',
    '南紀勝浦温泉　ホテル浦島',
    '旅館あづまや　＜和歌山県＞',
    '上諏訪温泉　しんゆ（親湯）',
    '高級温泉旅館',
    '露天風呂付き客室',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-cave-bath-natural-grotto-onsen-stay/',
  },
  openGraph: {
    title: '荒波迫る海食洞窟と神秘の巨岩風呂！全国の天然洞窟温泉＆名湯旅館×ふるさと納税完全ガイド【2026年最新】南紀勝浦・湯の峰・上諏訪',
    description: '打ち寄せる太平洋の怒濤を間近に望む大洞窟風呂から、太古の巨岩に囲まれた神秘の湯処まで！那智勝浦の巨大海食洞窟温泉「忘帰洞」「玄武洞」を擁する「ホテル浦島」、世界遺産・湯の峰温泉で槇風呂と天然蒸し風呂・洞窟の情緒を伝える「旅館あづまや」、諏訪湖畔で神秘の自家源泉と畳風呂の癒しを提供する「上諏訪温泉 しんゆ」。地球の息吹を肌で感じるワイルドで神秘的な名湯体験を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-cave-bath-natural-grotto-onsen-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoCaveBathNaturalGrottoStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">天然洞窟温泉＆名湯旅館特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          全国屈指の天然洞窟風呂・巨岩名湯宿特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          荒波迫る海食洞窟と神秘の巨岩風呂！全国の天然洞窟温泉＆名湯旅館×ふるさと納税完全ガイド【2026年最新】南紀勝浦・湯の峰・上諏訪
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
          打ち寄せる波音と太古の岩肌。大自然が創り出した天然洞窟の湯船で、野生の感動と神秘に浸る
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          数千年から数十万年もの歳月をかけて波や地殻変動が創り出した「天然洞窟風呂」。ごつごつとした岩肌に覆われた空間に身を浸すと、日常の喧騒から完全に切り離され、まるで母なる地球の胎内に抱かれているかのような深い安らぎと神秘的な高揚感に包まれます。洞窟の開口部から見上げる青空や夕暮れの海、洞内に反響する波や湧き水のせせらぎ、ほのかに立ちこめる湯気と硫黄の香りは、人工の温泉では決して味わえない唯一無二の魅力です。本特集では、太平洋の荒波が間近に迫る巨大な海食洞窟の中に乳白色の源泉が湧き出す日本屈指の名湯「南紀勝浦温泉 ホテル浦島」、開湯1800年・世界遺産「つぼ湯」のすぐそばに佇み、江戸時代からの風情を残す槇風呂や天然蒸し風呂で知られる「湯の峰温泉 旅館あづまや」、そして諏訪湖の神秘的な情景と美肌の自家源泉を畳敷きの大浴場や癒しの空間で味わう名宿「上諏訪温泉 しんゆ」の3宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で一生記憶に残る洞窟名湯の旅へ出かけましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">天然洞窟温泉＆名湯旅館特集が旅人を惹きつけてやまない3つの魅力</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】南紀勝浦温泉　ホテル浦島</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】旅館あづまや　＜和歌山県＞</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】上諏訪温泉　しんゆ（親湯）</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 天然洞窟温泉＆名湯旅館特集が旅人を惹きつけてやまない3つの魅力
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">自然の造形美が織りなす非日常！荒波を間近に感じる巨大海食洞窟と神秘の岩肌</h3>
            <p className="text-sm text-gray-600 leading-relaxed">潮風と波音を全身で浴びながら浸かる海食洞窟風呂は、地球のダイナミズムを直感できる圧倒的な迫力。薄暗い洞内に差し込む光と湯気が織りなす陰影は、息をのむほど幻想的な美しさを放ちます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">地球深部から湧き出る濃厚な源泉！圧倒的な湯量と美肌・疲労回復の効能</h3>
            <p className="text-sm text-gray-600 leading-relaxed">岩盤の間から自噴する濃厚な硫黄泉や塩化物泉はミネラル成分が極めて豊富。洞窟内に留まる温泉蒸気を吸引することで気道や肺からも成分を取り込み、湯上がり後も芯からポカポカが持続します。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">勝浦の生マグロや熊野牛、信州サーモン！海と山の極上ごちそうを堪能</h3>
            <p className="text-sm text-gray-600 leading-relaxed">南紀勝浦漁港直送の新鮮な生マグロの解体ショーや熊野牛のステーキ、信州の恵みを活かした美しい創作料理など、温泉のインパクトに負けない贅沢なご当地グルメがお腹と心を満たします。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            南紀勝浦温泉　ホテル浦島
          </h2>
          <p className="text-xs md:text-sm text-amber-100">和歌山県那智勝浦町・太平洋の怒濤が間近に迫る大洞窟温泉「忘帰洞」「玄武洞」！圧倒的スケールの温泉リゾート</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 和歌山県東牟婁郡那智勝浦町勝浦1165-2</div>
            <div><strong>アクセス:</strong> ＪＲ紀勢線　紀伊勝浦駅から徒歩6分で桟橋へ。更に専用ボート又は、シャトルバスで５分　詳しくは交通案内ページをご覧ください</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.22</span> (6326件)</div>
            <div><strong>参考価格:</strong> 1名あたり約8,250円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">専用の送迎船で海を渡って訪れる、紀伊半島の狼煙半島全体を敷地とする巨大温泉ホテル。「帰るのを忘れるほど心地よい」と紀州藩主・徳川頼倫公が名付けた国宝級の天然海食洞窟温泉「忘帰洞」と、奇岩が連なる「玄武洞」は圧巻。洞窟の開口部越しに太平洋の怒濤と水平線を眺めながら、乳白色やエメラルドグリーンに色を変える自家源泉掛け流しの湯を堪能できます。館内には6つもの湯巡り処があり、夕食には勝浦港水揚げの新鮮な生まぐろをふんだんに使った豪華ディナーバイキングや会席を満喫できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              【楽天トラベルゴールドアワード受賞】圧倒的なスケールと開放感！天然洞窟温泉など湯巡りを楽しもう♪
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “リニューアルで一新、来年もまた訪れたい浦島さんへは十数年前くらいから、毎年訪問しております。今年は特に、70周年でリニューアルされているという事で楽しみにしておりました。感想は、結構落ち着…　2026-09-03 19:36:10投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54556%26f_flg%3DPLAN"
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
            旅館あづまや　＜和歌山県＞
          </h2>
          <p className="text-xs md:text-sm text-amber-100">和歌山県田辺市・開湯1800年日本最古の温泉街！世界遺産「つぼ湯」至近の木造名門旅館と天然温泉蒸し風呂</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 和歌山県田辺市本宮町湯峰122</div>
            <div><strong>アクセス:</strong> 紀伊田辺駅よりバス・タクシーで約９０分/新宮駅よりバス、タクシーで６０分「湯峰温泉」下車すぐ/南紀田辺ＩＣから車で70分</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.47</span> (151件)</div>
            <div><strong>参考価格:</strong> 1名あたり約10,890円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">熊野古道の山深き谷あいに位置し、参詣道の一部として世界遺産に登録された天然岩風呂「つぼ湯」のすぐそばに佇む江戸時代創業の老舗名宿。樹齢数百年の槇の木で組まれた重厚な大浴場や、源泉の蒸気をそのまま利用した天然温泉蒸し風呂（薬湯洞窟サウナのような情緒）があり、濃厚な硫黄の香りと湯の花に包まれた本物の湯治体験が叶います。夕食には名物の温泉粥をはじめ、熊野牛や山菜、鮎など滋味溢れる熊野の郷土会席をお部屋や個室でじっくりと堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              名湯と温泉料理の宿で知られている当館。熊野古道のメッカ、本宮に在り、つぼ湯が目印です。
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “温泉街の中心で料理も温泉も素晴らしい車での利用でしたが、温泉街のほぼ中心でバス停や公衆浴場の真ん前の立地(ただし駐車場からは徒歩3分程度かかる)。温泉や料理も素晴らしく、古い建物ながら清潔に手入れ…　2026-09-02 18:34:13投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D129554%26f_flg%3DPLAN"
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
            上諏訪温泉　しんゆ（親湯）
          </h2>
          <p className="text-xs md:text-sm text-amber-100">長野県諏訪市・諏訪湖を一望する神秘と癒しの宿！足元に優しい畳風呂とミネラル豊富な自家源泉美肌の湯</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 長野県諏訪市湖岸通り2-6-30</div>
            <div><strong>アクセス:</strong> JR上諏訪駅より徒歩10分(送迎バス有。最終17時)、中央道諏訪ICより車10分。諏訪湖目の前。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.58</span> (2140件)</div>
            <div><strong>参考価格:</strong> 1名あたり約13,640円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">諏訪大社のお膝元・諏訪湖畔に佇み、神秘の情景と現代のホスピタリティが融合したハイクラス宿。大浴場は全面畳敷きとなっており、滑りにくく温かみのある空間で、敷地内から自噴する効能豊かな弱アルカリ性自家源泉をゆったりと楽しめます。諏訪湖の夕暮れや花火を望む客室露天風呂も人気。夕食には信州サーモンや信州プレミアム牛、諏訪の地酒など、二十四節気に基づいた身体に優しい創作和会席「美 badge 会席」が振る舞われ、五感すべてが癒やされる大人のリトリートを体験できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              諏訪湖畔に佇む【癒し】とおもてなしの宿◯自家源泉の湯と【個室料亭】での美食【衛生消毒プログラム導入】
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “早期予約でお得に、4社巡りツアーも大満足早期予約で割安で予約が取れました。老舗旅館らしい良さが接客や料理など随所に感じられました。地場野菜を多く使った食事は美味しく頂けました。特に気に入ったのは、…　2026-09-05 22:44:34投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D130095%26f_flg%3DPLAN"
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
            href="/furusato-tax-ocean-view-infinity-bath-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【海一望インフィニティ温泉×ふるさと納税】波打ち際と水平線に溶け込む宿
          </Link>
          <Link
            href="/furusato-tax-pure-100-percent-kakenagashi-onsen-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【源泉かけ流し100％名湯×ふるさと納税】加水加温なしの本物の温泉宿
          </Link>
          <Link
            href="/furusato-tax-radium-radon-hotspring-healing-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【ラジウム・ラドン名湯温泉湯治×ふるさと納税】三朝・猿投・村杉の名宿
          </Link>
          <Link
            href="/furusato-tax-world-heritage-historic-site-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【世界遺産と名所を巡る名門宿×ふるさと納税】熊野・白川郷・日光の旅
          </Link>
        </div>
      </section>
    </article>
  );
}
