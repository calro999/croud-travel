import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税厳選ガイド志摩英虞湾・南三陸・伊根の舟屋の贅沢旅',
  description: '日本屈指の入江美と海の幸！三重志摩「英虞湾」の夕映え多島美と本場伊勢海老・鮑づくし会席、宮城「南三陸」のリアス海岸インフィニティ露天風呂と鮑踊り焼き、京都「伊根の舟屋」の海に浮かぶ重要伝統建築ステイ。楽天ふるさと納税宿泊クーポンでお得に楽しむオーシャンガイド。',
  keywords: ["夕映えリアス式海岸", "伊勢海老", "鮑料理の海宿×ふるさと納税", "2026年最新", "志摩英虞湾", "南三陸", "伊根の舟屋の贅沢旅"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay/"
  },
  openGraph: {
    title: '夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税厳選ガイド志摩英虞湾・南三陸・伊根の舟屋の贅沢旅',
    description: '日本屈指の入江美と海の幸！三重志摩「英虞湾」の夕映え多島美と本場伊勢海老・鮑づくし会席、宮城「南三陸」のリアス海岸インフィニティ露天風呂と鮑踊り焼き、京都「伊根の舟屋」の海に浮かぶ重要伝統建築ステイ。楽天ふるさと納税宿泊クーポンでお得に楽しむオーシャンガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay',
    type: 'article',
    siteName: '旅宿クラウド'
  }
};

