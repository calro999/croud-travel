import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '古都を紅に染める錦秋のパノラマ！京都嵐山・嵯峨野紅葉ライトアップ＆渡月橋畔名門温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】 | 旅宿クラウド',
  description: '10月下旬〜11月下旬、嵐山全体が朱と黄金の錦絵に染まる秋の京都！天龍寺庭園・常寂光寺・宝厳院の紅葉ライトアップと、嵐山温泉のとろりとした美肌湯に癒やされる「渡月亭」「花伝抄」「花筏」。本格京懐石と風雅な滞在を、楽天ふるさと納税トラベルクーポンで実質自己負担2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '京都嵐山＆嵯峨野・錦秋紅葉ライトアップ温泉旅館特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kyoto-arashiyama-autumn-leaves-illumination-stay/'
  },
  openGraph: {
    title: '古都を紅に染める錦秋のパノラマ！京都嵐山・嵯峨野紅葉ライトアップ＆渡月橋畔名門温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】',
    description: '10月下旬〜11月下旬、嵐山全体が朱と黄金の錦絵に染まる秋の京都！天龍寺庭園・常寂光寺・宝厳院の紅葉ライトアップと、嵐山温泉のとろりとした美肌湯に癒やされる「渡月亭」「花伝抄」「花筏」。本格京懐石と風雅な滞在を、楽天ふるさと納税トラベルクーポンで実質自己負担2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kyoto-arashiyama-autumn-leaves-illumination-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoKyotoArashiyamaAutumnLeavesStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">京都嵐山紅葉ライトアップ＆名門温泉宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              京都嵐山＆嵯峨野・錦秋紅葉ライトアップ温泉旅館特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              古都を紅に染める錦秋のパノラマ！京都嵐山・嵯峨野紅葉ライトアップ＆渡月橋畔名門温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月下旬〜11月下旬、嵐山全体が朱と黄金の錦絵に染まる秋の京都！天龍寺庭園・常寂光寺・宝厳院の紅葉ライトアップと、嵐山温泉のとろりとした美肌湯に癒やされる「渡月亭」「花伝抄」「花筏」。本格京懐石と風雅な滞在を、楽天ふるさと納税トラベルクーポンで実質自己負担2,000円で楽しむ完全ガイド。
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
            夜の闇に浮かび上がる燃えるような真紅のモミジ。渡月橋のせせらぎと湯けむりに包まれる極上の古都時間へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            日本人の美意識を揺さぶる「秋の京都・嵐山」。10月下旬から11月にかけて小倉山や嵐山の山々が一斉に色づき、渡月橋越しに広がる山肌はまるで一枚の巨大な錦織のよう。夜になれば宝厳院の「獅子吼の庭」や大覚寺大沢池などで幻想的な紅葉ライトアップが催され、光と影が織りなす幽玄の世界に息を呑みます。そんな嵐山観光の特等席となるのが、大堰川の畔や渡月橋のたもとに佇む「嵐山温泉」の名門旅館群です。弱アルカリ性のまろやかな天然温泉が旅の歩き疲れを優しく解きほぐし、板前が技を凝らした秋の京懐石（松茸・丹波栗・京野菜・若狭甘鯛）が舌を悦ばせます。創業百二十余年の伝統を誇り渡月橋南詰に佇む老舗料亭旅館「渡月亭」、全館畳敷きの和モダン空間に5つの無料貸切風呂を備えた人気宿「京都 嵐山温泉 花伝抄」、そして嵐山随一の絶景展望露天風呂から嵐山の紅葉を一望できる「嵐山温泉 彩四季の宿 花筏」。秋の京都旅を楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）でお得に予約し、一生モノの感動に出会う旅へ出かけましょう。
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
                  宝厳院・天龍寺・常寂光寺！夜間特別拝観ライトアップを徒歩圏で満喫
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                嵐山エリアに宿泊する最大のメリットは、混雑する夜間ライトアップや早朝の静寂な竹林の小径・天龍寺を人混みを避けてゆったり散策できることです。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  とろりとした肌触りの天然嵐山温泉！展望露天風呂や多彩な貸切風呂で湯浴み
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                肌に吸い付くような弱アルカリ性単純温泉。ライトアップ散策で冷えた身体を温め、渡月橋や愛宕山を眺めながら極上のリラクゼーションに浸れます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  丹波松茸・秋鱧・栗ご飯・若狭甘鯛！職人の美意識が宿る極上京懐石料理
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                京都の秋は美食の最盛期。季節のうつろいを器の上に表現した繊細な京料理を、お部屋食や風情あふれる個室料亭でゆっくりと堪能できます。
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

            <div key="arashiyama_togetsutei" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>京都府京都市・創業明治三十年！渡月橋南詰の特等席に佇む老舗料亭温泉旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 3.82 <span className="text-stone-400 text-xs">(253件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    京都　嵐山温泉　渡月亭
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 京都府京都市西京区嵐山中尾下町54-4（渡月橋南詰め） ｜ 京都駅よりＪＲ嵯峨野線嵯峨嵐山駅下車徒歩１５分。阪急京都線桂駅より嵐山線嵐山駅下車徒歩５分。名神京都南ＩＣより約４０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838.jpg"
                        alt="京都　嵐山温泉　渡月亭"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      渡月橋の南詰、嵐山温泉の歴史とともに歩んできた創業百二十年を超える名門料亭旅館。嵐山の景観美に溶け込む数寄屋造りの館内には、天然嵐山温泉を引いた大浴場やプライベートな天然温泉貸切風呂を完備。料理旅館の名に恥じない京懐石は、四季の食材を厳選し職人が丹精込めて仕立てる至高の逸品揃いです。朝夕ともにお部屋食プランも充実しており、古都の風雅とおもてなしの真髄を五感で堪能できます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 【料亭旅館】嵐山・嵯峨野散策に最適な京都・嵐山温泉の宿。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　１５台　無料　先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 23,400円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8838%2F8838.html"
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
    

            <div key="arashiyama_kadensho" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>京都府京都市・全館畳敷き＆5つの無料貸切風呂！阪急嵐山駅前すぐの人気和モダン宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.41 <span className="text-stone-400 text-xs">(1,961件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 京都府京都市西京区嵐山西一川町5-4 ｜ 阪急嵐山線「嵐山駅」より徒歩１分。JR「京都駅」より約30分、阪急「梅田駅」より約50分。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/130702/130702.jpg"
                        alt="京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      阪急嵐山駅の目の前に位置し、2026年5月のリニューアルでさらに洗練された共立リゾートの旗艦温泉宿。玄関で靴を脱いだら館内すべてが畳敷きとなっており、素足の心地よさを楽しめます。大浴場のほか、趣の異なる5つの貸切風呂（檜・陶器・岩・竹・レンガ）を予約不要・無料で何度でも利用可能。夕食には四季折々の京会席と天ぷら・おばんざいのオーダーバイキングが楽しめ、若い世代からご年配まで大人気です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 渡月橋まで徒歩約5分！目の前の阪急嵐山駅より京都の中心街まですぐ！天然温泉と5つの貸切風呂が無料！</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 全27台  予約不要 / 先着順  有料※満車の場合、周辺コインパーキングをご利用下さい。</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 16,000円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130702%2F130702.html"
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
    

            <div key="arashiyama_hanaikada" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>京都府京都市・渡月橋と大堰川を一望する絶景展望露天風呂！嵐山温泉の湯元宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.17 <span className="text-stone-400 text-xs">(309件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    嵐山温泉彩四季の宿　花筏
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 京都府京都市西京区嵐山中尾下町57 ｜ 阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。JR京都駅３０分、阪急梅田駅５０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923.jpg"
                        alt="嵐山温泉彩四季の宿　花筏"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      渡月橋のたもとに位置し、嵐山の大自然と清流・大堰川を間近に臨む風情豊かな温泉宿。宿の自慢は最上階に設けられた男女別の展望露天風呂で、色づく嵐山のパノラマを眺めながら嵐山温泉の源泉に浸かる贅沢が味わえます。料理は嵯峨名物の自家製豆腐や旬の京野菜、近江牛を贅沢に盛り込んだ本格京懐石。竹林の小径や渡月橋への早朝散策にも最適なロケーションを誇ります。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　１０台　無料　要予約。最寄りICは大原野IC(花筏まで１５分）</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 24,035円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html"
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

            <li key="furusato-tax-autumn-foliage-open-air-bath-stay">
              <Link
                href="/furusato-tax-autumn-foliage-open-air-bath-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【絶景紅葉露天風呂＆名所旅館×ふるさと納税】定山渓・日光・黒川の名宿
              </Link>
            </li>
  

            <li key="furusato-tax-historical-kaido-post-town-ryokan-stay">
              <Link
                href="/furusato-tax-historical-kaido-post-town-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【歴史街道・宿場町の名旅館×ふるさと納税】中山道・東海道の情緒を巡る旅
              </Link>
            </li>
  

            <li key="furusato-tax-three-great-daimyo-gardens-stay">
              <Link
                href="/furusato-tax-three-great-daimyo-gardens-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【日本三大名園・大名庭園×ふるさと納税】兼六園・後楽園・偕楽園の名宿
              </Link>
            </li>
  

            <li key="furusato-tax-wa-modern-twin-bed-comfortable-ryokan-stay">
              <Link
                href="/furusato-tax-wa-modern-twin-bed-comfortable-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【和モダンツインベッド客室温泉旅館×ふるさと納税】足腰に優しい快適ステイ
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
