import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '世界遺産・熊野古道の大門坂紅葉＆那智の滝！南紀勝浦の大洞窟露天風呂宿×ふるさと納税厳選ガイド和歌山',
  description: '10月下旬〜11月中旬に見頃を迎える世界遺産「熊野古道・大門坂」と落差133mの名瀑「那智の滝」。石畳を彩るモミジと熊野那智大社、名湯・南紀勝浦温泉の老舗「ホテル浦島」「万清楼」「休暇村 南紀勝浦」で忘帰洞の波打ち際温泉や勝浦港直送の生マグロ会席を堪能。楽天ふるさと納税で実質2,000円。',
  keywords: ["世界遺産", "熊野古道の大門坂紅葉", "2026年最新秋旅", "和歌山", "温泉宿", "宿泊予約", "楽天トラベル"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/furusato-tax-katsuura-kumano-kodo-autumn-stay/"
  },
  openGraph: {
    title: '世界遺産・熊野古道の大門坂紅葉＆那智の滝！南紀勝浦の大洞窟露天風呂宿×ふるさと納税厳選ガイド和歌山',
    description: '10月下旬〜11月中旬に見頃を迎える世界遺産「熊野古道・大門坂」と落差133mの名瀑「那智の滝」。石畳を彩るモミジと熊野那智大社、名湯・南紀勝浦温泉の老舗「ホテル浦島」「万清楼」「休暇村 南紀勝浦」で忘帰洞の波打ち際温泉や勝浦港直送の生マグロ会席を堪能。楽天ふるさと納税で実質2,000円。',
    url: 'https://croud-travel.pages.dev/furusato-tax-katsuura-kumano-kodo-autumn-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FeatureArticlePage() {

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "世界遺産・熊野古道の大門坂紅葉＆那智の滝！南紀勝浦の大洞窟露天風呂宿×ふるさと納税完全ガイド【2026年最新秋旅】和歌山",
    "description": "10月下旬〜11月中旬に見頃を迎える世界遺産「熊野古道・大門坂」と落差133mの名瀑「那智の滝」。石畳を彩るモミジと熊野那智大社、名湯・南紀勝浦温泉の老舗「ホテル浦島」「万清楼」「休暇村 南紀勝浦」で忘帰洞の波打ち際温泉や勝浦港直送の生マグロ会席を堪能。楽天ふるさと納税で実質2,000円。",
    "url": "https://croud-travel.pages.dev/furusato-tax-katsuura-kumano-kodo-autumn-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "世界遺産・熊野古道の大門坂紅葉＆那智の滝！南紀勝浦の大洞窟露天風呂宿×ふるさと納税完全ガイド【2026年最新秋旅】和歌山", "item": "https://croud-travel.pages.dev/furusato-tax-katsuura-kumano-kodo-autumn-stay/" }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「南紀勝浦温泉 ホテル浦島」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「南紀勝浦温泉 ホテル浦島」へは、ＪＲ紀勢線 紀伊勝浦駅から徒歩6分で桟橋へ。最寄りの紀伊勝浦駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「南紀勝浦温泉 ホテル浦島」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「南紀勝浦温泉 ホテル浦島」は『楽天トラベルゴールドアワード受賞 圧倒的なスケールと開放感！天然洞窟温泉など湯巡りを楽しも。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「南紀勝浦温泉 ホテル浦島」と「南紀勝浦温泉 くつろぎの宿 料理旅館 万清楼。」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">和歌山・南紀勝浦温泉 熊野古道紅葉ウォーク＆大洞窟温泉宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              和歌山・南紀勝浦温泉＆熊野古道大門坂特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">世界遺産・熊野古道の大門坂紅葉＆那智の滝！南紀勝浦の大洞窟露天風呂宿×ふるさと納税厳選ガイド和歌山</h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月下旬〜11月中旬に見頃を迎える世界遺産「熊野古道・大門坂」と落差133mの名瀑「那智の滝」。石畳を彩るモミジと熊野那智大社、名湯・南紀勝浦温泉の老舗「ホテル浦島」「万清楼」「休暇村 南紀勝浦」で忘帰洞の波打ち際温泉や勝浦港直送の生マグロ会席を堪能。楽天ふるさと納税で実質2,000円。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 10月下旬〜11月中旬（熊野古道大門坂・那智の滝紅葉期）
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
              樹齢数百年の杉並木と錦秋の石畳！神仏宿る聖地・熊野と勝浦の生マグロ
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            紀伊山地の霊場と参詣道として世界遺産に登録される和歌山県・熊野。秋の絶景といえば、樹齢数百年の杉木立の間に苔むした石畳が続く「大門坂」から「熊野那智大社」「那智山青岸渡寺」へと至るルートです。10月下旬から11月中旬にかけて、落差133mを誇る日本一の名瀑「那智の滝」と三重塔を鮮やかな紅葉が包み込み、幽玄な美しさを放ちます。参詣の後は、太平洋の荒波が打ち寄せる天然の大洞窟温泉「忘帰洞」など個性豊かな源泉をめぐり、勝浦漁港で水揚げされた新鮮な生マグロや伊勢海老をふるさと納税トラベルクーポンでお得に満喫しましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">1</span>
                熊野古道・大門坂の石畳と那智の滝・三重塔紅葉
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                平安衣装をまとって歩く体験も人気の「大門坂」。朱塗りの那智山青岸渡寺三重塔と、真っ赤に染まる紅葉、豪快に流れ落ちる那智の滝が一枚の絵画のように重なる光景は圧巻です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">2</span>
                太平洋の荒波が迫る天然大洞窟露天風呂「忘帰洞」
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                「帰るのを忘れるほど心地よい」と称された勝浦名物・忘帰洞。硫黄が香る白濁の源泉掛け流しに浸かりながら、眼前に広がる太平洋の絶景と潮騒を五感で楽しめます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">3</span>
                勝浦漁港直送！一度も凍らせない「生マグロ」会席
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                延縄漁法による生マグロの水揚げ日本一を誇る勝浦港。モチモチとした食感と濃厚な旨味の生マグロ食べ比べ、秋から冬にかけて旬を迎える伊勢海老や熊野牛の鉄板焼きを堪能。
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
            
            <div key="katsuura_urashima" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>天然大洞窟露天風呂「忘帰洞」をはじめ館内6つの温泉めぐりが楽しめる巨大名物リゾート宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.22 <span className="text-stone-400 text-xs">(6361件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    南紀勝浦温泉　ホテル浦島
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 和歌山県東牟婁郡那智勝浦町勝浦1165-2 ｜ ＪＲ紀勢線　紀伊勝浦駅から徒歩6分で桟橋へ。更に専用ボート又は、シャトルバスで５分　詳しくは交通案内ページをご覧ください
                  </p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/54556/54556.jpg"
                        alt="南紀勝浦温泉　ホテル浦島"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      【楽天トラベルゴールドアワード受賞】圧倒的なスケールと開放感！天然洞窟温泉など湯巡りを楽しもう♪
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 【楽天トラベルゴールドアワード受賞】圧倒的なスケールと開放感！天然洞窟温泉など湯巡りを楽しもう♪...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> ＪＲ紀勢線　紀伊勝浦駅から徒歩6分で桟橋へ。更に専用ボート又は、シャトルバスで５分　詳しくは交通案内ページをご覧ください</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 8,250円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54556%2F54556.html"
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
    

            <div key="katsuura_manseirow" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>勝浦港の目の前に佇む純和風の料理旅館！生マグロ会席と上質な源泉掛け流しの湯</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.41 <span className="text-stone-400 text-xs">(824件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    南紀勝浦温泉　くつろぎの宿　料理旅館　万清楼
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 和歌山県東牟婁郡那智勝浦町勝浦448 ｜ JR「紀伊勝浦駅」より徒歩約7分／大阪から紀勢自動車道「すさみ南IC」経由で約3時間半
                  </p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/68247/68247.jpg"
                        alt="南紀勝浦温泉　くつろぎの宿　料理旅館　万清楼"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      【ホテル浦島の温泉も利用可】紀州勝浦産の生まぐろや南紀の食材を使った会席料理をお楽しみください。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 【ホテル浦島の温泉も利用可】紀州勝浦産の生まぐろや南紀の食材を使った会席料理をお楽しみください。...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> JR「紀伊勝浦駅」より徒歩約7分／大阪から紀勢自動車道「すさみ南IC」経由で約3時間半</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 14,850円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68247%2F68247.html"
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
    

            <div key="katsuura_qkamura" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>吉野熊野国立公園の高台から熊野灘を一望！絶景露天風呂と勝浦の海の幸バイキング</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.39 <span className="text-stone-400 text-xs">(630件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    勝浦温泉　休暇村　南紀勝浦
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 和歌山県東牟婁郡那智勝浦町宇久井719 ｜ 送迎バス（要予約）
                  </p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/75227/75227.jpg"
                        alt="勝浦温泉　休暇村　南紀勝浦"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      熊野灘の潮騒と朝陽に癒される高台のリゾートホテル
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> 熊野灘の潮騒と朝陽に癒される高台のリゾートホテル...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> 送迎バス（要予約）</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 11,000円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75227%2F75227.html"
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
              【1泊2日】南紀勝浦温泉 ホテル浦島を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 紀伊勝浦駅よりアクセス。ＪＲ紀勢線 紀伊勝浦駅から徒歩6分で桟橋へ。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「南紀勝浦温泉 ホテル浦島」にチェックイン。楽天トラベルゴールドアワード受賞 圧倒的なスケールと開放感！天然洞窟温泉など湯巡りを楽しもう♪などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「南紀勝浦温泉 ホテル浦島」の湯処へ。楽天トラベルゴールドアワード受賞 圧倒的なスケールと開放感！天然洞窟温とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「南紀勝浦温泉 ホテル浦島」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「南紀勝浦温泉 ホテル浦島」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「南紀勝浦温泉 ホテル浦島」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「南紀勝浦温泉 くつろぎの宿 料理旅館 万清楼。」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と南紀勝浦温泉 ホテル浦島の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「南紀勝浦温泉 ホテル浦島」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「南紀勝浦温泉 ホテル浦島」へは、ＪＲ紀勢線 紀伊勝浦駅から徒歩6分で桟橋へ。最寄りの紀伊勝浦駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「南紀勝浦温泉 ホテル浦島」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「南紀勝浦温泉 ホテル浦島」は『楽天トラベルゴールドアワード受賞 圧倒的なスケールと開放感！天然洞窟温泉など湯巡りを楽しも。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「南紀勝浦温泉 ホテル浦島」と「南紀勝浦温泉 くつろぎの宿 料理旅館 万清楼。」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
                href="/prefectures/tokushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                徳島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shimane"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                島根県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                香川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kumamoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                熊本県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="furusato-tax-katsuura-kumano-kodo-autumn-stay" />
</div>
        </section>

      </main>
  );
}
