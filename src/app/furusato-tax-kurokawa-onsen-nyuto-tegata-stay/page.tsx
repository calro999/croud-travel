import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【黒川温泉×ふるさと納税】入湯手形で巡る秘境露天風呂＆極上あか牛美食！里山の名門隠れ家宿完全ガイド｜山みず木・旅館わかば・山の宿新明館',
  description: '熊本・阿蘇の奥深くに佇む日本屈指の人気温泉地・黒川温泉を楽天ふるさと納税でお得に旅する！「入湯手形」でめぐる風情ある露天風呂、渓流沿いの名門隠れ家「山あいの宿 山みず木」、化粧水風呂と囲炉裏会席の「旅館わかば」、名物洞窟風呂の「山の宿 新明館」を徹底解説。南小国町クーポン活用術を網羅。',
  keywords: '黒川温泉 ふるさと納税,黒川温泉 入湯手形 旅館,山みず木 ふるさと納税,新明館 洞窟風呂,南小国町 ふるさと納税 宿泊',
  openGraph: {
    title: '【黒川温泉×ふるさと納税】入湯手形で巡る秘境露天風呂＆極上あか牛美食！里山の名門隠れ家宿完全ガイド｜山みず木・旅館わかば・山の宿新明館',
    description: '熊本・阿蘇の奥深くに佇む日本屈指の人気温泉地・黒川温泉を楽天ふるさと納税でお得に旅する！「入湯手形」でめぐる風情ある露天風呂、渓流沿いの名門隠れ家「山あいの宿 山みず木」、化粧水風呂と囲炉裏会席の「旅館わかば」、名物洞窟風呂の「山の宿 新明館」を徹底解説。南小国町クーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-kurokawa-onsen-nyuto-tegata-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kurokawa-onsen-nyuto-tegata-stay',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            【黒川温泉×ふるさと納税】入湯手形で巡る秘境露天風呂＆極上あか牛美食！里山の名門隠れ家宿完全ガイド｜山みず木・旅館わかば・山の宿新明館
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            熊本・阿蘇の奥深くに佇む日本屈指の人気温泉地・黒川温泉を楽天ふるさと納税でお得に旅する！「入湯手形」でめぐる風情ある露天風呂、渓流沿いの名門隠れ家「山あいの宿 山みず木」、化粧水風呂と囲炉裏会席の「旅館わかば」、名物洞窟風呂の「山の宿 新明館」を徹底解説。南小国町クーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">熊本県南小国町</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            雑木林に溶け込む里山情緒、渓流のせせらぎと湯巡り手形——黒川温泉で過ごす至高の隠れ家ステイ
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            阿蘇山と九重連山に抱かれた緑豊かな山あいに佇む黒川温泉。「街全体が一軒の宿、通りは廊下、旅館は客室、木々は庭の植木」という統一された景観づくりと自然保護の理念のもと、すべての旅館が木と土の温もりを大切にした純和風の佇まいを守り続けています。看板やネオンを排し、里山の原風景を残した温泉街を浴衣に下駄履きで歩く時間は、日本人が忘れかけていた旅の原点を思い出させてくれます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            黒川温泉の最大の魅力は、地元特産の小国杉で作られた「入湯手形」を使って、各宿自慢の趣向を凝らした露天風呂を巡れること。渓流沿いの大野天風呂、巨岩をくり抜いた野趣あふれる湯船、神秘的な洞窟風呂など、泉質も景観も異なる名湯が旅人を迎えます。そして夕食には、阿蘇の大自然が育んだブランド和牛「あか牛」やヤマメ、山菜を使った贅沢な会席料理。南小国町へのふるさと納税を活用すれば、寄付額の30%相当が宿泊クーポンとして還元され、憧れの隠れ家旅館へ驚くほどお得に滞在できます。
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">熊本県南小国町のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>


          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/136864/136864.jpg"
                alt="黒川温泉　山あいの宿　山みず木"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.62（口コミ 472件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">熊本県南小国町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  黒川温泉　山あいの宿　山みず木
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  渓流のせせらぎと深緑に抱かれる黒川屈指の名門宿！川と一体になる大露天風呂「幽谷の湯」と滋味豊かな山里会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  黒川温泉 山あいの宿 山みず木 —— 奥黒川の静寂に佇む隠れ家。大自然と溶け合う至極の湯浴みとおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 清流田の原川のすぐそばに広がる名物露天風呂「幽谷の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">川のせせらぎを手で触れられるほど間近に望む大露天風呂。原生林の木漏れ日とマイナスイオンに包まれながら、無色透明の柔らかな単純温泉に身を浸す至福の時間が流れます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 自然の地形を活かした趣あふれる木造離れと客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広い敷地内に点在する客室は、古材の梁や畳の香りが心地よい純和風空間。窓を開ければ渓流の音と鳥のさえずりが響き、日常の喧騒を完全に忘れさせてくれます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 阿蘇の旬の恵みと名物あか牛を味わう創作山里会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元農家から仕入れる朝採れ野菜、川魚の塩焼き、熊本名物の馬刺し、そして柔らかく旨味の濃いあか牛の陶板焼きなど、丁寧に仕上げられた会席料理を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.62点。「川沿いの露天風呂が言葉を失うほど美しかった」「スタッフの物腰が柔らかく、本当に心が洗われる滞在になった」と絶賛の口コミが絶えません。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 熊本県 阿蘇郡南小国町黒川温泉</div>
                <div>最寄り駅・アクセス: 大分自動車道・日田ICより国道212号線を熊本方面へ約70分。黒川温泉バス停から車で約10分（送迎要予約）</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥20,900〜</span></div>
                <div>ホテル番号: No.136864</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D136864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/31854/31854.jpg"
                alt="黒川温泉　旅館　わかば"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.56（口コミ 692件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">熊本県南小国町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  黒川温泉　旅館　わかば
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  化粧水のような美肌温泉と囲炉裏の温もり！女性やカップルに優しい細やかなおもてなしと地産地消の創作料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  黒川温泉 旅館 わかば —— 木漏れ日揺れる小さな隠れ宿。トロトロの美肌湯と囲炉裏ダイニングの美食
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 天然の保湿成分メタケイ酸を豊富に含む「化粧水の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">湯上がりの肌がしっとりすべすべになると評判の自家源泉。檜の露天風呂や岩風呂、宿泊者専用のプライベートな貸切風呂で、贅沢な美肌湯浴みを心ゆくまで満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 落ち着きある和モダン客室と川沿いの静かなロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">田の原川のせせらぎを聞く落ち着いた和室。ベッドタイプの和洋室も用意され、シニアから女子旅まで快適に過ごせる温かな空間が広がっています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 炭火で香ばしく焼き上げるあか牛や地鶏の囲炉裏会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">囲炉裏を囲む落ち着いたお食事処で供されるディナー。炭火でじっくり焼く旬の川魚や熊本県産あか牛のステーキ、自家製デザートまで、一品一品に真心のこもった料理が楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点、口コミ約700件。「化粧水の湯の名前通り肌がつるつるになった」「スタッフの温かい気配りと食事が本当に美味しかった」とリピーターが多数。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 熊本県 阿蘇郡南小国町満願寺6431</div>
                <div>最寄り駅・アクセス: 黒川温泉バス停　　※送迎希望は事前にお電話でのご予約をお願いいたします。</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥15,400〜</span></div>
                <div>ホテル番号: No.31854</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/80794/80794.jpg"
                alt="黒川温泉　山の宿　新明館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.65（口コミ 367件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">熊本県南小国町</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  黒川温泉　山の宿　新明館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業明治の老舗！宿の主人が十年かけて掘り抜いた名物「洞窟風呂」と田の原川にかかる風情ある屋根付き橋
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  黒川温泉 山の宿 新明館 —— 黒川のシンボル的木造旅館。神秘的な地底温泉と茅葺きのノスタルジー
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ノミと槌で掘り進めた全長30mの神秘的「洞窟風呂」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">岩肌がむき出しになった洞窟の中に湯気が立ち込める唯一無二の名物風呂。ほのかな灯りに照らされた湯船はまるで異世界のような神秘的な雰囲気を醸し出しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 温泉街の中心に佇む屋根付き木橋と茅葺き屋根の情緒
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿の玄関へと続く木造の屋根付き橋は黒川温泉を代表するフォトスポット。川沿いのテラスや囲炉裏のあるロビーなど、昔ながらの日本の旅情が色濃く残ります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 囲炉裏端でいただく炭火焼き山里料理と地酒
                    </h5>
                    <p className="text-stone-600 leading-relaxed">炭火の赤々と燃える囲炉裏端で味わう夕食。ヤマメの塩焼きや田楽、馬刺しやあか牛など、里山ならではの素朴で力強い美味しさを熊本の地酒とともに楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.65点。「洞窟風呂のアドベンチャー感と泉質の良さが最高」「古い木造建築の風情と川のせせらぎに癒やされた」と高い評価を獲得しています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 熊本県 阿蘇郡南小国町満願寺6608</div>
                <div>最寄り駅・アクセス: 九州自動車道・鳥栖JCTより大分道へ。日田IC下車後、黒川温泉まで約１時間</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥20,900〜</span></div>
                <div>ホテル番号: No.80794</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D80794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            黒川温泉 入湯手形露天めぐり＆阿蘇観光モデルルート
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 入湯手形（1,500円）の上手な使い方と巡り方
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">黒川温泉旅館組合の案内所「風の舎」や各旅館で購入できる木製の「入湯手形」。加盟28軒の旅館の中から好きな3軒の露天風呂に入浴できます。有効期限は半年間あり、1枚を複数人で使うことはできませんが、個性豊かな湯巡り体験として必須のアイテムです。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 鍋ヶ滝（なべがたき）と阿蘇大観峰の絶景ドライブ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">黒川温泉から車で約20分、水のカーテンを裏側から眺められる神秘の滝「鍋ヶ滝」。さらに阿蘇外輪山の最高峰「大観峰」からは、阿蘇五岳（涅槃像）とカルデラ盆地を見渡す世界屈指の大パノラマが広がります。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 黒川温泉街のスイーツ＆地ビール食べ歩き
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">温泉街の小径には、パティスリー麓の焼きたてシュークリームや、どらどらバーガー、地ビール「湯上がりビール」など、湯上がりのそぞろ歩きにぴったりの名物スイーツ＆ご当地グルメが並びます。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              熊本県南小国町ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 南小国町の「楽天トラベルクーポン」を返礼品で選定</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「熊本県南小国町」の宿泊クーポン（寄付額の30%相当補助）を申し込みます。寄付完了と同時に楽天アカウントへ自動付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で温泉旅行をじっくり計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行からたっぷり3年間。新緑の初夏や紅葉の秋、雪景色が美しい冬など、希望の季節に合わせて宿泊日を自由に選択できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポンを適用して即時値引き</div>
              <p className="text-stone-200 leading-relaxed">山みず木、旅館わかば、新明館などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに割り引かれます。</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kinugawa-onsen-valley-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 鬼怒川温泉 渓谷美と大露天風呂・あさやバイキング特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
