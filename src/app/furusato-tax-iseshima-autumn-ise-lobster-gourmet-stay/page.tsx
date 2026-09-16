import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '10月漁解禁！本場・伊勢志摩の活伊勢海老・あわび・松阪牛尽くし美食温泉旅館×ふるさと納税完全ガイド【2026年最新秋旅】鳥取本浦・相差 | 旅宿クラウド',
  description: '10月に待ちに待った伊勢エビ漁が解禁！本場・伊勢志摩鳥羽でプリップリの伊勢海老お造り・鬼殻焼き・伊勢海老汁を味わい尽くす！自家源泉「珠光の湯」を誇る「サン浦島 悠季の里」、老舗名門「戸田家」、女性に優しい美肌宿「鳥羽ビューホテル 花真珠」。極上の秋の味覚を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '伊勢志摩・鳥羽 10月解禁！秋の初物活伊勢海老まつり名宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-iseshima-autumn-ise-lobster-gourmet-stay/'
  },
  openGraph: {
    title: '10月漁解禁！本場・伊勢志摩の活伊勢海老・あわび・松阪牛尽くし美食温泉旅館×ふるさと納税完全ガイド【2026年最新秋旅】鳥取本浦・相差',
    description: '10月に待ちに待った伊勢エビ漁が解禁！本場・伊勢志摩鳥羽でプリップリの伊勢海老お造り・鬼殻焼き・伊勢海老汁を味わい尽くす！自家源泉「珠光の湯」を誇る「サン浦島 悠季の里」、老舗名門「戸田家」、女性に優しい美肌宿「鳥羽ビューホテル 花真珠」。極上の秋の味覚を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-iseshima-autumn-ise-lobster-gourmet-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoIseshimaAutumnIseLobsterStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">伊勢志摩・鳥羽 初物伊勢海老名門温泉宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              伊勢志摩・鳥羽 10月解禁！秋の初物活伊勢海老まつり名宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              10月漁解禁！本場・伊勢志摩の活伊勢海老・あわび・松阪牛尽くし美食温泉旅館×ふるさと納税完全ガイド【2026年最新秋旅】鳥取本浦・相差
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月に待ちに待った伊勢エビ漁が解禁！本場・伊勢志摩鳥羽でプリップリの伊勢海老お造り・鬼殻焼き・伊勢海老汁を味わい尽くす！自家源泉「珠光の湯」を誇る「サン浦島 悠季の里」、老舗名門「戸田家」、女性に優しい美肌宿「鳥羽ビューホテル 花真珠」。極上の秋の味覚を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            透き通る身の圧倒的な甘みと弾力、香ばしく焼ける味噌の芳香。10月解禁の本場・伊勢海老を名湯とともに味わう贅沢
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            秋の訪れとともに日本全国の美食家が三重県・伊勢志摩を目指す最大の理由、それが毎年10月に一斉に解禁される「伊勢志摩の伊勢エビ漁」です。産卵期を終えて身がぎっしりと詰まり、海水温の低下とともに甘みを極限まで蓄えた秋の初物伊勢海老は、まさに海の宝石。口に入れた瞬間に弾けるような弾力と上品な甘みが広がる「お造り」、炭火の熱で旨味が凝縮した「鬼殻焼き（炭火焼き）」、そして頭の濃厚なカニ味噌のようなエビ味噌から出汁をとった「伊勢海老の赤出汁」まで、本場ならではの鮮度と豪快さで堪能できます。さらに伊勢神宮（内宮・外宮）への秋の御礼参りや、穏やかな鳥羽湾・英虞湾のリアス式海岸の絶景巡りも秋旅の大きな魅力。伊勢志摩屈指の自家源泉と二本のpH9以上の美肌温泉を湛える「サン浦島 悠季の里」、鳥羽駅前すぐの好立地に多彩な湯巡り風呂と老舗の味を誇る「戸田家」、そして鳥羽湾の高台から絶景を望む女性に大人気の美肌温泉宿「鳥羽ビューホテル 花真珠」。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して実質自己負担2,000円で賢く予約し、至福の伊勢海老美食旅へ出かけましょう。
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
                  10月解禁の初物！本場・伊勢志摩の獲れたて「活伊勢海老」フルコース
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                ピチピチと動く鮮度抜群の伊勢海老のお造り、香ばしい焼き伊勢海老、エビ味噌が溶け出す具だくさんの赤出汁と、伊勢海老の旨味を余すところなく味わえます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  伊勢神宮秋の参拝とおかげ横丁散策！紅葉の五十鈴川と神聖な森のパワー
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                気候爽やかな秋は伊勢神宮参拝のベストシーズン。神域を流れる五十鈴川の紅葉を愛で、おかげ横丁で赤福や伊勢うどんの食べ歩きを楽しめます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  pH9以上の美肌名湯「鳥羽本浦温泉」と鳥羽湾・英虞湾のオーシャンビュー
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                とろりとした肌触りで湯上がりの肌をしっとりスベスベにする良質なアルカリ性温泉。波静かなリアス式海岸の海を眺めながら極上のリラクゼーションに浸れます。
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

            <div key="toba_sunurasima" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>三重県鳥羽市・二本の自家源泉「珠光の湯」！伊勢志摩屈指の美肌名湯と伊勢海老・あわび懐石の宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.65 <span className="text-stone-400 text-xs">(1,027件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    鳥羽本浦温泉　サン浦島　悠季の里
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 三重県鳥羽市本浦温泉 ｜ 伊勢自動車道→伊勢二見鳥羽ライン→直進約２５分/近鉄鳥羽駅1番出口より無料送迎バス約20分（要予約）15時16時17時
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/8647/8647.jpg"
                        alt="鳥羽本浦温泉　サン浦島　悠季の里"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      鳥羽の本浦温泉に佇み、敷地内から湧き出る2本のアルカリ性単純温泉（pH9以上）を贅沢に湛えるハイクラス温泉旅館。広大な大浴場「珠光の湯」や庭園露天風呂、貸切風呂で極上の美肌湯巡りが楽しめます。10月解禁の伊勢海老シーズンには、活伊勢海老のお造りや焼き物、伊勢志摩名物のあわび、松阪牛を取り入れた贅を極める特選会席を提供。穏やかな生浦湾の風景を眺めながら、心尽くしのおもてなしに憩えます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 【口コミ4.8】伊勢志摩の旬の味覚、2種の源泉と趣の異なる湯めぐりで、”心あたたまる”海辺の温泉旅館</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り １００台 無料 </div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 19,662円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8647%2F8647.html"
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
    

            <div key="toba_todaya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>三重県鳥羽市・創業天保元年（約190年）！鳥羽駅徒歩3分・十三の多彩な湯巡りと伊勢湾バイキング</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.44 <span className="text-stone-400 text-xs">(2,262件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    伊勢志摩国立公園　／　鳥羽温泉郷　戸田家
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 三重県鳥羽市鳥羽1丁目24-26 ｜ 【電車】近鉄・JR鳥羽駅より徒歩3分（送迎有）【お車】伊勢道伊勢ICより伊勢二見鳥羽ライン経由約15分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/4761/4761.jpg"
                        alt="伊勢志摩国立公園　／　鳥羽温泉郷　戸田家"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      鳥羽湾を望む絶好のロケーションに建ち、天保元年創業の歴史と伝統を誇る鳥羽を代表する名門ホテル。館内には回転展望風呂や野天風呂「湯めぐり館」、無料の足湯など13もの多彩なお風呂が揃い、宿にいながら本格的な湯巡りが満喫できます。夕食は解禁伊勢海老をはじめとする伊勢湾の新鮮魚介や松阪牛を味わう会席料理、またはオープンキッチンで揚げたて・焼きたてを提供する豪華ディナービュッフェから選択可能です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 【鳥羽駅徒歩圏内の温泉旅館】鳥羽湾一望の客室と13の湯めぐり、地魚解体ショーが人気</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有150台（無料）・電気自動車（EV・PHV）【EV充電エネチェンジ】</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 9,240円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4761%2F4761.html"
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
    

            <div key="toba_hanashinju" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>三重県鳥羽市・鳥羽湾の高台から見下ろすオーシャンパノラマ！バラ風呂と伊勢海老の彩り会席</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.38 <span className="text-stone-400 text-xs">(1,676件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    鳥羽ビューホテル　花真珠
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 三重県鳥羽市安楽島町1075-98 ｜ 伊勢神宮より車で３０分/近鉄 鳥羽駅から車で8分／伊勢自動車道伊勢西ＩＣより２５分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/15548/15548.jpg"
                        alt="鳥羽ビューホテル　花真珠"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      鳥羽の高台に位置し、ロビーや客室、展望風呂から鳥羽湾の絶景パノラマを一望できる女性に大人気の温泉リゾート旅館。敷地内に自家源泉を持ち、生花を浮かべた女性専用「バラ風呂」や絶景露天風呂で贅沢な湯浴みが叶います。夕食には解禁されたばかりのぷりぷり伊勢海老やあわび陶板焼き、伊勢うどんなど地場名物を彩り鮮やかに仕立てた会席料理を提供。女子旅やカップルの記念日旅行に絶大な支持を集めています。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> ★★ファミリー旅おすすめ！【キッズパーク】完備★★　鳥羽でココだけ！【絶景露天】×【バラ風呂】</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　50台　無料　先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 15,675円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15548%2F15548.html"
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

            <li key="furusato-tax-matsuba-echizen-crab-season-opening-onsen-stay">
              <Link
                href="/furusato-tax-matsuba-echizen-crab-season-opening-onsen-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【松葉ガニ・越前ガニ解禁名宿×ふるさと納税】本場の初物カニ尽くし旅
              </Link>
            </li>
  

            <li key="furusato-tax-sunset-ocean-magic-hour-stay">
              <Link
                href="/furusato-tax-sunset-ocean-magic-hour-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【海と夕日のマジックアワー温泉宿×ふるさと納税】絶景オーシャンビュー
              </Link>
            </li>
  

            <li key="furusato-tax-brand-jidori-mizutaki-gourmet-stay">
              <Link
                href="/furusato-tax-brand-jidori-mizutaki-gourmet-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【地鶏＆ご当地グルメ名宿×ふるさと納税】秋の美食探訪の旅
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
