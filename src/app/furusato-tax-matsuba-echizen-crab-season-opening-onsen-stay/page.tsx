import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '11月6日漁解禁！本場の初物松葉ガニ・越前ガニ尽くし名門温泉旅館×ふるさと納税完全ガイド【2026年最新冬旅先取り】城崎・越前海岸 | 旅宿クラウド',
  description: '毎年11月6日に待ちに待った漁が解禁！日本海の冬の王様「松葉ガニ（山陰）」＆「越前ガニ（福井）」をタグ付き本場で味わい尽くす！カニ刺し・焼きガニ・甲羅みそ焼き・カニすき鍋と名湯七湯めぐりを誇る城崎温泉「西村屋ホテル招月庭」「かに庵」、越前海岸の絶景貸切風呂「さかな遊びの宿 やまちょう」。楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '山陰・北陸 11月解禁！初物松葉ガニ＆越前ガニ極上温泉宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-matsuba-echizen-crab-season-opening-onsen-stay/'
  },
  openGraph: {
    title: '11月6日漁解禁！本場の初物松葉ガニ・越前ガニ尽くし名門温泉旅館×ふるさと納税完全ガイド【2026年最新冬旅先取り】城崎・越前海岸',
    description: '毎年11月6日に待ちに待った漁が解禁！日本海の冬の王様「松葉ガニ（山陰）」＆「越前ガニ（福井）」をタグ付き本場で味わい尽くす！カニ刺し・焼きガニ・甲羅みそ焼き・カニすき鍋と名湯七湯めぐりを誇る城崎温泉「西村屋ホテル招月庭」「かに庵」、越前海岸の絶景貸切風呂「さかな遊びの宿 やまちょう」。楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-matsuba-echizen-crab-season-opening-onsen-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoMatsubaEchizenCrabSeasonStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">松葉ガニ・越前ガニ解禁名門温泉宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              山陰・北陸 11月解禁！初物松葉ガニ＆越前ガニ極上温泉宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              11月6日漁解禁！本場の初物松葉ガニ・越前ガニ尽くし名門温泉旅館×ふるさと納税完全ガイド【2026年最新冬旅先取り】城崎・越前海岸
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              毎年11月6日に待ちに待った漁が解禁！日本海の冬の王様「松葉ガニ（山陰）」＆「越前ガニ（福井）」をタグ付き本場で味わい尽くす！カニ刺し・焼きガニ・甲羅みそ焼き・カニすき鍋と名湯七湯めぐりを誇る城崎温泉「西村屋ホテル招月庭」「かに庵」、越前海岸の絶景貸切風呂「さかな遊びの宿 やまちょう」。楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            花開く純白のカニ刺し、炭火で香ばしく焼ける濃厚な甲羅みそ。11月解禁の初物ブランド蟹を本場・名湯で味わう至福
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            日本全国の美食家が一年で最も心待ちにしている冬の風物詩、それが毎年11月6日に一斉に解禁される「日本海のズワイガニ漁（山陰の松葉ガニ、北陸の越前ガニ）」です。水揚げ港の黄色や青色のブランドタグが証明する正真正銘の本物ガニは、身の締まり、上品な甘み、そして芳醇なカニ味噌の濃厚さが格別。透き通るような身が花咲く「カニ刺し」、香ばしい煙とともに甘みが凝縮する「焼きガニ」、濃厚な味噌に身を絡めて味わう「甲羅みそ焼き」、出汁の旨みが染み渡る「カニすき鍋」と最後の「カニ雑炊」まで、まさにカニ尽くしのフルコースを堪能できます。五万坪の大庭園と洗練されたおもてなしを誇る城崎温泉の名門「西村屋ホテル招月庭」、カニ料理一筋で極上の味を届ける名宿「医食同源の宿 かに庵」、そして越前海岸の波打ち際に建ち越前ガニと北陸の海の幸を貸切風呂とともに味わう「さかな遊びの宿 やまちょう」。11月〜冬の予約殺到シーズンを前に、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、極上の初物カニ旅へ出かけましょう。
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
                  11月6日解禁！水揚げ港タグ付きの本場「活松葉ガニ・越前ガニ」フルコース
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                冷凍物とは別次元の圧倒的な甘みと弾力。カニ刺し、焼きガニ、茹でガニ、甲羅みそ、カニすき鍋と、カニの旨味を余すところなく堪能できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  城崎温泉の情緒あふれる「外湯めぐり」や日本海の荒波を望む絶景温泉
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                浴衣に下駄を鳴らして柳並木の温泉街を歩く城崎の七湯めぐりや、越前海岸に沈む夕日を眺める露天風呂など、名湯が身体の芯まで温めてくれます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  但馬牛・若狭牛・地魚の舟盛り！日本海の極上冬の味覚を贅沢に食べ比べ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                カニだけでなく、最高峰の黒毛和牛ステーキや、朝獲れの寒ブリ、アオリイカなど山陰・北陸ならではの豊かな海の幸・山の幸が饗宴を広げます。
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

            <div key="kinosaki_shogetsutei" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>兵庫県豊岡市・創業百六十年の歴史を誇る西村屋の別館！五万坪の森林庭園に抱かれる最高峰ホテル</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.72 <span className="text-stone-400 text-xs">(1,178件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    城崎温泉　西村屋ホテル招月庭
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 兵庫県豊岡市城崎町湯島1016-2 ｜ 【電車】JR城崎温泉駅から旅館組合無料乗合バスで5～15分【車】北近畿豊岡自動車道・豊岡出石ICから約18分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007.jpg"
                        alt="城崎温泉　西村屋ホテル招月庭"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      城崎温泉随一の老舗「西村屋」の伝統を受け継ぎ、五万坪の広大な森林庭園に佇むラグジュアリーホテル。大浴場「月下の湯」には露天風呂やミストサウナ、岩盤浴が備わり、貸切プライベートスパも大人気。11月解禁の松葉ガニシーズンには、料理人が一膳一膳に丹精を込めた「タグ付き活松葉ガニ尽くし会席」や但馬牛との豪華コラボコースを提供。極上のおもてなしと優雅なリゾート空間が約束された名門宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料駐車場有</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 無料駐車場有（100台・予約不要）バイクも可</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 35,200円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14007%2F14007.html"
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
    

            <div key="kinosaki_kanian" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>兵庫県豊岡市・カニ料理の職人技が光る美食宿！城崎温泉街の中心に佇む落ち着きの温泉旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.28 <span className="text-stone-400 text-xs">(116件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    城崎温泉　医食同源の宿　かに庵
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 兵庫県豊岡市城崎町湯島690 ｜ ＪＲ　城崎温泉駅より徒歩にて約７分。　大阪方面より中国道～舞鶴道～北近畿豊岡自動車道～但馬空港ＩＣ下車　約30分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/147534/147534.jpg"
                        alt="城崎温泉　医食同源の宿　かに庵"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      城崎温泉の柳並木沿い、外湯めぐりにも絶好のロケーションに建つカニ料理自慢の温泉旅館。「医食同源」をコンセプトに、鮮度抜群の活松葉ガニを炭火焼きやカニ刺し、秘伝の出汁で味わうカニすきなど、カニ本来の旨味を極限まで引き出した料理が絶品と評判です。館内には24時間入浴可能な天然温泉大浴場を完備。城崎の温泉情緒と本場のカニをとことん味わい尽くしたい旅行者に愛される宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 但馬牛や松葉かになど、地産地消を基本にグルメと健康を両立した6室の宿でございます。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 契約駐車場有り(受け入れ15〜18時、翌10時まで）　有料1,650円　　要予約</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 9,900円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147534%2F147534.html"
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
    

            <div key="echizen_yamacho" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>福井県福井市・越前海岸のすぐ目の前！越前ガニと北陸の朝獲れ鮮魚を満喫する貸切風呂の宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.83 <span className="text-stone-400 text-xs">(25件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    越前カニ　北陸の海鮮と貸切風呂　さかな遊びの宿　やまちょう
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 福井県福井市両橋屋町23-40 ｜ ＪＲ　福井駅より車にて３０分、京福バスにて３０～４０分（宿前・橋屋口下車）／北陸自動車道　北ＩＣより４０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/38653/38653.jpg"
                        alt="越前カニ　北陸の海鮮と貸切風呂　さかな遊びの宿　やまちょう"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      越前海岸の潮風が心地よい海沿いに位置し、獲れたての越前ガニや越前若狭の海の幸を豪快に味わえる料理自慢の隠れ宿。11月解禁の黄色タグ付き越前ガニは、茹でたてのホクホク感と濃厚なカニ味噌が絶品。日本海を一望できる展望貸切風呂や天然温泉が備わり、カップルやご家族でプライベートな温泉時間を楽しめます。北陸の豊かな海の恵みを心ゆくまで堪能したい方に最適です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> ◇越前カニ・北陸の海鮮と貸切風呂◇越前海と緑に囲まれた癒し宿で美食旅</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り・６０台・無料・先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 13,350円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38653%2F38653.html"
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

            <li key="furusato-tax-sotoyu-meguri-historic-onsen-town-stay">
              <Link
                href="/furusato-tax-sotoyu-meguri-historic-onsen-town-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【伝統の外湯めぐり＆浴衣下駄散策×ふるさと納税】城崎・野沢温泉・渋温泉
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
