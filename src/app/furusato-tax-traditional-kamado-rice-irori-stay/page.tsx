import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税厳選ガイド白川郷・遠野・丹波篠山のおばあちゃん家ステイ',
  description: '日本人の原風景と素朴なぬくもり！世界遺産岐阜「白川郷」の合掌造り囲炉裏宿、岩手「遠野」の南部曲り家とかまど炊き銀シャリ、兵庫「丹波篠山」の黒豆ご飯と絶品ぼたん鍋古民家宿。薪のはぜる音とふっくらお米の甘みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
  keywords: ["古民家かまど炊きご飯", "2026年最新", "白川郷", "遠野", "丹波篠山のおばあちゃん家ステイ", "温泉宿", "宿泊予約"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-traditional-kamado-rice-irori-stay/"
  },
  openGraph: {
    title: '古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税厳選ガイド白川郷・遠野・丹波篠山のおばあちゃん家ステイ',
    description: '日本人の原風景と素朴なぬくもり！世界遺産岐阜「白川郷」の合掌造り囲炉裏宿、岩手「遠野」の南部曲り家とかまど炊き銀シャリ、兵庫「丹波篠山」の黒豆ご飯と絶品ぼたん鍋古民家宿。薪のはぜる音とふっくらお米の甘みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-traditional-kamado-rice-irori-stay',
    type: 'article',
    siteName: '旅宿クラウド'
  }
};

