import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '札幌の奥座敷・定山渓温泉の錦秋渓谷紅葉！豊平峡ダム＆二見吊橋と名湯宿×ふるさと納税完全ガイド【2026年最新秋旅】北海道',
  description: '10月上旬〜10月下旬に見頃を迎える北海道屈指の紅葉名所「定山渓温泉」と「豊平峡ダム」。二見吊橋から望む渓谷美と定山渓ネイチャールミナリエ、名宿「ぬくもりの宿 ふる川」「章月グランドホテル」「翠蝶館」で道産ブランド牛や秋鮭・いくらを堪能。楽天ふるさと納税で実質2,000円で泊まる極上の秋旅ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '北海道・定山渓温泉 錦秋紅葉散策特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-jozankei-autumn-leaves-stay/'
  },
  openGraph: {
    title: '札幌の奥座敷・定山渓温泉の錦秋渓谷紅葉！豊平峡ダム＆二見吊橋と名湯宿×ふるさと納税完全ガイド【2026年最新秋旅】北海道',
    description: '10月上旬〜10月下旬に見頃を迎える北海道屈指の紅葉名所「定山渓温泉」と「豊平峡ダム」。二見吊橋から望む渓谷美と定山渓ネイチャールミナリエ、名宿「ぬくもりの宿 ふる川」「章月グランドホテル」「翠蝶館」で道産ブランド牛や秋鮭・いくらを堪能。楽天ふるさと納税で実質2,000円で泊まる極上の秋旅ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-jozankei-autumn-leaves-stay',
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
        <span className="text-stone-800 font-bold">札幌の奥座敷・定山渓温泉 錦秋紅葉めぐり＆名湯宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              北海道・定山渓温泉 錦秋紅葉散策特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              札幌の奥座敷・定山渓温泉の錦秋渓谷紅葉！豊平峡ダム＆二見吊橋と名湯宿×ふるさと納税完全ガイド【2026年最新秋旅】北海道
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月上旬〜10月下旬に見頃を迎える北海道屈指の紅葉名所「定山渓温泉」と「豊平峡ダム」。二見吊橋から望む渓谷美と定山渓ネイチャールミナリエ、名宿「ぬくもりの宿 ふる川」「章月グランドホテル」「翠蝶館」で道産ブランド牛や秋鮭・いくらを堪能。楽天ふるさと納税で実質2,000円で泊まる極上の秋旅ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 10月上旬〜10月下旬（紅葉・豊平峡ダム観光ピーク期）
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
              札幌市中心部から1時間！黄金色に染まる渓谷美と名湯・定山渓温泉
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            北海道・札幌の奥座敷として古くから親しまれる定山渓温泉。10月上旬から下旬にかけて、豊平川沿いの渓谷や断崖絶壁が赤や黄色のグラデーションに染まりあがり、道内屈指の紅葉パノラマが広がります。名所「二見吊橋」からの渓谷美や、紅葉シャトルバスで向かう「豊平峡ダム」のダイナミックな景観は必見。散策の後は、伝統ある名湯で心身を温め、北海道の秋の味覚（秋鮭、いくら、白老牛、蝦夷アワビなど）を贅沢に味わうひとときを、楽天ふるさと納税トラベルクーポンでお得に満喫しましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">1</span>
                二見吊橋＆かっぱ淵から望む絶景紅葉渓谷
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                豊平川にかかる赤い吊り橋「二見吊橋」から見下ろす二見岩や、澄んだ清流に映る紅葉のグラデーションは定山渓のシンボル。散策路も整備され気軽に紅葉ハイキングが楽しめます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">2</span>
                豊平峡ダムのダイナミックな放流と岩壁紅葉
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                電気バスで向かう「豊平峡（ほうへいきょう）ダム」。巨大なアーチ式コンクリートダムと千丈岩の切り立った岩肌を覆う紅葉の壮大なコントラストは圧巻です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">3</span>
                北海道・秋の海鮮＆道産ブランド牛の極上会席
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                秋に旬を迎える脂の乗った秋鮭やプチプチのいくら、白老牛のサーロインステーキ、旬の道産野菜やキノコを使った創作会席など、秋の北海道ならではの美食を存分に堪能できます。
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
            
            <div key="jozankei_furukawa" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>囲炉裏と民芸の温もりに包まれる人気宿！源泉掛け流し温泉と季節の和食会席が自慢</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.62 <span className="text-stone-400 text-xs">(1397件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    定山渓温泉　ぬくもりの宿　ふる川
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 北海道札幌市南区定山渓温泉西4-353 ｜ じょうてつバス定山渓線定山渓湯の町下車すぐ。無料送迎バス毎日１便運行／大通西１丁目テレビ塔北向かい出発。事前予約制。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/1037/1037.jpg"
                        alt="定山渓温泉　ぬくもりの宿　ふる川"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      道内では珍しい民芸調の宿屋、館内には囲炉裏があり、田舎情緒たっぷり。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 道内では珍しい民芸調の宿屋、館内には囲炉裏があり、田舎情緒たっぷり。...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> じょうてつバス定山渓線定山渓湯の町下車すぐ。無料送迎バス毎日１便運行／大通西１丁目テレビ塔北向かい出発。事前予約制。</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 16,800円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1037"
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
    

            <div key="jozankei_shogetsu" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>全室から豊平川の渓谷美を一望！蜂蜜バイキングと老舗ならではの洗練されたおもてなし</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.42 <span className="text-stone-400 text-xs">(905件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    定山渓温泉　章月グランドホテル
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 北海道札幌市南区定山渓温泉東3-239 ｜ 札幌駅より片道1000円で送迎バス運行！要予約・運休日有／札幌中心部より車で約50分、駐車場有
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/2911/2911.jpg"
                        alt="定山渓温泉　章月グランドホテル"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      定山渓屈指の眺望とラウンジサービスの「蜂蜜バイキング」が大好評！
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 定山渓屈指の眺望とラウンジサービスの「蜂蜜バイキング」が大好評！...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 札幌駅より片道1000円で送迎バス運行！要予約・運休日有／札幌中心部より車で約50分、駐車場有</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 24,750円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2911"
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
    

            <div key="jozankei_suichokan" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>女性のための美と癒しの湯宿！中国茶カフェやエステ、美肌温泉で心身を整える上質ステイ</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.55 <span className="text-stone-400 text-xs">(533件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    定山渓温泉　女性のための宿　翠蝶館（旧：定山渓温泉　Ｓｐａ＆Ｅｓｔｈｅｔｉｑｕｅ　翠蝶館）
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 北海道札幌市南区定山渓温泉西3-57 ｜ 札幌より無料送迎バス運行（要予約） ／ＪＲ札幌駅より車で60分／新千歳空港より車で約2時間
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/44948/44948.jpg"
                        alt="定山渓温泉　女性のための宿　翠蝶館（旧：定山渓温泉　Ｓｐａ＆Ｅｓｔｈｅｔｉｑｕｅ　翠蝶館）"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      「体の内外からキレイになる」がコンセプト。身体にやさしいお料理とエステで自分にご褒美を。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 「体の内外からキレイになる」がコンセプト。身体にやさしいお料理とエステで自分にご褒美を。...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 札幌より無料送迎バス運行（要予約） ／ＪＲ札幌駅より車で60分／新千歳空港より車で約2時間</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 12,590円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D44948"
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
