import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '富士山と紅葉の絶景コラボ！山中湖「夕焼けの渚紅葉まつり」＆忍野八海と温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】山梨',
  description: '10月下旬〜11月中旬に開催される山中湖「夕焼けの渚 紅葉まつり」！湖畔の旭日丘緑地公園を彩るもみじのライトアップと富士山の絶景、忍野八海の神秘的な湧水、名宿「しずく」「富士マリオットホテル山中湖」「秀山荘」で個室サウナや甲州ワイン牛を堪能。楽天ふるさと納税トラベルクーポンで実質2,000円。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '富士山中湖・紅葉まつり＆忍野八海特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-yamanakako-fuji-autumn-leaves-stay/'
  },
  openGraph: {
    title: '富士山と紅葉の絶景コラボ！山中湖「夕焼けの渚紅葉まつり」＆忍野八海と温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】山梨',
    description: '10月下旬〜11月中旬に開催される山中湖「夕焼けの渚 紅葉まつり」！湖畔の旭日丘緑地公園を彩るもみじのライトアップと富士山の絶景、忍野八海の神秘的な湧水、名宿「しずく」「富士マリオットホテル山中湖」「秀山荘」で個室サウナや甲州ワイン牛を堪能。楽天ふるさと納税トラベルクーポンで実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-yamanakako-fuji-autumn-leaves-stay',
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
        <span className="text-stone-800 font-bold">富士山中湖・夕焼けの渚紅葉まつり＆忍野八海・富士ビュー温泉宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              富士山中湖・紅葉まつり＆忍野八海特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              富士山と紅葉の絶景コラボ！山中湖「夕焼けの渚紅葉まつり」＆忍野八海と温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】山梨
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月下旬〜11月中旬に開催される山中湖「夕焼けの渚 紅葉まつり」！湖畔の旭日丘緑地公園を彩るもみじのライトアップと富士山の絶景、忍野八海の神秘的な湧水、名宿「しずく」「富士マリオットホテル山中湖」「秀山荘」で個室サウナや甲州ワイン牛を堪能。楽天ふるさと納税トラベルクーポンで実質2,000円。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 10月下旬〜11月中旬（夕焼けの渚 紅葉まつりライトアップ）
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
              紅葉と富士山が湖面に映る逆さ富士！山中湖畔の幻想的な秋景色
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            富士五湖の中で最も標高が高く、富士山に最も近い「山中湖」。10月下旬から11月中旬にかけて、湖畔の旭日丘緑地公園を中心に「夕焼けの渚 紅葉まつり」が開催され、約600mにわたるもみじ回廊が夜間美しくライトアップされます。秋の澄み切った空に浮かぶ冠雪の富士山と、湖畔を真っ赤に染める紅葉のコントラストは圧巻。名水百選「忍野八海」の透明度の高い湧水池めぐりと合わせて、富士山を望むプライベートサウナ付き温泉宿や上質リゾートホテルで、甲州牛や山梨ワインをふるさと納税トラベルクーポンでお得に楽しみましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">1</span>
                山中湖・夕焼けの渚 紅葉まつり＆600mのライトアップ回廊
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                日本の渚百選に選ばれた「夕焼けの渚」。夕暮れ時には真っ赤な夕日に染まる富士山と紅葉のコラボ、夜にはライトアップされた木々が湖面に映り込む幻想的な世界が広がります。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">2</span>
                世界遺産・忍野八海（おしにはっかい）の神秘的な透明湧水
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                富士山の雪解け水が数十年の歳月をかけて湧き出る忍野八海。吸い込まれそうなエメラルドグリーンの水鏡に映る紅葉と富士山の絶景は必見です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">3</span>
                甲州ワインビーフ＆富士の恵み・名物ほうとうの美味
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                ワインの搾りかすで育った柔らかくジューシーな「甲州ワインビーフ」、富士山の湧水で打った手打ちそば、旬のカボチャやキノコがたっぷり入った熱々の「ほうとう」を満喫。
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
            
            <div key="yamanakako_shizuku" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>全室に富士山ビューとプライベート個室サウナを完備！天然温泉と贅沢なととのい体験</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.88 <span className="text-stone-400 text-xs">(511件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    富士山の見える全室個室サウナ付旅館　しずく
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県南都留郡山中湖村山中172 ｜ 【都心から中央道or東名道で車2時間】【新宿からのアクセス◎→高速バス：バスタ新宿→山中局入口徒歩5秒】
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/31683/31683.jpg"
                        alt="富士山の見える全室個室サウナ付旅館　しずく"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      【5と0の日MAX20％OFF】【得旅ポイント10倍】【スペシャルクーポンWeek&amp;クーポン祭り】
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 【5と0の日MAX20％OFF】【得旅ポイント10倍】【スペシャルクーポンWeek&amp;クーポン祭り】...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 【都心から中央道or東名道で車2時間】【新宿からのアクセス◎→高速バス：バスタ新宿→山中局入口徒歩5秒】</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 27,000円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D31683"
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
    

            <div key="yamanakako_marriott" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山中湖の森に佇むインターナショナルリゾート！温泉付き客室と上質なグリルダイニング</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.40 <span className="text-stone-400 text-xs">(134件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    富士マリオットホテル山中湖
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県南都留郡山中湖村平野1256-1 ｜ 富士急行線　富士山駅からお車にて約４０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/160833/160833.jpg"
                        alt="富士マリオットホテル山中湖"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      山中湖で心潤うひとときを。40㎡を超える広いお部屋と広い温泉でごゆっくりお過ごしいただけます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 山中湖で心潤うひとときを。40㎡を超える広いお部屋と広い温泉でごゆっくりお過ごしいただけます。...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 富士急行線　富士山駅からお車にて約４０分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 13,642円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D160833"
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
    

            <div key="yamanakako_shuzanso" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>富士山を望む展望風呂と旬の創作和食！静かな森に包まれた癒しの温泉リゾート旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.00 <span className="text-stone-400 text-xs">(456件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    フォレストリゾート　山中湖　秀山荘
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県南都留郡山中湖村平野2505 ｜ 新宿駅より高速バスで２時間１５分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/70889/70889.jpg"
                        alt="フォレストリゾート　山中湖　秀山荘"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      やまなしグリーンゾーンは9/30迄！展望室から望む富士山＆バナジウム含有飲料水が利用可能
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> やまなしグリーンゾーンは9/30迄！展望室から望む富士山＆バナジウム含有飲料水が利用可能...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 新宿駅より高速バスで２時間１５分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 11,918円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D70889"
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
