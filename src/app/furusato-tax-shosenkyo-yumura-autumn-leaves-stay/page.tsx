import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '奇岩巨石と紅葉の断崖美！日本五大渓谷・昇仙峡＆武田信玄公の隠し湯・甲府湯村温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】山梨 | 旅宿クラウド',
  description: '10月下旬〜11月下旬に見頃を迎える「日本一の渓谷美」御岳昇仙峡（覚円峰・仙娥滝）！巨岩奇石と清流を彩る紅葉の遊歩道と、開湯千二百年・武田信玄公の隠し湯「甲府湯村温泉」！皇族も宿泊する名門「常磐ホテル」、太宰治ゆかりの「旅館明治」、自家源泉の「柳屋」。甲州牛会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '日本一の渓谷美・昇仙峡紅葉＆甲府湯村温泉名門宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-shosenkyo-yumura-autumn-leaves-stay/'
  },
  openGraph: {
    title: '奇岩巨石と紅葉の断崖美！日本五大渓谷・昇仙峡＆武田信玄公の隠し湯・甲府湯村温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】山梨',
    description: '10月下旬〜11月下旬に見頃を迎える「日本一の渓谷美」御岳昇仙峡（覚円峰・仙娥滝）！巨岩奇石と清流を彩る紅葉の遊歩道と、開湯千二百年・武田信玄公の隠し湯「甲府湯村温泉」！皇族も宿泊する名門「常磐ホテル」、太宰治ゆかりの「旅館明治」、自家源泉の「柳屋」。甲州牛会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-shosenkyo-yumura-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoShosenkyoYumuraAutumnLeavesStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">昇仙峡覚円峰紅葉＆甲府湯村温泉名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              日本一の渓谷美・昇仙峡紅葉＆甲府湯村温泉名門宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              奇岩巨石と紅葉の断崖美！日本五大渓谷・昇仙峡＆武田信玄公の隠し湯・甲府湯村温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】山形
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月下旬〜11月下旬に見頃を迎える「日本一の渓谷美」御岳昇仙峡（覚円峰・仙娥滝）！巨岩奇石と清流を彩る紅葉の遊歩道と、開湯千二百年・武田信玄公の隠し湯「甲府湯村温泉」！皇族も宿泊する名門「常磐ホテル」、太宰治ゆかりの「旅館明治」、自家源泉の「柳屋」。甲州牛会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            主峰・覚円峰の白い花崗岩に映える真紅のモミジ。武田信玄公が愛した名湯と甲州の秋の味覚に憩う歴史旅へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            国の特別名勝に指定され「日本一の渓谷美」と称される山梨県甲府市の「御岳昇仙峡（みたけしょうせんきょう）」。10月下旬から11月下旬にかけて、落差30mの壮大な「仙娥滝（せんがたき）」や高さ約180mの白く切り立つ主峰「覚円峰（かくえんぼう）」を取り囲む花崗岩の岸壁が一斉にモミジやカエデ、ナナカマドで鮮やかに色づき、清流沿いの遊歩道を歩けば大自然が創り出した彫刻美と紅葉の競演に息を呑みます。そして昇仙峡から車でわずか約20分、甲府の奥座敷に位置するのが、弘法大師が開湯し武田信玄公が陣中傷を癒やす隠し湯とした「甲府湯村温泉」です。弱アルカリ性単純温泉の源泉が毎分豊富に湧き出し、肌触りまろやかで神経痛や疲労回復に優れた効能を発揮。広大な日本庭園と数々の将棋名人戦の舞台として知られる名門「常磐ホテル」、太宰治が名作『パンドラの匣』を執筆した歴史を伝える老舗「旅館明治」、そして豊富な自家源泉を贅沢に掛け流す数寄屋造りの宿「柳屋」。極上の甲州牛溶岩焼きや旬の松茸・甲斐サーモンとともに、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質2,000円で予約し、風情あふれる甲府の秋旅へ出かけましょう。
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
                  特別名勝「昇仙峡」の覚円峰・仙娥滝＆昇仙峡ロープウェイからの富士山ビュー
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                花崗岩の絶壁と清流、紅葉が織りなす圧倒的な渓谷美。ロープウェイ山頂パノラマ台からは紅葉の山々と遠く富士山を望む大パノラマが広がります。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  開湯千二百年！武田信玄公の隠し湯「甲府湯村温泉」の豊富な自家源泉
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                太宰治や井伏鱒二など多くの文豪にも愛された名湯。弱アルカリ性の柔らかな湯が身体を芯から温め、旅の歩き疲れを心地よく解きほぐします。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  最高峰「甲州牛」の鉄板焼き・すき焼き＆甲斐サーモン・名物ほうとう会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                山梨の自然が育んだきめ細やかな霜降り甲州牛や、清流で育った甲斐サーモンのお造り、具だくさんの手打ちほうとう鍋など地場グルメを満喫できます。
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

            <div key="yumura_tokiwa" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山梨県甲府市・三千坪の日本庭園と数寄屋造りの名門旅館！将棋・囲碁の名人戦舞台としても名高い最高峰宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.80 <span className="text-stone-400 text-xs">(1,568件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    信玄の湯　湯村温泉　常磐ホテル
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県甲府市湯村2-5-21 ｜ 中央自動車道、甲府昭和ICから20分／甲府駅南口バスターミナル4番線15分「湯村温泉入口」下車。武田神社は車で15分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/9045/9045.jpg"
                        alt="信玄の湯　湯村温泉　常磐ホテル"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      甲府湯村温泉の中心に位置し、皇族の方々もご宿泊された三千坪の壮麗な日本庭園を有する甲州屈指の高級名門旅館。将棋の竜王戦や名人戦の舞台としても有名で、洗練された数寄屋造りの客室からは庭園美を一望。広々とした大浴場や露天風呂で湯村の名湯を満喫できます。夕食には最高級甲州牛ステーキや全国から厳選した旬の素材を贅沢に盛り込んだ極上会席料理を提供。一流のホスピタリティが約束された名宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 日本旅館の感性と、都市型ホテルの利便性を兼備えた、皇室もご利用なさる甲府の迎賓館</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　２５０台　無料　EV対応　普通充電器［交流 8ｋW］4基　１回1000円　先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 20,900円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9045%2F9045.html"
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
    

            <div key="yumura_meiji" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山梨県甲府市・文豪・太宰治が逗留し執筆した歴史宿！自家源泉掛け流しと心尽くしの手作り郷土料理</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.43 <span className="text-stone-400 text-xs">(132件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県甲府市湯村3-10-14 ｜ 甲府駅よりお車で約10分、中央自動車双葉ＩＣより約10分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/196489/196489.jpg"
                        alt="信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      昭和初期に文豪・太宰治が約1ヶ月間滞在し『パンドラの匣』を書き上げた部屋が今も残る歴史ある温泉旅館。敷地内から湧き出る自家源泉を贅沢に100％掛け流した大浴場「信玄の湯」は、24時間いつでも生まれたての名湯を堪能できます。夕食には甲州名物の馬刺しやほうとう、手作りの季節会席が並び、文学の薫りと温かなおもてなしに包まれる特別なひとときを過ごせます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 2025年8月1日新規オープン！信玄の湯とこだわりの朝ごはんで心ほぐれるひと時を。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 15台　無料　★要予約※駐車場所についてはご到着先着順です。近くの空地スペースになる場合がございます</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 9,900円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196489%2F196489.html"
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
    

            <div key="yumura_yanagiya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>山梨県甲府市・創業昭和二年の数寄屋造り温泉宿！中庭を望む露天風呂と甲州ワイン・地酒ペアリング</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 3.96 <span className="text-stone-400 text-xs">(180件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    甲州湯村温泉　柳屋
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 山梨県甲府市湯村3-16-2 ｜ 甲府駅よりお車にて約１５分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/165690/165690.jpg"
                        alt="甲州湯村温泉　柳屋"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      湯村温泉の閑静な一角に建ち、風情ある中庭と数寄屋建築の温もりが心地よい老舗旅館。湯量豊富な自家源泉を引いた大浴場や露天風呂で、肌に優しい弱アルカリ性の温泉をじっくりと体感できます。夕食には山梨県産の厳選食材を使った季節の和食会席膳を提供し、地元勝沼ワインや山梨の銘酒とのペアリングも充実。静かに大人の温泉時間を楽しみたい旅行者に愛されています。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 部屋から眺める自然庭園と信玄の隠し湯♪湯村温泉</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　４０台　無料　予約不要</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 9,900円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165690%2F165690.html"
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

            <li key="furusato-tax-koshu-winery-harvest-autumn-wine-resort-stay">
              <Link
                href="/furusato-tax-koshu-winery-harvest-autumn-wine-resort-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【山梨甲州ワイナリー新酒＆石和温泉×ふるさと納税】秋のワインリゾート旅
              </Link>
            </li>
  

            <li key="furusato-tax-autumn-sengokuhara-silver-grass-hotspring-stay">
              <Link
                href="/furusato-tax-autumn-sengokuhara-silver-grass-hotspring-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【箱根仙石原ススキ草原＆にごり湯×ふるさと納税】黄金の海と名湯宿
              </Link>
            </li>
  

            <li key="furusato-tax-tangible-cultural-property-architectural-ryokan-stay">
              <Link
                href="/furusato-tax-tangible-cultural-property-architectural-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【登録有形文化財の宿×ふるさと納税】匠の建築美と歴史を味わう名門旅館
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
