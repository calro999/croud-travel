import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '太宰府天満宮・光明禅寺の石庭紅葉＆かまど神社！美肌の原鶴・二日市温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】福岡',
  description: '11月中旬〜12月上旬に見頃を迎える「太宰府天満宮」と紅葉の名所「宝満宮 竈門神社（かまどじんじゃ）」。「苔寺」光明禅寺の美しい庭園紅葉、万葉集ゆかりの二日市温泉「大丸別荘」やダブル美肌の湯「原鶴温泉 泰泉閣」「小野屋」で博多水炊き・黒毛和牛・筑後川の鮎を堪能。ふるさと納税で実質2,000円。',
  keywords: ["太宰府天満宮", "光明禅寺の石庭紅葉", "かまど神社！美肌の原鶴", "二日市温泉宿×ふるさと納税", "2026年最新秋旅", "福岡", "温泉宿"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-dazaifu-harazuru-autumn-leaves-stay/"
  },
  openGraph: {
    title: '太宰府天満宮・光明禅寺の石庭紅葉＆かまど神社！美肌の原鶴・二日市温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】福岡',
    description: '11月中旬〜12月上旬に見頃を迎える「太宰府天満宮」と紅葉の名所「宝満宮 竈門神社（かまどじんじゃ）」。「苔寺」光明禅寺の美しい庭園紅葉、万葉集ゆかりの二日市温泉「大丸別荘」やダブル美肌の湯「原鶴温泉 泰泉閣」「小野屋」で博多水炊き・黒毛和牛・筑後川の鮎を堪能。ふるさと納税で実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-dazaifu-harazuru-autumn-leaves-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FeatureArticlePage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "太宰府天満宮・光明禅寺の石庭紅葉＆かまど神社！美肌の原鶴・二日市温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】福岡",
    "description": "11月中旬〜12月上旬に見頃を迎える「太宰府天満宮」と紅葉の名所「宝満宮 竈門神社（かまどじんじゃ）」。「苔寺」光明禅寺の美しい庭園紅葉、万葉集ゆかりの二日市温泉「大丸別荘」やダブル美肌の湯「原鶴温泉 泰泉閣」「小野屋」で博多水炊き・黒毛和牛・筑後川の鮎を堪能。ふるさと納税で実質2,000円。",
    "url": "https://croud-travel.pages.dev/furusato-tax-dazaifu-harazuru-autumn-leaves-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "太宰府天満宮・光明禅寺の石庭紅葉＆かまど神社！美肌の原鶴・二日市温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】福岡", "item": "https://croud-travel.pages.dev/furusato-tax-dazaifu-harazuru-autumn-leaves-stay/" }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">福岡・太宰府天満宮 飛梅紅葉＆原鶴温泉・二日市温泉名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              福岡・太宰府天満宮＆原鶴・二日市温泉特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              太宰府天満宮・光明禅寺の石庭紅葉＆かまど神社！美肌の原鶴・二日市温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】福岡
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              11月中旬〜12月上旬に見頃を迎える「太宰府天満宮」と紅葉の名所「宝満宮 竈門神社（かまどじんじゃ）」。「苔寺」光明禅寺の美しい庭園紅葉、万葉集ゆかりの二日市温泉「大丸別荘」やダブル美肌の湯「原鶴温泉 泰泉閣」「小野屋」で博多水炊き・黒毛和牛・筑後川の鮎を堪能。ふるさと納税で実質2,000円。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 11月中旬〜12月上旬（太宰府・竈門神社紅葉ライトアップ）
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
              学問の神様・太宰府と縁結びの竈門神社！歴史薫る古都と福岡2大美肌温泉
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            菅原道真公を祀る全国天満宮の総本宮「太宰府天満宮」。秋には心字池周辺のモミジが真っ赤に色づき、朱塗りの太鼓橋とのコントラストが優美な景観を作り出します。さらに車で約10分の「宝満宮 竈門神社（かまどじんじゃ）」は、参道を包み込む紅葉のトンネルと幻想的な夜間ライトアップで福岡屈指の人気を誇る名所。参詣後は、奈良時代開湯の老舗「二日市温泉」や、弱アルカリ性単純温泉と硫黄泉の「ダブル美肌の湯」として名高い「原鶴温泉」へ。博多名物水炊きやもつ鍋、博多和牛をふるさと納税トラベルクーポンでお得に心ゆくまで満喫しましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">1</span>
                太宰府天満宮の心字池太鼓橋と竈門神社の紅葉トンネル
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                過去・現在・未来を表す太宰府天満宮の三連太鼓橋を彩る紅葉。縁結びで有名な竈門神社の参道を覆う真紅のアーチとライトアップは必見の絶景です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">2</span>
                万葉集に歌われた二日市温泉＆原鶴の「W美肌温泉」
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                大宰府政庁の役人たちも愛した二日市温泉の歴史ある名湯と、角質を落とし肌を潤す原鶴温泉のダブル美肌効果。肌がつるつるになる極上の湯浴みが楽しめます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">3</span>
                博多名物「水炊き」＆極上博多和牛・筑後川の旬の恵み
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                じっくり煮込んだ濃厚白濁スープの博多水炊き、福岡県産黒毛和牛「博多和牛」の陶板焼き、名物「梅ヶ枝餅」の焼きたての香ばしさを堪能。
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
            
            <div key="dazaifu_daimarubesso" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>創業慶応元年！三千五百坪の大庭園に抱かれた万葉の歴史薫る最高峰の純和風名門宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.67 <span className="text-stone-400 text-xs">(490件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    二日市温泉　大丸別荘
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 福岡県筑紫野市湯町1-20-1 ｜ 「福岡空港」より高速バスで約30分　「博多駅」よりＪＲ線利用で20分　「福岡天神駅」より西鉄電車利用で30分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/38630/38630.jpg"
                        alt="二日市温泉　大丸別荘"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      ◇博多駅から20分◇源泉かけ流し天然温泉◇和の心を継ぐ宿【福岡】◇
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> ◇博多駅から20分◇源泉かけ流し天然温泉◇和の心を継ぐ宿【福岡】◇...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 「福岡空港」より高速バスで約30分　「博多駅」よりＪＲ線利用で20分　「福岡天神駅」より西鉄電車利用で30分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 11,350円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38630%2F38630.html"
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
    

            <div key="harazuru_taisenkaku" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>名物「ジャングル風呂」や千歳川沿いの露天風呂！W美肌温泉と旬の会席が評判の大型宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.19 <span className="text-stone-400 text-xs">(1097件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    原鶴温泉　泰泉閣
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 福岡県朝倉市杷木志波20 ｜ 大分自動車道杷木インターより車で5分／ＪＲ筑後吉井駅より車で10分／日田行き高速バスで杷木下車、車で５分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/37876/37876.jpg"
                        alt="原鶴温泉　泰泉閣"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      “ダブル美肌湯”と称される原鶴の良泉を宿名物ジャングル風呂などの個性あふれるお風呂でお楽しみ下さい。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> “ダブル美肌湯”と称される原鶴の良泉を宿名物ジャングル風呂などの個性あふれるお風呂でお楽しみ下さい。...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 大分自動車道杷木インターより車で5分／ＪＲ筑後吉井駅より車で10分／日田行き高速バスで杷木下車、車で５分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 7,040円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37876%2F37876.html"
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
    

            <div key="harazuru_onoya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>全国でも珍しい畳敷きの温泉大浴場が自慢！バリアフリーと極上美肌湯のモダン和風リゾート</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.35 <span className="text-stone-400 text-xs">(1978件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    原鶴温泉　ホテルパーレンス小野屋
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 福岡県朝倉市杷木久喜宮1841-1 ｜ 福岡市内から約60分！大分自動車道・杷木ＩＣより約5分！名跡『秋月城址』まで車で30分、太宰府まで車で50分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/15772/15772.jpg"
                        alt="原鶴温泉　ホテルパーレンス小野屋"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      【楽天トラベルアワード9年連続受賞】創業145年。優しさが詰った畳風呂と、心尽しの美食が人気の老舗宿
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 【楽天トラベルアワード9年連続受賞】創業145年。優しさが詰った畳風呂と、心尽しの美食が人気の老舗宿...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 福岡市内から約60分！大分自動車道・杷木ＩＣより約5分！名跡『秋月城址』まで車で30分、太宰府まで車で50分</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 8,415円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15772%2F15772.html"
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
    
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】二日市温泉 大丸別荘を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 二日市駅よりアクセス。「福岡空港」より高速バスで約30分 「博多駅」よりＪＲ線利用で20分 「福岡天神駅」より西鉄電車利用で30分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「二日市温泉 大丸別荘」にチェックイン。◇博多駅から20分◇源泉かけ流し天然温泉◇和の心を継ぐ宿 福岡 ◇などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「二日市温泉 大丸別荘」の湯処へ。◇博多駅から20分◇源泉かけ流し天然温泉◇和の心を継ぐ宿 福岡 ◇とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「二日市温泉 大丸別荘」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「二日市温泉 大丸別荘」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「二日市温泉 大丸別荘」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「原鶴温泉 泰泉閣」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と二日市温泉 大丸別荘の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「二日市温泉 大丸別荘」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「二日市温泉 大丸別荘」へは、「福岡空港」より高速バスで約30分 「博多駅」よりＪＲ線利用で20分 「福岡天神駅」より西鉄電車利用で30分。最寄りの二日市駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「二日市温泉 大丸別荘」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「二日市温泉 大丸別荘」は『◇博多駅から20分◇源泉かけ流し天然温泉◇和の心を継ぐ宿 福岡 ◇』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「二日市温泉 大丸別荘」と「原鶴温泉 泰泉閣」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/yamagata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山形県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gunma"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                群馬県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamaguchi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山口県の宿・温泉
              </Link>
              <Link
                href="/prefectures/okayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岡山県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="furusato-tax-dazaifu-harazuru-autumn-leaves-stay" />
</div>
        </section>

      </main>
  );
}
