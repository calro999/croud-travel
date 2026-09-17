import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '兼六園の雪吊り＆金沢城・紅葉ライトアップ！深谷温泉・湯涌温泉の名湯宿×ふるさと納税完全ガイド【2026年最新秋旅】石川',
  description: '11月1日から始まる兼六園の冬支度「雪吊り（ゆきつり）」と紅葉ライトアップ！秋の金沢・兼六園を巡り、開湯1300年の金沢湯涌温泉や深谷温泉の名湯宿「元湯石屋」「湯の出旅館」「百楽荘」で能登牛やのどぐろを堪能。楽天ふるさと納税トラベルクーポンで実質2,000円で泊まる極上の金沢秋旅ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '金沢・兼六園雪吊り＆名湯温泉宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kenrokuen-yukitsuri-autumn-kanazawa-stay/'
  },
  openGraph: {
    title: '兼六園の雪吊り＆金沢城・紅葉ライトアップ！深谷温泉・湯涌温泉の名湯宿×ふるさと納税完全ガイド【2026年最新秋旅】石川',
    description: '11月1日から始まる兼六園の冬支度「雪吊り（ゆきつり）」と紅葉ライトアップ！秋の金沢・兼六園を巡り、開湯1300年の金沢湯涌温泉や深谷温泉の名湯宿「元湯石屋」「湯の出旅館」「百楽荘」で能登牛やのどぐろを堪能。楽天ふるさと納税トラベルクーポンで実質2,000円で泊まる極上の金沢秋旅ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kenrokuen-yukitsuri-autumn-kanazawa-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FeatureArticlePage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">兼六園雪吊り＆秋のライトアップ・金沢温泉旅館特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              金沢・兼六園雪吊り＆名湯温泉宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              兼六園の雪吊り＆金沢城・紅葉ライトアップ！深谷温泉・湯涌温泉の名湯宿×ふるさと納税完全ガイド【2026年最新秋旅】石川
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              11月1日から始まる兼六園の冬支度「雪吊り（ゆきつり）」と紅葉ライトアップ！秋の金沢・兼六園を巡り、開湯1300年の金沢湯涌温泉や深谷温泉の名湯宿「元湯石屋」「湯の出旅館」「百楽荘」で能登牛やのどぐろを堪能。楽天ふるさと納税トラベルクーポンで実質2,000円で泊まる極上の金沢秋旅ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 11月1日〜11月下旬（雪吊り・秋のライトアップ）
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎫</span> 楽天ふるさと納税トラベルクーポン対象
              </span>
              <span className="flex items-center gap-1.5">
                <span>💰</span> 寄付額の最大30%クーポン還元（実質2,000円）
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* イントロダクション */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200/80 shadow-sm space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
              11月1日解禁の兼六園「雪吊り」と紅葉の競演！美の都・金沢の温泉宿へ
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            加賀百万石の歴史と文化が色濃く残る金沢。毎年11月1日から始まる名勝「兼六園」の雪吊り作業は、北陸に初冬の訪れを告げる風物詩として全国から多くの観光客を惹きつけます。秋の紅葉と唐崎松に施される円錐状の縄の幾何学美、夜の幻想的なライトアップは圧巻の一言。金沢市街から少し足を延ばした「湯涌温泉」や「深谷温泉」の隠れ宿に滞在し、旬を迎えるズワイガニやのどぐろ、加賀野菜の会席料理をふるさと納税トラベルクーポンでお得に満喫しましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">1</span>
                兼六園の雪吊り（11月1日〜）＆唐崎松の円錐美
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                兼六園を象徴する唐崎松をはじめ、園内の銘木を雪の重みから守るために縄を張る「雪吊り」。職人たちが一本一本手作業で縄を張る姿と、残る紅葉の赤や黄色とのコントラストは11月前半ならではの特別な景観です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">2</span>
                金沢城公園・兼六園 四季物語 秋の段（夜間ライトアップ）
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                見頃を迎える11月には、兼六園と金沢城公園で夜間無料開放とライトアップが実施されます。徽軫灯籠（ことじとうろう）や噴水、水面に映り込む紅葉と雪吊りのシルエットが黄金色に輝き、昼とは異なる幽玄な美を堪能できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">3</span>
                近江町市場・加賀の秋味覚「のどぐろ＆加賀野菜」
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                脂の乗った高級魚のどぐろの塩焼きや刺身、加賀れんこんや金時草などの加賀伝統野菜、11月上旬に解禁される香箱ガニ（雌のズワイガニ）など、秋の金沢は美食の宝庫。温泉宿の贅沢な会席料理で存分に味わえます。
              </p>
            </div>
  
          </div>
        </div>
      </section>

      {/* 厳選ホテル一覧 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-amber-800 text-xs md:text-sm font-bold tracking-wider uppercase">Recommended Ryokan & Hotels</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-stone-900">
              ふるさと納税トラベルクーポンで泊まりたい厳選宿3選
            </h2>
            <p className="text-stone-500 text-xs md:text-sm max-w-2xl mx-auto">
              楽天トラベルで高評価を獲得し、ふるさと納税クーポンが使える注目の名宿を徹底紹介。
            </p>
          </div>

          <div className="space-y-8">
            
            <div key="kanazawa_ishiya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>寛政元年創業、深谷温泉に佇む能舞台を持つ唯一無二の老舗秘湯宿！自家源泉のモール泉と加賀懐石</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.57 <span className="text-stone-400 text-xs">(350件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    金沢・深谷温泉　元湯石屋　能舞台のある秘湯の一軒宿
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 石川県金沢市深谷町チ95甲 ｜ JR金沢駅からタクシーで約20分・ IR森本駅からタクシーで約7分・北陸自動車道金沢森本ＩＣより車5分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/50577/50577.jpg"
                        alt="金沢・深谷温泉　元湯石屋　能舞台のある秘湯の一軒宿"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      【金沢奥座敷　深谷温泉の一軒宿】山里の静けさと出会い、都会の喧騒を忘れる。懐かしき時の流れる老舗
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 【金沢奥座敷　深谷温泉の一軒宿】山里の静けさと出会い、都会の喧騒を忘れる。懐かしき時の流れる老舗...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> JR金沢駅からタクシーで約20分・ IR森本駅からタクシーで約7分・北陸自動車道金沢森本ＩＣより車5分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 24,200円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fhs%252FdQ4dX%252F%253Ff_no%253D50577"
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
    

            <div key="kanazawa_yunode" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>金沢の奥座敷・湯涌温泉の純和風数寄屋造り老舗旅館！金沢の旬を映す極上懐石と名湯</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.65 <span className="text-stone-400 text-xs">(350件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    金沢湯涌温泉　湯の出旅館
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 石川県金沢市湯涌荒屋町77-2 ｜ 兼六園より車で25分、金沢駅より車で約40分。金沢森本I.Cから山側環状経由で30分。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/30835/30835.jpg"
                        alt="金沢湯涌温泉　湯の出旅館"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      金沢市街から車で15分〜20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉しみいただける宿。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 金沢市街から車で15分〜20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉しみいただける宿。...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 兼六園より車で25分、金沢駅より車で約40分。金沢森本I.Cから山側環状経由で30分。</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 17,325円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fhs%252FdQ4dX%252F%253Ff_no%253D30835"
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
    

            <div key="kanazawa_hyakuraso" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>九十九湾の名宿「百楽荘」の美学が息づく金沢湯涌温泉のラグジュアリー隠れ宿！個室食事と貸切露天</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.69 <span className="text-stone-400 text-xs">(350件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    金沢湯涌温泉　百楽荘
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 石川県金沢市湯涌荒屋町92-3 ｜ ★金沢中心街より車で20分★「金沢駅・兼六園」より“無料送迎”！お帰りは金沢駅近くへ荷物お届けサービス◎手ぶら観光もOK
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/153452/153452.jpg"
                        alt="金沢湯涌温泉　百楽荘"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      2022楽天ゴールドアワード＆日本の宿47☆ダブル受賞
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 2022楽天ゴールドアワード＆日本の宿47☆ダブル受賞...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> ★金沢中心街より車で20分★「金沢駅・兼六園」より“無料送迎”！お帰りは金沢駅近くへ荷物お届けサービス◎手ぶら観光もOK</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 19,470円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fhs%252FdQ4dX%252F%253Ff_no%253D153452"
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
        </div>
      </section>

      {/* ふるさと納税クーポンの活用手順 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-3xl p-6 md:p-10 border border-amber-200/70 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-amber-800 text-xs font-bold tracking-wider uppercase">How to use</span>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
              楽天ふるさと納税トラベルクーポンの簡単3ステップ
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-600 text-white font-bold text-lg flex items-center justify-center shadow">1</div>
              <h3 className="font-bold text-stone-900 text-base">寄付してクーポン獲得</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                対象自治体へ寄付を申し込むと、寄付額の最大30%相当の楽天トラベルクーポンが即時または数日でマイクーポンに付与されます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-600 text-white font-bold text-lg flex items-center justify-center shadow">2</div>
              <h3 className="font-bold text-stone-900 text-base">対象宿を予約</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                楽天トラベルで希望の宿・宿泊プランを選択。予約画面で取得したふるさと納税クーポンを適用して割引を受けます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-600 text-white font-bold text-lg flex items-center justify-center shadow">3</div>
              <h3 className="font-bold text-stone-900 text-base">実質2,000円で贅沢旅行</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                自己負担額は年間2,000円のみ（上限額内）。翌年の住民税控除や所得税還付を受けながら、最高の秋旅をお楽しみいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター誘導 */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <Link
          href="/features"
          className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-8 rounded-full shadow transition text-sm"
        >
          <span>← 特集記事一覧に戻る</span>
        </Link>
      </footer>
    </main>
  );
}
