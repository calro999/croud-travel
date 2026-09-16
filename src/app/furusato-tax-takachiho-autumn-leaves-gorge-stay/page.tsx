import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '神話の渓谷を彩る真名井の滝と紅葉！国見ヶ丘雲海・天岩戸神社＆高千穂名宿×ふるさと納税完全ガイド【2026年最新秋旅】宮崎 | 旅宿クラウド',
  description: '11月上旬〜下旬に見頃を迎える日本屈指のパワースポット「高千穂峡（真名井の滝）」。貸しボートから見上げる紅葉の柱状節理と、国見ヶ丘の奇跡の雲海、夜神楽が奉納される天岩戸神社！「旅館 神仙」「旅館 大和屋」「今国旅館」。日本一の高千穂牛を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '神話の里・高千穂峡紅葉ボート＆高千穂最高峰名旅館特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-takachiho-autumn-leaves-gorge-stay/'
  },
  openGraph: {
    title: '神話の渓谷を彩る真名井の滝と紅葉！国見ヶ丘雲海・天岩戸神社＆高千穂名宿×ふるさと納税完全ガイド【2026年最新秋旅】宮崎',
    description: '11月上旬〜下旬に見頃を迎える日本屈指のパワースポット「高千穂峡（真名井の滝）」。貸しボートから見上げる紅葉の柱状節理と、国見ヶ丘の奇跡の雲海、夜神楽が奉納される天岩戸神社！「旅館 神仙」「旅館 大和屋」「今国旅館」。日本一の高千穂牛を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-takachiho-autumn-leaves-gorge-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoTakachihoAutumnLeavesGorgeStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">高千穂峡真名井の滝紅葉＆高千穂名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              神話の里・高千穂峡紅葉ボート＆高千穂最高峰名旅館特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              神話の渓谷を彩る真名井の滝と紅葉！国見ヶ丘雲海・天岩戸神社＆高千穂名宿×ふるさと納税完全ガイド【2026年最新秋旅】宮崎
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              11月上旬〜下旬に見頃を迎える日本屈指のパワースポット「高千穂峡（真名井の滝）」。貸しボートから見上げる紅葉の柱状節理と、国見ヶ丘の奇跡の雲海、夜神楽が奉納される天岩戸神社！「旅館 神仙」「旅館 大和屋」「今国旅館」。日本一の高千穂牛を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            エメラルドグリーンの水面に降り注ぐ真名井の滝と、柱状節理を彩る錦秋。神話の息づく聖地で魂を浄化する秋旅へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            天孫降臨の地として日本神話の舞台となった宮崎県西臼杵郡「高千穂（たかちほ）」。11月上旬から下旬にかけて、阿蘇の火山活動によって形成された高さ80〜100mの柱状節理が連なる「高千穂峡」では、名瀑「真名井の滝」を取り囲むモミジやツタが一斉に鮮やかな赤や黄に染まります。手漕ぎの貸しボートに乗って水面から見上げる滝と紅葉のパノラマは、息を呑むほど神聖で圧倒的な美しさ。さらに早朝には「国見ヶ丘」から阿蘇五岳や高千穂盆地を覆い尽くす奇跡の「雲海」に出会え、夜には高千穂神社境内で国の重要無形民俗文化財「高千穂の夜神楽」が毎夜奉納されるなど、秋の高千穂は一年で最も神秘的な輝きを放ちます。そんな神話の里で至高の滞在を約束するのが、数寄屋造りの離れとミシュラン掲載の本格京風懐石を誇る九州最高峰の高級旅館「旅館 神仙」、高千穂神社のすぐそばに佇み温かいおもてなしと郷土料理を届ける「旅館 大和屋」、そして高千穂観光の拠点として百年以上の歴史を刻む老舗「今国旅館」。内閣総理大臣賞を受賞した最高峰ブランド「高千穂牛」のステーキとともに、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質2,000円で賢く予約し、一生の宝物となる神話紅葉の旅へ出かけましょう。
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
                  名瀑「真名井の滝」の紅葉貸しボート＆国見ヶ丘から望む奇跡の大雲海
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                柱状節理の渓谷美を間近に体感できるボートクルーズ。秋の早朝には、山々が海に浮かぶ島のように見える幻想的な国見ヶ丘の雲海が広がります。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  高千穂神社の「夜神楽」鑑賞＆天照大神が隠れた天岩戸神社・天安河原参拝
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                三十三番の神楽から代表的な四番を毎夜鑑賞できる高千穂神社夜神楽。願い事が叶うとされる天安河原の無数の積石など、最強のパワースポットを巡れます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  全国和牛能力共進会で日本一！最高峰ブランド「高千穂牛」の極上会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                きめ細やかなサシと芳醇な赤身の旨味が絶賛される高千穂牛ステーキ。地元の竹を使った竹割かっぽ酒や高千穂の旬菜会席が旅情を深めてくれます。
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

            <div key="takachiho_shinsen" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>宮崎県高千穂町・九州屈指の高級料亭旅館！数寄屋造りの離れ客室と最高峰高千穂牛会席の至高ステイ</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.79 <span className="text-stone-400 text-xs">(244件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    高千穂　旅館　神仙
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 宮崎県西臼杵郡高千穂町三田井1127-5 ｜ 高千穂バスセンターよりタクシーで５分／九州自動車道　松橋ＩＣより車で約１００分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/30082/30082.jpg"
                        alt="高千穂　旅館　神仙"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      神話の里・高千穂の閑静な一角に佇み、各界のVIPや美食家に愛され続ける九州最高峰の高級料亭旅館。日本の伝統美を極めた数寄屋造りの離れ客室には、檜の内湯や専用露天風呂、手入れの行き届いた日本庭園が備わります。夕食には日本一に輝いた最高級高千穂牛のステーキや、全国の旬の厳選素材を熟練の料理人が一品一品手作りで仕立てる至高の懐石料理をお部屋で優雅に堪能。本物のおもてなしと贅沢を極めた名宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> ＜クチコミ総合4.8＞最高の心のおもてなしと至福のひと時</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有　２０台　無料　先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 49,500円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30082%2F30082.html"
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
    

            <div key="takachiho_yamatoya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>宮崎県高千穂町・高千穂神社まで徒歩3分の特等席！夜神楽鑑賞へのアクセス抜群な老舗旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.38 <span className="text-stone-400 text-xs">(362件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    旅館　大和屋
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 宮崎県西臼杵郡高千穂町三田井1148 ｜ 高千穂バスセンターより徒歩５分　延岡駅より車で１時間（２１８号経由）　熊本空港より車で１時間半（５７～３２５号線経由）
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/14067/14067.jpg"
                        alt="旅館　大和屋"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      高千穂神社のすぐそばに位置し、毎夜開催される高千穂の夜神楽拝観に絶好のロケーションを誇る創業百年の温泉旅館。大浴場には肌触りの良いお湯が注がれ、神話巡りで歩き疲れた身体を優しく癒やしてくれます。夕食には地元産高千穂牛の陶板焼きや山女魚の塩焼き、旬の山菜を取り入れた心づくしの郷土会席料理を提供。親しみやすく温かなスタッフのおもてなしが旅人を温かく迎えてくれます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 高千穂神社まで徒歩10分　約105年続く田舎料理が自慢のお宿です</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　20台　無料　</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 19,800円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14067%2F14067.html"
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
    

            <div key="takachiho_imakuni" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>宮崎県高千穂町・高千穂バスセンター徒歩約1分！大浴場完備で観光やビジネスの拠点に最適な老舗宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 3.83 <span className="text-stone-400 text-xs">(75件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    今国旅館
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 宮崎県西臼杵郡高千穂町三田井803-4 ｜ ＪＲ延岡駅や熊本から特急バス、福岡より高速バスにて高千穂バスセンター下車後徒歩１分！！
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/67190/67190.jpg"
                        alt="今国旅館"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      高千穂の中心街・バスセンターから徒歩1分の好立地に建ち、高千穂峡や天岩戸神社など主要観光地へのアクセスが非常にスムーズな老舗ホテル旅館。館内には広々とした大浴場を備えており、ゆったりと手足を伸ばして入浴できます。夕食には高千穂牛や宮崎の地鶏、旬の郷土料理を味わえるプランを用意。一人旅からグループ旅行まで幅広い旅行者に親しまれている利便性抜群の宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 街の中心にあり観光・ビジネスの拠点に最適！山菜を盛り込んだ季節の料理とかっぽ酒もご賞味下さい。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　100台　無料　予約不要</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 10,100円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67190%2F67190.html"
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

            <li key="furusato-tax-yabakei-kurokawa-autumn-leaves-stay">
              <Link
                href="/furusato-tax-yabakei-kurokawa-autumn-leaves-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【耶馬渓紅葉＆黒川温泉×ふるさと納税】奇岩絶景と露天風呂めぐり
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
  

            <li key="furusato-tax-private-villa-hanare-hideaway-stay">
              <Link
                href="/furusato-tax-private-villa-hanare-hideaway-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿
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