export default function FurusatoFeaturePage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税完全ガイド【2026年最新】志摩英虞湾・南三陸・伊根の舟屋の贅沢旅",
    "description": "日本屈指の入江美と海の幸！三重志摩「英虞湾」の夕映え多島美と本場伊勢海老・鮑づくし会席、宮城「南三陸」のリアス海岸インフィニティ露天風呂と鮑踊り焼き、京都「伊根の舟屋」の海に浮かぶ重要伝統建築ステイ。楽天ふるさと納税宿泊クーポンでお得に楽しむオーシャンガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税完全ガイド【2026年最新】志摩英虞湾・南三陸・伊根の舟屋の贅沢旅", "item": "https://croud-travel.pages.dev/furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay/" }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>リアス式海岸・伊勢海老鮑特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税ガイド</h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            波穏やかな入江と複雑な岬が織りなすリアス海岸。真珠筏が浮かぶ三重の英虞湾、ダイナミックな断崖と太平洋が広がる三陸海岸、そして海の上に直接家が建ち並ぶ京都伊根の舟屋。リアス式海岸の豊かな海は、栄養豊富なプランクトンを育み、伊勢海老や肉厚の天然鮑など最高峰の海の幸をもたらします。夕暮れ時に海一面が黄金色に染まるマジックアワーを露天風呂から眺め、豪快な海鮮会席に舌鼓を打つ極上の旅を、楽天ふるさと納税でお得に実現しましょう。
          </p>

          {/* 公式キャンペーンCTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/30 backdrop-blur max-w-2xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">
              楽天ふるさと納税なら寄附額の最大30%が宿泊クーポンに！
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
              寄附翌日には楽天トラベルで使えるクーポンが付与。有効期限はたっぷり3年間あるため、次の大型連休や記念日旅行にも安心して活用いただけます。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* メリット3選 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-stone-800">
        <h2 className="text-2xl sm:text-3xl font-black text-amber-100 text-center mb-10">
          幾重にも入り組んだ青い入江と茜色の夕景。海の王者・伊勢海老と鮑を味わい尽くす海浜ステイ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="0" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              伊勢海老のお造り・鬼殻焼きや天然鮑の踊り焼きなど豪華海鮮会席
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              水揚げ直後の活きた伊勢海老のプリプリとした甘み、肉厚な鮑のジューシーな旨味を余すところなく堪能できます。
            </p>
          </div>
          
          <div key="1" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              穏やかな入江に沈む夕日と多島美パノラマ露天風呂
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              外海の荒波が遮られたリアス海岸ならではの鏡のような水面。茜色に染まる夕暮れ時の絶景を湯船から心ゆくまで愛でられます。
            </p>
          </div>
          
          <div key="2" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              クルージングや真珠取り出し体験など海と一体になるアクティビティ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              英虞湾遊覧船や伊根湾の海上タクシーなど、海側からしか見られない壮大な景観を楽しむ特別な体験が揃っています。
            </p>
          </div>
          
        </div>
      </section>

      {/* エリア別 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          
          <div key="shima_rias" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                三重県志摩市ふるさと納税：真珠の海・英虞湾の多島美パノラマと本場伊勢海老・志摩温泉リゾート
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                約60の島々が浮かぶリアス海岸の代表格・英虞湾。夕暮れ時に黄金色に輝く海を望む展望露天風呂と、三重ブランドの伊勢海老・的矢かき・松阪牛会席を味わう洗練のリゾートステイです。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="142676"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/142676/142676.jpg"
                    alt="大江戸温泉物語Ｐｒｅｍｉｕｍ　志摩彩朝楽"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 3.82 (1106件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    三重県志摩市阿児町神明687-2
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    大江戸温泉物語Ｐｒｅｍｉｕｍ　志摩彩朝楽
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    眼下に広がる英虞湾の絶景と夕日を堪能するオーシャンフロントの温泉宿
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥10,300〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142676%2F142676.html"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="1150"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/1150/1150.jpg"
                    alt="志摩観光ホテル　ザ　クラシック"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.72 (941件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    三重県志摩市阿児町神明731
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    志摩観光ホテル　ザ　クラシック
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    伊勢志摩サミット開催ホテル。落ち着いた空間で時を過ごせるリゾートホテル。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥14,355〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1150%2F1150.html"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="27737"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/27737/27737.jpg"
                    alt="都リゾート　志摩　ベイサイドテラス"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.58 (1091件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    三重県志摩市阿児町鵜方3618-33
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    都リゾート　志摩　ベイサイドテラス
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    英虞湾の絶景を望む、南欧風リゾート　海辺のオーベルジュ
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥8,385〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27737%2F27737.html"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="sanriku_rias" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                宮城県南三陸町ふるさと納税：三陸リアス海岸インフィニティ露天風呂と南三陸名物「活鮑の踊り焼き」
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                太平洋の大海原とリアス海岸の岬が眼前に迫る絶景宿。海と一体化するインフィニティ露天風呂で波音に包まれ、志津川名物の活アワビ踊り焼きやウニ、フカヒレを堪能できます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="19228"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/19228/19228.jpg"
                    alt="南三陸　ホテル観洋"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.5 (5433件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    宮城県本吉郡南三陸町志津川字黒崎99-17
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    南三陸　ホテル観洋
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    海と一つになる絶景インフィニティ温泉と三陸海鮮を味わう宮城の宿
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥9,350〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19228%2F19228.html"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="4665"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/4665/4665.jpg"
                    alt="大江戸温泉物語Ｐｒｅｍｉｕｍ　ホテル壮観"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.07 (2686件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    宮城県宮城郡松島町磯崎字浜1-1
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    大江戸温泉物語Ｐｒｅｍｉｕｍ　ホテル壮観
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    絶好のロケーションでグルメや名所を堪能！プレミアムラウンジとテラスで心地よい海風に癒されるひと時を。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥12,800〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4665%2F4665.html"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="15784"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/15784/15784.jpg"
                    alt="サンマリン気仙沼ホテル観洋"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.3 (1192件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    宮城県気仙沼市港町4-19
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    サンマリン気仙沼ホテル観洋
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    気仙沼湾を見渡す高台に建ち、地下1800Mから湧き出す「気仙沼温泉」と三陸の海鮮料理をご堪能ください
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥6,600〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15784%2F15784.html"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="ine_rias" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                京都府伊根町・丹後ふるさと納税：日本で最も海に近い町「伊根の舟屋」と丹後名物海の幸会席
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                1階が船のガレージ、2階が居住空間となった舟屋が約230軒連なる伊根湾。まるで海に浮かんでいるかのような非日常の空間で、朝獲れの伊根マグロや岩がき、地魚会席を満喫できます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="9100"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/9100/9100.jpg"
                    alt="海辺の料理旅館　浜の路　臨江庵"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.5 (151件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    京都府京丹後市久美浜町湊宮1795
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    海辺の料理旅館　浜の路　臨江庵
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    【1日5組限定◆3つの貸切温泉＆個室食事処】個室お食事処で食べる旬の味覚会席を堪能する料理旅館
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥13,200〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9100%2F9100.html"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="137773"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/137773/137773.jpg"
                    alt="旅館　浜乃屋"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4 (58件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    京都府京丹後市網野町浜詰765
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    旅館　浜乃屋
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    京丹後・夕日ヶ浦の旅館です。別館のオーシャンビュー客室や露天風呂が自慢！波音を聴きながらゆっくりと。
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥9,900〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137773%2F137773.html"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="27962"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/27962/27962.jpg"
                    alt="宮津温泉　旅館つるのや"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.71 (177件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    京都府宮津市獅子崎198-1
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    宮津温泉　旅館つるのや
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    京都縦貫道　宮津天橋立インターより約１０分
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥7,600〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27962%2F27962.html"
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
        </div>
      </section>

      {/* 下部CTAバナー */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-600/30 via-orange-600/20 to-stone-900 border border-amber-500/40 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-amber-100 mb-4">
              ふるさと納税の宿泊クーポンでお得に極上の旅へ
            </h2>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              寄附上限額の範囲内なら、実質自己負担2,000円で憧れの特等席宿やリゾートに宿泊可能。楽天ポイント還元も併用して、賢く贅沢なひとときをお過ごしください。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 関連記事 内部リンク */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-stone-800">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-200 mb-6">
          あわせて読みたい！テーマ別ふるさと納税トラベルガイド
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Link
            key="0"
            href="/furusato-tax-oceanfront-wave-sound-healing-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                稲取・南房総・読谷村の全室オーシャンビューと潮騒露天。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="1"
            href="/furusato-tax-three-scenic-views-heritage-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                日本三景の絶景オーシャンビュー宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                松島・天橋立・宮島の名門旅館。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="2"
            href="/furusato-tax-morning-market-hamayaki-seafood-inn-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                八戸・沼津・高知の獲れたて市場グルメと浜焼き。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
        </div>
      </section>
    
      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税厳選ガイド志摩英虞湾・南三陸・伊根の舟屋の贅沢旅：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税厳選ガイド志摩英虞湾・南三陸・伊根の舟屋の贅沢旅」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 大江戸温泉物語Ｐｒｅｍｉｕｍ　志摩彩朝楽</td>
                <td className="p-3 text-stone-600">三重県志摩市阿児町神明687-2</td>
                <td className="p-3 text-stone-600">賢島駅周辺</td>
                <td className="p-3 text-stone-600">１００台　予約不要　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.83（1158件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142676%2F142676.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 志摩観光ホテル　ザ　クラシック</td>
                <td className="p-3 text-stone-600">三重県志摩市阿児町神明731</td>
                <td className="p-3 text-stone-600">賢島駅周辺</td>
                <td className="p-3 text-stone-600">屋外、無料、66台</td>
                <td className="p-3 font-bold text-amber-600">★4.72（959件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,005〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1150%2F1150.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 都リゾート　志摩　ベイサイドテラス</td>
                <td className="p-3 text-stone-600">三重県志摩市阿児町鵜方3618-33</td>
                <td className="p-3 text-stone-600">賢島駅周辺</td>
                <td className="p-3 text-stone-600">有り　６０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.59（1086件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27737%2F27737.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 南三陸　ホテル観洋</td>
                <td className="p-3 text-stone-600">宮城県本吉郡南三陸町志津川字黒崎99-17</td>
                <td className="p-3 text-stone-600">志津川駅周辺</td>
                <td className="p-3 text-stone-600">有り　２００台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.5（5433件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,350〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19228%2F19228.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 大江戸温泉物語Ｐｒｅｍｉｕｍ　ホテル壮観</td>
                <td className="p-3 text-stone-600">宮城県宮城郡松島町磯崎字浜1-1</td>
                <td className="p-3 text-stone-600">松島駅周辺</td>
                <td className="p-3 text-stone-600">有り　２００台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.07（2686件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4665%2F4665.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. サンマリン気仙沼ホテル観洋</td>
                <td className="p-3 text-stone-600">宮城県気仙沼市港町4-19</td>
                <td className="p-3 text-stone-600">気仙沼駅周辺</td>
                <td className="p-3 text-stone-600">有り　１００台　無料　※一部屋根付き駐車場あり・バイクも大歓迎</td>
                <td className="p-3 font-bold text-amber-600">★4.28（1255件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15784%2F15784.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">大江戸温泉物語Ｐｒｅｍｉｕｍ　志摩彩朝楽</h3>
                  <span className="text-xs text-stone-400 ml-2">（おおえどおんせんものがたりぷれみあむ　しまさいちょうらく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/142676/142676_wa.jpg" alt="大江戸温泉物語Ｐｒｅｍｉｕｍ　志摩彩朝楽 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>眼下に広がる英虞湾の絶景と夕日を堪能するオーシャンフロントの温泉宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県志摩市阿児町神明687-2 ／ 最寄り駅：賢島 ／ 交通案内：賢島駅よりお車にて５分／ホテルへの送迎もございます（要予約）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>１００台　予約不要　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.91 ／ 立地 ★3.81 ／ 部屋 ★3.79 ／ 設備 ★3.77 ／ 風呂 ★3.89 ／ 食事 ★3.98</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「海の幸とキッズルームに子供が大喜び!バイキングは品揃え豊富で、新鮮な海の幸が食べられて美味しかったです。子どももとても喜んでいました。プレイルームも大喜びでした。キッズルームがあるお部屋を予約しま…　2026-10-11 02:30:47投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=142676&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">志摩観光ホテル　ザ　クラシック</h3>
                  <span className="text-xs text-stone-400 ml-2">（しま　かんこうほてる　ざ　くらしっく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,005〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1150/1150_twn.jpg" alt="志摩観光ホテル　ザ　クラシック 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>伊勢志摩サミット開催ホテル。落ち着いた空間で時を過ごせるリゾートホテル。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県志摩市阿児町神明731 ／ 最寄り駅：賢島 ／ 交通案内：近鉄「賢島駅」から徒歩約5分、シャトルバス2分。（定時運行・予約不要）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>屋外、無料、66台</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.72 ／ 立地 ★4.81 ／ 部屋 ★4.73 ／ 設備 ★4.69 ／ 風呂 ★4.43 ／ 食事 ★4.76</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「サミットの歴史ありサミットの歴史を感じました静かな場所でくつろぎの時間を満喫できます食事やラウンジもよかったですお風呂は部屋のみですが展望ができるのが嬉しいですクチコミの詳細はこち…　2026-10-04 10:03:17投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">都リゾート　志摩　ベイサイドテラス</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやこりぞーと　しま　べいさいどてらす）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/27737/27737_room.jpg" alt="都リゾート　志摩　ベイサイドテラス 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>英虞湾の絶景を望む、南欧風リゾート　海辺のオーベルジュ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県志摩市阿児町鵜方3618-33 ／ 最寄り駅：賢島 ／ 交通案内：近鉄「賢島駅」よりシャトルバスで約７分（無料）／伊勢神宮（内宮）から車で約35分／志摩スペイン村から車で約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　６０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「日常を忘れてのんびり、また訪れたい場所とにかく素敵なホテルです。ホテルに入った瞬間にふわっと心地よい香りに癒され、穏やかな海と海外リゾートのようなロビーに感動しました。施設内も客室もプールも大浴場…　2026-08-22 08:27:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南三陸　ホテル観洋</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなみさんりく　ほてる　かんよう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,350〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/19228/19228_b1.jpg" alt="南三陸　ホテル観洋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>海と一つになる絶景インフィニティ温泉と三陸海鮮を味わう宮城の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県本吉郡南三陸町志津川字黒崎99-17 ／ 最寄り駅：志津川 ／ 交通案内：三陸自動車道：桃生津山Ｉ.Ｃ→R45で25分。/仙台空港より90分/仙台駅東口より送迎あり（要予約）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２００台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「最高のロケーションと食事、語り部バスに感動行きは一人でも陸前戸倉まで送迎してくれました。夕食は海側の席を用意していただき、最高のロケーションで過ごすことができました。特にアワビのステーキは…　2026-08-29 18:12:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">大江戸温泉物語Ｐｒｅｍｉｕｍ　ホテル壮観</h3>
                  <span className="text-xs text-stone-400 ml-2">（おおえどおんせんものがたりぷれみあむ　ほてるそうかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4665/4665_by.jpg" alt="大江戸温泉物語Ｐｒｅｍｉｕｍ　ホテル壮観 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>絶好のロケーションでグルメや名所を堪能！プレミアムラウンジとテラスで心地よい海風に癒されるひと時を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県宮城郡松島町磯崎字浜1-1 ／ 最寄り駅：松島 ／ 交通案内：東北本線松島駅より徒歩約15分！シャトルバス有り(松島駅・松島海岸駅より)出発時間はホテルへお問い合わせ下さいませ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２００台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝夕のバイキングがとても美味しかった朝夕のバイキングとても美味しかったですクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voi…　2026-08-24 12:27:57投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">サンマリン気仙沼ホテル観洋</h3>
                  <span className="text-xs text-stone-400 ml-2">（さんまりん　けせんぬま　ほてる　かんよう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15784/15784_heya.jpg" alt="サンマリン気仙沼ホテル観洋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>気仙沼湾を見渡す高台に建ち、地下1800Mから湧き出す「気仙沼温泉」と三陸の海鮮料理をご堪能ください</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県気仙沼市港町4-19 ／ 最寄り駅：気仙沼 ／ 交通案内：ＪＲ気仙沼駅よりタクシーで１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１００台　無料　※一部屋根付き駐車場あり・バイクも大歓迎</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.24 ／ 立地 ★4.35 ／ 部屋 ★4.18 ／ 設備 ★4.06 ／ 風呂 ★4.25 ／ 食事 ★4.43</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「自販機で新札や硬貨が使えず不便酒の自販機が いまさら新千円札が使えないとか 500円が使えないとか ジュースの自販機も できれば全部の金種が使えるようにしてもらいたい。クチコミの詳細はこちらか…　2026-10-10 11:33:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！宮城県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、宮城県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Matsushima_miyagi_z.JPG/1280px-Matsushima_miyagi_z.JPG?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="松島（日本三景）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">松島（日本三景）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松島湾に浮かぶ260余りの島々が描く、日本三景の一つに数えられる美景。瑞巌寺や五大堂といった歴史的建造物と、遊覧船からの島々の眺望が訪れる者を魅了します。 松島（まつしま）は、宮城県北東部の松島湾内外にある約260の島々からなる諸島やそれを擁する多島海（島の数については諸説ある後述）。または、湾周囲を囲む松島丘陵も含めた修景地区のことである。日本三景の一つに数えられている。2019年の観光入込客数は約598万人。かつては「東の松島 西の象潟」と謳われ、同じく東北地方に存在していた修景地の象潟と並び称されていた。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">仙台城跡（青葉城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">伊達政宗公が築城した仙台藩の拠点。本丸跡に立つ政宗公の騎馬像越しに仙台市街を一望でき、日暮れには眼下に広がる輝く夜景スポットとしても大人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg/1280px-Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="蔵王の御釜" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">蔵王の御釜</h3>
                <p className="text-xs text-stone-600 leading-relaxed">蔵王連峰の標高高台に位置する、エメラルドグリーンの神秘的なカルデラ湖。光の当たり方で色合いが変化することから「五色沼」とも呼ばれる圧巻の火山絶景です。 蔵王、藏王（ざ-おう） 読みとしては、「蔵王」の本来の読み、旧仮名づかい「ざう-わう(ぞう-おう)」（音読み）が連声化したもの。 修験道の神である蔵王権現のこと。日本各地にみられる「蔵王」という名称は、後述の地名を含め、その大半が蔵王権現（奈良県吉野の発祥）に由来している（蔵王権現を参照）。 上述の蔵王権現を祭っている神社（蔵王権現社、御嶽神社（御岳神社）、…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">瑞鳳殿</h3>
                <p className="text-xs text-stone-600 leading-relaxed">仙台藩祖・伊達政宗公の霊屋。桃山文化の華麗な建築様式を今に伝える絢欄豪華な装飾と、周囲の静寂な杉木立が見事な対比を見せています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 宮城県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 宮城県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay" />
</div>
  );
}
