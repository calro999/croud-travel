import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '都心から1時間の絶景！高尾山もみじまつり＆秋川渓谷・八王子名宿×ふるさと納税完全ガイド【2026年最新秋旅】東京',
  description: '11月上旬〜12月上旬に開催される「高尾山もみじまつり」！日本一の急勾配を行くケーブルカーからの紅葉トンネルと薬王院の秋、八王子の「京王プラザホテル八王子」「the b 八王子」や秋川渓谷の老舗「兜家旅館」に滞在し、名物とろろそばや炭火焼き料理を楽天ふるさと納税で実質2,000円で満喫する完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '東京・高尾山紅葉＆八王子・秋川渓谷特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-takaosan-autumn-leaves-festival-stay/'
  },
  openGraph: {
    title: '都心から1時間の絶景！高尾山もみじまつり＆秋川渓谷・八王子名宿×ふるさと納税完全ガイド【2026年最新秋旅】東京',
    description: '11月上旬〜12月上旬に開催される「高尾山もみじまつり」！日本一の急勾配を行くケーブルカーからの紅葉トンネルと薬王院の秋、八王子の「京王プラザホテル八王子」「the b 八王子」や秋川渓谷の老舗「兜家旅館」に滞在し、名物とろろそばや炭火焼き料理を楽天ふるさと納税で実質2,000円で満喫する完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-takaosan-autumn-leaves-festival-stay',
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
        <span className="text-stone-800 font-bold">東京・高尾山もみじまつり＆八王子・秋川渓谷名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              東京・高尾山紅葉＆八王子・秋川渓谷特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              都心から1時間の絶景！高尾山もみじまつり＆秋川渓谷・八王子名宿×ふるさと納税完全ガイド【2026年最新秋旅】東京
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              11月上旬〜12月上旬に開催される「高尾山もみじまつり」！日本一の急勾配を行くケーブルカーからの紅葉トンネルと薬王院の秋、八王子の「京王プラザホテル八王子」「the b 八王子」や秋川渓谷の老舗「兜家旅館」に滞在し、名物とろろそばや炭火焼き料理を楽天ふるさと納税で実質2,000円で満喫する完全ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 11月上旬〜12月上旬（高尾山もみじまつり）
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
              年間登山者数世界一の霊峰・高尾山が真っ赤に燃える秋
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            新宿から京王線で約50分という抜群のアクセスを誇る霊峰・高尾山。ミシュラン三ツ星観光地にも選ばれたこの山は、11月になると山頂から麓までが一斉に色づき、日本屈指の紅葉パラダイスとなります。日本一急勾配のケーブルカー車窓から眺める紅葉のアーチ、歴史ある薬王院の境内を彩るカエデの美しさは息をのむほど。登山や散策の後は、八王子市内の快適シティホテルや、大自然が残る秋川渓谷の老舗温泉旅館に宿泊し、名物の高尾山とろろそばや多摩の山の幸をふるさと納税トラベルクーポンでお得に楽しみましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">1</span>
                高尾山ケーブルカー＆リフトから見上げる紅葉のアーチ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                清滝駅から高尾山駅まで最急勾配31度18分を誇るケーブルカー。両脇から迫る鮮やかなもみじのトンネルをくぐり抜ける体験は高尾山紅葉のハイライトです。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">2</span>
                高尾山薬王院有喜寺の境内と山頂からの富士山眺望
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                天狗信仰で知られる薬王院の朱塗りの社殿と紅葉のコントラスト。澄んだ秋晴れの山頂（標高599m）からは、雪化粧した富士山の絶景を一望できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">3</span>
                名物・高尾山とろろそば＆多摩の地酒・炭火料理
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                高尾山参道に軒を連ねる蕎麦処で味わう滋養強壮「とろろそば」、秋川渓谷の清流で育った鮎や山菜、老舗旅館で味わう囲炉裏炭火焼き料理など秋の味覚が充実。
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
            
            <div key="takaosan_keioplaza" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>JR八王子駅北口徒歩1分の好立地シティホテル！快適な客室と高尾山へのスムーズなアクセス</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.28 <span className="text-stone-400 text-xs">(350件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    京王プラザホテル八王子
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 東京都八王子市旭町14-1 ｜ JR京王八王子駅からは歩行者専用デッキ経由で徒歩2分の楽々アクセス／中央道八王子ICから車で15分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/1582/1582.jpg"
                        alt="京王プラザホテル八王子"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      【八王子駅から徒歩2分】施設＆サービス充実の総合シティホテル。羽田空港へはリムジンバスで楽々
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 【八王子駅から徒歩2分】施設＆サービス充実の総合シティホテル。羽田空港へはリムジンバスで楽々...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> JR京王八王子駅からは歩行者専用デッキ経由で徒歩2分の楽々アクセス／中央道八王子ICから車で15分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 9,318円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fhs%252FdQ4dX%252F%253Ff_no%253D1582"
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
    

            <div key="takaosan_theb" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>八王子駅近くで機能的かつスタイリッシュなステイ！清潔感あふれる快適空間で観光の拠点に最適</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 3.99 <span className="text-stone-400 text-xs">(4100件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    ｔｈｅ　ｂ　八王子（ザビー　はちおうじ）
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 東京都八王子市明神町4-6-12 ｜ 京王線「京王八王子駅」中央口より徒歩1分、JR「八王子駅」北口より徒歩7分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/4907/4907.jpg"
                        alt="ｔｈｅ　ｂ　八王子（ザビー　はちおうじ）"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      京王線八王子駅徒歩1分！高尾山まで至近＆空港リムジンバス目の前【Wi-Fi 増強工事を実施しました】
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 京王線八王子駅徒歩1分！高尾山まで至近＆空港リムジンバス目の前【Wi-Fi 増強工事を実施しました】...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 京王線「京王八王子駅」中央口より徒歩1分、JR「八王子駅」北口より徒歩7分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 4,800円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4907"
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
    

            <div key="akigawa_kabutoya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>秋川渓谷の奥深くに建つ創業数百年の茅葺き屋根老舗旅館！山菜料理と炭火焼きの贅沢</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.56 <span className="text-stone-400 text-xs">(232件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    兜家旅館
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 東京都西多摩郡檜原村数馬2612 ｜ 武蔵五日市駅より西東京バス「数馬行き」乗車１時間。終点下車徒歩１０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/72893/72893.jpg"
                        alt="兜家旅館"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      緑ふかい山々に抱かれた、奥多摩檜原村。南北朝時代の落人伝説を秘めた数馬の里に当兜家旅館はあります。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 緑ふかい山々に抱かれた、奥多摩檜原村。南北朝時代の落人伝説を秘めた数馬の里に当兜家旅館はあります。...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 武蔵五日市駅より西東京バス「数馬行き」乗車１時間。終点下車徒歩１０分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 19,800円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D72893"
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