export default function FurusatoFeaturePage() {
  const officialFurusatoAffUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税完全ガイド【2026年最新】白川郷・遠野・丹波篠山のおばあちゃん家ステイ",
    "description": "日本人の原風景と素朴なぬくもり！世界遺産岐阜「白川郷」の合掌造り囲炉裏宿、岩手「遠野」の南部曲り家とかまど炊き銀シャリ、兵庫「丹波篠山」の黒豆ご飯と絶品ぼたん鍋古民家宿。薪のはぜる音とふっくらお米の甘みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-traditional-kamado-rice-irori-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税完全ガイド【2026年最新】白川郷・遠野・丹波篠山のおばあちゃん家ステイ", "item": "https://croud-travel.pages.dev/furusato-tax-traditional-kamado-rice-irori-stay/" }
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
            <span>かまど炊きご飯・囲炉裏古民家特集</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税ガイド</h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            薪をくべて羽釜で炊き上げる、ふっくらツヤツヤの銀シャリ。囲炉裏の炭火でじっくり焼いた川魚や香ばしい味噌田楽。世界遺産の合掌造り集落や、茅葺き屋根の古民家には、何世代にもわたって受け継がれてきた日本の温かい暮らしが息づいています。土間のかまどから立ち上る湯気、おばあちゃんの手料理のような滋味あふれる郷土会席、そして木の香る温泉。どこか懐かしく、心がじんわりとほどける特別な時間を、楽天ふるさと納税でお得に体験しましょう。
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
          パチパチとはぜる薪の火と湯気立ち上る羽釜。心まで温まる田舎の原風景と郷土ご馳走ステイ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div key="0" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              直火羽釜炊きだからこそ味わえる究極のお米の甘みとお焦げ
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              強い火力で一気に炊き上げた地元産新米コシヒカリ。ふっくらとした粒立ちと香ばしいお焦げの美味しさは、電気炊飯器では決して出せない感動の味です。
            </p>
          </div>
          
          <div key="1" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              囲炉裏を囲んで味わう炭火焼き・ジビエ・郷土鍋ディナー
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              赤々と燃える炭火を囲み、串刺しの岩魚の塩焼きや飛騨牛の朴葉味噌焼き、丹波篠山名物ぼたん鍋などをゆっくりとお酒とともに楽しめます。
            </p>
          </div>
          
          <div key="2" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              1棟貸し切りや昔ながらの木造古民家で過ごす静かな時間
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              太い梁や柱、畳の香りに包まれた空間で、時間を忘れて読書をしたり縁側でお茶を飲んだり、贅沢なスローライフを堪能できます。
            </p>
          </div>
          
        </div>
      </section>

      {/* エリア別 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          
          <div key="shirakawago_kamado" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                岐阜県白川村・飛騨高山ふるさと納税：世界遺産「白川郷」合掌造り集落とかまど炊き飛騨牛囲炉裏宿
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                急勾配の茅葺き屋根が並ぶ白川郷。合掌造りの宿で囲炉裏の炭火を囲み、香ばしい岩魚の塩焼きや飛騨牛の朴葉味噌焼き、かまどで炊いた熱々ご飯を満喫する昔話のような滞在です。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="4992"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/4992/4992.jpg"
                    alt="飛騨高山温泉　飛騨の里　旅館　むら山"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.59 (276件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    岐阜県高山市西之一色町3-829
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    飛騨高山温泉　飛騨の里　旅館　むら山
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    飛騨高山温泉◎カップル・ファミリーにうれしい無料貸切風呂あり♪個室食事処も★駐車場無料♪
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥12,650〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4992%2F4992.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="105996"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/105996/105996.jpg"
                    alt="料理旅館　備前屋"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.73 (69件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    岐阜県郡上市八幡町柳町264
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    料理旅館　備前屋
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    一期一会の気持ちを込めて郡上の季節をお届けします。明治創業、日本庭園には四季の移り変わりが見られます
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥7,700〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105996%2F105996.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="106058"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/106058/106058.jpg"
                    alt="日本の宿　ひだ高山　倭乃里"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 5 (73件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    岐阜県高山市一之宮町1682
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    日本の宿　ひだ高山　倭乃里
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    全室スイートのやすらぎの一室　絶景、美食、清流の宿
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥40,700〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106058%2F106058.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="tono_kamado" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                岩手県遠野市・花巻温泉郷ふるさと納税：カッパ伝説の民話の里・南部曲り家と郷土ひっつみ鍋・名湯秘湯宿
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                人と馬が同じ屋根の下で暮らした「南部曲り家」が残る遠野。地元のお米で作る手作りどぶろくや郷土料理ひっつみ汁をいただき、花巻温泉郷の奥座敷で源泉かけ流しの名湯に浸かれます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="9536"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/9536/9536.jpg"
                    alt="岩手　花巻温泉郷　鉛温泉　藤三旅館"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.47 (2646件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    岩手県花巻市鉛中平75-1
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    岩手　花巻温泉郷　鉛温泉　藤三旅館
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    2024年6月宮沢賢治をテーマにした「なめとこ山サウナ」がグランドオープン
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥6,600〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9536%2F9536.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                key="56915"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/56915/56915.jpg"
                    alt="花巻温泉郷　台温泉　いやしろの湯　ホテル三右ェ門"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 3.98 (351件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    岩手県花巻市台２－４５
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    花巻温泉郷　台温泉　いやしろの湯　ホテル三右ェ門
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    閑静で落ち着いた昔変らぬ宿心。移り変わる風情とともに、台温泉で過ごすお時間をごゆるりとお寛ぎ下さい
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥8,200〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56915%2F56915.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            
          <div key="sasayama_kamado" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                兵庫県丹波篠山市ふるさと納税：丹波篠山城下町の町家古民家と丹波黒豆羽釜ご飯・冬の名物ぼたん鍋
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                丹波篠山コシヒカリをふっくら炊き上げた黒豆ご飯、丹波栗、そして天然猪肉を使った伝統のぼたん鍋。江戸情緒残る商家町の古民家ホテルで、丹波焼の器とともに極上の里山ディナーを味わえます。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div
                key="196237"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/196237/196237.jpg"
                    alt="豆家"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ 4.0 (0件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    兵庫県丹波篠山市立町15
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    豆家
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    十件の文化財と灯る石庭に包まれ過ごす一棟宿
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ¥38,900〜
                      </span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196237%2F196237.html"
                      target="_blank"
                      rel="noopener noreferrer"
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
            href="/furusato-tax-kominka-heritage-townhouse-auberge-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                篠山・飛騨高山・竹田城下の歴史情緒と地産馳走ステイ。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="1"
            href="/furusato-tax-terraced-rice-fields-satoyama-onsen-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                絶景棚田＆日本の原風景里山温泉宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                星峠・白米千枚田・大山千枚田の休日。
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          
          <Link
            key="2"
            href="/furusato-tax-historical-kaido-post-town-ryokan-stay"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅。
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
              📊 古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税厳選ガイド白川郷・遠野・丹波篠山のおばあちゃん家ステイ：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税厳選ガイド白川郷・遠野・丹波篠山のおばあちゃん家ステイ」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 飛騨高山温泉　飛騨の里　旅館　むら山</td>
                <td className="p-3 text-stone-600">岐阜県高山市西之一色町3-829</td>
                <td className="p-3 text-stone-600">高山駅周辺</td>
                <td className="p-3 text-stone-600">有り　12台　無料　駐輪OK！</td>
                <td className="p-3 font-bold text-amber-600">★4.61（288件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4992%2F4992.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 料理旅館　備前屋</td>
                <td className="p-3 text-stone-600">岐阜県郡上市八幡町柳町264</td>
                <td className="p-3 text-stone-600">郡上八幡駅周辺</td>
                <td className="p-3 text-stone-600">有り　８台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.73（69件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105996%2F105996.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 日本の宿　ひだ高山　倭乃里</td>
                <td className="p-3 text-stone-600">岐阜県高山市一之宮町1682</td>
                <td className="p-3 text-stone-600">高山駅周辺</td>
                <td className="p-3 text-stone-600">有り　（10台／無料／予約不要）</td>
                <td className="p-3 font-bold text-amber-600">★5（73件）</td>
                <td className="p-3 font-bold text-rose-600">¥40,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106058%2F106058.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 岩手　花巻温泉郷　鉛温泉　藤三旅館</td>
                <td className="p-3 text-stone-600">岩手県花巻市鉛中平75-1</td>
                <td className="p-3 text-stone-600">花巻駅周辺</td>
                <td className="p-3 text-stone-600">有り　60台先着順無料　湯治部のご利用は第2駐車場をご利用ください</td>
                <td className="p-3 font-bold text-amber-600">★4.43（2692件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9536%2F9536.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 花巻温泉郷　台温泉　いやしろの湯　ホテル三右ェ門</td>
                <td className="p-3 text-stone-600">岩手県花巻市台２－４５</td>
                <td className="p-3 text-stone-600">花巻駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.94（364件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56915%2F56915.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 豆家</td>
                <td className="p-3 text-stone-600">兵庫県丹波篠山市立町15</td>
                <td className="p-3 text-stone-600">篠山口駅周辺</td>
                <td className="p-3 text-stone-600">有り　３台　無料　要予約</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥38,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196237%2F196237.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">飛騨高山温泉　飛騨の里　旅館　むら山</h3>
                  <span className="text-xs text-stone-400 ml-2">（むらやま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4992/4992_heya.jpg" alt="飛騨高山温泉　飛騨の里　旅館　むら山 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>飛騨高山温泉◎カップル・ファミリーにうれしい無料貸切風呂あり♪個室食事処も★駐車場無料♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県高山市西之一色町3-829 ／ 最寄り駅：高山 ／ 交通案内：高山駅・濃飛バスセンターよりさるぼぼバスにて約１０分（飛騨の里下下車）徒歩１分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　12台　無料　駐輪OK！</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.66 ／ 立地 ★4.24 ／ 部屋 ★4.51 ／ 設備 ★4.46 ／ 風呂 ★4.45 ／ 食事 ★4.79</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料理がとても美味しく大満足料理が大満足でした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/4992?review…　2026-10-05 20:25:53投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">料理旅館　備前屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（りょうりりょかん　びぜんや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/105996/105996.jpg" alt="料理旅館　備前屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>一期一会の気持ちを込めて郡上の季節をお届けします。明治創業、日本庭園には四季の移り変わりが見られます</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県郡上市八幡町柳町264 ／ 最寄り駅：郡上八幡 ／ 交通案内：長良川鉄道　郡上八幡駅より岐阜バス「城下町プラザ」下車３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「落ち着いた離れと最高の朝食に大満足素晴らしい雰囲気の宿。アクセスも良い、離れは落ち着く。朝食は最高でした。クチコミの詳細はこちらから　https://review.travel.rakuten…　2026-07-31 09:02:53投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">日本の宿　ひだ高山　倭乃里</h3>
                  <span className="text-xs text-stone-400 ml-2">（にほんのやど　ひだたかやま　わのさと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥40,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/106058/106058_ka1.jpg" alt="日本の宿　ひだ高山　倭乃里 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室スイートのやすらぎの一室　絶景、美食、清流の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県高山市一之宮町1682 ／ 最寄り駅：高山 ／ 交通案内：高山駅よりお車で20分　（高山駅⇔倭乃里送迎あり／7日前までの予約制）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　（10台／無料／予約不要）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「日本の宿　ひだ高山　倭乃里は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">岩手　花巻温泉郷　鉛温泉　藤三旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（なまりおんせん　ふじさんりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9536/9536_ky.jpg" alt="岩手　花巻温泉郷　鉛温泉　藤三旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2024年6月宮沢賢治をテーマにした「なめとこ山サウナ」がグランドオープン</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県花巻市鉛中平75-1 ／ 最寄り駅：花巻 ／ 交通案内：新花巻駅より４０分・花巻駅より３０分（送迎バスあり、協力金：片道100円、予約必須）。花巻南ＩＣよりお車で２０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　60台先着順無料　湯治部のご利用は第2駐車場をご利用ください</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.3 ／ 立地 ★4.37 ／ 部屋 ★4.12 ／ 設備 ★4.11 ／ 風呂 ★4.64 ／ 食事 ★4.41</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉の泉質と雰囲気が最高、体調も回復温泉の泉質と雰囲気が一番良かったです。温泉に入ったあと、血の巡りが良くなり、体調も良くなりました。クチコミの詳細はこちらから　https://review.…　2026-10-09 16:39:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">花巻温泉郷　台温泉　いやしろの湯　ホテル三右ェ門</h3>
                  <span className="text-xs text-stone-400 ml-2">（はなまきおんせんきょう　だいおんせん　いやしろのゆ　さんえもん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/56915/56915_wa.jpg" alt="花巻温泉郷　台温泉　いやしろの湯　ホテル三右ェ門 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>閑静で落ち着いた昔変らぬ宿心。移り変わる風情とともに、台温泉で過ごすお時間をごゆるりとお寛ぎ下さい</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県花巻市台２－４５ ／ 最寄り駅：花巻 ／ 交通案内：ＪＲ東北本線　花巻駅より車で１５分／東北新幹線　新花巻駅より車で２０分／花巻空港より車で１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.04 ／ 立地 ★3.83 ／ 部屋 ★3.89 ／ 設備 ★3.74 ／ 風呂 ★4.03 ／ 食事 ★4.11</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「設備は古めだが清潔で食事も美味しく満足設備は多少古い感じはしますが、十分綺麗に行き届いた感じになっております。食事も十分でおいしかったです。また機会がありましたら伺いたいと思います。大変満足いたし…　2026-09-30 21:14:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">豆家</h3>
                  <span className="text-xs text-stone-400 ml-2">（まめや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥38,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/196237/196237.jpg" alt="豆家 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>十件の文化財と灯る石庭に包まれ過ごす一棟宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県丹波篠山市立町15 ／ 最寄り駅：篠山口 ／ 交通案内：篠山口駅よりお車で約１３分、舞鶴若狭自動車道丹南篠山口ＩＣより約１１分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３台　無料　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「豆家は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！岩手県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、岩手県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">中尊寺金色堂（平泉）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界遺産・平泉の象徴であり、奥州藤原氏の栄華を今に伝える極楽浄土の建築。堂全体が金箔で覆われ、螺鈿細工や象牙の装飾が施された国宝の美しさは言葉を失うほどです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">浄土ヶ浜</h3>
                <p className="text-xs text-stone-600 leading-relaxed">三陸復興国立公園を代表する三陸海岸の景勝地。白い鋭利な岩肌と青松、穏やかで透明度の高いエメラルドグリーンの入江が「まるで極楽浄土のよう」と称えられています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">龍泉洞</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三大鍾乳洞の一つで、国の天然記念物。洞内に湧き出る地底湖は世界有数の透明度を誇り、「ドラゴンブルー」と呼ばれる神秘的な青い輝きに吸い込まれそうになります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">小岩井農場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">岩手山の雄大な山麓に広がる日本最大級の民間総合農場。美しい一本桜や歴史あるレンガサイロ、搾りたての牛乳を使った絶品アイスクリームなどが楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 岩手県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 岩手県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      <HubRelatedPosts currentSlug="furusato-tax-traditional-kamado-rice-irori-stay" />
</div>
  );
}
