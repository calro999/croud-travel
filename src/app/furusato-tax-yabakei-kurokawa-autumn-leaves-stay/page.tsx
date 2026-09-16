import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '奇岩と紅葉が織りなす山水画の世界！耶馬渓・九重連山＆黒川温泉入湯手形露天名宿×ふるさと納税完全ガイド【2026年最新秋旅】九州 | 旅宿クラウド',
  description: '10月下旬〜11月下旬に見頃を迎える日本三大奇勝「耶馬渓（大分）」と九州本土最高峰「九重連山」、そして全国屈指の人気温泉郷「黒川温泉（熊本）」。名物「入湯手形」で巡る大自然の絶景露天風呂！「旅館 奥の湯」「旅館 山河」「やまびこ旅館」。肥後あか牛と秋の山里会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '耶馬渓・九重連山紅葉＆黒川温泉・露天風呂めぐり名宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-yabakei-kurokawa-autumn-leaves-stay/'
  },
  openGraph: {
    title: '奇岩と紅葉が織りなす山水画の世界！耶馬渓・九重連山＆黒川温泉入湯手形露天名宿×ふるさと納税完全ガイド【2026年最新秋旅】九州',
    description: '10月下旬〜11月下旬に見頃を迎える日本三大奇勝「耶馬渓（大分）」と九州本土最高峰「九重連山」、そして全国屈指の人気温泉郷「黒川温泉（熊本）」。名物「入湯手形」で巡る大自然の絶景露天風呂！「旅館 奥の湯」「旅館 山河」「やまびこ旅館」。肥後あか牛と秋の山里会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-yabakei-kurokawa-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoYabakeiKurokawaAutumnLeavesStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">耶馬渓紅葉＆黒川温泉露天名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              耶馬渓・九重連山紅葉＆黒川温泉・露天風呂めぐり名宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              奇岩と紅葉が織りなす山水画の世界！耶馬渓・九重連山＆黒川温泉入湯手形露天名宿×ふるさと納税完全ガイド【2026年最新秋旅】九州
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月下旬〜11月下旬に見頃を迎える日本三大奇勝「耶馬渓（大分）」と九州本土最高峰「九重連山」、そして全国屈指の人気温泉郷「黒川温泉（熊本）」。名物「入湯手形」で巡る大自然の絶景露天風呂！「旅館 奥の湯」「旅館 山河」「やまびこ旅館」。肥後あか牛と秋の山里会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 2026年最新版（10-11月秋シーズン）
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎫</span> 楽天ふるさと納税トラベルクーポン対象
              </span>
              <span className="flex items-center gap-1.5">
                <span>✨</span> 実質自己負担2,000円
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-4 border-l-4 border-amber-600 pl-4">
            奇岩そびえる耶馬渓の錦秋と、渓流沿いに湯煙たなびく黒川の里。九州が誇る大自然と名湯に抱かれる癒やしの休日へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            日本三大奇景の一つに数えられ、新日本三景でもある大分県中津市の「耶馬渓（やばけい）」。10月下旬から11月下旬にかけて、一目八景（いちもくはっけい）と呼ばれる展望台からは、夫婦岩や烏帽子岩などの奇岩群と色鮮やかなカエデ・イチョウが織りなすまるで山水画のような紅葉美が広がります。さらに九重連山の雄大なススキの草原「長者原」をドライブして辿り着くのが、熊本県南小国町の山あいに佇む憧れの温泉地「黒川温泉」です。黒川温泉の最大の魅力は、地域全体が一つの宿のように統一された木造の景観美と、名物「入湯手形」を使って巡る個性豊かな露天風呂の数々。渓流のせせらぎを聞きながら入る野天風呂や、森に包まれた洞窟風呂、竹林を望む露天風呂など、野趣あふれる湯浴みが楽しめます。田の原川の上流に佇み茅葺き屋根と多彩な湯船を誇る「旅館 奥の湯」、森の深閑とした静寂に包まれ二つの自家源泉を持つ名門「旅館 山河」、そして大仙人の湯など巨岩を配した名物大露天風呂を誇る「やまびこ旅館」。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質2,000円の自己負担で賢く予約し、極上の九州秋旅へ出かけましょう。
          </p>
        </section>

        {/* 3つの魅力ポイント */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 text-center">
            この特集で厳選した宿をおすすめする3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  日本三大奇勝「耶馬渓・一目八景」＆九重やまなみハイウェイの紅葉ドライブ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                八つの奇岩を一望できる耶馬渓の絶景ポイント。秋風が心地よい九重連山の黄金ススキと紅葉のパノラマロードを駆け抜ける爽快な旅が叶います。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  名物「入湯手形」で巡る露天風呂！渓流露天・洞窟風呂・竹林の湯めぐり
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                杉の木で作られた入湯手形（1枚1,500円）で3つの旅館の露天風呂に入浴可能。宿ごとに泉質やロケーションが異なる本物の源泉を満喫できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  熊本名物「特選肥後あか牛」のステーキ・霜降り馬刺し＆旬の山里手作り会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                赤身の旨味が凝縮されたあか牛の溶岩焼きや、本場熊本の極上馬刺し、秋の味覚である小国米や清流ヤマメなど、山の恵みを味わい尽くせます。
              </p>
            </div>
  
          </div>
        </section>

        {/* ホテル一覧 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900">
              【2026年最新】ふるさと納税で行く極上おすすめ宿3選
            </h2>
            <p className="text-stone-600 text-sm">
              宿泊予約時にトラベルクーポンを適用することで、最大30％割引＆実質2,000円で泊まれます。
            </p>
          </div>

          <div className="space-y-8">

            <div key="kurokawa_okunoyu" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>熊本県南小国町・黒川温泉の上流に佇む静寂の隠れ宿！田の原川の渓流露天風呂と茅葺き客室</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.19 <span className="text-stone-400 text-xs">(341件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    黒川温泉　旅館　奥の湯
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 熊本県阿蘇郡南小国町満願寺黒川6567 ｜ 【車】熊本ＩＣより約100分、日田ＩＣより約60分。湯布院ICより約70分。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/54108/54108.jpg"
                        alt="黒川温泉　旅館　奥の湯"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      黒川温泉街から少し離れた田の原川の上流、約二千坪の敷地に佇む静寂の温泉旅館。川のせせらぎを間近に感じる大露天風呂や洞窟風呂、もみじの湯、川風呂など趣の異なる多彩な湯船が揃い、宿にいながら黒川の湯力を堪能できます。客室は本館のほか、茅葺き屋根の離れや温泉付き客室が充実。夕食は肥後あか牛や地元の新鮮野菜、山菜を取り入れた手作りの山里会席膳をお部屋や個室食事処で心ゆくまで味わえます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 渓流沿いの混浴露天風呂をはじめ、全9種の湯巡りと3つの無料貸切風呂、温泉熱プールが楽しめる宿！</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 最大25台収容(無料)</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 13,000円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54108%2F54108.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="kurokawa_sanga" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>熊本県南小国町・三百年の森に抱かれる秘湯！「薬師の湯」と「美肌の湯」二つの自家源泉を持つ名旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.70 <span className="text-stone-400 text-xs">(149件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    黒川温泉　旅館　山河
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 熊本県阿蘇郡南小国町 ｜ 阿蘇駅からバスで５０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/138061/138061.jpg"
                        alt="黒川温泉　旅館　山河"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      黒川温泉の雑木林の奥深くにひっそりと佇む大人の隠れ家旅館。敷地内に「薬師の湯（単純硫黄泉）」と「美肌の湯（ナトリウム-塩化物・炭酸水素塩・硫酸塩泉）」という2つの自家源泉を引いており、渓流沿いの混浴大露天風呂「もやいの湯」や女性専用露天「四季の湯」、複数の貸切風呂で極上の湯巡りが叶います。落ち着きある数寄屋造りの客室と、季節の移ろいを丁寧に映した繊細な山里会席が旅情を深めてくれます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 黒川温泉の下手にある山河旅館。温泉街とはまた違った風情をお楽しみいただけます。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　３０台　無料　予約不要</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 25,300円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F138061%2F138061.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="kurokawa_yamabiko" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>熊本県南小国町・黒川随一の広さを誇る大露天風呂「仙人の湯」！愛犬同伴宿泊も可能な名湯宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.59 <span className="text-stone-400 text-xs">(362件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    黒川温泉　やまびこ旅館
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 熊本県阿蘇郡南小国町黒川6704 ｜ ＪＲ阿蘇駅より車で４０分。ＪＲ日田駅より車で６０分。バスは九州横断バスほか、福岡より直行バスも４往復ございます。　　
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/67974/67974.jpg"
                        alt="黒川温泉　やまびこ旅館"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      田の原川沿いに建ち、巨岩を配した黒川温泉随一の広さを誇る大露天風呂「仙人の湯」で知られる名門宿。エメラルドグリーンの良質な天然温泉を贅沢に掛け流し、開放感あふれる空間で自然と一体になる湯浴みが楽しめます。趣の異なる6つの貸切風呂も完備。夕食は名物の肥後牛ステーキや特選馬刺しを贅沢に盛り込んだ会席料理を提供。ワンちゃん専用の宿泊設備も備わり、愛犬家からも絶大な人気を集めています。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 大きな露天風呂が自慢の宿！看板犬のえんちゃん(レオンベルガー　人見知り)もよろしくおねがいします＾＾</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　３０台　無料　予約不要</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 19,800円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67974%2F67974.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

            <li key="furusato-tax-wa-modern-twin-bed-comfortable-ryokan-stay">
              <Link
                href="/furusato-tax-wa-modern-twin-bed-comfortable-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【和モダンツインベッド客室温泉旅館×ふるさと納税】足腰に優しい快適ステイ
              </Link>
            </li>
  

            <li key="furusato-tax-autumn-foliage-open-air-bath-stay">
              <Link
                href="/furusato-tax-autumn-foliage-open-air-bath-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【絶景紅葉露天風呂＆名所旅館×ふるさと納税】定山渓・日光・黒川の名宿
              </Link>
            </li>
  

            <li key="furusato-tax-pure-kakenagashi-secret-hotspring-stay">
              <Link
                href="/furusato-tax-pure-kakenagashi-secret-hotspring-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿
              </Link>
            </li>
  

            <li key="furusato-tax-luxury-hotspring-ryokan-stay">
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド
              </Link>
            </li>
  
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
