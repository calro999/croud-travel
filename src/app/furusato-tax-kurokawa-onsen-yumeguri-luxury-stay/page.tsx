import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '阿蘇の秘湯・黒川温泉の入湯手形めぐり＆渓流絶景露天風呂×ふるさと納税完全攻略ガイド【2026年最新】山みず木・奥の湯・新明館',
  description: 'ミシュラン2つ星を獲得した阿蘇の渓谷温泉地・黒川温泉！名物「入湯手形」で三十軒の個性豊かな露天風呂めぐり。「山あいの宿 山みず木」「旅館 奥の湯」「山の宿 新明館」を、熊本県南小国町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。渓流露天風呂、洞窟風呂、肥後あか牛会席を満喫。',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '黒川温泉 入湯手形＆秘湯名宿特集',
    '楽天ふるさと納税 トラベル',
    '黒川温泉　山あいの宿　山みず木',
    '黒川温泉　旅館　奥の湯',
    '黒川温泉　山の宿　新明館',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kurokawa-onsen-yumeguri-luxury-stay/',
  },
  openGraph: {
    title: '阿蘇の秘湯・黒川温泉の入湯手形めぐり＆渓流絶景露天風呂×ふるさと納税完全攻略ガイド【2026年最新】山みず木・奥の湯・新明館',
    description: 'ミシュラン2つ星を獲得した阿蘇の渓谷温泉地・黒川温泉！名物「入湯手形」で三十軒の個性豊かな露天風呂めぐり。「山あいの宿 山みず木」「旅館 奥の湯」「山の宿 新明館」を、熊本県南小国町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。渓流露天風呂、洞窟風呂、肥後あか牛会席を満喫。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kurokawa-onsen-yumeguri-luxury-stay',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoKurokawaOnsenYumeguriStayPage() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">黒川温泉 入湯手形＆秘湯名宿特集</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          自然と共生する日本の秘湯！黒川温泉特集
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          阿蘇の秘湯・黒川温泉の入湯手形めぐり＆渓流絶景露天風呂×ふるさと納税完全攻略ガイド【2026年最新】山みず木・奥の湯・新明館
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
          渓流のせせらぎ、木漏れ日と立ちのぼる湯煙。入湯手形を手に巡る阿蘇・黒川温泉の極上癒やし旅へ
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          熊本県阿蘇郡南小国町、標高700メートルの山あいにひっそりと佇む「黒川温泉（くろかわおんせん）」。かつて全国的な過疎の危機を乗り越え、「街全体が一つの宿、通りは廊下、旅館は客室、木々は庭の植木」という一貫した景観哲学のもと再生を遂げ、ミシュラン・グリーンガイド・ジャポンで異例の2つ星評価を獲得した日本屈指の名湯です。黒川温泉を代表する名物が、杉の間伐材で作られた「入湯手形」。これを手にすれば、加盟旅館の中から好きな露天風呂を自由に3箇所めぐることができ、雑木林の小道や川端通りを浴衣と下駄で歩く風情はまさに日本の原風景そのものです。田の原川の清流がすぐ目の前に迫る野趣あふれるダイナミックな渓流露天風呂、職人が長い年月をかけて手彫りした幻想的な洞窟風呂、茅葺き屋根と竹林に包まれた静寂の空間など、宿ごとに全く異なる魅力が凝縮。夕食には、阿蘇の大草原で育ったヘルシーで旨味濃厚な「肥後あか牛」の炭火焼きや陶板焼き、熊本名物の極上馬刺し、清流のヤマメや鮎など、里山の豊かな恵みを五感で堪能できます。本特集では、渓流と森が一体化した圧倒的な露天風呂を誇る「山あいの宿 山みず木」、竹林と茅葺き門に迎えられる多彩な湯処の名宿「旅館 奥の湯」、そして名物「手掘り洞窟風呂」と風情ある川端通りのシンボル「山の宿 新明館」の3大名宿を厳選。熊本県南小国町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの黒川温泉ステイをお得に予約しましょう。
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">黒川温泉 入湯手形＆秘湯名宿特集が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】黒川温泉　山あいの宿　山みず木</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】黒川温泉　旅館　奥の湯</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】黒川温泉　山の宿　新明館</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> 黒川温泉 入湯手形＆秘湯名宿特集が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">名物「入湯手形」で三十軒の露天風呂めぐり！杉の香りと浴衣散策の贅沢時間</h3>
            <p className="text-sm text-gray-600 leading-relaxed">杉の間伐材で作られた入湯手形を片手に、川沿いや森の中に点在する個性豊かな名湯を湯巡り。里山の自然と調和した街並みをのんびり散策できます。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">川のせせらぎと一体化する渓流露天＆手掘り洞窟風呂！野趣あふれる秘湯体験</h3>
            <p className="text-sm text-gray-600 leading-relaxed">田の原川の清流を間近に感じる大露天風呂や、秘湯感満点の手掘り洞窟風呂など、日常の喧騒を完全に忘れさせてくれる非日常の温泉体験が待っています。</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">南小国町ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や癒やし旅に最適</h3>
            <p className="text-sm text-gray-600 leading-relaxed">人気と格式の高い黒川温泉の名宿も、ふるさと納税なら実質自己負担2,000円。寄付から3年間有効なので、新緑や紅葉、雪見のベストシーズンに合わせて予約可能です。</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            黒川温泉　山あいの宿　山みず木
          </h2>
          <p className="text-xs md:text-sm text-amber-100">熊本県南小国町・田の原川の渓流と原生林に抱かれた最高峰露天風呂！口コミ総合4.6超・自然と一体になる究極の癒やし宿</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 熊本県阿蘇郡南小国町黒川温泉</div>
            <div><strong>アクセス:</strong> 大分自動車道・日田ICより国道212号線を熊本方面へ約70分。黒川温泉バス停から車で約10分（送迎要予約）</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.62</span> (472件)</div>
            <div><strong>参考価格:</strong> 1名あたり約20,900円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">黒川温泉街から少し離れた奥黒川の静寂な森に佇む、温泉ファン憧れの名旅館。宿の最大の自慢は、田の原川の清流にせり出すように作られた男性用露天風呂「幽谷の湯」と、女性用露天風呂「森の湯」。川のせせらぎの音と木々のざわめきに包まれながら、自然の息吹をダイレクトに感じる極上の湯浴みが堪能できます。客室は木の温もりを大切にした純和風の設えで、窓からは手付かずの大自然を一望。夕食は阿蘇の大地が育んだ肥後あか牛や山菜、地元農家直送の瑞々しい野菜を使った滋味豊かな和会席。都会の喧騒から完全に解き放たれる贅沢なひとときを約束してくれます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              自然豊かな渓流のせせらぎに包まれ、源泉かけ流しの迫力ある露天風呂と旬の会席料理を味わう温泉宿
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “露天風呂と繊細な料理、心遣いに大満足多種多様なお風呂が楽しめます。とくに川のせせらぎの音と鳥や虫の声の中で入る露風呂は本当に最高です。食事も一つ一つが繊細で全て美味しくいただきました。…　2026-08-26 13:24:20投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D136864%26f_flg%3DPLAN"
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
            黒川温泉　旅館　奥の湯
          </h2>
          <p className="text-xs md:text-sm text-amber-100">熊本県南小国町・茅葺き屋根の山門と竹林の静寂！混浴露天・女性専用露天・洞窟風呂など多彩な湯巡りが楽しめる名門</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 熊本県阿蘇郡南小国町満願寺黒川6567</div>
            <div><strong>アクセス:</strong> 【車】熊本ＩＣより約100分、日田ＩＣより約60分。湯布院ICより約70分。</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.19</span> (341件)</div>
            <div><strong>参考価格:</strong> 1名あたり約13,000円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">黒川温泉の上流、静寂に包まれた森の中に位置する全室川沿いの温泉宿。風情ある茅葺き屋根の門をくぐると、緑豊かな竹林と小川が広がり、旅情を掻き立てます。宿の敷地内には、川沿い大露天風呂をはじめ、もみじの湯、幻想的な洞窟風呂、地熱を利用した蒸し風呂など多彩な浴場が点在し、館内だけで贅沢な湯巡りが完結。客室は落ち着きある本館和室から露天風呂付き離れまで多彩。夕食は阿蘇のあか牛ステーキや旬の川魚の塩焼き、手作りの郷土料理が彩り豊かに並び、温かなおもてなしとともに心温まる滞在を叶えてくれます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              渓流沿いの混浴露天風呂をはじめ、全9種の湯巡りと3つの無料貸切風呂、温泉熱プールが楽しめる宿！
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “黒川温泉の象徴、庭と露天風呂が最高な宿熊本地震があってキャンセルが多かったみたいで黒川温泉は閑散としてました 前日予約しましたが普段ならなかなか取れないと思います地震後の復興のため皆さんには是…　2026-08-28 08:31:37投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D54108%26f_flg%3DPLAN"
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
            黒川温泉　山の宿　新明館
          </h2>
          <p className="text-xs md:text-sm text-amber-100">熊本県南小国町・黒川温泉街の中心・川端通り沿い！名物「手掘り洞窟風呂」と囲炉裏の風情が香る創業創業明治の名旅館</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> 熊本県阿蘇郡南小国町満願寺6608</div>
            <div><strong>アクセス:</strong> 九州自動車道・鳥栖JCTより大分道へ。日田IC下車後、黒川温泉まで約１時間</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ 4.65</span> (367件)</div>
            <div><strong>参考価格:</strong> 1名あたり約20,900円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">黒川温泉の中心を流れる川端通りに面し、情緒ある木造建築と木橋が目を引く老舗旅館。宿のシンボルとなっているのが、三代目の主人がノミとツチを使って10年もの歳月をかけて掘り進めた全長30メートルの「名物洞窟風呂」。ほの暗い洞窟内に漂う神秘的な湯気と温かな湯触りは、他では決して味わえない圧倒的な秘湯情緒を醸し出します。風情ある巨石露天風呂や家族風呂も充実。客室は昔ながらの日本旅館の風情を色濃く残し、川のせせらぎが心地よい子守唄に。夕食は熊本の特選あか牛や季節の山川の幸をふんだんに盛り込んだ贅沢な会席料理を堪能できます。</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              黒川温泉街の中心に佇む老舗宿。手掘りの洞窟風呂を含む、趣ある５つの湯と温泉街散策も楽しめる立地が魅力
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “洞窟温泉と囲炉裏料理に癒やされる旅洞窟温泉が楽しみでした。内湯で身体を洗ってから移動。洞窟は薄暗く1人だったので少々怖かったですw  お一人が10年以上かけて手で掘った洞窟は本当に素晴らし…　2026-09-05 02:01:47投稿 つづきはこちら”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2F3VTwt%2F%3Ff_no%3D80794%26f_flg%3DPLAN"
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
            href="/furusato-tax-beppu-onsen-jigoku-meguri-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【別府温泉 地獄めぐり＆絶景リゾート×ふるさと納税】杉乃井・山水館・亀の井
          </Link>
          <Link
            href="/furusato-tax-dogo-onsen-honkan-walk-luxury-stay"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ 【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス
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
