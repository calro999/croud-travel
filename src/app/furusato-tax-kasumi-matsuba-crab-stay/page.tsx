import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '11月解禁！兵庫香住の松葉ガニ＆幻の香住ガニ！日本海の絶景温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】兵庫',
  description: '秋の香住といえば関西唯一の水揚げを誇る紅ズワイ「香住ガニ」と、11月6日解禁の本場「松葉ガニ」！茹でガニ・カニ刺し・焼きガニ・カニ鍋を味わい尽くす贅沢プラン、香住温泉の名宿「さだ助」「甲羅戯」「小宿 梅乃家」で日本海の夕景と名湯を満喫。楽天ふるさと納税で実質2,000円で泊まる冬先取りカニ旅ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '兵庫香住・松葉ガニ＆香住ガニ解禁特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kasumi-matsuba-crab-stay/'
  },
  openGraph: {
    title: '11月解禁！兵庫香住の松葉ガニ＆幻の香住ガニ！日本海の絶景温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】兵庫',
    description: '秋の香住といえば関西唯一の水揚げを誇る紅ズワイ「香住ガニ」と、11月6日解禁の本場「松葉ガニ」！茹でガニ・カニ刺し・焼きガニ・カニ鍋を味わい尽くす贅沢プラン、香住温泉の名宿「さだ助」「甲羅戯」「小宿 梅乃家」で日本海の夕景と名湯を満喫。楽天ふるさと納税で実質2,000円で泊まる冬先取りカニ旅ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kasumi-matsuba-crab-stay',
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
        <span className="text-stone-800 font-bold">兵庫香住・幻の香住ガニ＆11月解禁松葉ガニ・温泉旅館特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              兵庫香住・松葉ガニ＆香住ガニ解禁特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              11月解禁！兵庫香住の松葉ガニ＆幻の香住ガニ！日本海の絶景温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】兵庫
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              秋の香住といえば関西唯一の水揚げを誇る紅ズワイ「香住ガニ」と、11月6日解禁の本場「松葉ガニ」！茹でガニ・カニ刺し・焼きガニ・カニ鍋を味わい尽くす贅沢プラン、香住温泉の名宿「さだ助」「甲羅戯」「小宿 梅乃家」で日本海の夕景と名湯を満喫。楽天ふるさと納税で実質2,000円で泊まる冬先取りカニ旅ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 10月〜11月（香住ガニ＆11月6日松葉ガニ解禁）
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
              関西随一のカニの聖地・香住！2大ブランドガニの食べ比べと潮騒の温泉
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            兵庫県日本海側に位置する美方郡香住町は、関西で唯一ベニズワイガニが水揚げされる「香住ガニ」の聖地であり、11月6日には冬の味覚の王様「松葉ガニ」の漁が解禁される全国屈指のカニどころです。獲れたて新鮮なカニを刺身、炭火焼き、甲羅味噌焼き、茹で、カニすき鍋で贅沢に味わうカニ尽くしコースは、全国の食通を虜にします。日本海を望む香住温泉の名旅館に宿泊し、潮風を感じる露天風呂と至極のカニ料理を、楽天ふるさと納税トラベルクーポンでお得に心ゆくまで満喫しましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">1</span>
                香住ガニ（紅ズワイ）と11月解禁松葉ガニの豪華競演
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                深海800m以上から引き揚げられる甘み豊かな「香住ガニ」と、身がぎっしり詰まった極上の「松葉ガニ」。秋から初冬にかけてしか味わえない贅沢な食べ比べが楽しめます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">2</span>
                余部鉄橋「空の駅」と山陰海岸ジオパークの絶景散策
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                地上約40mの高さから日本海を見下ろす旧余部鉄橋の展望施設「空の駅」や、奇岩が連なる鎧の袖など、山陰海岸ジオパークの壮大な景勝地を巡るドライブも魅力です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">3</span>
                香住漁港仲買人の宿ならではの鮮度抜群の魚介会席
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                カニだけでなく、地元香住港で競り落とされる白イカ（剣先イカ）、ノドグロ、甘エビ、但馬牛のステーキなど、日本海と但馬の大自然が育んだ至高の味覚が揃います。
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
            
            <div key="kasumi_sadasuke" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>香住漁港の仲買人が営むカニと地魚の極上宿！自家製干物と天然温泉で心温まるおもてなし</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.58 <span className="text-stone-400 text-xs">(404件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    なごみの香風の宿　さだ助
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 兵庫県美方郡香美町香住区下浜634 ｜ 車－北近畿自動車道【豊岡出石IC】より178号線経由で約40分。JR－山陰本線【香住駅】から約2km。駅から送迎無料
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/67455/67455.jpg"
                        alt="なごみの香風の宿　さだ助"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      仲買人社長厳選の旬の魚介と香住温泉の宿　9月から香住ガニが解禁
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 仲買人社長厳選の旬の魚介と香住温泉の宿　9月から香住ガニが解禁...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 車－北近畿自動車道【豊岡出石IC】より178号線経由で約40分。JR－山陰本線【香住駅】から約2km。駅から送迎無料</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 19,800円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67455"
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
    

            <div key="kasumi_kouragi" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>カニを極めたおとなの隠れ宿！職人の技が光る独創的なカニ料理とモダンな和の空間</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.00 <span className="text-stone-400 text-xs">(55件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    かに楽座　甲羅戯
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 兵庫県美方郡香美町香住区浦上312-1 ｜ ＪＲ山陰本線　柴山駅より徒歩30秒／車で大阪・姫路より日高神鍋ICから50分　豊岡経由　柴山トンネル出てすぐ
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/18646/18646.jpg"
                        alt="かに楽座　甲羅戯"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      和のテイストと現代モダンが融合した、柴山湾一望の料理旅館
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 和のテイストと現代モダンが融合した、柴山湾一望の料理旅館...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> ＪＲ山陰本線　柴山駅より徒歩30秒／車で大阪・姫路より日高神鍋ICから50分　豊岡経由　柴山トンネル出てすぐ</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 31,350円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18646"
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
    

            <div key="kasumi_umenoya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>一日数組限定の小さな温もり宿！炭火で焼き上げる香住ガニ＆松葉ガニと天然温泉</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.65 <span className="text-stone-400 text-xs">(128件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    香住の民宿旅館　小宿　梅乃家
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 兵庫県美方郡香美町香住区下ノ浜308-1 ｜ 車:北近畿豊岡道【但馬空港IC】より、R178号線経由で約40分（香住駅よりお車にて５分）／列車:ＪＲ香住駅より送迎あり
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/84765/84765.jpg"
                        alt="香住の民宿旅館　小宿　梅乃家"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      《限定４組様だけの小宿》G.W☆春カニぷらん受付中！【香住蟹＆地酒のマリアージュを楽しむ♪】
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 《限定４組様だけの小宿》G.W☆春カニぷらん受付中！【香住蟹＆地酒のマリアージュを楽しむ♪】...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 車:北近畿豊岡道【但馬空港IC】より、R178号線経由で約40分（香住駅よりお車にて５分）／列車:ＪＲ香住駅より送迎あり</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 24,339円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D84765"
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
